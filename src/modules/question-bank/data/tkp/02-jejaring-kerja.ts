import {
  buildTkpPatternQuestions,
  type Question,
  type TkpQuestionDraft,
} from "@/modules/question-bank/domain/question";

const jejaringKerjaDrafts: readonly TkpQuestionDraft[] = [
  {
    "id": "tkp-jej-001",
    "subPattern": "koordinasi-lintas-unit-dan-instansi",
    "difficulty": "mudah",
    "prompt": "Program percepatan penurunan stunting di daerah Anda membutuhkan sinkronisasi data antara Dinas Kesehatan, Dinas Sosial, dan Dinas Kependudukan, tetapi masing-masing bagian masih memakai format data sendiri yang terpisah. Sebagai penghubung teknis tim kerja, langkah Anda adalah ...",
    "options": [
      "Menginisiasi pertemuan koordinasi lintas dinas untuk menyepakati standar format data bersama, pembagian alur pembaruan berkala, dan kanal komunikasi cepat antarpic unit",
      "Mengirimkan surat pemberitahuan satu arah agar dinas lain segera menyesuaikan diri mengikuti format tabel bagian Anda minggu ini",
      "Menunggu arahan rapat pimpinan tertinggi bulan depan sebelum menghubungi rekan pelaksana di dua dinas lain",
      "Tetap mengerjakan data khusus bagian sendiri saja agar laporan internal unit tidak terhambat ketidakcocokan format unit lain",
      "Meminta staf magang mengetik ulang seluruh berkas dinas lain secara manual tanpa menjalin koordinasi antartim"
    ],
    "optionScores": [
      5,
      3,
      4,
      2,
      1
    ],
    "answer": "A",
    "explanation": "Skor 5 menunjukkan kepemimpinan jejaring lintas sektor yang konkret: mempertemukan pemangku kepentingan untuk menyepakati standar bersama dan kanal koordinasi aktif, mengatasi ego sektoral secara tuntas.",
    "tip": "Atasi ego sektoral dengan dialog penyelarasan standar bersama, kesepakatan peran, dan kanal komunikasi aktif."
  },
  {
    "id": "tkp-jej-002",
    "subPattern": "koordinasi-lintas-unit-dan-instansi",
    "difficulty": "mudah",
    "prompt": "Anda dipindahkan sementara menjadi anggota gugus tugas proyek lintas kementerian yang sebagian besar anggotanya belum pernah bekerja sama dengan Anda sebelumnya. Pada hari pertama rapat koordinasi, sikap terbaik Anda adalah ...",
    "options": [
      "Hanya berbicara apabila ditunjuk langsung oleh ketua rapat supaya tidak terkesan menonjolkan diri",
      "Memperkenalkan diri secara hangat, menyimak tujuan bersama lintas instansi, memetakan peran tiap anggota, serta menawarkan kontribusi spesifik sesuai keahlian Anda",
      "Meminta jadwal rapat selanjutnya dikurangi karena anggota dari kementerian lain memiliki gaya kerja berbeda",
      "Langsung mengkritik tata cara kerja anggota kementerian lain agar mengikuti standar kantor asal Anda",
      "Fokus bertukar kontak khusus dengan anggota yang berasal dari satu instansi induk Anda saja"
    ],
    "optionScores": [
      4,
      5,
      2,
      1,
      3
    ],
    "answer": "B",
    "explanation": "Membangun jejaring di tim baru memerlukan keterbukaan komunikasi awal, penghargaan terhadap kontribusi anggota lain, dan kesiapan berkontribusi nyata sejak rapat perdana (skor 5).",
    "tip": "Di tim lintas instansi baru, tunjukkan keterbukaan, sikap menghargai peran, dan inisiatif kontribusi sejak awal."
  },
  {
    "id": "tkp-jej-003",
    "subPattern": "koordinasi-lintas-unit-dan-instansi",
    "difficulty": "sedang",
    "prompt": "Saat mempersiapkan pameran pelayanan publik terpadu kabupaten, bidang kehumasan dan bidang sarana prasarana saling lempar tanggung jawab soal penyiapan jaringan internet stan layanan. Sebagai koordinator acara, sikap Anda adalah ...",
    "options": [
      "Menyerahkan keputusan ke kedua kepala bidang tersebut tanpa memfasilitasi pertemuan dan berharap beres sebelum hari pelaksanaan",
      "Menegur salah satu bidang di grup besar WhatsApp kantor karena dianggap menghambat persiapan acara bersama",
      "Mengundang perwakilan kedua bidang dalam koordinasi singkat berbasis pembagian tugas dan sumber daya teknis yang adil lalu memantau kesiapan uji coba bersama",
      "Menyewa paket internet darurat memakai dana pribadi tanpa berkomunikasi lagi dengan bidang sarana prasarana maupun humas",
      "Membatalkan seluruh layanan konsultasi daring saat pameran agar jaringan internet tidak dibutuhkan sama sekali"
    ],
    "optionScores": [
      3,
      2,
      5,
      4,
      1
    ],
    "answer": "C",
    "explanation": "Mengatasi area abu-abu tanggung jawab lintas bidang paling efektif melalui fasilitasi pertemuan cepat yang membagi peran teknis secara jelas dan disepakati bersama hingga tuntas diuji (skor 5).",
    "tip": "Selesaikan wilayah abu-abu antarunit dengan fasilitasi dialog kolaboratif, bukan menyalahkan atau mendiamkan."
  },
  {
    "id": "tkp-jej-004",
    "subPattern": "koordinasi-lintas-unit-dan-instansi",
    "difficulty": "sedang",
    "prompt": "Unit Anda memerlukan data realisasi pembangunan dari kecamatan paling lambat hari Kamis untuk laporan bupati, namun hingga Selasa sore baru separuh kecamatan mengirimkannya karena operator kecamatan sibuk kegiatan penyaluran bantuan. Langkah koordinasi paling efektif Anda adalah ...",
    "options": [
      "Mengirimkan surat teguran keras bernada ancaman sanksi langsung ke seluruh camat pada Selasa malam",
      "Menutup laporan Kamis apa adanya hanya berisi separuh kecamatan dan mencantumkan nama kecamatan lain sebagai tidak patuh",
      "Membiarkan tenggat terlewat tanpa menghubungi operator kecamatan sama sekali supaya tidak mengganggu kesibukan mereka",
      "Menghubungi koordinator operator kecamatan secara kooperatif untuk menanyakan kendala, menawarkan format ringkas cepat atau pendampingan pengisian daring, dan menyepakati jadwal kirim bertahap sebelum Kamis siang",
      "Menggunakan data perkiraan tahun lalu untuk kecamatan yang belum mengirim agar tabel laporan terlihat penuh"
    ],
    "optionScores": [
      3,
      2,
      4,
      5,
      1
    ],
    "answer": "D",
    "explanation": "Jejaring kerja yang baik memahami beban mitra lapangan. Komunikasi empatik yang mencari kendala riil serta memberi fasilitasi pengisian ringkas jauh lebih efektif mencapai tenggat daripada ancaman kaku atau pemalsuan data (skor 5).",
    "tip": "Saat mitra kerja terhambat tenggat, komunikasikan kendalanya, bantu permudah formatnya, dan kawal hingga tuntas."
  },
  {
    "id": "tkp-jej-005",
    "subPattern": "koordinasi-lintas-unit-dan-instansi",
    "difficulty": "sedang",
    "prompt": "Sebuah lembaga riset perguruan tinggi menawarkan kolaborasi kajian dampak kebijakan transportasi publik bersama dinas tempat Anda bekerja tanpa biaya APBD, tetapi sebagian rekan khawatir kerja sama eksternal menambah beban rapat tim. Pendapat dan tindakan Anda adalah ...",
    "options": [
      "Menolak langsung tawaran perguruan tinggi agar ritme kerja harian pegawai tidak berubah sama sekali",
      "Menerima semua syarat riset pihak kampus secara mutlak dan menyerahkan seluruh data mentah kantor tanpa perjanjian resmi",
      "Menunda jawaban selama enam bulan hingga seluruh pegawai merasa tidak terlalu sibuk",
      "Menyepakati pertemuan informal tanpa melibatkan pimpinan unit karena khawatir ditolak di rapat formal",
      "Mendukung kolaborasi tersebut secara prosedural dengan menyiapkan perjanjian ruang lingkup kerja yang jelas agar sinergi akademis memperkaya kualitas kebijakan tanpa membebani tugas inti unit"
    ],
    "optionScores": [
      2,
      1,
      3,
      4,
      5
    ],
    "answer": "E",
    "explanation": "Kolaborasi pentaheliks (pemerintah-akademisi) memperkaya kualitas kebijakan publik. Mengatur ruang lingkup dan pembagian peran secara terukur menjamin kemitraan efektif tanpa mengganggu tugas pokok (skor 5).",
    "tip": "Sambut peluang kolaborasi strategis lintas sektor dengan perumusan peran serta ruang lingkup yang jelas dan akuntabel."
  },
  {
    "id": "tkp-jej-006",
    "subPattern": "koordinasi-lintas-unit-dan-instansi",
    "difficulty": "sedang",
    "prompt": "Instansi Anda dan instansi mitra di kabupaten yang sama akan menyelenggarakan pelatihan UMKM pada bulan yang sama dengan materi pemasaran digital yang hampir mirip. Untuk mencegah tumpang tindih peserta dan anggaran, sikap Anda adalah ...",
    "options": [
      "Menghubungi penanggung jawab instansi mitra guna mengoordinasikan penyelarasan jadwal, pembagian klaster peserta, dan integrasi materi agar kedua program saling melengkapi",
      "Mempercepat jadwal pelaksanaan instansi Anda lebih dahulu minggu depan agar seluruh peserta telanjur mendaftar di kantor Anda",
      "Melaksanakan program masing-masing tanpa perlu menghubungi instansi mitra karena tiap instansi punya pagu anggaran sendiri",
      "Meminta instansi mitra membatalkan programnya seluruhnya karena program serupa sudah menjadi hak dinas Anda sejak lama",
      "Menyampaikan secara lisan di acara pembukaan bahwa pelatihan dinas lain materinya kurang lengkap dibanding dinas Anda"
    ],
    "optionScores": [
      5,
      3,
      4,
      2,
      1
    ],
    "answer": "A",
    "explanation": "Koordinasi horizontal antardinas mencegah pemborosan anggaran dan kejenuhan peserta yang sama; menyinergikan jadwal serta klaster sasaran menghasilkan dampak pembangunan UMKM dua kali lebih luas (skor 5).",
    "tip": "Sinergi antarlembaga menyelaraskan jadwal dan sasaran agar program publik saling melengkapi, bukan saling bersaing."
  },
  {
    "id": "tkp-jej-007",
    "subPattern": "koordinasi-lintas-unit-dan-instansi",
    "difficulty": "sulit",
    "prompt": "Dalam penanggulangan darurat banjir lintas dua kabupaten berbatasan, bantuan logistik dan tim relawan menumpuk di posko wilayah kota yang mudah dijangkau, sementara kecamatan hulu yang paling terisolasi kekurangan pasokan akibat belum adanya koordinasi perbatasan. Sebagai perwakilan unit pada rapat posko gabungan, inisiatif Anda adalah ...",
    "options": [
      "Berfokus menyalurkan seluruh stok bantuan hanya kepada warga ber-KTP kabupaten Anda meskipun kecamatan tetangga berjarak lebih dekat dengan posko",
      "Mengusulkan pembentukan meja koordinasi data kebutuhan terpadu lintas batas berbasis pemetaan wilayah terdampak sehingga distribusi logistik dan relawan dialokasikan proporsional ke titik paling kritis",
      "Membiarkan tim relawan independen memilih sendiri tujuan pengantaran logistik tanpa pencatatan posko gabungan agar proses truk keluar lebih cepat",
      "Mengajukan surat permintaan rapat evaluasi birokratis antarkepala daerah dua pekan setelah masa tanggap darurat selesai",
      "Membatasi arus informasi stok gudang posko kota agar kabupaten sebelah tidak meminta alokasi logistik tambahan"
    ],
    "optionScores": [
      2,
      5,
      3,
      4,
      1
    ],
    "answer": "B",
    "explanation": "Krisis lintas wilayah menuntut kolaborasi berbasis urgensi kemanusiaan yang melampaui sekat administratif: pemetaan terpadu satu data dan redistribusi logistik proporsional menyelamatkan warga di titik terisolasi (skor 5).",
    "tip": "Pada darurat lintas wilayah, bangun koordinasi berbasis satu peta kebutuhan tanpa tersekat batas administratif."
  },
  {
    "id": "tkp-jej-008",
    "subPattern": "koordinasi-lintas-unit-dan-instansi",
    "difficulty": "sulit",
    "prompt": "Proyek integrasi sistem data kepegawaian antara tiga unit teknis terhenti sebulan karena masing-masing pimpinan seksi merasa standar keamanan data seksinya paling unggul dan enggan menyesuaikan API sistem lama. Anda bertindak sebagai analis sistem penghubung. Langkah strategis Anda adalah ...",
    "options": [
      "Memilih memihak standar milik unit dengan jumlah pegawai terbanyak agar suara dukungan rapat lebih besar",
      "Menghentikan proyek integrasi sementara hingga terjadi pergantian struktur kepemimpinan di salah satu seksi",
      "Menyusun matriks perbandingan teknis objektif dari ketiga standar, mengajak tim teknis masing-masing seksi memvalidasi titik temu interoperabilitas yang tetap menjaga keamanan data, lalu mempresentasikan rancangan solusi netral di hadapan pimpinan",
      "Membangun sistem jembatan rahasia tanpa izin resmi unit lain agar pertukaran data berjalan diam-diam di belakang layar",
      "Melaporkan ketiga pimpinan seksi tersebut secara tertulis sebagai penghambat transformasi digital sebelum berdiskusi teknis"
    ],
    "optionScores": [
      2,
      3,
      5,
      1,
      4
    ],
    "answer": "C",
    "explanation": "Mediasi jejaring berbasis data teknis objektif dan dialog antar-ahli internal melahirkan solusi interoperabilitas yang menjaga kehormatan semua unit sekaligus mengutamakan keamanan sistem negara (skor 5).",
    "tip": "Pecahkan kebuntuan teknis antarunit memakai analisis objektif berbasis standar dan dialog titik temu interoperabilitas."
  },
  {
    "id": "tkp-jej-009",
    "subPattern": "membangun-kepercayaan-dan-relasi-profesional",
    "difficulty": "mudah",
    "prompt": "Seorang mitra kerja dari instansi lain menghubungi Anda untuk mengonfirmasi jadwal pengiriman bahan paparan yang sempat Anda janjikan selesai siang ini, namun pekerjaan lapangan mendadak membuat draf baru tercapai separuh. Sikap yang menjaga kepercayaan profesional adalah ...",
    "options": [
      "Tidak mengangkat panggilan telepon maupun membalas pesan agar tidak merasa malu mengakui draf belum selesai",
      "Menyatakan sistem surel kantor sedang rusak sebagai alasan penundaan supaya kepercayaan mitra tetap terjaga",
      "Mengirimkan bahan paparan lama tahun sebelumnya tanpa memberitahu bahwa data belum diperbarui",
      "Segera mengabari mitra secara jujur perkembangan terkini sebelum tenggat lewat, mengirimkan bagian yang sudah siap untuk dibaca awal, dan menepati komitmen jam penyelesaian sisanya",
      "Meminta staf lain menjawab pesan tersebut dengan menjanjikan pengiriman tanpa kepastian jam selesai"
    ],
    "optionScores": [
      1,
      2,
      3,
      5,
      4
    ],
    "answer": "D",
    "explanation": "Kepercayaan dalam jejaring dibangun oleh komunikasi proaktif yang jujur sebelum tenggat berakhir, transparansi progres, serta komitmen tegas menepati jadwal koreksi tanpa mencari kambing hitam teknis palsu (skor 5).",
    "tip": "Saat progres berisiko meleset, kabari lebih awal secara jujur, kirim progres yang siap, dan tepati waktu lanjutan."
  },
  {
    "id": "tkp-jej-010",
    "subPattern": "membangun-kepercayaan-dan-relasi-profesional",
    "difficulty": "mudah",
    "prompt": "Dalam sebuah forum sosialisasi tingkat kecamatan, seorang tokoh masyarakat mengemukakan keraguan terhadap akurasi manfaat program baru instansi Anda karena pengalaman proyek sebelumnya sempat tersendat di tengah jalan. Respons Anda yang membangun kembali kepercayaan mitra adalah ...",
    "options": [
      "Menyanggah keras pernyataan tokoh tersebut agar masyarakat tidak terpengaruh opini negatif terhadap pemerintah",
      "Menyatakan bahwa pelaksana proyek sebelumnya sudah mutasi sehingga masyarakat tidak perlu membahas masa lalu",
      "Mengalihkan topik diskusi kepada acara hiburan pembagian doorprize agar suasana kembali ceria",
      "Hanya mencatat pertanyaan beliau sebagai lampiran notulen tanpa memberikan tanggapan di hadapan peserta forum",
      "Mendengarkan keraguan beliau dengan sikap terbuka dan hormat, mengakui catatan evaluasi masa lalu secara bijak, menjelaskan perbaikan pengawasan mekanisme terbaru secara transparan, serta mengajak tokoh tersebut ikut memantau pelaksanaannya"
    ],
    "optionScores": [
      2,
      3,
      1,
      4,
      5
    ],
    "answer": "E",
    "explanation": "Kepercayaan publik dan mitra dipulihkan lewat keterbukaan mendengar kritik, penyampaian perbaikan sistem secara konkret, serta pelibatan partisipatif tokoh masyarakat dalam pengawasan bersama (skor 5).",
    "tip": "Bangun ulang kepercayaan mitra lewat empati terhadap pengalaman masa lalu, bukti perbaikan sistem, dan pelibatan terbuka."
  },
  {
    "id": "tkp-jej-011",
    "subPattern": "membangun-kepercayaan-dan-relasi-profesional",
    "difficulty": "sedang",
    "prompt": "Rekan dari dinas mitra mempercayakan sebuah laporan evaluasi awal internal organisasinya kepada Anda sebagai bahan penyelarasan program bersama. Ketika staf bagian Anda meminta salinan laporan itu untuk dibagikan ke forum diskusi lain di luar ruang lingkup kesepakatan, sikap Anda adalah ...",
    "options": [
      "Menjaga kerahasiaan amanah tersebut dengan menolak pembagian dokumen di luar tujuan kesepakatan tanpa izin tertulis dari dinas pemilik laporan, lalu meminta persetujuan pemilik terlebih dahulu jika memang diperlukan",
      "Membagikan sebagian besar isi dokumen asal mencoret nama penulis aslinya di halaman sampul",
      "Mengirimkan salinan utuh lewat jalur pribadi saja dengan pesan agar staf tersebut tidak menyebut nama Anda sebagai sumber",
      "Memfotokopi laporan untuk seluruh anggota tim sendiri tetapi melarang mencetak ulang bagi pihak luar kantor",
      "Mengunggah laporan awal mitra ke grup umum lintas dinas agar seluruh pegawai daerah ikut memberikan komentar"
    ],
    "optionScores": [
      5,
      2,
      1,
      4,
      3
    ],
    "answer": "A",
    "explanation": "Menjaga kerahasiaan informasi dan batasan izin penggunaan data mitra adalah fondasi terpenting relasi profesional jangka panjang. Meminta izin pemilik data menunjukkan integritas serta penghormatan etika kemitraan (skor 5).",
    "tip": "Kepercayaan jejaring kerja berdiri di atas integritas menjaga amanah kerahasiaan data dan dokumen mitra."
  },
  {
    "id": "tkp-jej-012",
    "subPattern": "membangun-kepercayaan-dan-relasi-profesional",
    "difficulty": "sedang",
    "prompt": "Seorang pegawai penghubung dari mitra lembaga swadaya masyarakat kerap memberikan masukan tajam terhadap pelaksanaan program pemberdayaan di unit Anda. Agar relasi kemitraan tetap sehat dan produktif, cara Anda menjaga komunikasi adalah ...",
    "options": [
      "Mengurangi frekuensi balasan pesan dan mengundangnya sesedikit mungkin pada rapat evaluasi lanjutan",
      "Menanggapi kritik secara positif dan profesional, memverifikasi masukan bersama data lapangan, serta merespons dengan perbaikan konkret maupun penjelasan objektif jika terdapat perbedaan prosedur regulasi",
      "Membela seluruh kebijakan unit secara defensif setiap kali mitra menyampaikan kekhawatiran peserta lapangan",
      "Menyerahkan seluruh pesan kritik mitra kepada pegawai magang agar langsung dijawab dengan kalimat seragam",
      "Menerima semua tuntutan mitra secara langsung tanpa memeriksa kesesuaiannya dengan aturan anggaran negara"
    ],
    "optionScores": [
      2,
      5,
      3,
      1,
      4
    ],
    "answer": "B",
    "explanation": "Kemitraan matang memandang kritik berbasis lapangan sebagai mitra kontrol yang membangun. Sikap terbuka, berbasis verifikasi data, dan jelas dalam koridor regulasi memperkuat rasa saling percaya (skor 5).",
    "tip": "Respons kritik mitra secara terbuka dan berbasis data; tetap komunikasikan batas regulasi pemerintah dengan santun."
  },
  {
    "id": "tkp-jej-013",
    "subPattern": "membangun-kepercayaan-dan-relasi-profesional",
    "difficulty": "sedang",
    "prompt": "Anda pernah berjanji menghubungkan kepala seksi di unit Anda dengan narasumber kompeten dari asosiasi profesi yang Anda kenal, namun setelah proyek berjalan ternyata jadwal kegiatan sangat padat. Sikap Anda yang paling mencerminkan keandalan jejaring kerja adalah ...",
    "options": [
      "Melupakan janji tersebut karena tidak dituangkan dalam surat tugas tertulis maupun notulen rapat resmi",
      "Memberikan nomor telepon narasumber begitu saja kepada staf lain tanpa memperkenalkan konteks kebutuhannya lebih dulu",
      "Tetap menepati komitmen dengan memperkenalkan kedua pihak secara formal beserta ringkasan agenda kebutuhan agar kolaborasi berjalan mulus sesuai kesepakatan awal",
      "Menunda mengenalkan hingga program selesai sepenuhnya agar tidak repot mengatur jadwal pertemuan awal",
      "Mengarang alasan bahwa narasumber tersebut sedang sakit panjang supaya kepala seksi mencari koneksi lain"
    ],
    "optionScores": [
      2,
      4,
      5,
      3,
      1
    ],
    "answer": "C",
    "explanation": "Relasi profesional terjaga ketika janji koordinasi ditepati secara tuntas dan bermakna—menghubungkan kedua pihak lengkap dengan konteks kebutuhan agar pertemuan efektif (skor 5).",
    "tip": "Relasi kerja tepercaya ditandai ketepatan menepati komitmen sekecil apa pun secara rapi dan memberi nilai tambah."
  },
  {
    "id": "tkp-jej-014",
    "subPattern": "membangun-kepercayaan-dan-relasi-profesional",
    "difficulty": "sedang",
    "prompt": "Ketika menghadiri rapat koordinasi tingkat provinsi bersama puluhan wakil lembaga lain, Anda melihat seorang pejabat muda dari kabupaten terpencil kesulitan menyampaikan usulan karena forum didominasi pembicara dari kota besar. Sikap Anda adalah ...",
    "options": [
      "Membiarkan dinamika diskusi berjalan apa adanya supaya forum rapat selesai sebelum jam makan siang",
      "Langsung mengambil alih gagasan wakil tersebut dan menyampaikannya sebagai usulan orisinal dari kantor Anda sendiri",
      "Mengajak wakil daerah terpencil itu berbincang singkat saat istirahat kopi saja tanpa memberi ruang pada pembahasan resmi",
      "Membantu membuka ruang bicara yang setara dalam forum, mengapresiasi sudut pandang lapangan daerahnya, dan ikut menjajaki sinergi tindak lanjut pascarapat",
      "Menyarankan pemimpin rapat membatasi jatah bicara hanya bagi kabupaten dengan jumlah proyek terbanyak"
    ],
    "optionScores": [
      3,
      1,
      4,
      5,
      2
    ],
    "answer": "D",
    "explanation": "Jejaring kerja yang kuat bersifat inklusif dan setara: memberi panggung bagi rekan daerah tertinggal untuk didengar sekaligus menjalin relasi kolaboratif yang saling membesarkan, tanpa merebut kredit gagasan (skor 5).",
    "tip": "Jejaring kerja sejati memberi ruang setara bagi seluruh mitra dan menghargai kredit kontribusi tiap pihak."
  },
  {
    "id": "tkp-jej-015",
    "subPattern": "membangun-kepercayaan-dan-relasi-profesional",
    "difficulty": "sulit",
    "prompt": "Di akhir proyek kemitraan yang sukses bersama dua lembaga eksternal, atasan Anda hendak memublikasikan capaian program tersebut di media massa tanpa menyebut peran kedua mitra yang banyak berkontribusi di riset lapangan karena ingin mengangkat nama unit sendiri. Sebagai koordinator proyek, sikap Anda adalah ...",
    "options": [
      "Mendukung penuh keputusan atasan karena pencantuman satu nama instansi jauh lebih ringkas dibaca publik",
      "Diam saja saat publikasi dirilis, lalu diam-diam meminta maaf lewat pesan pribadi kepada kedua lembaga mitra sambil menyalahkan atasan",
      "Menghubungi jurnalis di luar pengetahuan atasan agar seluruh kontribusi tim ditulis khusus atas nama Anda pribadi",
      "Membatalkan publikasi berita secara sepihak tanpa memberi penjelasan kepada tim humas maupun atasan",
      "Menyampaikan saran secara santun namun argumentatif kepada atasan agar siaran pers memberikan pengakuan adil kepada seluruh mitra kolaborasi demi menjaga kredibilitas institusi serta keberlanjutan kerja sama jangka panjang"
    ],
    "optionScores": [
      2,
      3,
      1,
      4,
      5
    ],
    "answer": "E",
    "explanation": "Integritas dalam jejaring menuntut pengakuan kredit kontribusi secara adil (fair attribution). Mengadvokasi secara santun kepada pimpinan bahwa penghargaan pada mitra justru memperkuat reputasi kepemimpinan dan kepercayaan kemitraan masa depan adalah sikap profesional tertinggi (skor 5).",
    "tip": "Keberlanjutan kemitraan dijaga lewat pengakuan kontribusi yang jujur dan adil bagi semua pihak yang terlibat."
  },
  {
    "id": "tkp-jej-016",
    "subPattern": "membangun-kepercayaan-dan-relasi-profesional",
    "difficulty": "sulit",
    "prompt": "Perusahaan mitra penyedia platform pelatihan daring mengalami gangguan teknis pada pekan pertama implementasi program kerja sama hingga memicu keluhan peserta binaan dinas Anda. Di tengah tekanan keluhan, pihak vendor tampak khawatir kontraknya langsung diputus sepihak sebelum diberi kesempatan perbaikan. Tindakan manajerial paling tepat yang menjaga integritas dan efektivitas kemitraan adalah ...",
    "options": [
      "Mengundang manajemen teknis mitra secepatnya untuk mengevaluasi akar kendala secara objektif sesuai pasal SLA kontrak, menetapkan tenggat perbaikan terukur, dan mengomunikasikan jalur layanan alternatif bagi peserta sembari memantau pemulihan ketat",
      "Memutus kontrak kerja sama secara emosional pada hari itu juga tanpa rapat klarifikasi meskipun peserta sedang membutuhkan layanan berlanjut",
      "Menutupi kerusakan sistem tersebut dan meminta seluruh peserta menunda pelatihan hingga dua bulan tanpa menegur mitra",
      "Menerima janji perbaikan lisan mitra begitu saja tanpa catatan tertulis, target waktu, maupun pemantauan teknis",
      "Membiarkan pimpinan daerah memarahi vendor di media massa sebelum menelusuri log kendala sistem bersama tim TI"
    ],
    "optionScores": [
      5,
      2,
      1,
      3,
      4
    ],
    "answer": "A",
    "explanation": "Relasi profesional tangguh memadukan ketegasan berbasis perjanjian/SLA dengan pendekatan solutif objektif: lindungi kepentingan peserta segera, beri ruang perbaikan terukur sesuai kontrak, dan pantau disiplin sampai normal kembali (skor 5).",
    "tip": "Dalam krisis kemitraan teknis, tegakkan akuntabilitas SLA secara objektif sekaligus utamakan solusi berkelanjutan bagi penerima manfaat."
  },
  {
    "id": "tkp-jej-017",
    "subPattern": "kolaborasi-tim-dan-pembagian-peran",
    "difficulty": "mudah",
    "prompt": "Anda ditugaskan bersama empat rekan menyusun laporan kinerja tahunan unit kerja. Pada pertemuan awal, satu anggota tim terlihat bingung karena tugasnya menuntut pengolahan grafik kompleks yang belum dikuasainya. Sikap Anda yang paling kolaboratif adalah ...",
    "options": [
      "Mendesak ketua tim segera mencoret rekan tersebut dari kepanitiaan laporan karena dianggap memperlambat target bersama",
      "Menawarkan pendampingan singkat cara membuat grafik sekaligus menyesuaikan pembagian porsi kerja sesuai kekuatan masing-masing anggota agar target laporan rampung bersama tepat waktu",
      "Mengerjakan sendiri seluruh bagian grafik miliknya secara diam-diam di malam hari supaya ia tidak perlu belajar lagi",
      "Menertawakan ketidakmampuannya di rapat lalu menukarnya hanya dengan tugas menjilid dan mengantar berkas",
      "Membiarkannya bekerja sendiri hingga batas waktu pengumpulan nanti dengan prinsip tiap orang bertanggung jawab atas bagiannya"
    ],
    "optionScores": [
      1,
      5,
      4,
      2,
      3
    ],
    "answer": "B",
    "explanation": "Kolaborasi tim bertumbuh ketika rekan saling melengkapi kekuatan, memberdayakan anggota yang kesulitan lewat pendampingan cepat, dan berbagi peran secara adaptif tanpa menyingkirkan anggota (skor 5).",
    "tip": "Tim yang kuat memberdayakan rekan yang kesulitan lewat pendampingan dan penyesuaian peran, bukan mengambil alih total atau mengucilkan."
  },
  {
    "id": "tkp-jej-018",
    "subPattern": "kolaborasi-tim-dan-pembagian-peran",
    "difficulty": "mudah",
    "prompt": "Dalam rapat tim merancang kegiatan bakti sosial instansi, usulan Anda sebenarnya lebih hemat biaya menurut perhitungan pribadi, tetapi mayoritas rekan sepakat memilih konsep rekan lain yang lebih mudah melibatkan banyak komunitas warga. Sikap Anda adalah ...",
    "options": [
      "Menarik diri dari seluruh keterlibatan kepanitiaan dengan alasan ide yang lebih hemat biaya tidak dihargai tim",
      "Mengungkapkan kekurangan konsep pemenang di depan para tamu komunitas saat hari pelaksanaan berlangsung",
      "Menerima keputusan tim secara lapang dada, mendukung pelaksanaannya sepenuh hati, serta menyumbangkan saran efisiensi anggaran yang dapat diterapkan pada konsep terpilih tersebut",
      "Tetap bekerja setengah hati sesuai jadwal rapat minimum saja agar cepat selesai dari kepanitiaan",
      "Membuat proposal tandingan terpisah secara diam-diam untuk diajukan langsung ke pimpinan tanpa sepengetahuan ketua tim"
    ],
    "optionScores": [
      2,
      1,
      5,
      3,
      4
    ],
    "answer": "C",
    "explanation": "Kerja sama tim menuntut komitmen kolektif setelah keputusan diambil bersama (disagree and commit), sambil secara konstruktif menyuntikkan nilai tambah (efisiensi) untuk kesuksesan rencana tim (skor 5).",
    "tip": "Ketika usulan pribadi tidak terpilih di musyawarah tim, dukung keputusan kolektif secara penuh dan perkuat pelaksanaannya."
  },
  {
    "id": "tkp-jej-019",
    "subPattern": "kolaborasi-tim-dan-pembagian-peran",
    "difficulty": "sedang",
    "prompt": "Tiga hari menjelang tenggat penyerahan dokumen strategis, salah satu anggota kunci tim Anda mendadak jatuh sakit dan harus dirawat di rumah sakit sehingga bagiannya tertinggal separuh. Sebagai bagian dari tim yang solid, reaksi terbaik tim bersama Anda adalah ...",
    "options": [
      "Menuntut rekan yang sedang sakit tetap mengirimkan pekerjaannya dari ruang perawatan karena bagian itu menjadi tanggung jawab pribadinya",
      "Menyerahkan seluruh beban sisa bagian tersebut kepada ketua tim seorang diri sebagai pemimpin proyek",
      "Mengajukan penundaan tenggat penyerahan dokumen selama satu bulan tanpa memeriksa apakah masih bisa dikejar bersama",
      "Mendoakan kesembuhannya, meminta salinan draf terkini dengan sopan tanpa membebaninya, lalu secara sigap membagi rata sisa tugas ke seluruh anggota sehat agar tenggat tetap terpenuhi bersama",
      "Mengumpulkan dokumen tim dalam keadaan bagian rekan sakit tersebut dibiarkan kosong disertai catatan khusus namanya"
    ],
    "optionScores": [
      1,
      3,
      4,
      5,
      2
    ],
    "answer": "D",
    "explanation": "Solidaritas kolaboratif (nilai Harmonis & Kolaboratif) terlihat saat anggota mengalami kondisi kahar/sakit: menjaga empati kemanusiaan tanpa memaksanya bekerja saat dirawat, sekaligus membagi beban secara proporsional demi tujuan bersama tim (skor 5).",
    "tip": "Saat rekan sakit mendadak, jaga empati dan langsung redistribusi sisa pekerjaan tim secara gotong royong."
  },
  {
    "id": "tkp-jej-020",
    "subPattern": "kolaborasi-tim-dan-pembagian-peran",
    "difficulty": "sedang",
    "prompt": "Ketua tim kerja Anda sedang terlalu padat agenda dinas luar sehingga komunikasi instruksi terpotong-potong dan beberapa anggota mulai kebingungan urutan kerja mingguan. Langkah paling tepat Anda adalah ...",
    "options": [
      "Memanfaatkan kekosongan pengawasan ketua untuk bekerja santai sesuai ritme masing-masing sambil menunggu rapat berikutnya",
      "Mengeluhkan kepemimpinan ketua di belakang layar kepada pejabat bidang kepegawaian agar segera diganti",
      "Langsung mengambil alih otoritas keputusan mutlak tim tanpa meminta persetujuan atau mengabarkan ketua sama sekali",
      "Menunggu hingga seluruh rekan bertanya sendiri kepada ketua melalui pesan masing-masing walaupun waktu terbuang",
      "Mengusulkan pembuatan papan pemantau tugas (task board) bersama secara ringkas lalu mengonfirmasikan draf pembagian prioritas ke ketua agar tim bergerak sinkron"
    ],
    "optionScores": [
      1,
      2,
      3,
      4,
      5
    ],
    "answer": "E",
    "explanation": "Inisiatif kolaboratif mendukung pemimpin tanpa melangkahi otoritas: menyusun visualisasi alur/daftar prioritas bersama untuk dikonfirmasi cepat oleh ketua membuat seluruh tim tetap sinkron bergerak (skor 5).",
    "tip": "Isi celah komunikasi pimpinan secara proaktif dengan menyusun peta kerja terstruktur untuk dikonfirmasi bersama."
  },
  {
    "id": "tkp-jej-021",
    "subPattern": "kolaborasi-tim-dan-pembagian-peran",
    "difficulty": "sedang",
    "prompt": "Seorang pegawai berprestasi di tim Anda cenderung ingin mengerjakan setiap tugas penting sendirian karena merasa hasil kerja rekan lain sering kurang sempurna. Sebagai sesama anggota tim, cara bijak membangun budaya kolaborasi adalah ...",
    "options": [
      "Mengapresiasi standar tingginya sambil menawarkan kerja sama berbagi peran berdasar checklist kualitas yang disepakati bersama agar ia tetap percaya pada mutu tim sekaligus mengurangi beban berlebih pada satu orang",
      "Membiarkannya menanggung seluruh pekerjaan sendiri dengan senang hati agar pekerjaan Anda dan rekan lain menjadi lebih ringan",
      "Melarangnya mengerjakan tugas apa pun sebelum meminta izin tertulis dari setiap anggota tim lainnya",
      "Sengaja bekerja seadanya saja sebagai bentuk protes karena ia tidak memercayai hasil kerja rekan sekantor",
      "Mengadu ke bagian lain bahwa pegawai tersebut sombong dan tidak mau bergaul dengan staf di tim"
    ],
    "optionScores": [
      5,
      3,
      2,
      1,
      4
    ],
    "answer": "A",
    "explanation": "Perfeksionisme tunggal berisiko menimbulkan bottleneck dan burnout. Menyepakati standar checklist kualitas tim sebelum bekerja memberi rasa aman kepada rekan berstandar tinggi sehingga mau mendelegasikan dan berkolaborasi (skor 5).",
    "tip": "Ajak rekan 'solo player' berkolaborasi dengan menyepakati standar mutu (checklist) dan pembagian peran yang jelas sejak awal."
  },
  {
    "id": "tkp-jej-022",
    "subPattern": "kolaborasi-tim-dan-pembagian-peran",
    "difficulty": "sedang",
    "prompt": "Tim Anda menerima umpan balik revisi cukup banyak dari pimpinan atas naskah rancangan yang dikerjakan bersama, membuat semangat beberapa rekan langsung turun. Tindakan Anda untuk menjaga ketangguhan kolaborasi tim adalah ...",
    "options": [
      "Segera menelusuri siapa anggota yang menyumbang bagian paling banyak direvisi lalu menyalahkannya di grup tim",
      "Mengajak tim memandang revisi sebagai bahan peningkatan kualitas bersama, memetakan daftar poin revisi per bagian, lalu membagi sesi pengerjaan koreksi singkat secara serempak",
      "Menyatakan di depan pimpinan bahwa Anda sebenarnya sudah memperingatkan tim mengenai kelemahan bagian rekan lain sejak kemarin",
      "Menyimpan dokumen revisi selama beberapa hari dulu sambil menunggu semangat rekan pulih dengan sendirinya",
      "Memutuskan mengerjakan seluruh revisi tim seorang diri diam-diam dan meminta nama Anda ditulis paling atas"
    ],
    "optionScores": [
      1,
      5,
      2,
      3,
      4
    ],
    "answer": "B",
    "explanation": "Menjaga moral tim pascarevisi berfokus pada solusi bersama (bukan saling menyalahkan), memecah daftar koreksi menjadi langkah terukur, dan menyelesaikannya serempak sebagai satu kesatuan tim (skor 5).",
    "tip": "Fokus tim pascarevisi adalah memetakan perbaikan secara terukur bersama, bukan mencari siapa yang paling bersalah."
  },
  {
    "id": "tkp-jej-023",
    "subPattern": "kolaborasi-tim-dan-pembagian-peran",
    "difficulty": "sulit",
    "prompt": "Dalam tim proyek lintas generasi di unit kerja, pegawai senior sangat teliti dalam kepatuhan tata naskah aturan lama tetapi lambat di alur kerja digital, sementara pegawai muda cekatan dengan aplikasi daring namun kurang memperhatikan keabsahan formal berkas. Agar kolaborasi tim menghasilkan kinerja optimal, desain peran terbaik yang dapat Anda gagas adalah ...",
    "options": [
      "Memisahkan dua subtim proyek terpisah antara pegawai senior dan pegawai muda supaya tidak saling menghambat rapat",
      "Meminta pegawai senior mengundurkan diri dari proyek berbasis digital dan menggantinya seluruhnya dengan pegawai generasi baru",
      "Menerapkan kerja berpasangan (pairing kolaboratif) saling melengkapi: pegawai muda mengakselerasi pengumpulan & olah data digital sementara pegawai senior menjadi penelaah mutu substansi serta kesesuaian regulasi, disertai alih pengetahuan dua arah",
      "Memaksa pegawai senior menguasai seluruh perangkat lunak dalam tiga hari dengan ancaman penurunan skor perilaku tim",
      "Membiarkan pegawai muda menentukan seluruh isi kebijakan tanpa tinjauan regulasi senior demi mengejar kecepatan unggah laporan"
    ],
    "optionScores": [
      3,
      1,
      5,
      2,
      4
    ],
    "answer": "C",
    "explanation": "Keragaman kompetensi antargenerasi merupakan aset strategis bila disatukan melalui pairing kolaboratif yang saling mentransfer keahlian—kecepatan digital dipadukan ketajaman regulasi (skor 5).",
    "tip": "Ubah kesenjangan antargenerasi dari gesekan menjadi keunggulan tim lewat kolaborasi saling melengkapi (mutual mentoring)."
  },
  {
    "id": "tkp-jej-024",
    "subPattern": "kolaborasi-tim-dan-pembagian-peran",
    "difficulty": "sulit",
    "prompt": "Ketika bekerja pada proyek kolaboratif jangka panjang, Anda menyadari adanya dua rekan yang diam-diam mendominasi keputusan strategis rapat hanya berdua sebelum rapat resmi tim dimulai, sehingga anggota tim lainnya hanya kebagian tugas administratif pelengkap. Sebagai sesama anggota yang peduli pada kesehatan jejaring kerja, langkah terbaik Anda adalah ...",
    "options": [
      "Membentuk kubu tandingan di luar rapat guna memboikot seluruh keputusan yang diajukan oleh dua rekan tersebut",
      "Diam menerima peran administratif saja supaya tidak berhadapan langsung dengan rekan yang lebih berpengaruh",
      "Melaporkan keduanya langsung dengan tuduhan persekongkolan ke pejabat pengawas internal sebelum mengajak bicara",
      "Menyampaikan secara konstruktif dan santun dalam forum tim perlunya agenda terbuka agar masukan seluruh anggota didengar sebelum keputusan dikunci, sehingga rasa kepemilikan tim dan akuntabilitas terjaga",
      "Mengundurkan diri secara mendadak dari seluruh kegiatan proyek tepat tiga hari sebelum peluncuran program"
    ],
    "optionScores": [
      1,
      3,
      4,
      5,
      2
    ],
    "answer": "D",
    "explanation": "Mengembalikan proses pengambilan keputusan ke mekanisme musyawarah terbuka secara santun tanpa memicu kubu-kubuan melindungi partisipasi adil seluruh tim dan kualitas hasil keputusan bersama (skor 5).",
    "tip": "Jaga inklusivitas keputusan tim dengan mengusulkan mekanisme pembahasan agenda secara terbuka bagi semua anggota."
  },
  {
    "id": "tkp-jej-025",
    "subPattern": "berbagi-pengetahuan-dan-keterbukaan-informasi",
    "difficulty": "mudah",
    "prompt": "Anda baru saja selesai mengikuti bimbingan teknis (bimtek) pengelolaan arsip elektronik nasional dengan berbagai teknik praktis yang mempercepat pencarian berkas hingga lima kali lipat. Tindakan yang paling mencerminkan budaya berbagi pengetahuan setelah kembali ke kantor adalah ...",
    "options": [
      "Menyimpan modul serta catatan materi bimtek untuk diri sendiri agar Anda tetap menjadi satu-satunya orang andalan saat pimpinan membutuhkan",
      "Hanya membagikan berkas PDF mentah tanpa penjelasan praktis apabila ada rekan yang kebetulan memintanya secara pribadi",
      "Mengeluhkan bahwa rekan kantor lain seharusnya juga diikutkan bimtek pusat seperti Anda agar tidak tertinggal",
      "Menunda berbagi materi selama enam bulan sambil menunggu seluruh perangkat komputer kantor diganti model terbaru",
      "Merangkum materi praktis dalam panduan singkat yang mudah diikuti lalu menginisiasi sesi berbagi singkat (knowledge sharing) tim dan mempraktikkannya bersama"
    ],
    "optionScores": [
      1,
      4,
      2,
      3,
      5
    ],
    "answer": "E",
    "explanation": "Nilai Kompeten dan Kolaboratif mengharuskan ilmu dari pelatihan dibagikan meluas ke unit kerja melalui sesi berbagi dan panduan aplikatif sehingga kapasitas seluruh organisasi naik merata (skor 5).",
    "tip": "Ilmu hasil pelatihan dinas adalah investasi organisasi—kemas menjadi panduan ringkas dan bagikan kepada tim."
  },
  {
    "id": "tkp-jej-026",
    "subPattern": "berbagi-pengetahuan-dan-keterbukaan-informasi",
    "difficulty": "mudah",
    "prompt": "Seorang pegawai baru CPNS ditempatkan di seksi Anda dan kerap bertanya tentang alur persuratan dinas yang sebenarnya belum memiliki buku panduan ringkas. Sikap paling tepat Anda adalah ...",
    "options": [
      "Membimbing alur dasar persuratan dengan sabar, membagikan contoh templat dan daftar kontak terkait yang sah, serta membuka ruang tanya jawab agar ia cepat mandiri",
      "Menyuruhnya mempelajari sendiri tumpukan surat lama tahun-tahun sebelumnya dari lemari arsip supaya terbiasa berjuang",
      "Menjawab singkat satu per satu hanya saat ditanya sambil membiarkannya menemukan sendiri kesalahannya di tahap verifikasi",
      "Meminta pegawai baru tersebut tidak banyak bertanya karena setiap orang punya kesibukan masing-masing",
      "Mengerjakan seluruh surat masuk bagiannya selama sebulan penuh tanpa menjelaskan cara penyusunannya kepada yang bersangkutan"
    ],
    "optionScores": [
      5,
      2,
      4,
      1,
      3
    ],
    "answer": "A",
    "explanation": "Onboarding suportif dengan berbagi templat sah dan bimbingan terarah mempercepat kemandirian rekan baru sekaligus menekan potensi kesalahan administrasi di unit kerja (skor 5).",
    "tip": "Bantu rekan baru menjadi mandiri lebih cepat dengan berbagi templat resmi dan pendampingan terstruktur."
  },
  {
    "id": "tkp-jej-027",
    "subPattern": "berbagi-pengetahuan-dan-keterbukaan-informasi",
    "difficulty": "sedang",
    "prompt": "Anda akan menjalani mutasi promosi ke dinas lain bulan depan, padahal selama ini Anda memegang kata akses serta alur lengkap pengelolaan aplikasi pelaporan bulanan unit lama. Agar kelangsungan kinerja unit lama tidak terganggu setelah Anda pindah, tindakan profesional Anda adalah ...",
    "options": [
      "Membawa seluruh catatan kerja pribadi ke kantor baru dan baru menjawab bila dihubungi lewat telepon darurat",
      "Menyiapkan dokumentasi serah terima tertulis (SOP teknis, kalender rutin, peta akses akun dinas resmi), melakukan pelatihan pendampingan kepada pegawai pengganti secara bertahap sebelum pindah, dan menyerahkan akun resmi secara aman",
      "Menyerahkan semua berkas kerja dalam satu folder tanpa nama yang jelas di hari terakhir sebelum jam pulang kantor",
      "Meminta rekan terdekat mencatat sebisanya dalam pertemuan lima menit tepat saat acara perpisahan berlangsung",
      "Tetap memegang kendali penuh akun sistem unit lama dari kantor baru selama satu tahun ke depan"
    ],
    "optionScores": [
      2,
      5,
      3,
      4,
      1
    ],
    "answer": "B",
    "explanation": "Keberlanjutan organisasi adalah tanda profesionalisme jejaring yang sehat: dokumentasi serah terima menyeluruh dan transfer pengetahuan terencana kepada pengganti menjaga pelayanan publik tidak pernah putus saat pergantian personel (skor 5).",
    "tip": "Sebelum mutasi/pindah tugas, tuntaskan serah terima dokumentasi kerja dan latih pengganti agar organisasi tetap lancar."
  },
  {
    "id": "tkp-jej-028",
    "subPattern": "berbagi-pengetahuan-dan-keterbukaan-informasi",
    "difficulty": "sedang",
    "prompt": "Di unit Anda kerap terjadi informasi pembaruan jadwal atau kebijakan mendadak hanya beredar di kalangan segelintir pegawai yang duduk di dekat ruang pimpinan, sehingga tim lapangan sering terlambat mengetahuinya. Upaya perbaikan keterbukaan informasi internal yang paling efektif Anda usulkan adalah ...",
    "options": [
      "Mengharapkan rekan lapangan sering datang ke ruang pimpinan setiap pagi hanya untuk menanyakan kabar terbaru",
      "Membuat grup percakapan informal tambahan yang hanya berisi teman-teman paling akrab di lapangan saja",
      "Membangun satu kanal pengumuman dan repositori catatan pembaruan resmi tim yang terstruktur dan dapat diakses serempak oleh pegawai ruang maupun lapangan secara tepat waktu",
      "Menunggu pimpinan menanyakan alasan keterlambatan informasi terlebih dahulu sebelum menyampaikan kendala komunikasi tersebut",
      "Meminta petugas resepsionis meneriakkan pengumuman lisan setiap jam istirahat di lorong kantor"
    ],
    "optionScores": [
      2,
      1,
      5,
      4,
      3
    ],
    "answer": "C",
    "explanation": "Kesenjangan informasi antara tim kantor dan tim lapangan dipecahkan secara sistemik melalui sumber informasi tunggal terpercaya (single source of truth) yang terstruktur serta serentak menjangkau seluruh anggota (skor 5).",
    "tip": "Tutup kesenjangan komunikasi internal dengan membangun satu kanal informasi terstruktur yang adil bagi seluruh anggota."
  },
  {
    "id": "tkp-jej-029",
    "subPattern": "berbagi-pengetahuan-dan-keterbukaan-informasi",
    "difficulty": "sedang",
    "prompt": "Anda menemukan rumus lembar sebar (spreadsheet) cerdas yang mempercepat rekonsiliasi data keuangan bulanan dari enam jam menjadi lima belas menit. Sementara itu, bagian sebelah terlihat masih lembur mengerjakan tabel sejenis secara manual. Sikap Anda adalah ...",
    "options": [
      "Menyimpan rumus tersebut khusus untuk mempercepat laporan unit sendiri agar meraih penilaian terbaik sendirian",
      "Menunggu pegawai bagian sebelah merasa kewalahan lalu menawarkan imbalan barter bantuan pekerjaan lain sebelum berbagi rumus",
      "Membagikan berkas mentah tanpa mengunci atau menjelaskan logika rumusnya sehingga jika terhapus pegawai lain bingung memperbaikinya",
      "Mengunjungi bagian sebelah untuk memperkenalkan alat bantu tersebut, menjelaskan cara pakainya dengan sederhana, dan membagikan salinan templat beserta panduan singkat penggunaannya",
      "Menasihati bagian sebelah supaya tidak perlu lembur dan mengambil kursus komputer berbayar di akhir pekan"
    ],
    "optionScores": [
      2,
      1,
      4,
      5,
      3
    ],
    "answer": "D",
    "explanation": "Berbagi inovasi efisiensi antarunit (knowledge sharing & open innovation) melipatgandakan produktivitas organisasi sekaligus membangun solidaritas lintas bagian secara tulus (skor 5).",
    "tip": "Inovasi kerja yang berdampak lebih luas adalah inovasi yang dibagikan lengkap dengan panduan cara pakai dan pemeliharaannya."
  },
  {
    "id": "tkp-jej-030",
    "subPattern": "berbagi-pengetahuan-dan-keterbukaan-informasi",
    "difficulty": "sedang",
    "prompt": "Dalam proyek riset data terpadu lintas seksi, seorang rekan meminta akses penuh ke tabel basis data yang Anda kelola, tetapi sebagian kolom di dalamnya mengandung data pribadi sensitif warga yang tidak ia perlukan untuk analisis statistiknya. Sikap tepat yang menyeimbangkan kolaborasi dan keamanan informasi adalah ...",
    "options": [
      "Menolak seluruh permintaan data meskipun untuk tujuan proyek bersama supaya paling aman dari risiko apa pun",
      "Menyerahkan seluruh basis data utuh berikut NIK serta nomor kontak warga agar proses analisisnya cepat tanpa memfilter kolom",
      "Menunda memberikan respons permintaan data berpekan-pekan tanpa menjelaskan batas aturan pelindungan data pribadi",
      "Membacakan angka statistik umumnya lewat sambungan telepon saja tanpa menyerahkan lembar data analisis terstruktur",
      "Menyampaikan aturan pelindungan data secara ramah, lalu segera menyiapkan dan mengirimkan salinan himpunan data yang telah disamarkan/dianonimkan khusus kolom relevan agar kolaborasi tetap berjalan aman"
    ],
    "optionScores": [
      2,
      1,
      3,
      4,
      5
    ],
    "answer": "E",
    "explanation": "Keterbukaan kolaborasi informasi dalam pemerintahan harus berjalan beriringan dengan prinsip pelindungan data pribadi (data minimization & anonymization). Menyerahkan dataset yang dianonimkan mendukung riset tanpa melanggar hukum (skor 5).",
    "tip": "Kolaborasi data yang matang memenuhi kebutuhan analisis mitra melalui data teragregasi atau teranonimkan tanpa membocorkan privasi."
  },
  {
    "id": "tkp-jej-031",
    "subPattern": "berbagi-pengetahuan-dan-keterbukaan-informasi",
    "difficulty": "sulit",
    "prompt": "Selama bertahun-tahun, tiap angkatan pelaksana proyek membuat dokumen panduan dari nol setiap kali terjadi pergantian tim karena catatan pembelajaran proyek (lessons learned) tidak pernah diarsipkan terpusat. Untuk membenahi siklus ketidakefisienan tersebut secara berkelanjutan, langkah terbaik yang Anda usulkan adalah ...",
    "options": [
      "Membangun budaya retrospektif pascaproyek dan repositori pengetahuan bersama (knowledge repository) di drive resmi kantor berisi panduan praktik baik, daftar kendala berulang, serta kontak mitra terverifikasi yang terus diperbarui",
      "Mewajibkan setiap pegawai menulis buku harian pribadi di meja masing-masing yang disimpan di lemari terkunci pribadi",
      "Meminta pimpinan melarang rotasi maupun promosi seluruh anggota tim proyek agar pengetahuan tetap tinggal di satu ruangan",
      "Mengandalkan ingatan lisan pegawai paling senior di kantor sebagai satu-satunya rujukan sejarah proyek masa lalu",
      "Menyewa konsultan eksternal baru setiap tahun untuk menuliskan ulang panduan dasar proyek yang sama"
    ],
    "optionScores": [
      5,
      2,
      1,
      3,
      4
    ],
    "answer": "A",
    "explanation": "Membangun memori institusional melalui repositori pengetahuan bersama yang terstruktur dan retrospektif pascaproyek mencegah pengulangan kesalahan yang sama dari tahun ke tahun dan mempercepat kaderisasi (skor 5).",
    "tip": "Ubah pengetahuan individual menjadi aset institusi lewat dokumentasi pembelajaran bersama (knowledge management system)."
  },
  {
    "id": "tkp-jej-032",
    "subPattern": "berbagi-pengetahuan-dan-keterbukaan-informasi",
    "difficulty": "sulit",
    "prompt": "Seorang rekan senior sangat enggan membagi prosedur teknis penanganan sistem pengarsipan lama karena khawatir posisinya tidak lagi dibutuhkan menjelang masa pensiun atau restrukturisasi tim. Cara persuasif terbaik untuk meruntuhkan sekat penguasaan informasi tunggal (knowledge hoarding) tersebut adalah ...",
    "options": [
      "Melaporkan keengganan rekan senior tersebut sebagai bentuk sabotase birokrasi secara tertulis di grup umum kantor",
      "Menunjukkan penghargaan tinggi atas pengalaman puluhan tahunnya, mengajaknya menjadi mentor resmi penyusun modul warisan keahlian atas namanya sebagai kontribusi legasi organisasi, sekaligus memastikan peran strategisnya sebagai pembimbing mutu",
      "Diam-diam mencuri catatan buku kerjanya di meja saat jam makan siang untuk disalin bersama anggota muda lainnya",
      "Mengabaikan seluruh prosedur arsip lama dan langsung membangun cara kerja acak baru tanpa menghiraukan risiko dokumen lama",
      "Mengajak rekan lain berhenti bertanya atau berinteraksi dengan senior tersebut supaya ia sadar akan kesalahannya"
    ],
    "optionScores": [
      2,
      5,
      1,
      3,
      4
    ],
    "answer": "B",
    "explanation": "Knowledge hoarding sering lahir dari rasa takut kehilangan relevansi. Mengubah ketakutan itu menjadi kebanggaan sebagai mentor dan pemilik warisan keahlian organisasi adalah solusi empatik, elegan, dan berkelanjutan (skor 5).",
    "tip": "Atasi keengganan berbagi ilmu (knowledge hoarding) dengan menghargai peran pengajar/mentor dan memberi pengakuan atas kontribusinya."
  },
  {
    "id": "tkp-jej-033",
    "subPattern": "resolusi-konflik-kerja-dan-mediasi",
    "difficulty": "mudah",
    "prompt": "Dua rekan kerja satu ruangan Anda berselisih pendapat keras soal penataan meja kerja dan penggunaan pendingin ruangan hingga mereka saling diam selama tiga hari, padahal suasana dingin tersebut mengganggu kekompakan kerja tim. Sikap Anda yang paling bijak adalah ...",
    "options": [
      "Memilih memihak rekan yang posisinya lebih dekat dengan meja Anda setiap hari agar suhu ruangan nyaman bagi Anda sendiri",
      "Ikut tidak menyapa kedua rekan tersebut sampai mereka berdua menyelesaikan masalah tanpa ada penengah",
      "Mengajak kedua pihak berbincang santai di waktu jeda dengan suasana netral untuk mendengarkan kebutuhan masing-masing, lalu mencari kesepakatan pengaturan ruangan yang sama-sama nyaman",
      "Membuat lelucon mengenai pertengkaran mereka pada saat apel pagi supaya semua tertawa dan melupakan konflik",
      "Meminta pimpinan langsung memindahkan salah satu dari keduanya ke gedung unit terpencil hari itu juga"
    ],
    "optionScores": [
      2,
      3,
      5,
      1,
      4
    ],
    "answer": "C",
    "explanation": "Skor 5 memediasi konflik sehari-hari secara tenang, netral, mengutamakan dialog empatik dari kedua sisi kebutuhan, dan mengarah ke kesepakatan praktis bersama (win-win).",
    "tip": "Saat menjadi penengah di lingkungan kerja, jaga posisi netral, dengarkan kebutuhan dua sisi, dan fasilitasi kompromi win-win."
  },
  {
    "id": "tkp-jej-034",
    "subPattern": "resolusi-konflik-kerja-dan-mediasi",
    "difficulty": "mudah",
    "prompt": "Dalam diskusi perumusan program kerja tim, salah satu rekan menganggap masukan Anda sebagai upaya menyingkirkan gagasannya, sehingga ia merespons dengan nada tersinggung di depan rapat. Cara Anda merespons situasi tersebut adalah ...",
    "options": [
      "Membalas dengan nada lebih tinggi agar rekan lain yakin bahwa pendapat Anda didukung data yang jauh lebih cerdas",
      "Segera menarik seluruh masukan Anda lalu berjanji tidak akan berpendapat lagi dalam rapat tim berikutnya",
      "Meminta pimpinan rapat menskors pertemuan karena menganggap rekan tersebut terlalu sensitif diajak diskusi profesional",
      "Tetap tenang dan santun, menegaskan bahwa kritik ditujukan pada penyempurnaan program bukan menyerang pribadi, mengapresiasi inti baik idenya, dan mengajak memadukan keunggulan kedua gagasan",
      "Meninggalkan ruang rapat seketika agar perdebatan tidak terekam oleh notulis pertemuan"
    ],
    "optionScores": [
      1,
      3,
      2,
      5,
      4
    ],
    "answer": "D",
    "explanation": "Memisahkan perdebatan gagasan dari serangan pribadi, menjaga apresiasi terhadap niat baik rekan, dan mencari sintesis terbaik meredam ego dan menjaga harmoni rapat (skor 5).",
    "tip": "Pisahkan argumen teknis dari ego personal; validasi niat baik rekan lalu ajak menyatukan keunggulan gagasan."
  },
  {
    "id": "tkp-jej-035",
    "subPattern": "resolusi-konflik-kerja-dan-mediasi",
    "difficulty": "sedang",
    "prompt": "Terjadi miskomunikasi pesan teks di grup tim yang membuat rekan kerja Anda merasa disalahkan atas keterlambatan pengiriman draf, sehingga suasana rapat pagi menjadi kaku dan penuh sindiran. Sebagai pengirim pesan awal tersebut, tindakan paling tepat Anda adalah ...",
    "options": [
      "Menyalahkan keterbatasan format pesan teks di aplikasi percakapan tanpa meminta maaf sedikit pun kepada rekan Anda",
      "Tetap bersikap seolah-olah tidak terjadi masalah apa pun sampai keadaan memudar sendiri berminggu-minggu kemudian",
      "Membalas sindiran di rapat secara halus supaya ia tidak terbiasa terlalu cepat tersinggung oleh kalimat singkat",
      "Meminta anggota tim lain menjelaskan maksud pesan Anda kepada rekan tersebut karena Anda merasa sungkan bicara langsung",
      "Menemui rekan tersebut secara terbuka dan hangat (atau berdialog langsung di awal), mengklarifikasi maksud sebenarnya dengan tulus serta meminta maaf atas pemilihan kalimat yang kurang tepat agar kerja sama kembali harmonis"
    ],
    "optionScores": [
      2,
      3,
      1,
      4,
      5
    ],
    "answer": "E",
    "explanation": "Klarifikasi tatap muka/langsung yang tulus dan kesediaan mengakui ketidakcermatan redaksi pesan memutus rantai salah paham sebelum berkembang menjadi konflik kronis di tim (skor 5).",
    "tip": "Selesaikan salah paham komunikasi teks melalui dialog tatap muka secara terbuka, jujur, dan berjiwa besar meminta maaf bila redaksi kurang tepat."
  },
  {
    "id": "tkp-jej-036",
    "subPattern": "resolusi-konflik-kerja-dan-mediasi",
    "difficulty": "sedang",
    "prompt": "Rekan satu unit dan rekan mitra teknis saling menyalahkan di tengah rapat evaluasi bersama tentang penyebab tidak sinkronnya jumlah data laporan bulan lalu, sehingga fokus rapat keluar dari pencarian perbaikan. Sebagai anggota rapat yang objektif, intervensi paling konstruktif Anda adalah ...",
    "options": [
      "Mengajak peserta kembali ke tujuan utama rapat dengan menelusuri alur pencatatan data secara faktual (tanpa menghakimi individu), mengidentifikasi titik ketidaksinkronan sistem, dan menyepakati mekanisme cek silang agar ke depan akurat",
      "Mendukung rekan satu unit Anda secara mutlak di dalam rapat meski belum memeriksa riwayat pengiriman datanya terlebih dahulu",
      "Meminta kedua pihak bertukar argumen sampai benar-benar tuntas siapa yang paling bersalah sebelum membahas program bulan depan",
      "Mengusulkan penghapusan rapat evaluasi gabungan lintas unit untuk seterusnya agar tidak memicu perselisihan ulang",
      "Menyarankan ketua rapat memutus rapat di tengah jalan lalu menyerahkan persoalan data ke tim penilai kinerja kepegawaian"
    ],
    "optionScores": [
      5,
      2,
      1,
      3,
      4
    ],
    "answer": "A",
    "explanation": "Menggeser fokus konflik dari 'siapa yang salah' (person-oriented blaming) ke 'di mana celah prosesnya dan bagaimana memperbaikinya' (process-oriented solution) menyelesaikan akar masalah sambil memelihara jejaring kemitraan (skor 5).",
    "tip": "Saat tim saling menyalahkan, alihkan fokus diskusi ke fakta proses dan mekanisme pencegahan di masa depan."
  },
  {
    "id": "tkp-jej-037",
    "subPattern": "resolusi-konflik-kerja-dan-mediasi",
    "difficulty": "sedang",
    "prompt": "Dua anggota tim lapangan tidak lagi bersedia dikirim dalam satu regu tugas karena perbedaan gaya kerja yang sangat kontras antara si cepat-eksekusi dan si sangat-teliti, padahal keterbatasan SDM menuntut keduanya berpasangan pekan ini. Langkah bijak Anda selaku koordinator regu adalah ...",
    "options": [
      "Memaksakan keduanya berangkat bersama disertai ancaman penurunan nilai kinerja apabila masih mengeluh di lapangan",
      "Melakukan dialog singkat dengan keduanya untuk menyatukan target akhir misi, lalu membagi peran spesifik berdasar kekuatan masing-masing (percepatan eksekusi lapangan vs pemeriksaan kelengkapan bukti) agar saling melengkapi",
      "Membiarkan salah satu tidak berangkat minggu ini agar Anda sendiri yang mengerjakan rangkap dua jadwal lapangan tersebut",
      "Mengganti seluruh jadwal misi pekan ini tanpa izin pimpinan hanya supaya keduanya tidak berpasangan",
      "Menceritakan kelemahan masing-masing kepada tim regu lain untuk mencairkan ketegangan sebelum keberangkatan"
    ],
    "optionScores": [
      3,
      5,
      4,
      2,
      1
    ],
    "answer": "B",
    "explanation": "Gaya kerja berbeda justru sangat kuat bila dibagi ke peran yang cocok dengan keunggulannya serta diikat kesepakatan target akhir bersama (skor 5).",
    "tip": "Alih-alih memaksakan keseragaman gaya kerja, ubah perbedaan karakter tim menjadi pembagian peran komplementer."
  },
  {
    "id": "tkp-jej-038",
    "subPattern": "resolusi-konflik-kerja-dan-mediasi",
    "difficulty": "sedang",
    "prompt": "Beredar kabar burung di ruang kerja yang menuduh salah satu rekan divisi lain sengaja menahan berkas perjalanan dinas karena persoalan sentimen pribadi, sehingga beberapa anggota tim Anda mulai bersikap bermusuhan terhadapnya. Sikap dewasa Anda adalah ...",
    "options": [
      "Ikut berprasangka waspada dan langsung memotong percakapan akrab dengan rekan divisi lain tersebut sebelum kebenaran jelas",
      "Meneruskan gosip tersebut ke grup percakapan keluarga maupun pegawai baru supaya mereka ikut berhati-hati",
      "Tidak menelan kabar burung mentah-mentah, melakukan tabayyun/konfirmasi sopan terkait status teknis berkas yang sebenarnya ke divisi terkait, lalu meluruskan salah sangka tersebut kepada tim dengan fakta objektif",
      "Mengadu ke pimpinan puncak agar rekan divisi sebelah langsung diperiksa secara mendadak berdasarkan kabar burung ruang kerja",
      "Menghindar sepenuhnya mengurus pengajuan perjalanan dinas hingga tahun anggaran selesai"
    ],
    "optionScores": [
      2,
      1,
      5,
      3,
      4
    ],
    "answer": "C",
    "explanation": "Prasangka dan desas-desus meracuni jejaring kerja. Melakukan klarifikasi fakta sopan langsung ke sumbernya dan menjernihkan persepsi tim menjaga iklim kerja profesional dan harmonis (skor 5).",
    "tip": "Tangkis rumor di tempat kerja melalui verifikasi fakta yang tenang dan tidak langsung memvonis."
  },
  {
    "id": "tkp-jej-039",
    "subPattern": "resolusi-konflik-kerja-dan-mediasi",
    "difficulty": "sulit",
    "prompt": "Dalam koalisi kerja tiga instansi, terjadi sengketa kepemilikan kredit prestasi atas inovasi aplikasi layanan bersama menjelang lomba inovasi nasional: instansi A merasa memiliki ide konsep awal, instansi B membangun kode sistem, dan instansi C melakukan uji coba lapangan masif. Anda ditunjuk sebagai moderator tim perumus pengajuan lomba. Solusi adil dan menyatukan yang Anda tawarkan adalah ...",
    "options": [
      "Menyarankan hanya mencantumkan satu instansi yang anggarannya paling besar sebagai pemilik inovasi utama demi penyederhanaan formulir",
      "Menghapus keterlibatan dua instansi lain dari lampiran dokumentasi jika instansi Anda lebih dahulu mengisi formulir pendaftaran",
      "Mengajukan tiga pendaftaran lomba terpisah dengan aplikasi yang persis sama sehingga masing-masing instansi bertanding sendiri",
      "Mengajak ketiga pimpinan tim bersepakat mendaftarkan inovasi sebagai karya kolaborasi terpadu dengan memetakan secara transparan dan proporsional peran spesifik tiap instansi dalam profil inovasi",
      "Membatalkan keikutsertaan dalam lomba inovasi nasional sepenuhnya agar tidak perlu merundingkan pembagian pengakuan"
    ],
    "optionScores": [
      2,
      1,
      3,
      5,
      4
    ],
    "answer": "D",
    "explanation": "Pengakuan kredit kolaborasi bersama (joint ownership & fair attribution per kontribusi nyata) mencerminkan kedewasaan jejaring kerja lintas lembaga sekaligus memperkuat nilai inovasi di mata juri maupun mitra masa depan (skor 5).",
    "tip": "Atasi perebutan kredit kolaborasi lewat konsep kepemilikan bersama dengan penyebutan porsi kontribusi yang proporsional dan adil."
  },
  {
    "id": "tkp-jej-040",
    "subPattern": "resolusi-konflik-kerja-dan-mediasi",
    "difficulty": "sulit",
    "prompt": "Rekan kerja terdekat yang juga sering membantu pekerjaan Anda terlibat perselisihan prosedur serius dengan staf unit lain yang memang dikenal kaku secara aturan, dan setelah menelaah berkas ternyata posisi rekan dekat Anda memang keliru secara regulasi. Rekan dekat tersebut meminta Anda membelanya pada rapat mediasi besok pagi. Sikap paling berintegritas dalam menjaga jejaring kerja adalah ...",
    "options": [
      "Membela penuh rekan terdekat Anda di rapat mediasi dengan memanipulasi interpretasi pasal agar relasi pertemanan tidak rusak",
      "Menjaga jarak total dengan rekan dekat Anda dan mempermalukannya secara terbuka di rapat mediasi keesokan harinya",
      "Menyatakan tidak hadir rapat mendadak dengan alasan sakit supaya tidak perlu mengambil posisi apa pun",
      "Menyerahkan pembelaan sepihak kepada anggota tim paling baru tanpa menjelaskan kekeliruan fakta prosedur",
      "Berbicara jujur secara empatik empat mata kepada rekan dekat sebelum rapat mengenai kekeliruan prosedurnya, membantunya menyiapkan langkah koreksi yang menyelamatkan substansi kerja, dan tetap bersikap adil serta objektif saat mediasi berlangsung"
    ],
    "optionScores": [
      1,
      2,
      3,
      4,
      5
    ],
    "answer": "E",
    "explanation": "Integritas dalam relasi tidak berarti membela kekeliruan kawan. Teman kerja yang sejati dan berjejaring sehat berbicara jujur secara pribadi lebih dahulu untuk membantu koreksi bermartabat serta tetap teguh pada objektivitas aturan saat mediasi resmi (skor 5).",
    "tip": "Bela kebenaran prosedur secara objektif saat mediasi, namun tetap sampaikan masukan secara jujur dan empatik kepada rekan sebelum forum."
  }
];

export const jejaringKerjaQuestions: readonly Question[] = buildTkpPatternQuestions(
  "jejaring-kerja",
  jejaringKerjaDrafts,
);
