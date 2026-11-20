import type { QuestionDraft } from "@/modules/question-bank/domain/question";

export const analisisTabelBatch1Drafts: readonly QuestionDraft[] = [
  {
    "id": "tiu-tab-001",
    "subPattern": "total-dan-selisih-data",
    "difficulty": "mudah",
    "prompt": "Perhatikan tabel jumlah dokumen yang diverifikasi pada empat unit kerja berikut:\n| Unit Kerja | Triwulan I | Triwulan II | Triwulan III |\n| Unit A | 20 | 24 | 28 |\n| Unit B | 25 | 30 | 32 |\n| Unit C | 30 | 36 | 36 |\n| Unit D | 35 | 42 | 40 |\nBerapakah jumlah seluruh dokumen yang diverifikasi oleh Unit A selama tiga triwulan tersebut?",
    "options": [
      "72 dokumen",
      "82 dokumen",
      "86 dokumen",
      "90 dokumen",
      "77 dokumen"
    ],
    "answer": "A",
    "explanation": "Jumlah dokumen pada Unit A = 20 + 24 + 28 = 72 dokumen.",
    "tip": "Fokus hanya pada baris unit yang ditanyakan di soal, lalu jumlahkan angka ketiga kolomnya."
  },
  {
    "id": "tiu-tab-002",
    "subPattern": "total-dan-selisih-data",
    "difficulty": "mudah",
    "prompt": "Perhatikan tabel jumlah dokumen yang diverifikasi pada empat unit kerja berikut:\n| Unit Kerja | Triwulan I | Triwulan II | Triwulan III |\n| Wilayah I | 23 | 27 | 31 |\n| Wilayah II | 28 | 33 | 35 |\n| Wilayah III | 33 | 39 | 39 |\n| Wilayah IV | 38 | 45 | 43 |\nBerapakah jumlah seluruh dokumen yang diverifikasi oleh Wilayah II selama tiga triwulan tersebut?",
    "options": [
      "106 dokumen",
      "96 dokumen",
      "115 dokumen",
      "86 dokumen",
      "101 dokumen"
    ],
    "answer": "B",
    "explanation": "Jumlah dokumen pada Wilayah II = 28 + 33 + 35 = 96 dokumen.",
    "tip": "Fokus hanya pada baris unit yang ditanyakan di soal, lalu jumlahkan angka ketiga kolomnya."
  },
  {
    "id": "tiu-tab-003",
    "subPattern": "total-dan-selisih-data",
    "difficulty": "mudah",
    "prompt": "Perhatikan tabel jumlah dokumen yang diverifikasi pada empat unit kerja berikut:\n| Unit Kerja | Triwulan I | Triwulan II | Triwulan III |\n| Kantor P | 26 | 30 | 34 |\n| Kantor Q | 31 | 36 | 38 |\n| Kantor R | 36 | 42 | 42 |\n| Kantor S | 41 | 48 | 46 |\nBerapakah jumlah seluruh dokumen yang diverifikasi oleh Kantor R selama tiga triwulan tersebut?",
    "options": [
      "130 dokumen",
      "110 dokumen",
      "120 dokumen",
      "115 dokumen",
      "125 dokumen"
    ],
    "answer": "C",
    "explanation": "Jumlah dokumen pada Kantor R = 36 + 42 + 42 = 120 dokumen.",
    "tip": "Fokus hanya pada baris unit yang ditanyakan di soal, lalu jumlahkan angka ketiga kolomnya."
  },
  {
    "id": "tiu-tab-004",
    "subPattern": "total-dan-selisih-data",
    "difficulty": "mudah",
    "prompt": "Perhatikan tabel jumlah dokumen yang diverifikasi pada empat unit kerja berikut:\n| Unit Kerja | Triwulan I | Triwulan II | Triwulan III |\n| Sektor 1 | 29 | 33 | 37 |\n| Sektor 2 | 34 | 39 | 41 |\n| Sektor 3 | 39 | 45 | 45 |\n| Sektor 4 | 44 | 51 | 49 |\nBerapakah jumlah seluruh dokumen yang diverifikasi oleh Sektor 4 selama tiga triwulan tersebut?",
    "options": [
      "134 dokumen",
      "139 dokumen",
      "108 dokumen",
      "144 dokumen",
      "149 dokumen"
    ],
    "answer": "D",
    "explanation": "Jumlah dokumen pada Sektor 4 = 44 + 51 + 49 = 144 dokumen.",
    "tip": "Fokus hanya pada baris unit yang ditanyakan di soal, lalu jumlahkan angka ketiga kolomnya."
  },
  {
    "id": "tiu-tab-005",
    "subPattern": "total-dan-selisih-data",
    "difficulty": "mudah",
    "prompt": "Perhatikan tabel jumlah dokumen yang diverifikasi pada empat unit kerja berikut:\n| Unit Kerja | Triwulan I | Triwulan II | Triwulan III |\n| Cabang Utara | 32 | 36 | 40 |\n| Cabang Selatan | 37 | 42 | 44 |\n| Cabang Timur | 42 | 48 | 48 |\n| Cabang Barat | 47 | 54 | 52 |\nBerapakah jumlah seluruh dokumen yang diverifikasi oleh Cabang Utara selama tiga triwulan tersebut?",
    "options": [
      "103 dokumen",
      "81 dokumen",
      "86 dokumen",
      "98 dokumen",
      "108 dokumen"
    ],
    "answer": "E",
    "explanation": "Jumlah dokumen pada Cabang Utara = 32 + 36 + 40 = 108 dokumen.",
    "tip": "Fokus hanya pada baris unit yang ditanyakan di soal, lalu jumlahkan angka ketiga kolomnya."
  },
  {
    "id": "tiu-tab-006",
    "subPattern": "total-dan-selisih-data",
    "difficulty": "mudah",
    "prompt": "Perhatikan tabel jumlah dokumen yang diverifikasi pada empat unit kerja berikut:\n| Unit Kerja | Triwulan I | Triwulan II | Triwulan III |\n| Balai A | 35 | 39 | 43 |\n| Balai B | 40 | 45 | 47 |\n| Balai C | 45 | 51 | 51 |\n| Balai D | 50 | 57 | 55 |\nBerapakah jumlah seluruh dokumen yang diverifikasi oleh Balai B selama tiga triwulan tersebut?",
    "options": [
      "132 dokumen",
      "158 dokumen",
      "165 dokumen",
      "137 dokumen",
      "142 dokumen"
    ],
    "answer": "A",
    "explanation": "Jumlah dokumen pada Balai B = 40 + 45 + 47 = 132 dokumen.",
    "tip": "Fokus hanya pada baris unit yang ditanyakan di soal, lalu jumlahkan angka ketiga kolomnya."
  },
  {
    "id": "tiu-tab-007",
    "subPattern": "total-dan-selisih-data",
    "difficulty": "mudah",
    "prompt": "Perhatikan tabel jumlah dokumen yang diverifikasi pada empat unit kerja berikut:\n| Unit Kerja | Triwulan I | Triwulan II | Triwulan III |\n| Unit A | 38 | 42 | 46 |\n| Unit B | 43 | 48 | 50 |\n| Unit C | 48 | 54 | 54 |\n| Unit D | 53 | 60 | 58 |\nBerapakah jumlah seluruh dokumen yang diverifikasi oleh Unit C selama tiga triwulan tersebut?",
    "options": [
      "187 dokumen",
      "156 dokumen",
      "146 dokumen",
      "161 dokumen",
      "166 dokumen"
    ],
    "answer": "B",
    "explanation": "Jumlah dokumen pada Unit C = 48 + 54 + 54 = 156 dokumen.",
    "tip": "Fokus hanya pada baris unit yang ditanyakan di soal, lalu jumlahkan angka ketiga kolomnya."
  },
  {
    "id": "tiu-tab-008",
    "subPattern": "total-dan-selisih-data",
    "difficulty": "mudah",
    "prompt": "Perhatikan tabel jumlah dokumen yang diverifikasi pada empat unit kerja berikut:\n| Unit Kerja | Triwulan I | Triwulan II | Triwulan III |\n| Wilayah I | 41 | 45 | 49 |\n| Wilayah II | 46 | 51 | 53 |\n| Wilayah III | 51 | 57 | 57 |\n| Wilayah IV | 56 | 63 | 61 |\nBerapakah jumlah seluruh dokumen yang diverifikasi oleh Wilayah IV selama tiga triwulan tersebut?",
    "options": [
      "170 dokumen",
      "175 dokumen",
      "180 dokumen",
      "185 dokumen",
      "190 dokumen"
    ],
    "answer": "C",
    "explanation": "Jumlah dokumen pada Wilayah IV = 56 + 63 + 61 = 180 dokumen.",
    "tip": "Fokus hanya pada baris unit yang ditanyakan di soal, lalu jumlahkan angka ketiga kolomnya."
  },
  {
    "id": "tiu-tab-009",
    "subPattern": "total-dan-selisih-data",
    "difficulty": "mudah",
    "prompt": "Perhatikan tabel jumlah dokumen yang diverifikasi pada empat unit kerja berikut:\n| Unit Kerja | Triwulan I | Triwulan II | Triwulan III |\n| Kantor P | 44 | 48 | 52 |\n| Kantor Q | 49 | 54 | 56 |\n| Kantor R | 54 | 60 | 60 |\n| Kantor S | 59 | 66 | 64 |\nBerapakah jumlah seluruh dokumen yang diverifikasi oleh Kantor P selama tiga triwulan tersebut?",
    "options": [
      "139 dokumen",
      "108 dokumen",
      "149 dokumen",
      "144 dokumen",
      "134 dokumen"
    ],
    "answer": "D",
    "explanation": "Jumlah dokumen pada Kantor P = 44 + 48 + 52 = 144 dokumen.",
    "tip": "Fokus hanya pada baris unit yang ditanyakan di soal, lalu jumlahkan angka ketiga kolomnya."
  },
  {
    "id": "tiu-tab-010",
    "subPattern": "total-dan-selisih-data",
    "difficulty": "mudah",
    "prompt": "Perhatikan tabel jumlah dokumen yang diverifikasi pada empat unit kerja berikut:\n| Unit Kerja | Triwulan I | Triwulan II | Triwulan III |\n| Sektor 1 | 47 | 51 | 55 |\n| Sektor 2 | 52 | 57 | 59 |\n| Sektor 3 | 57 | 63 | 63 |\n| Sektor 4 | 62 | 69 | 67 |\nBerapakah jumlah seluruh dokumen yang diverifikasi oleh Sektor 2 selama tiga triwulan tersebut?",
    "options": [
      "126 dokumen",
      "134 dokumen",
      "158 dokumen",
      "163 dokumen",
      "168 dokumen"
    ],
    "answer": "E",
    "explanation": "Jumlah dokumen pada Sektor 2 = 52 + 57 + 59 = 168 dokumen.",
    "tip": "Fokus hanya pada baris unit yang ditanyakan di soal, lalu jumlahkan angka ketiga kolomnya."
  },
  {
    "id": "tiu-tab-011",
    "subPattern": "total-dan-selisih-data",
    "difficulty": "sedang",
    "prompt": "Perhatikan tabel distribusi logistik pangan (dalam ton) di empat lokasi berikut:\n| Lokasi | Semester I (ton) | Semester II (ton) |\n| Cabang Utara | 30 | 35 |\n| Cabang Selatan | 36 | 43 |\n| Cabang Timur | 42 | 51 |\n| Cabang Barat | 48 | 59 |\nBerapakah selisih total distribusi logistik antara Semester II dan Semester I dari seluruh lokasi?",
    "options": [
      "32 ton",
      "48 ton",
      "36 ton",
      "40 ton",
      "38 ton"
    ],
    "answer": "A",
    "explanation": "Total Semester I = 30 + 36 + 42 + 48 = 156 ton. Total Semester II = 35 + 43 + 51 + 59 = 188 ton. Selisih = 188 - 156 = 32 ton.",
    "tip": "Untuk mencari selisih total dua kolom dengan cepat, Anda juga bisa menjumlahkan selisih per barisnya secara langsung."
  },
  {
    "id": "tiu-tab-012",
    "subPattern": "total-dan-selisih-data",
    "difficulty": "sedang",
    "prompt": "Perhatikan tabel distribusi logistik pangan (dalam ton) di empat lokasi berikut:\n| Lokasi | Semester I (ton) | Semester II (ton) |\n| Balai A | 34 | 39 |\n| Balai B | 40 | 47 |\n| Balai C | 46 | 55 |\n| Balai D | 52 | 63 |\nBerapakah selisih total distribusi logistik antara Semester II dan Semester I dari seluruh lokasi?",
    "options": [
      "24 ton",
      "32 ton",
      "36 ton",
      "40 ton",
      "38 ton"
    ],
    "answer": "B",
    "explanation": "Total Semester I = 34 + 40 + 46 + 52 = 172 ton. Total Semester II = 39 + 47 + 55 + 63 = 204 ton. Selisih = 204 - 172 = 32 ton.",
    "tip": "Untuk mencari selisih total dua kolom dengan cepat, Anda juga bisa menjumlahkan selisih per barisnya secara langsung."
  },
  {
    "id": "tiu-tab-013",
    "subPattern": "total-dan-selisih-data",
    "difficulty": "sedang",
    "prompt": "Perhatikan tabel distribusi logistik pangan (dalam ton) di empat lokasi berikut:\n| Lokasi | Semester I (ton) | Semester II (ton) |\n| Unit A | 38 | 43 |\n| Unit B | 44 | 51 |\n| Unit C | 50 | 59 |\n| Unit D | 56 | 67 |\nBerapakah selisih total distribusi logistik antara Semester II dan Semester I dari seluruh lokasi?",
    "options": [
      "28 ton",
      "36 ton",
      "32 ton",
      "40 ton",
      "24 ton"
    ],
    "answer": "C",
    "explanation": "Total Semester I = 38 + 44 + 50 + 56 = 188 ton. Total Semester II = 43 + 51 + 59 + 67 = 220 ton. Selisih = 220 - 188 = 32 ton.",
    "tip": "Untuk mencari selisih total dua kolom dengan cepat, Anda juga bisa menjumlahkan selisih per barisnya secara langsung."
  },
  {
    "id": "tiu-tab-014",
    "subPattern": "total-dan-selisih-data",
    "difficulty": "sedang",
    "prompt": "Perhatikan tabel distribusi logistik pangan (dalam ton) di empat lokasi berikut:\n| Lokasi | Semester I (ton) | Semester II (ton) |\n| Wilayah I | 42 | 47 |\n| Wilayah II | 48 | 55 |\n| Wilayah III | 54 | 63 |\n| Wilayah IV | 60 | 71 |\nBerapakah selisih total distribusi logistik antara Semester II dan Semester I dari seluruh lokasi?",
    "options": [
      "26 ton",
      "36 ton",
      "24 ton",
      "32 ton",
      "28 ton"
    ],
    "answer": "D",
    "explanation": "Total Semester I = 42 + 48 + 54 + 60 = 204 ton. Total Semester II = 47 + 55 + 63 + 71 = 236 ton. Selisih = 236 - 204 = 32 ton.",
    "tip": "Untuk mencari selisih total dua kolom dengan cepat, Anda juga bisa menjumlahkan selisih per barisnya secara langsung."
  },
  {
    "id": "tiu-tab-015",
    "subPattern": "total-dan-selisih-data",
    "difficulty": "sedang",
    "prompt": "Perhatikan tabel distribusi logistik pangan (dalam ton) di empat lokasi berikut:\n| Lokasi | Semester I (ton) | Semester II (ton) |\n| Kantor P | 46 | 51 |\n| Kantor Q | 52 | 59 |\n| Kantor R | 58 | 67 |\n| Kantor S | 64 | 75 |\nBerapakah selisih total distribusi logistik antara Semester II dan Semester I dari seluruh lokasi?",
    "options": [
      "16 ton",
      "24 ton",
      "28 ton",
      "26 ton",
      "32 ton"
    ],
    "answer": "E",
    "explanation": "Total Semester I = 46 + 52 + 58 + 64 = 220 ton. Total Semester II = 51 + 59 + 67 + 75 = 252 ton. Selisih = 252 - 220 = 32 ton.",
    "tip": "Untuk mencari selisih total dua kolom dengan cepat, Anda juga bisa menjumlahkan selisih per barisnya secara langsung."
  },
  {
    "id": "tiu-tab-016",
    "subPattern": "total-dan-selisih-data",
    "difficulty": "sedang",
    "prompt": "Perhatikan tabel distribusi logistik pangan (dalam ton) di empat lokasi berikut:\n| Lokasi | Semester I (ton) | Semester II (ton) |\n| Sektor 1 | 50 | 55 |\n| Sektor 2 | 56 | 63 |\n| Sektor 3 | 62 | 71 |\n| Sektor 4 | 68 | 79 |\nBerapakah selisih total distribusi logistik antara Semester II dan Semester I dari seluruh lokasi?",
    "options": [
      "32 ton",
      "36 ton",
      "40 ton",
      "38 ton",
      "48 ton"
    ],
    "answer": "A",
    "explanation": "Total Semester I = 50 + 56 + 62 + 68 = 236 ton. Total Semester II = 55 + 63 + 71 + 79 = 268 ton. Selisih = 268 - 236 = 32 ton.",
    "tip": "Untuk mencari selisih total dua kolom dengan cepat, Anda juga bisa menjumlahkan selisih per barisnya secara langsung."
  },
  {
    "id": "tiu-tab-017",
    "subPattern": "total-dan-selisih-data",
    "difficulty": "sedang",
    "prompt": "Perhatikan tabel distribusi logistik pangan (dalam ton) di empat lokasi berikut:\n| Lokasi | Semester I (ton) | Semester II (ton) |\n| Cabang Utara | 54 | 59 |\n| Cabang Selatan | 60 | 67 |\n| Cabang Timur | 66 | 75 |\n| Cabang Barat | 72 | 83 |\nBerapakah selisih total distribusi logistik antara Semester II dan Semester I dari seluruh lokasi?",
    "options": [
      "36 ton",
      "32 ton",
      "40 ton",
      "38 ton",
      "24 ton"
    ],
    "answer": "B",
    "explanation": "Total Semester I = 54 + 60 + 66 + 72 = 252 ton. Total Semester II = 59 + 67 + 75 + 83 = 284 ton. Selisih = 284 - 252 = 32 ton.",
    "tip": "Untuk mencari selisih total dua kolom dengan cepat, Anda juga bisa menjumlahkan selisih per barisnya secara langsung."
  },
  {
    "id": "tiu-tab-018",
    "subPattern": "total-dan-selisih-data",
    "difficulty": "sedang",
    "prompt": "Perhatikan tabel distribusi logistik pangan (dalam ton) di empat lokasi berikut:\n| Lokasi | Semester I (ton) | Semester II (ton) |\n| Balai A | 58 | 63 |\n| Balai B | 64 | 71 |\n| Balai C | 70 | 79 |\n| Balai D | 76 | 87 |\nBerapakah selisih total distribusi logistik antara Semester II dan Semester I dari seluruh lokasi?",
    "options": [
      "36 ton",
      "40 ton",
      "32 ton",
      "24 ton",
      "28 ton"
    ],
    "answer": "C",
    "explanation": "Total Semester I = 58 + 64 + 70 + 76 = 268 ton. Total Semester II = 63 + 71 + 79 + 87 = 300 ton. Selisih = 300 - 268 = 32 ton.",
    "tip": "Untuk mencari selisih total dua kolom dengan cepat, Anda juga bisa menjumlahkan selisih per barisnya secara langsung."
  },
  {
    "id": "tiu-tab-019",
    "subPattern": "total-dan-selisih-data",
    "difficulty": "sedang",
    "prompt": "Perhatikan tabel distribusi logistik pangan (dalam ton) di empat lokasi berikut:\n| Lokasi | Semester I (ton) | Semester II (ton) |\n| Unit A | 62 | 67 |\n| Unit B | 68 | 75 |\n| Unit C | 74 | 83 |\n| Unit D | 80 | 91 |\nBerapakah selisih total distribusi logistik antara Semester II dan Semester I dari seluruh lokasi?",
    "options": [
      "36 ton",
      "24 ton",
      "28 ton",
      "32 ton",
      "26 ton"
    ],
    "answer": "D",
    "explanation": "Total Semester I = 62 + 68 + 74 + 80 = 284 ton. Total Semester II = 67 + 75 + 83 + 91 = 316 ton. Selisih = 316 - 284 = 32 ton.",
    "tip": "Untuk mencari selisih total dua kolom dengan cepat, Anda juga bisa menjumlahkan selisih per barisnya secara langsung."
  },
  {
    "id": "tiu-tab-020",
    "subPattern": "total-dan-selisih-data",
    "difficulty": "sedang",
    "prompt": "Perhatikan tabel distribusi logistik pangan (dalam ton) di empat lokasi berikut:\n| Lokasi | Semester I (ton) | Semester II (ton) |\n| Wilayah I | 66 | 71 |\n| Wilayah II | 72 | 79 |\n| Wilayah III | 78 | 87 |\n| Wilayah IV | 84 | 95 |\nBerapakah selisih total distribusi logistik antara Semester II dan Semester I dari seluruh lokasi?",
    "options": [
      "24 ton",
      "28 ton",
      "26 ton",
      "16 ton",
      "32 ton"
    ],
    "answer": "E",
    "explanation": "Total Semester I = 66 + 72 + 78 + 84 = 300 ton. Total Semester II = 71 + 79 + 87 + 95 = 332 ton. Selisih = 332 - 300 = 32 ton.",
    "tip": "Untuk mencari selisih total dua kolom dengan cepat, Anda juga bisa menjumlahkan selisih per barisnya secara langsung."
  },
  {
    "id": "tiu-tab-021",
    "subPattern": "total-dan-selisih-data",
    "difficulty": "sulit",
    "prompt": "Perhatikan tabel jumlah permohonan layanan di lima cabang selama tiga bulan berikut:\n| Cabang | Januari | Februari | Maret |\n| Kantor P | 40 | 45 | 50 |\n| Kantor Q | 52 | 48 | 55 |\n| Kantor R | 46 | 54 | 44 |\n| Kantor S | 60 | 58 | 62 |\n| Kantor T | 43 | 42 | 45 |\nBerapakah selisih total permohonan antara cabang dengan total tertinggi dan cabang dengan total terendah selama periode tersebut?",
    "options": [
      "50 permohonan",
      "60 permohonan",
      "75 permohonan",
      "70 permohonan",
      "55 permohonan"
    ],
    "answer": "A",
    "explanation": "Total tertinggi adalah Kantor S (60 + 58 + 62 = 180), sedangkan total terendah adalah Kantor T (43 + 42 + 45 = 130). Selisihnya = 180 - 130 = 50.",
    "tip": "Amati baris yang angkanya konsisten paling besar dan paling kecil terlebih dahulu tanpa perlu menjumlahkan baris-baris penengah."
  },
  {
    "id": "tiu-tab-022",
    "subPattern": "total-dan-selisih-data",
    "difficulty": "sulit",
    "prompt": "Perhatikan tabel jumlah permohonan layanan di lima cabang selama tiga bulan berikut:\n| Cabang | Januari | Februari | Maret |\n| Sektor 1 | 45 | 50 | 55 |\n| Sektor 2 | 57 | 53 | 60 |\n| Sektor 3 | 51 | 59 | 49 |\n| Sektor 4 | 65 | 63 | 67 |\n| Sektor 5 | 48 | 47 | 50 |\nBerapakah selisih total permohonan antara cabang dengan total tertinggi dan cabang dengan total terendah selama periode tersebut?",
    "options": [
      "60 permohonan",
      "50 permohonan",
      "75 permohonan",
      "40 permohonan",
      "55 permohonan"
    ],
    "answer": "B",
    "explanation": "Total tertinggi adalah Sektor 4 (65 + 63 + 67 = 195), sedangkan total terendah adalah Sektor 5 (48 + 47 + 50 = 145). Selisihnya = 195 - 145 = 50.",
    "tip": "Amati baris yang angkanya konsisten paling besar dan paling kecil terlebih dahulu tanpa perlu menjumlahkan baris-baris penengah."
  },
  {
    "id": "tiu-tab-023",
    "subPattern": "total-dan-selisih-data",
    "difficulty": "sulit",
    "prompt": "Perhatikan tabel jumlah permohonan layanan di lima cabang selama tiga bulan berikut:\n| Cabang | Januari | Februari | Maret |\n| Cabang Utara | 50 | 55 | 60 |\n| Cabang Selatan | 62 | 58 | 65 |\n| Cabang Timur | 56 | 64 | 54 |\n| Cabang Barat | 70 | 68 | 72 |\n| Cabang Pusat | 53 | 52 | 55 |\nBerapakah selisih total permohonan antara cabang dengan total tertinggi dan cabang dengan total terendah selama periode tersebut?",
    "options": [
      "60 permohonan",
      "40 permohonan",
      "50 permohonan",
      "45 permohonan",
      "55 permohonan"
    ],
    "answer": "C",
    "explanation": "Total tertinggi adalah Cabang Barat (70 + 68 + 72 = 210), sedangkan total terendah adalah Cabang Pusat (53 + 52 + 55 = 160). Selisihnya = 210 - 160 = 50.",
    "tip": "Amati baris yang angkanya konsisten paling besar dan paling kecil terlebih dahulu tanpa perlu menjumlahkan baris-baris penengah."
  },
  {
    "id": "tiu-tab-024",
    "subPattern": "total-dan-selisih-data",
    "difficulty": "sulit",
    "prompt": "Perhatikan tabel jumlah permohonan layanan di lima cabang selama tiga bulan berikut:\n| Cabang | Januari | Februari | Maret |\n| Balai A | 55 | 60 | 65 |\n| Balai B | 67 | 63 | 70 |\n| Balai C | 61 | 69 | 59 |\n| Balai D | 75 | 73 | 77 |\n| Balai E | 58 | 57 | 60 |\nBerapakah selisih total permohonan antara cabang dengan total tertinggi dan cabang dengan total terendah selama periode tersebut?",
    "options": [
      "40 permohonan",
      "45 permohonan",
      "30 permohonan",
      "50 permohonan",
      "55 permohonan"
    ],
    "answer": "D",
    "explanation": "Total tertinggi adalah Balai D (75 + 73 + 77 = 225), sedangkan total terendah adalah Balai E (58 + 57 + 60 = 175). Selisihnya = 225 - 175 = 50.",
    "tip": "Amati baris yang angkanya konsisten paling besar dan paling kecil terlebih dahulu tanpa perlu menjumlahkan baris-baris penengah."
  },
  {
    "id": "tiu-tab-025",
    "subPattern": "total-dan-selisih-data",
    "difficulty": "sulit",
    "prompt": "Perhatikan tabel jumlah permohonan layanan di lima cabang selama tiga bulan berikut:\n| Cabang | Januari | Februari | Maret |\n| Unit A | 60 | 65 | 70 |\n| Unit B | 72 | 68 | 75 |\n| Unit C | 66 | 74 | 64 |\n| Unit D | 80 | 78 | 82 |\n| Unit E | 63 | 62 | 65 |\nBerapakah selisih total permohonan antara cabang dengan total tertinggi dan cabang dengan total terendah selama periode tersebut?",
    "options": [
      "45 permohonan",
      "30 permohonan",
      "35 permohonan",
      "40 permohonan",
      "50 permohonan"
    ],
    "answer": "E",
    "explanation": "Total tertinggi adalah Unit D (80 + 78 + 82 = 240), sedangkan total terendah adalah Unit E (63 + 62 + 65 = 190). Selisihnya = 240 - 190 = 50.",
    "tip": "Amati baris yang angkanya konsisten paling besar dan paling kecil terlebih dahulu tanpa perlu menjumlahkan baris-baris penengah."
  },
  {
    "id": "tiu-tab-026",
    "subPattern": "total-dan-selisih-data",
    "difficulty": "sulit",
    "prompt": "Perhatikan tabel jumlah permohonan layanan di lima cabang selama tiga bulan berikut:\n| Cabang | Januari | Februari | Maret |\n| Wilayah I | 65 | 70 | 75 |\n| Wilayah II | 77 | 73 | 80 |\n| Wilayah III | 71 | 79 | 69 |\n| Wilayah IV | 85 | 83 | 87 |\n| Wilayah V | 68 | 67 | 70 |\nBerapakah selisih total permohonan antara cabang dengan total tertinggi dan cabang dengan total terendah selama periode tersebut?",
    "options": [
      "50 permohonan",
      "75 permohonan",
      "70 permohonan",
      "55 permohonan",
      "60 permohonan"
    ],
    "answer": "A",
    "explanation": "Total tertinggi adalah Wilayah IV (85 + 83 + 87 = 255), sedangkan total terendah adalah Wilayah V (68 + 67 + 70 = 205). Selisihnya = 255 - 205 = 50.",
    "tip": "Amati baris yang angkanya konsisten paling besar dan paling kecil terlebih dahulu tanpa perlu menjumlahkan baris-baris penengah."
  },
  {
    "id": "tiu-tab-027",
    "subPattern": "total-dan-selisih-data",
    "difficulty": "sulit",
    "prompt": "Perhatikan tabel jumlah permohonan layanan di lima cabang selama tiga bulan berikut:\n| Cabang | Januari | Februari | Maret |\n| Kantor P | 70 | 75 | 80 |\n| Kantor Q | 82 | 78 | 85 |\n| Kantor R | 76 | 84 | 74 |\n| Kantor S | 90 | 88 | 92 |\n| Kantor T | 73 | 72 | 75 |\nBerapakah selisih total permohonan antara cabang dengan total tertinggi dan cabang dengan total terendah selama periode tersebut?",
    "options": [
      "75 permohonan",
      "50 permohonan",
      "40 permohonan",
      "55 permohonan",
      "60 permohonan"
    ],
    "answer": "B",
    "explanation": "Total tertinggi adalah Kantor S (90 + 88 + 92 = 270), sedangkan total terendah adalah Kantor T (73 + 72 + 75 = 220). Selisihnya = 270 - 220 = 50.",
    "tip": "Amati baris yang angkanya konsisten paling besar dan paling kecil terlebih dahulu tanpa perlu menjumlahkan baris-baris penengah."
  },
  {
    "id": "tiu-tab-028",
    "subPattern": "total-dan-selisih-data",
    "difficulty": "sulit",
    "prompt": "Perhatikan tabel jumlah permohonan layanan di lima cabang selama tiga bulan berikut:\n| Cabang | Januari | Februari | Maret |\n| Sektor 1 | 75 | 80 | 85 |\n| Sektor 2 | 87 | 83 | 90 |\n| Sektor 3 | 81 | 89 | 79 |\n| Sektor 4 | 95 | 93 | 97 |\n| Sektor 5 | 78 | 77 | 80 |\nBerapakah selisih total permohonan antara cabang dengan total tertinggi dan cabang dengan total terendah selama periode tersebut?",
    "options": [
      "40 permohonan",
      "45 permohonan",
      "50 permohonan",
      "55 permohonan",
      "60 permohonan"
    ],
    "answer": "C",
    "explanation": "Total tertinggi adalah Sektor 4 (95 + 93 + 97 = 285), sedangkan total terendah adalah Sektor 5 (78 + 77 + 80 = 235). Selisihnya = 285 - 235 = 50.",
    "tip": "Amati baris yang angkanya konsisten paling besar dan paling kecil terlebih dahulu tanpa perlu menjumlahkan baris-baris penengah."
  },
  {
    "id": "tiu-tab-029",
    "subPattern": "total-dan-selisih-data",
    "difficulty": "sulit",
    "prompt": "Perhatikan tabel jumlah permohonan layanan di lima cabang selama tiga bulan berikut:\n| Cabang | Januari | Februari | Maret |\n| Cabang Utara | 80 | 85 | 90 |\n| Cabang Selatan | 92 | 88 | 95 |\n| Cabang Timur | 86 | 94 | 84 |\n| Cabang Barat | 100 | 98 | 102 |\n| Cabang Pusat | 83 | 82 | 85 |\nBerapakah selisih total permohonan antara cabang dengan total tertinggi dan cabang dengan total terendah selama periode tersebut?",
    "options": [
      "45 permohonan",
      "30 permohonan",
      "55 permohonan",
      "50 permohonan",
      "40 permohonan"
    ],
    "answer": "D",
    "explanation": "Total tertinggi adalah Cabang Barat (100 + 98 + 102 = 300), sedangkan total terendah adalah Cabang Pusat (83 + 82 + 85 = 250). Selisihnya = 300 - 250 = 50.",
    "tip": "Amati baris yang angkanya konsisten paling besar dan paling kecil terlebih dahulu tanpa perlu menjumlahkan baris-baris penengah."
  },
  {
    "id": "tiu-tab-030",
    "subPattern": "total-dan-selisih-data",
    "difficulty": "sulit",
    "prompt": "Perhatikan tabel jumlah permohonan layanan di lima cabang selama tiga bulan berikut:\n| Cabang | Januari | Februari | Maret |\n| Balai A | 85 | 90 | 95 |\n| Balai B | 97 | 93 | 100 |\n| Balai C | 91 | 99 | 89 |\n| Balai D | 105 | 103 | 107 |\n| Balai E | 88 | 87 | 90 |\nBerapakah selisih total permohonan antara cabang dengan total tertinggi dan cabang dengan total terendah selama periode tersebut?",
    "options": [
      "30 permohonan",
      "35 permohonan",
      "40 permohonan",
      "45 permohonan",
      "50 permohonan"
    ],
    "answer": "E",
    "explanation": "Total tertinggi adalah Balai D (105 + 103 + 107 = 315), sedangkan total terendah adalah Balai E (88 + 87 + 90 = 265). Selisihnya = 315 - 265 = 50.",
    "tip": "Amati baris yang angkanya konsisten paling besar dan paling kecil terlebih dahulu tanpa perlu menjumlahkan baris-baris penengah."
  },
  {
    "id": "tiu-tab-031",
    "subPattern": "rata-rata-dan-rekapitulasi",
    "difficulty": "mudah",
    "prompt": "Perhatikan tabel jumlah peserta sosialisasi di lima unit pelayanan berikut:\n| Unit Pelayanan | Jumlah Peserta |\n| Wilayah I | 52 |\n| Wilayah II | 56 |\n| Wilayah III | 60 |\n| Wilayah IV | 64 |\n| Wilayah V | 68 |\nBerapakah rata-rata jumlah peserta sosialisasi per unit pelayanan?",
    "options": [
      "90 orang",
      "60 orang",
      "62 orang",
      "64 orang",
      "75 orang"
    ],
    "answer": "B",
    "explanation": "Jumlah seluruh peserta = 52 + 56 + 60 + 64 + 68 = 300 orang. Rata-rata = 300 / 5 = 60 orang.",
    "tip": "Gunakan nilai acuan tengah untuk menghitung rata-rata dengan cepat tanpa harus menjumlahkan angka besar satu per satu."
  },
  {
    "id": "tiu-tab-032",
    "subPattern": "rata-rata-dan-rekapitulasi",
    "difficulty": "mudah",
    "prompt": "Perhatikan tabel jumlah peserta sosialisasi di lima unit pelayanan berikut:\n| Unit Pelayanan | Jumlah Peserta |\n| Kantor P | 56 |\n| Kantor Q | 60 |\n| Kantor R | 64 |\n| Kantor S | 68 |\n| Kantor T | 72 |\nBerapakah rata-rata jumlah peserta sosialisasi per unit pelayanan?",
    "options": [
      "60 orang",
      "66 orang",
      "64 orang",
      "68 orang",
      "77 orang"
    ],
    "answer": "C",
    "explanation": "Jumlah seluruh peserta = 56 + 60 + 64 + 68 + 72 = 320 orang. Rata-rata = 320 / 5 = 64 orang.",
    "tip": "Gunakan nilai acuan tengah untuk menghitung rata-rata dengan cepat tanpa harus menjumlahkan angka besar satu per satu."
  },
  {
    "id": "tiu-tab-033",
    "subPattern": "rata-rata-dan-rekapitulasi",
    "difficulty": "mudah",
    "prompt": "Perhatikan tabel jumlah peserta sosialisasi di lima unit pelayanan berikut:\n| Unit Pelayanan | Jumlah Peserta |\n| Sektor 1 | 60 |\n| Sektor 2 | 64 |\n| Sektor 3 | 68 |\n| Sektor 4 | 72 |\n| Sektor 5 | 76 |\nBerapakah rata-rata jumlah peserta sosialisasi per unit pelayanan?",
    "options": [
      "66 orang",
      "70 orang",
      "72 orang",
      "68 orang",
      "64 orang"
    ],
    "answer": "D",
    "explanation": "Jumlah seluruh peserta = 60 + 64 + 68 + 72 + 76 = 340 orang. Rata-rata = 340 / 5 = 68 orang.",
    "tip": "Gunakan nilai acuan tengah untuk menghitung rata-rata dengan cepat tanpa harus menjumlahkan angka besar satu per satu."
  },
  {
    "id": "tiu-tab-034",
    "subPattern": "rata-rata-dan-rekapitulasi",
    "difficulty": "mudah",
    "prompt": "Perhatikan tabel jumlah peserta sosialisasi di lima unit pelayanan berikut:\n| Unit Pelayanan | Jumlah Peserta |\n| Cabang Utara | 64 |\n| Cabang Selatan | 68 |\n| Cabang Timur | 72 |\n| Cabang Barat | 76 |\n| Cabang Pusat | 80 |\nBerapakah rata-rata jumlah peserta sosialisasi per unit pelayanan?",
    "options": [
      "54 orang",
      "74 orang",
      "68 orang",
      "70 orang",
      "72 orang"
    ],
    "answer": "E",
    "explanation": "Jumlah seluruh peserta = 64 + 68 + 72 + 76 + 80 = 360 orang. Rata-rata = 360 / 5 = 72 orang.",
    "tip": "Gunakan nilai acuan tengah untuk menghitung rata-rata dengan cepat tanpa harus menjumlahkan angka besar satu per satu."
  },
  {
    "id": "tiu-tab-035",
    "subPattern": "rata-rata-dan-rekapitulasi",
    "difficulty": "mudah",
    "prompt": "Perhatikan tabel jumlah peserta sosialisasi di lima unit pelayanan berikut:\n| Unit Pelayanan | Jumlah Peserta |\n| Balai A | 68 |\n| Balai B | 72 |\n| Balai C | 76 |\n| Balai D | 80 |\n| Balai E | 84 |\nBerapakah rata-rata jumlah peserta sosialisasi per unit pelayanan?",
    "options": [
      "76 orang",
      "61 orang",
      "72 orang",
      "74 orang",
      "57 orang"
    ],
    "answer": "A",
    "explanation": "Jumlah seluruh peserta = 68 + 72 + 76 + 80 + 84 = 380 orang. Rata-rata = 380 / 5 = 76 orang.",
    "tip": "Gunakan nilai acuan tengah untuk menghitung rata-rata dengan cepat tanpa harus menjumlahkan angka besar satu per satu."
  },
  {
    "id": "tiu-tab-036",
    "subPattern": "rata-rata-dan-rekapitulasi",
    "difficulty": "mudah",
    "prompt": "Perhatikan tabel jumlah peserta sosialisasi di lima unit pelayanan berikut:\n| Unit Pelayanan | Jumlah Peserta |\n| Unit A | 72 |\n| Unit B | 76 |\n| Unit C | 80 |\n| Unit D | 84 |\n| Unit E | 88 |\nBerapakah rata-rata jumlah peserta sosialisasi per unit pelayanan?",
    "options": [
      "82 orang",
      "80 orang",
      "84 orang",
      "100 orang",
      "120 orang"
    ],
    "answer": "B",
    "explanation": "Jumlah seluruh peserta = 72 + 76 + 80 + 84 + 88 = 400 orang. Rata-rata = 400 / 5 = 80 orang.",
    "tip": "Gunakan nilai acuan tengah untuk menghitung rata-rata dengan cepat tanpa harus menjumlahkan angka besar satu per satu."
  },
  {
    "id": "tiu-tab-037",
    "subPattern": "rata-rata-dan-rekapitulasi",
    "difficulty": "mudah",
    "prompt": "Perhatikan tabel jumlah peserta sosialisasi di lima unit pelayanan berikut:\n| Unit Pelayanan | Jumlah Peserta |\n| Wilayah I | 76 |\n| Wilayah II | 80 |\n| Wilayah III | 84 |\n| Wilayah IV | 88 |\n| Wilayah V | 92 |\nBerapakah rata-rata jumlah peserta sosialisasi per unit pelayanan?",
    "options": [
      "86 orang",
      "88 orang",
      "84 orang",
      "101 orang",
      "80 orang"
    ],
    "answer": "C",
    "explanation": "Jumlah seluruh peserta = 76 + 80 + 84 + 88 + 92 = 420 orang. Rata-rata = 420 / 5 = 84 orang.",
    "tip": "Gunakan nilai acuan tengah untuk menghitung rata-rata dengan cepat tanpa harus menjumlahkan angka besar satu per satu."
  },
  {
    "id": "tiu-tab-038",
    "subPattern": "rata-rata-dan-rekapitulasi",
    "difficulty": "mudah",
    "prompt": "Perhatikan tabel jumlah peserta sosialisasi di lima unit pelayanan berikut:\n| Unit Pelayanan | Jumlah Peserta |\n| Kantor P | 80 |\n| Kantor Q | 84 |\n| Kantor R | 88 |\n| Kantor S | 92 |\n| Kantor T | 96 |\nBerapakah rata-rata jumlah peserta sosialisasi per unit pelayanan?",
    "options": [
      "90 orang",
      "92 orang",
      "84 orang",
      "88 orang",
      "86 orang"
    ],
    "answer": "D",
    "explanation": "Jumlah seluruh peserta = 80 + 84 + 88 + 92 + 96 = 440 orang. Rata-rata = 440 / 5 = 88 orang.",
    "tip": "Gunakan nilai acuan tengah untuk menghitung rata-rata dengan cepat tanpa harus menjumlahkan angka besar satu per satu."
  },
  {
    "id": "tiu-tab-039",
    "subPattern": "rata-rata-dan-rekapitulasi",
    "difficulty": "mudah",
    "prompt": "Perhatikan tabel jumlah peserta sosialisasi di lima unit pelayanan berikut:\n| Unit Pelayanan | Jumlah Peserta |\n| Sektor 1 | 84 |\n| Sektor 2 | 88 |\n| Sektor 3 | 92 |\n| Sektor 4 | 96 |\n| Sektor 5 | 100 |\nBerapakah rata-rata jumlah peserta sosialisasi per unit pelayanan?",
    "options": [
      "94 orang",
      "88 orang",
      "90 orang",
      "69 orang",
      "92 orang"
    ],
    "answer": "E",
    "explanation": "Jumlah seluruh peserta = 84 + 88 + 92 + 96 + 100 = 460 orang. Rata-rata = 460 / 5 = 92 orang.",
    "tip": "Gunakan nilai acuan tengah untuk menghitung rata-rata dengan cepat tanpa harus menjumlahkan angka besar satu per satu."
  },
  {
    "id": "tiu-tab-040",
    "subPattern": "rata-rata-dan-rekapitulasi",
    "difficulty": "mudah",
    "prompt": "Perhatikan tabel jumlah peserta sosialisasi di lima unit pelayanan berikut:\n| Unit Pelayanan | Jumlah Peserta |\n| Cabang Utara | 88 |\n| Cabang Selatan | 92 |\n| Cabang Timur | 96 |\n| Cabang Barat | 100 |\n| Cabang Pusat | 104 |\nBerapakah rata-rata jumlah peserta sosialisasi per unit pelayanan?",
    "options": [
      "96 orang",
      "92 orang",
      "94 orang",
      "72 orang",
      "77 orang"
    ],
    "answer": "A",
    "explanation": "Jumlah seluruh peserta = 88 + 92 + 96 + 100 + 104 = 480 orang. Rata-rata = 480 / 5 = 96 orang.",
    "tip": "Gunakan nilai acuan tengah untuk menghitung rata-rata dengan cepat tanpa harus menjumlahkan angka besar satu per satu."
  },
  {
    "id": "tiu-tab-041",
    "subPattern": "rata-rata-dan-rekapitulasi",
    "difficulty": "sedang",
    "prompt": "Perhatikan tabel rekapitulasi layanan dan tarif Penerimaan Negara Bukan Pajak (PNBP) berikut:\n| Kategori Layanan | Jumlah Berkas | Tarif PNBP per Berkas (Rp) |\n| Layanan A | 10 | 50.000 |\n| Layanan B | 15 | 40.000 |\n| Layanan C | 20 | 30.000 |\nBerapakah total penerimaan PNBP dari ketiga kategori layanan tersebut?",
    "options": [
      "Rp1.800.000",
      "Rp1.700.000",
      "Rp2.040.000",
      "Rp2.130.000",
      "Rp1.750.000"
    ],
    "answer": "B",
    "explanation": "Penerimaan Layanan A = 10 × Rp50.000 = Rp500.000. Layanan B = 15 × Rp40.000 = Rp600.000. Layanan C = 20 × Rp30.000 = Rp600.000. Total = Rp1.700.000.",
    "tip": "Kalikan jumlah berkas dengan tarif (dalam satuan puluhan ribu) per baris terlebih dahulu sebelum menjumlahkan hasilnya."
  },
  {
    "id": "tiu-tab-042",
    "subPattern": "rata-rata-dan-rekapitulasi",
    "difficulty": "sedang",
    "prompt": "Perhatikan tabel rekapitulasi layanan dan tarif Penerimaan Negara Bukan Pajak (PNBP) berikut:\n| Kategori Layanan | Jumlah Berkas | Tarif PNBP per Berkas (Rp) |\n| Layanan A | 12 | 50.000 |\n| Layanan B | 16 | 40.000 |\n| Layanan C | 22 | 30.000 |\nBerapakah total penerimaan PNBP dari ketiga kategori layanan tersebut?",
    "options": [
      "Rp2.000.000",
      "Rp2.280.000",
      "Rp1.900.000",
      "Rp1.800.000",
      "Rp1.950.000"
    ],
    "answer": "C",
    "explanation": "Penerimaan Layanan A = 12 × Rp50.000 = Rp600.000. Layanan B = 16 × Rp40.000 = Rp640.000. Layanan C = 22 × Rp30.000 = Rp660.000. Total = Rp1.900.000.",
    "tip": "Kalikan jumlah berkas dengan tarif (dalam satuan puluhan ribu) per baris terlebih dahulu sebelum menjumlahkan hasilnya."
  },
  {
    "id": "tiu-tab-043",
    "subPattern": "rata-rata-dan-rekapitulasi",
    "difficulty": "sedang",
    "prompt": "Perhatikan tabel rekapitulasi layanan dan tarif Penerimaan Negara Bukan Pajak (PNBP) berikut:\n| Kategori Layanan | Jumlah Berkas | Tarif PNBP per Berkas (Rp) |\n| Layanan A | 14 | 50.000 |\n| Layanan B | 17 | 40.000 |\n| Layanan C | 24 | 30.000 |\nBerapakah total penerimaan PNBP dari ketiga kategori layanan tersebut?",
    "options": [
      "Rp2.200.000",
      "Rp2.000.000",
      "Rp2.050.000",
      "Rp2.100.000",
      "Rp2.150.000"
    ],
    "answer": "D",
    "explanation": "Penerimaan Layanan A = 14 × Rp50.000 = Rp700.000. Layanan B = 17 × Rp40.000 = Rp680.000. Layanan C = 24 × Rp30.000 = Rp720.000. Total = Rp2.100.000.",
    "tip": "Kalikan jumlah berkas dengan tarif (dalam satuan puluhan ribu) per baris terlebih dahulu sebelum menjumlahkan hasilnya."
  },
  {
    "id": "tiu-tab-044",
    "subPattern": "rata-rata-dan-rekapitulasi",
    "difficulty": "sedang",
    "prompt": "Perhatikan tabel rekapitulasi layanan dan tarif Penerimaan Negara Bukan Pajak (PNBP) berikut:\n| Kategori Layanan | Jumlah Berkas | Tarif PNBP per Berkas (Rp) |\n| Layanan A | 16 | 50.000 |\n| Layanan B | 18 | 40.000 |\n| Layanan C | 26 | 30.000 |\nBerapakah total penerimaan PNBP dari ketiga kategori layanan tersebut?",
    "options": [
      "Rp2.200.000",
      "Rp2.250.000",
      "Rp1.730.000",
      "Rp2.350.000",
      "Rp2.300.000"
    ],
    "answer": "E",
    "explanation": "Penerimaan Layanan A = 16 × Rp50.000 = Rp800.000. Layanan B = 18 × Rp40.000 = Rp720.000. Layanan C = 26 × Rp30.000 = Rp780.000. Total = Rp2.300.000.",
    "tip": "Kalikan jumlah berkas dengan tarif (dalam satuan puluhan ribu) per baris terlebih dahulu sebelum menjumlahkan hasilnya."
  },
  {
    "id": "tiu-tab-045",
    "subPattern": "rata-rata-dan-rekapitulasi",
    "difficulty": "sedang",
    "prompt": "Perhatikan tabel rekapitulasi layanan dan tarif Penerimaan Negara Bukan Pajak (PNBP) berikut:\n| Kategori Layanan | Jumlah Berkas | Tarif PNBP per Berkas (Rp) |\n| Layanan A | 18 | 50.000 |\n| Layanan B | 19 | 40.000 |\n| Layanan C | 28 | 30.000 |\nBerapakah total penerimaan PNBP dari ketiga kategori layanan tersebut?",
    "options": [
      "Rp2.500.000",
      "Rp2.450.000",
      "Rp1.880.000",
      "Rp2.000.000",
      "Rp2.400.000"
    ],
    "answer": "A",
    "explanation": "Penerimaan Layanan A = 18 × Rp50.000 = Rp900.000. Layanan B = 19 × Rp40.000 = Rp760.000. Layanan C = 28 × Rp30.000 = Rp840.000. Total = Rp2.500.000.",
    "tip": "Kalikan jumlah berkas dengan tarif (dalam satuan puluhan ribu) per baris terlebih dahulu sebelum menjumlahkan hasilnya."
  },
  {
    "id": "tiu-tab-046",
    "subPattern": "rata-rata-dan-rekapitulasi",
    "difficulty": "sedang",
    "prompt": "Perhatikan tabel rekapitulasi layanan dan tarif Penerimaan Negara Bukan Pajak (PNBP) berikut:\n| Kategori Layanan | Jumlah Berkas | Tarif PNBP per Berkas (Rp) |\n| Layanan A | 20 | 50.000 |\n| Layanan B | 20 | 40.000 |\n| Layanan C | 30 | 30.000 |\nBerapakah total penerimaan PNBP dari ketiga kategori layanan tersebut?",
    "options": [
      "Rp3.240.000",
      "Rp2.700.000",
      "Rp3.380.000",
      "Rp2.750.000",
      "Rp2.800.000"
    ],
    "answer": "B",
    "explanation": "Penerimaan Layanan A = 20 × Rp50.000 = Rp1.000.000. Layanan B = 20 × Rp40.000 = Rp800.000. Layanan C = 30 × Rp30.000 = Rp900.000. Total = Rp2.700.000.",
    "tip": "Kalikan jumlah berkas dengan tarif (dalam satuan puluhan ribu) per baris terlebih dahulu sebelum menjumlahkan hasilnya."
  },
  {
    "id": "tiu-tab-047",
    "subPattern": "rata-rata-dan-rekapitulasi",
    "difficulty": "sedang",
    "prompt": "Perhatikan tabel rekapitulasi layanan dan tarif Penerimaan Negara Bukan Pajak (PNBP) berikut:\n| Kategori Layanan | Jumlah Berkas | Tarif PNBP per Berkas (Rp) |\n| Layanan A | 22 | 50.000 |\n| Layanan B | 21 | 40.000 |\n| Layanan C | 32 | 30.000 |\nBerapakah total penerimaan PNBP dari ketiga kategori layanan tersebut?",
    "options": [
      "Rp3.480.000",
      "Rp2.800.000",
      "Rp2.900.000",
      "Rp2.950.000",
      "Rp3.000.000"
    ],
    "answer": "C",
    "explanation": "Penerimaan Layanan A = 22 × Rp50.000 = Rp1.100.000. Layanan B = 21 × Rp40.000 = Rp840.000. Layanan C = 32 × Rp30.000 = Rp960.000. Total = Rp2.900.000.",
    "tip": "Kalikan jumlah berkas dengan tarif (dalam satuan puluhan ribu) per baris terlebih dahulu sebelum menjumlahkan hasilnya."
  },
  {
    "id": "tiu-tab-048",
    "subPattern": "rata-rata-dan-rekapitulasi",
    "difficulty": "sedang",
    "prompt": "Perhatikan tabel rekapitulasi layanan dan tarif Penerimaan Negara Bukan Pajak (PNBP) berikut:\n| Kategori Layanan | Jumlah Berkas | Tarif PNBP per Berkas (Rp) |\n| Layanan A | 24 | 50.000 |\n| Layanan B | 22 | 40.000 |\n| Layanan C | 34 | 30.000 |\nBerapakah total penerimaan PNBP dari ketiga kategori layanan tersebut?",
    "options": [
      "Rp3.000.000",
      "Rp3.050.000",
      "Rp3.150.000",
      "Rp3.100.000",
      "Rp3.200.000"
    ],
    "answer": "D",
    "explanation": "Penerimaan Layanan A = 24 × Rp50.000 = Rp1.200.000. Layanan B = 22 × Rp40.000 = Rp880.000. Layanan C = 34 × Rp30.000 = Rp1.020.000. Total = Rp3.100.000.",
    "tip": "Kalikan jumlah berkas dengan tarif (dalam satuan puluhan ribu) per baris terlebih dahulu sebelum menjumlahkan hasilnya."
  },
  {
    "id": "tiu-tab-049",
    "subPattern": "rata-rata-dan-rekapitulasi",
    "difficulty": "sedang",
    "prompt": "Perhatikan tabel rekapitulasi layanan dan tarif Penerimaan Negara Bukan Pajak (PNBP) berikut:\n| Kategori Layanan | Jumlah Berkas | Tarif PNBP per Berkas (Rp) |\n| Layanan A | 26 | 50.000 |\n| Layanan B | 23 | 40.000 |\n| Layanan C | 36 | 30.000 |\nBerapakah total penerimaan PNBP dari ketiga kategori layanan tersebut?",
    "options": [
      "Rp3.250.000",
      "Rp2.480.000",
      "Rp3.350.000",
      "Rp3.200.000",
      "Rp3.300.000"
    ],
    "answer": "E",
    "explanation": "Penerimaan Layanan A = 26 × Rp50.000 = Rp1.300.000. Layanan B = 23 × Rp40.000 = Rp920.000. Layanan C = 36 × Rp30.000 = Rp1.080.000. Total = Rp3.300.000.",
    "tip": "Kalikan jumlah berkas dengan tarif (dalam satuan puluhan ribu) per baris terlebih dahulu sebelum menjumlahkan hasilnya."
  },
  {
    "id": "tiu-tab-050",
    "subPattern": "rata-rata-dan-rekapitulasi",
    "difficulty": "sedang",
    "prompt": "Perhatikan tabel rekapitulasi layanan dan tarif Penerimaan Negara Bukan Pajak (PNBP) berikut:\n| Kategori Layanan | Jumlah Berkas | Tarif PNBP per Berkas (Rp) |\n| Layanan A | 28 | 50.000 |\n| Layanan B | 24 | 40.000 |\n| Layanan C | 38 | 30.000 |\nBerapakah total penerimaan PNBP dari ketiga kategori layanan tersebut?",
    "options": [
      "Rp3.500.000",
      "Rp2.630.000",
      "Rp2.800.000",
      "Rp3.400.000",
      "Rp3.450.000"
    ],
    "answer": "A",
    "explanation": "Penerimaan Layanan A = 28 × Rp50.000 = Rp1.400.000. Layanan B = 24 × Rp40.000 = Rp960.000. Layanan C = 38 × Rp30.000 = Rp1.140.000. Total = Rp3.500.000.",
    "tip": "Kalikan jumlah berkas dengan tarif (dalam satuan puluhan ribu) per baris terlebih dahulu sebelum menjumlahkan hasilnya."
  }
];
