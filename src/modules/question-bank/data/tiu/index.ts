import {
  TIU_PATTERN_IDS,
  TIU_PATTERNS,
  type Difficulty,
  type Question,
  type TiuPatternId,
} from "@/modules/question-bank/domain/question";
import { sinonimAntonimAkronimQuestions } from "./01-sinonim-antonim-akronim";
import { analogiKataQuestions } from "./02-analogi-kata";
import { silogismeQuestions } from "./03-silogisme";
import { hitungCepatQuestions } from "./04-hitung-cepat";
import { perbandinganKuantitatifQuestions } from "./05-perbandingan-kuantitatif";
import { penalaranAnalitisMelingkarQuestions } from "./06-penalaran-analitis-melingkar";
import { deretAngkaQuestions } from "./07-deret-angka";
import { analisisTabelQuestions } from "./08-analisis-tabel";
import { figuralQuestions } from "./09-figural";

export {
  sinonimAntonimAkronimQuestions,
  analogiKataQuestions,
  silogismeQuestions,
  hitungCepatQuestions,
  perbandinganKuantitatifQuestions,
  penalaranAnalitisMelingkarQuestions,
  deretAngkaQuestions,
  analisisTabelQuestions,
  figuralQuestions,
};

export const TIU_QUESTION_BANKS: Record<TiuPatternId, readonly Question[]> = {
  "sinonim-antonim-akronim": sinonimAntonimAkronimQuestions,
  "analogi-kata": analogiKataQuestions,
  silogisme: silogismeQuestions,
  "hitung-cepat": hitungCepatQuestions,
  "perbandingan-kuantitatif": perbandinganKuantitatifQuestions,
  "penalaran-analitis-melingkar": penalaranAnalitisMelingkarQuestions,
  "deret-angka": deretAngkaQuestions,
  "analisis-tabel": analisisTabelQuestions,
  figural: figuralQuestions,
};

export type QuestionFilter = {
  subPattern?: string;
  difficulty?: Difficulty;
};

/** Mengambil soal khusus satu pola agar peserta bisa fokus berlatih di pola tersebut. */
export function getQuestionsByPattern(
  pattern: TiuPatternId,
  filters?: QuestionFilter,
): readonly Question[] {
  const bank = TIU_QUESTION_BANKS[pattern];
  if (!filters?.subPattern && !filters?.difficulty) {
    return bank;
  }

  return bank.filter((question) => {
    if (filters.subPattern && question.subPattern !== filters.subPattern) {
      return false;
    }
    if (filters.difficulty && question.difficulty !== filters.difficulty) {
      return false;
    }
    return true;
  });
}

export function getPatternStats() {
  return TIU_PATTERN_IDS.map((patternId) => {
    const meta = TIU_PATTERNS[patternId];
    const questions = TIU_QUESTION_BANKS[patternId];
    return {
      ...meta,
      total: questions.length,
    };
  });
}

