import {
  ALL_PATTERN_IDS,
  OPTION_KEYS,
  TIU_PATTERN_IDS,
  TKP_PATTERN_IDS,
  TWK_PATTERN_IDS,
  type OptionKey,
  type PracticePatternId,
  type QuestionSubtest,
  type TiuPatternId,
  type TkpPatternId,
  type TwkPatternId,
} from "@/modules/question-bank/domain/question";
import type { AllProgressSummaries } from "@/modules/question-bank/domain/progress-summary-types";
import { getPatternIdFromQuestionId } from "@/modules/question-bank/domain/shuffle-core";

export type ViewMode = "list" | "single";

export type StoredPracticeProgress = {
  selectedAnswers?: Record<string, OptionKey>;
  flaggedQuestions?: Record<string, boolean>;
  viewMode?: ViewMode;
  lastPattern?: TiuPatternId;
  patternSeeds?: Partial<Record<PracticePatternId, number>>;
  questionSeeds?: Record<string, number>;
};

export type SanitizedPracticeProgress = {
  selectedAnswers: Record<string, OptionKey>;
  flaggedQuestions: Record<string, boolean>;
  viewMode: ViewMode;
  lastPattern: TiuPatternId;
  patternSeeds: Partial<Record<PracticePatternId, number>>;
  questionSeeds: Record<string, number>;
};

export const TIU_PROGRESS_STORAGE_KEY = "wiyata-tiu-practice-progress-v1";
const TIU_PROGRESS_API_PATH = "/api/tiu/progress";

export function isTiuPatternId(value: unknown): value is TiuPatternId {
  return (
    typeof value === "string" &&
    (TIU_PATTERN_IDS as readonly string[]).includes(value)
  );
}

export function isTwkPatternId(value: unknown): value is TwkPatternId {
  return (
    typeof value === "string" &&
    (TWK_PATTERN_IDS as readonly string[]).includes(value)
  );
}

export function isTkpPatternId(value: unknown): value is TkpPatternId {
  return (
    typeof value === "string" &&
    (TKP_PATTERN_IDS as readonly string[]).includes(value)
  );
}

export function isPracticePatternId(value: unknown): value is PracticePatternId {
  return (
    typeof value === "string" &&
    (ALL_PATTERN_IDS as readonly string[]).includes(value)
  );
}

export function isOptionKey(value: unknown): value is OptionKey {
  return (
    typeof value === "string" &&
    (OPTION_KEYS as readonly string[]).includes(value)
  );
}

export function sanitizePracticeProgress(
  raw: unknown,
  fallbackPattern: TiuPatternId = "sinonim-antonim-akronim",
): SanitizedPracticeProgress {
  const input = (raw && typeof raw === "object" ? raw : {}) as StoredPracticeProgress;

  const selectedAnswers: Record<string, OptionKey> = {};
  if (input.selectedAnswers && typeof input.selectedAnswers === "object") {
    for (const [qId, ans] of Object.entries(input.selectedAnswers)) {
      if (isOptionKey(ans)) {
        selectedAnswers[qId] = ans;
      }
    }
  }

  const flaggedQuestions: Record<string, boolean> = {};
  if (input.flaggedQuestions && typeof input.flaggedQuestions === "object") {
    for (const [qId, flagged] of Object.entries(input.flaggedQuestions)) {
      if (flagged === true) {
        flaggedQuestions[qId] = true;
      }
    }
  }

  const patternSeeds: Partial<Record<PracticePatternId, number>> = {};
  if (input.patternSeeds && typeof input.patternSeeds === "object") {
    for (const patternId of ALL_PATTERN_IDS) {
      const seed = input.patternSeeds[patternId];
      if (typeof seed === "number" && Number.isFinite(seed) && seed > 0) {
        patternSeeds[patternId] = seed >>> 0;
      }
    }
  }

  const questionSeeds: Record<string, number> = {};
  if (input.questionSeeds && typeof input.questionSeeds === "object") {
    for (const [qId, qSeed] of Object.entries(input.questionSeeds)) {
      if (typeof qSeed === "number" && Number.isFinite(qSeed) && qSeed > 0) {
        questionSeeds[qId] = qSeed >>> 0;
      }
    }
  }

  return {
    selectedAnswers,
    flaggedQuestions,
    viewMode: input.viewMode === "single" ? "single" : "list",
    lastPattern: isTiuPatternId(input.lastPattern) ? input.lastPattern : fallbackPattern,
    patternSeeds,
    questionSeeds,
  };
}

/**
 * Mengacak & menggabungkan progres lokal browser dengan progres akun di server.
 * Setiap jawaban yang diadopsi dari sisi lokal tetap membawa seed pengacakan opsinya
 * agar kesesuaian opsi jawaban tetap konsisten.
 */
