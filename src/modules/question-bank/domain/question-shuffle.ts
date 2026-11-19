import {
  OPTION_KEYS,
  TIU_PATTERN_IDS,
  TIU_PATTERNS,
  type OptionKey,
  type Question,
  type TiuPatternId,
} from "./question";
import { TIU_QUESTION_BANKS } from "@/modules/question-bank/data/tiu";

export function createRandomSeed(): number {
  return ((Date.now() ^ Math.floor(Math.random() * 0x7fffffff)) >>> 0) || 1;
}

export function createInitialPatternSeeds(
  existing?: Partial<Record<TiuPatternId, number>>,
): Record<TiuPatternId, number> {
  const result = {} as Record<TiuPatternId, number>;
  for (const id of TIU_PATTERN_IDS) {
    const saved = existing?.[id];
    result[id] =
      typeof saved === "number" && Number.isFinite(saved) && saved > 0
        ? saved >>> 0
        : createRandomSeed();
  }
  return result;
}

export function hashStringWithSeed(str: string, seed: number): number {
  let h = (seed ^ 0x811c9dc5) >>> 0;
  for (let i = 0; i < str.length; i += 1) {
    h ^= str.charCodeAt(i);
    h = Math.imul(h, 0x01000193) >>> 0;
  }
  return (h >>> 0) || 1;
}

function createSeededRng(seed: number): () => number {
  let state = (seed >>> 0) || 1;
  return () => {
    state = (state + 0x6d2b79f5) >>> 0;
    let t = Math.imul(state ^ (state >>> 15), 1 | state);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export function seededShuffle<T>(items: readonly T[], seed: number): T[] {
  const copy = [...items];
  const rng = createSeededRng(seed);
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(rng() * (i + 1));
    const temp = copy[i];
    copy[i] = copy[j];
    copy[j] = temp;
  }
  return copy;
}

/**
 * Mengacak urutan opsi jawaban A–E untuk satu soal berdasarkan seed,
 * sekaligus memperbarui kunci `answer` ke posisi huruf yang baru.
 */
export function shuffleQuestionOptions(
  question: Question,
  optionSeed: number,
): Question {
  if (!optionSeed) return question;
  const perQuestionSeed = hashStringWithSeed(`opt:${question.id}`, optionSeed);
  const shuffledRawOptions = seededShuffle(question.options, perQuestionSeed);

  let nextAnswer: OptionKey = question.answer;
  const remappedOptions = shuffledRawOptions.map((opt, idx) => {
    const newKey = OPTION_KEYS[idx];
    if (opt.key === question.answer) {
      nextAnswer = newKey;
    }
    return {
      key: newKey,
      text: opt.text,
    };
  });

  return {
    ...question,
    options: remappedOptions,
    answer: nextAnswer,
  };
}

export type PatternProgressSummary = {
  patternId: TiuPatternId;
  order: number;
  label: string;
  totalQuestions: number;
  answeredCount: number;
  correctCount: number;
  wrongCount: number;
  flaggedCount: number;
};

export function summarizeTiuProgress(
  selectedAnswers: Record<string, OptionKey>,
  flaggedQuestions: Record<string, boolean>,
  patternSeeds: Partial<Record<TiuPatternId, number>>,
  questionSeeds: Record<string, number>,
): {
  totalQuestions: number;
  totalAnswered: number;
  totalCorrect: number;
  patterns: PatternProgressSummary[];
} {
  let totalQuestions = 0;
  let totalAnswered = 0;
  let totalCorrect = 0;

  const patterns: PatternProgressSummary[] = TIU_PATTERN_IDS.map((patternId) => {
    const meta = TIU_PATTERNS[patternId];
    const bank = TIU_QUESTION_BANKS[patternId];
    const fallbackPatternSeed = patternSeeds[patternId] ?? 0;

    let answeredCount = 0;
    let correctCount = 0;
    let wrongCount = 0;
    let flaggedCount = 0;

    for (const question of bank) {
      if (flaggedQuestions[question.id]) {
        flaggedCount += 1;
      }
      const userAns = selectedAnswers[question.id];
      if (userAns !== undefined) {
        answeredCount += 1;
        const effectiveSeed = questionSeeds[question.id] ?? fallbackPatternSeed;
        const resolved = effectiveSeed
          ? shuffleQuestionOptions(question, effectiveSeed)
          : question;
        if (userAns === resolved.answer) {
          correctCount += 1;
        } else {
          wrongCount += 1;
        }
      }
    }

    totalQuestions += bank.length;
    totalAnswered += answeredCount;
    totalCorrect += correctCount;

    return {
      patternId,
      order: meta.order,
      label: meta.label,
      totalQuestions: bank.length,
      answeredCount,
      correctCount,
      wrongCount,
      flaggedCount,
    };
  });

  return {
    totalQuestions,
    totalAnswered,
    totalCorrect,
    patterns,
  };
}

