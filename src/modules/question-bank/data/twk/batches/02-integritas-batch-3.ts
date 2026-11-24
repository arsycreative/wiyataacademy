import type { QuestionDraft } from "@/modules/question-bank/domain/question";

export const integritasBatch3Drafts: readonly QuestionDraft[] = [
  {
    id: "twk-int-081",
    subPattern: "penalaran-dilema-integritas-digital",
    difficulty: "sedang",
    prompt:
      "Seorang Pejabat Pembuat Komitmen (PPK) di sebuah dinas komunikasi dan informatika sedang melakukan verifikasi pengadaan perangkat jaringan melalui sistem katalog elektronik (e-catalog) pemerintah. Saat menelusuri daftar penyedia yang memenuhi spesifikasi teknis dan harga paling kompetitif, ia mendapati bahwa salah satu penyedia unggulan tersebut memiliki direktur operasional yang merupakan adik iparnya sendiri. Rekan kerjanya berpendapat bahwa selama harga tayang transparan di katalog elektronik dan tidak ada suap, PPK tersebut tetap boleh mengeksekusi transaksi demi mempercepat penyerapan anggaran. Langkah berintegritas yang paling tepat untuk menangani situasi potensi konflik kepentingan tersebut adalah ...",
    options: [
      "Mengungkapkan hubungan afiliasi keluarga tersebut secara tertulis kepada atasan atau Pejabat Penandatangan Kontrak, lalu mengajukan pengunduran diri dari keterlibatan pemilihan dan evaluasi paket terkait",
      "Tetap melaksanakan pembelian melalui e-catalog karena harga barang sudah tercantum secara terbuka sehingga unsur konflik kepentingan dianggap gugur otomatis",
      "Meminta adik iparnya mengganti nama pengurus perusahaan sementara di akta perubahan agar proses e-purchasing berjalan lancar tanpa catatan audit",
      "Memilih penyedia lain yang harganya jauh lebih mahal semata-mata untuk menghindari kecurigaan tanpa menyusun kertas kerja perbandingan objektif",
      "Menyerahkan kata sandi akun e-catalog miliknya kepada staf pelaksana agar transaksi tetap diklik menggunakan identitas pejabat yang sama",
    ],
    answer: "A",
    explanation:
      "Dalam tata kelola pengadaan barang/jasa dan pencegahan konflik kepentingan, potensi benturan kepentingan (hubungan keluarga dengan pengurus penyedia) wajib dideklarasikan secara tertulis dan diikuti penarikan diri dari proses pengambilan keputusan agar objektivitas serta kepercayaan publik terjaga. Keterbukaan harga di e-catalog tidak menghapus risiko perlakuan istimewa dalam negosiasi, pemilihan spesifikasi, maupun penerimaan barang, sedangkan meminjamkan akun digital justru melanggar keamanan dan akuntabilitas sistem.",
    tip: "Ingat prosedur baku konflik kepentingan: deklarasi tertulis secara jujur dan menarik diri dari pengambilan keputusan terkait, meskipun sistemnya sudah digital.",
  },
  {
    id: "twk-int-082",
    subPattern: "penalaran-dilema-integritas-digital",
    difficulty: "sedang",
    prompt:
      "Sehari setelah menyelesaikan audit kepatuhan sistem informasi pada sebuah rumah sakit mitra pemerintah daerah, seorang auditor ASN menerima pesan pribadi berisi kode voucher belanja daring dan tautan klaim saldo dompet digital senilai Rp1.750.000 dari manajer teknologi informasi pihak yang diaudit. Dalam pesannya, pengirim menegaskan bahwa voucher tersebut hanyalah 'apresiasi survei kepuasan mitra' yang rutin dibagikan perusahaan kepada tamu dan tidak dimaksudkan memengaruhi simpulan laporan audit yang sudah final. Auditor tersebut sempat tergoda menggunakannya untuk membeli perlengkapan alat tulis kantor agar tidak dinikmati secara pribadi. Tindakan integritas yang paling sesuai dengan ketentuan pengendalian gratifikasi adalah ...",
    options: [
      "Menukarkan kode voucher tersebut untuk membeli kertas dan tinta kantor karena manfaatnya kembali ke instansi pemerintah",
      "Tidak menukarkan atau mengklaim voucher digital tersebut, menyampaikan penolakan secara tegas dan tertulis kepada pengirim, serta melaporkan upaya pemberian tersebut ke UPG instansi atau KPK",
      "Mengabaikan pesan tanpa melapor dan meneruskan kode voucher kepada tenaga kebersihan kantor sebagai bentuk kepedulian sosial",
      "Mengklaim saldo dompet digital terlebih dahulu lalu menunggu hingga akhir tahun untuk melihat apakah pihak rumah sakit kembali diaudit",
      "Menerima voucher tersebut dengan syarat laporan audit sudah ditandatangani final sehingga tidak ada lagi hubungan kewenangan dengan pihak pemberi",
    ],
    answer: "B",
    explanation:
      "Voucher belanja daring maupun saldo dompet digital yang diberikan oleh pihak yang memiliki hubungan kerja atau sedang/baru saja diaudit merupakan bentuk gratifikasi terselubung era digital yang berhubungan dengan jabatan. Menyalurkan kode tersebut ke pihak lain atau memakainya untuk keperluan kantor berarti tetap menerima dan menguasai manfaat gratifikasi secara tidak sah; sikap tepat adalah menolak tegas, tidak mengklaimnya, dan melaporkannya ke UPG atau KPK.",
    tip: "Kenali bentuk gratifikasi non-tunai digital (voucher, e-wallet, poin hadiah) dari objek audit atau mitra kerja—status hukumnya sama ketat dengan uang tunai.",
  },
  {
    id: "twk-int-083",
    subPattern: "penalaran-dilema-integritas-digital",
    difficulty: "sulit",
    prompt:
      "Menjelang pembukaan tender sistem pemantauan lalu lintas cerdas berbasis kecerdasan artifisial, sebuah dinas perhubungan menerima undangan resmi dari konsorsium penyedia teknologi luar negeri untuk mengikuti pameran dan kunjungan pabrik di Eropa selama lima hari. Konsorsium tersebut menawarkan pembiayaan penuh tiket pesawat kelas bisnis, hotel bintang lima, serta uang saku harian atas nama 'beasiswa studi banding teknologi' dengan surat pengantar yang tampak formal. Beberapa pejabat struktural menilai tawaran tersebut sangat menghemat APBD sekaligus meningkatkan kompetensi pegawai sesuai nilai Kompeten dalam BerAKHLAK. Analisis integritas yang paling akurat terhadap tawaran fasilitas perjalanan tersebut adalah ...",
    options: [
      "Tawaran tersebut sah diterima seluruh pejabat teknis asalkan surat undangan mencantumkan frasa 'beasiswa studi banding' dan tidak disertai penyerahan uang tunai di amplop",
      "Pejabat dapat menerima tiket dan hotel dari vendor asalkan uang saku hariannya ditolak sehingga tidak menimbulkan beban konflik kepentingan saat tender dibuka",
      "Fasilitas perjalanan dan akomodasi yang dibiayai calon penyedia menjelang tender merupakan bentuk gratifikasi terselubung dan benturan kepentingan berat sehingga wajib ditolak",
      "Penerimaan sponsorship perjalanan dibenarkan secara etis apabila dinas berjanji tetap menilai seluruh peserta tender secara objektif saat evaluasi penawaran",
      "Kunjungan pabrik yang dibiayai vendor dapat dilanjutkan cukup dengan mengganti nama peserta perjalanan menjadi staf pelaksana yang tidak duduk di panitia lelang",
    ],
    answer: "C",
    explanation:
      "Pembiayaan tiket, akomodasi, dan uang saku oleh calon penyedia yang berkepentingan dengan pengadaan instansi termasuk kategori gratifikasi terselubung (sponsorship) yang secara langsung menciptakan konflik kepentingan dan merusak asas persaingan sehat. Perubahan label menjadi 'beasiswa studi banding' maupun pengalihan peserta ke staf lain tidak menghapus keterkaitan kepentingan korporasi pemberi dengan keputusan pengadaan dinas.",
    tip: "Waspadai gratifikasi berkedok 'sponsorship', 'beasiswa', atau 'studi banding' yang seluruh biayanya ditanggung oleh calon vendor proyek instansi.",
  },
  {
    id: "twk-int-084",
    subPattern: "penalaran-dilema-integritas-digital",
    difficulty: "sedang",
    prompt:
      "Seorang pejabat struktural eselon III yang termasuk penyelenggara negara wajib lapor Laporan Harta Kekayaan Penyelenggara Negara (LHKPN) baru saja menerima warisan sebidang tanah dari orang tuanya dan pada tahun yang sama membeli sebuah mobil sport mewah secara tunai. Agar total harta yang tercantum pada portal e-LHKPN tidak tampak melonjak drastis dibandingkan penghasilan resminya sebagai ASN, ia memutuskan tidak melaporkan tanah warisan tersebut dan mendaftarkan kepemilikan mobil atas nama anggota keluarga inti yang masih menjadi tanggungannya. Jika ditelaah berdasarkan prinsip transparansi dan akuntabilitas LHKPN, kekeliruan fundamental dalam tindakan pejabat tersebut adalah ...",
    options: [
      "Harta warisan memang tidak perlu dilaporkan dalam e-LHKPN, namun pembelian mobil baru wajib dilaporkan setelah dipakai lebih dari dua tahun",
      "Pelaporan LHKPN cukup mencantumkan aset yang dibeli menggunakan gaji bulanan saja sehingga harta atas nama pasangan atau anak tanggungan berada di luar cakupan pemeriksaan",
      "Pejabat hanya dinilai melanggar ketentuan apabila terlambat mengunggah formulir melewati tenggat Maret, terlepas dari kelengkapan aset yang dicantumkan",
      "Menyembunyikan aset warisan dan menyamarkan kepemilikan harta atas nama keluarga tanggungan melanggar asas kejujuran serta kelengkapan pelaporan LHKPN yang menjadi instrumen uji kewajaran harta penyelenggara negara",
      "Pembelian kendaraan secara tunai tidak wajib dimasukkan ke LHKPN selama pejabat yang bersangkutan belum pernah diperiksa oleh aparat penegak hukum",
    ],
    answer: "D",
    explanation:
      "LHKPN berfungsi sebagai instrumen transparansi dan deteksi dini kewajaran profil kekayaan penyelenggara negara, sehingga seluruh harta milik penyelenggara negara, pasangan, dan anak yang masih menjadi tanggungan—termasuk hasil warisan, hibah, maupun pembelian tunai—wajib dilaporkan secara jujur, lengkap, dan akurat. Menyembunyikan atau menyamarkan aset (nominee) justru mengindikasikan ketidakjujuran integritas dan membuka celah pemeriksaan lanjutan atas asal-usul kekayaan.",
    tip: "Ingat cakupan LHKPN: bukan sekadar tepat waktu mengirim, melainkan jujur dan lengkap melaporkan harta sendiri, pasangan, dan anak tanggungan beserta asal-usulnya.",
  },
  {
    id: "twk-int-085",
    subPattern: "penalaran-dilema-integritas-digital",
    difficulty: "sulit",
    prompt:
      "Menjelang evaluasi tahunan Zona Integritas dan penilaian indikator kinerja yang berpengaruh langsung pada besaran tunjangan kinerja pegawai, seorang kepala bidang meminta analis data ASN memodifikasi kueri pada dasbor aplikasi pengaduan masyarakat. Ia menginstruksikan agar ratusan aduan warga yang belum tuntas melewati batas waktu layanan sementara disembunyikan dari filter rekapitulasi triwulan supaya rasio penyelesaian tampak mencapai 98 persen saat verifikasi tim penilai pusat. Sang atasan berdalih bahwa perubahan tampilan dasbor itu hanya sementara demi nama baik unit kerja dan kesejahteraan seluruh pegawai. Respons yang paling mencerminkan nilai Akuntabel dan integritas ASN berdasarkan UU No. 20 Tahun 2023 adalah ...",
    options: [
      "Menjalankan perintah modifikasi skrip sesuai arahan atasan sambil menyimpan salinan data asli di komputer pribadi sebagai perlindungan diri bila suatu saat diaudit",
      "Mengubah filter tampilan laporan sesuai permintaan untuk menjaga kekompakan tim, lalu diam-diam mengembalikan skrip seperti semula sesudah penilaian selesai",
      "Menolak secara terbuka di media sosial dan mengunggah data mentah keluhan warga ke forum publik agar tim penilai pusat membatalkan predikat instansi",
      "Meminta rekan kerja lain di bidang teknologi informasi yang mengeksekusi perubahan skrip tersebut agar catatan log perubahan akun tidak memuat namanya",
      "Menolak secara santun dan tegas permintaan manipulasi dasbor, menyajikan data capaian riil secara utuh kepada pimpinan, serta mengusulkan rencana percepatan penyelesaian aduan tertunggak",
    ],
    answer: "E",
    explanation:
      "Manipulasi data dasbor kinerja demi mengejar predikat Zona Integritas maupun tunjangan kinerja merupakan bentuk pemalsuan laporan publik yang bertentangan langsung dengan nilai Akuntabel (jujur, bertanggung jawab, cermat, dan berintegritas tinggi) dalam UU No. 20 Tahun 2023. Integritas sejati menuntut keberanian menolak rekayasa data secara santun dan solutif dengan mendorong perbaikan substansi layanan, bukan memoles angka semu atau membocorkan data warga secara tidak prosedural.",
    tip: "Uji setiap pilihan dengan prinsip akuntabilitas data: capaian kinerja harus mencerminkan realitas layanan, bukan hasil manipulasi skrip demi nilai administratif.",
  },
  {
    id: "twk-int-086",
    subPattern: "penalaran-dilema-integritas-digital",
    difficulty: "sedang",
    prompt:
      "Penggunaan katalog elektronik (e-catalog) dan e-purchasing dirancang untuk meningkatkan efisiensi serta transparansi belanja pemerintah, tetapi praktiknya tetap rentan terhadap persekongkolan terselubung apabila tidak disertai kontrol integritas oleh pejabat pengadaan. Cermati langkah-langkah berikut dalam proses e-purchasing instansi pemerintah:\n(1) Mendeklarasikan ada atau tidaknya hubungan afiliasi keluarga dan kepentingan finansial dengan calon penyedia sebelum negosiasi e-purchasing dimulai.\n(2) Menyusun spesifikasi teknis mengarah pada satu merek tertentu milik rekanan lama agar proses pemilihan di e-catalog selesai dalam satu hari tanpa pembandingan.\n(3) Mendokumentasikan kertas kerja pembandingan harga, spesifikasi, ongkos kirim, serta rekam jejak layanan purnajual penyedia secara akuntabel dan dapat diaudit.\n(4) Meminta penyedia meminjamkan perangkat sampel untuk penggunaan pribadi tim teknis sebagai kompensasi waktu evaluasi produk.\n\nKombinasi tindakan yang paling tepat menegakkan integritas pengadaan digital ditunjukkan oleh nomor ...",
    options: [
      "(1) dan (3)",
      "(1) dan (2)",
      "(2) dan (3)",
      "(2) dan (4)",
      "(3) dan (4)",
    ],
    answer: "A",
    explanation:
      "Integritas dalam e-purchasing menuntut deklarasi bebas konflik kepentingan serta dokumentasi kertas kerja pembandingan (mini-kompetisi/referensi harga dan mutu) agar keputusan pemilihan penyedia dapat dipertanggungjawabkan secara audit. Mengunci spesifikasi pada satu merek tanpa dasar teknis yang sah dan meminjam perangkat untuk kepentingan pribadi merupakan pelanggaran asas persaingan sehat serta bentuk gratifikasi fasilitas.",
    tip: "Pada pengadaan berbasis e-catalog, kunci integritas tetap berada pada deklarasi konflik kepentingan dan kertas kerja pembandingan yang objektif serta bisa diaudit.",
  },
  {
    id: "twk-int-087",
    subPattern: "penalaran-dilema-integritas-digital",
    difficulty: "sulit",
    prompt:
      "Seorang staf pengelola keuangan di sebuah unit pelaksana teknis menemukan kejanggalan berulang pada pertanggungjawaban belanja rapat koordinasi daring selama dua triwulan terakhir. Setelah mencocokkan log sistem rapat virtual dengan berkas pencairan, ia mendapati daftar hadir peserta yang dilampirkan merupakan tangkapan layar kegiatan bulan sebelumnya yang diedit tanggalnya untuk mencairkan honorarium narasumber dan paket data fiktif, dan praktik ini diketahui langsung oleh atasan langsungnya. Ia khawatir mengalami intimidasi atau mutasi sepihak jika melaporkan langsung kepada kepala subbagian yang terlibat. Jalur tindakan yang paling tepat dan berintegritas untuk menindaklanjuti temuan tersebut adalah ...",
    options: [
      "Mendiamkan temuan tersebut karena yang bersangkutan masih berstatus pegawai baru dan bukan penanda tangan akhir surat perintah membayar",
      "Mengumpulkan salinan bukti pendukung yang sah secara tertib lalu melaporkannya melalui Whistleblowing System (WBS) resmi Inspektorat atau kanal pengaduan KPK yang menjamin kerahasiaan identitas pelapor",
      "Mengunggah seluruh berkas pencairan dan tangkapan layar daftar hadir ke akun anonim media sosial agar kasusnya viral sebelum diperiksa auditor internal",
      "Menemui bendahara yang terlibat secara empat mata untuk meminta perbaikan laporan di bulan berikutnya asalkan kejanggalan dua triwulan sebelumnya ditutup bersama",
      "Menolak seluruh tugas administrasi keuangan dan mengajukan cuti panjang tanpa melaporkan indikasi penyimpangan agar tidak ikut terseret pemeriksaan",
    ],
    answer: "B",
    explanation:
      "Whistleblowing System (WBS) resmi di Inspektorat Jenderal/APIP maupun kanal pengaduan KPK dirancang khusus untuk menangani dugaan kecurangan yang melibatkan atasan langsung dengan mekanisme penelaahan independen dan perlindungan kerahasiaan pelapor. Sebaliknya, mendiamkan pelanggaran berarti membiarkan kerugian keuangan negara berlanjut, sementara mengunggah dokumen internal mentah ke media sosial berisiko merusak kerahasiaan proses pembuktian serta melanggar etika pengelolaan informasi negara.",
    tip: "Ketika atasan langsung diduga terlibat penyimpangan keuangan, gunakan jalur pelaporan independen resmi (WBS Inspektorat/KPK) dengan bukti sah dan terjaga.",
  },
  {
    id: "twk-int-088",
    subPattern: "penalaran-dilema-integritas-digital",
    difficulty: "sedang",
    prompt:
      "Demi menjaga akuntabilitas layanan kependudukan berbasis digital dan perlindungan data pribadi warga, sebuah dinas menerapkan sistem autentikasi ganda (OTP) serta pencatatan rekam jejak digital (audit trail) bagi setiap ASN operator yang mengakses basis data warga. Seluruh pegawai juga telah menandatangani pakta integritas sesuai kode etik dan nilai Akuntabel dalam UU No. 20 Tahun 2023 tentang ASN. Dari tindakan-tindakan berikut di ruang layanan, perilaku yang paling tidak selaras dengan prinsip integritas dan akuntabilitas akses digital adalah ...",
    options: [
      "Mengunci layar komputer secara otomatis setiap kali meninggalkan meja layanan meskipun hanya untuk mengambil berkas di ruang arsip sebelah",
      "Menolak permintaan kenalan pribadi untuk mengecek alamat domisili dan nomor induk kependudukan seseorang di luar prosedur permohonan layanan resmi",
      "Membagikan kata sandi akun operator dan kode OTP miliknya kepada tenaga magang agar pemrosesan antrean pencetakan dokumen tetap berjalan saat dirinya mengikuti rapat",
      "Segera melapor kepada administrator keamanan sistem ketika melihat notifikasi percobaan masuk mencurigakan pada akun layanan di luar jam kerja",
      "Memverifikasi kesesuaian dokumen fisik pemohon dengan basis data sebelum menyetujui perubahan elemen data penting kependudukan",
    ],
    answer: "C",
    explanation:
      "Berbagi kata sandi dan kode OTP akun layanan kepada pihak lain—termasuk rekan kerja atau tenaga magang dengan alasan mempercepat antrean—merusak akuntabilitas jejak audit (audit trail) dan membuka kerentanan penyalahgunaan data pribadi warga. Setiap tindakan pada sistem digital pemerintah melekat secara hukum pada pemegang kredensial akun tersebut.",
    tip: "Pada soal pengecoh negatif ('paling tidak selaras'), waspadai praktik jalan pintas seperti berbagi akun/OTP yang meruntuhkan pertanggungjawaban jejak digital.",
  },
  {
    id: "twk-int-089",
    subPattern: "penalaran-dilema-integritas-digital",
    difficulty: "sulit",
    prompt:
      "Seorang pejabat pengawas teknis pada lembaga perizinan lingkungan hidup diminta oleh sebuah yayasan kajian independen untuk menjadi 'penasihat akademik' dengan honorarium bulanan tetap serta fasilitas riset yang menarik. Meskipun secara administratif yayasan tersebut terdaftar sebagai lembaga nirlaba, penelusuran awal menunjukkan bahwa lebih dari sembilan puluh persen sumber pendanaan yayasan berasal dari konsorsium perusahaan pertambangan yang dokumen analisis dampak lingkungannya sedang dan akan terus diawasi oleh unit kerja pejabat tersebut. Pejabat itu beranggapan posisi tersebut sah karena ia hanya memberikan pandangan ilmiah umum dan tidak langsung menandatangani izin di atas kertas yayasan. Evaluasi integritas paling tepat atas situasi tersebut adalah ...",
    options: [
      "Posisi penasihat akademik tersebut sepenuhnya bebas konflik kepentingan karena yayasan berbadan hukum nirlaba dan terpisah secara administratif dari perusahaan pertambangan",
      "Penerimaan honorarium bulanan dapat dibenarkan selama pejabat melaporkannya dalam surat pemberitahuan pajak tahunan pribadi secara tertib",
      "Keterlibatan tersebut justru positif bagi negara karena memungkinkan pejabat memperoleh data teknis tambahan dari pihak industri secara lebih cepat",
      "Jabatan berbayar pada lembaga yang didanai pihak terawasi merupakan konflik kepentingan struktural dan gratifikasi terselubung yang mengancam independensi pengawasan sehingga wajib ditolak",
      "Pejabat cukup menandatangani pernyataan pribadi di internal yayasan bahwa honorarium yang diterima tidak akan memengaruhi keputusan pengawasan lingkungan",
    ],
    answer: "D",
    explanation:
      "Konflik kepentingan tidak hanya melihat bentuk badan hukum formal di permukaan, melainkan substansi sumber pendanaan dan relasi pengawasan (beneficial interest). Menerima honorarium rutin dari entitas yang hampir seluruh dananya berasal dari pihak terawasi menciptakan ketergantungan finansial dan konflik kepentingan struktural yang meruntuhkan independensi regulator maupun kepercayaan publik, sekalipun dikemas sebagai kegiatan akademik.",
    tip: "Selalu telusuri siapa penyandang dana sebenarnya di balik lembaga perantara; konflik kepentingan tetap nyata meski disamarkan lewat yayasan atau jabatan akademik.",
  },
  {
    id: "twk-int-090",
    subPattern: "penalaran-dilema-integritas-digital",
    difficulty: "sedang",
    prompt:
      "Saat melakukan verifikasi lapangan untuk pemutakhiran Data Terpadu Kesejahteraan Sosial (DTKS) melalui aplikasi pendataan desa, seorang ASN operator kecamatan mendapati dua kerabat dekat seorang tokoh masyarakat berpengaruh masih tercatat sebagai penerima bantuan pangan dan tunai reguler. Padahal, berdasarkan fakta lapangan yang terdokumentasi, kedua keluarga tersebut telah memiliki usaha toko bangunan yang mapan dan dua kendaraan niaga, sementara masih ada keluarga lansia miskin di dusun sebelah yang belum masuk daftar penerima. Tokoh masyarakat tersebut menghubungi sang operator dan memintanya 'menunda penghapusan nama kerabatnya' hingga penyaluran semester ini selesai demi menjaga keharmonisan hubungan di kecamatan. Sikap yang paling mencerminkan integritas dan akuntabilitas publik ASN adalah ...",
    options: [
      "Menyetujui penundaan pemutakhiran data selama satu semester agar hubungan sosial dengan tokoh masyarakat tetap harmonis dan tidak menimbulkan gesekan",
      "Mempertahankan nama kerabat tokoh tersebut sambil diam-diam menambahkan keluarga lansia miskin meskipun melampaui kuota verifikasi yang disahkan",
      "Menyerahkan keputusan pemutakhiran sepenuhnya kepada tokoh masyarakat setempat sebagai bentuk penghormatan terhadap kearifan lokal",
      "Menghapus seluruh nama penerima bantuan di dusun tersebut untuk sementara waktu supaya tidak dituduh berpihak pada kelompok mana pun",
      "Tetap melakukan pemutakhiran data secara objektif berbasis bukti lapangan melalui mekanisme musyawarah verifikasi resmi agar bantuan tepat sasaran kepada warga yang benar-benar berhak",
    ],
    answer: "E",
    explanation:
      "Integritas dalam pengelolaan data publik dan bantuan sosial menuntut keberpihakan penuh pada kebenaran fakta lapangan serta keadilan bagi warga rentan, bukan kompromi pada tekanan relasi sosial atau figur berpengaruh. Membiarkan penerima yang sudah mampu tetap menerima bansos berarti merampas hak warga miskin yang berhak sekaligus melanggar akuntabilitas penggunaan anggaran negara.",
    tip: "Dahulukan kebenaran data lapangan dan keadilan bagi warga yang benar-benar berhak di atas tekanan relasi sosial atau figur berpengaruh.",
  },
  {
    id: "twk-int-091",
    subPattern: "penalaran-dilema-integritas-digital",
    difficulty: "sulit",
    prompt:
      "Dalam praktik kerja modern, gratifikasi sering kali dikirim tanpa persetujuan penerima—misalnya saldo masuk mendadak ke rekening/dompet digital dari nomor tak dikenal yang kemudian mengaku sebagai mitra proyek, atau kiriman parsel bernilai tinggi yang dititipkan kurir ke rumah saat pejabat sedang bertugas. Perhatikan langkah-langkah penanganan gratifikasi yang tidak dapat ditolak secara langsung berikut:\n(1) Menyimpan bukti transfer, tangkapan layar percakapan, identitas pengirim, serta kronologi penerimaan sebagai dokumen pendukung pelaporan.\n(2) Memanfaatkan dana atau barang kiriman tersebut untuk membiayai kegiatan sosial dan konsumsi rapat rutin bidang agar tetap berguna bagi kantor.\n(3) Melaporkan penerimaan tersebut melalui Unit Pengendalian Gratifikasi (UPG) instansi atau aplikasi Gratifikasi Online (GOL) KPK dalam batas waktu paling lambat 30 hari kerja sejak diterima.\n(4) Mengembalikan uang secara tunai melalui kurir tanpa bukti tanda terima resmi agar tidak tercatat dalam sistem administrasi pengawasan.\n\nKombinasi langkah yang paling sesuai dengan prosedur hukum pengendalian gratifikasi ditunjukkan oleh nomor ...",
    options: [
      "(1) dan (2)",
      "(1) dan (3)",
      "(1) dan (4)",
      "(2) dan (3)",
      "(3) dan (4)",
    ],
    answer: "B",
    explanation:
      "Sesuai Pasal 12C UU No. 20 Tahun 2001 dan mekanisme KPK, gratifikasi yang terlanjur diterima atau tidak dapat ditolak langsung wajib didokumentasikan buktinya dan dilaporkan ke KPK (melalui aplikasi GOL atau berjenjang lewat UPG) paling lambat 30 hari kerja agar status kepemilikannya ditetapkan secara resmi. Menggunakannya untuk kas rapat kantor atau mengembalikannya diam-diam tanpa jejak administrasi tidak menggugurkan risiko hukum gratifikasi.",
    tip: "Ingat dua langkah wajib saat gratifikasi terlanjur diterima: amankan seluruh bukti kronologis dan laporkan resmi lewat UPG/GOL KPK maksimal 30 hari kerja.",
  },
  {
    id: "twk-int-092",
    subPattern: "penalaran-dilema-integritas-digital",
    difficulty: "sedang",
    prompt:
      "Seorang ASN yang menduduki jabatan strategis di dinas penanaman modal dan perizinan terpadu selalu patuh menyampaikan LHKPN setiap tahun sebelum tenggat waktu. Namun, pada akun media sosial publik miliknya dan keluarganya, ia secara rutin memamerkan koleksi jam tangan mewah, tas bermerek luar negeri, serta perjalanan wisata jet pribadi yang belakangan diketahui sebagian dibiayai melalui rekening perusahaan milik pasangan yang juga menjadi konsultan pengurus izin bagi sejumlah investor di wilayah tugasnya. Ketika dikritik publik, ia berdalih bahwa urusan media sosial merupakan ranah privasi dan seluruh kewajiban administratif LHKPN telah dipenuhi. Evaluasi paling tepat dari perspektif integritas ASN dan kode etik BerAKHLAK adalah ...",
    options: [
      "Kritik publik tidak relevan sepanjang pejabat tersebut sudah mendapatkan tanda terima kepatuhan pelaporan LHKPN tepat waktu setiap tahun",
      "Gaya hidup mewah di media sosial merupakan hak pribadi sepenuhnya yang tidak boleh diatur oleh norma etik kepegawaian selama diunggah di luar jam kantor",
      "Kepatuhan administratif LHKPN tidak cukup untuk membuktikan integritas: gaya hidup pamer kemewahan yang tidak selaras dengan prinsip kesederhanaan serta adanya indikasi konflik kepentingan bisnis pasangan meruntuhkan kepercayaan publik dan wajib ditelusuri kewajarannya",
      "Persoalan tersebut cukup diselesaikan dengan mengubah pengaturan akun media sosial menjadi mode privat tanpa perlu memeriksa keterkaitan usaha pasangan dengan layanan perizinan",
      "Perusahaan milik pasangan pejabat bebas menjadi konsultan perizinan di instansi yang sama selama pejabat tersebut tidak menandatangani kuitansi pembayaran jasa konsultansi",
    ],
    answer: "C",
    explanation:
      "Integritas ASN tidak berhenti pada kepatuhan formal menyerahkan LHKPN, melainkan mencakup keselarasan profil kekayaan dengan penghasilan sah, keteladanan hidup sederhana, serta ketiadaan konflik kepentingan melalui usaha keluarga yang bersinggungan langsung dengan kewenangan jabatan. Menyembunyikan akun menjadi privat sama sekali tidak menjawab substansi konflik kepentingan dan ketidakwajaran harta.",
    tip: "Bedakan kepatuhan formal (sekadar lapor LHKPN) dengan integritas substantif (kewajaran asal harta, bebas konflik kepentingan keluarga, dan keteladanan hidup sederhana).",
  },
  {
    id: "twk-int-093",
    subPattern: "penalaran-dilema-integritas-digital",
    difficulty: "sulit",
    prompt:
      "Pemanfaatan kecerdasan artifisial (AI) generatif mulai membantu ASN mempercepat penyusunan draf ringkasan laporan, analisis tren pengaduan, dan penelaahan regulasi. Meski demikian, penggunaan teknologi tersebut tetap harus tunduk pada prinsip akuntabilitas, verifikasi faktual, dan perlindungan kerahasiaan data negara sebagaimana amanat nilai Akuntabel dan Kompeten dalam BerAKHLAK. Dari praktik penggunaan AI berikut di lingkungan instansi pemerintah, tindakan yang paling tidak mencerminkan integritas tata kelola data digital adalah ...",
    options: [
      "Mengunggah dokumen pengaduan warga yang memuat data pribadi sensitif ke platform AI publik tanpa anonimisasi, lalu langsung menyalin kesimpulan AI sebagai dasar surat keputusan resmi tanpa verifikasi data primer",
      "Menggunakan alat AI hanya untuk menyusun kerangka awal paparan menggunakan data agregat terbuka, kemudian memeriksa ulang setiap kutipan pasal pada naskah undang-undang resmi",
      "Menerapkan pedoman internal tentang larangan memasukkan informasi rahasia jabatan dan data identitas penduduk ke layanan pemrosesan pihak ketiga yang belum tersertifikasi keamanannya",
      "Mencantumkan verifikasi sumber data primer secara jelas pada naskah kajian kebijakan sehingga setiap angka dan rujukan hukum tetap dapat dipertanggungjawabkan oleh ASN penyusunnya",
      "Mengikuti pelatihan literasi risiko halusinasi AI dan keamanan informasi agar efisiensi digital berjalan beriringan dengan akurasi serta akuntabilitas keputusan publik",
    ],
    answer: "A",
    explanation:
      "Mengunggah data pribadi sensitif warga ke layanan AI publik melanggar kewajiban menjaga kerahasiaan jabatan dan perlindungan data pribadi, sedangkan menyalin keluaran AI mentah-mentah sebagai dasar keputusan administratif tanpa verifikasi sumber primer melanggar asas kecermatan dan akuntabilitas (karena AI rentan halusinasi pasal maupun angka). Tanggung jawab hukum dan moral keputusan publik selalu melekat pada ASN, bukan pada perangkat lunak.",
    tip: "Pada soal pengecoh negatif terkait AI di birokrasi, kenali dua pelanggaran fatal sekaligus: membocorkan data sensitif ke layanan terbuka dan memakai keluaran AI tanpa verifikasi.",
  },
  {
    id: "twk-int-094",
    subPattern: "penalaran-dilema-integritas-digital",
    difficulty: "sedang",
    prompt:
      "Dalam proses seleksi terbuka jabatan pimpinan tinggi pratama, seorang ASN yang bertugas sebagai sekretaris panitia seleksi diminta secara informal oleh pejabat pembina di atasnya untuk menaikkan sedikit nilai rekam jejak dan bobot wawancara seorang kandidat yang dikenal dekat dengan pimpinan, agar kandidat tersebut masuk ke daftar tiga besar. Pejabat tersebut menekankan bahwa kepatuhan terhadap arahan pimpinan merupakan wujud nyata nilai Loyal dalam BerAKHLAK dan penting untuk menjaga kelancaran koordinasi kerja organisasi. Apabila dikaji berdasarkan UU No. 20 Tahun 2023 tentang ASN dan hakikat nilai Loyal yang berintegritas, penilaian yang paling akurat terhadap dilema tersebut adalah ...",
    options: [
      "Sekretaris panitia wajib menuruti permintaan tersebut karena hierarki birokrasi menempatkan perintah lisan atasan di atas hasil penilaian objektif panitia seleksi",
      "Pengubahan skor diperbolehkan secara terbatas selama selisih penambahannya kurang dari lima poin sehingga tidak terlalu mencolok dalam berita acara seleksi",
      "Nilai Loyal berarti mendahulukan kepentingan kekompakan pimpinan unit di atas sistem merit asalkan kandidat yang dibantu memang berstatus PNS aktif",
      "Nilai Loyal dalam BerAKHLAK merupakan kesetiaan kepada ideologi Pancasila, UUD 1945, NKRI, serta pemerintahan yang sah sesuai koridor hukum—bukan kepatuhan buta pada perintah menyimpang yang merusak sistem merit—sehingga permintaan manipulasi skor wajib ditolak",
      "Sekretaris panitia sebaiknya menyerahkan berita acara kosong kepada atasan agar perubahan nilai diisi langsung oleh pimpinan tanpa melibatkan staf sekretariat",
    ],
    answer: "D",
    explanation:
      "UU No. 20 Tahun 2023 dan panduan perilaku nilai Loyal BerAKHLAK menegaskan bahwa loyalitas ASN ditujukan kepada bangsa, negara, konstitusi, dan aturan hukum, bukan kepatuhan membabi buta terhadap perintah atasan yang melanggar hukum atau merusak sistem merit. Memanipulasi skor seleksi atau menyerahkan berita acara kosong untuk direkayasa sama-sama mencederai integritas dan keadilan meritokrasi.",
    tip: "Ingat batas tegas nilai Loyal BerAKHLAK: loyalitas ASN tunduk pada hukum, konstitusi, dan sistem merit—bukan loyalitas semu pada perintah menyimpang atasan.",
  },
  {
    id: "twk-int-095",
    subPattern: "penalaran-dilema-integritas-digital",
    difficulty: "sulit",
    prompt:
      "Sebuah kementerian baru saja memperbarui sistem pelaporan pelanggaran internal (Whistleblowing System / WBS) berbasis daring untuk mencegah korupsi, pungutan liar, dan penyalahgunaan wewenang di seluruh satuan kerja daerah. Agar WBS benar-benar kredibel, efektif menindak pelanggaran, sekaligus mencegah fitnah tanpa dasar antarpegawai, perhatikan prinsip tata kelola berikut:\n(1) Pelapor menyampaikan indikasi awal yang terukur (unsur apa, siapa, kapan, di mana, dan bagaimana kejadian berlangsung) disertai bukti pendukung yang diperoleh secara sah.\n(2) Pelapor memublikasikan isi aduan dan nama terlapor secara luas di grup percakapan umum kantor sebelum penelaahan awal guna membangun tekanan opini.\n(3) Unit pengelola WBS menjamin kerahasiaan identitas pelapor beritikad baik serta memberikan perlindungan dari segala bentuk tindakan balasan administratif seperti demosi atau mutasi sewenang-wenang.\n(4) Setiap laporan masuk langsung diteruskan kepada atasan langsung terlapor tanpa mekanisme penelaahan independen demi mempercepat klarifikasi internal.\n\nKombinasi prinsip yang paling tepat menjamin integritas dan efektivitas WBS ditunjukkan oleh nomor ...",
    options: [
      "(1) dan (2)",
      "(1) dan (4)",
      "(2) dan (3)",
      "(2) dan (4)",
      "(1) dan (3)",
    ],
    answer: "E",
    explanation:
      "Efektivitas WBS bertumpu pada dua pilar utama: kualitas laporan berbasis fakta dan bukti sah (bukan rumor atau fitnah) serta independensi penanganan disertai jaminan kerahasiaan dan perlindungan pelapor dari retaliasi. Membocorkan laporan ke ruang publik sebelum verifikasi merusak asas praduga tak bersalah dan jejak investigasi, sementara menyerahkan laporan ke atasan terlapor tanpa penyaringan independen berisiko tinggi menimbulkan benturan kepentingan serta pembocoran identitas pelapor.",
    tip: "Kunci WBS yang sehat: laporan terukur berbasis bukti sah (5W+1H) + penanganan independen dengan perlindungan kerahasiaan pelapor dari retaliasi.",
  },
  {
    id: "twk-int-096",
    subPattern: "penalaran-dilema-integritas-digital",
    difficulty: "sedang",
    prompt:
      "Dalam persiapan pengadaan sistem manajemen arsip digital bernilai miliaran rupiah, tim perencana sebuah instansi kesulitan menyusun dokumen Kerangka Acuan Kerja (KAK) dan spesifikasi teknis secara rinci. Melihat kendala tersebut, salah satu perusahaan pengembang perangkat lunak yang berminat mengikuti lelang menawarkan bantuan 'konsultasi gratis' berupa draf spesifikasi teknis lengkap yang secara halus mencantumkan arsitektur fitur eksklusif milik produknya sendiri. Ketua tim perencana menganggap bantuan gratis tersebut sangat menolong karena menghemat waktu penyusunan tanpa mengeluarkan biaya APBN. Risiko integritas paling mendasar apabila draf spesifikasi dari calon penyedia tersebut langsung diadopsi ke dokumen pengadaan adalah ...",
    options: [
      "Proses tender menjadi tidak sah semata-mata karena konsultan tidak menerima honorarium resmi dari anggaran instansi",
      "Terjadinya penguncian spesifikasi (vendor lock-in) yang menghilangkan asas persaingan usaha yang sehat, membuka celah persekongkolan pengadaan, dan berpotensi menyebabkan harga tidak kompetitif yang merugikan negara",
      "Perangkat lunak yang dibeli pasti mengalami kerusakan teknis karena draf spesifikasinya tidak disusun dalam bahasa hukum pengadaan",
      "Instansi akan kehilangan hak cipta atas seluruh arsip surat masuk apabila spesifikasi pengadaan menggunakan istilah teknologi informasi modern",
      "Tim perencana melanggar aturan karena setiap pengadaan perangkat lunak wajib menggunakan sistem buatan mahasiswa magang internal instansi",
    ],
    answer: "B",
    explanation:
      "Menerima draf spesifikasi teknis dari salah satu calon penyedia yang mengarah pada fitur eksklusif produknya merupakan praktik penguncian vendor (vendor lock-in) yang melanggar asas terbuka, adil, dan bersaing dalam pengadaan barang/jasa pemerintah. Meski dikemas sebagai 'bantuan gratis', praktik ini menciptakan ketidaksetaraan informasi, menutup peluang penyedia lain yang mungkin lebih efisien, dan menjadi pintu masuk persekongkolan korupsi pengadaan.",
    tip: "Kenali modus 'bantuan gratis menyusun spesifikasi' dari calon peserta tender sebagai jebakan vendor lock-in yang merusak persaingan sehat.",
  },
  {
    id: "twk-int-097",
    subPattern: "penalaran-dilema-integritas-digital",
    difficulty: "sulit",
    prompt:
      "Instansi pengelola penerimaan negara dan perizinan strategis termasuk sektor berisiko tinggi korupsi sehingga memerlukan penguatan sistem pengendalian internal, pengawasan LHKPN, serta budaya integritas yang konsisten dari pimpinan hingga pelaksana. Dari berbagai langkah evaluasi kebijakan pengendalian integritas berikut, pernyataan yang paling tidak tepat untuk memperkuat akuntabilitas dan pencegahan korupsi pada instansi berisiko tinggi adalah ...",
    options: [
      "Mengintegrasikan pemeriksaan kewajaran profil LHKPN dengan data transaksi aset serta rekam jejak risiko jabatan strategis secara berkala",
      "Menerapkan rotasi jabatan berbasis merit dan pemisahan fungsi (segregation of duties) antara petugas pemeriksa, penilai, dan penentu keputusan akhir",
      "Membangun layanan digital penuh tanpa tatap muka yang tidak perlu guna memperkecil ruang negosiasi transaksional antara petugas dan pemohon",
      "Memusatkan seluruh kewenangan verifikasi, penetapan tarif denda, dan persetujuan pengurangan kewajiban pada satu pejabat tunggal agar layanan berlangsung paling cepat",
      "Menyediakan saluran pengaduan independen yang terhubung dengan unit kepatuhan internal serta menindak tegas setiap pelanggaran kode etik secara transparan",
    ],
    answer: "D",
    explanation:
      "Memusatkan seluruh kewenangan verifikasi, penetapan, dan keringanan kewajiban pada satu pejabat tunggal justru menciptakan monopoli diskresi tanpa pengawasan silang (check and balance) yang merupakan resep klasik terjadinya korupsi (Korupsi = Monopoli + Diskresi - Akuntabilitas). Sebaliknya, integrasi uji kewajaran LHKPN, pemisahan fungsi, layanan digital minim tatap muka, dan kanal pengaduan independen adalah instrumen pengendalian internal yang teruji.",
    tip: "Ingat rumus pencegahan korupsi: hindari konsentrasi monopoli dan diskresi tanpa pemisahan fungsi (segregation of duties) serta pengawasan silang.",
  },
  {
    id: "twk-int-098",
    subPattern: "penalaran-dilema-integritas-digital",
    difficulty: "sedang",
    prompt:
      "Sebuah unit kerja menyelenggarakan rapat koordinasi teknis selama dua hari di hotel dengan pagu anggaran paket pertemuan penuh bagi 60 peserta luring. Pada hari pelaksanaan, karena kendala cuaca dan jadwal dinas, hanya 32 peserta yang hadir secara fisik di lokasi, sementara 28 peserta lainnya mengikuti rangkaian sesi secara daring dari kantor masing-masing. Koordinator kegiatan mengusulkan agar daftar hadir fisik tetap ditandatangani lengkap 60 orang secara menyusul supaya pembayaran paket hotel tetap dicairkan penuh dan selisih dananya dipakai membeli mesin kopi serta perlengkapan ruang kerja unit. Penilaian integritas paling tepat terhadap usulan tersebut adalah ...",
    options: [
      "Usulan tersebut dapat dibenarkan selama selisih dana tidak masuk ke kantong pribadi koordinator melainkan dibelikan inventaris ruang kerja kantor",
      "Penandatanganan daftar hadir menyusul dianggap sah secara administratif karena seluruh 60 peserta memang mengikuti substansi rapat meski sebagian lewat daring",
      "Praktik tersebut merupakan bentuk inovasi fleksibilitas anggaran yang lazim dilakukan menjelang akhir tahun agar pagu kegiatan tidak hangus",
      "Koordinator cukup meminta surat pernyataan dari pihak hotel bahwa 60 paket konsumsi telah disiapkan tanpa perlu menyesuaikan bukti kehadiran riil",
      "Usulan tersebut merupakan pemalsuan dokumen pertanggungjawaban keuangan negara (kegiatan/kehadiran fiktif) yang melanggar hukum dan nilai Akuntabel sehingga wajib ditolak; pembayaran harus disesuaikan dengan realisasi riil yang sah",
    ],
    answer: "E",
    explanation:
      "Rekayasa daftar hadir luring untuk mencairkan biaya peserta yang tidak hadir fisik—meskipun berdalih untuk membeli perlengkapan kantor—tetap merupakan pemalsuan bukti pertanggungjawaban keuangan negara (belanja fiktif / penyimpangan peruntukan anggaran). Dalam hukum keuangan negara dan nilai Akuntabel BerAKHLAK, niat 'untuk kepentingan kantor' tidak pernah membenarkan pemalsuan dokumen maupun pengalihan anggaran di luar ketentuan APBN/APBD.",
    tip: "Ingat kaidah emas akuntabilitas keuangan negara: tujuan yang diklaim 'untuk keperluan kantor' tidak pernah membenarkan pemalsuan daftar hadir atau kuitansi fiktif.",
  },
  {
    id: "twk-int-099",
    subPattern: "penalaran-dilema-integritas-digital",
    difficulty: "sulit",
    prompt:
      "Seorang analis perencanaan tata ruang di badan perencanaan pembangunan daerah mendapatkan akses awal terhadap peta draf penetapan lokasi pembangunan simpang susun jalan tol dan kawasan logistik baru sebelum dokumen tersebut disahkan serta diumumkan kepada masyarakat. Informasi pra-publikasi tersebut memiliki nilai ekonomis sangat tinggi karena akan langsung melambungkan harga tanah di sekitar koridor proyek. Perhatikan tindakan-tindakan berikut terkait pengelolaan informasi strategis jabatan (insider information):\n(1) Menjaga kerahasiaan penuh draf peta penetapan lokasi sesuai klasifikasi informasi jabatan hingga pemerintah mengumumkannya secara resmi dan serentak kepada seluruh publik.\n(2) Menyampaikan bocoran koridor lokasi lebih awal kepada kerabat dekat agar mereka dapat membeli lahan warga setempat sebelum harga pasaran meningkat.\n(3) Menolak secara tegas permintaan makelar tanah yang menawarkan komisi pembebasan lahan sebagai imbalan akses terhadap berkas peta rancangan awal.\n(4) Membagikan tangkapan layar peta rancangan awal di grup komunitas daring warga sebagai wujud inisiatif pribadi atas keterbukaan informasi publik.\n\nKombinasi tindakan yang paling tepat menegakkan integritas dan kerahasiaan jabatan ASN ditunjukkan oleh nomor ...",
    options: [
      "(1) dan (3)",
      "(1) dan (2)",
      "(2) dan (3)",
      "(2) dan (4)",
      "(3) dan (4)",
    ],
    answer: "A",
    explanation:
      "Penyalahgunaan informasi orang dalam (insider information) yang diperoleh karena jabatan untuk menguntungkan kerabat, spekulan tanah, maupun diri sendiri merupakan pelanggaran berat integritas dan konflik kepentingan yang merugikan masyarakat pemilik lahan serta negara. Sementara itu, keterbukaan informasi publik harus berjalan melalui mekanisme pengumuman resmi yang serentak dan setara, bukan pembocoran sepihak atas dokumen draf yang belum disahkan.",
    tip: "Bedakan keterbukaan informasi publik yang resmi dan setara dengan pembocoran informasi orang dalam (insider information) sebelum penetapan sah.",
  },
  {
    id: "twk-int-100",
    subPattern: "penalaran-dilema-integritas-digital",
    difficulty: "sulit",
    prompt:
      "Menjelang penutupan tahun anggaran triwulan IV, seorang pejabat verifikator pengadaan perangkat pembelajaran digital menghadapi dua tekanan berat sekaligus. Di satu sisi, pimpinan unit terus mendesak agar proses e-purchasing segera disetujui minggu ini juga supaya capaian serapan anggaran instansi tidak merosot dan rapor kinerja tahunan tetap hijau. Di sisi lain, penelusuran forensik sederhana yang dilakukan verifikator pada berkas elektronik menemukan indikasi persekongkolan kuat: tiga perusahaan penyedia yang mengajukan penawaran produk identik ternyata memiliki metadata pembuat dokumen yang sama, alamat IP pengunggahan yang identik, serta susunan pengurus yang saling terafiliasi—ditambah salah satu perwakilan penyedia baru saja mengirimkan undangan 'lokakarya sertifikasi gratis di resort pantai' bagi seluruh tim verifikator. Keputusan integritas menyeluruh yang paling tepat diambil verifikator tersebut adalah ...",
    options: [
      "Menyetujui transaksi dengan penyedia berharga paling rendah di antara ketiganya demi memenuhi target serapan anggaran pimpinan, asalkan seluruh tim verifikator menolak undangan resort pantai",
      "Menerima undangan lokakarya di resort sambil menunda penandatanganan kontrak hingga Januari agar dapat mengklarifikasi langsung dugaan afiliasi kepada perwakilan penyedia",
      "Menolak tegas undangan fasilitas resort dan melaporkannya ke UPG, menghentikan sementara proses persetujuan berdasarkan bukti jejak digital indikasi persekongkolan, menyampaikan laporan tertulis objektif kepada pimpinan beserta opsi pengadaan ulang yang bersih, serta meneruskan temuan indikasi kartel ke aparat pengawasan intern (APIP) atau otoritas pengadaan",
      "Mengundurkan diri secara lisan dari tim verifikator tanpa mencatat temuan metadata dan alamat IP di berita acara agar tidak menghambat rapor serapan anggaran unit kerja",
      "Menghapus dua penyedia lain secara diam-diam lalu meloloskan satu penyedia saja dengan syarat mereka memberikan potongan harga tambahan sepuluh persen dari nilai kontrak",
    ],
    answer: "C",
    explanation:
      "Dilema multi-lapis antara target serapan anggaran, indikasi persekongkolan digital (bid rigging lewat metadata dan IP identik), serta upaya gratifikasi fasilitas resort menuntut respons integritas yang utuh: menolak sekaligus melaporkan gratifikasi ke UPG, menahan persetujuan transaksi bermasalah berbasis bukti objektif, melaporkan secara transparan kepada pimpinan dengan solusi prosedural, serta meneruskan indikasi persekongkolan ke APIP/otoritas pengadaan. Mengejar target serapan anggaran tidak pernah boleh mengorbankan prinsip antikorupsi dan persaingan usaha yang sehat.",
    tip: "Pada dilema berlapis (tekanan target serapan + indikasi persekongkolan digital + gratifikasi), pilih solusi menyeluruh yang menutup seluruh celah pelanggaran tanpa kompromi.",
  },
];
