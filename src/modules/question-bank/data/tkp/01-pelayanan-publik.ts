import {
  buildTkpPatternQuestions,
  type Question,
  type TkpQuestionDraft,
} from "@/modules/question-bank/domain/question";

const pelayananPublikDrafts: readonly TkpQuestionDraft[] = [
  {
    "id": "tkp-pel-001",
    "subPattern": "sikap-ramah-empati-dan-pengendalian-emosi",
    "difficulty": "mudah",
    "prompt": "Anda bertugas di loket pelayanan kependudukan yang sedang padat. Seorang warga datang dengan nada bicara tinggi dan memarahi Anda karena berkas permohonannya tertunda akibat pembaruan sistem antrean daring. Sikap Anda yang paling tepat adalah ...",
    "options": [
      "Tetap tenang, menyapa dengan ramah, mendengarkan keluhannya dengan empati, menjelaskan kendala sistem secara jelas, dan segera mencarikan solusi penyelesaian tercepat",
      "Menjelaskan secara singkat bahwa pembaruan sistem berasal dari pusat lalu meminta warga tersebut menunggu tenang di kursi antrean belakang",
      "Membalas dengan nada tegas agar warga lain tahu bahwa kesalahan bukan berasal dari petugas loket melainkan pembaruan server",
      "Meminta warga tersebut menuliskan keluhannya di buku saran lalu kembali datang tiga hari berikutnya setelah antrean reda",
      "Memanggil petugas keamanan segera agar warga tersebut dikeluarkan dari ruangan karena mengganggu kenyamanan"
    ],
    "optionScores": [
      5,
      4,
      2,
      3,
      1
    ],
    "answer": "A",
    "explanation": "Skor tertinggi (5) menampilkan pengendalian emosi, empati mendengarkan, kejelasan komunikasi, dan tindakan solutif langsung. Menjelaskan normatif lalu menyuruh menunggu (4) baik tetapi kurang mengawal solusi langsung bagi warga terdampak.",
    "tip": "Pada situasi warga emosi, cari respons yang tenang, empatik, komunikatif, sekaligus menawarkan penyelesaian konkret."
  },
  {
    "id": "tkp-pel-002",
    "subPattern": "sikap-ramah-empati-dan-pengendalian-emosi",
    "difficulty": "mudah",
    "prompt": "Jam pelayanan resmi loket tinggal lima menit lagi berakhir, sementara masih ada seorang pemohon dari kecamatan jauh yang tampak kelelahan membawa map dokumen yang sudah lengkap. Tindakan Anda adalah ...",
    "options": [
      "Menutup jendela loket lebih awal supaya proses rekapitulasi harian petugas tidak mundur dari jam pulang",
      "Tetap melayani dengan senyum ramah dan memeriksa berkasnya sampai tuntas sesuai prosedur karena masih berada dalam jam layanan resmi",
      "Menerima mapnya sambil memperlihatkan wajah lelah lalu meminta pemohon datang kembali pagi besok untuk verifikasi ulang",
      "Mengalihkan pemohon tersebut ke meja petugas keamanan tanpa memeriksa kelengkapan berkas yang dibawa",
      "Meminta pemohon menunggu di luar ruang layanan sampai seluruh petugas selesai membereskan berkas lain terlebih dahulu"
    ],
    "optionScores": [
      1,
      5,
      3,
      2,
      4
    ],
    "answer": "B",
    "explanation": "Selama masih dalam jam pelayanan resmi dan dokumen sudah di meja layanan, melayani hingga tuntas dengan sikap ramah menunjukkan komitmen pelayanan prima (skor 5).",
    "tip": "Pelayanan prima menghargai waktu dan usaha pemohon selama masih sesuai koridor jam operasional."
  },
  {
    "id": "tkp-pel-003",
    "subPattern": "sikap-ramah-empati-dan-pengendalian-emosi",
    "difficulty": "sedang",
    "prompt": "Rekan satu loket Anda sedang kelelahan hingga menjawab pertanyaan seorang pemohon dengan ketus, membuat suasana di meja sebelah mulai menegang. Sebagai sesama petugas pelayanan di garis depan, sikap Anda adalah ...",
    "options": [
      "Fokus pada pemohon di depan meja sendiri saja karena urusan loket sebelah merupakan tanggung jawab masing-masing pegawai",
      "Ikut menegur pemohon tersebut dengan suara keras agar membela kehormatan rekan kerja di depan publik",
      "Mengambil alih komunikasi dengan ramah untuk menenangkan situasi warga, membantu menyelesaikan keperluannya sesuai SOP, lalu memberi jeda istirahat bergilir dan masukan halus kepada rekan setelah ruang tenang",
      "Merekam kejadian tersebut dengan ponsel diam-diam untuk dijadikan bahan evaluasi rapat akhir bulan di hadapan atasan",
      "Mengajak rekan langsung meninggalkan loket pelayanan sejenak tanpa pemberitahuan supaya emosinya mereda terlebih dahulu"
    ],
    "optionScores": [
      3,
      1,
      5,
      2,
      4
    ],
    "answer": "C",
    "explanation": "Skor 5 menyelamatkan citra pelayanan publik secara langsung lewat de-eskalasi ramah di tempat sekaligus menjaga kekompakan serta evaluasi etis terhadap rekan di belakang layar.",
    "tip": "Saat tim mengalami gesekan layanan di depan publik, utamakan de-eskalasi kepada warga lalu pembinaan internal secara santun."
  },
  {
    "id": "tkp-pel-004",
    "subPattern": "sikap-ramah-empati-dan-pengendalian-emosi",
    "difficulty": "sedang",
    "prompt": "Seorang warga kebingungan membaca formulir permohonan yang banyak memakai istilah teknis hukum sehingga berulang kali mengisi kolom secara keliru. Ketika ia kembali bertanya untuk ketiga kalinya, respons Anda yang paling mencerminkan pelayanan publik terbaik adalah ...",
    "options": [
      "Menyuruh warga membaca kembali papan petunjuk di dinding ruang tunggu dengan suara sedikit tinggi agar tidak terus bertanya",
      "Meminta warga mencari bantuan jasa pengetikan di luar gedung supaya antrean loket tidak terhambat",
      "Tetap menerima formulirnya yang salah tanpa berkomentar supaya urusan di loket cepat berlanjut ke nomor berikutnya",
      "Menjelaskan tiap kolom dengan bahasa sederhana secara sabar, memberi contoh pengisian langsung hingga benar, dan mencatat perlunya perbaikan redaksi formulir agar lebih mudah dipahami",
      "Membacakan petunjuk teknis persis sesuai redaksi aturan tertulis tanpa menerjemahkannya ke bahasa sehari-hari"
    ],
    "optionScores": [
      2,
      1,
      3,
      5,
      4
    ],
    "answer": "D",
    "explanation": "Memberikan pendampingan sabar dengan bahasa membumi sekaligus menginisiasi penyederhanaan formulir bagi warga lain (skor 5) jauh lebih berdampak daripada sekadar membacakan aturan kaku (4).",
    "tip": "Pelayan publik unggul tidak hanya sabar membimbing satu pemohon, tetapi juga peka memperbaiki sumber kebingungan bagi masyarakat luas."
  },
  {
    "id": "tkp-pel-005",
    "subPattern": "sikap-ramah-empati-dan-pengendalian-emosi",
    "difficulty": "sedang",
    "prompt": "Di akhir pekan ketika Anda sedang berada di sebuah fasilitas layanan umum sebagai petugas siaga darurat, seorang warga panik karena kartu akses layanan kesehatannya tertinggal sementara anaknya membutuhkan rujukan cepat. Sikap Anda yang paling tepat adalah ...",
    "options": [
      "Meminta warga tetap pulang mengambil kartu fisik terlebih dahulu sebelum data identitasnya diperiksa petugas jaga",
      "Menenangkan warga terlebih dahulu tanpa membuka akses sistem verifikasi karena takut melampaui kebiasaan",
      "Menyampaikan bahwa kesalahan lupa membawa kartu merupakan kelalaian pribadi yang tidak dapat dibantu saat akhir pekan",
      "Menyuruh warga menghubungi pusat panggilan nasional sendiri melalui ponselnya sambil menunggu giliran",
      "Menenangkan kepanikan warga secara empatik, langsung melakukan verifikasi data digital berbasis NIK/aplikasi resmi sesuai ketentuan darurat, dan memandu langkah rujukan secepatnya"
    ],
    "optionScores": [
      2,
      4,
      1,
      3,
      5
    ],
    "answer": "E",
    "explanation": "Mengombinasikan ketenangan empatik, pemanfaatan data identitas digital sah sesuai prosedur kedaruratan, dan panduan konkret memberikan pertolongan nyata tanpa melanggar aturan (skor 5).",
    "tip": "Prioritaskan ketenangan, keselamatan warga, serta pemanfaatan jalur verifikasi resmi yang tersedia."
  },
  {
    "id": "tkp-pel-006",
    "subPattern": "sikap-ramah-empati-dan-pengendalian-emosi",
    "difficulty": "sedang",
    "prompt": "Seorang pemohon layanan perizinan usaha datang dengan penampilan sangat sederhana dan ragu-ragu bertanya, sementara di antrean belakang berdiri pengusaha besar yang tampak tergesa-gesa ingin didahulukan. Tindakan Anda yang sesuai prinsip keadilan pelayanan adalah ...",
    "options": [
      "Melayani pemohon pertama secara hangat, hormat, dan setara sesuai urutan antrean sambil memberikan informasi jelas tentang estimasi waktu tunggu kepada semua pemohon",
      "Meminta pemohon sederhana bergeser sebentar agar pengusaha dapat segera dilayani dan ruang loket tidak gaduh",
      "Melayani pemohon pertama secukupnya secara singkat agar cepat beralih kepada antrean pengusaha yang tampak sibuk",
      "Menunda kedua pemohon sementara waktu sampai petugas senior kembali dari ruang istirahat siang",
      "Mengubah urutan antrean dengan mendahulukan pemohon yang nilai pengajuan modal usahanya paling besar"
    ],
    "optionScores": [
      5,
      2,
      4,
      3,
      1
    ],
    "answer": "A",
    "explanation": "Pelayanan publik wajib memperlakukan setiap warga setara tanpa memandang penampilan maupun status ekonomi, tetap ramah, dan menjaga keadilan antrean (skor 5).",
    "tip": "Pastikan pelayanan berkeadilan berlaku sama bagi semua warga tanpa diskriminasi status sosial."
  },
  {
    "id": "tkp-pel-007",
    "subPattern": "sikap-ramah-empati-dan-pengendalian-emosi",
    "difficulty": "sulit",
    "prompt": "Anda melayani seorang pemohon melalui layanan konsultasi video daring yang terus mengulang komplain dengan kata-kata menyudutkan karena frustrasi permohonannya ditolak dua kali sebelumnya akibat berkas teknis tidak sesuai regulasi. Pada saat yang sama, sesi konsultasi berikutnya sudah mengantre lima menit kemudian. Langkah paling tepat adalah ...",
    "options": [
      "Memutus sambungan video secara sepihak setelah menyampaikan alasan penolakan tertulis agar jadwal pemohon lain tidak molor",
      "Menenangkan pemohon, merangkum bagian dokumen yang keliru secara ringkas, mengirim daftar periksa perbaikan lewat obrolan untuk pengajuan ulang, lalu menutup sesi sopan tepat waktu",
      "Meladeni perdebatan panjang lebar mengenai ketidakefektifan aturan pusat hingga seluruh keluhan emosional pemohon habis meskipun antrean berikut terlambat",
      "Meminta pemohon membaca kembali peraturan menteri setebal lima puluh halaman terlebih dahulu sebelum menjadwalkan ulang pertemuan",
      "Mengirimkan tautan video keluhan pemohon ke rekan internal kantor lain supaya mereka ikut menilai sikap kurang sopan warga tersebut"
    ],
    "optionScores": [
      2,
      5,
      4,
      3,
      1
    ],
    "answer": "B",
    "explanation": "Skor 5 memadukan empati emosional (validasi rasa kecewa), solusi terstruktur berbasis checklist konkret sehingga kegagalan ketiga tidak berulang, dan kedisiplinan waktu demi keadilan pemohon antrean berikutnya.",
    "tip": "Dalam layanan daring berjadwal, padukan empati, panduan perbaikan konkret (checklist), dan keadilan waktu antrean."
  },
  {
    "id": "tkp-pel-008",
    "subPattern": "sikap-ramah-empati-dan-pengendalian-emosi",
    "difficulty": "sulit",
    "prompt": "Sebuah video viral di media sosial memelintir potongan kalimat Anda saat menjelaskan penolakan berkas tidak lengkap sehingga publik menuduh instansi mempersulit warga. Padahal Anda sudah menjelaskan sesuai prosedur. Dalam situasi koordinasi layanan besok harinya, sikap paling matang Anda sebagai petugas adalah ...",
    "options": [
      "Berhenti melayani loket tatap muka sementara dan meminta cuti mendadak hingga perbincangan di media sosial menghilang",
      "Membuat video balasan pribadi di akun sendiri yang menyalahkan balik pengunggah video pertama dengan nada sarkastik",
      "Melaporkan kronologi lengkap disertai rekaman pendukung kepada pimpinan dan unit humas untuk klarifikasi faktual resmi yang santun, sambil tetap melayani warga di loket dengan ramah dan profesional",
      "Menunjukkan ekspresi dingin kepada warga yang datang mengurus berkas serupa karena khawatir direkam kembali",
      "Membatalkan penolakan berkas milik pemohon viral tersebut supaya opini warganet langsung berubah positif"
    ],
    "optionScores": [
      3,
      1,
      5,
      2,
      4
    ],
    "answer": "C",
    "explanation": "Skor 5 menjaga ketenangan profesional: tidak terpancing emosi balik di media sosial, menyerahkan klarifikasi kelembagaan secara faktual lewat kanal resmi humas/pimpinan, dan memastikan kualitas pelayanan publik hari berikutnya tetap prima.",
    "tip": "Saat menghadapi tekanan viral, pisahkan klarifikasi faktual resmi kelembagaan dari emosi pribadi, dan pertahankan standar layanan."
  },
  {
    "id": "tkp-pel-009",
    "subPattern": "solusi-cepat-dan-kepatuhan-sop",
    "difficulty": "mudah",
    "prompt": "Seorang pemohon datang mengurus surat keterangan mendesak, tetapi salah satu dokumen pendukung tertinggal di rumah. Namun, ia menyimpan pindaian asli dokumen resmi tersebut dalam aplikasi identitas digital pemerintah. Sesuai ketentuan verifikasi elektronik yang berlaku di instansi Anda, tindakan Anda adalah ...",
    "options": [
      "Tetap mewajibkan pemohon pulang mengambil fotokopi kertas meskipun aturan instansi sudah mengakui verifikasi aplikasi digital resmi",
      "Meminta pemohon menitipkan uang jaminan sementara sampai berkas kertas fisik diserahkan esok hari",
      "Menolak langsung seluruh permohonan tanpa memeriksa apakah dokumen digitalnya dapat diterima oleh regulasi instansi",
      "Memeriksa keabsahan dokumen pada aplikasi digital resmi sesuai SOP dan memproses layanan saat itu juga tanpa membebani warga bolak-balik",
      "Menunggu persetujuan rapat mingguan seluruh kepala seksi sebelum menyentuh permohonan berbantuan dokumen digital"
    ],
    "optionScores": [
      3,
      1,
      2,
      5,
      4
    ],
    "answer": "D",
    "explanation": "Memanfaatkan jalur sah dokumen digital yang sudah diakui SOP menghilangkan birokrasi berbelit, mempercepat layanan, dan meringankan beban waktu/biaya masyarakat (skor 5).",
    "tip": "Utamakan solusi paling efisien yang sudah sah menurut regulasi/SOP digital instansi."
  },
  {
    "id": "tkp-pel-010",
    "subPattern": "solusi-cepat-dan-kepatuhan-sop",
    "difficulty": "mudah",
    "prompt": "Anda mengetahui bahwa alur persetujuan berkas di bagian Anda sebenarnya memiliki dua tahap penandatanganan ganda yang berulang sehingga memperlambat waktu layanan warga hingga tiga hari. Sebagai pelaksana layanan yang ingin memberi dampak baik, sikap Anda adalah ...",
    "options": [
      "Mengabaikan salah satu tahap tanda tangan secara diam-diam tanpa izin atasan supaya berkas warga keluar lebih cepat",
      "Tetap mengikuti alur lambat tersebut apa adanya tanpa pernah mengusulkan perbaikan karena sudah menjadi kebiasaan lama",
      "Menjelaskan kepada warga bahwa keterlambatan tiga hari adalah kesalahan tim tata usaha agar pemohon tidak memprotes loket",
      "Mengurangi jumlah antrean harian warga agar beban kerja penandatanganan ganda tidak terasa terlalu berat",
      "Menyusun catatan analisis kendala alur beserta usulan penyederhanaan SOP kepada atasan, sambil tetap mematuhi SOP aktif selama revisi belum disahkan"
    ],
    "optionScores": [
      2,
      4,
      1,
      3,
      5
    ],
    "answer": "E",
    "explanation": "Skor 5 memadukan kepatuhan pada SOP yang berlaku saat ini (mencegah cacat administrasi) dengan inisiatif konstruktif memperbaiki sistem agar layanan jangka panjang menjadi lebih ringkas.",
    "tip": "Jangan melanggar SOP secara sepihak; patuhi aturan yang berjalan sembari ajukan usulan perbaikan terukur ke pimpinan."
  },
  {
    "id": "tkp-pel-011",
    "subPattern": "solusi-cepat-dan-kepatuhan-sop",
    "difficulty": "sedang",
    "prompt": "Sahabat lama Anda memohon bantuan agar pengajuan izin usahanya diloloskan hari ini meskipun surat rekomendasi teknis dari dinas lingkungan belum terbit, dengan janji surat akan disusulkan pekan depan. Sikap paling tepat Anda adalah ...",
    "options": [
      "Menolak secara santun penerbitan izin sebelum syarat lengkap, menjelaskan dasar hukumnya secara objektif, dan membantu mengarahkan alur percepatan resmi ke dinas lingkungan agar pengajuan lekas memenuhi syarat",
      "Menerima berkas tanpa memprosesnya dulu tetapi memberi kesan seolah-olah izin sudah aman diterbitkan pekan depan",
      "Menyetujui permohonan sahabat lebih dahulu demi menjaga hubungan baik dengan membuatkan catatan janji lisan",
      "Menyarankan sahabat memakai nama pemohon lain saja agar pemeriksaan persyaratan tidak mengaitkan kedekatan Anda",
      "Meminta petugas staf junior yang menandatangani persetujuan awal sementara supaya tanggung jawab langsung tidak melekat pada Anda"
    ],
    "optionScores": [
      5,
      3,
      2,
      1,
      4
    ],
    "answer": "A",
    "explanation": "Skor 5 menegakkan SOP secara adil dan antinepotisme tanpa bersikap ketus, serta tetap solutif memberi panduan resmi ke instansi terkait agar pemohon cepat melengkapi syaratnya.",
    "tip": "Gabungkan ketegasan menolak jalan pintas melanggar SOP dengan bantuan informasi jalur resmi yang konstruktif."
  },
  {
    "id": "tkp-pel-012",
    "subPattern": "solusi-cepat-dan-kepatuhan-sop",
    "difficulty": "sedang",
    "prompt": "Saat sistem jaringan internet pusat terputus mendadak selama dua jam, puluhan pemohon layanan menumpuk di ruang tunggu tanpa kepastian. Sesuai standar layanan yang responsif dan patuh aturan, langkah pertama yang paling tepat Anda lakukan adalah ...",
    "options": [
      "Tetap diam duduk di balik kaca loket mengerjakan arsip pribadi sampai koneksi internet menyala kembali dengan sendirinya",
      "Memberikan pengumuman terbuka secara jujur mengenai estimasi kendala, mengalihkan pekerjaan yang masih bisa diproses secara manual/luring sesuai protokol kontinjensi (pengecekan berkas & tanda terima berkas), serta berkoordinasi dengan tim TI",
      "Memulangkan seluruh pemohon hari itu juga tanpa menerima berkas fisik maupun mencatat kontak untuk dihubungi kembali",
      "Menyuruh warga pindah ke kantor dinas kabupaten tetangga apabila tidak bersedia menunggu tanpa batas waktu",
      "Mengumumkan bahwa gangguan jaringan kemungkinan berlangsung hingga satu minggu ke depan supaya kerumunan langsung bubar"
    ],
    "optionScores": [
      2,
      5,
      3,
      4,
      1
    ],
    "answer": "B",
    "explanation": "Pelayanan responsif mengaktifkan langkah kontinjensi resmi saat gangguan teknis terjadi: komunikasi transparan kepada warga, verifikasi berkas luring/pendataan agar warga tidak sia-sia mengantre, dan eskalasi cepat ke tim TI (skor 5).",
    "tip": "Saat sistem bermasalah, aktifkan komunikasi terbuka + pemrosesan administratif luring sesuai SOP darurat + koordinasi TI."
  },
  {
    "id": "tkp-pel-013",
    "subPattern": "solusi-cepat-dan-kepatuhan-sop",
    "difficulty": "sedang",
    "prompt": "Seorang warga memerlukan legalisasi dokumen penting untuk syarat mendaftar beasiswa yang ditutup sore ini, padahal pejabat penandatangan utama sedang menghadiri rapat di luar kantor. Tindakan solutif terbaik yang tetap menjaga prosedur adalah ...",
    "options": [
      "Meminta warga pasrah menerima batas waktu beasiswa karena pejabat utama baru kembali dua hari lagi",
      "Menandatangani sendiri dokumen atas nama pejabat utama tanpa pelimpahan kewenangan resmi agar proses cepat selesai",
      "Memeriksa kelengkapan berkas warga segera, menghubungi pejabat pelaksana harian (Plh.) yang berwenang atau meminta arahan koordinasi pengesahan kilat sesuai mekanisme delegasi resmi instansi",
      "Menyarankan warga mencari pejabat penandatangan di luar jam rapat secara langsung ke lokasi acara tanpa konfirmasi",
      "Mengganti cap tanggal surat menjadi kemarin agar bisa dilegalisasi minggu depan setelah rapat selesai"
    ],
    "optionScores": [
      3,
      1,
      5,
      4,
      2
    ],
    "answer": "C",
    "explanation": "Skor 5 mencari solusi cepat dalam koridor hukum tata laksana (memanfaatkan pejabat berwenang/Plh. atau koordinasi verifikasi sah), tanpa memalsukan tanda tangan atau bersikap pasif.",
    "tip": "Solusi cepat tidak pernah memalsukan wewenang; manfaatkan mekanisme delegasi/Plh. resmi demi membantu keperluan mendesak warga."
  },
  {
    "id": "tkp-pel-014",
    "subPattern": "solusi-cepat-dan-kepatuhan-sop",
    "difficulty": "sedang",
    "prompt": "Dalam pelayanan perizinan terpadu, Anda menemukan warga membawa dokumen persyaratan lengkap, tetapi formulir yang diisi memakai format versi bulan lalu yang baru diperbarui kemarin tanpa sosialisasi masif ke tingkat kelurahan. Sikap Anda yang paling tepat adalah ...",
    "options": [
      "Menolak langsung formulir lama dan menyuruh warga mengetik ulang di jasa rental luar kantor dengan biaya sendiri",
      "Menempelkan pengumuman kecil bertuliskan format baru di kaca loket lalu meminta warga kembali pekan berikutnya",
      "Memproses saja formulir lama tanpa memindahkannya ke sistem baru sehingga berkas tertahan di tahap verifikasi berikutnya",
      "Menjelaskan perubahan format secara ramah, membantu memindahkan data penting ke formulir terbaru di loket agar tidak bolak-balik, serta mengusulkan sosialisasi format baru ke kelurahan dan situs web",
      "Menyalahkan perangkat kelurahan karena dianggap malas memperbarui berkas untuk warganya"
    ],
    "optionScores": [
      2,
      3,
      1,
      5,
      4
    ],
    "answer": "D",
    "explanation": "Karena perubahan baru terjadi dan belum tersosialisasi luas, petugas berorientasi layanan (skor 5) membantu konversi cepat di loket agar warga tidak dirugikan sekaligus menutup celah sosialisasi ke depan.",
    "tip": "Jika kendala terjadi akibat transisi kebijakan internal yang belum tersosialisasi luas, bantulah warga di tempat dan perbaiki informasinya."
  },
  {
    "id": "tkp-pel-015",
    "subPattern": "solusi-cepat-dan-kepatuhan-sop",
    "difficulty": "sulit",
    "prompt": "Terjadi lonjakan pemohon dua kali lipat menjelang batas akhir program pemutihan administrasi, sementara jumlah komputer loket terbatas dan rekan Anda di bagian pengarsipan kewalahan membantu verifikasi. Langkah manajerial paling efektif yang dapat Anda inisiasi bersama tim adalah ...",
    "options": [
      "Membatasi kuota pelayanan menjadi seperempat dari kapasitas harian dan menutup gerbang masuk sebelum pukul sepuluh pagi",
      "Membiarkan seluruh pemohon mengantre bercampur antara yang berkasnya lengkap dan belum lengkap agar semua merasa sama-sama menunggu",
      "Meminta setiap pemohon menulis sendiri riwayat datanya di kertas terpisah lalu memintanya memeriksa ulang saat bulan depan",
      "Mengusulkan lembur tanpa pembagian tugas baru sehingga tiap pegawai tetap mengerjakan seluruh proses dari awal hingga akhir seorang diri",
      "Membuka meja pra-verifikasi (triage) sederhana untuk mengecek kelengkapan berkas di awal antrean, membagi peran tim secara paralel (input vs cetak), serta menginformasikan jadwal estimasi atau opsi daftar daring resmi"
    ],
    "optionScores": [
      2,
      3,
      1,
      4,
      5
    ],
    "answer": "E",
    "explanation": "Skor 5 menerapkan rekayasa alur kerja layanan nyata: penyaringan kelengkapan di awal (triage), spesialisasi pembagian kerja paralel tim, dan informasi jadwal/kanal daring agar arus antrean terurai tanpa menurunkan ketelitian.",
    "tip": "Saat antrean membeludak, cari opsi berisi perbaikan alur (triage awal, kerja paralel tim, dan informasi kanal alternatif)."
  },
  {
    "id": "tkp-pel-016",
    "subPattern": "solusi-cepat-dan-kepatuhan-sop",
    "difficulty": "sulit",
    "prompt": "Sebuah peraturan teknis baru menimbulkan penafsiran berbeda antara petugas verifikasi berkas dan petugas penerbitan izin hingga membuat pengajuan bantuan usaha mikro tertahan empat hari tanpa kejelasan. Sebagai koordinator teknis layanan, tindakan penyelesaian terbaik Anda adalah ...",
    "options": [
      "Segera mengadakan rapat sinkronisasi singkat antarunit guna menyepakati pedoman tafsir operasional tertulis sesuai regulasi induk, memproses berkas yang tertahan sesuai kesepakatan sah, serta mengabari para pemohon terdampak secara proaktif",
      "Memilih tafsiran salah satu petugas saja secara lisan pada hari itu tanpa mendokumentasikannya untuk kasus serupa berikutnya",
      "Membiarkan berkas tertahan sementara selama sebulan sambil mengirim surat konsultasi tertulis tanpa memberi tahu kejelasan status ke pemohon",
      "Mengembalikan seluruh berkas kepada para pelaku usaha mikro dengan alasan peraturan pusat sedang membingungkan",
      "Menyerahkan keputusan ke masing-masing petugas meja sehingga standar tiap loket menjadi berbeda-beda"
    ],
    "optionScores": [
      5,
      3,
      4,
      2,
      1
    ],
    "answer": "A",
    "explanation": "Skor 5 menyelesaikan akar masalah perbedaan tafsir secara institusional lewat sinkronisasi pedoman tertulis (konsisten dan akuntabel) sekaligus langsung memulihkan kepastian hak para pemohon yang sempat tertahan.",
    "tip": "Konflik multitafsir prosedur harus diselesaikan dengan penyamaan pedoman tertulis antarunit serta komunikasi proaktif ke pemohon."
  },
  {
    "id": "tkp-pel-017",
    "subPattern": "pelayanan-inklusif-dan-kelompok-rentan",
    "difficulty": "mudah",
    "prompt": "Seorang ibu hamil tua dan seorang penyandang disabilitas pengguna kursi roda datang ke ruang tunggu kantor pelayanan yang antreannya mencapai nomor seratus. Sikap Anda yang paling sesuai dengan standar pelayanan inklusif adalah ...",
    "options": [
      "Membiarkan keduanya berdiri menunggu nomor urut seratus supaya seluruh pengunjung dinilai memperoleh nomor antrean yang sama persis",
      "Menyapa ramah dan mengarahkan mereka ke kursi serta loket jalur prioritas kelompok rentan yang tersedia tanpa memungut biaya tambahan",
      "Menyarankan mereka datang kembali esok hari pukul lima pagi agar mendapat nomor antrean paling awal",
      "Meminta pengunjung lain memberi tempat duduknya secara paksa tanpa menyediakan layanan jalur prioritas kantor",
      "Menolak melayani pengguna kursi roda di lantai dasar dan memintanya naik tangga ke lantai dua agar sesuai pembagian ruangan"
    ],
    "optionScores": [
      2,
      5,
      3,
      4,
      1
    ],
    "answer": "B",
    "explanation": "UU Pelayanan Publik mewajibkan penyelenggara menyediakan sarana serta perlakuan prioritas bagi kelompok rentan (disabilitas, lansia, ibu hamil/menyusui) secara bermartabat dan tertib (skor 5).",
    "tip": "Kelompok rentan (disabilitas, lansia, ibu hamil) berhak atas akses fisik ramah dan jalur prioritas layanan resmi."
  },
  {
    "id": "tkp-pel-018",
    "subPattern": "pelayanan-inklusif-dan-kelompok-rentan",
    "difficulty": "mudah",
    "prompt": "Di anjungan layanan mandiri berbasis layar sentuh, seorang kakek berusia lanjut tampak bingung dan takut salah menekan menu hingga beberapa kali hampir pergi membatalkan urusannya. Langkah terbaik Anda adalah ...",
    "options": [
      "Menyuruh kakek tersebut mencari cucu atau anggota keluarga muda untuk mengisikan data dari rumah",
      "Menertawakan kebingungannya secara halus agar suasana tidak terasa tegang lalu meninggalkannya",
      "Menghampiri dengan sopan, membantunya mengoperasikan anjungan langkah demi langkah sambil mengonfirmasi kebenaran setiap data kepada beliau, lalu menyerahkan bukti cetaknya dengan jelas",
      "Mengisikan formulir secara cepat tanpa membacakan atau memastikan kebenaran data pribadi beliau",
      "Meminta beliau mengantre di loket biasa yang panjang meskipun urusannya cukup selesai dalam dua menit di anjungan"
    ],
    "optionScores": [
      3,
      1,
      5,
      2,
      4
    ],
    "answer": "C",
    "explanation": "Layanan inklusif menjembatani kesenjangan literasi digital lansia dengan pendampingan aktif yang penuh hormat serta tetap memastikan keakuratan data pemilik identitas (skor 5).",
    "tip": "Pendampingan teknologi bagi lansia harus dilakukan dengan sabar dan selalu mengonfirmasi keakuratan data bersama pemohon."
  },
  {
    "id": "tkp-pel-019",
    "subPattern": "pelayanan-inklusif-dan-kelompok-rentan",
    "difficulty": "sedang",
    "prompt": "Anda melayani pemohon tunarungu yang datang seorang diri dan tampak kesulitan memahami penjelasan lisan petugas di loket berkaca tebal. Sebagai petugas pelayanan publik, solusi komunikasi yang paling tepat adalah ...",
    "options": [
      "Berbicara jauh lebih keras dan cepat sambil menunjuk papan pengumuman di ujung ruangan",
      "Menyuruh pemohon tersebut pulang membawa penerjemah pribadi karena kantor tidak menyediakan juru bahasa",
      "Meminta pemohon lain di antrean menanyakan keperluannya secara terbuka di depan umum",
      "Menggunakan komunikasi tertulis yang jelas dan ramah (kertas atau papan ketik layar), isyarat visual dasar yang sopan, atau memanggil petugas terlatih/layanan aksesibel yang tersedia hingga pemohon terlayani tuntas",
      "Langsung menerbitkan surat permohonan berdasarkan perkiraan sendiri tanpa konfirmasi keperluannya"
    ],
    "optionScores": [
      2,
      1,
      3,
      5,
      4
    ],
    "answer": "D",
    "explanation": "Skor 5 menghadirkan adaptasi komunikasi nyata (media tulis/layar jelas, bahasa tubuh sopan, atau pendamping khusus) sehingga penyandang disabilitas sensorik tetap terlayani setara, mandiri, dan akurat.",
    "tip": "Hilangkan hambatan komunikasi disabilitas sensorik memakai media tertulis/visual jelas atau pendampingan layanan aksesibel."
  },
  {
    "id": "tkp-pel-020",
    "subPattern": "pelayanan-inklusif-dan-kelompok-rentan",
    "difficulty": "sedang",
    "prompt": "Ketika kantor Anda merenovasi gedung layanan baru, Anda melihat desain tangga masuk belum dilengkapi bidang miring (ram) maupun penanda lantai pemandu bagi penyandang tunanetra. Sebagai anggota tim perencanaan operasional gedung, sikap Anda adalah ...",
    "options": [
      "Membiarkannya karena anggaran renovasi tidak perlu ditambah untuk kebutuhan yang jumlah penggunanya jarang datang",
      "Menganggap fasilitas aksesibel cukup berupa papan pengumuman tulisan besar saja di pintu depan",
      "Menunggu adanya protes komunitas penyandang disabilitas terlebih dahulu baru mengajukan usulan perubahan",
      "Memindahkan lokasi meja layanan sementara ke halaman parkir supaya tidak melewati tangga masuk gedung",
      "Mengusulkan penyesuaian desain agar memenuhi standar aksesibilitas fasilitas publik (ram landai, pegangan, jalur pemandu, dan toilet ramah disabilitas) sesuai amanat peraturan berlaku"
    ],
    "optionScores": [
      1,
      2,
      3,
      4,
      5
    ],
    "answer": "E",
    "explanation": "Membangun layanan publik yang inklusif dimulai dari perancangan infrastruktur yang aksesibel sesuai standar universal sebelum timbul hambatan bagi masyarakat (skor 5).",
    "tip": "Inklusi disabilitas wajib diupayakan secara preventif dalam desain fasilitas umum sebelum warga dirugikan."
  },
  {
    "id": "tkp-pel-021",
    "subPattern": "pelayanan-inklusif-dan-kelompok-rentan",
    "difficulty": "sedang",
    "prompt": "Sebuah program layanan keliling pencatatan sipil dijadwalkan mengunjungi desa terpencil dengan banyak warga lanjut usia yang sakit menahun dan sulit berjalan menuju balai desa. Strategi pelayanan paling berdampak bagi Anda dan tim adalah ...",
    "options": [
      "Tetap menjadwalkan layanan di balai desa sambil berkoordinasi dengan kader/perangkat desa melakukan layanan jemput bola (kunjungan ke rumah) khusus warga sakit berat dan lansia tidak mampu berjalan",
      "Mewajibkan seluruh lansia sakit tetap dibawa keluarganya ke balai desa karena sistem perekaman data tidak boleh berpindah kursi",
      "Membatalkan perekaman bagi warga yang tidak sanggup berjalan ke balai desa hingga waktu tidak ditentukan",
      "Meminta anggota keluarga lansia menandatangani surat permohonan tanpa kehadiran maupun pemeriksaan langsung oleh petugas",
      "Menunda kunjungan desa tersebut sampai seluruh warga sakit dinyatakan sembuh oleh puskesmas setempat"
    ],
    "optionScores": [
      5,
      2,
      3,
      1,
      4
    ],
    "answer": "A",
    "explanation": "Layanan jemput bola berbasis data kader lokal untuk warga sakit berat/rentan adalah standar praktik terbaik pelayanan publik inklusif tanpa mengorbankan validitas verifikasi identitas (skor 5).",
    "tip": "Pelayanan inklusif di lapangan memadukan pos layanan terpusat dengan jemput bola terdata untuk kelompok berkebutuhan khusus."
  },
  {
    "id": "tkp-pel-022",
    "subPattern": "pelayanan-inklusif-dan-kelompok-rentan",
    "difficulty": "sedang",
    "prompt": "Saat melihat seorang pengunjung di ruang tunggu berbisik mengejek cara bicara pemohon penyandang disabilitas intelektual yang sedang Anda layani, tindakan paling etis yang Anda ambil adalah ...",
    "options": [
      "Ikut tersenyum tipis supaya tidak membuat pengunjung lain merasa ditegur oleh petugas kantor",
      "Menjaga suasana tetap bermartabat dengan melayani pemohon secara penuh perhatian, mengingatkan pengunjung ruang tunggu secara santun agar saling menghormati kenyamanan bersama, dan melindungi rasa aman pemohon",
      "Memarahi pengunjung yang mengejek secara kasar hingga memicu keributan panjang di depan loket layanan",
      "Mempercepat pengisian berkas pemohon disabilitas secara asal agar ia lekas keluar dari ruang tunggu",
      "Memindahkan pemohon disabilitas ke ruangan gudang arsip sebelah supaya terhindar dari tatapan pengunjung lain"
    ],
    "optionScores": [
      1,
      5,
      3,
      2,
      4
    ],
    "answer": "B",
    "explanation": "Skor 5 menegakkan etika antardiskriminasi sekaligus melindungi martabat psikologis pemohon rentan lewat teguran santun dan pelayanan fokus penuh hormat.",
    "tip": "Lindungi martabat kelompok rentan secara bermartabat dan santun tanpa memicu keributan maupun mengucilkan korban."
  },
  {
    "id": "tkp-pel-023",
    "subPattern": "pelayanan-inklusif-dan-kelompok-rentan",
    "difficulty": "sulit",
    "prompt": "Instansi Anda meluncurkan situs web layanan terpadu baru, tetapi komunitas disabilitas netra melaporkan bahwa formulir daring tersebut tidak dapat dibaca perangkat lunak pembaca layar (screen reader) dan tombol kontras warnanya terlalu pudar. Sebagai penanggung jawab mutu layanan digital, respons paling tepat adalah ...",
    "options": [
      "Menjawab keluhan bahwa pemohon tunanetra sebaiknya meminta bantuan kerabat saja saat mengisi formulir daring",
      "Menyatakan situs web telah selesai 100% sesuai proyek tahun lalu sehingga perubahan tampilan belum dapat dikerjakan tahun ini",
      "Menerima laporan dengan apresiasi, langsung melibatkan perwakilan komunitas disabilitas dalam uji coba aksesibilitas, lalu menugaskan tim pengembang memperbaiki struktur HTML semantik, label pembaca layar, serta kontras warna secara bertahap dan terukur",
      "Menonaktifkan seluruh formulir daring tersebut selamanya dan mengembalikan semua warga ke antrean formulir kertas fisik",
      "Menyediakan satu tautan kontak surel pribadi petugas untuk melayani warga tunanetra tanpa memperbaiki situs utamanya"
    ],
    "optionScores": [
      2,
      1,
      5,
      3,
      4
    ],
    "answer": "C",
    "explanation": "Aksesibilitas digital (web accessibility) merupakan hak kesetaraan layanan modern. Melibatkan pengguna disabilitas langsung saat perbaikan teknis dan membenahi akar masalah pada kode/antarmuka adalah solusi paling berkelanjutan dan berkeadilan (skor 5).",
    "tip": "Prinsip layanan inklusif digital: dengar masukan komunitas terdampak, libatkan uji aksesibilitas, dan perbaiki akar desain."
  },
  {
    "id": "tkp-pel-024",
    "subPattern": "pelayanan-inklusif-dan-kelompok-rentan",
    "difficulty": "sulit",
    "prompt": "Di wilayah perbatasan dengan penduduk beragam suku dan tingkat literasi bahasa Indonesia formal yang belum merata, banyak warga asli setempat enggan mengurus dokumen legalitas karena takut merasa terasing saat diwawancarai petugas pendatang. Pendekatan pelayanan publik terbaik agar hak warga terpenuhi adalah ...",
    "options": [
      "Menyerahkan seluruh pendataan kependudukan wilayah tersebut tanpa pendampingan kepada tokoh adat untuk dikumpulkan sendiri kapan pun siap",
      "Tetap menggunakan istilah hukum kaku bahasa Indonesia saja karena bahasa resmi negara tidak perlu dijelaskan secara lokal",
      "Mewajibkan seluruh warga yang belum fasih berbahasa Indonesia formal mengikuti ujian membaca dahulu sebelum dilayani",
      "Menyediakan materi informasi visual dwibahasa yang ramah dipahami, menggandeng petugas pendamping atau tokoh lokal terpercaya sebagai penerjemah komunikasi, serta melayani penuh ketulusan tanpa nada merendahkan",
      "Menunda program legalitas di wilayah terpencil sampai sekolah dasar di daerah tersebut berhasil meluluskan satu generasi baru"
    ],
    "optionScores": [
      3,
      2,
      1,
      5,
      4
    ],
    "answer": "D",
    "explanation": "Menghadirkan informasi visual sederhana/dwibahasa dengan dukungan pendamping komunikasi lokal menjamin pesan aturan negara dipahami akurat sambil tetap menghormati masyarakat setempat (skor 5).",
    "tip": "Atasi kendala literasi wilayah terpencil dengan pendekatan visual jelas dan pendamping lokal, tetap dalam standar sah."
  },
  {
    "id": "tkp-pel-025",
    "subPattern": "transparansi-standar-dan-bebas-pungli",
    "difficulty": "mudah",
    "prompt": "Setelah dokumen kependudukannya selesai lebih cepat dari perkiraan, seorang warga menyelipkan uang Rp100.000 ke saku jaket Anda sambil berkata \"ini sekadar ucapan terima kasih beli kopi\". Layanan tersebut sebenarnya gratis tanpa biaya apa pun. Sikap Anda adalah ...",
    "options": [
      "Menerima uang tersebut karena pemohon memberikannya dengan tulus ikhlas setelah pelayanan benar-benar usai tanpa paksaan",
      "Menitipkan uang itu kepada satpam pintu keluar agar seolah-olah bukan Anda yang menerimanya langsung",
      "Menyimpannya sementara untuk membelikan camilan rekan kerja loket saat rapat istirahat siang bersama",
      "Menolak uang itu dengan nada tersinggung dan mempermalukan pemohon di depan antrean warga lainnya",
      "Menolak uang tersebut secara sopan namun tegas, menjelaskan bahwa seluruh layanan ini gratis sesuai ketentuan dan kepuasan warga sudah merupakan penghargaan terbaik bagi petugas"
    ],
    "optionScores": [
      1,
      2,
      3,
      4,
      5
    ],
    "answer": "E",
    "explanation": "Menolak pemberian terima kasih atas layanan gratis dengan sikap santun, tegas, dan edukatif memutus budaya uang pelicin/gratifikasi tanpa menyinggung martabat warga (skor 5).",
    "tip": "Tolak setiap uang terima kasih/tip pada pelayanan publik secara santun, tegas, dan tidak mempermalukan warga."
  },
  {
    "id": "tkp-pel-026",
    "subPattern": "transparansi-standar-dan-bebas-pungli",
    "difficulty": "mudah",
    "prompt": "Menurut Anda, cara paling efektif agar masyarakat di kantor pelayanan terhindar dari praktik percaloan dan pungutan liar adalah ...",
    "options": [
      "Memasang informasi syarat, tarif resmi, estimasi waktu layanan secara terbuka (cetak & digital), menyediakan mekanisme antrean dan lacak status transparan, serta menindak tegas calo dengan aturan jelas",
      "Membatasi papan informasi aturan supaya hanya petugas loket yang menjelaskan isi persyaratan secara lisan bila ditanya",
      "Menyediakan loket khusus tersembunyi untuk biro jasa perantara resmi yang mengurus berkas warga secara cepat",
      "Menutup akses pengaduan publik agar reputasi kantor tetap tampak bersih di media sosial",
      "Membiarkan warga memilih sendiri apakah ingin mengurus langsung lewat antrean panjang atau menggunakan perantara luar"
    ],
    "optionScores": [
      5,
      3,
      2,
      1,
      4
    ],
    "answer": "A",
    "explanation": "Calo tumbuh subur saat informasi syarat, biaya, dan durasi kabur. Keterbukaan standar layanan (maklumat pelayanan), kejelasan tarif/PNBP resmi, serta pelacakan status antrean menutup ruang gerak calo secara sistemik (skor 5).",
    "tip": "Obat paling ampuh melawan calo dan pungli adalah transparansi syarat, biaya, waktu, dan jejak status layanan."
  },
  {
    "id": "tkp-pel-027",
    "subPattern": "transparansi-standar-dan-bebas-pungli",
    "difficulty": "sedang",
    "prompt": "Seorang pemohon menanyakan mengapa pengajuan izinnya memakan waktu 5 hari kerja sedangkan pengajuan tetangganya yang mengurus dokumen berbeda selesai dalam 2 hari. Agar tercipta keterbukaan informasi tanpa prasangka, sikap Anda adalah ...",
    "options": [
      "Menjawab pendek bahwa tiap orang memiliki keberuntungan antrean masing-masing yang tidak dapat dibandingkan",
      "Menjelaskan secara transparan perbedaan klasifikasi risiko layanan sesuai standar waktu (SLA) masing-masing jenis izin, menunjukkan rincian alur di papan/situs resmi, serta memberikan nomor resi pelacakan status berkasnya",
      "Mengalihkan pembicaraan dengan menyatakan bahwa berkasnya lebih lambat karena tulisan tangannya kurang rapi",
      "Meminta pemohon tersebut menanyakan langsung selisih harinya ke tetangga yang bersangkutan",
      "Berjanji memotong alur verifikasi izinnya agar bisa keluar dalam dua hari supaya pemohon tidak bertanya lagi"
    ],
    "optionScores": [
      2,
      5,
      1,
      3,
      4
    ],
    "answer": "B",
    "explanation": "Transparansi standar waktu (SLA) per jenis layanan disertai bukti resi pelacakan menumbuhkan kepercayaan publik bahwa instansi bekerja berdasar aturan objektif, bukan diskriminasi (skor 5).",
    "tip": "Jawab kecurigaan publik dengan data standar waktu resmi (SLA) dan fasilitas pelacakan status berkas yang terbuka."
  },
  {
    "id": "tkp-pel-028",
    "subPattern": "transparansi-standar-dan-bebas-pungli",
    "difficulty": "sedang",
    "prompt": "Anda memergoki petugas honorer baru di gerbang depan menerima imbalan uang dari pemohon yang ingin dibantu mencetakkan formulir gratis padahal layanan cetak sudah disediakan kantor tanpa biaya. Langkah terbaik Anda adalah ...",
    "options": [
      "Mendiamkannya karena petugas honorer tersebut berpenghasilan kecil dan hanya membantu mencetak dokumen",
      "Memarahi petugas honorer tersebut di hadapan seluruh warga antrean lalu merampas uangnya untuk kas unit",
      "Mengingatkan petugas tersebut secara personal bahwa hal itu dilarang, mengembalikan uang kepada pemohon dengan permintaan maaf dan menegaskan layanan bebas biaya, serta melaporkan temuan ke atasan untuk pembinaan disiplin dan pemasangan rambu bebas pungli",
      "Mencatat namanya diam-diam untuk menjadikannya bahan sindiran dalam pertemuan informal staf",
      "Meminta bagian setengah dari uang tersebut untuk membeli persediaan kertas tambahan bagi loket"
    ],
    "optionScores": [
      2,
      3,
      5,
      4,
      1
    ],
    "answer": "C",
    "explanation": "Skor 5 mengembalikan hak warga secara bermartabat, mengedukasi etika bebas pungli secara tegas namun manusiawi, dan menutup celah berulang lewat pelaporan pembinaan serta pemasangan informasi rambu biaya resmi.",
    "tip": "Integritas pelayanan memulihkan hak warga yang dirugikan, membina pelanggar secara prosedural, dan memperkuat rambu informasi."
  },
  {
    "id": "tkp-pel-029",
    "subPattern": "transparansi-standar-dan-bebas-pungli",
    "difficulty": "sedang",
    "prompt": "Sesuai ketentuan tarif resmi layanan penerbitan dokumen, pemohon wajib membayar retribusi melalui kanal nontunai (virtual account/QRIS negara), namun seorang pemohon menyerahkan uang tunai langsung ke tangan Anda dengan alasan tidak membawa kartu ATM. Tindakan paling aman dan berintegritas adalah ...",
    "options": [
      "Menerima uang tunainya dahulu lalu mentransferkan dari rekening pribadi Anda dengan menyisihkan selisih pembulatan untuk jasa bantuan",
      "Menerima uang tunainya dan menyimpannya di laci meja untuk disetorkan ke bank akhir bulan bersama berkas lain",
      "Menolak pemohon pulang tanpa memberi tahu alternatif kanal bayar yang mudah dijangkau di sekitar lokasi",
      "Menolak penerimaan uang tunai langsung di loket secara sopan, menerbitkan kode bayar resmi sesuai tagihan, dan memandu pemohon menyetor melalui kasir bank/gerai pembayaran resmi yang terhubung langsung ke kas negara",
      "Menggunakan kupon pembayaran milik pemohon lain agar tagihan hari itu tertutupi dahulu secara lisan"
    ],
    "optionScores": [
      3,
      1,
      2,
      5,
      4
    ],
    "answer": "D",
    "explanation": "Mencegah uang tunai melintas di meja petugas loket (no cash handling) menghindari potensi salah hitung maupun dugaan pungli, sembari memandu ke kanal setor resmi yang masuk kas negara secara transparan (skor 5).",
    "tip": "Hindari menerima uang tunai pribadi di loket; selalu arahkan transaksi lewat kanal pembayaran resmi langsung ke kas negara/daerah."
  },
  {
    "id": "tkp-pel-030",
    "subPattern": "transparansi-standar-dan-bebas-pungli",
    "difficulty": "sedang",
    "prompt": "Dalam pelaporan hasil survei kepuasan masyarakat (SKM) triwulanan di unit Anda, rekan tim mengusulkan menyaring hanya responden yang tampak puas agar skor unit tetap meraih predikat terbaik kabupaten. Sikap berintegritas Anda adalah ...",
    "options": [
      "Menyetujui usulan itu khusus untuk laporan eksternal sambil menyimpan keluhan asli sebagai catatan pribadi",
      "Membantu memilih sebagian responden yang tidak banyak berkomentar supaya pengisian survei berlangsung cepat",
      "Membiarkan rekan melakukannya sendiri asalkan nama Anda tidak dicantumkan sebagai penanggung jawab pengumpul data",
      "Menghapus hasil survei seluruh warga yang permohonannya ditolak supaya angka tidak terpengaruh kekecewaan pemohon",
      "Menolak manipulasi sampel survei, memastikan pengisian SKM dilakukan terbuka acak oleh seluruh pemohon, dan menjadikan masukan kritis sebagai bahan perbaikan nyata layanan"
    ],
    "optionScores": [
      3,
      2,
      4,
      1,
      5
    ],
    "answer": "E",
    "explanation": "Survei Kepuasan Masyarakat berguna memperbaiki mutu layanan publik secara jujur. Memanipulasi sampel demi citra rapor palsu merusak akuntabilitas instansi dan menutup peluang evaluasi nyata (skor 5).",
    "tip": "Transparansi evaluasi menuntut data objektif dan apa adanya, bukan manipulasi nilai demi citra semu."
  },
  {
    "id": "tkp-pel-031",
    "subPattern": "transparansi-standar-dan-bebas-pungli",
    "difficulty": "sulit",
    "prompt": "Seorang kontraktor rekanan lama kantor Anda menghubungi lewat pesan pribadi meminta informasi awal mengenai nilai perkiraan pemenang dan kelemahan dokumen pesaing sebelum pengumuman lelang diterbitkan resmi, sambil menjanjikan peningkatan dana bantuan kegiatan sosial pegawai akhir tahun. Sebagai bagian unit layanan pengadaan, tindakan paling berintegritas adalah ...",
    "options": [
      "Menolak tegas permintaan tersebut sebagai informasi rahasia proses pengadaan, memutus komunikasi pribadi di luar sistem e-procurement, dan mencatat atau melaporkan upaya intervensi tersebut kepada pimpinan pengadaan/UPG agar keadilan lelang terjaga",
      "Memberikan gambaran umum kisaran angka tanpa menyebut angka eksak supaya kontrak tidak tampak bocor",
      "Hanya membalas pesan dengan ramah tanpa melaporkan upaya pendekatan tersebut kepada pihak pengawas mana pun",
      "Mengizinkan rekanan tersebut melihat dokumen pesaing sebatas halaman identitas perusahaan agar persiapan lebih adil",
      "Meminta rekanan menyalurkan dana kegiatan sosial pegawai lebih dahulu sebelum membahas peluang lelang"
    ],
    "optionScores": [
      5,
      2,
      4,
      3,
      1
    ],
    "answer": "A",
    "explanation": "Membocorkan evaluasi lelang melanggar hukum pengadaan dan konflik kepentingan; menolak tegas, mengembalikan seluruh komunikasi ke jalur resmi e-procurement, dan melapor ke atasan/UPG menjamin akuntabilitas bersih (skor 5).",
    "tip": "Jaga kerahasiaan data tender/layanan strategis dari kontak informal, dan laporkan setiap upaya intervensi/suap terselubung."
  },
  {
    "id": "tkp-pel-032",
    "subPattern": "transparansi-standar-dan-bebas-pungli",
    "difficulty": "sulit",
    "prompt": "Pada portal keterbukaan aduan instansi, masuk laporan anonim lengkap disertai foto tanda bukti yang menuduh salah satu rekan dekat Anda memungut biaya tambahan pembuatan surat keterangan. Sebagai petugas pengelola pengaduan berintegritas, langkah tepat Anda adalah ...",
    "options": [
      "Menghapus laporan anonim tersebut karena pengadu tidak berani mencantumkan nama lengkap dan alamat aslinya",
      "Memverifikasi bukti aduan secara objektif tanpa memberitahu atau membela rekan sebelum diperiksa, lalu meneruskannya ke atasan pemeriksa/inspektorat internal sesuai SOP kerahasiaan pengaduan",
      "Langsung menelepon rekan tersebut dan memberitahu rincian foto bukti agar ia bisa segera merapikan alibinya",
      "Menyebarkan foto bukti aduan itu di grup percakapan umum pegawai sebagai bahan peringatan terbuka tanpa prosedur klarifikasi",
      "Membiarkan tiket pengaduan berstatus menunggu tanpa tindak lanjut hingga akhir periode pelaporan tahunan"
    ],
    "optionScores": [
      1,
      5,
      2,
      3,
      4
    ],
    "answer": "B",
    "explanation": "Integritas pengelola pengaduan menuntut independensi dari relasi pribadi (konflik kepentingan), kerahasiaan pelapor dan proses bukti agar tidak dirusak pelaku, serta penyampaian ke pemeriksa berwenang secara objektif (skor 5).",
    "tip": "Kelola aduan terhadap rekan kerja secara independen, rahasia, dan berbasis verifikasi bukti ke unit pemeriksa berwenang."
  },
  {
    "id": "tkp-pel-033",
    "subPattern": "penanganan-keluhan-dan-evaluasi-mutu",
    "difficulty": "mudah",
    "prompt": "Seorang warga menuliskan ulasan bintang satu di portal pengaduan publik karena merasa petugas loket terlalu lama memproses permohonannya akibat sistem sempat lambat di pagi hari. Tindakan paling konstruktif dari unit Anda adalah ...",
    "options": [
      "Mengabaikan ulasan bintang satu karena sudah biasa dalam layanan masyarakat yang jumlah pengunjungnya banyak",
      "Meminta pengelola portal menghapus komentar negatif tersebut karena mencoreng reputasi dinas",
      "Menanggapi ulasan secara sopan dan berterima kasih atas masukannya, menjelaskan upaya percepatan yang sudah dilakukan, lalu mengevaluasi kendala sistem pagi hari agar tidak terulang",
      "Menghubungi nomor telepon pelapor untuk menuntutnya mengganti ulasan menjadi bintang lima",
      "Menyalahkan jaringan penyedia telekomunikasi secara defensif dalam balasan ulasan tanpa rencana perbaikan internal"
    ],
    "optionScores": [
      2,
      1,
      5,
      3,
      4
    ],
    "answer": "C",
    "explanation": "Umpan balik negatif adalah bahan evaluasi perbaikan mutu. Respons santun, akuntabel, tidak defensif, dan fokus pada perbaikan akar kendala membangun kepercayaan masyarakat (skor 5).",
    "tip": "Lihat keluhan sebagai data perbaikan mutu, bukan serangan pribadi; jawab dengan santun, akuntabel, dan perbaiki akarnya."
  },
  {
    "id": "tkp-pel-034",
    "subPattern": "penanganan-keluhan-dan-evaluasi-mutu",
    "difficulty": "mudah",
    "prompt": "Akibat kesalahan input pegawai loket, nama pemilik pada surat izin yang baru terbit tertulis keliru satu huruf sehingga pemohon kembali datang mengadu. Sikap paling bertanggung jawab adalah ...",
    "options": [
      "Menyuruh pemohon memakai surat yang salah ketik dulu dengan alasan perbedaan satu huruf tidak memengaruhi isi inti dokumen",
      "Menuduh pemohon menulis kurang jelas di formulir awal sehingga bukan kesalahan petugas loket",
      "Meminta pemohon mendaftar ulang antrean baru dari nomor akhir dan membayar biaya administrasi cetak ulang",
      "Segera meminta maaf secara tulus atas kekeliruan petugas, memprioritaskan perbaikan dan pencetakan ulang saat itu juga tanpa biaya, serta mengevaluasi ketelitian verifikasi ulang bersama pemohon sebelum cetak",
      "Mencoret huruf yang salah memakai pulpen di tempat lalu membubuhkan paraf biasa tanpa menerbitkan dokumen resmi baru"
    ],
    "optionScores": [
      2,
      1,
      3,
      5,
      4
    ],
    "answer": "D",
    "explanation": "Mengakui kesalahan instansi secara tulus, langsung memperbaiki layanan tanpa membebani warga ulang (zero-cost recovery), dan memperbaiki mekanisme cek akhir mencerminkan tanggung jawab profesional tinggi (skor 5).",
    "tip": "Saat kekeliruan berasal dari pihak internal, akui jujur, perbaiki cepat tanpa membebani warga lagi, dan perbaiki titik kontrolnya."
  },
  {
    "id": "tkp-pel-035",
    "subPattern": "penanganan-keluhan-dan-evaluasi-mutu",
    "difficulty": "sedang",
    "prompt": "Setiap hari Senin pagi, kotak keluhan fisik di kantor Anda selalu penuh berisi keluhan senada tentang ruang tunggu yang panas dan kurangnya petunjuk arah loket ke-3 dan ke-4. Sebagai anggota tim pelayanan, langkah perbaikan nyata yang paling tepat adalah ...",
    "options": [
      "Mengosongkan isi kotak keluhan setiap minggu lalu menyimpannya di gudang tanpa pernah membacakannya pada rapat mingguan",
      "Memasang kipas angin seadanya dari barang bekas gudang sambil tetap membiarkan petunjuk arah tidak lengkap",
      "Menjelaskan kepada pemohon bahwa ruangan sempit merupakan keterbatasan gedung tua yang sulit diubah",
      "Mengirimkan foto tumpukan keluhan itu ke bagian keuangan tanpa disertai usulan perbaikan konkret apa pun",
      "Merekapitulasi keluhan berulang dengan data frekuensi, merancang penunjuk arah visual yang jelas sebagai solusi cepat berbiaya rendah, sekaligus mengajukan perbaikan pendingin ruang tunggu dalam rapat evaluasi pimpinan"
    ],
    "optionScores": [
      1,
      3,
      2,
      4,
      5
    ],
    "answer": "E",
    "explanation": "Skor 5 memadukan pengumpulan bukti keluhan (berbasis data), perbaikan cepat yang langsung bisa dilakukan (signage/penunjuk arah), dan pengajuan solusi fasilitas secara terencana ke pimpinan.",
    "tip": "Kelompokkan keluhan berulang menjadi data evaluasi, lakukan perbaikan cepat berdaya dampak langsung, dan ajukan pembenahan strukturalnya."
  },
  {
    "id": "tkp-pel-036",
    "subPattern": "penanganan-keluhan-dan-evaluasi-mutu",
    "difficulty": "sedang",
    "prompt": "Seorang pemohon mengeluhkan bahwa nomor layanan panggilan telepon kantor tidak pernah diangkat saat jam sibuk pagi, padahal instansi selalu mencantumkan nomor tersebut pada situs resminya. Tindakan korektif paling tepat agar pengaduan dan konsultasi tetap responsif adalah ...",
    "options": [
      "Menjadwalkan piket petugas penerima panggilan secara bergilir terukur, menambahkan kanal respons otomatis terstruktur (FAQ/WhatsApp resmi) untuk pertanyaan umum, dan memantau tingkat panggilan terjawab setiap pekan",
      "Menghapus nomor telepon resmi dari situs web instansi supaya warga tidak kecewa ketika gagal menghubungi",
      "Membiarkan telepon berdering saat jam sibuk karena melayani pemohon tatap muka jauh lebih penting daripada penelepon",
      "Mengalihkan nada sambung panggilan menjadi pesan suara otomatis tanpa ada petugas yang memantau balasannya",
      "Memasang jadwal jam menelepon hanya pukul dua sampai tiga siang setiap hari Jumat saja"
    ],
    "optionScores": [
      5,
      1,
      3,
      4,
      2
    ],
    "answer": "A",
    "explanation": "Skor 5 menyelesaikan masalah ketidakterjangkauan kanal komunikasi resmi dengan tata kelola piket terukur, inovasi FAQ digital resmi, serta pemantauan kinerja layanan.",
    "tip": "Setiap kanal layanan yang dipublikasikan resmi wajib dikelola dengan penjadwalan petugas, sistem respons, dan pemantauan rutin."
  },
  {
    "id": "tkp-pel-037",
    "subPattern": "penanganan-keluhan-dan-evaluasi-mutu",
    "difficulty": "sedang",
    "prompt": "Rekan kerja di tim layanan sering menunda menutup tiket aduan masyarakat hingga berhari-hari hanya karena menunggu jawaban formal dari seksi lain yang tidak kunjung merespons, sementara pelapor terus menanyakan progresnya. Sebagai rekan sejawat dalam tim layanan, sikap paling proaktif adalah ...",
    "options": [
      "Menutup paksa tiket pengaduan tersebut dengan keterangan selesai agar persentase kecepatan layanan tampak baik di laporan",
      "Membantu menindaklanjuti langsung koordinasi lintas seksi guna mempercepat kepastian informasi teknis sekaligus memberikan pembaruan status berkala kepada warga pengadu agar tidak merasa diabaikan",
      "Menyarankan rekan membiarkan tiket menumpuk hingga pimpinan sendiri yang turun tangan menegur seksi lambat tersebut",
      "Menyampaikan keluhan kepada warga bahwa seksi teknis lain di kantor memang terkenal sangat lamban bekerja",
      "Mengubah batas waktu penyelesaian standar pada sistem pelaporan menjadi enam puluh hari agar tiket tidak terlihat terlambat"
    ],
    "optionScores": [
      1,
      5,
      3,
      2,
      4
    ],
    "answer": "B",
    "explanation": "Skor 5 menunjukkan kepemilikan tanggung jawab layanan (ownership): memfasilitasi percepatan koordinasi lintas unit dan menjaga komunikasi status jujur kepada pemohon tanpa merusak akuntabilitas tiket maupun citra lembaga.",
    "tip": "Jangan memanipulasi status tiket maupun menyalahkan unit lain ke publik; kejar eskalasi internal dan update jujur kepada warga."
  },
  {
    "id": "tkp-pel-038",
    "subPattern": "penanganan-keluhan-dan-evaluasi-mutu",
    "difficulty": "sedang",
    "prompt": "Dalam rapat evaluasi triwulanan, atasan meminta ide inovatif sederhana untuk menurunkan angka keluhan warga tentang ketidakpastian status berkas setelah diserahkan di loket penerimaan. Usulan terbaik yang paling mudah dijalankan dan berdampak luas adalah ...",
    "options": [
      "Mewajibkan warga menelepon kantor setiap dua hari sekali untuk menanyakan langsung progres berkas kepada petugas",
      "Menyeragamkan semua estimasi pengerjaan dokumen menjadi dua minggu agar tidak ada warga yang menuntut cepat",
      "Menerapkan tanda terima berkode pelacakan daring/notifikasi pesan singkat otomatis di setiap pergantian tahap proses agar pemohon bisa memantau berkas secara mandiri tanpa perlu datang atau menebak-nebak",
      "Menyediakan papan pengumuman tulis tangan harian di teras depan kantor untuk menempel ratusan nama pemohon",
      "Menghapus kolom tanggal perkiraan selesai di lembar tanda terima supaya warga tidak memiliki dasar waktu untuk mengeluh"
    ],
    "optionScores": [
      3,
      2,
      5,
      4,
      1
    ],
    "answer": "C",
    "explanation": "Ketidakpastian status adalah sumber utama kecemasan pemohon. Fitur lacak status mandiri dan notifikasi tahap layanan meningkatkan transparansi, mengurangi antrean pertanyaan berulang, serta menaikkan kepuasan publik (skor 5).",
    "tip": "Inovasi layanan terbaik selalu memotong ketidakpastian warga melalui informasi real-time atau pelacakan mandiri."
  },
  {
    "id": "tkp-pel-039",
    "subPattern": "penanganan-keluhan-dan-evaluasi-mutu",
    "difficulty": "sulit",
    "prompt": "Setelah sistem layanan daring baru berjalan sebulan, laporan menunjukkan jumlah permohonan selesai meningkat 30%, namun tingkat kepuasan warga justru turun akibat kesulitan melacak alasan penolakan berkas dan lambatnya tanggapan kotak obrolan bantu. Analisis mutu dan tindakan paling tepat adalah ...",
    "options": [
      "Menghentikan sistem layanan daring karena terbukti kepuasan masyarakat selalu lebih tinggi saat memakai cara kertas manual",
      "Mempertahankan sistem apa adanya karena kenaikan 30% jumlah permohonan selesai sudah membuktikan keberhasilan program sepenuhnya",
      "Memfokuskan petugas menjawab ulasan pujian di media sosial saja sambil menunda perbaikan sistem pesan bantuan selama satu tahun",
      "Mengevaluasi titik kegagalan pengalaman pengguna (user experience), memperjelas redaksi otomatis alasan penolakan disertai panduan koreksi spesifik, dan menjadwalkan petugas respons obrolan bantu sesuai standar waktu layanan",
      "Membatasi jam aktif kotak obrolan bantu daring menjadi satu jam per minggu supaya beban balasan petugas berkurang drastis"
    ],
    "optionScores": [
      2,
      3,
      1,
      5,
      4
    ],
    "answer": "D",
    "explanation": "Keberhasilan layanan digital bukan hanya volume pemrosesan (kuantitas), melainkan kejelasan umpan balik dan keandalan bantuan ketika pemohon menemui kendala (kualitas pengalaman pengguna). Skor 5 membenahi tepat di kedua titik lemah tersebut.",
    "tip": "Evaluasi layanan publik modern harus menyandingkan capaian volume (kuantitas) dengan kemudahan dan kejelasan solusi bagi pengguna (kualitas)."
  },
  {
    "id": "tkp-pel-040",
    "subPattern": "penanganan-keluhan-dan-evaluasi-mutu",
    "difficulty": "sulit",
    "prompt": "Anda ditunjuk memimpin gugus kendali mutu pelayanan. Saat mengaudit standar operasional yang sudah berumur delapan tahun, Anda menemukan beberapa syarat berkas fotokopi yang sebenarnya datanya sudah terintegrasi antarinstansi pemerintah melalui basis data induk kependudukan. Langkah strategis jangka panjang yang paling tepat Anda tempuh adalah ...",
    "options": [
      "Mempertahankan seluruh syarat fotokopi lama supaya pegawai tetap memiliki arsip cadangan fisik di setiap lemari gedung",
      "Langsung menghapus kewajiban fotokopi lewat pengumuman lisan di loket besok tanpa mengubah dokumen regulasi atau menguji integrasi data",
      "Mengusulkan syarat fotokopi dilegalisasi ganda agar keaslian berkas cetak lebih terjamin sepanjang masa",
      "Mengganti seluruh petugas verifikasi dengan sistem otomatis penuh dalam satu malam tanpa pelatihan atau sosialisasi ke daerah",
      "Mengusulkan revisi penyederhanaan SOP berbasis integrasi data resmi (once-only principle), menguji keandalan koneksi sinkronisasi antarsistem, serta menyiapkan masa transisi dan sosialisasi yang jelas"
    ],
    "optionScores": [
      2,
      3,
      1,
      4,
      5
    ],
    "answer": "E",
    "explanation": "Prinsip layanan modern sekali serah data (once-only principle) menuntut pemangkasan syarat kertas redundan melalui revisi SOP sah, pengujian teknis keandalan integrasi sistem, dan komunikasi masa transisi agar mutu tetap terjaga aman (skor 5).",
    "tip": "Reformasi birokrasi pelayanan menggabungkan pemangkasan syarat berulang (once-only data), kesiapan regulasi SOP, dan uji keandalan teknis."
  }
];

export const pelayananPublikQuestions: readonly Question[] = buildTkpPatternQuestions(
  "pelayanan-publik",
  pelayananPublikDrafts,
);
