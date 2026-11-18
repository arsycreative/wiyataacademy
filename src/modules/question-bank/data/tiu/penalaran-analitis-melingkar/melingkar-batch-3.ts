import type { QuestionDraft } from "@/modules/question-bank/domain/question";

export const melingkarBatch3Drafts: readonly QuestionDraft[] = [
  {
    "id": "tiu-pam-101",
    "subPattern": "meja-melingkar-kursi-kosong",
    "difficulty": "sedang",
    "prompt": "Dalam rapat panitia pelaksana diklat prajabatan, lima orang peserta (Arif, Bella, Candra, Dewi, Erlan) duduk mengelilingi meja bundar yang memiliki 6 kursi (1 kursi kosong) menghadap ke tengah. Diketahui:\n(1) Kursi kosong berada tepat di antara Erlan dan Arif.\n(2) Bella duduk tepat di sebelah kanan Arif.\n(3) Dewi duduk berhadapan dengan Arif.\n(4) Candra tidak duduk di samping kursi kosong.\nSiapakah yang duduk tepat di sebelah kanan kursi kosong tersebut?",
    "options": [
      "Bella",
      "Candra",
      "Dewi",
      "Arif",
      "Erlan"
    ],
    "answer": "D",
    "explanation": "Tempatkan Arif di K1 dan Bella di K2 (kanan Arif). Karena Dewi berhadapan dengan Arif, maka K4=Dewi. Karena Candra tidak di samping kursi kosong dan kursi kosong di antara Erlan dan Arif, maka K6=Kursi Kosong, K5=Erlan, dan K3=Candra. Dari posisi K6 (Kursi Kosong) menghadap ke pusat meja, sebelah kanannya adalah K1 (Arif) dan sebelah kirinya adalah K5 (Erlan). Jadi jawabannya Arif.",
    "tip": "Tentukan posisi kursi kosong di antara kedua orang yang mengapitnya dengan memeriksa arah kanan/kiri orang pertama."
  },
  {
    "id": "tiu-pam-102",
    "subPattern": "meja-melingkar-kursi-kosong",
    "difficulty": "sedang",
    "prompt": "Saat diskusi kelompok penyusunan modul pelatihan, lima orang peserta (Galih, Hana, Irwan, Jihan, Kiki) duduk mengelilingi meja bundar yang memiliki 6 kursi (1 kursi kosong) menghadap ke tengah. Diketahui:\n(1) Kursi kosong berada tepat di antara Galih dan Hana.\n(2) Irwan duduk tepat di sebelah kanan Hana.\n(3) Kiki duduk berhadapan dengan Hana.\n(4) Jihan tidak duduk di samping kursi kosong.\nSiapakah yang duduk tepat di sebelah kiri kursi kosong tersebut?",
    "options": [
      "Hana",
      "Irwan",
      "Jihan",
      "Kiki",
      "Galih"
    ],
    "answer": "E",
    "explanation": "Tempatkan Hana di K1 dan Irwan di K2 (kanan Hana). Karena Kiki berhadapan dengan Hana, maka K4=Kiki. Karena Jihan tidak di samping kursi kosong dan kursi kosong di antara Galih dan Hana, maka K6=Kursi Kosong, K5=Galih, dan K3=Jihan. Dari posisi K6 (Kursi Kosong) menghadap ke pusat meja, sebelah kanannya adalah K1 (Hana) dan sebelah kirinya adalah K5 (Galih). Jadi jawabannya Galih.",
    "tip": "Tentukan posisi kursi kosong di antara kedua orang yang mengapitnya dengan memeriksa arah kanan/kiri orang pertama."
  },
  {
    "id": "tiu-pam-103",
    "subPattern": "meja-melingkar-kursi-kosong",
    "difficulty": "sedang",
    "prompt": "Dalam rapat tim reformasi birokrasi instansi, lima orang peserta (Doni, Eka, Fani, Gilang, Hesti) duduk mengelilingi meja bundar yang memiliki 6 kursi (1 kursi kosong) menghadap ke tengah. Diketahui:\n(1) Kursi kosong berada tepat di antara Eka dan Fani.\n(2) Gilang duduk tepat di sebelah kanan Fani.\n(3) Doni duduk berhadapan dengan Fani.\n(4) Hesti tidak duduk di samping kursi kosong.\nSiapakah yang duduk tepat di sebelah kanan kursi kosong tersebut?",
    "options": [
      "Fani",
      "Gilang",
      "Hesti",
      "Doni",
      "Eka"
    ],
    "answer": "A",
    "explanation": "Tempatkan Fani di K1 dan Gilang di K2 (kanan Fani). Karena Doni berhadapan dengan Fani, maka K4=Doni. Karena Hesti tidak di samping kursi kosong dan kursi kosong di antara Eka dan Fani, maka K6=Kursi Kosong, K5=Eka, dan K3=Hesti. Dari posisi K6 (Kursi Kosong) menghadap ke pusat meja, sebelah kanannya adalah K1 (Fani) dan sebelah kirinya adalah K5 (Eka). Jadi jawabannya Fani.",
    "tip": "Tentukan posisi kursi kosong di antara kedua orang yang mengapitnya dengan memeriksa arah kanan/kiri orang pertama."
  },
  {
    "id": "tiu-pam-104",
    "subPattern": "meja-melingkar-kursi-kosong",
    "difficulty": "sedang",
    "prompt": "Saat pengarahan teknis petugas lapangan, lima orang peserta (Pandu, Rania, Satria, Tania, Ulfa) duduk mengelilingi meja bundar yang memiliki 6 kursi (1 kursi kosong) menghadap ke tengah. Diketahui:\n(1) Kursi kosong berada tepat di antara Satria dan Tania.\n(2) Ulfa duduk tepat di sebelah kanan Tania.\n(3) Rania duduk berhadapan dengan Tania.\n(4) Pandu tidak duduk di samping kursi kosong.\nSiapakah yang duduk tepat di sebelah kiri kursi kosong tersebut?",
    "options": [
      "Tania",
      "Satria",
      "Ulfa",
      "Pandu",
      "Rania"
    ],
    "answer": "B",
    "explanation": "Tempatkan Tania di K1 dan Ulfa di K2 (kanan Tania). Karena Rania berhadapan dengan Tania, maka K4=Rania. Karena Pandu tidak di samping kursi kosong dan kursi kosong di antara Satria dan Tania, maka K6=Kursi Kosong, K5=Satria, dan K3=Pandu. Dari posisi K6 (Kursi Kosong) menghadap ke pusat meja, sebelah kanannya adalah K1 (Tania) dan sebelah kirinya adalah K5 (Satria). Jadi jawabannya Satria.",
    "tip": "Tentukan posisi kursi kosong di antara kedua orang yang mengapitnya dengan memeriksa arah kanan/kiri orang pertama."
  },
  {
    "id": "tiu-pam-105",
    "subPattern": "meja-melingkar-kursi-kosong",
    "difficulty": "sedang",
    "prompt": "Dalam rapat evaluasi kinerja di ruang bundar kementerian, lima orang peserta (Bagas, Clara, Damar, Elsa, Ferdi) duduk mengelilingi meja bundar yang memiliki 6 kursi (1 kursi kosong) menghadap ke tengah. Diketahui:\n(1) Kursi kosong berada tepat di antara Elsa dan Ferdi.\n(2) Bagas duduk tepat di sebelah kanan Ferdi.\n(3) Damar duduk berhadapan dengan Ferdi.\n(4) Clara tidak duduk di samping kursi kosong.\nSiapakah yang duduk tepat di sebelah kanan kursi kosong tersebut?",
    "options": [
      "Bagas",
      "Clara",
      "Ferdi",
      "Damar",
      "Elsa"
    ],
    "answer": "C",
    "explanation": "Tempatkan Ferdi di K1 dan Bagas di K2 (kanan Ferdi). Karena Damar berhadapan dengan Ferdi, maka K4=Damar. Karena Clara tidak di samping kursi kosong dan kursi kosong di antara Elsa dan Ferdi, maka K6=Kursi Kosong, K5=Elsa, dan K3=Clara. Dari posisi K6 (Kursi Kosong) menghadap ke pusat meja, sebelah kanannya adalah K1 (Ferdi) dan sebelah kirinya adalah K5 (Elsa). Jadi jawabannya Ferdi.",
    "tip": "Tentukan posisi kursi kosong di antara kedua orang yang mengapitnya dengan memeriksa arah kanan/kiri orang pertama."
  },
  {
    "id": "tiu-pam-106",
    "subPattern": "meja-melingkar-kursi-kosong",
    "difficulty": "sedang",
    "prompt": "Saat diskusi panel penyusunan kebijakan publik, lima orang peserta (Reza, Salsa, Tegar, Utami, Vino) duduk mengelilingi meja bundar yang memiliki 6 kursi (1 kursi kosong) menghadap ke tengah. Diketahui:\n(1) Kursi kosong berada tepat di antara Vino dan Reza.\n(2) Salsa duduk tepat di sebelah kanan Reza.\n(3) Utami duduk berhadapan dengan Reza.\n(4) Tegar tidak duduk di samping kursi kosong.\nSiapakah yang duduk tepat di sebelah kiri kursi kosong tersebut?",
    "options": [
      "Reza",
      "Salsa",
      "Tegar",
      "Vino",
      "Utami"
    ],
    "answer": "D",
    "explanation": "Tempatkan Reza di K1 dan Salsa di K2 (kanan Reza). Karena Utami berhadapan dengan Reza, maka K4=Utami. Karena Tegar tidak di samping kursi kosong dan kursi kosong di antara Vino dan Reza, maka K6=Kursi Kosong, K5=Vino, dan K3=Tegar. Dari posisi K6 (Kursi Kosong) menghadap ke pusat meja, sebelah kanannya adalah K1 (Reza) dan sebelah kirinya adalah K5 (Vino). Jadi jawabannya Vino.",
    "tip": "Tentukan posisi kursi kosong di antara kedua orang yang mengapitnya dengan memeriksa arah kanan/kiri orang pertama."
  },
  {
    "id": "tiu-pam-107",
    "subPattern": "meja-melingkar-kursi-kosong",
    "difficulty": "sedang",
    "prompt": "Dalam sesi koordinasi tim audit inspektorat, lima orang peserta (Andi, Budi, Citra, Dina, Eko) duduk mengelilingi meja bundar yang memiliki 6 kursi (1 kursi kosong) menghadap ke tengah. Diketahui:\n(1) Kursi kosong berada tepat di antara Andi dan Budi.\n(2) Citra duduk tepat di sebelah kanan Budi.\n(3) Eko duduk berhadapan dengan Budi.\n(4) Dina tidak duduk di samping kursi kosong.\nSiapakah yang duduk tepat di sebelah kanan kursi kosong tersebut?",
    "options": [
      "Citra",
      "Dina",
      "Eko",
      "Andi",
      "Budi"
    ],
    "answer": "E",
    "explanation": "Tempatkan Budi di K1 dan Citra di K2 (kanan Budi). Karena Eko berhadapan dengan Budi, maka K4=Eko. Karena Dina tidak di samping kursi kosong dan kursi kosong di antara Andi dan Budi, maka K6=Kursi Kosong, K5=Andi, dan K3=Dina. Dari posisi K6 (Kursi Kosong) menghadap ke pusat meja, sebelah kanannya adalah K1 (Budi) dan sebelah kirinya adalah K5 (Andi). Jadi jawabannya Budi.",
    "tip": "Tentukan posisi kursi kosong di antara kedua orang yang mengapitnya dengan memeriksa arah kanan/kiri orang pertama."
  },
  {
    "id": "tiu-pam-108",
    "subPattern": "meja-melingkar-kursi-kosong",
    "difficulty": "sedang",
    "prompt": "Saat rapat pimpinan unit pelayanan terpadu, lima orang peserta (Gita, Hadi, Indra, Joko, Kartika) duduk mengelilingi meja bundar yang memiliki 6 kursi (1 kursi kosong) menghadap ke tengah. Diketahui:\n(1) Kursi kosong berada tepat di antara Hadi dan Indra.\n(2) Joko duduk tepat di sebelah kanan Indra.\n(3) Gita duduk berhadapan dengan Indra.\n(4) Kartika tidak duduk di samping kursi kosong.\nSiapakah yang duduk tepat di sebelah kiri kursi kosong tersebut?",
    "options": [
      "Hadi",
      "Indra",
      "Joko",
      "Kartika",
      "Gita"
    ],
    "answer": "A",
    "explanation": "Tempatkan Indra di K1 dan Joko di K2 (kanan Indra). Karena Gita berhadapan dengan Indra, maka K4=Gita. Karena Kartika tidak di samping kursi kosong dan kursi kosong di antara Hadi dan Indra, maka K6=Kursi Kosong, K5=Hadi, dan K3=Kartika. Dari posisi K6 (Kursi Kosong) menghadap ke pusat meja, sebelah kanannya adalah K1 (Indra) dan sebelah kirinya adalah K5 (Hadi). Jadi jawabannya Hadi.",
    "tip": "Tentukan posisi kursi kosong di antara kedua orang yang mengapitnya dengan memeriksa arah kanan/kiri orang pertama."
  },
  {
    "id": "tiu-pam-109",
    "subPattern": "meja-melingkar-kursi-kosong",
    "difficulty": "sedang",
    "prompt": "Dalam forum grup terfokus (FGD) seleksi kompetensi, lima orang peserta (Mira, Nanda, Oki, Putri, Qori) duduk mengelilingi meja bundar yang memiliki 6 kursi (1 kursi kosong) menghadap ke tengah. Diketahui:\n(1) Kursi kosong berada tepat di antara Oki dan Putri.\n(2) Qori duduk tepat di sebelah kanan Putri.\n(3) Nanda duduk berhadapan dengan Putri.\n(4) Mira tidak duduk di samping kursi kosong.\nSiapakah yang duduk tepat di sebelah kanan kursi kosong tersebut?",
    "options": [
      "Qori",
      "Putri",
      "Mira",
      "Nanda",
      "Oki"
    ],
    "answer": "B",
    "explanation": "Tempatkan Putri di K1 dan Qori di K2 (kanan Putri). Karena Nanda berhadapan dengan Putri, maka K4=Nanda. Karena Mira tidak di samping kursi kosong dan kursi kosong di antara Oki dan Putri, maka K6=Kursi Kosong, K5=Oki, dan K3=Mira. Dari posisi K6 (Kursi Kosong) menghadap ke pusat meja, sebelah kanannya adalah K1 (Putri) dan sebelah kirinya adalah K5 (Oki). Jadi jawabannya Putri.",
    "tip": "Tentukan posisi kursi kosong di antara kedua orang yang mengapitnya dengan memeriksa arah kanan/kiri orang pertama."
  },
  {
    "id": "tiu-pam-110",
    "subPattern": "meja-melingkar-kursi-kosong",
    "difficulty": "sedang",
    "prompt": "Saat jamuan makan malam delegasi daerah, lima orang peserta (Sinta, Tono, Umar, Vina, Wawan) duduk mengelilingi meja bundar yang memiliki 6 kursi (1 kursi kosong) menghadap ke tengah. Diketahui:\n(1) Kursi kosong berada tepat di antara Vina dan Wawan.\n(2) Sinta duduk tepat di sebelah kanan Wawan.\n(3) Umar duduk berhadapan dengan Wawan.\n(4) Tono tidak duduk di samping kursi kosong.\nSiapakah yang duduk tepat di sebelah kiri kursi kosong tersebut?",
    "options": [
      "Wawan",
      "Sinta",
      "Vina",
      "Tono",
      "Umar"
    ],
    "answer": "C",
    "explanation": "Tempatkan Wawan di K1 dan Sinta di K2 (kanan Wawan). Karena Umar berhadapan dengan Wawan, maka K4=Umar. Karena Tono tidak di samping kursi kosong dan kursi kosong di antara Vina dan Wawan, maka K6=Kursi Kosong, K5=Vina, dan K3=Tono. Dari posisi K6 (Kursi Kosong) menghadap ke pusat meja, sebelah kanannya adalah K1 (Wawan) dan sebelah kirinya adalah K5 (Vina). Jadi jawabannya Vina.",
    "tip": "Tentukan posisi kursi kosong di antara kedua orang yang mengapitnya dengan memeriksa arah kanan/kiri orang pertama."
  },
  {
    "id": "tiu-pam-111",
    "subPattern": "meja-melingkar-kursi-kosong",
    "difficulty": "sulit",
    "prompt": "Dalam rapat panitia pelaksana diklat prajabatan, enam orang (Arif, Bella, Candra, Dewi, Erlan, Fajar) duduk di meja bundar berkapasitas 8 kursi sehingga terdapat 2 kursi kosong yang saling berhadapan. Diketahui:\n(1) Candra duduk tepat di sebelah kanan salah satu kursi kosong.\n(2) Dewi duduk di antara Candra dan Erlan.\n(3) Fajar duduk berhadapan dengan Candra.\n(4) Bella duduk tepat di sebelah kiri kursi kosong pertama, dan Arif duduk di antara Fajar dan Bella.\nSiapakah yang duduk tepat berhadapan dengan Dewi?",
    "options": [
      "Candra",
      "Erlan",
      "Fajar",
      "Arif",
      "Bella"
    ],
    "answer": "D",
    "explanation": "Misalkan dua kursi kosong yang berhadapan berada di K8 dan K4. Kanan K8 adalah K1=Candra, diikuti K2=Dewi dan K3=Erlan (sebelum K4 kosong). Berhadapan dengan K1 adalah K5=Fajar, diikuti K6=Arif dan K7=Bella (di sebelah kiri K8 kosong). Maka K2 (Dewi) berhadapan dengan K6 (Arif). Jadi yang berhadapan dengan Dewi adalah Arif.",
    "tip": "Jika dua kursi kosong saling berhadapan pada meja 8 kursi, maka 6 kursi lainnya terbagi menjadi dua kelompok beranggotakan 3 kursi di kedua sisi."
  },
  {
    "id": "tiu-pam-112",
    "subPattern": "meja-melingkar-kursi-kosong",
    "difficulty": "sulit",
    "prompt": "Saat diskusi kelompok penyusunan modul pelatihan, enam orang (Galih, Hana, Irwan, Jihan, Kiki, Laras) duduk di meja bundar berkapasitas 8 kursi sehingga terdapat 2 kursi kosong yang saling berhadapan. Diketahui:\n(1) Jihan duduk tepat di sebelah kanan salah satu kursi kosong.\n(2) Kiki duduk di antara Jihan dan Laras.\n(3) Galih duduk berhadapan dengan Jihan.\n(4) Irwan duduk tepat di sebelah kiri kursi kosong pertama, dan Hana duduk di antara Galih dan Irwan.\nSiapakah yang duduk tepat berhadapan dengan Hana?",
    "options": [
      "Jihan",
      "Laras",
      "Galih",
      "Irwan",
      "Kiki"
    ],
    "answer": "E",
    "explanation": "Misalkan dua kursi kosong yang berhadapan berada di K8 dan K4. Kanan K8 adalah K1=Jihan, diikuti K2=Kiki dan K3=Laras (sebelum K4 kosong). Berhadapan dengan K1 adalah K5=Galih, diikuti K6=Hana dan K7=Irwan (di sebelah kiri K8 kosong). Maka K2 (Kiki) berhadapan dengan K6 (Hana). Jadi yang berhadapan dengan Hana adalah Kiki.",
    "tip": "Jika dua kursi kosong saling berhadapan pada meja 8 kursi, maka 6 kursi lainnya terbagi menjadi dua kelompok beranggotakan 3 kursi di kedua sisi."
  },
  {
    "id": "tiu-pam-113",
    "subPattern": "meja-melingkar-kursi-kosong",
    "difficulty": "sulit",
    "prompt": "Dalam rapat tim reformasi birokrasi instansi, enam orang (Doni, Eka, Fani, Gilang, Hesti, Ivan) duduk di meja bundar berkapasitas 8 kursi sehingga terdapat 2 kursi kosong yang saling berhadapan. Diketahui:\n(1) Hesti duduk tepat di sebelah kanan salah satu kursi kosong.\n(2) Ivan duduk di antara Hesti dan Doni.\n(3) Eka duduk berhadapan dengan Hesti.\n(4) Gilang duduk tepat di sebelah kiri kursi kosong pertama, dan Fani duduk di antara Eka dan Gilang.\nSiapakah yang duduk tepat berhadapan dengan Ivan?",
    "options": [
      "Fani",
      "Hesti",
      "Doni",
      "Eka",
      "Gilang"
    ],
    "answer": "A",
    "explanation": "Misalkan dua kursi kosong yang berhadapan berada di K8 dan K4. Kanan K8 adalah K1=Hesti, diikuti K2=Ivan dan K3=Doni (sebelum K4 kosong). Berhadapan dengan K1 adalah K5=Eka, diikuti K6=Fani dan K7=Gilang (di sebelah kiri K8 kosong). Maka K2 (Ivan) berhadapan dengan K6 (Fani). Jadi yang berhadapan dengan Ivan adalah Fani.",
    "tip": "Jika dua kursi kosong saling berhadapan pada meja 8 kursi, maka 6 kursi lainnya terbagi menjadi dua kelompok beranggotakan 3 kursi di kedua sisi."
  },
  {
    "id": "tiu-pam-114",
    "subPattern": "meja-melingkar-kursi-kosong",
    "difficulty": "sulit",
    "prompt": "Saat pengarahan teknis petugas lapangan, enam orang (Pandu, Rania, Satria, Tania, Ulfa, Viktor) duduk di meja bundar berkapasitas 8 kursi sehingga terdapat 2 kursi kosong yang saling berhadapan. Diketahui:\n(1) Viktor duduk tepat di sebelah kanan salah satu kursi kosong.\n(2) Pandu duduk di antara Viktor dan Rania.\n(3) Satria duduk berhadapan dengan Viktor.\n(4) Ulfa duduk tepat di sebelah kiri kursi kosong pertama, dan Tania duduk di antara Satria dan Ulfa.\nSiapakah yang duduk tepat berhadapan dengan Tania?",
    "options": [
      "Viktor",
      "Pandu",
      "Rania",
      "Satria",
      "Ulfa"
    ],
    "answer": "B",
    "explanation": "Misalkan dua kursi kosong yang berhadapan berada di K8 dan K4. Kanan K8 adalah K1=Viktor, diikuti K2=Pandu dan K3=Rania (sebelum K4 kosong). Berhadapan dengan K1 adalah K5=Satria, diikuti K6=Tania dan K7=Ulfa (di sebelah kiri K8 kosong). Maka K2 (Pandu) berhadapan dengan K6 (Tania). Jadi yang berhadapan dengan Tania adalah Pandu.",
    "tip": "Jika dua kursi kosong saling berhadapan pada meja 8 kursi, maka 6 kursi lainnya terbagi menjadi dua kelompok beranggotakan 3 kursi di kedua sisi."
  },
  {
    "id": "tiu-pam-115",
    "subPattern": "meja-melingkar-kursi-kosong",
    "difficulty": "sulit",
    "prompt": "Dalam rapat evaluasi kinerja di ruang bundar kementerian, enam orang (Bagas, Clara, Damar, Elsa, Ferdi, Gisela) duduk di meja bundar berkapasitas 8 kursi sehingga terdapat 2 kursi kosong yang saling berhadapan. Diketahui:\n(1) Bagas duduk tepat di sebelah kanan salah satu kursi kosong.\n(2) Clara duduk di antara Bagas dan Damar.\n(3) Elsa duduk berhadapan dengan Bagas.\n(4) Gisela duduk tepat di sebelah kiri kursi kosong pertama, dan Ferdi duduk di antara Elsa dan Gisela.\nSiapakah yang duduk tepat berhadapan dengan Clara?",
    "options": [
      "Bagas",
      "Damar",
      "Ferdi",
      "Elsa",
      "Gisela"
    ],
    "answer": "C",
    "explanation": "Misalkan dua kursi kosong yang berhadapan berada di K8 dan K4. Kanan K8 adalah K1=Bagas, diikuti K2=Clara dan K3=Damar (sebelum K4 kosong). Berhadapan dengan K1 adalah K5=Elsa, diikuti K6=Ferdi dan K7=Gisela (di sebelah kiri K8 kosong). Maka K2 (Clara) berhadapan dengan K6 (Ferdi). Jadi yang berhadapan dengan Clara adalah Ferdi.",
    "tip": "Jika dua kursi kosong saling berhadapan pada meja 8 kursi, maka 6 kursi lainnya terbagi menjadi dua kelompok beranggotakan 3 kursi di kedua sisi."
  },
  {
    "id": "tiu-pam-116",
    "subPattern": "meja-melingkar-kursi-kosong",
    "difficulty": "sulit",
    "prompt": "Saat diskusi panel penyusunan kebijakan publik, enam orang (Reza, Salsa, Tegar, Utami, Vino, Wulan) duduk di meja bundar berkapasitas 8 kursi sehingga terdapat 2 kursi kosong yang saling berhadapan. Diketahui:\n(1) Salsa duduk tepat di sebelah kanan salah satu kursi kosong.\n(2) Tegar duduk di antara Salsa dan Utami.\n(3) Vino duduk berhadapan dengan Salsa.\n(4) Reza duduk tepat di sebelah kiri kursi kosong pertama, dan Wulan duduk di antara Vino dan Reza.\nSiapakah yang duduk tepat berhadapan dengan Wulan?",
    "options": [
      "Salsa",
      "Utami",
      "Vino",
      "Tegar",
      "Reza"
    ],
    "answer": "D",
    "explanation": "Misalkan dua kursi kosong yang berhadapan berada di K8 dan K4. Kanan K8 adalah K1=Salsa, diikuti K2=Tegar dan K3=Utami (sebelum K4 kosong). Berhadapan dengan K1 adalah K5=Vino, diikuti K6=Wulan dan K7=Reza (di sebelah kiri K8 kosong). Maka K2 (Tegar) berhadapan dengan K6 (Wulan). Jadi yang berhadapan dengan Wulan adalah Tegar.",
    "tip": "Jika dua kursi kosong saling berhadapan pada meja 8 kursi, maka 6 kursi lainnya terbagi menjadi dua kelompok beranggotakan 3 kursi di kedua sisi."
  },
  {
    "id": "tiu-pam-117",
    "subPattern": "meja-melingkar-kursi-kosong",
    "difficulty": "sulit",
    "prompt": "Dalam sesi koordinasi tim audit inspektorat, enam orang (Andi, Budi, Citra, Dina, Eko, Farah) duduk di meja bundar berkapasitas 8 kursi sehingga terdapat 2 kursi kosong yang saling berhadapan. Diketahui:\n(1) Citra duduk tepat di sebelah kanan salah satu kursi kosong.\n(2) Dina duduk di antara Citra dan Eko.\n(3) Farah duduk berhadapan dengan Citra.\n(4) Budi duduk tepat di sebelah kiri kursi kosong pertama, dan Andi duduk di antara Farah dan Budi.\nSiapakah yang duduk tepat berhadapan dengan Dina?",
    "options": [
      "Citra",
      "Eko",
      "Farah",
      "Budi",
      "Andi"
    ],
    "answer": "E",
    "explanation": "Misalkan dua kursi kosong yang berhadapan berada di K8 dan K4. Kanan K8 adalah K1=Citra, diikuti K2=Dina dan K3=Eko (sebelum K4 kosong). Berhadapan dengan K1 adalah K5=Farah, diikuti K6=Andi dan K7=Budi (di sebelah kiri K8 kosong). Maka K2 (Dina) berhadapan dengan K6 (Andi). Jadi yang berhadapan dengan Dina adalah Andi.",
    "tip": "Jika dua kursi kosong saling berhadapan pada meja 8 kursi, maka 6 kursi lainnya terbagi menjadi dua kelompok beranggotakan 3 kursi di kedua sisi."
  },
  {
    "id": "tiu-pam-118",
    "subPattern": "meja-melingkar-kursi-kosong",
    "difficulty": "sulit",
    "prompt": "Saat rapat pimpinan unit pelayanan terpadu, enam orang (Gita, Hadi, Indra, Joko, Kartika, Lukman) duduk di meja bundar berkapasitas 8 kursi sehingga terdapat 2 kursi kosong yang saling berhadapan. Diketahui:\n(1) Joko duduk tepat di sebelah kanan salah satu kursi kosong.\n(2) Kartika duduk di antara Joko dan Lukman.\n(3) Gita duduk berhadapan dengan Joko.\n(4) Indra duduk tepat di sebelah kiri kursi kosong pertama, dan Hadi duduk di antara Gita dan Indra.\nSiapakah yang duduk tepat berhadapan dengan Hadi?",
    "options": [
      "Kartika",
      "Joko",
      "Lukman",
      "Gita",
      "Indra"
    ],
    "answer": "A",
    "explanation": "Misalkan dua kursi kosong yang berhadapan berada di K8 dan K4. Kanan K8 adalah K1=Joko, diikuti K2=Kartika dan K3=Lukman (sebelum K4 kosong). Berhadapan dengan K1 adalah K5=Gita, diikuti K6=Hadi dan K7=Indra (di sebelah kiri K8 kosong). Maka K2 (Kartika) berhadapan dengan K6 (Hadi). Jadi yang berhadapan dengan Hadi adalah Kartika.",
    "tip": "Jika dua kursi kosong saling berhadapan pada meja 8 kursi, maka 6 kursi lainnya terbagi menjadi dua kelompok beranggotakan 3 kursi di kedua sisi."
  },
  {
    "id": "tiu-pam-119",
    "subPattern": "meja-melingkar-kursi-kosong",
    "difficulty": "sulit",
    "prompt": "Dalam forum grup terfokus (FGD) seleksi kompetensi, enam orang (Mira, Nanda, Oki, Putri, Qori, Rama) duduk di meja bundar berkapasitas 8 kursi sehingga terdapat 2 kursi kosong yang saling berhadapan. Diketahui:\n(1) Qori duduk tepat di sebelah kanan salah satu kursi kosong.\n(2) Rama duduk di antara Qori dan Mira.\n(3) Nanda duduk berhadapan dengan Qori.\n(4) Putri duduk tepat di sebelah kiri kursi kosong pertama, dan Oki duduk di antara Nanda dan Putri.\nSiapakah yang duduk tepat berhadapan dengan Rama?",
    "options": [
      "Qori",
      "Oki",
      "Mira",
      "Nanda",
      "Putri"
    ],
    "answer": "B",
    "explanation": "Misalkan dua kursi kosong yang berhadapan berada di K8 dan K4. Kanan K8 adalah K1=Qori, diikuti K2=Rama dan K3=Mira (sebelum K4 kosong). Berhadapan dengan K1 adalah K5=Nanda, diikuti K6=Oki dan K7=Putri (di sebelah kiri K8 kosong). Maka K2 (Rama) berhadapan dengan K6 (Oki). Jadi yang berhadapan dengan Rama adalah Oki.",
    "tip": "Jika dua kursi kosong saling berhadapan pada meja 8 kursi, maka 6 kursi lainnya terbagi menjadi dua kelompok beranggotakan 3 kursi di kedua sisi."
  },
  {
    "id": "tiu-pam-120",
    "subPattern": "meja-melingkar-kursi-kosong",
    "difficulty": "sulit",
    "prompt": "Saat jamuan makan malam delegasi daerah, enam orang (Sinta, Tono, Umar, Vina, Wawan, Yuni) duduk di meja bundar berkapasitas 8 kursi sehingga terdapat 2 kursi kosong yang saling berhadapan. Diketahui:\n(1) Yuni duduk tepat di sebelah kanan salah satu kursi kosong.\n(2) Sinta duduk di antara Yuni dan Tono.\n(3) Umar duduk berhadapan dengan Yuni.\n(4) Wawan duduk tepat di sebelah kiri kursi kosong pertama, dan Vina duduk di antara Umar dan Wawan.\nSiapakah yang duduk tepat berhadapan dengan Vina?",
    "options": [
      "Yuni",
      "Tono",
      "Sinta",
      "Umar",
      "Wawan"
    ],
    "answer": "C",
    "explanation": "Misalkan dua kursi kosong yang berhadapan berada di K8 dan K4. Kanan K8 adalah K1=Yuni, diikuti K2=Sinta dan K3=Tono (sebelum K4 kosong). Berhadapan dengan K1 adalah K5=Umar, diikuti K6=Vina dan K7=Wawan (di sebelah kiri K8 kosong). Maka K2 (Sinta) berhadapan dengan K6 (Vina). Jadi yang berhadapan dengan Vina adalah Sinta.",
    "tip": "Jika dua kursi kosong saling berhadapan pada meja 8 kursi, maka 6 kursi lainnya terbagi menjadi dua kelompok beranggotakan 3 kursi di kedua sisi."
  },
  {
    "id": "tiu-pam-121",
    "subPattern": "evaluasi-pernyataan-dan-kemungkinan",
    "difficulty": "mudah",
    "prompt": "Dalam rapat tim reformasi birokrasi instansi, enam peserta (Galih, Hana, Irwan, Jihan, Kiki, Laras) duduk mengelilingi meja bundar menghadap ke pusat meja. Diketahui:\n(1) Galih duduk berhadapan dengan Jihan.\n(2) Hana duduk tepat di sebelah kanan Galih.\n(3) Irwan duduk di antara Hana dan Jihan.\n(4) Kiki duduk berhadapan dengan Hana.\nManakah pernyataan berikut yang PASTI BENAR?",
    "options": [
      "Galih duduk berhadapan dengan Irwan",
      "Hana duduk tepat di sebelah kiri Galih",
      "Kiki duduk di antara Galih dan Irwan",
      "Laras duduk bersebelahan dengan Irwan",
      "Irwan duduk berhadapan dengan Laras"
    ],
    "answer": "E",
    "explanation": "Urutan melingkar ke kanan: K1=Galih, K2=Hana, K3=Irwan, K4=Jihan, K5=Kiki (hadap Hana), dan K6=Laras. Karena K3 ditempati Irwan dan K6 ditempati Laras, maka pernyataan yang pasti benar adalah Irwan duduk berhadapan dengan Laras.",
    "tip": "Lengkapi seluruh 6 posisi kursi terlebih dahulu, lalu uji kebenaran setiap kalimat pada opsi satu per satu."
  },
  {
    "id": "tiu-pam-122",
    "subPattern": "evaluasi-pernyataan-dan-kemungkinan",
    "difficulty": "mudah",
    "prompt": "Saat pengarahan teknis petugas lapangan, enam peserta (Doni, Eka, Fani, Gilang, Hesti, Ivan) duduk mengelilingi meja bundar menghadap ke pusat meja. Diketahui:\n(1) Eka duduk berhadapan dengan Hesti.\n(2) Fani duduk tepat di sebelah kanan Eka.\n(3) Gilang duduk di antara Fani dan Hesti.\n(4) Ivan duduk berhadapan dengan Fani.\nManakah pernyataan berikut yang PASTI BENAR?",
    "options": [
      "Gilang duduk berhadapan dengan Doni",
      "Eka duduk berhadapan dengan Gilang",
      "Fani duduk tepat di sebelah kiri Eka",
      "Ivan duduk di antara Eka dan Gilang",
      "Doni duduk bersebelahan dengan Gilang"
    ],
    "answer": "A",
    "explanation": "Urutan melingkar ke kanan: K1=Eka, K2=Fani, K3=Gilang, K4=Hesti, K5=Ivan (hadap Fani), dan K6=Doni. Karena K3 ditempati Gilang dan K6 ditempati Doni, maka pernyataan yang pasti benar adalah Gilang duduk berhadapan dengan Doni.",
    "tip": "Lengkapi seluruh 6 posisi kursi terlebih dahulu, lalu uji kebenaran setiap kalimat pada opsi satu per satu."
  },
  {
    "id": "tiu-pam-123",
    "subPattern": "evaluasi-pernyataan-dan-kemungkinan",
    "difficulty": "mudah",
    "prompt": "Dalam rapat evaluasi kinerja di ruang bundar kementerian, enam peserta (Pandu, Rania, Satria, Tania, Ulfa, Viktor) duduk mengelilingi meja bundar menghadap ke pusat meja. Diketahui:\n(1) Satria duduk berhadapan dengan Viktor.\n(2) Tania duduk tepat di sebelah kanan Satria.\n(3) Ulfa duduk di antara Tania dan Viktor.\n(4) Pandu duduk berhadapan dengan Tania.\nManakah pernyataan berikut yang PASTI BENAR?",
    "options": [
      "Satria duduk berhadapan dengan Ulfa",
      "Ulfa duduk berhadapan dengan Rania",
      "Tania duduk tepat di sebelah kiri Satria",
      "Pandu duduk di antara Satria dan Ulfa",
      "Rania duduk bersebelahan dengan Ulfa"
    ],
    "answer": "B",
    "explanation": "Urutan melingkar ke kanan: K1=Satria, K2=Tania, K3=Ulfa, K4=Viktor, K5=Pandu (hadap Tania), dan K6=Rania. Karena K3 ditempati Ulfa dan K6 ditempati Rania, maka pernyataan yang pasti benar adalah Ulfa duduk berhadapan dengan Rania.",
    "tip": "Lengkapi seluruh 6 posisi kursi terlebih dahulu, lalu uji kebenaran setiap kalimat pada opsi satu per satu."
  },
  {
    "id": "tiu-pam-124",
    "subPattern": "evaluasi-pernyataan-dan-kemungkinan",
    "difficulty": "mudah",
    "prompt": "Saat diskusi panel penyusunan kebijakan publik, enam peserta (Bagas, Clara, Damar, Elsa, Ferdi, Gisela) duduk mengelilingi meja bundar menghadap ke pusat meja. Diketahui:\n(1) Elsa duduk berhadapan dengan Bagas.\n(2) Ferdi duduk tepat di sebelah kanan Elsa.\n(3) Gisela duduk di antara Ferdi dan Bagas.\n(4) Clara duduk berhadapan dengan Ferdi.\nManakah pernyataan berikut yang PASTI BENAR?",
    "options": [
      "Elsa duduk berhadapan dengan Gisela",
      "Ferdi duduk tepat di sebelah kiri Elsa",
      "Gisela duduk berhadapan dengan Damar",
      "Clara duduk di antara Elsa dan Gisela",
      "Damar duduk bersebelahan dengan Gisela"
    ],
    "answer": "C",
    "explanation": "Urutan melingkar ke kanan: K1=Elsa, K2=Ferdi, K3=Gisela, K4=Bagas, K5=Clara (hadap Ferdi), dan K6=Damar. Karena K3 ditempati Gisela dan K6 ditempati Damar, maka pernyataan yang pasti benar adalah Gisela duduk berhadapan dengan Damar.",
    "tip": "Lengkapi seluruh 6 posisi kursi terlebih dahulu, lalu uji kebenaran setiap kalimat pada opsi satu per satu."
  },
  {
    "id": "tiu-pam-125",
    "subPattern": "evaluasi-pernyataan-dan-kemungkinan",
    "difficulty": "mudah",
    "prompt": "Dalam sesi koordinasi tim audit inspektorat, enam peserta (Reza, Salsa, Tegar, Utami, Vino, Wulan) duduk mengelilingi meja bundar menghadap ke pusat meja. Diketahui:\n(1) Vino duduk berhadapan dengan Salsa.\n(2) Wulan duduk tepat di sebelah kanan Vino.\n(3) Reza duduk di antara Wulan dan Salsa.\n(4) Tegar duduk berhadapan dengan Wulan.\nManakah pernyataan berikut yang PASTI BENAR?",
    "options": [
      "Vino duduk berhadapan dengan Reza",
      "Wulan duduk tepat di sebelah kiri Vino",
      "Tegar duduk di antara Vino dan Reza",
      "Reza duduk berhadapan dengan Utami",
      "Utami duduk bersebelahan dengan Reza"
    ],
    "answer": "D",
    "explanation": "Urutan melingkar ke kanan: K1=Vino, K2=Wulan, K3=Reza, K4=Salsa, K5=Tegar (hadap Wulan), dan K6=Utami. Karena K3 ditempati Reza dan K6 ditempati Utami, maka pernyataan yang pasti benar adalah Reza duduk berhadapan dengan Utami.",
    "tip": "Lengkapi seluruh 6 posisi kursi terlebih dahulu, lalu uji kebenaran setiap kalimat pada opsi satu per satu."
  },
  {
    "id": "tiu-pam-126",
    "subPattern": "evaluasi-pernyataan-dan-kemungkinan",
    "difficulty": "mudah",
    "prompt": "Saat rapat pimpinan unit pelayanan terpadu, enam peserta (Andi, Budi, Citra, Dina, Eko, Farah) duduk mengelilingi meja bundar menghadap ke pusat meja. Diketahui:\n(1) Farah duduk berhadapan dengan Citra.\n(2) Andi duduk tepat di sebelah kanan Farah.\n(3) Budi duduk di antara Andi dan Citra.\n(4) Dina duduk berhadapan dengan Andi.\nManakah pernyataan berikut yang PASTI BENAR?",
    "options": [
      "Farah duduk berhadapan dengan Budi",
      "Andi duduk tepat di sebelah kiri Farah",
      "Dina duduk di antara Farah dan Budi",
      "Eko duduk bersebelahan dengan Budi",
      "Budi duduk berhadapan dengan Eko"
    ],
    "answer": "E",
    "explanation": "Urutan melingkar ke kanan: K1=Farah, K2=Andi, K3=Budi, K4=Citra, K5=Dina (hadap Andi), dan K6=Eko. Karena K3 ditempati Budi dan K6 ditempati Eko, maka pernyataan yang pasti benar adalah Budi duduk berhadapan dengan Eko.",
    "tip": "Lengkapi seluruh 6 posisi kursi terlebih dahulu, lalu uji kebenaran setiap kalimat pada opsi satu per satu."
  },
  {
    "id": "tiu-pam-127",
    "subPattern": "evaluasi-pernyataan-dan-kemungkinan",
    "difficulty": "mudah",
    "prompt": "Dalam forum grup terfokus (FGD) seleksi kompetensi, enam peserta (Gita, Hadi, Indra, Joko, Kartika, Lukman) duduk mengelilingi meja bundar menghadap ke pusat meja. Diketahui:\n(1) Gita duduk berhadapan dengan Joko.\n(2) Hadi duduk tepat di sebelah kanan Gita.\n(3) Indra duduk di antara Hadi dan Joko.\n(4) Kartika duduk berhadapan dengan Hadi.\nManakah pernyataan berikut yang PASTI BENAR?",
    "options": [
      "Indra duduk berhadapan dengan Lukman",
      "Gita duduk berhadapan dengan Indra",
      "Hadi duduk tepat di sebelah kiri Gita",
      "Kartika duduk di antara Gita dan Indra",
      "Lukman duduk bersebelahan dengan Indra"
    ],
    "answer": "A",
    "explanation": "Urutan melingkar ke kanan: K1=Gita, K2=Hadi, K3=Indra, K4=Joko, K5=Kartika (hadap Hadi), dan K6=Lukman. Karena K3 ditempati Indra dan K6 ditempati Lukman, maka pernyataan yang pasti benar adalah Indra duduk berhadapan dengan Lukman.",
    "tip": "Lengkapi seluruh 6 posisi kursi terlebih dahulu, lalu uji kebenaran setiap kalimat pada opsi satu per satu."
  },
  {
    "id": "tiu-pam-128",
    "subPattern": "evaluasi-pernyataan-dan-kemungkinan",
    "difficulty": "mudah",
    "prompt": "Saat jamuan makan malam delegasi daerah, enam peserta (Mira, Nanda, Oki, Putri, Qori, Rama) duduk mengelilingi meja bundar menghadap ke pusat meja. Diketahui:\n(1) Nanda duduk berhadapan dengan Qori.\n(2) Oki duduk tepat di sebelah kanan Nanda.\n(3) Putri duduk di antara Oki dan Qori.\n(4) Rama duduk berhadapan dengan Oki.\nManakah pernyataan berikut yang PASTI BENAR?",
    "options": [
      "Nanda duduk berhadapan dengan Putri",
      "Putri duduk berhadapan dengan Mira",
      "Oki duduk tepat di sebelah kiri Nanda",
      "Rama duduk di antara Nanda dan Putri",
      "Mira duduk bersebelahan dengan Putri"
    ],
    "answer": "B",
    "explanation": "Urutan melingkar ke kanan: K1=Nanda, K2=Oki, K3=Putri, K4=Qori, K5=Rama (hadap Oki), dan K6=Mira. Karena K3 ditempati Putri dan K6 ditempati Mira, maka pernyataan yang pasti benar adalah Putri duduk berhadapan dengan Mira.",
    "tip": "Lengkapi seluruh 6 posisi kursi terlebih dahulu, lalu uji kebenaran setiap kalimat pada opsi satu per satu."
  },
  {
    "id": "tiu-pam-129",
    "subPattern": "evaluasi-pernyataan-dan-kemungkinan",
    "difficulty": "mudah",
    "prompt": "Dalam rapat panitia pelaksana diklat prajabatan, enam peserta (Sinta, Tono, Umar, Vina, Wawan, Yuni) duduk mengelilingi meja bundar menghadap ke pusat meja. Diketahui:\n(1) Umar duduk berhadapan dengan Yuni.\n(2) Vina duduk tepat di sebelah kanan Umar.\n(3) Wawan duduk di antara Vina dan Yuni.\n(4) Sinta duduk berhadapan dengan Vina.\nManakah pernyataan berikut yang PASTI BENAR?",
    "options": [
      "Umar duduk berhadapan dengan Wawan",
      "Vina duduk tepat di sebelah kiri Umar",
      "Wawan duduk berhadapan dengan Tono",
      "Sinta duduk di antara Umar dan Wawan",
      "Tono duduk bersebelahan dengan Wawan"
    ],
    "answer": "C",
    "explanation": "Urutan melingkar ke kanan: K1=Umar, K2=Vina, K3=Wawan, K4=Yuni, K5=Sinta (hadap Vina), dan K6=Tono. Karena K3 ditempati Wawan dan K6 ditempati Tono, maka pernyataan yang pasti benar adalah Wawan duduk berhadapan dengan Tono.",
    "tip": "Lengkapi seluruh 6 posisi kursi terlebih dahulu, lalu uji kebenaran setiap kalimat pada opsi satu per satu."
  },
  {
    "id": "tiu-pam-130",
    "subPattern": "evaluasi-pernyataan-dan-kemungkinan",
    "difficulty": "mudah",
    "prompt": "Saat diskusi kelompok penyusunan modul pelatihan, enam peserta (Arif, Bella, Candra, Dewi, Erlan, Fajar) duduk mengelilingi meja bundar menghadap ke pusat meja. Diketahui:\n(1) Dewi duduk berhadapan dengan Arif.\n(2) Erlan duduk tepat di sebelah kanan Dewi.\n(3) Fajar duduk di antara Erlan dan Arif.\n(4) Bella duduk berhadapan dengan Erlan.\nManakah pernyataan berikut yang PASTI BENAR?",
    "options": [
      "Dewi duduk berhadapan dengan Fajar",
      "Erlan duduk tepat di sebelah kiri Dewi",
      "Bella duduk di antara Dewi dan Fajar",
      "Fajar duduk berhadapan dengan Candra",
      "Candra duduk bersebelahan dengan Fajar"
    ],
    "answer": "D",
    "explanation": "Urutan melingkar ke kanan: K1=Dewi, K2=Erlan, K3=Fajar, K4=Arif, K5=Bella (hadap Erlan), dan K6=Candra. Karena K3 ditempati Fajar dan K6 ditempati Candra, maka pernyataan yang pasti benar adalah Fajar duduk berhadapan dengan Candra.",
    "tip": "Lengkapi seluruh 6 posisi kursi terlebih dahulu, lalu uji kebenaran setiap kalimat pada opsi satu per satu."
  },
  {
    "id": "tiu-pam-131",
    "subPattern": "evaluasi-pernyataan-dan-kemungkinan",
    "difficulty": "sedang",
    "prompt": "Dalam rapat tim reformasi birokrasi instansi, enam staf (Galih, Hana, Irwan, Jihan, Kiki, Laras) duduk melingkar menghadap ke pusat meja dengan susunan awal:\n(1) Kiki duduk berhadapan dengan Hana.\n(2) Laras duduk tepat di sebelah kanan Kiki, dan Galih duduk di sebelah kanan Laras.\n(3) Jihan duduk tepat di sebelah kiri Kiki.\nJika kemudian Laras bertukar kursi dengan Irwan, manakah pernyataan berikut yang BENAR?",
    "options": [
      "Laras duduk bersebelahan dengan Kiki",
      "Galih duduk berhadapan dengan Hana",
      "Jihan duduk di antara Laras dan Hana",
      "Irwan duduk berhadapan dengan Kiki",
      "Irwan duduk tepat di sebelah kanan Kiki"
    ],
    "answer": "E",
    "explanation": "Susunan awal ke kanan: K1=Kiki, K2=Laras, K3=Galih, K4=Hana, K5=Irwan, K6=Jihan. Setelah Laras (K2) bertukar dengan Irwan (K5), maka kursi K2 (tepat di sebelah kanan Kiki) ditempati oleh Irwan.",
    "tip": "Tukar label nama pada dua kursi yang disebutkan dalam pengandaian sebelum mengevaluasi pernyataan opsi."
  },
  {
    "id": "tiu-pam-132",
    "subPattern": "evaluasi-pernyataan-dan-kemungkinan",
    "difficulty": "sedang",
    "prompt": "Saat pengarahan teknis petugas lapangan, enam staf (Doni, Eka, Fani, Gilang, Hesti, Ivan) duduk melingkar menghadap ke pusat meja dengan susunan awal:\n(1) Ivan duduk berhadapan dengan Fani.\n(2) Doni duduk tepat di sebelah kanan Ivan, dan Eka duduk di sebelah kanan Doni.\n(3) Hesti duduk tepat di sebelah kiri Ivan.\nJika kemudian Doni bertukar kursi dengan Gilang, manakah pernyataan berikut yang BENAR?",
    "options": [
      "Gilang duduk tepat di sebelah kanan Ivan",
      "Doni duduk bersebelahan dengan Ivan",
      "Eka duduk berhadapan dengan Fani",
      "Hesti duduk di antara Doni dan Fani",
      "Gilang duduk berhadapan dengan Ivan"
    ],
    "answer": "A",
    "explanation": "Susunan awal ke kanan: K1=Ivan, K2=Doni, K3=Eka, K4=Fani, K5=Gilang, K6=Hesti. Setelah Doni (K2) bertukar dengan Gilang (K5), maka kursi K2 (tepat di sebelah kanan Ivan) ditempati oleh Gilang.",
    "tip": "Tukar label nama pada dua kursi yang disebutkan dalam pengandaian sebelum mengevaluasi pernyataan opsi."
  },
  {
    "id": "tiu-pam-133",
    "subPattern": "evaluasi-pernyataan-dan-kemungkinan",
    "difficulty": "sedang",
    "prompt": "Dalam rapat evaluasi kinerja di ruang bundar kementerian, enam staf (Pandu, Rania, Satria, Tania, Ulfa, Viktor) duduk melingkar menghadap ke pusat meja dengan susunan awal:\n(1) Pandu duduk berhadapan dengan Tania.\n(2) Rania duduk tepat di sebelah kanan Pandu, dan Satria duduk di sebelah kanan Rania.\n(3) Viktor duduk tepat di sebelah kiri Pandu.\nJika kemudian Rania bertukar kursi dengan Ulfa, manakah pernyataan berikut yang BENAR?",
    "options": [
      "Rania duduk bersebelahan dengan Pandu",
      "Ulfa duduk tepat di sebelah kanan Pandu",
      "Satria duduk berhadapan dengan Tania",
      "Viktor duduk di antara Rania dan Tania",
      "Ulfa duduk berhadapan dengan Pandu"
    ],
    "answer": "B",
    "explanation": "Susunan awal ke kanan: K1=Pandu, K2=Rania, K3=Satria, K4=Tania, K5=Ulfa, K6=Viktor. Setelah Rania (K2) bertukar dengan Ulfa (K5), maka kursi K2 (tepat di sebelah kanan Pandu) ditempati oleh Ulfa.",
    "tip": "Tukar label nama pada dua kursi yang disebutkan dalam pengandaian sebelum mengevaluasi pernyataan opsi."
  },
  {
    "id": "tiu-pam-134",
    "subPattern": "evaluasi-pernyataan-dan-kemungkinan",
    "difficulty": "sedang",
    "prompt": "Saat diskusi panel penyusunan kebijakan publik, enam staf (Bagas, Clara, Damar, Elsa, Ferdi, Gisela) duduk melingkar menghadap ke pusat meja dengan susunan awal:\n(1) Clara duduk berhadapan dengan Ferdi.\n(2) Damar duduk tepat di sebelah kanan Clara, dan Elsa duduk di sebelah kanan Damar.\n(3) Bagas duduk tepat di sebelah kiri Clara.\nJika kemudian Damar bertukar kursi dengan Gisela, manakah pernyataan berikut yang BENAR?",
    "options": [
      "Damar duduk bersebelahan dengan Clara",
      "Elsa duduk berhadapan dengan Ferdi",
      "Gisela duduk tepat di sebelah kanan Clara",
      "Bagas duduk di antara Damar dan Ferdi",
      "Gisela duduk berhadapan dengan Clara"
    ],
    "answer": "C",
    "explanation": "Susunan awal ke kanan: K1=Clara, K2=Damar, K3=Elsa, K4=Ferdi, K5=Gisela, K6=Bagas. Setelah Damar (K2) bertukar dengan Gisela (K5), maka kursi K2 (tepat di sebelah kanan Clara) ditempati oleh Gisela.",
    "tip": "Tukar label nama pada dua kursi yang disebutkan dalam pengandaian sebelum mengevaluasi pernyataan opsi."
  },
  {
    "id": "tiu-pam-135",
    "subPattern": "evaluasi-pernyataan-dan-kemungkinan",
    "difficulty": "sedang",
    "prompt": "Dalam sesi koordinasi tim audit inspektorat, enam staf (Reza, Salsa, Tegar, Utami, Vino, Wulan) duduk melingkar menghadap ke pusat meja dengan susunan awal:\n(1) Tegar duduk berhadapan dengan Wulan.\n(2) Utami duduk tepat di sebelah kanan Tegar, dan Vino duduk di sebelah kanan Utami.\n(3) Salsa duduk tepat di sebelah kiri Tegar.\nJika kemudian Utami bertukar kursi dengan Reza, manakah pernyataan berikut yang BENAR?",
    "options": [
      "Utami duduk bersebelahan dengan Tegar",
      "Vino duduk berhadapan dengan Wulan",
      "Salsa duduk di antara Utami dan Wulan",
      "Reza duduk tepat di sebelah kanan Tegar",
      "Reza duduk berhadapan dengan Tegar"
    ],
    "answer": "D",
    "explanation": "Susunan awal ke kanan: K1=Tegar, K2=Utami, K3=Vino, K4=Wulan, K5=Reza, K6=Salsa. Setelah Utami (K2) bertukar dengan Reza (K5), maka kursi K2 (tepat di sebelah kanan Tegar) ditempati oleh Reza.",
    "tip": "Tukar label nama pada dua kursi yang disebutkan dalam pengandaian sebelum mengevaluasi pernyataan opsi."
  },
  {
    "id": "tiu-pam-136",
    "subPattern": "evaluasi-pernyataan-dan-kemungkinan",
    "difficulty": "sedang",
    "prompt": "Saat rapat pimpinan unit pelayanan terpadu, enam staf (Andi, Budi, Citra, Dina, Eko, Farah) duduk melingkar menghadap ke pusat meja dengan susunan awal:\n(1) Dina duduk berhadapan dengan Andi.\n(2) Eko duduk tepat di sebelah kanan Dina, dan Farah duduk di sebelah kanan Eko.\n(3) Citra duduk tepat di sebelah kiri Dina.\nJika kemudian Eko bertukar kursi dengan Budi, manakah pernyataan berikut yang BENAR?",
    "options": [
      "Eko duduk bersebelahan dengan Dina",
      "Farah duduk berhadapan dengan Andi",
      "Citra duduk di antara Eko dan Andi",
      "Budi duduk berhadapan dengan Dina",
      "Budi duduk tepat di sebelah kanan Dina"
    ],
    "answer": "E",
    "explanation": "Susunan awal ke kanan: K1=Dina, K2=Eko, K3=Farah, K4=Andi, K5=Budi, K6=Citra. Setelah Eko (K2) bertukar dengan Budi (K5), maka kursi K2 (tepat di sebelah kanan Dina) ditempati oleh Budi.",
    "tip": "Tukar label nama pada dua kursi yang disebutkan dalam pengandaian sebelum mengevaluasi pernyataan opsi."
  },
  {
    "id": "tiu-pam-137",
    "subPattern": "evaluasi-pernyataan-dan-kemungkinan",
    "difficulty": "sedang",
    "prompt": "Dalam forum grup terfokus (FGD) seleksi kompetensi, enam staf (Gita, Hadi, Indra, Joko, Kartika, Lukman) duduk melingkar menghadap ke pusat meja dengan susunan awal:\n(1) Kartika duduk berhadapan dengan Hadi.\n(2) Lukman duduk tepat di sebelah kanan Kartika, dan Gita duduk di sebelah kanan Lukman.\n(3) Joko duduk tepat di sebelah kiri Kartika.\nJika kemudian Lukman bertukar kursi dengan Indra, manakah pernyataan berikut yang BENAR?",
    "options": [
      "Indra duduk tepat di sebelah kanan Kartika",
      "Lukman duduk bersebelahan dengan Kartika",
      "Gita duduk berhadapan dengan Hadi",
      "Joko duduk di antara Lukman dan Hadi",
      "Indra duduk berhadapan dengan Kartika"
    ],
    "answer": "A",
    "explanation": "Susunan awal ke kanan: K1=Kartika, K2=Lukman, K3=Gita, K4=Hadi, K5=Indra, K6=Joko. Setelah Lukman (K2) bertukar dengan Indra (K5), maka kursi K2 (tepat di sebelah kanan Kartika) ditempati oleh Indra.",
    "tip": "Tukar label nama pada dua kursi yang disebutkan dalam pengandaian sebelum mengevaluasi pernyataan opsi."
  },
  {
    "id": "tiu-pam-138",
    "subPattern": "evaluasi-pernyataan-dan-kemungkinan",
    "difficulty": "sedang",
    "prompt": "Saat jamuan makan malam delegasi daerah, enam staf (Mira, Nanda, Oki, Putri, Qori, Rama) duduk melingkar menghadap ke pusat meja dengan susunan awal:\n(1) Rama duduk berhadapan dengan Oki.\n(2) Mira duduk tepat di sebelah kanan Rama, dan Nanda duduk di sebelah kanan Mira.\n(3) Qori duduk tepat di sebelah kiri Rama.\nJika kemudian Mira bertukar kursi dengan Putri, manakah pernyataan berikut yang BENAR?",
    "options": [
      "Mira duduk bersebelahan dengan Rama",
      "Putri duduk tepat di sebelah kanan Rama",
      "Nanda duduk berhadapan dengan Oki",
      "Qori duduk di antara Mira dan Oki",
      "Putri duduk berhadapan dengan Rama"
    ],
    "answer": "B",
    "explanation": "Susunan awal ke kanan: K1=Rama, K2=Mira, K3=Nanda, K4=Oki, K5=Putri, K6=Qori. Setelah Mira (K2) bertukar dengan Putri (K5), maka kursi K2 (tepat di sebelah kanan Rama) ditempati oleh Putri.",
    "tip": "Tukar label nama pada dua kursi yang disebutkan dalam pengandaian sebelum mengevaluasi pernyataan opsi."
  },
  {
    "id": "tiu-pam-139",
    "subPattern": "evaluasi-pernyataan-dan-kemungkinan",
    "difficulty": "sedang",
    "prompt": "Dalam rapat panitia pelaksana diklat prajabatan, enam staf (Sinta, Tono, Umar, Vina, Wawan, Yuni) duduk melingkar menghadap ke pusat meja dengan susunan awal:\n(1) Sinta duduk berhadapan dengan Vina.\n(2) Tono duduk tepat di sebelah kanan Sinta, dan Umar duduk di sebelah kanan Tono.\n(3) Yuni duduk tepat di sebelah kiri Sinta.\nJika kemudian Tono bertukar kursi dengan Wawan, manakah pernyataan berikut yang BENAR?",
    "options": [
      "Tono duduk bersebelahan dengan Sinta",
      "Umar duduk berhadapan dengan Vina",
      "Wawan duduk tepat di sebelah kanan Sinta",
      "Yuni duduk di antara Tono dan Vina",
      "Wawan duduk berhadapan dengan Sinta"
    ],
    "answer": "C",
    "explanation": "Susunan awal ke kanan: K1=Sinta, K2=Tono, K3=Umar, K4=Vina, K5=Wawan, K6=Yuni. Setelah Tono (K2) bertukar dengan Wawan (K5), maka kursi K2 (tepat di sebelah kanan Sinta) ditempati oleh Wawan.",
    "tip": "Tukar label nama pada dua kursi yang disebutkan dalam pengandaian sebelum mengevaluasi pernyataan opsi."
  },
  {
    "id": "tiu-pam-140",
    "subPattern": "evaluasi-pernyataan-dan-kemungkinan",
    "difficulty": "sedang",
    "prompt": "Saat diskusi kelompok penyusunan modul pelatihan, enam staf (Arif, Bella, Candra, Dewi, Erlan, Fajar) duduk melingkar menghadap ke pusat meja dengan susunan awal:\n(1) Bella duduk berhadapan dengan Erlan.\n(2) Candra duduk tepat di sebelah kanan Bella, dan Dewi duduk di sebelah kanan Candra.\n(3) Arif duduk tepat di sebelah kiri Bella.\nJika kemudian Candra bertukar kursi dengan Fajar, manakah pernyataan berikut yang BENAR?",
    "options": [
      "Candra duduk bersebelahan dengan Bella",
      "Dewi duduk berhadapan dengan Erlan",
      "Arif duduk di antara Candra dan Erlan",
      "Fajar duduk tepat di sebelah kanan Bella",
      "Fajar duduk berhadapan dengan Bella"
    ],
    "answer": "D",
    "explanation": "Susunan awal ke kanan: K1=Bella, K2=Candra, K3=Dewi, K4=Erlan, K5=Fajar, K6=Arif. Setelah Candra (K2) bertukar dengan Fajar (K5), maka kursi K2 (tepat di sebelah kanan Bella) ditempati oleh Fajar.",
    "tip": "Tukar label nama pada dua kursi yang disebutkan dalam pengandaian sebelum mengevaluasi pernyataan opsi."
  },
  {
    "id": "tiu-pam-141",
    "subPattern": "evaluasi-pernyataan-dan-kemungkinan",
    "difficulty": "sulit",
    "prompt": "Dalam rapat tim reformasi birokrasi instansi, enam analis (Galih, Hana, Irwan, Jihan, Kiki, Laras) duduk mengelilingi meja bundar menghadap ke pusat meja. Diketahui:\n(1) Irwan duduk berhadapan dengan Laras.\n(2) Jihan duduk tepat di sebelah kanan Irwan.\n(3) Hana duduk tepat di sebelah kiri Irwan.\nJika Kiki duduk tepat di sebelah kanan Jihan, maka pernyataan yang PASTI BENAR adalah...",
    "options": [
      "Kiki duduk berhadapan dengan Jihan",
      "Galih duduk di antara Jihan dan Laras",
      "Kiki duduk bersebelahan dengan Hana",
      "Laras duduk tepat di sebelah kanan Irwan",
      "Galih duduk berhadapan dengan Jihan"
    ],
    "answer": "E",
    "explanation": "Dari petunjuk tetap: K1=Irwan, K2=Jihan, K4=Laras, dan K6=Hana. Tersisa kursi K3 dan K5 untuk Kiki dan Galih. Jika Kiki duduk di sebelah kanan Jihan (yaitu K3), maka Galih pasti menempati K5 yang berhadapan langsung dengan K2 (Jihan).",
    "tip": "Masukkan syarat tambahan pada kalimat tanya ('Jika...') ke sketsa meja bundar untuk mengunci dua kursi yang belum terisi."
  },
  {
    "id": "tiu-pam-142",
    "subPattern": "evaluasi-pernyataan-dan-kemungkinan",
    "difficulty": "sulit",
    "prompt": "Saat pengarahan teknis petugas lapangan, enam analis (Doni, Eka, Fani, Gilang, Hesti, Ivan) duduk mengelilingi meja bundar menghadap ke pusat meja. Diketahui:\n(1) Gilang duduk berhadapan dengan Doni.\n(2) Hesti duduk tepat di sebelah kanan Gilang.\n(3) Fani duduk tepat di sebelah kiri Gilang.\nJika Ivan duduk tepat di sebelah kanan Hesti, maka pernyataan yang PASTI BENAR adalah...",
    "options": [
      "Eka duduk berhadapan dengan Hesti",
      "Ivan duduk berhadapan dengan Hesti",
      "Eka duduk di antara Hesti dan Doni",
      "Ivan duduk bersebelahan dengan Fani",
      "Doni duduk tepat di sebelah kanan Gilang"
    ],
    "answer": "A",
    "explanation": "Dari petunjuk tetap: K1=Gilang, K2=Hesti, K4=Doni, dan K6=Fani. Tersisa kursi K3 dan K5 untuk Ivan dan Eka. Jika Ivan duduk di sebelah kanan Hesti (yaitu K3), maka Eka pasti menempati K5 yang berhadapan langsung dengan K2 (Hesti).",
    "tip": "Masukkan syarat tambahan pada kalimat tanya ('Jika...') ke sketsa meja bundar untuk mengunci dua kursi yang belum terisi."
  },
  {
    "id": "tiu-pam-143",
    "subPattern": "evaluasi-pernyataan-dan-kemungkinan",
    "difficulty": "sulit",
    "prompt": "Dalam rapat evaluasi kinerja di ruang bundar kementerian, enam analis (Pandu, Rania, Satria, Tania, Ulfa, Viktor) duduk mengelilingi meja bundar menghadap ke pusat meja. Diketahui:\n(1) Ulfa duduk berhadapan dengan Rania.\n(2) Viktor duduk tepat di sebelah kanan Ulfa.\n(3) Tania duduk tepat di sebelah kiri Ulfa.\nJika Pandu duduk tepat di sebelah kanan Viktor, maka pernyataan yang PASTI BENAR adalah...",
    "options": [
      "Pandu duduk berhadapan dengan Viktor",
      "Satria duduk berhadapan dengan Viktor",
      "Satria duduk di antara Viktor dan Rania",
      "Pandu duduk bersebelahan dengan Tania",
      "Rania duduk tepat di sebelah kanan Ulfa"
    ],
    "answer": "B",
    "explanation": "Dari petunjuk tetap: K1=Ulfa, K2=Viktor, K4=Rania, dan K6=Tania. Tersisa kursi K3 dan K5 untuk Pandu dan Satria. Jika Pandu duduk di sebelah kanan Viktor (yaitu K3), maka Satria pasti menempati K5 yang berhadapan langsung dengan K2 (Viktor).",
    "tip": "Masukkan syarat tambahan pada kalimat tanya ('Jika...') ke sketsa meja bundar untuk mengunci dua kursi yang belum terisi."
  },
  {
    "id": "tiu-pam-144",
    "subPattern": "evaluasi-pernyataan-dan-kemungkinan",
    "difficulty": "sulit",
    "prompt": "Saat diskusi panel penyusunan kebijakan publik, enam analis (Bagas, Clara, Damar, Elsa, Ferdi, Gisela) duduk mengelilingi meja bundar menghadap ke pusat meja. Diketahui:\n(1) Gisela duduk berhadapan dengan Damar.\n(2) Bagas duduk tepat di sebelah kanan Gisela.\n(3) Ferdi duduk tepat di sebelah kiri Gisela.\nJika Clara duduk tepat di sebelah kanan Bagas, maka pernyataan yang PASTI BENAR adalah...",
    "options": [
      "Clara duduk berhadapan dengan Bagas",
      "Elsa duduk di antara Bagas dan Damar",
      "Elsa duduk berhadapan dengan Bagas",
      "Clara duduk bersebelahan dengan Ferdi",
      "Damar duduk tepat di sebelah kanan Gisela"
    ],
    "answer": "C",
    "explanation": "Dari petunjuk tetap: K1=Gisela, K2=Bagas, K4=Damar, dan K6=Ferdi. Tersisa kursi K3 dan K5 untuk Clara dan Elsa. Jika Clara duduk di sebelah kanan Bagas (yaitu K3), maka Elsa pasti menempati K5 yang berhadapan langsung dengan K2 (Bagas).",
    "tip": "Masukkan syarat tambahan pada kalimat tanya ('Jika...') ke sketsa meja bundar untuk mengunci dua kursi yang belum terisi."
  },
  {
    "id": "tiu-pam-145",
    "subPattern": "evaluasi-pernyataan-dan-kemungkinan",
    "difficulty": "sulit",
    "prompt": "Dalam sesi koordinasi tim audit inspektorat, enam analis (Reza, Salsa, Tegar, Utami, Vino, Wulan) duduk mengelilingi meja bundar menghadap ke pusat meja. Diketahui:\n(1) Reza duduk berhadapan dengan Utami.\n(2) Salsa duduk tepat di sebelah kanan Reza.\n(3) Wulan duduk tepat di sebelah kiri Reza.\nJika Tegar duduk tepat di sebelah kanan Salsa, maka pernyataan yang PASTI BENAR adalah...",
    "options": [
      "Tegar duduk berhadapan dengan Salsa",
      "Vino duduk di antara Salsa dan Utami",
      "Tegar duduk bersebelahan dengan Wulan",
      "Vino duduk berhadapan dengan Salsa",
      "Utami duduk tepat di sebelah kanan Reza"
    ],
    "answer": "D",
    "explanation": "Dari petunjuk tetap: K1=Reza, K2=Salsa, K4=Utami, dan K6=Wulan. Tersisa kursi K3 dan K5 untuk Tegar dan Vino. Jika Tegar duduk di sebelah kanan Salsa (yaitu K3), maka Vino pasti menempati K5 yang berhadapan langsung dengan K2 (Salsa).",
    "tip": "Masukkan syarat tambahan pada kalimat tanya ('Jika...') ke sketsa meja bundar untuk mengunci dua kursi yang belum terisi."
  },
  {
    "id": "tiu-pam-146",
    "subPattern": "evaluasi-pernyataan-dan-kemungkinan",
    "difficulty": "sulit",
    "prompt": "Saat rapat pimpinan unit pelayanan terpadu, enam analis (Andi, Budi, Citra, Dina, Eko, Farah) duduk mengelilingi meja bundar menghadap ke pusat meja. Diketahui:\n(1) Budi duduk berhadapan dengan Eko.\n(2) Citra duduk tepat di sebelah kanan Budi.\n(3) Andi duduk tepat di sebelah kiri Budi.\nJika Dina duduk tepat di sebelah kanan Citra, maka pernyataan yang PASTI BENAR adalah...",
    "options": [
      "Dina duduk berhadapan dengan Citra",
      "Farah duduk di antara Citra dan Eko",
      "Dina duduk bersebelahan dengan Andi",
      "Eko duduk tepat di sebelah kanan Budi",
      "Farah duduk berhadapan dengan Citra"
    ],
    "answer": "E",
    "explanation": "Dari petunjuk tetap: K1=Budi, K2=Citra, K4=Eko, dan K6=Andi. Tersisa kursi K3 dan K5 untuk Dina dan Farah. Jika Dina duduk di sebelah kanan Citra (yaitu K3), maka Farah pasti menempati K5 yang berhadapan langsung dengan K2 (Citra).",
    "tip": "Masukkan syarat tambahan pada kalimat tanya ('Jika...') ke sketsa meja bundar untuk mengunci dua kursi yang belum terisi."
  },
  {
    "id": "tiu-pam-147",
    "subPattern": "evaluasi-pernyataan-dan-kemungkinan",
    "difficulty": "sulit",
    "prompt": "Dalam forum grup terfokus (FGD) seleksi kompetensi, enam analis (Gita, Hadi, Indra, Joko, Kartika, Lukman) duduk mengelilingi meja bundar menghadap ke pusat meja. Diketahui:\n(1) Indra duduk berhadapan dengan Lukman.\n(2) Joko duduk tepat di sebelah kanan Indra.\n(3) Hadi duduk tepat di sebelah kiri Indra.\nJika Kartika duduk tepat di sebelah kanan Joko, maka pernyataan yang PASTI BENAR adalah...",
    "options": [
      "Gita duduk berhadapan dengan Joko",
      "Kartika duduk berhadapan dengan Joko",
      "Gita duduk di antara Joko dan Lukman",
      "Kartika duduk bersebelahan dengan Hadi",
      "Lukman duduk tepat di sebelah kanan Indra"
    ],
    "answer": "A",
    "explanation": "Dari petunjuk tetap: K1=Indra, K2=Joko, K4=Lukman, dan K6=Hadi. Tersisa kursi K3 dan K5 untuk Kartika dan Gita. Jika Kartika duduk di sebelah kanan Joko (yaitu K3), maka Gita pasti menempati K5 yang berhadapan langsung dengan K2 (Joko).",
    "tip": "Masukkan syarat tambahan pada kalimat tanya ('Jika...') ke sketsa meja bundar untuk mengunci dua kursi yang belum terisi."
  },
  {
    "id": "tiu-pam-148",
    "subPattern": "evaluasi-pernyataan-dan-kemungkinan",
    "difficulty": "sulit",
    "prompt": "Saat jamuan makan malam delegasi daerah, enam analis (Mira, Nanda, Oki, Putri, Qori, Rama) duduk mengelilingi meja bundar menghadap ke pusat meja. Diketahui:\n(1) Putri duduk berhadapan dengan Mira.\n(2) Qori duduk tepat di sebelah kanan Putri.\n(3) Oki duduk tepat di sebelah kiri Putri.\nJika Rama duduk tepat di sebelah kanan Qori, maka pernyataan yang PASTI BENAR adalah...",
    "options": [
      "Rama duduk berhadapan dengan Qori",
      "Nanda duduk berhadapan dengan Qori",
      "Nanda duduk di antara Qori dan Mira",
      "Rama duduk bersebelahan dengan Oki",
      "Mira duduk tepat di sebelah kanan Putri"
    ],
    "answer": "B",
    "explanation": "Dari petunjuk tetap: K1=Putri, K2=Qori, K4=Mira, dan K6=Oki. Tersisa kursi K3 dan K5 untuk Rama dan Nanda. Jika Rama duduk di sebelah kanan Qori (yaitu K3), maka Nanda pasti menempati K5 yang berhadapan langsung dengan K2 (Qori).",
    "tip": "Masukkan syarat tambahan pada kalimat tanya ('Jika...') ke sketsa meja bundar untuk mengunci dua kursi yang belum terisi."
  },
  {
    "id": "tiu-pam-149",
    "subPattern": "evaluasi-pernyataan-dan-kemungkinan",
    "difficulty": "sulit",
    "prompt": "Dalam rapat panitia pelaksana diklat prajabatan, enam analis (Sinta, Tono, Umar, Vina, Wawan, Yuni) duduk mengelilingi meja bundar menghadap ke pusat meja. Diketahui:\n(1) Wawan duduk berhadapan dengan Tono.\n(2) Yuni duduk tepat di sebelah kanan Wawan.\n(3) Vina duduk tepat di sebelah kiri Wawan.\nJika Sinta duduk tepat di sebelah kanan Yuni, maka pernyataan yang PASTI BENAR adalah...",
    "options": [
      "Sinta duduk berhadapan dengan Yuni",
      "Umar duduk di antara Yuni dan Tono",
      "Umar duduk berhadapan dengan Yuni",
      "Sinta duduk bersebelahan dengan Vina",
      "Tono duduk tepat di sebelah kanan Wawan"
    ],
    "answer": "C",
    "explanation": "Dari petunjuk tetap: K1=Wawan, K2=Yuni, K4=Tono, dan K6=Vina. Tersisa kursi K3 dan K5 untuk Sinta dan Umar. Jika Sinta duduk di sebelah kanan Yuni (yaitu K3), maka Umar pasti menempati K5 yang berhadapan langsung dengan K2 (Yuni).",
    "tip": "Masukkan syarat tambahan pada kalimat tanya ('Jika...') ke sketsa meja bundar untuk mengunci dua kursi yang belum terisi."
  },
  {
    "id": "tiu-pam-150",
    "subPattern": "evaluasi-pernyataan-dan-kemungkinan",
    "difficulty": "sulit",
    "prompt": "Saat diskusi kelompok penyusunan modul pelatihan, enam analis (Arif, Bella, Candra, Dewi, Erlan, Fajar) duduk mengelilingi meja bundar menghadap ke pusat meja. Diketahui:\n(1) Fajar duduk berhadapan dengan Candra.\n(2) Arif duduk tepat di sebelah kanan Fajar.\n(3) Erlan duduk tepat di sebelah kiri Fajar.\nJika Bella duduk tepat di sebelah kanan Arif, maka pernyataan yang PASTI BENAR adalah...",
    "options": [
      "Bella duduk berhadapan dengan Arif",
      "Dewi duduk di antara Arif dan Candra",
      "Bella duduk bersebelahan dengan Erlan",
      "Dewi duduk berhadapan dengan Arif",
      "Candra duduk tepat di sebelah kanan Fajar"
    ],
    "answer": "D",
    "explanation": "Dari petunjuk tetap: K1=Fajar, K2=Arif, K4=Candra, dan K6=Erlan. Tersisa kursi K3 dan K5 untuk Bella dan Dewi. Jika Bella duduk di sebelah kanan Arif (yaitu K3), maka Dewi pasti menempati K5 yang berhadapan langsung dengan K2 (Arif).",
    "tip": "Masukkan syarat tambahan pada kalimat tanya ('Jika...') ke sketsa meja bundar untuk mengunci dua kursi yang belum terisi."
  }
];
