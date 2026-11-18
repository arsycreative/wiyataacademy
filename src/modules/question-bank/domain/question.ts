import { z } from "zod";

export const OPTION_KEYS = ["A", "B", "C", "D", "E"] as const;
export type OptionKey = (typeof OPTION_KEYS)[number];

export const DIFFICULTIES = ["mudah", "sedang", "sulit"] as const;
export type Difficulty = (typeof DIFFICULTIES)[number];

export const REVIEW_STATUSES = ["draft", "approved"] as const;
export type ReviewStatus = (typeof REVIEW_STATUSES)[number];

/**
 * Pola soal TIU. Setiap pola memiliki bank soal terpisah,
 * sehingga peserta bisa berlatih fokus pada satu pola saja.
 */
export const TIU_PATTERN_IDS = [
  "sinonim-antonim-akronim",
  "analogi-kata",
  "silogisme",
  "hitung-cepat",
  "perbandingan-kuantitatif",
  "penalaran-analitis-melingkar",
  "deret-angka",
  "analisis-tabel",
  "figural",
] as const;
export type TiuPatternId = (typeof TIU_PATTERN_IDS)[number];

export type TiuPatternMeta = {
  id: TiuPatternId;
  order: number;
  label: string;
  subPatterns: readonly string[];
};

export const TIU_PATTERNS: Record<TiuPatternId, TiuPatternMeta> = {
  "sinonim-antonim-akronim": {
    id: "sinonim-antonim-akronim",
    order: 1,
    label: "Sinonim, Antonim, dan Akronim",
    subPatterns: ["sinonim", "antonim", "akronim"],
  },
  "analogi-kata": {
    id: "analogi-kata",
    order: 2,
    label: "Analogi Kata",
    subPatterns: ["fungsi", "sebab-akibat", "bagian-utuh", "profesi-bidang", "urutan-intensitas"],
  },
  silogisme: {
    id: "silogisme",
    order: 3,
    label: "Silogisme",
    subPatterns: [
      "modus-ponens",
      "modus-tollens",
      "silogisme-hipotesis",
      "silogisme-kategoris",
      "ekuivalensi-dan-ingkaran",
    ],
  },
  "hitung-cepat": {
    id: "hitung-cepat",
    order: 4,
    label: "Hitung Cepat",
    subPatterns: [
      "operasi-pecahan",
      "operasi-desimal",
      "persentase-dan-angka-sakti",
      "aljabar-dan-kuadrat",
      "taksiran-dan-ekor-angka",
    ],
  },
  "perbandingan-kuantitatif": {
    id: "perbandingan-kuantitatif",
    order: 5,
    label: "Perbandingan Kuantitatif",
    subPatterns: [],
  },
  "penalaran-analitis-melingkar": {
    id: "penalaran-analitis-melingkar",
    order: 6,
    label: "Penalaran Analitis Duduk Melingkar",
    subPatterns: [],
  },
  "deret-angka": {
    id: "deret-angka",
    order: 7,
    label: "Deret Angka",
    subPatterns: [],
  },
  "analisis-tabel": {
    id: "analisis-tabel",
    order: 8,
    label: "Analisis Tabel",
    subPatterns: [],
  },
  figural: {
    id: "figural",
    order: 9,
    label: "Figural",
    subPatterns: [],
  },
};

export const questionOptionSchema = z.object({
  key: z.enum(OPTION_KEYS),
  text: z.string().trim().min(1),
});

export const questionSchema = z
  .object({
    id: z.string().regex(/^[a-z0-9-]+$/, "ID hanya boleh huruf kecil, angka, dan tanda hubung"),
    subtest: z.literal("TIU"),
    pattern: z.enum(TIU_PATTERN_IDS),
    subPattern: z.string().trim().min(1),
    difficulty: z.enum(DIFFICULTIES),
    prompt: z.string().trim().min(1),
    options: z.array(questionOptionSchema).length(OPTION_KEYS.length),
    answer: z.enum(OPTION_KEYS),
    explanation: z.string().trim().min(1),
    tip: z.string().trim().min(1).optional(),
    reviewStatus: z.enum(REVIEW_STATUSES),
  })
  .superRefine((question, ctx) => {
    question.options.forEach((option, index) => {
      if (option.key !== OPTION_KEYS[index]) {
        ctx.addIssue({
          code: "custom",
          message: `Opsi ke-${index + 1} harus berlabel ${OPTION_KEYS[index]}`,
          path: ["options", index, "key"],
        });
      }
    });

    const normalizedTexts = question.options.map((option) => option.text.toLowerCase());
    if (new Set(normalizedTexts).size !== normalizedTexts.length) {
      ctx.addIssue({
        code: "custom",
        message: "Teks opsi jawaban tidak boleh ada yang sama",
        path: ["options"],
      });
    }

    const allowedSubPatterns = TIU_PATTERNS[question.pattern].subPatterns;
    if (allowedSubPatterns.length > 0 && !allowedSubPatterns.includes(question.subPattern)) {
      ctx.addIssue({
        code: "custom",
        message: `Sub-pola "${question.subPattern}" tidak terdaftar untuk pola ${question.pattern}`,
        path: ["subPattern"],
      });
    }
  });

