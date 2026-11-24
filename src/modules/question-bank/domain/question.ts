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
    label: "Silogisme & Penalaran Induktif",
    subPatterns: [
      "modus-ponens",
      "modus-tollens",
      "silogisme-hipotesis",
      "silogisme-kategoris",
      "ekuivalensi-dan-ingkaran",
      "penalaran-induktif",
    ],
  },
  "hitung-cepat": {
    id: "hitung-cepat",
    order: 4,
    label: "Hitung Cepat",
    subPatterns: [
      "operasi-pecahan",
      "perkalian-dan-pembagian-setara",
      "operasi-desimal",
      "persentase-dan-angka-sakti",
      "aljabar-dan-kuadrat",
      "taksiran-dan-ekor-angka",
    ],
  },
  "perbandingan-kuantitatif": {
    id: "perbandingan-kuantitatif",
    order: 5,
    label: "Perbandingan, Kecukupan Data & Optimasi",
    subPatterns: [
      "perbandingan-senilai",
      "perbandingan-berbalik-nilai",
      "proyek-dan-pekerjaan-gabungan",
      "kecepatan-jarak-dan-waktu",
      "hubungan-variabel-x-dan-y",
      "kecukupan-data",
      "optimasi-biaya",
    ],
  },
  "penalaran-analitis-melingkar": {
    id: "penalaran-analitis-melingkar",
    order: 6,
    label: "Penalaran Analitis (Urutan, Duduk & Tabel)",
    subPatterns: [
      "urutan-dan-jadwal",
      "duduk-berderet",
      "analitis-tabel-logika",
      "posisi-berhadapan",
      "posisi-kanan-dan-kiri",
      "syarat-berdampingan-dan-terpisah",
      "meja-melingkar-kursi-kosong",
      "evaluasi-pernyataan-dan-kemungkinan",
    ],
  },
  "deret-angka": {
    id: "deret-angka",
    order: 7,
    label: "Deret Angka",
    subPatterns: [
      "deret-satu-larik-dan-bertingkat",
      "deret-dua-dan-tiga-larik",
      "deret-operasi-campuran-dan-berpola",
      "deret-fibonacci-dan-pangkat",
      "deret-pecahan-dan-desimal",
      "deret-suku-ke-n",
      "deret-matriks-tabel",
    ],
  },
  "analisis-tabel": {
    id: "analisis-tabel",
    order: 8,
    label: "Analisis Tabel",
    subPatterns: [
      "total-dan-selisih-data",
      "rata-rata-dan-rekapitulasi",
      "persentase-dan-pertumbuhan",
      "seleksi-syarat-dan-peringkat",
      "simpulan-dan-perbandingan-tabel",
    ],
  },
  figural: {
    id: "figural",
    order: 9,
    label: "Figural",
    subPatterns: [
      "analogi-gambar",
      "ketidaksamaan-gambar",
      "serial-gambar",
      "matriks-dan-komposisi",
      "rotasi-dan-pencerminan",
    ],
  },
};

export const SUBTEST_IDS = ["TIU", "TWK", "TKP"] as const;
export type QuestionSubtest = (typeof SUBTEST_IDS)[number];

export const TWK_PATTERN_IDS = [
  "nasionalisme",
  "integritas",
  "bela-negara",
  "pilar-negara",
  "bahasa-indonesia",
] as const;

export type TwkPatternId = (typeof TWK_PATTERN_IDS)[number];

export type TwkPatternMeta = {
  id: TwkPatternId;
  order: number;
  label: string;
  description: string;
  subPatterns: readonly string[];
};

