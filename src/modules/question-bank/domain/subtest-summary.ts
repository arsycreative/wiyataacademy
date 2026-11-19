import { TIU_QUESTION_BANKS, getPatternStats } from "@/modules/question-bank/data/tiu";
import { TWK_QUESTION_BANKS, getTwkPatternStats } from "@/modules/question-bank/data/twk";
import {
  TIU_PATTERN_IDS,
  TIU_PATTERNS,
  TWK_PATTERN_IDS,
  TWK_PATTERNS,
  type OptionKey,
  type PracticePatternId,
  type Question,
  type QuestionSubtest,
  type TiuPatternId,
  type TwkPatternId,
} from "./question";
import {
  createInitialPatternSeeds,
  createRandomSeed,
  shuffleQuestionOptions,
} from "./question-shuffle";

export type SubtestPatternProgressSummary = {
  patternId: PracticePatternId;
  label: string;
  order: number;
  totalQuestions: number;
  answeredCount: number;
  correctCount: number;
  flaggedCount: number;
};

export type SubtestProgressSummary = {
  patterns: SubtestPatternProgressSummary[];
  totalQuestions: number;
  totalAnswered: number;
  totalCorrect: number;
  totalFlagged: number;
};

/**
 * Mengisi seed pengacakan awal untuk seluruh pola TIU dan pilar TWK agar stabil di satu sesi.
 */
export function createInitialAllPatternSeeds(
  existingSeeds?: Partial<Record<PracticePatternId, number>>,
): Record<PracticePatternId, number> {
  const tiuSeeds = createInitialPatternSeeds(
    existingSeeds as Partial<Record<TiuPatternId, number>> | undefined,
  );
  const seeds = { ...tiuSeeds } as Record<PracticePatternId, number>;

  for (const twkId of TWK_PATTERN_IDS) {
    const existing = existingSeeds?.[twkId];
    seeds[twkId] =
      typeof existing === "number" && Number.isFinite(existing) && existing > 0
        ? existing >>> 0
        : createRandomSeed();
  }

  return seeds;
}

/**
 * Merangkum progres pengerjaan soal untuk seluruh 5 pilar TWK secara sinkron dengan seed opsi.
 */
export function summarizeTwkProgress(
  selectedAnswers: Readonly<Record<string, OptionKey>>,
  flaggedQuestions: Readonly<Record<string, boolean>>,
  patternSeeds: Partial<Record<PracticePatternId, number>>,
  questionSeeds: Readonly<Record<string, number>>,
): SubtestProgressSummary {
  let totalQuestions = 0;
  let totalAnswered = 0;
  let totalCorrect = 0;
  let totalFlagged = 0;

  const patterns: SubtestPatternProgressSummary[] = TWK_PATTERN_IDS.map((patternId) => {
    const meta = TWK_PATTERNS[patternId];
    const bank = TWK_QUESTION_BANKS[patternId];
    const fallbackPatternSeed = patternSeeds[patternId] ?? 0;

    let answeredCount = 0;
    let correctCount = 0;
    let flaggedCount = 0;

    for (const question of bank) {
      const selected = selectedAnswers[question.id];
      if (selected !== undefined) {
        answeredCount += 1;
        const effectiveSeed = questionSeeds[question.id] ?? fallbackPatternSeed;
        const resolved = effectiveSeed
          ? shuffleQuestionOptions(question, effectiveSeed)
          : question;
        if (selected === resolved.answer) {
          correctCount += 1;
        }
      }
      if (flaggedQuestions[question.id]) {
        flaggedCount += 1;
      }
    }

    totalQuestions += bank.length;
    totalAnswered += answeredCount;
    totalCorrect += correctCount;
    totalFlagged += flaggedCount;

    return {
      patternId: meta.id,
      label: meta.label,
      order: meta.order,
      totalQuestions: bank.length,
      answeredCount,
      correctCount,
      flaggedCount,
    };
  });

  return {
    patterns,
    totalQuestions,
    totalAnswered,
    totalCorrect,
    totalFlagged,
  };
}

export function isTiuPattern(value: unknown): value is TiuPatternId {
  return (
    typeof value === "string" &&
    (TIU_PATTERN_IDS as readonly string[]).includes(value)
  );
}

export function isTwkPattern(value: unknown): value is TwkPatternId {
  return (
    typeof value === "string" &&
    (TWK_PATTERN_IDS as readonly string[]).includes(value)
  );
}

export type SubtestPatternMeta = {
  id: PracticePatternId;
  order: number;
  label: string;
  description: string;
  subPatterns: readonly string[];
};

export function getSubtestCatalog(subtest: QuestionSubtest) {
  if (subtest === "TWK") {
    return {
      subtest: "TWK" as const,
      defaultPattern: "nasionalisme" as PracticePatternId,
      patternIds: TWK_PATTERN_IDS as readonly PracticePatternId[],
      patternCatalog: TWK_PATTERNS as Record<string, SubtestPatternMeta>,
      questionBanks: TWK_QUESTION_BANKS as Record<string, readonly Question[]>,
      patternStats: getTwkPatternStats(),
    };
  }

  return {
    subtest: "TIU" as const,
    defaultPattern: "sinonim-antonim-akronim" as PracticePatternId,
    patternIds: TIU_PATTERN_IDS as readonly PracticePatternId[],
    patternCatalog: TIU_PATTERNS as Record<string, SubtestPatternMeta>,
    questionBanks: TIU_QUESTION_BANKS as Record<string, readonly Question[]>,
    patternStats: getPatternStats(),
  };
}
