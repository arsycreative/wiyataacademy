import type { CourseSummary } from "@/modules/catalog/application/dtos";

export type CourseTheme = "mint" | "blue" | "violet" | "cyan" | "sky" | "rose" | "amber";

export type CourseSyllabusSection = {
  title: string;
  description: string;
  lessons: string;
  href?: string;
};

export type CourseFaq = {
  question: string;
  answer: string;
};

export type CourseDetail = {
  slug: string;
  title: string;
  label: string;
  level: string;
  price: string;
  instructors: string;
  description: string;
  duration: string;
  lessons: string;
  practiceTests: string;
  bannerLabel: string;
  bannerTheme: CourseTheme;
  bannerUrl?: string | null;
  outcomes: readonly string[];
  about: readonly string[];
  syllabus: readonly CourseSyllabusSection[];
  faqs?: readonly CourseFaq[];
};

export type CatalogCourse = {
  slug: string;
  label: string;
  title: string;
  description: string;
  level: string;
  price: string;
  thumbnailUrl?: string | null;
  theme: CourseTheme;
  detail: CourseDetail;
};

export const popularTopics = [
  ["TWK Penalaran", 14],
  ["TIU Numerik", 16],
  ["TKP Skor 5", 12],
  ["Tryout CAT", 20],
  ["SKB & PPPK", 18],
] as const;

export const courseThemeClasses: Record<CourseTheme, string> = {
  mint: "from-emerald-100 via-cyan-100 to-teal-200 text-teal-700",
  blue: "from-sky-100 via-blue-100 to-blue-200 text-blue-700",
  violet: "from-violet-100 via-indigo-100 to-purple-200 text-violet-700",
  cyan: "from-cyan-100 via-sky-100 to-teal-200 text-cyan-700",
  sky: "from-blue-100 via-sky-100 to-indigo-200 text-blue-700",
  rose: "from-rose-100 via-pink-100 to-fuchsia-200 text-rose-700",
  amber: "from-amber-100 via-yellow-100 to-orange-200 text-amber-700",
};

export const skdIntensifSyllabus: readonly CourseSyllabusSection[] = [
  {
    title: "Tahap 1: Diagnostik Awal & Pengenalan CAT",
    description:
      "Pahami ambang batas resmi BKN (TWK 65, TIU 80, TKP 166) dan ukur skor awal lewat simulasi CAT berbatas waktu.",
    lessons: "Tryout CAT",
    href: "/tryout",
  },
  {
    title: "Tahap 2: TWK — 5 Pilar Kebangsaan",
    description:
      "Latih soal studi kasus implementasi Nasionalisme, Integritas, Bela Negara, Pilar Negara, dan Bahasa Negara.",
    lessons: "5 pilar • 200 soal",
    href: "/latihan/twk",
  },
  {
    title: "Tahap 3: TIU — 9 Pola Verbal, Numerik & Figural",
    description:
      "Kuasai sinonim/antonim, analogi, silogisme, hitung cepat, perbandingan, penalaran analitis, deret, analisis tabel, dan figural.",
    lessons: "9 pola • 1.660 soal",
    href: "/latihan/tiu",
  },
  {
    title: "Tahap 4: TKP — 6 Aspek Strategi Skor 5",
    description:
      "Bedah Pelayanan Publik, Jejaring Kerja, Sosial Budaya, TIK, Profesionalisme, dan Anti-Radikalisme agar konsisten meraih poin 5.",
    lessons: "6 aspek • 240 soal",
    href: "/latihan/tkp",
  },
  {
    title: "Tahap 5: Simulasi Tryout CAT Resmi (110 Soal)",
    description:
      "Uji kesiapan akhir 110 soal dalam 100 menit lengkap dengan evaluasi kelulusan passing grade dan pemetaan 4 pola terlemah.",
    lessons: "110 soal • 100 menit",
    href: "/tryout",
  },
];

