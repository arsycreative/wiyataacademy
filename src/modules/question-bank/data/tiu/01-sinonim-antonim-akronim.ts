import {
  buildPatternQuestions,
  type Question,
} from "@/modules/question-bank/domain/question";
import { akronimDrafts } from "./sinonim-antonim-akronim/akronim";
import { antonimBatch1Drafts } from "./sinonim-antonim-akronim/antonim-batch-1";
import { antonimBatch2Drafts } from "./sinonim-antonim-akronim/antonim-batch-2";
import { sinonimBatch1Drafts } from "./sinonim-antonim-akronim/sinonim-batch-1";
import { sinonimBatch2Drafts } from "./sinonim-antonim-akronim/sinonim-batch-2";

const allDrafts = [
  ...sinonimBatch1Drafts,
  ...sinonimBatch2Drafts,
  ...antonimBatch1Drafts,
  ...antonimBatch2Drafts,
  ...akronimDrafts,
];

export const sinonimAntonimAkronimQuestions: readonly Question[] = buildPatternQuestions(
  "sinonim-antonim-akronim",
  allDrafts,
);
