import type { TkpQuestionDraft } from "@/modules/question-bank/domain/question";

export const pelayananPublikBatch2Drafts: readonly TkpQuestionDraft[] = [
  {
    "id": "tkp-pel-041",
    "subPattern": "sikap-ramah-empati-dan-pengendalian-emosi",
    "difficulty": "mudah",
    "prompt": "Anda bertugas di meja informasi rumah sakit daerah. Seorang anggota keluarga pasien datang terengah-engah, hampir menangis, dan berbicara terbata-bata karena tersesat mencari ruang ICU setelah masuk dari gerbang belakang. Sikap Anda yang paling tepat adalah ...",
    "options": [
      "Menyambutnya dengan tenang dan penuh empati, menenangkannya sejenak, lalu mengantar atau memandu langsung menuju rute tercepat ke ruang ICU.",
      "Menunjukkan arah ruang ICU melalui peta denah gedung di meja informasi dengan ramah agar pengunjung terbiasa mengikuti petunjuk rumah sakit.",
      "Mempersilakannya duduk dulu untuk menarik napas sebentar sambil menyerahkan brosur tata tertib kunjungan pasien ruang intensif.",
      "Meminta petugas keamanan di dekat pintu masuk membantunya mencari lift terdekat karena meja informasi sedang mencatat daftar tamu.",
      "Menjelaskan secara singkat bahwa gedung ICU berada di sayap depan sehingga ia harus memutar lewat koridor utama lantai dasar."
    ],
    "optionScores": [
      5,
      4,
      3,
      2,
      1
    ],
    "answer": "A",
    "explanation": "Skor tertinggi memadukan empati langsung terhadap kondisi emosional keluarga pasien dengan tindakan konkret memandu hingga jelas atau mengantarnya ke rute tercepat. Memberi arahan lewat denah secara ramah tetap sopan (skor 4), tetapi kurang membantu bagi orang yang sedang panik dan berisiko tersesat lagi.",
    "tip": "Saat menghadapi warga yang panik dalam situasi mendesak, gabungkan sikap menenangkan dengan pendampingan rute atau solusi paling jelas."
  },
  {
    "id": "tkp-pel-042",
    "subPattern": "sikap-ramah-empati-dan-pengendalian-emosi",
    "difficulty": "mudah",
    "prompt": "Lima menit sebelum jam istirahat siang loket layanan pajak kendaraan bermotor, seorang pengemudi ojek daring datang dengan jaket basah kuyup kehujanan untuk mengurus pengesahan pajak tahunan karena sore hari harus kembali bekerja. Tindakan Anda adalah ...",
    "options": [
      "Menyampaikan dengan sopan bahwa loket segera memasuki jam istirahat sehingga berkas dapat ditinggal dulu untuk diproses setelah pukul satu siang.",
      "Tetap menyambutnya dengan ramah, memeriksa kelengkapan berkas, dan memproses pengesahan secepatnya sebelum jam istirahat dimulai.",
      "Meminta pemohon berteduh di teras kantor sambil mengeringkan pakaian terlebih dahulu agar ruang tunggu dan lantai loket tetap bersih.",
      "Menutup jendela loket tepat lima menit sebelum istirahat agar petugas memiliki waktu cukup merapikan berkas masuk pagi hari.",
      "Mengarahkan pemohon memakai layanan pembayaran daring melalui ponselnya saja tanpa memeriksa apakah kendala administrasinya sudah selesai."
    ],
    "optionScores": [
      4,
      5,
      3,
      1,
      2
    ],
    "answer": "B",
    "explanation": "Selama masih berada dalam jam layanan sebelum waktu istirahat resmi dimulai, melayani pemohon dengan ramah dan menuntaskan prosesnya menunjukkan empati serta komitmen pelayanan prima (skor 5). Menitipkan berkas untuk diproses setelah istirahat (skor 4) memang berniat baik dan sopan, namun menahan waktu kerja warga yang menggantungkan penghasilan harian.",
    "tip": "Maksimalkan sisa waktu jam operasional sebelum istirahat atau tutup loket untuk menuntaskan urusan pemohon yang sudah hadir."
  },
  {
    "id": "tkp-pel-043",
    "subPattern": "sikap-ramah-empati-dan-pengendalian-emosi",
    "difficulty": "sedang",
    "prompt": "Saat bertugas di posko verifikasi pendaftaran sekolah, seorang wali murid meluapkan kemarahan di depan loket karena anaknya gagal tervalidasi jalur zonasi akibat ia sendiri keliru menandai titik koordinat rumah di aplikasi pendaftaran. Sikap terbaik Anda adalah ...",
    "options": [
      "Menunjukkan tangkapan layar kesalahan input miliknya agar ia sadar kekeliruan berasal dari pengisian pribadi, bukan dari panitia verifikasi.",
      "Memintanya mengisi buku pengaduan terlebih dahulu sambil menunggu kepala sekolah menyelesaikan rapat koordinasi penerimaan siswa baru.",
      "Tetap tenang mendengarkan kekecewaannya, menjelaskan penyebab teknis dengan bahasa santun, lalu memandu prosedur perbaikan titik koordinat resmi.",
      "Menjawab dengan nada tegas namun sopan bahwa jadwal verifikasi otomatis sistem tidak dapat diganggu gugat oleh petugas posko.",
      "Mengabaikan omelannya dan memanggil nomor antrean pendaftar berikutnya agar warga lain yang tertib tidak ikut menunggu lama."
    ],
    "optionScores": [
      2,
      3,
      5,
      4,
      1
    ],
    "answer": "C",
    "explanation": "Skor 5 mengedepankan kendali emosi, kesediaan mendengar keresahan orang tua, penjelasan penyebab tanpa menyalahkan secara defensif, dan panduan konkret perbaikan sesuai mekanisme resmi. Menjelaskan ketentuan secara sopan namun kaku (skor 4) menjaga aturan, tetapi gagal memberi jalan keluar atas masalah teknis warga.",
    "tip": "Kendalikan emosi saat disalahkan atas kelalaian pemohon sendiri; jelaskan fakta secara santun lalu arahkan ke jalur perbaikan resmi."
  },
  {
    "id": "tkp-pel-044",
    "subPattern": "sikap-ramah-empati-dan-pengendalian-emosi",
    "difficulty": "sedang",
    "prompt": "Di siang hari yang terik saat Anda sedang berpuasa, seorang pemohon lanjut usia dengan pendengaran berkurang berulang kali salah menangkap panggilan pengeras suara lalu mengetuk kaca loket Anda cukup keras karena mengira gilirannya dilewati. Respons Anda yang paling tepat adalah ...",
    "options": [
      "Menunjuk layar nomor antrean melalui kaca loket sambil memberi isyarat tangan agar beliau kembali duduk menunggu panggilan resmi.",
      "Membuka pengeras suara lebih keras agar seluruh pengunjung di ruang tunggu mendengar ulang urutan nomor antrean yang sedang dilayani.",
      "Meminta petugas keamanan mendampingi beliau agar tidak terus mengetuk kaca meja pelayanan yang sedang memproses berkas warga lain.",
      "Menghampirinya dengan senyum ramah, berbicara jelas dengan intonasi tenang di dekatnya, memastikan nomor antrean, dan memberi kepastian giliran.",
      "Tetap fokus menyelesaikan pengisian data warga di depan meja terlebih dahulu baru menoleh ke arah ketukan kaca setelah selesai."
    ],
    "optionScores": [
      3,
      2,
      4,
      5,
      1
    ],
    "answer": "D",
    "explanation": "Kondisi fisik pemohon lanjut usia dan keterbatasan pendengaran menuntut kesabaran ekstra, pendekatan tatap muka yang ramah, suara jelas, serta kepastian antrean (skor 5). Meminta bantuan petugas keamanan dengan sopan (skor 4) menjaga ketertiban loket, tetapi terasa kurang hangat dibanding menyapa dan memastikan langsung kebutuhan pemohon.",
    "tip": "Kondisi fisik pribadi petugas tidak boleh mengurangi keramahan; hampiri dan komunikasikan informasi dengan jelas kepada warga berkebutuhan khusus."
  },
  {
    "id": "tkp-pel-045",
    "subPattern": "sikap-ramah-empati-dan-pengendalian-emosi",
    "difficulty": "sedang",
    "prompt": "Sebagai petugas layanan pusat panggilan jaminan sosial, Anda menerima telepon dari warga yang melontarkan kata-kata kasar karena kepesertaannya nonaktif otomatis akibat pemadanan data kependudukan, padahal hal itu bukan kelalaian Anda. Langkah paling tepat adalah ...",
    "options": [
      "Memperingatkan penelepon dengan tenang bahwa panggilan akan diputus apabila kata-kata kasar masih diucapkan selama percakapan.",
      "Menjelaskan secara cepat bahwa pemadanan data dilakukan oleh kementerian pusat sehingga petugas daerah tidak memiliki kewenangan mengubahnya.",
      "Mendiamkan omelannya hingga selesai berbicara lalu langsung memindahkan sambungan telepon ke bagian verifikasi data kependudukan.",
      "Meminta penelepon datang langsung ke kantor cabang terdekat sambil membawa kartu keluarga asli agar lebih mudah ditangani petugas loket.",
      "Tetap tenang tanpa terpancing emosi, mengakui ketidaknyamanannya, menjelaskan alasan pemadanan data secara santun, dan memandu aktivasi ulang."
    ],
    "optionScores": [
      3,
      2,
      1,
      4,
      5
    ],
    "answer": "E",
    "explanation": "Skor 5 menunjukkan ketahanan emosional tinggi, empati pada situasi darurat pemohon, kejelasan informasi teknis, sekaligus panduan langkah aktivasi ulang di tempat. Mengarahkan datang ke kantor cabang secara sopan (skor 4) memang aman secara prosedural, namun tidak mengoptimalkan fungsi pusat panggilan untuk memberi panduan awal dan cek status cepat.",
    "tip": "Jangan terpancing ucapan kasar di saluran telepon; validasi keresahan penelepon, jelaskan duduk perkaranya, dan tuntaskan panduan teknisnya."
  },
  {
    "id": "tkp-pel-046",
    "subPattern": "sikap-ramah-empati-dan-pengendalian-emosi",
    "difficulty": "sedang",
    "prompt": "Saat berjalan menuju ruang arsip dekat teras kantor kecamatan, Anda mendengar seorang warga yang baru keluar dari loket sebelah mengeluh kesal kepada temannya karena masih bingung dengan syarat balik nama berkas, sementara petugas loketnya tampak sibuk. Sikap Anda adalah ...",
    "options": [
      "Mencatat keluhan tersebut sebagai bahan masukan rapat evaluasi mingguan agar petugas loket sebelah memperbaiki cara menjelaskannya.",
      "Menyapa warga tersebut dengan ramah, menanyakan bagian persyaratan yang masih membingungkan, dan menjelaskannya hingga tuntas serta jelas.",
      "Mengajak petugas loket sebelah keluar sebentar untuk mengingatkan agar lebih sabar menjelaskan alur syarat kepada setiap pemohon.",
      "Menyarankan warga tersebut membaca papan alur informasi resmi yang terpasang di dinding teras agar lebih mudah memahami tahapannya.",
      "Membiarkannya berlalu karena berkas warga tersebut ditangani loket lain yang memiliki penanggung jawab operasional masing-masing."
    ],
    "optionScores": [
      4,
      5,
      3,
      2,
      1
    ],
    "answer": "B",
    "explanation": "Kepedulian terhadap kepuasan masyarakat tidak dibatasi sekat meja kerja; menyapa langsung warga yang masih berada di kantor dan memastikan ia pulang dengan pemahaman tuntas meraih skor 5. Mencatat untuk evaluasi mingguan (skor 4) baik bagi perbaikan jangka panjang, namun membiarkan warga pulang dalam keadaan tetap bingung.",
    "tip": "Pelayanan publik adalah tanggung jawab kolektif instansi; selesaikan kebingungan warga seketika bila Anda masih dapat menjangkaunya."
  },
  {
    "id": "tkp-pel-047",
    "subPattern": "sikap-ramah-empati-dan-pengendalian-emosi",
    "difficulty": "sulit",
    "prompt": "Dalam layanan verifikasi pengaduan bantuan sosial di balai kelurahan, seorang warga yang tidak masuk daftar penerima menuduh Anda dengan suara lantang bersikap pilih kasih kepada kerabat pengurus RT sehingga puluhan warga lain mulai ikut gaduh. Tindakan paling matang Anda adalah ...",
    "options": [
      "Menutup meja layanan sementara waktu dan meminta ketua RT menenangkan warga sebelum verifikasi individual dapat dilanjutkan kembali.",
      "Menantang balik secara sopan agar warga tersebut menunjukkan bukti konkret tuduhannya supaya tidak menyebarkan fitnah di forum umum.",
      "Menyerahkan daftar nama penerima kepada warga tersebut untuk dibaca sendiri agar ia melihat tidak ada nama kerabat pengurus RT.",
      "Tetap tenang, menjaga nada suara rendah dan santun, mengajak warga tersebut memeriksa data kelayakan secara transparan serta membuka jalur sanggah resmi.",
      "Menjelaskan dengan suara lebih keras bahwa daftar penerima ditetapkan langsung oleh sistem pusat sehingga petugas kelurahan tidak ikut campur."
    ],
    "optionScores": [
      3,
      1,
      2,
      5,
      4
    ],
    "answer": "D",
    "explanation": "Menghadapi tuduhan publik menuntut ketenangan prima, transparansi indikator kelayakan secara objektif tanpa defensif, dan penyediaan saluran sanggah resmi agar ketegangan mereda (skor 5). Menjelaskan bahwa data berasal dari pusat dengan suara keras (skor 4) benar secara fakta, tetapi nada tinggi berisiko memicu defensivitas massa dan mengabaikan hak sanggah warga.",
    "tip": "Pada situasi tuduhan di ruang publik, turunkan ketegangan dengan sikap tenang, buka objektivitas kriteria secara transparan, dan fasilitasi jalur sanggah."
  },
  {
    "id": "tkp-pel-048",
    "subPattern": "sikap-ramah-empati-dan-pengendalian-emosi",
    "difficulty": "sulit",
    "prompt": "Menjelang sore di unit layanan paspor, mesin pencetak utama mendadak rusak setelah puluhan pemohon menunggu berjam-jam. Beberapa pemohon yang sudah memesan tiket keberangkatan mulai berkerumun merekam video protes dengan ponsel sambil mendesak kepastian. Sebagai koordinator loket, langkah paling tepat Anda adalah ...",
    "options": [
      "Menemui kerumunan dengan sikap tenang dan empatik, meminta maaf terbuka atas kendala teknis, lalu mengumumkan skema pencetakan alternatif serta jadwal pasti penyelesaian.",
      "Meminta petugas keamanan mengarahkan warga agar tidak merekam video di area pelayanan demi menjaga ketertiban ruang tunggu.",
      "Mengumpulkan nomor telepon seluruh pemohon terdampak secara sopan dan menjanjikan pemberitahuan lewat pesan singkat setelah teknisi selesai memperbaiki mesin.",
      "Tetap berada di ruang belakang mendampingi teknisi mempercepat perbaikan mesin agar paspor bisa segera dicetak sebelum warga semakin marah.",
      "Menjelaskan kepada pemohon bahwa kerusakan mesin merupakan keadaan kahar di luar kendali petugas sehingga jadwal pengambilan otomatis diundur besok."
    ],
    "optionScores": [
      5,
      1,
      4,
      3,
      2
    ],
    "answer": "A",
    "explanation": "Skor 5 menunjukkan kepemimpinan layanan yang hadir langsung menghadapi publik dengan empati, tidak anti-dokumentasi warga, serta segera menawarkan opsi solusi konkret dan kepastian waktu. Mengumpulkan nomor telepon dengan sopan tanpa skema alternatif mendesak di tempat (skor 4) baik secara administratif, tetapi belum menjawab urgensi pemohon bertiket perjalanan.",
    "tip": "Saat gangguan teknis massal terjadi, hadir langsung dengan permohonan maaf tulus, komunikasi terbuka, dan skema solusi darurat yang pasti."
  },
  {
    "id": "tkp-pel-049",
    "subPattern": "solusi-cepat-dan-kepatuhan-sop",
    "difficulty": "mudah",
    "prompt": "Seorang pelamar kerja membutuhkan surat keterangan catatan kepolisian/domisili untuk pemberkasan yang ditutup dua jam lagi, namun salinan fotokopi KTP yang dibawanya terpotong dan buram. Kebetulan ia membawa KTP-el asli dan kantor Anda memiliki mesin fotokopi operasional. Tindakan Anda adalah ...",
    "options": [
      "Menyarankan pemohon mencari warung fotokopi di seberang jalan terlebih dahulu agar seluruh arsip berkas fisik seragam rapi.",
      "Menerima salinan fotokopi yang buram tersebut demi mempercepat proses karena yang terpenting pemohon sudah hadir langsung di loket.",
      "Membantu memfotokopi atau memindai KTP-el asli menggunakan fasilitas kantor sesuai ketentuan arsip lalu segera memproses permohonannya.",
      "Meminta pemohon memotret KTP-el menggunakan ponsel pribadinya dan mengirimkannya lewat aplikasi pesan untuk dicetak setelah antrean sepi.",
      "Menunda pengajuan berkas sampai pemohon melampirkan salinan cetak yang jelas dari tempat fotokopi terdekat keesokan harinya."
    ],
    "optionScores": [
      3,
      2,
      5,
      4,
      1
    ],
    "answer": "C",
    "explanation": "Memanfaatkan fasilitas kantor yang sah untuk menyalin KTP-el asli memastikan keabsahan arsip sesuai SOP sekaligus memberi solusi cepat bagi tenggat warga (skor 5). Meminta mengirim foto lewat aplikasi pesan untuk dicetak belakangan (skor 4) tetap berusaha membantu, namun kurang aman bagi privasi data dan memperlama penyelesaian langsung.",
    "tip": "Manfaatkan sarana pendukung resmi di kantor bila kendala administratif kecil bisa diselesaikan seketika tanpa melanggar SOP."
  },
  {
    "id": "tkp-pel-050",
    "subPattern": "solusi-cepat-dan-kepatuhan-sop",
    "difficulty": "mudah",
    "prompt": "Seorang guru dari kecamatan kepulauan terpencil datang ke dinas pendidikan untuk verifikasi berkas tunjangan, namun satu lembar surat keterangan tugas kepala sekolah tertinggal. Kepala sekolahnya sudah mengirimkan pindaian asli surat bermeterai itu lewat surel resmi sekolah ke alamat surel dinas. Langkah paling tepat Anda adalah ...",
    "options": [
      "Meminta guru tersebut pulang mengambil berkas cetak asli demi menyamakan standar map fisik seluruh pengusul di kecamatan lain.",
      "Meloloskan berkas guru tersebut tanpa melampirkan surat keterangan tugas karena merasa kasihan dengan jarak tempuhnya yang jauh.",
      "Mencatat kekurangannya sebagai berkas tidak lengkap dan meminta guru mengirim ulang surat fisiknya lewat jasa pos minggu depan.",
      "Menghubungi kepala sekolah lewat telepon untuk menanyakan kebenaran pengangkatan lalu menyuruh guru membuat surat pernyataan pribadi.",
      "Memverifikasi keabsahan surel resmi sekolah, mencetak lampiran surat tersebut sebagai bagian berkas sesuai aturan verifikasi digital, dan melanjutkan prosesnya."
    ],
    "optionScores": [
      3,
      1,
      2,
      4,
      5
    ],
    "answer": "E",
    "explanation": "Skor 5 memanfaatkan jalur komunikasi resmi instansi (surel dinas terverifikasi) untuk melengkapi dokumen secara sah sehingga warga kepulauan tidak perlu menempuh perjalanan ulang. Menelepon kepala sekolah lalu membuat surat pernyataan pribadi (skor 4) tetap mencari solusi, tetapi melewati dokumen resmi yang sebenarnya sudah dikirim lewat surel dinas.",
    "tip": "Gunakan dokumen elektronik yang dikirim lewat kanal resmi instansi setelah memverifikasi keasliannya agar layanan efisien dan tetap patuh aturan."
  },
  {
    "id": "tkp-pel-051",
    "subPattern": "solusi-cepat-dan-kepatuhan-sop",
    "difficulty": "sedang",
    "prompt": "Saat memverifikasi berkas pengajuan dokumen kependudukan, Anda menemukan perbedaan satu huruf nama ibu antara akta lama dan kartu keluarga terbaru. Pemohon mendesak agar Anda langsung mengetikkan penyesuaian nama di sistem tanpa berita acara pembetulan agar cepat selesai hari ini. Sikap paling tepat Anda adalah ...",
    "options": [
      "Menolak dengan santun perubahan sepihak di sistem, menjelaskan risiko hukum di kemudian hari, dan langsung memandu proses berita acara pembetulan secara cepat.",
      "Mengubah data di sistem mengikuti kartu keluarga terbaru agar urusan pemohon cepat selesai lalu meminta pemohon membuat surat pernyataan sendiri.",
      "Menolak permohonan sepenuhnya dan meminta pemohon kembali minggu depan setelah mengurus surat penetapan pengadilan negeri terlebih dahulu.",
      "Menerima berkas apa adanya untuk diteruskan ke operator pencetak agar atasan langsung yang memutuskan perlu tidaknya pembetulan.",
      "Menyarankan pemohon tetap memakai dokumen lama tanpa perbaikan karena perbedaan satu huruf dianggap wajar dan tidak berpengaruh."
    ],
    "optionScores": [
      5,
      2,
      4,
      3,
      1
    ],
    "answer": "A",
    "explanation": "Integritas data kependudukan tidak boleh diubah tanpa dasar berita acara pembetulan sesuai SOP; menolak secara santun sambil langsung memandu prosedur pembetulan resmi meraih skor 5. Mengarahkan ke penetapan pengadilan padahal tersedia mekanisme pembetulan administrasi (skor 4) patuh pada kehati-hatian, namun kurang efisien karena membebani warga prosedur lebih panjang.",
    "tip": "Jaga keabsahan data resmi dari jalan pintas ilegal, sambil tetap memandu mekanisme pembetulan prosedural tercepat yang berlaku."
  },
  {
    "id": "tkp-pel-052",
    "subPattern": "solusi-cepat-dan-kepatuhan-sop",
    "difficulty": "sedang",
    "prompt": "Atasan langsung Anda meminta berkas rekomendasi teknis usaha milik seorang kenalan pejabat segera diterbitkan hari ini tanpa pemeriksaan lokasi, padahal SOP mewajibkan verifikasi foto lapangan berkoordinat sebelum rekomendasi ditandatangani. Sikap paling tepat Anda adalah ...",
    "options": [
      "Menerbitkan draf rekomendasi dengan catatan khusus di bagian bawah bahwa pemeriksaan lokasi akan menyusul dalam tujuh hari kerja.",
      "Menolak permintaan atasan secara terang-terangan di grup pesan tim agar seluruh staf mengetahui pentingnya kepatuhan terhadap SOP.",
      "Mengikuti instruksi atasan langsung demi menjaga loyalitas hierarki birokrasi karena tanggung jawab akhir berada pada penandatangan.",
      "Menjelaskan secara santun kepada atasan tentang syarat wajib foto berkoordinat dalam SOP, lalu menawarkan penjadwalan verifikasi lapangan tercepat hari itu juga.",
      "Menunda proses berkas tersebut tanpa memberi penjelasan kepada atasan hingga kenalan pejabat tersebut menghubungi ulang."
    ],
    "optionScores": [
      3,
      2,
      1,
      5,
      4
    ],
    "answer": "D",
    "explanation": "Skor 5 memadukan kepatuhan penuh pada SOP, etika komunikasi santun kepada atasan, dan solusi cepat berupa penjadwalan survei lapangan hari itu juga sehingga layanan tetap lancar tanpa melanggar aturan. Menunda tanpa penjelasan (skor 4) memang menghindari pelanggaran langsung, tetapi tidak komunikatif dan menghambat kejelasan layanan.",
    "tip": "Saat diminta memotong prosedur wajib oleh pimpinan, sampaikan risiko aturan secara santun sembari tawarkan percepatan pelaksanaan SOP."
  },
  {
    "id": "tkp-pel-053",
    "subPattern": "solusi-cepat-dan-kepatuhan-sop",
    "difficulty": "sedang",
    "prompt": "Banjir bandang merendam beberapa wilayah sehingga banyak warga kehilangan dokumen identitas fisik. Untuk penerbitan ulang, SOP reguler mensyaratkan surat pengantar RT, sementara kantor sekretariat RT setempat juga ikut terendam dan pengurusnya mengungsi. Langkah paling tepat Anda adalah ...",
    "options": [
      "Meminta warga korban banjir menunggu hingga situasi surut dan pengurus RT kembali membuka layanan surat pengantar seperti biasa.",
      "Mengusulkan atau menerapkan protokol layanan darurat bencana memakai verifikasi biometrik/basis data induk kependudukan serta koordinasi cepat kelurahan/posko.",
      "Menerbitkan langsung seluruh dokumen baru berdasarkan pengakuan lisan pemohon di posko tanpa pencatatan bukti pengganti.",
      "Menghubungi seluruh ketua RT terdampak satu per satu lewat pesan singkat untuk meminta persetujuan lisan sebelum mencetak dokumen warga.",
      "Membuka meja pendataan manual saja di posko banjir untuk mencatat nama korban sebelum diproses di kantor induk setelah masa tanggap darurat selesai."
    ],
    "optionScores": [
      2,
      5,
      1,
      4,
      3
    ],
    "answer": "B",
    "explanation": "Dalam kondisi darurat bencana, layanan publik harus adaptif tanpa menanggalkan validitas; memakai protokol darurat berbasis verifikasi data induk/biometrik dan koordinasi posko resmi meraih skor 5. Meminta persetujuan lisan ketua RT satu per satu (skor 4) menunjukkan niat solutif, namun lambat dan rentan kendala jaringan saat bencana.",
    "tip": "Pada kondisi krisis bencana, aktifkan protokol layanan darurat yang menggantikan syarat fisik dengan verifikasi data resmi terpusat."
  },
  {
    "id": "tkp-pel-054",
    "subPattern": "solusi-cepat-dan-kepatuhan-sop",
    "difficulty": "sedang",
    "prompt": "Sistem tanda tangan elektronik tersertifikasi mengalami pemeliharaan darurat selama tiga jam, padahal ada belasan dokumen izin kelayakan distribusi bahan pangan segar yang harus terbit hari itu agar komoditas petani tidak membusuk. Sebagai pelaksana layanan yang taat prosedur, tindakan Anda adalah ...",
    "options": [
      "Menunggu hingga sistem tanda tangan elektronik pulih kembali karena seluruh izin tahun ini sudah diwajibkan terbit secara digital.",
      "Meminta staf mencetak dokumen dengan gambar tanda tangan pindaian pejabat sementara waktu agar pengiriman bahan pangan langsung berjalan.",
      "Menyampaikan surat pengantar permohonan maaf kepada asosiasi petani atas keterlambatan sistem pusat di luar kendali dinas.",
      "Menyiapkan seluruh draf verifikasi agar siap ditandatangani seketika sistem pulih sembari memeriksa apakah pejabat boleh memberi pengesahan manual cadangan.",
      "Memastikan seluruh berkas lolos verifikasi tuntas, lalu mengaktifkan prosedur kontingensi tanda tangan basah resmi sementara atau antrean prioritas segera begitu sistem pulih."
    ],
    "optionScores": [
      2,
      1,
      3,
      4,
      5
    ],
    "answer": "E",
    "explanation": "Skor 5 menuntaskan verifikasi substantif tanpa menunda serta mengaktifkan SOP kontingensi pengesahan basah resmi yang sah (atau jalur prioritas seketika sistem pulih) sehingga barang petani selamat tanpa melanggar keabsahan hukum. Menyiapkan draf sembari baru mencari tahu kebolehan manual (skor 4) cukup responsif, tetapi kurang tegas menjalankan prosedur darurat yang semestinya segera diaktifkan.",
    "tip": "Siapkan langkah kontingensi sah dan tuntaskan verifikasi substantif agar gangguan sistem digital tidak menghentikan layanan mendesak."
  },
  {
    "id": "tkp-pel-055",
    "subPattern": "solusi-cepat-dan-kepatuhan-sop",
    "difficulty": "sulit",
    "prompt": "Sebagai analis di Mal Pelayanan Publik, Anda mendapati izin operasional klinik kesehatan memakan waktu sepuluh hari karena pemohon harus membawa berkas fisik bolak-balik antar tiga loket dinas berbeda yang sebenarnya berada di satu lantai gedung yang sama. Gagasan perbaikan SOP paling efektif Anda adalah ...",
    "options": [
      "Menambah dua petugas pengantar dokumen khusus untuk membantu pemohon mengantarkan map fisik dari satu loket ke loket dinas lainnya.",
      "Membuat buku panduan urutan loket yang lebih tebal agar pemohon tidak salah membawa salinan berkas saat berpindah antrean.",
      "Mengusulkan skema loket terpadu satu pintu dengan berkas digital bersama serta verifikasi paralel antar tiga dinas dalam satu alur SLA.",
      "Meminta pimpinan memasang nomor antrean prioritas khusus bagi pemohon izin klinik agar tidak menunggu lama di tiap loket dinas.",
      "Mengimbau masing-masing dinas mempercepat jam kerja pemeriksaan berkasnya satu hari lebih awal tanpa mengubah alur serah terima fisik."
    ],
    "optionScores": [
      3,
      2,
      5,
      4,
      1
    ],
    "answer": "C",
    "explanation": "Skor 5 menyentuh akar masalah birokrasi berulang dengan mengintegrasikan penerimaan satu pintu, pertukaran berkas digital internal, dan pemrosesan paralel antar dinas sesuai SLA jelas. Memberi antrean prioritas (skor 4) sedikit mempercepat antrean fisik, tetapi tetap membiarkan pemohon bolak-balik antar loket.",
    "tip": "Solusi terbaik atas layanan berbelit adalah integrasi satu pintu dan pemrosesan paralel lintas unit menggunakan data bersama."
  },
  {
    "id": "tkp-pel-056",
    "subPattern": "solusi-cepat-dan-kepatuhan-sop",
    "difficulty": "sulit",
    "prompt": "Stok reagen pemeriksaan medis penting di puskesmas rujukan hampir habis dan hanya cukup untuk dua hari, sementara pengadaan reguler memakan waktu dua pekan. Rekan Anda mengusulkan memecah faktur pembelian ke beberapa pemasok kecil agar terhindar dari proses pengadaan resmi. Sikap paling tepat Anda adalah ...",
    "options": [
      "Menolak pemecahan paket karena melanggar aturan pengadaan, lalu segera mengaktifkan mekanisme pengadaan darurat resmi atau pinjam-pakai stok antar fasilitas kesehatan.",
      "Menyetujui pemecahan faktur sementara waktu demi menyelamatkan nyawa pasien sambil membuat catatan pertanggungjawaban darurat kepada inspektorat.",
      "Menolak usulan pemecahan paket, lalu membatasi jumlah pemeriksaan pasien harian sesuai sisa stok sambil menunggu pengadaan reguler empat belas hari.",
      "Mengajukan rapat luar biasa tim anggaran minggu depan untuk membahas penambahan stok penyangga agar kejadian serupa tidak terulang.",
      "Meminta kepala puskesmas menandatangani surat izin khusus di luar ketentuan pengadaan agar tanggung jawab hukum ditanggung pimpinan."
    ],
    "optionScores": [
      5,
      2,
      4,
      3,
      1
    ],
    "answer": "A",
    "explanation": "Pemecahan paket pengadaan untuk menghindari aturan adalah pelanggaran pengadaan barang/jasa; skor 5 menolak praktik itu sekaligus cepat menempuh jalur pengadaan darurat yang sah atau koordinasi pinjam-pakai stok antar unit layanan kesehatan agar pasien tetap tertangani. Menolak pemecahan paket sambil langsung membatasi layanan pasien selama dua pekan (skor 4) patuh aturan, tetapi tidak mengupayakan jalur darurat resmi.",
    "tip": "Jangan pernah mengakali aturan pengadaan meski situasi mendesak; selalu ada jalur darurat atau sinergi antarinstansi yang sah secara hukum."
  },
  {
    "id": "tkp-pel-057",
    "subPattern": "pelayanan-inklusif-dan-kelompok-rentan",
    "difficulty": "mudah",
    "prompt": "Di ruang tunggu kantor pelayanan, seorang ibu yang menggendong bayi rewel sambil membawa tas besar tampak kesulitan berdiri mengantre, sementara deretan kursi prioritas penuh ditempati pengunjung muda yang sehat dan asyik bermain ponsel. Tindakan Anda adalah ...",
    "options": [
      "Membiarkannya saja karena seluruh pengunjung membayar retribusi yang sama dan datang lebih dulu memiliki hak memakai kursi tunggu.",
      "Mengumumkan lewat pengeras suara agar pengunjung muda secara umum memberi ruang duduk bagi kelompok rentan di ruang tunggu.",
      "Menegur langsung pengunjung muda di kursi prioritas dengan suara tegas agar segera berdiri memberikan tempatnya kepada ibu tersebut.",
      "Menghampiri kursi prioritas dengan ramah, meminta kesediaan pengunjung muda berpindah ke kursi reguler, dan mendampingi ibu tersebut menuju tempat duduk serta layanan prioritas.",
      "Menawarkan ibu tersebut menitipkan tas perlengkapan bayinya di balik meja petugas agar lebih ringan saat berdiri menunggu nomor antrean."
    ],
    "optionScores": [
      1,
      4,
      3,
      5,
      2
    ],
    "answer": "D",
    "explanation": "Skor 5 bertindak proaktif dengan cara yang santun untuk memastikan fasilitas prioritas benar-benar dinikmati kelompok rentan sekaligus memandu akses layanan prioritasnya. Mengumumkan secara umum lewat pengeras suara (skor 4) baik dan sopan, namun sering tidak direspons cepat oleh pengunjung yang asyik memakai ponsel.",
    "tip": "Fasilitas prioritas perlu dikawal langsung secara santun oleh petugas agar benar-benar dirasakan kelompok rentan."
  },
  {
    "id": "tkp-pel-058",
    "subPattern": "pelayanan-inklusif-dan-kelompok-rentan",
    "difficulty": "mudah",
    "prompt": "Seorang warga lanjut usia yang belum dapat membaca dan menulis datang menerima penyaluran bantuan sosial tunai serta bingung saat diminta membubuhkan tanda tangan pada tanda terima kuitansi. Sikap pelayanan inklusif terbaik Anda adalah ...",
    "options": [
      "Meminta beliau pulang dulu untuk membawa anak atau anggota keluarga yang bisa membaca agar menandatangani kuitansi sebagai wali.",
      "Membacakan seluruh isi dan nominal hak bantuan secara jelas dengan disaksikan pendamping atau petugas lain, lalu memfasilitasi cap jempol sesuai aturan.",
      "Langsung mengarahkan ibu jari beliau ke bantalan tinta dan menekannya di kertas tanda terima agar antrean penerima berikutnya cepat bergerak.",
      "Menulis sendiri nama beliau pada kolom penerima lalu meminta beliau meniru bentuk tanda tangan sederhana di sebelahnya.",
      "Menyerahkan uang bantuan terlebih dahulu secara lisan dan meminta petugas RT menandatangani seluruh kuitansi warga buta huruf di akhir sesi."
    ],
    "optionScores": [
      3,
      5,
      4,
      2,
      1
    ],
    "answer": "B",
    "explanation": "Warga lanjut usia yang tidak bisa membaca berhak mengetahui isi dan nominal bantuan secara transparan sebelum menyetujui tanda terima lewat cap jempol resmi yang disaksikan (skor 5). Langsung memfasilitasi cap jempol tanpa membacakan rincian isi dan nominal (skor 4) memang mempercepat proses, tetapi mengabaikan hak informasi warga rentan.",
    "tip": "Pastikan warga dengan hambatan baca-tulis memahami hak dan isi dokumen secara lisan serta disaksikan saat menggunakan cap jempol."
  },
  {
    "id": "tkp-pel-059",
    "subPattern": "pelayanan-inklusif-dan-kelompok-rentan",
    "difficulty": "sedang",
    "prompt": "Seorang pencari kerja penyandang disabilitas daksa pengguna kruk datang mengurus kartu pencari kerja dan konsultasi penempatan kerja. Namun, loket konsultasi khusus tersebut berada di lantai dua gedung lama yang hanya memiliki tangga tanpa lift. Tindakan paling tepat Anda adalah ...",
    "options": [
      "Menyampaikan permohonan maaf atas keterbatasan bangunan gedung dan menyarankan ia mengirimkan formulir konsultasi melalui surat elektronik saja.",
      "Meminta dua petugas keamanan membantu menggendong pemohon menaiki tangga menuju ruang konsultasi lantai dua agar tidak tertinggal layanan.",
      "Mewakilkan konsultasi pemohon dengan mencatat pertanyaannya di meja bawah lalu membawakannya naik ke petugas lantai dua untuk dijawab tertulis.",
      "Meminjamkan formulir cetak di lantai dasar lalu menjadwalkan ulang sesi konsultasi khusus apabila kelak kantor pindah ke gedung yang lebih ramah difabel.",
      "Menyiapkan ruang konsultasi nyaman di lantai dasar dan meminta petugas terkait turun melayani langsung pemohon tersebut secara setara."
    ],
    "optionScores": [
      3,
      2,
      4,
      1,
      5
    ],
    "answer": "E",
    "explanation": "Prinsip pelayanan inklusif menekankan bahwa petugas dan sistem yang menyesuaikan diri terhadap keterbatasan akses fisik gedung, bukan membebani penyandang disabilitas; memindahkan sesi ke lantai dasar dengan petugas turun langsung meraih skor 5. Menjadi perantara catatan naik-turun (skor 4) membantu secara teknis, namun menghilangkan hak interaksi konsultasi langsung yang bermartabat.",
    "tip": "Bila sarana gedung belum aksesibel, datangkan petugas dan layanan ke ruang yang mudah dijangkau tanpa mengurangi kualitas interaksi."
  },
  {
    "id": "tkp-pel-060",
    "subPattern": "pelayanan-inklusif-dan-kelompok-rentan",
    "difficulty": "sedang",
    "prompt": "Seorang warga dengan gangguan jiwa (ODGJ) yang didampingi kader kelurahan datang mengurus aktivasi jaminan kesehatan. Melihat tingkah lakunya yang sedikit gelisah, beberapa pengunjung di ruang tunggu menjauh sambil melontarkan komentar takut dan meminta petugas menyuruhnya keluar. Sikap paling tepat Anda adalah ...",
    "options": [
      "Menuruti permintaan pengunjung lain untuk memindahkan pemohon tersebut menunggu di halaman parkir luar hingga seluruh antrean pagi sepi.",
      "Menegur keras para pengunjung ruang tunggu karena melakukan perundungan terhadap warga berkebutuhan khusus yang dilindungi undang-undang.",
      "Melayani pemohon dengan hangat di jalur prioritas atau ruang tenang, sekaligus memberi edukasi singkat yang menyejukkan agar pengunjung lain tetap nyaman.",
      "Meminta kader kelurahan saja yang masuk mengurus berkas di loket sementara warga ODGJ tersebut diminta menunggu di dalam mobil pengantar.",
      "Membiarkan komentar pengunjung lain tanpa tanggapan dan memanggil nomor antrean sesuai urutan reguler agar tidak dianggap memihak."
    ],
    "optionScores": [
      1,
      3,
      5,
      4,
      2
    ],
    "answer": "C",
    "explanation": "Skor 5 melindungi martabat dan hak warga ODGJ untuk dilayani dengan tenang melalui jalur prioritas/ruang khusus sekaligus mengedukasi pengunjung lain secara santun tanpa memperkeruh suasana. Meminta kader saja yang masuk sementara pasien di mobil (skor 4) berniat meredakan situasi, namun menormalisasi stigma pengucilan jika proses sebenarnya membutuhkan kehadiran verifikasi pemohon.",
    "tip": "Lindungi kelompok rentan dari stigma di ruang publik dengan layanan prioritas yang menenangkan dan edukasi humanis bagi pengunjung."
  },
  {
    "id": "tkp-pel-061",
    "subPattern": "pelayanan-inklusif-dan-kelompok-rentan",
    "difficulty": "sedang",
    "prompt": "Seorang pekerja migran perempuan korban kekerasan yang baru dipulangkan datang ke pos pelayanan pengaduan terpadu dalam kondisi trauma dan enggan berbicara karena meja konsultasi bersebelahan langsung dengan antrean pengunjung umum. Langkah paling tepat Anda adalah ...",
    "options": [
      "Segera mengajaknya ke ruang konseling tertutup yang menjaga privasi, mendengarkan dengan empati tanpa menghakimi, lalu menghubungkannya ke layanan pendampingan resmi.",
      "Meminta pengunjung di kursi antrean sebelah bergeser agak jauh ke belakang agar percakapan di meja pengaduan tidak mudah terdengar orang lain.",
      "Memberikan formulir pengaduan tertulis agar ia cukup menuliskan kronologinya secara diam-diam tanpa perlu bercerita secara lisan di depan umum.",
      "Menunda sesi pengaduan dan memintanya datang kembali menjelang jam kantor tutup ketika suasana ruang pelayanan sudah sepi pengunjung.",
      "Mencatat identitas singkatnya saja di meja terbuka lalu langsung merujuk nomor kontaknya kepada petugas kepolisian terdekat."
    ],
    "optionScores": [
      5,
      3,
      4,
      2,
      1
    ],
    "answer": "A",
    "explanation": "Korban kekerasan berada pada posisi rentan yang membutuhkan perlindungan kerahasiaan, rasa aman psikologis, empati tanpa menghakimi, serta rujukan layanan perlindungan terintegrasi (skor 5). Memberikan formulir tertulis di tempat terbuka (skor 4) menjaga kerahasiaan lisan, namun kurang memadai bagi korban trauma yang butuh pendampingan empatik dan pengamanan ruang.",
    "tip": "Untuk pemohon korban kekerasan atau kasus sensitif, utamakan ruang privat yang aman, empati non-judgmental, dan rujukan perlindungan resmi."
  },
  {
    "id": "tkp-pel-062",
    "subPattern": "pelayanan-inklusif-dan-kelompok-rentan",
    "difficulty": "sedang",
    "prompt": "Dinas tempat Anda bertugas membuka pendaftaran pelatihan kewirausahaan gratis secara daring selama tiga hari saja. Anda menyadari banyak perajin lanjut usia dan penyandang disabilitas sensorik di wilayah pinggiran tidak memiliki gawai memadai dan kesulitan mengakses formulir web. Upaya inklusif terbaik Anda adalah ...",
    "options": [
      "Memperpanjang masa pendaftaran daring dua hari lagi agar keluarga para perajin sempat membantu mendaftarkan lewat ponsel mereka masing-masing.",
      "Tetap menjalankan pendaftaran daring sesuai jadwal demi mendorong percepatan literasi digital pelaku usaha kecil di seluruh daerah.",
      "Membagikan brosur tutorial cara mengisi formulir daring ke kantor kelurahan agar para perajin berlatih mengisinya melalui warung internet.",
      "Membuka posko pendampingan pendaftaran luring di kelurahan atau balai warga, menyediakan format informasi aksesibel, dan mengusulkan penyesuaian tenggat.",
      "Mendaftarkan secara otomatis nama-nama perajin binaan tahun lalu ke dalam sistem tanpa perlu konfirmasi kesediaan mereka mengikuti pelatihan baru."
    ],
    "optionScores": [
      3,
      1,
      2,
      5,
      4
    ],
    "answer": "D",
    "explanation": "Digitalisasi tidak boleh menyingkirkan kelompok rentan yang memiliki hambatan akses; membuka pendampingan luring di komunitas dan menyediakan informasi aksesibel menjamin kesetaraan kesempatan (skor 5). Mendaftarkan otomatis tanpa konfirmasi (skor 4) berniat baik memperjuangkan kuota, namun berisiko memunculkan peserta fiktif atau ketidaksiapan jadwal warga.",
    "tip": "Saat meluncurkan layanan berbasis daring, selalu sediakan jalur pendampingan luring atau akses alternatif bagi warga yang terkendala teknologi."
  },
  {
    "id": "tkp-pel-063",
    "subPattern": "pelayanan-inklusif-dan-kelompok-rentan",
    "difficulty": "sulit",
    "prompt": "Anda memimpin tim perekaman data identitas warga di daerah pedalaman. Sebagian warga masyarakat adat terpencil enggan difoto di aula kecamatan yang ramai karena pantangan adat serta tidak memiliki dokumen asal-usul keluarga, padahal mereka membutuhkan akses layanan kesehatan gratis. Strategi paling tepat Anda adalah ...",
    "options": [
      "Mencatat identitas mereka seadanya tanpa foto biometrik agar mereka langsung mendapatkan kartu layanan kesehatan sementara dari puskesmas.",
      "Mengimbau kepala suku mewajibkan warganya hadir di aula kecamatan karena peraturan kependudukan nasional berlaku seragam bagi seluruh warga negara.",
      "Menunda pendataan kelompok tersebut dalam laporan tahunan sampai mereka bersedia memenuhi seluruh kelengkapan syarat dan hadir di kantor kecamatan.",
      "Menugaskan petugas keamanan mendampingi jalannya perekaman di aula kecamatan agar proses antrean tetap tertib dan tidak ada gangguan.",
      "Berkoordinasi dengan tetua adat untuk mengadakan layanan jemput bola di ruang tertutup yang menghormati norma adat serta memakai prosedur verifikasi saksi tokoh adat."
    ],
    "optionScores": [
      2,
      3,
      1,
      4,
      5
    ],
    "answer": "E",
    "explanation": "Skor 5 memadukan penghormatan kearifan lokal melalui dialog tokoh adat, solusi ruang perekaman privat jemput bola, dan mekanisme hukum administrasi kependudukan berbasis surat keterangan/kesaksian resmi bagi warga tanpa dokumen awal. Mengamankan aula kecamatan (skor 4) tidak menjawab akar masalah pantangan adat dan ketiadaan dokumen keluarga.",
    "tip": "Dekati masyarakat adat melalui tokoh setempat, sesuaikan tata cara lapangan tanpa melanggar aturan inti, dan pakai jalur verifikasi resmi."
  },
  {
    "id": "tkp-pel-064",
    "subPattern": "pelayanan-inklusif-dan-kelompok-rentan",
    "difficulty": "sulit",
    "prompt": "Saat menyusun simulasi tanggap darurat kebakaran dan gempa di gedung pelayanan terpadu, Anda menemukan bahwa sistem peringatan dini hanya berupa sirene suara dan jalur evakuasi mengandalkan tangga sempit tanpa rencana pendampingan bagi pengunjung tunarungu, tunanetra, maupun pengguna kursi roda. Langkah paling tepat Anda adalah ...",
    "options": [
      "Menambahkan imbauan tertulis pada pintu masuk agar pengunjung disabilitas selalu datang bersama pendamping pribadi selama berada di gedung.",
      "Merancang pembaruan SOP evakuasi inklusif berisi penunjukan petugas pendamping tiap lantai, pemasangan lampu strobo peringatan, serta kursi evakuasi tangga dan rute aman.",
      "Mengumpulkan petugas keamanan untuk diberikan pengarahan lisan agar memprioritaskan evakuasi anak-anak dan lansia jika suatu saat terjadi bencana.",
      "Memasang lebih banyak stiker penunjuk arah tangga darurat dengan warna mencolok agar seluruh pengunjung lebih mudah keluar secara mandiri.",
      "Melaporkan temuan tersebut dalam catatan notulen simulasi tahunan agar menjadi pertimbangan apabila gedung mendapat anggaran renovasi total."
    ],
    "optionScores": [
      1,
      5,
      3,
      2,
      4
    ],
    "answer": "B",
    "explanation": "Keselamatan darurat harus inklusif dan terstruktur, bukan sekadar catatan pasif; skor 5 langsung merumuskan SOP pendampingan khusus, alat bantu visual (lampu strobo untuk tunarungu), serta mekanisme evakuasi aksesibel. Sekadar mencatat di notulen untuk menunggu anggaran renovasi total (skor 4) terlalu lambat menghadapi risiko keselamatan harian.",
    "tip": "Pastikan sistem peringatan dini dan SOP evakuasi publik mencakup seluruh ragam disabilitas lewat alat visual, akses aman, dan petugas pendamping."
  },
  {
    "id": "tkp-pel-065",
    "subPattern": "transparansi-standar-dan-bebas-pungli",
    "difficulty": "mudah",
    "prompt": "Pada jam istirahat di kantor layanan pertanahan, seseorang yang sering menjadi perantara dokumen warga di luar pagar mendatangi meja Anda membawa lima berkas permohonan beserta amplop bertuliskan 'uang lembur petugas' agar berkasnya didahulukan tanpa nomor antrean. Sikap paling tepat Anda adalah ...",
    "options": [
      "Menolak amplop dengan alasan sudah masuk jam istirahat dan menyarankan ia menitipkan berkasnya di meja penerimaan umum saja.",
      "Menerima lima berkas tersebut agar warga pemiliknya tidak kecewa, sementara amplop uangnya dikembalikan setelah seluruh berkas selesai diproses.",
      "Menolak tegas pemberian uang dan jalur pintas, menjelaskan standar layanan bebas calo serta antrean terbuka, lalu melaporkannya kepada pengawas unit.",
      "Memperingatkan perantara tersebut dengan suara keras di ruang pelayanan agar seluruh pengunjung lain melihat bahwa kantor bebas pungutan liar.",
      "Mengambil berkas yang kelengkapannya sudah benar saja untuk diproses sore hari sedangkan uangnya dimasukkan ke kotak sumbangan mushola."
    ],
    "optionScores": [
      3,
      2,
      5,
      4,
      1
    ],
    "answer": "C",
    "explanation": "Menolak uang suap sekaligus jalur tanpa antrean, menegaskan standar layanan terbuka tanpa perantara, dan melaporkan percobaan penyuapan kepada pengawas merupakan standar integritas tertinggi (skor 5). Memperingatkan dengan suara keras tanpa pelaporan pengawasan sistemik (skor 4) menunjukkan penolakan, tetapi kurang menertibkan praktik percaloan secara kelembagaan.",
    "tip": "Tolak tegas suap maupun jalur khusus calo, tegakkan antrean resmi, dan laporkan indikasi percaloan ke jalur pengawasan internal."
  },
  {
    "id": "tkp-pel-066",
    "subPattern": "transparansi-standar-dan-bebas-pungli",
    "difficulty": "mudah",
    "prompt": "Sebelum Anda menerbitkan surat rekomendasi resmi izin acara warga, perwakilan panitia datang ke ruang kerja Anda sambil membawa parsel makanan bernilai cukup mahal sebagai ucapan terima kasih atas keramahan selama konsultasi. Tindakan Anda yang paling berintegritas adalah ...",
    "options": [
      "Menolak parsel tersebut secara santun dengan menjelaskan larangan gratifikasi bagi pegawai negeri dan memastikan rekomendasi diproses murni sesuai prosedur.",
      "Menerima parsel itu terlebih dahulu agar tidak menyinggung perasaan warga lalu membagikannya secara merata kepada petugas kebersihan gedung.",
      "Meminta panitia menitipkan parsel di pos keamanan untuk diambil setelah surat rekomendasi selesai diterbitkan agar tidak terkait proses pemeriksaan.",
      "Menerima parsel sambil mencatat nilainya di buku pribadi lalu menyerahkannya ke seksi umum kantor sebagai konsumsi rapat bulanan.",
      "Menegur perwakilan panitia secara kaku dan mengancam menunda penerbitan izin acara karena dianggap mencoba menyuap petugas."
    ],
    "optionScores": [
      5,
      2,
      1,
      4,
      3
    ],
    "answer": "A",
    "explanation": "Parsel bernilai dari pihak yang sedang mengurus layanan merupakan gratifikasi yang berpotensi memengaruhi objektivitas; menolak secara santun sejak awal sekaligus mengedukasi aturan antikorupsi meraih skor 5. Menerima lalu menjadikannya konsumsi rapat (skor 4) tetap merupakan bentuk penerimaan barang yang dilarang karena berasal dari pemohon layanan aktif.",
    "tip": "Tolak pemberian dalam bentuk apa pun dari pemohon layanan secara santun dan edukatif agar integritas dan objektivitas tetap terjaga."
  },
  {
    "id": "tkp-pel-067",
    "subPattern": "transparansi-standar-dan-bebas-pungli",
    "difficulty": "sedang",
    "prompt": "Saat bertugas di unit pengujian kelayakan kendaraan umum, Anda mendapati sistem rem dan emisi gas buang sebuah truk angkutan tidak memenuhi ambang batas keselamatan. Sopirnya memohon sambil menyelipkan uang agar diluluskan karena sedang terdesak kebutuhan keluarga. Sikap paling tepat Anda adalah ...",
    "options": [
      "Meluluskan kendaraan tersebut kali ini saja dengan syarat sopir berjanji memperbaiki remnya di bengkel sebelum melakukan perjalanan jauh.",
      "Menolak uangnya lalu menunda pengetikan hasil uji selama satu hari supaya sopir sempat mengganti komponen rem di bengkel sekitar.",
      "Mengembalikan uang secara langsung sambil menyuruh sopir membawa kendaraannya keluar dari jalur uji tanpa memberikan lembar catatan teknis.",
      "Mengembalikan uang dengan sopan dan meminta sopir menyetor langsung biaya pendaftaran uji ulang resmi ke loket kasir bank daerah.",
      "Menolak tegas uang tersebut, menerbitkan berita acara hasil tidak lulus secara transparan berisi daftar perbaikan teknis, dan menjadwalkan uji ulang resmi."
    ],
    "optionScores": [
      1,
      3,
      2,
      4,
      5
    ],
    "answer": "E",
    "explanation": "Selain menolak suap, petugas uji kelayakan wajib menjaga keselamatan publik dengan mencatat hasil teknis tidak lulus secara objektif dan memandu perbaikan serta uji ulang resmi (skor 5). Menolak uang sambil langsung menyuruh daftar uji ulang tanpa berita acara rincian perbaikan yang jelas (skor 4) berintegritas, tetapi kurang informatif membantu perbaikan keselamatan kendaraan.",
    "tip": "Jangan kompromikan standar keselamatan dan integritas demi alasan pribadi pemohon; berikan catatan kekurangan teknis secara transparan."
  },
  {
    "id": "tkp-pel-068",
    "subPattern": "transparansi-standar-dan-bebas-pungli",
    "difficulty": "sedang",
    "prompt": "Sebagai pengelola data penerima bantuan modal usaha mikro di dinas koperasi, Anda ditelepon oleh kerabat dekat pimpinan yang meminta bocoran daftar kontak calon penerima serta mendesak memasukkan dua nama usahanya ke kuota prioritas dengan alasan 'arahan lisan atasan'. Sikap Anda adalah ...",
    "options": [
      "Memasukkan kedua nama tersebut ke daftar cadangan saja agar tetap menghormati relasi pimpinan tanpa menggeser penerima utama di kuota awal.",
      "Menolak permintaan tersebut secara santun dengan menjelaskan perlindungan data pribadi dan seleksi objektif, lalu mengonfirmasi langsung ke pimpinan serta mencatat kejadiannya.",
      "Mengirimkan ringkasan jumlah kuota kecamatan saja tanpa nomor kontak pribadi sebagai bentuk keterbukaan informasi umum kepada keluarga pimpinan.",
      "Langsung menutup telepon dan memblokir nomor kerabat tersebut supaya tidak terus menekan penyusunan daftar penerima bantuan.",
      "Meminta kerabat tersebut mengajukan proposal usaha terlebih dahulu ke loket resmi sambil berjanji memantau kelolosannya di tahap kurasi."
    ],
    "optionScores": [
      1,
      5,
      2,
      3,
      4
    ],
    "answer": "B",
    "explanation": "Skor 5 menjaga kerahasiaan data pribadi pemohon dan integritas seleksi bebas KKN, sekaligus melakukan verifikasi faktual kepada pimpinan agar pencatutan nama tidak berlanjut. Mengarahkannya mendaftar lewat loket resmi namun menjanjikan pemantauan khusus (skor 4) menolak jalur pintas awal, tetapi masih membuka celah perlakuan istimewa saat kurasi.",
    "tip": "Tolak penyalahgunaan wewenang atau pencatutan nama pimpinan dengan santun, jaga privasi data, dan konfirmasi secara berjenjang."
  },
  {
    "id": "tkp-pel-069",
    "subPattern": "transparansi-standar-dan-bebas-pungli",
    "difficulty": "sedang",
    "prompt": "Anda bertugas di loket retribusi pasar daerah. Anda memperhatikan bahwa papan tarif resmi di dinding ruang tunggu sudah pudar dan tertutup spanduk acara instansi, sehingga pedagang baru sering bertanya tarif asli dan rentan ditipu oknum luar gedung. Langkah paling tepat Anda adalah ...",
    "options": [
      "Menjawab setiap pertanyaan tarif pedagang di loket dengan ramah dan menuliskan nominalnya di selembar kertas setiap kali ada yang menanyakan.",
      "Membiarkan kondisi spanduk tersebut sampai acara selesai minggu depan supaya dekorasi aula pelayanan tetap tampak rapi dan seragam.",
      "Menyarankan para pedagang baru menanyakan langsung besaran tarif tahunan kepada ketua paguyuban pasar sebelum datang ke loket.",
      "Segera memindahkan spanduk acara agar papan tarif terlihat jelas, memperbarui informasi tarif resmi dan kanal pembayaran, serta menempelkan kanal pengaduan pungli.",
      "Melaporkan kondisi papan yang pudar dalam usulan pengadaan barang kantor tahun anggaran berikutnya agar diganti papan akrilik baru."
    ],
    "optionScores": [
      4,
      1,
      2,
      5,
      3
    ],
    "answer": "D",
    "explanation": "Transparansi standar biaya dan kanal aduan harus selalu terlihat jelas oleh publik sebagai benteng utama pencegahan pungli; bertindak segera membuka akses informasi dan memperbaruinya meraih skor 5. Menjawab lisan satu per satu di loket (skor 4) ramah dan membantu, namun tidak melindungi pedagang yang belum sempat bertanya di loket dari oknum luar.",
    "tip": "Pastikan informasi tarif resmi, waktu layanan, dan saluran aduan pungli selalu terpampang jelas dan mudah diakses publik."
  },
  {
    "id": "tkp-pel-070",
    "subPattern": "transparansi-standar-dan-bebas-pungli",
    "difficulty": "sedang",
    "prompt": "Sebagai staf pengelola informasi publik (PPID), Anda menerima permohonan data realisasi anggaran proyek perbaikan jalan dari warga sesuai prosedur keterbukaan informasi. Namun, staf seksi teknis menyarankan menunda jawabannya karena khawatir sorotan publik atas keterlambatan pekerjaan. Sikap paling tepat Anda adalah ...",
    "options": [
      "Menyampaikan kepada pemohon bahwa dokumen anggaran masih berada dalam tahap audit internal sehingga belum dapat diberikan bulan ini.",
      "Mengikuti saran staf seksi teknis untuk menunda jawaban sembari menunggu proyek selesai seratus persen agar tidak menimbulkan polemik.",
      "Tetap memproses permohonan sesuai tenggat UU Keterbukaan Informasi Publik dengan menyiapkan data resmi akurat serta penjelasan objektif progres dan kendalanya.",
      "Menyarankan warga mengajukan permohonan data langsung ke dinas inspektorat daerah supaya data yang diterima dianggap lebih netral.",
      "Memberikan sebagian angka total pagu anggaran saja tanpa rincian realisasi agar memenuhi permintaan secara formal tanpa memicu pertanyaan lanjutan."
    ],
    "optionScores": [
      2,
      1,
      5,
      3,
      4
    ],
    "answer": "C",
    "explanation": "Data realisasi anggaran merupakan informasi publik terbuka sesuai peraturan perundang-undangan; skor 5 memenuhi hak informasi warga tepat waktu disertai penjelasan progres yang jujur dan akuntabel. Memberikan angka total saja untuk menghindari sorotan (skor 4) terlihat patuh secara prosedural, namun mencederai substansi transparansi publik.",
    "tip": "Penuhi permohonan informasi publik terbuka secara tepat waktu dan akurat tanpa menutupi fakta untuk menghindari sorotan."
  },
  {
    "id": "tkp-pel-071",
    "subPattern": "transparansi-standar-dan-bebas-pungli",
    "difficulty": "sulit",
    "prompt": "Anda menemukan unggahan iklan di media sosial milik konsultan swasta yang mencatut logo instansi Anda dan menawarkan 'jalur cepat pengurusan izin edar PIRT tanpa survei' dengan tarif jutaan rupiah, padahal layanan resmi di dinas Anda gratis dan wajib inspeksi. Langkah paling tepat Anda adalah ...",
    "options": [
      "Segera melapor ke pimpinan untuk menerbitkan klarifikasi resmi publik di seluruh kanal instansi, memutus klaim kerja sama, dan memproses langkah penertiban atau pelaporan hukum.",
      "Mengirimkan pesan pribadi kepada akun konsultan tersebut agar menghapus logo instansi dan menghentikan promosinya dalam waktu dua puluh empat jam.",
      "Membagikan tangkapan layar unggahan iklan tersebut ke grup WhatsApp internal pegawai agar seluruh petugas waspada apabila ada berkas dari konsultan itu.",
      "Memasang spanduk imbauan kecil di meja loket kantor bahwa instansi tidak memungut biaya pengurusan izin edar bagi pelaku usaha mikro.",
      "Menolak seluruh pengajuan berkas pelaku usaha yang diketahui menggunakan jasa konsultan tersebut meskipun dokumen persyaratannya lengkap."
    ],
    "optionScores": [
      5,
      4,
      3,
      2,
      1
    ],
    "answer": "A",
    "explanation": "Pencatutan logo instansi untuk praktik penipuan jalur cepat berdampak luas pada kepercayaan publik dan merugikan UMKM; skor 5 menempuh klarifikasi publik resmi secara cepat, memutus klaim afiliasi, serta mendorong penindakan hukum yang terkoordinasi. Mengirim pesan pribadi agar menghapus unggahan (skor 4) bertindak cepat, namun tidak memperingatkan masyarakat luas yang mungkin sudah terlanjur tertipu.",
    "tip": "Jika nama atau logo instansi dicatut pihak luar untuk pungli atau jalur cepat, terbitkan klarifikasi resmi terbuka dan laporkan secara hukum."
  },
  {
    "id": "tkp-pel-072",
    "subPattern": "transparansi-standar-dan-bebas-pungli",
    "difficulty": "sulit",
    "prompt": "Dalam evaluasi Zona Integritas unit layanan perizinan, Anda menemukan pola data tidak wajar: permohonan yang masuk melalui satu biro jasa tertentu selalu selesai dalam satu hari kerja, sedangkan pengajuan mandiri warga rata-rata memakan waktu enam hari kerja meski syaratnya identik. Langkah paling berintegritas Anda adalah ...",
    "options": [
      "Memperlambat proses berkas milik biro jasa tersebut menjadi enam hari kerja juga agar rasio waktu layanan tampak adil bagi seluruh pemohon.",
      "Mengundang pemilik biro jasa secara pribadi untuk menanyakan trik kelengkapan berkas yang mereka pakai agar bisa ditiru oleh pemohon mandiri.",
      "Menghapus catatan waktu penyelesaian pada laporan bulanan agar tidak menimbulkan kecurigaan saat dilakukan penilaian oleh tim evaluator eksternal.",
      "Meminta seluruh petugas loket menandatangani ulang pakta integritas tahunan tanpa perlu membuka data perbedaan waktu layanan tersebut.",
      "Melakukan audit penelusuran jejak digital antrean dan waktu verifikasi secara objektif, melaporkan temuan ke pimpinan/unit pengawas, dan menegakkan sistem antrean FIFO transparan."
    ],
    "optionScores": [
      2,
      3,
      1,
      4,
      5
    ],
    "answer": "E",
    "explanation": "Anomali ketimpangan kecepatan antara biro jasa dan pemohon mandiri mengindikasikan dugaan jalur prioritas atau kolusi internal; skor 5 menginvestigasi jejak log sistem secara objektif, melaporkannya ke pengawasan, dan menutup celah lewat antrean FIFO transparan. Penandatanganan ulang pakta integritas tanpa audit akar masalah (skor 4) bersifat simbolis semata dan tidak menindak penyimpangan nyata.",
    "tip": "Anomali pola data layanan harus diaudit berbasis bukti log sistem dan ditindaklanjuti dengan penutupan celah prosedur, bukan langkah simbolis."
  },
  {
    "id": "tkp-pel-073",
    "subPattern": "penanganan-keluhan-dan-evaluasi-mutu",
    "difficulty": "mudah",
    "prompt": "Sebagai admin kanal informasi media sosial resmi instansi, Anda mendapati puluhan komentar warga mengeluhkan bahwa tautan unduh formulir permohonan di situs web rusak (error 404) sejak pagi. Langkah paling tepat Anda adalah ...",
    "options": [
      "Menutup sementara kolom komentar pada unggahan tersebut agar keluhan warga tidak semakin panjang sebelum tim TI selesai memperbaikinya.",
      "Segera menanggapi komentar dengan ramah disertai tautan cadangan resmi yang aktif, lalu berkoordinasi dengan tim pengelola web agar tautan utama diperbaiki hari itu juga.",
      "Menjawab singkat bahwa situs web sedang dalam proses pemeliharaan rutin dan meminta warga mencoba mengunduh ulang pada akhir pekan.",
      "Meneruskan tangkapan layar keluhan tersebut ke surat elektronik bagian TI untuk masuk ke daftar agenda perbaikan pembaruan web bulan depan.",
      "Menghapus komentar warga yang bernada kesal dan membalas sebagian komentar saja menggunakan pesan otomatis standar instansi."
    ],
    "optionScores": [
      1,
      5,
      3,
      4,
      2
    ],
    "answer": "B",
    "explanation": "Skor 5 menjawab keluhan warga secara cepat dan komunikatif lewat tautan cadangan resmi yang bisa langsung dipakai sekaligus mengawal perbaikan permanen bersama tim TI di hari yang sama. Mengirim surel untuk perbaikan agenda bulan depan (skor 4) mengikuti koordinasi internal, tetapi membiarkan layanan warga terhenti terlalu lama.",
    "tip": "Tanggap keluhan digital berarti memberi alternatif akses seketika kepada warga sambil mengawal perbaikan sumber masalahnya."
  },
  {
    "id": "tkp-pel-074",
    "subPattern": "penanganan-keluhan-dan-evaluasi-mutu",
    "difficulty": "mudah",
    "prompt": "Sebagai petugas pemantau mutu layanan, Anda melihat kotak survei kepuasan masyarakat fisik hampir tidak pernah terisi karena bolpoin sering hilang, sedangkan poster kode QR survei daring tertempel terlalu tinggi di sudut ruang tunggu yang sepi. Tindakan korektif terbaik Anda adalah ...",
    "options": [
      "Meminta petugas loket secara lisan menanyakan nilai kepuasan kepada setiap warga di akhir sesi lalu mencatat hasilnya ke dalam rekap harian.",
      "Mengganti seluruh mekanisme survei menjadi wajib diisi sebelum warga menerima dokumen tercetak agar tingkat partisipasi mencapai seratus persen.",
      "Melaporkan rendahnya jumlah responden ke atasan bahwa masyarakat memang kurang berminat mengisi survei kepuasan layanan.",
      "Memindahkan kode QR ke posisi sejajar mata di dekat meja serah terima dokumen, melengkapi alat tulis terikat di kotak saran, dan mengedukasi petugas untuk mengundang masukan.",
      "Membeli pulpen cadangan untuk diletakkan di kotak saran tanpa mengubah tata letak poster kode QR karena sudah terpasang sejak awal tahun."
    ],
    "optionScores": [
      2,
      3,
      1,
      5,
      4
    ],
    "answer": "D",
    "explanation": "Evaluasi mutu membutuhkan umpan balik warga yang sukarela namun mudah diakses; menempatkan sarana fisik maupun digital pada titik strategis dan memudahkan pengisiannya meraih skor 5. Sekadar menambah pulpen tanpa membenahi posisi kode QR dan keterlibatan petugas mengundang masukan (skor 4) kurang komprehensif menjawab hambatan pengguna digital.",
    "tip": "Mudahkan akses instrumen survei di titik akhir layanan agar suara masyarakat terekam jujur dan mewakili kondisi nyata."
  },
  {
    "id": "tkp-pel-075",
    "subPattern": "penanganan-keluhan-dan-evaluasi-mutu",
    "difficulty": "sedang",
    "prompt": "Pada kanal pengaduan terpadu SP4N-LAPOR! pemerintah daerah, masuk aduan warga lengkap dengan foto lokasi jalan lingkungan berlubang parah. Rekan staf menilai jalan tersebut kewenangan dinas lain sehingga berencana langsung menutup tiket dengan status 'salah alamat'. Sikap paling tepat Anda adalah ...",
    "options": [
      "Menyarankan rekan menutup tiket sebagai salah alamat agar waktu respons unit Anda tetap terlihat cepat di laporan bulanan.",
      "Mengirimkan pesan singkat pribadi ke warga pelapor berisi daftar nomor telepon seluruh dinas terkait agar ia melapor ulang sendiri.",
      "Menahan penutupan sepihak, meneruskan atau mendisposisikan tiket ke dinas berwenang lewat sistem terpadu, dan menginformasikan tindak lanjut itu ke pelapor.",
      "Mencatat aduan tersebut ke arsip internal untuk dibahas dalam forum koordinasi lintas dinas di akhir triwulan berjalan.",
      "Membalas pelapor bahwa masalah jalan bukan tugas instansi Anda sambil melampirkan salinan peraturan pembagian kewenangan daerah."
    ],
    "optionScores": [
      1,
      4,
      5,
      3,
      2
    ],
    "answer": "C",
    "explanation": "Prinsip layanan pengaduan terpadu adalah 'no wrong door policy'—warga tidak boleh dipingpong saat sudah melapor di kanal resmi pemerintah; mendisposisikan tiket lintas dinas lewat sistem dan memberi kabar pelapor meraih skor 5. Memberikan nomor dinas lain agar warga melapor ulang sendiri (skor 4) bersikap membantu, tetapi tetap membebani pelapor akibat sekat birokrasi.",
    "tip": "Terapkan prinsip tidak menolak warga lintas kewenangan dalam satu pemerintahan; teruskan aduan ke unit tepat dan beri kepastian statusnya."
  },
  {
    "id": "tkp-pel-076",
    "subPattern": "penanganan-keluhan-dan-evaluasi-mutu",
    "difficulty": "sedang",
    "prompt": "Berdasarkan rekap keluhan bulanan puskesmas, antrean pengambilan obat membludak hingga menimbulkan komplain panjang setiap Senin dan Kamis pagi, sementara pada Selasa dan Jumat siang loket farmasi justru sangat lengang. Usulan perbaikan mutu paling efektif Anda adalah ...",
    "options": [
      "Menambah jumlah kursi ruang tunggu di depan ruang farmasi agar pasien yang menunggu antrean obat tetap mendapatkan tempat duduk.",
      "Mengimbau pasien penyakit kronis datang mengambil obat rutin di hari Selasa atau Jumat tanpa melakukan penyesuaian jadwal internal petugas.",
      "Membuka kotak pengaduan baru di sebelah loket obat supaya pasien bisa menuliskan keluhannya saat sedang menunggu panggilan resep.",
      "Mengajukan penambahan pegawai apoteker baru dalam rencana formasi tahun depan untuk menggantikan beban kerja pada hari sibuk.",
      "Mengatur ulang jadwal sif petugas farmasi serta jalur khusus pengambilan obat rutin/kronis di jam lengang dan menyediakan opsi pengemasan awal atau antrean digital."
    ],
    "optionScores": [
      2,
      4,
      1,
      3,
      5
    ],
    "answer": "E",
    "explanation": "Analisis beban waktu menunjukkan ketidakseimbangan kapasitas dan permintaan; skor 5 langsung mengoptimalkan sumber daya yang ada lewat penjadwalan sif dinamis, pemisahan jalur resep rutin di hari lengang, dan percepatan penyiapan obat. Sekadar mengimbau pasien pindah hari tanpa menata sif dan jalur khusus (skor 4) kurang efektif karena kebiasaan kunjungan tidak berubah tanpa insentif kemudahan layanan.",
    "tip": "Gunakan data pola kepadatan keluhan untuk menata ulang jadwal sumber daya dan memisahkan alur layanan cepat dari layanan reguler."
  },
  {
    "id": "tkp-pel-077",
    "subPattern": "penanganan-keluhan-dan-evaluasi-mutu",
    "difficulty": "sedang",
    "prompt": "Seorang warga mendatangi meja pengaduan karena nomor ponsel pribadinya mendadak dihubungi pihak penawar jasa komersial tak lama setelah mendaftar layanan di kantor Anda, dan ia menduga ada kebocoran data. Langkah paling bertanggung jawab Anda adalah ...",
    "options": [
      "Menanggapi keluhan dengan serius dan empatik, mencatat kronologi lengkapnya, mengaudit alur akses data bersama tim keamanan TI, serta memberi tindak lanjut resmi.",
      "Menjelaskan dengan tenang bahwa kebocoran nomor ponsel bisa berasal dari banyak aplikasi lain di luar kantor agar warga tidak langsung menuduh petugas.",
      "Meminta maaf atas ketidaknyamanannya lalu menyarankan warga memblokir nomor penawar jasa komersial tersebut melalui pengaturan ponsel.",
      "Menerima laporan secara lisan dan berjanji akan menanyakan secara informal kepada petugas loket lain apakah pernah membagikan data pemohon.",
      "Menolak pengaduan tersebut selama pelapor belum membawa bukti tangkapan layar atau rekaman percakapan dari pihak penawar jasa."
    ],
    "optionScores": [
      5,
      3,
      2,
      4,
      1
    ],
    "answer": "A",
    "explanation": "Dugaan kebocoran data pribadi warga adalah isu mutu dan integritas serius; skor 5 menerima laporan dengan empati, mendokumentasikan bukti, melakukan audit keamanan akses data secara sistemik, dan melaporkan hasilnya kepada pelapor. Menanyakan secara informal ke sesama petugas saja (skor 4) menunjukkan kepedulian awal, namun gagal memeriksa kerentanan teknis atau celah sistem.",
    "tip": "Perlindungan data pemohon adalah bagian mutu layanan; tanggapi dugaan kebocoran dengan audit sistemik yang terukur, bukan klarifikasi defensif."
  },
  {
    "id": "tkp-pel-078",
    "subPattern": "penanganan-keluhan-dan-evaluasi-mutu",
    "difficulty": "sedang",
    "prompt": "Hasil survei kepuasan masyarakat semester ini mencapai skor rata-rata tinggi, yaitu 91%. Namun, ketika Anda membaca kolom saran terbuka, banyak warga mengeluhkan sikap petugas parkir di gerbang yang ketus dan kondisi toilet umum yang kurang terawat. Sikap evaluatif terbaik Anda adalah ...",
    "options": [
      "Merasa lega karena secara statistik skor pelayanan inti loket sudah sangat tinggi dan melampaui target kinerja tahunan instansi.",
      "Menyaring komentar tentang area parkir dan toilet dari laporan kinerja utama karena tidak berhubungan langsung dengan proses perizinan loket.",
      "Memasang pengumuman di area parkir agar pengunjung ikut menjaga kebersihan fasilitas umum selama berada di lingkungan kantor.",
      "Menjadikan seluruh keluhan kualitatif itu sebagai prioritas perbaikan bersama unit rumah tangga dan keamanan karena pengalaman layanan mencakup hulu ke hilir.",
      "Menyampaikan keluhan itu secara umum di akhir rapat tanpa menetapkan batas waktu perbaikan atau penanggung jawab kebersihan fasilitas."
    ],
    "optionScores": [
      2,
      1,
      3,
      5,
      4
    ],
    "answer": "D",
    "explanation": "Angka survei tinggi tidak boleh membuat unit puas diri jika masih ada catatan keluhan nyata di lapangan; layanan publik dirasakan warga sejak tiba di gerbang hingga menggunakan fasilitas penunjang (skor 5). Menyampaikan di akhir rapat tanpa penanggung jawab dan tenggat perbaikan (skor 4) menunjukkan kepekaan, namun belum menjamin eksekusi nyata di lapangan.",
    "tip": "Jangan terpaku pada rata-rata skor tinggi; tindak lanjuti keluhan kualitatif sekecil apa pun mulai dari gerbang masuk hingga fasilitas penunjang."
  },
  {
    "id": "tkp-pel-079",
    "subPattern": "penanganan-keluhan-dan-evaluasi-mutu",
    "difficulty": "sulit",
    "prompt": "Akibat kesalahan pembaruan sistem penjadwalan otomatis, sebanyak seratus dua puluh pemohon menerima pesan konfirmasi pengambilan dokumen pada hari libur nasional saat kantor tutup. Keluhan warga mulai membanjiri kanal aduan daring instansi. Sebagai koordinator layanan, tindakan paling tepat Anda adalah ...",
    "options": [
      "Mengirimkan pesan ralat satu per satu secara manual mulai hari kerja berikutnya setelah seluruh pegawai masuk kantor kembali.",
      "Segera mengirim notifikasi ralat terbuka dan SMS penjadwalan ulang prioritas yang pasti, membuka layanan konfirmasi cepat, serta memperbaiki validasi kalender libur sistem.",
      "Membuat pengumuman resmi di situs web bahwa kantor tetap tutup pada hari libur nasional sesuai kalender pemerintah pusat.",
      "Menugaskan petugas piket keamanan berdiri di depan gerbang kantor pada hari libur tersebut untuk meminta maaf dan menyuruh warga pulang.",
      "Melaporkan bug penjadwalan kepada pengembang aplikasi agar diuji ulang sebelum pengiriman pesan otomatis minggu depan."
    ],
    "optionScores": [
      2,
      5,
      3,
      4,
      1
    ],
    "answer": "B",
    "explanation": "Skor 5 mengombinasikan pemulihan komunikasi massal secepatnya sebelum warga terlanjur datang sia-sia, pemberian jalur prioritas kompensasi penjadwalan ulang, dan perbaikan akar bug kalender sistem. Menugaskan petugas piket di gerbang pada hari libur (skor 4) menolong warga yang terlanjur datang, namun membiarkan ratusan orang tetap menempuh perjalanan percuma akibat ketiadaan ralat proaktif.",
    "tip": "Saat terjadi kesalahan massal sistem layanan, utamakan pemberitahuan ralat secepatnya sebelum warga dirugikan, beri jadwal pengganti, lalu benahi bug."
  },
  {
    "id": "tkp-pel-080",
    "subPattern": "penanganan-keluhan-dan-evaluasi-mutu",
    "difficulty": "sulit",
    "prompt": "Enam bulan setelah peluncuran aplikasi antrean daring, evaluasi menunjukkan hanya 18% pemohon yang memakainya karena kode OTP sering gagal terkirim dan aplikasi berat di ponsel lama, sehingga warga justru mengeluh harus antre dua kali di loket fisik. Langkah evaluasi mutu paling tepat Anda adalah ...",
    "options": [
      "Mewajibkan seluruh pemohon memakai aplikasi antrean daring dengan menghapus pengambilan nomor kertas agar tingkat adopsi naik mencapai target.",
      "Menghentikan total penggunaan aplikasi antrean daring tersebut dan mengembalikan seluruh pelayanan ke sistem nomor antrean kertas seperti semula.",
      "Melakukan audit pengalaman pengguna bersama perwakilan warga, menyederhanakan versi ringan web tanpa OTP rumit, serta mengintegrasikan satu antrean terpadu daring-luring.",
      "Menambah banner panduan cara mengunduh dan mendaftar aplikasi di seluruh sudut ruang tunggu agar warga lebih terbiasa mencobanya.",
      "Menyusun laporan evaluasi kepada atasan bahwa rendahnya penggunaan aplikasi disebabkan oleh keterbatasan spesifikasi ponsel masyarakat."
    ],
    "optionScores": [
      1,
      2,
      5,
      4,
      3
    ],
    "answer": "C",
    "explanation": "Evaluasi mutu inovasi harus berpihak pada kemudahan nyata warga, bukan memaksakan teknologi bermasalah atau menyerah kembali ke manual; skor 5 menggali kendala langsung dari pengguna, menyederhanakan arsitektur aplikasi menjadi ringan tanpa hambatan OTP, dan menyatukan antrean daring-luring agar warga tidak antre dua kali. Menambah panduan cetak di dinding (skor 4) informatif, tetapi tidak menyembuhkan kegagalan OTP dan beratnya aplikasi.",
    "tip": "Inovasi layanan publik dinilai dari kemudahan bagi warga; evaluasi kegagalan adopsi secara objektif, sederhanakan teknologi, dan satukan alur daring-luring."
  }
];
