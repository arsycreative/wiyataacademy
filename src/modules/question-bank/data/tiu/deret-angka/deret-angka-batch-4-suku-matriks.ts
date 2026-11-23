import type { QuestionDraft } from "@/modules/question-bank/domain/question";

export const deretAngkaBatch4SukuMatriksDrafts: readonly QuestionDraft[] = [
  {
    id: "tiu-der-151",
    subPattern: "deret-suku-ke-n",
    difficulty: "mudah",
    prompt:
      "Perhatikan barisan bilangan aritmetika berikut:\n7, 13, 19, 25, 31, ...\nNilai suku ke-25 (U25) dari barisan tersebut adalah ...",
    options: ["145", "151", "155", "157", "163"],
    answer: "B",
    explanation:
      "Barisan memiliki suku pertama a = 7 dan beda tetap b = 13 - 7 = 6 (uji: 7 + 6 = 13, 13 + 6 = 19, 19 + 6 = 25, 25 + 6 = 31). Menggunakan rumus Un = a + (n - 1) × b, diperoleh U25 = 7 + (25 - 1) × 6 = 7 + 24 × 6 = 7 + 144 = 151.",
    tip: "Pastikan selisih antar suku tetap terlebih dahulu, lalu gunakan rumus suku ke-n barisan aritmetika Un = a + (n - 1)b tanpa mendaftar manual.",
  },
  {
    id: "tiu-der-152",
    subPattern: "deret-suku-ke-n",
    difficulty: "mudah",
    prompt:
      "Diketahui barisan bilangan berulang sebagai berikut:\n4, 9, 2, 7, 4, 9, 2, 7, 4, ...\nAngka yang menempati suku ke-50 (U50) adalah ...",
    options: ["2", "4", "7", "9", "11"],
    answer: "D",
    explanation:
      "Barisan berulang secara periodik setiap 4 suku dengan siklus [4, 9, 2, 7]. Untuk menentukan U50, bagi 50 dengan panjang siklus 4: 50 ÷ 4 = 12 sisa 2. Karena bersisa 2, suku ke-50 sama dengan urutan ke-2 pada siklus, yaitu 9.",
    tip: "Tentukan panjang satu siklus pengulangan terlebih dahulu, lalu cari sisa pembagian nomor suku oleh panjang siklus tersebut.",
  },
  {
    id: "tiu-der-153",
    subPattern: "deret-suku-ke-n",
    difficulty: "mudah",
    prompt:
      "Perhatikan pola barisan bilangan berikut:\n2, 6, 12, 20, 30, 42, ...\nNilai suku ke-12 (U12) dari barisan tersebut adalah ...",
    options: ["156", "132", "144", "168", "182"],
    answer: "A",
    explanation:
      "Setiap suku merupakan hasil kali dua bilangan bulat berurutan dengan rumus Un = n × (n + 1). Uji setiap suku: U1 = 1 × 2 = 2, U2 = 2 × 3 = 6, U3 = 3 × 4 = 12, U4 = 4 × 5 = 20, U5 = 5 × 6 = 30, U6 = 6 × 7 = 42. Maka U12 = 12 × 13 = 156.",
    tip: "Kenali pola bilangan persegi panjang n(n + 1) yang selalu memiliki selisih berurutan +4, +6, +8, +10, dan seterusnya.",
  },
  {
    id: "tiu-der-154",
    subPattern: "deret-suku-ke-n",
    difficulty: "sedang",
    prompt:
      "Diberikan barisan bilangan bertingkat sebagai berikut:\n5, 9, 15, 23, 33, 45, ...\nNilai suku ke-15 (U15) dari barisan tersebut adalah ...",
    options: ["228", "235", "243", "253", "261"],
    answer: "C",
    explanation:
      "Selisih tingkat pertama adalah +4, +6, +8, +10, +12 dan selisih tingkat kedua tetap c = +2. Dengan a = 5, b = 4, c = 2, gunakan rumus aritmetika tingkat-2: Un = a + (n - 1)b + [(n - 1)(n - 2) ÷ 2] × c, atau bentuk tertutup Un = n² + n + 3 (uji: U1 = 1 + 1 + 3 = 5, U2 = 4 + 2 + 3 = 9, U3 = 9 + 3 + 3 = 15, U6 = 36 + 6 + 3 = 45). Maka U15 = 15² + 15 + 3 = 225 + 15 + 3 = 243.",
    tip: "Pada barisan bertingkat tingkat-2 dengan selisih tingkat kedua tetap c, langsung terapkan Un = a + (n - 1)b + ((n - 1)(n - 2)/2)c.",
  },
  {
    id: "tiu-der-155",
    subPattern: "deret-suku-ke-n",
    difficulty: "sedang",
    prompt:
      "Diketahui barisan bilangan periodik berikut:\n11, 17, 13, 19, 15, 21, 11, 17, 13, 19, 15, 21, ...\nBilangan yang berada pada posisi suku ke-100 (U100) adalah ...",
    options: ["11", "13", "15", "17", "19"],
    answer: "E",
    explanation:
      "Barisan berulang setiap 6 suku dengan siklus [11, 17, 13, 19, 15, 21]. Bagi indeks 100 dengan 6: 100 = 6 × 16 + 4, sehingga bersisa 4. Suku ke-100 sama dengan elemen ke-4 dalam siklus tersebut, yaitu 19.",
    tip: "Hitung panjang blok pengulangan dengan teliti sebelum membagi nomor suku; sisa pembagian menunjukkan urutan elemen dalam blok.",
  },
  {
    id: "tiu-der-156",
    subPattern: "deret-suku-ke-n",
    difficulty: "sedang",
    prompt:
      "Perhatikan barisan dua larik berikut:\n5, 80, 9, 74, 13, 68, 17, 62, ...\nNilai suku ke-20 (U20) dari barisan tersebut adalah ...",
    options: ["26", "20", "32", "41", "45"],
    answer: "A",
    explanation:
      "Pisahkan barisan menjadi dua larik. Larik ganjil (U1, U3, U5, U7, ...): 5, 9, 13, 17, ... (bertambah +4). Larik genap (U2, U4, U6, U8, ...): 80, 74, 68, 62, ... (berkurang -6). Karena 20 adalah indeks genap, U20 merupakan suku ke-(20 ÷ 2) = suku ke-10 pada larik genap. Maka U20 = 80 + (10 - 1) × (-6) = 80 - 54 = 26.",
    tip: "Cek apakah nomor suku yang ditanyakan ganjil atau genap agar Anda hanya perlu menghitung pada satu larik yang relevan.",
  },
  {
    id: "tiu-der-157",
    subPattern: "deret-suku-ke-n",
    difficulty: "sedang",
    prompt:
      "Perhatikan barisan dua larik berikut:\n4, 100, 11, 95, 18, 90, 25, 85, ...\nNilai suku ke-19 (U19) dari barisan tersebut adalah ...",
    options: ["60", "67", "74", "55", "50"],
    answer: "B",
    explanation:
      "Larik posisi ganjil (U1, U3, U5, U7, ...) adalah 4, 11, 18, 25, ... dengan suku awal a = 4 dan beda b = +7. Larik posisi genap (U2, U4, U6, U8, ...) adalah 100, 95, 90, 85, ... dengan beda -5. Karena 19 adalah indeks ganjil, U19 menempati urutan ke-(19 + 1) ÷ 2 = urutan ke-10 pada larik ganjil. Jadi U19 = 4 + (10 - 1) × 7 = 4 + 63 = 67.",
    tip: "Untuk indeks ganjil n pada deret dua larik, posisinya pada larik ganjil adalah urutan ke-(n + 1) ÷ 2.",
  },
  {
    id: "tiu-der-158",
    subPattern: "deret-suku-ke-n",
    difficulty: "sedang",
    prompt:
      "Perhatikan barisan bilangan berpangkat berikut:\n5, 7, 11, 19, 35, 67, ...\nNilai suku ke-10 (U10) dari barisan tersebut adalah ...",
    options: ["515", "1021", "1025", "1027", "2051"],
    answer: "D",
    explanation:
      "Selisih antar suku adalah +2, +4, +8, +16, +32 (selalu dikali 2), sehingga setiap suku mengikuti rumus Un = 2^n + 3. Uji: U1 = 2¹ + 3 = 5, U2 = 2² + 3 = 7, U3 = 2³ + 3 = 11, U4 = 2⁴ + 3 = 19, U5 = 2⁵ + 3 = 35, U6 = 2⁶ + 3 = 67. Maka U10 = 2¹⁰ + 3 = 1024 + 3 = 1027.",
    tip: "Jika selisih antar suku selalu berlipat dua (+2, +4, +8, +16, ...), bandingkan tiap suku dengan pangkat dua (2^n) terdekat.",
  },
  {
    id: "tiu-der-159",
    subPattern: "deret-suku-ke-n",
    difficulty: "sedang",
    prompt:
      "Diketahui barisan aritmetika berikut:\n8, 13, 18, 23, 28, ...\nHasil dari U25 + U15 adalah ...",
    options: ["196", "201", "206", "211", "216"],
    answer: "C",
    explanation:
      "Barisan aritmetika memiliki a = 8 dan b = 5. Hitung masing-masing suku: U25 = 8 + 24 × 5 = 8 + 120 = 128, dan U15 = 8 + 14 × 5 = 8 + 70 = 78. Maka U25 + U15 = 128 + 78 = 206. (Cara cepat: karena (25 + 15) ÷ 2 = 20, berlaku U25 + U15 = 2 × U20 = 2 × (8 + 19 × 5) = 2 × 103 = 206.)",
    tip: "Pada barisan aritmetika, jumlah dua suku U_p + U_q dapat dipercepat dengan sifat simetri 2 × U_((p+q)/2) bila p + q genap.",
  },
  {
    id: "tiu-der-160",
    subPattern: "deret-suku-ke-n",
    difficulty: "sedang",
    prompt:
      "Perhatikan barisan geometri berikut:\n3, 6, 12, 24, 48, ...\nNilai suku ke-10 (U10) dari barisan tersebut adalah ...",
    options: ["768", "1024", "1280", "1440", "1536"],
    answer: "E",
    explanation:
      "Barisan geometri memiliki suku pertama a = 3 dan rasio tetap r = 6 ÷ 3 = 2 (uji: 3 × 2 = 6, 6 × 2 = 12, 12 × 2 = 24, 24 × 2 = 48). Dengan rumus Un = a × r^(n - 1), diperoleh U10 = 3 × 2^(10 - 1) = 3 × 2⁹ = 3 × 512 = 1536.",
    tip: "Hafalkan pangkat dua dasar (2⁸ = 256, 2⁹ = 512, 2¹⁰ = 1024) lalu kalikan dengan suku pertama pada rumus Un = a × r^(n - 1).",
  },
  {
    id: "tiu-der-161",
    subPattern: "deret-suku-ke-n",
    difficulty: "sedang",
    prompt:
      "Perhatikan barisan kode huruf dan angka berindeks berikut:\nA2, C5, E8, G11, I14, ...\nSuku ke-12 (U12) dari barisan tersebut adalah ...",
    options: ["W35", "U32", "V35", "W38", "Y35"],
    answer: "A",
    explanation:
      "Pisahkan pola huruf dan pola angka. Posisi huruf: A(1), C(3), E(5), G(7), I(9) mengikuti rumus 2n - 1; untuk n = 12 diperoleh 2(12) - 1 = 23, yaitu huruf ke-23 adalah W. Pola angka: 2, 5, 8, 11, 14 memiliki a = 2 dan b = 3 (rumus 3n - 1); untuk n = 12 diperoleh 3(12) - 1 = 35. Jadi U12 = W35.",
    tip: "Ubah huruf menjadi nomor urut alfabet (A = 1 sampai Z = 26) lalu hitung pola huruf dan pola angka secara terpisah.",
  },
  {
    id: "tiu-der-162",
    subPattern: "deret-suku-ke-n",
    difficulty: "sulit",
    prompt:
      "Perhatikan barisan aritmetika bertingkat berikut:\n2, 7, 16, 29, 46, 67, ...\nNilai suku ke-12 (U12) dari barisan tersebut adalah ...",
    options: ["265", "277", "281", "289", "295"],
    answer: "B",
    explanation:
      "Selisih tingkat pertama adalah +5, +9, +13, +17, +21, sehingga selisih tingkat kedua tetap c = +4. Dengan a = 2, b = 5, dan c = 4, rumus umum Un = a + (n - 1)b + [(n - 1)(n - 2) ÷ 2] × c menghasilkan bentuk tertutup Un = 2n² - n + 1 (uji: U1 = 2 - 1 + 1 = 2, U2 = 8 - 2 + 1 = 7, U3 = 18 - 3 + 1 = 16, U6 = 72 - 6 + 1 = 67). Maka U12 = 2(12²) - 12 + 1 = 2(144) - 12 + 1 = 288 - 11 = 277.",
    tip: "Hitung selisih tingkat-1 dan tingkat-2, lalu substitusi nilai a, b, dan c ke rumus barisan bertingkat Un = a + (n - 1)b + ((n - 1)(n - 2)/2)c.",
  },
  {
    id: "tiu-der-163",
    subPattern: "deret-suku-ke-n",
    difficulty: "sulit",
    prompt:
      "Diketahui barisan bilangan periodik berikut:\n4, 7, 2, 9, 3, 4, 7, 2, 9, 3, ...\nJumlah 43 suku pertama (S43) dari barisan tersebut adalah ...",
    options: ["200", "204", "211", "213", "222"],
    answer: "D",
    explanation:
      "Barisan berulang setiap 5 suku dengan siklus [4, 7, 2, 9, 3]. Jumlah nilai dalam satu siklus penuh = 4 + 7 + 2 + 9 + 3 = 25. Sebanyak 43 suku terdiri dari 43 = 8 × 5 + 3, artinya 8 siklus penuh ditambah 3 suku awal siklus (4, 7, 2). Maka S43 = (8 × 25) + (4 + 7 + 2) = 200 + 13 = 213.",
    tip: "Kalikan jumlah satu blok siklus dengan banyaknya siklus penuh, lalu tambahkan beberapa suku awal sesuai sisa pembagian.",
  },
  {
    id: "tiu-der-164",
    subPattern: "deret-suku-ke-n",
    difficulty: "sulit",
    prompt:
      "Perhatikan barisan bilangan berikut:\n3, 8, 15, 24, 35, 48, ...\nNilai dari U20 - U12 pada barisan tersebut adalah ...",
    options: ["256", "264", "272", "280", "288"],
    answer: "C",
    explanation:
      "Setiap suku mengikuti pola Un = n × (n + 2) = n² + 2n (atau (n + 1)² - 1). Uji: U1 = 1 × 3 = 3, U2 = 2 × 4 = 8, U3 = 3 × 5 = 15, U4 = 4 × 6 = 24, U5 = 5 × 7 = 35, U6 = 6 × 8 = 48. Diperoleh U20 = 20 × 22 = 440 dan U12 = 12 × 14 = 168. Jadi U20 - U12 = 440 - 168 = 272.",
    tip: "Bandingkan setiap suku dengan bilangan kuadrat terdekat (4, 9, 16, 25, 36, 49) untuk menemukan rumus tertutup Un sebelum menghitung selisihnya.",
  },
  {
    id: "tiu-der-165",
    subPattern: "deret-suku-ke-n",
    difficulty: "sulit",
    prompt:
      "Perhatikan barisan dua larik campuran berikut:\n1, 8, 4, 13, 9, 18, 16, 23, 25, 28, ...\nHasil dari U19 + U20 adalah ...",
    options: ["133", "138", "143", "148", "153"],
    answer: "E",
    explanation:
      "Pisahkan menjadi dua larik. Larik ganjil (U1, U3, U5, U7, U9, ...): 1, 4, 9, 16, 25, ... adalah kuadrat bilangan asli k². Karena U19 merupakan urutan ke-(19 + 1) ÷ 2 = 10 pada larik ganjil, maka U19 = 10² = 100. Larik genap (U2, U4, U6, U8, U10, ...): 8, 13, 18, 23, 28, ... adalah aritmetika dengan a = 8 dan b = 5. Karena U20 merupakan urutan ke-(20 ÷ 2) = 10 pada larik genap, maka U20 = 8 + (10 - 1) × 5 = 8 + 45 = 53. Jadi U19 + U20 = 100 + 53 = 153.",
    tip: "Pisahkan indeks ganjil dan genap menjadi dua barisan independen, tentukan urutan ke-k masing-masing, lalu jumlahkan hasilnya.",
  },
  {
    id: "tiu-der-166",
    subPattern: "deret-matriks-tabel",
    difficulty: "mudah",
    prompt:
      "Perhatikan matriks bilangan berpola berikut:\n| Kolom 1 | Kolom 2 | Kolom 3 |\n| 4 | 6 | 20 |\n| 5 | 7 | 24 |\n| 3 | 11 | 28 |\n| 8 | 9 | ? |\nNilai yang tepat untuk menggantikan tanda ? adalah ...",
    options: ["34", "32", "36", "38", "40"],
    answer: "A",
    explanation:
      "Pola operasi setiap baris adalah (Kolom 1 + Kolom 2) × 2 = Kolom 3. Uji setiap baris: Baris 1: (4 + 6) × 2 = 20; Baris 2: (5 + 7) × 2 = 24; Baris 3: (3 + 11) × 2 = 28. Maka pada Baris 4: (8 + 9) × 2 = 17 × 2 = 34.",
    tip: "Bandingkan besar angka di kolom terakhir dengan jumlah dua kolom pertama pada setiap baris untuk melihat faktor pengalinya.",
  },
  {
    id: "tiu-der-167",
    subPattern: "deret-matriks-tabel",
    difficulty: "mudah",
    prompt:
      "Perhatikan matriks 3×3 berpola jumlah konstan berikut:\n| Kolom 1 | Kolom 2 | Kolom 3 |\n| 12 | 19 | 14 |\n| 17 | 15 | 13 |\n| 16 | ? | 18 |\nNilai yang tepat untuk menggantikan tanda ? adalah ...",
    options: ["9", "10", "11", "12", "13"],
    answer: "C",
    explanation:
      "Jumlah ketiga bilangan pada setiap baris dan setiap kolom selalu konstan sebesar 45. Uji baris: Baris 1 = 12 + 19 + 14 = 45; Baris 2 = 17 + 15 + 13 = 45. Uji kolom: Kolom 1 = 12 + 17 + 16 = 45; Kolom 3 = 14 + 13 + 18 = 45. Maka pada Baris 3: 16 + ? + 18 = 45 sehingga ? = 45 - 34 = 11 (cocok pula pada Kolom 2: 19 + 15 + 11 = 45).",
    tip: "Jika nilai antar sel berdekatan tanpa lonjakan ekstrem, uji terlebih dahulu apakah jumlah setiap baris atau kolom bernilai tetap.",
  },
  {
    id: "tiu-der-168",
    subPattern: "deret-matriks-tabel",
    difficulty: "mudah",
    prompt:
      "Perhatikan tabel deret bilangan berikut:\n| Kolom 1 | Kolom 2 | Kolom 3 | Kolom 4 |\n| 5 | 8 | 11 | 14 |\n| 7 | 11 | 15 | 19 |\n| 9 | 14 | 19 | ? |\nNilai yang tepat untuk menggantikan tanda ? adalah ...",
    options: ["20", "21", "22", "23", "24"],
    answer: "E",
    explanation:
      "Setiap baris membentuk deret aritmetika ke kanan dengan beda yang naik +1 per baris: Baris 1 bertambah +3 (5, 8, 11, 14); Baris 2 bertambah +4 (7, 11, 15, 19); Baris 3 bertambah +5 (9, 14, 19, ?). Maka ? = 19 + 5 = 24. (Verifikasi vertikal pada Kolom 4: 14, 19, 24 juga konsisten bertambah +5.)",
    tip: "Periksa selisih antar angka dari kiri ke kanan pada tiap baris, lalu verifikasi hasilnya dengan pola dari atas ke bawah.",
  },
  {
    id: "tiu-der-169",
    subPattern: "deret-matriks-tabel",
    difficulty: "sedang",
    prompt:
      "Perhatikan matriks bilangan berpola berikut:\n| Kolom 1 | Kolom 2 | Kolom 3 |\n| 4 | 5 | 16 |\n| 6 | 4 | 18 |\n| 5 | 7 | 30 |\n| 7 | 6 | ? |\nNilai yang tepat untuk menggantikan tanda ? adalah ...",
    options: ["32", "35", "36", "42", "49"],
    answer: "B",
    explanation:
      "Pola operasi setiap baris adalah (Kolom 1 × Kolom 2) - Kolom 1 = Kolom 3 (ekuivalen dengan Kolom 1 × (Kolom 2 - 1)). Uji: Baris 1: 4 × 5 - 4 = 20 - 4 = 16; Baris 2: 6 × 4 - 6 = 24 - 6 = 18; Baris 3: 5 × 7 - 5 = 35 - 5 = 30. Maka pada Baris 4: 7 × 6 - 7 = 42 - 7 = 35.",
    tip: "Bandingkan hasil kali dua kolom pertama dengan angka pada kolom ketiga, lalu amati hubungan selisihnya terhadap kolom pertama.",
  },
  {
    id: "tiu-der-170",
    subPattern: "deret-matriks-tabel",
    difficulty: "sedang",
    prompt:
      "Perhatikan matriks bilangan berikut:\n| Kolom 1 | Kolom 2 | Kolom 3 |\n| 3 | 5 | 14 |\n| 4 | 7 | 23 |\n| 5 | 9 | 34 |\n| 6 | 11 | ? |\nNilai yang tepat untuk menggantikan tanda ? adalah ...",
    options: ["43", "45", "46", "47", "49"],
    answer: "D",
    explanation:
      "Pola setiap baris adalah Kolom 1² + Kolom 2 = Kolom 3. Uji setiap baris: Baris 1: 3² + 5 = 9 + 5 = 14; Baris 2: 4² + 7 = 16 + 7 = 23; Baris 3: 5² + 9 = 25 + 9 = 34. Maka pada Baris 4: 6² + 11 = 36 + 11 = 47.",
    tip: "Ketika nilai kolom hasil tumbuh lebih cepat dari perkalian biasa, uji operasi kuadrat pada salah satu kolom masukan.",
  },
  {
    id: "tiu-der-171",
    subPattern: "deret-matriks-tabel",
    difficulty: "sedang",
    prompt:
      "Perhatikan tabel matriks bilangan berpola kolom berikut:\n| Kolom A | Kolom B | Kolom C |\n| 5 | 6 | 8 |\n| 4 | 7 | 5 |\n| 9 | 12 | 13 |\n| 11 | 30 | ? |\nNilai yang tepat untuk menggantikan tanda ? adalah ...",
    options: ["27", "23", "29", "31", "33"],
    answer: "A",
    explanation:
      "Pola bekerja secara vertikal pada tiap kolom dengan aturan (Baris 1 × Baris 2) - Baris 3 = Baris 4. Uji: Kolom A: (5 × 4) - 9 = 20 - 9 = 11; Kolom B: (6 × 7) - 12 = 42 - 12 = 30. Maka pada Kolom C: (8 × 5) - 13 = 40 - 13 = 27.",
    tip: "Jika pembacaan mendatar per baris tidak menunjukkan pola yang konsisten, segera uji operasi vertikal dari baris atas ke baris bawah.",
  },
  {
    id: "tiu-der-172",
    subPattern: "deret-matriks-tabel",
    difficulty: "sedang",
    prompt:
      "Perhatikan matriks bilangan empat kolom berikut:\n| Kolom 1 | Kolom 2 | Kolom 3 | Kolom 4 |\n| 8 | 4 | 9 | 18 |\n| 15 | 5 | 7 | 21 |\n| 12 | 6 | 14 | ? |\nNilai yang tepat untuk menggantikan tanda ? adalah ...",
    options: ["24", "26", "28", "30", "32"],
    answer: "C",
    explanation:
      "Pola operasi setiap baris adalah (Kolom 1 × Kolom 3) ÷ Kolom 2 = Kolom 4, atau setara dengan (Kolom 1 ÷ Kolom 2) × Kolom 3. Uji: Baris 1: (8 ÷ 4) × 9 = 2 × 9 = 18; Baris 2: (15 ÷ 5) × 7 = 3 × 7 = 21. Maka pada Baris 3: (12 ÷ 6) × 14 = 2 × 14 = 28.",
    tip: "Perhatikan apakah angka di Kolom 1 selalu habis dibagi angka di Kolom 2 sebelum dikalikan dengan Kolom 3.",
  },
  {
    id: "tiu-der-173",
    subPattern: "deret-matriks-tabel",
    difficulty: "sedang",
    prompt:
      "Perhatikan matriks bilangan berikut:\n| Kolom 1 | Kolom 2 | Kolom 3 | Kolom 4 |\n| 14 | 18 | 22 | 16 |\n| 20 | 25 | 31 | 27 |\n| 26 | 32 | 40 | ? |\nNilai yang tepat untuk menggantikan tanda ? adalah ...",
    options: ["30", "32", "34", "36", "38"],
    answer: "E",
    explanation:
      "Pada setiap kolom, bilangan di Baris 2 merupakan rata-rata (titik tengah) dari Baris 1 dan Baris 3: (Baris 1 + Baris 3) ÷ 2 = Baris 2. Uji: Kolom 1: (14 + 26) ÷ 2 = 20; Kolom 2: (18 + 32) ÷ 2 = 25; Kolom 3: (22 + 40) ÷ 2 = 31. Maka pada Kolom 4: (16 + ?) ÷ 2 = 27 sehingga 16 + ? = 54 dan ? = 54 - 16 = 38.",
    tip: "Bandingkan selisih Baris 1 ke Baris 2 dengan selisih Baris 2 ke Baris 3 pada setiap kolom untuk mengecek pola rata-rata.",
  },
  {
    id: "tiu-der-174",
    subPattern: "deret-matriks-tabel",
    difficulty: "sedang",
    prompt:
      "Perhatikan matriks bilangan berikut:\n| Kolom 1 | Kolom 2 | Kolom 3 |\n| 5 | 3 | 16 |\n| 7 | 4 | 33 |\n| 8 | 5 | 39 |\n| 9 | 6 | ? |\nNilai yang tepat untuk menggantikan tanda ? adalah ...",
    options: ["42", "45", "48", "51", "54"],
    answer: "B",
    explanation:
      "Pola setiap baris adalah selisih kuadrat: Kolom 1² - Kolom 2² = Kolom 3. Uji: Baris 1: 5² - 3² = 25 - 9 = 16; Baris 2: 7² - 4² = 49 - 16 = 33; Baris 3: 8² - 5² = 64 - 25 = 39. Maka pada Baris 4: 9² - 6² = 81 - 36 = 45.",
    tip: "Uji pola selisih kuadrat a² - b² atau faktornya (a - b)(a + b) bila nilai kolom ketiga dapat dibagi oleh selisih dan jumlah dua kolom awal.",
  },
  {
    id: "tiu-der-175",
    subPattern: "deret-matriks-tabel",
    difficulty: "sedang",
    prompt:
      "Perhatikan matriks bilangan tiga baris berikut:\n| Kolom 1 | Kolom 2 | Kolom 3 | Kolom 4 |\n| 4 | 5 | 6 | 7 |\n| 7 | 11 | 15 | 19 |\n| 9 | 14 | 21 | ? |\nNilai yang tepat untuk menggantikan tanda ? adalah ...",
    options: ["27", "28", "29", "30", "32"],
    answer: "D",
    explanation:
      "Setiap kolom memenuhi pola vertikal Baris 1² - Baris 2 = Baris 3. Uji: Kolom 1: 4² - 7 = 16 - 7 = 9; Kolom 2: 5² - 11 = 25 - 11 = 14; Kolom 3: 6² - 15 = 36 - 15 = 21. Maka pada Kolom 4: 7² - 19 = 49 - 19 = 30. (Verifikasi mendatar Baris 3: 9, 14, 21, 30 berselisih +5, +7, +9 juga konsisten menghasilkan 30.)",
    tip: "Hubungkan kuadrat angka kecil di baris paling atas dengan dua baris di bawahnya pada setiap kolom.",
  },
  {
    id: "tiu-der-176",
    subPattern: "deret-matriks-tabel",
    difficulty: "sulit",
    prompt:
      "Perhatikan matriks bilangan berpola berikut:\n| Kolom 1 | Kolom 2 | Kolom 3 |\n| 2 | 3 | 11 |\n| 4 | 5 | 29 |\n| 3 | 6 | 27 |\n| 5 | 7 | ? |\nNilai yang tepat untuk menggantikan tanda ? adalah ...",
    options: ["47", "42", "45", "49", "52"],
    answer: "A",
    explanation:
      "Pola operasi setiap baris adalah (Kolom 1 × Kolom 2) + (Kolom 1 + Kolom 2) = Kolom 3. Uji setiap baris: Baris 1: (2 × 3) + (2 + 3) = 6 + 5 = 11; Baris 2: (4 × 5) + (4 + 5) = 20 + 9 = 29; Baris 3: (3 × 6) + (3 + 6) = 18 + 9 = 27. Maka pada Baris 4: (5 × 7) + (5 + 7) = 35 + 12 = 47.",
    tip: "Kurangkan angka kolom ketiga dengan hasil kali dua kolom pertama, lalu cek apakah sisa tersebut berhubungan dengan penjumlahan kedua kolom awal.",
  },
  {
    id: "tiu-der-177",
    subPattern: "deret-matriks-tabel",
    difficulty: "sulit",
    prompt:
      "Perhatikan matriks bilangan berikut:\n| Kolom 1 | Kolom 2 | Kolom 3 |\n| 3 | 4 | 25 |\n| 5 | 2 | 29 |\n| 6 | 3 | 45 |\n| 7 | X | 85 |\nNilai bilangan bulat positif X yang tepat untuk melengkapi matriks tersebut adalah ...",
    options: ["4", "5", "6", "7", "8"],
    answer: "C",
    explanation:
      "Setiap baris mengikuti pola jumlah kuadrat: Kolom 1² + Kolom 2² = Kolom 3. Uji: Baris 1: 3² + 4² = 9 + 16 = 25; Baris 2: 5² + 2² = 25 + 4 = 29; Baris 3: 6² + 3² = 36 + 9 = 45. Maka pada Baris 4: 7² + X² = 85 sehingga 49 + X² = 85, X² = 36, dan karena X positif diperoleh X = 6.",
    tip: "Kenali pasangan angka seperti (3, 4 -> 25) sebagai petunjuk kuat pola jumlah kuadrat, lalu balik persamaannya untuk mencari variabel tengah.",
  },
  {
    id: "tiu-der-178",
    subPattern: "deret-matriks-tabel",
    difficulty: "sulit",
    prompt:
      "Perhatikan matriks bilangan berpola vertikal berikut:\n| Kolom 1 | Kolom 2 | Kolom 3 | Kolom 4 |\n| 5 | 4 | 7 | 8 |\n| 3 | 6 | 4 | 5 |\n| 7 | 14 | 17 | ? |\nNilai yang tepat untuk menggantikan tanda ? adalah ...",
    options: ["23", "24", "25", "26", "27"],
    answer: "E",
    explanation:
      "Setiap kolom memenuhi operasi vertikal (Baris 1 × Baris 2) - (Baris 1 + Baris 2) = Baris 3. Uji: Kolom 1: (5 × 3) - (5 + 3) = 15 - 8 = 7; Kolom 2: (4 × 6) - (4 + 6) = 24 - 10 = 14; Kolom 3: (7 × 4) - (7 + 4) = 28 - 11 = 17. Maka pada Kolom 4: (8 × 5) - (8 + 5) = 40 - 13 = 27.",
    tip: "Hitung hasil kali Baris 1 dan Baris 2 tiap kolom, lalu periksa seberapa besar pengurang yang diperlukan untuk memperoleh Baris 3.",
  },
  {
    id: "tiu-der-179",
    subPattern: "deret-matriks-tabel",
    difficulty: "sulit",
    prompt:
      "Perhatikan matriks bilangan berikut:\n| Kolom 1 | Kolom 2 | Kolom 3 |\n| 4 | 9 | 6 |\n| 3 | 27 | 9 |\n| 8 | 18 | 12 |\n| 5 | X | 15 |\nNilai X yang tepat untuk melengkapi matriks tersebut adalah ...",
    options: ["35", "45", "50", "55", "75"],
    answer: "B",
    explanation:
      "Setiap baris memenuhi hubungan rata-rata geometrik √(Kolom 1 × Kolom 2) = Kolom 3, atau setara dengan Kolom 1 × Kolom 2 = Kolom 3². Uji: Baris 1: 4 × 9 = 36 = 6²; Baris 2: 3 × 27 = 81 = 9²; Baris 3: 8 × 18 = 144 = 12². Maka pada Baris 4: 5 × X = 15² = 225, sehingga X = 225 ÷ 5 = 45.",
    tip: "Jika hasil kali dua bilangan pada baris pertama menghasilkan bilangan kuadrat sempurna, uji hubungan K1 × K2 = K3² pada baris lainnya.",
  },
  {
    id: "tiu-der-180",
    subPattern: "deret-matriks-tabel",
    difficulty: "sulit",
    prompt:
      "Perhatikan matriks bilangan berpangkat berikut:\n| Kolom 1 | Kolom 2 | Kolom 3 |\n| 3 | 4 | 11 |\n| 4 | 3 | 55 |\n| 5 | 7 | 76 |\n| 6 | 8 | ? |\nNilai yang tepat untuk menggantikan tanda ? adalah ...",
    options: ["144", "148", "150", "152", "160"],
    answer: "D",
    explanation:
      "Setiap baris mengikuti pola pangkat campuran: Kolom 1³ - Kolom 2² = Kolom 3. Uji setiap baris: Baris 1: 3³ - 4² = 27 - 16 = 11; Baris 2: 4³ - 3² = 64 - 9 = 55; Baris 3: 5³ - 7² = 125 - 49 = 76. Maka pada Baris 4: 6³ - 8² = 216 - 64 = 152.",
    tip: "Ketika angka di Kolom 1 kecil (3, 4, 5, 6) tetapi menghasilkan lonjakan besar pada Kolom 3, uji pangkat tiga (kubik) dikurangi kuadrat Kolom 2.",
  },
];
