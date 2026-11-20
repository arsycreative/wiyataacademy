import type { QuestionDraft } from "@/modules/question-bank/domain/question";

export const analisisTabelBatch3Drafts: readonly QuestionDraft[] = [
  {
    "id": "tiu-tab-101",
    "subPattern": "seleksi-syarat-dan-peringkat",
    "difficulty": "sedang",
    "prompt": "Perhatikan tabel rincian nilai SKD lima peserta berikut:\n| Peserta | TWK | TIU | TKP |\n| Andi | 110 | 145 | 155 |\n| Budi | 95 | 130 | 175 |\n| Citra | 79 | 101 | 170 |\n| Dina | 81 | 104 | 171 |\n| Eko | 83 | 107 | 172 |\nSyarat lolos ambang batas adalah TWK ≥ 65, TIU ≥ 80, dan TKP ≥ 166. Di antara peserta yang LOLOS seluruh ambang batas, siapakah yang memperoleh total skor SKD tertinggi?",
    "options": [
      "Andi",
      "Citra",
      "Dina",
      "Budi",
      "Eko"
    ],
    "answer": "D",
    "explanation": "Meskipun Andi memiliki total skor sangat tinggi (410), ia gugur karena nilai TKP (155) di bawah 166. Dari peserta yang memenuhi ketiga ambang batas, total tertinggi diraih oleh Budi (95 + 130 + 175 = 400).",
    "tip": "Waspadai peserta jebakan yang nilai totalnya paling besar tetapi gugur di salah satu subtes (misal TKP < 166)."
  },
  {
    "id": "tiu-tab-102",
    "subPattern": "seleksi-syarat-dan-peringkat",
    "difficulty": "sedang",
    "prompt": "Perhatikan tabel rincian nilai SKD lima peserta berikut:\n| Peserta | TWK | TIU | TKP |\n| Fajar | 76 | 96 | 169 |\n| Gita | 111 | 146 | 156 |\n| Hadi | 96 | 131 | 176 |\n| Indra | 82 | 105 | 172 |\n| Jihan | 84 | 108 | 173 |\nSyarat lolos ambang batas adalah TWK ≥ 65, TIU ≥ 80, dan TKP ≥ 166. Di antara peserta yang LOLOS seluruh ambang batas, siapakah yang memperoleh total skor SKD tertinggi?",
    "options": [
      "Fajar",
      "Gita",
      "Indra",
      "Jihan",
      "Hadi"
    ],
    "answer": "E",
    "explanation": "Meskipun Gita memiliki total skor sangat tinggi (413), ia gugur karena nilai TKP (156) di bawah 166. Dari peserta yang memenuhi ketiga ambang batas, total tertinggi diraih oleh Hadi (96 + 131 + 176 = 403).",
    "tip": "Waspadai peserta jebakan yang nilai totalnya paling besar tetapi gugur di salah satu subtes (misal TKP < 166)."
  },
  {
    "id": "tiu-tab-103",
    "subPattern": "seleksi-syarat-dan-peringkat",
    "difficulty": "sedang",
    "prompt": "Perhatikan tabel rincian nilai SKD lima peserta berikut:\n| Peserta | TWK | TIU | TKP |\n| Kiki | 77 | 97 | 170 |\n| Laras | 79 | 100 | 171 |\n| Mira | 112 | 147 | 157 |\n| Nanda | 97 | 132 | 177 |\n| Oki | 85 | 109 | 174 |\nSyarat lolos ambang batas adalah TWK ≥ 65, TIU ≥ 80, dan TKP ≥ 166. Di antara peserta yang LOLOS seluruh ambang batas, siapakah yang memperoleh total skor SKD tertinggi?",
    "options": [
      "Nanda",
      "Kiki",
      "Laras",
      "Mira",
      "Oki"
    ],
    "answer": "A",
    "explanation": "Meskipun Mira memiliki total skor sangat tinggi (416), ia gugur karena nilai TKP (157) di bawah 166. Dari peserta yang memenuhi ketiga ambang batas, total tertinggi diraih oleh Nanda (97 + 132 + 177 = 406).",
    "tip": "Waspadai peserta jebakan yang nilai totalnya paling besar tetapi gugur di salah satu subtes (misal TKP < 166)."
  },
  {
    "id": "tiu-tab-104",
    "subPattern": "seleksi-syarat-dan-peringkat",
    "difficulty": "sedang",
    "prompt": "Perhatikan tabel rincian nilai SKD lima peserta berikut:\n| Peserta | TWK | TIU | TKP |\n| Pandu | 78 | 98 | 171 |\n| Rania | 80 | 101 | 172 |\n| Satria | 82 | 104 | 173 |\n| Tania | 113 | 148 | 158 |\n| Umar | 98 | 133 | 178 |\nSyarat lolos ambang batas adalah TWK ≥ 65, TIU ≥ 80, dan TKP ≥ 166. Di antara peserta yang LOLOS seluruh ambang batas, siapakah yang memperoleh total skor SKD tertinggi?",
    "options": [
      "Pandu",
      "Umar",
      "Rania",
      "Satria",
      "Tania"
    ],
    "answer": "B",
    "explanation": "Meskipun Tania memiliki total skor sangat tinggi (419), ia gugur karena nilai TKP (158) di bawah 166. Dari peserta yang memenuhi ketiga ambang batas, total tertinggi diraih oleh Umar (98 + 133 + 178 = 409).",
    "tip": "Waspadai peserta jebakan yang nilai totalnya paling besar tetapi gugur di salah satu subtes (misal TKP < 166)."
  },
  {
    "id": "tiu-tab-105",
    "subPattern": "seleksi-syarat-dan-peringkat",
    "difficulty": "sedang",
    "prompt": "Perhatikan tabel rincian nilai SKD lima peserta berikut:\n| Peserta | TWK | TIU | TKP |\n| Vina | 99 | 134 | 179 |\n| Wawan | 81 | 102 | 173 |\n| Yuni | 83 | 105 | 174 |\n| Zaki | 85 | 108 | 175 |\n| Aldo | 114 | 149 | 159 |\nSyarat lolos ambang batas adalah TWK ≥ 65, TIU ≥ 80, dan TKP ≥ 166. Di antara peserta yang LOLOS seluruh ambang batas, siapakah yang memperoleh total skor SKD tertinggi?",
    "options": [
      "Wawan",
      "Yuni",
      "Vina",
      "Zaki",
      "Aldo"
    ],
    "answer": "C",
    "explanation": "Meskipun Aldo memiliki total skor sangat tinggi (422), ia gugur karena nilai TKP (159) di bawah 166. Dari peserta yang memenuhi ketiga ambang batas, total tertinggi diraih oleh Vina (99 + 134 + 179 = 412).",
    "tip": "Waspadai peserta jebakan yang nilai totalnya paling besar tetapi gugur di salah satu subtes (misal TKP < 166)."
  },
  {
    "id": "tiu-tab-106",
    "subPattern": "seleksi-syarat-dan-peringkat",
    "difficulty": "sedang",
    "prompt": "Perhatikan tabel rincian nilai SKD lima peserta berikut:\n| Peserta | TWK | TIU | TKP |\n| Andi | 115 | 150 | 160 |\n| Budi | 100 | 135 | 180 |\n| Citra | 84 | 106 | 175 |\n| Dina | 86 | 109 | 176 |\n| Eko | 88 | 112 | 177 |\nSyarat lolos ambang batas adalah TWK ≥ 65, TIU ≥ 80, dan TKP ≥ 166. Di antara peserta yang LOLOS seluruh ambang batas, siapakah yang memperoleh total skor SKD tertinggi?",
    "options": [
      "Andi",
      "Citra",
      "Dina",
      "Budi",
      "Eko"
    ],
    "answer": "D",
    "explanation": "Meskipun Andi memiliki total skor sangat tinggi (425), ia gugur karena nilai TKP (160) di bawah 166. Dari peserta yang memenuhi ketiga ambang batas, total tertinggi diraih oleh Budi (100 + 135 + 180 = 415).",
    "tip": "Waspadai peserta jebakan yang nilai totalnya paling besar tetapi gugur di salah satu subtes (misal TKP < 166)."
  },
  {
    "id": "tiu-tab-107",
    "subPattern": "seleksi-syarat-dan-peringkat",
    "difficulty": "sedang",
    "prompt": "Perhatikan tabel rincian nilai SKD lima peserta berikut:\n| Peserta | TWK | TIU | TKP |\n| Fajar | 81 | 101 | 174 |\n| Gita | 116 | 151 | 161 |\n| Hadi | 101 | 136 | 181 |\n| Indra | 87 | 110 | 177 |\n| Jihan | 89 | 113 | 178 |\nSyarat lolos ambang batas adalah TWK ≥ 65, TIU ≥ 80, dan TKP ≥ 166. Di antara peserta yang LOLOS seluruh ambang batas, siapakah yang memperoleh total skor SKD tertinggi?",
    "options": [
      "Fajar",
      "Gita",
      "Indra",
      "Jihan",
      "Hadi"
    ],
    "answer": "E",
    "explanation": "Meskipun Gita memiliki total skor sangat tinggi (428), ia gugur karena nilai TKP (161) di bawah 166. Dari peserta yang memenuhi ketiga ambang batas, total tertinggi diraih oleh Hadi (101 + 136 + 181 = 418).",
    "tip": "Waspadai peserta jebakan yang nilai totalnya paling besar tetapi gugur di salah satu subtes (misal TKP < 166)."
  },
  {
    "id": "tiu-tab-108",
    "subPattern": "seleksi-syarat-dan-peringkat",
    "difficulty": "sedang",
    "prompt": "Perhatikan tabel rincian nilai SKD lima peserta berikut:\n| Peserta | TWK | TIU | TKP |\n| Kiki | 82 | 102 | 175 |\n| Laras | 84 | 105 | 176 |\n| Mira | 117 | 152 | 162 |\n| Nanda | 102 | 137 | 182 |\n| Oki | 90 | 114 | 179 |\nSyarat lolos ambang batas adalah TWK ≥ 65, TIU ≥ 80, dan TKP ≥ 166. Di antara peserta yang LOLOS seluruh ambang batas, siapakah yang memperoleh total skor SKD tertinggi?",
    "options": [
      "Nanda",
      "Kiki",
      "Laras",
      "Mira",
      "Oki"
    ],
    "answer": "A",
    "explanation": "Meskipun Mira memiliki total skor sangat tinggi (431), ia gugur karena nilai TKP (162) di bawah 166. Dari peserta yang memenuhi ketiga ambang batas, total tertinggi diraih oleh Nanda (102 + 137 + 182 = 421).",
    "tip": "Waspadai peserta jebakan yang nilai totalnya paling besar tetapi gugur di salah satu subtes (misal TKP < 166)."
  },
  {
    "id": "tiu-tab-109",
    "subPattern": "seleksi-syarat-dan-peringkat",
    "difficulty": "sedang",
    "prompt": "Perhatikan tabel rincian nilai SKD lima peserta berikut:\n| Peserta | TWK | TIU | TKP |\n| Pandu | 83 | 103 | 176 |\n| Rania | 85 | 106 | 177 |\n| Satria | 87 | 109 | 178 |\n| Tania | 118 | 153 | 163 |\n| Umar | 103 | 138 | 183 |\nSyarat lolos ambang batas adalah TWK ≥ 65, TIU ≥ 80, dan TKP ≥ 166. Di antara peserta yang LOLOS seluruh ambang batas, siapakah yang memperoleh total skor SKD tertinggi?",
    "options": [
      "Pandu",
      "Umar",
      "Rania",
      "Satria",
      "Tania"
    ],
    "answer": "B",
    "explanation": "Meskipun Tania memiliki total skor sangat tinggi (434), ia gugur karena nilai TKP (163) di bawah 166. Dari peserta yang memenuhi ketiga ambang batas, total tertinggi diraih oleh Umar (103 + 138 + 183 = 424).",
    "tip": "Waspadai peserta jebakan yang nilai totalnya paling besar tetapi gugur di salah satu subtes (misal TKP < 166)."
  },
  {
    "id": "tiu-tab-110",
    "subPattern": "seleksi-syarat-dan-peringkat",
    "difficulty": "sedang",
    "prompt": "Perhatikan tabel rincian nilai SKD lima peserta berikut:\n| Peserta | TWK | TIU | TKP |\n| Vina | 104 | 139 | 184 |\n| Wawan | 86 | 107 | 178 |\n| Yuni | 88 | 110 | 179 |\n| Zaki | 90 | 113 | 180 |\n| Aldo | 119 | 154 | 164 |\nSyarat lolos ambang batas adalah TWK ≥ 65, TIU ≥ 80, dan TKP ≥ 166. Di antara peserta yang LOLOS seluruh ambang batas, siapakah yang memperoleh total skor SKD tertinggi?",
    "options": [
      "Wawan",
      "Yuni",
      "Vina",
      "Zaki",
      "Aldo"
    ],
    "answer": "C",
    "explanation": "Meskipun Aldo memiliki total skor sangat tinggi (437), ia gugur karena nilai TKP (164) di bawah 166. Dari peserta yang memenuhi ketiga ambang batas, total tertinggi diraih oleh Vina (104 + 139 + 184 = 427).",
    "tip": "Waspadai peserta jebakan yang nilai totalnya paling besar tetapi gugur di salah satu subtes (misal TKP < 166)."
  },
  {
    "id": "tiu-tab-111",
    "subPattern": "seleksi-syarat-dan-peringkat",
    "difficulty": "sulit",
    "prompt": "Perhatikan tabel seleksi pegawai untuk tugas belajar berikut:\n| Pegawai | Masa Kerja (Tahun) | Skor Kinerja | Usulan Biaya |\n| Andi | 3 | 86 | Rp4.500.000 |\n| Budi | 4 | 87 | Rp4.700.000 |\n| Citra | 4 | 88 | Rp4.200.000 |\n| Dina | 2 | 92 | Rp3.500.000 |\n| Eko | 5 | 75 | Rp3.800.000 |\nSyarat wajib penerima tugas belajar adalah memiliki Masa Kerja minimal 3 tahun DAN Skor Kinerja minimal 85. Jika instansi memprioritaskan pegawai yang memenuhi syarat dengan Usulan Biaya paling rendah, siapakah yang terpilih?",
    "options": [
      "Andi",
      "Budi",
      "Dina",
      "Citra",
      "Eko"
    ],
    "answer": "D",
    "explanation": "Eliminasi pegawai yang masa kerjanya < 3 tahun atau skor kinerjanya < 85. Dari pegawai yang memenuhi kedua syarat wajib tersebut, usulan biaya terendah adalah Citra (Rp4.200.000).",
    "tip": "Selalu lakukan penyaringan syarat mutlak (Masa Kerja ≥ 3 dan Skor ≥ 85) sebelum membandingkan kolom biaya."
  },
  {
    "id": "tiu-tab-112",
    "subPattern": "seleksi-syarat-dan-peringkat",
    "difficulty": "sulit",
    "prompt": "Perhatikan tabel seleksi pegawai untuk tugas belajar berikut:\n| Pegawai | Masa Kerja (Tahun) | Skor Kinerja | Usulan Biaya |\n| Fajar | 6 | 76 | Rp3.800.000 |\n| Gita | 5 | 88 | Rp4.700.000 |\n| Hadi | 6 | 89 | Rp4.900.000 |\n| Indra | 5 | 89 | Rp4.200.000 |\n| Jihan | 2 | 93 | Rp3.500.000 |\nSyarat wajib penerima tugas belajar adalah memiliki Masa Kerja minimal 3 tahun DAN Skor Kinerja minimal 85. Jika instansi memprioritaskan pegawai yang memenuhi syarat dengan Usulan Biaya paling rendah, siapakah yang terpilih?",
    "options": [
      "Fajar",
      "Gita",
      "Hadi",
      "Jihan",
      "Indra"
    ],
    "answer": "E",
    "explanation": "Eliminasi pegawai yang masa kerjanya < 3 tahun atau skor kinerjanya < 85. Dari pegawai yang memenuhi kedua syarat wajib tersebut, usulan biaya terendah adalah Indra (Rp4.200.000).",
    "tip": "Selalu lakukan penyaringan syarat mutlak (Masa Kerja ≥ 3 dan Skor ≥ 85) sebelum membandingkan kolom biaya."
  },
  {
    "id": "tiu-tab-113",
    "subPattern": "seleksi-syarat-dan-peringkat",
    "difficulty": "sulit",
    "prompt": "Perhatikan tabel seleksi pegawai untuk tugas belajar berikut:\n| Pegawai | Masa Kerja (Tahun) | Skor Kinerja | Usulan Biaya |\n| Kiki | 2 | 94 | Rp3.500.000 |\n| Laras | 7 | 77 | Rp3.800.000 |\n| Mira | 7 | 90 | Rp4.900.000 |\n| Nanda | 5 | 91 | Rp5.100.000 |\n| Oki | 6 | 90 | Rp4.200.000 |\nSyarat wajib penerima tugas belajar adalah memiliki Masa Kerja minimal 3 tahun DAN Skor Kinerja minimal 85. Jika instansi memprioritaskan pegawai yang memenuhi syarat dengan Usulan Biaya paling rendah, siapakah yang terpilih?",
    "options": [
      "Oki",
      "Kiki",
      "Laras",
      "Mira",
      "Nanda"
    ],
    "answer": "A",
    "explanation": "Eliminasi pegawai yang masa kerjanya < 3 tahun atau skor kinerjanya < 85. Dari pegawai yang memenuhi kedua syarat wajib tersebut, usulan biaya terendah adalah Oki (Rp4.200.000).",
    "tip": "Selalu lakukan penyaringan syarat mutlak (Masa Kerja ≥ 3 dan Skor ≥ 85) sebelum membandingkan kolom biaya."
  },
  {
    "id": "tiu-tab-114",
    "subPattern": "seleksi-syarat-dan-peringkat",
    "difficulty": "sulit",
    "prompt": "Perhatikan tabel seleksi pegawai untuk tugas belajar berikut:\n| Pegawai | Masa Kerja (Tahun) | Skor Kinerja | Usulan Biaya |\n| Pandu | 7 | 91 | Rp4.200.000 |\n| Rania | 2 | 95 | Rp3.500.000 |\n| Satria | 8 | 78 | Rp3.800.000 |\n| Tania | 6 | 92 | Rp5.100.000 |\n| Umar | 7 | 93 | Rp5.300.000 |\nSyarat wajib penerima tugas belajar adalah memiliki Masa Kerja minimal 3 tahun DAN Skor Kinerja minimal 85. Jika instansi memprioritaskan pegawai yang memenuhi syarat dengan Usulan Biaya paling rendah, siapakah yang terpilih?",
    "options": [
      "Rania",
      "Pandu",
      "Satria",
      "Tania",
      "Umar"
    ],
    "answer": "B",
    "explanation": "Eliminasi pegawai yang masa kerjanya < 3 tahun atau skor kinerjanya < 85. Dari pegawai yang memenuhi kedua syarat wajib tersebut, usulan biaya terendah adalah Pandu (Rp4.200.000).",
    "tip": "Selalu lakukan penyaringan syarat mutlak (Masa Kerja ≥ 3 dan Skor ≥ 85) sebelum membandingkan kolom biaya."
  },
  {
    "id": "tiu-tab-115",
    "subPattern": "seleksi-syarat-dan-peringkat",
    "difficulty": "sulit",
    "prompt": "Perhatikan tabel seleksi pegawai untuk tugas belajar berikut:\n| Pegawai | Masa Kerja (Tahun) | Skor Kinerja | Usulan Biaya |\n| Vina | 7 | 90 | Rp4.500.000 |\n| Wawan | 8 | 92 | Rp4.200.000 |\n| Yuni | 2 | 96 | Rp3.500.000 |\n| Zaki | 9 | 79 | Rp3.800.000 |\n| Aldo | 8 | 94 | Rp5.300.000 |\nSyarat wajib penerima tugas belajar adalah memiliki Masa Kerja minimal 3 tahun DAN Skor Kinerja minimal 85. Jika instansi memprioritaskan pegawai yang memenuhi syarat dengan Usulan Biaya paling rendah, siapakah yang terpilih?",
    "options": [
      "Vina",
      "Yuni",
      "Wawan",
      "Zaki",
      "Aldo"
    ],
    "answer": "C",
    "explanation": "Eliminasi pegawai yang masa kerjanya < 3 tahun atau skor kinerjanya < 85. Dari pegawai yang memenuhi kedua syarat wajib tersebut, usulan biaya terendah adalah Wawan (Rp4.200.000).",
    "tip": "Selalu lakukan penyaringan syarat mutlak (Masa Kerja ≥ 3 dan Skor ≥ 85) sebelum membandingkan kolom biaya."
  },
  {
    "id": "tiu-tab-116",
    "subPattern": "seleksi-syarat-dan-peringkat",
    "difficulty": "sulit",
    "prompt": "Perhatikan tabel seleksi pegawai untuk tugas belajar berikut:\n| Pegawai | Masa Kerja (Tahun) | Skor Kinerja | Usulan Biaya |\n| Andi | 8 | 91 | Rp4.500.000 |\n| Budi | 9 | 92 | Rp4.700.000 |\n| Citra | 9 | 93 | Rp4.200.000 |\n| Dina | 2 | 97 | Rp3.500.000 |\n| Eko | 10 | 80 | Rp3.800.000 |\nSyarat wajib penerima tugas belajar adalah memiliki Masa Kerja minimal 3 tahun DAN Skor Kinerja minimal 85. Jika instansi memprioritaskan pegawai yang memenuhi syarat dengan Usulan Biaya paling rendah, siapakah yang terpilih?",
    "options": [
      "Andi",
      "Budi",
      "Dina",
      "Citra",
      "Eko"
    ],
    "answer": "D",
    "explanation": "Eliminasi pegawai yang masa kerjanya < 3 tahun atau skor kinerjanya < 85. Dari pegawai yang memenuhi kedua syarat wajib tersebut, usulan biaya terendah adalah Citra (Rp4.200.000).",
    "tip": "Selalu lakukan penyaringan syarat mutlak (Masa Kerja ≥ 3 dan Skor ≥ 85) sebelum membandingkan kolom biaya."
  },
  {
    "id": "tiu-tab-117",
    "subPattern": "seleksi-syarat-dan-peringkat",
    "difficulty": "sulit",
    "prompt": "Perhatikan tabel seleksi pegawai untuk tugas belajar berikut:\n| Pegawai | Masa Kerja (Tahun) | Skor Kinerja | Usulan Biaya |\n| Fajar | 11 | 81 | Rp3.800.000 |\n| Gita | 10 | 93 | Rp4.700.000 |\n| Hadi | 11 | 94 | Rp4.900.000 |\n| Indra | 10 | 94 | Rp4.200.000 |\n| Jihan | 2 | 98 | Rp3.500.000 |\nSyarat wajib penerima tugas belajar adalah memiliki Masa Kerja minimal 3 tahun DAN Skor Kinerja minimal 85. Jika instansi memprioritaskan pegawai yang memenuhi syarat dengan Usulan Biaya paling rendah, siapakah yang terpilih?",
    "options": [
      "Fajar",
      "Gita",
      "Hadi",
      "Jihan",
      "Indra"
    ],
    "answer": "E",
    "explanation": "Eliminasi pegawai yang masa kerjanya < 3 tahun atau skor kinerjanya < 85. Dari pegawai yang memenuhi kedua syarat wajib tersebut, usulan biaya terendah adalah Indra (Rp4.200.000).",
    "tip": "Selalu lakukan penyaringan syarat mutlak (Masa Kerja ≥ 3 dan Skor ≥ 85) sebelum membandingkan kolom biaya."
  },
  {
    "id": "tiu-tab-118",
    "subPattern": "seleksi-syarat-dan-peringkat",
    "difficulty": "sulit",
    "prompt": "Perhatikan tabel seleksi pegawai untuk tugas belajar berikut:\n| Pegawai | Masa Kerja (Tahun) | Skor Kinerja | Usulan Biaya |\n| Kiki | 2 | 99 | Rp3.500.000 |\n| Laras | 12 | 82 | Rp3.800.000 |\n| Mira | 12 | 95 | Rp4.900.000 |\n| Nanda | 10 | 96 | Rp5.100.000 |\n| Oki | 11 | 95 | Rp4.200.000 |\nSyarat wajib penerima tugas belajar adalah memiliki Masa Kerja minimal 3 tahun DAN Skor Kinerja minimal 85. Jika instansi memprioritaskan pegawai yang memenuhi syarat dengan Usulan Biaya paling rendah, siapakah yang terpilih?",
    "options": [
      "Oki",
      "Kiki",
      "Laras",
      "Mira",
      "Nanda"
    ],
    "answer": "A",
    "explanation": "Eliminasi pegawai yang masa kerjanya < 3 tahun atau skor kinerjanya < 85. Dari pegawai yang memenuhi kedua syarat wajib tersebut, usulan biaya terendah adalah Oki (Rp4.200.000).",
    "tip": "Selalu lakukan penyaringan syarat mutlak (Masa Kerja ≥ 3 dan Skor ≥ 85) sebelum membandingkan kolom biaya."
  },
  {
    "id": "tiu-tab-119",
    "subPattern": "seleksi-syarat-dan-peringkat",
    "difficulty": "sulit",
    "prompt": "Perhatikan tabel seleksi pegawai untuk tugas belajar berikut:\n| Pegawai | Masa Kerja (Tahun) | Skor Kinerja | Usulan Biaya |\n| Pandu | 12 | 96 | Rp4.200.000 |\n| Rania | 2 | 100 | Rp3.500.000 |\n| Satria | 13 | 83 | Rp3.800.000 |\n| Tania | 11 | 97 | Rp5.100.000 |\n| Umar | 12 | 98 | Rp5.300.000 |\nSyarat wajib penerima tugas belajar adalah memiliki Masa Kerja minimal 3 tahun DAN Skor Kinerja minimal 85. Jika instansi memprioritaskan pegawai yang memenuhi syarat dengan Usulan Biaya paling rendah, siapakah yang terpilih?",
    "options": [
      "Rania",
      "Pandu",
      "Satria",
      "Tania",
      "Umar"
    ],
    "answer": "B",
    "explanation": "Eliminasi pegawai yang masa kerjanya < 3 tahun atau skor kinerjanya < 85. Dari pegawai yang memenuhi kedua syarat wajib tersebut, usulan biaya terendah adalah Pandu (Rp4.200.000).",
    "tip": "Selalu lakukan penyaringan syarat mutlak (Masa Kerja ≥ 3 dan Skor ≥ 85) sebelum membandingkan kolom biaya."
  },
  {
    "id": "tiu-tab-120",
    "subPattern": "seleksi-syarat-dan-peringkat",
    "difficulty": "sulit",
    "prompt": "Perhatikan tabel seleksi pegawai untuk tugas belajar berikut:\n| Pegawai | Masa Kerja (Tahun) | Skor Kinerja | Usulan Biaya |\n| Vina | 12 | 95 | Rp4.500.000 |\n| Wawan | 13 | 97 | Rp4.200.000 |\n| Yuni | 2 | 101 | Rp3.500.000 |\n| Zaki | 14 | 84 | Rp3.800.000 |\n| Aldo | 13 | 99 | Rp5.300.000 |\nSyarat wajib penerima tugas belajar adalah memiliki Masa Kerja minimal 3 tahun DAN Skor Kinerja minimal 85. Jika instansi memprioritaskan pegawai yang memenuhi syarat dengan Usulan Biaya paling rendah, siapakah yang terpilih?",
    "options": [
      "Vina",
      "Yuni",
      "Wawan",
      "Zaki",
      "Aldo"
    ],
    "answer": "C",
    "explanation": "Eliminasi pegawai yang masa kerjanya < 3 tahun atau skor kinerjanya < 85. Dari pegawai yang memenuhi kedua syarat wajib tersebut, usulan biaya terendah adalah Wawan (Rp4.200.000).",
    "tip": "Selalu lakukan penyaringan syarat mutlak (Masa Kerja ≥ 3 dan Skor ≥ 85) sebelum membandingkan kolom biaya."
  },
  {
    "id": "tiu-tab-121",
    "subPattern": "simpulan-dan-perbandingan-tabel",
    "difficulty": "mudah",
    "prompt": "Perhatikan tabel indeks kepuasan masyarakat pada lima unit layanan berikut:\n| Unit | 2024 | 2025 | 2026 |\n| Sektor 1 | 40 | 52 | 65 |\n| Sektor 2 | 43 | 59 | 54 |\n| Sektor 3 | 52 | 47 | 62 |\n| Sektor 4 | 45 | 61 | 56 |\n| Sektor 5 | 54 | 49 | 64 |\nUnit manakah yang mengalami kenaikan indeks kepuasan secara konsisten setiap tahun dari 2024 hingga 2026?",
    "options": [
      "Sektor 2",
      "Sektor 3",
      "Sektor 4",
      "Sektor 5",
      "Sektor 1"
    ],
    "answer": "E",
    "explanation": "Hanya Sektor 1 yang nilainya terus meningkat setiap tahun (40 → 52 → 65), sedangkan unit lainnya sempat mengalami penurunan.",
    "tip": "Periksa baris demi baris dari kiri ke kanan; coret baris begitu menemukan angka tahun berikutnya lebih kecil dari tahun sebelumnya."
  },
  {
    "id": "tiu-tab-122",
    "subPattern": "simpulan-dan-perbandingan-tabel",
    "difficulty": "mudah",
    "prompt": "Perhatikan tabel indeks kepuasan masyarakat pada lima unit layanan berikut:\n| Unit | 2024 | 2025 | 2026 |\n| Cabang Utara | 50 | 45 | 60 |\n| Cabang Selatan | 41 | 53 | 66 |\n| Cabang Timur | 52 | 47 | 62 |\n| Cabang Barat | 45 | 61 | 56 |\n| Cabang Pusat | 54 | 49 | 64 |\nUnit manakah yang mengalami kenaikan indeks kepuasan secara konsisten setiap tahun dari 2024 hingga 2026?",
    "options": [
      "Cabang Selatan",
      "Cabang Utara",
      "Cabang Timur",
      "Cabang Barat",
      "Cabang Pusat"
    ],
    "answer": "A",
    "explanation": "Hanya Cabang Selatan yang nilainya terus meningkat setiap tahun (41 → 53 → 66), sedangkan unit lainnya sempat mengalami penurunan.",
    "tip": "Periksa baris demi baris dari kiri ke kanan; coret baris begitu menemukan angka tahun berikutnya lebih kecil dari tahun sebelumnya."
  },
  {
    "id": "tiu-tab-123",
    "subPattern": "simpulan-dan-perbandingan-tabel",
    "difficulty": "mudah",
    "prompt": "Perhatikan tabel indeks kepuasan masyarakat pada lima unit layanan berikut:\n| Unit | 2024 | 2025 | 2026 |\n| Balai A | 50 | 45 | 60 |\n| Balai B | 43 | 59 | 54 |\n| Balai C | 42 | 54 | 67 |\n| Balai D | 45 | 61 | 56 |\n| Balai E | 54 | 49 | 64 |\nUnit manakah yang mengalami kenaikan indeks kepuasan secara konsisten setiap tahun dari 2024 hingga 2026?",
    "options": [
      "Balai A",
      "Balai C",
      "Balai B",
      "Balai D",
      "Balai E"
    ],
    "answer": "B",
    "explanation": "Hanya Balai C yang nilainya terus meningkat setiap tahun (42 → 54 → 67), sedangkan unit lainnya sempat mengalami penurunan.",
    "tip": "Periksa baris demi baris dari kiri ke kanan; coret baris begitu menemukan angka tahun berikutnya lebih kecil dari tahun sebelumnya."
  },
  {
    "id": "tiu-tab-124",
    "subPattern": "simpulan-dan-perbandingan-tabel",
    "difficulty": "mudah",
    "prompt": "Perhatikan tabel indeks kepuasan masyarakat pada lima unit layanan berikut:\n| Unit | 2024 | 2025 | 2026 |\n| Unit A | 50 | 45 | 60 |\n| Unit B | 43 | 59 | 54 |\n| Unit C | 52 | 47 | 62 |\n| Unit D | 43 | 55 | 68 |\n| Unit E | 54 | 49 | 64 |\nUnit manakah yang mengalami kenaikan indeks kepuasan secara konsisten setiap tahun dari 2024 hingga 2026?",
    "options": [
      "Unit A",
      "Unit B",
      "Unit D",
      "Unit C",
      "Unit E"
    ],
    "answer": "C",
    "explanation": "Hanya Unit D yang nilainya terus meningkat setiap tahun (43 → 55 → 68), sedangkan unit lainnya sempat mengalami penurunan.",
    "tip": "Periksa baris demi baris dari kiri ke kanan; coret baris begitu menemukan angka tahun berikutnya lebih kecil dari tahun sebelumnya."
  },
  {
    "id": "tiu-tab-125",
    "subPattern": "simpulan-dan-perbandingan-tabel",
    "difficulty": "mudah",
    "prompt": "Perhatikan tabel indeks kepuasan masyarakat pada lima unit layanan berikut:\n| Unit | 2024 | 2025 | 2026 |\n| Wilayah I | 50 | 45 | 60 |\n| Wilayah II | 43 | 59 | 54 |\n| Wilayah III | 52 | 47 | 62 |\n| Wilayah IV | 45 | 61 | 56 |\n| Wilayah V | 44 | 56 | 69 |\nUnit manakah yang mengalami kenaikan indeks kepuasan secara konsisten setiap tahun dari 2024 hingga 2026?",
    "options": [
      "Wilayah I",
      "Wilayah II",
      "Wilayah III",
      "Wilayah V",
      "Wilayah IV"
    ],
    "answer": "D",
    "explanation": "Hanya Wilayah V yang nilainya terus meningkat setiap tahun (44 → 56 → 69), sedangkan unit lainnya sempat mengalami penurunan.",
    "tip": "Periksa baris demi baris dari kiri ke kanan; coret baris begitu menemukan angka tahun berikutnya lebih kecil dari tahun sebelumnya."
  },
  {
    "id": "tiu-tab-126",
    "subPattern": "simpulan-dan-perbandingan-tabel",
    "difficulty": "mudah",
    "prompt": "Perhatikan tabel indeks kepuasan masyarakat pada lima unit layanan berikut:\n| Unit | 2024 | 2025 | 2026 |\n| Kantor P | 45 | 57 | 70 |\n| Kantor Q | 43 | 59 | 54 |\n| Kantor R | 52 | 47 | 62 |\n| Kantor S | 45 | 61 | 56 |\n| Kantor T | 54 | 49 | 64 |\nUnit manakah yang mengalami kenaikan indeks kepuasan secara konsisten setiap tahun dari 2024 hingga 2026?",
    "options": [
      "Kantor Q",
      "Kantor R",
      "Kantor S",
      "Kantor T",
      "Kantor P"
    ],
    "answer": "E",
    "explanation": "Hanya Kantor P yang nilainya terus meningkat setiap tahun (45 → 57 → 70), sedangkan unit lainnya sempat mengalami penurunan.",
    "tip": "Periksa baris demi baris dari kiri ke kanan; coret baris begitu menemukan angka tahun berikutnya lebih kecil dari tahun sebelumnya."
  },
  {
    "id": "tiu-tab-127",
    "subPattern": "simpulan-dan-perbandingan-tabel",
    "difficulty": "mudah",
    "prompt": "Perhatikan tabel indeks kepuasan masyarakat pada lima unit layanan berikut:\n| Unit | 2024 | 2025 | 2026 |\n| Sektor 1 | 50 | 45 | 60 |\n| Sektor 2 | 46 | 58 | 71 |\n| Sektor 3 | 52 | 47 | 62 |\n| Sektor 4 | 45 | 61 | 56 |\n| Sektor 5 | 54 | 49 | 64 |\nUnit manakah yang mengalami kenaikan indeks kepuasan secara konsisten setiap tahun dari 2024 hingga 2026?",
    "options": [
      "Sektor 2",
      "Sektor 1",
      "Sektor 3",
      "Sektor 4",
      "Sektor 5"
    ],
    "answer": "A",
    "explanation": "Hanya Sektor 2 yang nilainya terus meningkat setiap tahun (46 → 58 → 71), sedangkan unit lainnya sempat mengalami penurunan.",
    "tip": "Periksa baris demi baris dari kiri ke kanan; coret baris begitu menemukan angka tahun berikutnya lebih kecil dari tahun sebelumnya."
  },
  {
    "id": "tiu-tab-128",
    "subPattern": "simpulan-dan-perbandingan-tabel",
    "difficulty": "mudah",
    "prompt": "Perhatikan tabel indeks kepuasan masyarakat pada lima unit layanan berikut:\n| Unit | 2024 | 2025 | 2026 |\n| Cabang Utara | 50 | 45 | 60 |\n| Cabang Selatan | 43 | 59 | 54 |\n| Cabang Timur | 47 | 59 | 72 |\n| Cabang Barat | 45 | 61 | 56 |\n| Cabang Pusat | 54 | 49 | 64 |\nUnit manakah yang mengalami kenaikan indeks kepuasan secara konsisten setiap tahun dari 2024 hingga 2026?",
    "options": [
      "Cabang Utara",
      "Cabang Timur",
      "Cabang Selatan",
      "Cabang Barat",
      "Cabang Pusat"
    ],
    "answer": "B",
    "explanation": "Hanya Cabang Timur yang nilainya terus meningkat setiap tahun (47 → 59 → 72), sedangkan unit lainnya sempat mengalami penurunan.",
    "tip": "Periksa baris demi baris dari kiri ke kanan; coret baris begitu menemukan angka tahun berikutnya lebih kecil dari tahun sebelumnya."
  },
  {
    "id": "tiu-tab-129",
    "subPattern": "simpulan-dan-perbandingan-tabel",
    "difficulty": "mudah",
    "prompt": "Perhatikan tabel indeks kepuasan masyarakat pada lima unit layanan berikut:\n| Unit | 2024 | 2025 | 2026 |\n| Balai A | 50 | 45 | 60 |\n| Balai B | 43 | 59 | 54 |\n| Balai C | 52 | 47 | 62 |\n| Balai D | 48 | 60 | 73 |\n| Balai E | 54 | 49 | 64 |\nUnit manakah yang mengalami kenaikan indeks kepuasan secara konsisten setiap tahun dari 2024 hingga 2026?",
    "options": [
      "Balai A",
      "Balai B",
      "Balai D",
      "Balai C",
      "Balai E"
    ],
    "answer": "C",
    "explanation": "Hanya Balai D yang nilainya terus meningkat setiap tahun (48 → 60 → 73), sedangkan unit lainnya sempat mengalami penurunan.",
    "tip": "Periksa baris demi baris dari kiri ke kanan; coret baris begitu menemukan angka tahun berikutnya lebih kecil dari tahun sebelumnya."
  },
  {
    "id": "tiu-tab-130",
    "subPattern": "simpulan-dan-perbandingan-tabel",
    "difficulty": "mudah",
    "prompt": "Perhatikan tabel indeks kepuasan masyarakat pada lima unit layanan berikut:\n| Unit | 2024 | 2025 | 2026 |\n| Unit A | 50 | 45 | 60 |\n| Unit B | 43 | 59 | 54 |\n| Unit C | 52 | 47 | 62 |\n| Unit D | 45 | 61 | 56 |\n| Unit E | 49 | 61 | 74 |\nUnit manakah yang mengalami kenaikan indeks kepuasan secara konsisten setiap tahun dari 2024 hingga 2026?",
    "options": [
      "Unit A",
      "Unit B",
      "Unit C",
      "Unit E",
      "Unit D"
    ],
    "answer": "D",
    "explanation": "Hanya Unit E yang nilainya terus meningkat setiap tahun (49 → 61 → 74), sedangkan unit lainnya sempat mengalami penurunan.",
    "tip": "Periksa baris demi baris dari kiri ke kanan; coret baris begitu menemukan angka tahun berikutnya lebih kecil dari tahun sebelumnya."
  },
  {
    "id": "tiu-tab-131",
    "subPattern": "simpulan-dan-perbandingan-tabel",
    "difficulty": "sedang",
    "prompt": "Perhatikan tabel capaian kinerja empat unit berikut:\n| Unit | Periode I | Periode II |\n| Wilayah I | 20 | 30 |\n| Wilayah II | 35 | 25 |\n| Wilayah III | 28 | 40 |\n| Wilayah IV | 32 | 32 |\nBerdasarkan tabel di atas, manakah pernyataan berikut yang BENAR?",
    "options": [
      "Seluruh unit mengalami kenaikan dari Periode I ke Periode II",
      "Jumlah capaian Wilayah I pada kedua periode lebih besar daripada Wilayah III",
      "Wilayah II mengalami kenaikan sebesar 10 satuan pada Periode II",
      "Capaian Wilayah IV pada Periode II lebih rendah daripada Periode I",
      "Kenaikan tertinggi dari Periode I ke Periode II terjadi pada Wilayah III"
    ],
    "answer": "E",
    "explanation": "Perubahan dari Periode I ke II: Wilayah I (+10), Wilayah II (-10), Wilayah III (+12), dan Wilayah IV (0/tetap). Jadi pernyataan yang benar adalah kenaikan tertinggi terjadi pada Wilayah III.",
    "tip": "Uji kebenaran kalimat opsi dengan memeriksa perubahan selisih (Periode II dikurangi Periode I) pada tiap baris."
  },
  {
    "id": "tiu-tab-132",
    "subPattern": "simpulan-dan-perbandingan-tabel",
    "difficulty": "sedang",
    "prompt": "Perhatikan tabel capaian kinerja empat unit berikut:\n| Unit | Periode I | Periode II |\n| Kantor P | 22 | 32 |\n| Kantor Q | 37 | 27 |\n| Kantor R | 30 | 42 |\n| Kantor S | 34 | 34 |\nBerdasarkan tabel di atas, manakah pernyataan berikut yang BENAR?",
    "options": [
      "Kenaikan tertinggi dari Periode I ke Periode II terjadi pada Kantor R",
      "Seluruh unit mengalami kenaikan dari Periode I ke Periode II",
      "Jumlah capaian Kantor P pada kedua periode lebih besar daripada Kantor R",
      "Kantor Q mengalami kenaikan sebesar 10 satuan pada Periode II",
      "Capaian Kantor S pada Periode II lebih rendah daripada Periode I"
    ],
    "answer": "A",
    "explanation": "Perubahan dari Periode I ke II: Kantor P (+10), Kantor Q (-10), Kantor R (+12), dan Kantor S (0/tetap). Jadi pernyataan yang benar adalah kenaikan tertinggi terjadi pada Kantor R.",
    "tip": "Uji kebenaran kalimat opsi dengan memeriksa perubahan selisih (Periode II dikurangi Periode I) pada tiap baris."
  },
  {
    "id": "tiu-tab-133",
    "subPattern": "simpulan-dan-perbandingan-tabel",
    "difficulty": "sedang",
    "prompt": "Perhatikan tabel capaian kinerja empat unit berikut:\n| Unit | Periode I | Periode II |\n| Sektor 1 | 24 | 34 |\n| Sektor 2 | 39 | 29 |\n| Sektor 3 | 32 | 44 |\n| Sektor 4 | 36 | 36 |\nBerdasarkan tabel di atas, manakah pernyataan berikut yang BENAR?",
    "options": [
      "Seluruh unit mengalami kenaikan dari Periode I ke Periode II",
      "Kenaikan tertinggi dari Periode I ke Periode II terjadi pada Sektor 3",
      "Jumlah capaian Sektor 1 pada kedua periode lebih besar daripada Sektor 3",
      "Sektor 2 mengalami kenaikan sebesar 10 satuan pada Periode II",
      "Capaian Sektor 4 pada Periode II lebih rendah daripada Periode I"
    ],
    "answer": "B",
    "explanation": "Perubahan dari Periode I ke II: Sektor 1 (+10), Sektor 2 (-10), Sektor 3 (+12), dan Sektor 4 (0/tetap). Jadi pernyataan yang benar adalah kenaikan tertinggi terjadi pada Sektor 3.",
    "tip": "Uji kebenaran kalimat opsi dengan memeriksa perubahan selisih (Periode II dikurangi Periode I) pada tiap baris."
  },
  {
    "id": "tiu-tab-134",
    "subPattern": "simpulan-dan-perbandingan-tabel",
    "difficulty": "sedang",
    "prompt": "Perhatikan tabel capaian kinerja empat unit berikut:\n| Unit | Periode I | Periode II |\n| Cabang Utara | 26 | 36 |\n| Cabang Selatan | 41 | 31 |\n| Cabang Timur | 34 | 46 |\n| Cabang Barat | 38 | 38 |\nBerdasarkan tabel di atas, manakah pernyataan berikut yang BENAR?",
    "options": [
      "Seluruh unit mengalami kenaikan dari Periode I ke Periode II",
      "Jumlah capaian Cabang Utara pada kedua periode lebih besar daripada Cabang Timur",
      "Kenaikan tertinggi dari Periode I ke Periode II terjadi pada Cabang Timur",
      "Cabang Selatan mengalami kenaikan sebesar 10 satuan pada Periode II",
      "Capaian Cabang Barat pada Periode II lebih rendah daripada Periode I"
    ],
    "answer": "C",
    "explanation": "Perubahan dari Periode I ke II: Cabang Utara (+10), Cabang Selatan (-10), Cabang Timur (+12), dan Cabang Barat (0/tetap). Jadi pernyataan yang benar adalah kenaikan tertinggi terjadi pada Cabang Timur.",
    "tip": "Uji kebenaran kalimat opsi dengan memeriksa perubahan selisih (Periode II dikurangi Periode I) pada tiap baris."
  },
  {
    "id": "tiu-tab-135",
    "subPattern": "simpulan-dan-perbandingan-tabel",
    "difficulty": "sedang",
    "prompt": "Perhatikan tabel capaian kinerja empat unit berikut:\n| Unit | Periode I | Periode II |\n| Balai A | 28 | 38 |\n| Balai B | 43 | 33 |\n| Balai C | 36 | 48 |\n| Balai D | 40 | 40 |\nBerdasarkan tabel di atas, manakah pernyataan berikut yang BENAR?",
    "options": [
      "Seluruh unit mengalami kenaikan dari Periode I ke Periode II",
      "Jumlah capaian Balai A pada kedua periode lebih besar daripada Balai C",
      "Balai B mengalami kenaikan sebesar 10 satuan pada Periode II",
      "Kenaikan tertinggi dari Periode I ke Periode II terjadi pada Balai C",
      "Capaian Balai D pada Periode II lebih rendah daripada Periode I"
    ],
    "answer": "D",
    "explanation": "Perubahan dari Periode I ke II: Balai A (+10), Balai B (-10), Balai C (+12), dan Balai D (0/tetap). Jadi pernyataan yang benar adalah kenaikan tertinggi terjadi pada Balai C.",
    "tip": "Uji kebenaran kalimat opsi dengan memeriksa perubahan selisih (Periode II dikurangi Periode I) pada tiap baris."
  },
  {
    "id": "tiu-tab-136",
    "subPattern": "simpulan-dan-perbandingan-tabel",
    "difficulty": "sedang",
    "prompt": "Perhatikan tabel capaian kinerja empat unit berikut:\n| Unit | Periode I | Periode II |\n| Unit A | 30 | 40 |\n| Unit B | 45 | 35 |\n| Unit C | 38 | 50 |\n| Unit D | 42 | 42 |\nBerdasarkan tabel di atas, manakah pernyataan berikut yang BENAR?",
    "options": [
      "Seluruh unit mengalami kenaikan dari Periode I ke Periode II",
      "Jumlah capaian Unit A pada kedua periode lebih besar daripada Unit C",
      "Unit B mengalami kenaikan sebesar 10 satuan pada Periode II",
      "Capaian Unit D pada Periode II lebih rendah daripada Periode I",
      "Kenaikan tertinggi dari Periode I ke Periode II terjadi pada Unit C"
    ],
    "answer": "E",
    "explanation": "Perubahan dari Periode I ke II: Unit A (+10), Unit B (-10), Unit C (+12), dan Unit D (0/tetap). Jadi pernyataan yang benar adalah kenaikan tertinggi terjadi pada Unit C.",
    "tip": "Uji kebenaran kalimat opsi dengan memeriksa perubahan selisih (Periode II dikurangi Periode I) pada tiap baris."
  },
  {
    "id": "tiu-tab-137",
    "subPattern": "simpulan-dan-perbandingan-tabel",
    "difficulty": "sedang",
    "prompt": "Perhatikan tabel capaian kinerja empat unit berikut:\n| Unit | Periode I | Periode II |\n| Wilayah I | 32 | 42 |\n| Wilayah II | 47 | 37 |\n| Wilayah III | 40 | 52 |\n| Wilayah IV | 44 | 44 |\nBerdasarkan tabel di atas, manakah pernyataan berikut yang BENAR?",
    "options": [
      "Kenaikan tertinggi dari Periode I ke Periode II terjadi pada Wilayah III",
      "Seluruh unit mengalami kenaikan dari Periode I ke Periode II",
      "Jumlah capaian Wilayah I pada kedua periode lebih besar daripada Wilayah III",
      "Wilayah II mengalami kenaikan sebesar 10 satuan pada Periode II",
      "Capaian Wilayah IV pada Periode II lebih rendah daripada Periode I"
    ],
    "answer": "A",
    "explanation": "Perubahan dari Periode I ke II: Wilayah I (+10), Wilayah II (-10), Wilayah III (+12), dan Wilayah IV (0/tetap). Jadi pernyataan yang benar adalah kenaikan tertinggi terjadi pada Wilayah III.",
    "tip": "Uji kebenaran kalimat opsi dengan memeriksa perubahan selisih (Periode II dikurangi Periode I) pada tiap baris."
  },
  {
    "id": "tiu-tab-138",
    "subPattern": "simpulan-dan-perbandingan-tabel",
    "difficulty": "sedang",
    "prompt": "Perhatikan tabel capaian kinerja empat unit berikut:\n| Unit | Periode I | Periode II |\n| Kantor P | 34 | 44 |\n| Kantor Q | 49 | 39 |\n| Kantor R | 42 | 54 |\n| Kantor S | 46 | 46 |\nBerdasarkan tabel di atas, manakah pernyataan berikut yang BENAR?",
    "options": [
      "Seluruh unit mengalami kenaikan dari Periode I ke Periode II",
      "Kenaikan tertinggi dari Periode I ke Periode II terjadi pada Kantor R",
      "Jumlah capaian Kantor P pada kedua periode lebih besar daripada Kantor R",
      "Kantor Q mengalami kenaikan sebesar 10 satuan pada Periode II",
      "Capaian Kantor S pada Periode II lebih rendah daripada Periode I"
    ],
    "answer": "B",
    "explanation": "Perubahan dari Periode I ke II: Kantor P (+10), Kantor Q (-10), Kantor R (+12), dan Kantor S (0/tetap). Jadi pernyataan yang benar adalah kenaikan tertinggi terjadi pada Kantor R.",
    "tip": "Uji kebenaran kalimat opsi dengan memeriksa perubahan selisih (Periode II dikurangi Periode I) pada tiap baris."
  },
  {
    "id": "tiu-tab-139",
    "subPattern": "simpulan-dan-perbandingan-tabel",
    "difficulty": "sedang",
    "prompt": "Perhatikan tabel capaian kinerja empat unit berikut:\n| Unit | Periode I | Periode II |\n| Sektor 1 | 36 | 46 |\n| Sektor 2 | 51 | 41 |\n| Sektor 3 | 44 | 56 |\n| Sektor 4 | 48 | 48 |\nBerdasarkan tabel di atas, manakah pernyataan berikut yang BENAR?",
    "options": [
      "Seluruh unit mengalami kenaikan dari Periode I ke Periode II",
      "Jumlah capaian Sektor 1 pada kedua periode lebih besar daripada Sektor 3",
      "Kenaikan tertinggi dari Periode I ke Periode II terjadi pada Sektor 3",
      "Sektor 2 mengalami kenaikan sebesar 10 satuan pada Periode II",
      "Capaian Sektor 4 pada Periode II lebih rendah daripada Periode I"
    ],
    "answer": "C",
    "explanation": "Perubahan dari Periode I ke II: Sektor 1 (+10), Sektor 2 (-10), Sektor 3 (+12), dan Sektor 4 (0/tetap). Jadi pernyataan yang benar adalah kenaikan tertinggi terjadi pada Sektor 3.",
    "tip": "Uji kebenaran kalimat opsi dengan memeriksa perubahan selisih (Periode II dikurangi Periode I) pada tiap baris."
  },
  {
    "id": "tiu-tab-140",
    "subPattern": "simpulan-dan-perbandingan-tabel",
    "difficulty": "sedang",
    "prompt": "Perhatikan tabel capaian kinerja empat unit berikut:\n| Unit | Periode I | Periode II |\n| Cabang Utara | 38 | 48 |\n| Cabang Selatan | 53 | 43 |\n| Cabang Timur | 46 | 58 |\n| Cabang Barat | 50 | 50 |\nBerdasarkan tabel di atas, manakah pernyataan berikut yang BENAR?",
    "options": [
      "Seluruh unit mengalami kenaikan dari Periode I ke Periode II",
      "Jumlah capaian Cabang Utara pada kedua periode lebih besar daripada Cabang Timur",
      "Cabang Selatan mengalami kenaikan sebesar 10 satuan pada Periode II",
      "Kenaikan tertinggi dari Periode I ke Periode II terjadi pada Cabang Timur",
      "Capaian Cabang Barat pada Periode II lebih rendah daripada Periode I"
    ],
    "answer": "D",
    "explanation": "Perubahan dari Periode I ke II: Cabang Utara (+10), Cabang Selatan (-10), Cabang Timur (+12), dan Cabang Barat (0/tetap). Jadi pernyataan yang benar adalah kenaikan tertinggi terjadi pada Cabang Timur.",
    "tip": "Uji kebenaran kalimat opsi dengan memeriksa perubahan selisih (Periode II dikurangi Periode I) pada tiap baris."
  },
  {
    "id": "tiu-tab-141",
    "subPattern": "simpulan-dan-perbandingan-tabel",
    "difficulty": "sulit",
    "prompt": "Perhatikan tabel jumlah peserta ujian per sesi berikut:\n| Kelompok | Sesi 1 | Sesi 2 | Sesi 3 |\n| Balai A | 36 | 42 | 54 |\n| Balai B | 38 | 41 | 47 |\n| Balai C | 35 | 40 | 45 |\nJika X adalah rata-rata peserta per sesi pada Balai A dan Y adalah rata-rata peserta per sesi pada Balai B, manakah hubungan yang benar antara X dan Y?",
    "options": [
      "X < Y",
      "X = Y",
      "2X = 3Y",
      "Hubungan antara X dan Y tidak dapat ditentukan",
      "X > Y"
    ],
    "answer": "E",
    "explanation": "Rata-rata Balai A (X) = (36 + 42 + 54) / 3 = 132 / 3 = 44. Rata-rata Balai B (Y) = (38 + 41 + 47) / 3 = 126 / 3 = 42. Karena 44 > 42, maka X > Y.",
    "tip": "Cukup bandingkan total jumlah peserta masing-masing balai karena jumlah sesinya sama (3 sesi): 132 > 126 sehingga X > Y."
  },
  {
    "id": "tiu-tab-142",
    "subPattern": "simpulan-dan-perbandingan-tabel",
    "difficulty": "sulit",
    "prompt": "Perhatikan tabel persentase kelulusan administrasi tiga unit seleksi berikut (jumlah pendaftar awal tiap unit tidak dicantumkan):\n| Unit Seleksi | Persentase Lulus Tahap I |\n| Unit A | 65% |\n| Unit B | 80% |\n| Unit C | 72% |\nJika X adalah banyak peserta yang lulus pada Unit A dan Y adalah banyak peserta yang lulus pada Unit B, manakah hubungan yang benar antara X dan Y?",
    "options": [
      "Hubungan antara X dan Y tidak dapat ditentukan",
      "X > Y",
      "X < Y",
      "X = Y",
      "3X = 4Y"
    ],
    "answer": "A",
    "explanation": "Tabel hanya memuat persentase kelulusan, tanpa mencantumkan jumlah total pendaftar pada Unit A maupun Unit B. Jika pendaftar Unit A jauh lebih banyak (misalnya 1.000 orang vs 200 orang di Unit B), maka X (650) > Y (160); tetapi jika jumlah pendaftar sama besar, maka X < Y. Jadi hubungan X dan Y tidak dapat ditentukan.",
    "tip": "Persentase besar belum tentu menghasilkan jumlah orang lebih banyak apabila basis total populasi masing-masing kelompok tidak diketahui."
  },
  {
    "id": "tiu-tab-143",
    "subPattern": "simpulan-dan-perbandingan-tabel",
    "difficulty": "sulit",
    "prompt": "Perhatikan tabel jumlah dokumen yang diselesaikan per pekan berikut:\n| Wilayah | Pekan 1 | Pekan 2 | Pekan 3 |\n| Wilayah I | 34 | 41 | 48 |\n| Wilayah II | 40 | 45 | 50 |\n| Wilayah III | 44 | 40 | 48 |\nJika X adalah rata-rata dokumen per pekan pada Wilayah I dan Y adalah rata-rata dokumen per pekan pada Wilayah II, manakah hubungan yang benar antara X dan Y?",
    "options": [
      "X > Y",
      "X < Y",
      "X = Y",
      "2X = Y",
      "Hubungan antara X dan Y tidak dapat ditentukan"
    ],
    "answer": "B",
    "explanation": "Rata-rata Wilayah I (X) = (34 + 41 + 48) / 3 = 123 / 3 = 41. Rata-rata Wilayah II (Y) = (40 + 45 + 50) / 3 = 135 / 3 = 45. Karena 41 < 45, maka X < Y.",
    "tip": "Pada barisan aritmetika 3 suku, rata-ratanya tepat sama dengan nilai suku tengahnya (41 dan 45)."
  },
  {
    "id": "tiu-tab-144",
    "subPattern": "simpulan-dan-perbandingan-tabel",
    "difficulty": "sulit",
    "prompt": "Perhatikan tabel jumlah laporan pengawasan pada tiga kantor berikut:\n| Kantor | Triwulan I | Triwulan II | Triwulan III |\n| Kantor P | 42 | 48 | 54 |\n| Kantor Q | 44 | 48 | 52 |\n| Kantor R | 47 | 43 | 51 |\nJika X adalah rata-rata laporan per triwulan pada Kantor P dan Y adalah rata-rata laporan per triwulan pada Kantor Q, manakah hubungan yang benar antara X dan Y?",
    "options": [
      "X > Y",
      "X < Y",
      "X = Y",
      "2X = 3Y",
      "Hubungan antara X dan Y tidak dapat ditentukan"
    ],
    "answer": "C",
    "explanation": "Jumlah laporan Kantor P = 42 + 48 + 54 = 144 (rata-rata X = 48). Jumlah laporan Kantor Q = 44 + 48 + 52 = 144 (rata-rata Y = 48). Maka X = Y.",
    "tip": "Perhatikan suku tengah kedua barisan yang sama (48) dan selisih yang simetris."
  },
  {
    "id": "tiu-tab-145",
    "subPattern": "simpulan-dan-perbandingan-tabel",
    "difficulty": "sulit",
    "prompt": "Perhatikan tabel persentase kenaikan anggaran operasional pada tiga sektor tahun 2026 berikut:\n| Sektor | Kenaikan Anggaran (2026) |\n| Sektor 1 | 25% |\n| Sektor 2 | 15% |\n| Sektor 3 | 20% |\nJika X adalah besar nominal tambahan anggaran (dalam rupiah) pada Sektor 1 dan Y adalah besar nominal tambahan anggaran (dalam rupiah) pada Sektor 2, manakah hubungan yang benar?",
    "options": [
      "X > Y",
      "X < Y",
      "X = Y",
      "Hubungan antara X dan Y tidak dapat ditentukan",
      "X = 2Y"
    ],
    "answer": "D",
    "explanation": "Tabel hanya menyajikan persentase kenaikan, tanpa mencantumkan pagu anggaran awal tahun 2025 untuk Sektor 1 dan Sektor 2. Tanpa nilai awal, nominal rupiah X dan Y tidak dapat dihitung sehingga hubungan X dan Y tidak dapat ditentukan.",
    "tip": "Jangan membandingkan nominal uang hanya dari persentase pertumbuhan jika modal/pagu awalnya tidak tercantum pada tabel."
  },
  {
    "id": "tiu-tab-146",
    "subPattern": "simpulan-dan-perbandingan-tabel",
    "difficulty": "sulit",
    "prompt": "Perhatikan tabel jumlah kunjungan layanan harian pada tiga cabang berikut:\n| Cabang | Senin | Selasa | Rabu |\n| Cabang Utara | 52 | 64 | 70 |\n| Cabang Selatan | 50 | 55 | 60 |\n| Cabang Timur | 53 | 49 | 57 |\nJika X adalah rata-rata kunjungan per hari pada Cabang Utara dan Y adalah rata-rata kunjungan per hari pada Cabang Selatan, manakah hubungan yang benar antara X dan Y?",
    "options": [
      "X < Y",
      "X = Y",
      "2X = 3Y",
      "Hubungan antara X dan Y tidak dapat ditentukan",
      "X > Y"
    ],
    "answer": "E",
    "explanation": "Rata-rata Cabang Utara (X) = (52 + 64 + 70) / 3 = 186 / 3 = 62. Rata-rata Cabang Selatan (Y) = (50 + 55 + 60) / 3 = 165 / 3 = 55. Karena 62 > 55, maka X > Y.",
    "tip": "Setiap hari nilai Cabang Utara selalu melampaui Cabang Selatan, sehingga rata-ratanya pasti lebih besar (X > Y)."
  },
  {
    "id": "tiu-tab-147",
    "subPattern": "simpulan-dan-perbandingan-tabel",
    "difficulty": "sulit",
    "prompt": "Perhatikan tabel jumlah pelatihan pegawai pada tiga balai berikut:\n| Balai | Gelombang 1 | Gelombang 2 | Gelombang 3 |\n| Balai A | 48 | 50 | 52 |\n| Balai B | 54 | 58 | 62 |\n| Balai C | 56 | 52 | 60 |\nJika X adalah rata-rata peserta pada Balai A dan Y adalah rata-rata peserta pada Balai B, manakah hubungan yang benar antara X dan Y?",
    "options": [
      "X < Y",
      "X > Y",
      "X = Y",
      "3X = 2Y",
      "Hubungan antara X dan Y tidak dapat ditentukan"
    ],
    "answer": "A",
    "explanation": "Rata-rata Balai A (X) = (48 + 50 + 52) / 3 = 50. Rata-rata Balai B (Y) = (54 + 58 + 62) / 3 = 58. Karena 50 < 58, maka X < Y.",
    "tip": "Nilai minimum pada Balai B (54) sudah lebih tinggi daripada nilai maksimum pada Balai A (52), sehingga otomatis X < Y."
  },
  {
    "id": "tiu-tab-148",
    "subPattern": "simpulan-dan-perbandingan-tabel",
    "difficulty": "sulit",
    "prompt": "Perhatikan tabel rentang jumlah peserta per kelas (nilai tepat per kelas hanya diketahui berada dalam interval berikut):\n| Unit | Kelas Pagi | Kelas Siang |\n| Unit A | 30–40 | 30–40 |\n| Unit B | 32–38 | 32–38 |\n| Unit C | 35 | 35 |\nJika X adalah total peserta di Unit A dan Y adalah total peserta di Unit B, manakah hubungan yang benar antara X dan Y?",
    "options": [
      "X > Y",
      "Hubungan antara X dan Y tidak dapat ditentukan",
      "X < Y",
      "X = Y",
      "X = 2Y"
    ],
    "answer": "B",
    "explanation": "Total peserta Unit A (X) berada pada rentang 60 hingga 80 orang, sedangkan total peserta Unit B (Y) berada pada rentang 64 hingga 76 orang. Karena kedua interval saling bertumpuk (X bisa 60 < 64 atau 80 > 76), hubungan X dan Y tidak dapat ditentukan.",
    "tip": "Jika rentang nilai minimum-maksimum X dan Y saling beririsan, perbandingan pastinya tidak dapat ditentukan."
  },
  {
    "id": "tiu-tab-149",
    "subPattern": "simpulan-dan-perbandingan-tabel",
    "difficulty": "sulit",
    "prompt": "Perhatikan tabel jumlah arsip digitalisasi per kuartal berikut:\n| Wilayah | Kuartal I | Kuartal II | Kuartal III |\n| Wilayah I | 54 | 64 | 74 |\n| Wilayah II | 58 | 64 | 70 |\n| Wilayah III | 62 | 58 | 66 |\nJika X adalah rata-rata arsip pada Wilayah I dan Y adalah rata-rata arsip pada Wilayah II, manakah hubungan yang benar antara X dan Y?",
    "options": [
      "X > Y",
      "X < Y",
      "X = Y",
      "2X = 3Y",
      "Hubungan antara X dan Y tidak dapat ditentukan"
    ],
    "answer": "C",
    "explanation": "Jumlah arsip Wilayah I = 54 + 64 + 74 = 192 (X = 64). Jumlah arsip Wilayah II = 58 + 64 + 70 = 192 (Y = 64). Maka X = Y.",
    "tip": "Kedua baris simetris di sekitar 64 pada tiga kuartal sehingga rata-ratanya identik."
  },
  {
    "id": "tiu-tab-150",
    "subPattern": "simpulan-dan-perbandingan-tabel",
    "difficulty": "sulit",
    "prompt": "Perhatikan tabel rata-rata skor dan jumlah soal benar pada dua kelompok peserta berikut:\n| Kantor | Skor Rata-Rata TIU | Jumlah Peserta Lulus |\n| Kantor P | 120 | 32 |\n| Kantor Q | 110 | 28 |\n| Kantor R | 105 | 30 |\nJika X adalah selisih skor rata-rata Kantor P dan Q, dan Y = 8 poin, manakah hubungan yang benar antara X dan Y?",
    "options": [
      "X < Y",
      "X = Y",
      "2X = Y",
      "X > Y",
      "Hubungan antara X dan Y tidak dapat ditentukan"
    ],
    "answer": "D",
    "explanation": "Selisih skor rata-rata Kantor P dan Q adalah X = 120 - 110 = 10 poin. Karena 10 > 8, maka X > Y.",
    "tip": "Baca kolom dengan cermat: soal meminta selisih kolom Skor Rata-Rata TIU (120 - 110 = 10), bukan selisih jumlah peserta lulus."
  }
];
