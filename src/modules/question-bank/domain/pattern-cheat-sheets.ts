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
      "Bedakan Nasionalisme (rasa bangga, persatuan, cinta bangsa & kepentingan kolektif lintas daerah) vs Bela Negara (kesiapsiagaan menjaga keutuhan & kedaulatan dari ancaman nyata).",
    ],
    commonTraps: [
      "Mengira nasionalisme berarti menolak total budaya atau teknologi asing (chauvinisme/isolasionis).",
      "Terkecoh opsi yang mengatasnamakan loyalitas atasan padahal bertentangan dengan hukum dan kepentingan publik.",
    ],
  },
  integritas: {
    patternId: "integritas",
    targetSecondsPerQuestion: 45,
    headline: "Kejujuran tanpa kompromi, tolak gratifikasi digital & patuhi prosedur pelaporan",
    coreConcept:
      "Pilar Integritas menilai keselarasan perkataan, tindakan, kode etik ASN BerAKHLAK (UU No. 20/2023), kepatuhan antikorupsi (UU Tipikor, pelaporan gratifikasi termasuk voucher/sponsorship digital ke UPG/KPK maksimal 30 hari kerja), LHKPN, konflik kepentingan, dan whistleblowing.",
    fastTricks: [
      "Gratifikasi yang berkaitan dengan jabatan (termasuk voucher e-wallet, tiket, atau sponsorship vendor) wajib ditolak; jika terpaksa diterima, laporkan ke UPG/KPK maksimal 30 hari kerja.",
      "Pada konflik kepentingan (keluarga/kolega ikut tender e-catalog atau layanan), wajib menyatakan mundur (recusal) secara tertulis dan menyerahkan ke pejabat lain yang netral.",
      "Untuk temuan pelanggaran internal, pilih pelaporan melalui saluran resmi (atasan berwenang, APIP/Inspektorat, atau WBS) disertai bukti, bukan menyebar di media sosial secara anonim.",
      "Bedakan uang suap (ada kesepakatan/transaksional sebelum atau sesudah tindakan) dengan gratifikasi (pemberian tanpa kesepakatan langsung, tetapi berhubungan dengan jabatan).",
    ],
    commonTraps: [
      "Menganggap bingkisan hari raya/voucher digital dari mitra kerja boleh diterima asalkan 'diberikan sesudah pekerjaan selesai' atau 'nilainya kecil'.",
      "Memilih diam dengan alasan 'menjaga nama baik instansi' saat melihat manipulasi SPJ atau pungli.",
    ],
  },
  "bela-negara": {
    patternId: "bela-negara",
    targetSecondsPerQuestion: 45,
    headline: "Kontribusi aktif sesuai profesi menghadapi ancaman militer, nirmiliter, siber & UU PDP",
    coreConcept:
      "Bela Negara merujuk pada Pasal 27 ayat (3) dan Pasal 30 UUD 1945 serta UU PSDN. Pada FR terbaru, ujian banyak mengangkat ancaman nirmiliter dan hibrida: keamanan siber/SPBE, pelindungan data pribadi (UU PDP No. 27/2022), ketahanan pangan-energi, disinformasi/deepfake, serta pengabdian di wilayah 3T.",
    fastTricks: [
      "Pasal 27 ayat (3) UUD 1945 mengatur hak dan kewajiban Bela Negara setiap warga negara; Pasal 30 ayat (1)–(2) menegaskan sistem Sishankamrata (TNI–Polri komponen utama, rakyat komponen pendukung).",
      "Pada kasus disinformasi/deepfake, kebocoran data warga (UU PDP), atau serangan siber di instansi, gabungkan pengamanan sistem, verifikasi otoritas resmi, dan edukasi publik.",
      "Bela negara bukan hanya wajib militer—ASN yang menjaga kualitas layanan di daerah 3T, guru di perbatasan, nakes tanggap bencana, dan penjaga ketahanan pangan adalah wujud bela negara lewat profesi.",
      "Pada soal multi-pernyataan (1)-(4), bedakan tindakan Bela Negara (aktif menangkal ancaman/menjaga kedaulatan & keselamatan bangsa) dari sekadar kegiatan sosial rutin biasa.",
    ],
    commonTraps: [
      "Menyempitkan makna bela negara hanya sebagai angkat senjata atau latihan kemiliteran.",
      "Terkecoh membalas provokasi siber dengan menyebarkan balik informasi yang belum terverifikasi.",
    ],
  },
  "pilar-negara": {
    patternId: "pilar-negara",
    targetSecondsPerQuestion: 50,
    headline: "Bedakan nilai Pancasila, check & balances UUD 1945 & urusan otonomi NKRI",
    coreConcept:
      "Pilar Negara menguji penalaran konseptual dan konstitusional atas 4 konsensus dasar: Pancasila (nilai dasar-instrumental-praksis), UUD 1945 hasil amandemen (check and balances lembaga negara), NKRI (6 urusan pemerintahan absolut vs konkuren), dan Bhinneka Tunggal Ika.",
    fastTricks: [
      "Hafalkan 6 urusan absolut pemerintah pusat (UU Pemda): Politik luar negeri, Pertahanan, Keamanan, Yustisi, Moneter & fiskal nasional, serta Agama.",
      "Bedakan kewenangan lembaga: MK menguji UU terhadap UUD 1945 & memutus sengketa hasil pemilu; MA menguji peraturan di bawah UU terhadap UU; BPK memeriksa pengelolaan keuangan negara secara independen.",
      "Untuk soal Sila Pancasila: Sila 2 fokus martabat manusia/HAM & empati individu lintas batas; Sila 3 fokus persatuan bangsa & NKRI; Sila 4 fokus musyawarah mufakat & demokratis; Sila 5 fokus keadilan distributif, pemerataan akses publik, dan keseimbangan hak–kewajiban sosial.",
      "Ketahui tonggak perumusan: 1 Juni 1945 (pidato Soekarno), 22 Juni 1945 (Piagam Jakarta oleh Panitia Sembilan), dan 18 Agustus 1945 (pengesahan UUD 1945 oleh PPKI).",
    ],
    commonTraps: [
      "Tertukar antara kewenangan MK (uji UU terhadap UUD 1945) dan MA (uji PP/Perpres/Perda terhadap UU).",
      "Tertukar penerapan Sila ke-2 (kemanusiaan/empati individu & HAM) dengan Sila ke-5 (keadilan sosial & pemerataan kebijakan bagi masyarakat luas).",
    ],
  },
  "bahasa-indonesia": {
    patternId: "bahasa-indonesia",
    targetSecondsPerQuestion: 50,
    headline: "Cek S-P-O inti kalimat panjang, kalimat sumbang, kaidah EYD V & simpulan wacana",
    coreConcept:
      "Subtes Bahasa Indonesia dalam TWK modern menekankan penalaran wacana: menemukan kalimat tidak padu (sumbang), membedah inti kalimat majemuk panjang, menarik simpulan tersirat tanpa over-generalization, hubungan antarparagraf, serta EYD V dan tata naskah dinas.",
    fastTricks: [
      "Kalimat yang diawali preposisi ('Bagi...', 'Dalam...', 'Untuk...', 'Di...') sering kehilangan Subjek sehingga tidak efektif—untuk mencari INTI KALIMAT panjang, buang seluruh keterangan & perluasan ('yang...') lalu sisakan S + P (+ O).",
      "Untuk mencari KALIMAT SUMBANG/TIDAK PADU, tentukan dulu 1 topik utama kalimat pokok, lalu cari 1 kalimat yang melenceng ke topik lain atau memutus alur koherensi.",
      "Aturan EYD V gabungan kata: gabung jika mendapat awalan+akhiran sekaligus ('menyebarluaskan', 'pertanggungjawaban'); pisah jika hanya salah satu ('sebar luaskan', 'tanggung jawabnya'); selalu digabung untuk bentuk terikat ('pascapanen', 'nonformal', 'antarinstansi').",
      "Untuk simpulan tersirat paragraf, pilih pernyataan yang merangkum seluruh gagasan teks tanpa menambahkan klaim mutlak ('selalu', 'pasti', 'semua') di luar teks.",
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
    headline: "Kunci rumus deduktif (p ⇒ q, kontraposisi) & batas generalisasi induktif berbasis bukti",
    coreConcept:
      "Pola Verbal Penalaran Logis ini menguji silogisme deduktif (modus ponens, tollens, silogisme rantai, himpunan kategoris, ekuivalensi) sekaligus penalaran induktif (menarik simpulan paling logis dari sekumpulan data/fakta tanpa melebih-lebihkan cakupan bukti).",
    fastTricks: [
      "Hafal 3 kaidah inti implikasi (p ⇒ q): Modus Ponens (p terjadi ⇒ q), Modus Tollens (~q ⇒ ~p), dan Kontraposisi (p ⇒ q ≡ ~q ⇒ ~p ≡ ~p ∨ q).",
      "Kaidah kuantor: 'Semua A adalah B' + 'Sebagian C adalah A' hanya menghasilkan simpulan 'Sebagian C adalah B'. Dua premis berkuantor 'Sebagian' tidak menghasilkan simpulan universal.",
      "Pada Penalaran Induktif: pilih simpulan yang merangkum pola seluruh contoh/data secara proporsional ('cenderung', 'sebagian besar', 'berkorelasi') dan jangan melompat ke klaim mutlak ('pasti', 'semua', 'satu-satunya penyebab').",
      "Ingkaran 'Semua X adalah Y' adalah 'Ada/Sebagian X bukan Y', sedangkan ingkaran 'Jika p maka q' adalah 'p dan tidak q'.",
    ],
    commonTraps: [
      "Menyimpulkan kebalikan implikasi atau over-generalization pada soal induktif (menganggap korelasi dua data otomatis berarti sebab-akibat tunggal).",
      "Membawa opini pribadi atau fakta di luar premis/data yang tertulis pada soal.",
    ],
  },
  "hitung-cepat": {
    patternId: "hitung-cepat",
    targetSecondsPerQuestion: 45,
    headline: "Coret silang pecahan, pakai bentuk perkalian/pembagian setara & pecahan sakti",
    coreConcept:
      "Hitung Cepat menguji ketangkasan numerik tanpa kalkulator lewat operasi pecahan, manipulasi perkalian dan pembagian setara (komutatif/asosiatif/distributif), konversi persentase istimewa, aljabar kuadrat, dan estimasi ekor angka.",
    fastTricks: [
      "Hafal pecahan sakti & pembagian setara: ÷0,25 = ×4; ÷0,125 = ×8; 12,5% = 1/8; 37,5% = 3/8; 62,5% = 5/8; 16,67% = 1/6; 33,33% = 1/3.",
      "Gunakan sifat setara a ÷ b ÷ c = a ÷ (b × c) dan (a × b) ÷ c = (a ÷ c) × b untuk mencoret faktor pembagi sebelum mengalikan angka besar.",
      "Gunakan selisih kuadrat a² - b² = (a + b)(a - b) dan sifat distributif ab + ac = a(b + c) alih-alih menghitung manual satu per satu.",
      "Cek digit terakhir (ekor angka) dan taksiran kasar orde ratusan/ribuan jika pilihan ganda memiliki angka satuan atau besaran berbeda.",
    ],
    commonTraps: [
      "Mengalikan pembilang besar terlebih dahulu padahal bisa langsung dicoret silang dengan penyebut dalam 5 detik.",
      "Salah mengubah operasi pembagian beruntun (a ÷ b ÷ c keliru dianggap a ÷ (b ÷ c)).",
    ],
  },
  "perbandingan-kuantitatif": {
    patternId: "perbandingan-kuantitatif",
    targetSecondsPerQuestion: 55,
    headline: "Kuasai uji terpisah Kecukupan Data (1)/(2), rasio senilai-berbalik & optimasi biaya per unit",
    coreConcept:
      "Pola ini mencakup perbandingan senilai & berbalik nilai, proyek/kecepatan, hubungan X vs Y, Kecukupan Data (Data Sufficiency dengan Pernyataan 1 & 2), serta Soal Cerita Optimasi Biaya (minimasi anggaran/tarif dan efisiensi paket).",
    fastTricks: [
      "Senilai: kali silang. Berbalik nilai (pekerja↑ waktu↓, kecepatan↑ waktu↓): kalikan sejajar (a₁ × t₁ = a₂ × t₂).",
      "Pada Kecukupan Data: uji (1) SAJA dulu, lalu LUPAKAN (1) saat menguji (2) SAJA. Baru gabungkan (1)+(2) jika keduanya gagal secara mandiri. Waspadai persamaan kuadrat (2 akar) atau persamaan dependen!",
      "Pada Soal Cerita Optimasi Biaya: bandingkan biaya efektif per satuan/kursi/kg terlebih dahulu, lalu uji kombinasi bilangan bulat di sekitar titik optimal agar tidak ada kelebihan kapasitas yang mubazir.",
      "Pada hubungan X vs Y: uji nilai positif, nol, pecahan (0 < x < 1), dan negatif sebelum memutuskan hubungan pasti.",
    ],
    commonTraps: [
      "Terbawa informasi Pernyataan (1) saat menguji Pernyataan (2) pada soal Kecukupan Data sehingga keliru menjawab C padahal B atau D sudah cukup.",
      "Pada optimasi biaya, hanya memilih tarif satuan termurah tanpa mengecek sisa muatan/syarat paket minimal yang justru membuat total biaya lebih mahal.",
    ],
  },
  "penalaran-analitis-melingkar": {
    patternId: "penalaran-analitis-melingkar",
    targetSecondsPerQuestion: 70,
    headline: "Gambar sketsa cepat: slot urutan/jadwal, deret kursi, matriks tabel, atau meja bundar",
    coreConcept:
      "Penalaran Analitis menguji pemetaan aturan logika multi-syarat pada 4 format utama FR BKN: Urutan & Jadwal (ranking/hari), Tempat Duduk Berderet (1–2 baris), Tabel Kombinasi Logika (orang × atribut), dan Meja Melingkar.",
    fastTricks: [
      "Urutan & Jadwal: tulis slot 1..N atau Senin–Jumat, pasang syarat posisi mutlak dulu, baru rangkai blok yang saling menempel atau berselisih tetap.",
      "Duduk Berderet & Melingkar: pada baris lurus perhatikan ujung kiri/kanan; pada meja bundar menghadap pusat, kanan = lawan jarum jam, kiri = searah jarum jam, berhadapan = jarak N/2 kursi.",
      "Tabel Logika: buat kisi silang (✓ untuk pasti, × untuk larangan) agar eliminasi silang langsung mengunci pasangan atribut yang tersisa.",
      "Jika lebih dari satu susunan valid memenuhi semua syarat, uji pernyataan pada opsi terhadap SELURUH susunan yang mungkin.",
    ],
    commonTraps: [
      "Memaksakan satu susunan tebakan padahal syarat soal masih membuka 2 kemungkinan posisi.",
      "Terbalik membaca arah kanan-kiri pada meja bundar atau mengabaikan kursi kosong sebagai 1 slot posisi.",
    ],
  },
  "deret-angka": {
    patternId: "deret-angka",
    targetSecondsPerQuestion: 45,
    headline: "Deteksi pola larik, rumus Un/modulo untuk Suku ke-N, dan operasi baris/kolom pada Matriks",
    coreConcept:
      "Deret Angka mengukur pengenalan pola 1–3 larik, deret bertingkat, Fibonacci/pangkat, pecahan, pencarian Suku ke-N (Un / siklus periodik modulo), serta Deret Angka Matriks/Tabel (pola horizontal baris atau vertikal kolom).",
    fastTricks: [
      "Cek arah perubahan: naik-turun tidak teratur → pisah 2 atau 3 larik; naik halus → selisih tingkat 1 & 2; naik tajam → kali/pangkat (n², n³, 2ⁿ).",
      "Untuk Suku ke-N jauh (misal U₂₀ atau U₅₀): pakai rumus aritmetika a + (n-1)b, pola kuadrat an² + bn + c, atau bagi N dengan panjang siklus (sisa bagi modulo) untuk pola berulang.",
      "Untuk Deret Matriks/Tabel: uji hubungan operasi baris (misal Kolom 1 × Kolom 2 ± k = Kolom 3) pada 2 baris penuh pertama; jika tidak cocok, uji pola ke bawah per kolom.",
      "Untuk deret pecahan, analisis pembilang dan penyebut sebagai dua deret terpisah dan waspadai pecahan yang sudah disederhanakan.",
    ],
    commonTraps: [
      "Mendaftar suku satu per satu untuk mencari U₅₀ sehingga membuang waktu dan rawan salah hitung.",
      "Mengira pola matriks harus selalu dibaca kiri→kanan padahal polanya bergerak vertikal dari baris atas ke baris bawah.",
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
    headline: "Skor 5 = empati + solusi konkret di tempat + perbaikan sistemik & tetap taat SOP",
    coreConcept:
      "Aspek Pelayanan Publik menilai orientasi ASN dalam memberi kepuasan kepada masyarakat: cepat tanggap, adil tanpa diskriminasi/pungli, tenang menghadapi krisis atau keluhan viral media sosial, dan proaktif memperbaiki mutu layanan.",
    fastTricks: [
      "Bedakan Skor 5 vs Pengecoh Skor 4: Skor 4 biasanya sopan & taat SOP tetapi berhenti di lingkup sempit/pasif; Skor 5 menuntaskan kebutuhan warga saat itu juga SEKALIGUS membangun perbaikan atau koordinasi agar kendala serupa tidak berulang.",
      "Pada keluhan viral di media sosial: jangan defensif atau menghapus komentar—verifikasi fakta layanan, hubungi warga dengan empati, selesaikan kasusnya sesuai SOP, dan sampaikan klarifikasi transparan lewat kanal resmi.",
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
    headline: "Skor 5 = adaptif sistem/AI terverifikasi, lindungi data pribadi (UU PDP) & edukasi tim",
    coreConcept:
      "Aspek TIK menilai kesiapan ASN bertransformasi digital (SPBE), memanfaatkan otomasi & AI generatif secara etis tanpa membocorkan data rahasia (UU PDP), menangkal phishing/deepfake, serta membina literasi digital rekan kerja.",
    fastTricks: [
      "Saat memanfaatkan AI generatif untuk draf kerja: JANGAN pernah mengunggah NIK, data pribadi warga, atau dokumen rahasia negara ke layanan publik—anonimkan dulu atau gunakan sistem internal terverifikasi, lalu cek ulang akurasi hasilnya.",
      "Terkait keamanan informasi (phishing, voice-cloning deepfake mengatasnamakan pimpinan, permintaan OTP): JANGAN klik atau ikuti instruksi—verifikasi lewat kanal resmi terpisah dan laporkan ke tim TI.",
      "Saat ada sistem digital baru, Skor 5 langsung mempelajarinya dengan antusias, menguji integrasi kerjanya, dan berbagi panduan praktis agar rekan senior ikut terbantu.",
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

