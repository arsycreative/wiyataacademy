import "server-only";

import type { PostgrestError } from "@supabase/supabase-js";

import type { OptionKey, QuestionSubtest } from "@/modules/question-bank/domain/question";
import { isOptionKey } from "@/modules/question-bank/infrastructure/tiu-progress-sync";
import {
  computeTopPercent,
  type LeaderboardEntry,
  type LeaderboardResponse,
  type LeaderboardScope,
  type TryoutAttemptRankSummary,
} from "@/modules/tryout/domain/leaderboard";
import {
  isTryoutMode,
  TRYOUT_MODE_CONFIGS,
  type TryoutEvaluation,
  type TryoutMode,
} from "@/modules/tryout/domain/tryout-config";
import type { TryoutHistoryRecord } from "@/modules/tryout/infrastructure/tryout-storage";
import { createSupabaseServerClient } from "@/shared/supabase/server";

type TryoutAttemptRow = {
  id: string;
  client_attempt_id: string;
  user_id: string;
  mode: string;
  preset_id: string;
  package_label: string;
  seed: number;
  twk_score: number;
  tiu_score: number;
  tkp_score: number;
  total_score: number;
  max_score: number;
  passed: boolean;
  duration_used_sec: number;
  duration_limit_sec: number;
  subtests_json: unknown;
  answers_json: unknown;
  flagged_json: unknown;
  completed_at: string;
};

type RawLeaderboardRpcPayload = {
  scope?: string;
  totalParticipants?: number;
  passedParticipants?: number;
  averageScore?: number;
  entries?: LeaderboardEntry[];
  currentUserEntry?: LeaderboardEntry | null;
};

export function isTryoutSchemaMissingError(error: PostgrestError | null | undefined): boolean {
  if (!error) return false;
  const code = error.code ?? "";
  const msg = (error.message ?? "").toLowerCase();
  return (
    code === "42P01" ||
    code === "42883" ||
    code === "PGRST202" ||
    code === "PGRST205" ||
    msg.includes("does not exist") ||
    msg.includes("could not find the table") ||
    msg.includes("could not find the function")
  );
}

function sanitizeJsonAnswers(raw: unknown): Record<string, OptionKey> {
  const out: Record<string, OptionKey> = {};
  if (raw && typeof raw === "object") {
    for (const [key, val] of Object.entries(raw)) {
      if (isOptionKey(val)) {
        out[key] = val;
      }
    }
  }
  return out;
}

function sanitizeJsonFlagged(raw: unknown): Record<string, boolean> {
  const out: Record<string, boolean> = {};
  if (raw && typeof raw === "object") {
    for (const [key, val] of Object.entries(raw)) {
      if (val === true) {
        out[key] = true;
      }
    }
  }
  return out;
}

function buildFallbackSubtests(
  mode: TryoutMode,
  row: Pick<TryoutAttemptRow, "twk_score" | "tiu_score" | "tkp_score">,
): TryoutHistoryRecord["subtests"] {
  const cfg = TRYOUT_MODE_CONFIGS[mode];
  return {
    TWK: {
      score: row.twk_score,
      maxScore: cfg.subtests.TWK.maxScore,
      passingGrade: cfg.subtests.TWK.passingGrade,
      passed: row.twk_score >= cfg.subtests.TWK.passingGrade,
      correctCount: Math.floor(row.twk_score / 5),
      answeredCount: cfg.subtests.TWK.questionCount,
      questionCount: cfg.subtests.TWK.questionCount,
    },
    TIU: {
      score: row.tiu_score,
      maxScore: cfg.subtests.TIU.maxScore,
      passingGrade: cfg.subtests.TIU.passingGrade,
      passed: row.tiu_score >= cfg.subtests.TIU.passingGrade,
      correctCount: Math.floor(row.tiu_score / 5),
      answeredCount: cfg.subtests.TIU.questionCount,
      questionCount: cfg.subtests.TIU.questionCount,
    },
    TKP: {
      score: row.tkp_score,
      maxScore: cfg.subtests.TKP.maxScore,
      passingGrade: cfg.subtests.TKP.passingGrade,
      passed: row.tkp_score >= cfg.subtests.TKP.passingGrade,
      correctCount: 0,
      answeredCount: cfg.subtests.TKP.questionCount,
      questionCount: cfg.subtests.TKP.questionCount,
    },
  };
}

