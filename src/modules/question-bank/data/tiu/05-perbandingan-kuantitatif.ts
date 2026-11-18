import {
  buildPatternQuestions,
  type Question,
} from "@/modules/question-bank/domain/question";
import { perbandinganBatch1Drafts } from "./perbandingan-kuantitatif/perbandingan-batch-1";
import { perbandinganBatch2Drafts } from "./perbandingan-kuantitatif/perbandingan-batch-2";
import { perbandinganBatch3Drafts } from "./perbandingan-kuantitatif/perbandingan-batch-3";

const allDrafts = [
  ...perbandinganBatch1Drafts,
  ...perbandinganBatch2Drafts,
  ...perbandinganBatch3Drafts,
];

export const perbandinganKuantitatifQuestions: readonly Question[] = buildPatternQuestions(
  "perbandingan-kuantitatif",
  allDrafts,
);