export type QuestionOption = z.infer<typeof questionOptionSchema>;
export type Question = z.infer<typeof questionSchema>;

/** Bentuk ringkas untuk menulis soal: opsi cukup ditulis berurutan A–E. */
export type QuestionDraft = {
  id: string;
  subPattern: string;
  difficulty: Difficulty;
  prompt: string;
  options: readonly [string, string, string, string, string];
  answer: OptionKey;
  explanation: string;
  tip?: string;
};

export function buildPatternQuestions(
  pattern: TiuPatternId,
  drafts: readonly QuestionDraft[],
  reviewStatus: ReviewStatus = "draft",
): Question[] {
  return drafts.map((draft) => ({
    ...draft,
    subtest: "TIU",
    pattern,
    reviewStatus,
    tip: draft.tip ?? getDefaultHint(pattern, draft.subPattern),
    options: draft.options.map((text, index) => ({ key: OPTION_KEYS[index], text })),
  }));
}

function getDefaultHint(pattern: TiuPatternId, subPattern: string): string {
  if (pattern === "sinonim-antonim-akronim") {
    if (subPattern === "sinonim") {
      return "Cari padanan makna kata baku sesuai KBBI; waspadai opsi pengecoh yang hanya mirip bunyinya.";
    }
    if (subPattern === "antonim") {
      return "Cari lawan makna paling tepat; eliminasi opsi-opsi yang justru bersinonim dengan kata soal.";
    }
    if (subPattern === "akronim") {
      return "Uraikan suku kata pembentuk akronim untuk menebak kepanjangan resminya.";
    }
  }

  if (pattern === "analogi-kata") {
    return "Buat jembatan kalimat dari pasangan kata soal lalu uji dengan arah dan jenis kata yang sama pada opsi.";
  }

  if (pattern === "silogisme") {
    if (subPattern === "modus-ponens") {
      return "Identifikasi syarat (p) dan akibat (q); jika premis kedua membenarkan sebab, maka akibatnya pasti terjadi.";
    }
    if (subPattern === "modus-tollens") {
      return "Perhatikan pengingkaran akibat (~q); jika akibat tidak terjadi, maka sebabnya (p) pasti tidak terjadi.";
    }
    if (subPattern === "silogisme-hipotesis") {
      return "Coret pernyataan penengah yang muncul sebagai akibat di satu premis dan sebab di premis lain.";
    }
    if (subPattern === "silogisme-kategoris") {
      return "Perhatikan kuantor semua dan sebagian; kedua premis berkuantor sebagian tidak menghasilkan simpulan pasti.";
    }
    if (subPattern === "ekuivalensi-dan-ingkaran") {
      return "Uji ekuivalensi p -> q dengan ~q -> ~p atau ~p atau q, serta cek aturan ingkaran kuantor dan implikasi.";
    }
  }

  if (pattern === "hitung-cepat") {
    if (subPattern === "operasi-pecahan") {
      return "Pisahkan bilangan bulat dengan pecahannya atau sederhanakan dengan pencoretan silang sebelum menghitung penuh.";
    }
    if (subPattern === "operasi-desimal") {
      return "Geser tanda koma secara seimbang atau ubah desimal istimewa seperti 0,125 dan 0,75 ke pecahan biasa.";
    }
    if (subPattern === "persentase-dan-angka-sakti") {
      return "Konversi persentase istimewa seperti 12,5% (1/8), 37,5% (3/8), atau 16 2/3% (1/6) menjadi pecahan sederhana.";
    }
    if (subPattern === "aljabar-dan-kuadrat") {
      return "Gunakan identitas aljabar seperti a² - b² = (a - b)(a + b) atau (a ± b)² agar tidak perlu menguadratkan manual.";
    }
    if (subPattern === "taksiran-dan-ekor-angka") {
      return "Cek digit satuan terakhir (ekor angka) dan taksir orde besarannya untuk menyingkirkan opsi yang jauh atau tidak cocok.";
    }
  }

  return "Perhatikan pola hubungan inti soal sebelum mengeliminasi opsi pengecoh.";
}

