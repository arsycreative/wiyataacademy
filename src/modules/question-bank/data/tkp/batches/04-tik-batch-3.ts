import type { TkpQuestionDraft } from "@/modules/question-bank/domain/question";

export const tikBatch3Drafts: readonly TkpQuestionDraft[] = [
  {
    id: "tkp-tik-081",
    subPattern: "dilema-etika-ai-dan-data-sensitif",
    difficulty: "sedang",
    prompt:
      "Menjelang tenggat rapat pimpinan dua jam lagi, rekan setim Anda berencana mengunggah berkas rekap 400 pengaduan warga—yang masih memuat NIK, alamat rumah, dan nomor ponsel pelapor—ke layanan AI generatif publik agar cepat dirangkum berdasarkan kategori masalah. Sebagai anggota tim pengolah data, sikap paling tepat Anda adalah ...",
    options: [
      "Menghentikan pengunggahan berkas mentah karena melanggar prinsip perlindungan data pribadi (UU PDP), lalu membantu rekan melakukan anonimisasi kolom identitas sebelum memanfaatkan alat ringkasan resmi atau skrip lokal yang aman.",
      "Menyampaikan secara tegas bahwa mengunggah data pribadi warga ke layanan AI publik melanggar ketentuan UU PDP, sehingga seluruh 400 pengaduan harus dikelompokkan secara manual meski berisiko melewati tenggat rapat.",
      "Menyarankan rekan untuk tetap memakai layanan AI publik tersebut asalkan fitur penyimpanan riwayat percakapan dimatikan dan akun segera keluar setelah ringkasan selesai.",
      "Meminta rekan menghapus kolom NIK saja terlebih dahulu sementara nama dan alamat warga dibiarkan agar konteks wilayah pengaduan tetap terbaca oleh AI publik.",
      "Membiarkan rekan mengunggah berkas tersebut demi mengejar tenggat rapat pimpinan, lalu mengingatkan agar lain kali tidak mengulanginya pada dokumen rahasia negara.",
    ],
    optionScores: [5, 4, 3, 2, 1],
    answer: "A",
    explanation:
      "Skor 5 menegakkan kepatuhan ketat terhadap UU Pelindungan Data Pribadi (UU PDP) dengan mencegah kebocoran data warga ke peladen pihak ketiga sekaligus menghadirkan solusi teknis yang adaptif berupa anonimisasi dan pemanfaatan perangkat aman agar tenggat tetap tercapai. Skor 4 patuh pada aturan perlindungan data, tetapi kaku karena menolak seluruh bantuan otomasi aman sehingga mengorbankan ketepatan waktu rapat.",
    tip: "Lindungi data pribadi warga sesuai UU PDP tanpa anti-teknologi: selalu anonimkan identitas sensitif dan prioritaskan perangkat internal resmi.",
  },
  {
    id: "tkp-tik-082",
    subPattern: "dilema-etika-ai-dan-data-sensitif",
    difficulty: "sedang",
    prompt:
      "Dalam rapat daring lintas bidang yang membahas verifikasi keluarga rentan penerima bantuan sosial lengkap dengan kondisi ekonomi dan masalah rumah tangganya, seorang rekan menyambungkan bot notulensi AI pihak ketiga gratis yang otomatis merekam audio serta menyimpan transkrip di peladen luar negeri. Langkah paling tepat Anda saat melihat bot tersebut masuk ke ruang rapat adalah ...",
    options: [
      "Menunggu rapat selesai terlebih dahulu agar tidak memotong paparan pimpinan, lalu mengingatkan rekan secara pribadi supaya menghapus tautan transkrip dari akun bot AI tersebut.",
      "Meminta izin pimpinan rapat untuk segera mengeluarkan bot AI eksternal tersebut demi mematuhi UU PDP, mengusulkan perekaman lokal resmi instansi, dan membantu menyusun notula aman bersama rekan.",
      "Menyampaikan keberatan secara sopan di kolom obrolan rapat dan meminta seluruh peserta tidak menyebutkan nama lengkap warga penerima bantuan selama bot AI masih aktif merekam.",
      "Meminta izin mengeluarkan bot AI eksternal dari ruang rapat karena khawatir melanggar keamanan data, lalu membiarkan rekan mencatat manual seluruh pembahasan sendirian.",
      "Membiarkan bot notulensi AI tetap merekam selama rapat berlangsung karena sangat membantu tim menghasilkan ringkasan cepat dan tautannya tidak dibagikan ke publik.",
    ],
    optionScores: [2, 5, 3, 4, 1],
    answer: "B",
    explanation:
      "Skor 5 sigap mencegah kebocoran data pribadi spesifik warga rentan ke peladen eksternal melalui jalur resmi pimpinan rapat, sekaligus menyediakan alternatif perekaman internal aman dan dukungan kolaboratif bagi rekan. Skor 4 sudah tegas menghentikan risiko kebocoran data di awal rapat, namun kurang kolaboratif menawarkan solusi pengganti yang aman bagi beban kerja notulensi.",
    tip: "Hentikan segera bot perekam AI pihak ketiga pada rapat yang memuat data pribadi warga dan arahkan ke kanal perekaman internal resmi.",
  },
  {
    id: "tkp-tik-083",
    subPattern: "dilema-etika-ai-dan-data-sensitif",
    difficulty: "sulit",
    prompt:
      "Atasan meminta Anda merampungkan draf tanggapan atas puluhan surat keberatan layanan kesehatan warga—yang memuat diagnosis medis dan kondisi finansial keluarga—sebelum pukul 16.00, serta menyarankan agar Anda memanfaatkan layanan chatbot AI publik supaya bahasanya lebih cepat rapi. Sikap paling profesional Anda adalah ...",
    options: [
      "Memenuhi saran atasan dengan menyalin inti surat warga ke chatbot AI publik tanpa mencantumkan nomor surat dinas agar identitas instansi tetap terlindungi.",
      "Menolak saran penggunaan AI publik secara tertulis dan menyampaikan kepada atasan bahwa Anda hanya sanggup menyelesaikan sebagian surat secara manual hingga sore ini.",
      "Menjelaskan secara santun kepada atasan bahwa data kesehatan termasuk data pribadi spesifik dalam UU PDP yang dilarang masuk ke AI publik, lalu menggunakan AI hanya untuk merapikan templat generik tanpa data warga sebelum mengisi rinciannya secara luring.",
      "Tetap menyusun seluruh surat tanggapan secara manual tanpa menggunakan AI publik demi menjaga kerahasiaan data medis warga meski tidak memberi penjelasan kepada atasan mengenai risikonya.",
      "Menggunakan chatbot AI publik versi berbayar milik pribadi agar kerahasiaan data medis warga lebih terjamin dibandingkan layanan versi gratis.",
    ],
    optionScores: [1, 3, 5, 4, 2],
    answer: "C",
    explanation:
      "Skor 5 mengedukasi pimpinan secara santun mengenai status data kesehatan sebagai data pribadi spesifik dalam UU PDP sekaligus menerapkan strategi pemisahan cerdas: memakai AI sebatas untuk struktur templat generik dan mengisi data warga sepenuhnya secara luring. Skor 4 menjaga kerahasiaan data medis warga secara patuh, tetapi melewatkan kesempatan memberi literasi risiko AI kepada pimpinan dan mencari percepatan kerja yang aman.",
    tip: "Pisahkan kerangka bahasa generik dari data pribadi spesifik warga agar produktivitas tetap tinggi tanpa melanggar UU PDP.",
  },
  {
    id: "tkp-tik-084",
    subPattern: "dilema-etika-ai-dan-data-sensitif",
    difficulty: "sulit",
    prompt:
      "Seorang tenaga pengembang proyek mengusulkan menyalin basis data lengkap penerima beasiswa daerah tiga tahun terakhir ke platform LLM publik untuk melatih prototipe asisten tanya-jawab otomatis warga, tanpa meminta persetujuan pemilik data maupun kajian pengelola keamanan informasi instansi. Sebagai penanggung jawab tata kelola data unit, keputusan Anda adalah ...",
    options: [
      "Menyetujui penyalinan basis data penerima beasiswa tersebut khusus untuk uji coba internal selama satu minggu dengan syarat akses tautannya hanya diketahui tim pengembang.",
      "Mengizinkan pengembang mengunggah data angkatan dua tahun lalu saja karena dianggap sudah lulus sehingga risikonya lebih kecil dibanding mahasiswa aktif.",
      "Menolak mentah-mentah seluruh ide pengembangan asisten tanya-jawab berbasis AI agar unit tidak menghadapi risiko kebocoran data pribadi di kemudian hari.",
      "Menolak penggunaan basis data asli warga di LLM publik sesuai UU PDP, lalu memandu tim memakai dokumen FAQ publik serta data sintetis teruji sembari berkoordinasi dengan unit keamanan siber untuk arsitektur yang aman.",
      "Menolak penyalinan basis data asli penerima beasiswa ke platform publik dan meminta pengembang membaca ulang ketentuan UU PDP sebelum mengajukan proposal ulang.",
    ],
    optionScores: [1, 2, 3, 5, 4],
    answer: "D",
    explanation:
      "Skor 5 menjaga kepatuhan hukum pelindungan data pribadi secara mutlak tanpa mematikan inovasi layanan, yakni dengan mengarahkan tim memakai data publik dan data sintetis serta melibatkan unit keamanan siber sejak tahap desain. Skor 4 tegas menegakkan aturan UU PDP, namun belum memberikan arah teknis yang konstruktif agar inovasi layanan tetap dapat berjalan aman.",
    tip: "Dukung inovasi AI layanan publik menggunakan data terbuka atau data sintetis yang telah dikaji tim keamanan siber, bukan basis data pribadi warga.",
  },
  {
    id: "tkp-tik-085",
    subPattern: "dilema-etika-ai-dan-data-sensitif",
    difficulty: "sedang",
    prompt:
      "Saat kepala dinas sedang menghadiri rapat di luar kota, Anda menerima panggilan telepon dari nomor baru yang suaranya sangat identik dengan suara kepala dinas. Penelepon berbicara tergesa-gesa meminta Anda segera membacakan kode OTP token perbankan bendahara dan memproses transfer dana kegiatan darurat dalam lima menit. Tindakan paling tepat Anda adalah ...",
    options: [
      "Segera memproses permintaan tersebut karena mengenali warna suara kepala dinas dan khawatir menghambat agenda darurat pimpinan di luar kota.",
      "Menyampaikan bahwa Anda perlu waktu sepuluh menit untuk mengecek saldo anggaran sambil tetap menyimpan nomor baru tersebut sebagai kontak cadangan pimpinan.",
      "Meminta penelepon mengirimkan pesan tertulis di aplikasi pesan instan sebagai bukti perintah sebelum Anda menghubungi bendahara untuk proses transfer.",
      "Menolak memberikan kode OTP maupun melakukan transfer karena prosedur keuangan melarang perintah lisan dari nomor tak dikenal, lalu menutup telepon.",
      "Menolak permintaan kode OTP dengan tenang, mengakhiri panggilan, melakukan verifikasi balik melalui nomor resmi kepala dinas atau ajudan, serta melaporkan indikasi serangan voice-cloning ke tim CSIRT/TI instansi.",
    ],
    optionScores: [1, 2, 3, 4, 5],
    answer: "E",
    explanation:
      "Skor 5 menerapkan protokol pertahanan berlapis terhadap serangan rekayasa sosial berbasis kloning suara AI: menolak keras penyerahan OTP, melakukan verifikasi lintas kanal resmi, dan segera melapor ke tim tanggap insiden siber agar rekan lain terlindungi. Skor 4 sudah tepat mematuhi SOP keuangan dan tidak tertipu, tetapi berhenti pada proteksi diri tanpa memverifikasi kondisi pimpinan maupun memperingatkan sistem keamanan instansi.",
    tip: "Waspadai kloning suara AI yang mengatasnamakan pimpinan dengan tekanan urgensi; selalu verifikasi lewat kanal resmi dan laporkan ke tim keamanan siber.",
  },
  {
    id: "tkp-tik-086",
    subPattern: "dilema-etika-ai-dan-data-sensitif",
    difficulty: "sedang",
    prompt:
      "Anda menerima pesan video singkat di aplikasi pesan instan yang menampilkan wajah serta suara mirip sekretaris dinas. Dalam video tersebut, sosok pimpinan memerintahkan seluruh pegawai segera mengeklik tautan eksternal pembaruan akses SPBE dan memasukkan nama pengguna serta kata sandi SSO sebelum akun diblokir malam ini. Respons terbaik Anda adalah ...",
    options: [
      "Tidak mengeklik tautan tersebut, mencermati kejanggalan domain serta gerak video, memverifikasi langsung melalui kanal resmi sekretariat dan tim TI, lalu meneruskan peringatan resmi kepada rekan seunit agar tidak menjadi korban.",
      "Mengabaikan pesan video tersebut dan tidak mengeklik tautan karena yakin pimpinan tidak pernah meminta kata sandi SSO lewat tautan eksternal aplikasi pesan instan.",
      "Membuka tautan tersebut sebentar dari peramban ponsel pribadi tanpa memasukkan kata sandi guna memastikan apakah halaman resminya memang sedang bermasalah.",
      "Meneruskan pesan video tersebut ke grup pegawai sambil menanyakan apakah ada rekan lain yang sudah berhasil melakukan pembaruan akun SSO.",
      "Segera mengisi kredensial SSO pada tautan tersebut karena melihat langsung wajah dan mendengar suara sekretaris dinas dalam video perintah resmi.",
    ],
    optionScores: [5, 4, 3, 2, 1],
    answer: "A",
    explanation:
      "Skor 5 menggabungkan kehati-hatian personal terhadap serangan deepfake phishing dengan verifikasi resmi lintas kanal serta aksi cepat melindungi rekan seunit dari ancaman pencurian kredensial SSO. Skor 4 sudah sadar keamanan pribadi sehingga tidak terjebak, tetapi pasif membiarkan risiko pesan berbahaya tersebut terus menyebar ke rekan kerja lain.",
    tip: "Video mirip pimpinan bisa merupakan deepfake phishing; jangan klik tautan, verifikasi lewat kanal resmi, dan segera peringatkan tim melalui saluran TI.",
  },
  {
    id: "tkp-tik-087",
    subPattern: "dilema-etika-ai-dan-data-sensitif",
    difficulty: "sulit",
    prompt:
      "Di ruang kerja sebelah, Anda melihat seorang staf keuangan junior tampak panik dan hampir mengirimkan file daftar rekening beserta rincian gaji seluruh pegawai karena baru saja ditelepon seseorang bersuara persis pejabat pembuat komitmen (PPK) yang memarahinya agar segera mengirim data ke alamat surel pribadi eksternal. Sikap paling tepat Anda adalah ...",
    options: [
      "Mengingatkan staf junior tersebut agar memeriksa kembali format lampiran datanya dan meminta tanda tangan persetujuan atasan langsung setelah surel terkirim.",
      "Menenangkannya untuk menahan pengiriman sementara, mendampingi verifikasi langsung ke PPK melalui saluran internal resmi, lalu bersama-sama melaporkan percobaan penipuan deepfake tersebut ke tim keamanan siber dan pimpinan.",
      "Meminta staf junior tersebut menunda pengiriman file selama lima menit dan menyuruhnya mengirim pesan balik ke nomor penelepon untuk meminta surat tugas resmi.",
      "Langsung meminta staf junior tersebut menutup jendela surel dan melarangnya mengirim daftar gaji pegawai ke alamat surel di luar domain resmi pemerintah.",
      "Tidak ikut campur karena urusan data gaji merupakan kewenangan penuh bagian keuangan yang biasanya memang sering diminta mendadak oleh PPK.",
    ],
    optionScores: [2, 5, 3, 4, 1],
    answer: "B",
    explanation:
      "Skor 5 mengintervensi situasi kritis dengan empati dan ketenangan, memutus tekanan psikologis pelaku rekayasa sosial lewat verifikasi kanal resmi ke PPK, serta menuntaskannya dengan pelaporan insiden siber agar pola serangan terdeteksi instansi. Skor 4 berhasil mencegah kebocoran data seketika sesuai SOP domain resmi, tetapi belum menuntaskan verifikasi dan pelaporan insiden secara menyeluruh.",
    tip: "Tekanan marah dan tenggat mendadak adalah ciri klasik social engineering; tenangkan rekan, tahan pengiriman, verifikasi kanal resmi, dan laporkan insiden.",
  },
  {
    id: "tkp-tik-088",
    subPattern: "dilema-etika-ai-dan-data-sensitif",
    difficulty: "sulit",
    prompt:
      "Kotak masuk surel dinas Anda menerima pesan berjudul 'Daftar Mutasi Mendesak—Arahan Pimpinan' berlogo instansi resmi dengan lampiran berkas makro yang dikirim dari alamat domain yang nyaris identik namun berbeda satu huruf dari domain resmi pemerintah. Beberapa rekan seruangan ternyata juga menerimanya dan hendak membuka lampiran tersebut. Tindakan paling tepat Anda adalah ...",
    options: [
      "Mengunduh lampiran tersebut ke komputer kantor tanpa mengaktifkan fitur makro terlebih dahulu untuk mengecek apakah daftar mutasi tersebut asli.",
      "Meneruskan surel tersebut kepada staf tata usaha pimpinan untuk menanyakan kebenaran isi daftar mutasi sambil menyertakan lampirannya.",
      "Melarang rekan membuka lampiran, mengingatkan kejanggalan alamat domain tiruan (typosquatting), segera melaporkan header surel ke tim keamanan TI untuk pemblokiran massal, serta mengonfirmasi ke bagian kepegawaian.",
      "Menghapus surel tersebut dari kotak masuk pribadi Anda dan mengingatkan dua rekan di meja terdekat bahwa alamat pengirimnya terlihat mencurigakan.",
      "Membuka lampiran tersebut karena merasa perlu segera mengetahui kemungkinan mutasi pegawai di unit kerja sendiri sebelum diumumkan resmi.",
    ],
    optionScores: [2, 3, 5, 4, 1],
    answer: "C",
    explanation:
      "Skor 5 merespons serangan spear-phishing berkedok mutasi secara cepat dan sistemik: menghentikan potensi infeksi malware di lingkungan sekitar, mengirim bukti teknis (header surel) ke tim TI untuk pemblokiran menyeluruh, dan melakukan konfirmasi ke unit kepegawaian. Skor 4 sudah jeli mengenali domain palsu dan mengingatkan rekan terdekat, tetapi tidak melaporkan ke tim TI sehingga unit lain tetap rentan terinfeksi.",
    tip: "Periksa presisi alamat domain pengirim surel; saat menemukan phishing berlampiran makro, jangan dibuka dan segera laporkan ke tim TI untuk blokir massal.",
  },
  {
    id: "tkp-tik-089",
    subPattern: "dilema-etika-ai-dan-data-sensitif",
    difficulty: "sedang",
    prompt:
      "Saat menyunting draf Laporan Kinerja Instansi Pemerintah (LAKIP) yang penyusunan awalnya dibantu asisten AI internal resmi, Anda menemukan satu paragraf yang mencantumkan nomor peraturan menteri dan angka persentase capaian yang terdengar sangat meyakinkan, tetapi setelah dicek sekilas tidak sesuai dengan tabel realisasi primer unit Anda. Langkah terbaik Anda adalah ...",
    options: [
      "Mempertahankan nomor peraturan dan angka tersebut karena dihasilkan oleh sistem AI internal resmi instansi yang dianggap sudah terhubung dengan basis data kinerja.",
      "Menghapus satu paragraf tersebut sepenuhnya agar tidak menimbulkan risiko kesalahan tanpa perlu mengecek ulang bagian lain dari draf laporan.",
      "Mengganti angka persentase saja sesuai tabel realisasi primer sementara nomor peraturan menteri dibiarkan karena dianggap hanya referensi pendukung.",
      "Mengaudit ulang seluruh kutipan regulasi dan angka dalam draf terhadap dokumen primer JDIH serta tabel realisasi, mengoreksi temuan halusinasi AI, dan mencatatkan pola kesalahannya sebagai bahan evaluasi tim.",
      "Mengecek ulang dan memperbaiki nomor peraturan serta angka persentase pada paragraf tersebut berdasarkan dokumen resmi agar data laporan kinerja tetap akurat.",
    ],
    optionScores: [1, 2, 3, 5, 4],
    answer: "D",
    explanation:
      "Skor 5 memahami sifat halusinasi LLM sehingga tidak berhenti memperbaiki satu paragraf yang kebetulan terlihat, melainkan melakukan audit menyeluruh terhadap seluruh rujukan dan angka di draf serta mendokumentasikan temuan untuk meningkatkan kualitas verifikasi tim. Skor 4 sudah teliti memperbaiki kekeliruan pada paragraf yang ditemukan, namun melewatkan risiko halusinasi tersembunyi di bagian laporan lainnya.",
    tip: "Satu temuan halusinasi AI adalah sinyal untuk mengaudit seluruh angka dan dasar hukum dalam draf terhadap sumber primer resmi.",
  },
  {
    id: "tkp-tik-090",
    subPattern: "dilema-etika-ai-dan-data-sensitif",
    difficulty: "sedang",
    prompt:
      "Sehari sebelum paparan resmi di hadapan pimpinan dan mitra lintas instansi, Anda menemukan bahwa draf naskah kajian kebijakan yang dikerjakan seorang anggota tim memakai bantuan AI generatif ternyata memuat beberapa rujukan data BPS dan judul jurnal ilmiah fiktif yang tidak pernah diterbitkan. Sikap paling bertanggung jawab Anda sebagai ketua tim adalah ...",
    options: [
      "Tetap menyajikan paparan tersebut dengan menghilangkan halaman daftar pustaka di salindia agar mitra lintas instansi tidak mempertanyakan rujukan fiktifnya.",
      "Menegur keras anggota tim tersebut di grup kerja dan memintanya bertanggung jawab penuh apabila peserta paparan besok menemukan kesalahan data.",
      "Menghapus bagian kutipan yang mencurigakan saja lalu menyederhanakan isi paparan menjadi poin-poin opini umum tanpa dukungan data statistik.",
      "Menemui anggota tim secara pribadi, memintanya segera mengganti seluruh rujukan fiktif dengan sumber resmi BPS dan jurnal valid sebelum paparan besok pagi.",
      "Mengajak anggota tim segera memverifikasi ulang seluruh data kajian ke sumber primer resmi secara bersama-sama, memperbaiki substansi paparan sebelum tenggat, dan menetapkan daftar periksa verifikasi fakta untuk penggunaan AI tim.",
    ],
    optionScores: [1, 2, 3, 4, 5],
    answer: "E",
    explanation:
      "Skor 5 memadukan akuntabilitas publik dan kepemimpinan kolaboratif: turun tangan memastikan integritas data kajian sebelum dipaparkan sekaligus membangun pagar sistemik (daftar periksa verifikasi fakta) agar halusinasi AI tidak berulang. Skor 4 sudah menjaga etika komunikasi pribadi dan menuntut perbaikan ke sumber valid, tetapi melepas beban perbaikan mendesak sendirian tanpa membangun pencegahan di tingkat tim.",
    tip: "Tanggung jawab akurasi naskah berbantuan AI tetap ada pada manusia; verifikasi tuntas ke sumber primer dan terapkan daftar periksa fakta tim.",
  },
  {
    id: "tkp-tik-091",
    subPattern: "dilema-etika-ai-dan-data-sensitif",
    difficulty: "sulit",
    prompt:
      "Fitur analitik otomatis berbasis AI pada dasbor kinerja instansi menampilkan lonjakan realisasi serapan anggaran sebesar 14 persen lebih tinggi daripada catatan manual keuangan. Setelah ditelusuri, AI salah membaca baris rekapitulasi duplikat dari bulan sebelumnya. Rekan Anda menyarankan memakai angka dasbor dulu untuk laporan triwulan besok dan memperbaikinya di triwulan depan agar performa unit tampak optimal. Sikap paling tepat Anda adalah ...",
    options: [
      "Menolak penggunaan angka keliru tersebut, menyajikan data realisasi terverifikasi sesuai bukti keuangan resmi beserta catatan anomali sistem, serta melapor ke tim pengelola dasbor agar logika agregasi AI segera diperbaiki.",
      "Menolak saran rekan dan mengganti angka laporan triwulan secara manual dengan catatan keuangan yang benar agar unit tidak menyampaikan data serapan yang menyesatkan.",
      "Tetap melampirkan angka dari dasbor AI sesuai standar sistem pelaporan elektronik, namun menyisipkan catatan kaki kecil bahwa angka masih dalam proses rekonsiliasi.",
      "Menunda pengumpulan laporan triwulan hingga tim pengelola dasbor AI selesai memperbaiki kesalahan pembacaan baris duplikat meski melewati batas waktu pelaporan.",
      "Mengikuti saran rekan untuk memakai angka dasbor sementara waktu karena dasbor tersebut merupakan aplikasi resmi dan selisihnya akan terkoreksi otomatis pada laporan tahunan.",
    ],
    optionScores: [5, 4, 3, 2, 1],
    answer: "A",
    explanation:
      "Skor 5 menegakkan integritas data kinerja secara utuh: menolak manipulasi capaian semu, melaporkan angka sah secara transparan tepat waktu, dan menindaklanjuti perbaikan akar masalah teknis pada algoritma dasbor. Skor 4 sudah berintegritas tinggi menjaga kebenaran angka laporan unitnya, tetapi belum mendorong perbaikan celah sistemik pada dasbor AI yang juga dipakai unit lain.",
    tip: "Jangan pernah mengorbankan akurasi data kinerja demi citra capaian; laporkan data sah terverifikasi dan perbaiki akar galat sistemnya.",
  },
  {
    id: "tkp-tik-092",
    subPattern: "dilema-etika-ai-dan-data-sensitif",
    difficulty: "sedang",
    prompt:
      "Sebagai anggota tim kehumasan, Anda menerima draf siaran pers yang disusun dengan bantuan asisten penulisan AI dari transkrip konferensi pers. Saat menelaah ulang, Anda mendapati AI menyisipkan satu kalimat kutipan langsung yang terdengar sangat inspiratif atas nama kepala dinas, padahal kalimat tersebut tidak pernah diucapkan dalam rekaman asli. Tindakan terbaik Anda adalah ...",
    options: [
      "Menghapus kalimat kutipan fiktif tersebut lalu menerbitkan siaran pers menggunakan poin ringkasan lain dari draf AI agar rilis berita tidak terlambat tayang.",
      "Mencocokkan ulang seluruh kutipan dan fakta draf terhadap rekaman asli, mengganti bagian rekaan dengan kutipan autentik yang terverifikasi, serta mengajukan persetujuan akhir pimpinan sebelum publikasi.",
      "Menanyakan kepada kepala dinas apakah beliau bersedia mengesahkan kalimat kutipan buatan AI tersebut karena isinya terdengar lebih kuat untuk citra publik instansi.",
      "Mengubah kutipan langsung tersebut menjadi kalimat narasi tidak langsung tanpa tanda petik agar tetap bisa dipakai tanpa melanggar etika pengutipan.",
      "Tetap menayangkan kutipan tersebut karena maknanya masih sejalan dengan arah kebijakan kepala dinas dan membuat siaran pers lebih menarik dibaca media.",
    ],
    optionScores: [4, 5, 3, 2, 1],
    answer: "B",
    explanation:
      "Skor 5 menjaga etika komunikasi publik dan kredibilitas pejabat secara menyeluruh melalui pemeriksaan penuh terhadap rekaman asli, penggunaan kutipan autentik, dan verifikasi persetujuan akhir sebelum rilis. Skor 4 sudah sigap menghapus kutipan fiktif yang terlihat, namun belum memeriksa potensi rekaan lain di sisa draf maupun memastikan pengesahan akhir pimpinan.",
    tip: "Kutipan pejabat publik tidak boleh direka oleh AI; selalu cocokkan seluruh isi draf terhadap rekaman asli dan pastikan persetujuan final.",
  },
  {
    id: "tkp-tik-093",
    subPattern: "dilema-etika-ai-dan-data-sensitif",
    difficulty: "sedang",
    prompt:
      "Instansi Anda baru saja menyelesaikan migrasi pelaporan ke dashboard terintegrasi yang mewajibkan autentikasi dua faktor (MFA) dan pergantian kata sandi berkala. Saat melewati meja seorang rekan senior yang dikenal sangat berdedikasi, Anda melihat beliau menempelkan kertas catatan berisi nama pengguna, kata sandi, dan kode cadangan MFA di tepi layar monitor agar tidak lupa. Langkah paling tepat Anda adalah ...",
    options: [
      "Membiarkan catatan tersebut karena meja rekan senior berada di ruang kerja terbatas yang hanya dimasuki sesama pegawai satu bidang.",
      "Melepaskan kertas tempel tersebut saat beliau sedang ke luar ruangan lalu menitipkannya di laci meja agar tidak terbaca oleh tamu dinas.",
      "Menyapa beliau dengan hormat, menjelaskan risiko kebocoran akses jika catatan terlihat orang lain atau terekam kamera, lalu mendampingi memasang pengelola kata sandi resmi dan cara praktis memakai aplikasi autentikator.",
      "Mengingatkan beliau secara sopan mengenai risiko keamanan menempelkan kata sandi di monitor dan menyarankan agar catatan tersebut disimpan di buku agenda pribadi yang terkunci.",
      "Melaporkan temuan pelanggaran keamanan informasi tersebut langsung ke tim audit internal TI agar seluruh pegawai mendapat surat teguran resmi.",
    ],
    optionScores: [1, 2, 5, 4, 3],
    answer: "C",
    explanation:
      "Skor 5 memadukan penghormatan kepada pegawai senior dengan pemberdayaan literasi keamanan siber yang praktis—menjelaskan risiko nyata dan mendampingi langsung penggunaan pengelola kata sandi serta autentikator resmi agar kebiasaannya berubah secara nyaman. Skor 4 sudah sopan mengedukasi risiko keamanan dan memberi saran penyimpanan lebih aman, namun belum membantu rekan senior menguasai alat bantu digital yang sesuai standar keamanan modern.",
    tip: "Tingkatkan literasi keamanan siber rekan senior dengan pendekatan empatik dan pendampingan langsung memakai alat bantu autentikasi yang mudah digunakan.",
  },
  {
    id: "tkp-tik-094",
    subPattern: "dilema-etika-ai-dan-data-sensitif",
    difficulty: "sulit",
    prompt:
      "Menjelang tenggat migrasi data lintas seksi ke dashboard terintegrasi, seorang pegawai senior yang terbiasa memakai lembar kerja manual kewalahan memahami antarmuka baru. Beliau pun meminta staf junior menggunakan akun login pribadinya untuk menginput dan menyetujui data atas namanya agar target unit tidak terlambat. Sebagai koordinator migrasi unit, tindakan paling tepat Anda adalah ...",
    options: [
      "Mengizinkan staf junior memakai akun senior tersebut khusus selama masa transisi minggu ini dengan pengawasan Anda agar laporan unit selesai tepat waktu.",
      "Menegur keras pegawai senior tersebut di rapat unit karena tindakan berbagi akun melanggar kode etik keamanan siber dan jejak audit sistem.",
      "Mengambil alih seluruh berkas manual pegawai senior tersebut untuk Anda masukkan sendiri menggunakan akun koordinator agar tidak terjadi berbagi kata sandi.",
      "Menjelaskan secara santun bahwa berbagi akun melanggar akuntabilitas jejak audit (audit trail), segera mengganti kata sandi jika sudah terlanjur dibagikan, lalu mengatur pendampingan kerja berdampingan serta penugasan peran operator resmi sesuai hak akses.",
      "Mengingatkan pegawai senior dan staf junior secara pribadi bahwa setiap pegawai dilarang saling meminjamkan akun login, lalu meminta senior tersebut mempelajari panduan video yang sudah dibagikan tim TI.",
    ],
    optionScores: [1, 2, 3, 5, 4],
    answer: "D",
    explanation:
      "Skor 5 menjaga integritas jejak audit dan prinsip hak akses minimal (least privilege) tanpa mempermalukan rekan senior, yakni dengan memulihkan keamanan kredensial, menyiapkan pendampingan langsung, dan memanfaatkan mekanisme delegasi peran operator yang sah. Skor 4 sudah tegas dan santun melarang berbagi akun secara personal, tetapi menyerahkan proses belajar secara mandiri di tengah tenggat ketat sehingga hambatan teknis belum teratasi.",
    tip: "Akun sistem pemerintah melekat pada tanggung jawab hukum (audit trail); cegah berbagi akun dengan pendampingan langsung dan pemanfaatan peran operator resmi.",
  },
  {
    id: "tkp-tik-095",
    subPattern: "dilema-etika-ai-dan-data-sensitif",
    difficulty: "sulit",
    prompt:
      "Pasca-migrasi ke dashboard terintegrasi, beberapa rekan senior masih terbiasa mengunduh ekspor data mentah penerima layanan lengkap ke diska lepas (flashdisk) pribadi untuk dilanjutkan lembur di komputer rumah yang tidak terenkripsi dan dipakai bersama anggota keluarga. Mereka melakukannya demi menjaga ketepatan waktu pekerjaan. Sikap paling tepat Anda sebagai rekan sekaligus penggerak transformasi digital unit adalah ...",
    options: [
      "Memaklumi kebiasaan tersebut selama mereka berjanji menghapus berkas data warga dari komputer rumah setelah pekerjaan lembur selesai.",
      "Mengusulkan kepada pimpinan agar fitur unduh data pada dashboard langsung dimatikan untuk seluruh pegawai tanpa pemberitahuan sebelumnya.",
      "Menyarankan rekan senior agar memberi kata sandi sederhana pada berkas lembar kerja sebelum menyalinnya ke diska lepas pribadi untuk dibawa pulang.",
      "Mengingatkan rekan senior secara ramah tentang risiko kehilangan diska lepas dan kebocoran data warga di perangkat pribadi, lalu menyarankan agar pekerjaan diselesaikan di komputer kantor saja.",
      "Mengapresiasi dedikasi mereka terlebih dahulu, menjelaskan risiko UU PDP serta pencurian data pada perangkat tidak terenkripsi, lalu memfasilitasi pelatihan akses kerja jarak jauh resmi (VPN/ruang kerja awan terotorisasi) dan pengaturan beban kerja agar migrasi berjalan aman.",
    ],
    optionScores: [1, 2, 3, 4, 5],
    answer: "E",
    explanation:
      "Skor 5 menghargai etos kerja rekan senior sambil menuntaskan celah kebocoran data secara sistemik melalui literasi risiko perangkat pribadi, fasilitasi akses jarak jauh resmi yang aman, serta penataan alur kerja agar tidak bergantung pada diska lepas pribadi. Skor 4 sudah santun mengedukasi bahaya kebocoran data dan melarang pemakaian perangkat pribadi, tetapi belum menyediakan solusi teknis dan manajemen kerja bagi kebutuhan penyelesaian tugas mereka.",
    tip: "Hentikan kebiasaan membawa data warga di flashdisk pribadi dengan mengedukasi risiko UU PDP sekaligus membuka akses kerja aman yang resmi.",
  },
];
