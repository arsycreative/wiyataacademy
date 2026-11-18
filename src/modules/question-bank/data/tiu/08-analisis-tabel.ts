import {
  buildPatternQuestions,
  type Question,
} from "@/modules/question-bank/domain/question";
import { analisisTabelBatch1Drafts } from "./analisis-tabel/analisis-tabel-batch-1";
import { analisisTabelBatch2Drafts } from "./analisis-tabel/analisis-tabel-batch-2";
import { analisisTabelBatch3Drafts } from "./analisis-tabel/analisis-tabel-batch-3";

const allDrafts = [
  ...analisisTabelBatch1Drafts,
  ...analisisTabelBatch2Drafts,
  ...analisisTabelBatch3Drafts,
];

export const analisisTabelQuestions: readonly Question[] = buildPatternQuestions(
  "analisis-tabel",
  allDrafts,
);
