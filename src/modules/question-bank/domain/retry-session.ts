import type { OptionKey, Question } from "./question";
import { createRandomSeed, hashStringWithSeed } from "./question-shuffle";

export type RetrySession = {
  questionIds: readonly string[];
  pendingIds: readonly string[];
  optionSeeds: Readonly<Record<string, number>>;
};

export type RetrySessionSummary = {
  total: number;
  pendingCount: number;
  completedCount: number;
  improvedCount: number;
  stillWrongIds: string[];
  isComplete: boolean;
};

/**
 * Menghasilkan seed pengacakan opsi baru yang dijamin berbeda dari seed soal sebelumnya.
 */
export function createNextRetryOptionSeed(
  questionId: string,
  currentSeed: number,
  batchSeed: number = createRandomSeed(),
): number {
  let nextSeed = hashStringWithSeed(`retry:${questionId}`, batchSeed);
  if (nextSeed === currentSeed) {
    nextSeed = ((nextSeed + 1) >>> 0) || 1;
  }
  return nextSeed;
}

/**
 * Memulai sesi ulang untuk daftar ID soal salah tanpa menghapus jawaban lama sampai soal benar-benar diisi ulang.
 */
export function startRetrySession(
  wrongQuestionIds: readonly string[],
  existingQuestionSeeds: Readonly<Record<string, number>>,
  fallbackPatternSeed: number,
  batchSeed: number = createRandomSeed(),
): RetrySession | null {
  const uniqueIds: string[] = [];
  const seen = new Set<string>();
  const optionSeeds: Record<string, number> = {};

  for (const id of wrongQuestionIds) {
    if (!id || seen.has(id)) continue;
    seen.add(id);
    uniqueIds.push(id);
    const currentSeed = existingQuestionSeeds[id] ?? fallbackPatternSeed;
    optionSeeds[id] = createNextRetryOptionSeed(id, currentSeed, batchSeed);
  }

  if (uniqueIds.length === 0) {
    return null;
  }

  return {
    questionIds: uniqueIds,
    pendingIds: [...uniqueIds],
    optionSeeds,
  };
}

/**
 * Mengulang satu soal spesifik — tetap mempertahankan daftar sesi aktif jika soal tersebut bagian darinya.
 */
export function startSingleQuestionRetry(
  currentSession: RetrySession | null,
  questionId: string,
  currentSeed: number,
  batchSeed: number = createRandomSeed(),
): RetrySession {
  const nextSeed = createNextRetryOptionSeed(questionId, currentSeed, batchSeed);

  if (currentSession && currentSession.questionIds.includes(questionId)) {
    const pendingIds = currentSession.pendingIds.includes(questionId)
      ? currentSession.pendingIds
      : [...currentSession.pendingIds, questionId];

    return {
      questionIds: currentSession.questionIds,
      pendingIds,
      optionSeeds: {
        ...currentSession.optionSeeds,
        [questionId]: nextSeed,
      },
    };
  }

  return {
    questionIds: [questionId],
    pendingIds: [questionId],
    optionSeeds: { [questionId]: nextSeed },
  };
}

/**
 * Menyelesaikan status pending sebuah soal saat jawaban barunya dipilih pada sesi ulang.
 */
export function commitRetryAnswer(
  currentSession: RetrySession | null,
  questionId: string,
): { nextSession: RetrySession | null; committedSeed: number | null } {
  if (!currentSession || !currentSession.pendingIds.includes(questionId)) {
    return { nextSession: currentSession, committedSeed: null };
  }

  const committedSeed = currentSession.optionSeeds[questionId] ?? null;
  const remainingSeeds = { ...currentSession.optionSeeds };
  delete remainingSeeds[questionId];

  return {
    nextSession: {
      questionIds: currentSession.questionIds,
      pendingIds: currentSession.pendingIds.filter((id) => id !== questionId),
      optionSeeds: remainingSeeds,
    },
    committedSeed,
  };
}

/**
 * Mengembalikan seed aktif suatu soal (memakai seed ulang sementara bila soal masih pending).
 */
export function getRetryEffectiveSeed(
  currentSession: RetrySession | null,
  questionId: string,
  savedQuestionSeed: number | undefined,
  fallbackPatternSeed: number,
): number {
  if (currentSession && currentSession.pendingIds.includes(questionId)) {
    return currentSession.optionSeeds[questionId] ?? savedQuestionSeed ?? fallbackPatternSeed;
  }
  return savedQuestionSeed ?? fallbackPatternSeed;
}

/**
 * Menyembunyikan sementara jawaban lama untuk soal yang sedang menunggu diisi ulang di UI.
 */
export function getRetryEffectiveAnswers(
  currentSession: RetrySession | null,
  selectedAnswers: Readonly<Record<string, OptionKey>>,
): Readonly<Record<string, OptionKey>> {
  if (!currentSession || currentSession.pendingIds.length === 0) {
    return selectedAnswers;
  }

  let hasMaskedEntry = false;
  const masked: Record<string, OptionKey> = { ...selectedAnswers };
  for (const id of currentSession.pendingIds) {
    if (masked[id] !== undefined) {
      delete masked[id];
      hasMaskedEntry = true;
    }
  }

  return hasMaskedEntry ? masked : selectedAnswers;
}

/**
 * Merangkum capaian sesi ulang aktif beserta daftar soal yang masih perlu diulang kembali.
 */
export function summarizeRetrySession(
  currentSession: RetrySession | null,
  scopedQuestions: readonly Question[],
  selectedAnswers: Readonly<Record<string, OptionKey>>,
  isQuestionNeedsRetry: (question: Question, selected: OptionKey | undefined) => boolean,
): RetrySessionSummary | null {
  if (!currentSession || currentSession.questionIds.length === 0) {
    return null;
  }

  const retryIdSet = new Set(currentSession.questionIds);
  const pendingIdSet = new Set(currentSession.pendingIds);
  const retryQuestions = scopedQuestions.filter((q) => retryIdSet.has(q.id));

  if (retryQuestions.length === 0) {
    return null;
  }

  let pendingCount = 0;
  const stillWrongIds: string[] = [];

  for (const question of retryQuestions) {
    if (pendingIdSet.has(question.id)) {
      pendingCount += 1;
      continue;
    }

    const ans = selectedAnswers[question.id];
    if (ans === undefined) {
      pendingCount += 1;
    } else if (isQuestionNeedsRetry(question, ans)) {
      stillWrongIds.push(question.id);
    }
  }

  const total = retryQuestions.length;
  const completedCount = total - pendingCount;
  const improvedCount = Math.max(0, completedCount - stillWrongIds.length);

  return {
    total,
    pendingCount,
    completedCount,
    improvedCount,
    stillWrongIds,
    isComplete: total > 0 && pendingCount === 0,
  };
}

