import type { QuestionDraft } from "@/modules/question-bank/domain/question";

export const bahasaIndonesiaBatch3Drafts: readonly QuestionDraft[] = [
  // =========================================================================
  // KELOMPOK 1: KALIMAT SUMBANG / TIDAK PADU (twk-bhs-081 s.d. twk-bhs-085)
  // =========================================================================
  {
    id: "twk-bhs-081",
    subPattern: "penalaran-wacana-dan-kalimat-sumbang",
    difficulty: "sedang",
    prompt:
      "Bacalah paragraf berikut dengan cermat: \"(1) Penerapan sertifikat tanah elektronik menjadi langkah strategis pemerintah untuk menutup celah pemalsuan dokumen kepemilikan lahan. (2) Melalui penyimpanan data spasial dan yuridis secara terenkripsi, risiko tumpang tindih bidang tanah serta praktik mafia tanah dapat ditekan sejak awal. (3) Selain meningkatkan kepastian hukum, sistem digital ini memudahkan masyarakat memverifikasi keabsahan dokumen tanpa harus berulang kali datang ke loket fisik. (4) Sejumlah gedung kantor pertanahan di kawasan kota lama masih mempertahankan arsitektur kolonial dengan kusen kayu jati berukir yang terawat rapi. (5) Oleh karena itu, percepatan alih media arsip pertanahan ke format elektronik perlu disertai sosialisasi yang menjangkau pemilik lahan hingga tingkat desa.\" Kalimat yang tidak padu sehingga mengganggu koherensi paragraf tersebut adalah ...",
    options: [
      "Kalimat (1)",
      "Kalimat (2)",
      "Kalimat (3)",
      "Kalimat (4)",
      "Kalimat (5)",
    ],
    answer: "D",
    explanation:
      "Gagasan utama paragraf tersebut membahas manfaat dan urgensi penerapan sertifikat tanah elektronik untuk mencegah sengketa serta mempermudah verifikasi dokumen. Kalimat (1), (2), (3), dan (5) saling bertautan secara logis dalam topik digitalisasi pertanahan. Sebaliknya, Kalimat (4) menyimpang dari kesatuan gagasan karena hanya menyoroti arsitektur kolonial dan kusen kayu gedung kantor pertanahan, meskipun sama-sama memuat kata \"pertanahan\".",
    tip: "Tentukan topik inti paragraf terlebih dahulu, lalu waspadai kalimat jebakan yang memakai kata kunci serupa tetapi membelokkan pokok bahasan.",
  },
  {
    id: "twk-bhs-082",
    subPattern: "penalaran-wacana-dan-kalimat-sumbang",
    difficulty: "sedang",
    prompt:
      "Cermati paragraf berikut: \"(1) Pengelolaan sampah berbasis pemilahan dari sumber rumah tangga merupakan kunci untuk memperpanjang usia operasional tempat pemrosesan akhir (TPA) di perkotaan. (2) Setiap dua tahun sekali, dinas lingkungan hidup mengadakan lelang pengadaan seragam kerja berbahan katun bagi seluruh petugas kebersihan lapangan. (3) Apabila sampah organik diolah menjadi kompos di tingkat kelurahan, volume timbulan yang diangkut ke TPA dapat berkurang hingga separuhnya. (4) Sementara itu, fraksi anorganik yang bersih dan terpilah memiliki nilai ekonomi lebih tinggi saat disalurkan melalui bank sampah. (5) Dengan pola hulu-hilir yang terintegrasi tersebut, beban anggaran pengangkutan dan risiko pencemaran lindi dapat diminimalkan secara berkelanjutan.\" Kalimat sumbang dalam paragraf di atas ditunjukkan oleh ...",
    options: [
      "Kalimat (1)",
      "Kalimat (2)",
      "Kalimat (3)",
      "Kalimat (4)",
      "Kalimat (5)",
    ],
    answer: "B",
    explanation:
      "Paragraf tersebut berfokus pada efektivitas pemilahan sampah dari tingkat rumah tangga untuk menekan volume sampah ke TPA dan mengurangi biaya pengelolaan. Kalimat (1), (3), (4), dan (5) membentuk alur gagasan sebab-akibat yang utuh mengenai pemilahan organik dan anorganik. Kalimat (2) menjadi kalimat sumbang karena membahas lelang seragam dinas petugas kebersihan yang tidak mendukung penjelasan mengenai mekanisme pemilahan sampah rumah tangga.",
    tip: "Uji keterkaitan setiap kalimat penjelas terhadap kalimat utama; kalimat yang membahas hal administratif di luar alur sebab-akibat topik utama biasanya sumbang.",
  },
  {
    id: "twk-bhs-083",
    subPattern: "penalaran-wacana-dan-kalimat-sumbang",
    difficulty: "sedang",
    prompt:
      "Perhatikan paragraf berikut: \"(1) Penguatan layanan puskesmas di wilayah tertinggal, terdepan, dan terluar (3T) menuntut kombinasi kebijakan penempatan sumber daya manusia dan dukungan teknologi kesehatan. (2) Pemberian insentif khusus serta jaminan pengembangan karier bagi dokter dan perawat terbukti meningkatkan masa tugas tenaga kesehatan di daerah terpencil. (3) Di sisi lain, pemanfaatan layanan telemedisin memungkinkan tenaga medis di puskesmas berkonsultasi langsung dengan dokter spesialis di rumah sakit rujukan provinsi. (4) Sinergi antara ketersediaan tenaga kesehatan dan konsultasi jarak jauh tersebut mampu mempercepat penanganan kasus kegawatdaruratan ibu dan anak. (5) Belakangan ini, sejumlah resor mewah di destinasi wisata internasional mulai menawarkan paket wisata kebugaran bertarif premium bagi pelancong mancanegara.\" Kalimat yang mengganggu kepaduan paragraf tersebut adalah ...",
    options: [
      "Kalimat (1)",
      "Kalimat (2)",
      "Kalimat (3)",
      "Kalimat (4)",
      "Kalimat (5)",
    ],
    answer: "E",
    explanation:
      "Keseluruhan paragraf mengulas strategi penguatan layanan kesehatan primer (puskesmas) di wilayah 3T melalui insentif tenaga medis dan pemanfaatan telemedisin. Kalimat (1) hingga (4) terjalin padu dari gagasan pokok, dua strategi pendukung, hingga dampak klinisnya. Kalimat (5) tidak padu karena melompat ke topik komersial wisata kebugaran di resor internasional yang sama sekali tidak berkaitan dengan akses layanan kesehatan di daerah 3T.",
    tip: "Pastikan kalimat penutup benar-benar menyimpulkan atau mempertegas topik paragraf, bukan menyelipkan informasi baru yang berbeda ranah.",
  },
  {
    id: "twk-bhs-084",
    subPattern: "penalaran-wacana-dan-kalimat-sumbang",
    difficulty: "sulit",
    prompt:
      "Bacalah paragraf berikut secara saksama: \"(1) Secara botanis, tanaman padi varietas aromatik telah dibudidayakan oleh masyarakat agraris di berbagai lembah sungai Asia Tenggara sejak ribuan tahun lalu. (2) Pengendalian inflasi pangan di daerah memerlukan koordinasi lintas wilayah melalui skema kerja sama antardaerah antara sentra produksi dan daerah defisit. (3) Melalui perjanjian pasokan antarprovinsi, pemerintah daerah dapat mengamankan distribusi beras, cabai, dan bawang merah sebelum terjadi lonjakan harga musiman. (4) Langkah tersebut diperkuat oleh pengelolaan cadangan pangan pemerintah daerah yang siap digelontorkan lewat operasi pasar saat pasokan menipis. (5) Kolaborasi logistik dan cadangan terukur ini terbukti menjaga daya beli kelompok berpendapatan rendah tetap stabil sepanjang tahun.\" Manakah kalimat yang tidak padu sekaligus alasan yang paling tepat?",
    options: [
      "Kalimat (1), karena mengulas sejarah botani padi alih-alih kebijakan stabilisasi pasokan dan inflasi pangan daerah",
      "Kalimat (2), karena memperkenalkan istilah kerja sama antardaerah yang tidak dibahas kembali pada kalimat berikutnya",
      "Kalimat (3), karena menyebutkan komoditas cabai dan bawang merah di luar komoditas beras sebagai bahan pangan pokok",
      "Kalimat (4), karena mengalihkan pembahasan dari distribusi lintas provinsi menuju peran cadangan pangan pemerintah daerah",
      "Kalimat (5), karena menyempitkan sasaran kebijakan stabilisasi pangan hanya pada kelompok berpendapatan rendah",
    ],
    answer: "A",
    explanation:
      "Kalimat sumbang tidak selalu berada di tengah atau akhir paragraf. Pada teks di atas, gagasan pokok justru terletak di Kalimat (2) tentang pengendalian inflasi pangan daerah lewat kerja sama antardaerah, yang kemudian dirinci oleh Kalimat (3) tentang perjanjian pasokan, diperkuat oleh Kalimat (4) mengenai cadangan pangan daerah, dan disimpulkan dampaknya pada Kalimat (5). Kalimat (1) menyimpang karena hanya menyajikan fakta historis-botanis tanaman padi di Asia Tenggara yang terputus dari pembahasan tata kelola inflasi pangan.",
    tip: "Jangan berasumsi kalimat pertama selalu menjadi kalimat utama; cek apakah kalimat (2)–(5) membentuk satu rantai topik yang justru meninggalkan kalimat (1).",
  },
  {
    id: "twk-bhs-085",
    subPattern: "penalaran-wacana-dan-kalimat-sumbang",
    difficulty: "sulit",
    prompt:
      "Cermati paragraf berikut dengan teliti: \"(1) Reformasi transparansi anggaran desa menuntut keterbukaan data sejak tahap penyusunan rencana kerja hingga pelaporan realisasi belanja. (2) Penerapan sistem informasi keuangan desa berbasis aplikasi memudahkan aparat pengawas internal memeriksa kesesuaian antara pos pengeluaran dan bukti transaksi. (3) Selain itu, produk anyaman bambu buatan perajin desa kini mulai menembus pasar ekspor Eropa berkat keikutsertaan dalam pameran dagang internasional. (4) Publikasi ringkasan Anggaran Pendapatan dan Belanja Desa melalui papan informasi terbuka serta portal daring juga mendorong partisipasi warga dalam mengawal proyek infrastruktur. (5) Dengan mekanisme pengawasan berlapis tersebut, risiko penyimpangan dana desa dapat dicegah sekaligus meningkatkan kepercayaan publik terhadap pemerintahan desa.\" Kalimat yang menyimpang dari kesatuan gagasan paragraf tersebut adalah ...",
    options: [
      "Kalimat (1), karena hanya menyinggung tahap perencanaan tanpa menjelaskan mekanisme sanksi hukum",
      "Kalimat (2), karena lebih menonjolkan peran aparat pengawas internal dibandingkan keterlibatan warga desa",
      "Kalimat (3), karena membahas ekspor kerajinan desa yang terlepas dari topik akuntabilitas dan pengawasan anggaran desa",
      "Kalimat (4), karena memadukan media papan informasi konvensional dengan publikasi melalui portal daring",
      "Kalimat (5), karena menggunakan kata penghubung penyimpul yang tidak merujuk pada kalimat sebelumnya",
    ],
    answer: "C",
    explanation:
      "Paragraf ini membahas reformasi transparansi dan pengawasan anggaran desa secara berlapis: mulai dari prinsip keterbukaan (1), pengawasan internal berbasis aplikasi (2), keterbukaan publik untuk partisipasi warga (4), hingga dampaknya dalam mencegah penyimpangan dana desa (5). Kalimat (3) merusak koherensi paragraf karena memasukkan informasi mengenai ekspor anyaman bambu dan pameran dagang meskipun diawali kata transisi \"Selain itu\" serta memuat kata \"desa\".",
    tip: "Waspadai konjungsi penambah seperti 'Selain itu' yang dipakai sebagai kamuflase; pastikan isi klausa di belakangnya masih satu fokus dengan gagasan pokok.",
  },

  // =========================================================================
  // KELOMPOK 2: INTI KALIMAT MAJEMUK PANJANG (twk-bhs-086 s.d. twk-bhs-090)
  // =========================================================================
  {
    id: "twk-bhs-086",
    subPattern: "penalaran-wacana-dan-kalimat-sumbang",
    difficulty: "sedang",
    prompt:
      "Bacalah kalimat kompleks berikut dengan cermat: \"Untuk mempercepat sinkronisasi data lintas instansi daerah yang selama ini masih tersebar di berbagai server terpisah, kementerian terkait meluncurkan portal layanan publik terpadu yang terhubung dengan identitas kependudukan nasional pada awal tahun ini.\" Inti kalimat tersebut adalah ...",
    options: [
      "Sinkronisasi data lintas instansi tersebar di berbagai server terpisah",
      "Portal layanan publik terpadu terhubung dengan identitas kependudukan nasional",
      "Kementerian terkait meluncurkan portal layanan publik terpadu",
      "Kementerian terkait mempercepat sinkronisasi data lintas instansi daerah",
      "Identitas kependudukan nasional mempercepat layanan publik pada awal tahun ini",
    ],
    answer: "C",
    explanation:
      "Struktur induk kalimat tersebut terdiri atas Subjek utama (\"kementerian terkait\"), Predikat transitif utama (\"meluncurkan\"), dan Objek utama (\"portal layanan publik terpadu\"). Bagian awal \"Untuk mempercepat sinkronisasi data...\" berfungsi sebagai keterangan tujuan, klausa \"yang terhubung dengan identitas kependudukan nasional\" merupakan perluasan objek, dan \"pada awal tahun ini\" adalah keterangan waktu sehingga tidak masuk ke dalam inti kalimat.",
    tip: "Pangkas seluruh frasa keterangan berpreposisi di awal/akhir kalimat ('Untuk...', 'pada...') dan klausa penjelas yang diawali kata 'yang' untuk menemukan S–P–O utama.",
  },
  {
    id: "twk-bhs-087",
    subPattern: "penalaran-wacana-dan-kalimat-sumbang",
    difficulty: "sedang",
    prompt:
      "Cermati kalimat majemuk berikut: \"Badan Pemeriksa Keuangan, lembaga negara yang memiliki kewenangan konstitusional mengaudit pengelolaan uang negara, menyerahkan laporan hasil pemeriksaan kepatuhan anggaran kementerian kepada pimpinan DPR dalam sidang paripurna yang berlangsung terbuka kemarin.\" Inti dari kalimat panjang tersebut adalah ...",
    options: [
      "Badan Pemeriksa Keuangan menyerahkan laporan hasil pemeriksaan",
      "Lembaga negara mengaudit pengelolaan uang negara secara konstitusional",
      "Pimpinan DPR menerima sidang paripurna secara terbuka kemarin",
      "Badan Pemeriksa Keuangan memiliki kewenangan konstitusional mengaudit anggaran",
      "Laporan hasil pemeriksaan kepatuhan anggaran berlangsung terbuka kemarin",
    ],
    answer: "A",
    explanation:
      "Inti kalimat dibangun dari unsur utama induk kalimat, yaitu Subjek (\"Badan Pemeriksa Keuangan\"), Predikat transitif (\"menyerahkan\"), dan Objek inti (\"laporan hasil pemeriksaan\"). Frasa \"lembaga negara yang memiliki kewenangan konstitusional mengaudit pengelolaan uang negara\" yang diapit dua koma hanyalah keterangan aposisi subjek, sedangkan \"kepada pimpinan DPR\" dan \"dalam sidang paripurna yang berlangsung terbuka kemarin\" merupakan keterangan tujuan serta keterangan tempat-waktu.",
    tip: "Keterangan aposisi yang diapit dua tanda koma setelah subjek bukan bagian inti kalimat; langsung lompati bagian aposisi tersebut untuk menemukan predikat utama.",
  },
  {
    id: "twk-bhs-088",
    subPattern: "penalaran-wacana-dan-kalimat-sumbang",
    difficulty: "sulit",
    prompt:
      "Perhatikan kalimat kebijakan berikut dengan teliti: \"Meskipun sebagian pemerintah kabupaten sempat mengusulkan penundaan kewajiban pelaporan berbasis elektronik karena keterbatasan jaringan internet di kecamatan terpencil, standar audit keamanan data kependudukan yang diterapkan sejak tahun lalu tetap diperketat secara berkala oleh pemerintah pusat.\" Inti kalimat tersebut adalah ...",
    options: [
      "Sebagian pemerintah kabupaten mengusulkan penundaan kewajiban pelaporan elektronik",
      "Keterbatasan jaringan internet menghambat pelaporan elektronik di kecamatan terpencil",
      "Standar audit keamanan data kependudukan diterapkan sejak tahun lalu",
      "Standar audit keamanan data kependudukan tetap diperketat",
      "Pemerintah pusat menunda kewajiban pelaporan elektronik di kecamatan terpencil",
    ],
    answer: "D",
    explanation:
      "Kalimat tersebut adalah kalimat majemuk bertingkat dengan anak kalimat konsesif di awal (\"Meskipun sebagian pemerintah kabupaten sempat mengusulkan...\"). Induk kalimatnya berstruktur pasif dengan Subjek utama \"standar audit keamanan data kependudukan\" dan Predikat utama \"tetap diperketat\". Klausa \"yang diterapkan sejak tahun lalu\" hanyalah perluasan subjek, sedangkan \"secara berkala oleh pemerintah pusat\" merupakan keterangan cara dan pelaku, sehingga inti kalimatnya adalah \"Standar audit keamanan data kependudukan tetap diperketat\".",
    tip: "Pada kalimat majemuk bertingkat yang diawali konjungsi subordinatif ('Meskipun...', 'Karena...', 'Apabila...'), inti kalimat selalu berada pada induk kalimat setelah tanda koma.",
  },
  {
    id: "twk-bhs-089",
    subPattern: "penalaran-wacana-dan-kalimat-sumbang",
    difficulty: "sulit",
    prompt:
      "Cermati kalimat berikut: \"Berdasarkan rekomendasi tim ahli tata ruang pesisir mengenai ancaman abrasi ekstrem akibat kenaikan muka air laut, pemerintah provinsi merehabilitasi kawasan hutan bakau yang mengalami kerusakan berat sehingga fungsi pelindung pantai kembali pulih.\" Inti kalimat yang paling tepat adalah ...",
    options: [
      "Tim ahli tata ruang pesisir merekomendasikan penanganan ancaman abrasi ekstrem",
      "Kawasan hutan bakau mengalami kerusakan berat akibat kenaikan muka air laut",
      "Fungsi pelindung pantai kembali pulih setelah rehabilitasi kawasan pesisir",
      "Ancaman abrasi ekstrem mengakibatkan kenaikan muka air laut di pesisir",
      "Pemerintah provinsi merehabilitasi kawasan hutan bakau",
    ],
    answer: "E",
    explanation:
      "Bagian pembuka \"Berdasarkan rekomendasi tim ahli tata ruang pesisir mengenai ancaman abrasi ekstrem akibat kenaikan muka air laut\" adalah keterangan sebab/dasar berpreposisi. Bagian penutup \"sehingga fungsi pelindung pantai kembali pulih\" merupakan anak kalimat akibat, sedangkan \"yang mengalami kerusakan berat\" adalah perluasan objek. Dengan demikian, inti induk kalimatnya terdiri atas Subjek \"pemerintah provinsi\", Predikat transitif \"merehabilitasi\", dan Objek \"kawasan hutan bakau\".",
    tip: "Singkirkan anak kalimat akibat di akhir ('sehingga...') serta frasa berpreposisi di awal ('Berdasarkan...') agar subjek dan predikat induk kalimat terlihat jelas.",
  },
  {
    id: "twk-bhs-090",
    subPattern: "penalaran-wacana-dan-kalimat-sumbang",
    difficulty: "sulit",
    prompt:
      "Bacalah kalimat majemuk panjang berikut: \"Setelah melalui evaluasi menyeluruh terhadap keluhan kelompok tani di berbagai sentra produksi pangan nasional, upaya penataan ulang jalur distribusi pupuk bersubsidi yang melibatkan verifikasi biometrik penerima terbukti menekan potensi kebocoran kuota secara signifikan.\" Inti dari kalimat tersebut adalah ...",
    options: [
      "Kelompok tani menyampaikan keluhan di berbagai sentra produksi pangan nasional",
      "Upaya penataan ulang jalur distribusi pupuk bersubsidi menekan potensi kebocoran kuota",
      "Verifikasi biometrik penerima melibatkan evaluasi menyeluruh terhadap jalur distribusi pupuk",
      "Evaluasi menyeluruh menata ulang sentra produksi pangan nasional secara signifikan",
      "Pupuk bersubsidi mengalami kebocoran kuota di berbagai sentra produksi pangan",
    ],
    answer: "B",
    explanation:
      "Klausa pembuka \"Setelah melalui evaluasi menyeluruh...\" adalah keterangan waktu yang melesapkan subjek. Pada induk kalimatnya, Subjek utamanya berupa frasa nominal \"upaya penataan ulang jalur distribusi pupuk bersubsidi\" (dengan perluasan \"yang melibatkan verifikasi biometrik penerima\"), Predikat transitif utamanya \"(terbukti) menekan\", dan Objek utamanya \"potensi kebocoran kuota\", sementara \"secara signifikan\" merupakan keterangan cara. Jadi, inti kalimatnya adalah \"Upaya penataan ulang jalur distribusi pupuk bersubsidi menekan potensi kebocoran kuota\".",
    tip: "Saat subjek berbentuk frasa benda panjang diikuti klausa 'yang...', telusuri terus sampai menemukan kata kerja utama di luar klausa 'yang...' sebagai predikat induk.",
  },

  // =========================================================================
  // KELOMPOK 3: SIMPULAN TERSIRAT & PERNYATAAN SESUAI TEKS (twk-bhs-091 s.d. twk-bhs-095)
  // =========================================================================
  {
    id: "twk-bhs-091",
    subPattern: "penalaran-wacana-dan-kalimat-sumbang",
    difficulty: "sedang",
    prompt:
      "Bacalah wacana ekonomi publik berikut: \"Pemberian insentif tarif pajak daerah bagi pelaku usaha mikro, kecil, dan menengah (UMKM) di sektor kuliner serta kerajinan berhasil mendorong peningkatan jumlah usaha yang mendaftarkan nomor pokok wajib pajak. Meski begitu, laporan evaluasi akhir tahun menunjukkan bahwa rasio kepatuhan penyampaian surat pemberitahuan tahunan baru meningkat tipis dibandingkan tahun sebelumnya. Survei lapangan mengungkap bahwa sebagian besar pemilik usaha mikro masih kesulitan memahami alur formulir pelaporan daring karena tidak memiliki tenaga administrasi keuangan khusus. Sementara itu, kecamatan yang menyediakan klinik pendampingan pelaporan pajak secara berkala mencatat lonjakan kepatuhan pelaporan hingga dua kali lipat.\" Simpulan tersirat yang paling tepat berdasarkan teks tersebut adalah ...",
    options: [
      "Kebijakan insentif tarif pajak daerah tidak memiliki pengaruh apa pun terhadap kesadaran formalitas usaha mikro",
      "Insentif fiskal perlu diimbangi kemudahan prosedur dan pendampingan administrasi agar kepatuhan pelaporan pajak UMKM meningkat optimal",
      "Seluruh pelaku UMKM di sektor kuliner wajib mempekerjakan akuntan profesional sebelum mengajukan pendaftaran pajak daerah",
      "Sistem pelaporan pajak secara daring sebaiknya dihapus dan dikembalikan sepenuhnya ke formulir kertas manual di semua daerah",
      "Peningkatan rasio kepatuhan pelaporan pajak hanya mungkin tercapai apabila tarif pajak UMKM diturunkan menjadi nol persen",
    ],
    answer: "B",
    explanation:
      "Teks memaparkan bahwa insentif tarif berhasil meningkatkan pendaftaran wajib pajak, tetapi kepatuhan pelaporan tahunan masih rendah akibat hambatan teknis formulir daring; sebaliknya, klinik pendampingan mampu menggandakan kepatuhan. Simpulan tersirat yang proporsional tanpa over-generalization adalah perlunya menggabungkan insentif fiskal dengan penyederhanaan prosedur serta pendampingan administrasi. Klaim ekstrem seperti \"tidak memiliki pengaruh apa pun\", \"seluruh pelaku wajib\", atau \"satu-satunya cara nol persen\" melampaui bukti teks.",
    tip: "Hindari simpulan yang mengandung kata mutlak ('seluruh', 'tidak ada pengaruh apa pun', 'hanya mungkin') dan padukan dua fakta kunci yang kontras dalam teks.",
  },
  {
    id: "twk-bhs-092",
    subPattern: "penalaran-wacana-dan-kalimat-sumbang",
    difficulty: "sedang",
    prompt:
      "Cermati paragraf mengenai Sistem Pemerintahan Berbasis Elektronik (SPBE) berikut: \"Dalam lima tahun terakhir, banyak pemerintah daerah berlomba mengembangkan puluhan aplikasi layanan publik secara terpisah pada tiap dinas guna memenuhi target digitalisasi. Namun, ketiadaan standar pertukaran data antarsistem membuat warga tetap harus membuat banyak akun dan mengunggah ulang dokumen kependudukan yang sama setiap kali mengakses layanan berbeda. Kondisi tersebut tidak hanya membebani masyarakat, tetapi juga menyedot anggaran pemeliharaan server yang tumpang tindih di berbagai perangkat daerah. Oleh sebab itu, kebijakan pembaruan arsitektur SPBE kini mengarahkan instansi untuk menghentikan pembuatan aplikasi parsial dan mengintegrasikan layanan melalui portal terpadu berbasis repositori data bersama.\" Pernyataan yang paling sesuai dengan gagasan utama wacana tersebut adalah ...",
    options: [
      "Semakin banyak jumlah aplikasi yang dibangun oleh setiap dinas daerah, semakin tinggi pula kepuasan warga dalam mengakses layanan",
      "Anggaran pemeliharaan server di pemerintah daerah meningkat terutama karena rendahnya minat masyarakat menggunakan layanan daring",
      "Pembaruan arsitektur SPBE melarang seluruh pemerintah daerah memanfaatkan layanan digital untuk urusan administrasi kependudukan",
      "Pembuatan akun terpisah pada setiap aplikasi dinas terbukti mempercepat verifikasi dokumen kependudukan lintas instansi",
      "Efektivitas transformasi SPBE lebih ditentukan oleh integrasi dan interoperabilitas data lintas layanan daripada banyaknya jumlah aplikasi",
    ],
    answer: "E",
    explanation:
      "Paragraf tersebut mengkritik pendekatan digitalisasi yang hanya mengejar kuantitas aplikasi parsial karena justru menyulitkan warga dan memboroskan anggaran server, lalu menekankan arah baru berupa integrasi portal dan repositori data bersama. Dengan demikian, pernyataan yang paling sesuai adalah bahwa keberhasilan SPBE bertumpu pada integrasi dan pertukaran data (interoperabilitas), bukan banyaknya aplikasi terpisah.",
    tip: "Cocokkan pernyataan pada jawaban dengan arah solusi yang ditawarkan teks; singkirkan pernyataan yang membalik hubungan sebab-akibat di dalam paragraf.",
  },
  {
    id: "twk-bhs-093",
    subPattern: "penalaran-wacana-dan-kalimat-sumbang",
    difficulty: "sulit",
    prompt:
      "Bacalah wacana lingkungan berikut dengan cermat: \"Program reklamasi dan penghijauan lahan bekas tambang di sejumlah kabupaten selama lima tahun terakhir berhasil memulihkan tutupan tajuk hijau hingga melampaui target luasan tahunan. Akan tetapi, kajian tim ekolog menunjukkan bahwa dominasi penanaman monokultur satu jenis pohon cepat tumbuh belum mampu mengembalikan keragaman hayati tanah maupun menahan laju erosi saat curah hujan ekstrem. Di beberapa petak uji coba yang memadukan tanaman pionir lokal dengan beragam pohon berakar dalam, kemampuan tanah menyerap air hujan meningkat dua kali lipat dalam kurun dua tahun. Temuan lapangan tersebut mendorong perlunya revisi indikator keberhasilan reklamasi yang selama ini hanya bertumpu pada persentase luas lahan tertanam.\" Simpulan tersirat paling tepat dari wacana tersebut adalah ...",
    options: [
      "Seluruh proyek reklamasi bekas tambang selama lima tahun terakhir telah gagal total karena tidak menghasilkan tutupan vegetasi",
      "Pohon cepat tumbuh sama sekali dilarang ditanam pada lahan reklamasi karena selalu menyebabkan curah hujan ekstrem",
      "Keberhasilan pemulihan ekologis lahan bekas tambang perlu dinilai dari kesesuaian fungsi dan keragaman vegetasi, bukan sekadar luas tutupan hijau",
      "Penggunaan tanaman pionir lokal secara otomatis dapat mengembalikan seluruh spesies satwa liar asli dalam waktu kurang dari dua tahun",
      "Tingginya laju erosi di kawasan bekas tambang semata-mata disebabkan oleh faktor curah hujan tanpa dipengaruhi pemilihan jenis tanaman",
    ],
    answer: "C",
    explanation:
      "Teks membandingkan capaian kuantitatif (luas tutupan tajuk hijau dari tanaman monokultur yang gagal menahan erosi) dengan keberhasilan ekologis pada petak uji coba polikultur (kombinasi pionir lokal dan pohon berakar dalam yang menggandakan daya serap air), lalu menekankan perlunya revisi indikator evaluasi. Simpulan tersirat yang akurat adalah bahwa pemulihan ekologis harus diukur berdasarkan keragaman dan fungsi ekologis vegetasi, tidak hanya luas lahan hijau.",
    tip: "Perhatikan kalimat penutup yang menyoroti 'revisi indikator'; simpulan tersirat biasanya merumuskan ulang standar penilaian yang direkomendasikan teks.",
  },
  {
    id: "twk-bhs-094",
    subPattern: "penalaran-wacana-dan-kalimat-sumbang",
    difficulty: "sulit",
    prompt:
      "Cermati paragraf pendidikan berikut: \"Hasil asesmen kompetensi literasi di sejumlah kabupaten memperlihatkan bahwa penambahan ribuan koleksi buku cetak di perpustakaan sekolah tidak otomatis menaikkan kemampuan siswa dalam menganalisis teks informasional. Di kelompok sekolah yang mencatat lonjakan skor literasi, guru secara konsisten menyelenggarakan sesi diskusi bacaan, melatih siswa membandingkan sudut pandang sumber, serta menugaskan perangkuman argumen lintas mata pelajaran. Sebaliknya, pada sekolah yang hanya memajang koleksi buku baru tanpa jadwal membaca terstruktur dan pendampingan pedagogis, tingkat peminjaman buku maupun skor pemahaman bacaan cenderung stagnan. Pola ini konsisten muncul baik di sekolah perkotaan maupun di sekolah pedesaan dengan ukuran koleksi perpustakaan yang berbeda-beda.\" Simpulan tersirat yang paling tepat berdasarkan wacana tersebut adalah ...",
    options: [
      "Ketersediaan bahan bacaan baru berdampak nyata terhadap penguatan literasi apabila disertai praktik pembelajaran membaca yang aktif dan terarah",
      "Penambahan buku cetak di perpustakaan sekolah tidak lagi diperlukan selama guru rutin mengadakan diskusi lisan di dalam kelas",
      "Sekolah di wilayah pedesaan pasti memiliki skor literasi lebih rendah dibandingkan sekolah di perkotaan karena keterbatasan koleksi buku",
      "Peningkatan kemampuan memahami teks informasional siswa hanya dapat dicapai melalui mata pelajaran Bahasa Indonesia di luar jam sekolah",
      "Tingkat peminjaman buku di perpustakaan selalu berbanding terbalik dengan intensitas pendampingan pedagogis yang dilakukan oleh guru",
    ],
    answer: "A",
    explanation:
      "Teks menegaskan kontras antara pengadaan buku tanpa pendampingan (hasil stagnan) dan pengadaan buku yang disertai strategi pedagogis aktif oleh guru (skor melonjak), serta menyebut pola itu berlaku lintas lokasi dan ukuran koleksi. Artinya, bahan bacaan merupakan prasyarat yang baru efektif mendongkrak literasi jika dipadukan dengan pembelajaran aktif dan pembiasaan membaca terarah. Pernyataan bahwa buku tidak lagi diperlukan atau sekolah desa pasti lebih rendah bertentangan dengan isi teks.",
    tip: "Bedakan faktor 'tidak otomatis cukup' dengan 'tidak diperlukan'; jika X saja tidak cukup tanpa Y, simpulan tepatnya adalah X perlu dipadukan dengan Y.",
  },
  {
    id: "twk-bhs-095",
    subPattern: "penalaran-wacana-dan-kalimat-sumbang",
    difficulty: "sulit",
    prompt:
      "Bacalah wacana kesehatan publik berikut: \"Cakupan kepesertaan program jaminan kesehatan nasional di wilayah kepulauan tercatat telah melampaui 92 persen penduduk sejak dua tahun lalu. Meskipun demikian, data rekam medis rumah sakit rujukan daerah menunjukkan bahwa mayoritas pasien hipertensi dan diabetes dari pulau-pulau kecil baru datang berobat ketika sudah mengalami komplikasi berat. Penelusuran dinas kesehatan menemukan bahwa keterbatasan alat skrining dasar di fasilitas kesehatan tingkat pertama serta jadwal transportasi laut yang sangat bergantung pada cuaca membuat warga menunda pemeriksaan rutin. Akibatnya, biaya penanganan medis lanjutan yang ditanggung negara untuk pasien berstatus komplikasi menjadi jauh lebih tinggi dibandingkan biaya pencegahan dini.\" Simpulan tersirat yang paling tepat sesuai isi wacana tersebut adalah ...",
    options: [
      "Penduduk di wilayah kepulauan sengaja mengabaikan jaminan kesehatan nasional karena lebih mempercayai pengobatan tradisional",
      "Penyakit hipertensi dan diabetes di pulau-pulau kecil tidak dapat ditangani oleh rumah sakit rujukan meskipun sudah memiliki kartu kepesertaan",
      "Penurunan jumlah peserta jaminan kesehatan nasional diperlukan agar anggaran pembiayaan komplikasi rumah sakit dapat ditekan",
      "Tingginya kepesertaan jaminan kesehatan belum menjamin efektivitas layanan preventif apabila hambatan akses geografis dan sarana deteksi dini di layanan primer belum dibenahi",
      "Biaya penanganan komplikasi penyakit tidak menular selalu lebih rendah daripada pengadaan alat skrining dasar di seluruh fasilitas kesehatan",
    ],
    answer: "D",
    explanation:
      "Teks menyajikan paradoks antara tingginya cakupan kepesertaan asuransi (di atas 92%) dan tingginya rujukan kasus komplikasi berat yang mahal, lalu menjelaskan dua akar masalah utamanya: minimnya alat skrining di layanan primer serta kendala transportasi laut. Simpulan tersirat yang paling akurat adalah bahwa kepesertaan administratif saja belum menjamin layanan pencegahan dini berjalan efektif tanpa mengatasi hambatan geografis dan ketersediaan sarana deteksi dini.",
    tip: "Pada teks yang menyajikan paradoks antara capaian statistik awal dan masalah di lapangan, simpulkan bahwa capaian awal tersebut belum cukup tanpa pembenahan faktor penghambatnya.",
  },

  // =========================================================================
  // KELOMPOK 4: HUBUNGAN ANTARPARAGRAF / PERBAIKAN KOHESI & KONJUNGSI (twk-bhs-096 s.d. twk-bhs-100)
  // =========================================================================
  {
    id: "twk-bhs-096",
    subPattern: "penalaran-wacana-dan-kalimat-sumbang",
    difficulty: "sedang",
    prompt:
      "Bacalah dua paragraf singkat berikut:\n\nParagraf 1: \"Transformasi sistem rekrutmen aparatur sipil negara dirancang untuk menjamin penerapan prinsip meritokrasi secara objektif, transparan, dan bebas dari intervensi pihak mana pun. Prinsip tersebut menjadi fondasi utama dalam melahirkan birokrasi yang kompeten serta berintegritas.\"\n\nParagraf 2: \"Dalam pelaksanaannya, seluruh peserta seleksi mengikuti ujian berbasis Computer Assisted Test (CAT) yang menayangkan perolehan skor secara langsung di layar pemantauan publik. Selain itu, panitia memisahkan secara ketat unit penyusun butir soal dari pelaksana lapangan serta menerapkan audit jejak digital pada setiap tahapan pengolahan nilai.\"\n\nHubungan logis antara Paragraf 2 terhadap Paragraf 1 adalah ...",
    options: [
      "Hubungan pertentangan, karena Paragraf 2 menyanggah prinsip meritokrasi yang dikemukakan pada Paragraf 1",
      "Hubungan sebab-akibat, karena Paragraf 2 memaparkan kerugian yang ditimbulkan oleh kebijakan pada Paragraf 1",
      "Hubungan perbandingan, karena Paragraf 2 membandingkan sistem rekrutmen aparatur sipil negara dengan sektor swasta",
      "Hubungan kronologis, karena Paragraf 2 mengisahkan sejarah perkembangan ujian tertulis sejak masa kemerdekaan",
      "Hubungan perincian, karena Paragraf 2 menjabarkan mekanisme konkret pelaksanaan prinsip meritokrasi yang dikemukakan pada Paragraf 1",
    ],
    answer: "E",
    explanation:
      "Paragraf 1 menyajikan gagasan umum mengenai tujuan dan prinsip meritokrasi dalam transformasi rekrutmen ASN. Paragraf 2 kemudian menguraikan bentuk operasionalnya secara rinci (ujian CAT dengan skor langsung, pemisahan penyusun soal dan pelaksana, serta audit jejak digital), yang ditandai frasa pembuka \"Dalam pelaksanaannya\". Dengan demikian, Paragraf 2 memiliki hubungan perincian atau penjabaran terhadap Paragraf 1.",
    tip: "Kenali frasa transisi di awal paragraf kedua seperti 'Dalam pelaksanaannya', 'Secara spesifik', atau contoh-contoh konkret sebagai penanda hubungan perincian.",
  },
  {
    id: "twk-bhs-097",
    subPattern: "penalaran-wacana-dan-kalimat-sumbang",
    difficulty: "sedang",
    prompt:
      "Cermati paragraf rumpang berikut: \"Pembangunan fasilitas pengolahan limbah cair terpadu di kawasan industri memang membutuhkan biaya investasi awal yang cukup besar bagi pelaku usaha menengah. ... efisiensi konsumsi air daur ulang serta terhindarnya perusahaan dari sanksi pencemaran lingkungan justru memberikan penghematan signifikan dalam jangka panjang. ... pemerintah perlu memperluas akses pembiayaan hijau berbunga rendah agar transisi menuju industri ramah lingkungan dapat dijangkau lebih banyak pelaku usaha.\" Pasangan konjungsi antarkalimat yang paling tepat dan baku sesuai EYD Edisi V untuk mengisi kedua bagian rumpang tersebut adalah ...",
    options: [
      "Sedangkan, ... Sehingga, ...",
      "Akan tetapi, ... Padahal, ...",
      "Sebaliknya, ... Namun, ...",
      "Meskipun demikian, ... Oleh karena itu, ...",
      "Selain itu, ... Biarpun begitu, ...",
    ],
    answer: "D",
    explanation:
      "Kalimat kedua menyatakan pertentangan konsesif terhadap beban biaya awal pada kalimat pertama (meski mahal di awal, menguntungkan dalam jangka panjang), sehingga tepat diisi konjungsi antarkalimat \"Meskipun demikian,\". Kalimat ketiga menyatakan konsekuensi atau rekomendasi logis dari kedua pernyataan sebelumnya, sehingga tepat diisi \"Oleh karena itu,\". Adapun \"Sedangkan\" dan \"Sehingga\" merupakan konjungsi intrakalimat yang tidak baku dipakai sebagai konjungsi antarkalimat di awal kalimat.",
    tip: "Uji dua syarat sekaligus untuk konjungsi antarkalimat: hubungan makna antargagasan (pertentangan/akibat) dan status bakunya sebagai konjungsi antarkalimat (hindari 'Sedangkan,' atau 'Sehingga,' di awal kalimat).",
  },
  {
    id: "twk-bhs-098",
    subPattern: "penalaran-wacana-dan-kalimat-sumbang",
    difficulty: "sedang",
    prompt:
      "Bacalah dua paragraf berikut dengan saksama:\n\nParagraf 1: \"Pemerintah mempercepat pemberian subsidi pembelian kendaraan listrik di kawasan perkotaan untuk menekan tingkat polusi udara sekaligus mengurangi ketergantungan impor bahan bakar minyak. Kebijakan ini diharapkan memicu peralihan cepat masyarakat dari kendaraan bermotor konvensional menuju moda transportasi rendah emisi.\"\n\nParagraf 2: \"Kendati demikian, sejumlah peneliti energi mengingatkan bahwa bauran pembangkit listrik di berbagai wilayah masih didominasi pembangkit berbahan bakar batu bara. Selain itu, ekosistem pengelolaan dan daur ulang limbah baterai kendaraan listrik belum terbangun merata sehingga potensi penurunan emisi karbon secara menyeluruh masih terbatas.\"\n\nHubungan isi Paragraf 2 terhadap Paragraf 1 adalah ...",
    options: [
      "Hubungan pertentangan kritis yang memaparkan kendala struktural terhadap efektivitas tujuan kebijakan pada Paragraf 1",
      "Hubungan perincian yang menguraikan syarat administratif penerima subsidi pembelian kendaraan listrik pada Paragraf 1",
      "Hubungan penegasan ulang yang memperkuat klaim bahwa kendaraan listrik langsung menghapus seluruh emisi karbon",
      "Hubungan akibat langsung yang membuktikan keberhasilan subsidi dalam menurunkan impor bahan bakar minyak",
      "Hubungan analogi yang menyamakan proses produksi baterai kendaraan listrik dengan pengoperasian pembangkit batu bara",
    ],
    answer: "A",
    explanation:
      "Paragraf 1 memaparkan tujuan optimistis kebijakan subsidi kendaraan listrik untuk menekan polusi dan emisi. Paragraf 2 dibuka dengan konjungsi antarkalimat konsesif-kontrastif \"Kendati demikian\" lalu mengemukakan keterbatasan hulu-hilir (pembangkit batu bara dan belum siapnya daur ulang baterai) yang membatasi efektivitas penurunan emisi. Hal ini membentuk hubungan pertentangan kritis atau kontras evaluatif terhadap gagasan pada Paragraf 1.",
    tip: "Perhatikan penanda kontras seperti 'Kendati demikian', 'Namun', atau 'Di sisi lain' di awal paragraf kedua untuk membedakan hubungan pertentangan dari perincian atau penegasan.",
  },
  {
    id: "twk-bhs-099",
    subPattern: "penalaran-wacana-dan-kalimat-sumbang",
    difficulty: "sulit",
    prompt:
      "Bacalah paragraf bernomor berikut: \"(1) Pengadaan barang dan jasa pemerintah merupakan sektor yang rawan terhadap praktik persekongkolan harga apabila tidak dikawal secara transparan. (2) Untuk menutup celah tersebut, pemerintah memperbarui regulasi pengadaan melalui katalog elektronik nasional yang menampilkan rincian spesifikasi serta perbandingan harga produk. (3) Dalam peraturan pengadaan elektronik yang baru tersebut menjelaskan bahwa agar supaya seluruh proses transaksi dapat diawasi publik secara terbuka. (4) Dengan keterbukaan data pengadaan itu, penyimpangan anggaran dapat dideteksi lebih cepat oleh lembaga pengawas maupun masyarakat.\" Perbaikan Kalimat (3) yang paling efektif, baku, serta tetap kohesif dengan konteks paragraf adalah ...",
    options: [
      "Dalam peraturan pengadaan elektronik yang baru tersebut dijelaskan bahwa agar seluruh proses transaksi dapat diawasi publik secara terbuka.",
      "Peraturan pengadaan elektronik yang baru tersebut menegaskan bahwa seluruh proses transaksi wajib dapat diawasi publik secara terbuka.",
      "Di dalam peraturan pengadaan elektronik yang baru itu menjelaskan supaya seluruh proses transaksi dapat diawasi publik secara terbuka.",
      "Peraturan pengadaan elektronik yang baru tersebut menjelaskan tentang agar supaya seluruh proses transaksi diawasi oleh publik secara terbuka.",
      "Berdasarkan peraturan pengadaan elektronik yang baru tersebut menjelaskan bahwa seluruh proses transaksi harus diawasi secara terbuka oleh publik.",
    ],
    answer: "B",
    explanation:
      "Kalimat (3) pada teks asal tidak efektif karena dua kesalahan sekaligus: pertama, penggunaan preposisi \"Dalam\" sebelum subjek membuat kalimat aktif berpredikat \"menjelaskan\" kehilangan subjek; kedua, penggunaan konjungsi ganda yang pleonastis (\"bahwa agar supaya\"). Penghapusan preposisi di depan subjek (\"Peraturan pengadaan elektronik yang baru tersebut menegaskan bahwa...\") sekaligus menghilangkan konjungsi berlebih menjadikan kalimat bersubjek jelas, hemat, baku, dan tetap kohesif merujuk pada regulasi di Kalimat (2) serta menyambung ke frasa \"keterbukaan data pengadaan\" di Kalimat (4).",
    tip: "Periksa dua jebakan klasik kalimat tidak efektif sekaligus: preposisi di depan subjek ('Dalam...', 'Berdasarkan...' + verba aktif meN-) dan penumpukan konjungsi sinonim ('agar supaya', 'bahwa agar').",
  },
  {
    id: "twk-bhs-100",
    subPattern: "penalaran-wacana-dan-kalimat-sumbang",
    difficulty: "sulit",
    prompt:
      "Cermati dua paragraf berikut:\n\nParagraf 1: \"Hasil audit keamanan informasi di sejumlah instansi daerah menemukan bahwa banyak pengelola sistem masih mempertahankan kata sandi bawaan pabrikan, menunda pembaruan celah keamanan perangkat lunak, serta belum pernah melakukan simulasi penanganan serangan siber. Selain itu, pencadangan data harian masih disimpan pada jaringan server yang sama dengan sistem operasional utama.\"\n\nParagraf 2: \"Kelalaian tata kelola tersebut menyebabkan serangan perangkat pemeras (ransomware) mampu melumpuhkan portal layanan administrasi kependudukan selama berhari-hari. Akibat lanjutannya, data pribadi warga rentan disalahgunakan untuk penipuan daring, antrean layanan manual kembali menumpuk di loket dinas, dan tingkat kepercayaan masyarakat terhadap transformasi digital pemerintah merosot tajam.\"\n\nBerdasarkan kohesi dan penalaran wacana, hubungan antara Paragraf 2 terhadap Paragraf 1 adalah ...",
    options: [
      "Hubungan penegasan, karena Paragraf 2 mengulang daftar temuan audit keamanan pada Paragraf 1 dengan istilah berbeda",
      "Hubungan pertentangan, karena Paragraf 2 membantah temuan kelemahan pencadangan data yang dilaporkan pada Paragraf 1",
      "Hubungan sebab-akibat, karena Paragraf 2 menguraikan dampak operasional dan sosial yang timbul akibat kelalaian keamanan pada Paragraf 1",
      "Hubungan solusi-masalah, karena Paragraf 2 menyajikan langkah teknis pemulihan sistem untuk mengatasi temuan audit pada Paragraf 1",
      "Hubungan klasifikasi, karena Paragraf 2 mengelompokkan jenis-jenis perangkat lunak keamanan yang digunakan oleh pemerintah daerah",
    ],
    answer: "C",
    explanation:
      "Paragraf 1 memaparkan serangkaian faktor penyebab berupa kelalaian tata kelola keamanan informasi (kata sandi standar, penundaan pembaruan, ketiadaan simulasi, serta pencadangan satu jaringan). Paragraf 2 kemudian diawali pengacuan kohesif \"Kelalaian tata kelola tersebut menyebabkan...\" diikuti frasa \"Akibat lanjutannya...\" untuk memaparkan konsekuensi operasional dan sosial (lumpuhnya layanan, penyalahgunaan data, dan turunnya kepercayaan publik). Jadi, Paragraf 2 berada dalam hubungan sebab-akibat sebagai uraian dampak dari Paragraf 1.",
    tip: "Lacak frasa pengacu dan penanda kausal di awal paragraf kedua ('Kelalaian tersebut menyebabkan...', 'Akibat lanjutannya...') untuk memastikan arah hubungan sebab-akibat antarparagraf.",
  },
];
