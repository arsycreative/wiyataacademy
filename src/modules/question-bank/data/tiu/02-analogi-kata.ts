import {
  buildPatternQuestions,
  type Question,
} from "@/modules/question-bank/domain/question";
import { analogiBatch1Drafts } from "./analogi-kata/analogi-batch-1";
import { analogiBatch2Drafts } from "./analogi-kata/analogi-batch-2";
import { analogiBatch3Drafts } from "./analogi-kata/analogi-batch-3";

const allDrafts = [
  ...analogiBatch1Drafts,
  ...analogiBatch2Drafts,
  ...analogiBatch3Drafts,
];

export const analogiKataQuestions: readonly Question[] = buildPatternQuestions(
  "analogi-kata",
  allDrafts,
);
