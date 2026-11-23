import type { QuestionDraft } from "@/modules/question-bank/domain/question";

export const analitisBatch4UrutanDudukTabelDrafts: readonly QuestionDraft[] = [
  {
    "id": "tiu-pam-151",
    "subPattern": "urutan-dan-jadwal",
    "difficulty": "mudah",
    "prompt": "Lima peserta seleksi CPNS (Adi, Bela, Candra, Dini, Eko) memperoleh skor SKD yang seluruhnya berbeda. Diketahui:\n(1) Skor Bela lebih tinggi daripada Candra, tetapi lebih rendah daripada Adi.\n(2) Skor Eko lebih tinggi daripada Adi.\n(3) Skor Dini lebih rendah daripada Bela, tetapi lebih tinggi daripada Candra.\nSiapakah peserta yang menempati peringkat ke-2 tertinggi?",
    "options": [
      "Eko",
      "Bela",
      "Adi",
      "Dini",
      "Candra"
    ],
    "answer": "C",
    "explanation": "Dari syarat (1) dan (2) diperoleh urutan sementara: Eko > Adi > Bela > Candra. Syarat (3) menempatkan Dini di antara Bela dan Candra, sehingga urutan peringkat lengkap dari tertinggi ke terendah adalah: 1. Eko, 2. Adi, 3. Bela, 4. Dini, 5. Candra. Jadi, peringkat ke-2 tertinggi adalah Adi.",
    "tip": "Rangkai terlebih dahulu rantai pertidaksamaan terpanjang menggunakan tanda '>', lalu sisipkan peserta yang posisinya berada di antara dua orang."
  },
  {
    "id": "tiu-pam-152",
    "subPattern": "urutan-dan-jadwal",
    "difficulty": "mudah",
    "prompt": "Saat pengukuran fisik lima taruna kedinasan (Fajar, Gilang, Hendra, Irfan, Joko), tidak ada dua taruna yang memiliki tinggi badan sama. Diketahui:\n(1) Hendra lebih tinggi daripada Fajar, tetapi lebih pendek daripada Joko.\n(2) Gilang lebih pendek daripada Fajar, tetapi lebih tinggi daripada Irfan.\nSiapakah taruna yang paling pendek kedua?",
    "options": [
      "Gilang",
      "Fajar",
      "Hendra",
      "Irfan",
      "Joko"
    ],
    "answer": "A",
    "explanation": "Dari syarat (1) diperoleh Joko > Hendra > Fajar. Dari syarat (2) diperoleh Fajar > Gilang > Irfan. Menggabungkan keduanya menghasilkan urutan dari tertinggi ke terpendek: 1. Joko, 2. Hendra, 3. Fajar, 4. Gilang, 5. Irfan. Taruna paling pendek kedua (urutan ke-4 dari tertinggi) adalah Gilang.",
    "tip": "Satukan dua rantai perbandingan melalui nama yang muncul di kedua pernyataan sebagai jembatan penghubung."
  },
  {
    "id": "tiu-pam-153",
    "subPattern": "urutan-dan-jadwal",
    "difficulty": "mudah",
    "prompt": "Lima pegawai loket layanan terpadu (Kiki, Lina, Mira, Nanda, Oki) mendapat jadwal piket masing-masing satu hari dari Senin sampai Jumat. Diketahui:\n(1) Kiki bertugas piket pada hari Senin.\n(2) Mira bertugas tepat sehari setelah Nanda.\n(3) Oki bertugas pada hari Jumat.\n(4) Lina bertugas lebih awal daripada Nanda.\nSiapakah pegawai yang bertugas piket pada hari Rabu?",
    "options": [
      "Kiki",
      "Lina",
      "Mira",
      "Nanda",
      "Oki"
    ],
    "answer": "D",
    "explanation": "Kiki menempati Senin dan Oki menempati Jumat, sehingga tersisa Selasa, Rabu, dan Kamis untuk Lina, Nanda, dan Mira. Karena Mira tepat sehari setelah Nanda (blok Nanda–Mira) dan Lina lebih awal daripada Nanda, susunan tunggal yang memenuhi adalah: Senin=Kiki, Selasa=Lina, Rabu=Nanda, Kamis=Mira, Jumat=Oki. Petugas piket hari Rabu adalah Nanda.",
    "tip": "Kunci terlebih dahulu hari yang sudah pasti (ujung jadwal), lalu masukkan pasangan yang wajib berurutan sebagai satu blok."
  },
  {
    "id": "tiu-pam-154",
    "subPattern": "urutan-dan-jadwal",
    "difficulty": "mudah",
    "prompt": "Lima wajib pajak (Putri, Qori, Roni, Sinta, Tono) sedang mengantre secara berurutan pada nomor antrean 1 hingga 5 di loket konsultasi. Diketahui:\n(1) Roni berada pada nomor antrean ke-1.\n(2) Sinta berada tepat di depan Tono.\n(3) Qori berada di belakang Tono, tetapi di depan Putri.\nSiapakah wajib pajak yang berada pada nomor antrean ke-4?",
    "options": [
      "Tono",
      "Qori",
      "Sinta",
      "Putri",
      "Roni"
    ],
    "answer": "B",
    "explanation": "Roni menempati urutan 1, menyisakan urutan 2–5. Karena Sinta tepat di depan Tono dan Qori di belakang Tono serta di depan Putri, keempatnya harus berurutan Sinta–Tono–Qori–Putri. Urutan lengkap antrean 1 sampai 5 adalah: 1. Roni, 2. Sinta, 3. Tono, 4. Qori, 5. Putri. Nomor antrean ke-4 ditempati oleh Qori.",
    "tip": "Perhatikan bahwa 'tepat di depan' berarti selisih nomor antrean adalah 1, sedangkan 'di belakang/di depan' menunjukkan arah urutan umum."
  },
  {
    "id": "tiu-pam-155",
    "subPattern": "urutan-dan-jadwal",
    "difficulty": "sedang",
    "prompt": "Enam pegawai senior (Arif, Bimo, Citra, Dewi, Erlan, Farah) memiliki usia yang seluruhnya berbeda. Diketahui:\n(1) Citra lebih tua daripada Bimo, tetapi lebih muda daripada Arif.\n(2) Erlan adalah pegawai yang paling muda di antara keenamnya.\n(3) Dewi lebih tua daripada Arif, tetapi lebih muda daripada Farah.\nSiapakah pegawai yang usianya menempati urutan tertua ketiga?",
    "options": [
      "Farah",
      "Dewi",
      "Citra",
      "Bimo",
      "Arif"
    ],
    "answer": "E",
    "explanation": "Dari syarat (3): Farah > Dewi > Arif. Dari syarat (1): Arif > Citra > Bimo. Dari syarat (2): Erlan paling muda (urutan ke-6). Urutan lengkap dari tertua ke termuda adalah: 1. Farah, 2. Dewi, 3. Arif, 4. Citra, 5. Bimo, 6. Erlan. Pegawai tertua ketiga adalah Arif.",
    "tip": "Susun dua blok perbandingan usia melalui nama penghubung yang sama, lalu pastikan posisi ekstrem (tertua/termuda) terkunci di ujung."
  },
  {
    "id": "tiu-pam-156",
    "subPattern": "urutan-dan-jadwal",
    "difficulty": "sedang",
    "prompt": "Enam unit kerja (Anggaran, Hukum, Humas, Kepegawaian, Perencanaan, Umum) dijadwalkan melakukan presentasi berurutan pada Sesi 1 hingga Sesi 6. Diketahui:\n(1) Unit Perencanaan tampil pada Sesi 1.\n(2) Unit Hukum tampil tepat dua sesi setelah Perencanaan.\n(3) Unit Humas tampil tepat sebelum Anggaran.\n(4) Unit Umum tampil lebih akhir daripada Anggaran.\n(5) Unit Kepegawaian tidak tampil pada Sesi 6.\nUnit kerja manakah yang tampil pada Sesi 5?",
    "options": [
      "Humas",
      "Anggaran",
      "Kepegawaian",
      "Umum",
      "Hukum"
    ],
    "answer": "B",
    "explanation": "Dari (1) dan (2): Sesi 1=Perencanaan, Sesi 3=Hukum. Tersisa Sesi 2, 4, 5, dan 6. Blok berurutan (Humas, Anggaran) hanya dapat mengisi Sesi 4–5 atau 5–6; karena Umum harus lebih akhir daripada Anggaran (syarat 4), maka wajib Sesi 4=Humas, Sesi 5=Anggaran, dan Sesi 6=Umum. Sesi 2 yang tersisa diisi Kepegawaian (memenuhi syarat 5). Jadwal lengkap: 1. Perencanaan, 2. Kepegawaian, 3. Hukum, 4. Humas, 5. Anggaran, 6. Umum. Sesi 5 adalah Anggaran.",
    "tip": "Setelah mengunci slot pasti, periksa di mana blok dua sesi berurutan masih bisa muat sekaligus menyisakan ruang untuk unit yang harus tampil lebih akhir."
  },
  {
    "id": "tiu-pam-157",
    "subPattern": "urutan-dan-jadwal",
    "difficulty": "sedang",
    "prompt": "Enam pelaku UMKM binaan dinas koperasi (Gita, Hadi, Indra, Jihan, Kartika, Lukman) mencatat pendapatan bulanan yang berbeda-beda. Diketahui:\n(1) Pendapatan Kartika lebih tinggi daripada Gita, tetapi lebih rendah daripada Jihan.\n(2) Pendapatan Lukman tepat satu tingkat di atas Indra.\n(3) Pendapatan Hadi lebih rendah daripada Gita, tetapi lebih tinggi daripada Lukman.\nSiapakah pelaku UMKM dengan pendapatan tertinggi keempat?",
    "options": [
      "Kartika",
      "Gita",
      "Lukman",
      "Hadi",
      "Indra"
    ],
    "answer": "D",
    "explanation": "Dari (1): Jihan > Kartika > Gita. Dari (3): Gita > Hadi > Lukman. Dari (2): Lukman tepat satu tingkat di atas Indra (Lukman > Indra). Urutan lengkap dari pendapatan tertinggi ke terendah adalah: 1. Jihan, 2. Kartika, 3. Gita, 4. Hadi, 5. Lukman, 6. Indra. Pelaku UMKM dengan pendapatan tertinggi keempat adalah Hadi.",
    "tip": "Gabungkan ketiga rantai ketaksamaan secara berurutan dari nilai terbesar ke terkecil, lalu hitung peringkat secara teliti dari urutan pertama."
  },
  {
    "id": "tiu-pam-158",
    "subPattern": "urutan-dan-jadwal",
    "difficulty": "sedang",
    "prompt": "Tim inspektorat menjadwalkan kunjungan ke lima kecamatan (Alang, Barat, Cempaka, Damai, Elok), masing-masing satu kecamatan per hari dari Senin hingga Jumat. Diketahui:\n(1) Kecamatan Damai dikunjungi tepat dua hari setelah Barat.\n(2) Kecamatan Elok dikunjungi tepat sehari sebelum Alang.\n(3) Kecamatan Cempaka tidak dikunjungi pada hari Senin maupun Jumat.\n(4) Kecamatan Barat bukan yang pertama dikunjungi.\nKecamatan manakah yang dikunjungi pada hari Kamis?",
    "options": [
      "Cempaka",
      "Alang",
      "Barat",
      "Damai",
      "Elok"
    ],
    "answer": "A",
    "explanation": "Dari (1) dan (4), pasangan (Barat, Damai) berselisih 2 hari dengan Barat ≠ Senin, sehingga kemungkinannya (Selasa, Kamis) atau (Rabu, Jumat). Jika Barat=Selasa dan Damai=Kamis, sisa hari Senin, Rabu, Jumat tidak memiliki dua hari berurutan untuk blok (Elok, Alang). Maka wajib Barat=Rabu dan Damai=Jumat. Blok berurutan (Elok, Alang) hanya bisa di Senin–Selasa, sehingga tersisa Kamis untuk Cempaka (memenuhi syarat 3). Jadwal lengkap: Senin=Elok, Selasa=Alang, Rabu=Barat, Kamis=Cempaka, Jumat=Damai.",
    "tip": "Uji kombinasi slot untuk dua kegiatan yang berjarak tetap, lalu cek apakah sisa hari masih menyediakan dua hari berturutan bagi pasangan yang wajib bersebelahan."
  },
  {
    "id": "tiu-pam-159",
    "subPattern": "urutan-dan-jadwal",
    "difficulty": "sedang",
    "prompt": "Enam ASN (Maya, Naufal, Olivia, Panji, Raka, Sari) dinilai kinerja tahunannya dan memperoleh skor akhir yang berbeda semua. Diketahui:\n(1) Skor Panji lebih tinggi daripada Maya, tetapi lebih rendah daripada Sari.\n(2) Skor Raka tepat satu tingkat di bawah Maya.\n(3) Skor Olivia lebih rendah daripada Naufal, tetapi lebih tinggi daripada Sari.\nSiapakah ASN yang menempati peringkat ke-4 tertinggi?",
    "options": [
      "Sari",
      "Maya",
      "Olivia",
      "Raka",
      "Panji"
    ],
    "answer": "E",
    "explanation": "Dari (3): Naufal > Olivia > Sari. Dari (1): Sari > Panji > Maya. Dari (2): Raka tepat satu tingkat di bawah Maya (Maya > Raka). Urutan lengkap dari tertinggi ke terendah adalah: 1. Naufal, 2. Olivia, 3. Sari, 4. Panji, 5. Maya, 6. Raka. Peringkat ke-4 tertinggi ditempati oleh Panji.",
    "tip": "Sambungkan semua rantai perbandingan melalui nama yang muncul dua kali sebelum menghitung nomor peringkat."
  },
  {
    "id": "tiu-pam-160",
    "subPattern": "urutan-dan-jadwal",
    "difficulty": "sedang",
    "prompt": "Enam peserta wawancara CPNS (Tia, Umar, Vina, Wawan, Yuni, Zaki) dipanggil bergiliran pada nomor urut 1 sampai 6. Diketahui:\n(1) Yuni berada pada nomor urut ke-1.\n(2) Umar berada pada nomor urut ke-2.\n(3) Ada tepat dua peserta di antara Tia dan Zaki, dengan Tia mendapat giliran lebih awal daripada Zaki.\n(4) Wawan mendapat giliran tepat di belakang Vina.\nSiapakah pasangan peserta pada nomor urut ke-3 dan ke-5 secara berturut-turut?",
    "options": [
      "Vina dan Zaki",
      "Tia dan Vina",
      "Tia dan Wawan",
      "Wawan dan Zaki",
      "Vina dan Wawan"
    ],
    "answer": "C",
    "explanation": "Urutan 1=Yuni dan urutan 2=Umar, menyisakan urutan 3, 4, 5, dan 6. Karena ada tepat dua peserta di antara Tia dan Zaki (selisih posisi 3) dengan Tia lebih dulu, satu-satunya pilihan pada slot 3–6 adalah Tia=3 dan Zaki=6. Slot tersisa 4 dan 5 diisi pasangan berurutan Vina=4 dan Wawan=5. Urutan lengkap: 1. Yuni, 2. Umar, 3. Tia, 4. Vina, 5. Wawan, 6. Zaki. Jadi urutan ke-3 adalah Tia dan ke-5 adalah Wawan.",
    "tip": "Jika ada tepat dua orang di antara X dan Y, maka selisih nomor urut keduanya adalah 3 (bukan 2)."
  },
  {
    "id": "tiu-pam-161",
    "subPattern": "urutan-dan-jadwal",
    "difficulty": "sedang",
    "prompt": "Sekretariat daerah menjadwalkan enam agenda rapat dinas (Aset, Data, Diklat, Evaluasi, Keuangan, Logistik), satu agenda setiap hari dari Senin hingga Sabtu. Diketahui:\n(1) Agenda Keuangan dibahas pada hari Selasa.\n(2) Agenda Evaluasi dibahas tepat sehari setelah Aset.\n(3) Agenda Logistik dibahas lebih awal daripada Aset, tetapi lebih akhir daripada Keuangan.\n(4) Agenda Data dibahas pada hari Sabtu.\nAgenda rapat manakah yang dibahas pada hari Kamis?",
    "options": [
      "Aset",
      "Logistik",
      "Evaluasi",
      "Diklat",
      "Keuangan"
    ],
    "answer": "A",
    "explanation": "Keuangan=Selasa dan Data=Sabtu. Tersisa Senin, Rabu, Kamis, Jumat. Syarat (3) dan (2) mengharuskan urutan Keuangan < Logistik < Aset < Evaluasi (dengan Aset–Evaluasi berturutan). Karena setelah Selasa hanya tersedia Rabu, Kamis, dan Jumat (tepat 3 hari), maka wajib Rabu=Logistik, Kamis=Aset, dan Jumat=Evaluasi. Sisa hari Senin ditempati Diklat. Susunan lengkap: Senin=Diklat, Selasa=Keuangan, Rabu=Logistik, Kamis=Aset, Jumat=Evaluasi, Sabtu=Data.",
    "tip": "Hitung jumlah agenda yang wajib jatuh setelah hari patokan (Selasa) dan bandingkan dengan jumlah slot kosong yang tersedia."
  },
  {
    "id": "tiu-pam-162",
    "subPattern": "urutan-dan-jadwal",
    "difficulty": "sedang",
    "prompt": "Lima verifikator berkas (Bagas, Clara, Doni, Elsa, Farhan) menyelesaikan pemeriksaan dokumen pada waktu yang berbeda-beda (urutan ke-1 adalah yang paling cepat). Diketahui:\n(1) Bagas selesai lebih cepat daripada Clara.\n(2) Clara selesai lebih cepat daripada Doni maupun Elsa.\n(3) Farhan selesai tepat setelah Elsa.\nBerdasarkan informasi tersebut, pernyataan manakah yang PASTI benar?",
    "options": [
      "Doni selesai lebih cepat daripada Elsa.",
      "Farhan adalah verifikator yang selesai paling akhir.",
      "Elsa selesai pada urutan ke-3.",
      "Doni selesai tepat setelah Clara.",
      "Clara selesai pada urutan ke-2, tepat setelah Bagas."
    ],
    "answer": "E",
    "explanation": "Dari syarat (1)–(3), Bagas < Clara, sedangkan Doni, Elsa, dan Farhan (tepat setelah Elsa) seluruhnya selesai setelah Clara. Artinya ada tepat tiga orang di belakang Clara dan tepat satu orang di depan Clara, sehingga Bagas PASTI urutan ke-1 dan Clara PASTI urutan ke-2. Untuk urutan 3–5, blok (Elsa, Farhan) dapat berada di posisi 4–5 (dengan Doni ke-3) atau posisi 3–4 (dengan Doni ke-5). Dua susunan valid: (Bagas, Clara, Doni, Elsa, Farhan) dan (Bagas, Clara, Elsa, Farhan, Doni). Oleh karena itu, satu-satunya pernyataan yang pasti benar pada semua kemungkinan adalah Clara selesai pada urutan ke-2, tepat setelah Bagas.",
    "tip": "Untuk soal 'PASTI benar', tuliskan seluruh susunan yang masih memenuhi syarat lalu pilih pernyataan yang berlaku pada semua susunan tersebut."
  },
  {
    "id": "tiu-pam-163",
    "subPattern": "urutan-dan-jadwal",
    "difficulty": "sedang",
    "prompt": "Enam puskesmas (Anggrek, Dahlia, Kenanga, Mawar, Melati, Teratai) diurutkan dari peringkat ke-1 (tertinggi) hingga ke-6 (terendah) berdasarkan capaian imunisasi. Diketahui:\n(1) Anggrek berada tepat dua peringkat di atas Kenanga.\n(2) Teratai bukan peringkat ke-1, tetapi peringkatnya lebih tinggi daripada Anggrek.\n(3) Mawar berada tepat di antara Anggrek dan Kenanga.\n(4) Melati menempati peringkat terendah.\nPuskesmas manakah yang menempati peringkat ke-1 dan ke-4 secara berturut-turut?",
    "options": [
      "Teratai dan Anggrek",
      "Dahlia dan Anggrek",
      "Dahlia dan Mawar",
      "Teratai dan Mawar",
      "Dahlia dan Kenanga"
    ],
    "answer": "C",
    "explanation": "Dari (1) dan (3), terbentuk blok tiga peringkat berurutan: Anggrek – Mawar – Kenanga. Dari (4), Melati=6. Dari (2), ada paling sedikit dua peringkat di atas Anggrek (karena peringkat 1 bukan Teratai dan Teratai di atas Anggrek). Dengan hanya peringkat 1–5 yang tersisa, blok (Anggrek, Mawar, Kenanga) wajib menempati peringkat 3, 4, 5, sehingga Teratai=2 dan Dahlia=1. Urutan lengkap: 1. Dahlia, 2. Teratai, 3. Anggrek, 4. Mawar, 5. Kenanga, 6. Melati. Jadi peringkat ke-1 adalah Dahlia dan peringkat ke-4 adalah Mawar.",
    "tip": "Gabungkan syarat 'tepat dua peringkat di atas' dan 'tepat di antara' menjadi satu blok tetap berisi tiga elemen."
  },
  {
    "id": "tiu-pam-164",
    "subPattern": "urutan-dan-jadwal",
    "difficulty": "sedang",
    "prompt": "Lima narasumber diklat kepemimpinan (Arman, Budi, Cici, Darma, Endah) dijadwalkan mengisi Sesi 1 hingga Sesi 5 secara berurutan. Diketahui:\n(1) Budi tampil tepat sebelum Cici.\n(2) Darma tampil lebih awal daripada Endah, tetapi tidak pada Sesi 1.\n(3) Arman tampil tidak berurutan dengan Budi maupun Cici.\n(4) Endah tampil pada Sesi 5, dan Darma tampil lebih awal daripada Budi.\nSiapakah narasumber yang mengisi Sesi 2?",
    "options": [
      "Arman",
      "Budi",
      "Cici",
      "Darma",
      "Endah"
    ],
    "answer": "D",
    "explanation": "Dari (4), Endah=5. Karena Darma ≠ 1 (syarat 2) dan Darma < Budi < Cici (syarat 1 dan 4) serta semuanya sebelum Sesi 5, posisi Darma paling awal adalah Sesi 2, diikuti blok Budi=3 dan Cici=4. Tersisa Sesi 1 untuk Arman, yang tidak bersebelahan dengan Budi (3) maupun Cici (4), memenuhi syarat (3). Urutan lengkap: 1. Arman, 2. Darma, 3. Budi, 4. Cici, 5. Endah. Narasumber Sesi 2 adalah Darma.",
    "tip": "Hitung batas paling awal dan paling akhir bagi rantai urutan yang sudah diketahui, lalu cek kecocokannya dengan syarat larangan berdampingan."
  },
  {
    "id": "tiu-pam-165",
    "subPattern": "urutan-dan-jadwal",
    "difficulty": "sulit",
    "prompt": "DPRD menjadwalkan sidang uji publik enam Raperda (Kesehatan, Pariwisata, Pendidikan, Perdagangan, Perhubungan, Pertanian) masing-masing satu Raperda per hari dari Senin hingga Sabtu. Diketahui:\n(1) Ada tepat dua hari jeda di antara sidang Kesehatan dan Perdagangan, dengan Kesehatan dibahas lebih awal.\n(2) Pariwisata dibahas tepat sehari sebelum Pertanian.\n(3) Perhubungan dibahas lebih awal daripada Pendidikan, tetapi lebih akhir daripada Kesehatan.\n(4) Pendidikan tidak dibahas pada hari Jumat maupun Sabtu.\n(5) Pertanian tidak dibahas pada hari Rabu.\nRaperda manakah yang dibahas pada hari Jumat?",
    "options": [
      "Perdagangan",
      "Pariwisata",
      "Pertanian",
      "Pendidikan",
      "Perhubungan"
    ],
    "answer": "B",
    "explanation": "Dari (3) dan (4), Kesehatan < Perhubungan < Pendidikan ≤ Kamis (hari ke-4). Maka Kesehatan paling lambat Selasa (2). Jika Kesehatan=Selasa (2), maka Perhubungan=Rabu (3), Pendidikan=Kamis (4), dan dari (1) Perdagangan=Jumat (5), menyisakan Senin dan Sabtu (tidak berturutan, melanggar syarat 2 untuk Pariwisata–Pertanian). Jadi Kesehatan WAJIB Senin (1) dan Perdagangan=Kamis (4). Hari Selasa–Rabu dapat diisi (Perhubungan, Pendidikan) atau (Pariwisata, Pertanian). Karena Pertanian ≠ Rabu (syarat 5), maka Selasa=Perhubungan, Rabu=Pendidikan, Jumat=Pariwisata, dan Sabtu=Pertanian. Jadwal lengkap: Senin=Kesehatan, Selasa=Perhubungan, Rabu=Pendidikan, Kamis=Perdagangan, Jumat=Pariwisata, Sabtu=Pertanian.",
    "tip": "Gunakan batas maksimum hari untuk rantai tiga kegiatan agar langsung menyempitkan posisi kegiatan pertamanya menjadi paling banyak dua kemungkinan."
  },
  {
    "id": "tiu-pam-166",
    "subPattern": "urutan-dan-jadwal",
    "difficulty": "sulit",
    "prompt": "Tujuh peserta seleksi Pejabat Pimpinan Tinggi (Aldi, Bayu, Cika, Dimas, Eva, Fikri, Gina) memperoleh skor akhir yang seluruhnya berbeda (peringkat 1 tertinggi, peringkat 7 terendah). Diketahui:\n(1) Dimas berada tepat satu peringkat di atas Eva, dan skor keduanya lebih rendah daripada Cika.\n(2) Ada tepat dua peserta yang peringkatnya berada di antara Bayu dan Gina, dengan skor Bayu lebih tinggi daripada Gina.\n(3) Fikri menempati peringkat terendah.\n(4) Skor Aldi lebih tinggi daripada Cika, tetapi lebih rendah daripada Bayu.\nSiapakah peserta yang menempati peringkat ke-4 (peringkat tengah)?",
    "options": [
      "Cika",
      "Aldi",
      "Dimas",
      "Gina",
      "Eva"
    ],
    "answer": "D",
    "explanation": "Dari (1) dan (4) diperoleh rantai lima peserta: Bayu < Aldi < Cika < Dimas < Eva (dengan Eva tepat satu tingkat di bawah Dimas), sedangkan Fikri=7 (syarat 3). Dengan hanya peringkat 1–6 tersisa bagi Bayu, Aldi, Cika, Dimas, Eva, dan Gina, syarat (2) berarti nomor peringkat Gina = Bayu + 3. Bayu harus lebih tinggi daripada Aldi, Cika, Dimas, Eva (minimal 4 orang di bawahnya), sehingga Bayu bisa di peringkat 1 atau 2. Jika Bayu=2, maka Gina=5, tetapi peringkat 3, 4, 6 tidak menyediakan ruang bagi rantai 4 orang dengan blok (Dimas, Eva) berurutan di bawah Cika. Jadi wajib Bayu=1 dan Gina=4! Peringkat 2, 3, 5, 6 diisi berurutan oleh Aldi=2, Cika=3, Dimas=5, Eva=6. Urutan lengkap: 1. Bayu, 2. Aldi, 3. Cika, 4. Gina, 5. Dimas, 6. Eva, 7. Fikri. Peringkat ke-4 adalah Gina.",
    "tip": "Perhatikan berapa banyak peserta yang pasti berada di bawah Bayu untuk mengunci posisi Bayu, lalu hitung posisi Gina dengan selisih peringkat 3."
  },
  {
    "id": "tiu-pam-167",
    "subPattern": "urutan-dan-jadwal",
    "difficulty": "sulit",
    "prompt": "Panitia diklat menyusun enam slot waktu (Sesi 1 hingga Sesi 6) yang terdiri atas lima modul (Arsip, Digital, Etika, Layanan, Regulasi) dan satu sesi Istirahat. Diketahui:\n(1) Istirahat tidak boleh berada pada Sesi 1 maupun Sesi 6, dan ditempatkan tepat sebelum modul Digital.\n(2) Modul Layanan dijadwalkan tepat dua sesi sebelum Etika.\n(3) Modul Regulasi dijadwalkan lebih awal daripada Arsip, dengan tepat satu sesi di antara keduanya.\n(4) Modul Etika tidak berada pada Sesi 6, dan Layanan dijadwalkan lebih awal daripada Istirahat.\n(5) Modul Regulasi tidak berada pada Sesi 1.\nBagaimanakah posisi sesi Istirahat dalam jadwal tersebut?",
    "options": [
      "Pada Sesi 5, tepat setelah modul Arsip",
      "Pada Sesi 4, tepat setelah modul Etika",
      "Pada Sesi 3, tepat setelah modul Regulasi",
      "Pada Sesi 5, tepat setelah modul Etika",
      "Pada Sesi 4, tepat setelah modul Arsip"
    ],
    "answer": "A",
    "explanation": "Dari (2), (3), dan (1) terdapat tiga struktur: (Layanan, _, Etika) berselisih 2, (Regulasi, _, Arsip) berselisih 2, dan blok berurutan (Istirahat, Digital). Karena Layanan < Istirahat, Etika ≠ 6, dan Regulasi ≠ 1, mari cek posisi pasangan berjarak 2 pada Sesi 1–4: Sesi 1=Layanan dan Sesi 3=Etika, serta Sesi 2=Regulasi dan Sesi 4=Arsip (seluruh syarat selisih 2 dan Regulasi ≠ 1 terpenuhi). Sisa Sesi 5 dan Sesi 6 otomatis ditempati blok (Istirahat=5, Digital=6). Coba bila Istirahat=4 dan Digital=5: sisa slot {1, 2, 3, 6} dengan Regulasi ≠ 1 tidak memungkinkan dua pasangan berselisih 2 (karena 6 − 2 = 4 sudah terisi). Jadi susunan unik: 1. Layanan, 2. Regulasi, 3. Etika, 4. Arsip, 5. Istirahat, 6. Digital.",
    "tip": "Anggap sesi Istirahat seperti satu modul tetap, lalu petakan pola selang-seling dua pasangan berselisih 2 terlebih dahulu."
  },
  {
    "id": "tiu-pam-168",
    "subPattern": "urutan-dan-jadwal",
    "difficulty": "sulit",
    "prompt": "Enam pemohon paspor (Hana, Ivan, Karin, Lutfi, Mona, Nizar) mengantre pada nomor urut 1 hingga 6. Diketahui:\n(1) Ivan berada tepat dua nomor antrean di belakang Hana.\n(2) Karin berada pada nomor antrean ke-1 atau ke-2.\n(3) Lutfi berada lebih akhir daripada Ivan.\n(4) Mona berada di depan Nizar.\nJika diketahui tambahan bahwa Mona berada tepat di depan Nizar dan Karin berada pada nomor antrean ke-2, maka pernyataan manakah yang PASTI salah?",
    "options": [
      "Lutfi berada pada nomor antrean ke-4.",
      "Nizar berada pada nomor antrean terakhir.",
      "Mona berada pada nomor antrean ke-3.",
      "Lutfi berada pada nomor antrean terakhir.",
      "Mona berada pada nomor antrean ke-4."
    ],
    "answer": "C",
    "explanation": "Dengan Karin=2, pasangan (Hana, Ivan) berselisih 2 hanya mungkin di (1, 3), (3, 5), atau (4, 6). Karena Lutfi > Ivan, Ivan tidak boleh di 6. Jika Hana=3 dan Ivan=5, maka Lutfi=6, menyisakan slot 1 dan 4 yang tidak berturutan untuk blok (Mona, Nizar). Jadi WAJIB Hana=1 dan Ivan=3! Sisa slot 4, 5, 6 diisi oleh Lutfi dan blok (Mona, Nizar), sehingga ada tepat dua susunan valid: (1. Hana, 2. Karin, 3. Ivan, 4. Lutfi, 5. Mona, 6. Nizar) atau (1. Hana, 2. Karin, 3. Ivan, 4. Mona, 5. Nizar, 6. Lutfi). Pada kedua susunan, nomor antrean ke-3 pasti ditempati Ivan, sehingga pernyataan 'Mona berada pada nomor antrean ke-3' PASTI salah.",
    "tip": "Masukkan syarat pengandaian pada kalimat pertanyaan terlebih dahulu untuk memangkas kemungkinan, lalu cari pernyataan yang mustahil di semua sisa susunan valid."
  },
  {
    "id": "tiu-pam-169",
    "subPattern": "urutan-dan-jadwal",
    "difficulty": "sulit",
    "prompt": "Logistik pemilu dikirim secara berurutan ke enam desa (Kencana, Lestari, Makmur, Nusantara, Purnama, Rahayu) pada pengiriman ke-1 hingga ke-6. Diketahui:\n(1) Pengiriman ke Makmur dilakukan tepat setelah Kencana.\n(2) Nusantara dikirim lebih awal daripada Rahayu, dengan tepat dua desa di antara keduanya.\n(3) Lestari tidak boleh dikirim pertama maupun terakhir, dan dikirim tepat sebelum Purnama.\n(4) Kencana dikirim lebih awal daripada Nusantara.\nDesa manakah yang menjadi tujuan pengiriman ke-4 dan ke-5 secara berturut-turut?",
    "options": [
      "Nusantara dan Lestari",
      "Purnama dan Rahayu",
      "Makmur dan Nusantara",
      "Nusantara dan Purnama",
      "Lestari dan Purnama"
    ],
    "answer": "E",
    "explanation": "Terdapat dua blok berurutan berukuran 2: (Kencana, Makmur) dan (Lestari, Purnama), serta pasangan (Nusantara, Rahayu) dengan Rahayu = Nusantara + 3. Karena Kencana < Nusantara dan Kencana diikuti langsung oleh Makmur, maka Nusantara minimal berada di urutan ke-3. Jika Nusantara=3, maka Rahayu=6, menyisakan urutan 1–2 untuk blok (Kencana, Makmur) dan urutan 4–5 untuk blok (Lestari, Purnama) — seluruh syarat terpenuhi (Lestari=4 bukan pertama/terakhir). Coba Nusantara > 3: jika Nusantara=4, Rahayu=7 (mustahil). Jadi susunan unik: 1. Kencana, 2. Makmur, 3. Nusantara, 4. Lestari, 5. Purnama, 6. Rahayu. Pengiriman ke-4 dan ke-5 adalah Lestari dan Purnama.",
    "tip": "Tentukan posisi paling awal yang mungkin untuk elemen yang punya syarat jarak tetap (selisih 3) dengan memperhatikan blok yang harus mendahuluinya."
  },
  {
    "id": "tiu-pam-170",
    "subPattern": "urutan-dan-jadwal",
    "difficulty": "sulit",
    "prompt": "Enam petugas pengawasan (Rian, Salma, Teguh, Ulfa, Viko, Winda) dijadwalkan piket masing-masing satu hari selama sepekan (Senin hingga Minggu), dan tepat satu hari ditetapkan sebagai hari Libur tanpa piket. Diketahui:\n(1) Hari Libur jatuh antara hari Rabu hingga Jumat (Rabu, Kamis, atau Jumat), tepat di antara jadwal Salma (sehari sebelumnya) dan Viko (sehari sesudahnya).\n(2) Winda piket tepat sehari setelah Ulfa, dan keduanya piket lebih akhir daripada Viko.\n(3) Rian piket lebih awal daripada Teguh, dengan jeda tepat tiga hari di antara keduanya.\nManakah informasi yang tepat mengenai hari Libur dan petugas piket hari Jumat?",
    "options": [
      "Hari Libur adalah Kamis; petugas hari Jumat adalah Viko.",
      "Hari Libur adalah Rabu; petugas hari Jumat adalah Teguh.",
      "Hari Libur adalah Rabu; petugas hari Jumat adalah Ulfa.",
      "Hari Libur adalah Kamis; petugas hari Jumat adalah Teguh.",
      "Hari Libur adalah Jumat; petugas hari Jumat adalah Libur."
    ],
    "answer": "B",
    "explanation": "Syarat (1) membentuk blok 3 hari (Salma, Libur, Viko) dengan Libur ∈ {Rabu=3, Kamis=4, Jumat=5}. Karena blok 2 hari (Ulfa, Winda) harus setelah Viko (syarat 2), posisi Viko maksimal Jumat (5), sehingga Libur hanya bisa Rabu (3) atau Kamis (4). Uji Libur=Kamis (4): Salma=3, Libur=4, Viko=5, sehingga Ulfa=6 dan Winda=7; slot tersisa hanya Senin (1) dan Selasa (2) yang tidak dapat memuat pasangan (Rian, Teguh) berselisih 4 hari (jeda 3 hari). Maka WAJIB Libur=Rabu (3), Salma=Selasa (2), dan Viko=Kamis (4). Tersisa Senin (1), Jumat (5), Sabtu (6), Minggu (7). Pasangan (Rian, Teguh) berselisih 4 hari hanya muat di Senin (1) dan Jumat (5), menyisakan Sabtu=Ulfa dan Minggu=Winda. Susunan lengkap: Senin=Rian, Selasa=Salma, Rabu=Libur, Kamis=Viko, Jumat=Teguh, Sabtu=Ulfa, Minggu=Winda.",
    "tip": "Ikat blok tiga hari (Salma–Libur–Viko) dan uji posisi Libur satu per satu terhadap kecukupan slot untuk blok sesudahnya serta pasangan berjarak 4 hari."
  },
  {
    "id": "tiu-pam-171",
    "subPattern": "duduk-berderet",
    "difficulty": "mudah",
    "prompt": "Lima pemohon layanan duduk sebaris di ruang tunggu menghadap loket pada kursi bernomor 1 hingga 5 dari kiri ke kanan: Andi, Bela, Candra, Dina, dan Eko. Diketahui:\n(1) Andi duduk di kursi paling kiri (kursi ke-1).\n(2) Dina duduk di kursi paling kanan (kursi ke-5).\n(3) Eko duduk tepat di sebelah kanan Candra.\n(4) Bela duduk di sebelah kanan Andi, tetapi di sebelah kiri Candra.\nSiapakah yang duduk tepat di tengah barisan (kursi ke-3)?",
    "options": [
      "Bela",
      "Candra",
      "Eko",
      "Andi",
      "Dina"
    ],
    "answer": "B",
    "explanation": "Kursi 1=Andi dan kursi 5=Dina, menyisakan kursi 2, 3, dan 4 untuk Bela, Candra, dan Eko. Karena Bela di kiri Candra (syarat 4) dan Eko tepat di kanan Candra (syarat 3), susunan tunggal dari kiri ke kanan adalah: 1. Andi, 2. Bela, 3. Candra, 4. Eko, 5. Dina. Jadi, yang duduk di kursi ke-3 adalah Candra.",
    "tip": "Kunci kursi ujung yang sudah diketahui terlebih dahulu, lalu urutkan tiga peserta tersisa dari kiri ke kanan."
  },
  {
    "id": "tiu-pam-172",
    "subPattern": "duduk-berderet",
    "difficulty": "mudah",
    "prompt": "Lima peserta pelantikan (Farah, Galih, Hana, Indra, Joko) duduk dalam satu baris menghadap panggung pada kursi 1 hingga 5 dari kiri ke kanan. Diketahui:\n(1) Hana duduk tepat di tengah barisan (kursi ke-3).\n(2) Galih duduk tepat di sebelah kiri Hana.\n(3) Joko duduk di sebelah kanan Indra, dan keduanya tidak duduk di kursi ke-1.\nSiapakah yang duduk di kursi paling kiri (kursi ke-1) dan kursi paling kanan (kursi ke-5) secara berturut-turut?",
    "options": [
      "Galih dan Joko",
      "Farah dan Indra",
      "Indra dan Joko",
      "Farah dan Joko",
      "Galih dan Indra"
    ],
    "answer": "D",
    "explanation": "Dari (1) dan (2): kursi 3=Hana dan kursi 2=Galih. Tersisa kursi 1, 4, dan 5. Karena Indra dan Joko tidak duduk di kursi 1 dengan Joko di kanan Indra (syarat 3), maka kursi 4=Indra dan kursi 5=Joko. Kursi 1 ditempati Farah. Susunan kiri ke kanan: 1. Farah, 2. Galih, 3. Hana, 4. Indra, 5. Joko.",
    "tip": "Setelah mengisi posisi tengah dan tetangganya, perhatikan larangan kursi ke-1 untuk langsung memisahkan siapa di sisi kiri dan siapa di sisi kanan."
  },
  {
    "id": "tiu-pam-173",
    "subPattern": "duduk-berderet",
    "difficulty": "mudah",
    "prompt": "Enam pegawai duduk dalam dua baris saling berhadapan di kompartemen kereta dinas, masing-masing 3 kursi berurutan dari sisi Barat ke Timur (kolom 1, 2, 3). Baris Utara (menghadap selatan) diisi Aris, Bimo, dan Citra; Baris Selatan (menghadap utara) diisi Dewi, Erlan, dan Farah. Diketahui:\n(1) Aris duduk tepat berhadapan dengan Dewi di kursi paling barat (kolom 1).\n(2) Erlan duduk tepat di sebelah timur Dewi.\n(3) Citra duduk tepat berhadapan dengan Farah.\nSiapakah yang duduk tepat berhadapan dengan Erlan?",
    "options": [
      "Bimo",
      "Aris",
      "Citra",
      "Dewi",
      "Farah"
    ],
    "answer": "A",
    "explanation": "Dari (1), Aris=Utara-1 dan Dewi=Selatan-1. Dari (2), Erlan=Selatan-2, sehingga kursi tersisa di Baris Selatan adalah Farah=Selatan-3. Dari (3), Citra berhadapan dengan Farah sehingga Citra=Utara-3. Kursi tersisa Utara-2 ditempati Bimo. Peta kursi (Barat ke Timur): Utara=[Aris, Bimo, Citra]; Selatan=[Dewi, Erlan, Farah]. Jadi yang berhadapan dengan Erlan adalah Bimo.",
    "tip": "Buat sketsa tabel 2 baris × 3 kolom (Barat ke Timur) agar pasangan berhadapan langsung terlihat pada kolom yang sama."
  },
  {
    "id": "tiu-pam-174",
    "subPattern": "duduk-berderet",
    "difficulty": "sedang",
    "prompt": "Enam peserta ujian komputer (Kiki, Lina, Mira, Nanda, Oki, Putri) duduk sebaris menghadap layar pada kursi bernomor 1 hingga 6 dari kiri ke kanan. Diketahui:\n(1) Oki duduk di kursi paling kanan (kursi ke-6), tepat di sebelah kanan Putri.\n(2) Kiki duduk di salah satu kursi ujung (kursi ke-1 atau ke-6).\n(3) Ada tepat satu kursi di antara Kiki dan Mira.\n(4) Nanda duduk tepat di sebelah kanan Mira.\nSiapakah yang duduk pada kursi ke-2 dan kursi ke-4 secara berturut-turut?",
    "options": [
      "Mira dan Nanda",
      "Lina dan Putri",
      "Mira dan Putri",
      "Kiki dan Nanda",
      "Lina dan Nanda"
    ],
    "answer": "E",
    "explanation": "Dari (1), Oki=6 dan Putri=5. Karena kursi 6 sudah terisi Oki, syarat (2) memaksa Kiki=1. Dari (3), ada tepat satu kursi di antara Kiki (1) dan Mira, sehingga Mira=3. Dari (4), Nanda=4. Kursi 2 yang tersisa ditempati Lina. Susunan lengkap kiri ke kanan: 1. Kiki, 2. Lina, 3. Mira, 4. Nanda, 5. Putri, 6. Oki. Kursi ke-2 adalah Lina dan kursi ke-4 adalah Nanda.",
    "tip": "Mulai dari kursi ujung yang sudah pasti (kursi 6) untuk mengeliminasi pilihan ujung lain bagi peserta berikutnya."
  },
  {
    "id": "tiu-pam-175",
    "subPattern": "duduk-berderet",
    "difficulty": "sedang",
    "prompt": "Enam pegawai (Rama, Sinta, Tono, Umar, Vina, Wawan) duduk dalam satu baris menghadap papan paparan pada kursi 1 hingga 6 dari kiri ke kanan. Diketahui:\n(1) Tono duduk tepat dua kursi di sebelah kanan Rama.\n(2) Sinta duduk tepat di antara Rama dan Tono.\n(3) Vina duduk tepat di sebelah kanan Tono.\n(4) Umar duduk di sebelah kiri Rama, sedangkan Wawan duduk di sebelah kanan Vina.\nSiapakah yang duduk pada kursi paling kiri (kursi ke-1) dan kursi paling kanan (kursi ke-6) secara berturut-turut?",
    "options": [
      "Rama dan Wawan",
      "Umar dan Vina",
      "Umar dan Wawan",
      "Rama dan Vina",
      "Sinta dan Wawan"
    ],
    "answer": "C",
    "explanation": "Dari (1), (2), dan (3), terbentuk blok tetap 4 kursi berurutan dari kiri ke kanan: Rama – Sinta – Tono – Vina. Syarat (4) menyatakan Umar berada di kiri Rama dan Wawan berada di kanan Vina. Karena total kursi tepat 6, satu-satunya susunan yang mungkin adalah: 1. Umar, 2. Rama, 3. Sinta, 4. Tono, 5. Vina, 6. Wawan. Kursi paling kiri adalah Umar dan paling kanan adalah Wawan.",
    "tip": "Rangkai terlebih dahulu blok kursi yang posisinya saling mengikat, lalu hitung sisa kursi di sisi kiri dan kanan blok tersebut."
  },
  {
    "id": "tiu-pam-176",
    "subPattern": "duduk-berderet",
    "difficulty": "sedang",
    "prompt": "Enam peserta rapat dinas duduk dalam dua baris saling berhadapan (kolom 1, 2, 3 dari Barat ke Timur). Baris Utara (menghadap selatan) diisi Gita, Hadi, dan Indra; Baris Selatan (menghadap utara) diisi Jihan, Kartika, dan Lukman. Arah kiri dan kanan mengikuti sudut pandang masing-masing peserta. Diketahui:\n(1) Kartika duduk di tengah Baris Selatan (kolom 2) dan tepat berhadapan dengan Gita.\n(2) Lukman duduk tepat di sebelah kanan Kartika.\n(3) Hadi duduk tepat di sebelah kanan Gita.\nSiapakah yang duduk tepat berhadapan dengan Lukman?",
    "options": [
      "Hadi",
      "Gita",
      "Jihan",
      "Indra",
      "Kartika"
    ],
    "answer": "D",
    "explanation": "Dari (1): Kartika=Selatan-2 dan Gita=Utara-2. Karena Kartika menghadap utara, sebelah kanannya adalah arah Timur (kolom 3), sehingga Lukman=Selatan-3 dan tersisa Jihan=Selatan-1. Karena Gita menghadap selatan, sebelah kanannya adalah arah Barat (kolom 1), sehingga Hadi=Utara-1 dan tersisa Indra=Utara-3. Peta kursi (Barat ke Timur): Utara=[Hadi, Gita, Indra]; Selatan=[Jihan, Kartika, Lukman]. Jadi yang berhadapan dengan Lukman (kolom 3) adalah Indra.",
    "tip": "Hati-hati pada arah hadap berlawanan: peserta yang menghadap utara memiliki kanan di Timur, sedangkan yang menghadap selatan memiliki kanan di Barat."
  },
  {
    "id": "tiu-pam-177",
    "subPattern": "duduk-berderet",
    "difficulty": "sedang",
    "prompt": "Dalam ruang wawancara seleksi ASN terdapat dua baris masing-masing 3 kursi (kolom 1, 2, 3 dari Barat ke Timur). Baris Utara (menghadap selatan) diisi tiga panelis: Maya, Naufal, dan Olivia. Baris Selatan (menghadap utara) diisi tiga peserta: Panji, Qori, dan Raka. Arah kiri dan kanan mengikuti arah hadap masing-masing. Diketahui:\n(1) Panji tidak duduk di kursi ujung mana pun.\n(2) Raka duduk tepat di sebelah kanan Panji.\n(3) Olivia duduk tepat berhadapan dengan peserta yang duduk di sebelah kiri Panji.\n(4) Naufal tidak duduk berhadapan dengan Panji.\nPanelis manakah yang duduk tepat berhadapan dengan Panji?",
    "options": [
      "Maya",
      "Naufal",
      "Olivia",
      "Qori",
      "Raka"
    ],
    "answer": "A",
    "explanation": "Dari (1), Panji=Selatan-2. Karena Baris Selatan menghadap utara, sebelah kanan Panji adalah Timur (kolom 3) sehingga Raka=Selatan-3, dan sebelah kiri Panji adalah Barat (kolom 1) sehingga Qori=Selatan-1. Dari (3), Olivia berhadapan dengan Qori sehingga Olivia=Utara-1. Dari (4), Naufal tidak berhadapan dengan Panji (kolom 2), maka Naufal=Utara-3 dan tersisa Maya=Utara-2. Peta kursi (Barat ke Timur): Utara=[Olivia, Maya, Naufal]; Selatan=[Qori, Panji, Raka]. Panelis di hadapan Panji adalah Maya.",
    "tip": "Selesaikan terlebih dahulu baris yang paling banyak mendapat petunjuk posisi (Baris Selatan), lalu petakan pasangannya ke baris hadapannya."
  },
  {
    "id": "tiu-pam-178",
    "subPattern": "duduk-berderet",
    "difficulty": "sedang",
    "prompt": "Tujuh pegawai (Arif, Bimo, Citra, Dewi, Erlan, Fajar, Gita) duduk dalam satu baris menghadap panggung aula pada kursi 1 hingga 7 dari kiri ke kanan. Diketahui:\n(1) Dewi duduk tepat di tengah barisan (kursi ke-4).\n(2) Bimo duduk tepat dua kursi di sebelah kiri Dewi.\n(3) Citra duduk tepat di sebelah kanan Dewi.\n(4) Fajar duduk di antara Citra dan Gita.\n(5) Erlan duduk tepat di sebelah kiri Bimo.\nSiapakah yang duduk tepat di antara Bimo dan Dewi?",
    "options": [
      "Erlan",
      "Citra",
      "Fajar",
      "Gita",
      "Arif"
    ],
    "answer": "E",
    "explanation": "Dari (1), Dewi=4. Dari (2), Bimo=4−2=2. Dari (5), Erlan=2−1=1. Dari (3), Citra=4+1=5. Dari (4), karena sisa kursi di kanan Citra hanya kursi 6 dan 7, maka Fajar=6 dan Gita=7. Satu-satunya kursi tersisa adalah kursi ke-3 (di antara Bimo dan Dewi) yang ditempati Arif. Susunan lengkap: 1. Erlan, 2. Bimo, 3. Arif, 4. Dewi, 5. Citra, 6. Fajar, 7. Gita.",
    "tip": "Gunakan nomor kursi 1 sampai 7 sebagai patokan tetap; posisi 'tepat dua kursi di sebelah kiri' berarti nomor kursi dikurangi 2."
  },
  {
    "id": "tiu-pam-179",
    "subPattern": "duduk-berderet",
    "difficulty": "sedang",
    "prompt": "Lima pegawai (Hadi, Irwan, Jihan, Kartika, Lukman) duduk pada deretan 6 kursi bernomor 1 hingga 6 dari kiri ke kanan sehingga tepat satu kursi dibiarkan kosong. Diketahui:\n(1) Kursi kosong tidak berada di kursi ke-1 maupun kursi ke-6.\n(2) Irwan duduk di kursi ke-1, tepat di sebelah kiri Hadi.\n(3) Jihan duduk tepat dua kursi di sebelah kanan Hadi.\n(4) Lukman duduk di kursi ke-6, tepat di sebelah kanan Kartika.\nDi manakah posisi kursi kosong tersebut?",
    "options": [
      "Kursi ke-4, di antara Jihan dan Kartika",
      "Kursi ke-3, di antara Hadi dan Jihan",
      "Kursi ke-2, di antara Irwan dan Jihan",
      "Kursi ke-5, di antara Jihan dan Lukman",
      "Kursi ke-3, di antara Irwan dan Kartika"
    ],
    "answer": "B",
    "explanation": "Dari (2): Irwan=1 dan Hadi=2. Dari (3): Jihan=2+2=4. Dari (4): Lukman=6 dan Kartika=5. Satu-satunya kursi yang belum terisi adalah kursi ke-3 (memenuhi syarat 1 bahwa bukan di ujung). Susunan lengkap: 1. Irwan, 2. Hadi, 3. Kosong, 4. Jihan, 5. Kartika, 6. Lukman. Jadi kursi kosong berada di kursi ke-3, di antara Hadi dan Jihan.",
    "tip": "Isi semua posisi pegawai yang nomor kursinya bisa langsung dihitung; kursi yang tersisa otomatis merupakan kursi kosong."
  },
  {
    "id": "tiu-pam-180",
    "subPattern": "duduk-berderet",
    "difficulty": "sedang",
    "prompt": "Delapan peserta dinas luar duduk dalam dua baris saling berhadapan di gerbong kereta eksekutif (kolom 1, 2, 3, 4 dari Barat ke Timur). Baris Utara (menghadap selatan) diisi Aldi, Bayu, Cika, dan Dimas; Baris Selatan (menghadap utara) diisi Eva, Fikri, Gina, dan Hana. Arah kiri dan kanan mengikuti arah hadap masing-masing. Diketahui:\n(1) Eva duduk di ujung barat Baris Selatan (kolom 1) dan tepat berhadapan dengan Aldi.\n(2) Fikri duduk tepat di sebelah kanan Eva, serta berhadapan dengan Cika.\n(3) Hana duduk di ujung timur Baris Selatan (kolom 4).\n(4) Bayu duduk tepat di sebelah kiri Cika.\nSiapakah yang duduk tepat berhadapan dengan Gina?",
    "options": [
      "Aldi",
      "Cika",
      "Bayu",
      "Dimas",
      "Fikri"
    ],
    "answer": "C",
    "explanation": "Dari (1): Eva=Selatan-1, Aldi=Utara-1. Dari (2): karena Eva menghadap utara, kanannya adalah Timur (kolom 2), maka Fikri=Selatan-2 dan Cika=Utara-2. Dari (3): Hana=Selatan-4, sehingga tersisa Gina=Selatan-3. Dari (4): karena Cika di Baris Utara menghadap selatan, sebelah kirinya adalah arah Timur (kolom 3), sehingga Bayu=Utara-3 dan tersisa Dimas=Utara-4. Peta kursi (Barat ke Timur): Utara=[Aldi, Cika, Bayu, Dimas]; Selatan=[Eva, Fikri, Gina, Hana]. Jadi yang berhadapan dengan Gina adalah Bayu.",
    "tip": "Ingat bahwa bagi peserta yang menghadap selatan (Baris Utara), arah kiri mereka menuju ke Timur (nomor kolom bertambah)."
  },
  {
    "id": "tiu-pam-181",
    "subPattern": "duduk-berderet",
    "difficulty": "sedang",
    "prompt": "Enam peserta orientasi CPNS (Mona, Nizar, Olla, Putra, Qori, Rian) duduk dalam satu baris pada kursi 1 hingga 6 dari kiri ke kanan. Diketahui:\n(1) Putra duduk di kursi paling kiri (kursi ke-1).\n(2) Mona duduk tepat di sebelah kanan Putra.\n(3) Nizar duduk tepat dua kursi di sebelah kanan Mona.\n(4) Olla duduk di sebelah kiri Nizar, sedangkan Qori dan Rian sama-sama duduk di sebelah kanan Nizar.\nBerdasarkan ketentuan tersebut, pernyataan manakah yang PASTI benar?",
    "options": [
      "Olla duduk tepat di antara Mona dan Nizar pada kursi ke-3.",
      "Qori duduk di kursi paling kanan (kursi ke-6).",
      "Rian duduk tepat di sebelah kanan Nizar.",
      "Qori duduk tepat di antara Nizar dan Rian.",
      "Nizar duduk tepat di sebelah kiri Rian."
    ],
    "answer": "A",
    "explanation": "Dari (1)–(3): Putra=1, Mona=2, dan Nizar=2+2=4. Satu-satunya kursi kosong di sebelah kiri Nizar (4) adalah kursi ke-3, sehingga syarat (4) memaksa Olla=3. Adapun Qori dan Rian menempati kursi ke-5 dan ke-6 dan dapat saling bertukar. Dua susunan valid: (Putra, Mona, Olla, Nizar, Qori, Rian) dan (Putra, Mona, Olla, Nizar, Rian, Qori). Maka pernyataan yang pasti benar di kedua susunan adalah Olla duduk tepat di antara Mona dan Nizar pada kursi ke-3.",
    "tip": "Bedakan posisi yang sudah terkunci tunggal dengan pasangan peserta yang masih bebas bertukar tempat."
  },
  {
    "id": "tiu-pam-182",
    "subPattern": "duduk-berderet",
    "difficulty": "sulit",
    "prompt": "Delapan delegasi duduk dalam dua baris saling berhadapan pada meja konferensi (kolom 1, 2, 3, 4 dari Barat ke Timur). Baris Utara (menghadap selatan) diisi Sari, Teguh, Ulfa, dan Viko; Baris Selatan (menghadap utara) diisi Arman, Winda, Yoga, dan Zaki. Arah kiri dan kanan mengikuti sudut pandang masing-masing delegasi. Diketahui:\n(1) Yoga duduk tepat dua kursi di sebelah kanan Winda.\n(2) Zaki duduk tepat di sebelah kiri Winda.\n(3) Sari duduk tepat berhadapan dengan Arman.\n(4) Viko duduk tepat di sebelah kanan Sari.\n(5) Teguh tidak duduk di ujung timur Baris Utara (kolom 4).\nSiapakah delegasi yang duduk tepat berhadapan dengan Winda?",
    "options": [
      "Teguh",
      "Sari",
      "Viko",
      "Ulfa",
      "Arman"
    ],
    "answer": "C",
    "explanation": "Di Baris Selatan (menghadap utara, kiri=Barat, kanan=Timur): syarat (1) dan (2) membentuk pola Zaki – Winda – (kosong) – Yoga (rentang 4 kursi penuh). Maka satu-satunya susunan Baris Selatan adalah 1. Zaki, 2. Winda, 3. Arman, 4. Yoga. Dari (3), Sari berhadapan dengan Arman sehingga Sari=Utara-3. Karena Sari menghadap selatan, sebelah kanannya adalah Barat (kolom 2), sehingga dari (4) Viko=Utara-2. Dari (5), Teguh ≠ kolom 4 sehingga Teguh=Utara-1 dan Ulfa=Utara-4. Peta kursi (Barat ke Timur): Utara=[Teguh, Viko, Sari, Ulfa]; Selatan=[Zaki, Winda, Arman, Yoga]. Jadi yang berhadapan dengan Winda (kolom 2) adalah Viko.",
    "tip": "Susun dulu seluruh baris yang memiliki rentang 4 kursi penuh (kiri hingga kanan), lalu gunakan arah hadap berlawanan pada baris depannya."
  },
  {
    "id": "tiu-pam-183",
    "subPattern": "duduk-berderet",
    "difficulty": "sulit",
    "prompt": "Tujuh peserta pelatihan (Bagas, Clara, Doni, Elsa, Farhan, Gina, Hendra) duduk dalam satu baris menghadap instruktur pada kursi 1 hingga 7 dari kiri ke kanan. Diketahui:\n(1) Ada tepat tiga kursi di antara Bagas dan Farhan, dengan Bagas berada di sebelah kiri Farhan.\n(2) Clara duduk tepat di sebelah kanan Doni, dan keduanya duduk di antara Bagas dan Farhan.\n(3) Elsa duduk di sebelah kiri Bagas.\n(4) Gina duduk tepat di sebelah kanan Farhan.\n(5) Hendra duduk di sebelah kanan Bagas, tetapi di sebelah kiri Doni.\nSiapakah yang duduk pada kursi ke-4 (tengah) dan kursi ke-1 (paling kiri) secara berturut-turut?",
    "options": [
      "Hendra dan Elsa",
      "Clara dan Elsa",
      "Doni dan Bagas",
      "Hendra dan Bagas",
      "Doni dan Elsa"
    ],
    "answer": "E",
    "explanation": "Dari (1), Farhan = Bagas + 4. Karena Elsa di kiri Bagas (syarat 3), maka Bagas ≥ 2; dan karena Gina tepat di kanan Farhan (syarat 4), maka Farhan ≤ 6 sehingga Bagas ≤ 2. Jadi WAJIB Bagas=2, Farhan=6, Elsa=1, dan Gina=7. Tiga kursi di antara Bagas (2) dan Farhan (6) adalah kursi 3, 4, dan 5 untuk Hendra, Doni, dan Clara. Dari (2) dan (5), Hendra < Doni dan Clara tepat di kanan Doni, sehingga kursi 3=Hendra, kursi 4=Doni, dan kursi 5=Clara. Susunan lengkap: 1. Elsa, 2. Bagas, 3. Hendra, 4. Doni, 5. Clara, 6. Farhan, 7. Gina. Kursi ke-4 adalah Doni dan kursi ke-1 adalah Elsa.",
    "tip": "Hitung rentang minimum blok utama ditambah orang di kiri dan kanannya; jika jumlahnya tepat sama dengan total kursi, posisi blok utama langsung terkunci."
  },
  {
    "id": "tiu-pam-184",
    "subPattern": "duduk-berderet",
    "difficulty": "sulit",
    "prompt": "Tujuh pegawai dan satu kursi kosong menempati dua baris saling berhadapan (kolom 1, 2, 3, 4 dari Barat ke Timur). Baris Utara (menghadap selatan) berisi Irfan, Joko, Karin, dan satu kursi Kosong; Baris Selatan (menghadap utara) berisi Lutfi, Mira, Nanda, dan Oki. Arah kiri dan kanan mengikuti sudut pandang masing-masing. Diketahui:\n(1) Lutfi duduk di ujung barat Baris Selatan (kolom 1) dan tidak berhadapan dengan kursi kosong.\n(2) Nanda duduk tepat dua kursi di sebelah kanan Lutfi dan tepat berhadapan dengan Karin.\n(3) Oki duduk tepat di sebelah kanan Nanda.\n(4) Irfan duduk tepat di sebelah kiri Karin.\n(5) Joko duduk di ujung barat Baris Utara (kolom 1).\nSiapakah pegawai yang duduk tepat berhadapan dengan kursi kosong?",
    "options": [
      "Lutfi",
      "Mira",
      "Nanda",
      "Oki",
      "Karin"
    ],
    "answer": "B",
    "explanation": "Di Baris Selatan (menghadap utara, kanan=Timur): Lutfi=Selatan-1 (syarat 1), Nanda=1+2=Selatan-3 (syarat 2), Oki=3+1=Selatan-4 (syarat 3), sehingga tersisa Mira=Selatan-2. Di Baris Utara (menghadap selatan, kiri=Timur): Karin=Utara-3 (berhadapan dengan Nanda), Irfan tepat di kiri Karin yaitu kolom 3+1=Utara-4 (syarat 4), dan Joko=Utara-1 (syarat 5, memenuhi syarat 1 bahwa Lutfi tidak berhadapan dengan kursi kosong). Satu-satunya posisi tersisa adalah Utara-2 untuk kursi Kosong. Peta kursi (Barat ke Timur): Utara=[Joko, Kosong, Karin, Irfan]; Selatan=[Lutfi, Mira, Nanda, Oki]. Jadi yang berhadapan dengan kursi kosong adalah Mira.",
    "tip": "Perlakukan kursi kosong sebagai satu entitas tetap di dalam tabel 2×4, lalu perhatikan bahwa arah kiri peserta Baris Utara menuju ke Timur."
  },
  {
    "id": "tiu-pam-185",
    "subPattern": "duduk-berderet",
    "difficulty": "sulit",
    "prompt": "Enam peserta diskusi (Putri, Qori, Raka, Sinta, Tono, Umar) duduk dalam dua baris saling berhadapan, masing-masing 3 kursi dari Barat ke Timur (kolom 1, 2, 3): Baris Utara menghadap selatan dan Baris Selatan menghadap utara. Arah kiri dan kanan mengikuti arah hadap masing-masing. Diketahui:\n(1) Putri dan Qori duduk di Baris Utara, sedangkan Tono duduk di Baris Selatan.\n(2) Putri duduk di ujung paling barat (kolom 1), tepat berhadapan dengan Tono.\n(3) Sinta duduk tepat di sebelah kiri Putri.\n(4) Raka duduk tepat berhadapan dengan Qori.\nManakah pernyataan berikut yang PASTI benar?",
    "options": [
      "Qori duduk tepat berhadapan dengan Umar.",
      "Sinta duduk di Baris Selatan di antara Tono dan Raka.",
      "Raka duduk di ujung barat Baris Selatan.",
      "Umar duduk di tengah Baris Selatan, tepat berhadapan dengan Sinta.",
      "Putri duduk tepat di sebelah kiri Sinta."
    ],
    "answer": "D",
    "explanation": "Dari (1) dan (2): Putri=Utara-1 dan Tono=Selatan-1. Karena Putri di Baris Utara menghadap selatan, sebelah kirinya adalah arah Timur (kolom 2), sehingga dari (3) Sinta=Utara-2. Karena Qori juga di Baris Utara (syarat 1), satu-satunya kursi tersisa di Utara adalah Qori=Utara-3. Dari (4), Raka berhadapan dengan Qori sehingga Raka=Selatan-3. Tersisa Umar=Selatan-2 (tengah Baris Selatan), yang tepat berhadapan dengan Sinta (Utara-2). Peta kursi (Barat ke Timur): Utara=[Putri, Sinta, Qori]; Selatan=[Tono, Umar, Raka]. (Opsi E salah karena dari arah hadap Sinta yang menghadap selatan, sebelah kirinya adalah Qori, bukan Putri.)",
    "tip": "Ketika keanggotaan baris belum lengkap disebutkan di awal, gunakan petunjuk 'sebelah kiri/kanan' untuk sekaligus menentukan siapa yang sebaris."
  },
  {
    "id": "tiu-pam-186",
    "subPattern": "analitis-tabel-logika",
    "difficulty": "mudah",
    "prompt": "Tiga pegawai baru (Andi, Budi, Citra) masing-masing ditempatkan pada satu divisi berbeda (Hukum, Humas, Keuangan) dan satu kota berbeda (Bandung, Medan, Surabaya). Diketahui:\n(1) Andi bukan dari Divisi Keuangan dan ditempatkan di Bandung.\n(2) Pegawai dari Divisi Hukum ditempatkan di Surabaya.\n(3) Budi berasal dari Divisi Keuangan.\nApakah divisi dan kota penempatan Citra?",
    "options": [
      "Divisi Humas di Medan",
      "Divisi Hukum di Medan",
      "Divisi Keuangan di Surabaya",
      "Divisi Hukum di Surabaya",
      "Divisi Humas di Surabaya"
    ],
    "answer": "D",
    "explanation": "Dari (3), Budi=Keuangan. Dari (1), Andi ditempatkan di Bandung dan bukan Keuangan; karena Divisi Hukum di Surabaya (syarat 2), Andi juga bukan Hukum, maka Andi=Humas (Bandung). Tersisa Citra=Hukum yang otomatis ditempatkan di Surabaya, serta Budi=Keuangan di Medan. Tabel lengkap: Andi (Humas, Bandung), Budi (Keuangan, Medan), Citra (Hukum, Surabaya).",
    "tip": "Buat tabel 3 baris × 2 kolom (Divisi dan Kota) lalu isikan kepastian langsung sebelum melakukan eliminasi."
  },
  {
    "id": "tiu-pam-187",
    "subPattern": "analitis-tabel-logika",
    "difficulty": "mudah",
    "prompt": "Tiga peserta diklat (Dina, Eko, Farah) masing-masing mengenakan warna seragam berbeda (Abu-abu, Biru, Putih) dan berangkat menggunakan moda transportasi berbeda (Bus, Kereta, Pesawat). Diketahui:\n(1) Dina berseragam Biru dan tidak naik Bus.\n(2) Peserta yang naik Pesawat berseragam Abu-abu.\n(3) Farah naik Bus.\nSiapakah peserta yang berseragam Putih dan moda transportasi apa yang digunakannya?",
    "options": [
      "Farah menggunakan Bus",
      "Dina menggunakan Kereta",
      "Eko menggunakan Pesawat",
      "Farah menggunakan Kereta",
      "Eko menggunakan Bus"
    ],
    "answer": "A",
    "explanation": "Dari (1), Dina=Biru dan bukan Bus; dari (2), pengguna Pesawat berseragam Abu-abu sehingga Dina tidak mungkin naik Pesawat, maka Dina=Biru (Kereta). Dari (3), Farah=Bus; karena seragam Biru milik Dina dan Abu-abu milik pengguna Pesawat, maka Farah=Putih (Bus) dan tersisa Eko=Abu-abu (Pesawat). Tabel lengkap: Dina (Biru, Kereta), Eko (Abu-abu, Pesawat), Farah (Putih, Bus).",
    "tip": "Hubungkan atribut silang (seperti Pesawat = Abu-abu) untuk mengeliminasi kemungkinan pasangan milik peserta yang atribut lainnya sudah diketahui."
  },
  {
    "id": "tiu-pam-188",
    "subPattern": "analitis-tabel-logika",
    "difficulty": "mudah",
    "prompt": "Tiga petugas loket kependudukan (Gita, Hadi, Indra) masing-masing menangani satu jenis layanan berbeda (Akta, KK, KTP) dan memiliki jatah libur pada hari berbeda (Selasa, Rabu, Kamis). Diketahui:\n(1) Hadi menangani layanan KTP, tetapi tidak libur pada hari Selasa.\n(2) Petugas layanan KK libur pada hari Kamis.\n(3) Gita tidak menangani KK dan libur pada hari Selasa.\nSiapakah petugas layanan Akta beserta hari liburnya?",
    "options": [
      "Indra, libur pada hari Kamis",
      "Hadi, libur pada hari Rabu",
      "Gita, libur pada hari Rabu",
      "Indra, libur pada hari Selasa",
      "Gita, libur pada hari Selasa"
    ],
    "answer": "E",
    "explanation": "Dari (1), Hadi=KTP. Dari (3), Gita ≠ KK dan Gita=Selasa; karena KTP sudah ditangani Hadi, maka Gita=Akta (Selasa). Tersisa Indra=KK yang menurut syarat (2) libur pada hari Kamis. Maka Hadi otomatis libur pada hari Rabu. Tabel lengkap: Gita (Akta, Selasa), Hadi (KTP, Rabu), Indra (KK, Kamis).",
    "tip": "Coret layanan yang sudah pasti milik orang lain dan yang dilarang untuk segera menemukan pasangan layanan yang tersisa."
  },
  {
    "id": "tiu-pam-189",
    "subPattern": "analitis-tabel-logika",
    "difficulty": "sedang",
    "prompt": "Empat ASN (Joko, Kartika, Lukman, Mira) masing-masing berasal dari divisi berbeda (Audit, Data, Logistik, SDM) dan ditugaskan ke kota berbeda (Denpasar, Jakarta, Makassar, Semarang). Diketahui:\n(1) Kartika ditempatkan di Semarang, dan staf Divisi SDM juga ditempatkan di Semarang.\n(2) Staf Divisi Audit ditempatkan di Jakarta.\n(3) Mira ditempatkan di Makassar, dan staf Divisi Logistik ditempatkan di Makassar.\n(4) Lukman bukan berasal dari Divisi Audit.\nSiapakah staf Divisi Data dan di kota manakah ia ditempatkan?",
    "options": [
      "Joko di Jakarta",
      "Lukman di Denpasar",
      "Lukman di Jakarta",
      "Mira di Denpasar",
      "Joko di Denpasar"
    ],
    "answer": "B",
    "explanation": "Dari (1), Kartika=SDM (Semarang). Dari (3), Mira=Logistik (Makassar). Tersisa Joko dan Lukman untuk pasangan Audit (Jakarta, syarat 2) dan Data (Denpasar, kota tersisa). Karena Lukman ≠ Audit (syarat 4), maka Lukman=Data (Denpasar) dan Joko=Audit (Jakarta). Tabel lengkap: Joko (Audit, Jakarta), Kartika (SDM, Semarang), Lukman (Data, Denpasar), Mira (Logistik, Makassar).",
    "tip": "Satukan petunjuk yang menyebutkan kota yang sama untuk langsung mengunci pasangan orang–divisi–kota."
  },
  {
    "id": "tiu-pam-190",
    "subPattern": "analitis-tabel-logika",
    "difficulty": "sedang",
    "prompt": "Empat tenaga medis (Nanda, Oki, Putri, Rama) memiliki bidang berbeda (Anak, Gigi, Gizi, Umum) dan jadwal tugas jaga berbeda dari Senin hingga Kamis. Diketahui:\n(1) Putri adalah dokter Anak, dan jadwal tugasnya bukan pada hari Senin maupun Selasa.\n(2) Tenaga medis bidang Gizi bertugas pada hari Senin.\n(3) Rama bertugas pada hari Selasa, dan bukan pada bidang Gigi.\n(4) Oki bukan bidang Gizi dan bertugas tepat sehari setelah Putri.\nApakah bidang dan hari tugas jaga milik Oki?",
    "options": [
      "Bidang Umum pada hari Kamis",
      "Bidang Gigi pada hari Rabu",
      "Bidang Gigi pada hari Kamis",
      "Bidang Anak pada hari Rabu",
      "Bidang Umum pada hari Selasa"
    ],
    "answer": "C",
    "explanation": "Dari (1) dan (4), Putri bukan Senin/Selasa dan Oki tepat sehari setelah Putri; dari sisa Rabu–Kamis, satu-satunya pilihan adalah Putri=Rabu (Anak) dan Oki=Kamis. Dari (3), Rama=Selasa, sehingga tersisa Nanda=Senin yang menurut syarat (2) adalah bidang Gizi. Tersisa bidang Gigi dan Umum untuk Oki dan Rama; karena Rama ≠ Gigi (syarat 3), maka Rama=Umum (Selasa) dan Oki=Gigi (Kamis). Tabel lengkap: Nanda (Gizi, Senin), Rama (Umum, Selasa), Putri (Anak, Rabu), Oki (Gigi, Kamis).",
    "tip": "Kunci terlebih dahulu urutan hari dengan petunjuk 'tepat sehari setelah' sebelum memetakan atribut bidangnya."
  },
  {
    "id": "tiu-pam-191",
    "subPattern": "analitis-tabel-logika",
    "difficulty": "sedang",
    "prompt": "Empat peserta seleksi CPNS (Sinta, Tono, Umar, Vina) berasal dari universitas berbeda (ITB, UGM, UI, Unair) dan melamar formasi berbeda (Analis, Auditor, Perencana, Pranata). Diketahui:\n(1) Lulusan UGM melamar formasi Auditor, dan orang tersebut bukan Tono maupun Umar.\n(2) Tono adalah lulusan UI, sedangkan pelamar formasi Perencana adalah lulusan UI.\n(3) Vina bukan lulusan UGM maupun ITB.\n(4) Umar melamar formasi Pranata.\nSiapakah peserta lulusan ITB dan formasi apa yang dilamarnya?",
    "options": [
      "Sinta pada formasi Auditor",
      "Vina pada formasi Analis",
      "Umar pada formasi Analis",
      "Sinta pada formasi Pranata",
      "Umar pada formasi Pranata"
    ],
    "answer": "E",
    "explanation": "Dari (2), Tono=UI (Perencana). Dari (1) dan (3), lulusan UGM (Auditor) bukan Tono, Umar, maupun Vina, sehingga pasti Sinta=UGM (Auditor). Tersisa universitas ITB dan Unair untuk Umar dan Vina; karena Vina ≠ ITB (syarat 3), maka Vina=Unair dan Umar=ITB. Dari (4), Umar=Pranata, sehingga tersisa Vina=Analis. Tabel lengkap: Sinta (UGM, Auditor), Tono (UI, Perencana), Umar (ITB, Pranata), Vina (Unair, Analis).",
    "tip": "Gunakan eliminasi negatif ('bukan X, bukan Y, bukan Z') untuk segera menemukan satu-satunya pemilik atribut yang tersisa."
  },
  {
    "id": "tiu-pam-192",
    "subPattern": "analitis-tabel-logika",
    "difficulty": "sedang",
    "prompt": "Empat petugas lapangan (Arif, Wawan, Yuni, Zaki) bertugas di wilayah berbeda (Barat, Selatan, Timur, Utara) dengan kendaraan dinas berbeda (Minibus, Motor, MPV, Sepeda Listrik). Diketahui:\n(1) Zaki bertugas di wilayah Selatan menggunakan MPV.\n(2) Petugas wilayah Utara menggunakan Sepeda Listrik, dan ia bukan Wawan.\n(3) Arif bertugas di wilayah Barat, tetapi tidak mengendarai Motor.\n(4) Wawan tidak menggunakan Minibus.\nSiapakah petugas wilayah Timur beserta kendaraan dinasnya?",
    "options": [
      "Arif mengendarai Minibus",
      "Yuni mengendarai Sepeda Listrik",
      "Wawan mengendarai Motor",
      "Wawan mengendarai Sepeda Listrik",
      "Arif mengendarai Motor"
    ],
    "answer": "C",
    "explanation": "Dari (1), Zaki=Selatan (MPV). Dari (3), Arif=Barat. Tersisa wilayah Utara dan Timur untuk Wawan dan Yuni; karena petugas Utara bukan Wawan (syarat 2), maka Yuni=Utara (Sepeda Listrik) dan Wawan=Timur. Tersisa kendaraan Minibus dan Motor untuk Arif dan Wawan; karena Arif ≠ Motor (syarat 3) dan Wawan ≠ Minibus (syarat 4), maka Arif=Barat (Minibus) dan Wawan=Timur (Motor). Tabel lengkap: Arif (Minibus, Barat), Wawan (Motor, Timur), Yuni (Sepeda Listrik, Utara), Zaki (MPV, Selatan).",
    "tip": "Pisahkan pemetaan per kategori: tuntaskan dulu penempatan wilayah keempat petugas, baru cocokkan sisa kendaraannya."
  },
  {
    "id": "tiu-pam-193",
    "subPattern": "analitis-tabel-logika",
    "difficulty": "sedang",
    "prompt": "Empat narasumber bintek (Bela, Candra, Dewi, Erlan) membawakan topik berbeda (Anggaran, Digitalisasi, Integritas, Pelayanan) di ruang berbeda (Anggrek, Cendana, Merpati, Nusantara). Diketahui:\n(1) Topik Digitalisasi dibawakan di Ruang Nusantara, bukan oleh Bela maupun Dewi.\n(2) Candra membawakan materi di Ruang Anggrek, dan topiknya bukan Pelayanan.\n(3) Dewi membawakan topik Anggaran, dan ruangnya bukan Merpati.\n(4) Bela tidak membawakan topik Integritas.\nSiapakah narasumber di Ruang Cendana beserta topik yang dibawakannya?",
    "options": [
      "Dewi dengan topik Anggaran",
      "Bela dengan topik Pelayanan",
      "Candra dengan topik Integritas",
      "Erlan dengan topik Digitalisasi",
      "Dewi dengan topik Pelayanan"
    ],
    "answer": "A",
    "explanation": "Dari (2), Candra=Anggrek sehingga bukan Nusantara (Digitalisasi). Dari (1), pemateri Digitalisasi (Nusantara) bukan Bela, Dewi, maupun Candra, sehingga pasti Erlan=Digitalisasi (Nusantara). Dari (3), Dewi=Anggaran. Tersisa topik Integritas dan Pelayanan untuk Bela dan Candra; karena Bela ≠ Integritas (syarat 4) dan Candra ≠ Pelayanan (syarat 2), maka Candra=Integritas (Anggrek) dan Bela=Pelayanan. Tersisa Ruang Cendana dan Merpati untuk Bela dan Dewi; karena Dewi ≠ Merpati (syarat 3), maka Dewi=Cendana dan Bela=Merpati. Tabel lengkap: Bela (Pelayanan, Merpati), Candra (Integritas, Anggrek), Dewi (Anggaran, Cendana), Erlan (Digitalisasi, Nusantara).",
    "tip": "Jika satu narasumber sudah dikunci pada ruang lain, ia otomatis tereliminasi dari pasangan topik–ruang khusus di pernyataan pertama."
  },
  {
    "id": "tiu-pam-194",
    "subPattern": "analitis-tabel-logika",
    "difficulty": "sedang",
    "prompt": "Empat kepala seksi (Fajar, Galih, Hana, Irwan) masing-masing memegang map berkas berwarna berbeda (Biru, Hijau, Kuning, Merah) dan berkantor di lantai berbeda (Lantai 2, Lantai 3, Lantai 4, Lantai 5). Diketahui:\n(1) Pemegang map Hijau berkantor tepat satu lantai di atas Hana.\n(2) Galih berkantor di Lantai 2 dan tidak memegang map Kuning maupun Hijau.\n(3) Irwan memegang map Biru dan berkantor di Lantai 5.\nBerdasarkan data tersebut, pernyataan manakah yang PASTI benar?",
    "options": [
      "Fajar berkantor di Lantai 3 dan memegang map Kuning.",
      "Galih memegang map Hijau di Lantai 2.",
      "Hana memegang map Merah di Lantai 3.",
      "Fajar memegang map Hijau di Lantai 4.",
      "Hana berkantor di Lantai 4 dan memegang map Kuning."
    ],
    "answer": "D",
    "explanation": "Dari (3), Irwan=Biru (Lantai 5). Dari (2), Galih=Lantai 2 dan bukan Biru, Kuning, maupun Hijau, sehingga Galih=Merah (Lantai 2). Tersisa Lantai 3 dan Lantai 4 untuk Fajar dan Hana, serta map Kuning dan Hijau. Dari (1), pemegang map Hijau berada tepat satu lantai di atas Hana. Karena Lantai 5 sudah ditempati map Biru (Irwan), Hana tidak mungkin di Lantai 4; maka wajib Hana=Lantai 3 dan pemegang map Hijau=Lantai 4, yaitu Fajar. Otomatis Hana memegang map Kuning. Tabel lengkap: Galih (Merah, Lantai 2), Hana (Kuning, Lantai 3), Fajar (Hijau, Lantai 4), Irwan (Biru, Lantai 5).",
    "tip": "Periksa lantai mana saja yang masih tersisa lalu terapkan syarat selisih satu lantai terhadap warna map yang belum terpakai."
  },
  {
    "id": "tiu-pam-195",
    "subPattern": "analitis-tabel-logika",
    "difficulty": "sedang",
    "prompt": "Empat mahasiswa magang (Jihan, Kiki, Lina, Maya) ditempatkan pada bidang berbeda (Arsip, Humas, Keuangan, TI) dan masing-masing fasih satu bahasa asing berbeda (Arab, Inggris, Jepang, Mandarin). Diketahui:\n(1) Mahasiswa bidang TI fasih berbahasa Jepang, dan ia bukan Lina maupun Maya.\n(2) Jihan magang di bidang Keuangan dan tidak berbahasa Arab maupun Mandarin.\n(3) Lina berbahasa Mandarin, tetapi tidak magang di bidang Humas.\n(4) Maya tidak berbahasa Inggris.\nApakah bidang magang dan bahasa asing yang dikuasai oleh Maya?",
    "options": [
      "Bidang Arsip dan berbahasa Arab",
      "Bidang Humas dan berbahasa Arab",
      "Bidang Humas dan berbahasa Jepang",
      "Bidang Arsip dan berbahasa Mandarin",
      "Bidang TI dan berbahasa Jepang"
    ],
    "answer": "B",
    "explanation": "Dari (2), Jihan=Keuangan sehingga bukan TI. Dari (1), mahasiswa TI (Jepang) bukan Jihan, Lina, maupun Maya, sehingga pasti Kiki=TI (Jepang). Dari (3), Lina=Mandarin. Tersisa bahasa Inggris dan Arab untuk Jihan dan Maya; karena Jihan ≠ Arab (syarat 2) dan Maya ≠ Inggris (syarat 4), maka Jihan=Inggris dan Maya=Arab. Tersisa bidang Arsip dan Humas untuk Lina dan Maya; karena Lina ≠ Humas (syarat 3), maka Lina=Arsip dan Maya=Humas. Tabel lengkap: Jihan (Keuangan, Inggris), Kiki (TI, Jepang), Lina (Arsip, Mandarin), Maya (Humas, Arab).",
    "tip": "Tandai setiap eliminasi langsung pada matriks 4×4 agar pasangan terakhir pada setiap kategori langsung terlihat."
  },
  {
    "id": "tiu-pam-196",
    "subPattern": "analitis-tabel-logika",
    "difficulty": "sulit",
    "prompt": "Lima pegawai (Naufal, Olivia, Panji, Qori, Raka) berasal dari divisi berbeda (Anggaran, Hukum, Kepegawaian, Pengadaan, Umum) dan ditugaskan ke kota berbeda (Balikpapan, Batam, Manado, Palembang, Yogyakarta). Diketahui:\n(1) Olivia berasal dari Divisi Hukum dan tidak ditempatkan di Batam maupun Manado.\n(2) Raka berasal dari Divisi Anggaran, sedangkan pegawai Divisi Anggaran ditempatkan di Yogyakarta.\n(3) Panji ditempatkan di Balikpapan, tetapi bukan dari Divisi Kepegawaian maupun Pengadaan.\n(4) Qori ditempatkan di Batam.\n(5) Pegawai Divisi Pengadaan ditempatkan di Manado, dan Naufal bukan dari Divisi Kepegawaian.\nPasangan pegawai, divisi, dan kota penempatan manakah yang tepat untuk kota Palembang dan Manado?",
    "options": [
      "Panji (Umum) di Palembang dan Naufal (Pengadaan) di Manado",
      "Olivia (Hukum) di Palembang dan Qori (Pengadaan) di Manado",
      "Olivia (Hukum) di Palembang dan Naufal (Pengadaan) di Manado",
      "Qori (Kepegawaian) di Palembang dan Naufal (Pengadaan) di Manado",
      "Olivia (Hukum) di Manado dan Naufal (Pengadaan) di Palembang"
    ],
    "answer": "C",
    "explanation": "Dari (2): Raka=Anggaran (Yogyakarta). Dari (1): Olivia=Hukum. Dari (3): Panji=Balikpapan, dan karena Anggaran serta Hukum sudah terisi sementara Panji bukan Kepegawaian maupun Pengadaan, maka Panji=Umum (Balikpapan). Tersisa divisi Kepegawaian dan Pengadaan untuk Naufal dan Qori; dari (5) Naufal ≠ Kepegawaian, maka Naufal=Pengadaan (Manado, syarat 5) dan Qori=Kepegawaian (Batam, syarat 4). Kota terakhir yang tersisa adalah Palembang untuk Olivia (Hukum) — sesuai syarat (1). Tabel lengkap: Naufal (Pengadaan, Manado), Olivia (Hukum, Palembang), Panji (Umum, Balikpapan), Qori (Kepegawaian, Batam), Raka (Anggaran, Yogyakarta).",
    "tip": "Pada tabel logika 5×5, kunci dulu divisi orang yang memiliki syarat larangan terbanyak (seperti Panji) untuk memicu efek domino ke seluruh baris."
  },
  {
    "id": "tiu-pam-197",
    "subPattern": "analitis-tabel-logika",
    "difficulty": "sulit",
    "prompt": "Lima peserta bimbingan teknis (Sari, Teguh, Ulfa, Viko, Winda) berasal dari kementerian berbeda (Kesehatan, Keuangan, Pendidikan, Perhubungan, Pertanian) dan menginap di hotel berbeda (Amaris, Horison, Mercure, Novotel, Santika). Diketahui:\n(1) Peserta dari Kementerian Keuangan menginap di Hotel Novotel, dan ia bukan Sari, Ulfa, maupun Winda.\n(2) Winda berasal dari Kementerian Kesehatan dan menginap di Hotel Santika.\n(3) Teguh menginap di Hotel Amaris dan bukan dari Kementerian Keuangan maupun Pertanian.\n(4) Ulfa menginap di Hotel Mercure, bukan dari Kementerian Pendidikan maupun Perhubungan.\n(5) Sari berasal dari Kementerian Perhubungan, dan peserta dari Kementerian Pendidikan tidak menginap di Hotel Horison.\nDari kementerian manakah tamu Hotel Mercure dan tamu Hotel Amaris secara berturut-turut?",
    "options": [
      "Pendidikan dan Pertanian",
      "Pertanian dan Pendidikan",
      "Pertanian dan Perhubungan",
      "Keuangan dan Pendidikan",
      "Perhubungan dan Pertanian"
    ],
    "answer": "B",
    "explanation": "Dari (2): Winda=Kesehatan (Santika). Dari (1) dan (3): peserta Keuangan (Novotel) bukan Sari, Ulfa, Winda, maupun Teguh, sehingga pasti Viko=Keuangan (Novotel). Dari (5): Sari=Perhubungan. Tersisa kementerian Pendidikan dan Pertanian untuk Teguh dan Ulfa; dari (3) Teguh ≠ Pertanian dan dari (4) Ulfa ≠ Pendidikan, maka Teguh=Pendidikan (Amaris) dan Ulfa=Pertanian (Mercure). Hotel tersisa Horison milik Sari (Perhubungan), memenuhi syarat (5). Tabel lengkap: Sari (Perhubungan, Horison), Teguh (Pendidikan, Amaris), Ulfa (Pertanian, Mercure), Viko (Keuangan, Novotel), Winda (Kesehatan, Santika). Jadi Mercure=Pertanian dan Amaris=Pendidikan.",
    "tip": "Gabungkan semua pengecualian terhadap satu atribut ('bukan A, B, C, dan D') agar langsung menunjuk pemilik tunggalnya."
  },
  {
    "id": "tiu-pam-198",
    "subPattern": "analitis-tabel-logika",
    "difficulty": "sulit",
    "prompt": "Lima auditor inspektorat (Aldi, Bayu, Cika, Dimas, Eva) memaparkan lima objek audit berbeda (BUMN, Daerah, Infrastruktur, Kesehatan, Pendidikan), masing-masing satu orang setiap hari dari Senin hingga Jumat. Diketahui:\n(1) Bayu memaparkan audit Pendidikan pada hari Senin.\n(2) Cika memaparkan audit Kesehatan pada hari Jumat.\n(3) Dimas memaparkan hasil audit tepat dua hari setelah Eva.\n(4) Eva memaparkan audit BUMN.\n(5) Audit Infrastruktur dipaparkan tepat sehari setelah audit BUMN.\nSiapakah auditor yang bertugas pada hari Rabu dan objek audit apa yang dipaparkannya?",
    "options": [
      "Dimas memaparkan audit Daerah",
      "Eva memaparkan audit BUMN",
      "Aldi memaparkan audit Daerah",
      "Aldi memaparkan audit Infrastruktur",
      "Dimas memaparkan audit Infrastruktur"
    ],
    "answer": "D",
    "explanation": "Dari (1) dan (2): Senin=Bayu (Pendidikan) dan Jumat=Cika (Kesehatan). Tersisa Selasa, Rabu, dan Kamis untuk Aldi, Dimas, dan Eva. Dari (3), Dimas tepat dua hari setelah Eva; satu-satunya pasangan berselisih 2 hari pada {Selasa, Rabu, Kamis} adalah Eva=Selasa dan Dimas=Kamis, sehingga otomatis Aldi=Rabu. Dari (4), Eva=BUMN (Selasa). Dari (5), audit Infrastruktur dipaparkan tepat sehari setelah BUMN, yakni pada hari Rabu oleh Aldi. Objek terakhir yang tersisa adalah Daerah untuk Dimas (Kamis). Tabel lengkap: Senin=Bayu (Pendidikan), Selasa=Eva (BUMN), Rabu=Aldi (Infrastruktur), Kamis=Dimas (Daerah), Jumat=Cika (Kesehatan).",
    "tip": "Selesaikan dulu penempatan hari setiap auditor dengan syarat selisih 2 hari, lalu alirkan objek auditnya mengikuti urutan hari tersebut."
  },
  {
    "id": "tiu-pam-199",
    "subPattern": "analitis-tabel-logika",
    "difficulty": "sulit",
    "prompt": "Lima kurir dokumen negara (Fikri, Gina, Hendra, Ivan, Karin) masing-masing mengendarai jenis kendaraan berbeda (Motor, MPV, Sedan, SUV, Van) dengan warna berbeda (Biru, Hitam, Merah, Perak, Putih). Diketahui:\n(1) Kendaraan SUV berwarna Hitam dan dikendarai oleh Hendra.\n(2) Fikri mengendarai kendaraan berwarna Putih, tetapi bukan Sedan maupun Van.\n(3) Kendaraan Motor berwarna Merah dan bukan dikendarai oleh Gina maupun Karin.\n(4) Karin mengendarai Van yang tidak berwarna Biru.\n(5) Kendaraan Sedan berwarna Biru.\nPernyataan manakah yang PASTI benar?",
    "options": [
      "Gina mengendarai Sedan Biru, sedangkan Karin mengendarai Van Perak.",
      "Fikri mengendarai Motor Putih, sedangkan Ivan mengendarai MPV Merah.",
      "Ivan mengendarai MPV Merah, sedangkan Gina mengendarai Sedan Biru.",
      "Gina mengendarai Van Biru, sedangkan Karin mengendarai Sedan Perak.",
      "Karin mengendarai Van Hitam, sedangkan Fikri mengendarai MPV Putih."
    ],
    "answer": "A",
    "explanation": "Dari (1): Hendra=SUV (Hitam). Dari (4): Karin=Van. Dari (2): Fikri berwarna Putih sehingga tidak mungkin Motor (Merah, syarat 3) maupun Sedan (Biru, syarat 5), dan bukan SUV/Van; maka pasti Fikri=MPV (Putih). Dari (3): pengendara Motor (Merah) bukan Hendra, Fikri, Gina, maupun Karin, sehingga pasti Ivan=Motor (Merah). Tersisa Gina=Sedan yang menurut syarat (5) berwarna Biru. Warna terakhir yang tersisa adalah Perak untuk Karin (Van), sesuai syarat (4). Tabel lengkap: Fikri (MPV, Putih), Gina (Sedan, Biru), Hendra (SUV, Hitam), Ivan (Motor, Merah), Karin (Van, Perak).",
    "tip": "Cocokkan warna kendaraan yang sudah terkunci ke jenis kendaraan tertentu (SUV=Hitam, Motor=Merah, Sedan=Biru) agar Fikri yang berwarna Putih langsung terpetakan."
  },
  {
    "id": "tiu-pam-200",
    "subPattern": "analitis-tabel-logika",
    "difficulty": "sulit",
    "prompt": "Lima pimpinan tim evaluasi (Lutfi, Mona, Nizar, Olla, Putra) masing-masing memimpin satu program prioritas berbeda (Desa Digital, Pangan, Stunting, UMKM, Vokasi) di lima provinsi berbeda (Aceh, Bali, Maluku, Papua, Riau). Diketahui:\n(1) Lutfi ditugaskan di Provinsi Papua untuk memimpin program Vokasi.\n(2) Program Stunting dilaksanakan di Provinsi Maluku, bukan oleh Lutfi, Mona, Putra, maupun Nizar.\n(3) Putra ditugaskan di Provinsi Riau, tetapi bukan untuk program UMKM maupun Vokasi.\n(4) Mona memimpin program Desa Digital, dan bukan di Provinsi Bali maupun Riau.\n(5) Program UMKM dilaksanakan di Provinsi Bali.\nPasangan nama, program prioritas, dan provinsi manakah yang seluruhnya tepat?",
    "options": [
      "Mona (Desa Digital – Bali) dan Nizar (UMKM – Aceh)",
      "Putra (Pangan – Riau) dan Nizar (Stunting – Maluku)",
      "Olla (UMKM – Bali) dan Mona (Desa Digital – Aceh)",
      "Putra (Desa Digital – Riau) dan Olla (Stunting – Maluku)",
      "Putra (Pangan – Riau) dan Olla (Stunting – Maluku)"
    ],
    "answer": "E",
    "explanation": "Dari (1): Lutfi=Vokasi (Papua). Dari (2): pimpinan Stunting (Maluku) bukan Lutfi, Mona, Putra, maupun Nizar, sehingga pasti Olla=Stunting (Maluku). Dari (4): Mona=Desa Digital. Tersisa program Pangan dan UMKM untuk Nizar dan Putra; karena Putra ≠ UMKM (syarat 3), maka Putra=Pangan (Riau, syarat 3) dan Nizar=UMKM (Bali, syarat 5). Provinsi terakhir yang tersisa adalah Aceh untuk Mona (Desa Digital), sesuai syarat (4). Tabel lengkap: Lutfi (Vokasi, Papua), Mona (Desa Digital, Aceh), Nizar (UMKM, Bali), Olla (Stunting, Maluku), Putra (Pangan, Riau).",
    "tip": "Selesaikan terlebih dahulu atribut yang mengecualikan empat dari lima orang, lalu gunakan syarat larangan untuk memisahkan dua program terakhir."
  }
];
