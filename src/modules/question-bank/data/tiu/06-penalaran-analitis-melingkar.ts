import {
  buildPatternQuestions,
  type Question,
} from "@/modules/question-bank/domain/question";
import { melingkarBatch1Drafts } from "./penalaran-analitis-melingkar/melingkar-batch-1";
import { melingkarBatch2Drafts } from "./penalaran-analitis-melingkar/melingkar-batch-2";
import { melingkarBatch3Drafts } from "./penalaran-analitis-melingkar/melingkar-batch-3";

const allDrafts = [
  ...melingkarBatch1Drafts,
  ...melingkarBatch2Drafts,
  ...melingkarBatch3Drafts,
];

export const penalaranAnalitisMelingkarQuestions: readonly Question[] = buildPatternQuestions(
  "penalaran-analitis-melingkar",
  allDrafts,
);
