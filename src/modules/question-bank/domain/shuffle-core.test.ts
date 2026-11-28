import { describe, expect, it } from "vitest";

import { TIU_QUESTION_BANKS } from "@/modules/question-bank/data/tiu";
import { TKP_QUESTION_BANKS } from "@/modules/question-bank/data/tkp";
import { TWK_QUESTION_BANKS } from "@/modules/question-bank/data/twk";
import { summarizeTiuProgress } from "./question-shuffle";
import {
  getPatternIdFromQuestionId,
  hasFixedOptionOrder,
  isNonShuffledPracticePattern,
  NON_SHUFFLED_PRACTICE_PATTERNS,
  shuffleQuestionOptions,
  shuffleQuestionWithScores,
} from "./shuffle-core";

describe("shuffle-core", () => {
  it("maps every single one of the 2,920 question IDs to its exact PracticePatternId without loading data files", () => {
    let checked = 0;
    for (const banks of [TIU_QUESTION_BANKS, TWK_QUESTION_BANKS, TKP_QUESTION_BANKS]) {
      for (const [patternId, questions] of Object.entries(banks)) {
        for (const q of questions) {
          expect(getPatternIdFromQuestionId(q.id)).toBe(patternId);
          checked += 1;
        }
      }
    }
    expect(checked).toBe(2920);
    expect(getPatternIdFromQuestionId("tiu-sin-001")).toBe("sinonim-antonim-akronim");
    expect(getPatternIdFromQuestionId("invalid-id")).toBeUndefined();
  });

  it("identifies the 4 numeric TIU patterns as non-shuffled in Bank Soal practice", () => {
    expect(NON_SHUFFLED_PRACTICE_PATTERNS).toEqual([
      "hitung-cepat",
      "perbandingan-kuantitatif",
      "deret-angka",
      "analisis-tabel",
    ]);

    for (const patternId of NON_SHUFFLED_PRACTICE_PATTERNS) {
      expect(isNonShuffledPracticePattern(patternId)).toBe(true);
    }

    expect(isNonShuffledPracticePattern("silogisme")).toBe(false);
    expect(isNonShuffledPracticePattern("analogi-kata")).toBe(false);
    expect(isNonShuffledPracticePattern("penalaran-analitis-melingkar")).toBe(false);
    expect(isNonShuffledPracticePattern("figural")).toBe(false);
    expect(isNonShuffledPracticePattern("sinonim-antonim-akronim")).toBe(false);
  });

  it("never shuffles A–E option order for kecukupan-data and hubungan-variabel-x-dan-y in any mode", () => {
    const pkBank = TIU_QUESTION_BANKS["perbandingan-kuantitatif"];
    const kecukupan = pkBank.find((q) => q.subPattern === "kecukupan-data");
    const hubunganXY = pkBank.find((q) => q.subPattern === "hubungan-variabel-x-dan-y");
    const optimasi = pkBank.find((q) => q.subPattern === "optimasi-biaya");

    expect(kecukupan).toBeDefined();
    expect(hubunganXY).toBeDefined();
    expect(optimasi).toBeDefined();

    expect(hasFixedOptionOrder(kecukupan!)).toBe(true);
    expect(hasFixedOptionOrder(hubunganXY!)).toBe(true);
    expect(hasFixedOptionOrder(optimasi!)).toBe(false);

    for (const seed of [1, 42, 20261101, 999999]) {
      const k1 = shuffleQuestionOptions(kecukupan!, seed);
      const k2 = shuffleQuestionWithScores(kecukupan!, seed);
      expect(k1.options).toEqual(kecukupan!.options);
      expect(k1.answer).toBe(kecukupan!.answer);
      expect(k2.options).toEqual(kecukupan!.options);
      expect(k2.answer).toBe(kecukupan!.answer);

      const h1 = shuffleQuestionOptions(hubunganXY!, seed);
      const h2 = shuffleQuestionWithScores(hubunganXY!, seed);
      expect(h1.options).toEqual(hubunganXY!.options);
      expect(h1.answer).toBe(hubunganXY!.answer);
      expect(h2.options).toEqual(hubunganXY!.options);
      expect(h2.answer).toBe(hubunganXY!.answer);
    }
  });

  it("evaluates numeric TIU answers against canonical unshuffled keys in summarizeTiuProgress even if seeds exist", () => {
    const hitQ = TIU_QUESTION_BANKS["hitung-cepat"][0];
    const derQ = TIU_QUESTION_BANKS["deret-angka"][0];

    const summary = summarizeTiuProgress(
      {
        [hitQ.id]: hitQ.answer,
        [derQ.id]: derQ.answer,
      },
      {},
      {
        "hitung-cepat": 123456,
        "deret-angka": 789012,
      },
      {
        [hitQ.id]: 654321,
        [derQ.id]: 987654,
      },
    );

    expect(summary.totalAnswered).toBe(2);
    expect(summary.totalCorrect).toBe(2);
  });
});
