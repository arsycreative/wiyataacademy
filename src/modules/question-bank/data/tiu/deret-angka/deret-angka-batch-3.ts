import type { QuestionDraft } from "@/modules/question-bank/domain/question";

export const deretAngkaBatch3Drafts: readonly QuestionDraft[] = [
  {
    "id": "tiu-der-101",
    "subPattern": "deret-fibonacci-dan-pangkat",
    "difficulty": "sedang",
    "prompt": "Tentukan angka berikutnya dari barisan berpola kuadrat berikut:\n5, 10, 17, 26, 37, 50, ...",
    "options": [
      "57",
      "61",
      "69",
      "65",
      "73"
    ],
    "answer": "D",
    "explanation": "Suku-suku barisan mengikuti rumus n² + 1 untuk n = 2, 3, 4, 5, 6, 7. Untuk n = 8, nilainya adalah 8² + 1 = 64 + 1 = 65.",
    "tip": "Bandingkan suku-suku deret dengan bilangan kuadrat terdekat (4, 9, 16, 25, 36, 49, 64, 81, 100, 121) untuk melihat konstanta pergeserannya."
  },
  {
    "id": "tiu-der-102",
    "subPattern": "deret-fibonacci-dan-pangkat",
    "difficulty": "sedang",
    "prompt": "Tentukan angka berikutnya dari barisan berpola kuadrat berikut:\n11, 18, 27, 38, 51, 66, ...",
    "options": [
      "75",
      "79",
      "87",
      "91",
      "83"
    ],
    "answer": "E",
    "explanation": "Suku-suku barisan mengikuti rumus n² + 2 untuk n = 3, 4, 5, 6, 7, 8. Untuk n = 9, nilainya adalah 9² + 2 = 81 + 2 = 83.",
    "tip": "Bandingkan suku-suku deret dengan bilangan kuadrat terdekat (4, 9, 16, 25, 36, 49, 64, 81, 100, 121) untuk melihat konstanta pergeserannya."
  },
  {
    "id": "tiu-der-103",
    "subPattern": "deret-fibonacci-dan-pangkat",
    "difficulty": "sedang",
    "prompt": "Tentukan angka berikutnya dari barisan berpola kuadrat berikut:\n19, 28, 39, 52, 67, 84, ...",
    "options": [
      "103",
      "95",
      "99",
      "107",
      "111"
    ],
    "answer": "A",
    "explanation": "Suku-suku barisan mengikuti rumus n² + 3 untuk n = 4, 5, 6, 7, 8, 9. Untuk n = 10, nilainya adalah 10² + 3 = 100 + 3 = 103.",
    "tip": "Bandingkan suku-suku deret dengan bilangan kuadrat terdekat (4, 9, 16, 25, 36, 49, 64, 81, 100, 121) untuk melihat konstanta pergeserannya."
  },
  {
    "id": "tiu-der-104",
    "subPattern": "deret-fibonacci-dan-pangkat",
    "difficulty": "sedang",
    "prompt": "Tentukan angka berikutnya dari barisan berpola kuadrat berikut:\n29, 40, 53, 68, 85, 104, ...",
    "options": [
      "117",
      "125",
      "121",
      "129",
      "133"
    ],
    "answer": "B",
    "explanation": "Suku-suku barisan mengikuti rumus n² + 4 untuk n = 5, 6, 7, 8, 9, 10. Untuk n = 11, nilainya adalah 11² + 4 = 121 + 4 = 125.",
    "tip": "Bandingkan suku-suku deret dengan bilangan kuadrat terdekat (4, 9, 16, 25, 36, 49, 64, 81, 100, 121) untuk melihat konstanta pergeserannya."
  },
  {
    "id": "tiu-der-105",
    "subPattern": "deret-fibonacci-dan-pangkat",
    "difficulty": "sedang",
    "prompt": "Tentukan angka berikutnya dari barisan berpola kuadrat berikut:\n41, 54, 69, 86, 105, 126, ...",
    "options": [
      "141",
      "145",
      "149",
      "153",
      "157"
    ],
    "answer": "C",
    "explanation": "Suku-suku barisan mengikuti rumus n² + 5 untuk n = 6, 7, 8, 9, 10, 11. Untuk n = 12, nilainya adalah 12² + 5 = 144 + 5 = 149.",
    "tip": "Bandingkan suku-suku deret dengan bilangan kuadrat terdekat (4, 9, 16, 25, 36, 49, 64, 81, 100, 121) untuk melihat konstanta pergeserannya."
  },
  {
    "id": "tiu-der-106",
    "subPattern": "deret-fibonacci-dan-pangkat",
    "difficulty": "sedang",
    "prompt": "Tentukan suku selanjutnya dari barisan bilangan berpangkat berikut:\n2, 9, 28, 65, 126, ...",
    "options": [
      "205",
      "211",
      "223",
      "217",
      "229"
    ],
    "answer": "D",
    "explanation": "Setiap suku memiliki rumus n³ + 1 untuk n = 1, 2, 3, 4, 5:\n1³ + 1 = 2, 2³ + 1 = 9, 3³ + 1 = 28, 4³ + 1 = 65, 5³ + 1 = 126. Maka suku ke-6 adalah 6³ + 1 = 216 + 1 = 217.",
    "tip": "Hafalkan bilangan kubik dasar (1, 8, 27, 64, 125, 216, 343) agar langsung mengenali deret pangkat tiga yang ditambah/dikurangi konstanta."
  },
  {
    "id": "tiu-der-107",
    "subPattern": "deret-fibonacci-dan-pangkat",
    "difficulty": "sedang",
    "prompt": "Tentukan suku selanjutnya dari barisan bilangan berpangkat berikut:\n3, 10, 29, 66, 127, ...",
    "options": [
      "206",
      "212",
      "224",
      "230",
      "218"
    ],
    "answer": "E",
    "explanation": "Setiap suku memiliki rumus n³ + 2 untuk n = 1, 2, 3, 4, 5:\n1³ + 2 = 3, 2³ + 2 = 10, 3³ + 2 = 29, 4³ + 2 = 66, 5³ + 2 = 127. Maka suku ke-6 adalah 6³ + 2 = 216 + 2 = 218.",
    "tip": "Hafalkan bilangan kubik dasar (1, 8, 27, 64, 125, 216, 343) agar langsung mengenali deret pangkat tiga yang ditambah/dikurangi konstanta."
  },
  {
    "id": "tiu-der-108",
    "subPattern": "deret-fibonacci-dan-pangkat",
    "difficulty": "sedang",
    "prompt": "Tentukan suku selanjutnya dari barisan bilangan berpangkat berikut:\n4, 11, 30, 67, 128, ...",
    "options": [
      "219",
      "207",
      "213",
      "225",
      "231"
    ],
    "answer": "A",
    "explanation": "Setiap suku memiliki rumus n³ + 3 untuk n = 1, 2, 3, 4, 5:\n1³ + 3 = 4, 2³ + 3 = 11, 3³ + 3 = 30, 4³ + 3 = 67, 5³ + 3 = 128. Maka suku ke-6 adalah 6³ + 3 = 216 + 3 = 219.",
    "tip": "Hafalkan bilangan kubik dasar (1, 8, 27, 64, 125, 216, 343) agar langsung mengenali deret pangkat tiga yang ditambah/dikurangi konstanta."
  },
  {
    "id": "tiu-der-109",
    "subPattern": "deret-fibonacci-dan-pangkat",
    "difficulty": "sedang",
    "prompt": "Tentukan suku selanjutnya dari barisan bilangan berpangkat berikut:\n5, 12, 31, 68, 129, ...",
    "options": [
      "208",
      "220",
      "214",
      "226",
      "232"
    ],
    "answer": "B",
    "explanation": "Setiap suku memiliki rumus n³ + 4 untuk n = 1, 2, 3, 4, 5:\n1³ + 4 = 5, 2³ + 4 = 12, 3³ + 4 = 31, 4³ + 4 = 68, 5³ + 4 = 129. Maka suku ke-6 adalah 6³ + 4 = 216 + 4 = 220.",
    "tip": "Hafalkan bilangan kubik dasar (1, 8, 27, 64, 125, 216, 343) agar langsung mengenali deret pangkat tiga yang ditambah/dikurangi konstanta."
  },
  {
    "id": "tiu-der-110",
    "subPattern": "deret-fibonacci-dan-pangkat",
    "difficulty": "sedang",
    "prompt": "Tentukan suku selanjutnya dari barisan bilangan berpangkat berikut:\n6, 13, 32, 69, 130, ...",
    "options": [
      "209",
      "215",
      "221",
      "227",
      "233"
    ],
    "answer": "C",
    "explanation": "Setiap suku memiliki rumus n³ + 5 untuk n = 1, 2, 3, 4, 5:\n1³ + 5 = 6, 2³ + 5 = 13, 3³ + 5 = 32, 4³ + 5 = 69, 5³ + 5 = 130. Maka suku ke-6 adalah 6³ + 5 = 216 + 5 = 221.",
    "tip": "Hafalkan bilangan kubik dasar (1, 8, 27, 64, 125, 216, 343) agar langsung mengenali deret pangkat tiga yang ditambah/dikurangi konstanta."
  },
  {
    "id": "tiu-der-111",
    "subPattern": "deret-fibonacci-dan-pangkat",
    "difficulty": "sulit",
    "prompt": "Tentukan suku berikutnya dari deret Fibonacci termodifikasi berikut:\n1, 2, 4, 7, 12, 20, ...",
    "options": [
      "29",
      "31",
      "35",
      "33",
      "37"
    ],
    "answer": "D",
    "explanation": "Pola deret adalah U_n = U_{n-1} + U_{n-2} + 1:\n- 1 + 2 + 1 = 4\n- 2 + 4 + 1 = 7\n- 4 + 7 + 1 = 12\n- 7 + 12 + 1 = 20\nMaka suku berikutnya = 12 + 20 + 1 = 33.",
    "tip": "Jika jumlah dua suku sebelumnya selalu berselisih tetap (+c) terhadap suku berikutnya, gunakan rumus Fibonacci termodifikasi U_n = U_{n-1} + U_{n-2} + c."
  },
  {
    "id": "tiu-der-112",
    "subPattern": "deret-fibonacci-dan-pangkat",
    "difficulty": "sulit",
    "prompt": "Tentukan suku berikutnya dari deret Fibonacci termodifikasi berikut:\n2, 3, 7, 12, 21, 35, ...",
    "options": [
      "54",
      "56",
      "60",
      "62",
      "58"
    ],
    "answer": "E",
    "explanation": "Pola deret adalah U_n = U_{n-1} + U_{n-2} + 2:\n- 2 + 3 + 2 = 7\n- 3 + 7 + 2 = 12\n- 7 + 12 + 2 = 21\n- 12 + 21 + 2 = 35\nMaka suku berikutnya = 21 + 35 + 2 = 58.",
    "tip": "Jika jumlah dua suku sebelumnya selalu berselisih tetap (+c) terhadap suku berikutnya, gunakan rumus Fibonacci termodifikasi U_n = U_{n-1} + U_{n-2} + c."
  },
  {
    "id": "tiu-der-113",
    "subPattern": "deret-fibonacci-dan-pangkat",
    "difficulty": "sulit",
    "prompt": "Tentukan suku berikutnya dari deret Fibonacci termodifikasi berikut:\n3, 4, 10, 17, 30, 50, ...",
    "options": [
      "83",
      "79",
      "81",
      "85",
      "87"
    ],
    "answer": "A",
    "explanation": "Pola deret adalah U_n = U_{n-1} + U_{n-2} + 3:\n- 3 + 4 + 3 = 10\n- 4 + 10 + 3 = 17\n- 10 + 17 + 3 = 30\n- 17 + 30 + 3 = 50\nMaka suku berikutnya = 30 + 50 + 3 = 83.",
    "tip": "Jika jumlah dua suku sebelumnya selalu berselisih tetap (+c) terhadap suku berikutnya, gunakan rumus Fibonacci termodifikasi U_n = U_{n-1} + U_{n-2} + c."
  },
  {
    "id": "tiu-der-114",
    "subPattern": "deret-fibonacci-dan-pangkat",
    "difficulty": "sulit",
    "prompt": "Tentukan suku berikutnya dari deret Fibonacci termodifikasi berikut:\n4, 5, 10, 16, 27, 44, ...",
    "options": [
      "68",
      "72",
      "70",
      "74",
      "76"
    ],
    "answer": "B",
    "explanation": "Pola deret adalah U_n = U_{n-1} + U_{n-2} + 1:\n- 4 + 5 + 1 = 10\n- 5 + 10 + 1 = 16\n- 10 + 16 + 1 = 27\n- 16 + 27 + 1 = 44\nMaka suku berikutnya = 27 + 44 + 1 = 72.",
    "tip": "Jika jumlah dua suku sebelumnya selalu berselisih tetap (+c) terhadap suku berikutnya, gunakan rumus Fibonacci termodifikasi U_n = U_{n-1} + U_{n-2} + c."
  },
  {
    "id": "tiu-der-115",
    "subPattern": "deret-fibonacci-dan-pangkat",
    "difficulty": "sulit",
    "prompt": "Tentukan suku berikutnya dari deret Fibonacci termodifikasi berikut:\n5, 6, 13, 21, 36, 59, ...",
    "options": [
      "93",
      "95",
      "97",
      "99",
      "101"
    ],
    "answer": "C",
    "explanation": "Pola deret adalah U_n = U_{n-1} + U_{n-2} + 2:\n- 5 + 6 + 2 = 13\n- 6 + 13 + 2 = 21\n- 13 + 21 + 2 = 36\n- 21 + 36 + 2 = 59\nMaka suku berikutnya = 36 + 59 + 2 = 97.",
    "tip": "Jika jumlah dua suku sebelumnya selalu berselisih tetap (+c) terhadap suku berikutnya, gunakan rumus Fibonacci termodifikasi U_n = U_{n-1} + U_{n-2} + c."
  },
  {
    "id": "tiu-der-116",
    "subPattern": "deret-fibonacci-dan-pangkat",
    "difficulty": "sulit",
    "prompt": "Tentukan angka selanjutnya dari deret Tribonacci berikut:\n1, 2, 3, 6, 11, 20, 37, ...",
    "options": [
      "60",
      "64",
      "72",
      "68",
      "76"
    ],
    "answer": "D",
    "explanation": "Setiap suku mulai suku ke-4 merupakan penjumlahan dari TIGA suku sebelumnya:\n- 1 + 2 + 3 = 6\n- 2 + 3 + 6 = 11\n- 3 + 6 + 11 = 20\n- 6 + 11 + 20 = 37\nMaka suku berikutnya = 11 + 20 + 37 = 68.",
    "tip": "Apabila penjumlahan 2 suku sebelumnya masih kurang dari suku ke-4, uji penjumlahan 3 suku berurutan (pola Tribonacci)."
  },
  {
    "id": "tiu-der-117",
    "subPattern": "deret-fibonacci-dan-pangkat",
    "difficulty": "sulit",
    "prompt": "Tentukan angka selanjutnya dari deret Tribonacci berikut:\n2, 3, 4, 9, 16, 29, 54, ...",
    "options": [
      "91",
      "95",
      "103",
      "107",
      "99"
    ],
    "answer": "E",
    "explanation": "Setiap suku mulai suku ke-4 merupakan penjumlahan dari TIGA suku sebelumnya:\n- 2 + 3 + 4 = 9\n- 3 + 4 + 9 = 16\n- 4 + 9 + 16 = 29\n- 9 + 16 + 29 = 54\nMaka suku berikutnya = 16 + 29 + 54 = 99.",
    "tip": "Apabila penjumlahan 2 suku sebelumnya masih kurang dari suku ke-4, uji penjumlahan 3 suku berurutan (pola Tribonacci)."
  },
  {
    "id": "tiu-der-118",
    "subPattern": "deret-fibonacci-dan-pangkat",
    "difficulty": "sulit",
    "prompt": "Tentukan angka selanjutnya dari deret Tribonacci berikut:\n3, 4, 5, 12, 21, 38, 71, ...",
    "options": [
      "130",
      "122",
      "126",
      "134",
      "138"
    ],
    "answer": "A",
    "explanation": "Setiap suku mulai suku ke-4 merupakan penjumlahan dari TIGA suku sebelumnya:\n- 3 + 4 + 5 = 12\n- 4 + 5 + 12 = 21\n- 5 + 12 + 21 = 38\n- 12 + 21 + 38 = 71\nMaka suku berikutnya = 21 + 38 + 71 = 130.",
    "tip": "Apabila penjumlahan 2 suku sebelumnya masih kurang dari suku ke-4, uji penjumlahan 3 suku berurutan (pola Tribonacci)."
  },
  {
    "id": "tiu-der-119",
    "subPattern": "deret-fibonacci-dan-pangkat",
    "difficulty": "sulit",
    "prompt": "Tentukan angka selanjutnya dari deret Tribonacci berikut:\n4, 5, 6, 15, 26, 47, 88, ...",
    "options": [
      "153",
      "161",
      "157",
      "165",
      "169"
    ],
    "answer": "B",
    "explanation": "Setiap suku mulai suku ke-4 merupakan penjumlahan dari TIGA suku sebelumnya:\n- 4 + 5 + 6 = 15\n- 5 + 6 + 15 = 26\n- 6 + 15 + 26 = 47\n- 15 + 26 + 47 = 88\nMaka suku berikutnya = 26 + 47 + 88 = 161.",
    "tip": "Apabila penjumlahan 2 suku sebelumnya masih kurang dari suku ke-4, uji penjumlahan 3 suku berurutan (pola Tribonacci)."
  },
  {
    "id": "tiu-der-120",
    "subPattern": "deret-fibonacci-dan-pangkat",
    "difficulty": "sulit",
    "prompt": "Tentukan angka selanjutnya dari deret Tribonacci berikut:\n5, 6, 7, 18, 31, 56, 105, ...",
    "options": [
      "184",
      "188",
      "192",
      "196",
      "200"
    ],
    "answer": "C",
    "explanation": "Setiap suku mulai suku ke-4 merupakan penjumlahan dari TIGA suku sebelumnya:\n- 5 + 6 + 7 = 18\n- 6 + 7 + 18 = 31\n- 7 + 18 + 31 = 56\n- 18 + 31 + 56 = 105\nMaka suku berikutnya = 31 + 56 + 105 = 192.",
    "tip": "Apabila penjumlahan 2 suku sebelumnya masih kurang dari suku ke-4, uji penjumlahan 3 suku berurutan (pola Tribonacci)."
  },
  {
    "id": "tiu-der-121",
    "subPattern": "deret-pecahan-dan-desimal",
    "difficulty": "mudah",
    "prompt": "Tentukan pecahan berikutnya dari deret berikut:\n1/3, 3/6, 5/9, 7/12, 9/15, ...",
    "options": [
      "9/18",
      "11/21",
      "13/18",
      "12/17",
      "11/18"
    ],
    "answer": "E",
    "explanation": "Analisis pembilang dan penyebut secara terpisah:\n- Pembilang: 1, 3, 5, 7, 9 (bertambah +2) → pembilang berikutnya = 9 + 2 = 11.\n- Penyebut: 3, 6, 9, 12, 15 (bertambah +3) → penyebut berikutnya = 15 + 3 = 18.\nJadi pecahan selanjutnya adalah 11/18.",
    "tip": "Pisahkan analisis deret pembilang (bagian atas) dan deret penyebut (bagian bawah) masing-masing."
  },
  {
    "id": "tiu-der-122",
    "subPattern": "deret-pecahan-dan-desimal",
    "difficulty": "mudah",
    "prompt": "Tentukan pecahan berikutnya dari deret berikut:\n2/5, 5/9, 8/13, 11/17, 14/21, ...",
    "options": [
      "17/25",
      "14/25",
      "17/29",
      "20/25",
      "18/24"
    ],
    "answer": "A",
    "explanation": "Analisis pembilang dan penyebut secara terpisah:\n- Pembilang: 2, 5, 8, 11, 14 (bertambah +3) → pembilang berikutnya = 14 + 3 = 17.\n- Penyebut: 5, 9, 13, 17, 21 (bertambah +4) → penyebut berikutnya = 21 + 4 = 25.\nJadi pecahan selanjutnya adalah 17/25.",
    "tip": "Pisahkan analisis deret pembilang (bagian atas) dan deret penyebut (bagian bawah) masing-masing."
  },
  {
    "id": "tiu-der-123",
    "subPattern": "deret-pecahan-dan-desimal",
    "difficulty": "mudah",
    "prompt": "Tentukan pecahan berikutnya dari deret berikut:\n3/7, 7/12, 11/17, 15/22, 19/27, ...",
    "options": [
      "19/32",
      "23/32",
      "23/37",
      "27/32",
      "24/31"
    ],
    "answer": "B",
    "explanation": "Analisis pembilang dan penyebut secara terpisah:\n- Pembilang: 3, 7, 11, 15, 19 (bertambah +4) → pembilang berikutnya = 19 + 4 = 23.\n- Penyebut: 7, 12, 17, 22, 27 (bertambah +5) → penyebut berikutnya = 27 + 5 = 32.\nJadi pecahan selanjutnya adalah 23/32.",
    "tip": "Pisahkan analisis deret pembilang (bagian atas) dan deret penyebut (bagian bawah) masing-masing."
  },
  {
    "id": "tiu-der-124",
    "subPattern": "deret-pecahan-dan-desimal",
    "difficulty": "mudah",
    "prompt": "Tentukan pecahan berikutnya dari deret berikut:\n4/9, 6/15, 8/21, 10/27, 12/33, ...",
    "options": [
      "12/39",
      "14/45",
      "14/39",
      "16/39",
      "15/38"
    ],
    "answer": "C",
    "explanation": "Analisis pembilang dan penyebut secara terpisah:\n- Pembilang: 4, 6, 8, 10, 12 (bertambah +2) → pembilang berikutnya = 12 + 2 = 14.\n- Penyebut: 9, 15, 21, 27, 33 (bertambah +6) → penyebut berikutnya = 33 + 6 = 39.\nJadi pecahan selanjutnya adalah 14/39.",
    "tip": "Pisahkan analisis deret pembilang (bagian atas) dan deret penyebut (bagian bawah) masing-masing."
  },
  {
    "id": "tiu-der-125",
    "subPattern": "deret-pecahan-dan-desimal",
    "difficulty": "mudah",
    "prompt": "Tentukan pecahan berikutnya dari deret berikut:\n5/11, 8/14, 11/17, 14/20, 17/23, ...",
    "options": [
      "17/26",
      "20/29",
      "23/26",
      "20/26",
      "21/25"
    ],
    "answer": "D",
    "explanation": "Analisis pembilang dan penyebut secara terpisah:\n- Pembilang: 5, 8, 11, 14, 17 (bertambah +3) → pembilang berikutnya = 17 + 3 = 20.\n- Penyebut: 11, 14, 17, 20, 23 (bertambah +3) → penyebut berikutnya = 23 + 3 = 26.\nJadi pecahan selanjutnya adalah 20/26.",
    "tip": "Pisahkan analisis deret pembilang (bagian atas) dan deret penyebut (bagian bawah) masing-masing."
  },
  {
    "id": "tiu-der-126",
    "subPattern": "deret-pecahan-dan-desimal",
    "difficulty": "mudah",
    "prompt": "Tentukan pecahan berikutnya dari deret berikut:\n6/13, 10/17, 14/21, 18/25, 22/29, ...",
    "options": [
      "22/33",
      "26/37",
      "30/33",
      "27/32",
      "26/33"
    ],
    "answer": "E",
    "explanation": "Analisis pembilang dan penyebut secara terpisah:\n- Pembilang: 6, 10, 14, 18, 22 (bertambah +4) → pembilang berikutnya = 22 + 4 = 26.\n- Penyebut: 13, 17, 21, 25, 29 (bertambah +4) → penyebut berikutnya = 29 + 4 = 33.\nJadi pecahan selanjutnya adalah 26/33.",
    "tip": "Pisahkan analisis deret pembilang (bagian atas) dan deret penyebut (bagian bawah) masing-masing."
  },
  {
    "id": "tiu-der-127",
    "subPattern": "deret-pecahan-dan-desimal",
    "difficulty": "mudah",
    "prompt": "Tentukan pecahan berikutnya dari deret berikut:\n7/15, 9/20, 11/25, 13/30, 15/35, ...",
    "options": [
      "17/40",
      "15/40",
      "17/45",
      "19/40",
      "18/39"
    ],
    "answer": "A",
    "explanation": "Analisis pembilang dan penyebut secara terpisah:\n- Pembilang: 7, 9, 11, 13, 15 (bertambah +2) → pembilang berikutnya = 15 + 2 = 17.\n- Penyebut: 15, 20, 25, 30, 35 (bertambah +5) → penyebut berikutnya = 35 + 5 = 40.\nJadi pecahan selanjutnya adalah 17/40.",
    "tip": "Pisahkan analisis deret pembilang (bagian atas) dan deret penyebut (bagian bawah) masing-masing."
  },
  {
    "id": "tiu-der-128",
    "subPattern": "deret-pecahan-dan-desimal",
    "difficulty": "mudah",
    "prompt": "Tentukan pecahan berikutnya dari deret berikut:\n8/17, 11/23, 14/29, 17/35, 20/41, ...",
    "options": [
      "20/47",
      "23/47",
      "23/53",
      "26/47",
      "24/46"
    ],
    "answer": "B",
    "explanation": "Analisis pembilang dan penyebut secara terpisah:\n- Pembilang: 8, 11, 14, 17, 20 (bertambah +3) → pembilang berikutnya = 20 + 3 = 23.\n- Penyebut: 17, 23, 29, 35, 41 (bertambah +6) → penyebut berikutnya = 41 + 6 = 47.\nJadi pecahan selanjutnya adalah 23/47.",
    "tip": "Pisahkan analisis deret pembilang (bagian atas) dan deret penyebut (bagian bawah) masing-masing."
  },
  {
    "id": "tiu-der-129",
    "subPattern": "deret-pecahan-dan-desimal",
    "difficulty": "mudah",
    "prompt": "Tentukan pecahan berikutnya dari deret berikut:\n9/19, 13/22, 17/25, 21/28, 25/31, ...",
    "options": [
      "25/34",
      "29/37",
      "29/34",
      "33/34",
      "30/33"
    ],
    "answer": "C",
    "explanation": "Analisis pembilang dan penyebut secara terpisah:\n- Pembilang: 9, 13, 17, 21, 25 (bertambah +4) → pembilang berikutnya = 25 + 4 = 29.\n- Penyebut: 19, 22, 25, 28, 31 (bertambah +3) → penyebut berikutnya = 31 + 3 = 34.\nJadi pecahan selanjutnya adalah 29/34.",
    "tip": "Pisahkan analisis deret pembilang (bagian atas) dan deret penyebut (bagian bawah) masing-masing."
  },
  {
    "id": "tiu-der-130",
    "subPattern": "deret-pecahan-dan-desimal",
    "difficulty": "mudah",
    "prompt": "Tentukan pecahan berikutnya dari deret berikut:\n10/21, 12/25, 14/29, 16/33, 18/37, ...",
    "options": [
      "18/41",
      "20/45",
      "22/41",
      "20/41",
      "21/40"
    ],
    "answer": "D",
    "explanation": "Analisis pembilang dan penyebut secara terpisah:\n- Pembilang: 10, 12, 14, 16, 18 (bertambah +2) → pembilang berikutnya = 18 + 2 = 20.\n- Penyebut: 21, 25, 29, 33, 37 (bertambah +4) → penyebut berikutnya = 37 + 4 = 41.\nJadi pecahan selanjutnya adalah 20/41.",
    "tip": "Pisahkan analisis deret pembilang (bagian atas) dan deret penyebut (bagian bawah) masing-masing."
  },
  {
    "id": "tiu-der-131",
    "subPattern": "deret-pecahan-dan-desimal",
    "difficulty": "sedang",
    "prompt": "Tentukan suku pecahan selanjutnya dari barisan berikut:\n1/2, 2/5, 3/10, 4/17, 5/26, ...",
    "options": [
      "6/35",
      "6/39",
      "7/37",
      "5/35",
      "6/37"
    ],
    "answer": "E",
    "explanation": "Pembilang bertambah +1 secara teratur (1, 2, 3, 4, 5) sehingga pembilang berikutnya adalah 6. Penyebut memiliki selisih bertingkat ganjil (+3, +5, +7, +9, +11): 26 + 11 = 37. Maka suku berikutnya adalah 6/37.",
    "tip": "Jika penyebut pecahan tumbuh semakin cepat, hitung selisih antar penyebut untuk menemukan pola bertingkat (+3, +5, +7, +9, +11)."
  },
  {
    "id": "tiu-der-132",
    "subPattern": "deret-pecahan-dan-desimal",
    "difficulty": "sedang",
    "prompt": "Tentukan suku pecahan selanjutnya dari barisan berikut:\n2/3, 3/6, 4/11, 5/18, 6/27, ...",
    "options": [
      "7/38",
      "7/36",
      "7/40",
      "8/38",
      "6/36"
    ],
    "answer": "A",
    "explanation": "Pembilang bertambah +1 secara teratur (2, 3, 4, 5, 6) sehingga pembilang berikutnya adalah 7. Penyebut memiliki selisih bertingkat ganjil (+3, +5, +7, +9, +11): 27 + 11 = 38. Maka suku berikutnya adalah 7/38.",
    "tip": "Jika penyebut pecahan tumbuh semakin cepat, hitung selisih antar penyebut untuk menemukan pola bertingkat (+3, +5, +7, +9, +11)."
  },
  {
    "id": "tiu-der-133",
    "subPattern": "deret-pecahan-dan-desimal",
    "difficulty": "sedang",
    "prompt": "Tentukan suku pecahan selanjutnya dari barisan berikut:\n3/4, 4/7, 5/12, 6/19, 7/28, ...",
    "options": [
      "8/37",
      "8/39",
      "8/41",
      "9/39",
      "7/37"
    ],
    "answer": "B",
    "explanation": "Pembilang bertambah +1 secara teratur (3, 4, 5, 6, 7) sehingga pembilang berikutnya adalah 8. Penyebut memiliki selisih bertingkat ganjil (+3, +5, +7, +9, +11): 28 + 11 = 39. Maka suku berikutnya adalah 8/39.",
    "tip": "Jika penyebut pecahan tumbuh semakin cepat, hitung selisih antar penyebut untuk menemukan pola bertingkat (+3, +5, +7, +9, +11)."
  },
  {
    "id": "tiu-der-134",
    "subPattern": "deret-pecahan-dan-desimal",
    "difficulty": "sedang",
    "prompt": "Tentukan suku pecahan selanjutnya dari barisan berikut:\n4/5, 5/8, 6/13, 7/20, 8/29, ...",
    "options": [
      "9/38",
      "9/42",
      "9/40",
      "10/40",
      "8/38"
    ],
    "answer": "C",
    "explanation": "Pembilang bertambah +1 secara teratur (4, 5, 6, 7, 8) sehingga pembilang berikutnya adalah 9. Penyebut memiliki selisih bertingkat ganjil (+3, +5, +7, +9, +11): 29 + 11 = 40. Maka suku berikutnya adalah 9/40.",
    "tip": "Jika penyebut pecahan tumbuh semakin cepat, hitung selisih antar penyebut untuk menemukan pola bertingkat (+3, +5, +7, +9, +11)."
  },
  {
    "id": "tiu-der-135",
    "subPattern": "deret-pecahan-dan-desimal",
    "difficulty": "sedang",
    "prompt": "Tentukan suku pecahan selanjutnya dari barisan berikut:\n5/6, 6/9, 7/14, 8/21, 9/30, ...",
    "options": [
      "10/39",
      "10/43",
      "11/41",
      "10/41",
      "9/39"
    ],
    "answer": "D",
    "explanation": "Pembilang bertambah +1 secara teratur (5, 6, 7, 8, 9) sehingga pembilang berikutnya adalah 10. Penyebut memiliki selisih bertingkat ganjil (+3, +5, +7, +9, +11): 30 + 11 = 41. Maka suku berikutnya adalah 10/41.",
    "tip": "Jika penyebut pecahan tumbuh semakin cepat, hitung selisih antar penyebut untuk menemukan pola bertingkat (+3, +5, +7, +9, +11)."
  },
  {
    "id": "tiu-der-136",
    "subPattern": "deret-pecahan-dan-desimal",
    "difficulty": "sedang",
    "prompt": "Tentukan suku pecahan selanjutnya dari barisan berikut:\n6/7, 7/10, 8/15, 9/22, 10/31, ...",
    "options": [
      "11/40",
      "11/44",
      "12/42",
      "10/40",
      "11/42"
    ],
    "answer": "E",
    "explanation": "Pembilang bertambah +1 secara teratur (6, 7, 8, 9, 10) sehingga pembilang berikutnya adalah 11. Penyebut memiliki selisih bertingkat ganjil (+3, +5, +7, +9, +11): 31 + 11 = 42. Maka suku berikutnya adalah 11/42.",
    "tip": "Jika penyebut pecahan tumbuh semakin cepat, hitung selisih antar penyebut untuk menemukan pola bertingkat (+3, +5, +7, +9, +11)."
  },
  {
    "id": "tiu-der-137",
    "subPattern": "deret-pecahan-dan-desimal",
    "difficulty": "sedang",
    "prompt": "Tentukan suku pecahan selanjutnya dari barisan berikut:\n7/8, 8/11, 9/16, 10/23, 11/32, ...",
    "options": [
      "12/43",
      "12/41",
      "12/45",
      "13/43",
      "11/41"
    ],
    "answer": "A",
    "explanation": "Pembilang bertambah +1 secara teratur (7, 8, 9, 10, 11) sehingga pembilang berikutnya adalah 12. Penyebut memiliki selisih bertingkat ganjil (+3, +5, +7, +9, +11): 32 + 11 = 43. Maka suku berikutnya adalah 12/43.",
    "tip": "Jika penyebut pecahan tumbuh semakin cepat, hitung selisih antar penyebut untuk menemukan pola bertingkat (+3, +5, +7, +9, +11)."
  },
  {
    "id": "tiu-der-138",
    "subPattern": "deret-pecahan-dan-desimal",
    "difficulty": "sedang",
    "prompt": "Tentukan suku pecahan selanjutnya dari barisan berikut:\n8/9, 9/12, 10/17, 11/24, 12/33, ...",
    "options": [
      "13/42",
      "13/44",
      "13/46",
      "14/44",
      "12/42"
    ],
    "answer": "B",
    "explanation": "Pembilang bertambah +1 secara teratur (8, 9, 10, 11, 12) sehingga pembilang berikutnya adalah 13. Penyebut memiliki selisih bertingkat ganjil (+3, +5, +7, +9, +11): 33 + 11 = 44. Maka suku berikutnya adalah 13/44.",
    "tip": "Jika penyebut pecahan tumbuh semakin cepat, hitung selisih antar penyebut untuk menemukan pola bertingkat (+3, +5, +7, +9, +11)."
  },
  {
    "id": "tiu-der-139",
    "subPattern": "deret-pecahan-dan-desimal",
    "difficulty": "sedang",
    "prompt": "Tentukan suku pecahan selanjutnya dari barisan berikut:\n9/10, 10/13, 11/18, 12/25, 13/34, ...",
    "options": [
      "14/43",
      "14/47",
      "14/45",
      "15/45",
      "13/43"
    ],
    "answer": "C",
    "explanation": "Pembilang bertambah +1 secara teratur (9, 10, 11, 12, 13) sehingga pembilang berikutnya adalah 14. Penyebut memiliki selisih bertingkat ganjil (+3, +5, +7, +9, +11): 34 + 11 = 45. Maka suku berikutnya adalah 14/45.",
    "tip": "Jika penyebut pecahan tumbuh semakin cepat, hitung selisih antar penyebut untuk menemukan pola bertingkat (+3, +5, +7, +9, +11)."
  },
  {
    "id": "tiu-der-140",
    "subPattern": "deret-pecahan-dan-desimal",
    "difficulty": "sedang",
    "prompt": "Tentukan suku pecahan selanjutnya dari barisan berikut:\n10/11, 11/14, 12/19, 13/26, 14/35, ...",
    "options": [
      "15/44",
      "15/48",
      "16/46",
      "15/46",
      "14/44"
    ],
    "answer": "D",
    "explanation": "Pembilang bertambah +1 secara teratur (10, 11, 12, 13, 14) sehingga pembilang berikutnya adalah 15. Penyebut memiliki selisih bertingkat ganjil (+3, +5, +7, +9, +11): 35 + 11 = 46. Maka suku berikutnya adalah 15/46.",
    "tip": "Jika penyebut pecahan tumbuh semakin cepat, hitung selisih antar penyebut untuk menemukan pola bertingkat (+3, +5, +7, +9, +11)."
  },
  {
    "id": "tiu-der-141",
    "subPattern": "deret-pecahan-dan-desimal",
    "difficulty": "sulit",
    "prompt": "Tentukan bilangan desimal berikutnya dari deret berikut:\n1,2; 1,6; 2,4; 3,6; 5,2; ...",
    "options": [
      "6,8",
      "7,0",
      "7,4",
      "7,6",
      "7,2"
    ],
    "answer": "E",
    "explanation": "Kalikan 10 untuk melihat bilangan bulatnya: 12, 16, 24, 36, 52. Selisih antar sukunya adalah +4, +8, +12, +16 (bertambah +4 setiap langkah). Maka selisih berikutnya adalah +20 (atau +2,0 dalam desimal), sehingga suku selanjutnya = 5,2 + 2,0 = 7,2.",
    "tip": "Pada deret desimal, hilangkan koma sementara dengan mengalikan 10 atau 100 agar pola selisih bilangan bulatnya mudah terlihat."
  },
  {
    "id": "tiu-der-142",
    "subPattern": "deret-pecahan-dan-desimal",
    "difficulty": "sulit",
    "prompt": "Tentukan bilangan desimal berikutnya dari deret berikut:\n1,7; 2,2; 3,1; 4,4; 6,1; ...",
    "options": [
      "8,2",
      "7,8",
      "8,0",
      "8,4",
      "8,6"
    ],
    "answer": "A",
    "explanation": "Kalikan 10 untuk melihat bilangan bulatnya: 17, 22, 31, 44, 61. Selisih antar sukunya adalah +5, +9, +13, +17 (bertambah +4 setiap langkah). Maka selisih berikutnya adalah +21 (atau +2,1 dalam desimal), sehingga suku selanjutnya = 6,1 + 2,1 = 8,2.",
    "tip": "Pada deret desimal, hilangkan koma sementara dengan mengalikan 10 atau 100 agar pola selisih bilangan bulatnya mudah terlihat."
  },
  {
    "id": "tiu-der-143",
    "subPattern": "deret-pecahan-dan-desimal",
    "difficulty": "sulit",
    "prompt": "Tentukan bilangan desimal berikutnya dari deret berikut:\n2,2; 2,8; 3,8; 5,2; 7,0; ...",
    "options": [
      "8,8",
      "9,2",
      "9,0",
      "9,4",
      "9,6"
    ],
    "answer": "B",
    "explanation": "Kalikan 10 untuk melihat bilangan bulatnya: 22, 28, 38, 52, 70. Selisih antar sukunya adalah +6, +10, +14, +18 (bertambah +4 setiap langkah). Maka selisih berikutnya adalah +22 (atau +2,2 dalam desimal), sehingga suku selanjutnya = 7,0 + 2,2 = 9,2.",
    "tip": "Pada deret desimal, hilangkan koma sementara dengan mengalikan 10 atau 100 agar pola selisih bilangan bulatnya mudah terlihat."
  },
  {
    "id": "tiu-der-144",
    "subPattern": "deret-pecahan-dan-desimal",
    "difficulty": "sulit",
    "prompt": "Tentukan bilangan desimal berikutnya dari deret berikut:\n2,7; 3,4; 4,5; 6,0; 7,9; ...",
    "options": [
      "9,8",
      "10,0",
      "10,2",
      "10,4",
      "10,6"
    ],
    "answer": "C",
    "explanation": "Kalikan 10 untuk melihat bilangan bulatnya: 27, 34, 45, 60, 79. Selisih antar sukunya adalah +7, +11, +15, +19 (bertambah +4 setiap langkah). Maka selisih berikutnya adalah +23 (atau +2,3 dalam desimal), sehingga suku selanjutnya = 7,9 + 2,3 = 10,2.",
    "tip": "Pada deret desimal, hilangkan koma sementara dengan mengalikan 10 atau 100 agar pola selisih bilangan bulatnya mudah terlihat."
  },
  {
    "id": "tiu-der-145",
    "subPattern": "deret-pecahan-dan-desimal",
    "difficulty": "sulit",
    "prompt": "Tentukan bilangan desimal berikutnya dari deret berikut:\n3,2; 4,0; 5,2; 6,8; 8,8; ...",
    "options": [
      "10,8",
      "11,0",
      "11,4",
      "11,2",
      "11,6"
    ],
    "answer": "D",
    "explanation": "Kalikan 10 untuk melihat bilangan bulatnya: 32, 40, 52, 68, 88. Selisih antar sukunya adalah +8, +12, +16, +20 (bertambah +4 setiap langkah). Maka selisih berikutnya adalah +24 (atau +2,4 dalam desimal), sehingga suku selanjutnya = 8,8 + 2,4 = 11,2.",
    "tip": "Pada deret desimal, hilangkan koma sementara dengan mengalikan 10 atau 100 agar pola selisih bilangan bulatnya mudah terlihat."
  },
  {
    "id": "tiu-der-146",
    "subPattern": "deret-pecahan-dan-desimal",
    "difficulty": "sulit",
    "prompt": "Tentukan bilangan desimal berikutnya dari deret berikut:\n3,7; 4,6; 5,9; 7,6; 9,7; ...",
    "options": [
      "11,8",
      "12,0",
      "12,4",
      "12,6",
      "12,2"
    ],
    "answer": "E",
    "explanation": "Kalikan 10 untuk melihat bilangan bulatnya: 37, 46, 59, 76, 97. Selisih antar sukunya adalah +9, +13, +17, +21 (bertambah +4 setiap langkah). Maka selisih berikutnya adalah +25 (atau +2,5 dalam desimal), sehingga suku selanjutnya = 9,7 + 2,5 = 12,2.",
    "tip": "Pada deret desimal, hilangkan koma sementara dengan mengalikan 10 atau 100 agar pola selisih bilangan bulatnya mudah terlihat."
  },
  {
    "id": "tiu-der-147",
    "subPattern": "deret-pecahan-dan-desimal",
    "difficulty": "sulit",
    "prompt": "Tentukan bilangan desimal berikutnya dari deret berikut:\n4,2; 5,2; 6,6; 8,4; 10,6; ...",
    "options": [
      "13,2",
      "12,8",
      "13,0",
      "13,4",
      "13,6"
    ],
    "answer": "A",
    "explanation": "Kalikan 10 untuk melihat bilangan bulatnya: 42, 52, 66, 84, 106. Selisih antar sukunya adalah +10, +14, +18, +22 (bertambah +4 setiap langkah). Maka selisih berikutnya adalah +26 (atau +2,6 dalam desimal), sehingga suku selanjutnya = 10,6 + 2,6 = 13,2.",
    "tip": "Pada deret desimal, hilangkan koma sementara dengan mengalikan 10 atau 100 agar pola selisih bilangan bulatnya mudah terlihat."
  },
  {
    "id": "tiu-der-148",
    "subPattern": "deret-pecahan-dan-desimal",
    "difficulty": "sulit",
    "prompt": "Tentukan bilangan desimal berikutnya dari deret berikut:\n4,7; 5,8; 7,3; 9,2; 11,5; ...",
    "options": [
      "13,8",
      "14,2",
      "14,0",
      "14,4",
      "14,6"
    ],
    "answer": "B",
    "explanation": "Kalikan 10 untuk melihat bilangan bulatnya: 47, 58, 73, 92, 115. Selisih antar sukunya adalah +11, +15, +19, +23 (bertambah +4 setiap langkah). Maka selisih berikutnya adalah +27 (atau +2,7 dalam desimal), sehingga suku selanjutnya = 11,5 + 2,7 = 14,2.",
    "tip": "Pada deret desimal, hilangkan koma sementara dengan mengalikan 10 atau 100 agar pola selisih bilangan bulatnya mudah terlihat."
  },
  {
    "id": "tiu-der-149",
    "subPattern": "deret-pecahan-dan-desimal",
    "difficulty": "sulit",
    "prompt": "Tentukan bilangan desimal berikutnya dari deret berikut:\n5,2; 6,4; 8,0; 10,0; 12,4; ...",
    "options": [
      "14,8",
      "15,0",
      "15,2",
      "15,4",
      "15,6"
    ],
    "answer": "C",
    "explanation": "Kalikan 10 untuk melihat bilangan bulatnya: 52, 64, 80, 100, 124. Selisih antar sukunya adalah +12, +16, +20, +24 (bertambah +4 setiap langkah). Maka selisih berikutnya adalah +28 (atau +2,8 dalam desimal), sehingga suku selanjutnya = 12,4 + 2,8 = 15,2.",
    "tip": "Pada deret desimal, hilangkan koma sementara dengan mengalikan 10 atau 100 agar pola selisih bilangan bulatnya mudah terlihat."
  },
  {
    "id": "tiu-der-150",
    "subPattern": "deret-pecahan-dan-desimal",
    "difficulty": "sulit",
    "prompt": "Tentukan bilangan desimal berikutnya dari deret berikut:\n5,7; 7,0; 8,7; 10,8; 13,3; ...",
    "options": [
      "15,8",
      "16,0",
      "16,4",
      "16,2",
      "16,6"
    ],
    "answer": "D",
    "explanation": "Kalikan 10 untuk melihat bilangan bulatnya: 57, 70, 87, 108, 133. Selisih antar sukunya adalah +13, +17, +21, +25 (bertambah +4 setiap langkah). Maka selisih berikutnya adalah +29 (atau +2,9 dalam desimal), sehingga suku selanjutnya = 13,3 + 2,9 = 16,2.",
    "tip": "Pada deret desimal, hilangkan koma sementara dengan mengalikan 10 atau 100 agar pola selisih bilangan bulatnya mudah terlihat."
  }
];
