import type { QuestionDraft } from "@/modules/question-bank/domain/question";

export const hitungCepatBatch5PasanganSetaraDrafts: readonly QuestionDraft[] = [
  {
    id: "tiu-hit-171",
    subPattern: "perkalian-dan-pembagian-setara",
    difficulty: "mudah",
    prompt:
      "Sebuah gudang koperasi mengemas botol air mineral ke dalam kardus dengan format (jumlah kardus × isi botol per kardus). Pasangan skema pengemasan berikut yang menghasilkan total botol yang sama adalah ...",
    options: [
      "14 × 25 sama dengan 18 × 20",
      "18 × 25 sama dengan 15 × 30",
      "16 × 25 sama dengan 12 × 35",
      "22 × 15 sama dengan 18 × 20",
      "15 × 28 sama dengan 20 × 22",
    ],
    answer: "B",
    explanation:
      "Gunakan trik rasio silang faktor tanpa mengalikan penuh: pada 18 × 25 dan 15 × 30, rasio 18 : 15 = 6 : 5 dan rasio balik 30 : 25 = 6 : 5. Karena perbandingan silangnya identik, keduanya setara (18 × 25 = 450 dan 15 × 30 = 450). Pasangan lain tidak setara: 14 × 25 = 350 ≠ 360, 16 × 25 = 400 ≠ 420, 22 × 15 = 330 ≠ 360, serta 15 × 28 = 420 ≠ 440.",
    tip: "Uji kesetaraan a × b = c × d dengan rasio silang a/c = d/b agar tidak perlu mengalikan angka besar.",
  },
  {
    id: "tiu-hit-172",
    subPattern: "perkalian-dan-pembagian-setara",
    difficulty: "mudah",
    prompt:
      "Panitia ujian menata kursi di dua aula seleksi dalam format (jumlah baris × kursi per baris). Pasangan susunan kursi berikut yang menghasilkan total kursi yang sama adalah ...",
    options: [
      "12 × 28 sama dengan 16 × 22",
      "14 × 24 sama dengan 18 × 20",
      "15 × 24 sama dengan 16 × 22",
      "14 × 36 sama dengan 21 × 24",
      "18 × 28 sama dengan 24 × 22",
    ],
    answer: "D",
    explanation:
      "Cek ekor angka terlebih dahulu: 14 × 36 berakhiran 4 dan 21 × 24 juga berakhiran 4. Lalu pastikan dengan rasio silang faktor: 14 : 21 = 2 : 3 dan 24 : 36 = 2 : 3, sehingga 14 × 36 = 21 × 24 = 504. Pasangan lain gagal karena 12 × 28 = 336 ≠ 352, 14 × 24 = 336 ≠ 360, 15 × 24 = 360 ≠ 352, dan 18 × 28 = 504 ≠ 528.",
    tip: "Eliminasi cepat pasangan yang digit satuannya berbeda, lalu konfirmasi kandidat tersisa dengan penyederhanaan rasio silang.",
  },
  {
    id: "tiu-hit-173",
    subPattern: "perkalian-dan-pembagian-setara",
    difficulty: "sedang",
    prompt:
      "Dinas Pendidikan mendistribusikan buku paket ke beberapa sekolah dalam format (jumlah boks × eksemplar per boks). Pasangan distribusi berikut yang menghasilkan jumlah buku paket yang sama adalah ...",
    options: [
      "24 × 35 sama dengan 28 × 30",
      "26 × 35 sama dengan 30 × 31",
      "24 × 38 sama dengan 32 × 28",
      "25 × 34 sama dengan 30 × 28",
      "22 × 36 sama dengan 27 × 30",
    ],
    answer: "A",
    explanation:
      "Bandingkan rasio faktor pada 24 × 35 dan 28 × 30: bagi 24 dan 28 dengan 4 diperoleh 6 : 7, lalu bagi 30 dan 35 dengan 5 juga diperoleh 6 : 7. Karena 24/28 = 30/35, keduanya pasti setara (keduanya bernilai 840). Pasangan lain tidak sama: 26 × 35 = 910 ≠ 930, 24 × 38 = 912 ≠ 896, 25 × 34 = 850 ≠ 840, dan 22 × 36 = 792 ≠ 810.",
    tip: "Pecah faktor persekutuan FPB antar ruas kiri dan kanan; jika rasio silangnya sama, hasil kalinya pasti sama.",
  },
  {
    id: "tiu-hit-174",
    subPattern: "perkalian-dan-pembagian-setara",
    difficulty: "sedang",
    prompt:
      "Kelompok tani menanam bibit padi unggul pada dua hamparan lahan dalam format (jumlah petak × rumpun bibit per petak). Pasangan penanaman berikut yang menghasilkan total bibit yang sama adalah ...",
    options: [
      "28 × 45 sama dengan 36 × 34",
      "32 × 35 sama dengan 28 × 42",
      "27 × 44 sama dengan 33 × 35",
      "35 × 36 sama dengan 42 × 32",
      "28 × 45 sama dengan 35 × 36",
    ],
    answer: "E",
    explanation:
      "Uraikan faktor pada 28 × 45 dan 35 × 36: rasio 28 : 35 = 4 : 5 (dibagi 7) dan rasio 36 : 45 = 4 : 5 (dibagi 9). Karena rasionya seimbang, 28 × 45 = 35 × 36 = 1.260. Pasangan lain gugur dari ekor angka atau faktor: 28 × 45 = 1.260 ≠ 1.224, 32 × 35 = 1.120 ≠ 1.176, 27 × 44 = 1.188 ≠ 1.155, serta 35 × 36 = 1.260 ≠ 1.344.",
    tip: "Perhatikan faktor prima khas seperti 5 dan 7; jika ruas kiri mengandung kelipatan 5, ruas kanan juga wajib mengandung kelipatan 5.",
  },
  {
    id: "tiu-hit-175",
    subPattern: "perkalian-dan-pembagian-setara",
    difficulty: "sedang",
    prompt:
      "Sebuah pabrik roti memproduksi kue kering dengan dua jenis loyang oven dalam format (jumlah loyang × potong kue per loyang). Pasangan produksi berikut yang menghasilkan total kue yang sama adalah ...",
    options: [
      "32 × 45 sama dengan 36 × 38",
      "34 × 42 sama dengan 28 × 52",
      "36 × 45 sama dengan 54 × 30",
      "38 × 45 sama dengan 57 × 32",
      "35 × 48 sama dengan 42 × 42",
    ],
    answer: "C",
    explanation:
      "Pada 36 × 45 dan 54 × 30, perhatikan perbandingan silangnya: 36 : 54 = 2 : 3 (dibagi 18) dan 30 : 45 = 2 : 3 (dibagi 15). Karena sama-sama 2 : 3, keduanya bernilai 1.620. Pasangan lain tidak setara: 32 × 45 = 1.440 ≠ 1.368, 34 × 42 = 1.428 ≠ 1.456, 38 × 45 = 1.710 ≠ 1.824, dan 35 × 48 = 1.680 ≠ 1.764.",
    tip: "Cari hubungan pengali sederhana antar angka (seperti 36 ke 54 adalah ×3/2, maka 45 ke 30 harus ÷3/2).",
  },
  {
    id: "tiu-hit-176",
    subPattern: "perkalian-dan-pembagian-setara",
    difficulty: "sedang",
    prompt:
      "Bagian arsip kementerian menata berkas kepegawaian ke dalam lemari rak dalam format (jumlah rak × map berkas per rak). Pasangan penataan rak berikut yang menghasilkan total berkas yang sama adalah ...",
    options: [
      "42 × 55 sama dengan 66 × 35",
      "44 × 55 sama dengan 60 × 40",
      "45 × 52 sama dengan 65 × 38",
      "48 × 55 sama dengan 64 × 42",
      "42 × 58 sama dengan 63 × 38",
    ],
    answer: "A",
    explanation:
      "Pecah faktor prima khas 7 dan 11 pada 42 × 55 dan 66 × 35: 42 × 55 = (6 × 7) × (5 × 11) dan 66 × 35 = (6 × 11) × (5 × 7). Semua faktornya tepat sama sehingga keduanya bernilai 2.310. Pasangan lain tidak cocok faktor primanya: 44 × 55 = 2.420 ≠ 2.400, 45 × 52 = 2.340 ≠ 2.470, 48 × 55 = 2.640 ≠ 2.688, serta 42 × 58 = 2.436 ≠ 2.394.",
    tip: "Tukar pasangan faktor prima di kepala (misal 42 × 55 = 6 × 7 × 5 × 11 = 66 × 35) untuk melihat kesetaraan dalam hitungan detik.",
  },
  {
    id: "tiu-hit-177",
    subPattern: "perkalian-dan-pembagian-setara",
    difficulty: "sedang",
    prompt:
      "Tim relawan menyalurkan paket sembako ke wilayah terdampak banjir dalam format (jumlah armada × paket per armada). Pasangan penyaluran berikut yang menghasilkan jumlah paket sembako yang sama adalah ...",
    options: [
      "36 × 65 sama dengan 52 × 46",
      "38 × 60 sama dengan 48 × 48",
      "45 × 56 sama dengan 72 × 35",
      "44 × 55 sama dengan 66 × 36",
      "48 × 54 sama dengan 72 × 35",
    ],
    answer: "C",
    explanation:
      "Uji rasio silang pada 45 × 56 dan 72 × 35: 45 : 72 = 5 : 8 (dibagi 9) dan 35 : 56 = 5 : 8 (dibagi 7). Kedua ruas tepat menghasilkan 2.520. Pasangan lain langsung gugur saat dicek ekor angka atau faktor 5/7: 36 × 65 = 2.340 ≠ 2.392, 38 × 60 = 2.280 ≠ 2.304, 44 × 55 = 2.420 ≠ 2.376, dan 48 × 54 = 2.592 ≠ 2.520.",
    tip: "Fokuskan pengecekan pada faktor 7, 9, atau 11; jika satu sisi kelipatan 7 dan sisi lain bukan, langsung coret.",
  },
  {
    id: "tiu-hit-178",
    subPattern: "perkalian-dan-pembagian-setara",
    difficulty: "sulit",
    prompt:
      "Percetakan negara mencetak modul pelatihan ASN dalam dua ukuran bundel dengan format (jumlah bundel × halaman per bundel). Pasangan cetak berikut yang menghasilkan total halaman yang sama adalah ...",
    options: [
      "64 × 75 sama dengan 96 × 52",
      "68 × 75 sama dengan 85 × 62",
      "63 × 84 sama dengan 72 × 74",
      "66 × 85 sama dengan 99 × 58",
      "72 × 85 sama dengan 102 × 60",
    ],
    answer: "E",
    explanation:
      "Banyak kandidat sama-sama berakhiran 0 sehingga perlu uji faktor prima 17: pada 72 × 85 dan 102 × 60, pecah 85 = 5 × 17 dan 102 = 6 × 17. Coret 17 di kedua ruas, tersisa 72 × 5 = 360 dan 6 × 60 = 360, sehingga keduanya pasti setara (6.120). Pasangan lain meleset: 64 × 75 = 4.800 ≠ 4.992, 68 × 75 = 5.100 ≠ 5.270, 63 × 84 = 5.292 ≠ 5.328, dan 66 × 85 = 5.610 ≠ 5.742.",
    tip: "Saat ekor angka sama-sama nol, coret faktor prima terbesar (seperti 17 pada 85 dan 102) lalu bandingkan sisa perkaliannya.",
  },
  {
    id: "tiu-hit-179",
    subPattern: "perkalian-dan-pembagian-setara",
    difficulty: "sulit",
    prompt:
      "Distributor bahan bangunan memuat ubin keramik ke atas palet pengiriman dalam format (jumlah palet × dus keramik per palet). Pasangan muatan berikut yang menghasilkan jumlah dus keramik yang sama adalah ...",
    options: [
      "84 × 95 sama dengan 114 × 72",
      "84 × 115 sama dengan 138 × 70",
      "88 × 105 sama dengan 132 × 72",
      "85 × 112 sama dengan 140 × 69",
      "92 × 105 sama dengan 126 × 75",
    ],
    answer: "B",
    explanation:
      "Kenali faktor prima 23 pada 84 × 115 dan 138 × 70: 115 = 5 × 23 dan 138 = 6 × 23. Setelah mencoret 23 dan membagi 84 serta 70 dengan 14 (menjadi 6 dan 5), kedua ruas menyisakan 6 × 5 = 6 × 5, sehingga keduanya tepat bernilai 9.660. Pasangan lain tidak setara: 84 × 95 = 7.980 ≠ 8.208, 88 × 105 = 9.240 ≠ 9.504, 85 × 112 = 9.520 ≠ 9.660, serta 92 × 105 = 9.660 ≠ 9.450.",
    tip: "Hafalkan kelipatan prima belasan–dua puluhan (17, 19, 23) agar pencoretan silang langsung memangkas angka ratusan.",
  },
  {
    id: "tiu-hit-180",
    subPattern: "perkalian-dan-pembagian-setara",
    difficulty: "sulit",
    prompt:
      "Bengkel manufaktur merakit komponen elektronik pada dua lini produksi dalam format (jumlah lot × unit komponen per lot). Pasangan target produksi berikut yang menghasilkan total unit komponen yang sama adalah ...",
    options: [
      "96 × 125 sama dengan 150 × 82",
      "98 × 115 sama dengan 140 × 81",
      "104 × 125 sama dengan 130 × 98",
      "108 × 125 sama dengan 180 × 75",
      "112 × 125 sama dengan 175 × 78",
    ],
    answer: "D",
    explanation:
      "Gunakan penyederhanaan rasio silang pada 108 × 125 dan 180 × 75: bagi 125 dan 75 dengan 25 menghasilkan 5 dan 3, lalu bagi 108 dan 180 dengan 36 menghasilkan 3 dan 5. Tersisa 3 × 5 = 5 × 3 (keduanya bernilai 13.500). Pasangan lain gagal saat disederhanakan: 96 × 125 = 12.000 ≠ 12.300, 98 × 115 = 11.270 ≠ 11.340, 104 × 125 = 13.000 ≠ 12.740, dan 112 × 125 = 14.000 ≠ 13.650.",
    tip: "Coret faktor 25 pada bilangan seperti 75, 125, dan 175 terlebih dahulu agar angka ratusan langsung mengecil menjadi satu digit.",
  },
  {
    id: "tiu-hit-181",
    subPattern: "perkalian-dan-pembagian-setara",
    difficulty: "mudah",
    prompt:
      "Pedagang pasar membandingkan harga beras per kilogram dari dua pemasok grosir dalam format (total harga ÷ berat dalam kg). Pasangan transaksi berikut yang menghasilkan harga per kilogram yang sama adalah ...",
    options: [
      "Rp180.000 ÷ 12 sama dengan Rp225.000 ÷ 16",
      "Rp210.000 ÷ 15 sama dengan Rp270.000 ÷ 18",
      "Rp240.000 ÷ 16 sama dengan Rp360.000 ÷ 24",
      "Rp250.000 ÷ 20 sama dengan Rp325.000 ÷ 25",
      "Rp280.000 ÷ 20 sama dengan Rp360.000 ÷ 24",
    ],
    answer: "C",
    explanation:
      "Pada pembagian setara a ÷ b = c ÷ d, perbandingan pembilang harus sama dengan perbandingan penyebut. Untuk Rp240.000 ÷ 16 dan Rp360.000 ÷ 24, rasio 240 : 360 = 2 : 3 dan rasio 16 : 24 = 2 : 3, sehingga keduanya bernilai Rp15.000/kg. Pasangan lain berbeda: Rp180.000 ÷ 12 = Rp15.000 ≠ Rp14.062,5, Rp210.000 ÷ 15 = Rp14.000 ≠ Rp15.000, Rp250.000 ÷ 20 = Rp12.500 ≠ Rp13.000, dan Rp280.000 ÷ 20 = Rp14.000 ≠ Rp15.000.",
    tip: "Untuk menguji a ÷ b = c ÷ d, cukup cek apakah a ke c dan b ke d dikalikan faktor skala yang sama.",
  },
  {
    id: "tiu-hit-182",
    subPattern: "perkalian-dan-pembagian-setara",
    difficulty: "mudah",
    prompt:
      "Dua mobil dinas menempuh perjalanan antarkota dalam format (jarak tempuh dalam km ÷ waktu tempuh dalam jam). Pasangan perjalanan berikut yang menghasilkan kecepatan rata-rata per jam yang sama adalah ...",
    options: [
      "270 ÷ 6 sama dengan 405 ÷ 9",
      "260 ÷ 4 sama dengan 380 ÷ 6",
      "280 ÷ 5 sama dengan 432 ÷ 8",
      "315 ÷ 7 sama dengan 440 ÷ 10",
      "330 ÷ 6 sama dengan 490 ÷ 9",
    ],
    answer: "A",
    explanation:
      "Amati skala pengali pada 270 ÷ 6 dan 405 ÷ 9: penyebut 6 ke 9 naik sebesar 1,5 kali (rasio 2 : 3), dan pembilang 270 × 1,5 = 405 juga naik tepat 1,5 kali, sehingga keduanya sama-sama 45 km/jam. Pasangan lain tidak setara: 260 ÷ 4 = 65 ≠ 63,33, 280 ÷ 5 = 56 ≠ 54, 315 ÷ 7 = 45 ≠ 44, dan 330 ÷ 6 = 55 ≠ 54,44.",
    tip: "Uji kelipatan pembagi terlebih dahulu (misal 6 ke 9 = ×3/2), lalu cek apakah pembilangnya mengikuti skala yang persis sama.",
  },
  {
    id: "tiu-hit-183",
    subPattern: "perkalian-dan-pembagian-setara",
    difficulty: "sedang",
    prompt:
      "Tim verifikasi kependudukan menilai beban kerja harian di dua kecamatan dalam format (jumlah berkas terverifikasi ÷ jumlah petugas). Pasangan laporan berikut yang menghasilkan rasio berkas per petugas yang sama adalah ...",
    options: [
      "336 ÷ 14 sama dengan 468 ÷ 18",
      "342 ÷ 18 sama dengan 480 ÷ 24",
      "375 ÷ 15 sama dengan 552 ÷ 23",
      "392 ÷ 16 sama dengan 560 ÷ 24",
      "384 ÷ 16 sama dengan 576 ÷ 24",
    ],
    answer: "E",
    explanation:
      "Bandingkan rasio pembagi pada 384 ÷ 16 dan 576 ÷ 24: 16 : 24 = 2 : 3. Cek apakah 384 × 3/2 = 192 × 3 = 576 — tepat cocok! Keduanya menghasilkan 24 berkas/petugas. Pasangan lain meleset: 336 ÷ 14 = 24 ≠ 26, 342 ÷ 18 = 19 ≠ 20, 375 ÷ 15 = 25 ≠ 24, serta 392 ÷ 16 = 24,5 ≠ 23,33.",
    tip: "Pada pembagian setara, bila penyebut bertambah 50% (16 ke 24), pembilang juga wajib bertambah tepat 50% (384 + 192 = 576).",
  },
  {
    id: "tiu-hit-184",
    subPattern: "perkalian-dan-pembagian-setara",
    difficulty: "sedang",
    prompt:
      "Perusahaan logistik membandingkan efisiensi bahan bakar dua armada truk dalam format (jarak tempuh dalam km ÷ liter BBM). Pasangan catatan armada berikut yang menghasilkan efisiensi per liter yang sama adalah ...",
    options: [
      "420 ÷ 28 sama dengan 540 ÷ 35",
      "468 ÷ 36 sama dengan 624 ÷ 48",
      "450 ÷ 30 sama dengan 612 ÷ 42",
      "480 ÷ 32 sama dengan 660 ÷ 45",
      "495 ÷ 33 sama dengan 640 ÷ 40",
    ],
    answer: "B",
    explanation:
      "Pada 468 ÷ 36 dan 624 ÷ 48, rasio penyebut 36 : 48 = 3 : 4 (naik 1/3 dari 36). Cek pembilang: 1/3 dari 468 adalah 156, dan 468 + 156 = 624, tepat cocok! Keduanya bernilai 13 km/liter. Pasangan lain tidak setara: 420 ÷ 28 = 15 ≠ 15,43, 450 ÷ 30 = 15 ≠ 14,57, 480 ÷ 32 = 15 ≠ 14,67, dan 495 ÷ 33 = 15 ≠ 16.",
    tip: "Gunakan trik kenaikan proporsional: jika 36 ke 48 naik sepertiga, pastikan pembilang juga naik tepat sepertiga.",
  },
  {
    id: "tiu-hit-185",
    subPattern: "perkalian-dan-pembagian-setara",
    difficulty: "sedang",
    prompt:
      "Penyelenggara diklat menghitung biaya konsumsi per peserta pada dua gelombang pelatihan dalam format (total anggaran ÷ jumlah peserta). Pasangan anggaran berikut yang menghasilkan biaya per peserta yang sama adalah ...",
    options: [
      "Rp420.000 ÷ 15 sama dengan Rp600.000 ÷ 22",
      "Rp468.000 ÷ 18 sama dengan Rp625.000 ÷ 25",
      "Rp520.000 ÷ 20 sama dengan Rp750.000 ÷ 30",
      "Rp540.000 ÷ 24 sama dengan Rp720.000 ÷ 32",
      "Rp560.000 ÷ 25 sama dengan Rp740.000 ÷ 32",
    ],
    answer: "D",
    explanation:
      "Coret tiga angka nol terlebih dahulu agar lebih ringkas. Pada Rp540.000 ÷ 24 dan Rp720.000 ÷ 32, rasio penyebut 24 : 32 = 3 : 4 dan rasio pembilang 540 : 720 = 3 : 4 (keduanya dibagi 180). Maka keduanya pasti menghasilkan Rp22.500/peserta. Pasangan lain tidak sama: 420 ÷ 15 = 28 ≠ 27,27, 468 ÷ 18 = 26 ≠ 25, 520 ÷ 20 = 26 ≠ 25, dan 560 ÷ 25 = 22,4 ≠ 23,125.",
    tip: "Abaikan satuan ribuan (000) yang sama pada kedua ruas, lalu bandingkan rasio pembilang dengan rasio penyebut.",
  },
  {
    id: "tiu-hit-186",
    subPattern: "perkalian-dan-pembagian-setara",
    difficulty: "sedang",
    prompt:
      "Dinas Perhubungan memeriksa rata-rata muatan barang pada dua kelompok angkutan dalam format (total muatan dalam kuintal ÷ jumlah truk). Pasangan kelompok berikut yang menghasilkan rata-rata muatan per truk yang sama adalah ...",
    options: [
      "525 ÷ 21 sama dengan 700 ÷ 27",
      "546 ÷ 26 sama dengan 720 ÷ 36",
      "570 ÷ 30 sama dengan 760 ÷ 38",
      "588 ÷ 28 sama dengan 780 ÷ 39",
      "612 ÷ 36 sama dengan 765 ÷ 45",
    ],
    answer: "E",
    explanation:
      "Cek rasio skala pada 612 ÷ 36 dan 765 ÷ 45: penyebut 36 : 45 = 4 : 5 (bertambah 1/4 dari 36). Pada pembilang, 1/4 dari 612 adalah 153, dan 612 + 153 = 765 — tepat cocok! Keduanya bernilai 17 kuintal/truk. Pasangan lain gagal: 525 ÷ 21 = 25 ≠ 25,93, 546 ÷ 26 = 21 ≠ 20, 570 ÷ 30 = 19 ≠ 20, dan 588 ÷ 28 = 21 ≠ 20.",
    tip: "Jika penyebut memiliki rasio 4 : 5, cukup tambahkan seperempat pembilang kiri untuk mengecek apakah persis sama dengan pembilang kanan.",
  },
  {
    id: "tiu-hit-187",
    subPattern: "perkalian-dan-pembagian-setara",
    difficulty: "sedang",
    prompt:
      "Pengelola gedung pertemuan mengevaluasi kapasitas ruang rapat pada dua lantai dalam format (total kursi ÷ jumlah ruang rapat). Pasangan lantai berikut yang menghasilkan daya tampung per ruangan yang sama adalah ...",
    options: [
      "630 ÷ 18 sama dengan 840 ÷ 25",
      "648 ÷ 24 sama dengan 945 ÷ 35",
      "660 ÷ 22 sama dengan 930 ÷ 30",
      "672 ÷ 24 sama dengan 952 ÷ 32",
      "690 ÷ 23 sama dengan 960 ÷ 30",
    ],
    answer: "B",
    explanation:
      "Saat penyebut tidak memiliki FPB bersama seperti 24 dan 35, sederhanakan masing-masing ruas secara bertahap: 648 ÷ 24 = (648 ÷ 8) ÷ 3 = 81 ÷ 3 = 27, dan 945 ÷ 35 = (945 ÷ 5) ÷ 7 = 189 ÷ 7 = 27. Keduanya menghasilkan 27 kursi/ruang. Pasangan lain tidak setara: 630 ÷ 18 = 35 ≠ 33,6, 660 ÷ 22 = 30 ≠ 31, 672 ÷ 24 = 28 ≠ 29,75, serta 690 ÷ 23 = 30 ≠ 32.",
    tip: "Pecah pembagi menjadi dua faktor kecil (misal ÷24 menjadi ÷8 lalu ÷3; ÷35 menjadi ÷5 lalu ÷7) untuk menghitung hasil bagi dalam 5 detik.",
  },
  {
    id: "tiu-hit-188",
    subPattern: "perkalian-dan-pembagian-setara",
    difficulty: "sulit",
    prompt:
      "Bagian keuangan membandingkan tarif honorarium lembur per jam pada dua proyek berbeda dalam format (total honor lembur ÷ total jam lembur). Pasangan proyek berikut yang menghasilkan tarif lembur per jam yang sama adalah ...",
    options: [
      "Rp756.000 ÷ 28 sama dengan Rp1.040.000 ÷ 40",
      "Rp792.000 ÷ 32 sama dengan Rp1.080.000 ÷ 45",
      "Rp816.000 ÷ 34 sama dengan Rp1.150.000 ÷ 46",
      "Rp864.000 ÷ 36 sama dengan Rp1.296.000 ÷ 54",
      "Rp880.000 ÷ 35 sama dengan Rp1.260.000 ÷ 50",
    ],
    answer: "D",
    explanation:
      "Buang tiga nol di akhir dan cek rasio penyebut pada Rp864.000 ÷ 36 dan Rp1.296.000 ÷ 54: rasio 36 : 54 = 2 : 3 (naik setengahnya). Setengah dari 864 adalah 432, dan 864 + 432 = 1.296 — persis cocok! Keduanya menghasilkan Rp24.000/jam. Pasangan lain berbeda: 756 ÷ 28 = 27 ≠ 26, 792 ÷ 32 = 24,75 ≠ 24, 816 ÷ 34 = 24 ≠ 25, serta 880 ÷ 35 ≈ 25,14 ≠ 25,2.",
    tip: "Waspadai pengecoh yang hanya berbeda 1 poin (seperti 24 vs 25); selalu verifikasi selisih proporsional pembilangnya secara eksak.",
  },
  {
    id: "tiu-hit-189",
    subPattern: "perkalian-dan-pembagian-setara",
    difficulty: "sulit",
    prompt:
      "Pabrik tekstil mengukur laju produksi kain per hari pada dua unit mesin tenun dalam format (total meter kain ÷ jumlah hari operasi). Pasangan mesin berikut yang menghasilkan produktivitas per hari yang sama adalah ...",
    options: [
      "1.428 ÷ 42 sama dengan 1.904 ÷ 56",
      "1.440 ÷ 45 sama dengan 1.920 ÷ 58",
      "1.456 ÷ 42 sama dengan 1.932 ÷ 56",
      "1.485 ÷ 45 sama dengan 1.984 ÷ 62",
      "1.512 ÷ 48 sama dengan 2.016 ÷ 63",
    ],
    answer: "A",
    explanation:
      "Cek rasio penyebut pada 1.428 ÷ 42 dan 1.904 ÷ 56: keduanya kelipatan 14 sehingga 42 : 56 = 3 : 4 (naik sepertiganya). Hitung 1/3 dari 1.428 = 476, lalu 1.428 + 476 = 1.904 — persis cocok! Keduanya bernilai 34 meter/hari. Pasangan lain tidak setara: 1.440 ÷ 45 = 32 ≠ 33,10, 1.456 ÷ 42 ≈ 34,67 ≠ 34,5, 1.485 ÷ 45 = 33 ≠ 32, serta 1.512 ÷ 48 = 31,5 ≠ 32.",
    tip: "Saat pembilang ribuan, hindari pembagian porogapit; cari FPB kedua penyebut lalu uji kenaikan pecahan sederhananya pada pembilang.",
  },
  {
    id: "tiu-hit-190",
    subPattern: "perkalian-dan-pembagian-setara",
    difficulty: "sulit",
    prompt:
      "Pengelola pusat data mengevaluasi konsumsi listrik rata-rata per rak server di dua gedung dalam format (total konsumsi dalam kWh ÷ jumlah rak server). Pasangan gedung berikut yang menghasilkan rasio konsumsi per rak yang sama adalah ...",
    options: [
      "1.404 ÷ 54 sama dengan 1.890 ÷ 70",
      "1.456 ÷ 52 sama dengan 1.950 ÷ 65",
      "1.508 ÷ 52 sama dengan 1.972 ÷ 68",
      "1.530 ÷ 51 sama dengan 2.030 ÷ 70",
      "1.568 ÷ 56 sama dengan 2.025 ÷ 75",
    ],
    answer: "C",
    explanation:
      "Gunakan penyederhanaan FPB pada 1.508 ÷ 52 dan 1.972 ÷ 68: bagi pembilang dan penyebut kiri dengan 4 menjadi 377 ÷ 13 = 29, dan bagi ruas kanan dengan 4 menjadi 493 ÷ 17 = 29. Keduanya sama-sama bernilai 29 kWh/rak. Pasangan lain meleset: 1.404 ÷ 54 = 26 ≠ 27, 1.456 ÷ 52 = 28 ≠ 30, 1.530 ÷ 51 = 30 ≠ 29, serta 1.568 ÷ 56 = 28 ≠ 27.",
    tip: "Jika kedua penyebut sama-sama habis dibagi 4, bagi dulu kedua ruas dengan 4 agar pembagiannya turun ke angka prima kecil.",
  },
  {
    id: "tiu-hit-191",
    subPattern: "perkalian-dan-pembagian-setara",
    difficulty: "mudah",
    prompt:
      "Panitia seleksi membandingkan rasio peserta yang lolos ambang batas pada dua sesi ujian dalam bentuk pecahan (peserta lolos/total peserta). Pasangan rasio kelulusan berikut yang bernilai sama adalah ...",
    options: [
      "12/20 sama dengan 18/28",
      "14/24 sama dengan 21/32",
      "15/25 sama dengan 24/36",
      "18/30 sama dengan 27/45",
      "16/28 sama dengan 24/40",
    ],
    answer: "D",
    explanation:
      "Sederhanakan kedua pecahan dengan FPB masing-masing: 18/30 dibagi 6 menjadi 3/5, dan 27/45 dibagi 9 juga menjadi 3/5. Karena bentuk paling sederhananya identik, 18/30 sama dengan 27/45. Pasangan lain berbeda: 12/20 = 3/5 ≠ 9/14, 14/24 = 7/12 ≠ 21/32, 15/25 = 3/5 ≠ 2/3, dan 16/28 = 4/7 ≠ 3/5.",
    tip: "Kecilkan setiap pecahan ke bentuk paling sederhana memakai FPB pembilang dan penyebut sebelum membandingkannya.",
  },
  {
    id: "tiu-hit-192",
    subPattern: "perkalian-dan-pembagian-setara",
    difficulty: "sedang",
    prompt:
      "Bendahara daerah mengevaluasi porsi serapan anggaran infrastruktur terhadap pagu dana di dua dinas dalam bentuk pecahan (realisasi/pagu). Pasangan porsi anggaran berikut yang bernilai setara adalah ...",
    options: [
      "24/42 sama dengan 32/54",
      "26/39 sama dengan 38/54",
      "28/49 sama dengan 36/64",
      "30/48 sama dengan 45/75",
      "28/42 sama dengan 38/57",
    ],
    answer: "E",
    explanation:
      "Sederhanakan 28/42 dengan FPB 14 menjadi 2/3. Cek 38/57: keduanya kelipatan prima 19 (38 = 2 × 19 dan 57 = 3 × 19), sehingga 38/57 juga bernilai 2/3. Pasangan lain tidak setara: 24/42 = 4/7 ≠ 16/27, 26/39 = 2/3 ≠ 19/27, 28/49 = 4/7 ≠ 9/16, serta 30/48 = 5/8 ≠ 3/5.",
    tip: "Kenali kelipatan 19 (19, 38, 57, 76) agar pecahan seperti 38/57 langsung terbaca sebagai 2/3 tanpa kali silang panjang.",
  },
  {
    id: "tiu-hit-193",
    subPattern: "perkalian-dan-pembagian-setara",
    difficulty: "sedang",
    prompt:
      "Laboratorium pangan membandingkan kadar sirup murni pada dua takaran minuman dalam bentuk pecahan (volume sirup/total larutan). Pasangan komposisi berikut yang menghasilkan kadar yang sama adalah ...",
    options: [
      "32/56 sama dengan 44/72",
      "35/56 sama dengan 45/72",
      "36/54 sama dengan 48/75",
      "38/57 sama dengan 48/76",
      "39/65 sama dengan 51/80",
    ],
    answer: "B",
    explanation:
      "Bagi pembilang dan penyebut 35/56 dengan FPB 7 diperoleh 5/8. Lalu bagi pembilang dan penyebut 45/72 dengan FPB 9 juga diperoleh 5/8. Maka 35/56 setara dengan 45/72. Pasangan lain tidak cocok: 32/56 = 4/7 ≠ 11/18, 36/54 = 2/3 ≠ 16/25, 38/57 = 2/3 ≠ 12/19, dan 39/65 = 3/5 ≠ 51/80.",
    tip: "Jika penyebutnya kelipatan 8 seperti 56 dan 72, langsung bagi dengan 7 dan 9 untuk melihat apakah pembilangnya sama-sama menyisakan angka yang sama.",
  },
  {
    id: "tiu-hit-194",
    subPattern: "perkalian-dan-pembagian-setara",
    difficulty: "sedang",
    prompt:
      "Kepala sekolah membandingkan proporsi siswa penerima beasiswa prestasi pada dua angkatan dalam bentuk pecahan (penerima/total siswa). Pasangan proporsi berikut yang bernilai setara adalah ...",
    options: [
      "42/72 sama dengan 56/92",
      "44/77 sama dengan 52/96",
      "42/78 sama dengan 63/117",
      "45/81 sama dengan 60/104",
      "48/84 sama dengan 64/108",
    ],
    answer: "C",
    explanation:
      "Pada 42/78 dan 63/117, gunakan skala pembilang 42 : 63 = 2 : 3 (naik setengahnya). Cek penyebut: setengah dari 78 adalah 39, dan 78 + 39 = 117 — tepat cocok! Keduanya menyederhana menjadi 7/13. Pasangan lain tidak setara: 42/72 = 7/12 ≠ 14/23, 44/77 = 4/7 ≠ 13/24, 45/81 = 5/9 ≠ 15/26, serta 48/84 = 4/7 ≠ 16/27.",
    tip: "Saat menyederhanakan penyebut tiga digit terasa lambat, bandingkan dulu rasio antar pembilang (42 ke 63 = ×3/2) lalu uji apakah penyebut mengikuti skala yang sama.",
  },
  {
    id: "tiu-hit-195",
    subPattern: "perkalian-dan-pembagian-setara",
    difficulty: "sulit",
    prompt:
      "Tim pengawas proyek membandingkan rasio kemajuan fisik jalan tol di dua ruas pengerjaan dalam bentuk pecahan (panjang selesai/total target). Pasangan rasio berikut yang bernilai sama adalah ...",
    options: [
      "68/119 sama dengan 92/161",
      "66/114 sama dengan 88/156",
      "65/117 sama dengan 85/155",
      "72/126 sama dengan 96/164",
      "74/128 sama dengan 94/162",
    ],
    answer: "A",
    explanation:
      "Uraikan faktor prima pada 68/119 dan 92/161: 68 = 4 × 17 dan 119 = 7 × 17, sehingga 68/119 = 4/7. Sementara 92 = 4 × 23 dan 161 = 7 × 23, sehingga 92/161 juga tepat 4/7. Pasangan lain tidak setara: 66/114 = 11/19 ≠ 22/39, 65/117 = 5/9 ≠ 17/31, 72/126 = 4/7 ≠ 24/41, dan 74/128 = 37/64 ≠ 47/81.",
    tip: "Untuk pecahan bernilai sedikit di atas setengah, cek pembagi 4 pada pembilang lalu uji apakah 7 kali hasil baginya tepat menghasilkan penyebut.",
  },
  {
    id: "tiu-hit-196",
    subPattern: "perkalian-dan-pembagian-setara",
    difficulty: "mudah",
    prompt:
      "Dua toko ritel memberikan potongan harga dengan persentase dan harga awal berbeda (dalam ribuan rupiah). Pasangan diskon berikut yang menghasilkan nominal potongan yang sama adalah ...",
    options: [
      "20% dari 350 sama dengan 30% dari 240",
      "20% dari 450 sama dengan 30% dari 300",
      "25% dari 320 sama dengan 40% dari 220",
      "15% dari 400 sama dengan 25% dari 260",
      "30% dari 280 sama dengan 40% dari 200",
    ],
    answer: "B",
    explanation:
      "Karena simbol persen (%) muncul di kedua ruas, cukup bandingkan hasil kali angkanya seperti perkalian setara: pada 20% dari 450 dan 30% dari 300, rasio 20 : 30 = 2 : 3 dan rasio balik 300 : 450 = 2 : 3, sehingga keduanya menghasilkan 90. Pasangan lain tidak sama: 20% × 350 = 70 ≠ 72, 25% × 320 = 80 ≠ 88, 15% × 400 = 60 ≠ 65, dan 30% × 280 = 84 ≠ 80.",
    tip: "Ingat kesetaraan p% dari X = q% dari Y setara dengan p × X = q × Y; abaikan % dan langsung uji rasio silangnya.",
  },
  {
    id: "tiu-hit-197",
    subPattern: "perkalian-dan-pembagian-setara",
    difficulty: "sedang",
    prompt:
      "Tim pemasaran menghitung nilai komisi penjualan dari dua jenis produk digital (persentase komisi dari nilai omzet dalam ribuan rupiah). Pasangan komisi berikut yang menghasilkan nominal yang sama adalah ...",
    options: [
      "18% dari 450 sama dengan 25% dari 320",
      "16% dari 550 sama dengan 22% dari 420",
      "24% dari 350 sama dengan 30% dari 290",
      "18% dari 550 sama dengan 33% dari 300",
      "22% dari 450 sama dengan 36% dari 270",
    ],
    answer: "D",
    explanation:
      "Abaikan tanda % lalu cek rasio silang pada 18% dari 550 dan 33% dari 300: 18 : 33 = 6 : 11 (dibagi 3) dan 300 : 550 = 6 : 11 (dibagi 50). Karena rasio silangnya sama, keduanya menghasilkan 99. Pasangan lain meleset: 18% × 450 = 81 ≠ 80, 16% × 550 = 88 ≠ 92,4, 24% × 350 = 84 ≠ 87, serta 22% × 450 = 99 ≠ 97,2.",
    tip: "Coret faktor prima 11 pada angka seperti 33 dan 550 terlebih dahulu agar perbandingan silangnya langsung terlihat.",
  },
  {
    id: "tiu-hit-198",
    subPattern: "perkalian-dan-pembagian-setara",
    difficulty: "sedang",
    prompt:
      "Dua kantor cabang menyisihkan sebagian dana operasional untuk cadangan darurat (persentase cadangan dari anggaran dalam jutaan rupiah). Pasangan alokasi berikut yang menghasilkan dana cadangan yang sama adalah ...",
    options: [
      "28% dari 450 sama dengan 36% dari 350",
      "24% dari 525 sama dengan 35% dari 370",
      "26% dari 500 sama dengan 32% dari 400",
      "32% dari 425 sama dengan 40% dari 350",
      "25% dari 540 sama dengan 36% dari 380",
    ],
    answer: "A",
    explanation:
      "Uji rasio silang pada 28% dari 450 dan 36% dari 350: bagi 28 dan 36 dengan 4 diperoleh 7 : 9, lalu bagi 350 dan 450 dengan 50 juga diperoleh 7 : 9. Karena rasio silangnya identik, keduanya menghasilkan 126. Pasangan lain tidak setara: 24% × 525 = 126 ≠ 129,5, 26% × 500 = 130 ≠ 128, 32% × 425 = 136 ≠ 140, serta 25% × 540 = 135 ≠ 136,8.",
    tip: "Gunakan sifat komutatif p% dari X = X% dari p atau langsung uji perbandingan silang p/q = Y/X.",
  },
  {
    id: "tiu-hit-199",
    subPattern: "perkalian-dan-pembagian-setara",
    difficulty: "sulit",
    prompt:
      "Sebuah koperasi simpan pinjam menghitung imbal hasil tahunan dari dua portofolio simpanan anggota (persentase imbal hasil dari pokok simpanan dalam jutaan rupiah). Pasangan portofolio berikut yang menghasilkan nominal imbal hasil yang sama adalah ...",
    options: [
      "12,5% dari 640 sama dengan 18% dari 450",
      "16% dari 675 sama dengan 24% dari 460",
      "22,5% dari 480 sama dengan 32% dari 340",
      "27% dari 440 sama dengan 36% dari 325",
      "37,5% dari 384 sama dengan 45% dari 320",
    ],
    answer: "E",
    explanation:
      "Konversi persentase istimewa 37,5% menjadi 3/8: maka 3/8 × 384 = 3 × 48 = 144. Di sisi kanan, 45% dari 320 = 9/20 × 320 = 9 × 16 = 144 (atau cek rasio silang 37,5 : 45 = 5 : 6 dan 320 : 384 = 5 : 6). Keduanya tepat sama! Pasangan lain meleset tipis: 12,5% × 640 = 80 ≠ 81, 16% × 675 = 108 ≠ 110,4, 22,5% × 480 = 108 ≠ 108,8, dan 27% × 440 = 118,8 ≠ 117.",
    tip: "Ubah angka sakti seperti 12,5% (1/8) dan 37,5% (3/8) ke pecahan biasa agar perhitungan selesai tanpa desimal.",
  },
  {
    id: "tiu-hit-200",
    subPattern: "perkalian-dan-pembagian-setara",
    difficulty: "sulit",
    prompt:
      "Dinas Ketenagakerjaan membandingkan realisasi pelatihan kerja pada dua program berbeda (persentase capaian dari kuota target peserta). Pasangan capaian berikut yang menghasilkan jumlah peserta terlaksana yang sama adalah ...",
    options: [
      "36% dari 750 sama dengan 45% dari 620",
      "38% dari 700 sama dengan 52% dari 525",
      "42% dari 650 sama dengan 78% dari 350",
      "44% dari 625 sama dengan 55% dari 480",
      "45% dari 640 sama dengan 72% dari 375",
    ],
    answer: "C",
    explanation:
      "Uji rasio silang pada 42% dari 650 dan 78% dari 350: bagi 42 dan 78 dengan FPB 6 menghasilkan 7 : 13, lalu bagi 350 dan 650 dengan FPB 50 juga menghasilkan 7 : 13. Karena rasio silangnya identik, keduanya tepat menghasilkan 273 peserta. Pasangan lain tidak setara: 36% × 750 = 270 ≠ 279, 38% × 700 = 266 ≠ 273, 44% × 625 = 275 ≠ 264, serta 45% × 640 = 288 ≠ 270.",
    tip: "Cek faktor prima 13 dan 7 pada angka besar (650 = 50 × 13; 78 = 6 × 13; 350 = 50 × 7; 42 = 6 × 7) untuk menemukan pasangan setara secara instan.",
  },
];
