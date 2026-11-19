import {
  buildTkpPatternQuestions,
  type Question,
  type TkpQuestionDraft,
} from "@/modules/question-bank/domain/question";

const sosialBudayaDrafts: readonly TkpQuestionDraft[] = [
  {
    "id": "tkp-sos-001",
    "subPattern": "adaptasi-lingkungan-dan-kearifan-lokal",
    "difficulty": "mudah",
    "prompt": "Anda baru ditempatkan di kecamatan yang tradisi pergaulannya sangat menjunjung tinggi sapaan adat dan tata cara bertamu yang berbeda dari kota asal Anda. Sikap awal Anda dalam beradaptasi adalah ...",
    "options": [
      "Mempelajari tata krama dan kearifan lokal setempat dengan tulus, menyapa warga dengan hormat, dan menyesuaikan perilaku pergaulan tanpa meninggalkan profesionalitas",
      "Menunggu warga sekitar menyesuaikan diri lebih dahulu dengan kebiasaan gaya kota besar Anda karena standar kantor bersifat nasional",
      "Hanya bergaul rapat dengan sesama pegawai perantau yang berasal dari wilayah provinsi sama dengan Anda",
      "Mengkritik tradisi sapaan warga sekitar sebagai kebiasaan lambat yang tidak sesuai efisiensi zaman modern",
      "Segera mengajukan permohonan mutasi ke daerah asal pada minggu kedua penempatan karena merasa budaya lokal terlalu asing"
    ],
    "optionScores": [
      5,
      3,
      2,
      1,
      4
    ],
    "answer": "A",
    "explanation": "Adaptasi sosial budaya terbaik (skor 5) ditunjukkan lewat keingintahuan positif mempelajari tata krama lokal secara tulus dan membangun keharmonisan sejak hari-hari pertama tanpa menutup diri ataupun merendahkan tradisi setempat.",
    "tip": "Di lingkungan penempatan baru, pelajari kearifan lokal secara hormat dan terbuka agar diterima warga tanpa kehilangan etika kerja."
  },
  {
    "id": "tkp-sos-002",
    "subPattern": "adaptasi-lingkungan-dan-kearifan-lokal",
    "difficulty": "mudah",
    "prompt": "Saat Anda tinggal di lingkungan perumahan baru, warga setempat rutin mengadakan musyawarah kampung sekaligus pertemuan perkenalan penghuni baru setiap awal bulan pada Sabtu pagi. Langkah Anda adalah ...",
    "options": [
      "Tidak hadir dan mengunci pagar rumah agar tetap tenang beristirahat karena merasa tidak wajib mengenal tetangga",
      "Menyempatkan hadir dengan ramah, memperkenalkan diri serta bersedia berkontribusi sesuai kemampuan dalam kegiatan lingkungan sebagai wujud keakraban bertetangga",
      "Mengirimkan bingkisan makanan lewat petugas keamanan saja supaya warga tahu rumah Anda sudah berpenghuni tanpa hadir secara langsung",
      "Hanya menyapa tetangga terdekat kanan-kiri rumah bila bertemu di jalan sambil menghindari agenda kumpul warga",
      "Menilai kegiatan pertemuan warga tersebut membuang waktu sehingga lebih baik berkomunikasi hanya lewat grup pesan elektronik"
    ],
    "optionScores": [
      1,
      5,
      3,
      4,
      2
    ],
    "answer": "B",
    "explanation": "Hadir secara langsung dengan sikap ramah dan terlibat aktif dalam kehidupan sosial tetangga membangun ikatan harmonis dan modal sosial yang kuat di lingkungan tinggal baru (skor 5).",
    "tip": "Keterlibatan aktif dan ramah pada forum perkenalan warga membangun harmoni bertetangga sejak awal."
  },
  {
    "id": "tkp-sos-003",
    "subPattern": "adaptasi-lingkungan-dan-kearifan-lokal",
    "difficulty": "sedang",
    "prompt": "Dalam kunjungan penyuluhan program pertanian modern ke kampung adat, Anda melihat warga menolak langsung jadwal tanam serentak karena masih berpegang teguh pada tradisi syukuran awal panen menurut hitungan tetua adat. Pendekatan terbaik Anda adalah ...",
    "options": [
      "Memaksa warga mengikuti kalender penyuluhan dinas dengan ancaman penghentian penyaluran bibit subsidi besok pagi",
      "Membiarkan warga berjalan sendiri tanpa pendampingan teknis apa pun agar dinas tidak dituduh ikut campur urusan adat",
      "Menghormati kearifan adat setempat, berdialog dengan tetua adat secara santun untuk memahami jadwal lokal mereka, lalu menyelaraskan penyuluhan teknis tanpa menabrak nilai adat yang positif",
      "Mengatakan secara terbuka bahwa hitungan tradisional leluhur tidak ilmiah dan harus segera ditinggalkan petani muda",
      "Menyampaikan laporan penolakan warga apa adanya tanpa menjajaki pertemuan lanjutan bersama tokoh masyarakat"
    ],
    "optionScores": [
      1,
      3,
      5,
      2,
      4
    ],
    "answer": "C",
    "explanation": "Mengintegrasikan ilmu modern dengan kearifan lokal melalui dialog hormat bersama tetua adat menghasilkan penerimaan program jauh lebih tinggi dan berkelanjutan dibandingkan pemaksaan otoritatif (skor 5).",
    "tip": "Program pemerintah akan diterima efektif di masyarakat adat bila dibahas bersama tokoh adat untuk menyelaraskan kearifan lokal."
  },
  {
    "id": "tkp-sos-004",
    "subPattern": "adaptasi-lingkungan-dan-kearifan-lokal",
    "difficulty": "sedang",
    "prompt": "Di daerah penempatan baru Anda, sebagian besar warga terbiasa mengonsumsi makanan khas daerah dengan bumbu tajam serta menyajikan jamuan ramah saat menerima tamu dinas dari kabupaten, sedangkan perut Anda belum terbiasa dengan jenis bumbu tersebut. Sikap santun Anda saat dijamu warga adalah ...",
    "options": [
      "Menolak seluruh jamuan di depan warga sambil menunjukkan ekspresi kurang suka terhadap aroma masakan lokal",
      "Menyuruh warga memasakkan menu terpisah dari daerah asal Anda setiap kali melakukan kunjungan lapangan",
      "Diam-diam membuang hidangan tersebut ke luar jendela setelah tuan rumah menoleh agar terlihat sudah menghabiskan",
      "Menghargai tulus keramahan tuan rumah, mencicipi seperlunya secara sopan, serta menyampaikan kondisi kesehatan/lambung dengan santun dan ramah tanpa menyinggung perasaan mereka",
      "Tidak pernah menerima ajakan minum maupun duduk bersama warga selama bertugas di seluruh desa wilayah kecamatan"
    ],
    "optionScores": [
      2,
      1,
      3,
      5,
      4
    ],
    "answer": "D",
    "explanation": "Menghormati niat baik tuan rumah merupakan adab sosial penting; mencicipi sopan dan menjelaskan kendala fisik secara halus menghindarkan ketersinggungan tanpa memaksakan kesehatan sendiri (skor 5).",
    "tip": "Hormati keramahan lokal dengan apresiasi tulus dan komunikasi sopan jika ada keterbatasan kesehatan pribadi."
  },
  {
    "id": "tkp-sos-005",
    "subPattern": "adaptasi-lingkungan-dan-kearifan-lokal",
    "difficulty": "sedang",
    "prompt": "Sekolah di daerah penempatan Anda masih memiliki tradisi luhur budaya gotong royong serta seni musik tradisional yang mulai jarang diminati remaja akibat dominasi gim daring. Sebagai pegawai muda bidang kebudayaan dan pendidikan, inisiatif adaptif Anda bersama komunitas lokal adalah ...",
    "options": [
      "Melarang seluruh pelajar memiliki telepon genggam selama bersekolah agar mereka kembali berlatih musik tradisional tiap sore",
      "Membiarkan kesenian tradisi punah perlahan karena selera zaman generasi muda dianggap mustahil diarahkan lagi",
      "Mewajibkan penampilan seni tradisi monoton dalam rapat kantor setiap minggu meskipun tanpa melibatkan minat siswa",
      "Membuat pameran tunggal tertutup berisi alat musik lama di gedung dinas tanpa mengajak sekolah dan seniman lokal berinteraksi",
      "Berinisiatif berkolaborasi bersama seniman daerah dan pelajar mengemas pertunjukan kearifan lokal ke format kreatif serta festival sekolah yang relevan bagi generasi muda"
    ],
    "optionScores": [
      2,
      1,
      3,
      4,
      5
    ],
    "answer": "E",
    "explanation": "Melestarikan budaya di tengah arus globalisasi paling efektif lewat pendekatan partisipatif dan kreatif bersama komunitas pemilik tradisi serta generasi muda, bukan pelarangan kaku atau sikap pasrah (skor 5).",
    "tip": "Sinergikan tokoh budaya lokal dengan kreativitas generasi muda untuk menghidupkan kembali kearifan lokal secara relevan."
  },
  {
    "id": "tkp-sos-006",
    "subPattern": "adaptasi-lingkungan-dan-kearifan-lokal",
    "difficulty": "sedang",
    "prompt": "Rekan kerja asli daerah setempat tampak kurang nyaman saat Anda menggunakan kata ganti sapaan yang lazim di daerah asal Anda tetapi di daerah baru ternyata bermakna kurang sopan secara lokal. Begitu mengetahui informasi tersebut, respons Anda adalah ...",
    "options": [
      "Berterima kasih tulus kepada rekan yang mengingatkan, segera meminta maaf, menyesuaikan kosakata sapaan sesuai tata krama daerah penempatan, serta lebih cermat belajar ungkapan setempat",
      "Membela diri bahwa di kota asal kata tersebut bermakna akrab sehingga rekan setempat tidak semestinya mudah tersinggung",
      "Mengurangi berbicara dengan rekan kerja tersebut di kantor agar tidak salah ucap lagi di masa mendatang",
      "Meminta rekan tersebut memaklumi terus-menerus karena usia Anda dan masa kerja di daerah baru masih singkat",
      "Tetap memakai sapaan lama sesekali sambil menanyakan apakah bahasa daerah asal Anda akan segera dipahami rekan kantor"
    ],
    "optionScores": [
      5,
      2,
      3,
      4,
      1
    ],
    "answer": "A",
    "explanation": "Kepekaan budaya (cultural humility) tampak dari kesediaan rendah hati menerima koreksi, meminta maaf tulus tanpa defensif, dan langsung belajar menyesuaikan norma kesantunan bahasa setempat (skor 5).",
    "tip": "Jika tidak sengaja melanggar etiket lokal, berterima kasih atas koreksinya, minta maaf tulus, dan segera adaptasi."
  },
  {
    "id": "tkp-sos-007",
    "subPattern": "adaptasi-lingkungan-dan-kearifan-lokal",
    "difficulty": "sulit",
    "prompt": "Pemerintah daerah merencanakan pembangunan kawasan wisata di pesisir, tetapi nelayan lokal khawatir zona tangkap tradisional dan ritual laut tahunan mereka akan tersingkir oleh hotel komersial. Sebagai perwakilan tim perencanaan tata ruang daerah, pendekatan sosial budaya paling tepat Anda tawarkan adalah ...",
    "options": [
      "Meneruskan proyek zona wisata komersial seutuhnya karena pendapatan pajak daerah dari investor jauh lebih besar daripada nilai tradisi",
      "Membuka forum partisipatif bersama tokoh nelayan dan dinas terkait guna mengintegrasikan zona lindung nelayan tradisional, kalender ritual laut sebagai daya tarik wisata berkelanjutan, dan pelibatan ekonomi warga pesisir",
      "Membatalkan total seluruh rencana pengembangan kawasan wisata pesisir meskipun warga butuh peluang ekonomi tambahan",
      "Menjanjikan ganti rugi uang tunai sekali bayar kepada nelayan agar bersedia berpindah profesi tanpa dialog tata ruang bersama",
      "Membiarkan pengembang hotel bernegosiasi sendiri-sendiri secara tertutup dengan kepala dusun di luar pengetahuan pemerintah"
    ],
    "optionScores": [
      2,
      5,
      3,
      4,
      1
    ],
    "answer": "B",
    "explanation": "Pembangunan berkelanjutan menyatukan kesejahteraan ekonomi dengan perlindungan ruang hidup masyarakat adat/tradisional: menata zonasi adil, menghargai kearifan bahari sebagai aset budaya bersama, dan melibatkan warga dalam rantai nilai ekonomi (skor 5).",
    "tip": "Solusi tata ruang berkelanjutan menyelaraskan pembangunan modern dengan perlindungan ruang sosial-budaya masyarakat lokal."
  },
  {
    "id": "tkp-sos-008",
    "subPattern": "adaptasi-lingkungan-dan-kearifan-lokal",
    "difficulty": "sulit",
    "prompt": "Di suatu daerah pegunungan yang Anda bina, terdapat norma adat pembagian hutan larangan (hutan keramat desa) yang ternyata secara ilmiah sangat efektif menjaga mata air desa dari kekeringan, namun belum tercantum dalam peta tata kelola lingkungan kabupaten. Langkah strategis Anda adalah ...",
    "options": [
      "Mengabaikan tradisi hutan larangan tersebut karena peraturan kehutanan modern hanya mengakui peta terbitan kementerian pusat",
      "Meminta warga membuka sebagian hutan larangan tersebut menjadi lahan parkir wisata berbayar agar kas desa meningkat cepat",
      "Mengapresiasi peran konservasi adat tersebut, memfasilitasi pemetaan partisipatif untuk mengintegrasikan zona lindung adat ke dokumen perencanaan daerah bersama dinas terkait agar terlindungi secara hukum positif",
      "Menyampaikan pujian seremonial saat kunjungan saja tanpa mengupayakan pengakuan tata kelola dalam regulasi daerah",
      "Mengambil alih pengelolaan hutan larangan sepenuhnya dari tetua adat tanpa berkonsultasi mengenai tata cara penjagaan tradisional"
    ],
    "optionScores": [
      2,
      1,
      5,
      4,
      3
    ],
    "answer": "C",
    "explanation": "Mengawinkan kearifan ekologis lokal (hutan adat penjaga mata air) dengan perlindungan hukum tata ruang formal kabupaten melestarikan lingkungan sekaligus menghormati hak masyarakat hukum adat (skor 5).",
    "tip": "Kearifan ekologis adat yang positif layak diadvokasi masuk ke perlindungan perencanaan formal daerah secara partisipatif."
  },
  {
    "id": "tkp-sos-009",
    "subPattern": "toleransi-antarumat-dan-keberagaman-budaya",
    "difficulty": "mudah",
    "prompt": "Saat menyusun jadwal acara malam keakraban dan rapat kerja luar kota kantor, Anda menyadari waktunya beririsan dengan hari besar ibadah sebagian pegawai dari agama minoritas di unit tersebut. Sebagai koordinator panitia, tindakan Anda adalah ...",
    "options": [
      "Tetap menjalankan jadwal lama karena mayoritas pegawai tidak merayakan hari besar tersebut pada akhir pekan",
      "Meminta pegawai yang merayakan hari besar ibadah tetap ikut kegiatan kantor dulu dan merayakan ibadahnya minggu depan saja",
      "Mencabut nama pegawai tersebut dari daftar peserta rapat kerja tanpa mengajak berdiskusi agar jadwal kelompok lain aman",
      "Menggeser jadwal rapat kerja ke tanggal lain yang tidak berbenturan serta memastikan waktu ibadah tetap difasilitasi agar semua pegawai berpartisipasi setara tanpa hambatan",
      "Menjadwalkan acara berlangsung sambil mengizinkan mereka pulang cepat sendiri di tengah rapat penting kantor"
    ],
    "optionScores": [
      2,
      1,
      3,
      5,
      4
    ],
    "answer": "D",
    "explanation": "Toleransi aktif di tempat kerja menghormati hari raya semua pemeluk agama dengan merancang jadwal kerja dan fasilitas ruang ibadah yang inklusif bagi seluruh pegawai tanpa mengorbankan hak salah satu pihak (skor 5).",
    "tip": "Pastikan jadwal kegiatan bersama kantor menghormati hari besar dan waktu ibadah seluruh unsur pegawai."
  },
  {
    "id": "tkp-sos-010",
    "subPattern": "toleransi-antarumat-dan-keberagaman-budaya",
    "difficulty": "mudah",
    "prompt": "Salah satu rekan satu ruangan Anda sedang menjalankan ibadah puasa sesuai keyakinannya, sementara Anda dan beberapa rekan lain tidak berpuasa. Etika toleransi harian di ruang kerja yang paling tepat adalah ...",
    "options": [
      "Sengaja makan siang dan minum kopi beraroma tajam tepat di samping meja kerjanya sambil bercanda mengenai puasanya",
      "Menuntut seluruh rekan yang tidak berpuasa untuk ikut dilarang makan dan minum di dalam gedung kantor seharian penuh",
      "Menegur rekan yang sedang berpuasa jika terlihat sedikit lambat di sore hari agar tidak menjadikan ibadah sebagai alasan",
      "Tetap makan di ruang meja kerja seperti biasa tetapi tidak mengajaknya berbincang selama jam kerja berlangsung",
      "Menjaga sikap saling menghormati dengan makan atau minum secara wajar di area pantri atau tempat makan, serta tidak membuat candaan yang menyinggung ibadahnya"
    ],
    "optionScores": [
      1,
      3,
      2,
      4,
      5
    ],
    "answer": "E",
    "explanation": "Toleransi timbal balik bersifat proporsional dan santun: tidak memaksakan kewajiban agama kepada pemeluk lain, namun secara sukarela menjaga tenggang rasa makan di area pantri/makan dan memelihara ucapan yang hormat (skor 5).",
    "tip": "Wujud toleransi kerja yang hangat: menjaga tenggang rasa ruang dan ucapan secara wajar tanpa paksaan sepihak."
  },
  {
    "id": "tkp-sos-011",
    "subPattern": "toleransi-antarumat-dan-keberagaman-budaya",
    "difficulty": "sedang",
    "prompt": "Pada acara jamuan makan bersama saat pelatihan nasional lintas provinsi, beberapa peserta dari latar belakang agama dan kebiasaan berbeda memiliki pantangan makanan tertentu (seperti vegetarian maupun kehalalan makanan). Sebagai panitia konsumsi, tindakan terbaik Anda adalah ...",
    "options": [
      "Menyediakan pilihan menu yang jelas terjamin kehalalan dan opsi khusus pantangan (seperti menu nabati) lengkap dengan label informasi bahan yang transparan agar semua peserta makan tenang bersama",
      "Menyediakan satu jenis menu seragam saja sambil meminta peserta yang memiliki pantangan mencari makan sendiri di luar hotel",
      "Membeli makanan secara acak dari katering terdekat tanpa memberi label keterangan bahan sehingga peserta menebak-nebak sendiri",
      "Memisahkan ruangan makan peserta yang memiliki pantangan ke lantai berbeda jauh dari ruang makan utama",
      "Mengatakan kepada peserta agar sementara melonggarkan aturan pantangan makanan demi kelancaran acara tiga hari"
    ],
    "optionScores": [
      5,
      2,
      3,
      4,
      1
    ],
    "answer": "A",
    "explanation": "Layanan acara inklusif menghormati keyakinan pangan semua peserta lewat transparansi label bahan, variasi menu aman halal/nabati, dan kebersamaan makan di meja yang sama (skor 5).",
    "tip": "Dalam acara majemuk, tunjukkan penghormatan inklusif melalui kejelasan label dan akomodasi kebutuhan dasar peserta."
  },
  {
    "id": "tkp-sos-012",
    "subPattern": "toleransi-antarumat-dan-keberagaman-budaya",
    "difficulty": "sedang",
    "prompt": "Di kompleks tempat tinggal Anda, warga tengah mempersiapkan perayaan hari keagamaan salah satu umat yang diperkirakan menimbulkan kepadatan parkir sementara selama tiga jam pada Minggu pagi. Sikap bertetangga yang paling menyejukkan adalah ...",
    "options": [
      "Langsung menuliskan keluhan pedas di grup warga agar kegiatan keagamaan dilarang memakai fasilitas jalan lingkungan",
      "Bersikap terbuka dan ikut membantu koordinasi pengaturan parkir warga supaya kegiatan berjalan khidmat, aman, serta akses jalan tetangga lain tetap lancar",
      "Menutup akses jalan depan rumah dengan pot batu besar supaya tamu perayaan tidak lewat di dekat pagar rumah Anda",
      "Mengunci gerbang rumah sambil memutar musik sangat keras pada jam pelaksanaan ibadah tetangga berlangsung",
      "Diam di dalam rumah dengan rasa kesal dan memutuskan menolak menyapa pengurus warga selama sebulan penuh"
    ],
    "optionScores": [
      2,
      5,
      3,
      1,
      4
    ],
    "answer": "B",
    "explanation": "Gotong royong lintas iman dalam menjaga kelancaran perayaan tetangga sambil mengatur ketertiban akses jalan merupakan teladan hidup toleransi aktif di Indonesia (skor 5).",
    "tip": "Kerukunan bertetangga diperkuat oleh dukungan koordinasi ketertiban bersama saat ada kegiatan warga lintas agama."
  },
  {
    "id": "tkp-sos-013",
    "subPattern": "toleransi-antarumat-dan-keberagaman-budaya",
    "difficulty": "sedang",
    "prompt": "Seorang rekan kerja baru memiliki tradisi berbusana khas budaya daerah maupun atribut keyakinannya yang sesuai aturan seragam kedinasan instansi, tetapi dua rekan lain melontarkan komentar stereotip di balik meja. Sebagai pegawai di unit yang sama, sikap Anda adalah ...",
    "options": [
      "Ikut menertawakan komentar stereotip tersebut sekadar sebagai bahan pencair suasana istirahat kantor",
      "Membisu saja dan mulai menghindari duduk berdekatan dengan rekan baru tersebut supaya tidak terseret omongan",
      "Menyapa dan merangkul rekan baru dengan hangat agar ia merasa diterima, sekaligus mengingatkan kedua rekan secara santun bahwa atribut yang sah dilindungi aturan serta saling menghormati memperkokoh kenyamanan kerja",
      "Meminta rekan baru menanggalkan seluruh ciri khas pribadinya di rumah agar rekan kantor tidak membicarakannya lagi",
      "Langsung menyebarkan tuduhan intoleransi di media sosial kantor tanpa menegur dan mengajak bicara kedua rekan lebih dulu"
    ],
    "optionScores": [
      1,
      3,
      5,
      2,
      4
    ],
    "answer": "C",
    "explanation": "Toleransi aktif melindungi ruang nyaman bagi ekspresi identitas yang sah, merangkul rekan baru, dan meluruskan stereotip rekan secara santun namun jelas (skor 5).",
    "tip": "Tolak ejekan/stereotip berbasis identitas secara santun namun jelas, sekaligus rangkul pihak yang rentan tersisih."
  },
  {
    "id": "tkp-sos-014",
    "subPattern": "toleransi-antarumat-dan-keberagaman-budaya",
    "difficulty": "sedang",
    "prompt": "Dalam panitia acara peresmian gedung layanan baru daerah, beberapa tokoh mengusulkan rangkaian doa pembuka dipimpin satu pemuka agama saja sesuai agama mayoritas sementara tamu undangan mencakup beragam pemeluk agama. Usulan bijak Anda dalam rapat persiapan adalah ...",
    "options": [
      "Meniadakan sesi doa bersama sama sekali supaya tidak memunculkan perdebatan panjang selama rapat persiapan acara",
      "Membiarkan usulan panitia berjalan satu agama saja dengan anggapan tokoh agama lain cukup mengikuti diam dari kursi masing-masing",
      "Meminta acara doa diganti sambutan bebas berdurasi panjang mengenai sejarah pembangunan fisik gedung",
      "Mengusulkan format doa lintas iman atau doa bersama secara serempak menurut keyakinan masing-masing (atau perwakilan bergantian sesuai protokol) agar seluruh hadirin merasa dihormati dalam kebersamaan",
      "Memisahkan jam pelaksanaan peresmian menjadi beberapa kali berdasarkan latar belakang agama undangan"
    ],
    "optionScores": [
      3,
      4,
      2,
      5,
      1
    ],
    "answer": "D",
    "explanation": "Protokol acara kenegaraan dan instansi publik di Indonesia yang majemuk menjunjung prinsip keadilan keberagaman melalui format doa inklusif (hening cipta/doa masing-masing atau perwakilan lintas iman sesuai konteks resmi) sehingga seluruh warga merasa menjadi bagian utuh (skor 5).",
    "tip": "Rancang acara publik bersama agar inklusif dan menghargai keyakinan seluruh peserta yang hadir."
  },
  {
    "id": "tkp-sos-015",
    "subPattern": "toleransi-antarumat-dan-keberagaman-budaya",
    "difficulty": "sulit",
    "prompt": "Sekelompok oknum warga menyebarkan selebaran penolakan terhadap rencana pembukaan rumah singgah sosial bagi pasien kurang mampu di lingkungan perumahan karena isu kecemasan tak berdasar terhadap asal-usul pasien luar daerah. Sebagai aparatur pembina wilayah yang menjunjung keadilan sosial dan kebinekaan, langkah penyelesaian Anda adalah ...",
    "options": [
      "Langsung menghentikan rencana pendirian rumah singgah walaupun seluruh standar kesehatan dan izin lingkungan telah lengkap terpenuhi",
      "Membiarkan pengelola rumah singgah menghadapi unjuk rasa warga seorang diri karena bangunan tersebut dikelola lembaga yayasan sosial",
      "Mengeluarkan surat peringatan pemidanaan instan kepada seluruh warga sekitar tanpa dialog tatap muka dan verifikasi informasi kesehatan",
      "Meminta pasien dari luar daerah mencari pengobatan ke kabupaten lain agar lingkungan kompleks perumahan tetap tenang",
      "Berkoordinasi dengan tokoh masyarakat, dinas kesehatan, dan aparat setempat menggelar dialog fakta terbuka yang menjamin standar kebersihan-keamanan medis sekaligus mengedukasi empati sosial lintas asal daerah"
    ],
    "optionScores": [
      2,
      3,
      4,
      1,
      5
    ],
    "answer": "E",
    "explanation": "Penolakan berbasis prasangka/stigma harus dilawan dengan dialog terbuka berbasis fakta medis/keamanan yang menenangkan kekhawatiran wajar warga, sambil mempertahankan jaminan hak layanan kemanusiaan tanpa tunduk pada diskriminasi asal daerah (skor 5).",
    "tip": "Atasi penolakan sosial berbasis stigma dengan edukasi fakta bersama tokoh wilayah sembari melindungi hak kemanusiaan yang sah."
  },
  {
    "id": "tkp-sos-016",
    "subPattern": "toleransi-antarumat-dan-keberagaman-budaya",
    "difficulty": "sulit",
    "prompt": "Di unit kerja Anda muncul perbedaan pendapat internal: sebagian pegawai mengusulkan pembiasaan doa pagi bersama secara seragam mengikuti tata cara agama tertentu saja setiap hari di ruang umum kantor, sementara pegawai dari keyakinan lain merasa canggung dan mulai menarik diri saat apel pagi. Sikap paling tepat Anda usulkan ke pimpinan unit adalah ...",
    "options": [
      "Mengusulkan format doa bersama dengan mengheningkan sejenak agar tiap pegawai berdoa menurut agama dan kepercayaannya masing-masing, serta menyediakan ruang rohani tiap agama secara setara",
      "Mewajibkan seluruh pegawai tanpa terkecuali mengucapkan tata cara doa satu agama mayoritas agar terlihat kompak sebagai satu unit",
      "Melarang pegawai menyampaikan doa pribadi apa pun di gedung kantor termasuk pada jam istirahat masing-masing",
      "Membiarkan pegawai berbeda agama duduk terpisah di luar ruangan selama acara apel pagi kantor berlangsung setiap hari",
      "Menyampaikan keluhan pribadi secara terbuka bahwa pegawai minoritas tidak menghargai tradisi mayoritas di kantor tersebut"
    ],
    "optionScores": [
      5,
      1,
      2,
      3,
      4
    ],
    "answer": "A",
    "explanation": "Sesuai semangat Pancasila dan toleransi ruang kerja ASN, kegiatan korps bersama sepatutnya memakai format inklusif ('berdoa menurut agama dan kepercayaan masing-masing') sementara pembinaan rohani khusus tiap agama berjalan di ruang/komunitas agamanya masing-masing secara adil (skor 5).",
    "tip": "Acara resmi instansi publik bersifat inklusif untuk semua pemeluk agama; ruang spiritual khusus disediakan setara bagi tiap kelompok iman."
  },
  {
    "id": "tkp-sos-017",
    "subPattern": "komunikasi-lintas-budaya-dan-bahasa",
    "difficulty": "mudah",
    "prompt": "Seorang warga lanjut usia di loket pelayanan tampak hanya fasih berbahasa daerah setempat dan kesulitan menyusun kalimat dalam bahasa Indonesia saat menjelaskan keperluannya. Tindakan paling efektif dan hormat adalah ...",
    "options": [
      "Menyuruhnya pulang terlebih dahulu untuk belajar bahasa Indonesia atau membawa surat pernyataan bertandatangan kepala desa",
      "Menunjukkan kesabaran, menyimak dengan saksama, menggunakan bahasa Indonesia paling sederhana dibantu isyarat sopan, atau meminta bantuan rekan/petugas yang menguasai bahasa daerah beliau agar maksudnya tepat terpenuhi",
      "Berbicara bahasa Indonesia lebih cepat dan bernada tinggi supaya beliau terpaksa memahami penjelasan aturan kantor",
      "Langsung memproses dokumen berdasarkan tebakan sendiri tanpa mengonfirmasi keakuratan keperluan beliau",
      "Mengabaikan pertanyaannya sambil melayani nomor antrean berikutnya yang lebih lancar berbahasa Indonesia"
    ],
    "optionScores": [
      2,
      5,
      1,
      3,
      4
    ],
    "answer": "B",
    "explanation": "Komunikasi lintas bahasa yang empatik dan bermartabat memastikan hambatan bahasa tidak menghalangi hak warga memperoleh layanan publik yang akurat (skor 5).",
    "tip": "Jembatani kendala bahasa warga dengan kesabaran, bahasa sederhana, serta bantuan penerjemah internal bila tersedia."
  },
  {
    "id": "tkp-sos-018",
    "subPattern": "komunikasi-lintas-budaya-dan-bahasa",
    "difficulty": "mudah",
    "prompt": "Dalam rapat tim yang diikuti pegawai dari berbagai suku bangsa Indonesia, dua rekan dari daerah berbeda asyik mengobrol memakai bahasa daerah mereka berdua tentang materi pekerjaan rapat, membuat rekan dari daerah lain bingung tidak ikut memahami. Sebagai anggota rapat, sikap bijak Anda adalah ...",
    "options": [
      "Langsung memotong pembicaraan dengan marah karena menuduh mereka berdua sedang membicarakan hal negatif tentang tim",
      "Ikut membalas berbicara memakai bahasa daerah asal Anda sendiri supaya rapat menjadi semakin ramai",
      "Mengingatkan dengan ramah dan senyum agar pembahasan pekerjaan rapat kembali memakai bahasa persatuan bahasa Indonesia sehingga seluruh anggota dapat memahami dan berkontribusi setara",
      "Membiarkannya berlangsung sepanjang rapat dan hanya menyimak keputusan akhir yang dituliskan notulis",
      "Meninggalkan ruang rapat sementara sampai kedua rekan tersebut berhenti berbicara bahasa daerahnya"
    ],
    "optionScores": [
      1,
      2,
      5,
      4,
      3
    ],
    "answer": "C",
    "explanation": "Bahasa Indonesia berfungsi sebagai bahasa pemersatu komunikasi lintas daerah dalam forum resmi. Mengingatkan secara ramah agar diskusi tim memakai bahasa Indonesia menjaga inklusivitas tanpa merendahkan bahasa daerah (skor 5).",
    "tip": "Gunakan bahasa persatuan bahasa Indonesia di forum lintas daerah secara santun agar seluruh anggota tim terlibat setara."
  },
  {
    "id": "tkp-sos-019",
    "subPattern": "komunikasi-lintas-budaya-dan-bahasa",
    "difficulty": "sedang",
    "prompt": "Anda berasal dari budaya yang terbiasa menyampaikan koreksi secara lugas dan blak-blakan, namun kini bekerja bersama mayoritas rekan dari budaya yang sangat menjaga kehalusan rasa dan penyampaian tidak langsung. Agar masukan kerja tetap tersampaikan jelas tanpa melukai hubungan, penyesuaian Anda adalah ...",
    "options": [
      "Berhenti memberi koreksi atau saran teknis apa pun kepada tim supaya tidak dianggap pegawai yang terlalu keras",
      "Tetap berbicara blak-blakan dengan suara keras karena kejujuran menurut Anda tidak perlu mempedulikan perasaan orang",
      "Menyampaikan keluhan tidak langsung lewat status sindiran di media sosial pribadi alih-alih bicara di kantor",
      "Menyampaikan masukan tetap objektif dan jujur berdasarkan fakta kerja dengan memilih waktu tepat, pilihan kata yang santun, serta menghargai martabat lawan bicara",
      "Menuntut rekan sekantor wajib mengubah karakter budaya komunikasi mereka agar mirip dengan gaya Anda"
    ],
    "optionScores": [
      3,
      2,
      1,
      5,
      4
    ],
    "answer": "D",
    "explanation": "Kecerdasan budaya (cultural intelligence) menjaga substansi objektivitas pesan (tidak menjadi permisif) sambil mengemas cara penyampaian secara santun dan tepat konteks budaya agar pesan diterima efektif (skor 5).",
    "tip": "Jaga ketegasan substansi kerja dengan membungkus penyampaiannya memakai diksi santun yang menghormati konteks budaya lokal."
  },
  {
    "id": "tkp-sos-020",
    "subPattern": "komunikasi-lintas-budaya-dan-bahasa",
    "difficulty": "sedang",
    "prompt": "Ketika melayani warga dari daerah berlogat intonasi tinggi yang terdengar seperti sedang membentak padahal sebenarnya cara bicaranya sehari-hari memang tegas, reaksi profesional Anda adalah ...",
    "options": [
      "Langsung terpancing emosi dan membalas dengan suara keras karena merasa petugas dilecehkan oleh cara bicaranya",
      "Menolak melayani permohonan sebelum pemohon meminta maaf terlebih dahulu atas volume suaranya yang keras",
      "Mempercepat pelayanan secara asal tanpa mau menjawab pertanyaan lanjutannya supaya cepat pergi dari meja loket",
      "Mengeluh di grup pesan kantor bahwa pengunjung dari daerah tertentu selalu bersikap kasar kepada petugas",
      "Memahami latar belakang perbedaan intonasi budaya tanpa berprasangka buruk, tetap bersikap tenang, ramah, serta fokus menyelesaikan keperluannya sesuai aturan"
    ],
    "optionScores": [
      1,
      2,
      3,
      4,
      5
    ],
    "answer": "E",
    "explanation": "Kepekaan lintas budaya membedakan gaya suara/intonasi khas daerah dari niat bermusuhan. Tetap tenang, tidak tersulut prasangka, dan melayani ramah menjaga kualitas interaksi publik (skor 5).",
    "tip": "Bedakan gaya intonasi suara khas suatu daerah dengan niat emosi; tanggapi tetap tenang dan fokus pada solusi."
  },
  {
    "id": "tkp-sos-021",
    "subPattern": "komunikasi-lintas-budaya-dan-bahasa",
    "difficulty": "sedang",
    "prompt": "Kantor Anda menyelenggarakan sosialisasi program digitalisasi bagi warga lintas kecamatan yang memiliki beragam dialek serta istilah asing teknis seperti 'unggah PDF', 'verifikasi OTP', dan 'autentikasi'. Untuk memastikan informasi dipahami merata, pendekatan komunikasi terbaik adalah ...",
    "options": [
      "Menerjemahkan istilah teknis menjadi bahasa Indonesia sehari-hari yang konkret (misalnya kata 'kirim foto dokumen' atau 'kode angka lewat SMS'), dilengkapi ilustrasi visual langkah demi langkah dan sesi tanya jawab akrab",
      "Membagikan buku manual setebal seratus halaman berisi istilah bahasa Inggris teknologi secara langsung tanpa presentasi visual",
      "Tetap berpidato menggunakan bahasa teknis penuh agar masyarakat tahu bahwa instansi memakai sistem sangat canggih",
      "Meminta peserta muda di barisan depan menjelaskan sendiri kepada warga sepuh setelah acara selesai di luar aula",
      "Menyampaikan materi secepat mungkin lalu langsung membagikan tautan QR code di layar sebelum peserta siap mencoba"
    ],
    "optionScores": [
      5,
      2,
      1,
      4,
      3
    ],
    "answer": "A",
    "explanation": "Komunikasi publik yang inklusif menyesuaikan bahasa teknis birokrasi/TI ke istilah keseharian warga disertai alat bantu visual nyata agar tidak menciptakan jurang informasi bagi warga akar rumput (skor 5).",
    "tip": "Sederhanakan jargon birokrasi/TI menjadi bahasa membumi dan peraga visual agar dipahami semua lapisan masyarakat."
  },
  {
    "id": "tkp-sos-022",
    "subPattern": "komunikasi-lintas-budaya-dan-bahasa",
    "difficulty": "sedang",
    "prompt": "Seorang tamu mitra internasional datang meninjau program unggulan layanan terpadu daerah Anda dan mengajak berdialog mengenai inovasi pelayanan, sementara rekan staf lain tampak canggung berkomunikasi dalam bahasa asing. Sebagai pegawai yang menguasai bahasa Indonesia baik dan cukup cakap berbahasa Inggris dasar, sikap Anda adalah ...",
    "options": [
      "Membiarkan tamu internasional kebingungan mencari jawaban sendiri agar rekan lain sadar pentingnya belajar bahasa asing",
      "Menyambut tamu dengan ramah serta santun, membantu menjembatani komunikasi lintas bahasa secara akurat dalam batas keahlian, dan tetap memelihara wibawa budaya bangsa maupun keterlibatan rekan tim lain dalam dialog",
      "Berbicara terus-menerus memonopoli tamu tersebut guna memamerkan kefasihan bahasa asing tanpa mengenalkan kontribusi rekan kantor lain",
      "Memakai kosakata campuran bahasa asing secara berlebihan saat rapat internal kantor selanjutnya bersama rekan lokal",
      "Menghindar dari ruang penerimaan tamu karena khawatir melakukan satu dua kesalahan tata bahasa Inggris"
    ],
    "optionScores": [
      1,
      5,
      3,
      2,
      4
    ],
    "answer": "B",
    "explanation": "Menerapkan prinsip Trigatra Bangun Bahasa (utamakan bahasa Indonesia, lestarikan bahasa daerah, kuasai bahasa asing) berarti siap menjadi jembatan komunikasi global secara rendah hati tanpa meremehkan rekan ataupun mengagung-agungkan bahasa asing dalam forum domestik (skor 5).",
    "tip": "Jadikan kemampuan bahasa asing sebagai jembatan inklusif kolaborasi tim dengan tetap bermartabat dan melibatkan rekan kerja."
  },
  {
    "id": "tkp-sos-023",
    "subPattern": "komunikasi-lintas-budaya-dan-bahasa",
    "difficulty": "sulit",
    "prompt": "Saat menyusun kampanye komunikasi publik pencegahan stunting untuk seluruh wilayah kabupaten yang terdiri dari masyarakat pesisir, pegunungan, dan perkotaan, materi promosi sebelumnya ternyata hanya memakai contoh menu pangan modern kota yang sulit ditemui dan mahal bagi warga pegunungan serta pesisir. Perbaikan materi komunikasi paling tepat adalah ...",
    "options": [
      "Mewajibkan seluruh keluarga pegunungan membeli bahan makanan kemasan kota agar sesuai standar visual buku saku dinas",
      "Menyebarkan materi kota lama sambil menambahkan catatan kaki singkat bahwa warga desa bisa menyesuaikan sendiri sebisanya",
      "Menyesuaikan pesan gizi dalam kampanye komunikasi dengan memanfaatkan pangan lokal khas pesisir dan pegunungan (ikan tangkapan lokal, kelor, umbi, kacang lokal) dalam bahasa akrab setempat agar tepat konteks serta mudah diterapkan",
      "Mengurangi pembagian materi penyuluhan ke wilayah gunung supaya anggaran cetak cukup bagi warga kota saja",
      "Meminta relawan membuat materi promosi terpisah tanpa mengoordinasikan keakuratan standar gizinya bersama ahli kesehatan"
    ],
    "optionScores": [
      1,
      3,
      5,
      2,
      4
    ],
    "answer": "C",
    "explanation": "Komunikasi lintas budaya yang cerdas melokalkan contoh praktis (contextual localization) agar sejalan dengan kekayaan sumber daya dan budaya pangan tiap subwilayah tanpa mengubah standar ilmiah gizi (skor 5).",
    "tip": "Sesuaikan contoh pesan kebijakan publik dengan konteks budaya dan potensi lokal agar efektif dilaksanakan masyarakat."
  },
  {
    "id": "tkp-sos-024",
    "subPattern": "komunikasi-lintas-budaya-dan-bahasa",
    "difficulty": "sulit",
    "prompt": "Di forum dialog terbuka antara pemerintah daerah dan komunitas nelayan mengenai pengaturan alat tangkap ramah lingkungan, ketegangan memuncak karena istilah regulasi teknis kementerian terdengar seperti ancaman menutup mata pencaharian nelayan. Sebagai fasilitator dialog yang ditugaskan meredam situasi, pendekatan komunikasi paling tepat adalah ...",
    "options": [
      "Membacakan pasal sanksi pidana undang-undang dengan suara lantang agar para nelayan langsung takut dan menyetujui aturan",
      "Membubarkan dialog seketika dan menyerahkan sosialisasi aturan lanjutan lewat papan pengumuman pelabuhan saja",
      "Mengatakan secara sepihak bahwa peraturan tersebut kemungkinan tidak akan pernah ditegakkan di lapangan agar nelayan cepat pulang",
      "Mengubah gaya bicara menjadi dialog dua arah yang berempati pada nafkah nelayan, menjelaskan manfaat lestari untuk anak cucu dengan bahasa membumi, dan menampung usulan transisi bantuan alat tangkap",
      "Menyampaikan bahwa pemerintah daerah sebenarnya tidak setuju dengan kebijakan pusat demi mengambil simpati sesaat"
    ],
    "optionScores": [
      2,
      1,
      3,
      5,
      4
    ],
    "answer": "D",
    "explanation": "Komunikasi kebijakan lintas subkultur membumikan rasionalitas regulasi ke sudut pandang kebutuhan hidup masyarakat (keterjaminan hasil tangkapan jangka panjang) sekaligus menghadirkan empati dan solusi transisi tanpa melanggar aturan pusat (skor 5).",
    "tip": "Terjemahkan bahasa aturan teknis ke nilai manfaat nyata bagi kehidupan warga sambil membangun empati dan solusi transisi."
  },
  {
    "id": "tkp-sos-025",
    "subPattern": "kepekaan-sosial-dan-gotong-royong",
    "difficulty": "mudah",
    "prompt": "Di pagi hari saat Anda tiba di kantor, hujan semalaman menyebabkan saluran pembuangan air di halaman samping tersumbat sampah dan menggenangi akses jalan warga yang datang ke loket layanan, sementara petugas kebersihan sedang sakit izin mendadak. Sikap Anda adalah ...",
    "options": [
      "Melangkahi genangan air sambil masuk ruang ber-AC dan menunggu petugas kebersihan sembuh minggu depan",
      "Mengambil foto genangan air itu untuk diunggah di akun media sosial pribadi sambil mengkritik bagian umum kantor",
      "Meminta warga pemohon layanan yang datang di awal antrean membersihkan saluran air bersama supaya halaman kembali kering",
      "Menghubungi kepala kantor lewat surat resmi terlebih dahulu tanpa berbuat apa-apa di lapangan sepanjang pagi",
      "Mengajak rekan pegawai yang sudah hadir bergotong royong menyingkirkan sumbatan daun agar akses warga bersih dan melaporkannya ke bagian umum"
    ],
    "optionScores": [
      2,
      1,
      3,
      4,
      5
    ],
    "answer": "E",
    "explanation": "Kepekaan sosial dan semangat gotong royong tidak terpaku pada batas deskripsi jabatan kaku saat kondisi kebersamaan darurat memengaruhi kenyamanan layanan masyarakat (skor 5).",
    "tip": "Tunjukkan kepedulian nyata dan inisiatif gotong royong ketika kendala lapangan mengganggu kenyamanan publik."
  },
  {
    "id": "tkp-sos-026",
    "subPattern": "kepekaan-sosial-dan-gotong-royong",
    "difficulty": "mudah",
    "prompt": "Keluarga salah satu petugas keamanan kantor mengalami musibah kebakaran rumah pada malam hari hingga seluruh pakaian kerja serta perabot rumahnya habis. Sebagai rekan di lingkungan kerja yang sama, langkah solidaritas terbaik adalah ...",
    "options": [
      "Menginisiasi penggalangan bantuan sukarela secara transparan bersama rekan sekantor, membantu kebutuhan mendesak keluarga korban, dan menjenguk langsung memberi dukungan moral",
      "Menunggu adanya instruksi surat edaran sumbangan resmi dari pimpinan puncak baru bersedia ikut menyisihkan dana",
      "Mengirimkan pesan singkat belasungkawa di grup kantor saja lalu melupakannya keesokan hari",
      "Membagikan foto rumah korban kebakaran ke status media sosial pribadi agar banyak orang luar menaruh simpati tanpa ikut membantu nyata",
      "Mengusulkan pemotongan gaji paksa dalam jumlah sangat besar kepada rekan kerja tanpa musyawarah sukarela"
    ],
    "optionScores": [
      5,
      4,
      3,
      1,
      2
    ],
    "answer": "A",
    "explanation": "Solidaritas kemanusiaan diwujudkan dengan inisiatif penggalangan bantuan yang sukarela-transparan serta dukungan moril langsung bagi sesama yang tertimpa musibah (skor 5).",
    "tip": "Respons musibah sosial dengan solidaritas proaktif, sukarela, transparan, dan empati nyata."
  },
  {
    "id": "tkp-sos-027",
    "subPattern": "kepekaan-sosial-dan-gotong-royong",
    "difficulty": "sedang",
    "prompt": "Menjelang musim hujan ekstrem, lingkungan RT tempat tinggal Anda mengagendakan kerja bakti bersih selokan dan pemangkasan dahan pohon rawan tumbang tepat pada hari Minggu pagi saat Anda berniat berolahraga santai bersama keluarga. Tindakan Anda adalah ...",
    "options": [
      "Tetap berangkat olahraga keluar kota pagi-pagi buta tanpa menitipkan kabar atau berkontribusi apa pun kepada pengurus RT",
      "Menyesuaikan waktu pribadi, turut hadir aktif bergotong royong membersihkan selokan bersama tetangga sambil tetap menjaga keakraban, dan menyempatkan waktu berkualitas bersama keluarga sesudahnya",
      "Membayar tukang harian pengganti diri Anda dari awal hingga akhir tanpa mau turun menyapa warga di lingkungan sendiri",
      "Hadir sepuluh menit hanya untuk menandatangani daftar hadir kerja bakti lalu segera kembali ke dalam rumah",
      "Menyampaikan keluhan bahwa saluran air seharusnya menjadi tugas penuh petugas dinas kota tanpa perlu kerja bakti warga"
    ],
    "optionScores": [
      2,
      5,
      4,
      3,
      1
    ],
    "answer": "B",
    "explanation": "Gotong royong mitigasi lingkungan bersama masyarakat adalah bentuk kepedulian sosial sekaligus kebersamaan warga; menyelaraskan jadwal pribadi agar ikut hadir aktif memperkuat solidaritas komunitas (skor 5).",
    "tip": "Kehadiran dan keterlibatan langsung dalam kerja bakti warga memperkuat rasa kebersamaan sekaligus mitigasi lingkungan."
  },
  {
    "id": "tkp-sos-028",
    "subPattern": "kepekaan-sosial-dan-gotong-royong",
    "difficulty": "sedang",
    "prompt": "Saat perjalanan pulang kerja, Anda melihat seorang pengendara lanjut usia terjatuh di pinggir jalan akibat jalan berlubang dan barang belanjaannya berserakan sementara warga sekitar awalnya hanya menonton ragu-ragu. Tindakan tepat Anda adalah ...",
    "options": [
      "Meneruskan perjalanan cepat pulang agar tidak terjebak macet lalu lintas sore hari",
      "Berhenti sebentar untuk merekam peristiwa itu supaya diunggah agar dinas terkait segera memperbaiki jalan berlubang",
      "Segera menepi dengan aman, memeriksa kondisi pengendara, membantunya menepi bersama barangnya ke tempat aman, menghubungi keluarga atau layanan kesehatan bila cedera, serta mengajak pengguna jalan lain membantu mengatur arus lalu lintas",
      "Membantu mengumpulkan barang belanjaannya dari jauh sambil meneriaki pengendara lain agar lebih berhati-hati",
      "Menunggu hingga ada ambulans melintas di jalan tersebut tanpa turun menolong atau menghubungi bantuan darurat"
    ],
    "optionScores": [
      2,
      1,
      5,
      3,
      4
    ],
    "answer": "C",
    "explanation": "Kepekaan sosial menuntut respons kemanusiaan sigap pada keselamatan sesama (menolong korban menepi aman, memberi pertolongan awal atau memanggil layanan darurat, serta menggerakkan bantuan sekitar secara tertib) (skor 5).",
    "tip": "Pada kondisi darurat sosial di ruang publik, utamakan keselamatan korban dan tindakan pertolongan langsung yang aman."
  },
  {
    "id": "tkp-sos-029",
    "subPattern": "kepekaan-sosial-dan-gotong-royong",
    "difficulty": "sedang",
    "prompt": "Program Jumat Berbagi atau kegiatan sosial sukarela kantor kerap sepi partisipasi karena sebagian pegawai menganggap sumbangan selalu harus berupa dana besar dan dikelola rumit. Jika Anda ingin membangkitkan kembali semangat gotong royong di kantor, gagasan praktis Anda adalah ...",
    "options": [
      "Mewajibkan iuran bulanan minimal tinggi bagi seluruh pegawai tanpa pengecualian dan mengumumkan nama yang belum membayar",
      "Menghentikan kegiatan sosial sukarela seluruhnya karena tidak tercantum di dalam target kerja individu tahunan",
      "Menjalankan kegiatan tersebut sendirian secara diam-diam sepanjang tahun tanpa mengajak rekan kerja mana pun",
      "Menggagas skema partisipasi ringan, transparan, dan variatif (misalnya berbagi buku bacaan layak, bahan pokok, atau tenaga relawan sebulan sekali) dengan pelaporan terbuka agar semua pegawai merasa ringan ikut berkontribusi",
      "Mengusulkan kantor memakai dana operasional perjalanan dinas secara diam-diam guna membiayai kegiatan sosial pribadi pegawai"
    ],
    "optionScores": [
      2,
      1,
      4,
      5,
      3
    ],
    "answer": "D",
    "explanation": "Gotong royong tumbuh kuat saat bersifat sukarela, mudah diakses semua kalangan (bukan cuma uang besar), serta akuntabel dalam penyaluran (skor 5).",
    "tip": "Tumbuhkan gotong royong melalui cara berpartisipasi yang ringan, terbuka, variatif, dan transparan penyalurannya."
  },
  {
    "id": "tkp-sos-030",
    "subPattern": "kepekaan-sosial-dan-gotong-royong",
    "difficulty": "sedang",
    "prompt": "Anda bertugas di tim pendampingan desa pascabencana gempa bumi. Meski tugas utama Anda mendata kerusakan bangunan kantor desa, Anda mendapati posko pengungsian ibu dan balita kekurangan relawan pengelola logistik popok dan makanan bayi sore itu. Tindakan Anda adalah ...",
    "options": [
      "Fokus menyelesaikan foto gedung kantor desa lebih awal lalu langsung pulang ke penginapan kota karena bagian logistik balita tugas seksi lain",
      "Mengambil alih seluruh posko logistik balita dengan mengabaikan tenggat laporan pendataan gedung desa tanpa melapor koordinator",
      "Mengirimkan keluhan di grup pimpinan bahwa bagian sosial bekerja lamban menyiapkan relawan di desa pengungsian",
      "Menunggu perintah tertulis resmi pimpinan kabupaten keesokan harinya sebelum berani menyentuh kardus bantuan balita di posko",
      "Menuntaskan pendataan bangunan desa sesuai rencana prioritas, lalu berkoordinasi dengan koordinator posko meluangkan tenaga membantu penyortiran dan penyaluran logistik darurat ibu-balita bersama relawan"
    ],
    "optionScores": [
      3,
      2,
      1,
      4,
      5
    ],
    "answer": "E",
    "explanation": "Kepekaan sosial terbaik menjaga keseimbangan: menuntaskan amanah tugas utama secara cepat dan disiplin, lalu segera mengulurkan tangan pada kebutuhan darurat kemanusiaan warga secara terkoordinasi (skor 5).",
    "tip": "Dalam kondisi bencana, tuntaskan kewajiban utama lalu segera ulurkan tenaga pada posko kemanusiaan secara terkoordinasi."
  },
  {
    "id": "tkp-sos-031",
    "subPattern": "kepekaan-sosial-dan-gotong-royong",
    "difficulty": "sulit",
    "prompt": "Di unit tempat Anda bekerja, ada seorang rekan kerja yang belakangan sering tampak murung, menyendiri, dan performanya menurun drastis. Setelah rekan lain mulai menggosipkannya sebagai pemalas, kepekaan sosial yang paling bijaksana untuk Anda lakukan adalah ...",
    "options": [
      "Mendekatinya secara personal dalam suasana tenang penuh empati untuk mendengarkan tanpa menghakimi, membantunya menemukan dukungan profesional (konseling/Biro SDM atau pembagian beban wajar) bila diperlukan, dan tidak ikut menyebar gosip",
      "Ikut menjaga jarak sosial agar Anda tidak ikut terbebani masalah pribadi keluarga rekan tersebut",
      "Menegurnya di depan rapat evaluasi mingguan bahwa masalah keluarga tidak pantas dibawa-bawa menurunkan angka kinerja tim",
      "Melaporkan langsung kepada pimpinan agar rekan tersebut diberi surat peringatan pertama tanpa berbicara empat mata lebih dahulu",
      "Menanyakan rincian masalah pribadinya secara memaksa saat jam makan siang bersama di hadapan banyak rekan lain"
    ],
    "optionScores": [
      5,
      3,
      2,
      4,
      1
    ],
    "answer": "A",
    "explanation": "Kepedulian sosial mencakup kesehatan mental dan kemanusiaan sesama rekan kerja. Mendengarkan tulus tanpa menghakimi secara privat, menolak gosip, dan mengarahkan ke bantuan yang tepat membantu pemulihan rekan sekaligus menjaga performa tim (skor 5).",
    "tip": "Tangani perubahan perilaku rekan lewat pendekatan pribadi yang empatik dan menjaga privasi, bukan gosip atau vonis."
  },
  {
    "id": "tkp-sos-032",
    "subPattern": "kepekaan-sosial-dan-gotong-royong",
    "difficulty": "sulit",
    "prompt": "Sebuah daerah padat permukiman menghadapi persoalan menumpuknya sampah plastik di bantaran sungai setiap kali banjir kecil datang. Warga saling menyalahkan antar-RW hulu dan hilir tanpa aksi nyata. Sebagai anggota tim pelestarian lingkungan kelurahan yang dipercaya warga, langkah kolaborasi gotong royong paling berkelanjutan adalah ...",
    "options": [
      "Menentukan secara sepihak denda tinggi bagi RW hulu tanpa menyediakan fasilitas tempat sampah sementara yang layak",
      "Mempertemukan tokoh RW hulu dan hilir secara dialogis untuk menyepakati jadwal aksi bersih berkala bersama, membangun sistem bank sampah bernilai ekonomi di hulu, dan memantau titik rawan bersama-sama",
      "Mengirimkan satu kali truk pengangkut sampah saja menjelang kunjungan penilaian kebersihan kota tiap tahun",
      "Membiarkan warga RW hilir terus mengumpulkan sampah kiriman sendiri karena posisi wilayah mereka lebih rendah",
      "Mengusulkan pemasangan pagar seng tinggi di pinggir sungai agar warga tidak melihat tumpukan sampah di bantaran"
    ],
    "optionScores": [
      2,
      5,
      3,
      1,
      4
    ],
    "answer": "B",
    "explanation": "Mengakhiri siklus saling menyalahkan butuh penyatuan dialog lintas wilayah (hulu-hilir), perbaikan hulu berbasis nilai tambah (bank sampah), serta aksi gotong royong berkelanjutan dengan pemantauan bersama (skor 5).",
    "tip": "Pecahkan masalah sosial lintas warga dengan menyatukan pihak hulu dan hilir dalam sistem gotong royong bernilai guna."
  },
  {
    "id": "tkp-sos-033",
    "subPattern": "menolak-diskriminasi-dan-primordialisme",
    "difficulty": "mudah",
    "prompt": "Ketika membentuk kelompok tim kecil panitia peringatan hari kemerdekaan di kantor, salah satu rekan mengajak Anda memilih anggota khusus dari suku dan almamater yang sama saja agar cepat akrab dan gampang sepakat. Sikap Anda adalah ...",
    "options": [
      "Menyetujui ajakan itu secara diam-diam supaya koordinasi panitia memang terasa lebih santai dan seragam",
      "Meminta rekan tersebut membagi dua kelompok: satu panitia inti dari golongan sendiri dan satu lagi panitia pelengkap dari luar",
      "Menolak pengelompokan berdasarkan suku maupun almamater secara ramah, dan mengajak menyusun tim panitia beragam berdasarkan minat, kemampuan teknis, serta keterwakilan unit kerja agar inklusif dan kompak",
      "Mengundurkan diri dari kepanitiaan acara kemerdekaan secara mendadak tanpa memberikan alasan kepada tim",
      "Melaporkan ajakan rekan tersebut langsung sebagai pelanggaran disiplin berat tanpa memberi pemahaman inklusif lebih dulu"
    ],
    "optionScores": [
      1,
      2,
      5,
      3,
      4
    ],
    "answer": "C",
    "explanation": "Menolak primordialisme dengan hangat dan mengarahkan pembentukan tim berdasarkan kompetensi dan inklusivitas mencerminkan jiwa persatuan kebinekaan di tempat kerja (skor 5).",
    "tip": "Hindari pengkotak-kotakan tim berdasar suku, agama, atau almamater; bangun tim berdasarkan kompetensi dan keterbukaan."
  },
  {
    "id": "tkp-sos-034",
    "subPattern": "menolak-diskriminasi-dan-primordialisme",
    "difficulty": "mudah",
    "prompt": "Seorang pemohon layanan meminta didahulukan pengurusannya hanya karena mengaku satu daerah asal kelahiran dan memiliki marga yang sama dengan Anda. Sikap profesional Anda adalah ...",
    "options": [
      "Mendahulukannya dengan cepat diam-diam lewat pintu belakang loket agar pemohon lain di antrean tidak protes",
      "Mengizinkannya memotong setengah antrean dengan syarat melapor setelah jam istirahat siang selesai",
      "Menegurnya dengan suara keras di hadapan seluruh warga agar malu membawa-bawa identitas daerah asal",
      "Menyambutnya ramah dengan penuh hormat sebagai sesama warga negara, tetapi tetap menjelaskan secara tegas dan santun bahwa semua pemohon dilayani adil sesuai nomor urut antrean serta SOP berlaku",
      "Meminta rekan petugas loket sebelah bertukar kursi sementara supaya tidak enak hati langsung dengannya"
    ],
    "optionScores": [
      1,
      2,
      3,
      5,
      4
    ],
    "answer": "D",
    "explanation": "Pelayanan publik yang berkeadilan memisahkan ikatan kekerabatan/daerah asal dari objektivitas antrean dan prosedur hukum, disampaikan tetap hangat namun tegas (skor 5).",
    "tip": "Jawab permintaan hak istimewa berdasar kesamaan asal daerah secara hangat namun tegas berpegang pada keadilan antrean."
  },
  {
    "id": "tkp-sos-035",
    "subPattern": "menolak-diskriminasi-dan-primordialisme",
    "difficulty": "sedang",
    "prompt": "Dalam diskusi penilaian kandidat pelamar tenaga pendukung administrasi kantor, salah satu penilai berkomentar bahwa pelamar perempuan atau lulusan daerah tertentu sebaiknya tidak usah diprioritaskan karena dikhawatirkan cepat mengajukan cuti atau kurang terbiasa ritme kota. Sikap tegas Anda dalam rapat adalah ...",
    "options": [
      "Mengangguk menyetujui pertimbangan penilai tersebut agar proses seleksi selesai tepat sebelum pukul empat sore",
      "Diam tidak berkomentar meski di dalam hati tidak setuju demi menghindari ketegangan dengan penilai senior",
      "Meminta penilai tersebut dicabut hak suaranya di tengah sidang seleksi tanpa memberi alasan objektif rapat",
      "Menunda seluruh pengumuman kelulusan selama dua bulan sambil menunggu seluruh penilai pensiun",
      "Menyampaikan keberatan secara santun berbasis fakta serta peraturan nondiskriminasi, lalu mengajak tim menyeleksi seluruh kandidat murni berdasarkan skor kompetensi, integritas, dan hasil wawancara objektif"
    ],
    "optionScores": [
      1,
      3,
      4,
      2,
      5
    ],
    "answer": "E",
    "explanation": "Sistem merit menuntut penolakan tegas terhadap diskriminasi gender maupun asal daerah dalam rekrutmen. Menyuarakan prinsip objektivitas kompetensi secara santun melindungi hak kandidat sekaligus mutu SDM instansi (skor 5).",
    "tip": "Tegakkan prinsip nondiskriminasi dan meritokrasi dengan berani menyuarakan objektivitas kompetensi dalam rapat seleksi."
  },
  {
    "id": "tkp-sos-036",
    "subPattern": "menolak-diskriminasi-dan-primordialisme",
    "difficulty": "sedang",
    "prompt": "Ketika menerima pengaduan sengketa fasilitas umum antardua warga, Anda menyadari salah seorang di antara mereka adalah teman akrab organisasi mahasiswa Anda dahulu sedangkan pihak lainnya warga kurang mampu yang tidak Anda kenal. Bagaimana Anda menangani kasus ini?",
    "options": [
      "Menjaga objektivitas penuh dengan memeriksa seluruh bukti dan aturan secara imparsial tanpa memberi keistimewaan kepada teman lama, atau mundur mendelegasikan penanganan bila berisiko menimbulkan persepsi konflik kepentingan",
      "Memberikan nasihat tertutup kepada teman lama saja sebelum sidang mediasi dimulai supaya argumennya menang",
      "Mencondongkan keputusan sedikit kepada warga kurang mampu secara emosional meskipun tanpa memeriksa bukti ketentuan tata ruang",
      "Mengulur jadwal mediasi berkali-kali dengan harapan kedua belah pihak lelah dan mencabut laporannya",
      "Membantu teman lama dengan mencari celah kelengkapan administrasi milik lawannya agar aduan warga ditolak"
    ],
    "optionScores": [
      5,
      2,
      3,
      4,
      1
    ],
    "answer": "A",
    "explanation": "Imparsialitas adalah jantung keadilan sosial: menilai semata berbasis fakta & regulasi tanpa memihak teman maupun bertindak bias, serta mendeklarasikan/menghindari konflik kepentingan bila kedekatan personal berpotensi mengaburkan kepercayaan publik (skor 5).",
    "tip": "Tangani sengketa dengan imparsialitas penuh berbasis bukti; hindari konflik kepentingan meski menyangkut kawan lama."
  },
  {
    "id": "tkp-sos-037",
    "subPattern": "menolak-diskriminasi-dan-primordialisme",
    "difficulty": "sedang",
    "prompt": "Di kantor Anda beredar anggapan tidak tertulis bahwa peluang penugasan perjalanan dinas luar kota dan pelatihan bergengsi selalu lebih mudah didapatkan oleh anggota kelompok informal yang sering berkumpul bersama satu pemimpin bidang asal almamater tertentu. Langkah paling konstruktif yang dapat Anda usulkan untuk membangun sistem adil adalah ...",
    "options": [
      "Berusaha ikut masuk ke kelompok informal tersebut agar Anda juga memperoleh bagian tugas ke luar kota",
      "Mengusulkan sistem rotasi penugasan serta kriteria seleksi pelatihan berbasis keterbutuhan kompetensi jabatan yang transparan dan diumumkan terbuka kepada seluruh staf",
      "Mengumpulkan bukti foto kegiatan makan siang kelompok tersebut untuk disebarluaskan di forum pegawai anonim",
      "Mengajak rekan lain yang tidak termasuk kelompok tersebut mogok mengikuti program pelatihan lokal apa pun",
      "Berpasrah diri menerima ketimpangan tersebut karena sudah menjadi pola umum di banyak tempat kerja mana pun"
    ],
    "optionScores": [
      2,
      5,
      1,
      3,
      4
    ],
    "answer": "B",
    "explanation": "Primordialisme dan favoritisme internal dilawan paling efektif melalui pelembagaan sistem transparan (rotasi adil & kriteria seleksi berbasis kompetensi) yang memberi peluang setara bagi setiap pegawai (skor 5).",
    "tip": "Atasi favoritisme golongan/almamater dengan membangun mekanisme rotasi adil dan kriteria penugasan yang transparan."
  },
  {
    "id": "tkp-sos-038",
    "subPattern": "menolak-diskriminasi-dan-primordialisme",
    "difficulty": "sedang",
    "prompt": "Pada suatu proyek pengembangan kawasan taman desa, seorang warga berpenampilan sederhana namun berpengalaman bertani mengajukan usulan perbaikan drainase yang sangat logis dalam musyawarah, tetapi diremehkan oleh beberapa tokoh berpengaruh yang menganggap pendapatnya kurang layak didengar. Sikap Anda sebagai fasilitator musyawarah adalah ...",
    "options": [
      "Melanjutkan agenda musyawarah langsung ke pendapat tokoh berpengaruh saja supaya rapat berjalan mulus cepat selesai",
      "Meminta warga sederhana itu menuliskan pendapatnya di kertas untuk dibaca panitia minggu depan setelah musyawarah tutup",
      "Memberikan ruang bicara yang setara dan hormat bagi warga tersebut, mengajak forum mengevaluasi substansi usulannya berdasarkan kelayakan teknis tanpa memandang status sosial, dan mencatat gagasannya dalam notulen resmi",
      "Menegur tokoh berpengaruh secara kasar di depan seluruh peserta desa hingga mempermalukan wibawa keduanya",
      "Memisahkan rapat musyawarah kelompok tokoh desa dan kelompok warga biasa ke dalam dua hari yang berbeda"
    ],
    "optionScores": [
      2,
      3,
      5,
      4,
      1
    ],
    "answer": "C",
    "explanation": "Demokrasi permusyawaratan menghargai nilai substansi gagasan setiap warga secara setara tanpa diskriminasi status ekonomi atau gelar sosial (skor 5).",
    "tip": "Nilai kualitas ide atas dasar logika dan manfaat publik, bukan dari status sosial pembicaranya."
  },
  {
    "id": "tkp-sos-039",
    "subPattern": "menolak-diskriminasi-dan-primordialisme",
    "difficulty": "sulit",
    "prompt": "Suatu kebijakan pembagian bantuan modal usaha mikro daerah menyertakan syarat dokumen kependudukan lokal yang ternyata secara tidak sengaja membuat ratusan perajin lokal berstatus warga pindahan resmi dan komunitas penyandang disabilitas gagal lolos seleksi otomatis aplikasi, padahal mereka berhak secara ekonomi. Sebagai anggota tim perumus kebijakan, sikap terbaik Anda adalah ...",
    "options": [
      "Membiarkan sistem bekerja apa adanya agar anggaran modal usaha terserap cepat kepada penerima yang lolos otomatis saja",
      "Mengubah hasil kelulusan penerima di basis data diam-diam tanpa merevisi pedoman peraturan agar lebih praktis",
      "Membatalkan bantuan modal usaha untuk seluruh daerah tahun ini dan mengembalikan anggarannya ke kas pusat",
      "Mengajukan tinjauan inklusivitas atas syarat administratif tersebut bersama tim hukum dan dinas terkait agar aturan diperbaiki menjadi adil dan tidak mengecualikan warga sah yang rentan secara ekonomi maupun disabilitas",
      "Menyalurkan sisa anggaran secara informal ke kelompok perajin terdekat tanpa melewati proses pendaftaran resmi"
    ],
    "optionScores": [
      2,
      1,
      3,
      5,
      4
    ],
    "answer": "D",
    "explanation": "Diskriminasi tidak selalu berupa niat jahat; ia bisa muncul sebagai diskriminasi tidak langsung akibat desain regulasi administratif yang tidak peka kelompok rentan. Memperbaiki pedoman bersama tim sah menjamin keadilan substantif (skor 5).",
    "tip": "Waspadai diskriminasi tidak langsung dalam desain syarat sistem/regulasi dan advokasi perbaikan aturannya secara prosedural."
  },
  {
    "id": "tkp-sos-040",
    "subPattern": "menolak-diskriminasi-dan-primordialisme",
    "difficulty": "sulit",
    "prompt": "Di media sosial komunitas lokal, sebuah konten viral menyebarkan generalisasi negatif bahwa penduduk pendatang dari wilayah tertentu selalu menjadi sumber masalah sosial di kota Anda, hingga memicu boikot terhadap usaha dagang kecil warga asal daerah tersebut. Sebagai aparatur negara yang menjadi teladan kebinekaan di ruang kerja dan lingkungan sosial, tindakan paling tepat Anda adalah ...",
    "options": [
      "Ikut menghindari berbelanja di usaha warga asal daerah tersebut supaya tidak dicurigai tetangga sekitar",
      "Membagikan ulang unggahan viral itu dengan pertanyaan provokatif untuk melihat reaksi lebih banyak warganet",
      "Menutup akses komunikasi sosial dengan seluruh warga kota demi menghindari perdebatan mengenai isu pendatang",
      "Mengucapkan komentar santai bahwa masalah seperti itu hal wajar terjadi di kota besar lalu membiarkannya",
      "Menolak tegas narasi stereotip dengan tenang berbasis tanggung jawab individu bukan suku, mengajak tokoh lingkungan menjaga kerukunan, dan mendukung perlakuan ekonomi adil tanpa boikot"
    ],
    "optionScores": [
      1,
      2,
      3,
      4,
      5
    ],
    "answer": "E",
    "explanation": "Melawan stigma kolektif membutuhkan keberanian moral menolak stereotip, edukasi berbasis tanggung jawab individu (bukan pelabelan suku/daerah), dan komitmen nyata menjaga kohesi sosial serta keadilan ekonomi warga lintas asal daerah (skor 5).",
    "tip": "Tolak generalisasi negatif atas suku/daerah; tekankan pertanggungjawaban individual dan jaga kohesi lintas warga."
  }
];

export const sosialBudayaQuestions: readonly Question[] = buildTkpPatternQuestions(
  "sosial-budaya",
  sosialBudayaDrafts,
);
