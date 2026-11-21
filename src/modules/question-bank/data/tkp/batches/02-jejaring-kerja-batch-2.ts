import { type TkpQuestionDraft } from "@/modules/question-bank/domain/question";

export const jejaringKerjaBatch2Drafts: readonly TkpQuestionDraft[] = [
  {
    id: "tkp-jej-041",
    subPattern: "koordinasi-lintas-unit-dan-instansi",
    difficulty: "mudah",
    prompt:
      "Unit teknologi informasi berencana melakukan pemeliharaan peladen (server) pada Rabu pagi, bertepatan dengan agenda desk verifikasi serentak pelaku usaha yang diselenggarakan unit pelayanan perizinan daring. Sebagai penghubung operasional di unit layanan, tindakan Anda adalah ...",
    options: [
      "Menghubungi koordinator teknis TI untuk menyinkronkan jadwal pemeliharaan di luar jam verifikasi serta menyiapkan pemberitahuan dini bagi petugas.",
      "Mengirimkan nota dinas keberatan secara mendadak ke bagian TI agar seluruh jadwal pemeliharaan sistem minggu ini dibatalkan.",
      "Mengimbau pelaku usaha menunggu di ruang konsultasi sampai pekerjaan pemeliharaan peladen dari unit TI selesai dikerjakan.",
      "Meminta bagian TI menunda pemeliharaan hingga sore hari melalui pesan singkat agar proses desk verifikasi pagi tetap berjalan.",
      "Mengalihkan seluruh berkas verifikasi daring pagi itu ke pemeriksaan berkas cetak tanpa berkoordinasi terlebih dahulu dengan tim TI.",
    ],
    optionScores: [5, 1, 3, 4, 2],
    answer: "A",
    explanation:
      "Menghubungi koordinator teknis untuk menyepakati jadwal di luar jam sibuk layanan disertai pemberitahuan dini menjaga kelancaran kedua unit secara sinergis, lebih efektif daripada sekadar meminta penundaan lewat pesan singkat tanpa kepastian jadwal bersama.",
    tip: "Selaraskan agenda pemeliharaan internal dengan jadwal layanan publik melalui komunikasi lintas unit sebelum pelaksanaan.",
  },
  {
    id: "tkp-jej-042",
    subPattern: "koordinasi-lintas-unit-dan-instansi",
    difficulty: "mudah",
    prompt:
      "Dalam persiapan kirab dan upacara Hari Jadi Kabupaten, Sekretariat Daerah, Dinas Perhubungan, dan Satpol PP memiliki draf jalur pengalihan arus lalu lintas yang sedikit berbeda satu sama lain. Sebagai anggota tim teknis acara, langkah paling tepat Anda adalah ...",
    options: [
      "Menggunakan peta jalur versi Sekretariat Daerah sebagai acuan utama karena instansi tersebut bertindak sebagai koordinator acara.",
      "Membiarkan masing-masing instansi mengatur titik penjagaan sesuai kebiasaan tahun lalu agar persiapan lapangan lebih cepat.",
      "Mengumpulkan ketiga draf peta jalur dari setiap instansi lalu melaporkannya kepada pimpinan daerah untuk dipilih salah satu.",
      "Mengajak perwakilan teknis ketiga instansi menyelaraskan satu peta jalur terpadu serta pembagian pos personel di lapangan.",
      "Mengirimkan draf rute acara versi tim Anda kepada dua instansi lainnya melalui surat dinas resmi supaya dapat mereka sesuaikan segera.",
    ],
    optionScores: [2, 1, 3, 5, 4],
    answer: "D",
    explanation:
      "Meninjau satu peta terpadu bersama perwakilan teknis ketiga instansi menyatukan persepsi operasional hingga pembagian pos personel di lapangan, lebih solutif daripada hanya mengirim draf satu arah tanpa forum penyelarasan bersama.",
    tip: "Kegiatan lapangan lintas instansi menuntut penyatuan peta kerja dan titik tanggung jawab dalam satu meja koordinasi.",
  },
  {
    id: "tkp-jej-043",
    subPattern: "koordinasi-lintas-unit-dan-instansi",
    difficulty: "sedang",
    prompt:
      "Program beasiswa pendidikan daerah menghadapi kendala penerima ganda dan masih adanya warga kurang mampu yang terlewat karena Dinas Pendidikan, Dinas Sosial, dan lembaga pengelola zakat daerah mengacu pada basis data yang berbeda. Sebagai analis data tim koordinasi, langkah strategis Anda adalah ...",
    options: [
      "Menyusun daftar penerima versi Dinas Pendidikan terlebih dahulu lalu meminta lembaga lain mencoret nama yang kebetulan sama.",
      "Memfasilitasi pertemuan teknis ketiga lembaga guna menyepakati padanan indikator, verifikasi silang, dan jadwal pemutakhiran.",
      "Mengusulkan penghentian sementara penyaluran beasiswa dari dua lembaga mitra sampai integrasi data tingkat daerah rampung.",
      "Mencocokkan berkas penerima secara manual di meja kerja Anda setiap kali menerima kiriman daftar nama dari lembaga lain.",
      "Meminta setiap lembaga mengirimkan daftar calon penerima lengkap beserta nomor induk kependudukan untuk disaring oleh tim sekretariat unit Anda.",
    ],
    optionScores: [2, 5, 1, 3, 4],
    answer: "B",
    explanation:
      "Memfasilitasi kesepakatan indikator padanan, verifikasi silang, dan pemutakhiran berkala menyelesaikan akar masalah duplikasi antarinstansi secara berkelanjutan, lebih kokoh daripada sekadar menyaring daftar di satu unit tanpa standar bersama.",
    tip: "Pencegahan tumpang tindih bantuan sosial lintas lembaga bertumpu pada standar indikator bersama dan mekanisme verifikasi silang.",
  },
  {
    id: "tkp-jej-044",
    subPattern: "koordinasi-lintas-unit-dan-instansi",
    difficulty: "sedang",
    prompt:
      "Pada bulan pertama beroperasinya Mal Pelayanan Publik (MPP) terpadu, petugas dari beberapa instansi vertikal mengeluhkan sistem antrean pusat sering membuat loket mereka kosong di satu waktu lalu menumpuk mendadak di jam berikutnya. Sebagai pengelola operasional MPP, tindakan Anda adalah ...",
    options: [
      "Meminta instansi vertikal mengikuti alur antrean terpadu yang sudah ditetapkan pengelola karena seluruh mekanisme telah disahkan.",
      "Membiarkan masing-masing instansi vertikal membuka pendaftaran antrean manual sendiri di luar sistem agar keluhan petugas mereda.",
      "Mencatat keluhan seluruh petugas instansi vertikal ke dalam laporan evaluasi bulanan untuk dibahas pada rapat pimpinan berikutnya.",
      "Menyesuaikan pengaturan pemanggilan nomor antrean pada sistem pusat secara mandiri berdasarkan pengamatan kepadatan loket harian.",
      "Mengundang penanggung jawab layanan tiap instansi vertikal untuk memetakan pola durasi layanan lalu menyelaraskan kuota jadwal antrean bersama.",
    ],
    optionScores: [2, 1, 3, 4, 5],
    answer: "E",
    explanation:
      "Mengundang penanggung jawab tiap instansi untuk memetakan durasi layanan dan menyelaraskan kuota antrean bersama menjaga efisiensi MPP tanpa mematikan kendali teknis mitra, lebih tepat daripada menyesuaikan pengaturan sistem secara sepihak tanpa masukan langsung petugas loket.",
    tip: "Dalam ekosistem layanan terpadu lintas instansi, penyelarasan kuota dan alur harus melibatkan pemetaan beban riil tiap loket mitra.",
  },
  {
    id: "tkp-jej-045",
    subPattern: "koordinasi-lintas-unit-dan-instansi",
    difficulty: "sedang",
    prompt:
      "Dalam rapat penyusunan Rencana Tata Ruang Wilayah (RTRW), Dinas Pekerjaan Umum mendorong perluasan kawasan industri, Dinas Pertanian mempertahankan lahan pangan berkelanjutan, dan Dinas Lingkungan Hidup menyoroti kawasan resapan air pada wilayah yang sama. Sebagai perencana yang memoderasi tim teknis, sikap Anda adalah ...",
    options: [
      "Menunda pembahasan peta wilayah sengketa tersebut hingga masing-masing dinas menyelesaikan kajian internalnya sendiri.",
      "Mengikuti usulan perluasan kawasan industri karena dinilai paling cepat meningkatkan pendapatan asli daerah dalam jangka pendek.",
      "Mengajak ketiga dinas memadukan peta tematik bersama guna merumuskan zonasi berbasis daya dukung lingkungan.",
      "Meminta ketiga dinas mengirimkan dokumen argumen tertulis masing-masing agar tim sekretariat merangkumnya secara lengkap untuk pimpinan.",
      "Menghubungi kepala bidang tiap dinas secara terpisah guna mencari titik temu sebelum peta rancangan resmi dibawa ke rapat pleno.",
    ],
    optionScores: [2, 1, 5, 3, 4],
    answer: "C",
    explanation:
      "Melakukan tumpang susun peta tematik bersama untuk merumuskan zonasi berbasis daya dukung menyatukan kepentingan lintas sektor lewat bukti objektif, lebih kolaboratif dan akurat daripada sekadar melobi kepala bidang secara terpisah tanpa analisis spasial bersama.",
    tip: "Benturan mandat lintas sektor diselesaikan dengan data objektif bersama untuk menemukan kompromi yang menjaga kepentingan publik.",
  },
  {
    id: "tkp-jej-046",
    subPattern: "koordinasi-lintas-unit-dan-instansi",
    difficulty: "sedang",
    prompt:
      "Warga bantaran sungai melaporkan dugaan pencemaran limbah di wilayah perbatasan kota, namun Dinas Lingkungan Hidup, Dinas Perindustrian, dan pihak kecamatan saling menunggu penindakan karena menganggap titik sumber limbah berada di luar kewenangan penuh unitnya. Sebagai pejabat penghubung lingkungan, langkah Anda adalah ...",
    options: [
      "Menginisiasi inspeksi lapangan gabungan lintas instansi untuk memetakan sumber limbah dan membagi tindak lanjut sesuai mandat.",
      "Menyerahkan laporan warga kepada bagian pengaduan umum pemerintah daerah untuk menentukan dinas mana yang paling berwenang menanganinya.",
      "Membalas aduan warga dengan penjelasan resmi bahwa wilayah sumber limbah masih perlu dikonfirmasi batas administrasinya oleh pihak kecamatan.",
      "Mengirimkan surat dinas resmi kepada Dinas Perindustrian dan pihak kecamatan agar masing-masing segera memeriksa potensi sumber limbah di area kerjanya.",
      "Melakukan pengambilan sampel air sungai bersama staf unit Anda saja dan menyerahkan hasilnya kepada pimpinan tanpa mengajak instansi lain.",
    ],
    optionScores: [5, 3, 1, 4, 2],
    answer: "A",
    explanation:
      "Menginisiasi tim inspeksi gabungan untuk memetakan sumber dan membagi langkah sesuai kewenangan langsung menjawab keresahan warga sekaligus mengakhiri lempar tanggung jawab, lebih cepat dan tuntas daripada sekadar bersurat agar tiap instansi memeriksa terpisah.",
    tip: "Saat menghadapi masalah lintas batas kewenangan, bentuk kerja sama lapangan terpadu dan bagi peran berdasarkan mandat tiap instansi.",
  },
  {
    id: "tkp-jej-047",
    subPattern: "koordinasi-lintas-unit-dan-instansi",
    difficulty: "sulit",
    prompt:
      "Menjelang tutup tahun anggaran, integrasi sistem pengadaan barang/jasa dengan aplikasi keuangan daerah tersendat karena unit pengadaan menuntut fleksibilitas revisi kontrak cepat, sedangkan bagian keuangan dan inspektorat mewajibkan verifikasi berjenjang untuk mencegah temuan audit. Sebagai ketua tim penghubung proyek, strategi Anda adalah ...",
    options: [
      "Meminta bagian keuangan melonggarkan prosedur verifikasi kontrak sementara waktu agar target serapan anggaran akhir tahun tetap tercapai.",
      "Menyetujui tuntutan unit pengadaan terlebih dahulu supaya transaksi berjalan cepat lalu melengkapi catatan verifikasi pada awal tahun berikutnya.",
      "Menampung masukan kedua belah pihak dalam notula rapat kemudian meminta keputusan tegas pimpinan daerah atas prosedur mana yang dipakai.",
      "Mengajak unit pengadaan, keuangan, dan inspektorat merumuskan alur jalur cepat (fast-track) terdokumentasi dengan daftar periksa audit standar bagi revisi mendesak.",
      "Menyusun usulan standar verifikasi baru secara internal di unit Anda lalu mengedarkannya kepada unit pengadaan dan keuangan untuk diuji coba.",
    ],
    optionScores: [1, 2, 3, 5, 4],
    answer: "D",
    explanation:
      "Merumuskan alur jalur cepat yang tetap memenuhi daftar periksa audit bersama ketiga unsur menjembatani kebutuhan kecepatan sekaligus kepatuhan regulasi, lebih akuntabel dan diterima semua pihak daripada menyusun usulan standar sendiri tanpa kehadiran inspektorat dan mitra teknis.",
    tip: "Sinergi antara unit operasional dan pengawasan tercapai lewat prosedur ringkas yang tetap menjaga jejak audit dan kepatuhan aturan.",
  },
  {
    id: "tkp-jej-048",
    subPattern: "koordinasi-lintas-unit-dan-instansi",
    difficulty: "sulit",
    prompt:
      "Gelombang tinggi pada masa puncak arus mudik menyebabkan antrean kendaraan mengular hingga luar pelabuhan penyeberangan antarprovinsi, sementara otoritas pelabuhan, kepolisian lalu lintas, dinas perhubungan, dan BMKG masih berkomunikasi lewat grup terpisah sehingga informasi jadwal sandar dan pengalihan kantong parkir sering berbenturan. Sebagai perwakilan dinas perhubungan di posko wilayah, tindakan Anda adalah ...",
    options: [
      "Memfokuskan petugas dinas perhubungan mengatur pintu masuk pelabuhan saja agar antrean jalan raya utama tidak sepenuhnya lumpuh.",
      "Mengusulkan pusat kendali informasi terpadu antarempat instansi dengan satu juru bicara jadwal kapal dan pengalihan arus.",
      "Membagikan pembaruan prakiraan cuaca BMKG secara rutin ke grup petugas lapangan dinas Anda agar penempatan rambu bisa disesuaikan.",
      "Menghubungi kepala posko kepolisian dan otoritas pelabuhan secara bergantian setiap jam guna menyinkronkan jadwal pembukaan dermaga.",
      "Meneruskan seluruh keluhan pemudik mengenai ketidakpastian jadwal kapal kepada otoritas pelabuhan agar mereka segera memberi pengumuman resmi.",
    ],
    optionScores: [2, 5, 3, 4, 1],
    answer: "B",
    explanation:
      "Mengusulkan pusat kendali informasi bersama antarempat instansi dengan satu sumber jadwal terpadu memutus silang informasi secara sistemik di tengah krisis, lebih terukur dan berkelanjutan daripada mengandalkan kontak bergantian setiap jam.",
    tip: "Dalam situasi darurat atau layanan padat lintas sektor, satukan kanal komando dan informasi agar keputusan lapangan tidak saling bertabrakan.",
  },
  {
    id: "tkp-jej-049",
    subPattern: "membangun-kepercayaan-dan-relasi-profesional",
    difficulty: "mudah",
    prompt:
      "Anda baru ditugaskan sebagai pejabat penghubung menggantikan senior yang sudah bertahun-tahun menjalin kedekatan dengan tim pendamping kementerian mitra. Pada rapat awal, perwakilan mitra tampak canggung dan masih sering menghubungi pejabat lama secara pribadi. Sikap Anda untuk membangun kepercayaan adalah ...",
    options: [
      "Menegur pihak mitra dengan halus agar berhenti menghubungi pejabat lama karena surat tugas penghubung telah resmi berpindah ke Anda.",
      "Menunggu pihak mitra menghubungi Anda terlebih dahulu saat mereka benar-benar membutuhkan dokumen resmi dari unit Anda.",
      "Memperkenalkan diri hangat, mendampingi serah terima kebutuhan mitra bersama pejabat lama, dan menjaga respons komunikasi.",
      "Meminta bantuan pejabat lama untuk tetap mewakili seluruh diskusi teknis dengan pihak mitra selama masa peralihan beberapa bulan ke depan.",
      "Mengirimkan surat pemberitahuan pergantian pejabat penghubung lengkap dengan nomor kontak kerja resmi Anda kepada koordinator tim mitra.",
    ],
    optionScores: [1, 2, 5, 3, 4],
    answer: "C",
    explanation:
      "Memperkenalkan diri secara hangat, melakukan transisi bersama pejabat lama sambil memetakan kebutuhan mitra, dan konsisten dalam merespons membangun rasa aman profesional, jauh lebih efektif daripada sekadar mengirim surat pemberitahuan formal tanpa jembatan relasi.",
    tip: "Kepercayaan mitra saat transisi peran dibangun melalui serah terima yang hangat, kejelasan komitmen, dan keandalan respons.",
  },
  {
    id: "tkp-jej-050",
    subPattern: "membangun-kepercayaan-dan-relasi-profesional",
    difficulty: "mudah",
    prompt:
      "Dua minggu setelah rapat dengar pendapat di kecamatan, ketua karang taruna menghubungi Anda menanyakan kelanjutan proposal pelatihan kewirausahaan pemuda yang proses anggarannya memang sedang tertunda penelaahan di tingkat kabupaten. Sikap Anda yang menjaga kredibilitas instansi adalah ...",
    options: [
      "Menyarankan ketua karang taruna mengajukan ulang proposal ke dinas lain agar peluang pendanaan tahun ini tidak hilang.",
      "Menghindari panggilan teleponnya sementara waktu hingga surat penetapan anggaran resmi dari tim kabupaten benar-benar terbit.",
      "Menjanjikan bahwa proposal tersebut pasti disetujui bulan depan supaya pemuda desa tetap tenang dan bersemangat menunggu.",
      "Menjawab singkat melalui pesan teks bahwa proposal masih dalam proses di tingkat kabupaten tanpa memberikan perkiraan waktu.",
      "Menjelaskan secara jujur posisi proses penelaahan saat ini, menyampaikan perkiraan jadwal kepastiannya, dan berkomitmen mengabari begitu ada perkembangan.",
    ],
    optionScores: [2, 1, 3, 4, 5],
    answer: "E",
    explanation:
      "Menyampaikan status riil secara jujur, memberikan estimasi waktu yang realistis, dan berkomitmen memberi kabar lanjutan menjaga kepercayaan mitra tanpa memberi janji palsu, lebih membangun relasi daripada jawaban singkat yang terasa menghindar.",
    tip: "Kejujuran atas proses yang tertunda disertai kepastian komunikasi lanjutan jauh lebih menjaga kepercayaan daripada janji kosong.",
  },
  {
    id: "tkp-jej-051",
    subPattern: "membangun-kepercayaan-dan-relasi-profesional",
    difficulty: "sedang",
    prompt:
      "Dalam program kemitraan bank sampah antara dinas lingkungan hidup, komunitas warga, dan perusahaan mitra CSR, partisipasi warga mendadak menurun karena beredar isu bahwa dana insentif penimbangan dipotong oleh pengelola dinas. Sebagai koordinator kemitraan, tindakan Anda adalah ...",
    options: [
      "Mengajak komunitas warga dan mitra CSR menggelar forum terbuka guna memaparkan catatan transaksi dana secara transparan.",
      "Meminta perusahaan mitra CSR mengeluarkan siaran pers bantahan singkat melalui media sosial resmi agar nama baik program tetap terjaga.",
      "Menelusuri siapa warga yang menyebarkan isu potongan insentif tersebut lalu memberinya peringatan agar tidak merusak program.",
      "Mengirimkan rekapitulasi laporan keuangan program lengkap kepada ketua komunitas warga agar ia menjelaskannya sendiri kepada seluruh anggota.",
      "Tetap menjalankan jadwal penimbangan sampah seperti biasa karena isu tidak berdasar tersebut diyakini akan mereda sendiri.",
    ],
    optionScores: [5, 3, 1, 4, 2],
    answer: "A",
    explanation:
      "Menggelar forum terbuka bersama komunitas dan mitra CSR untuk memaparkan catatan transaksi secara transparan langsung memulihkan kepercayaan seluruh pihak, lebih meyakinkan daripada sekadar mengirim rekapitulasi kepada satu pengurus tanpa dialog terbuka.",
    tip: "Keraguan terkait pengelolaan dana atau manfaat bersama harus dijawab dengan transparansi data dan ruang verifikasi terbuka.",
  },
  {
    id: "tkp-jej-052",
    subPattern: "membangun-kepercayaan-dan-relasi-profesional",
    difficulty: "sedang",
    prompt:
      "Pejabat penghubung kementerian pusat meminta angka capaian indikator layanan daerah Anda dalam dua jam untuk bahan paparan pimpinan nasional. Setelah memeriksa berkas, Anda menemukan sebagian data dari satu kecamatan masih berstatus perkiraan sementara yang belum tervalidasi. Sikap paling tepat Anda adalah ...",
    options: [
      "Mengirimkan angka perkiraan tersebut seolah sudah final agar permintaan mendesak kementerian pusat terpenuhi tepat waktu.",
      "Menunda pengiriman seluruh laporan daerah Anda hingga verifikasi data satu kecamatan selesai tanpa memberi kabar ke pusat.",
      "Mengirimkan data daerah tanpa menyertakan angka kecamatan tersebut sambil berharap tidak ditanyakan pada rapat nasional.",
      "Mengirimkan data tervalidasi tepat waktu dengan catatan jelas atas status sementara satu kecamatan serta jadwal finalisasinya.",
      "Menghubungi operator kecamatan melalui sambungan telepon agar langsung mengesahkan angka perkiraan sementara tersebut menjadi data final hari ini.",
    ],
    optionScores: [1, 2, 3, 5, 4],
    answer: "D",
    explanation:
      "Menyampaikan data tervalidasi tepat waktu sambil menandai secara jujur status angka yang masih sementara serta jadwal finalisasinya menjaga ketepatan waktu sekaligus integritas data, lebih aman daripada memaksa pengesahan data yang belum teruji.",
    tip: "Kepercayaan jangka panjang mitra berdiri di atas akurasi dan kejujuran status data, bukan sekadar kecepatan memenuhi tenggat.",
  },
  {
    id: "tkp-jej-053",
    subPattern: "membangun-kepercayaan-dan-relasi-profesional",
    difficulty: "sedang",
    prompt:
      "Auditor eksternal menemukan ketidaksesuaian administratif kecil pada berita acara serah terima barang proyek lintas unit yang Anda koordinasikan. Beberapa rekan menyarankan agar berkas pendukung tambahan ditahan dulu sambil mencari celah alasan agar temuan tidak meluas. Sikap Anda adalah ...",
    options: [
      "Mengikuti saran rekan menahan berkas sementara hingga unit pengadaan menyusun alasan pembenaran yang terdengar paling aman.",
      "Bersikap kooperatif menyerahkan seluruh berkas pendukung secara utuh sambil mengajak unit terkait memaparkan kronologi dan rencana perbaikan administratif.",
      "Menyerahkan hanya dokumen yang diminta secara tertulis oleh auditor tanpa menjelaskan konteks kendala di lapangan.",
      "Meminta pimpinan unit lain yang menandatangani berita acara untuk menghadapi sendiri klarifikasi dengan tim auditor eksternal.",
      "Menyampaikan klarifikasi terbuka kepada auditor mengenai kesalahan administratif tersebut namun menunda koordinasi perbaikan dengan unit terkait hingga laporan audit terbit.",
    ],
    optionScores: [1, 5, 3, 2, 4],
    answer: "B",
    explanation:
      "Bersikap kooperatif membuka dokumen secara utuh sekaligus melibatkan unit terkait dalam rencana perbaikan menunjukkan akuntabilitas dan menjaga kepercayaan lembaga pengawas, lebih konstruktif daripada sekadar mengaku keliru tanpa langkah koreksi bersama.",
    tip: "Keterbukaan yang disertai kesiapan memperbaiki kesalahan secara kolektif memperkuat kredibilitas di hadapan mitra pengawas.",
  },
  {
    id: "tkp-jej-054",
    subPattern: "membangun-kepercayaan-dan-relasi-profesional",
    difficulty: "sedang",
    prompt:
      "Perwakilan organisasi penyandang disabilitas menyampaikan kritik keras saat meninjau gedung pelayanan publik yang baru diresmikan karena jalur landai kursi roda terlalu curam dan belum dilengkapi pemandu taktil memadai. Sebagai koordinator relasi pemangku kepentingan, respons Anda adalah ...",
    options: [
      "Menjelaskan bahwa desain gedung sudah mengikuti rencana anggaran tahun berjalan sehingga perubahan fisik belum dapat dibahas tahun ini.",
      "Membela kontraktor pembangunan gedung di hadapan media agar citra peresmian fasilitas baru pemerintah daerah tidak tercoreng.",
      "Mencatat kritik tersebut di buku tamu acara sebagai masukan umum untuk dipertimbangkan jika ada renovasi gedung pada masa depan.",
      "Menyampaikan permohonan maaf secara sopan atas kekurangan fasilitas sambil melaporkan temuan organisasi tersebut kepada unit sarana prasarana.",
      "Mengapresiasi masukan mitra disabilitas, mengajak mereka meninjau titik kendala bersama tim teknis sarana prasarana, lalu menyepakati langkah penyesuaian bertahap.",
    ],
    optionScores: [2, 1, 3, 4, 5],
    answer: "E",
    explanation:
      "Mengapresiasi kritik, menguji langsung titik kendala bersama tim teknis dan perwakilan komunitas, serta menyepakati penyesuaian nyata menjadikan mitra bagian dari solusi, lebih bermakna daripada sekadar meminta maaf dan meneruskan laporan tanpa tindak lanjut bersama.",
    tip: "Libatkan mitra yang memberi kritik sebagai rekan uji coba dan perumusan perbaikan agar kepercayaan tumbuh melalui aksi nyata.",
  },
  {
    id: "tkp-jej-055",
    subPattern: "membangun-kepercayaan-dan-relasi-profesional",
    difficulty: "sulit",
    prompt:
      "Seorang rekan penghubung dari instansi pengawas yang selama ini banyak membantu kelancaran koordinasi proyek Anda secara pribadi meminta bantuan agar berkas rekomendasi teknis usaha kerabatnya dapat dilonggarkan dari satu syarat dokumen lapangan dengan alasan menjaga hubungan baik antarinstansi. Sikap paling berintegritas dalam menjaga relasi profesional adalah ...",
    options: [
      "Meluluskan permintaan itu sekali saja karena syarat yang kurang bersifat minor dan hubungan baik dengan instansi pengawas sangat dibutuhkan.",
      "Memutus jalur komunikasi informal dengan rekan tersebut dan melaporkannya langsung sebagai percobaan suap ke atasan tanpa klarifikasi.",
      "Menolak pelonggaran syarat secara santun demi integritas bersama sambil memandu pemenuhan dokumen yang sah.",
      "Menolak permintaan tersebut dengan alasan kewenangan tanda tangan berada di tangan kepala dinas sehingga Anda tidak berani mengambil risiko apa pun.",
      "Menyarankan rekan tersebut agar kerabatnya menyerahkan surat pernyataan pengganti sementara meskipun prosedur resmi sebenarnya tetap mensyaratkan verifikasi lapangan.",
    ],
    optionScores: [1, 2, 5, 4, 3],
    answer: "C",
    explanation:
      "Menolak pelonggaran aturan secara santun berlandaskan integritas bersama sambil memberi panduan pemenuhan syarat yang sah menjaga kemitraan tetap terhormat dan bersih, lebih berprinsip daripada sekadar berlindung di balik nama atasan tanpa sikap tegas terhadap aturan.",
    tip: "Relasi profesional sejati dijaga dengan kepatuhan aturan yang adil dan bantuan prosedural yang sah, bukan kompromi penyimpangan.",
  },
  {
    id: "tkp-jej-056",
    subPattern: "membangun-kepercayaan-dan-relasi-profesional",
    difficulty: "sulit",
    prompt:
      "Kemitraan ketahanan pangan antara dinas Anda dan gabungan koperasi petani terancam batal karena dana pendampingan terlambat cair dua triwulan akibat penyesuaian regulasi pusat. Ketua koperasi yang kecewa menyatakan siap menarik seluruh kelompok tani dari kerja sama pekan depan. Tindakan paling strategis Anda adalah ...",
    options: [
      "Menghadirkan unit keuangan bertemu pengurus koperasi untuk membuka bukti progres, memberi dukungan nontunai mendesak, dan mengawal jadwal cair bersama.",
      "Mengirimkan salinan peraturan pusat terbaru kepada ketua koperasi agar mereka memahami bahwa keterlambatan pencairan berada di luar kendali dinas daerah.",
      "Meminta ketua koperasi bersabar menunggu sambil berjanji bahwa pencairan anggaran pasti dilakukan sekaligus setelah revisi aturan selesai.",
      "Menghubungi ketua koperasi melalui telepon untuk menyampaikan permohonan maaf atas keterlambatan sistem dan meminta mereka menunda keputusan mundur selama dua minggu.",
      "Menyiapkan daftar kelompok tani pengganti dari kecamatan lain agar target program ketahanan pangan dinas tidak jatuh jika koperasi tersebut mundur.",
    ],
    optionScores: [5, 3, 2, 4, 1],
    answer: "A",
    explanation:
      "Menghadirkan bagian terkait secara langsung untuk membuka bukti progres, menawarkan dukungan teknis/nontunai yang bisa segera berjalan, dan mengawal bersama hingga cair memulihkan kepercayaan di titik kritis, lebih konkret daripada sekadar memohon penundaan lewat telepon.",
    tip: "Saat kemitraan nyaris putus akibat kendala eksternal, hadirkan transparansi bukti progres dan tawarkan solusi jembatan yang langsung meringankan beban mitra.",
  },
  {
    id: "tkp-jej-057",
    subPattern: "kolaborasi-tim-dan-pembagian-peran",
    difficulty: "mudah",
    prompt:
      "Tim Anda ditugaskan menyusun paket publikasi capaian kinerja triwulanan dalam dua hari yang mencakup pengolahan data statistik, penulisan naskah siaran pers, dan desain infografis. Setiap anggota memiliki keunggulan keahlian yang berbeda. Cara terbaik memulai kerja tim adalah ...",
    options: [
      "Meminta setiap anggota mengerjakan seluruh komponen secara utuh per bagian bab agar tidak ada yang saling menunggu.",
      "Memetakan kekuatan anggota untuk membagi peran data, naskah, dan desain disertai jadwal sinkronisasi.",
      "Menunjuk anggota termuda untuk menangani desain infografis sementara anggota lainnya menyusun narasi tanpa membahas batas waktu antara.",
      "Membiarkan setiap anggota memilih sendiri bagian yang paling disukai selama seluruh bahan publikasi selesai tuntas sebelum sore hari kedua.",
      "Menunggu koordinator tim membagi seluruh rincian pekerjaan agar pembagian tugas tidak memicu perdebatan di awal rapat.",
    ],
    optionScores: [2, 5, 3, 4, 1],
    answer: "B",
    explanation:
      "Memetakan kekuatan anggota ke peran spesifik dengan jadwal sinkronisasi harian memaksimalkan kualitas sekaligus kecepatan tim, lebih terstruktur daripada sekadar membiarkan anggota memilih bebas tanpa titik temu integrasi hasil.",
    tip: "Pembagian peran berbasis kompetensi yang dilengkapi jadwal sinkronisasi mencegah penumpukan maupun keterlambatan antartahap.",
  },
  {
    id: "tkp-jej-058",
    subPattern: "kolaborasi-tim-dan-pembagian-peran",
    difficulty: "mudah",
    prompt:
      "Saat survei kepuasan masyarakat dilaksanakan serentak di lima kecamatan, kendaraan operasional anggota tim yang bertugas di kecamatan terjauh mengalami mogok di tengah rute sehingga jadwal wawancara berisiko terlewat. Sebagai anggota tim di kecamatan terdekat yang hampir rampung, sikap Anda adalah ...",
    options: [
      "Menyelesaikan target responden di kecamatan Anda terlebih dahulu lalu kembali ke kantor sesuai jadwal pengumpulan laporan awal.",
      "Menyarankan anggota yang terkendala tersebut memesan kendaraan umum seadanya meskipun jarak antarresponden di desa cukup berjauhan.",
      "Segera berkoordinasi dengan koordinator dan rekan tersebut untuk membagi sisa titik responden setelah target wilayah Anda tuntas.",
      "Menghubungi koordinator lapangan agar melaporkan kendala kendaraan tersebut dan meminta perpanjangan tenggat survei satu hari.",
      "Mengajak seluruh anggota tim menghentikan survei sementara guna berkumpul membantu perbaikan kendaraan di lokasi mogok.",
    ],
    optionScores: [2, 3, 5, 4, 1],
    answer: "C",
    explanation:
      "Berkoordinasi dengan koordinator untuk mengambil alih sebagian titik responden setelah wilayah sendiri tuntas menunjukkan solidaritas tim dan menjaga target kolektif, lebih proaktif daripada sekadar meminta perpanjangan tenggat tanpa redistribusi beban.",
    tip: "Dalam tim yang solid, selesaikan porsi sendiri dengan sigap lalu alokasikan kapasitas tersisa untuk menopang rekan yang terdampak kendala.",
  },
  {
    id: "tkp-jej-059",
    subPattern: "kolaborasi-tim-dan-pembagian-peran",
    difficulty: "sedang",
    prompt:
      "Dalam tim penyusunan rencana kerja dan anggaran, beban verifikasi harga satuan menumpuk pada satu staf hingga larut sore, sementara dua anggota tim lain yang bagian kerjanya sudah selesai tampak bersantai karena merasa itu di luar uraian tugas awal mereka. Sebagai sesama anggota tim, tindakan Anda adalah ...",
    options: [
      "Membiarkan kondisi tersebut agar menjadi pembelajaran bagi koordinator dalam membagi porsi pekerjaan pada rapat berikutnya.",
      "Menegur kedua rekan yang bersantai secara terbuka agar mereka segera sadar diri membantu staf yang sedang kewalahan.",
      "Membantu staf yang kewalahan tersebut seorang diri sampai malam agar seluruh dokumen tim tetap bisa disetor tepat waktu.",
      "Mengajak kedua rekan tersebut berdiskusi secara pribadi tentang ketimpangan beban kerja sambil menawarkan bagian teknis yang bisa dibantu.",
      "Mengusulkan penyeimbangan ulang beban kerja di hadapan tim secara santun dan membagi tugas pemeriksaan silang agar tuntas bersama.",
    ],
    optionScores: [2, 1, 3, 4, 5],
    answer: "E",
    explanation:
      "Mengusulkan penyeimbangan ulang beban dan membagi tugas pemeriksaan silang secara santun menggerakkan tanggung jawab kolektif seluruh tim secara sehat, lebih efektif dan adil daripada hanya membagi tugas tambahan di antara sebagian anggota secara informal.",
    tip: "Ketika terjadi penumpukan kerja di satu titik, ajak tim melakukan penyeimbangan ulang peran agar tenggat tercapai bersama tanpa kelelahan sepihak.",
  },
  {
    id: "tkp-jej-060",
    subPattern: "kolaborasi-tim-dan-pembagian-peran",
    difficulty: "sedang",
    prompt:
      "Tim lintas bidang diminta menggelar layanan perizinan usaha mikro keliling selama tiga hari. Beberapa anggota cenderung memilih lokasi pasar tengah kota agar dekat dengan kantor, padahal data pengaduan menunjukkan pedagang pasar pinggiran paling banyak terkendala akses izin. Pendapat dan langkah Anda adalah ...",
    options: [
      "Menyajikan peta data kebutuhan pedagang pinggiran dalam rapat tim lalu merancang jadwal bergilir yang adil beserta pembagian regu pendampingan.",
      "Menyetujui pilihan mayoritas anggota tim agar kegiatan perdana berjalan ringan dan kekompakan tim tetap terjaga tanpa perdebatan.",
      "Meminta pimpinan unit menentukan langsung lokasi pasar keliling tanpa perlu dibahas berulang kali di tingkat tim pelaksana.",
      "Mengusulkan agar hari pertama tetap digelar di pasar kota sedangkan pasar pinggiran dijadwalkan jika waktu dan anggaran masih tersisa.",
      "Menawarkan diri bertugas sendirian ke pasar pinggiran sementara rekan-rekan tim lain melayani pedagang di pasar tengah kota.",
    ],
    optionScores: [5, 1, 3, 4, 2],
    answer: "A",
    explanation:
      "Menggunakan data kebutuhan publik untuk menggeser orientasi tim menuju lokasi yang paling membutuhkan serta mengatur jadwal bergilir yang adil memadukan empati pelayanan dan keadilan beban kerja, lebih tepat daripada menunda pasar pinggiran sebagai opsi cadangan.",
    tip: "Arahkan keputusan kolaborasi tim berdasarkan dampak layanan berbasis data, lalu bagi giliran tugas secara adil agar semua siap mengeksekusi.",
  },
  {
    id: "tkp-jej-061",
    subPattern: "kolaborasi-tim-dan-pembagian-peran",
    difficulty: "sedang",
    prompt:
      "Tim Anda bertugas menyusun modul pelatihan aparatur desa. Seorang anggota yang bertanggung jawab atas bagian studi kasus lapangan tidak kunjung menyerahkan hasil wawancara selama sepekan, membuat tim penyunting dan tim tata letak tertahan menunggu. Sebagai koordinator alur modul, langkah Anda adalah ...",
    options: [
      "Menunggu laporan studi kasus tersebut beberapa hari lagi agar anggota yang bersangkutan tidak merasa ditekan oleh rekan sekerja.",
      "Mencoret bagian studi kasus dari modul pelatihan agar tim penyunting dan tata letak bisa langsung menyelesaikan naskah akhir.",
      "Melaporkan keterlambatan anggota tersebut kepada pimpinan unit supaya segera diberikan teguran disiplin atas hambatan kerja tim.",
      "Menelusuri kendalanya, membagi setoran kasus bertahap, dan mengaktifkan tim penyunting mengolah bahan yang sudah masuk.",
      "Mengirimkan pesan pengingat tenggat waktu di grup percakapan tim agar seluruh anggota penyunting bersiap lembur saat bahan studi kasus terkumpul.",
    ],
    optionScores: [2, 1, 3, 5, 4],
    answer: "D",
    explanation:
      "Menelusuri kendala, memecah setoran menjadi tahapan kecil, dan mengaktifkan tim penyunting memproses bahan yang tersedia langsung mengurai kemacetan alur paralel, lebih solutif daripada sekadar mengingatkan tenggat di grup yang membuat tim lain terus menunggu pasif.",
    tip: "Urai kemacetan (bottleneck) tim dengan mengecek kendala nyata, memecah pengiriman menjadi bertahap, dan menjalankan proses paralel.",
  },
  {
    id: "tkp-jej-062",
    subPattern: "kolaborasi-tim-dan-pembagian-peran",
    difficulty: "sedang",
    prompt:
      "Menjelang visitasi tim penilai akreditasi pelayanan publik nasional, tim dokumentasi bukti dukung dan tim simulasi layanan lapangan di unit Anda bekerja secara terpisah sehingga alur layanan yang disimulasikan petugas mulai tidak cocok dengan isi dokumen SOP yang dikumpulkan. Sikap Anda adalah ...",
    options: [
      "Memfokuskan penyempurnaan pada tim simulasi lapangan saja karena tim penilai biasanya lebih banyak mengamati praktik langsung di loket.",
      "Mengusulkan gladi bersih terpadu antara kedua subtim guna mencocokkan alur praktik dengan bukti dukung.",
      "Menyerahkan perbedaan antara dokumen dan praktik tersebut kepada ketua panitia akreditasi untuk diputuskan mana yang akan direvisi.",
      "Meminta tim dokumentasi mengganti salinan dokumen SOP agar langsung mengikuti kebiasaan terbaru yang dilakukan oleh petugas simulasi.",
      "Mengirimkan daftar poin ketidaksesuaian yang Anda temukan kepada masing-masing koordinator subtim melalui surel resmi untuk segera diperbaiki sendiri.",
    ],
    optionScores: [2, 5, 3, 1, 4],
    answer: "B",
    explanation:
      "Menggelar gladi bersih terpadu antara kedua subtim mempertemukan dokumen dan praktik nyata dalam satu ruang sinkronisasi, lebih menyeluruh dan mencegah salah tafsir dibanding hanya mengirim daftar temuan lewat surel ke masing-masing subtim.",
    tip: "Sinkronkan subtim dokumen dan subtim lapangan lewat uji silang atau gladi bersama agar keluaran tim menjadi satu kesatuan utuh.",
  },
  {
    id: "tkp-jej-063",
    subPattern: "kolaborasi-tim-dan-pembagian-peran",
    difficulty: "sulit",
    prompt:
      "Dalam tim reformasi birokrasi internal, subtim penyederhanaan SOP baru saja memangkas dua tahap verifikasi manual, sementara subtim digitalisasi sudah membangun prototipe aplikasi mengikuti alur lama karena kurangnya komunikasi tengah jalan. Tenggat uji coba tinggal lima hari lagi. Langkah paling tepat Anda selaku koordinator integrasi adalah ...",
    options: [
      "Meminta subtim digitalisasi membuang prototipe lama dan membangun ulang aplikasi dari nol sesuai SOP baru meskipun melampaui tenggat.",
      "Menetapkan penggunaan SOP lama terlebih dahulu selama masa uji coba aplikasi agar kerja keras subtim digitalisasi tidak terbuang sia-sia.",
      "Menghentikan proyek uji coba sementara untuk melaporkan kegagalan sinkronisasi kedua subtim kepada ketua tim reformasi birokrasi.",
      "Meminta ketua kedua subtim bernegosiasi berdua mengenai tahapan mana yang paling mudah disesuaikan sebelum membawa hasilnya ke rapat pleno.",
      "Mempertemukan kedua subtim guna mengaudit fitur yang masih relevan, menyepakati penyesuaian modul prioritas yang sesuai SOP ringkas, dan berbagi tugas pengujian.",
    ],
    optionScores: [2, 1, 3, 4, 5],
    answer: "E",
    explanation:
      "Mempertemukan kedua subtim untuk mengaudit bagian yang bisa dipertahankan serta memfokuskan penyesuaian prioritas sesuai SOP baru menyelamatkan tenggat sekaligus menjaga kualitas reformasi, lebih cepat dan kolaboratif daripada menyerahkan negosiasi tertutup pada dua ketua subtim saja.",
    tip: "Saat dua alur kerja paralel terlanjur berbeda, lakukan audit bersama untuk menyelamatkan bagian yang relevan dan menyelaraskan prioritas.",
  },
  {
    id: "tkp-jej-064",
    subPattern: "kolaborasi-tim-dan-pembagian-peran",
    difficulty: "sulit",
    prompt:
      "Anda memimpin tim audit kepatuhan pengadaan darurat beranggotakan pejabat fungsional lintas jenjang. Seorang anggota senior kerap mengubah jadwal pemeriksaan dan memberi perintah langsung kepada anggota junior tanpa berkoordinasi dengan Anda, sehingga tugas menjadi tumpang tindih dan anggota junior kebingungan. Sikap kepemimpinan kolaboratif Anda adalah ...",
    options: [
      "Menegur anggota senior tersebut di hadapan rapat tim agar seluruh anggota memahami bahwa hanya ketua tim yang berwenang memberi arahan.",
      "Membiarkan anggota senior tersebut mengambil alih kendali teknis agar tidak timbul ketegangan antara pegawai junior dan senior.",
      "Berdiskusi empat mata menghargai pengalaman senior sekaligus menyepakati koordinasi jadwal satu pintu.",
      "Meminta anggota junior hanya mematuhi pesan dari Anda dan mengabaikan instruksi langsung dari anggota senior mana pun.",
      "Menyampaikan surat edaran tata tertib pelaporan harian di grup percakapan tim supaya setiap anggota kembali mengikuti struktur pembagian tugas resmi.",
    ],
    optionScores: [1, 2, 5, 3, 4],
    answer: "C",
    explanation:
      "Berdiskusi empat mata dengan menghargai pengalaman senior sambil menyepakati tata kelola jadwal bersama satu pintu menjaga wibawa senior sekaligus mengembalikan ketertiban tim, lebih efektif memulihkan kolaborasi daripada sekadar mengedarkan tata tertib tertulis di grup.",
    tip: "Kelola dinamika senioritas dalam tim dengan pendekatan personal yang menghormati kontribusi sambil menegaskan kejelasan alur komando bersama.",
  },
  {
    id: "tkp-jej-065",
    subPattern: "berbagi-pengetahuan-dan-keterbukaan-informasi",
    difficulty: "mudah",
    prompt:
      "Setelah instansi mengganti aplikasi persuratan elektronik ke versi terbaru, banyak pegawai senior di subbagian tata usaha masih kebingungan menggunakan fitur disposisi berjenjang meski buku manual resmi setebal seratus halaman sudah dibagikan. Inisiatif berbagi pengetahuan paling tepat Anda adalah ...",
    options: [
      "Menyarankan para pegawai senior membaca ulang bab disposisi di buku manual resmi secara lebih teliti pada waktu luang.",
      "Membantu menekan tombol disposisi pada komputer rekan senior setiap kali mereka meminta tolong agar surat cepat terkirim.",
      "Mengusulkan kepada pimpinan unit agar segera menyelenggarakan bimbingan teknis ulang khusus pegawai senior oleh vendor pengembang.",
      "Membuat panduan ringkas satu halaman bergambar dan memandu praktik singkat bersama rekan tata usaha.",
      "Mengirimkan tautan video pelatihan resmi berdurasi satu jam dari kementerian ke grup percakapan subbagian tata usaha.",
    ],
    optionScores: [1, 2, 4, 5, 3],
    answer: "D",
    explanation:
      "Menyusun panduan ringkas bergambar satu halaman dan mendampingi sesi praktik singkat langsung menjawab hambatan belajar praktis rekan kerja, lebih cepat berdampak dan berdaya guna daripada menunggu pelatihan ulang dari vendor.",
    tip: "Ubah manual teknis yang rumit menjadi panduan ringkas visual dan praktik singkat agar mudah diterapkan seluruh anggota tim.",
  },
  {
    id: "tkp-jej-066",
    subPattern: "berbagi-pengetahuan-dan-keterbukaan-informasi",
    difficulty: "mudah",
    prompt:
      "Anda menyusun daftar periksa (checklist) sederhana untuk memverifikasi kelengkapan berkas izin usaha sehingga kesalahan pengembalian berkas di loket Anda turun drastis, sementara loket pelayanan sebelah masih sering menerima komplain pemohon karena dokumen terlewat. Sikap Anda adalah ...",
    options: [
      "Membagikan templat daftar periksa kepada rekan loket lain serta berdiskusi singkat cara penerapannya.",
      "Menyimpan daftar periksa tersebut sebagai inovasi pribadi untuk dipresentasikan saat penilaian kinerja individu akhir tahun.",
      "Memberikan salinan daftar periksa hanya jika petugas loket sebelah datang meminta bantuan secara langsung kepada Anda.",
      "Menyerahkan salinan berkas daftar periksa tersebut kepada kepala seksi tanpa menjelaskannya langsung kepada para rekan sejawat.",
      "Menyarankan rekan loket sebelah bekerja lebih teliti memeriksa syarat pemohon agar tidak terus memicu komplain warga.",
    ],
    optionScores: [5, 1, 3, 4, 2],
    answer: "A",
    explanation:
      "Membagikan templat daftar periksa secara proaktif sambil berdiskusi cara penerapannya menaikkan standar pelayanan seluruh unit kerja, lebih kolaboratif daripada hanya menyerahkannya ke pimpinan tanpa berbagi langsung ke rekan sejawat.",
    tip: "Praktik kerja baik yang terbukti efektif sebaiknya segera dibagikan terbuka agar kualitas layanan seluruh tim meningkat merata.",
  },
  {
    id: "tkp-jej-067",
    subPattern: "berbagi-pengetahuan-dan-keterbukaan-informasi",
    difficulty: "sedang",
    prompt:
      "Menjelang penyusunan perubahan anggaran, unit perencanaan baru menyampaikan rincian batas pagu dan perubahan indikator kinerja secara lisan pada rapat terbatas, sehingga beberapa seksi pelaksana salah menyusun rincian usulan kegiatan. Sebagai anggota tim perencana, usulan perbaikan keterbukaan informasi Anda adalah ...",
    options: [
      "Meminta setiap seksi pelaksana menanyakan langsung kepastian angka pagu kepada staf perencanaan sebelum mengetik usulan kegiatan.",
      "Mengingatkan para peserta rapat berikutnya agar mencatat perubahan pagu secara lebih cermat ketika paparan lisan disampaikan.",
      "Mengusulkan pembuatan folder awan terpusat berisi matriks pagu, perubahan indikator, dan log pembaruan yang dapat diakses serentak oleh seluruh seksi.",
      "Mengirimkan salinan slide paparan rapat perencanaan ke grup percakapan pimpinan seksi setiap kali selesai rapat perubahan anggaran.",
      "Menunggu seluruh draf usulan dari seksi masuk terlebih dahulu baru mengoreksi satu per satu angka indikator yang keliru.",
    ],
    optionScores: [3, 1, 5, 4, 2],
    answer: "C",
    explanation:
      "Membangun folder awan terpusat dengan matriks pagu dan log pembaruan menjamin sumber kebenaran tunggal (single source of truth) yang mutakhir bagi semua seksi, lebih sistematis dan mencegah salah versi dibanding sekadar mengirim slide paparan secara berulang.",
    tip: "Cegah kesalahan kerja akibat informasi terpecah dengan menyediakan satu rujukan data resmi yang terbuka dan mencatat riwayat pembaruan.",
  },
  {
    id: "tkp-jej-068",
    subPattern: "berbagi-pengetahuan-dan-keterbukaan-informasi",
    difficulty: "sedang",
    prompt:
      "Seorang CPNS dari seksi lain menghubungi Anda untuk meminta contoh Kerangka Acuan Kerja (KAK) pengadaan jasa konsultansi yang rapi sebagai referensi tugas pertamanya, namun saat itu Anda sedang mengejar penyusunan bahan paparan pimpinan untuk besok pagi. Sikap Anda adalah ...",
    options: [
      "Menolak permintaan tersebut karena Anda harus berkonsentrasi penuh menyelesaikan bahan paparan pimpinan hingga sore nanti.",
      "Mengirimkan templat KAK bersih disertai catatan bagian krusial dan menjadwalkan diskusi singkat seusai paparan.",
      "Meminta CPNS tersebut mencari sendiri dokumen KAK sejenis di arsip bagian umum agar tidak mengganggu persiapan bahan paparan Anda.",
      "Langsung mengirimkan berkas KAK proyek lama secara utuh tanpa catatan konteks lalu memintanya membaca serta menyesuaikan sendiri.",
      "Menjanjikan akan mencarikan dan mengirimkan contoh dokumen KAK pengadaan tersebut minggu depan setelah jadwal presentasi pimpinan benar-benar longgar.",
    ],
    optionScores: [1, 5, 2, 4, 3],
    answer: "B",
    explanation:
      "Mengirimkan templat bersih dengan catatan poin kunci secara cepat sambil menjanjikan diskusi singkat setelah paparan menjaga fokus prioritas tugas sekaligus mendukung tumbuhnya kompetensi rekan baru, lebih membina daripada mengirim berkas mentah tanpa panduan konteks.",
    tip: "Berbagi ilmu di tengah jadwal padat dapat dilakukan dengan memberikan rujukan terstruktur dulu dan menjadwalkan pendampingan singkat sesudahnya.",
  },
  {
    id: "tkp-jej-069",
    subPattern: "berbagi-pengetahuan-dan-keterbukaan-informasi",
    difficulty: "sedang",
    prompt:
      "Tim lapangan Anda sempat menemukan celah pencatatan ganda pada absensi pekerja program padat karya desa, namun segera memperbaikinya sebelum pencairan upah. Saat rapat evaluasi lintas wilayah, beberapa rekan mengusulkan agar kasus tersebut tidak diceritakan supaya laporan unit tampak sempurna. Sikap Anda adalah ...",
    options: [
      "Menyetujui usulan menyimpan kejadian tersebut karena masalah sudah dibereskan sebelum menimbulkan kerugian keuangan sedikit pun.",
      "Menyebutkan secara terbuka nama petugas desa yang lalai pada rapat lintas wilayah agar menjadi efek jera bagi wilayah lain.",
      "Menuliskan catatan kasus tersebut di arsip internal seksi saja tanpa membawanya ke forum evaluasi bersama wilayah lain.",
      "Mengungkapkan adanya koreksi administrasi secara umum di rapat evaluasi tanpa menjelaskan mekanisme pencegahan yang telah diterapkan.",
      "Berbagi pola celah pencatatan dan langkah pencegahannya sebagai pembelajaran bersama tanpa menyudutkan pihak tertentu.",
    ],
    optionScores: [1, 2, 3, 4, 5],
    answer: "E",
    explanation:
      "Membagikan pola kesalahan dan mekanisme pencegahannya secara objektif dan konstruktif mengubah kesalahan kecil menjadi proteksi bersama lintas wilayah, lebih bermanfaat bagi organisasi daripada sekadar menyebut koreksi secara umum tanpa membagi solusi pencegahannya.",
    tip: "Keterbukaan atas kendala operasional yang dibarengi solusi pencegahan mempercepat pembelajaran kolektif tanpa budaya saling menyalahkan.",
  },
  {
    id: "tkp-jej-070",
    subPattern: "berbagi-pengetahuan-dan-keterbukaan-informasi",
    difficulty: "sedang",
    prompt:
      "Sebagai petugas pengelola layanan informasi publik (PPID) unit, Anda mendapati dua bidang teknis enggan menyerahkan ringkasan progres proyek infrastruktur untuk dipublikasikan di portal transparansi daerah karena khawatir data tersebut dipelintir oleh pihak luar. Langkah Anda adalah ...",
    options: [
      "Membiarkan portal transparansi kosong untuk sementara waktu hingga kedua bidang teknis tersebut siap membuka data proyeknya.",
      "Mengambil paksa dokumen proyek dari staf administrasi kedua bidang dan langsung mengunggahnya ke portal tanpa persetujuan teknis.",
      "Melaporkan keengganan kedua bidang teknis tersebut ke inspektorat daerah sebagai pelanggaran undang-undang keterbukaan informasi publik.",
      "Berdiskusi bersama kedua bidang untuk memisahkan data yang wajib terbuka dari informasi dikecualikan serta menyusun ringkasan naratif yang mudah dipahami publik.",
      "Mengirimkan surat pemberitahuan resmi terkait daftar informasi wajib berkala sesuai undang-undang agar kedua bidang segera menyetor data proyek.",
    ],
    optionScores: [2, 1, 3, 5, 4],
    answer: "D",
    explanation:
      "Mengajak kedua bidang memilah informasi terbuka dari yang dikecualikan dan menyusun narasi publik yang jelas meredakan kekhawatiran salah tafsir sekaligus memenuhi hak publik, lebih kolaboratif daripada sekadar mengirim surat pengingat kewajiban undang-undang.",
    tip: "Dorong keterbukaan informasi publik dengan mengedukasi batas klasifikasi data serta membungkus data teknis dalam narasi yang akurat.",
  },
  {
    id: "tkp-jej-071",
    subPattern: "berbagi-pengetahuan-dan-keterbukaan-informasi",
    difficulty: "sulit",
    prompt:
      "Survei internal tentang iklim kerja dan kejelasan pembagian beban menunjukkan skor rendah di beberapa seksi. Sebagian pejabat pengusul menyarankan agar laporan yang dibagikan kepada seluruh pegawai hanya memuat skor rata-rata unit yang tampak positif agar semangat kerja tidak turun. Sebagai koordinator tim survei, sikap Anda adalah ...",
    options: [
      "Menyajikan hasil survei jujur per aspek disertai rencana tindak lanjut serta ruang dialog anonim yang aman.",
      "Mengikuti saran menyajikan skor rata-rata unit yang positif saja kepada pegawai sementara angka seksi yang rendah disimpan di laci pimpinan.",
      "Mengunggah seluruh lembar jawaban mentah lengkap dengan komentar kritis individu ke papan pengumuman internal agar semua merasa diawasi.",
      "Membagikan laporan lengkap seluruh aspek kepada para kepala seksi saja sambil meminta mereka menyampaikan poin positifnya kepada seluruh staf.",
      "Menunda publikasi hasil survei selama beberapa bulan hingga perbaikan internal selesai dilakukan agar laporan yang dibagikan kelak jauh lebih baik.",
    ],
    optionScores: [5, 2, 1, 4, 3],
    answer: "A",
    explanation:
      "Menyajikan temuan secara jujur per aspek sambil menjaga kerahasiaan responden dan menyertakan rencana perbaikan bersama membangun kepercayaan organisasi, lebih transparan dan memberdayakan daripada hanya membagikan angka lengkap kepada level pimpinan seksi saja.",
    tip: "Keterbukaan atas hasil evaluasi internal harus tetap melindungi kerahasiaan individu dan diikuti komitmen rencana perbaikan bersama.",
  },
  {
    id: "tkp-jej-072",
    subPattern: "berbagi-pengetahuan-dan-keterbukaan-informasi",
    difficulty: "sulit",
    prompt:
      "Dalam kolaborasi pemetaan risiko banjir bersama perguruan tinggi dan penyedia platform peta swasta, mitra swasta meminta akses penuh terhadap lapisan data koordinat jaringan listrik tegangan tinggi dan jalur pipa vital daerah dengan alasan menyempurnakan simulasi dampak. Sikap tepat Anda dalam mengelola keterbukaan data adalah ...",
    options: [
      "Menyerahkan seluruh lapisan data infrastruktur vital tersebut kepada mitra swasta karena proyek pemetaan banjir ini merupakan agenda prioritas daerah.",
      "Menolak seluruh pertukaran data geospasial dan memutus kerja sama pemodelan dengan mitra swasta demi alasan keamanan infrastruktur negara.",
      "Meminta persetujuan lisan pimpinan proyek untuk mengirimkan berkas peta infrastruktur vital tersebut khusus melalui surel pribadi peneliti swasta.",
      "Membuka akses data elevasi serta daerah rawan banjir secara lengkap terlebih dahulu sembari menangguhkan pembahasan data infrastruktur vital tanpa batas waktu.",
      "Melindungi koordinat objek vital sesuai aturan keamanan sambil menyuplai data zona dampak agregat untuk pemodelan.",
    ],
    optionScores: [1, 2, 3, 4, 5],
    answer: "E",
    explanation:
      "Melindungi koordinat objek vital sesuai aturan keamanan sekaligus menyuplai data zona dampak agregat yang tetap memadai untuk pemodelan menyeimbangkan kolaborasi riset dan keamanan negara, lebih solutif daripada sekadar menangguhkan kebutuhan mitra tanpa alternatif teknis.",
    tip: "Keterbukaan data lintas mitra wajib menghormati klasifikasi keamanan objek vital melalui penyediaan data agregat atau anonim yang tetap fungsional.",
  },
  {
    id: "tkp-jej-073",
    subPattern: "resolusi-konflik-kerja-dan-mediasi",
    difficulty: "mudah",
    prompt:
      "Dua petugas loket layanan terpadu beradu argumen soal giliran istirahat siang hingga loket sempat kosong sepuluh menit dan memicu keluhan pemohon yang mengantre. Sebagai rekan sejawat di ruang pelayanan yang sama, sikap Anda adalah ...",
    options: [
      "Segera membantu melayani antrean sementara secara diam-diam agar warga tidak menunggu tanpa menyentuh perselisihan kedua rekan tersebut.",
      "Melaporkan pertengkaran kedua petugas loket tersebut ke kepala seksi layanan supaya keduanya mendapat peringatan tegas siang itu juga.",
      "Meminta pemohon yang mengantre bersabar sejenak sambil mengingatkan kedua petugas di depan umum untuk menghentikan perdebatan mereka.",
      "Menengahi perdebatan dengan mengajak keduanya segera merapikan giliran istirahat bergilir dan menukar loket sejenak agar pelayanan kembali lancar.",
      "Mengambil alih pelayanan pemohon yang mengantre lebih dulu, lalu di ruang belakang mengajak kedua rekan menyepakati jadwal istirahat bergilir yang adil.",
    ],
    optionScores: [3, 2, 1, 4, 5],
    answer: "E",
    explanation:
      "Mengamankan pelayanan pemohon seketika lalu memediasi kesepakatan jadwal bergilir di ruang belakang menjaga citra pelayanan publik sekaligus menuntaskan akar konflik secara bermartabat, lebih bijak daripada berdiskusi soal giliran saat pemohon masih menunggu di loket.",
    tip: "Dalam konflik di area layanan publik, selamatkan layanan warga terlebih dahulu sebelum memediasi kesepakatan kerja tim di ruang tertutup.",
  },
  {
    id: "tkp-jej-074",
    subPattern: "resolusi-konflik-kerja-dan-mediasi",
    difficulty: "mudah",
    prompt:
      "Seorang rekan satu tim tampak murung dan enggan berpartisipasi aktif dalam diskusi setelah konsep acara sosialisasi yang ia susun semalaman kalah suara dari konsep anggota lain dalam rapat pemilihan program. Sikap empatik Anda untuk memulihkan kekompakan tim adalah ...",
    options: [
      "Membiarkannya menyendiri beberapa hari karena kekecewaan setelah kalah pemungutan suara dianggap hal wajar di dunia kerja.",
      "Mengapresiasi kerja kerasnya secara personal lalu mengajak memadukan elemen terbaik gagasannya ke rancangan acara.",
      "Mengatakan kepadanya di grup percakapan tim bahwa hasil pemungutan suara rapat sudah final sehingga semua anggota wajib tunduk.",
      "Menghiburnya secara pribadi bahwa konsep buatannya sebenarnya lebih bagus tetapi kalah karena faktor kedekatan antaranggota lain.",
      "Mengajak makan siang bersama tim seusai jam kerja sambil mengajaknya kembali aktif membahas pembagian tugas teknis acara terpilih nanti.",
    ],
    optionScores: [2, 5, 1, 3, 4],
    answer: "B",
    explanation:
      "Mengapresiasi jerih payahnya secara personal dan membuka ruang memasukkan elemen terbaik gagasannya ke konsep final menghargai martabat rekan sekaligus memperkaya hasil tim, lebih menyatukan daripada sekadar mengajaknya kembali bertugas tanpa mengakui kontribusi idenya.",
    tip: "Rangkul rekan yang gagasannya tidak terpilih dengan mengapresiasi usahanya dan mencari ruang kolaborasi untuk menyempurnakan konsep utama.",
  },
  {
    id: "tkp-jej-075",
    subPattern: "resolusi-konflik-kerja-dan-mediasi",
    difficulty: "sedang",
    prompt:
      "Terjadi ketegangan antara staf pengelola anggaran dan tim teknis kegiatan desa mengenai pencairan biaya transportasi lokal narasumber: tim teknis menilai aturan kaku menghambat kelancaran acara, sedangkan staf anggaran khawatir pengeluaran tersebut menjadi temuan pemeriksaan keuangan. Sebagai moderator koordinasi internal, langkah Anda adalah ...",
    options: [
      "Membela keinginan tim teknis agar biaya transportasi lokal dicairkan lebih luwes demi menghormati tokoh masyarakat yang hadir.",
      "Menyetujui penolakan penuh dari staf anggaran agar unit terhindar dari risiko temuan audit meskipun acara desa kekurangan narasumber.",
      "Meminta kedua pihak menuliskan argumen hukum masing-masing lalu menyerahkan keputusan akhir kepada pejabat pembuat komitmen.",
      "Mengajak kedua pihak duduk bersama menelaah aturan standar biaya yang berlaku untuk menemukan skema pertanggungjawaban sah yang tetap mendukung acara.",
      "Menyarankan tim teknis membiayai sementara kekurangan transportasi narasumber secara patungan sambil menunggu kejelasan tafsir aturan dari staf anggaran.",
    ],
    optionScores: [2, 1, 3, 5, 4],
    answer: "D",
    explanation:
      "Memfasilitasi penelaahan aturan bersama untuk menemukan skema pertanggungjawaban sah memadukan kelancaran operasional dan kepatuhan audit secara profesional, lebih sehat dan berkelanjutan daripada solusi patungan pribadi yang menutupi masalah prosedur.",
    tip: "Jembatani konflik antara kecepatan lapangan dan ketelitian anggaran lewat bedah regulasi bersama guna mencari skema sah yang aplikatif.",
  },
  {
    id: "tkp-jej-076",
    subPattern: "resolusi-konflik-kerja-dan-mediasi",
    difficulty: "sedang",
    prompt:
      "Dalam rapat daring proyek kolaborasi dua dinas, seorang anggota mitra melontarkan sindiran tajam mengenai kelambanan unit Anda mengirim draf perjanjian kerja sama, yang langsung dibalas dengan nada tinggi oleh rekan seunit Anda hingga suasana rapat memanas. Sebagai anggota rapat yang tenang, tindakan Anda adalah ...",
    options: [
      "Membela rekan seunit Anda di forum rapat dengan menjelaskan bahwa keterlambatan draf juga disebabkan lambatnya balasan dari pihak mitra.",
      "Memilih diam mematikan mikrofon sambil mencatat jalannya perdebatan untuk dilaporkan kepada pimpinan unit seusai rapat daring.",
      "Mengambil alih jeda bicara dengan nada tenang, mengajak kedua pihak fokus pada daftar poin draf yang perlu disepakati, lalu membagi jadwal penyelesaian.",
      "Mengirim pesan pribadi ke rekan seunit agar menurunkan emosinya dan membiarkan pimpinan rapat dari pihak mitra mengambil alih kendali.",
      "Meminta moderator rapat mengakhiri sesi diskusi daring lebih awal agar ketegangan antara kedua dinas tidak semakin meluas.",
    ],
    optionScores: [1, 2, 5, 4, 3],
    answer: "C",
    explanation:
      "Meredakan tensi secara tenang di forum dan mengarahkan diskusi kembali ke daftar poin penyelesaian beserta jadwal kerja mengembalikan produktivitas rapat saat itu juga, lebih efektif daripada sekadar mengingatkan rekan lewat pesan pribadi tanpa menyelamatkan dinamika forum.",
    tip: "Saat rapat lintas unit memanas, segera alihkan fokus dari serangan personal menuju daftar poin teknis dan jadwal tindak lanjut bersama.",
  },
  {
    id: "tkp-jej-077",
    subPattern: "resolusi-konflik-kerja-dan-mediasi",
    difficulty: "sedang",
    prompt:
      "Seorang pejabat pelaksana teknis di unit lain tampak tersinggung dan menegur Anda karena langsung menghubungi staf verifikator di bawahnya saat memproses berkas darurat warga yang hampir melewati batas waktu layanan. Sikap dewasa Anda untuk meredakan ketegangan dan menjaga jejaring kerja adalah ...",
    options: [
      "Meminta maaf tulus atas langkah pintas darurat tersebut serta menyepakati jalur eskalasi cepat ke depannya.",
      "Menjelaskan bahwa langkah menghubungi staf verifikator dilakukan semata demi menyelamatkan tenggat layanan masyarakat sehingga bukan pelanggaran substansi.",
      "Menerima teguran tersebut tanpa banyak membantah lalu berjanji hanya akan mengirim surat resmi lewat meja tata usaha pada kasus berikutnya.",
      "Menyampaikan permohonan maaf melalui pesan singkat sambil tetap berkoordinasi langsung dengan staf verifikator selama pejabat teknis sedang sibuk.",
      "Meminta pimpinan unit Anda menjelaskan kepada pejabat teknis tersebut bahwa prosedur cepat Anda memang diperlukan dalam keadaan mendesak.",
    ],
    optionScores: [5, 3, 4, 1, 2],
    answer: "A",
    explanation:
      "Mengakui kekeliruan komunikasi secara tulus, menjelaskan urgensi kemanusiaan/layanan, dan menyepakati jalur eskalasi cepat memulihkan rasa hormat sekaligus menyiapkan solusi untuk situasi darurat berikutnya, lebih progresif daripada sekadar pasrah menunggu jalur surat konvensional.",
    tip: "Hormati struktur mitra kerja dengan mengakui kekhilafan jalur komunikasi, lalu bangun kesepakatan protokol cepat untuk kondisi darurat.",
  },
  {
    id: "tkp-jej-078",
    subPattern: "resolusi-konflik-kerja-dan-mediasi",
    difficulty: "sedang",
    prompt:
      "Dalam forum Musrenbang tingkat kecamatan, perwakilan dua desa bertetangga berdebat keras memperebutkan prioritas anggaran tahun berjalan antara perbaikan jalan penghubung utama dan perbaikan saluran irigasi pertanian. Sebagai fasilitator forum dari unsur pemerintah, tindakan Anda adalah ...",
    options: [
      "Memutuskan langsung pemenang prioritas melalui pemungutan suara cepat agar jadwal acara Musrenbang kecamatan selesai tepat waktu.",
      "Menunda penetapan kedua usulan tersebut ke tahun anggaran berikutnya sampai kedua perwakilan desa sepakat secara mandiri.",
      "Memandu kedua desa membandingkan data penerima manfaat dan menyusun pentahapan anggaran lintas tahun.",
      "Mendengarkan seluruh argumen kedua desa secara bergantian lalu mencatat keduanya sebagai usulan dengan tingkat prioritas yang sama untuk diputuskan kabupaten.",
      "Mengusulkan pemangkasan separuh anggaran masing-masing proyek agar jalan penghubung dan saluran irigasi bisa dikerjakan sedikit demi sedikit tahun ini.",
    ],
    optionScores: [2, 1, 5, 4, 3],
    answer: "C",
    explanation:
      "Mengajak kedua pihak menilai urgensi berdasarkan data dampak objektif dan merumuskan kesepakatan pentahapan lintas tahun menjaga keadilan pembangunan serta meredam rivalitas antarwilayah, lebih solutif daripada sekadar melempar keputusan mentah ke tingkat kabupaten.",
    tip: "Mediasi perebutan sumber daya publik dilakukan dengan menimbang data manfaat objektif dan menawarkan pentahapan waktu yang adil.",
  },
  {
    id: "tkp-jej-079",
    subPattern: "resolusi-konflik-kerja-dan-mediasi",
    difficulty: "sulit",
    prompt:
      "Ketegangan berkepanjangan terjadi antara tim teknologi informasi dan tim pelayanan loket setelah pembaruan sistem antrean sering mengalami gangguan di jam sibuk. Tim loket menuding tim TI bekerja asal-asalan di balik meja, sedangkan tim TI menuduh petugas loket tidak mau membaca panduan baru. Sebagai koordinator operasional yang diminta memediasi, langkah terbaik Anda adalah ...",
    options: [
      "Meminta pimpinan unit memberikan teguran bersama kepada kedua tim karena konflik internal tersebut mengganggu kenyamanan pemohon di ruang tunggu.",
      "Memediasi lewat fakta log gangguan, mengajak tim TI mengamati loket sibuk, dan membangun kanal eror cepat.",
      "Memindahkan seluruh pengaduan gangguan sistem agar cukup dicatat dalam formulir kertas oleh kepala loket sebelum diteruskan kepada tim TI setiap akhir pekan.",
      "Mempertemukan perwakilan kedua tim di ruang rapat untuk saling meminta maaf dan menandatangani komitmen perbaikan komunikasi pelayanan.",
      "Membela tim pelayanan loket dengan meminta tim TI segera mengembalikan versi aplikasi lama sambil menghentikan pembaruan sistem.",
    ],
    optionScores: [1, 5, 3, 4, 2],
    answer: "B",
    explanation:
      "Menggunakan fakta log gangguan, menumbuhkan empati operasional lewat pengamatan langsung di loket, dan membangun kanal perbaikan cepat menuntaskan sumber teknis maupun emosional konflik, lebih menyeluruh daripada sekadar seremoni permintaan maaf di ruang rapat.",
    tip: "Konflik antarunit pendukung dan unit layanan garda depan selesai tuntas lewat empati konteks lapangan, data objektif, dan protokol perbaikan bersama.",
  },
  {
    id: "tkp-jej-080",
    subPattern: "resolusi-konflik-kerja-dan-mediasi",
    difficulty: "sulit",
    prompt:
      "Dalam satuan tugas penataan pedagang kaki lima yang melibatkan Satpol PP, Dinas Koperasi/UMKM, dan pengelola pasar, muncul pertentangan tajam di lapangan: satu instansi menuntut penertiban tegas hari itu juga sesuai perda ketertiban, sedangkan instansi lain menolak sebelum kios relokasi siap pakai dan sosialisasi tuntas. Sebagai sekretaris tim terpadu, solusi mediasi paling tepat Anda adalah ...",
    options: [
      "Mendukung penertiban tegas hari itu juga karena penegakan peraturan daerah merupakan kewajiban hukum yang tidak boleh ditawar.",
      "Membatalkan seluruh rencana penataan pedagang sampai seluruh kios relokasi baru selesai dibangun sempurna tanpa jadwal batas waktu.",
      "Melaporkan kebuntuan diskusi tim terpadu tersebut kepada kepala daerah dan menunda rapat hingga ada instruksi baru.",
      "Memfasilitasi kesepakatan peta jalan bertahap: menyelesaikan kesiapan kios relokasi dan sosialisasi persuasif dengan tenggat pasti sebelum penertiban terukur dijalankan.",
      "Mengusulkan penertiban hanya dilakukan pada ruas jalan protokol terlebih dahulu sambil membiarkan pedagang di ruas jalan lain berjualan sementara waktu.",
    ],
    optionScores: [2, 1, 3, 5, 4],
    answer: "D",
    explanation:
      "Memfasilitasi peta jalan bertahap yang memadukan kesiapan relokasi, sosialisasi persuasif bertenggat pasti, dan penegakan aturan terukur menyatukan ketertiban hukum dengan perlindungan ekonomi warga, lebih strategis daripada solusi parsial yang memicu kecemburuan antarpedagang.",
    tip: "Pertentangan antara ketegasan aturan dan kesiapan sosial diselesaikan lewat peta jalan bertahap yang mengikat seluruh instansi pada tenggat bersama.",
  },
];
