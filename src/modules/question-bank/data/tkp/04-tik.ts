import {
  buildTkpPatternQuestions,
  type Question,
  type TkpQuestionDraft,
} from "@/modules/question-bank/domain/question";

const tikDrafts: readonly TkpQuestionDraft[] = [
  {
    "id": "tkp-tik-001",
    "subPattern": "adaptasi-sistem-digital-dan-otomatisasi-ai",
    "difficulty": "mudah",
    "prompt": "Kantor Anda mulai mewajibkan penggunaan aplikasi persuratan elektronik nasional baru untuk menggantikan pencatatan buku agenda kertas, namun tata letaknya masih terasa asing bagi sebagian pegawai. Sikap awal Anda yang paling tepat adalah ...",
    "options": [
      "Proaktif mempelajari buku panduan serta berlatih langsung di aplikasi baru tersebut, sambil siap membantu rekan kerja yang menemui kendala pengoperasian awal",
      "Tetap memakai aplikasi baru apabila sudah ditegur langsung oleh atasan, tetapi mencatat surat tetap di buku agenda lama saja",
      "Meminta staf honorer muda mengisikan seluruh surat elektronik atas akun Anda tanpa mau mempelajari alurnya sendiri",
      "Mengusulkan penundaan pemakaian aplikasi baru selama satu tahun sampai tampilan tombolnya diubah menyerupai format kertas",
      "Menilai aplikasi elektronik hanya menambah kerja ganda dan menolak masuk ke akun hingga diwajibkan sanksi disiplin"
    ],
    "optionScores": [
      5,
      3,
      2,
      4,
      1
    ],
    "answer": "A",
    "explanation": "Aspek TIK dan nilai Adaptif menuntut kemauan proaktif menguasai sistem baru serta kesiapan berbagi keahlian kepada rekan tim sehingga transisi birokrasi digital berjalan mulus (skor 5).",
    "tip": "Hadapi sistem kerja digital baru dengan belajar proaktif dan membantu rekan tim beradaptasi bersama."
  },
  {
    "id": "tkp-tik-002",
    "subPattern": "adaptasi-sistem-digital-dan-otomatisasi-ai",
    "difficulty": "mudah",
    "prompt": "Instansi Anda memperkenalkan asisten kecerdasan buatan (AI) internal terverifikasi untuk membantu meringkas notulen rapat dan memilah pengelompokan dokumen rutin. Sikap Anda yang paling proporsional dalam memanfaatkannya adalah ...",
    "options": [
      "Menolak menggunakannya sama sekali karena khawatir kecerdasan buatan suatu saat akan menggantikan seluruh peran aparatur",
      "Memanfaatkannya secara cerdas untuk mempercepat draf awal dan klasifikasi, sembari tetap melakukan verifikasi fakta serta tanggung jawab penuh atas ketepatan isi dokumen akhir",
      "Memasukkan salinan draf hasil AI langsung menjadi surat keputusan resmi pimpinan tanpa membaca ulang kebenaran isinya",
      "Mengunggah seluruh data sensitif warga ke situs AI gratisan lain dari ponsel pribadi demi membandingkan kecepatan hasil",
      "Mengizinkan AI mengambil keputusan kelayakan penerima bantuan sosial sepenuhnya tanpa tinjauan petugas lapangan"
    ],
    "optionScores": [
      2,
      5,
      3,
      1,
      4
    ],
    "answer": "B",
    "explanation": "Penggunaan AI di birokrasi harus tetap menempatkan manusia sebagai pengendali dan verifikator akhir (human-in-the-loop) pada sistem terverifikasi aman instansi—mempercepat kerja tanpa menyerahkan tanggung jawab akurasi ke mesin (skor 5).",
    "tip": "Manfaatkan AI terverifikasi sebagai alat bantu efisiensi dengan tetap memegang kendali verifikasi substansi (human-in-the-loop)."
  },
  {
    "id": "tkp-tik-003",
    "subPattern": "adaptasi-sistem-digital-dan-otomatisasi-ai",
    "difficulty": "sedang",
    "prompt": "Seorang pegawai senior hampir pensiun terlihat sangat stres saat harus memindahkan arsip manual ke sistem dashboard digital baru, hingga ia berniat mengajukan pindah tugas karena takut gagal mengoperasikannya. Sebagai rekan satu unit yang lebih akrab dengan teknologi, langkah terbaik Anda adalah ...",
    "options": [
      "Menganjurkannya memang sebaiknya pindah ke bagian pengarsipan manual saja supaya beban sistem digital tim lebih ringan",
      "Mengambil alih seluruh akun pekerjaannya setiap hari tanpa mengajarinya cara pakai sedikit pun",
      "Mendampinginya belajar langkah demi langkah secara sabar, membuat catatan pintasan sederhana berhuruf besar sesuai alurnya, dan mendorong rasa percaya dirinya",
      "Mengirimkan tautan video pelatihan berdurasi tiga jam agar ia pelajari sendiri di rumah saat akhir pekan",
      "Melaporkan ke pimpinan bahwa pegawai senior tersebut menghambat target transformasi digital unit minggu ini"
    ],
    "optionScores": [
      2,
      3,
      5,
      4,
      1
    ],
    "answer": "C",
    "explanation": "Transformasi digital berkelanjutan tidak meninggalkan siapa pun tertinggal; pendampingan sabar, panduan praktis personal, serta penguatan mental rekan senior mewujudkan nilai Adaptif sekaligus Harmonis (skor 5).",
    "tip": "Jembatani kesenjangan teknologi rekan senior dengan pendampingan sabar bertahap dan panduan praktis yang ramah pengguna."
  },
  {
    "id": "tkp-tik-004",
    "subPattern": "adaptasi-sistem-digital-dan-otomatisasi-ai",
    "difficulty": "sedang",
    "prompt": "Aplikasi pelayanan publik versi terbaru yang baru diluncurkan pekan ini mengalami bug tampilan kolom tanggal pada peramban tertentu sehingga input warga beberapa kali gagal tersimpan. Di tengah keriuhan keluhan, tindakan paling konstruktif Anda adalah ...",
    "options": [
      "Mengeluh di grup percakapan umum kantor bahwa pembuat aplikasi tidak becus bekerja sebelum merilis sistem",
      "Menghentikan seluruh penggunaan aplikasi baru selamanya dan menyuruh warga kembali mencetak formulir kertas",
      "Membiarkan warga menemui kegagalan simpan berulang kali sampai tim pusat menyadarinya sendiri bulan depan",
      "Mendokumentasikan kronologi serta tangkapan layar kendala teknis secara jelas ke tim pengembang TI untuk perbaikan cepat, sambil menginfokan langkah kerja sementara yang aman kepada pengguna",
      "Meminta warga mengisikan data pada dokumen pengolah kata pribadi milik Anda saja tanpa dicatat di sistem resmi"
    ],
    "optionScores": [
      1,
      2,
      3,
      5,
      4
    ],
    "answer": "D",
    "explanation": "Pelaporan bug yang terstruktur disertai bukti skenario reproduksi membantu tim TI memperbaiki cepat, sementara komunikasi alternatif aman mencegah layanan warga terhenti selama proses perbaikan (skor 5).",
    "tip": "Saat sistem baru mengalami bug, laporkan detail bukti kendala ke tim TI dan jaga keberlanjutan layanan dengan prosedur darurat aman."
  },
  {
    "id": "tkp-tik-005",
    "subPattern": "adaptasi-sistem-digital-dan-otomatisasi-ai",
    "difficulty": "sedang",
    "prompt": "Rekan satu seksi Anda sering membeli perangkat lunak bajakan tidak berlisensi atau memasang ekstensi peramban tak dikenal di komputer kantor demi mempercepat pekerjaan sunting dokumen. Sebagai pegawai yang melek TIK dan aturan keamanan, respons paling tepat Anda adalah ...",
    "options": [
      "Ikut meminta salinan penginstal aplikasi bajakan tersebut supaya tampilan dokumen tim terlihat seragam",
      "Membiarkannya saja karena yang terpenting hasil cetakan laporan hari ini selesai cepat tanpa biaya anggaran kantor",
      "Langsung menyita komputer kerjanya secara sepihak di depan rekan lain tanpa menjelaskan risiko teknisnya",
      "Menyarankan rekan membeli aplikasi bajakan memakai akun pribadi agar tidak tercatat atas nama inventaris instansi",
      "Mengingatkan secara santun risiko malware dan pelanggaran lisensi pada perangkat instansi, serta membantu mengenalkan alternatif perangkat lunak resmi berlisensi atau open-source legal yang aman"
    ],
    "optionScores": [
      1,
      2,
      3,
      4,
      5
    ],
    "answer": "E",
    "explanation": "Perangkat lunak bajakan menjadi pintu masuk utama ransomware dan pelanggaran hukum HKI pada jaringan pemerintah. Mengedukasi bahaya siber sekaligus menawarkan alternatif resmi/open-source aman menyelesaikan masalah secara cerdas (skor 5).",
    "tip": "Hindari perangkat lunak bajakan di jaringan kantor; edukasi risiko siber dan gunakan alternatif resmi berlisensi atau open-source legal."
  },
  {
    "id": "tkp-tik-006",
    "subPattern": "adaptasi-sistem-digital-dan-otomatisasi-ai",
    "difficulty": "sedang",
    "prompt": "Atasan menugaskan Anda menyusun visualisasi data serapan anggaran triwulanan menggunakan fitur dasbor analitik interaktif yang sama sekali belum pernah Anda pakai sebelumnya, dengan waktu pengerjaan empat hari. Langkah tepat Anda adalah ...",
    "options": [
      "Segera mempelajari dokumentasi fitur dasar aplikasi tersebut lewat tutorial resmi, membuat purwarupa kecil dari data uji, berkonsultasi singkat dengan rekan yang paham bila buntu, lalu menyajikan dasbor tepat waktu",
      "Meminta atasan memindahkan tugas tersebut kepada pegawai lain dari subbagian teknologi informasi karena bukan keahlian awal Anda",
      "Tetap mengumpulkan grafik statis aplikasi lama seperti tahun lalu tanpa mencoba fitur dasbor interaktif yang diminta",
      "Menyewa jasa pekerja lepas luar kantor untuk mengerjakan tugas dengan mengirimkan data keuangan instansi",
      "Menunda mulai belajar sampai hari ketiga dengan harapan ada perubahan format laporan mendadak dari atasan"
    ],
    "optionScores": [
      5,
      3,
      4,
      1,
      2
    ],
    "answer": "A",
    "explanation": "Pembelajaran mandiri yang cepat (agile learning) memakai sumber resmi, eksperimen terukur, dan kolaborasi bila perlu menunjukkan kesiapan ASN menguasai perangkat kerja baru tepat tenggat (skor 5).",
    "tip": "Tunjukkan sikap pembelajar adaptif: manfaatkan tutorial resmi, uji coba kecil bertahap, dan jaga kerahasiaan data internal."
  },
  {
    "id": "tkp-tik-007",
    "subPattern": "adaptasi-sistem-digital-dan-otomatisasi-ai",
    "difficulty": "sulit",
    "prompt": "Sebuah inovasi sistem otomasi persetujuan dokumen di unit Anda secara signifikan mengurangi tugas pengetikan berulang, namun memunculkan kecemasan sebagian pegawai administrasi bahwa peran mereka tidak lagi berguna. Bila Anda bagian dari tim manajemen perubahan digital instansi, pendekatan strategis paling manusiawi dan efektif adalah ...",
    "options": [
      "Menegaskan bahwa siapa pun yang tidak cepat mengikuti otomasi baru lebih baik siap menerima pengurangan peran otomatis",
      "Melibatkan para pegawai tersebut sejak awal dalam merancang alur kerja baru, menata ulang peran mereka menuju tugas bernilai tambah lebih tinggi (verifikasi kualitas, pendampingan warga, evaluasi layanan), serta menyediakan pelatihan bertahap",
      "Menyembunyikan rencana peluncuran sistem otomasi hingga hari aktivasi supaya tidak memicu keresahan awal pegawai",
      "Mengurangi separuh fitur otomasi sistem dengan sengaja agar pekerjaan manual pegawai administrasi masih banyak tersedia",
      "Menyampaikan janji tanpa dasar teknis bahwa aplikasi lama akan selalu dipertahankan berdampingan selamanya"
    ],
    "optionScores": [
      1,
      5,
      2,
      3,
      4
    ],
    "answer": "B",
    "explanation": "Otomasi digital seharusnya menaikkan peran SDM (upskilling & reskilling) dari pekerja repetitif menjadi verifikator mutu dan pendamping layanan bernilai kemanusiaan tinggi, dengan melibatkan pegawai dalam desain perubahan (skor 5).",
    "tip": "Atasi resistensi perubahan teknologi lewat pelibatan pegawai sejak dini dan peningkatan peran (upskilling) ke pekerjaan bernilai lebih tinggi."
  },
  {
    "id": "tkp-tik-008",
    "subPattern": "adaptasi-sistem-digital-dan-otomatisasi-ai",
    "difficulty": "sulit",
    "prompt": "Anda menemukan hasil rancangan analisis statistik yang dibuat asisten AI generatif tampak sangat meyakinkan, tetapi setelah Anda periksa ulang secara mendalam ternyata AI tersebut mengarang angka rujukan regulasi yang sebenarnya tidak pernah ada (hallucination). Temuan serupa berpotensi dipakai rekan lain untuk bahan paparan pimpinan minggu ini. Sikap tepat Anda adalah ...",
    "options": [
      "Membiarkan paparan rekan berjalan saja karena semua orang dianggap sudah tahu bahwa sistem AI memang canggih",
      "Mengoreksi angka milik sendiri secara diam-diam tanpa memberitahu rekan lain agar kesalahan paparan mereka terlihat di rapat",
      "Segera memeriksa ke sumber primer resmi secara langsung, mengingatkan rekan tim lewat sesi diskusi mengenai pentingnya verifikasi fakta primer sebelum memakai keluaran AI, dan mengusulkan panduan etika verifikasi AI unit",
      "Melarang total penggunaan komputer dan alat analisis digital apa pun di seluruh kantor mulai besok pagi",
      "Menyalin angka buatan AI tersebut ke dalam laporan resmi karena susunan bahasanya sudah terdengar sangat akademis"
    ],
    "optionScores": [
      2,
      1,
      5,
      3,
      4
    ],
    "answer": "C",
    "explanation": "Kewaspadaan terhadap halusinasi AI dan tanggung jawab kolaboratif menjaga mutu keputusan pimpinan menuntut verifikasi ketat terhadap sumber regulasi primer serta pembakuan pedoman cek fakta AI internal unit (skor 5).",
    "tip": "Selalu verifikasi keluaran AI terhadap sumber hukum/data primer, dan bagikan kebiasaan cek fakta tersebut ke seluruh tim."
  },
  {
    "id": "tkp-tik-009",
    "subPattern": "keamanan-informasi-privasi-dan-anti-phishing",
    "difficulty": "mudah",
    "prompt": "Anda menerima pesan singkat dari nomor tidak dikenal yang mengatasnamakan petugas bantuan portal kepegawaian, meminta kode OTP yang baru masuk ke ponsel Anda guna memperbarui data tunjangan kinerja dalam waktu sepuluh menit. Sikap aman Anda adalah ...",
    "options": [
      "Langsung membacakan kode OTP tersebut karena khawatir pembaruan tunjangan kinerja bulan ini terlewat batas waktu",
      "Mengirimkan tangkapan layar kode OTP melalui pesan balasan tanpa menyebutkan kata sandi akun utama",
      "Menanyakan dulu apakah seluruh rekan satu ruangan juga sudah mengirimkan kode OTP kepada petugas tersebut",
      "Menolak tegas memberikan kode OTP maupun kredensial akun, memblokir nomor mencurigakan, dan mengonfirmasi status data langsung lewat aplikasi/portal resmi atau admin TI kantor",
      "Memberikan sebagian angka awal OTP terlebih dahulu untuk mengetes apakah si penelepon petugas asli"
    ],
    "optionScores": [
      1,
      2,
      4,
      5,
      3
    ],
    "answer": "D",
    "explanation": "Kode OTP dan kata sandi bersifat rahasia mutlak yang tidak pernah diminta oleh administrator resmi. Menolak total, mengabaikan desakan waktu palsu, serta memverifikasi di portal/admin TI resmi memblokir serangan phishing (skor 5).",
    "tip": "OTP dan kredensial akun tidak boleh dibagikan ke siapa pun; cek status selalu langsung lewat kanal/admin resmi."
  },
  {
    "id": "tkp-tik-010",
    "subPattern": "keamanan-informasi-privasi-dan-anti-phishing",
    "difficulty": "mudah",
    "prompt": "Rekan kerja Anda biasa menempelkan kertas kecil berisi nama pengguna dan kata sandi portal keuangan instansi di sisi layar monitornya agar mudah dibaca saat terburu-buru, padahal ruang kerja juga sering dilewati tamu. Tindakan Anda adalah ...",
    "options": [
      "Mengambil foto kertas kecil tersebut sebagai pengingat jika sewaktu-waktu ia lupa saat sedang cuti",
      "Membiarkannya karena tiap komputer sudah berada di lantai kantor yang diawasi petugas resepsionis depan",
      "Melepas kertas itu diam-diam lalu membuangnya ke tempat sampah umum tanpa memberitahu rekan kerja tersebut",
      "Mengganti kata sandinya menjadi tanggal lahir kantor supaya mudah diingat tanpa perlu ditulis di kertas monitor",
      "Mengingatkan rekan tersebut dengan ramah tentang bahaya kebocoran akses, menyarankan menghapus catatan terbuka di monitor, serta menganjurkan pengelola kata sandi aman dan autentikasi dua faktor"
    ],
    "optionScores": [
      1,
      3,
      2,
      4,
      5
    ],
    "answer": "E",
    "explanation": "Mencatat password di tempat terbuka memicu risiko akses tidak sah (shoulder surfing/kebocoran fisik). Mengingatkan secara santun serta membiasakan password manager dan MFA menjaga keamanan sistem keuangan negara (skor 5).",
    "tip": "Kebersihan keamanan fisik (clean desk policy) melarang menempel password terbuka di meja/monitor; gunakan MFA."
  },
  {
    "id": "tkp-tik-011",
    "subPattern": "keamanan-informasi-privasi-dan-anti-phishing",
    "difficulty": "sedang",
    "prompt": "Untuk mempermudah pengecekan berkas bantuan sosial saat bekerja di perjalanan dinas luar kota, seorang rekan berniat menyalin tabel lengkap berisi NIK, alamat, nomor rekening, dan kontak ribuan penerima manfaat dari peladen aman kantor ke layanan penyimpanan awan pribadi gratis miliknya. Sikap Anda adalah ...",
    "options": [
      "Mencegah dengan santun tindakan pemindahan data pribadi ke akun pribadi tidak terkelola, mengingatkan aturan pelindungan data pribadi dan keamanan siber instansi, serta membantu menyiapkan akses VPN/portal resmi kantor atau data teranonimkan sesuai kebutuhan",
      "Menyetujui pemindahan data asalkan tautan folder awan pribadinya diatur tidak terbuka untuk pencarian umum",
      "Meminta rekan memindahkan berkas tersebut melalui aplikasi pesan instan grup kerja saja supaya terasa lebih ringkas",
      "Membiarkannya memindahkan salinan data karena ia berniat menggunakannya untuk mempercepat verifikasi dinas",
      "Melaporkan rekan langsung ke aparat penegak hukum tanpa memberi peringatan maupun solusi akses resmi aman lebih dulu"
    ],
    "optionScores": [
      5,
      2,
      1,
      3,
      4
    ],
    "answer": "A",
    "explanation": "Memindahkan data pribadi warga (NIK, rekening, alamat) ke penyimpanan awan pribadi melanggar prinsip UU PDP dan tata kelola SPBE. Mencegah secara edukatif dan menyediakan jalur akses aman resmi instansi menjaga mobilitas kerja sekaligus kedaulatan data (skor 5).",
    "tip": "Jangan pernah menyimpan data pribadi warga/rahasia negara di cloud pribadi atau chat tidak terkelola; gunakan akses aman instansi."
  },
  {
    "id": "tkp-tik-012",
    "subPattern": "keamanan-informasi-privasi-dan-anti-phishing",
    "difficulty": "sedang",
    "prompt": "Saat bekerja dari kafe umum menggunakan laptop dinas pada penugasan luar daerah, Anda perlu mengakses sistem pelaporan internal instansi yang memuat dokumen pengawasan rahasia. Kebiasaan keamanan digital paling tepat adalah ...",
    "options": [
      "Langsung tersambung ke jaringan Wi-Fi terbuka gratis kafe tanpa perlindungan apa pun karena lokasinya tampak sepi",
      "Memakai sambungan internet tepercaya (tethering pribadi atau VPN resmi instansi), memastikan layar tidak mudah diintip, serta selalu mengunci layar laptop setiap kali meninggalkan meja",
      "Meminta kata sandi akun milik staf kantor agar proses pelaporan cepat diwakili dari perangkat kafe umum",
      "Menyimpan dokumen pengawasan tersebut secara terbuka di folder unduhan laptop lalu membiarkan laptop tidak dikunci saat ke toilet",
      "Mengirimkan berkas pengawasan ke alamat surel komersial lama milik pribadi supaya bisa dibuka melalui komputer warnet"
    ],
    "optionScores": [
      2,
      5,
      1,
      3,
      4
    ],
    "answer": "B",
    "explanation": "Wi-Fi publik terbuka rentan penyadapan (man-in-the-middle). Menggunakan hotspot/tethering tepercaya + VPN resmi instansi, privasi layar, dan auto-lock perangkat melindungi data rahasia saat bekerja mobile (skor 5).",
    "tip": "Hindari Wi-Fi publik tanpa VPN/tethering tepercaya untuk sistem kerja sensitif, dan biasakan selalu mengunci layar saat beranjak."
  },
  {
    "id": "tkp-tik-013",
    "subPattern": "keamanan-informasi-privasi-dan-anti-phishing",
    "difficulty": "sedang",
    "prompt": "Anda tanpa sengaja menemukan sebuah halaman tautan situs web resmi unit Anda menampilkan iklan terselubung situs judi daring di bagian bawah halaman hasil penelusuran akibat injeksi celah keamanan oleh peretas. Tindakan tercepat dan paling bertanggung jawab adalah ...",
    "options": [
      "Mengabaikannya karena tampilan visual depan situs web utama masih terlihat normal saat dibuka biasa",
      "Mengambil tangkapan layar lalu mengunggahnya ke akun media sosial publik untuk mempermalukan pengelola situs kantor",
      "Segera mendokumentasikan alamat URL terkait dan melapor langsung kepada admin pengelola situs/Tim CSIRT instansi serta pimpinan terkait untuk pembersihan serta penutupan celah keamanan secepatnya",
      "Mencoba mengklik iklan judi tersebut berulang kali untuk mencari tahu siapa pemilik domain eksternal di baliknya",
      "Menunggu laporan resmi dari masyarakat umum bulan depan sebelum menyampaikan temuan tersebut ke tim TI"
    ],
    "optionScores": [
      2,
      1,
      5,
      3,
      4
    ],
    "answer": "C",
    "explanation": "Penyusupan slot/judi ilegal pada domain `.go.id` (SEO poisoning/backlink injection) merupakan insiden siber serius. Melapor segera dengan bukti URL lengkap ke admin/CSIRT instansi melindungi kehormatan lembaga pemerintah dan keamanan pengguna (skor 5).",
    "tip": "Jika mendapati anomali atau sisipan konten ilegal pada domain resmi instansi, segera laporkan ke tim TI/CSIRT dengan bukti URL."
  },
  {
    "id": "tkp-tik-014",
    "subPattern": "keamanan-informasi-privasi-dan-anti-phishing",
    "difficulty": "sedang",
    "prompt": "Untuk membuat rekap peserta kegiatan cepat diketahui publik di portal keterbukaan informasi instansi, seorang staf hendak mengunggah daftar hadir lengkap yang masih memuat nomor KTP (NIK), tanggal lahir, tanda tangan, serta nomor HP pribadi ratusan warga ke laman web terbuka. Sebagai penelaah berkas sebelum rilis, tindakan Anda adalah ...",
    "options": [
      "Menyetujui unggahan apa adanya karena keterbukaan informasi publik menuntut seluruh kolom daftar hadir ditampilkan penuh",
      "Mengubah jenis berkas daftar hadir menjadi gambar foto resolusi rendah tanpa menutupi data pribadi warga",
      "Melarang publikasi kegiatan apa pun termasuk jumlah peserta agregat dengan alasan seluruh data rapat bersifat rahasia",
      "Mengapresiasi niat transparansi staf tersebut lalu memintanya menutupi/menghilangkan kolom data pribadi sensitif (NIK, tanda tangan, nomor kontak) agar hanya informasi statistik atau nama relevan sesuai ketentuan yang dipublikasikan",
      "Mengunggah daftar hadir lengkap selama satu hari saja lalu menghapusnya kembali pada hari kedua"
    ],
    "optionScores": [
      2,
      3,
      1,
      5,
      4
    ],
    "answer": "D",
    "explanation": "Transparansi informasi publik tidak boleh mengorbankan privasi dan kerentanan pencurian identitas warga (UU KIP mengecualikan data pribadi). Mempublikasikan laporan/rekap setelah menyamarkan data sensitif (data redaction) menyeimbangkan keduanya tepat hukum (skor 5).",
    "tip": "Terapkan redaksi/penyensoran NIK, tanda tangan, dan kontak pribadi warga sebelum memublikasikan dokumen publik secara terbuka."
  },
  {
    "id": "tkp-tik-015",
    "subPattern": "keamanan-informasi-privasi-dan-anti-phishing",
    "difficulty": "sulit",
    "prompt": "Saat sedang mengerjakan laporan akhir tahun seorang diri di ruangan, komputer kerja Anda mendadak memunculkan pesan aneh berisi tuntutan tebusan setelah seorang rekan sebelumnya mencolokkan diska lepas (flashdisk) tak dikenal, serta beberapa file bersama mulai berubah ekstensinya. Langkah darurat paling tepat detik pertama untuk membatasi dampak ransomware adalah ...",
    "options": [
      "Segera memutus koneksi jaringan LAN/Wi-Fi untuk mengisolasi penyebaran ke server bersama, tidak membayar tebusan, lalu melapor ke tim keamanan TI/CSIRT untuk pemulihan dari cadangan luring",
      "Langsung mengklik tautan instruksi pembayaran pada layar agar kunci dekripsi segera dikirimkan sebelum atasan mengetahui",
      "Memulai ulang komputer berulang kali lalu mencolokkan diska lepas cadangan kantor ke komputer terinfeksi untuk memindahkan sisa berkas",
      "Mengunduh aplikasi antivirus gratis secara acak dari peramban tanpa melepas kabel jaringan kantor terlebih dahulu",
      "Meninggalkan meja diam-diam ke gedung lain sambil berharap sistem pemulihan otomatis kantor memperbaikinya malam ini"
    ],
    "optionScores": [
      5,
      1,
      2,
      3,
      4
    ],
    "answer": "A",
    "explanation": "Detik krusial insiden ransomware: isolasi segera perangkat dari jaringan (putus LAN/Wi-Fi agar tidak menulari server shared drive), jangan mencolokkan drive cadangan baru ke komputer terinfeksi, jangan membayar tebusan, dan eskalasikan ke CSIRT untuk pemulihan dari backup offline terisolasi (skor 5).",
    "tip": "Protokol menit pertama ransomware: putus koneksi jaringan untuk isolasi penyebaran, jangan colok backup ke mesin sakit, dan hubungi CSIRT."
  },
  {
    "id": "tkp-tik-016",
    "subPattern": "keamanan-informasi-privasi-dan-anti-phishing",
    "difficulty": "sulit",
    "prompt": "Salah seorang vendor pengembang aplikasi layanan di dinas Anda meminta izin mengaktifkan akses login super-admin penuh secara permanen dari jarak jauh selama masa garansi lima tahun agar mudah memperbaiki kesalahan kode sewaktu-waktu tanpa melewati persetujuan admin internal dinas. Penilaian keamanan tata kelola yang paling tepat Anda sampaikan adalah ...",
    "options": [
      "Menyetujui penuh akses super-admin permanen tanpa pencatatan log agar biaya pemeliharaan kontrak tidak bertambah",
      "Menolak akses super-admin permanen tanpa kontrol, mengusulkan mekanisme akses berbasis izin sementara (just-in-time/privileged access) dengan audit log aktif setiap sesi perbaikan bersama admin internal instansi",
      "Meminta vendor menuliskan surat pernyataan bermeterai pribadi saja sebagai pengganti seluruh pengendalian akses teknis",
      "Memberikan akun super-admin milik kepala dinas langsung kepada programmer vendor agar urusan perbaikan cepat tuntas",
      "Melarang vendor memperbaiki bug aplikasi sama sekali selama masa garansi demi menjaga server seratus persen tertutup"
    ],
    "optionScores": [
      1,
      5,
      3,
      2,
      4
    ],
    "answer": "B",
    "explanation": "Prinsip least privilege & zero trust melarang kepemilikan akses super-admin permanen tak diawasi oleh pihak ketiga. Dukungan garansi tetap berjalan aman lewat persetujuan akses berjangka waktu (just-in-time) lengkap dengan pencatatan audit log (skor 5).",
    "tip": "Terapkan prinsip hak akses minimal (least privilege): dukung pemeliharaan vendor dengan akses sementara terawasi dan tercatat log."
  },
  {
    "id": "tkp-tik-017",
    "subPattern": "pemanfaatan-tik-untuk-efisiensi-kinerja",
    "difficulty": "mudah",
    "prompt": "Selama ini pengumpulan laporan capaian kegiatan dari dua puluh unit kerja dilakukan dengan mengirim file terpisah lewat aplikasi pesan instan lalu disalin satu per satu secara manual ke lembar utama sehingga rawan salah salin. Solusi digital praktis yang paling efisien untuk Anda usulkan adalah ...",
    "options": [
      "Menambah jumlah staf magang khusus menyalin pesan masuk agar penyalinan manual lebih cepat selesai setiap bulan",
      "Mewajibkan seluruh unit kerja mencetak laporan fisik lalu mengirimkannya memakai kurir ke meja bagian rekap",
      "Menggunakan formulir input terstandardisasi atau lembar kerja kolaboratif daring (cloud workspace resmi) dengan validasi format otomatis sehingga data langsung terkumpul rapi dan siap direkap",
      "Mengurangi jadwal pengumpulan laporan menjadi satu kali dalam setahun supaya staf tidak lelah menyalin manual",
      "Tetap mengumpulkan file lewat pesan chat, tetapi setiap unit diminta memberi warna huruf cerah pada angka penting"
    ],
    "optionScores": [
      3,
      1,
      5,
      2,
      4
    ],
    "answer": "C",
    "explanation": "Memanfaatkan lembar kerja/formulir kolaboratif daring tervalidasi menggantikan penyalinan manual memangkas drastis waktu kerja, menghilangkan kesalahan salin-tempel manusiawi, serta memudahkan pelacakan status unit (skor 5).",
    "tip": "Ganti alur kirim-salin manual berulang dengan formulir tervalidasi atau kolaborasi daring dalam ekosistem resmi instansi."
  },
  {
    "id": "tkp-tik-018",
    "subPattern": "pemanfaatan-tik-untuk-efisiensi-kinerja",
    "difficulty": "mudah",
    "prompt": "Dalam mengerjakan dokumen kebijakan tim yang disunting bersama oleh lima orang, masalah yang sering muncul adalah file bertumpuk dengan nama 'revisi_final_1', 'revisi_final_fix_banget', dan sering menimpa pekerjaan rekan lain. Kebiasaan TIK rapi yang Anda terapkan adalah ...",
    "options": [
      "Menyimpan versi masing-masing di diska lepas terpisah lalu menggabungkannya dengan menggunting hasil cetakan kertas",
      "Menunjuk satu orang mengetik seluruh dokumen sementara empat rekan lainnya membacakan revisi lewat sambungan telepon panjang",
      "Melarang rekan lain menyentuh dokumen sebelum jam kerja selesai agar hanya satu orang mengedit setiap hari",
      "Menggunakan dokumen kolaboratif resmi berfitur riwayat versi (version history) dan mode saran (suggesting/track changes) dengan penamaan berkas berstandar tanggal agar jejak revisi terdokumentasi utuh",
      "Mengirimkan belasan berkas baru setiap sepuluh menit ke grup percakapan agar semua memilih sendiri berkas mana terbaru"
    ],
    "optionScores": [
      1,
      3,
      2,
      5,
      4
    ],
    "answer": "D",
    "explanation": "Fitur kolaborasi waktu nyata (real-time editing), mode saran/komentar, dan riwayat versi pada dokumen cloud resmi menghilangkan kekacauan versi berkas ganda sekaligus menjaga akuntabilitas kontribusi tiap anggota (skor 5).",
    "tip": "Gunakan satu dokumen bersama dengan fitur track changes dan riwayat versi alih-alih menggandakan file revisi berulang-ulang."
  },
  {
    "id": "tkp-tik-019",
    "subPattern": "pemanfaatan-tik-untuk-efisiensi-kinerja",
    "difficulty": "sedang",
    "prompt": "Setiap awal bulan Anda harus mengirimkan surat undangan evaluasi beserta lampiran personal jadwal kepada 120 kepala sekolah di seluruh kabupaten, dan sebelumnya petugas menyunting nama serta alamat satu demi satu selama dua hari penuh. Cara kerja paling cerdas menggunakan perkakas perkantoran umum adalah ...",
    "options": [
      "Meminta seluruh 120 kepala sekolah menelepon satu per satu untuk menanyakan jadwal rapat pribadinya langsung ke staf",
      "Menyewa jasa pengetik luar kantor memakai biaya tambahan agar seratus dua puluh surat selesai dalam satu malam",
      "Mengetik satu surat undangan umum lalu meminta kepala sekolah mencari sendiri baris namanya di lampiran tabel panjang yang membingungkan",
      "Tetap mengetik manual dua hari penuh sambil meminta tambahan tunjangan lembur karena jumlah sekolah sangat banyak",
      "Memanfaatkan fitur mail merge atau otomatisasi templat dokumen yang terhubung dengan daftar data master sekolah agar ratusan surat terpersonalisasi tercetak akurat dalam hitungan menit"
    ],
    "optionScores": [
      1,
      2,
      4,
      3,
      5
    ],
    "answer": "E",
    "explanation": "Mengoptimalkan fitur dasar perkantoran seperti mail merge / templat otomatis berbasis data master adalah praktik TIK efisiensi tinggi—memangkas kerja dua hari menjadi beberapa menit dengan akurasi tinggi tanpa biaya baru (skor 5).",
    "tip": "Untuk dokumen massal berpola seragam, gunakan otomatisasi templat (mail merge) berbasis data master agar cepat dan bebas salah ketik."
  },
  {
    "id": "tkp-tik-020",
    "subPattern": "pemanfaatan-tik-untuk-efisiensi-kinerja",
    "difficulty": "sedang",
    "prompt": "Rapat koordinasi rutin lintas 15 kecamatan setiap pekan sebelumnya selalu menghabiskan setengah hari kerja perjalanan darat para camat menuju ibu kota kabupaten hanya untuk laporan perkembangan 30 menit. Sebagai perancang efisiensi rapat berbasis TIK, gagasan terbaik Anda adalah ...",
    "options": [
      "Mengusulkan skema rapat mingguan menggunakan konferensi video terstruktur untuk laporan pembaruan cepat 30 menit, sedangkan rapat tatap muka difokuskan bulanan bagi agenda strategis yang membutuhkan peninjauan lapangan",
      "Membatalkan rapat koordinasi antarwilayah secara penuh agar para camat cukup mengirimkan pesan teks singkat tanpa diskusi",
      "Tetap mewajibkan perjalanan darat setiap pekan supaya tunjangan transportasi dinas tetap terserap sesuai anggaran lama",
      "Mengadakan konferensi video sepanjang enam jam setiap hari meski tanpa agenda jelas demi menunjukkan kantor aktif memakai TIK",
      "Memindahkan kantor seluruh kecamatan mendekati ibu kota kabupaten agar tidak perlu membahas teknologi rapat daring"
    ],
    "optionScores": [
      5,
      3,
      1,
      2,
      4
    ],
    "answer": "A",
    "explanation": "Pertemuan hibrida cerdas menempatkan konferensi video terjadwal untuk koordinasi cepat rutin (menghemat waktu tempuh & biaya perjalanan dinas) serta menjaga pertemuan tatap muka pada kebutuhan strategis mendalam (skor 5).",
    "tip": "Pilih model hibrida proporsional: pertemuan daring terfokus untuk sinkronisasi rutin, tatap muka untuk agenda strategis kompleks."
  },
  {
    "id": "tkp-tik-021",
    "subPattern": "pemanfaatan-tik-untuk-efisiensi-kinerja",
    "difficulty": "sedang",
    "prompt": "Arsip surat masuk dan keputusan penting selama lima tahun terakhir di unit Anda disimpan di puluhan folder komputer berantakan tanpa kata kunci sehingga mencari satu SK tahun lalu memakan waktu hingga berjam-jam. Pembenahan sistem pengarsipan digital sederhana namun efektif yang paling tepat Anda lakukan adalah ...",
    "options": [
      "Menyimpan seluruh file dalam satu folder besar di desktop agar tidak perlu membuka terlalu banyak direktori",
      "Merancang struktur folder terstandar berdasarkan tahun-kategori-kode, membakukan format penamaan file (tanggal_nomor_perihal) beserta indeks pencarian atau tag metadata, lalu menata arsip bertahap bersama tim",
      "Menghapus seluruh arsip lama berusia di atas dua tahun supaya tampilan folder komputer kembali terlihat kosong serta bersih",
      "Meminta setiap pegawai menyimpan arsip keputusan penting hanya di kotak masuk surel pribadi masing-masing",
      "Mencetak seluruh dokumen lama kembali menjadi bundel map kertas di lemari besi agar tidak perlu mencari lewat komputer"
    ],
    "optionScores": [
      2,
      5,
      1,
      3,
      4
    ],
    "answer": "B",
    "explanation": "Tata kelola informasi yang efisien bertumpu pada taksonomi folder terstandar, konvensi penamaan berkas konsisten, dan tabel indeks metadata sehingga dokumen apa pun ditemukan dalam hitungan detik (skor 5).",
    "tip": "Tata arsip digital dengan konvensi penamaan seragam, taksonomi jelas, dan indeks pencarian supaya mudah ditemukan oleh siapa saja."
  },
  {
    "id": "tkp-tik-022",
    "subPattern": "pemanfaatan-tik-untuk-efisiensi-kinerja",
    "difficulty": "sedang",
    "prompt": "Saat bekerja pada penyusunan jadwal survei lapangan 10 petugas ke puluhan titik desa, pimpinan sering kesulitan mengetahui titik mana yang sudah dikunjungi serta bukti fotonya tanpa menelepon satu per satu tiap sore. Solusi teknologi sederhana paling praktis adalah ...",
    "options": [
      "Mewajibkan seluruh petugas lapangan mengirimkan puluhan foto satu per satu lewat grup percakapan pribadi pimpinan setiap jam",
      "Meminta petugas kembali berkumpul setiap jam empat sore ke kantor kabupaten walaupun desa berjarak tiga jam perjalanan",
      "Memanfaatkan formulir lapangan seluler terhubung peta lokasi/lembar pantau waktu nyata sehingga tiap petugas cukup mengunggah foto tertanda waktu-lokasi sekali klik dan progres langsung terlihat di dasbor bersama",
      "Membiarkan tim bekerja sepekan penuh baru mengumpulkan berkas cetakan foto di hari Jumat sore",
      "Memasang alat pelacak tersembunyi di kendaraan pribadi petugas tanpa persetujuan maupun penjelasan tujuan kerja"
    ],
    "optionScores": [
      3,
      2,
      5,
      4,
      1
    ],
    "answer": "C",
    "explanation": "Aplikasi formulir seluler ber-geotag terintegrasi dasbor langsung menghilangkan kerumitan laporan berulang lewat chat sekaligus menyajikan akuntabilitas spasial real-time bagi koordinator lapangan (skor 5).",
    "tip": "Gunakan formulir lapangan mobile terhubung dasbor untuk menyatukan pelaporan foto, lokasi, dan progres tanpa telepon berulang."
  },
  {
    "id": "tkp-tik-023",
    "subPattern": "pemanfaatan-tik-untuk-efisiensi-kinerja",
    "difficulty": "sulit",
    "prompt": "Anda mengamati unit Anda telah berlangganan tiga aplikasi manajemen kerja berbayar yang fungsinya saling tumpang tindih akibat usulan berbeda di tahun sebelumnya, menyebabkan data proyek terpecah dan anggaran rutin membengkak. Rekomendasi efisiensi berbasis TIK paling tepat untuk rapat penganggaran adalah ...",
    "options": [
      "Menambah langganan aplikasi keempat sebagai jembatan penghubung ketiga aplikasi lama tanpa meninjau pemakaian nyata",
      "Memutus semua kontrak aplikasi sekaligus besok pagi tanpa menyiapkan migrasi data atau aplikasi pengganti tunggal",
      "Mempertahankan ketiga aplikasi tetap aktif agar masing-masing vendor tidak kecewa saat perpanjangan kontrak tahunan",
      "Melakukan audit pemanfaatan aktual fitur dan biaya ketiga aplikasi, mengusulkan konsolidasi pada satu platform terintegrasi paling sesuai kebutuhan SPBE instansi, serta menyiapkan jadwal migrasi data rapi sebelum menghentikan langganan ganda",
      "Membiarkan tiap seksi terus membeli aplikasi masing-masing memakai sisa anggaran rapat tanpa koordinasi tim TI"
    ],
    "optionScores": [
      2,
      1,
      3,
      5,
      4
    ],
    "answer": "D",
    "explanation": "Tata kelola TI pemerintah yang cerdas mencegah fragmentasi dan pemborosan anggaran melalui audit utilitas aplikasi, konsolidasi arsitektur ke satu platform andal terintegrasi, dan rencana migrasi data aman (skor 5).",
    "tip": "Cegah pemborosan aplikasi tumpang tindih lewat audit pemanfaatan, konsolidasi satu platform inti, dan rencana migrasi data aman."
  },
  {
    "id": "tkp-tik-024",
    "subPattern": "pemanfaatan-tik-untuk-efisiensi-kinerja",
    "difficulty": "sulit",
    "prompt": "Sebuah layanan perizinan digital baru sudah berjalan, tetapi 40% pemohon dari desa ternyata masih kembali mengulang unggahan hingga tiga kali karena ukuran file foto KTP dari kamera ponsel terlalu besar dan format PDF sering tidak terbaca jelas. Langkah rekayasa efisiensi paling berdampak yang Anda dorong bersama tim teknis adalah ...",
    "options": [
      "Mengeluarkan surat edaran agar seluruh warga desa terlebih dahulu mengikuti kursus desain grafis supaya paham cara memperkecil ukuran berkas",
      "Menurunkan toleransi batas unggah menjadi semakin kecil lagi supaya beban penyimpanan peladen kantor lebih hemat",
      "Membiarkan kegagalan unggah warga terus berulang sambil menuliskan pesan kesalahan teknis bernada kaku di layar aplikasi",
      "Mengembalikan seluruh warga desa pada sistem penyerahan berkas map kertas fisik di kantor kabupaten",
      "Menambahkan kompresi gambar otomatis cerdas di sisi klien/aplikasi disertai panduan visual pratinjau langsung yang memastikan tulisan terbaca jelas, serta alternatif terhubung identitas kependudukan digital"
    ],
    "optionScores": [
      2,
      1,
      3,
      4,
      5
    ],
    "answer": "E",
    "explanation": "Desain teknologi layanan publik yang empatik memindahkan kerumitan teknis dari bahu warga ke dalam otomatisasi cerdas aplikasi (client-side auto-compression, pratinjau jelas, integrasi IKD), sehingga angka gagal unggah turun drastis (skor 5).",
    "tip": "Selesaikan hambatan teknis berulang masyarakat dengan membangun otomatisasi bantu langsung di aplikasi (desain empatik pengguna)."
  },
  {
    "id": "tkp-tik-025",
    "subPattern": "literasi-digital-dan-verifikasi-informasi",
    "difficulty": "mudah",
    "prompt": "Seorang rekan membagikan tautan berita sensasional mengenai perubahan mendadak jadwal pencairan gaji ke-13 beserta formulir pendataan ulang ke grup percakapan pegawai kantor. Langkah literasi digital paling bijak sebelum mempercayai maupun menindaklanjuti pesan itu adalah ...",
    "options": [
      "Memeriksa keabsahan sumber melalui domain situs web pemerintah resmi (.go.id), rilis resmi kementerian/BKN, serta mengingatkan grup secara sopan bila ternyata tautan tersebut hoaks atau phishing",
      "Segera meneruskan tautan tersebut ke grup dinas lain dan media sosial keluarga agar semua orang cepat mengisi datanya",
      "Langsung mengklik tautan dan mengisi NIP serta nomor rekening bank untuk berjaga-jaga agar nama tidak terlewat",
      "Menyimpan tautan tersebut saja tanpa membalas namun mengajak rekan meja sebelah mengisinya terlebih dahulu untuk mengetes hasil",
      "Menghapus aplikasi percakapan kantor selamanya supaya tidak pernah menerima kabar kebijakan pemerintah apa pun"
    ],
    "optionScores": [
      5,
      1,
      2,
      3,
      4
    ],
    "answer": "A",
    "explanation": "Literasi digital aparatur mengharuskan verifikasi terhadap kanal primer otoritatif sebelum bertindak maupun berbagi, dan proaktif melindungi rekan kerja dari hoaks atau jebakan pencurian data berkedok bantuan/tunjangan (skor 5).",
    "tip": "Cek kebenaran kabar kebijakan pegawai lewat kanal resmi kementerian/.go.id sebelum mengklik tautan atau meneruskannya."
  },
  {
    "id": "tkp-tik-026",
    "subPattern": "literasi-digital-dan-verifikasi-informasi",
    "difficulty": "mudah",
    "prompt": "Dalam riset penyusunan naskah kebijakan, Anda menemukan infografis angka statistik menarik yang beredar di media sosial populer, tetapi tidak mencantumkan tahun pengambilan data maupun lembaga penerbit resminya. Sikap Anda sebagai penyusun data akurat adalah ...",
    "options": [
      "Langsung menempelkan gambar infografis media sosial itu ke slide paparan pimpinan karena desainnya sangat menarik",
      "Menelusuri sumber data primer aslinya terlebih dahulu di publikasi resmi lembaga statistik/kementerian terkait, dan menolak menggunakan angka tak terverifikasi bila sumber sahnya tidak dapat dipastikan",
      "Menggunakan angka infografis tersebut sambil menambahkan keterangan perkiraan pribadi pada bagian bawah paparan",
      "Mengubah sedikit warna serta angka grafik agar terlihat sebagai hasil analisis terbaru buatan unit Anda sendiri",
      "Menanyakan kebenaran grafik itu kepada kolom komentar warganet media sosial lalu memakainya jika banyak yang menyukai"
    ],
    "optionScores": [
      2,
      5,
      3,
      1,
      4
    ],
    "answer": "B",
    "explanation": "Integritas kebijakan publik menuntut basis bukti sah dari sumber primer resmi (BPS, kementerian, riset terakreditasi). Menggunakan grafik viral tak bersumber valid menyesatkan pengambilan keputusan negara (skor 5).",
    "tip": "Selalu lacak angka dan klaim statistik hingga ke dokumen sumber resmi sebelum memasukkannya ke dalam naskah kerja."
  },
  {
    "id": "tkp-tik-027",
    "subPattern": "literasi-digital-dan-verifikasi-informasi",
    "difficulty": "sedang",
    "prompt": "Anda menjumpai unggahan video lama banjir di kabupaten lain yang sengaja diedarkan ulang di media sosial lokal seolah-olah terjadi hari ini di wilayah dinas Anda, membuat sebagian warga mulai panik menanyakan kondisi tanggul setempat. Sebagai aparatur yang peka literasi informasi, respons paling tepat adalah ...",
    "options": [
      "Membiarkan video itu menyebar luas sampai warga menyadari sendiri bahwa gambarnya berbeda dengan kondisi cuaca hari ini",
      "Memarahi warganet di kolom komentar memakai akun pribadi tanpa menyertakan bukti foto terbaru maupun data pantauan resmi",
      "Memverifikasi kondisi aktual di titik tanggul terkait bersama petugas pemantau, lalu segera mendorong penerbitan informasi fakta resmi (disertai bukti waktu aktual) lewat kanal resmi instansi agar kepanikan reda",
      "Membagikan ulang video lama tersebut dengan tambahan komentar tebakan pribadi tanpa mengecek kondisi lapangan",
      "Melarang warga membicarakan persoalan banjir di media sosial lokal selama musim penghujan berlangsung"
    ],
    "optionScores": [
      2,
      3,
      5,
      1,
      4
    ],
    "answer": "C",
    "explanation": "Salah satu pola disinformasi paling sering adalah daur ulang konteks video/foto lama (misleading context). Cek fakta cepat di lapangan dipadu rilis klarifikasi resmi berbukti waktu terbaru menenangkan masyarakat efektif (skor 5).",
    "tip": "Tangkis hoaks video daur ulang lewat verifikasi cepat fakta lapangan diikuti rilis klarifikasi resmi berpenanda waktu jelas."
  },
  {
    "id": "tkp-tik-028",
    "subPattern": "literasi-digital-dan-verifikasi-informasi",
    "difficulty": "sedang",
    "prompt": "Sebuah artikel blog tak dikenal menuduh instansi Anda memangkas bantuan pendidikan daerah berdasarkan penafsiran sepihak terhadap satu halaman draf rancangan anggaran, dan artikel itu mulai ramai dikutip rekan di grup alumni. Langkah literasi informasi paling bijak Anda adalah ...",
    "options": [
      "Ikut menyebarkan artikel blog itu sambil menyayangkan sikap pimpinan daerah tanpa mengecek dokumen final APBD",
      "Menghapus nomor rekan yang menyebarkan tautan dari kontak ponsel Anda karena dianggap menyebarkan fitnah",
      "Membantah tegas artikel blog itu dengan pernyataan marah tanpa menyertakan tautan data resmi transparansi anggaran",
      "Membaca utuh dokumen anggaran resmi yang tersedia terbuka (PPID/laman resmi), mengklarifikasi kesalahpahaman membaca draf dengan data fakta lengkap dan sopan, serta mengarahkan pada sumber resmi terverifikasi",
      "Meminta admin grup alumni menutup kolom diskusi selamanya setiap kali muncul isu kebijakan publik daerah"
    ],
    "optionScores": [
      1,
      2,
      3,
      5,
      4
    ],
    "answer": "D",
    "explanation": "Melawan informasi terpotong atau tafsir sepihak paling efektif dilakukan melalui literasi dokumen utuh resmi dan klarifikasi berbasis data terbuka secara tenang dan santun (skor 5).",
    "tip": "Jawab salah tafsir atas kutipan sepotong dengan merujuk konteks utuh dokumen resmi secara tenang dan faktual."
  },
  {
    "id": "tkp-tik-029",
    "subPattern": "literasi-digital-dan-verifikasi-informasi",
    "difficulty": "sedang",
    "prompt": "Mengapa seorang ASN di era digital perlu memahami bahwa seluruh aktivitas komentar, penyebaran konten, maupun tanda suka di akun media sosial pribadi sekalipun membentuk jejak digital yang memengaruhi kepercayaan publik terhadap institusi negara?",
    "options": [
      "Supaya ASN menutup seluruh akun pribadinya dan tidak pernah mengikuti perkembangan informasi teknologi internet",
      "Agar ASN hanya menyukai unggahan tokoh tertentu saja tanpa pernah berkomentar atau berbagi pengetahuan bermanfaat",
      "Karena pemerintah tidak memperbolehkan pegawai negeri memiliki kehidupan sosial apa pun di luar gedung kantor",
      "Supaya pegawai terbiasa menggunakan akun samaran anonim setiap kali ingin menanggapi isu sosial di internet",
      "Karena ketidakterpisahan persepsi publik terhadap status abdi negara menuntut kehati-hatian etis, objektivitas netral, serta menghindari amplifikasi hoaks dan ujaran kebencian dalam bermedia sosial"
    ],
    "optionScores": [
      2,
      3,
      1,
      4,
      5
    ],
    "answer": "E",
    "explanation": "Kesadaran jejak digital berarti memahami tanggung jawab moral dan kode etik ASN sebagai perekat bangsa: tetap bijak berekspresi, menjaga netralitas, serta tidak memperluas hoaks maupun polarisasi lewat akun pribadi (skor 5).",
    "tip": "Pelihara rekam jejak digital yang santun, netral, terverifikasi fakta, dan mencerminkan kedewasaan abdi negara."
  },
  {
    "id": "tkp-tik-030",
    "subPattern": "literasi-digital-dan-verifikasi-informasi",
    "difficulty": "sedang",
    "prompt": "Saat Anda menyelenggarakan pelatihan pemberdayaan masyarakat bagi pelaku usaha desa, banyak peserta mengaku mudah tertipu tautan undian berhadiah dan file APK palsu yang dikirim lewat aplikasi pesan singkat. Materi literasi digital paling tepat yang dapat Anda sisipkan dalam sesi pengantar adalah ...",
    "options": [
      "Mengajarkan ciri praktis rekayasa sosial digital (tautan tiruan, file APK tidak resmi, desakan transfer/OTP), cara verifikasi domain resmi, serta membiasakan cek dua kali sebelum mengklik atau memasang berkas apa pun",
      "Menyarankan seluruh pelaku usaha desa meninggalkan telepon pintar mereka dan bertransaksi secara tunai saja selamanya",
      "Meminta peserta mengirimkan seluruh pesan mencurigakan kepada nomor pribadi Anda setiap hari untuk diperiksa satu per satu",
      "Mengenalkan teori arsitektur enkripsi jaringan komputer tingkat lanjut yang sulit dipahami oleh pemula usaha desa",
      "Menyatakan bahwa penipuan digital merupakan nasib buruk yang tidak dapat dicegah oleh kehati-hatian pengguna"
    ],
    "optionScores": [
      5,
      2,
      4,
      3,
      1
    ],
    "answer": "A",
    "explanation": "Edukasi keamanan digital masyarakat akar rumput harus praktis dan relevan sehari-hari: kenali jebakan file APK/tautan palsu, tolak berbagi PIN/OTP, dan cek sumber sebelum klik (skor 5).",
    "tip": "Literasi keamanan digital masyarakat fokus pada kebiasaan praktis sehari-hari mengenali modus penipuan umum (APK, tautan tiruan, OTP)."
  },
  {
    "id": "tkp-tik-031",
    "subPattern": "literasi-digital-dan-verifikasi-informasi",
    "difficulty": "sulit",
    "prompt": "Beredar rekaman video sintetik (deepfake AI) sangat meyakinkan yang meniru wajah serta suara pejabat daerah Anda seolah-olah mengumumkan pungutan biaya pendaftaran bantuan usaha bagi warga melalui tautan transfer pribadi. Langkah tanggap krisis literasi informasi paling komprehensif dari tim Anda adalah ...",
    "options": [
      "Menganggap warga cukup cerdas membedakan video palsu sehingga tidak perlu menerbitkan pernyataan bantahan resmi apa pun",
      "Mengoordinasikan peringatan resmi di seluruh kanal instansi bahwa bantuan gratis tanpa rekening pribadi, melapor ke platform/otoritas siber untuk takedown konten, dan mengedukasi ciri AI palsu ke publik",
      "Memblokir kolom komentar akun dinas dan menonaktifkan situs pengaduan sementara agar warga berhenti menanyakan keaslian video",
      "Membuat video balasan informal di akun staf pribadi tanpa stempel atau verifikasi kanal lembaga pemerintah",
      "Meminta seluruh pegawai mengganti foto profil media sosial menjadi gambar gelap serempak sebagai tanda protes"
    ],
    "optionScores": [
      2,
      5,
      1,
      4,
      3
    ],
    "answer": "B",
    "explanation": "Hoaks deepfake yang mengarah pada penipuan uang warga mendesak ditangani serempak di tiga sisi: peringatan cepat melindungi warga dari kerugian finansial, koordinasi penegakan hukum/penurunan konten (takedown), serta peningkatan kewaspadaan literasi AI publik (skor 5).",
    "tip": "Krisis penipuan deepfake membutuhkan respons tiga serangkai: klarifikasi cepat lintas kanal resmi, koordinasi otoritas takedown, dan edukasi publik."
  },
  {
    "id": "tkp-tik-032",
    "subPattern": "literasi-digital-dan-verifikasi-informasi",
    "difficulty": "sulit",
    "prompt": "Seorang rekan kerja di unit pengkajian sering memakai rujukan statistik dari portal berita daring tanpa mengecek metodologi maupun kesesuaian tahun data hingga nyaris memicu salah sasaran anggaran daerah. Agar budaya literasi data menguat di seluruh unit tanpa menyinggung rekan tersebut, inisiatif terbaik Anda adalah ...",
    "options": [
      "Mengungkapkan kesalahan rujukannya secara sarkastik saat presentasi di depan pimpinan agar tidak berani mengulang lagi",
      "Mengambil seluruh tugas penyusunan data dari rekan tersebut dan menggantikannya dengan bahan bacaan buatan Anda sendiri",
      "Mengusulkan standar daftar periksa mutu sumber (source-check list) dan repositori tautan rujukan resmi (BPS, Open Data kementerian/daerah) pada tiap templat kajian tim serta berdiskusi santun berdua mengenai perbaikan datanya sebelum dipaparkan",
      "Membiarkan kajian tetap berjalan sampai auditor menemukan ketidakcocokan sumber statistik pada tahun anggaran berikutnya",
      "Menyarankan tim berhenti memakai angka statistik kuantitatif dalam seluruh kajian kebijakan daerah"
    ],
    "optionScores": [
      2,
      4,
      5,
      1,
      3
    ],
    "answer": "C",
    "explanation": "Membenahi budaya data unit secara berkelanjutan dilakukan melalui dua hal: koreksi empatik privat sebelum paparan berisiko serta membakukan infrastruktur kontrol (source checklist & repositori data primer tepercaya) (skor 5).",
    "tip": "Perkuat literasi data tim dengan koreksi privat penuh respek plus standarisasi daftar periksa sumber data primer."
  },
  {
    "id": "tkp-tik-033",
    "subPattern": "etika-komunikasi-daring-dan-pelayanan-elektronik",
    "difficulty": "mudah",
    "prompt": "Seorang warga mengirim pesan lewat kanal resmi WhatsApp/chat layanan instansi Anda pada pukul 21.30 malam menggunakan bahasa kurang teratur dan beberapa tanda seru karena cemas berkasnya belum terverifikasi. Sikap komunikasi elektronik yang paling tepat pada jam layanan keesokan paginya (atau dalam pengelolaan kanal resmi) adalah ...",
    "options": [
      "Mengabaikan pesan tersebut selama beberapa hari sebagai pelajaran agar warga belajar mengirim pesan sesuai jam kerja dengan bahasa baku",
      "Membalas dengan nada kesal dan menasihati warga terlebih dahulu tentang tata krama waktu menghubungi pegawai kantor",
      "Menutup blokir sementara nomor pengirim pesan agar kanal layanan resmi terlihat rapi tanpa pesan bernada cemas",
      "Membalas segera dengan sapaan santun dan ramah, menjelaskan status berkas beserta langkah lanjut secara ringkas-jelas, serta menginformasikan jam operasional layanan resmi untuk kejelasan ke depan",
      "Mengirimkan tangkapan layar pesan cemas warga itu ke grup candaan rekan kantor untuk ditertawakan bersama"
    ],
    "optionScores": [
      2,
      3,
      1,
      5,
      4
    ],
    "answer": "D",
    "explanation": "Komunikasi elektronik resmi wajib tetap mengedepankan kesantunan, empati terhadap kecemasan pemohon, kejelasan solusi status berkas, serta informasi jam operasional layanan tanpa menyinggung pengguna (skor 5).",
    "tip": "Respons pesan kanal layanan publik dengan ramah, jelas status solusinya, dan tetap sopan meski pengirim sedang panik."
  },
  {
    "id": "tkp-tik-034",
    "subPattern": "etika-komunikasi-daring-dan-pelayanan-elektronik",
    "difficulty": "mudah",
    "prompt": "Ketika Anda mengikuti rapat kerja resmi lewat konferensi video bersama pimpinan lintas instansi, kebiasaan etika rapat daring (netiquette) paling tepat yang seharusnya dijaga adalah ...",
    "options": [
      "Menghidupkan mikrofon terus-menerus di ruang ramai tanpa mute agar suasana rapat terdengar hidup oleh peserta lain",
      "Menonaktifkan kamera sambil berbelanja daring atau berbincang santai di kafe lain sepanjang rapat berlangsung",
      "Memotong pembicaraan narasumber seketika lewat mikrofon setiap kali muncul ide tanpa memanfaatkan fitur angkat tangan (raise hand)",
      "Mengenakan pakaian santai rumahan sambil menyalakan kamera dalam posisi berbaring saat sesi diskusi formal",
      "Berpakaian dinas rapi, menyalakan kamera saat memungkinkan, mematikan mikrofon bila tidak berbicara, memakai fitur angkat tangan/kolom obrolan sopan, dan fokus aktif pada agenda rapat"
    ],
    "optionScores": [
      2,
      1,
      4,
      3,
      5
    ],
    "answer": "E",
    "explanation": "Etika rapat daring menghargai waktu serta wibawa forum resmi melalui kesiapan visual rapi, disiplin audio mute/unmute, tertib giliran bicara (raise hand), dan fokus hadir penuh (skor 5).",
    "tip": "Etika rapat daring: busana rapi, mute saat menyimak, raise hand sebelum bicara, dan fokus hadir."
  },
  {
    "id": "tkp-tik-035",
    "subPattern": "etika-komunikasi-daring-dan-pelayanan-elektronik",
    "difficulty": "sedang",
    "prompt": "Di grup percakapan resmi kantor, dua rekan terlibat adu argumen tajam mengenai pembagian jadwal piket hingga melontarkan kalimat menyindir di depan puluhan anggota grup termasuk atasan dan staf baru. Sebagai rekan kerja di grup tersebut, langkah terbaik Anda adalah ...",
    "options": [
      "Membantu meredakan ketegangan secara netral dengan mengajak diskusi penjadwalan dipindah ke jalur koordinasi langsung pihak terkait (secara privat/rapat singkat) supaya grup resmi tetap fokus informasi kerja yang kondusif",
      "Ikut menimpali adu argumen di grup besar tersebut sambil memasang emotikon sindiran guna meramaikan suasana",
      "Membagikan tangkapan layar perdebatan grup resmi itu kepada teman-teman Anda di luar kantor sebagai cerita lucu sore hari",
      "Keluar mendadak dari grup resmi kerja kantor tanpa pamit supaya tidak melihat pesan lanjutan apa pun",
      "Menegur keduanya dengan kata-kata jauh lebih keras di grup besar agar semua anggota tahu siapa yang benar"
    ],
    "optionScores": [
      5,
      2,
      1,
      3,
      4
    ],
    "answer": "A",
    "explanation": "Mengalihkan eskalasi konflik dari ruang grup besar ke dialog privat terfokus menjaga martabat pihak berkonflik, mencegah kegaduhan meluas ke seluruh organisasi, dan memelihara fungsi profesional grup resmi (skor 5).",
    "tip": "Jangan selesaikan konflik pribadi di grup kerja besar; redakan secara netral dan ajak bahas terfokus secara privat."
  },
  {
    "id": "tkp-tik-036",
    "subPattern": "etika-komunikasi-daring-dan-pelayanan-elektronik",
    "difficulty": "sedang",
    "prompt": "Anda bertugas mengirimkan surel resmi undangan penting beserta lampiran kepada pemangku kepentingan eksternal. Namun dua menit setelah menekan tombol kirim, Anda menyadari lampiran dokumen yang terikut masih versi draf dengan catatan koreksi internal yang belum dibersihkan. Tindakan berintegritas dan profesional Anda adalah ...",
    "options": [
      "Berharap penerima tidak membaca bagian lampiran tersebut dan mendiamkannya saja supaya kesalahan tidak ketahuan",
      "Segera mengirim surel ralat sopan (recall jika tersedia dan pesan klarifikasi resmi), meminta penerima mengabaikan/menghapus berkas keliru sebelumnya, dan langsung melampirkan dokumen final yang benar agar tidak terjadi salah tindakan",
      "Memblokir balasan surel penerima selama beberapa hari lalu menyalahkan sistem jaringan pengirim yang otomatis melampirkan file lama",
      "Mengubah penamaan berkas di komputer Anda sendiri menjadi kata 'final' tanpa mengirimkan pembetulan ke penerima surel",
      "Meminta staf admin lain mengirimkan surel baru dengan subjek berbeda tanpa menjelaskan bahwa surat sebelumnya keliru"
    ],
    "optionScores": [
      2,
      5,
      1,
      3,
      4
    ],
    "answer": "B",
    "explanation": "Komunikasi elektronik profesional menuntut tanggung jawab cepat atas kekeliruan pengiriman dokumen: klarifikasi cepat, tegas meminta penghapusan berkas draf keliru, dan pengiriman segera versi sah mencegah dampak salah keputusan mitra (skor 5).",
    "tip": "Jika salah kirim surel dinas/lampiran, segera kirim klarifikasi ralat resmi dengan lampiran sah dan etiket permohonan maaf profesional."
  },
  {
    "id": "tkp-tik-037",
    "subPattern": "etika-komunikasi-daring-dan-pelayanan-elektronik",
    "difficulty": "sedang",
    "prompt": "Ketika mengisi kolom aduan masyarakat di akun resmi media sosial instansi, banyak warga memakai akun tidak bernama dengan bahasa emosional mengkritik antrean sistem daring yang sempat macet tiga puluh menit pagi tadi. Sebagai pengelola komunikasi publik instansi, sikap terbaik Anda adalah ...",
    "options": [
      "Menghapus seluruh komentar bernada kritik dan memblokir akun pengkritik agar beranda akun resmi instansi selalu berisi pujian",
      "Membalas sindiran warganet memakai gaya bahasa gaul defensif supaya dianggap tegas oleh pengikut media sosial lainnya",
      "Menjawab secara profesional, empatik, dan transparan mengenai kendala yang sudah ditangani disertai kanal layanan bantu aktif, tanpa mempermalukan pengadu dan tetap menjadikannya catatan perbaikan tim teknis",
      "Membiarkan kolom komentar tidak terbalas seluruhnya berbulan-bulan karena media sosial dianggap hanya untuk publikasi foto acara pimpinan",
      "Mengunggah tanggapan emosional panjang yang menyalahkan keterbatasan anggaran daerah di kolom komentar publik"
    ],
    "optionScores": [
      1,
      2,
      5,
      3,
      4
    ],
    "answer": "C",
    "explanation": "Pengelolaan media sosial resmi lembaga negara wajib responsif, empatik, nondefensif, memberi informasi pemecahan nyata, dan meneruskan kritik ke perbaikan operasional layanan (skor 5).",
    "tip": "Kelola komentar kritik di akun resmi instansi secara santun, faktual, tidak menghapus kritik sah, dan beri jalur solusi aktif."
  },
  {
    "id": "tkp-tik-038",
    "subPattern": "etika-komunikasi-daring-dan-pelayanan-elektronik",
    "difficulty": "sedang",
    "prompt": "Anda terbiasa menjawab pesan kerja dengan cepat, tetapi atasan Anda sering mengirimkan pesan koordinasi mendadak terkait persiapan bahan rapat penting pada pukul 22.00 malam, sementara beberapa rekan lain mengirim pesan non-darurat di akhir pekan tanpa mencantumkan urgensi maupun konteks jelas. Agar etika komunikasi kerja tetap sehat tanpa mengganggu ketanggapan darurat, budaya komunikasi yang paling baik Anda bangun dalam tim adalah ...",
    "options": [
      "Mematikan total seluruh saluran telepon serta pesan sepanjang luar jam kantor termasuk ketika terjadi kondisi bencana/krisis nyata daerah",
      "Membalas seluruh pesan non-darurat di tengah malam dengan nada tersinggung agar pengirim sadar batas waktu pribadi",
      "Membiarkan semua pesan menumpuk tiga hari terlebih dahulu supaya atasan dan rekan terbiasa tidak mengandalkan pesan singkat",
      "Menyepakati aturan komunikasi tim: cantumkan konteks dan tenggat jelas, pakai kirim terjadwal di luar jam kerja untuk hal rutin, sambil tetap sigap merespons saat kondisi darurat nyata",
      "Menuntut pemberian tunjangan lembur tambahan harian untuk setiap pesan teks yang dibaca setelah jam kerja berakhir"
    ],
    "optionScores": [
      3,
      1,
      2,
      5,
      4
    ],
    "answer": "D",
    "explanation": "Kesehatan kerja digital (right to disconnect) berjalan harmonis bersama tanggung jawab pelayanan lewat kesepakatan tim tentang klasifikasi urgensi pesan, penulisan konteks lengkap, pengiriman terjadwal untuk hal rutin, serta kesigapan saat darurat sah (skor 5).",
    "tip": "Bangun kesepakatan komunikasi tim yang membedakan urusan darurat nyata dari pesan rutin, lengkap dengan konteks jelas dan kirim terjadwal."
  },
  {
    "id": "tkp-tik-039",
    "subPattern": "etika-komunikasi-daring-dan-pelayanan-elektronik",
    "difficulty": "sulit",
    "prompt": "Sebuah tangkapan layar percakapan internal tim teknis yang berisi komentar keluhan lelah seorang staf terhadap rumitnya aturan baru tiba-tiba bocor ke ruang publik dan memicu sorotan miring media lokal terhadap kinerja birokrasi instansi Anda. Langkah penanganan komunikasi serta etika digital paling bijak yang Anda dukung adalah ...",
    "options": [
      "Mencari-cari kambing hitam siapa staf pembocor lalu memecatnya secara sepihak di ruang rapat sebelum memeriksa fakta lengkap",
      "Membuat pengumuman bantahan bahwa tangkapan layar percakapan tersebut seratus persen editan palsu meski isinya memang pernah tertulis",
      "Menyatakan di media massa bahwa seluruh staf di unit teknis Anda memang kurang memiliki etos pengabdian kepada negara",
      "Menghapus seluruh grup komunikasi koordinasi internal tim lalu menginstruksikan pegawai memakai pesan kertas memo saja selamanya",
      "Mengklarifikasi secara jujur fokus perbaikan layanan kepada publik, menegakkan disiplin kerahasiaan ruang koordinasi internal, dan membuka kanal aspirasi konstruktif bagi staf"
    ],
    "optionScores": [
      2,
      1,
      3,
      4,
      5
    ],
    "answer": "E",
    "explanation": "Krisis kebocoran chat internal ditangani dengan menjaga integritas kebenaran (tanpa berbohong ke publik), mengarahkan narasi ke komitmen pembenahan layanan, menegakkan etika kerahasiaan ruang koordinasi internal, sekaligus menyalurkan aspirasi staf ke kanal perbaikan resmi (skor 5).",
    "tip": "Pada kebocoran komunikasi internal: jawab publik jujur-solutif, benahi disiplin kerahasiaan ruang internal, dan buka kanal aspirasi sehat."
  },
  {
    "id": "tkp-tik-040",
    "subPattern": "etika-komunikasi-daring-dan-pelayanan-elektronik",
    "difficulty": "sulit",
    "prompt": "Lembaga Anda mengintegrasikan sistem layanan pengaduan otomatis berbasis chatbot AI di portal web, tetapi beberapa warga mengeluh terjebak percakapan berputar-putar dengan bot saat menghadapi kasus unik yang tidak cocok dengan jawaban standar. Perbaikan rancangan etika layanan elektronik paling tepat adalah ...",
    "options": [
      "Menghapus layanan keluhan untuk kasus unik dan hanya menerima keluhan yang sesuai lima kategori standar bot saja",
      "Memperpanjang daftar pertanyaan pilihan ganda chatbot hingga lima puluh tahap sebelum mengizinkan pengiriman pengaduan",
      "Menonaktifkan penuh seluruh fitur konsultasi daring web dan mengarahkan warga cukup mengirim surat pos tercatat",
      "Menyembunyikan identitas bot seolah-olah warga sedang bercakap dengan pegawai manusia agar warga merasa puas psikologis sementara",
      "Memastikan desain layanan chatbot selalu menyertakan tombol eskalasi cepat ke petugas manusia (live agent) serta transparansi sejak awal bahwa pengguna berinteraksi dengan asisten otomatis"
    ],
    "optionScores": [
      4,
      2,
      3,
      1,
      5
    ],
    "answer": "E",
    "explanation": "Etika layanan publik berbasis AI menjunjung transparansi identitas bot (pengguna berhak tahu sedang berinteraksi dengan otomasi) dan prinsip keterjangkauan eskalasi manusia (human handoff) bagi masalah kompleks atau darurat agar warga tidak terperangkap dalam labirin otomasi (skor 5).",
    "tip": "Prinsip etis chatbot layanan publik: jelaskan identitas asisten otomatis sejak awal dan selalu sediakan tombol cepat ke petugas manusia."
  }
];

export const tikQuestions: readonly Question[] = buildTkpPatternQuestions(
  "tik",
  tikDrafts,
);
