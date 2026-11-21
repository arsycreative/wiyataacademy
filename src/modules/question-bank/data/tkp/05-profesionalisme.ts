import {
  buildTkpPatternQuestions,
  type Question,
  type TkpQuestionDraft,
} from "@/modules/question-bank/domain/question";
import { profesionalismeBatch2Drafts } from "./batches/05-profesionalisme-batch-2";

const profesionalismeDrafts: readonly TkpQuestionDraft[] = [
  {
    "id": "tkp-pro-001",
    "subPattern": "skala-prioritas-dan-manajemen-tenggat",
    "difficulty": "mudah",
    "prompt": "Pada pagi hari, Anda menerima tiga tugas sekaligus: satu laporan mendesak yang ditunggu pimpinan untuk rapat pukul 11.00, satu berkas rutin bulanan yang tenggatnya masih lima hari lagi, serta permintaan bantuan rekan merapikan arsip meja. Langkah manajemen waktu terbaik adalah ...",
    "options": [
      "Menyelesaikan laporan rapat pukul 11.00 dahulu dengan akurat, lalu membantu arsip rekan sebelum mencicil berkas rutin.",
      "Mencicil berkas rutin sebentar pada pagi hari, lalu beralih mengerjakan laporan rapat pimpinan tepat menjelang pukul sebelas siang.",
      "Fokus menuntaskan laporan rapat pukul 11.00 tepat waktu, lalu langsung menggarap berkas rutin agar target pribadi aman tanpa sempat membantu arsip.",
      "Menunda pengerjaan laporan rapat sambil menunggu konfirmasi lanjutan pimpinan dan mendahulukan berkas rutin yang formatnya lebih mudah.",
      "Membantu rekan merapikan arsip meja terlebih dulu demi keakraban tim, kemudian mengebut laporan rapat pimpinan mendekati pukul sebelas."
    ],
    "optionScores": [
      5,
      3,
      4,
      1,
      2
    ],
    "answer": "A",
    "explanation": "Prioritas terbaik mendahulukan laporan rapat pukul 11.00 yang berdampak kritis dan berbatas waktu terdekat, baru membantu arsip rekan serta mencicil berkas rutin yang masih lima hari lagi. Berfokus hanya pada tugas pribadi hingga melewatkan bantuan ringan kepada rekan memang menjaga target individu, tetapi kurang luwes memanfaatkan kelonggaran tenggat berkas bulanan.",
    "tip": "Prioritaskan tugas yang penting sekaligus mendesak dengan tenggat terdekat sebelum mengerjakan rutinitas lain."
  },
  {
    "id": "tkp-pro-002",
    "subPattern": "skala-prioritas-dan-manajemen-tenggat",
    "difficulty": "mudah",
    "prompt": "Menjelang sore hari saat Anda bersiap merapikan rencana pulang sesuai jadwal, pimpinan meminta Anda meninjau ulang satu berkas perbaikan mendesak untuk pengajuan layanan publik besok pagi, sedangkan Anda hanya berjanji bertemu santai dengan teman lama malam nanti. Sikap profesional Anda adalah ...",
    "options": [
      "Meminta izin kepada pimpinan agar berkas perbaikan layanan publik ditinjau besok pagi sebelum loket buka supaya janji teman tidak batal.",
      "Menerima tugas mendesak itu, menelaah berkas hingga tuntas dan teliti, lalu menghubungi teman untuk menjadwalkan ulang pertemuan.",
      "Menolak permintaan telaah berkas mendesak tersebut dengan alasan jam kerja kantor segera berakhir hari ini.",
      "Menyetujui penugasan pimpinan dan menggeser jadwal bertemu teman, lalu melanjutkan telaah berkas di rumah agar tidak pulang terlalu larut malam.",
      "Menyanggupi penugasan pimpinan dengan batas waktu pulang tetap terjaga, lalu memeriksa bagian pokok berkas perbaikan sebelum berangkat."
    ],
    "optionScores": [
      2,
      5,
      1,
      4,
      3
    ],
    "answer": "B",
    "explanation": "Mendahulukan amanah dinas mendesak hingga tuntas dan teliti di kantor sebelum beranjak pulang, disertai komunikasi sopan untuk menjadwalkan ulang pertemuan santai, menjaga mutu layanan publik esok pagi. Membawa berkas perbaikan mendesak ke rumah memang menghormati jadwal teman sekaligus tugas, namun berisiko mengurangi kelengkapan koordinasi dokumen resmi.",
    "tip": "Saat agenda dinas mendesak berbenturan dengan pertemuan pribadi tidak mendesak, utamakan amanah dinas dengan komunikasi baik."
  },
  {
    "id": "tkp-pro-003",
    "subPattern": "skala-prioritas-dan-manajemen-tenggat",
    "difficulty": "sedang",
    "prompt": "Anda ditugaskan menyelesaikan proyek penyusunan pedoman layanan dalam dua pekan. Setelah bekerja empat hari, Anda menyadari cakupan data lapangan jauh lebih kompleks dari dugaan awal hingga berpotensi melewati tenggat apabila tetap memakai metode kerja biasa. Sikap proaktif terbaik adalah ...",
    "options": [
      "Menunggu hingga mendekati hari tenggat dua pekan baru melapor bahwa data terlalu rumit untuk dirampungkan tepat waktu.",
      "Memangkas sebagian analisis data lapangan yang rumit agar draf pedoman dapat selesai tepat waktu sesuai rencana awal.",
      "Melaporkan kompleksitas data lebih awal kepada atasan disertai usulan pembagian subtugas agar mutu dan jadwal tetap aman.",
      "Meneruskan penyusunan sesuai metode biasa sambil menuliskan catatan kendala lapangan di bagian lampiran sebagai bahan evaluasi akhir.",
      "Menambah jam lembur pribadi setiap hari untuk mengolah data rumit itu supaya tenggat dua pekan tetap terpenuhi tanpa merepotkan atasan."
    ],
    "optionScores": [
      1,
      2,
      5,
      3,
      4
    ],
    "answer": "C",
    "explanation": "Pengelolaan risiko proyek menuntut pelaporan kendala teknis sejak dini lengkap dengan usulan pembagian subtugas agar mutu pedoman dan batas waktu tetap terjaga. Memaksakan lembur pribadi secara diam-diam memang menunjukkan daya juang tinggi, tetapi menyembunyikan kompleksitas nyata menghambat penyesuaian sumber daya tim.",
    "tip": "Jangan tunggu tenggat tiba untuk melapor kendala; sampaikan lebih awal lengkap dengan usulan penyesuaian kerja."
  },
  {
    "id": "tkp-pro-004",
    "subPattern": "skala-prioritas-dan-manajemen-tenggat",
    "difficulty": "sedang",
    "prompt": "Saat Anda sedang fokus menyusun laporan evaluasi anggaran yang membutuhkan ketelitian angka tinggi, beberapa rekan terus mengajak berbincang santai di dekat meja kerja sambil memutar video lucu di ponsel. Cara asertif dan santun menjaga produktivitas tanpa merusak hubungan tim adalah ...",
    "options": [
      "Memasang penyuara telinga tanpa banyak bicara agar konsentrasi pada angka terjaga, lalu menyapa rekan kembali setelah laporan selesai.",
      "Memindahkan seluruh berkas serta laptop ke sudut ruang rapat kosong untuk menjaga ketelitian angka tanpa membicarakan gangguan suara di ruangan.",
      "Ikut menanggapi obrolan santai rekan sebentar demi menjaga keakraban kerja, lalu mengebut penghitungan anggaran di sisa sore.",
      "Menyampaikan secara ramah bahwa Anda sedang mengejar ketelitian angka laporan anggaran, lalu mengajak lanjut mengobrol saat jam istirahat.",
      "Menegur rekan-rekan dengan nada suara keras agar pemutaran video segera dihentikan karena mengganggu pekerjaan penting bagian Anda."
    ],
    "optionScores": [
      4,
      3,
      2,
      5,
      1
    ],
    "answer": "D",
    "explanation": "Komunikasi asertif yang ramah menetapkan batas fokus kerja secara jelas sekaligus menjaga keakraban sehat saat istirahat. Menggunakan penyuara telinga tanpa bicara memang meredam konflik, namun tidak membangun kesadaran bersama tentang ketenangan ruang kerja selama jam produktif.",
    "tip": "Jaga batas fokus kerja terhadap gangguan sosial secara santun dan asertif, bukan kasar atau ikut larut dalam obrolan."
  },
  {
    "id": "tkp-pro-005",
    "subPattern": "skala-prioritas-dan-manajemen-tenggat",
    "difficulty": "sedang",
    "prompt": "Dalam satu minggu kerja ke depan, jadwal pelatihan sertifikasi profesi daring Anda berbarengan dengan jadwal puncak verifikasi berkas proyek tahunan tim. Agar keduanya berjalan tuntas tanpa menurunkan kinerja unit, strategi Anda adalah ...",
    "options": [
      "Mengikuti seluruh sesi pelatihan sesuai surat tugas kepegawaian, lalu menyerahkan pengaturan jadwal verifikasi berkas kepada atasan.",
      "Menghadiri penuh seluruh jadwal pelatihan daring lalu mengejar jatah verifikasi berkas pribadi pada sore dan malam selepas jam kerja.",
      "Menyalakan tautan pelatihan di latar belakang tanpa menyimak materi supaya bisa fokus penuh memverifikasi berkas harian tim.",
      "Memfokuskan seluruh hari kerja minggu itu untuk belajar materi sertifikasi pribadi dan menunda pemeriksaan berkas sampai pekan depan.",
      "Menyusun pembagian waktu bersama atasan dan tim agar sesi inti pelatihan diikuti penuh dan berkas verifikasi prioritas selesai sebelum tenggat."
    ],
    "optionScores": [
      3,
      4,
      1,
      2,
      5
    ],
    "answer": "E",
    "explanation": "Menyelaraskan pengembangan kompetensi dengan puncak beban unit memerlukan perencanaan terbuka bersama atasan dan tim guna mengamankan materi pelatihan maupun berkas prioritas. Mengebut verifikasi seorang diri selepas jam pelatihan menunjukkan dedikasi tinggi, tetapi mengabaikan koordinasi distribusi beban puncak tim.",
    "tip": "Koordinasikan jadwal pengembangan kompetensi dan tenggat unit dengan atasan untuk membagi prioritas jam secara rapi."
  },
  {
    "id": "tkp-pro-006",
    "subPattern": "skala-prioritas-dan-manajemen-tenggat",
    "difficulty": "sedang",
    "prompt": "Anda mendapat tugas rutin mingguan yang hampir selalu menyita waktu empat jam setiap Jumat pagi hingga sering menggeser penyelesaian tugas pelayanan warga hari itu. Langkah profesional yang menunjukkan efektivitas kerja adalah ...",
    "options": [
      "Mencicil pencatatan rutin sejak awal pekan dan memakai daftar cek standar agar layanan warga Jumat tetap lancar.",
      "Menghabiskan empat jam penuh setiap Jumat pagi untuk menuntaskan laporan rutin dahulu baru membuka penuh loket layanan menjelang siang.",
      "Menyalin pola data laporan pekan sebelumnya untuk mempercepat pengisian Jumat pagi agar waktu layanan publik tidak banyak terpotong.",
      "Datang lebih pagi setiap Jumat untuk mencicil laporan rutin lebih dulu supaya jadwal pelayanan warga tetap berjalan tepat waktu.",
      "Mengerjakan tugas rutin mingguan tersebut di sela waktu sepi loket agar pelayanan warga tetap dilayani meski laporan selesai sore."
    ],
    "optionScores": [
      5,
      2,
      1,
      4,
      3
    ],
    "answer": "A",
    "explanation": "Pencicilan data harian disertai daftar cek standar membenahi akar ketidakefisienan kerja sehingga tugas administrasi tidak menggerus jam pelayanan warga. Datang lebih awal setiap Jumat memang mencerminkan komitmen pribadi yang baik, tetapi belum menyederhanakan proses kerja mingguan secara berkelanjutan.",
    "tip": "Optimalkan efisiensi rutinitas lewat pencicilan sistematis dan templat kerja agar layanan publik utama tetap terjaga."
  },
  {
    "id": "tkp-pro-007",
    "subPattern": "skala-prioritas-dan-manajemen-tenggat",
    "difficulty": "sulit",
    "prompt": "Dua atasan langsung di tingkat berbeda memberikan dua instruksi mendesak di pagi hari yang saling berbenturan: Kepala Seksi meminta Anda langsung turun survei lapangan di luar kota jam 09.00, sedangkan Kepala Bidang meminta Anda hadir mendampingi presentasi data di aula kantor pada jam yang sama. Langkah koordinasi profesional terbaik adalah ...",
    "options": [
      "Memilih hadir pada salah satu agenda yang dirasa lebih ringan tanpa memberi tahu atasan lainnya hingga siang hari.",
      "Segera menyampaikan benturan dua jadwal itu ke kedua atasan agar keduanya menyepakati prioritas atau pengganti resmi.",
      "Meminta rekan seksi lain menggantikan tugas survei luar kota secara langsung tanpa meminta persetujuan kedua pimpinan terlebih dulu.",
      "Meminta izin menghadiri pembukaan presentasi aula sebentar sebelum menyusul tim survei ke luar kota agar kedua perintah terpenuhi.",
      "Mengonfirmasi kehadiran pada agenda Kepala Bidang selaku atasan lebih tinggi, lalu mengabarkan pembatalan survei ke Kepala Seksi."
    ],
    "optionScores": [
      1,
      5,
      2,
      3,
      4
    ],
    "answer": "B",
    "explanation": "Saat dua perintah mendesak berbenturan waktu, komunikasi terbuka secepatnya kepada kedua pemberi tugas memungkinkan penetapan prioritas maupun penunjukan pengganti yang sah. Mendahulukan pimpinan berjabatan lebih tinggi secara sepihak memang menghormati hierarki, namun kurang menjamin agenda survei tetap tertangani resmi.",
    "tip": "Bila menerima dua perintah berbenturan jadwal dari dua pimpinan, komunikasikan terbuka segera agar prioritas atau delegasi ditetapkan sah."
  },
  {
    "id": "tkp-pro-008",
    "subPattern": "skala-prioritas-dan-manajemen-tenggat",
    "difficulty": "sulit",
    "prompt": "Dalam tim kecil yang mengawal lima program strategis serentak menjelang akhir tahun anggaran, Anda melihat seluruh anggota mulai kelelahan (burnout) akibat banyaknya permintaan tambahan dadakan di luar rencana kerja resmi yang belum jelas dampaknya. Sikap profesional Anda adalah ...",
    "options": [
      "Mengusulkan penambahan jadwal giliran kerja atau dukungan tenaga bantuan sementara kepada pimpinan agar seluruh tugas dapat tertangani.",
      "Berfokus menuntaskan porsi tugas pribadi di lima program strategis sambil tetap menerima permintaan dadakan sesuai arahan pimpinan.",
      "Memetakan beban kerja riil dan dampak lima program inti berbasis data, lalu mengusulkan penataan prioritas kepada pimpinan.",
      "Mengajak anggota tim membatasi jam lembur secara diam-diam tanpa melaporkan penumpukan tugas kepada pimpinan.",
      "Mengerjakan semua permintaan dadakan tanpa penyaringan meski menurunkan mutu lima program inti akhir tahun."
    ],
    "optionScores": [
      4,
      3,
      5,
      2,
      1
    ],
    "answer": "C",
    "explanation": "Pengendalian pembengkakan beban kerja membutuhkan pemetaan kapasitas berbasis data untuk menata ulang prioritas sesuai dampak program inti. Memohon tambahan tenaga atau giliran kerja memang menunjukkan kepedulian pada stamina tim, tetapi tidak menyaring tugas dadakan yang rendah manfaatnya.",
    "tip": "Kendalikan scope creep dengan data kapasitas kerja dan ajukan penataan prioritas berdasar dampak program inti."
  },
  {
    "id": "tkp-pro-009",
    "subPattern": "tanggung-jawab-dan-integritas-kerja",
    "difficulty": "mudah",
    "prompt": "Anda baru menyadari telah salah menghitung satu angka rekapitulasi kebutuhan anggaran dalam dokumen pengajuan tim yang sudah telanjur naik ke meja penelaah pimpinan satu jam yang lalu. Sikap bertanggung jawab Anda adalah ...",
    "options": [
      "Mencatat kekeliruan angka tersebut beserta pembetulannya agar siap dijelaskan langsung ketika rapat penelaahan pimpinan digelar esok hari.",
      "Segera memperbaiki hitungan yang keliru di komputer lalu menghubungi staf penelaah secara pribadi untuk menukar lampiran dokumen.",
      "Mengoreksi hitungan di arsip lokal saja tanpa mengabarkan perubahan karena dokumen pengajuan telanjur naik satu jam yang lalu.",
      "Segera melapor secara jujur kepada atasan langsung dan tim penelaah untuk menarik atau mengirimkan revisi sebelum keputusan disahkan.",
      "Membiarkan berkas diperiksa tim penelaah dulu karena selisih satu angka biasanya terdeteksi di tahap verifikasi lanjut."
    ],
    "optionScores": [
      3,
      4,
      1,
      5,
      2
    ],
    "answer": "D",
    "explanation": "Tanggung jawab kerja dan integritas menuntut pengakuan jujur sesegera mungkin melalui jalur resmi kepada atasan serta tim penelaah sebelum dokumen keliru disahkan. Menukar lampiran secara informal langsung ke staf penelaah memang cepat bertindak, namun melangkahi kendali administratif atasan langsung.",
    "tip": "Jika menemukan kekeliruan pada dokumen yang sudah naik ke pimpinan, lapor cepat secara jujur dan kirimkan koreksi sebelum disahkan."
  },
  {
    "id": "tkp-pro-010",
    "subPattern": "tanggung-jawab-dan-integritas-kerja",
    "difficulty": "mudah",
    "prompt": "Pada suatu proyek pengadaan perlengkapan operasional kantor, rekan panitia menyarankan menaikkan sedikit jumlah nominal pada kuitansi perjalanan dinas tim agar sisanya dapat masuk ke kas bersama unit kerja. Sikap tegas berintegritas Anda adalah ...",
    "options": [
      "Membiarkan rekan panitia menyusun rekapitulasi kas unit sementara Anda memilih tidak ikut menandatangani atau memakai dana sisa itu.",
      "Mengikuti usulan menaikkan sedikit nominal kuitansi sekali saja karena dana selisihnya dipakai bagi keperluan kas kantor bersama.",
      "Menolak ikut menaikkan nominal kuitansi perjalanan dinas tersebut serta tetap menyerahkan bukti pengeluaran pribadi sesuai kuitansi asli.",
      "Menyampaikan kehati-hatian mengenai risiko temuan pemeriksaan audit, lalu menyerahkan keputusan tata cara klaim kepada ketua panitia.",
      "Menolak tegas penggelembungan nominal kuitansi, mencatat biaya sesuai bukti transaksi sah, dan mengusulkan kas operasional lewat pos anggaran resmi."
    ],
    "optionScores": [
      2,
      1,
      4,
      3,
      5
    ],
    "answer": "E",
    "explanation": "Penolakan tegas terhadap penggelembungan kuitansi apa pun tujuannya perlu dibarengi arahan penyusunan kas operasional melalui pos anggaran yang sah. Menjaga kejujuran sebatas pada kuitansi pribadi sudah melindungi diri sendiri, tetapi kurang mendorong ketertiban akuntabilitas panitia secara menyeluruh.",
    "tip": "Tolak mark-up SPJ atau dana fiktif meski mengatasnamakan kas bersama tim; catat hanya sesuai belanja riil sah."
  },
  {
    "id": "tkp-pro-011",
    "subPattern": "tanggung-jawab-dan-integritas-kerja",
    "difficulty": "sedang",
    "prompt": "Anda mendapat jadwal perjalanan dinas empat hari di kota lain untuk meninjau kinerja tiga cabang layanan daerah, namun seluruh pemeriksaan cabang berhasil selesai lebih cepat pada hari kedua siang. Sikap paling akuntabel terkait sisa dua hari waktu penugasan Anda adalah ...",
    "options": [
      "Melapor ke atasan untuk pulang lebih awal dan mengembalikan sisa biaya dinas yang tidak terpakai sesuai aturan.",
      "Menggunakan sisa dua hari waktu dinas untuk keperluan pribadi di kota tujuan karena target pemeriksaan tiga cabang sudah selesai.",
      "Tetap menginap di hotel sampai hari keempat sesuai surat tugas supaya proses administrasi pertanggungjawaban perjalanan tidak rumit diubah.",
      "Menuntaskan penyusunan laporan hasil pemeriksaan di penginapan selama sisa waktu agar kembali ke kantor saat berkas sudah rapi.",
      "Memanfaatkan dua hari tersisa di cabang untuk melakukan pemeriksaan tambahan secara teliti guna melengkapi laporan sebelum pulang sesuai jadwal."
    ],
    "optionScores": [
      5,
      1,
      2,
      3,
      4
    ],
    "answer": "A",
    "explanation": "Akuntabilitas perjalanan dinas berbasis biaya riil menuntut keterbukaan melapor ketika seluruh pemeriksaan rampung lebih cepat sekaligus mengembalikan sisa anggaran negara. Menambah pendalaman mandiri memang terlihat produktif, namun pulang lebih awal lebih hemat jika ruang lingkup pemeriksaan sudah tuntas.",
    "tip": "Pertanggungjawaban perjalanan dinas wajib sesuai realisasi nyata (at cost), jujur melapor bila tuntas lebih cepat, dan tidak memanipulasi bukti."
  },
  {
    "id": "tkp-pro-012",
    "subPattern": "tanggung-jawab-dan-integritas-kerja",
    "difficulty": "sedang",
    "prompt": "Saat pimpinan unit sedang cuti sakit selama seminggu dan sistem kerja fleksibel diberlakukan, beberapa rekan mulai masuk kantor siang hari serta mengurangi jam efektif bekerja karena tidak ada yang mengawasi langsung di ruangan. Sikap Anda yang mencerminkan integritas mandiri adalah ...",
    "options": [
      "Fokus menjaga ketepatan waktu dan mutu target pekerjaan pribadi secara penuh meski tanpa pengawasan langsung pimpinan di ruangan.",
      "Menjaga disiplin jam kerja, target harian, dan mutu layanan dengan konsisten sambil memberi teladan positif di ruang kerja.",
      "Tetap hadir bekerja sesuai jadwal kantor dan mengerjakan tugas pokok harian tanpa memedulikan suasana disiplin kerja di sekitar.",
      "Sesekali menyesuaikan jam datang sedikit lebih siang mengikuti rekan seruangan selama seluruh berkas tugas harian tetap terkirim.",
      "Mengurangi jam kerja efektif di kantor dan meneruskan sisa tugas dari rumah tanpa pengajuan kerja fleksibel resmi."
    ],
    "optionScores": [
      4,
      5,
      3,
      2,
      1
    ],
    "answer": "B",
    "explanation": "Integritas sejati tetap menjaga standar disiplin, kinerja, dan pelayanan publik ketika pimpinan tidak mengawasi langsung serta memberi teladan nyata bagi lingkungan ruang kerja. Berfokus menuntaskan target pribadi secara tertutup sudah tertib, tetapi kurang menumbuhkan budaya disiplin bersama di unit.",
    "tip": "Integritas berarti tetap menjaga standar disiplin, kinerja, dan pelayanan prima meskipun sedang tanpa pengawasan atasan."
  },
  {
    "id": "tkp-pro-013",
    "subPattern": "tanggung-jawab-dan-integritas-kerja",
    "difficulty": "sedang",
    "prompt": "Atasan baru di bagian Anda meminta Anda mempercepat penandatanganan berkas kelayakan hibah kepada sebuah yayasan sebelum tim lapangan selesai memverifikasi alamat fisik dan rekening penerima, dengan dalih kegiatan peresmian segera diliput media besok. Sikap tegas berintegritas Anda adalah ...",
    "options": [
      "Meminta nota perintah tertulis dari atasan baru sebagai dasar pelindung sebelum memproses berkas kelayakan hibah.",
      "Menolak secara sopan menandatangani berkas hibah sebelum verifikasi fisik selesai meski jadwal peliputan media besok terpaksa diundur.",
      "Menjelaskan perlunya verifikasi sah demi menghindari risiko hukum, lalu menawarkan percepatan cek lapangan langsung hari ini.",
      "Menandatangani berkas kelayakan hibah tersebut langsung demi menjaga kelancaran agenda peliputan resmi atasan esok hari.",
      "Meminta staf pemeriksa lain menandatangani lembar paraf terlebih dulu agar proses administrasi hibah tetap sesuai jadwal liputan."
    ],
    "optionScores": [
      3,
      4,
      5,
      1,
      2
    ],
    "answer": "C",
    "explanation": "Kepatuhan kepada pimpinan wajib berdasar hukum untuk mencegah hibah fiktif sekaligus dibarengi solusi percepatan cek lapangan yang sah hari itu juga. Menolak sopan tanpa menawarkan percepatan verifikasi fisik menunjukkan prinsip kuat, namun kurang tanggap membantu kelancaran agenda resmi.",
    "tip": "Tolak perintah yang melompati verifikasi wajib dengan hormat berdasar hukum, dan tawarkan percepatan verifikasi sah yang akuntabel."
  },
  {
    "id": "tkp-pro-014",
    "subPattern": "tanggung-jawab-dan-integritas-kerja",
    "difficulty": "sedang",
    "prompt": "Pada akhir tahun, unit Anda mengalami sisa pagu anggaran perjalanan rapat yang cukup besar dan seorang rekan mengusulkan menggelar rapat evaluasi di hotel berbintang luar provinsi meski materi rapatnya sebenarnya cukup dibahas di aula kantor dalam dua jam. Pandangan akuntabel Anda adalah ...",
    "options": [
      "Mengikuti usulan mayoritas rekan di unit untuk rapat luar provinsi agar serapan anggaran akhir tahun mencapai target maksimal.",
      "Mendukung pengajuan biaya rapat hotel luar provinsi secara administratif sementara pelaksanaannya tetap diadakan di aula kantor demi uang saku.",
      "Menolak usulan rapat luar provinsi dengan alasan efisiensi biaya, lalu mengusulkan pembahasan evaluasi cukup digelar di aula kantor.",
      "Menolak pemborosan anggaran, mengusulkan rapat evaluasi singkat di aula kantor, dan menertibkan sisa pagu sesuai aturan perbendaharaan.",
      "Menyetujui rapat evaluasi digelar di hotel dalam kota yang lebih hemat dibandingkan bepergian jauh ke luar provinsi."
    ],
    "optionScores": [
      2,
      1,
      4,
      5,
      3
    ],
    "answer": "D",
    "explanation": "Pengelolaan keuangan negara berorientasi pada manfaat nyata dan efisiensi, bukan sekadar mengejar angka serapan pagu di akhir tahun. Memindahkan rapat cukup ke aula kantor sudah mencegah pemborosan langsung, tetapi langkah lebih matang juga mengarahkan penertiban sisa anggaran sesuai aturan perbendaharaan.",
    "tip": "Belanja anggaran negara wajib berorientasi efisiensi dan manfaat publik nyata, bukan menghabiskan sisa pagu secara seremonial atau fiktif."
  },
  {
    "id": "tkp-pro-015",
    "subPattern": "tanggung-jawab-dan-integritas-kerja",
    "difficulty": "sulit",
    "prompt": "Sebuah hasil kajian tim Anda yang Anda susun bersama rekan ternyata mengandung kekeliruan interpretasi tabel yang memengaruhi satu poin rekomendasi draf kebijakan daerah yang besok akan diumumkan pimpinan. Padahal pimpinan sedang sangat bangga memuji kesempurnaan draf tersebut. Tindakan berintegritas paling matang adalah ...",
    "options": [
      "Menyimpan temuan kesalahan tabel tersebut agar kredibilitas pimpinan dan tim penyusun tidak tercoreng di hadapan peserta acara.",
      "Membiarkan acara pengumuman draf kebijakan tetap berjalan besok pagi, lalu mengajukan ralat teknis pada rapat tindak lanjut pekan depan.",
      "Menyerahkan catatan koreksi angka kepada ketua tim penyusun malam ini guna dibahas bersama sebelum memutuskan melapor ke pimpinan.",
      "Segera menyampaikan kekeliruan interpretasi tabel itu kepada pimpinan sebelum esok hari agar pengumuman kebijakan ditunda sementara.",
      "Segera menghadap pimpinan secara jujur sebelum acara pengumuman besok sambil membawa koreksi tabel dan rumusan rekomendasi yang sudah diperbaiki."
    ],
    "optionScores": [
      1,
      2,
      3,
      4,
      5
    ],
    "answer": "E",
    "explanation": "Keberanian moral menyelamatkan ketepatan kebijakan publik dengan segera menghadap pimpinan sebelum rilis resmi sambil membawa koreksi siap pakai. Melapor untuk menunda acara tanpa menyiapkan pembetulan tabel dan rekomendasi memang jujur, tetapi masih membebani pimpinan di waktu sempit.",
    "tip": "Jangan biarkan rasa gengsi menunda koreksi fatal; bawa perbaikan lengkap kepada pimpinan sebelum kebijakan keliru diumumkan."
  },
  {
    "id": "tkp-pro-016",
    "subPattern": "tanggung-jawab-dan-integritas-kerja",
    "difficulty": "sulit",
    "prompt": "Seorang pegawai di tim Anda terjerat utang pinjaman daring dan judi online, lalu diam-diam mulai menawarkan jasa akses prioritas ilegal kepada pemohon izin di luar jam kantor. Begitu Anda menemukan bukti kuat perilaku tersebut saat mengecek log layanan, tindakan tepat Anda adalah ...",
    "options": [
      "Mengamankan bukti log sistem tanpa mengubahnya lalu melapor melalui saluran pengawasan resmi dan pimpinan.",
      "Segera melaporkan temuan pelanggaran akses tersebut langsung kepada atasan unit untuk menghentikan praktik itu sebelum merugikan pemohon.",
      "Memanggil rekan tersebut secara pribadi untuk menegur tegas agar menghentikan jual beli akses sebelum masalahnya meluas ke pimpinan.",
      "Membatasi sementara hak akses sistem rekan itu secara teknis sembari menasihatinya untuk segera menyelesaikan masalah utangnya.",
      "Menyimpan temuan bukti log layanan tersebut tanpa melapor karena mempertimbangkan kondisi kesulitan ekonomi keluarga rekan kerja."
    ],
    "optionScores": [
      5,
      4,
      3,
      2,
      1
    ],
    "answer": "A",
    "explanation": "Penyalahgunaan akses layanan publik untuk transaksi ilegal memerlukan pengamanan bukti digital yang utuh serta pelaporan lewat jalur pengawasan dan pimpinan berwenang. Menegur pribadi atau hanya melapor cepat tanpa mengamankan rekam jejak log berisiko membuat bukti pelanggaran hilang sebelum ditindak.",
    "tip": "Tangani penyalahgunaan akses/pungli yang mengancam publik lewat pengamanan bukti resmi dan eskalasi jalur pengawasan berwenang."
  },
  {
    "id": "tkp-pro-017",
    "subPattern": "ketangguhan-di-bawah-tekanan-dan-fleksibilitas",
    "difficulty": "mudah",
    "prompt": "Saat Anda mempresentasikan rancangan program layanan baru dalam rapat evaluasi, seorang pejabat senior melontarkan kritik sangat tajam dan meragukan kesiapan ide tim Anda di hadapan seluruh peserta. Sikap profesional Anda adalah ...",
    "options": [
      "Menahan emosi di ruangan dan meminta bantuan atasan langsung untuk menjelaskan ulang bagian konsep yang diragukan peserta rapat.",
      "Tetap tenang menerima masukan kritis itu, mencatat keberatan objektif, dan menjawabnya secara santun berbasis data.",
      "Mendengarkan kritik tajam pejabat senior dengan tenang tanpa membantah di forum, lalu berkomitmen memperbaiki rancangan setelah rapat.",
      "Menutup paparan lebih cepat karena tidak nyaman dan menyerahkan kelanjutan konsep kepada keputusan rapat.",
      "Menjelaskan panjang lebar usaha lembur tim demi membuktikan bahwa keraguan pejabat senior terhadap kesiapan rancangan kurang tepat."
    ],
    "optionScores": [
      3,
      5,
      4,
      1,
      2
    ],
    "answer": "B",
    "explanation": "Ketangguhan di bawah kritik tajam tecermin dari ketenangan emosi, penerimaan masukan secara terbuka, serta tanggapan santun yang bertumpu pada data. Memilih diam menerima tanpa memberi klarifikasi data memang menghindari perdebatan, namun membiarkan keraguan forum terhadap kesiapan tim tidak terjawab.",
    "tip": "Hadapi kritik tajam dalam forum dengan tenang, apresiatif, berbasis data, dan terbuka pada penyempurnaan substansi."
  },
  {
    "id": "tkp-pro-018",
    "subPattern": "ketangguhan-di-bawah-tekanan-dan-fleksibilitas",
    "difficulty": "mudah",
    "prompt": "Pada hari kerja pertama setelah terbitnya surat edaran restrukturisasi tim, ruang tugas dan jenis pekerjaan harian Anda dialihkan mendadak ke subbagian baru dengan tenggat adaptasi singkat. Reaksi terbaik Anda adalah ...",
    "options": [
      "Tetap mengerjakan sebagian berkas subbagian lama terlebih dahulu selama masa transisi supaya peralihan ke tugas baru terasa bertahap.",
      "Mengajukan permohonan penundaan kepindahan selama beberapa pekan karena merasa lebih produktif bertahan di unit lama.",
      "Menerima penugasan baru dengan terbuka, mempelajari alur kerja subbagian tersebut, dan segera berkoordinasi dengan tim baru.",
      "Segera menempati meja kerja baru dan mulai mempelajari panduan tugas secara mandiri agar target adaptasi singkat cepat terkejar.",
      "Menjalankan penempatan sesuai surat edaran sambil menanyakan alasan rotasi ke bagian kepegawaian kantor."
    ],
    "optionScores": [
      2,
      1,
      5,
      4,
      3
    ],
    "answer": "C",
    "explanation": "Sikap adaptif atas restrukturisasi memadukan penerimaan positif, belajar cepat mengenai alur kerja baru, serta inisiatif berkoordinasi dengan tim setempat. Mempelajari panduan tugas secara mandiri sudah menunjukkan kesiapan bergerak cepat, tetapi kurang mempercepat penyelarasan kerja sama tim baru.",
    "tip": "Respons penempatan atau rotasi mendadak dengan keterbukaan belajar cepat, kolaborasi awal, dan semangat kontribusi."
  },
  {
    "id": "tkp-pro-019",
    "subPattern": "ketangguhan-di-bawah-tekanan-dan-fleksibilitas",
    "difficulty": "sedang",
    "prompt": "Setelah Anda dan tim bekerja lembur tiga hari menyusun konsep rancangan acara sosialisasi, mendadak turun perubahan kebijakan prioritas nasional dari pusat yang membuat konsep lama harus dirombak drastis sebelum peluncuran dua hari lagi. Tindakan Anda yang paling tangguh dan solutif adalah ...",
    "options": [
      "Mengeluhkan perubahan kebijakan pusat yang terlalu mendadak bersama rekan tim sebelum mulai memperbaiki isi materi.",
      "Menyesuaikan judul serta poin ringkas pada bagian awal konsep lama supaya acara tetap berjalan sesuai jadwal yang sudah disebar.",
      "Mengusulkan penundaan tanggal peluncuran acara beberapa hari ke pimpinan agar perombakan materi berjalan lebih leluasa dan matang.",
      "Menerima perubahan kebijakan dengan tenang, menyaring bagian konsep lama yang masih relevan, lalu membagi fokus tim merombak materi inti.",
      "Segera membatalkan seluruh konsep lama tanpa ragu lalu mengajak tim lembur ulang menyusun rancangan acara dari nol sesuai kebijakan terbaru."
    ],
    "optionScores": [
      1,
      2,
      3,
      5,
      4
    ],
    "answer": "D",
    "explanation": "Resiliensi dalam tenggat sempit menyelaraskan ketenangan sikap dengan kecermatan memanfaatkan elemen kerja lama yang masih sah sebelum membagi fokus perombakan inti. Menghapus semua rancangan dan mengulang dari nol memang taat aturan, tetapi berisiko menguras stamina tim dalam dua hari tersisa.",
    "tip": "Saat kebijakan berubah mendadak menjelang tenggat, kelola emosi cepat, manfaatkan elemen kerja relevan, dan fokus pada inti penyesuaian."
  },
  {
    "id": "tkp-pro-020",
    "subPattern": "ketangguhan-di-bawah-tekanan-dan-fleksibilitas",
    "difficulty": "sedang",
    "prompt": "Di tengah pengerjaan target pelaporan akhir triwulan yang menumpuk, jaringan listrik di kantor padam total sejak pagi disertai cuaca panas ekstrem, membuat suasana ruang kerja menjadi sangat tidak nyaman dan sejumlah rekan mulai berhenti bekerja. Sikap profesional Anda adalah ...",
    "options": [
      "Tetap bertahan mengerjakan penyusunan dokumen kritis memakai baterai laptop selama masih menyala tanpa menunggu pasokan listrik pulih.",
      "Memeriksa berkas cetak yang tidak memerlukan perangkat komputer sambil menunggu petugas teknis memulihkan jaringan listrik gedung.",
      "Menghentikan pengolahan laporan triwulan sementara dan bergabung di ruang terbuka sambil menyiapkan catatan kendala keterlambatan.",
      "Mengemas perlengkapan kerja dan pulang menyelesaikan tugas di rumah tanpa izin resmi pimpinan karena ruangan sangat panas.",
      "Tetap fokus memakai daya baterai laptop untuk tugas prioritas luring sambil berkoordinasi dengan pengelola gedung soal genset atau ruang aman."
    ],
    "optionScores": [
      4,
      3,
      2,
      1,
      5
    ],
    "answer": "E",
    "explanation": "Ketangguhan kerja di tengah gangguan fasilitas memaksimalkan sumber daya luring untuk target prioritas sembari mengoordinasikan genset atau titik kerja aman. Bertahan bekerja memakai baterai sendiri tanpa mengoordinasikan fasilitas cadangan hanya bertahan sesaat sebelum daya perangkat habis.",
    "tip": "Ketika kendala fasilitas mengganggu kenyamanan kerja, alihkan fokus ke langkah adaptif yang bisa langsung dikerjakan."
  },
  {
    "id": "tkp-pro-021",
    "subPattern": "ketangguhan-di-bawah-tekanan-dan-fleksibilitas",
    "difficulty": "sedang",
    "prompt": "Anda pernah mengalami kegagalan saat menjadi ketua panitia kegiatan uji coba program sebelumnya akibat kurang teliti mengantisipasi perubahan cuaca di lokasi terbuka, sehingga Anda sempat ragu saat diminta kembali memimpin proyek lapangan berskala lebih besar. Sikap mental tangguh terbaik adalah ...",
    "options": [
      "Menerima tugas itu sambil mengaudit kegagalan lama menjadi daftar pencegahan risiko dan rencana cadangan matang.",
      "Menerima amanah tersebut dengan usul memperkecil cakupan proyek lapangan terlebih dahulu agar lebih mudah dikendalikan panitia.",
      "Menolak penugasan proyek lapangan berskala lebih besar tersebut karena khawatir kegagalan masa lalu terulang lagi.",
      "Menerima kepercayaan tersebut dengan tekad memperbaiki kinerja serta meminta dukungan anggota tim berpengalaman mengawasi lokasi.",
      "Menyarankan posisi ketua proyek dialihkan ke rekan lain sementara Anda bersedia membantu di bagian administrasi belakang meja."
    ],
    "optionScores": [
      5,
      3,
      1,
      4,
      2
    ],
    "answer": "A",
    "explanation": "Pola pikir bertumbuh mengolah kesalahan masa lalu menjadi daftar pencegahan risiko serta rencana cadangan konkret sebelum memimpin amanah lebih besar. Mengandalkan pengawasan rekan berpengalaman menunjukkan sikap hati-hati yang baik, namun tidak menggantikan kesiapan teknis pengendalian risiko sejak awal.",
    "tip": "Jadikan kekeliruan terdahulu sebagai daftar kontrol mitigasi risiko untuk melangkah mantap di penugasan berikutnya."
  },
  {
    "id": "tkp-pro-022",
    "subPattern": "ketangguhan-di-bawah-tekanan-dan-fleksibilitas",
    "difficulty": "sedang",
    "prompt": "Dalam penugasan mendadak di wilayah kepulauan terpencil selama dua minggu dengan sinyal seluler terbatas dan fasilitas penginapan sederhana jauh dari kenyamanan perkotaan, cara terbaik menjaga kestabilan semangat kerja adalah ...",
    "options": [
      "Memilih beristirahat di dalam penginapan selepas jam tugas karena kurang terbiasa beradaptasi dengan kesederhanaan lingkungan sekitar.",
      "Menyesuaikan diri cepat dengan kondisi lapangan, berfokus pada manfaat layanan warga pulau, dan mengatur ritme kerja terencana.",
      "Menerima keterbatasan fasilitas dengan sabar serta memusatkan seluruh waktu untuk menyelesaikan target pendataan lapangan secepat mungkin.",
      "Menjalankan agenda dinas sesuai surat perintah sambil rutin melaporkan keterbatasan sinyal ke kantor induk saat jaringan tersedia.",
      "Mempersingkat cakupan kunjungan desa agar masa tinggal di pulau selesai lebih cepat tiga hari dari jadwal rencana."
    ],
    "optionScores": [
      2,
      5,
      4,
      3,
      1
    ],
    "answer": "B",
    "explanation": "Fleksibilitas di daerah terpencil bersumber dari keluwesan beradaptasi, kesadaran manfaat pelayanan bagi warga pulau, serta pengaturan ritme dua minggu secara terencana. Sekadar mempercepat target demi lekas menuntaskan penugasan berisiko mengurangi mutu pendataan dan hubungan baik bersama warga.",
    "tip": "Ketangguhan di penugasan terpencil bertumpu pada keluwesan adaptasi kondisi sederhana dan fokus pada nilai manfaat bagi warga."
  },
  {
    "id": "tkp-pro-023",
    "subPattern": "ketangguhan-di-bawah-tekanan-dan-fleksibilitas",
    "difficulty": "sulit",
    "prompt": "Anda ditugaskan menjadi koordinator posko pelayanan pengaduan darurat saat terjadi krisis gangguan data layanan nasional selama 72 jam penuh. Di tengah tekanan pertanyaan ratusan warga, tuntutan pimpinan menuntut laporan tiap dua jam, dan dua staf tumbang kelelahan, sikap kepemimpinan tangguh paling tepat Anda lakukan adalah ...",
    "options": [
      "Menutup sementara saluran pengaduan warga beberapa jam agar seluruh petugas dapat beristirahat serempak.",
      "Menyampaikan permohonan tenaga tambahan kepada pimpinan sekaligus tetap menjaga posko pengaduan terus melayani pertanyaan warga.",
      "Mengatur jadwal giliran istirahat tim yang sehat, meringkas format lapor pimpinan, dan memberi informasi faktual ke warga.",
      "Meminta staf yang masih sehat bekerja lembur tanpa jeda hingga krisis selesai agar laporan berkala tidak pernah tertunda.",
      "Mengambil alih langsung tugas anggota yang sakit agar loket pengaduan serta laporan dua jam sekali untuk pimpinan tetap terpenuhi."
    ],
    "optionScores": [
      1,
      3,
      5,
      2,
      4
    ],
    "answer": "C",
    "explanation": "Kepemimpinan krisis 72 jam menuntut pengaturan giliran napas tim, penyederhanaan format laporan pimpinan, dan penyampaian fakta yang menenangkan publik. Menutup kekosongan dengan memikul sendiri beban anggota yang tumbang memang berdedikasi tinggi, tetapi mengancam keberlanjutan ketahanan tim.",
    "tip": "Dalam krisis berkepanjangan: jaga ketenangan tim, kelola rotasi stamina, ringkas alur lapor pimpinan, dan komunikasi fakta yang menenangkan."
  },
  {
    "id": "tkp-pro-024",
    "subPattern": "ketangguhan-di-bawah-tekanan-dan-fleksibilitas",
    "difficulty": "sulit",
    "prompt": "Sebuah metode kerja baru berbasis kinerja kolaboratif lintas subbagian justru membuat hasil kerja awal tim Anda terlihat sedikit melambat pada bulan pertama penyesuaian, memicu keraguan sebagian pegawai untuk kembali ke cara lama yang terpisah-pisah. Sebagai motor penggerak inovasi tim, respons tangguh Anda adalah ...",
    "options": [
      "Meyakinkan seluruh tim agar tetap bersabar menjalani metode kolaboratif baru sepanjang masa uji coba tanpa mengubah prosedur kesepakatan.",
      "Mengizinkan sebagian berkas dikerjakan dengan pola terpisah lama agar angka rapor bulan pertama tetap tinggi.",
      "Menghentikan penerapan metode kolaboratif baru pada akhir bulan pertama untuk memulihkan kenyamanan kerja tim.",
      "Menjelaskan masa penyesuaian metode baru, mendata titik macet di lapangan, dan memperbaiki alur kerja tim secara bertahap.",
      "Mengadakan rapat lintas subbagian guna menampung keluhan awal lalu menyerahkan kelanjutan metode kerja ke pimpinan."
    ],
    "optionScores": [
      4,
      2,
      1,
      5,
      3
    ],
    "answer": "D",
    "explanation": "Penurunan hasil pada bulan pertama merupakan masa belajar yang diatasi lewat pemetaan titik macet lapangan dan penyempurnaan bertahap. Meminta tim terus bersabar tanpa menyesuaikan hambatan teknis prosedur berisiko membuat perlambatan terus berulang di bulan berikutnya.",
    "tip": "Waspadai 'learning dip' awal inovasi: evaluasi titik macet secara nyata dan lakukan penyempurnaan iteratif bersama pengguna."
  },
  {
    "id": "tkp-pro-025",
    "subPattern": "disiplin-etika-birokrasi-dan-netralitas",
    "difficulty": "mudah",
    "prompt": "Menjelang masa pemilihan kepala daerah, seorang teman akrab yang menjadi anggota tim sukses calon meminta Anda membagikan pamflet digital visi-misi pasangan calon melalui status WhatsApp pribadi Anda karena merasa pertemanan di akun pribadi terpisah dari jam kantor. Sikap berintegritas netralitas ASN adalah ...",
    "options": [
      "Menjelaskan singkat aturan kepegawaian lalu membiarkan pesan ajakan lanjutan tidak dibalas agar hubungan teman tidak canggung.",
      "Mengunggah pamflet calon hanya di grup alumni sekolah yang dipastikan tidak beranggotakan pegawai instansi Anda.",
      "Menolak ajakan teman tersebut secara halus dengan alasan pribadi tidak terbiasa mengunggah konten politik di status WhatsApp.",
      "Membagikan pamflet digital itu sebentar pada malam akhir pekan tanpa kata dukungan dan menghapusnya sebelum hari kerja.",
      "Menolak permintaan itu secara santun namun tegas sebab asas netralitas ASN melarang dukungan kampanye lewat akun pribadi maupun luar jam kantor."
    ],
    "optionScores": [
      3,
      1,
      4,
      2,
      5
    ],
    "answer": "E",
    "explanation": "Netralitas ASN melekat penuh pada akun media sosial pribadi maupun di luar jam dinas sehingga penolakan santun perlu menegaskan dasar aturan tersebut secara jelas. Menolak dengan alasan kebiasaan pribadi memang menghindarkan pelanggaran langsung, tetapi kurang mengedukasi batas netralitas birokrasi kepada relasi.",
    "tip": "Netralitas ASN melekat penuh selama menjabat, mencakup akun media sosial pribadi dan di luar jam dinas."
  },
  {
    "id": "tkp-pro-026",
    "subPattern": "disiplin-etika-birokrasi-dan-netralitas",
    "difficulty": "mudah",
    "prompt": "Anda mengetahui kebiasaan tidak terpuji beberapa pegawai di garasi kantor yang meminjam mobil dinas berpelat merah pada Sabtu-Minggu untuk keperluan piknik wisata keluarga asalkan mengisi bahan bakar sendiri. Sebagai aparatur yang memahami disiplin aset negara, tindakan Anda terhadap fasilitas dinas yang dipercayakan kepada Anda adalah ...",
    "options": [
      "Menggunakan kendaraan dinas khusus untuk tugas kedinasan resmi serta merawatnya dengan penuh tanggung jawab.",
      "Menggunakan kendaraan dinas sebatas acara mendesak keluarga dalam kota saja dengan menanggung penuh biaya bahan bakar dari uang pribadi.",
      "Memastikan kendaraan dinas yang Anda pegang terparkir aman di garasi kantor setiap akhir pekan guna menghindari pemakaian di luar tugas.",
      "Tidak memakai kendaraan dinas saat akhir pekan untuk keperluan keluarga, tanpa ikut mencampuri kebiasaan pegawai lain di garasi.",
      "Meminjam kendaraan dinas saat hari libur untuk perjalanan keluarga dengan syarat mengganti bahan bakar dan mencucinya bersih."
    ],
    "optionScores": [
      5,
      2,
      4,
      3,
      1
    ],
    "answer": "A",
    "explanation": "Disiplin barang milik negara menuntut pemanfaatan seluruh fasilitas dinas khusus untuk kepentingan kedinasan disertai perawatan yang amanah setiap hari. Memastikan mobil terparkir di garasi setiap akhir pekan sudah menjaga batas hari libur, namun kepatuhan utuh juga mencakup tertib pemakaian aset di hari kerja.",
    "tip": "Barang milik negara (BMN) seperti kendaraan dinas hanya diperuntukkan bagi pelaksanaan tugas kedinasan yang sah."
  },
  {
    "id": "tkp-pro-027",
    "subPattern": "disiplin-etika-birokrasi-dan-netralitas",
    "difficulty": "sedang",
    "prompt": "Di media sosial pribadi, banyak pekerja memamerkan gaya hidup serba mewah, jam tangan berharga fantastis, maupun liburan luar negeri secara mencolok (flexing). Sebagai seorang ASN yang bertugas melayani masyarakat luas dengan gaji dari pajak rakyat, sikap bijak Anda adalah ...",
    "options": [
      "Menampilkan koleksi barang mahal di media sosial pribadi sebagai bentuk kebanggaan hasil kerja keras pribadi.",
      "Menjaga gaya hidup bersahaja dan kepantasan etika abdi negara di ruang nyata maupun media sosial demi kepercayaan publik.",
      "Mengatur akun media sosial menjadi privat khusus lingkaran keluarga agar aktivitas pribadi tidak menimbulkan salah paham warga.",
      "Tetap mengunggah gaya hidup pribadi sewajarnya karena aset dari penghasilan di luar gaji merupakan hak privat yang sah dimiliki.",
      "Membatasi unggahan media sosial pribadi hanya sebatas aktivitas kerja dan keluarga sederhana tanpa menampakkan barang berharga."
    ],
    "optionScores": [
      1,
      5,
      3,
      2,
      4
    ],
    "answer": "B",
    "explanation": "Etika pengabdian masyarakat mewajibkan kesederhanaan dan kepekaan sosial di ruang fisik maupun digital demi menjaga wibawa birokrasi yang bersih. Membatasi unggahan media sosial secara selektif sudah mencegah kesan pamer, namun keteladanan sejati lahir dari gaya hidup bersahaja yang konsisten.",
    "tip": "ASN perlu menjaga kesederhanaan dan kepekaan sosial di dunia nyata maupun media sosial, menjauhi pamer kemewahan (flexing)."
  },
  {
    "id": "tkp-pro-028",
    "subPattern": "disiplin-etika-birokrasi-dan-netralitas",
    "difficulty": "sedang",
    "prompt": "Anda mendapat tawaran pekerjaan sampingan berbayar menjadi agen penjual produk perusahaan swasta yang juga sering menjadi penyedia barang pada lelang pengadaan barang di instansi Anda. Sikap profesional yang menjaga etika birokrasi bebas konflik kepentingan adalah ...",
    "options": [
      "Menolak tawaran keagenan itu secara halus dengan alasan beban kerja padat tanpa menyinggung persoalan benturan kepentingan.",
      "Mengambil peran agen penjualan memakai nama anggota keluarga selama tidak ikut memeriksa berkas lelang.",
      "Menolak tegas tawaran itu demi mencegah konflik kepentingan serta menjaga objektivitas layanan dan pengadaan instansi.",
      "Menerima kerja sampingan sebagai agen produk itu karena dikerjakan malam hari di luar jam dinas kantor.",
      "Meminta penjelasan batas wilayah pemasaran perusahaan itu terlebih dahulu sebelum mempertimbangkan kerja sama di luar jam dinas."
    ],
    "optionScores": [
      4,
      2,
      5,
      1,
      3
    ],
    "answer": "C",
    "explanation": "Penolakan tegas berbasis prinsip konflik kepentingan melindungi objektivitas birokrasi dan proses pengadaan barang meskipun tawaran dilakukan di luar jam dinas. Menolak menggunakan dalih kesibukan kerja tetap menghindarkan keterlibatan, tetapi tidak menegaskan batas etika larangan berbisnis dengan mitra instansi.",
    "tip": "Hindari aktivitas usaha atau kerja sampingan yang memiliki irisan kepentingan/mitra bisnis dengan instansi tempat bertugas."
  },
  {
    "id": "tkp-pro-029",
    "subPattern": "disiplin-etika-birokrasi-dan-netralitas",
    "difficulty": "sedang",
    "prompt": "Suatu pagi ketika Anda tiba lima menit sebelum apel pagi, Anda melihat rekan kerja yang sebenarnya masih dalam perjalanan menitipkan kartu atau meminta Anda membantunya menekan tombol aplikasi presensi elektronik kantor menggunakan ponselnya yang tertinggal/akunnya. Sikap disiplin Anda adalah ...",
    "options": [
      "Mengabaikan pesan permintaan tolong rekan itu sementara waktu dan bergegas menuju barisan apel agar Anda sendiri tidak ikut terlambat mengikuti apel.",
      "Membantu menekan tombol presensi kali ini saja atas dasar solidaritas karena rekan tersebut sudah berusaha berangkat lebih awal.",
      "Menolak permintaan titip presensi tersebut dengan sopan karena pengisian kehadiran elektronik wajib dilakukan oleh pegawai bersangkutan.",
      "Menolak titip presensi secara santun demi menjaga kejujuran disiplin, lalu menyarankannya melapor langsung ke atasan atas keterlambatan itu.",
      "Meminta rekan tersebut menghubungi petugas jaga secara langsung supaya keterlambatannya dicatat manual tepat waktu pada buku hadir."
    ],
    "optionScores": [
      3,
      1,
      4,
      5,
      2
    ],
    "answer": "D",
    "explanation": "Menolak titip absen secara santun disertai arahan melapor jujur kepada atasan menegakkan keadilan disiplin waktu di lingkungan kerja. Sekadar menolak tegas atas dasar kewajiban absensi pribadi sudah mencegah kecurangan, namun saran jalur konfirmasi resmi membantu rekan memperbaiki ketertiban.",
    "tip": "Tolak praktik titip absen dalam bentuk apa pun; kejujuran disiplin waktu membangun keadilan tempat kerja."
  },
  {
    "id": "tkp-pro-030",
    "subPattern": "disiplin-etika-birokrasi-dan-netralitas",
    "difficulty": "sedang",
    "prompt": "Seorang pejabat politik daerah meminta staf di unit Anda menyiapkan data rincian penerima bantuan sosial warga disertai nomor telepon seluler untuk digunakan tim suksesnya mengirim pesan ucapan selamat hari raya bertanda logo pasangan calon. Sebagai pengelola data di unit tersebut, sikap tegas Anda adalah ...",
    "options": [
      "Menyerahkan rekapitulasi jumlah penerima per wilayah tanpa nomor telepon agar tetap membantu kegiatan tanpa membuka kontak pribadi.",
      "Menolak memberikan data penerima bantuan tersebut karena daftar nomor telepon warga merupakan informasi pribadi yang wajib dilindungi.",
      "Meneruskan permintaan data itu kepada pimpinan unit secara resmi agar penolakan disampaikan berdasar keputusan pimpinan instansi.",
      "Mengirimkan daftar kontak wilayah tertentu saja karena pesan ucapan hari raya dinilai bukan ajakan memilih calon secara langsung.",
      "Menolak tegas permintaan itu berlandaskan asas netralitas ASN dan pelindungan data pribadi karena basis data negara dilarang bagi kampanye."
    ],
    "optionScores": [
      2,
      4,
      3,
      1,
      5
    ],
    "answer": "E",
    "explanation": "Politisasi data bantuan sosial melanggar netralitas aparatur negara sekaligus melanggar pelindungan data pribadi warga. Menolak semata atas alasan kerahasiaan nomor kontak sudah menjaga privasi warga, namun penegasan kedua aturan hukum tersebut memberikan batas etika birokrasi yang tidak dapat ditawar.",
    "tip": "Lindungi basis data warga dan program negara dari pemanfaatan elektoral/politik praktis dengan berpegang pada netralitas dan UU PDP."
  },
  {
    "id": "tkp-pro-031",
    "subPattern": "disiplin-etika-birokrasi-dan-netralitas",
    "difficulty": "sulit",
    "prompt": "Dalam suasana diskusi tim saat jam istirahat makan siang di kantin umum yang juga didatangi masyarakat, dua rekan kerja mulai membicarakan informasi rahasia penyelidikan audit internal terhadap salah satu unit pelayanan secara cukup keras hingga berisiko terdengar pengunjung luar. Langkah etika birokrasi paling tepat Anda adalah ...",
    "options": [
      "Memberi isyarat halus agar kedua rekan menghentikan bahasan audit di kantin dan membawanya ke ruang tertutup.",
      "Ikut menyimak percakapan audit internal tersebut di meja kantin sambil meluruskan beberapa detail fakta yang keliru.",
      "Segera menyelesaikan makan siang dan mengajak keduanya kembali ke ruangan kantor tanpa menyinggung materi pembicaraan di kantin.",
      "Mengingatkan kedua rekan agar mengecilkan volume suara saat membahas materi audit supaya meja sebelah tidak mendengar.",
      "Mengalihkan pembicaraan meja makan siang ke topik umum secara halus agar bahasan audit rahasia tidak lagi terdengar pengunjung kantin."
    ],
    "optionScores": [
      5,
      1,
      3,
      2,
      4
    ],
    "answer": "A",
    "explanation": "Kerahasiaan jabatan berlaku pula di tempat umum sehingga pembicaraan audit harus segera dihentikan lewat isyarat halus dan dipindahkan ke ruang tertutup yang berwenang. Mengalihkan obrolan ke topik santai memang meredam kebocoran saat itu, namun tidak menegaskan keharusan forum tertutup.",
    "tip": "Jaga rahasia jabatan dan proses pengawasan internal dari percakapan di ruang publik terbuka melalui pengingatan cepat yang bijak."
  },
  {
    "id": "tkp-pro-032",
    "subPattern": "disiplin-etika-birokrasi-dan-netralitas",
    "difficulty": "sulit",
    "prompt": "Saat masa kampanye pemilu, Anda ditunjuk menjadi narasumber resmi sosialisasi program wajib kependudukan di sebuah forum desa, tetapi di tengah sesi tanya jawab seorang tokoh tamu tiba-tiba mengarahkan pembicaraan memuji kelebihan satu partai/calon tertentu dan meminta tanggapan Anda di atas panggung. Sikap netral paling cerdas dan bermartabat adalah ...",
    "options": [
      "Tersenyum sopan menanggapi ucapan tokoh desa lalu langsung melanjutkan materi teknis kependudukan tanpa menyebut nama calon.",
      "Mengembalikan diskusi ke topik kependudukan secara ramah sambil menegaskan sikap netral aparatur tanpa komentar politik.",
      "Memberi tanggapan singkat yang memuji semua pihak secara merata agar tokoh tamu merasa dihormati sebelum kembali ke topik acara.",
      "Mengamini pujian tokoh tamu tersebut secara singkat demi menjaga kehangatan suasana sebelum melanjutkan paparan dinas.",
      "Menyampaikan bahwa pilihan politik adalah hak masing-masing warga kemudian mempersilakan moderator mengatur pertanyaan berikutnya."
    ],
    "optionScores": [
      4,
      5,
      2,
      1,
      3
    ],
    "answer": "B",
    "explanation": "Narasumber resmi wajib mengarahkan forum kembali ke layanan publik secara ramah sekaligus menegaskan posisi netral aparatur negara tanpa berkomentar partisan. Mengalihkan pembicaraan lewat senyuman tanpa menegaskan netralitas berisiko membuka peluang pancingan politik berulang selama sesi berlangsung.",
    "tip": "Bila dipancing berkomentar politik saat bertugas di forum warga, tegaskan netralitas ASN secara sopan lalu kembalikan diskusi ke topik layanan publik."
  },
  {
    "id": "tkp-pro-033",
    "subPattern": "pengembangan-diri-dan-inisiatif-kualitas",
    "difficulty": "mudah",
    "prompt": "Instansi Anda menerbitkan regulasi baru yang belum sempat disosialisasikan tatap muka lewat bimtek, padahal minggu depan Anda sudah harus menerapkan aturan tersebut dalam pemeriksaan berkas pemohon. Sikap proaktif terbaik Anda adalah ...",
    "options": [
      "Mempelajari poin ringkasan perubahan aturan dari edaran singkat kantor sambil menanti jadwal pelaksanaan bimbingan teknis unit kerja.",
      "Mempelajari aturan baru lewat rangkuman bebas di media sosial supaya lebih ringkas dibaca sebelum pemeriksaan minggu depan.",
      "Mengunduh naskah resmi regulasi baru, mempelajari perubahannya mandiri, lalu menyamakan pemahaman dan daftar periksa bersama tim.",
      "Membaca dengan teliti naskah lengkap aturan baru secara mandiri untuk memastikan berkas pemohon yang Anda periksa selalu sesuai aturan.",
      "Menggunakan pola pemeriksaan lama dengan menambahkan catatan bahwa bimbingan teknis aturan baru belum dilaksanakan."
    ],
    "optionScores": [
      3,
      1,
      5,
      4,
      2
    ],
    "answer": "C",
    "explanation": "Kemandirian belajar membaca naskah resmi, menyamakan persepsi bersama rekan dan atasan, serta menyusun daftar periksa kerja menjamin kesiapan unit sebelum bimbingan teknis digelar. Mempelajari regulasi hanya untuk ketepatan kerja individu sudah baik, tetapi belum menyelaraskan standar seluruh petugas pemeriksa.",
    "tip": "Jangan pasif menunggu bimtek saat regulasi baru terbit; baca naskah resmi langsung, diskusikan tim, dan buat checklist penerapan."
  },
  {
    "id": "tkp-pro-034",
    "subPattern": "pengembangan-diri-dan-inisiatif-kualitas",
    "difficulty": "mudah",
    "prompt": "Kinerja harian Anda secara standar sudah memenuhi angka target minimal kantor setiap bulan, namun Anda melihat sebenarnya masih ada celah memotong waktu pemeriksaan dokumen yang sering membuat pemohon menunggu agak lama. Sikap pengembangan kualitas terbaik Anda adalah ...",
    "options": [
      "Merasa cukup puas karena capaian kinerja harian sudah memenuhi standar nilai baik bulanan tanpa mengubah alur pemeriksaan lama.",
      "Menerapkan langkah percepatan pemeriksaan di meja kerja sendiri selama tetap akurat agar pemohon tidak menunggu lama.",
      "Menjaga pencapaian target minimal bulanan tetap stabil dan baru menyampaikan ide percepatan bila dimintai saran dalam evaluasi tahunan.",
      "Memetakan titik tunggu pemeriksaan, menguji alur ringkas yang tetap akurat sesuai aturan, dan mengusulkan inovasi itu kepada pimpinan.",
      "Memangkas sebagian tahap pengecekan kelengkapan dokumen secara sepihak supaya antrean pemohon di ruang tunggu berkurang cepat."
    ],
    "optionScores": [
      2,
      4,
      3,
      5,
      1
    ],
    "answer": "D",
    "explanation": "Perbaikan berkelanjutan mendorong pegawai memetakan hambatan tunggu, menguji alur efisien yang tetap taat aturan, lalu mengajukannya ke pimpinan demi manfaat luas. Mempercepat pelayanan sebatas di meja sendiri membantu sebagian warga, namun belum menghadirkan pembaruan menyeluruh di tingkat unit.",
    "tip": "Jangan cepat puas di batas target minimal; biasakan perbaikan berkelanjutan (continuous improvement) demi mutu layanan."
  },
  {
    "id": "tkp-pro-035",
    "subPattern": "pengembangan-diri-dan-inisiatif-kualitas",
    "difficulty": "sedang",
    "prompt": "Saat melihat daftar kompetensi jabatan yang dipersyaratkan untuk rencana karier pelayanan lima tahun mendatang, Anda menyadari keterampilan pengolahan analitik data Anda masih berada di level pemula. Langkah pengembangan diri yang paling nyata Anda ambil adalah ...",
    "options": [
      "Menyerahkan pekerjaan analisis data yang rumit kepada rekan ahli di seksi lain sambil berfokus pada tugas administrasi umum.",
      "Mendaftarkan diri dalam daftar tunggu program pelatihan kedinasan resmi agar memperoleh pembekalan sesuai standar instansi.",
      "Mempelajari dasar pengolahan data secara singkat sekadarnya ketika mendadak ada penugasan rekapitulasi angka di bagian Anda.",
      "Mengambil kursus daring pengolahan data secara mandiri di luar jam kantor guna meningkatkan kemampuan teknis secara bertahap.",
      "Mengikuti pelatihan daring mandiri secara terstruktur, langsung berlatih pada data kerja etis, dan meminta saran rekan yang mahir."
    ],
    "optionScores": [
      1,
      3,
      2,
      4,
      5
    ],
    "answer": "E",
    "explanation": "Pengembangan kompetensi paling efektif memadukan belajar terstruktur, praktik etis langsung pada data kerja nyata, serta umpan balik dari rekan ahli. Mengikuti kursus daring mandiri di luar jam kerja sudah menunjukkan kemauan belajar tinggi, tetapi kurang menguji penerapan nyata di pekerjaan sehari-hari.",
    "tip": "Ambil tanggung jawab penuh atas peningkatan kompetensi diri melalui belajar aktif dan praktik langsung di lingkungan kerja."
  },
  {
    "id": "tkp-pro-036",
    "subPattern": "pengembangan-diri-dan-inisiatif-kualitas",
    "difficulty": "sedang",
    "prompt": "Seusai melakukan presentasi kebijakan penting di hadapan pimpinan, Anda memperoleh evaluasi mendetail bahwa sistematika paparan Anda masih terlalu berbelit serta kurang menyajikan kesimpulan dampak konkret. Sikap pembelajar paling sehat adalah ...",
    "options": [
      "Berterima kasih atas masukan, meminta contoh paparan efektif sebagai patokan, dan melatih perbaikannya segera.",
      "Mencatat seluruh masukan pimpinan dengan lapang dada lalu memperbaiki susunan materi presentasi tersebut sebelum rapat berikutnya.",
      "Menjelaskan alasan keterbatasan waktu penyusunan di akhir sesi agar pimpinan memahami latar belakang susunan paparan tersebut.",
      "Mengurangi peran sebagai penyaji materi di rapat besar berikutnya supaya penyampaian kebijakan berlangsung lebih ringkas.",
      "Menerima catatan evaluasi tersebut dengan tenang dan berusaha mengingatnya ketika suatu saat kembali mendapat giliran presentasi."
    ],
    "optionScores": [
      5,
      4,
      2,
      1,
      3
    ],
    "answer": "A",
    "explanation": "Sikap pembelajar menyambut evaluasi lewat ucapan terima kasih, pencarian contoh paparan terbaik sebagai patokan, dan latihan perbaikan secara langsung. Membenahi naskah presentasi setelah menerima masukan memang terbuka pada kritik, tetapi belum melatih kemampuan menyusun struktur gagasan berdampak.",
    "tip": "Jadikan umpan balik pimpinan atas hasil kerja sebagai patokan peningkatan kualitas konkret pada kesempatan berikutnya."
  },
  {
    "id": "tkp-pro-037",
    "subPattern": "pengembangan-diri-dan-inisiatif-kualitas",
    "difficulty": "sedang",
    "prompt": "Anda ditugaskan mendesain konsep inovasi layanan publik tahunan unit, namun beberapa rekan senior memberi masukan bahwa inovasi tidak usah terlalu rumit cukup mengganti warna sampul panduan yang sudah ada supaya tidak merepotkan tim. Sikap berintegritas kualitas Anda adalah ...",
    "options": [
      "Mengusulkan beberapa pilihan gagasan inovasi dari tingkat sederhana hingga menengah agar pimpinan dapat menentukan sesuai kesiapan tim.",
      "Menghargai masukan senior lalu merancang inovasi sederhana yang langsung mengatasi keluhan utama warga dan mudah dikelola tim.",
      "Menyalin konsep inovasi unit daerah lain agar penyusunan rancangan selesai cepat tanpa membebani rekan tim.",
      "Menjelaskan perlunya substansi pembaruan kepada senior lalu menyusun usulan inovasi peningkatan layanan yang realistis sesuai anggaran unit.",
      "Menyepakati penyegaran tampilan buku panduan ditambah perapian daftar isi saja supaya kewajiban inovasi tahunan tetap terpenuhi."
    ],
    "optionScores": [
      3,
      5,
      1,
      4,
      2
    ],
    "answer": "B",
    "explanation": "Inovasi layanan bermutu berpijak pada penyelesaian masalah nyata yang paling dikeluhkan masyarakat dengan desain sederhana yang sanggup dijalankan tim. Menyusun rancangan realistis sesuai kapasitas anggaran sudah baik, namun pembeda utamanya adalah ketepatan menyasar keluhan prioritas pengguna layanan.",
    "tip": "Pilih inovasi yang sederhana, realistis dikelola tim, namun benar-benar memecahkan masalah utama warga (bukan kosmetik)."
  },
  {
    "id": "tkp-pro-038",
    "subPattern": "pengembangan-diri-dan-inisiatif-kualitas",
    "difficulty": "sedang",
    "prompt": "Setelah menelaah beberapa daerah lain yang berhasil meraih predikat sangat baik dalam pelayanan publik terpadu, Anda menemukan sejumlah ide tata ruang tunggu serta alur antrean cerdas yang cocok diterapkan di unit Anda. Langkah tepat selanjutnya untuk mewujudkan peningkatan mutu tersebut adalah ...",
    "options": [
      "Mencoba mengubah penataan kursi ruang tunggu bagian sendiri dulu tanpa menunggu kesepakatan alur antarbagian di unit.",
      "Menyampaikan temuan praktik baik tata ruang dan antrean cerdas tersebut dalam rapat evaluasi unit sebagai inspirasi perbaikan layanan.",
      "Memodifikasi praktik baik daerah lain sesuai aturan serta kapasitas ruang unit, lalu menyusun usulan ringkas ke pimpinan dan tim.",
      "Mengusulkan kunjungan studi tiru resmi bagi pimpinan dan staf ke daerah berprestasi tersebut sebelum merancang perubahan di kantor.",
      "Menunjukkan foto kemajuan daerah lain kepada rekan kerja sambil menyayangkan kondisi fasilitas kantor saat ini."
    ],
    "optionScores": [
      2,
      4,
      5,
      3,
      1
    ],
    "answer": "C",
    "explanation": "Penerapan amati-tiru-modifikasi menuntut penyesuaian praktik unggulan agar selaras dengan ruang, anggaran, dan aturan unit dalam bentuk usulan terukur. Sekadar membagikan temuan inspiratif pada rapat evaluasi sudah memantik gagasan positif, tetapi belum menyiapkan rancangan penerapan yang siap dikaji.",
    "tip": "Terapkan Amati-Tiru-Modifikasi: adaptasikan praktik baik luar menjadi usulan realistis sesuai konteks anggaran dan regulasi unit."
  },
  {
    "id": "tkp-pro-039",
    "subPattern": "pengembangan-diri-dan-inisiatif-kualitas",
    "difficulty": "sulit",
    "prompt": "Anda menemukan kesalahan berulang yang kecil tetapi konsisten terjadi setiap triwulan di tahap pencocokan bukti fisik laporan lintas bagian akibat tidak jelasnya deskripsi instruksi di formulir. Meski tidak memicu sanksi berat dan sudah dianggap 'biasa terjadi' oleh staf selama tiga tahun terakhir, inisiatif kualitas terbaik Anda adalah ...",
    "options": [
      "Membiarkan kesalahan kecil tersebut tetap berlangsung karena dianggap kebiasaan lama dan tidak menimbulkan sanksi berat.",
      "Mencatat daftar kesalahan yang sering berulang setiap triwulan tersebut dalam laporan berkala sebagai bahan masukan bagi penanggung jawab mutu.",
      "Memperbaiki kekeliruan pengisian bukti fisik tersebut secara diam-diam saat proses rekapitulasi agar laporan triwulan tetap rapi.",
      "Menganalisis bagian formulir yang membingungkan, berdiskusi dengan pengguna lintas bagian, dan mengusulkan revisi formulir baku unit.",
      "Menyusun panduan pengisian singkat pribadi untuk dibagikan kepada rekan lintas bagian setiap menjelang pencocokan bukti triwulan."
    ],
    "optionScores": [
      1,
      3,
      2,
      5,
      4
    ],
    "answer": "D",
    "explanation": "Pengendalian mutu sistemik membereskan sumber kebingungan langsung pada desain formulir baku dengan melibatkan para pengguna lintas bagian. Membagikan panduan pengisian sementara memang membantu mengurangi kesalahan sesaat, tetapi tidak membenahi alat kerja resmi yang memicu kekeliruan berulang.",
    "tip": "Saat kesalahan sama terus berulang lintas waktu, perbaiki desain sistem/formulirnya (poka-yoke) agar mudah dilakukan secara benar."
  },
  {
    "id": "tkp-pro-040",
    "subPattern": "pengembangan-diri-dan-inisiatif-kualitas",
    "difficulty": "sulit",
    "prompt": "Setelah meraih nilai sempurna dalam evaluasi kinerja tahunan pribadi, Anda justru dipercaya membimbing dua pegawai magang dan satu staf baru yang sering membuat kesalahan teknis mendasar dalam pekerjaannya. Pandangan pengembangan kualitas paling visioner bagi diri dan unit adalah ...",
    "options": [
      "Meluangkan waktu khusus secara rutin untuk mengoreksi kesalahan kerja mereka dan memberi penjelasan agar mutu berkas seksi terjaga.",
      "Mempercayakan tugas administratif ringan saja kepada staf baru serta pemagang sementara pekerjaan teknis inti ditangani sendiri.",
      "Mengusulkan kepada atasan agar staf baru tersebut dipindahkan ke bagian lain yang beban kesalahan teknisnya lebih ringan.",
      "Memberikan arahan tugas pokok di minggu pertama lalu meminta mereka belajar dari contoh arsip dokumen yang pernah selesai.",
      "Merancang panduan orientasi ringkas, mendampingi mereka bertahap dengan umpan balik membangun, hingga kapasitas seluruh tim ikut meningkat."
    ],
    "optionScores": [
      4,
      2,
      1,
      3,
      5
    ],
    "answer": "E",
    "explanation": "Tingkat tertinggi profesionalisme mengembangkan keunggulan individu menjadi penguatan kapasitas kolektif lewat panduan orientasi serta pembinaan bertahap. Rutin mengoreksi hasil kerja staf baru memang menjaga ketelitian berkas sementara, tetapi kurang membangun kemandirian teknis tim jangka panjang.",
    "tip": "Kualitas pemimpin pembelajar tercermin saat keahlian pribadi berkembang menjadi penguatan kapasitas dan sistem mutu seluruh tim."
  }
];

export const profesionalismeQuestions: readonly Question[] = buildTkpPatternQuestions(
  "profesionalisme",
  [...profesionalismeDrafts, ...profesionalismeBatch2Drafts],
);
