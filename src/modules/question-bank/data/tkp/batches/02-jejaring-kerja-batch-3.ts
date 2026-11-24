import type { TkpQuestionDraft } from "@/modules/question-bank/domain/question";

export const jejaringKerjaBatch3Drafts: readonly TkpQuestionDraft[] = [
  {
    id: "tkp-jej-081",
    subPattern: "dilema-kolaborasi-hybrid-dan-lintas-generasi",
    difficulty: "sedang",
    prompt:
      "Anda mengoordinasikan penyusunan laporan kinerja nasional dalam pola kerja hybrid bersama tim kementerian di Jakarta (WIB), balai di Makassar (WITA), dan perwakilan di Jayapura (WIT). Belakangan rapat mendadak pukul 16.00 WIB kerap membuat tim WIT hadir di luar jam kerja sehingga partisipasi mereka menurun. Langkah paling tepat Anda adalah ...",
    options: [
      "Memindahkan jadwal rapat mingguan tim ke pukul 10.00 WIB agar selaras dengan jam kerja tiga zona waktu, lalu mengirimkan tautan undangan rapat lebih awal kepada seluruh peserta.",
      "Mengizinkan perwakilan wilayah timur tidak menghadiri rapat sore secara langsung dan cukup mengirim tanggapan tertulis melalui grup percakapan resmi keesokan paginya.",
      "Mengajak tiga zona waktu menyepakati jendela kolaborasi inti bersama, memindahkan pembaruan rutin ke dokumen asinkron bertenggat jelas, serta membuka ringkasan keputusan.",
      "Meminta setiap perwakilan daerah mengusulkan daftar jam kosong masing-masing agar sekretariat tim pusat dapat menyusun jadwal rapat bergiliran tiap bulan secara merata.",
      "Tetap mempertahankan jadwal rapat pukul 16.00 WIB mengikuti agenda pimpinan pusat sambil mengimbau anggota tim daerah menyesuaikan kehadiran secara fleksibel.",
    ],
    optionScores: [4, 3, 5, 2, 1],
    answer: "C",
    explanation:
      "Tindakan berskor 5 membangun kesepakatan jendela kolaborasi lintas zona waktu sekaligus menata pembaruan rutin secara asinkron dan terdokumentasi sehingga seluruh wilayah setara tanpa kelelahan rapat. Memindahkan rapat ke pukul 10.00 WIB dan mengirim undangan lebih awal memang sopan dan peka zona waktu (skor 4), tetapi masih sepihak serta belum menata mekanisme kerja asinkron untuk mengurangi ketergantungan rapat mendadak.",
    tip: "Dalam kolaborasi lintas zona waktu, padukan kesepakatan jam inti bersama dengan mekanisme kerja asinkron agar partisipasi semua wilayah tetap setara.",
  },
  {
    id: "tkp-jej-082",
    subPattern: "dilema-kolaborasi-hybrid-dan-lintas-generasi",
    difficulty: "sulit",
    prompt:
      "Dalam tim penyusunan kebijakan berbasis kerja fleksibel (WFA), pegawai yang bekerja di kantor (WFO) mulai merasa beban koordinasi mendadak selalu jatuh kepada mereka karena rekan WFA baru membalas pesan sore hari saat fokus menyelesaikan analisis data. Sebagai koordinator tim, sikap terbaik Anda adalah ...",
    options: [
      "Memfasilitasi kesepakatan norma WFO–WFA yang adil meliputi jam respons inti, kanal eskalasi darurat, dan papan status tugas terbuka agar koordinasi terbagi merata.",
      "Menyarankan anggota WFA secara santun agar lebih rutin memeriksa grup percakapan kerja selama jam kantor berlangsung sehingga permintaan mendadak dari tim kantor dapat segera tertangani.",
      "Menetapkan giliran piket harian agar setiap hari selalu ada satu anggota WFA yang ditugaskan khusus memantau seluruh pesan koordinasi mendadak di grup tim.",
      "Mengusulkan kepada pimpinan unit agar skema WFA dihentikan sementara waktu hingga seluruh anggota tim menyelesaikan target penyusunan kebijakan bulan ini secara penuh.",
      "Meminta anggota WFO menyelesaikan terlebih dahulu permintaan mendadak yang bersifat administratif agar anggota WFA tidak terganggu saat mengolah data analisis kebijakan.",
    ],
    optionScores: [5, 4, 3, 1, 2],
    answer: "A",
    explanation:
      "Tindakan berskor 5 menyatukan kebutuhan kerja mendalam dan kebutuhan respons cepat melalui kesepakatan norma bersama, kanal eskalasi yang jelas, dan transparansi papan tugas sehingga kecurigaan antarkelompok hilang. Mengingatkan anggota WFA secara santun agar rutin memantau grup memang menjaga sopan santun dan koordinasi (skor 4), namun cenderung sepihak tanpa menata batas kerja fokus maupun visibilitas beban tim.",
    tip: "Gesekan antara tim WFO dan WFA diselesaikan lewat kesepakatan norma jam respons inti, kanal darurat, dan visibilitas progres bersama—bukan menegur satu pihak saja.",
  },
  {
    id: "tkp-jej-083",
    subPattern: "dilema-kolaborasi-hybrid-dan-lintas-generasi",
    difficulty: "sedang",
    prompt:
      "Saat rapat evaluasi proyek gabungan digelar secara hibrida, peserta yang hadir luring di ruang rapat pusat mendominasi perdebatan teknis dan kerap menyepakati perubahan jadwal tanpa terdengar jelas oleh anggota tim daerah yang bergabung melalui konferensi video. Tindakan Anda yang paling tepat adalah ...",
    options: [
      "Meminta peserta daring menuliskan seluruh masukan teknis di kolom obrolan konferensi video agar tidak memotong alur pembicaraan peserta di ruang rapat utama.",
      "Menyarankan agar rapat evaluasi berikutnya digelar penuh secara luring di kantor pusat supaya tidak ada lagi kendala teknis suara maupun gangguan sinyal daerah.",
      "Mencatat masukan peserta daring yang sempat terlewat untuk disampaikan secara terpisah kepada ketua proyek setelah agenda rapat evaluasi selesai dilaksanakan.",
      "Mencatat seluruh keputusan penting hasil diskusi ruang rapat luring secara lengkap dan rapi lalu segera mengirimkannya ke grup resmi agar tim daerah mengetahui tindak lanjutnya.",
      "Mengusulkan jeda moderasi bagi peserta daring di tiap agenda, menampilkan catatan keputusan langsung di layar bersama, dan menyepakati tata tertib rapat hibrida inklusif.",
    ],
    optionScores: [2, 1, 3, 4, 5],
    answer: "E",
    explanation:
      "Tindakan berskor 5 memulihkan kesetaraan suara peserta daring langsung di dalam forum melalui moderasi terstruktur, tampilan keputusan real-time, dan tata tertib rapat hibrida berkelanjutan. Merangkum lalu membagikan keputusan rapat ke grup resmi memang rapi dan membantu informasi (skor 4), tetapi tetap memosisikan anggota daerah hanya sebagai penerima keputusan satu arah.",
    tip: "Kunci kolaborasi hibrida yang sehat adalah memastikan peserta daring memiliki hak suara dan visibilitas keputusan yang setara dengan peserta di ruang rapat.",
  },
  {
    id: "tkp-jej-084",
    subPattern: "dilema-kolaborasi-hybrid-dan-lintas-generasi",
    difficulty: "sedang",
    prompt:
      "Seorang CPNS generasi Z di tim Anda mengirimkan revisi cepat infografis laporan lewat pesan singkat bernada santai tanpa pengantar formal, sehingga pejabat fungsional senior penyusun naskah dasarnya merasa kurang dihargai dan enggan menanggapi. Sebagai rekan satu tim, sikap terbaik Anda adalah ...",
    options: [
      "Menasihati rekan CPNS tersebut secara pribadi dengan sopan agar menggunakan sapaan formal saat mengirimkan hasil kerja kepada pegawai senior sambil mengapresiasi kecepatan desainnya.",
      "Menghubungi keduanya secara empatik untuk meluruskan maksud baik masing-masing, mengajak menyelaraskan naskah dan infografis bersama, serta membangun etika umpan balik tim.",
      "Meminta rekan CPNS mengirim ulang berkas infografisnya melalui surat elektronik resmi dengan tembusan atasan agar alur komunikasi kembali sesuai tata naskah dinas.",
      "Menyampaikan kepada pejabat senior bahwa gaya bahasa santai merupakan kebiasaan umum pegawai muda sehingga sebaiknya cukup berfokus pada kualitas desain infografisnya.",
      "Mengambil alih jalur komunikasi dengan meneruskan sendiri setiap revisi desain kepada pejabat senior agar kedua rekan kerja tersebut tidak perlu berinteraksi langsung.",
    ],
    optionScores: [4, 5, 3, 2, 1],
    answer: "B",
    explanation:
      "Tindakan berskor 5 menjembatani kedua pihak secara empatik tanpa menyudutkan, menuntaskan penyelarasan hasil kerja secara kolaboratif, dan membangun norma umpan balik lintas generasi bagi seluruh tim. Menasihati rekan CPNS secara pribadi dengan apresiasi memang santun dan membangun (skor 4), namun baru menyentuh satu sisi tanpa memulihkan dialog langsung antara kedua rekan kerja tersebut.",
    tip: "Hadapi gesekan gaya komunikasi lintas generasi dengan menjembatani niat baik kedua pihak dan menyepakati tata cara umpan balik bersama.",
  },
  {
    id: "tkp-jej-085",
    subPattern: "dilema-kolaborasi-hybrid-dan-lintas-generasi",
    difficulty: "sulit",
    prompt:
      "Dalam lokakarya modernisasi tata kelola arsip, pegawai muda mendorong migrasi penuh ke ruang kerja kolaboratif berbasis awan secara instan, sedangkan pegawai senior menolak karena khawatir jejak disposisi resmi kabur dan adaptasi terlalu tergesa-gesa sehingga diskusi terbelah dua kubu. Langkah paling tepat Anda adalah ...",
    options: [
      "Mengajak seluruh peserta lokakarya melakukan pemungutan suara terbuka di akhir sesi agar keputusan penerapan sistem awan berjalan demokratis sesuai suara terbanyak.",
      "Mendukung penuh penerapan sistem awan secara langsung karena transformasi digital merupakan tuntutan kebijakan wajib yang harus diikuti seluruh aparatur negara.",
      "Menenangkan suasana diskusi lokakarya dan mengusulkan penundaan keputusan migrasi hingga tim teknologi informasi memaparkan jaminan keamanan dokumen pada rapat bulan depan.",
      "Memediasi kedua kubu dengan memadukan efisiensi awan dan akuntabilitas disposisi resmi, lalu merancang uji coba bertahap berpasangan lintas generasi secara inklusif.",
      "Mencatat seluruh argumen dari kubu pegawai muda dan kubu pegawai senior secara berimbang untuk diserahkan kepada kepala biro sebagai bahan pertimbangan keputusan final.",
    ],
    optionScores: [2, 1, 4, 5, 3],
    answer: "D",
    explanation:
      "Tindakan berskor 5 mengubah pertentangan menjadi sintesis solusi yang menjaga akuntabilitas disposisi sekaligus memanfaatkan efisiensi digital, diikuti uji coba bertahap berpasangan lintas generasi agar adaptasi berjalan mulus. Menenangkan forum dan menunggu paparan keamanan TI memang sopan dan hati-hati (skor 4), namun masih menunda penyatuan tim tanpa memanfaatkan kekuatan kedua generasi.",
    tip: "Saat inovasi pegawai muda berbenturan dengan kehati-hatian pegawai senior, rangkum nilai terbaik keduanya ke dalam uji coba bertahap yang saling mendampingi.",
  },
  {
    id: "tkp-jej-086",
    subPattern: "dilema-kolaborasi-hybrid-dan-lintas-generasi",
    difficulty: "sedang",
    prompt:
      "Pegawai senior di tim penyusunan pedoman terbiasa menyunting draf dengan mencetak kertas dan memberi coretan tangan, sementara anggota muda memakai fitur komentar langsung di dokumen daring sehingga kerap muncul versi ganda yang membingungkan menjelang tenggat. Tindakan paling tepat Anda adalah ...",
    options: [
      "Mengajak keduanya menyepakati satu dokumen induk tunggal dengan pendampingan ringan fitur daring atau alih catat terpadu agar ketelitian dan kecepatan tetap terjaga.",
      "Membantu memindahkan seluruh coretan tangan pegawai senior ke dalam dokumen daring secara mandiri setiap kali ada revisi agar tim muda dapat langsung menindaklanjutinya tanpa tertunda.",
      "Menyarankan seluruh anggota tim sementara kembali menggunakan dokumen cetak pada tahap akhir agar tidak terjadi lagi tumpang tindih versi berkas menjelang tenggat.",
      "Meminta pegawai senior mempelajari panduan penyuntingan dokumen daring yang dibagikan di grup tim supaya seluruh catatan revisi langsung terpusat di satu berkas.",
      "Memisahkan bab yang dikerjakan pegawai senior dan pegawai muda secara terpisah lalu menggabungkan seluruh bagiannya tepat sehari sebelum tenggat pengumpulan laporan.",
    ],
    optionScores: [5, 4, 2, 3, 1],
    answer: "A",
    explanation:
      "Tindakan berskor 5 menyelesaikan akar masalah versi ganda melalui kesepakatan satu dokumen induk disertai pendampingan adaptif yang menghormati ketelitian pegawai senior sekaligus menjaga kelincahan kolaborasi tim. Memindahkan coretan tangan secara mandiri memang ringan tangan dan sopan (skor 4), tetapi berhenti pada upaya individual yang tidak berkelanjutan bila terjadi revisi berulang.",
    tip: "Perbedaan kebiasaan kerja analog dan digital paling efektif diselesaikan dengan satu alur induk yang disepakati bersama plus pendampingan saling menghargai.",
  },
  {
    id: "tkp-jej-087",
    subPattern: "dilema-kolaborasi-hybrid-dan-lintas-generasi",
    difficulty: "sulit",
    prompt:
      "Dalam program percepatan penurunan stunting terpadu, Dinas Kesehatan, Dinas Sosial, dan Dinas Pemberdayaan Masyarakat enggan membuka data rinci keluarga sasaran karena masing-masing khawatir capaian intervensi utama tidak tercatat pada indikator kinerja instansinya sendiri. Sebagai anggota tim koordinasi daerah, langkah terbaik Anda adalah ...",
    options: [
      "Melaporkan keengganan ketiga dinas tersebut secara tertulis kepada inspektorat daerah agar dilakukan pembinaan disiplin atas kurangnya dukungan program prioritas.",
      "Meminta masing-masing dinas menjalankan intervensi menggunakan data internalnya terlebih dahulu lalu menggabungkan angka capaian akhir pada laporan tahunan daerah.",
      "Mengumpulkan data agregat umum yang sudah dipublikasikan ketiga dinas untuk diolah secara mandiri oleh tim sekretariat agar pelaksanaan program tidak terhenti.",
      "Mengirimkan surat permintaan data resmi lintas dinas disertai dasar hukum program nasional agar setiap instansi bersedia menyerahkan daftar keluarga sasaran kepada sekretariat.",
      "Menginisiasi forum penyelarasan dampak warga bersama koordinator daerah, menyepakati protokol berbagi data terbatas sesuai privasi, dan menyusun matriks kontribusi kinerja bersama.",
    ],
    optionScores: [1, 2, 3, 4, 5],
    answer: "E",
    explanation:
      "Tindakan berskor 5 menyentuh akar ego sektoral—kekhawatiran pengakuan indikator kinerja dan keamanan data—dengan menyusun kesepakatan berbagi data terbatas serta matriks kontribusi bersama yang adil bagi semua dinas. Bersurat resmi dengan dasar hukum memang tertib administrasi dan sopan (skor 4), namun belum menjawab kekhawatiran riil tiap instansi sehingga berisiko hanya menghasilkan kepatuhan setengah hati.",
    tip: "Ego sektoral sering berakar pada ketakutan kehilangan kredit kinerja; rancang perjanjian berbagi data aman dan matriks kontribusi bersama yang adil.",
  },
  {
    id: "tkp-jej-088",
    subPattern: "dilema-kolaborasi-hybrid-dan-lintas-generasi",
    difficulty: "sedang",
    prompt:
      "Saat membangun portal satu data pariwisata daerah, tim Dinas Pariwisata dan tim Dinas Komunikasi dan Informatika saling melempar tanggung jawab soal pemutakhiran konten destinasi karena keduanya menilai tugas itu bukan pos anggaran utama unitnya. Sikap paling tepat Anda sebagai fasilitator proyek adalah ...",
    options: [
      "Mengusulkan kepada pimpinan daerah agar pengelolaan penuh portal dialihkan seluruhnya kepada salah satu dinas saja supaya tidak lagi terjadi tarik ulur kewenangan.",
      "Menunda peluncuran portal satu data pariwisata daerah sampai perubahan anggaran tahun berjalan menetapkan pos khusus bagi pemutakhiran konten destinasi wisata.",
      "Memfasilitasi pertemuan teknis kedua dinas untuk memetakan peran kurasi konten dan pengelolaan infrastruktur secara jelas, lalu menyepakati jadwal pembaruan dan evaluasi berkala.",
      "Menawarkan diri mengompilasi data destinasi wisata dari publikasi lama kedua dinas agar portal tetap dapat diluncurkan sesuai jadwal sembari menunggu kepastian anggaran tahun depan.",
      "Meminta kedua dinas mengirimkan uraian tugas pokok masing-masing kepada tim sekretariat guna dicocokkan dengan rincian kegiatan dalam dokumen pelaksanaan anggaran.",
    ],
    optionScores: [2, 1, 5, 4, 3],
    answer: "C",
    explanation:
      "Tindakan berskor 5 meluruskan pembagian mandat fungsional antar-OPD secara kolaboratif serta menguncinya dalam jadwal pembaruan dan evaluasi berkala agar portal berkelanjutan. Membantu mengompilasi data lama secara sukarela memang menunjukkan inisiatif baik (skor 4), tetapi hanya menjadi tambal sulam sementara tanpa menyelesaikan kebuntuan pembagian peran lintas dinas.",
    tip: "Atasi saling lempar tanggung jawab antarinstansi dengan memetakan pembagian peran sesuai kompetensi inti masing-masing dan menguncinya dalam jadwal bersama.",
  },
  {
    id: "tkp-jej-089",
    subPattern: "dilema-kolaborasi-hybrid-dan-lintas-generasi",
    difficulty: "sulit",
    prompt:
      "Pada simulasi tanggap darurat bencana banjir lintas instansi, dua dinas teknis bersikeras memakai aplikasi pelaporan lapangan masing-masing dan menolak menginput ke dasbor komando terpadu dengan alasan format kolom berbeda dan menambah beban kerja personel di lapangan. Tindakan terbaik Anda adalah ...",
    options: [
      "Meminta kedua dinas tetap mengirimkan ringkasan kondisi lapangan secara manual tiap dua jam ke grup koordinasi darurat agar pos komando tetap memperoleh gambaran situasi terkini.",
      "Mengajak tim teknis kedua dinas dan pengelola dasbor merancang jembatan pemetaan kolom otomatis agar personel bebas input ganda sementara data terhimpun real-time.",
      "Mewajibkan seluruh personel lapangan menghentikan penggunaan aplikasi internal dinas dan hanya memakai formulir dasbor komando demi keseragaman data tanggap darurat.",
      "Menugaskan staf piket pos komando menyalin ulang laporan dari kedua aplikasi dinas secara manual ke dalam dasbor terpadu setiap kali muncul pembaruan situasi.",
      "Mencatat ketidakseragaman aplikasi tersebut sebagai temuan evaluasi pascasimulasi agar dibahas pada rencana pengadaan sistem terpadu tahun anggaran berikutnya.",
    ],
    optionScores: [4, 5, 2, 3, 1],
    answer: "B",
    explanation:
      "Tindakan berskor 5 memahami beban nyata petugas lapangan sekaligus menjaga kebutuhan data terpadu pos komando melalui solusi interoperabilitas teknis bersama lintas tim. Meminta ringkasan manual tiap dua jam memang pragmatis dan sopan (skor 4), namun tetap menciptakan beban pelaporan ganda dan rentan keterlambatan data saat kondisi darurat sebenarnya.",
    tip: "Saat instansi menolak sistem terpadu karena beban kerja ganda, fasilitasi jembatan interoperabilitas lintas tim agar tujuan bersama dan kenyamanan lapangan sama-sama tercapai.",
  },
  {
    id: "tkp-jej-090",
    subPattern: "dilema-kolaborasi-hybrid-dan-lintas-generasi",
    difficulty: "sulit",
    prompt:
      "Sebuah perusahaan rintisan teknologi yang sedang menjadi mitra uji coba gratis aplikasi edukasi publik di instansi Anda menawarkan fasilitas perjalanan studi banding ke luar negeri khusus bagi Anda dan tim teknis menjelang penyusunan spesifikasi pengadaan sistem tahun depan. Sikap paling tepat Anda adalah ...",
    options: [
      "Menerima undangan studi banding tersebut sepanjang pimpinan unit menerbitkan surat tugas resmi sehingga perjalanan tercatat sebagai agenda kedinasan yang sah.",
      "Mengalihkan kuota perjalanan studi banding tersebut kepada perwakilan pegawai dari unit lain yang tidak terlibat langsung dalam penyusunan spesifikasi pengadaan sistem.",
      "Menolak tawaran perjalanan studi banding tersebut secara halus dengan alasan jadwal pekerjaan di kantor sedang sangat padat agar hubungan baik dengan mitra teknologi tidak terganggu.",
      "Menolak fasilitas itu secara santun atas dasar kode etik dan pencegahan konflik kepentingan, menjaga kemitraan uji coba profesional, lalu mendokumentasikannya bersama unit kepatuhan.",
      "Meminta perusahaan mitra mengubah format kegiatan tersebut menjadi seminar daring terbuka tanpa biaya perjalanan agar tim tetap memperoleh wawasan teknologi terbaru.",
    ],
    optionScores: [1, 2, 4, 5, 3],
    answer: "D",
    explanation:
      "Tindakan berskor 5 secara transparan menegakkan batasan etik dan pencegahan konflik kepentingan tanpa merusak relasi kerja profesional, sekaligus mendokumentasikan penolakan bersama unit kepatuhan guna melindungi integritas pengadaan. Menolak secara halus dengan alasan jadwal padat memang menghindari gratifikasi dan sopan (skor 4), tetapi tidak mengedukasi batas etik kemitraan maupun meninggalkan jejak akuntabilitas yang transparan.",
    tip: "Kemitraan strategis yang sehat menuntut penolakan gratifikasi secara santun sekaligus transparan atas dasar integritas, bukan sekadar alasan jadwal sibuk.",
  },
  {
    id: "tkp-jej-091",
    subPattern: "dilema-kolaborasi-hybrid-dan-lintas-generasi",
    difficulty: "sedang",
    prompt:
      "Ketua asosiasi pelaku usaha yang selama ini banyak membantu program pelatihan UMKM daerah meminta Anda membocorkan kisi-kisi penilaian kurasi bantuan hibah lebih awal agar anggota binaannya memiliki peluang lolos lebih tinggi. Langkah paling tepat Anda adalah ...",
    options: [
      "Menolak permintaan bocoran secara tegas namun santun demi asas keadilan, menawarkan sosialisasi terbuka kriteria umum bagi seluruh asosiasi, dan mempublikasikan panduannya.",
      "Menolak permintaan tersebut dengan sopan karena dokumen penilaian bersifat rahasia instansi, lalu meminta ketua asosiasi menunggu pengumuman resmi persyaratan melalui situs web dinas.",
      "Memberikan gambaran umum mengenai kesalahan administratif yang sering menggugurkan peserta tahun lalu secara lisan agar ketua asosiasi tetap merasa dihargai sebagai mitra.",
      "Menyarankan ketua asosiasi mengajukan surat permohonan pendampingan resmi kepada kepala dinas agar pembinaan anggota binaannya memperoleh persetujuan pimpinan secara formal.",
      "Mengurangi intensitas komunikasi dengan asosiasi tersebut selama masa seleksi hibah berlangsung supaya tidak memicu dugaan keberpihakan dari para pendaftar lainnya.",
    ],
    optionScores: [5, 4, 2, 3, 1],
    answer: "A",
    explanation:
      "Tindakan berskor 5 menjaga keadilan dan integritas tanpa memutus kemitraan dengan mengubah permintaan eksklusif menjadi sosialisasi terbuka yang adil bagi seluruh asosiasi dan publikasi panduan yang transparan. Menolak secara sopan dan mengarahkan ke situs web memang bersih dan patuh aturan (skor 4), namun bersifat pasif dan melewatkan peluang memperkuat kualitas kemitraan secara setara.",
    tip: "Tolak permintaan akses istimewa dari mitra dengan santun, lalu ubah menjadi akses informasi terbuka yang adil bagi seluruh pemangku kepentingan.",
  },
  {
    id: "tkp-jej-092",
    subPattern: "dilema-kolaborasi-hybrid-dan-lintas-generasi",
    difficulty: "sulit",
    prompt:
      "Perguruan tinggi mitra riset kebijakan tempat kakak kandung Anda menjabat sebagai ketua tim peneliti mengajukan proposal kerja sama swakelola ke unit kerja Anda, dan atasan menunjuk Anda masuk dalam tim penilai kelayakan proposal tersebut. Sikap terbaik Anda adalah ...",
    options: [
      "Mengusulkan agar proposal perguruan tinggi tersebut digugurkan sejak tahap administrasi demi menghindari potensi polemik konflik kepentingan di kemudian hari.",
      "Menjalankan peran sebagai anggota tim penilai seperti biasa tanpa memberi tahu atasan soal hubungan keluarga agar proses seleksi berjalan tenang dan profesional.",
      "Mendeklarasikan potensi konflik kepentingan secara tertulis kepada atasan dan mundur dari tim penilai proposal itu, sambil tetap mendukung koordinasi kemitraan yang netral.",
      "Tetap menjalankan tugas sebagai anggota tim penilai secara objektif berdasarkan rubrik penilaian resmi serta berkomitmen tidak menghubungi kakak kandung selama proses evaluasi berlangsung.",
      "Meminta anggota tim penilai lain memeriksa ulang setiap rincian skor yang Anda berikan atas proposal tersebut sebagai bentuk pengawasan silang internal.",
    ],
    optionScores: [1, 2, 5, 4, 3],
    answer: "C",
    explanation:
      "Tindakan berskor 5 memenuhi standar tata kelola pencegahan konflik kepentingan melalui deklarasi tertulis dan pengunduran diri (recusal) dari posisi penilai tanpa merugikan hak mitra perguruan tinggi dinilai secara independen. Berkomitmen menilai objektif sesuai rubrik memang berniat baik dan disiplin (skor 4), tetapi secara etika tata kelola tetap menyisakan konflik kepentingan nyata maupun persepsi publik yang merusak kredibilitas kemitraan.",
    tip: "Saat memiliki relasi keluarga dengan mitra yang sedang dinilai, niat objektif saja tidak cukup—lakukan deklarasi terbuka dan mundur dari posisi penilai.",
  },
  {
    id: "tkp-jej-093",
    subPattern: "dilema-kolaborasi-hybrid-dan-lintas-generasi",
    difficulty: "sedang",
    prompt:
      "Akibat salah tafsir instruksi dalam pesan singkat saat rapat daring terputus, subtim Anda mengirimkan draf anggaran dengan format keliru ke biro perencanaan sehingga tim mitra kerja terpaksa lembur memperbaiki rekapitulasi dan suasana kerja kini menjadi kaku. Langkah terbaik Anda adalah ...",
    options: [
      "Menjelaskan kronologi terputusnya rapat daring kepada biro perencanaan agar mereka memahami bahwa kekeliruan format bukan disebabkan oleh kelalaian yang disengaja.",
      "Menegur anggota subtim yang mengunggah berkas keliru tersebut secara tegas lalu mengirimkan versi perbaikan format melalui surat elektronik dinas resmi.",
      "Meminta pimpinan unit menjembatani komunikasi dengan biro perencanaan agar hubungan kerja lintas unit kembali mencair tanpa menimbulkan rasa canggung.",
      "Mengirimkan pesan permohonan maaf yang sopan kepada koordinator tim mitra dan memastikan subtim Anda akan lebih teliti memeriksa format anggaran pada pengiriman periode berikutnya.",
      "Meminta maaf tulus tanpa defensif, turun langsung membantu tim mitra menuntaskan sisa finalisasi rekapitulasi, lalu menyepakati protokol konfirmasi tertulis bersama.",
    ],
    optionScores: [2, 1, 3, 4, 5],
    answer: "E",
    explanation:
      "Tindakan berskor 5 memulihkan kepercayaan melalui tanggung jawab nyata: meminta maaf tulus, langsung berbagi beban penyelesaian yang tersisa bersama tim mitra, dan membangun mekanisme konfirmasi tertulis bersama. Mengirim pesan maaf yang sopan dan berjanji lebih teliti memang beretiket baik (skor 4), namun belum menunjukkan kontribusi pemulihan langsung maupun perbaikan sistem koordinasi.",
    tip: "Kepercayaan pasca-miskomunikasi pulih paling cepat lewat kombinasi permintaan maaf tulus, aksi nyata meringankan dampak, dan protokol cek ulang bersama.",
  },
  {
    id: "tkp-jej-094",
    subPattern: "dilema-kolaborasi-hybrid-dan-lintas-generasi",
    difficulty: "sedang",
    prompt:
      "Beredar rumor di unit kerja bahwa Anda sengaja menyembunyikan informasi perubahan jadwal presentasi dari rekan lintas bagian agar kelompok Anda tampak lebih siap, padahal surel pemberitahuan yang Anda buat tertahan di folder draf akibat gangguan jaringan kantor. Tindakan paling tepat Anda adalah ...",
    options: [
      "Menjelaskan secara sopan melalui grup pesan tim bahwa tidak ada niat menyembunyikan jadwal karena gangguan jaringan kantor, lalu meneruskan ulang surel perubahan jadwal tersebut kepada seluruh anggota.",
      "Menghampiri rekan lintas bagian secara langsung, menunjukkan bukti teknis pengiriman tanpa defensif, menawarkan dukungan bahan koordinasi, lalu menyepakati kanal pemberitahuan ganda.",
      "Meminta bantuan admin jaringan kantor menerbitkan keterangan teknis gangguan surel untuk dilampirkan kepada pimpinan sebagai pembuktian ketidakbersalahan Anda.",
      "Membiarkan rumor tersebut mereda dengan sendirinya sambil tetap bersikap profesional dan membantu seperlunya saat hari pelaksanaan presentasi berlangsung.",
      "Menegur rekan yang diduga menyebarkan rumor secara terbuka di ruang kerja agar tidak menimbulkan fitnah yang merusak reputasi kerja pribadi Anda.",
    ],
    optionScores: [4, 5, 3, 2, 1],
    answer: "B",
    explanation:
      "Tindakan berskor 5 memulihkan kepercayaan secara tatap muka yang hangat dan transparan berbasis fakta, memberi dukungan nyata agar tim mitra tetap siap tampil, serta mencegah kejadian serupa dengan kanal pemberitahuan ganda. Menjelaskan secara sopan di grup dan meneruskan surel memang jujur dan rapi (skor 4), tetapi kurang personal untuk meredakan kecurigaan yang terlanjur berkembang serta belum menambah pengaman alur komunikasi.",
    tip: "Saat miskomunikasi memicu kecurigaan, lakukan klarifikasi langsung berbasis fakta tanpa defensif, bantu pemulihan mitra, dan tambah kanal konfirmasi cadangan.",
  },
  {
    id: "tkp-jej-095",
    subPattern: "dilema-kolaborasi-hybrid-dan-lintas-generasi",
    difficulty: "sulit",
    prompt:
      "Dalam rapat evaluasi proyek lintas unit yang sempat tertunda, seorang koordinator unit mitra melontarkan kritik tajam di depan pimpinan seolah keterlambatan sepenuhnya disebabkan unit Anda, padahal sebagian hambatan berasal dari revisi data mendadak unitnya sendiri sehingga hubungan kedua tim merenggang. Sikap terbaik Anda adalah ...",
    options: [
      "Membalas kritik tersebut secara langsung di ruang rapat dengan menampilkan seluruh catatan revisi mendadak unit mitra agar pimpinan melihat siapa yang paling bersalah.",
      "Memilih diam sepenuhnya selama dan sesudah rapat demi menjaga keharmonisan semu, lalu membatasi kerja sama dengan unit mitra tersebut pada proyek mendatang.",
      "Menyusun laporan kronologi terpisah yang merinci keterlambatan revisi unit mitra lalu mengirimkannya langsung kepada pimpinan sebagai pembelaan tertulis unit Anda.",
      "Menahan diri di forum, mengajak koordinator mitra berdialog objektif berbasis kronologi pascarapat, menyepakati pemulihan jadwal bersama, lalu memaparkan solusi kolaboratif ke pimpinan.",
      "Menjelaskan fakta kronologi revisi data unit mitra secara tenang dan sopan di hadapan pimpinan agar penilaian atas kinerja unit Anda tetap proporsional, lalu melanjutkan tugas masing-masing.",
    ],
    optionScores: [1, 2, 3, 5, 4],
    answer: "D",
    explanation:
      "Tindakan berskor 5 meredam eskalasi di ruang publik, memulihkan kepercayaan lewat dialog objektif berbasis data setelah rapat, serta menghadirkan rencana pemulihan bersama secara transparan kepada pimpinan. Menjelaskan fakta revisi secara tenang dan sopan di hadapan pimpinan memang menjaga profesionalitas dan akurasi kinerja unit (skor 4), namun belum menyembuhkan kerenggangan relasi antartim maupun menyatukan langkah percepatan proyek bersama.",
    tip: "Dalam konflik evaluasi lintas unit, hindari saling menyalahkan di forum; gunakan data objektif untuk dialog pemulihan bersama dan laporkan solusi kolaboratifnya.",
  },
];
