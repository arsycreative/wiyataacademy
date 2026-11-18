export const EXAM_PILLARS = [
  { code: "TWK", label: "Tes Wawasan Kebangsaan" },
  { code: "TIU", label: "Tes Intelegensia Umum" },
  { code: "TKP", label: "Tes Karakteristik Pribadi" },
  { code: "SKB", label: "Seleksi Kompetensi Bidang (Segera)" },
] as const;

export const LEARNING_STEPS = [
  {
    step: "01",
    title: "Pahami Kisi-Kisi & Fokus SKD",
    description:
      "Mulai dari pemetaan bobot penilaian TWK, TIU, dan TKP agar belajar langsung tepat sasaran.",
  },
  {
    step: "02",
    title: "Kuasai Konsep & Trik Cepat",
    description:
      "Pelajari rangkuman konsep inti beserta teknik hitung cepat TIU dan pemeringkatan opsi TKP.",
  },
  {
    step: "03",
    title: "Latihan Terukur & Evaluasi",
    description:
      "Ukur kesiapan secara berkala lewat latihan soal berbatas waktu dan pembahasan yang mudah dipahami.",
  },
] as const;

export const TESTIMONIALS = [
  {
    initials: "SR",
    name: "Siti Rahma, S.E.",
    role: "CPNS Kemenkeu",
    quote:
      "Alur belajarnya jelas dari nol. Trik TIU dan strategi TKP-nya bikin pengerjaan jauh lebih tenang.",
  },
  {
    initials: "BP",
    name: "Bagus Pratama, S.Kom.",
    role: "CPNS Pemprov Jateng",
    quote:
      "Ringkas dan fokus ke pola soal yang sering keluar. Sangat membantu membagi waktu belajar saat bekerja.",
  },
  {
    initials: "NP",
    name: "Nadia Putri, S.Pd.",
    role: "CPNS Pemkot Bandung",
    quote:
      "Pembahasan per materinya langsung ke inti dan terstruktur, membantu saya lolos SKD dengan lebih percaya diri.",
  },
] as const;

export const LANDING_FAQS = [
  {
    question: "Apakah materi sudah sesuai kisi-kisi SKD CPNS terbaru?",
    answer:
      "Ya, seluruh modul TWK, TIU, dan TKP disusun mengacu pada kisi-kisi resmi seleksi CPNS terbaru.",
  },
  {
    question: "Apakah cocok untuk pemula yang baru pertama kali daftar CPNS?",
    answer:
      "Cocok. Materi disusun bertahap mulai dari pengenalan konsep dasar sampai latihan soal HOTS.",
  },
  {
    question: "Bagaimana dengan program SKB CPNS dan program lainnya?",
    answer:
      "Program SKB dan program berikutnya saat ini masih dalam tahap persiapan. Fokus utama saat ini adalah Intensif SKD CPNS.",
  },
  {
    question: "Apakah jadwal belajarnya fleksibel bagi yang bekerja?",
    answer:
      "Sangat fleksibel. Materi ringkas dan latihan dapat diakses kapan saja sesuai ritme belajar Anda.",
  },
] as const;
