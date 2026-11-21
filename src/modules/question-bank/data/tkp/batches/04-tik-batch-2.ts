import type { TkpQuestionDraft } from "@/modules/question-bank/domain/question";

export const tikBatch2Drafts: readonly TkpQuestionDraft[] = [
  {
    id: "tkp-tik-041",
    subPattern: "adaptasi-sistem-digital-dan-otomatisasi-ai",
    difficulty: "mudah",
    prompt:
      "Instansi Anda mulai menerapkan Tanda Tangan Elektronik (TTE) tersertifikasi BSrE untuk seluruh naskah dinas, namun beberapa pegawai masih mencetak surat untuk dibubuhi tanda tangan basah lalu memindainya kembali ke sistem. Sikap Anda yang paling tepat adalah ...",
    options: [
      "Beralih penuh ke TTE untuk seluruh naskah tugas pribadi dan membimbing rekan sekitar memahami alur aktivasi sertifikat elektroniknya.",
      "Menggunakan TTE secara konsisten pada seluruh dokumen pribadi agar proses pengesahan naskah di meja kerja Anda tetap cepat.",
      "Memakai TTE apabila pengirim surat mensyaratkan format digital dan tetap memakai tanda tangan basah untuk surat rutin internal.",
      "Menunggu seluruh rekan di subbagian beralih ke TTE terlebih dahulu agar format arsip surat keluar unit terlihat seragam.",
      "Tetap mencetak surat untuk tanda tangan basah lalu memindainya karena merasa dokumen fisik lebih sah secara hukum.",
    ],
    optionScores: [5, 4, 3, 2, 1],
    answer: "A",
    explanation:
      "Menggunakan TTE secara penuh sekaligus mendampingi rekan kerja mengaktifkan sertifikat elektronik mempercepat transformasi tata naskah digital di seluruh unit. Memakai TTE untuk tugas pribadi saja sudah patuh pada kebijakan baru, namun belum membantu menghilangkan hambatan adaptasi rekan lain.",
    tip: "Jadilah penggerak adopsi sistem digital resmi dengan mempraktikkannya secara penuh dan membantu rekan yang masih ragu.",
  },
  {
    id: "tkp-tik-042",
    subPattern: "adaptasi-sistem-digital-dan-otomatisasi-ai",
    difficulty: "mudah",
    prompt:
      "Bagian TI kantor meluncurkan sistem masuk tunggal (Single Sign-On/SSO) untuk mengintegrasikan seluruh portal kepegawaian, presensi, dan pelaporan kinerja dengan batas waktu aktivasi pekan ini. Langkah terbaik Anda adalah ...",
    options: [
      "Mempelajari panduan migrasi akun dari pengumuman resmi lalu mengaktifkan SSO menjelang batas akhir pekan agar tidak mengganggu tugas harian.",
      "Segera melakukan aktivasi SSO sesuai panduan resmi, mengecek keterhubungan seluruh modul kerja, dan berbagi langkah praktis ke rekan tim.",
      "Segera mengaktifkan akun SSO untuk portal presensi pribadi sesuai tenggat waktu agar catatan kehadiran harian tidak terganggu.",
      "Meminta bantuan staf TI datang ke meja kerja untuk mengisikan seluruh langkah aktivasi SSO karena khawatir salah menekan menu.",
      "Menunda aktivasi SSO dan tetap menggunakan tautan login lama selama akses portal kepegawaian masih dapat dibuka.",
    ],
    optionScores: [3, 5, 4, 2, 1],
    answer: "B",
    explanation:
      "Aktivasi dini yang disertai verifikasi seluruh modul terhubung serta berbagi langkah praktis mempercepat transisi aman di tingkat tim. Mengaktifkan SSO hanya untuk kepentingan presensi pribadi sudah responsif, tetapi belum memastikan kelancaran akses modul lain maupun kesiapan rekan kerja.",
    tip: "Uji seluruh fitur setelah migrasi akun terintegrasi dan bagikan panduan ringkas agar tim terhindar dari kendala teknis.",
  },
  {
    id: "tkp-tik-043",
    subPattern: "adaptasi-sistem-digital-dan-otomatisasi-ai",
    difficulty: "sedang",
    prompt:
      "Unit pengadaan Anda mulai memakai perangkat pemindaian teks otomatis (OCR) berbasis AI untuk mengekstrak rincian penawaran vendor, namun alat tersebut sesekali keliru membaca angka desimal pada dokumen pindaian yang buram. Sikap kerja paling proporsional adalah ...",
    options: [
      "Langsung memasukkan seluruh angka hasil ekstraksi OCR ke tabel evaluasi vendor karena sistem otomasi dianggap sudah terkalibrasi.",
      "Menghentikan pemakaian modul OCR dan kembali menyalin seluruh data penawaran puluhan vendor secara manual dari awal.",
      "Tetap memakai OCR untuk mempercepat input awal, lalu mewajibkan verifikasi silang angka krusial dan mencatat pola salah baca untuk tim TI.",
      "Memakai OCR sebagai alat bantu input awal sambil melakukan pengecekan ulang angka-angka penting pada dokumen yang tampak buram.",
      "Meminta vendor mengirimkan ulang seluruh berkas penawaran dalam format dokumen ketikan terbuka agar sistem OCR tidak perlu bekerja keras.",
    ],
    optionScores: [1, 2, 5, 4, 3],
    answer: "C",
    explanation:
      "Menggabungkan efisiensi OCR dengan verifikasi silang manusia pada data krusial serta pelaporan pola galat ke tim TI menjaga akurasi sekaligus menyempurnakan sistem. Melakukan pengecekan ulang hanya pada dokumen buram sudah berhati-hati, namun belum mendorong perbaikan akurasi alat secara berkelanjutan.",
    tip: "Pada otomasi pembacaan dokumen, terapkan verifikasi ganda untuk data bernilai kritis dan beri umpan balik ke pengelola sistem.",
  },
  {
    id: "tkp-tik-044",
    subPattern: "adaptasi-sistem-digital-dan-otomatisasi-ai",
    difficulty: "sedang",
    prompt:
      "Saat menguji coba asisten virtual berbasis AI internal yang disiapkan untuk menjawab pertanyaan regulasi kepegawaian ASN, Anda menemukan bot memberikan jawaban usang berdasarkan peraturan lama yang telah dicabut. Tindakan paling konstruktif Anda adalah ...",
    options: [
      "Tetap memanfaatkan seluruh jawaban asisten virtual tersebut sebagai bahan rujukan cepat karena fitur baru pasti sudah disetujui pimpinan.",
      "Mengabaikan temuan kekeliruan regulasi tersebut dan memilih bertanya langsung kepada atasan setiap kali membutuhkan dasar hukum.",
      "Mengingatkan rekan kerja seruangan agar tidak mengandalkan asisten virtual internal tersebut sama sekali untuk urusan regulasi.",
      "Mendokumentasikan tangkapan layar jawaban usang beserta nomor regulasi terbaru ke pengelola sistem AI agar basis pengetahuannya diperbarui.",
      "Melaporkan kepada tim pengelola bahwa asisten virtual memberi jawaban keliru lalu kembali mengecek aturan secara manual untuk tugas sendiri.",
    ],
    optionScores: [1, 2, 3, 5, 4],
    answer: "D",
    explanation:
      "Melaporkan bukti tangkapan layar sekaligus menyertakan rujukan regulasi terbaru membantu tim teknis memutakhirkan basis pengetahuan AI secara tepat sasaran. Sekadar melaporkan kekeliruan tanpa data pembanding sudah menunjukkan kepedulian, tetapi memperlambat proses koreksi oleh pengelola sistem.",
    tip: "Bantu tingkatkan akurasi AI internal dengan melaporkan temuan keliru disertai bukti dan sumber regulasi terbarunya.",
  },
  {
    id: "tkp-tik-045",
    subPattern: "adaptasi-sistem-digital-dan-otomatisasi-ai",
    difficulty: "sedang",
    prompt:
      "Dinas Anda mewajibkan penyuluh lapangan beralih dari laporan kertas ke aplikasi bergerak (mobile) yang sudah mendukung penyimpanan luring (offline sync), namun sebagian petugas di daerah minim sinyal enggan memasangnya. Langkah paling efektif yang Anda dorong sebagai koordinator wilayah adalah ...",
    options: [
      "Menegaskan sanksi penundaan pencairan insentif lapangan bagi penyuluh yang masih mengumpulkan laporan dalam bentuk kertas bulan depan.",
      "Mengizinkan penyuluh di wilayah sinyal lemah tetap mengirim laporan kertas selamanya agar target pelaporan bulanan tidak terhambat.",
      "Membagikan berkas panduan PDF fitur offline sync ke grup penyuluh dan meminta mereka mencoba sendiri sebelum jadwal kunjungan berikutnya.",
      "Mengumpulkan seluruh laporan kertas penyuluh di akhir bulan lalu meminta staf administrasi kantor mengetikkannya ulang ke aplikasi.",
      "Menyelenggarakan simulasi langsung cara input luring dan sinkronisasi data saat kembali ke area bersinyal serta mendampingi kasus kendala perdana.",
    ],
    optionScores: [2, 1, 3, 4, 5],
    answer: "E",
    explanation:
      "Simulasi praktik langsung mode luring dan pendampingan perdana membuktikan secara nyata bahwa kendala sinyal telah teratasi oleh fitur sistem, sehingga menumbuhkan kepercayaan pengguna lapangan. Membantu mengetikkan ulang laporan kertas memang menjaga data masuk sementara, namun justru melanggengkan ketergantungan pada cara manual.",
    tip: "Atasi keraguan pengguna lapangan terhadap teknologi baru lewat simulasi kasus nyata di kondisi kerja mereka.",
  },
  {
    id: "tkp-tik-046",
    subPattern: "adaptasi-sistem-digital-dan-otomatisasi-ai",
    difficulty: "sedang",
    prompt:
      "Seorang rekan kerja berlangganan layanan AI generatif komersial publik memakai dana pribadi dan berniat mengunggah rancangan pagu anggaran serta data internal proyek strategis yang belum dipublikasikan untuk mempercepat penyusunan paparan pimpinan. Sikap paling tepat Anda adalah ...",
    options: [
      "Mengingatkannya secara santun tentang risiko kebocoran data sensitif instansi ke peladen pihak ketiga dan mengajaknya memakai draf tersamar atau AI internal resmi.",
      "Menyarankan rekan tersebut agar menghapus riwayat percakapan setelah selesai menghasilkan draf paparan supaya data anggaran tidak tersimpan lama.",
      "Menyampaikan secara tegas bahwa penggunaan AI publik untuk data anggaran belum dipublikasikan dilarang dan memintanya menyusun materi secara manual.",
      "Membiarkan penggunaan layanan AI berbayar tersebut karena sudah dibayar dengan akun pribadi dan bertujuan mempercepat penyelesaian bahan pimpinan.",
      "Ikut menitipkan penyusunan draf paparan seksi Anda ke akun AI berbayar milik rekan tersebut agar tampilan seluruh paparan dinas seragam.",
    ],
    optionScores: [5, 3, 4, 2, 1],
    answer: "A",
    explanation:
      "Mengingatkan risiko kebocoran data pada layanan eksternal sekaligus menawarkan jalan keluar aman berupa penyamaran data (anonimisasi) atau kanal AI internal resmi menyeimbangkan keamanan dan produktivitas. Melarang sambil meminta kerja manual penuh sudah menjaga kerahasiaan, tetapi kurang memberi solusi kerja adaptif.",
    tip: "Jangan pernah memasukkan data internal rahasia ke layanan AI publik; gunakan sistem internal resmi atau lakukan anonimisasi ketat.",
  },
  {
    id: "tkp-tik-047",
    subPattern: "adaptasi-sistem-digital-dan-otomatisasi-ai",
    difficulty: "sulit",
    prompt:
      "Anda menemukan sistem AI penyaringan awal berkas izin usaha di dinas Anda berulang kali menolak otomatis pengajuan pelaku UMKM karena sistem gagal membaca berkas PDF hasil foto ponsel yang pencahayaannya kurang rata. Sebagai analis layanan digital, langkah strategis paling tepat adalah ...",
    options: [
      "Meminta seluruh pemohon UMKM datang langsung ke kantor dengan membawa dokumen fisik agar tidak perlu melewati sistem penyaringan AI.",
      "Mengkaji bias pembacaan sistem bersama tim teknis untuk kalibrasi ulang, membuka jalur verifikasi manual sementara bagi berkas ditolak, dan memberi panduan foto jelas.",
      "Melaporkan temuan penolakan berkas foto ponsel kepada pengembang sistem agar algoritma penyaringan diperbaiki pada pembaruan berikutnya.",
      "Menonaktifkan seluruh fitur penyaringan otomatis berbasis AI tanpa batas waktu dan mengembalikan pemeriksaan seluruh ribuan berkas ke petugas loket.",
      "Membiarkan hasil penolakan otomatis berjalan sesuai standar algoritma karena pemohon seharusnya mengunggah dokumen pindaian resolusi tinggi.",
    ],
    optionScores: [2, 5, 4, 3, 1],
    answer: "B",
    explanation:
      "Menggabungkan perbaikan kalibrasi algoritma, jalur verifikasi manual sementara agar hak layanan warga tetap terlindungi, dan edukasi teknis bagi pemohon mewujudkan keadilan layanan digital yang inklusif. Melaporkan temuan ke pengembang saja sudah tanggap secara teknis, namun membiarkan pemohon UMKM terus dirugikan selama masa perbaikan.",
    tip: "Awasi potensi bias sistem otomasi terhadap kelompok rentan atau keterbatasan perangkat warga, dan selalu siapkan jalur tinjauan manusia.",
  },
  {
    id: "tkp-tik-048",
    subPattern: "adaptasi-sistem-digital-dan-otomatisasi-ai",
    difficulty: "sulit",
    prompt:
      "Setelah instansi bermigrasi dari peladen lokal ke sistem komputasi awan terpusat, alur otorisasi berjenjang berubah sehingga beberapa kepala seksi mengeluhkan proses persetujuan terasa lebih lambat dan mendesak kembali ke sistem lama. Sebagai anggota tim transformasi digital, sikap terbaik Anda adalah ...",
    options: [
      "Menyetujui usulan pengembalian sistem ke peladen lokal sementara waktu sampai seluruh pejabat struktural merasa siap dengan alur baru.",
      "Menolak seluruh keluhan secara formal dengan menegaskan bahwa migrasi komputasi awan merupakan keputusan final dari pimpinan pusat.",
      "Mengaudit tahapan otorisasi untuk menemukan titik sumbat teknis, menyederhanakan alur yang tumpang tindih, dan mengadakan pendampingan singkat bagi pejabat terkait.",
      "Mengadakan sesi sosialisasi ulang mengenai manfaat keamanan jangka panjang sistem komputasi awan agar para kepala seksi lebih memahami urgensinya.",
      "Meminta staf administrasi menyiapkan dokumen persetujuan cadangan secara luring apabila proses otorisasi di sistem awan melebihi satu hari kerja.",
    ],
    optionScores: [1, 2, 5, 4, 3],
    answer: "C",
    explanation:
      "Menganalisis titik sumbat alur kerja untuk disederhanakan sembari mendampingi pengguna struktural memadukan ketegasan arah transformasi dengan perbaikan pengalaman pengguna. Sosialisasi ulang manfaat keamanan saja membantu pemahaman konseptual, tetapi tidak menyelesaikan hambatan kecepatan proses persetujuan di lapangan.",
    tip: "Ketika sistem baru dikeluhkan lambat, audit titik sumbat alur kerjanya untuk disederhanakan alih-alih mundur ke cara lama.",
  },
  {
    id: "tkp-tik-049",
    subPattern: "keamanan-informasi-privasi-dan-anti-phishing",
    difficulty: "mudah",
    prompt:
      "Anda menerima surel berpenampilan resmi dengan alamat pengirim mirip domain pemerintah (misalnya `admin@kepegawaian-go.info`) yang mendesak Anda mengeklik tautan pembaruan kata sandi dalam 24 jam agar hak tunjangan tidak dibekukan. Tindakan paling aman Anda adalah ...",
    options: [
      "Membuka tautan tersebut melalui peramban mode penyamaran terlebih dahulu untuk melihat apakah tampilan halamannya asli atau palsu.",
      "Mengabaikan serta langsung menghapus surel tersebut dari kotak masuk tanpa membukanya lebih lanjut karena terindikasi mencurigakan.",
      "Meneruskan surel itu ke beberapa rekan kerja untuk menanyakan apakah mereka juga menerima peringatan pembaruan kata sandi serupa.",
      "Tidak mengeklik tautan maupun membalas surel, memeriksa kejanggalan alamat pengirim, dan melaporkan indikasi phishing ke tim keamanan TI instansi.",
      "Mengganti kata sandi akun kepegawaian langsung melalui tautan yang tertera pada surel sebelum batas waktu 24 jam berakhir.",
    ],
    optionScores: [2, 4, 3, 5, 1],
    answer: "D",
    explanation:
      "Menahan diri dari tautan mencurigakan sekaligus melaporkannya ke tim keamanan TI membantu instansi memblokir domain phishing dan memperingatkan pegawai lain yang berpotensi menjadi sasaran. Menghapus surel tanpa melapor sudah aman bagi diri sendiri, tetapi membiarkan ancaman tetap mengintai rekan satu kantor.",
    tip: "Periksa keaslian domain resmi (`.go.id`) sebelum memercayai surel mendesak dan selalu laporkan upaya phishing ke tim TI.",
  },
  {
    id: "tkp-tik-050",
    subPattern: "keamanan-informasi-privasi-dan-anti-phishing",
    difficulty: "mudah",
    prompt:
      "Saat melakukan penghapusan barang inventaris komputer loket pelayanan yang sudah rusak berat untuk dilelang atau didaur ulang, staf gudang berniat langsung menyerahkan unit beserta cakram penyimpanannya (harddisk/SSD) tanpa pembersihan data. Sikap Anda yang paling tepat adalah ...",
    options: [
      "Meminta staf gudang memformat cepat partisi penyimpanan melalui sistem operasi standar sebelum komputer diserahkan kepada pembeli lelang.",
      "Menyerahkan keputusan pembersihan perangkat sepenuhnya kepada panitia penghapusan aset karena fokus tugas Anda hanya pada pelayanan loket.",
      "Membiarkan unit komputer diserahkan apa adanya karena perangkat tersebut sudah tidak bisa menyala sehingga datanya dianggap aman.",
      "Mengingatkan staf gudang agar menghapus folder dokumen penting secara manual sebelum memindahkan komputer ke ruang penyimpanan lelang.",
      "Menghentikan penyerahan sementara dan berkoordinasi dengan tim TI untuk pemusnahan data permanen (secure wipe/penghancuran fisik media) sesuai prosedur.",
    ],
    optionScores: [3, 2, 1, 4, 5],
    answer: "E",
    explanation:
      "Memastikan pemusnahan data secara permanen oleh tim TI mencegah pemulihan data sensitif warga yang pernah tersimpan di media penyimpanan komputer loket. Menghapus folder secara manual atau format cepat belum menghilangkan jejak data yang masih dapat dipulihkan dengan perangkat lunak forensik.",
    tip: "Data pada perangkat bekas dinas masih bisa dipulihkan bila hanya dihapus biasa; wajib lakukan secure wipe atau pemusnahan media.",
  },
  {
    id: "tkp-tik-051",
    subPattern: "keamanan-informasi-privasi-dan-anti-phishing",
    difficulty: "sedang",
    prompt:
      "Di sela istirahat rapat, seorang rekan membagikan kode QR dan tautan unduhan berkas `.apk` dari grup pesan luar kantor yang diklaim berisi daftar terbaru jadwal mutasi serta kenaikan pangkat ASN. Langkah keamanan digital paling bijak Anda adalah ...",
    options: [
      "Menolak memindai atau menginstal berkas tersebut, mengingatkan grup akan bahaya malware pencuri data di file `.apk` tak resmi, dan merujuk kanal resmi BKN/instansi.",
      "Tidak mengunduh berkas `.apk` tersebut di ponsel pribadi maupun perangkat kerja serta langsung mengonfirmasi kebenaran info mutasi ke bagian kepegawaian.",
      "Memindai kode QR untuk melihat situs tujuannya terlebih dahulu tanpa langsung mengunduh berkas pemasang aplikasi ke ponsel.",
      "Mengunduh berkas `.apk` tersebut ke ponsel cadangan yang tidak berisi aplikasi perbankan untuk mengecek apakah isinya benar daftar mutasi.",
      "Segera memasang berkas aplikasi tersebut di ponsel pribadi lalu meneruskan tautannya ke rekan satu bidang agar tidak ketinggalan informasi.",
    ],
    optionScores: [5, 4, 2, 3, 1],
    answer: "A",
    explanation:
      "Menolak instalasi aplikasi dari luar toko resmi sekaligus mengedukasi rekan mengenai bahaya pencurian kredensial melalui file `.apk` palsu melindungi keamanan perangkat seluruh kelompok. Menghindari unduhan secara pribadi dan mengecek ke kepegawaian sudah waspada, tetapi belum mencegah rekan lain terlanjur memasang malware.",
    tip: "Jangan pernah memasang berkas `.apk` dari tautan pesan instan; edukasi rekan dan pastikan informasi kepegawaian hanya dari portal resmi.",
  },
  {
    id: "tkp-tik-052",
    subPattern: "keamanan-informasi-privasi-dan-anti-phishing",
    difficulty: "sedang",
    prompt:
      "Saat mencetak berkas di pusat layanan cetak umum di luar kantor, Anda melihat seorang rekan kerja baru saja membuka portal kepegawaian instansi tanpa keluar akun (logout) dan membiarkan peramban menyimpan kata sandinya secara otomatis. Sikap paling tepat Anda adalah ...",
    options: [
      "Langsung menutup jendela peramban komputer umum tersebut agar akun kepegawaian rekan tidak dilihat oleh pelanggan berikutnya.",
      "Segera mengeluarkan akun, menghapus kata sandi tersimpan serta riwayat peramban, lalu mengingatkan rekan tersebut agar mengganti kata sandinya.",
      "Memfoto layar akun yang masih terbuka lalu mengirimkannya ke rekan tersebut sebagai pengingat agar lain kali lebih berhati-hati.",
      "Membiarkannya karena pegawai penjaga tempat cetak umum pasti terbiasa mengatur ulang komputer setelah pelanggan selesai memakai.",
      "Menunggu rekan tersebut kembali dari loket pembayaran agar ia sendiri yang mengeluarkan akun dari peramban komputer umum tersebut.",
    ],
    optionScores: [3, 5, 2, 1, 4],
    answer: "B",
    explanation:
      "Membersihkan sesi aktif sekaligus kata sandi tersimpan di peramban publik dan mendorong penggantian sandi menutup total celah pengambilalihan akun. Meminta rekan mengeluarkannya sendiri setelah selesai membayar tetap memunculkan risiko jeda waktu akses oleh pihak tak berwenang, sedangkan sekadar menutup jendela tidak menghapus sandi tersimpan.",
    tip: "Hindari login akun dinas di perangkat umum; jika terpaksa, gunakan mode penyamaran, logout tuntas, dan hapus jejak kredensial.",
  },
  {
    id: "tkp-tik-053",
    subPattern: "keamanan-informasi-privasi-dan-anti-phishing",
    difficulty: "sedang",
    prompt:
      "Ketika memeriksa folder penyimpanan awan bersama tim seleksi beasiswa pegawai, Anda mendapati berkas rekap nilai beserta nomor ponsel dan alamat rumah peserta disetel dengan akses terbuka 'siapa saja yang memiliki tautan dapat melihat'. Tindakan paling tepat Anda adalah ...",
    options: [
      "Menghapus seluruh berkas rekap seleksi tersebut dari penyimpanan awan tim dan menyimpannya di diska lepas pribadi tanpa memberi tahu ketua tim.",
      "Mengubah setelan akses menjadi terbatas hanya bagi penilai berwenang tanpa mengganggu diskusi rapat tim yang sedang berlangsung.",
      "Segera memperketat izin akses hanya ke akun resmi tim penilai, memeriksa riwayat unduhan bila tersedia, dan mengingatkan pengunggah tentang tata kelola privasi data.",
      "Mengingatkan rekan pengunggah secara pribadi agar nanti setelah rapat selesai segera mengubah izin tautan berkas rekap peserta menjadi privat.",
      "Membiarkan setelan akses tautan terbuka tersebut selama alamat tautan hanya dibagikan ke grup percakapan internal tim seleksi.",
    ],
    optionScores: [2, 4, 5, 3, 1],
    answer: "C",
    explanation:
      "Membatasi izin akses segera, mengecek jejak aktivitas untuk mitigasi kebocoran, serta memberi edukasi privasi mencegah insiden serupa terulang. Mengubah akses secara diam-diam sudah menghentikan paparan data, namun belum menanamkan kesadaran keamanan berbagi tautan kepada pengunggah.",
    tip: "Terapkan prinsip hak akses minimum (least privilege) pada dokumen daring berisi data pribadi; hindari tautan terbuka untuk publik.",
  },
  {
    id: "tkp-tik-054",
    subPattern: "keamanan-informasi-privasi-dan-anti-phishing",
    difficulty: "sedang",
    prompt:
      "Sistem pengesahan dokumen keuangan dinas telah menerapkan autentikasi dua faktor (2FA) ke ponsel pejabat berwenang, namun seorang rekan yang hendak cuti berniat meminjamkan akun dan kode OTP ponselnya kepada staf pengganti sementara agar persetujuan tetap lancar. Penilaian dan langkah paling tepat Anda adalah ...",
    options: [
      "Menyarankan rekan tersebut cukup membagikan kata sandi tanpa kode OTP dan meminta staf mengetikkan draf sebelum rekan dihubungi untuk menyetujui.",
      "Mendukung rencana peminjaman akun dan ponsel tersebut selama dibuatkan surat pernyataan pertanggungjawaban bermeterai antara keduanya.",
      "Membiarkan kesepakatan antarrekan tersebut berjalan karena kelancaran pencairan anggaran selama masa cuti merupakan tanggung jawab bersama.",
      "Menolak praktik berbagi akun dan OTP karena melanggar jejak audit dan akuntabilitas, lalu menyarankan pengajuan delegasi wewenang resmi di sistem.",
      "Menyarankan agar rekan tersebut membawa ponsel dinasnya saat cuti sehingga tetap bisa memverifikasi persetujuan tanpa meminjamkan akun.",
    ],
    optionScores: [3, 2, 1, 5, 4],
    answer: "D",
    explanation:
      "Menolak berbagi kredensial dan OTP serta mengarahkan pada mekanisme delegasi wewenang resmi di sistem menjaga integritas jejak audit (audit trail) sekaligus kelancaran layanan. Meminta rekan tetap memproses persetujuan selama cuti menjaga keamanan akun, tetapi bertentangan dengan tata kelola hak cuti dan pelimpahan wewenang resmi.",
    tip: "Akun dan kode OTP bersifat personal demi keabsahan jejak audit; gunakan fitur pelimpahan wewenang resmi saat pegawai berhalangan.",
  },
  {
    id: "tkp-tik-055",
    subPattern: "keamanan-informasi-privasi-dan-anti-phishing",
    difficulty: "sulit",
    prompt:
      "Sebagai admin basis data sistem pelaporan pelanggaran (whistleblowing) instansi, Anda ditelepon seseorang yang mengaku petugas lembaga penegak hukum meminta pengiriman salinan log identitas pelapor saat itu juga melalui aplikasi pesan demi alasan penyidikan mendesak. Sikap paling berintegritas adalah ...",
    options: [
      "Mengirimkan salinan log identitas pelapor dalam berkas terkompresi dengan kata sandi agar tetap terlihat aman meski lewat aplikasi pesan.",
      "Langsung menolak panggilan telepon tersebut dan memblokir nomor pengirim tanpa mencatat maupun melaporkannya kepada atasan.",
      "Meminta penelepon membuktikan jabatannya dengan mengirimkan foto kartu tanda anggota melalui aplikasi pesan sebelum data dikirimkan.",
      "Menolak memberikan data melalui telepon serta meminta pemohon menghubungi pimpinan instansi secara langsung pada jam kerja kantor.",
      "Menolak pengiriman data via telepon, menjelaskan kewajiban permohonan tertulis resmi terverifikasi sesuai protokol perlindungan pelapor, dan mencatat laporan insiden.",
    ],
    optionScores: [1, 2, 3, 4, 5],
    answer: "E",
    explanation:
      "Menolak permintaan informal, mewajibkan prosedur surat resmi terverifikasi untuk melindungi kerahasiaan pelapor, serta mendokumentasikan insiden mencegah rekayasa sosial (social engineering). Sekadar menolak dan mengarahkan ke pimpinan sudah melindungi data saat itu, tetapi belum menegakkan protokol verifikasi formal dan pencatatan potensi ancaman.",
    tip: "Lindungi data rahasia dari rekayasa sosial via telepon; setiap permintaan data sensitif wajib melalui verifikasi surat resmi dan persetujuan berwenang.",
  },
  {
    id: "tkp-tik-056",
    subPattern: "keamanan-informasi-privasi-dan-anti-phishing",
    difficulty: "sulit",
    prompt:
      "Saat memeriksa kode integrasi portal informasi publik yang baru dikembangkan tim eksternal, Anda menemukan kunci akses API (API key) dan sandi peladen basis data internal tertulis terbuka pada skrip repositori yang dapat dilihat publik. Langkah tanggap insiden paling tepat adalah ...",
    options: [
      "Segera melapor ke tim keamanan TI untuk mencabut dan merotasi kredensial terdampak, memeriksa log akses anomali, serta memindahkannya ke brankas rahasia (secret manager).",
      "Segera meminta pengembang menghapus baris kredensial terbuka dari skrip repositori publik agar tidak sempat ditemukan pihak luar.",
      "Menunggu jadwal rapat evaluasi mingguan bersama vendor pengembang untuk membahas pembenahan standar penulisan kode aman mereka.",
      "Menutup akses repositori publik tersebut menjadi privat tanpa perlu mengganti kunci API selama belum ada laporan peretasan.",
      "Mengganti nama variabel kredensial di dalam skrip repositori agar lebih sulit ditebak oleh pihak yang tidak berkepentingan.",
    ],
    optionScores: [5, 4, 2, 3, 1],
    answer: "A",
    explanation:
      "Kredensial yang telanjur terbuka di ruang publik harus dianggap telah terekspos sehingga wajib segera dicabut/dirotasi, diaudit log aksesnya, dan dipindahkan ke penyimpanan rahasia terenkripsi. Sekadar menghapusnya dari skrip tanpa merotasi kunci masih menyisakan risiko besar karena riwayat kode publik dapat terindeks atau tersimpan oleh pihak lain.",
    tip: "Kredensial atau API key yang bocor ke ruang publik wajib segera dicabut dan diganti baru, lalu diaudit log aksesnya.",
  },
  {
    id: "tkp-tik-057",
    subPattern: "pemanfaatan-tik-untuk-efisiensi-kinerja",
    difficulty: "mudah",
    prompt:
      "Petugas meja layanan harus mengetik ulang identitas pemohon yang sama ke tiga aplikasi dan formulir elektronik berbeda pada setiap kedatangan warga, sehingga antrean menumpuk dan kesalahan ketik sering terjadi. Gagasan efisiensi paling tepat Anda adalah ...",
    options: [
      "Menambah jam kerja lembur bagi petugas loket agar seluruh pengetikan ulang identitas pemohon dapat diselesaikan pada sore hari.",
      "Mengusulkan integrasi isian tunggal atau formulir elektronik terhubung ke tim TI agar data pemohon cukup diinput sekali untuk ketiga kebutuhan.",
      "Membuat file catatan teks sementara di komputer masing-masing petugas untuk menyalin-tempel (copy-paste) identitas warga antarformulir.",
      "Meminta warga menuliskan ulang biodatanya di tiga lembar formulir kertas berbeda sebelum diserahkan ke petugas untuk disalin.",
      "Menyarankan penambahan dua petugas loket baru guna mempercepat proses pengetikan ulang identitas di tiga aplikasi tersebut.",
    ],
    optionScores: [2, 5, 4, 1, 3],
    answer: "B",
    explanation:
      "Integrasi satu kali input (single-entry) menghilangkan pekerjaan berulang di akar masalah sekaligus menekan kesalahan penulisan data warga. Trik salin-tempel di catatan teks memang sedikit mempercepat petugas secara taktis, tetapi tetap rawan salah tempel dan menimbulkan risiko keamanan sisa data di komputer.",
    tip: "Terapkan prinsip satu kali input (single data entry) melalui integrasi formulir untuk memangkas waktu layanan dan menekan galat manusia.",
  },
  {
    id: "tkp-tik-058",
    subPattern: "pemanfaatan-tik-untuk-efisiensi-kinerja",
    difficulty: "mudah",
    prompt:
      "Setiap minggu staf kepegawaian menerima puluhan telepon dan pesan berulang dari pegawai maupun unit lain yang menanyakan syarat dasar pengajuan cuti, izin belajar, dan perjalanan dinas. Solusi berbasis TIK paling praktis dan berkelanjutan adalah ...",
    options: [
      "Membatasi jam konsultasi telepon kepegawaian hanya dua jam per hari agar staf tetap bisa menyelesaikan administrasi lainnya.",
      "Meminta seluruh penanya membaca sendiri peraturan kepegawaian lengkap setebal ratusan halaman di portal regulasi nasional.",
      "Menyusun laman FAQ ringkas beserta templat dokumen di portal internal kantor dan membagikan tautannya melalui balasan cepat otomatis.",
      "Menyimpan jawaban teks baku di catatan pribadi masing-masing staf kepegawaian untuk disalin ulang setiap kali ada yang bertanya.",
      "Mewajibkan seluruh pegawai mengirim surat permohonan tertulis terlebih dahulu sebelum menanyakan syarat pengajuan layanan kepegawaian.",
    ],
    optionScores: [2, 1, 5, 4, 3],
    answer: "C",
    explanation:
      "Membangun pusat informasi mandiri (FAQ) dan templat standar di portal internal memungkinkan pegawai menemukan jawaban kapan saja serta memangkas beban konsultasi berulang. Menyimpan teks balasan pribadi masih membebani staf untuk merespons satu per satu secara manual.",
    tip: "Ubah pertanyaan berulang menjadi basis pengetahuan mandiri (FAQ) dan templat siap unduh di portal internal.",
  },
  {
    id: "tkp-tik-059",
    subPattern: "pemanfaatan-tik-untuk-efisiensi-kinerja",
    difficulty: "sedang",
    prompt:
      "Proses verifikasi pencairan honorarium kegiatan antarunit di bagian keuangan kerap molor karena kuitansi fisik yang dikirim sering tercecer, kurang lengkap, atau salah penomoran sebelum direkap. Perbaikan tata kelola digital paling tepat Anda adalah ...",
    options: [
      "Mengharuskan bendahara tiap unit mengantarkan langsung kuitansi fisik ke ruang keuangan dengan buku ekspedisi tanda terima berlapis.",
      "Mewajibkan pengiriman foto kuitansi lewat grup percakapan umum keuangan agar seluruh staf mengetahui berkas mana yang sudah masuk.",
      "Menyiapkan daftar periksa kelengkapan berkas dalam bentuk cetakan kertas untuk ditempel pada setiap map fisik dokumen pencairan.",
      "Menerapkan formulir unggah digital berurutan dengan validasi kelengkapan wajib dan nomor registrasi otomatis sebelum berkas fisik diverifikasi.",
      "Membuat spreadsheet rekap status pengajuan yang diperbarui secara manual setiap Jumat sore oleh petugas penerima berkas keuangan.",
    ],
    optionScores: [3, 1, 2, 5, 4],
    answer: "D",
    explanation:
      "Portal unggah dengan validasi syarat wajib dan penomoran otomatis mencegah berkas cacat masuk antrean serta menjaga keterlacakan setiap pengajuan. Pembaruan spreadsheet manual tiap akhir pekan membantu pelacakan, namun tetap terlambat mendeteksi berkas yang kurang lengkap atau tercecer.",
    tip: "Gunakan validasi digital di awal proses pengajuan agar berkas tidak lengkap langsung tertolak sebelum menghambat alur verifikasi.",
  },
  {
    id: "tkp-tik-060",
    subPattern: "pemanfaatan-tik-untuk-efisiensi-kinerja",
    difficulty: "sedang",
    prompt:
      "Setiap akhir bulan penyusunan buletin kinerja dinas selalu terlambat karena lima seksi mengirimkan laporan dengan format tabel, nama kolom, dan satuan angka yang berbeda-beda sehingga editor harus merapikannya ulang dari awal. Solusi TIK paling efektif adalah ...",
    options: [
      "Menyusun panduan gaya penulisan buletin dalam dokumen PDF panjang agar tiap seksi membaca aturan penyajian sebelum mengetik laporan.",
      "Menyerahkan tugas merapikan seluruh tabel perbedaan format tersebut kepada satu staf desain khusus agar tanggal terbit buletin tidak mundur.",
      "Mengubah format pengumpulan laporan menjadi narasi paragraf bebas tanpa tabel agar editor tidak perlu menyamakan kolom angka.",
      "Meminta tiap seksi mengirimkan berkas laporan lima hari lebih awal agar editor memiliki cukup waktu menyesuaikan tabel secara manual.",
      "Menyediakan lembar kerja standar awan dengan validasi satuan angka dan templat tabel seragam yang otomatis terhubung ke grafik ringkasan.",
    ],
    optionScores: [3, 2, 1, 4, 5],
    answer: "E",
    explanation:
      "Templat lembar kerja terstandar dengan validasi tipe data dan grafik otomatis menghilangkan kerja pembersihan format berulang sejak dari sumbernya. Memajukan tenggat pengumpulan lima hari lebih awal hanya menggeser beban waktu, bukan menghilangkan pemborosan kerja manual.",
    tip: "Standarisasi templat input dengan validasi format otomatis menghemat waktu rekapitulasi dan menjaga konsistensi data lintas tim.",
  },
  {
    id: "tkp-tik-061",
    subPattern: "pemanfaatan-tik-untuk-efisiensi-kinerja",
    difficulty: "sedang",
    prompt:
      "Loket pelayanan terpadu kantor Anda selalu mengalami penumpukan antrean fisik sejak subuh karena pemohon tidak mengetahui daftar syarat lengkap maupun estimasi waktu giliran layanan mereka. Inovasi TIK paling berdampak yang Anda usulkan adalah ...",
    options: [
      "Menyediakan sistem reservasi antrean daring disertai daftar periksa syarat interaktif dan notifikasi perkiraan jam dilayani.",
      "Memasang papan pengumuman daftar persyaratan berukuran besar di teras kantor beserta mesin cetak nomor antrean kertas di pintu masuk.",
      "Menambah kursi tunggu dan tenda peneduh di halaman depan agar warga tetap merasa nyaman meski mengantre berjam-jam sejak pagi.",
      "Membuka layanan tanya jawab jadwal antrean lewat panggilan telepon ke meja informasi kantor satu hari sebelum kedatangan warga.",
      "Menerapkan sistem pembatasan kuota mendadak di loket setiap pukul sembilan pagi apabila jumlah pendaftar di ruang tunggu sudah penuh.",
    ],
    optionScores: [5, 4, 2, 3, 1],
    answer: "A",
    explanation:
      "Reservasi daring dengan daftar syarat interaktif dan estimasi jam layanan mendistribusikan kedatangan warga secara merata serta memastikan mereka datang membawa berkas lengkap. Papan pengumuman dan mesin nomor kertas di lokasi hanya merapikan antrean setelah warga telanjur datang dan berkumpul di kantor.",
    tip: "Manfaatkan reservasi daring dan daftar periksa syarat pra-kedatangan untuk mengurai penumpukan fisik sekaligus kepastian waktu warga.",
  },
  {
    id: "tkp-tik-062",
    subPattern: "pemanfaatan-tik-untuk-efisiensi-kinerja",
    difficulty: "sedang",
    prompt:
      "Peminjaman barang inventaris kantor seperti proyektor dan kendaraan dinas selama ini dicatat di buku tulis pos jaga, sehingga sering terjadi jadwal bentrok dan kesulitan melacak pemegang aset terakhir. Pembenahan berbasis TIK paling tepat adalah ...",
    options: [
      "Menyimpan salinan foto halaman buku tulis peminjaman ke dalam grup percakapan umum kantor setiap sore sebagai arsip digital.",
      "Membuat sistem peminjaman berbasis kalender digital dan kode QR aset yang mencatat peminjam, jadwal pemakaian, serta status pengembalian secara waktu nyata.",
      "Menyusun tabel daftar inventaris di komputer petugas tata usaha agar pemohon bisa menelepon staf tersebut sebelum meminjam barang.",
      "Mewajibkan seluruh peminjam membuat surat memo dinas cetak rangkap dua yang ditandatangani kepala subbagian umum sebelum memakai proyektor.",
      "Menyerahkan kunci seluruh proyektor dan kendaraan dinas langsung kepada petugas keamanan tanpa pencatatan agar proses peminjaman lebih cepat.",
    ],
    optionScores: [3, 5, 4, 2, 1],
    answer: "B",
    explanation:
      "Kalender digital terhubung dengan kode QR aset mencegah bentrok jadwal sekaligus menyediakan riwayat peminjam secara akurat dan mandiri. Tabel komputer lokal yang bergantung pada satu staf tetap menimbulkan hambatan akses saat petugas tidak berada di meja.",
    tip: "Digitalisasi peminjaman aset dengan kalender bersama dan pelacakan QR mencegah bentrok jadwal dan meningkatkan akuntabilitas BMN.",
  },
  {
    id: "tkp-tik-063",
    subPattern: "pemanfaatan-tik-untuk-efisiensi-kinerja",
    difficulty: "sulit",
    prompt:
      "Dinas Anda memiliki tumpukan laporan layanan lintas kecamatan selama tiga tahun terakhir dalam bentuk ratusan berkas PDF statis, sehingga pimpinan kesulitan membaca tren kebutuhan publik secara cepat saat rapat pengambilan keputusan. Langkah transformasi paling bernilai adalah ...",
    options: [
      "Meminta staf tiap kecamatan membuat ringkasan narasi dua halaman dalam dokumen pengolah kata menjelang rapat pimpinan bulanan.",
      "Menggabungkan seluruh ratusan file PDF tahunan tersebut menjadi satu arsip terkompresi agar pencarian kata kunci sedikit lebih mudah.",
      "Mengekstrak data kunci ke basis data terstruktur dan membangun dasbor visualisasi tren interaktif per kecamatan lengkap dengan filter waktu.",
      "Mengunggah seluruh file PDF tahunan tersebut ke folder awan bersama yang disusun berdasarkan tahun dan nama kecamatan secara rapi.",
      "Menugaskan petugas magang untuk membaca ratusan PDF secara manual dan menyalin angka ringkasannya ke salindia presentasi setiap kali rapat.",
    ],
    optionScores: [3, 2, 5, 4, 1],
    answer: "C",
    explanation:
      "Mengubah arsip statis menjadi basis data terstruktur dan dasbor interaktif menjadikan data historis dapat dianalisis seketika untuk kebijakan berbasis bukti. Merapikan berkas PDF dalam folder awan memang mempermudah penyimpanan, tetapi belum membantu pimpinan membaca tren lintas wilayah secara cepat.",
    tip: "Ubah laporan PDF statis menjadi data terstruktur dan dasbor analitik agar keputusan pimpinan bertumpu pada tren yang terbaca cepat.",
  },
  {
    id: "tkp-tik-064",
    subPattern: "pemanfaatan-tik-untuk-efisiensi-kinerja",
    difficulty: "sulit",
    prompt:
      "Dua bulan setelah peluncuran portal perizinan daring, jumlah pengunjung tatap muka di kantor ternyata tidak berkurang karena warga menganggap alur portal membingungkan dan petugas loket tetap memproses berkas secara manual tanpa memperkenalkan portal. Strategi pembenahan paling tepat adalah ...",
    options: [
      "Menutup loket pelayanan tatap muka secara sepihak mulai bulan depan agar seluruh warga terpaksa mempelajari penggunaan portal daring.",
      "Menyalahkan kurangnya literasi digital masyarakat dan melaporkan dalam evaluasi bahwa daerah belum siap menerapkan layanan berbasis web.",
      "Menambah spanduk berisi alamat situs portal di dinding ruang tunggu agar warga melihat tautan pendaftaran daring saat mengantre.",
      "Mengaudit titik bingung pada antarmuka portal bersama tim TI untuk disederhanakan, lalu menugaskan petugas memandu warga memakai portal di pojok layanan mandiri.",
      "Menyarankan petugas loket tetap melayani warga seperti biasa secara manual sambil sesekali mengingatkan adanya layanan daring di portal web.",
    ],
    optionScores: [1, 2, 3, 5, 4],
    answer: "D",
    explanation:
      "Menyederhanakan antarmuka berdasarkan hambatan nyata pengguna sekaligus mengubah peran petugas menjadi pendamping transisi di pojok layanan mandiri memutus ketergantungan tatap muka secara efektif dan manusiawi. Sekadar mengingatkan secara lisan saat melayani manual tidak memberi pengalaman langsung bagi warga untuk beralih ke portal.",
    tip: "Efisiensi sistem digital menuntut desain antarmuka ramah pengguna dan pendampingan transisi aktif oleh petugas di lapangan.",
  },
  {
    id: "tkp-tik-065",
    subPattern: "literasi-digital-dan-verifikasi-informasi",
    difficulty: "mudah",
    prompt:
      "Di grup percakapan keluarga besar dan warga lingkungan rumah, beredar pesan berantai mengatasnamakan instansi Anda tentang pembukaan rekrutmen PPPK jalur khusus tanpa tes melalui tautan formulir daring tidak resmi. Sikap Anda adalah ...",
    options: [
      "Diam saja tidak ikut berkomentar karena informasi tersebut beredar di grup keluarga pribadi, bukan di grup kedinasan kantor.",
      "Meneruskan pesan tersebut ke bagian kepegawaian kantor tanpa memberikan klarifikasi apa pun kepada anggota grup keluarga yang bertanya.",
      "Meminta pengirim pesan di grup segera menghapus unggahannya dengan nada keras tanpa menjelaskan sumber rujukan resmi yang benar.",
      "Mengingatkan anggota grup agar berhati-hati dan tidak langsung mengklik tautan yang belum tentu berasal dari pemerintah.",
      "Mengklarifikasi secara santun bahwa pesan itu hoaks, menyertakan tautan portal resmi SSCASN/instansi, dan mengingatkan bahaya pencurian data pribadi.",
    ],
    optionScores: [2, 3, 1, 4, 5],
    answer: "E",
    explanation:
      "Klarifikasi santun disertai rujukan portal resmi pemerintah serta peringatan risiko pencurian data membantu masyarakat mengenali pola penipuan rekrutmen ASN secara tuntas. Imbauan berhati-hati saja sudah tepat sebagai peringatan awal, tetapi kurang membekali warga dengan rujukan kanal resmi untuk pengecekan.",
    tip: "Lawan hoaks rekrutmen ASN dengan klarifikasi santun, bukti tautan resmi pemerintah, dan edukasi risiko pencurian identitas.",
  },
  {
    id: "tkp-tik-066",
    subPattern: "literasi-digital-dan-verifikasi-informasi",
    difficulty: "mudah",
    prompt:
      "Ketika mencari dasar hukum cepat untuk menjawab pertanyaan warga di meja layanan, Anda menemukan artikel ringkasan peraturan di sebuah blog pribadi yang mencantumkan masa berlaku persyaratan berbeda dari ingatan Anda. Langkah literasi informasi paling tepat adalah ...",
    options: [
      "Memeriksa naskah peraturan resmi di portal JDIH instansi atau kementerian terkait untuk memastikan status keberlakuan pasal yang dimaksud.",
      "Memakai informasi dari blog pribadi tersebut dengan menambahkan keterangan bahwa aturan masih dapat berubah sewaktu-waktu.",
      "Mencari dua artikel blog populer lainnya di mesin pencari untuk melihat versi persyaratan mana yang paling banyak ditulis.",
      "Menjawab pertanyaan warga berdasarkan ingatan pribadi saja tanpa perlu membuka naskah hukum karena merasa sudah berpengalaman.",
      "Menghubungi bagian hukum secara mendadak setiap kali muncul keraguan kecil tanpa mencoba memeriksa portal regulasi resmi terlebih dahulu.",
    ],
    optionScores: [5, 2, 3, 1, 4],
    answer: "A",
    explanation:
      "Memverifikasi langsung pada sumber hukum primer seperti portal JDIH menjamin ketepatan dan keberlakuan aturan sebelum disampaikan kepada masyarakat. Langsung meminta bantuan bagian hukum untuk setiap hal tanpa mengecek repositori resmi terlebih dahulu kurang mencerminkan kemandirian literasi informasi.",
    tip: "Jadikan portal regulasi resmi (JDIH) sebagai rujukan primer sebelum menyampaikan dasar hukum kepada publik.",
  },
  {
    id: "tkp-tik-067",
    subPattern: "literasi-digital-dan-verifikasi-informasi",
    difficulty: "sedang",
    prompt:
      "Sebuah unggahan viral di media sosial memperlihatkan tangkapan layar surat edaran berlogo dinas Anda dengan bagian tanda tangan terpotong yang mengumumkan penghapusan sanksi pajak daerah secara mendadak mulai besok. Respons profesional dan literasi digital Anda adalah ...",
    options: [
      "Mengomentari unggahan tersebut menggunakan akun pribadi bahwa gambar surat itu palsu sebelum mengecek agenda surat resmi kantor.",
      "Mengecek keaslian nomor surat pada sistem persuratan internal lalu mengusulkan penerbitan klarifikasi resmi di kanal instansi dengan label verifikasi.",
      "Menunggu laporan resmi masuk dari wajib pajak di loket keesokan harinya untuk melihat apakah unggahan viral tersebut berdampak pada pelayanan.",
      "Mengonfirmasi kebenaran surat kepada unit penerbit internal lalu memberi tahu rekan sekantor agar menjawab warga jika ada yang bertanya.",
      "Mengunduh gambar surat edaran viral itu dan mengirimkannya ke grup koordinasi pegawai untuk dijadikan bahan candaan di jam istirahat.",
    ],
    optionScores: [2, 5, 3, 4, 1],
    answer: "B",
    explanation:
      "Memverifikasi nomor agenda pada sistem persuratan internal lalu mendorong klarifikasi terstruktur di kanal resmi publik mencegah kesimpangsiuran massal di loket pelayanan. Mengonfirmasi hanya untuk informasi internal belum menghentikan penyebaran disinformasi di ruang publik.",
    tip: "Verifikasi keaslian dokumen viral lewat nomor registrasi internal sebelum merilis klarifikasi resmi di kanal publik.",
  },
  {
    id: "tkp-tik-068",
    subPattern: "literasi-digital-dan-verifikasi-informasi",
    difficulty: "sedang",
    prompt:
      "Dalam rapat perumusan program bantuan pangan daerah, seorang anggota tim membacakan potongan video wawancara pejabat kementerian berdurasi 15 detik dari media sosial sebagai dasar usulan perubahan kriteria penerima. Sikap kritis berbasis literasi informasi Anda adalah ...",
    options: [
      "Langsung menyetujui perubahan kriteria penerima dalam notulen rapat karena suara dan wajah pejabat pada video pendek terlihat meyakinkan.",
      "Menolak mentah-mentah usulan rekan tersebut di forum rapat sambil menyebut video media sosial tidak layak dijadikan bahan pembahasan.",
      "Mengajak tim menelusuri rekaman utuh wawancara, siaran pers kementerian, serta aturan tertulis resminya guna memastikan konteks lengkap sebelum memutuskan.",
      "Meminta rapat menunda keputusan perubahan kriteria hingga rekan tersebut mengirimkan tautan unggahan video pendek aslinya ke grup rapat.",
      "Menyarankan agar perubahan kriteria disepakati sementara sambil menunggu apakah ada berita susulan di televisi nasional sore nanti.",
    ],
    optionScores: [1, 2, 5, 4, 3],
    answer: "C",
    explanation:
      "Menelusuri konteks rekaman utuh dan mengonfirmasinya dengan regulasi tertulis mencegah kebijakan daerah tersesat oleh potongan pernyataan di luar konteks (out of context). Menunda rapat hanya untuk mengecek tautan video pendek masih berisiko jika tidak ditindaklanjuti ke dokumen resmi kementerian.",
    tip: "Klip video pendek sering memotong konteks; selalu lacak rekaman utuh dan dokumen kebijakan tertulis sebelum mengambil keputusan.",
  },
  {
    id: "tkp-tik-069",
    subPattern: "literasi-digital-dan-verifikasi-informasi",
    difficulty: "sedang",
    prompt:
      "Anda menerima laporan dari beberapa mitra bahwa terdapat akun media sosial tiruan yang memakai nama dan foto kepala dinas Anda untuk mengirim pesan pribadi meminta donasi kegiatan sosial dan menawarkan proyek. Tindakan paling tepat adalah ...",
    options: [
      "Mengirim pesan peringatan balasan langsung ke akun tiruan tersebut agar pemiliknya takut dan segera menghapus profil palsunya.",
      "Memberi tahu mitra yang melapor agar segera memblokir akun tiruan tersebut tanpa perlu membuat laporan lebih lanjut ke kantor.",
      "Membuat unggahan peringatan di status media sosial pribadi Anda agar teman-teman dekat terhindar dari penipuan akun tiruan.",
      "Mengumpulkan bukti tangkapan layar dan URL akun, melapor kepada pimpinan serta tim kehumasan untuk klarifikasi publik, dan mengajukan pelaporan peniruan ke platform.",
      "Melaporkan temuan akun tiruan tersebut secara lisan kepada sekretaris pimpinan dan menunggu arahan resmi di akhir pekan.",
    ],
    optionScores: [1, 3, 2, 5, 4],
    answer: "D",
    explanation:
      "Mendokumentasikan bukti digital, mengoordinasikan peringatan publik resmi lewat kehumasan, dan melaporkan peniruan identitas (impersonation) ke pengelola platform memutus ruang gerak pelaku secara menyeluruh. Melapor secara lisan dan menunggu arahan membiarkan lebih banyak mitra berpotensi tertipu dalam rentang waktu tersebut.",
    tip: "Pada kasus akun tiruan pejabat: amankan bukti URL/tangkapan layar, laporkan ke platform, dan terbitkan peringatan resmi instansi.",
  },
  {
    id: "tkp-tik-070",
    subPattern: "literasi-digital-dan-verifikasi-informasi",
    difficulty: "sedang",
    prompt:
      "Anda ditugaskan memverifikasi aduan daring warga yang menuduh adanya pemotongan dana bantuan di salah satu desa dengan melampirkan foto struk transaksi tanpa tanggal, lokasi agen, dan nama pengirim yang jelas. Langkah verifikasi paling objektif Anda adalah ...",
    options: [
      "Langsung menganggap aduan tersebut fitnah yang sengaja dibuat warga untuk menjatuhkan nama baik perangkat desa setempat.",
      "Meneruskan foto struk tersebut langsung ke grup media sosial kecamatan agar warga lain ikut mengomentari keaslian transaksinya.",
      "Menyimpan aduan sebagai arsip pasif sambil menunggu apakah akan ada laporan susulan dari warga desa yang sama bulan depan.",
      "Menghubungi pelapor secara tertutup untuk meminta kelengkapan bukti transaksi bertanggal sebelum menindaklanjuti verifikasi lapangan.",
      "Memeriksa kejanggalan metadata atau keutuhan gambar, membandingkan nominal dengan data pencairan resmi, serta menghubungi pelapor dan pendamping lapangan untuk klarifikasi tertutup.",
    ],
    optionScores: [1, 2, 3, 4, 5],
    answer: "E",
    explanation:
      "Kombinasi forensik gambar sederhana, pencocokan data pencairan resmi, dan klarifikasi faktual secara tertutup menjaga asas praduga tak bersalah sekaligus ketajaman investigasi pengaduan. Meminta kelengkapan bukti bertanggal dari pelapor saja sudah berhati-hati dan menjaga privasi, tetapi pasif karena belum memeriksa data pencairan internal.",
    tip: "Verifikasi bukti foto aduan dengan memeriksa keutuhan konteks, mencocokkan basis data resmi, dan mengklarifikasi secara objektif-tertutup.",
  },
  {
    id: "tkp-tik-071",
    subPattern: "literasi-digital-dan-verifikasi-informasi",
    difficulty: "sulit",
    prompt:
      "Menjelang pengesahan anggaran tahun baru, sebuah akun anonim menyebarkan utas media sosial berisi potongan tabel anggaran tak utuh dengan narasi manipulatif yang menuding program digitalisasi unit Anda merupakan proyek fiktif, memicu sentimen negatif warganet. Langkah paling strategis adalah ...",
    options: [
      "Mengklarifikasi berbasis data utuh bersama tim kehumasan melalui infografis transparan rincian capaian, dasar aturan, dan tautan dokumen resmi yang mudah dicek publik.",
      "Menerbitkan siaran pers singkat yang membantah tuduhan proyek fiktif dan mengingatkan warganet tentang ancaman sanksi hukum penyebaran berita bohong.",
      "Mengabaikan seluruh utas akun anonim tersebut karena menanggapi kritik di media sosial hanya akan memperluas jangkauan unggahan negatifnya.",
      "Meminta seluruh pegawai di unit Anda menuliskan komentar pembelaan seragam di kolom balasan utas agar sentimen publik berbalik positif.",
      "Menghapus sementara seluruh unggahan kegiatan digitalisasi di akun resmi dinas agar tidak menjadi bahan sasaran komentar warganet.",
    ],
    optionScores: [5, 4, 3, 2, 1],
    answer: "A",
    explanation:
      "Melawan narasi manipulatif dengan data lengkap yang disajikan secara visual, jujur, dan dapat diverifikasi publik membangun kepercayaan tanpa memicu konflik emosional. Bantahan normatif yang disertai ancaman hukum semata sering dipersepsikan defensif dan belum menjawab keraguan publik terhadap rincian program.",
    tip: "Hadapi disinformasi berbasis data parsial dengan menyajikan konteks utuh, bukti terukur, dan tautan transparansi publik.",
  },
  {
    id: "tkp-tik-072",
    subPattern: "literasi-digital-dan-verifikasi-informasi",
    difficulty: "sulit",
    prompt:
      "Dalam forum perencanaan lintas dinas, konsultan eksternal memaparkan analisis ketimpangan wilayah menggunakan data hasil scraping portal berita yang mencampurkan batas kecamatan sebelum dan sesudah pemekaran wilayah tanpa catatan penyesuaian. Sikap profesional Anda adalah ...",
    options: [
      "Menggunakan hasil peta analisis konsultan tersebut dalam dokumen perencanaan karena penyusunannya sudah dibayar dengan anggaran resmi.",
      "Menunjukkan ketidaksesuaian batas wilayah pemekaran secara santun dengan bukti kode wilayah resmi BPS/Kemendagri dan meminta normalisasi ulang data sebelum disahkan.",
      "Menyampaikan secara terbuka di forum bahwa analisis konsultan penuh kesalahan metodologis sehingga seluruh kerja sama perlu dihentikan.",
      "Mencatat kejanggalan batas wilayah tersebut untuk dibahas terpisah secara informal dengan konsultan setelah dokumen rencana kerja disetujui forum.",
      "Meminta anggota tim teknis internal menyisipkan catatan kaki kecil tentang pemekaran wilayah tanpa mengubah grafik maupun angka kesimpulan.",
    ],
    optionScores: [1, 5, 2, 4, 3],
    answer: "B",
    explanation:
      "Menunjukkan ketidaksesuaian metodologi secara santun dengan referensi kode wilayah resmi dan menuntut pembersihan data sebelum pengesahan mencegah salah sasaran alokasi anggaran daerah. Membahasnya setelah dokumen disetujui forum sudah terlambat secara tata kelola karena kebijakan terlanjur mengacu pada data bias.",
    tip: "Uji integritas sumber, tahun rujukan, dan konsistensi satuan wilayah pada data olahan otomatis sebelum disahkan menjadi kebijakan.",
  },
  {
    id: "tkp-tik-073",
    subPattern: "etika-komunikasi-daring-dan-pelayanan-elektronik",
    difficulty: "mudah",
    prompt:
      "Pada kotak masuk surel resmi pengaduan instansi, seorang warga mengirimkan pesan komplain menggunakan huruf kapital seluruhnya dengan nada tinggi dan banyak tanda seru karena berkas izinnya belum kunjung selesai. Cara membalas yang paling profesional adalah ...",
    options: [
      "Membalas surel dengan mengingatkan warga tersebut untuk memperbaiki tata krama penulisan terlebih dahulu sebelum keluhannya diproses lebih lanjut.",
      "Membalas dengan kalimat singkat padat berisi nomor resi proses berkas tanpa menyertakan sapaan atau penjelasan kendala yang terjadi.",
      "Menanggapi dengan sapaan hormat dan bahasa tenang, menyampaikan permohonan maaf atas ketidaknyamanan, menjelaskan posisi berkas terkini, dan memberi estimasi penyelesaian.",
      "Menunda membalas surel tersebut hingga esok hari agar emosi pemohon mereda sebelum menerima penjelasan status berkasnya.",
      "Meneruskan surel warga bernada marah tersebut ke grup percakapan pegawai sebagai contoh sikap pengguna layanan yang tidak sabaran.",
    ],
    optionScores: [2, 3, 5, 4, 1],
    answer: "C",
    explanation:
      "Balasan daring yang tetap santun, berempati, dan informatif meredakan ketegangan emosi warga sekaligus menunjukkan standar layanan elektronik profesional. Menunda balasan demi menunggu emosi reda justru memperpanjang kecemasan pemohon dan melanggar ketanggapan SLA layanan.",
    tip: "Jaga nada tenang, empatik, dan solutif saat membalas keluhan daring bernada tinggi; jangan terpancing oleh gaya tulisan emosional.",
  },
  {
    id: "tkp-tik-074",
    subPattern: "etika-komunikasi-daring-dan-pelayanan-elektronik",
    difficulty: "mudah",
    prompt:
      "Di grup pesan lintas instansi bersama mitra kerja eksternal, seorang rekan unit Anda menanggapi pertanyaan teknis dari perwakilan dinas lain dengan bahasa gaul santai yang bernada meremehkan. Tindakan paling bijak Anda adalah ...",
    options: [
      "Membalas di grup dengan menegur rekan tersebut secara langsung agar seluruh perwakilan instansi melihat komitmen etika tim Anda.",
      "Ikut menimpali dengan candaan ringan di grup agar suasana diskusi lintas instansi yang sempat canggung kembali mencair.",
      "Membiarkan pesan tersebut berlalu tanpa tanggapan karena dianggap bagian dari gaya komunikasi santai generasi muda saat ini.",
      "Menjawab pertanyaan mitra di grup dengan bahasa profesional yang menghargai, lalu mengingatkan rekan secara pribadi mengenai etika komunikasi lintas lembaga.",
      "Menjawab pertanyaan mitra secara profesional di grup dan langsung mengeluarkan rekan tersebut dari grup koordinasi lintas instansi.",
    ],
    optionScores: [2, 1, 3, 5, 4],
    answer: "D",
    explanation:
      "Mengambil alih jawaban di grup dengan bahasa profesional memulihkan wibawa komunikasi antarlembaga, sementara teguran pribadi menjaga martabat rekan tanpa mempermalukannya di depan mitra. Menegur terbuka atau mengeluarkan rekan di grup publik justru memperburuk citra keharmonisan internal unit.",
    tip: "Pulihkan suasana profesional di grup lintas pihak dengan jawaban santun, lalu berikan masukan etika kepada rekan secara pribadi.",
  },
  {
    id: "tkp-tik-075",
    subPattern: "etika-komunikasi-daring-dan-pelayanan-elektronik",
    difficulty: "sedang",
    prompt:
      "Dalam sesi konsultasi layanan daring melalui panggilan video bagi warga lansia di wilayah terpencil, jaringan suara pemohon beberapa kali terputus dan ia kesulitan mencari tombol berbagi layar dokumennya. Sikap pelayanan elektronik paling tepat adalah ...",
    options: [
      "Meminta warga tersebut menyudahi panggilan video dan mencari bantuan anggota keluarga yang lebih muda sebelum mendaftar ulang sesi besok.",
      "Tetap melanjutkan sesi video apa adanya dengan meminta warga berteriak lebih keras mendekati mikrofon agar suara terdengar jelas.",
      "Mengirimkan tautan panduan teknis penggunaan aplikasi rapat daring agar warga mempelajarinya terlebih dahulu sebelum konsultasi dilanjutkan.",
      "Meminta warga mematikan kamera video saja agar suara sedikit lebih stabil sambil menunggu ia berhasil menemukan tombol unggah dokumen.",
      "Berbicara dengan tempo jelas dan ramah, mematikan video berlebih bila perlu, serta memandu opsi alternatif mudah seperti mengirim foto berkas lewat kanal teks resmi.",
    ],
    optionScores: [1, 2, 3, 4, 5],
    answer: "E",
    explanation:
      "Komunikasi sabar dengan penyesuaian teknis hemat pita lebar dan peralihan ke kanal alternatif resmi yang lebih mudah bagi lansia menjaga inklusivitas pelayanan publik elektronik. Sekadar mematikan kamera tanpa memberi alternatif pengiriman dokumen tetap membuat pemohon kesulitan menyelesaikan urusannya.",
    tip: "Sesuaikan kanal komunikasi elektronik dengan kondisi keterbatasan jaringan dan literasi perangkat warga tanpa mengurangi keramahan.",
  },
  {
    id: "tkp-tik-076",
    subPattern: "etika-komunikasi-daring-dan-pelayanan-elektronik",
    difficulty: "sedang",
    prompt:
      "Saat Anda memandu rapat evaluasi pelayanan lintas bidang melalui konferensi video, salah seorang peserta lupa mematikan mikrofonnya ketika mengeluh dengan kata-kata kasar terhadap unit lain di ruang kerjanya sehingga terdengar oleh seluruh peserta rapat. Tindakan paling sigap dan bijak Anda sebagai moderator adalah ...",
    options: [
      "Segera membisukan mikrofon peserta tersebut menggunakan fitur moderator, mengembalikan fokus forum secara tenang, lalu menghubunginya secara pribadi seusai rapat.",
      "Memanggil nama peserta tersebut dengan keras di forum rapat agar ia segera menyadari mikrofonnya terbuka dan langsung meminta maaf.",
      "Menghentikan rapat selama sepuluh menit untuk memberikan pembinaan etika konferensi video kepada seluruh peserta agar tidak terulang.",
      "Membisukan mikrofon peserta tersebut lalu membiarkan rapat berjalan terus hingga selesai tanpa perlu menyinggung insiden itu lagi dengannya.",
      "Menertawakan kejadian tersebut secara ringan bersama peserta lain supaya ketegangan suasana rapat daring cepat mencair.",
    ],
    optionScores: [5, 2, 3, 4, 1],
    answer: "A",
    explanation:
      "Tindakan cepat membisukan mikrofon dan menjaga ketenangan forum meminimalkan gangguan martabat serta konflik terbuka, sedangkan pembinaan empat mata pascarapat memastikan kesadaran etika tetap terbangun. Mengabaikan tindak lanjut pribadi berisiko membuat peserta tidak menyadari dampak serius ucapannya terhadap keharmonisan tim.",
    tip: "Sebagai moderator rapat daring, segera gunakan kendali bisukan (mute) saat terjadi kebocoran audio dan tangani pembinaan secara personal.",
  },
  {
    id: "tkp-tik-077",
    subPattern: "etika-komunikasi-daring-dan-pelayanan-elektronik",
    difficulty: "sedang",
    prompt:
      "Anda mengelola akun resmi respons ulasan publik instansi pada aplikasi peta dan portal layanan. Muncul beberapa ulasan bintang satu bernada pedas yang menyoroti kesalahan teknis nyata petugas loket bulan lalu. Sikap balasan elektronik paling tepat adalah ...",
    options: [
      "Membalas ulasan dengan kalimat baku seragam untuk seluruh keluhan agar waktu pengelolaan media sosial menjadi lebih hemat.",
      "Menyampaikan terima kasih atas masukan warga, mengakui kendala secara jujur tanpa menyalahkan individu, menjelaskan perbaikan yang dilakukan, dan membuka kanal tindak lanjut.",
      "Menjelaskan secara panjang lebar bahwa kesalahan bulan lalu dipicu oleh gangguan listrik dan tingginya jumlah pemohon di luar kendali petugas.",
      "Menghapus atau menyembunyikan ulasan bintang satu tersebut dari halaman publik agar nilai rating kepuasan instansi tetap terlihat tinggi.",
      "Meminta warga yang memberi ulasan negatif agar segera menghubungi nomor layanan apabila masih memiliki berkas yang belum terselesaikan.",
    ],
    optionScores: [3, 5, 2, 1, 4],
    answer: "B",
    explanation:
      "Respon yang tulus berterima kasih, mengakui pembenahan nyata secara objektif, dan menyediakan kanal tindak lanjut membangun kepercayaan publik bahwa instansi mendengar kritik secara dewasa. Mengajak menghubungi nomor layanan saja tanpa mengakui pembenahan terkesan kurang reflektif terhadap evaluasi mutu.",
    tip: "Jawab ulasan negatif publik secara transparan: apresiasi kritik, sampaikan langkah perbaikan nyata, dan sediakan jalur penyelesaian.",
  },
  {
    id: "tkp-tik-078",
    subPattern: "etika-komunikasi-daring-dan-pelayanan-elektronik",
    difficulty: "sedang",
    prompt:
      "Seorang rekan mengunggah berita acara rapat penting ke grup percakapan kerja hanya berupa lima foto miring buram tanpa judul keterangan lalu tidak dapat dihubungi karena perjalanan dinas, menyulitkan anggota tim lain yang membutuhkan teksnya segera. Sikap kolaboratif paling tepat Anda adalah ...",
    options: [
      "Mengabaikan lima foto buram tersebut dan menunda seluruh tindak lanjut hasil rapat sampai rekan yang bersangkutan kembali dari perjalanan dinas.",
      "Mengirimkan pesan kritik tajam di grup kerja bahwa cara mengirim dokumen seperti itu tidak profesional dan menyusahkan anggota tim.",
      "Merapikan dan mengonversi foto yang masih terbaca menjadi satu berkas PDF berlabel rapi untuk tim, lalu memberi masukan standar berbagi dokumen secara santun.",
      "Menghubungi notulis rapat lain untuk menanyakan apakah masih menyimpan berkas ketikan aslinya dan membiarkan tim menunggu kiriman ulang.",
      "Meminta anggota tim yang paling muda mengetik ulang seluruh isi lima foto buram tersebut tanpa perlu memberi masukan kepada pengirim awal.",
    ],
    optionScores: [1, 2, 5, 4, 3],
    answer: "C",
    explanation:
      "Mengubah foto menjadi satu dokumen PDF rapi agar pekerjaan tim langsung bergerak sekaligus mengusulkan etika berbagi berkas secara santun menyeimbangkan solusi cepat dan perbaikan budaya kerja. Mencari salinan dari notulis lain tanpa menindaklanjuti perbaikan kebiasaan pengiriman dokumen belum mencegah kejadian berulang.",
    tip: "Saat berbagi dokumen di kanal kerja daring, gunakan format PDF terbaca dengan penamaan jelas dan ringkasan konteks isi.",
  },
  {
    id: "tkp-tik-079",
    subPattern: "etika-komunikasi-daring-dan-pelayanan-elektronik",
    difficulty: "sulit",
    prompt:
      "Portal layanan elektronik instansi sudah menyediakan fitur lacak status berkas daring, tetapi warga sering menelepon marah ke pusat bantuan karena status hanya menampilkan istilah birokrasi kaku seperti 'Disposisi Eselon III' tanpa kejelasan waktu maupun langkah berikutnya. Perbaikan komunikasi layanan elektronik paling tepat adalah ...",
    options: [
      "Menonaktifkan fitur pelacakan status berkas untuk sementara waktu agar warga tidak terus-menerus menanyakan arti istilah birokrasi di telepon.",
      "Menambahkan daftar glosarium istilah jabatan struktural di halaman bawah situs web agar warga dapat mencari sendiri arti tiap status.",
      "Meminta petugas pusat bantuan menjawab setiap penelepon dengan sabar bahwa istilah tersebut menandakan berkas sedang diproses pimpinan.",
      "Menerjemahkan status pelacakan ke bahasa publik yang ramah disertai estimasi sisa waktu tiap tahap dan tombol bantuan jika melebihi batas SLA.",
      "Menyederhanakan seluruh tampilan status di portal menjadi dua label saja yaitu 'Sedang Diproses' dan 'Selesai' agar tidak membingungkan warga.",
    ],
    optionScores: [1, 3, 2, 5, 4],
    answer: "D",
    explanation:
      "Menggunakan bahasa ramah pengguna yang transparan mengenai estimasi waktu serta menyediakan tombol tindak lanjut jika melewati batas SLA mengubah pelacakan status menjadi kepastian layanan sejati. Menyederhanakan status menjadi dua label saja memang menghilangkan istilah kaku, tetapi justru mengurangi transparansi tahap dan akuntabilitas waktu layanan.",
    tip: "Transparansi layanan elektronik menuntut bahasa status yang dipahami warga, estimasi waktu jelas, dan jalur eskalasi saat terlambat.",
  },
  {
    id: "tkp-tik-080",
    subPattern: "etika-komunikasi-daring-dan-pelayanan-elektronik",
    difficulty: "sulit",
    prompt:
      "Terjadi gangguan teknis pada peladen pusat nasional selama empat jam yang melumpuhkan layanan daring daerah, memicu gelombang komentar marah warganet di akun media sosial dinas yang menuntut kepastian layanan serta tanggung jawab pimpinan. Strategi komunikasi krisis elektronik paling tepat yang Anda sarankan adalah ...",
    options: [
      "Menutup kolom komentar seluruh akun media sosial resmi instansi selama gangguan berlangsung agar tidak muncul ujaran kebencian lebih luas.",
      "Menyampaikan informasi singkat bahwa gangguan sepenuhnya berasal dari pusat nasional sehingga pemerintah daerah tidak dapat berbuat apa-apa.",
      "Memilih diam tidak mengunggah informasi apa pun di media sosial sambil menunggu seluruh sistem pulih normal terlebih dahulu agar tidak salah ucap.",
      "Mengunggah permohonan maaf resmi di seluruh kanal media sosial dinas dan berjanji akan mengumumkan kembali begitu sistem pusat kembali aktif.",
      "Merilis pembaruan informasi berkala secara jujur dan empatik, mengaktifkan loket atau formulir darurat pencatatan sementara, serta mengumumkan perkembangan pemulihan.",
    ],
    optionScores: [1, 2, 3, 4, 5],
    answer: "E",
    explanation:
      "Komunikasi krisis yang jujur, empatik, dan berkala yang dipadukan dengan penyediaan kanal layanan darurat sementara menjaga kepercayaan publik di tengah gangguan di luar kendali daerah. Meminta maaf dan berjanji mengumumkan saat pulih sudah sopan, tetapi membiarkan warga tanpa solusi darurat maupun kepastian berkala selama jam-jam kritis.",
    tip: "Saat layanan elektronik lumpuh, hadirkan pembaruan berkala yang jujur dan sediakan kanal pencatatan darurat agar publik tetap terlayani.",
  },
];