function parseSubtestsJson(
  raw: unknown,
  mode: TryoutMode,
  row: Pick<TryoutAttemptRow, "twk_score" | "tiu_score" | "tkp_score">,
): TryoutHistoryRecord["subtests"] {
  const fallback = buildFallbackSubtests(mode, row);
  if (!raw || typeof raw !== "object") return fallback;

  const obj = raw as Partial<Record<QuestionSubtest, Record<string, unknown>>>;
  const result = { ...fallback };
  for (const sub of ["TWK", "TIU", "TKP"] as const) {
    const entry = obj[sub];
    if (entry && typeof entry.score === "number") {
      result[sub] = {
        score: entry.score,
        maxScore:
          typeof entry.maxScore === "number" ? entry.maxScore : fallback[sub].maxScore,
        passingGrade:
          typeof entry.passingGrade === "number"
            ? entry.passingGrade
            : fallback[sub].passingGrade,
        passed:
          typeof entry.passed === "boolean" ? entry.passed : fallback[sub].passed,
        correctCount:
          typeof entry.correctCount === "number"
            ? entry.correctCount
            : fallback[sub].correctCount,
        answeredCount:
          typeof entry.answeredCount === "number"
            ? entry.answeredCount
            : fallback[sub].answeredCount,
        questionCount:
          typeof entry.questionCount === "number"
            ? entry.questionCount
            : fallback[sub].questionCount,
      };
    }
  }
  return result;
}

export function mapAttemptRowToHistoryRecord(
  row: TryoutAttemptRow,
): TryoutHistoryRecord | null {
  if (!isTryoutMode(row.mode)) return null;
  const mode: TryoutMode = row.mode;
  return {
    id: row.client_attempt_id,
    completedAt: row.completed_at,
    mode,
    presetId: row.preset_id,
    packageLabel: row.package_label,
    seed: Number(row.seed) >>> 0,
    durationUsedSec: row.duration_used_sec,
    durationLimitSec: row.duration_limit_sec,
    totalScore: row.total_score,
    maxScore: row.max_score,
    passed: row.passed,
    subtests: parseSubtestsJson(row.subtests_json, mode, row),
    answers: sanitizeJsonAnswers(row.answers_json),
    flagged: sanitizeJsonFlagged(row.flagged_json),
  };
}

export async function saveTryoutAttemptToCloud(params: {
  userId: string;
  clientAttemptId: string;
  mode: TryoutMode;
  presetId: string;
  packageLabel: string;
  seed: number;
  durationLimitSec: number;
  evaluation: TryoutEvaluation;
  answers: Readonly<Record<string, OptionKey>>;
  flagged: Readonly<Record<string, boolean>>;
  completedAtIso?: string;
}): Promise<{ saved: boolean; schemaMissing: boolean }> {
  const supabase = await createSupabaseServerClient();
  if (!supabase) {
    return { saved: false, schemaMissing: false };
  }

  const subtestsJson = {
    TWK: {
      score: params.evaluation.subtests.TWK.score,
      maxScore: params.evaluation.subtests.TWK.maxScore,
      passingGrade: params.evaluation.subtests.TWK.passingGrade,
      passed: params.evaluation.subtests.TWK.passed,
      correctCount: params.evaluation.subtests.TWK.correctCount,
      answeredCount: params.evaluation.subtests.TWK.answeredCount,
      questionCount: params.evaluation.subtests.TWK.questionCount,
    },
    TIU: {
      score: params.evaluation.subtests.TIU.score,
      maxScore: params.evaluation.subtests.TIU.maxScore,
      passingGrade: params.evaluation.subtests.TIU.passingGrade,
      passed: params.evaluation.subtests.TIU.passed,
      correctCount: params.evaluation.subtests.TIU.correctCount,
      answeredCount: params.evaluation.subtests.TIU.answeredCount,
      questionCount: params.evaluation.subtests.TIU.questionCount,
    },
    TKP: {
      score: params.evaluation.subtests.TKP.score,
      maxScore: params.evaluation.subtests.TKP.maxScore,
      passingGrade: params.evaluation.subtests.TKP.passingGrade,
      passed: params.evaluation.subtests.TKP.passed,
      correctCount: params.evaluation.subtests.TKP.correctCount,
      answeredCount: params.evaluation.subtests.TKP.answeredCount,
      questionCount: params.evaluation.subtests.TKP.questionCount,
    },
  };

  const { error } = await supabase.from("tryout_attempts").upsert(
    {
      client_attempt_id: params.clientAttemptId,
      user_id: params.userId,
      mode: params.mode,
      preset_id: params.presetId,
      package_label: params.packageLabel,
      seed: params.seed >>> 0,
      twk_score: params.evaluation.subtests.TWK.score,
      tiu_score: params.evaluation.subtests.TIU.score,
      tkp_score: params.evaluation.subtests.TKP.score,
      total_score: params.evaluation.totalScore,
      max_score: params.evaluation.maxScore,
      passed: params.evaluation.passed,
      duration_used_sec: params.evaluation.durationUsedSec,
      duration_limit_sec: params.durationLimitSec,
      subtests_json: subtestsJson,
      answers_json: params.answers,
      flagged_json: params.flagged,
      completed_at: params.completedAtIso ?? new Date().toISOString(),
    },
    { onConflict: "user_id,client_attempt_id" },
  );

  if (error) {
    return {
      saved: false,
      schemaMissing: isTryoutSchemaMissingError(error),
    };
  }

  return { saved: true, schemaMissing: false };
}

