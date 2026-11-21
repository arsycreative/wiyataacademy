import type { OptionKey, QuestionSubtest } from "@/modules/question-bank/domain/question";
import { isOptionKey } from "@/modules/question-bank/infrastructure/tiu-progress-sync";
import {
  isTryoutMode,
  TRYOUT_MODE_CONFIGS,
  type TryoutEvaluation,
  type TryoutMode,
} from "@/modules/tryout/domain/tryout-config";

export const TRYOUT_ACTIVE_STORAGE_KEY = "wiyata-skd-tryout-active-v1";
export const TRYOUT_HISTORY_STORAGE_KEY = "wiyata-skd-tryout-history-v1";
const MAX_HISTORY_ITEMS = 20;

export type ActiveTryoutSession = {
  id: string;
  mode: TryoutMode;
  presetId: string;
  packageLabel: string;
  seed: number;
  startedAtMs: number;
  endsAtMs: number;
  durationLimitSec: number;
  answers: Record<string, OptionKey>;
  flagged: Record<string, boolean>;
  currentIndex: number;
};

export type TryoutHistoryRecord = {
  id: string;
  completedAt: string;
  mode: TryoutMode;
  presetId: string;
  packageLabel: string;
  seed: number;
  durationUsedSec: number;
  durationLimitSec: number;
  totalScore: number;
  maxScore: number;
  passed: boolean;
  subtests: Record<
    QuestionSubtest,
    {
      score: number;
      maxScore: number;
      passingGrade: number;
      passed: boolean;
      correctCount: number;
      answeredCount: number;
      questionCount: number;
    }
  >;
  answers: Record<string, OptionKey>;
  flagged: Record<string, boolean>;
};

function sanitizeAnswers(raw: unknown): Record<string, OptionKey> {
  const out: Record<string, OptionKey> = {};
  if (raw && typeof raw === "object") {
    for (const [qId, val] of Object.entries(raw)) {
      if (isOptionKey(val)) {
        out[qId] = val;
      }
    }
  }
  return out;
}

function sanitizeFlagged(raw: unknown): Record<string, boolean> {
  const out: Record<string, boolean> = {};
  if (raw && typeof raw === "object") {
    for (const [qId, val] of Object.entries(raw)) {
      if (val === true) {
        out[qId] = true;
      }
    }
  }
  return out;
}

export function sanitizeActiveTryoutSession(raw: unknown): ActiveTryoutSession | null {
  if (!raw || typeof raw !== "object") return null;
  const obj = raw as Partial<ActiveTryoutSession>;
  if (!isTryoutMode(obj.mode)) return null;
  if (typeof obj.id !== "string" || !obj.id.trim()) return null;
  if (typeof obj.seed !== "number" || !Number.isFinite(obj.seed) || obj.seed <= 0) return null;
  if (typeof obj.startedAtMs !== "number" || !Number.isFinite(obj.startedAtMs)) return null;
  if (typeof obj.endsAtMs !== "number" || !Number.isFinite(obj.endsAtMs)) return null;

  const config = TRYOUT_MODE_CONFIGS[obj.mode];
  const durationLimitSec =
    typeof obj.durationLimitSec === "number" && obj.durationLimitSec > 0
      ? Math.round(obj.durationLimitSec)
      : config.durationSec;

  const currentIndex =
    typeof obj.currentIndex === "number" && Number.isFinite(obj.currentIndex)
      ? Math.max(0, Math.min(config.totalQuestions - 1, Math.floor(obj.currentIndex)))
      : 0;

  return {
    id: obj.id,
    mode: obj.mode,
    presetId: typeof obj.presetId === "string" && obj.presetId ? obj.presetId : "custom",
    packageLabel:
      typeof obj.packageLabel === "string" && obj.packageLabel.trim()
        ? obj.packageLabel
        : config.label,
    seed: obj.seed >>> 0,
    startedAtMs: obj.startedAtMs,
    endsAtMs: obj.endsAtMs,
    durationLimitSec,
    answers: sanitizeAnswers(obj.answers),
    flagged: sanitizeFlagged(obj.flagged),
    currentIndex,
  };
}

export function readActiveTryoutSession(): ActiveTryoutSession | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(TRYOUT_ACTIVE_STORAGE_KEY);
    if (!raw) return null;
    return sanitizeActiveTryoutSession(JSON.parse(raw));
  } catch {
    return null;
  }
}

