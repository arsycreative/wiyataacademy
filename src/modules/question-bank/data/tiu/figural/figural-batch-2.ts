import type { QuestionDraft } from "@/modules/question-bank/domain/question";

export const figuralBatch2Drafts: readonly QuestionDraft[] = [
  {
    "id": "tiu-fig-051",
    "subPattern": "ketidaksamaan-gambar",
    "difficulty": "sulit",
    "prompt": "Manakah satu gambar di antara kelima opsi berikut (Kaidah Paritas Sisi-Warna #1) yang TIDAK mengikuti pola hubungan antara jumlah sisi bangun dan warna isiannya?",
    "options": [
      "[FIG:shape=triangle|rot=90|fill=white|inner=dot|corner=NE] Segitiga, putih, arah 90°, isi titik hitam, titik di kanan-atas",
      "[FIG:shape=hexagon|rot=0|fill=white|inner=dot|corner=NW] Segienam, putih, arah 0°, isi titik hitam, titik di kiri-atas",
      "[FIG:shape=square|rot=90|fill=black|inner=dot|corner=NE] Persegi, hitam, arah 90°, isi titik hitam, titik di kanan-atas",
      "[FIG:shape=pentagon|rot=90|fill=white|inner=dot|corner=SE] Segilima, putih, arah 90°, isi titik hitam, titik di kanan-bawah",
      "[FIG:shape=hexagon|rot=180|fill=black|inner=dot|corner=SW] Segienam, hitam, arah 180°, isi titik hitam, titik di kiri-bawah"
    ],
    "answer": "B",
    "explanation": "Kaidah pada empat gambar lainnya adalah: bangun bersisi ganjil (Segitiga = 3 sisi, Segilima = 5 sisi) selalu berwarna putih, sedangkan bangun bersisi genap (Persegi = 4 sisi, Segienam = 6 sisi) selalu berwarna hitam. Gambar yang menyimpang adalah Segienam yang berwarna putih.",
    "tip": "Jika bentuk bangun pada kelima opsi berbeda-beda, kelompokkan berdasarkan jumlah sisi ganjil vs genap lalu amati pola warna hitam-putihnya."
  },
  {
    "id": "tiu-fig-052",
    "subPattern": "ketidaksamaan-gambar",
    "difficulty": "sulit",
    "prompt": "Manakah satu gambar di antara kelima opsi berikut (Kaidah Paritas Sisi-Warna #2) yang TIDAK mengikuti pola hubungan antara jumlah sisi bangun dan warna isiannya?",
    "options": [
      "[FIG:shape=triangle|rot=180|fill=white|inner=circle|corner=SE] Segitiga, putih, arah 180°, isi lingkaran, titik di kanan-bawah",
      "[FIG:shape=square|rot=180|fill=black|inner=circle|corner=SE] Persegi, hitam, arah 180°, isi lingkaran, titik di kanan-bawah",
      "[FIG:shape=pentagon|rot=90|fill=black|inner=circle|corner=NE] Segilima, hitam, arah 90°, isi lingkaran, titik di kanan-atas",
      "[FIG:shape=pentagon|rot=180|fill=white|inner=circle|corner=SW] Segilima, putih, arah 180°, isi lingkaran, titik di kiri-bawah",
      "[FIG:shape=hexagon|rot=270|fill=black|inner=circle|corner=NW] Segienam, hitam, arah 270°, isi lingkaran, titik di kiri-atas"
    ],
    "answer": "C",
    "explanation": "Kaidah pada empat gambar lainnya adalah: bangun bersisi ganjil (Segitiga = 3 sisi, Segilima = 5 sisi) selalu berwarna putih, sedangkan bangun bersisi genap (Persegi = 4 sisi, Segienam = 6 sisi) selalu berwarna hitam. Gambar yang menyimpang adalah Segilima yang berwarna hitam.",
    "tip": "Jika bentuk bangun pada kelima opsi berbeda-beda, kelompokkan berdasarkan jumlah sisi ganjil vs genap lalu amati pola warna hitam-putihnya."
  },
  {
    "id": "tiu-fig-053",
    "subPattern": "ketidaksamaan-gambar",
    "difficulty": "sulit",
    "prompt": "Manakah satu gambar di antara kelima opsi berikut (Kaidah Paritas Sisi-Warna #3) yang TIDAK mengikuti pola hubungan antara jumlah sisi bangun dan warna isiannya?",
    "options": [
      "[FIG:shape=triangle|rot=270|fill=white|inner=plus|corner=SW] Segitiga, putih, arah 270°, isi tanda tambah, titik di kiri-bawah",
      "[FIG:shape=square|rot=270|fill=black|inner=plus|corner=SW] Persegi, hitam, arah 270°, isi tanda tambah, titik di kiri-bawah",
      "[FIG:shape=pentagon|rot=270|fill=white|inner=plus|corner=NW] Segilima, putih, arah 270°, isi tanda tambah, titik di kiri-atas",
      "[FIG:shape=hexagon|rot=180|fill=white|inner=plus|corner=SE] Segienam, putih, arah 180°, isi tanda tambah, titik di kanan-bawah",
      "[FIG:shape=hexagon|rot=0|fill=black|inner=plus|corner=NE] Segienam, hitam, arah 0°, isi tanda tambah, titik di kanan-atas"
    ],
    "answer": "D",
    "explanation": "Kaidah pada empat gambar lainnya adalah: bangun bersisi ganjil (Segitiga = 3 sisi, Segilima = 5 sisi) selalu berwarna putih, sedangkan bangun bersisi genap (Persegi = 4 sisi, Segienam = 6 sisi) selalu berwarna hitam. Gambar yang menyimpang adalah Segienam yang berwarna putih.",
    "tip": "Jika bentuk bangun pada kelima opsi berbeda-beda, kelompokkan berdasarkan jumlah sisi ganjil vs genap lalu amati pola warna hitam-putihnya."
  },
  {
    "id": "tiu-fig-054",
    "subPattern": "ketidaksamaan-gambar",
    "difficulty": "sulit",
    "prompt": "Manakah satu gambar di antara kelima opsi berikut (Kaidah Paritas Sisi-Warna #4) yang TIDAK mengikuti pola hubungan antara jumlah sisi bangun dan warna isiannya?",
    "options": [
      "[FIG:shape=triangle|rot=0|fill=white|inner=cross|corner=NW] Segitiga, putih, arah 0°, isi tanda silang, titik di kiri-atas",
      "[FIG:shape=square|rot=0|fill=black|inner=cross|corner=NW] Persegi, hitam, arah 0°, isi tanda silang, titik di kiri-atas",
      "[FIG:shape=pentagon|rot=0|fill=white|inner=cross|corner=NE] Segilima, putih, arah 0°, isi tanda silang, titik di kanan-atas",
      "[FIG:shape=hexagon|rot=90|fill=black|inner=cross|corner=SE] Segienam, hitam, arah 90°, isi tanda silang, titik di kanan-bawah",
      "[FIG:shape=pentagon|rot=270|fill=black|inner=cross|corner=SW] Segilima, hitam, arah 270°, isi tanda silang, titik di kiri-bawah"
    ],
    "answer": "E",
    "explanation": "Kaidah pada empat gambar lainnya adalah: bangun bersisi ganjil (Segitiga = 3 sisi, Segilima = 5 sisi) selalu berwarna putih, sedangkan bangun bersisi genap (Persegi = 4 sisi, Segienam = 6 sisi) selalu berwarna hitam. Gambar yang menyimpang adalah Segilima yang berwarna hitam.",
    "tip": "Jika bentuk bangun pada kelima opsi berbeda-beda, kelompokkan berdasarkan jumlah sisi ganjil vs genap lalu amati pola warna hitam-putihnya."
  },
  {
    "id": "tiu-fig-055",
    "subPattern": "ketidaksamaan-gambar",
    "difficulty": "sulit",
    "prompt": "Manakah satu gambar di antara kelima opsi berikut (Kaidah Paritas Sisi-Warna #5) yang TIDAK mengikuti pola hubungan antara jumlah sisi bangun dan warna isiannya?",
    "options": [
      "[FIG:shape=hexagon|rot=0|fill=white|inner=dot|corner=NW] Segienam, putih, arah 0°, isi titik hitam, titik di kiri-atas",
      "[FIG:shape=triangle|rot=90|fill=white|inner=dot|corner=NE] Segitiga, putih, arah 90°, isi titik hitam, titik di kanan-atas",
      "[FIG:shape=square|rot=90|fill=black|inner=dot|corner=NE] Persegi, hitam, arah 90°, isi titik hitam, titik di kanan-atas",
      "[FIG:shape=pentagon|rot=90|fill=white|inner=dot|corner=SE] Segilima, putih, arah 90°, isi titik hitam, titik di kanan-bawah",
      "[FIG:shape=hexagon|rot=180|fill=black|inner=dot|corner=SW] Segienam, hitam, arah 180°, isi titik hitam, titik di kiri-bawah"
    ],
    "answer": "A",
    "explanation": "Kaidah pada empat gambar lainnya adalah: bangun bersisi ganjil (Segitiga = 3 sisi, Segilima = 5 sisi) selalu berwarna putih, sedangkan bangun bersisi genap (Persegi = 4 sisi, Segienam = 6 sisi) selalu berwarna hitam. Gambar yang menyimpang adalah Segienam yang berwarna putih.",
    "tip": "Jika bentuk bangun pada kelima opsi berbeda-beda, kelompokkan berdasarkan jumlah sisi ganjil vs genap lalu amati pola warna hitam-putihnya."
  },
  {
    "id": "tiu-fig-056",
    "subPattern": "ketidaksamaan-gambar",
    "difficulty": "sulit",
    "prompt": "Manakah satu gambar di antara kelima opsi berikut (Kaidah Paritas Sisi-Warna #6) yang TIDAK mengikuti pola hubungan antara jumlah sisi bangun dan warna isiannya?",
    "options": [
      "[FIG:shape=triangle|rot=180|fill=white|inner=circle|corner=SE] Segitiga, putih, arah 180°, isi lingkaran, titik di kanan-bawah",
      "[FIG:shape=pentagon|rot=90|fill=black|inner=circle|corner=NE] Segilima, hitam, arah 90°, isi lingkaran, titik di kanan-atas",
      "[FIG:shape=square|rot=180|fill=black|inner=circle|corner=SE] Persegi, hitam, arah 180°, isi lingkaran, titik di kanan-bawah",
      "[FIG:shape=pentagon|rot=180|fill=white|inner=circle|corner=SW] Segilima, putih, arah 180°, isi lingkaran, titik di kiri-bawah",
      "[FIG:shape=hexagon|rot=270|fill=black|inner=circle|corner=NW] Segienam, hitam, arah 270°, isi lingkaran, titik di kiri-atas"
    ],
    "answer": "B",
    "explanation": "Kaidah pada empat gambar lainnya adalah: bangun bersisi ganjil (Segitiga = 3 sisi, Segilima = 5 sisi) selalu berwarna putih, sedangkan bangun bersisi genap (Persegi = 4 sisi, Segienam = 6 sisi) selalu berwarna hitam. Gambar yang menyimpang adalah Segilima yang berwarna hitam.",
    "tip": "Jika bentuk bangun pada kelima opsi berbeda-beda, kelompokkan berdasarkan jumlah sisi ganjil vs genap lalu amati pola warna hitam-putihnya."
  },
  {
    "id": "tiu-fig-057",
    "subPattern": "ketidaksamaan-gambar",
    "difficulty": "sulit",
    "prompt": "Manakah satu gambar di antara kelima opsi berikut (Kaidah Paritas Sisi-Warna #7) yang TIDAK mengikuti pola hubungan antara jumlah sisi bangun dan warna isiannya?",
    "options": [
      "[FIG:shape=triangle|rot=270|fill=white|inner=plus|corner=SW] Segitiga, putih, arah 270°, isi tanda tambah, titik di kiri-bawah",
      "[FIG:shape=square|rot=270|fill=black|inner=plus|corner=SW] Persegi, hitam, arah 270°, isi tanda tambah, titik di kiri-bawah",
      "[FIG:shape=hexagon|rot=180|fill=white|inner=plus|corner=SE] Segienam, putih, arah 180°, isi tanda tambah, titik di kanan-bawah",
      "[FIG:shape=pentagon|rot=270|fill=white|inner=plus|corner=NW] Segilima, putih, arah 270°, isi tanda tambah, titik di kiri-atas",
      "[FIG:shape=hexagon|rot=0|fill=black|inner=plus|corner=NE] Segienam, hitam, arah 0°, isi tanda tambah, titik di kanan-atas"
    ],
    "answer": "C",
    "explanation": "Kaidah pada empat gambar lainnya adalah: bangun bersisi ganjil (Segitiga = 3 sisi, Segilima = 5 sisi) selalu berwarna putih, sedangkan bangun bersisi genap (Persegi = 4 sisi, Segienam = 6 sisi) selalu berwarna hitam. Gambar yang menyimpang adalah Segienam yang berwarna putih.",
    "tip": "Jika bentuk bangun pada kelima opsi berbeda-beda, kelompokkan berdasarkan jumlah sisi ganjil vs genap lalu amati pola warna hitam-putihnya."
  },
  {
    "id": "tiu-fig-058",
    "subPattern": "ketidaksamaan-gambar",
    "difficulty": "sulit",
    "prompt": "Manakah satu gambar di antara kelima opsi berikut (Kaidah Paritas Sisi-Warna #8) yang TIDAK mengikuti pola hubungan antara jumlah sisi bangun dan warna isiannya?",
    "options": [
      "[FIG:shape=triangle|rot=0|fill=white|inner=cross|corner=NW] Segitiga, putih, arah 0°, isi tanda silang, titik di kiri-atas",
      "[FIG:shape=square|rot=0|fill=black|inner=cross|corner=NW] Persegi, hitam, arah 0°, isi tanda silang, titik di kiri-atas",
      "[FIG:shape=pentagon|rot=0|fill=white|inner=cross|corner=NE] Segilima, putih, arah 0°, isi tanda silang, titik di kanan-atas",
      "[FIG:shape=pentagon|rot=270|fill=black|inner=cross|corner=SW] Segilima, hitam, arah 270°, isi tanda silang, titik di kiri-bawah",
      "[FIG:shape=hexagon|rot=90|fill=black|inner=cross|corner=SE] Segienam, hitam, arah 90°, isi tanda silang, titik di kanan-bawah"
    ],
    "answer": "D",
    "explanation": "Kaidah pada empat gambar lainnya adalah: bangun bersisi ganjil (Segitiga = 3 sisi, Segilima = 5 sisi) selalu berwarna putih, sedangkan bangun bersisi genap (Persegi = 4 sisi, Segienam = 6 sisi) selalu berwarna hitam. Gambar yang menyimpang adalah Segilima yang berwarna hitam.",
    "tip": "Jika bentuk bangun pada kelima opsi berbeda-beda, kelompokkan berdasarkan jumlah sisi ganjil vs genap lalu amati pola warna hitam-putihnya."
  },
  {
    "id": "tiu-fig-059",
    "subPattern": "ketidaksamaan-gambar",
    "difficulty": "sulit",
    "prompt": "Manakah satu gambar di antara kelima opsi berikut (Kaidah Paritas Sisi-Warna #9) yang TIDAK mengikuti pola hubungan antara jumlah sisi bangun dan warna isiannya?",
    "options": [
      "[FIG:shape=triangle|rot=90|fill=white|inner=dot|corner=NE] Segitiga, putih, arah 90°, isi titik hitam, titik di kanan-atas",
      "[FIG:shape=square|rot=90|fill=black|inner=dot|corner=NE] Persegi, hitam, arah 90°, isi titik hitam, titik di kanan-atas",
      "[FIG:shape=pentagon|rot=90|fill=white|inner=dot|corner=SE] Segilima, putih, arah 90°, isi titik hitam, titik di kanan-bawah",
      "[FIG:shape=hexagon|rot=180|fill=black|inner=dot|corner=SW] Segienam, hitam, arah 180°, isi titik hitam, titik di kiri-bawah",
      "[FIG:shape=hexagon|rot=0|fill=white|inner=dot|corner=NW] Segienam, putih, arah 0°, isi titik hitam, titik di kiri-atas"
    ],
    "answer": "E",
    "explanation": "Kaidah pada empat gambar lainnya adalah: bangun bersisi ganjil (Segitiga = 3 sisi, Segilima = 5 sisi) selalu berwarna putih, sedangkan bangun bersisi genap (Persegi = 4 sisi, Segienam = 6 sisi) selalu berwarna hitam. Gambar yang menyimpang adalah Segienam yang berwarna putih.",
    "tip": "Jika bentuk bangun pada kelima opsi berbeda-beda, kelompokkan berdasarkan jumlah sisi ganjil vs genap lalu amati pola warna hitam-putihnya."
  },
  {
    "id": "tiu-fig-060",
    "subPattern": "ketidaksamaan-gambar",
    "difficulty": "sulit",
    "prompt": "Manakah satu gambar di antara kelima opsi berikut (Kaidah Paritas Sisi-Warna #10) yang TIDAK mengikuti pola hubungan antara jumlah sisi bangun dan warna isiannya?",
    "options": [
      "[FIG:shape=pentagon|rot=90|fill=black|inner=circle|corner=NE] Segilima, hitam, arah 90°, isi lingkaran, titik di kanan-atas",
      "[FIG:shape=triangle|rot=180|fill=white|inner=circle|corner=SE] Segitiga, putih, arah 180°, isi lingkaran, titik di kanan-bawah",
      "[FIG:shape=square|rot=180|fill=black|inner=circle|corner=SE] Persegi, hitam, arah 180°, isi lingkaran, titik di kanan-bawah",
      "[FIG:shape=pentagon|rot=180|fill=white|inner=circle|corner=SW] Segilima, putih, arah 180°, isi lingkaran, titik di kiri-bawah",
      "[FIG:shape=hexagon|rot=270|fill=black|inner=circle|corner=NW] Segienam, hitam, arah 270°, isi lingkaran, titik di kiri-atas"
    ],
    "answer": "A",
    "explanation": "Kaidah pada empat gambar lainnya adalah: bangun bersisi ganjil (Segitiga = 3 sisi, Segilima = 5 sisi) selalu berwarna putih, sedangkan bangun bersisi genap (Persegi = 4 sisi, Segienam = 6 sisi) selalu berwarna hitam. Gambar yang menyimpang adalah Segilima yang berwarna hitam.",
    "tip": "Jika bentuk bangun pada kelima opsi berbeda-beda, kelompokkan berdasarkan jumlah sisi ganjil vs genap lalu amati pola warna hitam-putihnya."
  },
  {
    "id": "tiu-fig-061",
    "subPattern": "serial-gambar",
    "difficulty": "mudah",
    "prompt": "Perhatikan barisan 4 gambar berurutan berikut:\n[FIG:shape=arrow|rot=0|fill=white|corner=NW|label=1] -> [FIG:shape=arrow|rot=90|fill=black|corner=NE|label=2] -> [FIG:shape=arrow|rot=180|fill=white|corner=SE|label=3] -> [FIG:shape=arrow|rot=270|fill=black|corner=SW|label=4] -> [FIG:shape=question|label=?]\nManakah gambar ke-5 yang tepat untuk melanjutkan pola serial di atas?",
    "options": [
      "[FIG:shape=arrow|rot=180|fill=white|corner=NW] Panah, putih, arah 180°, titik di kiri-atas",
      "[FIG:shape=arrow|rot=180|fill=black|corner=NE] Panah, hitam, arah 180°, titik di kanan-atas",
      "[FIG:shape=arrow|rot=0|fill=white|corner=NW] Panah, putih, arah 0°, titik di kiri-atas",
      "[FIG:shape=arrow|rot=180|fill=white|corner=NE] Panah, putih, arah 180°, titik di kanan-atas",
      "[FIG:shape=arrow|rot=0|fill=black|corner=NE] Panah, hitam, arah 0°, titik di kanan-atas"
    ],
    "answer": "C",
    "explanation": "Pada setiap langkah dari gambar 1 ke 4: (1) panah berputar +90° searah jarum jam, (2) warna berganti selang-seling (putih, hitam, putih, hitam → gambar ke-5 kembali putih), dan (3) titik sudut bergeser 1 pojok searah jarum jam hingga kembali ke kiri-atas.",
    "tip": "Lacak satu elemen per satu (warna selang-seling, posisi titik pojok, lalu sudut panah) untuk langsung mengeliminasi opsi yang salah."
  },
  {
    "id": "tiu-fig-062",
    "subPattern": "serial-gambar",
    "difficulty": "mudah",
    "prompt": "Perhatikan barisan 4 gambar berurutan berikut:\n[FIG:shape=arrow|rot=45|fill=white|corner=NE|label=1] -> [FIG:shape=arrow|rot=90|fill=black|corner=SE|label=2] -> [FIG:shape=arrow|rot=135|fill=white|corner=SW|label=3] -> [FIG:shape=arrow|rot=180|fill=black|corner=NW|label=4] -> [FIG:shape=question|label=?]\nManakah gambar ke-5 yang tepat untuk melanjutkan pola serial di atas?",
    "options": [
      "[FIG:shape=arrow|rot=225|fill=black|corner=NE] Panah, hitam, arah 225°, titik di kanan-atas",
      "[FIG:shape=arrow|rot=225|fill=black|corner=SE] Panah, hitam, arah 225°, titik di kanan-bawah",
      "[FIG:shape=arrow|rot=315|fill=black|corner=SE] Panah, hitam, arah 315°, titik di kanan-bawah",
      "[FIG:shape=arrow|rot=225|fill=white|corner=NE] Panah, putih, arah 225°, titik di kanan-atas",
      "[FIG:shape=arrow|rot=315|fill=white|corner=SE] Panah, putih, arah 315°, titik di kanan-bawah"
    ],
    "answer": "D",
    "explanation": "Pada setiap langkah dari gambar 1 ke 4: (1) panah berputar +45° searah jarum jam, (2) warna berganti selang-seling (putih, hitam, putih, hitam → gambar ke-5 kembali putih), dan (3) titik sudut bergeser 1 pojok searah jarum jam hingga kembali ke kanan-atas.",
    "tip": "Lacak satu elemen per satu (warna selang-seling, posisi titik pojok, lalu sudut panah) untuk langsung mengeliminasi opsi yang salah."
  },
  {
    "id": "tiu-fig-063",
    "subPattern": "serial-gambar",
    "difficulty": "mudah",
    "prompt": "Perhatikan barisan 4 gambar berurutan berikut:\n[FIG:shape=arrow|rot=90|fill=white|corner=SE|label=1] -> [FIG:shape=arrow|rot=180|fill=black|corner=SW|label=2] -> [FIG:shape=arrow|rot=270|fill=white|corner=NW|label=3] -> [FIG:shape=arrow|rot=0|fill=black|corner=NE|label=4] -> [FIG:shape=question|label=?]\nManakah gambar ke-5 yang tepat untuk melanjutkan pola serial di atas?",
    "options": [
      "[FIG:shape=arrow|rot=270|fill=white|corner=SE] Panah, putih, arah 270°, titik di kanan-bawah",
      "[FIG:shape=arrow|rot=270|fill=black|corner=SW] Panah, hitam, arah 270°, titik di kiri-bawah",
      "[FIG:shape=arrow|rot=180|fill=black|corner=SW] Panah, hitam, arah 180°, titik di kiri-bawah",
      "[FIG:shape=arrow|rot=90|fill=black|corner=NW] Panah, hitam, arah 90°, titik di kiri-atas",
      "[FIG:shape=arrow|rot=90|fill=white|corner=SE] Panah, putih, arah 90°, titik di kanan-bawah"
    ],
    "answer": "E",
    "explanation": "Pada setiap langkah dari gambar 1 ke 4: (1) panah berputar +90° searah jarum jam, (2) warna berganti selang-seling (putih, hitam, putih, hitam → gambar ke-5 kembali putih), dan (3) titik sudut bergeser 1 pojok searah jarum jam hingga kembali ke kanan-bawah.",
    "tip": "Lacak satu elemen per satu (warna selang-seling, posisi titik pojok, lalu sudut panah) untuk langsung mengeliminasi opsi yang salah."
  },
  {
    "id": "tiu-fig-064",
    "subPattern": "serial-gambar",
    "difficulty": "mudah",
    "prompt": "Perhatikan barisan 4 gambar berurutan berikut:\n[FIG:shape=arrow|rot=135|fill=white|corner=SW|label=1] -> [FIG:shape=arrow|rot=180|fill=black|corner=NW|label=2] -> [FIG:shape=arrow|rot=225|fill=white|corner=NE|label=3] -> [FIG:shape=arrow|rot=270|fill=black|corner=SE|label=4] -> [FIG:shape=question|label=?]\nManakah gambar ke-5 yang tepat untuk melanjutkan pola serial di atas?",
    "options": [
      "[FIG:shape=arrow|rot=315|fill=white|corner=SW] Panah, putih, arah 315°, titik di kiri-bawah",
      "[FIG:shape=arrow|rot=45|fill=white|corner=SW] Panah, putih, arah 45°, titik di kiri-bawah",
      "[FIG:shape=arrow|rot=45|fill=black|corner=NW] Panah, hitam, arah 45°, titik di kiri-atas",
      "[FIG:shape=arrow|rot=45|fill=white|corner=NW] Panah, putih, arah 45°, titik di kiri-atas",
      "[FIG:shape=arrow|rot=315|fill=black|corner=NW] Panah, hitam, arah 315°, titik di kiri-atas"
    ],
    "answer": "A",
    "explanation": "Pada setiap langkah dari gambar 1 ke 4: (1) panah berputar +45° searah jarum jam, (2) warna berganti selang-seling (putih, hitam, putih, hitam → gambar ke-5 kembali putih), dan (3) titik sudut bergeser 1 pojok searah jarum jam hingga kembali ke kiri-bawah.",
    "tip": "Lacak satu elemen per satu (warna selang-seling, posisi titik pojok, lalu sudut panah) untuk langsung mengeliminasi opsi yang salah."
  },
  {
    "id": "tiu-fig-065",
    "subPattern": "serial-gambar",
    "difficulty": "mudah",
    "prompt": "Perhatikan barisan 4 gambar berurutan berikut:\n[FIG:shape=arrow|rot=180|fill=white|corner=NW|label=1] -> [FIG:shape=arrow|rot=270|fill=black|corner=NE|label=2] -> [FIG:shape=arrow|rot=0|fill=white|corner=SE|label=3] -> [FIG:shape=arrow|rot=90|fill=black|corner=SW|label=4] -> [FIG:shape=question|label=?]\nManakah gambar ke-5 yang tepat untuk melanjutkan pola serial di atas?",
    "options": [
      "[FIG:shape=arrow|rot=180|fill=black|corner=NW] Panah, hitam, arah 180°, titik di kiri-atas",
      "[FIG:shape=arrow|rot=180|fill=white|corner=NW] Panah, putih, arah 180°, titik di kiri-atas",
      "[FIG:shape=arrow|rot=180|fill=black|corner=NE] Panah, hitam, arah 180°, titik di kanan-atas",
      "[FIG:shape=arrow|rot=0|fill=black|corner=NE] Panah, hitam, arah 0°, titik di kanan-atas",
      "[FIG:shape=arrow|rot=0|fill=white|corner=NE] Panah, putih, arah 0°, titik di kanan-atas"
    ],
    "answer": "B",
    "explanation": "Pada setiap langkah dari gambar 1 ke 4: (1) panah berputar +90° searah jarum jam, (2) warna berganti selang-seling (putih, hitam, putih, hitam → gambar ke-5 kembali putih), dan (3) titik sudut bergeser 1 pojok searah jarum jam hingga kembali ke kiri-atas.",
    "tip": "Lacak satu elemen per satu (warna selang-seling, posisi titik pojok, lalu sudut panah) untuk langsung mengeliminasi opsi yang salah."
  },
  {
    "id": "tiu-fig-066",
    "subPattern": "serial-gambar",
    "difficulty": "mudah",
    "prompt": "Perhatikan barisan 4 gambar berurutan berikut:\n[FIG:shape=arrow|rot=225|fill=white|inner=circle|corner=NE|label=1] -> [FIG:shape=arrow|rot=270|fill=black|inner=circle|corner=SE|label=2] -> [FIG:shape=arrow|rot=315|fill=white|inner=circle|corner=SW|label=3] -> [FIG:shape=arrow|rot=0|fill=black|inner=circle|corner=NW|label=4] -> [FIG:shape=question|label=?]\nManakah gambar ke-5 yang tepat untuk melanjutkan pola serial di atas?",
    "options": [
      "[FIG:shape=arrow|rot=135|fill=white|inner=circle|corner=NE] Panah, putih, arah 135°, isi lingkaran, titik di kanan-atas",
      "[FIG:shape=arrow|rot=135|fill=black|inner=circle|corner=SE] Panah, hitam, arah 135°, isi lingkaran, titik di kanan-bawah",
      "[FIG:shape=arrow|rot=45|fill=white|inner=circle|corner=NE] Panah, putih, arah 45°, isi lingkaran, titik di kanan-atas",
      "[FIG:shape=arrow|rot=90|fill=black|inner=circle|corner=SE] Panah, hitam, arah 90°, isi lingkaran, titik di kanan-bawah",
      "[FIG:shape=arrow|rot=45|fill=black|inner=circle|corner=SW] Panah, hitam, arah 45°, isi lingkaran, titik di kiri-bawah"
    ],
    "answer": "C",
    "explanation": "Pada setiap langkah dari gambar 1 ke 4: (1) panah berputar +45° searah jarum jam, (2) warna berganti selang-seling (putih, hitam, putih, hitam → gambar ke-5 kembali putih), dan (3) titik sudut bergeser 1 pojok searah jarum jam hingga kembali ke kanan-atas.",
    "tip": "Lacak satu elemen per satu (warna selang-seling, posisi titik pojok, lalu sudut panah) untuk langsung mengeliminasi opsi yang salah."
  },
  {
    "id": "tiu-fig-067",
    "subPattern": "serial-gambar",
    "difficulty": "mudah",
    "prompt": "Perhatikan barisan 4 gambar berurutan berikut:\n[FIG:shape=arrow|rot=270|fill=white|inner=plus|corner=SE|label=1] -> [FIG:shape=arrow|rot=0|fill=black|inner=plus|corner=SW|label=2] -> [FIG:shape=arrow|rot=90|fill=white|inner=plus|corner=NW|label=3] -> [FIG:shape=arrow|rot=180|fill=black|inner=plus|corner=NE|label=4] -> [FIG:shape=question|label=?]\nManakah gambar ke-5 yang tepat untuk melanjutkan pola serial di atas?",
    "options": [
      "[FIG:shape=arrow|rot=90|fill=white|inner=plus|corner=SE] Panah, putih, arah 90°, isi tanda tambah, titik di kanan-bawah",
      "[FIG:shape=arrow|rot=90|fill=black|inner=plus|corner=SW] Panah, hitam, arah 90°, isi tanda tambah, titik di kiri-bawah",
      "[FIG:shape=arrow|rot=90|fill=white|inner=plus|corner=SW] Panah, putih, arah 90°, isi tanda tambah, titik di kiri-bawah",
      "[FIG:shape=arrow|rot=270|fill=white|inner=plus|corner=SE] Panah, putih, arah 270°, isi tanda tambah, titik di kanan-bawah",
      "[FIG:shape=arrow|rot=270|fill=black|inner=plus|corner=SW] Panah, hitam, arah 270°, isi tanda tambah, titik di kiri-bawah"
    ],
    "answer": "D",
    "explanation": "Pada setiap langkah dari gambar 1 ke 4: (1) panah berputar +90° searah jarum jam, (2) warna berganti selang-seling (putih, hitam, putih, hitam → gambar ke-5 kembali putih), dan (3) titik sudut bergeser 1 pojok searah jarum jam hingga kembali ke kanan-bawah.",
    "tip": "Lacak satu elemen per satu (warna selang-seling, posisi titik pojok, lalu sudut panah) untuk langsung mengeliminasi opsi yang salah."
  },
  {
    "id": "tiu-fig-068",
    "subPattern": "serial-gambar",
    "difficulty": "mudah",
    "prompt": "Perhatikan barisan 4 gambar berurutan berikut:\n[FIG:shape=arrow|rot=315|fill=white|inner=cross|corner=SW|label=1] -> [FIG:shape=arrow|rot=0|fill=black|inner=cross|corner=NW|label=2] -> [FIG:shape=arrow|rot=45|fill=white|inner=cross|corner=NE|label=3] -> [FIG:shape=arrow|rot=90|fill=black|inner=cross|corner=SE|label=4] -> [FIG:shape=question|label=?]\nManakah gambar ke-5 yang tepat untuk melanjutkan pola serial di atas?",
    "options": [
      "[FIG:shape=arrow|rot=135|fill=black|inner=cross|corner=SW] Panah, hitam, arah 135°, isi tanda silang, titik di kiri-bawah",
      "[FIG:shape=arrow|rot=135|fill=black|inner=cross|corner=NW] Panah, hitam, arah 135°, isi tanda silang, titik di kiri-atas",
      "[FIG:shape=arrow|rot=225|fill=black|inner=cross|corner=NW] Panah, hitam, arah 225°, isi tanda silang, titik di kiri-atas",
      "[FIG:shape=arrow|rot=225|fill=white|inner=cross|corner=NW] Panah, putih, arah 225°, isi tanda silang, titik di kiri-atas",
      "[FIG:shape=arrow|rot=135|fill=white|inner=cross|corner=SW] Panah, putih, arah 135°, isi tanda silang, titik di kiri-bawah"
    ],
    "answer": "E",
    "explanation": "Pada setiap langkah dari gambar 1 ke 4: (1) panah berputar +45° searah jarum jam, (2) warna berganti selang-seling (putih, hitam, putih, hitam → gambar ke-5 kembali putih), dan (3) titik sudut bergeser 1 pojok searah jarum jam hingga kembali ke kiri-bawah.",
    "tip": "Lacak satu elemen per satu (warna selang-seling, posisi titik pojok, lalu sudut panah) untuk langsung mengeliminasi opsi yang salah."
  },
  {
    "id": "tiu-fig-069",
    "subPattern": "serial-gambar",
    "difficulty": "mudah",
    "prompt": "Perhatikan barisan 4 gambar berurutan berikut:\n[FIG:shape=arrow|rot=0|fill=white|inner=dot|corner=NW|label=1] -> [FIG:shape=arrow|rot=90|fill=black|inner=dot|corner=NE|label=2] -> [FIG:shape=arrow|rot=180|fill=white|inner=dot|corner=SE|label=3] -> [FIG:shape=arrow|rot=270|fill=black|inner=dot|corner=SW|label=4] -> [FIG:shape=question|label=?]\nManakah gambar ke-5 yang tepat untuk melanjutkan pola serial di atas?",
    "options": [
      "[FIG:shape=arrow|rot=0|fill=white|inner=dot|corner=NW] Panah, putih, arah 0°, isi titik hitam, titik di kiri-atas",
      "[FIG:shape=arrow|rot=180|fill=white|inner=dot|corner=NW] Panah, putih, arah 180°, isi titik hitam, titik di kiri-atas",
      "[FIG:shape=arrow|rot=180|fill=black|inner=dot|corner=NE] Panah, hitam, arah 180°, isi titik hitam, titik di kanan-atas",
      "[FIG:shape=arrow|rot=90|fill=black|inner=dot|corner=NE] Panah, hitam, arah 90°, isi titik hitam, titik di kanan-atas",
      "[FIG:shape=arrow|rot=0|fill=black|inner=dot|corner=SE] Panah, hitam, arah 0°, isi titik hitam, titik di kanan-bawah"
    ],
    "answer": "A",
    "explanation": "Pada setiap langkah dari gambar 1 ke 4: (1) panah berputar +90° searah jarum jam, (2) warna berganti selang-seling (putih, hitam, putih, hitam → gambar ke-5 kembali putih), dan (3) titik sudut bergeser 1 pojok searah jarum jam hingga kembali ke kiri-atas.",
    "tip": "Lacak satu elemen per satu (warna selang-seling, posisi titik pojok, lalu sudut panah) untuk langsung mengeliminasi opsi yang salah."
  },
  {
    "id": "tiu-fig-070",
    "subPattern": "serial-gambar",
    "difficulty": "mudah",
    "prompt": "Perhatikan barisan 4 gambar berurutan berikut:\n[FIG:shape=arrow|rot=45|fill=white|inner=circle|corner=NE|label=1] -> [FIG:shape=arrow|rot=90|fill=black|inner=circle|corner=SE|label=2] -> [FIG:shape=arrow|rot=135|fill=white|inner=circle|corner=SW|label=3] -> [FIG:shape=arrow|rot=180|fill=black|inner=circle|corner=NW|label=4] -> [FIG:shape=question|label=?]\nManakah gambar ke-5 yang tepat untuk melanjutkan pola serial di atas?",
    "options": [
      "[FIG:shape=arrow|rot=315|fill=white|inner=circle|corner=NE] Panah, putih, arah 315°, isi lingkaran, titik di kanan-atas",
      "[FIG:shape=arrow|rot=225|fill=white|inner=circle|corner=NE] Panah, putih, arah 225°, isi lingkaran, titik di kanan-atas",
      "[FIG:shape=arrow|rot=315|fill=black|inner=circle|corner=SE] Panah, hitam, arah 315°, isi lingkaran, titik di kanan-bawah",
      "[FIG:shape=arrow|rot=315|fill=white|inner=circle|corner=SE] Panah, putih, arah 315°, isi lingkaran, titik di kanan-bawah",
      "[FIG:shape=arrow|rot=225|fill=black|inner=circle|corner=SE] Panah, hitam, arah 225°, isi lingkaran, titik di kanan-bawah"
    ],
    "answer": "B",
    "explanation": "Pada setiap langkah dari gambar 1 ke 4: (1) panah berputar +45° searah jarum jam, (2) warna berganti selang-seling (putih, hitam, putih, hitam → gambar ke-5 kembali putih), dan (3) titik sudut bergeser 1 pojok searah jarum jam hingga kembali ke kanan-atas.",
    "tip": "Lacak satu elemen per satu (warna selang-seling, posisi titik pojok, lalu sudut panah) untuk langsung mengeliminasi opsi yang salah."
  },
  {
    "id": "tiu-fig-071",
    "subPattern": "serial-gambar",
    "difficulty": "sedang",
    "prompt": "Lanjutkan deret serial 4 gambar berikut ke kotak ke-5:\n[FIG:shape=triangle|rot=0|fill=white|corner=NW|dots=1|label=1] -> [FIG:shape=square|rot=90|fill=black|corner=NW|dots=2|label=2] -> [FIG:shape=pentagon|rot=180|fill=striped|corner=NW|dots=3|label=3] -> [FIG:shape=hexagon|rot=270|fill=white|corner=NW|dots=4|label=4] -> [FIG:shape=question|label=?]\nPilih gambar ke-5 yang sesuai dengan pola perubahan bertahap tersebut.",
    "options": [
      "[FIG:shape=triangle|rot=0|fill=white|corner=NW|dots=4] Segitiga, putih, arah 0°, titik di kiri-atas, 4 titik",
      "[FIG:shape=triangle|rot=0|fill=white|corner=NE|dots=4] Segitiga, putih, arah 0°, titik di kanan-atas, 4 titik",
      "[FIG:shape=triangle|rot=0|fill=black|corner=NW|dots=5] Segitiga, hitam, arah 0°, titik di kiri-atas, 5 titik",
      "[FIG:shape=triangle|rot=180|fill=white|corner=NE|dots=4] Segitiga, putih, arah 180°, titik di kanan-atas, 4 titik",
      "[FIG:shape=triangle|rot=180|fill=black|corner=NE|dots=5] Segitiga, hitam, arah 180°, titik di kanan-atas, 5 titik"
    ],
    "answer": "C",
    "explanation": "Urutan pola: (1) jumlah titik bertambah +1 setiap kotak (1, 2, 3, 4 → 5 titik), (2) bentuk poligon berputar dalam siklus 4 bangun sehingga kotak ke-5 sama bentuknya dengan kotak ke-1 (Segitiga), dan (3) arsiran berulang dalam siklus 3 warna (putih → hitam → arsir) sehingga kotak ke-5 berwarna hitam.",
    "tip": "Ingat bahwa siklus 4 langkah akan membuat elemen pada kotak ke-5 kembali sama dengan kotak ke-1."
  },
  {
    "id": "tiu-fig-072",
    "subPattern": "serial-gambar",
    "difficulty": "sedang",
    "prompt": "Lanjutkan deret serial 4 gambar berikut ke kotak ke-5:\n[FIG:shape=square|rot=90|fill=black|corner=NE|dots=1|label=1] -> [FIG:shape=pentagon|rot=180|fill=striped|corner=NE|dots=2|label=2] -> [FIG:shape=hexagon|rot=270|fill=white|corner=NE|dots=3|label=3] -> [FIG:shape=triangle|rot=0|fill=black|corner=NE|dots=4|label=4] -> [FIG:shape=question|label=?]\nPilih gambar ke-5 yang sesuai dengan pola perubahan bertahap tersebut.",
    "options": [
      "[FIG:shape=square|rot=270|fill=striped|corner=NE|dots=4] Persegi, arsir, arah 270°, titik di kanan-atas, 4 titik",
      "[FIG:shape=square|rot=270|fill=white|corner=SE|dots=4] Persegi, putih, arah 270°, titik di kanan-bawah, 4 titik",
      "[FIG:shape=square|rot=180|fill=white|corner=SE|dots=4] Persegi, putih, arah 180°, titik di kanan-bawah, 4 titik",
      "[FIG:shape=square|rot=90|fill=striped|corner=NE|dots=5] Persegi, arsir, arah 90°, titik di kanan-atas, 5 titik",
      "[FIG:shape=square|rot=90|fill=white|corner=SW|dots=5] Persegi, putih, arah 90°, titik di kiri-bawah, 5 titik"
    ],
    "answer": "D",
    "explanation": "Urutan pola: (1) jumlah titik bertambah +1 setiap kotak (1, 2, 3, 4 → 5 titik), (2) bentuk poligon berputar dalam siklus 4 bangun sehingga kotak ke-5 sama bentuknya dengan kotak ke-1 (Persegi), dan (3) arsiran berulang dalam siklus 3 warna (putih → hitam → arsir) sehingga kotak ke-5 berwarna arsir.",
    "tip": "Ingat bahwa siklus 4 langkah akan membuat elemen pada kotak ke-5 kembali sama dengan kotak ke-1."
  },
  {
    "id": "tiu-fig-073",
    "subPattern": "serial-gambar",
    "difficulty": "sedang",
    "prompt": "Lanjutkan deret serial 4 gambar berikut ke kotak ke-5:\n[FIG:shape=pentagon|rot=180|fill=striped|corner=SE|dots=1|label=1] -> [FIG:shape=hexagon|rot=270|fill=white|corner=SE|dots=2|label=2] -> [FIG:shape=triangle|rot=0|fill=black|corner=SE|dots=3|label=3] -> [FIG:shape=square|rot=90|fill=striped|corner=SE|dots=4|label=4] -> [FIG:shape=question|label=?]\nPilih gambar ke-5 yang sesuai dengan pola perubahan bertahap tersebut.",
    "options": [
      "[FIG:shape=pentagon|rot=0|fill=white|corner=SE|dots=4] Segilima, putih, arah 0°, titik di kanan-bawah, 4 titik",
      "[FIG:shape=pentagon|rot=0|fill=black|corner=SW|dots=4] Segilima, hitam, arah 0°, titik di kiri-bawah, 4 titik",
      "[FIG:shape=pentagon|rot=0|fill=white|corner=SW|dots=4] Segilima, putih, arah 0°, titik di kiri-bawah, 4 titik",
      "[FIG:shape=pentagon|rot=180|fill=black|corner=SW|dots=5] Segilima, hitam, arah 180°, titik di kiri-bawah, 5 titik",
      "[FIG:shape=pentagon|rot=180|fill=white|corner=SE|dots=5] Segilima, putih, arah 180°, titik di kanan-bawah, 5 titik"
    ],
    "answer": "E",
    "explanation": "Urutan pola: (1) jumlah titik bertambah +1 setiap kotak (1, 2, 3, 4 → 5 titik), (2) bentuk poligon berputar dalam siklus 4 bangun sehingga kotak ke-5 sama bentuknya dengan kotak ke-1 (Segilima), dan (3) arsiran berulang dalam siklus 3 warna (putih → hitam → arsir) sehingga kotak ke-5 berwarna putih.",
    "tip": "Ingat bahwa siklus 4 langkah akan membuat elemen pada kotak ke-5 kembali sama dengan kotak ke-1."
  },
  {
    "id": "tiu-fig-074",
    "subPattern": "serial-gambar",
    "difficulty": "sedang",
    "prompt": "Lanjutkan deret serial 4 gambar berikut ke kotak ke-5:\n[FIG:shape=hexagon|rot=270|fill=white|corner=SW|dots=1|label=1] -> [FIG:shape=triangle|rot=0|fill=black|corner=SW|dots=2|label=2] -> [FIG:shape=square|rot=90|fill=striped|corner=SW|dots=3|label=3] -> [FIG:shape=pentagon|rot=180|fill=white|corner=SW|dots=4|label=4] -> [FIG:shape=question|label=?]\nPilih gambar ke-5 yang sesuai dengan pola perubahan bertahap tersebut.",
    "options": [
      "[FIG:shape=hexagon|rot=270|fill=black|corner=SW|dots=5] Segienam, hitam, arah 270°, titik di kiri-bawah, 5 titik",
      "[FIG:shape=hexagon|rot=270|fill=white|corner=SW|dots=4] Segienam, putih, arah 270°, titik di kiri-bawah, 4 titik",
      "[FIG:shape=hexagon|rot=270|fill=white|corner=NW|dots=4] Segienam, putih, arah 270°, titik di kiri-atas, 4 titik",
      "[FIG:shape=hexagon|rot=90|fill=white|corner=NW|dots=4] Segienam, putih, arah 90°, titik di kiri-atas, 4 titik",
      "[FIG:shape=hexagon|rot=90|fill=black|corner=NW|dots=5] Segienam, hitam, arah 90°, titik di kiri-atas, 5 titik"
    ],
    "answer": "A",
    "explanation": "Urutan pola: (1) jumlah titik bertambah +1 setiap kotak (1, 2, 3, 4 → 5 titik), (2) bentuk poligon berputar dalam siklus 4 bangun sehingga kotak ke-5 sama bentuknya dengan kotak ke-1 (Segienam), dan (3) arsiran berulang dalam siklus 3 warna (putih → hitam → arsir) sehingga kotak ke-5 berwarna hitam.",
    "tip": "Ingat bahwa siklus 4 langkah akan membuat elemen pada kotak ke-5 kembali sama dengan kotak ke-1."
  },
  {
    "id": "tiu-fig-075",
    "subPattern": "serial-gambar",
    "difficulty": "sedang",
    "prompt": "Lanjutkan deret serial 4 gambar berikut ke kotak ke-5:\n[FIG:shape=triangle|rot=0|fill=black|corner=NW|dots=1|label=1] -> [FIG:shape=square|rot=90|fill=striped|corner=NW|dots=2|label=2] -> [FIG:shape=pentagon|rot=180|fill=white|corner=NW|dots=3|label=3] -> [FIG:shape=hexagon|rot=270|fill=black|corner=NW|dots=4|label=4] -> [FIG:shape=question|label=?]\nPilih gambar ke-5 yang sesuai dengan pola perubahan bertahap tersebut.",
    "options": [
      "[FIG:shape=triangle|rot=180|fill=striped|corner=NW|dots=4] Segitiga, arsir, arah 180°, titik di kiri-atas, 4 titik",
      "[FIG:shape=triangle|rot=0|fill=striped|corner=NW|dots=5] Segitiga, arsir, arah 0°, titik di kiri-atas, 5 titik",
      "[FIG:shape=triangle|rot=180|fill=white|corner=NE|dots=4] Segitiga, putih, arah 180°, titik di kanan-atas, 4 titik",
      "[FIG:shape=triangle|rot=90|fill=white|corner=NE|dots=4] Segitiga, putih, arah 90°, titik di kanan-atas, 4 titik",
      "[FIG:shape=triangle|rot=0|fill=white|corner=SE|dots=5] Segitiga, putih, arah 0°, titik di kanan-bawah, 5 titik"
    ],
    "answer": "B",
    "explanation": "Urutan pola: (1) jumlah titik bertambah +1 setiap kotak (1, 2, 3, 4 → 5 titik), (2) bentuk poligon berputar dalam siklus 4 bangun sehingga kotak ke-5 sama bentuknya dengan kotak ke-1 (Segitiga), dan (3) arsiran berulang dalam siklus 3 warna (putih → hitam → arsir) sehingga kotak ke-5 berwarna arsir.",
    "tip": "Ingat bahwa siklus 4 langkah akan membuat elemen pada kotak ke-5 kembali sama dengan kotak ke-1."
  },
  {
    "id": "tiu-fig-076",
    "subPattern": "serial-gambar",
    "difficulty": "sedang",
    "prompt": "Lanjutkan deret serial 4 gambar berikut ke kotak ke-5:\n[FIG:shape=square|rot=90|fill=striped|inner=circle|corner=NE|dots=1|label=1] -> [FIG:shape=pentagon|rot=180|fill=white|inner=circle|corner=NE|dots=2|label=2] -> [FIG:shape=hexagon|rot=270|fill=black|inner=circle|corner=NE|dots=3|label=3] -> [FIG:shape=triangle|rot=0|fill=striped|inner=circle|corner=NE|dots=4|label=4] -> [FIG:shape=question|label=?]\nPilih gambar ke-5 yang sesuai dengan pola perubahan bertahap tersebut.",
    "options": [
      "[FIG:shape=square|rot=270|fill=white|inner=circle|corner=NE|dots=4] Persegi, putih, arah 270°, isi lingkaran, titik di kanan-atas, 4 titik",
      "[FIG:shape=square|rot=270|fill=black|inner=circle|corner=SE|dots=4] Persegi, hitam, arah 270°, isi lingkaran, titik di kanan-bawah, 4 titik",
      "[FIG:shape=square|rot=90|fill=white|inner=circle|corner=NE|dots=5] Persegi, putih, arah 90°, isi lingkaran, titik di kanan-atas, 5 titik",
      "[FIG:shape=square|rot=270|fill=white|inner=circle|corner=SE|dots=4] Persegi, putih, arah 270°, isi lingkaran, titik di kanan-bawah, 4 titik",
      "[FIG:shape=square|rot=90|fill=black|inner=circle|corner=SE|dots=5] Persegi, hitam, arah 90°, isi lingkaran, titik di kanan-bawah, 5 titik"
    ],
    "answer": "C",
    "explanation": "Urutan pola: (1) jumlah titik bertambah +1 setiap kotak (1, 2, 3, 4 → 5 titik), (2) bentuk poligon berputar dalam siklus 4 bangun sehingga kotak ke-5 sama bentuknya dengan kotak ke-1 (Persegi), dan (3) arsiran berulang dalam siklus 3 warna (putih → hitam → arsir) sehingga kotak ke-5 berwarna putih.",
    "tip": "Ingat bahwa siklus 4 langkah akan membuat elemen pada kotak ke-5 kembali sama dengan kotak ke-1."
  },
  {
    "id": "tiu-fig-077",
    "subPattern": "serial-gambar",
    "difficulty": "sedang",
    "prompt": "Lanjutkan deret serial 4 gambar berikut ke kotak ke-5:\n[FIG:shape=pentagon|rot=180|fill=white|inner=plus|corner=SE|dots=1|label=1] -> [FIG:shape=hexagon|rot=270|fill=black|inner=plus|corner=SE|dots=2|label=2] -> [FIG:shape=triangle|rot=0|fill=striped|inner=plus|corner=SE|dots=3|label=3] -> [FIG:shape=square|rot=90|fill=white|inner=plus|corner=SE|dots=4|label=4] -> [FIG:shape=question|label=?]\nPilih gambar ke-5 yang sesuai dengan pola perubahan bertahap tersebut.",
    "options": [
      "[FIG:shape=pentagon|rot=180|fill=white|inner=plus|corner=SE|dots=4] Segilima, putih, arah 180°, isi tanda tambah, titik di kanan-bawah, 4 titik",
      "[FIG:shape=pentagon|rot=180|fill=white|inner=plus|corner=SW|dots=4] Segilima, putih, arah 180°, isi tanda tambah, titik di kiri-bawah, 4 titik",
      "[FIG:shape=pentagon|rot=0|fill=white|inner=plus|corner=SW|dots=4] Segilima, putih, arah 0°, isi tanda tambah, titik di kiri-bawah, 4 titik",
      "[FIG:shape=pentagon|rot=180|fill=black|inner=plus|corner=SE|dots=5] Segilima, hitam, arah 180°, isi tanda tambah, titik di kanan-bawah, 5 titik",
      "[FIG:shape=pentagon|rot=0|fill=black|inner=plus|corner=SW|dots=5] Segilima, hitam, arah 0°, isi tanda tambah, titik di kiri-bawah, 5 titik"
    ],
    "answer": "D",
    "explanation": "Urutan pola: (1) jumlah titik bertambah +1 setiap kotak (1, 2, 3, 4 → 5 titik), (2) bentuk poligon berputar dalam siklus 4 bangun sehingga kotak ke-5 sama bentuknya dengan kotak ke-1 (Segilima), dan (3) arsiran berulang dalam siklus 3 warna (putih → hitam → arsir) sehingga kotak ke-5 berwarna hitam.",
    "tip": "Ingat bahwa siklus 4 langkah akan membuat elemen pada kotak ke-5 kembali sama dengan kotak ke-1."
  },
  {
    "id": "tiu-fig-078",
    "subPattern": "serial-gambar",
    "difficulty": "sedang",
    "prompt": "Lanjutkan deret serial 4 gambar berikut ke kotak ke-5:\n[FIG:shape=hexagon|rot=270|fill=black|inner=cross|corner=SW|dots=1|label=1] -> [FIG:shape=triangle|rot=0|fill=striped|inner=cross|corner=SW|dots=2|label=2] -> [FIG:shape=square|rot=90|fill=white|inner=cross|corner=SW|dots=3|label=3] -> [FIG:shape=pentagon|rot=180|fill=black|inner=cross|corner=SW|dots=4|label=4] -> [FIG:shape=question|label=?]\nPilih gambar ke-5 yang sesuai dengan pola perubahan bertahap tersebut.",
    "options": [
      "[FIG:shape=hexagon|rot=90|fill=striped|inner=cross|corner=SW|dots=4] Segienam, arsir, arah 90°, isi tanda silang, titik di kiri-bawah, 4 titik",
      "[FIG:shape=hexagon|rot=90|fill=white|inner=cross|corner=NW|dots=4] Segienam, putih, arah 90°, isi tanda silang, titik di kiri-atas, 4 titik",
      "[FIG:shape=hexagon|rot=0|fill=white|inner=cross|corner=NW|dots=4] Segienam, putih, arah 0°, isi tanda silang, titik di kiri-atas, 4 titik",
      "[FIG:shape=hexagon|rot=270|fill=white|inner=cross|corner=NE|dots=5] Segienam, putih, arah 270°, isi tanda silang, titik di kanan-atas, 5 titik",
      "[FIG:shape=hexagon|rot=270|fill=striped|inner=cross|corner=SW|dots=5] Segienam, arsir, arah 270°, isi tanda silang, titik di kiri-bawah, 5 titik"
    ],
    "answer": "E",
    "explanation": "Urutan pola: (1) jumlah titik bertambah +1 setiap kotak (1, 2, 3, 4 → 5 titik), (2) bentuk poligon berputar dalam siklus 4 bangun sehingga kotak ke-5 sama bentuknya dengan kotak ke-1 (Segienam), dan (3) arsiran berulang dalam siklus 3 warna (putih → hitam → arsir) sehingga kotak ke-5 berwarna arsir.",
    "tip": "Ingat bahwa siklus 4 langkah akan membuat elemen pada kotak ke-5 kembali sama dengan kotak ke-1."
  },
  {
    "id": "tiu-fig-079",
    "subPattern": "serial-gambar",
    "difficulty": "sedang",
    "prompt": "Lanjutkan deret serial 4 gambar berikut ke kotak ke-5:\n[FIG:shape=triangle|rot=0|fill=striped|inner=dot|corner=NW|dots=1|label=1] -> [FIG:shape=square|rot=90|fill=white|inner=dot|corner=NW|dots=2|label=2] -> [FIG:shape=pentagon|rot=180|fill=black|inner=dot|corner=NW|dots=3|label=3] -> [FIG:shape=hexagon|rot=270|fill=striped|inner=dot|corner=NW|dots=4|label=4] -> [FIG:shape=question|label=?]\nPilih gambar ke-5 yang sesuai dengan pola perubahan bertahap tersebut.",
    "options": [
      "[FIG:shape=triangle|rot=0|fill=white|inner=dot|corner=NW|dots=5] Segitiga, putih, arah 0°, isi titik hitam, titik di kiri-atas, 5 titik",
      "[FIG:shape=triangle|rot=180|fill=white|inner=dot|corner=NW|dots=4] Segitiga, putih, arah 180°, isi titik hitam, titik di kiri-atas, 4 titik",
      "[FIG:shape=triangle|rot=180|fill=black|inner=dot|corner=NE|dots=4] Segitiga, hitam, arah 180°, isi titik hitam, titik di kanan-atas, 4 titik",
      "[FIG:shape=triangle|rot=180|fill=white|inner=dot|corner=NE|dots=4] Segitiga, putih, arah 180°, isi titik hitam, titik di kanan-atas, 4 titik",
      "[FIG:shape=triangle|rot=0|fill=black|inner=dot|corner=NE|dots=5] Segitiga, hitam, arah 0°, isi titik hitam, titik di kanan-atas, 5 titik"
    ],
    "answer": "A",
    "explanation": "Urutan pola: (1) jumlah titik bertambah +1 setiap kotak (1, 2, 3, 4 → 5 titik), (2) bentuk poligon berputar dalam siklus 4 bangun sehingga kotak ke-5 sama bentuknya dengan kotak ke-1 (Segitiga), dan (3) arsiran berulang dalam siklus 3 warna (putih → hitam → arsir) sehingga kotak ke-5 berwarna putih.",
    "tip": "Ingat bahwa siklus 4 langkah akan membuat elemen pada kotak ke-5 kembali sama dengan kotak ke-1."
  },
  {
    "id": "tiu-fig-080",
    "subPattern": "serial-gambar",
    "difficulty": "sedang",
    "prompt": "Lanjutkan deret serial 4 gambar berikut ke kotak ke-5:\n[FIG:shape=square|rot=90|fill=white|inner=circle|corner=NE|dots=1|label=1] -> [FIG:shape=pentagon|rot=180|fill=black|inner=circle|corner=NE|dots=2|label=2] -> [FIG:shape=hexagon|rot=270|fill=striped|inner=circle|corner=NE|dots=3|label=3] -> [FIG:shape=triangle|rot=0|fill=white|inner=circle|corner=NE|dots=4|label=4] -> [FIG:shape=question|label=?]\nPilih gambar ke-5 yang sesuai dengan pola perubahan bertahap tersebut.",
    "options": [
      "[FIG:shape=square|rot=90|fill=white|inner=circle|corner=NE|dots=4] Persegi, putih, arah 90°, isi lingkaran, titik di kanan-atas, 4 titik",
      "[FIG:shape=square|rot=90|fill=black|inner=circle|corner=NE|dots=5] Persegi, hitam, arah 90°, isi lingkaran, titik di kanan-atas, 5 titik",
      "[FIG:shape=square|rot=90|fill=white|inner=circle|corner=SE|dots=4] Persegi, putih, arah 90°, isi lingkaran, titik di kanan-bawah, 4 titik",
      "[FIG:shape=square|rot=270|fill=white|inner=circle|corner=SE|dots=4] Persegi, putih, arah 270°, isi lingkaran, titik di kanan-bawah, 4 titik",
      "[FIG:shape=square|rot=270|fill=black|inner=circle|corner=SE|dots=5] Persegi, hitam, arah 270°, isi lingkaran, titik di kanan-bawah, 5 titik"
    ],
    "answer": "B",
    "explanation": "Urutan pola: (1) jumlah titik bertambah +1 setiap kotak (1, 2, 3, 4 → 5 titik), (2) bentuk poligon berputar dalam siklus 4 bangun sehingga kotak ke-5 sama bentuknya dengan kotak ke-1 (Persegi), dan (3) arsiran berulang dalam siklus 3 warna (putih → hitam → arsir) sehingga kotak ke-5 berwarna hitam.",
    "tip": "Ingat bahwa siklus 4 langkah akan membuat elemen pada kotak ke-5 kembali sama dengan kotak ke-1."
  },
  {
    "id": "tiu-fig-081",
    "subPattern": "serial-gambar",
    "difficulty": "sulit",
    "prompt": "Analisis pergerakan berlawanan arah pada deret serial berikut:\n[FIG:shape=lshape|rot=0|fill=half-l|inner=dot|corner=NW|dots=1|label=1] -> [FIG:shape=lshape|rot=90|fill=half-r|inner=circle|corner=SW|dots=1|label=2] -> [FIG:shape=lshape|rot=180|fill=half-l|inner=dot|corner=SE|dots=1|label=3] -> [FIG:shape=lshape|rot=270|fill=half-r|inner=circle|corner=NE|dots=1|label=4] -> [FIG:shape=question|label=?]\nManakah gambar ke-5 yang tepat?",
    "options": [
      "[FIG:shape=lshape|rot=180|fill=half-l|inner=dot|corner=NW|dots=1] Bangun L, setengah-hitam kiri, arah 180°, isi titik hitam, titik di kiri-atas, 1 titik",
      "[FIG:shape=lshape|rot=180|fill=half-r|inner=dot|corner=NE|dots=1] Bangun L, setengah-hitam kanan, arah 180°, isi titik hitam, titik di kanan-atas, 1 titik",
      "[FIG:shape=lshape|rot=0|fill=half-l|inner=dot|corner=NW|dots=1] Bangun L, setengah-hitam kiri, arah 0°, isi titik hitam, titik di kiri-atas, 1 titik",
      "[FIG:shape=lshape|rot=90|fill=half-r|inner=dot|corner=NE|dots=1] Bangun L, setengah-hitam kanan, arah 90°, isi titik hitam, titik di kanan-atas, 1 titik",
      "[FIG:shape=lshape|rot=0|fill=half-r|inner=dot|corner=SE|dots=1] Bangun L, setengah-hitam kanan, arah 0°, isi titik hitam, titik di kanan-bawah, 1 titik"
    ],
    "answer": "C",
    "explanation": "Setiap langkah: bangun utama berputar +90° searah jarum jam, titik sudut bergerak 1 pojok berlawanan jarum jam, serta arsiran setengah-hitam dan simbol dalam berganti selang-seling. Karena 4 langkah merupakan 1 putaran penuh (4 × 90° = 360° dan 4 pojok), sekaligus indeks ke-5 adalah ganjil (sama seperti kotak ke-1 dan ke-3), maka gambar ke-5 kembali identik dengan kotak ke-1.",
    "tip": "Trik cepat CAT BKN: jika semua komponen berperiode 2 (selang-seling) atau 4 (empat sudut / rotasi 90°), maka Gambar ke-5 pasti sama persis dengan Gambar ke-1!"
  },
  {
    "id": "tiu-fig-082",
    "subPattern": "serial-gambar",
    "difficulty": "sulit",
    "prompt": "Analisis pergerakan berlawanan arah pada deret serial berikut:\n[FIG:shape=tshape|rot=45|fill=half-l|inner=circle|corner=NE|dots=2|label=1] -> [FIG:shape=tshape|rot=135|fill=half-r|inner=plus|corner=NW|dots=2|label=2] -> [FIG:shape=tshape|rot=225|fill=half-l|inner=circle|corner=SW|dots=2|label=3] -> [FIG:shape=tshape|rot=315|fill=half-r|inner=plus|corner=SE|dots=2|label=4] -> [FIG:shape=question|label=?]\nManakah gambar ke-5 yang tepat?",
    "options": [
      "[FIG:shape=tshape|rot=135|fill=half-l|inner=circle|corner=NE|dots=2] Bangun T, setengah-hitam kiri, arah 135°, isi lingkaran, titik di kanan-atas, 2 titik",
      "[FIG:shape=tshape|rot=135|fill=half-r|inner=circle|corner=SE|dots=2] Bangun T, setengah-hitam kanan, arah 135°, isi lingkaran, titik di kanan-bawah, 2 titik",
      "[FIG:shape=tshape|rot=135|fill=half-l|inner=circle|corner=SE|dots=2] Bangun T, setengah-hitam kiri, arah 135°, isi lingkaran, titik di kanan-bawah, 2 titik",
      "[FIG:shape=tshape|rot=45|fill=half-l|inner=circle|corner=NE|dots=2] Bangun T, setengah-hitam kiri, arah 45°, isi lingkaran, titik di kanan-atas, 2 titik",
      "[FIG:shape=tshape|rot=45|fill=half-r|inner=circle|corner=SE|dots=2] Bangun T, setengah-hitam kanan, arah 45°, isi lingkaran, titik di kanan-bawah, 2 titik"
    ],
    "answer": "D",
    "explanation": "Setiap langkah: bangun utama berputar +90° searah jarum jam, titik sudut bergerak 1 pojok berlawanan jarum jam, serta arsiran setengah-hitam dan simbol dalam berganti selang-seling. Karena 4 langkah merupakan 1 putaran penuh (4 × 90° = 360° dan 4 pojok), sekaligus indeks ke-5 adalah ganjil (sama seperti kotak ke-1 dan ke-3), maka gambar ke-5 kembali identik dengan kotak ke-1.",
    "tip": "Trik cepat CAT BKN: jika semua komponen berperiode 2 (selang-seling) atau 4 (empat sudut / rotasi 90°), maka Gambar ke-5 pasti sama persis dengan Gambar ke-1!"
  },
  {
    "id": "tiu-fig-083",
    "subPattern": "serial-gambar",
    "difficulty": "sulit",
    "prompt": "Analisis pergerakan berlawanan arah pada deret serial berikut:\n[FIG:shape=lshape|rot=90|fill=half-l|inner=plus|corner=SE|dots=3|label=1] -> [FIG:shape=lshape|rot=180|fill=half-r|inner=cross|corner=NE|dots=3|label=2] -> [FIG:shape=lshape|rot=270|fill=half-l|inner=plus|corner=NW|dots=3|label=3] -> [FIG:shape=lshape|rot=0|fill=half-r|inner=cross|corner=SW|dots=3|label=4] -> [FIG:shape=question|label=?]\nManakah gambar ke-5 yang tepat?",
    "options": [
      "[FIG:shape=lshape|rot=90|fill=half-r|inner=plus|corner=SE|dots=3] Bangun L, setengah-hitam kanan, arah 90°, isi tanda tambah, titik di kanan-bawah, 3 titik",
      "[FIG:shape=lshape|rot=90|fill=half-r|inner=plus|corner=SW|dots=3] Bangun L, setengah-hitam kanan, arah 90°, isi tanda tambah, titik di kiri-bawah, 3 titik",
      "[FIG:shape=lshape|rot=270|fill=half-r|inner=plus|corner=SW|dots=3] Bangun L, setengah-hitam kanan, arah 270°, isi tanda tambah, titik di kiri-bawah, 3 titik",
      "[FIG:shape=lshape|rot=270|fill=half-l|inner=plus|corner=SW|dots=3] Bangun L, setengah-hitam kiri, arah 270°, isi tanda tambah, titik di kiri-bawah, 3 titik",
      "[FIG:shape=lshape|rot=90|fill=half-l|inner=plus|corner=SE|dots=3] Bangun L, setengah-hitam kiri, arah 90°, isi tanda tambah, titik di kanan-bawah, 3 titik"
    ],
    "answer": "E",
    "explanation": "Setiap langkah: bangun utama berputar +90° searah jarum jam, titik sudut bergerak 1 pojok berlawanan jarum jam, serta arsiran setengah-hitam dan simbol dalam berganti selang-seling. Karena 4 langkah merupakan 1 putaran penuh (4 × 90° = 360° dan 4 pojok), sekaligus indeks ke-5 adalah ganjil (sama seperti kotak ke-1 dan ke-3), maka gambar ke-5 kembali identik dengan kotak ke-1.",
    "tip": "Trik cepat CAT BKN: jika semua komponen berperiode 2 (selang-seling) atau 4 (empat sudut / rotasi 90°), maka Gambar ke-5 pasti sama persis dengan Gambar ke-1!"
  },
  {
    "id": "tiu-fig-084",
    "subPattern": "serial-gambar",
    "difficulty": "sulit",
    "prompt": "Analisis pergerakan berlawanan arah pada deret serial berikut:\n[FIG:shape=tshape|rot=135|fill=half-l|inner=cross|corner=SW|dots=4|label=1] -> [FIG:shape=tshape|rot=225|fill=half-r|inner=dot|corner=SE|dots=4|label=2] -> [FIG:shape=tshape|rot=315|fill=half-l|inner=cross|corner=NE|dots=4|label=3] -> [FIG:shape=tshape|rot=45|fill=half-r|inner=dot|corner=NW|dots=4|label=4] -> [FIG:shape=question|label=?]\nManakah gambar ke-5 yang tepat?",
    "options": [
      "[FIG:shape=tshape|rot=135|fill=half-l|inner=cross|corner=SW|dots=4] Bangun T, setengah-hitam kiri, arah 135°, isi tanda silang, titik di kiri-bawah, 4 titik",
      "[FIG:shape=tshape|rot=225|fill=half-l|inner=cross|corner=SW|dots=4] Bangun T, setengah-hitam kiri, arah 225°, isi tanda silang, titik di kiri-bawah, 4 titik",
      "[FIG:shape=tshape|rot=225|fill=half-r|inner=cross|corner=NW|dots=4] Bangun T, setengah-hitam kanan, arah 225°, isi tanda silang, titik di kiri-atas, 4 titik",
      "[FIG:shape=tshape|rot=180|fill=half-r|inner=cross|corner=NW|dots=4] Bangun T, setengah-hitam kanan, arah 180°, isi tanda silang, titik di kiri-atas, 4 titik",
      "[FIG:shape=tshape|rot=135|fill=half-r|inner=cross|corner=NE|dots=4] Bangun T, setengah-hitam kanan, arah 135°, isi tanda silang, titik di kanan-atas, 4 titik"
    ],
    "answer": "A",
    "explanation": "Setiap langkah: bangun utama berputar +90° searah jarum jam, titik sudut bergerak 1 pojok berlawanan jarum jam, serta arsiran setengah-hitam dan simbol dalam berganti selang-seling. Karena 4 langkah merupakan 1 putaran penuh (4 × 90° = 360° dan 4 pojok), sekaligus indeks ke-5 adalah ganjil (sama seperti kotak ke-1 dan ke-3), maka gambar ke-5 kembali identik dengan kotak ke-1.",
    "tip": "Trik cepat CAT BKN: jika semua komponen berperiode 2 (selang-seling) atau 4 (empat sudut / rotasi 90°), maka Gambar ke-5 pasti sama persis dengan Gambar ke-1!"
  },
  {
    "id": "tiu-fig-085",
    "subPattern": "serial-gambar",
    "difficulty": "sulit",
    "prompt": "Analisis pergerakan berlawanan arah pada deret serial berikut:\n[FIG:shape=lshape|rot=180|fill=half-l|inner=dot|corner=NW|dots=5|label=1] -> [FIG:shape=lshape|rot=270|fill=half-r|inner=circle|corner=SW|dots=5|label=2] -> [FIG:shape=lshape|rot=0|fill=half-l|inner=dot|corner=SE|dots=5|label=3] -> [FIG:shape=lshape|rot=90|fill=half-r|inner=circle|corner=NE|dots=5|label=4] -> [FIG:shape=question|label=?]\nManakah gambar ke-5 yang tepat?",
    "options": [
      "[FIG:shape=lshape|rot=0|fill=half-l|inner=dot|corner=NW|dots=5] Bangun L, setengah-hitam kiri, arah 0°, isi titik hitam, titik di kiri-atas, 5 titik",
      "[FIG:shape=lshape|rot=180|fill=half-l|inner=dot|corner=NW|dots=5] Bangun L, setengah-hitam kiri, arah 180°, isi titik hitam, titik di kiri-atas, 5 titik",
      "[FIG:shape=lshape|rot=0|fill=half-r|inner=dot|corner=NE|dots=5] Bangun L, setengah-hitam kanan, arah 0°, isi titik hitam, titik di kanan-atas, 5 titik",
      "[FIG:shape=lshape|rot=0|fill=half-l|inner=dot|corner=NE|dots=5] Bangun L, setengah-hitam kiri, arah 0°, isi titik hitam, titik di kanan-atas, 5 titik",
      "[FIG:shape=lshape|rot=180|fill=half-r|inner=dot|corner=NE|dots=5] Bangun L, setengah-hitam kanan, arah 180°, isi titik hitam, titik di kanan-atas, 5 titik"
    ],
    "answer": "B",
    "explanation": "Setiap langkah: bangun utama berputar +90° searah jarum jam, titik sudut bergerak 1 pojok berlawanan jarum jam, serta arsiran setengah-hitam dan simbol dalam berganti selang-seling. Karena 4 langkah merupakan 1 putaran penuh (4 × 90° = 360° dan 4 pojok), sekaligus indeks ke-5 adalah ganjil (sama seperti kotak ke-1 dan ke-3), maka gambar ke-5 kembali identik dengan kotak ke-1.",
    "tip": "Trik cepat CAT BKN: jika semua komponen berperiode 2 (selang-seling) atau 4 (empat sudut / rotasi 90°), maka Gambar ke-5 pasti sama persis dengan Gambar ke-1!"
  },
  {
    "id": "tiu-fig-086",
    "subPattern": "serial-gambar",
    "difficulty": "sulit",
    "prompt": "Analisis pergerakan berlawanan arah pada deret serial berikut:\n[FIG:shape=tshape|rot=225|fill=half-l|inner=circle|corner=NE|dots=1|label=1] -> [FIG:shape=tshape|rot=315|fill=half-r|inner=plus|corner=NW|dots=1|label=2] -> [FIG:shape=tshape|rot=45|fill=half-l|inner=circle|corner=SW|dots=1|label=3] -> [FIG:shape=tshape|rot=135|fill=half-r|inner=plus|corner=SE|dots=1|label=4] -> [FIG:shape=question|label=?]\nManakah gambar ke-5 yang tepat?",
    "options": [
      "[FIG:shape=tshape|rot=225|fill=half-r|inner=circle|corner=NE|dots=1] Bangun T, setengah-hitam kanan, arah 225°, isi lingkaran, titik di kanan-atas, 1 titik",
      "[FIG:shape=tshape|rot=225|fill=half-r|inner=circle|corner=SE|dots=1] Bangun T, setengah-hitam kanan, arah 225°, isi lingkaran, titik di kanan-bawah, 1 titik",
      "[FIG:shape=tshape|rot=225|fill=half-l|inner=circle|corner=NE|dots=1] Bangun T, setengah-hitam kiri, arah 225°, isi lingkaran, titik di kanan-atas, 1 titik",
      "[FIG:shape=tshape|rot=315|fill=half-r|inner=circle|corner=SE|dots=1] Bangun T, setengah-hitam kanan, arah 315°, isi lingkaran, titik di kanan-bawah, 1 titik",
      "[FIG:shape=tshape|rot=315|fill=half-l|inner=circle|corner=SE|dots=1] Bangun T, setengah-hitam kiri, arah 315°, isi lingkaran, titik di kanan-bawah, 1 titik"
    ],
    "answer": "C",
    "explanation": "Setiap langkah: bangun utama berputar +90° searah jarum jam, titik sudut bergerak 1 pojok berlawanan jarum jam, serta arsiran setengah-hitam dan simbol dalam berganti selang-seling. Karena 4 langkah merupakan 1 putaran penuh (4 × 90° = 360° dan 4 pojok), sekaligus indeks ke-5 adalah ganjil (sama seperti kotak ke-1 dan ke-3), maka gambar ke-5 kembali identik dengan kotak ke-1.",
    "tip": "Trik cepat CAT BKN: jika semua komponen berperiode 2 (selang-seling) atau 4 (empat sudut / rotasi 90°), maka Gambar ke-5 pasti sama persis dengan Gambar ke-1!"
  },
  {
    "id": "tiu-fig-087",
    "subPattern": "serial-gambar",
    "difficulty": "sulit",
    "prompt": "Analisis pergerakan berlawanan arah pada deret serial berikut:\n[FIG:shape=lshape|rot=270|fill=half-l|inner=plus|corner=SE|dots=2|label=1] -> [FIG:shape=lshape|rot=0|fill=half-r|inner=cross|corner=NE|dots=2|label=2] -> [FIG:shape=lshape|rot=90|fill=half-l|inner=plus|corner=NW|dots=2|label=3] -> [FIG:shape=lshape|rot=180|fill=half-r|inner=cross|corner=SW|dots=2|label=4] -> [FIG:shape=question|label=?]\nManakah gambar ke-5 yang tepat?",
    "options": [
      "[FIG:shape=lshape|rot=90|fill=half-l|inner=plus|corner=SE|dots=2] Bangun L, setengah-hitam kiri, arah 90°, isi tanda tambah, titik di kanan-bawah, 2 titik",
      "[FIG:shape=lshape|rot=90|fill=half-r|inner=plus|corner=SW|dots=2] Bangun L, setengah-hitam kanan, arah 90°, isi tanda tambah, titik di kiri-bawah, 2 titik",
      "[FIG:shape=lshape|rot=0|fill=half-r|inner=plus|corner=SW|dots=2] Bangun L, setengah-hitam kanan, arah 0°, isi tanda tambah, titik di kiri-bawah, 2 titik",
      "[FIG:shape=lshape|rot=270|fill=half-l|inner=plus|corner=SE|dots=2] Bangun L, setengah-hitam kiri, arah 270°, isi tanda tambah, titik di kanan-bawah, 2 titik",
      "[FIG:shape=lshape|rot=270|fill=half-r|inner=plus|corner=NW|dots=2] Bangun L, setengah-hitam kanan, arah 270°, isi tanda tambah, titik di kiri-atas, 2 titik"
    ],
    "answer": "D",
    "explanation": "Setiap langkah: bangun utama berputar +90° searah jarum jam, titik sudut bergerak 1 pojok berlawanan jarum jam, serta arsiran setengah-hitam dan simbol dalam berganti selang-seling. Karena 4 langkah merupakan 1 putaran penuh (4 × 90° = 360° dan 4 pojok), sekaligus indeks ke-5 adalah ganjil (sama seperti kotak ke-1 dan ke-3), maka gambar ke-5 kembali identik dengan kotak ke-1.",
    "tip": "Trik cepat CAT BKN: jika semua komponen berperiode 2 (selang-seling) atau 4 (empat sudut / rotasi 90°), maka Gambar ke-5 pasti sama persis dengan Gambar ke-1!"
  },
  {
    "id": "tiu-fig-088",
    "subPattern": "serial-gambar",
    "difficulty": "sulit",
    "prompt": "Analisis pergerakan berlawanan arah pada deret serial berikut:\n[FIG:shape=tshape|rot=315|fill=half-l|inner=cross|corner=SW|dots=3|label=1] -> [FIG:shape=tshape|rot=45|fill=half-r|inner=dot|corner=SE|dots=3|label=2] -> [FIG:shape=tshape|rot=135|fill=half-l|inner=cross|corner=NE|dots=3|label=3] -> [FIG:shape=tshape|rot=225|fill=half-r|inner=dot|corner=NW|dots=3|label=4] -> [FIG:shape=question|label=?]\nManakah gambar ke-5 yang tepat?",
    "options": [
      "[FIG:shape=tshape|rot=45|fill=half-l|inner=cross|corner=SW|dots=3] Bangun T, setengah-hitam kiri, arah 45°, isi tanda silang, titik di kiri-bawah, 3 titik",
      "[FIG:shape=tshape|rot=45|fill=half-r|inner=cross|corner=NW|dots=3] Bangun T, setengah-hitam kanan, arah 45°, isi tanda silang, titik di kiri-atas, 3 titik",
      "[FIG:shape=tshape|rot=45|fill=half-l|inner=cross|corner=NW|dots=3] Bangun T, setengah-hitam kiri, arah 45°, isi tanda silang, titik di kiri-atas, 3 titik",
      "[FIG:shape=tshape|rot=315|fill=half-r|inner=cross|corner=NW|dots=3] Bangun T, setengah-hitam kanan, arah 315°, isi tanda silang, titik di kiri-atas, 3 titik",
      "[FIG:shape=tshape|rot=315|fill=half-l|inner=cross|corner=SW|dots=3] Bangun T, setengah-hitam kiri, arah 315°, isi tanda silang, titik di kiri-bawah, 3 titik"
    ],
    "answer": "E",
    "explanation": "Setiap langkah: bangun utama berputar +90° searah jarum jam, titik sudut bergerak 1 pojok berlawanan jarum jam, serta arsiran setengah-hitam dan simbol dalam berganti selang-seling. Karena 4 langkah merupakan 1 putaran penuh (4 × 90° = 360° dan 4 pojok), sekaligus indeks ke-5 adalah ganjil (sama seperti kotak ke-1 dan ke-3), maka gambar ke-5 kembali identik dengan kotak ke-1.",
    "tip": "Trik cepat CAT BKN: jika semua komponen berperiode 2 (selang-seling) atau 4 (empat sudut / rotasi 90°), maka Gambar ke-5 pasti sama persis dengan Gambar ke-1!"
  },
  {
    "id": "tiu-fig-089",
    "subPattern": "serial-gambar",
    "difficulty": "sulit",
    "prompt": "Analisis pergerakan berlawanan arah pada deret serial berikut:\n[FIG:shape=lshape|rot=0|fill=half-l|inner=dot|corner=NW|dots=4|label=1] -> [FIG:shape=lshape|rot=90|fill=half-r|inner=circle|corner=SW|dots=4|label=2] -> [FIG:shape=lshape|rot=180|fill=half-l|inner=dot|corner=SE|dots=4|label=3] -> [FIG:shape=lshape|rot=270|fill=half-r|inner=circle|corner=NE|dots=4|label=4] -> [FIG:shape=question|label=?]\nManakah gambar ke-5 yang tepat?",
    "options": [
      "[FIG:shape=lshape|rot=0|fill=half-l|inner=dot|corner=NW|dots=4] Bangun L, setengah-hitam kiri, arah 0°, isi titik hitam, titik di kiri-atas, 4 titik",
      "[FIG:shape=lshape|rot=0|fill=half-r|inner=dot|corner=NW|dots=4] Bangun L, setengah-hitam kanan, arah 0°, isi titik hitam, titik di kiri-atas, 4 titik",
      "[FIG:shape=lshape|rot=0|fill=half-r|inner=dot|corner=NE|dots=4] Bangun L, setengah-hitam kanan, arah 0°, isi titik hitam, titik di kanan-atas, 4 titik",
      "[FIG:shape=lshape|rot=180|fill=half-r|inner=dot|corner=NE|dots=4] Bangun L, setengah-hitam kanan, arah 180°, isi titik hitam, titik di kanan-atas, 4 titik",
      "[FIG:shape=lshape|rot=180|fill=half-l|inner=dot|corner=NE|dots=4] Bangun L, setengah-hitam kiri, arah 180°, isi titik hitam, titik di kanan-atas, 4 titik"
    ],
    "answer": "A",
    "explanation": "Setiap langkah: bangun utama berputar +90° searah jarum jam, titik sudut bergerak 1 pojok berlawanan jarum jam, serta arsiran setengah-hitam dan simbol dalam berganti selang-seling. Karena 4 langkah merupakan 1 putaran penuh (4 × 90° = 360° dan 4 pojok), sekaligus indeks ke-5 adalah ganjil (sama seperti kotak ke-1 dan ke-3), maka gambar ke-5 kembali identik dengan kotak ke-1.",
    "tip": "Trik cepat CAT BKN: jika semua komponen berperiode 2 (selang-seling) atau 4 (empat sudut / rotasi 90°), maka Gambar ke-5 pasti sama persis dengan Gambar ke-1!"
  },
  {
    "id": "tiu-fig-090",
    "subPattern": "serial-gambar",
    "difficulty": "sulit",
    "prompt": "Analisis pergerakan berlawanan arah pada deret serial berikut:\n[FIG:shape=tshape|rot=45|fill=half-l|inner=circle|corner=NE|dots=5|label=1] -> [FIG:shape=tshape|rot=135|fill=half-r|inner=plus|corner=NW|dots=5|label=2] -> [FIG:shape=tshape|rot=225|fill=half-l|inner=circle|corner=SW|dots=5|label=3] -> [FIG:shape=tshape|rot=315|fill=half-r|inner=plus|corner=SE|dots=5|label=4] -> [FIG:shape=question|label=?]\nManakah gambar ke-5 yang tepat?",
    "options": [
      "[FIG:shape=tshape|rot=135|fill=half-l|inner=circle|corner=NE|dots=5] Bangun T, setengah-hitam kiri, arah 135°, isi lingkaran, titik di kanan-atas, 5 titik",
      "[FIG:shape=tshape|rot=45|fill=half-l|inner=circle|corner=NE|dots=5] Bangun T, setengah-hitam kiri, arah 45°, isi lingkaran, titik di kanan-atas, 5 titik",
      "[FIG:shape=tshape|rot=135|fill=half-r|inner=circle|corner=SE|dots=5] Bangun T, setengah-hitam kanan, arah 135°, isi lingkaran, titik di kanan-bawah, 5 titik",
      "[FIG:shape=tshape|rot=90|fill=half-r|inner=circle|corner=SE|dots=5] Bangun T, setengah-hitam kanan, arah 90°, isi lingkaran, titik di kanan-bawah, 5 titik",
      "[FIG:shape=tshape|rot=45|fill=half-r|inner=circle|corner=SW|dots=5] Bangun T, setengah-hitam kanan, arah 45°, isi lingkaran, titik di kiri-bawah, 5 titik"
    ],
    "answer": "B",
    "explanation": "Setiap langkah: bangun utama berputar +90° searah jarum jam, titik sudut bergerak 1 pojok berlawanan jarum jam, serta arsiran setengah-hitam dan simbol dalam berganti selang-seling. Karena 4 langkah merupakan 1 putaran penuh (4 × 90° = 360° dan 4 pojok), sekaligus indeks ke-5 adalah ganjil (sama seperti kotak ke-1 dan ke-3), maka gambar ke-5 kembali identik dengan kotak ke-1.",
    "tip": "Trik cepat CAT BKN: jika semua komponen berperiode 2 (selang-seling) atau 4 (empat sudut / rotasi 90°), maka Gambar ke-5 pasti sama persis dengan Gambar ke-1!"
  },
  {
    "id": "tiu-fig-091",
    "subPattern": "matriks-dan-komposisi",
    "difficulty": "mudah",
    "prompt": "Pada matriks figural 3×3 (Variasi #1), setiap baris wajib memuat tepat satu Segitiga, satu Persegi, dan satu Lingkaran; masing-masing dengan warna berbeda (putih, arsir, hitam) serta simbol dalam berbeda (titik, tambah, silang).\nContoh Baris 1:\n[FIG:shape=square|fill=black|inner=cross|corner=NW|label=B1-K1] [FIG:shape=circle|fill=white|inner=dot|corner=NW|label=B1-K2] [FIG:shape=triangle|fill=striped|inner=plus|corner=NW|label=B1-K3]\nBaris 3 saat ini:\n[FIG:shape=triangle|fill=white|inner=plus|corner=NW|label=Baris3-1] [FIG:shape=square|fill=striped|inner=cross|corner=NW|label=Baris3-2] [FIG:shape=question|label=?]\nManakah gambar yang tepat untuk melengkapi kotak ketiga pada Baris 3?",
    "options": [
      "[FIG:shape=triangle|fill=black|inner=dot|corner=NW] Segitiga, hitam, isi titik hitam, titik di kiri-atas",
      "[FIG:shape=triangle|fill=striped|inner=plus|corner=NW] Segitiga, arsir, isi tanda tambah, titik di kiri-atas",
      "[FIG:shape=triangle|fill=black|inner=plus|corner=NW] Segitiga, hitam, isi tanda tambah, titik di kiri-atas",
      "[FIG:shape=circle|fill=black|inner=dot|corner=NW] Lingkaran, hitam, isi titik hitam, titik di kiri-atas",
      "[FIG:shape=circle|fill=striped|inner=plus|corner=NW] Lingkaran, arsir, isi tanda tambah, titik di kiri-atas"
    ],
    "answer": "D",
    "explanation": "Pada Baris 3 sudah terdapat bentuk Segitiga dan Persegi (kurang Lingkaran), warna putih dan arsir (kurang warna hitam), serta simbol isi tanda tambah dan isi tanda silang (kurang isi titik hitam) dengan titik sudut tetap di kiri-atas.",
    "tip": "Gunakan prinsip Sudoku/Latin Square pada baris terakhir: cari 1 bentuk, 1 warna arsiran, dan 1 simbol dalam yang belum muncul di baris tersebut."
  },
  {
    "id": "tiu-fig-092",
    "subPattern": "matriks-dan-komposisi",
    "difficulty": "mudah",
    "prompt": "Pada matriks figural 3×3 (Variasi #2), setiap baris wajib memuat tepat satu Segitiga, satu Persegi, dan satu Lingkaran; masing-masing dengan warna berbeda (putih, arsir, hitam) serta simbol dalam berbeda (titik, tambah, silang).\nContoh Baris 1:\n[FIG:shape=circle|fill=black|inner=dot|corner=NE|label=B1-K1] [FIG:shape=triangle|fill=white|inner=plus|corner=NE|label=B1-K2] [FIG:shape=square|fill=striped|inner=cross|corner=NE|label=B1-K3]\nBaris 3 saat ini:\n[FIG:shape=square|fill=white|inner=cross|corner=NE|label=Baris3-1] [FIG:shape=circle|fill=striped|inner=dot|corner=NE|label=Baris3-2] [FIG:shape=question|label=?]\nManakah gambar yang tepat untuk melengkapi kotak ketiga pada Baris 3?",
    "options": [
      "[FIG:shape=triangle|fill=striped|inner=plus|corner=NE] Segitiga, arsir, isi tanda tambah, titik di kanan-atas",
      "[FIG:shape=triangle|fill=striped|inner=cross|corner=NE] Segitiga, arsir, isi tanda silang, titik di kanan-atas",
      "[FIG:shape=square|fill=striped|inner=cross|corner=NE] Persegi, arsir, isi tanda silang, titik di kanan-atas",
      "[FIG:shape=square|fill=black|inner=cross|corner=NE] Persegi, hitam, isi tanda silang, titik di kanan-atas",
      "[FIG:shape=triangle|fill=black|inner=plus|corner=NE] Segitiga, hitam, isi tanda tambah, titik di kanan-atas"
    ],
    "answer": "E",
    "explanation": "Pada Baris 3 sudah terdapat bentuk Persegi dan Lingkaran (kurang Segitiga), warna putih dan arsir (kurang warna hitam), serta simbol isi tanda silang dan isi titik hitam (kurang isi tanda tambah) dengan titik sudut tetap di kanan-atas.",
    "tip": "Gunakan prinsip Sudoku/Latin Square pada baris terakhir: cari 1 bentuk, 1 warna arsiran, dan 1 simbol dalam yang belum muncul di baris tersebut."
  },
  {
    "id": "tiu-fig-093",
    "subPattern": "matriks-dan-komposisi",
    "difficulty": "mudah",
    "prompt": "Pada matriks figural 3×3 (Variasi #3), setiap baris wajib memuat tepat satu Segitiga, satu Persegi, dan satu Lingkaran; masing-masing dengan warna berbeda (putih, arsir, hitam) serta simbol dalam berbeda (titik, tambah, silang).\nContoh Baris 1:\n[FIG:shape=triangle|fill=black|inner=plus|corner=SE|label=B1-K1] [FIG:shape=square|fill=white|inner=cross|corner=SE|label=B1-K2] [FIG:shape=circle|fill=striped|inner=dot|corner=SE|label=B1-K3]\nBaris 3 saat ini:\n[FIG:shape=circle|fill=white|inner=dot|corner=SE|label=Baris3-1] [FIG:shape=triangle|fill=striped|inner=plus|corner=SE|label=Baris3-2] [FIG:shape=question|label=?]\nManakah gambar yang tepat untuk melengkapi kotak ketiga pada Baris 3?",
    "options": [
      "[FIG:shape=square|fill=black|inner=cross|corner=SE] Persegi, hitam, isi tanda silang, titik di kanan-bawah",
      "[FIG:shape=circle|fill=black|inner=dot|corner=SE] Lingkaran, hitam, isi titik hitam, titik di kanan-bawah",
      "[FIG:shape=circle|fill=striped|inner=cross|corner=SE] Lingkaran, arsir, isi tanda silang, titik di kanan-bawah",
      "[FIG:shape=triangle|fill=striped|inner=dot|corner=SE] Segitiga, arsir, isi titik hitam, titik di kanan-bawah",
      "[FIG:shape=square|fill=white|inner=plus|corner=SE] Persegi, putih, isi tanda tambah, titik di kanan-bawah"
    ],
    "answer": "A",
    "explanation": "Pada Baris 3 sudah terdapat bentuk Lingkaran dan Segitiga (kurang Persegi), warna putih dan arsir (kurang warna hitam), serta simbol isi titik hitam dan isi tanda tambah (kurang isi tanda silang) dengan titik sudut tetap di kanan-bawah.",
    "tip": "Gunakan prinsip Sudoku/Latin Square pada baris terakhir: cari 1 bentuk, 1 warna arsiran, dan 1 simbol dalam yang belum muncul di baris tersebut."
  },
  {
    "id": "tiu-fig-094",
    "subPattern": "matriks-dan-komposisi",
    "difficulty": "mudah",
    "prompt": "Pada matriks figural 3×3 (Variasi #4), setiap baris wajib memuat tepat satu Segitiga, satu Persegi, dan satu Lingkaran; masing-masing dengan warna berbeda (putih, arsir, hitam) serta simbol dalam berbeda (titik, tambah, silang).\nContoh Baris 1:\n[FIG:shape=square|fill=white|inner=cross|corner=SW|label=B1-K1] [FIG:shape=circle|fill=striped|inner=dot|corner=SW|label=B1-K2] [FIG:shape=triangle|fill=black|inner=plus|corner=SW|label=B1-K3]\nBaris 3 saat ini:\n[FIG:shape=triangle|fill=striped|inner=plus|corner=SW|label=Baris3-1] [FIG:shape=square|fill=black|inner=cross|corner=SW|label=Baris3-2] [FIG:shape=question|label=?]\nManakah gambar yang tepat untuk melengkapi kotak ketiga pada Baris 3?",
    "options": [
      "[FIG:shape=triangle|fill=white|inner=dot|corner=SW] Segitiga, putih, isi titik hitam, titik di kiri-bawah",
      "[FIG:shape=circle|fill=white|inner=dot|corner=SW] Lingkaran, putih, isi titik hitam, titik di kiri-bawah",
      "[FIG:shape=triangle|fill=black|inner=plus|corner=SW] Segitiga, hitam, isi tanda tambah, titik di kiri-bawah",
      "[FIG:shape=triangle|fill=white|inner=plus|corner=SW] Segitiga, putih, isi tanda tambah, titik di kiri-bawah",
      "[FIG:shape=circle|fill=black|inner=plus|corner=SW] Lingkaran, hitam, isi tanda tambah, titik di kiri-bawah"
    ],
    "answer": "B",
    "explanation": "Pada Baris 3 sudah terdapat bentuk Segitiga dan Persegi (kurang Lingkaran), warna arsir dan hitam (kurang warna putih), serta simbol isi tanda tambah dan isi tanda silang (kurang isi titik hitam) dengan titik sudut tetap di kiri-bawah.",
    "tip": "Gunakan prinsip Sudoku/Latin Square pada baris terakhir: cari 1 bentuk, 1 warna arsiran, dan 1 simbol dalam yang belum muncul di baris tersebut."
  },
  {
    "id": "tiu-fig-095",
    "subPattern": "matriks-dan-komposisi",
    "difficulty": "mudah",
    "prompt": "Pada matriks figural 3×3 (Variasi #5), setiap baris wajib memuat tepat satu Segitiga, satu Persegi, dan satu Lingkaran; masing-masing dengan warna berbeda (putih, arsir, hitam) serta simbol dalam berbeda (titik, tambah, silang).\nContoh Baris 1:\n[FIG:shape=circle|fill=white|inner=dot|corner=NW|label=B1-K1] [FIG:shape=triangle|fill=striped|inner=plus|corner=NW|label=B1-K2] [FIG:shape=square|fill=black|inner=cross|corner=NW|label=B1-K3]\nBaris 3 saat ini:\n[FIG:shape=square|fill=striped|inner=cross|corner=NW|label=Baris3-1] [FIG:shape=circle|fill=black|inner=dot|corner=NW|label=Baris3-2] [FIG:shape=question|label=?]\nManakah gambar yang tepat untuk melengkapi kotak ketiga pada Baris 3?",
    "options": [
      "[FIG:shape=triangle|fill=black|inner=plus|corner=NW] Segitiga, hitam, isi tanda tambah, titik di kiri-atas",
      "[FIG:shape=triangle|fill=black|inner=cross|corner=NW] Segitiga, hitam, isi tanda silang, titik di kiri-atas",
      "[FIG:shape=triangle|fill=white|inner=plus|corner=NW] Segitiga, putih, isi tanda tambah, titik di kiri-atas",
      "[FIG:shape=square|fill=black|inner=cross|corner=NW] Persegi, hitam, isi tanda silang, titik di kiri-atas",
      "[FIG:shape=square|fill=white|inner=cross|corner=NW] Persegi, putih, isi tanda silang, titik di kiri-atas"
    ],
    "answer": "C",
    "explanation": "Pada Baris 3 sudah terdapat bentuk Persegi dan Lingkaran (kurang Segitiga), warna arsir dan hitam (kurang warna putih), serta simbol isi tanda silang dan isi titik hitam (kurang isi tanda tambah) dengan titik sudut tetap di kiri-atas.",
    "tip": "Gunakan prinsip Sudoku/Latin Square pada baris terakhir: cari 1 bentuk, 1 warna arsiran, dan 1 simbol dalam yang belum muncul di baris tersebut."
  },
  {
    "id": "tiu-fig-096",
    "subPattern": "matriks-dan-komposisi",
    "difficulty": "mudah",
    "prompt": "Pada matriks figural 3×3 (Variasi #6), setiap baris wajib memuat tepat satu Segitiga, satu Persegi, dan satu Lingkaran; masing-masing dengan warna berbeda (putih, arsir, hitam) serta simbol dalam berbeda (titik, tambah, silang).\nContoh Baris 1:\n[FIG:shape=triangle|fill=white|inner=plus|corner=NE|label=B1-K1] [FIG:shape=square|fill=striped|inner=cross|corner=NE|label=B1-K2] [FIG:shape=circle|fill=black|inner=dot|corner=NE|label=B1-K3]\nBaris 3 saat ini:\n[FIG:shape=circle|fill=striped|inner=dot|corner=NE|label=Baris3-1] [FIG:shape=triangle|fill=black|inner=plus|corner=NE|label=Baris3-2] [FIG:shape=question|label=?]\nManakah gambar yang tepat untuk melengkapi kotak ketiga pada Baris 3?",
    "options": [
      "[FIG:shape=circle|fill=white|inner=dot|corner=NE] Lingkaran, putih, isi titik hitam, titik di kanan-atas",
      "[FIG:shape=circle|fill=black|inner=cross|corner=NE] Lingkaran, hitam, isi tanda silang, titik di kanan-atas",
      "[FIG:shape=triangle|fill=black|inner=dot|corner=NE] Segitiga, hitam, isi titik hitam, titik di kanan-atas",
      "[FIG:shape=square|fill=white|inner=cross|corner=NE] Persegi, putih, isi tanda silang, titik di kanan-atas",
      "[FIG:shape=square|fill=striped|inner=plus|corner=NE] Persegi, arsir, isi tanda tambah, titik di kanan-atas"
    ],
    "answer": "D",
    "explanation": "Pada Baris 3 sudah terdapat bentuk Lingkaran dan Segitiga (kurang Persegi), warna arsir dan hitam (kurang warna putih), serta simbol isi titik hitam dan isi tanda tambah (kurang isi tanda silang) dengan titik sudut tetap di kanan-atas.",
    "tip": "Gunakan prinsip Sudoku/Latin Square pada baris terakhir: cari 1 bentuk, 1 warna arsiran, dan 1 simbol dalam yang belum muncul di baris tersebut."
  },
  {
    "id": "tiu-fig-097",
    "subPattern": "matriks-dan-komposisi",
    "difficulty": "mudah",
    "prompt": "Pada matriks figural 3×3 (Variasi #7), setiap baris wajib memuat tepat satu Segitiga, satu Persegi, dan satu Lingkaran; masing-masing dengan warna berbeda (putih, arsir, hitam) serta simbol dalam berbeda (titik, tambah, silang).\nContoh Baris 1:\n[FIG:shape=square|fill=striped|inner=cross|corner=SE|label=B1-K1] [FIG:shape=circle|fill=black|inner=dot|corner=SE|label=B1-K2] [FIG:shape=triangle|fill=white|inner=plus|corner=SE|label=B1-K3]\nBaris 3 saat ini:\n[FIG:shape=triangle|fill=black|inner=plus|corner=SE|label=Baris3-1] [FIG:shape=square|fill=white|inner=cross|corner=SE|label=Baris3-2] [FIG:shape=question|label=?]\nManakah gambar yang tepat untuk melengkapi kotak ketiga pada Baris 3?",
    "options": [
      "[FIG:shape=triangle|fill=striped|inner=dot|corner=SE] Segitiga, arsir, isi titik hitam, titik di kanan-bawah",
      "[FIG:shape=triangle|fill=white|inner=plus|corner=SE] Segitiga, putih, isi tanda tambah, titik di kanan-bawah",
      "[FIG:shape=triangle|fill=striped|inner=plus|corner=SE] Segitiga, arsir, isi tanda tambah, titik di kanan-bawah",
      "[FIG:shape=circle|fill=white|inner=plus|corner=SE] Lingkaran, putih, isi tanda tambah, titik di kanan-bawah",
      "[FIG:shape=circle|fill=striped|inner=dot|corner=SE] Lingkaran, arsir, isi titik hitam, titik di kanan-bawah"
    ],
    "answer": "E",
    "explanation": "Pada Baris 3 sudah terdapat bentuk Segitiga dan Persegi (kurang Lingkaran), warna hitam dan putih (kurang warna arsir), serta simbol isi tanda tambah dan isi tanda silang (kurang isi titik hitam) dengan titik sudut tetap di kanan-bawah.",
    "tip": "Gunakan prinsip Sudoku/Latin Square pada baris terakhir: cari 1 bentuk, 1 warna arsiran, dan 1 simbol dalam yang belum muncul di baris tersebut."
  },
  {
    "id": "tiu-fig-098",
    "subPattern": "matriks-dan-komposisi",
    "difficulty": "mudah",
    "prompt": "Pada matriks figural 3×3 (Variasi #8), setiap baris wajib memuat tepat satu Segitiga, satu Persegi, dan satu Lingkaran; masing-masing dengan warna berbeda (putih, arsir, hitam) serta simbol dalam berbeda (titik, tambah, silang).\nContoh Baris 1:\n[FIG:shape=circle|fill=striped|inner=dot|corner=SW|label=B1-K1] [FIG:shape=triangle|fill=black|inner=plus|corner=SW|label=B1-K2] [FIG:shape=square|fill=white|inner=cross|corner=SW|label=B1-K3]\nBaris 3 saat ini:\n[FIG:shape=square|fill=black|inner=cross|corner=SW|label=Baris3-1] [FIG:shape=circle|fill=white|inner=dot|corner=SW|label=Baris3-2] [FIG:shape=question|label=?]\nManakah gambar yang tepat untuk melengkapi kotak ketiga pada Baris 3?",
    "options": [
      "[FIG:shape=triangle|fill=striped|inner=plus|corner=SW] Segitiga, arsir, isi tanda tambah, titik di kiri-bawah",
      "[FIG:shape=triangle|fill=white|inner=plus|corner=SW] Segitiga, putih, isi tanda tambah, titik di kiri-bawah",
      "[FIG:shape=triangle|fill=white|inner=cross|corner=SW] Segitiga, putih, isi tanda silang, titik di kiri-bawah",
      "[FIG:shape=square|fill=white|inner=cross|corner=SW] Persegi, putih, isi tanda silang, titik di kiri-bawah",
      "[FIG:shape=square|fill=striped|inner=cross|corner=SW] Persegi, arsir, isi tanda silang, titik di kiri-bawah"
    ],
    "answer": "A",
    "explanation": "Pada Baris 3 sudah terdapat bentuk Persegi dan Lingkaran (kurang Segitiga), warna hitam dan putih (kurang warna arsir), serta simbol isi tanda silang dan isi titik hitam (kurang isi tanda tambah) dengan titik sudut tetap di kiri-bawah.",
    "tip": "Gunakan prinsip Sudoku/Latin Square pada baris terakhir: cari 1 bentuk, 1 warna arsiran, dan 1 simbol dalam yang belum muncul di baris tersebut."
  },
  {
    "id": "tiu-fig-099",
    "subPattern": "matriks-dan-komposisi",
    "difficulty": "mudah",
    "prompt": "Pada matriks figural 3×3 (Variasi #9), setiap baris wajib memuat tepat satu Segitiga, satu Persegi, dan satu Lingkaran; masing-masing dengan warna berbeda (putih, arsir, hitam) serta simbol dalam berbeda (titik, tambah, silang).\nContoh Baris 1:\n[FIG:shape=triangle|fill=striped|inner=plus|corner=NW|label=B1-K1] [FIG:shape=square|fill=black|inner=cross|corner=NW|label=B1-K2] [FIG:shape=circle|fill=white|inner=dot|corner=NW|label=B1-K3]\nBaris 3 saat ini:\n[FIG:shape=circle|fill=black|inner=dot|corner=NW|label=Baris3-1] [FIG:shape=triangle|fill=white|inner=plus|corner=NW|label=Baris3-2] [FIG:shape=question|label=?]\nManakah gambar yang tepat untuk melengkapi kotak ketiga pada Baris 3?",
    "options": [
      "[FIG:shape=circle|fill=striped|inner=dot|corner=NW] Lingkaran, arsir, isi titik hitam, titik di kiri-atas",
      "[FIG:shape=square|fill=striped|inner=cross|corner=NW] Persegi, arsir, isi tanda silang, titik di kiri-atas",
      "[FIG:shape=circle|fill=white|inner=cross|corner=NW] Lingkaran, putih, isi tanda silang, titik di kiri-atas",
      "[FIG:shape=triangle|fill=white|inner=dot|corner=NW] Segitiga, putih, isi titik hitam, titik di kiri-atas",
      "[FIG:shape=square|fill=black|inner=plus|corner=NW] Persegi, hitam, isi tanda tambah, titik di kiri-atas"
    ],
    "answer": "B",
    "explanation": "Pada Baris 3 sudah terdapat bentuk Lingkaran dan Segitiga (kurang Persegi), warna hitam dan putih (kurang warna arsir), serta simbol isi titik hitam dan isi tanda tambah (kurang isi tanda silang) dengan titik sudut tetap di kiri-atas.",
    "tip": "Gunakan prinsip Sudoku/Latin Square pada baris terakhir: cari 1 bentuk, 1 warna arsiran, dan 1 simbol dalam yang belum muncul di baris tersebut."
  },
  {
    "id": "tiu-fig-100",
    "subPattern": "matriks-dan-komposisi",
    "difficulty": "mudah",
    "prompt": "Pada matriks figural 3×3 (Variasi #10), setiap baris wajib memuat tepat satu Segitiga, satu Persegi, dan satu Lingkaran; masing-masing dengan warna berbeda (putih, arsir, hitam) serta simbol dalam berbeda (titik, tambah, silang).\nContoh Baris 1:\n[FIG:shape=square|fill=black|inner=cross|corner=NE|label=B1-K1] [FIG:shape=circle|fill=white|inner=dot|corner=NE|label=B1-K2] [FIG:shape=triangle|fill=striped|inner=plus|corner=NE|label=B1-K3]\nBaris 3 saat ini:\n[FIG:shape=triangle|fill=white|inner=plus|corner=NE|label=Baris3-1] [FIG:shape=square|fill=striped|inner=cross|corner=NE|label=Baris3-2] [FIG:shape=question|label=?]\nManakah gambar yang tepat untuk melengkapi kotak ketiga pada Baris 3?",
    "options": [
      "[FIG:shape=triangle|fill=black|inner=dot|corner=NE] Segitiga, hitam, isi titik hitam, titik di kanan-atas",
      "[FIG:shape=triangle|fill=striped|inner=plus|corner=NE] Segitiga, arsir, isi tanda tambah, titik di kanan-atas",
      "[FIG:shape=circle|fill=black|inner=dot|corner=NE] Lingkaran, hitam, isi titik hitam, titik di kanan-atas",
      "[FIG:shape=triangle|fill=black|inner=plus|corner=NE] Segitiga, hitam, isi tanda tambah, titik di kanan-atas",
      "[FIG:shape=circle|fill=striped|inner=plus|corner=NE] Lingkaran, arsir, isi tanda tambah, titik di kanan-atas"
    ],
    "answer": "C",
    "explanation": "Pada Baris 3 sudah terdapat bentuk Segitiga dan Persegi (kurang Lingkaran), warna putih dan arsir (kurang warna hitam), serta simbol isi tanda tambah dan isi tanda silang (kurang isi titik hitam) dengan titik sudut tetap di kanan-atas.",
    "tip": "Gunakan prinsip Sudoku/Latin Square pada baris terakhir: cari 1 bentuk, 1 warna arsiran, dan 1 simbol dalam yang belum muncul di baris tersebut."
  }
];