export const bundlingCpnsSyllabus: readonly CourseSyllabusSection[] = [
  {
    title: "Roadmap Seleksi Administrasi & Strategi Formasi",
    description:
      "Panduan memilih formasi strategis sesuai kualifikasi pendidikan, verifikasi berkas SSCASN, dan manajemen waktu belajar 12 minggu.",
    lessons: "5 materi",
  },
  {
    title: "Penguasaan Penuh SKD (TWK, TIU & TKP)",
    description:
      "Modul inti seluruh subtes SKD lengkap dengan rangkuman materi, bank soal HOTS, dan pembahasan langkah demi langkah.",
    lessons: "24 materi + 6 drill",
  },
  {
    title: "Simulasi CAT BKN & Audit Kecepatan Pengerjaan",
    description:
      "12x Tryout CAT berbatas waktu 100 menit dengan analisis per subtes, ranking peserta nasional, dan evaluasi kelemahan.",
    lessons: "12 paket CAT",
  },
  {
    title: "Pendalaman SKB CAT, Wawancara & Micro-Teaching",
    description:
      "Persiapan tahap akhir sesuai rumpun jabatan: materi substansi instansi, studi kasus pelayanan, dan simulasi wawancara.",
    lessons: "13 materi + 2 simulasi",
  },
];

export const pppkSyllabus: readonly CourseSyllabusSection[] = [
  {
    title: "Pemetaan Seleksi & Bobot Nilai PPPK",
    description:
      "Pahami komposisi Kompetensi Teknis, Manajerial, Sosial Kultural, serta Wawancara berbasis komputer.",
    lessons: "4 materi",
  },
  {
    title: "Kompetensi Teknis per Rumpun Jabatan",
    description:
      "Latihan soal terstruktur untuk formasi Teknis Umum, Guru (pedagogik & profesional), serta Tenaga Kesehatan.",
    lessons: "10 materi + 3 drill",
  },
  {
    title: "Manajerial & Sosial Kultural (Mansoskul)",
    description:
      "Pola pengambilan keputusan, integritas, komunikasi, kerja sama, dan perekat bangsa untuk memaksimalkan poin Mansoskul.",
    lessons: "8 materi + 2 kuis",
  },
  {
    title: "Wawancara Berbasis CAT & Tryout PPPK",
    description:
      "Bedah strategi menjawab 10 soal wawancara integritas/moralitas dan paket simulasi CAT PPPK berbatas waktu.",
    lessons: "6 materi + 4 tryout",
  },
];

export const tiuKilatSyllabus: readonly CourseSyllabusSection[] = [
  {
    title: "Verbal & Silogisme Logis",
    description:
      "Teknik cepat analogi kata, kuantor, penarikan kesimpulan ekuivalensi, dan penalaran analitis urutan/posisi.",
    lessons: "6 materi",
  },
  {
    title: "Numerik Berhitung & Deret Angka",
    description:
      "Trik pecahan, persentase, perbandingan senilai/berbalik nilai, serta pola deret bertingkat.",
    lessons: "8 materi",
  },
  {
    title: "Figural & Spasial Tanpa Bingung",
    description:
      "Membaca pola rotasi, pencerminan, ketidaksamaan gambar, dan jaring-jaring dalam hitungan detik.",
    lessons: "8 materi + 3 drill",
  },
];

export const skbStrategiSyllabus: readonly CourseSyllabusSection[] = [
  {
    title: "Strategi SKB CAT Rumpun Instansi",
    description:
      "Pemetaan regulasi ASN, kebijakan publik, tata kelola pemerintahan, dan literasi bidang jabatan.",
    lessons: "8 materi",
  },
  {
    title: "Studi Kasus & Penulisan Makalah / Psikotes",
    description:
      "Kerangka analisis masalah birokrasi, penyusunan solusi terukur, dan persiapan tes potensi psikologi.",
    lessons: "8 materi",
  },
  {
    title: "Simulasi Wawancara & Uji Kompetensi",
    description:
      "Daftar pertanyaan kunci panel penguji, teknik menjawab berbasis pengalaman (STAR), dan checklist kesiapan.",
    lessons: "8 materi + 2 simulasi",
  },
];

