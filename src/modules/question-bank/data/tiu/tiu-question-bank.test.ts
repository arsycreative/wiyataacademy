import { describe, expect, it } from "vitest";

import {
  DIFFICULTIES,
  questionSchema,
  TIU_PATTERN_IDS,
} from "@/modules/question-bank/domain/question";
import {
  analogiKataQuestions,
  analisisTabelQuestions,
  deretAngkaQuestions,
  figuralQuestions,
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

  it("contains 460 questions for sinonim-antonim-akronim (160 sinonim, 150 antonim, 150 akronim)", () => {
    expect(sinonimAntonimAkronimQuestions).toHaveLength(460);

    expect(
      getQuestionsByPattern("sinonim-antonim-akronim", { subPattern: "sinonim" }),
    ).toHaveLength(160);
    expect(
      getQuestionsByPattern("sinonim-antonim-akronim", { subPattern: "antonim" }),
    ).toHaveLength(150);
    expect(
      getQuestionsByPattern("sinonim-antonim-akronim", { subPattern: "akronim" }),
    ).toHaveLength(150);

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

  it("contains 170 questions for silogisme (30 per deduktif sub-pattern + 20 penalaran-induktif)", () => {
    expect(silogismeQuestions).toHaveLength(170);

    const expectedSubPatterns: Record<string, number> = {
      "modus-ponens": 30,
      "modus-tollens": 30,
      "silogisme-hipotesis": 30,
      "silogisme-kategoris": 30,
      "ekuivalensi-dan-ingkaran": 30,
      "penalaran-induktif": 20,
    };

    for (const [subPattern, expectedCount] of Object.entries(expectedSubPatterns)) {
      expect(
        getQuestionsByPattern("silogisme", { subPattern }),
      ).toHaveLength(expectedCount);
    }

    for (const difficulty of DIFFICULTIES) {
      expect(
        getQuestionsByPattern("silogisme", { difficulty }).length,
      ).toBeGreaterThan(0);
    }
  });

  it("contains 200 questions for hitung-cepat (30 per base sub-pattern + 50 perkalian-dan-pembagian-setara)", () => {
    expect(hitungCepatQuestions).toHaveLength(200);

    const expectedSubPatterns: Record<string, number> = {
      "operasi-pecahan": 30,
      "perkalian-dan-pembagian-setara": 50,
      "operasi-desimal": 30,
      "persentase-dan-angka-sakti": 30,
      "aljabar-dan-kuadrat": 30,
      "taksiran-dan-ekor-angka": 30,
    };

    for (const [subPattern, expectedCount] of Object.entries(expectedSubPatterns)) {
      expect(
        getQuestionsByPattern("hitung-cepat", { subPattern }),
      ).toHaveLength(expectedCount);
    }

    for (const difficulty of DIFFICULTIES) {
      expect(
        getQuestionsByPattern("hitung-cepat", { difficulty }).length,
      ).toBeGreaterThan(0);
    }
  });

  it("contains 190 questions for perbandingan-kuantitatif (incl. 20 kecukupan-data & 20 optimasi-biaya)", () => {
    expect(perbandinganKuantitatifQuestions).toHaveLength(190);

    const expectedSubPatterns: Record<string, number> = {
      "perbandingan-senilai": 30,
      "perbandingan-berbalik-nilai": 30,
      "proyek-dan-pekerjaan-gabungan": 30,
      "kecepatan-jarak-dan-waktu": 30,
      "hubungan-variabel-x-dan-y": 30,
      "kecukupan-data": 20,
      "optimasi-biaya": 20,
    };

    for (const [subPattern, expectedCount] of Object.entries(expectedSubPatterns)) {
      expect(
        getQuestionsByPattern("perbandingan-kuantitatif", { subPattern }),
      ).toHaveLength(expectedCount);
    }

    for (const difficulty of DIFFICULTIES) {
      expect(
        getQuestionsByPattern("perbandingan-kuantitatif", { difficulty }).length,
      ).toBeGreaterThan(0);
    }
  });

  it("contains 200 questions for penalaran-analitis-melingkar (incl. urutan, duduk berderet & tabel logika)", () => {
    expect(penalaranAnalitisMelingkarQuestions).toHaveLength(200);

    const expectedSubPatterns: Record<string, number> = {
      "urutan-dan-jadwal": 20,
      "duduk-berderet": 15,
      "analitis-tabel-logika": 15,
      "posisi-berhadapan": 30,
      "posisi-kanan-dan-kiri": 30,
      "syarat-berdampingan-dan-terpisah": 30,
      "meja-melingkar-kursi-kosong": 30,
      "evaluasi-pernyataan-dan-kemungkinan": 30,
    };

    for (const [subPattern, expectedCount] of Object.entries(expectedSubPatterns)) {
      expect(
        getQuestionsByPattern("penalaran-analitis-melingkar", { subPattern }),
      ).toHaveLength(expectedCount);
    }

    for (const difficulty of DIFFICULTIES) {
      expect(
        getQuestionsByPattern("penalaran-analitis-melingkar", { difficulty }).length,
      ).toBeGreaterThan(0);
    }
  });

  it("contains 180 questions for deret-angka (incl. 15 deret-suku-ke-n & 15 deret-matriks-tabel)", () => {
    expect(deretAngkaQuestions).toHaveLength(180);

    const expectedSubPatterns: Record<string, number> = {
      "deret-satu-larik-dan-bertingkat": 30,
      "deret-dua-dan-tiga-larik": 30,
      "deret-operasi-campuran-dan-berpola": 30,
      "deret-fibonacci-dan-pangkat": 30,
      "deret-pecahan-dan-desimal": 30,
      "deret-suku-ke-n": 15,
      "deret-matriks-tabel": 15,
    };

    for (const [subPattern, expectedCount] of Object.entries(expectedSubPatterns)) {
      expect(
        getQuestionsByPattern("deret-angka", { subPattern }),
      ).toHaveLength(expectedCount);
    }

    for (const difficulty of DIFFICULTIES) {
      expect(
        getQuestionsByPattern("deret-angka", { difficulty }).length,
      ).toBeGreaterThan(0);
    }
  });

  it("contains 150 questions for analisis-tabel (30 per sub-pattern)", () => {
    expect(analisisTabelQuestions).toHaveLength(150);

    const expectedSubPatterns = [
      "total-dan-selisih-data",
      "rata-rata-dan-rekapitulasi",
      "persentase-dan-pertumbuhan",
      "seleksi-syarat-dan-peringkat",
      "simpulan-dan-perbandingan-tabel",
    ] as const;

    for (const subPattern of expectedSubPatterns) {
      expect(
        getQuestionsByPattern("analisis-tabel", { subPattern }),
      ).toHaveLength(30);
    }

    for (const difficulty of DIFFICULTIES) {
      expect(
        getQuestionsByPattern("analisis-tabel", { difficulty }).length,
      ).toBeGreaterThan(0);
    }
  });

  it("contains 150 questions for figural (30 per sub-pattern)", () => {
    expect(figuralQuestions).toHaveLength(150);

    const expectedSubPatterns = [
      "analogi-gambar",
      "ketidaksamaan-gambar",
      "serial-gambar",
      "matriks-dan-komposisi",
      "rotasi-dan-pencerminan",
    ] as const;

    for (const subPattern of expectedSubPatterns) {
      expect(
        getQuestionsByPattern("figural", { subPattern }),
      ).toHaveLength(30);
    }

    for (const difficulty of DIFFICULTIES) {
      expect(
        getQuestionsByPattern("figural", { difficulty }).length,
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
      total: 460,
    });
    expect(stats[1]).toMatchObject({
      id: "analogi-kata",
      order: 2,
      total: 150,
    });
    expect(stats[2]).toMatchObject({
      id: "silogisme",
      order: 3,
      total: 170,
    });
    expect(stats[3]).toMatchObject({
      id: "hitung-cepat",
      order: 4,
      total: 200,
    });
    expect(stats[4]).toMatchObject({
      id: "perbandingan-kuantitatif",
      order: 5,
      total: 190,
    });
    expect(stats[5]).toMatchObject({
      id: "penalaran-analitis-melingkar",
      order: 6,
      total: 200,
    });
    expect(stats[6]).toMatchObject({
      id: "deret-angka",
      order: 7,
      total: 180,
    });
    expect(stats[7]).toMatchObject({
      id: "analisis-tabel",
      order: 8,
      total: 150,
    });
    expect(stats[8]).toMatchObject({
      id: "figural",
      order: 9,
      total: 150,
    });
  });
});
