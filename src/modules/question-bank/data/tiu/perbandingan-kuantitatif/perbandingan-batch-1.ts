import type { QuestionDraft } from "@/modules/question-bank/domain/question";

export const perbandinganBatch1Drafts: readonly QuestionDraft[] = [
  {
    "id": "tiu-pk-001",
    "subPattern": "perbandingan-senilai",
    "difficulty": "mudah",
    "prompt": "Sebuah kendaraan dinas memerlukan 6 liter bahan bakar untuk menempuh jarak 72 km. Berapa liter bahan bakar yang diperlukan untuk menempuh jarak 180 km dengan kondisi jalan yang sama?",
    "options": [
      "15 liter",
      "12 liter",
      "14 liter",
      "16 liter",
      "18 liter"
    ],
    "answer": "A",
    "explanation": "Konsumsi per liter = 72 / 6 = 12 km/liter. Untuk 180 km diperlukan 180 / 12 = 15 liter.",
    "tip": "Pada perbandingan senilai, bagi jarak dengan volume awal untuk memperoleh rasio km per liter terlebih dahulu."
  },
  {
    "id": "tiu-pk-002",
    "subPattern": "perbandingan-senilai",
    "difficulty": "mudah",
    "prompt": "Sebuah mesin fotokopi di kantor kementerian mampu mencetak 240 lembar dokumen dalam waktu 8 menit. Berapa lembar dokumen yang dapat dicetak mesin tersebut dalam waktu 15 menit?",
    "options": [
      "360 lembar",
      "450 lembar",
      "400 lembar",
      "420 lembar",
      "480 lembar"
    ],
    "answer": "B",
    "explanation": "Kecepatan cetak = 240 / 8 = 30 lembar/menit. Dalam 15 menit tercetak 30 × 15 = 450 lembar.",
    "tip": "Hitung kapasitas cetak per 1 menit terlebih dahulu, lalu kalikan dengan waktu target."
  },
  {
    "id": "tiu-pk-003",
    "subPattern": "perbandingan-senilai",
    "difficulty": "mudah",
    "prompt": "Sebuah usaha katering membutuhkan 9 kg tepung terigu untuk membuat 135 porsi kue kotak. Jika katering tersebut mendapat pesanan 225 porsi kue kotak, berapa kg tepung terigu yang dibutuhkan?",
    "options": [
      "12 kg",
      "14 kg",
      "15 kg",
      "16 kg",
      "18 kg"
    ],
    "answer": "C",
    "explanation": "Satu kg tepung menghasilkan 135 / 9 = 15 porsi. Untuk 225 porsi dibutuhkan 225 / 15 = 15 kg tepung.",
    "tip": "Sederhanakan rasio porsi per 1 kg bahan baku sebelum membagi jumlah pesanan baru."
  },
  {
    "id": "tiu-pk-004",
    "subPattern": "perbandingan-senilai",
    "difficulty": "mudah",
    "prompt": "Biaya sewa ruang pelatihan untuk 4 hari kerja adalah Rp6.400.000. Berapa biaya sewa untuk 7 hari kerja dengan tarif harian yang sama?",
    "options": [
      "Rp9.600.000",
      "Rp10.400.000",
      "Rp11.800.000",
      "Rp11.200.000",
      "Rp12.000.000"
    ],
    "answer": "D",
    "explanation": "Tarif per hari = Rp6.400.000 / 4 = Rp1.600.000. Untuk 7 hari = 7 × Rp1.600.000 = Rp11.200.000.",
    "tip": "Tentukan tarif satuan per hari terlebih dahulu agar perkalian ke jumlah hari target lebih cepat."
  },
  {
    "id": "tiu-pk-005",
    "subPattern": "perbandingan-senilai",
    "difficulty": "mudah",
    "prompt": "Pada peta berskala 1 : 250.000, jarak antara kantor kabupaten dan gedung diklat adalah 6 cm. Berapa km jarak sebenarnya antara kedua lokasi tersebut?",
    "options": [
      "12 km",
      "12,5 km",
      "16 km",
      "18 km",
      "15 km"
    ],
    "answer": "E",
    "explanation": "Jarak sebenarnya = 6 × 250.000 cm = 1.500.000 cm = 15 km.",
    "tip": "Ingat konversi 1 km = 100.000 cm, sehingga skala 1 : 250.000 setara dengan 1 cm mewakili 2,5 km."
  },
  {
    "id": "tiu-pk-006",
    "subPattern": "perbandingan-senilai",
    "difficulty": "mudah",
    "prompt": "Seorang petugas arsip dapat memindai 120 berkas kepegawaian dalam waktu 40 menit. Berapa berkas yang dapat dipindai dalam waktu 90 menit dengan laju kerja tetap?",
    "options": [
      "270 berkas",
      "240 berkas",
      "250 berkas",
      "280 berkas",
      "300 berkas"
    ],
    "answer": "A",
    "explanation": "Laju pemindaian = 120 / 40 = 3 berkas/menit. Dalam 90 menit = 3 × 90 = 270 berkas.",
    "tip": "Gunakan laju per menit (120/40 = 3 berkas/menit) untuk langsung mengalikan durasi baru."
  },
  {
    "id": "tiu-pk-007",
    "subPattern": "perbandingan-senilai",
    "difficulty": "mudah",
    "prompt": "Untuk membuat 8 liter larutan disinfektan diperlukan 160 ml cairan konsentrat. Berapa ml cairan konsentrat yang diperlukan untuk membuat 13 liter larutan disinfektan?",
    "options": [
      "220 ml",
      "260 ml",
      "240 ml",
      "280 ml",
      "300 ml"
    ],
    "answer": "B",
    "explanation": "Kebutuhan per liter = 160 / 8 = 20 ml/liter. Untuk 13 liter diperlukan 13 × 20 = 260 ml.",
    "tip": "Cari takaran konsentrat untuk setiap 1 liter larutan sebelum dikalikan dengan volume target."
  },
  {
    "id": "tiu-pk-008",
    "subPattern": "perbandingan-senilai",
    "difficulty": "mudah",
    "prompt": "Konveksi seragam mampu menjahit 84 potong kemeja kerja dari 126 meter kain. Berapa meter kain yang diperlukan untuk menjahit 110 potong kemeja kerja dengan ukuran yang sama?",
    "options": [
      "150 meter",
      "155 meter",
      "165 meter",
      "160 meter",
      "175 meter"
    ],
    "answer": "C",
    "explanation": "Kebutuhan kain per potong = 126 / 84 = 1,5 meter. Untuk 110 potong = 110 × 1,5 = 165 meter.",
    "tip": "Sederhanakan pecahan 126/84 dengan membagi 42 sehingga diperoleh 3/2 meter (1,5 meter) per potong."
  },
  {
    "id": "tiu-pk-009",
    "subPattern": "perbandingan-senilai",
    "difficulty": "mudah",
    "prompt": "Sebuah panel surya menghasilkan energi listrik sebesar 18 kWh dalam 4 jam penyinaran optimal. Berapa kWh energi listrik yang dihasilkan dalam 10 jam penyinaran optimal yang sama?",
    "options": [
      "36 kWh",
      "40 kWh",
      "42 kWh",
      "45 kWh",
      "48 kWh"
    ],
    "answer": "D",
    "explanation": "Produksi per jam = 18 / 4 = 4,5 kWh/jam. Dalam 10 jam dihasilkan 4,5 × 10 = 45 kWh.",
    "tip": "Perbandingan waktu dari 4 jam ke 10 jam adalah 2,5 kali lipat, sehingga energi = 18 × 2,5 = 45 kWh."
  },
  {
    "id": "tiu-pk-010",
    "subPattern": "perbandingan-senilai",
    "difficulty": "mudah",
    "prompt": "Sebuah percetakan menghabiskan 14 rim kertas untuk mencetak 70 buku modul pelatihan. Jika percetakan akan mencetak 125 buku modul pelatihan yang sama, berapa rim kertas yang dibutuhkan?",
    "options": [
      "20 rim",
      "22 rim",
      "24 rim",
      "28 rim",
      "25 rim"
    ],
    "answer": "E",
    "explanation": "Satu rim kertas dapat mencetak 70 / 14 = 5 buku. Untuk 125 buku dibutuhkan 125 / 5 = 25 rim.",
    "tip": "Cari rasio buku per 1 rim kertas (70 ÷ 14 = 5 buku/rim) agar pembagiannya menjadi sangat bulat."
  },
  {
    "id": "tiu-pk-011",
    "subPattern": "perbandingan-senilai",
    "difficulty": "sedang",
    "prompt": "Sebuah mobil operasional menghabiskan 8,5 liter bensin untuk menempuh jarak 102 km. Harga bensin adalah Rp10.000 per liter. Berapa biaya bensin yang diperlukan mobil tersebut untuk perjalanan sejauh 276 km?",
    "options": [
      "Rp230.000",
      "Rp210.000",
      "Rp220.000",
      "Rp240.000",
      "Rp250.000"
    ],
    "answer": "A",
    "explanation": "Konsumsi mobil = 102 / 8,5 = 12 km/liter. Untuk 276 km butuh 276 / 12 = 23 liter. Biaya = 23 × Rp10.000 = Rp230.000.",
    "tip": "Ubah 8,5 menjadi 17/2: 102 ÷ (17/2) = 6 × 2 = 12 km/liter, lalu bagi jarak baru dengan 12."
  },
  {
    "id": "tiu-pk-012",
    "subPattern": "perbandingan-senilai",
    "difficulty": "sedang",
    "prompt": "Perbandingan jumlah peserta ujian sesi pagi dan sesi siang adalah 5 : 7. Jika selisih peserta kedua sesi tersebut adalah 48 orang, berapakah jumlah seluruh peserta ujian pada kedua sesi tersebut?",
    "options": [
      "240 orang",
      "288 orang",
      "264 orang",
      "276 orang",
      "312 orang"
    ],
    "answer": "B",
    "explanation": "Selisih rasio = 7 - 5 = 2 bagian = 48 orang (1 bagian = 24 orang). Jumlah rasio = 5 + 7 = 12 bagian = 12 × 24 = 288 orang.",
    "tip": "Gunakan rumus cepat: Jumlah = (Jumlah Rasio / Selisih Rasio) × Selisih Nilai = (12 / 2) × 48."
  },
  {
    "id": "tiu-pk-013",
    "subPattern": "perbandingan-senilai",
    "difficulty": "sedang",
    "prompt": "Sebuah mesin pengemas otomatis mampu membungkus 360 kotak suplemen dalam waktu 12 menit. Jika mesin bekerja tanpa henti selama 1 jam 15 menit, berapa kotak suplemen yang berhasil dikemas?",
    "options": [
      "1800 kotak",
      "2100 kotak",
      "2250 kotak",
      "2400 kotak",
      "2550 kotak"
    ],
    "answer": "C",
    "explanation": "Laju pengemasan = 360 / 12 = 30 kotak/menit. Waktu 1 jam 15 menit = 75 menit. Total = 30 × 75 = 2250 kotak.",
    "tip": "Samakan satuan waktu ke menit terlebih dahulu (1 jam 15 menit = 75 menit) sebelum mengalikan laju per menit."
  },
  {
    "id": "tiu-pk-014",
    "subPattern": "perbandingan-senilai",
    "difficulty": "sedang",
    "prompt": "Campuran pupuk organik dibuat dari kompos, sekam, dan tanah dengan perbandingan berat 4 : 3 : 5. Jika tersedia 36 kg sekam dan bahan lain mencukupi, berapa kg total campuran pupuk organik maksimal yang dapat dibuat?",
    "options": [
      "108 kg",
      "120 kg",
      "132 kg",
      "144 kg",
      "156 kg"
    ],
    "answer": "D",
    "explanation": "Bagian sekam = 3 unit = 36 kg, sehingga 1 unit = 12 kg. Total campuran = (4 + 3 + 5) = 12 unit = 12 × 12 = 144 kg.",
    "tip": "Tentukan nilai 1 bagian dari komponen yang diketahui (36 ÷ 3 = 12 kg), lalu kalikan dengan total bagian rasio."
  },
  {
    "id": "tiu-pk-015",
    "subPattern": "perbandingan-senilai",
    "difficulty": "sedang",
    "prompt": "Dalam waktu 2,5 jam, sebuah pompa distribusi air mampu mengalirkan 4.500 liter air ke tangki penampungan. Berapa liter air yang dialirkan pompa tersebut jika bekerja selama 4 jam 20 menit?",
    "options": [
      "7200 liter",
      "7500 liter",
      "8100 liter",
      "8400 liter",
      "7800 liter"
    ],
    "answer": "E",
    "explanation": "Debit pompa = 4.500 / 2,5 = 1.800 liter/jam (atau 30 liter/menit). Waktu 4 jam 20 menit = 260 menit. Total = 260 × 30 = 7800 liter.",
    "tip": "Ubah debit menjadi liter per menit (4.500 ÷ 150 menit = 30 liter/menit) agar mudah menghitung menit pecahan."
  },
  {
    "id": "tiu-pk-016",
    "subPattern": "perbandingan-senilai",
    "difficulty": "sedang",
    "prompt": "Sebuah denah gedung digambar dengan skala 1 : 150. Pada denah tersebut, aula rapat berukuran panjang 12 cm dan lebar 8 cm. Berapakah luas sebenarnya aula rapat tersebut dalam satuan meter persegi (m²)?",
    "options": [
      "216 m²",
      "144 m²",
      "180 m²",
      "196 m²",
      "240 m²"
    ],
    "answer": "A",
    "explanation": "Panjang sebenarnya = 12 × 150 cm = 18 m. Lebar sebenarnya = 8 × 150 cm = 12 m. Luas sebenarnya = 18 × 12 = 216 m².",
    "tip": "Konversi panjang dan lebar ke satuan meter terlebih dahulu sebelum mengalikan luas agar tidak keliru nol kuadrat."
  },
  {
    "id": "tiu-pk-017",
    "subPattern": "perbandingan-senilai",
    "difficulty": "sedang",
    "prompt": "Untuk memberi makan 45 ekor ikan koi diperlukan 180 gram pelet per hari. Jika kolam ditambah 15 ekor ikan koi lagi dengan ukuran sejenis, berapa gram pelet yang dibutuhkan selama 5 hari?",
    "options": [
      "900 gram",
      "1200 gram",
      "1050 gram",
      "1100 gram",
      "1350 gram"
    ],
    "answer": "B",
    "explanation": "Kebutuhan per ekor per hari = 180 / 45 = 4 gram. Jumlah ikan baru = 45 + 15 = 60 ekor. Kebutuhan 5 hari = 60 × 4 × 5 = 1200 gram.",
    "tip": "Perhatikan dua variabel yang berubah sekaligus: jumlah ikan (menjadi 60 ekor) dan durasi hari (5 hari)."
  },
  {
    "id": "tiu-pk-018",
    "subPattern": "perbandingan-senilai",
    "difficulty": "sedang",
    "prompt": "Sebuah pabrik pengolahan susu memproduksi 420 botol susu segar setiap 35 menit. Jika pada suatu shift pabrik beroperasi selama 3,5 jam, berapa lusin botol susu yang dihasilkan?",
    "options": [
      "175 lusin",
      "180 lusin",
      "210 lusin",
      "200 lusin",
      "240 lusin"
    ],
    "answer": "C",
    "explanation": "Laju produksi = 420 / 35 = 12 botol/menit = 1 lusin/menit. Dalam 3,5 jam (210 menit), dihasilkan 210 × 1 = 210 lusin.",
    "tip": "Perhatikan bahwa 420 ÷ 35 = 12 botol/menit yang tepat sama dengan 1 lusin per menit."
  },
  {
    "id": "tiu-pk-019",
    "subPattern": "perbandingan-senilai",
    "difficulty": "sedang",
    "prompt": "Perbandingan anggaran pelatihan teknis dan pelatihan manajerial di suatu instansi adalah 8 : 5. Jika total kedua anggaran tersebut adalah Rp390.000.000, berapakah selisih anggaran kedua pelatihan tersebut?",
    "options": [
      "Rp75.000.000",
      "Rp80.000.000",
      "Rp105.000.000",
      "Rp90.000.000",
      "Rp120.000.000"
    ],
    "answer": "D",
    "explanation": "Jumlah rasio = 8 + 5 = 13 bagian = Rp390.000.000 (1 bagian = Rp30.000.000). Selisih = (8 - 5) × Rp30.000.000 = Rp90.000.000.",
    "tip": "Selisih = (Selisih Rasio / Jumlah Rasio) × Total = (3 / 13) × 390 juta = 90 juta."
  },
  {
    "id": "tiu-pk-020",
    "subPattern": "perbandingan-senilai",
    "difficulty": "sedang",
    "prompt": "Sebuah kendaraan hibrida membutuhkan 4,5 liter bensin untuk menempuh 81 km. Saat ini di tangki tersisa 11 liter bensin. Jika kendaraan harus menempuh perjalanan sejauh 252 km, berapa liter bensin minimal yang harus ditambahkan?",
    "options": [
      "2 liter",
      "2,5 liter",
      "3,5 liter",
      "4 liter",
      "3 liter"
    ],
    "answer": "E",
    "explanation": "Rasio konsumsi = 81 / 4,5 = 18 km/liter. Kebutuhan total untuk 252 km = 252 / 18 = 14 liter. Tambahan minimal = 14 - 11 = 3 liter.",
    "tip": "Hitung total liter yang dibutuhkan untuk 252 km terlebih dahulu, lalu kurangi dengan sisa bensin di tangki."
  },
  {
    "id": "tiu-pk-021",
    "subPattern": "perbandingan-senilai",
    "difficulty": "sulit",
    "prompt": "Mesin cetak A menghasilkan 180 buku dalam 45 menit, sedangkan Mesin cetak B menghasilkan 210 buku dalam 1 jam. Diketahui X adalah jumlah buku yang dihasilkan Mesin A dalam 2,5 jam, dan Y adalah jumlah buku yang dihasilkan Mesin B dalam 3 jam. Manakah hubungan yang benar antara kuantitas X dan Y?",
    "options": [
      "X < Y",
      "X > Y",
      "X = Y",
      "X = 2Y",
      "Hubungan X dan Y tidak dapat ditentukan"
    ],
    "answer": "A",
    "explanation": "Laju Mesin A = 180 / 0,75 jam = 240 buku/jam, sehingga X = 240 × 2,5 = 600 buku. Laju Mesin B = 210 buku/jam, sehingga Y = 210 × 3 = 630 buku. Karena 600 < 630, maka X < Y.",
    "tip": "Ubah kedua laju mesin ke satuan yang sama (buku per jam) sebelum mengalikan dengan durasi masing-masing."
  },
  {
    "id": "tiu-pk-022",
    "subPattern": "perbandingan-senilai",
    "difficulty": "sulit",
    "prompt": "Sebuah pabrik tekstil menggunakan 6 mesin tenun identik untuk memproduksi 540 meter kain dalam waktu 3 jam. Berapa meter kain yang dapat diproduksi oleh 8 mesin tenun identik jika bekerja selama 4,5 jam?",
    "options": [
      "900 meter",
      "1080 meter",
      "960 meter",
      "1020 meter",
      "1140 meter"
    ],
    "answer": "B",
    "explanation": "Produksi per mesin per jam = 540 / (6 × 3) = 30 meter/mesin-jam. Untuk 8 mesin selama 4,5 jam = 8 × 4,5 × 30 = 1080 meter.",
    "tip": "Gunakan perbandingan senilai berganda: Output sebanding dengan (Jumlah Mesin × Jam Kerja)."
  },
  {
    "id": "tiu-pk-023",
    "subPattern": "perbandingan-senilai",
    "difficulty": "sulit",
    "prompt": "Lima staf verifikasi mampu memeriksa 300 berkas pendaftaran CPNS dalam waktu 4 jam kerja. Jika pada hari berikutnya ditugaskan 7 staf verifikasi selama 6 jam kerja dengan kecepatan yang sama, berapa berkas yang berhasil diperiksa?",
    "options": [
      "540 berkas",
      "560 berkas",
      "630 berkas",
      "600 berkas",
      "660 berkas"
    ],
    "answer": "C",
    "explanation": "Produktivitas 1 staf per jam = 300 / (5 × 4) = 15 berkas/orang-jam. Dengan 7 staf selama 6 jam = 7 × 6 × 15 = 630 berkas.",
    "tip": "Cari output per 1 orang-jam terlebih dahulu (300 ÷ 20 = 15), lalu kalikan dengan orang-jam yang baru (7 × 6 = 42)."
  },
  {
    "id": "tiu-pk-024",
    "subPattern": "perbandingan-senilai",
    "difficulty": "sulit",
    "prompt": "Sebuah peta lama dibuat dengan skala 1 : 400.000 dan jarak dua kota pada peta tersebut adalah 9 cm. Peta tersebut akan digambar ulang dengan skala baru 1 : 150.000. Diketahui X adalah jarak kedua kota pada peta baru (dalam cm) dan Y = 24. Manakah hubungan yang benar antara kuantitas X dan Y?",
    "options": [
      "X > Y",
      "X < Y",
      "2X = Y",
      "X = Y",
      "Hubungan X dan Y tidak dapat ditentukan"
    ],
    "answer": "D",
    "explanation": "Jarak sebenarnya tetap: X × 150.000 = 9 × 400.000 → X = 3.600.000 / 150.000 = 24 cm. Karena Y = 24, maka X = Y.",
    "tip": "Jika skala diperbesar (angka penyebut skala mengecil dari 400.000 ke 150.000), jarak pada peta membesar dengan rasio 400/150."
  },
  {
    "id": "tiu-pk-025",
    "subPattern": "perbandingan-senilai",
    "difficulty": "sulit",
    "prompt": "Tiga truk pengangkut logistik dapat mengangkut 135 ton beras dalam 5 kali perjalanan. Berapa kali perjalanan yang diperlukan oleh 5 truk sejenis untuk mengangkut 315 ton beras?",
    "options": [
      "5 kali",
      "6 kali",
      "8 kali",
      "9 kali",
      "7 kali"
    ],
    "answer": "E",
    "explanation": "Kapasitas 1 truk per 1 perjalanan = 135 / (3 × 5) = 9 ton. Dengan 5 truk (45 ton sekali jalan), untuk 315 ton diperlukan 315 / 45 = 7 kali perjalanan.",
    "tip": "Hitung muatan per 1 truk sekali jalan (135 ÷ 15 = 9 ton), lalu bagi total target tonase dengan kapasitas 5 truk."
  },
  {
    "id": "tiu-pk-026",
    "subPattern": "perbandingan-senilai",
    "difficulty": "sulit",
    "prompt": "Perbandingan jumlah buku regulasi di Rak A dan Rak B adalah 3 : 5. Setelah 18 buku dipindahkan dari Rak B ke Rak A, jumlah buku di kedua rak menjadi sama banyak. Berapakah jumlah seluruh buku regulasi di kedua rak tersebut?",
    "options": [
      "144 buku",
      "108 buku",
      "120 buku",
      "128 buku",
      "160 buku"
    ],
    "answer": "A",
    "explanation": "Misalkan jumlah awal 3k dan 5k. Setelah dipindahkan: 3k + 18 = 5k - 18 → 2k = 36 → k = 18. Total buku = 8k = 8 × 18 = 144 buku.",
    "tip": "Saat 18 buku berpindah dari B ke A dan jumlahnya menjadi sama, selisih awal antara B dan A adalah 2 × 18 = 36 buku."
  },
  {
    "id": "tiu-pk-027",
    "subPattern": "perbandingan-senilai",
    "difficulty": "sulit",
    "prompt": "Empat kompor industri menghabiskan 30 kg gas LPG dalam 5 hari jika dinyalakan rata-rata 6 jam per hari. Berapa kg gas LPG yang dihabiskan oleh 6 kompor sejenis selama 4 hari jika dinyalakan rata-rata 8 jam per hari?",
    "options": [
      "40 kg",
      "48 kg",
      "42 kg",
      "45 kg",
      "54 kg"
    ],
    "answer": "B",
    "explanation": "Total jam-kompor awal = 4 × 5 × 6 = 120 jam-kompor (menghabiskan 30 kg, berarti 0,25 kg per jam-kompor). Jam-kompor baru = 6 × 4 × 8 = 192 jam-kompor. Gas = 192 × 0,25 = 48 kg.",
    "tip": "Kalikan (Jumlah Kompor × Hari × Jam/hari) sebagai satuan total pemakaian karena ketiganya berbanding lurus dengan konsumsi gas."
  },
  {
    "id": "tiu-pk-028",
    "subPattern": "perbandingan-senilai",
    "difficulty": "sulit",
    "prompt": "Gaji bulanan Andi dan Budi berbanding 6 : 5. Setiap bulan keduanya menyisihkan Rp1.500.000 untuk tabungan, dan perbandingan pengeluaran bulanan mereka adalah 5 : 4. Berapakah gaji bulanan Andi?",
    "options": [
      "Rp7.500.000",
      "Rp8.400.000",
      "Rp9.000.000",
      "Rp9.600.000",
      "Rp10.500.000"
    ],
    "answer": "C",
    "explanation": "Gaji Andi = 6k, Budi = 5k. Pengeluaran: (6k - 1,5 juta) : (5k - 1,5 juta) = 5 : 4. Karena selisih rasio 6k ke 5k dan 5k ke 4k sama-sama 1 bagian, maka 1 bagian k = Rp1.500.000. Gaji Andi = 6 × Rp1.500.000 = Rp9.000.000.",
    "tip": "Jika rasio awal (6:5) dan rasio akhir (5:4) turun tepat 1 satuan pada kedua suku untuk pengurangan yang sama, maka 1 satuan rasio = nilai pengurangan tersebut."
  },
  {
    "id": "tiu-pk-029",
    "subPattern": "perbandingan-senilai",
    "difficulty": "sulit",
    "prompt": "Sebuah drone pemetaan memotret area seluas 18 km² dalam 24 menit. Diketahui X adalah luas area (km²) yang dipotret dalam 1 jam 20 menit, dan Y adalah waktu (menit) yang dibutuhkan untuk memotret area seluas 45 km². Manakah hubungan yang benar antara nilai angka X dan Y?",
    "options": [
      "X > Y",
      "X < Y",
      "X = 1,5Y",
      "X = Y",
      "Hubungan X dan Y tidak dapat ditentukan"
    ],
    "answer": "D",
    "explanation": "Laju pemetaan = 18 / 24 = 3/4 km² per menit. Dalam 1 jam 20 menit (80 menit), X = 80 × (3/4) = 60. Untuk memotret 45 km², waktu Y = 45 / (3/4) = 60 menit. Jadi X = Y = 60.",
    "tip": "Sederhanakan rasio 18 km² / 24 menit menjadi 3 km² setiap 4 menit untuk menghitung X dan Y dengan cepat."
  },
  {
    "id": "tiu-pk-030",
    "subPattern": "perbandingan-senilai",
    "difficulty": "sulit",
    "prompt": "Dalam sebuah tangki pencampur, rasio cairan A terhadap cairan B adalah 7 : 4. Jika ditambahkan 12 liter cairan B, rasionya berubah menjadi 7 : 6. Berapa liter volume cairan A di dalam tangki tersebut?",
    "options": [
      "35 liter",
      "49 liter",
      "56 liter",
      "63 liter",
      "42 liter"
    ],
    "answer": "E",
    "explanation": "Rasio cairan A tetap 7 bagian, sedangkan bagian cairan B naik dari 4 menjadi 6 (bertambah 2 bagian = 12 liter, sehingga 1 bagian = 6 liter). Volume cairan A = 7 × 6 = 42 liter.",
    "tip": "Karena volume cairan A tidak berubah dan angka rasionya sudah sama (7), kenaikan 2 bagian pada B langsung mewakili 12 liter."
  },
  {
    "id": "tiu-pk-031",
    "subPattern": "perbandingan-berbalik-nilai",
    "difficulty": "mudah",
    "prompt": "Suatu pekerjaan renovasi ruang pelayanan dapat diselesaikan oleh 12 pekerja dalam waktu 15 hari. Jika pekerjaan tersebut ingin diselesaikan dalam waktu 10 hari, berapa jumlah pekerja yang dibutuhkan?",
    "options": [
      "14 orang",
      "18 orang",
      "15 orang",
      "16 orang",
      "20 orang"
    ],
    "answer": "B",
    "explanation": "Total beban kerja = 12 × 15 = 180 orang-hari. Untuk selesai dalam 10 hari dibutuhkan 180 / 10 = 18 orang.",
    "tip": "Pada perbandingan berbalik nilai, hasil kali (Pekerja × Hari) selalu tetap."
  },
  {
    "id": "tiu-pk-032",
    "subPattern": "perbandingan-berbalik-nilai",
    "difficulty": "mudah",
    "prompt": "Persediaan pakan di sebuah balai peternakan cukup untuk 40 ekor sapi selama 18 hari. Jika balai peternakan mendatangkan lagi 8 ekor sapi, untuk berapa hari persediaan pakan tersebut akan cukup?",
    "options": [
      "12 hari",
      "14 hari",
      "15 hari",
      "16 hari",
      "20 hari"
    ],
    "answer": "C",
    "explanation": "Total pakan = 40 × 18 = 720 ekor-hari. Jumlah sapi sekarang = 40 + 8 = 48 ekor. Waktu habis = 720 / 48 = 15 hari.",
    "tip": "Jumlahkan total sapi baru terlebih dahulu (40 + 8 = 48), lalu bagi hasil kali awal (40 × 18) dengan 48."
  },
  {
    "id": "tiu-pk-033",
    "subPattern": "perbandingan-berbalik-nilai",
    "difficulty": "mudah",
    "prompt": "Sebuah bus jemputan pegawai menempuh rute kantor dengan kecepatan rata-rata 60 km/jam dalam waktu 40 menit. Jika kecepatan rata-rata bus meningkat menjadi 80 km/jam, berapa menit waktu tempuh yang diperlukan?",
    "options": [
      "25 menit",
      "28 menit",
      "32 menit",
      "30 menit",
      "35 menit"
    ],
    "answer": "D",
    "explanation": "Kecepatan berbanding terbalik dengan waktu: 60 × 40 = 80 × t → t = 2400 / 80 = 30 menit.",
    "tip": "Tidak perlu mengubah menit ke jam karena satuan waktu di ruas kiri dan kanan sudah sama-sama menit."
  },
  {
    "id": "tiu-pk-034",
    "subPattern": "perbandingan-berbalik-nilai",
    "difficulty": "mudah",
    "prompt": "Enam buah pompa air identik dapat menguras sebuah kolam penampungan dalam waktu 8 jam. Jika hanya 4 pompa air yang dioperasikan, berapa jam waktu yang diperlukan untuk menguras kolam tersebut?",
    "options": [
      "9 jam",
      "10 jam",
      "11 jam",
      "14 jam",
      "12 jam"
    ],
    "answer": "E",
    "explanation": "Beban kerja = 6 × 8 = 48 pompa-jam. Dengan 4 pompa diperlukan waktu 48 / 4 = 12 jam.",
    "tip": "Makin sedikit pompa yang aktif, waktu pengurasan makin lama: (6 × 8) ÷ 4 = 12 jam."
  },
  {
    "id": "tiu-pk-035",
    "subPattern": "perbandingan-berbalik-nilai",
    "difficulty": "mudah",
    "prompt": "Digitalisasi dokumen arsip dapat diselesaikan oleh 9 staf dalam waktu 20 hari. Berapa hari waktu yang dibutuhkan jika pekerjaan tersebut dikerjakan oleh 15 staf dengan kemampuan setara?",
    "options": [
      "12 hari",
      "10 hari",
      "11 hari",
      "14 hari",
      "15 hari"
    ],
    "answer": "A",
    "explanation": "Total beban kerja = 9 × 20 = 180 staf-hari. Dengan 15 staf, waktu yang dibutuhkan = 180 / 15 = 12 hari.",
    "tip": "Kalikan jumlah staf awal dengan hari awal (9 × 20 = 180), lalu bagi dengan jumlah staf baru (15)."
  },
  {
    "id": "tiu-pk-036",
    "subPattern": "perbandingan-berbalik-nilai",
    "difficulty": "mudah",
    "prompt": "Sebuah asrama diklat memiliki persediaan beras yang cukup untuk 60 peserta selama 14 hari. Jika ternyata peserta yang hadir sebanyak 70 orang, berapa hari persediaan beras tersebut akan bertahan?",
    "options": [
      "10 hari",
      "12 hari",
      "11 hari",
      "13 hari",
      "15 hari"
    ],
    "answer": "B",
    "explanation": "Total porsi = 60 × 14 = 840 orang-hari. Untuk 70 peserta, beras bertahan selama 840 / 70 = 12 hari.",
    "tip": "Coret faktor persekutuan: (60 × 14) ÷ 70 = 60 × (14 ÷ 70) = 60 ÷ 5 = 12 hari."
  },
  {
    "id": "tiu-pk-037",
    "subPattern": "perbandingan-berbalik-nilai",
    "difficulty": "mudah",
    "prompt": "Untuk membagikan paket bantuan ke warga desa, 8 relawan membutuhkan waktu 9 jam. Jika koordinator ingin pembagian selesai dalam 6 jam, berapa orang relawan total yang harus diturunkan?",
    "options": [
      "10 orang",
      "11 orang",
      "12 orang",
      "14 orang",
      "15 orang"
    ],
    "answer": "C",
    "explanation": "Total jam kerja = 8 × 9 = 72 orang-jam. Agar selesai dalam 6 jam, dibutuhkan 72 / 6 = 12 orang relawan.",
    "tip": "Perhatikan apakah soal menanyakan jumlah pekerja total atau pekerja tambahan; di sini ditanyakan total relawan."
  },
  {
    "id": "tiu-pk-038",
    "subPattern": "perbandingan-berbalik-nilai",
    "difficulty": "mudah",
    "prompt": "Sebuah roda gigi A yang memiliki 36 gerigi bersinggungan dengan roda gigi B yang memiliki 24 gerigi. Jika roda gigi A berputar sebanyak 16 kali, berapa kali roda gigi B berputar?",
    "options": [
      "18 kali",
      "20 kali",
      "22 kali",
      "24 kali",
      "28 kali"
    ],
    "answer": "D",
    "explanation": "Jumlah gerigi berbanding terbalik dengan jumlah putaran: 36 × 16 = 24 × n_B → n_B = 576 / 24 = 24 kali.",
    "tip": "Pada roda gigi bersinggungan, hasil kali (Jumlah Gerigi × Jumlah Putaran) kedua roda selalu sama."
  },
  {
    "id": "tiu-pk-039",
    "subPattern": "perbandingan-berbalik-nilai",
    "difficulty": "mudah",
    "prompt": "Pengecatan gedung sekolah dapat diselesaikan oleh 14 tukang cat dalam waktu 12 hari. Jika 2 tukang cat berhalangan hadir sejak hari pertama, berapa hari pengecatan tersebut selesai?",
    "options": [
      "13 hari",
      "15 hari",
      "16 hari",
      "18 hari",
      "14 hari"
    ],
    "answer": "E",
    "explanation": "Tukang yang bekerja = 14 - 2 = 12 orang. Waktu selesai = (14 × 12) / 12 = 14 hari.",
    "tip": "Kurangi jumlah pekerja terlebih dahulu (14 - 2 = 12 orang), lalu bagi beban kerja (14 × 12) dengan 12."
  },
  {
    "id": "tiu-pk-040",
    "subPattern": "perbandingan-berbalik-nilai",
    "difficulty": "mudah",
    "prompt": "Seorang kurir menempuh perjalanan antarkota selama 3 jam dengan kecepatan rata-rata 75 km/jam. Jika saat pulang ia ingin tiba dalam waktu 2,5 jam melalui jalur yang sama, berapa kecepatan rata-rata yang harus ditempuh?",
    "options": [
      "90 km/jam",
      "80 km/jam",
      "85 km/jam",
      "95 km/jam",
      "100 km/jam"
    ],
    "answer": "A",
    "explanation": "Jarak tempuh = 3 × 75 = 225 km. Kecepatan pulang = 225 / 2,5 = 90 km/jam.",
    "tip": "Gunakan persamaan v1 × t1 = v2 × t2 → 75 × 3 = v2 × (5/2) → v2 = 45 × 2 = 90 km/jam."
  },
  {
    "id": "tiu-pk-041",
    "subPattern": "perbandingan-berbalik-nilai",
    "difficulty": "sedang",
    "prompt": "Sebuah proyek instalasi jaringan direncanakan selesai dalam 24 hari oleh 15 teknisi. Agar proyek tersebut selesai 6 hari lebih cepat dari jadwal semula, berapa orang teknisi tambahan yang harus direkrut?",
    "options": [
      "3 orang",
      "5 orang",
      "4 orang",
      "6 orang",
      "8 orang"
    ],
    "answer": "B",
    "explanation": "Target waktu baru = 24 - 6 = 18 hari. Total teknisi yang dibutuhkan = (15 × 24) / 18 = 20 orang. Teknisi tambahan = 20 - 15 = 5 orang.",
    "tip": "Waspadai kata 'lebih cepat 6 hari' (waktu menjadi 18 hari) dan 'teknisi tambahan' (selisih pekerja baru dengan pekerja awal)."
  },
  {
    "id": "tiu-pk-042",
    "subPattern": "perbandingan-berbalik-nilai",
    "difficulty": "sedang",
    "prompt": "Seorang peternak memiliki persediaan pakan untuk 60 ekor kambing selama 25 hari. Setelah 5 hari berjalan, ia menjual 10 ekor kambing. Berapa hari lagi sisa persediaan pakan tersebut akan habis untuk kambing yang tersisa?",
    "options": [
      "20 hari",
      "22 hari",
      "24 hari",
      "25 hari",
      "28 hari"
    ],
    "answer": "C",
    "explanation": "Setelah 5 hari, sisa pakan cukup untuk 60 ekor selama 25 - 5 = 20 hari (60 × 20 = 1200 ekor-hari). Sisa kambing = 60 - 10 = 50 ekor. Sisa pakan habis dalam 1200 / 50 = 24 hari.",
    "tip": "Hitung sisa hari pakan pada titik perubahan (25 - 5 = 20 hari untuk 60 ekor), lalu bagi dengan jumlah kambing baru (50 ekor)."
  },
  {
    "id": "tiu-pk-043",
    "subPattern": "perbandingan-berbalik-nilai",
    "difficulty": "sedang",
    "prompt": "Audit laporan keuangan ditargetkan selesai dalam 32 hari oleh 18 auditor. Jika pimpinan meminta audit selesai dalam 24 hari, berapa persen penambahan jumlah auditor dari jumlah semula?",
    "options": [
      "25%",
      "30%",
      "35%",
      "33,33%",
      "50%"
    ],
    "answer": "D",
    "explanation": "Auditor yang dibutuhkan = (18 × 32) / 24 = 24 orang. Tambahan auditor = 24 - 18 = 6 orang. Persentase tambahan = (6 / 18) × 100% = 33,33%.",
    "tip": "Karena waktu menjadi 24/32 = 3/4 kali semula, jumlah pekerja harus menjadi 4/3 kali semula (bertambah 1/3 atau 33,33%)."
  },
  {
    "id": "tiu-pk-044",
    "subPattern": "perbandingan-berbalik-nilai",
    "difficulty": "sedang",
    "prompt": "Persediaan logistik di posko bencana cukup untuk 120 pengungsi selama 15 hari. Pada hari ke-4 sejak awal perhitungan (setelah 3 hari berlalu), datang tambahan 30 pengungsi baru. Berapa hari lagi sisa logistik tersebut akan cukup untuk seluruh pengungsi?",
    "options": [
      "8,5 hari",
      "9 hari",
      "10 hari",
      "10,5 hari",
      "9.6 hari"
    ],
    "answer": "E",
    "explanation": "Setelah 3 hari berlalu, sisa logistik cukup untuk 120 orang selama 15 - 3 = 12 hari (120 × 12 = 1440 orang-hari). Jumlah pengungsi baru = 120 + 30 = 150 orang. Sisa hari = 1440 / 150 = 9,6 hari.",
    "tip": "Fokus pada sisa kapasitas logistik saat pengungsi baru tiba: (120 × 12) ÷ 150 = 9,6 hari."
  },
  {
    "id": "tiu-pk-045",
    "subPattern": "perbandingan-berbalik-nilai",
    "difficulty": "sedang",
    "prompt": "Sebuah buku pedoman teknis terdiri atas 180 halaman jika dicetak dengan rata-rata 32 baris per halaman. Jika tata letak diubah sehingga setiap halaman memuat 36 baris, berapa halaman jumlah halaman buku tersebut sekarang?",
    "options": [
      "160 halaman",
      "144 halaman",
      "150 halaman",
      "165 halaman",
      "170 halaman"
    ],
    "answer": "A",
    "explanation": "Total baris dalam buku tetap: 180 × 32 = 5760 baris. Dengan 36 baris per halaman, jumlah halaman = 5760 / 36 = 160 halaman.",
    "tip": "Jumlah halaman berbanding terbalik dengan jumlah baris per halaman: (180 × 32) ÷ 36 = 5 × 32 = 160."
  },
  {
    "id": "tiu-pk-046",
    "subPattern": "perbandingan-berbalik-nilai",
    "difficulty": "sedang",
    "prompt": "Delapan mesin pemotong rumput dapat membersihkan lahan taman kota dalam waktu 10,5 jam. Jika 2 mesin rusak sebelum pekerjaan dimulai, berapa jam lebih lama waktu yang diperlukan dibanding rencana awal?",
    "options": [
      "2,5 jam",
      "3.5 jam",
      "3 jam",
      "4 jam",
      "4,5 jam"
    ],
    "answer": "B",
    "explanation": "Mesin yang berfungsi = 8 - 2 = 6 mesin. Waktu baru = (8 × 10,5) / 6 = 84 / 6 = 14 jam. Selisih lebih lama = 14 - 10,5 = 3,5 jam.",
    "tip": "Perhatikan yang ditanyakan adalah selisih waktu ('berapa jam lebih lama'), bukan total waktu akhir."
  },
  {
    "id": "tiu-pk-047",
    "subPattern": "perbandingan-berbalik-nilai",
    "difficulty": "sedang",
    "prompt": "Seorang pengendara menempuh jarak antarprovinsi dengan kecepatan rata-rata 64 km/jam selama 4 jam 30 menit. Jika kecepatan rata-rata diturunkan menjadi 48 km/jam, berapa jam waktu tempuh perjalanan tersebut?",
    "options": [
      "5 jam",
      "5,5 jam",
      "6 jam",
      "6,5 jam",
      "7 jam"
    ],
    "answer": "C",
    "explanation": "Jarak = 64 × 4,5 = 288 km. Dengan kecepatan 48 km/jam, waktu tempuh = 288 / 48 = 6 jam.",
    "tip": "Gunakan perbandingan terbalik: t2 = (64 / 48) × 4,5 = (4 / 3) × 4,5 = 6 jam."
  },
  {
    "id": "tiu-pk-048",
    "subPattern": "perbandingan-berbalik-nilai",
    "difficulty": "sedang",
    "prompt": "Suatu paket sembako dapat dibagi rata kepada 90 kepala keluarga dengan masing-masing menerima 12 kg beras. Jika jumlah penerima bertambah 30 kepala keluarga dan total beras tetap, berapa kg beras yang diterima setiap kepala keluarga?",
    "options": [
      "8 kg",
      "8,5 kg",
      "9,5 kg",
      "9 kg",
      "10 kg"
    ],
    "answer": "D",
    "explanation": "Total beras = 90 × 12 = 1080 kg. Jumlah penerima baru = 90 + 30 = 120 KK. Jatah per KK = 1080 / 120 = 9 kg.",
    "tip": "Jumlah penerima menjadi 120 KK, sehingga bagian per KK = (90 / 120) × 12 = (3 / 4) × 12 = 9 kg."
  },
  {
    "id": "tiu-pk-049",
    "subPattern": "perbandingan-berbalik-nilai",
    "difficulty": "sedang",
    "prompt": "Pembangunan jembatan desa dapat diselesaikan oleh 28 pekerja dalam waktu 45 hari. Agar pembangunan selesai dalam waktu 35 hari, berapa orang pekerja tambahan yang harus didatangkan?",
    "options": [
      "6 orang",
      "7 orang",
      "9 orang",
      "10 orang",
      "8 orang"
    ],
    "answer": "E",
    "explanation": "Jumlah pekerja yang dibutuhkan = (28 × 45) / 35 = (4 × 45) / 5 = 36 orang. Pekerja tambahan = 36 - 28 = 8 orang.",
    "tip": "Sederhanakan pecahan 28/35 menjadi 4/5 terlebih dahulu, lalu kalikan dengan 45 untuk mendapatkan 36 pekerja."
  },
  {
    "id": "tiu-pk-050",
    "subPattern": "perbandingan-berbalik-nilai",
    "difficulty": "sedang",
    "prompt": "Sebuah kolam ikan dikuras menggunakan 5 pompa identik selama 6 jam. Setelah bekerja 2 jam, 1 pompa tiba-tiba mati. Berapa jam waktu yang dibutuhkan oleh pompa yang tersisa untuk menyelesaikan pengurasan kolam tersebut?",
    "options": [
      "5 jam",
      "4 jam",
      "4,5 jam",
      "5,5 jam",
      "6 jam"
    ],
    "answer": "A",
    "explanation": "Setelah 2 jam, sisa beban untuk 5 pompa adalah 6 - 2 = 4 jam (5 × 4 = 20 pompa-jam). Dengan sisa 4 pompa, waktu yang dibutuhkan = 20 / 4 = 5 jam.",
    "tip": "Hitung sisa beban kerja setelah 2 jam berjalan (5 pompa × 4 jam sisa = 20 pompa-jam), lalu bagi dengan 4 pompa."
  }
];