export function writeActiveTryoutSession(session: ActiveTryoutSession): void {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(TRYOUT_ACTIVE_STORAGE_KEY, JSON.stringify(session));
  } catch {
    // Abaikan error kuota/privasi browser
  }
}

export function clearActiveTryoutSession(): void {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.removeItem(TRYOUT_ACTIVE_STORAGE_KEY);
  } catch {
    // Abaikan error penyimpanan browser
  }
}

export function buildTryoutHistoryRecord(
  session: ActiveTryoutSession,
  evaluation: TryoutEvaluation,
  completedAtIso: string = new Date().toISOString(),
): TryoutHistoryRecord {
  return {
    id: session.id,
    completedAt: completedAtIso,
    mode: session.mode,
    presetId: session.presetId,
    packageLabel: session.packageLabel,
    seed: session.seed,
    durationUsedSec: evaluation.durationUsedSec,
    durationLimitSec: session.durationLimitSec,
    totalScore: evaluation.totalScore,
    maxScore: evaluation.maxScore,
    passed: evaluation.passed,
    subtests: {
      TWK: {
        score: evaluation.subtests.TWK.score,
        maxScore: evaluation.subtests.TWK.maxScore,
        passingGrade: evaluation.subtests.TWK.passingGrade,
        passed: evaluation.subtests.TWK.passed,
        correctCount: evaluation.subtests.TWK.correctCount,
        answeredCount: evaluation.subtests.TWK.answeredCount,
        questionCount: evaluation.subtests.TWK.questionCount,
      },
      TIU: {
        score: evaluation.subtests.TIU.score,
        maxScore: evaluation.subtests.TIU.maxScore,
        passingGrade: evaluation.subtests.TIU.passingGrade,
        passed: evaluation.subtests.TIU.passed,
        correctCount: evaluation.subtests.TIU.correctCount,
        answeredCount: evaluation.subtests.TIU.answeredCount,
        questionCount: evaluation.subtests.TIU.questionCount,
      },
      TKP: {
        score: evaluation.subtests.TKP.score,
        maxScore: evaluation.subtests.TKP.maxScore,
        passingGrade: evaluation.subtests.TKP.passingGrade,
        passed: evaluation.subtests.TKP.passed,
        correctCount: evaluation.subtests.TKP.correctCount,
        answeredCount: evaluation.subtests.TKP.answeredCount,
        questionCount: evaluation.subtests.TKP.questionCount,
      },
    },
    answers: sanitizeAnswers(session.answers),
    flagged: sanitizeFlagged(session.flagged),
  };
}

export function readTryoutHistory(): TryoutHistoryRecord[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(TRYOUT_HISTORY_STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed.filter((item): item is TryoutHistoryRecord => {
      if (!item || typeof item !== "object") return false;
      const rec = item as Partial<TryoutHistoryRecord>;
      return (
        typeof rec.id === "string" &&
        isTryoutMode(rec.mode) &&
        typeof rec.seed === "number" &&
        rec.seed > 0 &&
        typeof rec.totalScore === "number" &&
        Boolean(rec.subtests?.TWK && rec.subtests?.TIU && rec.subtests?.TKP)
      );
    });
  } catch {
    return [];
  }
}

export function appendTryoutHistory(record: TryoutHistoryRecord): TryoutHistoryRecord[] {
  const existing = readTryoutHistory().filter((item) => item.id !== record.id);
  const next = [record, ...existing].slice(0, MAX_HISTORY_ITEMS);
  if (typeof window !== "undefined") {
    try {
      window.localStorage.setItem(TRYOUT_HISTORY_STORAGE_KEY, JSON.stringify(next));
    } catch {
      // Abaikan error penyimpanan browser
    }
  }
  return next;
}

export function deleteTryoutHistoryItem(recordId: string): TryoutHistoryRecord[] {
  const next = readTryoutHistory().filter((item) => item.id !== recordId);
  if (typeof window !== "undefined") {
    try {
      window.localStorage.setItem(TRYOUT_HISTORY_STORAGE_KEY, JSON.stringify(next));
    } catch {
      // Abaikan error penyimpanan browser
    }
  }
  return next;
}