export const TWK_PATTERNS: Record<TwkPatternId, TwkPatternMeta> = {
  nasionalisme: {
    id: "nasionalisme",
    order: 1,
    label: "Nasionalisme",
    description:
      "Kesadaran berbangsa, sejarah perjuangan & Sumpah Pemuda, cinta produk dalam negeri, toleransi, budaya global, netralitas ASN, serta penalaran kasus aktual.",
    subPatterns: [
      "sumpah-pemuda-dan-sejarah-perjuangan",
      "cinta-tanah-air-dan-produk-dalam-negeri",
      "toleransi-dan-persatuan-dalam-keberagaman",
      "budaya-dan-identitas-nasional-di-era-global",
      "kepentingan-bangsa-dan-netralitas-asn",
      "penalaran-kasus-nasionalisme-aktual",
    ],
  },
  integritas: {
    id: "integritas",
    order: 2,
    label: "Integritas",
    description:
      "Antikorupsi dan gratifikasi, konsistensi kejujuran, kode etik ASN BerAKHLAK, konflik kepentingan era digital, LHKPN, serta akuntabilitas dan whistleblowing.",
    subPatterns: [
      "antikorupsi-gratifikasi-dan-suap",
      "konsistensi-kejujuran-dan-keteladanan",
      "kode-etik-dan-nilai-dasar-asn",
      "konflik-kepentingan-dan-penyalahgunaan-wewenang",
      "whistleblowing-transparansi-dan-akuntabilitas",
      "penalaran-dilema-integritas-digital",
    ],
  },
  "bela-negara": {
    id: "bela-negara",
    order: 3,
    label: "Bela Negara",
    description:
      "Landasan hukum bela negara, ancaman militer-nirmiliter-hibrida, pertahanan siber & UU PDP, ketahanan nasional, pengabdian profesi, dan kedaulatan wilayah.",
    subPatterns: [
      "dasar-hukum-dan-nilai-bela-negara",
      "ancaman-militer-nirmiliter-dan-hibrida",
      "bela-negara-di-ruang-siber-dan-literasi-digital",
      "bela-negara-melalui-profesi-dan-kesiapsiagaan-bencana",
      "pertahanan-semesta-dan-kedaulatan-wilayah",
      "penalaran-bela-negara-kontemporer",
    ],
  },
  "pilar-negara": {
    id: "pilar-negara",
    order: 4,
    label: "Pilar Negara",
    description:
      "Nilai dan pengamalan Pancasila, UUD 1945 dan check & balances lembaga negara, NKRI dan otonomi daerah, Bhinneka Tunggal Ika, serta penalaran lintas pilar.",
    subPatterns: [
      "pancasila-nilai-dan-pengamalan",
      "uud-1945-hak-kewajiban-dan-lembaga-negara",
      "nkri-otonomi-daerah-dan-ketatanegaraan",
      "bhinneka-tunggal-ika-dan-kerukunan",
      "perumusan-pancasila-dan-dasar-negara",
      "penalaran-konstitusi-dan-lintas-pilar",
    ],
  },
  "bahasa-indonesia": {
    id: "bahasa-indonesia",
    order: 5,
    label: "Bahasa Indonesia",
    description:
      "Kaidah EYD Edisi V, kalimat efektif, ide pokok dan penalaran wacana, kalimat sumbang & inti kalimat panjang, diksi baku KBBI, serta tata naskah dinas.",
    subPatterns: [
      "ejaan-dan-tanda-baca",
      "kalimat-efektif-dan-struktur-kalimat",
      "ide-pokok-paragraf-dan-penalaran-wacana",
      "diksi-kata-baku-dan-imbuhan",
      "naskah-dinas-dan-bahasa-negara",
      "penalaran-wacana-dan-kalimat-sumbang",
    ],
  },
};

export const TKP_PATTERN_IDS = [
  "pelayanan-publik",
  "jejaring-kerja",
  "sosial-budaya",
  "tik",
  "profesionalisme",
  "anti-radikalisme",
] as const;

export type TkpPatternId = (typeof TKP_PATTERN_IDS)[number];

export type TkpPatternMeta = {
  id: TkpPatternId;
  order: number;
  label: string;
  description: string;
  subPatterns: readonly string[];
};

