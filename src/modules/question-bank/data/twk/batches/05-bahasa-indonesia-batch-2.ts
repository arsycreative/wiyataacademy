import { type QuestionDraft } from "@/modules/question-bank/domain/question";

export const bahasaIndonesiaBatch2Drafts: readonly QuestionDraft[] = [
  {
    id: "twk-bhs-041",
    subPattern: "ejaan-dan-tanda-baca",
    difficulty: "mudah",
    prompt:
      "Berdasarkan kaidah EYD Edisi V mengenai pemakaian huruf kapital pada peristiwa sejarah, kitab suci, dan hari raya keagamaan, penulisan kalimat berikut yang paling tepat adalah ...",
    options: [
      "Semangat proklamasi Kemerdekaan Indonesia menjadi landasan moral dalam melayani masyarakat",
      "Peristiwa Proklamasi Kemerdekaan Indonesia diperingati setiap tahun setelah hari raya Idulfitri berakhir",
      "Setiap aparatur diharapkan meneladani nilai luhur yang diajarkan di dalam kitab suci al-Qur'an maupun Alkitab",
      "Para peserta upacara mengenang sejarah perang Diponegoro sebelum memasuki masa libur Hari Raya",
      "Peringatan Hari Proklamasi Kemerdekaan berlangsung khidmat meski sempat terjadi Proklamasi darurat di daerah"
    ],
    answer: "B",
    explanation:
      "Sesuai EYD V, huruf kapital dipakai pada huruf pertama unsur nama peristiwa sejarah (Proklamasi Kemerdekaan Indonesia) dan nama hari raya keagamaan (Idulfitri), sedangkan kata jenis yang mendahuluinya seperti \"hari raya\" ditulis dengan huruf kecil. Pilihan yang memadukan \"proklamasi\" kecil di tengah nama peristiwa resmi atau menulis \"al-Qur'an\" dengan huruf awal kecil tidak tepat karena nama kitab suci wajib berhuruf kapital (Al-Qur'an).",
    tip: "Kapitalkan nama diri peristiwa sejarah (Proklamasi Kemerdekaan Indonesia) dan kitab suci (Al-Qur'an), tetapi biarkan kata 'hari raya' tetap huruf kecil jika bukan bagian nama resmi."
  },
  {
    id: "twk-bhs-042",
    subPattern: "ejaan-dan-tanda-baca",
    difficulty: "mudah",
    prompt:
      "Menurut EYD Edisi V, gabungan kata yang hanya mendapat awalan atau akhiran saja tetap ditulis terpisah, sedangkan yang mendapat awalan dan akhiran sekaligus ditulis serangkai. Penerapan kaidah tersebut yang seluruhnya benar terdapat pada kalimat ...",
    options: [
      "Pejabat pengadaan wajib mempertanggung jawabkan seluruh penggunaan anggaran dan berterimakasih kepada tim audit",
      "Sekretaris dinas telah menanda tangani berita acara serah terima barang dan menyebar luaskan jadwal rapat",
      "Setiap pegawai bertanggungjawab penuh atas dokumen yang sudah ditanda tangani sebelum diserahkan",
      "Panitia pelaksana bertanggung jawab untuk menyebarluaskan panduan seleksi yang telah ditandatangani pimpinan",
      "Kepala unit berterima kasih atas laporan yang sudah dipertanggung jawabkan secara terbuka oleh bendahara"
    ],
    answer: "D",
    explanation:
      "Bentuk \"bertanggung jawab\" hanya mendapat awalan ber-, sehingga kedua unsur kata majemuknya tetap ditulis terpisah. Sebaliknya, \"menyebarluaskan\" (meN- + sebar luas + -kan) dan \"ditandatangani\" (di- + tanda tangan + -i) mendapat awalan dan akhiran sekaligus, sehingga wajib ditulis serangkai. Penulisan \"bertanggungjawab\", \"berterimakasih\", atau \"ditanda tangani\" menyalahi kaidah pengimbuhan gabungan kata EYD V.",
    tip: "Cek imbuhan gabungan kata: awalan saja atau akhiran saja -> pisah (bertanggung jawab); awalan + akhiran sekaligus -> serangkai (mempertanggungjawabkan, ditandatangani)."
  },
  {
    id: "twk-bhs-043",
    subPattern: "ejaan-dan-tanda-baca",
    difficulty: "sedang",
    prompt:
      "Penulisan angka dan bilangan dalam naskah laporan kegiatan pemerintah berikut yang paling tepat sesuai kaidah EYD Edisi V adalah ...",
    options: [
      "Sebanyak 12 unit komputer, 8 meja kerja, dan 15 kursi rapat telah dikirim ke kecamatan",
      "14 desa percontohan di wilayah perbatasan berhasil menyelesaikan pendataan penduduk lebih cepat dari target",
      "Dinas sosial menyalurkan bantuan logistik ke dua belas kecamatan, 8 kelurahan, dan 15 desa tertinggal",
      "Dari 32 peserta diklat, dua belas orang berasal dari luar Jawa dan 20 orang berasal dari daerah setempat",
      "25 berkas permohonan izin usaha sudah diverifikasi oleh 5 orang petugas sejak pukul 08.00 WIB"
    ],
    answer: "A",
    explanation:
      "Dalam EYD Edisi V, bilangan yang dipakai secara berurutan seperti dalam perincian wajib ditulis menggunakan angka seluruhnya (\"12 unit komputer, 8 meja kerja, dan 15 kursi rapat\"), dan kalimat tidak boleh diawali angka secara langsung (sehingga didahului kata \"Sebanyak\"). Sebaliknya, penulisan angka di awal kalimat (\"14 desa...\", \"25 berkas...\") maupun pencampuran huruf dan angka dalam satu deret perincian menyalahi pedoman ejaan.",
    tip: "Uji tiga aturan bilangan EYD V: awal kalimat tidak boleh angka, bilangan satu kata ditulis huruf kecuali dalam perincian berurutan, dan waktu/ukuran memakai angka."
  },
  {
    id: "twk-bhs-044",
    subPattern: "ejaan-dan-tanda-baca",
    difficulty: "sedang",
    prompt:
      "Penggunaan tanda koma (,) untuk memisahkan induk kalimat, anak kalimat, keterangan tambahan, dan kata penghubung intrakalimat berikut yang paling tepat menurut EYD Edisi V adalah ...",
    options: [
      "Tim inspektorat tetap memeriksa arsip pengadaan, meskipun jam kerja kantor telah berakhir sore itu",
      "Kepala Bappeda, yakni pejabat baru dari kementerian pusat langsung memimpin rapat anggaran bersama camat",
      "Pemerintah daerah tidak menambah pegawai kontrak baru, melainkan mengoptimalkan penataan tenaga yang ada",
      "Seluruh dokumen perencanaan harus selesai sebelum akhir bulan, agar pencairan dana desa tidak terhambat",
      "Pegawai yang berprestasi tinggi akan menerima penghargaan, sedangkan, pegawai yang lalai dikenai pembinaan"
    ],
    answer: "C",
    explanation:
      "Tanda koma wajib digunakan sebelum kata penghubung intrakalimat yang menyatakan pertentangan atau perlawanan seperti \"melainkan\", \"tetapi\", dan \"sedangkan\" (bukan sesudahnya). Sebaliknya, tanda koma tidak dipakai jika anak kalimat muncul sesudah induk kalimat (sehingga koma sebelum \"meskipun\" dan \"agar\" keliru), sedangkan keterangan aposisi/tambahan (\"yakni pejabat baru dari kementerian pusat\") harus diapit oleh dua tanda koma.",
    tip: "Letakkan koma sebelum konjungsi pertentangan (melainkan, sedangkan, tetapi) dan apit aposisi dengan dua koma, tetapi hilangkan koma jika anak kalimat berada di belakang induk kalimat."
  },
  {
    id: "twk-bhs-045",
    subPattern: "ejaan-dan-tanda-baca",
    difficulty: "sedang",
    prompt:
      "Cermati penggunaan tanda titik dua (:) dan titik koma (;) dalam kalimat perincian berikut. Kalimat yang penerapannya paling tepat sesuai kaidah EYD Edisi V adalah ...",
    options: [
      "Kementerian memerlukan tenaga ahli di bidang: analisis kebijakan publik, tata kelola data, dan hukum administrasi",
      "Syarat pengajuan izin usaha meliputi: salinan kartu identitas, akta pendirian lembaga, serta bukti pelunasan pajak",
      "Agenda rapat pagi ini mencakup tiga pembahasan utama, yaitu: penyusunan anggaran, evaluasi kinerja, dan rotasi pegawai",
      "Peserta pelatihan membawa perlengkapan berikut: kartu tanda peserta, buku catatan, dan perangkat laptop pribadi",
      "Divisi umum menyiapkan ruang sidang; bagian keuangan memverifikasi kuitansi; sedangkan humas mendokumentasikan acara"
    ],
    answer: "D",
    explanation:
      "Tanda titik dua dipakai pada akhir suatu pernyataan yang lengkap yang diikuti pemerincian atau penjelasan (\"perlengkapan berikut:\"). Apabila perincian merupakan pelengkap langsung predikat tanpa kata penunjuk perincian seperti \"berikut\" atau \"sebagai berikut\" (seperti setelah \"di bidang\", \"meliputi\", atau \"yaitu\"), tanda titik dua tidak dipakai. Sementara itu, titik koma tidak dipakai di depan konjungsi \"sedangkan\" dalam klausa setara yang cukup memakai koma.",
    tip: "Gunakan titik dua hanya setelah pernyataan lengkap (misalnya berpenanda 'berikut'), bukan langsung setelah kata kerja transitif 'meliputi' atau preposisi 'di bidang'."
  },
  {
    id: "twk-bhs-046",
    subPattern: "ejaan-dan-tanda-baca",
    difficulty: "sedang",
    prompt:
      "Penulisan singkatan umum dan singkatan surat-menyurat resmi yang seluruhnya sesuai dengan EYD Edisi V terdapat pada kalimat ...",
    options: [
      "Daftar nama peserta diklat beserta rincian berkas persyaratan tercantum pada hlm. 4 s.d. 6 buku panduan",
      "Kepala bagian umum a/n pimpinan menandatangani surat edaran yang berlaku mulai tgl. 3 s/d 10 Juni 2026",
      "Berkas usulan kenaikan pangkat dikirimkan d/a Biro Kepegawaian dan wajib dilengkapi dokumen pendukung, dll",
      "Surat tugas tersebut diterbitkan u/b Direktur Jenderal dengan merujuk ketentuan pasal 12, dsb. secara saksama",
      "Seluruh pegawai yang belum menyerahkan laporan harta kekayaan y.b.s. diminta melapor ke inspektorat hari ini"
    ],
    answer: "A",
    explanation:
      "Sesuai EYD V, singkatan umum yang terdiri atas tiga huruf atau lebih ditulis dengan huruf kecil diikuti satu tanda titik di akhir (hlm., dll., dsb., ybs., tgl.), sedangkan singkatan dua huruf yang lazim dalam surat-menyurat ditulis menggunakan titik pada masing-masing huruf tanpa garis miring (s.d., a.n., u.b., d.a.). Bentuk \"s/d\", \"a/n\", \"d/a\", \"u/b\", serta \"y.b.s.\" menyalahi pedoman ejaan baku.",
    tip: "EYD V tidak memakai garis miring untuk singkatan surat: gunakan titik di tiap huruf untuk 2 huruf (a.n., u.b., s.d., d.a.) dan satu titik di akhir untuk 3+ huruf (hlm., dll., ybs.)."
  },
  {
    id: "twk-bhs-047",
    subPattern: "ejaan-dan-tanda-baca",
    difficulty: "sulit",
    prompt:
      "Perhatikan kalimat kutipan langsung bertingkat berikut. Penulisan tanda petik ganda, tanda petik tunggal, dan tanda baca penutup kalimat yang paling tepat sesuai EYD Edisi V adalah ...",
    options: [
      "\"Apakah Anda sudah mendengar instruksi 'segera amankan arsip digital' dari kepala balai?\", tanya Rudi.",
      "\"Apakah Anda sudah mendengar instruksi \"segera amankan arsip digital\" dari kepala balai?\" tanya Rudi.",
      "'Apakah Anda sudah mendengar instruksi \"segera amankan arsip digital\" dari kepala balai?' tanya Rudi.",
      "\"Apakah Anda sudah mendengar instruksi 'segera amankan arsip digital' dari kepala balai\"? tanya Rudi.",
      "\"Apakah Anda sudah mendengar instruksi 'segera amankan arsip digital' dari kepala balai?\" tanya Rudi."
    ],
    answer: "E",
    explanation:
      "Dalam EYD V, petikan langsung diapit tanda petik ganda (\"...\"), sedangkan petikan yang terdapat di dalam petikan lain diapit tanda petik tunggal ('...'). Tanda tanya yang merupakan bagian dari kalimat petikan langsung ditempatkan di dalam tanda petik penutup tanpa perlu menambahkan tanda koma lagi sesudahnya sebelum klausa pengiring (\"tanya Rudi\").",
    tip: "Ingat urutan petik dalam petik: petik ganda di luar, petik tunggal di dalam; tanda tanya atau tanda seru penutup petikan tetap di dalam petik tanpa koma tambahan."
  },
  {
    id: "twk-bhs-048",
    subPattern: "ejaan-dan-tanda-baca",
    difficulty: "sulit",
    prompt:
      "Pemakaian tanda pisah (—) dan tanda elipsis (...) dalam penyuntingan naskah laporan kebijakan berikut yang paling tepat sesuai kaidah EYD Edisi V adalah ...",
    options: [
      "Evaluasi program padat karya—meskipun sempat terkendala cuaca ekstrem—menunjukkan peningkatan serapan tenaga lokal tahun 2023—2025.",
      "Evaluasi program padat karya — meskipun sempat terkendala cuaca ekstrem — menunjukkan peningkatan serapan tenaga lokal tahun 2023-2025.",
      "Dalam naskah akademik tersebut tercantum simpulan bahwa \"kualitas layanan publik...bergantung pada integritas pelaksana.\"",
      "Evaluasi program padat karya, meskipun sempat terkendala cuaca ekstrem—menunjukkan peningkatan serapan tenaga lokal tahun 2023-2025.",
      "Keberhasilan reformasi birokrasi — menurut hasil survei tahun ini — patut diapresiasi karena \"berdampak nyata .. bagi warga.\""
    ],
    answer: "A",
    explanation:
      "Menurut EYD Edisi V, tanda pisah (—) dipakai untuk mengapit keterangan penyisip di luar bangun kalimat dan menandai rentang bilangan atau tahun bermakna 'sampai dengan' (2023—2025), keduanya ditulis tanpa spasi di antara kata atau angka yang mengapitnya. Sebaliknya, penggunaan spasi di sekitar tanda pisah, pemakaian tanda hubung (-) untuk rentang tahun, pencampuran koma dan tanda pisah yang tidak simetris, maupun tanda elipsis tanpa spasi atau hanya dua titik adalah kesalahan ejaan.",
    tip: "Periksa aturan spasi tanda pisah dan elipsis EYD V: tanda pisah penyisip keterangan ditulis tanpa spasi pengapit, sedangkan tanda elipsis berjumlah tiga titik dengan spasi pengapit."
  },
  {
    id: "twk-bhs-049",
    subPattern: "kalimat-efektif-dan-struktur-kalimat",
    difficulty: "mudah",
    prompt:
      "Cermati deretan pernyataan berikut. Kalimat yang tergolong kalimat efektif karena memiliki unsur subjek dan predikat yang lengkap (tidak buntung akibat perluasan kata \"yang\") adalah ...",
    options: [
      "Pegawai negeri sipil yang mengikuti pelatihan kepemimpinan tingkat nasional di lembaga administrasi negara selama tiga bulan.",
      "Sistem pengarsipan elektronik yang telah dikembangkan oleh tim teknologi informasi kementerian sejak awal tahun lalu.",
      "Peraturan daerah yang mengatur tata kelola pasar tradisional di kawasan pesisir kota tersebut telah disahkan kemarin.",
      "Para calon peserta seleksi CPNS yang berhasil lolos verifikasi berkas administrasi pada tahap pertama bulan ini.",
      "Laporan pertanggungjawaban keuangan yang diserahkan oleh bendahara proyek kepada tim auditor internal minggu lalu."
    ],
    answer: "C",
    explanation:
      "Kalimat efektif minimal wajib memiliki satu subjek dan satu predikat yang jelas. Perluasan subjek memakai kata \"yang\" sering menjebak penulis berhenti sebelum menghadirkan predikat induk. Kalimat mengenai peraturan daerah menjadi satu-satunya kalimat utuh karena memiliki subjek panjang (\"Peraturan daerah yang mengatur...\") dan predikat jelas (\"telah disahkan\").",
    tip: "Potong seluruh klausa yang diawali kata 'yang' untuk menguji keutuhan kalimat; sisa kalimat harus masih menyisakan Subjek dan Predikat utama."
  },
  {
    id: "twk-bhs-050",
    subPattern: "kalimat-efektif-dan-struktur-kalimat",
    difficulty: "mudah",
    prompt:
      "Kalimat manakah yang bebas dari pemborosan kata (pleonasme) pada ungkapan resiprokal, penunjuk arah, dan keterangan pembatas?",
    options: [
      "Warga desa saling bantu-membantu membersihkan saluran air agar tidak terjadi banjir kiriman",
      "Petugas mengarahkan kendaraan dinas supaya mundur ke belakang secara perlahan di area parkir",
      "Daftar nama-nama penerima bantuan sosial telah diverifikasi ulang oleh perangkat kelurahan setempat",
      "Sejak dari pagi hari hingga petang, loket layanan terpadu hanya melayani pengurusan dokumen kependudukan",
      "Seluruh unit kerja bahu-membahu mempercepat penyelesaian laporan kinerja triwulan pertama tahun ini"
    ],
    answer: "E",
    explanation:
      "Kata ulang \"bahu-membahu\" sudah bermakna saling bekerja sama tanpa perlu ditambah kata \"saling\", sehingga kalimat tersebut hemat dan baku. Sebaliknya, \"saling bantu-membantu\" (makna saling ganda), \"mundur ke belakang\" (mundur sudah pasti ke belakang), \"daftar nama-nama\" (daftar sudah bermakna jamak), serta \"sejak dari\" (dua preposisi waktu bermakna serupa) merupakan bentuk pleonasme yang tidak efektif.",
    tip: "Hindari makna ganda pada kata ulang resiprokal ('saling' + V-meN-V), arah inheren ('mundur ke belakang', 'naik ke atas'), dan jamak ganda ('daftar nama-nama')."
  },
  {
    id: "twk-bhs-051",
    subPattern: "kalimat-efektif-dan-struktur-kalimat",
    difficulty: "sedang",
    prompt:
      "Kerancuan struktur atau kontaminasi kerap terjadi akibat menggabungkan dua pola ungkapan yang berbeda ke dalam satu kalimat. Kalimat berikut yang strukturnya benar dan bebas dari kontaminasi adalah ...",
    options: [
      "Pemerintah daerah terus berupaya meningkatkan mutu pelayanan publik yang lebih baik dari tahun sebelumnya",
      "Rapat pimpinan siang ini akan membahas mengenai percepatan penyerapan anggaran belanja modal daerah",
      "Tim penyusun naskah kebijakan terus mengupayakan tercapainya keselarasan aturan antarinstansi daerah",
      "Seluruh peserta rapat dilarang keras tidak boleh membawa perangkat perekam suara ke dalam ruang sidang",
      "Dalam penyusunan rencana strategis itu harus mengesampingkan kepentingan golongan demi kemaslahatan warga"
    ],
    answer: "C",
    explanation:
      "Kalimat \"Tim penyusun naskah kebijakan terus mengupayakan tercapainya keselarasan aturan...\" memiliki struktur transitif yang tepat dan bebas kerancuan. Kesalahan kontaminasi muncul pada \"meningkatkan mutu... yang lebih baik\" (gabungan \"meningkatkan mutu\" dan \"membuat mutu lebih baik\"), \"membahas mengenai\" (kata kerja transitif \"membahas\" langsung diikuti objek tanpa preposisi), \"dilarang keras tidak boleh\" (negasi ganda kontradiktif), serta \"Dalam penyusunan... harus mengesampingkan\" (tidak bersubjek).",
    tip: "Waspadai gabungan dua pola sekaligus seperti 'meningkatkan... lebih baik', 'membahas tentang/mengenai', atau negasi ganda 'dilarang tidak boleh'."
  },
  {
    id: "twk-bhs-052",
    subPattern: "kalimat-efektif-dan-struktur-kalimat",
    difficulty: "sedang",
    prompt:
      "Perhatikan kalimat standar operasional prosedur berikut: \"Tugas utama pengawas lapangan adalah memantau progres proyek, evaluasi mutu material dilakukan secara berkala, dan melaporkan kendala teknis kepada pimpinan.\" Perbaikan yang tepat agar unsur rinciannya sejajar (paralel) adalah ...",
    options: [
      "Tugas utama pengawas lapangan adalah pemantauan progres proyek, mengevaluasi mutu material berkala, dan pelaporan kendala teknis kepada pimpinan",
      "Tugas utama pengawas lapangan adalah memantau progres proyek, melakukan evaluasi mutu material secara berkala, dan laporkan kendala teknis kepada pimpinan",
      "Tugas utama pengawas lapangan adalah dipantau progres proyeknya, mengevaluasi mutu material berkala, serta melaporkan kendala teknis kepada pimpinan",
      "Tugas utama pengawas lapangan adalah memantau progres proyek, mengevaluasi mutu material secara berkala, dan melaporkan kendala teknis kepada pimpinan",
      "Tugas utama pengawas lapangan adalah pantau progres proyek, evaluasi mutu material berkala, dan pelaporan kendala teknis kepada pimpinan"
    ],
    answer: "D",
    explanation:
      "Keparalelan unsur rincian menuntut kesamaan kelas kata dan bentuk imbuhan pada posisi yang setara. Deretan verba aktif berawalan meN- (\"memantau\", \"mengevaluasi\", dan \"melaporkan\") menjaga kesejajaran struktur setelah kopula \"adalah\". Pencampuran verba aktif dengan nomina berimbuhan peN-...-an, verba pasif di-, atau verba imperatif merusak kesejajaran kalimat.",
    tip: "Pastikan seluruh item dalam daftar tugas menggunakan bentuk kata yang seragam, misalnya semuanya verba aktif meN- atau semuanya nomina peN-...-an."
  },
  {
    id: "twk-bhs-053",
    subPattern: "kalimat-efektif-dan-struktur-kalimat",
    difficulty: "sedang",
    prompt:
      "Pengaruh terjemahan harfiah struktur bahasa asing sering memunculkan kata \"di mana\", \"yang mana\", atau \"daripada\" secara keliru dalam bahasa Indonesia resmi. Kalimat di bawah ini yang paling baku dan terbebas dari kesalahan tersebut adalah ...",
    options: [
      "Gedung arsip daerah yang mana baru saja direnovasi bulan lalu kini mulai difungsikan kembali untuk layanan",
      "Balai pelatihan tempat para aparatur sipil negara belajar tata kelola digital berada di kawasan pusat pemerintahan",
      "Pusat data nasional di mana seluruh catatan kependudukan disimpan dilindungi oleh sistem keamanan berlapis",
      "Tujuan daripada pelaksanaan audit internal tahunan adalah memastikan kepatuhan seluruh unit terhadap standar kerja",
      "Sosialisasi peraturan terbaru itu menyasar pelaku usaha kecil yang mana usahanya berada di wilayah pedesaan"
    ],
    answer: "B",
    explanation:
      "Kata \"di mana\" dan \"yang mana\" adalah kata tanya, bukan kata penghubung penjelas tempat atau benda dalam bahasa Indonesia baku; keduanya diganti dengan kata \"tempat\" atau \"yang\". Begitu pula preposisi \"daripada\" hanya dipakai untuk menyatakan perbandingan, bukan pengganti penanda kepemilikan atau hubungan bagian (\"tujuan pelaksanaan\", bukan \"tujuan daripada pelaksanaan\").",
    tip: "Ganti 'di mana' sebagai penghubung dengan 'tempat' atau 'yang', hilangkan 'yang mana', dan batasi 'daripada' hanya untuk perbandingan."
  },
  {
    id: "twk-bhs-054",
    subPattern: "kalimat-efektif-dan-struktur-kalimat",
    difficulty: "sedang",
    prompt:
      "Dari segi kelogisan penalaran hubungan antara subjek dan predikatnya, kalimat berita berikut yang paling logis dan tepat adalah ...",
    options: [
      "Penurunan angka kemiskinan di kabupaten itu berhasil dicapai pemerintah daerah melalui pemberdayaan UMKM desa",
      "Pelaku peretasan situs web pemerintah daerah akhirnya berhasil ditangkap oleh tim siber di tempat persembunyiannya",
      "Layanan pengaduan warga yang sempat terganggu kemarin kini sudah berhasil diperbaiki kembali secara menyeluruh",
      "Proyek pembangunan jembatan penghubung antardesa tersebut berhasil dirampungkan para pekerja sebelum musim hujan tiba",
      "Tim peneliti kehutanan berhasil menemukan varietas bibit unggul yang tahan terhadap kekeringan panjang"
    ],
    answer: "E",
    explanation:
      "Secara kelogisan semantik, kata \"berhasil\" hanya wajar disematkan pada subjek pelaku yang berkehendak dan berusaha mencapai tujuan. Pada kalimat \"Tim peneliti kehutanan berhasil menemukan...\", subjek pelakunya jelas (tim peneliti). Sebaliknya, kalimat seperti \"Pelaku peretasan... berhasil ditangkap\" atau \"Proyek pembangunan jembatan... berhasil dirampungkan\" tidak logis karena menempatkan sasaran tindakan atau benda mati sebagai subjek dari kata \"berhasil\".",
    tip: "Uji logika kata 'berhasil' dengan menanyakan siapa subjek kalimatnya: kata 'berhasil' secara logis disematkan kepada pelaku aktif, bukan kepada objek atau sasaran pasif."
  },
  {
    id: "twk-bhs-055",
    subPattern: "kalimat-efektif-dan-struktur-kalimat",
    difficulty: "sulit",
    prompt:
      "Cermati kalimat majemuk berikut: \"Setelah meninjau langsung kondisi jalan rusak di perbatasan dan berdialog bersama warga setempat, maka usulan perbaikan infrastruktur prioritas segera diajukan oleh kepala dinas kepada gubernur.\" Perbaikan kalimat tersebut agar memenuhi syarat kelengkapan subjek pada anak kalimat dan bebas konjungsi berlebih adalah ...",
    options: [
      "Setelah meninjau langsung kondisi jalan rusak di perbatasan dan berdialog bersama warga setempat, usulan perbaikan infrastruktur prioritas segera diajukan oleh kepala dinas kepada gubernur",
      "Setelah usulan perbaikan infrastruktur prioritas ditinjau dan berdialog bersama warga setempat, maka kepala dinas segera mengajukannya kepada gubernur",
      "Setelah meninjau langsung kondisi jalan rusak di perbatasan dan berdialog bersama warga setempat, kepala dinas segera mengajukan usulan perbaikan infrastruktur prioritas kepada gubernur",
      "Setelah kepala dinas meninjau langsung kondisi jalan rusak di perbatasan serta berdialog bersama warga setempat, maka segera diajukan usulan perbaikan kepada gubernur",
      "Dengan meninjau langsung kondisi jalan rusak di perbatasan dan berdialog bersama warga setempat, usulan perbaikan infrastruktur segera diajukan oleh kepala dinas"
    ],
    answer: "C",
    explanation:
      "Pada kalimat majemuk bertingkat yang melesapkan subjek di anak kalimat pembuka (\"Setelah meninjau... dan berdialog...\"), subjek induk kalimat wajib merujuk pada pelaku yang sama dengan aktivitas pada anak kalimat tersebut. Menempatkan \"kepala dinas\" sebagai subjek aktif induk kalimat (\"kepala dinas segera mengajukan...\") sekaligus menghapus konjungsi berlebih \"maka\" menjadikan struktur kalimat baku dan logis. Sebaliknya, mempertahankan induk kalimat pasif bersubjek \"usulan perbaikan\" menciptakan kerancuan seolah-olah usulan itulah yang meninjau jalan dan berdialog.",
    tip: "Pada kalimat majemuk bertingkat yang melesapkan subjek di anak kalimat pembuka, pastikan subjek induk kalimat adalah pelaku dari aktivitas di anak kalimat tersebut."
  },
  {
    id: "twk-bhs-056",
    subPattern: "kalimat-efektif-dan-struktur-kalimat",
    difficulty: "sulit",
    prompt:
      "Cermati kalimat aktif berikut: \"Saudara harus memverifikasi seluruh dokumen lampiran pengajuan izin usaha itu sebelum batas waktu pengunggahan berakhir.\" Pengubahan kalimat tersebut menjadi bentuk kalimat pasif persona kedua yang paling tepat dan baku adalah ...",
    options: [
      "Seluruh dokumen lampiran pengajuan izin usaha itu harus diverifikasi oleh Saudara sebelum batas waktu pengunggahan berakhir",
      "Seluruh dokumen lampiran pengajuan izin usaha itu harus Saudara verifikasi sebelum batas waktu pengunggahan berakhir",
      "Seluruh dokumen lampiran pengajuan izin usaha itu Saudara harus verifikasi sebelum batas waktu pengunggahan berakhir",
      "Harus Saudara memverifikasi seluruh dokumen lampiran pengajuan izin usaha itu sebelum batas waktu pengunggahan berakhir",
      "Oleh Saudara seluruh dokumen lampiran pengajuan izin usaha itu haruslah diverifikasikan sebelum batas waktu pengunggahan berakhir"
    ],
    answer: "B",
    explanation:
      "Dalam kaidah kalimat pasif persona I dan II (saya, kami, kita, Anda, Saudara), pola bakunya adalah [Subjek Sasaran] + [kata bantu/modalitas: harus, telah, akan] + [Pelaku Persona] + [Verba dasar tanpa awalan meN- maupun di-]. Dengan demikian, \"harus Saudara verifikasi\" adalah struktur yang tepat. Kesalahan umum terjadi pada penyisipan kata \"harus\" di antara pelaku dan verba (\"Saudara harus verifikasi\") atau penggunaan bentuk pasif kanonik di-... oleh pada pelaku persona II.",
    tip: "Rumus pasif persona I/II: tempatkan kata bantu (harus, akan, telah) di depan pronomina pelaku, lalu diikuti kata kerja dasar tanpa imbuhan meN- atau di-."
  },
  {
    id: "twk-bhs-057",
    subPattern: "ide-pokok-paragraf-dan-penalaran-wacana",
    difficulty: "mudah",
    prompt:
      "Bacalah paragraf berikut: \"Ketergantungan konsumsi pangan nasional pada satu komoditas pokok membuat ketahanan pangan rentan terhadap gejolak iklim dan gangguan pasokan global. Di sejumlah daerah, pengolahan sagu, sorgum, dan umbi lokal sebenarnya mampu memenuhi kebutuhan gizi harian sekaligus menggerakkan ekonomi petani setempat. Pengembangan riset kuliner serta dukungan distribusi pangan nonberas pun terbukti memperluas pilihan konsumsi rumah tangga. Dengan demikian, percepatan diversifikasi pangan berbasis potensi lokal menjadi kunci utama mewujudkan kemandirian pangan yang tangguh.\" Kalimat utama paragraf tersebut terletak pada ...",
    options: [
      "Kalimat pertama karena langsung menyoroti kerentanan pangan terhadap perubahan iklim global",
      "Kalimat kedua karena memuat bukti konkret potensi pangan lokal seperti sagu dan sorgum",
      "Kalimat ketiga karena mengulas peran riset kuliner dan jalur distribusi komoditas daerah",
      "Kalimat keempat karena merangkum keseluruhan gagasan penjelas menjadi simpulan umum paragraf",
      "Seluruh kalimat secara merata karena paragraf tersebut berpola naratif tanpa kalimat utama"
    ],
    answer: "D",
    explanation:
      "Paragraf tersebut disusun secara induktif: kalimat pertama hingga ketiga memaparkan alasan, potensi lokal, dan bukti pendukung secara khusus, lalu kalimat keempat menyimpulkan gagasan pokok keseluruhan dengan penanda konjungsi penyimpul \"Dengan demikian\". Kalimat pertama hanya berfungsi sebagai pengantar latar belakang masalah, bukan simpulan umum yang menaungi seluruh isi paragraf.",
    tip: "Kenali penanda simpulan di akhir paragraf seperti 'Dengan demikian', 'Jadi', atau 'Oleh karena itu' sebagai ciri kuat paragraf induktif."
  },
  {
    id: "twk-bhs-058",
    subPattern: "ide-pokok-paragraf-dan-penalaran-wacana",
    difficulty: "mudah",
    prompt:
      "Bacalah paragraf berikut dengan cermat: \"Pemerintah mulai mewajibkan audit energi secara berkala bagi gedung perkantoran berkapasitas besar di kawasan perkotaan. Kebijakan tersebut bertujuan menekan pemborosan listrik sekaligus mendorong pemasangan panel surya atap secara bertahap. Selain menghemat anggaran operasional jangka panjang, langkah ini diharapkan mampu menurunkan emisi karbon dari sektor bangunan.\" Frasa \"langkah ini\" pada kalimat ketiga merujuk secara langsung pada ...",
    options: [
      "Kewajiban audit energi berkala serta dorongan pemasangan panel surya atap pada gedung perkantoran",
      "Peningkatan anggaran operasional jangka panjang akibat pembelian perangkat listrik baru",
      "Pemborosan energi listrik yang terjadi di seluruh kawasan permukiman padat penduduk",
      "Penurunan emisi karbon dari sektor transportasi umum dan industri manufaktur berat",
      "Pembangunan gedung perkantoran baru dengan ukuran kapasitas ruang yang lebih kecil"
    ],
    answer: "A",
    explanation:
      "Dalam kohesi gramatikal wacana, kata tunjuk \"langkah ini\" mengacu pada tindakan konkret yang baru saja dijelaskan pada kalimat-kalimat sebelumnya, yakni kewajiban audit energi berkala dan upaya mendorong pemasangan panel surya atap. Pemborosan listrik dan penurunan emisi karbon adalah masalah yang diatasi serta dampak yang diharapkan, bukan rujukan dari kata \"langkah\".",
    tip: "Untuk menemukan rujukan kata tunjuk ('hal ini', 'langkah tersebut'), cocokkan jenis maknanya (tindakan, alasan, atau dampak) dengan klausa terdekat sebelumnya."
  },
  {
    id: "twk-bhs-059",
    subPattern: "ide-pokok-paragraf-dan-penalaran-wacana",
    difficulty: "sedang",
    prompt:
      "Bacalah kutipan wacana berikut: \"Meskipun jaringan internet kabel optik kini menjangkau sebagian besar kecamatan di luar Jawa, tingkat pemanfaatannya untuk layanan pemerintahan dan transaksi ekonomi produktif warga pedesaan masih tergolong rendah. Banyak penduduk memiliki akses gawai, tetapi memakainya sebatas untuk hiburan dan media sosial akibat minimnya pendampingan literasi digital fungsional. Sebaliknya, di desa yang memiliki pendamping teknologi aktif, pelaku usaha mikro mampu memperluas pasar produknya secara daring hingga lintas provinsi.\" Simpulan paling tepat berdasarkan premis dalam teks tersebut adalah ...",
    options: [
      "Pembangunan jaringan internet kabel optik di luar Jawa tidak memberikan manfaat apa pun bagi warga",
      "Penduduk pedesaan sebaiknya dibatasi agar tidak lagi menggunakan aplikasi media sosial di telepon pintar",
      "Ketersediaan infrastruktur internet perlu diimbangi pendampingan literasi digital agar berdampak produktif bagi masyarakat desa",
      "Seluruh pelaku usaha mikro di perkotaan telah menguasai pemasaran daring tanpa memerlukan pelatihan lanjutan",
      "Pengadaan gawai gratis bagi setiap keluarga merupakan satu-satunya syarat kemajuan ekonomi wilayah perdesaan"
    ],
    answer: "C",
    explanation:
      "Teks membandingkan kondisi desa dengan akses internet tanpa pendampingan (pemanfaatan produktif rendah) melawan desa yang memiliki pendamping teknologi aktif (mampu menembus pasar lintas provinsi). Simpulan logis yang langsung ditopang fakta teks adalah bahwa infrastruktur fisik harus disertai pendampingan literasi digital fungsional.",
    tip: "Bandingkan dua kondisi kontras dalam teks untuk menemukan faktor pembeda utama yang menjadi inti simpulan."
  },
  {
    id: "twk-bhs-060",
    subPattern: "ide-pokok-paragraf-dan-penalaran-wacana",
    difficulty: "sedang",
    prompt:
      "Bacalah paragraf berikut: \"Proses perizinan usaha yang sebelumnya menuntut pemohon mendatangi lima dinas berbeda kerap memicu penundaan investasi serta membuka ruang transaksi percaloan. Ketika sistem perizinan berusaha terintegrasi secara elektronik diterapkan dengan tenggat layanan yang transparan, waktu pengurusan dapat dipangkas dari berbulan-bulan menjadi beberapa hari. Kejelasan alur dan kepastian biaya tersebut pada gilirannya mendorong meningkatnya jumlah pelaku usaha formal baru di daerah.\" Pola pengembangan paragraf di atas adalah ...",
    options: [
      "Analogi karena menyamakan sistem perizinan elektronik dengan cara kerja mesin produksi pabrik",
      "Klasifikasi karena mengelompokkan jenis-jenis pelaku usaha formal berdasarkan skala modalnya",
      "Definisi luas karena menguraikan arti istilah investasi dan percaloan menurut kamus hukum",
      "Pertentangan mutlak karena menolak seluruh keterlibatan instansi daerah dalam pengawasan usaha",
      "Sebab-akibat karena memaparkan dampak perubahan sistem layanan perizinan terhadap waktu, transparansi, dan pertumbuhan usaha"
    ],
    answer: "E",
    explanation:
      "Paragraf tersebut mengalir secara kausal: sistem lama yang berbelit memicu penundaan dan percaloan (sebab-akibat awal), lalu penerapan sistem terintegrasi elektronik memangkas waktu dan memberi kepastian biaya yang akhirnya meningkatkan jumlah usaha formal (sebab-akibat lanjutan). Tidak ada perbandingan perumpamaan (analogi) maupun pengelompokan kategori (klasifikasi).",
    tip: "Telusuri penanda kausalitas ('memicu', 'dipangkas', 'pada gilirannya mendorong') untuk mengidentifikasi pola pengembangan sebab-akibat."
  },
  {
    id: "twk-bhs-061",
    subPattern: "ide-pokok-paragraf-dan-penalaran-wacana",
    difficulty: "sedang",
    prompt:
      "Bacalah paragraf rumpang berikut: \"Mitigasi bencana banjir bandang di daerah aliran sungai tidak cukup hanya mengandalkan pembangunan tanggul beton di kawasan hilir. Upaya pencegahan justru harus dimulai dari penataan kembali fungsi hutan lindung dan daerah resapan air di bagian hulu. ... Keterlibatan komunitas warga dalam menjaga kebersihan anak sungai serta memantau peringatan dini curah hujan pun akan memperkuat ketangguhan wilayah secara berkelanjutan.\" Kalimat paling padu untuk melengkapi bagian rumpang tersebut adalah ...",
    options: [
      "Oleh karena itu, harga bahan bangunan untuk proyek tanggul beton di kota besar sering mengalami fluktuasi tahunan.",
      "Selain perbaikan ekosistem hulu, pengendalian alih fungsi lahan di sepanjang bantaran sungai perlu ditegakkan secara konsisten.",
      "Akibatnya, seluruh penduduk di daerah aliran sungai harus dipindahkan ke pulau lain tanpa mempertimbangkan mata pencaharian.",
      "Meskipun demikian, wisata alam di pegunungan tetap menjadi penyumbang utama pendapatan asli daerah setiap musim liburan.",
      "Sebaliknya, peralatan berat milik dinas pekerjaan umum lebih sering dipakai untuk memperbaiki jalan tol antarkota."
    ],
    answer: "B",
    explanation:
      "Bagian sebelum rumpang membahas penataan hulu, sedangkan bagian sesudahnya membahas keterlibatan warga menjaga anak sungai dan peringatan dini. Kalimat yang menjembatani keduanya secara koheren dan logis adalah lanjutan strategi hulu-bantaran berupa pengendalian alih fungsi lahan di sepanjang bantaran sungai secara konsisten.",
    tip: "Kalimat pengisi bagian rumpang harus berfungsi sebagai jembatan topik yang selaras antara kalimat sebelum dan sesudahnya."
  },
  {
    id: "twk-bhs-062",
    subPattern: "ide-pokok-paragraf-dan-penalaran-wacana",
    difficulty: "sedang",
    prompt:
      "Bacalah wacana berikut: \"Pemberian subsidi tarif angkutan umum perkotaan dirancang untuk mengalihkan pengguna kendaraan pribadi agar beralih ke transportasi massal sekaligus menekan kemacetan lalu lintas. Namun, hasil kajian awal menunjukkan sebagian besar penumpang bus bersubsidi justru merupakan pengguna lama angkutan kota, sementara pemilik mobil pribadi tetap enggan berpindah karena jarak halte dari kawasan permukiman masih terlalu jauh serta jadwal keberangkatan belum konsisten.\" Pernyataan yang PALING SESUAI dengan isi wacana tersebut adalah ...",
    options: [
      "Subsidi tarif saja belum cukup menarik pengguna kendaraan pribadi apabila aksesibilitas halte dan ketepatan jadwal angkutan massal belum dibenahi",
      "Program subsidi tarif angkutan umum terbukti langsung menghilangkan kemacetan lalu lintas di seluruh persimpangan utama kota",
      "Seluruh pemilik mobil pribadi bersedia meninggalkan kendaraannya asalkan harga tiket bus diturunkan hingga nol rupiah",
      "Pengguna lama angkutan kota tidak merasakan manfaat sama sekali dari adanya kebijakan subsidi tarif transportasi publik",
      "Jarak halte dan konsistensi jadwal keberangkatan tidak memengaruhi keputusan warga dalam memilih moda transportasi harian"
    ],
    answer: "A",
    explanation:
      "Wacana secara jelas memaparkan bahwa subsidi tarif baru dimanfaatkan mayoritas pengguna lama, sedangkan pemilik kendaraan pribadi tetap enggan beralih karena faktor non-tarif (jarak halte jauh dan jadwal tidak konsisten). Dengan demikian, pernyataan yang sesuai adalah bahwa subsidi tarif saja belum memadai tanpa pembenahan aksesibilitas dan keandalan jadwal.",
    tip: "Cocokkan pernyataan dengan fakta eksplisit dan alasan kausal yang tertulis di dalam teks, hindari klaim yang membalik atau melebih-lebihkan data."
  },
  {
    id: "twk-bhs-063",
    subPattern: "ide-pokok-paragraf-dan-penalaran-wacana",
    difficulty: "sulit",
    prompt:
      "Bacalah dua kutipan berikut. Teks 1: \"Penerapan skema kerja fleksibel berbasis hasil bagi aparatur di unit analisis kebijakan terbukti menghemat biaya listrik kantor dan meningkatkan kepuasan kerja tanpa menurunkan ketepatan target bulanan.\" Teks 2: \"Sebaliknya, pada unit layanan tatap muka di loket kecamatan, kerja jarak jauh justru memicu antrean panjang warga lansia dan memperlambat penyelesaian berkas fisik yang membutuhkan verifikasi langsung.\" Titik temu gagasan yang paling rasional berdasarkan kedua kutipan teks tersebut adalah ...",
    options: [
      "Seluruh instansi pemerintahan wajib menghapus sistem kerja fleksibel karena terbukti menurunkan kualitas pelayanan bagi warga lansia",
      "Kerja jarak jauh harus diterapkan secara seragam di semua loket kecamatan demi menghemat anggaran listrik dan alat tulis kantor",
      "Kepuasan kerja pegawai selalu berbanding terbalik dengan kecepatan penyelesaian seluruh jenis berkas administrasi masyarakat",
      "Kebijakan pengaturan pola kerja aparatur perlu disesuaikan secara diferensial menurut karakteristik tugas unit kerja, bukan diterapkan secara seragam",
      "Biaya operasional kantor pemerintah di tingkat pusat selalu lebih besar daripada kebutuhan anggaran pelayanan di tingkat kecamatan"
    ],
    answer: "D",
    explanation:
      "Teks 1 memperlihatkan keberhasilan kerja fleksibel pada unit analisis kebijakan (pekerjaan kognitif berbasis hasil), sedangkan Teks 2 menunjukkan kegagalannya pada unit layanan tatap muka fisik. Sintesis atau titik temu paling logis dari kedua temuan tersebut adalah perlunya kebijakan pola kerja yang dibedakan berdasarkan sifat layanan tiap unit, alih-alih diseragamkan.",
    tip: "Ketika dua teks menyajikan hasil berbeda pada konteks berbeda, carilah simpulan sintesis yang memadukan syarat keberlakuannya secara proporsional."
  },
  {
    id: "twk-bhs-064",
    subPattern: "ide-pokok-paragraf-dan-penalaran-wacana",
    difficulty: "sulit",
    prompt:
      "Bacalah wacana analitis berikut: \"Laporan ketenagakerjaan daerah tahun ini mencatat penurunan tingkat pengangguran terbuka sebesar 1,4 persen dibandingkan tahun lalu. Namun, pada periode yang sama, proporsi pekerja sektor informal tanpa jaminan sosial ketenagakerjaan justru melonjak tajam dan rata-rata pendapatan riil rumah tangga tidak mengalami perbaikan berarti.\" Asumsi atau simpulan evaluatif yang paling tepat untuk membaca fenomena paradoks tersebut adalah ...",
    options: [
      "Penurunan angka pengangguran terbuka selalu menandakan meningkatnya kesejahteraan ekonomi dan kepastian perlindungan kerja seluruh penduduk",
      "Data penurunan angka pengangguran terbuka tersebut pasti dipalsukan oleh petugas pencacah lapangan di seluruh wilayah kabupaten",
      "Menurunnya angka pengangguran terbuka belum otomatis mencerminkan terciptanya pekerjaan layak apabila serapan tenaga kerja didominasi sektor informal rentan",
      "Pekerja sektor informal tidak memerlukan jaminan sosial ketenagakerjaan maupun peningkatan pendapatan riil selama masih memiliki status bekerja",
      "Pemerintah daerah harus menutup seluruh usaha sektor informal agar statistik tingkat pengangguran terbuka kembali meningkat tahun depan"
    ],
    answer: "C",
    explanation:
      "Teks menyoroti ketidaksinkronan antara perbaikan statistik pengangguran terbuka dan rendahnya kualitas kerja (melonjaknya sektor informal tanpa jaminan sosial serta stagnannya pendapatan riil). Implikasi evaluatif yang tepat adalah bahwa indikator jumlah orang bekerja belum mencerminkan kualitas atau kelayakan pekerjaan yang tercipta.",
    tip: "Waspadai paradoks indikator: jika satu angka membaik tetapi indikator kualitas di sebelahnya memburuk, simpulkan keterbatasan indikator tunggal tersebut."
  },
  {
    id: "twk-bhs-065",
    subPattern: "diksi-kata-baku-dan-imbuhan",
    difficulty: "mudah",
    prompt:
      "Dalam penyusunan dokumen administrasi dan korespondensi hukum pemerintahan, deretan kata berikut yang seluruhnya tertulis secara baku menurut Kamus Besar Bahasa Indonesia (KBBI) adalah ...",
    options: [
      "Azas, ijasah, ijin, nasehat, dan hutang",
      "Asas, ijazah, izin, nasihat, dan utang",
      "Asas, ijazah, ijin, nasihat, dan mengubah",
      "Azas, ijazah, izin, nasehat, dan merubah",
      "Asas, ijasah, izin, nasihat, dan utang"
    ],
    answer: "B",
    explanation:
      "Bentuk kata baku menurut KBBI adalah \"asas\" (bukan azas), \"ijazah\" (bukan ijasah), \"izin\" (bukan ijin), \"nasihat\" (bukan nasehat), dan \"utang\" (bukan hutang). Selain itu, bentuk berimbuhan baku dari kata dasar \"ubah\" adalah \"mengubah\", bukan \"merubah\" karena fonem awal vokal \"u\" mendapat alomorf meng-.",
    tip: "Periksa tiap kata satu per satu; kata serapan Arab yang sudah dibakukan seperti asas, ijazah, izin, dan nasihat sering mengecoh pelafalannya."
  },
  {
    id: "twk-bhs-066",
    subPattern: "diksi-kata-baku-dan-imbuhan",
    difficulty: "mudah",
    prompt:
      "Perbedaan makna antara imbuhan peN- (pelaku tindakan) dan pe- (pihak yang dikenai tindakan atau berkegiatan di bidang tertentu) sering memicu kekeliruan makna. Kalimat berikut yang menggunakan kata berimbuhan peN- atau pe- secara tepat adalah ...",
    options: [
      "Seluruh penatar diklat duduk rapi mendengarkan materi yang sedang disampaikan oleh seorang petatar senior",
      "Petugas pesuluh pertanian menyampaikan materi penyuluhan kepada para penyuluh koperasi desa",
      "Seorang pengajar baru di sekolah menengah duduk tekun menyimak materi dasar yang diterangkan pelajar kelas satu",
      "Para penyuruh kerja diminta hadir tepat waktu karena pesuruh kantor akan membagi tugas kebersihan ruangan",
      "Sebagai petatar yang baru diangkat menjadi aparatur, ia berkewajiban menyimak seluruh arahan dari penatar utama"
    ],
    answer: "E",
    explanation:
      "Dalam pasangan kata bersinonim-struktural: \"penatar\" berarti orang yang menatar (pemberi pelatihan/instruktur), sedangkan \"petatar\" berarti orang yang ditatar (peserta pelatihan). Demikian pula \"penyuluh\" adalah pihak yang memberi penyuluhan, sedangkan \"pesuluh\" adalah pihak yang disuluh. Pilihan yang membalik peran penatar dan petatar atau menyamakan penyuluh dengan pesuruh keliru secara semantis.",
    tip: "Bedakan pola makna: peN- (yang melakukan/memberi: penatar, penyuluh, pengajar) melawan pe- (yang menerima/menjalani: petatar, pesuluh, pelajar)."
  },
  {
    id: "twk-bhs-067",
    subPattern: "diksi-kata-baku-dan-imbuhan",
    difficulty: "sedang",
    prompt:
      "Penerapan kaidah peluluhan fonem awal K, P, T, dan S ketika mendapat awalan meN- atau gabungan meN- + per- yang paling tepat terdapat pada kalimat ...",
    options: [
      "Kepala dinas bertekad memelopori gerakan tertib arsip sekaligus memperbarui sistem layanan aduan daring",
      "Tim perumus regulasi sedang memerhatikan setiap masukan dari tokoh masyarakat untuk memperjelas pasal sanksi",
      "Pemerintah daerah terus mempedulikan usulan warga terpencil dengan memperluas jaringan jalan penghubung desa",
      "Biro kepegawaian berusaha mensinkronkan data absensi pegawai agar dapat memperlancar pencairan tunjangan kinerja",
      "Lembaga pengawasan berupaya mengkritisi pola pengadaan barang sekaligus mentertibkan laporan penggunaan aset"
    ],
    answer: "A",
    explanation:
      "Kata dasar \"pelopor\" berawal huruf p yang diikuti vokal e, sehingga wajib luluh menjadi \"memelopori\". Sebaliknya, pada kata \"memperbarui\", unsur \"per-\" adalah imbuhan kausatif (bukan bagian kata dasar \"baru\"), sehingga huruf p pada \"per-\" tidak luluh. Bentuk keliru muncul pada \"memerhatikan\" (seharusnya memperhatikan), \"mempedulikan\" (seharusnya memedulikan), \"mensinkronkan\" (seharusnya menyinkronkan), dan \"mentertibkan\" (seharusnya menertibkan).",
    tip: "Pisahkan dulu awalan 'per-' dari kata dasarnya: 'per-' tidak pernah luluh (memperbarui, memperhatikan), sedangkan K/P/T/S awal kata dasar + vokal wajib luluh (memelopori, memedulikan)."
  },
  {
    id: "twk-bhs-068",
    subPattern: "diksi-kata-baku-dan-imbuhan",
    difficulty: "sedang",
    prompt:
      "Pemilihan diksi yang cermat memperhatikan kolokasi dan ketepatan makna kontekstual kata bersinonim. Kalimat di bawah ini yang menggunakan pilihan kata paling tepat adalah ...",
    options: [
      "Rapat evaluasi anggaran triwulan pertama itu dimulai tepat pada jam 09.00 WIB di ruang rapat utama",
      "Para petugas posko darurat bergiliran memantau ketinggian debit air sungai setiap dua jam sekali",
      "Masing-masing pegawai diwajibkan mengisi daftar hadir elektronik sebelum memasuki ruang kerja masing-masing",
      "Setiap peserta ujian dilarang keras bercakap-cakap atau menyontek hasil pekerjaan peserta lain selama tes berlangsung",
      "Kepala bagian keuangan menanyakan kepada bendahara mengenai jumlah anggaran yang belum sempat terserap"
    ],
    answer: "D",
    explanation:
      "Kalimat \"Setiap peserta ujian dilarang keras bercakap-cakap atau menyontek hasil pekerjaan peserta lain...\" memakai ragam tulis baku dan kata berimbuhan tepat (\"menyontek\" berasal dari kata dasar sontek yang mengalami peluluhan huruf s). Kesalahan diksi dan kolokasi muncul pada \"jam 09.00\" (seharusnya \"pukul 09.00\" untuk titik waktu), \"setiap dua jam sekali\" (pleonasme; cukup \"dua jam sekali\" atau \"setiap dua jam\"), \"Masing-masing pegawai\" (kata masing-masing tidak langsung diikuti kata benda), serta \"menanyakan kepada bendahara\" (verba transitif menanyakan harus langsung diikuti objek hal yang ditanyakan, bukan preposisi kepada).",
    tip: "Bedakan 'pukul' (titik waktu) vs 'jam' (durasi), jangan meletakkan nomina langsung sesudah 'masing-masing', dan bedakan 'bertanya kepada' vs 'menanyakan [hal]'."
  },
  {
    id: "twk-bhs-069",
    subPattern: "diksi-kata-baku-dan-imbuhan",
    difficulty: "sedang",
    prompt:
      "Dalam bahasa Indonesia resmi, kata \"canggih\", \"seronok\", \"khalayak\", dan \"mangkus\" memiliki makna leksikal khas dalam KBBI yang kerap disalahpahami. Kalimat berikut yang menggunakan salah satu kata tersebut sesuai makna baku KBBI adalah ...",
    options: [
      "Seluruh hadirin termasuk khalayak ramai di luar gedung diminta menjaga ketenangan selama sidang berlangsung",
      "Penataan taman kota yang asri dan tertib tersebut sangat seronok dipandang oleh para pengunjung akhir pekan",
      "Penggunaan aplikasi telepon pintar yang sangat sederhana tersebut dianggap sebagai terobosan teknologi paling canggih",
      "Proses birokrasi berbelit-belit hingga berbulan-bulan itu merupakan contoh tata kelola layanan yang sangat mangkus",
      "Karena belum memahami cara kerja mesin fotokopi, pegawai magang itu menyebut alat sederhana tersebut terlalu canggih"
    ],
    answer: "B",
    explanation:
      "Dalam KBBI, kata \"seronok\" berarti menyenangkan hati serta sedap dilihat atau didengar, sehingga tepat menggambarkan penataan taman kota yang asri dan tertib. Sebaliknya, \"khalayak ramai\" merupakan pleonasme karena \"khalayak\" sudah bermakna orang banyak, \"mangkus\" berarti berhasil guna atau efektif (bertentangan dengan proses berbelit-belit), dan \"canggih\" berarti rumit, kompleks, atau modern sehingga tidak tepat disematkan pada sistem yang sangat sederhana.",
    tip: "Rujuk makna leksikal KBBI, bukan konotasi populer: 'seronok' bermakna sedap dipandang/menyenangkan hati, 'mangkus' berarti efektif, dan 'khalayak' sudah bermakna orang banyak."
  },
  {
    id: "twk-bhs-070",
    subPattern: "diksi-kata-baku-dan-imbuhan",
    difficulty: "sedang",
    prompt:
      "Penggunaan kata depan atau partikel penghubung antarkata yang paling cermat dan baku sesuai kaidah semantis bahasa Indonesia terdapat pada kalimat ...",
    options: [
      "Seluruh berkas pengaduan warga telah diserahkan ke kepala dinas untuk segera ditindaklanjuti",
      "Perbedaan pendapat di antara dua tim perencana itu dapat diselesaikan melalui musyawarah terbuka",
      "Semua pegawai honorer harus patuh dan setia kepada peraturan kepegawaian yang berlaku saat ini",
      "Pelatihan keselamatan kerja ini ditujukan untuk para teknisi lapangan di lingkungan dinas perhubungan",
      "Perbedaan pendapat antara kedua tim perencana itu berhasil diselesaikan melalui musyawarah secara terbuka"
    ],
    answer: "E",
    explanation:
      "Kata depan \"antara\" dipakai untuk menyatakan hubungan atau perbandingan di antara dua pihak (\"antara kedua tim perencana\"), sedangkan \"di antara\" lazim menandai posisi atau pilihan di tengah kelompok berjumlah tiga atau lebih. Kesalahan preposisi pada kalimat lain meliputi penggunaan \"ke\" untuk orang/jabatan (seharusnya \"kepada kepala dinas\"), \"kepada\" untuk peraturan/benda tak bernyawa (seharusnya \"terhadap peraturan\"), serta \"ditujukan untuk\" (seharusnya \"ditujukan kepada\" atau \"diperuntukkan bagi\").",
    tip: "Bedakan preposisi sasaran orang ('kepada' untuk jabatan/manusia), lokasi/kelompok ('di antara'), perbandingan relasional ('antara'), dan aturan/hal ('terhadap')."
  },
  {
    id: "twk-bhs-071",
    subPattern: "diksi-kata-baku-dan-imbuhan",
    difficulty: "sulit",
    prompt:
      "Cermati pembentukan kata benda abstrak (nominalisasi) dari gabungan kata kerja dan kata sifat berikut. Penulisan seluruh kata turunan dalam kalimat yang paling baku sesuai EYD V dan KBBI adalah ...",
    options: [
      "Proses pengambilalihan aset daerah serta pertanggungjawaban pengelolaannya memerlukan ketidaktergantungan tim audit",
      "Penandatanganan kesepakatan bersama itu bertujuan mencegah penyalah gunaan wewenang dan ketidak adilan layanan",
      "Keikutsertaan seluruh perangkat desa mempercepat penanggulangan masalah ketidakseimbangan gizi dan pengambil alihan lahan",
      "Pemberitahuan mengenai jadwal serah terima jabatan telah disampaikan guna menghindari kesalah pahaman antarunit kerja",
      "Ketidakpuasan masyarakat terhadap keterlambatan layanan memicu perlunya penyederhanaan alur dan penandatangan ulang kontrak"
    ],
    answer: "A",
    explanation:
      "Gabungan kata yang mendapatkan imbuhan awalan dan akhiran sekaligus (termasuk konfiks peN-...-an, ke-...-an, dan per-...-an) wajib ditulis serangkai seluruh unsurnya: \"pengambilalihan\", \"pertanggungjawaban\", \"ketidaktergantungan\", \"penandatanganan\", \"penyalahgunaan\", \"ketidakadilan\", \"keikutsertaan\", dan \"kesalahpahaman\". Pemisahan salah satu unsurnya (seperti \"penyalah gunaan\", \"pengambil alihan\", atau \"kesalah pahaman\") menyalahi kaidah pembentukan kata gabung berimbuhan rangkap.",
    tip: "Setiap gabungan kata yang dibungkus konfiks (peN-...-an, per-...-an, ke-...-an) harus digabung menjadi satu kata tanpa spasi."
  },
  {
    id: "twk-bhs-072",
    subPattern: "diksi-kata-baku-dan-imbuhan",
    difficulty: "sulit",
    prompt:
      "Kata serapan dari bahasa asing yang berakhiran -asi atau -isasi sering keliru diganti dengan akhiran tidak baku -ir dalam naskah pemerintahan. Kalimat berikut yang seluruh kata serapannya baku sesuai KBBI adalah ...",
    options: [
      "Panitia seleksi sedang mengonfirmir keabsahan berkas ijazah dan melegalisir salinan sertifikat peserta",
      "Tim teknis berupaya mengkoordinir seluruh relawan sebelum melakukan sosialisasi prosedur evakuasi bencana",
      "Kepala bagian umum menugaskan staf untuk mengorganisasi arsip kontrak sekaligus mengonfirmasi jadwal legalisasi dokumen",
      "Pemerintah kota berkomitmen menetralisir kawasan tercemar serta memfasilitasi standardisasi mutu air bersih warga",
      "Sekretariat lembaga telah memproklamirkan zona integritas guna meningkatkan akuntabilitas serta kualitas pelayanan publik"
    ],
    answer: "C",
    explanation:
      "Dalam KBBI, bentuk serapan kata kerja dari bahasa Belanda berakhiran -eer tidak dibakukan menjadi -ir (seperti mengonfirmir, melegalisir, mengkoordinir, menetralisir, atau memproklamirkan), melainkan diserap melalui bentuk nomina -asi yang diturunkan menjadi verba berawalan meN- (mengonfirmasi, melegalisasi, mengoordinasikan, menetralisasi, memproklamasikan, mengorganisasi). Selain itu, perhatikan peluluhan huruf k pada \"mengoordinasikan\" (dari kata dasar koordinasi).",
    tip: "Hindari akhiran tidak baku '-ir' (legalisir, koordinir, konfirmir, netralisir); gunakan bentuk baku '-asi' beserta peluluhan K-P-T-S yang tepat."
  },
  {
    id: "twk-bhs-073",
    subPattern: "naskah-dinas-dan-bahasa-negara",
    difficulty: "mudah",
    prompt:
      "Kedudukan Bahasa Indonesia sebagai bahasa nasional yang lahir melalui ikrar Sumpah Pemuda 28 Oktober 1928 berbeda dengan kedudukannya sebagai bahasa negara dalam Pasal 36 UUD 1945. Fungsi utama Bahasa Indonesia sebagai bahasa negara di antaranya adalah ...",
    options: [
      "Bahasa resmi kenegaraan, bahasa pengantar dunia pendidikan, dan alat komunikasi tingkat nasional untuk kepentingan pemerintahan",
      "Lambang kebanggaan kebangsaan, lambang identitas nasional, dan alat pemersatu antarsuku yang memiliki bahasa daerah berbeda",
      "Sarana pergaulan sehari-hari di lingkungan keluarga guna menggantikan seluruh peran bahasa ibu di daerah terpencil",
      "Alat komunikasi tidak resmi pada pertemuan adat lokal sekaligus pengganti aksara tradisional di seluruh wilayah nusantara",
      "Bahasa tunggal dalam seluruh transaksi perdagangan internasional tanpa perlu menerjemahkannya bagi mitra luar negeri"
    ],
    answer: "A",
    explanation:
      "Sebagai bahasa negara (UUD 1945 Pasal 36 dan UU No. 24 Tahun 2009 Pasal 25), Bahasa Indonesia berfungsi sebagai bahasa resmi kenegaraan, bahasa pengantar pendidikan nasional, bahasa komunikasi tingkat nasional untuk perencanaan dan pelaksanaan pembangunan serta pemerintahan, serta bahasa pengembangan kebudayaan nasional dan IPTEK. Adapun fungsi sebagai lambang kebanggaan kebangsaan, identitas nasional, dan alat pemersatu antarsuku merupakan fungsi Bahasa Indonesia dalam kedudukannya sebagai bahasa nasional.",
    tip: "Bedakan dua kedudukan: Bahasa Nasional (Sumpah Pemuda -> identitas, kebanggaan, pemersatu) vs Bahasa Negara (UUD 1945 -> resmi kenegaraan, pengantar pendidikan, pemerintahan)."
  },
  {
    id: "twk-bhs-074",
    subPattern: "naskah-dinas-dan-bahasa-negara",
    difficulty: "mudah",
    prompt:
      "Dalam tata naskah dinas pemerintahan mengenai penulisan rincian \"Lampiran\" dan \"Hal\" pada kepala surat dinas resmi, penulisan yang paling tepat dan baku adalah ...",
    options: [
      "Lampiran : 2 (dua) berkas. / Hal : Undangan rapat koordinasi.",
      "Lampiran : Dua berkas / Hal : Undangan Rapat Koordinasi",
      "Lampiran : - / Hal : UNDANGAN RAPAT KOORDINASI.",
      "Lampiran : 2 Lembar / Hal : Undangan rapat koordinasi,",
      "Lampiran : dua lembar. / Hal : Undangan Rapat Koordinasi."
    ],
    answer: "B",
    explanation:
      "Menurut pedoman tata naskah dinas (PermenPANRB / Peraturan ANRI) dan kaidah EYD V: jumlah lampiran tidak perlu ditulis ganda dengan angka dan huruf dalam kurung (cukup ditulis huruf dengan huruf awal kapital, misalnya \"Dua berkas\"), bagian \"Hal\" ditulis memakai huruf kapital di setiap awal kata utama (kecuali kata tugas), dan baik baris \"Lampiran\" maupun \"Hal\" tidak diakhiri tanda titik.",
    tip: "Ingat aturan kepala surat dinas: tanpa titik di akhir baris Lampiran dan Hal; jumlah lampiran tidak memakai angka ganda dalam kurung; Hal memakai kapital awal tiap kata utama."
  },
  {
    id: "twk-bhs-075",
    subPattern: "naskah-dinas-dan-bahasa-negara",
    difficulty: "sedang",
    prompt:
      "Berdasarkan Pasal 26, Pasal 27, dan Pasal 28 Undang-Undang Nomor 24 Tahun 2009 tentang Bendera, Bahasa, dan Lambang Negara, serta Lagu Kebangsaan, ketentuan penggunaan Bahasa Indonesia dalam dokumen kenegaraan dan pidato resmi pejabat negara adalah ...",
    options: [
      "Peraturan perundang-undangan daerah diperbolehkan disusun hanya dalam bahasa daerah demi menghormati otonomi khusus setempat",
      "Dokumen resmi negara seperti akta autentik dan sertifikat kependudukan hanya wajib berbahasa Indonesia di instansi pusat saja",
      "Pidato resmi Presiden, Wakil Presiden, dan pejabat negara lain di luar negeri mutlak dilarang diterjemahkan ke bahasa asing",
      "Bahasa Indonesia wajib digunakan dalam peraturan perundang-undangan, dokumen resmi negara, serta pidato resmi Presiden, Wakil Presiden, dan pejabat negara lain di dalam atau di luar negeri",
      "Pejabat negara yang berpidato pada forum diplomatik di luar negeri bebas memilih bahasa apa pun tanpa kaitan dengan regulasi bahasa negara"
    ],
    answer: "D",
    explanation:
      "Pasal 26 UU No. 24 Tahun 2009 mewajibkan penggunaan Bahasa Indonesia dalam peraturan perundang-undangan, Pasal 27 mewajibkannya dalam dokumen resmi negara (antara lain surat keputusan, akta, ijazah, sertifikat, dan dokumen pengadilan), dan Pasal 28 mewajibkannya dalam pidato resmi Presiden, Wakil Presiden, serta pejabat negara lainnya yang disampaikan di dalam maupun di luar negeri.",
    tip: "Ingat cakupan berurutan Pasal 26–28 UU No. 24 Tahun 2009: peraturan perundang-undangan (26), dokumen resmi negara (27), dan pidato resmi pejabat negara di dalam/luar negeri (28)."
  },
  {
    id: "twk-bhs-076",
    subPattern: "naskah-dinas-dan-bahasa-negara",
    difficulty: "sedang",
    prompt:
      "Seorang kepala dinas sedang menjalani masa cuti tahunan selama sepuluh hari kerja sehingga pimpinan daerah menunjuk sekretaris dinas untuk melaksanakan tugas harian jabatan tersebut hingga kepala dinas kembali bertugas. Penulisan sebutan jabatan sementara pada blok tanda tangan surat dinas yang tepat sesuai tata naskah dinas adalah ...",
    options: [
      "Plt. Kepala Dinas, karena pejabat definitif sedang tidak berada di kantor untuk sementara waktu",
      "u.b. Kepala Dinas, karena penunjukan dilakukan secara berjenjang oleh kepala dinas sebelum berangkat cuti",
      "Plh. Kepala Dinas, karena pejabat definitif masih ada dan hanya berhalangan sementara selama cuti",
      "a.n. Plt. Kepala Dinas, agar tanggung jawab hukum surat dinas tetap melekat pada kepala dinas yang cuti",
      "Pjs. Kepala Dinas, karena kekosongan jabatan terjadi akibat mutasi pejabat lama ke instansi kementerian"
    ],
    answer: "C",
    explanation:
      "Dalam tata naskah dinas pemerintahan, \"Plh.\" (Pelaksana Harian) ditunjuk apabila pejabat definitifnya masih ada tetapi berhalangan sementara (misalnya cuti, sakit sementara, atau perjalanan dinas). Sebaliknya, \"Plt.\" (Pelaksana Tugas) digunakan apabila jabatan tersebut belum memiliki pejabat definitif atau pejabat definitifnya berhalangan tetap (seperti pensiun, wafat, atau diberhentikan).",
    tip: "Bedakan dua status sementara: Plh. (pejabat definitif masih ada, berhalangan sementara seperti cuti/dinas) vs Plt. (belum ada pejabat definitif / berhalangan tetap)."
  },
  {
    id: "twk-bhs-077",
    subPattern: "naskah-dinas-dan-bahasa-negara",
    difficulty: "sedang",
    prompt:
      "Sesuai Pasal 29 dan Pasal 35 Undang-Undang Nomor 24 Tahun 2009, bagaimana pengaturan penggunaan Bahasa Indonesia dalam penyelenggaraan pendidikan nasional dan penulisan karya ilmiah di Indonesia?",
    options: [
      "Kewajiban berbahasa Indonesia dalam publikasi ilmiah hanya berlaku bagi perguruan tinggi negeri dan tidak berlaku bagi lembaga riset swasta",
      "Sekolah bertaraf internasional di seluruh wilayah Indonesia dilarang keras mengajarkan mata pelajaran apa pun menggunakan bahasa Indonesia",
      "Penulisan skripsi, tesis, dan disertasi oleh mahasiswa Indonesia wajib seluruhnya berbahasa Inggris agar diakui lembaga akreditasi luar negeri",
      "Bahasa daerah mutlak dilarang dipakai sebagai bahasa pengantar di kelas awal sekolah dasar walaupun bertujuan memudahkan pemahaman siswa",
      "Bahasa Indonesia wajib digunakan sebagai bahasa pengantar pendidikan nasional dan dalam penulisan karya ilmiah di Indonesia, kecuali untuk tujuan khusus mendukung kemampuan berbahasa asing atau bidang kajian tertentu"
    ],
    answer: "E",
    explanation:
      "Pasal 29 UU No. 24 Tahun 2009 mewajibkan Bahasa Indonesia sebagai bahasa pengantar pendidikan nasional, sambil membolehkan penggunaan bahasa daerah di tahap awal pendidikan untuk memudahkan penyampaian pengetahuan serta penggunaan bahasa asing guna mendukung kemampuan berbahasa asing peserta didik. Sejalan dengan itu, Pasal 35 mewajibkan Bahasa Indonesia dalam penulisan dan publikasi karya ilmiah di Indonesia dengan pengecualian untuk tujuan atau bidang kajian khusus, berlaku bagi lembaga pendidikan negeri maupun swasta.",
    tip: "Pasal 29 & 35 UU 24/2009 menempatkan Bahasa Indonesia sebagai bahasa utama pendidikan dan karya ilmiah nasional, sambil membuka pengecualian terukur bagi bahasa daerah dan bahasa asing."
  },
  {
    id: "twk-bhs-078",
    subPattern: "naskah-dinas-dan-bahasa-negara",
    difficulty: "sedang",
    prompt:
      "Seorang Kepala Bidang Perencanaan ingin menyampaikan permintaan data capaian program secara resmi kepada Kepala Bidang Anggaran yang masih berada di dalam satu dinas yang sama. Berdasarkan jenis-jenis naskah dinas pemerintahan, bentuk naskah dinas yang paling tepat digunakan untuk komunikasi internal antarunit tersebut adalah ...",
    options: [
      "Surat Dinas, karena memuat permohonan data resmi yang harus diarsipkan pada buku agenda eksternal",
      "Surat Edaran, karena berisi instruksi normatif yang mengikat seluruh masyarakat di wilayah kabupaten",
      "Pengumuman Resmi, karena permintaan data antarbidang bersifat terbuka dan perlu diketahui seluruh publik",
      "Nota Dinas, karena merupakan naskah dinas internal antarpejabat dalam satu lingkungan instansi yang sama",
      "Berita Acara, karena berfungsi mencatat kesaksian serah terima jabatan kepala bidang yang baru dilantik"
    ],
    answer: "D",
    explanation:
      "Dalam klasifikasi tata naskah dinas korespondensi, Nota Dinas digunakan sebagai sarana komunikasi kedinasan internal antarpejabat atau antarunit kerja di dalam satu instansi/lembaga yang sama. Surat Dinas digunakan untuk korespondensi dengan pihak di luar instansi, sedangkan Surat Edaran memuat pemberitahuan hal penting yang berlaku luas untuk menjadi pedoman pelaksanaan.",
    tip: "Komunikasi resmi di dalam satu instansi/kementerian menggunakan Nota Dinas, sedangkan korespondensi menuju pihak eksternal menggunakan Surat Dinas."
  },
  {
    id: "twk-bhs-079",
    subPattern: "naskah-dinas-dan-bahasa-negara",
    difficulty: "sulit",
    prompt:
      "Sebuah perusahaan distributor mengimpor perangkat elektronik rumah tangga untuk dipasarkan di seluruh Indonesia dengan kemasan dan buku petunjuk penggunaan yang seluruhnya masih tertulis dalam bahasa asing. Ditinjau dari Pasal 37 Undang-Undang Nomor 24 Tahun 2009 dan Perpres Nomor 63 Tahun 2019, bagaimana status hukum tindakan tersebut?",
    options: [
      "Diperbolehkan sepenuhnya selama merek dagang perusahaan tersebut sudah terdaftar secara resmi di negara asal produksinya",
      "Melanggar ketentuan karena informasi tentang produk barang atau jasa dalam negeri maupun luar negeri yang beredar di Indonesia wajib menggunakan Bahasa Indonesia",
      "Hanya diwajibkan menggunakan Bahasa Indonesia apabila produk tersebut dijual di toko milik pemerintah daerah atau BUMN",
      "Diperbolehkan cukup mencantumkan kode QR menuju situs web berbahasa asing tanpa perlu menyertakan teks Bahasa Indonesia di kemasan",
      "Wajib menghapus seluruh bahasa asing pada kemasan produk impor karena bahasa asing mutlak dilarang dicantumkan berdampingan"
    ],
    answer: "B",
    explanation:
      "Pasal 37 ayat (1) UU No. 24 Tahun 2009 menegaskan bahwa Bahasa Indonesia wajib digunakan dalam informasi tentang produk barang atau jasa produksi dalam negeri atau luar negeri yang beredar di Indonesia (meliputi label, petunjuk penggunaan, dan keterangan produk). Ayat (2) menyatakan bahwa informasi tersebut dapat dilengkapi dengan bahasa daerah atau bahasa asing sesuai keperluan—bukan meniadakan Bahasa Indonesia maupun melarang pencantuman pendampingan bahasa asing.",
    tip: "Pasal 37 UU 24/2009: informasi produk impor yang beredar di Indonesia wajib berbahasa Indonesia, dan boleh dilengkapi bahasa daerah atau asing sebagai pendamping."
  },
  {
    id: "twk-bhs-080",
    subPattern: "naskah-dinas-dan-bahasa-negara",
    difficulty: "sulit",
    prompt:
      "Perhatikan penggalan isi surat undangan dinas berikut: \"Dengan ini kami mengundang Bapak/Ibu untuk menghadiri rapat koordinasi yang akan diselenggarakan pada: Hari/Tanggal : Senin, 18 Mei 2026 / Pukul : 09.00 WIB s/d selesai / Tempat : Ruang Rapat Utama / Atas perhatiannya, kami ucapkan banyak terima kasih.\" Penyuntingan menyeluruh yang paling tepat agar naskah dinas tersebut sesuai EYD V dan tata naskah dinas baku adalah ...",
    options: [
      "Menghapus frasa \"Dengan ini\", mengubah \"Pukul\" menjadi \"Jam 09.00 WIB\", dan mengganti \"Atas perhatiannya\" menjadi \"Atas perhatian semuanya\"",
      "Mempertahankan huruf kapital pada \"Hari/Tanggal\", menambah kata \"Bapak/Ibu sekalian\", dan menulis \"09.00 s/d selesai\" agar lebih ringkas",
      "Memisahkan kalimat pengantar dengan tanda titik sebelum perincian, menulis \"Pukul : 09.00—selesai\", serta menutup surat dengan \"Demikian atas perhatiannya kami haturkan terima kasih\"",
      "Mengganti \"mengundang\" menjadi \"menghimbau\", menyisipkan tanda titik di akhir setiap baris perincian, dan menulis \"diucapkan terima kasih banyak\"",
      "Menghapus frasa \"Dengan ini\", menulis \"hari, tanggal\", \"waktu\", dan \"tempat\" dengan huruf awal kecil sebagai lanjutan kalimat, memakai \"pukul 09.00 WIB s.d. selesai\", serta mengubah penutup menjadi \"Atas perhatian Bapak/Ibu, kami mengucapkan terima kasih\""
    ],
    answer: "E",
    explanation:
      "Penyuntingan naskah dinas yang tepat menghilangkan ungkapan klise mubazir \"Dengan ini\" sebelum verba performatif \"kami mengundang\", menuliskan perincian lanjutan kalimat (\"hari, tanggal\", \"waktu\", \"tempat\") dengan huruf awal kecil karena merupakan bagian kalimat pengantar yang belum berakhir, menggunakan kata \"pukul\" untuk penunjuk waktu serta singkatan baku \"s.d.\" (bukan \"s/d\"), dan menutup surat dengan sapaan jelas serta subjek aktif \"kami mengucapkan terima kasih\" (menghindari bentuk rancu \"Atas perhatiannya\" maupun bentuk tidak baku \"menghimbau\" dan \"kami haturkan\").",
    tip: "Audit surat dinas dalam 4 titik: hapus klise pembuka ('Dengan ini'), pakai huruf kecil pada rincian lanjutan kalimat ('hari, tanggal', 'waktu', 'tempat'), pakai 's.d.', dan pakai subjek aktif pada penutup."
  }
];
