import { TIU_QUESTION_BANKS, getPatternStats } from "@/modules/question-bank/data/tiu";
import { TKP_QUESTION_BANKS, getTkpPatternStats } from "@/modules/question-bank/data/tkp";
import { TWK_QUESTION_BANKS, getTwkPatternStats } from "@/modules/question-bank/data/twk";
import {
  OPTION_KEYS,
  TIU_PATTERN_IDS,
  TIU_PATTERNS,
  TKP_PATTERN_IDS,
  TKP_PATTERNS,
  TWK_PATTERN_IDS,
  TWK_PATTERNS,
  type OptionKey,
  type OptionScores,
  type PracticePatternId,
  type Question,
  type QuestionSubtest,
  type TiuPatternId,
  type TkpPatternId,
  type TwkPatternId,
} from "./question";
import {
  createInitialPatternSeeds,
  createRandomSeed,
  hashStringWithSeed,
  seededShuffle,
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
  earnedPoints: number;
  maxAnsweredPoints: number;
};

export type SubtestProgressSummary = {
  patterns: SubtestPatternProgressSummary[];
  totalQuestions: number;
  totalAnswered: number;
  totalCorrect: number;
  totalFlagged: number;
  totalEarnedPoints: number;
  totalMaxAnsweredPoints: number;
};

/**
 * Mengacak opsi soal sekaligus memetakan skor TKP (1–5) ke huruf baru yang sejajar.
 */
export function shuffleQuestionWithScores(
  question: Question,
  seed: number,
): Question {
  if (!seed || seed <= 0) {
    return question;
  }

  if (!question.optionScores) {
    return shuffleQuestionOptions(question, seed);
  }

  const saltSeed = hashStringWithSeed(question.id, seed);
  const shuffledItems = seededShuffle(
    question.options.map((option) => ({
      text: option.text,
      isOptimal: option.key === question.answer,
      score: question.optionScores![option.key],
    })),
    saltSeed,
  );

  const nextScores: OptionScores = {
    A: 1,
    B: 1,
    C: 1,
    D: 1,
    E: 1,
  };
  let nextAnswer = question.answer;

  const nextOptions = shuffledItems.map((item, idx) => {
    const key = OPTION_KEYS[idx];
    nextScores[key] = item.score;
    if (item.isOptimal) {
      nextAnswer = key;
    }
    return { key, text: item.text };
  });

  return {
    ...question,
    options: nextOptions,
    answer: nextAnswer,
    optionScores: nextScores,
  };
}

/**
 * Mengisi seed pengacakan awal untuk seluruh pola TIU, pilar TWK, dan aspek TKP.
 */
export function createInitialAllPatternSeeds(
  existingSeeds?: Partial<Record<PracticePatternId, number>>,
): Record<PracticePatternId, number> {
  const tiuSeeds = createInitialPatternSeeds(
    existingSeeds as Partial<Record<TiuPatternId, number>> | undefined,
  );
  const seeds = { ...tiuSeeds } as Record<PracticePatternId, number>;

  for (const id of [...TWK_PATTERN_IDS, ...TKP_PATTERN_IDS]) {
    const existing = existingSeeds?.[id];
    seeds[id] =
      typeof existing === "number" && Number.isFinite(existing) && existing > 0
        ? existing >>> 0
        : createRandomSeed();
  }

  return seeds;
}

function summarizePatternCollection<TId extends PracticePatternId>(
  patternIds: readonly TId[],
  patternMetaMap: Record<TId, { id: TId; label: string; order: number }>,
  questionBanks: Record<TId, readonly Question[]>,
  selectedAnswers: Readonly<Record<string, OptionKey>>,
  flaggedQuestions: Readonly<Record<string, boolean>>,
  patternSeeds: Partial<Record<PracticePatternId, number>>,
  questionSeeds: Readonly<Record<string, number>>,
): SubtestProgressSummary {
  let totalQuestions = 0;
  let totalAnswered = 0;
  let totalCorrect = 0;
  let totalFlagged = 0;
  let totalEarnedPoints = 0;
  let totalMaxAnsweredPoints = 0;

  const patterns: SubtestPatternProgressSummary[] = patternIds.map((patternId) => {
    const meta = patternMetaMap[patternId];
    const bank = questionBanks[patternId];
    const fallbackPatternSeed = patternSeeds[patternId] ?? 0;

    let answeredCount = 0;
    let correctCount = 0;
    let flaggedCount = 0;
    let earnedPoints = 0;
    let maxAnsweredPoints = 0;

    for (const question of bank) {
      const selected = selectedAnswers[question.id];
      if (selected !== undefined) {
        answeredCount += 1;
        const effectiveSeed = questionSeeds[question.id] ?? fallbackPatternSeed;
        const resolved = effectiveSeed
          ? shuffleQuestionWithScores(question, effectiveSeed)
          : question;

        if (resolved.optionScores) {
          const optionPoint = resolved.optionScores[selected] ?? 1;
          earnedPoints += optionPoint;
          maxAnsweredPoints += 5;
          if (optionPoint === 5) {
            correctCount += 1;
          }
        } else {
          maxAnsweredPoints += 5;
          if (selected === resolved.answer) {
            correctCount += 1;
            earnedPoints += 5;
          }
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
    totalEarnedPoints += earnedPoints;
    totalMaxAnsweredPoints += maxAnsweredPoints;

    return {
      patternId: meta.id,
      label: meta.label,
      order: meta.order,
      totalQuestions: bank.length,
      answeredCount,
      correctCount,
      flaggedCount,
      earnedPoints,
      maxAnsweredPoints,
    };
  });

  return {
    patterns,
    totalQuestions,
    totalAnswered,
    totalCorrect,
    totalFlagged,
    totalEarnedPoints,
    totalMaxAnsweredPoints,
  };
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
  return summarizePatternCollection(
    TWK_PATTERN_IDS,
    TWK_PATTERNS,
    TWK_QUESTION_BANKS,
    selectedAnswers,
    flaggedQuestions,
    patternSeeds,
    questionSeeds,
  );
}

/**
 * Merangkum progres pengerjaan dan skor poin 1–5 untuk seluruh 6 aspek TKP.
 */
export function summarizeTkpProgress(
  selectedAnswers: Readonly<Record<string, OptionKey>>,
  flaggedQuestions: Readonly<Record<string, boolean>>,
  patternSeeds: Partial<Record<PracticePatternId, number>>,
  questionSeeds: Readonly<Record<string, number>>,
): SubtestProgressSummary {
  return summarizePatternCollection(
    TKP_PATTERN_IDS,
    TKP_PATTERNS,
    TKP_QUESTION_BANKS,
    selectedAnswers,
    flaggedQuestions,
    patternSeeds,
    questionSeeds,
  );
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

export function isTkpPattern(value: unknown): value is TkpPatternId {
  return (
    typeof value === "string" &&
    (TKP_PATTERN_IDS as readonly string[]).includes(value)
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

  if (subtest === "TKP") {
    return {
      subtest: "TKP" as const,
      defaultPattern: "pelayanan-publik" as PracticePatternId,
      patternIds: TKP_PATTERN_IDS as readonly PracticePatternId[],
      patternCatalog: TKP_PATTERNS as Record<string, SubtestPatternMeta>,
      questionBanks: TKP_QUESTION_BANKS as Record<string, readonly Question[]>,
      patternStats: getTkpPatternStats(),
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
