import {
  buildPatternQuestions,
  type Question,
} from "@/modules/question-bank/domain/question";
import { deretAngkaBatch1Drafts } from "./deret-angka/deret-angka-batch-1";
import { deretAngkaBatch2Drafts } from "./deret-angka/deret-angka-batch-2";
import { deretAngkaBatch3Drafts } from "./deret-angka/deret-angka-batch-3";

const allDrafts = [
  ...deretAngkaBatch1Drafts,
  ...deretAngkaBatch2Drafts,
  ...deretAngkaBatch3Drafts,
];

export const deretAngkaQuestions: readonly Question[] = buildPatternQuestions(
  "deret-angka",
  allDrafts,
);
