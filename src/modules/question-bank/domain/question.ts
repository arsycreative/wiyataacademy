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
    subPatterns: [
      "perbandingan-senilai",
      "perbandingan-berbalik-nilai",
      "proyek-dan-pekerjaan-gabungan",
      "kecepatan-jarak-dan-waktu",
      "hubungan-variabel-x-dan-y",
    ],
  },
  "penalaran-analitis-melingkar": {
    id: "penalaran-analitis-melingkar",
    order: 6,
    label: "Penalaran Analitis Duduk Melingkar",
    subPatterns: [
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

export const SUBTEST_IDS = ["TIU", "TWK"] as const;
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
      "Kesadaran berbangsa, sejarah perjuangan & Sumpah Pemuda, cinta produk dalam negeri, toleransi, budaya global, serta netralitas ASN.",
    subPatterns: [
      "sumpah-pemuda-dan-sejarah-perjuangan",
      "cinta-tanah-air-dan-produk-dalam-negeri",
      "toleransi-dan-persatuan-dalam-keberagaman",
      "budaya-dan-identitas-nasional-di-era-global",
      "kepentingan-bangsa-dan-netralitas-asn",
    ],
  },
  integritas: {
    id: "integritas",
    order: 2,
    label: "Integritas",
    description:
      "Antikorupsi dan gratifikasi, konsistensi kejujuran, kode etik ASN BerAKHLAK, konflik kepentingan, serta akuntabilitas dan whistleblowing.",
    subPatterns: [
      "antikorupsi-gratifikasi-dan-suap",
      "konsistensi-kejujuran-dan-keteladanan",
      "kode-etik-dan-nilai-dasar-asn",
      "konflik-kepentingan-dan-penyalahgunaan-wewenang",
      "whistleblowing-transparansi-dan-akuntabilitas",
    ],
  },
  "bela-negara": {
    id: "bela-negara",
    order: 3,
    label: "Bela Negara",
    description:
      "Landasan hukum bela negara, ancaman militer-nirmiliter-hibrida, pertahanan siber & literasi digital, pengabdian profesi, dan kedaulatan wilayah.",
    subPatterns: [
      "dasar-hukum-dan-nilai-bela-negara",
      "ancaman-militer-nirmiliter-dan-hibrida",
      "bela-negara-di-ruang-siber-dan-literasi-digital",
      "bela-negara-melalui-profesi-dan-kesiapsiagaan-bencana",
      "pertahanan-semesta-dan-kedaulatan-wilayah",
    ],
  },
  "pilar-negara": {
    id: "pilar-negara",
    order: 4,
    label: "Pilar Negara",
    description:
      "Nilai dan pengamalan Pancasila, UUD 1945 dan lembaga negara, NKRI dan otonomi daerah, Bhinneka Tunggal Ika, serta sejarah perumusan dasar negara.",
    subPatterns: [
      "pancasila-nilai-dan-pengamalan",
      "uud-1945-hak-kewajiban-dan-lembaga-negara",
      "nkri-otonomi-daerah-dan-ketatanegaraan",
      "bhinneka-tunggal-ika-dan-kerukunan",
      "perumusan-pancasila-dan-dasar-negara",
    ],
  },
  "bahasa-indonesia": {
    id: "bahasa-indonesia",
    order: 5,
    label: "Bahasa Indonesia",
    description:
      "Kaidah EYD Edisi V, kalimat efektif, ide pokok dan penalaran wacana, diksi dan kata baku KBBI, serta tata naskah dinas dan bahasa negara.",
    subPatterns: [
      "ejaan-dan-tanda-baca",
      "kalimat-efektif-dan-struktur-kalimat",
      "ide-pokok-paragraf-dan-penalaran-wacana",
      "diksi-kata-baku-dan-imbuhan",
      "naskah-dinas-dan-bahasa-negara",
    ],
  },
};

export const ALL_PATTERN_IDS = [...TIU_PATTERN_IDS, ...TWK_PATTERN_IDS] as const;
export type PracticePatternId = (typeof ALL_PATTERN_IDS)[number];

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

    const isTwk = question.subtest === "TWK";
    const allowedPatterns: readonly string[] = isTwk ? TWK_PATTERN_IDS : TIU_PATTERN_IDS;
    if (!allowedPatterns.includes(question.pattern)) {
      ctx.addIssue({
        code: "custom",
        message: `Pola/pilar "${question.pattern}" tidak termasuk subtes ${question.subtest}`,
        path: ["pattern"],
      });
      return;
    }

    const allowedSubPatterns = isTwk
      ? TWK_PATTERNS[question.pattern as TwkPatternId].subPatterns
      : TIU_PATTERNS[question.pattern as TiuPatternId].subPatterns;
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
  }

  if (pattern === "penalaran-analitis-melingkar") {
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

