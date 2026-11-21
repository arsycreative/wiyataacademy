import {
  buildTkpPatternQuestions,
  type Question,
  type TkpQuestionDraft,
} from "@/modules/question-bank/domain/question";
import { sosialBudayaBatch2Drafts } from "./batches/03-sosial-budaya-batch-2";

const sosialBudayaDrafts: readonly TkpQuestionDraft[] = [
  {
    "id": "tkp-sos-001",
    "subPattern": "adaptasi-lingkungan-dan-kearifan-lokal",
    "difficulty": "mudah",
    "prompt": "Anda baru ditempatkan di kecamatan yang tradisi pergaulannya sangat menjunjung tinggi sapaan adat dan tata cara bertamu yang berbeda dari kota asal Anda. Sikap awal Anda dalam beradaptasi adalah ...",
    "options": [
      "Mempelajari tata krama lokal secara tulus, menyapa warga ramah, dan menyesuaikan diri di lingkungan baru.",
      "Tetap mempertahankan gaya pergaulan kota asal secara kaku karena menganggap sapaan adat daerah kurang praktis.",
      "Lebih banyak bergaul akrab bersama sesama pegawai perantau yang berasal dari daerah sama karena merasa lebih nyaman.",
      "Menyapa warga sekadarnya saat berpapasan di jalan sambil memusatkan perhatian pada penyelesaian tugas rutin kantor.",
      "Menjaga tutur kata sopan saat bertemu warga setempat, sambil tetap membawa kebiasaan pergaulan kota asal secara wajar."
    ],
    "optionScores": [
      5,
      1,
      2,
      3,
      4
    ],
    "answer": "A",
    "explanation": "Skor 5 menunjukkan adaptasi aktif dengan mempelajari tata krama lokal secara tulus tanpa merendahkan tradisi baru. Pilihan skor 4 sebenarnya sudah sopan dalam pergaulan dengan warga, tetapi masih bertahan pada kebiasaan asal tanpa inisiatif memahami sapaan adat setempat.",
    "tip": "Di lingkungan penempatan baru, pelajari kearifan lokal secara hormat dan terbuka agar diterima warga tanpa kehilangan etika kerja."
  },
  {
    "id": "tkp-sos-002",
    "subPattern": "adaptasi-lingkungan-dan-kearifan-lokal",
    "difficulty": "mudah",
    "prompt": "Saat Anda tinggal di lingkungan perumahan baru, warga setempat rutin mengadakan musyawarah kampung sekaligus pertemuan perkenalan penghuni baru setiap awal bulan pada Sabtu pagi. Langkah Anda adalah ...",
    "options": [
      "Menghadiri pertemuan warga secara tulus untuk memperkenalkan diri, namun memilih menyimak pasif tanpa menawarkan peran.",
      "Menyempatkan hadir dengan ramah di pertemuan warga, memperkenalkan diri, serta siap berkontribusi sesuai kemampuan.",
      "Menyampaikan pesan izin berhalangan secara sopan kepada pengurus RT sambil menitipkan salam perkenalan bagi warga sekitar.",
      "Hanya menyapa tetangga terdekat kanan-kiri rumah saat berpapasan karena merasa agenda kumpul warga menyita akhir pekan.",
      "Tidak menghadiri pertemuan karena menganggap hubungan bertetangga tidak perlu melibatkan rapat rutin kampung."
    ],
    "optionScores": [
      4,
      5,
      3,
      2,
      1
    ],
    "answer": "B",
    "explanation": "Skor 5 membangun modal sosial sejak awal melalui kehadiran ramah dan kesediaan berkontribusi nyata dalam lingkungan baru. Pilihan skor 4 sudah menunjukkan itikad baik hadir dan memperkenalkan diri secara tulus, tetapi berhenti pada sikap pasif tanpa keterlibatan aktif.",
    "tip": "Keterlibatan aktif dan ramah pada forum perkenalan warga membangun harmoni bertetangga sejak awal."
  },
  {
    "id": "tkp-sos-003",
    "subPattern": "adaptasi-lingkungan-dan-kearifan-lokal",
    "difficulty": "sedang",
    "prompt": "Dalam kunjungan penyuluhan program pertanian modern ke kampung adat, Anda melihat warga menolak langsung jadwal tanam serentak karena masih berpegang teguh pada tradisi syukuran awal panen menurut hitungan tetua adat. Pendekatan terbaik Anda adalah ...",
    "options": [
      "Membagikan brosur tanam modern kepada petani muda sambil membiarkan warga menjalankan kalender adat seperti biasa.",
      "Menghormati alasan penolakan warga dengan santun serta mencatat pertimbangan tradisi lokal itu untuk dilaporkan ke pimpinan.",
      "Berdialog hormat dengan tetua adat memahami hitungan lokal, lalu menyelaraskan jadwal penyuluhan tanpa menabrak adat.",
      "Mewajibkan warga mengikuti jadwal tanam resmi dinas bila ingin tetap memperoleh jatah bantuan bibit pertanian.",
      "Menjelaskan secara sepihak bahwa metode dinas jauh lebih menguntungkan ketimbang mengikuti hitungan tradisi tetua adat."
    ],
    "optionScores": [
      3,
      4,
      5,
      1,
      2
    ],
    "answer": "C",
    "explanation": "Skor 5 memadukan dialog hormat bersama tetua adat dan penyelarasan program teknis agar diterima berkelanjutan oleh warga. Pilihan skor 4 sudah menghormati suara masyarakat secara santun dan tertib melapor ke pimpinan, namun belum proaktif menjembatani kesepakatan jadwal bersama.",
    "tip": "Program pemerintah akan diterima efektif di masyarakat adat bila dibahas bersama tokoh adat untuk menyelaraskan kearifan lokal."
  },
  {
    "id": "tkp-sos-004",
    "subPattern": "adaptasi-lingkungan-dan-kearifan-lokal",
    "difficulty": "sedang",
    "prompt": "Di daerah penempatan baru Anda, sebagian besar warga terbiasa mengonsumsi makanan khas daerah dengan bumbu tajam serta menyajikan jamuan ramah saat menerima tamu dinas dari kabupaten, sedangkan perut Anda belum terbiasa dengan jenis bumbu tersebut. Sikap santun Anda saat dijamu warga adalah ...",
    "options": [
      "Menolak langsung sajian berbumbu tajam di meja sambil meminta warga menyediakan masakan netral bagi tamu dari dinas.",
      "Menghindari setiap jamuan makan bersama warga selama bertugas di desa demi menjaga kondisi pencernaan pribadi.",
      "Mengapresiasi tulus keramahan tuan rumah dengan duduk akrab bersama warga, namun hanya meminum teh sambil beralasan sudah kenyang.",
      "Menghargai keramahan warga dengan mencicipi hidangan secukupnya secara sopan, lalu menjelaskan kondisi lambung secara halus.",
      "Menerima jamuan yang disediakan warga dengan ramah, lalu hanya menyantap nasi putih tanpa menjelaskan kendala perut."
    ],
    "optionScores": [
      2,
      1,
      4,
      5,
      3
    ],
    "answer": "D",
    "explanation": "Skor 5 menjaga kehormatan tuan rumah lewat apresiasi nyata mencicipi sajian sedikit serta komunikasi jujur dan halus tentang kondisi lambung. Pilihan skor 4 tetap tulus dan akrab saat bertamu bersama warga, tetapi menolak mencicipi hidangan dengan alasan sudah kenyang berisiko memicu salah paham berulang.",
    "tip": "Hormati keramahan lokal dengan apresiasi tulus dan komunikasi sopan jika ada keterbatasan kesehatan pribadi."
  },
  {
    "id": "tkp-sos-005",
    "subPattern": "adaptasi-lingkungan-dan-kearifan-lokal",
    "difficulty": "sedang",
    "prompt": "Sekolah di daerah penempatan Anda masih memiliki tradisi luhur budaya gotong royong serta seni musik tradisional yang mulai jarang diminati remaja akibat dominasi gim daring. Sebagai pegawai muda bidang kebudayaan dan pendidikan, inisiatif adaptif Anda bersama komunitas lokal adalah ...",
    "options": [
      "Membiarkan seni tradisional tergeser hiburan digital karena selera remaja dianggap sulit diarahkan kembali.",
      "Mewajibkan pelajar mengikuti latihan musik tradisional setelah jam sekolah meskipun minat remaja belum terbentuk.",
      "Mendukung ekstrakurikuler musik daerah yang sudah ada dengan rutin menghadiri pentas tahunan sekolah binaan.",
      "Mengusulkan lomba pentas seni tradisional rutin antarsekolah agar pelajar memiliki panggung melestarikan budaya daerah.",
      "Mengajak seniman lokal dan pelajar berkolaborasi mengemas musik tradisional menjadi pertunjukan kreatif di festival sekolah."
    ],
    "optionScores": [
      1,
      2,
      3,
      4,
      5
    ],
    "answer": "E",
    "explanation": "Skor 5 menghidupkan pelestarian budaya secara partisipatif dengan memadukan seniman daerah dan kreativitas pelajar sesuai minat zaman. Pilihan skor 4 sudah berinisiatif positif melalui lomba pentas tradisional, namun masih memakai pola kompetitif biasa tanpa pembaruan kolaboratif bersama seniman lokal.",
    "tip": "Sinergikan tokoh budaya lokal dengan kreativitas generasi muda untuk menghidupkan kembali kearifan lokal secara relevan."
  },
  {
    "id": "tkp-sos-006",
    "subPattern": "adaptasi-lingkungan-dan-kearifan-lokal",
    "difficulty": "sedang",
    "prompt": "Rekan kerja asli daerah setempat tampak kurang nyaman saat Anda menggunakan kata ganti sapaan yang lazim di daerah asal Anda tetapi di daerah baru ternyata bermakna kurang sopan secara lokal. Begitu mengetahui informasi tersebut, respons Anda adalah ...",
    "options": [
      "Berterima kasih atas koreksinya, meminta maaf tulus, dan langsung menyesuaikan sapaan sesuai etika lokal.",
      "Meminta maaf dengan sopan kepada rekan tersebut lalu berupaya memakai bahasa Indonesia formal saat berbincang.",
      "Menghentikan pemakaian kata sapaan itu mulai esok hari tanpa membahasnya lagi bersama rekan kerja di ruangan.",
      "Menjelaskan bahwa sapaan tersebut bernada akrab di kota asal agar rekan setempat memaklumi kebiasaan Anda.",
      "Tetap sesekali memakai sapaan itu dalam obrolan santai karena menganggap beda makna antarbahasa daerah hal biasa."
    ],
    "optionScores": [
      5,
      4,
      3,
      2,
      1
    ],
    "answer": "A",
    "explanation": "Skor 5 mencerminkan kerendahan hati budaya lewat rasa terima kasih, permintaan maaf tulus, dan kemauan belajar etika sapaan lokal. Pilihan skor 4 memang sopan meminta maaf dan beralih ke bahasa formal, tetapi kurang aktif mempelajari kesantunan setempat agar makin akrab.",
    "tip": "Jika tidak sengaja melanggar etiket lokal, berterima kasih atas koreksinya, minta maaf tulus, dan segera adaptasi."
  },
  {
    "id": "tkp-sos-007",
    "subPattern": "adaptasi-lingkungan-dan-kearifan-lokal",
    "difficulty": "sulit",
    "prompt": "Pemerintah daerah merencanakan pembangunan kawasan wisata di pesisir, tetapi nelayan lokal khawatir zona tangkap tradisional dan ritual laut tahunan mereka akan tersingkir oleh hotel komersial. Sebagai perwakilan tim perencanaan tata ruang daerah, pendekatan sosial budaya paling tepat Anda tawarkan adalah ...",
    "options": [
      "Mencatat seluruh aspirasi warga nelayan ke dalam berita acara rapat resmi untuk dibahas pada tahap kajian teknis lanjutan.",
      "Menggelar dialog bersama nelayan dan dinas terkait guna melindungi zona tangkap dan ritual laut sebagai aset wisata.",
      "Mengusulkan penyediaan koridor akses perahu nelayan tradisional di sisi pantai dekat kawasan hotel sebagai bentuk perhatian.",
      "Meneruskan rancangan kawasan hotel komersial seutuhnya karena lahan pesisir dinilai lebih produktif untuk wisata.",
      "Menjelaskan kepada warga bahwa pembangunan proyek hotel perlu berjalan penuh demi meningkatkan pendapatan pajak daerah."
    ],
    "optionScores": [
      3,
      5,
      4,
      1,
      2
    ],
    "answer": "B",
    "explanation": "Skor 5 menyatukan pembangunan wisata dan perlindungan ruang hidup nelayan melalui dialog partisipatif yang menjaga zona tangkap sekaligus tradisi laut. Pilihan skor 4 menunjukkan empati lewat usulan akses perahu, namun belum melindungi ruang ritual dan pelibatan ekonomi warga secara utuh.",
    "tip": "Solusi tata ruang berkelanjutan menyelaraskan pembangunan modern dengan perlindungan ruang sosial-budaya masyarakat lokal."
  },
  {
    "id": "tkp-sos-008",
    "subPattern": "adaptasi-lingkungan-dan-kearifan-lokal",
    "difficulty": "sulit",
    "prompt": "Di suatu daerah pegunungan yang Anda bina, terdapat norma adat pembagian hutan larangan (hutan keramat desa) yang ternyata secara ilmiah sangat efektif menjaga mata air desa dari kekeringan, namun belum tercantum dalam peta tata kelola lingkungan kabupaten. Langkah strategis Anda adalah ...",
    "options": [
      "Mengusulkan agar pengelolaan hutan adat tersebut diambil alih penuh oleh dinas daerah demi keseragaman administrasi lingkungan.",
      "Menganggap aturan hutan keramat bersifat mistis sehingga tidak dimasukkan dalam peta tata kelola wilayah daerah.",
      "Memfasilitasi pemetaan partisipatif bersama tetua adat dan dinas terkait agar hutan larangan diakui dalam regulasi daerah.",
      "Memberikan apresiasi tinggi atas kearifan warga menjaga mata air dan mendokumentasikan tradisi itu di laporan pembinaan dinas.",
      "Mendorong warga desa tetap melestarikan aturan hutan larangan secara swadaya sambil menunggu arahan dinas kabupaten."
    ],
    "optionScores": [
      2,
      1,
      5,
      4,
      3
    ],
    "answer": "C",
    "explanation": "Skor 5 memadukan kearifan ekologis lokal ke dalam perlindungan hukum formal daerah secara partisipatif bersama tokoh adat. Pilihan skor 4 sudah menghargai nilai konservasi warga dan mencatatnya di laporan, tetapi belum mengambil langkah strategis melembagakannya ke tata kelola kabupaten.",
    "tip": "Kearifan ekologis adat yang positif layak diadvokasi masuk ke perlindungan perencanaan formal daerah secara partisipatif."
  },
  {
    "id": "tkp-sos-009",
    "subPattern": "toleransi-antarumat-dan-keberagaman-budaya",
    "difficulty": "mudah",
    "prompt": "Saat menyusun jadwal acara malam keakraban dan rapat kerja luar kota kantor, Anda menyadari waktunya beririsan dengan hari besar ibadah sebagian pegawai dari agama minoritas di unit tersebut. Sebagai koordinator panitia, tindakan Anda adalah ...",
    "options": [
      "Tetap menggelar agenda rapat luar kota sesuai jadwal panitia karena pegawai yang beribadah hanya berjumlah sangat sedikit.",
      "Meminta pegawai yang merayakan hari besar tetap mengikuti pembukaan rapat sebentar sebelum pulang menjalankan ibadahnya.",
      "Membagikan rancangan jadwal acara kepada seluruh unit dan mempersilakan pegawai berhalangan mengajukan izin tidak hadir.",
      "Mengusulkan pergeseran tanggal rapat ke hari lain dan memastikan fasilitas ibadah tersedia agar tiap pegawai hadir setara.",
      "Menjalankan jadwal acara sesuai kesepakatan mayoritas pegawai, namun memberi izin dispensasi penuh bagi rekan yang merayakan ibadah."
    ],
    "optionScores": [
      1,
      2,
      3,
      5,
      4
    ],
    "answer": "D",
    "explanation": "Skor 5 mewujudkan toleransi inklusif dengan memilih tanggal netral agar seluruh pegawai dapat beribadah tenang sekaligus ikut rapat kerja setara. Pilihan skor 4 sudah menghormati hak ibadah lewat dispensasi penuh, tetapi tetap membuat pegawai minoritas tersisih dari kegiatan kebersamaan unit.",
    "tip": "Pastikan jadwal kegiatan bersama kantor menghormati hari besar dan waktu ibadah seluruh unsur pegawai."
  },
  {
    "id": "tkp-sos-010",
    "subPattern": "toleransi-antarumat-dan-keberagaman-budaya",
    "difficulty": "mudah",
    "prompt": "Salah satu rekan satu ruangan Anda sedang menjalankan ibadah puasa sesuai keyakinannya, sementara Anda dan beberapa rekan lain tidak berpuasa. Etika toleransi harian di ruang kerja yang paling tepat adalah ...",
    "options": [
      "Memilih makan siang dengan sopan di kantin gedung, namun membatasi interaksi santai agar tidak mengganggu ibadahnya.",
      "Tetap makan siang di luar ruangan kerja seperti kebiasaan harian agar suasana kantor terasa nyaman bagi semua pihak.",
      "Makan siang seperti biasa di meja kerja sendiri dengan pandangan bahwa ibadah puasa merupakan urusan pribadi masing-masing.",
      "Mengajak rekan lain makan makanan beraroma tajam di sebelah mejanya karena ibadah dianggap urusan pribadi.",
      "Menjaga tenggang rasa dengan makan secara wajar di area pantri, sekaligus memelihara obrolan akrab yang menghormati puasanya."
    ],
    "optionScores": [
      4,
      3,
      2,
      1,
      5
    ],
    "answer": "E",
    "explanation": "Skor 5 menampilkan tenggang rasa proporsional di pantri tanpa menciptakan jarak sosial di ruang kerja bersama. Pilihan skor 4 sudah beritikad baik menyingkir ke kantin dengan sopan saat makan siang, namun membatasi obrolan santai justru membuat suasana pergaulan terasa kaku.",
    "tip": "Wujud toleransi kerja yang hangat: menjaga tenggang rasa ruang dan ucapan secara wajar tanpa paksaan sepihak."
  },
  {
    "id": "tkp-sos-011",
    "subPattern": "toleransi-antarumat-dan-keberagaman-budaya",
    "difficulty": "sedang",
    "prompt": "Pada acara jamuan makan bersama saat pelatihan nasional lintas provinsi, beberapa peserta dari latar belakang agama dan kebiasaan berbeda memiliki pantangan makanan tertentu (seperti vegetarian maupun kehalalan makanan). Sebagai panitia konsumsi, tindakan terbaik Anda adalah ...",
    "options": [
      "Menyediakan menu halal dan nabati lengkap dengan label bahan yang jelas agar para peserta makan tenang bersama.",
      "Memesan hidangan katering standar acara sambil mempersilakan peserta memilih sendiri lauk yang sesuai aturan makannya.",
      "Memastikan menu utama aman bagi mayoritas serta memesan kotak khusus bagi peserta berpantang untuk diantar ke meja masing-masing.",
      "Mengimbau seluruh peserta menyesuaikan selera sementara selama tiga hari demi kelancaran jadwal konsumsi pelatihan.",
      "Menyajikan satu menu seragam demi efisiensi anggaran dan menyarankan peserta dengan pantangan mencari makan di sekitar hotel."
    ],
    "optionScores": [
      5,
      3,
      4,
      1,
      2
    ],
    "answer": "A",
    "explanation": "Skor 5 menjamin kenyamanan pangan lintas keyakinan lewat variasi menu halal maupun nabati yang berlabel transparan di meja bersama. Pilihan skor 4 tetap memenuhi kebutuhan pantangan peserta melalui pesanan khusus, tetapi kurang transparan pada label bahan dan memisahkan penyajiannya.",
    "tip": "Dalam acara majemuk, tunjukkan penghormatan inklusif melalui kejelasan label dan akomodasi kebutuhan dasar peserta."
  },
  {
    "id": "tkp-sos-012",
    "subPattern": "toleransi-antarumat-dan-keberagaman-budaya",
    "difficulty": "sedang",
    "prompt": "Di kompleks tempat tinggal Anda, warga tengah mempersiapkan perayaan hari keagamaan salah satu umat yang diperkirakan menimbulkan kepadatan parkir sementara selama tiga jam pada Minggu pagi. Sikap bertetangga yang paling menyejukkan adalah ...",
    "options": [
      "Menyampaikan keberatan ke pengurus RT agar kegiatan ibadah tidak memakai bahu jalan di depan deretan rumah warga lainnya.",
      "Bersikap terbuka dan membantu mengatur parkir warga agar ibadah khidmat dan akses jalan tetangga tetap lancar.",
      "Memasang penghalang di depan pagar rumah sambil menulis keluhan soal kemacetan jalan di grup percakapan warga.",
      "Memaklumi kepadatan jalan sementara dengan lapang dada serta memindahkan kendaraan pribadi agar tidak mengganggu parkir tamu.",
      "Menghormati kelancaran acara dengan tetap beraktivitas tenang di dalam rumah tanpa mencampuri pengaturan parkir warga."
    ],
    "optionScores": [
      2,
      5,
      1,
      4,
      3
    ],
    "answer": "B",
    "explanation": "Skor 5 mempraktikkan toleransi aktif dan gotong royong bertetangga demi kelancaran ibadah sekaligus ketertiban akses bersama. Pilihan skor 4 sudah berempati secara pribadi dengan memaklumi situasi dan menyingkirkan kendaraan, tetapi masih pasif tanpa membantu koordinasi warga.",
    "tip": "Kerukunan bertetangga diperkuat oleh dukungan koordinasi ketertiban bersama saat ada kegiatan warga lintas agama."
  },
  {
    "id": "tkp-sos-013",
    "subPattern": "toleransi-antarumat-dan-keberagaman-budaya",
    "difficulty": "sedang",
    "prompt": "Seorang rekan kerja baru memiliki tradisi berbusana khas budaya daerah maupun atribut keyakinannya yang sesuai aturan seragam kedinasan instansi, tetapi dua rekan lain melontarkan komentar stereotip di balik meja. Sebagai pegawai di unit yang sama, sikap Anda adalah ...",
    "options": [
      "Ikut tertawa kecil menanggapi komentar stereotip tersebut sekadar menjaga keakraban suasana istirahat dengan kedua rekan lama.",
      "Menyarankan rekan baru mengenakan busana yang lebih netral agar tidak lagi menjadi bahan pembicaraan rekan sekantor.",
      "Menyapa dan merangkul rekan baru dengan ramah sambil mengingatkan kedua rekan secara santun untuk saling menghormati.",
      "Tidak ikut menanggapi komentar mereka dan tetap berinteraksi ramah dengan rekan baru saat membahas urusan kantor.",
      "Menegur kedua rekan secara sopan di luar ruangan agar menghentikan komentar itu, meski belum menyapa rekan baru tersebut."
    ],
    "optionScores": [
      1,
      2,
      5,
      3,
      4
    ],
    "answer": "C",
    "explanation": "Skor 5 melindungi martabat rekan baru dengan merangkulnya ramah sekaligus meluruskan candaan stereotip rekan lain secara santun. Pilihan skor 4 berani menegur sopan perilaku stereotip tersebut, namun luput menguatkan dan menyambut rekan baru agar tidak merasa terasing.",
    "tip": "Tolak ejekan/stereotip berbasis identitas secara santun namun jelas, sekaligus rangkul pihak yang rentan tersisih."
  },
  {
    "id": "tkp-sos-014",
    "subPattern": "toleransi-antarumat-dan-keberagaman-budaya",
    "difficulty": "sedang",
    "prompt": "Dalam panitia acara peresmian gedung layanan baru daerah, beberapa tokoh mengusulkan rangkaian doa pembuka dipimpin satu pemuka agama saja sesuai agama mayoritas sementara tamu undangan mencakup beragam pemeluk agama. Usulan bijak Anda dalam rapat persiapan adalah ...",
    "options": [
      "Mengusulkan doa pembuka dipimpin satu pemuka agama saja sembari mempersilakan tamu berkeyakinan lain berdoa dalam hati masing-masing.",
      "Mengikuti keputusan suara terbanyak dalam rapat panitia secara sopan karena sesi doa hanya berlangsung sebentar.",
      "Mengusulkan peniadaan sesi doa dari susunan acara resmi agar rapat panitia tidak berdebat soal perwakilan agama.",
      "Mengusulkan doa hening secara serempak menurut keyakinan tiap tamu atau perwakilan lintas iman agar semua pihak dihormati.",
      "Mendukung doa satu agama mayoritas tanpa penyesuaian karena sebagian besar tamu menganut keyakinan tersebut."
    ],
    "optionScores": [
      4,
      3,
      2,
      5,
      1
    ],
    "answer": "D",
    "explanation": "Skor 5 menghadirkan keadilan dalam forum publik majemuk melalui doa inklusif yang memberi ruang setara bagi seluruh pemeluk agama. Pilihan skor 4 sudah berniat baik mempersilakan tamu lain berdoa dalam hati, namun tetap menonjolkan tata cara satu agama saja pada panggung resmi.",
    "tip": "Rancang acara publik bersama agar inklusif dan menghargai keyakinan seluruh peserta yang hadir."
  },
  {
    "id": "tkp-sos-015",
    "subPattern": "toleransi-antarumat-dan-keberagaman-budaya",
    "difficulty": "sulit",
    "prompt": "Sekelompok oknum warga menyebarkan selebaran penolakan terhadap rencana pembukaan rumah singgah sosial bagi pasien kurang mampu di lingkungan perumahan karena isu kecemasan tak berdasar terhadap asal-usul pasien luar daerah. Sebagai aparatur pembina wilayah yang menjunjung keadilan sosial dan kebinekaan, langkah penyelesaian Anda adalah ...",
    "options": [
      "Melaporkan peredaran selebaran penolakan itu kepada pimpinan wilayah sambil menunggu instruksi langkah penanganan resmi.",
      "Mengajak pengurus RT memeriksa izin resmi rumah singgah serta meminta pengelola memberi penjelasan tertulis ke warga.",
      "Meminta pengelola memindahkan lokasi rumah singgah ke kelurahan lain agar ketenteraman penghuni kompleks tetap terjaga.",
      "Menyarankan yayasan menunda pembukaan rumah singgah sementara waktu hingga kecemasan warga di perumahan mereda sendiri.",
      "Menggelar dialog terbuka bersama tokoh warga dan dinas kesehatan guna menjamin standar medis aman sekaligus merawat empati sosial."
    ],
    "optionScores": [
      3,
      4,
      1,
      2,
      5
    ],
    "answer": "E",
    "explanation": "Skor 5 meredam kecemasan warga dengan dialog terbuka berbasis fakta kesehatan sekaligus melindungi hak pasien tanpa tunduk pada stigma asal daerah. Pilihan skor 4 sudah tertib menempuh jalur administratif izin dan klarifikasi tertulis, namun kurang efektif membangun empati tatap muka.",
    "tip": "Atasi penolakan sosial berbasis stigma dengan edukasi fakta bersama tokoh wilayah sembari melindungi hak kemanusiaan yang sah."
  },
  {
    "id": "tkp-sos-016",
    "subPattern": "toleransi-antarumat-dan-keberagaman-budaya",
    "difficulty": "sulit",
    "prompt": "Di unit kerja Anda muncul perbedaan pendapat internal: sebagian pegawai mengusulkan pembiasaan doa pagi bersama secara seragam mengikuti tata cara agama tertentu saja setiap hari di ruang umum kantor, sementara pegawai dari keyakinan lain merasa canggung dan mulai menarik diri saat apel pagi. Sikap paling tepat Anda usulkan ke pimpinan unit adalah ...",
    "options": [
      "Mengusulkan doa apel secara hening menurut keyakinan tiap pegawai serta menyediakan ruang rohani yang setara.",
      "Menyarankan rekan yang merasa keberatan agar berdoa sendiri di meja kerjanya sebelum apel pagi kantor dimulai.",
      "Mendukung doa satu agama tertentu sebagai pembiasaan rutin dengan harapan rekan lain perlahan ikut menyesuaikan diri.",
      "Menghormati perbedaan iman rekan kantor dengan mengizinkan mereka menyusul bergabung setelah sesi doa bersama selesai.",
      "Mengikuti keputusan mayoritas unit sambil tetap bersikap ramah dan menghargai rekan yang memilih absen saat doa."
    ],
    "optionScores": [
      5,
      2,
      1,
      4,
      3
    ],
    "answer": "A",
    "explanation": "Skor 5 merawat kebersamaan apel pagi lewat doa hening inklusif sekaligus memfasilitasi pembinaan iman tiap agama secara adil. Pilihan skor 4 menghormati keyakinan berbeda dengan memberi kelonggaran menyusul masuk, namun tetap memisahkan kebersamaan pegawai saat apel pagi.",
    "tip": "Acara resmi instansi publik bersifat inklusif untuk semua pemeluk agama; ruang spiritual khusus disediakan setara bagi tiap kelompok iman."
  },
  {
    "id": "tkp-sos-017",
    "subPattern": "komunikasi-lintas-budaya-dan-bahasa",
    "difficulty": "mudah",
    "prompt": "Seorang warga lanjut usia di loket pelayanan tampak hanya fasih berbahasa daerah setempat dan kesulitan menyusun kalimat dalam bahasa Indonesia saat menjelaskan keperluannya. Tindakan paling efektif dan hormat adalah ...",
    "options": [
      "Berbicara lebih cepat memakai bahasa Indonesia resmi agar beliau segera memahami alur syarat di loket pelayanan.",
      "Menyimak sabar dengan bahasa sederhana lalu meminta bantuan rekan yang fasih bahasa daerah beliau agar maksudnya tepat.",
      "Mengarahkan beliau duduk sebentar untuk menelepon kerabatnya sebagai penerjemah supaya antrean warga di belakang tetap lancar.",
      "Memproses berkas sebatas bagian yang dimengerti sambil menyarankan beliau agar lain kali datang didampingi anggota keluarga.",
      "Mendengarkan penjelasan beliau dengan ramah dan sabar, lalu menulis kata sederhana di kertas agar maksudnya bisa dipahami."
    ],
    "optionScores": [
      1,
      5,
      2,
      3,
      4
    ],
    "answer": "B",
    "explanation": "Skor 5 memastikan warga lansia memperoleh layanan tepat dengan menyimak sabar dan melibatkan rekan yang menguasai bahasa daerahnya. Pilihan skor 4 juga ramah, sabar, dan berusaha membantu lewat tulisan sederhana, namun berisiko kurang akurat dibanding menghadirkan jembatan bahasa daerah.",
    "tip": "Jembatani kendala bahasa warga dengan kesabaran, bahasa sederhana, serta bantuan penerjemah internal bila tersedia."
  },
  {
    "id": "tkp-sos-018",
    "subPattern": "komunikasi-lintas-budaya-dan-bahasa",
    "difficulty": "mudah",
    "prompt": "Dalam rapat tim yang diikuti pegawai dari berbagai suku bangsa Indonesia, dua rekan dari daerah berbeda asyik mengobrol memakai bahasa daerah mereka berdua tentang materi pekerjaan rapat, membuat rekan dari daerah lain bingung tidak ikut memahami. Sebagai anggota rapat, sikap bijak Anda adalah ...",
    "options": [
      "Mengajukan pertanyaan dalam bahasa Indonesia kepada keduanya agar bahasan materi rapat kembali dapat diikuti seluruh tim.",
      "Memilih diam menyimak catatan sambil menunggu kedua rekan tersebut kembali memakai bahasa Indonesia saat rapat.",
      "Mengingatkan ramah dengan senyum agar diskusi kerja kembali memakai bahasa Indonesia supaya semua anggota terlibat.",
      "Menegur kedua rekan tersebut dengan nada kaku bahwa berbicara bahasa daerah di rapat resmi melanggar tata tertib kantor.",
      "Ikut berbicara menggunakan bahasa daerah Anda sendiri supaya suasana diskusi dengan rekan sedaerah terasa akrab."
    ],
    "optionScores": [
      4,
      3,
      5,
      2,
      1
    ],
    "answer": "C",
    "explanation": "Skor 5 menjaga inklusivitas forum lintas suku dengan mengingatkan ramah agar memakai bahasa Indonesia tanpa menyudutkan bahasa daerah. Pilihan skor 4 berupaya sopan mengalihkan topik lewat pertanyaan bahasa Indonesia, tetapi belum membangun kesadaran bersama tentang etika bahasa rapat.",
    "tip": "Gunakan bahasa persatuan bahasa Indonesia di forum lintas daerah secara santun agar seluruh anggota tim terlibat setara."
  },
  {
    "id": "tkp-sos-019",
    "subPattern": "komunikasi-lintas-budaya-dan-bahasa",
    "difficulty": "sedang",
    "prompt": "Anda berasal dari budaya yang terbiasa menyampaikan koreksi secara lugas dan blak-blakan, namun kini bekerja bersama mayoritas rekan dari budaya yang sangat menjaga kehalusan rasa dan penyampaian tidak langsung. Agar masukan kerja tetap tersampaikan jelas tanpa melukai hubungan, penyesuaian Anda adalah ...",
    "options": [
      "Menahan penyampaian koreksi langsung dan sesekali menitipkan masukan lewat atasan supaya tidak memicu gesekan pribadi.",
      "Menyampaikan koreksi teknis lewat pesan tertulis dengan bahasa santun agar rekan kerja tidak merasa canggung secara langsung.",
      "Tetap menyampaikan kritik secara blak-blakan di forum terbuka karena kejujuran kerja dianggap lebih utama dari rasa.",
      "Menyampaikan masukan objektif berbasis fakta kerja dengan pilihan kata halus pada waktu tepat demi menjaga martabat rekan.",
      "Menghindari memberi kritik pekerjaan kepada rekan satu tim demi menjaga keharmonisan hubungan sehari-hari di kantor."
    ],
    "optionScores": [
      3,
      4,
      1,
      5,
      2
    ],
    "answer": "D",
    "explanation": "Skor 5 menjaga ketepatan substansi masukan berbasis fakta sembari menyesuaikan diksi halus dan waktu agar hubungan tetap harmonis. Pilihan skor 4 sudah berhati-hati memakai bahasa santun lewat pesan tertulis, tetapi kurang efektif dibanding komunikasi langsung penuh empati.",
    "tip": "Jaga ketegasan substansi kerja dengan membungkus penyampaiannya memakai diksi santun yang menghormati konteks budaya lokal."
  },
  {
    "id": "tkp-sos-020",
    "subPattern": "komunikasi-lintas-budaya-dan-bahasa",
    "difficulty": "sedang",
    "prompt": "Ketika melayani warga dari daerah berlogat intonasi tinggi yang terdengar seperti sedang membentak padahal sebenarnya cara bicaranya sehari-hari memang tegas, reaksi profesional Anda adalah ...",
    "options": [
      "Meminta pemohon di loket menurunkan volume suara terlebih dahulu sebelum pemeriksaan dokumen pengajuannya dilanjutkan.",
      "Merespons warga tersebut dengan intonasi suara sama tingginya karena menganggap petugas tidak dihormati di meja layanan.",
      "Menjaga suara tetap pelan dan sopan selama melayani warga tersebut walau merasa kurang nyaman dengan nada kerasnya.",
      "Menyelesaikan layanan berkas warga tersebut secara ramah dan cepat tanpa memperpanjang obrolan di meja loket.",
      "Memahami perbedaan intonasi budaya tanpa prasangka, tetap tenang mendengarkan, dan melayani keperluan warga hingga tuntas."
    ],
    "optionScores": [
      2,
      1,
      4,
      3,
      5
    ],
    "answer": "E",
    "explanation": "Skor 5 menunjukkan kepekaan budaya yang membedakan gaya bicara daerah dengan niat emosi, sehingga layanan tetap tenang dan tuntas. Pilihan skor 4 berhasil mengendalikan tutur kata agar tetap sopan di luar, namun masih menyimpan ketidaknyamanan dan prasangka terhadap logat warga.",
    "tip": "Bedakan gaya intonasi suara khas suatu daerah dengan niat emosi; tanggapi tetap tenang dan fokus pada solusi."
  },
  {
    "id": "tkp-sos-021",
    "subPattern": "komunikasi-lintas-budaya-dan-bahasa",
    "difficulty": "sedang",
    "prompt": "Kantor Anda menyelenggarakan sosialisasi program digitalisasi bagi warga lintas kecamatan yang memiliki beragam dialek serta istilah asing teknis seperti 'unggah PDF', 'verifikasi OTP', dan 'autentikasi'. Untuk memastikan informasi dipahami merata, pendekatan komunikasi terbaik adalah ...",
    "options": [
      "Menerjemahkan istilah teknis ke bahasa sehari-hari dengan peraga visual langkah nyata dan sesi tanya jawab.",
      "Tetap memakai istilah teknologi berbahasa Inggris agar peserta sosialisasi terbiasa mengikuti perkembangan sistem.",
      "Menyampaikan seluruh materi sesuai paparan modul pusat lalu membuka sesi tanya jawab singkat di akhir pertemuan.",
      "Meminta perangkat desa membantu warga lansia belakangan karena istilah aplikasi digital sulit diubah ke bahasa lokal.",
      "Menjelaskan alur layanan secara perlahan memakai bahasa resmi lalu membagikan buku panduan bergambar usai acara."
    ],
    "optionScores": [
      5,
      1,
      3,
      2,
      4
    ],
    "answer": "A",
    "explanation": "Skor 5 menembus batas istilah teknis dengan menerjemahkannya ke bahasa warga sehari-hari disertai peraga visual interaktif. Pilihan skor 4 sudah berupaya ramah lewat tempo bicara perlahan dan panduan bergambar, tetapi masih mempertahankan istilah resmi yang sulit dicerna sebagian warga.",
    "tip": "Sederhanakan jargon birokrasi/TI menjadi bahasa membumi dan peraga visual agar dipahami semua lapisan masyarakat."
  },
  {
    "id": "tkp-sos-022",
    "subPattern": "komunikasi-lintas-budaya-dan-bahasa",
    "difficulty": "sedang",
    "prompt": "Seorang tamu mitra internasional datang meninjau program unggulan layanan terpadu daerah Anda dan mengajak berdialog mengenai inovasi pelayanan, sementara rekan staf lain tampak canggung berkomunikasi dalam bahasa asing. Sebagai pegawai yang menguasai bahasa Indonesia baik dan cukup cakap berbahasa Inggris dasar, sikap Anda adalah ...",
    "options": [
      "Menyambut ramah tamu mitra dengan sangat sopan lalu mengambil alih seluruh dialog bahasa Inggris agar agenda berjalan lancar.",
      "Menyambut tamu mitra dengan hangat, menjembatani dialog lintas bahasa secara akurat, dan melibatkan rekan tim lain.",
      "Menyerahkan dokumen profil program berbahasa Inggris kepada tamu mitra supaya diskusi lisan tidak perlu berlangsung lama.",
      "Menjaga jarak dari meja penerimaan tamu karena khawatir keliru tata bahasa Inggris di hadapan rekan sekantor.",
      "Menjawab pertanyaan tamu mitra secara singkat sesuai kosakata yang dikuasai sambil menantikan pimpinan mengambil alih."
    ],
    "optionScores": [
      4,
      5,
      2,
      1,
      3
    ],
    "answer": "B",
    "explanation": "Skor 5 memaksimalkan kecakapan bahasa asing secara rendah hati sebagai jembatan kolaborasi sambil tetap melibatkan kontribusi rekan tim. Pilihan skor 4 memang sigap, ramah, dan sopan melayani tamu mitra, tetapi memonopoli dialog sehingga rekan kerja lain tetap pasif tersisih.",
    "tip": "Jadikan kemampuan bahasa asing sebagai jembatan inklusif kolaborasi tim dengan tetap bermartabat dan melibatkan rekan kerja."
  },
  {
    "id": "tkp-sos-023",
    "subPattern": "komunikasi-lintas-budaya-dan-bahasa",
    "difficulty": "sulit",
    "prompt": "Saat menyusun kampanye komunikasi publik pencegahan stunting untuk seluruh wilayah kabupaten yang terdiri dari masyarakat pesisir, pegunungan, dan perkotaan, materi promosi sebelumnya ternyata hanya memakai contoh menu pangan modern kota yang sulit ditemui dan mahal bagi warga pegunungan serta pesisir. Perbaikan materi komunikasi paling tepat adalah ...",
    "options": [
      "Tetap membagikan materi kampanye yang sudah tercetak sambil menjadwalkan revisi contoh menu untuk tahun anggaran baru.",
      "Mempertahankan contoh menu standar kota karena dianggap telah mencerminkan pedoman gizi nasional yang seragam.",
      "Menyesuaikan pesan kampanye dengan contoh pangan lokal pesisir dan gunung dalam bahasa akrab agar mudah diterapkan.",
      "Menambahkan keterangan pada materi lama bahwa warga desa boleh mengganti contoh menu kota dengan bahan di pasar lokal.",
      "Meminta kader desa menyesuaikan contoh menu secara lisan di posyandu tanpa mengubah desain materi promosi cetak."
    ],
    "optionScores": [
      3,
      1,
      5,
      4,
      2
    ],
    "answer": "C",
    "explanation": "Skor 5 melokalkan contoh menu gizi dengan bahan pangan pesisir maupun pegunungan dan bahasa akrab agar langsung bisa dipraktikkan warga. Pilihan skor 4 menyadari perlunya bahan lokal lewat catatan tambahan, namun tetap menjadikan menu kota sebagai acuan utama yang kurang relevan.",
    "tip": "Sesuaikan contoh pesan kebijakan publik dengan konteks budaya dan potensi lokal agar efektif dilaksanakan masyarakat."
  },
  {
    "id": "tkp-sos-024",
    "subPattern": "komunikasi-lintas-budaya-dan-bahasa",
    "difficulty": "sulit",
    "prompt": "Di forum dialog terbuka antara pemerintah daerah dan komunitas nelayan mengenai pengaturan alat tangkap ramah lingkungan, ketegangan memuncak karena istilah regulasi teknis kementerian terdengar seperti ancaman menutup mata pencaharian nelayan. Sebagai fasilitator dialog yang ditugaskan meredam situasi, pendekatan komunikasi paling tepat adalah ...",
    "options": [
      "Menegaskan bahwa aturan kementerian wajib dipatuhi seluruh daerah karena pelanggaran alat tangkap berisiko sanksi hukum.",
      "Menunda pembahasan pasal aturan teknis dengan tenang dan mendengarkan seluruh keluhan nelayan penuh santun untuk dicatat resmi.",
      "Menjelaskan ulang tujuan pelestarian laut secara singkat lalu meminta nelayan mengirim masukan tertulis usai forum.",
      "Mengubah pendekatan menjadi dialog empatik dengan bahasa sederhana soal hasil laut jangka panjang dan usulan transisi alat.",
      "Menghentikan sementara dialog terbuka di lokasi dan meneruskan sosialisasi aturan melalui papan pengumuman pelabuhan."
    ],
    "optionScores": [
      2,
      4,
      3,
      5,
      1
    ],
    "answer": "D",
    "explanation": "Skor 5 meredam ketegangan dengan bahasa membumi tentang keberlanjutan nafkah nelayan sekaligus menampung solusi transisi secara empatik. Pilihan skor 4 mampu mendinginkan suasana dengan mendengarkan keluhan penuh santun, tetapi belum menjembatani tujuan aturan dan langkah transisinya.",
    "tip": "Terjemahkan bahasa aturan teknis ke nilai manfaat nyata bagi kehidupan warga sambil membangun empati dan solusi transisi."
  },
  {
    "id": "tkp-sos-025",
    "subPattern": "kepekaan-sosial-dan-gotong-royong",
    "difficulty": "mudah",
    "prompt": "Di pagi hari saat Anda tiba di kantor, hujan semalaman menyebabkan saluran pembuangan air di halaman samping tersumbat sampah dan menggenangi akses jalan warga yang datang ke loket layanan, sementara petugas kebersihan sedang sakit izin mendadak. Sikap Anda adalah ...",
    "options": [
      "Membiarkan genangan air di halaman karena pembersihan saluran bukan termasuk tugas pokok jabatan pelayanan Anda.",
      "Segera melaporkan genangan air akibat saluran tersumbat ke bagian umum agar dicarikan petugas kebersihan pengganti.",
      "Melangkah hati-hati melewati pinggir genangan menuju ruang kerja sambil berharap air segera surut menjelang siang.",
      "Memasang penanda lantai licin dan mengarahkan warga lewat jalur kering sembari menghubungi petugas bagian umum kantor.",
      "Mengajak rekan yang sudah datang bergotong royong membersihkan sumbatan saluran air agar akses warga lancar lalu melapor."
    ],
    "optionScores": [
      1,
      3,
      2,
      4,
      5
    ],
    "answer": "E",
    "explanation": "Skor 5 menunjukkan kepekaan sosial dan gotong royong langsung mengatasi kendala lapangan demi kelancaran akses warga. Pilihan skor 4 sudah peduli keselamatan warga dengan memasang penanda dan mengarahkan jalur kering, namun hanya menunggu petugas alih-alih bergerak membersihkan bersama.",
    "tip": "Tunjukkan kepedulian nyata dan inisiatif gotong royong ketika kendala lapangan mengganggu kenyamanan publik."
  },
  {
    "id": "tkp-sos-026",
    "subPattern": "kepekaan-sosial-dan-gotong-royong",
    "difficulty": "mudah",
    "prompt": "Keluarga salah satu petugas keamanan kantor mengalami musibah kebakaran rumah pada malam hari hingga seluruh pakaian kerja serta perabot rumahnya habis. Sebagai rekan di lingkungan kerja yang sama, langkah solidaritas terbaik adalah ...",
    "options": [
      "Menggalang bantuan sukarela secara transparan bersama tim, memenuhi kebutuhan mendesak, dan menjenguk korban.",
      "Menyisihkan donasi pribadi lalu mengajak beberapa rekan dekat ikut menitipkan bantuan ke rumah petugas keamanan itu.",
      "Mengusulkan pemotongan tunjangan pegawai secara otomatis lewat bendahara agar bantuan sosial cepat terkumpul besar.",
      "Sekadar membagikan kabar musibah kebakaran itu ke media sosial pribadi dengan harapan pihak luar membantu tanpa turun langsung.",
      "Mengirimkan ucapan belasungkawa di grup kantor sambil menunggu arahan resmi koordinator jika ada penggalangan dana."
    ],
    "optionScores": [
      5,
      4,
      2,
      1,
      3
    ],
    "answer": "A",
    "explanation": "Skor 5 menghidupkan solidaritas kerja secara proaktif, sukarela, transparan, dan menghadirkan dukungan moral langsung ke keluarga korban. Pilihan skor 4 sudah menunjukkan kepedulian pribadi bersama rekan dekat, tetapi skalanya terbatas dan belum menggerakkan kebersamaan seluruh unit.",
    "tip": "Respons musibah sosial dengan solidaritas proaktif, sukarela, transparan, dan empati nyata."
  },
  {
    "id": "tkp-sos-027",
    "subPattern": "kepekaan-sosial-dan-gotong-royong",
    "difficulty": "sedang",
    "prompt": "Menjelang musim hujan ekstrem, lingkungan RT tempat tinggal Anda mengagendakan kerja bakti bersih selokan dan pemangkasan dahan pohon rawan tumbang tepat pada hari Minggu pagi saat Anda berniat berolahraga santai bersama keluarga. Tindakan Anda adalah ...",
    "options": [
      "Menitipkan iuran konsumsi ke pengurus RT sebagai pengganti kehadiran karena rencana olahraga keluarga sudah dijadwalkan.",
      "Menyesuaikan jadwal olahraga keluarga agar tetap terlibat aktif bergotong royong membersihkan selokan bersama warga.",
      "Tetap berangkat berolahraga pagi tanpa memberi kabar karena menganggap pembersihan selokan tugas petugas kota.",
      "Mengirimkan makanan ringan untuk warga yang bekerja bakti serta mampir menyapa hangat sebentar sebelum pergi berolahraga.",
      "Mengusulkan ke pengurus RT agar kerja bakti dijadwalkan di luar Minggu pagi supaya waktu olahraga warga tak terganggu."
    ],
    "optionScores": [
      3,
      5,
      1,
      4,
      2
    ],
    "answer": "B",
    "explanation": "Skor 5 mengutamakan kebersamaan gotong royong mitigasi banjir lewat keterlibatan langsung sambil tetap mengatur ulang waktu olahraga keluarga. Pilihan skor 4 beritikad baik menyumbang konsumsi dan menyapa hangat warga, namun melewatkan kerja fisik bersama yang mempererat solidaritas.",
    "tip": "Kehadiran dan keterlibatan langsung dalam kerja bakti warga memperkuat rasa kebersamaan sekaligus mitigasi lingkungan."
  },
  {
    "id": "tkp-sos-028",
    "subPattern": "kepekaan-sosial-dan-gotong-royong",
    "difficulty": "sedang",
    "prompt": "Saat perjalanan pulang kerja, Anda melihat seorang pengendara lanjut usia terjatuh di pinggir jalan akibat jalan berlubang dan barang belanjaannya berserakan sementara warga sekitar awalnya hanya menonton ragu-ragu. Tindakan tepat Anda adalah ...",
    "options": [
      "Mencatat lokasi jalan berlubang untuk dilaporkan lewat aplikasi pengaduan setelah tiba di rumah tanpa berhenti di jalan.",
      "Segera menepi aman untuk membantu pengendara tersebut bangkit berdiri dan mengamankan seluruh barang belanjaannya ke trotoar.",
      "Segera menepi aman, memeriksa kondisi korban, merapikan barangnya, dan mengajak warga mengatur jalan serta panggil bantuan.",
      "Memperlambat laju kendaraan guna memastikan warga pinggir jalan sudah bergerak menolong sebelum melanjutkan perjalanan pulang.",
      "Terus melaju pulang agar kendaraan Anda tidak ikut menyebabkan kemacetan arus lalu lintas di jam pulang kerja sore."
    ],
    "optionScores": [
      2,
      4,
      5,
      3,
      1
    ],
    "answer": "C",
    "explanation": "Skor 5 memberi pertolongan darurat yang utuh mulai dari memeriksa kondisi fisik korban, memanggil bantuan, hingga menggerakkan warga menjaga keamanan lalu lintas. Pilihan skor 4 sigap membantu korban berdiri dan menepikan barang, tetapi belum memastikan kebutuhan medis lanjutan maupun pengamanan arus jalan.",
    "tip": "Pada kondisi darurat sosial di ruang publik, utamakan keselamatan korban dan tindakan pertolongan langsung yang aman."
  },
  {
    "id": "tkp-sos-029",
    "subPattern": "kepekaan-sosial-dan-gotong-royong",
    "difficulty": "sedang",
    "prompt": "Program Jumat Berbagi atau kegiatan sosial sukarela kantor kerap sepi partisipasi karena sebagian pegawai menganggap sumbangan selalu harus berupa dana besar dan dikelola rumit. Jika Anda ingin membangkitkan kembali semangat gotong royong di kantor, gagasan praktis Anda adalah ...",
    "options": [
      "Menghentikan sementara kegiatan sosial sukarela karena kesibukan kerja dinilai menyulitkan partisipasi pegawai.",
      "Tetap menjalankan program sosial itu secara rutin bersama segelintir rekan yang mau tanpa mengubah pola penggalangan.",
      "Mengusulkan jadwal giliran iuran wajib tiap bidang per bulan agar kontribusi pegawai terlihat merata.",
      "Menggagas partisipasi ringan berupa buku, sembako, atau tenaga sukarela dengan laporan terbuka agar semua ikut ringan.",
      "Menyusun rincian laporan penggunaan dana kegiatan secara rapi lalu menempelkannya di papan pengumuman untuk menarik kepercayaan."
    ],
    "optionScores": [
      1,
      3,
      2,
      5,
      4
    ],
    "answer": "D",
    "explanation": "Skor 5 menghidupkan gotong royong dengan membuka ruang sumbangan beragam yang ringan, sukarela, dan transparan bagi seluruh pegawai. Pilihan skor 4 sudah berupaya membangun kepercayaan lewat laporan dana yang rapi, namun belum memperluas cara berpartisipasi selain uang.",
    "tip": "Tumbuhkan gotong royong melalui cara berpartisipasi yang ringan, terbuka, variatif, dan transparan penyalurannya."
  },
  {
    "id": "tkp-sos-030",
    "subPattern": "kepekaan-sosial-dan-gotong-royong",
    "difficulty": "sedang",
    "prompt": "Anda bertugas di tim pendampingan desa pascabencana gempa bumi. Meski tugas utama Anda mendata kerusakan bangunan kantor desa, Anda mendapati posko pengungsian ibu dan balita kekurangan relawan pengelola logistik popok dan makanan bayi sore itu. Tindakan Anda adalah ...",
    "options": [
      "Menyelesaikan pendataan kantor desa tepat waktu lalu menghubungi posko induk kecamatan meminta tambahan relawan logistik.",
      "Langsung beralih menyalurkan logistik posko balita dan menunda pendataan kerusakan gedung tanpa melapor kepada koordinator.",
      "Menyampaikan keluhan soal minimnya relawan posko ibu dan balita dalam rapat evaluasi malam agar panitia segera berbenah.",
      "Berfokus menuntaskan pemeriksaan bangunan desa hingga selesai karena pengelolaan logistik balita menjadi tugas bidang lain.",
      "Menuntaskan pendataan bangunan desa sesuai target, lalu segera berkoordinasi ikut menyortir logistik darurat ibu dan balita."
    ],
    "optionScores": [
      4,
      2,
      1,
      3,
      5
    ],
    "answer": "E",
    "explanation": "Skor 5 memadukan kedisiplinan amanah tugas utama dengan solidaritas cepat terjun membantu posko balita secara terkoordinasi. Pilihan skor 4 sudah bertanggung jawab menuntaskan pendataan dan melaporkan kebutuhan relawan, tetapi menunda pertolongan lapangan sambil menunggu bantuan luar datang.",
    "tip": "Dalam kondisi bencana, tuntaskan kewajiban utama lalu segera ulurkan tenaga pada posko kemanusiaan secara terkoordinasi."
  },
  {
    "id": "tkp-sos-031",
    "subPattern": "kepekaan-sosial-dan-gotong-royong",
    "difficulty": "sulit",
    "prompt": "Di unit tempat Anda bekerja, ada seorang rekan kerja yang belakangan sering tampak murung, menyendiri, dan performanya menurun drastis. Setelah rekan lain mulai menggosipkannya sebagai pemalas, kepekaan sosial yang paling bijaksana untuk Anda lakukan adalah ...",
    "options": [
      "Mendekatinya empat mata penuh empati, mendengar tanpa menghakimi, mengarahkan bantuan, dan meredam gosip.",
      "Tidak ikut menyebarkan gosip yang beredar sambil membiarkan rekan tersebut menenangkan masalah pribadinya sendiri.",
      "Menjaga jarak pergaulan dengannya karena khawatir sikap menyendirinya memengaruhi suasana kerja seluruh anggota tim.",
      "Menegur halus rekan lain agar berhenti bergosip dan menyapa rekan murung itu lebih ramah di sela jam kerja.",
      "Melaporkan penurunan kinerjanya langsung kepada atasan agar pembagian tugas di unit segera ditata ulang pekan ini."
    ],
    "optionScores": [
      5,
      3,
      1,
      4,
      2
    ],
    "answer": "A",
    "explanation": "Skor 5 merawat kesehatan sosial rekan lewat pendekatan privat yang empatik, meredam gosip, dan mengarahkan ke dukungan tepat. Pilihan skor 4 sudah baik menghentikan gosip dan bersikap ramah di luar, namun belum menggali dukungan personal yang dibutuhkan rekan tersebut.",
    "tip": "Tangani perubahan perilaku rekan lewat pendekatan pribadi yang empatik dan menjaga privasi, bukan gosip atau vonis."
  },
  {
    "id": "tkp-sos-032",
    "subPattern": "kepekaan-sosial-dan-gotong-royong",
    "difficulty": "sulit",
    "prompt": "Sebuah daerah padat permukiman menghadapi persoalan menumpuknya sampah plastik di bantaran sungai setiap kali banjir kecil datang. Warga saling menyalahkan antar-RW hulu dan hilir tanpa aksi nyata. Sebagai anggota tim pelestarian lingkungan kelurahan yang dipercaya warga, langkah kolaborasi gotong royong paling berkelanjutan adalah ...",
    "options": [
      "Mendorong pengurus RW membuat aturan larangan membuang sampah ke sungai disertai sanksi denda sosial bagi pelanggarnya.",
      "Mempertemukan warga hulu dan hilir menyepakati aksi bersih berkala, bank sampah produktif, dan pemantauan rutin.",
      "Mengajak kelompok pemuda RW hilir yang terdampak banjir menggelar aksi bersih rutin di bantaran sungai setiap akhir pekan.",
      "Mengajukan penambahan jadwal truk kebersihan kelurahan agar tumpukan plastik di bantaran sungai lebih sering terangkut.",
      "Membiarkan tiap pengurus RW mengurus wilayahnya karena sulit menyatukan kesadaran warga hulu dan hilir."
    ],
    "optionScores": [
      2,
      5,
      4,
      3,
      1
    ],
    "answer": "B",
    "explanation": "Skor 5 mengakhiri saling menyalahkan dengan menyatukan RW hulu dan hilir dalam gotong royong berkelanjutan serta sistem bank sampah produktif. Pilihan skor 4 menggerakkan kerja bakti pemuda secara nyata, tetapi baru menjangkau wilayah hilir tanpa membenahi sumber sampah di hulu.",
    "tip": "Pecahkan masalah sosial lintas warga dengan menyatukan pihak hulu dan hilir dalam sistem gotong royong bernilai guna."
  },
  {
    "id": "tkp-sos-033",
    "subPattern": "menolak-diskriminasi-dan-primordialisme",
    "difficulty": "mudah",
    "prompt": "Ketika membentuk kelompok tim kecil panitia peringatan hari kemerdekaan di kantor, salah satu rekan mengajak Anda memilih anggota khusus dari suku dan almamater yang sama saja agar cepat akrab dan gampang sepakat. Sikap Anda adalah ...",
    "options": [
      "Menyetujui usulan memilih rekan sedaerah saja agar rapat persiapan acara kemerdekaan cepat akrab dan lancar.",
      "Menyarankan agar penentuan panitia diacak berdasarkan daftar hadir pegawai tanpa memandang latar belakang anggota.",
      "Menolak usulan itu dengan ramah lalu mengajak menyusun panitia beragam sesuai minat, keahlian, dan perwakilan unit.",
      "Mengakomodasi sebagian usulan rekan demi kekompakan inti sambil menambah dua orang dari bagian lain sebagai pelengkap.",
      "Menolak santun pemilihan anggota berdasarkan kesamaan asal lalu mengusulkan agar atasan menunjuk tim panitia secara netral."
    ],
    "optionScores": [
      1,
      3,
      5,
      2,
      4
    ],
    "answer": "C",
    "explanation": "Skor 5 menolak primordialisme dengan ramah dan mendorong pembentukan tim inklusif berbasis keahlian serta keterwakilan unit kerja. Pilihan skor 4 juga menolak sikap pilih kasih secara santun, tetapi melemparkan keputusan ke atasan tanpa mengupayakan keterlibatan lintas bagian secara adil.",
    "tip": "Hindari pengkotak-kotakan tim berdasar suku, agama, atau almamater; bangun tim berdasarkan kompetensi dan keterbukaan."
  },
  {
    "id": "tkp-sos-034",
    "subPattern": "menolak-diskriminasi-dan-primordialisme",
    "difficulty": "mudah",
    "prompt": "Seorang pemohon layanan meminta didahulukan pengurusannya hanya karena mengaku satu daerah asal kelahiran dan memiliki marga yang sama dengan Anda. Sikap profesional Anda adalah ...",
    "options": [
      "Tetap melayaninya secara adil sesuai nomor urut antrean tanpa hak khusus, meski berbicara singkat untuk menghindari canggung.",
      "Membantu meneliti berkasnya lebih dulu sebelum antreannya tiba, asalkan tetap menunggu giliran panggilan akhir.",
      "Mendahulukan pengurusan berkasnya secara diam-diam sebagai bentuk rasa persaudaraan sesama perantau satu daerah.",
      "Menyambut hangat sebagai sesama warga, lalu menjelaskan tegas namun sopan bahwa layanan adil mengikuti nomor antrean.",
      "Meminta rekan petugas di loket sebelah menangani permohonannya dengan ramah agar Anda tidak merasa sungkan."
    ],
    "optionScores": [
      4,
      2,
      1,
      5,
      3
    ],
    "answer": "D",
    "explanation": "Skor 5 menyeimbangkan keramahan sebagai sesama warga dengan ketegasan menjaga keadilan antrean tanpa memihak asal daerah. Pilihan skor 4 sudah menegakkan aturan antrean secara adil, namun sikap singkat dan terburu-buru masih kurang mencerminkan pelayanan publik yang hangat.",
    "tip": "Jawab permintaan hak istimewa berdasar kesamaan asal daerah secara hangat namun tegas berpegang pada keadilan antrean."
  },
  {
    "id": "tkp-sos-035",
    "subPattern": "menolak-diskriminasi-dan-primordialisme",
    "difficulty": "sedang",
    "prompt": "Dalam diskusi penilaian kandidat pelamar tenaga pendukung administrasi kantor, salah satu penilai berkomentar bahwa pelamar perempuan atau lulusan daerah tertentu sebaiknya tidak usah diprioritaskan karena dikhawatirkan cepat mengajukan cuti atau kurang terbiasa ritme kota. Sikap tegas Anda dalam rapat adalah ...",
    "options": [
      "Mengalihkan pembicaraan rapat ke daftar pertanyaan wawancara teknis tanpa mengomentari pendapat penilai tersebut.",
      "Menyetujui kekhawatiran penilai tersebut sebagai pertimbangan praktis demi menjaga kestabilan tim administrasi kantor.",
      "Tetap mengisi lembar skor kandidat secara objektif sesuai hasil tes tanpa terpengaruh komentar bias anggota penilai lain.",
      "Mencatat pertimbangan kesiapan ritme kerja sebagai catatan pelengkap selain memeriksa nilai kemampuan administrasi pelamar.",
      "Menyatakan keberatan secara sopan berdasar aturan nondiskriminasi lalu mengajak menilai para pelamar dari kompetensi objektif."
    ],
    "optionScores": [
      3,
      1,
      4,
      2,
      5
    ],
    "answer": "E",
    "explanation": "Skor 5 menegakkan sistem merit dengan berani meluruskan bias gender maupun asal daerah secara sopan agar penilaian tim tetap adil. Pilihan skor 4 menjaga integritas nilai pribadi dari bias rekan, namun berdiam diri dalam forum berisiko merugikan kandidat pada skor penilai lain.",
    "tip": "Tegakkan prinsip nondiskriminasi dan meritokrasi dengan berani menyuarakan objektivitas kompetensi dalam rapat seleksi."
  },
  {
    "id": "tkp-sos-036",
    "subPattern": "menolak-diskriminasi-dan-primordialisme",
    "difficulty": "sedang",
    "prompt": "Ketika menerima pengaduan sengketa fasilitas umum antardua warga, Anda menyadari salah seorang di antara mereka adalah teman akrab organisasi mahasiswa Anda dahulu sedangkan pihak lainnya warga kurang mampu yang tidak Anda kenal. Bagaimana Anda menangani kasus ini?",
    "options": [
      "Menilai bukti secara imparsial tanpa memihak, atau mendelegasikan kasus guna hindari konflik kepentingan.",
      "Memberikan penjelasan awal tentang tata cara penyusunan bukti kepada teman lama supaya mediasi berlangsung lancar.",
      "Memeriksa seluruh berkas keduanya secara adil sesuai aturan sambil menjaga jarak komunikasi pribadi dengan teman lama.",
      "Meminta teman lama melengkapi dokumen sesuai prosedur biasa agar proses penanganan tetap berjalan adil menurut aturan.",
      "Melonggarkan sebagian verifikasi berkas pengaduan karena sudah mengenal baik sifat jujur teman lama sejak mahasiswa."
    ],
    "optionScores": [
      5,
      2,
      4,
      3,
      1
    ],
    "answer": "A",
    "explanation": "Skor 5 menjaga objektivitas penuh berbasis bukti sekaligus mengantisipasi persepsi konflik kepentingan dengan opsi delegasi penanganan kasus. Pilihan skor 4 sudah berupaya memproses berkas secara adil dan menjaga jarak, namun kurang peka terhadap potensi keraguan publik atas netralitas.",
    "tip": "Tangani sengketa dengan imparsialitas penuh berbasis bukti; hindari konflik kepentingan meski menyangkut kawan lama."
  },
  {
    "id": "tkp-sos-037",
    "subPattern": "menolak-diskriminasi-dan-primordialisme",
    "difficulty": "sedang",
    "prompt": "Di kantor Anda beredar anggapan tidak tertulis bahwa peluang penugasan perjalanan dinas luar kota dan pelatihan bergengsi selalu lebih mudah didapatkan oleh anggota kelompok informal yang sering berkumpul bersama satu pemimpin bidang asal almamater tertentu. Langkah paling konstruktif yang dapat Anda usulkan untuk membangun sistem adil adalah ...",
    "options": [
      "Menganggap kedekatan informal itu hal lumrah karena atasan wajar menugaskan rekan yang paling dikenal akrab.",
      "Mengusulkan rotasi penugasan dan kriteria pelatihan berbasis kompetensi jabatan yang transparan bagi seluruh staf.",
      "Berfokus menunjukkan kinerja harian terbaik dengan harapan pimpinan kelak menilai kesiapan seluruh pegawai secara adil.",
      "Mulai ikut bergabung ke obrolan santai kelompok informal tersebut supaya informasi jadwal pelatihan lebih cepat diketahui.",
      "Menyampaikan harapan secara halus kepada pimpinan agar staf lain di luar kelompok akrab itu juga diberi peluang berangkat."
    ],
    "optionScores": [
      1,
      5,
      3,
      2,
      4
    ],
    "answer": "B",
    "explanation": "Skor 5 mengatasi favoritisme almamater lewat perbaikan sistem berupa rotasi adil dan kriteria kompetensi terbuka untuk semua pegawai. Pilihan skor 4 sudah berani menyuarakan keadilan secara halus ke pimpinan, namun sebatas permintaan kasuistis tanpa membenahi mekanisme bakunya.",
    "tip": "Atasi favoritisme golongan/almamater dengan membangun mekanisme rotasi adil dan kriteria penugasan yang transparan."
  },
  {
    "id": "tkp-sos-038",
    "subPattern": "menolak-diskriminasi-dan-primordialisme",
    "difficulty": "sedang",
    "prompt": "Pada suatu proyek pengembangan kawasan taman desa, seorang warga berpenampilan sederhana namun berpengalaman bertani mengajukan usulan perbaikan drainase yang sangat logis dalam musyawarah, tetapi diremehkan oleh beberapa tokoh berpengaruh yang menganggap pendapatnya kurang layak didengar. Sikap Anda sebagai fasilitator musyawarah adalah ...",
    "options": [
      "Menemui warga tersebut seusai musyawarah untuk mengapresiasi gagasannya secara ramah serta berjanji membawanya ke tim kajian.",
      "Mengarahkan warga tersebut menulis pendapatnya di lembar aspirasi panitia agar jalannya diskusi forum tidak memanas.",
      "Memberi ruang bicara adil, mengajak forum mengkaji nilai teknis usulannya tanpa memandang status, dan mencatat di notulen.",
      "Memberi porsi pembahasan lebih utama kepada masukan tokoh berpengaruh demi mempercepat persetujuan proyek taman desa.",
      "Mengucapkan terima kasih singkat atas masukannya lalu meneruskan giliran berbicara kepada peserta rapat berikutnya agar tertib."
    ],
    "optionScores": [
      4,
      2,
      5,
      1,
      3
    ],
    "answer": "C",
    "explanation": "Skor 5 menegakkan demokrasi musyawarah dengan memberi ruang setara di forum serta menilai ide berdasar kelayakan teknis tanpa melihat status sosial. Pilihan skor 4 menghargai gagasan warga secara ramah setelah rapat, namun membiarkan suara warga terpinggirkan saat musyawarah berlangsung.",
    "tip": "Nilai kualitas ide atas dasar logika dan manfaat publik, bukan dari status sosial pembicaranya."
  },
  {
    "id": "tkp-sos-039",
    "subPattern": "menolak-diskriminasi-dan-primordialisme",
    "difficulty": "sulit",
    "prompt": "Suatu kebijakan pembagian bantuan modal usaha mikro daerah menyertakan syarat dokumen kependudukan lokal yang ternyata secara tidak sengaja membuat ratusan perajin lokal berstatus warga pindahan resmi dan komunitas penyandang disabilitas gagal lolos seleksi otomatis aplikasi, padahal mereka berhak secara ekonomi. Sebagai anggota tim perumus kebijakan, sikap terbaik Anda adalah ...",
    "options": [
      "Mencatat kendala gagal seleksi otomatis tersebut dalam laporan evaluasi akhir program sebagai bahan perbaikan tahun depan.",
      "Mempertahankan syarat kependudukan lokal secara ketat supaya bantuan modal daerah lebih diprioritaskan bagi warga lama.",
      "Mengumpulkan data perajin pindahan serta penyandang disabilitas terdampak untuk diusulkan menerima bantuan sosial terpisah tanpa revisi aturan.",
      "Mengajukan peninjauan aturan syarat bersama tim hukum dan dinas terkait agar pedoman diubah adil bagi warga pindahan dan disabilitas.",
      "Tetap menyalurkan bantuan modal kepada pemohon yang lolos seleksi sistem agar penyerapan anggaran daerah berjalan lancar."
    ],
    "optionScores": [
      3,
      1,
      4,
      5,
      2
    ],
    "answer": "D",
    "explanation": "Skor 5 membenahi diskriminasi administratif tidak langsung dengan meninjau ulang pedoman bersama tim sah agar warga rentan terakomodasi adil. Pilihan skor 4 peduli membantu lewat jalur bantuan terpisah, namun membiarkan aturan diskriminatif tetap berlaku pada sistem seleksi utama.",
    "tip": "Waspadai diskriminasi tidak langsung dalam desain syarat sistem/regulasi dan advokasi perbaikan aturannya secara prosedural."
  },
  {
    "id": "tkp-sos-040",
    "subPattern": "menolak-diskriminasi-dan-primordialisme",
    "difficulty": "sulit",
    "prompt": "Di media sosial komunitas lokal, sebuah konten viral menyebarkan generalisasi negatif bahwa penduduk pendatang dari wilayah tertentu selalu menjadi sumber masalah sosial di kota Anda, hingga memicu boikot terhadap usaha dagang kecil warga asal daerah tersebut. Sebagai aparatur negara yang menjadi teladan kebinekaan di ruang kerja dan lingkungan sosial, tindakan paling tepat Anda adalah ...",
    "options": [
      "Mengajak tetangga menyerahkan urusan keamanan pendatang sepenuhnya kepada aparat penegak hukum tanpa banyak berkomentar.",
      "Tetap berbelanja seperti biasa di usaha warga pendatang sebagai bentuk dukungan pribadi tanpa ikut menanggapi isu di sekitar.",
      "Tidak ikut menyebarkan konten viral itu di media sosial serta mengingatkan kenalan dekat agar lebih bijak menyaring kabar.",
      "Menghindari berbelanja di warung warga pendatang sementara waktu demi menjaga suasana aman dari gunjingan warga sekitar.",
      "Menolak narasi stereotip dengan tenang berdasar tanggung jawab individu, mengajak tokoh warga menjaga kerukunan, dan mendukung usaha adil."
    ],
    "optionScores": [
      2,
      4,
      3,
      1,
      5
    ],
    "answer": "E",
    "explanation": "Skor 5 menentang stigma kolektif dengan menegaskan pertanggungjawaban pribadi, menggerakkan tokoh warga menjaga kerukunan, serta menolak boikot. Pilihan skor 4 sudah berprinsip adil secara pribadi dengan tetap berbelanja, namun sikap diamnya kurang membantu menghentikan penyebaran prasangka.",
    "tip": "Tolak generalisasi negatif atas suku/daerah; tekankan pertanggungjawaban individual dan jaga kohesi lintas warga."
  }
];

export const sosialBudayaQuestions: readonly Question[] = buildTkpPatternQuestions(
  "sosial-budaya",
  [...sosialBudayaDrafts, ...sosialBudayaBatch2Drafts],
);
