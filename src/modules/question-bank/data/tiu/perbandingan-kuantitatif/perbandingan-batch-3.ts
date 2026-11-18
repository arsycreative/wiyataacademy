import type { QuestionDraft } from "@/modules/question-bank/domain/question";

export const perbandinganBatch3Drafts: readonly QuestionDraft[] = [
  {
    "id": "tiu-pk-101",
    "subPattern": "kecepatan-jarak-dan-waktu",
    "difficulty": "sedang",
    "prompt": "Kota P dan Kota Q berjarak 255 km. Bus A berangkat dari Kota P menuju Kota Q pukul 07.00 dengan kecepatan 60 km/jam. Bus B berangkat dari Kota Q menuju Kota P pukul 07.30 dengan kecepatan 75 km/jam. Pada pukul berapa kedua bus tersebut berpapasan?",
    "options": [
      "08.50",
      "09.00",
      "09.15",
      "09.10",
      "09.20"
    ],
    "answer": "D",
    "explanation": "Selama 30 menit pertama (07.00–07.30), Bus A sudah menempuh 60 × 0,5 = 30 km. Sisa jarak pada pukul 07.30 adalah 255 - 30 = 225 km. Waktu papasan sejak pukul 07.30 = 225 / (60 + 75) = 225 / 135 = 5/3 jam = 1 jam 40 menit. Kedua bus berpapasan pukul 07.30 + 01.40 = 09.10.",
    "tip": "Kurangi jarak total dengan jarak yang sudah ditempuh kendaraan pertama sebelum kendaraan kedua berangkat."
  },
  {
    "id": "tiu-pk-102",
    "subPattern": "kecepatan-jarak-dan-waktu",
    "difficulty": "sedang",
    "prompt": "Seorang pegawai mengendarai mobil dari kantor ke bandara dengan kecepatan rata-rata 60 km/jam, lalu kembali dari bandara ke kantor melalui rute yang sama dengan kecepatan rata-rata 40 km/jam. Berapakah kecepatan rata-rata perjalanan pulang-pergi pegawai tersebut?",
    "options": [
      "45 km/jam",
      "50 km/jam",
      "52 km/jam",
      "54 km/jam",
      "48 km/jam"
    ],
    "answer": "E",
    "explanation": "Untuk jarak pergi dan pulang yang sama, kecepatan rata-rata = (2 × v1 × v2) / (v1 + v2) = (2 × 60 × 40) / (60 + 40) = 4800 / 100 = 48 km/jam.",
    "tip": "Jangan merata-ratakan (60 + 40)/2 = 50! Gunakan rata-rata harmonis: 2 × v1 × v2 ÷ (v1 + v2)."
  },
  {
    "id": "tiu-pk-103",
    "subPattern": "kecepatan-jarak-dan-waktu",
    "difficulty": "sedang",
    "prompt": "Truk logistik berangkat dari gudang pukul 05.30 dengan kecepatan 50 km/jam. Pada pukul 06.18, mobil pengawal berangkat dari gudang yang sama menyusul truk tersebut dengan kecepatan 70 km/jam. Pada pukul berapa mobil pengawal tepat menyusul truk logistik?",
    "options": [
      "08.18",
      "07.48",
      "08.00",
      "08.12",
      "08.30"
    ],
    "answer": "A",
    "explanation": "Selisih waktu berangkat = 48 menit = 0,8 jam. Selisih jarak = 50 × 0,8 = 40 km. Waktu menyusul = 40 / (70 - 50) = 40 / 20 = 2 jam. Mobil menyusul pada pukul 06.18 + 02.00 = 08.18.",
    "tip": "Hitung jarak keunggulan truk selama 48 menit (4/5 jam × 50 = 40 km), lalu bagi dengan selisih kecepatan (20 km/jam)."
  },
  {
    "id": "tiu-pk-104",
    "subPattern": "kecepatan-jarak-dan-waktu",
    "difficulty": "sedang",
    "prompt": "Jarak Kota M dan N adalah 240 km. Hendra berangkat dari M ke N pukul 06.30 dengan kecepatan 60 km/jam, tetapi di tengah jalan ia beristirahat selama 25 menit. Pada pukul berapa Hendra tiba di Kota N?",
    "options": [
      "10.30",
      "10.55",
      "10.45",
      "11.00",
      "11.05"
    ],
    "answer": "B",
    "explanation": "Waktu berkendara murni = 240 / 60 = 4 jam. Ditambah istirahat 25 menit = 4 jam 25 menit. Waktu tiba = 06.30 + 04.25 = 10.55.",
    "tip": "Tambahkan durasi istirahat setelah menghitung waktu tempuh murni di jalan."
  },
  {
    "id": "tiu-pk-105",
    "subPattern": "kecepatan-jarak-dan-waktu",
    "difficulty": "sedang",
    "prompt": "Kereta A berangkat dari Stasiun Barat menuju Stasiun Timur dengan kecepatan 70 km/jam, dan pada saat bersamaan Kereta B berangkat dari Stasiun Timur menuju Stasiun Barat dengan kecepatan 80 km/jam. Keduanya berpapasan setelah 2 jam 20 menit. Berapakah jarak antara Stasiun Barat dan Stasiun Timur?",
    "options": [
      "300 km",
      "325 km",
      "350 km",
      "360 km",
      "375 km"
    ],
    "answer": "C",
    "explanation": "Laju gabungan = 70 + 80 = 150 km/jam. Waktu 2 jam 20 menit = 7/3 jam. Jarak total = 150 × (7/3) = 350 km.",
    "tip": "Ubah 2 jam 20 menit menjadi pecahan 7/3 jam agar mudah dikalikan dengan kecepatan gabungan 150 km/jam."
  },
  {
    "id": "tiu-pk-106",
    "subPattern": "kecepatan-jarak-dan-waktu",
    "difficulty": "sedang",
    "prompt": "Pada saat dua mobil yang bergerak saling mendekat dari Kota X (kecepatan 55 km/jam) dan Kota Y (kecepatan 65 km/jam) berpapasan, mobil dari Kota Y telah menempuh jarak 195 km. Berapakah jarak total antara Kota X dan Kota Y?",
    "options": [
      "330 km",
      "345 km",
      "375 km",
      "360 km",
      "390 km"
    ],
    "answer": "D",
    "explanation": "Waktu sampai berpapasan = 195 / 65 = 3 jam. Dalam 3 jam, total jarak kedua mobil = (55 + 65) × 3 = 120 × 3 = 360 km.",
    "tip": "Cari waktu berpapasan dari jarak dan kecepatan salah satu mobil (195 ÷ 65 = 3 jam), lalu kalikan dengan jumlah kecepatan."
  },
  {
    "id": "tiu-pk-107",
    "subPattern": "kecepatan-jarak-dan-waktu",
    "difficulty": "sedang",
    "prompt": "Sebuah perahu motor memiliki kecepatan 16 km/jam di air tenang. Jika perahu tersebut berlayar melawan arus sungai yang berkecepatan 4 km/jam, berapa jam waktu yang diperlukan untuk menempuh jarak 42 km ke arah hulu?",
    "options": [
      "2,5 jam",
      "3 jam",
      "4 jam",
      "4,5 jam",
      "3.5 jam"
    ],
    "answer": "E",
    "explanation": "Kecepatan efektif melawan arus = 16 - 4 = 12 km/jam. Waktu tempuh = 42 / 12 = 3,5 jam.",
    "tip": "Saat melawan arus (ke hulu), kurangi kecepatan perahu dengan kecepatan arus sungai sebelum membagi jarak."
  },
  {
    "id": "tiu-pk-108",
    "subPattern": "kecepatan-jarak-dan-waktu",
    "difficulty": "sedang",
    "prompt": "Seorang kurir harus menempuh jarak 150 km dalam waktu 2,5 jam. Pada 1 jam pertama ia hanya bisa melaju dengan kecepatan 45 km/jam karena padatnya lalu lintas. Berapa kecepatan rata-rata yang harus ia tempuh pada sisa waktu agar tiba tepat waktu?",
    "options": [
      "70 km/jam",
      "60 km/jam",
      "65 km/jam",
      "75 km/jam",
      "80 km/jam"
    ],
    "answer": "A",
    "explanation": "Jarak yang sudah ditempuh = 45 km. Sisa jarak = 150 - 45 = 105 km. Sisa waktu = 2,5 - 1 = 1,5 jam. Kecepatan sisa = 105 / 1,5 = 70 km/jam.",
    "tip": "Hitung sisa jarak (105 km) dan sisa waktu (1,5 jam) secara terpisah, lalu bagi keduanya."
  },
  {
    "id": "tiu-pk-109",
    "subPattern": "kecepatan-jarak-dan-waktu",
    "difficulty": "sedang",
    "prompt": "Sebuah kereta sepanjang 140 meter melaju dengan kecepatan 72 km/jam melewati sebuah jembatan yang panjangnya 260 meter. Berapa detik waktu yang dibutuhkan sejak bagian depan kereta masuk jembatan hingga bagian belakang kereta lepas dari jembatan?",
    "options": [
      "15 detik",
      "20 detik",
      "18 detik",
      "22 detik",
      "25 detik"
    ],
    "answer": "B",
    "explanation": "Kecepatan 72 km/jam = 20 m/detik. Total jarak yang harus ditempuh ujung depan kereta = panjang jembatan + panjang kereta = 260 + 140 = 400 meter. Waktu = 400 / 20 = 20 detik.",
    "tip": "Saat kereta melewati jembatan/terowongan, jarak total yang ditempuh adalah Panjang Jembatan + Panjang Kereta."
  },
  {
    "id": "tiu-pk-110",
    "subPattern": "kecepatan-jarak-dan-waktu",
    "difficulty": "sedang",
    "prompt": "Jika Budi mengendarai sepeda motor dengan kecepatan 40 km/jam, ia terlambat 15 menit tiba di kantor. Namun jika ia melaju dengan kecepatan 60 km/jam, ia tiba 15 menit lebih awal dari jam masuk. Berapa km jarak dari rumah Budi ke kantor?",
    "options": [
      "45 km",
      "48 km",
      "60 km",
      "50 km",
      "72 km"
    ],
    "answer": "C",
    "explanation": "Selisih waktu antara kedua kecepatan adalah 15 + 15 = 30 menit = 0,5 jam. Maka Jarak/40 - Jarak/60 = 0,5 → Jarak/120 = 0,5 → Jarak = 60 km.",
    "tip": "Gunakan rumus cepat selisih waktu tiba: Jarak = (v1 × v2 ÷ |v1 - v2|) × Δt = (40 × 60 ÷ 20) × 0,5 jam = 60 km."
  },
  {
    "id": "tiu-pk-111",
    "subPattern": "kecepatan-jarak-dan-waktu",
    "difficulty": "sulit",
    "prompt": "Kendaraan A menempuh jarak 180 km dalam waktu 2 jam 15 menit. Kendaraan B menempuh jarak 210 km dalam waktu 2 jam 30 menit. Diketahui X adalah kecepatan rata-rata Kendaraan A (km/jam) dan Y adalah kecepatan rata-rata Kendaraan B (km/jam). Manakah hubungan yang benar antara kuantitas X dan Y?",
    "options": [
      "X > Y",
      "X = Y",
      "X = 1,2Y",
      "X < Y",
      "Hubungan X dan Y tidak dapat ditentukan"
    ],
    "answer": "D",
    "explanation": "X = 180 / 2,25 = 80 km/jam. Y = 210 / 2,5 = 84 km/jam. Karena 80 < 84, maka X < Y.",
    "tip": "Ubah waktu ke pecahan biasa: 180 ÷ (9/4) = 80 km/jam dan 210 ÷ (5/2) = 84 km/jam."
  },
  {
    "id": "tiu-pk-112",
    "subPattern": "kecepatan-jarak-dan-waktu",
    "difficulty": "sulit",
    "prompt": "Dani berangkat pukul 07.00 dengan kecepatan 50 km/jam. Pukul 07.36, Eka menyusul dari titik yang sama dengan kecepatan 65 km/jam. Diketahui X adalah jarak (dalam km) dari titik awal saat Eka tepat menyusul Dani, dan Y = 130. Manakah hubungan yang benar antara kuantitas X dan Y?",
    "options": [
      "X > Y",
      "X < Y",
      "2X = Y",
      "Hubungan X dan Y tidak dapat ditentukan",
      "X = Y"
    ],
    "answer": "E",
    "explanation": "Selisih waktu = 36 menit = 0,6 jam. Selisih jarak = 50 × 0,6 = 30 km. Waktu menyusul = 30 / (65 - 50) = 2 jam. Jarak saat menyusul X = 65 × 2 = 130 km. Karena Y = 130, maka X = Y.",
    "tip": "Jarak menyusul = kecepatan penyusul × waktu menyusul = 65 × 2 = 130 km."
  },
  {
    "id": "tiu-pk-113",
    "subPattern": "kecepatan-jarak-dan-waktu",
    "difficulty": "sulit",
    "prompt": "Dua pelari berlari mengelilingi lintasan stadion berbentuk lingkaran sepanjang 400 meter dari garis start yang sama. Pelari A berlari dengan kecepatan 6 m/detik dan Pelari B dengan kecepatan 4 m/detik. Jika keduanya berlari searah, setelah berapa menit Pelari A akan menyusul Pelari B sebanyak 1 putaran penuh untuk pertama kalinya?",
    "options": [
      "3 menit 20 detik",
      "2 menit 40 detik",
      "3 menit",
      "3 menit 40 detik",
      "4 menit"
    ],
    "answer": "A",
    "explanation": "Untuk menyusul 1 putaran (400 m) searah, selisih jarak harus 400 m: t = 400 / (6 - 4) = 200 detik = 3 menit 20 detik.",
    "tip": "Pada lintasan melingkar searah, waktu menyusul 1 putaran adalah Keliling Lintasan dibagi selisih kecepatan."
  },
  {
    "id": "tiu-pk-114",
    "subPattern": "kecepatan-jarak-dan-waktu",
    "difficulty": "sulit",
    "prompt": "Sebuah kapal barang berlayar searah arus sungai sejauh 72 km dalam waktu 3 jam, dan saat kembali melawan arus menempuh jarak yang sama dalam waktu 4,5 jam. Diketahui X adalah kecepatan arus sungai (km/jam) dan Y = 4. Manakah hubungan yang benar antara kuantitas X dan Y?",
    "options": [
      "X > Y",
      "X = Y",
      "X < Y",
      "X = 2Y",
      "Hubungan X dan Y tidak dapat ditentukan"
    ],
    "answer": "B",
    "explanation": "Kecepatan searah arus (v_k + v_a) = 72 / 3 = 24 km/jam. Kecepatan melawan arus (v_k - v_a) = 72 / 4,5 = 16 km/jam. Kecepatan arus X = (24 - 16) / 2 = 4 km/jam. Karena Y = 4, maka X = Y.",
    "tip": "Kecepatan arus sungai adalah setengah dari selisih kecepatan hilir dan kecepatan hulu: (24 - 16) ÷ 2 = 4."
  },
  {
    "id": "tiu-pk-115",
    "subPattern": "kecepatan-jarak-dan-waktu",
    "difficulty": "sulit",
    "prompt": "Jarak Kota A dan B adalah 300 km. Mobil P berangkat dari A ke B pukul 06.00 dengan kecepatan 60 km/jam. Mobil Q berangkat dari B ke A pukul 06.30 dengan kecepatan 75 km/jam. Berapa km jarak titik berpapasan kedua mobil tersebut dihitung dari Kota A?",
    "options": [
      "120 km",
      "135 km",
      "150 km",
      "160 km",
      "180 km"
    ],
    "answer": "C",
    "explanation": "Selama 30 menit awal, P menempuh 30 km (sisa jarak 270 km). Waktu papasan sejak 06.30 = 270 / (60 + 75) = 270 / 135 = 2 jam. Total jarak P dari Kota A = 30 + (60 × 2) = 150 km.",
    "tip": "Jangan lupa menambahkan jarak 30 km yang sudah ditempuh Mobil P sebelum pukul 06.30."
  },
  {
    "id": "tiu-pk-116",
    "subPattern": "kecepatan-jarak-dan-waktu",
    "difficulty": "sulit",
    "prompt": "Seorang pegawai menempuh sepertiga jarak perjalanan ke kantor dengan kecepatan 30 km/jam, dan dua pertiga sisa jaraknya dengan kecepatan 60 km/jam. Berapakah kecepatan rata-rata seluruh perjalanan pegawai tersebut?",
    "options": [
      "40 km/jam",
      "42 km/jam",
      "48 km/jam",
      "45 km/jam",
      "50 km/jam"
    ],
    "answer": "D",
    "explanation": "Misalkan jarak total = 90 km. Sepertiga jarak (30 km) dengan 30 km/jam butuh 1 jam. Dua pertiga jarak (60 km) dengan 60 km/jam butuh 1 jam. Kecepatan rata-rata = 90 km / (1 + 1) jam = 45 km/jam.",
    "tip": "Permisalkan jarak total dengan angka yang habis dibagi kecepatan (misal 90 km) agar perhitungan waktu menjadi bulat."
  },
  {
    "id": "tiu-pk-117",
    "subPattern": "kecepatan-jarak-dan-waktu",
    "difficulty": "sulit",
    "prompt": "Jika Fajar berjalan kaki dengan kecepatan 4 km/jam dari kos ke stasiun, ia terlambat 6 menit dari jadwal kereta. Namun jika ia berlari kecil dengan kecepatan 6 km/jam, ia tiba 9 menit sebelum jadwal kereta. Berapa km jarak dari kos Fajar ke stasiun?",
    "options": [
      "2 km",
      "2,5 km",
      "3,5 km",
      "4 km",
      "3 km"
    ],
    "answer": "E",
    "explanation": "Selisih waktu = 6 menit (terlambat) + 9 menit (lebih awal) = 15 menit = 0,25 jam. Maka Jarak = (4 × 6) / (6 - 4) × 0,25 = 12 × 0,25 = 3 km.",
    "tip": "Gunakan rumus: Jarak = (v1 × v2 ÷ |v1 - v2|) × (Δt dalam jam) = (24 ÷ 2) × (1/4) = 3 km."
  },
  {
    "id": "tiu-pk-118",
    "subPattern": "kecepatan-jarak-dan-waktu",
    "difficulty": "sulit",
    "prompt": "Kereta Ekspres sepanjang 160 meter melaju dengan kecepatan 90 km/jam searah dengan Kereta Barang sepanjang 200 meter yang melaju di rel sejajar dengan kecepatan 54 km/jam. Berapa detik waktu yang dibutuhkan Kereta Ekspres untuk menyalip seluruh badan Kereta Barang?",
    "options": [
      "36 detik",
      "24 detik",
      "30 detik",
      "32 detik",
      "40 detik"
    ],
    "answer": "A",
    "explanation": "Selisih kecepatan = 90 - 54 = 36 km/jam = 10 m/detik. Total panjang yang harus dilewati = 160 + 200 = 360 meter. Waktu menyalip = 360 / 10 = 36 detik.",
    "tip": "Saat dua kereta searah saling menyalip, bagi jumlah panjang kedua kereta dengan selisih kecepatannya (dalam m/detik)."
  },
  {
    "id": "tiu-pk-119",
    "subPattern": "kecepatan-jarak-dan-waktu",
    "difficulty": "sulit",
    "prompt": "Mobil X menempuh perjalanan sejauh d km dengan kecepatan v km/jam dalam waktu t jam. Mobil Y menempuh jarak 20% lebih jauh daripada Mobil X dengan kecepatan 25% lebih cepat daripada Mobil X. Berapa perbandingan waktu tempuh Mobil Y terhadap waktu tempuh Mobil X?",
    "options": [
      "4 : 5",
      "24 : 25",
      "5 : 6",
      "15 : 16",
      "25 : 24"
    ],
    "answer": "B",
    "explanation": "t_Y = (1,2 d) / (1,25 v) = (6/5) / (5/4) × (d/v) = (24/25) t_X. Jadi perbandingan t_Y : t_X = 24 : 25.",
    "tip": "Ubah persentase menjadi pecahan: jarak 120% = 6/5 dan kecepatan 125% = 5/4, lalu bagi (6/5) ÷ (5/4) = 24/25."
  },
  {
    "id": "tiu-pk-120",
    "subPattern": "kecepatan-jarak-dan-waktu",
    "difficulty": "sulit",
    "prompt": "Peserta A dan B berangkat dari Kota S ke Kota T yang berjarak 120 km secara bersamaan. Kecepatan A adalah 60 km/jam dan kecepatan B adalah 40 km/jam. Setibanya di Kota T, A langsung berbalik arah kembali menuju Kota S tanpa berhenti. Pada jarak berapa km dari Kota S keduanya akan berpapasan?",
    "options": [
      "84 km",
      "90 km",
      "96 km",
      "100 km",
      "105 km"
    ],
    "answer": "C",
    "explanation": "Saat A berbalik dan berpapasan dengan B, jumlah jarak yang telah ditempuh A dan B adalah 2 × 120 = 240 km. Waktu papasan = 240 / (60 + 40) = 2,4 jam. Jarak B dari Kota S saat itu = 40 × 2,4 = 96 km.",
    "tip": "Ketika kendaraan lebih cepat memantul di ujung dan berpapasan dengan kendaraan kedua, total jarak tempuh keduanya adalah 2 kali panjang lintasan."
  },
  {
    "id": "tiu-pk-121",
    "subPattern": "hubungan-variabel-x-dan-y",
    "difficulty": "mudah",
    "prompt": "Diketahui X = 37,5% dari 64 dan Y = 12,5% dari 192. Manakah hubungan yang benar antara kuantitas X dan Y?",
    "options": [
      "X > Y",
      "X < Y",
      "2X = 3Y",
      "Hubungan antara X dan Y tidak dapat ditentukan",
      "X = Y"
    ],
    "answer": "E",
    "explanation": "37,5% = 3/8, sehingga X = (3/8) × 64 = 24. Sedangkan 12,5% = 1/8, sehingga Y = (1/8) × 192 = 24. Maka X = Y.",
    "tip": "Ubah persentase angka sakti ke pecahan: 37,5% = 3/8 dan 12,5% = 1/8."
  },
  {
    "id": "tiu-pk-122",
    "subPattern": "hubungan-variabel-x-dan-y",
    "difficulty": "mudah",
    "prompt": "Diketahui 4X + 7 = 35 dan 5Y - 6 = 34. Manakah hubungan yang benar antara kuantitas X dan Y?",
    "options": [
      "X < Y",
      "X > Y",
      "X = Y",
      "2X = 3Y",
      "Hubungan antara X dan Y tidak dapat ditentukan"
    ],
    "answer": "A",
    "explanation": "4X = 28 → X = 7. Sedangkan 5Y = 40 → Y = 8. Karena 7 < 8, maka X < Y.",
    "tip": "Selesaikan persamaan linear satu variabel masing-masing untuk mendapatkan nilai pasti X dan Y."
  },
  {
    "id": "tiu-pk-123",
    "subPattern": "hubungan-variabel-x-dan-y",
    "difficulty": "mudah",
    "prompt": "Diketahui X adalah rata-rata dari bilangan 14, 18, 22, 26, dan 30, sedangkan Y = 21. Manakah hubungan yang benar antara kuantitas X dan Y?",
    "options": [
      "X < Y",
      "X > Y",
      "X = Y",
      "2X = 3Y",
      "Hubungan antara X dan Y tidak dapat ditentukan"
    ],
    "answer": "B",
    "explanation": "Barisan 14, 18, 22, 26, 30 adalah barisan aritmetika, sehingga rata-ratanya sama dengan suku tengah yaitu X = 22. Karena 22 > 21, maka X > Y.",
    "tip": "Rata-rata barisan bilangan dengan selisih tetap sama dengan nilai suku tengahnya."
  },
  {
    "id": "tiu-pk-124",
    "subPattern": "hubungan-variabel-x-dan-y",
    "difficulty": "mudah",
    "prompt": "Perbandingan uang saku Andi dan Beni adalah 4 : 7. Jika jumlah uang saku mereka Rp132.000, diketahui X adalah selisih uang saku mereka dan Y = Rp36.000. Manakah hubungan yang benar antara kuantitas X dan Y?",
    "options": [
      "X > Y",
      "X < Y",
      "X = Y",
      "2X = 3Y",
      "Hubungan antara X dan Y tidak dapat ditentukan"
    ],
    "answer": "C",
    "explanation": "Jumlah rasio = 4 + 7 = 11 bagian = Rp132.000 (1 bagian = Rp12.000). Selisih X = (7 - 4) × Rp12.000 = Rp36.000. Maka X = Y.",
    "tip": "Selisih = (3 / 11) × Rp132.000 = Rp36.000."
  },
  {
    "id": "tiu-pk-125",
    "subPattern": "hubungan-variabel-x-dan-y",
    "difficulty": "mudah",
    "prompt": "Diketahui X = (2/3) + (3/4) dan Y = (5/6) + (1/2). Manakah hubungan yang benar antara kuantitas X dan Y?",
    "options": [
      "X < Y",
      "X = Y",
      "2X = 3Y",
      "X > Y",
      "Hubungan antara X dan Y tidak dapat ditentukan"
    ],
    "answer": "D",
    "explanation": "Samakan penyebut ke 12: X = (8 + 9)/12 = 17/12, sedangkan Y = (10 + 6)/12 = 16/12. Karena 17/12 > 16/12, maka X > Y.",
    "tip": "Samakan kedua ekspresi pecahan ke penyebut KPK 12 agar pembilangnya bisa langsung dibandingkan."
  },
  {
    "id": "tiu-pk-126",
    "subPattern": "hubungan-variabel-x-dan-y",
    "difficulty": "mudah",
    "prompt": "Sebuah kemeja seharga Rp200.000 mendapat diskon 25%. Diketahui X adalah harga kemeja setelah diskon dan Y = Rp145.000. Manakah hubungan yang benar antara kuantitas X dan Y?",
    "options": [
      "X < Y",
      "X = Y",
      "2X = 3Y",
      "Hubungan antara X dan Y tidak dapat ditentukan",
      "X > Y"
    ],
    "answer": "E",
    "explanation": "Harga setelah diskon 25% adalah X = 75% × Rp200.000 = Rp150.000. Karena Rp150.000 > Rp145.000, maka X > Y.",
    "tip": "Harga setelah diskon 25% sama dengan 3/4 dari harga awal."
  },
  {
    "id": "tiu-pk-127",
    "subPattern": "hubungan-variabel-x-dan-y",
    "difficulty": "mudah",
    "prompt": "Diketahui X adalah keliling persegi dengan luas 81 cm², dan Y adalah keliling persegi panjang berukuran 11 cm × 8 cm. Manakah hubungan yang benar antara kuantitas X dan Y?",
    "options": [
      "X < Y",
      "X > Y",
      "X = Y",
      "2X = 3Y",
      "Hubungan antara X dan Y tidak dapat ditentukan"
    ],
    "answer": "A",
    "explanation": "Sisi persegi = √81 = 9 cm, sehingga keliling X = 4 × 9 = 36 cm. Keliling persegi panjang Y = 2 × (11 + 8) = 38 cm. Karena 36 < 38, maka X < Y.",
    "tip": "Cari panjang sisi persegi dari akar luasnya terlebih dahulu sebelum menghitung keliling 4s."
  },
  {
    "id": "tiu-pk-128",
    "subPattern": "hubungan-variabel-x-dan-y",
    "difficulty": "mudah",
    "prompt": "Diketahui X = 16 2/3% dari 72 dan Y = 20% dari 40. Manakah hubungan yang benar antara kuantitas X dan Y?",
    "options": [
      "X > Y",
      "2X = 3Y",
      "X < Y",
      "X = Y",
      "Hubungan antara X dan Y tidak dapat ditentukan"
    ],
    "answer": "B",
    "explanation": "16 2/3% = 1/6, sehingga X = (1/6) × 72 = 12. Sedangkan Y = 0,2 × 40 = 8. Karena 2 × 12 = 24 dan 3 × 8 = 24, maka hubungan yang tepat pada opsi adalah 2X = 3Y.",
    "tip": "Jika nilai X dan Y sudah didapat (X = 12, Y = 8), periksa juga apakah opsi meminta hubungan kelipatan seperti 2X = 3Y."
  },
  {
    "id": "tiu-pk-129",
    "subPattern": "hubungan-variabel-x-dan-y",
    "difficulty": "mudah",
    "prompt": "Diketahui 3/5 dari suatu bilangan P adalah 27. Jika X = P dan Y = 45, manakah hubungan yang benar antara kuantitas X dan Y?",
    "options": [
      "X > Y",
      "X < Y",
      "X = Y",
      "2X = 3Y",
      "Hubungan antara X dan Y tidak dapat ditentukan"
    ],
    "answer": "C",
    "explanation": "P = 27 × (5/3) = 45, sehingga X = 45. Karena Y = 45, maka X = Y.",
    "tip": "Kalikan 27 dengan kebalikan pecahan (5/3) untuk mendapatkan nilai P secara langsung."
  },
  {
    "id": "tiu-pk-130",
    "subPattern": "hubungan-variabel-x-dan-y",
    "difficulty": "mudah",
    "prompt": "Diketahui X = √196 + √81 dan Y = 5² - 3. Manakah hubungan yang benar antara kuantitas X dan Y?",
    "options": [
      "X < Y",
      "X = Y",
      "2X = 3Y",
      "X > Y",
      "Hubungan antara X dan Y tidak dapat ditentukan"
    ],
    "answer": "D",
    "explanation": "X = 14 + 9 = 23. Sedangkan Y = 25 - 3 = 22. Karena 23 > 22, maka X > Y.",
    "tip": "Ingat bahwa simbol akar kuadrat (√) menyatakan nilai akar non-negatif utama."
  },
  {
    "id": "tiu-pk-131",
    "subPattern": "hubungan-variabel-x-dan-y",
    "difficulty": "sedang",
    "prompt": "Diketahui x² = 49 dan y² = 36, dengan x dan y adalah bilangan bulat. Manakah hubungan yang benar antara kuantitas X (nilai x) dan Y (nilai y)?",
    "options": [
      "X > Y",
      "X < Y",
      "X = Y",
      "2X = 3Y",
      "Hubungan antara X dan Y tidak dapat ditentukan"
    ],
    "answer": "E",
    "explanation": "Dari x² = 49 diperoleh x = 7 atau x = -7. Dari y² = 36 diperoleh y = 6 atau y = -6. Jika x = 7 dan y = 6 maka x > y, tetapi jika x = -7 dan y = 6 maka x < y. Karena tanda tidak ditentukan, hubungan X dan Y tidak dapat ditentukan.",
    "tip": "Waspadai persamaan pangkat genap (x² = a) tanpa syarat x > 0; selalu ada dua kemungkinan akar positif dan negatif."
  },
  {
    "id": "tiu-pk-132",
    "subPattern": "hubungan-variabel-x-dan-y",
    "difficulty": "sedang",
    "prompt": "Perbandingan usia A : B = 2 : 3 dan perbandingan usia B : C = 4 : 5. Jika jumlah usia ketiganya adalah 70 tahun, diketahui X adalah usia B dan Y = 24 tahun. Manakah hubungan yang benar antara kuantitas X dan Y?",
    "options": [
      "X = Y",
      "X > Y",
      "X < Y",
      "2X = 3Y",
      "Hubungan antara X dan Y tidak dapat ditentukan"
    ],
    "answer": "A",
    "explanation": "Samakan rasio B: A : B : C = 8 : 12 : 15 (total = 35 bagian). Karena 35 bagian = 70 tahun, maka 1 bagian = 2 tahun. Usia B (X) = 12 × 2 = 24 tahun. Maka X = Y.",
    "tip": "Samakan angka variabel penghubung B ke KPK dari 3 dan 4 yaitu 12 sehingga diperoleh rasio terpadu 8 : 12 : 15."
  },
  {
    "id": "tiu-pk-133",
    "subPattern": "hubungan-variabel-x-dan-y",
    "difficulty": "sedang",
    "prompt": "Toko A memberikan diskon tunggal sebesar 30%, sedangkan Toko B memberikan diskon bertingkat 20% + 10% untuk barang dengan harga awal yang sama. Jika X adalah harga akhir di Toko A dan Y adalah harga akhir di Toko B, manakah hubungan yang benar?",
    "options": [
      "X > Y",
      "X < Y",
      "X = Y",
      "2X = 3Y",
      "Hubungan antara X dan Y tidak dapat ditentukan"
    ],
    "answer": "B",
    "explanation": "Di Toko A, pembeli membayar 100% - 30% = 70% dari harga awal. Di Toko B, pembeli membayar 80% × 90% = 72% dari harga awal (diskon efektif 28%). Karena 70% < 72%, maka harga akhir X < Y.",
    "tip": "Diskon bertingkat a% + b% selalu menghasilkan potongan lebih kecil daripada diskon tunggal (a + b)%, sehingga harga bayarnya lebih mahal."
  },
  {
    "id": "tiu-pk-134",
    "subPattern": "hubungan-variabel-x-dan-y",
    "difficulty": "sedang",
    "prompt": "Rata-rata nilai SKD 12 peserta kelompok pertama adalah 410, sedangkan rata-rata nilai 8 peserta kelompok kedua adalah 435. Jika X adalah rata-rata gabungan seluruh peserta dan Y = 420, manakah hubungan yang benar?",
    "options": [
      "X > Y",
      "X < Y",
      "X = Y",
      "2X = 3Y",
      "Hubungan antara X dan Y tidak dapat ditentukan"
    ],
    "answer": "C",
    "explanation": "Rata-rata gabungan X = (12 × 410 + 8 × 435) / (12 + 8) = (3 × 410 + 2 × 435) / 5 = (1230 + 870) / 5 = 2100 / 5 = 420. Maka X = Y.",
    "tip": "Sederhanakan perbandingan jumlah peserta 12 : 8 menjadi 3 : 2 terlebih dahulu sebelum menghitung rata-rata tertimbang."
  },
  {
    "id": "tiu-pk-135",
    "subPattern": "hubungan-variabel-x-dan-y",
    "difficulty": "sedang",
    "prompt": "Diketahui X = 2026² - 2024² dan Y = 8.100. Manakah hubungan yang benar antara kuantitas X dan Y?",
    "options": [
      "X > Y",
      "X < Y",
      "2X = 3Y",
      "X = Y",
      "Hubungan antara X dan Y tidak dapat ditentukan"
    ],
    "answer": "D",
    "explanation": "Gunakan selisih kuadrat: X = (2026 - 2024)(2026 + 2024) = 2 × 4050 = 8.100. Karena Y = 8.100, maka X = Y.",
    "tip": "Jangan menguadratkan manual; gunakan identitas a² - b² = (a - b)(a + b)."
  },
  {
    "id": "tiu-pk-136",
    "subPattern": "hubungan-variabel-x-dan-y",
    "difficulty": "sedang",
    "prompt": "Diketahui X = 44/45 dan Y = 55/56. Manakah hubungan yang benar antara kuantitas X dan Y?",
    "options": [
      "X > Y",
      "X = Y",
      "2X = 3Y",
      "Hubungan antara X dan Y tidak dapat ditentukan",
      "X < Y"
    ],
    "answer": "E",
    "explanation": "X = 1 - 1/45 dan Y = 1 - 1/56. Karena 1/45 > 1/56, maka pengurangan pada X lebih besar sehingga X < Y.",
    "tip": "Untuk pecahan berbentuk n/(n+1) dengan n positif, makin besar angkanya maka nilainya makin mendekati 1 (makin besar)."
  },
  {
    "id": "tiu-pk-137",
    "subPattern": "hubungan-variabel-x-dan-y",
    "difficulty": "sedang",
    "prompt": "Diketahui bilangan bulat positif p dan q memenuhi p + q = 16. Jika X adalah nilai maksimum dari p × q dan Y = 60, manakah hubungan yang benar?",
    "options": [
      "X > Y",
      "X < Y",
      "X = Y",
      "2X = 3Y",
      "Hubungan antara X dan Y tidak dapat ditentukan"
    ],
    "answer": "A",
    "explanation": "Hasil kali dua bilangan dengan jumlah tetap mencapai nilai maksimum saat kedua bilangan sama besar: p = q = 8, sehingga X = 8 × 8 = 64. Karena 64 > 60, maka X > Y.",
    "tip": "Jika jumlah dua bilangan tetap (p + q = S), maka hasil kali maksimumnya adalah (S/2)²."
  },
  {
    "id": "tiu-pk-138",
    "subPattern": "hubungan-variabel-x-dan-y",
    "difficulty": "sedang",
    "prompt": "Dalam sebuah kotak terdapat kelereng merah dan biru dengan rasio 3 : 2. Jika diambil 10 kelereng merah, rasionya menjadi 5 : 4. Diketahui X adalah jumlah kelereng biru dan Y = 40. Manakah hubungan yang benar antara kuantitas X dan Y?",
    "options": [
      "X > Y",
      "X = Y",
      "X < Y",
      "2X = 3Y",
      "Hubungan antara X dan Y tidak dapat ditentukan"
    ],
    "answer": "B",
    "explanation": "Misalkan jumlah awal merah = 3k dan biru = 2k. Setelah diambil 10 merah: (3k - 10) / (2k) = 5 / 4 → 12k - 40 = 10k → 2k = 40. Karena jumlah kelereng biru adalah X = 2k = 40 dan Y = 40, maka X = Y.",
    "tip": "Susun persamaan perbandingan (3k - 10) / (2k) = 5 / 4 lalu kali silang untuk menemukan jumlah kelereng biru (2k)."
  },
  {
    "id": "tiu-pk-139",
    "subPattern": "hubungan-variabel-x-dan-y",
    "difficulty": "sedang",
    "prompt": "Diketahui a > 0 dan b < 0. Jika X = (a - b)² dan Y = (a + b)², manakah hubungan yang benar antara kuantitas X dan Y?",
    "options": [
      "X < Y",
      "X = Y",
      "X > Y",
      "2X = 3Y",
      "Hubungan antara X dan Y tidak dapat ditentukan"
    ],
    "answer": "C",
    "explanation": "X - Y = (a² - 2ab + b²) - (a² + 2ab + b²) = -4ab. Karena a > 0 dan b < 0, maka ab < 0 sehingga -4ab > 0, yang berarti X > Y.",
    "tip": "Karena b bernilai negatif, operasi (a - b) saling menjumlahkan nilai mutlak keduanya sehingga kuadratnya pasti lebih besar."
  },
  {
    "id": "tiu-pk-140",
    "subPattern": "hubungan-variabel-x-dan-y",
    "difficulty": "sedang",
    "prompt": "Rata-rata berat badan 6 orang di dalam lift adalah 65 kg. Setelah 1 orang lagi masuk ke lift, rata-ratanya menjadi 67 kg. Diketahui X adalah berat badan orang yang baru masuk dan Y = 79 kg. Manakah hubungan yang benar?",
    "options": [
      "X > Y",
      "X < Y",
      "2X = 3Y",
      "X = Y",
      "Hubungan antara X dan Y tidak dapat ditentukan"
    ],
    "answer": "D",
    "explanation": "Berat orang baru X = 67 + 6 × (67 - 65) = 67 + 12 = 79 kg. Karena Y = 79 kg, maka X = Y.",
    "tip": "Rumus cepat nilai anggota baru: Nilai Baru = Rata-rata Baru + (Jumlah Awal × Kenaikan Rata-rata)."
  },
  {
    "id": "tiu-pk-141",
    "subPattern": "hubungan-variabel-x-dan-y",
    "difficulty": "sulit",
    "prompt": "Diketahui bilangan real x dan y memenuhi 2 < x < 6 dan -4 < y < 3. Jika X = x - y dan Y = 8, manakah hubungan yang benar antara kuantitas X dan Y?",
    "options": [
      "X > Y",
      "X < Y",
      "X = Y",
      "2X = 3Y",
      "Hubungan antara X dan Y tidak dapat ditentukan"
    ],
    "answer": "E",
    "explanation": "Nilai minimum x - y mendekati 2 - 3 = -1, sedangkan nilai maksimum x - y mendekati 6 - (-4) = 10. Karena X berada pada rentang -1 < X < 10 dan angka 8 berada di dalam rentang tersebut, X bisa lebih kecil, sama dengan, atau lebih besar dari 8.",
    "tip": "Jika nilai Y berada di dalam rentang terbuka kemungkinan nilai X (antara batas bawah dan batas atas X), maka hubungannya tidak dapat ditentukan."
  },
  {
    "id": "tiu-pk-142",
    "subPattern": "hubungan-variabel-x-dan-y",
    "difficulty": "sulit",
    "prompt": "Harga sebuah laptop dinaikkan sebesar 20%, kemudian pada bulan berikutnya diberi diskon sebesar 20%. Jika X adalah harga akhir laptop dan Y adalah harga awal laptop sebelum kenaikan, manakah hubungan yang benar?",
    "options": [
      "X < Y",
      "X > Y",
      "X = Y",
      "2X = 3Y",
      "Hubungan antara X dan Y tidak dapat ditentukan"
    ],
    "answer": "A",
    "explanation": "Harga akhir X = 1,20 × 0,80 × Y = 0,96Y (atau 96% dari Y). Karena 0,96Y < Y, maka X < Y.",
    "tip": "Kenaikan p% diikuti penurunan p% selalu menghasilkan nilai akhir yang lebih kecil sebesar (p/100)² dari nilai awal."
  },
  {
    "id": "tiu-pk-143",
    "subPattern": "hubungan-variabel-x-dan-y",
    "difficulty": "sulit",
    "prompt": "Diketahui x + y = 11 dan x × y = 24, dengan x > y. Jika X = 2x dan Y = 3y, manakah hubungan yang benar antara kuantitas X dan Y?",
    "options": [
      "X < Y",
      "X > Y",
      "X = Y",
      "2X = 3Y",
      "Hubungan antara X dan Y tidak dapat ditentukan"
    ],
    "answer": "B",
    "explanation": "Dua bilangan yang jumlahnya 11 dan hasil kalinya 24 dengan x > y adalah x = 8 dan y = 3. Maka X = 2(8) = 16 dan Y = 3(3) = 9. Karena 16 > 9, maka X > Y.",
    "tip": "Faktorkan 24 menjadi pasangan yang berjumlah 11 (yaitu 8 dan 3), lalu perhatikan syarat x > y."
  },
  {
    "id": "tiu-pk-144",
    "subPattern": "hubungan-variabel-x-dan-y",
    "difficulty": "sulit",
    "prompt": "Perbandingan kelereng Adi, Budi, dan Ciko adalah 3 : 5 : 7. Jika selisih kelereng Ciko dan Adi adalah 28 butir, diketahui X adalah jumlah kelereng Adi dan Budi, sedangkan Y = 56 butir. Manakah hubungan yang benar?",
    "options": [
      "X > Y",
      "X < Y",
      "X = Y",
      "2X = 3Y",
      "Hubungan antara X dan Y tidak dapat ditentukan"
    ],
    "answer": "C",
    "explanation": "Selisih rasio Ciko dan Adi = 7 - 3 = 4 bagian = 28 butir (1 bagian = 7 butir). Jumlah kelereng Adi dan Budi (X) = (3 + 5) × 7 = 8 × 7 = 56 butir. Maka X = Y.",
    "tip": "Gunakan perbandingan langsung: X = ((3 + 5) / (7 - 3)) × 28 = (8 / 4) × 28 = 56."
  },
  {
    "id": "tiu-pk-145",
    "subPattern": "hubungan-variabel-x-dan-y",
    "difficulty": "sulit",
    "prompt": "Diketahui X = 2^30 dan Y = 3^20. Manakah hubungan yang benar antara kuantitas X dan Y?",
    "options": [
      "X > Y",
      "X = Y",
      "2X = 3Y",
      "X < Y",
      "Hubungan antara X dan Y tidak dapat ditentukan"
    ],
    "answer": "D",
    "explanation": "Ubah ke pangkat persekutuan terbesar (FPB dari 30 dan 20 adalah 10): X = (2^3)^10 = 8^10, sedangkan Y = (3^2)^10 = 9^10. Karena 8^10 < 9^10, maka X < Y.",
    "tip": "Untuk membandingkan bilangan berpangkat besar, samakan eksponennya menggunakan FPB dari kedua pangkat."
  },
  {
    "id": "tiu-pk-146",
    "subPattern": "hubungan-variabel-x-dan-y",
    "difficulty": "sulit",
    "prompt": "Suatu larutan garam sebanyak 6 liter dengan kadar 15% dicampur dengan 4 liter larutan garam berkadar 25%. Jika X adalah persentase kadar garam campuran dan Y = 19%, manakah hubungan yang benar?",
    "options": [
      "X > Y",
      "X < Y",
      "2X = 3Y",
      "Hubungan antara X dan Y tidak dapat ditentukan",
      "X = Y"
    ],
    "answer": "E",
    "explanation": "Kadar campuran X = ((6 × 15%) + (4 × 25%)) / (6 + 4) = (90% + 100%) / 10 = 190% / 10 = 19%. Karena Y = 19%, maka X = Y.",
    "tip": "Gunakan rata-rata tertimbang berdasarkan volume masing-masing larutan."
  },
  {
    "id": "tiu-pk-147",
    "subPattern": "hubungan-variabel-x-dan-y",
    "difficulty": "sulit",
    "prompt": "Jika jari-jari sebuah tabung diperbesar menjadi 2 kali semula dan tingginya diperkecil menjadi setengah kali semula, diketahui X adalah volume tabung setelah perubahan dan Y adalah volume tabung mula-mula. Manakah hubungan yang benar?",
    "options": [
      "X > Y",
      "X < Y",
      "X = Y",
      "2X = 3Y",
      "Hubungan antara X dan Y tidak dapat ditentukan"
    ],
    "answer": "A",
    "explanation": "Volume tabung V = π r² t. Setelah perubahan: X = π (2r)² (0,5t) = 4 × 0,5 × π r² t = 2Y. Karena volume positif dan X = 2Y, maka X > Y.",
    "tip": "Ingat bahwa jari-jari tabung dikuadratkan dalam rumus volume (2² = 4), sedangkan tinggi hanya berpangkat satu (× 1/2)."
  },
  {
    "id": "tiu-pk-148",
    "subPattern": "hubungan-variabel-x-dan-y",
    "difficulty": "sulit",
    "prompt": "Lima tahun yang lalu, perbandingan usia ayah dan anaknya adalah 7 : 2. Jika saat ini jumlah usia mereka adalah 55 tahun, diketahui X adalah usia anak 3 tahun yang akan datang dan Y = 12 tahun. Manakah hubungan yang benar?",
    "options": [
      "X > Y",
      "2X = 3Y",
      "X < Y",
      "X = Y",
      "Hubungan antara X dan Y tidak dapat ditentukan"
    ],
    "answer": "B",
    "explanation": "Jumlah usia mereka 5 tahun lalu = 55 - 2(5) = 45 tahun. Rasio 5 tahun lalu = 7 : 2 (total 9 bagian = 45 tahun → 1 bagian = 5 tahun). Usia anak 5 tahun lalu = 2 × 5 = 10 tahun, sehingga usia anak sekarang = 15 tahun dan 3 tahun mendatang X = 18 tahun. Karena Y = 12 tahun, maka 2X = 36 dan 3Y = 36, sehingga 2X = 3Y.",
    "tip": "Saat menarik jumlah usia dua orang ke 5 tahun yang lalu, kurangi jumlah usia sekarang dengan 2 × 5 = 10 tahun."
  },
  {
    "id": "tiu-pk-149",
    "subPattern": "hubungan-variabel-x-dan-y",
    "difficulty": "sulit",
    "prompt": "Diketahui p dan q adalah bilangan real bukan nol yang memenuhi 1/p + 1/q = 1/6 dan p + q = 24. Jika X adalah nilai dari p × q dan Y = 144, manakah hubungan yang benar?",
    "options": [
      "X > Y",
      "X < Y",
      "X = Y",
      "2X = 3Y",
      "Hubungan antara X dan Y tidak dapat ditentukan"
    ],
    "answer": "C",
    "explanation": "Dari 1/p + 1/q = 1/6 diperoleh (p + q) / (p × q) = 1/6. Substitusikan p + q = 24: 24 / X = 1/6 → X = 24 × 6 = 144. Karena Y = 144, maka X = Y.",
    "tip": "Sederhanakan 1/p + 1/q menjadi (p + q)/(pq) tanpa perlu mencari nilai p dan q satu per satu."
  },
  {
    "id": "tiu-pk-150",
    "subPattern": "hubungan-variabel-x-dan-y",
    "difficulty": "sulit",
    "prompt": "Sebuah koperasi membeli 40 kg jeruk seharga Rp600.000. Sebanyak 30 kg dijual dengan harga Rp18.000/kg dan sisanya dijual Rp12.000/kg. Jika X adalah persentase keuntungan koperasi dan Y = 10%, manakah hubungan yang benar?",
    "options": [
      "X > Y",
      "X < Y",
      "2X = 3Y",
      "X = Y",
      "Hubungan antara X dan Y tidak dapat ditentukan"
    ],
    "answer": "D",
    "explanation": "Total pendapatan = (30 × Rp18.000) + (10 × Rp12.000) = Rp540.000 + Rp120.000 = Rp660.000. Keuntungan = Rp60.000. Persentase untung X = (60.000 / 600.000) × 100% = 10%. Maka X = Y.",
    "tip": "Hitung total hasil penjualan dari kedua kelompok kualitas jeruk, lalu bandingkan selisihnya terhadap modal awal."
  }
];