export async function listUserTryoutAttemptsFromCloud(
  userId: string,
  limit: number = 30,
): Promise<{
  records: TryoutHistoryRecord[];
  schemaMissing: boolean;
}> {
  const supabase = await createSupabaseServerClient();
  if (!supabase) {
    return { records: [], schemaMissing: false };
  }

  const { data, error } = await supabase
    .from("tryout_attempts")
    .select("*")
    .eq("user_id", userId)
    .order("completed_at", { ascending: false })
    .limit(limit);

  if (error) {
    return {
      records: [],
      schemaMissing: isTryoutSchemaMissingError(error),
    };
  }

  const records: TryoutHistoryRecord[] = [];
  for (const row of (data ?? []) as TryoutAttemptRow[]) {
    const mapped = mapAttemptRowToHistoryRecord(row);
    if (mapped) {
      records.push(mapped);
    }
  }

  return { records, schemaMissing: false };
}

export async function deleteUserTryoutAttemptFromCloud(
  userId: string,
  clientAttemptId: string,
): Promise<{ deleted: boolean; schemaMissing: boolean }> {
  const supabase = await createSupabaseServerClient();
  if (!supabase) {
    return { deleted: false, schemaMissing: false };
  }

  const { error } = await supabase
    .from("tryout_attempts")
    .delete()
    .eq("user_id", userId)
    .eq("client_attempt_id", clientAttemptId);

  if (error) {
    return {
      deleted: false,
      schemaMissing: isTryoutSchemaMissingError(error),
    };
  }

  return { deleted: true, schemaMissing: false };
}

export async function getNationalLeaderboard(
  scope: LeaderboardScope = "all-official",
  limit: number = 20,
): Promise<LeaderboardResponse> {
  const empty: LeaderboardResponse = {
    scope,
    totalParticipants: 0,
    passedParticipants: 0,
    averageScore: 0,
    entries: [],
    currentUserEntry: null,
    currentUserTopPercent: null,
    schemaMissing: false,
  };

  const supabase = await createSupabaseServerClient();
  if (!supabase) {
    return empty;
  }

  const { data, error } = await supabase.rpc("get_tryout_leaderboard", {
    p_scope: scope,
    p_limit: Math.max(1, Math.min(limit, 50)),
  });

  if (error) {
    return {
      ...empty,
      schemaMissing: isTryoutSchemaMissingError(error),
    };
  }

  const payload = (data ?? {}) as RawLeaderboardRpcPayload;
  const totalParticipants = Number(payload.totalParticipants ?? 0);
  const currentUserEntry = payload.currentUserEntry ?? null;
  const currentUserTopPercent =
    currentUserEntry && totalParticipants > 0
      ? computeTopPercent(currentUserEntry.rank, totalParticipants)
      : null;

  return {
    scope,
    totalParticipants,
    passedParticipants: Number(payload.passedParticipants ?? 0),
    averageScore: Number(payload.averageScore ?? 0),
    entries: Array.isArray(payload.entries) ? payload.entries : [],
    currentUserEntry,
    currentUserTopPercent,
    schemaMissing: false,
  };
}

export async function getAttemptRankSummary(
  scope: LeaderboardScope,
): Promise<TryoutAttemptRankSummary | null> {
  const leaderboard = await getNationalLeaderboard(scope, 1);
  if (
    leaderboard.schemaMissing ||
    !leaderboard.currentUserEntry ||
    leaderboard.totalParticipants <= 0
  ) {
    return null;
  }

  return {
    scope,
    rank: leaderboard.currentUserEntry.rank,
    totalParticipants: leaderboard.totalParticipants,
    topPercent:
      leaderboard.currentUserTopPercent ??
      computeTopPercent(
        leaderboard.currentUserEntry.rank,
        leaderboard.totalParticipants,
      ),
    averageScore: leaderboard.averageScore,
  };
}

