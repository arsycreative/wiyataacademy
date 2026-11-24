import type { TkpQuestionDraft } from "@/modules/question-bank/domain/question";

export const antiRadikalismeBatch3Drafts: readonly TkpQuestionDraft[] = [
  {
    id: "tkp-ant-081",
    subPattern: "dilema-moderasi-ruang-digital-dan-komunitas",
    difficulty: "sedang",
    prompt:
      "Di grup pesan lintas bidang kantor yang beranggotakan pegawai dari beragam latar belakang, seorang pegawai senior yang cukup disegani mulai rutin membagikan tautan artikel berkedok tips gaya hidup yang di bagian akhirnya selalu menyisipkan ajakan agar warga hanya berbelanja, berinteraksi sosial, dan memilih pemimpin dari kelompok identitas tertentu saja. Belum ada anggota yang berani menegur karena khawatir dianggap tidak sopan kepada senior. Tindakan paling tepat Anda adalah ...",
    options: [
      "Menghubungi pegawai senior tersebut secara pribadi dengan bahasa santun untuk mengingatkan dampak eksklusif artikel tersebut terhadap kohesi ruang kerja, sekaligus mengusulkan kepada admin grup agar menegaskan kembali tata tertib berbagi konten netral dan inklusif di grup kantor.",
      "Mengirimkan pesan di grup kantor yang mengingatkan secara umum bahwa grup hanya diperuntukkan bagi informasi kedinasan tanpa menyebut nama siapa pun, sambil membiarkan tautan sebelumnya tenggelam.",
      "Menghapus diri dari grup pesan lintas bidang tersebut sementara waktu dan meminta informasi dinas dikirimkan melalui surat elektronik agar tidak terpapar narasi intoleran.",
      "Mengutip bagian artikel yang bersifat eksklusif di dalam grup lalu menyanggahnya secara terbuka dan keras agar anggota lain sadar bahwa narasi tersebut bertentangan dengan nilai kebangsaan.",
      "Mengabaikan tautan tersebut karena secara kasatmata judulnya hanya membahas gaya hidup sehari-hari dan tidak secara eksplisit menyerukan kekerasan fisik.",
    ],
    optionScores: [5, 4, 2, 3, 1],
    answer: "A",
    explanation:
      "Narasi intoleran terselubung tetap berbahaya bagi persatuan bila dibiarkan mengakar di ruang kerja; pendekatan persuasif pribadi menjaga martabat senior tanpa mempermalukannya di depan umum, sementara pembaruan tata tertib bersama admin menciptakan pagar pencegahan sistemik bagi seluruh anggota grup. Sekadar menulis pengingat umum tentang topik kedinasan memang santun dan menjaga ketenangan, tetapi belum menyentuh kesadaran pengirim maupun membangun aturan moderasi yang jelas untuk mencegah pengulangan.",
    tip: "Hadapi konten eksklusif terselubung di grup kerja dengan teguran pribadi yang santun disertai penguatan aturan moderasi grup secara sistemik.",
  },
  {
    id: "tkp-ant-082",
    subPattern: "dilema-moderasi-ruang-digital-dan-komunitas",
    difficulty: "sulit",
    prompt:
      "Dalam dua upacara bendera bulanan berturut-turut di kantor, seorang rekan staf yang berada di barisan Anda tidak mau mengangkat tangan memberi hormat kepada Sang Merah Putih maupun menyanyikan lagu Indonesia Raya. Saat Anda tanyakan dengan ramah usai upacara, ia menjelaskan bahwa menurut kajian baru yang ia ikuti di luar kantor, menghormati simbol bendera dan lagu kebangsaan tidak sejalan dengan keyakinan pribadinya, meski ia mengaku tetap bekerja disiplin. Sikap paling tepat Anda adalah ...",
    options: [
      "Menghormati pandangannya sebagai hak kebebasan berkeyakinan selama ia tidak memaksa pegawai lain ikut menolak hormat bendera dan tetap menuntaskan target pekerjaannya dengan baik.",
      "Mengajaknya berdialog secara tenang dan personal mengenai makna penghormatan simbol negara sebagai wujud komitmen konstitusional serta sumpah ASN yang selaras dengan nilai keagamaan moderat, lalu melaporkan perkembangan tersebut secara objektif dan berjenjang kepada atasan langsung untuk pembinaan lebih lanjut.",
      "Mengajaknya berdiskusi panjang lebar mengenai tafsir keagamaan secara pribadi agar ia mau mengubah sikap pada upacara berikutnya, tanpa perlu melibatkan atasan supaya masalah cukup selesai di antara kalian berdua.",
      "Menegurnya dengan suara lantang di lapangan upacara pada bulan berikutnya bila ia mengulangi sikap tersebut agar pegawai lain mengetahui bahwa tindakan menolak hormat bendera tidak dapat dibenarkan.",
      "Mengambil foto sikapnya saat upacara berlangsung lalu menyebarkannya ke grup koordinasi pegawai agar bagian kepegawaian segera memproses sanksi pemecatan.",
    ],
    optionScores: [2, 5, 4, 3, 1],
    answer: "B",
    explanation:
      "Penolakan terhadap simbol kebangsaan pada aparatur negara merupakan indikator serius yang berkaitan langsung dengan kesetiaan pada Pancasila, UUD 1945, dan NKRI; mengombinasikan dialog persuasif-edukatif yang santun dengan pelaporan objektif berjenjang kepada atasan memastikan pembinaan resmi berjalan tanpa mempermalukan rekan di depan umum. Hanya berdiskusi pribadi tanpa pelaporan berjenjang memang menghindari kegaduhan, tetapi berisiko membuat paparan paham eksklusif tidak tertangani oleh mekanisme pembinaan ideologi instansi.",
    tip: "Penolakan simbol kebangsaan oleh ASN tidak cukup selesai dengan nasihat pribadi; padukan dialog moderat yang santun dengan laporan berjenjang untuk pembinaan resmi.",
  },
  {
    id: "tkp-ant-083",
    subPattern: "dilema-moderasi-ruang-digital-dan-komunitas",
    difficulty: "sedang",
    prompt:
      "Sebagai penyuluh lapangan yang mengelola grup pesan warga binaan lintas desa, dua pekan menjelang hari pemungutan suara pemilu nasional Anda melihat sebuah pesan berantai viral di grup yang menuduh kelompok agama tertentu mendapat jatah bantuan sosial khusus jika mendukung calon tertentu. Pesan tersebut mulai memicu komentar saling sindir dan ajakan boikot kegiatan kerja bakti bersama. Langkah penanganan paling efektif adalah ...",
    options: [
      "Menonaktifkan sementara fitur pengiriman pesan seluruh anggota grup hingga hari pemungutan suara selesai agar tidak ada lagi perdebatan SARA di dalam grup warga binaan.",
      "Langsung mengeluarkan pengirim pesan berantai tersebut dari grup tanpa penjelasan, lalu mengimbau warga lain agar tidak mudah terpancing isu politik menjelang pemilu.",
      "Segera menenangkan percakapan secara netral, membagikan klarifikasi resmi berbasis data syarat penyaluran bantuan sosial dari instansi berwenang untuk membantah hoaks tersebut, mengedukasi etika cek fakta, serta berkoordinasi dengan tokoh masyarakat dan pimpinan unit guna memantau potensi gesekan lanjutan.",
      "Membagikan tautan berita cek fakta resmi di grup untuk membantah kabar tersebut dan mengingatkan warga bahwa informasi bantuan sosial itu tidak benar, lalu menyerahkan sisanya pada kesadaran masing-masing warga.",
      "Membiarkan warga berdiskusi menyelesaikan sendiri perbedaan pendapat di grup karena sebagai aparatur negara Anda khawatir ikut berkomentar justru dianggap berpihak secara politik.",
    ],
    optionScores: [3, 2, 5, 4, 1],
    answer: "C",
    explanation:
      "Hoaks bernuansa SARA menjelang agenda nasional berpotensi cepat memecah kerukunan warga; respons terbaik memadukan pendinginan suasana secara netral, penyajian fakta verifikasi resmi yang transparan, literasi cek fakta, serta koordinasi dengan tokoh lokal dan atasan untuk deteksi dini konflik lapangan. Sekadar mengirim tautan bantahan cek fakta sudah membantu meluruskan informasi, namun belum meredam ketegangan sosial antarwarga maupun membangun kesiapsiagaan bersama tokoh setempat.",
    tip: "Redam hoaks SARA di komunitas dengan empat langkah: dinginkan suasana secara netral, tampilkan data resmi, ajak cek fakta, dan koordinasikan dengan tokoh lokal serta atasan.",
  },
  {
    id: "tkp-ant-084",
    subPattern: "dilema-moderasi-ruang-digital-dan-komunitas",
    difficulty: "sulit",
    prompt:
      "Anda mengetahui dari bukti tangkapan layar terverifikasi bahwa seorang pegawai baru di subbagian Anda aktif membagikan kutipan yang merendahkan sistem demokrasi dan mengejek tradisi budaya lokal di akun media sosial pribadinya yang mencantumkan identitas instansi. Beberapa rekan kerja yang mengetahui hal itu mendorong Anda agar segera mengekspos akun tersebut di forum rapat staf bulanan supaya yang bersangkutan jera. Keputusan Anda adalah ...",
    options: [
      "Menuruti saran rekan kerja untuk menampilkannya di forum rapat staf sebagai studi kasus terbuka agar seluruh pegawai memahami batas etika bermedia sosial bagi aparatur negara.",
      "Meminta rekan kerja yang menemukan akun tersebut untuk langsung melaporkan akun media sosial itu ke platform digital tanpa perlu berbicara dengan pegawai baru tersebut.",
      "Mengajak pegawai baru itu makan siang dan menasihatinya agar menghapus nama instansi dari profil media sosialnya saja supaya pandangannya tidak lagi menyeret nama kantor.",
      "Menolak cara mempermalukan di forum umum, melakukan klarifikasi dan dialog edukatif secara tertutup bersama yang bersangkutan mengenai kode etik serta netralitas ASN, sekaligus melaporkan temuan beserta bukti secara objektif dan berjenjang kepada atasan untuk tindak lanjut pembinaan.",
      "Melakukan klarifikasi tertutup dan memintanya menghapus unggahan tersebut seketika, dengan kesepakatan tidak akan melaporkannya kepada atasan selama ia berjanji tidak mengulangi perbuatannya.",
    ],
    optionScores: [2, 3, 1, 5, 4],
    answer: "D",
    explanation:
      "Keseimbangan antara pendekatan persuasif-edukatif dan pelaporan berjenjang sangat penting: menolak tindakan mempermalukan di forum terbuka menjaga martabat serta mencegah sikap defensif ekstrem, sementara dialog tertutup dan pelaporan objektif berbasis bukti memastikan pembinaan resmi berjalan akuntabel. Melakukan klarifikasi tertutup lalu menutup kasus tanpa laporan berjenjang memang tampak manusiawi, namun menghilangkan pencatatan pembinaan formal apabila pola serupa berlanjut di kemudian hari.",
    tip: "Hindari mempermalukan rekan di muka umum, tetapi jangan pula menutupi indikasi paham anti-konstitusi; tempuh klarifikasi tertutup dan pelaporan berjenjang.",
  },
  {
    id: "tkp-ant-085",
    subPattern: "dilema-moderasi-ruang-digital-dan-komunitas",
    difficulty: "sedang",
    prompt:
      "Dalam grup pesan alumni pelatihan dasar CPNS angkatan Anda yang beranggotakan puluhan ASN dari berbagai instansi daerah, beredar pesan berantai yang menyindir penunjukan pejabat dari kalangan minoritas di suatu daerah dengan narasi halus bahwa pelayanan publik sebaiknya dipimpin kelompok mayoritas agar lebih harmonis. Beberapa anggota mulai merespons dengan emotikon setuju. Sikap paling tepat Anda adalah ...",
    options: [
      "Memilih diam dan tidak menanggapi pesan tersebut karena grup alumni bersifat informal di luar struktur kantor dan Anda tidak ingin memicu perdebatan panjang dengan sesama angkatan.",
      "Meninggalkan grup alumni secara diam-diam sebagai bentuk penolakan pribadi terhadap narasi diskriminatif yang berkembang di dalamnya.",
      "Membalas pesan tersebut dengan nada emosional dan menuduh anggota yang memberi emotikon setuju tidak layak menyandang status aparatur sipil negara.",
      "Menuliskan tanggapan singkat yang mengingatkan bahwa setiap ASN sebaiknya tidak membahas isu sensitif di grup alumni agar suasana pertemanan tetap terjaga nyaman.",
      "Menyampaikan tanggapan yang tenang, sopan, dan berbasis prinsip meritokrasi serta nilai Bhinneka Tunggal Ika bahwa kompetensi dan integritaslah tolok ukur kepemimpinan publik, sekaligus mengajak pengurus grup menjaga ruang diskusi tetap inklusif.",
    ],
    optionScores: [2, 3, 1, 4, 5],
    answer: "E",
    explanation:
      "Berdiam diri atau sekadar menghindari topik sensitif tidak mengoreksi logika diskriminatif yang sedang dinormalisasi oleh sesama ASN; tanggapan santun yang menonjolkan sistem merit dan Bhinneka Tunggal Ika meluruskan narasi secara elegan sekaligus mengajak pengurus grup merawat ekosistem diskusi yang inklusif. Sekadar mengimbau agar tidak membahas topik sensitif memang meredakan perdebatan sesaat, namun belum menegaskan nilai kebangsaan dan anti-diskriminasi yang semestinya dipegang setiap aparatur.",
    tip: "Di grup sesama ASN, jangan biarkan narasi diskriminatif dianggap lumrah; luruskan dengan tenang berbasis sistem merit dan Bhinneka Tunggal Ika.",
  },
  {
    id: "tkp-ant-086",
    subPattern: "dilema-moderasi-ruang-digital-dan-komunitas",
    difficulty: "sedang",
    prompt:
      "Anda menjadi koordinator panitia peringatan Hari Kemerdekaan tingkat kantor. Seorang rekan panitia meminta agar sesi menyanyikan lagu kebangsaan dan pemasangan lambang Garuda Pancasila di latar panggung ditiadakan pada acara ramah tamah unit karena menurutnya simbol-simbol tersebut berlebihan secara keyakinan dan cukup diganti ucapan syukur biasa. Respons paling tepat Anda adalah ...",
    options: [
      "Menyetujui usulannya sebagian dengan tetap memasang lambang negara namun meniadakan sesi menyanyikan lagu kebangsaan agar ia tetap merasa nyaman berpartisipasi sebagai panitia.",
      "Menjelaskan secara santun namun tegas bahwa penghormatan terhadap lagu kebangsaan dan lambang negara merupakan ketentuan resmi kenegaraan serta wujud kebinekaan yang tetap dipertahankan, menawarkan penugasan panitia di bidang teknis lain bila ia masih membutuhkan ruang adaptasi, serta mengomunikasikan dinamika ini kepada pembina kegiatan.",
      "Menolak usulannya secara sopan dengan menegaskan bahwa susunan acara wajib mengikuti pedoman resmi peringatan Hari Kemerdekaan, tanpa perlu membahas lebih lanjut alasan keyakinan yang ia sampaikan.",
      "Langsung mencoret namanya dari susunan kepanitiaan saat rapat berlangsung sambil menyampaikan bahwa orang yang keberatan dengan simbol negara tidak pantas terlibat dalam acara kemerdekaan.",
      "Mengalihkan usulan tersebut melalui pemungutan suara anggota panitia agar keputusan mempertahankan atau meniadakan simbol negara terlihat demokratis.",
    ],
    optionScores: [1, 5, 4, 2, 3],
    answer: "B",
    explanation:
      "Ketentuan penggunaan lambang negara dan lagu kebangsaan dalam peringatan resmi tidak bisa ditawar atau divoting; ketegasan prinsip yang dibarengi penjelasan santun, penataan peran panitia yang tetap tertib, serta penyampaian informasi kepada pembina kegiatan menjaga marwah acara sekaligus membuka jalur pembinaan yang tepat. Sekadar menolak usulan merujuk pedoman acara sudah menjaga aturan formal, tetapi melewatkan sinyal ideologis yang perlu disampaikan secara bijak kepada pembina.",
    tip: "Tegakkan ketentuan simbol negara secara tegas tanpa mempermalukan; catat dan teruskan sinyal penolakan ideologis kepada pembina atau atasan secara proporsional.",
  },
  {
    id: "tkp-ant-087",
    subPattern: "dilema-moderasi-ruang-digital-dan-komunitas",
    difficulty: "sulit",
    prompt:
      "Menjelang pelaksanaan agenda hari besar keagamaan yang berdekatan dengan peringatan hari nasional, di grup komunikasi pelaku UMKM binaan dinas beredar rekaman suara anonim yang mengklaim pemerintah daerah akan menutup paksa lapak pedagang dari etnis tertentu karena alasan penertiban. Akibatnya, beberapa pedagang mulai panik dan saling menuduh di grup. Padahal, Anda mengetahui agenda penertiban hanya berupa penataan zona parkir yang berlaku sama bagi semua pedagang. Tindakan paling tepat Anda adalah ...",
    options: [
      "Menghapus rekaman suara tersebut secara sepihak lalu memperingatkan seluruh anggota grup bahwa penyebar informasi palsu akan langsung dilaporkan ke aparat kepolisian.",
      "Menunggu terbitnya siaran pers resmi dari bagian humas kabupaten esok hari sebelum menanggapi apa pun di grup agar pernyataan Anda sepenuhnya seragam dengan pimpinan daerah.",
      "Segera meluruskan informasi di grup secara tenang dengan melampirkan dokumen jadwal dan peta penataan zona parkir yang berlaku setara untuk semua pedagang, membuka sesi tanya jawab langsung bersama koordinator pasar, serta melaporkan beredarnya rekaman provokatif tersebut kepada atasan dan tim keamanan informasi instansi.",
      "Segera menuliskan bantahan jelas di grup bahwa informasi penutupan lapak etnis tertentu adalah hoaks dan meminta pedagang tetap tenang berjualan sambil menunggu pemberitahuan resmi penataan parkir.",
      "Menghubungi satu per satu pedagang yang berasal dari etnis disebut dalam rekaman agar mereka tidak terpancing provokasi, tanpa membahasnya di grup besar supaya isu tidak makin ramai.",
    ],
    optionScores: [3, 2, 5, 4, 1],
    answer: "C",
    explanation:
      "Menangkal hoaks provokatif bernuansa etnis memerlukan kecepatan klarifikasi berbasis bukti konkret (peta dan jadwal resmi), ruang dialog terbuka agar kepanikan reda, serta pelaporan kepada atasan dan tim keamanan informasi untuk penelusuran sumber provokasi. Sekadar menulis bantahan singkat di grup memang cepat merespons, tetapi tanpa bukti dokumen resmi dan pelaporan lanjutan masih rentan diragukan warga serta menyisakan sumber provokasi yang terus beraksi.",
    tip: "Lawan hoaks SARA di grup warga binaan dengan bukti dokumen resmi yang setara, buka dialog menenangkan, dan laporkan jejak provokasinya ke jalur resmi.",
  },
  {
    id: "tkp-ant-088",
    subPattern: "dilema-moderasi-ruang-digital-dan-komunitas",
    difficulty: "sedang",
    prompt:
      "Anda bertugas sebagai pendamping program pemberdayaan desa. Seorang kader muda yang sangat aktif dan berpengaruh di desa binaan mulai menyelipkan pesan eksklusif dalam forum diskusi remaja desa—menganjurkan remaja tidak berteman maupun bekerja sama dengan warga berbeda keyakinan. Beberapa pengurus desa mendesak Anda segera memberhentikan kader tersebut secara terbuka di balai desa agar menjadi contoh tegas. Langkah paling bijaksana Anda adalah ...",
    options: [
      "Memenuhi desakan pengurus desa untuk memberhentikan kader tersebut secara terbuka di balai desa supaya warga yakin program pemerintah bersikap keras terhadap intoleransi.",
      "Membiarkan dahulu kiprah kader tersebut karena kinerjanya membantu administrasi desa cukup baik dan belum ada bentrokan fisik di antara para remaja.",
      "Memindahkan fokus tugas kader tersebut dari forum remaja ke bidang pendataan fisik desa tanpa pernah menyampaikan alasan sebenarnya agar suasana desa tetap kondusif.",
      "Mengajak kepala desa dan tokoh masyarakat berkoordinasi, melakukan dialog pembinaan tertutup bersama kader tersebut untuk meluruskan nilai inklusivitas dalam program pemberdayaan, mengevaluasi penugasannya secara prosedural jika sikap eksklusif tetap berlanjut, serta mengagendakan literasi kebinekaan bagi remaja desa.",
      "Memanggil kader tersebut secara tertutup untuk mengingatkan bahwa program desa bersifat inklusif dan memintanya segera menghentikan penyampaian pesan eksklusif kepada remaja.",
    ],
    optionScores: [2, 1, 3, 5, 4],
    answer: "D",
    explanation:
      "Menghindari penghakiman di muka umum mencegah kader tersebut terisolasi dan semakin mengeras sikapnya; menggabungkan koordinasi bersama pimpinan lokal, dialog pembinaan tertutup dengan batas evaluasi prosedural yang tegas, serta edukasi kebinekaan untuk remaja menyelesaikan masalah di individu sekaligus membentengi komunitas. Hanya memanggil secara tertutup tanpa koordinasi tokoh setempat dan penguatan literasi remaja belum memastikan pemulihan dampak pesan eksklusif yang sudah sempat menyebar.",
    tip: "Pada tokoh muda komunitas yang terpapar sikap eksklusif, padukan dialog pembinaan tertutup, batas evaluasi jelas bersama pimpinan lokal, dan edukasi pemulihan bagi komunitas.",
  },
  {
    id: "tkp-ant-089",
    subPattern: "dilema-moderasi-ruang-digital-dan-komunitas",
    difficulty: "sulit",
    prompt:
      "Anda tergabung dalam grup pesan panitia lintas instansi yang sedang menyiapkan pameran pelayanan publik daerah. Menjelang hari pelaksanaan, salah satu perwakilan instansi mitra mengirimkan meme bernada merendahkan tradisi seni daerah yang dijadwalkan tampil pada acara pembukaan, dengan komentar terselubung bahwa pertunjukan budaya semacam itu tidak pantas ditampilkan di acara resmi pemerintah. Beberapa peserta grup mulai membalas dengan nada tersinggung dan mengancam menarik keikutsertaan stan. Langkah paling tepat Anda adalah ...",
    options: [
      "Menghapus pesan seluruh anggota yang berdebat jika Anda memiliki akses admin, lalu meminta semua pihak fokus membahas daftar perlengkapan stan saja.",
      "Menanggapi meme tersebut dengan menyindir balik pihak pengirim bahwa sikap sempit seperti itulah yang sering menghambat kemajuan kerja sama lintas instansi.",
      "Menyarankan kepada ketua panitia agar pertunjukan seni daerah tersebut dibatalkan saja demi mencegah polemik berkepanjangan antarinstansi peserta pameran.",
      "Menghubungi perwakilan instansi mitra tersebut lewat pesan pribadi untuk meminta ia menghapus meme-nya dan meminta maaf di grup agar ketegangan segera reda.",
      "Meredam eskalasi di grup secara santun dengan menegaskan bahwa pameran pemerintah menjunjung penghormatan terhadap kekayaan budaya Nusantara sebagai bagian dari Bhinneka Tunggal Ika, melakukan komunikasi pribadi yang konstruktif dengan pengirim agar bersedia meluruskan ucapannya, serta berkoordinasi dengan pimpinan panitia untuk menegaskan etika komunikasi lintas instansi.",
    ],
    optionScores: [3, 1, 2, 4, 5],
    answer: "E",
    explanation:
      "Ketika narasi intoleran terhadap ekspresi budaya memicu ketegangan lintas instansi, pemimpin situasi yang matang menenangkan ruang bersama dengan menegaskan nilai kebinekaan, menjembatani koreksi secara pribadi agar pengirim tidak dipermalukan, sekaligus menyelaraskan standar etika bersama pimpinan panitia. Sekadar meminta pengirim menghapus pesan dan meminta maaf lewat jalur pribadi sudah konstruktif, tetapi belum memberikan penegasan sikap institusional yang menenangkan instansi lain yang terlanjur tersinggung.",
    tip: "Saat ejekan terhadap budaya lokal memicu konflik grup lintas instansi, tegaskan nilai Bhinneka Tunggal Ika di forum secara sejuk sambil memfasilitasi koreksi pribadi dan koordinasi pimpinan.",
  },
  {
    id: "tkp-ant-090",
    subPattern: "dilema-moderasi-ruang-digital-dan-komunitas",
    difficulty: "sedang",
    prompt:
      "Saat mendampingi kegiatan orientasi pegawai baru di balai diklat, Anda mengamati seorang peserta selalu duduk diam di belakang ketika sesi pembacaan teks Pancasila dan ikrar kesetiaan NKRI berlangsung. Setelah sesi berakhir, ia menyampaikan kepada Anda secara sopan bahwa ia merasa pembacaan ikrar tersebut sekadar formalitas dan keyakinan pribadinya tidak mengajarkan kesetiaan kepada sistem negara buatan manusia. Sikap paling tepat Anda adalah ...",
    options: [
      "Mendengarkan penjelasannya tanpa menghakimi, meluruskan secara persuasif dan rasional bahwa Pancasila serta konstitusi NKRI justru menjamin kebebasan beribadah setiap warga dan menjadi kontrak pengabdian ASN, lalu mencatat serta melaporkan temuan tersebut secara objektif kepada penyelenggara diklat untuk pendampingan pembinaan ideologi.",
      "Menjelaskan secara tenang bahwa setiap peserta diklat wajib mengikuti seluruh rangkaian ikrar sebagai syarat kelulusan orientasi, sehingga ia sebaiknya tetap ikut melafalkannya demi kelancaran penilaian.",
      "Menegurnya langsung di hadapan peserta lain seusai sesi agar tidak ada peserta orientasi lain yang terpengaruh pandangan penolakan terhadap sistem negara.",
      "Membiarkan sikapnya karena yang terpenting adalah nilai ujian substansi teknis pekerjaannya selama masa orientasi tetap memenuhi standar kelulusan.",
      "Mengajaknya berdebat secara intensif selama waktu istirahat sampai ia mengakui bahwa keyakinannya keliru, tanpa perlu melaporkannya kepada panitia diklat.",
    ],
    optionScores: [5, 4, 2, 1, 3],
    answer: "A",
    explanation:
      "Menghadapi calon atau pegawai baru yang meragukan legitimasi sistem negara memerlukan kombinasi ketenangan, argumen kebangsaan yang inklusif (menunjukkan harmoni antara nilai agama dan konstitusi), serta pelaporan objektif kepada penyelenggara diklat agar pembinaan wawasan kebangsaan dilakukan terstruktur. Sekadar menyuruhnya mengikuti ikrar demi syarat kelulusan memang menjaga ketertiban formal, tetapi hanya menghasilkan kepatuhan semu tanpa menyentuh akar keraguan ideologisnya.",
    tip: "Kepatuhan formal semu tidak menyelesaikan persoalan ideologi; tanggapi dengan dialog rasional yang meneduhkan lalu teruskan ke penyelenggara pembinaan resmi.",
  },
  {
    id: "tkp-ant-091",
    subPattern: "dilema-moderasi-ruang-digital-dan-komunitas",
    difficulty: "sedang",
    prompt:
      "Tiga hari sebelum peringatan Hari Sumpah Pemuda tingkat kabupaten yang melibatkan berbagai organisasi kepemudaan lintas iman, muncul unggahan brosur palsu di grup pesan komunitas pemuda binaan yang menyebutkan panitia resmi pemerintah melarang organisasi pemuda berbasis agama tertentu ikut dalam pawai budaya. Beberapa ketua organisasi langsung mengirim pesan bernada kecewa kepada Anda selaku penghubung dinas. Tindakan paling sigap Anda adalah ...",
    options: [
      "Meminta para ketua organisasi pemuda tidak mempercayai brosur yang beredar di luar situs resmi dinas dan menyarankan mereka mengabaikan unggahan tersebut.",
      "Mengirimkan pesan klarifikasi pribadi hanya kepada ketua organisasi yang menghubungi Anda agar persoalan tidak makin tersebar ke organisasi pemuda lainnya.",
      "Menunda kegiatan pawai budaya lintas iman hingga pihak berwajib menemukan pembuat brosur palsu tersebut demi menjamin keamanan peserta.",
      "Segera menerbitkan klarifikasi resmi bergrafis jelas yang ditandatangani pimpinan unit di seluruh kanal grup binaan untuk menegaskan keterbukaan pawai bagi semua elemen pemuda, menghubungi langsung perwakilan organisasi terdampak untuk memastikan kehadiran mereka, serta mendokumentasikan brosur palsu guna dilaporkan ke tim siber dan pimpinan.",
      "Segera membagikan surat undangan resmi pawai ke grup komunitas pemuda untuk membuktikan bahwa seluruh organisasi tetap diundang dan brosur tersebut tidak benar.",
    ],
    optionScores: [3, 2, 1, 5, 4],
    answer: "D",
    explanation:
      "Hoaks eksklusi berbasis identitas menjelang acara publik dapat merusak kepercayaan komunitas secara cepat; klarifikasi resmi yang mudah dibagikan ulang di semua kanal, komunikasi personal meyakinkan kelompok yang terdampak, serta dokumentasi untuk pelaporan siber memulihkan rasa aman sekaligus mencegah sabotase lanjutan. Sekadar mengirim ulang surat undangan di grup memang membantah brosur palsu, tetapi kurang menjangkau pemulihan kepercayaan personal maupun tindak lanjut atas pemalsuan identitas acara resmi.",
    tip: "Tangani brosur hoaks SARA dengan klarifikasi visual resmi yang mudah disebar ulang, jangkau langsung pihak terdampak, dan dokumentasikan buktinya untuk laporan.",
  },
  {
    id: "tkp-ant-092",
    subPattern: "dilema-moderasi-ruang-digital-dan-komunitas",
    difficulty: "sulit",
    prompt:
      "Sebagai admin kanal komunikasi internal dan pengelola perpustakaan digital kantor, Anda mendapati seorang rekan yang sedang menghadapi masalah keluarga sering mengunggah tautan ceramah ekstrem yang menyerukan penolakan terhadap hukum positif negara di kolom komentar forum bacaan pegawai. Beberapa pegawai meminta Anda segera memblokir akunnya dan mengumumkan pelanggarannya di papan pengumuman internal. Langkah paling proporsional Anda adalah ...",
    options: [
      "Memblokir akun rekan tersebut secara permanen dan mengumumkan alasannya di papan pengumuman internal supaya memberi efek jera bagi pegawai lain.",
      "Membiarkan sementara tautan tersebut di kolom komentar karena memahami kondisi psikologis rekan yang sedang menghadapi tekanan keluarga.",
      "Menghapus tautan komentar tersebut secara diam-diam setiap kali ia mengunggahnya tanpa pernah menegur atau melaporkan agar privasi masalah keluarganya tetap terjaga.",
      "Menghapus tautan ekstrem tersebut sesuai ketentuan moderasi forum, lalu mengirim pesan pribadi yang mengingatkan aturan forum secara sopan tanpa melibatkan pimpinan unit.",
      "Menurunkan tautan bermuatan anti-konstitusi sesuai pedoman moderasi sambil menyimpan tangkapan layar sebagai dokumentasi, mengajak rekan tersebut berdialog secara empatik dan persuasif mengenai batas etika ASN serta kondisi yang ia hadapi, lalu berkoordinasi berjenjang dengan atasan dan unit pembinaan pegawai untuk pendampingan menyeluruh.",
    ],
    optionScores: [1, 2, 3, 4, 5],
    answer: "E",
    explanation:
      "Moderasi ruang digital instansi harus cepat memutus paparan konten anti-konstitusi sekaligus bijak menyikapi kerentanan personal yang kerap menjadi pintu masuk radikalisasi; menyimpan dokumentasi, berdialog empatik-persuasif tanpa mempermalukan, dan mengoordinasikan pendampingan berjenjang dengan atasan serta unit pembinaan menyelesaikan gejala sekaligus akarnya. Menurunkan tautan dan mengingatkan secara pribadi tanpa dokumentasi serta koordinasi pembinaan sudah menjaga kebersihan forum, tetapi meninggalkan rekan yang rentan tanpa dukungan resmi yang terukur.",
    tip: "Saat kerentanan pribadi mendorong rekan terpapar konten ekstrem, segera moderasi kontennya, simpan bukti, dekati dengan empati, dan libatkan pembinaan berjenjang.",
  },
  {
    id: "tkp-ant-093",
    subPattern: "dilema-moderasi-ruang-digital-dan-komunitas",
    difficulty: "sulit",
    prompt:
      "Dalam grup pesan orang tua penerima manfaat layanan pendidikan daerah yang Anda fasilitasi bersama tim dinas, muncul ajakan halus dari seorang wali murid berpengaruh agar sekolah memisahkan kelas dan kegiatan ekstrakurikuler berdasarkan latar belakang keyakinan dengan dalih menjaga kemurnian pergaulan anak. Sejumlah wali murid lain mulai merasa tertekan dan ragu menyuarakan keberatan karena sosok tersebut dikenal vokal di lingkungan sekitar. Sikap paling tepat Anda adalah ...",
    options: [
      "Menyampaikan penjelasan yang sejuk, objektif, dan tegas di grup bahwa sekolah publik diselenggarakan berdasarkan prinsip inklusivitas, kesetaraan warga negara, dan penguatan karakter Bhinneka Tunggal Ika, lalu berkoordinasi dengan kepala sekolah, komite, serta atasan dinas untuk mengadakan forum dialog literasi moderasi bersama para orang tua.",
      "Mengingatkan di grup secara sopan bahwa pengaturan pembagian kelas sepenuhnya menjadi kewenangan teknis pihak sekolah sesuai aturan dinas pendidikan, sehingga usulan tersebut tidak perlu diperdebatkan di grup.",
      "Menghubungi wali murid vokal tersebut secara pribadi dan memintanya menyampaikan aspirasi melalui surat resmi ke dinas tanpa memberikan tanggapan apa pun di grup orang tua.",
      "Menanggapi usulan tersebut dengan nada tegas bahwa gagasan pemisahan kelas merupakan bentuk intoleransi berat yang tidak pantas datang dari wali murid sekolah negeri.",
      "Membiarkan para wali murid saling bertukar pendapat terlebih dahulu di grup agar pihak dinas dapat melihat kecenderungan suara mayoritas orang tua sebelum mengambil sikap.",
    ],
    optionScores: [5, 4, 3, 2, 1],
    answer: "A",
    explanation:
      "Layanan pendidikan publik wajib menjadi ruang perjumpaan yang inklusif dan setara bagi semua anak bangsa; menegaskan prinsip kebangsaan secara sejuk di grup melindungi wali murid lain dari tekanan sosial, sementara tindak lanjut forum dialog moderasi bersama sekolah, komite, dan atasan mencegah polarisasi berkembang di lingkungan pendidikan. Sekadar menyebut pembagian kelas sebagai urusan teknis sekolah memang menutup perdebatan secara sopan, namun melewatkan kesempatan edukatif untuk menanamkan nilai kebinekaan secara kolektif.",
    tip: "Pada wacana segregasi identitas di layanan publik, tegaskan prinsip kesetaraan secara sejuk di ruang bersama dan tindak lanjuti dengan forum edukasi lintas pemangku kepentingan.",
  },
  {
    id: "tkp-ant-094",
    subPattern: "dilema-moderasi-ruang-digital-dan-komunitas",
    difficulty: "sedang",
    prompt:
      "Seorang rekan satu ruangan menolak memasang foto resmi Presiden dan Wakil Presiden serta lambang negara di ruang layanan baru yang menjadi tanggung jawab penataan bersama, dengan alasan keyakinan pribadinya melarang pemajangan gambar figur manusia dan ia menyarankan cukup memajang kaligrafi serta maklumat layanan saja. Ia berbicara dengan sangat santun dan berharap Anda mau memahami prinsip pribadinya. Langkah terbaik Anda adalah ...",
    options: [
      "Menyetujui kompromi dengan memasang lambang negara saja tanpa foto Presiden dan Wakil Presiden agar ruang layanan tetap memiliki simbol resmi sekaligus menghargai keyakinannya.",
      "Menghargai cara penyampaiannya yang santun namun menjelaskan dengan tenang dan tegas bahwa pemasangan simbol negara serta foto resmi pimpinan negara di ruang layanan publik merupakan standar kenegaraan yang mengikat seluruh aparatur, mengajak tetap melaksanakannya sesuai ketentuan, serta mengomunikasikan kendala ini secara objektif kepada kepala unit untuk pembinaan.",
      "Tetap memasang seluruh simbol negara dan foto resmi pimpinan tersebut sendiri sesuai ketentuan ruang layanan tanpa perlu membicarakan keberatannya lebih lanjut kepada kepala unit.",
      "Menunda pemasangan foto dan lambang negara tersebut hingga ada pemeriksaan langsung dari tim pengawas kantor agar bukan Anda yang tampak memaksakan kehendak kepadanya.",
      "Memarahinya di ruang layanan baru tersebut dan menyebut alasan keyakinannya tidak masuk akal bagi seorang pegawai pemerintahan.",
    ],
    optionScores: [2, 5, 4, 3, 1],
    answer: "B",
    explanation:
      "Kesopanan pribadi tidak mengubah sifat mengikat dari protokol simbol negara pada fasilitas layanan publik; merespons secara santun namun tegas, tetap menunaikan standar kenegaraan, dan mengomunikasikan sikap penolakan tersebut secara objektif kepada kepala unit menjaga ketertiban institusi sekaligus membuka ruang pembinaan yang sehat. Memasang sendiri seluruh atribut tanpa melapor kepada kepala unit memang menyelesaikan urusan fisik ruangan, tetapi membiarkan persoalan komitmen kebangsaan rekan tidak terpantau oleh pimpinan.",
    tip: "Bedakan sikap sopan dalam berbicara dari substansi kepatuhan konstitusional; tegakkan standar simbol negara dan laporkan keberatan ideologis secara objektif.",
  },
  {
    id: "tkp-ant-095",
    subPattern: "dilema-moderasi-ruang-digital-dan-komunitas",
    difficulty: "sulit",
    prompt:
      "Menjelang pelaksanaan sensus nasional, di grup pesan relawan pendamping keluarga desa binaan beredar potongan video hasil suntingan yang menarasikan bahwa data sensus akan digunakan pemerintah untuk mendiskriminasi kelompok agama tertentu dan membatasi aktivitas ibadah mereka. Salah seorang tokoh masyarakat yang selama ini menjadi mitra aktif Anda justru ikut meneruskan video tersebut karena mengira isinya benar dan meminta warga menunda menerima petugas sensus. Tindakan paling strategis Anda adalah ...",
    options: [
      "Langsung menegur tokoh masyarakat tersebut di dalam grup secara terbuka agar warga melihat bahwa informasi yang disebarkannya keliru dan menghambat program negara.",
      "Menghapus grup relawan sementara waktu dan mengganti koordinasi sensus sepenuhnya melalui surat resmi kepala desa agar video suntingan tidak lagi beredar.",
      "Segera menghubungi tokoh masyarakat tersebut secara personal dengan penuh hormat untuk menunjukkan video utuh beserta dasar hukum kerahasiaan data sensus sehingga beliau berkenan ikut meluruskan di grup, sambil membagikan informasi verifikasi resmi yang mudah dipahami warga serta melaporkan pola hoaks tersebut kepada pimpinan dan koordinator sensus daerah.",
      "Segera membagikan tautan klarifikasi resmi dari lembaga statistik di grup relawan untuk meluruskan isi video suntingan tanpa menghubungi tokoh masyarakat tersebut secara pribadi agar beliau tidak merasa disudutkan.",
      "Menunda pendataan di dusun tempat tinggal tokoh masyarakat tersebut hingga suasana mereda sendiri setelah jadwal sensus di dusun lain selesai dilaksanakan.",
    ],
    optionScores: [2, 1, 5, 4, 3],
    answer: "C",
    explanation:
      "Ketika tokoh masyarakat yang berpengaruh ikut meneruskan hoaks SARA karena ketidaktahuan, pendekatan personal yang menghormati posisi sosialnya memungkinkan beliau berbalik menjadi penguat klarifikasi bagi warga tanpa merasa dipermalukan; memadukannya dengan informasi resmi di grup dan pelaporan pola hoaks ke pimpinan menjaga suksesnya agenda nasional secara berkelanjutan. Sekadar membagikan tautan klarifikasi di grup tanpa menjangkau sang tokoh secara personal tetap benar secara fakta, tetapi kurang efektif memulihkan kepercayaan warga yang terlanjur mengikuti imbauan tokoh tersebut.",
    tip: "Jika tokoh mitra lokal ikut meneruskan hoaks karena keliru paham, rangkul secara personal dengan data utuh agar ia ikut meluruskan, sambil tetap melaporkan pola hoaks secara berjenjang.",
  },
];
