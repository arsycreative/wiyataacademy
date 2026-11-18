import type { QuestionDraft } from "@/modules/question-bank/domain/question";

export const melingkarBatch1Drafts: readonly QuestionDraft[] = [
  {
    "id": "tiu-pam-001",
    "subPattern": "posisi-berhadapan",
    "difficulty": "mudah",
    "prompt": "Dalam rapat evaluasi kinerja di ruang bundar kementerian, enam pegawai (Andi, Budi, Citra, Dina, Eko, Farah) duduk mengelilingi meja bundar menghadap ke pusat meja. Diketahui:\n(1) Andi duduk tepat berhadapan dengan Dina.\n(2) Budi duduk tepat di sebelah kanan Andi.\n(3) Citra duduk di antara Budi dan Dina.\n(4) Eko duduk tepat di sebelah kanan Dina.\nSiapakah yang duduk tepat berhadapan dengan Citra?",
    "options": [
      "Farah",
      "Andi",
      "Budi",
      "Dina",
      "Eko"
    ],
    "answer": "A",
    "explanation": "Urutan kursi melingkar ke arah kanan (berlawanan jarum jam): K1=Andi, K2=Budi, K3=Citra, K4=Dina (berhadapan dengan Andi), K5=Eko (kanan Dina), sehingga kursi K6 yang tersisa ditempati oleh Farah. Pada meja 6 kursi, K3 (Citra) berhadapan langsung dengan K6 (Farah).",
    "tip": "Pada meja bundar 6 kursi, kursi nomor k selalu berhadapan dengan kursi nomor (k + 3)."
  },
  {
    "id": "tiu-pam-002",
    "subPattern": "posisi-berhadapan",
    "difficulty": "mudah",
    "prompt": "Saat diskusi panel penyusunan kebijakan publik, enam pegawai (Gita, Hadi, Indra, Joko, Kartika, Lukman) duduk mengelilingi meja bundar menghadap ke pusat meja. Diketahui:\n(1) Hadi duduk tepat berhadapan dengan Kartika.\n(2) Indra duduk tepat di sebelah kanan Hadi.\n(3) Joko duduk di antara Indra dan Kartika.\n(4) Lukman duduk tepat di sebelah kanan Kartika.\nSiapakah yang duduk tepat berhadapan dengan Indra?",
    "options": [
      "Hadi",
      "Lukman",
      "Joko",
      "Kartika",
      "Gita"
    ],
    "answer": "B",
    "explanation": "Urutan kursi melingkar ke arah kanan (berlawanan jarum jam): K1=Hadi, K2=Indra, K3=Joko, K4=Kartika (berhadapan dengan Hadi), K5=Lukman (kanan Kartika), sehingga kursi K6 yang tersisa ditempati oleh Gita. Pada meja 6 kursi, K2 (Indra) berhadapan langsung dengan K5 (Lukman).",
    "tip": "Pada meja bundar 6 kursi, kursi nomor k selalu berhadapan dengan kursi nomor (k + 3)."
  },
  {
    "id": "tiu-pam-003",
    "subPattern": "posisi-berhadapan",
    "difficulty": "mudah",
    "prompt": "Dalam sesi koordinasi tim audit inspektorat, enam pegawai (Mira, Nanda, Oki, Putri, Qori, Rama) duduk mengelilingi meja bundar menghadap ke pusat meja. Diketahui:\n(1) Oki duduk tepat berhadapan dengan Rama.\n(2) Putri duduk tepat di sebelah kanan Oki.\n(3) Qori duduk di antara Putri dan Rama.\n(4) Mira duduk tepat di sebelah kanan Rama.\nSiapakah yang duduk tepat berhadapan dengan Qori?",
    "options": [
      "Oki",
      "Putri",
      "Nanda",
      "Rama",
      "Mira"
    ],
    "answer": "C",
    "explanation": "Urutan kursi melingkar ke arah kanan (berlawanan jarum jam): K1=Oki, K2=Putri, K3=Qori, K4=Rama (berhadapan dengan Oki), K5=Mira (kanan Rama), sehingga kursi K6 yang tersisa ditempati oleh Nanda. Pada meja 6 kursi, K3 (Qori) berhadapan langsung dengan K6 (Nanda).",
    "tip": "Pada meja bundar 6 kursi, kursi nomor k selalu berhadapan dengan kursi nomor (k + 3)."
  },
  {
    "id": "tiu-pam-004",
    "subPattern": "posisi-berhadapan",
    "difficulty": "mudah",
    "prompt": "Saat rapat pimpinan unit pelayanan terpadu, enam pegawai (Sinta, Tono, Umar, Vina, Wawan, Yuni) duduk mengelilingi meja bundar menghadap ke pusat meja. Diketahui:\n(1) Vina duduk tepat berhadapan dengan Sinta.\n(2) Wawan duduk tepat di sebelah kanan Vina.\n(3) Yuni duduk di antara Wawan dan Sinta.\n(4) Tono duduk tepat di sebelah kanan Sinta.\nSiapakah yang duduk tepat berhadapan dengan Wawan?",
    "options": [
      "Vina",
      "Yuni",
      "Sinta",
      "Tono",
      "Umar"
    ],
    "answer": "D",
    "explanation": "Urutan kursi melingkar ke arah kanan (berlawanan jarum jam): K1=Vina, K2=Wawan, K3=Yuni, K4=Sinta (berhadapan dengan Vina), K5=Tono (kanan Sinta), sehingga kursi K6 yang tersisa ditempati oleh Umar. Pada meja 6 kursi, K2 (Wawan) berhadapan langsung dengan K5 (Tono).",
    "tip": "Pada meja bundar 6 kursi, kursi nomor k selalu berhadapan dengan kursi nomor (k + 3)."
  },
  {
    "id": "tiu-pam-005",
    "subPattern": "posisi-berhadapan",
    "difficulty": "mudah",
    "prompt": "Dalam forum grup terfokus (FGD) seleksi kompetensi, enam pegawai (Arif, Bella, Candra, Dewi, Erlan, Fajar) duduk mengelilingi meja bundar menghadap ke pusat meja. Diketahui:\n(1) Erlan duduk tepat berhadapan dengan Bella.\n(2) Fajar duduk tepat di sebelah kanan Erlan.\n(3) Arif duduk di antara Fajar dan Bella.\n(4) Candra duduk tepat di sebelah kanan Bella.\nSiapakah yang duduk tepat berhadapan dengan Arif?",
    "options": [
      "Erlan",
      "Fajar",
      "Bella",
      "Candra",
      "Dewi"
    ],
    "answer": "E",
    "explanation": "Urutan kursi melingkar ke arah kanan (berlawanan jarum jam): K1=Erlan, K2=Fajar, K3=Arif, K4=Bella (berhadapan dengan Erlan), K5=Candra (kanan Bella), sehingga kursi K6 yang tersisa ditempati oleh Dewi. Pada meja 6 kursi, K3 (Arif) berhadapan langsung dengan K6 (Dewi).",
    "tip": "Pada meja bundar 6 kursi, kursi nomor k selalu berhadapan dengan kursi nomor (k + 3)."
  },
  {
    "id": "tiu-pam-006",
    "subPattern": "posisi-berhadapan",
    "difficulty": "mudah",
    "prompt": "Saat jamuan makan malam delegasi daerah, enam pegawai (Galih, Hana, Irwan, Jihan, Kiki, Laras) duduk mengelilingi meja bundar menghadap ke pusat meja. Diketahui:\n(1) Laras duduk tepat berhadapan dengan Irwan.\n(2) Galih duduk tepat di sebelah kanan Laras.\n(3) Hana duduk di antara Galih dan Irwan.\n(4) Jihan duduk tepat di sebelah kanan Irwan.\nSiapakah yang duduk tepat berhadapan dengan Galih?",
    "options": [
      "Jihan",
      "Laras",
      "Hana",
      "Irwan",
      "Kiki"
    ],
    "answer": "A",
    "explanation": "Urutan kursi melingkar ke arah kanan (berlawanan jarum jam): K1=Laras, K2=Galih, K3=Hana, K4=Irwan (berhadapan dengan Laras), K5=Jihan (kanan Irwan), sehingga kursi K6 yang tersisa ditempati oleh Kiki. Pada meja 6 kursi, K2 (Galih) berhadapan langsung dengan K5 (Jihan).",
    "tip": "Pada meja bundar 6 kursi, kursi nomor k selalu berhadapan dengan kursi nomor (k + 3)."
  },
  {
    "id": "tiu-pam-007",
    "subPattern": "posisi-berhadapan",
    "difficulty": "mudah",
    "prompt": "Dalam rapat panitia pelaksana diklat prajabatan, enam pegawai (Doni, Eka, Fani, Gilang, Hesti, Ivan) duduk mengelilingi meja bundar menghadap ke pusat meja. Diketahui:\n(1) Doni duduk tepat berhadapan dengan Gilang.\n(2) Eka duduk tepat di sebelah kanan Doni.\n(3) Fani duduk di antara Eka dan Gilang.\n(4) Hesti duduk tepat di sebelah kanan Gilang.\nSiapakah yang duduk tepat berhadapan dengan Fani?",
    "options": [
      "Doni",
      "Ivan",
      "Eka",
      "Gilang",
      "Hesti"
    ],
    "answer": "B",
    "explanation": "Urutan kursi melingkar ke arah kanan (berlawanan jarum jam): K1=Doni, K2=Eka, K3=Fani, K4=Gilang (berhadapan dengan Doni), K5=Hesti (kanan Gilang), sehingga kursi K6 yang tersisa ditempati oleh Ivan. Pada meja 6 kursi, K3 (Fani) berhadapan langsung dengan K6 (Ivan).",
    "tip": "Pada meja bundar 6 kursi, kursi nomor k selalu berhadapan dengan kursi nomor (k + 3)."
  },
  {
    "id": "tiu-pam-008",
    "subPattern": "posisi-berhadapan",
    "difficulty": "mudah",
    "prompt": "Saat diskusi kelompok penyusunan modul pelatihan, enam pegawai (Pandu, Rania, Satria, Tania, Ulfa, Viktor) duduk mengelilingi meja bundar menghadap ke pusat meja. Diketahui:\n(1) Rania duduk tepat berhadapan dengan Ulfa.\n(2) Satria duduk tepat di sebelah kanan Rania.\n(3) Tania duduk di antara Satria dan Ulfa.\n(4) Viktor duduk tepat di sebelah kanan Ulfa.\nSiapakah yang duduk tepat berhadapan dengan Satria?",
    "options": [
      "Rania",
      "Tania",
      "Viktor",
      "Ulfa",
      "Pandu"
    ],
    "answer": "C",
    "explanation": "Urutan kursi melingkar ke arah kanan (berlawanan jarum jam): K1=Rania, K2=Satria, K3=Tania, K4=Ulfa (berhadapan dengan Rania), K5=Viktor (kanan Ulfa), sehingga kursi K6 yang tersisa ditempati oleh Pandu. Pada meja 6 kursi, K2 (Satria) berhadapan langsung dengan K5 (Viktor).",
    "tip": "Pada meja bundar 6 kursi, kursi nomor k selalu berhadapan dengan kursi nomor (k + 3)."
  },
  {
    "id": "tiu-pam-009",
    "subPattern": "posisi-berhadapan",
    "difficulty": "mudah",
    "prompt": "Dalam rapat tim reformasi birokrasi instansi, enam pegawai (Bagas, Clara, Damar, Elsa, Ferdi, Gisela) duduk mengelilingi meja bundar menghadap ke pusat meja. Diketahui:\n(1) Damar duduk tepat berhadapan dengan Gisela.\n(2) Elsa duduk tepat di sebelah kanan Damar.\n(3) Ferdi duduk di antara Elsa dan Gisela.\n(4) Bagas duduk tepat di sebelah kanan Gisela.\nSiapakah yang duduk tepat berhadapan dengan Ferdi?",
    "options": [
      "Damar",
      "Elsa",
      "Gisela",
      "Clara",
      "Bagas"
    ],
    "answer": "D",
    "explanation": "Urutan kursi melingkar ke arah kanan (berlawanan jarum jam): K1=Damar, K2=Elsa, K3=Ferdi, K4=Gisela (berhadapan dengan Damar), K5=Bagas (kanan Gisela), sehingga kursi K6 yang tersisa ditempati oleh Clara. Pada meja 6 kursi, K3 (Ferdi) berhadapan langsung dengan K6 (Clara).",
    "tip": "Pada meja bundar 6 kursi, kursi nomor k selalu berhadapan dengan kursi nomor (k + 3)."
  },
  {
    "id": "tiu-pam-010",
    "subPattern": "posisi-berhadapan",
    "difficulty": "mudah",
    "prompt": "Saat pengarahan teknis petugas lapangan, enam pegawai (Reza, Salsa, Tegar, Utami, Vino, Wulan) duduk mengelilingi meja bundar menghadap ke pusat meja. Diketahui:\n(1) Utami duduk tepat berhadapan dengan Reza.\n(2) Vino duduk tepat di sebelah kanan Utami.\n(3) Wulan duduk di antara Vino dan Reza.\n(4) Salsa duduk tepat di sebelah kanan Reza.\nSiapakah yang duduk tepat berhadapan dengan Vino?",
    "options": [
      "Utami",
      "Wulan",
      "Reza",
      "Tegar",
      "Salsa"
    ],
    "answer": "E",
    "explanation": "Urutan kursi melingkar ke arah kanan (berlawanan jarum jam): K1=Utami, K2=Vino, K3=Wulan, K4=Reza (berhadapan dengan Utami), K5=Salsa (kanan Reza), sehingga kursi K6 yang tersisa ditempati oleh Tegar. Pada meja 6 kursi, K2 (Vino) berhadapan langsung dengan K5 (Salsa).",
    "tip": "Pada meja bundar 6 kursi, kursi nomor k selalu berhadapan dengan kursi nomor (k + 3)."
  },
  {
    "id": "tiu-pam-011",
    "subPattern": "posisi-berhadapan",
    "difficulty": "sedang",
    "prompt": "Dalam rapat evaluasi kinerja di ruang bundar kementerian, enam anggota tim (Sinta, Tono, Umar, Vina, Wawan, Yuni) duduk mengelilingi meja bundar menghadap ke tengah. Diketahui:\n(1) Wawan duduk tepat di antara Vina dan Sinta, dengan Sinta berada di sebelah kanan Wawan.\n(2) Yuni duduk tepat berhadapan dengan Wawan.\n(3) Umar tidak boleh duduk bersebelahan dengan Vina.\nSiapakah yang duduk tepat berhadapan dengan Umar?",
    "options": [
      "Vina",
      "Wawan",
      "Sinta",
      "Yuni",
      "Tono"
    ],
    "answer": "A",
    "explanation": "Tempatkan Wawan di K1, maka kanan Wawan adalah K2=Sinta dan kirinya adalah K6=Vina. Karena Yuni berhadapan dengan Wawan, maka K4=Yuni. Tersisa K3 dan K5; karena Umar tidak boleh di samping Vina (K6), maka Umar harus di K3 dan Tono di K5. Dengan demikian, yang berhadapan dengan Umar adalah Vina.",
    "tip": "Kunci posisi tiga orang yang berurutan terlebih dahulu, lalu gunakan syarat larangan ('tidak bersebelahan') untuk mengisi dua kursi yang tersisa."
  },
  {
    "id": "tiu-pam-012",
    "subPattern": "posisi-berhadapan",
    "difficulty": "sedang",
    "prompt": "Saat diskusi panel penyusunan kebijakan publik, enam anggota tim (Arif, Bella, Candra, Dewi, Erlan, Fajar) duduk mengelilingi meja bundar menghadap ke tengah. Diketahui:\n(1) Fajar duduk tepat di antara Erlan dan Bella, dengan Bella berada di sebelah kanan Fajar.\n(2) Arif duduk tepat berhadapan dengan Fajar.\n(3) Dewi tidak boleh duduk bersebelahan dengan Erlan.\nSiapakah yang duduk tepat berhadapan dengan Candra?",
    "options": [
      "Fajar",
      "Bella",
      "Dewi",
      "Arif",
      "Erlan"
    ],
    "answer": "B",
    "explanation": "Tempatkan Fajar di K1, maka kanan Fajar adalah K2=Bella dan kirinya adalah K6=Erlan. Karena Arif berhadapan dengan Fajar, maka K4=Arif. Tersisa K3 dan K5; karena Dewi tidak boleh di samping Erlan (K6), maka Dewi harus di K3 dan Candra di K5. Dengan demikian, yang berhadapan dengan Candra adalah Bella.",
    "tip": "Kunci posisi tiga orang yang berurutan terlebih dahulu, lalu gunakan syarat larangan ('tidak bersebelahan') untuk mengisi dua kursi yang tersisa."
  },
  {
    "id": "tiu-pam-013",
    "subPattern": "posisi-berhadapan",
    "difficulty": "sedang",
    "prompt": "Dalam sesi koordinasi tim audit inspektorat, enam anggota tim (Galih, Hana, Irwan, Jihan, Kiki, Laras) duduk mengelilingi meja bundar menghadap ke tengah. Diketahui:\n(1) Galih duduk tepat di antara Laras dan Irwan, dengan Irwan berada di sebelah kanan Galih.\n(2) Hana duduk tepat berhadapan dengan Galih.\n(3) Kiki tidak boleh duduk bersebelahan dengan Laras.\nSiapakah yang duduk tepat berhadapan dengan Kiki?",
    "options": [
      "Galih",
      "Irwan",
      "Laras",
      "Hana",
      "Jihan"
    ],
    "answer": "C",
    "explanation": "Tempatkan Galih di K1, maka kanan Galih adalah K2=Irwan dan kirinya adalah K6=Laras. Karena Hana berhadapan dengan Galih, maka K4=Hana. Tersisa K3 dan K5; karena Kiki tidak boleh di samping Laras (K6), maka Kiki harus di K3 dan Jihan di K5. Dengan demikian, yang berhadapan dengan Kiki adalah Laras.",
    "tip": "Kunci posisi tiga orang yang berurutan terlebih dahulu, lalu gunakan syarat larangan ('tidak bersebelahan') untuk mengisi dua kursi yang tersisa."
  },
  {
    "id": "tiu-pam-014",
    "subPattern": "posisi-berhadapan",
    "difficulty": "sedang",
    "prompt": "Saat rapat pimpinan unit pelayanan terpadu, enam anggota tim (Doni, Eka, Fani, Gilang, Hesti, Ivan) duduk mengelilingi meja bundar menghadap ke tengah. Diketahui:\n(1) Eka duduk tepat di antara Doni dan Gilang, dengan Gilang berada di sebelah kanan Eka.\n(2) Fani duduk tepat berhadapan dengan Eka.\n(3) Ivan tidak boleh duduk bersebelahan dengan Doni.\nSiapakah yang duduk tepat berhadapan dengan Hesti?",
    "options": [
      "Eka",
      "Ivan",
      "Fani",
      "Gilang",
      "Doni"
    ],
    "answer": "D",
    "explanation": "Tempatkan Eka di K1, maka kanan Eka adalah K2=Gilang dan kirinya adalah K6=Doni. Karena Fani berhadapan dengan Eka, maka K4=Fani. Tersisa K3 dan K5; karena Ivan tidak boleh di samping Doni (K6), maka Ivan harus di K3 dan Hesti di K5. Dengan demikian, yang berhadapan dengan Hesti adalah Gilang.",
    "tip": "Kunci posisi tiga orang yang berurutan terlebih dahulu, lalu gunakan syarat larangan ('tidak bersebelahan') untuk mengisi dua kursi yang tersisa."
  },
  {
    "id": "tiu-pam-015",
    "subPattern": "posisi-berhadapan",
    "difficulty": "sedang",
    "prompt": "Dalam forum grup terfokus (FGD) seleksi kompetensi, enam anggota tim (Pandu, Rania, Satria, Tania, Ulfa, Viktor) duduk mengelilingi meja bundar menghadap ke tengah. Diketahui:\n(1) Satria duduk tepat di antara Rania dan Ulfa, dengan Ulfa berada di sebelah kanan Satria.\n(2) Tania duduk tepat berhadapan dengan Satria.\n(3) Pandu tidak boleh duduk bersebelahan dengan Rania.\nSiapakah yang duduk tepat berhadapan dengan Pandu?",
    "options": [
      "Satria",
      "Ulfa",
      "Tania",
      "Viktor",
      "Rania"
    ],
    "answer": "E",
    "explanation": "Tempatkan Satria di K1, maka kanan Satria adalah K2=Ulfa dan kirinya adalah K6=Rania. Karena Tania berhadapan dengan Satria, maka K4=Tania. Tersisa K3 dan K5; karena Pandu tidak boleh di samping Rania (K6), maka Pandu harus di K3 dan Viktor di K5. Dengan demikian, yang berhadapan dengan Pandu adalah Rania.",
    "tip": "Kunci posisi tiga orang yang berurutan terlebih dahulu, lalu gunakan syarat larangan ('tidak bersebelahan') untuk mengisi dua kursi yang tersisa."
  },
  {
    "id": "tiu-pam-016",
    "subPattern": "posisi-berhadapan",
    "difficulty": "sedang",
    "prompt": "Saat jamuan makan malam delegasi daerah, enam anggota tim (Bagas, Clara, Damar, Elsa, Ferdi, Gisela) duduk mengelilingi meja bundar menghadap ke tengah. Diketahui:\n(1) Elsa duduk tepat di antara Damar dan Gisela, dengan Gisela berada di sebelah kanan Elsa.\n(2) Ferdi duduk tepat berhadapan dengan Elsa.\n(3) Clara tidak boleh duduk bersebelahan dengan Damar.\nSiapakah yang duduk tepat berhadapan dengan Bagas?",
    "options": [
      "Gisela",
      "Elsa",
      "Clara",
      "Ferdi",
      "Damar"
    ],
    "answer": "A",
    "explanation": "Tempatkan Elsa di K1, maka kanan Elsa adalah K2=Gisela dan kirinya adalah K6=Damar. Karena Ferdi berhadapan dengan Elsa, maka K4=Ferdi. Tersisa K3 dan K5; karena Clara tidak boleh di samping Damar (K6), maka Clara harus di K3 dan Bagas di K5. Dengan demikian, yang berhadapan dengan Bagas adalah Gisela.",
    "tip": "Kunci posisi tiga orang yang berurutan terlebih dahulu, lalu gunakan syarat larangan ('tidak bersebelahan') untuk mengisi dua kursi yang tersisa."
  },
  {
    "id": "tiu-pam-017",
    "subPattern": "posisi-berhadapan",
    "difficulty": "sedang",
    "prompt": "Dalam rapat panitia pelaksana diklat prajabatan, enam anggota tim (Reza, Salsa, Tegar, Utami, Vino, Wulan) duduk mengelilingi meja bundar menghadap ke tengah. Diketahui:\n(1) Vino duduk tepat di antara Utami dan Reza, dengan Reza berada di sebelah kanan Vino.\n(2) Wulan duduk tepat berhadapan dengan Vino.\n(3) Tegar tidak boleh duduk bersebelahan dengan Utami.\nSiapakah yang duduk tepat berhadapan dengan Tegar?",
    "options": [
      "Vino",
      "Utami",
      "Reza",
      "Wulan",
      "Salsa"
    ],
    "answer": "B",
    "explanation": "Tempatkan Vino di K1, maka kanan Vino adalah K2=Reza dan kirinya adalah K6=Utami. Karena Wulan berhadapan dengan Vino, maka K4=Wulan. Tersisa K3 dan K5; karena Tegar tidak boleh di samping Utami (K6), maka Tegar harus di K3 dan Salsa di K5. Dengan demikian, yang berhadapan dengan Tegar adalah Utami.",
    "tip": "Kunci posisi tiga orang yang berurutan terlebih dahulu, lalu gunakan syarat larangan ('tidak bersebelahan') untuk mengisi dua kursi yang tersisa."
  },
  {
    "id": "tiu-pam-018",
    "subPattern": "posisi-berhadapan",
    "difficulty": "sedang",
    "prompt": "Saat diskusi kelompok penyusunan modul pelatihan, enam anggota tim (Andi, Budi, Citra, Dina, Eko, Farah) duduk mengelilingi meja bundar menghadap ke tengah. Diketahui:\n(1) Farah duduk tepat di antara Eko dan Budi, dengan Budi berada di sebelah kanan Farah.\n(2) Andi duduk tepat berhadapan dengan Farah.\n(3) Dina tidak boleh duduk bersebelahan dengan Eko.\nSiapakah yang duduk tepat berhadapan dengan Citra?",
    "options": [
      "Farah",
      "Dina",
      "Budi",
      "Andi",
      "Eko"
    ],
    "answer": "C",
    "explanation": "Tempatkan Farah di K1, maka kanan Farah adalah K2=Budi dan kirinya adalah K6=Eko. Karena Andi berhadapan dengan Farah, maka K4=Andi. Tersisa K3 dan K5; karena Dina tidak boleh di samping Eko (K6), maka Dina harus di K3 dan Citra di K5. Dengan demikian, yang berhadapan dengan Citra adalah Budi.",
    "tip": "Kunci posisi tiga orang yang berurutan terlebih dahulu, lalu gunakan syarat larangan ('tidak bersebelahan') untuk mengisi dua kursi yang tersisa."
  },
  {
    "id": "tiu-pam-019",
    "subPattern": "posisi-berhadapan",
    "difficulty": "sedang",
    "prompt": "Dalam rapat tim reformasi birokrasi instansi, enam anggota tim (Gita, Hadi, Indra, Joko, Kartika, Lukman) duduk mengelilingi meja bundar menghadap ke tengah. Diketahui:\n(1) Gita duduk tepat di antara Lukman dan Indra, dengan Indra berada di sebelah kanan Gita.\n(2) Hadi duduk tepat berhadapan dengan Gita.\n(3) Kartika tidak boleh duduk bersebelahan dengan Lukman.\nSiapakah yang duduk tepat berhadapan dengan Kartika?",
    "options": [
      "Gita",
      "Indra",
      "Hadi",
      "Lukman",
      "Joko"
    ],
    "answer": "D",
    "explanation": "Tempatkan Gita di K1, maka kanan Gita adalah K2=Indra dan kirinya adalah K6=Lukman. Karena Hadi berhadapan dengan Gita, maka K4=Hadi. Tersisa K3 dan K5; karena Kartika tidak boleh di samping Lukman (K6), maka Kartika harus di K3 dan Joko di K5. Dengan demikian, yang berhadapan dengan Kartika adalah Lukman.",
    "tip": "Kunci posisi tiga orang yang berurutan terlebih dahulu, lalu gunakan syarat larangan ('tidak bersebelahan') untuk mengisi dua kursi yang tersisa."
  },
  {
    "id": "tiu-pam-020",
    "subPattern": "posisi-berhadapan",
    "difficulty": "sedang",
    "prompt": "Saat pengarahan teknis petugas lapangan, enam anggota tim (Mira, Nanda, Oki, Putri, Qori, Rama) duduk mengelilingi meja bundar menghadap ke tengah. Diketahui:\n(1) Nanda duduk tepat di antara Mira dan Putri, dengan Putri berada di sebelah kanan Nanda.\n(2) Oki duduk tepat berhadapan dengan Nanda.\n(3) Rama tidak boleh duduk bersebelahan dengan Mira.\nSiapakah yang duduk tepat berhadapan dengan Qori?",
    "options": [
      "Nanda",
      "Rama",
      "Oki",
      "Mira",
      "Putri"
    ],
    "answer": "E",
    "explanation": "Tempatkan Nanda di K1, maka kanan Nanda adalah K2=Putri dan kirinya adalah K6=Mira. Karena Oki berhadapan dengan Nanda, maka K4=Oki. Tersisa K3 dan K5; karena Rama tidak boleh di samping Mira (K6), maka Rama harus di K3 dan Qori di K5. Dengan demikian, yang berhadapan dengan Qori adalah Putri.",
    "tip": "Kunci posisi tiga orang yang berurutan terlebih dahulu, lalu gunakan syarat larangan ('tidak bersebelahan') untuk mengisi dua kursi yang tersisa."
  },
  {
    "id": "tiu-pam-021",
    "subPattern": "posisi-berhadapan",
    "difficulty": "sulit",
    "prompt": "Dalam rapat evaluasi kinerja di ruang bundar kementerian, delapan pejabat (Adi, Bima, Cici, Dodi, Evi, Feri, Gina, Hendra) duduk mengelilingi meja bundar 8 kursi menghadap ke pusat meja. Diketahui:\n(1) Evi duduk berhadapan dengan Adi.\n(2) Feri duduk tepat di sebelah kanan Evi, dan Gina duduk tepat di sebelah kanan Feri.\n(3) Bima duduk berhadapan dengan Feri.\n(4) Cici duduk tepat di antara Bima dan Dodi, sedangkan Hendra duduk di sebelah kiri Adi.\nSiapakah yang duduk tepat berhadapan dengan Adi?",
    "options": [
      "Evi",
      "Feri",
      "Gina",
      "Hendra",
      "Bima"
    ],
    "answer": "A",
    "explanation": "Susunan melingkar 8 kursi ke arah kanan: K1=Evi, K2=Feri, K3=Gina, K4=Hendra (kiri Adi), K5=Adi (hadap Evi), K6=Bima (hadap Feri), K7=Cici, dan K8=Dodi. Pada meja 8 kursi, posisi berhadapan berjarak 4 kursi, sehingga Adi (K5) berhadapan dengan Evi (K1).",
    "tip": "Pada meja bundar 8 kursi, kursi nomor k selalu berhadapan dengan kursi nomor (k + 4)."
  },
  {
    "id": "tiu-pam-022",
    "subPattern": "posisi-berhadapan",
    "difficulty": "sulit",
    "prompt": "Saat diskusi panel penyusunan kebijakan publik, delapan pejabat (Aldo, Bunga, Cakra, Dinda, Erwin, Fitri, Guntur, Hilda) duduk mengelilingi meja bundar 8 kursi menghadap ke pusat meja. Diketahui:\n(1) Fitri duduk berhadapan dengan Bunga.\n(2) Guntur duduk tepat di sebelah kanan Fitri, dan Hilda duduk tepat di sebelah kanan Guntur.\n(3) Cakra duduk berhadapan dengan Guntur.\n(4) Dinda duduk tepat di antara Cakra dan Erwin, sedangkan Aldo duduk di sebelah kiri Bunga.\nSiapakah yang duduk tepat berhadapan dengan Hilda?",
    "options": [
      "Fitri",
      "Dinda",
      "Guntur",
      "Aldo",
      "Bunga"
    ],
    "answer": "B",
    "explanation": "Susunan melingkar 8 kursi ke arah kanan: K1=Fitri, K2=Guntur, K3=Hilda, K4=Aldo (kiri Bunga), K5=Bunga (hadap Fitri), K6=Cakra (hadap Guntur), K7=Dinda, dan K8=Erwin. Pada meja 8 kursi, posisi berhadapan berjarak 4 kursi, sehingga Hilda (K3) berhadapan dengan Dinda (K7).",
    "tip": "Pada meja bundar 8 kursi, kursi nomor k selalu berhadapan dengan kursi nomor (k + 4)."
  },
  {
    "id": "tiu-pam-023",
    "subPattern": "posisi-berhadapan",
    "difficulty": "sulit",
    "prompt": "Dalam sesi koordinasi tim audit inspektorat, delapan pejabat (Kevin, Lina, Mario, Nadia, Oscar, Putra, Rani, Seno) duduk mengelilingi meja bundar 8 kursi menghadap ke pusat meja. Diketahui:\n(1) Rani duduk berhadapan dengan Mario.\n(2) Seno duduk tepat di sebelah kanan Rani, dan Kevin duduk tepat di sebelah kanan Seno.\n(3) Nadia duduk berhadapan dengan Seno.\n(4) Oscar duduk tepat di antara Nadia dan Putra, sedangkan Lina duduk di sebelah kiri Mario.\nSiapakah yang duduk tepat berhadapan dengan Lina?",
    "options": [
      "Rani",
      "Seno",
      "Putra",
      "Kevin",
      "Mario"
    ],
    "answer": "C",
    "explanation": "Susunan melingkar 8 kursi ke arah kanan: K1=Rani, K2=Seno, K3=Kevin, K4=Lina (kiri Mario), K5=Mario (hadap Rani), K6=Nadia (hadap Seno), K7=Oscar, dan K8=Putra. Pada meja 8 kursi, posisi berhadapan berjarak 4 kursi, sehingga Lina (K4) berhadapan dengan Putra (K8).",
    "tip": "Pada meja bundar 8 kursi, kursi nomor k selalu berhadapan dengan kursi nomor (k + 4)."
  },
  {
    "id": "tiu-pam-024",
    "subPattern": "posisi-berhadapan",
    "difficulty": "sulit",
    "prompt": "Saat rapat pimpinan unit pelayanan terpadu, delapan pejabat (Taufik, Uli, Vicky, Winda, Yogi, Zakia, Arman, Bela) duduk mengelilingi meja bundar 8 kursi menghadap ke pusat meja. Diketahui:\n(1) Bela duduk berhadapan dengan Winda.\n(2) Taufik duduk tepat di sebelah kanan Bela, dan Uli duduk tepat di sebelah kanan Taufik.\n(3) Yogi duduk berhadapan dengan Taufik.\n(4) Zakia duduk tepat di antara Yogi dan Arman, sedangkan Vicky duduk di sebelah kiri Winda.\nSiapakah yang duduk tepat berhadapan dengan Winda?",
    "options": [
      "Taufik",
      "Uli",
      "Vicky",
      "Bela",
      "Yogi"
    ],
    "answer": "D",
    "explanation": "Susunan melingkar 8 kursi ke arah kanan: K1=Bela, K2=Taufik, K3=Uli, K4=Vicky (kiri Winda), K5=Winda (hadap Bela), K6=Yogi (hadap Taufik), K7=Zakia, dan K8=Arman. Pada meja 8 kursi, posisi berhadapan berjarak 4 kursi, sehingga Winda (K5) berhadapan dengan Bela (K1).",
    "tip": "Pada meja bundar 8 kursi, kursi nomor k selalu berhadapan dengan kursi nomor (k + 4)."
  },
  {
    "id": "tiu-pam-025",
    "subPattern": "posisi-berhadapan",
    "difficulty": "sulit",
    "prompt": "Dalam forum grup terfokus (FGD) seleksi kompetensi, delapan pejabat (Riko, Sari, Tomi, Umi, Vero, Wahyu, Yanti, Zaki) duduk mengelilingi meja bundar 8 kursi menghadap ke pusat meja. Diketahui:\n(1) Riko duduk berhadapan dengan Vero.\n(2) Sari duduk tepat di sebelah kanan Riko, dan Tomi duduk tepat di sebelah kanan Sari.\n(3) Wahyu duduk berhadapan dengan Sari.\n(4) Yanti duduk tepat di antara Wahyu dan Zaki, sedangkan Umi duduk di sebelah kiri Vero.\nSiapakah yang duduk tepat berhadapan dengan Tomi?",
    "options": [
      "Riko",
      "Sari",
      "Umi",
      "Vero",
      "Yanti"
    ],
    "answer": "E",
    "explanation": "Susunan melingkar 8 kursi ke arah kanan: K1=Riko, K2=Sari, K3=Tomi, K4=Umi (kiri Vero), K5=Vero (hadap Riko), K6=Wahyu (hadap Sari), K7=Yanti, dan K8=Zaki. Pada meja 8 kursi, posisi berhadapan berjarak 4 kursi, sehingga Tomi (K3) berhadapan dengan Yanti (K7).",
    "tip": "Pada meja bundar 8 kursi, kursi nomor k selalu berhadapan dengan kursi nomor (k + 4)."
  },
  {
    "id": "tiu-pam-026",
    "subPattern": "posisi-berhadapan",
    "difficulty": "sulit",
    "prompt": "Saat jamuan makan malam delegasi daerah, delapan pejabat (Adi, Bima, Cici, Dodi, Evi, Feri, Gina, Hendra) duduk mengelilingi meja bundar 8 kursi menghadap ke pusat meja. Diketahui:\n(1) Bima duduk berhadapan dengan Feri.\n(2) Cici duduk tepat di sebelah kanan Bima, dan Dodi duduk tepat di sebelah kanan Cici.\n(3) Gina duduk berhadapan dengan Cici.\n(4) Hendra duduk tepat di antara Gina dan Adi, sedangkan Evi duduk di sebelah kiri Feri.\nSiapakah yang duduk tepat berhadapan dengan Evi?",
    "options": [
      "Adi",
      "Bima",
      "Cici",
      "Dodi",
      "Feri"
    ],
    "answer": "A",
    "explanation": "Susunan melingkar 8 kursi ke arah kanan: K1=Bima, K2=Cici, K3=Dodi, K4=Evi (kiri Feri), K5=Feri (hadap Bima), K6=Gina (hadap Cici), K7=Hendra, dan K8=Adi. Pada meja 8 kursi, posisi berhadapan berjarak 4 kursi, sehingga Evi (K4) berhadapan dengan Adi (K8).",
    "tip": "Pada meja bundar 8 kursi, kursi nomor k selalu berhadapan dengan kursi nomor (k + 4)."
  },
  {
    "id": "tiu-pam-027",
    "subPattern": "posisi-berhadapan",
    "difficulty": "sulit",
    "prompt": "Dalam rapat panitia pelaksana diklat prajabatan, delapan pejabat (Aldo, Bunga, Cakra, Dinda, Erwin, Fitri, Guntur, Hilda) duduk mengelilingi meja bundar 8 kursi menghadap ke pusat meja. Diketahui:\n(1) Cakra duduk berhadapan dengan Guntur.\n(2) Dinda duduk tepat di sebelah kanan Cakra, dan Erwin duduk tepat di sebelah kanan Dinda.\n(3) Hilda duduk berhadapan dengan Dinda.\n(4) Aldo duduk tepat di antara Hilda dan Bunga, sedangkan Fitri duduk di sebelah kiri Guntur.\nSiapakah yang duduk tepat berhadapan dengan Guntur?",
    "options": [
      "Dinda",
      "Cakra",
      "Erwin",
      "Fitri",
      "Hilda"
    ],
    "answer": "B",
    "explanation": "Susunan melingkar 8 kursi ke arah kanan: K1=Cakra, K2=Dinda, K3=Erwin, K4=Fitri (kiri Guntur), K5=Guntur (hadap Cakra), K6=Hilda (hadap Dinda), K7=Aldo, dan K8=Bunga. Pada meja 8 kursi, posisi berhadapan berjarak 4 kursi, sehingga Guntur (K5) berhadapan dengan Cakra (K1).",
    "tip": "Pada meja bundar 8 kursi, kursi nomor k selalu berhadapan dengan kursi nomor (k + 4)."
  },
  {
    "id": "tiu-pam-028",
    "subPattern": "posisi-berhadapan",
    "difficulty": "sulit",
    "prompt": "Saat diskusi kelompok penyusunan modul pelatihan, delapan pejabat (Kevin, Lina, Mario, Nadia, Oscar, Putra, Rani, Seno) duduk mengelilingi meja bundar 8 kursi menghadap ke pusat meja. Diketahui:\n(1) Nadia duduk berhadapan dengan Seno.\n(2) Oscar duduk tepat di sebelah kanan Nadia, dan Putra duduk tepat di sebelah kanan Oscar.\n(3) Kevin duduk berhadapan dengan Oscar.\n(4) Lina duduk tepat di antara Kevin dan Mario, sedangkan Rani duduk di sebelah kiri Seno.\nSiapakah yang duduk tepat berhadapan dengan Putra?",
    "options": [
      "Nadia",
      "Oscar",
      "Lina",
      "Rani",
      "Seno"
    ],
    "answer": "C",
    "explanation": "Susunan melingkar 8 kursi ke arah kanan: K1=Nadia, K2=Oscar, K3=Putra, K4=Rani (kiri Seno), K5=Seno (hadap Nadia), K6=Kevin (hadap Oscar), K7=Lina, dan K8=Mario. Pada meja 8 kursi, posisi berhadapan berjarak 4 kursi, sehingga Putra (K3) berhadapan dengan Lina (K7).",
    "tip": "Pada meja bundar 8 kursi, kursi nomor k selalu berhadapan dengan kursi nomor (k + 4)."
  },
  {
    "id": "tiu-pam-029",
    "subPattern": "posisi-berhadapan",
    "difficulty": "sulit",
    "prompt": "Dalam rapat tim reformasi birokrasi instansi, delapan pejabat (Taufik, Uli, Vicky, Winda, Yogi, Zakia, Arman, Bela) duduk mengelilingi meja bundar 8 kursi menghadap ke pusat meja. Diketahui:\n(1) Yogi duduk berhadapan dengan Taufik.\n(2) Zakia duduk tepat di sebelah kanan Yogi, dan Arman duduk tepat di sebelah kanan Zakia.\n(3) Uli duduk berhadapan dengan Zakia.\n(4) Vicky duduk tepat di antara Uli dan Winda, sedangkan Bela duduk di sebelah kiri Taufik.\nSiapakah yang duduk tepat berhadapan dengan Bela?",
    "options": [
      "Yogi",
      "Zakia",
      "Arman",
      "Winda",
      "Taufik"
    ],
    "answer": "D",
    "explanation": "Susunan melingkar 8 kursi ke arah kanan: K1=Yogi, K2=Zakia, K3=Arman, K4=Bela (kiri Taufik), K5=Taufik (hadap Yogi), K6=Uli (hadap Zakia), K7=Vicky, dan K8=Winda. Pada meja 8 kursi, posisi berhadapan berjarak 4 kursi, sehingga Bela (K4) berhadapan dengan Winda (K8).",
    "tip": "Pada meja bundar 8 kursi, kursi nomor k selalu berhadapan dengan kursi nomor (k + 4)."
  },
  {
    "id": "tiu-pam-030",
    "subPattern": "posisi-berhadapan",
    "difficulty": "sulit",
    "prompt": "Saat pengarahan teknis petugas lapangan, delapan pejabat (Riko, Sari, Tomi, Umi, Vero, Wahyu, Yanti, Zaki) duduk mengelilingi meja bundar 8 kursi menghadap ke pusat meja. Diketahui:\n(1) Wahyu duduk berhadapan dengan Sari.\n(2) Yanti duduk tepat di sebelah kanan Wahyu, dan Zaki duduk tepat di sebelah kanan Yanti.\n(3) Tomi duduk berhadapan dengan Yanti.\n(4) Umi duduk tepat di antara Tomi dan Vero, sedangkan Riko duduk di sebelah kiri Sari.\nSiapakah yang duduk tepat berhadapan dengan Sari?",
    "options": [
      "Yanti",
      "Zaki",
      "Riko",
      "Tomi",
      "Wahyu"
    ],
    "answer": "E",
    "explanation": "Susunan melingkar 8 kursi ke arah kanan: K1=Wahyu, K2=Yanti, K3=Zaki, K4=Riko (kiri Sari), K5=Sari (hadap Wahyu), K6=Tomi (hadap Yanti), K7=Umi, dan K8=Vero. Pada meja 8 kursi, posisi berhadapan berjarak 4 kursi, sehingga Sari (K5) berhadapan dengan Wahyu (K1).",
    "tip": "Pada meja bundar 8 kursi, kursi nomor k selalu berhadapan dengan kursi nomor (k + 4)."
  },
  {
    "id": "tiu-pam-031",
    "subPattern": "posisi-kanan-dan-kiri",
    "difficulty": "mudah",
    "prompt": "Dalam sesi koordinasi tim audit inspektorat, enam staf (Gita, Hadi, Indra, Joko, Kartika, Lukman) duduk melingkar menghadap ke pusat meja. Diketahui:\n(1) Gita duduk tepat di sebelah kiri Hadi.\n(2) Indra duduk tepat di sebelah kanan Hadi.\n(3) Joko duduk berhadapan dengan Gita.\n(4) Lukman duduk tepat di sebelah kiri Gita.\nSiapakah yang duduk tepat di sebelah kanan Hadi?",
    "options": [
      "Gita",
      "Indra",
      "Joko",
      "Kartika",
      "Lukman"
    ],
    "answer": "B",
    "explanation": "Karena semua menghadap pusat meja, urutan kursi ke arah kanan adalah: K1=Gita, K2=Hadi, K3=Indra, K4=Joko (hadap Gita), K5=Kartika (kursi tersisa), dan K6=Lukman (kiri Gita). Maka tepat di sebelah kanan Hadi adalah Indra.",
    "tip": "Tetapkan arah kanan sebagai berlawanan jarum jam (menghadap pusat meja) dan arah kiri sebagai searah jarum jam secara konsisten."
  },
  {
    "id": "tiu-pam-032",
    "subPattern": "posisi-kanan-dan-kiri",
    "difficulty": "mudah",
    "prompt": "Saat rapat pimpinan unit pelayanan terpadu, enam staf (Mira, Nanda, Oki, Putri, Qori, Rama) duduk melingkar menghadap ke pusat meja. Diketahui:\n(1) Nanda duduk tepat di sebelah kiri Oki.\n(2) Putri duduk tepat di sebelah kanan Oki.\n(3) Qori duduk berhadapan dengan Nanda.\n(4) Mira duduk tepat di sebelah kiri Nanda.\nSiapakah yang duduk tepat di sebelah kiri Putri?",
    "options": [
      "Nanda",
      "Qori",
      "Oki",
      "Rama",
      "Mira"
    ],
    "answer": "C",
    "explanation": "Karena semua menghadap pusat meja, urutan kursi ke arah kanan adalah: K1=Nanda, K2=Oki, K3=Putri, K4=Qori (hadap Nanda), K5=Rama (kursi tersisa), dan K6=Mira (kiri Nanda). Maka tepat di sebelah kiri Putri adalah Oki.",
    "tip": "Tetapkan arah kanan sebagai berlawanan jarum jam (menghadap pusat meja) dan arah kiri sebagai searah jarum jam secara konsisten."
  },
  {
    "id": "tiu-pam-033",
    "subPattern": "posisi-kanan-dan-kiri",
    "difficulty": "mudah",
    "prompt": "Dalam forum grup terfokus (FGD) seleksi kompetensi, enam staf (Sinta, Tono, Umar, Vina, Wawan, Yuni) duduk melingkar menghadap ke pusat meja. Diketahui:\n(1) Umar duduk tepat di sebelah kiri Vina.\n(2) Wawan duduk tepat di sebelah kanan Vina.\n(3) Yuni duduk berhadapan dengan Umar.\n(4) Tono duduk tepat di sebelah kiri Umar.\nSiapakah yang duduk tepat di sebelah kanan Yuni?",
    "options": [
      "Umar",
      "Vina",
      "Wawan",
      "Sinta",
      "Tono"
    ],
    "answer": "D",
    "explanation": "Karena semua menghadap pusat meja, urutan kursi ke arah kanan adalah: K1=Umar, K2=Vina, K3=Wawan, K4=Yuni (hadap Umar), K5=Sinta (kursi tersisa), dan K6=Tono (kiri Umar). Maka tepat di sebelah kanan Yuni adalah Sinta.",
    "tip": "Tetapkan arah kanan sebagai berlawanan jarum jam (menghadap pusat meja) dan arah kiri sebagai searah jarum jam secara konsisten."
  },
  {
    "id": "tiu-pam-034",
    "subPattern": "posisi-kanan-dan-kiri",
    "difficulty": "mudah",
    "prompt": "Saat jamuan makan malam delegasi daerah, enam staf (Arif, Bella, Candra, Dewi, Erlan, Fajar) duduk melingkar menghadap ke pusat meja. Diketahui:\n(1) Dewi duduk tepat di sebelah kiri Erlan.\n(2) Fajar duduk tepat di sebelah kanan Erlan.\n(3) Arif duduk berhadapan dengan Dewi.\n(4) Candra duduk tepat di sebelah kiri Dewi.\nSiapakah yang duduk tepat di sebelah kiri Bella?",
    "options": [
      "Dewi",
      "Erlan",
      "Fajar",
      "Candra",
      "Arif"
    ],
    "answer": "E",
    "explanation": "Karena semua menghadap pusat meja, urutan kursi ke arah kanan adalah: K1=Dewi, K2=Erlan, K3=Fajar, K4=Arif (hadap Dewi), K5=Bella (kursi tersisa), dan K6=Candra (kiri Dewi). Maka tepat di sebelah kiri Bella adalah Arif.",
    "tip": "Tetapkan arah kanan sebagai berlawanan jarum jam (menghadap pusat meja) dan arah kiri sebagai searah jarum jam secara konsisten."
  },
  {
    "id": "tiu-pam-035",
    "subPattern": "posisi-kanan-dan-kiri",
    "difficulty": "mudah",
    "prompt": "Dalam rapat panitia pelaksana diklat prajabatan, enam staf (Galih, Hana, Irwan, Jihan, Kiki, Laras) duduk melingkar menghadap ke pusat meja. Diketahui:\n(1) Kiki duduk tepat di sebelah kiri Laras.\n(2) Galih duduk tepat di sebelah kanan Laras.\n(3) Hana duduk berhadapan dengan Kiki.\n(4) Jihan duduk tepat di sebelah kiri Kiki.\nSiapakah yang duduk tepat di sebelah kanan Laras?",
    "options": [
      "Galih",
      "Kiki",
      "Hana",
      "Irwan",
      "Jihan"
    ],
    "answer": "A",
    "explanation": "Karena semua menghadap pusat meja, urutan kursi ke arah kanan adalah: K1=Kiki, K2=Laras, K3=Galih, K4=Hana (hadap Kiki), K5=Irwan (kursi tersisa), dan K6=Jihan (kiri Kiki). Maka tepat di sebelah kanan Laras adalah Galih.",
    "tip": "Tetapkan arah kanan sebagai berlawanan jarum jam (menghadap pusat meja) dan arah kiri sebagai searah jarum jam secara konsisten."
  },
  {
    "id": "tiu-pam-036",
    "subPattern": "posisi-kanan-dan-kiri",
    "difficulty": "mudah",
    "prompt": "Saat diskusi kelompok penyusunan modul pelatihan, enam staf (Doni, Eka, Fani, Gilang, Hesti, Ivan) duduk melingkar menghadap ke pusat meja. Diketahui:\n(1) Ivan duduk tepat di sebelah kiri Doni.\n(2) Eka duduk tepat di sebelah kanan Doni.\n(3) Fani duduk berhadapan dengan Ivan.\n(4) Hesti duduk tepat di sebelah kiri Ivan.\nSiapakah yang duduk tepat di sebelah kiri Eka?",
    "options": [
      "Ivan",
      "Doni",
      "Fani",
      "Gilang",
      "Hesti"
    ],
    "answer": "B",
    "explanation": "Karena semua menghadap pusat meja, urutan kursi ke arah kanan adalah: K1=Ivan, K2=Doni, K3=Eka, K4=Fani (hadap Ivan), K5=Gilang (kursi tersisa), dan K6=Hesti (kiri Ivan). Maka tepat di sebelah kiri Eka adalah Doni.",
    "tip": "Tetapkan arah kanan sebagai berlawanan jarum jam (menghadap pusat meja) dan arah kiri sebagai searah jarum jam secara konsisten."
  },
  {
    "id": "tiu-pam-037",
    "subPattern": "posisi-kanan-dan-kiri",
    "difficulty": "mudah",
    "prompt": "Dalam rapat tim reformasi birokrasi instansi, enam staf (Pandu, Rania, Satria, Tania, Ulfa, Viktor) duduk melingkar menghadap ke pusat meja. Diketahui:\n(1) Pandu duduk tepat di sebelah kiri Rania.\n(2) Satria duduk tepat di sebelah kanan Rania.\n(3) Tania duduk berhadapan dengan Pandu.\n(4) Viktor duduk tepat di sebelah kiri Pandu.\nSiapakah yang duduk tepat di sebelah kanan Tania?",
    "options": [
      "Pandu",
      "Rania",
      "Ulfa",
      "Satria",
      "Viktor"
    ],
    "answer": "C",
    "explanation": "Karena semua menghadap pusat meja, urutan kursi ke arah kanan adalah: K1=Pandu, K2=Rania, K3=Satria, K4=Tania (hadap Pandu), K5=Ulfa (kursi tersisa), dan K6=Viktor (kiri Pandu). Maka tepat di sebelah kanan Tania adalah Ulfa.",
    "tip": "Tetapkan arah kanan sebagai berlawanan jarum jam (menghadap pusat meja) dan arah kiri sebagai searah jarum jam secara konsisten."
  },
  {
    "id": "tiu-pam-038",
    "subPattern": "posisi-kanan-dan-kiri",
    "difficulty": "mudah",
    "prompt": "Saat pengarahan teknis petugas lapangan, enam staf (Bagas, Clara, Damar, Elsa, Ferdi, Gisela) duduk melingkar menghadap ke pusat meja. Diketahui:\n(1) Clara duduk tepat di sebelah kiri Damar.\n(2) Elsa duduk tepat di sebelah kanan Damar.\n(3) Ferdi duduk berhadapan dengan Clara.\n(4) Bagas duduk tepat di sebelah kiri Clara.\nSiapakah yang duduk tepat di sebelah kiri Gisela?",
    "options": [
      "Clara",
      "Damar",
      "Elsa",
      "Ferdi",
      "Bagas"
    ],
    "answer": "D",
    "explanation": "Karena semua menghadap pusat meja, urutan kursi ke arah kanan adalah: K1=Clara, K2=Damar, K3=Elsa, K4=Ferdi (hadap Clara), K5=Gisela (kursi tersisa), dan K6=Bagas (kiri Clara). Maka tepat di sebelah kiri Gisela adalah Ferdi.",
    "tip": "Tetapkan arah kanan sebagai berlawanan jarum jam (menghadap pusat meja) dan arah kiri sebagai searah jarum jam secara konsisten."
  },
  {
    "id": "tiu-pam-039",
    "subPattern": "posisi-kanan-dan-kiri",
    "difficulty": "mudah",
    "prompt": "Dalam rapat evaluasi kinerja di ruang bundar kementerian, enam staf (Reza, Salsa, Tegar, Utami, Vino, Wulan) duduk melingkar menghadap ke pusat meja. Diketahui:\n(1) Tegar duduk tepat di sebelah kiri Utami.\n(2) Vino duduk tepat di sebelah kanan Utami.\n(3) Wulan duduk berhadapan dengan Tegar.\n(4) Salsa duduk tepat di sebelah kiri Tegar.\nSiapakah yang duduk tepat di sebelah kanan Utami?",
    "options": [
      "Tegar",
      "Wulan",
      "Reza",
      "Salsa",
      "Vino"
    ],
    "answer": "E",
    "explanation": "Karena semua menghadap pusat meja, urutan kursi ke arah kanan adalah: K1=Tegar, K2=Utami, K3=Vino, K4=Wulan (hadap Tegar), K5=Reza (kursi tersisa), dan K6=Salsa (kiri Tegar). Maka tepat di sebelah kanan Utami adalah Vino.",
    "tip": "Tetapkan arah kanan sebagai berlawanan jarum jam (menghadap pusat meja) dan arah kiri sebagai searah jarum jam secara konsisten."
  },
  {
    "id": "tiu-pam-040",
    "subPattern": "posisi-kanan-dan-kiri",
    "difficulty": "mudah",
    "prompt": "Saat diskusi panel penyusunan kebijakan publik, enam staf (Andi, Budi, Citra, Dina, Eko, Farah) duduk melingkar menghadap ke pusat meja. Diketahui:\n(1) Dina duduk tepat di sebelah kiri Eko.\n(2) Farah duduk tepat di sebelah kanan Eko.\n(3) Andi duduk berhadapan dengan Dina.\n(4) Citra duduk tepat di sebelah kiri Dina.\nSiapakah yang duduk tepat di sebelah kiri Farah?",
    "options": [
      "Eko",
      "Dina",
      "Andi",
      "Budi",
      "Citra"
    ],
    "answer": "A",
    "explanation": "Karena semua menghadap pusat meja, urutan kursi ke arah kanan adalah: K1=Dina, K2=Eko, K3=Farah, K4=Andi (hadap Dina), K5=Budi (kursi tersisa), dan K6=Citra (kiri Dina). Maka tepat di sebelah kiri Farah adalah Eko.",
    "tip": "Tetapkan arah kanan sebagai berlawanan jarum jam (menghadap pusat meja) dan arah kiri sebagai searah jarum jam secara konsisten."
  },
  {
    "id": "tiu-pam-041",
    "subPattern": "posisi-kanan-dan-kiri",
    "difficulty": "sedang",
    "prompt": "Dalam sesi koordinasi tim audit inspektorat, enam peserta diskusi (Gita, Hadi, Indra, Joko, Kartika, Lukman) duduk mengelilingi meja bundar menghadap ke tengah. Diketahui:\n(1) Kartika duduk berhadapan dengan Hadi.\n(2) Lukman duduk dua kursi di sebelah kanan Joko.\n(3) Joko duduk tepat di sebelah kiri Kartika.\n(4) Gita duduk tepat di sebelah kiri Hadi.\nSiapakah yang duduk tepat dua kursi di sebelah kiri Indra?",
    "options": [
      "Kartika",
      "Gita",
      "Lukman",
      "Hadi",
      "Joko"
    ],
    "answer": "B",
    "explanation": "Dari petunjuk: K1=Kartika, kiri Kartika adalah K6=Joko. Dua kursi di kanan K6 adalah K2=Lukman. Berhadapan dengan K1 adalah K4=Hadi, dan kiri K4 adalah K3=Gita. Kursi K5 otomatis ditempati Indra. Maka dua kursi di sebelah kiri Indra adalah Gita.",
    "tip": "Istilah 'dua kursi di sebelah kanan X' berarti melompati satu orang di kanan X (kursi ke-2 dari X ke arah kanan)."
  },
  {
    "id": "tiu-pam-042",
    "subPattern": "posisi-kanan-dan-kiri",
    "difficulty": "sedang",
    "prompt": "Saat rapat pimpinan unit pelayanan terpadu, enam peserta diskusi (Mira, Nanda, Oki, Putri, Qori, Rama) duduk mengelilingi meja bundar menghadap ke tengah. Diketahui:\n(1) Rama duduk berhadapan dengan Oki.\n(2) Mira duduk dua kursi di sebelah kanan Qori.\n(3) Qori duduk tepat di sebelah kiri Rama.\n(4) Nanda duduk tepat di sebelah kiri Oki.\nSiapakah yang duduk tepat dua kursi di sebelah kanan Qori?",
    "options": [
      "Rama",
      "Nanda",
      "Mira",
      "Oki",
      "Putri"
    ],
    "answer": "C",
    "explanation": "Dari petunjuk: K1=Rama, kiri Rama adalah K6=Qori. Dua kursi di kanan K6 adalah K2=Mira. Berhadapan dengan K1 adalah K4=Oki, dan kiri K4 adalah K3=Nanda. Kursi K5 otomatis ditempati Putri. Maka dua kursi di sebelah kanan Qori adalah Mira.",
    "tip": "Istilah 'dua kursi di sebelah kanan X' berarti melompati satu orang di kanan X (kursi ke-2 dari X ke arah kanan)."
  },
  {
    "id": "tiu-pam-043",
    "subPattern": "posisi-kanan-dan-kiri",
    "difficulty": "sedang",
    "prompt": "Dalam forum grup terfokus (FGD) seleksi kompetensi, enam peserta diskusi (Sinta, Tono, Umar, Vina, Wawan, Yuni) duduk mengelilingi meja bundar menghadap ke tengah. Diketahui:\n(1) Sinta duduk berhadapan dengan Vina.\n(2) Tono duduk dua kursi di sebelah kanan Yuni.\n(3) Yuni duduk tepat di sebelah kiri Sinta.\n(4) Umar duduk tepat di sebelah kiri Vina.\nSiapakah yang duduk tepat dua kursi di sebelah kiri Sinta?",
    "options": [
      "Tono",
      "Umar",
      "Vina",
      "Wawan",
      "Yuni"
    ],
    "answer": "D",
    "explanation": "Dari petunjuk: K1=Sinta, kiri Sinta adalah K6=Yuni. Dua kursi di kanan K6 adalah K2=Tono. Berhadapan dengan K1 adalah K4=Vina, dan kiri K4 adalah K3=Umar. Kursi K5 otomatis ditempati Wawan. Maka dua kursi di sebelah kiri Sinta adalah Wawan.",
    "tip": "Istilah 'dua kursi di sebelah kanan X' berarti melompati satu orang di kanan X (kursi ke-2 dari X ke arah kanan)."
  },
  {
    "id": "tiu-pam-044",
    "subPattern": "posisi-kanan-dan-kiri",
    "difficulty": "sedang",
    "prompt": "Saat jamuan makan malam delegasi daerah, enam peserta diskusi (Arif, Bella, Candra, Dewi, Erlan, Fajar) duduk mengelilingi meja bundar menghadap ke tengah. Diketahui:\n(1) Bella duduk berhadapan dengan Erlan.\n(2) Candra duduk dua kursi di sebelah kanan Arif.\n(3) Arif duduk tepat di sebelah kiri Bella.\n(4) Dewi duduk tepat di sebelah kiri Erlan.\nSiapakah yang duduk tepat dua kursi di sebelah kanan Candra?",
    "options": [
      "Bella",
      "Dewi",
      "Fajar",
      "Arif",
      "Erlan"
    ],
    "answer": "E",
    "explanation": "Dari petunjuk: K1=Bella, kiri Bella adalah K6=Arif. Dua kursi di kanan K6 adalah K2=Candra. Berhadapan dengan K1 adalah K4=Erlan, dan kiri K4 adalah K3=Dewi. Kursi K5 otomatis ditempati Fajar. Maka dua kursi di sebelah kanan Candra adalah Erlan.",
    "tip": "Istilah 'dua kursi di sebelah kanan X' berarti melompati satu orang di kanan X (kursi ke-2 dari X ke arah kanan)."
  },
  {
    "id": "tiu-pam-045",
    "subPattern": "posisi-kanan-dan-kiri",
    "difficulty": "sedang",
    "prompt": "Dalam rapat panitia pelaksana diklat prajabatan, enam peserta diskusi (Galih, Hana, Irwan, Jihan, Kiki, Laras) duduk mengelilingi meja bundar menghadap ke tengah. Diketahui:\n(1) Irwan duduk berhadapan dengan Laras.\n(2) Jihan duduk dua kursi di sebelah kanan Hana.\n(3) Hana duduk tepat di sebelah kiri Irwan.\n(4) Kiki duduk tepat di sebelah kiri Laras.\nSiapakah yang duduk tepat dua kursi di sebelah kiri Kiki?",
    "options": [
      "Irwan",
      "Jihan",
      "Laras",
      "Galih",
      "Hana"
    ],
    "answer": "A",
    "explanation": "Dari petunjuk: K1=Irwan, kiri Irwan adalah K6=Hana. Dua kursi di kanan K6 adalah K2=Jihan. Berhadapan dengan K1 adalah K4=Laras, dan kiri K4 adalah K3=Kiki. Kursi K5 otomatis ditempati Galih. Maka dua kursi di sebelah kiri Kiki adalah Irwan.",
    "tip": "Istilah 'dua kursi di sebelah kanan X' berarti melompati satu orang di kanan X (kursi ke-2 dari X ke arah kanan)."
  },
  {
    "id": "tiu-pam-046",
    "subPattern": "posisi-kanan-dan-kiri",
    "difficulty": "sedang",
    "prompt": "Saat diskusi kelompok penyusunan modul pelatihan, enam peserta diskusi (Doni, Eka, Fani, Gilang, Hesti, Ivan) duduk mengelilingi meja bundar menghadap ke tengah. Diketahui:\n(1) Gilang duduk berhadapan dengan Doni.\n(2) Hesti duduk dua kursi di sebelah kanan Fani.\n(3) Fani duduk tepat di sebelah kiri Gilang.\n(4) Ivan duduk tepat di sebelah kiri Doni.\nSiapakah yang duduk tepat dua kursi di sebelah kanan Doni?",
    "options": [
      "Gilang",
      "Fani",
      "Hesti",
      "Ivan",
      "Eka"
    ],
    "answer": "B",
    "explanation": "Dari petunjuk: K1=Gilang, kiri Gilang adalah K6=Fani. Dua kursi di kanan K6 adalah K2=Hesti. Berhadapan dengan K1 adalah K4=Doni, dan kiri K4 adalah K3=Ivan. Kursi K5 otomatis ditempati Eka. Maka dua kursi di sebelah kanan Doni adalah Fani.",
    "tip": "Istilah 'dua kursi di sebelah kanan X' berarti melompati satu orang di kanan X (kursi ke-2 dari X ke arah kanan)."
  },
  {
    "id": "tiu-pam-047",
    "subPattern": "posisi-kanan-dan-kiri",
    "difficulty": "sedang",
    "prompt": "Dalam rapat tim reformasi birokrasi instansi, enam peserta diskusi (Pandu, Rania, Satria, Tania, Ulfa, Viktor) duduk mengelilingi meja bundar menghadap ke tengah. Diketahui:\n(1) Ulfa duduk berhadapan dengan Rania.\n(2) Viktor duduk dua kursi di sebelah kanan Tania.\n(3) Tania duduk tepat di sebelah kiri Ulfa.\n(4) Pandu duduk tepat di sebelah kiri Rania.\nSiapakah yang duduk tepat dua kursi di sebelah kiri Satria?",
    "options": [
      "Ulfa",
      "Viktor",
      "Pandu",
      "Rania",
      "Tania"
    ],
    "answer": "C",
    "explanation": "Dari petunjuk: K1=Ulfa, kiri Ulfa adalah K6=Tania. Dua kursi di kanan K6 adalah K2=Viktor. Berhadapan dengan K1 adalah K4=Rania, dan kiri K4 adalah K3=Pandu. Kursi K5 otomatis ditempati Satria. Maka dua kursi di sebelah kiri Satria adalah Pandu.",
    "tip": "Istilah 'dua kursi di sebelah kanan X' berarti melompati satu orang di kanan X (kursi ke-2 dari X ke arah kanan)."
  },
  {
    "id": "tiu-pam-048",
    "subPattern": "posisi-kanan-dan-kiri",
    "difficulty": "sedang",
    "prompt": "Saat pengarahan teknis petugas lapangan, enam peserta diskusi (Bagas, Clara, Damar, Elsa, Ferdi, Gisela) duduk mengelilingi meja bundar menghadap ke tengah. Diketahui:\n(1) Gisela duduk berhadapan dengan Damar.\n(2) Bagas duduk dua kursi di sebelah kanan Ferdi.\n(3) Ferdi duduk tepat di sebelah kiri Gisela.\n(4) Clara duduk tepat di sebelah kiri Damar.\nSiapakah yang duduk tepat dua kursi di sebelah kanan Ferdi?",
    "options": [
      "Gisela",
      "Clara",
      "Damar",
      "Bagas",
      "Elsa"
    ],
    "answer": "D",
    "explanation": "Dari petunjuk: K1=Gisela, kiri Gisela adalah K6=Ferdi. Dua kursi di kanan K6 adalah K2=Bagas. Berhadapan dengan K1 adalah K4=Damar, dan kiri K4 adalah K3=Clara. Kursi K5 otomatis ditempati Elsa. Maka dua kursi di sebelah kanan Ferdi adalah Bagas.",
    "tip": "Istilah 'dua kursi di sebelah kanan X' berarti melompati satu orang di kanan X (kursi ke-2 dari X ke arah kanan)."
  },
  {
    "id": "tiu-pam-049",
    "subPattern": "posisi-kanan-dan-kiri",
    "difficulty": "sedang",
    "prompt": "Dalam rapat evaluasi kinerja di ruang bundar kementerian, enam peserta diskusi (Reza, Salsa, Tegar, Utami, Vino, Wulan) duduk mengelilingi meja bundar menghadap ke tengah. Diketahui:\n(1) Reza duduk berhadapan dengan Utami.\n(2) Salsa duduk dua kursi di sebelah kanan Wulan.\n(3) Wulan duduk tepat di sebelah kiri Reza.\n(4) Tegar duduk tepat di sebelah kiri Utami.\nSiapakah yang duduk tepat dua kursi di sebelah kiri Reza?",
    "options": [
      "Salsa",
      "Tegar",
      "Utami",
      "Wulan",
      "Vino"
    ],
    "answer": "E",
    "explanation": "Dari petunjuk: K1=Reza, kiri Reza adalah K6=Wulan. Dua kursi di kanan K6 adalah K2=Salsa. Berhadapan dengan K1 adalah K4=Utami, dan kiri K4 adalah K3=Tegar. Kursi K5 otomatis ditempati Vino. Maka dua kursi di sebelah kiri Reza adalah Vino.",
    "tip": "Istilah 'dua kursi di sebelah kanan X' berarti melompati satu orang di kanan X (kursi ke-2 dari X ke arah kanan)."
  },
  {
    "id": "tiu-pam-050",
    "subPattern": "posisi-kanan-dan-kiri",
    "difficulty": "sedang",
    "prompt": "Saat diskusi panel penyusunan kebijakan publik, enam peserta diskusi (Andi, Budi, Citra, Dina, Eko, Farah) duduk mengelilingi meja bundar menghadap ke tengah. Diketahui:\n(1) Budi duduk berhadapan dengan Eko.\n(2) Citra duduk dua kursi di sebelah kanan Andi.\n(3) Andi duduk tepat di sebelah kiri Budi.\n(4) Dina duduk tepat di sebelah kiri Eko.\nSiapakah yang duduk tepat dua kursi di sebelah kanan Citra?",
    "options": [
      "Eko",
      "Budi",
      "Dina",
      "Farah",
      "Andi"
    ],
    "answer": "A",
    "explanation": "Dari petunjuk: K1=Budi, kiri Budi adalah K6=Andi. Dua kursi di kanan K6 adalah K2=Citra. Berhadapan dengan K1 adalah K4=Eko, dan kiri K4 adalah K3=Dina. Kursi K5 otomatis ditempati Farah. Maka dua kursi di sebelah kanan Citra adalah Eko.",
    "tip": "Istilah 'dua kursi di sebelah kanan X' berarti melompati satu orang di kanan X (kursi ke-2 dari X ke arah kanan)."
  }
];
