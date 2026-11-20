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
      "Menyambut warga dengan tenang, menyimak keluhannya, menjelaskan kendala sistem, dan segera memproses berkasnya.",
      "Bersikap netral di loket dengan meminta warga meredakan suaranya agar tertib, lalu menyarankan datang kembali setelah sistem pulih.",
      "Menanggapi keluhannya dengan sopan dan tetap tenang, menjelaskan pembaruan sistem pusat, lalu mempersilakannya menunggu giliran.",
      "Memanggil petugas keamanan ruangan untuk mengarahkan warga keluar dari area tunggu karena nadanya dianggap mengganggu pengunjung lain.",
      "Menjawab singkat bahwa gangguan berasal dari sistem pusat sehingga petugas loket hanya dapat menunggu hingga jaringan kembali normal."
    ],
    "optionScores": [
      5,
      3,
      4,
      1,
      2
    ],
    "answer": "A",
    "explanation": "Skor tertinggi memadukan ketenangan emosional, kesediaan menyimak, penjelasan kendala secara jelas, dan tindakan langsung menyelesaikan urusan warga. Pilihan terbaik kedua bersikap sopan dan menjelaskan aturan sistem, tetapi berhenti pada meminta warga menunggu tanpa mengupayakan penyelesaian konkret di tempat.",
    "tip": "Pada situasi warga emosi, cari respons yang tenang, empatik, komunikatif, sekaligus menawarkan penyelesaian konkret."
  },
  {
    "id": "tkp-pel-002",
    "subPattern": "sikap-ramah-empati-dan-pengendalian-emosi",
    "difficulty": "mudah",
    "prompt": "Jam pelayanan resmi loket tinggal lima menit lagi berakhir, sementara masih ada seorang pemohon dari kecamatan jauh yang tampak kelelahan membawa map dokumen yang sudah lengkap. Tindakan Anda adalah ...",
    "options": [
      "Mengarahkan pemohon menaruh map di meja informasi tanpa pemeriksaan awal karena petugas loket sudah mulai membereskan meja kerja.",
      "Tetap menyambut ramah dan memeriksa berkasnya hingga tuntas mengikuti prosedur karena masih berada di jam layanan resmi.",
      "Menutup jendela loket beberapa menit lebih awal agar rekapitulasi berkas harian petugas selesai tepat waktu.",
      "Menerima mapnya dengan sopan untuk dicek kelengkapan awal, lalu menyarankan pemohon kembali besok pagi agar proses lebih tenang.",
      "Menyampaikan dengan tenang bahwa loket hampir tutup sehingga pengajuan berkas sebaiknya dilakukan pada hari kerja berikutnya."
    ],
    "optionScores": [
      2,
      5,
      1,
      4,
      3
    ],
    "answer": "B",
    "explanation": "Selama masih berada dalam jam operasional resmi dan berkas sudah lengkap di loket, melayani pemohon hingga tuntas dengan ramah menunjukkan komitmen pelayanan prima (skor 5). Memeriksa sekilas lalu menyarankan datang besok (skor 4) memang sopan, namun tetap membebani pemohon dari kecamatan jauh untuk bolak-balik.",
    "tip": "Pelayanan prima menghargai waktu dan usaha pemohon selama masih sesuai koridor jam operasional."
  },
  {
    "id": "tkp-pel-003",
    "subPattern": "sikap-ramah-empati-dan-pengendalian-emosi",
    "difficulty": "sedang",
    "prompt": "Rekan satu loket Anda sedang kelelahan hingga menjawab pertanyaan seorang pemohon dengan ketus, membuat suasana di meja sebelah mulai menegang. Sebagai sesama petugas pelayanan di garis depan, sikap Anda adalah ...",
    "options": [
      "Ikut membela pernyataan rekan di hadapan pemohon agar kekompakan petugas loket tetap terjaga di ruang layanan.",
      "Menegur rekan dengan suara terdengar di depan loket agar menjaga nada bicara supaya tidak mempermalukan unit kerja.",
      "Mengambil alih layanan dengan ramah agar warga kembali tenang, menuntaskan urusannya sesuai prosedur, lalu memberi jeda rekan.",
      "Menyarankan rekan beristirahat sejenak di belakang meja sambil mempersilakan pemohon menunggu panggilan loket lain di kursi ruang tunggu.",
      "Meminta maaf kepada pemohon dengan sopan atas suasana kurang nyaman, lalu melaporkan kelelahan rekan kepada atasan agar segera digantikan."
    ],
    "optionScores": [
      1,
      2,
      5,
      3,
      4
    ],
    "answer": "C",
    "explanation": "Skor 5 langsung memulihkan kenyamanan warga dengan mengambil alih layanan hingga selesai sesuai SOP sambil menjaga rekan memperoleh jeda secara halus. Sekadar meminta maaf lalu melapor ke atasan (skor 4) menjaga prosedur dan kesopanan, namun menunda penyelesaian langsung bagi pemohon di loket.",
    "tip": "Saat tim mengalami gesekan layanan di depan publik, utamakan de-eskalasi kepada warga lalu pembinaan internal secara santun."
  },
  {
    "id": "tkp-pel-004",
    "subPattern": "sikap-ramah-empati-dan-pengendalian-emosi",
    "difficulty": "sedang",
    "prompt": "Seorang warga kebingungan membaca formulir permohonan yang banyak memakai istilah teknis hukum sehingga berulang kali mengisi kolom secara keliru. Ketika ia kembali bertanya untuk ketiga kalinya, respons Anda yang paling mencerminkan pelayanan publik terbaik adalah ...",
    "options": [
      "Membacakan panduan resmi pengisian formulir dengan sopan dari awal hingga akhir sesuai ketentuan tertulis, lalu mempersilakan pemohon mengisi ulang di bangku.",
      "Menunjukkan contoh berkas terpasang di papan pengumuman ruang tunggu agar pemohon dapat meniru pola pengisiannya secara mandiri.",
      "Langsung menerima formulir yang masih keliru tanpa perbaikan agar antrean loket berikutnya tidak terus tertahan lama.",
      "Menjelaskan tiap kolom memakai bahasa sehari-hari dengan sabar, memberi contoh pengisian hingga benar, dan mencatat penyempurnaan formulir.",
      "Menyarankan pemohon memakai jasa pengetikan di luar gedung kantor supaya pengisian kolom teknis menjadi cepat selesai."
    ],
    "optionScores": [
      4,
      3,
      2,
      5,
      1
    ],
    "answer": "D",
    "explanation": "Skor 5 tidak hanya sabar membimbing pemohon dengan bahasa sederhana hingga tuntas, tetapi juga mencatat perlunya penyederhanaan formulir bagi warga lain. Membacakan panduan resmi secara sopan (skor 4) tetap membantu secara normatif, namun kurang menjembatani hambatan pemahaman istilah teknis.",
    "tip": "Pelayan publik unggul tidak hanya sabar membimbing satu pemohon, tetapi juga peka memperbaiki sumber kebingungan bagi masyarakat luas."
  },
  {
    "id": "tkp-pel-005",
    "subPattern": "sikap-ramah-empati-dan-pengendalian-emosi",
    "difficulty": "sedang",
    "prompt": "Di akhir pekan ketika Anda sedang berada di sebuah fasilitas layanan umum sebagai petugas siaga darurat, seorang warga panik karena kartu akses layanan kesehatannya tertinggal sementara anaknya membutuhkan rujukan cepat. Sikap Anda yang paling tepat adalah ...",
    "options": [
      "Mengarahkan warga menghubungi layanan panggilan nasional melalui ponselnya sambil tetap menunggu antrean verifikasi di meja petugas jaga.",
      "Menenangkan warga terlebih dahulu dengan ramah, lalu segera menghubungi koordinator jaga guna meminta izin sebelum membuka verifikasi data digital.",
      "Menyampaikan bahwa lupa membawa kartu merupakan kelalaian pribadi yang belum bisa dilayani saat bertugas pada akhir pekan.",
      "Meminta anggota keluarga pemohon pulang mengambil kartu fisik terlebih dahulu sementara warga diminta menunggu di ruang penerimaan.",
      "Menenangkan kepanikan warga secara penuh perhatian, memverifikasi data digital berbasis NIK mengikuti protokol darurat, dan memandu rujukan secepatnya."
    ],
    "optionScores": [
      3,
      4,
      1,
      2,
      5
    ],
    "answer": "E",
    "explanation": "Pada situasi darurat akhir pekan, skor 5 memadukan ketenangan sikap, pemanfaatan jalur verifikasi digital resmi yang sudah diatur SOP darurat, dan panduan rujukan cepat. Menenangkan warga sambil menunggu izin koordinator (skor 4) berhati-hati secara hierarkis, tetapi memperlambat pertolongan yang sudah memiliki dasar prosedur.",
    "tip": "Prioritaskan ketenangan, keselamatan warga, serta pemanfaatan jalur verifikasi resmi yang tersedia."
  },
  {
    "id": "tkp-pel-006",
    "subPattern": "sikap-ramah-empati-dan-pengendalian-emosi",
    "difficulty": "sedang",
    "prompt": "Seorang pemohon layanan perizinan usaha datang dengan penampilan sangat sederhana dan ragu-ragu bertanya, sementara di antrean belakang berdiri pengusaha besar yang tampak tergesa-gesa ingin didahulukan. Tindakan Anda yang sesuai prinsip keadilan pelayanan adalah ...",
    "options": [
      "Melayani pemohon pertama dengan hangat menurut urutan antrean sambil memberi informasi estimasi tunggu yang jelas.",
      "Meminta pemohon pertama bergeser sebentar memeriksa ulang berkasnya agar pengusaha di belakang dapat menyerahkan dokumen lebih dulu.",
      "Mendahulukan pengusaha yang tampak tergesa-gesa dengan pertimbangan nilai permohonan usahanya berdampak besar bagi daerah.",
      "Menjelaskan aturan antrean secara sopan kepada pengusaha, lalu melayani pemohon pertama dengan cukup ringkas agar antrean lekas bergerak.",
      "Tetap memanggil nomor urut sesuai layar antrean tanpa komentar tambahan dan meminta seluruh pengunjung menunggu giliran masing-masing."
    ],
    "optionScores": [
      5,
      2,
      1,
      4,
      3
    ],
    "answer": "A",
    "explanation": "Pelayanan publik menuntut perlakuan setara dan ramah tanpa memandang status ekonomi maupun penampilan (skor 5). Menjaga antrean dengan sopan namun tergesa mempercepat pelayanan pemohon pertama (skor 4) mengurangi kualitas pendampingan bagi warga yang sedang ragu-ragu bertanya.",
    "tip": "Pastikan pelayanan berkeadilan berlaku sama bagi semua warga tanpa diskriminasi status sosial."
  },
  {
    "id": "tkp-pel-007",
    "subPattern": "sikap-ramah-empati-dan-pengendalian-emosi",
    "difficulty": "sulit",
    "prompt": "Anda melayani seorang pemohon melalui layanan konsultasi video daring yang terus mengulang komplain dengan kata-kata menyudutkan karena frustrasi permohonannya ditolak dua kali sebelumnya akibat berkas teknis tidak sesuai regulasi. Pada saat yang sama, sesi konsultasi berikutnya sudah mengantre lima menit kemudian. Langkah paling tepat adalah ...",
    "options": [
      "Mengirim potongan rekaman komplain pemohon ke grup internal kantor agar rekan kerja melihat sikap keras warga itu.",
      "Menenangkan pemohon, merangkum bagian keliru lewat daftar periksa perbaikan di obrolan, lalu menutup sesi tepat waktu.",
      "Membacakan poin kekurangan berkas secara kaku lalu mengakhiri panggilan video tepat pada batas waktu demi menjaga jadwal sesi berikutnya.",
      "Menjelaskan kembali alasan penolakan sebelumnya secara tenang, lalu mengirim tautan peraturan lengkap untuk dipelajari sebelum mendaftar ulang.",
      "Mendengarkan seluruh keluhan emosionalnya dengan sabar dan membahas ulang detail aturan sampai tuntas meski jadwal pemohon berikut menjadi molor."
    ],
    "optionScores": [
      1,
      5,
      2,
      3,
      4
    ],
    "answer": "B",
    "explanation": "Skor 5 menyeimbangkan empati dengan keadilan jadwal antrean berikutnya sekaligus memberi daftar periksa konkret agar kegagalan tidak terulang. Meladeni keluhan hingga tuntas tanpa batas waktu (skor 4) memang sabar, namun merugikan hak waktu pemohon lain yang sudah mengantre terjadwal.",
    "tip": "Dalam layanan daring berjadwal, padukan empati, panduan perbaikan konkret (checklist), dan keadilan waktu antrean."
  },
  {
    "id": "tkp-pel-008",
    "subPattern": "sikap-ramah-empati-dan-pengendalian-emosi",
    "difficulty": "sulit",
    "prompt": "Sebuah video viral di media sosial memelintir potongan kalimat Anda saat menjelaskan penolakan berkas tidak lengkap sehingga publik menuduh instansi mempersulit warga. Padahal Anda sudah menjelaskan sesuai prosedur. Dalam situasi koordinasi layanan besok harinya, sikap paling matang Anda sebagai petugas adalah ...",
    "options": [
      "Menyusun kronologi faktual lengkap bersama bukti untuk pimpinan serta humas, lalu meminta izin pindah tugas ke bagian arsip belakang sementara.",
      "Tetap menjalankan tugas harian loket sesuai SOP seperti biasa sambil menyerahkan sepenuhnya urusan klarifikasi media sosial kepada humas.",
      "Melaporkan kronologi lengkap ke pimpinan dan humas untuk klarifikasi resmi, sambil tetap melayani warga di loket dengan ramah.",
      "Menjaga jarak bicara dan bersikap kaku kepada pemohon berkas serupa agar ucapannya tidak dipelintir lagi.",
      "Mengunggah video penjelasan di akun media sosial pribadi guna membela diri dan membantah narasi pengunggah pertama."
    ],
    "optionScores": [
      4,
      3,
      5,
      2,
      1
    ],
    "answer": "C",
    "explanation": "Skor 5 menjaga ketenangan profesional: mengawal klarifikasi kelembagaan secara faktual melalui jalur resmi humas dan tetap hadir melayani warga secara ramah. Meminta pindah ke arsip sementara (skor 4) cukup prosedural dalam pelaporan, tetapi mengurangi ketangguhan menjaga layanan garda depan.",
    "tip": "Saat menghadapi tekanan viral, pisahkan klarifikasi faktual resmi kelembagaan dari emosi pribadi, dan pertahankan standar layanan."
  },
  {
    "id": "tkp-pel-009",
    "subPattern": "solusi-cepat-dan-kepatuhan-sop",
    "difficulty": "mudah",
    "prompt": "Seorang pemohon datang mengurus surat keterangan mendesak, tetapi salah satu dokumen pendukung tertinggal di rumah. Namun, ia menyimpan pindaian asli dokumen resmi tersebut dalam aplikasi identitas digital pemerintah. Sesuai ketentuan verifikasi elektronik yang berlaku di instansi Anda, tindakan Anda adalah ...",
    "options": [
      "Menyarankan pemohon mengecek kembali jika sempat pulang mengambil kertas asli atau menunggu giliran akhir jam kerja.",
      "Memeriksa tampilan aplikasi digitalnya dengan sopan, lalu meminta persetujuan lisan atasan terlebih dahulu meski ketentuan instansi sudah membolehkannya.",
      "Langsung menolak pengajuan surat keterangan karena pemohon tidak membawa dokumen asli berwujud kertas di lokasi loket.",
      "Memeriksa keabsahan dokumen pada aplikasi identitas digital resmi pemerintah, lalu langsung memproses suratnya tanpa menyuruh pulang.",
      "Tetap meminta salinan cetak fisik sesuai kebiasaan lama meja layanan walaupun aplikasi identitas digital pemerintah sudah tersedia."
    ],
    "optionScores": [
      3,
      4,
      1,
      5,
      2
    ],
    "answer": "D",
    "explanation": "Menggunakan jalur verifikasi digital yang telah sah menurut SOP langsung memangkas waktu dan biaya warga (skor 5). Meminta konfirmasi atasan lagi saat aturan sudah jelas (skor 4) menunjukkan kehati-hatian, tetapi tetap memperlambat penyelesaian yang sebenarnya sudah menjadi kewenangan petugas.",
    "tip": "Utamakan solusi paling efisien yang sudah sah menurut regulasi/SOP digital instansi."
  },
  {
    "id": "tkp-pel-010",
    "subPattern": "solusi-cepat-dan-kepatuhan-sop",
    "difficulty": "mudah",
    "prompt": "Anda mengetahui bahwa alur persetujuan berkas di bagian Anda sebenarnya memiliki dua tahap penandatanganan ganda yang berulang sehingga memperlambat waktu layanan warga hingga tiga hari. Sebagai pelaksana layanan yang ingin memberi dampak baik, sikap Anda adalah ...",
    "options": [
      "Membatasi jumlah penerimaan berkas per hari agar penumpukan proses pada dua meja penandatanganan ganda tidak makin bertambah panjang.",
      "Melewati salah satu tahap tanda tangan secara diam-diam tanpa izin pimpinan supaya berkas layanan warga dapat keluar jauh lebih cepat.",
      "Tetap menjalankan seluruh tahap tanda tangan ganda secara tertib sesuai SOP agar tidak terjadi cacat administrasi dokumen.",
      "Mengikuti alur persetujuan berjalan setiap hari sambil sesekali mendiskusikan keluhan lambatnya proses bersama rekan sesama pelaksana loket.",
      "Tetap mematuhi alur SOP aktif selama belum direvisi, sambil menyusun catatan analisis hambatan dan usulan penyederhanaan prosedur kepada pimpinan."
    ],
    "optionScores": [
      2,
      1,
      4,
      3,
      5
    ],
    "answer": "E",
    "explanation": "Skor 5 menggabungkan kepatuhan hukum terhadap SOP yang berlaku dengan inisiatif konstruktif memperbaiki sistem demi kecepatan layanan jangka panjang. Sekadar patuh menjalankan alur lambat tanpa usulan perbaikan (skor 4) memang aman secara administrasi, namun tidak mendorong efisiensi birokrasi.",
    "tip": "Jangan melanggar SOP secara sepihak; patuhi aturan yang berjalan sembari ajukan usulan perbaikan terukur ke pimpinan."
  },
  {
    "id": "tkp-pel-011",
    "subPattern": "solusi-cepat-dan-kepatuhan-sop",
    "difficulty": "sedang",
    "prompt": "Sahabat lama Anda memohon bantuan agar pengajuan izin usahanya diloloskan hari ini meskipun surat rekomendasi teknis dari dinas lingkungan belum terbit, dengan janji surat akan disusulkan pekan depan. Sikap paling tepat Anda adalah ...",
    "options": [
      "Menolak penerbitan izin secara santun menurut syarat objektif, lalu memandu alur percepatan resmi ke dinas lingkungan.",
      "Meloloskan penerbitan izin hari ini berbekal janji lisan sahabat bahwa surat rekomendasi teknis akan disusulkan pekan depan.",
      "Meminta staf pelaksana lain meninjau kelengkapan berkas sahabat terlebih dahulu agar penolakan tidak terasa kaku secara pribadi.",
      "Menerima map permohonan untuk pencatatan awal di meja administrasi dengan catatan proses verifikasi baru berjalan setelah syarat lengkap.",
      "Menjelaskan secara sopan bahwa izin belum dapat diterbitkan sebelum rekomendasi teknis terbit, lalu memintanya kembali jika sudah lengkap."
    ],
    "optionScores": [
      5,
      1,
      2,
      3,
      4
    ],
    "answer": "A",
    "explanation": "Skor 5 menegakkan keadilan bebas nepotisme dengan santun sekaligus membantu pemohon menemukan jalur resmi untuk mempercepat kelengkapan syarat. Menolak secara sopan tanpa memberi panduan alur resmi ke dinas terkait (skor 4) patuh pada prosedur, tetapi kurang memfasilitasi pemecahan masalah warga.",
    "tip": "Gabungkan ketegasan menolak jalan pintas melanggar SOP dengan bantuan informasi jalur resmi yang konstruktif."
  },
  {
    "id": "tkp-pel-012",
    "subPattern": "solusi-cepat-dan-kepatuhan-sop",
    "difficulty": "sedang",
    "prompt": "Saat sistem jaringan internet pusat terputus mendadak selama dua jam, puluhan pemohon layanan menumpuk di ruang tunggu tanpa kepastian. Sesuai standar layanan yang responsif dan patuh aturan, langkah pertama yang paling tepat Anda lakukan adalah ...",
    "options": [
      "Memberikan pengumuman terbuka tentang gangguan jaringan secara sopan dan meminta warga menunggu sementara petugas terus menghubungi tim TI.",
      "Mengumumkan estimasi kendala secara jujur, menjalankan pemeriksaan berkas luring dalam koridor SOP darurat, dan mengontak tim TI.",
      "Memasang papan informasi gangguan di depan kaca loket serta mencatat nomor kontak pemohon yang bersedia dihubungi saat jaringan pulih.",
      "Menunggu di balik loket sambil membereskan berkas arsip internal yang sudah selesai diproses hingga sambungan internet kantor pulih.",
      "Meminta seluruh pemohon pulang hari itu juga tanpa memeriksa berkas maupun mencatat data antrean mereka."
    ],
    "optionScores": [
      4,
      5,
      3,
      2,
      1
    ],
    "answer": "B",
    "explanation": "Pelayanan responsif saat gangguan sistem mengaktifkan prosedur kontinjensi: komunikasi terbuka, verifikasi berkas secara manual/luring agar waktu antre warga tetap produktif, dan koordinasi ke TI (skor 5). Mengumumkan kendala serta menghubungi TI sambil menyuruh warga menunggu pasif (skor 4) kurang mengoptimalkan layanan luring.",
    "tip": "Saat sistem bermasalah, aktifkan komunikasi terbuka + pemrosesan administratif luring sesuai SOP darurat + koordinasi TI."
  },
  {
    "id": "tkp-pel-013",
    "subPattern": "solusi-cepat-dan-kepatuhan-sop",
    "difficulty": "sedang",
    "prompt": "Seorang warga memerlukan legalisasi dokumen penting untuk syarat mendaftar beasiswa yang ditutup sore ini, padahal pejabat penandatangan utama sedang menghadiri rapat di luar kantor. Tindakan solutif terbaik yang tetap menjaga prosedur adalah ...",
    "options": [
      "Menjelaskan dengan sopan bahwa pejabat penandatangan sedang dinas luar dan menawarkan pengesahan diprioritaskan esok pagi hari.",
      "Memeriksa kelengkapan berkas pemohon secara ramah, lalu mengirim pesan kepada pejabat utama guna menunggu arahan setelah rapat usai.",
      "Memeriksa berkas segera, lalu memproses pengesahan melalui pejabat pelaksana harian berdasarkan aturan delegasi kantor.",
      "Menandatangani sendiri lembar legalisasi atas nama pejabat utama tanpa pelimpahan wewenang demi mengejar tenggat.",
      "Menyarankan pemohon mendatangi langsung lokasi rapat pejabat utama di luar kantor tanpa kepastian jeda."
    ],
    "optionScores": [
      3,
      4,
      5,
      1,
      2
    ],
    "answer": "C",
    "explanation": "Skor 5 menyelesaikan kebutuhan mendesak warga secara cepat dan sah lewat mekanisme pelaksana harian (Plh.) atau delegasi resmi instansi. Menunggu arahan dari pejabat yang sedang rapat di luar (skor 4) bersikap tertib, tetapi berisiko membuat warga kehilangan batas waktu pendaftaran beasiswa sore itu.",
    "tip": "Solusi cepat tidak pernah memalsukan wewenang; manfaatkan mekanisme delegasi/Plh. resmi demi membantu keperluan mendesak warga."
  },
  {
    "id": "tkp-pel-014",
    "subPattern": "solusi-cepat-dan-kepatuhan-sop",
    "difficulty": "sedang",
    "prompt": "Dalam pelayanan perizinan terpadu, Anda menemukan warga membawa dokumen persyaratan lengkap, tetapi formulir yang diisi memakai format versi bulan lalu yang baru diperbarui kemarin tanpa sosialisasi masif ke tingkat kelurahan. Sikap Anda yang paling tepat adalah ...",
    "options": [
      "Menerima dan memproses formulir versi lama apa adanya tanpa penyesuaian agar pelayanan di meja depan berjalan cepat tanpa hambatan.",
      "Menolak langsung berkas tersebut dan mengarahkan warga mengetik ulang pada jasa penyewaan komputer di luar gedung.",
      "Menjelaskan perubahan format dengan sopan, lalu memberikan formulir baru untuk diisi ulang warga di meja tunggu sebelum dipanggil kembali tanpa antre ulang.",
      "Menjelaskan pembaruan format dengan ramah, membantu memindahkan data ke formulir baru di loket, dan mengusulkan sosialisasi luas ke kelurahan.",
      "Menunjukkan tautan unduhan formulir terbaru di papan pengumuman dan meminta pemohon mengisinya kembali dari rumah untuk pengajuan berikutnya."
    ],
    "optionScores": [
      2,
      1,
      4,
      5,
      3
    ],
    "answer": "D",
    "explanation": "Karena perubahan baru saja terjadi tanpa sosialisasi luas, membantu menyalin data di loket sekaligus mengusulkan perbaikan sosialisasi ke kelurahan (skor 5) mencegah warga dirugikan. Meminta warga menulis ulang sendiri meski tanpa antre ulang (skor 4) cukup toleran, tetapi membebani warga atas transisi internal.",
    "tip": "Jika kendala terjadi akibat transisi kebijakan internal yang belum tersosialisasi luas, bantulah warga di tempat dan perbaiki informasinya."
  },
  {
    "id": "tkp-pel-015",
    "subPattern": "solusi-cepat-dan-kepatuhan-sop",
    "difficulty": "sulit",
    "prompt": "Terjadi lonjakan pemohon dua kali lipat menjelang batas akhir program pemutihan administrasi, sementara jumlah komputer loket terbatas dan rekan Anda di bagian pengarsipan kewalahan membantu verifikasi. Langkah manajerial paling efektif yang dapat Anda inisiasi bersama tim adalah ...",
    "options": [
      "Membiarkan seluruh pemohon berkas lengkap maupun belum lengkap menunggu pada satu antrean panjang sampai jam kantor berakhir.",
      "Membatasi kuota pelayanan harian menjadi setengah dari biasanya dan menutup pengambilan nomor antrean sebelum siang hari.",
      "Menyampaikan perkiraan waktu tunggu secara terbuka di ruang layanan supaya pemohon dapat mempertimbangkan jadwal kunjungan pada jam berikutnya.",
      "Mengusulkan penambahan jam lembur serta perbantuan staf administrasi unit lain agar seluruh antrean tetap dilayani berurutan hingga selesai.",
      "Membuka meja pemeriksaan awal di pangkal antrean, membagi peran tim secara paralel, dan menginformasikan estimasi tunggu maupun kanal pendaftaran daring."
    ],
    "optionScores": [
      1,
      2,
      3,
      4,
      5
    ],
    "answer": "E",
    "explanation": "Skor 5 menata ulang alur kerja secara nyata melalui penyaringan kelengkapan di awal (triage), pembagian tugas paralel tim, dan informasi kanal daring agar beban terurai. Mengusulkan lembur dengan alur kerja tunggal yang sama (skor 4) menunjukkan dedikasi tinggi, namun kurang efektif mengurai sumbatan sistemik.",
    "tip": "Saat antrean membeludak, cari opsi berisi perbaikan alur (triage awal, kerja paralel tim, dan informasi kanal alternatif)."
  },
  {
    "id": "tkp-pel-016",
    "subPattern": "solusi-cepat-dan-kepatuhan-sop",
    "difficulty": "sulit",
    "prompt": "Sebuah peraturan teknis baru menimbulkan penafsiran berbeda antara petugas verifikasi berkas dan petugas penerbitan izin hingga membuat pengajuan bantuan usaha mikro tertahan empat hari tanpa kejelasan. Sebagai koordinator teknis layanan, tindakan penyelesaian terbaik Anda adalah ...",
    "options": [
      "Menggelar rapat penyamaan tafsir tertulis antarunit, memproses berkas tertahan, lalu mengabari pemohon secara aktif.",
      "Menyampaikan surat konsultasi resmi kepada instansi penyusun regulasi sambil menjelaskan secara sopan penundaan sementara kepada pemohon.",
      "Mengikuti penafsiran petugas verifikasi yang lebih senior secara sementara agar berkas usaha mikro mendesak dapat mulai diproses.",
      "Membiarkan tiap loket memakai pemahaman masing-masing atas aturan baru hingga jadwal rapat evaluasi bulanan diselenggarakan.",
      "Mengembalikan seluruh berkas pengajuan pelaku usaha mikro dengan alasan pedoman teknis dari pemerintah pusat belum seragam."
    ],
    "optionScores": [
      5,
      4,
      3,
      2,
      1
    ],
    "answer": "A",
    "explanation": "Skor 5 menyelesaikan akar persoalan multitafsir melalui penyamaan pedoman operasional tertulis antarunit sehingga konsisten, lalu langsung memulihkan kepastian pemohon. Menunggu jawaban tertulis pusat sambil menunda seluruh berkas (skor 4) aman secara birokratis, tetapi memperpanjang kerugian pelaku usaha.",
    "tip": "Konflik multitafsir prosedur harus diselesaikan dengan penyamaan pedoman tertulis antarunit serta komunikasi proaktif ke pemohon."
  },
  {
    "id": "tkp-pel-017",
    "subPattern": "pelayanan-inklusif-dan-kelompok-rentan",
    "difficulty": "mudah",
    "prompt": "Seorang ibu hamil tua dan seorang penyandang disabilitas pengguna kursi roda datang ke ruang tunggu kantor pelayanan yang antreannya mencapai nomor seratus. Sikap Anda yang paling sesuai dengan standar pelayanan inklusif adalah ...",
    "options": [
      "Menghampiri keduanya di ruang tunggu untuk melayani pengecekan kelengkapan map berkas agar proses saat dipanggil nanti berlangsung cepat.",
      "Menyambut ramah dan mengarahkan mereka ke kursi serta loket jalur prioritas kelompok rentan tanpa pungutan biaya.",
      "Menyediakan kursi tunggu di baris depan secara sopan dan berjanji memanggil berkas mereka sedikit lebih awal saat sela antrean longgar.",
      "Membiarkan keduanya menunggu hingga nomor seratus terpanggil agar antrean dinilai sama rata seluruh pengunjung.",
      "Meminta pengunjung muda di barisan depan bersedia berdiri memberikan kursinya sementara nomor antrean tetap berjalan sesuai urutan seratus."
    ],
    "optionScores": [
      3,
      5,
      4,
      1,
      2
    ],
    "answer": "B",
    "explanation": "Standar pelayanan inklusif mewajibkan penyediaan serta pemanfaatan jalur prioritas resmi bagi penyandang disabilitas dan ibu hamil secara bermartabat (skor 5). Memberi kursi depan dan menyelipkan panggilan saat sela longgar (skor 4) berniat baik, namun tidak memberikan hak jalur prioritas yang terstruktur.",
    "tip": "Kelompok rentan (disabilitas, lansia, ibu hamil) berhak atas akses fisik ramah dan jalur prioritas layanan resmi."
  },
  {
    "id": "tkp-pel-018",
    "subPattern": "pelayanan-inklusif-dan-kelompok-rentan",
    "difficulty": "mudah",
    "prompt": "Di anjungan layanan mandiri berbasis layar sentuh, seorang kakek berusia lanjut tampak bingung dan takut salah menekan menu hingga beberapa kali hampir pergi membatalkan urusannya. Langkah terbaik Anda adalah ...",
    "options": [
      "Menyarankan beliau agar lain kali mengajak anggota keluarga yang lebih muda saat mengakses anjungan layar sentuh.",
      "Membiarkan kakek membaca sendiri petunjuk di mesin anjungan supaya terbiasa memakai fasilitas digital mandiri.",
      "Menghampiri dengan hormat, memandu pengoperasian layar tahap demi tahap sambil memastikan kebenaran data, lalu memberi bukti cetaknya.",
      "Membantu menekan seluruh menu anjungan mandiri secara cepat supaya urusan kakek lekas selesai tanpa rasa canggung, lalu menyerahkan bukti cetaknya.",
      "Mengarahkan kakek dengan ramah dan sopan untuk berpindah ke antrean loket manual reguler walaupun jumlah pengunjung di sana cukup padat."
    ],
    "optionScores": [
      2,
      1,
      5,
      4,
      3
    ],
    "answer": "C",
    "explanation": "Skor 5 menjembatani kesenjangan literasi digital lansia secara bermartabat sekaligus mengonfirmasi keakuratan data pribadi langsung bersama pemiliknya. Membantu menekan seluruh menu secara cepat tanpa verifikasi ulang bersama pemohon (skor 4) memang ramah, tetapi berisiko menimbulkan kekeliruan input data.",
    "tip": "Pendampingan teknologi bagi lansia harus dilakukan dengan sabar dan selalu mengonfirmasi keakuratan data bersama pemohon."
  },
  {
    "id": "tkp-pel-019",
    "subPattern": "pelayanan-inklusif-dan-kelompok-rentan",
    "difficulty": "sedang",
    "prompt": "Anda melayani pemohon tunarungu yang datang seorang diri dan tampak kesulitan memahami penjelasan lisan petugas di loket berkaca tebal. Sebagai petugas pelayanan publik, solusi komunikasi yang paling tepat adalah ...",
    "options": [
      "Meminta pemohon kembali lain hari dengan membawa pendamping keluarga karena loket belum dilengkapi juru bahasa isyarat.",
      "Berbicara jauh lebih keras dan perlahan dari balik kaca loket sambil mengulang kalimat penting agar pemohon dapat menebak gerak bibir.",
      "Mengajak pemohon berpindah ke meja samping tanpa sekat kaca sesuai SOP supaya komunikasi tatap muka lebih terbuka dan terbaca.",
      "Berkomunikasi memakai media tulis atau layar secara jelas dan sopan, atau memanggil petugas layanan aksesibel hingga keperluan pemohon tuntas.",
      "Menuliskan syarat utama secara singkat pada secarik kertas dengan sopan lalu menunjuk papan alur layanan agar pemohon dapat mengikuti tahapan berikutnya."
    ],
    "optionScores": [
      1,
      2,
      3,
      5,
      4
    ],
    "answer": "D",
    "explanation": "Skor 5 memastikan komunikasi dua arah yang setara lewat media tertulis jelas atau petugas layanan aksesibel hingga urusan selesai penuh. Menulis ringkas lalu sekadar menunjuk papan alur (skor 4) berupaya membantu secara sopan, tetapi belum memastikan kebutuhan spesifik pemohon benar-benar dipahami.",
    "tip": "Hilangkan hambatan komunikasi disabilitas sensorik memakai media tertulis/visual jelas atau pendampingan layanan aksesibel."
  },
  {
    "id": "tkp-pel-020",
    "subPattern": "pelayanan-inklusif-dan-kelompok-rentan",
    "difficulty": "sedang",
    "prompt": "Ketika kantor Anda merenovasi gedung layanan baru, Anda melihat desain tangga masuk belum dilengkapi bidang miring (ram) maupun penanda lantai pemandu bagi penyandang tunanetra. Sebagai anggota tim perencanaan operasional gedung, sikap Anda adalah ...",
    "options": [
      "Mencatat kekurangan aksesibilitas itu dalam rapat lalu mengusulkan meja layanan darurat di teras tanpa mengubah konstruksi bangunan utama.",
      "Mengusulkan penempatan petugas keamanan khusus di area tangga depan untuk membantu mengangkat atau menuntun pengunjung disabilitas yang datang.",
      "Mempertahankan rancangan renovasi berjalan lebih dulu dan mengevaluasi penambahan fasilitas aksesibel setelah muncul masukan dari pengunjung.",
      "Mengabaikan jalur miring dan penanda lantai karena anggaran renovasi diprioritaskan untuk memperindah ruang loket utama yang lebih ramai.",
      "Mengusulkan penyesuaian desain agar memenuhi standar aksesibilitas fasilitas publik berupa bidang miring landai, pegangan, dan jalur pemandu tunanetra."
    ],
    "optionScores": [
      4,
      3,
      2,
      1,
      5
    ],
    "answer": "E",
    "explanation": "Skor 5 memperjuangkan infrastruktur ramah disabilitas secara permanen sesuai standar fasilitas publik sebelum hambatan terjadi di lapangan. Menyediakan meja darurat di teras tanpa memperbaiki desain tangga gedung (skor 4) menunjukkan kepedulian, namun memisahkan kelompok rentan dari layanan utama yang layak.",
    "tip": "Inklusi disabilitas wajib diupayakan secara preventif dalam desain fasilitas umum sebelum warga dirugikan."
  },
  {
    "id": "tkp-pel-021",
    "subPattern": "pelayanan-inklusif-dan-kelompok-rentan",
    "difficulty": "sedang",
    "prompt": "Sebuah program layanan keliling pencatatan sipil dijadwalkan mengunjungi desa terpencil dengan banyak warga lanjut usia yang sakit menahun dan sulit berjalan menuju balai desa. Strategi pelayanan paling berdampak bagi Anda dan tim adalah ...",
    "options": [
      "Tetap membuka pos balai desa sambil berkoordinasi dengan kader lokal untuk jemput bola ke rumah lansia sakit.",
      "Menambah durasi pelayanan di balai desa hingga sore hari supaya keluarga memiliki waktu lebih panjang mengantar lansia sakit ke lokasi.",
      "Menunda pencatatan kependudukan warga yang sulit berjalan hingga kondisi fisiknya pulih dan mampu datang ke kantor dinas.",
      "Meminta kader desa mengumpulkan berkas pendahuluan lansia di balai, sementara perekaman lapangan dijadwalkan ulang pada kunjungan bulan depan.",
      "Mewajibkan seluruh pemohon tetap hadir di balai desa karena perangkat perekaman kependudukan harus terpasang tetap di satu titik ruangan."
    ],
    "optionScores": [
      5,
      3,
      1,
      4,
      2
    ],
    "answer": "A",
    "explanation": "Layanan jemput bola ke rumah bagi lansia sakit berat yang tidak mampu berjalan menjamin hak kependudukan terpenuhi tanpa mengorbankan validitas verifikasi (skor 5). Mengumpulkan berkas lalu menunda perekaman ke bulan berikutnya (skor 4) cukup terkoordinasi, namun memperlama pemenuhan hak warga rentan.",
    "tip": "Pelayanan inklusif di lapangan memadukan pos layanan terpusat dengan jemput bola terdata untuk kelompok berkebutuhan khusus."
  },
  {
    "id": "tkp-pel-022",
    "subPattern": "pelayanan-inklusif-dan-kelompok-rentan",
    "difficulty": "sedang",
    "prompt": "Saat melihat seorang pengunjung di ruang tunggu berbisik mengejek cara bicara pemohon penyandang disabilitas intelektual yang sedang Anda layani, tindakan paling etis yang Anda ambil adalah ...",
    "options": [
      "Memindahkan proses pelayanan pemohon tersebut ke ruang arsip sebelah agar terhindar dari tatapan maupun bisikan pengunjung lain di ruangan.",
      "Melayani pemohon penuh hormat, mengingatkan pengunjung lain secara santun menjaga kenyamanan, dan melindungi rasa amannya.",
      "Tetap fokus melayani pemohon dengan sangat ramah dan sabar tanpa menegur pengunjung lain agar suasana ruang tunggu tidak menjadi gaduh.",
      "Menjaga sikap profesional dan menyelesaikan verifikasi berkas pemohon lebih cepat supaya ia segera dapat meninggalkan ruang tunggu dengan nyaman.",
      "Memarahi pengunjung yang berbisik dengan suara lantang di depan loket sehingga memicu perdebatan di ruang pelayanan."
    ],
    "optionScores": [
      2,
      5,
      4,
      3,
      1
    ],
    "answer": "B",
    "explanation": "Skor 5 melindungi martabat psikologis pemohon rentan lewat pelayanan penuh hormat sekaligus memberi teguran edukatif santun bagi lingkungan tunggu. Tetap ramah sambil mendiamkan ejekan terbuka (skor 4) menjaga ketenangan ruangan, namun membiarkan perilaku diskriminatif tanpa koreksi sopan.",
    "tip": "Lindungi martabat kelompok rentan secara bermartabat dan santun tanpa memicu keributan maupun mengucilkan korban."
  },
  {
    "id": "tkp-pel-023",
    "subPattern": "pelayanan-inklusif-dan-kelompok-rentan",
    "difficulty": "sulit",
    "prompt": "Instansi Anda meluncurkan situs web layanan terpadu baru, tetapi komunitas disabilitas netra melaporkan bahwa formulir daring tersebut tidak dapat dibaca perangkat lunak pembaca layar (screen reader) dan tombol kontras warnanya terlalu pudar. Sebagai penanggung jawab mutu layanan digital, respons paling tepat adalah ...",
    "options": [
      "Menjawab bahwa proyek situs web sudah selesai seratus persen tahun lalu sehingga tidak memungkinkan adanya perubahan antarmuka lagi.",
      "Mencatat laporan kendala aksesibilitas tersebut ke daftar evaluasi tahunan untuk diusulkan dalam rencana anggaran pembaruan portal berikutnya.",
      "Mengapresiasi laporan, mengajak perwakilan disabilitas menguji ulang, dan menugaskan tim pengembang memperbaiki struktur pembaca layar.",
      "Menjelaskan dengan sopan bahwa portal memakai standar umum sehingga pemohon disarankan meminta bantuan kerabat.",
      "Menyambut masukan tersebut dengan sopan lalu menyediakan jalur layanan surel khusus bagi pemohon tunanetra sambil menunda pembenahan situs utama."
    ],
    "optionScores": [
      1,
      3,
      5,
      2,
      4
    ],
    "answer": "C",
    "explanation": "Skor 5 menangani akar masalah kesetaraan layanan digital dengan melibatkan pengguna terdampak secara langsung dalam perbaikan teknis portal. Membuka kanal surel terpisah tanpa membenahi situs utama (skor 4) menunjukkan itikad baik, namun tetap mengecualikan kemandirian penyandang disabilitas di portal resmi.",
    "tip": "Prinsip layanan inklusif digital: dengar masukan komunitas terdampak, libatkan uji aksesibilitas, dan perbaiki akar desain."
  },
  {
    "id": "tkp-pel-024",
    "subPattern": "pelayanan-inklusif-dan-kelompok-rentan",
    "difficulty": "sulit",
    "prompt": "Di wilayah perbatasan dengan penduduk beragam suku dan tingkat literasi bahasa Indonesia formal yang belum merata, banyak warga asli setempat enggan mengurus dokumen legalitas karena takut merasa terasing saat diwawancarai petugas pendatang. Pendekatan pelayanan publik terbaik agar hak warga terpenuhi adalah ...",
    "options": [
      "Menginstruksikan seluruh petugas loket berbicara lebih pelan dengan kalimat bahasa Indonesia sederhana dan sabar, tanpa membuat media visual atau pendamping lokal.",
      "Tetap memakai istilah hukum baku pada seluruh formulir agar keseragaman kalimat administrasi negara terjaga utuh.",
      "Menunda pelaksanaan layanan administrasi di wilayah perbatasan sampai tingkat pemahaman bahasa formal warga setempat dinilai memadai.",
      "Menyediakan panduan visual dwibahasa yang mudah dipahami, menggandeng pendamping komunikasi lokal terpercaya, dan melayani tulus tanpa merendahkan.",
      "Menyerahkan formulir kosong kepada kepala adat setempat untuk dibagikan dan dikumpulkan kembali setelah warga selesai mengisinya."
    ],
    "optionScores": [
      4,
      2,
      1,
      5,
      3
    ],
    "answer": "D",
    "explanation": "Memadukan panduan visual dwibahasa dan pendamping komunikasi lokal menghilangkan hambatan bahasa sekaligus menjaga akurasi informasi (skor 5). Mengandalkan petugas berbicara pelan saja tanpa dukungan bahasa maupun materi visual (skor 4) tetap ramah, tetapi kurang efektif menjangkau warga berliterasi rendah.",
    "tip": "Atasi kendala literasi wilayah terpencil dengan pendekatan visual jelas dan pendamping lokal, tetap dalam standar sah."
  },
  {
    "id": "tkp-pel-025",
    "subPattern": "transparansi-standar-dan-bebas-pungli",
    "difficulty": "mudah",
    "prompt": "Setelah dokumen kependudukannya selesai lebih cepat dari perkiraan, seorang warga menyelipkan uang Rp100.000 ke saku jaket Anda sambil berkata \"ini sekadar ucapan terima kasih beli kopi\". Layanan tersebut sebenarnya gratis tanpa biaya apa pun. Sikap Anda adalah ...",
    "options": [
      "Mengucapkan terima kasih lalu memasukkan uang pemberian tersebut langsung ke kotak amal sosial kantor di hadapan warga sebagai bentuk transparansi.",
      "Menerima uang ucapan terima kasih itu karena pelayanan sudah benar-benar tuntas dan diserahkan sukarela tanpa paksaan.",
      "Mengembalikan uang dari saku dengan senyum sopan sambil mengatakan petugas dilarang menerima imbalan tunai, tanpa penjelasan lebih lanjut.",
      "Menolak pemberian warga dengan nada tersinggung dan suara keras sehingga membuat pemohon merasa malu di depan pengunjung lain.",
      "Menolak uang tersebut secara sopan namun tegas, menjelaskan bahwa seluruh layanan gratis menurut aturan, dan menyampaikan terima kasih atas apresiasinya."
    ],
    "optionScores": [
      3,
      1,
      4,
      2,
      5
    ],
    "answer": "E",
    "explanation": "Skor 5 menolak gratifikasi secara tegas, sopan, dan edukatif sehingga warga memahami hak layanan bebas biaya tanpa merasa dipermalukan. Mengembalikan uang secara sopan tanpa menjelaskan ketentuan layanan gratis (skor 4) menjaga integritas pribadi, tetapi kurang mengedukasi publik untuk mencegah kebiasaan serupa.",
    "tip": "Tolak setiap uang terima kasih/tip pada pelayanan publik secara santun, tegas, dan tidak mempermalukan warga."
  },
  {
    "id": "tkp-pel-026",
    "subPattern": "transparansi-standar-dan-bebas-pungli",
    "difficulty": "mudah",
    "prompt": "Menurut Anda, cara paling efektif agar masyarakat di kantor pelayanan terhindar dari praktik percaloan dan pungutan liar adalah ...",
    "options": [
      "Mempublikasikan syarat, tarif, dan waktu layanan secara terbuka, menyediakan lacak antrean, dan menindak tegas praktik percaloan.",
      "Membatasi akses papan informasi persyaratan tertentu di ruang tunggu agar warga berkonsultasi langsung kepada petugas penerima berkas.",
      "Menempatkan petugas keamanan di pintu masuk guna memeriksa identitas pengantar berkas serta mengimbau warga mengurus sendiri secara langsung.",
      "Meminta seluruh petugas loket menjelaskan rincian biaya serta lama proses secara lisan dan terbuka setiap kali ada warga yang menanyakannya.",
      "Menyediakan jalur khusus bagi biro jasa perantara berbayar supaya aktivitas pengurusan dokumen di sekitar kantor menjadi lebih teratur."
    ],
    "optionScores": [
      5,
      2,
      4,
      3,
      1
    ],
    "answer": "A",
    "explanation": "Calo muncul saat syarat, biaya, dan alur kerja tidak transparan; keterbukaan informasi menyeluruh disertai sistem lacak status dan penegakan aturan (skor 5) menutup celah pungli secara sistemik. Pengawasan pintu masuk oleh keamanan (skor 4) membantu pencegahan awal, tetapi tidak membenahi transparansi informasi.",
    "tip": "Obat paling ampuh melawan calo dan pungli adalah transparansi syarat, biaya, waktu, dan jejak status layanan."
  },
  {
    "id": "tkp-pel-027",
    "subPattern": "transparansi-standar-dan-bebas-pungli",
    "difficulty": "sedang",
    "prompt": "Seorang pemohon menanyakan mengapa pengajuan izinnya memakan waktu 5 hari kerja sedangkan pengajuan tetangganya yang mengurus dokumen berbeda selesai dalam 2 hari. Agar tercipta keterbukaan informasi tanpa prasangka, sikap Anda adalah ...",
    "options": [
      "Menjanjikan percepatan verifikasi di luar prosedur agar izinnya terbit dalam dua hari seperti tetangganya.",
      "Menjelaskan perbedaan standar waktu tiap izin secara terbuka, menunjukkan alurnya, dan memberi resi lacak berkas.",
      "Mengarahkan pemohon membaca papan maklumat pelayanan di dinding lobi untuk membandingkan perkiraan durasi masing-masing jenis layanan.",
      "Menjawab singkat bahwa proses antrean tiap pemohon bersifat internal sehingga tidak dapat dibandingkan dengan pengajuan milik warga lainnya.",
      "Menjelaskan secara sopan bahwa tiap jenis dokumen memiliki tahapan pemeriksaan teknis berbeda dan meyakinkan berkasnya sedang diproses sesuai jadwal."
    ],
    "optionScores": [
      1,
      5,
      3,
      2,
      4
    ],
    "answer": "B",
    "explanation": "Transparansi standar waktu (SLA) disertai bukti resi pelacakan menumbuhkan kepercayaan bahwa pelayanan berjalan objektif sesuai risiko layanan (skor 5). Menjelaskan perbedaan secara lisan dengan sopan tanpa menunjukkan rincian alur maupun resi lacak (skor 4) belum memberi bukti keterbukaan yang dapat dipantau.",
    "tip": "Jawab kecurigaan publik dengan data standar waktu resmi (SLA) dan fasilitas pelacakan status berkas yang terbuka."
  },
  {
    "id": "tkp-pel-028",
    "subPattern": "transparansi-standar-dan-bebas-pungli",
    "difficulty": "sedang",
    "prompt": "Anda memergoki petugas honorer baru di gerbang depan menerima imbalan uang dari pemohon yang ingin dibantu mencetakkan formulir gratis padahal layanan cetak sudah disediakan kantor tanpa biaya. Langkah terbaik Anda adalah ...",
    "options": [
      "Meminta petugas honorer tersebut segera mengembalikan uang kepada pemohon secara diam-diam dan mengingatkannya agar tidak mengulangi perbuatan.",
      "Memarahi petugas honorer di depan ruang tunggu agar pengunjung serta pegawai lain jera melihat ketegasannya.",
      "Menegur petugas secara pribadi, mengembalikan uang pemohon dengan maaf, lalu melapor atasan untuk pembinaan dan rambu biaya.",
      "Membiarkan kejadian tersebut berlangsung karena petugas honorer baru hanya menerima imbalan kecil untuk jasa mencetak.",
      "Mencatat kejadian tersebut untuk dilaporkan secara tertutup kepada atasan di akhir jam kerja tanpa menegur langsung petugas honorer itu."
    ],
    "optionScores": [
      4,
      2,
      5,
      1,
      3
    ],
    "answer": "C",
    "explanation": "Skor 5 memulihkan hak warga seketika, mengoreksi petugas secara bermartabat, dan menutup peluang pengulangan lewat laporan pembinaan serta rambu bebas biaya. Sekadar menyuruh mengembalikan uang diam-diam (skor 4) menyelesaikan kejadian sesaat, namun tanpa pembinaan formal dan perbaikan sistem pengawasan.",
    "tip": "Integritas pelayanan memulihkan hak warga yang dirugikan, membina pelanggar secara prosedural, dan memperkuat rambu informasi."
  },
  {
    "id": "tkp-pel-029",
    "subPattern": "transparansi-standar-dan-bebas-pungli",
    "difficulty": "sedang",
    "prompt": "Sesuai ketentuan tarif resmi layanan penerbitan dokumen, pemohon wajib membayar retribusi melalui kanal nontunai (virtual account/QRIS negara), namun seorang pemohon menyerahkan uang tunai langsung ke tangan Anda dengan alasan tidak membawa kartu ATM. Tindakan paling aman dan berintegritas adalah ...",
    "options": [
      "Menahan berkas permohonan di meja layanan sementara waktu sembari menyarankan pemohon menghubungi keluarganya untuk mentransferkan tagihan.",
      "Menerima dan menyimpan uang tunai di laci meja untuk disetorkan secara kolektif ke bank pada penghujung bulan.",
      "Menjelaskan aturan wajib pembayaran nontunai secara sopan dan meminta pemohon kembali lain waktu setelah membawa kartu ATM atau aplikasi pembayaran seluler.",
      "Menolak penerimaan uang tunai di loket dengan sopan, menerbitkan kode bayar resmi, dan memandu warga menyetor lewat gerai terhubung kas negara.",
      "Menerima uang tunainya sementara waktu lalu membayarkannya memakai rekening pribadi petugas agar proses layanan warga dapat segera berjalan."
    ],
    "optionScores": [
      3,
      1,
      4,
      5,
      2
    ],
    "answer": "D",
    "explanation": "Menolak uang tunai di meja layanan sekaligus memfasilitasi kode bayar ke kanal resmi mitra kas negara (skor 5) menjaga integritas bebas pungli dan tetap memberi solusi nyata. Menjelaskan aturan nontunai secara sopan lalu menyuruh warga pulang mengambil kartu (skor 4) patuh pada aturan, namun kurang membantu warga mencari kanal setor terdekat.",
    "tip": "Hindari menerima uang tunai pribadi di loket; selalu arahkan transaksi lewat kanal pembayaran resmi langsung ke kas negara/daerah."
  },
  {
    "id": "tkp-pel-030",
    "subPattern": "transparansi-standar-dan-bebas-pungli",
    "difficulty": "sedang",
    "prompt": "Dalam pelaporan hasil survei kepuasan masyarakat (SKM) triwulanan di unit Anda, rekan tim mengusulkan menyaring hanya responden yang tampak puas agar skor unit tetap meraih predikat terbaik kabupaten. Sikap berintegritas Anda adalah ...",
    "options": [
      "Memilih sebagian responden yang urusannya lancar agar pengisian kuesioner berlangsung cepat tanpa menahan antrean loket berikutnya.",
      "Menolak usulan tersebut secara halus dengan mengumpulkan data objektif dari meja sendiri, lalu membiarkan rekan menjalankan penyaringan di meja lain.",
      "Mengusulkan agar komentar negatif dipisahkan sebagai catatan evaluasi internal saja sementara skor utama tetap dirangkum dari responden yang puas.",
      "Menghapus seluruh hasil penilaian warga yang permohonannya ditolak supaya angka indeks kepuasan unit tidak turun oleh kekecewaan mereka.",
      "Menolak manipulasi sampel survei, memastikan pengisian terbuka acak bagi seluruh pemohon, dan menjadikan kritik warga sebagai bahan peningkatan mutu nyata."
    ],
    "optionScores": [
      2,
      4,
      3,
      1,
      5
    ],
    "answer": "E",
    "explanation": "Skor 5 menjaga kejujuran data evaluasi publik agar kelemahan layanan benar-benar terdeteksi dan dibenahi. Sekadar bersikap jujur di meja sendiri tanpa mencegah manipulasi tim secara kolektif (skor 4) menjaga integritas personal, namun membiarkan pelaporan mutu instansi tetap bias.",
    "tip": "Transparansi evaluasi menuntut data objektif dan apa adanya, bukan manipulasi nilai demi citra semu."
  },
  {
    "id": "tkp-pel-031",
    "subPattern": "transparansi-standar-dan-bebas-pungli",
    "difficulty": "sulit",
    "prompt": "Seorang kontraktor rekanan lama kantor Anda menghubungi lewat pesan pribadi meminta informasi awal mengenai nilai perkiraan pemenang dan kelemahan dokumen pesaing sebelum pengumuman lelang diterbitkan resmi, sambil menjanjikan peningkatan dana bantuan kegiatan sosial pegawai akhir tahun. Sebagai bagian unit layanan pengadaan, tindakan paling berintegritas adalah ...",
    "options": [
      "Menolak tegas permintaan rahasia lelang, memutus komunikasi pribadi di luar sistem, dan melapor ke pimpinan atau UPG.",
      "Membocorkan kisaran perkiraan nilai pemenang secara rahasia asalkan dana bantuan sosial akhir tahun pegawai benar-benar disalurkan.",
      "Membalas singkat untuk mengingatkan rekanan agar memantau seluruh informasi pengadaan hanya melalui portal resmi e-procurement instansi.",
      "Memberikan gambaran umum mengenai kelengkapan administrasi standar secara normatif tanpa menyebut angka penawaran atau nama pesaing.",
      "Menolak permintaan tersebut secara sopan lalu memblokir pesan pribadi kontraktor agar proses evaluasi tetap aman, tanpa melaporkannya ke UPG."
    ],
    "optionScores": [
      5,
      1,
      3,
      2,
      4
    ],
    "answer": "A",
    "explanation": "Membocorkan data evaluasi lelang merusak keadilan pengadaan; menolak tegas, menutup komunikasi informal, dan melaporkan upaya intervensi ke pimpinan atau UPG menjamin akuntabilitas penuh (skor 5). Menolak secara sopan tanpa melaporkan upaya suap terselubung tersebut (skor 4) berisiko membiarkan pelaku mengulangi pendekatan ke pihak lain.",
    "tip": "Jaga kerahasiaan data tender/layanan strategis dari kontak informal, dan laporkan setiap upaya intervensi/suap terselubung."
  },
  {
    "id": "tkp-pel-032",
    "subPattern": "transparansi-standar-dan-bebas-pungli",
    "difficulty": "sulit",
    "prompt": "Pada portal keterbukaan aduan instansi, masuk laporan anonim lengkap disertai foto tanda bukti yang menuduh salah satu rekan dekat Anda memungut biaya tambahan pembuatan surat keterangan. Sebagai petugas pengelola pengaduan berintegritas, langkah tepat Anda adalah ...",
    "options": [
      "Meneruskan tiket pengaduan beserta lampiran fotonya ke atasan berwenang sesuai prosedur, setelah sebelumnya mengonfirmasi singkat kepada rekan.",
      "Memverifikasi bukti aduan secara objektif tanpa membocorkannya ke rekan, lalu meneruskan ke inspektorat sesuai aturan.",
      "Membagikan salinan foto tanpa identitas itu ke grup percakapan umum kantor sebagai pengingat terbuka bagi seluruh staf pelayanan.",
      "Menghapus laporan dari portal aduan karena pengirim anonim belum memiliki dasar pertanggungjawaban hukum.",
      "Menahan laporan anonim tersebut di daftar tunggu sampai masuk aduan kedua yang menyertakan identitas pelapor secara lebih lengkap."
    ],
    "optionScores": [
      4,
      5,
      2,
      1,
      3
    ],
    "answer": "B",
    "explanation": "Integritas pengelola pengaduan menuntut objektivitas, kerahasiaan pelapor, serta pencegahan penghilangan barang bukti sebelum pemeriksaan resmi oleh atasan atau inspektorat (skor 5). Mengonfirmasi terlebih dahulu kepada rekan yang diadukan sebelum melapor (skor 4) berniat adil secara personal, tetapi berisiko membocorkan proses pemeriksaan.",
    "tip": "Kelola aduan terhadap rekan kerja secara independen, rahasia, dan berbasis verifikasi bukti ke unit pemeriksa berwenang."
  },
  {
    "id": "tkp-pel-033",
    "subPattern": "penanganan-keluhan-dan-evaluasi-mutu",
    "difficulty": "mudah",
    "prompt": "Seorang warga menuliskan ulasan bintang satu di portal pengaduan publik karena merasa petugas loket terlalu lama memproses permohonannya akibat sistem sempat lambat di pagi hari. Tindakan paling konstruktif dari unit Anda adalah ...",
    "options": [
      "Memberikan balasan standar di portal aduan bahwa keterlambatan kerap terjadi ketika lonjakan sistem nasional pada jam sibuk pagi hari.",
      "Menghubungi nomor pelapor secara pribadi memintanya mengubah ulasan menjadi bintang lima setelah dokumennya terbit.",
      "Menanggapi ulasan dengan sopan disertai ucapan terima kasih, memaparkan langkah pembenahan, lalu mengevaluasi beban sistem pagi.",
      "Membalas ulasan secara santun dengan menyampaikan permohonan maaf dan berterima kasih atas masukan warga, tanpa mengaudit kendala pagi di internal.",
      "Mengabaikan ulasan bintang satu itu karena keluhan wajar terjadi pada unit dengan jumlah pengunjung harian tinggi."
    ],
    "optionScores": [
      3,
      1,
      5,
      4,
      2
    ],
    "answer": "C",
    "explanation": "Skor 5 memperlakukan keluhan publik sebagai pemicu perbaikan mutu berkelanjutan: menjawab santun, akuntabel, dan mengevaluasi akar masalah sistem pagi. Memberi balasan sopan dan permintaan maaf tanpa menindaklanjuti audit internal (skor 4) meredakan kesan di permukaan, namun membiarkan gangguan berulang.",
    "tip": "Lihat keluhan sebagai data perbaikan mutu, bukan serangan pribadi; jawab dengan santun, akuntabel, dan perbaiki akarnya."
  },
  {
    "id": "tkp-pel-034",
    "subPattern": "penanganan-keluhan-dan-evaluasi-mutu",
    "difficulty": "mudah",
    "prompt": "Akibat kesalahan input pegawai loket, nama pemilik pada surat izin yang baru terbit tertulis keliru satu huruf sehingga pemohon kembali datang mengadu. Sikap paling bertanggung jawab adalah ...",
    "options": [
      "Menjelaskan bahwa perbedaan satu huruf jarang menjadi kendala substantif sehingga warga disarankan tetap memakai surat yang sudah terbit.",
      "Meminta maaf dengan sopan atas kesalahan penulisan dan menerbitkan revisi surat tanpa pungutan biaya mengikuti jadwal antrean cetak reguler dua hari.",
      "Mencoret huruf yang salah ketik dengan rapi, membubuhkan stempel koreksi resmi dan paraf petugas agar surat tersebut dapat langsung dipergunakan.",
      "Meminta maaf tulus atas kekeliruan petugas, memprioritaskan cetak ulang seketika tanpa biaya, dan memperketat pemeriksaan pra-cetak bersama warga.",
      "Meminta pemohon mengambil nomor antrean baru dan menanggung biaya administrasi penggantian blanko karena draf awal telah disetujui sebelumnya."
    ],
    "optionScores": [
      2,
      4,
      3,
      5,
      1
    ],
    "answer": "D",
    "explanation": "Saat kesalahan berasal dari internal, tanggung jawab terbaik adalah mengakui keliru dengan tulus, melakukan pemulihan instan tanpa biaya, dan memperbaiki titik kontrol verifikasi (skor 5). Memperbaiki secara gratis namun memasukkan ke antrean reguler dua hari (skor 4) tetap membebani waktu warga akibat kesalahan petugas.",
    "tip": "Saat kekeliruan berasal dari pihak internal, akui jujur, perbaiki cepat tanpa membebani warga lagi, dan perbaiki titik kontrolnya."
  },
  {
    "id": "tkp-pel-035",
    "subPattern": "penanganan-keluhan-dan-evaluasi-mutu",
    "difficulty": "sedang",
    "prompt": "Setiap hari Senin pagi, kotak keluhan fisik di kantor Anda selalu penuh berisi keluhan senada tentang ruang tunggu yang panas dan kurangnya petunjuk arah loket ke-3 dan ke-4. Sebagai anggota tim pelayanan, langkah perbaikan nyata yang paling tepat adalah ...",
    "options": [
      "Mengosongkan isi kotak keluhan setiap akhir pekan untuk diarsipkan di gudang tanpa membawa temuan berulangnya ke dalam rapat evaluasi unit.",
      "Mengarahkan petugas penerima tamu berdiri lebih aktif di pintu masuk guna memandu pengunjung mencari lokasi loket tiga dan empat secara lisan.",
      "Menyampaikan kepada pengunjung dengan ramah bahwa bangunan kantor memang berkapasitas terbatas sehingga sirkulasi udara ruang tunggu belum ideal.",
      "Merekap seluruh isi kotak keluhan secara lengkap dalam laporan bulanan kepada kepala bagian sarana guna menunggu alokasi anggaran perbaikan gedung.",
      "Merekap keluhan berulang dengan data frekuensi, segera memasang penunjuk arah visual sebagai solusi cepat, dan mengajukan pembenahan pendingin ruangan ke rapat."
    ],
    "optionScores": [
      1,
      3,
      2,
      4,
      5
    ],
    "answer": "E",
    "explanation": "Skor 5 mengolah keluhan menjadi data evaluasi, langsung mengeksekusi perbaikan cepat berbiaya rendah (penunjuk arah), dan mengawal perbaikan fasilitas jangka menengah ke pimpinan. Hanya merangkum laporan bulanan sambil menunggu anggaran untuk seluruh poin (skor 4) tertib secara administratif, tetapi membiarkan kebingungan arah berlarut.",
    "tip": "Kelompokkan keluhan berulang menjadi data evaluasi, lakukan perbaikan cepat berdaya dampak langsung, dan ajukan pembenahan strukturalnya."
  },
  {
    "id": "tkp-pel-036",
    "subPattern": "penanganan-keluhan-dan-evaluasi-mutu",
    "difficulty": "sedang",
    "prompt": "Seorang pemohon mengeluhkan bahwa nomor layanan panggilan telepon kantor tidak pernah diangkat saat jam sibuk pagi, padahal instansi selalu mencantumkan nomor tersebut pada situs resminya. Tindakan korektif paling tepat agar pengaduan dan konsultasi tetap responsif adalah ...",
    "options": [
      "Mengatur jadwal piket penerima telepon bergilir, menambah FAQ atau WhatsApp resmi, dan memantau tingkat panggilan terjawab.",
      "Menugaskan seorang staf administrasi mengangkat panggilan masuk secara bergantian saat tugas loket tatap muka sedang tidak terlalu padat.",
      "Mengaktifkan layanan pesan suara otomatis pada saluran telepon kantor saat jam sibuk pagi tanpa jadwal pemeriksaan balasan secara berkala.",
      "Menghapus pencantuman nomor telepon kantor dari halaman situs resmi agar masyarakat tidak lagi kecewa saat panggilan gagal terhubung.",
      "Memperbarui keterangan pada situs resmi bahwa layanan konsultasi telepon paling optimal dihubungi pada jam kerja siang hingga sore hari."
    ],
    "optionScores": [
      5,
      4,
      2,
      1,
      3
    ],
    "answer": "A",
    "explanation": "Setiap kanal informasi resmi wajib dikelola dengan jadwal petugas jelas, dukungan FAQ digital, dan pemantauan kinerja agar responsif (skor 5). Menunjuk staf mengangkat telepon saat sela waktu senggang saja tanpa jadwal maupun evaluasi (skor 4) berpotensi tetap mengabaikan panggilan di jam puncak.",
    "tip": "Setiap kanal layanan yang dipublikasikan resmi wajib dikelola dengan penjadwalan petugas, sistem respons, dan pemantauan rutin."
  },
  {
    "id": "tkp-pel-037",
    "subPattern": "penanganan-keluhan-dan-evaluasi-mutu",
    "difficulty": "sedang",
    "prompt": "Rekan kerja di tim layanan sering menunda menutup tiket aduan masyarakat hingga berhari-hari hanya karena menunggu jawaban formal dari seksi lain yang tidak kunjung merespons, sementara pelapor terus menanyakan progresnya. Sebagai rekan sejawat dalam tim layanan, sikap paling proaktif adalah ...",
    "options": [
      "Mengingatkan rekan sejawat secara rutin setiap akhir pekan agar menindaklanjuti tiket aduan tertunda sebelum tenggat pelaporan bulanan.",
      "Membantu koordinasi langsung lintas seksi guna mempercepat kepastian teknis sekaligus rutin mengabari progres kepada pelapor.",
      "Menutup tiket aduan lebih awal berstatus selesai agar grafik persentase kecepatan respons unit terlihat tinggi.",
      "Menjaga komunikasi jujur kepada warga pelapor melalui pembaruan status berkala sambil tetap menunggu jawaban tertulis resmi dari seksi teknis.",
      "Memperpanjang batas waktu standar penyelesaian aduan di aplikasi internal agar antrean tiket lintas seksi tidak tercatat melewati tenggat."
    ],
    "optionScores": [
      3,
      5,
      1,
      4,
      2
    ],
    "answer": "B",
    "explanation": "Skor 5 menunjukkan tanggung jawab utuh: aktif menjembatani koordinasi lintas unit untuk mempercepat solusi teknis sekaligus menjaga transparansi progres ke warga. Memberi kabar status secara jujur namun tetap pasif menunggu respons unit lain (skor 4) menjaga komunikasi, tetapi belum memutus kemacetan penyelesaian.",
    "tip": "Jangan memanipulasi status tiket maupun menyalahkan unit lain ke publik; kejar eskalasi internal dan update jujur kepada warga."
  },
  {
    "id": "tkp-pel-038",
    "subPattern": "penanganan-keluhan-dan-evaluasi-mutu",
    "difficulty": "sedang",
    "prompt": "Dalam rapat evaluasi triwulanan, atasan meminta ide inovatif sederhana untuk menurunkan angka keluhan warga tentang ketidakpastian status berkas setelah diserahkan di loket penerimaan. Usulan terbaik yang paling mudah dijalankan dan berdampak luas adalah ...",
    "options": [
      "Menyeragamkan estimasi waktu penyelesaian seluruh jenis layanan menjadi dua pekan agar petugas tidak sering menerima komplain keterlambatan.",
      "Mencantumkan tanggal perkiraan selesai secara rinci di tanda terima serta membuka nomor WhatsApp tanya status yang dijawab manual oleh petugas piket.",
      "Menerapkan tanda terima berkode pelacakan daring dan notifikasi otomatis di tiap tahap agar pemohon memantau berkas secara mandiri.",
      "Memasang papan daftar harian di lobi depan yang memuat daftar nomor pendaftaran berkas yang sudah selesai cetak dan siap diambil.",
      "Menghapus kolom tanggal perkiraan selesai pada tanda terima agar pemohon tidak punya patokan menuntut keterlambatan."
    ],
    "optionScores": [
      2,
      4,
      5,
      3,
      1
    ],
    "answer": "C",
    "explanation": "Fitur lacak kode daring dan notifikasi otomatis memotong ketidakpastian status secara real-time dan mengurangi antrean pertanyaan berulang (skor 5). Memberi tanggal estimasi dan kanal tanya jawab manual via WhatsApp (skor 4) cukup membantu, namun membebani petugas menjawab pertanyaan satu per satu.",
    "tip": "Inovasi layanan terbaik selalu memotong ketidakpastian warga melalui informasi real-time atau pelacakan mandiri."
  },
  {
    "id": "tkp-pel-039",
    "subPattern": "penanganan-keluhan-dan-evaluasi-mutu",
    "difficulty": "sulit",
    "prompt": "Setelah sistem layanan daring baru berjalan sebulan, laporan menunjukkan jumlah permohonan selesai meningkat 30%, namun tingkat kepuasan warga justru turun akibat kesulitan melacak alasan penolakan berkas dan lambatnya tanggapan kotak obrolan bantu. Analisis mutu dan tindakan paling tepat adalah ...",
    "options": [
      "Menonaktifkan sementara fitur kotak obrolan bantu pada pekan sibuk supaya tenaga petugas dapat terfokus memeriksa antrean masuk.",
      "Menerbitkan panduan PDF berisi contoh perbaikan kesalahan umum pengunggahan berkas pada situs agar dipelajari pemohon.",
      "Menonjolkan capaian peningkatan volume tiga puluh persen dalam laporan publik karena produktivitas berkas terbukti naik.",
      "Mengevaluasi kendala pengalaman pengguna, memperjelas alasan penolakan beserta langkah koreksi, dan menetapkan jadwal respons obrolan bantu.",
      "Menambah personel piket untuk mempercepat balasan pada kotak obrolan bantu di jam ramai, sambil tetap mempertahankan format alasan penolakan bawaan sistem."
    ],
    "optionScores": [
      1,
      3,
      2,
      5,
      4
    ],
    "answer": "D",
    "explanation": "Mutu layanan digital tidak hanya diukur dari jumlah berkas selesai, tetapi kejelasan solusi saat pengguna terkendala (skor 5). Mempercepat balasan obrolan tanpa membenahi redaksi alasan penolakan di sistem (skor 4) hanya mengobati gejala, bukan menyembuhkan kebingungan pengguna di hulu.",
    "tip": "Evaluasi layanan publik modern harus menyandingkan capaian volume (kuantitas) dengan kemudahan dan kejelasan solusi bagi pengguna (kualitas)."
  },
  {
    "id": "tkp-pel-040",
    "subPattern": "penanganan-keluhan-dan-evaluasi-mutu",
    "difficulty": "sulit",
    "prompt": "Anda ditunjuk memimpin gugus kendali mutu pelayanan. Saat mengaudit standar operasional yang sudah berumur delapan tahun, Anda menemukan beberapa syarat berkas fotokopi yang sebenarnya datanya sudah terintegrasi antarinstansi pemerintah melalui basis data induk kependudukan. Langkah strategis jangka panjang yang paling tepat Anda tempuh adalah ...",
    "options": [
      "Mempertahankan syarat fotokopi sementara demi kepastian hukum dokumen, sembari mengajukan usulan perbaikan integrasi data untuk tahun anggaran depan.",
      "Langsung menghapus syarat fotokopi lewat pengumuman lisan di meja loket besok pagi tanpa mengubah SOP atau menguji tautan data.",
      "Tetap mempertahankan syarat fotokopi lengkap dengan cap legalisasi rangkap supaya seluruh seksi memiliki arsip fisik cadangan di lemari.",
      "Mengizinkan petugas loket menerima pindaian digital sebagai pelengkap sementara menunggu terbitnya revisi pedoman layanan instansi.",
      "Mengusulkan revisi penyederhanaan SOP berbasis prinsip sekali serah data, menguji keandalan sinkronisasi antarsistem, dan menyiapkan masa transisi jelas."
    ],
    "optionScores": [
      4,
      2,
      1,
      3,
      5
    ],
    "answer": "E",
    "explanation": "Skor 5 menempuh reformasi layanan berbasis integrasi data (once-only principle) secara terukur melalui revisi SOP sah, uji keandalan teknis, dan masa transisi jelas. Mengajukan kajian jangka panjang sambil terus mewajibkan fotokopi redundan (skor 4) menjaga kepastian prosedural, namun menunda pemangkasan beban warga padahal basis data sudah terintegrasi.",
    "tip": "Reformasi birokrasi pelayanan menggabungkan pemangkasan syarat berulang (once-only data), kesiapan regulasi SOP, dan uji keandalan teknis."
  }
];

export const pelayananPublikQuestions: readonly Question[] = buildTkpPatternQuestions(
  "pelayanan-publik",
  pelayananPublikDrafts,
);
