import {
  TIU_PATTERN_IDS,
  TIU_PATTERNS,
  type OptionKey,
  type TiuPatternId,
} from "./question";
import { TIU_QUESTION_BANKS } from "@/modules/question-bank/data/tiu";
import type {
  PatternProgressSummary,
  TiuProgressSummary,
} from "./progress-summary-types";
import {
  createInitialPatternSeeds,
  createRandomSeed,
  hashStringWithSeed,
  isNonShuffledPracticePattern,
  seededShuffle,
  shuffleQuestionOptions,
} from "./shuffle-core";

export {
  createInitialPatternSeeds,
  createRandomSeed,
  hashStringWithSeed,
  seededShuffle,
  shuffleQuestionOptions,
};
export type { PatternProgressSummary, TiuProgressSummary };

export function summarizeTiuProgress(
  selectedAnswers: Readonly<Record<string, OptionKey>>,
  flaggedQuestions: Readonly<Record<string, boolean>>,
  patternSeeds: Partial<Record<TiuPatternId, number>>,
  questionSeeds: Readonly<Record<string, number>>,
): TiuProgressSummary {
  let totalQuestions = 0;
  let totalAnswered = 0;
  let totalCorrect = 0;

  const patterns: PatternProgressSummary[] = TIU_PATTERN_IDS.map((patternId) => {
    const meta = TIU_PATTERNS[patternId];
    const bank = TIU_QUESTION_BANKS[patternId];
    const keepUnshuffled = isNonShuffledPracticePattern(patternId);
    const fallbackPatternSeed = keepUnshuffled ? 0 : (patternSeeds[patternId] ?? 0);

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
        const effectiveSeed = keepUnshuffled
          ? 0
          : (questionSeeds[question.id] ?? fallbackPatternSeed);
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
