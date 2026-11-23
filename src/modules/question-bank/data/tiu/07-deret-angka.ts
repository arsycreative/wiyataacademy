import {
  buildPatternQuestions,
  type Question,
} from "@/modules/question-bank/domain/question";
import { deretAngkaBatch1Drafts } from "./deret-angka/deret-angka-batch-1";
import { deretAngkaBatch2Drafts } from "./deret-angka/deret-angka-batch-2";
import { deretAngkaBatch3Drafts } from "./deret-angka/deret-angka-batch-3";
import { deretAngkaBatch4SukuMatriksDrafts } from "./deret-angka/deret-angka-batch-4-suku-matriks";

const allDrafts = [
  ...deretAngkaBatch1Drafts,
  ...deretAngkaBatch2Drafts,
  ...deretAngkaBatch3Drafts,
  ...deretAngkaBatch4SukuMatriksDrafts,
];

export const deretAngkaQuestions: readonly Question[] = buildPatternQuestions(
  "deret-angka",
  allDrafts,
);
