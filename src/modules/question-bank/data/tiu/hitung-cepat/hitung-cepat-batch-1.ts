import type { QuestionDraft } from "@/modules/question-bank/domain/question";

export const hitungCepatBatch1Drafts: readonly QuestionDraft[] = [
  {
    "id": "tiu-hit-001",
    "subPattern": "operasi-pecahan",
    "difficulty": "mudah",
    "prompt": "Hasil dari 14 3/4 + 6 1/2 - 3 1/4 = ...",
    "options": [
      "18 1/2",
      "19",
      "18",
      "20",
      "20 1/2"
    ],
    "answer": "C",
    "explanation": "Pisahkan bilangan bulat dan pecahannya: (14 + 6 - 3) + (3/4 + 1/2 - 1/4) = 17 + 1 = 18.",
    "tip": "Kelompokkan bilangan bulat terlebih dahulu, lalu jumlahkan pecahannya yang berpenyebut sama."
  },
  {
    "id": "tiu-hit-002",
    "subPattern": "operasi-pecahan",
    "difficulty": "mudah",
    "prompt": "Hasil dari 25 2/3 - 11 1/6 + 4 1/2 = ...",
    "options": [
      "19",
      "19 1/2",
      "20 1/2",
      "21",
      "18 1/2"
    ],
    "answer": "A",
    "explanation": "Pisahkan bulat dan pecahan: (25 - 11 + 4) + (2/3 - 1/6 + 1/2) = 18 + (4/6 - 1/6 + 3/6) = 18 + 6/6 = 19.",
    "tip": "Ubah pecahan 2/3 dan 1/2 ke penyebut 6 agar mudah dijumlahkan setelah memisahkan bilangan bulatnya."
  },
  {
    "id": "tiu-hit-003",
    "subPattern": "operasi-pecahan",
    "difficulty": "mudah",
    "prompt": "Hasil dari 8 3/5 + 7 1/2 - 5 1/10 = ...",
    "options": [
      "11 1/2",
      "12 1/2",
      "10 1/2",
      "9 1/2",
      "11"
    ],
    "answer": "E",
    "explanation": "Bulat: 8 + 7 - 5 = 10. Pecahan: 6/10 + 5/10 - 1/10 = 10/10 = 1. Hasil total: 10 + 1 = 11.",
    "tip": "Samakan penyebut pecahan menjadi 10 dan hitung bagian bilangan bulat secara terpisah."
  },
  {
    "id": "tiu-hit-004",
    "subPattern": "operasi-pecahan",
    "difficulty": "mudah",
    "prompt": "Hasil dari 19 1/4 - 8 5/8 + 3 3/8 = ...",
    "options": [
      "15",
      "14",
      "13 1/2",
      "13",
      "12"
    ],
    "answer": "B",
    "explanation": "Bulat: 19 - 8 + 3 = 14. Pecahan: 2/8 - 5/8 + 3/8 = 0. Jadi hasilnya tepat 14.",
    "tip": "Ubah 1/4 menjadi 2/8 lalu gabungkan dengan -5/8 + 3/8."
  },
  {
    "id": "tiu-hit-005",
    "subPattern": "operasi-pecahan",
    "difficulty": "sedang",
    "prompt": "Hasil dari 12 1/3 - 4 3/4 + 2 5/12 = ...",
    "options": [
      "9 1/2",
      "9",
      "8 1/2",
      "10",
      "8"
    ],
    "answer": "D",
    "explanation": "Bulat: 12 - 4 + 2 = 10. Pecahan: 4/12 - 9/12 + 5/12 = 0. Jadi hasilnya 10.",
    "tip": "Jadikan penyebut semua pecahan 12 dan pisahkan operasi bilangan bulatnya."
  },
  {
    "id": "tiu-hit-006",
    "subPattern": "operasi-pecahan",
    "difficulty": "sedang",
    "prompt": "Hasil dari 30 1/5 - 12 3/4 - 7 9/20 = ...",
    "options": [
      "10",
      "11",
      "12",
      "12 1/2",
      "10 1/2"
    ],
    "answer": "A",
    "explanation": "Bulat: 30 - 12 - 7 = 11. Pecahan: 4/20 - 15/20 - 9/20 = -20/20 = -1. Total: 11 - 1 = 10.",
    "tip": "Jika hasil operasi pecahan bernilai negatif, kurangkan langsung ke total bilangan bulat."
  },
  {
    "id": "tiu-hit-007",
    "subPattern": "operasi-pecahan",
    "difficulty": "mudah",
    "prompt": "Hasil dari 15/28 × 14/45 × 36/7 = ...",
    "options": [
      "9/10",
      "1",
      "5/6",
      "6/7",
      "7/8"
    ],
    "answer": "D",
    "explanation": "Sederhanakan silang: 15/45 = 1/3 dan 14/28 = 1/2, lalu 1/6 × 36/7 = 6/7.",
    "tip": "Jangan langsung mengalikan pembilang dan penyebut; coret pasangan yang saling membagi terlebih dahulu."
  },
  {
    "id": "tiu-hit-008",
    "subPattern": "operasi-pecahan",
    "difficulty": "mudah",
    "prompt": "Hasil dari (3 1/3 × 2 2/5) : 1 3/5 = ...",
    "options": [
      "6 1/2",
      "5",
      "4 1/2",
      "3 1/2",
      "5 1/2"
    ],
    "answer": "B",
    "explanation": "Ubah ke pecahan biasa: (10/3 × 12/5) × 5/8 = 8 × 5/8 = 5.",
    "tip": "Ubah semua pecahan campuran ke pecahan biasa dan balik tanda bagi menjadi kali."
  },
  {
    "id": "tiu-hit-009",
    "subPattern": "operasi-pecahan",
    "difficulty": "sedang",
    "prompt": "Hasil dari 24/35 : 16/21 × 10/9 = ...",
    "options": [
      "1/2",
      "2",
      "3/2",
      "2 1/2",
      "1"
    ],
    "answer": "E",
    "explanation": "Ubah pembagian menjadi perkalian: 24/35 × 21/16 × 10/9. Coret silang: (24/16 = 3/2), (21/35 = 3/5), sehingga (3/2 × 3/5) × 10/9 = 9/10 × 10/9 = 1.",
    "tip": "Balik pecahan tepat setelah tanda bagi (:), lalu coret faktor persekutuan antara pembilang dan penyebut."
  },
  {
    "id": "tiu-hit-010",
    "subPattern": "operasi-pecahan",
    "difficulty": "sedang",
    "prompt": "Hasil dari 2 1/4 × 1 7/9 : 3 1/3 = ...",
    "options": [
      "9/8",
      "1",
      "6/5",
      "8/9",
      "7/6"
    ],
    "answer": "C",
    "explanation": "Ubah ke pecahan biasa: 9/4 × 16/9 × 3/10 = 4 × 3/10 = 12/10 = 6/5.",
    "tip": "Perhatikan 9/4 × 16/9 langsung habis disederhanakan menjadi 4."
  },
  {
    "id": "tiu-hit-011",
    "subPattern": "operasi-pecahan",
    "difficulty": "sedang",
    "prompt": "Hasil dari (4 1/2 : 3/4) × 5/18 = ...",
    "options": [
      "7/3",
      "8/3",
      "7/4",
      "2",
      "5/3"
    ],
    "answer": "E",
    "explanation": "Di dalam kurung: 9/2 × 4/3 = 6. Kalikan dengan 5/18: 6 × 5/18 = 5/3.",
    "tip": "Selesaikan pembagian di dalam kurung dengan membalik penyebut 3/4 menjadi × 4/3."
  },
  {
    "id": "tiu-hit-012",
    "subPattern": "operasi-pecahan",
    "difficulty": "sedang",
    "prompt": "Hasil dari 42/55 × 33/28 : 9/10 = ...",
    "options": [
      "3",
      "1/2",
      "1",
      "3/2",
      "2 1/2"
    ],
    "answer": "C",
    "explanation": "Ubah pembagian menjadi perkalian: 42/55 × 33/28 × 10/9. Coret: 42/28 = 3/2, 33/55 = 3/5, sehingga 3/2 × 3/5 × 10/9 = (9/10) × (10/9) = 1.",
    "tip": "Sederhanakan pasangan (42, 28) dan (33, 55) sebelum mengalikan dengan 10/9."
  },
  {
    "id": "tiu-hit-013",
    "subPattern": "operasi-pecahan",
    "difficulty": "mudah",
    "prompt": "Hasil dari 7/12 × 51 - 7/12 × 15 = ...",
    "options": [
      "21",
      "14",
      "18",
      "24",
      "28"
    ],
    "answer": "A",
    "explanation": "Gunakan sifat distributif: 7/12 × (51 - 15) = 7/12 × 36 = 7 × 3 = 21.",
    "tip": "Keluarkan faktor pecahan yang sama (7/12) menggunakan sifat distributif a×b - a×c = a×(b - c)."
  },
  {
    "id": "tiu-hit-014",
    "subPattern": "operasi-pecahan",
    "difficulty": "sedang",
    "prompt": "Hasil dari (2/3 + 5/6) × (1 1/5 - 2/5) = ...",
    "options": [
      "9/8",
      "1",
      "5/4",
      "6/5",
      "7/6"
    ],
    "answer": "D",
    "explanation": "Kurung pertama: 4/6 + 5/6 = 9/6 = 3/2. Kurung kedua: 6/5 - 2/5 = 4/5. Hasil kali: 3/2 × 4/5 = 6/5.",
    "tip": "Sederhanakan nilai di dalam masing-masing kurung sebelum melakukan perkalian silang."
  },
  {
    "id": "tiu-hit-015",
    "subPattern": "operasi-pecahan",
    "difficulty": "sedang",
    "prompt": "Hasil dari 5/8 × 47 + 5/8 × 25 = ...",
    "options": [
      "23",
      "45",
      "34",
      "35",
      "40"
    ],
    "answer": "B",
    "explanation": "Faktorkan 5/8: 5/8 × (47 + 25) = 5/8 × 72 = 5 × 9 = 45.",
    "tip": "Jumlahkan 47 dan 25 terlebih dahulu karena keduanya dikalikan oleh pecahan yang sama."
  },
  {
    "id": "tiu-hit-016",
    "subPattern": "operasi-pecahan",
    "difficulty": "sedang",
    "prompt": "Hasil dari 3/4 + 10 2/5 × 5 - 3 3/4 = ...",
    "options": [
      "59",
      "49",
      "50",
      "51",
      "54"
    ],
    "answer": "B",
    "explanation": "Dahulukan perkalian: 10 2/5 × 5 = 52/5 × 5 = 52. Lalu gabungkan pecahan sejenis: 3/4 - 3 3/4 = -3. Jadi 52 - 3 = 49.",
    "tip": "Kerjakan perkalian lebih dulu, lalu pasangkan pecahan yang memiliki penyebut sama (3/4 dan 3 3/4)."
  },
  {
    "id": "tiu-hit-017",
    "subPattern": "operasi-pecahan",
    "difficulty": "sedang",
    "prompt": "Hasil dari (5/6 + 3/4) : (2/3 - 1/4) = ...",
    "options": [
      "11/3",
      "23/6",
      "21/5",
      "22/5",
      "19/5"
    ],
    "answer": "E",
    "explanation": "Ubah semua pecahan ke penyebut 12: (10/12 + 9/12) : (8/12 - 3/12) = (19/12) : (5/12) = 19/5.",
    "tip": "Jika pembilang dan penyebut sama-sama diubah ke KPK penyebut 12, penyebut 12 dapat langsung dicoret."
  },
  {
    "id": "tiu-hit-018",
    "subPattern": "operasi-pecahan",
    "difficulty": "sulit",
    "prompt": "Hasil dari 11/14 × 39 - 11/14 × 11 + 11/14 × 14 = ...",
    "options": [
      "30",
      "36",
      "44",
      "33",
      "22"
    ],
    "answer": "D",
    "explanation": "Faktorkan 11/14: 11/14 × (39 - 11 + 14) = 11/14 × 42 = 11 × 3 = 33.",
    "tip": "Keluarkan faktor 11/14 dari ketiga suku lalu hitung bilangan di dalam kurung."
  },
  {
    "id": "tiu-hit-019",
    "subPattern": "operasi-pecahan",
    "difficulty": "sulit",
    "prompt": "Nilai dari 1 / (1 + 1 / (2 + 1/3)) adalah ...",
    "options": [
      "7/10",
      "5/8",
      "5/7",
      "9/13",
      "9/14"
    ],
    "answer": "A",
    "explanation": "Kerjakan dari bawah ke atas: 2 + 1/3 = 7/3. Lalu 1 / (7/3) = 3/7. Berikutnya 1 + 3/7 = 10/7, sehingga 1 / (10/7) = 7/10.",
    "tip": "Hitung pecahan bersusun mulai dari penjumlahan paling bawah secara bertahap ke atas."
  },
  {
    "id": "tiu-hit-020",
    "subPattern": "operasi-pecahan",
    "difficulty": "sulit",
    "prompt": "Hasil dari (2 1/4 - 5/6) : (1 1/2 + 3/4) = ...",
    "options": [
      "3/5",
      "5/8",
      "17/27",
      "8/13",
      "14/23"
    ],
    "answer": "C",
    "explanation": "Ubah ke penyebut 12: (27/12 - 10/12) : (18/12 + 9/12) = (17/12) : (27/12) = 17/27.",
    "tip": "Gunakan penyebut sekutu 12 pada kedua kurung sehingga penyebut 12 saling meniadakan."
  },
  {
    "id": "tiu-hit-021",
    "subPattern": "operasi-pecahan",
    "difficulty": "sulit",
    "prompt": "Nilai dari 2 - 1 / (2 - 1 / (2 - 1/2)) adalah ...",
    "options": [
      "9/7",
      "7/5",
      "8/5",
      "5/4",
      "7/4"
    ],
    "answer": "D",
    "explanation": "Hitung dari bawah: 2 - 1/2 = 3/2. Berikutnya 1 : (3/2) = 2/3, lalu 2 - 2/3 = 4/3. Terakhir 2 - 1 : (4/3) = 2 - 3/4 = 5/4.",
    "tip": "Selesaikan pengurangan pecahan paling bawah terlebih dahulu lalu balikkan setiap bertemu 1/(...)."
  },
  {
    "id": "tiu-hit-022",
    "subPattern": "operasi-pecahan",
    "difficulty": "sulit",
    "prompt": "Hasil dari (1/2 + 1/3 + 1/6) : (1/4 + 1/8 + 1/8) = ...",
    "options": [
      "2 1/2",
      "2",
      "3 1/2",
      "4",
      "3/2"
    ],
    "answer": "B",
    "explanation": "Kurung kiri: 3/6 + 2/6 + 1/6 = 1. Kurung kanan: 2/8 + 1/8 + 1/8 = 4/8 = 1/2. Jadi 1 : (1/2) = 2.",
    "tip": "Jumlahkan masing-masing kelompok terlebih dahulu; perhatikan angka penyebut mudah disamakan."
  },
  {
    "id": "tiu-hit-023",
    "subPattern": "operasi-pecahan",
    "difficulty": "sedang",
    "prompt": "Jika 3/5 bagian dari suatu bilangan adalah 54, maka 5/9 dari bilangan tersebut adalah ...",
    "options": [
      "55",
      "60",
      "50",
      "40",
      "45"
    ],
    "answer": "C",
    "explanation": "Bilangan semula = 54 × 5/3 = 90. Maka 5/9 × 90 = 50.",
    "tip": "Cari bilangan awalnya terlebih dahulu dengan mengalikan 54 dengan kebalikan 3/5."
  },
  {
    "id": "tiu-hit-024",
    "subPattern": "operasi-pecahan",
    "difficulty": "sulit",
    "prompt": "Nilai dari (1 + 1/2) : (1 - 1/3) × (2/3) = ...",
    "options": [
      "5/3",
      "7/5",
      "5/4",
      "7/6",
      "3/2"
    ],
    "answer": "E",
    "explanation": "(3/2) : (2/3) × (2/3) = 3/2 × 3/2 × 2/3 = 3/2.",
    "tip": "Selesaikan kurung masing-masing dulu, lalu ubah ':' menjadi '×' dengan membalik pecahannya."
  },
  {
    "id": "tiu-hit-025",
    "subPattern": "operasi-pecahan",
    "difficulty": "sulit",
    "prompt": "Hasil dari (1 - 1/2) × (1 - 1/3) × (1 - 1/4) × ... × (1 - 1/20) = ...",
    "options": [
      "1/20",
      "1/21",
      "1/23",
      "1/25",
      "1/22"
    ],
    "answer": "A",
    "explanation": "Ubah tiap kurung menjadi pecahan: (1/2) × (2/3) × (3/4) × ... × (19/20). Pembilang dan penyebut bersebelahan saling mencoret sehingga tersisa 1/20.",
    "tip": "Tulis beberapa suku pertama dalam bentuk pecahan biasa dan lihat pola pencoretan silangnya."
  },
  {
    "id": "tiu-hit-026",
    "subPattern": "operasi-pecahan",
    "difficulty": "sulit",
    "prompt": "Hasil dari (1 + 1/2) × (1 + 1/3) × (1 + 1/4) × ... × (1 + 1/19) = ...",
    "options": [
      "10",
      "11",
      "12",
      "12 1/2",
      "10 1/2"
    ],
    "answer": "A",
    "explanation": "Ubah tiap kurung: (3/2) × (4/3) × (5/4) × ... × (20/19). Pembilang dan penyebut saling mencoret sehingga tersisa 20/2 = 10.",
    "tip": "Ubah setiap (1 + 1/n) menjadi (n+1)/n lalu coret faktor yang berulang."
  },
  {
    "id": "tiu-hit-027",
    "subPattern": "operasi-pecahan",
    "difficulty": "sulit",
    "prompt": "Hasil dari 1/(1×2) + 1/(2×3) + 1/(3×4) + ... + 1/(9×10) = ...",
    "options": [
      "12/13",
      "1",
      "9/10",
      "8/9",
      "10/11"
    ],
    "answer": "C",
    "explanation": "Gunakan identitas teleskopik 1/(n(n+1)) = 1/n - 1/(n+1). Semua suku tengah saling meniadakan sehingga tersisa 1 - 1/10 = 9/10.",
    "tip": "Uraikan tiap pecahan 1/(n(n+1)) menjadi selisih 1/n - 1/(n+1)."
  },
  {
    "id": "tiu-hit-028",
    "subPattern": "operasi-pecahan",
    "difficulty": "sulit",
    "prompt": "Hasil dari 1/6 + 1/12 + 1/20 + 1/30 + 1/42 = ...",
    "options": [
      "3/8",
      "6/17",
      "6/19",
      "4/11",
      "5/14"
    ],
    "answer": "E",
    "explanation": "Faktorkan penyebut berurutan: 1/(2×3) + 1/(3×4) + 1/(4×5) + 1/(5×6) + 1/(6×7) = (1/2 - 1/3) + ... + (1/6 - 1/7) = 1/2 - 1/7 = 5/14.",
    "tip": "Perhatikan pola perkalian bilangan berurutan pada penyebutnya: 6 = 2×3, 12 = 3×4, dst."
  },
  {
    "id": "tiu-hit-029",
    "subPattern": "operasi-pecahan",
    "difficulty": "sulit",
    "prompt": "Hasil dari 1/(1×3) + 1/(3×5) + 1/(5×7) + ... + 1/(13×15) = ...",
    "options": [
      "6/13",
      "7/15",
      "9/20",
      "7/16",
      "8/17"
    ],
    "answer": "B",
    "explanation": "Karena selisih faktor penyebut adalah 2, maka 1/(a×b) = (1/2) × (1/a - 1/b). Total deret menjadi (1/2) × (1 - 1/15) = (1/2) × (14/15) = 7/15.",
    "tip": "Untuk selisih faktor penyebut bernilai 2, kalikan hasil selisih suku ujung dengan 1/2."
  },
  {
    "id": "tiu-hit-030",
    "subPattern": "operasi-pecahan",
    "difficulty": "sulit",
    "prompt": "Hasil dari (1 - 1/4) × (1 - 1/9) × (1 - 1/16) × (1 - 1/25) = ...",
    "options": [
      "1/2",
      "3/7",
      "3/8",
      "3/5",
      "4/7"
    ],
    "answer": "D",
    "explanation": "Gunakan identitas (1 - 1/n²) = ((n-1)/n) × ((n+1)/n). Didapat (1/2×3/2) × (2/3×4/3) × (3/4×5/4) × (4/5×6/5). Coret tengah sehingga tersisa (1/2) × (6/5) = 3/5.",
    "tip": "Ubah tiap faktor (1 - 1/n²) menjadi perkalian ((n-1)/n) × ((n+1)/n) agar saling mencoret."
  },
  {
    "id": "tiu-hit-031",
    "subPattern": "operasi-desimal",
    "difficulty": "mudah",
    "prompt": "Hasil dari 4 + 2 1/2 - 0,75 = ...",
    "options": [
      "7,25",
      "5,75",
      "7,75",
      "6,25",
      "6,75"
    ],
    "answer": "B",
    "explanation": "Ubah semua ke desimal: 4 + 2,5 - 0,75 = 6,5 - 0,75 = 5,75.",
    "tip": "Konversikan 2 1/2 menjadi 2,5 agar seluruh bilangan berformat desimal."
  },
  {
    "id": "tiu-hit-032",
    "subPattern": "operasi-desimal",
    "difficulty": "mudah",
    "prompt": "Hasil dari 12,45 - 3,7 + 1,25 = ...",
    "options": [
      "11,5",
      "9,5",
      "10,5",
      "10,0",
      "11,0"
    ],
    "answer": "D",
    "explanation": "Kelompokkan yang mudah dijumlahkan: (12,45 + 1,25) - 3,7 = 13,7 - 3,7 = 10.",
    "tip": "Gabungkan 12,45 dan 1,25 terlebih dahulu karena ujung desimalnya saling melengkapi menjadi 0,70."
  },
  {
    "id": "tiu-hit-033",
    "subPattern": "operasi-desimal",
    "difficulty": "mudah",
    "prompt": "Hasil dari 0,75 + 2/5 - 0,15 = ...",
    "options": [
      "1,00",
      "0,80",
      "0,90",
      "1,10",
      "1,20"
    ],
    "answer": "A",
    "explanation": "Ubah 2/5 = 0,4. Lalu hitung: (0,75 - 0,15) + 0,4 = 0,6 + 0,4 = 1,00.",
    "tip": "Konversikan 2/5 ke 0,4 dan hitung pengurangan desimal 0,75 - 0,15 lebih dulu."
  },
  {
    "id": "tiu-hit-034",
    "subPattern": "operasi-desimal",
    "difficulty": "mudah",
    "prompt": "Hasil dari 18,6 - 4,85 + 2,25 = ...",
    "options": [
      "15,5",
      "14,5",
      "16,0",
      "16,5",
      "15,0"
    ],
    "answer": "C",
    "explanation": "Perhatikan (-4,85 + 2,25) = -2,6. Maka 18,6 - 2,6 = 16,0.",
    "tip": "Kelompokkan dua bilangan berseratusan (-4,85 + 2,25) agar menghasilkan satu angka di belakang koma."
  },
  {
    "id": "tiu-hit-035",
    "subPattern": "operasi-desimal",
    "difficulty": "mudah",
    "prompt": "Hasil dari 6,25 × 4 - 3,5 × 2 = ...",
    "options": [
      "9",
      "14",
      "16",
      "17",
      "18"
    ],
    "answer": "E",
    "explanation": "6,25 × 4 = 25 dan 3,5 × 2 = 7. Jadi 25 - 7 = 18.",
    "tip": "Ingat 6,25 = 6 1/4 sehingga 6,25 × 4 langsung menghasilkan bilangan bulat 25."
  },
  {
    "id": "tiu-hit-036",
    "subPattern": "operasi-desimal",
    "difficulty": "mudah",
    "prompt": "Hasil dari 0,5 × 14 + 3/4 × 12 - 2,5 = ...",
    "options": [
      "17,5",
      "14,5",
      "15,5",
      "16,5",
      "13,5"
    ],
    "answer": "E",
    "explanation": "0,5 × 14 = 7; 3/4 × 12 = 9. Maka 7 + 9 - 2,5 = 16 - 2,5 = 13,5.",
    "tip": "Kerjakan kedua perkalian terlebih dahulu sebelum mengurangkannya dengan 2,5."
  },
  {
    "id": "tiu-hit-037",
    "subPattern": "operasi-desimal",
    "difficulty": "sedang",
    "prompt": "Hasil dari 5,4 + 2,8 × 5 - 3 1/2 = ...",
    "options": [
      "15,9",
      "14,9",
      "16,4",
      "16,9",
      "17,4"
    ],
    "answer": "A",
    "explanation": "Perkalian dulu: 2,8 × 5 = 14. Ubah 3 1/2 = 3,5. Hitung: 5,4 + 14 - 3,5 = 19,4 - 3,5 = 15,9.",
    "tip": "Ingat urutan KABATAKU: dahulukan perkalian 2,8 × 5 sebelum penjumlahan dan pengurangan."
  },
  {
    "id": "tiu-hit-038",
    "subPattern": "operasi-desimal",
    "difficulty": "sedang",
    "prompt": "Hasil dari 9,6 : 1,2 + 0,4 × 15 = ...",
    "options": [
      "13",
      "15",
      "14",
      "16",
      "12"
    ],
    "answer": "C",
    "explanation": "Geser koma: 9,6 : 1,2 = 96 : 12 = 8. Kemudian 0,4 × 15 = 6. Total: 8 + 6 = 14.",
    "tip": "Hilangkan koma pada pembagian desimal dengan menggeser koma penyebut dan pembilang secara sama."
  },
  {
    "id": "tiu-hit-039",
    "subPattern": "operasi-desimal",
    "difficulty": "sedang",
    "prompt": "Hasil dari 0,165 : 0,22 = ...",
    "options": [
      "0,55",
      "0,85",
      "0,45",
      "0,75",
      "0,65"
    ],
    "answer": "D",
    "explanation": "Kalikan kedua bilangan dengan 1.000: 165 : 220 = (15 × 11) : (20 × 11) = 15/20 = 3/4 = 0,75.",
    "tip": "Geser koma tiga langkah ke kanan pada kedua bilangan agar menjadi pembagian bilangan bulat 165 : 220."
  },
  {
    "id": "tiu-hit-040",
    "subPattern": "operasi-desimal",
    "difficulty": "sedang",
    "prompt": "Hasil dari 2,4 × 0,25 : 0,12 = ...",
    "options": [
      "1",
      "5",
      "4",
      "3",
      "2"
    ],
    "answer": "B",
    "explanation": "Perhatikan 2,4 : 0,12 = 240 : 12 = 20. Lalu 20 × 0,25 = 20 × 1/4 = 5.",
    "tip": "Ubah 0,25 menjadi 1/4 dan pasangkan pembagian 2,4 : 0,12 lebih dulu."
  },
  {
    "id": "tiu-hit-041",
    "subPattern": "operasi-desimal",
    "difficulty": "sedang",
    "prompt": "Hasil dari (0,36 × 0,45) : 0,18 = ...",
    "options": [
      "1,20",
      "1,50",
      "1,00",
      "0,90",
      "1,10"
    ],
    "answer": "D",
    "explanation": "Sederhanakan 0,36 : 0,18 = 2. Maka 2 × 0,45 = 0,90.",
    "tip": "Bagikan 0,36 dengan 0,18 terlebih dahulu daripada mengalikan 0,36 × 0,45 secara langsung."
  },
  {
    "id": "tiu-hit-042",
    "subPattern": "operasi-desimal",
    "difficulty": "sedang",
    "prompt": "Hasil dari 0,084 : 0,012 + 1,5 × 4 = ...",
    "options": [
      "14",
      "15",
      "16",
      "11",
      "13"
    ],
    "answer": "E",
    "explanation": "0,084 : 0,012 = 84 : 12 = 7. Sementara 1,5 × 4 = 6. Total: 7 + 6 = 13.",
    "tip": "Kedua bilangan pada pembagian memiliki 3 angka di belakang koma, sehingga komanya langsung hilang."
  },
  {
    "id": "tiu-hit-043",
    "subPattern": "operasi-desimal",
    "difficulty": "sedang",
    "prompt": "Hasil dari (0,72 : 0,08) × 0,35 = ...",
    "options": [
      "3,25",
      "3,15",
      "3,45",
      "2,85",
      "2,95"
    ],
    "answer": "B",
    "explanation": "0,72 : 0,08 = 72 : 8 = 9. Lalu 9 × 0,35 = (10 - 1) × 0,35 = 3,5 - 0,35 = 3,15.",
    "tip": "Hitung pembagian menjadi bilangan bulat 9 terlebih dahulu, lalu kalikan dengan 0,35."
  },
  {
    "id": "tiu-hit-044",
    "subPattern": "operasi-desimal",
    "difficulty": "sulit",
    "prompt": "Hasil dari 0,48 : 0,16 × 0,25 + 1,25 = ...",
    "options": [
      "2,00",
      "2,25",
      "1,75",
      "1,50",
      "1,25"
    ],
    "answer": "A",
    "explanation": "0,48 : 0,16 = 3. Lalu 3 × 0,25 = 0,75. Terakhir 0,75 + 1,25 = 2,00.",
    "tip": "Kerjakan pembagian dan perkalian dari kiri ke kanan sebelum menjumlahkannya dengan 1,25."
  },
  {
    "id": "tiu-hit-045",
    "subPattern": "operasi-desimal",
    "difficulty": "sulit",
    "prompt": "Hasil dari (0,064 : 0,08) × (0,45 : 0,09) = ...",
    "options": [
      "2",
      "3",
      "4",
      "1",
      "5"
    ],
    "answer": "C",
    "explanation": "Kurung 1: 0,064 : 0,08 = 64 : 80 = 0,8. Kurung 2: 0,45 : 0,09 = 45 : 9 = 5. Hasil: 0,8 × 5 = 4.",
    "tip": "Waspadai jumlah angka di belakang koma pada 0,064 (tiga angka) vs 0,08 (dua angka)."
  },
  {
    "id": "tiu-hit-046",
    "subPattern": "operasi-desimal",
    "difficulty": "sulit",
    "prompt": "Hasil dari 1,44 : 0,12 - 0,56 : 0,07 = ...",
    "options": [
      "6",
      "7",
      "4",
      "8",
      "5"
    ],
    "answer": "C",
    "explanation": "1,44 : 0,12 = 144 : 12 = 12. Lalu 0,56 : 0,07 = 56 : 7 = 8. Maka 12 - 8 = 4.",
    "tip": "Hilangkan koma pada kedua pembagian karena masing-masing berseratusan."
  },
  {
    "id": "tiu-hit-047",
    "subPattern": "operasi-desimal",
    "difficulty": "mudah",
    "prompt": "Hasil dari 0,125 × 64 + 0,375 × 24 = ...",
    "options": [
      "19",
      "17",
      "20",
      "15",
      "18"
    ],
    "answer": "B",
    "explanation": "Konversikan desimal sakti: 0,125 = 1/8 dan 0,375 = 3/8. Maka (1/8 × 64) + (3/8 × 24) = 8 + 9 = 17.",
    "tip": "Ubah 0,125 menjadi 1/8 dan 0,375 menjadi 3/8 agar cepat dicoret dengan 64 dan 24."
  },
  {
    "id": "tiu-hit-048",
    "subPattern": "operasi-desimal",
    "difficulty": "sedang",
    "prompt": "Hasil dari 0,875 × 160 - 0,625 × 80 = ...",
    "options": [
      "110",
      "70",
      "80",
      "90",
      "100"
    ],
    "answer": "D",
    "explanation": "Ubah 0,875 = 7/8 dan 0,625 = 5/8. Didapat (7/8 × 160) - (5/8 × 80) = 140 - 50 = 90.",
    "tip": "Gunakan nilai pecahan istimewa perdelapanan: 0,875 = 7/8 dan 0,625 = 5/8."
  },
  {
    "id": "tiu-hit-049",
    "subPattern": "operasi-desimal",
    "difficulty": "mudah",
    "prompt": "Hasil dari 0,25 × 36 + 0,75 × 36 = ...",
    "options": [
      "18",
      "27",
      "29",
      "45",
      "36"
    ],
    "answer": "E",
    "explanation": "Faktorkan 36: (0,25 + 0,75) × 36 = 1 × 36 = 36.",
    "tip": "Jumlahkan terlebih dahulu 0,25 + 0,75 karena pengalinya sama-sama 36."
  },
  {
    "id": "tiu-hit-050",
    "subPattern": "operasi-desimal",
    "difficulty": "sedang",
    "prompt": "Hasil dari (0,625 : 0,125) × (0,375 : 0,25) = ...",
    "options": [
      "7,5",
      "7,0",
      "6,0",
      "5,5",
      "6,5"
    ],
    "answer": "A",
    "explanation": "0,625 : 0,125 = (5/8) : (1/8) = 5. Lalu 0,375 : 0,25 = (3/8) : (2/8) = 3/2 = 1,5. Maka 5 × 1,5 = 7,5.",
    "tip": "Nyatakan setiap desimal ke pecahan perdelapanan agar rasionya langsung terlihat."
  }
];
