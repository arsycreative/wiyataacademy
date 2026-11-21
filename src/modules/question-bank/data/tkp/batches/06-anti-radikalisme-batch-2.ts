import type { TkpQuestionDraft } from "@/modules/question-bank/domain/question";

export const antiRadikalismeBatch2Drafts: readonly TkpQuestionDraft[] = [
  {
    id: "tkp-ant-041",
    subPattern: "deteksi-dini-dan-respons-konten-ekstrem",
    difficulty: "mudah",
    prompt:
      "Saat menyortir kotak donasi untuk layanan perpustakaan keliling daerah, Anda menemukan beberapa buku saku anonim yang mengajarkan penolakan terhadap sistem demokrasi Indonesia serta membenarkan serangan terhadap aparat penegak hukum. Langkah paling tepat Anda adalah ...",
    options: [
      "Menarik buku tersebut dari daftar sirkulasi, menyimpannya sebagai barang bukti, lalu melaporkan temuan ke pimpinan unit.",
      "Menyingkirkan buku tersebut ke gudang arsip lama agar tidak pernah dipinjam pengunjung perpustakaan keliling.",
      "Membakar buku tersebut di halaman belakang kantor supaya isinya musnah dan tidak lagi dibaca siapa pun.",
      "Membiarkan buku tetap masuk rak cadangan karena menganggap pembaca dewasa mampu menyaring isi bacaan secara mandiri.",
      "Memisahkan buku ke meja kerja pribadi lalu mengingatkan petugas penerima donasi agar lebih teliti di lain waktu.",
    ],
    optionScores: [5, 4, 1, 2, 3],
    answer: "A",
    explanation:
      "Menarik materi bermuatan kekerasan dari peredaran sekaligus mengamankannya sebagai bukti untuk dilaporkan ke pimpinan memungkinkan penelusuran asal penyebaran secara prosedural. Sekadar menyimpannya di gudang tanpa pelaporan resmi tidak menghentikan potensi pengiriman donasi serupa di titik layanan lain.",
    tip: "Setiap temuan materi propaganda anti-negara di fasilitas layanan publik harus ditarik dari jangkauan warga, diamankan sebagai bukti, dan dilaporkan berjenjang.",
  },
  {
    id: "tkp-ant-042",
    subPattern: "deteksi-dini-dan-respons-konten-ekstrem",
    difficulty: "mudah",
    prompt:
      "Ketika mengecek papan pengumuman asrama peserta diklat instansi, Anda melihat tempelan kode QR tanpa identitas penanggung jawab yang ternyata mengarah ke kanal pesan tertutup berisi hasutan kebencian antarumat beragama. Tindakan paling tepat Anda adalah ...",
    options: [
      "Mencopot kertas kode QR tersebut dan membuangnya ke tempat sampah agar tidak ada peserta yang memindainya.",
      "Mendokumentasikan posisi tempelan, mencabutnya sebagai bukti, dan melaporkan temuan ke pengelola keamanan asrama.",
      "Memotret kode QR lalu membagikannya di grup peserta diklat sambil memberi peringatan agar berhati-hati.",
      "Membiarkan tempelan itu selama belum ada laporan resmi dari penghuni asrama yang merasa dirugikan.",
      "Menutup bagian kode QR dengan poster pengumuman jadwal makan malam agar tampilannya tertimpa rapi.",
    ],
    optionScores: [4, 5, 1, 2, 3],
    answer: "B",
    explanation:
      "Mendokumentasikan lokasi temuan, mencabut tempelan sebagai bukti, dan melaporkannya kepada pengelola keamanan membantu memutus paparan sekaligus melacak pihak pemasang melalui rekaman pengawas. Sekadar mencabut dan membuangnya menghilangkan jejak penelusuran sehingga pelaku dapat menempel ulang tanpa terdeteksi.",
    tip: "Jangan langsung membuang temuan propaganda anonim tanpa dokumentasi; amankan buktinya agar otoritas pengelola dapat menelusuri pelakunya.",
  },
  {
    id: "tkp-ant-043",
    subPattern: "deteksi-dini-dan-respons-konten-ekstrem",
    difficulty: "sedang",
    prompt:
      "Seorang rekan bagian perlengkapan menempelkan stiker simbol organisasi ekstrem terlarang pada kaca belakang kendaraan operasional kantor yang sering diparkir di ruang publik dengan dalih sekadar aksesori agar tampak gagah. Sikap tegas dan profesional Anda adalah ...",
    options: [
      "Menegurnya secara santai di parkiran dan membiarkan ia melepas stiker itu jika suasana hatinya sedang baik.",
      "Mencabut stiker tersebut diam-diam dengan benda tajam saat mobil diparkir tanpa memberitahukan pemilik tanggung jawabnya.",
      "Mengedukasi rekan mengenai larangan simbol organisasi terlarang pada aset negara lalu memastikan stiker dilepas bersama pengelola aset.",
      "Menghindari pemakaian kendaraan operasional tersebut dan memilih memakai kendaraan pribadi agar tidak dikaitkan dengan simbolnya.",
      "Memaklumi pemasangan stiker karena menganggap niat rekan hanya sebatas variasi tampilan kendaraan tanpa maksud ideologis.",
    ],
    optionScores: [3, 1, 5, 4, 2],
    answer: "C",
    explanation:
      "Memberikan edukasi persuasif tentang pelarangan atribut organisasi terlarang pada barang milik negara sekaligus berkoordinasi dengan pengelola aset menjaga netralitas serta citra institusi secara tertib. Sekadar menghindar dari pemakaian mobil dinas hanya menyelamatkan diri sendiri namun membiarkan aset pemerintah tetap membawa simbol terlarang di ruang publik.",
    tip: "Aset negara harus bersih dari simbol kelompok terlarang; tempuh edukasi langsung yang disertai penertiban melalui pengelola aset resmi.",
  },
  {
    id: "tkp-ant-044",
    subPattern: "deteksi-dini-dan-respons-konten-ekstrem",
    difficulty: "sedang",
    prompt:
      "Sebagai koordinator program magang di dinas daerah, Anda menerima laporan pembimbing teknis bahwa seorang peserta magang kerap menyelipkan narasi penolakan terhadap keabsahan pemerintah dalam diskusi santai bersama siswa SMK magang lainnya. Langkah tepat Anda adalah ...",
    options: [
      "Memindahkan siswa SMK lain ke ruangan berbeda sambil berharap peserta magang tersebut segera menyelesaikan masa magangnya.",
      "Langsung memberhentikan peserta magang secara sepihak di depan seluruh peserta lain tanpa klarifikasi maupun pemberitahuan ke kampus.",
      "Mengabaikan laporan pembimbing teknis karena perbincangan di waktu istirahat dianggap bagian dari kebebasan berekspresi mahasiswa.",
      "Memverifikasi fakta bersama pembimbing, melakukan dialog pembinaan terhadap peserta, serta berkoordinasi resmi dengan pihak kampus pengirim.",
      "Memanggil peserta magang secara pribadi untuk menasihatinya agar tidak membicarakan topik sensitif selama berada di kantor.",
    ],
    optionScores: [3, 1, 2, 5, 4],
    answer: "D",
    explanation:
      "Verifikasi fakta, dialog pembinaan langsung, serta koordinasi resmi dengan institusi pendidikan pengirim memastikan masalah tertangani objektif dan pembinaan berlanjut setelah program selesai. Sekadar menasihati secara pribadi tanpa melibatkan pihak kampus membuat pengawasan dan pembinaan lanjutan tidak terjamin.",
    tip: "Tangani indikasi penyebaran paham anti-negara pada peserta magang lewat klarifikasi berimbang, pembinaan, dan koordinasi lembaga pengirim.",
  },
  {
    id: "tkp-ant-045",
    subPattern: "deteksi-dini-dan-respons-konten-ekstrem",
    difficulty: "sedang",
    prompt:
      "Saat memverifikasi berkas pengajuan izin pemakaian gedung kecamatan untuk kegiatan kepemudaan, Anda mendapati salah satu pengisi materi memiliki rekam jejak ceramah yang menyerukan pengusiran warga berbeda keyakinan. Tindakan preventif terbaik Anda adalah ...",
    options: [
      "Tetap menerbitkan izin gedung selama surat pengajuan organisasi pemuda sudah lengkap secara administratif dan bermeterai.",
      "Mencoret nama pengisi materi tersebut secara sepihak dari berkas pengajuan lalu meneruskan proses izin tanpa konfirmasi.",
      "Menunda berkas pengajuan di meja kerja tanpa memberi penjelasan tertulis hingga tanggal pelaksanaan acara terlewat.",
      "Menerima permohonan secara lisan sambil mewanti-wanti panitia agar menjaga ketertiban selama acara berlangsung di gedung.",
      "Menyampaikan hasil penelusuran objektif kepada pimpinan untuk meninjau ulang kelayakan izin dan berdialog dengan panitia acara.",
    ],
    optionScores: [2, 1, 3, 4, 5],
    answer: "E",
    explanation:
      "Menyampaikan temuan terverifikasi kepada pimpinan untuk evaluasi izin disertai dialog konstruktif dengan panitia mencegah fasilitas negara menjadi panggung intoleransi secara akuntabel. Sekadar memberi peringatan lisan tanpa peninjauan izin formal tetap berisiko meloloskan ujaran kebencian di fasilitas publik.",
    tip: "Fasilitas pemerintah tidak boleh memberi ruang bagi penceramah intoleran; lakukan verifikasi objektif dan evaluasi izin secara prosedural.",
  },
  {
    id: "tkp-ant-046",
    subPattern: "deteksi-dini-dan-respons-konten-ekstrem",
    difficulty: "sedang",
    prompt:
      "Seorang tenaga alih daya di kantor bercerita secara rahasia bahwa ia diajak kenalan barunya mengikuti sumpah setia kelompok tertutup di luar kantor dengan iming-iming bantuan pelunasan utang keluarga. Sikap empatik sekaligus protektif Anda adalah ...",
    options: [
      "Mendengarkan ceritanya dengan empati, mengingatkan risiko perekrutan ekstremis, serta menghubungkannya dengan pembina kepegawaian dan bantuan sosial resmi.",
      "Menasihatinya agar menolak ajakan sumpah setia tersebut dan memblokir nomor telepon kenalan barunya sesegera mungkin.",
      "Menyarankannya untuk tetap tenang dan menjaga jarak dari orang asing sambil fokus menyelesaikan pekerjaan kantor.",
      "Menceritakan pengakuan tenaga alih daya tersebut kepada rekan-rekan satu ruangan agar semua pegawai ikut berhati-hati.",
      "Mengatakan bahwa masalah utang dan pergaulan di luar jam kantor merupakan urusan pribadi yang sebaiknya ia putuskan sendiri.",
    ],
    optionScores: [5, 4, 3, 1, 2],
    answer: "A",
    explanation:
      "Kelompok ekstremis sering memanfaatkan kerentanan ekonomi sebagai pintu masuk perekrutan; mendampingi secara empatik sambil menyalurkan bantuan sosial resmi dan laporan ke pembina memutus jeratan dari akarnya. Sekadar menyuruh menolak dan memblokir nomor belum menyelesaikan tekanan ekonomi maupun memantau jaringan perekrut.",
    tip: "Kerentanan ekonomi sering dimanfaatkan perekrut ekstremis; respons dengan empati, edukasi bahaya baiat tertutup, dan rujukan bantuan resmi.",
  },
  {
    id: "tkp-ant-047",
    subPattern: "deteksi-dini-dan-respons-konten-ekstrem",
    difficulty: "sulit",
    prompt:
      "Sebagai anggota tim pengawas internal tempat ibadah di lingkungan instansi pemerintah, Anda menemukan kotak sumbangan tak berizin yang nomor rekening tujuannya tercantum dalam daftar entitas terafiliasi pendanaan terorisme versi rilis resmi otoritas negara. Langkah tepat Anda adalah ...",
    options: [
      "Menutup kotak sumbangan tersebut dengan lakban di tempat dan menempelkan pengumuman peringatan berbunyi keras di dinding.",
      "Mengamankan kotak sumbangan, mencatat dokumentasi fakta untuk laporan resmi pimpinan instansi serta otoritas berwenang, dan menertibkan izin penggalangan dana.",
      "Menyampaikan keluhan dalam rapat pengurus tempat ibadah agar kotak sumbangan tak berizin segera disingkirkan secara halus pada akhir pekan.",
      "Menyerahkan kotak tersebut kepada petugas kebersihan untuk dibuang karena khawatir memicu polemik jika diumumkan kepada jemaah.",
      "Menganggap penggalangan dana kemanusiaan di tempat ibadah tidak perlu diperiksa detail rekeningnya selama niat penyumbang baik.",
    ],
    optionScores: [3, 5, 4, 1, 2],
    answer: "B",
    explanation:
      "Mengamankan kotak tanpa kegaduhan, mendokumentasikan bukti rekening, serta melaporkan kepada pimpinan dan otoritas berwenang menghentikan aliran dana ilegal sekaligus menjaga akuntabilitas penertiban izin. Sekadar meminta pengurus menyingkirkannya pada akhir pekan membiarkan pendanaan jaringan terlarang berjalan tanpa pelacakan resmi.",
    tip: "Deteksi pendanaan ekstremis berkedok sumbangan harus ditindak dengan pengamanan bukti, pelaporan resmi ke otoritas, dan penertiban tata kelola izin.",
  },
  {
    id: "tkp-ant-048",
    subPattern: "deteksi-dini-dan-respons-konten-ekstrem",
    difficulty: "sulit",
    prompt:
      "Dalam rapat pimpinan bidang, seorang pejabat senior meminta laporan awal staf mengenai beredarnya buletin anti-Pancasila di lingkungan pegawai tidak usah diteruskan ke tim kepatuhan agar reputasi unit tidak tercoreng di mata instansi pusat. Sikap berintegritas Anda adalah ...",
    options: [
      "Mengikuti arahan pejabat senior untuk menyimpan berkas laporan di laci sementara waktu sambil memantau situasi secara diam-diam.",
      "Membocorkan rekaman rapat dan isi buletin tersebut ke wartawan lokal agar pejabat senior mendapat tekanan publik.",
      "Menyampaikan secara santun bahwa deteksi dini prosedural justru melindungi reputasi instansi jangka panjang dan tetap meneruskan laporan sesuai jalur kepatuhan.",
      "Mengajak pejabat senior berdialog empat mata guna menyepakati pembinaan internal senyap di unit tanpa meneruskannya ke tim kepatuhan.",
      "Menyepakati penundaan pelaporan resmi namun meminta staf menuliskan pernyataan pribadi bahwa laporan pernah diserahkan.",
    ],
    optionScores: [2, 1, 5, 4, 3],
    answer: "C",
    explanation:
      "Menjelaskan secara santun bahwa penanganan dini yang transparan justru menjaga integritas instansi dan tetap meneruskan laporan melalui jalur kepatuhan resmi mencerminkan keberanian moral ASN. Membatasi penyelesaian secara senyap di internal unit tanpa pelaporan ke tim kepatuhan masih berisiko membuat jaringan penyebarannya tidak tertangani menyeluruh.",
    tip: "Citra instansi dijaga melalui penanganan dini yang akuntabel, bukan dengan menyembunyikan gejala penyebaran paham anti-Pancasila.",
  },
  {
    id: "tkp-ant-049",
    subPattern: "moderasi-beragama-dan-penolakan-intoleransi",
    difficulty: "mudah",
    prompt:
      "Ketika menyusun menu konsumsi rapat kerja tahunan unit yang diikuti pegawai lintas agama, seorang panitia mengusulkan memesan satu jenis menu yang mengandung bahan pantangan keyakinan sebagian pegawai agar proses pemesanan lebih cepat. Sikap moderat Anda sebagai ketua panitia adalah ...",
    options: [
      "Menyetujui usulan tersebut lalu meminta pegawai yang memiliki pantangan untuk mencari makan siang sendiri di luar gedung.",
      "Menghapus seluruh anggaran makan siang rapat agar tidak perlu repot menyesuaikan aturan pantangan makanan peserta.",
      "Memesan menu yang sama untuk semua peserta karena menganggap variasi menu khusus akan memicu kecemburuan antarpegawai.",
      "Mengatur variasi menu yang aman dan layak bagi seluruh keyakinan peserta rapat sebagai wujud penghormatan kesetaraan.",
      "Menyerahkan keputusan pemesanan kepada penyedia katering tanpa mencantumkan catatan mengenai pantangan keyakinan peserta.",
    ],
    optionScores: [2, 1, 3, 5, 4],
    answer: "D",
    explanation:
      "Menyediakan pilihan konsumsi yang menghormati pantangan keyakinan setiap peserta mencerminkan kepedulian nyata dan toleransi aktif dalam lingkungan kerja inklusif. Menyerahkan pilihan begitu saja kepada vendor tanpa catatan spesifik berisiko tetap menimbulkan ketidaknyamanan atau perlakuan tidak adil bagi sebagian pegawai.",
    tip: "Toleransi praktis di ruang kerja tampak dari kesediaan mengakomodasi kebutuhan dasar rekan lintas keyakinan secara adil.",
  },
  {
    id: "tkp-ant-050",
    subPattern: "moderasi-beragama-dan-penolakan-intoleransi",
    difficulty: "mudah",
    prompt:
      "Dalam rangka pekan kebudayaan daerah, lobi kantor dihiasi ornamen seni ukir tradisional setempat, namun seorang pegawai mencibir pajangan itu di depan rekan-rekan karena menilai seluruh tradisi adat bertentangan dengan keyakinannya. Sikap paling tepat Anda adalah ...",
    options: [
      "Menyetujui ucapan pegawai tersebut dan mengusulkan penurunan ornamen budaya daerah agar ruang lobi terlihat netral.",
      "Menegur pegawai itu dengan nada keras di depan tamu pelayanan agar ia jera merendahkan budaya lokal.",
      "Menghindari pembicaraan soal ornamen lobi dan mengajak rekan lain segera kembali ke meja kerja masing-masing.",
      "Mengajak pegawai tersebut berdiskusi ringan mengenai nilai sejarah ornamen tanpa menyentuh pentingnya sikap saling menghormati.",
      "Menjelaskan secara santun bahwa kearifan lokal merupakan kekayaan budaya bangsa yang dapat hidup berdampingan harmonis dengan nilai keagamaan.",
    ],
    optionScores: [2, 1, 3, 4, 5],
    answer: "E",
    explanation:
      "Menjelaskan secara santun keterpaduan antara kearifan budaya lokal dan kehidupan beragama mencerminkan pilar moderasi yang akomodatif terhadap tradisi Nusantara tanpa merendahkan siapa pun. Sekadar berbincang soal nilai sejarah ornamen belum meluruskan sikap eksklusif yang membenturkan budaya bangsa dengan ajaran agama.",
    tip: "Moderasi beragama menghargai tradisi dan budaya lokal selama tidak bertentangan dengan nilai kemanusiaan dan konstitusi.",
  },
  {
    id: "tkp-ant-051",
    subPattern: "moderasi-beragama-dan-penolakan-intoleransi",
    difficulty: "sedang",
    prompt:
      "Dalam pembagian jadwal piket layanan akhir pekan dan hari libur keagamaan, seorang koordinator selalu membebankan tugas lembur kepada pegawai agama minoritas dengan alasan pegawai lain sedang sibuk perayaan ibadah tanpa pernah berdiskusi. Sikap adil Anda adalah ...",
    options: [
      "Mengusulkan sistem rotasi piket yang adil dan transparan dengan mempertimbangkan hak ibadah seluruh pegawai secara bergiliran.",
      "Menerima pembagian piket tersebut dengan alasan kepraktisan operasional kantor selama pegawai minoritas tidak mengajukan keberatan tertulis.",
      "Mengajak pegawai minoritas menandatangani petisi penolakan terhadap koordinator unit untuk disebarkan di media sosial pegawai.",
      "Menawarkan diri menggantikan jadwal piket rekan minoritas secara pribadi setiap kali ada hari besar keagamaan sepanjang tahun.",
      "Menyarankan pegawai minoritas agar meminta izin cuti mendadak jika merasa jadwal piket dari koordinator terasa tidak seimbang.",
    ],
    optionScores: [5, 2, 1, 4, 3],
    answer: "A",
    explanation:
      "Membangun sistem rotasi piket yang transparan dan proporsional menjamin keadilan struktural serta melindungi hak beribadah setiap warga negara tanpa diskriminasi kelompok. Sekadar menawarkan diri menggantikan jadwal secara pribadi bersifat tambal sulam dan tidak memperbaiki tata kelola pembagian kerja yang timpang.",
    tip: "Keadilan bagi kelompok minoritas harus dijamin lewat sistem kerja yang objektif dan transparan, bukan sekadar bantuan insidental.",
  },
  {
    id: "tkp-ant-052",
    subPattern: "moderasi-beragama-dan-penolakan-intoleransi",
    difficulty: "sedang",
    prompt:
      "Saat pelatihan kepemimpinan di asrama, muncul ketegangan karena sebagian peserta menuntut seluruh sesi belajar dihentikan total untuk ibadah tambahan mereka, sedangkan kelompok lain menolak memberikan jeda waktu untuk ibadah wajib. Sebagai fasilitator kelas, keputusan moderat Anda adalah ...",
    options: [
      "Menghapus seluruh jeda ibadah dalam jadwal resmi kelas agar materi pelatihan dapat diselesaikan tepat waktu oleh semua peserta.",
      "Menetapkan jeda terstruktur bagi pelaksanaan ibadah wajib seluruh agama sambil menyediakan waktu ibadah tambahan di luar jam sesi utama.",
      "Mengabulkan tuntutan penghentian seluruh sesi kelas kapan pun diminta agar tidak terjadi perdebatan di ruang pelatihan.",
      "Meminta kedua kubu berdebat di akhir sesi kelas guna menentukan jadwal istirahat melalui pemungutan suara mayoritas.",
      "Membubarkan kegiatan pelatihan hari itu sementara waktu hingga kedua kelompok bersedia berdamai dengan sendirinya.",
    ],
    optionScores: [1, 5, 2, 4, 3],
    answer: "B",
    explanation:
      "Menetapkan jeda terstruktur bagi ibadah wajib semua pemeluk agama sekaligus menata waktu ibadah tambahan di luar jam sesi menjamin hak konstitusional beribadah tanpa mengorbankan kedisiplinan pelatihan. Mengandalkan pemungutan suara mayoritas berisiko mengabaikan hak ibadah kelompok peserta yang jumlahnya lebih kecil.",
    tip: "Fasilitator yang moderat menyeimbangkan pemenuhan hak ibadah wajib lintas agama dengan kelancaran tata tertib bersama.",
  },
  {
    id: "tkp-ant-053",
    subPattern: "moderasi-beragama-dan-penolakan-intoleransi",
    difficulty: "sedang",
    prompt:
      "Anda bertugas di dinas kebudayaan dan menerima tuntutan keras sekelompok orang luar desa agar festival panen tradisional yang selama ini menjadi perekat kerukunan warga lintas agama dibatalkan karena dianggap syirik. Langkah bijak Anda adalah ...",
    options: [
      "Membatalkan festival panen secara mendadak demi menghindari tekanan kelompok pendatang meskipun warga desa merasa kecewa.",
      "Membiarkan warga desa dan kelompok penuntut berhadapan langsung di lapangan tanpa pendampingan aparat maupun pemerintah.",
      "Memfasilitasi dialog inklusif bersama tokoh adat, pemuka agama lokal, dan FKUB guna meluruskan makna budaya sekaligus menjaga ketertiban festival.",
      "Mengubah nama festival menjadi acara olahraga umum tanpa simbol tradisi agar kelompok penuntut tidak lagi mempersoalkannya.",
      "Menyampaikan surat balasan singkat kepada kelompok penuntut bahwa izin acara sudah terbit sehingga penolakan tidak dapat diproses.",
    ],
    optionScores: [2, 1, 5, 3, 4],
    answer: "C",
    explanation:
      "Dialog lintas tokoh adat, pemuka agama, dan Forum Kerukunan Umat Beragama (FKUB) membangun pemahaman bersama mengenai makna budaya perekat masyarakat sekaligus menjaga kondusivitas acara. Sekadar membalas surat bahwa izin sudah terbit tidak meredam kesalahpahaman dan berpotensi memicu ketegangan di lapangan.",
    tip: "Libatkan tokoh adat, pemuka agama, dan FKUB untuk menjembatani kesalahpahaman antara ekspresi tradisi lokal dan pemahaman keagamaan.",
  },
  {
    id: "tkp-ant-054",
    subPattern: "moderasi-beragama-dan-penolakan-intoleransi",
    difficulty: "sedang",
    prompt:
      "Seorang pegawai baru menolak menggunakan peralatan makan bersama di ruang istirahat kantor karena pernah dipakai rekan berbeda agama, lalu mendesak kepala bagian memasang sekat pemisah ruangan berdasarkan keyakinan. Sikap tepat Anda sebagai atasan langsung adalah ...",
    options: [
      "Menyetujui pemasangan sekat ruangan agar pegawai baru merasa tenang dan tidak mengganggu produktivitas tim.",
      "Menyarankan pegawai tersebut membawa perlengkapan makan pribadi sambil membiarkan sikap menghindarinya terhadap rekan lintas agama.",
      "Memberinya teguran keras di depan staf lain bahwa sikap eksklusif seperti itu memalukan budaya kerja aparatur negara.",
      "Mengedukasi pegawai dengan empati mengenai prinsip kesetaraan layanan ruang kerja inklusif sambil tetap mengizinkan penggunaan alat pribadi tanpa sekat pemisah.",
      "Memindahkan meja kerja pegawai baru ke ruangan arsip yang terpisah sendiri supaya tidak perlu berinteraksi dengan rekan lain.",
    ],
    optionScores: [1, 4, 2, 5, 3],
    answer: "D",
    explanation:
      "Menolak segregasi ruang kerja secara tegas sambil membina pegawai dengan empati—dan tetap menghormati pilihannya membawa perlengkapan pribadi—menjaga inklusivitas kantor tanpa merendahkan martabatnya. Sekadar membolehkan membawa alat makan sendiri tanpa meluruskan keinginan segregasi ruangan tidak membangun kesadaran hidup rukun dalam keberagaman.",
    tip: "Tolak segregasi sosial di lingkungan kerja dengan pembinaan empatik sambil tetap menghargai kenyamanan pribadi yang tidak diskriminatif.",
  },
  {
    id: "tkp-ant-055",
    subPattern: "moderasi-beragama-dan-penolakan-intoleransi",
    difficulty: "sulit",
    prompt:
      "Sebagai petugas pengawasan dinas pendidikan daerah, Anda menerima pengaduan orang tua bahwa sebuah sekolah negeri binaan mewajibkan seluruh siswa lintas agama mengenakan atribut keagamaan mayoritas di luar aturan seragam nasional. Tindakan berintegritas Anda adalah ...",
    options: [
      "Memaklumi kebijakan sekolah tersebut karena jumlah siswa mayoritas jauh lebih dominan dan bertujuan menjaga kedisiplinan siswa.",
      "Meminta orang tua siswa minoritas segera memindahkan anaknya ke sekolah swasta agar proses belajar tidak terganggu.",
      "Mengimbau kepala sekolah secara lisan melalui telepon agar lebih fleksibel apabila ada orang tua yang mengajukan keberatan.",
      "Mencatat pengaduan orang tua ke dalam buku layanan dinas dan menunggu rapat evaluasi akhir semester untuk membahasnya.",
      "Melakukan verifikasi ke sekolah, mengembalikan aturan seragam sesuai regulasi nasional yang inklusif, serta membina guru dan kepala sekolah.",
    ],
    optionScores: [2, 1, 4, 3, 5],
    answer: "E",
    explanation:
      "Sekolah negeri milik seluruh warga negara sehingga wajib tunduk pada regulasi seragam nasional yang menjamin kebebasan beragama; verifikasi langsung dan pembinaan memastikan kepatuhan hukum tanpa konflik terbuka. Sekadar imbauan lisan jika ada yang protes masih membuka celah pemaksaan terselubung terhadap siswa yang takut melapor.",
    tip: "Layanan pendidikan negeri harus inklusif sesuai regulasi nasional; tindak lanjuti pengaduan dengan verifikasi lapangan dan pembinaan resmi.",
  },
  {
    id: "tkp-ant-056",
    subPattern: "moderasi-beragama-dan-penolakan-intoleransi",
    difficulty: "sulit",
    prompt:
      "Dalam rapat perencanaan gedung layanan terpadu pemerintah daerah yang baru, sebagian panitia mendesak agar fasilitas ruang ibadah hanya dibangun untuk satu agama mayoritas dan meniadakan ruang doa layak bagi pegawai maupun warga pemeluk agama lain. Sikap berprinsip Anda adalah ...",
    options: [
      "Memperjuangkan penyediaan fasilitas ibadah yang proporsional serta ruang doa bersama yang layak demi kesetaraan layanan seluruh warga.",
      "Mengikuti keputusan suara terbanyak panitia agar pembangunan gedung tidak tertunda oleh perdebatan mengenai pembagian ruang fasilitas.",
      "Mengusulkan agar tidak ada ruang ibadah khusus di gedung baru dan cukup mengarahkan pegawai maupun warga ke rumah ibadah umum terdekat.",
      "Meminta pemeluk agama minoritas beribadah di ruang arsip atau koridor belakang yang jarang dilalui pengunjung gedung.",
      "Menyarankan agar ruang doa bagi agama lain dibangun di tahap anggaran tahun berikutnya jika masih terdapat sisa dana.",
    ],
    optionScores: [5, 2, 3, 1, 4],
    answer: "A",
    explanation:
      "Mengupayakan desain ruang yang inklusif sejak perencanaan awal menjamin seluruh pegawai dan pemohon layanan memperoleh hak menjalankan ibadah secara bermartabat sesuai nilai Pancasila. Menunda penyediaan ke tahun anggaran berikutnya bersifat tidak pasti dan mengabaikan hak setara warga sejak gedung mulai beroperasi.",
    tip: "Keadilan fasilitas publik bagi seluruh pemeluk agama harus dirancang inklusif sejak tahap perencanaan, bukan ditunda tanpa kepastian.",
  },
  {
    id: "tkp-ant-057",
    subPattern: "kesetiaan-ideologi-pancasila-uud-nkri",
    difficulty: "mudah",
    prompt:
      "Saat menata ruang pelayanan publik yang baru direnovasi, seorang rekan staf mengusulkan tidak usah memasang lambang Garuda Pancasila dan foto resmi pimpinan negara karena menganggap layanan warga cukup mengutamakan kecepatan teknis. Sikap tepat Anda adalah ...",
    options: [
      "Menyetujui usulan tersebut agar dinding ruang pelayanan tampak minimalis dan modern seperti kantor perusahaan swasta.",
      "Menjelaskan secara santun bahwa simbol resmi negara merupakan amanat undang-undang sekaligus pengingat jati diri pelayanan publik NKRI.",
      "Mengikuti pendapat rekan sementara waktu dan menyerahkan pemasangan lambang negara jika nanti ada pemeriksaan inspektorat.",
      "Memasang lambang negara secara diam-diam pada malam hari tanpa menjelaskan ketentuan resminya kepada rekan satu ruangan.",
      "Melaporkan rekan tersebut sebagai staf pembangkang ideologi hanya karena ia mengusulkan desain dinding ruang pelayanan minimalis.",
    ],
    optionScores: [2, 5, 3, 4, 1],
    answer: "B",
    explanation:
      "Menjelaskan secara dialogis dasar hukum dan makna simbol negara menumbuhkan kesadaran kebangsaan sekaligus memastikan kepatuhan tata ruang instansi pemerintah. Memasang lambang diam-diam memang memenuhi aturan fisik, tetapi melewatkan kesempatan meluruskan pemahaman rekan mengenai identitas konstitusional layanan publik.",
    tip: "Pemasangan simbol negara di kantor pelayanan merupakan amanat aturan sekaligus pengingat pengabdian kepada NKRI; luruskan keliru paham dengan santun.",
  },
  {
    id: "tkp-ant-058",
    subPattern: "kesetiaan-ideologi-pancasila-uud-nkri",
    difficulty: "mudah",
    prompt:
      "Pada sesi orientasi pegawai baru, seorang peserta menyatakan tidak bersedia mengucapkan ikrar kesetiaan terhadap keutuhan NKRI dengan dalih dirinya hanya ingin mengabdi untuk kemajuan daerah kelahirannya semata. Respons edukatif Anda adalah ...",
    options: [
      "Membiarkan peserta tersebut tidak ikut membaca ikrar agar suasana acara seremonial orientasi tetap berjalan cepat dan tenang.",
      "Mengeluarkannya dari ruang orientasi seketika dan menyarankan agar mengundurkan diri sebagai aparatur pemerintah.",
      "Menegaskan dengan bijak bahwa membangun daerah adalah wujud pengabdian dalam bingkai NKRI dan ikrar merupakan komitmen dasar ASN.",
      "Memintanya menandatangani daftar hadir saja tanpa perlu mengucapkan bagian ikrar yang berkaitan dengan keutuhan negara.",
      "Menyampaikan keluhannya secara informal setelah acara selesai dengan menanyakan alasan pribadi mengapa ia mencintai daerah asalnya.",
    ],
    optionScores: [2, 1, 5, 3, 4],
    answer: "C",
    explanation:
      "Meluruskan bahwa kemajuan daerah justru menjadi bagian tak terpisahkan dari keutuhan NKRI menjaga komitmen ideologis aparatur baru secara konstruktif dan tegas. Sekadar menanyakan alasan pribadinya setelah acara tanpa menegaskan posisi konstitusional ikrar ASN belum menjawab penolakan prinsip kesetiaan terhadap negara.",
    tip: "Pengabdian bagi daerah adalah bagian dari menjaga NKRI; tegaskan kesetiaan ideologis ASN secara bijak dan edukatif.",
  },
  {
    id: "tkp-ant-059",
    subPattern: "kesetiaan-ideologi-pancasila-uud-nkri",
    difficulty: "sedang",
    prompt:
      "Saat mendampingi pembahasan rancangan peraturan desa, seorang tokoh lokal mengusulkan pasal yang melarang warga pendatang dari suku lain membuka usaha atau memiliki hak layanan yang sama demi menjaga keistimewaan warga asli. Sikap konstitusional Anda adalah ...",
    options: [
      "Menyetujui pencantuman pasal tersebut demi menghormati aspirasi tokoh lokal agar proses pengesahan peraturan desa berjalan mulus.",
      "Mengubah draf pasal secara diam-diam tanpa memberi tahu tokoh lokal maupun perangkat desa yang mengikuti rapat pembahasan.",
      "Menunda pembahasan rancangan peraturan desa tanpa batas waktu agar tidak memicu perdebatan dengan tokoh lokal.",
      "Menjelaskan ketentuan UUD 1945 tentang kesetaraan hak warga negara di seluruh NKRI lalu mendorong rumusan aturan pemberdayaan yang inklusif.",
      "Menyarankan tokoh lokal membuat aturan tidak tertulis saja di tingkat warga agar tidak bertabrakan langsung dengan naskah peraturan resmi.",
    ],
    optionScores: [2, 3, 4, 5, 1],
    answer: "D",
    explanation:
      "Menjadikan prinsip kesetaraan warga negara dalam UUD 1945 sebagai dasar koreksi sekaligus menawarkan solusi pemberdayaan warga lokal tanpa diskriminasi menjaga persatuan NKRI dan supremasi hukum. Menunda pembahasan tanpa batas waktu memang mencegah pengesahan pasal keliru, tetapi tidak memberikan pemahaman konstitusional maupun jalan keluar adil.",
    tip: "Peraturan tingkat lokal tidak boleh mendiskriminasi warga berdasarkan suku atau asal daerah; jaga harmoni antara perlindungan lokal dan prinsip UUD 1945.",
  },
  {
    id: "tkp-ant-060",
    subPattern: "kesetiaan-ideologi-pancasila-uud-nkri",
    difficulty: "sedang",
    prompt:
      "Seorang rekan di bagian penyaluran bantuan sosial menunda pencairan hak bantuan bagi kelompok masyarakat adat penghayat kepercayaan karena menganggap keyakinan mereka tidak layak menerima fasilitas negara. Sikap berintegritas Anda adalah ...",
    options: [
      "Membiarkan rekan tersebut menunda berkas karena mengira urusan keyakinan masyarakat adat masih menjadi perdebatan hukum.",
      "Mengambil alih berkas secara diam-diam untuk menandatanganinya sendiri tanpa melapor ke kepala bidang keuangan.",
      "Meminta masyarakat adat melampirkan surat keterangan pindah keyakinan terlebih dahulu agar proses pencairan berjalan lebih lancar.",
      "Mengingatkan rekan agar segera menyelesaikan seluruh berkas yang menumpuk sebelum batas waktu pelaporan anggaran triwulan.",
      "Menegaskan bahwa negara melindungi dan melayani seluruh warga setara sesuai Pancasila dan UUD 1945 serta melaporkan penundaan sepihak ke pimpinan.",
    ],
    optionScores: [2, 3, 1, 4, 5],
    answer: "E",
    explanation:
      "Setiap warga negara, termasuk masyarakat adat dan penghayat kepercayaan, memiliki hak pelayanan setara yang dijamin konstitusi; menegaskan prinsip non-diskriminasi dan melapor ke pimpinan memastikan hak warga segera pulih. Sekadar mengingatkan target triwulan tanpa mengoreksi alasan diskriminatifnya membiarkan pelanggaran ideologi Pancasila terulang.",
    tip: "Pelayanan publik berlandaskan Pancasila dan UUD 1945 wajib menjangkau seluruh warga tanpa diskriminasi latar belakang kepercayaan.",
  },
  {
    id: "tkp-ant-061",
    subPattern: "kesetiaan-ideologi-pancasila-uud-nkri",
    difficulty: "sedang",
    prompt:
      "Dalam tim penyusun naskah sambutan pimpinan daerah untuk peringatan Hari Lahir Pancasila, seorang anggota mengusulkan mengganti penekanan Bhinneka Tunggal Ika dengan slogan eksklusif golongan tertentu agar meraih simpati kelompok mayoritas. Sikap tegas Anda adalah ...",
    options: [
      "Menolak usulan tersebut secara argumentatif dan mempertahankan narasi persatuan Bhinneka Tunggal Ika yang merangkul seluruh elemen warga.",
      "Menggabungkan kedua slogan dalam naskah pidato agar keinginan rekan tetap terakomodasi di tengah tema kebangsaan.",
      "Mengikuti usulan anggota tim apabila kepala bagian hubungan masyarakat tidak mempermasalahkan perubahan isi sambutan.",
      "Menyusun dua draf sambutan terpisah lalu menyerahkan pilihan sepenuhnya kepada ajudan pimpinan tanpa memberikan catatan pertimbangan.",
      "Mengkritik anggota tim tersebut di grup kantor dengan menuduhnya tidak paham sejarah pembentukan dasar negara.",
    ],
    optionScores: [5, 2, 3, 4, 1],
    answer: "A",
    explanation:
      "Menolak penyisipan narasi eksklusif secara argumentatif dan meneguhkan semangat Bhinneka Tunggal Ika menjaga marwah pidato kenegaraan agar tetap inklusif bagi seluruh rakyat. Menyerahkan dua draf tanpa catatan pertimbangan sama saja melepaskan tanggung jawab penyaring substansi ideologi tim penyusun.",
    tip: "Komunikasi resmi pejabat negara pada momen kebangsaan harus mencerminkan persatuan inklusif Bhinneka Tunggal Ika, bukan kepentingan golongan.",
  },
  {
    id: "tkp-ant-062",
    subPattern: "kesetiaan-ideologi-pancasila-uud-nkri",
    difficulty: "sedang",
    prompt:
      "Sebagai petugas dinas kependudukan, Anda mendapati sekelompok warga binaan terpengaruh paham penolakan negara hingga sengaja enggan mencatatkan akta kelahiran anak karena menganggap dokumen sipil bagian dari sistem sesat. Pendekatan persuasif dan konstitusional Anda adalah ...",
    options: [
      "Membiarkan keputusan kelompok warga tersebut karena menganggap pencatatan akta kelahiran merupakan hak yang boleh tidak diambil.",
      "Menggandeng tokoh masyarakat tepercaya untuk menyadarkan warga bahwa dokumen kependudukan melindungi hak dasar anak serta kewajiban warga negara.",
      "Mengancam akan mencabut seluruh akses layanan kesehatan dan pendidikan anak mereka apabila tetap menolak mengurus akta kelahiran.",
      "Mencatat laporan penolakan tersebut dalam buku arsip harian loket tanpa melakukan tindak lanjut pendampingan wilayah.",
      "Menjelaskan secara singkat di loket bahwa pendaftaran akta kelahiran gratis dan cepat sebelum mempersilakan mereka pulang.",
    ],
    optionScores: [2, 5, 1, 3, 4],
    answer: "B",
    explanation:
      "Menggandeng tokoh masyarakat tepercaya untuk menjelaskan sisi kemanusiaan perlindungan hak anak sekaligus kewajiban kewarganegaraan membuka hati warga yang terpapar paham eksklusif. Sekadar menjelaskan prosedur gratis di loket belum menyentuh akar penolakan ideologis mereka terhadap dokumen resmi negara.",
    tip: "Hadapi penolakan terhadap administrasi negara dengan kolaborasi tokoh lokal yang menekankan manfaat nyata perlindungan hak warga.",
  },
  {
    id: "tkp-ant-063",
    subPattern: "kesetiaan-ideologi-pancasila-uud-nkri",
    difficulty: "sulit",
    prompt:
      "Seorang senior kantor yang selama ini sangat berjasa membimbing Anda diam-diam mengajak Anda mengikuti forum kajian tertutup yang meyakini bahwa pajak, pemilu, serta lembaga peradilan Indonesia tidak sah secara prinsip dan tidak wajib ditaati. Sikap berprinsip Anda adalah ...",
    options: [
      "Menghadiri forum kajian satu kali saja demi menjaga rasa hormat terhadap jasa senior lalu memutuskan mundur setelahnya.",
      "Menolak ajakan tersebut secara halus tanpa menyampaikan pandangan konstitusional dan memilih menjauhi senior sepenuhnya.",
      "Menolak tegas secara santun berlandaskan sumpah setia ASN pada Pancasila dan UUD 1945 serta melaporkan indikasi kajian itu secara berjenjang.",
      "Menjaga kerahasiaan ajakan senior tersebut rapat-rapat dengan syarat ia tidak lagi mengajak rekan kerja muda lainnya.",
      "Mengikuti forum sambil berjanji dalam hati hanya mengambil sisi motivasi pribadinya tanpa ikut menolak aturan negara.",
    ],
    optionScores: [2, 4, 5, 3, 1],
    answer: "C",
    explanation:
      "Kesetiaan pada ideologi negara melampaui relasi balas jasa pribadi; menolak tegas secara santun dan melaporkan indikasi penyebaran paham anti-konstitusi melindungi ASN lain dari perekrutan berjenjang. Sekadar menolak halus sambil menjauh membiarkan senior terus menyasar pegawai muda lain yang lebih rentan.",
    tip: "Integritas kesetiaan ASN pada Pancasila dan UUD 1945 harus ditempatkan di atas ikatan pertemanan atau rasa sungkan kepada senior.",
  },
  {
    id: "tkp-ant-064",
    subPattern: "kesetiaan-ideologi-pancasila-uud-nkri",
    difficulty: "sulit",
    prompt:
      "Dalam verifikasi usulan dana hibah daerah, terdapat tekanan dari pihak berpengaruh agar meloloskan bantuan bagi sebuah lembaga yang dalam anggaran dasarnya tertulis menolak asas Pancasila dan belum berbadan hukum sah. Sikap paling tepat Anda adalah ...",
    options: [
      "Meloloskan usulan dana hibah tersebut selama pihak berpengaruh bersedia menandatangani surat jaminan tanggung jawab pribadi.",
      "Meminta lembaga pengusul mengganti sementara teks anggaran dasar di berkas fotokopi agar syarat administratif tampak terpenuhi.",
      "Mengundurkan diri dari tim verifikasi agar tidak berhadapan langsung dengan tekanan pihak berpengaruh tersebut.",
      "Menolak usulan hibah berdasarkan peraturan perundang-undangan serta syarat asas Pancasila, lalu mendokumentasikan catatan verifikasi ke pimpinan.",
      "Menangguhkan pencairan hibah sementara waktu dan meminta lembaga pengusul merevisi anggaran dasar serta mengurus badan hukum sah.",
    ],
    optionScores: [2, 1, 3, 5, 4],
    answer: "D",
    explanation:
      "Menolak secara tegas usulan yang tidak memenuhi syarat asas Pancasila dan badan hukum serta mendokumentasikannya kepada pimpinan menjaga akuntabilitas anggaran negara. Sekadar menangguhkan sementara sambil meminta pengusul merevisi anggaran dasar secara formal masih rentan terhadap komitmen semu tanpa pembuktian kepatuhan ideologis yang sah.",
    tip: "Anggaran negara tidak boleh membiayai organisasi yang menolak asas Pancasila; tegakkan syarat hukum secara terdokumentasi meski ada tekanan.",
  },
  {
    id: "tkp-ant-065",
    subPattern: "pencegahan-radikalisme-digital-dan-hoaks-kebencian",
    difficulty: "mudah",
    prompt:
      "Di grup alumni kampus yang beranggotakan ratusan orang, seseorang mengirim gambar tangkapan layar suntingan pernyataan pejabat yang dipelintir seolah melarang ibadah kelompok tertentu sehingga memancing kemarahan anggota grup. Tindakan tepat Anda adalah ...",
    options: [
      "Langsung mengunggah komentar balasan berisi makian terhadap pengirim karena dianggap sengaja memprovokasi anggota grup.",
      "Membagikan tangkapan layar tersebut ke grup unit kantor guna menanyakan kebenaran beritanya kepada rekan lain.",
      "Keluar dari grup alumni tanpa berkomentar karena tidak ingin terlibat dalam perdebatan isu sensitif.",
      "Membiarkan diskusi panas mereda dengan sendirinya karena menganggap anggota alumni rata-rata berpendidikan tinggi.",
      "Menyampaikan klarifikasi tenang dengan tautan sumber resmi terverifikasi dan mengajak anggota tidak menyebar ulang konten suntingan.",
    ],
    optionScores: [1, 3, 4, 2, 5],
    answer: "E",
    explanation:
      "Menghadirkan klarifikasi tenang disertai rujukan sumber resmi menghentikan penyebaran hoaks pemicu konflik sebelum meluas ke luar grup. Sekadar keluar dari grup tanpa meluruskan fakta membiarkan anggota lain terus termakan provokasi palsu tersebut.",
    tip: "Lawan hoaks provokatif di grup percakapan dengan klarifikasi tenang berbasis sumber resmi sebelum sentimen kebencian membesar.",
  },
  {
    id: "tkp-ant-066",
    subPattern: "pencegahan-radikalisme-digital-dan-hoaks-kebencian",
    difficulty: "mudah",
    prompt:
      "Anda menerima surel berantai di akun dinas dari pengirim eksternal mencurigakan berisi tautan buletin digital yang mengajak pegawai memboikot sistem pemerintahan elektronik dengan narasi kebencian. Langkah pencegahan siber paling tepat adalah ...",
    options: [
      "Tidak mengeklik tautan, menandainya sebagai spam berbahaya, dan melaporkannya kepada tim pengelola TI serta keamanan informasi instansi.",
      "Menghapus surel tersebut segera dari kotak masuk dinas agar tidak mengganggu ruang penyimpanan pesan pekerjaan.",
      "Mengirimkan ulang surel tersebut ke grup WhatsApp pegawai guna memperingatkan rekan agar tidak membukanya.",
      "Membuka tautan terlebih dahulu melalui peramban penyamaran guna memastikan isi buletinnya sebelum mengambil tindakan.",
      "Mengabaikan surel itu di kotak masuk karena mengira sistem filter server dinas sudah menanganinya secara otomatis.",
    ],
    optionScores: [5, 4, 1, 2, 3],
    answer: "A",
    explanation:
      "Menghindari klik tautan mencurigakan sekaligus melaporkannya ke tim TI memungkinkan pemblokiran domain berbahaya di seluruh jaringan surel dinas serta deteksi dini infiltrasi propaganda. Sekadar menghapus dari kotak masuk pribadi tidak melindungi rekan kerja lain yang mungkin menerima surel serupa.",
    tip: "Saat menerima propaganda atau tautan mencurigakan di surel dinas, jangan klik atau teruskan; laporkan ke tim TI agar diblokir menyeluruh.",
  },
  {
    id: "tkp-ant-067",
    subPattern: "pencegahan-radikalisme-digital-dan-hoaks-kebencian",
    difficulty: "sedang",
    prompt:
      "Saat memantau kanal umpan balik aplikasi warga, Anda menemukan unggahan foto lama kerusuhan luar negeri yang diberi keterangan palsu seolah sedang terjadi bentrokan antaragama di kecamatan wilayah kerja Anda untuk memicu kepanikan. Tindakan cepat Anda adalah ...",
    options: [
      "Menghapus unggahan tersebut diam-diam tanpa menyimpan data bukti maupun berkoordinasi dengan pimpinan wilayah.",
      "Mengarsipkan bukti unggahan, menurunkannya sesuai SOP moderasi konten, menerbitkan klarifikasi resmi bersama pimpinan, dan melapor ke tim siber.",
      "Membalas di kolom komentar aplikasi bahwa pengunggah adalah pembohong sambil menantangnya membuktikan lokasi kejadian.",
      "Menunggu laporan resmi dari warga kecamatan setempat apakah benar terjadi kerusuhan sebelum menindaklanjuti unggahan.",
      "Mengunggah tangkapan layar unggahan tersebut di akun pribadi Anda disertai keterangan bahwa foto itu merupakan berita bohong.",
    ],
    optionScores: [4, 5, 1, 2, 3],
    answer: "B",
    explanation:
      "Mengamankan arsip bukti sebelum menurunkan konten sesuai SOP, mengoordinasikan klarifikasi resmi bersama pimpinan wilayah, dan melapor ke otoritas siber menjaga ketenangan warga sekaligus membuka jalur penindakan penyebar hoaks. Sekadar menghapus diam-diam tanpa klarifikasi resmi berisiko membiarkan rumor menyebar dari mulut ke mulut.",
    tip: "Hoaks konflik SARA di kanal layanan publik harus ditangani lewat arsip bukti, moderasi sesuai SOP, klarifikasi resmi, dan pelaporan siber.",
  },
  {
    id: "tkp-ant-068",
    subPattern: "pencegahan-radikalisme-digital-dan-hoaks-kebencian",
    difficulty: "sedang",
    prompt:
      "Seorang rekan pengelola akun media sosial resmi instansi hampir mengunggah ulang infografis dari akun luar yang pada bagian sudutnya memuat tanda air dan ajakan bergabung ke saluran terenkripsi kelompok ekstremis. Sikap tepat Anda adalah ...",
    options: [
      "Meminta rekan tersebut memotong bagian tanda airnya saja supaya infografis menarik tetap dapat diunggah ke akun resmi.",
      "Membiarkan rekan memproses unggahan karena infografis utama berisi kutipan motivasi kerja yang terlihat positif.",
      "Menghentikan rencana unggah ulang, menunjukkan tanda air saluran ekstremis tersebut sebagai edukasi verifikasi sumber, lalu memproduksi konten orisinal.",
      "Melaporkan rekan ke pimpinan bahwa ia berniat mempromosikan jaringan ekstremis melalui akun resmi pemerintah.",
      "Mengganti materi unggahan hari itu dengan pengumuman rutin lain tanpa menjelaskan alasan penolakan infografis kepada rekan.",
    ],
    optionScores: [1, 2, 5, 3, 4],
    answer: "C",
    explanation:
      "Menghentikan penerbitan sekaligus mengedukasi rekan mengenai verifikasi tanda air dan tautan tersembunyi mencegah instansi tidak sengaja mempromosikan jaringan ekstremis tanpa menuduh niat buruk rekan. Sekadar mengganti materi tanpa menjelaskan risikonya membuat rekan berpotensi mengulangi kekeliruan kurasi konten.",
    tip: "Selalu verifikasi sumber, tanda air, dan tautan penyerta sebelum mengunggah ulang konten eksternal ke kanal resmi pemerintah.",
  },
  {
    id: "tkp-ant-069",
    subPattern: "pencegahan-radikalisme-digital-dan-hoaks-kebencian",
    difficulty: "sedang",
    prompt:
      "Saat siaran langsung sosialisasi program bantuan kesehatan daerah, kolom komentar tiba-tiba diserbu komentar terkoordinasi yang menebarkan ujaran kebencian SARA serta menuduh program pemerintah sebagai penjajahan terselubung. Strategi pengendalian paling tepat Anda adalah ...",
    options: [
      "Menghentikan siaran langsung seketika agar komentar negatif tidak terus terbaca oleh warga yang menyimak acara.",
      "Membalas komentar provokatif tersebut satu per satu dengan nada emosi sehingga acara sosialisasi kesehatan terabaikan.",
      "Membiarkan kolom komentar berjalan bebas tanpa penyaringan karena merasa semua komentar warga berhak tampil utuh.",
      "Mengaktifkan filter kata kunci kebencian, memblokir akun bot provokator sesuai pedoman kanal resmi, dan menjaga fokus informasi faktual.",
      "Menonaktifkan seluruh kolom komentar sejak awal pada setiap acara siaran langsung mendatang tanpa membuka ruang tanya jawab warga.",
    ],
    optionScores: [3, 1, 2, 5, 4],
    answer: "D",
    explanation:
      "Memanfaatkan moderasi kata kunci serta memblokir akun pengganggu sesuai prosedur menjaga ruang diskusi tetap sehat, informatif, dan bebas hasutan kebencian tanpa menutup partisipasi warga asli. Menutup seluruh kolom komentar secara permanen justru memangkas hak warga bertanya mengenai layanan kesehatan.",
    tip: "Gunakan moderasi aktif dan filter kata kunci kebencian saat siaran langsung agar ruang dialog publik tetap aman dan informatif.",
  },
  {
    id: "tkp-ant-070",
    subPattern: "pencegahan-radikalisme-digital-dan-hoaks-kebencian",
    difficulty: "sedang",
    prompt:
      "Seorang penyuluh mitra dinas melaporkan bahwa remaja di wilayahnya gemar menonton siniar video pendek yang mengemas narasi eksklusif dan pembenaran kekerasan dengan bahasa gaul serta musik tren masa kini. Pendekatan pencegahan strategis Anda adalah ...",
    options: [
      "Mengusulkan pembatasan jam akses gawai dan penyaringan jaringan internet di lingkungan kegiatan binaan dinas pada akhir pekan.",
      "Menilai tren siniar tersebut hanya hiburan anak muda yang akan mereda sendirinya seiring pergantian algoritma.",
      "Meminta penyuluh menyita ponsel remaja yang kedapatan menonton konten siniar tersebut selama kegiatan berlangsung.",
      "Membagikan selebaran teks berisi pasal-pasal undang-undang tentang larangan ujaran kebencian kepada para remaja.",
      "Merancang kampanye literasi kritis berformat kreatif anak muda bersama kreator lokal serta melibatkan orang tua dalam pendampingan.",
    ],
    optionScores: [3, 2, 1, 4, 5],
    answer: "E",
    explanation:
      "Propaganda ekstremisme modern membidik remaja lewat format populer; menandinginya dengan konten kreatif yang kritis bersama kreator lokal serta peran orang tua jauh lebih efektif membangun daya tangkal. Sekadar membagikan teks hukum kaku kurang memikat generasi muda dan tidak membekali cara mengenali manipulasi narasi.",
    tip: "Tangkal propaganda ekstremisme berkemasan populer dengan kontra-narasi kreatif anak muda, literasi kritis, dan pelibatan orang tua.",
  },
  {
    id: "tkp-ant-071",
    subPattern: "pencegahan-radikalisme-digital-dan-hoaks-kebencian",
    difficulty: "sulit",
    prompt:
      "Anda menemukan situs web tiruan dengan alamat mirip portal informasi resmi instansi daerah yang menyisipkan artikel fatwa palsu dan daftar kebencian terhadap kelompok minoritas guna mengadu domba warga. Tindakan strategis dan sah Anda adalah ...",
    options: [
      "Mendokumentasikan tangkapan layar serta alamat domain, melaporkan ke pimpinan, CSIRT/Komdigi guna pemblokiran, dan merilis peringatan domain resmi.",
      "Membuat pengumuman singkat di status media sosial pribadi agar kenalan dekat tidak mengakses situs web tiruan tersebut.",
      "Menghubungi pengelola teknis internal agar memantau lalu lintas pengunjung situs tiruan selama sebulan sebelum mengambil tindakan.",
      "Meminta teman ahli komputer meretas situs tiruan tersebut supaya langsung lumpuh dan tidak bisa diakses lagi oleh masyarakat.",
      "Menulis bantahan panjang di kolom komentar forum daring tanpa melaporkan pelanggaran domain palsu kepada otoritas siber.",
    ],
    optionScores: [5, 3, 4, 1, 2],
    answer: "A",
    explanation:
      "Dokumentasi bukti digital, pelaporan ke otoritas keamanan siber (CSIRT/Kementerian terkait) untuk pemblokiran resmi, serta publikasi domain resmi instansi memutus penipuan informasi secara legal dan efektif. Menunggu pemantauan selama sebulan memberi waktu terlalu lama bagi situs palsu menyesatkan masyarakat luas.",
    tip: "Peniruan situs resmi untuk menyebar kebencian wajib ditangani lewat bukti digital, pelaporan pemblokiran ke otoritas siber, dan imbauan domain asli.",
  },
  {
    id: "tkp-ant-072",
    subPattern: "pencegahan-radikalisme-digital-dan-hoaks-kebencian",
    difficulty: "sulit",
    prompt:
      "Grup percakapan warga desa binaan mendadak tegang akibat beredarnya rekaman suara anonim hasil rekayasa kecerdasan buatan yang meniru suara tokoh adat setempat seolah menyerukan pengusiran warga pendatang beda keyakinan. Langkah penanganan cepat Anda adalah ...",
    options: [
      "Menunggu suasana grup tenang beberapa hari sambil mengimbau warga tidak memperpanjang pembahasan rekaman suara tersebut.",
      "Mengonfirmasi langsung kepada tokoh adat bersangkutan, menyebarkan video klarifikasi bersama, serta melaporkan rekaman rekayasa itu ke aparat berwenang.",
      "Menuduh salah satu anggota grup yang paling sering bersikap kritis sebagai pembuat rekaman suara palsu tersebut.",
      "Meminta admin grup membubarkan grup percakapan warga secara permanen agar rekaman suara tidak dapat diteruskan lagi.",
      "Mengunggah pesan teks singkat di grup bahwa suara pada rekaman terdengar agak aneh sehingga kemungkinan hanya hoaks biasa.",
    ],
    optionScores: [2, 5, 1, 3, 4],
    answer: "B",
    explanation:
      "Konfirmasi langsung dengan tokoh adat lalu menerbitkan video klarifikasi resmi bersama tokoh tersebut mematahkan manipulasi deepfake secara meyakinkan, sementara pelaporan ke aparat memproses pembuatnya. Sekadar menyebut suara terdengar aneh lewat teks belum cukup meruntuhkan keyakinan warga yang terlanjur mempercayai kemiripan suara tokoh panutan mereka.",
    tip: "Lawan hoaks suara rekayasa AI (deepfake) dengan klarifikasi langsung dari tokoh yang dicatut dan pelaporan resmi ke aparat.",
  },
  {
    id: "tkp-ant-073",
    subPattern: "pendekatan-persuasif-edukatif-dan-pelaporan-prosedural",
    difficulty: "mudah",
    prompt:
      "Seorang pegawai magang baru terlihat mulai terpengaruh ajakan diskusi senior luar kantor yang menyalahkan kelompok minoritas atas kesulitan ekonomi negara, namun ia bersedia diajak berbicara terbuka. Langkah awal paling bijak Anda adalah ...",
    options: [
      "Langsung melaporkan pegawai magang tersebut ke aparat keamanan sebagai pelaku penyebar paham intoleransi berbahaya.",
      "Membiarkan pemikirannya berkembang bebas sambil berharap pengalaman kerja nanti akan mengubah sudut pandangnya sendiri.",
      "Mengajaknya berdialog empatik berbasis data sosial-ekonomi yang objektif serta meluruskan cara berpikir kritis agar tidak menyalahkan kelompok lain.",
      "Memindahkan meja kerja pegawai magang ke bagian lain sementara waktu agar tidak sering berinteraksi dengan senior luar tersebut.",
      "Memberinya buku pedoman etika kantor dan menyuruhnya membaca ulang seluruh aturan disiplin tanpa mengajak berdiskusi.",
    ],
    optionScores: [1, 2, 5, 3, 4],
    answer: "C",
    explanation:
      "Tahap awal paparan pada seseorang yang masih terbuka paling tepat dihadapi lewat dialog empatik berbasis data objektif agar ia tidak merasa terpojok dan makin terdorong ke kelompok ekstrem. Sekadar memberi buku pedoman aturan tanpa dialog menyentuh akar argumen belum menjawab kebingungan berpikirnya.",
    tip: "Pada gejala paparan awal yang masih terbuka dialog, utamakan pendekatan persuasif-edukatif berbasis fakta sebelum sanksi atau pengucilan.",
  },
  {
    id: "tkp-ant-074",
    subPattern: "pendekatan-persuasif-edukatif-dan-pelaporan-prosedural",
    difficulty: "mudah",
    prompt:
      "Warga melapor kepada Anda bahwa mereka mencurigai seorang penghuni baru menyebarkan ajakan kekerasan karena sering mengadakan pertemuan malam tertutup, dan sekelompok warga berniat langsung menggeruduk rumahnya malam ini. Sikap tepat Anda adalah ...",
    options: [
      "Menyetujui niat warga mendatangi rumah tersebut beramai-ramai asalkan Anda ikut mendampingi dari barisan depan.",
      "Menyarankan warga menunggu sampai pertemuan malam berikutnya selesai baru melaporkan kejadiannya ke kantor kelurahan.",
      "Menolak menerima keluhan lisan warga dengan alasan laporan kecurigaan wajib diajukan secara tertulis di jam kerja kantor.",
      "Menenangkan warga agar tidak main hakim sendiri dan segera meneruskan informasi ke aparat keamanan serta pimpinan wilayah untuk pengecekan sah.",
      "Meminta ketua RT setempat mengetuk pintu rumah penghuni baru sendirian pada tengah malam guna menanyakan daftar tamunya.",
    ],
    optionScores: [1, 2, 3, 5, 4],
    answer: "D",
    explanation:
      "Mencegah tindakan main hakim sendiri melindungi keselamatan semua pihak dari bentrokan maupun salah sasaran, sedangkan penyaluran informasi ke aparat resmi menjamin pengecekan sah sesuai hukum. Menyuruh ketua RT mengetuk pintu sendirian di tengah malam tanpa dukungan aparat berisiko menimbulkan gesekan langsung di lapangan.",
    tip: "Cegah aksi main hakim sendiri oleh warga; tenangkan situasi dan salurkan deteksi dini kepada aparat serta pimpinan wilayah berwenang.",
  },
  {
    id: "tkp-ant-075",
    subPattern: "pendekatan-persuasif-edukatif-dan-pelaporan-prosedural",
    difficulty: "sedang",
    prompt:
      "Setelah Anda melaporkan akun pegawai yang menyebarkan doktrin kekerasan melalui saluran pengaduan internal resmi, beberapa rekan mendesak Anda membocorkan isi laporan beserta bukti tangkapan layar ke grup kerja dengan alasan keterbukaan tim. Sikap profesional Anda adalah ...",
    options: [
      "Mengirimkan sebagian tangkapan layar tanpa mencantumkan nama akun terlapor agar rasa ingin tahu rekan kerja mereda.",
      "Membuka seluruh isi laporan di grup kerja agar pegawai lain ikut menekan terlapor supaya cepat mengakui kesalahannya.",
      "Mengatakan bahwa Anda belum pernah membuat laporan apa pun agar rekan-rekan berhenti menanyakan perkembangan kasus.",
      "Menjelaskan secara umum bahwa saluran internal sedang bekerja tanpa membeberkan detail laporan maupun proses pemeriksaannya.",
      "Menjaga kerahasiaan penuh materi laporan dan identitas pihak terkait guna menjamin objektivitas pemeriksaan serta menghindari persekusi.",
    ],
    optionScores: [2, 1, 3, 4, 5],
    answer: "E",
    explanation:
      "Kerahasiaan pelaporan prosedural melindungi asas praduga tak bersalah, mencegah pengaburan barang bukti, dan menjaga keselamatan pelapor maupun terlapor sebelum verifikasi tuntas. Penjelasan umum masih baik, namun komitmen penuh menjaga kerahasiaan materi serta identitas pihak terkait merupakan standar integritas tertinggi dalam pengaduan internal.",
    tip: "Saluran pelaporan resmi menuntut kerahasiaan materi dan identitas pihak terkait hingga verifikasi berwenang selesai.",
  },
  {
    id: "tkp-ant-076",
    subPattern: "pendekatan-persuasif-edukatif-dan-pelaporan-prosedural",
    difficulty: "sedang",
    prompt:
      "Seorang pegawai yang dulu sempat terpapar bacaan intoleran telah menyadari kekeliruannya lewat program pembinaan resmi dan berkomitmen setia pada Pancasila, namun sebagian rekan masih mengucilkannya dari tim kerja. Sikap bijak Anda adalah ...",
    options: [
      "Merangkulnya kembali dalam kolaborasi tim kerja secara wajar serta mengedukasi rekan lain tentang pentingnya pemulihan sosial tanpa stigma.",
      "Menyarankan pegawai tersebut mengajukan mutasi ke kantor daerah lain agar dapat memulai karier dari awal tanpa beban masa lalu.",
      "Membiarkan rekan lain tetap menjaga jarak karena menganggap rasa curiga merupakan kewaspadaan alami terhadap mantan terpapar.",
      "Menugaskan pegawai tersebut bekerja sendiri di bagian arsip belakang agar tidak terjadi kecanggungan dengan anggota tim lain.",
      "Membela pegawai tersebut secara emosional sambil memarahi rekan-rekan tim yang belum bersedia langsung akrab dengannya.",
    ],
    optionScores: [5, 3, 2, 4, 1],
    answer: "A",
    explanation:
      "Reintegrasi sosial tanpa stigma merupakan kunci mencegah pegawai yang telah pulih kembali terasing ke lingkaran eksklusif; merangkulnya secara wajar dan mengedukasi tim menjaga solidaritas ASN. Menempatkannya bekerja sendiri di arsip belakang justru memperpanjang pengucilan yang berbahaya bagi ketahanan pembinaan.",
    tip: "Dukung pemulihan rekan yang telah kembali ke pangkuan kebangsaan lewat reintegrasi kerja wajar tanpa stigma berkepanjangan.",
  },
  {
    id: "tkp-ant-077",
    subPattern: "pendekatan-persuasif-edukatif-dan-pelaporan-prosedural",
    difficulty: "sedang",
    prompt:
      "Dalam dialog warga desa binaan, seorang tokoh pemuda yang kecewa atas lambannya perbaikan jalan melontarkan pernyataan bahwa negara dan demokrasi tidak berguna serta lebih baik warga melepaskan diri dari aturan pemerintah. Respons persuasif Anda adalah ...",
    options: [
      "Mengabaikan ucapannya sebagai luapan emosi sesaat dan segera menutup sesi dialog desa lebih awal.",
      "Mendengarkan keluhan infrastruktur secara empatik, mengarahkan ke jalur usulan pembangunan resmi, dan meluruskan pentingnya perbaikan melalui mekanisme NKRI.",
      "Menegurnya keras bahwa pernyataan memisahkan diri dari aturan negara dapat langsung dijerat pidana makar oleh kepolisian.",
      "Berjanji secara pribadi di depan warga bahwa jalan desa pasti langsung diaspal bulan depan asal ia menarik ucapannya.",
      "Menjawab singkat bahwa prosedur pembangunan memang bertahap sehingga warga wajib bersabar menunggu giliran anggaran daerah.",
    ],
    optionScores: [2, 5, 1, 3, 4],
    answer: "B",
    explanation:
      "Kekecewaan atas layanan publik kerap menjadi celah propaganda anti-negara; berempati pada masalah nyata jalan desa sambil membuka jalur usulan resmi serta meluruskan komitmen kebangsaan memulihkan kepercayaan warga. Sekadar meminta warga bersabar tanpa mendampingi saluran aspirasi nyata belum meredam rasa frustrasi pemicu radikalisasi.",
    tip: "Selesaikan kekecewaan warga terhadap layanan publik secara empatik dan prosedural agar tidak dimanfaatkan sebagai narasi penolakan negara.",
  },
  {
    id: "tkp-ant-078",
    subPattern: "pendekatan-persuasif-edukatif-dan-pelaporan-prosedural",
    difficulty: "sedang",
    prompt:
      "Sebagai anggota tim klarifikasi aduan internal, Anda menerima laporan anonim tanpa bukti yang menuduh seorang kepala seksi menyebarkan radikalisme, tepat setelah terjadi ketegangan persaingan mutasi jabatan di unit tersebut. Sikap adil dan teliti Anda adalah ...",
    options: [
      "Langsung mengarsipkan aduan tanpa tindak lanjut karena terlihat jelas merupakan fitnah persaingan jabatan.",
      "Memanggil kepala seksi tersebut dan menjatuhkan sanksi penundaan mutasi sementara demi menjaga kondusivitas kantor.",
      "Menjalankan penelaahan awal secara objektif berdasarkan fakta perilaku dan indikator terukur tanpa prasangka maupun kecolongan.",
      "Menanyakan kepada seluruh bawahan kepala seksi secara terbuka di ruang rapat apakah atasan mereka bersikap radikal.",
      "Meneruskan aduan anonim mentah tersebut ke pimpinan puncak disertai kesimpulan pribadi bahwa pelapor bermotif dendam.",
    ],
    optionScores: [3, 1, 5, 2, 4],
    answer: "C",
    explanation:
      "Prinsip penelaahan objektif menjaga keseimbangan antara kewaspadaan dini dan perlindungan ASN dari fitnah bermotif persaingan jabatan; penilaian wajib bertumpu pada bukti perilaku nyata, bukan asumsi sepihak. Meneruskan aduan mentah dengan kesimpulan pribadi soal motif dendam tanpa penelaahan awal tetap berisiko menyalahi prosedur verifikasi.",
    tip: "Setiap aduan dugaan radikalisme wajib diverifikasi objektif berdasarkan indikator perilaku nyata agar akurat sekaligus bebas dari fitnah internal.",
  },
  {
    id: "tkp-ant-079",
    subPattern: "pendekatan-persuasif-edukatif-dan-pelaporan-prosedural",
    difficulty: "sulit",
    prompt:
      "Dalam program reintegrasi sosial resmi pemerintah bagi keluarga mantan pelaku ekstremisme, pihak sekolah dasar setempat ragu menerima pendaftaran anak dari keluarga tersebut karena khawatir tekanan dan stigma dari sebagian wali murid lain. Sikap berkeadilan Anda adalah ...",
    options: [
      "Meminta keluarga peserta reintegrasi mendaftarkan anaknya ke sekolah luar kota atau sekolah paket agar tidak memicu penolakan warga.",
      "Menyerahkan keputusan penerimaan siswa sepenuhnya kepada pemungutan suara komite sekolah dan paguyuban wali murid.",
      "Mewajibkan pihak sekolah menerima anak tersebut lewat surat perintah keras tanpa melakukan komunikasi pendampingan dengan wali murid.",
      "Menegaskan hak konstitusional pendidikan setiap anak, mendampingi pihak sekolah berkomunikasi empatik dengan warga, serta memantau proses adaptasi siswa.",
      "Menunda pendaftaran anak selama satu tahun ajaran hingga situasi psikologis warga sekitar dianggap benar-benar pulih.",
    ],
    optionScores: [2, 1, 4, 5, 3],
    answer: "D",
    explanation:
      "Anak berhak memperoleh pendidikan setara tanpa menanggung stigma kesalahan orang tuanya, dan keberhasilan sekolah inklusif memutus rantai eksklusivisme lintas generasi; ketegasan hak anak disertai pendampingan komunikasi ke sekolah dan warga menghadirkan solusi berkelanjutan. Mengeluarkan surat perintah keras tanpa pendampingan komunikasi berisiko memicu penolakan sosial terhadap anak di lingkungan kelas.",
    tip: "Putus mata rantai ekstremisme melalui pemenuhan hak pendidikan anak secara inklusif disertai pendampingan komunikasi agar bebas stigma sosial.",
  },
  {
    id: "tkp-ant-080",
    subPattern: "pendekatan-persuasif-edukatif-dan-pelaporan-prosedural",
    difficulty: "sulit",
    prompt:
      "Anda ditunjuk merancang tata laksana deteksi dini dan pelaporan indikasi radikalisme pegawai di instansi daerah agar efektif mencegah penyebaran paham ekstrem tanpa memicu budaya saling curiga, fitnah, maupun pelanggaran privasi sewenang-wenang. Fokus utama rancangan Anda adalah ...",
    options: [
      "Memasang perangkat lunak pemantau pesan pribadi di seluruh ponsel pegawai agar setiap obrolan di luar kantor dapat diawasi langsung.",
      "Mewajibkan setiap kepala unit menyusun daftar pegawai yang jarang bergaul di ruang istirahat sebagai bahan pengawasan berkala.",
      "Menyediakan kotak aduan umum di lobi kantor yang hanya diperiksa oleh pimpinan puncak setahun sekali menjelang penilaian kinerja.",
      "Mengedepankan pembinaan wawasan kebangsaan melalui dialog rutin unit tanpa perlu mencantumkan jalur pelaporan dan indikator penelaahan formal.",
      "Menetapkan indikator objektif berbasis perilaku anti-konstitusi, jalur aduan rahasia berjenjang, verifikasi adil bebas stereotip, dan pembinaan persuasif-edukatif.",
    ],
    optionScores: [1, 2, 3, 4, 5],
    answer: "E",
    explanation:
      "Tata laksana deteksi dini yang sehat memadukan indikator perilaku terukur bebas stereotip penampilan, saluran pelaporan rahasia guna mencegah fitnah, verifikasi adil, serta pembinaan edukatif proporsional. Mengandalkan dialog rutin semata tanpa jalur pelaporan formal dan indikator jelas akan melemahkan kepastian penanganan ketika kasus nyata terjadi.",
    tip: "Sistem pencegahan radikalisme instansi yang ideal bertumpu pada indikator perilaku terukur, pelaporan rahasia yang adil, bebas stereotip, dan pembinaan edukatif.",
  },
];