export const tryoutCatSyllabus: readonly CourseSyllabusSection[] = [
  {
    title: "Tryout Diagnostik & Penetapan Target Skor",
    description:
      "2 paket tryout awal untuk memetakan kekuatan di TWK, TIU, dan TKP sekaligus menentukan target skor aman per formasi.",
    lessons: "2 paket CAT",
  },
  {
    title: "12 Paket Tryout SKD Reguler HOTS",
    description:
      "Latihan berkala dengan timer real-time 100 menit, navigasi nomor soal ala CAT BKN, dan pembahasan lengkap.",
    lessons: "12 paket CAT",
  },
  {
    title: "6 Paket Tryout Akbar Nasional",
    description:
      "Uji kesiapan akhir bersama ribuan peserta lain untuk mengukur posisi peringkat sebelum hari ujian.",
    lessons: "6 paket CAT",
  },
];

const detailBySlug: Record<string, CourseDetail> = {
  "intensif-skd-cpns": {
    slug: "intensif-skd-cpns",
    title: "Intensif SKD CPNS (TWK, TIU & TKP)",
    label: "Roadmap SKD CPNS",
    level: "Pemula – Lanjutan",
    price: "Akses Terbuka",
    instructors: "Tim Kurikulum SKD Wiyata Academy",
    description:
      "Roadmap belajar interaktif 5 tahap untuk menembus ambang batas dan meraih skor tinggi SKD CPNS berbasis CAT BKN.",
    duration: "5 tahap terstruktur",
    lessons: "20 modul • 2.100 soal",
    practiceTests: "Tryout CAT 110 Soal + Mini 35 Soal",
    bannerLabel: "SKD CPNS 2026",
    bannerTheme: "blue",
    bannerUrl: "/images/courses/asn-cpns-banner.svg",
    outcomes: [
      "Menguasai 5 pilar TWK (200 soal), 9 pola TIU (1.660 soal), dan 6 aspek TKP (240 soal) sesuai kisi-kisi terbaru.",
      "Memantau progres pengerjaan dan akurasi tiap modul secara langsung pada roadmap belajar interaktif.",
      "Menerapkan strategi pemeringkatan opsi TKP untuk konsisten meraih poin 5 di atas pengecoh skor 4.",
      "Mengelola ritme 100 menit untuk 110 soal pada simulasi CAT resmi lengkap dengan evaluasi ambang batas BKN.",
    ],
    about: [
      "Intensif SKD CPNS kini berbentuk Learning Path interaktif yang menyatukan seluruh bank soal dan simulasi CAT Wiyata Academy ke dalam 5 tahap belajar berurutan.",
      "Setiap tahap menampilkan progres nyata pengerjaan, persentase akurasi atau skor poin, serta tautan langsung ke setiap pilar TWK, pola TIU, aspek TKP, dan paket Tryout CAT.",
      "Masuk dengan akun Anda agar progres bank soal tersinkronisasi lintas perangkat dan riwayat skor simulasi mudah dipantau hingga hari ujian.",
    ],
    syllabus: skdIntensifSyllabus,
    faqs: [
      {
        question: "Apakah materi dan bank soal sudah sesuai kisi-kisi CPNS terbaru?",
        answer:
          "Ya, seluruh 2.100 soal TWK, TIU, dan TKP beserta ambang batas CAT (TWK 65, TIU 80, TKP 166) mengacu pada standar seleksi SKD CPNS terbaru.",
      },
      {
        question: "Apakah harus menyelesaikan tahap secara berurutan?",
        answer:
          "Roadmap memberi rekomendasi langkah berikutnya secara otomatis, tetapi Anda tetap bebas langsung membuka pilar, pola, aspek, atau simulasi Tryout CAT mana pun.",
      },
      {
        question: "Bagaimana progres belajar saya disimpan?",
        answer:
          "Progres latihan otomatis tersimpan di browser dan tersinkronisasi ke akun Anda ketika masuk melalui halaman Akun.",
      },
    ],
  },
  "bundling-cpns-lengkap": {
    slug: "bundling-cpns-lengkap",
    title: "Bundling Lengkap CPNS (SKD + SKB + Tryout CAT)",
    label: "Bundling CPNS",
    level: "Menengah",
    price: "Rp 449.000",
    instructors: "Tim Mentor ASN & Praktisi Birokrasi",
    description:
      "Paket persiapan menyeluruh dari seleksi administrasi, SKD, hingga pendalaman SKB instansi dan simulasi CAT.",
    duration: "12 minggu",
    lessons: "54 materi",
    practiceTests: "12 Tryout CAT + 2 Simulasi SKB",
    bannerLabel: "Bundling CPNS",
    bannerTheme: "violet",
    outcomes: [
      "Menyiapkan tahap SKD dan SKB dalam satu alur belajar yang saling terhubung.",
      "Mengoptimalkan skor SKD agar berada jauh di zona aman pemeringkatan 3x formasi.",
      "Memahami pola soal SKB CAT, studi kasus jabatan, hingga teknik wawancara instansi.",
      "Mendapatkan jadwal belajar terstruktur 12 minggu dan evaluasi progres berkala.",
    ],
    about: [
      "Paket Bundling Lengkap adalah pilihan paling hemat dan komprehensif bagi pejuang NIP yang menargetkan lolos hingga tahap pemberkasan.",
      "Anda tidak hanya dibimbing menembus passing grade SKD, tetapi juga langsung dibekali kerangka belajar SKB agar siap menghadapi persaingan ketat di tahap akhir.",
    ],
    syllabus: bundlingCpnsSyllabus,
    faqs: [
      {
        question: "Apa bedanya Bundling Lengkap dengan Intensif SKD?",
        answer:
          "Bundling Lengkap sudah mencakup seluruh materi Intensif SKD ditambah modul pendalaman SKB, strategi wawancara, serta paket tryout CAT lebih banyak.",
      },
      {
        question: "Kapan materi SKB mulai bisa diakses?",
        answer:
          "Materi fondasi SKB bisa diakses sejak awal, dan sesi pendalaman instansi dapat diikuti paralel setelah evaluasi SKD.",
      },
    ],
  },
  "bimbel-pppk-teknis-guru-nakes": {
    slug: "bimbel-pppk-teknis-guru-nakes",
    title: "Bimbel PPPK Teknis, Guru & Nakes",
    label: "PPPK",
    level: "Pemula",
    price: "Rp 249.000",
    instructors: "Mentor Spesialis PPPK Wiyata",
    description:
      "Fokus kompetensi teknis, manajerial, sosial kultural, dan wawancara berbasis CAT untuk pelamar PPPK.",
    duration: "6 minggu",
    lessons: "28 materi",
    practiceTests: "6 Tryout CAT PPPK",
    bannerLabel: "Bimbel PPPK",
    bannerTheme: "cyan",
    outcomes: [
      "Memahami struktur penilaian Kompetensi Teknis, Manajerial, Sosio-Kultural, dan Wawancara.",
      "Mengenali pola soal SJT (Situational Judgement Test) untuk formasi Guru & Teknis.",
      "Memaksimalkan poin Manajerial & Sosio-Kultural agar mendongkrak total skor akhir.",
      "Berlatih manajemen waktu pengerjaan CAT PPPK dengan pembahasan mendalam.",
    ],
    about: [
      "Seleksi PPPK memiliki karakter soal yang berbeda dengan CPNS reguler, terutama pada bobot Kompetensi Teknis dan Mansoskul.",
      "Program ini membantu pelamar PPPK Teknis, Guru, maupun Tenaga Kesehatan belajar lebih fokus pada soal situasional dan teknis jabatan.",
    ],
    syllabus: pppkSyllabus,
  },
  "kelas-kilat-tiu-numerik-figural": {
    slug: "kelas-kilat-tiu-numerik-figural",
    title: "Kelas Kilat TIU: Numerik, Silogisme & Figural",
    label: "SKD CPNS",
    level: "Menengah",
    price: "Rp 169.000",
    instructors: "Tim Mentor TIU Wiyata Academy",
    description:
      "Kuasai trik berhitung cepat, deret angka, perbandingan kuantitatif, dan penalaran analitis tanpa kehabisan waktu.",
    duration: "4 minggu",
    lessons: "22 materi",
    practiceTests: "6 Drill Berbatas Waktu",
    bannerLabel: "Klinik TIU",
    bannerTheme: "sky",
    outcomes: [
      "Menyelesaikan soal deret dan hitung cepat kurang dari 45 detik per soal.",
      "Menghindari jebakan logika pada soal silogisme dan penalaran analitis.",
      "Membaca pola gambar figural secara sistematis tanpa menebak.",
    ],
    about: [
      "Banyak peserta gagal mencapai passing grade SKD karena kehabisan waktu di subtes TIU. Kelas kilat ini memfokuskan latihan pada teknik eliminasi dan pola hitung praktis.",
    ],
    syllabus: tiuKilatSyllabus,
  },
  "pendalaman-skb-wawancara-cpns": {
    slug: "pendalaman-skb-wawancara-cpns",
    title: "Pendalaman SKB & Strategi Wawancara Instansi",
    label: "SKB",
    level: "Lanjutan",
    price: "Rp 259.000",
    instructors: "Tim Mentor SKB & Praktisi ASN",
    description:
      "Persiapan khusus tahap SKB CAT maupun non-CAT: studi kasus jabatan, micro-teaching, dan simulasi wawancara.",
    duration: "5 minggu",
    lessons: "24 materi",
    practiceTests: "4 Simulasi SKB",
    bannerLabel: "SKB Master",
    bannerTheme: "mint",
    outcomes: [
      "Menyusun peta materi regulasi dan substansi instansi pusat maupun daerah.",
      "Menjawab pertanyaan wawancara panel secara terstruktur dan meyakinkan.",
      "Mempersiapkan uji praktik atau micro-teaching dengan percaya diri.",
    ],
    about: [
      "Bobot nilai SKB mencapai 60% dari total skor akhir CPNS. Kelas ini membimbing Anda memaksimalkan poin di tahap penentuan kelulusan.",
    ],
    syllabus: skbStrategiSyllabus,
  },
  "paket-tryout-cat-bkn-nasional": {
    slug: "paket-tryout-cat-bkn-nasional",
    title: "Paket 20x Tryout CAT BKN & Analisis Skor",
    label: "Tryout CAT",
    level: "Menengah",
    price: "Rp 129.000",
    instructors: "Tim Penyusun Soal HOTS Wiyata",
    description:
      "Simulasi CAT 110 soal dalam 100 menit lengkap dengan pembahasan, grafik passing grade, dan ranking nasional.",
    duration: "Akses fleksibel",
    lessons: "20 paket tryout",
    practiceTests: "2.200+ Soal & Pembahasan",
    bannerLabel: "Tryout CAT",
    bannerTheme: "blue",
    outcomes: [
      "Melatih stamina dan strategi urutan pengerjaan TWK, TIU, dan TKP selama 100 menit.",
      "Melihat grafik perkembangan skor dan perbandingan terhadap ambang batas BKN.",
      "Mengevaluasi topik tersulit lewat pembahasan tertulis yang mudah dipahami.",
    ],
    about: [
      "Cocok untuk peserta yang sudah memiliki dasar materi dan ingin menguji ketahanan serta akurasi lewat simulasi ujian berulang kali.",
    ],
    syllabus: tryoutCatSyllabus,
  },
};

