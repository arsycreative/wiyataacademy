import {
  buildPatternQuestions,
  type Question,
} from "@/modules/question-bank/domain/question";
import { hitungCepatBatch1Drafts } from "./hitung-cepat/hitung-cepat-batch-1";
import { hitungCepatBatch2Drafts } from "./hitung-cepat/hitung-cepat-batch-2";
import { hitungCepatBatch3Drafts } from "./hitung-cepat/hitung-cepat-batch-3";
import { hitungCepatBatch4SetaraDrafts } from "./hitung-cepat/hitung-cepat-batch-4-setara";
import { hitungCepatBatch5PasanganSetaraDrafts } from "./hitung-cepat/hitung-cepat-batch-5-pasangan-setara";

const allDrafts = [
  ...hitungCepatBatch1Drafts,
  ...hitungCepatBatch2Drafts,
  ...hitungCepatBatch3Drafts,
  ...hitungCepatBatch4SetaraDrafts,
  ...hitungCepatBatch5PasanganSetaraDrafts,
];

export const hitungCepatQuestions: readonly Question[] = buildPatternQuestions(
  "hitung-cepat",
  allDrafts,
);
