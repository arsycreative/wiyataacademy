import type { QuestionDraft } from "@/modules/question-bank/domain/question";

export const deretAngkaBatch2Drafts: readonly QuestionDraft[] = [
  {
    "id": "tiu-der-051",
    "subPattern": "deret-dua-dan-tiga-larik",
    "difficulty": "sulit",
    "prompt": "Tentukan dua suku berikutnya dari deret tiga larik berikut:\n4, 20, 50, 7, 24, 48, 10, 28, 46, ..., ...",
    "options": [
      "16, 32",
      "13, 32",
      "16, 28",
      "13, 28",
      "13, 36"
    ],
    "answer": "B",
    "explanation": "Perhatikan pola lompat 2 angka (3 larik):\n- Larik 1 (suku ke-1, 4, 7, 10): 4, 7, 10 (pola +3) → suku ke-10 = 10 + 3 = 13.\n- Larik 2 (suku ke-2, 5, 8, 11): 20, 24, 28 (pola +4) → suku ke-11 = 28 + 4 = 32.\n- Larik 3 (suku ke-3, 6, 9): 50, 48, 46 (pola -2).",
    "tip": "Jika deret panjang (≥ 9 angka) tidak membentuk pola saat dilompati 1 angka, uji pola lompat 2 angka (suku ke-1, ke-4, ke-7, ke-10)."
  },
  {
    "id": "tiu-der-052",
    "subPattern": "deret-dua-dan-tiga-larik",
    "difficulty": "sulit",
    "prompt": "Tentukan dua suku berikutnya dari deret tiga larik berikut:\n5, 22, 48, 9, 27, 45, 13, 32, 42, ..., ...",
    "options": [
      "13, 42",
      "13, 37",
      "17, 37",
      "17, 32",
      "13, 32"
    ],
    "answer": "C",
    "explanation": "Perhatikan pola lompat 2 angka (3 larik):\n- Larik 1 (suku ke-1, 4, 7, 10): 5, 9, 13 (pola +4) → suku ke-10 = 13 + 4 = 17.\n- Larik 2 (suku ke-2, 5, 8, 11): 22, 27, 32 (pola +5) → suku ke-11 = 32 + 5 = 37.\n- Larik 3 (suku ke-3, 6, 9): 48, 45, 42 (pola -3).",
    "tip": "Jika deret panjang (≥ 9 angka) tidak membentuk pola saat dilompati 1 angka, uji pola lompat 2 angka (suku ke-1, ke-4, ke-7, ke-10)."
  },
  {
    "id": "tiu-der-053",
    "subPattern": "deret-dua-dan-tiga-larik",
    "difficulty": "sulit",
    "prompt": "Tentukan dua suku berikutnya dari deret tiga larik berikut:\n6, 24, 46, 11, 30, 42, 16, 36, 38, ..., ...",
    "options": [
      "21, 48",
      "16, 42",
      "16, 48",
      "21, 42",
      "26, 48"
    ],
    "answer": "D",
    "explanation": "Perhatikan pola lompat 2 angka (3 larik):\n- Larik 1 (suku ke-1, 4, 7, 10): 6, 11, 16 (pola +5) → suku ke-10 = 16 + 5 = 21.\n- Larik 2 (suku ke-2, 5, 8, 11): 24, 30, 36 (pola +6) → suku ke-11 = 36 + 6 = 42.\n- Larik 3 (suku ke-3, 6, 9): 46, 42, 38 (pola -4).",
    "tip": "Jika deret panjang (≥ 9 angka) tidak membentuk pola saat dilompati 1 angka, uji pola lompat 2 angka (suku ke-1, ke-4, ke-7, ke-10)."
  },
  {
    "id": "tiu-der-054",
    "subPattern": "deret-dua-dan-tiga-larik",
    "difficulty": "sulit",
    "prompt": "Tentukan dua suku berikutnya dari deret tiga larik berikut:\n7, 26, 44, 10, 33, 42, 13, 40, 40, ..., ...",
    "options": [
      "19, 47",
      "19, 40",
      "13, 40",
      "16, 40",
      "16, 47"
    ],
    "answer": "E",
    "explanation": "Perhatikan pola lompat 2 angka (3 larik):\n- Larik 1 (suku ke-1, 4, 7, 10): 7, 10, 13 (pola +3) → suku ke-10 = 13 + 3 = 16.\n- Larik 2 (suku ke-2, 5, 8, 11): 26, 33, 40 (pola +7) → suku ke-11 = 40 + 7 = 47.\n- Larik 3 (suku ke-3, 6, 9): 44, 42, 40 (pola -2).",
    "tip": "Jika deret panjang (≥ 9 angka) tidak membentuk pola saat dilompati 1 angka, uji pola lompat 2 angka (suku ke-1, ke-4, ke-7, ke-10)."
  },
  {
    "id": "tiu-der-055",
    "subPattern": "deret-dua-dan-tiga-larik",
    "difficulty": "sulit",
    "prompt": "Tentukan dua suku berikutnya dari deret tiga larik berikut:\n8, 28, 42, 12, 32, 39, 16, 36, 36, ..., ...",
    "options": [
      "20, 40",
      "24, 40",
      "24, 36",
      "20, 36",
      "20, 44"
    ],
    "answer": "A",
    "explanation": "Perhatikan pola lompat 2 angka (3 larik):\n- Larik 1 (suku ke-1, 4, 7, 10): 8, 12, 16 (pola +4) → suku ke-10 = 16 + 4 = 20.\n- Larik 2 (suku ke-2, 5, 8, 11): 28, 32, 36 (pola +4) → suku ke-11 = 36 + 4 = 40.\n- Larik 3 (suku ke-3, 6, 9): 42, 39, 36 (pola -3).",
    "tip": "Jika deret panjang (≥ 9 angka) tidak membentuk pola saat dilompati 1 angka, uji pola lompat 2 angka (suku ke-1, ke-4, ke-7, ke-10)."
  },
  {
    "id": "tiu-der-056",
    "subPattern": "deret-dua-dan-tiga-larik",
    "difficulty": "sulit",
    "prompt": "Tentukan dua suku berikutnya dari deret tiga larik berikut:\n9, 30, 40, 14, 35, 36, 19, 40, 32, ..., ...",
    "options": [
      "19, 50",
      "24, 45",
      "19, 45",
      "24, 40",
      "19, 40"
    ],
    "answer": "B",
    "explanation": "Perhatikan pola lompat 2 angka (3 larik):\n- Larik 1 (suku ke-1, 4, 7, 10): 9, 14, 19 (pola +5) → suku ke-10 = 19 + 5 = 24.\n- Larik 2 (suku ke-2, 5, 8, 11): 30, 35, 40 (pola +5) → suku ke-11 = 40 + 5 = 45.\n- Larik 3 (suku ke-3, 6, 9): 40, 36, 32 (pola -4).",
    "tip": "Jika deret panjang (≥ 9 angka) tidak membentuk pola saat dilompati 1 angka, uji pola lompat 2 angka (suku ke-1, ke-4, ke-7, ke-10)."
  },
  {
    "id": "tiu-der-057",
    "subPattern": "deret-dua-dan-tiga-larik",
    "difficulty": "sulit",
    "prompt": "Tentukan dua suku berikutnya dari deret tiga larik berikut:\n10, 32, 38, 13, 38, 36, 16, 44, 34, ..., ...",
    "options": [
      "19, 56",
      "16, 50",
      "19, 50",
      "16, 56",
      "22, 56"
    ],
    "answer": "C",
    "explanation": "Perhatikan pola lompat 2 angka (3 larik):\n- Larik 1 (suku ke-1, 4, 7, 10): 10, 13, 16 (pola +3) → suku ke-10 = 16 + 3 = 19.\n- Larik 2 (suku ke-2, 5, 8, 11): 32, 38, 44 (pola +6) → suku ke-11 = 44 + 6 = 50.\n- Larik 3 (suku ke-3, 6, 9): 38, 36, 34 (pola -2).",
    "tip": "Jika deret panjang (≥ 9 angka) tidak membentuk pola saat dilompati 1 angka, uji pola lompat 2 angka (suku ke-1, ke-4, ke-7, ke-10)."
  },
  {
    "id": "tiu-der-058",
    "subPattern": "deret-dua-dan-tiga-larik",
    "difficulty": "sulit",
    "prompt": "Tentukan dua suku berikutnya dari deret tiga larik berikut:\n11, 34, 36, 15, 41, 33, 19, 48, 30, ..., ...",
    "options": [
      "27, 55",
      "27, 48",
      "19, 48",
      "23, 55",
      "23, 48"
    ],
    "answer": "D",
    "explanation": "Perhatikan pola lompat 2 angka (3 larik):\n- Larik 1 (suku ke-1, 4, 7, 10): 11, 15, 19 (pola +4) → suku ke-10 = 19 + 4 = 23.\n- Larik 2 (suku ke-2, 5, 8, 11): 34, 41, 48 (pola +7) → suku ke-11 = 48 + 7 = 55.\n- Larik 3 (suku ke-3, 6, 9): 36, 33, 30 (pola -3).",
    "tip": "Jika deret panjang (≥ 9 angka) tidak membentuk pola saat dilompati 1 angka, uji pola lompat 2 angka (suku ke-1, ke-4, ke-7, ke-10)."
  },
  {
    "id": "tiu-der-059",
    "subPattern": "deret-dua-dan-tiga-larik",
    "difficulty": "sulit",
    "prompt": "Tentukan dua suku berikutnya dari deret tiga larik berikut:\n12, 36, 34, 17, 40, 30, 22, 44, 26, ..., ...",
    "options": [
      "32, 48",
      "32, 44",
      "27, 44",
      "27, 52",
      "27, 48"
    ],
    "answer": "E",
    "explanation": "Perhatikan pola lompat 2 angka (3 larik):\n- Larik 1 (suku ke-1, 4, 7, 10): 12, 17, 22 (pola +5) → suku ke-10 = 22 + 5 = 27.\n- Larik 2 (suku ke-2, 5, 8, 11): 36, 40, 44 (pola +4) → suku ke-11 = 44 + 4 = 48.\n- Larik 3 (suku ke-3, 6, 9): 34, 30, 26 (pola -4).",
    "tip": "Jika deret panjang (≥ 9 angka) tidak membentuk pola saat dilompati 1 angka, uji pola lompat 2 angka (suku ke-1, ke-4, ke-7, ke-10)."
  },
  {
    "id": "tiu-der-060",
    "subPattern": "deret-dua-dan-tiga-larik",
    "difficulty": "sulit",
    "prompt": "Tentukan dua suku berikutnya dari deret tiga larik berikut:\n13, 38, 32, 16, 43, 30, 19, 48, 28, ..., ...",
    "options": [
      "22, 53",
      "19, 58",
      "19, 53",
      "22, 48",
      "19, 48"
    ],
    "answer": "A",
    "explanation": "Perhatikan pola lompat 2 angka (3 larik):\n- Larik 1 (suku ke-1, 4, 7, 10): 13, 16, 19 (pola +3) → suku ke-10 = 19 + 3 = 22.\n- Larik 2 (suku ke-2, 5, 8, 11): 38, 43, 48 (pola +5) → suku ke-11 = 48 + 5 = 53.\n- Larik 3 (suku ke-3, 6, 9): 32, 30, 28 (pola -2).",
    "tip": "Jika deret panjang (≥ 9 angka) tidak membentuk pola saat dilompati 1 angka, uji pola lompat 2 angka (suku ke-1, ke-4, ke-7, ke-10)."
  },
  {
    "id": "tiu-der-061",
    "subPattern": "deret-operasi-campuran-dan-berpola",
    "difficulty": "mudah",
    "prompt": "Tentukan angka berikutnya dari barisan operasi berpola berikut:\n2, 5, 10, 13, 26, 29, ...",
    "options": [
      "61",
      "64",
      "58",
      "70",
      "73"
    ],
    "answer": "C",
    "explanation": "Pola operasi bergantian dua tahap adalah +3 lalu ×2 secara berulang:\n2 (+3) → 5 (×2) → 10 (+3) → 13 (×2) → 26 (+3) → 29. Langkah berikutnya adalah ×2, sehingga 29 × 2 = 58.",
    "tip": "Periksa pasangan suku yang berdekatan: jika ada lonjakan lipat dua secara selang-seling, uji pola (+k, ×2) atau (×2, +k)."
  },
  {
    "id": "tiu-der-062",
    "subPattern": "deret-operasi-campuran-dan-berpola",
    "difficulty": "mudah",
    "prompt": "Tentukan angka berikutnya dari barisan operasi berpola berikut:\n3, 7, 14, 18, 36, 40, ...",
    "options": [
      "83",
      "89",
      "92",
      "80",
      "77"
    ],
    "answer": "D",
    "explanation": "Pola operasi bergantian dua tahap adalah +4 lalu ×2 secara berulang:\n3 (+4) → 7 (×2) → 14 (+4) → 18 (×2) → 36 (+4) → 40. Langkah berikutnya adalah ×2, sehingga 40 × 2 = 80.",
    "tip": "Periksa pasangan suku yang berdekatan: jika ada lonjakan lipat dua secara selang-seling, uji pola (+k, ×2) atau (×2, +k)."
  },
  {
    "id": "tiu-der-063",
    "subPattern": "deret-operasi-campuran-dan-berpola",
    "difficulty": "mudah",
    "prompt": "Tentukan angka berikutnya dari barisan operasi berpola berikut:\n4, 9, 18, 23, 46, 51, ...",
    "options": [
      "105",
      "108",
      "93",
      "99",
      "102"
    ],
    "answer": "E",
    "explanation": "Pola operasi bergantian dua tahap adalah +5 lalu ×2 secara berulang:\n4 (+5) → 9 (×2) → 18 (+5) → 23 (×2) → 46 (+5) → 51. Langkah berikutnya adalah ×2, sehingga 51 × 2 = 102.",
    "tip": "Periksa pasangan suku yang berdekatan: jika ada lonjakan lipat dua secara selang-seling, uji pola (+k, ×2) atau (×2, +k)."
  },
  {
    "id": "tiu-der-064",
    "subPattern": "deret-operasi-campuran-dan-berpola",
    "difficulty": "mudah",
    "prompt": "Tentukan angka berikutnya dari barisan operasi berpola berikut:\n5, 11, 22, 28, 56, 62, ...",
    "options": [
      "124",
      "130",
      "112",
      "118",
      "121"
    ],
    "answer": "A",
    "explanation": "Pola operasi bergantian dua tahap adalah +6 lalu ×2 secara berulang:\n5 (+6) → 11 (×2) → 22 (+6) → 28 (×2) → 56 (+6) → 62. Langkah berikutnya adalah ×2, sehingga 62 × 2 = 124.",
    "tip": "Periksa pasangan suku yang berdekatan: jika ada lonjakan lipat dua secara selang-seling, uji pola (+k, ×2) atau (×2, +k)."
  },
  {
    "id": "tiu-der-065",
    "subPattern": "deret-operasi-campuran-dan-berpola",
    "difficulty": "mudah",
    "prompt": "Tentukan angka berikutnya dari barisan operasi berpola berikut:\n6, 9, 18, 21, 42, 45, ...",
    "options": [
      "75",
      "90",
      "81",
      "84",
      "87"
    ],
    "answer": "B",
    "explanation": "Pola operasi bergantian dua tahap adalah +3 lalu ×2 secara berulang:\n6 (+3) → 9 (×2) → 18 (+3) → 21 (×2) → 42 (+3) → 45. Langkah berikutnya adalah ×2, sehingga 45 × 2 = 90.",
    "tip": "Periksa pasangan suku yang berdekatan: jika ada lonjakan lipat dua secara selang-seling, uji pola (+k, ×2) atau (×2, +k)."
  },
  {
    "id": "tiu-der-066",
    "subPattern": "deret-operasi-campuran-dan-berpola",
    "difficulty": "mudah",
    "prompt": "Tentukan angka berikutnya dari barisan operasi berpola berikut:\n7, 11, 22, 26, 52, 56, ...",
    "options": [
      "118",
      "124",
      "112",
      "127",
      "115"
    ],
    "answer": "C",
    "explanation": "Pola operasi bergantian dua tahap adalah +4 lalu ×2 secara berulang:\n7 (+4) → 11 (×2) → 22 (+4) → 26 (×2) → 52 (+4) → 56. Langkah berikutnya adalah ×2, sehingga 56 × 2 = 112.",
    "tip": "Periksa pasangan suku yang berdekatan: jika ada lonjakan lipat dua secara selang-seling, uji pola (+k, ×2) atau (×2, +k)."
  },
  {
    "id": "tiu-der-067",
    "subPattern": "deret-operasi-campuran-dan-berpola",
    "difficulty": "mudah",
    "prompt": "Tentukan angka berikutnya dari barisan operasi berpola berikut:\n8, 13, 26, 31, 62, 67, ...",
    "options": [
      "143",
      "146",
      "131",
      "134",
      "137"
    ],
    "answer": "D",
    "explanation": "Pola operasi bergantian dua tahap adalah +5 lalu ×2 secara berulang:\n8 (+5) → 13 (×2) → 26 (+5) → 31 (×2) → 62 (+5) → 67. Langkah berikutnya adalah ×2, sehingga 67 × 2 = 134.",
    "tip": "Periksa pasangan suku yang berdekatan: jika ada lonjakan lipat dua secara selang-seling, uji pola (+k, ×2) atau (×2, +k)."
  },
  {
    "id": "tiu-der-068",
    "subPattern": "deret-operasi-campuran-dan-berpola",
    "difficulty": "mudah",
    "prompt": "Tentukan angka berikutnya dari barisan operasi berpola berikut:\n9, 15, 30, 36, 72, 78, ...",
    "options": [
      "162",
      "147",
      "153",
      "159",
      "156"
    ],
    "answer": "E",
    "explanation": "Pola operasi bergantian dua tahap adalah +6 lalu ×2 secara berulang:\n9 (+6) → 15 (×2) → 30 (+6) → 36 (×2) → 72 (+6) → 78. Langkah berikutnya adalah ×2, sehingga 78 × 2 = 156.",
    "tip": "Periksa pasangan suku yang berdekatan: jika ada lonjakan lipat dua secara selang-seling, uji pola (+k, ×2) atau (×2, +k)."
  },
  {
    "id": "tiu-der-069",
    "subPattern": "deret-operasi-campuran-dan-berpola",
    "difficulty": "mudah",
    "prompt": "Tentukan angka berikutnya dari barisan operasi berpola berikut:\n10, 13, 26, 29, 58, 61, ...",
    "options": [
      "122",
      "110",
      "116",
      "119",
      "128"
    ],
    "answer": "A",
    "explanation": "Pola operasi bergantian dua tahap adalah +3 lalu ×2 secara berulang:\n10 (+3) → 13 (×2) → 26 (+3) → 29 (×2) → 58 (+3) → 61. Langkah berikutnya adalah ×2, sehingga 61 × 2 = 122.",
    "tip": "Periksa pasangan suku yang berdekatan: jika ada lonjakan lipat dua secara selang-seling, uji pola (+k, ×2) atau (×2, +k)."
  },
  {
    "id": "tiu-der-070",
    "subPattern": "deret-operasi-campuran-dan-berpola",
    "difficulty": "mudah",
    "prompt": "Tentukan angka berikutnya dari barisan operasi berpola berikut:\n11, 15, 30, 34, 68, 72, ...",
    "options": [
      "135",
      "144",
      "138",
      "141",
      "129"
    ],
    "answer": "B",
    "explanation": "Pola operasi bergantian dua tahap adalah +4 lalu ×2 secara berulang:\n11 (+4) → 15 (×2) → 30 (+4) → 34 (×2) → 68 (+4) → 72. Langkah berikutnya adalah ×2, sehingga 72 × 2 = 144.",
    "tip": "Periksa pasangan suku yang berdekatan: jika ada lonjakan lipat dua secara selang-seling, uji pola (+k, ×2) atau (×2, +k)."
  },
  {
    "id": "tiu-der-071",
    "subPattern": "deret-operasi-campuran-dan-berpola",
    "difficulty": "sedang",
    "prompt": "Tentukan suku selanjutnya dari deret berikut:\n4, 8, 6, 12, 10, 20, ...",
    "options": [
      "22",
      "26",
      "18",
      "30",
      "20"
    ],
    "answer": "C",
    "explanation": "Pola operasi bergantian adalah ×2 lalu -2:\n4 (×2) → 8 (-2) → 6 (×2) → 12 (-2) → 10 (×2) → 20. Operasi berikutnya adalah -2, sehingga 20 - 2 = 18.",
    "tip": "Catat operasi di antara tiap suku secara berurutan untuk memastikan giliran operasi berikutnya (apakah ×2 atau pengurangan)."
  },
  {
    "id": "tiu-der-072",
    "subPattern": "deret-operasi-campuran-dan-berpola",
    "difficulty": "sedang",
    "prompt": "Tentukan suku selanjutnya dari deret berikut:\n5, 10, 7, 14, 11, 22, ...",
    "options": [
      "28",
      "16",
      "33",
      "19",
      "22"
    ],
    "answer": "D",
    "explanation": "Pola operasi bergantian adalah ×2 lalu -3:\n5 (×2) → 10 (-3) → 7 (×2) → 14 (-3) → 11 (×2) → 22. Operasi berikutnya adalah -3, sehingga 22 - 3 = 19.",
    "tip": "Catat operasi di antara tiap suku secara berurutan untuk memastikan giliran operasi berikutnya (apakah ×2 atau pengurangan)."
  },
  {
    "id": "tiu-der-073",
    "subPattern": "deret-operasi-campuran-dan-berpola",
    "difficulty": "sedang",
    "prompt": "Tentukan suku selanjutnya dari deret berikut:\n6, 12, 8, 16, 12, 24, ...",
    "options": [
      "8",
      "16",
      "36",
      "24",
      "20"
    ],
    "answer": "E",
    "explanation": "Pola operasi bergantian adalah ×2 lalu -4:\n6 (×2) → 12 (-4) → 8 (×2) → 16 (-4) → 12 (×2) → 24. Operasi berikutnya adalah -4, sehingga 24 - 4 = 20.",
    "tip": "Catat operasi di antara tiap suku secara berurutan untuk memastikan giliran operasi berikutnya (apakah ×2 atau pengurangan)."
  },
  {
    "id": "tiu-der-074",
    "subPattern": "deret-operasi-campuran-dan-berpola",
    "difficulty": "sedang",
    "prompt": "Tentukan suku selanjutnya dari deret berikut:\n7, 14, 12, 24, 22, 44, ...",
    "options": [
      "42",
      "38",
      "40",
      "46",
      "34"
    ],
    "answer": "A",
    "explanation": "Pola operasi bergantian adalah ×2 lalu -2:\n7 (×2) → 14 (-2) → 12 (×2) → 24 (-2) → 22 (×2) → 44. Operasi berikutnya adalah -2, sehingga 44 - 2 = 42.",
    "tip": "Catat operasi di antara tiap suku secara berurutan untuk memastikan giliran operasi berikutnya (apakah ×2 atau pengurangan)."
  },
  {
    "id": "tiu-der-075",
    "subPattern": "deret-operasi-campuran-dan-berpola",
    "difficulty": "sedang",
    "prompt": "Tentukan suku selanjutnya dari deret berikut:\n8, 16, 13, 26, 23, 46, ...",
    "options": [
      "37",
      "43",
      "40",
      "28",
      "34"
    ],
    "answer": "B",
    "explanation": "Pola operasi bergantian adalah ×2 lalu -3:\n8 (×2) → 16 (-3) → 13 (×2) → 26 (-3) → 23 (×2) → 46. Operasi berikutnya adalah -3, sehingga 46 - 3 = 43.",
    "tip": "Catat operasi di antara tiap suku secara berurutan untuk memastikan giliran operasi berikutnya (apakah ×2 atau pengurangan)."
  },
  {
    "id": "tiu-der-076",
    "subPattern": "deret-operasi-campuran-dan-berpola",
    "difficulty": "sedang",
    "prompt": "Tentukan suku selanjutnya dari deret berikut:\n9, 18, 14, 28, 24, 48, ...",
    "options": [
      "64",
      "48",
      "44",
      "52",
      "60"
    ],
    "answer": "C",
    "explanation": "Pola operasi bergantian adalah ×2 lalu -4:\n9 (×2) → 18 (-4) → 14 (×2) → 28 (-4) → 24 (×2) → 48. Operasi berikutnya adalah -4, sehingga 48 - 4 = 44.",
    "tip": "Catat operasi di antara tiap suku secara berurutan untuk memastikan giliran operasi berikutnya (apakah ×2 atau pengurangan)."
  },
  {
    "id": "tiu-der-077",
    "subPattern": "deret-operasi-campuran-dan-berpola",
    "difficulty": "sedang",
    "prompt": "Tentukan suku selanjutnya dari deret berikut:\n10, 20, 18, 36, 34, 68, ...",
    "options": [
      "64",
      "68",
      "72",
      "66",
      "74"
    ],
    "answer": "D",
    "explanation": "Pola operasi bergantian adalah ×2 lalu -2:\n10 (×2) → 20 (-2) → 18 (×2) → 36 (-2) → 34 (×2) → 68. Operasi berikutnya adalah -2, sehingga 68 - 2 = 66.",
    "tip": "Catat operasi di antara tiap suku secara berurutan untuk memastikan giliran operasi berikutnya (apakah ×2 atau pengurangan)."
  },
  {
    "id": "tiu-der-078",
    "subPattern": "deret-operasi-campuran-dan-berpola",
    "difficulty": "sedang",
    "prompt": "Tentukan suku selanjutnya dari deret berikut:\n11, 22, 19, 38, 35, 70, ...",
    "options": [
      "64",
      "70",
      "73",
      "58",
      "67"
    ],
    "answer": "E",
    "explanation": "Pola operasi bergantian adalah ×2 lalu -3:\n11 (×2) → 22 (-3) → 19 (×2) → 38 (-3) → 35 (×2) → 70. Operasi berikutnya adalah -3, sehingga 70 - 3 = 67.",
    "tip": "Catat operasi di antara tiap suku secara berurutan untuk memastikan giliran operasi berikutnya (apakah ×2 atau pengurangan)."
  },
  {
    "id": "tiu-der-079",
    "subPattern": "deret-operasi-campuran-dan-berpola",
    "difficulty": "sedang",
    "prompt": "Tentukan suku selanjutnya dari deret berikut:\n12, 24, 20, 40, 36, 72, ...",
    "options": [
      "68",
      "64",
      "76",
      "52",
      "60"
    ],
    "answer": "A",
    "explanation": "Pola operasi bergantian adalah ×2 lalu -4:\n12 (×2) → 24 (-4) → 20 (×2) → 40 (-4) → 36 (×2) → 72. Operasi berikutnya adalah -4, sehingga 72 - 4 = 68.",
    "tip": "Catat operasi di antara tiap suku secara berurutan untuk memastikan giliran operasi berikutnya (apakah ×2 atau pengurangan)."
  },
  {
    "id": "tiu-der-080",
    "subPattern": "deret-operasi-campuran-dan-berpola",
    "difficulty": "sedang",
    "prompt": "Tentukan suku selanjutnya dari deret berikut:\n13, 26, 24, 48, 46, 92, ...",
    "options": [
      "88",
      "90",
      "80",
      "84",
      "86"
    ],
    "answer": "B",
    "explanation": "Pola operasi bergantian adalah ×2 lalu -2:\n13 (×2) → 26 (-2) → 24 (×2) → 48 (-2) → 46 (×2) → 92. Operasi berikutnya adalah -2, sehingga 92 - 2 = 90.",
    "tip": "Catat operasi di antara tiap suku secara berurutan untuk memastikan giliran operasi berikutnya (apakah ×2 atau pengurangan)."
  },
  {
    "id": "tiu-der-081",
    "subPattern": "deret-operasi-campuran-dan-berpola",
    "difficulty": "sulit",
    "prompt": "Tentukan dua suku berikutnya dari deret operasi berulang berikut:\n3, 5, 10, 9, 11, 22, 21, ..., ...",
    "options": [
      "23, 50",
      "21, 46",
      "23, 46",
      "21, 50",
      "25, 50"
    ],
    "answer": "C",
    "explanation": "Deret memiliki siklus 3 operasi berulang (+2, ×2, -1):\n- Siklus 1: 3 (+2) → 5 (×2) → 10 (-1) → 9\n- Siklus 2: 9 (+2) → 11 (×2) → 22 (-1) → 21\nMaka siklus ke-3 dimulai dengan +2 lalu ×2: 21 + 2 = 23, dan 23 × 2 = 46.",
    "tip": "Jika pola operasi tidak berulang setiap 2 langkah, uji siklus 3 langkah (+a, ×b, -c) pada 7 suku yang diketahui."
  },
  {
    "id": "tiu-der-082",
    "subPattern": "deret-operasi-campuran-dan-berpola",
    "difficulty": "sulit",
    "prompt": "Tentukan dua suku berikutnya dari deret operasi berulang berikut:\n4, 7, 14, 12, 15, 30, 28, ..., ...",
    "options": [
      "33, 62",
      "33, 58",
      "29, 58",
      "31, 62",
      "31, 58"
    ],
    "answer": "D",
    "explanation": "Deret memiliki siklus 3 operasi berulang (+3, ×2, -2):\n- Siklus 1: 4 (+3) → 7 (×2) → 14 (-2) → 12\n- Siklus 2: 12 (+3) → 15 (×2) → 30 (-2) → 28\nMaka siklus ke-3 dimulai dengan +3 lalu ×2: 28 + 3 = 31, dan 31 × 2 = 62.",
    "tip": "Jika pola operasi tidak berulang setiap 2 langkah, uji siklus 3 langkah (+a, ×b, -c) pada 7 suku yang diketahui."
  },
  {
    "id": "tiu-der-083",
    "subPattern": "deret-operasi-campuran-dan-berpola",
    "difficulty": "sulit",
    "prompt": "Tentukan dua suku berikutnya dari deret operasi berulang berikut:\n5, 9, 18, 17, 21, 42, 41, ..., ...",
    "options": [
      "47, 90",
      "47, 86",
      "45, 86",
      "45, 94",
      "45, 90"
    ],
    "answer": "E",
    "explanation": "Deret memiliki siklus 3 operasi berulang (+4, ×2, -1):\n- Siklus 1: 5 (+4) → 9 (×2) → 18 (-1) → 17\n- Siklus 2: 17 (+4) → 21 (×2) → 42 (-1) → 41\nMaka siklus ke-3 dimulai dengan +4 lalu ×2: 41 + 4 = 45, dan 45 × 2 = 90.",
    "tip": "Jika pola operasi tidak berulang setiap 2 langkah, uji siklus 3 langkah (+a, ×b, -c) pada 7 suku yang diketahui."
  },
  {
    "id": "tiu-der-084",
    "subPattern": "deret-operasi-campuran-dan-berpola",
    "difficulty": "sulit",
    "prompt": "Tentukan dua suku berikutnya dari deret operasi berulang berikut:\n6, 8, 16, 14, 16, 32, 30, ..., ...",
    "options": [
      "32, 64",
      "30, 68",
      "30, 64",
      "32, 60",
      "30, 60"
    ],
    "answer": "A",
    "explanation": "Deret memiliki siklus 3 operasi berulang (+2, ×2, -2):\n- Siklus 1: 6 (+2) → 8 (×2) → 16 (-2) → 14\n- Siklus 2: 14 (+2) → 16 (×2) → 32 (-2) → 30\nMaka siklus ke-3 dimulai dengan +2 lalu ×2: 30 + 2 = 32, dan 32 × 2 = 64.",
    "tip": "Jika pola operasi tidak berulang setiap 2 langkah, uji siklus 3 langkah (+a, ×b, -c) pada 7 suku yang diketahui."
  },
  {
    "id": "tiu-der-085",
    "subPattern": "deret-operasi-campuran-dan-berpola",
    "difficulty": "sulit",
    "prompt": "Tentukan dua suku berikutnya dari deret operasi berulang berikut:\n7, 10, 20, 19, 22, 44, 43, ..., ...",
    "options": [
      "46, 96",
      "46, 92",
      "44, 92",
      "44, 96",
      "48, 96"
    ],
    "answer": "B",
    "explanation": "Deret memiliki siklus 3 operasi berulang (+3, ×2, -1):\n- Siklus 1: 7 (+3) → 10 (×2) → 20 (-1) → 19\n- Siklus 2: 19 (+3) → 22 (×2) → 44 (-1) → 43\nMaka siklus ke-3 dimulai dengan +3 lalu ×2: 43 + 3 = 46, dan 46 × 2 = 92.",
    "tip": "Jika pola operasi tidak berulang setiap 2 langkah, uji siklus 3 langkah (+a, ×b, -c) pada 7 suku yang diketahui."
  },
  {
    "id": "tiu-der-086",
    "subPattern": "deret-operasi-campuran-dan-berpola",
    "difficulty": "sulit",
    "prompt": "Tentukan dua suku berikutnya dari deret operasi berulang berikut:\n8, 12, 24, 22, 26, 52, 50, ..., ...",
    "options": [
      "56, 108",
      "56, 104",
      "54, 108",
      "52, 104",
      "54, 104"
    ],
    "answer": "C",
    "explanation": "Deret memiliki siklus 3 operasi berulang (+4, ×2, -2):\n- Siklus 1: 8 (+4) → 12 (×2) → 24 (-2) → 22\n- Siklus 2: 22 (+4) → 26 (×2) → 52 (-2) → 50\nMaka siklus ke-3 dimulai dengan +4 lalu ×2: 50 + 4 = 54, dan 54 × 2 = 108.",
    "tip": "Jika pola operasi tidak berulang setiap 2 langkah, uji siklus 3 langkah (+a, ×b, -c) pada 7 suku yang diketahui."
  },
  {
    "id": "tiu-der-087",
    "subPattern": "deret-operasi-campuran-dan-berpola",
    "difficulty": "sulit",
    "prompt": "Tentukan dua suku berikutnya dari deret operasi berulang berikut:\n9, 11, 22, 21, 23, 46, 45, ..., ...",
    "options": [
      "49, 94",
      "49, 90",
      "47, 90",
      "47, 94",
      "47, 98"
    ],
    "answer": "D",
    "explanation": "Deret memiliki siklus 3 operasi berulang (+2, ×2, -1):\n- Siklus 1: 9 (+2) → 11 (×2) → 22 (-1) → 21\n- Siklus 2: 21 (+2) → 23 (×2) → 46 (-1) → 45\nMaka siklus ke-3 dimulai dengan +2 lalu ×2: 45 + 2 = 47, dan 47 × 2 = 94.",
    "tip": "Jika pola operasi tidak berulang setiap 2 langkah, uji siklus 3 langkah (+a, ×b, -c) pada 7 suku yang diketahui."
  },
  {
    "id": "tiu-der-088",
    "subPattern": "deret-operasi-campuran-dan-berpola",
    "difficulty": "sulit",
    "prompt": "Tentukan dua suku berikutnya dari deret operasi berulang berikut:\n10, 13, 26, 24, 27, 54, 52, ..., ...",
    "options": [
      "53, 114",
      "53, 110",
      "55, 106",
      "53, 106",
      "55, 110"
    ],
    "answer": "E",
    "explanation": "Deret memiliki siklus 3 operasi berulang (+3, ×2, -2):\n- Siklus 1: 10 (+3) → 13 (×2) → 26 (-2) → 24\n- Siklus 2: 24 (+3) → 27 (×2) → 54 (-2) → 52\nMaka siklus ke-3 dimulai dengan +3 lalu ×2: 52 + 3 = 55, dan 55 × 2 = 110.",
    "tip": "Jika pola operasi tidak berulang setiap 2 langkah, uji siklus 3 langkah (+a, ×b, -c) pada 7 suku yang diketahui."
  },
  {
    "id": "tiu-der-089",
    "subPattern": "deret-operasi-campuran-dan-berpola",
    "difficulty": "sulit",
    "prompt": "Tentukan dua suku berikutnya dari deret operasi berulang berikut:\n11, 15, 30, 29, 33, 66, 65, ..., ...",
    "options": [
      "69, 138",
      "69, 142",
      "67, 138",
      "67, 142",
      "71, 142"
    ],
    "answer": "A",
    "explanation": "Deret memiliki siklus 3 operasi berulang (+4, ×2, -1):\n- Siklus 1: 11 (+4) → 15 (×2) → 30 (-1) → 29\n- Siklus 2: 29 (+4) → 33 (×2) → 66 (-1) → 65\nMaka siklus ke-3 dimulai dengan +4 lalu ×2: 65 + 4 = 69, dan 69 × 2 = 138.",
    "tip": "Jika pola operasi tidak berulang setiap 2 langkah, uji siklus 3 langkah (+a, ×b, -c) pada 7 suku yang diketahui."
  },
  {
    "id": "tiu-der-090",
    "subPattern": "deret-operasi-campuran-dan-berpola",
    "difficulty": "sulit",
    "prompt": "Tentukan dua suku berikutnya dari deret operasi berulang berikut:\n12, 14, 28, 26, 28, 56, 54, ..., ...",
    "options": [
      "58, 112",
      "56, 112",
      "58, 108",
      "54, 108",
      "56, 108"
    ],
    "answer": "B",
    "explanation": "Deret memiliki siklus 3 operasi berulang (+2, ×2, -2):\n- Siklus 1: 12 (+2) → 14 (×2) → 28 (-2) → 26\n- Siklus 2: 26 (+2) → 28 (×2) → 56 (-2) → 54\nMaka siklus ke-3 dimulai dengan +2 lalu ×2: 54 + 2 = 56, dan 56 × 2 = 112.",
    "tip": "Jika pola operasi tidak berulang setiap 2 langkah, uji siklus 3 langkah (+a, ×b, -c) pada 7 suku yang diketahui."
  },
  {
    "id": "tiu-der-091",
    "subPattern": "deret-fibonacci-dan-pangkat",
    "difficulty": "mudah",
    "prompt": "Tentukan suku berikutnya dari deret Fibonacci berikut:\n1, 3, 4, 7, 11, 18, 29, ...",
    "options": [
      "59",
      "62",
      "50",
      "47",
      "53"
    ],
    "answer": "D",
    "explanation": "Setiap suku mulai suku ke-3 merupakan hasil penjumlahan dua suku tepat di depannya (1 + 3 = 4, 3 + 4 = 7, dst.). Maka suku berikutnya = 18 + 29 = 47.",
    "tip": "Ciri khas deret Fibonacci adalah U3 = U1 + U2 dan U4 = U2 + U3; cukup jumlahkan dua angka paling kanan."
  },
  {
    "id": "tiu-der-092",
    "subPattern": "deret-fibonacci-dan-pangkat",
    "difficulty": "mudah",
    "prompt": "Tentukan suku berikutnya dari deret Fibonacci berikut:\n2, 4, 6, 10, 16, 26, 42, ...",
    "options": [
      "80",
      "58",
      "71",
      "77",
      "68"
    ],
    "answer": "E",
    "explanation": "Setiap suku mulai suku ke-3 merupakan hasil penjumlahan dua suku tepat di depannya (2 + 4 = 6, 4 + 6 = 10, dst.). Maka suku berikutnya = 26 + 42 = 68.",
    "tip": "Ciri khas deret Fibonacci adalah U3 = U1 + U2 dan U4 = U2 + U3; cukup jumlahkan dua angka paling kanan."
  },
  {
    "id": "tiu-der-093",
    "subPattern": "deret-fibonacci-dan-pangkat",
    "difficulty": "mudah",
    "prompt": "Tentukan suku berikutnya dari deret Fibonacci berikut:\n3, 5, 8, 13, 21, 34, 55, ...",
    "options": [
      "89",
      "76",
      "80",
      "92",
      "95"
    ],
    "answer": "A",
    "explanation": "Setiap suku mulai suku ke-3 merupakan hasil penjumlahan dua suku tepat di depannya (3 + 5 = 8, 5 + 8 = 13, dst.). Maka suku berikutnya = 34 + 55 = 89.",
    "tip": "Ciri khas deret Fibonacci adalah U3 = U1 + U2 dan U4 = U2 + U3; cukup jumlahkan dua angka paling kanan."
  },
  {
    "id": "tiu-der-094",
    "subPattern": "deret-fibonacci-dan-pangkat",
    "difficulty": "mudah",
    "prompt": "Tentukan suku berikutnya dari deret Fibonacci berikut:\n4, 6, 10, 16, 26, 42, 68, ...",
    "options": [
      "98",
      "110",
      "104",
      "116",
      "94"
    ],
    "answer": "B",
    "explanation": "Setiap suku mulai suku ke-3 merupakan hasil penjumlahan dua suku tepat di depannya (4 + 6 = 10, 6 + 10 = 16, dst.). Maka suku berikutnya = 42 + 68 = 110.",
    "tip": "Ciri khas deret Fibonacci adalah U3 = U1 + U2 dan U4 = U2 + U3; cukup jumlahkan dua angka paling kanan."
  },
  {
    "id": "tiu-der-095",
    "subPattern": "deret-fibonacci-dan-pangkat",
    "difficulty": "mudah",
    "prompt": "Tentukan suku berikutnya dari deret Fibonacci berikut:\n5, 7, 12, 19, 31, 50, 81, ...",
    "options": [
      "125",
      "128",
      "131",
      "116",
      "122"
    ],
    "answer": "C",
    "explanation": "Setiap suku mulai suku ke-3 merupakan hasil penjumlahan dua suku tepat di depannya (5 + 7 = 12, 7 + 12 = 19, dst.). Maka suku berikutnya = 50 + 81 = 131.",
    "tip": "Ciri khas deret Fibonacci adalah U3 = U1 + U2 dan U4 = U2 + U3; cukup jumlahkan dua angka paling kanan."
  },
  {
    "id": "tiu-der-096",
    "subPattern": "deret-fibonacci-dan-pangkat",
    "difficulty": "mudah",
    "prompt": "Tentukan suku berikutnya dari deret Fibonacci berikut:\n1, 8, 9, 17, 26, 43, 69, ...",
    "options": [
      "127",
      "115",
      "118",
      "112",
      "124"
    ],
    "answer": "D",
    "explanation": "Setiap suku mulai suku ke-3 merupakan hasil penjumlahan dua suku tepat di depannya (1 + 8 = 9, 8 + 9 = 17, dst.). Maka suku berikutnya = 43 + 69 = 112.",
    "tip": "Ciri khas deret Fibonacci adalah U3 = U1 + U2 dan U4 = U2 + U3; cukup jumlahkan dua angka paling kanan."
  },
  {
    "id": "tiu-der-097",
    "subPattern": "deret-fibonacci-dan-pangkat",
    "difficulty": "mudah",
    "prompt": "Tentukan suku berikutnya dari deret Fibonacci berikut:\n2, 9, 11, 20, 31, 51, 82, ...",
    "options": [
      "130",
      "136",
      "142",
      "145",
      "133"
    ],
    "answer": "E",
    "explanation": "Setiap suku mulai suku ke-3 merupakan hasil penjumlahan dua suku tepat di depannya (2 + 9 = 11, 9 + 11 = 20, dst.). Maka suku berikutnya = 51 + 82 = 133.",
    "tip": "Ciri khas deret Fibonacci adalah U3 = U1 + U2 dan U4 = U2 + U3; cukup jumlahkan dua angka paling kanan."
  },
  {
    "id": "tiu-der-098",
    "subPattern": "deret-fibonacci-dan-pangkat",
    "difficulty": "mudah",
    "prompt": "Tentukan suku berikutnya dari deret Fibonacci berikut:\n3, 10, 13, 23, 36, 59, 95, ...",
    "options": [
      "154",
      "151",
      "157",
      "160",
      "145"
    ],
    "answer": "A",
    "explanation": "Setiap suku mulai suku ke-3 merupakan hasil penjumlahan dua suku tepat di depannya (3 + 10 = 13, 10 + 13 = 23, dst.). Maka suku berikutnya = 59 + 95 = 154.",
    "tip": "Ciri khas deret Fibonacci adalah U3 = U1 + U2 dan U4 = U2 + U3; cukup jumlahkan dua angka paling kanan."
  },
  {
    "id": "tiu-der-099",
    "subPattern": "deret-fibonacci-dan-pangkat",
    "difficulty": "mudah",
    "prompt": "Tentukan suku berikutnya dari deret Fibonacci berikut:\n4, 11, 15, 26, 41, 67, 108, ...",
    "options": [
      "172",
      "175",
      "181",
      "163",
      "169"
    ],
    "answer": "B",
    "explanation": "Setiap suku mulai suku ke-3 merupakan hasil penjumlahan dua suku tepat di depannya (4 + 11 = 15, 11 + 15 = 26, dst.). Maka suku berikutnya = 67 + 108 = 175.",
    "tip": "Ciri khas deret Fibonacci adalah U3 = U1 + U2 dan U4 = U2 + U3; cukup jumlahkan dua angka paling kanan."
  },
  {
    "id": "tiu-der-100",
    "subPattern": "deret-fibonacci-dan-pangkat",
    "difficulty": "mudah",
    "prompt": "Tentukan suku berikutnya dari deret Fibonacci berikut:\n5, 12, 17, 29, 46, 75, 121, ...",
    "options": [
      "193",
      "181",
      "196",
      "187",
      "190"
    ],
    "answer": "C",
    "explanation": "Setiap suku mulai suku ke-3 merupakan hasil penjumlahan dua suku tepat di depannya (5 + 12 = 17, 12 + 17 = 29, dst.). Maka suku berikutnya = 75 + 121 = 196.",
    "tip": "Ciri khas deret Fibonacci adalah U3 = U1 + U2 dan U4 = U2 + U3; cukup jumlahkan dua angka paling kanan."
  }
];