export const TKP_PATTERNS: Record<TkpPatternId, TkpPatternMeta> = {
  "pelayanan-publik": {
    id: "pelayanan-publik",
    order: 1,
    label: "Pelayanan Publik",
    description:
      "Keramahan, empati, ketanggapan, kepatuhan SOP, akses inklusif kelompok rentan, layanan bebas pungli, serta dilema layanan krisis dan keluhan viral.",
    subPatterns: [
      "sikap-ramah-empati-dan-pengendalian-emosi",
      "solusi-cepat-dan-kepatuhan-sop",
      "pelayanan-inklusif-dan-kelompok-rentan",
      "transparansi-standar-dan-bebas-pungli",
      "penanganan-keluhan-dan-evaluasi-mutu",
      "dilema-layanan-krisis-dan-viral",
    ],
  },
  "jejaring-kerja": {
    id: "jejaring-kerja",
    order: 2,
    label: "Jejaring Kerja",
    description:
      "Koordinasi lintas unit/instansi, kepercayaan kemitraan profesional, pembagian peran tim, berbagi pengetahuan, mediasi konflik, serta kolaborasi hybrid lintas generasi.",
    subPatterns: [
      "koordinasi-lintas-unit-dan-instansi",
      "membangun-kepercayaan-dan-relasi-profesional",
      "kolaborasi-tim-dan-pembagian-peran",
      "berbagi-pengetahuan-dan-keterbukaan-informasi",
      "resolusi-konflik-kerja-dan-mediasi",
      "dilema-kolaborasi-hybrid-dan-lintas-generasi",
    ],
  },
  "sosial-budaya": {
    id: "sosial-budaya",
    order: 3,
    label: "Sosial Budaya",
    description:
      "Adaptasi kearifan lokal, toleransi keberagaman agama dan budaya, komunikasi lintas dialek, kepekaan gotong royong, serta dilema inklusi di wilayah majemuk.",
    subPatterns: [
      "adaptasi-lingkungan-dan-kearifan-lokal",
      "toleransi-antarumat-dan-keberagaman-budaya",
      "komunikasi-lintas-budaya-dan-bahasa",
      "kepekaan-sosial-dan-gotong-royong",
      "menolak-diskriminasi-dan-primordialisme",
      "dilema-inklusi-dan-sensitivitas-budaya",
    ],
  },
  tik: {
    id: "tik",
    order: 4,
    label: "Teknologi Informasi & Komunikasi",
    description:
      "Adaptasi sistem digital dan AI terverifikasi, etika AI generatif & UU PDP, keamanan data antiphishing/deepfake, efisiensi kerja TIK, serta etika daring.",
    subPatterns: [
      "adaptasi-sistem-digital-dan-otomatisasi-ai",
      "keamanan-informasi-privasi-dan-anti-phishing",
      "pemanfaatan-tik-untuk-efisiensi-kinerja",
      "literasi-digital-dan-verifikasi-informasi",
      "etika-komunikasi-daring-dan-pelayanan-elektronik",
      "dilema-etika-ai-dan-data-sensitif",
    ],
  },
  profesionalisme: {
    id: "profesionalisme",
    order: 5,
    label: "Profesionalisme",
    description:
      "Manajemen prioritas dan tenggat, integritas pertanggungjawaban kerja, resiliensi di bawah tekanan, netralitas birokrasi, serta dilema tekanan atasan.",
    subPatterns: [
      "skala-prioritas-dan-manajemen-tenggat",
      "tanggung-jawab-dan-integritas-kerja",
      "ketangguhan-di-bawah-tekanan-dan-fleksibilitas",
      "disiplin-etika-birokrasi-dan-netralitas",
      "pengembangan-diri-dan-inisiatif-kualitas",
      "dilema-integritas-kinerja-dan-tekanan-atasan",
    ],
  },
  "anti-radikalisme": {
    id: "anti-radikalisme",
    order: 6,
    label: "Anti-Radikalisme",
    description:
      "Deteksi dini propaganda ekstrem, moderasi beragama, kesetiaan Pancasila-UUD 1945-NKRI, pencegahan hoaks kebencian, serta moderasi ruang digital & komunitas.",
    subPatterns: [
      "deteksi-dini-dan-respons-konten-ekstrem",
      "moderasi-beragama-dan-penolakan-intoleransi",
      "kesetiaan-ideologi-pancasila-uud-nkri",
      "pencegahan-radikalisme-digital-dan-hoaks-kebencian",
      "pendekatan-persuasif-edukatif-dan-pelaporan-prosedural",
      "dilema-moderasi-ruang-digital-dan-komunitas",
    ],
  },
};

export const ALL_PATTERN_IDS = [
  ...TIU_PATTERN_IDS,
  ...TWK_PATTERN_IDS,
  ...TKP_PATTERN_IDS,
] as const;
export type PracticePatternId = (typeof ALL_PATTERN_IDS)[number];

export const optionScoresSchema = z.object({
  A: z.number().int().min(1).max(5),
  B: z.number().int().min(1).max(5),
  C: z.number().int().min(1).max(5),
  D: z.number().int().min(1).max(5),
  E: z.number().int().min(1).max(5),
});

