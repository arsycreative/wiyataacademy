import type { QuestionDraft } from "@/modules/question-bank/domain/question";

export const perbandinganBatch4KecukupanOptimasiDrafts: readonly QuestionDraft[] = [
  {
    "id": "tiu-pk-151",
    "subPattern": "kecukupan-data",
    "difficulty": "mudah",
    "prompt": "Berapakah nilai x?\n(1) 3x - 7 = 14\n(2) x² = 49\nPutuskan apakah pernyataan (1) dan (2) berikut cukup untuk menjawab pertanyaan tersebut.",
    "options": [
      "Pernyataan (1) SAJA cukup untuk menjawab pertanyaan, tetapi pernyataan (2) SAJA tidak cukup.",
      "Pernyataan (2) SAJA cukup untuk menjawab pertanyaan, tetapi pernyataan (1) SAJA tidak cukup.",
      "DUA pernyataan BERSAMA-SAMA cukup untuk menjawab pertanyaan, tetapi SATU pernyataan SAJA tidak cukup.",
      "Pernyataan (1) SAJA cukup untuk menjawab pertanyaan dan pernyataan (2) SAJA cukup.",
      "Pernyataan (1) dan pernyataan (2) tidak cukup untuk menjawab pertanyaan."
    ],
    "answer": "A",
    "explanation": "Uji pernyataan (1): 3x - 7 = 14 menghasilkan 3x = 21 sehingga x = 7 (nilai tunggal, CUKUP). Uji pernyataan (2): x² = 49 menghasilkan x = 7 atau x = -7 karena tidak ada syarat x > 0 (dua kemungkinan nilai, TIDAK CUKUP). Jadi, pernyataan (1) SAJA cukup untuk menjawab pertanyaan, tetapi pernyataan (2) SAJA tidak cukup.",
    "tip": "Periksa apakah suatu persamaan menghasilkan tepat satu nilai tunggal; persamaan kuadrat x² = k dengan k > 0 selalu memiliki dua akar berlawanan tanda."
  },
  {
    "id": "tiu-pk-152",
    "subPattern": "kecukupan-data",
    "difficulty": "sedang",
    "prompt": "Sebuah lapangan berbentuk persegi panjang memiliki panjang p meter dan lebar l meter. Berapakah luas lapangan tersebut?\n(1) Keliling lapangan adalah 72 meter.\n(2) Panjang lapangan 4 meter lebihnya dari lebarnya, dan perbandingan panjang terhadap lebar adalah 5 : 4.\nPutuskan apakah pernyataan (1) dan (2) berikut cukup untuk menjawab pertanyaan tersebut.",
    "options": [
      "Pernyataan (1) SAJA cukup untuk menjawab pertanyaan, tetapi pernyataan (2) SAJA tidak cukup.",
      "Pernyataan (2) SAJA cukup untuk menjawab pertanyaan, tetapi pernyataan (1) SAJA tidak cukup.",
      "DUA pernyataan BERSAMA-SAMA cukup untuk menjawab pertanyaan, tetapi SATU pernyataan SAJA tidak cukup.",
      "Pernyataan (1) SAJA cukup untuk menjawab pertanyaan dan pernyataan (2) SAJA cukup.",
      "Pernyataan (1) dan pernyataan (2) tidak cukup untuk menjawab pertanyaan."
    ],
    "answer": "B",
    "explanation": "Uji pernyataan (1): 2(p + l) = 72 menghasilkan p + l = 36. Banyak pasangan (p, l) yang memenuhi dengan luas berbeda, misalnya (20, 16) menghasilkan luas 320 m² sedangkan (24, 12) menghasilkan luas 288 m² (TIDAK CUKUP). Uji pernyataan (2): p : l = 5 : 4 sehingga p = 5k dan l = 4k (k > 0). Karena p - l = 4, maka 5k - 4k = 4 sehingga k = 4. Diperoleh p = 20 m dan l = 16 m, sehingga luas = 20 × 16 = 320 m² secara tunggal (CUKUP). Jadi, pernyataan (2) SAJA cukup, tetapi pernyataan (1) SAJA tidak cukup.",
    "tip": "Untuk mencari luas persegi panjang (p × l), satu persamaan jumlah p + l tidak cukup tanpa hubungan lain antara p dan l."
  },
  {
    "id": "tiu-pk-153",
    "subPattern": "kecukupan-data",
    "difficulty": "mudah",
    "prompt": "Sebuah kelas bimbingan belajar terdiri atas peserta pria dan wanita. Berapakah rata-rata nilai ujian seluruh peserta di kelas tersebut?\n(1) Rata-rata nilai peserta pria adalah 76 dan rata-rata nilai peserta wanita adalah 84.\n(2) Perbandingan jumlah peserta pria dan wanita adalah 3 : 5.\nPutuskan apakah pernyataan (1) dan (2) berikut cukup untuk menjawab pertanyaan tersebut.",
    "options": [
      "Pernyataan (1) SAJA cukup untuk menjawab pertanyaan, tetapi pernyataan (2) SAJA tidak cukup.",
      "Pernyataan (2) SAJA cukup untuk menjawab pertanyaan, tetapi pernyataan (1) SAJA tidak cukup.",
      "DUA pernyataan BERSAMA-SAMA cukup untuk menjawab pertanyaan, tetapi SATU pernyataan SAJA tidak cukup.",
      "Pernyataan (1) SAJA cukup untuk menjawab pertanyaan dan pernyataan (2) SAJA cukup.",
      "Pernyataan (1) dan pernyataan (2) tidak cukup untuk menjawab pertanyaan."
    ],
    "answer": "C",
    "explanation": "Uji pernyataan (1): Tanpa bobot perbandingan jumlah peserta pria dan wanita, rata-rata gabungan tidak dapat ditentukan karena bisa mendekati 76 atau 84 (TIDAK CUKUP). Uji pernyataan (2): Hanya diketahui rasio jumlah peserta 3 : 5 tanpa data nilai ujian sama sekali (TIDAK CUKUP). Uji (1) dan (2) bersama-sama: Misalkan jumlah pria = 3k dan wanita = 5k (k > 0). Rata-rata gabungan = (3k × 76 + 5k × 84) / (3k + 5k) = (228k + 420k) / 8k = 648 / 8 = 81. Faktor k saling meniadakan sehingga rata-rata gabungan tunggal (CUKUP). Jadi, dua pernyataan bersama-sama cukup, tetapi satu pernyataan saja tidak cukup.",
    "tip": "Rata-rata gabungan tidak memerlukan jumlah absolut tiap kelompok; cukup ketahui rata-rata masing-masing kelompok beserta rasio bobotnya."
  },
  {
    "id": "tiu-pk-154",
    "subPattern": "kecukupan-data",
    "difficulty": "sedang",
    "prompt": "Sebuah toko menjual kemeja dengan harga jual Rp180.000,00 per potong. Berapakah persentase keuntungan yang diperoleh toko dari penjualan satu potong kemeja tersebut?\n(1) Harga beli satu potong kemeja tersebut adalah Rp150.000,00.\n(2) Keuntungan per potong kemeja adalah Rp30.000,00.\nPutuskan apakah pernyataan (1) dan (2) berikut cukup untuk menjawab pertanyaan tersebut.",
    "options": [
      "Pernyataan (1) SAJA cukup untuk menjawab pertanyaan, tetapi pernyataan (2) SAJA tidak cukup.",
      "Pernyataan (2) SAJA cukup untuk menjawab pertanyaan, tetapi pernyataan (1) SAJA tidak cukup.",
      "DUA pernyataan BERSAMA-SAMA cukup untuk menjawab pertanyaan, tetapi SATU pernyataan SAJA tidak cukup.",
      "Pernyataan (1) SAJA cukup untuk menjawab pertanyaan dan pernyataan (2) SAJA cukup.",
      "Pernyataan (1) dan pernyataan (2) tidak cukup untuk menjawab pertanyaan."
    ],
    "answer": "D",
    "explanation": "Diketahui Harga Jual (HJ) = Rp180.000,00 dan persentase untung = (Untung / Harga Beli) × 100%. Uji pernyataan (1): Harga Beli (HB) = Rp150.000,00 sehingga Untung = 180.000 - 150.000 = Rp30.000,00 dan persentase untung = (30.000 / 150.000) × 100% = 20% (CUKUP). Uji pernyataan (2): Untung = Rp30.000,00 sehingga HB = HJ - Untung = 180.000 - 30.000 = Rp150.000,00 dan persentase untung = (30.000 / 150.000) × 100% = 20% (CUKUP). Jadi, pernyataan (1) SAJA cukup dan pernyataan (2) SAJA cukup.",
    "tip": "Karena harga jual sudah diketahui di soal, mengetahui harga beli ATAU nominal keuntungan sama-sama otomatis menentukan besaran satunya."
  },
  {
    "id": "tiu-pk-155",
    "subPattern": "kecukupan-data",
    "difficulty": "sedang",
    "prompt": "Jika a dan b adalah bilangan real, berapakah nilai a + 2b?\n(1) 2a - 3b = 12\n(2) 6b - 4a = -24\nPutuskan apakah pernyataan (1) dan (2) berikut cukup untuk menjawab pertanyaan tersebut.",
    "options": [
      "Pernyataan (1) SAJA cukup untuk menjawab pertanyaan, tetapi pernyataan (2) SAJA tidak cukup.",
      "Pernyataan (2) SAJA cukup untuk menjawab pertanyaan, tetapi pernyataan (1) SAJA tidak cukup.",
      "DUA pernyataan BERSAMA-SAMA cukup untuk menjawab pertanyaan, tetapi SATU pernyataan SAJA tidak cukup.",
      "Pernyataan (1) SAJA cukup untuk menjawab pertanyaan dan pernyataan (2) SAJA cukup.",
      "Pernyataan (1) dan pernyataan (2) tidak cukup untuk menjawab pertanyaan."
    ],
    "answer": "E",
    "explanation": "Uji pernyataan (1): 2a - 3b = 12 memiliki banyak solusi dengan nilai a + 2b berbeda, misalnya (a, b) = (6, 0) memberi a + 2b = 6, sedangkan (a, b) = (9, 2) memberi a + 2b = 13 (TIDAK CUKUP). Uji pernyataan (2): 6b - 4a = -24 jika kedua ruas dibagi -2 menjadi 2a - 3b = 12, persis sama dengan pernyataan (1) (TIDAK CUKUP). Uji (1) dan (2) bersama-sama: Kedua persamaan saling bergantung (ekuivalen), sehingga tetap hanya tersedia satu persamaan bebas untuk dua variabel dan ekspresi a + 2b bukan kelipatan 2a - 3b (TIDAK CUKUP). Jadi, pernyataan (1) dan (2) tidak cukup.",
    "tip": "Waspadai dua persamaan linear yang tampak berbeda tetapi sebenarnya kelipatan satu sama lain (persamaan dependen); selalu sederhanakan dulu kedua persamaan."
  },
  {
    "id": "tiu-pk-156",
    "subPattern": "kecukupan-data",
    "difficulty": "sulit",
    "prompt": "Jika x adalah bilangan real, apakah x > 0?\n(1) x³ > x²\n(2) x² > x\nPutuskan apakah pernyataan (1) dan (2) berikut cukup untuk menjawab pertanyaan tersebut.",
    "options": [
      "Pernyataan (1) SAJA cukup untuk menjawab pertanyaan, tetapi pernyataan (2) SAJA tidak cukup.",
      "Pernyataan (2) SAJA cukup untuk menjawab pertanyaan, tetapi pernyataan (1) SAJA tidak cukup.",
      "DUA pernyataan BERSAMA-SAMA cukup untuk menjawab pertanyaan, tetapi SATU pernyataan SAJA tidak cukup.",
      "Pernyataan (1) SAJA cukup untuk menjawab pertanyaan dan pernyataan (2) SAJA cukup.",
      "Pernyataan (1) dan pernyataan (2) tidak cukup untuk menjawab pertanyaan."
    ],
    "answer": "A",
    "explanation": "Uji pernyataan (1): x³ > x² ekuivalen dengan x²(x - 1) > 0. Karena x² ≥ 0 untuk semua bilangan real, agar hasil kalinya positif ketat maka harus x² > 0 (x ≠ 0) dan x - 1 > 0, yaitu x > 1. Karena x > 1, maka x PASTI lebih besar dari 0 (jawaban pasti 'Ya', CUKUP). Uji pernyataan (2): x² > x ekuivalen dengan x(x - 1) > 0, yang dipenuhi oleh x < 0 atau x > 1. Untuk x = 2 hasilnya 'Ya' (x > 0), sedangkan untuk x = -1 berlaku (-1)² = 1 > -1 tetapi x < 0 sehingga hasilnya 'Tidak' (TIDAK CUKUP). Jadi, pernyataan (1) SAJA cukup, tetapi pernyataan (2) SAJA tidak cukup.",
    "tip": "Pindahkan seluruh suku ke satu ruas dan faktorkan daripada membagi kedua ruas dengan variabel yang tandanya belum pasti; uji juga bilangan negatif dan pecahan antara 0 dan 1."
  },
  {
    "id": "tiu-pk-157",
    "subPattern": "kecukupan-data",
    "difficulty": "sulit",
    "prompt": "Diketahui m dan n adalah bilangan bulat. Apakah n merupakan bilangan genap?\n(1) m × n adalah bilangan genap.\n(2) m² + m + n adalah bilangan genap.\nPutuskan apakah pernyataan (1) dan (2) berikut cukup untuk menjawab pertanyaan tersebut.",
    "options": [
      "Pernyataan (1) SAJA cukup untuk menjawab pertanyaan, tetapi pernyataan (2) SAJA tidak cukup.",
      "Pernyataan (2) SAJA cukup untuk menjawab pertanyaan, tetapi pernyataan (1) SAJA tidak cukup.",
      "DUA pernyataan BERSAMA-SAMA cukup untuk menjawab pertanyaan, tetapi SATU pernyataan SAJA tidak cukup.",
      "Pernyataan (1) SAJA cukup untuk menjawab pertanyaan dan pernyataan (2) SAJA cukup.",
      "Pernyataan (1) dan pernyataan (2) tidak cukup untuk menjawab pertanyaan."
    ],
    "answer": "B",
    "explanation": "Uji pernyataan (1): m × n genap berarti minimal salah satu dari m atau n genap. Jika m = 2 dan n = 3, maka m × n = 6 (genap) tetapi n ganjil ('Tidak'). Jika m = 3 dan n = 2, maka m × n = 6 (genap) dan n genap ('Ya'). Jadi pernyataan (1) TIDAK CUKUP. Uji pernyataan (2): Perhatikan bahwa m² + m = m(m + 1) adalah hasil kali dua bilangan bulat berurutan, sehingga SELALU bernilai genap untuk setiap bilangan bulat m (baik positif, nol, maupun negatif). Karena (genap) + n = genap, maka n PASTI bilangan genap (jawaban pasti 'Ya', CUKUP). Jadi, pernyataan (2) SAJA cukup, tetapi pernyataan (1) SAJA tidak cukup.",
    "tip": "Faktorkan ekspresi aljabar bilangan bulat; hasil kali dua bilangan bulat berurutan seperti m(m + 1) selalu memiliki sifat paritas yang tetap."
  },
  {
    "id": "tiu-pk-158",
    "subPattern": "kecukupan-data",
    "difficulty": "sedang",
    "prompt": "Berapakah usia Raka saat ini?\n(1) Enam tahun yang lalu, usia Raka sama dengan setengah usia kakaknya saat itu.\n(2) Empat tahun yang akan datang, jumlah usia Raka dan kakaknya adalah 56 tahun.\nPutuskan apakah pernyataan (1) dan (2) berikut cukup untuk menjawab pertanyaan tersebut.",
    "options": [
      "Pernyataan (1) SAJA cukup untuk menjawab pertanyaan, tetapi pernyataan (2) SAJA tidak cukup.",
      "Pernyataan (2) SAJA cukup untuk menjawab pertanyaan, tetapi pernyataan (1) SAJA tidak cukup.",
      "DUA pernyataan BERSAMA-SAMA cukup untuk menjawab pertanyaan, tetapi SATU pernyataan SAJA tidak cukup.",
      "Pernyataan (1) SAJA cukup untuk menjawab pertanyaan dan pernyataan (2) SAJA cukup.",
      "Pernyataan (1) dan pernyataan (2) tidak cukup untuk menjawab pertanyaan."
    ],
    "answer": "C",
    "explanation": "Misalkan usia Raka saat ini R dan usia kakaknya K. Uji pernyataan (1): R - 6 = (K - 6)/2 menghasilkan K = 2R - 6. Satu persamaan dua variabel tidak menentukan R secara tunggal (TIDAK CUKUP). Uji pernyataan (2): (R + 4) + (K + 4) = 56 menghasilkan R + K = 48. Satu persamaan dua variabel juga tidak menentukan R (TIDAK CUKUP). Uji (1) dan (2) bersama-sama: Substitusi K = 2R - 6 ke R + K = 48 memberi 3R - 6 = 48, sehingga 3R = 54 dan R = 18 tahun (dengan K = 30 tahun). Nilai R tunggal (CUKUP). Jadi, dua pernyataan bersama-sama cukup, tetapi satu pernyataan saja tidak cukup.",
    "tip": "Ubah kalimat umur menjadi sistem persamaan dua variabel dan cek apakah kedua persamaan saling bebas (tidak ekuivalen)."
  },
  {
    "id": "tiu-pk-159",
    "subPattern": "kecukupan-data",
    "difficulty": "sedang",
    "prompt": "Sebuah lingkaran berjari-jari r cm berada tepat di dalam sebuah persegi sehingga keempat sisi persegi menyinggung lingkaran tersebut. Berapakah luas lingkaran tersebut?\n(1) Keliling persegi adalah 56 cm.\n(2) Panjang diagonal persegi adalah 14√2 cm.\nPutuskan apakah pernyataan (1) dan (2) berikut cukup untuk menjawab pertanyaan tersebut.",
    "options": [
      "Pernyataan (1) SAJA cukup untuk menjawab pertanyaan, tetapi pernyataan (2) SAJA tidak cukup.",
      "Pernyataan (2) SAJA cukup untuk menjawab pertanyaan, tetapi pernyataan (1) SAJA tidak cukup.",
      "DUA pernyataan BERSAMA-SAMA cukup untuk menjawab pertanyaan, tetapi SATU pernyataan SAJA tidak cukup.",
      "Pernyataan (1) SAJA cukup untuk menjawab pertanyaan dan pernyataan (2) SAJA cukup.",
      "Pernyataan (1) dan pernyataan (2) tidak cukup untuk menjawab pertanyaan."
    ],
    "answer": "D",
    "explanation": "Karena lingkaran menyinggung keempat sisi persegi, diameter lingkaran sama dengan panjang sisi persegi s, sehingga r = s/2 dan luas lingkaran = πr² = π(s/2)². Uji pernyataan (1): 4s = 56 menghasilkan s = 14 cm, r = 7 cm, dan luas = 49π cm² secara tunggal (CUKUP). Uji pernyataan (2): Diagonal persegi d = s√2 = 14√2 menghasilkan s = 14 cm, r = 7 cm, dan luas = 49π cm² secara tunggal (CUKUP). Jadi, pernyataan (1) SAJA cukup dan pernyataan (2) SAJA cukup.",
    "tip": "Hubungkan jari-jari lingkaran dalam dengan panjang sisi persegi; informasi apa pun yang mengunci panjang sisi persegi otomatis mengunci luas lingkaran."
  },
  {
    "id": "tiu-pk-160",
    "subPattern": "kecukupan-data",
    "difficulty": "sulit",
    "prompt": "Jika x dan y adalah bilangan real tak nol, apakah x > y?\n(1) x² > y²\n(2) x × y > 0\nPutuskan apakah pernyataan (1) dan (2) berikut cukup untuk menjawab pertanyaan tersebut.",
    "options": [
      "Pernyataan (1) SAJA cukup untuk menjawab pertanyaan, tetapi pernyataan (2) SAJA tidak cukup.",
      "Pernyataan (2) SAJA cukup untuk menjawab pertanyaan, tetapi pernyataan (1) SAJA tidak cukup.",
      "DUA pernyataan BERSAMA-SAMA cukup untuk menjawab pertanyaan, tetapi SATU pernyataan SAJA tidak cukup.",
      "Pernyataan (1) SAJA cukup untuk menjawab pertanyaan dan pernyataan (2) SAJA cukup.",
      "Pernyataan (1) dan pernyataan (2) tidak cukup untuk menjawab pertanyaan."
    ],
    "answer": "E",
    "explanation": "Uji pernyataan (1): x² > y² berarti |x| > |y|. Jika x = 3, y = 2 maka x > y ('Ya'); jika x = -3, y = 2 maka x < y ('Tidak') (TIDAK CUKUP). Uji pernyataan (2): xy > 0 hanya menyatakan x dan y bertanda sama. Bisa x = 3, y = 2 ('Ya') atau x = 2, y = 3 ('Tidak') (TIDAK CUKUP). Uji (1) dan (2) bersama-sama: Keduanya masih mengizinkan x dan y sama-sama positif ATAU sama-sama negatif. Jika x = 3 dan y = 2 (x² = 9 > 4, xy = 6 > 0), maka x > y ('Ya'). Namun jika x = -3 dan y = -2 (x² = 9 > 4, xy = 6 > 0), maka x = -3 < -2 = y ('Tidak'). Jadi, pernyataan (1) dan (2) bersama-sama tetap tidak cukup.",
    "tip": "Syarat xy > 0 tidak berarti kedua bilangan positif; jangan lupa menguji kasus ketika keduanya sama-sama negatif!"
  },
  {
    "id": "tiu-pk-161",
    "subPattern": "kecukupan-data",
    "difficulty": "sulit",
    "prompt": "Jika p dan q adalah bilangan real, apakah p > q?\n(1) p² > q²\n(2) p + q > 0\nPutuskan apakah pernyataan (1) dan (2) berikut cukup untuk menjawab pertanyaan tersebut.",
    "options": [
      "Pernyataan (1) SAJA cukup untuk menjawab pertanyaan, tetapi pernyataan (2) SAJA tidak cukup.",
      "Pernyataan (2) SAJA cukup untuk menjawab pertanyaan, tetapi pernyataan (1) SAJA tidak cukup.",
      "DUA pernyataan BERSAMA-SAMA cukup untuk menjawab pertanyaan, tetapi SATU pernyataan SAJA tidak cukup.",
      "Pernyataan (1) SAJA cukup untuk menjawab pertanyaan dan pernyataan (2) SAJA cukup.",
      "Pernyataan (1) dan pernyataan (2) tidak cukup untuk menjawab pertanyaan."
    ],
    "answer": "C",
    "explanation": "Uji pernyataan (1): p² > q² bisa dipenuhi oleh p = 3, q = 2 ('Ya') maupun p = -3, q = 2 ('Tidak') (TIDAK CUKUP). Uji pernyataan (2): p + q > 0 bisa dipenuhi oleh p = 3, q = 1 ('Ya') maupun p = 1, q = 3 ('Tidak') (TIDAK CUKUP). Uji (1) dan (2) bersama-sama: Pertidaksamaan p² > q² ekuivalen dengan p² - q² > 0 atau (p - q)(p + q) > 0. Karena pernyataan (2) menjamin p + q > 0, maka kedua ruas dapat dibagi dengan bilangan positif (p + q) tanpa mengubah tanda pertidaksamaan, menghasilkan p - q > 0 sehingga p > q (pasti 'Ya', CUKUP). Jadi, dua pernyataan bersama-sama cukup, tetapi satu pernyataan saja tidak cukup.",
    "tip": "Gunakan identitas selisih kuadrat p² - q² = (p - q)(p + q) untuk mengaitkan pertidaksamaan kuadrat dengan tanda dari p + q."
  },
  {
    "id": "tiu-pk-162",
    "subPattern": "kecukupan-data",
    "difficulty": "mudah",
    "prompt": "Lima bilangan bulat berurutan disusun dari yang terkecil hingga terbesar. Berapakah rata-rata kelima bilangan tersebut?\n(1) Median kelima bilangan tersebut adalah 19.\n(2) Jumlah bilangan terkecil dan bilangan terbesar adalah 38.\nPutuskan apakah pernyataan (1) dan (2) berikut cukup untuk menjawab pertanyaan tersebut.",
    "options": [
      "Pernyataan (1) SAJA cukup untuk menjawab pertanyaan, tetapi pernyataan (2) SAJA tidak cukup.",
      "Pernyataan (2) SAJA cukup untuk menjawab pertanyaan, tetapi pernyataan (1) SAJA tidak cukup.",
      "DUA pernyataan BERSAMA-SAMA cukup untuk menjawab pertanyaan, tetapi SATU pernyataan SAJA tidak cukup.",
      "Pernyataan (1) SAJA cukup untuk menjawab pertanyaan dan pernyataan (2) SAJA cukup.",
      "Pernyataan (1) dan pernyataan (2) tidak cukup untuk menjawab pertanyaan."
    ],
    "answer": "D",
    "explanation": "Misalkan lima bilangan bulat berurutan adalah n - 2, n - 1, n, n + 1, n + 2. Rata-ratanya adalah (5n) / 5 = n. Uji pernyataan (1): Median adalah suku tengah yaitu n = 19, sehingga rata-rata = 19 (CUKUP). Uji pernyataan (2): Jumlah terkecil dan terbesar adalah (n - 2) + (n + 2) = 2n = 38, sehingga n = 19 dan rata-rata = 19 (CUKUP). Jadi, pernyataan (1) SAJA cukup dan pernyataan (2) SAJA cukup.",
    "tip": "Pada barisan bilangan berurutan (barisan aritmetika), rata-rata selalu sama dengan median dan sama dengan setengah dari jumlah suku pertama serta suku terakhir."
  },
  {
    "id": "tiu-pk-163",
    "subPattern": "kecukupan-data",
    "difficulty": "sedang",
    "prompt": "Segitiga ABC siku-siku di B. Berapakah luas segitiga ABC?\n(1) Panjang AB = 6 cm dan panjang hipotenusa AC = 10 cm.\n(2) Keliling segitiga ABC adalah 24 cm.\nPutuskan apakah pernyataan (1) dan (2) berikut cukup untuk menjawab pertanyaan tersebut.",
    "options": [
      "Pernyataan (1) SAJA cukup untuk menjawab pertanyaan, tetapi pernyataan (2) SAJA tidak cukup.",
      "Pernyataan (2) SAJA cukup untuk menjawab pertanyaan, tetapi pernyataan (1) SAJA tidak cukup.",
      "DUA pernyataan BERSAMA-SAMA cukup untuk menjawab pertanyaan, tetapi SATU pernyataan SAJA tidak cukup.",
      "Pernyataan (1) SAJA cukup untuk menjawab pertanyaan dan pernyataan (2) SAJA cukup.",
      "Pernyataan (1) dan pernyataan (2) tidak cukup untuk menjawab pertanyaan."
    ],
    "answer": "A",
    "explanation": "Uji pernyataan (1): Karena siku-siku di B, berlaku AB² + BC² = AC², sehingga 6² + BC² = 10² yang memberi BC = 8 cm. Luas segitiga ABC = 1/2 × AB × BC = 1/2 × 6 × 8 = 24 cm² secara tunggal (CUKUP). Uji pernyataan (2): Keliling 24 cm pada segitiga siku-siku tidak mensyaratkan panjang sisi berupa bilangan bulat. Selain segitiga bersisi (6, 8, 10) dengan luas 24 cm², segitiga siku-siku sama kaki dengan sisi siku-siku a = 24/(2 + √2) ≈ 7,03 cm juga berkeliling 24 cm tetapi luasnya 1/2 × a² ≈ 24,71 cm² (TIDAK CUKUP). Jadi, pernyataan (1) SAJA cukup, tetapi pernyataan (2) SAJA tidak cukup.",
    "tip": "Jangan mengasumsikan panjang sisi bangun datar harus berupa bilangan bulat (tripel Pythagoras) kecuali dinyatakan secara eksplisit dalam soal."
  },
  {
    "id": "tiu-pk-164",
    "subPattern": "kecukupan-data",
    "difficulty": "sedang",
    "prompt": "Jika x dan y adalah bilangan positif, berapakah nilai dari (3x + 2y) / (x + y)?\n(1) x + y = 20\n(2) x : y = 3 : 2\nPutuskan apakah pernyataan (1) dan (2) berikut cukup untuk menjawab pertanyaan tersebut.",
    "options": [
      "Pernyataan (1) SAJA cukup untuk menjawab pertanyaan, tetapi pernyataan (2) SAJA tidak cukup.",
      "Pernyataan (2) SAJA cukup untuk menjawab pertanyaan, tetapi pernyataan (1) SAJA tidak cukup.",
      "DUA pernyataan BERSAMA-SAMA cukup untuk menjawab pertanyaan, tetapi SATU pernyataan SAJA tidak cukup.",
      "Pernyataan (1) SAJA cukup untuk menjawab pertanyaan dan pernyataan (2) SAJA cukup.",
      "Pernyataan (1) dan pernyataan (2) tidak cukup untuk menjawab pertanyaan."
    ],
    "answer": "B",
    "explanation": "Uji pernyataan (1): Dengan x + y = 20, ekspresi menjadi (2(x + y) + x) / (x + y) = 2 + x/20, yang masih bergantung pada nilai x. Jika x = 12, y = 8 hasilnya 2,6; jika x = 10, y = 10 hasilnya 2,5 (TIDAK CUKUP). Uji pernyataan (2): x : y = 3 : 2 berarti x = 3k dan y = 2k untuk suatu k > 0. Substitusi menghasilkan (3(3k) + 2(2k)) / (3k + 2k) = 13k / 5k = 13/5 = 2,6 secara tunggal karena k habis dibagi (CUKUP). Jadi, pernyataan (2) SAJA cukup, tetapi pernyataan (1) SAJA tidak cukup.",
    "tip": "Untuk pecahan aljabar homogen (pembilang dan penyebut berderajat sama), rasio x : y sudah cukup tanpa perlu mengetahui nilai x dan y masing-masing."
  },
  {
    "id": "tiu-pk-165",
    "subPattern": "kecukupan-data",
    "difficulty": "mudah",
    "prompt": "Pada awal tahun, harga sebuah laptop dinaikkan sebesar p%, kemudian pada akhir tahun diturunkan sebesar q% dari harga setelah kenaikan. Berapakah harga laptop tersebut dalam rupiah pada akhir tahun?\n(1) p = 20 dan q = 25.\n(2) Harga laptop pada akhir tahun adalah 90% dari harga awalnya.\nPutuskan apakah pernyataan (1) dan (2) berikut cukup untuk menjawab pertanyaan tersebut.",
    "options": [
      "Pernyataan (1) SAJA cukup untuk menjawab pertanyaan, tetapi pernyataan (2) SAJA tidak cukup.",
      "Pernyataan (2) SAJA cukup untuk menjawab pertanyaan, tetapi pernyataan (1) SAJA tidak cukup.",
      "DUA pernyataan BERSAMA-SAMA cukup untuk menjawab pertanyaan, tetapi SATU pernyataan SAJA tidak cukup.",
      "Pernyataan (1) SAJA cukup untuk menjawab pertanyaan dan pernyataan (2) SAJA cukup.",
      "Pernyataan (1) dan pernyataan (2) tidak cukup untuk menjawab pertanyaan."
    ],
    "answer": "E",
    "explanation": "Uji pernyataan (1): Harga akhir = (1 + 20%) × (1 - 25%) × Harga Awal = 1,20 × 0,75 × Harga Awal = 0,90 × Harga Awal. Karena harga awal dalam rupiah tidak diketahui, harga akhir dalam rupiah tidak dapat ditentukan (TIDAK CUKUP). Uji pernyataan (2): Hanya memberikan rasio 90% dari harga awal tanpa nilai rupiah apa pun (TIDAK CUKUP). Uji (1) dan (2) bersama-sama: Kedua pernyataan hanya menyatakan informasi proporsi yang sama (harga akhir = 90% harga awal) tanpa satu pun data nominal rupiah (TIDAK CUKUP). Jadi, pernyataan (1) dan (2) tidak cukup.",
    "tip": "Untuk mencari nilai nominal (rupiah), informasi yang hanya berupa persentase atau perbandingan tidak akan pernah cukup tanpa minimal satu angka nominal patokan."
  },
  {
    "id": "tiu-pk-166",
    "subPattern": "kecukupan-data",
    "difficulty": "sedang",
    "prompt": "Diketahui n adalah bilangan bulat positif. Apakah n habis dibagi 6?\n(1) n = 12k + 9 untuk suatu bilangan bulat k ≥ 0.\n(2) n adalah kelipatan 3.\nPutuskan apakah pernyataan (1) dan (2) berikut cukup untuk menjawab pertanyaan tersebut.",
    "options": [
      "Pernyataan (1) SAJA cukup untuk menjawab pertanyaan, tetapi pernyataan (2) SAJA tidak cukup.",
      "Pernyataan (2) SAJA cukup untuk menjawab pertanyaan, tetapi pernyataan (1) SAJA tidak cukup.",
      "DUA pernyataan BERSAMA-SAMA cukup untuk menjawab pertanyaan, tetapi SATU pernyataan SAJA tidak cukup.",
      "Pernyataan (1) SAJA cukup untuk menjawab pertanyaan dan pernyataan (2) SAJA cukup.",
      "Pernyataan (1) dan pernyataan (2) tidak cukup untuk menjawab pertanyaan."
    ],
    "answer": "A",
    "explanation": "Uji pernyataan (1): n = 12k + 9 = 6(2k + 1) + 3. Untuk setiap bilangan bulat k ≥ 0, n selalu bersisa 3 jika dibagi 6 (dan selalu ganjil), sehingga n PASTI TIDAK habis dibagi 6. Karena pertanyaan 'Apakah n habis dibagi 6?' terjawab secara pasti dengan 'Tidak', pernyataan (1) SAJA CUKUP! Uji pernyataan (2): Kelipatan 3 bisa n = 9 (tidak habis dibagi 6, 'Tidak') atau n = 12 (habis dibagi 6, 'Ya'), sehingga tidak konsisten (TIDAK CUKUP). Jadi, pernyataan (1) SAJA cukup, tetapi pernyataan (2) SAJA tidak cukup.",
    "tip": "Pada pertanyaan 'Apakah ...?' (Ya/Tidak), jawaban yang pasti 'TIDAK' tetap dihitung CUKUP; data baru dianggap tidak cukup jika masih bisa 'Ya' dan bisa 'Tidak'."
  },
  {
    "id": "tiu-pk-167",
    "subPattern": "kecukupan-data",
    "difficulty": "sulit",
    "prompt": "Tiga bilangan bulat positif a, b, dan c memenuhi a < b < c. Berapakah nilai b?\n(1) Rata-rata dari a, b, dan c adalah 2.\n(2) c = 3.\nPutuskan apakah pernyataan (1) dan (2) berikut cukup untuk menjawab pertanyaan tersebut.",
    "options": [
      "Pernyataan (1) SAJA cukup untuk menjawab pertanyaan, tetapi pernyataan (2) SAJA tidak cukup.",
      "Pernyataan (2) SAJA cukup untuk menjawab pertanyaan, tetapi pernyataan (1) SAJA tidak cukup.",
      "DUA pernyataan BERSAMA-SAMA cukup untuk menjawab pertanyaan, tetapi SATU pernyataan SAJA tidak cukup.",
      "Pernyataan (1) SAJA cukup untuk menjawab pertanyaan dan pernyataan (2) SAJA cukup.",
      "Pernyataan (1) dan pernyataan (2) tidak cukup untuk menjawab pertanyaan."
    ],
    "answer": "D",
    "explanation": "Karena a, b, dan c adalah bilangan bulat positif (≥ 1) dengan a < b < c, maka pasti berlaku a ≥ 1, b ≥ 2, dan c ≥ 3. Uji pernyataan (1): Rata-rata = 2 berarti a + b + c = 6. Karena batas bawah masing-masing adalah 1, 2, dan 3 dengan jumlah minimum 1 + 2 + 3 = 6, satu-satunya solusi adalah a = 1, b = 2, dan c = 3. Nilai b = 2 tunggal (CUKUP). Uji pernyataan (2): Dengan c = 3 dan 1 ≤ a < b < 3 berupa bilangan bulat, satu-satunya pasangan yang mungkin adalah a = 1 dan b = 2. Nilai b = 2 tunggal (CUKUP). Jadi, pernyataan (1) SAJA cukup dan pernyataan (2) SAJA cukup.",
    "tip": "Manfaatkan batas bawah syarat 'bilangan bulat positif berbeda' (minimal 1, 2, 3) untuk mengecek apakah hanya ada satu kombinasi yang mungkin."
  },
  {
    "id": "tiu-pk-168",
    "subPattern": "kecukupan-data",
    "difficulty": "sedang",
    "prompt": "Jika a dan b adalah bilangan real, berapakah nilai dari a² - 2ab + b²?\n(1) a + b = 10\n(2) b - a = 4\nPutuskan apakah pernyataan (1) dan (2) berikut cukup untuk menjawab pertanyaan tersebut.",
    "options": [
      "Pernyataan (1) SAJA cukup untuk menjawab pertanyaan, tetapi pernyataan (2) SAJA tidak cukup.",
      "Pernyataan (2) SAJA cukup untuk menjawab pertanyaan, tetapi pernyataan (1) SAJA tidak cukup.",
      "DUA pernyataan BERSAMA-SAMA cukup untuk menjawab pertanyaan, tetapi SATU pernyataan SAJA tidak cukup.",
      "Pernyataan (1) SAJA cukup untuk menjawab pertanyaan dan pernyataan (2) SAJA cukup.",
      "Pernyataan (1) dan pernyataan (2) tidak cukup untuk menjawab pertanyaan."
    ],
    "answer": "B",
    "explanation": "Sederhanakan pertanyaan terlebih dahulu: a² - 2ab + b² = (a - b)² = (b - a)². Uji pernyataan (1): Dengan a + b = 10, jika a = 3, b = 7 maka (a - b)² = 16; jika a = 5, b = 5 maka (a - b)² = 0 (TIDAK CUKUP). Uji pernyataan (2): Dengan b - a = 4, langsung diperoleh (b - a)² = 4² = 16 secara tunggal tanpa perlu mengetahui a dan b masing-masing (CUKUP). Jadi, pernyataan (2) SAJA cukup, tetapi pernyataan (1) SAJA tidak cukup.",
    "tip": "Faktorkan ekspresi yang ditanyakan sebelum menilai pernyataan (1) dan (2), karena sering kali kita hanya membutuhkan nilai selisih atau jumlahnya saja."
  },
  {
    "id": "tiu-pk-169",
    "subPattern": "kecukupan-data",
    "difficulty": "sedang",
    "prompt": "Sebuah trapesium sama kaki memiliki dua sisi sejajar dengan panjang a cm dan b cm serta tinggi t cm. Berapakah luas trapesium tersebut?\n(1) Jumlah panjang kedua sisi sejajarnya adalah 26 cm.\n(2) Panjang masing-masing kaki trapesium adalah 10 cm dan selisih panjang kedua sisi sejajarnya adalah 12 cm.\nPutuskan apakah pernyataan (1) dan (2) berikut cukup untuk menjawab pertanyaan tersebut.",
    "options": [
      "Pernyataan (1) SAJA cukup untuk menjawab pertanyaan, tetapi pernyataan (2) SAJA tidak cukup.",
      "Pernyataan (2) SAJA cukup untuk menjawab pertanyaan, tetapi pernyataan (1) SAJA tidak cukup.",
      "DUA pernyataan BERSAMA-SAMA cukup untuk menjawab pertanyaan, tetapi SATU pernyataan SAJA tidak cukup.",
      "Pernyataan (1) SAJA cukup untuk menjawab pertanyaan dan pernyataan (2) SAJA cukup.",
      "Pernyataan (1) dan pernyataan (2) tidak cukup untuk menjawab pertanyaan."
    ],
    "answer": "C",
    "explanation": "Luas trapesium = 1/2 × (a + b) × t. Uji pernyataan (1): Diketahui a + b = 26 cm, tetapi tinggi t tidak diketahui (TIDAK CUKUP). Uji pernyataan (2): Pada trapesium sama kaki, proyeksi masing-masing kaki pada alas adalah |a - b| / 2 = 12 / 2 = 6 cm. Dengan teorema Pythagoras pada segitiga siku-siku bersisi miring 10 cm, diperoleh tinggi t = √(10² - 6²) = √64 = 8 cm. Namun jumlah sisi sejajar (a + b) belum diketahui karena banyak pasangan positif dengan selisih 12, misalnya (19, 7) dan (14, 2) (TIDAK CUKUP). Uji (1) dan (2) bersama-sama: Diperoleh a + b = 26 cm (dengan a = 19 cm, b = 7 cm valid) dan t = 8 cm, sehingga Luas = 1/2 × 26 × 8 = 104 cm² (CUKUP). Jadi, dua pernyataan bersama-sama cukup, tetapi satu pernyataan saja tidak cukup.",
    "tip": "Tulis rumus luas trapesium terlebih dahulu untuk melihat dua komponen yang dibutuhkan: jumlah sisi sejajar dan tinggi."
  },
  {
    "id": "tiu-pk-170",
    "subPattern": "kecukupan-data",
    "difficulty": "sulit",
    "prompt": "Nilai ujian matematika 4 orang peserta berupa bilangan bulat positif yang disusun dari terkecil ke terbesar. Berapakah nilai tertinggi di antara keempat peserta tersebut?\n(1) Rata-rata nilai keempat peserta adalah 80.\n(2) Median nilai keempat peserta adalah 80.\nPutuskan apakah pernyataan (1) dan (2) berikut cukup untuk menjawab pertanyaan tersebut.",
    "options": [
      "Pernyataan (1) SAJA cukup untuk menjawab pertanyaan, tetapi pernyataan (2) SAJA tidak cukup.",
      "Pernyataan (2) SAJA cukup untuk menjawab pertanyaan, tetapi pernyataan (1) SAJA tidak cukup.",
      "DUA pernyataan BERSAMA-SAMA cukup untuk menjawab pertanyaan, tetapi SATU pernyataan SAJA tidak cukup.",
      "Pernyataan (1) SAJA cukup untuk menjawab pertanyaan dan pernyataan (2) SAJA cukup.",
      "Pernyataan (1) dan pernyataan (2) tidak cukup untuk menjawab pertanyaan."
    ],
    "answer": "E",
    "explanation": "Misalkan keempat nilai terurut adalah x₁ ≤ x₂ ≤ x₃ ≤ x₄. Uji pernyataan (1): Rata-rata 80 berarti x₁ + x₂ + x₃ + x₄ = 320, banyak kombinasi yang mungkin (TIDAK CUKUP). Uji pernyataan (2): Median 80 berarti (x₂ + x₃)/2 = 80 atau x₂ + x₃ = 160, tidak membatasi x₄ (TIDAK CUKUP). Uji (1) dan (2) bersama-sama: Diperoleh x₂ + x₃ = 160 dan x₁ + x₄ = 160. Himpunan nilai (70, 79, 81, 90) memenuhi kedua syarat dengan nilai tertinggi 90, sedangkan (60, 78, 82, 100) juga memenuhi kedua syarat dengan nilai tertinggi 100. Karena nilai tertinggi tidak tunggal, pernyataan (1) dan (2) tetap tidak cukup.",
    "tip": "Jika rata-rata dan median diketahui untuk 4 data, cek apakah penyebaran antara nilai terkecil dan nilai terbesar masih bebas berubah secara simetris."
  },
  {
    "id": "tiu-pk-171",
    "subPattern": "optimasi-biaya",
    "difficulty": "mudah",
    "prompt": "Sebuah instansi akan memberangkatkan 155 peserta diklat ke lokasi pelatihan. Tersedia dua jenis kendaraan sewa tanpa batas jumlah armada: Bus Besar berkapasitas 45 orang dengan tarif Rp2.700.000,00 per unit dan Minibus berkapasitas 20 orang dengan tarif Rp1.400.000,00 per unit. Berapakah biaya sewa minimum untuk mengangkut seluruh peserta tersebut?",
    "options": [
      "Rp9.800.000,00",
      "Rp10.800.000,00",
      "Rp9.500.000,00",
      "Rp11.000.000,00",
      "Rp9.400.000,00"
    ],
    "answer": "C",
    "explanation": "Hitung biaya per kursi: Bus Besar = Rp2.700.000 / 45 = Rp60.000/orang, sedangkan Minibus = Rp1.400.000 / 20 = Rp70.000/orang. Evaluasi seluruh kombinasi layak (45B + 20M ≥ 155): (1) 4 Bus + 0 Minibus (180 kursi) = 4 × Rp2.700.000 = Rp10.800.000; (2) 3 Bus + 1 Minibus (135 + 20 = 155 kursi) = Rp8.100.000 + Rp1.400.000 = Rp9.500.000; (3) 2 Bus + 4 Minibus (90 + 80 = 170 kursi) = Rp5.400.000 + Rp5.600.000 = Rp11.000.000; (4) 1 Bus + 6 Minibus (165 kursi) = Rp11.100.000; (5) 0 Bus + 8 Minibus (160 kursi) = Rp11.200.000. Biaya minimum global adalah Rp9.500.000,00 (3 Bus Besar + 1 Minibus).",
    "tip": "Bandingkan tarif per orang terlebih dahulu untuk memprioritaskan armada paling efisien, lalu uji kombinasi di sekitar pembulatan atas dan bawahnya."
  },
  {
    "id": "tiu-pk-172",
    "subPattern": "optimasi-biaya",
    "difficulty": "sedang",
    "prompt": "Sebuah gudang logistik harus mengirim 38 ton beras sekaligus. Tersedia Truk Besar berkapasitas 10 ton dengan biaya Rp1.500.000,00 per truk dan Truk Kecil berkapasitas 4 ton dengan biaya Rp800.000,00 per truk. Jumlah armada tidak dibatasi. Berapakah biaya pengiriman minimum agar seluruh 38 ton beras terangkut?",
    "options": [
      "Rp6.000.000,00",
      "Rp6.100.000,00",
      "Rp6.300.000,00",
      "Rp7.000.000,00",
      "Rp5.700.000,00"
    ],
    "answer": "A",
    "explanation": "Evaluasi seluruh kombinasi layak (10B + 4K ≥ 38): (1) 4 Truk Besar + 0 Truk Kecil (kapasitas 40 ton) = 4 × Rp1.500.000 = Rp6.000.000; (2) 3 Truk Besar + 2 Truk Kecil (kapasitas tepat 38 ton) = Rp4.500.000 + Rp1.600.000 = Rp6.100.000; (3) 2 Truk Besar + 5 Truk Kecil (40 ton) = Rp3.000.000 + Rp4.000.000 = Rp7.000.000; (4) 1 Truk Besar + 7 Truk Kecil (38 ton) = Rp1.500.000 + Rp5.600.000 = Rp7.100.000; (5) 0 Truk Besar + 10 Truk Kecil (40 ton) = Rp8.000.000. Meski menyisakan 2 ton ruang kosong, 4 Truk Besar (Rp6.000.000,00) lebih murah daripada kombinasi kapasitas pas 38 ton (Rp6.100.000,00).",
    "tip": "Jangan terpaku pada kapasitas yang pas tepat sama dengan beban; terkadang menyewa 1 unit armada besar tambahan lebih murah daripada 2 unit armada kecil."
  },
  {
    "id": "tiu-pk-173",
    "subPattern": "optimasi-biaya",
    "difficulty": "sedang",
    "prompt": "Sebuah kantor membutuhkan 24 rim kertas HVS dengan merek yang sama dan hanya akan membeli seluruhnya di satu toko. Terdapat tiga penawaran toko:\n- Toko A: Harga normal Rp50.000,00/rim dengan promo 'Beli 3 Gratis 1' (berlaku kelipatan).\n- Toko B: Harga normal Rp50.000,00/rim, diskon 20% untuk seluruh pembelian, ditambah potongan tambahan Rp40.000,00 jika total belanja setelah diskon minimal Rp900.000,00.\n- Toko C: Harga grosir Rp38.000,00/rim (minimal 20 rim) ditambah ongkos kirim Rp25.000,00.\nBerapakah biaya minimum yang harus dibayar kantor tersebut?",
    "options": [
      "Rp920.000,00",
      "Rp937.000,00",
      "Rp912.000,00",
      "Rp960.000,00",
      "Rp900.000,00"
    ],
    "answer": "E",
    "explanation": "Hitung total biaya di masing-masing toko untuk 24 rim: (1) Toko A: Promo Beli 3 Gratis 1 berarti setiap 4 rim cukup membayar 3 rim. Untuk 24 rim = 6 paket × 3 rim bayar = 18 rim × Rp50.000 = Rp900.000,00. (2) Toko B: Total normal = 24 × Rp50.000 = Rp1.200.000. Setelah diskon 20% = 80% × Rp1.200.000 = Rp960.000. Karena ≥ Rp900.000, dikurangi Rp40.000 menjadi Rp920.000,00. (3) Toko C: 24 × Rp38.000 + Rp25.000 = Rp912.000 + Rp25.000 = Rp937.000,00. Biaya minimum adalah Rp900.000,00 di Toko A.",
    "tip": "Konversi promo 'Beli 3 Gratis 1' menjadi diskon efektif 25% untuk kelipatan 4 rim, lalu bandingkan dengan total akhir toko lain termasuk ongkos kirim."
  },
  {
    "id": "tiu-pk-174",
    "subPattern": "optimasi-biaya",
    "difficulty": "sedang",
    "prompt": "Dina ingin membeli 6 kotak tinta printer seharga Rp85.000,00 per kotak dengan ongkos kirim Rp35.000,00. Ia hanya boleh menggunakan satu dari empat voucher berikut:\n- Voucher P: Diskon 15% dari total harga barang (maksimal potongan Rp70.000,00).\n- Voucher Q: Potongan langsung Rp60.000,00 (minimal belanja barang Rp500.000,00) ditambah potongan ongkir maksimal Rp25.000,00.\n- Voucher R: Diskon 10% dari total harga barang ditambah gratis ongkir penuh.\n- Voucher S: Potongan langsung Rp80.000,00 (minimal belanja barang Rp500.000,00), ongkir dibayar penuh.\nBerapakah total pembayaran minimum (barang + ongkir) yang dapat diperoleh Dina?",
    "options": [
      "Rp460.000,00",
      "Rp459.000,00",
      "Rp465.000,00",
      "Rp475.000,00",
      "Rp468.500,00"
    ],
    "answer": "B",
    "explanation": "Total harga barang = 6 × Rp85.000 = Rp510.000 (memenuhi syarat minimal Rp500.000). Total awal barang + ongkir = Rp510.000 + Rp35.000 = Rp545.000. Hitung total penghematan tiap voucher: (1) Voucher P: 15% × Rp510.000 = Rp76.500, namun dibatasi maksimal Rp70.000, sehingga bayar = Rp545.000 - Rp70.000 = Rp475.000. (2) Voucher Q: Potongan Rp60.000 + potongan ongkir Rp25.000 = Rp85.000, sehingga bayar = Rp545.000 - Rp85.000 = Rp460.000. (3) Voucher R: Diskon 10% × Rp510.000 = Rp51.000 + gratis ongkir Rp35.000 = Rp86.000, sehingga bayar = Rp545.000 - Rp86.000 = Rp459.000. (4) Voucher S: Potongan Rp80.000, sehingga bayar = Rp545.000 - Rp80.000 = Rp465.000. Pembayaran minimum adalah Rp459.000,00 (Voucher R).",
    "tip": "Perhatikan batas maksimal potongan (cap) pada diskon persen dan jumlahkan potongan barang serta potongan ongkir untuk membandingkan penghematan total tiap voucher."
  },
  {
    "id": "tiu-pk-175",
    "subPattern": "optimasi-biaya",
    "difficulty": "sulit",
    "prompt": "Sebuah badan penanggulangan bencana harus mengirim 53 ton logistik dalam satu gelombang menggunakan tiga jenis armada dengan batas ketersediaan:\n- Truk A: kapasitas 12 ton, biaya Rp2.100.000,00/unit (maksimal 3 unit).\n- Truk B: kapasitas 8 ton, biaya Rp1.500.000,00/unit (maksimal 4 unit).\n- Truk C: kapasitas 5 ton, biaya Rp1.000.000,00/unit (maksimal 5 unit).\nBerapakah biaya pengiriman minimum untuk mengangkut seluruh 53 ton logistik tersebut?",
    "options": [
      "Rp9.800.000,00",
      "Rp10.100.000,00",
      "Rp10.300.000,00",
      "Rp9.700.000,00",
      "Rp9.600.000,00"
    ],
    "answer": "D",
    "explanation": "Tarif per ton: Truk A = Rp175.000/ton, Truk B = Rp187.500/ton, Truk C = Rp200.000/ton. Uji seluruh kasus berdasarkan jumlah Truk A (0 hingga 3) untuk 12A + 8B + 5C ≥ 53 dengan B ≤ 4 dan C ≤ 5: (1) A = 3 (36 ton, Rp6.300.000), sisa 17 ton: 1B + 2C (18 ton, Rp3.500.000) total Rp9.800.000; 2B + 1C (21 ton, Rp4.000.000) total Rp10.300.000; 0B + 4C (20 ton, Rp4.000.000) total Rp10.300.000. (2) A = 2 (24 ton, Rp4.200.000), sisa 29 ton: 3B + 1C (29 ton tepat, Rp4.500.000 + Rp1.000.000 = Rp5.500.000) menghasilkan total Rp9.700.000! Alternatif lain untuk A = 2 seperti 4B (32 ton, Rp6.000.000) = Rp10.200.000 dan 2B + 3C (31 ton, Rp6.000.000) = Rp10.200.000. (3) A = 1 (12 ton, Rp2.100.000), sisa 41 ton: termurah 1A + 4B + 2C (54 ton) = Rp10.100.000 atau 1A + 2B + 5C (53 ton) = Rp10.100.000. (4) A = 0: kapasitas maks 4B + 5C = 32 + 25 = 57 ton, termurah 4B + 5C = Rp11.000.000. Jadi, biaya minimum global adalah Rp9.700.000,00 (2 Truk A + 3 Truk B + 1 Truk C).",
    "tip": "Mengambil armada termurah per ton secara maksimal (strategi serakah) belum tentu optimal jika menyisakan muatan yang tidak pas; selalu uji pengurangan 1 unit armada terbesar."
  },
  {
    "id": "tiu-pk-176",
    "subPattern": "optimasi-biaya",
    "difficulty": "sedang",
    "prompt": "Panitia seminar membutuhkan minimal 59 paket seminar kit. Pemasok menjual tiga pilihan kemasan: Kardus berisi 12 paket seharga Rp420.000,00; Pak berisi 5 paket seharga Rp190.000,00; dan Eceran 1 paket seharga Rp45.000,00. Panitia boleh membeli melebihi 59 paket jika total biayanya lebih rendah. Berapakah biaya minimum untuk memenuhi kebutuhan tersebut?",
    "options": [
      "Rp2.105.000,00",
      "Rp2.140.000,00",
      "Rp2.100.000,00",
      "Rp2.210.000,00",
      "Rp2.065.000,00"
    ],
    "answer": "C",
    "explanation": "Harga per paket: Kardus = Rp35.000, Pak = Rp38.000, Eceran = Rp45.000. Evaluasi kombinasi terbaik untuk 12K + 5P + E ≥ 59: (1) 5 Kardus (60 paket) = 5 × Rp420.000 = Rp2.100.000; (2) 4 Kardus (48 paket, Rp1.680.000) + sisa 11 paket: 2 Pak + 1 Eceran (11 paket, Rp380.000 + Rp45.000 = Rp425.000) total Rp2.105.000; 1 Pak + 6 Eceran (Rp190.000 + Rp270.000 = Rp460.000) total Rp2.140.000; 3 Pak (15 paket, Rp570.000) total Rp2.250.000; (3) 3 Kardus (36 paket, Rp1.260.000) + sisa 23 paket: termurah 4 Pak + 3 Eceran (Rp760.000 + Rp135.000 = Rp895.000) total Rp2.155.000 atau 5 Pak (Rp950.000) total Rp2.210.000. Untuk K ≤ 2 biaya makin besar karena proporsi harga per paket lebih mahal. Jadi, biaya minimum global adalah Rp2.100.000,00 (membeli 5 Kardus).",
    "tip": "Bandingkan biaya memenuhi kekurangan paket dengan kemasan kecil terhadap harga membeli 1 kemasan kardus besar sekaligus."
  },
  {
    "id": "tiu-pk-177",
    "subPattern": "optimasi-biaya",
    "difficulty": "mudah",
    "prompt": "Suatu dinas menyelenggarakan rapat kerja 1 hari untuk 80 peserta dan membandingkan tiga penawaran hotel:\n- Hotel Anggrek: Sewa aula Rp4.500.000,00 ditambah konsumsi Rp85.000,00 per peserta.\n- Hotel Bougenville: Paket all-in Rp135.000,00 per peserta (aula dan konsumsi) ditambah biaya sound system Rp600.000,00.\n- Hotel Cendana: Sewa aula Rp3.200.000,00 ditambah konsumsi Rp100.000,00 per peserta dengan diskon 10% khusus untuk total biaya konsumsi.\nBerapakah total biaya minimum dari ketiga penawaran tersebut?",
    "options": [
      "Rp10.400.000,00",
      "Rp11.300.000,00",
      "Rp11.400.000,00",
      "Rp10.080.000,00",
      "Rp11.200.000,00"
    ],
    "answer": "A",
    "explanation": "Hitung total biaya untuk 80 peserta pada masing-masing hotel: (1) Hotel Anggrek = Rp4.500.000 + (80 × Rp85.000) = Rp4.500.000 + Rp6.800.000 = Rp11.300.000,00. (2) Hotel Bougenville = (80 × Rp135.000) + Rp600.000 = Rp10.800.000 + Rp600.000 = Rp11.400.000,00. (3) Hotel Cendana = Rp3.200.000 + 90% × (80 × Rp100.000) = Rp3.200.000 + Rp7.200.000 = Rp10.400.000,00 (perhatikan bahwa diskon 10% hanya berlaku untuk konsumsi, bukan untuk sewa aula). Jadi, total biaya minimum adalah Rp10.400.000,00 di Hotel Cendana.",
    "tip": "Pisahkan komponen biaya tetap (sewa aula/sound system) dan biaya variabel (per peserta), serta teliti komponen mana yang dikenai diskon."
  },
  {
    "id": "tiu-pk-178",
    "subPattern": "optimasi-biaya",
    "difficulty": "sedang",
    "prompt": "Sebuah percetakan harus mencetak minimal 2.600 eksemplar modul dalam sehari menggunakan dua jenis mesin yang hanya dapat dioperasikan per shift penuh:\n- Mesin X: kapasitas 600 eksemplar/shift, biaya operasional Rp450.000,00/shift (maksimal 3 shift tersedia).\n- Mesin Y: kapasitas 350 eksemplar/shift, biaya operasional Rp280.000,00/shift (maksimal 6 shift tersedia).\nBerapakah biaya operasional minimum untuk memenuhi target 2.600 eksemplar tersebut?",
    "options": [
      "Rp2.190.000,00",
      "Rp2.130.000,00",
      "Rp1.950.000,00",
      "Rp2.020.000,00",
      "Rp2.240.000,00"
    ],
    "answer": "D",
    "explanation": "Cek seluruh kemungkinan jumlah shift Mesin X (0 hingga 3) agar 600X + 350Y ≥ 2.600 dengan Y ≤ 6: (1) X = 3 (1.800 eks), sisa 800 eks sehingga perlu minimal Y = 3 (1.050 eks, total 2.850 eks). Biaya = 3(Rp450.000) + 3(Rp280.000) = Rp1.350.000 + Rp840.000 = Rp2.190.000. (2) X = 2 (1.200 eks), sisa 1.400 eks sehingga perlu tepat Y = 4 (1.400 eks, total tepat 2.600 eks). Biaya = 2(Rp450.000) + 4(Rp280.000) = Rp900.000 + Rp1.120.000 = Rp2.020.000! (3) X = 1 (600 eks), sisa 2.000 eks sehingga perlu minimal Y = 6 (2.100 eks, total 2.700 eks). Biaya = Rp450.000 + Rp1.680.000 = Rp2.130.000. (4) X = 0 tidak layak karena kapasitas maks 6Y = 2.100 < 2.600. Jadi, biaya minimum global adalah Rp2.020.000,00 (2 shift Mesin X + 4 shift Mesin Y).",
    "tip": "Karena pilihan jumlah shift Mesin X hanya sedikit (0 sampai 3), daftarkan semua kasus layak dan bandingkan total biayanya."
  },
  {
    "id": "tiu-pk-179",
    "subPattern": "optimasi-biaya",
    "difficulty": "sulit",
    "prompt": "Sebuah sekolah memiliki plafon anggaran maksimal Rp13.800.000,00 untuk membeli kursi baru. Tersedia dua pilihan paket pembelian:\n- Paket A berisi 15 kursi seharga Rp3.200.000,00.\n- Paket B berisi 9 kursi seharga Rp2.000.000,00.\nBerapakah jumlah kursi terbanyak yang dapat dibeli sekolah dengan anggaran tersebut?",
    "options": [
      "60 kursi",
      "63 kursi",
      "62 kursi",
      "61 kursi",
      "64 kursi"
    ],
    "answer": "B",
    "explanation": "Evaluasi seluruh kombinasi layak (3,2A + 2,0B ≤ 13,8 dalam jutaan rupiah) dengan memaksimalkan B untuk setiap nilai A: (1) A = 4: biaya 4 × 3,2 = 12,8 juta, sisa 1,0 juta (B = 0) → 60 kursi. (2) A = 3: biaya 9,6 juta, sisa 4,2 juta → maks B = 2 (4,0 juta, total 13,6 juta ≤ 13,8 juta) → 3(15) + 2(9) = 45 + 18 = 63 kursi! (3) A = 2: biaya 6,4 juta, sisa 7,4 juta → maks B = 3 (6,0 juta, total 12,4 juta) → 30 + 27 = 57 kursi. (4) A = 1: biaya 3,2 juta, sisa 10,6 juta → maks B = 5 (10,0 juta, total 13,2 juta) → 15 + 45 = 60 kursi. (5) A = 0: biaya 0, sisa 13,8 juta → maks B = 6 (12,0 juta; 7B = 14,0 juta melampaui anggaran) → 54 kursi. Jadi, jumlah kursi terbanyak yang dapat dibeli adalah 63 kursi (3 Paket A + 2 Paket B).",
    "tip": "Pada soal maksimasi dalam plafon anggaran, sisa uang yang menganggur bisa mengurangi total unit; uji semua kemungkinan jumlah paket besar dari maksimum turun hingga 0."
  },
  {
    "id": "tiu-pk-180",
    "subPattern": "optimasi-biaya",
    "difficulty": "sedang",
    "prompt": "Sebuah proyek instalasi jaringan harus memenuhi target minimal 230 poin kerja dalam 1 hari menggunakan kombinasi dua jenis teknisi harian:\n- Teknisi Senior: menyelesaikan 40 poin kerja/hari dengan upah Rp480.000,00/hari (tersedia maksimal 5 orang).\n- Teknisi Junior: menyelesaikan 25 poin kerja/hari dengan upah Rp325.000,00/hari (tersedia maksimal 8 orang).\nBerapakah biaya upah minimum agar target 230 poin kerja terpenuhi?",
    "options": [
      "Rp2.910.000,00",
      "Rp3.050.000,00",
      "Rp2.880.000,00",
      "Rp3.065.000,00",
      "Rp2.895.000,00"
    ],
    "answer": "E",
    "explanation": "Cek seluruh jumlah Teknisi Senior S (0 hingga 5) agar 40S + 25J ≥ 230 dengan J ≤ 8: (1) S = 5 (200 poin), sisa 30 poin → butuh minimal J = 2 (50 poin, total 250 poin): biaya = 5(480k) + 2(325k) = 2.400k + 650k = Rp3.050.000. (2) S = 4 (160 poin), sisa 70 poin → butuh minimal J = 3 (75 poin, total 235 poin): biaya = 4(480k) + 3(325k) = 1.920k + 975k = Rp2.895.000! (3) S = 3 (120 poin), sisa 110 poin → butuh minimal J = 5 (125 poin): biaya = 1.440k + 1.625k = Rp3.065.000. (4) S = 2 (80 poin), sisa 150 poin → butuh tepat J = 6 (150 poin, total tepat 230 poin): biaya = 960k + 1.950k = Rp2.910.000. (5) S = 1 (40 poin), sisa 190 poin → butuh minimal J = 8 (200 poin): biaya = 480k + 2.600k = Rp3.080.000. (6) S = 0 tidak layak (maks 8 × 25 = 200 < 230). Perhatikan pula bahwa opsi 6 Senior (Rp2.880.000) tidak layak karena maksimal hanya tersedia 5 Senior. Jadi, biaya minimum global adalah Rp2.895.000,00 (4 Senior + 3 Junior).",
    "tip": "Perhatikan batasan ketersediaan maksimum teknisi agar tidak memilih kombinasi yang melanggar syarat, lalu uji setiap nilai jumlah Teknisi Senior."
  },
  {
    "id": "tiu-pk-181",
    "subPattern": "optimasi-biaya",
    "difficulty": "mudah",
    "prompt": "Sebuah panitia akan mencetak 1.500 lembar brosur berwarna dan membandingkan penawaran tiga percetakan:\n- Percetakan Jaya: Biaya cetak Rp900,00/lembar, gratis biaya desain.\n- Percetakan Karya: Biaya desain Rp150.000,00 ditambah biaya cetak Rp750,00/lembar.\n- Percetakan Maju: Paket 1.000 lembar pertama Rp820.000,00 (sudah termasuk desain), sedangkan kelebihan cetak dikenakan Rp700,00/lembar.\nBerapakah biaya minimum untuk mencetak 1.500 lembar brosur tersebut?",
    "options": [
      "Rp1.275.000,00",
      "Rp1.170.000,00",
      "Rp1.350.000,00",
      "Rp1.200.000,00",
      "Rp1.125.000,00"
    ],
    "answer": "B",
    "explanation": "Hitung biaya total masing-masing percetakan untuk 1.500 lembar: (1) Percetakan Jaya = 1.500 × Rp900 = Rp1.350.000,00. (2) Percetakan Karya = Rp150.000 + (1.500 × Rp750) = Rp150.000 + Rp1.125.000 = Rp1.275.000,00. (3) Percetakan Maju = Rp820.000 (untuk 1.000 lembar pertama) + (500 × Rp700) = Rp820.000 + Rp350.000 = Rp1.170.000,00. Jadi, biaya minimum adalah Rp1.170.000,00 di Percetakan Maju.",
    "tip": "Pada tarif bertingkat (paket awal + kelebihan), pastikan tarif kelebihan hanya dikalikan dengan selisih jumlah lembar di atas kuota paket."
  },
  {
    "id": "tiu-pk-182",
    "subPattern": "optimasi-biaya",
    "difficulty": "sedang",
    "prompt": "Seorang bendahara harus membeli 23 buku agenda dengan merek yang sama. Terdapat dua toko di dekat kantor:\n- Toko Sinar: Harga Rp40.000,00/buku dengan promo 'Beli 4 Gratis 1' (berlaku untuk setiap kelipatan 4 buku berbayar).\n- Toko Terang: Harga Rp36.000,00/buku tanpa promo (bebas membeli satuan berapa pun).\nJika bendahara boleh membagi pembelian di kedua toko tersebut, berapakah biaya minimum untuk memperoleh minimal 23 buku agenda?",
    "options": [
      "Rp748.000,00",
      "Rp760.000,00",
      "Rp800.000,00",
      "Rp828.000,00",
      "Rp736.000,00"
    ],
    "answer": "A",
    "explanation": "Di Toko Sinar, 1 paket promo menghasilkan 5 buku (bayar 4, gratis 1) dengan biaya 4 × Rp40.000 = Rp160.000,00 (efektif Rp32.000/buku — lebih murah daripada Toko Terang Rp36.000/buku). Namun pembelian satuan di Toko Sinar (Rp40.000/buku) lebih mahal daripada Toko Terang (Rp36.000/buku). Bandingkan strategi terbaik untuk minimal 23 buku: (1) 4 paket di Toko Sinar (20 buku = Rp640.000) + 3 buku di Toko Terang (3 × Rp36.000 = Rp108.000) = Rp748.000,00! (2) Semua di Toko Sinar tepat 23 buku: 4 paket (Rp640.000) + 3 satuan (Rp120.000) = Rp760.000,00. (3) 5 paket di Toko Sinar (25 buku) = 5 × Rp160.000 = Rp800.000,00. (4) Semua di Toko Terang: 23 × Rp36.000 = Rp828.000,00. (5) Mengurangi paket Sinar menjadi 3 paket (15 buku = Rp480.000) + 8 buku di Terang (Rp288.000) = Rp768.000,00 (lebih mahal karena setiap 5 buku lebih hemat di Sinar sebesar Rp20.000). Jadi, biaya minimum global adalah Rp748.000,00.",
    "tip": "Bandingkan harga efektif per unit pada paket promo dengan harga satuan toko pesaing; manfaatkan paket promo untuk kelipatan utuh, lalu cek sisa kekurangannya."
  },
  {
    "id": "tiu-pk-183",
    "subPattern": "optimasi-biaya",
    "difficulty": "sulit",
    "prompt": "Sebuah panti asuhan membutuhkan minimal 88 kg beras untuk stok bulanan. Agen beras menyediakan tiga ukuran karung:\n- Karung 25 kg: Rp310.000,00\n- Karung 10 kg: Rp130.000,00\n- Karung 4 kg: Rp56.000,00\nBerapakah biaya minimum yang harus dibayar panti asuhan untuk memperoleh minimal 88 kg beras?",
    "options": [
      "Rp1.122.000,00",
      "Rp1.140.000,00",
      "Rp1.116.000,00",
      "Rp1.154.000,00",
      "Rp1.240.000,00"
    ],
    "answer": "C",
    "explanation": "Harga per kg: Karung 25 kg = Rp12.400/kg, Karung 10 kg = Rp13.000/kg, Karung 4 kg = Rp14.000/kg. Evaluasi kombinasi layak (25A + 10B + 4C ≥ 88) menurut jumlah karung 25 kg: (1) A = 4 (100 kg) = Rp1.240.000. (2) A = 3 (75 kg, Rp930.000), sisa 13 kg: 1B + 1C (14 kg, Rp130.000 + Rp56.000 = Rp186.000) memberi total 89 kg seharga Rp1.116.000! Alternatif lain: 2B (20 kg, Rp260.000) = Rp1.190.000; 4C (16 kg, Rp224.000) = Rp1.154.000. (3) A = 2 (50 kg, Rp620.000), sisa 38 kg: 3B + 2C (38 kg tepat, Rp390.000 + Rp112.000 = Rp502.000) total Rp1.122.000; 4B (40 kg, Rp520.000) total Rp1.140.000; 2B + 5C (40 kg, Rp540.000) total Rp1.160.000. (4) Untuk A ≤ 1, minimal 63 kg harus dipenuhi karung 10 kg dan 4 kg (paling murah Rp13.000/kg) sehingga total pasti ≥ Rp310.000 + 63 × Rp13.000 = Rp1.129.000 > Rp1.116.000. Jadi, biaya minimum global adalah Rp1.116.000,00 (3 karung 25 kg + 1 karung 10 kg + 1 karung 4 kg).",
    "tip": "Kelompokkan perhitungan berdasarkan jumlah karung terbesar, lalu bandingkan kombinasi pas 88 kg dengan kombinasi yang sedikit berlebih (89 kg atau 90 kg)."
  },
  {
    "id": "tiu-pk-184",
    "subPattern": "optimasi-biaya",
    "difficulty": "sedang",
    "prompt": "Sebuah kantor mengirim 66 pegawai untuk kunjungan kerja ke luar kota. Tersedia dua jenis kendaraan sewa tanpa batas unit:\n- Bus Medium: kapasitas 30 orang, biaya sewa Rp1.900.000,00/unit, ditambah biaya tol dan BBM Rp350.000,00/unit.\n- Mobil Hiace: kapasitas 14 orang, biaya sewa Rp950.000,00/unit, ditambah biaya tol dan BBM Rp200.000,00/unit.\nBerapakah total biaya transportasi minimum (sewa + tol dan BBM) untuk mengangkut 66 pegawai tersebut?",
    "options": [
      "Rp5.700.000,00",
      "Rp5.750.000,00",
      "Rp4.750.000,00",
      "Rp5.650.000,00",
      "Rp6.750.000,00"
    ],
    "answer": "D",
    "explanation": "Hitung total biaya per unit terlebih dahulu: Bus Medium = Rp1.900.000 + Rp350.000 = Rp2.250.000/unit (Rp75.000/orang); Hiace = Rp950.000 + Rp200.000 = Rp1.150.000/unit (≈ Rp82.143/orang). Evaluasi seluruh kombinasi layak (30B + 14H ≥ 66): (1) 3 Bus + 0 Hiace (90 kursi) = 3 × Rp2.250.000 = Rp6.750.000; (2) 2 Bus + 1 Hiace (60 + 14 = 74 kursi) = Rp4.500.000 + Rp1.150.000 = Rp5.650.000! (3) 1 Bus + 3 Hiace (30 + 42 = 72 kursi) = Rp2.250.000 + Rp3.450.000 = Rp5.700.000; (4) 0 Bus + 5 Hiace (70 kursi) = 5 × Rp1.150.000 = Rp5.750.000. Jadi, total biaya minimum adalah Rp5.650.000,00 (2 Bus Medium + 1 Mobil Hiace).",
    "tip": "Gabungkan terlebih dahulu biaya sewa dengan biaya tol dan BBM menjadi satu tarif total per unit kendaraan sebelum menyusun kombinasi armada."
  },
  {
    "id": "tiu-pk-185",
    "subPattern": "optimasi-biaya",
    "difficulty": "sulit",
    "prompt": "Panitia bakti sosial ingin memesan 40 kaus seragam pada satu vendor dan membandingkan tiga penawaran:\n- Vendor Alpha: Harga Rp75.000,00/kaus, diskon 12% untuk pembelian minimal 30 kaus, gratis ongkos kirim.\n- Vendor Beta: Harga Rp70.000,00/kaus; 20 kaus pertama tanpa diskon, sedangkan kelebihan di atas 20 kaus mendapat diskon 15%, ditambah ongkos kirim Rp90.000,00.\n- Vendor Gamma: Harga Rp72.000,00/kaus dengan promo 'Beli 9 Gratis 1' (berlaku kelipatan), ditambah ongkos kirim Rp60.000,00.\nBerapakah total biaya minimum yang harus dibayar panitia?",
    "options": [
      "Rp2.652.000,00",
      "Rp2.680.000,00",
      "Rp2.592.000,00",
      "Rp2.470.000,00",
      "Rp2.640.000,00"
    ],
    "answer": "E",
    "explanation": "Hitung total biaya untuk 40 kaus pada masing-masing vendor: (1) Vendor Alpha: 40 × Rp75.000 = Rp3.000.000. Diskon 12% (syarat ≥ 30 kaus terpenuhi) → 88% × Rp3.000.000 = Rp2.640.000,00 (gratis ongkir). (2) Vendor Beta: 20 kaus pertama = 20 × Rp70.000 = Rp1.400.000; 20 kaus berikutnya didiskon 15% = 20 × Rp70.000 × 85% = Rp1.190.000; ditambah ongkir Rp90.000 → total = Rp1.400.000 + Rp1.190.000 + Rp90.000 = Rp2.680.000,00. (3) Vendor Gamma: Promo Beli 9 Gratis 1 berarti tiap 10 kaus membayar 9 kaus, sehingga 40 kaus membayar 36 kaus = 36 × Rp72.000 = Rp2.592.000; ditambah ongkir Rp60.000 → total = Rp2.652.000,00. Jadi, total biaya minimum adalah Rp2.640.000,00 (Vendor Alpha).",
    "tip": "Waspadai diskon berjenjang yang hanya berlaku untuk unit kelebihan (bukan seluruh pesanan) dan jangan lupa menambahkan ongkos kirim di tahap akhir."
  },
  {
    "id": "tiu-pk-186",
    "subPattern": "optimasi-biaya",
    "difficulty": "sedang",
    "prompt": "Sebuah posko kesehatan membutuhkan pasokan listrik cadangan selama 18 jam per hari selama 5 hari berturut-turut. Tersedia tiga opsi sewa genset:\n- Genset Tipe 1: Sewa harian Rp350.000,00/hari ditambah biaya bahan bakar Rp45.000,00/jam.\n- Genset Tipe 2: Sewa paket 5 hari Rp2.200.000,00 ditambah biaya bahan bakar Rp38.000,00/jam.\n- Genset Tipe 3: Tarif borongan Rp65.000,00/jam (sudah termasuk sewa dan bahan bakar).\nBerapakah biaya minimum untuk memenuhi kebutuhan listrik posko selama 5 hari tersebut?",
    "options": [
      "Rp5.800.000,00",
      "Rp5.620.000,00",
      "Rp5.850.000,00",
      "Rp5.550.000,00",
      "Rp5.720.000,00"
    ],
    "answer": "B",
    "explanation": "Total jam operasi = 18 jam/hari × 5 hari = 90 jam. Hitung biaya total tiap tipe: (1) Genset Tipe 1 = (5 × Rp350.000) + (90 × Rp45.000) = Rp1.750.000 + Rp4.050.000 = Rp5.800.000,00. (2) Genset Tipe 2 = Rp2.200.000 + (90 × Rp38.000) = Rp2.200.000 + Rp3.420.000 = Rp5.620.000,00. (3) Genset Tipe 3 = 90 × Rp65.000 = Rp5.850.000,00. Jadi, biaya minimum adalah Rp5.620.000,00 (Genset Tipe 2).",
    "tip": "Hitung total jam operasi terlebih dahulu, lalu bandingkan fungsi biaya tetap + (tarif per jam × total jam) dari setiap opsi."
  },
  {
    "id": "tiu-pk-187",
    "subPattern": "optimasi-biaya",
    "difficulty": "sulit",
    "prompt": "Sebuah koperasi akan mengirim 47 ton hasil panen ke pelabuhan. Tersedia Truk Fuso berkapasitas 11 ton dengan biaya Rp1.650.000,00/truk dan Truk Engkel berkapasitas 6 ton dengan biaya Rp960.000,00/truk. Karena keterbatasan lebar jalan di salah satu gudang asal, koperasi wajib menyewa minimal 2 unit Truk Engkel. Berapakah biaya pengiriman minimum untuk mengangkut seluruh 47 ton hasil panen?",
    "options": [
      "Rp7.410.000,00",
      "Rp7.680.000,00",
      "Rp7.830.000,00",
      "Rp8.100.000,00",
      "Rp8.520.000,00"
    ],
    "answer": "A",
    "explanation": "Tarif per ton: Fuso = Rp150.000/ton, Engkel = Rp160.000/ton. Evaluasi seluruh nilai jumlah Truk Engkel E ≥ 2 agar 11F + 6E ≥ 47: (1) E = 2 (12 ton), sisa 35 ton → butuh 4F (44 ton): biaya = 4(1.650k) + 2(960k) = 6.600k + 1.920k = Rp8.520.000. (2) E = 3 (18 ton), sisa 29 ton → butuh 3F (33 ton): biaya = 4.950k + 2.880k = Rp7.830.000. (3) E = 4 (24 ton), sisa 23 ton → butuh 3F (33 ton): biaya = 4.950k + 3.840k = Rp8.790.000. (4) E = 5 (30 ton), sisa 17 ton → butuh 2F (22 ton): biaya = 3.300k + 4.800k = Rp8.100.000. (5) E = 6 (36 ton), sisa 11 ton → butuh tepat 1F (11 ton, total tepat 47 ton): biaya = 1.650k + 5.760k = Rp7.410.000! (6) E = 7 (42 ton) → butuh 1F (total Rp8.370.000). (7) E = 8 (48 ton), F = 0 → biaya = 8 × 960k = Rp7.680.000. Jadi, biaya minimum global adalah Rp7.410.000,00 (1 Truk Fuso + 6 Truk Engkel).",
    "tip": "Meskipun Truk Fuso lebih murah per ton, kapasitas kosong yang besar membuat biaya melonjak; cari kombinasi (F, E) dengan syarat E ≥ 2 yang sisanya paling kecil."
  },
  {
    "id": "tiu-pk-188",
    "subPattern": "optimasi-biaya",
    "difficulty": "sedang",
    "prompt": "Panitia pelatihan memesan makan siang untuk 74 peserta dari katering yang menawarkan tiga pilihan paket:\n- Paket Meja (untuk 10 orang): Rp360.000,00\n- Paket Grup (untuk 6 orang): Rp220.000,00\n- Kotak Satuan (untuk 1 orang): Rp45.000,00\nJumlah porsi boleh melebihi 74 jika total biayanya lebih murah. Berapakah biaya katering minimum untuk melayani seluruh 74 peserta tersebut?",
    "options": [
      "Rp2.700.000,00",
      "Rp2.690.000,00",
      "Rp2.680.000,00",
      "Rp2.740.000,00",
      "Rp2.664.000,00"
    ],
    "answer": "C",
    "explanation": "Harga per porsi: Paket Meja = Rp36.000, Paket Grup ≈ Rp36.667, Kotak Satuan = Rp45.000. Evaluasi kombinasi optimal untuk 10M + 6G + S ≥ 74 berdasarkan jumlah Paket Meja M: (1) M = 8 (80 porsi) = Rp2.880.000. (2) M = 7 (70 porsi, Rp2.520.000), sisa 4 porsi: 4S (Rp180.000) total Rp2.700.000; 1G (6 porsi, Rp220.000) total Rp2.740.000. (3) M = 6 (60 porsi, Rp2.160.000), sisa 14 porsi: 2G + 2S (Rp440.000 + Rp90.000 = Rp530.000) total Rp2.690.000; 3G (Rp660.000) total Rp2.820.000. (4) M = 5 (50 porsi, Rp1.800.000), sisa 24 porsi: 4G tepat 24 porsi (Rp880.000) menghasilkan total Rp2.680.000! (5) Untuk M ≤ 4, karena mengganti 3 Paket Meja (30 porsi, Rp1.080.000) dengan 5 Paket Grup (30 porsi, Rp1.100.000) lebih mahal Rp20.000, kombinasi M = 2 + 9G = Rp2.700.000 dan kasus M lainnya pasti ≥ Rp2.690.000. Jadi, biaya minimum global adalah Rp2.680.000,00 (5 Paket Meja + 4 Paket Grup).",
    "tip": "Perhatikan bahwa selisih harga per porsi Paket Meja dan Paket Grup sangat tipis; menghindari Kotak Satuan yang jauh lebih mahal sering kali menghasilkan total lebih hemat."
  },
  {
    "id": "tiu-pk-189",
    "subPattern": "optimasi-biaya",
    "difficulty": "mudah",
    "prompt": "Sebuah unit layanan masyarakat membutuhkan kuota data internet sebesar 160 GB per bulan dan membandingkan tiga paket:\n- Paket Hemat: Rp250.000,00 untuk 100 GB pertama, kelebihan kuota Rp4.000,00/GB.\n- Paket Bisnis: Rp380.000,00 untuk 150 GB pertama, kelebihan kuota Rp5.000,00/GB.\n- Paket Unlimited Pro: Rp460.000,00 tanpa batas kuota.\nBerapakah biaya bulanan minimum yang harus dibayar unit tersebut?",
    "options": [
      "Rp460.000,00",
      "Rp490.000,00",
      "Rp420.000,00",
      "Rp430.000,00",
      "Rp440.000,00"
    ],
    "answer": "D",
    "explanation": "Hitung total biaya bulanan untuk pemakaian 160 GB pada masing-masing paket: (1) Paket Hemat = Rp250.000 + (160 - 100) × Rp4.000 = Rp250.000 + Rp240.000 = Rp490.000,00. (2) Paket Bisnis = Rp380.000 + (160 - 150) × Rp5.000 = Rp380.000 + Rp50.000 = Rp430.000,00. (3) Paket Unlimited Pro = Rp460.000,00. Jadi, biaya bulanan minimum adalah Rp430.000,00 (Paket Bisnis).",
    "tip": "Hitung kelebihan kuota masing-masing paket terhadap kebutuhan 160 GB, lalu tambahkan biaya kelebihan tersebut ke tarif dasar paket."
  },
  {
    "id": "tiu-pk-190",
    "subPattern": "optimasi-biaya",
    "difficulty": "sulit",
    "prompt": "Sebuah bengkel konveksi mendapat pesanan 310 seragam yang harus selesai dalam 5 hari. Setiap penjahit reguler mampu menjahit 12 seragam per hari dengan upah Rp120.000,00/hari dan wajib dikontrak penuh selama 5 hari. Jika diperlukan, penjahit dapat mengambil sesi lembur (maksimal 1 sesi lembur per penjahit per hari) yang menghasilkan tambahan 4 seragam per sesi dengan biaya lembur Rp55.000,00 per sesi (hanya dibayar saat lembur dilakukan). Berapakah biaya tenaga kerja minimum untuk menyelesaikan minimal 310 seragam dalam 5 hari?",
    "options": [
      "Rp3.390.000,00",
      "Rp3.600.000,00",
      "Rp3.110.000,00",
      "Rp3.220.000,00",
      "Rp3.165.000,00"
    ],
    "answer": "E",
    "explanation": "Setiap 1 penjahit selama 5 hari menghasilkan 5 × 12 = 60 seragam reguler dengan biaya kontrak 5 × Rp120.000 = Rp600.000,00, serta memiliki kapasitas maksimal 5 sesi lembur (tambahan 20 seragam), sehingga kapasitas total per penjahit = 80 seragam. Agar 80n ≥ 310, jumlah penjahit minimal n = 4. Evaluasi seluruh nilai n yang mungkin: (1) n = 4: produksi reguler = 240 seragam (Rp2.400.000). Kekurangan = 70 seragam → perlu ⌈70/4⌉ = 18 sesi lembur (memenuhi batas maks 4 × 5 = 20 sesi). Biaya lembur = 18 × Rp55.000 = Rp990.000. Total = Rp2.400.000 + Rp990.000 = Rp3.390.000,00. (2) n = 5: produksi reguler = 300 seragam (Rp3.000.000). Kekurangan = 10 seragam → perlu ⌈10/4⌉ = 3 sesi lembur (memenuhi batas maks 25 sesi). Biaya lembur = 3 × Rp55.000 = Rp165.000. Total = Rp3.000.000 + Rp165.000 = Rp3.165.000,00! (3) n = 6: produksi reguler = 360 seragam tanpa lembur → total = 6 × Rp600.000 = Rp3.600.000,00. Untuk n ≥ 7 biaya reguler saja sudah ≥ Rp4.200.000. Jadi, biaya tenaga kerja minimum global adalah Rp3.165.000,00 (5 penjahit reguler + 3 sesi lembur).",
    "tip": "Bandingkan biaya per seragam reguler dengan lembur, lalu uji semua jumlah penjahit yang layak mulai dari batas minimum hingga kapasitas reguler melampaui target."
  }
];