export const topRatedCourses: CatalogCourse[] = [
  makeCatalogCourse("intensif-skd-cpns", "blue"),
  makeCatalogCourse("bundling-cpns-lengkap", "violet"),
  makeCatalogCourse("bimbel-pppk-teknis-guru-nakes", "cyan"),
  makeCatalogCourse("kelas-kilat-tiu-numerik-figural", "sky"),
  makeCatalogCourse("pendalaman-skb-wawancara-cpns", "mint"),
  makeCatalogCourse("paket-tryout-cat-bkn-nasional", "blue"),
];

export const justAddedCourses: CatalogCourse[] = [
  topRatedCourses[1],
  topRatedCourses[0],
  topRatedCourses[5],
  topRatedCourses[2],
  topRatedCourses[3],
  topRatedCourses[4],
];

function makeCatalogCourse(slug: string, theme: CourseTheme): CatalogCourse {
  const detail = detailBySlug[slug];

  return {
    slug,
    label: detail.label,
    title: detail.title,
    description: detail.description,
    level: detail.level,
    price: detail.price,
    thumbnailUrl: slug === "intensif-skd-cpns" ? "/images/courses/asn-cpns-thumbnail.svg" : null,
    theme,
    detail,
  };
}

export function toCatalogCourse(course: CourseSummary): CatalogCourse {
  const existing = detailBySlug[course.slug];
  const label = course.categoryName || "Program CPNS";
  const level = toDisplayLevel(course.level);
  const price = formatCoursePrice(course.priceCents);
  const theme = getThemeFromCategory(course.categorySlug);

  if (existing) {
    return {
      slug: course.slug,
      label,
      title: course.title,
      description: course.description,
      level,
      price,
      thumbnailUrl: course.thumbnailUrl,
      theme,
      detail: {
        ...existing,
        title: course.title,
        label,
        level,
        price,
        description: course.description,
        duration: course.duration,
        bannerUrl: course.bannerUrl ?? existing.bannerUrl,
      },
    };
  }

  return {
    slug: course.slug,
    label,
    title: course.title,
    description: course.description,
    level,
    price,
    thumbnailUrl: course.thumbnailUrl,
    theme,
    detail: {
      slug: course.slug,
      title: course.title,
      label,
      level,
      price,
      instructors: "Tim Mentor ASN Wiyata Academy",
      description: course.description,
      duration: course.duration,
      lessons: `${course.lessonCount} materi`,
      practiceTests: "Simulasi Tryout CAT",
      bannerLabel: label,
      bannerTheme: theme,
      bannerUrl: course.bannerUrl,
      outcomes: [
        `Menguasai materi inti dalam program ${course.title}.`,
        "Mengikuti alur belajar terarah sesuai kisi-kisi seleksi CASN terbaru.",
        "Berlatih soal HOTS berbatas waktu dengan pembahasan sistematis.",
      ],
      about: [
        `${course.title} disiapkan untuk membantu calon ASN membangun kesiapan ujian yang terukur.`,
        "Materi disusun bertahap mulai dari pemahaman konsep, trik pengerjaan cepat, hingga evaluasi skor.",
      ],
      syllabus: skdIntensifSyllabus,
      faqs: detailBySlug["intensif-skd-cpns"].faqs,
    },
  };
}

export function toDisplayLevel(level: CourseSummary["level"]) {
  const labels: Record<CourseSummary["level"], string> = {
    beginner: "Pemula",
    intermediate: "Menengah",
    advanced: "Lanjutan",
  };

  return labels[level];
}

export function formatCoursePrice(priceCents: number) {
  return new Intl.NumberFormat("id-ID", {
    currency: "IDR",
    maximumFractionDigits: 0,
    style: "currency",
  }).format(priceCents / 100);
}

function getThemeFromCategory(categorySlug: string): CourseTheme {
  if (categorySlug.includes("bundling")) {
    return "violet";
  }

  if (categorySlug.includes("pppk")) {
    return "cyan";
  }

  if (categorySlug.includes("skb")) {
    return "mint";
  }

  if (categorySlug.includes("tryout")) {
    return "sky";
  }

  return "blue";
}
