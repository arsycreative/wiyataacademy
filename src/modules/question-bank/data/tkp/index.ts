import {
  TKP_PATTERN_IDS,
  TKP_PATTERNS,
  type Difficulty,
  type Question,
  type ReviewStatus,
  type TkpPatternId,
} from "@/modules/question-bank/domain/question";
import { pelayananPublikQuestions } from "./01-pelayanan-publik";
import { jejaringKerjaQuestions } from "./02-jejaring-kerja";
import { sosialBudayaQuestions } from "./03-sosial-budaya";
import { tikQuestions } from "./04-tik";
import { profesionalismeQuestions } from "./05-profesionalisme";
import { antiRadikalismeQuestions } from "./06-anti-radikalisme";

export {
  pelayananPublikQuestions,
  jejaringKerjaQuestions,
  sosialBudayaQuestions,
  tikQuestions,
  profesionalismeQuestions,
  antiRadikalismeQuestions,
};

export const TKP_QUESTION_BANKS: Record<TkpPatternId, readonly Question[]> = {
  "pelayanan-publik": pelayananPublikQuestions,
  "jejaring-kerja": jejaringKerjaQuestions,
  "sosial-budaya": sosialBudayaQuestions,
  tik: tikQuestions,
  profesionalisme: profesionalismeQuestions,
  "anti-radikalisme": antiRadikalismeQuestions,
};

export const ALL_TKP_QUESTIONS: readonly Question[] = TKP_PATTERN_IDS.flatMap(
  (patternId) => TKP_QUESTION_BANKS[patternId],
);

export type TkpQuestionFilter = {
  subPattern?: string;
  difficulty?: Difficulty;
  reviewStatus?: ReviewStatus;
};

export function getTkpQuestionsByPattern(
  pattern: TkpPatternId,
  filter?: TkpQuestionFilter,
): readonly Question[] {
  const bank = TKP_QUESTION_BANKS[pattern];
  if (!filter) return bank;

  return bank.filter((question) => {
    if (filter.subPattern && question.subPattern !== filter.subPattern) return false;
    if (filter.difficulty && question.difficulty !== filter.difficulty) return false;
    if (filter.reviewStatus && question.reviewStatus !== filter.reviewStatus) return false;
    return true;
  });
}

export function getTkpPatternStats() {
  return TKP_PATTERN_IDS.map((patternId) => {
    const meta = TKP_PATTERNS[patternId];
    const questions = TKP_QUESTION_BANKS[patternId];
    return {
      ...meta,
      total: questions.length,
    };
  });
}
