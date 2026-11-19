import {
  buildTkpPatternQuestions,
  type Question,
  type TkpQuestionDraft,
} from "@/modules/question-bank/domain/question";

const profesionalismeDrafts: readonly TkpQuestionDraft[] = [
  {
    "id": "tkp-pro-001",
    "subPattern": "skala-prioritas-dan-manajemen-tenggat",
    "difficulty": "mudah",
    "prompt": "Pada pagi hari, Anda menerima tiga tugas sekaligus: satu laporan mendesak yang ditunggu pimpinan untuk rapat pukul 11.00, satu berkas rutin bulanan yang tenggatnya masih lima hari lagi, serta permintaan bantuan rekan merapikan arsip meja. Langkah manajemen waktu terbaik adalah ...",
    "options": [
      "Mengerjakan laporan mendesak rapat pukul 11.00 terlebih dahulu hingga tuntas akurat, kemudian menyelesaikan bantuan arsip singkat jika sempat, lalu melanjutkan berkas rutin secara terjadwal",
      "Membantu rekan merapikan arsip meja sepanjang pagi dulu agar suasana tim akrab sebelum membuka laporan pimpinan",
      "Mengerjakan berkas rutin bulanan dulu karena formatnya lebih mudah sehingga cepat selesai satu pekerjaan",
      "Menunda seluruh pekerjaan sambil menunggu pimpinan mengonfirmasi ulang mana yang lebih penting setelah istirahat siang",
      "Mengerjakan ketiganya bersamaan sekaligus dalam satu waktu meski berisiko banyak salah ketik pada laporan rapat"
    ],
    "optionScores": [
      5,
      2,
      3,
      1,
      4
    ],
    "answer": "A",
    "explanation": "Profesionalisme skala prioritas menempatkan tugas berdampak kritis dan berbatas waktu paling dekat (matriks Eisenhower penting-mendesak) di posisi utama sebelum tugas rutin atau permintaan sampingan (skor 5).",
    "tip": "Prioritaskan tugas yang penting sekaligus mendesak dengan tenggat terdekat sebelum mengerjakan rutinitas lain."
  },
  {
    "id": "tkp-pro-002",
    "subPattern": "skala-prioritas-dan-manajemen-tenggat",
    "difficulty": "mudah",
    "prompt": "Menjelang sore hari saat Anda bersiap merapikan rencana pulang sesuai jadwal, pimpinan meminta Anda meninjau ulang satu berkas perbaikan mendesak untuk pengajuan layanan publik besok pagi, sedangkan Anda hanya berjanji bertemu santai dengan teman lama malam nanti. Sikap profesional Anda adalah ...",
    "options": [
      "Menolak tegas penugasan tersebut dengan alasan jam kerja kantor tinggal dua puluh menit lagi berakhir",
      "Menerima tugas mendesak dengan sikap positif, fokus menuntaskan telaah berkas dengan teliti sebelum pulang, serta menghubungi teman dengan sopan untuk menjadwalkan ulang atau menyesuaikan jam temu",
      "Menerima berkas lalu mengerjakannya asal-asalan dalam sepuluh menit supaya bisa tetap berangkat tepat waktu menemui teman",
      "Menyerahkan berkas penting itu ke pegawai magang untuk ditelaah besok pagi tepat sebelum rapat berlangsung",
      "Mematikan ponsel kantor sejak pukul empat sore agar pimpinan tidak sempat menambahkan tugas tambahan mendadak"
    ],
    "optionScores": [
      2,
      5,
      3,
      4,
      1
    ],
    "answer": "B",
    "explanation": "Skor 5 mendahulukan kepentingan dinas mendesak dibanding agenda santai pribadi dengan tetap komunikatif menjaga relasi teman, sekaligus tidak mengorbankan ketelitian telaah.",
    "tip": "Saat agenda dinas mendesak berbenturan dengan pertemuan pribadi tidak mendesak, utamakan amanah dinas dengan komunikasi baik."
  },
  {
    "id": "tkp-pro-003",
    "subPattern": "skala-prioritas-dan-manajemen-tenggat",
    "difficulty": "sedang",
    "prompt": "Anda ditugaskan menyelesaikan proyek penyusunan pedoman layanan dalam dua pekan. Setelah bekerja empat hari, Anda menyadari cakupan data lapangan jauh lebih kompleks dari dugaan awal hingga berpotensi melewati tenggat apabila tetap memakai metode kerja biasa. Sikap proaktif terbaik adalah ...",
    "options": [
      "Terus diam bekerja lambat tanpa memberitahu atasan hingga tepat di hari tenggat baru mengakui bahwa pedoman belum siap",
      "Memotong sebagian besar analisis data penting agar laporan tampak selesai lebih cepat di atas kertas",
      "Melaporkan progres dan hambatan teknis lebih awal kepada atasan disertai usulan penyesuaian rencana kerja (pembagian subtugas atau prioritas bagian kritis) agar mutu dan tenggat tetap terkelola",
      "Meminta pindah tugas dari proyek tersebut dan menyerahkannya kepada rekan lain yang lebih senior",
      "Menyalahkan bagian pengumpul data lapangan di hadapan tim sebagai penyebab melambatnya seluruh proses"
    ],
    "optionScores": [
      2,
      3,
      5,
      1,
      4
    ],
    "answer": "C",
    "explanation": "Profesionalisme modern menekankan manajemen risiko dini (early warning): laporkan hambatan segera beserta opsi solusi terukur kepada pimpinan sebelum tenggat lewat atau kualitas dikorbankan (skor 5).",
    "tip": "Jangan tunggu tenggat tiba untuk melapor kendala; sampaikan lebih awal lengkap dengan usulan penyesuaian kerja."
  },
  {
    "id": "tkp-pro-004",
    "subPattern": "skala-prioritas-dan-manajemen-tenggat",
    "difficulty": "sedang",
    "prompt": "Saat Anda sedang fokus menyusun laporan evaluasi anggaran yang membutuhkan ketelitian angka tinggi, beberapa rekan terus mengajak berbincang santai di dekat meja kerja sambil memutar video lucu di ponsel. Cara asertif dan santun menjaga produktivitas tanpa merusak hubungan tim adalah ...",
    "options": [
      "Ikut mengobrol dan menonton video lucu berlama-lama dulu lalu mengorbankan ketelitian angka laporan di jam terakhir",
      "Memarahi rekan-rekan Anda dengan suara keras supaya langsung bubar meninggalkan ruangan seketika",
      "Membawa laporan Anda ke luar gedung ke kafe pribadi tanpa meminta izin atasan maupun memberi tahu siapa pun",
      "Menyampaikan secara ramah dengan senyum bahwa Anda sedang menyelesaikan laporan berbatas waktu dekat, lalu mengajak melanjutkan obrolan santai saat jam istirahat siang",
      "Memakai penyuara telinga sambil memasang wajah cemberut dan mengabaikan panggilan rekan sepanjang hari"
    ],
    "optionScores": [
      1,
      2,
      3,
      5,
      4
    ],
    "answer": "D",
    "explanation": "Komunikasi asertif yang ramah melindungi konsentrasi dan akurasi tugas prioritas sambil menjaga suasana hormat antarteman sejawat di ruang kerja bersama (skor 5).",
    "tip": "Jaga batas fokus kerja terhadap gangguan sosial secara santun dan asertif, bukan kasar atau ikut larut dalam obrolan."
  },
  {
    "id": "tkp-pro-005",
    "subPattern": "skala-prioritas-dan-manajemen-tenggat",
    "difficulty": "sedang",
    "prompt": "Dalam satu minggu kerja ke depan, jadwal pelatihan sertifikasi profesi daring Anda berbarengan dengan jadwal puncak verifikasi berkas proyek tahunan tim. Agar keduanya berjalan tuntas tanpa menurunkan kinerja unit, strategi Anda adalah ...",
    "options": [
      "Mengabaikan verifikasi berkas tim sepanjang minggu penuh demi fokus belajar menghadapi ujian sertifikasi pribadi",
      "Menyalakan tautan pelatihan daring di latar belakang tanpa menyimak materi sama sekali agar sertifikat tetap terbit",
      "Meminta pembatalan penuh seluruh jadwal sertifikasi di hari pembukaan tanpa berkonsultasi dengan atasan terlebih dahulu",
      "Mengalihkan seluruh beban verifikasi berkas Anda kepada satu staf junior secara sepihak tanpa memberi bimbingan",
      "Menyusun jadwal terperinci bersama atasan dan tim (mengamankan jam belajar inti sertifikasi, menyelesaikan berkas kritis lebih awal, dan berkoordinasi pembagian giliran verifikasi)"
    ],
    "optionScores": [
      2,
      1,
      3,
      4,
      5
    ],
    "answer": "E",
    "explanation": "Mengelola dua amanah organisasi secara profesional membutuhkan perencanaan kolaboratif terbuka bersama atasan dan tim: menjaga kehadiran berkualitas di pelatihan sekaligus memastikan tanggung jawab unit tidak terbengkalai (skor 5).",
    "tip": "Koordinasikan jadwal pengembangan kompetensi dan tenggat unit dengan atasan untuk membagi prioritas jam secara rapi."
  },
  {
    "id": "tkp-pro-006",
    "subPattern": "skala-prioritas-dan-manajemen-tenggat",
    "difficulty": "sedang",
    "prompt": "Anda mendapat tugas rutin mingguan yang hampir selalu menyita waktu empat jam setiap Jumat pagi hingga sering menggeser penyelesaian tugas pelayanan warga hari itu. Langkah profesional yang menunjukkan efektivitas kerja adalah ...",
    "options": [
      "Mengevaluasi proses penyusunan tugas rutin tersebut, menyiapkan templat/daftar cek standar atau mencicil pencatatan harian sejak awal pekan sehingga waktu Jumat lebih ringkas dan pelayanan warga tetap lancar",
      "Menerima kondisi bentrok tersebut apa adanya karena tugas rutin memang wajib menghabiskan separuh hari Jumat",
      "Menunda melayani warga pada setiap hari Jumat pagi supaya petugas bebas mengerjakan laporan rutin tanpa gangguan",
      "Meminta pimpinan menghapus seluruh kewajiban laporan rutin mingguan dari daftar tugas bagian Anda",
      "Mengisi laporan rutin dengan menyalin persis data pekan lalu agar hanya membutuhkan waktu sepuluh menit"
    ],
    "optionScores": [
      5,
      4,
      3,
      2,
      1
    ],
    "answer": "A",
    "explanation": "Profesionalisme aktif merombak kebiasaan kerja tidak efisien lewat penyicilan data harian dan templat sistematis agar tugas administrasi internal tidak menggerus waktu layanan publik (skor 5).",
    "tip": "Optimalkan efisiensi rutinitas lewat pencicilan sistematis dan templat kerja agar layanan publik utama tetap terjaga."
  },
  {
    "id": "tkp-pro-007",
    "subPattern": "skala-prioritas-dan-manajemen-tenggat",
    "difficulty": "sulit",
    "prompt": "Dua atasan langsung di tingkat berbeda memberikan dua instruksi mendesak di pagi hari yang saling berbenturan: Kepala Seksi meminta Anda langsung turun survei lapangan di luar kota jam 09.00, sedangkan Kepala Bidang meminta Anda hadir mendampingi presentasi data di aula kantor pada jam yang sama. Langkah koordinasi profesional terbaik adalah ...",
    "options": [
      "Diam-diam memilih tugas yang lebih nyaman diikuti lalu meminta maaf setelah jam acara salah satu atasan terlewat",
      "Segera berkomunikasi jujur dan sopan kepada kedua atasan mengenai benturan dua instruksi mendesak tersebut agar keduanya menyepakati prioritas penugasan atau penunjukan pengganti resmi",
      "Mengeluhkan buruknya koordinasi pimpinan di hadapan rekan kerja sepanjang pagi di lobi gedung",
      "Berusaha menghadiri pembukaan aula selama sepuluh menit lalu pergi di tengah acara tanpa izin agar terlihat hadir di dua tempat",
      "Mengambil cuti mendadak hari itu supaya tidak terlibat konflik instruksi di antara dua pimpinan"
    ],
    "optionScores": [
      2,
      5,
      1,
      3,
      4
    ],
    "answer": "B",
    "explanation": "Menghadapi dual-command conflict secara profesional dilakukan lewat komunikasi transparan dan konstruktif ke kedua pemberi mandat agar tercipta kejelasan prioritas atau delegasi sah tanpa menimbulkan gesekan hierarki (skor 5).",
    "tip": "Bila menerima dua perintah berbenturan jadwal dari dua pimpinan, komunikasikan terbuka segera agar prioritas atau delegasi ditetapkan sah."
  },
  {
    "id": "tkp-pro-008",
    "subPattern": "skala-prioritas-dan-manajemen-tenggat",
    "difficulty": "sulit",
    "prompt": "Dalam tim kecil yang mengawal lima program strategis serentak menjelang akhir tahun anggaran, Anda melihat seluruh anggota mulai kelelahan (burnout) akibat banyaknya permintaan tambahan dadakan di luar rencana kerja resmi yang belum jelas dampaknya. Sikap profesional Anda adalah ...",
    "options": [
      "Mengerjakan seluruh permintaan tambahan dadakan tanpa seleksi apa pun meski mengorbankan kualitas lima program inti akhir tahun",
      "Mengajak seluruh anggota tim menolak seluruh tugas tambahan secara emosional dan membatasi jam kerja tanpa lapor atasan",
      "Memetakan beban kerja riil serta urgensi dampak lima program inti dibanding permintaan dadakan secara berbasis data, lalu mengusulkan penataan prioritas atau penjadwalan ulang tugas berprioritas rendah kepada pimpinan",
      "Fokus mengamankan program bagian pribadi Anda saja sementara rekan tim lain dibiarkan kewalahan dengan permintaan dadakan",
      "Mengisi laporan ketercapaian seluruh program dadakan seakan-akan tuntas 100% walaupun belum dieksekusi di lapangan"
    ],
    "optionScores": [
      3,
      2,
      5,
      4,
      1
    ],
    "answer": "C",
    "explanation": "Manajemen prioritas tingkat tinggi melindungi keberhasilan program strategis inti dari pembengkakan lingkup tak terkendali (scope creep) melalui pemetaan kapasitas berbasis data dan negosiasi prioritas rasional ke pimpinan (skor 5).",
    "tip": "Kendalikan scope creep dengan data kapasitas kerja dan ajukan penataan prioritas berdasar dampak program inti."
  },
  {
    "id": "tkp-pro-009",
    "subPattern": "tanggung-jawab-dan-integritas-kerja",
    "difficulty": "mudah",
    "prompt": "Anda baru menyadari telah salah menghitung satu angka rekapitulasi kebutuhan anggaran dalam dokumen pengajuan tim yang sudah telanjur naik ke meja penelaah pimpinan satu jam yang lalu. Sikap bertanggung jawab Anda adalah ...",
    "options": [
      "Membiarkannya dulu dengan harapan penelaah pimpinan tidak melihat kesalahan kecil pada baris angka di lampiran tersebut",
      "Menghapus jejak file hitungan awal di komputer agar sulit ditelusuri siapa pegawai yang melakukan kekeliruan input",
      "Menunggu hingga minggu depan jika penelaah memang menanyakannya dalam rapat baru berencana melakukan koreksi",
      "Segera melapor secara jujur kepada atasan langsung dan tim penelaah untuk menarik atau mengirimkan revisi angka yang tepat sebelum keputusan disahkan",
      "Menyatakan secara halus kepada rekan tim bahwa sumber datanya datang dari draf milik staf seksi lain"
    ],
    "optionScores": [
      2,
      1,
      3,
      5,
      4
    ],
    "answer": "D",
    "explanation": "Keberanian moral mengakui kekeliruan secepatnya sebelum berdampak menjadi keputusan negara yang salah mencerminkan nilai Akuntabel dan tanggung jawab kerja sejati (skor 5).",
    "tip": "Jika menemukan kekeliruan pada dokumen yang sudah naik ke pimpinan, lapor cepat secara jujur dan kirimkan koreksi sebelum disahkan."
  },
  {
    "id": "tkp-pro-010",
    "subPattern": "tanggung-jawab-dan-integritas-kerja",
    "difficulty": "mudah",
    "prompt": "Pada suatu proyek pengadaan perlengkapan operasional kantor, rekan panitia menyarankan menaikkan sedikit jumlah nominal pada kuitansi perjalanan dinas tim agar sisanya dapat masuk ke kas bersama unit kerja. Sikap tegas berintegritas Anda adalah ...",
    "options": [
      "Mengikuti usulan tersebut sekali ini saja karena dana sisanya dipakai untuk kebutuhan kas kantor bersama, bukan dompet pribadi",
      "Diam tidak menandatangani kuitansi tetapi tetap ikut menikmati hasil makanan rapat yang dibeli dari selisih dana fiktif",
      "Mengizinkan rekan melakukannya sambil meminta bagian Anda dikurangi agar merasa lebih tenang secara moral",
      "Mengundurkan diri mendadak dari kantor tanpa meluruskan prosedur penyusunan bukti belanja yang sah",
      "Menolak tegas praktik penggelembungan nominal kuitansi (mark-up), menuntut pencatatan biaya riil sesuai bukti transaksi sah, dan mengajak menyusun pengajuan kas operasional lewat pos anggaran resmi"
    ],
    "optionScores": [
      2,
      3,
      1,
      4,
      5
    ],
    "answer": "E",
    "explanation": "Setiap bentuk mark-up atau SPJ fiktif merupakan pelanggaran integritas dan keuangan negara terlepas dari alasan pemanfaatannya. Konsistensi pada bukti riil sah dan penganggaran resmi menjaga akuntabilitas ASN (skor 5).",
    "tip": "Tolak mark-up SPJ atau dana fiktif meski mengatasnamakan kas bersama tim; catat hanya sesuai belanja riil sah."
  },
  {
    "id": "tkp-pro-011",
    "subPattern": "tanggung-jawab-dan-integritas-kerja",
    "difficulty": "sedang",
    "prompt": "Anda mendapat jadwal perjalanan dinas empat hari di kota lain untuk meninjau kinerja tiga cabang layanan daerah, namun seluruh pemeriksaan cabang berhasil selesai lebih cepat pada hari kedua siang. Sikap paling akuntabel terkait sisa dua hari waktu penugasan Anda adalah ...",
    "options": [
      "Memanfaatkan sisa waktu untuk pendalaman temuan lapangan tambahan atau melapor atasan agar kembali bertugas lebih awal disertai pertanggungjawaban biaya riil (mengembalikan sisa dana tidak terpakai)",
      "Menggunakan sisa dua hari penuh untuk berwisata pribadi ke luar kota sementara kuitansi hotel tetap diklaim empat hari penuh",
      "Tetap menginap di hotel menghabiskan hari ketiga dan keempat di kamar menonton televisi agar durasi sesuai surat tugas",
      "Menandatangani daftar hadir lebih awal lalu pulang diam-diam tanpa melapor pimpinan serta tetap mengklaim penuh uang harian empat hari",
      "Menyuruh staf cabang setempat melengkapi tanda tangan laporan hari ketiga dan keempat setelah Anda sudah naik pesawat pulang"
    ],
    "optionScores": [
      5,
      1,
      3,
      2,
      4
    ],
    "answer": "A",
    "explanation": "Integritas perjalanan dinas (at cost & akuntabilitas waktu) menuntut kesesuaian antara bukti klaim anggaran negara dan kehadiran/aktivitas dinas riil, serta mengembalikan sisa biaya negara jika agenda tuntas lebih cepat (skor 5).",
    "tip": "Pertanggungjawaban perjalanan dinas wajib sesuai realisasi nyata (at cost), jujur melapor bila tuntas lebih cepat, dan tidak memanipulasi bukti."
  },
  {
    "id": "tkp-pro-012",
    "subPattern": "tanggung-jawab-dan-integritas-kerja",
    "difficulty": "sedang",
    "prompt": "Saat pimpinan unit sedang cuti sakit selama seminggu dan sistem kerja fleksibel diberlakukan, beberapa rekan mulai masuk kantor siang hari serta mengurangi jam efektif bekerja karena tidak ada yang mengawasi langsung di ruangan. Sikap Anda yang mencerminkan integritas mandiri adalah ...",
    "options": [
      "Ikut menyesuaikan ritme santai rekan lain selama seminggu itu supaya tidak dianggap pegawai terlalu kaku",
      "Tetap menjaga disiplin waktu masuk, target kinerja harian, serta mutu pelayanan publik secara konsisten tanpa tergantung pengawasan fisik atasan, dan menjadi teladan positif bagi lingkungan ruang kerja",
      "Memotret meja-meja kosong rekan setiap jam delapan pagi lalu menyebarkannya ke grup umum pimpinan kabupaten",
      "Bekerja di ruang tamu rumah sendiri tanpa izin cuti/tugas fleksibel sah karena atasan sedang sakit",
      "Hanya menyelesaikan separuh target harian dengan alasan pimpinan juga tidak akan sempat memeriksa seluruh pekerjaan minggu ini"
    ],
    "optionScores": [
      2,
      5,
      4,
      1,
      3
    ],
    "answer": "B",
    "explanation": "Ujian sejati integritas dan tanggung jawab kerja adalah tetap disiplin menjaga mutu saat pimpinan tidak mengawasi secara langsung, sekaligus menginspirasi lewat keteladanan tanpa bersikap mencela kasar (skor 5).",
    "tip": "Integritas berarti tetap menjaga standar disiplin, kinerja, dan pelayanan prima meskipun sedang tanpa pengawasan atasan."
  },
  {
    "id": "tkp-pro-013",
    "subPattern": "tanggung-jawab-dan-integritas-kerja",
    "difficulty": "sedang",
    "prompt": "Atasan baru di bagian Anda meminta Anda mempercepat penandatanganan berkas kelayakan hibah kepada sebuah yayasan sebelum tim lapangan selesai memverifikasi alamat fisik dan rekening penerima, dengan dalih kegiatan peresmian segera diliput media besok. Sikap tegas berintegritas Anda adalah ...",
    "options": [
      "Menandatangani berkas tersebut langsung karena kepatuhan kepada perintah atasan diyakini lebih penting daripada hasil cek lapangan",
      "Membiarkan berkas itu tergeletak tidak diproses berbulan-bulan di laci tanpa menjelaskan alasan penundaannya kepada atasan",
      "Menyampaikan secara hormat dan argumentatif bahwa penandatanganan wajib didahului verifikasi lapangan sah agar terhindar dari hibah fiktif dan risiko hukum, lalu menawarkan percepatan verifikasi fisik langsung hari itu juga sebelum acara dimulai",
      "Meminta staf lain menandatangani kolom paraf pemeriksa atas nama tim supaya Anda bebas tanggung jawab hukum kelak",
      "Membocorkan rencana percepatan atasan itu ke media massa malam ini sebelum berbicara baik-baik dengannya"
    ],
    "optionScores": [
      1,
      3,
      5,
      2,
      4
    ],
    "answer": "C",
    "explanation": "Loyalitas konstitusional berarti setia pada aturan hukum negara dan melindungi atasan maupun institusi dari cacat prosedur atau kasus hukum hibah fiktif—disampaikan hormat disertai solusi percepatan verifikasi sah (skor 5).",
    "tip": "Tolak perintah yang melompati verifikasi wajib dengan hormat berdasar hukum, dan tawarkan percepatan verifikasi sah yang akuntabel."
  },
  {
    "id": "tkp-pro-014",
    "subPattern": "tanggung-jawab-dan-integritas-kerja",
    "difficulty": "sedang",
    "prompt": "Pada akhir tahun, unit Anda mengalami sisa pagu anggaran perjalanan rapat yang cukup besar dan seorang rekan mengusulkan menggelar rapat evaluasi di hotel berbintang luar provinsi meski materi rapatnya sebenarnya cukup dibahas di aula kantor dalam dua jam. Pandangan akuntabel Anda adalah ...",
    "options": [
      "Mendukung penyelenggaraan rapat luar provinsi supaya realisasi serapan anggaran unit tahun ini mencapai 100%",
      "Mengusulkan pencairan dana hotel luar provinsi secara administratif saja lalu rapat tetap diadakan di aula kantor demi uang saku tim",
      "Diam menyetujui agar tidak dianggap menghambat kesempatan rekreasi tahunan seluruh rekan satu divisi",
      "Menolak pemborosan anggaran semu, mengusulkan rapat efektif di aula kantor sesuai prinsip efisiensi keuangan negara, dan mengarahkan perencanaan atau penghematan sisa anggaran sesuai aturan perbendaharaan sah",
      "Mengubah rincian rapat menjadi kegiatan seremonial hiburan pegawai sepanjang dua hari di kota wisata terdekat"
    ],
    "optionScores": [
      2,
      1,
      3,
      5,
      4
    ],
    "answer": "D",
    "explanation": "Nilai Akuntabel ASN dalam mengelola anggaran publik melarang kegiatan fiktif atau pemborosan serapan demi menghabiskan pagu (spending for the sake of spending). Efisiensi serta kesesuaian substansi manfaat publik selalu utama (skor 5).",
    "tip": "Belanja anggaran negara wajib berorientasi efisiensi dan manfaat publik nyata, bukan menghabiskan sisa pagu secara seremonial atau fiktif."
  },
  {
    "id": "tkp-pro-015",
    "subPattern": "tanggung-jawab-dan-integritas-kerja",
    "difficulty": "sulit",
    "prompt": "Sebuah hasil kajian tim Anda yang Anda susun bersama rekan ternyata mengandung kekeliruan interpretasi tabel yang memengaruhi satu poin rekomendasi draf kebijakan daerah yang besok akan diumumkan pimpinan. Padahal pimpinan sedang sangat bangga memuji kesempurnaan draf tersebut. Tindakan berintegritas paling matang adalah ...",
    "options": [
      "Menunggu kebijakan terbit terlebih dahulu supaya tidak mempermalukan pimpinan maupun diri sendiri di depan tim penyusun",
      "Meminta rekan lain saja yang menyampaikan pengakuan salah besok siang sesudah acara pengumuman kebijakan usai",
      "Menyembunyikan lampiran tabel mentah saat acara berlangsung sehingga jurnalis maupun peserta tidak bisa mengecek ulang angka",
      "Mengakui kekurangan analisis itu hanya dalam catatan pribadi tanpa memberitahu siapa pun di dalam instansi",
      "Segera menghadap pimpinan secara jujur sebelum pengumuman besok dengan membawa koreksi hitungan yang tepat beserta penyesuaian narasi rekomendasi sehingga reputasi lembaga dan ketepatan kebijakan publik terselamatkan"
    ],
    "optionScores": [
      2,
      3,
      1,
      4,
      5
    ],
    "answer": "E",
    "explanation": "Keberanian moral (moral courage) menyelamatkan kepentingan publik yang jauh lebih besar di atas rasa gengsi pribadi. Datang cepat sebelum rilis resmi membawa pembetulan siap pakai melindungi akurasi kebijakan sekaligus kredibilitas pimpinan (skor 5).",
    "tip": "Jangan biarkan rasa gengsi menunda koreksi fatal; bawa perbaikan lengkap kepada pimpinan sebelum kebijakan keliru diumumkan."
  },
  {
    "id": "tkp-pro-016",
    "subPattern": "tanggung-jawab-dan-integritas-kerja",
    "difficulty": "sulit",
    "prompt": "Seorang pegawai di tim Anda terjerat utang pinjaman daring dan judi online, lalu diam-diam mulai menawarkan jasa akses prioritas ilegal kepada pemohon izin di luar jam kantor. Begitu Anda menemukan bukti kuat perilaku tersebut saat mengecek log layanan, tindakan tepat Anda adalah ...",
    "options": [
      "Mengamankan bukti log sistem tanpa mengubahnya, menindaklanjuti pelanggaran melalui saluran pengawasan/WBS dan pimpinan agar akses dibekukan sebelum merugikan warga, serta mendorong pembinaan lanjutan",
      "Menutup mata dari bukti log tersebut karena merasa iba terhadap beban utang keluarga rekan tersebut",
      "Meminta bagian uang dari rekan tersebut supaya dirinya berjanji berhenti menawarkan jalur ilegal bulan depan",
      "Menghapus log akses rekan di server kantor lalu cukup menasihatinya berdua secara lisan tanpa pengawasan pimpinan",
      "Membuka utuh riwayat utang pinjaman daring rekan tersebut ke media sosial umum untuk memberi efek jera publik"
    ],
    "optionScores": [
      5,
      2,
      1,
      3,
      4
    ],
    "answer": "A",
    "explanation": "Penyalahgunaan akses layanan publik untuk pungli/transaksi ilegal akibat tekanan utang judi online mengancam integritas hukum organisasi secara serius. Mengamankan bukti autentik dan menempuh jalur pengawasan/pembinaan resmi melindungi masyarakat dan sistem negara (skor 5).",
    "tip": "Tangani penyalahgunaan akses/pungli yang mengancam publik lewat pengamanan bukti resmi dan eskalasi jalur pengawasan berwenang."
  },
  {
    "id": "tkp-pro-017",
    "subPattern": "ketangguhan-di-bawah-tekanan-dan-fleksibilitas",
    "difficulty": "mudah",
    "prompt": "Saat Anda mempresentasikan rancangan program layanan baru dalam rapat evaluasi, seorang pejabat senior melontarkan kritik sangat tajam dan meragukan kesiapan ide tim Anda di hadapan seluruh peserta. Sikap profesional Anda adalah ...",
    "options": [
      "Tersinggung lalu membalas nada keras dengan menyatakan pejabat senior tersebut kurang memahami perkembangan zaman",
      "Tetap tenang mengendalikan emosi, berterima kasih atas masukan kritis beliau, mencatat poin keberatan secara objektif, dan menanggapi dengan data pendukung secara santun atau siap menyempurnakannya",
      "Langsung menutup berkas presentasi di tengah ruangan dan menyerahkan seluruh tindak lanjut rapat kepada atasan",
      "Diam membeku tidak menjawab pertanyaan apa pun sambil mencari alasan teknis di catatan meja Anda",
      "Menghindari rapat-rapat berikutnya agar tidak bertemu langsung dengan pejabat senior pengkritik tersebut"
    ],
    "optionScores": [
      1,
      5,
      2,
      3,
      4
    ],
    "answer": "B",
    "explanation": "Ketangguhan mental dan kedewasaan emosi di bawah sorotan kritik tajam terlihat saat aparatur tetap tenang, objektif memisahkan kritik program dari harga diri pribadi, dan menjawab berbasis data secara hormat (skor 5).",
    "tip": "Hadapi kritik tajam dalam forum dengan tenang, apresiatif, berbasis data, dan terbuka pada penyempurnaan substansi."
  },
  {
    "id": "tkp-pro-018",
    "subPattern": "ketangguhan-di-bawah-tekanan-dan-fleksibilitas",
    "difficulty": "mudah",
    "prompt": "Pada hari kerja pertama setelah terbitnya surat edaran restrukturisasi tim, ruang tugas dan jenis pekerjaan harian Anda dialihkan mendadak ke subbagian baru dengan tenggat adaptasi singkat. Reaksi terbaik Anda adalah ...",
    "options": [
      "Mengajukan keberatan resmi panjang lebar selama sebulan agar tetap dipertahankan di meja kerja serta rekan lama",
      "Datang bekerja seadanya saja di bagian baru karena menganggap perpindahan mendadak tidak adil secara emosional",
      "Menerima penugasan baru dengan sikap adaptif, segera mempelajari tugas pokok dan alur kerja unit baru, serta menjalin komunikasi akrab dengan tim baru agar cepat memberi kontribusi nyata",
      "Terus kembali ke ruangan lama setiap hari dan menunda pengerjaan berkas tugas bagian baru",
      "Membanding-bandingkan terus keunggulan sistem unit lama di depan seluruh anggota unit baru setiap rapat pagi"
    ],
    "optionScores": [
      3,
      2,
      5,
      1,
      4
    ],
    "answer": "C",
    "explanation": "Fleksibilitas dan nilai Adaptif menuntut kesiapan cepat bergerak di lingkungan dan penugasan baru tanpa larut dalam keluhan atas perubahan organisasi (skor 5).",
    "tip": "Respons penempatan atau rotasi mendadak dengan keterbukaan belajar cepat, kolaborasi awal, dan semangat kontribusi."
  },
  {
    "id": "tkp-pro-019",
    "subPattern": "ketangguhan-di-bawah-tekanan-dan-fleksibilitas",
    "difficulty": "sedang",
    "prompt": "Setelah Anda dan tim bekerja lembur tiga hari menyusun konsep rancangan acara sosialisasi, mendadak turun perubahan kebijakan prioritas nasional dari pusat yang membuat konsep lama harus dirombak drastis sebelum peluncuran dua hari lagi. Tindakan Anda yang paling tangguh dan solutif adalah ...",
    "options": [
      "Melampiaskan kekecewaan berat dengan menolak mengubah konsep lama dan membiarkan acara meleset dari kebijakan terbaru pusat",
      "Menyerah kelelahan dan mengusulkan pembatalan penuh seluruh kegiatan sosialisasi meskipun undangan peserta sudah disebar",
      "Mengubah judul sampul konsep lama saja agar seolah sesuai dengan kebijakan baru tanpa menyesuaikan isi materinya",
      "Menarik napas tenang menerima realitas perubahan regulasi, mengidentifikasi elemen materi lama yang masih relevan dipakai ulang, lalu membagi fokus tim melakukan perombakan tercepat pada bagian inti sesuai ketentuan terbaru",
      "Mengeluhkan ketidakstabilan aturan pusat berjam-jam kepada tim hingga waktu tersisa habis terbuang"
    ],
    "optionScores": [
      1,
      3,
      2,
      5,
      4
    ],
    "answer": "D",
    "explanation": "Resiliensi menghadapi perubahan mendadak tampak pada kemampuan mengelola rasa kecewa kerja keras sebelumnya secara cepat, menyelamatkan aset kerja yang masih dapat dipakai ulang (reusable components), dan segera mengeksekusi penyesuaian terarah (skor 5).",
    "tip": "Saat kebijakan berubah mendadak menjelang tenggat, kelola emosi cepat, manfaatkan elemen kerja relevan, dan fokus pada inti penyesuaian."
  },
  {
    "id": "tkp-pro-020",
    "subPattern": "ketangguhan-di-bawah-tekanan-dan-fleksibilitas",
    "difficulty": "sedang",
    "prompt": "Di tengah pengerjaan target pelaporan akhir triwulan yang menumpuk, jaringan listrik di kantor padam total sejak pagi disertai cuaca panas ekstrem, membuat suasana ruang kerja menjadi sangat tidak nyaman dan sejumlah rekan mulai berhenti bekerja. Sikap profesional Anda adalah ...",
    "options": [
      "Langsung mengemas tas pulang ke rumah tanpa izin karena merasa mustahil bekerja tanpa pendingin ruangan dan pasokan listrik gedung",
      "Ikut duduk berkumpul di lobi halaman sambil mengeluhkan kinerja pengelola fasilitas gedung sampai sore",
      "Membiarkan semua dokumen target terlambat dan berdalih surat permakluman mati lampu saja esok hari",
      "Hanya memeriksa ulang berkas kertas sambil sesekali tidur di meja kerja menunggu nyalanya genset gedung",
      "Tetap tenang mencari solusi adaptif yang tersedia (memakai baterai laptop untuk pekerjaan offline kritis, berkoordinasi dengan pengelola fasilitas terkait genset atau titik kerja sementara aman, serta menjaga fokus penyelesaian target penting)"
    ],
    "optionScores": [
      1,
      2,
      3,
      4,
      5
    ],
    "answer": "E",
    "explanation": "Ketangguhan kerja di bawah keterbatasan sarana memfokuskan energi pada hal yang masih dapat dikendalikan secara kreatif (mode luring/baterai, pindah ruang/koordinasi genset aman) alih-alih larut dalam keluhan pasif (skor 5).",
    "tip": "Ketika kendala fasilitas mengganggu kenyamanan kerja, alihkan fokus ke langkah adaptif yang bisa langsung dikerjakan."
  },
  {
    "id": "tkp-pro-021",
    "subPattern": "ketangguhan-di-bawah-tekanan-dan-fleksibilitas",
    "difficulty": "sedang",
    "prompt": "Anda pernah mengalami kegagalan saat menjadi ketua panitia kegiatan uji coba program sebelumnya akibat kurang teliti mengantisipasi perubahan cuaca di lokasi terbuka, sehingga Anda sempat ragu saat diminta kembali memimpin proyek lapangan berskala lebih besar. Sikap mental tangguh terbaik adalah ...",
    "options": [
      "Menerima kepercayaan tersebut dengan kesadaran reflektif, membedah catatan kesalahan masa lalu menjadi daftar pencegahan serta rencana cadangan (Plan B) yang matang sejak awal, lalu mengeksekusi amanah baru dengan percaya diri",
      "Menolak langsung penugasan baru itu karena khawatir kegagalan yang sama kembali berulang mencoreng riwayat kinerja Anda",
      "Menerima tugas dengan rasa tertekan sembari membebankan seluruh keputusan lokasi kepada rekan panitia lain agar tidak ikut disalahkan bila gagal",
      "Menyembunyikan riwayat kendala masa lalu dan melaksanakan rencana baru persis sama seperti proyek terdahulu tanpa antisipasi risiko",
      "Meminta pimpinan menjamin secara tertulis bahwa panitia bebas evaluasi apa pun apabila kendala alam terulang lagi"
    ],
    "optionScores": [
      5,
      2,
      3,
      1,
      4
    ],
    "answer": "A",
    "explanation": "Growth mindset mengubah pengalaman kegagalan menjadi aset kesiapan mitigasi risiko (rencana kontinjensi) dan keberanian bangkit menjalankan tanggung jawab lebih besar secara matang (skor 5).",
    "tip": "Jadikan kekeliruan terdahulu sebagai daftar kontrol mitigasi risiko untuk melangkah mantap di penugasan berikutnya."
  },
  {
    "id": "tkp-pro-022",
    "subPattern": "ketangguhan-di-bawah-tekanan-dan-fleksibilitas",
    "difficulty": "sedang",
    "prompt": "Dalam penugasan mendadak di wilayah kepulauan terpencil selama dua minggu dengan sinyal seluler terbatas dan fasilitas penginapan sederhana jauh dari kenyamanan perkotaan, cara terbaik menjaga kestabilan semangat kerja adalah ...",
    "options": [
      "Terus membandingkan keterbatasan daerah terpencil dengan kenyamanan kantor induk di depan masyarakat lokal setempat",
      "Menyesuaikan diri cepat dengan ritme dan kesederhanaan kondisi lapangan, berfokus pada misi kemanfaatan pelayanan bagi masyarakat pulau, dan memanfaatkan waktu tenang dengan terencana",
      "Menghitung hari mundur setiap jam sambil meminta pimpinan segera memanggil pulang sebelum jadwal pendataan tuntas",
      "Mengurangi cakupan desa kunjungan dengan sengaja agar masa tinggal di pulau selesai lebih singkat tiga hari dari rencana",
      "Mengisolasi diri di kamar penginapan selepas jam tugas sore tanpa mau berinteraksi ramah bersama tim atau warga lokal"
    ],
    "optionScores": [
      1,
      5,
      3,
      2,
      4
    ],
    "answer": "B",
    "explanation": "Fleksibilitas penugasan 3T dan ketangguhan karakter ASN berakar pada orientasi makna pengabdian bagi warga yang dilayani dan keluwesan menyesuaikan gaya hidup sementara dengan kondisi lapangan (skor 5).",
    "tip": "Ketangguhan di penugasan terpencil bertumpu pada keluwesan adaptasi kondisi sederhana dan fokus pada nilai manfaat bagi warga."
  },
  {
    "id": "tkp-pro-023",
    "subPattern": "ketangguhan-di-bawah-tekanan-dan-fleksibilitas",
    "difficulty": "sulit",
    "prompt": "Anda ditugaskan menjadi koordinator posko pelayanan pengaduan darurat saat terjadi krisis gangguan data layanan nasional selama 72 jam penuh. Di tengah tekanan pertanyaan ratusan warga, tuntutan pimpinan menuntut laporan tiap dua jam, dan dua staf tumbang kelelahan, sikap kepemimpinan tangguh paling tepat Anda lakukan adalah ...",
    "options": [
      "Menangani seluruh tugas laporan dan loket seorang diri sepanjang 72 jam tanpa tidur hingga Anda ikut tumbang sebelum krisis reda",
      "Menutup akses informasi pembaruan progres sementara dan mematikan saluran telepon posko selama 24 jam agar tim bisa beristirahat serempak",
      "Menjaga ketenangan komando, mengatur sistem shift istirahat terstruktur bagi anggota tim yang sehat agar ketahanan bertahan penuh, menstandardisasi templat pembaruan status cepat ke pimpinan, dan menyampaikan informasi faktual yang menenangkan kepada warga",
      "Menyalurkan kekesalan tekanan krisis dengan menegur keras staf yang jatuh sakit karena dianggap memiliki stamina lemah",
      "Mengalihkan seluruh permintaan klarifikasi warga ke meja petugas keamanan luar tanpa memantau keakuratan penjelasan"
    ],
    "optionScores": [
      3,
      2,
      5,
      1,
      4
    ],
    "answer": "C",
    "explanation": "Kepemimpinan tangguh di tengah krisis berkepanjangan tidak mengandalkan heroisme membabi buta yang berujung kolapsnya tim, melainkan mengatur keberlanjutan rotasi napas tim (shift sehat), menyederhanakan pelaporan pimpinan, serta menjaga komunikasi publik tenang faktual (skor 5).",
    "tip": "Dalam krisis berkepanjangan: jaga ketenangan tim, kelola rotasi stamina, ringkas alur lapor pimpinan, dan komunikasi fakta yang menenangkan."
  },
  {
    "id": "tkp-pro-024",
    "subPattern": "ketangguhan-di-bawah-tekanan-dan-fleksibilitas",
    "difficulty": "sulit",
    "prompt": "Sebuah metode kerja baru berbasis kinerja kolaboratif lintas subbagian justru membuat hasil kerja awal tim Anda terlihat sedikit melambat pada bulan pertama penyesuaian, memicu keraguan sebagian pegawai untuk kembali ke cara lama yang terpisah-pisah. Sebagai motor penggerak inovasi tim, respons tangguh Anda adalah ...",
    "options": [
      "Langsung mencabut seluruh sistem kolaboratif baru pada akhir bulan pertama agar angka rapor cepat naik sementara",
      "Memaksakan perubahan tanpa mau mendengar kesulitan teknis yang dirasakan rekan pelaksana sehari-hari di lapangan",
      "Menghindari rapat evaluasi capaian bulan pertama sambil berharap performa akan membaik sendirinya tanpa perbaikan alur",
      "Menjelaskan secara tenang fenomena kurva belajar masa transisi (learning curve), mengumpulkan data titik hambatan paling sering muncul, lalu melakukan penyesuaian iteratif kecil pada alur kerja agar tim merasakan manfaat efisiensi nyata di bulan kedua",
      "Menyalahkan para pelaksana lapangan di depan pimpinan karena dianggap enggan bekerja keras mengikuti metode kolaboratif baru"
    ],
    "optionScores": [
      2,
      3,
      1,
      5,
      4
    ],
    "answer": "D",
    "explanation": "Perubahan sistem hampir selalu melewati fase penurunan sementara akibat kurva belajar. Ketangguhan inovator sejati tampak saat tetap sabar mengawal perbaikan iteratif berbasis umpan balik titik macet riil alih-alih menyerah dini atau memaksa buta (skor 5).",
    "tip": "Waspadai 'learning dip' awal inovasi: evaluasi titik macet secara nyata dan lakukan penyempurnaan iteratif bersama pengguna."
  },
  {
    "id": "tkp-pro-025",
    "subPattern": "disiplin-etika-birokrasi-dan-netralitas",
    "difficulty": "mudah",
    "prompt": "Menjelang masa pemilihan kepala daerah, seorang teman akrab yang menjadi anggota tim sukses calon meminta Anda membagikan pamflet digital visi-misi pasangan calon melalui status WhatsApp pribadi Anda karena merasa pertemanan di akun pribadi terpisah dari jam kantor. Sikap berintegritas netralitas ASN adalah ...",
    "options": [
      "Membagikan pamflet digital tersebut sebentar selama empat jam saja pada malam Minggu lalu menghapusnya sebelum Senin pagi",
      "Membagikan tanpa menuliskan kata dukungan apa pun dan hanya menyisipkan ikon tersenyum pada keterangan foto",
      "Meminta anggota keluarga di rumah memposting pamflet tersebut memakai nomor telepon pribadi Anda yang jarang dilihat rekan kantor",
      "Membagikannya hanya di grup alumni sekolah menengah dengan syarat tidak ada rekan sekantor di grup tersebut",
      "Menolak secara santun namun tegas karena kewajiban netralitas ASN melarang segala bentuk dukungan kampanye di media sosial pribadi maupun jam di luar kantor demi objektivitas pelayanan publik"
    ],
    "optionScores": [
      2,
      3,
      1,
      4,
      5
    ],
    "answer": "E",
    "explanation": "Berdasarkan UU No. 20 Tahun 2023 tentang ASN dan ketentuan netralitas ASN, keterlibatan kampanye lewat media sosial pribadi termasuk luar jam kantor tetap melanggar asas netralitas dan disiplin ASN (skor 5).",
    "tip": "Netralitas ASN melekat penuh selama menjabat, mencakup akun media sosial pribadi dan di luar jam dinas."
  },
  {
    "id": "tkp-pro-026",
    "subPattern": "disiplin-etika-birokrasi-dan-netralitas",
    "difficulty": "mudah",
    "prompt": "Anda mengetahui kebiasaan tidak terpuji beberapa pegawai di garasi kantor yang meminjam mobil dinas berpelat merah pada Sabtu-Minggu untuk keperluan piknik wisata keluarga asalkan mengisi bahan bakar sendiri. Sebagai aparatur yang memahami disiplin aset negara, tindakan Anda terhadap fasilitas dinas yang dipercayakan kepada Anda adalah ...",
    "options": [
      "Menggunakan kendaraan serta fasilitas dinas secara eksklusif hanya untuk pelaksanaan tugas kedinasan resmi, merawatnya amanah, dan tidak memakainya untuk liburan pribadi meski di hari libur",
      "Menggunakannya untuk acara pernikahan keluarga dekat sebatas dalam kota karena tidak memakai anggaran bahan bakar kantor",
      "Hanya mengendarai kendaraan dinas di akhir pekan setelah melepas tanda stiker instansi di pintu mobil sementara",
      "Meminjamkan kendaraan dinas kepada tetangga sekitar saat tidak dipakai kantor asalkan dijanjikan dicuci bersih kembali",
      "Menganggap pemakaian akhir pekan wajar selama sudah mendapatkan izin lisan tidak tertulis dari petugas garasi kantor"
    ],
    "optionScores": [
      5,
      2,
      1,
      3,
      4
    ],
    "answer": "A",
    "explanation": "Nilai Akuntabel dalam BerAKHLAK menegaskan kewajiban menggunakan kekayaan dan barang milik negara secara bertanggung jawab khusus untuk kepentingan dinas serta bukan kepentingan pribadi/keluarga (skor 5).",
    "tip": "Barang milik negara (BMN) seperti kendaraan dinas hanya diperuntukkan bagi pelaksanaan tugas kedinasan yang sah."
  },
  {
    "id": "tkp-pro-027",
    "subPattern": "disiplin-etika-birokrasi-dan-netralitas",
    "difficulty": "sedang",
    "prompt": "Di media sosial pribadi, banyak pekerja memamerkan gaya hidup serba mewah, jam tangan berharga fantastis, maupun liburan luar negeri secara mencolok (flexing). Sebagai seorang ASN yang bertugas melayani masyarakat luas dengan gaji dari pajak rakyat, sikap bijak Anda adalah ...",
    "options": [
      "Tetap rutin mengunggah koleksi barang mahal pribadi agar masyarakat tahu profesi ASN menjanjikan kemewahan tinggi",
      "Menjaga kesederhanaan, kerendahan hati, dan kepantasan etika abdi negara di ruang fisik maupun media sosial demi memelihara sensitivitas sosial serta kepercayaan masyarakat terhadap birokrasi yang bersih",
      "Membatasi akses akun media sosial hanya bagi keluarga inti supaya tetap bebas mengunggah konten pamer kemewahan tanpa diketahui warga",
      "Melarang rekan kantor lain memiliki tabungan atau kendaraan pribadi yang baik meskipun berasal dari warisan keluarga sah",
      "Berpakaian sangat lusuh dan tidak rapi di kantor pelayanan supaya terlihat seratus persen sederhana di hadapan warga"
    ],
    "optionScores": [
      1,
      5,
      3,
      2,
      4
    ],
    "answer": "B",
    "explanation": "Etika birokrasi dan surat edaran kesederhanaan aparatur menekankan hidup bersahaja, rapi bermartabat, serta kepekaan sosial menjauhi pamer kemewahan (flexing) agar keadilan dan wibawa pelayan rakyat tetap terjaga (skor 5).",
    "tip": "ASN perlu menjaga kesederhanaan dan kepekaan sosial di dunia nyata maupun media sosial, menjauhi pamer kemewahan (flexing)."
  },
  {
    "id": "tkp-pro-028",
    "subPattern": "disiplin-etika-birokrasi-dan-netralitas",
    "difficulty": "sedang",
    "prompt": "Anda mendapat tawaran pekerjaan sampingan berbayar menjadi agen penjual produk perusahaan swasta yang juga sering menjadi penyedia barang pada lelang pengadaan barang di instansi Anda. Sikap profesional yang menjaga etika birokrasi bebas konflik kepentingan adalah ...",
    "options": [
      "Menerima pekerjaan sampingan tersebut karena dikerjakan malam hari di luar jam kerja kantor dan tidak mengganggu presensi",
      "Mendaftarkan keagenan tersebut menggunakan nama pasangan hidup atau adik Anda sambil tetap memasarkannya kepada panitia pengadaan kantor",
      "Menolak tegas tawaran pekerjaan sampingan tersebut karena berbenturan langsung dengan potensi konflik kepentingan jabatan serta mengancam objektivitas layanan dan pengadaan instansi",
      "Menerimanya selama tiga bulan pertama saja sambil berjanji tidak ikut campur pada proses evaluasi penawaran perusahaan itu",
      "Menanyakan apakah rekan satu ruangan lainnya juga bersedia ikut menjadi agen penjualan produk perusahaan rekanan tersebut"
    ],
    "optionScores": [
      2,
      1,
      5,
      3,
      4
    ],
    "answer": "C",
    "explanation": "Conflict of interest mencegah hubungan bisnis/komersial pribadi ASN dengan mitra rekanan instansinya sendiri. Penolakan tegas meski dikerjakan di luar jam kantor menjaga kemurnian objektivitas birokrasi (skor 5).",
    "tip": "Hindari aktivitas usaha atau kerja sampingan yang memiliki irisan kepentingan/mitra bisnis dengan instansi tempat bertugas."
  },
  {
    "id": "tkp-pro-029",
    "subPattern": "disiplin-etika-birokrasi-dan-netralitas",
    "difficulty": "sedang",
    "prompt": "Suatu pagi ketika Anda tiba lima menit sebelum apel pagi, Anda melihat rekan kerja yang sebenarnya masih dalam perjalanan menitipkan kartu atau meminta Anda membantunya menekan tombol aplikasi presensi elektronik kantor menggunakan ponselnya yang tertinggal/akunnya. Sikap disiplin Anda adalah ...",
    "options": [
      "Membantu menekankan tombol presensi kali ini saja karena merasa iba terhadap teman yang terjebak macet di jalan raya",
      "Meminta imbalan traktiran makan siang darinya terlebih dahulu baru bersedia mengisi presensi kehadirannya",
      "Mengabaikan permintaannya sambil menyebarkan info ke seluruh seksi bahwa ia kerap datang terlambat akhir-akhir ini",
      "Menolak tegas melakukan titip absen secara santun karena termasuk pelanggaran kejujuran dan disiplin ASN, lalu menyarankannya melapor jujur keterlambatannya kepada atasan sesuai aturan yang berlaku",
      "Mengubah catatan waktu hadir manual di buku jaga satpam agar terlihat rekan tersebut datang tepat pukul tujuh"
    ],
    "optionScores": [
      2,
      1,
      3,
      5,
      4
    ],
    "answer": "D",
    "explanation": "Titip absen (presensi palsu) merusak budaya kejujuran dan keadilan antarpegawai yang disiplin bangun tepat waktu. Menolak santun sekaligus mengarahkan jalur konfirmasi keterlambatan jujur menegakkan disiplin ASN (skor 5).",
    "tip": "Tolak praktik titip absen dalam bentuk apa pun; kejujuran disiplin waktu membangun keadilan tempat kerja."
  },
  {
    "id": "tkp-pro-030",
    "subPattern": "disiplin-etika-birokrasi-dan-netralitas",
    "difficulty": "sedang",
    "prompt": "Seorang pejabat politik daerah meminta staf di unit Anda menyiapkan data rincian penerima bantuan sosial warga disertai nomor telepon seluler untuk digunakan tim suksesnya mengirim pesan ucapan selamat hari raya bertanda logo pasangan calon. Sebagai pengelola data di unit tersebut, sikap tegas Anda adalah ...",
    "options": [
      "Mengirimkan berkas lengkap secara diam-diam dengan asumsi data bantuan publik memang hak kepala daerah petahana",
      "Memberikan hanya nomor telepon wilayah tertentu yang diminta saja agar jumlah data yang keluar tidak terlalu mencolok",
      "Menunda memberikan berkas berminggu-minggu tanpa berani menjelaskan batasan hukum perlindungan data maupun netralitas ASN",
      "Meminta staf honorer mengirim data tersebut melalui surel tidak resmi supaya nama Anda tidak tercatat di sistem pengiriman",
      "Menolak permintaan tersebut secara santun namun tegas berlandaskan asas netralitas ASN serta UU Pelindungan Data Pribadi karena basis data program pemerintah dilarang keras dimanfaatkan untuk kepentingan politik elektoral"
    ],
    "optionScores": [
      1,
      2,
      3,
      4,
      5
    ],
    "answer": "E",
    "explanation": "Politisasi data dan program bansos merupakan pelanggaran ganda: melanggar netralitas ASN (UU 20/2023) sekaligus melanggar pelindungan data pribadi warga (UU 27/2022). Penolakan tegas berbasis dua dasar hukum tersebut wajib dijaga aparatur (skor 5).",
    "tip": "Lindungi basis data warga dan program negara dari pemanfaatan elektoral/politik praktis dengan berpegang pada netralitas dan UU PDP."
  },
  {
    "id": "tkp-pro-031",
    "subPattern": "disiplin-etika-birokrasi-dan-netralitas",
    "difficulty": "sulit",
    "prompt": "Dalam suasana diskusi tim saat jam istirahat makan siang di kantin umum yang juga didatangi masyarakat, dua rekan kerja mulai membicarakan informasi rahasia penyelidikan audit internal terhadap salah satu unit pelayanan secara cukup keras hingga berisiko terdengar pengunjung luar. Langkah etika birokrasi paling tepat Anda adalah ...",
    "options": [
      "Segera memberi isyarat halus yang sopan kepada kedua rekan agar menghentikan pembahasan materi rahasia jabatan di ruang publik terbuka dan memindahkannya hanya di ruang rapat tertutup tim pemeriksa yang berwenang",
      "Ikut menyimak penuh cerita audit internal tersebut dan melengkapinya dengan detail informasi yang Anda ketahui sendiri",
      "Langsung berdiri meninggalkan kantin diam-diam tanpa mengingatkan kedua rekan bahwa pengunjung luar duduk di meja sebelah",
      "Mengajak kedua rekan berbisik lebih pelan sedikit saja di meja kantin yang sama sambil terus membahas nama-nama terperiksa",
      "Menegur keduanya secara terbuka dengan nada sangat keras di depan pengunjung kantin agar semua tahu Anda menjaga rahasia"
    ],
    "optionScores": [
      5,
      1,
      3,
      2,
      4
    ],
    "answer": "A",
    "explanation": "Kerahasiaan jabatan (confidentiality) berlaku di mana pun termasuk saat jam istirahat di tempat umum. Mengingatkan halus cepat agar pembicaraan sensitif dihentikan dan dibawa ke forum tertutup mencegah kebocoran informasi belum final serta menjaga asas praduga tak bersalah (skor 5).",
    "tip": "Jaga rahasia jabatan dan proses pengawasan internal dari percakapan di ruang publik terbuka melalui pengingatan cepat yang bijak."
  },
  {
    "id": "tkp-pro-032",
    "subPattern": "disiplin-etika-birokrasi-dan-netralitas",
    "difficulty": "sulit",
    "prompt": "Saat masa kampanye pemilu, Anda ditunjuk menjadi narasumber resmi sosialisasi program wajib kependudukan di sebuah forum desa, tetapi di tengah sesi tanya jawab seorang tokoh tamu tiba-tiba mengarahkan pembicaraan memuji kelebihan satu partai/calon tertentu dan meminta tanggapan Anda di atas panggung. Sikap netral paling cerdas dan bermartabat adalah ...",
    "options": [
      "Ikut mengamini pujian kepada calon tersebut secara singkat demi menjaga kesopanan terhadap tokoh tamu desa",
      "Mengembalikan fokus forum secara ramah, tegas, dan netral ke materi teknis layanan kependudukan yang menjadi agenda dinas, menegaskan posisi netral aparatur negara tanpa merendahkan hak pilih warga, dan menghindari komentar politik partisan apa pun",
      "Langsung membantah dengan menyebutkan kelemahan calon tersebut beserta keunggulan calon pesaingnya agar tampak berimbang",
      "Menghentikan acara sosialisasi seketika itu juga lalu meninggalkan balai desa sebelum warga sempat bertanya tentang kependudukan",
      "Mengalihkan jawaban kepada staf pendamping termuda di panggung supaya ia yang menghadapi pertanyaan politis tersebut"
    ],
    "optionScores": [
      1,
      5,
      2,
      3,
      4
    ],
    "answer": "B",
    "explanation": "Narasumber pemerintah di lapangan wajib pandai menjinakkan pancingan politik (pivoting back gracefully to public policy) dengan menegaskan netralitas ASN secara ramah, profesional, dan fokus kembali pada pelayanan warga (skor 5).",
    "tip": "Bila dipancing berkomentar politik saat bertugas di forum warga, tegaskan netralitas ASN secara sopan lalu kembalikan diskusi ke topik layanan publik."
  },
  {
    "id": "tkp-pro-033",
    "subPattern": "pengembangan-diri-dan-inisiatif-kualitas",
    "difficulty": "mudah",
    "prompt": "Instansi Anda menerbitkan regulasi baru yang belum sempat disosialisasikan tatap muka lewat bimtek, padahal minggu depan Anda sudah harus menerapkan aturan tersebut dalam pemeriksaan berkas pemohon. Sikap proaktif terbaik Anda adalah ...",
    "options": [
      "Menunggu jadwal bimbingan teknis tatap muka digelar baru mulai membaca teks peraturannya bulan depan",
      "Memakai cara pemeriksaan lama saja sambil mencatat alasan belum adanya pelatihan resmi di berkas catatan kaki",
      "Segera mengunduh naskah lengkap regulasi baru, mempelajari perubahannya secara mandiri, mendiskusikan poin krusial bersama rekan serta atasan untuk menyamakan pemahaman, dan menyiapkan daftar periksa baru",
      "Mengandalkan ringkasan komentar singkat dari status media sosial orang tidak dikenal agar lebih cepat membaca",
      "Menyerahkan semua berkas masuk berdasar aturan baru kepada rekan lain sampai Anda selesai mengikuti diklat resmi"
    ],
    "optionScores": [
      3,
      2,
      5,
      1,
      4
    ],
    "answer": "C",
    "explanation": "Inisiatif belajar mandiri (self-directed learning) membaca regulasi primer, mengonfirmasikannya bersama tim/atasan, dan merumuskan checklist kerja mencerminkan nilai Kompeten dan profesionalitas sejati (skor 5).",
    "tip": "Jangan pasif menunggu bimtek saat regulasi baru terbit; baca naskah resmi langsung, diskusikan tim, dan buat checklist penerapan."
  },
  {
    "id": "tkp-pro-034",
    "subPattern": "pengembangan-diri-dan-inisiatif-kualitas",
    "difficulty": "mudah",
    "prompt": "Kinerja harian Anda secara standar sudah memenuhi angka target minimal kantor setiap bulan, namun Anda melihat sebenarnya masih ada celah memotong waktu pemeriksaan dokumen yang sering membuat pemohon menunggu agak lama. Sikap pengembangan kualitas terbaik Anda adalah ...",
    "options": [
      "Merasa sudah cukup puas karena target penilaian pegawai bulanan sudah menyentuh nilai baik tanpa perlu bersusah payah berinovasi",
      "Menghabiskan sisa jam kerja dengan bersantai setelah target harian tercapai sebelum pukul dua siang",
      "Menyimpan ide percepatan tersebut untuk disimpan pribadi apabila nanti dipromosikan menjadi kepala seksi saja",
      "Melakukan perbaikan terus-menerus (continuous improvement) dengan memetakan titik tunggu, menguji alur ringkas yang tetap akurat secara SOP, dan mengajukan inovasi penyederhanaan tersebut kepada atasan",
      "Mengerjakan tambahan tugas seremonial tidak terkait mutu pelayanan supaya jam kantor tampak selalu sibuk di meja"
    ],
    "optionScores": [
      3,
      1,
      2,
      5,
      4
    ],
    "answer": "D",
    "explanation": "Semangat perbaikan tiada henti dalam Berorientasi Pelayanan dan Kompeten mendorong pegawai melampaui sekadar memenuhi angka minimal menuju kualitas pengalaman warga yang semakin cepat dan baik (skor 5).",
    "tip": "Jangan cepat puas di batas target minimal; biasakan perbaikan berkelanjutan (continuous improvement) demi mutu layanan."
  },
  {
    "id": "tkp-pro-035",
    "subPattern": "pengembangan-diri-dan-inisiatif-kualitas",
    "difficulty": "sedang",
    "prompt": "Saat melihat daftar kompetensi jabatan yang dipersyaratkan untuk rencana karier pelayanan lima tahun mendatang, Anda menyadari keterampilan pengolahan analitik data Anda masih berada di level pemula. Langkah pengembangan diri yang paling nyata Anda ambil adalah ...",
    "options": [
      "Berharap persyaratan kompetensi data nanti dihapus oleh kementerian sebelum jadwal penilaian kinerja tahunan tiba",
      "Mengambil kursus bidang hiburan lain yang tidak berkaitan dengan pekerjaan karena jauh lebih santai di akhir pekan",
      "Hanya menunggu surat penunjukan diklat berbiaya APBN dari bagian kepegawaian walaupun kuotanya sangat terbatas tiap tahun",
      "Meminta rekan di bagian statistik mengerjakan seluruh olah data bagian Anda setiap kali dibutuhkan selamanya",
      "Mendaftar pelatihan atau belajar daring terstruktur secara mandiri (termasuk memanfaatkan portal pembelajaran ASN gratis), langsung mempraktikkan pada data kerja nyata dengan etis, dan meminta umpan balik rekan ahli"
    ],
    "optionScores": [
      1,
      2,
      4,
      3,
      5
    ],
    "answer": "E",
    "explanation": "Pengembangan diri berkelanjutan (lifelong learning) tidak semata bergantung pada diklat tatap muka berbayar kantor, tetapi memanfaatkan beragam kanal pembelajaran terbuka dan mempraktikkan langsung pada kerja nyata (skor 5).",
    "tip": "Ambil tanggung jawab penuh atas peningkatan kompetensi diri melalui belajar aktif dan praktik langsung di lingkungan kerja."
  },
  {
    "id": "tkp-pro-036",
    "subPattern": "pengembangan-diri-dan-inisiatif-kualitas",
    "difficulty": "sedang",
    "prompt": "Seusai melakukan presentasi kebijakan penting di hadapan pimpinan, Anda memperoleh evaluasi mendetail bahwa sistematika paparan Anda masih terlalu berbelit serta kurang menyajikan kesimpulan dampak konkret. Sikap pembelajar paling sehat adalah ...",
    "options": [
      "Mengucapkan terima kasih atas masukan konstruktif, mencatat kekurangan struktur paparan, meminta contoh paparan yang dinilai efektif sebagai patokan belajar, dan langsung melatih perbaikan penyajian untuk presentasi berikutnya",
      "Merasa tersinggung karena Anda telah begadang dua hari menyiapkan slide namun tetap saja dikomentari pimpinan",
      "Menyalahkan keterbatasan waktu rapat yang terlalu singkat sehingga maksud paparan tidak sempat dijelaskan semua",
      "Mengurangi kesediaan menjadi presenter dalam rapat-rapat tim mendatang agar tidak menerima kritik penyajian lagi",
      "Membela diri panjang lebar sesudah rapat berakhir bahwa format paparan berbelit sudah menjadi tradisi lama di seksi Anda"
    ],
    "optionScores": [
      5,
      2,
      3,
      1,
      4
    ],
    "answer": "A",
    "explanation": "Profesional yang bertumbuh menyambut umpan balik sebagai cermin cepat menuju keahlian lebih tinggi: berterima kasih, mencari patokan baik (benchmark), dan menerapkan langsung perbaikannya pada kesempatan berikutnya (skor 5).",
    "tip": "Jadikan umpan balik pimpinan atas hasil kerja sebagai patokan peningkatan kualitas konkret pada kesempatan berikutnya."
  },
  {
    "id": "tkp-pro-037",
    "subPattern": "pengembangan-diri-dan-inisiatif-kualitas",
    "difficulty": "sedang",
    "prompt": "Anda ditugaskan mendesain konsep inovasi layanan publik tahunan unit, namun beberapa rekan senior memberi masukan bahwa inovasi tidak usah terlalu rumit cukup mengganti warna sampul panduan yang sudah ada supaya tidak merepotkan tim. Sikap berintegritas kualitas Anda adalah ...",
    "options": [
      "Menyetujui usulan mengganti sampul saja karena hal terpenting tiap unit memiliki laporan satu inovasi baru tahunan",
      "Tetap mendengarkan masukan senior soal keringanan beban tim, lalu mengusulkan inovasi sederhana yang fokus menyelesaikan satu masalah nyata paling sering dikeluhkan warga secara terukur dan mudah dijalankan tim",
      "Memaksakan rancangan aplikasi raksasa yang sangat mahal meskipun infrastruktur serta SDM unit belum mampu memeliharanya",
      "Mengcopy-paste utuh laporan inovasi daerah lain tahun lalu dan hanya mengganti nama kepala dinasnya di halaman awal",
      "Membatalkan usulan inovasi unit tahun ini tanpa memberitahu pimpinan sehingga nama bagian kosong dalam pelaporan"
    ],
    "optionScores": [
      2,
      5,
      3,
      1,
      4
    ],
    "answer": "B",
    "explanation": "Inovasi sejati tidak diukur dari kosmetik sampul maupun kemewahan sistem mahal tak terkelola, melainkan dari ketepatan memecahkan masalah riil masyarakat secara sederhana, terukur, dan berkelanjutan oleh tim (skor 5).",
    "tip": "Pilih inovasi yang sederhana, realistis dikelola tim, namun benar-benar memecahkan masalah utama warga (bukan kosmetik)."
  },
  {
    "id": "tkp-pro-038",
    "subPattern": "pengembangan-diri-dan-inisiatif-kualitas",
    "difficulty": "sedang",
    "prompt": "Setelah menelaah beberapa daerah lain yang berhasil meraih predikat sangat baik dalam pelayanan publik terpadu, Anda menemukan sejumlah ide tata ruang tunggu serta alur antrean cerdas yang cocok diterapkan di unit Anda. Langkah tepat selanjutnya untuk mewujudkan peningkatan mutu tersebut adalah ...",
    "options": [
      "Sekadar menceritakan kekaguman Anda tentang kemajuan daerah lain saat jam makan siang bersama rekan kerja tanpa tindak lanjut",
      "Mengkritik terus kondisi kantor sendiri di depan pengunjung loket bahwa tata kelola unit Anda masih tertinggal jauh",
      "Mengamati dan memodifikasi praktik baik daerah lain (benchmarking) agar sesuai aturan serta keterbatasan ruang/anggaran unit Anda, lalu menyusun usulan singkat terukur bagi pimpinan dan tim",
      "Menunggu pegawai dari daerah berprestasi tersebut dipindahkan dahulu ke kantor Anda baru meniru caranya",
      "Langsung memindahkan meja-meja loket seorang diri pada malam hari tanpa persetujuan tata ruang maupun informasi tim"
    ],
    "optionScores": [
      3,
      1,
      5,
      2,
      4
    ],
    "answer": "C",
    "explanation": "Prinsip Amati-Tiru-Modifikasi (ATM / benchmarking adaptif) mengubah inspirasi praktik unggulan daerah lain menjadi proposal implementasi kontekstual yang realistis dengan anggaran dan regulasi unit sendiri (skor 5).",
    "tip": "Terapkan Amati-Tiru-Modifikasi: adaptasikan praktik baik luar menjadi usulan realistis sesuai konteks anggaran dan regulasi unit."
  },
  {
    "id": "tkp-pro-039",
    "subPattern": "pengembangan-diri-dan-inisiatif-kualitas",
    "difficulty": "sulit",
    "prompt": "Anda menemukan kesalahan berulang yang kecil tetapi konsisten terjadi setiap triwulan di tahap pencocokan bukti fisik laporan lintas bagian akibat tidak jelasnya deskripsi instruksi di formulir. Meski tidak memicu sanksi berat dan sudah dianggap 'biasa terjadi' oleh staf selama tiga tahun terakhir, inisiatif kualitas terbaik Anda adalah ...",
    "options": [
      "Membiarkan kesalahan kecil berulang itu karena sudah dianggap kebiasaan normal sejak sebelum Anda masuk bekerja",
      "Menegur satu staf pelaksana saja tiap triwulan ketika kesalahannya muncul sambil tetap mempertahankan formulir yang membingungkan",
      "Mengisi perbaikan sendiri tiap akhir triwulan diam-diam sepanjang malam tanpa mengubah instruksi formulir agar rekan tidak perlu berubah",
      "Menganalisis sumber ambiguitas pada desain formulirnya (poka-yoke/anti-kesalahan), mendiskusikan perbaikan deskripsi kolom serta panduan visual singkat bersama para pengguna lintas bagian, lalu mengusulkan revisi formulir baku ke penanggung jawab mutu",
      "Membuat laporan audit kesalahan berulang tersebut langsung untuk menjatuhkan sanksi kepada bagian tata usaha"
    ],
    "optionScores": [
      2,
      3,
      4,
      5,
      1
    ],
    "answer": "D",
    "explanation": "Pendekatan kendali mutu modern melihat kesalahan berulang manusiawi (human error) sebagai peluang memperbaiki desain alat kerjanya (error-proofing / poka-yoke), melibatkan pengguna saat revisi sehingga ketelitian naik permanen bagi semua orang (skor 5).",
    "tip": "Saat kesalahan sama terus berulang lintas waktu, perbaiki desain sistem/formulirnya (poka-yoke) agar mudah dilakukan secara benar."
  },
  {
    "id": "tkp-pro-040",
    "subPattern": "pengembangan-diri-dan-inisiatif-kualitas",
    "difficulty": "sulit",
    "prompt": "Setelah meraih nilai sempurna dalam evaluasi kinerja tahunan pribadi, Anda justru dipercaya membimbing dua pegawai magang dan satu staf baru yang sering membuat kesalahan teknis mendasar dalam pekerjaannya. Pandangan pengembangan kualitas paling visioner bagi diri dan unit adalah ...",
    "options": [
      "Memilih mengerjakan seluruh tugas teknis penting sendiri agar rapor kinerja pribadi tahun depan tetap sempurna dan bersih dari kesalahan staf baru",
      "Menyerahkan hanya pekerjaan fotokopi dan antar surat kepada staf baru serta pemagang supaya tidak mengganggu mutu berkas seksi",
      "Meminta bagian kepegawaian memindahkan staf baru tersebut ke seksi lain karena dianggap menurunkan rata-rata kinerja tim Anda",
      "Mengajari mereka sekali secara cepat di hari pertama lalu membiarkan mereka belajar sendiri dari teguran pimpinan bila salah",
      "Melihat peran pembinaan sebagai kesempatan meningkatkan kepemimpinan dan kualitas sistem unit: merancang panduan onboarding ringkas, mendampingi bertahap dengan umpan balik membangun, hingga kapasitas seluruh tim naik bersama"
    ],
    "optionScores": [
      3,
      2,
      1,
      4,
      5
    ],
    "answer": "E",
    "explanation": "Tingkat tertinggi profesionalisme ASN bukan hanya unggul seorang diri (individual contributor), melainkan kesediaan melipatgandakan kompetensi organisasi dengan membimbing, merancang panduan sistemik, dan mengangkat kapabilitas tim secara kolektif (skor 5).",
    "tip": "Kualitas pemimpin pembelajar tercermin saat keahlian pribadi berkembang menjadi penguatan kapasitas dan sistem mutu seluruh tim."
  }
];

export const profesionalismeQuestions: readonly Question[] = buildTkpPatternQuestions(
  "profesionalisme",
  profesionalismeDrafts,
);
