import {
  buildTkpPatternQuestions,
  type Question,
  type TkpQuestionDraft,
} from "@/modules/question-bank/domain/question";
import { tikBatch2Drafts } from "./batches/04-tik-batch-2";
import { tikBatch3Drafts } from "./batches/04-tik-batch-3";

const tikDrafts: readonly TkpQuestionDraft[] = [
  {
    "id": "tkp-tik-001",
    "subPattern": "adaptasi-sistem-digital-dan-otomatisasi-ai",
    "difficulty": "mudah",
    "prompt": "Kantor Anda mulai mewajibkan penggunaan aplikasi persuratan elektronik nasional baru untuk menggantikan pencatatan buku agenda kertas, namun tata letaknya masih terasa asing bagi sebagian pegawai. Sikap awal Anda yang paling tepat adalah ...",
    "options": [
      "Mempelajari alur aplikasi baru secara tekun lalu mendampingi rekan kerja yang kesulitan pada masa awal transisi.",
      "Segera menguasai alur aplikasi baru sesuai panduan resmi untuk tugas pribadi agar target persuratan unit tetap terjaga.",
      "Mengoperasikan fitur dasar aplikasi baru mengikuti panduan singkat sambil menunggu pelatihan teknis dari tim kantor.",
      "Masih mengandalkan catatan agenda kertas terlebih dahulu sebelum menyalin ulang ke aplikasi saat beban kerja unit mulai longgar.",
      "Menolak mengaktifkan akun aplikasi persuratan baru dan tetap memakai pencatatan kertas sampai pimpinan memberi teguran resmi."
    ],
    "optionScores": [
      5,
      4,
      3,
      2,
      1
    ],
    "answer": "A",
    "explanation": "Menguasai aplikasi baru sekaligus mendampingi rekan kerja menciptakan transisi digital yang merata di seluruh unit. Mempelajari aplikasi hanya untuk tugas sendiri sudah menunjukkan sikap adaptif yang baik, namun belum mempercepat kesiapan tim secara menyeluruh.",
    "tip": "Hadapi sistem kerja digital baru dengan belajar proaktif dan membantu rekan tim beradaptasi bersama."
  },
  {
    "id": "tkp-tik-002",
    "subPattern": "adaptasi-sistem-digital-dan-otomatisasi-ai",
    "difficulty": "mudah",
    "prompt": "Instansi Anda memperkenalkan asisten kecerdasan buatan (AI) internal terverifikasi untuk membantu meringkas notulen rapat dan memilah pengelompokan dokumen rutin. Sikap Anda yang paling proporsional dalam memanfaatkannya adalah ...",
    "options": [
      "Menggunakan asisten AI hanya saat diminta atasan dan tetap menyusun seluruh notulen rapat secara manual.",
      "Memanfaatkan AI internal untuk membuat draf awal lalu memverifikasi akurasi isi sebelum dokumen rapat diedarkan resmi.",
      "Menggunakan AI internal hanya untuk memilah arsip rutin, sementara penyusunan notulen rapat tetap dikerjakan manual agar lebih aman.",
      "Mengunggah dokumen rapat internal ke layanan AI publik gratis di luar jaringan kantor untuk memperoleh variasi ringkasan lebih cepat.",
      "Memakai langsung hasil ringkasan AI internal ke dokumen tim dengan pemeriksaan sepintas karena menganggap sistem sudah akurat."
    ],
    "optionScores": [
      3,
      5,
      4,
      1,
      2
    ],
    "answer": "B",
    "explanation": "Menggunakan AI internal sebagai penyusun draf awal yang tetap melalui verifikasi manusia menjaga efisiensi sekaligus akuntabilitas isi dokumen. Membatasi AI hanya pada pengelompokan arsip rutin memang cukup aman, tetapi belum mengoptimalkan potensi efisiensi kerja yang telah disediakan instansi.",
    "tip": "Manfaatkan AI terverifikasi sebagai alat bantu efisiensi dengan tetap memegang kendali verifikasi substansi (human-in-the-loop)."
  },
  {
    "id": "tkp-tik-003",
    "subPattern": "adaptasi-sistem-digital-dan-otomatisasi-ai",
    "difficulty": "sedang",
    "prompt": "Seorang pegawai senior hampir pensiun terlihat sangat stres saat harus memindahkan arsip manual ke sistem dashboard digital baru, hingga ia berniat mengajukan pindah tugas karena takut gagal mengoperasikannya. Sebagai rekan satu unit yang lebih akrab dengan teknologi, langkah terbaik Anda adalah ...",
    "options": [
      "Mengambil alih seluruh tugas input dashboard miliknya setiap hari agar target pengarsipan unit tidak tertunda.",
      "Mendukung rencananya mengajukan pindah unit kerja supaya tim dapat mempercepat target adopsi dashboard digital tanpa hambatan adaptasi.",
      "Membimbingnya bertahap sesuai alur sistem, membuatkan panduan ringkas langkah demi langkah, dan menumbuhkan rasa percaya dirinya.",
      "Mengirimkan tautan panduan resmi beserta daftar pintasan sistem agar ia dapat berlatih mandiri di sela jam kerja.",
      "Mengusulkan kepada atasan agar ia fokus menangani arsip fisik sementara menunggu pelatihan resmi sistem dashboard dari tim pengelola TI."
    ],
    "optionScores": [
      2,
      1,
      5,
      4,
      3
    ],
    "answer": "C",
    "explanation": "Pendampingan bertahap dengan panduan praktis yang ramah pengguna membantu rekan senior mengatasi kecemasan teknologi dan beradaptasi mandiri. Mengirimkan tautan panduan untuk belajar sendiri sudah menunjukkan kepedulian, tetapi kurang memadai bagi rekan yang sedang mengalami tekanan adaptasi.",
    "tip": "Jembatani kesenjangan teknologi rekan senior dengan pendampingan sabar bertahap dan panduan praktis yang ramah pengguna."
  },
  {
    "id": "tkp-tik-004",
    "subPattern": "adaptasi-sistem-digital-dan-otomatisasi-ai",
    "difficulty": "sedang",
    "prompt": "Aplikasi pelayanan publik versi terbaru yang baru diluncurkan pekan ini mengalami bug tampilan kolom tanggal pada peramban tertentu sehingga input warga beberapa kali gagal tersimpan. Di tengah keriuhan keluhan, tindakan paling konstruktif Anda adalah ...",
    "options": [
      "Mengumpulkan data lengkap pemohon melalui dokumen lokal komputer pribadi dan mengirimkannya via pesan instan tanpa sistem resmi.",
      "Meminta warga menunda pengajuan layanan sampai daftar kendala di loket terkumpul banyak untuk dikirim ke TI.",
      "Menenangkan warga yang mengeluh sambil mencatat kontak pemohon agar dihubungi setelah perbaikan sistem selesai.",
      "Mencatat kronologi beserta tangkapan layar kendala ke tim TI, sambil memandu warga memakai peramban alternatif yang stabil.",
      "Melaporkan kendala kolom tanggal ke tim TI agar ditangani lalu meminta warga menunggu pembaruan aplikasi."
    ],
    "optionScores": [
      1,
      2,
      3,
      5,
      4
    ],
    "answer": "D",
    "explanation": "Pelaporan bug yang disertai kronologi dan bukti tangkapan layar mempercepat perbaikan oleh tim TI, sementara panduan peramban aman menjaga layanan warga tetap berjalan. Melaporkan kendala tanpa dokumentasi teknis maupun solusi sementara membuat warga harus menunggu tanpa kepastian.",
    "tip": "Saat sistem baru mengalami bug, laporkan detail bukti kendala ke tim TI dan jaga keberlanjutan layanan dengan prosedur darurat aman."
  },
  {
    "id": "tkp-tik-005",
    "subPattern": "adaptasi-sistem-digital-dan-otomatisasi-ai",
    "difficulty": "sedang",
    "prompt": "Rekan satu seksi Anda sering membeli perangkat lunak bajakan tidak berlisensi atau memasang ekstensi peramban tak dikenal di komputer kantor demi mempercepat pekerjaan sunting dokumen. Sebagai pegawai yang melek TIK dan aturan keamanan, respons paling tepat Anda adalah ...",
    "options": [
      "Menjelaskan risiko keamanan aplikasi tidak berlisensi kepada rekan dan menyarankan agar hanya memakai perangkat lunak standar terpasang.",
      "Menghindari pemasangan aplikasi serupa di komputer sendiri sambil melaporkan kebutuhan lisensi tim kepada pengelola TI unit.",
      "Membiarkan kebiasaan rekan tersebut selama file hasil sunting dokumen hanya dibuka secara lokal tanpa koneksi server.",
      "Ikut memakai penginstal dan ekstensi tidak resmi yang dibagikan rekan agar tampilan dokumen kerja tim terlihat seragam.",
      "Mengingatkan rekan tentang risiko malware dan pelanggaran lisensi secara santun, lalu merekomendasikan aplikasi resmi atau open-source yang aman."
    ],
    "optionScores": [
      4,
      3,
      2,
      1,
      5
    ],
    "answer": "E",
    "explanation": "Edukasi santun mengenai risiko siber yang disertai rekomendasi alternatif perangkat lunak legal menyelesaikan kebutuhan produktivitas tanpa membahayakan jaringan instansi. Membatasi saran pada penggunaan perangkat lunak bawaan saja sudah aman, namun kurang solutif menjawab hambatan kerja rekan.",
    "tip": "Hindari perangkat lunak bajakan di jaringan kantor; edukasi risiko siber dan gunakan alternatif resmi berlisensi atau open-source legal."
  },
  {
    "id": "tkp-tik-006",
    "subPattern": "adaptasi-sistem-digital-dan-otomatisasi-ai",
    "difficulty": "sedang",
    "prompt": "Atasan menugaskan Anda menyusun visualisasi data serapan anggaran triwulanan menggunakan fitur dasbor analitik interaktif yang sama sekali belum pernah Anda pakai sebelumnya, dengan waktu pengerjaan empat hari. Langkah tepat Anda adalah ...",
    "options": [
      "Mempelajari tutorial resmi dasbor, menguji purwarupa dari data uji, lalu menyiapkan visualisasi tepat waktu.",
      "Mempelajari fungsi dasar dasbor secara singkat lalu meminta bagian TI menyempurnakan aspek interaktif agar tidak salah format.",
      "Mempelajari fitur dasar dasbor dari panduan resmi lalu berkonsultasi ke tim TI setiap menemui kendala penyusunan grafik.",
      "Mengirimkan data mentah anggaran instansi ke pekerja lepas di luar kantor agar dasbor interaktif segera jadi sebelum tenggat.",
      "Mengajukan pengumpulan grafik statis aplikasi lama untuk laporan triwulan ini karena waktu belajar fitur dasbor baru dinilai terlalu singkat."
    ],
    "optionScores": [
      5,
      3,
      4,
      1,
      2
    ],
    "answer": "A",
    "explanation": "Belajar mandiri lewat tutorial resmi yang langsung dipraktikkan dengan purwarupa data uji mempercepat penguasaan alat baru secara aman dan tepat tenggat. Mengandalkan panduan resmi sambil sering menyerahkan kendala teknis ke tim TI cukup aman, namun kurang membangun kemandirian adaptif.",
    "tip": "Tunjukkan sikap pembelajar adaptif: manfaatkan tutorial resmi, uji coba kecil bertahap, dan jaga kerahasiaan data internal."
  },
  {
    "id": "tkp-tik-007",
    "subPattern": "adaptasi-sistem-digital-dan-otomatisasi-ai",
    "difficulty": "sulit",
    "prompt": "Sebuah inovasi sistem otomasi persetujuan dokumen di unit Anda secara signifikan mengurangi tugas pengetikan berulang, namun memunculkan kecemasan sebagian pegawai administrasi bahwa peran mereka tidak lagi berguna. Bila Anda bagian dari tim manajemen perubahan digital instansi, pendekatan strategis paling manusiawi dan efektif adalah ...",
    "options": [
      "Menunda aktivasi sebagian fitur otomasi selama beberapa bulan agar pegawai administrasi tetap memiliki tugas pengetikan rutin.",
      "Melibatkan pegawai sejak awal dalam menata ulang peran menuju tugas verifikasi mutu serta menyediakan pelatihan bertahap.",
      "Meluncurkan sistem otomasi secara langsung tanpa pemberitahuan awal serta menuntut seluruh staf beradaptasi dalam sepekan.",
      "Menyelenggarakan sosialisasi manfaat sistem otomasi serta membuka kelas pelatihan pengoperasian agar kecemasan pegawai berkurang.",
      "Menenangkan pegawai dengan penjelasan umum serta menunggu keputusan pimpinan terkait penataan ulang tugas staf."
    ],
    "optionScores": [
      2,
      5,
      1,
      4,
      3
    ],
    "answer": "B",
    "explanation": "Pelibatan pegawai sejak dini untuk memetakan ulang peran menuju verifikasi mutu bernilai tinggi mengubah kecemasan menjadi rasa memiliki atas transformasi digital. Memberikan sosialisasi dan pelatihan teknis saja memang membantu pemahaman alat, tetapi belum menjawab kekhawatiran atas keberlanjutan peran kerja mereka.",
    "tip": "Atasi resistensi perubahan teknologi lewat pelibatan pegawai sejak dini dan peningkatan peran (upskilling) ke pekerjaan bernilai lebih tinggi."
  },
  {
    "id": "tkp-tik-008",
    "subPattern": "adaptasi-sistem-digital-dan-otomatisasi-ai",
    "difficulty": "sulit",
    "prompt": "Anda menemukan hasil rancangan analisis statistik yang dibuat asisten AI generatif tampak sangat meyakinkan, tetapi setelah Anda periksa ulang secara mendalam ternyata AI tersebut mengarang angka rujukan regulasi yang sebenarnya tidak pernah ada (hallucination). Temuan serupa berpotensi dipakai rekan lain untuk bahan paparan pimpinan minggu ini. Sikap tepat Anda adalah ...",
    "options": [
      "Langsung menyalin kutipan angka buatan AI ke bahan paparan resmi karena susunannya terlihat sistematis dan meyakinkan.",
      "Tetap memanfaatkan mayoritas draf analisis AI dengan penyuntingan redaksi ringan tanpa memeriksa ulang seluruh sumber angkanya.",
      "Memverifikasi angka ke sumber regulasi primer, mengingatkan tim atas halusinasi AI, serta menyusun daftar periksa fakta.",
      "Memperbaiki angka pada laporan pribadi sesuai aturan resmi dan menunggu tinjauan pimpinan untuk memeriksa bahan rekan lain.",
      "Segera mengganti angka keliru memakai regulasi resmi lalu mengingatkan rekan tim agar lebih teliti memakai AI."
    ],
    "optionScores": [
      1,
      2,
      5,
      3,
      4
    ],
    "answer": "C",
    "explanation": "Memverifikasi ke sumber primer yang dibarengi edukasi tim serta usulan daftar periksa fakta mencegah kekeliruan serupa terulang pada paparan resmi berikutnya. Memperbaiki angka sendiri dan sekadar memberi imbauan lisan sudah tepat secara cepat tanggap, tetapi belum membangun kontrol mutu bersama.",
    "tip": "Selalu verifikasi keluaran AI terhadap sumber hukum/data primer, dan bagikan kebiasaan cek fakta tersebut ke seluruh tim."
  },
  {
    "id": "tkp-tik-009",
    "subPattern": "keamanan-informasi-privasi-dan-anti-phishing",
    "difficulty": "mudah",
    "prompt": "Anda menerima pesan singkat dari nomor tidak dikenal yang mengatasnamakan petugas bantuan portal kepegawaian, meminta kode OTP yang baru masuk ke ponsel Anda guna memperbarui data tunjangan kinerja dalam waktu sepuluh menit. Sikap aman Anda adalah ...",
    "options": [
      "Menolak memberikan kode OTP kepada pengirim lalu memeriksa langsung pembaruan data akun melalui portal resmi kepegawaian.",
      "Tidak membalas pesan tersebut sama sekali dan menunggu klarifikasi dari admin kepegawaian di grup resmi kantor.",
      "Menanyakan terlebih dahulu kepada rekan seruangan apakah mereka juga menerima pesan permintaan OTP yang sama sebelum membalas.",
      "Menolak memberikan kode OTP, memblokir nomor pengirim, lalu memverifikasi status tunjangan langsung lewat portal resmi atau admin TI.",
      "Segera mengirimkan kode OTP yang masuk ke ponsel kepada pengirim pesan karena khawatir pencairan tunjangan kinerja bulan ini terlewat."
    ],
    "optionScores": [
      4,
      3,
      2,
      5,
      1
    ],
    "answer": "D",
    "explanation": "Menolak pemberian OTP yang disertai pemblokiran nomor mencurigakan dan verifikasi langsung ke portal atau admin TI memutus serangan phishing sekaligus membantu pencegahan di unit. Menolak OTP dan mengecek portal secara pribadi sudah aman, tetapi belum menutup jalur penipuan atau memberi peringatan ke pengelola TI.",
    "tip": "OTP dan kredensial akun tidak boleh dibagikan ke siapa pun; cek status selalu langsung lewat kanal/admin resmi."
  },
  {
    "id": "tkp-tik-010",
    "subPattern": "keamanan-informasi-privasi-dan-anti-phishing",
    "difficulty": "mudah",
    "prompt": "Rekan kerja Anda biasa menempelkan kertas kecil berisi nama pengguna dan kata sandi portal keuangan instansi di sisi layar monitornya agar mudah dibaca saat terburu-buru, padahal ruang kerja juga sering dilewati tamu. Tindakan Anda adalah ...",
    "options": [
      "Memberi tahu pengawas ruang secara singkat atas kebiasaan catatan sandi terbuka tanpa menegur rekan.",
      "Menyarankan rekan secara sopan agar melepas catatan kata sandi dari monitor dan menyimpannya di catatan pribadi tertutup.",
      "Memotret catatan sandi di monitor rekan tersebut sebagai cadangan jika ia berhalangan hadir saat penyusunan laporan.",
      "Membiarkan catatan itu terpasang karena komputer berada di ruang pegawai yang sudah diawasi petugas keamanan depan.",
      "Mengingatkan rekan secara ramah atas risiko kebocoran akses, menyarankan melepas catatan, serta menganjurkan pengelola sandi dan MFA."
    ],
    "optionScores": [
      3,
      4,
      1,
      2,
      5
    ],
    "answer": "E",
    "explanation": "Mengedukasi risiko kebocoran akses dengan mengajak rekan melepas catatan sekaligus beralih ke pengelola kata sandi dan MFA melindungi sistem keuangan secara berkelanjutan. Sekadar meminta memindahkan catatan ke buku pribadi sudah mengurangi paparan visual, tetapi masih rentan hilang atau terbaca pihak lain.",
    "tip": "Kebersihan keamanan fisik (clean desk policy) melarang menempel password terbuka di meja/monitor; gunakan MFA."
  },
  {
    "id": "tkp-tik-011",
    "subPattern": "keamanan-informasi-privasi-dan-anti-phishing",
    "difficulty": "sedang",
    "prompt": "Untuk mempermudah pengecekan berkas bantuan sosial saat bekerja di perjalanan dinas luar kota, seorang rekan berniat menyalin tabel lengkap berisi NIK, alamat, nomor rekening, dan kontak ribuan penerima manfaat dari peladen aman kantor ke layanan penyimpanan awan pribadi gratis miliknya. Sikap Anda adalah ...",
    "options": [
      "Mencegah pemindahan data ke cloud pribadi, mengingatkan aturan privasi, dan menyiapkan akses VPN resmi kantor.",
      "Mengingatkan rekan agar folder cloud pribadinya diatur dalam mode privat sehingga tautan berkas tidak terbuka bagi publik.",
      "Menyetujui pemindahan daftar penerima bantuan itu via grup pesan instan agar lebih ringkas diakses seluruh anggota tim dinas.",
      "Melarang rekan menyalin data warga ke cloud pribadi dan memintanya menunggu kembali ke kantor untuk proses verifikasi.",
      "Menyarankan rekan meminta izin tertulis pimpinan unit sebelum memindahkan salinan data untuk keperluan dinas luar."
    ],
    "optionScores": [
      5,
      2,
      1,
      4,
      3
    ],
    "answer": "A",
    "explanation": "Mencegah penyalinan data pribadi warga ke layanan awan pribadi sekaligus memfasilitasi akses VPN resmi menjaga pelindungan data sekaligus kelancaran tugas dinas luar. Melarang pemindahan tanpa menyediakan jalur akses resmi memang mengamankan data, namun menghambat efisiensi verifikasi di lapangan.",
    "tip": "Jangan pernah menyimpan data pribadi warga/rahasia negara di cloud pribadi atau chat tidak terkelola; gunakan akses aman instansi."
  },
  {
    "id": "tkp-tik-012",
    "subPattern": "keamanan-informasi-privasi-dan-anti-phishing",
    "difficulty": "sedang",
    "prompt": "Saat bekerja dari kafe umum menggunakan laptop dinas pada penugasan luar daerah, Anda perlu mengakses sistem pelaporan internal instansi yang memuat dokumen pengawasan rahasia. Kebiasaan keamanan digital paling tepat adalah ...",
    "options": [
      "Tersambung langsung ke Wi-Fi gratis kafe tanpa perlindungan VPN serta membiarkan layar laptop tetap terbuka saat meninggalkan meja.",
      "Menggunakan tethering pribadi berpadu VPN resmi kantor, menjaga privasi layar, dan mengunci perangkat saat beranjak.",
      "Mengakses portal internal memakai Wi-Fi kafe berkode sandi karena menganggap koneksi berpassword sudah cukup aman dari penyadapan.",
      "Menunda pengunggahan dokumen pengawasan rahasia hingga tiba di penginapan atau kantor cabang daerah terdekat.",
      "Mengakses sistem melalui tethering pribadi dengan VPN kantor dan memilih duduk di sudut ruangan yang lebih sepi pengunjung."
    ],
    "optionScores": [
      1,
      5,
      2,
      3,
      4
    ],
    "answer": "B",
    "explanation": "Kombinasi tethering pribadi, VPN resmi instansi, perlindungan visual layar, dan kebiasaan mengunci perangkat menutup celah penyadapan jaringan maupun intipan fisik di ruang publik. Mengandalkan koneksi tethering dan VPN tanpa disiplin penguncian layar saat meninggalkan meja masih menyisakan risiko akses fisik.",
    "tip": "Hindari Wi-Fi publik tanpa VPN/tethering tepercaya untuk sistem kerja sensitif, dan biasakan selalu mengunci layar saat beranjak."
  },
  {
    "id": "tkp-tik-013",
    "subPattern": "keamanan-informasi-privasi-dan-anti-phishing",
    "difficulty": "sedang",
    "prompt": "Anda tanpa sengaja menemukan sebuah halaman tautan situs web resmi unit Anda menampilkan iklan terselubung situs judi daring di bagian bawah halaman hasil penelusuran akibat injeksi celah keamanan oleh peretas. Tindakan tercepat dan paling bertanggung jawab adalah ...",
    "options": [
      "Segera memberi tahu admin situs dan pimpinan unit secara lisan agar pengelola TI menelusuri halaman domain yang terdampak.",
      "Menyimpan catatan tautan bermasalah tersebut untuk disampaikan pada rapat evaluasi pengelolaan situs web mingguan bersama tim TI.",
      "Mendokumentasikan alamat URL serta tangkapan layar temuan lalu melapor cepat ke admin situs dan tim CSIRT untuk pembersihan.",
      "Mengabaikan tampilan bawah hasil penelusuran karena halaman beranda utama situs web kantor masih terbuka normal.",
      "Mengklik iklan ilegal berulang kali untuk melacak pemiliknya lalu menyebarkan tangkapan layar ke media sosial demi menekan tim TI."
    ],
    "optionScores": [
      4,
      3,
      5,
      2,
      1
    ],
    "answer": "C",
    "explanation": "Pelaporan cepat disertai bukti URL lengkap dan tangkapan layar kepada admin maupun tim CSIRT mempercepat penutupan celah keamanan tanpa memicu kepanikan publik. Menyampaikan temuan hanya secara lisan tetap bertanggung jawab, tetapi memperlambat tim teknis menemukan titik halaman yang tersisipi.",
    "tip": "Jika mendapati anomali atau sisipan konten ilegal pada domain resmi instansi, segera laporkan ke tim TI/CSIRT dengan bukti URL."
  },
  {
    "id": "tkp-tik-014",
    "subPattern": "keamanan-informasi-privasi-dan-anti-phishing",
    "difficulty": "sedang",
    "prompt": "Untuk membuat rekap peserta kegiatan cepat diketahui publik di portal keterbukaan informasi instansi, seorang staf hendak mengunggah daftar hadir lengkap yang masih memuat nomor KTP (NIK), tanggal lahir, tanda tangan, serta nomor HP pribadi ratusan warga ke laman web terbuka. Sebagai penelaah berkas sebelum rilis, tindakan Anda adalah ...",
    "options": [
      "Meminta staf menunda publikasi daftar hadir sambil menunggu verifikasi pejabat pengelola informasi terkait batas privasi.",
      "Menahan pengunggahan daftar hadir dan menyarankan staf cukup memublikasikan jumlah total peserta dalam rilis kegiatan.",
      "Menyetujui penayangan daftar hadir lengkap apa adanya di portal terbuka agar publik langsung memverifikasi keabsahan peserta kegiatan.",
      "Mengapresiasi inisiatif transparansi staf lalu memintanya menyamarkan NIK, tanda tangan, dan kontak pribadi sebelum dokumen dirilis.",
      "Meminta staf mengunggah daftar hadir hasil pindaian beresolusi rendah dengan anggapan nomor kontak sulit disalin otomatis."
    ],
    "optionScores": [
      3,
      4,
      1,
      5,
      2
    ],
    "answer": "D",
    "explanation": "Menyamarkan data sensitif warga seperti NIK, tanda tangan, dan nomor kontak menyeimbangkan prinsip keterbukaan informasi publik dengan kepatuhan pelindungan data pribadi. Menahan daftar hadir dan hanya merilis jumlah total memang aman dari kebocoran, tetapi mengurangi transparansi informasi yang semestinya dapat diakses publik.",
    "tip": "Terapkan redaksi/penyensoran NIK, tanda tangan, dan kontak pribadi warga sebelum memublikasikan dokumen publik secara terbuka."
  },
  {
    "id": "tkp-tik-015",
    "subPattern": "keamanan-informasi-privasi-dan-anti-phishing",
    "difficulty": "sulit",
    "prompt": "Saat sedang mengerjakan laporan akhir tahun seorang diri di ruangan, komputer kerja Anda mendadak memunculkan pesan aneh berisi tuntutan tebusan setelah seorang rekan sebelumnya mencolokkan diska lepas (flashdisk) tak dikenal, serta beberapa file bersama mulai berubah ekstensinya. Langkah darurat paling tepat detik pertama untuk membatasi dampak ransomware adalah ...",
    "options": [
      "Segera memutus koneksi jaringan LAN dan Wi-Fi untuk mengisolasi perangkat dari peladen, menolak tebusan, lalu melapor ke tim keamanan TI.",
      "Segera mencolokkan diska lepas cadangan instansi ke komputer terinfeksi agar berkas laporan tahunan terselamatkan lebih dulu.",
      "Memulai ulang komputer dan memindai perangkat memakai antivirus bawaan tanpa terlebih dahulu melepas jaringan kantor.",
      "Menghentikan penyuntingan laporan lalu mencari bantuan petugas TI unit sambil membiarkan kondisi layar seperti semula.",
      "Tidak menekan tautan tebusan dan langsung menghubungi tim keamanan TI sambil menunggu petugas memeriksa komputer kerja."
    ],
    "optionScores": [
      5,
      1,
      2,
      3,
      4
    ],
    "answer": "A",
    "explanation": "Memutus koneksi jaringan pada detik pertama krusial untuk mengisolasi penyebaran ransomware ke peladen bersama sebelum penanganan lanjutan oleh tim keamanan TI. Menolak membayar tebusan dan langsung melapor tanpa memutus jaringan tetap berisiko membuat enkripsi menjalar ke komputer lain.",
    "tip": "Protokol menit pertama ransomware: putus koneksi jaringan untuk isolasi penyebaran, jangan colok backup ke mesin sakit, dan hubungi CSIRT."
  },
  {
    "id": "tkp-tik-016",
    "subPattern": "keamanan-informasi-privasi-dan-anti-phishing",
    "difficulty": "sulit",
    "prompt": "Salah seorang vendor pengembang aplikasi layanan di dinas Anda meminta izin mengaktifkan akses login super-admin penuh secara permanen dari jarak jauh selama masa garansi lima tahun agar mudah memperbaiki kesalahan kode sewaktu-waktu tanpa melewati persetujuan admin internal dinas. Penilaian keamanan tata kelola yang paling tepat Anda sampaikan adalah ...",
    "options": [
      "Menolak akses jarak jauh permanen dengan mewajibkan teknisi vendor hadir ke ruang server saat perbaikan sistem.",
      "Menolak akses permanen dan menerapkan akses sementara berizin admin internal yang tercatat pada log audit.",
      "Menyerahkan keputusan teknis perizinan akses vendor sepenuhnya kepada kepala dinas dan pejabat pengelola pengadaan.",
      "Menyetujui akses jarak jauh berkelanjutan asalkan vendor menandatangani pakta kerahasiaan resmi sebagai pengganti log.",
      "Memberikan akses login super-admin penuh secara permanen kepada tim pengembang vendor tanpa persetujuan ulang agar perbaikan cepat."
    ],
    "optionScores": [
      4,
      5,
      3,
      2,
      1
    ],
    "answer": "B",
    "explanation": "Akses sementara yang diawasi admin internal dengan catatan log audit memenuhi prinsip hak akses minimal sekaligus menjaga kelincahan pemeliharaan sistem. Mewajibkan vendor selalu datang ke kantor memang mencegah celah jarak jauh, namun kurang efisien saat dibutuhkan perbaikan darurat yang cepat.",
    "tip": "Terapkan prinsip hak akses minimal (least privilege): dukung pemeliharaan vendor dengan akses sementara terawasi dan tercatat log."
  },
  {
    "id": "tkp-tik-017",
    "subPattern": "pemanfaatan-tik-untuk-efisiensi-kinerja",
    "difficulty": "mudah",
    "prompt": "Selama ini pengumpulan laporan capaian kegiatan dari dua puluh unit kerja dilakukan dengan mengirim file terpisah lewat aplikasi pesan instan lalu disalin satu per satu secara manual ke lembar utama sehingga rawan salah salin. Solusi digital praktis yang paling efisien untuk Anda usulkan adalah ...",
    "options": [
      "Mengatur jadwal pengiriman laporan bergilir per lima unit lewat surel resmi agar proses penyalinan manual tetap terkendali.",
      "Membuat templat baku lembar laporan seragam via surel agar penyalinan ke file utama menjadi lebih cepat.",
      "Membangun lembar kerja kolaboratif daring berformat tervalidasi di portal resmi agar data unit langsung terhimpun rapi.",
      "Menghentikan pengiriman berkas elektronik di aplikasi pesan lalu menginstruksikan seluruh unit mengirim laporan cetak ke rekap.",
      "Tetap menerima file terpisah lewat aplikasi pesan instan dengan meminta setiap unit memberi warna khusus pada angka capaian."
    ],
    "optionScores": [
      3,
      4,
      5,
      1,
      2
    ],
    "answer": "C",
    "explanation": "Lembar kerja kolaboratif daring yang tervalidasi memangkas proses salin manual sekaligus mencegah kesalahan input sejak dari unit pengirim. Menyeragamkan templat laporan via surel sudah membantu kerapian struktur, tetapi tetap menyisakan pekerjaan penyalinan manual yang berisiko salah ketik.",
    "tip": "Ganti alur kirim-salin manual berulang dengan formulir tervalidasi atau kolaborasi daring dalam ekosistem resmi instansi."
  },
  {
    "id": "tkp-tik-018",
    "subPattern": "pemanfaatan-tik-untuk-efisiensi-kinerja",
    "difficulty": "mudah",
    "prompt": "Dalam mengerjakan dokumen kebijakan tim yang disunting bersama oleh lima orang, masalah yang sering muncul adalah file bertumpuk dengan nama 'revisi_final_1', 'revisi_final_fix_banget', dan sering menimpa pekerjaan rekan lain. Kebiasaan TIK rapi yang Anda terapkan adalah ...",
    "options": [
      "Mengirimkan seluruh catatan koreksi lewat pesan singkat kepada satu anggota untuk diketik ulang ke berkas utama.",
      "Menyimpan hasil suntingan di perangkat masing-masing lalu mengirimkan ulang file revisi penuh ke grup pesan setiap kali ada perubahan.",
      "Menyepakati aturan penamaan berkas berurutan berdasarkan tanggal dan menunjuk satu koordinator penggabung revisi.",
      "Menggunakan satu dokumen kolaboratif resmi dengan fitur mode saran dan riwayat versi agar jejak suntingan tiap anggota utuh.",
      "Mengatur jadwal penyuntingan bergantian melalui folder bersama agar tidak ada dua anggota mengubah berkas di waktu bersamaan."
    ],
    "optionScores": [
      2,
      1,
      4,
      5,
      3
    ],
    "answer": "D",
    "explanation": "Satu dokumen kolaboratif resmi dengan mode saran dan riwayat versi membuat seluruh suntingan terdokumentasi rapi secara langsung tanpa konflik berkas ganda. Menertibkan penamaan berkas lewat satu koordinator penggabung sudah mengurangi kekacauan, namun masih rentan tertinggal versi dan menyita waktu penggabungan.",
    "tip": "Gunakan satu dokumen bersama dengan fitur track changes dan riwayat versi alih-alih menggandakan file revisi berulang-ulang."
  },
  {
    "id": "tkp-tik-019",
    "subPattern": "pemanfaatan-tik-untuk-efisiensi-kinerja",
    "difficulty": "sedang",
    "prompt": "Setiap awal bulan Anda harus mengirimkan surat undangan evaluasi beserta lampiran personal jadwal kepada 120 kepala sekolah di seluruh kabupaten, dan sebelumnya petugas menyunting nama serta alamat satu demi satu selama dua hari penuh. Cara kerja paling cerdas menggunakan perkakas perkantoran umum adalah ...",
    "options": [
      "Tetap menyunting nama satu per satu secara manual dan memperpanjang jadwal pengiriman surat ke sekolah.",
      "Menyerahkan pengetikan seratus dua puluh surat dinas beserta daftar kontak pribadi kepala sekolah kepada jasa pengetik di luar kantor.",
      "Menyiapkan satu format surat undangan resmi yang rapi lalu melampirkan tabel jadwal bersama berisi daftar seluruh sekolah.",
      "Membagi tugas penyuntingan manual surat kepada beberapa staf agar selesai lebih cepat dari jadwal dua hari.",
      "Memanfaatkan fitur mail merge terhubung daftar data master sekolah agar ratusan surat personal tercetak cepat serta akurat."
    ],
    "optionScores": [
      2,
      1,
      4,
      3,
      5
    ],
    "answer": "E",
    "explanation": "Fitur mail merge berbasis data master memangkas waktu pengerjaan dua hari menjadi hitungan menit tanpa menghilangkan personalisasi dan akurasi surat dinas. Mengirim satu surat umum disertai tabel panjang memang menghemat waktu penyuntingan, tetapi menyulitkan penerima mencari jadwal khusus sekolahnya.",
    "tip": "Untuk dokumen massal berpola seragam, gunakan otomatisasi templat (mail merge) berbasis data master agar cepat dan bebas salah ketik."
  },
  {
    "id": "tkp-tik-020",
    "subPattern": "pemanfaatan-tik-untuk-efisiensi-kinerja",
    "difficulty": "sedang",
    "prompt": "Rapat koordinasi rutin lintas 15 kecamatan setiap pekan sebelumnya selalu menghabiskan setengah hari kerja perjalanan darat para camat menuju ibu kota kabupaten hanya untuk laporan perkembangan 30 menit. Sebagai perancang efisiensi rapat berbasis TIK, gagasan terbaik Anda adalah ...",
    "options": [
      "Menggelar konferensi video terstruktur untuk laporan mingguan, sementara rapat tatap muka difokuskan pada agenda strategis bulanan.",
      "Memindahkan seluruh rapat koordinasi mingguan ke konferensi video tanpa tatap muka agar biaya perjalanan dihemat penuh.",
      "Mengganti seluruh rapat koordinasi dengan pembaruan pesan teks singkat di grup chat agar camat tidak perlu hadir.",
      "Tetap mewajibkan seluruh camat melakukan perjalanan dinas darat setiap pekan demi menjaga keseragaman absensi rapat di kantor.",
      "Mengurangi frekuensi rapat tatap muka menjadi dua pekan sekali sambil meminta camat mengirim ringkasan via surel lebih dulu."
    ],
    "optionScores": [
      5,
      4,
      2,
      1,
      3
    ],
    "answer": "A",
    "explanation": "Skema hibrida proporsional menghemat waktu dan biaya perjalanan lewat rapat daring mingguan sambil tetap menjaga kualitas pembahasan strategis secara tatap muka bulanan. Memindahkan seluruh pertemuan ke format daring memang efisien secara anggaran, tetapi berisiko mengurangi kedalaman koordinasi pada isu lapangan yang kompleks.",
    "tip": "Pilih model hibrida proporsional: pertemuan daring terfokus untuk sinkronisasi rutin, tatap muka untuk agenda strategis kompleks."
  },
  {
    "id": "tkp-tik-021",
    "subPattern": "pemanfaatan-tik-untuk-efisiensi-kinerja",
    "difficulty": "sedang",
    "prompt": "Arsip surat masuk dan keputusan penting selama lima tahun terakhir di unit Anda disimpan di puluhan folder komputer berantakan tanpa kata kunci sehingga mencari satu SK tahun lalu memakan waktu hingga berjam-jam. Pembenahan sistem pengarsipan digital sederhana namun efektif yang paling tepat Anda lakukan adalah ...",
    "options": [
      "Memakai fitur pencarian komputer dan mencadangkan seluruh folder arsip lama ke penyimpanan kantor apa adanya.",
      "Menyusun folder per tahun-kategori, membakukan nama file terindeks, lalu menata arsip bertahap bersama tim.",
      "Menyingkirkan seluruh arsip lama di atas dua tahun dari komputer unit dan memindahkan dokumen aktif ke kotak surel pribadi staf.",
      "Membuat struktur folder berdasarkan tahun terbit dan meminta setiap pemegang berkas menata dokumen kerjanya masing-masing.",
      "Menggabungkan seluruh dokumen SK ke dalam satu folder besar di komputer bersama agar tidak perlu membuka banyak subdirektori."
    ],
    "optionScores": [
      3,
      5,
      1,
      4,
      2
    ],
    "answer": "B",
    "explanation": "Taksonomi folder berbasis tahun-kategori yang dipadukan dengan standar penamaan berkas dan indeks pencarian memudahkan siapa saja menemukan arsip dalam hitungan detik. Membagi folder hanya per tahun tanpa pembakuan nama berkas dan indeks tetap menyulitkan penelusuran saat jumlah dokumen terus bertambah.",
    "tip": "Tata arsip digital dengan konvensi penamaan seragam, taksonomi jelas, dan indeks pencarian supaya mudah ditemukan oleh siapa saja."
  },
  {
    "id": "tkp-tik-022",
    "subPattern": "pemanfaatan-tik-untuk-efisiensi-kinerja",
    "difficulty": "sedang",
    "prompt": "Saat bekerja pada penyusunan jadwal survei lapangan 10 petugas ke puluhan titik desa, pimpinan sering kesulitan mengetahui titik mana yang sudah dikunjungi serta bukti fotonya tanpa menelepon satu per satu tiap sore. Solusi teknologi sederhana paling praktis adalah ...",
    "options": [
      "Mengumpulkan laporan kunjungan serta lampiran foto survei hanya setiap Jumat sore agar petugas lapangan tidak terganggu administrasi.",
      "Membuat lembar rekap daring bersama agar petugas memperbarui daftar desa dan mengunggah tautan foto tiap sore.",
      "Memakai formulir seluler berpenanda lokasi yang tersambung ke dasbor pantau agar progres desa tampil waktu nyata.",
      "Menugaskan petugas mengirim ringkasan kunjungan serta bukti foto lokasi ke grup koordinasi setiap sore untuk direkap manual.",
      "Meminta seluruh petugas kembali melapor ke kantor kabupaten setiap pukul empat sore demi menyerahkan langsung bukti survei desa."
    ],
    "optionScores": [
      2,
      4,
      5,
      3,
      1
    ],
    "answer": "C",
    "explanation": "Formulir seluler berpenanda lokasi yang tersambung ke dasbor pantau menyatukan bukti kunjungan dan progres secara seketika tanpa rekap ulang. Menggunakan lembar rekap manual di sore hari sudah rapi, tetapi tidak memberikan pantauan spasial waktu nyata dan masih rentan keterlambatan input.",
    "tip": "Gunakan formulir lapangan mobile terhubung dasbor untuk menyatukan pelaporan foto, lokasi, dan progres tanpa telepon berulang."
  },
  {
    "id": "tkp-tik-023",
    "subPattern": "pemanfaatan-tik-untuk-efisiensi-kinerja",
    "difficulty": "sulit",
    "prompt": "Anda mengamati unit Anda telah berlangganan tiga aplikasi manajemen kerja berbayar yang fungsinya saling tumpang tindih akibat usulan berbeda di tahun sebelumnya, menyebabkan data proyek terpecah dan anggaran rutin membengkak. Rekomendasi efisiensi berbasis TIK paling tepat untuk rapat penganggaran adalah ...",
    "options": [
      "Memutus seluruh kontrak aplikasi berbayar sekaligus bulan ini tanpa menyiapkan jalur pemindahan arsip proyek maupun platform pengganti.",
      "Meminta tim TI menyusun perbandingan fitur ketiga aplikasi tersebut untuk dibahas pada rapat anggaran tahunan.",
      "Mempertahankan ketiga langganan aplikasi berbayar sambil membagi penggunaannya antarbidang agar fitur tidak terlihat mubazir.",
      "Mengaudit pemakaian ketiga aplikasi, mengonsolidasikannya ke satu platform terpadu, serta menyiapkan migrasi data aman.",
      "Mengusulkan penghentian dua aplikasi yang paling jarang dipakai pada tahun depan demi menekan pengeluaran rutin unit."
    ],
    "optionScores": [
      1,
      3,
      2,
      5,
      4
    ],
    "answer": "D",
    "explanation": "Audit pemanfaatan yang diikuti konsolidasi ke satu platform inti beserta rencana migrasi data menjaga efisiensi anggaran sekaligus keutuhan arsip proyek. Menghentikan dua aplikasi langsung tanpa audit dan skema migrasi memang menghemat biaya, tetapi berisiko menghilangkan data proyek penting yang masih tersimpan.",
    "tip": "Cegah pemborosan aplikasi tumpang tindih lewat audit pemanfaatan, konsolidasi satu platform inti, dan rencana migrasi data aman."
  },
  {
    "id": "tkp-tik-024",
    "subPattern": "pemanfaatan-tik-untuk-efisiensi-kinerja",
    "difficulty": "sulit",
    "prompt": "Sebuah layanan perizinan digital baru sudah berjalan, tetapi 40% pemohon dari desa ternyata masih kembali mengulang unggahan hingga tiga kali karena ukuran file foto KTP dari kamera ponsel terlalu besar dan format PDF sering tidak terbaca jelas. Langkah rekayasa efisiensi paling berdampak yang Anda dorong bersama tim teknis adalah ...",
    "options": [
      "Memperkecil lagi batas maksimal ukuran berkas unggahan agar ruang peladen lebih hemat sambil mewajibkan pemohon mengatur file sendiri.",
      "Menambahkan pesan peringatan batas ukuran berkas berwarna merah mencolok pada halaman depan aplikasi perizinan.",
      "Menyediakan petugas bantu di loket layanan untuk menolong pemohon desa mengecilkan ukuran berkas sebelum diunggah.",
      "Memperluas panduan bergambar cara memperkecil ukuran foto KTP di halaman unggah agar pemohon desa lebih mudah mengikutinya.",
      "Menambahkan kompresi gambar otomatis di aplikasi, pratinjau keterbacaan berkas, serta opsi integrasi identitas kependudukan digital."
    ],
    "optionScores": [
      1,
      2,
      3,
      4,
      5
    ],
    "answer": "E",
    "explanation": "Kompresi gambar otomatis di sisi aplikasi disertai pratinjau keterbacaan dan opsi integrasi IKD memindahkan beban teknis dari pemohon ke sistem sehingga angka gagal unggah turun drastis. Menambah panduan visual saja memang informatif, tetapi tetap menyulitkan warga desa yang belum terbiasa memakai alat pengompres file.",
    "tip": "Selesaikan hambatan teknis berulang masyarakat dengan membangun otomatisasi bantu langsung di aplikasi (desain empatik pengguna)."
  },
  {
    "id": "tkp-tik-025",
    "subPattern": "literasi-digital-dan-verifikasi-informasi",
    "difficulty": "mudah",
    "prompt": "Seorang rekan membagikan tautan berita sensasional mengenai perubahan mendadak jadwal pencairan gaji ke-13 beserta formulir pendataan ulang ke grup percakapan pegawai kantor. Langkah literasi digital paling bijak sebelum mempercayai maupun menindaklanjuti pesan itu adalah ...",
    "options": [
      "Memeriksa kebenaran kabar tersebut melalui portal resmi pemerintah berdomain .go.id lalu mengingatkan grup bila tautan terbukti penipuan.",
      "Menunggu klarifikasi resmi dari bagian kepegawaian kantor sebelum menanggapi atau mengomentari isi tautan tersebut.",
      "Segera mengklik tautan untuk mengisi NIP serta rekening pribadi lalu meneruskannya ke grup dinas lain agar rekan tidak tertinggal.",
      "Memverifikasi kabar tersebut di situs resmi kementerian terkait secara mandiri dan memilih tidak ikut mengklik tautannya.",
      "Membiarkan tautan beredar di grup sambil menanyakan secara pribadi kepada rekan dekat apakah formulir tersebut memang benar."
    ],
    "optionScores": [
      5,
      3,
      1,
      4,
      2
    ],
    "answer": "A",
    "explanation": "Memverifikasi ke portal resmi pemerintah sekaligus memperingatkan grup saat ditemukan indikasi phishing melindungi diri sendiri dan rekan kerja dari jebakan pencurian data. Mengecek secara mandiri tanpa mengedukasi grup sudah menjaga keamanan pribadi, tetapi membiarkan rekan lain tetap rentan tertipu.",
    "tip": "Cek kebenaran kabar kebijakan pegawai lewat kanal resmi kementerian/.go.id sebelum mengklik tautan atau meneruskannya."
  },
  {
    "id": "tkp-tik-026",
    "subPattern": "literasi-digital-dan-verifikasi-informasi",
    "difficulty": "mudah",
    "prompt": "Dalam riset penyusunan naskah kebijakan, Anda menemukan infografis angka statistik menarik yang beredar di media sosial populer, tetapi tidak mencantumkan tahun pengambilan data maupun lembaga penerbit resminya. Sikap Anda sebagai penyusun data akurat adalah ...",
    "options": [
      "Tetap menyertakan angka infografis sebagai pelengkap latar belakang naskah dengan mencantumkan keterangan sumber media sosial.",
      "Melacak angka tersebut ke publikasi resmi lembaga statistik dan menolaknya bila sumber sah tak terverifikasi.",
      "Menyisihkan infografis tanpa sumber itu dari draf naskah dan langsung menggantinya dengan data lama milik unit sendiri.",
      "Menanyakan kejelasan sumber data infografis tersebut terlebih dahulu kepada rekan peneliti atau atasan sebelum memakainya.",
      "Mengutip langsung angka infografis media sosial itu ke paparan pimpinan tanpa verifikasi sumber karena tampilannya sangat meyakinkan."
    ],
    "optionScores": [
      2,
      5,
      4,
      3,
      1
    ],
    "answer": "B",
    "explanation": "Menelusuri kebenaran angka ke publikasi primer lembaga statistik resmi dan menolaknya bila tak berdasar menjaga integritas naskah kebijakan berbasis bukti. Langsung mengganti dengan arsip internal lama memang aman dari disinformasi, tetapi berisiko melewatkan data terbaru resmi yang relevan.",
    "tip": "Selalu lacak angka dan klaim statistik hingga ke dokumen sumber resmi sebelum memasukkannya ke dalam naskah kerja."
  },
  {
    "id": "tkp-tik-027",
    "subPattern": "literasi-digital-dan-verifikasi-informasi",
    "difficulty": "sedang",
    "prompt": "Anda menjumpai unggahan video lama banjir di kabupaten lain yang sengaja diedarkan ulang di media sosial lokal seolah-olah terjadi hari ini di wilayah dinas Anda, membuat sebagian warga mulai panik menanyakan kondisi tanggul setempat. Sebagai aparatur yang peka literasi informasi, respons paling tepat adalah ...",
    "options": [
      "Membagikan ulang video tersebut dengan komentar tebakan pribadi tanpa memastikan kondisi tanggul atau melapor ke tim pantau.",
      "Meneruskan tautan video tersebut kepada pejabat kehumasan instansi agar disiapkan tanggapan resmi sesuai prosedur.",
      "Memverifikasi kondisi tanggul bersama petugas lalu menerbitkan klarifikasi resmi berpenanda waktu di kanal instansi.",
      "Membiarkan video beredar sambil menunggu warga menyadari sendiri bahwa kondisi cuaca di lingkungan sekitar sebenarnya aman.",
      "Mengecek kondisi lapangan bersama petugas terkait lalu menyampaikan bantahan singkat di kolom komentar kanal media sosial dinas."
    ],
    "optionScores": [
      1,
      3,
      5,
      2,
      4
    ],
    "answer": "C",
    "explanation": "Verifikasi kondisi lapangan yang diikuti rilis klarifikasi resmi berbukti waktu terbaru menenangkan warga secara kredibel dan mudah dirujuk. Membalas sekilas di kolom komentar memang sudah berdasar pengecekan lapangan, tetapi jangkauannya sempit dan kurang kuat sebagai rujukan resmi publik.",
    "tip": "Tangkis hoaks video daur ulang lewat verifikasi cepat fakta lapangan diikuti rilis klarifikasi resmi berpenanda waktu jelas."
  },
  {
    "id": "tkp-tik-028",
    "subPattern": "literasi-digital-dan-verifikasi-informasi",
    "difficulty": "sedang",
    "prompt": "Sebuah artikel blog tak dikenal menuduh instansi Anda memangkas bantuan pendidikan daerah berdasarkan penafsiran sepihak terhadap satu halaman draf rancangan anggaran, dan artikel itu mulai ramai dikutip rekan di grup alumni. Langkah literasi informasi paling bijak Anda adalah ...",
    "options": [
      "Menjelaskan secara sopan bahwa kutipan blog itu masih berupa draf awal sambil mengajak rekan tidak mudah terpancing isu.",
      "Mengingatkan pengirim tautan secara pribadi untuk menghentikan pembahasan isu anggaran di grup alumni demi menjaga ketenangan bersama.",
      "Meneruskan artikel blog tersebut ke grup lain sambil menyayangkan kebijakan pimpinan tanpa memeriksa dokumen final anggaran resmi.",
      "Memeriksa dokumen anggaran resmi secara utuh lalu meluruskan salah tafsir di grup memakai data lengkap dan tautan sumber sah.",
      "Tidak menanggapi perdebatan di grup dan meneruskan artikel blog tersebut kepada tim humas instansi untuk ditelaah."
    ],
    "optionScores": [
      4,
      2,
      1,
      5,
      3
    ],
    "answer": "D",
    "explanation": "Membaca utuh dokumen resmi dan meluruskan salah tafsir dengan fakta lengkap serta tautan terverifikasi mengedukasi publik secara objektif. Menjelaskan secara sopan bahwa sumber blog masih berupa draf tanpa menyajikan rujukan dokumen final sudah meredakan isu, namun belum membekali rekan dengan bukti verifikasi utuh.",
    "tip": "Jawab salah tafsir atas kutipan sepotong dengan merujuk konteks utuh dokumen resmi secara tenang dan faktual."
  },
  {
    "id": "tkp-tik-029",
    "subPattern": "literasi-digital-dan-verifikasi-informasi",
    "difficulty": "sedang",
    "prompt": "Mengapa seorang ASN di era digital perlu memahami bahwa seluruh aktivitas komentar, penyebaran konten, maupun tanda suka di akun media sosial pribadi sekalipun membentuk jejak digital yang memengaruhi kepercayaan publik terhadap institusi negara?",
    "options": [
      "Karena jejak digital pribadi mudah dinilai publik sehingga ASN wajib menjaga etika kata serta citra baik instansi.",
      "Agar aparatur menghindari komentar di ruang publik maya dan cukup menyukai unggahan resmi instansi saja.",
      "Supaya pegawai memakai akun samaran anonim saat berdiskusi di media sosial agar status aparatur tidak diketahui publik.",
      "Karena peraturan kepegawaian telah mengatur batasan interaksi daring sehingga setiap ASN cukup menaati surat edaran resmi dari pimpinan unit.",
      "Karena persepsi publik melekat pada status ASN sehingga dituntut bersikap etis, netral, dan tidak mengamplifikasi hoaks di media sosial."
    ],
    "optionScores": [
      4,
      2,
      1,
      3,
      5
    ],
    "answer": "E",
    "explanation": "Kesadaran jejak digital berpijak pada tanggung jawab etis dan netralitas ASN sebagai perekat publik sehingga selalu cermat memverifikasi informasi sebelum berinteraksi. Menjaga kesantunan kata dan citra instansi saja sudah baik, namun belum menekankan kewajiban netralitas dan pencegahan amplifikasi hoaks.",
    "tip": "Pelihara rekam jejak digital yang santun, netral, terverifikasi fakta, dan mencerminkan kedewasaan abdi negara."
  },
  {
    "id": "tkp-tik-030",
    "subPattern": "literasi-digital-dan-verifikasi-informasi",
    "difficulty": "sedang",
    "prompt": "Saat Anda menyelenggarakan pelatihan pemberdayaan masyarakat bagi pelaku usaha desa, banyak peserta mengaku mudah tertipu tautan undian berhadiah dan file APK palsu yang dikirim lewat aplikasi pesan singkat. Materi literasi digital paling tepat yang dapat Anda sisipkan dalam sesi pengantar adalah ...",
    "options": [
      "Mengajarkan ciri praktis tautan tiruan, jebakan file APK palsu, dan larangan berbagi OTP sebelum mengklik pesan mencurigakan apa pun.",
      "Menjelaskan konsep teknis enkripsi jaringan perbankan secara ringkas agar peserta memahami cara kerja keamanan data.",
      "Menampilkan contoh kasus penipuan digital terkini dan mengingatkan peserta agar langsung memblokir nomor asing pengirim tautan.",
      "Membagikan panduan keamanan digital dari instansi agar peserta pelatihan dapat membaca langkah pencegahannya sepulang acara.",
      "Menyarankan pelaku usaha desa kembali bertransaksi secara tunai saja untuk menghindari risiko penipuan berbasis aplikasi ponsel."
    ],
    "optionScores": [
      5,
      2,
      4,
      3,
      1
    ],
    "answer": "A",
    "explanation": "Materi praktis mengenai ciri tautan tiruan, bahaya berkas APK, serta larangan berbagi OTP langsung membekali pelaku usaha keterampilan nyata sehari-hari. Sekadar menampilkan contoh kasus dan meminta memblokir nomor asing sudah meningkatkan kewaspadaan, tetapi belum melatih kemampuan verifikasi mandiri saat modus penipuan berubah.",
    "tip": "Literasi keamanan digital masyarakat fokus pada kebiasaan praktis sehari-hari mengenali modus penipuan umum (APK, tautan tiruan, OTP)."
  },
  {
    "id": "tkp-tik-031",
    "subPattern": "literasi-digital-dan-verifikasi-informasi",
    "difficulty": "sulit",
    "prompt": "Beredar rekaman video sintetik (deepfake AI) sangat meyakinkan yang meniru wajah serta suara pejabat daerah Anda seolah-olah mengumumkan pungutan biaya pendaftaran bantuan usaha bagi warga melalui tautan transfer pribadi. Langkah tanggap krisis literasi informasi paling komprehensif dari tim Anda adalah ...",
    "options": [
      "Menonaktifkan sementara seluruh kolom komentar akun media sosial dinas sambil berharap warga menyadari sendiri kejanggalan video tersebut.",
      "Merilis peringatan resmi lintas kanal, melapor takedown ke platform, dan mengedukasi warga atas ciri deepfake.",
      "Melaporkan temuan video palsu kepada pimpinan dan tim hukum sambil menunggu arahan resmi sebelum merilis bantahan.",
      "Mengimbau warga melalui pesan berantai pribadi agar berhati-hati tanpa terlebih dahulu menyiapkan rilis resmi pada kanal instansi.",
      "Segera merilis bantahan resmi di kanal portal dan media sosial instansi bahwa bantuan usaha warga tidak dipungut biaya."
    ],
    "optionScores": [
      1,
      5,
      3,
      2,
      4
    ],
    "answer": "B",
    "explanation": "Respons tiga sisi berupa peringatan cepat lintas kanal resmi, pelaporan penurunan konten (takedown), dan edukasi ciri deepfake menghentikan penipuan sekaligus meningkatkan ketahanan publik. Merilis bantahan resmi tanpa mengejar penghapusan konten dan edukasi publik tetap membiarkan video palsu terus memakan korban.",
    "tip": "Krisis penipuan deepfake membutuhkan respons tiga serangkai: klarifikasi cepat lintas kanal resmi, koordinasi otoritas takedown, dan edukasi publik."
  },
  {
    "id": "tkp-tik-032",
    "subPattern": "literasi-digital-dan-verifikasi-informasi",
    "difficulty": "sulit",
    "prompt": "Seorang rekan kerja di unit pengkajian sering memakai rujukan statistik dari portal berita daring tanpa mengecek metodologi maupun kesesuaian tahun data hingga nyaris memicu salah sasaran anggaran daerah. Agar budaya literasi data menguat di seluruh unit tanpa menyinggung rekan tersebut, inisiatif terbaik Anda adalah ...",
    "options": [
      "Mengajak rekan berdiskusi empat mata secara sopan untuk menyelaraskan angka kajiannya dengan publikasi resmi BPS.",
      "Menyunting sendiri seluruh angka di dokumen bersama tanpa mengkomunikasikan pentingnya verifikasi tahun data dengan rekan terkait.",
      "Berdiskusi santun berdua untuk memperbaiki data kajian lalu mengusulkan daftar periksa sumber resmi pada templat kerja tim.",
      "Membiarkan draf kajian bermasalah masuk ke forum anggaran lalu mengkritik lemahnya validasi sumber data rekan di hadapan para pimpinan.",
      "Meminta pimpinan mengingatkan seluruh anggota tim secara umum mengenai akurasi sumber data pada rapat evaluasi mingguan unit."
    ],
    "optionScores": [
      4,
      2,
      5,
      1,
      3
    ],
    "answer": "C",
    "explanation": "Mengombinasikan diskusi privat yang penuh respek dengan usulan daftar periksa sumber pada templat kerja membenahi kajian saat ini sekaligus mencegah kekeliruan serupa di seluruh tim. Memberikan koreksi santun secara pribadi sudah menjaga perasaan rekan, namun belum membangun sistem pengaman mutu bagi unit.",
    "tip": "Perkuat literasi data tim dengan koreksi privat penuh respek plus standarisasi daftar periksa sumber data primer."
  },
  {
    "id": "tkp-tik-033",
    "subPattern": "etika-komunikasi-daring-dan-pelayanan-elektronik",
    "difficulty": "mudah",
    "prompt": "Seorang warga mengirim pesan lewat kanal resmi WhatsApp/chat layanan instansi Anda pada pukul 21.30 malam menggunakan bahasa kurang teratur dan beberapa tanda seru karena cemas berkasnya belum terverifikasi. Sikap komunikasi elektronik yang paling tepat pada jam layanan keesokan paginya (atau dalam pengelolaan kanal resmi) adalah ...",
    "options": [
      "Membalas pesan sesuai urutan antrean pagi dengan templat balasan standar bahwa berkas masih dalam proses.",
      "Menunda balasan selama dua hari atau memblokir sementara pengirim hingga warga menghubungi ulang dengan kalimat lebih tertata.",
      "Membalas segera dengan bahasa sopan dan menyampaikan status verifikasi berkas pemohon secara ringkas.",
      "Menyapa ramah dan empatik, menjelaskan status berkas beserta tindak lanjutnya, serta menginfokan jam layanan resmi.",
      "Menjawab status berkas warga sambil menyisipkan teguran halus mengenai etika menghubungi kanal layanan di luar jam kerja."
    ],
    "optionScores": [
      3,
      1,
      4,
      5,
      2
    ],
    "answer": "D",
    "explanation": "Balasan ramah yang menjelaskan status berkas, tindak lanjut, serta jam operasional resmi meredakan kecemasan pemohon sekaligus memberi kejelasan ekspektasi layanan ke depan. Menjawab sopan secara ringkas tentang status berkas sudah baik, tetapi kurang memberi kepastian langkah berikutnya dan jam layanan.",
    "tip": "Respons pesan kanal layanan publik dengan ramah, jelas status solusinya, dan tetap sopan meski pengirim sedang panik."
  },
  {
    "id": "tkp-tik-034",
    "subPattern": "etika-komunikasi-daring-dan-pelayanan-elektronik",
    "difficulty": "mudah",
    "prompt": "Ketika Anda mengikuti rapat kerja resmi lewat konferensi video bersama pimpinan lintas instansi, kebiasaan etika rapat daring (netiquette) paling tepat yang seharusnya dijaga adalah ...",
    "options": [
      "Hadir tepat waktu dengan posisi rapi lalu menyimak pasif seluruh pembahasan hingga rapat resmi ditutup.",
      "Menonaktifkan kamera sepanjang rapat formal lintas instansi sambil berbelanja daring atau mengobrol santai bersama rekan di ruangan.",
      "Berpakaian dinas rapi serta memilih mematikan kamera dan mikrofon agar koneksi rapat tetap stabil dan fokus menyimak.",
      "Menyalakan mikrofon tanpa jeda di ruang kerja ramai agar dapat langsung menyela saat muncul gagasan baru.",
      "Berpakaian dinas rapi, menyalakan kamera saat memungkinkan, membisukan mikrofon saat menyimak, dan memakai fitur angkat tangan."
    ],
    "optionScores": [
      3,
      1,
      4,
      2,
      5
    ],
    "answer": "E",
    "explanation": "Kesiapan visual yang rapi, kamera menyala saat memungkinkan, mikrofon dalam posisi bisu ketika menyimak, dan tertib fitur angkat tangan menunjukkan penghargaan penuh pada forum resmi lintas instansi. Mengikuti rapat dengan rapi dan fokus namun menonaktifkan kamera sepanjang acara tetap sopan, tetapi mengurangi kehadiran dan partisipasi aktif.",
    "tip": "Etika rapat daring: busana rapi, mute saat menyimak, raise hand sebelum bicara, dan fokus hadir."
  },
  {
    "id": "tkp-tik-035",
    "subPattern": "etika-komunikasi-daring-dan-pelayanan-elektronik",
    "difficulty": "sedang",
    "prompt": "Di grup percakapan resmi kantor, dua rekan terlibat adu argumen tajam mengenai pembagian jadwal piket hingga melontarkan kalimat menyindir di depan puluhan anggota grup termasuk atasan dan staf baru. Sebagai rekan kerja di grup tersebut, langkah terbaik Anda adalah ...",
    "options": [
      "Meredakan suasana secara netral di grup lalu mengajak pembahasan pembagian jadwal piket dipindahkan ke jalur koordinasi privat.",
      "Ikut menimpali adu argumen di grup resmi memakai sindiran ringan lalu membagikan tangkapan layar perdebatan ke luar unit.",
      "Memilih diam di grup resmi sambil berharap atasan atau admin grup segera mengambil alih untuk melerai perdebatan.",
      "Menegur keduanya langsung di grup besar dengan kalimat tegas agar seluruh anggota tahu perdebatan harus segera dihentikan.",
      "Menegur keduanya secara sopan lewat pesan pribadi masing-masing tanpa menengahi ketegangan yang sudah muncul di grup."
    ],
    "optionScores": [
      5,
      1,
      3,
      2,
      4
    ],
    "answer": "A",
    "explanation": "Meredakan suasana secara netral di ruang grup lalu mengalihkan pembahasan teknis ke jalur privat menjaga marwah pihak berkonflik dan memulihkan fungsi profesional grup resmi. Menghubungi keduanya lewat pesan pribadi tanpa meredam ketegangan di grup sudah baik menghindari keributan terbuka, tetapi belum menutup kegaduhan di hadapan anggota lain.",
    "tip": "Jangan selesaikan konflik pribadi di grup kerja besar; redakan secara netral dan ajak bahas terfokus secara privat."
  },
  {
    "id": "tkp-tik-036",
    "subPattern": "etika-komunikasi-daring-dan-pelayanan-elektronik",
    "difficulty": "sedang",
    "prompt": "Anda bertugas mengirimkan surel resmi undangan penting beserta lampiran kepada pemangku kepentingan eksternal. Namun dua menit setelah menekan tombol kirim, Anda menyadari lampiran dokumen yang terikut masih versi draf dengan catatan koreksi internal yang belum dibersihkan. Tindakan berintegritas dan profesional Anda adalah ...",
    "options": [
      "Mengirim ulang surel baru berisi dokumen final yang benar dengan kata pengantar singkat tanpa menyinggung berkas keliru.",
      "Mengirim surel ralat sopan berisi lampiran final yang sah serta meminta penerima menghapus berkas draf lama.",
      "Mengharapkan penerima hanya membaca surat undangan utama dan tidak membuka catatan internal di bagian lampiran draf.",
      "Mengabaikan kekeliruan tersebut atau menyalahkan gangguan sistem jaringan surat elektronik jika nanti ada pertanyaan mitra.",
      "Melaporkan kekeliruan lampiran kepada atasan langsung sambil menunggu izin resmi untuk mengirim surel perbaikan."
    ],
    "optionScores": [
      4,
      5,
      2,
      1,
      3
    ],
    "answer": "B",
    "explanation": "Mengirim surel ralat resmi secara cepat yang meminta penerima mengabaikan draf sebelumnya serta langsung menyertakan dokumen final menunjukkan integritas dan mencegah salah tindak mitra. Mengirim ulang berkas final tanpa ralat eksplisit tetap memberi dokumen benar, tetapi berisiko membuat penerima bingung atau masih merujuk lampiran lama.",
    "tip": "Jika salah kirim surel dinas/lampiran, segera kirim klarifikasi ralat resmi dengan lampiran sah dan etiket permohonan maaf profesional."
  },
  {
    "id": "tkp-tik-037",
    "subPattern": "etika-komunikasi-daring-dan-pelayanan-elektronik",
    "difficulty": "sedang",
    "prompt": "Ketika mengisi kolom aduan masyarakat di akun resmi media sosial instansi, banyak warga memakai akun tidak bernama dengan bahasa emosional mengkritik antrean sistem daring yang sempat macet tiga puluh menit pagi tadi. Sebagai pengelola komunikasi publik instansi, sikap terbaik Anda adalah ...",
    "options": [
      "Menyaring komentar emosional di kanal aduan lalu memprioritaskan balasan atas pertanyaan warga yang tertulis sopan serta jelas.",
      "Menghapus seluruh komentar kritik pedas dan memblokir akun pengirim agar tampilan beranda resmi instansi hanya berisi tanggapan positif.",
      "Menjawab empatik serta transparan atas kendala yang telah pulih disertai kanal bantu aktif sebagai bahan evaluasi.",
      "Membalas sopan di kolom komentar bahwa gangguan sistem pagi tadi telah teratasi dan antrean daring sudah normal.",
      "Membiarkan komentar kritik tidak terbalas dengan anggapan akun media sosial resmi hanya ditujukan bagi publikasi acara pimpinan."
    ],
    "optionScores": [
      3,
      1,
      5,
      4,
      2
    ],
    "answer": "C",
    "explanation": "Respons empatik dan transparan mengenai pemulihan sistem yang disertai kanal bantu aktif serta pencatatan evaluasi membangun kepercayaan publik dan mutu layanan. Sekadar mengabarkan sistem sudah normal dengan sopan memang informatif, namun belum memfasilitasi warga yang masih terdampak gangguan sebelumnya.",
    "tip": "Kelola komentar kritik di akun resmi instansi secara santun, faktual, tidak menghapus kritik sah, dan beri jalur solusi aktif."
  },
  {
    "id": "tkp-tik-038",
    "subPattern": "etika-komunikasi-daring-dan-pelayanan-elektronik",
    "difficulty": "sedang",
    "prompt": "Anda terbiasa menjawab pesan kerja dengan cepat, tetapi atasan Anda sering mengirimkan pesan koordinasi mendadak terkait persiapan bahan rapat penting pada pukul 22.00 malam, sementara beberapa rekan lain mengirim pesan non-darurat di akhir pekan tanpa mencantumkan urgensi maupun konteks jelas. Agar etika komunikasi kerja tetap sehat tanpa mengganggu ketanggapan darurat, budaya komunikasi yang paling baik Anda bangun dalam tim adalah ...",
    "options": [
      "Membiarkan pesan malam atau akhir pekan menumpuk tanpa mengomunikasikan tata cara penyampaian konteks urgensi.",
      "Menyepakati pembatasan jam pengiriman pesan kerja rutin dalam tim sambil tetap menyiagakan jalur telepon saat kondisi darurat.",
      "Mematikan notifikasi grup kerja di luar jam kantor dan membalas pesan rutin keesokan hari saat jam kerja.",
      "Menyepakati etika tim untuk menyertakan konteks jelas, memakai kirim terjadwal untuk pesan rutin, dan sigap saat darurat.",
      "Menonaktifkan seluruh saluran telepon dan pesan di luar jam dinas secara mutlak meskipun berpotensi terjadi situasi darurat kerja."
    ],
    "optionScores": [
      2,
      4,
      3,
      5,
      1
    ],
    "answer": "D",
    "explanation": "Kesepakatan tim yang memuat kewajiban konteks pesan, fitur kirim terjadwal untuk hal rutin, dan kesiapsiagaan darurat menjaga kesehatan kerja sekaligus ketanggapan organisasi. Membatasi jam pesan rutin tanpa membakukan kejelasan konteks dan kirim terjadwal belum menyentuh sumber kesalahpahaman komunikasi.",
    "tip": "Bangun kesepakatan komunikasi tim yang membedakan urusan darurat nyata dari pesan rutin, lengkap dengan konteks jelas dan kirim terjadwal."
  },
  {
    "id": "tkp-tik-039",
    "subPattern": "etika-komunikasi-daring-dan-pelayanan-elektronik",
    "difficulty": "sulit",
    "prompt": "Sebuah tangkapan layar percakapan internal tim teknis yang berisi komentar keluhan lelah seorang staf terhadap rumitnya aturan baru tiba-tiba bocor ke ruang publik dan memicu sorotan miring media lokal terhadap kinerja birokrasi instansi Anda. Langkah penanganan komunikasi serta etika digital paling bijak yang Anda dukung adalah ...",
    "options": [
      "Menegur staf yang mengeluh dan melarang percakapan pribadi apa pun di dalam seluruh grup koordinasi tim.",
      "Menyampaikan permohonan maaf terbuka atas kegaduhan publik dan menegakkan kembali disiplin kerahasiaan ruang internal.",
      "Mengadakan evaluasi internal tertutup sambil menyerahkan seluruh pernyataan media kepada pimpinan instansi.",
      "Membantah ke media lokal bahwa tangkapan layar percakapan itu seratus persen rekayasa palsu sekaligus menindak staf tanpa klarifikasi.",
      "Mengklarifikasi komitmen perbaikan layanan secara jujur ke publik, menegakkan etika ruang internal, dan membuka kanal aspirasi staf."
    ],
    "optionScores": [
      2,
      4,
      3,
      1,
      5
    ],
    "answer": "E",
    "explanation": "Menjawab publik secara jujur dan berorientasi perbaikan layanan sambil menertibkan kerahasiaan internal serta membuka saluran aspirasi staf menyelesaikan krisis citra hingga akarnya. Meminta maaf dan memperketat disiplin ruang koordinasi saja sudah tepat menjaga citra, tetapi belum menampung keluhan konstruktif staf secara sehat.",
    "tip": "Pada kebocoran komunikasi internal: jawab publik jujur-solutif, benahi disiplin kerahasiaan ruang internal, dan buka kanal aspirasi sehat."
  },
  {
    "id": "tkp-tik-040",
    "subPattern": "etika-komunikasi-daring-dan-pelayanan-elektronik",
    "difficulty": "sulit",
    "prompt": "Lembaga Anda mengintegrasikan sistem layanan pengaduan otomatis berbasis chatbot AI di portal web, tetapi beberapa warga mengeluh terjebak percakapan berputar-putar dengan bot saat menghadapi kasus unik yang tidak cocok dengan jawaban standar. Perbaikan rancangan etika layanan elektronik paling tepat adalah ...",
    "options": [
      "Menyembunyikan identitas bot seolah warga dilayani petugas manusia agar pengguna merasa lebih nyaman saat melapor.",
      "Menyediakan nomor pusat panggilan terpisah di halaman kontak portal apabila jawaban chatbot dirasa warga kurang memadai.",
      "Menambah daftar pertanyaan pilihan ganda di awal percakapan chatbot agar pengelompokan aduan warga makin rinci.",
      "Menambah variasi kata kunci jawaban pada skenario kasus unik di chatbot agar warga lebih mudah menemukan solusi masalahnya.",
      "Menyertakan tombol eskalasi cepat ke petugas manusia serta transparansi sejak awal bahwa warga berinteraksi dengan chatbot otomatis."
    ],
    "optionScores": [
      1,
      3,
      2,
      4,
      5
    ],
    "answer": "E",
    "explanation": "Menjamin transparansi identitas asisten otomatis sejak awal dan menyediakan tombol eskalasi cepat ke petugas manusia mencegah warga terjebak dalam otomasi kaku. Menambah variasi kata kunci jawaban memang membantu perbaikan bot, tetapi tidak dapat menggantikan peran penilaian manusia pada kasus unik yang kompleks.",
    "tip": "Prinsip etis chatbot layanan publik: jelaskan identitas asisten otomatis sejak awal dan selalu sediakan tombol cepat ke petugas manusia."
  }
];

export const tikQuestions: readonly Question[] = buildTkpPatternQuestions(
  "tik",
  [...tikDrafts, ...tikBatch2Drafts, ...tikBatch3Drafts],
);
