import {
  buildPatternQuestions,
  type Question,
} from "@/modules/question-bank/domain/question";
import { silogismeBatch1Drafts } from "./silogisme/silogisme-batch-1";
import { silogismeBatch2Drafts } from "./silogisme/silogisme-batch-2";
import { silogismeBatch3Drafts } from "./silogisme/silogisme-batch-3";
import { silogismeBatch4InduktifDrafts } from "./silogisme/silogisme-batch-4-induktif";

const allDrafts = [
  ...silogismeBatch1Drafts,
  ...silogismeBatch2Drafts,
  ...silogismeBatch3Drafts,
  ...silogismeBatch4InduktifDrafts,
];

export const silogismeQuestions: readonly Question[] = buildPatternQuestions(
  "silogisme",
  allDrafts,
);
