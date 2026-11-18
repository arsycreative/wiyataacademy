import { describe, expect, it } from "vitest";

import {
  DIFFICULTIES,
  questionSchema,
  TIU_PATTERN_IDS,
} from "@/modules/question-bank/domain/question";
import {
  analogiKataQuestions,
  getPatternStats,
  getQuestionsByPattern,
  hitungCepatQuestions,
  penalaranAnalitisMelingkarQuestions,
  perbandinganKuantitatifQuestions,
  silogismeQuestions,
  sinonimAntonimAkronimQuestions,
  TIU_QUESTION_BANKS,
} from "./index";

describe("TIU question bank", () => {
  it("validates every question across all pattern banks against questionSchema", () => {
    for (const patternId of TIU_PATTERN_IDS) {
      const bank = TIU_QUESTION_BANKS[patternId];
      for (const question of bank) {
        const parsed = questionSchema.parse(question);
        expect(parsed.pattern).toBe(patternId);
      }
    }
  });

  it("ensures every question ID and prompt is unique across all pattern banks", () => {
    const allQuestions = TIU_PATTERN_IDS.flatMap((id) => TIU_QUESTION_BANKS[id]);
    const ids = allQuestions.map((q) => q.id);
    const prompts = allQuestions.map((q) => q.prompt.trim().toLowerCase());

    expect(new Set(ids).size).toBe(ids.length);
    expect(new Set(prompts).size).toBe(prompts.length);
  });

  it("contains 330 questions for sinonim-antonim-akronim (160 sinonim, 150 antonim, 20 akronim)", () => {
    expect(sinonimAntonimAkronimQuestions).toHaveLength(330);

    expect(
      getQuestionsByPattern("sinonim-antonim-akronim", { subPattern: "sinonim" }),
    ).toHaveLength(160);
    expect(
      getQuestionsByPattern("sinonim-antonim-akronim", { subPattern: "antonim" }),
    ).toHaveLength(150);
    expect(
      getQuestionsByPattern("sinonim-antonim-akronim", { subPattern: "akronim" }),
    ).toHaveLength(20);

    for (const difficulty of DIFFICULTIES) {
      expect(
        getQuestionsByPattern("sinonim-antonim-akronim", { difficulty }).length,
      ).toBeGreaterThan(0);
    }
  });

  it("contains 150 questions for analogi-kata (30 per sub-pattern)", () => {
    expect(analogiKataQuestions).toHaveLength(150);

    const expectedSubPatterns = [
      "fungsi",
      "sebab-akibat",
      "bagian-utuh",
      "profesi-bidang",
      "urutan-intensitas",
    ] as const;

    for (const subPattern of expectedSubPatterns) {
      expect(
        getQuestionsByPattern("analogi-kata", { subPattern }),
      ).toHaveLength(30);
    }

    for (const difficulty of DIFFICULTIES) {
      expect(
        getQuestionsByPattern("analogi-kata", { difficulty }).length,
      ).toBeGreaterThan(0);
    }
  });

  it("contains 150 questions for silogisme (30 per sub-pattern)", () => {
    expect(silogismeQuestions).toHaveLength(150);

    const expectedSubPatterns = [
      "modus-ponens",
      "modus-tollens",
      "silogisme-hipotesis",
      "silogisme-kategoris",
      "ekuivalensi-dan-ingkaran",
    ] as const;

    for (const subPattern of expectedSubPatterns) {
      expect(
        getQuestionsByPattern("silogisme", { subPattern }),
      ).toHaveLength(30);
    }

    for (const difficulty of DIFFICULTIES) {
      expect(
        getQuestionsByPattern("silogisme", { difficulty }).length,
      ).toBeGreaterThan(0);
    }
  });

  it("contains 150 questions for hitung-cepat (30 per sub-pattern)", () => {
    expect(hitungCepatQuestions).toHaveLength(150);

    const expectedSubPatterns = [
      "operasi-pecahan",
      "operasi-desimal",
      "persentase-dan-angka-sakti",
      "aljabar-dan-kuadrat",
      "taksiran-dan-ekor-angka",
    ] as const;

    for (const subPattern of expectedSubPatterns) {
      expect(
        getQuestionsByPattern("hitung-cepat", { subPattern }),
      ).toHaveLength(30);
    }

    for (const difficulty of DIFFICULTIES) {
      expect(
        getQuestionsByPattern("hitung-cepat", { difficulty }).length,
      ).toBeGreaterThan(0);
    }
  });

  it("contains 150 questions for perbandingan-kuantitatif (30 per sub-pattern)", () => {
    expect(perbandinganKuantitatifQuestions).toHaveLength(150);

    const expectedSubPatterns = [
      "perbandingan-senilai",
      "perbandingan-berbalik-nilai",
      "proyek-dan-pekerjaan-gabungan",
      "kecepatan-jarak-dan-waktu",
      "hubungan-variabel-x-dan-y",
    ] as const;

    for (const subPattern of expectedSubPatterns) {
      expect(
        getQuestionsByPattern("perbandingan-kuantitatif", { subPattern }),
      ).toHaveLength(30);
    }

    for (const difficulty of DIFFICULTIES) {
      expect(
        getQuestionsByPattern("perbandingan-kuantitatif", { difficulty }).length,
      ).toBeGreaterThan(0);
    }
  });

  it("contains 150 questions for penalaran-analitis-melingkar (30 per sub-pattern)", () => {
    expect(penalaranAnalitisMelingkarQuestions).toHaveLength(150);

    const expectedSubPatterns = [
      "posisi-berhadapan",
      "posisi-kanan-dan-kiri",
      "syarat-berdampingan-dan-terpisah",
      "meja-melingkar-kursi-kosong",
      "evaluasi-pernyataan-dan-kemungkinan",
    ] as const;

    for (const subPattern of expectedSubPatterns) {
      expect(
        getQuestionsByPattern("penalaran-analitis-melingkar", { subPattern }),
      ).toHaveLength(30);
    }

    for (const difficulty of DIFFICULTIES) {
      expect(
        getQuestionsByPattern("penalaran-analitis-melingkar", { difficulty }).length,
      ).toBeGreaterThan(0);
    }
  });

  it("provides non-empty non-spoiler tips across all populated TIU pattern banks", () => {
    for (const patternId of TIU_PATTERN_IDS) {
      for (const question of TIU_QUESTION_BANKS[patternId]) {
        expect(question.tip?.trim().length).toBeGreaterThan(0);
      }
    }
  });

  it("reports stats for all 9 separated TIU patterns", () => {
    const stats = getPatternStats();
    expect(stats).toHaveLength(9);
    expect(stats[0]).toMatchObject({
      id: "sinonim-antonim-akronim",
      order: 1,
      total: 330,
    });
    expect(stats[1]).toMatchObject({
      id: "analogi-kata",
      order: 2,
      total: 150,
    });
    expect(stats[2]).toMatchObject({
      id: "silogisme",
      order: 3,
      total: 150,
    });
    expect(stats[3]).toMatchObject({
      id: "hitung-cepat",
      order: 4,
      total: 150,
    });
    expect(stats[4]).toMatchObject({
      id: "perbandingan-kuantitatif",
      order: 5,
      total: 150,
    });
    expect(stats[5]).toMatchObject({
      id: "penalaran-analitis-melingkar",
      order: 6,
      total: 150,
    });
  });
});