export type OptionScores = z.infer<typeof optionScoresSchema>;

export const questionOptionSchema = z.object({
  key: z.enum(OPTION_KEYS),
  text: z.string().trim().min(1),
});

export const questionSchema = z
  .object({
    id: z.string().regex(/^[a-z0-9-]+$/, "ID hanya boleh huruf kecil, angka, dan tanda hubung"),
    subtest: z.enum(SUBTEST_IDS),
    pattern: z.enum(ALL_PATTERN_IDS),
    subPattern: z.string().trim().min(1),
    difficulty: z.enum(DIFFICULTIES),
    prompt: z.string().trim().min(1),
    options: z.array(questionOptionSchema).length(OPTION_KEYS.length),
    answer: z.enum(OPTION_KEYS),
    optionScores: optionScoresSchema.optional(),
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

    const subtestPatterns: Record<QuestionSubtest, readonly string[]> = {
      TIU: TIU_PATTERN_IDS,
      TWK: TWK_PATTERN_IDS,
      TKP: TKP_PATTERN_IDS,
    };

    const allowedPatterns = subtestPatterns[question.subtest];
    if (!allowedPatterns.includes(question.pattern)) {
      ctx.addIssue({
        code: "custom",
        message: `Pola/pilar "${question.pattern}" tidak termasuk subtes ${question.subtest}`,
        path: ["pattern"],
      });
      return;
    }

    const allowedSubPatterns =
      question.subtest === "TWK"
        ? TWK_PATTERNS[question.pattern as TwkPatternId].subPatterns
        : question.subtest === "TKP"
          ? TKP_PATTERNS[question.pattern as TkpPatternId].subPatterns
          : TIU_PATTERNS[question.pattern as TiuPatternId].subPatterns;
    if (allowedSubPatterns.length > 0 && !allowedSubPatterns.includes(question.subPattern)) {
      ctx.addIssue({
        code: "custom",
        message: `Sub-pola "${question.subPattern}" tidak terdaftar untuk pola ${question.pattern}`,
        path: ["subPattern"],
      });
    }

    if (question.subtest === "TKP") {
      if (!question.optionScores) {
        ctx.addIssue({
          code: "custom",
          message: "Soal TKP wajib menyertakan optionScores (skor 1–5 untuk opsi A–E)",
          path: ["optionScores"],
        });
      } else {
        const sortedScores = OPTION_KEYS.map((k) => question.optionScores![k]).sort(
          (a, b) => a - b,
        );
        if (sortedScores.join(",") !== "1,2,3,4,5") {
          ctx.addIssue({
            code: "custom",
            message: "optionScores soal TKP harus memetakan nilai unik 1, 2, 3, 4, dan 5",
            path: ["optionScores"],
          });
        }
        if (question.optionScores[question.answer] !== 5) {
          ctx.addIssue({
            code: "custom",
            message: "Kunci answer utama pada soal TKP harus menunjuk opsi berskor 5",
            path: ["answer"],
          });
        }
      }
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

function buildSubtestQuestions<TPattern extends PracticePatternId>(
  subtest: QuestionSubtest,
  pattern: TPattern,
  drafts: readonly QuestionDraft[],
  resolveHint: (subPattern: string) => string,
  reviewStatus: ReviewStatus,
): Question[] {
  return drafts.map((draft) => ({
    ...draft,
    subtest,
    pattern,
    reviewStatus,
    tip: draft.tip ?? resolveHint(draft.subPattern),
    options: draft.options.map((text, index) => ({ key: OPTION_KEYS[index], text })),
  }));
}

export function buildPatternQuestions(
  pattern: TiuPatternId,
  drafts: readonly QuestionDraft[],
  reviewStatus: ReviewStatus = "draft",
): Question[] {
  return buildSubtestQuestions(
    "TIU",
    pattern,
    drafts,
    (subPattern) => getDefaultHint(pattern, subPattern),
    reviewStatus,
  );
}

/**
 * Menghasilkan petunjuk cepat non-spoiler untuk soal TWK ketika draft belum memiliki tip khusus.
 */
export function getDefaultTwkHint(pattern: TwkPatternId, subPattern: string): string {
  switch (pattern) {
    case "nasionalisme":
      return "Identifikasi tindakan yang mendahulukan kepentingan bangsa, persatuan dalam keberagaman, dan netralitas aparatur.";
    case "integritas":
      return "Uji setiap pilihan terhadap kepatuhan hukum, transparansi, antikorupsi, dan pencegahan konflik kepentingan.";
    case "bela-negara":
      return "Cocokkan konteks kasus dengan nilai dasar bela negara, ketahanan digital, pengabdian profesi, dan kedaulatan NKRI.";
    case "pilar-negara":
      if (subPattern === "uud-1945-hak-kewajiban-dan-lembaga-negara") {
        return "Perhatikan kewenangan konstitusional tiap lembaga negara pasca-amandemen dan keseimbangan hak serta kewajiban warga.";
      }
      return "Hubungkan kasus dengan nilai Pancasila, norma konstitusional UUD 1945, NKRI, dan prinsip Bhinneka Tunggal Ika.";
    case "bahasa-indonesia":
      return "Periksa struktur subjek-predikat, kaidah EYD V, kehematan diksi KBBI, dan kelaziman ragam resmi bahasa Indonesia.";
  }
}

/**
 * Membangun array Question bertipe subtes TWK dari kumpulan draft soal per pilar.
 */
export function buildTwkPatternQuestions(
  pattern: TwkPatternId,
  drafts: readonly QuestionDraft[],
  reviewStatus: ReviewStatus = "draft",
): Question[] {
  return buildSubtestQuestions(
    "TWK",
    pattern,
    drafts,
    (subPattern) => getDefaultTwkHint(pattern, subPattern),
    reviewStatus,
  );
}

export type TkpQuestionDraft = QuestionDraft & {
  readonly optionScores: readonly [number, number, number, number, number];
};

/**
 * Menghasilkan petunjuk cepat non-spoiler untuk soal TKP ketika draft belum memiliki tip khusus.
 */
export function getDefaultTkpHint(pattern: TkpPatternId, subPattern: string): string {
  switch (pattern) {
    case "pelayanan-publik":
      return "Cari tindakan yang paling ramah, proaktif memandu solusi nyata, inklusif, dan tetap patuh pada SOP tanpa pungli.";
    case "jejaring-kerja":
      return "Utamakan kolaborasi terbuka lintas pihak, komunikasi konstruktif win-win, dan kesediaan berbagi ilmu dengan tim.";
    case "sosial-budaya":
      return "Pilih sikap toleransi aktif, peka terhadap kearifan lokal tanpa diskriminasi, dan menjaga keharmonisan lintas golongan.";
    case "tik":
      return "Prioritaskan adaptasi teknologi secara antusias sekaligus menjaga keamanan data, verifikasi informasi, dan etika digital.";
    case "profesionalisme":
      if (subPattern === "skala-prioritas-dan-manajemen-tenggat") {
        return "Dahulukan tugas paling berdampak dengan tenggat terdekat sambil menjaga ketelitian dan komunikasi jadwal.";
      }
      return "Pilih komitmen kerja berintegritas, akuntabel tanpa manipulasi, tangguh saat tertekan, dan berinisiatif mutu.";
    case "anti-radikalisme":
      return "Pilih sikap menolak tegas intoleransi dan ekstremisme secara santun, edukatif-dialogis, dan sesuai prosedur pelaporan resmi.";
  }
}

/**
 * Membangun array Question bertipe subtes TKP lengkap dengan peta skor 1–5 per opsi A–E.
 */
export function buildTkpPatternQuestions(
  pattern: TkpPatternId,
  drafts: readonly TkpQuestionDraft[],
  reviewStatus: ReviewStatus = "draft",
): Question[] {
  const baseQuestions = buildSubtestQuestions(
    "TKP",
    pattern,
    drafts,
    (subPattern) => getDefaultTkpHint(pattern, subPattern),
    reviewStatus,
  );
  return baseQuestions.map((question, index) => {
    const scores = drafts[index].optionScores;
    return {
      ...question,
      optionScores: {
        A: scores[0],
        B: scores[1],
        C: scores[2],
        D: scores[3],
        E: scores[4],
      },
    };
  });
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
    if (subPattern === "penalaran-induktif") {
      return "Tarik generalisasi yang tepat mengikuti batas data dan fakta pada teks; hindari opsi ekstrem ('selalu', 'semua', 'pasti') yang melampaui bukti.";
    }
  }

  if (pattern === "hitung-cepat") {
    if (subPattern === "operasi-pecahan") {
      return "Pisahkan bilangan bulat dengan pecahannya atau sederhanakan dengan pencoretan silang sebelum menghitung penuh.";
    }
    if (subPattern === "perkalian-dan-pembagian-setara") {
      return "Ubah pembagian pecahan/desimal menjadi perkalian kebalikannya, lalu kelompokkan atau coret faktor persekutuan agar bentuk setaranya langsung terlihat.";
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

  if (pattern === "perbandingan-kuantitatif") {
    if (subPattern === "perbandingan-senilai") {
      return "Jika satu variabel naik maka variabel pasangannya ikut naik secara proporsional; cari nilai per satu satuan terlebih dahulu.";
    }
    if (subPattern === "perbandingan-berbalik-nilai") {
      return "Pada perbandingan berbalik nilai, hasil kali kedua besaran selalu konstan (A1 × B1 = A2 × B2).";
    }
    if (subPattern === "proyek-dan-pekerjaan-gabungan") {
      return "Untuk proyek terhenti gunakan rumus (Pekerja Awal × Lama Berhenti) ÷ Sisa Hari Efektif; untuk kerja bersama jumlahkan laju 1/t.";
    }
    if (subPattern === "kecepatan-jarak-dan-waktu") {
      return "Saat berpapasan jumlahkan kedua kecepatan; saat menyusul bagi selisih jarak awal dengan selisih kecepatan.";
    }
    if (subPattern === "hubungan-variabel-x-dan-y") {
      return "Sederhanakan nilai X dan Y terlebih dahulu, serta waspadai persamaan kuadrat atau pertidaksamaan terbuka yang membuat hubungan tidak dapat ditentukan.";
    }
    if (subPattern === "kecukupan-data") {
      return "Uji pernyataan (1) secara terpisah lalu pernyataan (2) secara terpisah (lupakan dulu (1)!); baru gabungkan keduanya jika masing-masing belum memberi satu jawaban tunggal.";
    }
    if (subPattern === "optimasi-biaya") {
      return "Hitung biaya per unit/kapasitas tiap opsi terlebih dahulu, lalu uji kombinasi bulat yang memenuhi target tanpa menyisakan biaya tak perlu.";
    }
  }

  if (pattern === "penalaran-analitis-melingkar") {
    if (subPattern === "urutan-dan-jadwal") {
      return "Buat slot urutan 1 sampai N (atau Senin–Jumat), kunci posisi absolut terlebih dahulu, lalu masukkan syarat ketidaksamaan atau selisih jarak.";
    }
    if (subPattern === "duduk-berderet") {
      return "Gambar deret kursi berurut kiri ke kanan (atau dua baris berhadapan), tempatkan syarat ujung/tengah terlebih dahulu, lalu pasang blok berdampingan.";
    }
    if (subPattern === "analitis-tabel-logika") {
      return "Buat matriks silang sederhana antara orang dan atributnya; tandai centang untuk fakta pasti dan silang untuk larangan guna menyempitkan sisa kandidat.";
    }
    if (subPattern === "posisi-berhadapan") {
      return "Pada meja bundar dengan N kursi genap, posisi berhadapan selalu berjarak N/2 kursi (misal 3 kursi pada meja 6 orang, atau 4 kursi pada meja 8 orang).";
    }
    if (subPattern === "posisi-kanan-dan-kiri") {
      return "Ingat bahwa seluruh peserta menghadap ke pusat meja: arah kanan adalah berlawanan jarum jam dan arah kiri adalah searah jarum jam.";
    }
    if (subPattern === "syarat-berdampingan-dan-terpisah") {
      return "Ikat pasangan yang wajib berdampingan sebagai satu blok terlebih dahulu, lalu tempatkan peserta yang memiliki syarat tidak boleh bersebelahan.";
    }
    if (subPattern === "meja-melingkar-kursi-kosong") {
      return "Anggap kursi kosong sebagai satu peserta tetap di dalam lingkaran agar penomoran kursi dan posisi berhadapan tidak bergeser.";
    }
    if (subPattern === "evaluasi-pernyataan-dan-kemungkinan") {
      return "Kunci posisi yang sudah pasti pada sketsa lingkaran, lalu masukkan syarat pengandaian pada soal sebelum menguji tiap opsi jawaban.";
    }
  }

  if (pattern === "deret-angka") {
    if (subPattern === "deret-satu-larik-dan-bertingkat") {
      return "Hitung selisih antar suku berdekatan; jika belum konstan, tarik selisih tingkat kedua atau cek pola selisih kuadrat dan bilangan prima.";
    }
    if (subPattern === "deret-dua-dan-tiga-larik") {
      return "Jika angka naik-turun secara tidak beraturan, pisahkan menjadi 2 larik (lompat 1 angka) atau 3 larik (lompat 2 angka).";
    }
    if (subPattern === "deret-operasi-campuran-dan-berpola") {
      return "Amati siklus operasi bergantian seperti (+a, ×2) atau (+a, ×2, -b) dari suku pertama hingga suku terakhir.";
    }
    if (subPattern === "deret-fibonacci-dan-pangkat") {
      return "Uji apakah suku ke-3 merupakan jumlah dua suku sebelumnya (Fibonacci) atau dekat dengan bilangan berpangkat (n² atau n³).";
    }
    if (subPattern === "deret-pecahan-dan-desimal") {
      return "Untuk pecahan, analisis pola deret pembilang dan deret penyebut secara terpisah; untuk desimal, kalikan 10 agar menjadi bilangan bulat.";
    }
    if (subPattern === "deret-suku-ke-n") {
      return "Temukan rumus umum Un (aritmetika a + (n-1)b, bertingkat, atau sisa bagi modulo untuk pola periodik) daripada mendaftar manual satu per satu.";
    }
    if (subPattern === "deret-matriks-tabel") {
      return "Uji hubungan operasi antar kolom di tiap baris terlebih dahulu; jika tidak cocok, uji pola vertikal antar baris pada tiap kolom.";
    }
  }

  if (pattern === "analisis-tabel") {
    if (subPattern === "total-dan-selisih-data") {
      return "Baca pertanyaan terlebih dahulu agar hanya menjumlahkan atau mengurangkan baris dan kolom yang benar-benar diperlukan.";
    }
    if (subPattern === "rata-rata-dan-rekapitulasi") {
      return "Gunakan nilai acuan tengah untuk rata-rata sederhana, atau kalikan bobot jumlah peserta saat menghitung rata-rata gabungan.";
    }
    if (subPattern === "persentase-dan-pertumbuhan") {
      return "Persentase perubahan selalu menggunakan nilai periode awal sebagai penyebut: ((Akhir - Awal) ÷ Awal) × 100%.";
    }
    if (subPattern === "seleksi-syarat-dan-peringkat") {
      return "Coret baris yang tidak lolos syarat ambang batas terlebih dahulu sebelum mengurutkan peringkat nilai atau biaya.";
    }
    if (subPattern === "simpulan-dan-perbandingan-tabel") {
      return "Periksa tren perubahan baris dari kiri ke kanan untuk mengeliminasi pernyataan yang jelas bertentangan dengan data tabel.";
    }
  }

  if (pattern === "figural") {
    if (subPattern === "analogi-gambar") {
      return "Fokus pada satu elemen patokan (sudut panah, jumlah sisi, warna, atau titik pojok) dari Gambar 1 ke 2 lalu terapkan ke Gambar 3.";
    }
    if (subPattern === "ketidaksamaan-gambar") {
      return "Cari kaidah mayoritas pada 4 opsi (misal jumlah sisi = jumlah titik, atau arah relatif titik pojok saat diputar) untuk menemukan 1 gambar yang menyimpang.";
    }
    if (subPattern === "serial-gambar") {
      return "Amati pergerakan bertahap tiap elemen dari kotak 1 hingga 4 (perputaran sudut, pergeseran titik sudut, dan selang-seling warna).";
    }
    if (subPattern === "matriks-dan-komposisi") {
      return "Pastikan setiap baris memiliki kelengkapan tiga bentuk, tiga jenis arsiran, dan tiga simbol dalam tanpa pengulangan.";
    }
    if (subPattern === "rotasi-dan-pencerminan") {
      return "Lacak posisi titik sudut terlebih dahulu saat kotak diputar atau dicerminkan untuk langsung menyingkirkan opsi pengecoh.";
    }
  }

  return "Perhatikan pola hubungan inti soal sebelum mengeliminasi opsi pengecoh.";
}

