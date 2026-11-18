import type { CourseSummary } from "@/modules/catalog/application/dtos";

export type CourseTheme = "mint" | "blue" | "violet" | "cyan" | "sky" | "rose" | "amber";

export type CourseSyllabusSection = {
  title: string;
  description: string;
  lessons: string;
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
    title: "Pemetaan Kisi-Kisi & Diagnostik Awal SKD",
    description:
      "Pahami aturan passing grade KemenPAN-RB, bobot nilai TWK/TIU/TKP, dan ukur skor awal lewat tes diagnostik.",
    lessons: "4 materi + 1 diagnostik",
  },
  {
    title: "TWK: Nasionalisme, Integritas & Bela Negara",
    description:
      "Latih soal studi kasus implementasi Pancasila, UUD 1945, Bhinneka Tunggal Ika, dan pilar kebangsaan berbasis penalaran.",
    lessons: "10 materi + 2 kuis",
  },
  {
    title: "TIU: Verbal, Numerik, Silogisme & Figural",
    description:
      "Kuasai pola deret, perbandingan kuantitatif, aritmatika sosial, penarikan kesimpulan, dan rotasi bangun ruang secara cepat.",
    lessons: "12 materi + 3 drill",
  },
  {
    title: "TKP: Strategi Memilih Opsi Skor 5",
    description:
      "Bedah 6 aspek TKP (Pelayanan Publik, Jejaring Kerja, Sosial Budaya, TIK, Profesionalisme, Anti-Radikalisme) agar tidak terjebak skor 3–4.",
    lessons: "10 materi + 4 simulasi CAT",
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
    label: "SKD CPNS",
    level: "Pemula",
    price: "Rp 279.000",
    instructors: "Tim Mentor ASN Wiyata Academy",
    description:
      "Program terstruktur dari nol untuk menembus ambang batas dan meraih skor tinggi SKD CPNS berbasis CAT BKN.",
    duration: "8 minggu",
    lessons: "36 materi",
    practiceTests: "8 Tryout CAT BKN",
    bannerLabel: "SKD CPNS 2026",
    bannerTheme: "blue",
    bannerUrl: "/images/courses/asn-cpns-banner.svg",
    outcomes: [
      "Menguasai seluruh kisi-kisi terbaru TWK, TIU, dan TKP sesuai standar KemenPAN-RB.",
      "Meningkatkan kecepatan berhitung TIU dan ketajaman analisis soal TWK berbasis penalaran.",
      "Menerapkan strategi pemeringkatan opsi TKP untuk konsisten meraih skor 4–5.",
      "Mengelola waktu 100 menit untuk 110 soal CAT tanpa panik di akhir sesi.",
    ],
    about: [
      "Intensif SKD CPNS dirancang bagi peserta yang ingin membangun fondasi kuat sekaligus berlatih soal-soal HOTS terbaru secara sistematis.",
      "Setiap modul disusun ringkas dengan rangkuman konsep, contoh soal bertingkat, trik penyelesaian cepat, serta catatan evaluasi kesalahan (error log).",
      "Dilengkapi simulasi CAT BKN agar Anda terbiasa dengan alur pengerjaan, manajemen waktu per subtes, dan target skor aman di atas passing grade.",
    ],
    syllabus: skdIntensifSyllabus,
    faqs: [
      {
        question: "Apakah materi sudah sesuai kisi-kisi CPNS terbaru?",
        answer:
          "Ya, seluruh materi TWK penalaran, TIU, dan TKP disusun mengacu pada kisi-kisi resmi seleksi CASN terbaru.",
      },
      {
        question: "Apakah cocok untuk peserta yang baru pertama kali ikut CPNS?",
        answer:
          "Sangat cocok. Modul dimulai dari pengenalan sistem CAT, ambang batas nilai, hingga latihan soal bertahap.",
      },
      {
        question: "Berapa lama akses materi dan tryout berlaku?",
        answer:
          "Akses modul dan bank soal berlaku penuh hingga rangkaian seleksi CPNS periode berjalan selesai.",
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
