import type { TkpQuestionDraft } from "@/modules/question-bank/domain/question";

export const sosialBudayaBatch3Drafts: readonly TkpQuestionDraft[] = [
  {
    id: "tkp-sos-081",
    subPattern: "dilema-inklusi-dan-sensitivitas-budaya",
    difficulty: "sedang",
    prompt:
      "Anda merupakan ASN baru yang ditempatkan di kecamatan wilayah 3T dengan norma adat ketat bahwa tamu dari luar hanya boleh menyampaikan maksud resmi setelah prosesi sapaan adat selesai dan tidak memotong pembicaraan tetua. Pada musyawarah kampung perdana, agenda verifikasi data penerima bantuan harus segera dilaporkan sore itu, sedangkan prosesi sapaan berlangsung cukup panjang. Sikap paling tepat yang Anda ambil adalah ...",
    options: [
      "Mengikuti prosesi sapaan adat dengan penuh hormat hingga tuntas, lalu menyampaikan agenda verifikasi secara ringkas sambil berkoordinasi sebelumnya dengan pendamping lokal mengenai alokasi waktu.",
      "Mengikuti seluruh rangkaian sapaan adat dengan tenang dan sopan hingga selesai meski harus melaporkan keterlambatan input data ke kantor kabupaten setelah acara berakhir.",
      "Menyampaikan izin secara sopan di sela jeda sapaan agar tim teknis Anda diperkenankan mulai memeriksa berkas warga di meja samping sambil prosesi adat terus berjalan.",
      "Meminta kepala desa mempersingkat sambutan para tetua adat karena formulir verifikasi bantuan pusat memiliki tenggat unggah harian yang tidak boleh terlewat.",
      "Langsung membagikan formulir verifikasi kepada warga yang duduk di barisan belakang agar pekerjaan administratif selesai lebih cepat tanpa menunggu prosesi usai.",
    ],
    optionScores: [5, 4, 3, 2, 1],
    answer: "A",
    explanation:
      "Skor 5 memadukan penghormatan tulus terhadap tata krama adat secara utuh dengan antisipasi manajemen waktu bersama pendamping lokal sehingga marwah budaya dan target administrasi sama-sama terjaga. Skor 4 juga santun dan patuh pada adat, tetapi bersifat pasif terhadap pengelolaan waktu sehingga baru merespons setelah terjadi keterlambatan pelaporan.",
    tip: "Hormati tuntas prosesi adat setempat sambil proaktif menyelaraskan alur waktu bersama pendamping lokal agar target dinas tetap aman.",
  },
  {
    id: "tkp-sos-082",
    subPattern: "dilema-inklusi-dan-sensitivitas-budaya",
    difficulty: "sedang",
    prompt:
      "Saat bertugas menyalurkan logistik program perbaikan gizi rutin di desa terpencil, Anda baru mengetahui bahwa hari kedatangan tim bertepatan dengan hari pantangan adat setempat yang melarang kendaraan bermesin memasuki batas dusun hingga matahari terbenam. Kepala dusun menyambut tim Anda dengan ramah di gerbang kampung. Langkah terbaik Anda adalah ...",
    options: [
      "Menunda penyaluran logistik ke hari berikutnya dan kembali ke ibu kota kecamatan demi mematuhi larangan adat sepenuhnya tanpa mengubah jadwal yang sudah ditetapkan kampung.",
      "Mematuhi larangan dengan memarkir kendaraan di luar batas dusun, lalu berkoordinasi bersama kepala dusun dan relawan lokal untuk membawa logistik bergotong royong atau menyepakati titik serah terima di balai perbatasan.",
      "Memohon dispensasi khusus kepada kepala dusun agar mobil dinas diperbolehkan masuk perlahan hingga puskesmas pembantu karena membawa barang kebutuhan kesehatan anak-anak.",
      "Menurunkan seluruh paket gizi di pos gerbang kampung lalu menitipkan daftar tanda terima kepada kepala dusun untuk dibagikan sendiri setelah pantangan adat selesai.",
      "Tetap mengarahkan kendaraan dinas masuk ke halaman balai desa dengan mematikan sirene karena menganggap urusan layanan negara berada di atas aturan pantangan kampung.",
    ],
    optionScores: [4, 5, 3, 2, 1],
    answer: "B",
    explanation:
      "Skor 5 menunjukkan kepatuhan penuh pada batas norma adat sekaligus menghadirkan solusi kolaboratif bersama perangkat lokal agar warga tetap menerima logistik tepat waktu. Skor 4 patuh dan menghargai pantangan adat, namun penundaan pulang tanpa mencari skema gotong royong di titik batas membuat layanan tertunda dan biaya perjalanan terbuang.",
    tip: "Ketika norma lokal membatasi akses teknis, patuhi batas adatnya dan bangun skema distribusi alternatif bersama tokoh lokal.",
  },
  {
    id: "tkp-sos-083",
    subPattern: "dilema-inklusi-dan-sensitivitas-budaya",
    difficulty: "sulit",
    prompt:
      "Sebagai anggota tim survei pembangunan jaringan air bersih di wilayah adat, Anda menemukan bahwa jalur pipa paling hemat anggaran melintasi mata air yang diyakini masyarakat sebagai kawasan keramat hak ulayat. Pimpinan proyek di kota meminta keputusan cepat agar kontrak tidak terhambat, sementara dewan adat belum menyetujui jalur tersebut. Sikap paling tepat Anda adalah ...",
    options: [
      "Menghentikan sementara seluruh pengukuran di sektor tersebut dan melaporkan kepada pimpinan bahwa warga menolak jalur awal sehingga perlu menunggu arahan tertulis baru.",
      "Mengusulkan kepada dewan adat agar mata air tetap diberi pagar pelindung setelah pipa dipasang sehingga manfaat air bersih dapat segera dirasakan seluruh dusun.",
      "Memetakan ulang alternatif jalur bersama perwakilan dewan adat dan insinyur lapangan, lalu menyajikan kajian perbandingan teknis serta risiko sosialnya kepada pimpinan untuk keputusan yang menghormati hak ulayat.",
      "Menjelaskan secara terbuka bahwa anggaran negara terbatas dan jika jalur paling hemat ditolak, pembangunan jaringan air bersih kemungkinan dialihkan ke kecamatan lain.",
      "Melanjutkan pemasangan patok sementara di tepi kawasan keramat agar jadwal survei selesai sesuai kontrak sambil berharap dewan adat melunak saat rapat kecamatan.",
    ],
    optionScores: [4, 3, 5, 2, 1],
    answer: "C",
    explanation:
      "Skor 5 memadukan penghormatan terhadap kawasan keramat hak ulayat dengan inisiatif solusi teknis berbasis partisipasi dan kajian objektif bagi pengambil keputusan. Skor 4 sudah berhati-hati mematuhi sensitivitas warga dan prosedur pelaporan, tetapi berhenti pada laporan hambatan tanpa menyiapkan opsi jalur alternatif yang solutif.",
    tip: "Dalam konflik teknis versus kawasan sakral adat, hadirkan opsi desain alternatif hasil pemetaan partisipatif untuk diajukan ke pimpinan.",
  },
  {
    id: "tkp-sos-084",
    subPattern: "dilema-inklusi-dan-sensitivitas-budaya",
    difficulty: "sulit",
    prompt:
      "Anda ditugaskan menggerakkan forum konsultasi kesehatan ibu dan anak di komunitas wilayah 3T yang memiliki tradisi rapat umum didominasi kaum laki-laki sehingga para ibu jarang berbicara di depan forum besar. Padahal masukan langsung para ibu sangat menentukan ketepatan layanan gizi dan persalinan. Pendekatan paling efektif Anda adalah ...",
    options: [
      "Meminta secara langsung di forum umum agar kaum laki-laki memberi kesempatan berbicara kepada para ibu demi memenuhi prinsip kesetaraan partisipasi program pemerintah.",
      "Mengumpulkan aspirasi kebutuhan kesehatan ibu melalui para suami dan tokoh adat laki-laki agar struktur komunikasi tradisional kampung tetap terjaga.",
      "Membagikan kuesioner tertulis kepada para ibu setelah rapat umum selesai agar mereka dapat mengisi keluhan secara diam-diam di rumah masing-masing.",
      "Berkonsultasi dengan tetua adat dan kader perempuan lokal untuk membuka sesi diskusi kelompok khusus ibu yang aman, lalu merangkum suaranya secara setara dalam musyawarah desa.",
      "Menyelenggarakan penyuluhan kesehatan khusus ibu secara terpisah dengan didampingi bidan desa agar para ibu merasa lebih nyaman menyampaikan keluhan tanpa tekanan.",
    ],
    optionScores: [2, 1, 3, 5, 4],
    answer: "D",
    explanation:
      "Skor 5 menerapkan strategi inklusi yang peka budaya dengan meminta restu tetua adat, memberdayakan kader perempuan lokal, dan memastikan aspirasi para ibu terintegrasi resmi ke musyawarah desa. Skor 4 sudah empatik dan memberi ruang aman terpisah bagi para ibu, tetapi belum menyambungkan hasilnya ke forum keputusan desa bersama tokoh adat.",
    tip: "Perluas partisipasi kelompok yang jarang bersuara melalui ruang aman yang disepakati tokoh lokal dan terhubung ke keputusan resmi.",
  },
  {
    id: "tkp-sos-085",
    subPattern: "dilema-inklusi-dan-sensitivitas-budaya",
    difficulty: "sedang",
    prompt:
      "Program nasional imunisasi balita sempat ditolak sejumlah tokoh lokal di wilayah kerja Anda karena istilah medis berbahasa asing dalam selebaran resmi disalahpahami warga sebagai bahan yang bertentangan dengan keyakinan dan tradisi perawatan bayi setempat. Sebagai koordinator sosialisasi lapangan, tindakan terbaik Anda adalah ...",
    options: [
      "Mengundang pejabat dinas kesehatan provinsi untuk memberikan penjelasan ilmiah yang lebih mendalam agar warga yakin terhadap keamanan vaksin nasional.",
      "Mengganti seluruh selebaran dengan poster bergambar sederhana yang hanya menekankan manfaat kesehatan anak tanpa mencantumkan istilah medis yang rumit.",
      "Menjelaskan ulang isi surat edaran kementerian secara sabar di balai desa sambil memastikan bahwa program ini resmi dari negara dan tidak dipungut biaya.",
      "Meminta aparat kecamatan ikut mendampingi sosialisasi ulang agar warga tidak mudah terpengaruh isu keliru yang beredar di tengah masyarakat.",
      "Berdialog empat mata bersama tokoh lokal dan tenaga kesehatan setempat untuk meluruskan makna istilah, menyusun materi dalam bahasa daerah yang akrab, serta melibatkan mereka dalam sosialisasi.",
    ],
    optionScores: [3, 4, 2, 1, 5],
    answer: "E",
    explanation:
      "Skor 5 menyelesaikan akar salah paham bahasa dan budaya secara kolaboratif dengan memuliakan peran tokoh lokal, menerjemahkan pesan ke bahasa daerah yang mudah dipahami, dan menjadikan mereka mitra sosialisasi. Skor 4 sudah adaptif menyederhanakan materi visual, namun masih satu arah dan belum membangun kepercayaan bersama tokoh setempat.",
    tip: "Atasi penolakan akibat salah paham istilah dengan dialog bersama tokoh lokal serta adaptasi pesan ke bahasa dan analogi budaya setempat.",
  },
  {
    id: "tkp-sos-086",
    subPattern: "dilema-inklusi-dan-sensitivitas-budaya",
    difficulty: "sedang",
    prompt:
      "Sosialisasi program nasional sertifikat tanah elektronik di sebuah kecamatan sempat memicu penolakan tokoh adat karena kalimat 'penarikan sertifikat fisik lama' dalam paparan awal ditafsirkan warga sebagai upaya negara mengambil alih tanah warisan leluhur. Langkah paling bijak yang Anda lakukan adalah ...",
    options: [
      "Mengakui secara terbuka kekurangtepatan penyampaian istilah, berdialog dengan tokoh adat menggunakan bahasa setempat tentang jaminan hukum kepemilikan, dan mendemonstrasikan mekanisme salinan cetak resminya.",
      "Menyampaikan permohonan maaf atas kesalahpahaman komunikasi yang terjadi lalu membagikan buku saku tanya jawab resmi kementerian agar warga dapat membacanya kembali dengan tenang.",
      "Meminta tokoh adat menyampaikan keberatannya secara tertulis kepada kepala kantor pertanahan agar dapat ditanggapi secara resmi melalui surat klarifikasi.",
      "Menjelaskan berulang kali bahwa digitalisasi sertifikat merupakan kebijakan nasional yang melindungi pemilik tanah dari mafia tanah sehingga tidak perlu dicurigai.",
      "Memfokuskan sosialisasi terlebih dahulu pada warga pendatang yang lebih memahami teknologi sambil menunggu warga adat bersedia mendaftar secara sukarela.",
    ],
    optionScores: [5, 4, 3, 2, 1],
    answer: "A",
    explanation:
      "Skor 5 meredakan kecemasan warga dengan kerendahan hati mengakui celah komunikasi, menjelaskan jaminan hukum dalam bahasa yang dimengerti tokoh adat, dan memperlihatkan bukti konkret salinan resmi agar rasa aman pulih. Skor 4 sudah santun meminta maaf dan memberi bahan bacaan resmi, tetapi kurang interaktif menjawab kekhawatiran emosional tokoh adat secara langsung.",
    tip: "Saat diksi birokrasi memicu kecurigaan warga, akui celah komunikasi dengan rendah hati, jelaskan dengan bahasa akrab, dan tunjukkan bukti konkretnya.",
  },
  {
    id: "tkp-sos-087",
    subPattern: "dilema-inklusi-dan-sensitivitas-budaya",
    difficulty: "sulit",
    prompt:
      "Dalam sosialisasi program nasional pengendalian kebakaran hutan, tokoh masyarakat adat menolak keras karena spanduk bertuliskan 'Larangan Total Membuka Lahan dengan Api' dianggap mengkriminalisasi tradisi ladang gilir-balik terkendali yang telah mereka jalankan turun-temurun untuk ketahanan pangan. Sikap paling tepat Anda sebagai petugas penyuluh adalah ...",
    options: [
      "Menurunkan spanduk tersebut sementara waktu agar tidak memancing emosi warga, lalu melaporkan penolakan tokoh adat ke atasan untuk mendapatkan revisi materi sosialisasi.",
      "Membuka ruang dialog setara bersama tokoh adat dan tim teknis untuk mendengarkan kearifan pengendalian api tradisional mereka, lalu menyepakati pedoman pembukaan lahan aman yang selaras dengan regulasi dan ketahanan pangan.",
      "Menjelaskan secara ramah bahwa aturan larangan membakar lahan dibuat untuk melindungi kesehatan masyarakat dari kabut asap dan berlaku sama di seluruh wilayah Indonesia.",
      "Mengajak tokoh adat menandatangani pernyataan komitmen menjaga hutan sambil menawarkan bantuan bibit tanaman keras sebagai pengganti ladang tradisional.",
      "Mengingatkan warga tentang ancaman sanksi pidana pembakaran hutan agar mereka memahami bahwa petugas hanya menjalankan amanat undang-undang.",
    ],
    optionScores: [4, 5, 3, 2, 1],
    answer: "B",
    explanation:
      "Skor 5 mengintegrasikan tujuan pelestarian lingkungan nasional dengan pengakuan atas kearifan lokal melalui dialog setara dan kesepakatan pedoman teknis yang aman serta sah secara hukum. Skor 4 tanggap meredam eskalasi dan melapor secara prosedural, namun belum mengambil inisiatif memfasilitasi titik temu substantif bersama masyarakat adat.",
    tip: "Hindari pendekatan seragam yang meniadakan tradisi lokal; cari titik temu antara kearifan adat dan tujuan regulasi nasional melalui dialog setara.",
  },
  {
    id: "tkp-sos-088",
    subPattern: "dilema-inklusi-dan-sensitivitas-budaya",
    difficulty: "sulit",
    prompt:
      "Saat sosialisasi layanan terpadu pencatatan kependudukan di wilayah pedalaman, banyak keluarga tersinggung dan enggan mendaftar karena narasumber awal menyebut perkawinan yang hanya dilaksanakan secara adat sebagai 'tidak sah', padahal maksudnya belum tercatat secara administratif negara. Sebagai ketua tim pelayanan keliling, respons terbaik Anda adalah ...",
    options: [
      "Mengingatkan narasumber di sela acara agar lebih berhati-hati memilih kata, lalu melanjutkan layanan pendaftaran bagi warga yang tetap bersedia mengurus dokumen kependudukan.",
      "Menjelaskan aturan undang-undang administrasi kependudukan secara tekstual agar warga memahami perbedaan pengertian sah secara adat dan sah secara hukum negara.",
      "Segera meluruskan secara hangat di hadapan tokoh masyarakat bahwa negara menghormati keabsahan perkawinan adat, menjelaskan bahwa pencatatan sipil bertujuan melindungi hak anak dan layanan publik, serta meninjau ulang panduan komunikasi tim.",
      "Meminta maaf kepada tokoh kampung atas kekeliruan ucapan narasumber dan menjelaskan dengan sopan manfaat akta pencatatan sipil bagi pendidikan anak-anak mereka.",
      "Menunda sesi sosialisasi lisan dan langsung membuka loket konsultasi individu agar warga yang membutuhkan akta tetap dapat dilayani tanpa perdebatan di forum.",
    ],
    optionScores: [2, 1, 5, 4, 3],
    answer: "C",
    explanation:
      "Skor 5 tidak hanya meluruskan salah ucap secara empatik dan memvalidasi kehormatan adat di depan tokoh masyarakat, tetapi juga melakukan perbaikan sistemik pada panduan komunikasi tim agar kejadian serupa tidak berulang di desa lain. Skor 4 sudah sopan meminta maaf dan mengedukasi manfaat layanan, namun belum membenahi standar komunikasi tim secara menyeluruh.",
    tip: "Ketika ucapan petugas melukai rasa hormat adat, luruskan segera secara empatik dengan menegaskan penghormatan negara sekaligus perbaiki SOP komunikasi tim.",
  },
  {
    id: "tkp-sos-089",
    subPattern: "dilema-inklusi-dan-sensitivitas-budaya",
    difficulty: "sedang",
    prompt:
      "Anda ditunjuk menjadi ketua panitia rapat kerja evaluasi tahunan unit yang dihadiri seluruh pegawai lintas daerah. Menjelang finalisasi undangan, Anda menyadari tanggal yang diusulkan bertepatan dengan hari suci keagamaan yang dirayakan oleh tiga orang pegawai dari kelompok keyakinan minoritas di unit Anda, sementara mayoritas pegawai lain sudah siap hadir. Keputusan terbaik Anda adalah ...",
    options: [
      "Tetap menyelenggarakan rapat kerja sesuai jadwal awal karena menyangkut mayoritas peserta, lalu memberikan dispensasi tidak hadir tanpa potongan kinerja bagi ketiga pegawai tersebut.",
      "Tetap melaksanakan rapat sesuai tanggal rencana dengan menyediakan tautan daring opsional bagi ketiga pegawai jika sewaktu-waktu sempat mengikuti paparan utama.",
      "Menanyakan langsung kepada ketiga pegawai tersebut apakah mereka bersedia menunda kegiatan ibadah keluarganya sebentar demi menghadiri sesi pembukaan rapat kerja.",
      "Mengusulkan penyesuaian tanggal rapat kerja kepada pimpinan dengan menyertakan kalender lintas hari besar keagamaan sebagai acuan jadwal kegiatan unit ke depan.",
      "Mengusulkan kepada pimpinan untuk menggeser tanggal rapat kerja satu hari agar ketiga pegawai tersebut tetap dapat beribadah dengan tenang dan hadir penuh dalam evaluasi.",
    ],
    optionScores: [3, 2, 1, 5, 4],
    answer: "D",
    explanation:
      "Skor 5 menjamin hak ibadah dan partisipasi setara pegawai minoritas pada rapat kali ini sekaligus membangun sistem pencegahan berupa rujukan kalender lintas keyakinan untuk seluruh agenda unit ke depan. Skor 4 sudah inklusif mengusulkan pergeseran tanggal demi keadilan rekan minoritas, tetapi hanya menyelesaikan satu kegiatan tanpa perbaikan perencanaan sistemik.",
    tip: "Inklusi jadwal kerja terbaik tidak sekadar memberi pengecualian individu, melainkan memastikan seluruh pegawai dapat hadir setara lewat perencanaan kalender lintas keyakinan.",
  },
  {
    id: "tkp-sos-090",
    subPattern: "dilema-inklusi-dan-sensitivitas-budaya",
    difficulty: "sedang",
    prompt:
      "Sebagai koordinator loket pelayanan publik yang beroperasi penuh Senin hingga Sabtu, Anda harus menyusun jadwal piket menjelang bulan Ramadan sekaligus menjaga ruang ibadah mingguan bagi pegawai beragama lain agar tidak ada pegawai yang merasa terbebani secara sepihak. Pendekatan pengelolaan jadwal paling inklusif adalah ...",
    options: [
      "Menyusun jadwal rotasi piket secara merata berdasarkan urutan abjad nama pegawai agar tidak ada kesan membedakan latar belakang keyakinan siapa pun.",
      "Memberikan kelonggaran pulang lebih awal khusus bagi pegawai yang berpuasa selama Ramadan dan meminta pegawai lain menutup sisa jam loket demi solidaritas.",
      "Mempersilakan pegawai bertukar jadwal piket secara mandiri sesama rekan kerja apabila ada agenda ibadah yang berbenturan dengan giliran loket.",
      "Memetakan kebutuhan jam ibadah seluruh pegawai lintas keyakinan sejak awal, lalu menetapkan jadwal giliran jaga yang proporsional agar loket tetap buka sesuai SLA.",
      "Melibatkan seluruh staf menyusun skema rotasi piket transparan berbasis saling menggantikan lintas hari ibadah dan hari raya sehingga beban kerja setara serta SLA layanan tetap terjaga.",
    ],
    optionScores: [2, 1, 3, 4, 5],
    answer: "E",
    explanation:
      "Skor 5 membangun keadilan resiprokal secara partisipatif dan transparan lintas keyakinan sepanjang tahun sehingga toleransi menjadi budaya tim yang setara tanpa mengorbankan standar pelayanan publik. Skor 4 sudah peka memetakan kebutuhan ibadah seluruh pegawai dan menjaga SLA, namun disusun sepihak oleh koordinator tanpa melibatkan musyawarah tim.",
    tip: "Susun jadwal layanan lintas keyakinan secara partisipatif dan resiprokal agar keadilan beban kerja dan mutu layanan publik sama-sama terjamin.",
  },
  {
    id: "tkp-sos-091",
    subPattern: "dilema-inklusi-dan-sensitivitas-budaya",
    difficulty: "sulit",
    prompt:
      "Instansi Anda rutin mengadakan jamuan keakraban dan pembinaan pegawai setiap akhir semester. Selama ini menu hidangan, waktu kegiatan, serta tata cara doa pembukaan selalu mengikuti kebiasaan mayoritas sehingga beberapa pegawai dengan pantangan makanan keagamaan dan keyakinan berbeda cenderung hanya duduk diam dan jarang ikut makan bersama. Sebagai panitia pelaksana tahun ini, inisiatif terbaik Anda adalah ...",
    options: [
      "Melakukan pendataan preferensi pantangan makanan dan kebutuhan ibadah secara inklusif sejak awal, menyiapkan menu berlabel jelas yang aman bagi semua, serta menggunakan doa bersama lintas keyakinan yang menyejukkan.",
      "Menyiapkan beberapa porsi makanan khusus bagi pegawai yang memiliki pantangan keagamaan apabila mereka melapor kepada panitia sehari sebelum acara berlangsung.",
      "Menghilangkan sesi doa pembukaan dan mengganti jamuan makan prasmanan dengan pemberian uang saku konsumsi agar setiap pegawai bebas memilih makanan sendiri.",
      "Meminta penyedia katering menambahkan menu sayuran dan buah lebih banyak di meja utama agar pegawai yang memiliki pantangan tetap memiliki pilihan makanan.",
      "Mempertahankan format acara seperti tahun-tahun sebelumnya karena sudah menjadi tradisi kantor, sambil mempersilakan pegawai lain menyesuaikan diri secara fleksibel.",
    ],
    optionScores: [5, 4, 2, 3, 1],
    answer: "A",
    explanation:
      "Skor 5 menciptakan rasa memiliki yang utuh bagi seluruh pegawai melalui pendataan proaktif, transparansi label menu yang aman bagi semua keyakinan, dan format doa inklusif yang menghormati keberagaman tanpa menghapus makna kebersamaan. Skor 4 menunjukkan niat baik menyediakan menu khusus, tetapi masih bersifat reaktif menunggu laporan dan belum membenahi inklusivitas rangkaian acara.",
    tip: "Bangun inklusivitas acara kantor secara proaktif dari tahap perencanaan—mulai dari pendataan kebutuhan, kejelasan menu, hingga tata acara yang merangkul semua.",
  },
  {
    id: "tkp-sos-092",
    subPattern: "dilema-inklusi-dan-sensitivitas-budaya",
    difficulty: "sedang",
    prompt:
      "Di gedung kantor layanan yang baru direnovasi dengan keterbatasan ruang, fasilitas musala sudah tersedia layak, sementara sekelompok kecil pegawai dari keyakinan lain mengusulkan adanya jadwal penggunaan ruang serbaguna yang tenang pada jam istirahat tertentu untuk doa bersama pekanan mereka. Sebagai penanggung jawab tata kelola ruang kantor, sikap Anda adalah ...",
    options: [
      "Menyetujui permohonan tersebut secara lisan setiap kali ruang serbaguna sedang tidak dipakai rapat dinas pada hari yang mereka minta.",
      "Menyusun jadwal penggunaan ruang serbaguna secara tertulis, terbuka, dan setara bagi seluruh kelompok keagamaan di luar jam layanan inti agar hak ibadah terpenuhi tanpa mengganggu tugas kantor.",
      "Menyarankan agar kegiatan doa bersama dilakukan di rumah ibadah terdekat di luar gedung kantor supaya ruang serbaguna tetap steril untuk kegiatan kedinasan.",
      "Menampung usulan tersebut untuk dibahas pada rapat anggaran tahun depan sembari mengusulkan pembangunan ruang ibadah tambahan apabila lahan memungkinkan.",
      "Menolak secara halus permohonan tersebut karena dikhawatirkan memicu permintaan serupa dari berbagai komunitas lain yang menyulitkan pengaturan ruang rapat.",
    ],
    optionScores: [4, 5, 2, 3, 1],
    answer: "B",
    explanation:
      "Skor 5 mewujudkan keadilan fasilitas negara secara terlembaga, transparan, dan setara bagi semua keyakinan meski ruang terbatas, tanpa mengganggu jam layanan publik. Skor 4 sudah terbuka dan toleran mengizinkan penggunaan ruangan, tetapi sifatnya informal dan tidak pasti sehingga rentan berbenturan jadwal atau terhenti saat pengelola berganti.",
    tip: "Dalam keterbatasan fasilitas kantor, pastikan akses ibadah lintas keyakinan diatur secara tertulis, transparan, dan setara di luar jam layanan inti.",
  },
  {
    id: "tkp-sos-093",
    subPattern: "dilema-inklusi-dan-sensitivitas-budaya",
    difficulty: "sedang",
    prompt:
      "Dalam rapat persiapan kegiatan lintas bidang, seorang rekan melontarkan candaan menirukan logat daerah asal pegawai lain sambil mengaitkannya dengan stereotip sifat keras dan sulit diajak berkompromi. Beberapa peserta tertawa canggung, sedangkan pegawai yang menjadi sasaran tampak diam menahan rasa tidak nyaman. Sebagai moderator rapat, tindakan paling bijak Anda adalah ...",
    options: [
      "Segera mengalihkan pembicaraan kembali ke agenda rapat berikutnya tanpa menyinggung candaan tersebut agar suasana tidak semakin tegang.",
      "Menegur keras rekan yang bercanda di hadapan seluruh peserta rapat dan memintanya menyampaikan permintaan maaf terbuka saat itu juga.",
      "Menetralkan suasana dengan menegaskan secara santun bahwa forum menghargai keberagaman latar belakang dan berfokus pada gagasan kerja, lalu mengajak rekan yang bercanda berdialog empat mata seusai rapat.",
      "Mengingatkan secara halus di forum bahwa rapat sebaiknya fokus pada substansi agenda tanpa bercanda, kemudian menanyakan kabar pegawai yang disasar seusai rapat.",
      "Ikut tersenyum tipis agar suasana tetap cair lalu memuji keunggulan kerja pegawai yang disasar supaya ia tidak merasa tersinggung.",
    ],
    optionScores: [3, 2, 5, 4, 1],
    answer: "C",
    explanation:
      "Skor 5 melindungi martabat korban di depan umum tanpa mempermalukan pelaku secara berlebihan yang dapat memicu polarisasi, lalu melanjutkannya dengan pembinaan empat mata agar stereotip tidak terulang. Skor 4 sudah menjaga fokus forum dan menunjukkan empati pascarapat kepada korban, namun belum memberi edukasi langsung kepada pelaku candaan stereotip.",
    tip: "Redam candaan stereotip di ruang kerja dengan menegakkan norma saling menghormati secara tenang di forum dan membina pelaku secara personal.",
  },
  {
    id: "tkp-sos-094",
    subPattern: "dilema-inklusi-dan-sensitivitas-budaya",
    difficulty: "sulit",
    prompt:
      "Saat Anda menyusun komposisi tim survei lapangan lintas kabupaten, dua orang pegawai secara terpisah menemui Anda dan meminta agar tidak dipasangkan dengan pegawai dari daerah tertentu karena berprasangka gaya bicara mereka terlalu terus terang dan kurang luwes menghadapi warga. Sikap paling tepat Anda sebagai ketua tim adalah ...",
    options: [
      "Menolak mentah-mentah permintaan mereka dan mengingatkan bahwa ASN wajib siap bekerja dengan siapa saja tanpa memandang asal daerah.",
      "Memenuhi permintaan mereka kali ini agar koordinasi tim di lapangan berjalan mulus dan target survei tidak terganggu konflik internal.",
      "Merombak susunan tim secara acak di depan seluruh anggota agar tidak ada yang merasa permintaannya dituruti maupun ditolak secara khusus.",
      "Mendengarkan kekhawatiran mereka tanpa membenarkan stereotip, menetapkan penugasan berbasis kompetensi objektif, dan memfasilitasi penyelarasan gaya komunikasi tim sebelum turun ke lapangan.",
      "Tetap mempertahankan susunan tim berbasis kompetensi objektif dan menjelaskan secara sopan bahwa perbedaan gaya bicara bukan alasan untuk menghindari kerja sama.",
    ],
    optionScores: [2, 1, 3, 5, 4],
    answer: "D",
    explanation:
      "Skor 5 memadukan ketegasan menolak diskriminasi kedaerahan dengan langkah konstruktif menyelaraskan standar komunikasi tim sebelum bertugas, sehingga prasangka mencair menjadi kolaborasi efektif. Skor 4 sudah objektif dan santun menolak permintaan berbasis stereotip, tetapi berhenti pada penjelasan tanpa memfasilitasi jembatan komunikasi antaranggota tim.",
    tip: "Tolak pengelompokan kerja berbasis stereotip daerah dengan ketegasan meritokrasi yang disertai penyelarasan komunikasi lintas budaya di tim.",
  },
  {
    id: "tkp-sos-095",
    subPattern: "dilema-inklusi-dan-sensitivitas-budaya",
    difficulty: "sulit",
    prompt:
      "Setelah mutasi kepala seksi baru yang berasal dari luar daerah, percakapan di grup obrolan tidak resmi sesama staf mulai dipenuhi komentar bernada stereotip kedaerahan yang meragukan kecocokan gaya kepemimpinannya sebelum ia sempat memaparkan program kerja. Anda tergabung di grup tersebut dan mengenal baik seluruh rekan. Langkah paling konstruktif Anda adalah ...",
    options: [
      "Keluar dari grup obrolan tidak resmi tersebut agar tidak ikut terseret dalam pergunjingan yang berpotensi melanggar etika ASN.",
      "Mengambil tangkapan layar seluruh percakapan di grup tersebut lalu langsung melaporkannya kepada kepala seksi baru agar ia waspada.",
      "Memilih tidak menanggapi percakapan tersebut karena grup bersifat informal dan opini rekan akan mereda sendiri setelah bekerja bersama.",
      "Mengingatkan rekan-rekan di grup secara santun agar tidak menilai pimpinan baru dari asal daerahnya sebelum melihat kinerja nyata di kantor.",
      "Meredam percakapan di grup dengan ajakan ramah untuk menilai kinerja secara objektif, mengingatkan etika kebhinekaan ASN, serta mendorong sesi perkenalan terbuka agar komunikasi awal terbangun hangat.",
    ],
    optionScores: [2, 1, 3, 4, 5],
    answer: "E",
    explanation:
      "Skor 5 aktif memutus bibit polarisasi di ruang informal dengan cara yang tidak menggurui, mengembalikan standar profesionalitas berbasis kinerja, dan menginisiasi jembatan dialog terbuka antara staf dan pimpinan baru. Skor 4 sudah berani dan santun mengingatkan rekan di grup, namun belum menawarkan langkah positif untuk membangun komunikasi awal yang sehat.",
    tip: "Cegah polarisasi stereotip sejak di ruang obrolan informal dengan teguran hangat berbasis kinerja sekaligus dorong ruang dialog terbuka.",
  },
];
