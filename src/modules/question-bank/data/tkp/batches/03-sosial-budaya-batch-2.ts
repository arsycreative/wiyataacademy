import { type TkpQuestionDraft } from "@/modules/question-bank/domain/question";

export const sosialBudayaBatch2Drafts: readonly TkpQuestionDraft[] = [
  {
    id: "tkp-sos-041",
    subPattern: "adaptasi-lingkungan-dan-kearifan-lokal",
    difficulty: "mudah",
    prompt:
      "Anda baru ditugaskan menghadiri rapat koordinasi di balai adat sebuah desa yang memiliki tata cara khusus, seperti melepas alas kaki di pendopo dan mendahulukan sapaan penghormatan kepada tetua kampung. Sikap adaptasi Anda saat hadir adalah ...",
    options: [
      "Mempelajari tata cara sebelum acara, melepas alas kaki, dan menyapa tetua kampung penuh hormat.",
      "Mengikuti aturan melepas alas kaki seperti peserta lain, namun langsung duduk tanpa menyapa tetua.",
      "Tetap memakai sepatu formal dinas di pendopo dengan alasan menjaga wibawa protokol acara resmi.",
      "Menunggu pegawai senior setempat memberi kode langkah demi langkah sebelum Anda bersikap di balai.",
      "Menyapa perangkat desa dengan ramah, lalu menanyakan pelan mengapa alas kaki harus dilepas di pendopo.",
    ],
    optionScores: [5, 3, 1, 2, 4],
    answer: "A",
    explanation:
      "Skor 5 menunjukkan kesiapan belajar adat setempat sebelum acara dan mempraktikkannya penuh hormat tanpa mengurangi marwah dinas. Pilihan skor 4 sudah beritikad ramah menyapa perangkat desa, tetapi kurang persiapan awal dan bertanya di lokasi berisiko terkesan mempertanyakan adat.",
    tip: "Pelajari tata krama ruang adat sebelum berkunjung agar kehadiran aparatur langsung diterima hangat warga.",
  },
  {
    id: "tkp-sos-042",
    subPattern: "adaptasi-lingkungan-dan-kearifan-lokal",
    difficulty: "mudah",
    prompt:
      "Anda dipindahtugaskan ke wilayah kecamatan agraris yang aktivitas warganya dimulai sejak subuh di kebun dan pasar lalu lengang saat siang terik, berbeda jauh dari ritme kota asal Anda. Agar koordinasi lapangan berjalan efektif, penyesuaian Anda adalah ...",
    options: [
      "Tetap menjadwalkan kunjungan lapangan pukul sebelas siang sesuai kebiasaan jam kerja kantor sebelumnya.",
      "Menyesuaikan jam kunjungan lapangan mengikuti ritme pagi warga dengan tetap menjaga akuntabilitas dinas.",
      "Menitipkan formulir pendataan ke kantor desa agar warga mengisinya sendiri saat ada waktu luang.",
      "Mengundang warga datang ke kantor kecamatan pada siang hari sembari memaklumi jika kehadiran sedikit.",
      "Menggeser sebagian jadwal temu warga menjadi lebih pagi sesekali sambil mempertahankan pola kerja lama.",
    ],
    optionScores: [1, 5, 3, 2, 4],
    answer: "B",
    explanation:
      "Skor 5 memadukan kepekaan terhadap ritme hidup masyarakat agraris dengan ketertiban administrasi dinas sehingga layanan efektif. Pilihan skor 4 sudah mencoba menyesuaikan waktu secara bertahap, namun masih setengah hati karena mempertahankan pola lama pada sebagian besar agenda.",
    tip: "Selaraskan jadwal pendekatan lapangan dengan ritme sosial-ekonomi warga tanpa melanggar aturan jam kerja.",
  },
  {
    id: "tkp-sos-043",
    subPattern: "adaptasi-lingkungan-dan-kearifan-lokal",
    difficulty: "sedang",
    prompt:
      "Dalam program digitalisasi arsip sejarah kecamatan dengan tenggat dua minggu, seorang sesepuh kampung keberatan naskah kuno milik keluarga adat difoto langsung karena harus melewati izin ritual keluarga terlebih dahulu. Langkah bijak Anda adalah ...",
    options: [
      "Meminta surat pengantar camat agar sesepuh wajib menyerahkan naskah demi target program pemerintah.",
      "Mencoret naskah pusaka tersebut dari daftar pendataan arsip kecamatan agar tidak memicu polemik adat.",
      "Menghormati proses izin adat sesepuh, menyepakati jadwal prosesi, dan mengatur ulang alur kerja tim.",
      "Mengambil foto sampul naskah dari luar kotak penyimpanan sebagai bukti awal sambil menunggu izin.",
      "Menunggu dengan sabar hingga keluarga adat selesai bermusyawarah meski berisiko melewati tenggat tim.",
    ],
    optionScores: [1, 2, 5, 3, 4],
    answer: "C",
    explanation:
      "Skor 5 menghargai kesakralan tradisi keluarga adat sekaligus proaktif menyepakati linimasa dan manajemen jadwal agar target tetap tercapai. Pilihan skor 4 menunjukkan kesabaran menghormati proses adat, tetapi pasif mengelola tenggat sehingga berisiko menghambat capaian tim.",
    tip: "Saat berhadapan dengan benda atau tradisi sakral, hormati tata cara izin lokal sembari menegosiasikan jadwal kerja.",
  },
  {
    id: "tkp-sos-044",
    subPattern: "adaptasi-lingkungan-dan-kearifan-lokal",
    difficulty: "sedang",
    prompt:
      "Saat merencanakan pembangunan pos kesehatan desa, warga ragu pada titik lahan hibah paling datar karena menurut tradisi lokal posisi pintu menghadap arah tertentu dianggap membawa musibah, padahal konstruksi teknis membutuhkannya. Pendekatan Anda adalah ...",
    options: [
      "Memaksakan rancangan teknis awal tanpa perubahan karena pertimbangan konstruksi ilmiah lebih utama.",
      "Memindahkan proyek pos kesehatan ke desa lain yang warganya dinilai lebih terbuka terhadap desain dinas.",
      "Mengubah total letak bangunan sesuai arahan warga meski mengorbankan aspek keamanan struktur tanah.",
      "Berdiskusi bersama tokoh adat dan tim teknis mencari penyesuaian tata letak yang aman sekaligus hormat adat.",
      "Menjelaskan secara sopan kajian teknik bangunan kepada warga lalu menyerahkan keputusan akhir ke kepala desa.",
    ],
    optionScores: [1, 2, 3, 5, 4],
    answer: "D",
    explanation:
      "Skor 5 menyatukan standar keselamatan teknis bangunan dengan kearifan tata ruang adat melalui dialog kolaboratif sehingga fasilitas diterima warga. Pilihan skor 4 sudah komunikatif dan sopan menjelaskan kajian teknik, namun melepas tanggung jawab mediasi solusi kepada kepala desa.",
    tip: "Gabungkan kelayakan teknis dengan sensitivitas kearifan ruang lokal melalui dialog dua arah agar fasilitas dimanfaatkan warga.",
  },
  {
    id: "tkp-sos-045",
    subPattern: "adaptasi-lingkungan-dan-kearifan-lokal",
    difficulty: "sedang",
    prompt:
      "Di kantor penempatan baru, pegawai setempat rutin menggelar tradisi makan bersama membawa penganan khas daerah tiap Jumat siang di pendopo, sementara beberapa pegawai perantau baru memilih tetap makan sendiri di meja masing-masing karena canggung. Sebagai pegawai baru yang ingin merajut keakraban, langkah Anda adalah ...",
    options: [
      "Tetap makan siang di meja kerja bersama sesama rekan perantau karena merasa lebih nyaman dan cepat.",
      "Sesekali mampir menyapa sebentar ke pendopo lalu kembali makan sendiri di ruang kerja seperti biasa.",
      "Mengusulkan kepada panitia agar tradisi Jumat siang diganti memesan katering seragam yang lebih praktis.",
      "Hadir ikut makan bersama di pendopo setiap Jumat sambil memperkenalkan diri dengan ramah kepada pegawai senior.",
      "Ikut hadir di pendopo, membawa penganan daerah asal, dan mengajak rekan perantau lain membaur hangat.",
    ],
    optionScores: [1, 2, 3, 4, 5],
    answer: "E",
    explanation:
      "Skor 5 melampaui sekadar ikut hadir dengan membawa pertukaran budaya kuliner serta menjembatani rekan perantau lain agar seluruh tim membaur. Pilihan skor 4 sudah beradaptasi positif hadir dan ramah menyapa, tetapi belum berinisiatif merangkul rekan perantau lain yang masih canggung.",
    tip: "Gunakan tradisi kebersamaan kantor sebagai jembatan pertukaran budaya hangat dan perangkul rekan baru.",
  },
  {
    id: "tkp-sos-046",
    subPattern: "adaptasi-lingkungan-dan-kearifan-lokal",
    difficulty: "sedang",
    prompt:
      "Dinas Anda merancang seragam pemandu wisata desa bermotif tenun kontemporer, tetapi perajin adat setempat keberatan karena ada motif sakral yang menurut aturan budaya tidak boleh dikenakan sembarang kegiatan komersial. Sebagai penanggung jawab desain kegiatan, sikap Anda adalah ...",
    options: [
      "Menemui tokoh perajin memahami batas motif sakral, lalu merevisi desain memakai motif umum bernilai lokal.",
      "Menghentikan penggunaan motif tenun lokal dan mengganti seragam dengan corak polos standar kementerian.",
      "Tetap mencetak seragam karena desain sudah disetujui pejabat dinas dengan dalih mempromosikan budaya.",
      "Mengucapkan terima kasih atas masukan perajin lalu menambahkan keterangan arti motif di buku panduan wisata.",
      "Mengubah warna motif sakral agar tampak modern dengan harapan aturan pantangan adat tidak lagi berlaku.",
    ],
    optionScores: [5, 3, 1, 4, 2],
    answer: "A",
    explanation:
      "Skor 5 menghormati hak budaya dan aturan kesakralan perajin lokal sambil tetap mempromosikan kekayaan motif umum secara etis dan kolaboratif. Pilihan skor 4 sudah sopan mengapresiasi masukan serta memberi edukasi di panduan, namun tetap melanggar batas pantangan motif sakral pada seragam.",
    tip: "Pelestarian budaya daerah dalam program pemerintah wajib menghormati etika dan batasan kesakralan masyarakat adat.",
  },
  {
    id: "tkp-sos-047",
    subPattern: "adaptasi-lingkungan-dan-kearifan-lokal",
    difficulty: "sulit",
    prompt:
      "Program sanitasi komunal di sebuah dusun terpencil gagal dimanfaatkan warga karena posisi tangki resapan yang dibangun bersebelahan dengan kawasan makam leluhur yang dipantangkan untuk limbah rumah tangga. Sebagai koordinator program kesehatan lingkungan, solusi paling tepat Anda lakukan adalah ...",
    options: [
      "Menegur perangkat dusun agar membujuk warga memakai fasilitas karena anggaran negara telah terserap.",
      "Menggandeng tokoh adat dan ahli sanitasi mengkaji relokasi titik resapan baru yang aman secara teknis dan adat.",
      "Melakukan penyuluhan kesehatan terus-menerus bahwa tangki resapan modern kedap air dan tidak mencemari tanah.",
      "Mencatat kegagalan pemanfaatan sarana tersebut dalam laporan akhir tanpa mengusulkan perbaikan lanjutan.",
      "Membongkar fasilitas secara sepihak dan memindahkan anggarannya ke dusun tetangga yang lebih kooperatif.",
    ],
    optionScores: [2, 5, 4, 1, 3],
    answer: "B",
    explanation:
      "Skor 5 memadukan penyelesaian teknis berkelanjutan bersama ahli sanitasi dan penghormatan nilai sakral adat agar sarana benar-benar dipakai warga. Pilihan skor 4 sudah berupaya melakukan edukasi ilmiah secara persuasif, tetapi mengabaikan sensitivitas batin warga terkait area makam leluhur.",
    tip: "Keberhasilan infrastruktur sosial menuntut keselarasan kelayakan teknis dan penerimaan nilai budaya setempat.",
  },
  {
    id: "tkp-sos-048",
    subPattern: "adaptasi-lingkungan-dan-kearifan-lokal",
    difficulty: "sulit",
    prompt:
      "Saat menyusun peraturan daerah perlindungan satwa endemik yang terancam punah, tim Anda menghadapi tradisi berburu tahunan masyarakat adat sebagai ritual kedewasaan yang berbenturan dengan regulasi konservasi nasional. Langkah kebijakan paling bijaksana Anda dorong adalah ...",
    options: [
      "Menerbitkan larangan berburu mendadak beserta sanksi pidana berat tanpa melibatkan musyawarah lembaga adat.",
      "Mengecualikan seluruh wilayah adat dari aturan konservasi nasional agar konflik sosial tidak terjadi di daerah.",
      "Memfasilitasi dialog tokoh adat dan ahli ekologi merumuskan ritual pengganti lestari dan tata kelola zona lindung.",
      "Meminta tokoh adat membatasi jumlah hewan buruan setiap tahun sambil menunda penetapan peraturan daerah.",
      "Mengalihkan fokus peraturan hanya pada penindakan pemburu luar daerah sembari membiarkan perburuan tradisional.",
    ],
    optionScores: [1, 2, 5, 4, 3],
    answer: "C",
    explanation:
      "Skor 5 menjembatani supremasi hukum konservasi dan kelangsungan makna ritual adat melalui dialog multipihak untuk menemukan substitusi budaya lestari. Pilihan skor 4 mencoba kompromi pembatasan kuota buruan, namun menunda payung hukum formal berisiko memperparah kepunahan satwa.",
    tip: "Ketika kearifan lokal berbenturan dengan hukum perlindungan hayati, fasilitasi transisi ritual yang tetap menjaga makna budaya sekaligus taat hukum.",
  },
  {
    id: "tkp-sos-049",
    subPattern: "toleransi-antarumat-dan-keberagaman-budaya",
    difficulty: "mudah",
    prompt:
      "Di ruang istirahat kantor, beberapa rekan membahas tradisi mudik dan upacara keluarga dari daerah masing-masing, lalu seorang pegawai melontarkan candaan yang meremehkan adat suatu suku sebagai kebiasaan kuno. Sikap Anda adalah ...",
    options: [
      "Ikut tersenyum tipis menanggapi candaan tersebut supaya suasana makan siang di ruang istirahat tidak canggung.",
      "Langsung menegurnya dengan suara keras di depan semua orang agar tidak mengulangi ejekan serupa.",
      "Diam saja mendengarkan tanpa berkomentar karena menganggap obrolan santai tidak perlu ditanggapi serius.",
      "Mengalihkan suasana hangat sambil mengingatkan santun bahwa tiap adat daerah punya nilai luhur yang patut dihargai.",
      "Mengajak rekan asal suku yang disindir berbincang akrab seusai jam istirahat untuk membesarkan hatinya.",
    ],
    optionScores: [1, 2, 3, 5, 4],
    answer: "D",
    explanation:
      "Skor 5 menghentikan candaan merendahkan secara santun namun tegas di ruang kerja sekaligus menanamkan penghargaan setara terhadap tiap budaya. Pilihan skor 4 sudah berempati membesarkan hati rekan terdampak secara privat, tetapi membiarkan stigma itu berlalu tanpa koreksi di forum.",
    tip: "Koreksi candaan bernuansa merendahkan budaya dengan tenang dan elegan agar budaya hormat tetap terjaga.",
  },
  {
    id: "tkp-sos-050",
    subPattern: "toleransi-antarumat-dan-keberagaman-budaya",
    difficulty: "mudah",
    prompt:
      "Menjelang penyusunan jadwal piket layanan akhir pekan, dua rekan dari agama berbeda sama-sama membutuhkan penyesuaian hari libur di tanggal berlainan untuk merayakan hari suci bersama keluarga mereka. Sebagai koordinator jadwal unit, langkah Anda adalah ...",
    options: [
      "Menolak permintaan keduanya dengan dalih jadwal piket akhir pekan sudah dibuat acak dan tidak boleh diubah.",
      "Mengabulkan permohonan rekan yang agamanya dianut mayoritas pegawai saja karena jumlahnya lebih banyak.",
      "Meminta keduanya mencari sendiri rekan pengganti di luar tim tanpa memfasilitasi penyusunan ulang jadwal.",
      "Memberi izin kepada keduanya namun mengurangi nilai penilaian kedisiplinan mereka karena mengganggu jadwal.",
      "Mengatur pertukaran jadwal secara adil dan sukarela bersama tim agar keduanya dapat beribadah tenang.",
    ],
    optionScores: [2, 1, 3, 4, 5],
    answer: "E",
    explanation:
      "Skor 5 memfasilitasi keadilan beribadah lintas agama melalui penjadwalan ulang yang tertib, sukarela, dan menjaga kelancaran layanan publik. Pilihan skor 4 sudah beritikad mengizinkan keduanya beribadah, namun pemotongan nilai kedisiplinan justru tidak adil terhadap hak beragama.",
    tip: "Fasilitasi pertukaran jadwal kerja secara adil dan transparan demi menghormati hari suci seluruh pegawai tanpa mengorbankan layanan.",
  },
  {
    id: "tkp-sos-051",
    subPattern: "toleransi-antarumat-dan-keberagaman-budaya",
    difficulty: "sedang",
    prompt:
      "Kantor Anda memiliki satu ruangan serbaguna kecil untuk fasilitas bersama pegawai, tetapi muncul usulan agar ruangan itu ditetapkan permanen hanya bagi kegiatan kerohanian satu agama mayoritas dengan alasan paling banyak peminatnya. Sebagai tim pengelola fasilitas kantor, tindakan Anda adalah ...",
    options: [
      "Menjaga fungsi inklusif ruang dengan jadwal bergiliran adil atau menata ruang ibadah terpisah sesuai ketentuan.",
      "Menyetujui penetapan permanen tersebut sambil berjanji memikirkan ruang lain bagi agama minoritas tahun depan.",
      "Menutup sementara penggunaan ruang serbaguna untuk kegiatan keagamaan apa pun demi menghindari kecemburuan.",
      "Menyetujui usulan itu asalkan kelompok agama mayoritas bersedia membiayai perawatannya secara swadaya.",
      "Meminta pimpinan membuat pemungutan suara pegawai untuk menentukan fungsi ruang serbaguna sesuai suara terbanyak.",
    ],
    optionScores: [5, 2, 3, 1, 4],
    answer: "A",
    explanation:
      "Skor 5 menjamin keadilan pemanfaatan fasilitas publik kantor bagi seluruh unsur pegawai secara inklusif dan proporsional tanpa meminggirkan minoritas. Pilihan skor 4 tampak demokratis lewat pemungutan suara, tetapi hak fasilitas dasar kelompok minoritas tidak semestinya dikalahkan suara mayoritas.",
    tip: "Fasilitas bersama instansi negara wajib dikelola secara adil dan inklusif, tidak dimonopoli oleh kelompok mayoritas.",
  },
  {
    id: "tkp-sos-052",
    subPattern: "toleransi-antarumat-dan-keberagaman-budaya",
    difficulty: "sedang",
    prompt:
      "Saat meninjau rancangan kalender resmi dan materi ucapan hari raya instansi daerah, Anda mendapati tim desain hanya mencantumkan hari besar satu agama dan motif budaya satu etnis dominan saja. Sebagai anggota tim kehumasan, usulan koreksi Anda adalah ...",
    options: [
      "Membiarkan rancangan tercetak apa adanya karena sebagian besar masyarakat daerah berasal dari kelompok tersebut.",
      "Mengusulkan pencantuman seluruh hari besar resmi nasional dan ragam ornamen budaya daerah secara proporsional.",
      "Menyarankan penghapusan seluruh ornamen budaya daerah dan hari besar agar desain kalender terlihat netral polos.",
      "Mengusulkan penambahan satu ucapan hari besar agama lain yang paling besar jumlah pemeluk keduanya di kota.",
      "Mencatat ketimpangan desain tersebut untuk diperbaiki pada penyusunan kalender kerja tahun anggaran berikutnya.",
    ],
    optionScores: [1, 5, 3, 4, 2],
    answer: "B",
    explanation:
      "Skor 5 menghadirkan wajah instansi negara yang merangkul seluruh warga melalui pengakuan setara hari besar resmi dan kekayaan budaya beragam. Pilihan skor 4 mulai membuka ruang keberagaman untuk dua kelompok besar, namun tetap meniadakan pengakuan bagi umat dan budaya lainnya.",
    tip: "Publikasi resmi instansi pemerintah harus mencerminkan kebinekaan masyarakat secara proporsional dan setara.",
  },
  {
    id: "tkp-sos-053",
    subPattern: "toleransi-antarumat-dan-keberagaman-budaya",
    difficulty: "sedang",
    prompt:
      "Anda diundang menghadiri upacara syukuran adat sekaligus doa lintas keluarga di rumah rekan sekantor yang berbeda agama dan budaya, yang memiliki tata cara duduk dan penghormatan yang belum Anda kenal. Sikap paling tepat saat hadir adalah ...",
    options: [
      "Menolak undangan dengan alasan khawatir keliru tata cara dan takut mengganggu kekhusyukan keyakinan pribadi.",
      "Hadir sebentar di teras rumah lalu pulang sebelum rangkaian upacara dimulai agar tidak canggung saat berdoa.",
      "Hadir hormat mempelajari etika tamu sebelumnya, mengikuti acara wajar, dan tetap menjaga batas keyakinan pribadi.",
      "Menghadiri acara dengan ramah dan mengikuti semua gerakan ritual tuan rumah sepenuhnya meski ragu batas iman.",
      "Mengirimkan karangan bunga atau bingkisan ucapan selamat ke rumahnya sebagai pengganti kehadiran pribadi.",
    ],
    optionScores: [2, 3, 5, 1, 4],
    answer: "C",
    explanation:
      "Skor 5 memadukan penghormatan sosial sebagai tamu yang beradab dan pemahaman etiket lokal dengan tetap menjaga kemurnian keyakinan pribadi secara wajar. Pilihan skor 4 sudah santun menjaga silaturahmi lewat kiriman ucapan, namun kurang hangat dibanding hadir langsung menghormati tuan rumah.",
    tip: "Toleransi sejati memungkinkan kita hadir menghormati perayaan sosial sesama tanpa mengorbankan prinsip keyakinan masing-masing.",
  },
  {
    id: "tkp-sos-054",
    subPattern: "toleransi-antarumat-dan-keberagaman-budaya",
    difficulty: "sedang",
    prompt:
      "Di grup percakapan resmi koordinasi unit kerja, seorang pegawai membagikan kiriman artikel opini bernada menyudutkan tata cara ibadah kelompok agama tertentu hingga membuat suasana diskusi grup mendadak kaku dan hening. Sikap Anda adalah ...",
    options: [
      "Keluar diam-diam dari grup percakapan tersebut agar tidak ikut terseret dalam perdebatan sensitif antarpegawai.",
      "Menuliskan komentar balasan panjang untuk berdebat terbuka dengannya di grup agar semua rekan tahu kebenarannya.",
      "Mendiamkan kiriman tersebut dan langsung melanjutkan pembahasan agenda tugas dinas seolah tidak terjadi apa-apa.",
      "Mengingatkan tenang di grup agar fokus pada urusan dinas, lalu menghubungi pengirimnya secara pribadi dengan santun.",
      "Melaporkan tangkapan layar kiriman tersebut kepada bagian kepegawaian agar pengirimnya segera diberi sanksi disiplin.",
    ],
    optionScores: [1, 2, 3, 5, 4],
    answer: "D",
    explanation:
      "Skor 5 menjaga ketenangan ruang kerja digital dengan mengembalikan fokus grup secara netral sekaligus melakukan edukasi empat mata yang menjaga martabat rekan. Pilihan skor 4 tegas terhadap pelanggaran etika ruang kerja, tetapi langsung melapor sanksi tanpa pendekatan persuasif awal kurang membangun kohesi.",
    tip: "Redam konten sensitif di grup kerja secara netral di ruang publik dan luruskan secara persuasif melalui jalur pribadi.",
  },
  {
    id: "tkp-sos-055",
    subPattern: "toleransi-antarumat-dan-keberagaman-budaya",
    difficulty: "sulit",
    prompt:
      "Pembangunan taman baca dan ruang terbuka hijau kecamatan tertunda akibat dua kelompok warga berbeda latar tradisi keagamaan saling menolak rancangan gapura pintu masuk yang dianggap terlalu menonjolkan simbol kelompok lawan. Sebagai anggota tim mediasi kecamatan, langkah penyelesaian Anda adalah ...",
    options: [
      "Memutuskan secara sepihak pembangunan taman tanpa gapura agar proyek anggaran kecamatan cepat selesai tepat waktu.",
      "Meminta kedua kelompok mengadakan pemungutan suara tingkat kecamatan guna memilih salah satu desain gapura.",
      "Menunda proyek taman terbuka hijau hingga tahun depan sampai kedua kelompok warga berdamai dengan sendirinya.",
      "Meminta tokoh agama kedua pihak memberi rekomendasi desain terpisah agar masing-masing memilih warna dinding saja.",
      "Mempertemukan kedua perwakilan merancang desain gapura bercorak netral dan simbol persatuan kebangsaan bersama.",
    ],
    optionScores: [3, 2, 1, 4, 5],
    answer: "E",
    explanation:
      "Skor 5 menyelesaikan konflik simbol ruang publik secara partisipatif dengan memfasilitasi kesepakatan desain pemersatu yang diterima setara oleh semua pihak. Pilihan skor 4 sudah melibatkan tokoh agama kedua pihak, namun kompromi sebatas warna tanpa menyentuh desain utama belum menuntaskan akar keberatan.",
    tip: "Ruang publik milik bersama sebaiknya memakai simbol pemersatu yang disepakati melalui dialog inklusif lintas golongan.",
  },
  {
    id: "tkp-sos-056",
    subPattern: "toleransi-antarumat-dan-keberagaman-budaya",
    difficulty: "sulit",
    prompt:
      "Seorang staf berkinerja baik mengajukan penyesuaian jam istirahat singkat pada hari tertentu untuk ibadah rutin sesuai keyakinannya di luar hari libur nasional, dan bersedia mengganti jam kerja di sore hari, namun beberapa rekan mencibirnya sebagai kemalasan. Sebagai ketua tim, sikap Anda adalah ...",
    options: [
      "Menyetujui fleksibilitas sesuai aturan dengan kompensasi jam kerja jelas, serta meluruskan persepsi tim secara adil.",
      "Mengizinkannya beribadah secara diam-diam tanpa memberi tahu rekan lain agar tidak memancing komentar negatif.",
      "Menolak pengajuan tersebut demi menghindari kecemburuan sosial dan menjaga keseragaman jam pulang seluruh pegawai.",
      "Meminta staf tersebut mengambil cuti tahunan setiap kali ingin menunaikan ibadah rutinnya di luar hari libur resmi.",
      "Menyetujui permintaannya secara lisan sambil membiarkan cibiran rekan lain mereda sendiri seiring waktu berjalan.",
    ],
    optionScores: [5, 3, 1, 2, 4],
    answer: "A",
    explanation:
      "Skor 5 menyeimbangkan perlindungan hak ibadah pegawai, akuntabilitas jam kerja pengganti, dan kepemimpinan aktif meluruskan prasangka tim. Pilihan skor 4 sudah memberi ruang kebebasan ibadah staf tersebut, namun membiarkan cibiran rekan berlarut berisiko merusak iklim toleransi kerja.",
    tip: "Dukung hak beribadah seluruh pegawai dengan skema akuntabel yang transparan dan komunikasikan secara adil kepada tim.",
  },
  {
    id: "tkp-sos-057",
    subPattern: "komunikasi-lintas-budaya-dan-bahasa",
    difficulty: "mudah",
    prompt:
      "Seorang warga penyandang disabilitas tuli datang ke loket layanan publik dan tampak kebingungan menangkap penjelasan lisan Anda mengenai kelengkapan berkas. Tindakan komunikasi paling efektif dan menghargai martabatnya adalah ...",
    options: [
      "Berbicara lebih keras dengan gerakan bibir berlebihan sambil berharap warga tersebut dapat membaca gerak mulut Anda.",
      "Menyambut ramah dengan kontak mata, menulis langkah layanan jelas, atau memakai bahasa isyarat serta alat bantu.",
      "Meminta warga tersebut kembali lagi besok sambil membawa anggota keluarga yang dapat mendengar untuk mendampingi.",
      "Langsung mengambil berkas dari tangannya untuk diperiksa sendiri tanpa menjelaskan alur agar antrean cepat selesai.",
      "Mengambil kertas dan menuliskan daftar syarat berkas secara singkat sambil tersenyum tanpa memastikan pemahamannya.",
    ],
    optionScores: [1, 5, 2, 3, 4],
    answer: "B",
    explanation:
      "Skor 5 memastikan akses layanan setara bagi penyandang disabilitas tuli lewat komunikasi visual ramah, tulisan terstruktur, dan pemanfaatan alat bantu atau isyarat. Pilihan skor 4 sudah beritikad baik menulis syarat secara sopan, tetapi belum mengecek pemahaman dua arah dengan pemohon.",
    tip: "Sesuaikan media komunikasi dengan kebutuhan warga disabilitas secara sabar, ramah, dan memastikan informasi dipahami utuh.",
  },
  {
    id: "tkp-sos-058",
    subPattern: "komunikasi-lintas-budaya-dan-bahasa",
    difficulty: "mudah",
    prompt:
      "Saat mengikuti pelatihan kerja kelompok lintas provinsi, rekan satu kelompok Anda berbicara sangat cepat serta sering menyelipkan kosakata daerahnya sehingga Anda tidak menangkap utuh pembagian tugas kelompok. Sikap Anda adalah ...",
    options: [
      "Diam mengangguk-angguk saja karena merasa malu mengakui tidak memahami istilah daerah yang rekan gunakan.",
      "Meminta panitia memindahkan Anda ke kelompok lain yang pesertanya berasal dari wilayah budaya yang lebih mirip.",
      "Meminta maaf dengan ramah untuk memperlambat tempo dan mengonfirmasi ulang kesepakatan tugas dalam bahasa Indonesia.",
      "Mencatat bagian tugas yang Anda pahami saja dan mengerjakan sisanya sesuai perkiraan pribadi setelah diskusi selesai.",
      "Menanyakan arti istilah daerah tersebut secara pribadi kepada peserta lain setelah sesi diskusi kelompok berakhir.",
    ],
    optionScores: [1, 2, 5, 3, 4],
    answer: "C",
    explanation:
      "Skor 5 mencegah salah paham kerja secara terbuka, sopan, dan konstruktif dengan mengonfirmasi ulang pembagian tugas memakai bahasa persatuan. Pilihan skor 4 berupaya mencari kejelasan setelah diskusi usai, tetapi menunda klarifikasi langsung berisiko memperlambat koordinasi tim.",
    tip: "Klarifikasi istilah daerah secara sopan di forum lintas daerah menggunakan bahasa Indonesia agar kesepakatan kerja akurat.",
  },
  {
    id: "tkp-sos-059",
    subPattern: "komunikasi-lintas-budaya-dan-bahasa",
    difficulty: "sedang",
    prompt:
      "Dalam survei pendataan kesejahteraan di wilayah adat tertentu, responden ibu rumah tangga cenderung menunduk dan enggan menjawab terbuka bila diwawancarai petugas laki-laki sendirian sesuai norma kesopanan setempat. Sebagai ketua tim survei lapangan, penyesuaian Anda adalah ...",
    options: [
      "Tetap menugaskan petugas laki-laki mendata sesuai rute awal dan mencatat status responden sebagai kurang kooperatif.",
      "Melewati wawancara responden perempuan dan hanya mengambil data dari kepala keluarga laki-laki di seluruh dusun.",
      "Meminta tokoh pemuda dusun meneriakkan jawaban warga dari luar pagar agar wawancara berlangsung lebih cepat.",
      "Mengatur petugas perempuan mendampingi wawancara responden ibu rumah tangga atau menggelar dialog dengan pendamping keluarga.",
      "Menyampaikan secara tegas kepada warga bahwa petugas survei bekerja resmi atas nama negara sehingga wajib dijawab.",
    ],
    optionScores: [1, 2, 3, 5, 4],
    answer: "D",
    explanation:
      "Skor 5 menghormati norma kesantunan gender di masyarakat lokal sekaligus menjaga keakuratan data dari responden utama secara tepat. Pilihan skor 4 sudah menjelaskan status resmi secara legal, namun pendekatan kaku tanpa menyesuaikan komposisi petugas gagal menggali keterangan jujur warga.",
    tip: "Pahami norma kesopanan budaya lokal dalam teknik wawancara lapangan agar data akurat dan martabat responden terjaga.",
  },
  {
    id: "tkp-sos-060",
    subPattern: "komunikasi-lintas-budaya-dan-bahasa",
    difficulty: "sedang",
    prompt:
      "Surat edaran resmi dinas mengenai perubahan mekanisme bantuan sosial ternyata ditulis dengan banyak istilah hukum dan kalimat panjang berbelit, sehingga warga desa salah paham dan banyak membawa dokumen keliru ke kantor. Langkah perbaikan komunikasi Anda adalah ...",
    options: [
      "Meminta petugas loket menegur warga agar lebih teliti membaca ulang seluruh isi surat edaran sebelum datang.",
      "Membiarkan format surat edaran tetap seperti semula karena dokumen dinas wajib mengikuti bahasa hukum kaku.",
      "Mencabut edaran lama tanpa pengganti lalu menyuruh warga menunggu pengumuman lisan dari kepala desa saja.",
      "Menambahkan catatan kaki singkat di papan pengumuman kantor mengenai daftar dokumen yang paling sering keliru dibawa.",
      "Menyusun ringkasan panduan bergambar berbahasa sederhana dan menggandeng perangkat desa menyebarkannya merata.",
    ],
    optionScores: [1, 2, 3, 4, 5],
    answer: "E",
    explanation:
      "Skor 5 menjembatani keterbacaan kebijakan publik bagi masyarakat desa lewat bahasa sederhana, visual jelas, dan saluran komunitas desa tanpa mengurangi sahnya aturan. Pilihan skor 4 membantu mengurangi kekeliruan di kantor, namun belum menjangkau warga sebelum mereka datang dari jauh.",
    tip: "Sertai naskah hukum dinas dengan infografis berbahasa membumi dan saluran lokal agar warga desa tidak salah paham.",
  },
  {
    id: "tkp-sos-061",
    subPattern: "komunikasi-lintas-budaya-dan-bahasa",
    difficulty: "sedang",
    prompt:
      "Dalam rapat koordinasi daring antarpegawai lintas wilayah barat, tengah, dan timur Indonesia, gaya komunikasi rekan yang lebih pendiam disalahartikan oleh peserta lain sebagai sikap tidak peduli atau kurang berkontribusi. Sebagai moderator rapat, sikap Anda adalah ...",
    options: [
      "Membangun kesepakatan giliran bicara inklusif, mengajak rekan pendiam berpendapat, dan merangkum hasil bersama.",
      "Membiarkan peserta yang paling aktif saja terus mendominasi diskusi agar rapat daring cepat selesai sesuai jadwal.",
      "Menegur peserta yang pendiam di layar agar bersikap lebih proaktif dan meniru gaya peserta wilayah lainnya.",
      "Menyediakan kolom obrolan teks rapat untuk peserta yang enggan berbicara sambil melanjutkan diskusi suara seperti biasa.",
      "Menanyakan langsung alasan sikap diam peserta tersebut usai rapat melalui pesan pribadi tanpa mengubah alur forum.",
    ],
    optionScores: [5, 1, 2, 4, 3],
    answer: "A",
    explanation:
      "Skor 5 mengenali keragaman gaya ekspresi budaya serta merancang moderasi aktif agar setiap wilayah memiliki ruang kontribusi setara dan dipahami tim. Pilihan skor 4 memberi alternatif saluran teks yang cukup membantu, tetapi belum menjembatani kesalahpahaman antargaya komunikasi secara aktif.",
    tip: "Moderator lintas budaya perlu memfasilitasi giliran bicara inklusif agar anggota yang hemat kata tetap didengar gagasan bernilainya.",
  },
  {
    id: "tkp-sos-062",
    subPattern: "komunikasi-lintas-budaya-dan-bahasa",
    difficulty: "sedang",
    prompt:
      "Seorang warga memanggil Anda dengan sapaan kekerabatan adat setempat yang bernada akrab saat berkonsultasi di ruang layanan, namun rekan magang di sebelah Anda langsung menegur warga itu agar memanggil sesuai jabatan formal hingga suasana canggung. Tindakan bijak Anda adalah ...",
    options: [
      "Mendukung teguran rekan magang dengan menjelaskan panjang lebar mengenai tata krama birokrasi kepada warga tersebut.",
      "Menyambut akrab warga tersebut tanpa mempersoalkan sapaannya, lalu membimbing rekan magang soal budaya hormat lokal.",
      "Mengabaikan ketegangan yang terjadi dan langsung memeriksa dokumen warga tersebut dengan wajah datar agar cepat selesai.",
      "Meminta maaf kepada warga atas sikap rekan magang, namun tidak memberikan arahan kepada rekan magang sesudahnya.",
      "Meminta warga tersebut memanggil nama saja agar tidak ada kesalahpahaman formalitas di antara petugas loket.",
    ],
    optionScores: [1, 5, 2, 4, 3],
    answer: "B",
    explanation:
      "Skor 5 mencairkan kecanggungan warga dengan menghargai sapaan keakraban lokal sekaligus mengedukasi rekan magang secara privat tentang kearifan sapaan masyarakat. Pilihan skor 4 sudah sigap menenangkan warga lewat permintaan maaf, tetapi melewatkan pembinaan pemahaman budaya bagi rekan magang.",
    tip: "Hargai sapaan kekerabatan lokal warga selama tetap sopan, dan edukasi rekan baru tentang makna keakraban budaya setempat.",
  },
  {
    id: "tkp-sos-063",
    subPattern: "komunikasi-lintas-budaya-dan-bahasa",
    difficulty: "sulit",
    prompt:
      "Di sebuah kawasan perdagangan yang dihuni banyak pelaku usaha mikro dari komunitas penutur bahasa daerah atau bahasa ibu non-Indonesia baku, berulang kali terjadi penolakan berkas izin akibat salah tangkap instruksi lisan hingga memicu isu diskriminasi layanan. Solusi sistemik Anda usulkan adalah ...",
    options: [
      "Mewajibkan seluruh pemohon usaha membawa penerjemah bersertifikat pribadi saat datang mengurus perizinan di dinas.",
      "Menempelkan peringatan bahwa seluruh pemohon wajib fasih berbahasa Indonesia resmi sebelum dilayani petugas loket.",
      "Menyediakan papan panduan multibahasa/visual sederhana, daftar istilah lokal, dan petugas pendamping komunikatif.",
      "Melatih petugas loket berbicara lebih lambat menggunakan bahasa Indonesia baku serta menyediakan formulir tambahan.",
      "Memisahkan loket khusus bagi komunitas penutur bahasa tersebut pada hari tertentu agar tidak menghambat antrean.",
    ],
    optionScores: [2, 1, 5, 4, 3],
    answer: "C",
    explanation:
      "Skor 5 menghadirkan solusi sistemik tanpa memisahkan atau membebani warga melalui alat bantu visual-multibahasa dan pendampingan petugas yang ramah. Pilihan skor 4 sudah berupaya memperbaiki kejelasan tutur petugas, tetapi belum cukup mengatasi kendala kosakata teknis bagi penutur bahasa ibu berbeda.",
    tip: "Atasi hambatan bahasa berulang di layanan publik dengan perbaikan sistem media visual/panduan lokal, bukan membebani warga.",
  },
  {
    id: "tkp-sos-064",
    subPattern: "komunikasi-lintas-budaya-dan-bahasa",
    difficulty: "sulit",
    prompt:
      "Dalam mediasi sengketa batas lahan antarwarga berbeda latar budaya, salah satu pihak tersinggung berat karena lawan bicaranya menunjuk ke arah depan dengan suara lantang, padahal dalam budaya penuturnya gestur itu sekadar penekanan cerita biasa. Sebagai mediator pemerintah, tindakan paling tepat adalah ...",
    options: [
      "Menghentikan sesi mediasi seketika dan menyarankan kedua pihak langsung menyelesaikan perkara di pengadilan negeri.",
      "Meminta pihak yang tersinggung mengendalikan perasaannya karena gestur menunjuk bukan masalah hukum pertanahan.",
      "Mengganti forum tatap muka menjadi pertukaran surat resmi tanpa mempertemukan kedua keluarga di meja mediasi.",
      "Mendinginkan suasana, menjembatani perbedaan makna gestur antarbudaya, dan menyepakati tata krama bicara bersama.",
      "Menegur pihak bersuara lantang agar meminta maaf tanpa menjelaskan konteks perbedaan ekspresi budaya di kedua pihak.",
    ],
    optionScores: [2, 1, 3, 5, 4],
    answer: "D",
    explanation:
      "Skor 5 mengatasi krisis komunikasi antarbudaya secara adil dengan mengklarifikasi perbedaan makna nonverbal sekaligus menetapkan aturan main yang saling menghormati. Pilihan skor 4 berhasil meredam ketegangan sesaat lewat permintaan maaf, namun berisiko melukai pihak penutur jika niat budayanya tidak diluruskan.",
    tip: "Dalam mediasi lintas budaya, jembatani kesalahpahaman bahasa tubuh sebelum masuk ke substansi sengketa agar dialog kembali aman.",
  },
  {
    id: "tkp-sos-065",
    subPattern: "kepekaan-sosial-dan-gotong-royong",
    difficulty: "mudah",
    prompt:
      "Saat jam istirahat siang menuju kantin, Anda melihat petugas kebersihan kantor yang sudah berusia lanjut tampak kewalahan mendorong gerobak penuh kardus arsip bekas melewati tanjakan halaman parkir. Sikap Anda adalah ...",
    options: [
      "Terus berjalan menuju kantin karena mengangkat barang bekas merupakan cakupan pekerjaan harian petugas kebersihan.",
      "Menyapa ramah dari kejauhan sambil mengingatkannya berhati-hati agar kardus tidak terjatuh di tanjakan parkir.",
      "Berjalan cepat ke lobi untuk memberi tahu satpam agar membantu petugas kebersihan tersebut mengangkat barang.",
      "Membantu menahan bagian belakang gerobak sejenak hingga melewati tanjakan sebelum bergegas melanjutkan ke kantin.",
      "Segera menghampiri, membantu mendorong dan merapikan muatan hingga aman, lalu mengajaknya beristirahat sejenak.",
    ],
    optionScores: [1, 2, 3, 4, 5],
    answer: "E",
    explanation:
      "Skor 5 menampilkan kepekaan sosial tulus dengan membantu menuntaskan beban hingga aman sekaligus memberi perhatian kemanusiaan tanpa memandang jabatan. Pilihan skor 4 sudah sigap ikut meringankan di titik paling berat, namun bantuannya terhenti setengah jalan sebelum memastikan muatan tertata aman.",
    tip: "Ulurkan bantuan nyata kepada rekan lintas profesi di kantor, terutama kelompok lanjut usia, dengan tulus tanpa memandang status.",
  },
  {
    id: "tkp-sos-066",
    subPattern: "kepekaan-sosial-dan-gotong-royong",
    difficulty: "mudah",
    prompt:
      "Pengurus RW di lingkungan tempat tinggal Anda mengajak warga berpartisipasi menghidupkan kembali taman bacaan anak yang terbengkalai melalui sumbangan buku layak baca dan gotong royong penataan rak di akhir pekan. Sikap Anda adalah ...",
    options: [
      "Menyumbang buku bacaan anak yang relevan dan meluangkan waktu akhir pekan ikut menata taman bacaan bersama warga.",
      "Mengirimkan beberapa buku bekas dari rumah ke pos RW tanpa sempat hadir membantu kerja bakti penataan ruangan.",
      "Menyatakan dukungan moral atas gagasan bagus pengurus RW sambil melihat perkembangan partisipasi warga lainnya.",
      "Menyarankan pengurus RW mengajukan proposal anggaran bantuan ke kelurahan saja daripada merepotkan tenaga warga.",
      "Mengajak anak-anak di rumah memilah buku lama untuk disumbangkan, lalu menitipkannya lewat tetangga sebelah rumah.",
    ],
    optionScores: [5, 3, 2, 1, 4],
    answer: "A",
    explanation:
      "Skor 5 memadukan kontribusi materi berupa buku yang relevan dengan kehadiran fisik bergotong royong merawat ruang edukasi warga. Pilihan skor 4 sudah menanamkan nilai berbagi di dalam keluarga dengan memilah buku, tetapi belum meluangkan waktu hadir membaur bersama warga.",
    tip: "Dukung inisiatif sosial lingkungan tidak hanya lewat sumbangan barang, tetapi juga keterlibatan langsung bersama tetangga.",
  },
  {
    id: "tkp-sos-067",
    subPattern: "kepekaan-sosial-dan-gotong-royong",
    difficulty: "sedang",
    prompt:
      "Di halaman samping kantor Anda diadakan layanan pemeriksaan kesehatan gratis bagi warga lanjut usia yang ternyata membludak sebelum jam kerja dimulai, sehingga panitia puskesmas kewalahan mengatur antrean dan membantu lansia berjalan. Tindakan Anda saat tiba lebih awal adalah ...",
    options: [
      "Langsung masuk ke ruang kerja masing-masing untuk mempersiapkan berkas rutin tanpa mencampuri acara puskesmas.",
      "Segera melapor ke pimpinan atau panitia untuk ikut membantu menuntun lansia dan menata kursi sebelum jam kerja.",
      "Mengambil foto keramaian di halaman lalu mengirimkannya ke grup kantor sebagai informasi bahwa halaman sedang penuh.",
      "Membantu mengarahkan satu dua lansia terdekat saat melintas menuju pintu masuk gedung kantor sebelum duduk bekerja.",
      "Mengingatkan panitia puskesmas agar lain kali membawa lebih banyak tenaga pembantu lapangan saat mengadakan acara.",
    ],
    optionScores: [2, 5, 1, 4, 3],
    answer: "B",
    explanation:
      "Skor 5 menunjukkan inisiatif gotong royong lintas instansi yang sigap, tertib koordinasi, dan berempati tinggi terhadap kelompok rentan lansia sebelum jam tugas dimulai. Pilihan skor 4 sudah berempati membantu saat melintas, namun cakupannya kecil dan belum berkoordinasi menata antrean.",
    tip: "Manfaatkan waktu senggang sebelum jam kerja untuk bergotong royong membantu kegiatan pelayanan kemanusiaan di sekitar kantor.",
  },
  {
    id: "tkp-sos-068",
    subPattern: "kepekaan-sosial-dan-gotong-royong",
    difficulty: "sedang",
    prompt:
      "Sebuah panti jompo di wilayah binaan dinas Anda mengalami krisis air bersih selama tiga hari akibat kerusakan pompa utama, sementara proses pencairan anggaran darurat resmi dinas baru dapat dilakukan minggu depan. Langkah kepekaan sosial Anda adalah ...",
    options: [
      "Menyarankan pengurus panti jompo bersabar menampung air hujan sembari menanti pencairan anggaran dinas pekan depan.",
      "Menunggu prosedur pencairan anggaran resmi minggu depan agar seluruh bantuan tercatat rapi tanpa melanggar aturan.",
      "Berkoordinasi darurat dengan PDAM/BPBD untuk suplai tangki sementara sekaligus menggalang gotong royong tim.",
      "Mengirimkan beberapa galon air minum kemasan dari dana pribadi secara diam-diam ke panti jompo pada sore hari.",
      "Melaporkan kondisi darurat tersebut secara tertulis kepada atasan sebagai bahan rapat evaluasi layanan sosial bulan depan.",
    ],
    optionScores: [1, 2, 5, 4, 3],
    answer: "C",
    explanation:
      "Skor 5 menggabungkan percepatan koordinasi lintas instansi penyedia air bersih darurat dengan solidaritas gotong royong tim guna mengatasi kebutuhan mendesak penghuni panti. Pilihan skor 4 berhati mulia membantu dengan dana pribadi, tetapi volumenya terbatas dan tidak menggerakkan solusi lintas instansi.",
    tip: "Pada kebutuhan dasar darurat kelompok rentan, gerakkan jejaring antarinstansi sekaligus solidaritas sukarela sembari tetap taat prosedur.",
  },
  {
    id: "tkp-sos-069",
    subPattern: "kepekaan-sosial-dan-gotong-royong",
    difficulty: "sedang",
    prompt:
      "Anda mengamati bahwa pegawai non-ASN atau tenaga pendukung kebersihan dan keamanan di kantor sering segan ikut dalam acara kebersamaan tim karena merasa sungkan dengan iuran kegiatan serta jarak status jabatan. Inisiatif penyatuan sosial Anda adalah ...",
    options: [
      "Memaklumi jarak pergaulan tersebut karena struktur organisasi memang memiliki perbedaan hak dan status kepegawaian.",
      "Sesekali menyapa mereka di pos jaga tanpa mengubah konsep acara kebersamaan internal pegawai ASN yang sudah rutin.",
      "Mengusulkan penghapusan seluruh acara makan bersama kantor agar tidak ada pihak yang merasa tersisih secara ekonomi.",
      "Mengajak mereka duduk bergabung di acara kantor tanpa mengubah mekanisme iuran peserta yang ditetapkan panitia.",
      "Mengusulkan skema acara gotong royong inklusif tanpa iuran wajib atau subsidi silang sukarela agar semua setara.",
    ],
    optionScores: [1, 3, 2, 4, 5],
    answer: "E",
    explanation:
      "Skor 5 meruntuhkan sekat status dan beban biaya lewat desain acara gotong royong sukarela yang menghargai martabat seluruh unsur pegawai secara setara. Pilihan skor 4 sudah ramah mengajak mereka bergabung, namun membiarkan skema iuran tetap memberatkan secara finansial.",
    tip: "Bangun kebersamaan kantor yang inklusif bagi seluruh unsur pekerja dengan meniadakan hambatan status maupun beban biaya.",
  },
  {
    id: "tkp-sos-070",
    subPattern: "kepekaan-sosial-dan-gotong-royong",
    difficulty: "sedang",
    prompt:
      "Seusai banjir merendam desa binaan, warga kelelahan membersihkan lumpur di satu-satunya gedung sekolah dasar hingga kegiatan belajar terancam libur sepekan, tepat saat tim Anda baru menyelesaikan tugas pendataan distribusi logistik. Sikap Anda adalah ...",
    options: [
      "Segera berkemas kembali ke kota karena tugas utama pendataan logistik tim Anda telah dinyatakan selesai di lapangan.",
      "Membagikan masker dan sarung tangan sisa logistik kepada guru lalu mendoakan agar pembersihan sekolah cepat tuntas.",
      "Mengarahkan koordinator warga untuk mengajukan permintaan bantuan alat berat kepada dinas pekerjaan umum kabupaten.",
      "Melapor ke atasan mengenai kondisi sekolah yang belum bersih sambil menunggu surat tugas perpanjangan kegiatan di desa.",
      "Berkoordinasi dengan koordinator tim untuk mengajak rekan ikut bergotong royong membersihkan ruang kelas bersama warga.",
    ],
    optionScores: [1, 3, 2, 4, 5],
    answer: "E",
    explanation:
      "Skor 5 menunjukkan solidaritas cepat pascabencana untuk menyelamatkan hak belajar anak desa dengan tetap tertib berkoordinasi bersama tim tugas. Pilihan skor 4 tertib melapor secara administratif ke atasan, tetapi menunggu surat baru melewatkan kesempatan gotong royong langsung bersama warga.",
    tip: "Ketika amanah tugas utama tuntas di lokasi bencana, ulurkan tenaga bergotong royong memulihkan fasilitas publik vital bersama warga.",
  },
  {
    id: "tkp-sos-071",
    subPattern: "kepekaan-sosial-dan-gotong-royong",
    difficulty: "sulit",
    prompt:
      "Anda mengetahui seorang rekan tim diam-diam terbebani biaya pengobatan darurat orang tuanya sehingga sering datang kelelahan, kurang fokus saat rapat pagi, dan mulai dinilai negatif sebagai pegawai malas oleh rekan lain. Langkah paling bijaksana Anda adalah ...",
    options: [
      "Mendekatinya empat mata menjaga rahasia, membantu pemetaan dukungan resmi, dan meluruskan prasangka tim secara santun.",
      "Mengumumkan kondisi kesulitan keluarganya di rapat mingguan tim agar seluruh anggota memahami alasan penurunannya.",
      "Menghindar membahas masalah keluarganya karena urusan pribadi tidak pantas dicampuri di lingkungan profesional.",
      "Membantu mengerjakan sebagian tugas hariannya secara diam-diam tanpa membahas akar persoalan maupun pilihan bantuan resmi.",
      "Menyampaikan langsung kondisi pribadinya kepada atasan agar beban kerjanya segera dikurangi tanpa meminta izinnya.",
    ],
    optionScores: [5, 2, 1, 4, 3],
    answer: "A",
    explanation:
      "Skor 5 melindungi privasi rekan sekaligus menawarkan jembatan solusi dukungan kelembagaan (seperti koperasi/jaminan/konseling) dan meredam stigma tim tanpa membuka aib. Pilihan skor 4 tulus meringankan beban tugasnya langsung, tetapi tidak menyentuh solusi jangka panjang maupun perbaikan persepsi tim.",
    tip: "Dampingi rekan yang mengalami krisis keluarga dengan menjaga privasinya, mengarahkan bantuan resmi yang sah, dan mencegah stigma.",
  },
  {
    id: "tkp-sos-072",
    subPattern: "kepekaan-sosial-dan-gotong-royong",
    difficulty: "sulit",
    prompt:
      "Di wilayah kelurahan binaan Anda, ketegangan sosial muncul antara penghuni perumahan klaster baru yang serba tertutup dengan warga kampung lama di sebelahnya terkait penutupan akses jalan tembus dan jadwal ronda keamanan. Sebagai aparatur pembina wilayah, solusi kohesi sosial Anda adalah ...",
    options: [
      "Membiarkan pengembang klaster baru mengunci penuh akses jalan tembus demi keamanan eksklusif sesuai permintaan penghuninya.",
      "Mempertemukan kedua perwakilan warga merancang forum siskamling terpadu, akses jalan adil, dan bakti sosial bersama.",
      "Mengeluarkan surat edaran kelurahan yang mewajibkan gerbang klaster dibuka sepanjang hari tanpa membahas aspek keamanan.",
      "Mengimbau pengurus RT kampung lama tidak terpancing emosi dan mencari rute jalan alternatif yang lebih jauh.",
      "Mengajak tokoh masyarakat kedua sisi menghadiri upacara hari besar nasional di kelurahan agar perlahan saling mengenal.",
    ],
    optionScores: [1, 5, 2, 3, 4],
    answer: "B",
    explanation:
      "Skor 5 menjembatani kesenjangan sosial klaster-kampung melalui tata kelola keamanan bersama, kesepakatan akses adil, dan aktivitas gotong royong nyata. Pilihan skor 4 berupaya membangun perkenalan lewat acara formal kelurahan, namun belum menyelesaikan konflik praktis akses jalan dan ronda.",
    tip: "Satukan segmen masyarakat yang terpisah jarak sosial lewat ruang musyawarah adil dan agenda gotong royong bersama.",
  },
  {
    id: "tkp-sos-073",
    subPattern: "menolak-diskriminasi-dan-primordialisme",
    difficulty: "mudah",
    prompt:
      "Saat makan siang bersama di kantin kantor, beberapa rekan melontarkan lelucon yang meniru-niru dialek daerah tertentu secara berlebihan dan merendahkan kemampuan warga wilayah pedalaman. Sikap Anda adalah ...",
    options: [
      "Ikut tertawa kecil sekadar menjaga keakraban suasana makan siang agar tidak dianggap terlalu kaku oleh rekan kerja.",
      "Langsung membentak rekan tersebut di tengah kantin yang ramai supaya merasa malu dan berhenti bercanda.",
      "Menolak ikut tertawa dan mengingatkan dengan tenang bahwa setiap daerah memiliki martabat serta keunggulan setara.",
      "Menunduk fokus menghabiskan makanan lalu segera meninggalkan meja kantin tanpa mengomentari obrolan mereka.",
      "Mengalihkan topik pembicaraan ke urusan jadwal kerja siang supaya candaan merendahkan itu segera berhenti.",
    ],
    optionScores: [1, 2, 5, 3, 4],
    answer: "C",
    explanation:
      "Skor 5 bersikap tegas menolak stereotip berbasis asal daerah secara bermartabat dan edukatif tanpa memicu pertengkaran emosional di tempat umum. Pilihan skor 4 cerdas meredam situasi dengan mengalihkan topik, namun belum membangun kesadaran bahwa candaan merendahkan itu keliru.",
    tip: "Jangan menormalisasi candaan stereotip suku atau daerah; koreksi dengan tenang namun berprinsip.",
  },
  {
    id: "tkp-sos-074",
    subPattern: "menolak-diskriminasi-dan-primordialisme",
    difficulty: "mudah",
    prompt:
      "Menjelang pemilihan koordinator forum olahraga dan seni pegawai kantor, seorang senior mengajak Anda menggalang suara khusus pegawai yang berasal dari satu provinsi asal saja demi memenangkan calon tertentu. Sikap Anda adalah ...",
    options: [
      "Mendukung ajakan senior tersebut karena solidaritas sesama perantau satu provinsi penting untuk posisi strategis.",
      "Berpura-pura setuju di depan senior agar tidak sungkan, lalu pada hari pemilihan tetap memilih teman dekat sendiri.",
      "Memutuskan golput atau tidak ikut memilih sama sekali sebagai bentuk protes diam terhadap penggalangan berbasis daerah.",
      "Menolak santun penggalangan berbasis daerah dan mengajak memilih kandidat menurut rekam jejak serta program kerjanya.",
      "Menyarankan senior memilih calon berdasarkan jabatan tertua saja agar tidak membawa identitas provinsi asal.",
    ],
    optionScores: [1, 2, 3, 5, 4],
    answer: "D",
    explanation:
      "Skor 5 menolak politik identitas primordial secara santun sekaligus mendorong budaya demokrasi organisasi berbasis kompetensi dan gagasan program. Pilihan skor 4 sudah menghindari pengkotakan provinsi asal, tetapi patokan senioritas semata belum mencerminkan prinsip meritokrasi.",
    tip: "Tolak mobilisasi dukungan berdasar kesamaan daerah atau almamater; dorong penilaian berdasarkan integritas dan program nyata.",
  },
  {
    id: "tkp-sos-075",
    subPattern: "menolak-diskriminasi-dan-primordialisme",
    difficulty: "sedang",
    prompt:
      "Sebagai penanggung jawab pemesanan konsumsi kegiatan pelatihan kantor, seorang rekan menyarankan menunjuk usaha katering milik anggota paguyuban sukunya meskipun rincian harga kurang transparan dan mutunya kalah dibanding UMKM lokal lain. Sikap Anda adalah ...",
    options: [
      "Mengikuti saran rekan menunjuk katering paguyuban tersebut agar hubungan pertemanan di ruangan tetap harmonis.",
      "Memesan separuh porsi dari katering paguyuban dan separuh dari UMKM lain sebagai jalan tengah menjaga perasaan rekan.",
      "Menolak saran rekan dengan alasan anggaran konsumsi belum turun padahal tetap memilih vendor langganan lama Anda.",
      "Membuka penawaran terbuka dengan standar mutu, kehalalan, dan harga wajar tanpa memihak hubungan paguyuban.",
      "Memilih UMKM lokal dengan standar mutu terbaik secara objektif namun membiarkan rekan menduga keputusan datang dari atasan.",
    ],
    optionScores: [1, 2, 3, 5, 4],
    answer: "D",
    explanation:
      "Skor 5 menegakkan akuntabilitas pengadaan yang adil dan bebas primordialisme lewat seleksi terbuka berbasis mutu serta transparansi harga. Pilihan skor 4 sudah mengambil keputusan objektif memilih kualitas terbaik, namun berlindung di balik nama atasan kurang menunjukkan ketegasan prinsip.",
    tip: "Pastikan pemilihan mitra kerja dan pengadaan berlandaskan standar mutu, transparansi, dan kesetaraan peluang, bukan ikatan paguyuban.",
  },
  {
    id: "tkp-sos-076",
    subPattern: "menolak-diskriminasi-dan-primordialisme",
    difficulty: "sedang",
    prompt:
      "Seorang warga bertato dan berpakaian kerja bengkel agak lusuh datang mengurus izin usaha kecil, namun petugas penerima tamu di pintu depan menatapnya curiga dan menyuruhnya menunggu di luar antrean reguler. Sebagai pegawai senior yang menyaksikan kejadian itu, tindakan Anda adalah ...",
    options: [
      "Menyambut warga tersebut hangat sesuai urutan antrean reguler dan membina petugas jaga agar tidak membeda-bedakan.",
      "Memaklumi kewaspadaan petugas jaga di pintu depan karena penampilan warga tersebut memang terlihat kurang rapi.",
      "Meminta warga tersebut tetap menunggu di luar sambil berjanji memanggilnya setelah seluruh tamu rapi selesai dilayani.",
      "Menegur petugas jaga dengan keras di depan pemohon layanan agar ia jera melakukan tindakan diskriminatif.",
      "Mengambil alih pelayanan warga tersebut secara ramah tanpa menyinggung kesalahan sikap petugas jaga di belakangnya.",
    ],
    optionScores: [5, 1, 2, 3, 4],
    answer: "A",
    explanation:
      "Skor 5 memulihkan hak warga atas pelayanan setara tanpa stigma penampilan sekaligus membina petugas secara bermartabat agar diskriminasi tidak berulang. Pilihan skor 4 sigap memberikan layanan ramah kepada warga, tetapi mengabaikan pembinaan membuat pola bias petugas tetap berlanjut.",
    tip: "Layanan publik bebas dari diskriminasi penampilan atau status ekonomi; pulihkan hak warga dan bina etika petugas.",
  },
  {
    id: "tkp-sos-077",
    subPattern: "menolak-diskriminasi-dan-primordialisme",
    difficulty: "sedang",
    prompt:
      "Saat menerima mahasiswa magang dari beragam perguruan tinggi, seorang koordinator mengusulkan mahasiswa lulusan kampus negeri ternama ditempatkan pada tim kajian strategis, sedangkan mahasiswa kampus swasta daerah cukup mengurus fotokopi dan arsip. Tanggapan konstruktif Anda adalah ...",
    options: [
      "Menyetujui pembagian tersebut karena reputasi kampus besar dianggap otomatis menjamin kualitas analisis yang lebih tinggi.",
      "Mengusulkan penempatan berdasar minat, asesmen kemampuan awal, dan pembagian tugas belajar yang setara bagi semua.",
      "Mengacak penempatan mahasiswa magang tanpa melihat kompetensi agar tidak terkesan pilih kasih terhadap kampus tertentu.",
      "Menempatkan sebagian kecil mahasiswa kampus swasta di tim strategis sebagai pelengkap administrasi proyek saja.",
      "Menghargai usulan koordinator sembari menyarankan agar seluruh mahasiswa tetap sesekali diajak rapat observasi tim.",
    ],
    optionScores: [1, 5, 3, 2, 4],
    answer: "B",
    explanation:
      "Skor 5 menolak diskriminasi almamater dan menerapkan prinsip meritokrasi pembinaan dengan menilai potensi nyata serta membuka kesempatan belajar adil bagi semua peserta magang. Pilihan skor 4 sudah mencoba memberi kesempatan observasi, namun tetap membiarkan pembagian tugas utama terdiskriminasi.",
    tip: "Nilailah kapasitas individu dari kinerja dan kemauan belajarnya, bukan dari label almamater atau asal daerah.",
  },
  {
    id: "tkp-sos-078",
    subPattern: "menolak-diskriminasi-dan-primordialisme",
    difficulty: "sedang",
    prompt:
      "Dalam rapat seleksi pegawai teladan instansi, beberapa anggota tim penilai mengesampingkan kandidat berprestasi dari unit operasional lapangan serta kelompok minoritas dengan alasan mereka kurang akrab bergaul di lingkungan pimpinan pusat. Sikap tegas Anda adalah ...",
    options: [
      "Mengikuti arus mayoritas penilai karena kedekatan komunikasi dengan pimpinan pusat dianggap bagian penting kinerja.",
      "Tetap memberi nilai tinggi pada kandidat lapangan secara pribadi tanpa menyuarakan keberatan terhadap bias penilai lain.",
      "Menyampaikan keberatan santun, mengajak meninjau ulang indikator kinerja terukur, dan menjaga objektivitas penilaian.",
      "Mengusulkan penambahan kategori penghargaan hiburan khusus bagi unit lapangan agar tidak bersaing di kategori utama.",
      "Memilih abstain saat pemungutan suara penentuan pemenang karena tidak setuju dengan atmosfer penilaian yang subjektif.",
    ],
    optionScores: [1, 4, 5, 2, 3],
    answer: "C",
    explanation:
      "Skor 5 mempertahankan integritas sistem merit dengan berani meluruskan bias eksklusivitas kelompok pusat menggunakan bukti capaian kerja terukur di rapat resmi. Pilihan skor 4 sudah menjaga objektivitas pada lembar nilai pribadinya, tetapi sikap diam membiarkan kandidat berhak tetap tersisih.",
    tip: "Jaga objektivitas penghargaan organisasi lewat data kinerja terukur, bukan kedekatan pergaulan kelompok tertentu.",
  },
  {
    id: "tkp-sos-079",
    subPattern: "menolak-diskriminasi-dan-primordialisme",
    difficulty: "sulit",
    prompt:
      "Dalam seleksi program pelatihan kerja pemuda daerah, muncul tekanan kelompok tertentu agar kuota hanya diberikan kepada 'putra daerah asli' berdasar garis keturunan suku, padahal banyak pemuda ber-KTP resmi daerah tersebut berasal dari keluarga perantau lintas suku yang juga menganggur. Sebagai ketua tim seleksi, sikap Anda adalah ...",
    options: [
      "Menyerah pada tekanan kelompok demi menjaga situasi aman lalu mengalihkan kuota khusus kepada kelompok tersebut.",
      "Membatalkan seluruh pelaksanaan program pelatihan kerja tahun ini daripada memicu gesekan antara warga asli dan perantau.",
      "Memberikan sebagian besar kuota secara diam-diam kepada garis keturunan tertentu sementara sisanya dibuka umum.",
      "Menegakkan syarat objektif domisili KTP sah dan kelayakan ekonomi, sekaligus berdialog inklusif bersama tokoh masyarakat.",
      "Tetap memproses seluruh pendaftar sesuai syarat KTP resmi tanpa mengindahkan tuntutan maupun memberi penjelasan terbuka.",
    ],
    optionScores: [1, 2, 3, 5, 4],
    answer: "D",
    explanation:
      "Skor 5 menegakkan kesetaraan hak warga negara berdasar hukum domisili dan kebutuhan objektif sambil meredam ketegangan lewat dialog transparan bersama tokoh daerah. Pilihan skor 4 sudah berpegang teguh pada aturan hukum KTP resmi, namun kurang langkah komunikasi persuasif merangkul tokoh agar polemik tidak melebar.",
    tip: "Hadapi tekanan primordialisme berbasis keturunan dengan ketegasan hukum yang adil serta dialog terbuka yang menenangkan.",
  },
  {
    id: "tkp-sos-080",
    subPattern: "menolak-diskriminasi-dan-primordialisme",
    difficulty: "sulit",
    prompt:
      "Anda menerima laporan terverifikasi bahwa seorang petugas layanan kerap memberikan jalur percepatan berkas tanpa pungutan uang, khusus hanya kepada anggota komunitas hobi eksklusif dan rekan alumni sekolahnya saja sementara pemohon umum antre lama. Sebagai anggota tim kepatuhan internal, tindakan Anda adalah ...",
    options: [
      "Mengabaikan laporan tersebut karena tidak ditemukan unsur suap maupun gratifikasi uang dalam percepatan berkas.",
      "Menyarankan petugas tersebut melayani anggota komunitasnya di luar jam kantor supaya tidak terlihat oleh pemohon umum.",
      "Membiarkan hal tersebut sepanjang target penyelesaian berkas harian seluruh loket layanan tetap memenuhi standar waktu.",
      "Mengingatkan petugas secara informal agar lebih berhati-hati dan tetap memproses seluruh antrean warga umum secara cepat.",
      "Menindaklanjuti sesuai prosedur disiplin, membenahi sistem antrean digital transparan, dan membina netralitas layanan.",
    ],
    optionScores: [1, 2, 3, 4, 5],
    answer: "E",
    explanation:
      "Skor 5 memahami bahwa favoritisme berbasis kelompok tanpa uang tetap merupakan diskriminasi pelayanan publik sehingga harus ditindak sesuai aturan sekaligus ditutup celahnya lewat perbaikan sistem antrean. Pilihan skor 4 berupaya mengingatkan secara informal, tetapi tidak menutup celah penyimpangan struktural.",
    tip: "Favoritisme tanpa suap tetap mencederai keadilan layanan publik; tegakkan disiplin dan tutup celahnya lewat sistem antrean transparan.",
  },
];
