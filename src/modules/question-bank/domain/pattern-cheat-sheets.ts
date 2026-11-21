import type { PracticePatternId } from "./question";

export type PatternCheatSheet = {
  patternId: PracticePatternId;
  targetSecondsPerQuestion: number;
  headline: string;
  coreConcept: string;
  fastTricks: readonly string[];
  commonTraps: readonly string[];
};

export const PATTERN_CHEAT_SHEETS: Record<PracticePatternId, PatternCheatSheet> = {
  // ===========================================================================
  // TWK — 5 PILAR WAWASAN KEBANGSAAN
  // ===========================================================================
  nasionalisme: {
    patternId: "nasionalisme",
    targetSecondsPerQuestion: 45,
    headline: "Utamakan kepentingan bangsa & persatuan di atas golongan atau daerah",
    coreConcept:
      "Soal Nasionalisme menguji penerapan kesadaran berbangsa Indonesia dalam studi kasus nyata: transisi perjuangan pasca-1908, Sumpah Pemuda 1928, keberpihakan pada produk dalam negeri (TKDN), toleransi lintas budaya, dan netralitas ASN dalam kontestasi politik.",
    fastTricks: [
      "Bandingkan sifat perjuangan pra-1908 (kedaerahan, fisik, bergantung tokoh lokal) vs pasca-1908 (organisasi modern, terdidik, nasional).",
      "Pada dilema ekonomi/pengadaan, pilih opsi yang memperkuat kemandirian nasional/UMKM lokal tanpa melanggar aturan mutu dan transparansi.",
      "Untuk soal netralitas ASN, tolak segala bentuk keberpihakan (like/share/pose/fasilitas dinas) kepada peserta pemilu atau pilkada.",
      "Pada kasus budaya global, pilih sikap adaptif-selektif: menyerap teknologi/ilmu modern sambil menjaga jati diri serta nilai Pancasila.",
    ],
    commonTraps: [
      "Mengira nasionalisme berarti menolak total budaya atau teknologi asing (chauvinisme/isolasionis).",
      "Terkecoh opsi yang mengatasnamakan loyalitas atasan padahal bertentangan dengan hukum dan kepentingan publik.",
    ],
  },
  integritas: {
    patternId: "integritas",
    targetSecondsPerQuestion: 45,
    headline: "Kejujuran tanpa kompromi, tolak gratifikasi, dan patuhi prosedur pelaporan",
    coreConcept:
      "Pilar Integritas menilai keselarasan antara perkataan, tindakan, kode etik ASN BerAKHLAK, serta kepatuhan hukum antikorupsi (UU Tipikor, pelaporan gratifikasi ke KPK maksimal 30 hari kerja, konflik kepentingan, dan mekanisme whistleblowing resmi).",
    fastTricks: [
      "Gratifikasi yang berkaitan dengan jabatan dan berlawanan dengan kewajiban wajib ditolak; jika terpaksa diterima (misal dikirim tanpa diketahui), laporkan ke UPG/KPK maksimal 30 hari kerja.",
      "Pada konflik kepentingan (keluarga/kolega ikut tender atau layanan), wajib menyatakan mundur (recusal) dari pengambilan keputusan dan menyerahkan ke pejabat lain yang netral.",
      "Untuk temuan pelanggaran internal, pilih pelaporan melalui saluran resmi (atasan berwenang, APIP/Inspektorat, atau WBS) disertai bukti, bukan menyebar di media sosial secara anonim.",
      "Bedakan uang suap (ada kesepakatan/transaksional sebelum atau sesudah tindakan) dengan gratifikasi (pemberian tanpa kesepakatan langsung, tetapi berhubungan dengan jabatan).",
    ],
    commonTraps: [
      "Menganggap bingkisan hari raya/ucapan terima kasih dari mitra kerja boleh diterima asalkan 'diberikan sesudah pekerjaan selesai'.",
      "Memilih diam dengan alasan 'menjaga nama baik instansi' saat melihat manipulasi SPJ atau pungli.",
    ],
  },
  "bela-negara": {
    patternId: "bela-negara",
    targetSecondsPerQuestion: 45,
    headline: "Kontribusi aktif sesuai profesi menghadapi ancaman militer, nirmiliter & siber",
    coreConcept:
      "Bela Negara merujuk pada Pasal 27 ayat (3) dan Pasal 30 UUD 1945 serta UU Pengelolaan Sumber Daya Nasional (PSDN). Di era modern, ujian banyak mengangkat ancaman nirmiliter dan hibrida: kejahatan siber/SPBE, disinformasi pemecah belah, kesiapsiagaan bencana, hingga pengabdian di wilayah 3T.",
    fastTricks: [
      "Pasal 27 ayat (3) UUD 1945 mengatur hak dan kewajiban Bela Negara setiap warga negara; Pasal 30 ayat (1)–(2) menegaskan sistem Sishankamrata (TNI–Polri komponen utama, rakyat komponen pendukung).",
      "Pada kasus disinformasi/deepfake atau serangan siber di instansi, gabungkan verifikasi fakta otoritas resmi, pengamanan sistem, dan edukasi publik.",
      "Bela negara bukan hanya wajib militer—ASN yang menjaga kualitas layanan di daerah 3T, guru di perbatasan, dan nakes tanggap bencana adalah wujud bela negara lewat profesi.",
      "Pada kasus sumber daya alam atau perbatasan (ZEE, pulau terluar), utamakan penegakan kedaulatan berbasis hukum nasional & konvensi internasional (UNCLOS 1982).",
    ],
    commonTraps: [
      "Menyempitkan makna bela negara hanya sebagai angkat senjata atau latihan kemiliteran.",
      "Terkecoh membalas provokasi siber dengan menyebarkan balik informasi yang belum terverifikasi.",
    ],
  },
  "pilar-negara": {
    patternId: "pilar-negara",
    targetSecondsPerQuestion: 50,
    headline: "Bedakan nilai Pancasila, kewenangan lembaga UUD 1945 & urusan otonomi NKRI",
    coreConcept:
      "Pilar Negara menguji pemahaman konseptual dan konstitusional atas 4 konsensus dasar: Pancasila (nilai dasar-instrumental-praksis), UUD 1945 hasil amandemen (check and balances lembaga negara), NKRI (6 urusan pemerintahan absolut vs konkuren), dan Bhinneka Tunggal Ika.",
    fastTricks: [
      "Hafalkan 6 urusan absolut pemerintah pusat (UU Pemda): Politik luar negeri, Pertahanan, Keamanan, Yustisi, Moneter & fiskal nasional, serta Agama.",
      "Bedakan kewenangan lembaga: MK menguji UU terhadap UUD 1945 & memutus sengketa pilkada/hasil pemilu; MA menguji peraturan di bawah UU terhadap UU.",
      "Untuk soal Sila Pancasila: Sila 2 fokus kemanusiaan/HAM & kesetaraan martabat tanpa batas negara; Sila 3 fokus persatuan bangsa & NKRI; Sila 5 fokus keadilan distributif, hak publik, serta keseimbangan hak–kewajiban sosial.",
      "Ketahui tonggak perumusan: 1 Juni 1945 (pidato Soekarno), 22 Juni 1945 (Piagam Jakarta oleh Panitia Sembilan), dan 18 Agustus 1945 (pengesahan UUD 1945 oleh PPKI).",
    ],
    commonTraps: [
      "Tertukar antara kewenangan MK (uji UU terhadap UUD 1945) dan MA (uji PP/Perpres/Perda terhadap UU).",
      "Tertukar penerapan Sila ke-2 (kemanusiaan/empati individu & HAM) dengan Sila ke-5 (keadilan sosial bagi masyarakat luas).",
    ],
  },
  "bahasa-indonesia": {
    patternId: "bahasa-indonesia",
    targetSecondsPerQuestion: 50,
    headline: "Cek S-P-O kalimat efektif, kaidah EYD V, kata baku KBBI & simpulan teks",
    coreConcept:
      "Subtes Bahasa Indonesia dalam TWK tidak sekadar menguji hafalan KBBI, tetapi kemampuan mengidentifikasi kalimat efektif dalam naskah dinas, penggunaan ejaan EYD Edisi V, struktur paragraf deduktif/induktif, serta kedudukan bahasa negara dalam UU No. 24 Tahun 2009.",
    fastTricks: [
      "Kalimat yang diawali preposisi ('Bagi...', 'Dalam...', 'Untuk...', 'Di...') sering kehilangan Subjek sehingga tidak efektif—hapus preposisinya atau perbaiki strukturnya.",
      "Waspadai pleonasme (kata mubazir): 'para hadirin sekalian', 'agar supaya', 'saling tolong-menolong', 'banyak para peserta'.",
      "Aturan EYD V gabungan kata: gabung jika mendapat awalan+akhiran sekaligus ('menyebarluaskan', 'pertanggungjawaban'); pisah jika hanya salah satu ('sebar luaskan', 'tanggung jawabnya'); selalu digabung untuk bentuk terikat ('pascapanen', 'nonformal', 'antarinstansi').",
      "Untuk ide pokok paragraf, cari kalimat utama (awal/akhir/campuran) yang bersifat paling umum dan menaungi seluruh kalimat penjelas.",
    ],
    commonTraps: [
      "Mengira kalimat panjang dengan banyak anak kalimat pasti lengkap, padahal tidak memiliki Predikat utama.",
      "Terkecoh kata populer sehari-hari yang tidak baku (mis. 'analisa', 'resiko', 'sekedar', 'apotik', 'ijazah/ijasah').",
    ],
  },

  // ===========================================================================
  // TIU — 9 POLA VERBAL, NUMERIK, ANALITIS & FIGURAL
  // ===========================================================================
  "sinonim-antonim-akronim": {
    patternId: "sinonim-antonim-akronim",
    targetSecondsPerQuestion: 25,
    headline: "Kunci kelas kata yang sama & kenali akar kata serapan atau gabungan akronim",
    coreConcept:
      "Pola verbal ini mengukur ketepatan kosakata baku KBBI (sinonim = padanan makna, antonim = lawan makna) serta pemahaman kepanjangan resmi akronim dan singkatan kelembagaan di Indonesia.",
    fastTricks: [
      "Pastikan jawaban memiliki kelas kata yang sama dengan soal: kata benda dijawab kata benda, kata sifat dijawab kata sifat, kata kerja dijawab kata kerja.",
      "Pada soal antonim, berhati-hatilah karena pilihan jebakan sering berisi SINONIM atau kata yang bunyinya mirip—baca ulang perintah soal apakah meminta lawan kata!",
      "Pecah kata serapan/ilmiah dari awalan/akarnya (misal: 'a-'/'nir-' = tidak, 'pro-' = mendukung, 'kontra-' = menolak, 'ekstra-' = di luar).",
      "Untuk akronim lembaga/istilah Indonesia, cocokkan setiap suku kata awal dengan huruf pembentuknya dan hindari kepanjangan yang salah struktur EYD.",
    ],
    commonTraps: [
      "Memilih sinonim saat soal menanyakan antonim karena membaca terburu-buru.",
      "Tertipu kemiripan bunyi kata serapan (misal 'evokasi' vs 'provokasi', 'resesi' vs 'regresi').",
    ],
  },
  "analogi-kata": {
    patternId: "analogi-kata",
    targetSecondsPerQuestion: 30,
    headline: "Buat kalimat penghubung spesifik antara pasangan kata & jaga arah urutannya",
    coreConcept:
      "Analogi kata menguji kesamaan pola hubungan logis (fungsi, sebab-akibat, bagian-utuh, profesi-alat/bidang, dan tingkatan intensitas) antara dua pasang kata.",
    fastTricks: [
      "Susun kalimat penghubung yang paling spesifik dan aktif: misal '[A] adalah alat untuk [B]' atau '[A] merupakan tingkat lebih tinggi dari [B]'.",
      "Periksa ARAH hubungan! Jika kiri→kanan adalah 'Alat : Pengguna', maka jawabannya harus 'Alat : Pengguna', jangan terbalik menjadi 'Pengguna : Alat'.",
      "Uji jenis kelas kata pasangan: apakah keduanya kata benda konkret, sifat bergradasi, atau proses-hasil.",
      "Jika lebih dari satu opsi mirip, pertajam kalimat penghubungnya (misal: bahan baku utama vs bahan pelengkap, atau profesi medis vs umum).",
    ],
    commonTraps: [
      "Hubungan tematik cocok, tetapi posisi kiri dan kanan pasangan kata terbalik.",
      "Membuat kalimat penghubung terlalu umum ('berhubungan dengan') sehingga 2–3 opsi terlihat benar semua.",
    ],
  },
  silogisme: {
    patternId: "silogisme",
    targetSecondsPerQuestion: 45,
    headline: "Gunakan rumus p ⇒ q, kontraposisi (~q ⇒ ~p), dan hati-hati kuantor 'sebagian'",
    coreConcept:
      "Silogisme menguji penalaran deduktif murni berdasarkan premis yang diberikan (bukan pengetahuan umum di luar soal), meliputi modus ponens, tollens, silogisme rantai, himpunan kategoris ('semua'/'sebagian'), dan ekuivalensi logika.",
    fastTricks: [
      "Hafal 3 kaidah inti implikasi (p ⇒ q): Modus Ponens (p terjadi ⇒ q), Modus Tollens (~q ⇒ ~p), dan Kontraposisi (p ⇒ q ≡ ~q ⇒ ~p ≡ ~p ∨ q).",
      "Ingkaran dari 'Jika p maka q' adalah 'p DAN tidak q' (p ∧ ~q), bukan implikasi lagi.",
      "Kaidah kuantor: 'Semua A adalah B' + 'Sebagian C adalah A' hanya menghasilkan kesimpulan berkuantor 'Sebagian C adalah B'. Jika kedua premis memakai 'Sebagian', umumnya tidak bisa ditarik simpulan universal.",
      "Ingkaran 'Semua X adalah Y' adalah 'Ada/Sebagian X bukan Y' (jangan terkecoh menggantinya menjadi 'Semua X bukan Y').",
    ],
    commonTraps: [
      "Menyimpulkan kebalikan implikasi: dari 'Jika hujan maka jalan basah' dan 'Jalan basah', menyimpulkan 'Hujan' (padahal bisa karena disiram).",
      "Membawa fakta dunia nyata di luar premis yang tertulis pada soal.",
    ],
  },
  "hitung-cepat": {
    patternId: "hitung-cepat",
    targetSecondsPerQuestion: 45,
    headline: "Ubah desimal berulang ke pecahan sakti, faktorkan kuadrat & cek ekor angka",
    coreConcept:
      "Hitung Cepat menguji ketangkasan berhitung tanpa kalkulator lewat sifat aljabar, konversi pecahan-persen populer, dan estimasi/ekor angka agar soal selesai dalam 20–45 detik.",
    fastTricks: [
      "Hafal pecahan sakti: 12,5% = 1/8; 37,5% = 3/8; 62,5% = 5/8; 87,5% = 7/8; 16,67% = 1/6; 33,33% = 1/3; 14,28% = 1/7.",
      "Gunakan selisih kuadrat a² - b² = (a + b)(a - b) dan sifat distributif ab + ac = a(b + c) alih-alih mengkuadratkan bilangan besar satu per satu.",
      "Cek digit terakhir (ekor angka) dan taksiran kasar orde ratusan/ribuan jika pilihan ganda memiliki angka satuan atau besaran berbeda.",
      "Sederhanakan operasi pecahan bertingkat dengan menyamakan penyebut atau membalik pembagian pecahan menjadi perkalian.",
    ],
    commonTraps: [
      "Menghitung manual perkalian/kuadrat 3 digit hingga menghabiskan 2 menit padahal bisa difaktorkan 10 detik.",
      "Salah urutan operasi hitung campuran (tanda kurung → pangkat/akar → kali/bagi → tambah/kurang) atau salah letak koma desimal.",
    ],
  },
  "perbandingan-kuantitatif": {
    patternId: "perbandingan-kuantitatif",
    targetSecondsPerQuestion: 55,
    headline: "Bedakan senilai vs berbalik nilai dan cek nilai negatif/nol pada X vs Y",
    coreConcept:
      "Pola ini menguji model rasio sehari-hari (pekerja-hari, kecepatan-waktu menyusul/berpapasan) serta analisis hubungan variabel X dan Y (X > Y, X < Y, X = Y, atau hubungan tidak dapat ditentukan).",
    fastTricks: [
      "Senilai (jumlah sama-sama naik): kali silang. Berbalik nilai (pekerja↑ waktu↓, kecepatan↑ waktu↓): kalikan sejajar (a₁ × t₁ = a₂ × t₂).",
      "Untuk proyek terhenti di tengah jalan: Tambahan Pekerja = (Pekerja Awal × Hari Berhenti) ÷ Sisa Hari Efektif.",
      "Kecepatan berpapasan: t = Jarak ÷ (v₁ + v₂). Menyusul (berangkat beda Δt): t_susul = (v₁ × Δt) ÷ (v₂ - v₁).",
      "Pada hubungan X vs Y: uji nilai positif, nol, pecahan (0 < x < 1), dan negatif (khususnya jika ada x² = bilangan atau pertidaksamaan tanpa batas jelas).",
    ],
    commonTraps: [
      "Langsung menyimpulkan x > y padahal x² = 16 punya dua akar (+4 dan -4), sehingga jika y = 2 maka hubungannya tidak dapat ditentukan.",
      "Memakai rumus perbandingan senilai pada kasus pekerja vs durasi pengerjaan proyek.",
    ],
  },
  "penalaran-analitis-melingkar": {
    patternId: "penalaran-analitis-melingkar",
    targetSecondsPerQuestion: 70,
    headline: "Gambar lingkaran, kunci jangkar berhadapan, ingat kanan = lawan jarum jam",
    coreConcept:
      "Penalaran Analitis Meja Bundar menuntut pemetaan posisi duduk melingkar dengan syarat berhadapan, kanan/kiri, berdampingan, hingga adanya kursi kosong.",
    fastTricks: [
      "Selalu gambar lingkaran dengan N titik (termasuk kursi kosong jika ada, anggap kursi kosong sebagai 1 entitas posisi!).",
      "Karena semua peserta menghadap ke PUSAT meja: 'sebelah kanan X' = berlawanan arah jarum jam dari X; 'sebelah kiri X' = searah jarum jam dari X.",
      "Mulai dari syarat yang paling mengunci (seperti 'A duduk tepat berhadapan dengan B' → berjarak N/2 kursi) lalu pasang blok pasangan berdampingan.",
      "Jika ada beberapa kemungkinan simetris/pencerminan, jangan paksa memilih satu konfigurasi—uji semua konfigurasi yang memenuhi syarat sebelum menilai opsi.",
    ],
    commonTraps: [
      "Terbalik menentukan arah kanan dan kiri peserta yang menghadap ke tengah meja.",
      "Mengabaikan kursi kosong saat menghitung jarak posisi berhadapan (pada meja 6 kursi dengan 1 kursi kosong, posisi berhadapan tetap berjarak 3 slot).",
    ],
  },
  "deret-angka": {
    patternId: "deret-angka",
    targetSecondsPerQuestion: 45,
    headline: "Cek tipe kenaikan: konstan/bertingkat (1 larik), naik-turun (2–3 larik) atau Fibonacci",
    coreConcept:
      "Deret Angka mengukur kepekaan mengenali pola selisih bertingkat, rasio kali-bagi, beberapa sub-deret berselang (2 atau 3 larik), deret Fibonacci, pangkat n²/n³, hingga pecahan/desimal.",
    fastTricks: [
      "Langkah 1 (5 detik): lihat arah angka. Naik/turun teratur → uji selisih tingkat 1 & tingkat 2 dulu. Naik drastis → cek perkalian/pangkat (n², n³, 2ⁿ).",
      "Jika angka terlihat melompat naik-turun tidak beraturan atau ada angka kembar, langsung pisah menjadi 2 larik (lompat 1 suku) atau 3 larik (lompat 2 suku).",
      "Untuk deret pecahan, pisahkan pembilang dan penyebut menjadi dua deret terpisah (waspadai pecahan yang disederhanakan; samakan dulu pola penyebutnya).",
      "Jika 2 suku awal langsung menghasilkan suku ke-3 saat dijumlahkan (misal 3, 5, 8, 13), uji pola penjumlahan ala Fibonacci atau variasi ± konstanta.",
    ],
    commonTraps: [
      "Memaksakan pola selisih 1 larik padahal soal merupakan deret 2 larik atau 3 larik.",
      "Salah menghitung mundur atau lupa menyederhanakan/mengembalikan bentuk pecahan sebelum memilih opsi.",
    ],
  },
  "analisis-tabel": {
    patternId: "analisis-tabel",
    targetSecondsPerQuestion: 55,
    headline: "Baca pertanyaan & satuan dulu, lalu pakai taksiran angka sebelum hitung penuh",
    coreConcept:
      "Analisis Tabel menguji ketelitian membaca data numerik multi-kolom (total, selisih, rata-rata, persentase pertumbuhan, dan seleksi peringkat bersyarat) di bawah tekanan waktu CAT.",
    fastTricks: [
      "Jangan baca seluruh angka di tabel dari atas ke bawah—baca PERTANYAAN dan SATUAN tabel (ribuan, jutaan, persen) terlebih dahulu.",
      "Untuk soal pertumbuhan tertinggi/terendah, hitung persentase perubahan menggunakan nilai AWAL sebagai penyebut: ((Akhir - Awal) ÷ Awal) × 100%.",
      "Untuk soal seleksi syarat & peringkat, coret baris yang gugur pada syarat paling ketat terlebih dahulu agar kandidat tinggal 1–2 baris.",
      "Gunakan pembulatan/estimasi saat membandingkan rasio antardivisi jika selisih antaropsi cukup jauh.",
    ],
    commonTraps: [
      "Tertukar memakai nilai akhir sebagai penyebut saat menghitung persentase kenaikan/penurunan.",
      "Lupa mengalikan bobot frekuensi/jumlah pegawai saat menghitung rata-rata gabungan antarkelompok.",
    ],
  },
  figural: {
    patternId: "figural",
    targetSecondsPerQuestion: 40,
    headline: "Lacak 1 elemen jangkar saja (jumlah sisi, titik pojok, atau sudut rotasi) untuk eliminasi",
    coreConcept:
      "Figural menguji penalaran visual-spasial tanpa kata: analogi transformasi gambar, ketidaksamaan (odd-one-out), deret serial berurutan, matriks 3×3 baris/kolom, dan rotasi-pencerminan.",
    fastTricks: [
      "Jangan amati seluruh isi kotak sekaligus. Pilih SATU elemen paling mencolok (misal titik pojok atau arah panah), ikuti perubahannya, lalu coret opsi yang salah.",
      "Bedakan rotasi (berputar utuh mempertahankan posisi relatif kanan-kiri objek) dengan pencerminan (membalik orientasi kiri↔kanan atau atas↔bawah).",
      "Pada Matriks 3×3, cek hukum kelengkapan tiap baris/kolom: setiap bentuk luar, pola isian/arsiran, dan simbol dalam muncul tepat 1 kali per baris.",
      "Pada Ketidaksamaan Gambar, hitung hubungan matematis sederhana (misal jumlah sisi poligon vs jumlah titik di dalam, atau posisi sudut terhadap arah rotasi).",
    ],
    commonTraps: [
      "Bingung membedakan hasil rotasi 180° dengan pencerminan horizontal/vertikal.",
      "Mengabaikan perubahan kecil seperti jumlah titik atau warna arsiran selang-seling pada soal serial.",
    ],
  },

  // ===========================================================================
  // TKP — 6 ASPEK KEPRIBADIAN & PELAYANAN ASN (SKOR 1–5)
  // ===========================================================================
  "pelayanan-publik": {
    patternId: "pelayanan-publik",
    targetSecondsPerQuestion: 35,
    headline: "Skor 5 = ramah + empati + solusi konkret di tempat + tetap dalam koridor SOP",
    coreConcept:
      "Aspek Pelayanan Publik menilai orientasi ASN dalam memberi kepuasan kepada masyarakat: cepat tanggap, adil tanpa diskriminasi/pungli, ramah pada warga yang emosi, dan proaktif memperbaiki mutu layanan.",
    fastTricks: [
      "Bedakan Skor 5 vs Pengecoh Skor 4: Skor 4 biasanya sopan & sesuai SOP tapi PASIF (menyuruh warga menunggu, melempar ke loket lain, atau sekadar minta maaf). Skor 5 sopan, taat SOP, DAN langsung menuntaskan kebutuhan warga saat itu juga.",
      "Pada warga marah/komplain: tenangkan dengan empati, dengarkan masalahnya, jelaskan prosedur dengan transparan, lalu berikan jalan keluar nyata.",
      "Tolak tegas segala imbalan/tip/uang pelicin bahkan setelah layanan tuntas—kembalikan secara santun sambil menjelaskan layanan gratis atau tarif resmi.",
      "Prioritaskan kelompok rentan (lansia, disabilitas, ibu hamil) secara manusiawi tanpa merusak keadilan antrean.",
    ],
    commonTraps: [
      "Memilih opsi yang terdengar 'baik hati' tetapi melanggar SOP/keamanan data atau memberi perlakuan istimewa karena kenalan.",
      "Memilih opsi Skor 4 yang sopan secara administratif tetapi menunda penyelesaian masalah warga.",
    ],
  },
  "jejaring-kerja": {
    patternId: "jejaring-kerja",
    targetSecondsPerQuestion: 35,
    headline: "Skor 5 = bangun sinergi proaktif, dialog terbuka & menangkan tujuan tim bersama",
    coreConcept:
      "Jejaring Kerja mengukur kemampuan ASN berkolaborasi lintas unit/instansi, membangun kepercayaan jangka panjang, membagi pengetahuan secara terbuka, dan memediasi konflik secara objektif.",
    fastTricks: [
      "Skor 5 tidak menunggu diperintah atau menyalahkan divisi lain—ia proaktif menjembatani komunikasi, menyamakan data/SOP, dan memfokuskan diskusi pada target bersama.",
      "Bandingkan Skor 4 vs 5 saat ada konflik tim: Skor 4 sering berhenti pada menyarankan pihak bertikai berbicara sendiri atau melapor atasan; Skor 5 hadir sebagai mediator netral yang berfokus pada solusi kerja.",
      "Pada transfer pengetahuan, bagikan catatan/panduan kerja secara terbuka (dokumentasi bersama) agar seluruh tim meningkat, bukan menimbun keahlian.",
      "Jaga batas etika kemitraan eksternal: tetap hangat dan responsif, tetapi tidak mengorbankan independensi jabatan atau membocorkan rahasia instansi.",
    ],
    commonTraps: [
      "Mengambil alih seluruh tugas rekan hingga mengorbankan kualitas kerja utama (hero syndrome), alih-alih melatih/koordinasi peran.",
      "Menjaga keharmonisan semu dengan diam saat rekan kerja bekerja di luar kesepakatan.",
    ],
  },
  "sosial-budaya": {
    patternId: "sosial-budaya",
    targetSecondsPerQuestion: 35,
    headline: "Skor 5 = hormati adat setempat, komunikasi setara & tolak diskriminasi",
    coreConcept:
      "Aspek Sosial Budaya menguji kepekaan ASN bertugas di lingkungan majemuk Indonesia: beradaptasi dengan kearifan lokal tanpa melanggar hukum/netralitas, menjunjung kesetaraan budaya/agama, dan menjaga komunikasi lintas bahasa.",
    fastTricks: [
      "Saat ditempatkan di daerah baru, pilih opsi yang aktif belajar bahasa/adat setempat dengan tulus agar layanan lebih diterima masyarakat.",
      "Jika tradisi lokal bersinggungan dengan aturan kedinasan atau keselamatan warga, gunakan pendekatan dialog hormat bersama tokoh masyarakat untuk mencari titik temu sesuai hukum.",
      "Skor 5 pada keberagaman tidak sekadar 'diam membiarkan', tetapi aktif mencegah ujaran merendahkan, memastikan akses setara tanpa melihat suku/agama/daerah asal.",
      "Gunakan bahasa Indonesia yang ramah dan mudah dipahami (atau jembatan penerjemah netral) bila menghadapi perbedaan dialek.",
    ],
    commonTraps: [
      "Mengikuti kebiasaan lokal yang jelas melanggar aturan kedinasan/kesehatan dengan alasan 'menghormati budaya setempat'.",
      "Bersikap kaku dan memaksakan gaya komunikasi pusat tanpa empati terhadap konteks warga daerah.",
    ],
  },
  tik: {
    patternId: "tik",
    targetSecondsPerQuestion: 35,
    headline: "Skor 5 = antusias adopsi sistem baru, jaga keamanan data & verifikasi informasi",
    coreConcept:
      "Aspek TIK menilai kesiapan ASN bertransformasi digital (SPBE), mengadopsi aplikasi kerja dan AI secara bijak, menjaga keamanan siber/privasi OTP/data warga, serta melawan misinformasi di ruang kerja digital.",
    fastTricks: [
      "Saat ada aplikasi/sistem baru (atau AI), Skor 5 langsung mempelajarinya dengan antusias, memakainya sesuai SOP verifikasi, dan membantu rekan yang belum paham.",
      "Terkait keamanan informasi (link mencurigakan/phishing, permintaan OTP, file tidak dikenal): JANGAN klik atau teruskan—verifikasi lewat kanal resmi dan laporkan ke tim IT/keamanan.",
      "Data pribadi pemohon/masyarakat hanya diakses sesuai wewenang tugas, tidak diunduh ke perangkat pribadi sembarangan atau diumbar di grup chat.",
      "Sebelum membagikan informasi atau kebijakan di grup kerja, pastikan kebenarannya melalui rujukan resmi (Kementerian/BKN/instansi terkait).",
    ],
    commonTraps: [
      "Memilih mengandalkan cara manual terus-menerus dengan alasan 'sistem digital sering error' atau 'khawatir salah'.",
      "Menggunakan AI generatif secara mentah tanpa memverifikasi keakuratan data/kebijakan atau mengunggah data rahasia negara ke layanan publik.",
    ],
  },
  profesionalisme: {
    patternId: "profesionalisme",
    targetSecondsPerQuestion: 35,
    headline: "Skor 5 = jaga tenggat lewat skala prioritas, akuntabel & tetap tenang di bawah tekanan",
    coreConcept:
      "Aspek Profesionalisme mengukur etos kerja ASN: manajemen waktu dan prioritas saat tugas menumpuk, keberanian menanggung kesalahan dengan solusi perbaikan, fokus di tengah gangguan, dan peningkatan kompetensi diri.",
    fastTricks: [
      "Saat dua tugas penting bertabrakan tenggatnya, Skor 5 memetakan urgensi-dampak, menyusun jadwal terstruktur, dan berkomunikasi sejak awal dengan pimpinan agar semua prioritas terkendali.",
      "Jika melakukan kesalahan kerja: jangan sembunyikan atau lempar ke rekan—akui secara jujur, segera perbaiki dampaknya, dan buat langkah pencegahan agar tidak terulang.",
      "Bedakan Skor 5 vs lembur tidak sehat: memilih strategi kerja cerdas, fokus, dan koordinasi terukur lebih bernilai daripada sekadar memaksakan diri tanpa rencana atau menelantarkan tugas lain.",
      "Jangan mencampuradukkan urusan pribadi/bisnis sampingan ke dalam jam kerja atau fasilitas kantor.",
    ],
    commonTraps: [
      "Mengutamakan urusan keluarga/acara sosial pribadi di tengah jam layanan publik tanpa izin & pengaturan pengganti yang sah.",
      "Mengeluh atau panik saat target/kebijakan berubah mendadak alih-alih menyesuaikan rencana kerja.",
    ],
  },
  "anti-radikalisme": {
    patternId: "anti-radikalisme",
    targetSecondsPerQuestion: 35,
    headline: "Skor 5 = tegas pegang Pancasila/NKRI, edukasi persuasif & lapor lewat jalur resmi",
    coreConcept:
      "Aspek Anti-Radikalisme menguji kewaspadaan dini ASN terhadap paham intoleransi, penolakan ideologi negara, ajakan eksklusif pemecah belah di lingkungan kantor maupun media sosial, dan penanganan prosedural tanpa main hakim sendiri.",
    fastTricks: [
      "Hadapi konten atau ajakan intoleran/anti-Pancasila dengan tiga pilar Skor 5: jaga sikap tegas berpihak pada NKRI/konstitusi, klarifikasi/edukasi secara sejuk tanpa terpancing emosi, dan laporkan lewat jalur resmi/pimpinan bila ada indikasi terorganisir.",
      "Jangan meneruskan, memberi reaksi setuju, atau diam membiarkan pesan provokatif berunsur kebencian di grup resmi instansi.",
      "Jika ada rekan kerja mulai menunjukkan perilaku mengucilkan kelompok lain atau menolak simbol negara, dekati dengan dialog persuasif-objektif sekaligus koordinasi dengan atasan/pembina kepegawaian jika berlanjut.",
      "Moderasi beragama berarti menghormati hak beribadah setiap warga dalam bingkai kebinekaan tanpa memaksakan keyakinan sepihak dalam pelayanan publik.",
    ],
    commonTraps: [
      "Langsung mengucilkan, melabrak di depan umum, atau membalas provokasi dengan caci maki/main hakim sendiri.",
      "Bersikap apatis ('itu hak pribadi dia, jangan ikut campur') terhadap penyebaran paham yang jelas menentang Pancasila dan keutuhan NKRI di instansi.",
    ],
  },
};

export function getPatternCheatSheet(patternId: PracticePatternId): PatternCheatSheet {
  return PATTERN_CHEAT_SHEETS[patternId];
}

