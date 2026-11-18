import type { QuestionDraft } from "@/modules/question-bank/domain/question";

export const perbandinganBatch2Drafts: readonly QuestionDraft[] = [
  {
    "id": "tiu-pk-051",
    "subPattern": "perbandingan-berbalik-nilai",
    "difficulty": "sulit",
    "prompt": "Suatu proyek pengaspalan jalan dapat diselesaikan oleh 20 pekerja dalam 30 hari. Diketahui X adalah tambahan pekerja yang diperlukan agar proyek selesai dalam 24 hari, dan Y = 6. Manakah hubungan yang benar antara kuantitas X dan Y?",
    "options": [
      "X > Y",
      "X < Y",
      "X = Y",
      "X = 2Y",
      "Hubungan X dan Y tidak dapat ditentukan"
    ],
    "answer": "B",
    "explanation": "Pekerja untuk 24 hari = (20 × 30) / 24 = 600 / 24 = 25 orang. Tambahan pekerja X = 25 - 20 = 5 orang. Karena Y = 6, maka X < Y.",
    "tip": "Jangan tertukar antara total pekerja (25) dan tambahan pekerja (X = 5) saat membandingkan dengan Y."
  },
  {
    "id": "tiu-pk-052",
    "subPattern": "perbandingan-berbalik-nilai",
    "difficulty": "sulit",
    "prompt": "Persediaan pakan di sebuah peternakan cukup untuk 800 ekor ayam selama 18 hari. Setelah 3 hari, peternak membeli lagi 200 ekor ayam. Diketahui X adalah jumlah hari sisa pakan akan habis sejak ayam baru masuk, dan Y = 12. Manakah hubungan yang benar antara kuantitas X dan Y?",
    "options": [
      "X > Y",
      "X < Y",
      "X = Y",
      "2X = 3Y",
      "Hubungan X dan Y tidak dapat ditentukan"
    ],
    "answer": "C",
    "explanation": "Setelah 3 hari, sisa pakan untuk 800 ekor adalah 15 hari. Ayam sekarang = 800 + 200 = 1000 ekor. Maka X = (800 × 15) / 1000 = 12 hari. Karena Y = 12, maka X = Y.",
    "tip": "Kurangi hari yang sudah berjalan (18 - 3 = 15 hari) sebelum mengalikan dengan jumlah ayam awal."
  },
  {
    "id": "tiu-pk-053",
    "subPattern": "perbandingan-berbalik-nilai",
    "difficulty": "sulit",
    "prompt": "Jika kecepatan sebuah kereta logistik dinaikkan sebesar 25% dari kecepatan normalnya, berapa persen pengurangan waktu tempuh yang diperoleh untuk jarak yang sama? Pilih persentase pengurangan waktu tempuh yang tepat.",
    "options": [
      "15%",
      "22,5%",
      "25%",
      "20%",
      "30%"
    ],
    "answer": "D",
    "explanation": "Kecepatan baru v' = 1,25v = (5/4)v. Karena waktu berbanding terbalik dengan kecepatan, waktu baru t' = (4/5)t = 80% dari waktu semula. Pengurangan waktu = 100% - 80% = 20%.",
    "tip": "Jika kecepatan naik menjadi 5/4 kali semula, maka waktu turun menjadi 4/5 kali semula (berkurang 1/5 = 20%)."
  },
  {
    "id": "tiu-pk-054",
    "subPattern": "perbandingan-berbalik-nilai",
    "difficulty": "sulit",
    "prompt": "Sebuah pekerjaan dapat diselesaikan oleh 16 orang dalam 27 hari jika mereka bekerja 8 jam sehari. Jika pekerjaan tersebut ingin diselesaikan dalam 18 hari oleh 24 orang, berapa jam sehari mereka harus bekerja?",
    "options": [
      "6 jam",
      "7 jam",
      "9 jam",
      "10 jam",
      "8 jam"
    ],
    "answer": "E",
    "explanation": "Total jam-orang = 16 × 27 × 8 = 3456 jam-orang. Dengan 24 orang selama 18 hari (24 × 18 = 432 orang-hari), jam kerja per hari = 3456 / 432 = 8 jam.",
    "tip": "Perhatikan bahwa 16 × 27 = 432 dan 24 × 18 = 432, sehingga jumlah orang-hari sama persis dan jam kerja per hari tetap 8 jam."
  },
  {
    "id": "tiu-pk-055",
    "subPattern": "perbandingan-berbalik-nilai",
    "difficulty": "sulit",
    "prompt": "Tiga roda gigi A, B, dan C saling terhubung berurutan dengan perbandingan jumlah gerigi A : B : C = 6 : 4 : 3. Jika roda gigi A berputar 40 kali per menit, berapa kali roda gigi C berputar dalam 3 menit?",
    "options": [
      "240 kali",
      "160 kali",
      "180 kali",
      "200 kali",
      "270 kali"
    ],
    "answer": "A",
    "explanation": "Putaran berbanding terbalik dengan jumlah gerigi: n_A × 6 = n_C × 3 → 40 × 6 = n_C × 3 → n_C = 80 kali/menit. Dalam 3 menit, C berputar 80 × 3 = 240 kali.",
    "tip": "Roda perantara B dapat diabaikan karena gigi yang diteruskan sama; langsung bandingkan gerigi A dan C (6 : 3 = 2 : 1)."
  },
  {
    "id": "tiu-pk-056",
    "subPattern": "perbandingan-berbalik-nilai",
    "difficulty": "sulit",
    "prompt": "Sebuah gedung direncanakan selesai dibangun oleh 30 pekerja dalam 50 hari. Namun jika efisiensi tiap pekerja meningkat sebesar 20%, berapa hari waktu yang dibutuhkan oleh 25 pekerja dengan efisiensi baru tersebut untuk menyelesaikan gedung yang sama?",
    "options": [
      "40 hari",
      "50 hari",
      "45 hari",
      "55 hari",
      "60 hari"
    ],
    "answer": "B",
    "explanation": "Kapasitas 25 pekerja dengan efisiensi 120% setara dengan 25 × 1,2 = 30 pekerja standar. Karena setara dengan 30 pekerja standar, waktu penyelesaiannya tetap 50 hari.",
    "tip": "Kalikan jumlah pekerja baru dengan faktor efisiensi (25 × 1,2 = 30 pekerja efektif) sebelum membandingkan."
  },
  {
    "id": "tiu-pk-057",
    "subPattern": "perbandingan-berbalik-nilai",
    "difficulty": "sulit",
    "prompt": "Mobil A menempuh rute kota P ke Q dengan kecepatan 72 km/jam dalam waktu X menit. Mobil B menempuh rute yang sama (jarak sama) dengan kecepatan 90 km/jam dalam waktu 64 menit. Diketahui Y = 80. Manakah hubungan yang benar antara kuantitas X dan Y?",
    "options": [
      "X > Y",
      "X < Y",
      "X = Y",
      "X = 1,25Y",
      "Hubungan X dan Y tidak dapat ditentukan"
    ],
    "answer": "C",
    "explanation": "Jarak tetap: 72 × X = 90 × 64 → X = (90 × 64) / 72 = (5 × 64) / 4 = 80 menit. Karena Y = 80, maka X = Y.",
    "tip": "Sederhanakan rasio kecepatan 90/72 menjadi 5/4, lalu kalikan dengan 64 menit."
  },
  {
    "id": "tiu-pk-058",
    "subPattern": "perbandingan-berbalik-nilai",
    "difficulty": "sulit",
    "prompt": "Persediaan makanan di kapal riset cukup untuk 24 peneliti selama 30 hari. Setelah berlayar 6 hari, kapal mengevakuasi 8 nelayan sehingga ikut mengonsumsi persediaan makanan dengan porsi yang sama. Berapa hari lebih cepat persediaan makanan akan habis dibandingkan jadwal semula?",
    "options": [
      "4 hari",
      "5 hari",
      "8 hari",
      "6 hari",
      "9 hari"
    ],
    "answer": "D",
    "explanation": "Sisa rencana awal setelah 6 hari = 24 hari (untuk 24 orang). Dengan tambahan 8 orang (total 32 orang), sisa makanan bertahan (24 × 24) / 32 = 18 hari. Makanan habis 24 - 18 = 6 hari lebih cepat.",
    "tip": "Bandingkan sisa rencana (24 hari) dengan durasi nyata setelah orang bertambah (18 hari): selisihnya 24 - 18 = 6 hari."
  },
  {
    "id": "tiu-pk-059",
    "subPattern": "perbandingan-berbalik-nilai",
    "difficulty": "sulit",
    "prompt": "Jika jumlah pekerja pada suatu proyek dikurangi sebesar 20%, berapa persen waktu penyelesaian proyek akan bertambah (dengan asumsi produktivitas tiap pekerja tetap)? Pilih persentase penambahan waktu yang tepat.",
    "options": [
      "16%",
      "20%",
      "24%",
      "30%",
      "25%"
    ],
    "answer": "E",
    "explanation": "Pekerja menjadi 80% = 4/5 dari semula. Karena berbalik nilai, waktu menjadi 5/4 = 125% dari waktu semula, atau bertambah 25%.",
    "tip": "Kebalikan dari 4/5 adalah 5/4; kenaikan dari 1 ke 5/4 adalah +1/4 atau +25%."
  },
  {
    "id": "tiu-pk-060",
    "subPattern": "perbandingan-berbalik-nilai",
    "difficulty": "sulit",
    "prompt": "Untuk mencetak seluruh surat suara, 12 mesin cetak membutuhkan waktu 15 hari dengan jam kerja 10 jam/hari. Jika 3 mesin mengalami kerusakan dan sisa mesin dioperasikan 12 jam/hari, diketahui X adalah jumlah hari yang diperlukan dan Y = 16. Manakah hubungan yang benar antara kuantitas X dan Y?",
    "options": [
      "X > Y",
      "X < Y",
      "X = Y",
      "X = 2Y",
      "Hubungan X dan Y tidak dapat ditentukan"
    ],
    "answer": "A",
    "explanation": "Total mesin-jam = 12 × 15 × 10 = 1800. Sisa mesin = 9 mesin × 12 jam/hari = 108 mesin-jam/hari. Maka X = 1800 / 108 = 16,67 hari. Karena 16,67 > 16, maka X > Y.",
    "tip": "Hitung kapasitas harian mesin yang tersisa (9 × 12 = 108 jam-mesin/hari) lalu bandingkan dengan total beban 1800."
  },
  {
    "id": "tiu-pk-061",
    "subPattern": "proyek-dan-pekerjaan-gabungan",
    "difficulty": "mudah",
    "prompt": "Raka dapat menyelesaikan penyusunan laporan bulanan dalam 6 jam, sedangkan Dinda dapat menyelesaikannya dalam 12 jam. Jika mereka bekerja bersama-sama, berapa jam waktu yang dibutuhkan untuk menyelesaikan laporan tersebut?",
    "options": [
      "3 jam",
      "4,5 jam",
      "4 jam",
      "5 jam",
      "6 jam"
    ],
    "answer": "C",
    "explanation": "Laju gabungan = 1/6 + 1/12 = 3/12 = 1/4 bagian/jam. Waktu selesai bersama = 4 jam.",
    "tip": "Gunakan rumus cepat kerja bersama dua orang: t = (A × B) / (A + B) = (6 × 12) / (6 + 12) = 72 / 18 = 4 jam."
  },
  {
    "id": "tiu-pk-062",
    "subPattern": "proyek-dan-pekerjaan-gabungan",
    "difficulty": "mudah",
    "prompt": "Pompa A dapat mengisi penuh tangki air dalam 10 menit, sedangkan Pompa B dapat mengisi penuh tangki yang sama dalam 15 menit. Jika kedua pompa dinyalakan bersamaan dari keadaan kosong, berapa menit tangki akan penuh?",
    "options": [
      "5 menit",
      "7 menit",
      "7,5 menit",
      "6 menit",
      "8 menit"
    ],
    "answer": "D",
    "explanation": "Waktu gabungan = (10 × 15) / (10 + 15) = 150 / 25 = 6 menit.",
    "tip": "Kalikan kedua waktu lalu bagi dengan jumlahnya: (10 × 15) ÷ 25 = 6 menit."
  },
  {
    "id": "tiu-pk-063",
    "subPattern": "proyek-dan-pekerjaan-gabungan",
    "difficulty": "mudah",
    "prompt": "Tim A dapat mendekorasi aula pelantikan dalam 20 jam, sedangkan Tim B dapat menyelesaikannya dalam 30 jam. Berapa jam waktu yang dibutuhkan jika Tim A dan Tim B bekerja bersama?",
    "options": [
      "10 jam",
      "14 jam",
      "15 jam",
      "16 jam",
      "12 jam"
    ],
    "answer": "E",
    "explanation": "Waktu gabungan = (20 × 30) / (20 + 30) = 600 / 50 = 12 jam.",
    "tip": "Rumus cepat gabungan: (20 × 30) ÷ (20 + 30) = 600 ÷ 50 = 12 jam."
  },
  {
    "id": "tiu-pk-064",
    "subPattern": "proyek-dan-pekerjaan-gabungan",
    "difficulty": "mudah",
    "prompt": "Proyek perbaikan gedung arsip direncanakan selesai dalam 30 hari oleh 15 pekerja. Setelah berjalan 10 hari, proyek terhenti selama 5 hari karena kendala cuaca. Agar proyek tetap selesai tepat waktu, berapa pekerja tambahan yang diperlukan?",
    "options": [
      "5 orang",
      "3 orang",
      "4 orang",
      "6 orang",
      "8 orang"
    ],
    "answer": "A",
    "explanation": "Sisa waktu efektif = 30 - 10 - 5 = 15 hari. Tambahan pekerja = (Pekerja awal × Hari berhenti) / Sisa waktu = (15 × 5) / 15 = 5 orang.",
    "tip": "Rumus sakti proyek terhenti: Tambahan Pekerja = (Pekerja Awal × Lama Berhenti) ÷ Sisa Hari Kerja Efektif."
  },
  {
    "id": "tiu-pk-065",
    "subPattern": "proyek-dan-pekerjaan-gabungan",
    "difficulty": "mudah",
    "prompt": "Pembangunan pos pelayanan terpadu ditargetkan selesai dalam 40 hari oleh 18 pekerja. Setelah dikerjakan 16 hari, pekerjaan dihentikan selama 6 hari. Berapa orang pekerja tambahan yang harus ditambah agar pembangunan selesai sesuai jadwal awal?",
    "options": [
      "4 orang",
      "6 orang",
      "5 orang",
      "8 orang",
      "9 orang"
    ],
    "answer": "B",
    "explanation": "Sisa hari efektif = 40 - 16 - 6 = 18 hari. Tambahan pekerja = (18 × 6) / 18 = 6 orang.",
    "tip": "Hitung sisa hari efektif (40 - 16 - 6 = 18 hari), lalu gunakan rumus (18 pekerja × 6 hari libur) ÷ 18."
  },
  {
    "id": "tiu-pk-066",
    "subPattern": "proyek-dan-pekerjaan-gabungan",
    "difficulty": "mudah",
    "prompt": "Mesin pemindai lama dapat memproses tumpukan berkas dalam 18 menit. Jika dibantu mesin pemindai baru, pekerjaan yang sama selesai dalam 6 menit. Berapa menit waktu yang dibutuhkan jika hanya mesin pemindai baru yang bekerja sendiri?",
    "options": [
      "8 menit",
      "10 menit",
      "9 menit",
      "12 menit",
      "15 menit"
    ],
    "answer": "C",
    "explanation": "1/t_baru = 1/6 - 1/18 = 2/18 = 1/9. Jadi mesin baru sendiri membutuhkan 9 menit.",
    "tip": "Jika waktu gabungan dan salah satu waktu diketahui: t_B = (t_A × t_gab) ÷ (t_A - t_gab) = (18 × 6) ÷ (18 - 6) = 9."
  },
  {
    "id": "tiu-pk-067",
    "subPattern": "proyek-dan-pekerjaan-gabungan",
    "difficulty": "mudah",
    "prompt": "Proyek instalasi listrik dijadwalkan selesai dalam 25 hari oleh 12 teknisi. Setelah bekerja 10 hari, proyek libur selama 3 hari. Berapa teknisi tambahan yang diperlukan agar proyek selesai tepat pada hari ke-25?",
    "options": [
      "2 orang",
      "4 orang",
      "5 orang",
      "3 orang",
      "6 orang"
    ],
    "answer": "D",
    "explanation": "Sisa hari efektif = 25 - 10 - 3 = 12 hari. Tambahan teknisi = (12 × 3) / 12 = 3 orang.",
    "tip": "Gunakan rumus cepat: Tambahan = (12 × 3) ÷ (25 - 10 - 3) = 36 ÷ 12 = 3 orang."
  },
  {
    "id": "tiu-pk-068",
    "subPattern": "proyek-dan-pekerjaan-gabungan",
    "difficulty": "mudah",
    "prompt": "Farhan dapat mengecat pagar kantor dalam 15 jam, sedangkan Gilang dapat menyelesaikannya dalam 10 jam. Jika keduanya mengecat bersama-sama, berapa jam pagar tersebut selesai dicat?",
    "options": [
      "5 jam",
      "6,5 jam",
      "7 jam",
      "8 jam",
      "6 jam"
    ],
    "answer": "E",
    "explanation": "Waktu bersama = (15 × 10) / (15 + 10) = 150 / 25 = 6 jam.",
    "tip": "Gunakan (15 × 10) ÷ (15 + 10) = 150 ÷ 25 = 6 jam."
  },
  {
    "id": "tiu-pk-069",
    "subPattern": "proyek-dan-pekerjaan-gabungan",
    "difficulty": "mudah",
    "prompt": "Pekerjaan pengadaan taman kota direncanakan selesai dalam 50 hari oleh 24 pekerja. Setelah berjalan 22 hari, pekerjaan terhenti 4 hari. Berapa pekerja tambahan yang dibutuhkan agar taman selesai tepat waktu?",
    "options": [
      "4 orang",
      "3 orang",
      "5 orang",
      "6 orang",
      "8 orang"
    ],
    "answer": "A",
    "explanation": "Sisa hari efektif = 50 - 22 - 4 = 24 hari. Tambahan pekerja = (24 × 4) / 24 = 4 orang.",
    "tip": "Sisa hari efektif adalah 24 hari; karena sama dengan jumlah pekerja awal (24), tambahan pekerja tepat sama dengan jumlah hari libur (4)."
  },
  {
    "id": "tiu-pk-070",
    "subPattern": "proyek-dan-pekerjaan-gabungan",
    "difficulty": "mudah",
    "prompt": "Tiga staf input data A, B, dan C masing-masing dapat menyelesaikan entri satu paket survei dalam 12 jam, 15 jam, dan 20 jam. Jika ketiganya mengerjakan satu paket survei tersebut bersama-sama, berapa jam waktu yang diperlukan?",
    "options": [
      "4 jam",
      "5 jam",
      "4,5 jam",
      "5,5 jam",
      "6 jam"
    ],
    "answer": "B",
    "explanation": "Laju gabungan = 1/12 + 1/15 + 1/20 = (5 + 4 + 3)/60 = 12/60 = 1/5 bagian/jam. Waktu selesai = 5 jam.",
    "tip": "Samakan penyebut ke KPK dari 12, 15, dan 20 yaitu 60: (5 + 4 + 3)/60 = 12/60 = 1/5."
  },
  {
    "id": "tiu-pk-071",
    "subPattern": "proyek-dan-pekerjaan-gabungan",
    "difficulty": "sedang",
    "prompt": "Keran pengisi dapat memenuhi bak penampungan air dalam 12 menit, sedangkan saluran pembuangan di dasar bak dapat mengosongkan bak penuh dalam 18 menit. Jika bak dalam keadaan kosong lalu keran pengisi dan saluran pembuangan terbuka bersamaan, berapa menit bak akan penuh?",
    "options": [
      "24 menit",
      "30 menit",
      "36 menit",
      "32 menit",
      "40 menit"
    ],
    "answer": "C",
    "explanation": "Laju bersih pengisian = 1/12 - 1/18 = (3 - 2)/36 = 1/36 bagian/menit. Bak penuh dalam 36 menit.",
    "tip": "Untuk pengisian dikurangi kebocoran/pembuangan, gunakan rumus: (A × B) ÷ (B - A) = (12 × 18) ÷ (18 - 12) = 36 menit."
  },
  {
    "id": "tiu-pk-072",
    "subPattern": "proyek-dan-pekerjaan-gabungan",
    "difficulty": "sedang",
    "prompt": "Andi dapat menyelesaikan penyusunan modul dalam 12 hari, sedangkan Bima dalam 18 hari. Andi mengerjakan sendiri selama 4 hari pertama, lalu sisanya dikerjakan bersama Bima. Berapa hari waktu yang mereka perlukan untuk menyelesaikan sisa pekerjaan tersebut bersama-sama?",
    "options": [
      "4 hari",
      "4,5 hari",
      "5 hari",
      "4.8 hari",
      "5,4 hari"
    ],
    "answer": "D",
    "explanation": "Dalam 4 hari Andi menyelesaikan 4/12 = 1/3 bagian. Sisa pekerjaan = 2/3 bagian. Laju bersama = 1/12 + 1/18 = 5/36 bagian/hari. Waktu sisa = (2/3) / (5/36) = 24/5 = 4,8 hari.",
    "tip": "Hitung porsi sisa pekerjaan terlebih dahulu (1 - 4/12 = 2/3), lalu bagi dengan laju gabungan keduanya."
  },
  {
    "id": "tiu-pk-073",
    "subPattern": "proyek-dan-pekerjaan-gabungan",
    "difficulty": "sedang",
    "prompt": "Proyek pengecoran jalan direncanakan selesai dalam 45 hari oleh 28 pekerja. Setelah dikerjakan 15 hari, proyek terhenti 6 hari karena hujan deras. Berapa jumlah seluruh pekerja yang harus bekerja pada sisa hari agar proyek selesai tepat waktu?",
    "options": [
      "7 orang",
      "32 orang",
      "34 orang",
      "36 orang",
      "35 orang"
    ],
    "answer": "E",
    "explanation": "Sisa hari efektif = 45 - 15 - 6 = 24 hari. Tambahan pekerja = (28 × 6) / 24 = 7 orang. Total pekerja pada sisa hari = 28 + 7 = 35 orang.",
    "tip": "Perhatikan yang ditanyakan adalah 'jumlah seluruh pekerja pada sisa hari' (28 + 7 = 35), bukan hanya pekerja tambahan."
  },
  {
    "id": "tiu-pk-074",
    "subPattern": "proyek-dan-pekerjaan-gabungan",
    "difficulty": "sedang",
    "prompt": "Sinta dan Rani jika bekerja bersama dapat menyelesaikan audit inventaris dalam 8 hari. Mereka bekerja bersama selama 5 hari, kemudian Sinta ditugaskan ke luar kota sehingga Rani menyelesaikan sisanya seorang diri dalam 9 hari. Jika sejak awal Rani bekerja seorang diri, berapa hari waktu yang ia butuhkan untuk menyelesaikan seluruh audit tersebut?",
    "options": [
      "24 hari",
      "18 hari",
      "20 hari",
      "21 hari",
      "27 hari"
    ],
    "answer": "A",
    "explanation": "Dalam 5 hari bersama, selesai 5/8 bagian. Sisa 3/8 bagian diselesaikan Rani dalam 9 hari. Maka waktu Rani untuk 1 bagian penuh = 9 × (8/3) = 24 hari.",
    "tip": "Sisa pekerjaan setelah 5 hari dari target 8 hari adalah 3/8 bagian; jika 3/8 bagian butuh 9 hari, maka 1 bagian penuh = 9 × 8/3 = 24 hari."
  },
  {
    "id": "tiu-pk-075",
    "subPattern": "proyek-dan-pekerjaan-gabungan",
    "difficulty": "sedang",
    "prompt": "Tiga mesin cetak A, B, dan C bekerja bersama dapat mencetak ribuan formulir dalam 4 jam. Mesin A sendiri membutuhkan 10 jam, dan Mesin B sendiri membutuhkan 12 jam. Berapa jam waktu yang dibutuhkan jika hanya Mesin C yang digunakan untuk mencetak seluruh formulir tersebut?",
    "options": [
      "12 jam",
      "15 jam",
      "14 jam",
      "16 jam",
      "18 jam"
    ],
    "answer": "B",
    "explanation": "1/C = 1/4 - 1/10 - 1/12 = (15 - 6 - 5)/60 = 4/60 = 1/15. Jadi Mesin C sendiri membutuhkan 15 jam.",
    "tip": "Gunakan KPK 60 untuk mengurangkan laju gabungan (15/60) dengan laju A (6/60) dan B (5/60)."
  },
  {
    "id": "tiu-pk-076",
    "subPattern": "proyek-dan-pekerjaan-gabungan",
    "difficulty": "sedang",
    "prompt": "Proyek renovasi jembatan ditargetkan selesai dalam 60 hari oleh 36 pekerja. Setelah berjalan 25 hari, pekerjaan terhenti 7 hari. Berapa pekerja tambahan yang harus didatangkan agar proyek selesai tepat waktu?",
    "options": [
      "7 orang",
      "8 orang",
      "9 orang",
      "10 orang",
      "12 orang"
    ],
    "answer": "C",
    "explanation": "Sisa hari efektif = 60 - 25 - 7 = 28 hari. Tambahan pekerja = (36 × 7) / 28 = 36 / 4 = 9 orang.",
    "tip": "Tambahan pekerja = (36 × 7) ÷ (60 - 25 - 7) = (36 × 7) ÷ 28 = 9 orang."
  },
  {
    "id": "tiu-pk-077",
    "subPattern": "proyek-dan-pekerjaan-gabungan",
    "difficulty": "sedang",
    "prompt": "Kapasitas kerja seorang teknisi senior sama dengan 2 kali kapasitas teknisi junior. Sebuah instalasi server dapat diselesaikan oleh 3 teknisi senior dalam 8 hari. Berapa hari instalasi tersebut selesai jika dikerjakan oleh 2 teknisi senior dan 4 teknisi junior secara bersama-sama?",
    "options": [
      "4 hari",
      "5 hari",
      "7 hari",
      "6 hari",
      "8 hari"
    ],
    "answer": "D",
    "explanation": "1 senior = 2 junior, sehingga 3 senior = 6 junior (beban kerja = 6 × 8 = 48 junior-hari). Tim baru: 2 senior + 4 junior = 4 + 4 = 8 junior setara. Waktu = 48 / 8 = 6 hari.",
    "tip": "Konversi seluruh pekerja ke satuan yang sama (teknisi junior) sebelum menerapkan perbandingan berbalik nilai."
  },
  {
    "id": "tiu-pk-078",
    "subPattern": "proyek-dan-pekerjaan-gabungan",
    "difficulty": "sedang",
    "prompt": "Sebuah kolam renang dapat diisi penuh oleh Pipa P dalam 6 jam dan oleh Pipa Q dalam 9 jam. Pipa P dibuka sendiri selama 2 jam pertama, lalu Pipa Q ikut dibuka. Berapa jam total waktu pengisian kolam sejak Pipa P pertama kali dibuka hingga kolam penuh?",
    "options": [
      "3,6 jam",
      "4 jam",
      "4,8 jam",
      "5 jam",
      "4.4 jam"
    ],
    "answer": "E",
    "explanation": "Dalam 2 jam pertama, Pipa P mengisi 2/6 = 1/3 bagian. Sisa 2/3 bagian diisi bersama dengan laju 1/6 + 1/9 = 5/18 bagian/jam. Waktu sisa = (2/3) / (5/18) = 12/5 = 2,4 jam. Total waktu = 2 + 2,4 = 4,4 jam.",
    "tip": "Jangan lupa menjumlahkan 2 jam awal dengan waktu pengisian bersama (2 + 2,4 = 4,4 jam)."
  },
  {
    "id": "tiu-pk-079",
    "subPattern": "proyek-dan-pekerjaan-gabungan",
    "difficulty": "sedang",
    "prompt": "Pembuatan aplikasi layanan publik dijadwalkan selesai dalam 36 hari oleh 10 programmer. Setelah bekerja 12 hari, pimpinan meminta agar aplikasi selesai 4 hari lebih cepat dari jadwal semula. Berapa programmer tambahan yang diperlukan untuk sisa waktu yang ada?",
    "options": [
      "2 orang",
      "1 orang",
      "3 orang",
      "4 orang",
      "5 orang"
    ],
    "answer": "A",
    "explanation": "Sisa beban kerja = 10 orang × (36 - 12) hari = 240 orang-hari. Sisa waktu baru karena dipercepat 4 hari = 24 - 4 = 20 hari. Programmer yang dibutuhkan = 240 / 20 = 12 orang. Tambahan = 12 - 10 = 2 orang.",
    "tip": "Bandingkan sisa hari rencana (24 hari) dengan sisa hari target baru (20 hari): 10 × (24/20) = 12 orang."
  },
  {
    "id": "tiu-pk-080",
    "subPattern": "proyek-dan-pekerjaan-gabungan",
    "difficulty": "sedang",
    "prompt": "Dodi dapat menyelesaikan pemangkasan taman dalam 15 jam, sedangkan Eka dalam 20 jam. Mereka bekerja bersama selama 6 jam, lalu Eka melanjutkan sisanya seorang diri. Berapa jam waktu yang dibutuhkan Eka untuk menyelesaikan sisa pekerjaan tersebut?",
    "options": [
      "4 jam",
      "6 jam",
      "5 jam",
      "7 jam",
      "8 jam"
    ],
    "answer": "B",
    "explanation": "Laju bersama = 1/15 + 1/20 = 7/60 bagian/jam. Dalam 6 jam selesai 42/60 = 7/10 bagian. Sisa 3/10 bagian dikerjakan Eka (laju 1/20): waktu = (3/10) × 20 = 6 jam.",
    "tip": "Hitung bagian yang selesai dalam 6 jam bersama (6 × 7/60 = 7/10), lalu kalikan sisa 3/10 dengan waktu penuh Eka (20 jam)."
  },
  {
    "id": "tiu-pk-081",
    "subPattern": "proyek-dan-pekerjaan-gabungan",
    "difficulty": "sulit",
    "prompt": "Proyek pembangunan gudang logistik ditargetkan selesai dalam 40 hari oleh 21 pekerja. Setelah berjalan 12 hari, pekerjaan terhenti selama 7 hari. Diketahui X adalah jumlah pekerja tambahan agar proyek selesai tepat waktu, dan Y = 7. Manakah hubungan yang benar antara kuantitas X dan Y?",
    "options": [
      "X > Y",
      "X < Y",
      "X = Y",
      "X = 2Y",
      "Hubungan X dan Y tidak dapat ditentukan"
    ],
    "answer": "C",
    "explanation": "Sisa hari efektif = 40 - 12 - 7 = 21 hari. Tambahan pekerja X = (21 × 7) / 21 = 7 orang. Karena Y = 7, maka X = Y.",
    "tip": "Gunakan rumus X = (N × hari libur) ÷ sisa hari efektif = (21 × 7) ÷ 21 = 7."
  },
  {
    "id": "tiu-pk-082",
    "subPattern": "proyek-dan-pekerjaan-gabungan",
    "difficulty": "sulit",
    "prompt": "Mesin A dan Mesin B bekerja bersama dapat menyelesaikan pesanan cetak dalam 12 jam. Mesin B dan Mesin C bersama selesai dalam 15 jam, sedangkan Mesin A dan Mesin C bersama selesai dalam 20 jam. Jika ketiga mesin (A, B, dan C) dioperasikan bersama-sama, berapa jam pesanan tersebut selesai?",
    "options": [
      "8 jam",
      "9 jam",
      "10,5 jam",
      "10 jam",
      "12 jam"
    ],
    "answer": "D",
    "explanation": "(1/A + 1/B) + (1/B + 1/C) + (1/A + 1/C) = 1/12 + 1/15 + 1/20 = (5 + 4 + 3)/60 = 12/60 = 1/5. Maka 2(1/A + 1/B + 1/C) = 1/5 → 1/A + 1/B + 1/C = 1/10. Waktu ketiganya bersama = 10 jam.",
    "tip": "Jumlahkan ketiga laju pasangan lalu bagi 2 karena setiap mesin terhitung dua kali: (1/12 + 1/15 + 1/20) ÷ 2 = 1/10."
  },
  {
    "id": "tiu-pk-083",
    "subPattern": "proyek-dan-pekerjaan-gabungan",
    "difficulty": "sulit",
    "prompt": "Sebuah pekerjaan renovasi dapat diselesaikan oleh 4 tukang ahli atau 6 tukang pemula dalam waktu 20 hari. Berapa hari pekerjaan tersebut selesai jika dikerjakan bersama oleh 6 tukang ahli dan 11 tukang pemula?",
    "options": [
      "5 hari",
      "7 hari",
      "8 hari",
      "9 hari",
      "6 hari"
    ],
    "answer": "E",
    "explanation": "4 ahli = 6 pemula → 1 ahli = 1,5 pemula. Beban total = 6 pemula × 20 hari = 120 pemula-hari. Tim baru: 6 ahli + 11 pemula = (6 × 1,5) + 11 = 9 + 11 = 20 pemula setara. Waktu = 120 / 20 = 6 hari.",
    "tip": "Samakan satuan tenaga kerja ke tukang pemula (6 ahli = 9 pemula), lalu jumlahkan (9 + 11 = 20 pemula)."
  },
  {
    "id": "tiu-pk-084",
    "subPattern": "proyek-dan-pekerjaan-gabungan",
    "difficulty": "sulit",
    "prompt": "Pekerja A dapat menyelesaikan tugas dalam 18 hari, sedangkan Pekerja B adalah 50% lebih cepat daripada Pekerja A. Diketahui X adalah waktu (dalam hari) jika A dan B bekerja bersama, dan Y = 7. Manakah hubungan yang benar antara kuantitas X dan Y?",
    "options": [
      "X > Y",
      "X < Y",
      "X = Y",
      "2X = Y",
      "Hubungan X dan Y tidak dapat ditentukan"
    ],
    "answer": "A",
    "explanation": "Laju A = 1/18. Karena B 50% lebih cepat, laju B = 1,5 × (1/18) = 1/12. Laju bersama = 1/18 + 1/12 = 5/36 bagian/hari, sehingga X = 36/5 = 7,2 hari. Karena 7,2 > 7, maka X > Y.",
    "tip": "Jika B 50% lebih cepat (efisiensi 1,5 kali A), maka gabungan A + B setara dengan 2,5 kali laju A: X = 18 ÷ 2,5 = 7,2 hari."
  },
  {
    "id": "tiu-pk-085",
    "subPattern": "proyek-dan-pekerjaan-gabungan",
    "difficulty": "sulit",
    "prompt": "Proyek pembangunan saluran irigasi direncanakan selesai oleh 32 pekerja dalam 48 hari. Setelah bekerja 18 hari, 8 pekerja dipindahkan ke proyek lain. Berapa hari keterlambatan penyelesaian proyek dibandingkan jadwal semula?",
    "options": [
      "6 hari",
      "10 hari",
      "8 hari",
      "12 hari",
      "15 hari"
    ],
    "answer": "B",
    "explanation": "Sisa rencana setelah 18 hari = 30 hari untuk 32 pekerja (beban sisa = 32 × 30 = 960 orang-hari). Sisa pekerja = 32 - 8 = 24 orang. Waktu menyelesaikan sisa = 960 / 24 = 40 hari. Keterlambatan = 40 - 30 = 10 hari.",
    "tip": "Sisa waktu baru = (32 / 24) × 30 = 40 hari; selisih dari sisa waktu rencana (30 hari) adalah 10 hari terlambat."
  },
  {
    "id": "tiu-pk-086",
    "subPattern": "proyek-dan-pekerjaan-gabungan",
    "difficulty": "sulit",
    "prompt": "Sebuah tangki memiliki dua pipa pengisi (Pipa A penuh dalam 8 jam, Pipa B penuh dalam 12 jam) dan satu pipa penguras C. Jika ketiga pipa dibuka bersamaan saat tangki kosong, tangki baru penuh dalam 6 jam. Berapa jam waktu yang dibutuhkan Pipa C sendirian untuk menguras tangki yang penuh?",
    "options": [
      "16 jam",
      "18 jam",
      "24 jam",
      "20 jam",
      "30 jam"
    ],
    "answer": "C",
    "explanation": "1/8 + 1/12 - 1/C = 1/6 → 5/24 - 1/6 = 1/C → (5 - 4)/24 = 1/24. Jadi Pipa C menguras tangki penuh dalam 24 jam.",
    "tip": "Susun persamaan laju: Laju A + Laju B - Laju C = Laju Total (1/8 + 1/12 - 1/C = 1/6)."
  },
  {
    "id": "tiu-pk-087",
    "subPattern": "proyek-dan-pekerjaan-gabungan",
    "difficulty": "sulit",
    "prompt": "Arif dan Bayu bekerja bersama dapat menyelesaikan pengecatan gedung dalam 12 hari. Jika Arif bekerja 6 hari lalu dilanjutkan Bayu selama 12 hari, pekerjaan tersebut selesai 70%. Berapa hari waktu yang dibutuhkan Arif jika ia mengerjakan seluruh pengecatan seorang diri?",
    "options": [
      "15 hari",
      "18 hari",
      "24 hari",
      "20 hari",
      "30 hari"
    ],
    "answer": "D",
    "explanation": "Arif 6 hari + Bayu 12 hari setara dengan (Arif & Bayu bersama 6 hari) + (Bayu sendiri 6 hari). Bersama 6 hari menyelesaikan 6/12 = 50%. Maka Bayu sendiri 6 hari menyelesaikan 70% - 50% = 20% (1/5 bagian), sehingga Bayu sendiri butuh 30 hari. Maka 1/Arif = 1/12 - 1/30 = (5 - 2)/60 = 3/60 = 1/20, sehingga Arif sendiri membutuhkan 20 hari.",
    "tip": "Kelompokkan menjadi 6 hari kerja bersama (selesai 50%) ditambah 6 hari kerja Bayu sendiri (selesai 20%)."
  },
  {
    "id": "tiu-pk-088",
    "subPattern": "proyek-dan-pekerjaan-gabungan",
    "difficulty": "sulit",
    "prompt": "Sebuah proyek jalan tol sepanjang 15 km dikerjakan oleh 45 pekerja. Dalam 20 hari pertama, mereka baru menyelesaikan 5 km. Agar sisa jalan sepanjang 10 km selesai tepat dalam 30 hari berikutnya, berapa pekerja tambahan yang harus ditambah?",
    "options": [
      "10 orang",
      "12 orang",
      "18 orang",
      "20 orang",
      "15 orang"
    ],
    "answer": "E",
    "explanation": "Untuk 5 km butuh 45 × 20 = 900 orang-hari (berarti 180 orang-hari per km). Sisa 10 km membutuhkan 10 × 180 = 1800 orang-hari. Agar selesai dalam 30 hari, diperlukan 1800 / 30 = 60 pekerja. Tambahan = 60 - 45 = 15 orang.",
    "tip": "Gunakan perbandingan gabungan: (P1 × H1) / S1 = (P2 × H2) / S2 → (45 × 20) / 5 = (P2 × 30) / 10."
  },
  {
    "id": "tiu-pk-089",
    "subPattern": "proyek-dan-pekerjaan-gabungan",
    "difficulty": "sulit",
    "prompt": "Tim X dapat menyelesaikan digitalisasi 600 berkas dalam 5 jam, sedangkan Tim Y dapat menyelesaikan 900 berkas dalam 6 jam. Diketahui P adalah waktu (jam) untuk menyelesaikan 1.350 berkas jika kedua tim bekerja bersama, dan Q = 5. Manakah hubungan yang benar antara kuantitas P dan Q?",
    "options": [
      "P = Q",
      "P > Q",
      "P < Q",
      "P = 1,2Q",
      "Hubungan P dan Q tidak dapat ditentukan"
    ],
    "answer": "A",
    "explanation": "Laju Tim X = 600 / 5 = 120 berkas/jam. Laju Tim Y = 900 / 6 = 150 berkas/jam. Laju gabungan = 120 + 150 = 270 berkas/jam. Waktu P = 1.350 / 270 = 5 jam. Karena Q = 5, maka P = Q.",
    "tip": "Jika output nyata diketahui (jumlah berkas), hitung laju berkas/jam masing-masing tim lalu jumlahkan langsung."
  },
  {
    "id": "tiu-pk-090",
    "subPattern": "proyek-dan-pekerjaan-gabungan",
    "difficulty": "sulit",
    "prompt": "Suatu proyek ditargetkan selesai dalam 50 hari oleh 30 pekerja. Setelah 15 hari berjalan, proyek terhenti 5 hari. Saat dilanjutkan, efisiensi seluruh pekerja menurun menjadi 87,5% (7/8) akibat cuaca buruk. Berapa pekerja tambahan (dengan efisiensi yang sama 7/8) yang diperlukan agar proyek tetap selesai tepat waktu?",
    "options": [
      "5 orang",
      "10 orang",
      "8 orang",
      "12 orang",
      "15 orang"
    ],
    "answer": "B",
    "explanation": "Sisa beban setelah 15 hari = 30 × 35 = 1050 orang-hari standar. Sisa hari efektif = 50 - 15 - 5 = 30 hari. Pekerja standar yang dibutuhkan = 1050 / 30 = 35 orang standar. Karena efisiensi menjadi 7/8, jumlah pekerja nyata yang dibutuhkan = 35 / (7/8) = 40 orang. Tambahan = 40 - 30 = 10 orang.",
    "tip": "Hitung kebutuhan pekerja standar terlebih dahulu (35 orang), lalu bagi dengan efisiensi 7/8 sehingga diperoleh 40 orang."
  },
  {
    "id": "tiu-pk-091",
    "subPattern": "kecepatan-jarak-dan-waktu",
    "difficulty": "mudah",
    "prompt": "Kota A dan Kota B berjarak 210 km. Mobil P berangkat dari Kota A menuju Kota B dengan kecepatan 60 km/jam, dan pada saat bersamaan Mobil Q berangkat dari Kota B menuju Kota A dengan kecepatan 80 km/jam. Jika keduanya berangkat pukul 07.00, pada pukul berapa kedua mobil tersebut berpapasan?",
    "options": [
      "08.15",
      "08.20",
      "08.45",
      "08.30",
      "09.00"
    ],
    "answer": "D",
    "explanation": "Waktu berpapasan = Jarak / (v_P + v_Q) = 210 / (60 + 80) = 210 / 140 = 1,5 jam (1 jam 30 menit). Berpapasan pukul 07.00 + 01.30 = 08.30.",
    "tip": "Saat dua kendaraan bergerak saling mendekat pada waktu berangkat yang sama, bagi jarak total dengan jumlah kedua kecepatan."
  },
  {
    "id": "tiu-pk-092",
    "subPattern": "kecepatan-jarak-dan-waktu",
    "difficulty": "mudah",
    "prompt": "Sebuah kereta komuter menempuh jarak 96 km dalam waktu 1 jam 12 menit. Berapakah kecepatan rata-rata kereta komuter tersebut dalam satuan km/jam?",
    "options": [
      "72 km/jam",
      "75 km/jam",
      "84 km/jam",
      "90 km/jam",
      "80 km/jam"
    ],
    "answer": "E",
    "explanation": "1 jam 12 menit = 1 + 12/60 = 1,2 jam. Kecepatan = 96 / 1,2 = 80 km/jam.",
    "tip": "Ubah 12 menit menjadi pecahan jam (12/60 = 0,2 jam) sehingga waktu tempuh = 1,2 jam."
  },
  {
    "id": "tiu-pk-093",
    "subPattern": "kecepatan-jarak-dan-waktu",
    "difficulty": "mudah",
    "prompt": "Riko bersepeda dengan kecepatan tetap 18 km/jam. Berapa meter jarak yang ditempuh Riko dalam waktu 25 detik?",
    "options": [
      "125 meter",
      "100 meter",
      "115 meter",
      "150 meter",
      "175 meter"
    ],
    "answer": "A",
    "explanation": "18 km/jam = 18 × (1000 / 3600) = 5 meter/detik. Dalam 25 detik jarak = 5 × 25 = 125 meter.",
    "tip": "Konversi cepat km/jam ke m/detik adalah membagi dengan 3,6 (18 ÷ 3,6 = 5 m/detik)."
  },
  {
    "id": "tiu-pk-094",
    "subPattern": "kecepatan-jarak-dan-waktu",
    "difficulty": "mudah",
    "prompt": "Dua pelari berdiri terpisah sejauh 450 meter. Mereka berlari saling mendekat secara bersamaan dengan kecepatan masing-masing 4 m/detik dan 5 m/detik. Setelah berapa detik kedua pelari tersebut akan berpapasan?",
    "options": [
      "40 detik",
      "50 detik",
      "45 detik",
      "55 detik",
      "60 detik"
    ],
    "answer": "B",
    "explanation": "Waktu berpapasan = 450 / (4 + 5) = 450 / 9 = 50 detik.",
    "tip": "Jumlahkan laju kedua pelari (4 + 5 = 9 m/detik), lalu bagi jarak awal dengan laju gabungan tersebut."
  },
  {
    "id": "tiu-pk-095",
    "subPattern": "kecepatan-jarak-dan-waktu",
    "difficulty": "mudah",
    "prompt": "Mobil dinas berangkat pukul 06.15 menuju lokasi peninjauan sejauh 165 km dengan kecepatan rata-rata 60 km/jam. Pada pukul berapa mobil dinas tersebut tiba di lokasi jika tidak berhenti di jalan?",
    "options": [
      "08.45",
      "08.50",
      "09.00",
      "09.15",
      "09.30"
    ],
    "answer": "C",
    "explanation": "Waktu tempuh = 165 / 60 = 2,75 jam = 2 jam 45 menit. Waktu tiba = 06.15 + 02.45 = 09.00.",
    "tip": "Pecahan 0,75 jam adalah 3/4 × 60 menit = 45 menit."
  },
  {
    "id": "tiu-pk-096",
    "subPattern": "kecepatan-jarak-dan-waktu",
    "difficulty": "mudah",
    "prompt": "Arman berangkat dari kantor pukul 08.00 dengan kecepatan 45 km/jam. Setengah jam kemudian, Bayu menyusul dari tempat dan rute yang sama dengan kecepatan 60 km/jam. Setelah berapa jam sejak Bayu berangkat ia berhasil menyusul Arman?",
    "options": [
      "1 jam",
      "1,25 jam",
      "2 jam",
      "1.5 jam",
      "2,5 jam"
    ],
    "answer": "D",
    "explanation": "Selisih jarak saat Bayu berangkat = 45 × 0,5 = 22,5 km. Waktu menyusul = Selisih Jarak / (v_Bayu - v_Arman) = 22,5 / (60 - 45) = 22,5 / 15 = 1,5 jam.",
    "tip": "Rumus menyusul: t_susul = (v1 × Δt) ÷ (v2 - v1) = (45 × 0,5) ÷ 15 = 1,5 jam."
  },
  {
    "id": "tiu-pk-097",
    "subPattern": "kecepatan-jarak-dan-waktu",
    "difficulty": "mudah",
    "prompt": "Sebuah kapal patroli menempuh jarak 84 mil laut dalam waktu 3,5 jam. Jika kapal tersebut mempertahankan laju yang sama, berapa mil laut yang ditempuh dalam 5 jam?",
    "options": [
      "108 mil laut",
      "112 mil laut",
      "125 mil laut",
      "132 mil laut",
      "120 mil laut"
    ],
    "answer": "E",
    "explanation": "Kecepatan kapal = 84 / 3,5 = 24 mil laut/jam. Dalam 5 jam ditempuh 24 × 5 = 120 mil laut.",
    "tip": "Bagi 84 dengan 3,5 (sama dengan 168 ÷ 7 = 24), lalu kalikan dengan 5."
  },
  {
    "id": "tiu-pk-098",
    "subPattern": "kecepatan-jarak-dan-waktu",
    "difficulty": "mudah",
    "prompt": "Jarak rumah Dina ke stasiun adalah 18 km. Ia berangkat pukul 06.20 menggunakan sepeda motor dengan kecepatan rata-rata 45 km/jam. Pada pukul berapa Dina tiba di stasiun?",
    "options": [
      "06.44",
      "06.40",
      "06.42",
      "06.45",
      "06.48"
    ],
    "answer": "A",
    "explanation": "Waktu tempuh = (18 / 45) × 60 menit = (2 / 5) × 60 = 24 menit. Waktu tiba = 06.20 + 24 menit = 06.44.",
    "tip": "Kalikan rasio (Jarak / Kecepatan) langsung dengan 60 untuk mendapatkan durasi dalam menit."
  },
  {
    "id": "tiu-pk-099",
    "subPattern": "kecepatan-jarak-dan-waktu",
    "difficulty": "mudah",
    "prompt": "Dua mobil berangkat dari titik yang sama menuju arah yang berlawanan (saling menjauh) dengan kecepatan masing-masing 55 km/jam dan 65 km/jam. Berapa km jarak antara kedua mobil tersebut setelah berjalan selama 2 jam 15 menit?",
    "options": [
      "240 km",
      "270 km",
      "255 km",
      "280 km",
      "300 km"
    ],
    "answer": "B",
    "explanation": "Laju saling menjauh = 55 + 65 = 120 km/jam. Dalam 2 jam 15 menit (2,25 jam), jarak keduanya = 120 × 2,25 = 270 km.",
    "tip": "Jumlahkan kecepatan keduanya (120 km/jam) lalu kalikan dengan 2,25 jam (9/4 jam)."
  },
  {
    "id": "tiu-pk-100",
    "subPattern": "kecepatan-jarak-dan-waktu",
    "difficulty": "mudah",
    "prompt": "Seorang atlet lari maraton berlari dengan kecepatan konstan 15 km/jam. Berapa menit waktu yang diperlukan atlet tersebut untuk menempuh jarak 6,5 km?",
    "options": [
      "24 menit",
      "25 menit",
      "26 menit",
      "28 menit",
      "30 menit"
    ],
    "answer": "C",
    "explanation": "Kecepatan 15 km/jam = 15 km per 60 menit = 1 km setiap 4 menit. Untuk 6,5 km dibutuhkan 6,5 × 4 = 26 menit.",
    "tip": "Konversi 15 km/jam menjadi 4 menit per km, sehingga untuk 6,5 km cukup 6,5 × 4 = 26 menit."
  }
];
