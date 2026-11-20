import type { QuestionDraft } from "@/modules/question-bank/domain/question";

export const figuralBatch1Drafts: readonly QuestionDraft[] = [
  {
    "id": "tiu-fig-001",
    "subPattern": "analogi-gambar",
    "difficulty": "mudah",
    "prompt": "Perhatikan pasangan analogi gambar berikut (Gambar 1 menjadi Gambar 2, maka Gambar 3 menjadi Gambar 4):\n[FIG:shape=arrow|rot=0|fill=white|corner=NW|label=1] -> [FIG:shape=arrow|rot=90|fill=black|corner=NW|label=2] :: [FIG:shape=arrow|rot=135|fill=white|corner=NE|label=3] -> [FIG:shape=question|label=?]\nManakah gambar yang tepat untuk mengisi tanda tanya (?) pada posisi ke-4?",
    "options": [
      "[FIG:shape=arrow|rot=225|fill=black|corner=NE] Panah, hitam, arah 225°, titik di kanan-atas",
      "[FIG:shape=arrow|rot=315|fill=black|corner=NE] Panah, hitam, arah 315°, titik di kanan-atas",
      "[FIG:shape=arrow|rot=315|fill=white|corner=SE] Panah, putih, arah 315°, titik di kanan-bawah",
      "[FIG:shape=arrow|rot=315|fill=black|corner=SE] Panah, hitam, arah 315°, titik di kanan-bawah",
      "[FIG:shape=arrow|rot=225|fill=white|corner=SE] Panah, putih, arah 225°, titik di kanan-bawah"
    ],
    "answer": "A",
    "explanation": "Perubahan dari Gambar 1 ke Gambar 2 adalah panah berputar +90° searah jarum jam dan warnanya berubah dari putih menjadi hitam, sedangkan posisi titik sudut tetap. Terapkan aturan yang sama pada Gambar 3 (135° + 90° = 225°, warna hitam, titik tetap di kanan-atas).",
    "tip": "Amati perubahan sudut rotasi dan perubahan warna dari Gambar 1 ke Gambar 2, lalu terapkan persis pada Gambar 3."
  },
  {
    "id": "tiu-fig-002",
    "subPattern": "analogi-gambar",
    "difficulty": "mudah",
    "prompt": "Perhatikan pasangan analogi gambar berikut (Gambar 1 menjadi Gambar 2, maka Gambar 3 menjadi Gambar 4):\n[FIG:shape=arrow|rot=45|fill=white|corner=NE|label=1] -> [FIG:shape=arrow|rot=225|fill=black|corner=NE|label=2] :: [FIG:shape=arrow|rot=180|fill=white|corner=SE|label=3] -> [FIG:shape=question|label=?]\nManakah gambar yang tepat untuk mengisi tanda tanya (?) pada posisi ke-4?",
    "options": [
      "[FIG:shape=arrow|rot=0|fill=white|corner=SE] Panah, putih, arah 0°, titik di kanan-bawah",
      "[FIG:shape=arrow|rot=0|fill=black|corner=SE] Panah, hitam, arah 0°, titik di kanan-bawah",
      "[FIG:shape=arrow|rot=0|fill=white|corner=SW] Panah, putih, arah 0°, titik di kiri-bawah",
      "[FIG:shape=arrow|rot=180|fill=white|corner=SW] Panah, putih, arah 180°, titik di kiri-bawah",
      "[FIG:shape=arrow|rot=180|fill=black|corner=SW] Panah, hitam, arah 180°, titik di kiri-bawah"
    ],
    "answer": "B",
    "explanation": "Perubahan dari Gambar 1 ke Gambar 2 adalah panah berputar +180° searah jarum jam dan warnanya berubah dari putih menjadi hitam, sedangkan posisi titik sudut tetap. Terapkan aturan yang sama pada Gambar 3 (180° + 180° = 0°, warna hitam, titik tetap di kanan-bawah).",
    "tip": "Amati perubahan sudut rotasi dan perubahan warna dari Gambar 1 ke Gambar 2, lalu terapkan persis pada Gambar 3."
  },
  {
    "id": "tiu-fig-003",
    "subPattern": "analogi-gambar",
    "difficulty": "mudah",
    "prompt": "Perhatikan pasangan analogi gambar berikut (Gambar 1 menjadi Gambar 2, maka Gambar 3 menjadi Gambar 4):\n[FIG:shape=arrow|rot=90|fill=white|corner=SE|label=1] -> [FIG:shape=arrow|rot=180|fill=black|corner=SE|label=2] :: [FIG:shape=arrow|rot=225|fill=white|corner=SW|label=3] -> [FIG:shape=question|label=?]\nManakah gambar yang tepat untuk mengisi tanda tanya (?) pada posisi ke-4?",
    "options": [
      "[FIG:shape=arrow|rot=45|fill=black|corner=SW] Panah, hitam, arah 45°, titik di kiri-bawah",
      "[FIG:shape=arrow|rot=45|fill=white|corner=NW] Panah, putih, arah 45°, titik di kiri-atas",
      "[FIG:shape=arrow|rot=315|fill=black|corner=SW] Panah, hitam, arah 315°, titik di kiri-bawah",
      "[FIG:shape=arrow|rot=0|fill=white|corner=NW] Panah, putih, arah 0°, titik di kiri-atas",
      "[FIG:shape=arrow|rot=315|fill=white|corner=NE] Panah, putih, arah 315°, titik di kanan-atas"
    ],
    "answer": "C",
    "explanation": "Perubahan dari Gambar 1 ke Gambar 2 adalah panah berputar +90° searah jarum jam dan warnanya berubah dari putih menjadi hitam, sedangkan posisi titik sudut tetap. Terapkan aturan yang sama pada Gambar 3 (225° + 90° = 315°, warna hitam, titik tetap di kiri-bawah).",
    "tip": "Amati perubahan sudut rotasi dan perubahan warna dari Gambar 1 ke Gambar 2, lalu terapkan persis pada Gambar 3."
  },
  {
    "id": "tiu-fig-004",
    "subPattern": "analogi-gambar",
    "difficulty": "mudah",
    "prompt": "Perhatikan pasangan analogi gambar berikut (Gambar 1 menjadi Gambar 2, maka Gambar 3 menjadi Gambar 4):\n[FIG:shape=arrow|rot=135|fill=white|corner=SW|label=1] -> [FIG:shape=arrow|rot=315|fill=black|corner=SW|label=2] :: [FIG:shape=arrow|rot=270|fill=white|corner=NW|label=3] -> [FIG:shape=question|label=?]\nManakah gambar yang tepat untuk mengisi tanda tanya (?) pada posisi ke-4?",
    "options": [
      "[FIG:shape=arrow|rot=270|fill=black|corner=NW] Panah, hitam, arah 270°, titik di kiri-atas",
      "[FIG:shape=arrow|rot=270|fill=white|corner=NE] Panah, putih, arah 270°, titik di kanan-atas",
      "[FIG:shape=arrow|rot=270|fill=black|corner=NE] Panah, hitam, arah 270°, titik di kanan-atas",
      "[FIG:shape=arrow|rot=90|fill=black|corner=NW] Panah, hitam, arah 90°, titik di kiri-atas",
      "[FIG:shape=arrow|rot=90|fill=white|corner=NE] Panah, putih, arah 90°, titik di kanan-atas"
    ],
    "answer": "D",
    "explanation": "Perubahan dari Gambar 1 ke Gambar 2 adalah panah berputar +180° searah jarum jam dan warnanya berubah dari putih menjadi hitam, sedangkan posisi titik sudut tetap. Terapkan aturan yang sama pada Gambar 3 (270° + 180° = 90°, warna hitam, titik tetap di kiri-atas).",
    "tip": "Amati perubahan sudut rotasi dan perubahan warna dari Gambar 1 ke Gambar 2, lalu terapkan persis pada Gambar 3."
  },
  {
    "id": "tiu-fig-005",
    "subPattern": "analogi-gambar",
    "difficulty": "mudah",
    "prompt": "Perhatikan pasangan analogi gambar berikut (Gambar 1 menjadi Gambar 2, maka Gambar 3 menjadi Gambar 4):\n[FIG:shape=arrow|rot=180|fill=white|corner=NW|label=1] -> [FIG:shape=arrow|rot=270|fill=black|corner=NW|label=2] :: [FIG:shape=arrow|rot=315|fill=white|corner=NE|label=3] -> [FIG:shape=question|label=?]\nManakah gambar yang tepat untuk mengisi tanda tanya (?) pada posisi ke-4?",
    "options": [
      "[FIG:shape=arrow|rot=45|fill=white|corner=NE] Panah, putih, arah 45°, titik di kanan-atas",
      "[FIG:shape=arrow|rot=45|fill=white|corner=SE] Panah, putih, arah 45°, titik di kanan-bawah",
      "[FIG:shape=arrow|rot=135|fill=white|corner=SE] Panah, putih, arah 135°, titik di kanan-bawah",
      "[FIG:shape=arrow|rot=135|fill=black|corner=SE] Panah, hitam, arah 135°, titik di kanan-bawah",
      "[FIG:shape=arrow|rot=45|fill=black|corner=NE] Panah, hitam, arah 45°, titik di kanan-atas"
    ],
    "answer": "E",
    "explanation": "Perubahan dari Gambar 1 ke Gambar 2 adalah panah berputar +90° searah jarum jam dan warnanya berubah dari putih menjadi hitam, sedangkan posisi titik sudut tetap. Terapkan aturan yang sama pada Gambar 3 (315° + 90° = 45°, warna hitam, titik tetap di kanan-atas).",
    "tip": "Amati perubahan sudut rotasi dan perubahan warna dari Gambar 1 ke Gambar 2, lalu terapkan persis pada Gambar 3."
  },
  {
    "id": "tiu-fig-006",
    "subPattern": "analogi-gambar",
    "difficulty": "mudah",
    "prompt": "Perhatikan pasangan analogi gambar berikut (Gambar 1 menjadi Gambar 2, maka Gambar 3 menjadi Gambar 4):\n[FIG:shape=arrow|rot=225|fill=white|corner=NE|inner=circle|label=1] -> [FIG:shape=arrow|rot=45|fill=black|corner=NE|inner=circle|label=2] :: [FIG:shape=arrow|rot=0|fill=white|corner=SE|inner=circle|label=3] -> [FIG:shape=question|label=?]\nManakah gambar yang tepat untuk mengisi tanda tanya (?) pada posisi ke-4?",
    "options": [
      "[FIG:shape=arrow|rot=180|fill=black|corner=SE|inner=circle] Panah, hitam, arah 180°, isi lingkaran, titik di kanan-bawah",
      "[FIG:shape=arrow|rot=0|fill=black|corner=SE|inner=circle] Panah, hitam, arah 0°, isi lingkaran, titik di kanan-bawah",
      "[FIG:shape=arrow|rot=0|fill=white|corner=SW|inner=circle] Panah, putih, arah 0°, isi lingkaran, titik di kiri-bawah",
      "[FIG:shape=arrow|rot=270|fill=white|corner=SW|inner=circle] Panah, putih, arah 270°, isi lingkaran, titik di kiri-bawah",
      "[FIG:shape=arrow|rot=180|fill=white|corner=NW|inner=circle] Panah, putih, arah 180°, isi lingkaran, titik di kiri-atas"
    ],
    "answer": "A",
    "explanation": "Perubahan dari Gambar 1 ke Gambar 2 adalah panah berputar +180° searah jarum jam dan warnanya berubah dari putih menjadi hitam, sedangkan posisi titik sudut tetap. Terapkan aturan yang sama pada Gambar 3 (0° + 180° = 180°, warna hitam, titik tetap di kanan-bawah).",
    "tip": "Amati perubahan sudut rotasi dan perubahan warna dari Gambar 1 ke Gambar 2, lalu terapkan persis pada Gambar 3."
  },
  {
    "id": "tiu-fig-007",
    "subPattern": "analogi-gambar",
    "difficulty": "mudah",
    "prompt": "Perhatikan pasangan analogi gambar berikut (Gambar 1 menjadi Gambar 2, maka Gambar 3 menjadi Gambar 4):\n[FIG:shape=arrow|rot=270|fill=white|corner=SE|inner=plus|label=1] -> [FIG:shape=arrow|rot=0|fill=black|corner=SE|inner=plus|label=2] :: [FIG:shape=arrow|rot=45|fill=white|corner=SW|inner=plus|label=3] -> [FIG:shape=question|label=?]\nManakah gambar yang tepat untuk mengisi tanda tanya (?) pada posisi ke-4?",
    "options": [
      "[FIG:shape=arrow|rot=225|fill=black|corner=SW|inner=plus] Panah, hitam, arah 225°, isi tanda tambah, titik di kiri-bawah",
      "[FIG:shape=arrow|rot=135|fill=black|corner=SW|inner=plus] Panah, hitam, arah 135°, isi tanda tambah, titik di kiri-bawah",
      "[FIG:shape=arrow|rot=225|fill=white|corner=NW|inner=plus] Panah, putih, arah 225°, isi tanda tambah, titik di kiri-atas",
      "[FIG:shape=arrow|rot=225|fill=black|corner=NW|inner=plus] Panah, hitam, arah 225°, isi tanda tambah, titik di kiri-atas",
      "[FIG:shape=arrow|rot=135|fill=white|corner=NW|inner=plus] Panah, putih, arah 135°, isi tanda tambah, titik di kiri-atas"
    ],
    "answer": "B",
    "explanation": "Perubahan dari Gambar 1 ke Gambar 2 adalah panah berputar +90° searah jarum jam dan warnanya berubah dari putih menjadi hitam, sedangkan posisi titik sudut tetap. Terapkan aturan yang sama pada Gambar 3 (45° + 90° = 135°, warna hitam, titik tetap di kiri-bawah).",
    "tip": "Amati perubahan sudut rotasi dan perubahan warna dari Gambar 1 ke Gambar 2, lalu terapkan persis pada Gambar 3."
  },
  {
    "id": "tiu-fig-008",
    "subPattern": "analogi-gambar",
    "difficulty": "mudah",
    "prompt": "Perhatikan pasangan analogi gambar berikut (Gambar 1 menjadi Gambar 2, maka Gambar 3 menjadi Gambar 4):\n[FIG:shape=arrow|rot=315|fill=white|corner=SW|inner=cross|label=1] -> [FIG:shape=arrow|rot=135|fill=black|corner=SW|inner=cross|label=2] :: [FIG:shape=arrow|rot=90|fill=white|corner=NW|inner=cross|label=3] -> [FIG:shape=question|label=?]\nManakah gambar yang tepat untuk mengisi tanda tanya (?) pada posisi ke-4?",
    "options": [
      "[FIG:shape=arrow|rot=270|fill=white|corner=NW|inner=cross] Panah, putih, arah 270°, isi tanda silang, titik di kiri-atas",
      "[FIG:shape=arrow|rot=270|fill=white|corner=NE|inner=cross] Panah, putih, arah 270°, isi tanda silang, titik di kanan-atas",
      "[FIG:shape=arrow|rot=270|fill=black|corner=NW|inner=cross] Panah, hitam, arah 270°, isi tanda silang, titik di kiri-atas",
      "[FIG:shape=arrow|rot=90|fill=white|corner=NE|inner=cross] Panah, putih, arah 90°, isi tanda silang, titik di kanan-atas",
      "[FIG:shape=arrow|rot=90|fill=black|corner=NE|inner=cross] Panah, hitam, arah 90°, isi tanda silang, titik di kanan-atas"
    ],
    "answer": "C",
    "explanation": "Perubahan dari Gambar 1 ke Gambar 2 adalah panah berputar +180° searah jarum jam dan warnanya berubah dari putih menjadi hitam, sedangkan posisi titik sudut tetap. Terapkan aturan yang sama pada Gambar 3 (90° + 180° = 270°, warna hitam, titik tetap di kiri-atas).",
    "tip": "Amati perubahan sudut rotasi dan perubahan warna dari Gambar 1 ke Gambar 2, lalu terapkan persis pada Gambar 3."
  },
  {
    "id": "tiu-fig-009",
    "subPattern": "analogi-gambar",
    "difficulty": "mudah",
    "prompt": "Perhatikan pasangan analogi gambar berikut (Gambar 1 menjadi Gambar 2, maka Gambar 3 menjadi Gambar 4):\n[FIG:shape=arrow|rot=0|fill=white|corner=NW|inner=dot|label=1] -> [FIG:shape=arrow|rot=90|fill=black|corner=NW|inner=dot|label=2] :: [FIG:shape=arrow|rot=135|fill=white|corner=NE|inner=dot|label=3] -> [FIG:shape=question|label=?]\nManakah gambar yang tepat untuk mengisi tanda tanya (?) pada posisi ke-4?",
    "options": [
      "[FIG:shape=arrow|rot=315|fill=black|corner=NE|inner=dot] Panah, hitam, arah 315°, isi titik hitam, titik di kanan-atas",
      "[FIG:shape=arrow|rot=315|fill=white|corner=SE|inner=dot] Panah, putih, arah 315°, isi titik hitam, titik di kanan-bawah",
      "[FIG:shape=arrow|rot=270|fill=white|corner=SE|inner=dot] Panah, putih, arah 270°, isi titik hitam, titik di kanan-bawah",
      "[FIG:shape=arrow|rot=225|fill=black|corner=NE|inner=dot] Panah, hitam, arah 225°, isi titik hitam, titik di kanan-atas",
      "[FIG:shape=arrow|rot=225|fill=white|corner=SW|inner=dot] Panah, putih, arah 225°, isi titik hitam, titik di kiri-bawah"
    ],
    "answer": "D",
    "explanation": "Perubahan dari Gambar 1 ke Gambar 2 adalah panah berputar +90° searah jarum jam dan warnanya berubah dari putih menjadi hitam, sedangkan posisi titik sudut tetap. Terapkan aturan yang sama pada Gambar 3 (135° + 90° = 225°, warna hitam, titik tetap di kanan-atas).",
    "tip": "Amati perubahan sudut rotasi dan perubahan warna dari Gambar 1 ke Gambar 2, lalu terapkan persis pada Gambar 3."
  },
  {
    "id": "tiu-fig-010",
    "subPattern": "analogi-gambar",
    "difficulty": "mudah",
    "prompt": "Perhatikan pasangan analogi gambar berikut (Gambar 1 menjadi Gambar 2, maka Gambar 3 menjadi Gambar 4):\n[FIG:shape=arrow|rot=45|fill=white|corner=NE|inner=circle|label=1] -> [FIG:shape=arrow|rot=225|fill=black|corner=NE|inner=circle|label=2] :: [FIG:shape=arrow|rot=180|fill=white|corner=SE|inner=circle|label=3] -> [FIG:shape=question|label=?]\nManakah gambar yang tepat untuk mengisi tanda tanya (?) pada posisi ke-4?",
    "options": [
      "[FIG:shape=arrow|rot=180|fill=black|corner=SE|inner=circle] Panah, hitam, arah 180°, isi lingkaran, titik di kanan-bawah",
      "[FIG:shape=arrow|rot=180|fill=white|corner=SW|inner=circle] Panah, putih, arah 180°, isi lingkaran, titik di kiri-bawah",
      "[FIG:shape=arrow|rot=180|fill=black|corner=SW|inner=circle] Panah, hitam, arah 180°, isi lingkaran, titik di kiri-bawah",
      "[FIG:shape=arrow|rot=0|fill=white|corner=SW|inner=circle] Panah, putih, arah 0°, isi lingkaran, titik di kiri-bawah",
      "[FIG:shape=arrow|rot=0|fill=black|corner=SE|inner=circle] Panah, hitam, arah 0°, isi lingkaran, titik di kanan-bawah"
    ],
    "answer": "E",
    "explanation": "Perubahan dari Gambar 1 ke Gambar 2 adalah panah berputar +180° searah jarum jam dan warnanya berubah dari putih menjadi hitam, sedangkan posisi titik sudut tetap. Terapkan aturan yang sama pada Gambar 3 (180° + 180° = 0°, warna hitam, titik tetap di kanan-bawah).",
    "tip": "Amati perubahan sudut rotasi dan perubahan warna dari Gambar 1 ke Gambar 2, lalu terapkan persis pada Gambar 3."
  },
  {
    "id": "tiu-fig-011",
    "subPattern": "analogi-gambar",
    "difficulty": "sedang",
    "prompt": "Tentukan kelanjutan analogi figural berikut (pola perubahan Gambar 1 ke 2 berlaku juga dari Gambar 3 ke 4):\n[FIG:shape=triangle|rot=0|fill=white|corner=NW|inner=dot|label=1] -> [FIG:shape=square|rot=0|fill=black|corner=NE|inner=dot|label=2] :: [FIG:shape=square|rot=0|fill=white|corner=SE|inner=circle|label=3] -> [FIG:shape=question|label=?]\nPilih gambar ke-4 yang paling tepat.",
    "options": [
      "[FIG:shape=pentagon|rot=0|fill=black|corner=SW|inner=circle] Segilima, hitam, arah 0°, isi lingkaran, titik di kiri-bawah",
      "[FIG:shape=pentagon|rot=0|fill=white|corner=SW|inner=circle] Segilima, putih, arah 0°, isi lingkaran, titik di kiri-bawah",
      "[FIG:shape=pentagon|rot=0|fill=white|corner=NW|inner=circle] Segilima, putih, arah 0°, isi lingkaran, titik di kiri-atas",
      "[FIG:shape=pentagon|rot=180|fill=white|corner=NW|inner=circle] Segilima, putih, arah 180°, isi lingkaran, titik di kiri-atas",
      "[FIG:shape=pentagon|rot=180|fill=black|corner=NW|inner=circle] Segilima, hitam, arah 180°, isi lingkaran, titik di kiri-atas"
    ],
    "answer": "A",
    "explanation": "Dari Gambar 1 ke 2: jumlah sisi bangun utama bertambah 1 (Segitiga → Persegi), warna berubah menjadi hitam, dan titik sudut bergeser 1 langkah searah jarum jam. Maka Gambar 3 (Persegi) berubah menjadi Segilima berwarna hitam dengan titik di kiri-bawah.",
    "tip": "Periksa tiga komponen secara berurutan: jumlah sisi bangun utama, warna arsiran, dan pergeseran titik di pojok kotak."
  },
  {
    "id": "tiu-fig-012",
    "subPattern": "analogi-gambar",
    "difficulty": "sedang",
    "prompt": "Tentukan kelanjutan analogi figural berikut (pola perubahan Gambar 1 ke 2 berlaku juga dari Gambar 3 ke 4):\n[FIG:shape=square|rot=45|fill=striped|corner=NE|inner=circle|label=1] -> [FIG:shape=pentagon|rot=45|fill=white|corner=SE|inner=circle|label=2] :: [FIG:shape=pentagon|rot=45|fill=striped|corner=SW|inner=plus|label=3] -> [FIG:shape=question|label=?]\nPilih gambar ke-4 yang paling tepat.",
    "options": [
      "[FIG:shape=hexagon|rot=135|fill=white|corner=NW|inner=plus] Segienam, putih, arah 135°, isi tanda tambah, titik di kiri-atas",
      "[FIG:shape=hexagon|rot=45|fill=white|corner=NW|inner=plus] Segienam, putih, arah 45°, isi tanda tambah, titik di kiri-atas",
      "[FIG:shape=hexagon|rot=135|fill=black|corner=NE|inner=plus] Segienam, hitam, arah 135°, isi tanda tambah, titik di kanan-atas",
      "[FIG:shape=hexagon|rot=90|fill=black|corner=NE|inner=plus] Segienam, hitam, arah 90°, isi tanda tambah, titik di kanan-atas",
      "[FIG:shape=hexagon|rot=45|fill=black|corner=SE|inner=plus] Segienam, hitam, arah 45°, isi tanda tambah, titik di kanan-bawah"
    ],
    "answer": "B",
    "explanation": "Dari Gambar 1 ke 2: jumlah sisi bangun utama bertambah 1 (Persegi → Segilima), warna berubah menjadi putih, dan titik sudut bergeser 1 langkah searah jarum jam. Maka Gambar 3 (Segilima) berubah menjadi Segienam berwarna putih dengan titik di kiri-atas.",
    "tip": "Periksa tiga komponen secara berurutan: jumlah sisi bangun utama, warna arsiran, dan pergeseran titik di pojok kotak."
  },
  {
    "id": "tiu-fig-013",
    "subPattern": "analogi-gambar",
    "difficulty": "sedang",
    "prompt": "Tentukan kelanjutan analogi figural berikut (pola perubahan Gambar 1 ke 2 berlaku juga dari Gambar 3 ke 4):\n[FIG:shape=pentagon|rot=90|fill=white|corner=SE|inner=plus|label=1] -> [FIG:shape=hexagon|rot=90|fill=black|corner=SW|inner=plus|label=2] :: [FIG:shape=triangle|rot=90|fill=white|corner=NW|inner=cross|label=3] -> [FIG:shape=question|label=?]\nPilih gambar ke-4 yang paling tepat.",
    "options": [
      "[FIG:shape=square|rot=270|fill=black|corner=NE|inner=cross] Persegi, hitam, arah 270°, isi tanda silang, titik di kanan-atas",
      "[FIG:shape=square|rot=270|fill=white|corner=SE|inner=cross] Persegi, putih, arah 270°, isi tanda silang, titik di kanan-bawah",
      "[FIG:shape=square|rot=90|fill=black|corner=NE|inner=cross] Persegi, hitam, arah 90°, isi tanda silang, titik di kanan-atas",
      "[FIG:shape=square|rot=270|fill=black|corner=SE|inner=cross] Persegi, hitam, arah 270°, isi tanda silang, titik di kanan-bawah",
      "[FIG:shape=square|rot=90|fill=white|corner=SE|inner=cross] Persegi, putih, arah 90°, isi tanda silang, titik di kanan-bawah"
    ],
    "answer": "C",
    "explanation": "Dari Gambar 1 ke 2: jumlah sisi bangun utama bertambah 1 (Segilima → Segienam), warna berubah menjadi hitam, dan titik sudut bergeser 1 langkah searah jarum jam. Maka Gambar 3 (Segitiga) berubah menjadi Persegi berwarna hitam dengan titik di kanan-atas.",
    "tip": "Periksa tiga komponen secara berurutan: jumlah sisi bangun utama, warna arsiran, dan pergeseran titik di pojok kotak."
  },
  {
    "id": "tiu-fig-014",
    "subPattern": "analogi-gambar",
    "difficulty": "sedang",
    "prompt": "Tentukan kelanjutan analogi figural berikut (pola perubahan Gambar 1 ke 2 berlaku juga dari Gambar 3 ke 4):\n[FIG:shape=triangle|rot=135|fill=striped|corner=SW|inner=cross|label=1] -> [FIG:shape=square|rot=135|fill=white|corner=NW|inner=cross|label=2] :: [FIG:shape=square|rot=135|fill=striped|corner=NE|inner=dot|label=3] -> [FIG:shape=question|label=?]\nPilih gambar ke-4 yang paling tepat.",
    "options": [
      "[FIG:shape=pentagon|rot=135|fill=black|corner=SE|inner=dot] Segilima, hitam, arah 135°, isi titik hitam, titik di kanan-bawah",
      "[FIG:shape=pentagon|rot=135|fill=black|corner=SW|inner=dot] Segilima, hitam, arah 135°, isi titik hitam, titik di kiri-bawah",
      "[FIG:shape=pentagon|rot=225|fill=black|corner=SW|inner=dot] Segilima, hitam, arah 225°, isi titik hitam, titik di kiri-bawah",
      "[FIG:shape=pentagon|rot=135|fill=white|corner=SE|inner=dot] Segilima, putih, arah 135°, isi titik hitam, titik di kanan-bawah",
      "[FIG:shape=pentagon|rot=225|fill=white|corner=SW|inner=dot] Segilima, putih, arah 225°, isi titik hitam, titik di kiri-bawah"
    ],
    "answer": "D",
    "explanation": "Dari Gambar 1 ke 2: jumlah sisi bangun utama bertambah 1 (Segitiga → Persegi), warna berubah menjadi putih, dan titik sudut bergeser 1 langkah searah jarum jam. Maka Gambar 3 (Persegi) berubah menjadi Segilima berwarna putih dengan titik di kanan-bawah.",
    "tip": "Periksa tiga komponen secara berurutan: jumlah sisi bangun utama, warna arsiran, dan pergeseran titik di pojok kotak."
  },
  {
    "id": "tiu-fig-015",
    "subPattern": "analogi-gambar",
    "difficulty": "sedang",
    "prompt": "Tentukan kelanjutan analogi figural berikut (pola perubahan Gambar 1 ke 2 berlaku juga dari Gambar 3 ke 4):\n[FIG:shape=square|rot=180|fill=white|corner=NW|inner=dot|label=1] -> [FIG:shape=pentagon|rot=180|fill=black|corner=NE|inner=dot|label=2] :: [FIG:shape=pentagon|rot=180|fill=white|corner=SE|inner=circle|label=3] -> [FIG:shape=question|label=?]\nPilih gambar ke-4 yang paling tepat.",
    "options": [
      "[FIG:shape=hexagon|rot=0|fill=black|corner=SW|inner=circle] Segienam, hitam, arah 0°, isi lingkaran, titik di kiri-bawah",
      "[FIG:shape=hexagon|rot=0|fill=white|corner=NW|inner=circle] Segienam, putih, arah 0°, isi lingkaran, titik di kiri-atas",
      "[FIG:shape=hexagon|rot=270|fill=white|corner=NW|inner=circle] Segienam, putih, arah 270°, isi lingkaran, titik di kiri-atas",
      "[FIG:shape=hexagon|rot=180|fill=white|corner=NE|inner=circle] Segienam, putih, arah 180°, isi lingkaran, titik di kanan-atas",
      "[FIG:shape=hexagon|rot=180|fill=black|corner=SW|inner=circle] Segienam, hitam, arah 180°, isi lingkaran, titik di kiri-bawah"
    ],
    "answer": "E",
    "explanation": "Dari Gambar 1 ke 2: jumlah sisi bangun utama bertambah 1 (Persegi → Segilima), warna berubah menjadi hitam, dan titik sudut bergeser 1 langkah searah jarum jam. Maka Gambar 3 (Segilima) berubah menjadi Segienam berwarna hitam dengan titik di kiri-bawah.",
    "tip": "Periksa tiga komponen secara berurutan: jumlah sisi bangun utama, warna arsiran, dan pergeseran titik di pojok kotak."
  },
  {
    "id": "tiu-fig-016",
    "subPattern": "analogi-gambar",
    "difficulty": "sedang",
    "prompt": "Tentukan kelanjutan analogi figural berikut (pola perubahan Gambar 1 ke 2 berlaku juga dari Gambar 3 ke 4):\n[FIG:shape=pentagon|rot=225|fill=striped|corner=NE|inner=circle|label=1] -> [FIG:shape=hexagon|rot=225|fill=white|corner=SE|inner=circle|label=2] :: [FIG:shape=triangle|rot=225|fill=striped|corner=SW|inner=plus|label=3] -> [FIG:shape=question|label=?]\nPilih gambar ke-4 yang paling tepat.",
    "options": [
      "[FIG:shape=square|rot=225|fill=white|corner=NW|inner=plus] Persegi, putih, arah 225°, isi tanda tambah, titik di kiri-atas",
      "[FIG:shape=square|rot=315|fill=white|corner=NW|inner=plus] Persegi, putih, arah 315°, isi tanda tambah, titik di kiri-atas",
      "[FIG:shape=square|rot=315|fill=black|corner=NE|inner=plus] Persegi, hitam, arah 315°, isi tanda tambah, titik di kanan-atas",
      "[FIG:shape=square|rot=315|fill=white|corner=NE|inner=plus] Persegi, putih, arah 315°, isi tanda tambah, titik di kanan-atas",
      "[FIG:shape=square|rot=225|fill=black|corner=NE|inner=plus] Persegi, hitam, arah 225°, isi tanda tambah, titik di kanan-atas"
    ],
    "answer": "A",
    "explanation": "Dari Gambar 1 ke 2: jumlah sisi bangun utama bertambah 1 (Segilima → Segienam), warna berubah menjadi putih, dan titik sudut bergeser 1 langkah searah jarum jam. Maka Gambar 3 (Segitiga) berubah menjadi Persegi berwarna putih dengan titik di kiri-atas.",
    "tip": "Periksa tiga komponen secara berurutan: jumlah sisi bangun utama, warna arsiran, dan pergeseran titik di pojok kotak."
  },
  {
    "id": "tiu-fig-017",
    "subPattern": "analogi-gambar",
    "difficulty": "sedang",
    "prompt": "Tentukan kelanjutan analogi figural berikut (pola perubahan Gambar 1 ke 2 berlaku juga dari Gambar 3 ke 4):\n[FIG:shape=triangle|rot=270|fill=white|corner=SE|inner=plus|label=1] -> [FIG:shape=square|rot=270|fill=black|corner=SW|inner=plus|label=2] :: [FIG:shape=square|rot=270|fill=white|corner=NW|inner=cross|label=3] -> [FIG:shape=question|label=?]\nPilih gambar ke-4 yang paling tepat.",
    "options": [
      "[FIG:shape=pentagon|rot=270|fill=white|corner=NE|inner=cross] Segilima, putih, arah 270°, isi tanda silang, titik di kanan-atas",
      "[FIG:shape=pentagon|rot=270|fill=black|corner=NE|inner=cross] Segilima, hitam, arah 270°, isi tanda silang, titik di kanan-atas",
      "[FIG:shape=pentagon|rot=270|fill=white|corner=SE|inner=cross] Segilima, putih, arah 270°, isi tanda silang, titik di kanan-bawah",
      "[FIG:shape=pentagon|rot=90|fill=white|corner=SE|inner=cross] Segilima, putih, arah 90°, isi tanda silang, titik di kanan-bawah",
      "[FIG:shape=pentagon|rot=90|fill=black|corner=SE|inner=cross] Segilima, hitam, arah 90°, isi tanda silang, titik di kanan-bawah"
    ],
    "answer": "B",
    "explanation": "Dari Gambar 1 ke 2: jumlah sisi bangun utama bertambah 1 (Segitiga → Persegi), warna berubah menjadi hitam, dan titik sudut bergeser 1 langkah searah jarum jam. Maka Gambar 3 (Persegi) berubah menjadi Segilima berwarna hitam dengan titik di kanan-atas.",
    "tip": "Periksa tiga komponen secara berurutan: jumlah sisi bangun utama, warna arsiran, dan pergeseran titik di pojok kotak."
  },
  {
    "id": "tiu-fig-018",
    "subPattern": "analogi-gambar",
    "difficulty": "sedang",
    "prompt": "Tentukan kelanjutan analogi figural berikut (pola perubahan Gambar 1 ke 2 berlaku juga dari Gambar 3 ke 4):\n[FIG:shape=square|rot=315|fill=striped|corner=SW|inner=cross|label=1] -> [FIG:shape=pentagon|rot=315|fill=white|corner=NW|inner=cross|label=2] :: [FIG:shape=pentagon|rot=315|fill=striped|corner=NE|inner=dot|label=3] -> [FIG:shape=question|label=?]\nPilih gambar ke-4 yang paling tepat.",
    "options": [
      "[FIG:shape=hexagon|rot=45|fill=white|corner=SE|inner=dot] Segienam, putih, arah 45°, isi titik hitam, titik di kanan-bawah",
      "[FIG:shape=hexagon|rot=45|fill=black|corner=SW|inner=dot] Segienam, hitam, arah 45°, isi titik hitam, titik di kiri-bawah",
      "[FIG:shape=hexagon|rot=315|fill=white|corner=SE|inner=dot] Segienam, putih, arah 315°, isi titik hitam, titik di kanan-bawah",
      "[FIG:shape=hexagon|rot=0|fill=black|corner=SW|inner=dot] Segienam, hitam, arah 0°, isi titik hitam, titik di kiri-bawah",
      "[FIG:shape=hexagon|rot=315|fill=black|corner=NW|inner=dot] Segienam, hitam, arah 315°, isi titik hitam, titik di kiri-atas"
    ],
    "answer": "C",
    "explanation": "Dari Gambar 1 ke 2: jumlah sisi bangun utama bertambah 1 (Persegi → Segilima), warna berubah menjadi putih, dan titik sudut bergeser 1 langkah searah jarum jam. Maka Gambar 3 (Segilima) berubah menjadi Segienam berwarna putih dengan titik di kanan-bawah.",
    "tip": "Periksa tiga komponen secara berurutan: jumlah sisi bangun utama, warna arsiran, dan pergeseran titik di pojok kotak."
  },
  {
    "id": "tiu-fig-019",
    "subPattern": "analogi-gambar",
    "difficulty": "sedang",
    "prompt": "Tentukan kelanjutan analogi figural berikut (pola perubahan Gambar 1 ke 2 berlaku juga dari Gambar 3 ke 4):\n[FIG:shape=pentagon|rot=0|fill=white|corner=NW|inner=dot|label=1] -> [FIG:shape=hexagon|rot=0|fill=black|corner=NE|inner=dot|label=2] :: [FIG:shape=triangle|rot=0|fill=white|corner=SE|inner=circle|label=3] -> [FIG:shape=question|label=?]\nPilih gambar ke-4 yang paling tepat.",
    "options": [
      "[FIG:shape=square|rot=180|fill=black|corner=SW|inner=circle] Persegi, hitam, arah 180°, isi lingkaran, titik di kiri-bawah",
      "[FIG:shape=square|rot=180|fill=white|corner=NW|inner=circle] Persegi, putih, arah 180°, isi lingkaran, titik di kiri-atas",
      "[FIG:shape=square|rot=180|fill=black|corner=NW|inner=circle] Persegi, hitam, arah 180°, isi lingkaran, titik di kiri-atas",
      "[FIG:shape=square|rot=0|fill=black|corner=SW|inner=circle] Persegi, hitam, arah 0°, isi lingkaran, titik di kiri-bawah",
      "[FIG:shape=square|rot=0|fill=white|corner=NW|inner=circle] Persegi, putih, arah 0°, isi lingkaran, titik di kiri-atas"
    ],
    "answer": "D",
    "explanation": "Dari Gambar 1 ke 2: jumlah sisi bangun utama bertambah 1 (Segilima → Segienam), warna berubah menjadi hitam, dan titik sudut bergeser 1 langkah searah jarum jam. Maka Gambar 3 (Segitiga) berubah menjadi Persegi berwarna hitam dengan titik di kiri-bawah.",
    "tip": "Periksa tiga komponen secara berurutan: jumlah sisi bangun utama, warna arsiran, dan pergeseran titik di pojok kotak."
  },
  {
    "id": "tiu-fig-020",
    "subPattern": "analogi-gambar",
    "difficulty": "sedang",
    "prompt": "Tentukan kelanjutan analogi figural berikut (pola perubahan Gambar 1 ke 2 berlaku juga dari Gambar 3 ke 4):\n[FIG:shape=triangle|rot=45|fill=striped|corner=NE|inner=circle|label=1] -> [FIG:shape=square|rot=45|fill=white|corner=SE|inner=circle|label=2] :: [FIG:shape=square|rot=45|fill=striped|corner=SW|inner=plus|label=3] -> [FIG:shape=question|label=?]\nPilih gambar ke-4 yang paling tepat.",
    "options": [
      "[FIG:shape=pentagon|rot=45|fill=black|corner=NW|inner=plus] Segilima, hitam, arah 45°, isi tanda tambah, titik di kiri-atas",
      "[FIG:shape=pentagon|rot=45|fill=black|corner=NE|inner=plus] Segilima, hitam, arah 45°, isi tanda tambah, titik di kanan-atas",
      "[FIG:shape=pentagon|rot=135|fill=black|corner=NE|inner=plus] Segilima, hitam, arah 135°, isi tanda tambah, titik di kanan-atas",
      "[FIG:shape=pentagon|rot=135|fill=white|corner=NE|inner=plus] Segilima, putih, arah 135°, isi tanda tambah, titik di kanan-atas",
      "[FIG:shape=pentagon|rot=45|fill=white|corner=NW|inner=plus] Segilima, putih, arah 45°, isi tanda tambah, titik di kiri-atas"
    ],
    "answer": "E",
    "explanation": "Dari Gambar 1 ke 2: jumlah sisi bangun utama bertambah 1 (Segitiga → Persegi), warna berubah menjadi putih, dan titik sudut bergeser 1 langkah searah jarum jam. Maka Gambar 3 (Persegi) berubah menjadi Segilima berwarna putih dengan titik di kiri-atas.",
    "tip": "Periksa tiga komponen secara berurutan: jumlah sisi bangun utama, warna arsiran, dan pergeseran titik di pojok kotak."
  },
  {
    "id": "tiu-fig-021",
    "subPattern": "analogi-gambar",
    "difficulty": "sulit",
    "prompt": "Analisis hubungan perubahan pada pasangan gambar pertama untuk menentukan pasangan gambar kedua:\n[FIG:shape=lshape|rot=0|fill=white|inner=dot|corner=NW|dots=1|label=1] -> [FIG:shape=lshape|rot=90|fill=black|inner=dot|corner=SE|dots=3|label=2] :: [FIG:shape=lshape|rot=90|fill=white|inner=dot|corner=NE|dots=2|label=3] -> [FIG:shape=question|label=?]\nManakah opsi yang tepat menggantikan tanda tanya (?)?",
    "options": [
      "[FIG:shape=lshape|rot=180|fill=black|inner=dot|corner=SW|dots=4] Bangun L, hitam, arah 180°, isi titik hitam, titik di kiri-bawah, 4 titik",
      "[FIG:shape=lshape|rot=0|fill=black|inner=dot|corner=SW|dots=3] Bangun L, hitam, arah 0°, isi titik hitam, titik di kiri-bawah, 3 titik",
      "[FIG:shape=lshape|rot=0|fill=white|inner=dot|corner=NW|dots=3] Bangun L, putih, arah 0°, isi titik hitam, titik di kiri-atas, 3 titik",
      "[FIG:shape=lshape|rot=270|fill=white|inner=dot|corner=NW|dots=3] Bangun L, putih, arah 270°, isi titik hitam, titik di kiri-atas, 3 titik",
      "[FIG:shape=lshape|rot=180|fill=white|inner=dot|corner=NE|dots=4] Bangun L, putih, arah 180°, isi titik hitam, titik di kanan-atas, 4 titik"
    ],
    "answer": "A",
    "explanation": "Aturan transformasi dari Gambar 1 ke Gambar 2: (1) bangun diputar +90° searah jarum jam, (2) warna berubah dari putih ke hitam, (3) titik sudut berpindah ke sudut berseberangan (diagonal), dan (4) jumlah titik bawah bertambah +2. Terapkan pada Gambar 3 sehingga diperoleh arah 180°, warna hitam, titik sudut di kiri-bawah, dan 4 titik.",
    "tip": "Gunakan teknik eliminasi satu per satu dari atribut yang paling mudah diamati: warna, jumlah titik bawah, posisi sudut diagonal, lalu sudut rotasi."
  },
  {
    "id": "tiu-fig-022",
    "subPattern": "analogi-gambar",
    "difficulty": "sulit",
    "prompt": "Analisis hubungan perubahan pada pasangan gambar pertama untuk menentukan pasangan gambar kedua:\n[FIG:shape=tshape|rot=90|fill=white|inner=circle|corner=NE|dots=2|label=1] -> [FIG:shape=tshape|rot=180|fill=black|inner=circle|corner=SW|dots=4|label=2] :: [FIG:shape=tshape|rot=180|fill=white|inner=circle|corner=SE|dots=3|label=3] -> [FIG:shape=question|label=?]\nManakah opsi yang tepat menggantikan tanda tanya (?)?",
    "options": [
      "[FIG:shape=tshape|rot=90|fill=black|inner=circle|corner=NW|dots=4] Bangun T, hitam, arah 90°, isi lingkaran, titik di kiri-atas, 4 titik",
      "[FIG:shape=tshape|rot=270|fill=black|inner=circle|corner=NW|dots=5] Bangun T, hitam, arah 270°, isi lingkaran, titik di kiri-atas, 5 titik",
      "[FIG:shape=tshape|rot=90|fill=white|inner=circle|corner=NE|dots=4] Bangun T, putih, arah 90°, isi lingkaran, titik di kanan-atas, 4 titik",
      "[FIG:shape=tshape|rot=90|fill=black|inner=circle|corner=NE|dots=4] Bangun T, hitam, arah 90°, isi lingkaran, titik di kanan-atas, 4 titik",
      "[FIG:shape=tshape|rot=270|fill=white|inner=circle|corner=NE|dots=5] Bangun T, putih, arah 270°, isi lingkaran, titik di kanan-atas, 5 titik"
    ],
    "answer": "B",
    "explanation": "Aturan transformasi dari Gambar 1 ke Gambar 2: (1) bangun diputar +90° searah jarum jam, (2) warna berubah dari putih ke hitam, (3) titik sudut berpindah ke sudut berseberangan (diagonal), dan (4) jumlah titik bawah bertambah +2. Terapkan pada Gambar 3 sehingga diperoleh arah 270°, warna hitam, titik sudut di kiri-atas, dan 5 titik.",
    "tip": "Gunakan teknik eliminasi satu per satu dari atribut yang paling mudah diamati: warna, jumlah titik bawah, posisi sudut diagonal, lalu sudut rotasi."
  },
  {
    "id": "tiu-fig-023",
    "subPattern": "analogi-gambar",
    "difficulty": "sulit",
    "prompt": "Analisis hubungan perubahan pada pasangan gambar pertama untuk menentukan pasangan gambar kedua:\n[FIG:shape=lshape|rot=180|fill=white|inner=plus|corner=SE|dots=3|label=1] -> [FIG:shape=lshape|rot=270|fill=black|inner=plus|corner=NW|dots=5|label=2] :: [FIG:shape=lshape|rot=270|fill=white|inner=plus|corner=SW|dots=1|label=3] -> [FIG:shape=question|label=?]\nManakah opsi yang tepat menggantikan tanda tanya (?)?",
    "options": [
      "[FIG:shape=lshape|rot=0|fill=white|inner=plus|corner=NE|dots=2] Bangun L, putih, arah 0°, isi tanda tambah, titik di kanan-atas, 2 titik",
      "[FIG:shape=lshape|rot=0|fill=white|inner=plus|corner=SE|dots=2] Bangun L, putih, arah 0°, isi tanda tambah, titik di kanan-bawah, 2 titik",
      "[FIG:shape=lshape|rot=0|fill=black|inner=plus|corner=NE|dots=3] Bangun L, hitam, arah 0°, isi tanda tambah, titik di kanan-atas, 3 titik",
      "[FIG:shape=lshape|rot=180|fill=white|inner=plus|corner=SE|dots=2] Bangun L, putih, arah 180°, isi tanda tambah, titik di kanan-bawah, 2 titik",
      "[FIG:shape=lshape|rot=180|fill=black|inner=plus|corner=SE|dots=3] Bangun L, hitam, arah 180°, isi tanda tambah, titik di kanan-bawah, 3 titik"
    ],
    "answer": "C",
    "explanation": "Aturan transformasi dari Gambar 1 ke Gambar 2: (1) bangun diputar +90° searah jarum jam, (2) warna berubah dari putih ke hitam, (3) titik sudut berpindah ke sudut berseberangan (diagonal), dan (4) jumlah titik bawah bertambah +2. Terapkan pada Gambar 3 sehingga diperoleh arah 0°, warna hitam, titik sudut di kanan-atas, dan 3 titik.",
    "tip": "Gunakan teknik eliminasi satu per satu dari atribut yang paling mudah diamati: warna, jumlah titik bawah, posisi sudut diagonal, lalu sudut rotasi."
  },
  {
    "id": "tiu-fig-024",
    "subPattern": "analogi-gambar",
    "difficulty": "sulit",
    "prompt": "Analisis hubungan perubahan pada pasangan gambar pertama untuk menentukan pasangan gambar kedua:\n[FIG:shape=tshape|rot=270|fill=white|inner=cross|corner=SW|dots=1|label=1] -> [FIG:shape=tshape|rot=0|fill=black|inner=cross|corner=NE|dots=3|label=2] :: [FIG:shape=tshape|rot=0|fill=white|inner=cross|corner=NW|dots=2|label=3] -> [FIG:shape=question|label=?]\nManakah opsi yang tepat menggantikan tanda tanya (?)?",
    "options": [
      "[FIG:shape=tshape|rot=270|fill=black|inner=cross|corner=SE|dots=3] Bangun T, hitam, arah 270°, isi tanda silang, titik di kanan-bawah, 3 titik",
      "[FIG:shape=tshape|rot=270|fill=white|inner=cross|corner=SW|dots=3] Bangun T, putih, arah 270°, isi tanda silang, titik di kiri-bawah, 3 titik",
      "[FIG:shape=tshape|rot=180|fill=white|inner=cross|corner=SW|dots=3] Bangun T, putih, arah 180°, isi tanda silang, titik di kiri-bawah, 3 titik",
      "[FIG:shape=tshape|rot=90|fill=black|inner=cross|corner=SE|dots=4] Bangun T, hitam, arah 90°, isi tanda silang, titik di kanan-bawah, 4 titik",
      "[FIG:shape=tshape|rot=90|fill=white|inner=cross|corner=NW|dots=4] Bangun T, putih, arah 90°, isi tanda silang, titik di kiri-atas, 4 titik"
    ],
    "answer": "D",
    "explanation": "Aturan transformasi dari Gambar 1 ke Gambar 2: (1) bangun diputar +90° searah jarum jam, (2) warna berubah dari putih ke hitam, (3) titik sudut berpindah ke sudut berseberangan (diagonal), dan (4) jumlah titik bawah bertambah +2. Terapkan pada Gambar 3 sehingga diperoleh arah 90°, warna hitam, titik sudut di kanan-bawah, dan 4 titik.",
    "tip": "Gunakan teknik eliminasi satu per satu dari atribut yang paling mudah diamati: warna, jumlah titik bawah, posisi sudut diagonal, lalu sudut rotasi."
  },
  {
    "id": "tiu-fig-025",
    "subPattern": "analogi-gambar",
    "difficulty": "sulit",
    "prompt": "Analisis hubungan perubahan pada pasangan gambar pertama untuk menentukan pasangan gambar kedua:\n[FIG:shape=lshape|rot=0|fill=white|inner=dot|corner=NW|dots=2|label=1] -> [FIG:shape=lshape|rot=90|fill=black|inner=dot|corner=SE|dots=4|label=2] :: [FIG:shape=lshape|rot=90|fill=white|inner=dot|corner=NE|dots=3|label=3] -> [FIG:shape=question|label=?]\nManakah opsi yang tepat menggantikan tanda tanya (?)?",
    "options": [
      "[FIG:shape=lshape|rot=0|fill=black|inner=dot|corner=SW|dots=4] Bangun L, hitam, arah 0°, isi titik hitam, titik di kiri-bawah, 4 titik",
      "[FIG:shape=lshape|rot=0|fill=white|inner=dot|corner=NW|dots=4] Bangun L, putih, arah 0°, isi titik hitam, titik di kiri-atas, 4 titik",
      "[FIG:shape=lshape|rot=0|fill=black|inner=dot|corner=NW|dots=4] Bangun L, hitam, arah 0°, isi titik hitam, titik di kiri-atas, 4 titik",
      "[FIG:shape=lshape|rot=180|fill=white|inner=dot|corner=NW|dots=5] Bangun L, putih, arah 180°, isi titik hitam, titik di kiri-atas, 5 titik",
      "[FIG:shape=lshape|rot=180|fill=black|inner=dot|corner=SW|dots=5] Bangun L, hitam, arah 180°, isi titik hitam, titik di kiri-bawah, 5 titik"
    ],
    "answer": "E",
    "explanation": "Aturan transformasi dari Gambar 1 ke Gambar 2: (1) bangun diputar +90° searah jarum jam, (2) warna berubah dari putih ke hitam, (3) titik sudut berpindah ke sudut berseberangan (diagonal), dan (4) jumlah titik bawah bertambah +2. Terapkan pada Gambar 3 sehingga diperoleh arah 180°, warna hitam, titik sudut di kiri-bawah, dan 5 titik.",
    "tip": "Gunakan teknik eliminasi satu per satu dari atribut yang paling mudah diamati: warna, jumlah titik bawah, posisi sudut diagonal, lalu sudut rotasi."
  },
  {
    "id": "tiu-fig-026",
    "subPattern": "analogi-gambar",
    "difficulty": "sulit",
    "prompt": "Analisis hubungan perubahan pada pasangan gambar pertama untuk menentukan pasangan gambar kedua:\n[FIG:shape=tshape|rot=90|fill=white|inner=circle|corner=NE|dots=3|label=1] -> [FIG:shape=tshape|rot=180|fill=black|inner=circle|corner=SW|dots=5|label=2] :: [FIG:shape=tshape|rot=180|fill=white|inner=circle|corner=SE|dots=1|label=3] -> [FIG:shape=question|label=?]\nManakah opsi yang tepat menggantikan tanda tanya (?)?",
    "options": [
      "[FIG:shape=tshape|rot=270|fill=black|inner=circle|corner=NW|dots=3] Bangun T, hitam, arah 270°, isi lingkaran, titik di kiri-atas, 3 titik",
      "[FIG:shape=tshape|rot=270|fill=white|inner=circle|corner=NW|dots=2] Bangun T, putih, arah 270°, isi lingkaran, titik di kiri-atas, 2 titik",
      "[FIG:shape=tshape|rot=270|fill=white|inner=circle|corner=NE|dots=2] Bangun T, putih, arah 270°, isi lingkaran, titik di kanan-atas, 2 titik",
      "[FIG:shape=tshape|rot=90|fill=white|inner=circle|corner=NE|dots=2] Bangun T, putih, arah 90°, isi lingkaran, titik di kanan-atas, 2 titik",
      "[FIG:shape=tshape|rot=90|fill=black|inner=circle|corner=NE|dots=3] Bangun T, hitam, arah 90°, isi lingkaran, titik di kanan-atas, 3 titik"
    ],
    "answer": "A",
    "explanation": "Aturan transformasi dari Gambar 1 ke Gambar 2: (1) bangun diputar +90° searah jarum jam, (2) warna berubah dari putih ke hitam, (3) titik sudut berpindah ke sudut berseberangan (diagonal), dan (4) jumlah titik bawah bertambah +2. Terapkan pada Gambar 3 sehingga diperoleh arah 270°, warna hitam, titik sudut di kiri-atas, dan 3 titik.",
    "tip": "Gunakan teknik eliminasi satu per satu dari atribut yang paling mudah diamati: warna, jumlah titik bawah, posisi sudut diagonal, lalu sudut rotasi."
  },
  {
    "id": "tiu-fig-027",
    "subPattern": "analogi-gambar",
    "difficulty": "sulit",
    "prompt": "Analisis hubungan perubahan pada pasangan gambar pertama untuk menentukan pasangan gambar kedua:\n[FIG:shape=lshape|rot=180|fill=white|inner=plus|corner=SE|dots=1|label=1] -> [FIG:shape=lshape|rot=270|fill=black|inner=plus|corner=NW|dots=3|label=2] :: [FIG:shape=lshape|rot=270|fill=white|inner=plus|corner=SW|dots=2|label=3] -> [FIG:shape=question|label=?]\nManakah opsi yang tepat menggantikan tanda tanya (?)?",
    "options": [
      "[FIG:shape=lshape|rot=180|fill=black|inner=plus|corner=NE|dots=3] Bangun L, hitam, arah 180°, isi tanda tambah, titik di kanan-atas, 3 titik",
      "[FIG:shape=lshape|rot=0|fill=black|inner=plus|corner=NE|dots=4] Bangun L, hitam, arah 0°, isi tanda tambah, titik di kanan-atas, 4 titik",
      "[FIG:shape=lshape|rot=180|fill=white|inner=plus|corner=SE|dots=3] Bangun L, putih, arah 180°, isi tanda tambah, titik di kanan-bawah, 3 titik",
      "[FIG:shape=lshape|rot=90|fill=white|inner=plus|corner=SE|dots=3] Bangun L, putih, arah 90°, isi tanda tambah, titik di kanan-bawah, 3 titik",
      "[FIG:shape=lshape|rot=0|fill=white|inner=plus|corner=SW|dots=4] Bangun L, putih, arah 0°, isi tanda tambah, titik di kiri-bawah, 4 titik"
    ],
    "answer": "B",
    "explanation": "Aturan transformasi dari Gambar 1 ke Gambar 2: (1) bangun diputar +90° searah jarum jam, (2) warna berubah dari putih ke hitam, (3) titik sudut berpindah ke sudut berseberangan (diagonal), dan (4) jumlah titik bawah bertambah +2. Terapkan pada Gambar 3 sehingga diperoleh arah 0°, warna hitam, titik sudut di kanan-atas, dan 4 titik.",
    "tip": "Gunakan teknik eliminasi satu per satu dari atribut yang paling mudah diamati: warna, jumlah titik bawah, posisi sudut diagonal, lalu sudut rotasi."
  },
  {
    "id": "tiu-fig-028",
    "subPattern": "analogi-gambar",
    "difficulty": "sulit",
    "prompt": "Analisis hubungan perubahan pada pasangan gambar pertama untuk menentukan pasangan gambar kedua:\n[FIG:shape=tshape|rot=270|fill=white|inner=cross|corner=SW|dots=2|label=1] -> [FIG:shape=tshape|rot=0|fill=black|inner=cross|corner=NE|dots=4|label=2] :: [FIG:shape=tshape|rot=0|fill=white|inner=cross|corner=NW|dots=3|label=3] -> [FIG:shape=question|label=?]\nManakah opsi yang tepat menggantikan tanda tanya (?)?",
    "options": [
      "[FIG:shape=tshape|rot=270|fill=black|inner=cross|corner=SE|dots=4] Bangun T, hitam, arah 270°, isi tanda silang, titik di kanan-bawah, 4 titik",
      "[FIG:shape=tshape|rot=270|fill=white|inner=cross|corner=SW|dots=4] Bangun T, putih, arah 270°, isi tanda silang, titik di kiri-bawah, 4 titik",
      "[FIG:shape=tshape|rot=90|fill=black|inner=cross|corner=SE|dots=5] Bangun T, hitam, arah 90°, isi tanda silang, titik di kanan-bawah, 5 titik",
      "[FIG:shape=tshape|rot=270|fill=black|inner=cross|corner=SW|dots=4] Bangun T, hitam, arah 270°, isi tanda silang, titik di kiri-bawah, 4 titik",
      "[FIG:shape=tshape|rot=90|fill=white|inner=cross|corner=SW|dots=5] Bangun T, putih, arah 90°, isi tanda silang, titik di kiri-bawah, 5 titik"
    ],
    "answer": "C",
    "explanation": "Aturan transformasi dari Gambar 1 ke Gambar 2: (1) bangun diputar +90° searah jarum jam, (2) warna berubah dari putih ke hitam, (3) titik sudut berpindah ke sudut berseberangan (diagonal), dan (4) jumlah titik bawah bertambah +2. Terapkan pada Gambar 3 sehingga diperoleh arah 90°, warna hitam, titik sudut di kanan-bawah, dan 5 titik.",
    "tip": "Gunakan teknik eliminasi satu per satu dari atribut yang paling mudah diamati: warna, jumlah titik bawah, posisi sudut diagonal, lalu sudut rotasi."
  },
  {
    "id": "tiu-fig-029",
    "subPattern": "analogi-gambar",
    "difficulty": "sulit",
    "prompt": "Analisis hubungan perubahan pada pasangan gambar pertama untuk menentukan pasangan gambar kedua:\n[FIG:shape=lshape|rot=0|fill=white|inner=dot|corner=NW|dots=3|label=1] -> [FIG:shape=lshape|rot=90|fill=black|inner=dot|corner=SE|dots=5|label=2] :: [FIG:shape=lshape|rot=90|fill=white|inner=dot|corner=NE|dots=1|label=3] -> [FIG:shape=question|label=?]\nManakah opsi yang tepat menggantikan tanda tanya (?)?",
    "options": [
      "[FIG:shape=lshape|rot=180|fill=white|inner=dot|corner=SW|dots=2] Bangun L, putih, arah 180°, isi titik hitam, titik di kiri-bawah, 2 titik",
      "[FIG:shape=lshape|rot=180|fill=white|inner=dot|corner=NW|dots=2] Bangun L, putih, arah 180°, isi titik hitam, titik di kiri-atas, 2 titik",
      "[FIG:shape=lshape|rot=0|fill=white|inner=dot|corner=NW|dots=2] Bangun L, putih, arah 0°, isi titik hitam, titik di kiri-atas, 2 titik",
      "[FIG:shape=lshape|rot=180|fill=black|inner=dot|corner=SW|dots=3] Bangun L, hitam, arah 180°, isi titik hitam, titik di kiri-bawah, 3 titik",
      "[FIG:shape=lshape|rot=0|fill=black|inner=dot|corner=NW|dots=3] Bangun L, hitam, arah 0°, isi titik hitam, titik di kiri-atas, 3 titik"
    ],
    "answer": "D",
    "explanation": "Aturan transformasi dari Gambar 1 ke Gambar 2: (1) bangun diputar +90° searah jarum jam, (2) warna berubah dari putih ke hitam, (3) titik sudut berpindah ke sudut berseberangan (diagonal), dan (4) jumlah titik bawah bertambah +2. Terapkan pada Gambar 3 sehingga diperoleh arah 180°, warna hitam, titik sudut di kiri-bawah, dan 3 titik.",
    "tip": "Gunakan teknik eliminasi satu per satu dari atribut yang paling mudah diamati: warna, jumlah titik bawah, posisi sudut diagonal, lalu sudut rotasi."
  },
  {
    "id": "tiu-fig-030",
    "subPattern": "analogi-gambar",
    "difficulty": "sulit",
    "prompt": "Analisis hubungan perubahan pada pasangan gambar pertama untuk menentukan pasangan gambar kedua:\n[FIG:shape=tshape|rot=90|fill=white|inner=circle|corner=NE|dots=1|label=1] -> [FIG:shape=tshape|rot=180|fill=black|inner=circle|corner=SW|dots=3|label=2] :: [FIG:shape=tshape|rot=180|fill=white|inner=circle|corner=SE|dots=2|label=3] -> [FIG:shape=question|label=?]\nManakah opsi yang tepat menggantikan tanda tanya (?)?",
    "options": [
      "[FIG:shape=tshape|rot=90|fill=black|inner=circle|corner=NW|dots=3] Bangun T, hitam, arah 90°, isi lingkaran, titik di kiri-atas, 3 titik",
      "[FIG:shape=tshape|rot=90|fill=white|inner=circle|corner=NE|dots=3] Bangun T, putih, arah 90°, isi lingkaran, titik di kanan-atas, 3 titik",
      "[FIG:shape=tshape|rot=0|fill=white|inner=circle|corner=NE|dots=3] Bangun T, putih, arah 0°, isi lingkaran, titik di kanan-atas, 3 titik",
      "[FIG:shape=tshape|rot=270|fill=white|inner=circle|corner=SE|dots=4] Bangun T, putih, arah 270°, isi lingkaran, titik di kanan-bawah, 4 titik",
      "[FIG:shape=tshape|rot=270|fill=black|inner=circle|corner=NW|dots=4] Bangun T, hitam, arah 270°, isi lingkaran, titik di kiri-atas, 4 titik"
    ],
    "answer": "E",
    "explanation": "Aturan transformasi dari Gambar 1 ke Gambar 2: (1) bangun diputar +90° searah jarum jam, (2) warna berubah dari putih ke hitam, (3) titik sudut berpindah ke sudut berseberangan (diagonal), dan (4) jumlah titik bawah bertambah +2. Terapkan pada Gambar 3 sehingga diperoleh arah 270°, warna hitam, titik sudut di kiri-atas, dan 4 titik.",
    "tip": "Gunakan teknik eliminasi satu per satu dari atribut yang paling mudah diamati: warna, jumlah titik bawah, posisi sudut diagonal, lalu sudut rotasi."
  },
  {
    "id": "tiu-fig-031",
    "subPattern": "ketidaksamaan-gambar",
    "difficulty": "mudah",
    "prompt": "Perhatikan kelima pilihan gambar pada opsi A sampai E di bawah ini (Variasi #1). Empat gambar mengikuti satu kaidah kesamaan antara bentuk poligon dan jumlah titiknya, sedangkan satu gambar menyimpang. Manakah gambar yang PALING BERBEDA (ketidaksamaan)?",
    "options": [
      "[FIG:shape=triangle|fill=white|dots=3|corner=NE] Segitiga, putih, titik di kanan-atas, 3 titik",
      "[FIG:shape=triangle|fill=white|dots=5|corner=NW] Segitiga, putih, titik di kiri-atas, 5 titik",
      "[FIG:shape=square|fill=white|dots=4|corner=NE] Persegi, putih, titik di kanan-atas, 4 titik",
      "[FIG:shape=pentagon|fill=white|dots=5|corner=SE] Segilima, putih, titik di kanan-bawah, 5 titik",
      "[FIG:shape=hexagon|fill=white|dots=6|corner=SW] Segienam, putih, titik di kiri-bawah, 6 titik"
    ],
    "answer": "B",
    "explanation": "Pada empat gambar lainnya, jumlah titik selalu sama dengan jumlah sisi bangun datar (Segitiga = 3 titik, Persegi = 4 titik, Segilima = 5 titik, Segienam = 6 titik). Gambar yang berbeda sendiri memiliki jumlah titik (5) yang tidak sesuai dengan jumlah sisi Segitiga.",
    "tip": "Pada soal ketidaksamaan poligon dan titik, hitung jumlah sisi bangun luar lalu cocokkan dengan jumlah elemen titik di dalamnya."
  },
  {
    "id": "tiu-fig-032",
    "subPattern": "ketidaksamaan-gambar",
    "difficulty": "mudah",
    "prompt": "Perhatikan kelima pilihan gambar pada opsi A sampai E di bawah ini (Variasi #2). Empat gambar mengikuti satu kaidah kesamaan antara bentuk poligon dan jumlah titiknya, sedangkan satu gambar menyimpang. Manakah gambar yang PALING BERBEDA (ketidaksamaan)?",
    "options": [
      "[FIG:shape=triangle|fill=striped|dots=3|corner=SE] Segitiga, arsir, titik di kanan-bawah, 3 titik",
      "[FIG:shape=square|fill=striped|dots=4|corner=SE] Persegi, arsir, titik di kanan-bawah, 4 titik",
      "[FIG:shape=square|fill=striped|dots=2|corner=NE] Persegi, arsir, titik di kanan-atas, 2 titik",
      "[FIG:shape=pentagon|fill=striped|dots=5|corner=SW] Segilima, arsir, titik di kiri-bawah, 5 titik",
      "[FIG:shape=hexagon|fill=striped|dots=6|corner=NW] Segienam, arsir, titik di kiri-atas, 6 titik"
    ],
    "answer": "C",
    "explanation": "Pada empat gambar lainnya, jumlah titik selalu sama dengan jumlah sisi bangun datar (Segitiga = 3 titik, Persegi = 4 titik, Segilima = 5 titik, Segienam = 6 titik). Gambar yang berbeda sendiri memiliki jumlah titik (2) yang tidak sesuai dengan jumlah sisi Persegi.",
    "tip": "Pada soal ketidaksamaan poligon dan titik, hitung jumlah sisi bangun luar lalu cocokkan dengan jumlah elemen titik di dalamnya."
  },
  {
    "id": "tiu-fig-033",
    "subPattern": "ketidaksamaan-gambar",
    "difficulty": "mudah",
    "prompt": "Perhatikan kelima pilihan gambar pada opsi A sampai E di bawah ini (Variasi #3). Empat gambar mengikuti satu kaidah kesamaan antara bentuk poligon dan jumlah titiknya, sedangkan satu gambar menyimpang. Manakah gambar yang PALING BERBEDA (ketidaksamaan)?",
    "options": [
      "[FIG:shape=triangle|fill=white|dots=3|corner=SW] Segitiga, putih, titik di kiri-bawah, 3 titik",
      "[FIG:shape=square|fill=white|dots=4|corner=SW] Persegi, putih, titik di kiri-bawah, 4 titik",
      "[FIG:shape=pentagon|fill=white|dots=5|corner=NW] Segilima, putih, titik di kiri-atas, 5 titik",
      "[FIG:shape=pentagon|fill=white|dots=3|corner=SE] Segilima, putih, titik di kanan-bawah, 3 titik",
      "[FIG:shape=hexagon|fill=white|dots=6|corner=NE] Segienam, putih, titik di kanan-atas, 6 titik"
    ],
    "answer": "D",
    "explanation": "Pada empat gambar lainnya, jumlah titik selalu sama dengan jumlah sisi bangun datar (Segitiga = 3 titik, Persegi = 4 titik, Segilima = 5 titik, Segienam = 6 titik). Gambar yang berbeda sendiri memiliki jumlah titik (3) yang tidak sesuai dengan jumlah sisi Segilima.",
    "tip": "Pada soal ketidaksamaan poligon dan titik, hitung jumlah sisi bangun luar lalu cocokkan dengan jumlah elemen titik di dalamnya."
  },
  {
    "id": "tiu-fig-034",
    "subPattern": "ketidaksamaan-gambar",
    "difficulty": "mudah",
    "prompt": "Perhatikan kelima pilihan gambar pada opsi A sampai E di bawah ini (Variasi #4). Empat gambar mengikuti satu kaidah kesamaan antara bentuk poligon dan jumlah titiknya, sedangkan satu gambar menyimpang. Manakah gambar yang PALING BERBEDA (ketidaksamaan)?",
    "options": [
      "[FIG:shape=triangle|fill=striped|dots=3|corner=NW] Segitiga, arsir, titik di kiri-atas, 3 titik",
      "[FIG:shape=square|fill=striped|dots=4|corner=NW] Persegi, arsir, titik di kiri-atas, 4 titik",
      "[FIG:shape=pentagon|fill=striped|dots=5|corner=NE] Segilima, arsir, titik di kanan-atas, 5 titik",
      "[FIG:shape=hexagon|fill=striped|dots=6|corner=SE] Segienam, arsir, titik di kanan-bawah, 6 titik",
      "[FIG:shape=hexagon|fill=striped|dots=4|corner=SW] Segienam, arsir, titik di kiri-bawah, 4 titik"
    ],
    "answer": "E",
    "explanation": "Pada empat gambar lainnya, jumlah titik selalu sama dengan jumlah sisi bangun datar (Segitiga = 3 titik, Persegi = 4 titik, Segilima = 5 titik, Segienam = 6 titik). Gambar yang berbeda sendiri memiliki jumlah titik (4) yang tidak sesuai dengan jumlah sisi Segienam.",
    "tip": "Pada soal ketidaksamaan poligon dan titik, hitung jumlah sisi bangun luar lalu cocokkan dengan jumlah elemen titik di dalamnya."
  },
  {
    "id": "tiu-fig-035",
    "subPattern": "ketidaksamaan-gambar",
    "difficulty": "mudah",
    "prompt": "Perhatikan kelima pilihan gambar pada opsi A sampai E di bawah ini (Variasi #5). Empat gambar mengikuti satu kaidah kesamaan antara bentuk poligon dan jumlah titiknya, sedangkan satu gambar menyimpang. Manakah gambar yang PALING BERBEDA (ketidaksamaan)?",
    "options": [
      "[FIG:shape=triangle|fill=white|dots=5|corner=NW] Segitiga, putih, titik di kiri-atas, 5 titik",
      "[FIG:shape=triangle|fill=white|dots=3|corner=NE] Segitiga, putih, titik di kanan-atas, 3 titik",
      "[FIG:shape=square|fill=white|dots=4|corner=NE] Persegi, putih, titik di kanan-atas, 4 titik",
      "[FIG:shape=pentagon|fill=white|dots=5|corner=SE] Segilima, putih, titik di kanan-bawah, 5 titik",
      "[FIG:shape=hexagon|fill=white|dots=6|corner=SW] Segienam, putih, titik di kiri-bawah, 6 titik"
    ],
    "answer": "A",
    "explanation": "Pada empat gambar lainnya, jumlah titik selalu sama dengan jumlah sisi bangun datar (Segitiga = 3 titik, Persegi = 4 titik, Segilima = 5 titik, Segienam = 6 titik). Gambar yang berbeda sendiri memiliki jumlah titik (5) yang tidak sesuai dengan jumlah sisi Segitiga.",
    "tip": "Pada soal ketidaksamaan poligon dan titik, hitung jumlah sisi bangun luar lalu cocokkan dengan jumlah elemen titik di dalamnya."
  },
  {
    "id": "tiu-fig-036",
    "subPattern": "ketidaksamaan-gambar",
    "difficulty": "mudah",
    "prompt": "Perhatikan kelima pilihan gambar pada opsi A sampai E di bawah ini (Variasi #6). Empat gambar mengikuti satu kaidah kesamaan antara bentuk poligon dan jumlah titiknya, sedangkan satu gambar menyimpang. Manakah gambar yang PALING BERBEDA (ketidaksamaan)?",
    "options": [
      "[FIG:shape=triangle|fill=striped|dots=3|corner=SE] Segitiga, arsir, titik di kanan-bawah, 3 titik",
      "[FIG:shape=square|fill=striped|dots=2|corner=NE] Persegi, arsir, titik di kanan-atas, 2 titik",
      "[FIG:shape=square|fill=striped|dots=4|corner=SE] Persegi, arsir, titik di kanan-bawah, 4 titik",
      "[FIG:shape=pentagon|fill=striped|dots=5|corner=SW] Segilima, arsir, titik di kiri-bawah, 5 titik",
      "[FIG:shape=hexagon|fill=striped|dots=6|corner=NW] Segienam, arsir, titik di kiri-atas, 6 titik"
    ],
    "answer": "B",
    "explanation": "Pada empat gambar lainnya, jumlah titik selalu sama dengan jumlah sisi bangun datar (Segitiga = 3 titik, Persegi = 4 titik, Segilima = 5 titik, Segienam = 6 titik). Gambar yang berbeda sendiri memiliki jumlah titik (2) yang tidak sesuai dengan jumlah sisi Persegi.",
    "tip": "Pada soal ketidaksamaan poligon dan titik, hitung jumlah sisi bangun luar lalu cocokkan dengan jumlah elemen titik di dalamnya."
  },
  {
    "id": "tiu-fig-037",
    "subPattern": "ketidaksamaan-gambar",
    "difficulty": "mudah",
    "prompt": "Perhatikan kelima pilihan gambar pada opsi A sampai E di bawah ini (Variasi #7). Empat gambar mengikuti satu kaidah kesamaan antara bentuk poligon dan jumlah titiknya, sedangkan satu gambar menyimpang. Manakah gambar yang PALING BERBEDA (ketidaksamaan)?",
    "options": [
      "[FIG:shape=triangle|fill=white|dots=3|corner=SW] Segitiga, putih, titik di kiri-bawah, 3 titik",
      "[FIG:shape=square|fill=white|dots=4|corner=SW] Persegi, putih, titik di kiri-bawah, 4 titik",
      "[FIG:shape=pentagon|fill=white|dots=3|corner=SE] Segilima, putih, titik di kanan-bawah, 3 titik",
      "[FIG:shape=pentagon|fill=white|dots=5|corner=NW] Segilima, putih, titik di kiri-atas, 5 titik",
      "[FIG:shape=hexagon|fill=white|dots=6|corner=NE] Segienam, putih, titik di kanan-atas, 6 titik"
    ],
    "answer": "C",
    "explanation": "Pada empat gambar lainnya, jumlah titik selalu sama dengan jumlah sisi bangun datar (Segitiga = 3 titik, Persegi = 4 titik, Segilima = 5 titik, Segienam = 6 titik). Gambar yang berbeda sendiri memiliki jumlah titik (3) yang tidak sesuai dengan jumlah sisi Segilima.",
    "tip": "Pada soal ketidaksamaan poligon dan titik, hitung jumlah sisi bangun luar lalu cocokkan dengan jumlah elemen titik di dalamnya."
  },
  {
    "id": "tiu-fig-038",
    "subPattern": "ketidaksamaan-gambar",
    "difficulty": "mudah",
    "prompt": "Perhatikan kelima pilihan gambar pada opsi A sampai E di bawah ini (Variasi #8). Empat gambar mengikuti satu kaidah kesamaan antara bentuk poligon dan jumlah titiknya, sedangkan satu gambar menyimpang. Manakah gambar yang PALING BERBEDA (ketidaksamaan)?",
    "options": [
      "[FIG:shape=triangle|fill=striped|dots=3|corner=NW] Segitiga, arsir, titik di kiri-atas, 3 titik",
      "[FIG:shape=square|fill=striped|dots=4|corner=NW] Persegi, arsir, titik di kiri-atas, 4 titik",
      "[FIG:shape=pentagon|fill=striped|dots=5|corner=NE] Segilima, arsir, titik di kanan-atas, 5 titik",
      "[FIG:shape=hexagon|fill=striped|dots=4|corner=SW] Segienam, arsir, titik di kiri-bawah, 4 titik",
      "[FIG:shape=hexagon|fill=striped|dots=6|corner=SE] Segienam, arsir, titik di kanan-bawah, 6 titik"
    ],
    "answer": "D",
    "explanation": "Pada empat gambar lainnya, jumlah titik selalu sama dengan jumlah sisi bangun datar (Segitiga = 3 titik, Persegi = 4 titik, Segilima = 5 titik, Segienam = 6 titik). Gambar yang berbeda sendiri memiliki jumlah titik (4) yang tidak sesuai dengan jumlah sisi Segienam.",
    "tip": "Pada soal ketidaksamaan poligon dan titik, hitung jumlah sisi bangun luar lalu cocokkan dengan jumlah elemen titik di dalamnya."
  },
  {
    "id": "tiu-fig-039",
    "subPattern": "ketidaksamaan-gambar",
    "difficulty": "mudah",
    "prompt": "Perhatikan kelima pilihan gambar pada opsi A sampai E di bawah ini (Variasi #9). Empat gambar mengikuti satu kaidah kesamaan antara bentuk poligon dan jumlah titiknya, sedangkan satu gambar menyimpang. Manakah gambar yang PALING BERBEDA (ketidaksamaan)?",
    "options": [
      "[FIG:shape=triangle|fill=white|dots=3|corner=NE] Segitiga, putih, titik di kanan-atas, 3 titik",
      "[FIG:shape=square|fill=white|dots=4|corner=NE] Persegi, putih, titik di kanan-atas, 4 titik",
      "[FIG:shape=pentagon|fill=white|dots=5|corner=SE] Segilima, putih, titik di kanan-bawah, 5 titik",
      "[FIG:shape=hexagon|fill=white|dots=6|corner=SW] Segienam, putih, titik di kiri-bawah, 6 titik",
      "[FIG:shape=triangle|fill=white|dots=5|corner=NW] Segitiga, putih, titik di kiri-atas, 5 titik"
    ],
    "answer": "E",
    "explanation": "Pada empat gambar lainnya, jumlah titik selalu sama dengan jumlah sisi bangun datar (Segitiga = 3 titik, Persegi = 4 titik, Segilima = 5 titik, Segienam = 6 titik). Gambar yang berbeda sendiri memiliki jumlah titik (5) yang tidak sesuai dengan jumlah sisi Segitiga.",
    "tip": "Pada soal ketidaksamaan poligon dan titik, hitung jumlah sisi bangun luar lalu cocokkan dengan jumlah elemen titik di dalamnya."
  },
  {
    "id": "tiu-fig-040",
    "subPattern": "ketidaksamaan-gambar",
    "difficulty": "mudah",
    "prompt": "Perhatikan kelima pilihan gambar pada opsi A sampai E di bawah ini (Variasi #10). Empat gambar mengikuti satu kaidah kesamaan antara bentuk poligon dan jumlah titiknya, sedangkan satu gambar menyimpang. Manakah gambar yang PALING BERBEDA (ketidaksamaan)?",
    "options": [
      "[FIG:shape=square|fill=striped|dots=2|corner=NE] Persegi, arsir, titik di kanan-atas, 2 titik",
      "[FIG:shape=triangle|fill=striped|dots=3|corner=SE] Segitiga, arsir, titik di kanan-bawah, 3 titik",
      "[FIG:shape=square|fill=striped|dots=4|corner=SE] Persegi, arsir, titik di kanan-bawah, 4 titik",
      "[FIG:shape=pentagon|fill=striped|dots=5|corner=SW] Segilima, arsir, titik di kiri-bawah, 5 titik",
      "[FIG:shape=hexagon|fill=striped|dots=6|corner=NW] Segienam, arsir, titik di kiri-atas, 6 titik"
    ],
    "answer": "A",
    "explanation": "Pada empat gambar lainnya, jumlah titik selalu sama dengan jumlah sisi bangun datar (Segitiga = 3 titik, Persegi = 4 titik, Segilima = 5 titik, Segienam = 6 titik). Gambar yang berbeda sendiri memiliki jumlah titik (2) yang tidak sesuai dengan jumlah sisi Persegi.",
    "tip": "Pada soal ketidaksamaan poligon dan titik, hitung jumlah sisi bangun luar lalu cocokkan dengan jumlah elemen titik di dalamnya."
  },
  {
    "id": "tiu-fig-041",
    "subPattern": "ketidaksamaan-gambar",
    "difficulty": "sedang",
    "prompt": "Identifikasi satu gambar yang PALING BERBEDA di antara kelima opsi gambar berikut (Seri Rotasi Relatif #1) jika gambar hanya boleh diputar di bidang datar tanpa dicerminkan:",
    "options": [
      "[FIG:shape=arrow|rot=0|fill=white|inner=dot|corner=NE] Panah, putih, arah 0°, isi titik hitam, titik di kanan-atas",
      "[FIG:shape=arrow|rot=0|fill=white|inner=dot|corner=SW] Panah, putih, arah 0°, isi titik hitam, titik di kiri-bawah",
      "[FIG:shape=arrow|rot=90|fill=white|inner=dot|corner=SE] Panah, putih, arah 90°, isi titik hitam, titik di kanan-bawah",
      "[FIG:shape=arrow|rot=180|fill=white|inner=dot|corner=SW] Panah, putih, arah 180°, isi titik hitam, titik di kiri-bawah",
      "[FIG:shape=arrow|rot=270|fill=white|inner=dot|corner=NW] Panah, putih, arah 270°, isi titik hitam, titik di kiri-atas"
    ],
    "answer": "B",
    "explanation": "Jika keempat gambar normal diputar menghadap ke atas (0°), titik sudut selalu berada di pojok kanan-atas (NE) dari arah ujung panah. Hanya pada satu gambar titik sudutnya berada di sisi berlawanan (kiri-bawah saat panah di 0°), sehingga tidak mungkin diperoleh melalui rotasi biasa.",
    "tip": "Putar semua gambar secara mental sehingga ujung panah menghadap ke atas (0°), lalu periksa apakah titik sudut berada di sisi kanan atau sisi kiri panah."
  },
  {
    "id": "tiu-fig-042",
    "subPattern": "ketidaksamaan-gambar",
    "difficulty": "sedang",
    "prompt": "Identifikasi satu gambar yang PALING BERBEDA di antara kelima opsi gambar berikut (Seri Rotasi Relatif #2) jika gambar hanya boleh diputar di bidang datar tanpa dicerminkan:",
    "options": [
      "[FIG:shape=arrow|rot=0|fill=black|inner=circle|corner=NE] Panah, hitam, arah 0°, isi lingkaran, titik di kanan-atas",
      "[FIG:shape=arrow|rot=90|fill=black|inner=circle|corner=SE] Panah, hitam, arah 90°, isi lingkaran, titik di kanan-bawah",
      "[FIG:shape=arrow|rot=90|fill=black|inner=circle|corner=NW] Panah, hitam, arah 90°, isi lingkaran, titik di kiri-atas",
      "[FIG:shape=arrow|rot=180|fill=black|inner=circle|corner=SW] Panah, hitam, arah 180°, isi lingkaran, titik di kiri-bawah",
      "[FIG:shape=arrow|rot=270|fill=black|inner=circle|corner=NW] Panah, hitam, arah 270°, isi lingkaran, titik di kiri-atas"
    ],
    "answer": "C",
    "explanation": "Jika keempat gambar normal diputar menghadap ke atas (0°), titik sudut selalu berada di pojok kanan-atas (NE) dari arah ujung panah. Hanya pada satu gambar titik sudutnya berada di sisi berlawanan (kiri-atas saat panah di 90°), sehingga tidak mungkin diperoleh melalui rotasi biasa.",
    "tip": "Putar semua gambar secara mental sehingga ujung panah menghadap ke atas (0°), lalu periksa apakah titik sudut berada di sisi kanan atau sisi kiri panah."
  },
  {
    "id": "tiu-fig-043",
    "subPattern": "ketidaksamaan-gambar",
    "difficulty": "sedang",
    "prompt": "Identifikasi satu gambar yang PALING BERBEDA di antara kelima opsi gambar berikut (Seri Rotasi Relatif #3) jika gambar hanya boleh diputar di bidang datar tanpa dicerminkan:",
    "options": [
      "[FIG:shape=arrow|rot=0|fill=striped|inner=plus|corner=NE] Panah, arsir, arah 0°, isi tanda tambah, titik di kanan-atas",
      "[FIG:shape=arrow|rot=90|fill=striped|inner=plus|corner=SE] Panah, arsir, arah 90°, isi tanda tambah, titik di kanan-bawah",
      "[FIG:shape=arrow|rot=180|fill=striped|inner=plus|corner=SW] Panah, arsir, arah 180°, isi tanda tambah, titik di kiri-bawah",
      "[FIG:shape=arrow|rot=180|fill=striped|inner=plus|corner=NE] Panah, arsir, arah 180°, isi tanda tambah, titik di kanan-atas",
      "[FIG:shape=arrow|rot=270|fill=striped|inner=plus|corner=NW] Panah, arsir, arah 270°, isi tanda tambah, titik di kiri-atas"
    ],
    "answer": "D",
    "explanation": "Jika keempat gambar normal diputar menghadap ke atas (0°), titik sudut selalu berada di pojok kanan-atas (NE) dari arah ujung panah. Hanya pada satu gambar titik sudutnya berada di sisi berlawanan (kanan-atas saat panah di 180°), sehingga tidak mungkin diperoleh melalui rotasi biasa.",
    "tip": "Putar semua gambar secara mental sehingga ujung panah menghadap ke atas (0°), lalu periksa apakah titik sudut berada di sisi kanan atau sisi kiri panah."
  },
  {
    "id": "tiu-fig-044",
    "subPattern": "ketidaksamaan-gambar",
    "difficulty": "sedang",
    "prompt": "Identifikasi satu gambar yang PALING BERBEDA di antara kelima opsi gambar berikut (Seri Rotasi Relatif #4) jika gambar hanya boleh diputar di bidang datar tanpa dicerminkan:",
    "options": [
      "[FIG:shape=arrow|rot=0|fill=white|inner=cross|corner=NE] Panah, putih, arah 0°, isi tanda silang, titik di kanan-atas",
      "[FIG:shape=arrow|rot=90|fill=white|inner=cross|corner=SE] Panah, putih, arah 90°, isi tanda silang, titik di kanan-bawah",
      "[FIG:shape=arrow|rot=180|fill=white|inner=cross|corner=SW] Panah, putih, arah 180°, isi tanda silang, titik di kiri-bawah",
      "[FIG:shape=arrow|rot=270|fill=white|inner=cross|corner=NW] Panah, putih, arah 270°, isi tanda silang, titik di kiri-atas",
      "[FIG:shape=arrow|rot=270|fill=white|inner=cross|corner=SE] Panah, putih, arah 270°, isi tanda silang, titik di kanan-bawah"
    ],
    "answer": "E",
    "explanation": "Jika keempat gambar normal diputar menghadap ke atas (0°), titik sudut selalu berada di pojok kanan-atas (NE) dari arah ujung panah. Hanya pada satu gambar titik sudutnya berada di sisi berlawanan (kanan-bawah saat panah di 270°), sehingga tidak mungkin diperoleh melalui rotasi biasa.",
    "tip": "Putar semua gambar secara mental sehingga ujung panah menghadap ke atas (0°), lalu periksa apakah titik sudut berada di sisi kanan atau sisi kiri panah."
  },
  {
    "id": "tiu-fig-045",
    "subPattern": "ketidaksamaan-gambar",
    "difficulty": "sedang",
    "prompt": "Identifikasi satu gambar yang PALING BERBEDA di antara kelima opsi gambar berikut (Seri Rotasi Relatif #5) jika gambar hanya boleh diputar di bidang datar tanpa dicerminkan:",
    "options": [
      "[FIG:shape=arrow|rot=0|fill=black|inner=dot|corner=SW] Panah, hitam, arah 0°, isi titik hitam, titik di kiri-bawah",
      "[FIG:shape=arrow|rot=0|fill=black|inner=dot|corner=NE] Panah, hitam, arah 0°, isi titik hitam, titik di kanan-atas",
      "[FIG:shape=arrow|rot=90|fill=black|inner=dot|corner=SE] Panah, hitam, arah 90°, isi titik hitam, titik di kanan-bawah",
      "[FIG:shape=arrow|rot=180|fill=black|inner=dot|corner=SW] Panah, hitam, arah 180°, isi titik hitam, titik di kiri-bawah",
      "[FIG:shape=arrow|rot=270|fill=black|inner=dot|corner=NW] Panah, hitam, arah 270°, isi titik hitam, titik di kiri-atas"
    ],
    "answer": "A",
    "explanation": "Jika keempat gambar normal diputar menghadap ke atas (0°), titik sudut selalu berada di pojok kanan-atas (NE) dari arah ujung panah. Hanya pada satu gambar titik sudutnya berada di sisi berlawanan (kiri-bawah saat panah di 0°), sehingga tidak mungkin diperoleh melalui rotasi biasa.",
    "tip": "Putar semua gambar secara mental sehingga ujung panah menghadap ke atas (0°), lalu periksa apakah titik sudut berada di sisi kanan atau sisi kiri panah."
  },
  {
    "id": "tiu-fig-046",
    "subPattern": "ketidaksamaan-gambar",
    "difficulty": "sedang",
    "prompt": "Identifikasi satu gambar yang PALING BERBEDA di antara kelima opsi gambar berikut (Seri Rotasi Relatif #6) jika gambar hanya boleh diputar di bidang datar tanpa dicerminkan:",
    "options": [
      "[FIG:shape=arrow|rot=0|fill=striped|inner=circle|corner=NE] Panah, arsir, arah 0°, isi lingkaran, titik di kanan-atas",
      "[FIG:shape=arrow|rot=90|fill=striped|inner=circle|corner=NW] Panah, arsir, arah 90°, isi lingkaran, titik di kiri-atas",
      "[FIG:shape=arrow|rot=90|fill=striped|inner=circle|corner=SE] Panah, arsir, arah 90°, isi lingkaran, titik di kanan-bawah",
      "[FIG:shape=arrow|rot=180|fill=striped|inner=circle|corner=SW] Panah, arsir, arah 180°, isi lingkaran, titik di kiri-bawah",
      "[FIG:shape=arrow|rot=270|fill=striped|inner=circle|corner=NW] Panah, arsir, arah 270°, isi lingkaran, titik di kiri-atas"
    ],
    "answer": "B",
    "explanation": "Jika keempat gambar normal diputar menghadap ke atas (0°), titik sudut selalu berada di pojok kanan-atas (NE) dari arah ujung panah. Hanya pada satu gambar titik sudutnya berada di sisi berlawanan (kiri-atas saat panah di 90°), sehingga tidak mungkin diperoleh melalui rotasi biasa.",
    "tip": "Putar semua gambar secara mental sehingga ujung panah menghadap ke atas (0°), lalu periksa apakah titik sudut berada di sisi kanan atau sisi kiri panah."
  },
  {
    "id": "tiu-fig-047",
    "subPattern": "ketidaksamaan-gambar",
    "difficulty": "sedang",
    "prompt": "Identifikasi satu gambar yang PALING BERBEDA di antara kelima opsi gambar berikut (Seri Rotasi Relatif #7) jika gambar hanya boleh diputar di bidang datar tanpa dicerminkan:",
    "options": [
      "[FIG:shape=arrow|rot=0|fill=white|inner=plus|corner=NE] Panah, putih, arah 0°, isi tanda tambah, titik di kanan-atas",
      "[FIG:shape=arrow|rot=90|fill=white|inner=plus|corner=SE] Panah, putih, arah 90°, isi tanda tambah, titik di kanan-bawah",
      "[FIG:shape=arrow|rot=180|fill=white|inner=plus|corner=NE] Panah, putih, arah 180°, isi tanda tambah, titik di kanan-atas",
      "[FIG:shape=arrow|rot=180|fill=white|inner=plus|corner=SW] Panah, putih, arah 180°, isi tanda tambah, titik di kiri-bawah",
      "[FIG:shape=arrow|rot=270|fill=white|inner=plus|corner=NW] Panah, putih, arah 270°, isi tanda tambah, titik di kiri-atas"
    ],
    "answer": "C",
    "explanation": "Jika keempat gambar normal diputar menghadap ke atas (0°), titik sudut selalu berada di pojok kanan-atas (NE) dari arah ujung panah. Hanya pada satu gambar titik sudutnya berada di sisi berlawanan (kanan-atas saat panah di 180°), sehingga tidak mungkin diperoleh melalui rotasi biasa.",
    "tip": "Putar semua gambar secara mental sehingga ujung panah menghadap ke atas (0°), lalu periksa apakah titik sudut berada di sisi kanan atau sisi kiri panah."
  },
  {
    "id": "tiu-fig-048",
    "subPattern": "ketidaksamaan-gambar",
    "difficulty": "sedang",
    "prompt": "Identifikasi satu gambar yang PALING BERBEDA di antara kelima opsi gambar berikut (Seri Rotasi Relatif #8) jika gambar hanya boleh diputar di bidang datar tanpa dicerminkan:",
    "options": [
      "[FIG:shape=arrow|rot=0|fill=black|inner=cross|corner=NE] Panah, hitam, arah 0°, isi tanda silang, titik di kanan-atas",
      "[FIG:shape=arrow|rot=90|fill=black|inner=cross|corner=SE] Panah, hitam, arah 90°, isi tanda silang, titik di kanan-bawah",
      "[FIG:shape=arrow|rot=180|fill=black|inner=cross|corner=SW] Panah, hitam, arah 180°, isi tanda silang, titik di kiri-bawah",
      "[FIG:shape=arrow|rot=270|fill=black|inner=cross|corner=SE] Panah, hitam, arah 270°, isi tanda silang, titik di kanan-bawah",
      "[FIG:shape=arrow|rot=270|fill=black|inner=cross|corner=NW] Panah, hitam, arah 270°, isi tanda silang, titik di kiri-atas"
    ],
    "answer": "D",
    "explanation": "Jika keempat gambar normal diputar menghadap ke atas (0°), titik sudut selalu berada di pojok kanan-atas (NE) dari arah ujung panah. Hanya pada satu gambar titik sudutnya berada di sisi berlawanan (kanan-bawah saat panah di 270°), sehingga tidak mungkin diperoleh melalui rotasi biasa.",
    "tip": "Putar semua gambar secara mental sehingga ujung panah menghadap ke atas (0°), lalu periksa apakah titik sudut berada di sisi kanan atau sisi kiri panah."
  },
  {
    "id": "tiu-fig-049",
    "subPattern": "ketidaksamaan-gambar",
    "difficulty": "sedang",
    "prompt": "Identifikasi satu gambar yang PALING BERBEDA di antara kelima opsi gambar berikut (Seri Rotasi Relatif #9) jika gambar hanya boleh diputar di bidang datar tanpa dicerminkan:",
    "options": [
      "[FIG:shape=arrow|rot=0|fill=striped|inner=dot|corner=NE] Panah, arsir, arah 0°, isi titik hitam, titik di kanan-atas",
      "[FIG:shape=arrow|rot=90|fill=striped|inner=dot|corner=SE] Panah, arsir, arah 90°, isi titik hitam, titik di kanan-bawah",
      "[FIG:shape=arrow|rot=180|fill=striped|inner=dot|corner=SW] Panah, arsir, arah 180°, isi titik hitam, titik di kiri-bawah",
      "[FIG:shape=arrow|rot=270|fill=striped|inner=dot|corner=NW] Panah, arsir, arah 270°, isi titik hitam, titik di kiri-atas",
      "[FIG:shape=arrow|rot=0|fill=striped|inner=dot|corner=SW] Panah, arsir, arah 0°, isi titik hitam, titik di kiri-bawah"
    ],
    "answer": "E",
    "explanation": "Jika keempat gambar normal diputar menghadap ke atas (0°), titik sudut selalu berada di pojok kanan-atas (NE) dari arah ujung panah. Hanya pada satu gambar titik sudutnya berada di sisi berlawanan (kiri-bawah saat panah di 0°), sehingga tidak mungkin diperoleh melalui rotasi biasa.",
    "tip": "Putar semua gambar secara mental sehingga ujung panah menghadap ke atas (0°), lalu periksa apakah titik sudut berada di sisi kanan atau sisi kiri panah."
  },
  {
    "id": "tiu-fig-050",
    "subPattern": "ketidaksamaan-gambar",
    "difficulty": "sedang",
    "prompt": "Identifikasi satu gambar yang PALING BERBEDA di antara kelima opsi gambar berikut (Seri Rotasi Relatif #10) jika gambar hanya boleh diputar di bidang datar tanpa dicerminkan:",
    "options": [
      "[FIG:shape=arrow|rot=90|fill=white|inner=circle|corner=NW] Panah, putih, arah 90°, isi lingkaran, titik di kiri-atas",
      "[FIG:shape=arrow|rot=0|fill=white|inner=circle|corner=NE] Panah, putih, arah 0°, isi lingkaran, titik di kanan-atas",
      "[FIG:shape=arrow|rot=90|fill=white|inner=circle|corner=SE] Panah, putih, arah 90°, isi lingkaran, titik di kanan-bawah",
      "[FIG:shape=arrow|rot=180|fill=white|inner=circle|corner=SW] Panah, putih, arah 180°, isi lingkaran, titik di kiri-bawah",
      "[FIG:shape=arrow|rot=270|fill=white|inner=circle|corner=NW] Panah, putih, arah 270°, isi lingkaran, titik di kiri-atas"
    ],
    "answer": "A",
    "explanation": "Jika keempat gambar normal diputar menghadap ke atas (0°), titik sudut selalu berada di pojok kanan-atas (NE) dari arah ujung panah. Hanya pada satu gambar titik sudutnya berada di sisi berlawanan (kiri-atas saat panah di 90°), sehingga tidak mungkin diperoleh melalui rotasi biasa.",
    "tip": "Putar semua gambar secara mental sehingga ujung panah menghadap ke atas (0°), lalu periksa apakah titik sudut berada di sisi kanan atau sisi kiri panah."
  }
];
