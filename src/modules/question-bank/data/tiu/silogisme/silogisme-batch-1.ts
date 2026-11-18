import type { QuestionDraft } from "@/modules/question-bank/domain/question";

export const silogismeBatch1Drafts: readonly QuestionDraft[] = [
  // =========================================================================
  // MODUS PONENS (001 - 030)
  // =========================================================================
  {
    id: "tiu-sil-001",
    subPattern: "modus-ponens",
    difficulty: "mudah",
    prompt:
      "Jika sistem SPBE diperbarui, maka proses perizinan menjadi lebih cepat.\nSistem SPBE diperbarui hari ini.\nSimpulan yang tepat adalah ...",
    options: [
      "Proses perizinan belum tentu berubah",
      "Proses perizinan menjadi lebih cepat",
      "Semua layanan publik harus manual",
      "Sistem SPBE tidak pernah diperbarui",
      "Tidak dapat ditarik simpulan",
    ],
    answer: "B",
    explanation:
      "Gunakan Modus Ponens (p -> q, p => q). Karena sebab (sistem SPBE diperbarui) terpenuhi, maka akibatnya (proses perizinan menjadi lebih cepat) pasti terjadi.",
    tip: "Kenali premis syarat (p) dan akibat (q); jika premis kedua membenarkan p, tarik langsung q.",
  },
  {
    id: "tiu-sil-002",
    subPattern: "modus-ponens",
    difficulty: "mudah",
    prompt:
      "Apabila tingkat literasi digital meningkat, maka masyarakat lebih waspada terhadap penipuan daring.\nSaat ini tingkat literasi digital meningkat.\nSimpulan yang paling tepat adalah ...",
    options: [
      "Masyarakat lebih waspada terhadap penipuan daring",
      "Penipuan daring meningkat tajam",
      "Literasi digital belum diajarkan",
      "Masyarakat mengabaikan keamanan data",
      "Tidak dapat ditarik simpulan",
    ],
    answer: "A",
    explanation:
      "Dengan pola p -> q dan diketahui p terjadi, kesimpulan sah menurut Modus Ponens adalah q: masyarakat lebih waspada terhadap penipuan daring.",
    tip: "Cek apakah premis kedua menegaskan bagian sebelum kata 'maka'.",
  },
  {
    id: "tiu-sil-003",
    subPattern: "modus-ponens",
    difficulty: "mudah",
    prompt:
      "Jika proyek infrastruktur ramah lingkungan disetujui, maka emisi karbon sektor transportasi dapat ditekan.\nProyek infrastruktur ramah lingkungan telah disetujui pemerintah.\nSimpulan yang tepat adalah ...",
    options: [
      "Emisi karbon sektor transportasi meningkat",
      "Proyek infrastruktur dibatalkan",
      "Emisi karbon sektor transportasi dapat ditekan",
      "Transportasi umum tidak membutuhkan izin",
      "Hanya kendaraan pribadi yang terdampak",
    ],
    answer: "C",
    explanation:
      "Premis 1 berbentuk p -> q dan Premis 2 menyatakan p benar. Menurut Modus Ponens, akibat q pasti berlaku.",
    tip: "Fokus pada pernyataan tepat di belakang kata 'maka'.",
  },
  {
    id: "tiu-sil-004",
    subPattern: "modus-ponens",
    difficulty: "mudah",
    prompt:
      "Setiap kali audit internal selesai tepat waktu, laporan kinerja instansi dirilis pada awal bulan.\nBulan ini audit internal selesai tepat waktu.\nSimpulan yang sah adalah ...",
    options: [
      "Laporan kinerja instansi dirilis pada akhir tahun",
      "Audit internal bulan depan dibatalkan",
      "Tidak ada laporan kinerja yang disusun",
      "Laporan kinerja instansi dirilis pada awal bulan",
      "Audit eksternal menggantikan audit internal",
    ],
    answer: "D",
    explanation:
      "Kalimat 'Setiap kali p, q' bermakna implikasi p -> q. Karena p terjadi bulan ini, maka q terjadi.",
    tip: "Ubah frasa 'Setiap kali X, Y' menjadi bentuk bersyarat 'Jika X, maka Y'.",
  },
  {
    id: "tiu-sil-005",
    subPattern: "modus-ponens",
    difficulty: "mudah",
    prompt:
      "Jika cadangan devisa menguat, maka stabilitas nilai tukar lebih terjaga.\nLaporan bank sentral menunjukkan cadangan devisa menguat.\nSimpulan yang tepat adalah ...",
    options: [
      "Cadangan devisa melemah pada kuartal berikutnya",
      "Nilai tukar pasti mengalami inflasi tinggi",
      "Bank sentral menghentikan transaksi valuta asing",
      "Tidak dapat ditarik simpulan",
      "Stabilitas nilai tukar lebih terjaga",
    ],
    answer: "E",
    explanation:
      "Premis 2 menegaskan anteseden (cadangan devisa menguat), sehingga konsekuen pada Premis 1 (stabilitas nilai tukar lebih terjaga) berlaku.",
    tip: "Periksa apakah fakta pada kalimat kedua memenuhi syarat pada kalimat pertama.",
  },
  {
    id: "tiu-sil-006",
    subPattern: "modus-ponens",
    difficulty: "mudah",
    prompt:
      "Jika ASN lulus uji kompetensi manajerial, maka ia berhak mengikuti seleksi jabatan administrator.\nDina adalah ASN yang lulus uji kompetensi manajerial.\nSimpulan yang tepat adalah ...",
    options: [
      "Dina tidak berminat mengikuti seleksi",
      "Dina berhak mengikuti seleksi jabatan administrator",
      "Dina langsung dilantik menjadi kepala dinas",
      "Semua ASN sudah menjadi administrator",
      "Dina belum mengikuti uji kompetensi",
    ],
    answer: "B",
    explanation:
      "Syarat 'lulus uji kompetensi manajerial' dipenuhi oleh Dina, maka konsekuensi 'berhak mengikuti seleksi jabatan administrator' berlaku bagi Dina.",
    tip: "Terapkan aturan p -> q pada subjek spesifik yang disebut di premis kedua.",
  },
  {
    id: "tiu-sil-007",
    subPattern: "modus-ponens",
    difficulty: "sedang",
    prompt:
      "Jika dokumen usulan lengkap dan terverifikasi sistem, maka berkas langsung diteruskan ke tim penilai.\nBerkas milik instansi daerah A telah lengkap dan terverifikasi sistem.\nSimpulan yang sah adalah ...",
    options: [
      "Berkas instansi daerah A langsung diteruskan ke tim penilai",
      "Tim penilai menolak seluruh dokumen daerah A",
      "Berkas instansi daerah A masih menunggu verifikasi manual",
      "Hanya separuh berkas daerah A yang diproses",
      "Instansi daerah A tidak mengajukan usulan",
    ],
    answer: "A",
    explanation:
      "Syarat majemuk berbentuk (p dan r) -> q. Karena kedua syarat (lengkap dan terverifikasi sistem) terpenuhi oleh daerah A, akibat q terjadi.",
    tip: "Untuk syarat gabungan 'A dan B', pastikan keduanya terpenuhi sebelum menyimpulkan akibatnya.",
  },
  {
    id: "tiu-sil-008",
    subPattern: "modus-ponens",
    difficulty: "sedang",
    prompt:
      "Apabila curah hujan di hulu sangat tinggi, maka debit air sungai meningkat dan petugas membuka pintu air darurat.\nPagi ini curah hujan di hulu sangat tinggi.\nSimpulan yang paling tepat adalah ...",
    options: [
      "Debit air sungai menurun drastis",
      "Petugas menutup seluruh saluran irigasi",
      "Debit air sungai meningkat dan petugas membuka pintu air darurat",
      "Curah hujan hanya terjadi di kawasan hilir",
      "Tidak ada tindakan yang dilakukan petugas",
    ],
    answer: "C",
    explanation:
      "Dengan p = 'curah hujan di hulu sangat tinggi' terjadi, kedua komponen akibat konjungtif (q dan r) sama-sama terjadi.",
    tip: "Jika akibat berupa 'A dan B', terpenuhinya sebab membuat A maupun B ikut berlaku.",
  },
  {
    id: "tiu-sil-009",
    subPattern: "modus-ponens",
    difficulty: "sedang",
    prompt:
      "Jika pusat data nasional menerapkan enkripsi berlapis, maka kerahasiaan data kependudukan terlindungi.\nTahun ini pusat data nasional menerapkan enkripsi berlapis.\nSimpulan yang tepat adalah ...",
    options: [
      "Pusat data nasional menghapus data kependudukan",
      "Enkripsi berlapis tidak diperlukan instansi lain",
      "Kerahasiaan data kependudukan tidak lagi diaudit",
      "Kerahasiaan data kependudukan terlindungi",
      "Seluruh akses layanan publik ditutup",
    ],
    answer: "D",
    explanation:
      "Premis pertama berbentuk implikasi p -> q, dan premis kedua membenarkan p. Maka simpulan yang sah adalah q.",
    tip: "Jangan tambahkan asumsi di luar kalimat akibat pada premis pertama.",
  },
  {
    id: "tiu-sil-010",
    subPattern: "modus-ponens",
    difficulty: "sedang",
    prompt:
      "Setiap peserta pelatihan yang hadir penuh dan menyelesaikan proyek akhir memperoleh sertifikat kelulusan.\nRaka hadir penuh dan menyelesaikan proyek akhir.\nSimpulan yang tepat adalah ...",
    options: [
      "Raka belum layak menerima sertifikat",
      "Semua peserta pelatihan memperoleh penghargaan terbaik",
      "Raka hanya menyelesaikan setengah proyek akhir",
      "Proyek akhir Raka tidak dinilai",
      "Raka memperoleh sertifikat kelulusan",
    ],
    answer: "E",
    explanation:
      "Pernyataan 'Setiap peserta yang X memperoleh Y' ekuivalen dengan implikasi 'Jika X, maka Y'. Raka memenuhi kedua syarat dalam X, sehingga Raka memperoleh Y.",
    tip: "Konjungsi syarat pada kalimat 'Setiap X yang A dan B' mengharuskan keduanya dipenuhi.",
  },
  {
    id: "tiu-sil-011",
    subPattern: "modus-ponens",
    difficulty: "sedang",
    prompt:
      "Jika tarif angkutan massal disubsidi, maka minat warga beralih ke transportasi publik bertambah.\nPemerintah kota resmi menyubsidi tarif angkutan massal.\nSimpulan yang tepat adalah ...",
    options: [
      "Kemacetan langsung hilang dalam sehari",
      "Minat warga beralih ke transportasi publik bertambah",
      "Angkutan massal berhenti beroperasi",
      "Tarif angkutan massal menjadi jauh lebih mahal",
      "Warga hanya menggunakan kendaraan pribadi",
    ],
    answer: "B",
    explanation:
      "Dengan Modus Ponens (p -> q dan p benar), simpulan sahnya persis mengikuti konsekuen q tanpa melebih-lebihkan.",
    tip: "Pilih opsi yang paling persis dengan pernyataan akibat tanpa melebih-lebihkan cakupan.",
  },
  {
    id: "tiu-sil-012",
    subPattern: "modus-ponens",
    difficulty: "sedang",
    prompt:
      "Jika sebuah produk UMKM memiliki sertifikat halal atau izin edar BPOM, maka produk tersebut dapat masuk ke etalase ekspor.\nKopi kemasan buatan Koperasi Sejahtera telah memiliki izin edar BPOM.\nSimpulan yang sah adalah ...",
    options: [
      "Kopi kemasan Koperasi Sejahtera dapat masuk ke etalase ekspor",
      "Kopi kemasan Koperasi Sejahtera wajib memiliki dua merek berbeda",
      "Kopi kemasan tersebut ditolak oleh etalase ekspor",
      "Semua produk UMKM belum memiliki izin edar",
      "Tidak dapat ditarik simpulan pasti",
    ],
    answer: "A",
    explanation:
      "Syarat berbentuk disjungsi (p atau r) -> q. Dalam logika 'atau', cukup salah satu syarat terpenuhi (izin edar BPOM) untuk memicu akibat q.",
    tip: "Pada syarat 'A atau B', terpenuhinya satu syarat saja sudah cukup memicu akibat.",
  },
  {
    id: "tiu-sil-013",
    subPattern: "modus-ponens",
    difficulty: "sulit",
    prompt:
      "Jika anggaran riset ditingkatkan, maka perguruan tinggi memperluas laboratorium atau menambah beasiswa peneliti.\nTahun ini anggaran riset ditingkatkan, tetapi perguruan tinggi tidak memperluas laboratorium.\nSimpulan yang paling tepat adalah ...",
    options: [
      "Anggaran riset tidak jadi dicairkan",
      "Perguruan tinggi menutup seluruh laboratorium lama",
      "Perguruan tinggi menambah beasiswa peneliti",
      "Peneliti menolak beasiswa dari pemerintah",
      "Tidak dapat ditarik simpulan",
    ],
    answer: "C",
    explanation:
      "Dari p -> (q atau r) dan p benar, diperoleh (q atau r). Karena ~q terjadi (tidak memperluas laboratorium), melalui Silogisme Disjungtif disimpulkan r: menambah beasiswa peneliti.",
    tip: "Gabungkan Modus Ponens dengan eliminasi salah satu cabang 'atau' pada akibatnya.",
  },
  {
    id: "tiu-sil-014",
    subPattern: "modus-ponens",
    difficulty: "sedang",
    prompt:
      "Apabila pasokan energi terbarukan di kawasan industri stabil, maka biaya produksi pabrik menurun.\nHasil pemantauan menunjukkan pasokan energi terbarukan di kawasan industri stabil.\nSimpulan yang tepat adalah ...",
    options: [
      "Pabrik menghentikan penggunaan listrik terbarukan",
      "Harga bahan baku impor naik dua kali lipat",
      "Kawasan industri berpindah ke lokasi lain",
      "Biaya produksi pabrik menurun",
      "Tidak ada perubahan pada biaya produksi",
    ],
    answer: "D",
    explanation:
      "Premis 2 menyatakan syarat (pasokan energi terbarukan stabil) terjadi, sehingga konsekuensinya (biaya produksi pabrik menurun) pasti berlaku.",
    tip: "Cocokkan kata kunci pada premis kedua dengan bagian sebab di premis pertama.",
  },
  {
    id: "tiu-sil-015",
    subPattern: "modus-ponens",
    difficulty: "mudah",
    prompt:
      "Jika aplikasi pelaporan pajak mengalami pemeliharaan server, maka pengguna dialihkan ke portal cadangan.\nMalam ini aplikasi pelaporan pajak mengalami pemeliharaan server.\nSimpulan yang sah adalah ...",
    options: [
      "Pengguna dibebaskan dari kewajiban pajak",
      "Server pemeliharaan berlangsung selamanya",
      "Portal cadangan tidak dapat digunakan siapa pun",
      "Wajib pajak tidak perlu melapor tahun ini",
      "Pengguna dialihkan ke portal cadangan",
    ],
    answer: "E",
    explanation:
      "Berdasarkan Modus Ponens (p -> q, p), karena pemeliharaan server terjadi, pengguna dialihkan ke portal cadangan.",
    tip: "Temukan kondisi yang sudah terjadi pada premis kedua lalu ambil konsekuensinya.",
  },
  {
    id: "tiu-sil-016",
    subPattern: "modus-ponens",
    difficulty: "sulit",
    prompt:
      "Jika nilai tukar petani naik, maka daya beli perdesaan membaik.\nJika nilai tukar petani naik, maka produksi pangan lebih terjaga.\nTriwulan ini nilai tukar petani naik.\nSimpulan yang tepat adalah ...",
    options: [
      "Daya beli perdesaan membaik namun produksi pangan turun",
      "Daya beli perdesaan membaik dan produksi pangan lebih terjaga",
      "Hanya produksi pangan yang terjaga tanpa kenaikan daya beli",
      "Nilai tukar petani segera turun kembali",
      "Tidak ada dampak terhadap ekonomi perdesaan",
    ],
    answer: "B",
    explanation:
      "Dua implikasi memiliki sebab yang sama: p -> q dan p -> r. Karena p benar, maka kedua akibatnya (q dan r) sekaligus benar.",
    tip: "Jika satu sebab memicu dua pernyataan bersyarat yang berbeda, keduanya berlaku saat sebab terjadi.",
  },
  {
    id: "tiu-sil-017",
    subPattern: "modus-ponens",
    difficulty: "sedang",
    prompt:
      "Hanya jika seluruh berkas ditandatangani secara elektronik, pengajuan anggaran diproses lebih cepat. Diketahui pula jika seluruh berkas ditandatangani secara elektronik, maka arsip digital tersimpan otomatis.\nSeluruh berkas telah ditandatangani secara elektronik.\nSimpulan yang sah adalah ...",
    options: [
      "Arsip digital tersimpan otomatis",
      "Pengajuan anggaran pasti ditolak",
      "Arsip digital tidak tersimpan di sistem",
      "Tidak diperlukan lagi arsip pengajuan",
      "Berkas harus dicetak ulang seluruhnya",
    ],
    answer: "A",
    explanation:
      "Perhatikan implikasi kedua: p -> q (jika ditandatangani secara elektronik, arsip digital tersimpan otomatis). Karena p terpenuhi, q pasti benar. Sedangkan 'Hanya jika p, r' berarti r -> p, sehingga p saja belum menjamin r.",
    tip: "Bedakan 'Jika p maka q' dengan 'Hanya jika p maka r' (yang berarti r -> p, bukan p -> r).",
  },
  {
    id: "tiu-sil-018",
    subPattern: "modus-ponens",
    difficulty: "mudah",
    prompt:
      "Jika jalur logistik antarpulau lancar, maka harga bahan pokok lebih merata.\nSejak pelabuhan baru beroperasi, jalur logistik antarpulau lancar.\nSimpulan yang tepat adalah ...",
    options: [
      "Pelabuhan baru tidak melayani kapal barang",
      "Harga bahan pokok melambung di semua daerah",
      "Harga bahan pokok lebih merata",
      "Distribusi pangan hanya mengandalkan jalur darat",
      "Tidak dapat ditarik simpulan",
    ],
    answer: "C",
    explanation:
      "Premis kedua menegaskan bahwa jalur logistik antarpulau lancar (p), sehingga akibatnya (harga bahan pokok lebih merata) berlaku.",
    tip: "Abaikan informasi tambahan seperti 'sejak pelabuhan baru beroperasi' jika inti syaratnya tetap terpenuhi.",
  },
  {
    id: "tiu-sil-019",
    subPattern: "modus-ponens",
    difficulty: "sulit",
    prompt:
      "Setiap aparatur pengawas yang memiliki sertifikat auditor dan bebas konflik kepentingan dapat memimpin tim pemeriksaan.\nBayu adalah aparatur pengawas yang memiliki sertifikat auditor serta bebas konflik kepentingan.\nSimpulan yang paling tepat adalah ...",
    options: [
      "Semua aparatur pengawas sudah menjadi ketua tim",
      "Bayu pasti menemukan pelanggaran berat",
      "Sertifikat auditor tidak lagi berlaku",
      "Bayu dapat memimpin tim pemeriksaan",
      "Bayu dilarang ikut tim pemeriksaan",
    ],
    answer: "D",
    explanation:
      "Syarat konjungtif pada aturan tersebut ada tiga: aparatur pengawas, memiliki sertifikat auditor, dan bebas konflik kepentingan. Ketiganya dipenuhi Bayu.",
    tip: "Pastikan seluruh syarat yang dihubungkan kata 'yang' dan 'serta/dan' dipenuhi subjek.",
  },
  {
    id: "tiu-sil-020",
    subPattern: "modus-ponens",
    difficulty: "sedang",
    prompt:
      "Jika kawasan hutan lindung dipantau dengan citra satelit, maka pembalakan liar lebih cepat terdeteksi.\nSaat ini seluruh kawasan hutan lindung di provinsi X dipantau dengan citra satelit.\nSimpulan yang tepat adalah ...",
    options: [
      "Pembalakan liar di provinsi X tidak perlu ditindak",
      "Citra satelit hanya digunakan di perkotaan",
      "Hutan lindung di provinsi X berubah menjadi lahan industri",
      "Tidak dapat ditarik simpulan",
      "Pembalakan liar di provinsi X lebih cepat terdeteksi",
    ],
    answer: "E",
    explanation:
      "Sebab p berlaku untuk kawasan hutan lindung provinsi X, sehingga akibat q juga berlaku untuk kawasan tersebut.",
    tip: "Sesuaikan subjek kesimpulan dengan cakupan wilayah yang disebut pada premis kedua.",
  },
  {
    id: "tiu-sil-021",
    subPattern: "modus-ponens",
    difficulty: "mudah",
    prompt:
      "Jika sensor kualitas udara menunjukkan status tidak sehat, maka sekolah menghentikan kegiatan olahraga di luar ruangan.\nPagi ini sensor kualitas udara menunjukkan status tidak sehat.\nSimpulan yang tepat adalah ...",
    options: [
      "Sekolah meliburkan seluruh pembelajaran daring",
      "Sekolah menghentikan kegiatan olahraga di luar ruangan",
      "Sensor kualitas udara mengalami kerusakan",
      "Kegiatan olahraga dipindahkan ke lapangan terbuka",
      "Tidak ada perubahan jadwal sekolah",
    ],
    answer: "B",
    explanation:
      "Dengan Modus Ponens, terpenuhinya status sensor tidak sehat langsung memicu tindakan sekolah menghentikan olahraga luar ruangan.",
    tip: "Cek hubungan langsung p -> q antara kondisi sensor dan keputusan sekolah.",
  },
  {
    id: "tiu-sil-022",
    subPattern: "modus-ponens",
    difficulty: "sedang",
    prompt:
      "Jika pelaku usaha mikro mengakses pembiayaan bunga rendah, maka modal kerja mereka bertambah dan kapasitas produksi meningkat.\nBulan ini Koperasi Maju mengakses pembiayaan bunga rendah.\nSimpulan yang sah adalah ...",
    options: [
      "Modal kerja Koperasi Maju bertambah dan kapasitas produksinya meningkat",
      "Koperasi Maju tidak memproduksi barang apa pun",
      "Pembiayaan bunga rendah dihentikan bulan depan",
      "Kapasitas produksi Koperasi Maju justru menyusut",
      "Modal kerja bertambah tetapi produksi dilarang naik",
    ],
    answer: "A",
    explanation:
      "Koperasi Maju merupakan pelaku usaha yang memenuhi premis sebab, sehingga kedua akibat (modal kerja bertambah dan kapasitas produksi meningkat) berlaku baginya.",
    tip: "Perhatikan kata penghubung 'dan' pada bagian akibat agar tidak memilih opsi yang hanya benar sebagian.",
  },
  {
    id: "tiu-sil-023",
    subPattern: "modus-ponens",
    difficulty: "sulit",
    prompt:
      "Jika laporan keuangan daerah meraih opini WTP selama tiga tahun berturut-turut, maka pemerintah pusat menyalurkan dana insentif fiskal.\nKabupaten Lestari meraih opini WTP pada tahun 2024, 2025, dan 2026 tanpa putus.\nSimpulan yang tepat adalah ...",
    options: [
      "Opini WTP Kabupaten Lestari dicabut",
      "Dana insentif fiskal dialihkan ke negara lain",
      "Pemerintah pusat menyalurkan dana insentif fiskal kepada Kabupaten Lestari",
      "Kabupaten Lestari menolak penyaluran insentif fiskal",
      "Tidak dapat ditarik simpulan",
    ],
    answer: "C",
    explanation:
      "Meraih WTP pada 2024, 2025, dan 2026 tanpa putus berarti memenuhi syarat 'meraih opini WTP selama tiga tahun berturut-turut', sehingga konsekuensi q berlaku.",
    tip: "Terjemahkan data konkret pada premis kedua untuk memeriksa apakah syarat durasi terpenuhi.",
  },
  {
    id: "tiu-sil-024",
    subPattern: "modus-ponens",
    difficulty: "sedang",
    prompt:
      "Apabila tingkat hunian kereta cepat melampaui target kuartal, maka pengelola menambah jadwal keberangkatan akhir pekan.\nData operasional mencatat tingkat hunian kereta cepat kuartal ini melampaui target.\nSimpulan yang tepat adalah ...",
    options: [
      "Pengelola mengurangi jumlah gerbong kereta",
      "Harga tiket diturunkan menjadi gratis",
      "Jadwal keberangkatan akhir pekan dihapuskan",
      "Pengelola menambah jadwal keberangkatan akhir pekan",
      "Kereta cepat hanya beroperasi pada hari kerja",
    ],
    answer: "D",
    explanation:
      "Premis 2 membenarkan anteseden (tingkat hunian melampaui target kuartal), sehingga konsekuen pada Premis 1 pasti dijalankan.",
    tip: "Ikuti alur sebab-akibat langsung dalam premis tanpa menyisipkan opini tambahan.",
  },
  {
    id: "tiu-sil-025",
    subPattern: "modus-ponens",
    difficulty: "sulit",
    prompt:
      "Jika peserta seleksi CPNS lolos ambang batas TWK, TIU, dan TKP sekaligus, maka ia masuk tahap pemeringkatan SKD.\nRendra memenuhi ambang batas TWK, TIU, serta TKP.\nSimpulan yang sah adalah ...",
    options: [
      "Rendra langsung diangkat menjadi ASN tanpa SKB",
      "Nilai TKP Rendra paling tinggi secara nasional",
      "Ambang batas SKD dihapus untuk tahun ini",
      "Rendra gagal memasuki tahap pemeringkatan SKD",
      "Rendra masuk tahap pemeringkatan SKD",
    ],
    answer: "E",
    explanation:
      "Ketiga syarat ambang batas terpenuhi oleh Rendra, sehingga akibat langsung sesuai aturan adalah masuk tahap pemeringkatan SKD (bukan langsung lulus tanpa SKB).",
    tip: "Waspadai pengecoh yang melompati tahapan di luar premis (misalnya langsung lulus akhir).",
  },
  {
    id: "tiu-sil-026",
    subPattern: "modus-ponens",
    difficulty: "mudah",
    prompt:
      "Jika perangkat lunak instansi belum diperbarui, maka tim keamanan siber membatasi akses jaringan eksternal.\nPagi ini perangkat lunak instansi X belum diperbarui.\nSimpulan yang tepat adalah ...",
    options: [
      "Perangkat lunak instansi X baru saja diperbarui",
      "Tim keamanan siber membatasi akses jaringan eksternal instansi X",
      "Jaringan eksternal dibuka untuk seluruh pihak luar",
      "Tim keamanan siber dibubarkan sementara",
      "Tidak ada pembatasan jaringan sama sekali",
    ],
    answer: "B",
    explanation:
      "Premis pertama berbentuk ~p -> q, dan premis kedua menyatakan ~p terjadi pada instansi X. Sesuai Modus Ponens, akibat q berlaku.",
    tip: "Perhatikan meski syarat berbentuk kalimat negatif ('belum diperbarui'), jika premis kedua cocok persis, akibatnya tetap berlaku.",
  },
  {
    id: "tiu-sil-027",
    subPattern: "modus-ponens",
    difficulty: "sedang",
    prompt:
      "Jika suhu ruang server melebihi 28 derajat Celsius, maka sistem pendingin cadangan menyala atau alarm teknisi berbunyi.\nSaat ini suhu ruang server mencapai 31 derajat Celsius, dan sistem pendingin cadangan tidak menyala.\nSimpulan yang paling tepat adalah ...",
    options: [
      "Alarm teknisi berbunyi",
      "Suhu ruang server turun ke 20 derajat Celsius",
      "Sistem pendingin utama bekerja sempurna",
      "Tidak ada alarm yang berbunyi",
      "Ruang server dipastikan bebas gangguan",
    ],
    answer: "A",
    explanation:
      "Karena suhu 31 > 28 derajat Celsius (p benar), maka (pendingin cadangan menyala atau alarm teknisi berbunyi). Pendingin cadangan tidak menyala, sehingga alarm teknisi pasti berbunyi.",
    tip: "Uji dulu apakah angka 31 memenuhi syarat '> 28', lalu eliminasi opsi yang dinegasikan.",
  },
  {
    id: "tiu-sil-028",
    subPattern: "modus-ponens",
    difficulty: "sulit",
    prompt:
      "Setiap desa yang memiliki badan usaha aktif dan jaringan internet memadai berhak mengikuti program desa digital nasional.\nDesa Sukamaju telah memiliki jaringan internet memadai dan mengoperasikan badan usaha desa secara aktif.\nSimpulan yang tepat adalah ...",
    options: [
      "Desa Sukamaju belum memenuhi syarat jaringan internet",
      "Program desa digital hanya berlaku di kota besar",
      "Desa Sukamaju berhak mengikuti program desa digital nasional",
      "Badan usaha Desa Sukamaju dibekukan",
      "Desa Sukamaju wajib menunggu tiga tahun lagi",
    ],
    answer: "C",
    explanation:
      "Urutan syarat dibolak-balik tidak mengubah kebenaran konjungsi: jaringan internet memadai DAN badan usaha aktif terpenuhi di Desa Sukamaju.",
    tip: "Urutan penyebutan dua syarat yang dihubungkan kata 'dan' tetap sah meski dibalik.",
  },
  {
    id: "tiu-sil-029",
    subPattern: "modus-ponens",
    difficulty: "sedang",
    prompt:
      "Jika suatu daerah menetapkan status tanggap darurat bencana, maka posko logistik dibuka selama 24 jam.\nPemerintah Kabupaten Bintang resmi menetapkan status tanggap darurat bencana banjir.\nSimpulan yang tepat adalah ...",
    options: [
      "Posko logistik hanya dibuka pada pagi hari",
      "Status tanggap darurat belum ditetapkan",
      "Bantuan logistik dihentikan untuk sementara",
      "Posko logistik Kabupaten Bintang dibuka selama 24 jam",
      "Tidak dapat ditarik simpulan",
    ],
    answer: "D",
    explanation:
      "Penetapan status tanggap darurat bencana banjir merupakan kasus khusus dari penetapan status tanggap darurat bencana, sehingga posko logistik dibuka 24 jam.",
    tip: "Hubungkan konsep umum pada premis pertama dengan peristiwa spesifik pada premis kedua.",
  },
  {
    id: "tiu-sil-030",
    subPattern: "modus-ponens",
    difficulty: "mudah",
    prompt:
      "Jika mekanisme pengadaan barang dilakukan lewat katalog elektronik, maka jejak transaksi tercatat secara transparan.\nPembelian perlengkapan kantor tahun ini dilakukan lewat katalog elektronik.\nSimpulan yang tepat adalah ...",
    options: [
      "Pengadaan dilakukan secara tertutup tanpa dokumen",
      "Katalog elektronik tidak mencatat transaksi apa pun",
      "Perlengkapan kantor tidak jadi dibeli",
      "Jejak transaksi tidak dapat ditelusuri",
      "Jejak transaksi pembelian perlengkapan kantor tercatat secara transparan",
    ],
    answer: "E",
    explanation:
      "Karena syarat p (pengadaan lewat katalog elektronik) dipenuhi, konsekuen q (jejak transaksi tercatat transparan) pasti terjadi.",
    tip: "Terapkan akibat dari aturan katalog elektronik langsung pada pembelian tahun ini.",
  },

  // =========================================================================
  // MODUS TOLLENS (031 - 050)
  // =========================================================================
  {
    id: "tiu-sil-031",
    subPattern: "modus-tollens",
    difficulty: "mudah",
    prompt:
      "Jika sistem keamanan jaringan diperkuat, maka kebocoran data dapat dicegah.\nTernyata kebocoran data tetap terjadi (tidak dapat dicegah).\nSimpulan yang tepat adalah ...",
    options: [
      "Sistem keamanan jaringan sudah diperkuat",
      "Sistem keamanan jaringan tidak diperkuat",
      "Data organisasi dipastikan aman sepenuhnya",
      "Penguatan jaringan tidak berkaitan dengan data",
      "Kebocoran data disebabkan oleh listrik padam",
    ],
    answer: "B",
    explanation:
      "Dengan Modus Tollens (p -> q dan ~q), karena akibat (~q: kebocoran data tidak dapat dicegah) gagal terwujud, maka sebabnya (p) tidak terjadi: sistem keamanan jaringan tidak diperkuat.",
    tip: "Jika akibat pada premis pertama diingkari di premis kedua, ingkari pula bagian sebabnya.",
  },
  {
    id: "tiu-sil-032",
    subPattern: "modus-tollens",
    difficulty: "mudah",
    prompt:
      "Apabila warga membayar retribusi kebersihan secara rutin, maka armada pengangkut sampah beroperasi setiap hari.\nMinggu ini armada pengangkut sampah tidak beroperasi setiap hari.\nSimpulan yang sah adalah ...",
    options: [
      "Warga tidak membayar retribusi kebersihan secara rutin",
      "Armada pengangkut sampah menambah jadwal operasional",
      "Semua warga sudah membayar retribusi kebersihan",
      "Retribusi kebersihan digratiskan pemerintah daerah",
      "Tidak dapat ditarik simpulan",
    ],
    answer: "A",
    explanation:
      "Premis 2 mengingkari akibat q ('tidak beroperasi setiap hari'), sehingga menurut Modus Tollens kesimpulannya adalah ~p.",
    tip: "Pastikan kamu membalik arah panah dengan menyangkal keduanya (~q -> ~p).",
  },
  {
    id: "tiu-sil-033",
    subPattern: "modus-tollens",
    difficulty: "mudah",
    prompt:
      "Jika jadwal rapat koordinasi disepakati seluruh unit, maka undangan resmi dikirim pada hari Senin.\nHingga Selasa pagi, undangan resmi tidak dikirim.\nSimpulan yang paling tepat adalah ...",
    options: [
      "Rapat koordinasi dibatalkan karena hujan",
      "Undangan resmi sudah diterima sejak Minggu",
      "Jadwal rapat koordinasi belum disepakati seluruh unit",
      "Seluruh unit sudah menyepakati jadwal rapat",
      "Hari Senin bukan hari kerja instansi",
    ],
    answer: "C",
    explanation:
      "Akibat 'undangan resmi dikirim pada hari Senin' tidak terjadi (~q). Sesuai Modus Tollens, maka sebabnya (~p) berlaku: jadwal belum/tidak disepakati seluruh unit.",
    tip: "Amati bahwa kalimat kedua menyatakan konsekuensi premis pertama tidak terjadi.",
  },
  {
    id: "tiu-sil-034",
    subPattern: "modus-tollens",
    difficulty: "mudah",
    prompt:
      "Jika kualitas layanan puskesmas memenuhi standar akreditasi, maka indeks kepuasan pasien meningkat.\nTahun ini indeks kepuasan pasien tidak meningkat.\nSimpulan yang tepat adalah ...",
    options: [
      "Puskesmas mendapat predikat akreditasi tertinggi",
      "Jumlah pasien puskesmas bertambah pesat",
      "Indeks kepuasan pasien tidak lagi diukur",
      "Kualitas layanan puskesmas tidak memenuhi standar akreditasi",
      "Standar akreditasi baru saja dilonggarkan",
    ],
    answer: "D",
    explanation:
      "Pola p -> q dengan premis kedua ~q menghasilkan simpulan pasti ~p berdasarkan Modus Tollens.",
    tip: "Gunakan pola pengingkaran akibat (~q) menghasilkan pengingkaran sebab (~p).",
  },
  {
    id: "tiu-sil-035",
    subPattern: "modus-tollens",
    difficulty: "sedang",
    prompt:
      "Jika usulan formasi disetujui kementerian, maka pengumuman rekrutmen diterbitkan di portal resmi dan masa pendaftaran dibuka.\nSaat ini masa pendaftaran belum dibuka.\nSimpulan yang paling tepat adalah ...",
    options: [
      "Portal resmi sedang mengalami pembaruan tampilan",
      "Pengumuman rekrutmen pasti sudah ditutup",
      "Usulan formasi disetujui sejak bulan lalu",
      "Kementerian menambah kuota formasi",
      "Usulan formasi belum disetujui kementerian",
    ],
    answer: "E",
    explanation:
      "Bentuk premis: p -> (q dan r). Karena r tidak terpenuhi (masa pendaftaran belum dibuka), maka konjungsi (q dan r) bernilai salah. Menurut Modus Tollens, ~p pasti berlaku.",
    tip: "Jika akibat berupa 'A dan B', gagalnya salah satu saja sudah cukup untuk mengingkari sebabnya.",
  },
  {
    id: "tiu-sil-036",
    subPattern: "modus-tollens",
    difficulty: "sedang",
    prompt:
      "Jika bahan bakar nabati didistribusikan tepat waktu, maka armada bus listrik dan angkutan pengumpan beroperasi normal.\nHari ini angkutan pengumpan tidak beroperasi normal.\nSimpulan yang sah adalah ...",
    options: [
      "Armada bus listrik juga pasti mogok",
      "Bahan bakar nabati tidak didistribusikan tepat waktu",
      "Seluruh penumpang memilih berjalan kaki",
      "Bahan bakar nabati didistribusikan lebih awal",
      "Tidak dapat ditarik simpulan",
    ],
    answer: "B",
    explanation:
      "Akibat berbentuk konjungsi (bus listrik normal DAN angkutan pengumpan normal). Karena angkutan pengumpan tidak normal, akibat konjungtif gagal sehingga sebabnya tidak terjadi.",
    tip: "Untuk akibat 'X dan Y', ketidaknormalan pada Y saja sudah cukup meniadakan syarat di depan.",
  },
  {
    id: "tiu-sil-037",
    subPattern: "modus-tollens",
    difficulty: "sedang",
    prompt:
      "Apabila suatu komoditas tidak mengalami gangguan panen, maka pasokan di pasar induk mencukupi.\nTernyata pasokan bawang merah di pasar induk tidak mencukupi.\nSimpulan yang tepat adalah ...",
    options: [
      "Bawang merah mengalami gangguan panen",
      "Bawang merah tidak mengalami gangguan panen",
      "Harga bawang merah turun di tingkat petani",
      "Pasar induk kelebihan stok bawang merah",
      "Semua komoditas mengalami gagal panen",
    ],
    answer: "A",
    explanation:
      "Premis 1 berbentuk ~p -> q (tidak mengalami gangguan panen -> pasokan mencukupi). Premis 2 menyatakan ~q (pasokan tidak mencukupi). Menurut Modus Tollens, negasi dari ~p adalah p: mengalami gangguan panen.",
    tip: "Hati-hati dengan negasi ganda: ingkaran dari 'tidak terganggu' adalah 'terganggu'.",
  },
  {
    id: "tiu-sil-038",
    subPattern: "modus-tollens",
    difficulty: "sedang",
    prompt:
      "Jika sistem peringatan dini tsunami berfungsi baik, maka sirine pantai berbunyi saat gempa berpotensi tsunami terjadi.\nKetika gempa berpotensi tsunami terjadi, sirine pantai tidak berbunyi.\nSimpulan yang tepat adalah ...",
    options: [
      "Gempa tersebut tidak berpotensi tsunami",
      "Sirine pantai baru saja diuji coba",
      "Sistem peringatan dini tsunami tidak berfungsi baik",
      "Sistem peringatan dini berjalan optimal",
      "Tidak ada kerusakan pada jaringan sirine",
    ],
    answer: "C",
    explanation:
      "Akibatnya gagal terwujud (sirine tidak berbunyi saat gempa berpotensi tsunami terjadi), sehingga sebabnya (sistem berfungsi baik) pasti tidak terpenuhi.",
    tip: "Pastikan kondisi pendamping pada akibat memang terjadi sehingga ketiadaan sirine mengingkari sebab.",
  },
  {
    id: "tiu-sil-039",
    subPattern: "modus-tollens",
    difficulty: "sulit",
    prompt:
      "Jika arsitek menyelesaikan gambar kerja atau tim lapangan merampungkan pemetaan lahan, maka izin bangunan diterbitkan.\nBulan ini izin bangunan belum diterbitkan.\nSimpulan yang tepat adalah ...",
    options: [
      "Arsitek sudah menyelesaikan gambar kerja",
      "Tim lapangan telah merampungkan pemetaan lahan",
      "Izin bangunan tidak memerlukan gambar kerja",
      "Arsitek belum menyelesaikan gambar kerja dan tim lapangan belum merampungkan pemetaan lahan",
      "Hanya tim lapangan yang terlambat bekerja",
    ],
    answer: "D",
    explanation:
      "Bentuk premis: (p atau r) -> q. Karena ~q berlaku, maka ~(p atau r). Menurut hukum De Morgan, ~(p atau r) ekuivalen dengan (~p dan ~r).",
    tip: "Ingat hukum De Morgan: pengingkaran terhadap 'A atau B' berarti keduanya tidak terjadi ('bukan A dan bukan B').",
  },
  {
    id: "tiu-sil-040",
    subPattern: "modus-tollens",
    difficulty: "sedang",
    prompt:
      "Jika pegawai mengikuti diklat kepemimpinan tanpa izin atasan, maka kepesertaannya dibatalkan.\nKepesertaan Tari dalam diklat kepemimpinan tidak dibatalkan.\nSimpulan yang sah adalah ...",
    options: [
      "Tari membatalkan keikutsertaannya sendiri",
      "Atasan Tari tidak mengetahui jadwal diklat",
      "Diklat kepemimpinan tahun ini ditiadakan",
      "Tari mengikuti diklat tanpa izin atasan",
      "Tari mengikuti diklat dengan izin atasan",
    ],
    answer: "E",
    explanation:
      "Akibat (~q: tidak dibatalkan) menolak konsekuensi pada Premis 1, sehingga sebab 'mengikuti tanpa izin atasan' tidak terjadi pada Tari—artinya ia mendapat izin atasan.",
    tip: "Ingkari frasa 'tanpa izin' menjadi 'dengan izin' saat melakukan Modus Tollens.",
  },
  {
    id: "tiu-sil-041",
    subPattern: "modus-tollens",
    difficulty: "sulit",
    prompt:
      "Jika jaringan fiber optik terpasang dan perangkat pemancar aktif, maka sekolah terhubung ke platform pembelajaran daring.\nSekolah Harapan belum terhubung ke platform pembelajaran daring, padahal jaringan fiber optik sudah terpasang.\nSimpulan yang paling tepat adalah ...",
    options: [
      "Jaringan fiber optik di Sekolah Harapan tidak ada",
      "Perangkat pemancar di Sekolah Harapan belum aktif",
      "Sekolah Harapan sudah terhubung ke platform daring",
      "Platform pembelajaran daring ditutup pemerintah",
      "Tidak dapat ditarik simpulan mengenai perangkat pemancar",
    ],
    answer: "B",
    explanation:
      "Dari (p dan r) -> q dan ~q, diperoleh ~(p dan r), artinya setidaknya salah satu dari p atau r tidak terpenuhi. Karena diketahui p benar (fiber optik terpasang), maka r pasti salah: perangkat pemancar belum aktif.",
    tip: "Jika ~(A dan B) benar padahal A terbukti benar, maka pasti B yang bernilai salah.",
  },
  {
    id: "tiu-sil-042",
    subPattern: "modus-tollens",
    difficulty: "mudah",
    prompt:
      "Jika dokumen kependudukan selesai dicetak di mesin anjungan mandiri, maka pemohon menerima notifikasi SMS.\nPemohon bernama Galih tidak menerima notifikasi SMS.\nSimpulan yang tepat adalah ...",
    options: [
      "Dokumen kependudukan Galih belum selesai dicetak di mesin anjungan mandiri",
      "Galih mengganti nomor ponselnya hari ini",
      "Mesin anjungan mandiri sudah mencetak dokumen Galih",
      "Semua pemohon wajib mengambil dokumen ke kementerian",
      "Notifikasi SMS tidak pernah digunakan",
    ],
    answer: "A",
    explanation:
      "Karena akibatnya (menerima notifikasi SMS) tidak terjadi pada Galih, sebabnya (dokumen selesai dicetak) juga belum terjadi.",
    tip: "Gunakan pola standar p -> q, ~q => ~p tanpa menambah asumsi luar.",
  },
  {
    id: "tiu-sil-043",
    subPattern: "modus-tollens",
    difficulty: "sulit",
    prompt:
      "Jika tingkat kebocoran air pipa utama di bawah 10 persen, maka pasokan air bersih ke pelanggan normal atau tekanan air stabil.\nSaat ini pasokan air bersih ke pelanggan tidak normal dan tekanan air tidak stabil.\nSimpulan yang sah adalah ...",
    options: [
      "Tingkat kebocoran air pipa utama pasti nol persen",
      "Pelanggan tidak membutuhkan tekanan air stabil",
      "Tingkat kebocoran air pipa utama tidak di bawah 10 persen",
      "Tekanan air akan langsung pulih tanpa perbaikan",
      "Tidak dapat ditarik simpulan",
    ],
    answer: "C",
    explanation:
      "Premis 1: p -> (q atau r). Premis 2 menyatakan ~q dan ~r, yang menurut De Morgan berarti ~(q atau r). Maka Modus Tollens menyimpulkan ~p.",
    tip: "Agar 'A atau B' diingkari, baik A maupun B harus sama-sama tidak terjadi.",
  },
  {
    id: "tiu-sil-044",
    subPattern: "modus-tollens",
    difficulty: "sedang",
    prompt:
      "Setiap aparatur yang melanggar kode etik berat pasti dijatuhi sanksi disiplin.\nPak Darmawan tidak dijatuhi sanksi disiplin.\nSimpulan yang paling tepat adalah ...",
    options: [
      "Pak Darmawan melanggar kode etik berat",
      "Kode etik aparatur tidak berlaku bagi Pak Darmawan",
      "Sanksi disiplin hanya berlaku bagi pejabat pusat",
      "Pak Darmawan tidak melanggar kode etik berat",
      "Semua aparatur mendapat sanksi disiplin",
    ],
    answer: "D",
    explanation:
      "Pernyataan 'Setiap X yang P pasti Q' setara dengan 'Jika P maka Q'. Karena Q tidak terjadi pada Pak Darmawan, maka P tidak terjadi.",
    tip: "Konversikan kalimat 'Setiap A yang B pasti C' menjadi 'Jika B, maka C'.",
  },
  {
    id: "tiu-sil-045",
    subPattern: "modus-tollens",
    difficulty: "mudah",
    prompt:
      "Jika kapal patroli beroperasi di wilayah perbatasan, maka penangkapan ikan ilegal berkurang.\nTahun ini penangkapan ikan ilegal tidak berkurang.\nSimpulan yang tepat adalah ...",
    options: [
      "Kapal patroli menambah armada di perbatasan",
      "Penangkapan ikan ilegal hanya terjadi di danau",
      "Hasil tangkapan nelayan lokal merosot drastis",
      "Wilayah perbatasan bebas dari penangkapan ilegal",
      "Kapal patroli tidak beroperasi di wilayah perbatasan",
    ],
    answer: "E",
    explanation:
      "Premis 2 menyatakan akibat tidak terwujud (~q), sehingga melalui Modus Tollens disimpulkan sebab (kapal patroli beroperasi di perbatasan) tidak terpenuhi (~p).",
    tip: "Tolak penyebab jika konsekuensi logisnya tidak terjadi.",
  },
  {
    id: "tiu-sil-046",
    subPattern: "modus-tollens",
    difficulty: "sulit",
    prompt:
      "Jika tarif pajak karbon diterapkan dan insentif kendaraan listrik berjalan, maka perusahaan beralih ke armada rendah emisi.\nPerusahaan Logistik Nusantara belum beralih ke armada rendah emisi, sementara insentif kendaraan listrik sudah berjalan.\nSimpulan yang tepat adalah ...",
    options: [
      "Insentif kendaraan listrik dihentikan seluruhnya",
      "Tarif pajak karbon belum diterapkan",
      "Perusahaan Logistik Nusantara sudah memakai armada rendah emisi",
      "Tarif pajak karbon dan insentif sama-sama belum berjalan",
      "Tidak dapat ditarik simpulan",
    ],
    answer: "B",
    explanation:
      "Bentuk: (p dan r) -> q. Karena ~q (belum beralih), maka ~(p dan r). Mengingat r (insentif berjalan) sudah benar, pasti p (tarif pajak karbon diterapkan) yang belum terjadi.",
    tip: "Saat dua syarat dihubungkan 'dan' lalu akibat gagal, cari syarat mana yang tersisa jika satu syarat lain terbukti sudah berjalan.",
  },
  {
    id: "tiu-sil-047",
    subPattern: "modus-tollens",
    difficulty: "sedang",
    prompt:
      "Jika peserta uji kompetensi lulus tahap wawancara, maka namanya tercantum pada daftar kelulusan atau ia menerima surat penempatan.\nNama Sinta tidak tercantum pada daftar kelulusan dan ia belum menerima surat penempatan.\nSimpulan yang paling tepat adalah ...",
    options: [
      "Sinta tidak lulus tahap wawancara",
      "Sinta lulus tahap wawancara dengan nilai tertinggi",
      "Daftar kelulusan mengalami kesalahan cetak",
      "Tahap wawancara untuk Sinta dijadwalkan ulang minggu depan",
      "Semua peserta belum mengikuti wawancara",
    ],
    answer: "A",
    explanation:
      "Kedua alternatif akibat tidak terjadi (~q dan ~r), sehingga keseluruhan bagian kanan implikasi salah. Modus Tollens menyimpulkan Sinta tidak lulus wawancara (~p).",
    tip: "Jika akibat berupa 'X atau Y', pastikan keduanya diingkari agar bisa menarik kesimpulan ~p.",
  },
  {
    id: "tiu-sil-048",
    subPattern: "modus-tollens",
    difficulty: "sedang",
    prompt:
      "Jika saluran drainase kota dibersihkan sebelum musim hujan, maka genangan di jalan protokol cepat surut.\nSaat hujan deras kemarin, genangan di jalan protokol tidak cepat surut.\nSimpulan yang sah adalah ...",
    options: [
      "Jalan protokol tidak memiliki saluran drainase",
      "Curah hujan kemarin di atas rata-rata tahunan",
      "Saluran drainase kota tidak dibersihkan sebelum musim hujan",
      "Saluran drainase kota sudah bersih seluruhnya",
      "Petugas kebersihan menutup seluruh jalan protokol",
    ],
    answer: "C",
    explanation:
      "Premis 2 menyangkal akibat (genangan tidak cepat surut), sehingga menurut Modus Tollens sebabnya (dibersihkan sebelum musim hujan) tidak terjadi.",
    tip: "Ingat rumus Modus Tollens: p -> q, ~q menghasilkan ~p.",
  },
  {
    id: "tiu-sil-049",
    subPattern: "modus-tollens",
    difficulty: "mudah",
    prompt:
      "Jika proposal penelitian disetujui dewan etik, maka pengambilan data responden dapat dimulai.\nHingga hari ini pengambilan data responden belum dapat dimulai.\nSimpulan yang tepat adalah ...",
    options: [
      "Dewan etik sudah menyetujui proposal penelitian",
      "Responden menolak mengisi kuesioner penelitian",
      "Pengambilan data selesai lebih cepat dari jadwal",
      "Proposal penelitian belum disetujui dewan etik",
      "Peneliti mengganti topik penelitiannya",
    ],
    answer: "D",
    explanation:
      "Pengambilan data responden belum dapat dimulai merupakan ~q. Berdasarkan Modus Tollens, disimpulkan ~p: proposal penelitian belum disetujui dewan etik.",
    tip: "Padankan bentuk negatif 'belum dapat dimulai' langsung ke penyangkalan syaratnya.",
  },
  {
    id: "tiu-sil-050",
    subPattern: "modus-tollens",
    difficulty: "sulit",
    prompt:
      "Jika pemerintah daerah tidak menerbitkan peraturan zonasi, maka izin usaha pertambangan dibekukan.\nTahun ini izin usaha pertambangan di daerah tersebut tidak dibekukan.\nSimpulan yang tepat adalah ...",
    options: [
      "Pemerintah daerah belum menerbitkan peraturan zonasi",
      "Semua izin usaha pertambangan dicabut permanen",
      "Peraturan zonasi tidak berpengaruh terhadap izin usaha",
      "Daerah tersebut melarang seluruh kegiatan pertambangan",
      "Pemerintah daerah telah menerbitkan peraturan zonasi",
    ],
    answer: "E",
    explanation:
      "Premis 1: ~p -> q ('tidak menerbitkan peraturan zonasi' -> 'izin dibekukan'). Premis 2: ~q ('izin tidak dibekukan'). Maka ~(~p) = p: pemerintah daerah telah menerbitkan peraturan zonasi.",
    tip: "Negasi dari 'tidak menerbitkan' adalah 'sudah/telah menerbitkan'.",
  },
];

