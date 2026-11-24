import {
  buildTwkPatternQuestions,
  type Question,
  type QuestionDraft,
} from "@/modules/question-bank/domain/question";
import { nasionalismeBatch2Drafts } from "./batches/01-nasionalisme-batch-2";
import { nasionalismeBatch3Drafts } from "./batches/01-nasionalisme-batch-3";

const nasionalismeDrafts: readonly QuestionDraft[] = [
  {
    "id": "twk-nas-001",
    "subPattern": "sumpah-pemuda-dan-sejarah-perjuangan",
    "difficulty": "mudah",
    "prompt": "Kongres Pemuda II tanggal 27–28 Oktober 1928 menghasilkan ikrar Sumpah Pemuda yang menjadi tonggak persatuan bangsa. Perbedaan mendasar sifat perjuangan bangsa Indonesia sesudah kebangkitan nasional dibandingkan perjuangan sebelum tahun 1908 adalah ...",
    "options": [
      "Perjuangan sesudah 1908 terorganisasi secara modern, bersifat nasional, dan mengutamakan persatuan lintas daerah",
      "Perjuangan sesudah 1908 bersifat kedaerahan dan mengandalkan karisma tokoh lokal",
      "Perjuangan sebelum 1908 menggunakan jalur diplomasi internasional di bawah pimpinan pelajar terdidik",
      "Perjuangan sesudah 1908 menolak seluruh bentuk organisasi dan pendidikan modern Barat",
      "Perjuangan sebelum 1908 sudah memiliki visi negara kesatuan dengan bahasa persatuan yang sama"
    ],
    "answer": "A",
    "explanation": "Setelah 1908 (berdirinya Budi Utomo), perjuangan bangsa Indonesia bergeser dari perlawanan fisik yang sporadis dan kedaerahan menjadi gerakan terorganisasi secara modern, dipelopori kaum terpelajar, dan berorientasi pada kesadaran nasional yang mencapai puncaknya pada Sumpah Pemuda 1928.",
    "tip": "Bandingkan karakteristik perjuangan sebelum dan sesudah 1908 dari aspek cakupan wilayah, bentuk organisasi, dan tokoh penggeraknya."
  },
  {
    "id": "twk-nas-002",
    "subPattern": "sumpah-pemuda-dan-sejarah-perjuangan",
    "difficulty": "mudah",
    "prompt": "Dalam ikrar Sumpah Pemuda 28 Oktober 1928, pengakuan terhadap bahasa Indonesia dirumuskan sebagai \"menjunjung bahasa persatuan, bahasa Indonesia\". Makna historis dan sosiologis dari pilihan diksi \"menjunjung\" dibandingkan \"mengaku\" pada dua butir sebelumnya adalah ...",
    "options": [
      "Menghapus seluruh bahasa daerah agar hanya bahasa Indonesia yang digunakan di lingkungan keluarga",
      "Menempatkan bahasa Indonesia sebagai bahasa pemersatu antarsuku tanpa menghilangkan kedudukan bahasa daerah",
      "Menjadikan bahasa Indonesia sebagai alat untuk menandingi bahasa asing dalam perjanjian dagang kolonial",
      "Mewajibkan penggunaan bahasa Melayu klasik sebagai satu-satunya bahasa pengantar di sekolah dasar swasta",
      "Menetapkan bahasa Indonesia sebagai bahasa resmi negara merdeka yang telah disahkan melalui undang-undang dasar"
    ],
    "answer": "B",
    "explanation": "Para pemuda memilih kata \"menjunjung bahasa persatuan\" agar bahasa Indonesia menjadi pengikat komunikasi antarsuku bangsa tanpa mematikan bahasa daerah (bahasa ibu) masing-masing daerah di Nusantara.",
    "tip": "Perhatikan filosofi hubungan antara bahasa persatuan dan keberagaman bahasa daerah dalam naskah Sumpah Pemuda."
  },
  {
    "id": "twk-nas-003",
    "subPattern": "sumpah-pemuda-dan-sejarah-perjuangan",
    "difficulty": "sedang",
    "prompt": "Salah satu organisasi pelopor pergerakan nasional yang didirikan tahun 1912 oleh Douwes Dekker, Tjipto Mangoenkoesoemo, dan Suwardi Suryaningrat adalah Indische Partij. Alasan organisasi ini dianggap sangat progresif dan diwaspadai pemerintah kolonial Hindia Belanda adalah ...",
    "options": [
      "Fokus utamanya hanya memajukan pendidikan guru di kalangan bangsawan Jawa dan Madura",
      "Mengembangkan koperasi perdagangan lokal tanpa menyinggung persoalan politik pemerintahan",
      "Secara terbuka menuntut kemerdekaan penuh Hindia Belanda dan menanamkan nasionalisme inklusif lintas ras serta etnis",
      "Membatasi keanggotaan hanya bagi keturunan Indo-Eropa yang tinggal di wilayah Batavia",
      "Memusatkan kegiatan pada pengembangan kesenian tradisional keraton sebagai identitas budaya"
    ],
    "answer": "C",
    "explanation": "Indische Partij (Tiga Serangkai) adalah organisasi politik pertama yang secara tegas mencita-citakan kemerdekaan Indonesia (Hindia lepas dari Belanda) dan menyuarakan persatuan seluruh penduduk Hindia tanpa membedakan asal ras maupun golongan.",
    "tip": "Ingat ciri khas Indische Partij (Tiga Serangkai) sebagai organisasi politik radikal-inklusif pertama pada masa pergerakan."
  },
  {
    "id": "twk-nas-004",
    "subPattern": "sumpah-pemuda-dan-sejarah-perjuangan",
    "difficulty": "sedang",
    "prompt": "Perhimpunan Indonesia di Belanda yang dipimpin oleh Mohammad Hatta dan rekan-rekannya mengubah orientasi gerakan mahasiswa Indonesia di perantauan pada dekade 1920-an. Kontribusi ideologis utama organisasi ini bagi lahirnya Sumpah Pemuda 1928 adalah ...",
    "options": [
      "Mendorong mahasiswa kembali membangun laskar bersenjata di tiap provinsi secara terpisah",
      "Menganjurkan kerja sama administratif dengan pemerintah kolonial melalui kursi Dewan Rakyat (Volksraad)",
      "Mengajukan petisi kepada parlemen Belanda agar memberikan hak otonomi daerah khusus di Pulau Jawa",
      "Memperkenalkan konsep politik nonkooperatif, kemandirian bangsa, dan persatuan nasional sebagai syarat kemerdekaan",
      "Membentuk serikat dagang eksklusif untuk menyaingi dominasi pengusaha perkebunan swasta asing"
    ],
    "answer": "D",
    "explanation": "Perhimpunan Indonesia (sebelumnya Indische Vereeniging) merumuskan Manifesto Politik 1925 yang menekankan persatuan nasional, solidaritas, nonkooperasi terhadap penjajah, dan swadaya. Gagasan inilah yang dibawa pulang para aktivis dan menjadi roh Kongres Pemuda I dan II.",
    "tip": "Pahami empat asas perjuangan Manifesto Politik 1925 dari Perhimpunan Indonesia."
  },
  {
    "id": "twk-nas-005",
    "subPattern": "sumpah-pemuda-dan-sejarah-perjuangan",
    "difficulty": "sedang",
    "prompt": "Dalam Kongres Pemuda II tahun 1928, lagu \"Indonesia Raya\" ciptaan W.R. Supratman diperdengarkan pertama kali di depan wakil-wakil organisasi pemuda daerah menggunakan biola tanpa lirik terlebih dahulu. Kebijakan panitia tersebut mencerminkan sikap nasionalisme berupa ...",
    "options": [
      "Upaya membatasi partisipasi organisasi pemuda keagamaan dalam penyusunan resolusi kongres",
      "Ketidaksetujuan tokoh pemuda terhadap penggunaan bahasa Indonesia dalam syair lagu kebangsaan",
      "Keinginan mengganti seluruh musik tradisional daerah dengan musik instrumental bergaya Eropa",
      "Penolakan terhadap kehadiran wartawan dan jurnalis pribumi dalam gedung kongres pemuda",
      "Strategi taktis menghindari pembubaran rapat oleh polisi kolonial agar misi persatuan pemuda tetap terwujud"
    ],
    "answer": "E",
    "explanation": "Pada masa kolonial, lirik kata \"merdeka\" diawasi ketat oleh polisi rahasia Belanda (PID). Memainkan Indonesia Raya dengan biola secara instrumental serta mengedarkan liriknya secara tertulis adalah taktik cermat ketua kongres Soegondo Djojopoespito agar kongres tetap sukses melahirkan Sumpah Pemuda tanpa dibubarkan.",
    "tip": "Lihat konteks pengawasan kolonial saat Kongres Pemuda II dan alasan taktis di balik pilihan panitia."
  },
  {
    "id": "twk-nas-006",
    "subPattern": "sumpah-pemuda-dan-sejarah-perjuangan",
    "difficulty": "sedang",
    "prompt": "Sebuah komunitas mahasiswa lintas daerah di era digital menyelenggarakan kampanye pemecah belah dengan menghina logat dan sejarah daerah lain demi mendulang popularitas di media sosial. Jika merujuk pada semangat Sumpah Pemuda 1928, tindakan yang paling tepat untuk menanggapi fenomena tersebut adalah ...",
    "options": [
      "Membiarkan konten tersebut beredar karena kebebasan berekspresi di internet tidak perlu dibatasi nilai kebangsaan",
      "Mengajak diskusi lintas daerah serta memproduksi narasi kolaboratif yang merayakan keragaman sebagai kekuatan satu bangsa",
      "Melaporkan akun secara diam-diam tanpa pernah melakukan edukasi literasi kebangsaan kepada mahasiswa baru",
      "Membalas unggahan dengan merendahkan budaya kelompok pembuat konten agar mereka merasakan dampak yang sama",
      "Melarang seluruh organisasi mahasiswa daerah beraktivitas di media sosial agar konflik tidak meluas"
    ],
    "answer": "B",
    "explanation": "Semangat Sumpah Pemuda mengajarkan peleburan ego kedaerahan ke dalam kesatuan bangsa yang setara. Merespons perundungan berbasis suku/logat paling tepat dilakukan melalui dialog, edukasi literasi kebangsaan, dan kolaborasi inklusif lintas daerah, bukan pembalasan atau pemberangusan aspirasi.",
    "tip": "Cari solusi konstruktif yang menghidupkan kembali nilai persatuan Sumpah Pemuda di tengah dinamika digital."
  },
  {
    "id": "twk-nas-007",
    "subPattern": "sumpah-pemuda-dan-sejarah-perjuangan",
    "difficulty": "sulit",
    "prompt": "Sebelum Kongres Pemuda II tahun 1928, muncul organisasi pemuda berbasis wilayah seperti Jong Java, Jong Sumatranen Bond, Jong Ambon, dan Jong Celebes. Transformasi yang dilakukan para pemuda dalam Kongres Pemuda I (1926) hingga Kongres Pemuda II (1928) menunjukkan pelajaran strategis bagi pembangunan nasional masa kini, yaitu ...",
    "options": [
      "Identitas daerah harus dilebur dengan menghapus seluruh tradisi lokal agar negara menjadi seragam",
      "Keberhasilan persatuan nasional hanya ditentukan oleh dominasi organisasi pemuda dari wilayah yang berpenduduk padat",
      "Kepentingan sektoral atau daerah baru bisa bersinergi secara berkelanjutan bila ditempatkan di bawah kesamaan visi kebangsaan yang inklusif",
      "Perbedaan bahasa dan adat istiadat merupakan hambatan utama yang selalu gagal diselesaikan melalui musyawarah",
      "Organisasi kemasyarakatan modern sebaiknya menutup diri dari dialog lintas wilayah agar struktur organisasi tetap stabil"
    ],
    "answer": "C",
    "explanation": "Dari Kongres Pemuda I ke II, organisasi-organisasi pemuda kedaerahan tidak meniadakan asal-usulnya secara represif, melainkan menundukkan ego primordial di bawah payung visi bersama sebagai satu bangsa, satu tanah air, dan satu bahasa persatuan hingga berfusi menjadi Indonesia Muda.",
    "tip": "Tarikan makna HOTS dari sejarah pergerakan menekankan sinergi antara keberagaman dan kesamaan visi nasional."
  },
  {
    "id": "twk-nas-008",
    "subPattern": "sumpah-pemuda-dan-sejarah-perjuangan",
    "difficulty": "sulit",
    "prompt": "Kebangkitan Nasional 1908 dan Sumpah Pemuda 1928 sering disebut sebagai dua fase yang saling melengkapi dalam pembentukan identitas bangsa Indonesia. Hubungan kausal-historis yang paling tepat antara kedua peristiwa tersebut adalah ...",
    "options": [
      "Keduanya sama-sama dipimpin oleh angkatan bersenjata pribumi yang menolak jalur diplomasi dan organisasi politik",
      "Sumpah Pemuda 1928 merupakan reaksi penolakan kaum muda terhadap pendirian lembaga pendidikan oleh Budi Utomo tahun 1908",
      "Kebangkitan Nasional 1908 langsung menetapkan UUD 1945 sedangkan Sumpah Pemuda 1928 hanya membahas aspek kesenian daerah",
      "Kebangkitan Nasional 1908 menumbuhkan kesadaran berorganisasi modern yang kemudian diperluas cakupan kebangsaannya lintas etnis dalam Sumpah Pemuda 1928",
      "Sumpah Pemuda 1928 menjadi awal berdirinya organisasi kedaerahan tertutup sebelum adanya Budi Utomo tahun 1908"
    ],
    "answer": "D",
    "explanation": "Budi Utomo (1908) menjadi pionir kesadaran berorganisasi modern meski awalnya masih berfokus pada pengajaran di Jawa dan Madura. Dua dekade kemudian, kesadaran berorganisasi tersebut matang melampaui batas daerah menjadi komitmen kebangsaan Indonesia seutuhnya pada Sumpah Pemuda 1928.",
    "tip": "Pahami kesinambungan evolusi nasionalisme Indonesia: kesadaran berorganisasi (1908) menuju konsolidasi identitas nasional (1928)."
  },
  {
    "id": "twk-nas-009",
    "subPattern": "cinta-tanah-air-dan-produk-dalam-negeri",
    "difficulty": "mudah",
    "prompt": "Program Peningkatan Penggunaan Produk Dalam Negeri (P3DN) di instansi pemerintah bertujuan mendorong pengadaan barang dan jasa nasional. Manfaat langsung kebijakan ini bagi ketahanan ekonomi Indonesia adalah ...",
    "options": [
      "Memutus seluruh hubungan perdagangan ekspor dan impor dengan negara sahabat di kawasan ASEAN",
      "Mengurangi belanja modal pemerintah dengan cara menghentikan pembangunan infrastruktur daerah",
      "Memusatkan kegiatan produksi UMKM hanya pada satu kawasan industri di ibu kota negara",
      "Menjamin seluruh barang impor memperoleh pembebasan tarif masuk melalui pelabuhan utama",
      "Memperkuat kemandirian industri nasional, menjaga perputaran ekonomi domestik, dan memperluas lapangan kerja rakyat"
    ],
    "answer": "E",
    "explanation": "Mengutamakan produk dalam negeri yang memenuhi Tingkat Komponen Dalam Negeri (TKDN) mendorong perputaran dana APBN/APBD kembali ke pelaku usaha nasional dan UMKM, menciptakan lapangan kerja, dan mengurangi ketergantungan impor.",
    "tip": "Fokus pada dampak ekonomi makro dari belanja barang produksi dalam negeri dan TKDN."
  },
  {
    "id": "twk-nas-010",
    "subPattern": "cinta-tanah-air-dan-produk-dalam-negeri",
    "difficulty": "mudah",
    "prompt": "Sebagai wujud cinta tanah air dalam keseharian kerja, seorang ASN memilih mempromosikan kain tenun hasil perajin lokal daerahnya saat acara dinas resmi dan bazar instansi. Sikap tersebut mencerminkan nasionalisme ekonomi karena ...",
    "options": [
      "Memberikan dukungan nyata bagi keberlanjutan ekonomi kreatif lokal sekaligus melestarikan warisan budaya",
      "Menunjukkan kebanggaan pribadi agar dinilai lebih mencintai adat dibandingkan rekan kerja lain",
      "Menolak kehadiran investor asing yang ingin membangun kemitraan usaha di Indonesia",
      "Mengharuskan seluruh pegawai membeli produk yang sama dengan memotong gaji bulanan secara sepihak",
      "Mengutamakan produk daerah sendiri meskipun mutunya tidak memenuhi standar penggunaan acara resmi"
    ],
    "answer": "A",
    "explanation": "Menggunakan dan mempromosikan produk UMKM/kriyaseni lokal yang berkualitas saat bertugas mendukung daya saing perajin nasional sekaligus menjaga pelestarian warisan budaya tanpa bertindak eksklusif atau memaksa.",
    "tip": "Cinta produk dalam negeri yang sehat memadukan kebanggaan budaya dan keberpihakan pada ekonomi rakyat."
  },
  {
    "id": "twk-nas-011",
    "subPattern": "cinta-tanah-air-dan-produk-dalam-negeri",
    "difficulty": "sedang",
    "prompt": "Sebuah dinas daerah akan membeli 100 unit komputer operasional. Tersedia dua pilihan: produk perakitan dalam negeri berlabel TKDN tinggi dengan harga 5% lebih mahal namun memiliki pusat servis di daerah, atau produk impor sedikit lebih murah tanpa pusat servis resmi di provinsi tersebut. Berdasarkan semangat nasionalisme pengadaan barang publik, keputusan yang paling tepat adalah ...",
    "options": [
      "Memilih produk impor semata karena harga awalnya lebih rendah tanpa memperhitungkan purnajual dan TKDN",
      "Membatalkan pengadaan sepenuhnya agar anggaran kantor dapat dibagikan sebagai insentif pegawai",
      "Memilih produk dalam negeri ber-TKDN tinggi karena sesuai kebijakan P3DN, menjamin keberlanjutan layanan servis, serta menggerakkan industri nasional",
      "Memecah paket pengadaan menjadi banyak transaksi kecil agar aturan prioritas produk dalam negeri tidak berlaku",
      "Membeli merek luar negeri terlebih dahulu lalu memasang stiker merek lokal agar terkesan memakai produk nasional"
    ],
    "answer": "C",
    "explanation": "Sesuai ketentuan pengadaan barang/jasa pemerintah (Perpres Pengadaan & P3DN/TKDN), instansi wajib memprioritaskan produk dalam negeri yang memenuhi syarat teknis dan nilai TKDN; selisih harga wajar terkompensasi oleh dukungan purnajual dan efek berganda ekonomi nasional.",
    "tip": "Pertimbangkan ketentuan preferensi harga TKDN dan nilai manfaat jangka panjang bagi ekonomi nasional."
  },
  {
    "id": "twk-nas-012",
    "subPattern": "cinta-tanah-air-dan-produk-dalam-negeri",
    "difficulty": "sedang",
    "prompt": "Banyak pelaku UMKM di daerah menghasilkan produk pangan olahan berkualitas, tetapi kalah bersaing di lokapasar (marketplace) karena kemasan kurang informatif dan belum memiliki sertifikasi izin edar. Langkah strategis yang paling mencerminkan cinta tanah air bagi pegawai pemerintah di dinas terkait adalah ...",
    "options": [
      "Melarang penjualan produk makanan merek global di toko ritel modern agar UMKM otomatis laku",
      "Membeli seluruh stok produk UMKM lalu menyimpannya di gudang dinas agar tidak rugi",
      "Menyalahkan masyarakat lokal karena dianggap kurang nasionalis saat memilih produk luar negeri",
      "Memfasilitasi pendampingan standar mutu, perizinan PIRT/BPOM, desain kemasan, dan pelatihan pemasaran digital agar produk lokal berdaya saing",
      "Meminta pelaku UMKM menurunkan harga jual di bawah biaya produksi demi menarik pembeli online"
    ],
    "answer": "D",
    "explanation": "Nasionalisme di sektor ekonomi bukan hanya membeli karena iba atau melarang pesaing secara kaku, melainkan memberdayakan UMKM agar naik kelas melalui standar kualitas, legalitas edar, kemasan menarik, dan literasi pemasaran digital.",
    "tip": "Bedakan keberpihakan yang memberdayakan secara berkelanjutan dengan langkah proteksionisme jangka pendek."
  },
  {
    "id": "twk-nas-013",
    "subPattern": "cinta-tanah-air-dan-produk-dalam-negeri",
    "difficulty": "sedang",
    "prompt": "Pada musim libur nasional, Raka lebih memilih berwisata ke desa wisata di tanah air dan mengulas keunikan budaya setempat di media sosial dibandingkan hanya mengagungkan destinasi luar negeri. Dampak positif sikap tersebut terhadap ketahanan nasional adalah ...",
    "options": [
      "Memusatkan anggaran pembangunan daerah hanya untuk membangun hotel mewah di kota besar",
      "Menghapus kebutuhan promosi pariwisata internasional dari kementerian terkait",
      "Membatasi hak warga negara lain untuk bepergian keluar negeri sesuai minat masing-masing",
      "Mengubah seluruh kawasan konservasi alam menjadi pusat hiburan modern berskala besar",
      "Meningkatkan devisa negara sekaligus memperkuat kesadaran pelestarian pariwisata berbasis masyarakat lokal"
    ],
    "answer": "E",
    "explanation": "Berwisata di dalam negeri (Bangga Berwisata di Indonesia) menggerakkan ekonomi desa wisata, UMKM kuliner, serta mendorong kesadaran kolektif merawat potensi budaya dan alam Nusantara.",
    "tip": "Cari efek positif yang konkret pada masyarakat lokal dan ekonomi pariwisata domestik."
  },
  {
    "id": "twk-nas-014",
    "subPattern": "cinta-tanah-air-dan-produk-dalam-negeri",
    "difficulty": "sedang",
    "prompt": "Penggunaan produk dalam negeri sering menghadapi tantangan persepsi bahwa barang impor selalu lebih bergengsi. Sikap kritis yang paling tepat untuk mengubah pola pikir tersebut di lingkungan generasi muda adalah ...",
    "options": [
      "Menggalakkan kampanye literasi mutu produk lokal berprestasi sekaligus mendorong produsen nasional menjaga inovasi kualitas",
      "Membatasi akses informasi mengenai tren industri kreatif dan teknologi mancanegara",
      "Merazia penggunaan barang bermerek asing yang dipakai pelajar dan mahasiswa di kampus",
      "Mengharuskan semua merek lokal meniru persis nama berbahasa asing agar terasa lebih eksklusif",
      "Memberikan sanksi administratif bagi pegawai yang memakai perangkat kerja buatan luar negeri"
    ],
    "answer": "A",
    "explanation": "Mengubah persepsi konsumen memerlukan kombinasi apresiasi terhadap merek nasional berprestasi serta dorongan terus-menerus agar kualitas dan inovasi produk dalam negeri benar-benar mampu bersaing di pasar bebas.",
    "tip": "Pilih pendekatan edukatif sekaligus peningkatan kualitas, bukan tindakan koersif atau peniruan."
  },
  {
    "id": "twk-nas-015",
    "subPattern": "cinta-tanah-air-dan-produk-dalam-negeri",
    "difficulty": "sulit",
    "prompt": "Sebuah merek fashion lokal mengalami lonjakan pesanan setelah viral di media sosial, namun mendadak muncul keluhan konsumen karena kualitas jahitan menurun dan pengiriman terlambat. Bila dilihat dari perspektif tanggung jawab cinta tanah air di era persaingan global, pelajaran terpenting bagi pelaku industri nasional dari kasus tersebut adalah ...",
    "options": [
      "Konsumen dalam negeri seharusnya tetap memaklumi cacat mutu produk lokal sebagai bentuk solidaritas bangsa",
      "Keberpihakan masyarakat kepada produk nasional harus dijawab produsen dengan konsistensi standar mutu, etika bisnis, dan keandalan layanan",
      "Pelaku usaha lokal sebaiknya menutup penjualan daring agar hanya melayani pembeli di satu kecamatan",
      "Pemerintah perlu menghapus seluruh ulasan negatif konsumen di platform niaga elektronik demi menjaga citra UMKM",
      "Produk dalam negeri tidak perlu mengikuti standar kontrol kualitas apabila sudah memiliki izin usaha daerah"
    ],
    "answer": "B",
    "explanation": "Nasionalisme ekonomi bersifat timbal balik: konsumen mendukung karya anak bangsa, dan produsen lokal membalas kepercayaan tersebut dengan profesionalisme, kontrol mutu, serta etos kerja unggul agar mampu bersaing di pasar domestik maupun global.",
    "tip": "Lihat keseimbangan tanggung jawab antara dukungan konsumen dan profesionalisme produsen dalam negeri."
  },
  {
    "id": "twk-nas-016",
    "subPattern": "cinta-tanah-air-dan-produk-dalam-negeri",
    "difficulty": "sulit",
    "prompt": "Dalam proyek pengadaan aplikasi pelayanan publik berbasis kecerdasan buatan di kementerian, panitia dihadapkan pada pilihan antara sistem jadi dari vendor asing yang langsung berjalan cepat dan platform buatan konsorsium talenta digital dalam negeri yang memerlukan 4 bulan penyesuaian. Pertimbangan nasionalisme strategis yang paling komprehensif bagi pengambil kebijakan adalah ...",
    "options": [
      "Selalu memilih vendor asing agar instansi tidak perlu melatih sumber daya manusia teknologi dalam negeri",
      "Menolak seluruh teknologi asing meskipun sistem lokal belum memiliki fitur keamanan data yang memadai",
      "Menunda digitalisasi layanan publik selama lima tahun sampai seluruh komponen perangkat keras dibuat di dalam negeri",
      "Menerapkan mekanisme transfer teknologi dan kolaborasi arsitektur terbuka jika memakai komponen luar, sembari memprioritaskan talenta nasional dan kedaulatan data di server dalam negeri",
      "Meminta konsorsium lokal menyalin langsung kode sumber vendor asing agar waktu pengembangan menjadi lebih singkat"
    ],
    "answer": "D",
    "explanation": "Nasionalisme modern pada teknologi strategis mengutamakan kemandirian jangka panjang, keamanan serta kedaulatan data nasional, dan penguatan kapasitas talenta digital Indonesia melalui skema alih teknologi yang sehat dan legal tanpa mengabaikan kualitas layanan.",
    "tip": "Cari solusi yang menyeimbangkan efektivitas layanan, kedaulatan data nasional, dan transfer teknologi."
  },
  {
    "id": "twk-nas-017",
    "subPattern": "toleransi-dan-persatuan-dalam-keberagaman",
    "difficulty": "mudah",
    "prompt": "Di sebuah kantor pelayanan terpadu, jadwal rapat evaluasi bulanan bertepatan dengan waktu ibadah penting salah satu pegawai. Sikap pimpinan yang mencerminkan semangat toleransi dan persatuan adalah ...",
    "options": [
      "Membatalkan seluruh program evaluasi bulanan sepanjang tahun karena khawatir menyinggung pegawai",
      "Meminta pegawai tersebut menunda ibadah demi menunjukkan kesetiaan mutlak pada agenda kantor",
      "Mengecualikan pegawai tersebut dari semua rapat tim seterusnya agar tidak perlu menyesuaikan jadwal",
      "Menjadikan perbedaan jadwal ibadah sebagai bahan candaan untuk mencairkan suasana rapat",
      "Menyusun ulang jam rapat atau memberi kesempatan pegawai beribadah tepat waktu tanpa memengaruhi penilaian kinerjanya"
    ],
    "answer": "E",
    "explanation": "Menghormati kebebasan beragama dan menyediakan ruang pelaksanaan ibadah di tempat kerja tanpa diskriminasi penilaian mencerminkan penerapan nilai Pancasila dan toleransi aktif.",
    "tip": "Toleransi di tempat kerja berarti saling memberi ruang ibadah sambil tetap menjaga profesionalitas kinerja."
  },
  {
    "id": "twk-nas-018",
    "subPattern": "toleransi-dan-persatuan-dalam-keberagaman",
    "difficulty": "mudah",
    "prompt": "Makna semboyan \"Bhinneka Tunggal Ika\" bagi pergaulan masyarakat Indonesia yang multikultural adalah ...",
    "options": [
      "Mengakui dan menghargai keragaman suku, agama, ras, serta golongan sebagai kekayaan yang mempersatukan bangsa",
      "Memandang budaya sendiri paling unggul sementara budaya daerah lain bersifat pelengkap",
      "Menghapus perbedaan adat daerah secara bertahap agar tercipta satu kebudayaan tunggal",
      "Memisahkan wilayah permukiman berdasarkan latar belakang suku agar tidak sering berinteraksi",
      "Membatasi kerja sama sosial hanya dengan warga yang memiliki kesamaan bahasa ibu dan tradisi"
    ],
    "answer": "A",
    "explanation": "Bhinneka Tunggal Ika menegaskan bahwa meski masyarakat Indonesia majemuk secara suku, bahasa, agama, dan budaya, semuanya terikat dalam kesatuan bangsa yang setara dan saling menghormati.",
    "tip": "Ingat prinsip dasar persatuan dalam kemajemukan tanpa penyeragaman paksa maupun segregasi."
  },
  {
    "id": "twk-nas-019",
    "subPattern": "toleransi-dan-persatuan-dalam-keberagaman",
    "difficulty": "sedang",
    "prompt": "Seorang pegawai negeri baru ditempatkan di daerah dengan bahasa lokal dan adat pergaulan yang sangat berbeda dari daerah asalnya. Pada minggu pertama, terjadi kesalahpahaman karena intonasi bicaranya dianggap terlalu keras oleh masyarakat setempat. Langkah adaptasi paling tepat yang menunjukkan jiwa persatuan nasional adalah ...",
    "options": [
      "Meminta dipindahkan ke provinsi asalnya karena merasa masyarakat setempat tidak memahami karakternya",
      "Mempelajari tata krama dan kearifan lokal setempat serta menyampaikan klarifikasi dengan ramah tanpa merendahkan budaya asal maupun budaya lokal",
      "Menuntut warga daerah penempatan segera menyesuaikan diri dengan kebiasaan komunikasi di kota besar",
      "Mengurangi interaksi tatap muka dengan warga dan menyerahkan seluruh pelayanan kepada staf honorer setempat",
      "Menegur warga secara terbuka bahwa intonasi bicara adalah hak pribadi yang tidak perlu disesuaikan dengan tempat tugas"
    ],
    "answer": "B",
    "explanation": "ASN berjiwa nasionalis dan harmonis mampu menempatkan diri di mana saja di wilayah NKRI, peka terhadap tata krama lokal, serta proaktif menjalin komunikasi inklusif guna mencegah gesekan sosial.",
    "tip": "Kepekaan budaya (cultural intelligence) dan komunikasi santun merupakan kunci ASN menjaga persatuan di penempatan baru."
  },
  {
    "id": "twk-nas-020",
    "subPattern": "toleransi-dan-persatuan-dalam-keberagaman",
    "difficulty": "sedang",
    "prompt": "Dalam musyawarah perencanaan pembangunan desa (Musrenbangdes), dua kelompok warga berselisih tajam mengenai lokasi pembangunan balai pertemuan karena faktor sentimen dusun lama dan dusun pendatang. Sebagai fasilitator pemerintah, sikap terbaik yang berpihak pada persatuan bangsa adalah ...",
    "options": [
      "Memenangkan usulan dusun dengan jumlah penduduk lebih banyak tanpa mendengarkan alasan dusun pendatang",
      "Menyerahkan keputusan sepenuhnya melalui debat terbuka di media sosial desa agar cepat viral",
      "Memediasi dialog berbasis data kebutuhan aksesibilitas dan manfaat bersama seluruh warga lintas dusun",
      "Meminta kedua kelompok mencari dana masing-masing agar tidak perlu membangun balai bersama",
      "Menghentikan pembangunan balai desa secara sepihak selama lima tahun ke depan"
    ],
    "answer": "C",
    "explanation": "Menggeser konflik identitas (penduduk lama vs pendatang) menuju objektivitas data manfaat umum dan dialog musyawarah menyatukan kedua pihak serta memperkuat kohesi sosial.",
    "tip": "Resolusi konflik berbasis data objektif dan kemanfaatan bersama jauh lebih kokoh menjaga persatuan."
  },
  {
    "id": "twk-nas-021",
    "subPattern": "toleransi-dan-persatuan-dalam-keberagaman",
    "difficulty": "sedang",
    "prompt": "Belakangan muncul tren grup percakapan daring kantor yang memisahkan anggota berdasarkan asal almamater atau daerah hingga berdampak pada lambatnya koordinasi pekerjaan lintas bagian. Jika kondisi tersebut dibiarkan, dampak paling serius terhadap nasionalisme di lingkungan birokrasi adalah ...",
    "options": [
      "Hilangnya seluruh perbedaan pendapat karena setiap unit kerja bergerak sendiri tanpa perlu berkoordinasi",
      "Meningkatnya efisiensi kerja karena setiap pegawai hanya berkomunikasi dengan rekan yang satu daerah asal",
      "Berkurangnya penggunaan kuota internet kantor selama jam istirahat berlangsung",
      "Terbentuknya kompetisi sehat antaralumni yang mendorong seluruh pegawai pindah ke sektor swasta",
      "Menguatnya ego sektoral dan eksklusivisme primordial yang mengikis profesionalitas pelayanan publik serta semangat persatuan korps"
    ],
    "answer": "E",
    "explanation": "Eksklusivisme berbasis daerah atau almamater (primordialisme) dalam birokrasi merusak asas persatuan, menghambat kolaborasi antarunit, dan berpotensi memunculkan perlakuan tidak adil dalam pelayanan maupun karier.",
    "tip": "Identifikasi bahaya utama primordialisme/eksklusivisme kelompok bagi kinerja pelayanan dan persatuan bangsa."
  },
  {
    "id": "twk-nas-022",
    "subPattern": "toleransi-dan-persatuan-dalam-keberagaman",
    "difficulty": "sedang",
    "prompt": "Warga RT di sebuah kompleks perumahan baru sepakat bergotong royong membangun pos ronda dan taman bersama menjelang perayaan hari kemerdekaan tanpa melihat perbedaan latar belakang agama dan suku penghuninya. Nilai utama kebangsaan yang tampak dari aktivitas tersebut adalah ...",
    "options": [
      "Modal sosial persaudaraan kebangsaan melalui gotong royong inklusif untuk kepentingan bersama",
      "Kosmpolitanisme ekstrem yang mengabaikan kearifan lokal masyarakat sekitar",
      "Individualisme kompetitif yang mendorong setiap warga mengunggulkan prestasinya sendiri",
      "Chauvinisme sempit yang membanggakan lingkungan kompleks di atas wilayah kecamatan lain",
      "Asimilasi paksa yang menuntut pendatang meninggalkan identitas budaya keluarga mereka"
    ],
    "answer": "A",
    "explanation": "Gotong royong lintas latar belakang suku dan agama mewujudkan persaudaraan sebangsa (ukhuwah wathaniyah) dan menjadi modal sosial terkuat dalam merawat kerukunan nasional.",
    "tip": "Bedakan istilah persaudaraan inklusif dengan chauvinisme, individualisme, maupun asimilasi paksa."
  },
  {
    "id": "twk-nas-023",
    "subPattern": "toleransi-dan-persatuan-dalam-keberagaman",
    "difficulty": "sulit",
    "prompt": "Sebuah video hoaks berdurasi singkat yang dipotong konteksnya beredar di grup warga dan memicu ketegangan antarumat di tingkat kecamatan karena menuduh kelompok tertentu menolak kegiatan sosial warga lain. Sebagai aparatur pemerintah daerah yang bertanggung jawab terhadap kohesi sosial, langkah paling strategis dan tepat secara prosedural adalah ...",
    "options": [
      "Mengeluarkan surat edaran larangan seluruh kegiatan keagamaan maupun sosial masyarakat selama satu tahun",
      "Melakukan klarifikasi fakta bersama tokoh lintas agama dan aparat setempat, melibatkan forum kerukunan resmi, serta menyebarkan informasi berimbang untuk meredam eskalasi",
      "Meminta warga menghapus aplikasi percakapan dari gawai masing-masing hingga isu mereda dengan sendirinya",
      "Langsung menuduh kelompok yang pertama kali muncul di video sebagai pihak bersalah tanpa verifikasi keutuhan rekaman",
      "Membiarkan tokoh masyarakat menyelesaikan masalah sendiri agar pemerintah terlihat tidak ikut campur"
    ],
    "answer": "B",
    "explanation": "Penanganan isu sensitif SARA menuntut respons cepat berbasis verifikasi fakta, kolaborasi dengan tokoh lintas agama/FKUB (Forum Kerukunan Umat Beragama) serta aparat keamanan, dan komunikasi publik yang menenangkan—bukan tindakan reaktif atau pasif.",
    "tip": "Prioritaskan verifikasi fakta, kolaborasi tokoh lintas elemen/FKUB, dan komunikasi publik yang menyejukkan."
  },
  {
    "id": "twk-nas-024",
    "subPattern": "toleransi-dan-persatuan-dalam-keberagaman",
    "difficulty": "sulit",
    "prompt": "Dalam konsep multikulturalisme Pancasila, terdapat perbedaan mendasar antara toleransi aktif dan sikap acuh tak acuh (permisif pasif). Pernyataan yang paling tepat menggambarkan penerapan toleransi aktif dalam pelayanan publik adalah ...",
    "options": [
      "Pegawai hanya melayani pemohon yang latar belakangnya dikenal dekat sembari tidak mengganggu pemohon lain",
      "Instansi membiarkan kelompok masyarakat saling memboikot akses layanan agar konflik tidak muncul di ruang kantor",
      "Lembaga pemerintah secara sadar merancang fasilitas ramah disabilitas, akses informasi beragam daerah, serta pelayanan setara bagi seluruh warga tanpa diskriminasi",
      "Pimpinan menyerahkan jadwal libur keagamaan kepada keputusan mayoritas pegawai tanpa peduli hak kelompok minoritas",
      "Aparatur menolak membahas isu keberagaman di ruang rapat karena dianggap pasti memicu perpecahan"
    ],
    "answer": "C",
    "explanation": "Toleransi aktif bukan sekadar membiarkan pihak lain eksis tanpa menyakiti, melainkan secara sadar membangun sistem yang inklusif, adil, akomodatif bagi kelompok rentan maupun minoritas, dan merawat kebersamaan.",
    "tip": "Toleransi aktif ditandai dengan keberpihakan nyata membangun sistem inklusif, adil, dan nondiskriminatif."
  },
  {
    "id": "twk-nas-025",
    "subPattern": "budaya-dan-identitas-nasional-di-era-global",
    "difficulty": "mudah",
    "prompt": "Di tengah derasnya arus budaya pop global di kalangan pelajar, seorang guru seni mengadaptasi pertunjukan wayang dan musik tradisional dengan format animasi pendek berbahasa Indonesia agar lebih mudah dinikmati generasi muda. Sikap guru tersebut mencerminkan ...",
    "options": [
      "Ketidaktertarikan menjaga keaslian seni tradisi sehingga mengubah makna budaya menjadi hiburan semata",
      "Penolakan mutlak terhadap segala bentuk teknologi digital modern di sekolah",
      "Upaya mengganti nilai-nilai filosofis kesenian daerah dengan budaya konsumerisme asing",
      "Nasionalisme adaptif yang melestarikan budaya bangsa melalui inovasi kreatif sesuai perkembangan zaman",
      "Kebijakan pembatasan akses pelajar terhadap konten pengetahuan internasional di internet"
    ],
    "answer": "D",
    "explanation": "Pelestarian budaya di era global tidak harus menolak teknologi modern; mengemas nilai dan kesenian nusantara secara kreatif lewat media digital justru memperkuat daya tarik identitas nasional bagi generasi muda.",
    "tip": "Pelestarian aktif di era global memadukan akar budaya lokal dengan inovasi medium modern."
  },
  {
    "id": "twk-nas-026",
    "subPattern": "budaya-dan-identitas-nasional-di-era-global",
    "difficulty": "mudah",
    "prompt": "Identitas nasional Indonesia mencakup berbagai simbol pemersatu bangsa yang diatur dalam Undang-Undang Nomor 24 Tahun 2009. Manakah yang termasuk unsur pemersatu resmi tersebut sebagaimana ditegaskan pula dalam amanat UUD 1945?",
    "options": [
      "Bendera Sang Merah Putih, Bahasa Indonesia, Lambang Negara Garuda Pancasila, dan Lagu Kebangsaan Indonesia Raya",
      "Seragam sekolah daerah, mata uang komoditas ekspor, dan tata boga tradisional",
      "Pakaian adat tiap provinsi, lagu daerah nusantara, dan tarian penyambutan tamu",
      "Kartu tanda pegawai instansi, sistem penanggalan kalender, dan lambang kementerian",
      "Motif batik daerah, aksara tradisional setempat, dan bahasa pergaulan media sosial"
    ],
    "answer": "A",
    "explanation": "UUD 1945 Bab XV (Pasal 35, 36, 36A, 36B) dan UU No. 24 Tahun 2009 menetapkan empat simbol resmi identitas negara: Bendera Merah Putih, Bahasa Indonesia, Lambang Negara Garuda Pancasila dengan semboyan Bhinneka Tunggal Ika, dan Lagu Kebangsaan Indonesia Raya.",
    "tip": "Ingat empat identitas resmi kenegaraan dalam Bab XV UUD 1945 dan UU No. 24 Tahun 2009."
  },
  {
    "id": "twk-nas-027",
    "subPattern": "budaya-dan-identitas-nasional-di-era-global",
    "difficulty": "sedang",
    "prompt": "Sebuah karya tenun ikat tradisional dari komunitas adat di kawasan timur Indonesia diklaim secara sepihak oleh pihak luar negeri untuk dipasarkan sebagai motif baru tanpa menyebutkan asal-usul komunitas pengrajin. Dari sudut pandang ketahanan budaya nasional, langkah preventif jangka panjang yang paling tepat dilakukan pemerintah bersama masyarakat adalah ...",
    "options": [
      "Menutup seluruh ekspor kerajinan tekstil Nusantara ke pasar internasional selamanya",
      "Mendokumentasikan kekayaan budaya secara digital, mendaftarkan Indikasi Geografis serta Kekayaan Intelektual Komunal (KIK), dan memberdayakan regenerasi perajin",
      "Membiarkan klaim berlangsung karena dianggap menjadi bentuk promosi gratis bagi daerah asal kain",
      "Meminta perajin adat mengganti motif tradisi mereka setiap tahun agar sulit ditiru pihak luar",
      "Menyimpan seluruh kain tenun asli di museum tertutup tanpa boleh dipamerkan kepada publik"
    ],
    "answer": "B",
    "explanation": "Perlindungan ekspresi budaya tradisional memerlukan pencatatan Kekayaan Intelektual Komunal (KIK), pendaftaran Indikasi Geografis, dokumentasi digital berkelanjutan, serta regenerasi pewaris keterampilan agar klaim sepihak dapat dicegah secara hukum dan ekonomi.",
    "tip": "Pelindungan hukum warisan budaya di era global bertumpu pada dokumentasi resmi, Indikasi Geografis, dan KIK."
  },
  {
    "id": "twk-nas-028",
    "subPattern": "budaya-dan-identitas-nasional-di-era-global",
    "difficulty": "sedang",
    "prompt": "Banyak generasi muda merasa lebih percaya diri menggunakan istilah campuran asing secara berlebihan bahkan dalam rapat resmi berbahasa Indonesia meskipun sudah ada padanan katanya yang tepat. Sikap bijak ASN untuk menjaga martabat bahasa negara tanpa bersikap antikemajuan adalah ...",
    "options": [
      "Melarang pegawai mengakses jurnal ilmiah internasional dan istilah teknologi berbahasa Inggris",
      "Mengganti seluruh nama program kementerian ke dalam istilah bahasa daerah tertentu agar lebih membumi",
      "Menggunakan bahasa Indonesia yang baik, cermat, dan memanfaatkan padanan kata resmi KBBI dalam forum kedinasan sembari tetap menguasai bahasa asing untuk literasi global",
      "Menilai rendah pegawai yang sedang belajar menguasai bahasa asing untuk keperluan kerja sama internasional",
      "Menghapus mata pelajaran bahasa asing dari kurikulum pelatihan kompetensi aparatur negara"
    ],
    "answer": "C",
    "explanation": "Bangga berbahasa Indonesia di forum resmi tidak berarti anti terhadap penguasaan bahasa asing. Prinsip Trigatra Bangun Bahasa menegaskan: utamakan bahasa Indonesia, lestarikan bahasa daerah, kuasai bahasa asing.",
    "tip": "Gunakan prinsip Trigatra Bangun Bahasa (Badan Bahasa) sebagai tolok ukur kebijakan bahasa."
  },
  {
    "id": "twk-nas-029",
    "subPattern": "budaya-dan-identitas-nasional-di-era-global",
    "difficulty": "sedang",
    "prompt": "Arus globalisasi informasi memudahkan masuknya gaya hidup konsumtif dan budaya instan yang dapat melemahkan semangat kerja keras dan solidaritas sosial generasi muda. Penguatan jati diri bangsa yang paling relevan untuk menangkal dampak negatif tersebut tanpa menutup diri dari kemajuan ilmu pengetahuan adalah ...",
    "options": [
      "Menghentikan kerja sama pertukaran pelajar Indonesia ke negara maju agar mahasiswa tetap tinggal di dalam negeri",
      "Membatasi kecepatan akses internet publik agar masyarakat jarang membuka media sosial internasional",
      "Menyeragamkan hobi dan gaya berpakaian seluruh mahasiswa sesuai ketentuan satu organisasi resmi",
      "Menjadikan Pancasila sebagai filter nilai dalam menyaring pengaruh luar melalui penguatan literasi kritis, etos gotong royong, dan apresiasi kearifan lokal",
      "Menolak seluruh metode manajemen modern dari luar negeri karena dianggap pasti bertentangan dengan budaya bangsa"
    ],
    "answer": "D",
    "explanation": "Sebagai ideologi terbuka, Pancasila berfungsi menyaring nilai global: menerima ilmu pengetahuan, teknologi, dan tata kelola modern yang bermanfaat sambil menolak gaya hidup destruktif yang bertentangan dengan nilai kemanusiaan, solidaritas, dan keadilan sosial.",
    "tip": "Ingat fungsi Pancasila sebagai paradigma dan penyaring (filter) selektif di era globalisasi."
  },
  {
    "id": "twk-nas-030",
    "subPattern": "budaya-dan-identitas-nasional-di-era-global",
    "difficulty": "sedang",
    "prompt": "Diplomasi budaya (soft power diplomacy) seperti pengakuan UNESCO terhadap pencak silat, gamelan, dan kebaya sebagai warisan budaya takbenda memiliki arti penting bagi nasionalisme Indonesia di kancah internasional, yaitu ...",
    "options": [
      "Menghapus kewajiban generasi muda daerah mempelajari warisan budaya lain yang belum masuk daftar dunia",
      "Mengubah status budaya tersebut menjadi properti eksklusif organisasi pemerintah yang dilarang dipelajari masyarakat umum",
      "Memberikan kekebalan mutlak dari perlunya inovasi dan edukasi budaya di sekolah-sekolah nasional",
      "Menggantikan seluruh fungsi diplomasi ekonomi dan pertahanan Indonesia di forum Perserikatan Bangsa-Bangsa",
      "Menunjukkan pengakuan dunia atas kontribusi peradaban bangsa Indonesia sekaligus menuntut tanggung jawab bersama merawat pelestariannya di dalam negeri"
    ],
    "answer": "E",
    "explanation": "Pengakuan UNESCO menguatkan posisi budaya Indonesia di panggung global (soft power) sekaligus mewajibkan bangsa Indonesia menjaga keberlanjutan, regenerasi penutur/pelaku, dan edukasi atas warisan tersebut.",
    "tip": "Pengakuan internasional atas warisan budaya harus berbanding lurus dengan pelestarian nyata di dalam negeri."
  },
  {
    "id": "twk-nas-031",
    "subPattern": "budaya-dan-identitas-nasional-di-era-global",
    "difficulty": "sulit",
    "prompt": "Sebuah tim kreator konten lokal membuat video dokumenter tentang kuliner tradisional Nusantara dengan standar sinematografi internasional dan subtitle multibahasa, namun mendapat kritik dari segelintir pihak yang menganggap cara penyajiannya terlalu modern. Dalam kerangka kebudayaan nasional menurut Pasal 32 ayat (1) UUD 1945, sikap penilaian yang paling tepat adalah ...",
    "options": [
      "Meminta tim kreator menghentikan distribusi konten karena pelestarian budaya wajib dilakukan dengan metode konvensional semata",
      "Mendukung kreativitas tersebut sepanjang tetap menghormati nilai substansi dan sumber komunitas asalnya, karena negara menjamin kebudayaan nasional berkembang selaras peradaban dunia",
      "Menilai bahwa budaya daerah tidak seharusnya dikenalkan kepada audiens mancanegara agar kesakralannya tidak berkurang",
      "Mewajibkan seluruh konten budaya daerah menggunakan format tayangan hitam-putih agar terasa autentik dan historis",
      "Mengambil alih hak cipta video kreator secara sepihak menjadi aset pemerintah tanpa memberikan pengakuan pencipta"
    ],
    "answer": "B",
    "explanation": "Pasal 32 ayat (1) UUD 1945 menegaskan negara memajukan kebudayaan nasional Indonesia di tengah peradaban dunia dengan menjamin kebebasan masyarakat dalam memelihara dan mengembangkan nilai-nilai budayanya. Kemasan modern yang tetap etis dan menghormati akar budaya adalah bentuk pemajuan kebudayaan.",
    "tip": "Rujuk amanat Pasal 32 ayat (1) UUD 1945 tentang pemajuan kebudayaan nasional di tengah peradaban dunia."
  },
  {
    "id": "twk-nas-032",
    "subPattern": "budaya-dan-identitas-nasional-di-era-global",
    "difficulty": "sulit",
    "prompt": "Ketika bekerja dalam tim proyek internasional, seorang diplomat atau pejabat fungsional Indonesia diminta mengikuti jamuan makan dan diskusi kebijakan yang bertentangan dengan nilai kesederhanaan, etika bangsa, serta kepentingan nasional jangka panjang. Pendekatan identitas nasional yang paling matang dalam situasi tersebut adalah ...",
    "options": [
      "Mengikuti seluruh permintaan mitra tanpa reservasi agar dianggap paling fleksibel dalam pergaulan global",
      "Menolak seluruh komunikasi lanjutan dan pulang sebelum perundingan dimulai sebagai bentuk harga diri bangsa",
      "Bernegosiasi secara asertif dan bermartabat dengan tetap berpegang pada prinsip etika kebangsaan serta kepentingan nasional, sambil bersikap terbuka pada dialog konstruktif",
      "Meniru gaya hidup mitra asing secara penuh di ruang publik demi menutupi latar belakang budaya sendiri",
      "Menyampaikan keluhan emosional di media sosial pribadi untuk menekan mitra asing agar menyetujui draf awal"
    ],
    "answer": "C",
    "explanation": "Jati diri nasional di pergaulan internasional berarti tegas dalam prinsip kepentingan bangsa dan etika kebangsaan (berkepribadian dalam kebudayaan) tanpa menjadi kaku atau tidak diplomatis.",
    "tip": "Nasionalisme di kancah global memadukan keteguhan prinsip kepentingan nasional dengan diplomasi bermartabat."
  },
  {
    "id": "twk-nas-033",
    "subPattern": "kepentingan-bangsa-dan-netralitas-asn",
    "difficulty": "mudah",
    "prompt": "Berdasarkan Undang-Undang Nomor 20 Tahun 2023 tentang Aparatur Sipil Negara (ASN), netralitas menjadi salah satu asas penting dalam penyelenggaraan kebijakan dan manajemen ASN. Makna prinsip netralitas ASN tersebut adalah ...",
    "options": [
      "Pegawai ASN tidak boleh memiliki pandangan pribadi dalam menentukan pilihan saat pemungutan suara di bilik TPS",
      "Setiap pegawai ASN bebas menyuarakan dukungan terbuka terhadap partai politik selama dilakukan di luar jam kantor",
      "Pegawai ASN wajib mengikuti arahan politik kepala daerah terpilih dalam setiap kegiatan pemilihan umum berikutnya",
      "Setiap pegawai ASN tidak berpihak dari segala bentuk pengaruh mana pun dan tidak memihak kepada kepentingan lain di luar kepentingan bangsa dan negara",
      "Pegawai ASN tidak diperbolehkan melayani kelompok pemilih yang berbeda pandangan dengan kebijakan pemerintah daerah"
    ],
    "answer": "D",
    "explanation": "Pasal 2 huruf f UU No. 20 Tahun 2023 menegaskan asas netralitas berarti setiap Pegawai ASN tidak berpihak dari segala bentuk pengaruh mana pun dan tidak memihak kepada kepentingan lain di luar kepentingan bangsa dan negara. ASN tetap memiliki hak pilih di bilik suara, namun dilarang berpolitik praktis/berkampanye.",
    "tip": "Bedakan hak memilih secara rahasia di TPS dengan larangan berpihak dan berpolitik praktis sebagai abdi negara."
  },
  {
    "id": "twk-nas-034",
    "subPattern": "kepentingan-bangsa-dan-netralitas-asn",
    "difficulty": "mudah",
    "prompt": "Menjelang pilkada, seorang kepala subbagian diajak teman dekatnya menghadiri acara deklarasi pasangan calon dan diminta berfoto bersama dengan pose simbol jari kampanye. Sikap yang paling sesuai dengan kewajiban netralitas ASN adalah ...",
    "options": [
      "Tetap berfoto menggunakan pose simbol jari kampanye dengan syarat wajahnya tidak diunggah ke akun dinas",
      "Menghadiri deklarasi menggunakan seragam batik KORPRI agar dianggap hadir sebagai pemantau resmi masyarakat",
      "Mengajak staf di subbagiannya untuk turut hadir memberi dukungan moral kepada teman dekatnya tersebut",
      "Mengirimkan pesan dukungan resmi lewat surat elektronik kantor agar tidak tampak hadir secara fisik",
      "Menolak secara santun ajakan berpose kampanye maupun keterlibatan dalam acara politik demi menjaga netralitas ASN"
    ],
    "answer": "E",
    "explanation": "ASN dilarang berpose simbol dukungan, menghadiri acara deklarasi/kampanye untuk mendukung peserta pemilu/pilkada, atau mengarahkan staf. Menolak secara santun namun tegas menjaga integritas jabatan dan pelayanan publik.",
    "tip": "Tindakan simbolik seperti pose kampanye atau menyukai unggahan politik tetap termasuk pelanggaran netralitas ASN."
  },
  {
    "id": "twk-nas-035",
    "subPattern": "kepentingan-bangsa-dan-netralitas-asn",
    "difficulty": "sedang",
    "prompt": "Seorang ASN menemukan unggahan bakal calon kepala daerah yang merupakan mantan atasannya di beranda media sosial. Rekan sekantor mengajaknya memberikan tanda suka (like) dan membagikan ulang unggahan kampanye tersebut lewat akun pribadi agar cepat dikenal warga. Tindakan yang tepat sesuai disiplin netralitas ASN adalah ...",
    "options": [
      "Tidak memberikan tanda suka, komentar dukungan, maupun membagikan ulang konten kampanye tersebut meski menggunakan akun pribadi",
      "Memberikan tanda suka saja tanpa menuliskan komentar agar tetap terlihat menjaga sopan santun pribadi",
      "Membagikan ulang konten kampanye tersebut lewat grup keluarga besar supaya tidak terbaca oleh rekan kantor",
      "Membuat akun anonim khusus untuk membantu menyebarkan program unggulan mantan atasannya tersebut",
      "Menggunakan data kontak warga di basis data dinas untuk mengirimkan tautan visi misi bakal calon secara pribadi"
    ],
    "answer": "A",
    "explanation": "Dalam ketentuan netralitas ASN dan SKB Netralitas ASN, memberikan tanda suka (like), komentar dukungan, membagikan ulang (repost/share) unggahan kampanye di media sosial pribadi termasuk pelanggaran netralitas yang dapat dikenai sanksi etik maupun disiplin.",
    "tip": "Jejak digital pribadi ASN di media sosial tetap diawasi oleh aturan netralitas."
  },
  {
    "id": "twk-nas-036",
    "subPattern": "kepentingan-bangsa-dan-netralitas-asn",
    "difficulty": "sedang",
    "prompt": "Sebuah daerah terdampak banjir bandang tepat pada hari libur nasional. Pada saat yang sama, keluarga seorang ASN sudah merencanakan acara syukuran pribadi di luar kota, sementara instansinya membuka posko darurat penyaluran bantuan warga. Wujud mendahulukan kepentingan bangsa dan negara di atas kepentingan pribadi yang paling tepat adalah ...",
    "options": [
      "Menyerahkan tugas posko darurat sepenuhnya kepada relawan luar karena status ASN pada hari libur tidak mengikat",
      "Hadir lima belas menit hanya untuk dokumentasi foto seragam lalu segera meninggalkan posko ke luar kota",
      "Menjelaskan situasi mendesak kepada keluarga dengan baik, mengutamakan tugas kemanusiaan di posko darurat sesuai penugasan instansi, dan menjadwalkan ulang acara keluarga",
      "Menolak seluruh penugasan di luar hari kerja dengan alasan tidak tercantum dalam jam kerja standar reguler",
      "Mengirimkan sumbangan kecil secara daring agar instansi tidak lagi menghubunginya selama libur berlangsung"
    ],
    "answer": "C",
    "explanation": "ASN mengemban tanggung jawab pengabdian publik terutama saat kondisi darurat masyarakat membutuhkan kehadiran negara. Menempatkan pelayanan darurat di atas rencana pribadi secara bertanggung jawab mencerminkan semangat nasionalisme dan nilai Loyal.",
    "tip": "Lihat situasi kedaruratan publik di mana peran ASN menjadi instrumen langsung kehadiran negara."
  },
  {
    "id": "twk-nas-037",
    "subPattern": "kepentingan-bangsa-dan-netralitas-asn",
    "difficulty": "sedang",
    "prompt": "Seorang camat diminta oleh oknum tim sukses petahana agar bantuan sosial beras bagi warga miskin difokuskan terlebih dahulu ke desa yang berpotensi memberi suara tinggi pada pemilihan mendatang. Langkah camat yang mencerminkan integritas nasionalisme dan netralitas ASN adalah ...",
    "options": [
      "Mengikuti arahan tim sukses sebagian agar anggaran kecamatan tahun berikutnya tetap mendapat dukungan",
      "Menunda seluruh penyaluran beras bantuan ke semua desa sampai proses pemilihan selesai berlangsung",
      "Mengalihkan bantuan beras tersebut kepada tokoh masyarakat terdekat agar tidak dituduh memihak peserta mana pun",
      "Menyalurkan bantuan sosial secara objektif berdasar data kemiskinan yang valid dan sah tanpa memihak kepentingan elektoral siapa pun",
      "Meminta kepala desa membuat daftar penerima baru berdasarkan kesepakatan lisan tokoh politik setempat"
    ],
    "answer": "D",
    "explanation": "Bantuan sosial (bansos) berasal dari anggaran negara untuk warga rentan sesuai data terpadu yang objektif. Menggunakan program negara untuk kepentingan elektoral merusak netralitas ASN, keadilan sosial, dan wibawa pemerintahan.",
    "tip": "Program dan anggaran negara wajib disalurkan berbasis data objektif, bukan kalkulasi suara politik."
  },
  {
    "id": "twk-nas-038",
    "subPattern": "kepentingan-bangsa-dan-netralitas-asn",
    "difficulty": "sedang",
    "prompt": "Mengapa Pasal 24 ayat (1) huruf d UU No. 20 Tahun 2023 mewajibkan setiap Pegawai ASN menjaga netralitas dan melarang keberpihakan politik praktis?",
    "options": [
      "Agar ASN dapat terhindar dari kewajiban mengikuti dinamika kebijakan pembangunan nasional jangka menengah",
      "Supaya seluruh pegawai pemerintah hanya fokus mengerjakan tugas administratif rutin tanpa inovasi layanan",
      "Untuk mengurangi minat lulusan perguruan tinggi berpolitik di luar instansi pemerintahan maupun organisasi profesi",
      "Supaya setiap pegawai negeri tidak perlu lagi memahami isu ketatanegaraan dan peraturan perundang-undangan",
      "Agar kesinambungan pelayanan publik, objektivitas birokrasi, dan persatuan nasional tetap terjaga siapa pun pemimpin politik yang terpilih"
    ],
    "answer": "E",
    "explanation": "Birokrasi yang profesional dan netral menjamin pelayanan publik tetap adil, konsisten, serta berkelanjutan lintas pergantian rezim politik, sekaligus mencegah perpecahan dan politisasi anggaran negara.",
    "tip": "Fokus pada tujuan konstitusional netralitas birokrasi: kontinuitas layanan publik, keadilan warga, dan persatuan."
  },
  {
    "id": "twk-nas-039",
    "subPattern": "kepentingan-bangsa-dan-netralitas-asn",
    "difficulty": "sulit",
    "prompt": "Menjelang kontestasi daerah, beredar rekaman suara berbasis kecerdasan buatan (deepfake AI) yang memanipulasi suara seorang kepala dinas seolah-olah mengarahkan pegawainya memilih calon tertentu. Jika Anda adalah staf humas dan pengelola kepatuhan di dinas tersebut, tindakan mitigasi komprehensif yang paling tepat adalah ...",
    "options": [
      "Mengumpulkan keterangan resmi kepala dinas disertai bukti forensik digital sederhana, menerbitkan klarifikasi faktual berkoordinasi dengan Bawaslu dan Diskominfo, serta mengedukasi internal pegawai",
      "Menghapus seluruh akun resmi media sosial dinas agar masyarakat tidak dapat mengomentari isu tersebut",
      "Membuat video balasan tandingan yang menuduh salah satu peserta pilkada sebagai dalang manipulasi tanpa pemeriksaan ahli",
      "Menunggu hingga masa kampanye selesai baru memberikan bantahan resmi agar tidak menarik perhatian publik",
      "Mewajibkan seluruh pegawai membagikan tangkapan layar percakapan internal dinas ke akun pribadi masing-masing"
    ],
    "answer": "A",
    "explanation": "Ancaman manipulasi AI (deepfake) terhadap netralitas birokrasi membutuhkan respons kelembagaan yang transparan dan berbasis bukti: klarifikasi faktual resmi, koordinasi otoritas pengawas pemilu (Bawaslu) serta otoritas informasi (Diskominfo/siber), dan penegasan ulang komitmen netralitas internal.",
    "tip": "Pada kasus disinformasi/deepfake modern, gabungkan pembuktian fakta, koordinasi lintas otoritas resmi, dan edukasi."
  },
  {
    "id": "twk-nas-040",
    "subPattern": "kepentingan-bangsa-dan-netralitas-asn",
    "difficulty": "sulit",
    "prompt": "Dalam praktik pemerintahan, seorang ASN profesional dituntut memiliki loyalitas kepada negara yang tetap menjunjung tinggi hukum (constitutional loyalty). Ketika atasan langsung memberi perintah lisan untuk menerbitkan izin bangunan di area resapan air lindung karena kedekatan politik, sikap nasionalisme dan loyalitas konstitusional yang paling tepat adalah ...",
    "options": [
      "Segera menandatangani izin tersebut karena loyalitas dalam birokrasi berarti kepatuhan penuh tanpa syarat kepada atasan langsung",
      "Menolak secara santun dan tertulis dengan melampirkan kajian ketentuan tata ruang yang berlaku, serta mengajukan alternatif lokasi yang sesuai regulasi",
      "Membocorkan rencana perintah tersebut ke forum publik anonim sambil tetap mengolah persetujuan izin secara diam-diam",
      "Menyimpan berkas permohonan di laci selama bertahun-tahun tanpa memberi alasan apa pun kepada pemohon maupun atasan",
      "Meminta staf honorer menandatangani surat izin atas nama dinas agar atasan tidak menyalahkan pegawai ASN"
    ],
    "answer": "B",
    "explanation": "Nilai Loyal bagi ASN berarti setia kepada Pancasila, UUD 1945, NKRI, serta pemerintahan yang sah sesuai koridor hukum—bukan kepatuhan membabi buta terhadap perintah melanggar regulasi. Penolakan yang argumentatif, terdokumentasi, dan berbasis peraturan melindungi kepentingan bangsa serta lingkungan jangka panjang.",
    "tip": "Loyalitas sejati ASN adalah kesetiaan kepada konstitusi dan kepentingan bangsa yang sah secara hukum."
  }
];

export const nasionalismeQuestions: readonly Question[] = buildTwkPatternQuestions(
  "nasionalisme",
  [...nasionalismeDrafts, ...nasionalismeBatch2Drafts, ...nasionalismeBatch3Drafts],
);
