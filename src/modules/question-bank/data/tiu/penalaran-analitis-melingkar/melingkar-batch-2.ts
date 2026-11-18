import type { QuestionDraft } from "@/modules/question-bank/domain/question";

export const melingkarBatch2Drafts: readonly QuestionDraft[] = [
  {
    "id": "tiu-pam-051",
    "subPattern": "posisi-kanan-dan-kiri",
    "difficulty": "sulit",
    "prompt": "Dalam sesi koordinasi tim audit inspektorat, delapan peserta rapat (Kevin, Lina, Mario, Nadia, Oscar, Putra, Rani, Seno) duduk di meja bundar 8 kursi menghadap ke pusat meja. Diketahui:\n(1) Oscar duduk berhadapan dengan Kevin.\n(2) Rani duduk dua kursi di sebelah kanan Oscar.\n(3) Mario duduk berhadapan dengan Rani.\n(4) Putra duduk di antara Oscar dan Rani.\n(5) Lina duduk tepat di sebelah kanan Kevin, sedangkan Seno tidak duduk di samping Mario.\nSiapakah yang duduk tepat di sebelah kanan Putra?",
    "options": [
      "Oscar",
      "Rani",
      "Seno",
      "Kevin",
      "Lina"
    ],
    "answer": "B",
    "explanation": "Tetapkan K1=Oscar dan K5=Kevin. Dua kursi di kanan K1 adalah K3=Rani, dan seberangnya adalah K7=Mario. Di antara K1 dan K3 adalah K2=Putra. Tepat di kanan K5 adalah K6=Lina. Tersisa K4 dan K8 untuk Seno dan Nadia; karena Seno tidak di samping Mario (K7), maka K4=Seno dan K8=Nadia. Jadi tepat di sebelah kanan Putra adalah Rani.",
    "tip": "Petakan kursi bernomor 1 sampai 8 terlebih dahulu untuk petunjuk pasti, lalu gunakan syarat negatif ('tidak di samping') pada dua kursi terakhir."
  },
  {
    "id": "tiu-pam-052",
    "subPattern": "posisi-kanan-dan-kiri",
    "difficulty": "sulit",
    "prompt": "Saat rapat pimpinan unit pelayanan terpadu, delapan peserta rapat (Taufik, Uli, Vicky, Winda, Yogi, Zakia, Arman, Bela) duduk di meja bundar 8 kursi menghadap ke pusat meja. Diketahui:\n(1) Zakia duduk berhadapan dengan Uli.\n(2) Bela duduk dua kursi di sebelah kanan Zakia.\n(3) Winda duduk berhadapan dengan Bela.\n(4) Arman duduk di antara Zakia dan Bela.\n(5) Vicky duduk tepat di sebelah kanan Uli, sedangkan Taufik tidak duduk di samping Winda.\nSiapakah yang duduk tepat di sebelah kanan Bela?",
    "options": [
      "Zakia",
      "Arman",
      "Taufik",
      "Uli",
      "Vicky"
    ],
    "answer": "C",
    "explanation": "Tetapkan K1=Zakia dan K5=Uli. Dua kursi di kanan K1 adalah K3=Bela, dan seberangnya adalah K7=Winda. Di antara K1 dan K3 adalah K2=Arman. Tepat di kanan K5 adalah K6=Vicky. Tersisa K4 dan K8 untuk Taufik dan Yogi; karena Taufik tidak di samping Winda (K7), maka K4=Taufik dan K8=Yogi. Jadi tepat di sebelah kanan Bela adalah Taufik.",
    "tip": "Petakan kursi bernomor 1 sampai 8 terlebih dahulu untuk petunjuk pasti, lalu gunakan syarat negatif ('tidak di samping') pada dua kursi terakhir."
  },
  {
    "id": "tiu-pam-053",
    "subPattern": "posisi-kanan-dan-kiri",
    "difficulty": "sulit",
    "prompt": "Dalam forum grup terfokus (FGD) seleksi kompetensi, delapan peserta rapat (Riko, Sari, Tomi, Umi, Vero, Wahyu, Yanti, Zaki) duduk di meja bundar 8 kursi menghadap ke pusat meja. Diketahui:\n(1) Yanti duduk berhadapan dengan Tomi.\n(2) Riko duduk dua kursi di sebelah kanan Yanti.\n(3) Vero duduk berhadapan dengan Riko.\n(4) Zaki duduk di antara Yanti dan Riko.\n(5) Umi duduk tepat di sebelah kanan Tomi, sedangkan Sari tidak duduk di samping Vero.\nSiapakah yang duduk tepat di sebelah kanan Sari?",
    "options": [
      "Yanti",
      "Zaki",
      "Riko",
      "Tomi",
      "Umi"
    ],
    "answer": "D",
    "explanation": "Tetapkan K1=Yanti dan K5=Tomi. Dua kursi di kanan K1 adalah K3=Riko, dan seberangnya adalah K7=Vero. Di antara K1 dan K3 adalah K2=Zaki. Tepat di kanan K5 adalah K6=Umi. Tersisa K4 dan K8 untuk Sari dan Wahyu; karena Sari tidak di samping Vero (K7), maka K4=Sari dan K8=Wahyu. Jadi tepat di sebelah kanan Sari adalah Tomi.",
    "tip": "Petakan kursi bernomor 1 sampai 8 terlebih dahulu untuk petunjuk pasti, lalu gunakan syarat negatif ('tidak di samping') pada dua kursi terakhir."
  },
  {
    "id": "tiu-pam-054",
    "subPattern": "posisi-kanan-dan-kiri",
    "difficulty": "sulit",
    "prompt": "Saat jamuan makan malam delegasi daerah, delapan peserta rapat (Adi, Bima, Cici, Dodi, Evi, Feri, Gina, Hendra) duduk di meja bundar 8 kursi menghadap ke pusat meja. Diketahui:\n(1) Hendra duduk berhadapan dengan Dodi.\n(2) Bima duduk dua kursi di sebelah kanan Hendra.\n(3) Feri duduk berhadapan dengan Bima.\n(4) Adi duduk di antara Hendra dan Bima.\n(5) Evi duduk tepat di sebelah kanan Dodi, sedangkan Cici tidak duduk di samping Feri.\nSiapakah yang duduk tepat di sebelah kanan Dodi?",
    "options": [
      "Hendra",
      "Adi",
      "Bima",
      "Cici",
      "Evi"
    ],
    "answer": "E",
    "explanation": "Tetapkan K1=Hendra dan K5=Dodi. Dua kursi di kanan K1 adalah K3=Bima, dan seberangnya adalah K7=Feri. Di antara K1 dan K3 adalah K2=Adi. Tepat di kanan K5 adalah K6=Evi. Tersisa K4 dan K8 untuk Cici dan Gina; karena Cici tidak di samping Feri (K7), maka K4=Cici dan K8=Gina. Jadi tepat di sebelah kanan Dodi adalah Evi.",
    "tip": "Petakan kursi bernomor 1 sampai 8 terlebih dahulu untuk petunjuk pasti, lalu gunakan syarat negatif ('tidak di samping') pada dua kursi terakhir."
  },
  {
    "id": "tiu-pam-055",
    "subPattern": "posisi-kanan-dan-kiri",
    "difficulty": "sulit",
    "prompt": "Dalam rapat panitia pelaksana diklat prajabatan, delapan peserta rapat (Aldo, Bunga, Cakra, Dinda, Erwin, Fitri, Guntur, Hilda) duduk di meja bundar 8 kursi menghadap ke pusat meja. Diketahui:\n(1) Aldo duduk berhadapan dengan Erwin.\n(2) Cakra duduk dua kursi di sebelah kanan Aldo.\n(3) Guntur duduk berhadapan dengan Cakra.\n(4) Bunga duduk di antara Aldo dan Cakra.\n(5) Fitri duduk tepat di sebelah kanan Erwin, sedangkan Dinda tidak duduk di samping Guntur.\nSiapakah yang duduk tepat di sebelah kanan Fitri?",
    "options": [
      "Guntur",
      "Aldo",
      "Bunga",
      "Cakra",
      "Dinda"
    ],
    "answer": "A",
    "explanation": "Tetapkan K1=Aldo dan K5=Erwin. Dua kursi di kanan K1 adalah K3=Cakra, dan seberangnya adalah K7=Guntur. Di antara K1 dan K3 adalah K2=Bunga. Tepat di kanan K5 adalah K6=Fitri. Tersisa K4 dan K8 untuk Dinda dan Hilda; karena Dinda tidak di samping Guntur (K7), maka K4=Dinda dan K8=Hilda. Jadi tepat di sebelah kanan Fitri adalah Guntur.",
    "tip": "Petakan kursi bernomor 1 sampai 8 terlebih dahulu untuk petunjuk pasti, lalu gunakan syarat negatif ('tidak di samping') pada dua kursi terakhir."
  },
  {
    "id": "tiu-pam-056",
    "subPattern": "posisi-kanan-dan-kiri",
    "difficulty": "sulit",
    "prompt": "Saat diskusi kelompok penyusunan modul pelatihan, delapan peserta rapat (Kevin, Lina, Mario, Nadia, Oscar, Putra, Rani, Seno) duduk di meja bundar 8 kursi menghadap ke pusat meja. Diketahui:\n(1) Lina duduk berhadapan dengan Putra.\n(2) Nadia duduk dua kursi di sebelah kanan Lina.\n(3) Seno duduk berhadapan dengan Nadia.\n(4) Mario duduk di antara Lina dan Nadia.\n(5) Rani duduk tepat di sebelah kanan Putra, sedangkan Oscar tidak duduk di samping Seno.\nSiapakah yang duduk tepat di sebelah kanan Mario?",
    "options": [
      "Lina",
      "Nadia",
      "Oscar",
      "Putra",
      "Rani"
    ],
    "answer": "B",
    "explanation": "Tetapkan K1=Lina dan K5=Putra. Dua kursi di kanan K1 adalah K3=Nadia, dan seberangnya adalah K7=Seno. Di antara K1 dan K3 adalah K2=Mario. Tepat di kanan K5 adalah K6=Rani. Tersisa K4 dan K8 untuk Oscar dan Kevin; karena Oscar tidak di samping Seno (K7), maka K4=Oscar dan K8=Kevin. Jadi tepat di sebelah kanan Mario adalah Nadia.",
    "tip": "Petakan kursi bernomor 1 sampai 8 terlebih dahulu untuk petunjuk pasti, lalu gunakan syarat negatif ('tidak di samping') pada dua kursi terakhir."
  },
  {
    "id": "tiu-pam-057",
    "subPattern": "posisi-kanan-dan-kiri",
    "difficulty": "sulit",
    "prompt": "Dalam rapat tim reformasi birokrasi instansi, delapan peserta rapat (Taufik, Uli, Vicky, Winda, Yogi, Zakia, Arman, Bela) duduk di meja bundar 8 kursi menghadap ke pusat meja. Diketahui:\n(1) Vicky duduk berhadapan dengan Arman.\n(2) Yogi duduk dua kursi di sebelah kanan Vicky.\n(3) Taufik duduk berhadapan dengan Yogi.\n(4) Winda duduk di antara Vicky dan Yogi.\n(5) Bela duduk tepat di sebelah kanan Arman, sedangkan Zakia tidak duduk di samping Taufik.\nSiapakah yang duduk tepat di sebelah kanan Yogi?",
    "options": [
      "Vicky",
      "Winda",
      "Zakia",
      "Arman",
      "Bela"
    ],
    "answer": "C",
    "explanation": "Tetapkan K1=Vicky dan K5=Arman. Dua kursi di kanan K1 adalah K3=Yogi, dan seberangnya adalah K7=Taufik. Di antara K1 dan K3 adalah K2=Winda. Tepat di kanan K5 adalah K6=Bela. Tersisa K4 dan K8 untuk Zakia dan Uli; karena Zakia tidak di samping Taufik (K7), maka K4=Zakia dan K8=Uli. Jadi tepat di sebelah kanan Yogi adalah Zakia.",
    "tip": "Petakan kursi bernomor 1 sampai 8 terlebih dahulu untuk petunjuk pasti, lalu gunakan syarat negatif ('tidak di samping') pada dua kursi terakhir."
  },
  {
    "id": "tiu-pam-058",
    "subPattern": "posisi-kanan-dan-kiri",
    "difficulty": "sulit",
    "prompt": "Saat pengarahan teknis petugas lapangan, delapan peserta rapat (Riko, Sari, Tomi, Umi, Vero, Wahyu, Yanti, Zaki) duduk di meja bundar 8 kursi menghadap ke pusat meja. Diketahui:\n(1) Umi duduk berhadapan dengan Zaki.\n(2) Wahyu duduk dua kursi di sebelah kanan Umi.\n(3) Sari duduk berhadapan dengan Wahyu.\n(4) Vero duduk di antara Umi dan Wahyu.\n(5) Riko duduk tepat di sebelah kanan Zaki, sedangkan Yanti tidak duduk di samping Sari.\nSiapakah yang duduk tepat di sebelah kanan Yanti?",
    "options": [
      "Umi",
      "Vero",
      "Wahyu",
      "Zaki",
      "Riko"
    ],
    "answer": "D",
    "explanation": "Tetapkan K1=Umi dan K5=Zaki. Dua kursi di kanan K1 adalah K3=Wahyu, dan seberangnya adalah K7=Sari. Di antara K1 dan K3 adalah K2=Vero. Tepat di kanan K5 adalah K6=Riko. Tersisa K4 dan K8 untuk Yanti dan Tomi; karena Yanti tidak di samping Sari (K7), maka K4=Yanti dan K8=Tomi. Jadi tepat di sebelah kanan Yanti adalah Zaki.",
    "tip": "Petakan kursi bernomor 1 sampai 8 terlebih dahulu untuk petunjuk pasti, lalu gunakan syarat negatif ('tidak di samping') pada dua kursi terakhir."
  },
  {
    "id": "tiu-pam-059",
    "subPattern": "posisi-kanan-dan-kiri",
    "difficulty": "sulit",
    "prompt": "Dalam rapat evaluasi kinerja di ruang bundar kementerian, delapan peserta rapat (Adi, Bima, Cici, Dodi, Evi, Feri, Gina, Hendra) duduk di meja bundar 8 kursi menghadap ke pusat meja. Diketahui:\n(1) Evi duduk berhadapan dengan Adi.\n(2) Gina duduk dua kursi di sebelah kanan Evi.\n(3) Cici duduk berhadapan dengan Gina.\n(4) Feri duduk di antara Evi dan Gina.\n(5) Bima duduk tepat di sebelah kanan Adi, sedangkan Hendra tidak duduk di samping Cici.\nSiapakah yang duduk tepat di sebelah kanan Adi?",
    "options": [
      "Evi",
      "Feri",
      "Gina",
      "Hendra",
      "Bima"
    ],
    "answer": "E",
    "explanation": "Tetapkan K1=Evi dan K5=Adi. Dua kursi di kanan K1 adalah K3=Gina, dan seberangnya adalah K7=Cici. Di antara K1 dan K3 adalah K2=Feri. Tepat di kanan K5 adalah K6=Bima. Tersisa K4 dan K8 untuk Hendra dan Dodi; karena Hendra tidak di samping Cici (K7), maka K4=Hendra dan K8=Dodi. Jadi tepat di sebelah kanan Adi adalah Bima.",
    "tip": "Petakan kursi bernomor 1 sampai 8 terlebih dahulu untuk petunjuk pasti, lalu gunakan syarat negatif ('tidak di samping') pada dua kursi terakhir."
  },
  {
    "id": "tiu-pam-060",
    "subPattern": "posisi-kanan-dan-kiri",
    "difficulty": "sulit",
    "prompt": "Saat diskusi panel penyusunan kebijakan publik, delapan peserta rapat (Aldo, Bunga, Cakra, Dinda, Erwin, Fitri, Guntur, Hilda) duduk di meja bundar 8 kursi menghadap ke pusat meja. Diketahui:\n(1) Fitri duduk berhadapan dengan Bunga.\n(2) Hilda duduk dua kursi di sebelah kanan Fitri.\n(3) Dinda duduk berhadapan dengan Hilda.\n(4) Guntur duduk di antara Fitri dan Hilda.\n(5) Cakra duduk tepat di sebelah kanan Bunga, sedangkan Aldo tidak duduk di samping Dinda.\nSiapakah yang duduk tepat di sebelah kanan Cakra?",
    "options": [
      "Dinda",
      "Fitri",
      "Guntur",
      "Hilda",
      "Aldo"
    ],
    "answer": "A",
    "explanation": "Tetapkan K1=Fitri dan K5=Bunga. Dua kursi di kanan K1 adalah K3=Hilda, dan seberangnya adalah K7=Dinda. Di antara K1 dan K3 adalah K2=Guntur. Tepat di kanan K5 adalah K6=Cakra. Tersisa K4 dan K8 untuk Aldo dan Erwin; karena Aldo tidak di samping Dinda (K7), maka K4=Aldo dan K8=Erwin. Jadi tepat di sebelah kanan Cakra adalah Dinda.",
    "tip": "Petakan kursi bernomor 1 sampai 8 terlebih dahulu untuk petunjuk pasti, lalu gunakan syarat negatif ('tidak di samping') pada dua kursi terakhir."
  },
  {
    "id": "tiu-pam-061",
    "subPattern": "syarat-berdampingan-dan-terpisah",
    "difficulty": "mudah",
    "prompt": "Dalam forum grup terfokus (FGD) seleksi kompetensi, enam anggota panitia (Mira, Nanda, Oki, Putri, Qori, Rama) duduk mengelilingi meja bundar. Diketahui:\n(1) Mira dan Nanda harus duduk berdampingan dengan Nanda di sebelah kanan Mira.\n(2) Oki duduk tepat di sebelah kanan Nanda.\n(3) Qori duduk berhadapan dengan Nanda.\n(4) Putri tidak boleh duduk di samping Mira.\nSiapakah yang duduk tepat di antara Mira dan Oki?",
    "options": [
      "Putri",
      "Qori",
      "Nanda",
      "Rama",
      "Mira"
    ],
    "answer": "C",
    "explanation": "K1=Mira dan K2=Nanda. Kanan K2 adalah K3=Oki. Berhadapan dengan K2 adalah K5=Qori. Tersisa K4 dan K6; karena Putri tidak boleh di samping Mira (K1), maka K4=Putri dan K6=Rama. Dengan demikian, yang duduk di antara Mira dan Oki adalah Nanda.",
    "tip": "Anggap pasangan yang wajib berdampingan sebagai satu kesatuan blok sebelum menempatkan anggota lain yang memiliki larangan duduk."
  },
  {
    "id": "tiu-pam-062",
    "subPattern": "syarat-berdampingan-dan-terpisah",
    "difficulty": "mudah",
    "prompt": "Saat jamuan makan malam delegasi daerah, enam anggota panitia (Sinta, Tono, Umar, Vina, Wawan, Yuni) duduk mengelilingi meja bundar. Diketahui:\n(1) Tono dan Umar harus duduk berdampingan dengan Umar di sebelah kanan Tono.\n(2) Vina duduk tepat di sebelah kanan Umar.\n(3) Yuni duduk berhadapan dengan Umar.\n(4) Wawan tidak boleh duduk di samping Tono.\nSiapakah yang duduk tepat di antara Umar dan Wawan?",
    "options": [
      "Tono",
      "Yuni",
      "Sinta",
      "Vina",
      "Umar"
    ],
    "answer": "D",
    "explanation": "K1=Tono dan K2=Umar. Kanan K2 adalah K3=Vina. Berhadapan dengan K2 adalah K5=Yuni. Tersisa K4 dan K6; karena Wawan tidak boleh di samping Tono (K1), maka K4=Wawan dan K6=Sinta. Dengan demikian, yang duduk di antara Umar dan Wawan adalah Vina.",
    "tip": "Anggap pasangan yang wajib berdampingan sebagai satu kesatuan blok sebelum menempatkan anggota lain yang memiliki larangan duduk."
  },
  {
    "id": "tiu-pam-063",
    "subPattern": "syarat-berdampingan-dan-terpisah",
    "difficulty": "mudah",
    "prompt": "Dalam rapat panitia pelaksana diklat prajabatan, enam anggota panitia (Arif, Bella, Candra, Dewi, Erlan, Fajar) duduk mengelilingi meja bundar. Diketahui:\n(1) Candra dan Dewi harus duduk berdampingan dengan Dewi di sebelah kanan Candra.\n(2) Erlan duduk tepat di sebelah kanan Dewi.\n(3) Arif duduk berhadapan dengan Dewi.\n(4) Fajar tidak boleh duduk di samping Candra.\nSiapakah yang duduk tepat di antara Erlan dan Arif?",
    "options": [
      "Candra",
      "Dewi",
      "Bella",
      "Erlan",
      "Fajar"
    ],
    "answer": "E",
    "explanation": "K1=Candra dan K2=Dewi. Kanan K2 adalah K3=Erlan. Berhadapan dengan K2 adalah K5=Arif. Tersisa K4 dan K6; karena Fajar tidak boleh di samping Candra (K1), maka K4=Fajar dan K6=Bella. Dengan demikian, yang duduk di antara Erlan dan Arif adalah Fajar.",
    "tip": "Anggap pasangan yang wajib berdampingan sebagai satu kesatuan blok sebelum menempatkan anggota lain yang memiliki larangan duduk."
  },
  {
    "id": "tiu-pam-064",
    "subPattern": "syarat-berdampingan-dan-terpisah",
    "difficulty": "mudah",
    "prompt": "Saat diskusi kelompok penyusunan modul pelatihan, enam anggota panitia (Galih, Hana, Irwan, Jihan, Kiki, Laras) duduk mengelilingi meja bundar. Diketahui:\n(1) Jihan dan Kiki harus duduk berdampingan dengan Kiki di sebelah kanan Jihan.\n(2) Laras duduk tepat di sebelah kanan Kiki.\n(3) Hana duduk berhadapan dengan Kiki.\n(4) Galih tidak boleh duduk di samping Jihan.\nSiapakah yang duduk tepat di antara Galih dan Irwan?",
    "options": [
      "Hana",
      "Jihan",
      "Kiki",
      "Laras",
      "Galih"
    ],
    "answer": "A",
    "explanation": "K1=Jihan dan K2=Kiki. Kanan K2 adalah K3=Laras. Berhadapan dengan K2 adalah K5=Hana. Tersisa K4 dan K6; karena Galih tidak boleh di samping Jihan (K1), maka K4=Galih dan K6=Irwan. Dengan demikian, yang duduk di antara Galih dan Irwan adalah Hana.",
    "tip": "Anggap pasangan yang wajib berdampingan sebagai satu kesatuan blok sebelum menempatkan anggota lain yang memiliki larangan duduk."
  },
  {
    "id": "tiu-pam-065",
    "subPattern": "syarat-berdampingan-dan-terpisah",
    "difficulty": "mudah",
    "prompt": "Dalam rapat tim reformasi birokrasi instansi, enam anggota panitia (Doni, Eka, Fani, Gilang, Hesti, Ivan) duduk mengelilingi meja bundar. Diketahui:\n(1) Hesti dan Ivan harus duduk berdampingan dengan Ivan di sebelah kanan Hesti.\n(2) Doni duduk tepat di sebelah kanan Ivan.\n(3) Fani duduk berhadapan dengan Ivan.\n(4) Eka tidak boleh duduk di samping Hesti.\nSiapakah yang duduk tepat di antara Hesti dan Doni?",
    "options": [
      "Eka",
      "Ivan",
      "Fani",
      "Gilang",
      "Hesti"
    ],
    "answer": "B",
    "explanation": "K1=Hesti dan K2=Ivan. Kanan K2 adalah K3=Doni. Berhadapan dengan K2 adalah K5=Fani. Tersisa K4 dan K6; karena Eka tidak boleh di samping Hesti (K1), maka K4=Eka dan K6=Gilang. Dengan demikian, yang duduk di antara Hesti dan Doni adalah Ivan.",
    "tip": "Anggap pasangan yang wajib berdampingan sebagai satu kesatuan blok sebelum menempatkan anggota lain yang memiliki larangan duduk."
  },
  {
    "id": "tiu-pam-066",
    "subPattern": "syarat-berdampingan-dan-terpisah",
    "difficulty": "mudah",
    "prompt": "Saat pengarahan teknis petugas lapangan, enam anggota panitia (Pandu, Rania, Satria, Tania, Ulfa, Viktor) duduk mengelilingi meja bundar. Diketahui:\n(1) Viktor dan Pandu harus duduk berdampingan dengan Pandu di sebelah kanan Viktor.\n(2) Rania duduk tepat di sebelah kanan Pandu.\n(3) Tania duduk berhadapan dengan Pandu.\n(4) Satria tidak boleh duduk di samping Viktor.\nSiapakah yang duduk tepat di antara Pandu dan Satria?",
    "options": [
      "Viktor",
      "Tania",
      "Rania",
      "Ulfa",
      "Pandu"
    ],
    "answer": "C",
    "explanation": "K1=Viktor dan K2=Pandu. Kanan K2 adalah K3=Rania. Berhadapan dengan K2 adalah K5=Tania. Tersisa K4 dan K6; karena Satria tidak boleh di samping Viktor (K1), maka K4=Satria dan K6=Ulfa. Dengan demikian, yang duduk di antara Pandu dan Satria adalah Rania.",
    "tip": "Anggap pasangan yang wajib berdampingan sebagai satu kesatuan blok sebelum menempatkan anggota lain yang memiliki larangan duduk."
  },
  {
    "id": "tiu-pam-067",
    "subPattern": "syarat-berdampingan-dan-terpisah",
    "difficulty": "mudah",
    "prompt": "Dalam rapat evaluasi kinerja di ruang bundar kementerian, enam anggota panitia (Bagas, Clara, Damar, Elsa, Ferdi, Gisela) duduk mengelilingi meja bundar. Diketahui:\n(1) Bagas dan Clara harus duduk berdampingan dengan Clara di sebelah kanan Bagas.\n(2) Damar duduk tepat di sebelah kanan Clara.\n(3) Ferdi duduk berhadapan dengan Clara.\n(4) Elsa tidak boleh duduk di samping Bagas.\nSiapakah yang duduk tepat di antara Damar dan Ferdi?",
    "options": [
      "Bagas",
      "Clara",
      "Gisela",
      "Elsa",
      "Damar"
    ],
    "answer": "D",
    "explanation": "K1=Bagas dan K2=Clara. Kanan K2 adalah K3=Damar. Berhadapan dengan K2 adalah K5=Ferdi. Tersisa K4 dan K6; karena Elsa tidak boleh di samping Bagas (K1), maka K4=Elsa dan K6=Gisela. Dengan demikian, yang duduk di antara Damar dan Ferdi adalah Elsa.",
    "tip": "Anggap pasangan yang wajib berdampingan sebagai satu kesatuan blok sebelum menempatkan anggota lain yang memiliki larangan duduk."
  },
  {
    "id": "tiu-pam-068",
    "subPattern": "syarat-berdampingan-dan-terpisah",
    "difficulty": "mudah",
    "prompt": "Saat diskusi panel penyusunan kebijakan publik, enam anggota panitia (Reza, Salsa, Tegar, Utami, Vino, Wulan) duduk mengelilingi meja bundar. Diketahui:\n(1) Salsa dan Tegar harus duduk berdampingan dengan Tegar di sebelah kanan Salsa.\n(2) Utami duduk tepat di sebelah kanan Tegar.\n(3) Wulan duduk berhadapan dengan Tegar.\n(4) Vino tidak boleh duduk di samping Salsa.\nSiapakah yang duduk tepat di antara Vino dan Reza?",
    "options": [
      "Salsa",
      "Tegar",
      "Utami",
      "Vino",
      "Wulan"
    ],
    "answer": "E",
    "explanation": "K1=Salsa dan K2=Tegar. Kanan K2 adalah K3=Utami. Berhadapan dengan K2 adalah K5=Wulan. Tersisa K4 dan K6; karena Vino tidak boleh di samping Salsa (K1), maka K4=Vino dan K6=Reza. Dengan demikian, yang duduk di antara Vino dan Reza adalah Wulan.",
    "tip": "Anggap pasangan yang wajib berdampingan sebagai satu kesatuan blok sebelum menempatkan anggota lain yang memiliki larangan duduk."
  },
  {
    "id": "tiu-pam-069",
    "subPattern": "syarat-berdampingan-dan-terpisah",
    "difficulty": "mudah",
    "prompt": "Dalam sesi koordinasi tim audit inspektorat, enam anggota panitia (Andi, Budi, Citra, Dina, Eko, Farah) duduk mengelilingi meja bundar. Diketahui:\n(1) Citra dan Dina harus duduk berdampingan dengan Dina di sebelah kanan Citra.\n(2) Eko duduk tepat di sebelah kanan Dina.\n(3) Andi duduk berhadapan dengan Dina.\n(4) Farah tidak boleh duduk di samping Citra.\nSiapakah yang duduk tepat di antara Citra dan Eko?",
    "options": [
      "Dina",
      "Farah",
      "Andi",
      "Budi",
      "Citra"
    ],
    "answer": "A",
    "explanation": "K1=Citra dan K2=Dina. Kanan K2 adalah K3=Eko. Berhadapan dengan K2 adalah K5=Andi. Tersisa K4 dan K6; karena Farah tidak boleh di samping Citra (K1), maka K4=Farah dan K6=Budi. Dengan demikian, yang duduk di antara Citra dan Eko adalah Dina.",
    "tip": "Anggap pasangan yang wajib berdampingan sebagai satu kesatuan blok sebelum menempatkan anggota lain yang memiliki larangan duduk."
  },
  {
    "id": "tiu-pam-070",
    "subPattern": "syarat-berdampingan-dan-terpisah",
    "difficulty": "mudah",
    "prompt": "Saat rapat pimpinan unit pelayanan terpadu, enam anggota panitia (Gita, Hadi, Indra, Joko, Kartika, Lukman) duduk mengelilingi meja bundar. Diketahui:\n(1) Joko dan Kartika harus duduk berdampingan dengan Kartika di sebelah kanan Joko.\n(2) Lukman duduk tepat di sebelah kanan Kartika.\n(3) Hadi duduk berhadapan dengan Kartika.\n(4) Gita tidak boleh duduk di samping Joko.\nSiapakah yang duduk tepat di antara Kartika dan Gita?",
    "options": [
      "Joko",
      "Lukman",
      "Hadi",
      "Indra",
      "Kartika"
    ],
    "answer": "B",
    "explanation": "K1=Joko dan K2=Kartika. Kanan K2 adalah K3=Lukman. Berhadapan dengan K2 adalah K5=Hadi. Tersisa K4 dan K6; karena Gita tidak boleh di samping Joko (K1), maka K4=Gita dan K6=Indra. Dengan demikian, yang duduk di antara Kartika dan Gita adalah Lukman.",
    "tip": "Anggap pasangan yang wajib berdampingan sebagai satu kesatuan blok sebelum menempatkan anggota lain yang memiliki larangan duduk."
  },
  {
    "id": "tiu-pam-071",
    "subPattern": "syarat-berdampingan-dan-terpisah",
    "difficulty": "sedang",
    "prompt": "Dalam forum grup terfokus (FGD) seleksi kompetensi, enam pejabat (Mira, Nanda, Oki, Putri, Qori, Rama) duduk melingkar menghadap ke pusat meja. Diketahui:\n(1) Qori duduk berhadapan dengan Nanda.\n(2) Rama duduk berdampingan dengan Qori dan Mira.\n(3) Putri duduk tepat di sebelah kiri Qori.\nSiapakah dua orang yang mengapit (duduk di kiri dan kanan) Nanda?",
    "options": [
      "Oki dan Putri",
      "Putri dan Rama",
      "Mira dan Oki",
      "Qori dan Mira",
      "Qori dan Oki"
    ],
    "answer": "C",
    "explanation": "Dari syarat (1) dan (2), urutan K1=Qori, K2=Rama, K3=Mira, K4=Nanda. Karena Putri di sebelah kiri Qori, maka K6=Putri dan kursi K5 ditempati oleh Oki. Jadi Nanda diapit oleh Mira dan Oki.",
    "tip": "Jika B berdampingan dengan A dan C sekaligus, maka B pasti berada di tengah-tengah antara A dan C (urutan A-B-C)."
  },
  {
    "id": "tiu-pam-072",
    "subPattern": "syarat-berdampingan-dan-terpisah",
    "difficulty": "sedang",
    "prompt": "Saat jamuan makan malam delegasi daerah, enam pejabat (Sinta, Tono, Umar, Vina, Wawan, Yuni) duduk melingkar menghadap ke pusat meja. Diketahui:\n(1) Yuni duduk berhadapan dengan Umar.\n(2) Sinta duduk berdampingan dengan Yuni dan Tono.\n(3) Wawan duduk tepat di sebelah kiri Yuni.\nSiapakah dua orang yang mengapit (duduk di kiri dan kanan) Vina?",
    "options": [
      "Wawan dan Yuni",
      "Yuni dan Tono",
      "Sinta dan Umar",
      "Umar dan Wawan",
      "Sinta dan Wawan"
    ],
    "answer": "D",
    "explanation": "Dari syarat (1) dan (2), urutan K1=Yuni, K2=Sinta, K3=Tono, K4=Umar. Karena Wawan di sebelah kiri Yuni, maka K6=Wawan dan kursi K5 ditempati oleh Vina. Jadi Vina diapit oleh Umar dan Wawan.",
    "tip": "Jika B berdampingan dengan A dan C sekaligus, maka B pasti berada di tengah-tengah antara A dan C (urutan A-B-C)."
  },
  {
    "id": "tiu-pam-073",
    "subPattern": "syarat-berdampingan-dan-terpisah",
    "difficulty": "sedang",
    "prompt": "Dalam rapat panitia pelaksana diklat prajabatan, enam pejabat (Arif, Bella, Candra, Dewi, Erlan, Fajar) duduk melingkar menghadap ke pusat meja. Diketahui:\n(1) Arif duduk berhadapan dengan Dewi.\n(2) Bella duduk berdampingan dengan Arif dan Candra.\n(3) Fajar duduk tepat di sebelah kiri Arif.\nSiapakah dua orang yang mengapit (duduk di kiri dan kanan) Bella?",
    "options": [
      "Candra dan Dewi",
      "Dewi dan Fajar",
      "Erlan dan Arif",
      "Erlan dan Candra",
      "Arif dan Candra"
    ],
    "answer": "E",
    "explanation": "Dari syarat (1) dan (2), urutan K1=Arif, K2=Bella, K3=Candra, K4=Dewi. Karena Fajar di sebelah kiri Arif, maka K6=Fajar dan kursi K5 ditempati oleh Erlan. Jadi Bella diapit oleh Arif dan Candra.",
    "tip": "Jika B berdampingan dengan A dan C sekaligus, maka B pasti berada di tengah-tengah antara A dan C (urutan A-B-C)."
  },
  {
    "id": "tiu-pam-074",
    "subPattern": "syarat-berdampingan-dan-terpisah",
    "difficulty": "sedang",
    "prompt": "Saat diskusi kelompok penyusunan modul pelatihan, enam pejabat (Galih, Hana, Irwan, Jihan, Kiki, Laras) duduk melingkar menghadap ke pusat meja. Diketahui:\n(1) Hana duduk berhadapan dengan Kiki.\n(2) Irwan duduk berdampingan dengan Hana dan Jihan.\n(3) Galih duduk tepat di sebelah kiri Hana.\nSiapakah dua orang yang mengapit (duduk di kiri dan kanan) Jihan?",
    "options": [
      "Irwan dan Kiki",
      "Kiki dan Laras",
      "Laras dan Hana",
      "Galih dan Irwan",
      "Galih dan Kiki"
    ],
    "answer": "A",
    "explanation": "Dari syarat (1) dan (2), urutan K1=Hana, K2=Irwan, K3=Jihan, K4=Kiki. Karena Galih di sebelah kiri Hana, maka K6=Galih dan kursi K5 ditempati oleh Laras. Jadi Jihan diapit oleh Irwan dan Kiki.",
    "tip": "Jika B berdampingan dengan A dan C sekaligus, maka B pasti berada di tengah-tengah antara A dan C (urutan A-B-C)."
  },
  {
    "id": "tiu-pam-075",
    "subPattern": "syarat-berdampingan-dan-terpisah",
    "difficulty": "sedang",
    "prompt": "Dalam rapat tim reformasi birokrasi instansi, enam pejabat (Doni, Eka, Fani, Gilang, Hesti, Ivan) duduk melingkar menghadap ke pusat meja. Diketahui:\n(1) Fani duduk berhadapan dengan Ivan.\n(2) Gilang duduk berdampingan dengan Fani dan Hesti.\n(3) Eka duduk tepat di sebelah kiri Fani.\nSiapakah dua orang yang mengapit (duduk di kiri dan kanan) Ivan?",
    "options": [
      "Doni dan Eka",
      "Hesti dan Doni",
      "Eka dan Gilang",
      "Fani dan Hesti",
      "Fani dan Doni"
    ],
    "answer": "B",
    "explanation": "Dari syarat (1) dan (2), urutan K1=Fani, K2=Gilang, K3=Hesti, K4=Ivan. Karena Eka di sebelah kiri Fani, maka K6=Eka dan kursi K5 ditempati oleh Doni. Jadi Ivan diapit oleh Hesti dan Doni.",
    "tip": "Jika B berdampingan dengan A dan C sekaligus, maka B pasti berada di tengah-tengah antara A dan C (urutan A-B-C)."
  },
  {
    "id": "tiu-pam-076",
    "subPattern": "syarat-berdampingan-dan-terpisah",
    "difficulty": "sedang",
    "prompt": "Saat pengarahan teknis petugas lapangan, enam pejabat (Pandu, Rania, Satria, Tania, Ulfa, Viktor) duduk melingkar menghadap ke pusat meja. Diketahui:\n(1) Tania duduk berhadapan dengan Pandu.\n(2) Ulfa duduk berdampingan dengan Tania dan Viktor.\n(3) Satria duduk tepat di sebelah kiri Tania.\nSiapakah dua orang yang mengapit (duduk di kiri dan kanan) Rania?",
    "options": [
      "Satria dan Tania",
      "Tania dan Viktor",
      "Pandu dan Satria",
      "Ulfa dan Pandu",
      "Ulfa dan Satria"
    ],
    "answer": "C",
    "explanation": "Dari syarat (1) dan (2), urutan K1=Tania, K2=Ulfa, K3=Viktor, K4=Pandu. Karena Satria di sebelah kiri Tania, maka K6=Satria dan kursi K5 ditempati oleh Rania. Jadi Rania diapit oleh Pandu dan Satria.",
    "tip": "Jika B berdampingan dengan A dan C sekaligus, maka B pasti berada di tengah-tengah antara A dan C (urutan A-B-C)."
  },
  {
    "id": "tiu-pam-077",
    "subPattern": "syarat-berdampingan-dan-terpisah",
    "difficulty": "sedang",
    "prompt": "Dalam rapat evaluasi kinerja di ruang bundar kementerian, enam pejabat (Bagas, Clara, Damar, Elsa, Ferdi, Gisela) duduk melingkar menghadap ke pusat meja. Diketahui:\n(1) Ferdi duduk berhadapan dengan Clara.\n(2) Gisela duduk berdampingan dengan Ferdi dan Bagas.\n(3) Elsa duduk tepat di sebelah kiri Ferdi.\nSiapakah dua orang yang mengapit (duduk di kiri dan kanan) Gisela?",
    "options": [
      "Bagas dan Clara",
      "Clara dan Elsa",
      "Damar dan Ferdi",
      "Ferdi dan Bagas",
      "Damar dan Bagas"
    ],
    "answer": "D",
    "explanation": "Dari syarat (1) dan (2), urutan K1=Ferdi, K2=Gisela, K3=Bagas, K4=Clara. Karena Elsa di sebelah kiri Ferdi, maka K6=Elsa dan kursi K5 ditempati oleh Damar. Jadi Gisela diapit oleh Ferdi dan Bagas.",
    "tip": "Jika B berdampingan dengan A dan C sekaligus, maka B pasti berada di tengah-tengah antara A dan C (urutan A-B-C)."
  },
  {
    "id": "tiu-pam-078",
    "subPattern": "syarat-berdampingan-dan-terpisah",
    "difficulty": "sedang",
    "prompt": "Saat diskusi panel penyusunan kebijakan publik, enam pejabat (Reza, Salsa, Tegar, Utami, Vino, Wulan) duduk melingkar menghadap ke pusat meja. Diketahui:\n(1) Wulan duduk berhadapan dengan Tegar.\n(2) Reza duduk berdampingan dengan Wulan dan Salsa.\n(3) Vino duduk tepat di sebelah kiri Wulan.\nSiapakah dua orang yang mengapit (duduk di kiri dan kanan) Salsa?",
    "options": [
      "Tegar dan Utami",
      "Utami dan Wulan",
      "Vino dan Reza",
      "Vino dan Tegar",
      "Reza dan Tegar"
    ],
    "answer": "E",
    "explanation": "Dari syarat (1) dan (2), urutan K1=Wulan, K2=Reza, K3=Salsa, K4=Tegar. Karena Vino di sebelah kiri Wulan, maka K6=Vino dan kursi K5 ditempati oleh Utami. Jadi Salsa diapit oleh Reza dan Tegar.",
    "tip": "Jika B berdampingan dengan A dan C sekaligus, maka B pasti berada di tengah-tengah antara A dan C (urutan A-B-C)."
  },
  {
    "id": "tiu-pam-079",
    "subPattern": "syarat-berdampingan-dan-terpisah",
    "difficulty": "sedang",
    "prompt": "Dalam sesi koordinasi tim audit inspektorat, enam pejabat (Andi, Budi, Citra, Dina, Eko, Farah) duduk melingkar menghadap ke pusat meja. Diketahui:\n(1) Andi duduk berhadapan dengan Dina.\n(2) Budi duduk berdampingan dengan Andi dan Citra.\n(3) Farah duduk tepat di sebelah kiri Andi.\nSiapakah dua orang yang mengapit (duduk di kiri dan kanan) Dina?",
    "options": [
      "Citra dan Eko",
      "Eko dan Farah",
      "Farah dan Budi",
      "Andi dan Citra",
      "Andi dan Eko"
    ],
    "answer": "A",
    "explanation": "Dari syarat (1) dan (2), urutan K1=Andi, K2=Budi, K3=Citra, K4=Dina. Karena Farah di sebelah kiri Andi, maka K6=Farah dan kursi K5 ditempati oleh Eko. Jadi Dina diapit oleh Citra dan Eko.",
    "tip": "Jika B berdampingan dengan A dan C sekaligus, maka B pasti berada di tengah-tengah antara A dan C (urutan A-B-C)."
  },
  {
    "id": "tiu-pam-080",
    "subPattern": "syarat-berdampingan-dan-terpisah",
    "difficulty": "sedang",
    "prompt": "Saat rapat pimpinan unit pelayanan terpadu, enam pejabat (Gita, Hadi, Indra, Joko, Kartika, Lukman) duduk melingkar menghadap ke pusat meja. Diketahui:\n(1) Hadi duduk berhadapan dengan Kartika.\n(2) Indra duduk berdampingan dengan Hadi dan Joko.\n(3) Gita duduk tepat di sebelah kiri Hadi.\nSiapakah dua orang yang mengapit (duduk di kiri dan kanan) Lukman?",
    "options": [
      "Gita dan Hadi",
      "Kartika dan Gita",
      "Hadi dan Joko",
      "Indra dan Kartika",
      "Indra dan Gita"
    ],
    "answer": "B",
    "explanation": "Dari syarat (1) dan (2), urutan K1=Hadi, K2=Indra, K3=Joko, K4=Kartika. Karena Gita di sebelah kiri Hadi, maka K6=Gita dan kursi K5 ditempati oleh Lukman. Jadi Lukman diapit oleh Kartika dan Gita.",
    "tip": "Jika B berdampingan dengan A dan C sekaligus, maka B pasti berada di tengah-tengah antara A dan C (urutan A-B-C)."
  },
  {
    "id": "tiu-pam-081",
    "subPattern": "syarat-berdampingan-dan-terpisah",
    "difficulty": "sulit",
    "prompt": "Dalam forum grup terfokus (FGD) seleksi kompetensi, tujuh delegasi (Andi, Budi, Citra, Dina, Eko, Farah, Zahara) duduk mengelilingi meja bundar 7 kursi menghadap ke pusat meja. Diketahui:\n(1) Zahara duduk tepat di sebelah kiri Andi.\n(2) Budi duduk di antara Andi dan Citra.\n(3) Farah duduk tepat di sebelah kiri Zahara.\n(4) Dina tidak boleh duduk berdampingan dengan Farah.\nSiapakah yang duduk tepat di antara Zahara dan Budi?",
    "options": [
      "Citra",
      "Dina",
      "Andi",
      "Eko",
      "Farah"
    ],
    "answer": "C",
    "explanation": "Susun kursi K1=Zahara, kanan K1 adalah K2=Andi, lalu K3=Budi dan K4=Citra. Sebelah kiri K1 adalah K7=Farah. Tersisa K5 dan K6 untuk Dina dan Eko; karena Dina tidak berdampingan dengan Farah (K7), maka K5=Dina dan K6=Eko. Jadi yang duduk di antara Zahara dan Budi adalah Andi.",
    "tip": "Pada meja bundar dengan jumlah kursi ganjil (7 kursi), tidak ada posisi saling berhadapan; fokuslah pada rantai tetangga kiri-kanan."
  },
  {
    "id": "tiu-pam-082",
    "subPattern": "syarat-berdampingan-dan-terpisah",
    "difficulty": "sulit",
    "prompt": "Saat jamuan makan malam delegasi daerah, tujuh delegasi (Gita, Hadi, Indra, Joko, Kartika, Lukman, Zahara) duduk mengelilingi meja bundar 7 kursi menghadap ke pusat meja. Diketahui:\n(1) Gita duduk tepat di sebelah kiri Hadi.\n(2) Indra duduk di antara Hadi dan Joko.\n(3) Zahara duduk tepat di sebelah kiri Gita.\n(4) Kartika tidak boleh duduk berdampingan dengan Zahara.\nSiapakah yang duduk tepat di antara Hadi dan Joko?",
    "options": [
      "Gita",
      "Kartika",
      "Lukman",
      "Indra",
      "Zahara"
    ],
    "answer": "D",
    "explanation": "Susun kursi K1=Gita, kanan K1 adalah K2=Hadi, lalu K3=Indra dan K4=Joko. Sebelah kiri K1 adalah K7=Zahara. Tersisa K5 dan K6 untuk Kartika dan Lukman; karena Kartika tidak berdampingan dengan Zahara (K7), maka K5=Kartika dan K6=Lukman. Jadi yang duduk di antara Hadi dan Joko adalah Indra.",
    "tip": "Pada meja bundar dengan jumlah kursi ganjil (7 kursi), tidak ada posisi saling berhadapan; fokuslah pada rantai tetangga kiri-kanan."
  },
  {
    "id": "tiu-pam-083",
    "subPattern": "syarat-berdampingan-dan-terpisah",
    "difficulty": "sulit",
    "prompt": "Dalam rapat panitia pelaksana diklat prajabatan, tujuh delegasi (Mira, Nanda, Oki, Putri, Qori, Rama, Zahara) duduk mengelilingi meja bundar 7 kursi menghadap ke pusat meja. Diketahui:\n(1) Nanda duduk tepat di sebelah kiri Oki.\n(2) Putri duduk di antara Oki dan Qori.\n(3) Mira duduk tepat di sebelah kiri Nanda.\n(4) Rama tidak boleh duduk berdampingan dengan Mira.\nSiapakah yang duduk tepat di antara Putri dan Rama?",
    "options": [
      "Nanda",
      "Oki",
      "Zahara",
      "Mira",
      "Qori"
    ],
    "answer": "E",
    "explanation": "Susun kursi K1=Nanda, kanan K1 adalah K2=Oki, lalu K3=Putri dan K4=Qori. Sebelah kiri K1 adalah K7=Mira. Tersisa K5 dan K6 untuk Rama dan Zahara; karena Rama tidak berdampingan dengan Mira (K7), maka K5=Rama dan K6=Zahara. Jadi yang duduk di antara Putri dan Rama adalah Qori.",
    "tip": "Pada meja bundar dengan jumlah kursi ganjil (7 kursi), tidak ada posisi saling berhadapan; fokuslah pada rantai tetangga kiri-kanan."
  },
  {
    "id": "tiu-pam-084",
    "subPattern": "syarat-berdampingan-dan-terpisah",
    "difficulty": "sulit",
    "prompt": "Saat diskusi kelompok penyusunan modul pelatihan, tujuh delegasi (Sinta, Tono, Umar, Vina, Wawan, Yuni, Zahara) duduk mengelilingi meja bundar 7 kursi menghadap ke pusat meja. Diketahui:\n(1) Umar duduk tepat di sebelah kiri Vina.\n(2) Wawan duduk di antara Vina dan Yuni.\n(3) Tono duduk tepat di sebelah kiri Umar.\n(4) Zahara tidak boleh duduk berdampingan dengan Tono.\nSiapakah yang duduk tepat di antara Yuni dan Sinta?",
    "options": [
      "Zahara",
      "Umar",
      "Vina",
      "Wawan",
      "Tono"
    ],
    "answer": "A",
    "explanation": "Susun kursi K1=Umar, kanan K1 adalah K2=Vina, lalu K3=Wawan dan K4=Yuni. Sebelah kiri K1 adalah K7=Tono. Tersisa K5 dan K6 untuk Zahara dan Sinta; karena Zahara tidak berdampingan dengan Tono (K7), maka K5=Zahara dan K6=Sinta. Jadi yang duduk di antara Yuni dan Sinta adalah Zahara.",
    "tip": "Pada meja bundar dengan jumlah kursi ganjil (7 kursi), tidak ada posisi saling berhadapan; fokuslah pada rantai tetangga kiri-kanan."
  },
  {
    "id": "tiu-pam-085",
    "subPattern": "syarat-berdampingan-dan-terpisah",
    "difficulty": "sulit",
    "prompt": "Dalam rapat tim reformasi birokrasi instansi, tujuh delegasi (Arif, Bella, Candra, Dewi, Erlan, Fajar, Zahara) duduk mengelilingi meja bundar 7 kursi menghadap ke pusat meja. Diketahui:\n(1) Dewi duduk tepat di sebelah kiri Erlan.\n(2) Fajar duduk di antara Erlan dan Zahara.\n(3) Candra duduk tepat di sebelah kiri Dewi.\n(4) Arif tidak boleh duduk berdampingan dengan Candra.\nSiapakah yang duduk tepat di antara Arif dan Candra?",
    "options": [
      "Dewi",
      "Bella",
      "Erlan",
      "Fajar",
      "Zahara"
    ],
    "answer": "B",
    "explanation": "Susun kursi K1=Dewi, kanan K1 adalah K2=Erlan, lalu K3=Fajar dan K4=Zahara. Sebelah kiri K1 adalah K7=Candra. Tersisa K5 dan K6 untuk Arif dan Bella; karena Arif tidak berdampingan dengan Candra (K7), maka K5=Arif dan K6=Bella. Jadi yang duduk di antara Arif dan Candra adalah Bella.",
    "tip": "Pada meja bundar dengan jumlah kursi ganjil (7 kursi), tidak ada posisi saling berhadapan; fokuslah pada rantai tetangga kiri-kanan."
  },
  {
    "id": "tiu-pam-086",
    "subPattern": "syarat-berdampingan-dan-terpisah",
    "difficulty": "sulit",
    "prompt": "Saat pengarahan teknis petugas lapangan, tujuh delegasi (Galih, Hana, Irwan, Jihan, Kiki, Laras, Zahara) duduk mengelilingi meja bundar 7 kursi menghadap ke pusat meja. Diketahui:\n(1) Kiki duduk tepat di sebelah kiri Laras.\n(2) Zahara duduk di antara Laras dan Galih.\n(3) Jihan duduk tepat di sebelah kiri Kiki.\n(4) Hana tidak boleh duduk berdampingan dengan Jihan.\nSiapakah yang duduk tepat di antara Kiki dan Zahara?",
    "options": [
      "Galih",
      "Hana",
      "Laras",
      "Irwan",
      "Jihan"
    ],
    "answer": "C",
    "explanation": "Susun kursi K1=Kiki, kanan K1 adalah K2=Laras, lalu K3=Zahara dan K4=Galih. Sebelah kiri K1 adalah K7=Jihan. Tersisa K5 dan K6 untuk Hana dan Irwan; karena Hana tidak berdampingan dengan Jihan (K7), maka K5=Hana dan K6=Irwan. Jadi yang duduk di antara Kiki dan Zahara adalah Laras.",
    "tip": "Pada meja bundar dengan jumlah kursi ganjil (7 kursi), tidak ada posisi saling berhadapan; fokuslah pada rantai tetangga kiri-kanan."
  },
  {
    "id": "tiu-pam-087",
    "subPattern": "syarat-berdampingan-dan-terpisah",
    "difficulty": "sulit",
    "prompt": "Dalam rapat evaluasi kinerja di ruang bundar kementerian, tujuh delegasi (Doni, Eka, Fani, Gilang, Hesti, Ivan, Zahara) duduk mengelilingi meja bundar 7 kursi menghadap ke pusat meja. Diketahui:\n(1) Ivan duduk tepat di sebelah kiri Zahara.\n(2) Doni duduk di antara Zahara dan Eka.\n(3) Hesti duduk tepat di sebelah kiri Ivan.\n(4) Fani tidak boleh duduk berdampingan dengan Hesti.\nSiapakah yang duduk tepat di antara Zahara dan Eka?",
    "options": [
      "Ivan",
      "Fani",
      "Gilang",
      "Doni",
      "Hesti"
    ],
    "answer": "D",
    "explanation": "Susun kursi K1=Ivan, kanan K1 adalah K2=Zahara, lalu K3=Doni dan K4=Eka. Sebelah kiri K1 adalah K7=Hesti. Tersisa K5 dan K6 untuk Fani dan Gilang; karena Fani tidak berdampingan dengan Hesti (K7), maka K5=Fani dan K6=Gilang. Jadi yang duduk di antara Zahara dan Eka adalah Doni.",
    "tip": "Pada meja bundar dengan jumlah kursi ganjil (7 kursi), tidak ada posisi saling berhadapan; fokuslah pada rantai tetangga kiri-kanan."
  },
  {
    "id": "tiu-pam-088",
    "subPattern": "syarat-berdampingan-dan-terpisah",
    "difficulty": "sulit",
    "prompt": "Saat diskusi panel penyusunan kebijakan publik, tujuh delegasi (Pandu, Rania, Satria, Tania, Ulfa, Viktor, Zahara) duduk mengelilingi meja bundar 7 kursi menghadap ke pusat meja. Diketahui:\n(1) Zahara duduk tepat di sebelah kiri Pandu.\n(2) Rania duduk di antara Pandu dan Satria.\n(3) Viktor duduk tepat di sebelah kiri Zahara.\n(4) Tania tidak boleh duduk berdampingan dengan Viktor.\nSiapakah yang duduk tepat di antara Rania dan Tania?",
    "options": [
      "Zahara",
      "Pandu",
      "Ulfa",
      "Viktor",
      "Satria"
    ],
    "answer": "E",
    "explanation": "Susun kursi K1=Zahara, kanan K1 adalah K2=Pandu, lalu K3=Rania dan K4=Satria. Sebelah kiri K1 adalah K7=Viktor. Tersisa K5 dan K6 untuk Tania dan Ulfa; karena Tania tidak berdampingan dengan Viktor (K7), maka K5=Tania dan K6=Ulfa. Jadi yang duduk di antara Rania dan Tania adalah Satria.",
    "tip": "Pada meja bundar dengan jumlah kursi ganjil (7 kursi), tidak ada posisi saling berhadapan; fokuslah pada rantai tetangga kiri-kanan."
  },
  {
    "id": "tiu-pam-089",
    "subPattern": "syarat-berdampingan-dan-terpisah",
    "difficulty": "sulit",
    "prompt": "Dalam sesi koordinasi tim audit inspektorat, tujuh delegasi (Bagas, Clara, Damar, Elsa, Ferdi, Gisela, Zahara) duduk mengelilingi meja bundar 7 kursi menghadap ke pusat meja. Diketahui:\n(1) Bagas duduk tepat di sebelah kiri Clara.\n(2) Damar duduk di antara Clara dan Elsa.\n(3) Zahara duduk tepat di sebelah kiri Bagas.\n(4) Ferdi tidak boleh duduk berdampingan dengan Zahara.\nSiapakah yang duduk tepat di antara Elsa dan Gisela?",
    "options": [
      "Ferdi",
      "Bagas",
      "Clara",
      "Damar",
      "Zahara"
    ],
    "answer": "A",
    "explanation": "Susun kursi K1=Bagas, kanan K1 adalah K2=Clara, lalu K3=Damar dan K4=Elsa. Sebelah kiri K1 adalah K7=Zahara. Tersisa K5 dan K6 untuk Ferdi dan Gisela; karena Ferdi tidak berdampingan dengan Zahara (K7), maka K5=Ferdi dan K6=Gisela. Jadi yang duduk di antara Elsa dan Gisela adalah Ferdi.",
    "tip": "Pada meja bundar dengan jumlah kursi ganjil (7 kursi), tidak ada posisi saling berhadapan; fokuslah pada rantai tetangga kiri-kanan."
  },
  {
    "id": "tiu-pam-090",
    "subPattern": "syarat-berdampingan-dan-terpisah",
    "difficulty": "sulit",
    "prompt": "Saat rapat pimpinan unit pelayanan terpadu, tujuh delegasi (Reza, Salsa, Tegar, Utami, Vino, Wulan, Zahara) duduk mengelilingi meja bundar 7 kursi menghadap ke pusat meja. Diketahui:\n(1) Salsa duduk tepat di sebelah kiri Tegar.\n(2) Utami duduk di antara Tegar dan Vino.\n(3) Reza duduk tepat di sebelah kiri Salsa.\n(4) Wulan tidak boleh duduk berdampingan dengan Reza.\nSiapakah yang duduk tepat di antara Wulan dan Reza?",
    "options": [
      "Salsa",
      "Zahara",
      "Tegar",
      "Utami",
      "Vino"
    ],
    "answer": "B",
    "explanation": "Susun kursi K1=Salsa, kanan K1 adalah K2=Tegar, lalu K3=Utami dan K4=Vino. Sebelah kiri K1 adalah K7=Reza. Tersisa K5 dan K6 untuk Wulan dan Zahara; karena Wulan tidak berdampingan dengan Reza (K7), maka K5=Wulan dan K6=Zahara. Jadi yang duduk di antara Wulan dan Reza adalah Zahara.",
    "tip": "Pada meja bundar dengan jumlah kursi ganjil (7 kursi), tidak ada posisi saling berhadapan; fokuslah pada rantai tetangga kiri-kanan."
  },
  {
    "id": "tiu-pam-091",
    "subPattern": "meja-melingkar-kursi-kosong",
    "difficulty": "mudah",
    "prompt": "Dalam rapat panitia pelaksana diklat prajabatan, terdapat meja bundar dengan 6 kursi yang ditempati oleh 5 orang (Arif, Bella, Candra, Dewi, Erlan) sehingga terdapat 1 kursi kosong. Semua duduk menghadap ke pusat meja dengan ketentuan:\n(1) Arif duduk berhadapan dengan Dewi.\n(2) Bella duduk tepat di sebelah kanan Arif.\n(3) Candra duduk di antara Bella dan Dewi.\n(4) Erlan duduk tepat di sebelah kanan Dewi.\nSiapakah yang duduk tepat berhadapan dengan kursi kosong?",
    "options": [
      "Arif",
      "Bella",
      "Dewi",
      "Candra",
      "Erlan"
    ],
    "answer": "D",
    "explanation": "Susunan 6 kursi ke arah kanan: K1=Arif, K2=Bella, K3=Candra, K4=Dewi (hadap Arif), K5=Erlan (kanan Dewi), sehingga kursi kosong berada di K6. Kursi yang berhadapan dengan K6 adalah K3 yang ditempati oleh Candra.",
    "tip": "Perlakukan 'Kursi Kosong' sama seperti satu peserta tambahan agar jumlah posisi di lingkaran tetap genap 6 titik."
  },
  {
    "id": "tiu-pam-092",
    "subPattern": "meja-melingkar-kursi-kosong",
    "difficulty": "mudah",
    "prompt": "Saat diskusi kelompok penyusunan modul pelatihan, terdapat meja bundar dengan 6 kursi yang ditempati oleh 5 orang (Galih, Hana, Irwan, Jihan, Kiki) sehingga terdapat 1 kursi kosong. Semua duduk menghadap ke pusat meja dengan ketentuan:\n(1) Hana duduk berhadapan dengan Kiki.\n(2) Irwan duduk tepat di sebelah kanan Hana.\n(3) Jihan duduk di antara Irwan dan Kiki.\n(4) Galih duduk tepat di sebelah kanan Kiki.\nSiapakah yang duduk tepat berhadapan dengan kursi kosong?",
    "options": [
      "Hana",
      "Irwan",
      "Kiki",
      "Galih",
      "Jihan"
    ],
    "answer": "E",
    "explanation": "Susunan 6 kursi ke arah kanan: K1=Hana, K2=Irwan, K3=Jihan, K4=Kiki (hadap Hana), K5=Galih (kanan Kiki), sehingga kursi kosong berada di K6. Kursi yang berhadapan dengan K6 adalah K3 yang ditempati oleh Jihan.",
    "tip": "Perlakukan 'Kursi Kosong' sama seperti satu peserta tambahan agar jumlah posisi di lingkaran tetap genap 6 titik."
  },
  {
    "id": "tiu-pam-093",
    "subPattern": "meja-melingkar-kursi-kosong",
    "difficulty": "mudah",
    "prompt": "Dalam rapat tim reformasi birokrasi instansi, terdapat meja bundar dengan 6 kursi yang ditempati oleh 5 orang (Doni, Eka, Fani, Gilang, Hesti) sehingga terdapat 1 kursi kosong. Semua duduk menghadap ke pusat meja dengan ketentuan:\n(1) Fani duduk berhadapan dengan Doni.\n(2) Gilang duduk tepat di sebelah kanan Fani.\n(3) Hesti duduk di antara Gilang dan Doni.\n(4) Eka duduk tepat di sebelah kanan Doni.\nSiapakah yang duduk tepat berhadapan dengan kursi kosong?",
    "options": [
      "Hesti",
      "Fani",
      "Gilang",
      "Doni",
      "Eka"
    ],
    "answer": "A",
    "explanation": "Susunan 6 kursi ke arah kanan: K1=Fani, K2=Gilang, K3=Hesti, K4=Doni (hadap Fani), K5=Eka (kanan Doni), sehingga kursi kosong berada di K6. Kursi yang berhadapan dengan K6 adalah K3 yang ditempati oleh Hesti.",
    "tip": "Perlakukan 'Kursi Kosong' sama seperti satu peserta tambahan agar jumlah posisi di lingkaran tetap genap 6 titik."
  },
  {
    "id": "tiu-pam-094",
    "subPattern": "meja-melingkar-kursi-kosong",
    "difficulty": "mudah",
    "prompt": "Saat pengarahan teknis petugas lapangan, terdapat meja bundar dengan 6 kursi yang ditempati oleh 5 orang (Pandu, Rania, Satria, Tania, Ulfa) sehingga terdapat 1 kursi kosong. Semua duduk menghadap ke pusat meja dengan ketentuan:\n(1) Tania duduk berhadapan dengan Rania.\n(2) Ulfa duduk tepat di sebelah kanan Tania.\n(3) Pandu duduk di antara Ulfa dan Rania.\n(4) Satria duduk tepat di sebelah kanan Rania.\nSiapakah yang duduk tepat berhadapan dengan kursi kosong?",
    "options": [
      "Tania",
      "Pandu",
      "Ulfa",
      "Rania",
      "Satria"
    ],
    "answer": "B",
    "explanation": "Susunan 6 kursi ke arah kanan: K1=Tania, K2=Ulfa, K3=Pandu, K4=Rania (hadap Tania), K5=Satria (kanan Rania), sehingga kursi kosong berada di K6. Kursi yang berhadapan dengan K6 adalah K3 yang ditempati oleh Pandu.",
    "tip": "Perlakukan 'Kursi Kosong' sama seperti satu peserta tambahan agar jumlah posisi di lingkaran tetap genap 6 titik."
  },
  {
    "id": "tiu-pam-095",
    "subPattern": "meja-melingkar-kursi-kosong",
    "difficulty": "mudah",
    "prompt": "Dalam rapat evaluasi kinerja di ruang bundar kementerian, terdapat meja bundar dengan 6 kursi yang ditempati oleh 5 orang (Bagas, Clara, Damar, Elsa, Ferdi) sehingga terdapat 1 kursi kosong. Semua duduk menghadap ke pusat meja dengan ketentuan:\n(1) Ferdi duduk berhadapan dengan Damar.\n(2) Bagas duduk tepat di sebelah kanan Ferdi.\n(3) Clara duduk di antara Bagas dan Damar.\n(4) Elsa duduk tepat di sebelah kanan Damar.\nSiapakah yang duduk tepat berhadapan dengan kursi kosong?",
    "options": [
      "Ferdi",
      "Bagas",
      "Clara",
      "Damar",
      "Elsa"
    ],
    "answer": "C",
    "explanation": "Susunan 6 kursi ke arah kanan: K1=Ferdi, K2=Bagas, K3=Clara, K4=Damar (hadap Ferdi), K5=Elsa (kanan Damar), sehingga kursi kosong berada di K6. Kursi yang berhadapan dengan K6 adalah K3 yang ditempati oleh Clara.",
    "tip": "Perlakukan 'Kursi Kosong' sama seperti satu peserta tambahan agar jumlah posisi di lingkaran tetap genap 6 titik."
  },
  {
    "id": "tiu-pam-096",
    "subPattern": "meja-melingkar-kursi-kosong",
    "difficulty": "mudah",
    "prompt": "Saat diskusi panel penyusunan kebijakan publik, terdapat meja bundar dengan 6 kursi yang ditempati oleh 5 orang (Reza, Salsa, Tegar, Utami, Vino) sehingga terdapat 1 kursi kosong. Semua duduk menghadap ke pusat meja dengan ketentuan:\n(1) Reza duduk berhadapan dengan Utami.\n(2) Salsa duduk tepat di sebelah kanan Reza.\n(3) Tegar duduk di antara Salsa dan Utami.\n(4) Vino duduk tepat di sebelah kanan Utami.\nSiapakah yang duduk tepat berhadapan dengan kursi kosong?",
    "options": [
      "Reza",
      "Salsa",
      "Utami",
      "Tegar",
      "Vino"
    ],
    "answer": "D",
    "explanation": "Susunan 6 kursi ke arah kanan: K1=Reza, K2=Salsa, K3=Tegar, K4=Utami (hadap Reza), K5=Vino (kanan Utami), sehingga kursi kosong berada di K6. Kursi yang berhadapan dengan K6 adalah K3 yang ditempati oleh Tegar.",
    "tip": "Perlakukan 'Kursi Kosong' sama seperti satu peserta tambahan agar jumlah posisi di lingkaran tetap genap 6 titik."
  },
  {
    "id": "tiu-pam-097",
    "subPattern": "meja-melingkar-kursi-kosong",
    "difficulty": "mudah",
    "prompt": "Dalam sesi koordinasi tim audit inspektorat, terdapat meja bundar dengan 6 kursi yang ditempati oleh 5 orang (Andi, Budi, Citra, Dina, Eko) sehingga terdapat 1 kursi kosong. Semua duduk menghadap ke pusat meja dengan ketentuan:\n(1) Budi duduk berhadapan dengan Eko.\n(2) Citra duduk tepat di sebelah kanan Budi.\n(3) Dina duduk di antara Citra dan Eko.\n(4) Andi duduk tepat di sebelah kanan Eko.\nSiapakah yang duduk tepat berhadapan dengan kursi kosong?",
    "options": [
      "Budi",
      "Citra",
      "Eko",
      "Andi",
      "Dina"
    ],
    "answer": "E",
    "explanation": "Susunan 6 kursi ke arah kanan: K1=Budi, K2=Citra, K3=Dina, K4=Eko (hadap Budi), K5=Andi (kanan Eko), sehingga kursi kosong berada di K6. Kursi yang berhadapan dengan K6 adalah K3 yang ditempati oleh Dina.",
    "tip": "Perlakukan 'Kursi Kosong' sama seperti satu peserta tambahan agar jumlah posisi di lingkaran tetap genap 6 titik."
  },
  {
    "id": "tiu-pam-098",
    "subPattern": "meja-melingkar-kursi-kosong",
    "difficulty": "mudah",
    "prompt": "Saat rapat pimpinan unit pelayanan terpadu, terdapat meja bundar dengan 6 kursi yang ditempati oleh 5 orang (Gita, Hadi, Indra, Joko, Kartika) sehingga terdapat 1 kursi kosong. Semua duduk menghadap ke pusat meja dengan ketentuan:\n(1) Indra duduk berhadapan dengan Gita.\n(2) Joko duduk tepat di sebelah kanan Indra.\n(3) Kartika duduk di antara Joko dan Gita.\n(4) Hadi duduk tepat di sebelah kanan Gita.\nSiapakah yang duduk tepat berhadapan dengan kursi kosong?",
    "options": [
      "Kartika",
      "Indra",
      "Joko",
      "Gita",
      "Hadi"
    ],
    "answer": "A",
    "explanation": "Susunan 6 kursi ke arah kanan: K1=Indra, K2=Joko, K3=Kartika, K4=Gita (hadap Indra), K5=Hadi (kanan Gita), sehingga kursi kosong berada di K6. Kursi yang berhadapan dengan K6 adalah K3 yang ditempati oleh Kartika.",
    "tip": "Perlakukan 'Kursi Kosong' sama seperti satu peserta tambahan agar jumlah posisi di lingkaran tetap genap 6 titik."
  },
  {
    "id": "tiu-pam-099",
    "subPattern": "meja-melingkar-kursi-kosong",
    "difficulty": "mudah",
    "prompt": "Dalam forum grup terfokus (FGD) seleksi kompetensi, terdapat meja bundar dengan 6 kursi yang ditempati oleh 5 orang (Mira, Nanda, Oki, Putri, Qori) sehingga terdapat 1 kursi kosong. Semua duduk menghadap ke pusat meja dengan ketentuan:\n(1) Putri duduk berhadapan dengan Nanda.\n(2) Qori duduk tepat di sebelah kanan Putri.\n(3) Mira duduk di antara Qori dan Nanda.\n(4) Oki duduk tepat di sebelah kanan Nanda.\nSiapakah yang duduk tepat berhadapan dengan kursi kosong?",
    "options": [
      "Putri",
      "Mira",
      "Qori",
      "Nanda",
      "Oki"
    ],
    "answer": "B",
    "explanation": "Susunan 6 kursi ke arah kanan: K1=Putri, K2=Qori, K3=Mira, K4=Nanda (hadap Putri), K5=Oki (kanan Nanda), sehingga kursi kosong berada di K6. Kursi yang berhadapan dengan K6 adalah K3 yang ditempati oleh Mira.",
    "tip": "Perlakukan 'Kursi Kosong' sama seperti satu peserta tambahan agar jumlah posisi di lingkaran tetap genap 6 titik."
  },
  {
    "id": "tiu-pam-100",
    "subPattern": "meja-melingkar-kursi-kosong",
    "difficulty": "mudah",
    "prompt": "Saat jamuan makan malam delegasi daerah, terdapat meja bundar dengan 6 kursi yang ditempati oleh 5 orang (Sinta, Tono, Umar, Vina, Wawan) sehingga terdapat 1 kursi kosong. Semua duduk menghadap ke pusat meja dengan ketentuan:\n(1) Wawan duduk berhadapan dengan Umar.\n(2) Sinta duduk tepat di sebelah kanan Wawan.\n(3) Tono duduk di antara Sinta dan Umar.\n(4) Vina duduk tepat di sebelah kanan Umar.\nSiapakah yang duduk tepat berhadapan dengan kursi kosong?",
    "options": [
      "Wawan",
      "Sinta",
      "Tono",
      "Umar",
      "Vina"
    ],
    "answer": "C",
    "explanation": "Susunan 6 kursi ke arah kanan: K1=Wawan, K2=Sinta, K3=Tono, K4=Umar (hadap Wawan), K5=Vina (kanan Umar), sehingga kursi kosong berada di K6. Kursi yang berhadapan dengan K6 adalah K3 yang ditempati oleh Tono.",
    "tip": "Perlakukan 'Kursi Kosong' sama seperti satu peserta tambahan agar jumlah posisi di lingkaran tetap genap 6 titik."
  }
];
