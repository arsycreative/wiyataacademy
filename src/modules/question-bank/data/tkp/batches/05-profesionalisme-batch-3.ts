import type { TkpQuestionDraft } from "@/modules/question-bank/domain/question";

export const profesionalismeBatch3Drafts: readonly TkpQuestionDraft[] = [
  {
    id: "tkp-pro-081",
    subPattern: "dilema-integritas-kinerja-dan-tekanan-atasan",
    difficulty: "sedang",
    prompt:
      "Pada pukul 10.00, Kepala Bidang Anda menugaskan finalisasi bahan paparan rapat evaluasi anggaran yang wajib dikirim ke Sekretariat Daerah pukul 15.00. Dua puluh menit kemudian, Sekretaris Dinas memanggil langsung dan meminta rekap data capaian layanan triwulanan selesai pukul 14.30 untuk bahan jawaban mendadak DPRD. Kedua pekerjaan membutuhkan verifikasi angka rinci yang tidak mungkin selesai sempurna bila dikerjakan sendirian tanpa penyesuaian. Langkah profesional paling tepat adalah ...",
    options: [
      "Memetakan estimasi waktu dan tingkat urgensi kedua berkas secara tertulis, lalu segera berkoordinasi dengan Kepala Bidang dan Sekretaris Dinas untuk menyepakati urutan prioritas serta opsi dukungan personel.",
      "Menyelesaikan rekap data untuk Sekretaris Dinas terlebih dahulu karena jabatannya lebih tinggi dan tenggatnya lebih awal, lalu melaporkan kepada Kepala Bidang bahwa bahan paparan baru bisa dikirim setelahnya.",
      "Mengerjakan bahan paparan Kepala Bidang sesuai urutan masuk disposisi resmi, kemudian meminta izin kepada Sekretaris Dinas agar rekap data DPRD dikirim menyusul pada akhir jam kerja.",
      "Mengerjakan kedua berkas secara paralel dengan memangkas tahap pemeriksaan silang agar keduanya tetap terkirim sebelum pukul 14.30 dan 15.00 meskipun berisiko menyisakan selisih data.",
      "Menyerahkan salah satu berkas kepada staf magang yang baru bergabung agar kedua pejabat merasa permintaannya langsung ditindaklanjuti tanpa perlu ada diskusi penjadwalan ulang.",
    ],
    optionScores: [5, 4, 3, 2, 1],
    answer: "A",
    explanation:
      "Ketika dua pejabat berbeda memberi tenggat mendesak yang saling berbenturan, sikap paling profesional adalah memetakan beban kerja secara objektif lalu menjembatani koordinasi antarpejabat untuk menyepakati prioritas sekaligus dukungan tim agar mutu data tetap terjaga. Langsung mendahulukan pejabat yang lebih tinggi lalu melapor ke atasan langsung memang tampak tertib hierarki, namun bersifat sepihak dan belum membuka peluang pembagian beban kerja supaya kedua target strategis sama-sama aman.",
    tip: "Saat dua atasan memberi tenggat krusial bersamaan, hindari keputusan sepihak; sajikan pemetaan beban objektif dan fasilitasi kesepakatan prioritas lintas pejabat.",
  },
  {
    id: "tkp-pro-082",
    subPattern: "dilema-integritas-kinerja-dan-tekanan-atasan",
    difficulty: "sedang",
    prompt:
      "Lima belas menit sebelum Kepala Dinas menandatangani laporan pertanggungjawaban program bantuan alat produksi UMKM untuk dikirim ke inspektorat, Anda menemukan kesalahan rumus penjumlahan pada lampiran penerima yang membuat total realisasi lebih tinggi Rp42 juta dari kuitansi sah. Rekan penyusun mengingatkan bahwa bila laporan ditarik sekarang, pengiriman bisa mundur hingga sore dan berpotensi memicu teguran pimpinan. Sikap Anda adalah ...",
    options: [
      "Tetap menunda penandatanganan dengan menarik berkas dari meja sekretaris pimpinan secara langsung, lalu memperbaiki kesalahan rumus tersebut sendiri hingga selesai baru melapor setelah berkas bersih.",
      "Segera menyampaikan temuan selisih nominal beserta bukti kuitansi secara santun kepada Kepala Dinas, mengajukan penarikan sementara berkas, dan langsung memimpin koreksi bersama rekan penyusun agar terkirim akurat hari itu juga.",
      "Membiarkan berkas ditandatangani terlebih dahulu agar jadwal pengiriman ke inspektorat tidak terganggu, lalu menyiapkan nota ralat angka untuk dikirimkan secara terpisah pada keesokan harinya.",
      "Meminta rekan penyusun yang membuat rumus keliru tersebut untuk menghadap Kepala Dinas seorang diri agar tanggung jawab kesalahan tercatat jelas pada pelaksana yang bersangkutan.",
      "Menyesuaikan kolom keterangan pada lampiran agar selisih Rp42 juta tercatat sebagai cadangan biaya distribusi sehingga angka total tidak perlu diubah menjelang tanda tangan.",
    ],
    optionScores: [4, 5, 2, 3, 1],
    answer: "B",
    explanation:
      "Akuntabilitas laporan keuangan negara tidak boleh dikompromikan oleh tekanan jadwal; melapor secara transparan berbasis bukti, menarik sementara berkas, dan langsung mengawal koreksi bersama tim melindungi pimpinan dari risiko hukum sekaligus menyelesaikan masalah secara konstruktif. Menarik berkas diam-diam dari meja sekretaris lalu memperbaikinya sendiri memang mencegah tanda tangan keliru, tetapi kurang transparan dalam alur persetujuan dan menunda informasi penting yang perlu diketahui pimpinan.",
    tip: "Kesalahan data finansial sebelum tanda tangan pimpinan wajib dibuka secara transparan disertai rencana koreksi cepat, bukan ditutupi atau ditunda dengan ralat susulan.",
  },
  {
    id: "tkp-pro-083",
    subPattern: "dilema-integritas-kinerja-dan-tekanan-atasan",
    difficulty: "sulit",
    prompt:
      "Anda ditunjuk menjadi ketua tim pemeriksa kepatuhan standar operasional pelayanan perizinan internal. Saat audit sampel berjalan, Anda mendapati sahabat karib Anda—yang selama ini banyak membantu saat Anda awal bertugas—rutin melewati tahap verifikasi lapangan untuk pemohon langganan demi mengejar target kecepatan layanan. Ia memohon secara pribadi agar temuan itu cukup diberi catatan lisan saja karena belum pernah ada komplain warga. Keputusan Anda adalah ...",
    options: [
      "Mencatat temuan pelanggaran tersebut secara objektif dalam berita acara audit sesuai prosedur, tanpa perlu berdiskusi terlebih dahulu dengannya agar tidak terpengaruh kedekatan emosional.",
      "Memberinya kesempatan tiga hari untuk melengkapi berita acara verifikasi lapangan secara surut sebelum hasil audit diserahkan, sehingga ia tetap patuh prosedur tanpa mencoreng rekam jejaknya.",
      "Menyampaikan secara tegas namun empatik bahwa temuan tetap wajib dicatat objektif sesuai standar audit, sekaligus menyusun rekomendasi perbaikan beban kerja dan pendampingan teknis agar kepatuhan SOP terjaga.",
      "Mengeluarkan sampel berkas milik sahabat Anda dari cakupan audit kali ini dan mengajukan pengunduran diri dari tim pemeriksa agar penilaian dilakukan oleh auditor lain yang netral.",
      "Cukup memberikan teguran lisan secara pribadi kepadanya dengan syarat ia berjanji tidak lagi melewati verifikasi lapangan pada bulan berikutnya mengingat belum ada warga yang dirugikan.",
    ],
    optionScores: [4, 1, 5, 3, 2],
    answer: "C",
    explanation:
      "Objektivitas kinerja menuntut pencatatan temuan pelanggaran SOP apa adanya tanpa pandang bulu, disertai komunikasi profesional yang menjaga martabat rekan dan rekomendasi perbaikan sistem agar pelanggaran tidak terulang. Langsung mencatat dalam berita acara tanpa komunikasi profesional memang tegas dan patuh aturan, tetapi melewatkan aspek pembinaan serta identifikasi akar masalah beban kerja yang membuat audit lebih berdampak sistemik.",
    tip: "Pisahkan kedekatan personal dari standar audit: catat temuan secara objektif, komunikasikan dengan tenang dan tegas, lalu lengkapi dengan rekomendasi perbaikan.",
  },
  {
    id: "tkp-pro-084",
    subPattern: "dilema-integritas-kinerja-dan-tekanan-atasan",
    difficulty: "sedang",
    prompt:
      "Tanpa pemberitahuan informal sebelumnya, Anda menerima surat keputusan mutasi mendadak ke Unit Pengelolaan Pengaduan Publik yang sedang menghadapi tunggakan ratusan aduan warga dan target penyelesaian sangat ketat dalam enam puluh hari. Sementara itu, di unit lama Anda sedang menikmati ritme kerja mapan dengan rencana inovasi yang hampir rampung. Respons profesional paling matang adalah ...",
    options: [
      "Menemui bagian kepegawaian untuk meminta penundaan efektif mutasi selama satu bulan agar Anda dapat menuntaskan proyek inovasi di unit lama terlebih dahulu secara sempurna.",
      "Langsung berpindah ke unit baru pada hari yang sama dan segera mengerjakan tumpukan aduan satu per satu tanpa menunda, meski proses serah terima di unit lama cukup lewat pesan singkat.",
      "Menerima keputusan mutasi dengan patuh, lalu selama dua pekan pertama mengamati dulu pola kerja tim baru agar tidak terkesan menggurui sebelum menyentuh tunggakan aduan.",
      "Menuntaskan dokumen serah terima unit lama secara rapi dalam masa transisi singkat, lalu segera memetakan kategori tunggakan aduan di unit baru bersama tim untuk menyusun rencana percepatan terukur.",
      "Menyampaikan keberatan tertulis kepada pimpinan karena mutasi mendadak tanpa sosialisasi awal dinilai kurang mempertimbangkan kesinambungan kinerja inovasi di unit sebelumnya.",
    ],
    optionScores: [3, 4, 2, 5, 1],
    answer: "D",
    explanation:
      "Aparatur profesional memandang mutasi sebagai amanah organisasi: menuntaskan serah terima unit lama secara akuntabel agar tidak meninggalkan kekosongan, lalu langsung masuk ke unit baru dengan pemetaan terstruktur dan kolaboratif guna mengejar target ketat. Langsung berpindah dan menggarap tunggakan tanpa menata serah terima unit lama secara rapi menunjukkan semangat tinggi, tetapi berisiko meninggalkan pekerjaan menggantung di unit asal dan kurang strategis dalam memilah prioritas aduan.",
    tip: "Saat dimutasi mendadak ke unit bertekanan tinggi, jaga dua sisi sekaligus: serah terima unit lama yang tuntas dan pemetaan prioritas kolaboratif di unit baru.",
  },
  {
    id: "tkp-pro-085",
    subPattern: "dilema-integritas-kinerja-dan-tekanan-atasan",
    difficulty: "sulit",
    prompt:
      "Seorang pejabat senior dari bidang lain—yang dikenal sangat dekat dengan pimpinan puncak—menghampiri meja Anda menjelang jam pulang dan meminta berkas rekomendasi hibah milik yayasan kenalannya segera diterbitkan malam itu juga. Padahal, berkas tersebut baru masuk siang tadi, masih berada di urutan antrean keempat belas, dan belum memuat surat keterangan domisili aktif sesuai ketentuan. Sikap paling tepat Anda adalah ...",
    options: [
      "Menjelaskan secara sopan bahwa berkas belum dapat diproses karena kurang surat domisili, lalu mengembalikan berkas tersebut tanpa perlu mencatat permintaan percepatan agar hubungan antarbidang tetap nyaman.",
      "Memproses verifikasi substansi berkasnya terlebih dahulu di luar urutan antrean sebagai bentuk penghormatan kepada pejabat senior, namun tetap menahan penerbitan rekomendasi sampai surat domisili dilengkapi.",
      "Meneruskan berkas tersebut langsung kepada atasan Anda untuk diputuskan secara diskresi karena permintaan datang dari pejabat yang level jabatannya berada di atas Anda.",
      "Menolak permintaan tersebut secara keras di depan rekan seruangan agar seluruh pegawai mengetahui bahwa Anda tidak bisa diintervensi oleh pejabat dari bidang mana pun.",
      "Menolak permintaan percepatan secara santun dengan merujuk daftar antrean dan syarat resmi, menyampaikan daftar kekurangan berkas secara tertulis melalui kanal layanan, serta mendokumentasikan kronologi untuk dilaporkan kepada atasan langsung.",
    ],
    optionScores: [4, 2, 3, 1, 5],
    answer: "E",
    explanation:
      "Menolak intervensi informal secara santun berlandaskan SOP, memberikan kejelasan perbaikan syarat lewat kanal resmi yang setara bagi semua pemohon, dan mendokumentasikan kejadian kepada atasan langsung memadukan integritas, transparansi, serta mitigasi risiko tekanan berulang. Sekadar menolak sopan dan mengembalikan berkas tanpa dokumentasi maupun laporan berjenjang sudah patuh aturan, tetapi rentan memicu kesalahpahaman sepihak atau pengulangan tekanan melalui jalur lain.",
    tip: "Hadapi tekanan informal dengan tiga kunci: tolak santun berbasis SOP, arahkan perbaikan lewat kanal resmi yang setara, dan dokumentasikan ke atasan langsung.",
  },
  {
    id: "tkp-pro-086",
    subPattern: "dilema-integritas-kinerja-dan-tekanan-atasan",
    difficulty: "sulit",
    prompt:
      "Saat sedang mengawal verifikasi akhir berkas lelang pengadaan alat kesehatan rumah sakit daerah yang batas unggah dokumennya tersisa tiga jam di portal nasional, Asisten Daerah menelepon langsung dan meminta Anda segera hadir mendampingi penyusunan materi sambutan kunjungan kerja kementerian pada jam yang sama. Kedua penugasan bersifat strategis dan tidak ada instruksi pembatalan dari Pejabat Pembuat Komitmen. Langkah terbaik Anda adalah ...",
    options: [
      "Menjelaskan kepada Asisten Daerah bahwa Anda sedang menangani tenggat pengadaan yang bersifat mengikat secara hukum, sehingga Anda meminta izin tidak hadir sampai proses unggah selesai penuh.",
      "Segera mengonfirmasi urgensi hukum tenggat pengadaan kepada Asisten Daerah dan PPK secara santun, mengusulkan delegasi sementara penyiapan draf awal sambutan kepada rekan yang kompeten, serta berkomitmen langsung bergabung menyempurnakan materi begitu dokumen lelang terunggah aman.",
      "Meminta staf pendukung melanjutkan pemeriksaan akhir dokumen lelang hingga unggah selesai, sementara Anda segera memenuhi panggilan Asisten Daerah sebagai wujud kepatuhan pada pejabat lebih tinggi.",
      "Membawa laptop pengadaan ke ruang rapat Asisten Daerah agar dapat menyusun materi sambutan sekaligus menekan tombol unggah dokumen lelang di sela-sela diskusi.",
      "Menunda pengunggahan dokumen lelang hingga keesokan hari dengan alasan ada penugasan mendadak dari pejabat daerah yang lebih senior.",
    ],
    optionScores: [4, 5, 2, 3, 1],
    answer: "B",
    explanation:
      "Batas waktu pengadaan di portal nasional mengikat secara hukum dan tidak dapat diganggu gugat, sehingga tidak boleh ditinggalkan maupun dikerjakan setengah hati; menyelaraskan informasi ke kedua pejabat sambil menyiapkan solusi transisi untuk materi sambutan menjaga kepatuhan hukum sekaligus pelayanan pimpinan. Menolak hadir secara langsung hingga unggah selesai memang melindungi proses lelang, tetapi kurang memberi jembatan solusi bagi kebutuhan mendesak Asisten Daerah.",
    tip: "Pada benturan tugas berbatas hukum dengan panggilan pejabat tinggi, lindungi proses legal sambil tetap menawarkan solusi koordinatif agar agenda pimpinan tetap terbantu.",
  },
  {
    id: "tkp-pro-087",
    subPattern: "dilema-integritas-kinerja-dan-tekanan-atasan",
    difficulty: "sulit",
    prompt:
      "Anda membantu menyusun draf naskah evaluasi kinerja tahunan dinas yang sudah diparaf berjenjang oleh kepala seksi dan kepala bidang, serta tinggal menunggu tanda tangan Kepala Dinas pagi ini sebelum dikirim ke gubernur. Saat melakukan pengecekan akhir cetakan fisik, Anda menyadari persentase penurunan angka stunting yang dicantumkan berasal dari data sementara triwulan III yang tampak lebih baik, bukan angka final triwulan IV yang justru sedikit melambat. Kepala Bidang menyarankan agar data tetap dipakai dulu karena secara naratif sudah disetujui dan revisi hanya akan mempermalukan unit. Sikap Anda adalah ...",
    options: [
      "Mengikuti arahan Kepala Bidang untuk tetap meneruskan berkas yang sudah diparaf, namun menyimpan salinan data final triwulan IV sebagai catatan pribadi jika kelak ditanyakan auditor.",
      "Langsung melompati Kepala Bidang untuk melaporkan dugaan manipulasi data tersebut ke inspektorat daerah sebelum Kepala Dinas menandatangani laporan.",
      "Menyampaikan secara profesional kepada Kepala Bidang bahwa penggunaan data sementara pada laporan tahunan melanggar prinsip akuntabilitas dan berisiko tinggi saat verifikasi provinsi, lalu menawarkan penyusunan narasi evaluasi objektif berbasis angka final lengkap dengan rencana aksi perbaikan untuk diajukan bersama kepada Kepala Dinas.",
      "Menolak menandatangani lembar kendali penyusun dan menyerahkan sepenuhnya keputusan penerusan berkas kepada Kepala Bidang tanpa ikut mengubah isi laporan.",
      "Menghapus rincian angka triwulan IV dari tabel lampiran agar tidak menimbulkan kontradiksi dengan narasi persentase yang sudah terlanjur dicetak rapi.",
    ],
    optionScores: [2, 3, 5, 4, 1],
    answer: "C",
    explanation:
      "Integritas data kinerja publik tidak boleh dipoles demi citra sesaat; berdialog tegas namun konstruktif dengan atasan langsung sambil menyiapkan solusi narasi jujur plus rencana tindak lanjut menjaga akuntabilitas pimpinan dan wibawa organisasi secara bersamaan. Sekadar menolak menandatangani lembar kendali memang menjaga posisi pribadi secara formal, tetapi bersifat pasif dan tidak mencegah laporan keliru naik ke meja Kepala Dinas.",
    tip: "Saat atasan ragu mengoreksi data laporan yang kurang menguntungkan, hadirkan kejujuran data bersama solusi narasi perbaikan agar transparansi tetap terjaga.",
  },
  {
    id: "tkp-pro-088",
    subPattern: "dilema-integritas-kinerja-dan-tekanan-atasan",
    difficulty: "sedang",
    prompt:
      "Sebagai penilai angka kredit dan kinerja bulanan di tim fungsional, Anda menemukan bahwa rekan satu angkatan yang akrab dengan Anda mencantumkan dua kegiatan sosialisasi fiktif yang sebenarnya batal dilaksanakan agar capaian bulanannya memenuhi ambang batas tunjangan kinerja penuh. Ketika dikonfirmasi, ia mengaku sedang menghadapi kesulitan biaya pengobatan orang tuanya dan memohon Anda meloloskannya sekali ini saja. Tindakan Anda adalah ...",
    options: [
      "Meloloskan satu kegiatan saja agar tunjangan kinerjanya tidak turun terlalu drastis, sambil memintanya mengganti kegiatan tersebut dengan sosialisasi nyata pada bulan depan.",
      "Langsung meneruskan bukti laporan fiktif tersebut ke grup koordinasi unit agar menjadi peringatan keras bagi seluruh anggota tim fungsional lainnya.",
      "Menunda penilaian berkasnya sampai akhir bulan sambil berharap ia menyadari kesalahannya dan menarik sendiri klaim kegiatan fiktif tersebut.",
      "Menolak pengesahan dua kegiatan yang tidak terlaksana sesuai bukti objektif, mendokumentasikan koreksi penilaian secara prosedural, lalu secara terpisah menawarkan dukungan kemanusiaan atau mengarahkannya ke skema bantuan kesejahteraan resmi pegawai.",
      "Menolak pengesahan dua kegiatan fiktif tersebut secara tegas melalui sistem penilaian tanpa perlu membicarakan alasan pribadinya agar batas profesionalitas tetap terjaga ketat.",
    ],
    optionScores: [2, 1, 3, 5, 4],
    answer: "D",
    explanation:
      "Memisahkan empati kemanusiaan dari integritas penilaian kinerja adalah ciri ASN berintegritas tinggi: klaim fiktif wajib ditolak dan dicatat sesuai bukti, sementara kesulitan keluarga rekan dibantu lewat jalur kepedulian atau fasilitas resmi yang sah. Menolak pengesahan lewat sistem tanpa percakapan lanjutan sudah benar secara aturan, namun kurang menghadirkan pendekatan kepemimpinan yang empatik sekaligus edukatif untuk mencegah pengulangan.",
    tip: "Jangan pernah mengompensasi masalah pribadi rekan dengan melonggarkan verifikasi kinerja; tegakkan objektivitas di sistem dan salurkan empati lewat jalur sah.",
  },
  {
    id: "tkp-pro-089",
    subPattern: "dilema-integritas-kinerja-dan-tekanan-atasan",
    difficulty: "sulit",
    prompt:
      "Anda baru saja dimutasi mendadak memimpin subbagian keuangan di unit pelaksana teknis daerah dengan target penyerapan anggaran triwulan yang tertinggal jauh dan opini catatan audit tahun sebelumnya kurang baik. Pada minggu pertama, beberapa staf senior bersikap dingin dan berujar bahwa target pimpinan terlalu tinggi jika harus mengikuti seluruh ketentuan pertanggungjawaban terbaru. Langkah awal paling efektif Anda adalah ...",
    options: [
      "Menyampaikan secara tegas pada rapat perdana bahwa setiap keterlambatan atau ketidakpatuhan terhadap aturan baru akan langsung dicatat dalam evaluasi disiplin pegawai.",
      "Mengikuti dahulu kebiasaan kerja staf senior selama satu bulan penuh supaya suasana ruangan mencair, baru secara perlahan mengenalkan standar pertanggungjawaban baru.",
      "Mengambil alih sendiri penyusunan seluruh dokumen pertanggungjawaban yang rumit agar penyerapan cepat naik tanpa memicu penolakan dari staf senior.",
      "Menyusun ulang prosedur kerja sesuai standar terbaru secara rinci dan membagikannya melalui surat edaran internal agar seluruh staf memiliki acuan tertulis yang jelas.",
      "Mengadakan dialog kerja terbuka untuk memetakan hambatan nyata staf senior, menyepakati standar kepatuhan yang tidak bisa ditawar, serta menyusun alur percepatan penyerapan yang realistis lengkap dengan pembagian peran dan pendampingan teknis.",
    ],
    optionScores: [3, 2, 1, 4, 5],
    answer: "E",
    explanation:
      "Memimpin unit baru dengan target tinggi dan resistensi internal menuntut kombinasi ketegasan prinsip kepatuhan, keterbukaan mendengar kendala lapangan, dan penataan alur kerja kolaboratif beserta pendampingan. Sekadar menerbitkan pedoman tertulis tanpa dialog pemetaan kendala sudah rapi secara administratif, tetapi berisiko tidak dieksekusi optimal oleh staf senior yang merasa tidak dilibatkan.",
    tip: "Di unit baru yang menuntut percepatan sekaligus kepatuhan, padukan ketegasan standar dengan dialog pemetaan hambatan dan pendampingan teknis bersama tim.",
  },
  {
    id: "tkp-pro-090",
    subPattern: "dilema-integritas-kinerja-dan-tekanan-atasan",
    difficulty: "sedang",
    prompt:
      "Menjelang akhir tahun anggaran, seorang kontraktor proyek pembangunan ruang kelas yang berkas terminnya belum dilengkapi berita acara uji mutu dari konsultan pengawas menemui Anda di ruang tunggu. Ia membawa pesan singkat dari salah satu pejabat struktural di instansi Anda yang meminta berkas pencairan dibantu cepat supaya serapan anggaran terlihat tinggi. Sikap profesional Anda adalah ...",
    options: [
      "Menyampaikan secara santun kepada kontraktor bahwa pencairan hanya dapat diproses setelah berita acara uji mutu sah dilengkapi, lalu mengonfirmasi langsung kepada pejabat struktural tersebut mengenai kendala kelengkapan syarat sesuai ketentuan pengelolaan keuangan.",
      "Menolak berkas kontraktor di ruang tunggu dengan merujuk peraturan pencairan anggaran, tanpa perlu mengonfirmasi pesan singkat pejabat struktural tersebut agar tidak memperpanjang persoalan.",
      "Menerima berkas terlebih dahulu untuk dimasukkan ke tahap verifikasi administrasi keuangan sambil meminta kontraktor menyusulkan berita acara uji mutu sebelum dana ditransfer bank.",
      "Menyampaikan bahwa Anda akan memproses berkasnya asalkan pejabat struktural pengirim pesan bersedia menandatangani surat jaminan tanggung jawab penuh di atas meterai.",
      "Memproses pencairan sebagian nilai termin secara proporsional demi membantu capaian serapan anggaran akhir tahun sembari menunggu uji mutu selesai dilakukan.",
    ],
    optionScores: [5, 4, 2, 3, 1],
    answer: "A",
    explanation:
      "Menegakkan syarat mutlak uji mutu kepada penyedia secara santun sekaligus melakukan klarifikasi langsung kepada pejabat pengirim pesan mencegah penyalahgunaan nama pejabat maupun tekanan lanjutan, serta memastikan tata kelola keuangan tetap akuntabel. Menolak berkas tanpa mengklarifikasi pesan pejabat sudah patuh prosedur, tetapi menyisakan celah miskomunikasi dan potensi pencatutan nama pejabat di kemudian hari.",
    tip: "Bila tekanan informal membawa-bawa nama pejabat, tetap tegakkan syarat dokumen mutlak dan lakukan konfirmasi berjenjang agar fakta dan akuntabilitas jelas.",
  },
  {
    id: "tkp-pro-091",
    subPattern: "dilema-integritas-kinerja-dan-tekanan-atasan",
    difficulty: "sedang",
    prompt:
      "Anda mengelola sistem informasi kepegawaian instansi. Pagi ini, Kepala Bagian Umum meminta Anda segera menarik data absensi seluruh pegawai untuk evaluasi disiplin sebelum rapat pukul 13.00. Bersamaan dengan itu, Kepala Bagian Perencanaan meminta data proyeksi pensiun lima tahun ke depan pukul 13.00 sebagai lampiran usulan formasi ke kementerian pusat yang tautan unggahnya tutup pukul 14.00. Kedua penarikan data membutuhkan pembersihan manual karena ada migrasi basis data. Langkah paling tepat Anda adalah ...",
    options: [
      "Mengutamakan data proyeksi pensiun sampai selesai penuh karena batas unggah kementerian bersifat nasional, lalu baru mengerjakan data absensi setelah pukul 14.00 tanpa menghubungi Kepala Bagian Umum terlebih dahulu.",
      "Mengirimkan data mentah hasil unduhan sistem kepada kedua kepala bagian agar mereka tidak menunggu, disertai catatan singkat bahwa data belum sempat dibersihkan.",
      "Mengomunikasikan batas waktu mengikat portal kementerian kepada kedua kepala bagian, mengusulkan pengiriman ringkasan data absensi tervalidasi per unit terlebih dahulu untuk rapat pukul 13.00, dan menuntaskan verifikasi penuh proyeksi pensiun sebelum portal ditutup.",
      "Meminta kedua kepala bagian berdiskusi sendiri menentukan siapa yang lebih berhak dilayani lebih dulu sementara Anda menunggu keputusan resmi lewat surat disposisi.",
      "Memprioritaskan data absensi Kepala Bagian Umum karena rapat internal dihadiri pimpinan instansi secara langsung, lalu mengusulkan perpanjangan waktu unggah ke kementerian pusat.",
    ],
    optionScores: [4, 2, 5, 3, 1],
    answer: "C",
    explanation:
      "Menyelaraskan informasi batas waktu eksternal yang tidak dapat ditawar sambil menawarkan keluaran bertahap yang tetap akurat dan bermanfaat untuk rapat internal menunjukkan kecerdasan prioritas sekaligus orientasi solusi. Mendahulukan data proyeksi pensiun tanpa komunikasi awal kepada Kepala Bagian Umum memang tepat secara urgensi eksternal, namun membuat pimpinan rapat kehilangan kepastian bahan pada pukul 13.00.",
    tip: "Saat dua tenggat berimpit, lindungi batas waktu eksternal yang kaku sembari menawarkan keluaran antara yang valid agar rapat internal tetap berjalan.",
  },
  {
    id: "tkp-pro-092",
    subPattern: "dilema-integritas-kinerja-dan-tekanan-atasan",
    difficulty: "sedang",
    prompt:
      "Saat memeriksa ulang salinan surat keputusan penetapan penerima beasiswa daerah yang sudah ditandatangani secara elektronik oleh pimpinan dan siap diumumkan di situs resmi satu jam lagi, Anda menemukan satu nama peserta yang ternyata tidak memenuhi syarat domisili karena kesalahan salin baris pada tabel seleksi. Jika pengumuman ditunda satu jam, publik mungkin mempertanyakan keterlambatan jadwal yang sudah dipublikasikan. Keputusan paling bertanggung jawab adalah ...",
    options: [
      "Tetap menayangkan pengumuman sesuai jadwal agar instansi tidak dinilai lamban, lalu menghubungi peserta yang keliru secara pribadi keesokan hari untuk menarik kepesertaannya.",
      "Langsung menghapus satu nama tersebut dari file pengumuman situs web tanpa mengubah surat keputusan yang sudah bertanda tangan elektronik agar publik tidak melihat kekeliruan.",
      "Menunda pengumuman tanpa memberi pemberitahuan apa pun di situs resmi sampai pimpinan memiliki waktu luang untuk menandatangani surat keputusan revisi.",
      "Segera menahan publikasi, melaporkan kekeliruan secara faktual kepada pimpinan untuk penerbitan ralat keputusan yang sah, menayangkan pemberitahuan penyesuaian waktu pengumuman secara transparan, serta menambahkan pemeriksaan silang ganda sebelum penandatanganan berikutnya.",
      "Segera menahan publikasi dan melaporkan kekeliruan kepada pimpinan untuk direvisi, lalu menunggu arahan pimpinan sepenuhnya terkait apakah perlu memberi penjelasan kepada publik.",
    ],
    optionScores: [2, 1, 3, 5, 4],
    answer: "D",
    explanation:
      "Menahan publikasi keliru melindungi hak peserta yang berhak dan mencegah sengketa hukum; menggabungkannya dengan pelaporan cepat untuk revisi sah, komunikasi publik yang transparan soal jeda jadwal, serta perbaikan kontrol mutu mencerminkan profesionalisme paripurna. Menahan publikasi dan melapor ke pimpinan sudah menjaga akurasi, namun masih pasif dalam menjaga kepercayaan publik dan belum menutup celah agar kesalahan salin tidak berulang.",
    tip: "Keterlambatan singkat yang dikomunikasikan jujur jauh lebih bermartabat daripada memublikasikan keputusan resmi yang cacat syarat.",
  },
  {
    id: "tkp-pro-093",
    subPattern: "dilema-integritas-kinerja-dan-tekanan-atasan",
    difficulty: "sulit",
    prompt:
      "Anda menjadi anggota panitia seleksi pengadaan jasa konsultansi teknologi informasi. Pada tahap evaluasi teknis, rekan satu tim yang selama ini dikenal berdedikasi dan dekat dengan Anda secara tidak sengaja memperlihatkan pesan bahwa ia sempat berdiskusi santai dengan salah satu peserta tender di luar forum penjelasan resmi mengenai rincian spesifikasi yang belum dipublikasikan. Ia berdalih hanya memberi gambaran umum agar kualitas proposal yang masuk lebih baik. Langkah paling tepat Anda adalah ...",
    options: [
      "Mengingatkannya secara pribadi agar segera menghentikan komunikasi tersebut, lalu tetap melanjutkan evaluasi seperti biasa sambil mengawasi apakah penilaiannya terhadap peserta itu masih objektif.",
      "Menyampaikan kecurigaan Anda kepada anggota panitia lain di luar rapat resmi agar peserta tender yang bersangkutan otomatis diberi nilai teknis paling rendah saat penilaian.",
      "Mengundurkan diri dari kepanitiaan seleksi secara mendadak dengan alasan beban kerja agar Anda tidak terseret jika suatu saat ditemukan pelanggaran pengadaan.",
      "Meminta rekan tersebut menandatangani pernyataan pribadi kepada Anda bahwa ia akan bersikap netral saat menilai seluruh peserta tanpa perlu melaporkan insiden tersebut kepada ketua panitia.",
      "Menyampaikan secara tegas dan profesional bahwa komunikasi di luar forum resmi melanggar prinsip persaingan sehat, lalu melaporkan fakta tersebut secara objektif kepada ketua panitia untuk peninjauan keterbukaan informasi yang setara bagi seluruh peserta serta penanganan potensi konflik kepentingan.",
    ],
    optionScores: [4, 1, 2, 3, 5],
    answer: "E",
    explanation:
      "Dalam pengadaan publik, kebocoran rincian spesifikasi di luar forum resmi merusak asas persaingan sehat meskipun niatnya diklaim baik; melapor objektif ke ketua panitia memungkinkan pemulihan kesetaraan informasi bagi semua peserta dan penanganan konflik kepentingan sesuai aturan. Sekadar mengingatkan pribadi lalu mengawasi penilaiannya belum memulihkan ketimpangan informasi yang sudah terlanjur terjadi antarpeserta.",
    tip: "Pada pelanggaran kesetaraan informasi pengadaan, peringatan informal tidak cukup; laporkan objektif agar forum panitia dapat memulihkan keadilan bagi semua peserta.",
  },
  {
    id: "tkp-pro-094",
    subPattern: "dilema-integritas-kinerja-dan-tekanan-atasan",
    difficulty: "sedang",
    prompt:
      "Anda baru dipindahkan secara mendadak dari bidang perencanaan ke loket pelayanan administrasi kependudukan yang sedang mengalami lonjakan antrean akibat transisi aplikasi baru. Pada hari ketiga, target waktu layanan harian belum tercapai dan beberapa pemohon mulai mengeluh, sementara Anda sendiri belum hafal seluruh menu teknis aplikasi tersebut. Sikap profesional paling konstruktif adalah ...",
    options: [
      "Mempelajari modul alur aplikasi di sela waktu dan usai jam layanan, berkoordinasi dengan petugas senior untuk pembagian jenis berkas sesuai penguasaan saat ini, serta menyusun lembar panduan cepat alur menu agar kecepatan layanan meningkat konsisten tanpa mengorbankan akurasi.",
      "Meminta penempatan sementara pada bagian verifikasi berkas fisik selama dua pekan penuh hingga Anda benar-benar hafal seluruh fitur aplikasi sebelum kembali melayani di loket utama.",
      "Tetap melayani seluruh jenis permohonan di loket utama secara mandiri sambil sesekali membuka buku panduan di depan pemohon agar proses belajar berlangsung alami.",
      "Mempercepat penginputan data dengan melewati beberapa kolom keterangan opsional di aplikasi supaya panjang antrean segera berkurang dan target harian terpenuhi.",
      "Menyampaikan kepada koordinator loket bahwa rendahnya capaian target semata-mata disebabkan mutasi mendadak tanpa pelatihan prapenugasan yang memadai.",
    ],
    optionScores: [5, 4, 3, 2, 1],
    answer: "A",
    explanation:
      "Adaptasi cepat di unit baru ditunjukkan dengan inisiatif belajar aktif, penataan pembagian kerja kolaboratif bersama senior sesuai kekuatan saat ini, dan pembuatan alat bantu kerja yang juga berguna bagi tim tanpa menurunkan akurasi layanan. Meminta ditempatkan sementara di verifikasi fisik selama dua pekan memang menjaga ketelitian, tetapi kurang progresif membangun penguasaan sistem inti di masa lonjakan antrean.",
    tip: "Saat beradaptasi di unit layanan baru bertekanan tinggi, kombinasikan belajar mandiri cepat, kolaborasi pembagian berkas, dan alat bantu kerja sistematis.",
  },
  {
    id: "tkp-pro-095",
    subPattern: "dilema-integritas-kinerja-dan-tekanan-atasan",
    difficulty: "sulit",
    prompt:
      "Kepala Subbagian Anda sedang cuti luar kota, dan Anda ditunjuk sebagai pelaksana harian. Menjelang siang, atasan langsung dari Kepala Subbagian datang dan meminta Anda menandatangani surat persetujuan perubahan jadwal pemakaian fasilitas dinas untuk kegiatan komunitas pribadinya hari Sabtu nanti, padahal sesuai SOP izin pemakaian akhir pekan hanya untuk kegiatan kedinasan atau kemasyarakatan resmi dengan surat permohonan terdaftar minimal tiga hari sebelumnya. Beliau berkata akan bertanggung jawab penuh bila ada pemeriksaan. Keputusan Anda adalah ...",
    options: [
      "Menolak menandatangani surat tersebut dengan alasan kewenangan pelaksana harian tidak mencakup persetujuan di luar jadwal rutin, lalu memintanya menunggu Kepala Subbagian kembali dari cuti.",
      "Menyampaikan secara santun bahwa sebagai pelaksana harian Anda terikat pada ketentuan SOP mengenai peruntukan fasilitas negara dan batas waktu permohonan, menolak menerbitkan persetujuan di luar prosedur, serta menawarkan informasi alur penyewaan gedung komersial atau fasilitas publik yang sah untuk kegiatan pribadi.",
      "Menerbitkan surat persetujuan dengan menambahkan catatan bahwa izin diberikan atas arahan langsung atasan guna melindungi posisi hukum Anda apabila terjadi audit pemakaian aset.",
      "Menghubungi Kepala Subbagian yang sedang cuti agar beliau saja yang memberikan persetujuan tertulis dari jauh sehingga Anda tidak perlu berhadapan langsung dengan atasan di atasnya.",
      "Menyetujui pemakaian fasilitas secara lisan tanpa menerbitkan surat resmi asalkan kegiatan komunitas tersebut menjaga kebersihan dan tidak mengganggu agenda kedinasan.",
    ],
    optionScores: [4, 5, 2, 3, 1],
    answer: "B",
    explanation:
      "Aset dan fasilitas dinas tidak boleh digunakan untuk kepentingan pribadi meskipun diminta atasan dan dijanjikan tanggung jawab; menolak secara santun berbasis SOP sambil tetap bersikap konstruktif menawarkan alternatif jalur legal menunjukkan keteguhan integritas tanpa konfrontasi destruktif. Menolak dengan berlindung di balik keterbatasan status pelaksana harian dan melemparnya ke pejabat yang sedang cuti memang mencegah tanda tangan ilegal, tetapi terkesan menghindar dari prinsip pokok larangan penyalahgunaan aset dinas.",
    tip: "Tolak permintaan penggunaan fasilitas dinas di luar SOP berdasarkan substansi aturan, bukan sekadar melempar tanggung jawab ke pejabat lain.",
  },
];
