import type { QuestionDraft } from "@/modules/question-bank/domain/question";

export const figuralBatch3Drafts: readonly QuestionDraft[] = [
  {
    "id": "tiu-fig-101",
    "subPattern": "matriks-dan-komposisi",
    "difficulty": "sedang",
    "prompt": "Pada matriks figural 3×3 (Variasi #11), setiap baris wajib memuat tepat satu Segitiga, satu Persegi, dan satu Lingkaran; masing-masing dengan warna berbeda (putih, arsir, hitam) serta simbol dalam berbeda (titik, tambah, silang).\nContoh Baris 1:\n[FIG:shape=circle|fill=black|inner=dot|corner=SE|label=B1-K1] [FIG:shape=triangle|fill=white|inner=plus|corner=SE|label=B1-K2] [FIG:shape=square|fill=striped|inner=cross|corner=SE|label=B1-K3]\nBaris 3 saat ini:\n[FIG:shape=square|fill=white|inner=cross|corner=SE|label=Baris3-1] [FIG:shape=circle|fill=striped|inner=dot|corner=SE|label=Baris3-2] [FIG:shape=question|label=?]\nManakah gambar yang tepat untuk melengkapi kotak ketiga pada Baris 3?",
    "options": [
      "[FIG:shape=triangle|fill=striped|inner=plus|corner=SE] Segitiga, arsir, isi tanda tambah, titik di kanan-bawah",
      "[FIG:shape=triangle|fill=striped|inner=cross|corner=SE] Segitiga, arsir, isi tanda silang, titik di kanan-bawah",
      "[FIG:shape=square|fill=striped|inner=cross|corner=SE] Persegi, arsir, isi tanda silang, titik di kanan-bawah",
      "[FIG:shape=triangle|fill=black|inner=plus|corner=SE] Segitiga, hitam, isi tanda tambah, titik di kanan-bawah",
      "[FIG:shape=square|fill=black|inner=cross|corner=SE] Persegi, hitam, isi tanda silang, titik di kanan-bawah"
    ],
    "answer": "D",
    "explanation": "Pada Baris 3 sudah terdapat bentuk Persegi dan Lingkaran (kurang Segitiga), warna putih dan arsir (kurang warna hitam), serta simbol isi tanda silang dan isi titik hitam (kurang isi tanda tambah) dengan titik sudut tetap di kanan-bawah.",
    "tip": "Gunakan prinsip Sudoku/Latin Square pada baris terakhir: cari 1 bentuk, 1 warna arsiran, dan 1 simbol dalam yang belum muncul di baris tersebut."
  },
  {
    "id": "tiu-fig-102",
    "subPattern": "matriks-dan-komposisi",
    "difficulty": "sedang",
    "prompt": "Pada matriks figural 3×3 (Variasi #12), setiap baris wajib memuat tepat satu Segitiga, satu Persegi, dan satu Lingkaran; masing-masing dengan warna berbeda (putih, arsir, hitam) serta simbol dalam berbeda (titik, tambah, silang).\nContoh Baris 1:\n[FIG:shape=triangle|fill=black|inner=plus|corner=SW|label=B1-K1] [FIG:shape=square|fill=white|inner=cross|corner=SW|label=B1-K2] [FIG:shape=circle|fill=striped|inner=dot|corner=SW|label=B1-K3]\nBaris 3 saat ini:\n[FIG:shape=circle|fill=white|inner=dot|corner=SW|label=Baris3-1] [FIG:shape=triangle|fill=striped|inner=plus|corner=SW|label=Baris3-2] [FIG:shape=question|label=?]\nManakah gambar yang tepat untuk melengkapi kotak ketiga pada Baris 3?",
    "options": [
      "[FIG:shape=circle|fill=black|inner=dot|corner=SW] Lingkaran, hitam, isi titik hitam, titik di kiri-bawah",
      "[FIG:shape=circle|fill=striped|inner=cross|corner=SW] Lingkaran, arsir, isi tanda silang, titik di kiri-bawah",
      "[FIG:shape=triangle|fill=striped|inner=dot|corner=SW] Segitiga, arsir, isi titik hitam, titik di kiri-bawah",
      "[FIG:shape=square|fill=white|inner=plus|corner=SW] Persegi, putih, isi tanda tambah, titik di kiri-bawah",
      "[FIG:shape=square|fill=black|inner=cross|corner=SW] Persegi, hitam, isi tanda silang, titik di kiri-bawah"
    ],
    "answer": "E",
    "explanation": "Pada Baris 3 sudah terdapat bentuk Lingkaran dan Segitiga (kurang Persegi), warna putih dan arsir (kurang warna hitam), serta simbol isi titik hitam dan isi tanda tambah (kurang isi tanda silang) dengan titik sudut tetap di kiri-bawah.",
    "tip": "Gunakan prinsip Sudoku/Latin Square pada baris terakhir: cari 1 bentuk, 1 warna arsiran, dan 1 simbol dalam yang belum muncul di baris tersebut."
  },
  {
    "id": "tiu-fig-103",
    "subPattern": "matriks-dan-komposisi",
    "difficulty": "sedang",
    "prompt": "Pada matriks figural 3×3 (Variasi #13), setiap baris wajib memuat tepat satu Segitiga, satu Persegi, dan satu Lingkaran; masing-masing dengan warna berbeda (putih, arsir, hitam) serta simbol dalam berbeda (titik, tambah, silang).\nContoh Baris 1:\n[FIG:shape=square|fill=white|inner=cross|corner=NW|label=B1-K1] [FIG:shape=circle|fill=striped|inner=dot|corner=NW|label=B1-K2] [FIG:shape=triangle|fill=black|inner=plus|corner=NW|label=B1-K3]\nBaris 3 saat ini:\n[FIG:shape=triangle|fill=striped|inner=plus|corner=NW|label=Baris3-1] [FIG:shape=square|fill=black|inner=cross|corner=NW|label=Baris3-2] [FIG:shape=question|label=?]\nManakah gambar yang tepat untuk melengkapi kotak ketiga pada Baris 3?",
    "options": [
      "[FIG:shape=circle|fill=white|inner=dot|corner=NW] Lingkaran, putih, isi titik hitam, titik di kiri-atas",
      "[FIG:shape=triangle|fill=white|inner=dot|corner=NW] Segitiga, putih, isi titik hitam, titik di kiri-atas",
      "[FIG:shape=triangle|fill=black|inner=plus|corner=NW] Segitiga, hitam, isi tanda tambah, titik di kiri-atas",
      "[FIG:shape=triangle|fill=white|inner=plus|corner=NW] Segitiga, putih, isi tanda tambah, titik di kiri-atas",
      "[FIG:shape=circle|fill=black|inner=plus|corner=NW] Lingkaran, hitam, isi tanda tambah, titik di kiri-atas"
    ],
    "answer": "A",
    "explanation": "Pada Baris 3 sudah terdapat bentuk Segitiga dan Persegi (kurang Lingkaran), warna arsir dan hitam (kurang warna putih), serta simbol isi tanda tambah dan isi tanda silang (kurang isi titik hitam) dengan titik sudut tetap di kiri-atas.",
    "tip": "Gunakan prinsip Sudoku/Latin Square pada baris terakhir: cari 1 bentuk, 1 warna arsiran, dan 1 simbol dalam yang belum muncul di baris tersebut."
  },
  {
    "id": "tiu-fig-104",
    "subPattern": "matriks-dan-komposisi",
    "difficulty": "sedang",
    "prompt": "Pada matriks figural 3×3 (Variasi #14), setiap baris wajib memuat tepat satu Segitiga, satu Persegi, dan satu Lingkaran; masing-masing dengan warna berbeda (putih, arsir, hitam) serta simbol dalam berbeda (titik, tambah, silang).\nContoh Baris 1:\n[FIG:shape=circle|fill=white|inner=dot|corner=NE|label=B1-K1] [FIG:shape=triangle|fill=striped|inner=plus|corner=NE|label=B1-K2] [FIG:shape=square|fill=black|inner=cross|corner=NE|label=B1-K3]\nBaris 3 saat ini:\n[FIG:shape=square|fill=striped|inner=cross|corner=NE|label=Baris3-1] [FIG:shape=circle|fill=black|inner=dot|corner=NE|label=Baris3-2] [FIG:shape=question|label=?]\nManakah gambar yang tepat untuk melengkapi kotak ketiga pada Baris 3?",
    "options": [
      "[FIG:shape=triangle|fill=black|inner=plus|corner=NE] Segitiga, hitam, isi tanda tambah, titik di kanan-atas",
      "[FIG:shape=triangle|fill=white|inner=plus|corner=NE] Segitiga, putih, isi tanda tambah, titik di kanan-atas",
      "[FIG:shape=triangle|fill=black|inner=cross|corner=NE] Segitiga, hitam, isi tanda silang, titik di kanan-atas",
      "[FIG:shape=square|fill=black|inner=cross|corner=NE] Persegi, hitam, isi tanda silang, titik di kanan-atas",
      "[FIG:shape=square|fill=white|inner=cross|corner=NE] Persegi, putih, isi tanda silang, titik di kanan-atas"
    ],
    "answer": "B",
    "explanation": "Pada Baris 3 sudah terdapat bentuk Persegi dan Lingkaran (kurang Segitiga), warna arsir dan hitam (kurang warna putih), serta simbol isi tanda silang dan isi titik hitam (kurang isi tanda tambah) dengan titik sudut tetap di kanan-atas.",
    "tip": "Gunakan prinsip Sudoku/Latin Square pada baris terakhir: cari 1 bentuk, 1 warna arsiran, dan 1 simbol dalam yang belum muncul di baris tersebut."
  },
  {
    "id": "tiu-fig-105",
    "subPattern": "matriks-dan-komposisi",
    "difficulty": "sedang",
    "prompt": "Pada matriks figural 3×3 (Variasi #15), setiap baris wajib memuat tepat satu Segitiga, satu Persegi, dan satu Lingkaran; masing-masing dengan warna berbeda (putih, arsir, hitam) serta simbol dalam berbeda (titik, tambah, silang).\nContoh Baris 1:\n[FIG:shape=triangle|fill=white|inner=plus|corner=SE|label=B1-K1] [FIG:shape=square|fill=striped|inner=cross|corner=SE|label=B1-K2] [FIG:shape=circle|fill=black|inner=dot|corner=SE|label=B1-K3]\nBaris 3 saat ini:\n[FIG:shape=circle|fill=striped|inner=dot|corner=SE|label=Baris3-1] [FIG:shape=triangle|fill=black|inner=plus|corner=SE|label=Baris3-2] [FIG:shape=question|label=?]\nManakah gambar yang tepat untuk melengkapi kotak ketiga pada Baris 3?",
    "options": [
      "[FIG:shape=circle|fill=white|inner=dot|corner=SE] Lingkaran, putih, isi titik hitam, titik di kanan-bawah",
      "[FIG:shape=circle|fill=black|inner=cross|corner=SE] Lingkaran, hitam, isi tanda silang, titik di kanan-bawah",
      "[FIG:shape=square|fill=white|inner=cross|corner=SE] Persegi, putih, isi tanda silang, titik di kanan-bawah",
      "[FIG:shape=triangle|fill=black|inner=dot|corner=SE] Segitiga, hitam, isi titik hitam, titik di kanan-bawah",
      "[FIG:shape=square|fill=striped|inner=plus|corner=SE] Persegi, arsir, isi tanda tambah, titik di kanan-bawah"
    ],
    "answer": "C",
    "explanation": "Pada Baris 3 sudah terdapat bentuk Lingkaran dan Segitiga (kurang Persegi), warna arsir dan hitam (kurang warna putih), serta simbol isi titik hitam dan isi tanda tambah (kurang isi tanda silang) dengan titik sudut tetap di kanan-bawah.",
    "tip": "Gunakan prinsip Sudoku/Latin Square pada baris terakhir: cari 1 bentuk, 1 warna arsiran, dan 1 simbol dalam yang belum muncul di baris tersebut."
  },
  {
    "id": "tiu-fig-106",
    "subPattern": "matriks-dan-komposisi",
    "difficulty": "sedang",
    "prompt": "Pada matriks figural 3×3 (Variasi #16), setiap baris wajib memuat tepat satu Segitiga, satu Persegi, dan satu Lingkaran; masing-masing dengan warna berbeda (putih, arsir, hitam) serta simbol dalam berbeda (titik, tambah, silang).\nContoh Baris 1:\n[FIG:shape=square|fill=striped|inner=cross|corner=SW|label=B1-K1] [FIG:shape=circle|fill=black|inner=dot|corner=SW|label=B1-K2] [FIG:shape=triangle|fill=white|inner=plus|corner=SW|label=B1-K3]\nBaris 3 saat ini:\n[FIG:shape=triangle|fill=black|inner=plus|corner=SW|label=Baris3-1] [FIG:shape=square|fill=white|inner=cross|corner=SW|label=Baris3-2] [FIG:shape=question|label=?]\nManakah gambar yang tepat untuk melengkapi kotak ketiga pada Baris 3?",
    "options": [
      "[FIG:shape=triangle|fill=striped|inner=dot|corner=SW] Segitiga, arsir, isi titik hitam, titik di kiri-bawah",
      "[FIG:shape=triangle|fill=white|inner=plus|corner=SW] Segitiga, putih, isi tanda tambah, titik di kiri-bawah",
      "[FIG:shape=triangle|fill=striped|inner=plus|corner=SW] Segitiga, arsir, isi tanda tambah, titik di kiri-bawah",
      "[FIG:shape=circle|fill=striped|inner=dot|corner=SW] Lingkaran, arsir, isi titik hitam, titik di kiri-bawah",
      "[FIG:shape=circle|fill=white|inner=plus|corner=SW] Lingkaran, putih, isi tanda tambah, titik di kiri-bawah"
    ],
    "answer": "D",
    "explanation": "Pada Baris 3 sudah terdapat bentuk Segitiga dan Persegi (kurang Lingkaran), warna hitam dan putih (kurang warna arsir), serta simbol isi tanda tambah dan isi tanda silang (kurang isi titik hitam) dengan titik sudut tetap di kiri-bawah.",
    "tip": "Gunakan prinsip Sudoku/Latin Square pada baris terakhir: cari 1 bentuk, 1 warna arsiran, dan 1 simbol dalam yang belum muncul di baris tersebut."
  },
  {
    "id": "tiu-fig-107",
    "subPattern": "matriks-dan-komposisi",
    "difficulty": "sedang",
    "prompt": "Pada matriks figural 3×3 (Variasi #17), setiap baris wajib memuat tepat satu Segitiga, satu Persegi, dan satu Lingkaran; masing-masing dengan warna berbeda (putih, arsir, hitam) serta simbol dalam berbeda (titik, tambah, silang).\nContoh Baris 1:\n[FIG:shape=circle|fill=striped|inner=dot|corner=NW|label=B1-K1] [FIG:shape=triangle|fill=black|inner=plus|corner=NW|label=B1-K2] [FIG:shape=square|fill=white|inner=cross|corner=NW|label=B1-K3]\nBaris 3 saat ini:\n[FIG:shape=square|fill=black|inner=cross|corner=NW|label=Baris3-1] [FIG:shape=circle|fill=white|inner=dot|corner=NW|label=Baris3-2] [FIG:shape=question|label=?]\nManakah gambar yang tepat untuk melengkapi kotak ketiga pada Baris 3?",
    "options": [
      "[FIG:shape=triangle|fill=white|inner=plus|corner=NW] Segitiga, putih, isi tanda tambah, titik di kiri-atas",
      "[FIG:shape=triangle|fill=white|inner=cross|corner=NW] Segitiga, putih, isi tanda silang, titik di kiri-atas",
      "[FIG:shape=square|fill=white|inner=cross|corner=NW] Persegi, putih, isi tanda silang, titik di kiri-atas",
      "[FIG:shape=square|fill=striped|inner=cross|corner=NW] Persegi, arsir, isi tanda silang, titik di kiri-atas",
      "[FIG:shape=triangle|fill=striped|inner=plus|corner=NW] Segitiga, arsir, isi tanda tambah, titik di kiri-atas"
    ],
    "answer": "E",
    "explanation": "Pada Baris 3 sudah terdapat bentuk Persegi dan Lingkaran (kurang Segitiga), warna hitam dan putih (kurang warna arsir), serta simbol isi tanda silang dan isi titik hitam (kurang isi tanda tambah) dengan titik sudut tetap di kiri-atas.",
    "tip": "Gunakan prinsip Sudoku/Latin Square pada baris terakhir: cari 1 bentuk, 1 warna arsiran, dan 1 simbol dalam yang belum muncul di baris tersebut."
  },
  {
    "id": "tiu-fig-108",
    "subPattern": "matriks-dan-komposisi",
    "difficulty": "sedang",
    "prompt": "Pada matriks figural 3×3 (Variasi #18), setiap baris wajib memuat tepat satu Segitiga, satu Persegi, dan satu Lingkaran; masing-masing dengan warna berbeda (putih, arsir, hitam) serta simbol dalam berbeda (titik, tambah, silang).\nContoh Baris 1:\n[FIG:shape=triangle|fill=striped|inner=plus|corner=NE|label=B1-K1] [FIG:shape=square|fill=black|inner=cross|corner=NE|label=B1-K2] [FIG:shape=circle|fill=white|inner=dot|corner=NE|label=B1-K3]\nBaris 3 saat ini:\n[FIG:shape=circle|fill=black|inner=dot|corner=NE|label=Baris3-1] [FIG:shape=triangle|fill=white|inner=plus|corner=NE|label=Baris3-2] [FIG:shape=question|label=?]\nManakah gambar yang tepat untuk melengkapi kotak ketiga pada Baris 3?",
    "options": [
      "[FIG:shape=square|fill=striped|inner=cross|corner=NE] Persegi, arsir, isi tanda silang, titik di kanan-atas",
      "[FIG:shape=circle|fill=striped|inner=dot|corner=NE] Lingkaran, arsir, isi titik hitam, titik di kanan-atas",
      "[FIG:shape=circle|fill=white|inner=cross|corner=NE] Lingkaran, putih, isi tanda silang, titik di kanan-atas",
      "[FIG:shape=triangle|fill=white|inner=dot|corner=NE] Segitiga, putih, isi titik hitam, titik di kanan-atas",
      "[FIG:shape=square|fill=black|inner=plus|corner=NE] Persegi, hitam, isi tanda tambah, titik di kanan-atas"
    ],
    "answer": "A",
    "explanation": "Pada Baris 3 sudah terdapat bentuk Lingkaran dan Segitiga (kurang Persegi), warna hitam dan putih (kurang warna arsir), serta simbol isi titik hitam dan isi tanda tambah (kurang isi tanda silang) dengan titik sudut tetap di kanan-atas.",
    "tip": "Gunakan prinsip Sudoku/Latin Square pada baris terakhir: cari 1 bentuk, 1 warna arsiran, dan 1 simbol dalam yang belum muncul di baris tersebut."
  },
  {
    "id": "tiu-fig-109",
    "subPattern": "matriks-dan-komposisi",
    "difficulty": "sedang",
    "prompt": "Pada matriks figural 3×3 (Variasi #19), setiap baris wajib memuat tepat satu Segitiga, satu Persegi, dan satu Lingkaran; masing-masing dengan warna berbeda (putih, arsir, hitam) serta simbol dalam berbeda (titik, tambah, silang).\nContoh Baris 1:\n[FIG:shape=square|fill=black|inner=cross|corner=SE|label=B1-K1] [FIG:shape=circle|fill=white|inner=dot|corner=SE|label=B1-K2] [FIG:shape=triangle|fill=striped|inner=plus|corner=SE|label=B1-K3]\nBaris 3 saat ini:\n[FIG:shape=triangle|fill=white|inner=plus|corner=SE|label=Baris3-1] [FIG:shape=square|fill=striped|inner=cross|corner=SE|label=Baris3-2] [FIG:shape=question|label=?]\nManakah gambar yang tepat untuk melengkapi kotak ketiga pada Baris 3?",
    "options": [
      "[FIG:shape=triangle|fill=black|inner=dot|corner=SE] Segitiga, hitam, isi titik hitam, titik di kanan-bawah",
      "[FIG:shape=circle|fill=black|inner=dot|corner=SE] Lingkaran, hitam, isi titik hitam, titik di kanan-bawah",
      "[FIG:shape=triangle|fill=striped|inner=plus|corner=SE] Segitiga, arsir, isi tanda tambah, titik di kanan-bawah",
      "[FIG:shape=triangle|fill=black|inner=plus|corner=SE] Segitiga, hitam, isi tanda tambah, titik di kanan-bawah",
      "[FIG:shape=circle|fill=striped|inner=plus|corner=SE] Lingkaran, arsir, isi tanda tambah, titik di kanan-bawah"
    ],
    "answer": "B",
    "explanation": "Pada Baris 3 sudah terdapat bentuk Segitiga dan Persegi (kurang Lingkaran), warna putih dan arsir (kurang warna hitam), serta simbol isi tanda tambah dan isi tanda silang (kurang isi titik hitam) dengan titik sudut tetap di kanan-bawah.",
    "tip": "Gunakan prinsip Sudoku/Latin Square pada baris terakhir: cari 1 bentuk, 1 warna arsiran, dan 1 simbol dalam yang belum muncul di baris tersebut."
  },
  {
    "id": "tiu-fig-110",
    "subPattern": "matriks-dan-komposisi",
    "difficulty": "sedang",
    "prompt": "Pada matriks figural 3×3 (Variasi #20), setiap baris wajib memuat tepat satu Segitiga, satu Persegi, dan satu Lingkaran; masing-masing dengan warna berbeda (putih, arsir, hitam) serta simbol dalam berbeda (titik, tambah, silang).\nContoh Baris 1:\n[FIG:shape=circle|fill=black|inner=dot|corner=SW|label=B1-K1] [FIG:shape=triangle|fill=white|inner=plus|corner=SW|label=B1-K2] [FIG:shape=square|fill=striped|inner=cross|corner=SW|label=B1-K3]\nBaris 3 saat ini:\n[FIG:shape=square|fill=white|inner=cross|corner=SW|label=Baris3-1] [FIG:shape=circle|fill=striped|inner=dot|corner=SW|label=Baris3-2] [FIG:shape=question|label=?]\nManakah gambar yang tepat untuk melengkapi kotak ketiga pada Baris 3?",
    "options": [
      "[FIG:shape=triangle|fill=striped|inner=plus|corner=SW] Segitiga, arsir, isi tanda tambah, titik di kiri-bawah",
      "[FIG:shape=triangle|fill=striped|inner=cross|corner=SW] Segitiga, arsir, isi tanda silang, titik di kiri-bawah",
      "[FIG:shape=triangle|fill=black|inner=plus|corner=SW] Segitiga, hitam, isi tanda tambah, titik di kiri-bawah",
      "[FIG:shape=square|fill=striped|inner=cross|corner=SW] Persegi, arsir, isi tanda silang, titik di kiri-bawah",
      "[FIG:shape=square|fill=black|inner=cross|corner=SW] Persegi, hitam, isi tanda silang, titik di kiri-bawah"
    ],
    "answer": "C",
    "explanation": "Pada Baris 3 sudah terdapat bentuk Persegi dan Lingkaran (kurang Segitiga), warna putih dan arsir (kurang warna hitam), serta simbol isi tanda silang dan isi titik hitam (kurang isi tanda tambah) dengan titik sudut tetap di kiri-bawah.",
    "tip": "Gunakan prinsip Sudoku/Latin Square pada baris terakhir: cari 1 bentuk, 1 warna arsiran, dan 1 simbol dalam yang belum muncul di baris tersebut."
  },
  {
    "id": "tiu-fig-111",
    "subPattern": "matriks-dan-komposisi",
    "difficulty": "sulit",
    "prompt": "Pada matriks figural 3×3 (Variasi #21), setiap baris wajib memuat tepat satu Segitiga, satu Persegi, dan satu Lingkaran; masing-masing dengan warna berbeda (putih, arsir, hitam) serta simbol dalam berbeda (titik, tambah, silang).\nContoh Baris 1:\n[FIG:shape=triangle|fill=black|inner=plus|corner=NW|label=B1-K1] [FIG:shape=square|fill=white|inner=cross|corner=NW|label=B1-K2] [FIG:shape=circle|fill=striped|inner=dot|corner=NW|label=B1-K3]\nBaris 3 saat ini:\n[FIG:shape=circle|fill=white|inner=dot|corner=NW|label=Baris3-1] [FIG:shape=triangle|fill=striped|inner=plus|corner=NW|label=Baris3-2] [FIG:shape=question|label=?]\nManakah gambar yang tepat untuk melengkapi kotak ketiga pada Baris 3?",
    "options": [
      "[FIG:shape=circle|fill=black|inner=dot|corner=NW] Lingkaran, hitam, isi titik hitam, titik di kiri-atas",
      "[FIG:shape=circle|fill=striped|inner=cross|corner=NW] Lingkaran, arsir, isi tanda silang, titik di kiri-atas",
      "[FIG:shape=triangle|fill=striped|inner=dot|corner=NW] Segitiga, arsir, isi titik hitam, titik di kiri-atas",
      "[FIG:shape=square|fill=black|inner=cross|corner=NW] Persegi, hitam, isi tanda silang, titik di kiri-atas",
      "[FIG:shape=square|fill=white|inner=plus|corner=NW] Persegi, putih, isi tanda tambah, titik di kiri-atas"
    ],
    "answer": "D",
    "explanation": "Pada Baris 3 sudah terdapat bentuk Lingkaran dan Segitiga (kurang Persegi), warna putih dan arsir (kurang warna hitam), serta simbol isi titik hitam dan isi tanda tambah (kurang isi tanda silang) dengan titik sudut tetap di kiri-atas.",
    "tip": "Gunakan prinsip Sudoku/Latin Square pada baris terakhir: cari 1 bentuk, 1 warna arsiran, dan 1 simbol dalam yang belum muncul di baris tersebut."
  },
  {
    "id": "tiu-fig-112",
    "subPattern": "matriks-dan-komposisi",
    "difficulty": "sulit",
    "prompt": "Pada matriks figural 3×3 (Variasi #22), setiap baris wajib memuat tepat satu Segitiga, satu Persegi, dan satu Lingkaran; masing-masing dengan warna berbeda (putih, arsir, hitam) serta simbol dalam berbeda (titik, tambah, silang).\nContoh Baris 1:\n[FIG:shape=square|fill=white|inner=cross|corner=NE|label=B1-K1] [FIG:shape=circle|fill=striped|inner=dot|corner=NE|label=B1-K2] [FIG:shape=triangle|fill=black|inner=plus|corner=NE|label=B1-K3]\nBaris 3 saat ini:\n[FIG:shape=triangle|fill=striped|inner=plus|corner=NE|label=Baris3-1] [FIG:shape=square|fill=black|inner=cross|corner=NE|label=Baris3-2] [FIG:shape=question|label=?]\nManakah gambar yang tepat untuk melengkapi kotak ketiga pada Baris 3?",
    "options": [
      "[FIG:shape=triangle|fill=white|inner=dot|corner=NE] Segitiga, putih, isi titik hitam, titik di kanan-atas",
      "[FIG:shape=triangle|fill=black|inner=plus|corner=NE] Segitiga, hitam, isi tanda tambah, titik di kanan-atas",
      "[FIG:shape=triangle|fill=white|inner=plus|corner=NE] Segitiga, putih, isi tanda tambah, titik di kanan-atas",
      "[FIG:shape=circle|fill=black|inner=plus|corner=NE] Lingkaran, hitam, isi tanda tambah, titik di kanan-atas",
      "[FIG:shape=circle|fill=white|inner=dot|corner=NE] Lingkaran, putih, isi titik hitam, titik di kanan-atas"
    ],
    "answer": "E",
    "explanation": "Pada Baris 3 sudah terdapat bentuk Segitiga dan Persegi (kurang Lingkaran), warna arsir dan hitam (kurang warna putih), serta simbol isi tanda tambah dan isi tanda silang (kurang isi titik hitam) dengan titik sudut tetap di kanan-atas.",
    "tip": "Gunakan prinsip Sudoku/Latin Square pada baris terakhir: cari 1 bentuk, 1 warna arsiran, dan 1 simbol dalam yang belum muncul di baris tersebut."
  },
  {
    "id": "tiu-fig-113",
    "subPattern": "matriks-dan-komposisi",
    "difficulty": "sulit",
    "prompt": "Pada matriks figural 3×3 (Variasi #23), setiap baris wajib memuat tepat satu Segitiga, satu Persegi, dan satu Lingkaran; masing-masing dengan warna berbeda (putih, arsir, hitam) serta simbol dalam berbeda (titik, tambah, silang).\nContoh Baris 1:\n[FIG:shape=circle|fill=white|inner=dot|corner=SE|label=B1-K1] [FIG:shape=triangle|fill=striped|inner=plus|corner=SE|label=B1-K2] [FIG:shape=square|fill=black|inner=cross|corner=SE|label=B1-K3]\nBaris 3 saat ini:\n[FIG:shape=square|fill=striped|inner=cross|corner=SE|label=Baris3-1] [FIG:shape=circle|fill=black|inner=dot|corner=SE|label=Baris3-2] [FIG:shape=question|label=?]\nManakah gambar yang tepat untuk melengkapi kotak ketiga pada Baris 3?",
    "options": [
      "[FIG:shape=triangle|fill=white|inner=plus|corner=SE] Segitiga, putih, isi tanda tambah, titik di kanan-bawah",
      "[FIG:shape=triangle|fill=black|inner=plus|corner=SE] Segitiga, hitam, isi tanda tambah, titik di kanan-bawah",
      "[FIG:shape=triangle|fill=black|inner=cross|corner=SE] Segitiga, hitam, isi tanda silang, titik di kanan-bawah",
      "[FIG:shape=square|fill=black|inner=cross|corner=SE] Persegi, hitam, isi tanda silang, titik di kanan-bawah",
      "[FIG:shape=square|fill=white|inner=cross|corner=SE] Persegi, putih, isi tanda silang, titik di kanan-bawah"
    ],
    "answer": "A",
    "explanation": "Pada Baris 3 sudah terdapat bentuk Persegi dan Lingkaran (kurang Segitiga), warna arsir dan hitam (kurang warna putih), serta simbol isi tanda silang dan isi titik hitam (kurang isi tanda tambah) dengan titik sudut tetap di kanan-bawah.",
    "tip": "Gunakan prinsip Sudoku/Latin Square pada baris terakhir: cari 1 bentuk, 1 warna arsiran, dan 1 simbol dalam yang belum muncul di baris tersebut."
  },
  {
    "id": "tiu-fig-114",
    "subPattern": "matriks-dan-komposisi",
    "difficulty": "sulit",
    "prompt": "Pada matriks figural 3×3 (Variasi #24), setiap baris wajib memuat tepat satu Segitiga, satu Persegi, dan satu Lingkaran; masing-masing dengan warna berbeda (putih, arsir, hitam) serta simbol dalam berbeda (titik, tambah, silang).\nContoh Baris 1:\n[FIG:shape=triangle|fill=white|inner=plus|corner=SW|label=B1-K1] [FIG:shape=square|fill=striped|inner=cross|corner=SW|label=B1-K2] [FIG:shape=circle|fill=black|inner=dot|corner=SW|label=B1-K3]\nBaris 3 saat ini:\n[FIG:shape=circle|fill=striped|inner=dot|corner=SW|label=Baris3-1] [FIG:shape=triangle|fill=black|inner=plus|corner=SW|label=Baris3-2] [FIG:shape=question|label=?]\nManakah gambar yang tepat untuk melengkapi kotak ketiga pada Baris 3?",
    "options": [
      "[FIG:shape=circle|fill=white|inner=dot|corner=SW] Lingkaran, putih, isi titik hitam, titik di kiri-bawah",
      "[FIG:shape=square|fill=white|inner=cross|corner=SW] Persegi, putih, isi tanda silang, titik di kiri-bawah",
      "[FIG:shape=circle|fill=black|inner=cross|corner=SW] Lingkaran, hitam, isi tanda silang, titik di kiri-bawah",
      "[FIG:shape=triangle|fill=black|inner=dot|corner=SW] Segitiga, hitam, isi titik hitam, titik di kiri-bawah",
      "[FIG:shape=square|fill=striped|inner=plus|corner=SW] Persegi, arsir, isi tanda tambah, titik di kiri-bawah"
    ],
    "answer": "B",
    "explanation": "Pada Baris 3 sudah terdapat bentuk Lingkaran dan Segitiga (kurang Persegi), warna arsir dan hitam (kurang warna putih), serta simbol isi titik hitam dan isi tanda tambah (kurang isi tanda silang) dengan titik sudut tetap di kiri-bawah.",
    "tip": "Gunakan prinsip Sudoku/Latin Square pada baris terakhir: cari 1 bentuk, 1 warna arsiran, dan 1 simbol dalam yang belum muncul di baris tersebut."
  },
  {
    "id": "tiu-fig-115",
    "subPattern": "matriks-dan-komposisi",
    "difficulty": "sulit",
    "prompt": "Pada matriks figural 3×3 (Variasi #25), setiap baris wajib memuat tepat satu Segitiga, satu Persegi, dan satu Lingkaran; masing-masing dengan warna berbeda (putih, arsir, hitam) serta simbol dalam berbeda (titik, tambah, silang).\nContoh Baris 1:\n[FIG:shape=square|fill=striped|inner=cross|corner=NW|label=B1-K1] [FIG:shape=circle|fill=black|inner=dot|corner=NW|label=B1-K2] [FIG:shape=triangle|fill=white|inner=plus|corner=NW|label=B1-K3]\nBaris 3 saat ini:\n[FIG:shape=triangle|fill=black|inner=plus|corner=NW|label=Baris3-1] [FIG:shape=square|fill=white|inner=cross|corner=NW|label=Baris3-2] [FIG:shape=question|label=?]\nManakah gambar yang tepat untuk melengkapi kotak ketiga pada Baris 3?",
    "options": [
      "[FIG:shape=triangle|fill=striped|inner=dot|corner=NW] Segitiga, arsir, isi titik hitam, titik di kiri-atas",
      "[FIG:shape=triangle|fill=white|inner=plus|corner=NW] Segitiga, putih, isi tanda tambah, titik di kiri-atas",
      "[FIG:shape=circle|fill=striped|inner=dot|corner=NW] Lingkaran, arsir, isi titik hitam, titik di kiri-atas",
      "[FIG:shape=triangle|fill=striped|inner=plus|corner=NW] Segitiga, arsir, isi tanda tambah, titik di kiri-atas",
      "[FIG:shape=circle|fill=white|inner=plus|corner=NW] Lingkaran, putih, isi tanda tambah, titik di kiri-atas"
    ],
    "answer": "C",
    "explanation": "Pada Baris 3 sudah terdapat bentuk Segitiga dan Persegi (kurang Lingkaran), warna hitam dan putih (kurang warna arsir), serta simbol isi tanda tambah dan isi tanda silang (kurang isi titik hitam) dengan titik sudut tetap di kiri-atas.",
    "tip": "Gunakan prinsip Sudoku/Latin Square pada baris terakhir: cari 1 bentuk, 1 warna arsiran, dan 1 simbol dalam yang belum muncul di baris tersebut."
  },
  {
    "id": "tiu-fig-116",
    "subPattern": "matriks-dan-komposisi",
    "difficulty": "sulit",
    "prompt": "Pada matriks figural 3×3 (Variasi #26), setiap baris wajib memuat tepat satu Segitiga, satu Persegi, dan satu Lingkaran; masing-masing dengan warna berbeda (putih, arsir, hitam) serta simbol dalam berbeda (titik, tambah, silang).\nContoh Baris 1:\n[FIG:shape=circle|fill=striped|inner=dot|corner=NE|label=B1-K1] [FIG:shape=triangle|fill=black|inner=plus|corner=NE|label=B1-K2] [FIG:shape=square|fill=white|inner=cross|corner=NE|label=B1-K3]\nBaris 3 saat ini:\n[FIG:shape=square|fill=black|inner=cross|corner=NE|label=Baris3-1] [FIG:shape=circle|fill=white|inner=dot|corner=NE|label=Baris3-2] [FIG:shape=question|label=?]\nManakah gambar yang tepat untuk melengkapi kotak ketiga pada Baris 3?",
    "options": [
      "[FIG:shape=triangle|fill=white|inner=plus|corner=NE] Segitiga, putih, isi tanda tambah, titik di kanan-atas",
      "[FIG:shape=triangle|fill=white|inner=cross|corner=NE] Segitiga, putih, isi tanda silang, titik di kanan-atas",
      "[FIG:shape=square|fill=white|inner=cross|corner=NE] Persegi, putih, isi tanda silang, titik di kanan-atas",
      "[FIG:shape=triangle|fill=striped|inner=plus|corner=NE] Segitiga, arsir, isi tanda tambah, titik di kanan-atas",
      "[FIG:shape=square|fill=striped|inner=cross|corner=NE] Persegi, arsir, isi tanda silang, titik di kanan-atas"
    ],
    "answer": "D",
    "explanation": "Pada Baris 3 sudah terdapat bentuk Persegi dan Lingkaran (kurang Segitiga), warna hitam dan putih (kurang warna arsir), serta simbol isi tanda silang dan isi titik hitam (kurang isi tanda tambah) dengan titik sudut tetap di kanan-atas.",
    "tip": "Gunakan prinsip Sudoku/Latin Square pada baris terakhir: cari 1 bentuk, 1 warna arsiran, dan 1 simbol dalam yang belum muncul di baris tersebut."
  },
  {
    "id": "tiu-fig-117",
    "subPattern": "matriks-dan-komposisi",
    "difficulty": "sulit",
    "prompt": "Pada matriks figural 3×3 (Variasi #27), setiap baris wajib memuat tepat satu Segitiga, satu Persegi, dan satu Lingkaran; masing-masing dengan warna berbeda (putih, arsir, hitam) serta simbol dalam berbeda (titik, tambah, silang).\nContoh Baris 1:\n[FIG:shape=triangle|fill=striped|inner=plus|corner=SE|label=B1-K1] [FIG:shape=square|fill=black|inner=cross|corner=SE|label=B1-K2] [FIG:shape=circle|fill=white|inner=dot|corner=SE|label=B1-K3]\nBaris 3 saat ini:\n[FIG:shape=circle|fill=black|inner=dot|corner=SE|label=Baris3-1] [FIG:shape=triangle|fill=white|inner=plus|corner=SE|label=Baris3-2] [FIG:shape=question|label=?]\nManakah gambar yang tepat untuk melengkapi kotak ketiga pada Baris 3?",
    "options": [
      "[FIG:shape=circle|fill=striped|inner=dot|corner=SE] Lingkaran, arsir, isi titik hitam, titik di kanan-bawah",
      "[FIG:shape=circle|fill=white|inner=cross|corner=SE] Lingkaran, putih, isi tanda silang, titik di kanan-bawah",
      "[FIG:shape=triangle|fill=white|inner=dot|corner=SE] Segitiga, putih, isi titik hitam, titik di kanan-bawah",
      "[FIG:shape=square|fill=black|inner=plus|corner=SE] Persegi, hitam, isi tanda tambah, titik di kanan-bawah",
      "[FIG:shape=square|fill=striped|inner=cross|corner=SE] Persegi, arsir, isi tanda silang, titik di kanan-bawah"
    ],
    "answer": "E",
    "explanation": "Pada Baris 3 sudah terdapat bentuk Lingkaran dan Segitiga (kurang Persegi), warna hitam dan putih (kurang warna arsir), serta simbol isi titik hitam dan isi tanda tambah (kurang isi tanda silang) dengan titik sudut tetap di kanan-bawah.",
    "tip": "Gunakan prinsip Sudoku/Latin Square pada baris terakhir: cari 1 bentuk, 1 warna arsiran, dan 1 simbol dalam yang belum muncul di baris tersebut."
  },
  {
    "id": "tiu-fig-118",
    "subPattern": "matriks-dan-komposisi",
    "difficulty": "sulit",
    "prompt": "Pada matriks figural 3×3 (Variasi #28), setiap baris wajib memuat tepat satu Segitiga, satu Persegi, dan satu Lingkaran; masing-masing dengan warna berbeda (putih, arsir, hitam) serta simbol dalam berbeda (titik, tambah, silang).\nContoh Baris 1:\n[FIG:shape=square|fill=black|inner=cross|corner=SW|label=B1-K1] [FIG:shape=circle|fill=white|inner=dot|corner=SW|label=B1-K2] [FIG:shape=triangle|fill=striped|inner=plus|corner=SW|label=B1-K3]\nBaris 3 saat ini:\n[FIG:shape=triangle|fill=white|inner=plus|corner=SW|label=Baris3-1] [FIG:shape=square|fill=striped|inner=cross|corner=SW|label=Baris3-2] [FIG:shape=question|label=?]\nManakah gambar yang tepat untuk melengkapi kotak ketiga pada Baris 3?",
    "options": [
      "[FIG:shape=circle|fill=black|inner=dot|corner=SW] Lingkaran, hitam, isi titik hitam, titik di kiri-bawah",
      "[FIG:shape=triangle|fill=black|inner=dot|corner=SW] Segitiga, hitam, isi titik hitam, titik di kiri-bawah",
      "[FIG:shape=triangle|fill=striped|inner=plus|corner=SW] Segitiga, arsir, isi tanda tambah, titik di kiri-bawah",
      "[FIG:shape=triangle|fill=black|inner=plus|corner=SW] Segitiga, hitam, isi tanda tambah, titik di kiri-bawah",
      "[FIG:shape=circle|fill=striped|inner=plus|corner=SW] Lingkaran, arsir, isi tanda tambah, titik di kiri-bawah"
    ],
    "answer": "A",
    "explanation": "Pada Baris 3 sudah terdapat bentuk Segitiga dan Persegi (kurang Lingkaran), warna putih dan arsir (kurang warna hitam), serta simbol isi tanda tambah dan isi tanda silang (kurang isi titik hitam) dengan titik sudut tetap di kiri-bawah.",
    "tip": "Gunakan prinsip Sudoku/Latin Square pada baris terakhir: cari 1 bentuk, 1 warna arsiran, dan 1 simbol dalam yang belum muncul di baris tersebut."
  },
  {
    "id": "tiu-fig-119",
    "subPattern": "matriks-dan-komposisi",
    "difficulty": "sulit",
    "prompt": "Pada matriks figural 3×3 (Variasi #29), setiap baris wajib memuat tepat satu Segitiga, satu Persegi, dan satu Lingkaran; masing-masing dengan warna berbeda (putih, arsir, hitam) serta simbol dalam berbeda (titik, tambah, silang).\nContoh Baris 1:\n[FIG:shape=circle|fill=black|inner=dot|corner=NW|label=B1-K1] [FIG:shape=triangle|fill=white|inner=plus|corner=NW|label=B1-K2] [FIG:shape=square|fill=striped|inner=cross|corner=NW|label=B1-K3]\nBaris 3 saat ini:\n[FIG:shape=square|fill=white|inner=cross|corner=NW|label=Baris3-1] [FIG:shape=circle|fill=striped|inner=dot|corner=NW|label=Baris3-2] [FIG:shape=question|label=?]\nManakah gambar yang tepat untuk melengkapi kotak ketiga pada Baris 3?",
    "options": [
      "[FIG:shape=triangle|fill=striped|inner=plus|corner=NW] Segitiga, arsir, isi tanda tambah, titik di kiri-atas",
      "[FIG:shape=triangle|fill=black|inner=plus|corner=NW] Segitiga, hitam, isi tanda tambah, titik di kiri-atas",
      "[FIG:shape=triangle|fill=striped|inner=cross|corner=NW] Segitiga, arsir, isi tanda silang, titik di kiri-atas",
      "[FIG:shape=square|fill=striped|inner=cross|corner=NW] Persegi, arsir, isi tanda silang, titik di kiri-atas",
      "[FIG:shape=square|fill=black|inner=cross|corner=NW] Persegi, hitam, isi tanda silang, titik di kiri-atas"
    ],
    "answer": "B",
    "explanation": "Pada Baris 3 sudah terdapat bentuk Persegi dan Lingkaran (kurang Segitiga), warna putih dan arsir (kurang warna hitam), serta simbol isi tanda silang dan isi titik hitam (kurang isi tanda tambah) dengan titik sudut tetap di kiri-atas.",
    "tip": "Gunakan prinsip Sudoku/Latin Square pada baris terakhir: cari 1 bentuk, 1 warna arsiran, dan 1 simbol dalam yang belum muncul di baris tersebut."
  },
  {
    "id": "tiu-fig-120",
    "subPattern": "matriks-dan-komposisi",
    "difficulty": "sulit",
    "prompt": "Pada matriks figural 3×3 (Variasi #30), setiap baris wajib memuat tepat satu Segitiga, satu Persegi, dan satu Lingkaran; masing-masing dengan warna berbeda (putih, arsir, hitam) serta simbol dalam berbeda (titik, tambah, silang).\nContoh Baris 1:\n[FIG:shape=triangle|fill=black|inner=plus|corner=NE|label=B1-K1] [FIG:shape=square|fill=white|inner=cross|corner=NE|label=B1-K2] [FIG:shape=circle|fill=striped|inner=dot|corner=NE|label=B1-K3]\nBaris 3 saat ini:\n[FIG:shape=circle|fill=white|inner=dot|corner=NE|label=Baris3-1] [FIG:shape=triangle|fill=striped|inner=plus|corner=NE|label=Baris3-2] [FIG:shape=question|label=?]\nManakah gambar yang tepat untuk melengkapi kotak ketiga pada Baris 3?",
    "options": [
      "[FIG:shape=circle|fill=black|inner=dot|corner=NE] Lingkaran, hitam, isi titik hitam, titik di kanan-atas",
      "[FIG:shape=circle|fill=striped|inner=cross|corner=NE] Lingkaran, arsir, isi tanda silang, titik di kanan-atas",
      "[FIG:shape=square|fill=black|inner=cross|corner=NE] Persegi, hitam, isi tanda silang, titik di kanan-atas",
      "[FIG:shape=triangle|fill=striped|inner=dot|corner=NE] Segitiga, arsir, isi titik hitam, titik di kanan-atas",
      "[FIG:shape=square|fill=white|inner=plus|corner=NE] Persegi, putih, isi tanda tambah, titik di kanan-atas"
    ],
    "answer": "C",
    "explanation": "Pada Baris 3 sudah terdapat bentuk Lingkaran dan Segitiga (kurang Persegi), warna putih dan arsir (kurang warna hitam), serta simbol isi titik hitam dan isi tanda tambah (kurang isi tanda silang) dengan titik sudut tetap di kanan-atas.",
    "tip": "Gunakan prinsip Sudoku/Latin Square pada baris terakhir: cari 1 bentuk, 1 warna arsiran, dan 1 simbol dalam yang belum muncul di baris tersebut."
  },
  {
    "id": "tiu-fig-121",
    "subPattern": "rotasi-dan-pencerminan",
    "difficulty": "mudah",
    "prompt": "Perhatikan gambar asal berikut:\n[FIG:shape=arrow|rot=0|fill=black|corner=NW|label=Asal] -> [FIG:shape=question|label=?]\nJika seluruh kotak gambar tersebut diputar sebesar 90° searah jarum jam, manakah hasil perputaran yang tepat?",
    "options": [
      "[FIG:shape=arrow|rot=270|fill=black|corner=NE] Panah, hitam, arah 270°, titik di kanan-atas",
      "[FIG:shape=arrow|rot=270|fill=white|corner=SE] Panah, putih, arah 270°, titik di kanan-bawah",
      "[FIG:shape=arrow|rot=270|fill=black|corner=SE] Panah, hitam, arah 270°, titik di kanan-bawah",
      "[FIG:shape=arrow|rot=90|fill=white|corner=SE] Panah, putih, arah 90°, titik di kanan-bawah",
      "[FIG:shape=arrow|rot=90|fill=black|corner=NE] Panah, hitam, arah 90°, titik di kanan-atas"
    ],
    "answer": "E",
    "explanation": "Saat seluruh kotak diputar 90° searah jarum jam, arah panah berubah dari 0° menjadi 90° dan titik sudut ikut berputar dari kiri-atas ke kanan-atas.",
    "tip": "Ingat bahwa saat seluruh kotak diputar, baik bangun di tengah maupun titik di pojok kotak ikut berputar dengan sudut yang sama."
  },
  {
    "id": "tiu-fig-122",
    "subPattern": "rotasi-dan-pencerminan",
    "difficulty": "mudah",
    "prompt": "Perhatikan gambar asal berikut:\n[FIG:shape=arrow|rot=45|fill=striped|corner=NE|label=Asal] -> [FIG:shape=question|label=?]\nJika seluruh kotak gambar tersebut diputar sebesar 180°, manakah hasil perputaran yang tepat?",
    "options": [
      "[FIG:shape=arrow|rot=225|fill=striped|corner=SW] Panah, arsir, arah 225°, titik di kiri-bawah",
      "[FIG:shape=arrow|rot=225|fill=white|corner=SW] Panah, putih, arah 225°, titik di kiri-bawah",
      "[FIG:shape=arrow|rot=225|fill=white|corner=NW] Panah, putih, arah 225°, titik di kiri-atas",
      "[FIG:shape=arrow|rot=315|fill=white|corner=NW] Panah, putih, arah 315°, titik di kiri-atas",
      "[FIG:shape=arrow|rot=315|fill=striped|corner=NW] Panah, arsir, arah 315°, titik di kiri-atas"
    ],
    "answer": "A",
    "explanation": "Saat seluruh kotak diputar 180°, arah panah berubah dari 45° menjadi 225° dan titik sudut ikut berputar dari kanan-atas ke kiri-bawah.",
    "tip": "Ingat bahwa saat seluruh kotak diputar, baik bangun di tengah maupun titik di pojok kotak ikut berputar dengan sudut yang sama."
  },
  {
    "id": "tiu-fig-123",
    "subPattern": "rotasi-dan-pencerminan",
    "difficulty": "mudah",
    "prompt": "Perhatikan gambar asal berikut:\n[FIG:shape=arrow|rot=90|fill=black|corner=SE|label=Asal] -> [FIG:shape=question|label=?]\nJika seluruh kotak gambar tersebut diputar sebesar 90° berlawanan arah jarum jam, manakah hasil perputaran yang tepat?",
    "options": [
      "[FIG:shape=arrow|rot=180|fill=black|corner=NE] Panah, hitam, arah 180°, titik di kanan-atas",
      "[FIG:shape=arrow|rot=0|fill=black|corner=NE] Panah, hitam, arah 0°, titik di kanan-atas",
      "[FIG:shape=arrow|rot=180|fill=white|corner=SE] Panah, putih, arah 180°, titik di kanan-bawah",
      "[FIG:shape=arrow|rot=90|fill=white|corner=SE] Panah, putih, arah 90°, titik di kanan-bawah",
      "[FIG:shape=arrow|rot=0|fill=white|corner=SW] Panah, putih, arah 0°, titik di kiri-bawah"
    ],
    "answer": "B",
    "explanation": "Saat seluruh kotak diputar 90° berlawanan arah jarum jam, arah panah berubah dari 90° menjadi 0° dan titik sudut ikut berputar dari kanan-bawah ke kanan-atas.",
    "tip": "Ingat bahwa saat seluruh kotak diputar, baik bangun di tengah maupun titik di pojok kotak ikut berputar dengan sudut yang sama."
  },
  {
    "id": "tiu-fig-124",
    "subPattern": "rotasi-dan-pencerminan",
    "difficulty": "mudah",
    "prompt": "Perhatikan gambar asal berikut:\n[FIG:shape=arrow|rot=135|fill=striped|corner=SW|label=Asal] -> [FIG:shape=question|label=?]\nJika seluruh kotak gambar tersebut diputar sebesar 90° searah jarum jam, manakah hasil perputaran yang tepat?",
    "options": [
      "[FIG:shape=arrow|rot=315|fill=striped|corner=NW] Panah, arsir, arah 315°, titik di kiri-atas",
      "[FIG:shape=arrow|rot=315|fill=white|corner=NE] Panah, putih, arah 315°, titik di kanan-atas",
      "[FIG:shape=arrow|rot=225|fill=striped|corner=NW] Panah, arsir, arah 225°, titik di kiri-atas",
      "[FIG:shape=arrow|rot=315|fill=striped|corner=NE] Panah, arsir, arah 315°, titik di kanan-atas",
      "[FIG:shape=arrow|rot=225|fill=white|corner=NE] Panah, putih, arah 225°, titik di kanan-atas"
    ],
    "answer": "C",
    "explanation": "Saat seluruh kotak diputar 90° searah jarum jam, arah panah berubah dari 135° menjadi 225° dan titik sudut ikut berputar dari kiri-bawah ke kiri-atas.",
    "tip": "Ingat bahwa saat seluruh kotak diputar, baik bangun di tengah maupun titik di pojok kotak ikut berputar dengan sudut yang sama."
  },
  {
    "id": "tiu-fig-125",
    "subPattern": "rotasi-dan-pencerminan",
    "difficulty": "mudah",
    "prompt": "Perhatikan gambar asal berikut:\n[FIG:shape=arrow|rot=180|fill=black|inner=dot|corner=NW|label=Asal] -> [FIG:shape=question|label=?]\nJika seluruh kotak gambar tersebut diputar sebesar 180°, manakah hasil perputaran yang tepat?",
    "options": [
      "[FIG:shape=arrow|rot=0|fill=white|inner=dot|corner=SE] Panah, putih, arah 0°, isi titik hitam, titik di kanan-bawah",
      "[FIG:shape=arrow|rot=0|fill=white|inner=dot|corner=SW] Panah, putih, arah 0°, isi titik hitam, titik di kiri-bawah",
      "[FIG:shape=arrow|rot=180|fill=white|inner=dot|corner=SW] Panah, putih, arah 180°, isi titik hitam, titik di kiri-bawah",
      "[FIG:shape=arrow|rot=0|fill=black|inner=dot|corner=SE] Panah, hitam, arah 0°, isi titik hitam, titik di kanan-bawah",
      "[FIG:shape=arrow|rot=180|fill=black|inner=dot|corner=SW] Panah, hitam, arah 180°, isi titik hitam, titik di kiri-bawah"
    ],
    "answer": "D",
    "explanation": "Saat seluruh kotak diputar 180°, arah panah berubah dari 180° menjadi 0° dan titik sudut ikut berputar dari kiri-atas ke kanan-bawah.",
    "tip": "Ingat bahwa saat seluruh kotak diputar, baik bangun di tengah maupun titik di pojok kotak ikut berputar dengan sudut yang sama."
  },
  {
    "id": "tiu-fig-126",
    "subPattern": "rotasi-dan-pencerminan",
    "difficulty": "mudah",
    "prompt": "Perhatikan gambar asal berikut:\n[FIG:shape=arrow|rot=225|fill=striped|inner=circle|corner=NE|label=Asal] -> [FIG:shape=question|label=?]\nJika seluruh kotak gambar tersebut diputar sebesar 90° berlawanan arah jarum jam, manakah hasil perputaran yang tepat?",
    "options": [
      "[FIG:shape=arrow|rot=225|fill=striped|inner=circle|corner=NW] Panah, arsir, arah 225°, isi lingkaran, titik di kiri-atas",
      "[FIG:shape=arrow|rot=225|fill=white|inner=circle|corner=NE] Panah, putih, arah 225°, isi lingkaran, titik di kanan-atas",
      "[FIG:shape=arrow|rot=180|fill=white|inner=circle|corner=NE] Panah, putih, arah 180°, isi lingkaran, titik di kanan-atas",
      "[FIG:shape=arrow|rot=135|fill=white|inner=circle|corner=SE] Panah, putih, arah 135°, isi lingkaran, titik di kanan-bawah",
      "[FIG:shape=arrow|rot=135|fill=striped|inner=circle|corner=NW] Panah, arsir, arah 135°, isi lingkaran, titik di kiri-atas"
    ],
    "answer": "E",
    "explanation": "Saat seluruh kotak diputar 90° berlawanan arah jarum jam, arah panah berubah dari 225° menjadi 135° dan titik sudut ikut berputar dari kanan-atas ke kiri-atas.",
    "tip": "Ingat bahwa saat seluruh kotak diputar, baik bangun di tengah maupun titik di pojok kotak ikut berputar dengan sudut yang sama."
  },
  {
    "id": "tiu-fig-127",
    "subPattern": "rotasi-dan-pencerminan",
    "difficulty": "mudah",
    "prompt": "Perhatikan gambar asal berikut:\n[FIG:shape=arrow|rot=270|fill=black|inner=plus|corner=SE|label=Asal] -> [FIG:shape=question|label=?]\nJika seluruh kotak gambar tersebut diputar sebesar 90° searah jarum jam, manakah hasil perputaran yang tepat?",
    "options": [
      "[FIG:shape=arrow|rot=0|fill=black|inner=plus|corner=SW] Panah, hitam, arah 0°, isi tanda tambah, titik di kiri-bawah",
      "[FIG:shape=arrow|rot=180|fill=black|inner=plus|corner=SW] Panah, hitam, arah 180°, isi tanda tambah, titik di kiri-bawah",
      "[FIG:shape=arrow|rot=180|fill=white|inner=plus|corner=NW] Panah, putih, arah 180°, isi tanda tambah, titik di kiri-atas",
      "[FIG:shape=arrow|rot=180|fill=black|inner=plus|corner=NW] Panah, hitam, arah 180°, isi tanda tambah, titik di kiri-atas",
      "[FIG:shape=arrow|rot=0|fill=white|inner=plus|corner=NW] Panah, putih, arah 0°, isi tanda tambah, titik di kiri-atas"
    ],
    "answer": "A",
    "explanation": "Saat seluruh kotak diputar 90° searah jarum jam, arah panah berubah dari 270° menjadi 0° dan titik sudut ikut berputar dari kanan-bawah ke kiri-bawah.",
    "tip": "Ingat bahwa saat seluruh kotak diputar, baik bangun di tengah maupun titik di pojok kotak ikut berputar dengan sudut yang sama."
  },
  {
    "id": "tiu-fig-128",
    "subPattern": "rotasi-dan-pencerminan",
    "difficulty": "mudah",
    "prompt": "Perhatikan gambar asal berikut:\n[FIG:shape=arrow|rot=315|fill=striped|inner=cross|corner=SW|label=Asal] -> [FIG:shape=question|label=?]\nJika seluruh kotak gambar tersebut diputar sebesar 180°, manakah hasil perputaran yang tepat?",
    "options": [
      "[FIG:shape=arrow|rot=135|fill=white|inner=cross|corner=NE] Panah, putih, arah 135°, isi tanda silang, titik di kanan-atas",
      "[FIG:shape=arrow|rot=135|fill=striped|inner=cross|corner=NE] Panah, arsir, arah 135°, isi tanda silang, titik di kanan-atas",
      "[FIG:shape=arrow|rot=135|fill=white|inner=cross|corner=SE] Panah, putih, arah 135°, isi tanda silang, titik di kanan-bawah",
      "[FIG:shape=arrow|rot=225|fill=white|inner=cross|corner=SE] Panah, putih, arah 225°, isi tanda silang, titik di kanan-bawah",
      "[FIG:shape=arrow|rot=225|fill=striped|inner=cross|corner=SE] Panah, arsir, arah 225°, isi tanda silang, titik di kanan-bawah"
    ],
    "answer": "B",
    "explanation": "Saat seluruh kotak diputar 180°, arah panah berubah dari 315° menjadi 135° dan titik sudut ikut berputar dari kiri-bawah ke kanan-atas.",
    "tip": "Ingat bahwa saat seluruh kotak diputar, baik bangun di tengah maupun titik di pojok kotak ikut berputar dengan sudut yang sama."
  },
  {
    "id": "tiu-fig-129",
    "subPattern": "rotasi-dan-pencerminan",
    "difficulty": "mudah",
    "prompt": "Perhatikan gambar asal berikut:\n[FIG:shape=arrow|rot=0|fill=black|inner=dot|corner=NW|label=Asal] -> [FIG:shape=question|label=?]\nJika seluruh kotak gambar tersebut diputar sebesar 90° berlawanan arah jarum jam, manakah hasil perputaran yang tepat?",
    "options": [
      "[FIG:shape=arrow|rot=90|fill=black|inner=dot|corner=SW] Panah, hitam, arah 90°, isi titik hitam, titik di kiri-bawah",
      "[FIG:shape=arrow|rot=90|fill=white|inner=dot|corner=NW] Panah, putih, arah 90°, isi titik hitam, titik di kiri-atas",
      "[FIG:shape=arrow|rot=270|fill=black|inner=dot|corner=SW] Panah, hitam, arah 270°, isi titik hitam, titik di kiri-bawah",
      "[FIG:shape=arrow|rot=0|fill=white|inner=dot|corner=NW] Panah, putih, arah 0°, isi titik hitam, titik di kiri-atas",
      "[FIG:shape=arrow|rot=270|fill=white|inner=dot|corner=NE] Panah, putih, arah 270°, isi titik hitam, titik di kanan-atas"
    ],
    "answer": "C",
    "explanation": "Saat seluruh kotak diputar 90° berlawanan arah jarum jam, arah panah berubah dari 0° menjadi 270° dan titik sudut ikut berputar dari kiri-atas ke kiri-bawah.",
    "tip": "Ingat bahwa saat seluruh kotak diputar, baik bangun di tengah maupun titik di pojok kotak ikut berputar dengan sudut yang sama."
  },
  {
    "id": "tiu-fig-130",
    "subPattern": "rotasi-dan-pencerminan",
    "difficulty": "mudah",
    "prompt": "Perhatikan gambar asal berikut:\n[FIG:shape=arrow|rot=45|fill=striped|inner=circle|corner=NE|label=Asal] -> [FIG:shape=question|label=?]\nJika seluruh kotak gambar tersebut diputar sebesar 90° searah jarum jam, manakah hasil perputaran yang tepat?",
    "options": [
      "[FIG:shape=arrow|rot=225|fill=striped|inner=circle|corner=SE] Panah, arsir, arah 225°, isi lingkaran, titik di kanan-bawah",
      "[FIG:shape=arrow|rot=225|fill=white|inner=circle|corner=SW] Panah, putih, arah 225°, isi lingkaran, titik di kiri-bawah",
      "[FIG:shape=arrow|rot=225|fill=striped|inner=circle|corner=SW] Panah, arsir, arah 225°, isi lingkaran, titik di kiri-bawah",
      "[FIG:shape=arrow|rot=135|fill=striped|inner=circle|corner=SE] Panah, arsir, arah 135°, isi lingkaran, titik di kanan-bawah",
      "[FIG:shape=arrow|rot=135|fill=white|inner=circle|corner=SW] Panah, putih, arah 135°, isi lingkaran, titik di kiri-bawah"
    ],
    "answer": "D",
    "explanation": "Saat seluruh kotak diputar 90° searah jarum jam, arah panah berubah dari 45° menjadi 135° dan titik sudut ikut berputar dari kanan-atas ke kanan-bawah.",
    "tip": "Ingat bahwa saat seluruh kotak diputar, baik bangun di tengah maupun titik di pojok kotak ikut berputar dengan sudut yang sama."
  },
  {
    "id": "tiu-fig-131",
    "subPattern": "rotasi-dan-pencerminan",
    "difficulty": "sedang",
    "prompt": "Perhatikan gambar asal berikut:\n[FIG:shape=arrow|rot=90|fill=half-l|corner=NW|dots=1|label=Asal] -> [FIG:shape=question|label=?]\nManakah hasil pencerminan gambar tersebut terhadap cermin datar kiri-kanan (sumbu tegak)?",
    "options": [
      "[FIG:shape=arrow|rot=270|fill=half-l|corner=NE|dots=1] Panah, setengah-hitam kiri, arah 270°, titik di kanan-atas, 1 titik",
      "[FIG:shape=arrow|rot=270|fill=half-l|corner=SE|dots=1] Panah, setengah-hitam kiri, arah 270°, titik di kanan-bawah, 1 titik",
      "[FIG:shape=arrow|rot=90|fill=half-l|corner=SE|dots=1] Panah, setengah-hitam kiri, arah 90°, titik di kanan-bawah, 1 titik",
      "[FIG:shape=arrow|rot=90|fill=half-r|corner=SE|dots=1] Panah, setengah-hitam kanan, arah 90°, titik di kanan-bawah, 1 titik",
      "[FIG:shape=arrow|rot=270|fill=half-r|corner=NE|dots=1] Panah, setengah-hitam kanan, arah 270°, titik di kanan-atas, 1 titik"
    ],
    "answer": "E",
    "explanation": "Pencerminan terhadap cermin datar kiri-kanan (sumbu tegak) membalik arah kemiringan panah dari 90° menjadi 270°, membalik sisi setengah-hitam menjadi setengah-hitam kanan, dan memindahkan titik sudut dari kiri-atas ke kanan-atas.",
    "tip": "Pada pencerminan kiri-kanan, posisi atas-bawah tetap tetapi kiri dan kanan saling bertukar (NW ↔ NE dan SW ↔ SE)."
  },
  {
    "id": "tiu-fig-132",
    "subPattern": "rotasi-dan-pencerminan",
    "difficulty": "sedang",
    "prompt": "Perhatikan gambar asal berikut:\n[FIG:shape=arrow|rot=0|fill=half-r|corner=NE|dots=2|label=Asal] -> [FIG:shape=question|label=?]\nManakah hasil pencerminan gambar tersebut terhadap cermin atas-bawah (sumbu mendatar)?",
    "options": [
      "[FIG:shape=arrow|rot=180|fill=half-l|corner=SE|dots=2] Panah, setengah-hitam kiri, arah 180°, titik di kanan-bawah, 2 titik",
      "[FIG:shape=arrow|rot=0|fill=half-l|corner=SE|dots=2] Panah, setengah-hitam kiri, arah 0°, titik di kanan-bawah, 2 titik",
      "[FIG:shape=arrow|rot=0|fill=half-r|corner=SW|dots=2] Panah, setengah-hitam kanan, arah 0°, titik di kiri-bawah, 2 titik",
      "[FIG:shape=arrow|rot=270|fill=half-r|corner=SW|dots=2] Panah, setengah-hitam kanan, arah 270°, titik di kiri-bawah, 2 titik",
      "[FIG:shape=arrow|rot=180|fill=half-r|corner=NW|dots=2] Panah, setengah-hitam kanan, arah 180°, titik di kiri-atas, 2 titik"
    ],
    "answer": "A",
    "explanation": "Pencerminan terhadap cermin atas-bawah (sumbu mendatar) membalik arah kemiringan panah dari 0° menjadi 180°, membalik sisi setengah-hitam menjadi setengah-hitam kiri, dan memindahkan titik sudut dari kanan-atas ke kanan-bawah.",
    "tip": "Pada pencerminan kiri-kanan, posisi atas-bawah tetap tetapi kiri dan kanan saling bertukar (NW ↔ NE dan SW ↔ SE)."
  },
  {
    "id": "tiu-fig-133",
    "subPattern": "rotasi-dan-pencerminan",
    "difficulty": "sedang",
    "prompt": "Perhatikan gambar asal berikut:\n[FIG:shape=arrow|rot=45|fill=half-l|corner=SE|dots=3|label=Asal] -> [FIG:shape=question|label=?]\nManakah hasil pencerminan gambar tersebut terhadap cermin datar kiri-kanan (sumbu tegak)?",
    "options": [
      "[FIG:shape=arrow|rot=45|fill=half-r|corner=SW|dots=3] Panah, setengah-hitam kanan, arah 45°, titik di kiri-bawah, 3 titik",
      "[FIG:shape=arrow|rot=315|fill=half-r|corner=SW|dots=3] Panah, setengah-hitam kanan, arah 315°, titik di kiri-bawah, 3 titik",
      "[FIG:shape=arrow|rot=45|fill=half-l|corner=NW|dots=3] Panah, setengah-hitam kiri, arah 45°, titik di kiri-atas, 3 titik",
      "[FIG:shape=arrow|rot=45|fill=half-r|corner=NW|dots=3] Panah, setengah-hitam kanan, arah 45°, titik di kiri-atas, 3 titik",
      "[FIG:shape=arrow|rot=315|fill=half-l|corner=NW|dots=3] Panah, setengah-hitam kiri, arah 315°, titik di kiri-atas, 3 titik"
    ],
    "answer": "B",
    "explanation": "Pencerminan terhadap cermin datar kiri-kanan (sumbu tegak) membalik arah kemiringan panah dari 45° menjadi 315°, membalik sisi setengah-hitam menjadi setengah-hitam kanan, dan memindahkan titik sudut dari kanan-bawah ke kiri-bawah.",
    "tip": "Pada pencerminan kiri-kanan, posisi atas-bawah tetap tetapi kiri dan kanan saling bertukar (NW ↔ NE dan SW ↔ SE)."
  },
  {
    "id": "tiu-fig-134",
    "subPattern": "rotasi-dan-pencerminan",
    "difficulty": "sedang",
    "prompt": "Perhatikan gambar asal berikut:\n[FIG:shape=arrow|rot=135|fill=half-r|corner=SW|dots=4|label=Asal] -> [FIG:shape=question|label=?]\nManakah hasil pencerminan gambar tersebut terhadap cermin atas-bawah (sumbu mendatar)?",
    "options": [
      "[FIG:shape=arrow|rot=45|fill=half-r|corner=NW|dots=4] Panah, setengah-hitam kanan, arah 45°, titik di kiri-atas, 4 titik",
      "[FIG:shape=arrow|rot=45|fill=half-r|corner=NE|dots=4] Panah, setengah-hitam kanan, arah 45°, titik di kanan-atas, 4 titik",
      "[FIG:shape=arrow|rot=45|fill=half-l|corner=NW|dots=4] Panah, setengah-hitam kiri, arah 45°, titik di kiri-atas, 4 titik",
      "[FIG:shape=arrow|rot=135|fill=half-r|corner=NE|dots=4] Panah, setengah-hitam kanan, arah 135°, titik di kanan-atas, 4 titik",
      "[FIG:shape=arrow|rot=135|fill=half-l|corner=NE|dots=4] Panah, setengah-hitam kiri, arah 135°, titik di kanan-atas, 4 titik"
    ],
    "answer": "C",
    "explanation": "Pencerminan terhadap cermin atas-bawah (sumbu mendatar) membalik arah kemiringan panah dari 135° menjadi 45°, membalik sisi setengah-hitam menjadi setengah-hitam kiri, dan memindahkan titik sudut dari kiri-bawah ke kiri-atas.",
    "tip": "Pada pencerminan kiri-kanan, posisi atas-bawah tetap tetapi kiri dan kanan saling bertukar (NW ↔ NE dan SW ↔ SE)."
  },
  {
    "id": "tiu-fig-135",
    "subPattern": "rotasi-dan-pencerminan",
    "difficulty": "sedang",
    "prompt": "Perhatikan gambar asal berikut:\n[FIG:shape=arrow|rot=90|fill=half-l|inner=dot|corner=NW|dots=5|label=Asal] -> [FIG:shape=question|label=?]\nManakah hasil pencerminan gambar tersebut terhadap cermin datar kiri-kanan (sumbu tegak)?",
    "options": [
      "[FIG:shape=arrow|rot=90|fill=half-r|inner=dot|corner=NE|dots=5] Panah, setengah-hitam kanan, arah 90°, isi titik hitam, titik di kanan-atas, 5 titik",
      "[FIG:shape=arrow|rot=90|fill=half-l|inner=dot|corner=SE|dots=5] Panah, setengah-hitam kiri, arah 90°, isi titik hitam, titik di kanan-bawah, 5 titik",
      "[FIG:shape=arrow|rot=0|fill=half-l|inner=dot|corner=SE|dots=5] Panah, setengah-hitam kiri, arah 0°, isi titik hitam, titik di kanan-bawah, 5 titik",
      "[FIG:shape=arrow|rot=270|fill=half-r|inner=dot|corner=NE|dots=5] Panah, setengah-hitam kanan, arah 270°, isi titik hitam, titik di kanan-atas, 5 titik",
      "[FIG:shape=arrow|rot=270|fill=half-l|inner=dot|corner=SW|dots=5] Panah, setengah-hitam kiri, arah 270°, isi titik hitam, titik di kiri-bawah, 5 titik"
    ],
    "answer": "D",
    "explanation": "Pencerminan terhadap cermin datar kiri-kanan (sumbu tegak) membalik arah kemiringan panah dari 90° menjadi 270°, membalik sisi setengah-hitam menjadi setengah-hitam kanan, dan memindahkan titik sudut dari kiri-atas ke kanan-atas.",
    "tip": "Pada pencerminan kiri-kanan, posisi atas-bawah tetap tetapi kiri dan kanan saling bertukar (NW ↔ NE dan SW ↔ SE)."
  },
  {
    "id": "tiu-fig-136",
    "subPattern": "rotasi-dan-pencerminan",
    "difficulty": "sedang",
    "prompt": "Perhatikan gambar asal berikut:\n[FIG:shape=arrow|rot=0|fill=half-r|inner=circle|corner=NE|dots=1|label=Asal] -> [FIG:shape=question|label=?]\nManakah hasil pencerminan gambar tersebut terhadap cermin atas-bawah (sumbu mendatar)?",
    "options": [
      "[FIG:shape=arrow|rot=0|fill=half-l|inner=circle|corner=SE|dots=1] Panah, setengah-hitam kiri, arah 0°, isi lingkaran, titik di kanan-bawah, 1 titik",
      "[FIG:shape=arrow|rot=0|fill=half-r|inner=circle|corner=SW|dots=1] Panah, setengah-hitam kanan, arah 0°, isi lingkaran, titik di kiri-bawah, 1 titik",
      "[FIG:shape=arrow|rot=0|fill=half-l|inner=circle|corner=SW|dots=1] Panah, setengah-hitam kiri, arah 0°, isi lingkaran, titik di kiri-bawah, 1 titik",
      "[FIG:shape=arrow|rot=180|fill=half-r|inner=circle|corner=SW|dots=1] Panah, setengah-hitam kanan, arah 180°, isi lingkaran, titik di kiri-bawah, 1 titik",
      "[FIG:shape=arrow|rot=180|fill=half-l|inner=circle|corner=SE|dots=1] Panah, setengah-hitam kiri, arah 180°, isi lingkaran, titik di kanan-bawah, 1 titik"
    ],
    "answer": "E",
    "explanation": "Pencerminan terhadap cermin atas-bawah (sumbu mendatar) membalik arah kemiringan panah dari 0° menjadi 180°, membalik sisi setengah-hitam menjadi setengah-hitam kiri, dan memindahkan titik sudut dari kanan-atas ke kanan-bawah.",
    "tip": "Pada pencerminan kiri-kanan, posisi atas-bawah tetap tetapi kiri dan kanan saling bertukar (NW ↔ NE dan SW ↔ SE)."
  },
  {
    "id": "tiu-fig-137",
    "subPattern": "rotasi-dan-pencerminan",
    "difficulty": "sedang",
    "prompt": "Perhatikan gambar asal berikut:\n[FIG:shape=arrow|rot=45|fill=half-l|inner=plus|corner=SE|dots=2|label=Asal] -> [FIG:shape=question|label=?]\nManakah hasil pencerminan gambar tersebut terhadap cermin datar kiri-kanan (sumbu tegak)?",
    "options": [
      "[FIG:shape=arrow|rot=315|fill=half-r|inner=plus|corner=SW|dots=2] Panah, setengah-hitam kanan, arah 315°, isi tanda tambah, titik di kiri-bawah, 2 titik",
      "[FIG:shape=arrow|rot=315|fill=half-l|inner=plus|corner=SW|dots=2] Panah, setengah-hitam kiri, arah 315°, isi tanda tambah, titik di kiri-bawah, 2 titik",
      "[FIG:shape=arrow|rot=315|fill=half-l|inner=plus|corner=NW|dots=2] Panah, setengah-hitam kiri, arah 315°, isi tanda tambah, titik di kiri-atas, 2 titik",
      "[FIG:shape=arrow|rot=45|fill=half-l|inner=plus|corner=NW|dots=2] Panah, setengah-hitam kiri, arah 45°, isi tanda tambah, titik di kiri-atas, 2 titik",
      "[FIG:shape=arrow|rot=45|fill=half-r|inner=plus|corner=NW|dots=2] Panah, setengah-hitam kanan, arah 45°, isi tanda tambah, titik di kiri-atas, 2 titik"
    ],
    "answer": "A",
    "explanation": "Pencerminan terhadap cermin datar kiri-kanan (sumbu tegak) membalik arah kemiringan panah dari 45° menjadi 315°, membalik sisi setengah-hitam menjadi setengah-hitam kanan, dan memindahkan titik sudut dari kanan-bawah ke kiri-bawah.",
    "tip": "Pada pencerminan kiri-kanan, posisi atas-bawah tetap tetapi kiri dan kanan saling bertukar (NW ↔ NE dan SW ↔ SE)."
  },
  {
    "id": "tiu-fig-138",
    "subPattern": "rotasi-dan-pencerminan",
    "difficulty": "sedang",
    "prompt": "Perhatikan gambar asal berikut:\n[FIG:shape=arrow|rot=135|fill=half-r|inner=cross|corner=SW|dots=3|label=Asal] -> [FIG:shape=question|label=?]\nManakah hasil pencerminan gambar tersebut terhadap cermin atas-bawah (sumbu mendatar)?",
    "options": [
      "[FIG:shape=arrow|rot=135|fill=half-l|inner=cross|corner=NW|dots=3] Panah, setengah-hitam kiri, arah 135°, isi tanda silang, titik di kiri-atas, 3 titik",
      "[FIG:shape=arrow|rot=45|fill=half-l|inner=cross|corner=NW|dots=3] Panah, setengah-hitam kiri, arah 45°, isi tanda silang, titik di kiri-atas, 3 titik",
      "[FIG:shape=arrow|rot=135|fill=half-r|inner=cross|corner=NE|dots=3] Panah, setengah-hitam kanan, arah 135°, isi tanda silang, titik di kanan-atas, 3 titik",
      "[FIG:shape=arrow|rot=90|fill=half-r|inner=cross|corner=NE|dots=3] Panah, setengah-hitam kanan, arah 90°, isi tanda silang, titik di kanan-atas, 3 titik",
      "[FIG:shape=arrow|rot=45|fill=half-r|inner=cross|corner=SE|dots=3] Panah, setengah-hitam kanan, arah 45°, isi tanda silang, titik di kanan-bawah, 3 titik"
    ],
    "answer": "B",
    "explanation": "Pencerminan terhadap cermin atas-bawah (sumbu mendatar) membalik arah kemiringan panah dari 135° menjadi 45°, membalik sisi setengah-hitam menjadi setengah-hitam kiri, dan memindahkan titik sudut dari kiri-bawah ke kiri-atas.",
    "tip": "Pada pencerminan kiri-kanan, posisi atas-bawah tetap tetapi kiri dan kanan saling bertukar (NW ↔ NE dan SW ↔ SE)."
  },
  {
    "id": "tiu-fig-139",
    "subPattern": "rotasi-dan-pencerminan",
    "difficulty": "sedang",
    "prompt": "Perhatikan gambar asal berikut:\n[FIG:shape=arrow|rot=90|fill=half-l|inner=dot|corner=NW|dots=4|label=Asal] -> [FIG:shape=question|label=?]\nManakah hasil pencerminan gambar tersebut terhadap cermin datar kiri-kanan (sumbu tegak)?",
    "options": [
      "[FIG:shape=arrow|rot=90|fill=half-r|inner=dot|corner=NE|dots=4] Panah, setengah-hitam kanan, arah 90°, isi titik hitam, titik di kanan-atas, 4 titik",
      "[FIG:shape=arrow|rot=90|fill=half-l|inner=dot|corner=SE|dots=4] Panah, setengah-hitam kiri, arah 90°, isi titik hitam, titik di kanan-bawah, 4 titik",
      "[FIG:shape=arrow|rot=270|fill=half-r|inner=dot|corner=NE|dots=4] Panah, setengah-hitam kanan, arah 270°, isi titik hitam, titik di kanan-atas, 4 titik",
      "[FIG:shape=arrow|rot=90|fill=half-r|inner=dot|corner=SE|dots=4] Panah, setengah-hitam kanan, arah 90°, isi titik hitam, titik di kanan-bawah, 4 titik",
      "[FIG:shape=arrow|rot=270|fill=half-l|inner=dot|corner=SE|dots=4] Panah, setengah-hitam kiri, arah 270°, isi titik hitam, titik di kanan-bawah, 4 titik"
    ],
    "answer": "C",
    "explanation": "Pencerminan terhadap cermin datar kiri-kanan (sumbu tegak) membalik arah kemiringan panah dari 90° menjadi 270°, membalik sisi setengah-hitam menjadi setengah-hitam kanan, dan memindahkan titik sudut dari kiri-atas ke kanan-atas.",
    "tip": "Pada pencerminan kiri-kanan, posisi atas-bawah tetap tetapi kiri dan kanan saling bertukar (NW ↔ NE dan SW ↔ SE)."
  },
  {
    "id": "tiu-fig-140",
    "subPattern": "rotasi-dan-pencerminan",
    "difficulty": "sedang",
    "prompt": "Perhatikan gambar asal berikut:\n[FIG:shape=arrow|rot=0|fill=half-r|inner=circle|corner=NE|dots=5|label=Asal] -> [FIG:shape=question|label=?]\nManakah hasil pencerminan gambar tersebut terhadap cermin atas-bawah (sumbu mendatar)?",
    "options": [
      "[FIG:shape=arrow|rot=180|fill=half-r|inner=circle|corner=SE|dots=5] Panah, setengah-hitam kanan, arah 180°, isi lingkaran, titik di kanan-bawah, 5 titik",
      "[FIG:shape=arrow|rot=180|fill=half-r|inner=circle|corner=SW|dots=5] Panah, setengah-hitam kanan, arah 180°, isi lingkaran, titik di kiri-bawah, 5 titik",
      "[FIG:shape=arrow|rot=0|fill=half-r|inner=circle|corner=SW|dots=5] Panah, setengah-hitam kanan, arah 0°, isi lingkaran, titik di kiri-bawah, 5 titik",
      "[FIG:shape=arrow|rot=180|fill=half-l|inner=circle|corner=SE|dots=5] Panah, setengah-hitam kiri, arah 180°, isi lingkaran, titik di kanan-bawah, 5 titik",
      "[FIG:shape=arrow|rot=0|fill=half-l|inner=circle|corner=SW|dots=5] Panah, setengah-hitam kiri, arah 0°, isi lingkaran, titik di kiri-bawah, 5 titik"
    ],
    "answer": "D",
    "explanation": "Pencerminan terhadap cermin atas-bawah (sumbu mendatar) membalik arah kemiringan panah dari 0° menjadi 180°, membalik sisi setengah-hitam menjadi setengah-hitam kiri, dan memindahkan titik sudut dari kanan-atas ke kanan-bawah.",
    "tip": "Pada pencerminan kiri-kanan, posisi atas-bawah tetap tetapi kiri dan kanan saling bertukar (NW ↔ NE dan SW ↔ SE)."
  },
  {
    "id": "tiu-fig-141",
    "subPattern": "rotasi-dan-pencerminan",
    "difficulty": "sulit",
    "prompt": "Perhatikan gambar asal berikut:\n[FIG:shape=triangle|rot=0|fill=half-l|inner=dot|corner=NW|dots=1|label=Asal] -> [FIG:shape=question|label=?]\nGambar tersebut diputar 90° searah jarum jam, kemudian hasilnya dicerminkan secara horizontal (kiri-kanan). Manakah gambar hasil akhirnya?",
    "options": [
      "[FIG:shape=triangle|rot=90|fill=half-r|inner=dot|corner=NW|dots=1] Segitiga, setengah-hitam kanan, arah 90°, isi titik hitam, titik di kiri-atas, 1 titik",
      "[FIG:shape=triangle|rot=90|fill=half-l|inner=dot|corner=NE|dots=1] Segitiga, setengah-hitam kiri, arah 90°, isi titik hitam, titik di kanan-atas, 1 titik",
      "[FIG:shape=triangle|rot=0|fill=half-l|inner=dot|corner=NE|dots=1] Segitiga, setengah-hitam kiri, arah 0°, isi titik hitam, titik di kanan-atas, 1 titik",
      "[FIG:shape=triangle|rot=270|fill=half-l|inner=dot|corner=SE|dots=1] Segitiga, setengah-hitam kiri, arah 270°, isi titik hitam, titik di kanan-bawah, 1 titik",
      "[FIG:shape=triangle|rot=270|fill=half-r|inner=dot|corner=NW|dots=1] Segitiga, setengah-hitam kanan, arah 270°, isi titik hitam, titik di kiri-atas, 1 titik"
    ],
    "answer": "E",
    "explanation": "Langkah 1 (Rotasi 90° searah jarum jam): titik sudut berpindah dari kiri-atas ke kanan-atas. Langkah 2 (Pencerminan kiri-kanan): titik sudut berpindah dari kanan-atas ke kiri-atas dan belahan hitam berubah ke sisi kanan.",
    "tip": "Lakukan transformasi dua tahap secara berurutan pada titik sudut terlebih dahulu karena titik sudut paling mudah dilacak."
  },
  {
    "id": "tiu-fig-142",
    "subPattern": "rotasi-dan-pencerminan",
    "difficulty": "sulit",
    "prompt": "Perhatikan gambar asal berikut:\n[FIG:shape=square|rot=90|fill=half-l|inner=circle|corner=NE|dots=2|label=Asal] -> [FIG:shape=question|label=?]\nGambar tersebut diputar 90° searah jarum jam, kemudian hasilnya dicerminkan secara horizontal (kiri-kanan). Manakah gambar hasil akhirnya?",
    "options": [
      "[FIG:shape=square|rot=180|fill=half-r|inner=circle|corner=SW|dots=2] Persegi, setengah-hitam kanan, arah 180°, isi lingkaran, titik di kiri-bawah, 2 titik",
      "[FIG:shape=square|rot=0|fill=half-r|inner=circle|corner=SW|dots=2] Persegi, setengah-hitam kanan, arah 0°, isi lingkaran, titik di kiri-bawah, 2 titik",
      "[FIG:shape=square|rot=0|fill=half-l|inner=circle|corner=NW|dots=2] Persegi, setengah-hitam kiri, arah 0°, isi lingkaran, titik di kiri-atas, 2 titik",
      "[FIG:shape=square|rot=0|fill=half-r|inner=circle|corner=NW|dots=2] Persegi, setengah-hitam kanan, arah 0°, isi lingkaran, titik di kiri-atas, 2 titik",
      "[FIG:shape=square|rot=180|fill=half-l|inner=circle|corner=NW|dots=2] Persegi, setengah-hitam kiri, arah 180°, isi lingkaran, titik di kiri-atas, 2 titik"
    ],
    "answer": "A",
    "explanation": "Langkah 1 (Rotasi 90° searah jarum jam): titik sudut berpindah dari kanan-atas ke kanan-bawah. Langkah 2 (Pencerminan kiri-kanan): titik sudut berpindah dari kanan-bawah ke kiri-bawah dan belahan hitam berubah ke sisi kanan.",
    "tip": "Lakukan transformasi dua tahap secara berurutan pada titik sudut terlebih dahulu karena titik sudut paling mudah dilacak."
  },
  {
    "id": "tiu-fig-143",
    "subPattern": "rotasi-dan-pencerminan",
    "difficulty": "sulit",
    "prompt": "Perhatikan gambar asal berikut:\n[FIG:shape=pentagon|rot=180|fill=half-l|inner=plus|corner=SE|dots=3|label=Asal] -> [FIG:shape=question|label=?]\nGambar tersebut diputar 90° searah jarum jam, kemudian hasilnya dicerminkan secara horizontal (kiri-kanan). Manakah gambar hasil akhirnya?",
    "options": [
      "[FIG:shape=pentagon|rot=90|fill=half-l|inner=plus|corner=SE|dots=3] Segilima, setengah-hitam kiri, arah 90°, isi tanda tambah, titik di kanan-bawah, 3 titik",
      "[FIG:shape=pentagon|rot=90|fill=half-r|inner=plus|corner=SE|dots=3] Segilima, setengah-hitam kanan, arah 90°, isi tanda tambah, titik di kanan-bawah, 3 titik",
      "[FIG:shape=pentagon|rot=90|fill=half-l|inner=plus|corner=SW|dots=3] Segilima, setengah-hitam kiri, arah 90°, isi tanda tambah, titik di kiri-bawah, 3 titik",
      "[FIG:shape=pentagon|rot=270|fill=half-l|inner=plus|corner=SW|dots=3] Segilima, setengah-hitam kiri, arah 270°, isi tanda tambah, titik di kiri-bawah, 3 titik",
      "[FIG:shape=pentagon|rot=270|fill=half-r|inner=plus|corner=SW|dots=3] Segilima, setengah-hitam kanan, arah 270°, isi tanda tambah, titik di kiri-bawah, 3 titik"
    ],
    "answer": "B",
    "explanation": "Langkah 1 (Rotasi 90° searah jarum jam): titik sudut berpindah dari kanan-bawah ke kiri-bawah. Langkah 2 (Pencerminan kiri-kanan): titik sudut berpindah dari kiri-bawah ke kanan-bawah dan belahan hitam berubah ke sisi kanan.",
    "tip": "Lakukan transformasi dua tahap secara berurutan pada titik sudut terlebih dahulu karena titik sudut paling mudah dilacak."
  },
  {
    "id": "tiu-fig-144",
    "subPattern": "rotasi-dan-pencerminan",
    "difficulty": "sulit",
    "prompt": "Perhatikan gambar asal berikut:\n[FIG:shape=hexagon|rot=270|fill=half-l|inner=cross|corner=SW|dots=4|label=Asal] -> [FIG:shape=question|label=?]\nGambar tersebut diputar 90° searah jarum jam, kemudian hasilnya dicerminkan secara horizontal (kiri-kanan). Manakah gambar hasil akhirnya?",
    "options": [
      "[FIG:shape=hexagon|rot=180|fill=half-r|inner=cross|corner=NE|dots=4] Segienam, setengah-hitam kanan, arah 180°, isi tanda silang, titik di kanan-atas, 4 titik",
      "[FIG:shape=hexagon|rot=180|fill=half-l|inner=cross|corner=SE|dots=4] Segienam, setengah-hitam kiri, arah 180°, isi tanda silang, titik di kanan-bawah, 4 titik",
      "[FIG:shape=hexagon|rot=0|fill=half-r|inner=cross|corner=NE|dots=4] Segienam, setengah-hitam kanan, arah 0°, isi tanda silang, titik di kanan-atas, 4 titik",
      "[FIG:shape=hexagon|rot=90|fill=half-l|inner=cross|corner=SE|dots=4] Segienam, setengah-hitam kiri, arah 90°, isi tanda silang, titik di kanan-bawah, 4 titik",
      "[FIG:shape=hexagon|rot=0|fill=half-l|inner=cross|corner=SW|dots=4] Segienam, setengah-hitam kiri, arah 0°, isi tanda silang, titik di kiri-bawah, 4 titik"
    ],
    "answer": "C",
    "explanation": "Langkah 1 (Rotasi 90° searah jarum jam): titik sudut berpindah dari kiri-bawah ke kiri-atas. Langkah 2 (Pencerminan kiri-kanan): titik sudut berpindah dari kiri-atas ke kanan-atas dan belahan hitam berubah ke sisi kanan.",
    "tip": "Lakukan transformasi dua tahap secara berurutan pada titik sudut terlebih dahulu karena titik sudut paling mudah dilacak."
  },
  {
    "id": "tiu-fig-145",
    "subPattern": "rotasi-dan-pencerminan",
    "difficulty": "sulit",
    "prompt": "Perhatikan gambar asal berikut:\n[FIG:shape=triangle|rot=0|fill=half-l|inner=dot|corner=NW|dots=5|label=Asal] -> [FIG:shape=question|label=?]\nGambar tersebut diputar 90° searah jarum jam, kemudian hasilnya dicerminkan secara horizontal (kiri-kanan). Manakah gambar hasil akhirnya?",
    "options": [
      "[FIG:shape=triangle|rot=90|fill=half-r|inner=dot|corner=NW|dots=5] Segitiga, setengah-hitam kanan, arah 90°, isi titik hitam, titik di kiri-atas, 5 titik",
      "[FIG:shape=triangle|rot=90|fill=half-l|inner=dot|corner=NE|dots=5] Segitiga, setengah-hitam kiri, arah 90°, isi titik hitam, titik di kanan-atas, 5 titik",
      "[FIG:shape=triangle|rot=90|fill=half-r|inner=dot|corner=NE|dots=5] Segitiga, setengah-hitam kanan, arah 90°, isi titik hitam, titik di kanan-atas, 5 titik",
      "[FIG:shape=triangle|rot=270|fill=half-r|inner=dot|corner=NW|dots=5] Segitiga, setengah-hitam kanan, arah 270°, isi titik hitam, titik di kiri-atas, 5 titik",
      "[FIG:shape=triangle|rot=270|fill=half-l|inner=dot|corner=NE|dots=5] Segitiga, setengah-hitam kiri, arah 270°, isi titik hitam, titik di kanan-atas, 5 titik"
    ],
    "answer": "D",
    "explanation": "Langkah 1 (Rotasi 90° searah jarum jam): titik sudut berpindah dari kiri-atas ke kanan-atas. Langkah 2 (Pencerminan kiri-kanan): titik sudut berpindah dari kanan-atas ke kiri-atas dan belahan hitam berubah ke sisi kanan.",
    "tip": "Lakukan transformasi dua tahap secara berurutan pada titik sudut terlebih dahulu karena titik sudut paling mudah dilacak."
  },
  {
    "id": "tiu-fig-146",
    "subPattern": "rotasi-dan-pencerminan",
    "difficulty": "sulit",
    "prompt": "Perhatikan gambar asal berikut:\n[FIG:shape=square|rot=90|fill=half-l|inner=circle|corner=NE|dots=6|label=Asal] -> [FIG:shape=question|label=?]\nGambar tersebut diputar 90° searah jarum jam, kemudian hasilnya dicerminkan secara horizontal (kiri-kanan). Manakah gambar hasil akhirnya?",
    "options": [
      "[FIG:shape=square|rot=180|fill=half-l|inner=circle|corner=SW|dots=6] Persegi, setengah-hitam kiri, arah 180°, isi lingkaran, titik di kiri-bawah, 6 titik",
      "[FIG:shape=square|rot=180|fill=half-l|inner=circle|corner=NW|dots=6] Persegi, setengah-hitam kiri, arah 180°, isi lingkaran, titik di kiri-atas, 6 titik",
      "[FIG:shape=square|rot=0|fill=half-l|inner=circle|corner=NW|dots=6] Persegi, setengah-hitam kiri, arah 0°, isi lingkaran, titik di kiri-atas, 6 titik",
      "[FIG:shape=square|rot=0|fill=half-r|inner=circle|corner=NW|dots=6] Persegi, setengah-hitam kanan, arah 0°, isi lingkaran, titik di kiri-atas, 6 titik",
      "[FIG:shape=square|rot=180|fill=half-r|inner=circle|corner=SW|dots=6] Persegi, setengah-hitam kanan, arah 180°, isi lingkaran, titik di kiri-bawah, 6 titik"
    ],
    "answer": "E",
    "explanation": "Langkah 1 (Rotasi 90° searah jarum jam): titik sudut berpindah dari kanan-atas ke kanan-bawah. Langkah 2 (Pencerminan kiri-kanan): titik sudut berpindah dari kanan-bawah ke kiri-bawah dan belahan hitam berubah ke sisi kanan.",
    "tip": "Lakukan transformasi dua tahap secara berurutan pada titik sudut terlebih dahulu karena titik sudut paling mudah dilacak."
  },
  {
    "id": "tiu-fig-147",
    "subPattern": "rotasi-dan-pencerminan",
    "difficulty": "sulit",
    "prompt": "Perhatikan gambar asal berikut:\n[FIG:shape=pentagon|rot=180|fill=half-l|inner=plus|corner=SE|dots=7|label=Asal] -> [FIG:shape=question|label=?]\nGambar tersebut diputar 90° searah jarum jam, kemudian hasilnya dicerminkan secara horizontal (kiri-kanan). Manakah gambar hasil akhirnya?",
    "options": [
      "[FIG:shape=pentagon|rot=90|fill=half-r|inner=plus|corner=SE|dots=7] Segilima, setengah-hitam kanan, arah 90°, isi tanda tambah, titik di kanan-bawah, 7 titik",
      "[FIG:shape=pentagon|rot=270|fill=half-r|inner=plus|corner=SE|dots=7] Segilima, setengah-hitam kanan, arah 270°, isi tanda tambah, titik di kanan-bawah, 7 titik",
      "[FIG:shape=pentagon|rot=270|fill=half-l|inner=plus|corner=SW|dots=7] Segilima, setengah-hitam kiri, arah 270°, isi tanda tambah, titik di kiri-bawah, 7 titik",
      "[FIG:shape=pentagon|rot=180|fill=half-l|inner=plus|corner=SW|dots=7] Segilima, setengah-hitam kiri, arah 180°, isi tanda tambah, titik di kiri-bawah, 7 titik",
      "[FIG:shape=pentagon|rot=90|fill=half-l|inner=plus|corner=NW|dots=7] Segilima, setengah-hitam kiri, arah 90°, isi tanda tambah, titik di kiri-atas, 7 titik"
    ],
    "answer": "A",
    "explanation": "Langkah 1 (Rotasi 90° searah jarum jam): titik sudut berpindah dari kanan-bawah ke kiri-bawah. Langkah 2 (Pencerminan kiri-kanan): titik sudut berpindah dari kiri-bawah ke kanan-bawah dan belahan hitam berubah ke sisi kanan.",
    "tip": "Lakukan transformasi dua tahap secara berurutan pada titik sudut terlebih dahulu karena titik sudut paling mudah dilacak."
  },
  {
    "id": "tiu-fig-148",
    "subPattern": "rotasi-dan-pencerminan",
    "difficulty": "sulit",
    "prompt": "Perhatikan gambar asal berikut:\n[FIG:shape=hexagon|rot=270|fill=half-l|inner=cross|corner=SW|dots=8|label=Asal] -> [FIG:shape=question|label=?]\nGambar tersebut diputar 90° searah jarum jam, kemudian hasilnya dicerminkan secara horizontal (kiri-kanan). Manakah gambar hasil akhirnya?",
    "options": [
      "[FIG:shape=hexagon|rot=180|fill=half-r|inner=cross|corner=NE|dots=8] Segienam, setengah-hitam kanan, arah 180°, isi tanda silang, titik di kanan-atas, 8 titik",
      "[FIG:shape=hexagon|rot=0|fill=half-r|inner=cross|corner=NE|dots=8] Segienam, setengah-hitam kanan, arah 0°, isi tanda silang, titik di kanan-atas, 8 titik",
      "[FIG:shape=hexagon|rot=180|fill=half-l|inner=cross|corner=SE|dots=8] Segienam, setengah-hitam kiri, arah 180°, isi tanda silang, titik di kanan-bawah, 8 titik",
      "[FIG:shape=hexagon|rot=180|fill=half-r|inner=cross|corner=SE|dots=8] Segienam, setengah-hitam kanan, arah 180°, isi tanda silang, titik di kanan-bawah, 8 titik",
      "[FIG:shape=hexagon|rot=0|fill=half-l|inner=cross|corner=SE|dots=8] Segienam, setengah-hitam kiri, arah 0°, isi tanda silang, titik di kanan-bawah, 8 titik"
    ],
    "answer": "B",
    "explanation": "Langkah 1 (Rotasi 90° searah jarum jam): titik sudut berpindah dari kiri-bawah ke kiri-atas. Langkah 2 (Pencerminan kiri-kanan): titik sudut berpindah dari kiri-atas ke kanan-atas dan belahan hitam berubah ke sisi kanan.",
    "tip": "Lakukan transformasi dua tahap secara berurutan pada titik sudut terlebih dahulu karena titik sudut paling mudah dilacak."
  },
  {
    "id": "tiu-fig-149",
    "subPattern": "rotasi-dan-pencerminan",
    "difficulty": "sulit",
    "prompt": "Perhatikan gambar asal berikut:\n[FIG:shape=triangle|rot=0|fill=half-l|inner=dot|corner=NW|dots=9|label=Asal] -> [FIG:shape=question|label=?]\nGambar tersebut diputar 90° searah jarum jam, kemudian hasilnya dicerminkan secara horizontal (kiri-kanan). Manakah gambar hasil akhirnya?",
    "options": [
      "[FIG:shape=triangle|rot=270|fill=half-l|inner=dot|corner=NW|dots=9] Segitiga, setengah-hitam kiri, arah 270°, isi titik hitam, titik di kiri-atas, 9 titik",
      "[FIG:shape=triangle|rot=270|fill=half-l|inner=dot|corner=NE|dots=9] Segitiga, setengah-hitam kiri, arah 270°, isi titik hitam, titik di kanan-atas, 9 titik",
      "[FIG:shape=triangle|rot=270|fill=half-r|inner=dot|corner=NW|dots=9] Segitiga, setengah-hitam kanan, arah 270°, isi titik hitam, titik di kiri-atas, 9 titik",
      "[FIG:shape=triangle|rot=90|fill=half-l|inner=dot|corner=NE|dots=9] Segitiga, setengah-hitam kiri, arah 90°, isi titik hitam, titik di kanan-atas, 9 titik",
      "[FIG:shape=triangle|rot=90|fill=half-r|inner=dot|corner=NE|dots=9] Segitiga, setengah-hitam kanan, arah 90°, isi titik hitam, titik di kanan-atas, 9 titik"
    ],
    "answer": "C",
    "explanation": "Langkah 1 (Rotasi 90° searah jarum jam): titik sudut berpindah dari kiri-atas ke kanan-atas. Langkah 2 (Pencerminan kiri-kanan): titik sudut berpindah dari kanan-atas ke kiri-atas dan belahan hitam berubah ke sisi kanan.",
    "tip": "Lakukan transformasi dua tahap secara berurutan pada titik sudut terlebih dahulu karena titik sudut paling mudah dilacak."
  },
  {
    "id": "tiu-fig-150",
    "subPattern": "rotasi-dan-pencerminan",
    "difficulty": "sulit",
    "prompt": "Perhatikan gambar asal berikut:\n[FIG:shape=square|rot=90|fill=half-l|inner=circle|corner=NE|dots=10|label=Asal] -> [FIG:shape=question|label=?]\nGambar tersebut diputar 90° searah jarum jam, kemudian hasilnya dicerminkan secara horizontal (kiri-kanan). Manakah gambar hasil akhirnya?",
    "options": [
      "[FIG:shape=square|rot=0|fill=half-r|inner=circle|corner=SW|dots=10] Persegi, setengah-hitam kanan, arah 0°, isi lingkaran, titik di kiri-bawah, 10 titik",
      "[FIG:shape=square|rot=0|fill=half-l|inner=circle|corner=NW|dots=10] Persegi, setengah-hitam kiri, arah 0°, isi lingkaran, titik di kiri-atas, 10 titik",
      "[FIG:shape=square|rot=270|fill=half-l|inner=circle|corner=NW|dots=10] Persegi, setengah-hitam kiri, arah 270°, isi lingkaran, titik di kiri-atas, 10 titik",
      "[FIG:shape=square|rot=180|fill=half-r|inner=circle|corner=SW|dots=10] Persegi, setengah-hitam kanan, arah 180°, isi lingkaran, titik di kiri-bawah, 10 titik",
      "[FIG:shape=square|rot=180|fill=half-l|inner=circle|corner=NE|dots=10] Persegi, setengah-hitam kiri, arah 180°, isi lingkaran, titik di kanan-atas, 10 titik"
    ],
    "answer": "D",
    "explanation": "Langkah 1 (Rotasi 90° searah jarum jam): titik sudut berpindah dari kanan-atas ke kanan-bawah. Langkah 2 (Pencerminan kiri-kanan): titik sudut berpindah dari kanan-bawah ke kiri-bawah dan belahan hitam berubah ke sisi kanan.",
    "tip": "Lakukan transformasi dua tahap secara berurutan pada titik sudut terlebih dahulu karena titik sudut paling mudah dilacak."
  }
];