export function mergePracticeProgress(
  local: SanitizedPracticeProgress,
  remote: SanitizedPracticeProgress | null,
): SanitizedPracticeProgress {
  if (!remote) {
    return local;
  }

  const mergedAnswers: Record<string, OptionKey> = { ...remote.selectedAnswers };
  const mergedQuestionSeeds: Record<string, number> = { ...remote.questionSeeds };
  const mergedFlags: Record<string, boolean> = {
    ...local.flaggedQuestions,
    ...remote.flaggedQuestions,
  };
  const mergedPatternSeeds: Partial<Record<PracticePatternId, number>> = {
    ...local.patternSeeds,
    ...remote.patternSeeds,
  };

  for (const [qId, localAns] of Object.entries(local.selectedAnswers)) {
    if (mergedAnswers[qId] === undefined) {
      mergedAnswers[qId] = localAns;
      const localSeed = local.questionSeeds[qId];
      if (localSeed) {
        mergedQuestionSeeds[qId] = localSeed;
      } else {
        const patternId = getPatternIdFromQuestionId(qId);
        const fallbackPatternSeed = patternId ? local.patternSeeds[patternId] : undefined;
        if (fallbackPatternSeed) {
          mergedQuestionSeeds[qId] = fallbackPatternSeed;
        }
      }
    }
  }

  const hasRemoteAnswers =
    Object.keys(remote.selectedAnswers).length > 0 ||
    Object.keys(remote.flaggedQuestions).length > 0;

  return {
    selectedAnswers: mergedAnswers,
    flaggedQuestions: mergedFlags,
    viewMode: hasRemoteAnswers ? remote.viewMode : local.viewMode,
    lastPattern: hasRemoteAnswers ? remote.lastPattern : local.lastPattern,
    patternSeeds: mergedPatternSeeds,
    questionSeeds: mergedQuestionSeeds,
  };
}

export function readLocalSubtestPattern(
  subtest: QuestionSubtest,
): PracticePatternId | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(`wiyata-last-pattern-${subtest.toLowerCase()}-v1`);
    if (!raw) return null;
    if (subtest === "TWK") return isTwkPatternId(raw) ? raw : null;
    if (subtest === "TKP") return isTkpPatternId(raw) ? raw : null;
    return isTiuPatternId(raw) ? raw : null;
  } catch {
    return null;
  }
}

export function writeLocalSubtestPattern(
  subtest: QuestionSubtest,
  patternId: PracticePatternId,
): void {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(`wiyata-last-pattern-${subtest.toLowerCase()}-v1`, patternId);
  } catch {
    // Abaikan error penyimpanan browser
  }
}

export function readLocalTiuProgress(
  fallbackPattern?: TiuPatternId,
): SanitizedPracticeProgress | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(TIU_PROGRESS_STORAGE_KEY);
    if (!raw) return null;
    return sanitizePracticeProgress(JSON.parse(raw), fallbackPattern);
  } catch {
    return null;
  }
}

export function writeLocalTiuProgress(progress: StoredPracticeProgress): void {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(TIU_PROGRESS_STORAGE_KEY, JSON.stringify(progress));
  } catch {
    // Abaikan error kuota atau mode privat browser
  }
}

export async function fetchCloudTiuProgress(): Promise<{
  data: SanitizedPracticeProgress | null;
  schemaMissing: boolean;
  error: string | null;
}> {
  try {
    const res = await fetch(TIU_PROGRESS_API_PATH, {
      method: "GET",
      credentials: "same-origin",
      cache: "no-store",
    });

    if (!res.ok) {
      return {
        data: null,
        schemaMissing: false,
        error: `HTTP ${res.status}`,
      };
    }

    const json = (await res.json()) as {
      data?: unknown;
      schemaMissing?: boolean;
      error?: string | null;
    };

    return {
      data: json.data ? sanitizePracticeProgress(json.data) : null,
      schemaMissing: Boolean(json.schemaMissing),
      error: json.error ?? null,
    };
  } catch {
    return {
      data: null,
      schemaMissing: false,
      error: "Gagal terhubung ke server progres.",
    };
  }
}

export async function saveCloudTiuProgress(
  progress: SanitizedPracticeProgress,
  options?: { keepalive?: boolean },
): Promise<{ ok: boolean; schemaMissing: boolean; error: string | null }> {
  try {
    const res = await fetch(TIU_PROGRESS_API_PATH, {
      method: "PUT",
      credentials: "same-origin",
      keepalive: options?.keepalive ?? false,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(progress),
    });

    const json = (await res.json()) as {
      ok?: boolean;
      schemaMissing?: boolean;
      error?: string | null;
    };

    if (!res.ok) {
      return {
        ok: false,
        schemaMissing: Boolean(json.schemaMissing),
        error: json.error ?? `HTTP ${res.status}`,
      };
    }

    return {
      ok: Boolean(json.ok),
      schemaMissing: Boolean(json.schemaMissing),
      error: json.error ?? null,
    };
  } catch {
    return {
      ok: false,
      schemaMissing: false,
      error: "Gagal menyimpan progres ke server.",
    };
  }
}

export function hasLocalProgressDiff(
  local: SanitizedPracticeProgress,
  remote: SanitizedPracticeProgress | null,
): boolean {
  const remoteAnswers = remote?.selectedAnswers ?? {};
  const remoteFlags = remote?.flaggedQuestions ?? {};
  for (const qId of Object.keys(local.selectedAnswers)) {
    if (remoteAnswers[qId] === undefined) return true;
  }
  for (const qId of Object.keys(local.flaggedQuestions)) {
    if (remoteFlags[qId] === undefined) return true;
  }
  return false;
}

export async function fetchProgressSummaries(
  progress: SanitizedPracticeProgress,
): Promise<AllProgressSummaries | null> {
  try {
    const res = await fetch("/api/progress/summary", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(progress),
    });
    if (!res.ok) return null;
    return (await res.json()) as AllProgressSummaries;
  } catch {
    return null;
  }
}
