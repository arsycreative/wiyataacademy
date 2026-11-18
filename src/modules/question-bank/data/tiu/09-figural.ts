import {
  buildPatternQuestions,
  type Question,
} from "@/modules/question-bank/domain/question";
import { figuralBatch1Drafts } from "./figural/figural-batch-1";
import { figuralBatch2Drafts } from "./figural/figural-batch-2";
import { figuralBatch3Drafts } from "./figural/figural-batch-3";

const allDrafts = [
  ...figuralBatch1Drafts,
  ...figuralBatch2Drafts,
  ...figuralBatch3Drafts,
];

export const figuralQuestions: readonly Question[] = buildPatternQuestions(
  "figural",
  allDrafts,
);
