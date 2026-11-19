import {
  TWK_PATTERN_IDS,
  TWK_PATTERNS,
  type Difficulty,
  type Question,
  type ReviewStatus,
  type TwkPatternId,
} from "@/modules/question-bank/domain/question";
import { nasionalismeQuestions } from "./01-nasionalisme";
import { integritasQuestions } from "./02-integritas";
import { belaNegaraQuestions } from "./03-bela-negara";
import { pilarNegaraQuestions } from "./04-pilar-negara";
import { bahasaIndonesiaQuestions } from "./05-bahasa-indonesia";

export {
  nasionalismeQuestions,
  integritasQuestions,
  belaNegaraQuestions,
  pilarNegaraQuestions,
  bahasaIndonesiaQuestions,
};

export const TWK_QUESTION_BANKS: Record<TwkPatternId, readonly Question[]> = {
  nasionalisme: nasionalismeQuestions,
  integritas: integritasQuestions,
  "bela-negara": belaNegaraQuestions,
  "pilar-negara": pilarNegaraQuestions,
  "bahasa-indonesia": bahasaIndonesiaQuestions,
};

export const ALL_TWK_QUESTIONS: readonly Question[] = TWK_PATTERN_IDS.flatMap(
  (patternId) => TWK_QUESTION_BANKS[patternId],
);

export type TwkQuestionFilter = {
  subPattern?: string;
  difficulty?: Difficulty;
  reviewStatus?: ReviewStatus;
};

export function getTwkQuestionsByPattern(
  pattern: TwkPatternId,
  filter?: TwkQuestionFilter,
): readonly Question[] {
  const bank = TWK_QUESTION_BANKS[pattern];
  if (!filter) return bank;

  return bank.filter((question) => {
    if (filter.subPattern && question.subPattern !== filter.subPattern) return false;
    if (filter.difficulty && question.difficulty !== filter.difficulty) return false;
    if (filter.reviewStatus && question.reviewStatus !== filter.reviewStatus) return false;
    return true;
  });
}

export function getTwkPatternStats() {
  return TWK_PATTERN_IDS.map((patternId) => {
    const meta = TWK_PATTERNS[patternId];
    const questions = TWK_QUESTION_BANKS[patternId];
    return {
      ...meta,
      total: questions.length,
    };
  });
}
