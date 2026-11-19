import {
  buildTkpPatternQuestions,
  type Question,
  type TkpQuestionDraft,
} from "@/modules/question-bank/domain/question";

const antiRadikalismeDrafts: readonly TkpQuestionDraft[] = [
  {
    "id": "tkp-ant-001",
    "subPattern": "deteksi-dini-dan-respons-konten-ekstrem",
    "difficulty": "mudah",
    "prompt": "Seorang rekan kerja tiba-tiba membagikan tautan video khotbah atau ajakan tertutup di grup percakapan unit kantor yang membenarkan aksi kekerasan terhadap kelompok berbeda pandangan demi perubahan sistem negara. Langkah paling tepat Anda adalah ...",
    "options": [
      "Menolak tegas konten tersebut secara santun di grup agar tidak ditiru, mengingatkan agar grup hanya untuk koordinasi kerja sesuai koridor NKRI, tidak ikut menyebarkan, serta melaporkan temuan ke pimpinan atau pejabat pembina pengawas",
      "Segera meninggalkan grup kantor secara diam-diam tanpa memberitahu siapa pun supaya tidak terseret masalah hukum",
      "Diam saja tidak mengomentari kiriman itu karena menghargai kebebasan tiap orang berbagi informasi pribadinya",
      "Menyimpan video tersebut lalu membagikannya ke grup alumni kampus sekadar untuk menanyakan pendapat teman luar",
      "Membalas di grup dengan makian emosional kasar sambil mengancam akan memukul rekan pengirim pesan itu besok pagi"
    ],
    "optionScores": [
      5,
      4,
      3,
      2,
      1
    ],
    "answer": "A",
    "explanation": "Deteksi dini radikalisme menuntut keberanian menolak narasi kekerasan secara santun namun jelas di ruang kerja, membatasi penyebaran lebih lanjut, dan melaporkan secara prosedural kepada pimpinan/pengawas untuk pembinaan atau penindakan sesuai ketentuan (skor 5).",
    "tip": "Jangan membiarkan propaganda kekerasan beredar diam-diam di lingkungan kerja; tolak tegas secara santun dan laporkan lewat jalur resmi."
  },
  {
    "id": "tkp-ant-002",
    "subPattern": "deteksi-dini-dan-respons-konten-ekstrem",
    "difficulty": "mudah",
    "prompt": "Ketika merapikan rak bacaan umum di ruang tunggu pelayanan warga, Anda menemukan beberapa selebaran anonim yang tidak berizin berisi hasutan kebencian terhadap warga penganut keyakinan tertentu dan seruan memboikot pajak negara. Tindakan tepat Anda adalah ...",
    "options": [
      "Membiarkannya tetap terpajang di rak ruang tunggu karena merasa setiap bahan bacaan dari pengunjung bebas dibaca publik",
      "Mengamankan seluruh selebaran anonim tersebut dari ruang publik layanan sebagai barang bukti, melaporkannya kepada pimpinan serta keamanan instansi guna penelusuran asal dan langkah pencegahan bersama",
      "Mengambil satu selebaran lalu membacanya berlama-lama di meja loket sambil memperlihatkannya ke pengunjung lain",
      "Membakarnya secara terburu-buru di halaman belakang tanpa melapor ke pimpinan atau bagian keamanan kantor",
      "Memotret selebaran itu lalu mengunggahnya ke status media sosial pribadi tanpa penjelasan klarifikasi resmi lembaga"
    ],
    "optionScores": [
      1,
      5,
      2,
      4,
      3
    ],
    "answer": "B",
    "explanation": "Menarik bahan propaganda kebencian dari fasilitas publik mencegah penyebaran ke masyarakat luas, sekaligus mengamankan bukti dan melapor ke pimpinan/keamanan memungkinkan penelusuran kamera atau prosedur deteksi dini secara sah (skor 5).",
    "tip": "Jika menemukan materi propaganda kebencian di fasilitas publik, segera amankan dari jangkauan warga dan laporkan ke pimpinan/keamanan."
  },
  {
    "id": "tkp-ant-003",
    "subPattern": "deteksi-dini-dan-respons-konten-ekstrem",
    "difficulty": "sedang",
    "prompt": "Belakangan seorang rekan muda di tim Anda sering menyendiri saat istirahat, mulai rutin mengutip istilah pengkafiran terhadap sesama pegawai yang berbeda pendapat politik, serta menolak diajak berdiskusi masalah pekerjaan dengan rekan perempuan. Sebagai sesama rekan satu unit yang peka gejala dini, sikap paling tepat Anda adalah ...",
    "options": [
      "Langsung menuduhnya sebagai anggota jaringan teroris secara terbuka pada saat rapat pagi unit di hadapan seluruh staf",
      "Mengucilkannya total dari seluruh obrolan ruang kerja dan melarang siapa pun menyapanya lagi mulai hari ini",
      "Melakukan pendekatan personal yang ramah untuk membuka dialog empatik tanpa memojokkan, mengajaknya kembali inklusif dalam kerja tim sesuai kode etik ASN, serta berkonsultasi dengan atasan/pembina kepegawaian agar ia mendapat pembinaan kebangsaan terarah",
      "Membiarkan perilakunya karena urusan keyakinan pribadi dianggap tidak berhubungan dengan keharmonisan kinerja kantor",
      "Menertawakan perubahan sikapnya di belakang meja agar ia sadar sendiri dan malu bergaul dengan kelompok ekstrem"
    ],
    "optionScores": [
      2,
      3,
      5,
      1,
      4
    ],
    "answer": "C",
    "explanation": "Deteksi dini perubahan perilaku menuju eksklusivitas ekstrem memadukan dua hal: menjaga jembatan komunikasi personal yang santun (pencegahan agar tidak makin terisolasi ke jaringan radikal) serta melibatkan pimpinan/pembina secara prosedural untuk pendampingan terukur (skor 5).",
    "tip": "Tangani gejala awal eksklusivisme rekan melalui dialog empatik yang tidak mengucilkan sekaligus koordinasi pembinaan berjenjang."
  },
  {
    "id": "tkp-ant-004",
    "subPattern": "deteksi-dini-dan-respons-konten-ekstrem",
    "difficulty": "sedang",
    "prompt": "Anak didik di sebuah sekolah binaan dinas Anda mulai mengikuti kanal diskusi gim daring tersembunyi yang rupanya menyisipkan ajakan intoleransi dan perundungan berbasis agama kepada pemain lain. Sebagai bagian dari tim pembinaan sekolah/pemuda, langkah tepat yang Anda koordinasikan adalah ...",
    "options": [
      "Menutup akses listrik sekolah dan melarang total pelajar mengenal teknologi komputer hingga tamat SMA",
      "Mengabaikan aktivitas pelajar di luar jam sekolah karena pengawasan ruang digital mutlak tanggung jawab penyedia internet",
      "Menggelar razia telepon genggam mendadak setiap pagi sambil menghukum fisik pelajar yang tergabung dalam komunitas gim",
      "Menggandeng guru Bimbingan Konseling dan orang tua untuk melakukan pendampingan dialogis bagi pelajar, membekali literasi kewaspadaan rekrutmen daring, serta melapor akun/kanal propaganda berbahaya ke saluran aduan resmi otoritas digital",
      "Meminta siswa tersebut pindah sekolah secara diam-diam tanpa pembinaan literasi atau komunikasi kepada orang tuanya"
    ],
    "optionScores": [
      2,
      1,
      3,
      5,
      4
    ],
    "answer": "D",
    "explanation": "Pola perekrutan ekstremis kini kerap masuk lewat ruang hobi anak muda seperti komunitas gim daring. Sinergi keluarga, sekolah (guru BK), literasi digital kritis, serta pelaporan kanal berbahaya ke otoritas resmi mencegah paparan tanpa mengkriminalisasi anak (skor 5).",
    "tip": "Hadapi penyusupan radikalisme pada komunitas anak muda lewat sinergi sekolah-orang tua, literasi kritis, dan pelaporan kanal ilegal."
  },
  {
    "id": "tkp-ant-005",
    "subPattern": "deteksi-dini-dan-respons-konten-ekstrem",
    "difficulty": "sedang",
    "prompt": "Seorang pegawai kontrak baru terlihat menghadiri pengajian atau diskusi tertutup di luar kantor yang materi selebarannya secara eksplisit menolak hukum positif Indonesia dan menganjurkan mengabaikan aturan kedinasan pemerintah daerah. Sikap profesional Anda adalah ...",
    "options": [
      "Mengikutinya diam-diam pada malam hari dengan tujuan merekam wajah seluruh peserta lalu mengunggahnya ke internet",
      "Memecatnya langsung pada hari itu juga tanpa melaporkan temuan maupun melewati kewenangan pimpinan SDM instansi",
      "Membiarkannya bebas karena pegawai kontrak memiliki masa kerja singkat sehingga tidak memengaruhi birokrasi jangka panjang",
      "Mencaci makinya sebagai pengkhianat bangsa di depan meja layanan warga ketika jam antrean ramai",
      "Melaporkan fakta dan bukti dokumen selebaran terverifikasi kepada atasan/pejabat berwenang kepegawaian serta tim pengawasan internal guna klarifikasi objektif, edukasi wawasan kebangsaan, atau penegakan disiplin kontrak"
    ],
    "optionScores": [
      2,
      3,
      1,
      4,
      5
    ],
    "answer": "E",
    "explanation": "Penanganan ancaman ideologis di lingkungan aparatur pemerintah (termasuk PPPK/non-ASN) wajib mengandalkan bukti objektif yang dilaporkan melalui jalur atasan dan pejabat pengawasan berwenang agar klarifikasi serta sanksi berjalan akuntabel tanpa main hakim sendiri (skor 5).",
    "tip": "Kumpulkan bukti faktual dan eskalasikan indikasi penolakan hukum/NKRI ke pimpinan dan unit pengawas SDM sesuai prosedur sah."
  },
  {
    "id": "tkp-ant-006",
    "subPattern": "deteksi-dini-dan-respons-konten-ekstrem",
    "difficulty": "sedang",
    "prompt": "Pada forum evaluasi program pemberdayaan desa, Anda mendapati salah satu kelompok relawan luar berniat menggelar pembinaan kepemudaan di balai desa tanpa surat pemberitahuan resmi, dengan topik tersembunyi yang berpotensi memecah kerukunan warga lokal dan menolak tata tertib desa. Tindakan preventif Anda adalah ...",
    "options": [
      "Berkoordinasi dengan kepala desa, tokoh warga, serta aparat wilayah memverifikasi izin dan materi kegiatan secara santun, menunda bila berpotensi memecah kerukunan, dan menyiapkan acara pemuda positif",
      "Mengizinkan saja kegiatan berlangsung sepanjang kelompok relawan tersebut bersedia membawakan konsumsi gratis untuk panitia desa",
      "Mengajak pemuda desa mengusir relawan luar tersebut dengan aksi dorong-mendorong di halaman balai desa",
      "Diam menyingkir ke warung terdekat sambil menunggu apakah terjadi keributan di balai desa baru kemudian melapor besok",
      "Melarang seluruh kegiatan pemuda desa dari organisasi mana pun termasuk karang taruna resmi setempat selama setahun"
    ],
    "optionScores": [
      5,
      2,
      1,
      3,
      4
    ],
    "answer": "A",
    "explanation": "Deteksi dini di tingkat kewilayahan menggabungkan verifikasi izin-substansi bersama pimpinan desa dan aparat setempat secara tertib prosedural serta mengisi ruang pemuda dengan aktivitas positif membangun kerukunan (skor 5).",
    "tip": "Cegah infiltrasi kegiatan pemecah belah di masyarakat lewat verifikasi legalitas-materi bersama perangkat desa dan alternatif program positif."
  },
  {
    "id": "tkp-ant-007",
    "subPattern": "deteksi-dini-dan-respons-konten-ekstrem",
    "difficulty": "sulit",
    "prompt": "Anda menerima laporan warga mengenai adanya pegawai teknis kantor yang kerap mengunggah kutipan artikel bernada dukungan terselubung kepada kelompok bersenjata ekstrem di akun media sosial pribadinya dengan alasan sekadar tertarik aspek geopolitik. Sebagai rekan atau koordinator pengawasan kepatuhan internal, sikap terbaik Anda adalah ...",
    "options": [
      "Menutup laporan warga tersebut langsung karena akun media sosial dianggap sepenuhnya ranah pribadi yang bebas berekspresi tanpa batas",
      "Menindaklanjuti laporan secara rahasia dan prosedural berbukti tangkapan layar ke pejabat pengawas internal (Inspektorat/SDM) untuk pemeriksaan netralitas ideologis tanpa menyebar spekulasi publik",
      "Menghubungi jurnalis lokal terlebih dahulu agar kasus pegawai tersebut menjadi berita utama sebelum dilakukan klarifikasi internal",
      "Meminta pegawai tersebut sekadar menghapus unggahannya malam ini lalu berjanji tidak pernah membicarakan geopolitik apa pun",
      "Memblokir akses internet kantor hanya pada komputer pribadi pegawai bersangkutan sambil mendiamkan unggahan media sosialnya"
    ],
    "optionScores": [
      2,
      5,
      1,
      4,
      3
    ],
    "answer": "B",
    "explanation": "Dukungan (termasuk terselubung) terhadap organisasi radikal/kekerasan bertentangan dengan disiplin dan sumpah setia ASN pada Pancasila & UUD 1945 (serta SKB Penanganan Radikalisme ASN). Penanganan objektif, rahasia, berbukti lewat Inspektorat/pembina kepegawaian menjaga praduga adil dan ketahanan birokrasi (skor 5).",
    "tip": "Tangani laporan indikasi radikalisme ASN secara rahasia, berbasis bukti autentik, melalui jalur resmi Inspektorat/Biro SDM."
  },
  {
    "id": "tkp-ant-008",
    "subPattern": "deteksi-dini-dan-respons-konten-ekstrem",
    "difficulty": "sulit",
    "prompt": "Dalam pelatihan penguatan karakter aparatur muda yang Anda dampingi, seorang peserta bertanya kritis dengan nada ragu apakah radikalisme memang benar berbahaya jika tidak berbentuk bom atau kekerasan fisik, melainkan baru sebatas ceramah eksklusif merendahkan pemeluk lain dan sistem negara. Jawaban edukatif paling tepat Anda adalah ...",
    "options": [
      "Memarahi penanya di hadapan kelas karena dianggap sudah pasti berpotensi menjadi ekstremis akibat menanyakan pertanyaan tersebut",
      "Menyetujui pendapat penanya bahwa selama tidak ada kekerasan fisik, sikap memusuhi pemeluk lain maupun merongrong dasar negara boleh dibiarkan berkembang",
      "Menghargai pertanyaannya dalam dialog terbuka lalu menjelaskan berjenjang bahwa intoleransi hulu adalah pintu masuk radikalisme ideologis dan aksi kekerasan sehingga pencegahan dini menjaga persatuan bangsa",
      "Mengalihkan pembicaraan kelas langsung ke topik peraturan cuti pegawai agar diskusi ideologi cepat berakhir tanpa perdebatan",
      "Meminta penanya menandatangani surat pengunduran diri dari pelatihan hari itu juga sebelum mendengar penjelasannya"
    ],
    "optionScores": [
      2,
      1,
      5,
      3,
      4
    ],
    "answer": "C",
    "explanation": "Dalam konsep pencegahan (BNPT), terorisme bermula dari toleransi terhadap bibit intoleransi dan paham takfiri/anti-kebinekaan di hulu. Menjawab kritis secara terbuka, logis, dan edukatif membekali pemahaman substantif tanpa membungkam rasa ingin tahu (skor 5).",
    "tip": "Pahami spektrum hulu ke hilir radikalisasi: intoleransi -> paham radikal anti-Pancasila -> aksi kekerasan; jawab keraguan lewat dialog edukatif."
  },
  {
    "id": "tkp-ant-009",
    "subPattern": "moderasi-beragama-dan-penolakan-intoleransi",
    "difficulty": "mudah",
    "prompt": "Salah seorang pegawai baru menolak bekerja dalam satu tim audit bersama rekan perempuan dan rekan yang berbeda agama dengan alasan prinsip kelompoknya melarang berinteraksi dekat dalam pekerjaan dengan kelompok luar. Sikap tegas namun santun Anda selaku ketua tim adalah ...",
    "options": [
      "Mengabulkan permintaannya segera lalu memindahkannya ke ruang terpisah khusus pegawai seagama dan sesama jenis saja",
      "Membiarkannya bekerja menyendiri tidak perlu menghadiri rapat koordinasi tim bersama anggota lain seterusnya",
      "Mengeluarkan surat pemecatan lisan kepadanya di lorong kantor karena dianggap sudah berhaluan intoleran",
      "Menjelaskan secara tenang tetapi tegas bahwa kode etik pelayanan dan kolaborasi ASN menjamin kesetaraan kerja lintas agama serta gender tanpa diskriminasi, mengajaknya berdialog dengan pembina bila perlu, dan tetap menetapkan pembagian tim profesional",
      "Menukar seluruh anggota tim audit menjadi kelompok homogen agar pekerjaan bulan ini selesai lebih cepat tanpa gesekan"
    ],
    "optionScores": [
      1,
      2,
      3,
      5,
      4
    ],
    "answer": "D",
    "explanation": "Negara menjamin kebebasan beribadah, namun dalam tugas profesional pelayanan publik, ASN tidak boleh menolak bekerja sama lintas suku, agama, atau gender. Sikap tegas berbasis kode etik profesional dengan pembinaan santun mencegah segregasi intoleran di kantor (skor 5).",
    "tip": "Tugas publik menuntut kolaborasi setara lintas gender dan keyakinan; tolak permintaan pengkotakan tim berbasis sentimen identitas."
  },
  {
    "id": "tkp-ant-010",
    "subPattern": "moderasi-beragama-dan-penolakan-intoleransi",
    "difficulty": "mudah",
    "prompt": "Dalam suasana diskusi santai di ruang istirahat kantor, seorang rekan melontarkan ucapan meremehkan tata cara ibadah agama rekan lainnya hingga rekan tersebut terlihat tidak nyaman. Sikap Anda yang membela moderasi dan persaudaraan kerja adalah ...",
    "options": [
      "Ikut tertawa ringan supaya suasana istirahat tetap santai dan Anda tidak dicap terlalu serius menanggapi candaan",
      "Menegur kasar pengucap dengan kata-kata merendahkan keyakinannya pula sebagai balasan setimpal agar adil",
      "Segera memindahkan kursi Anda menjauh dari meja istirahat tanpa menyapa kedua rekan tersebut lagi sepanjang minggu",
      "Menyampaikan secara halus berdua dengan korban saja agar ia tidak perlu memasukkan candaan itu ke dalam hati",
      "Mengingatkan secara santun namun jelas di tempat itu bahwa keyakinan dan ibadah setiap orang patut dihormati dan tidak layak dijadikan bahan lelucon, lalu mengembalikan suasana keakraban kerja yang sehat"
    ],
    "optionScores": [
      1,
      2,
      3,
      4,
      5
    ],
    "answer": "E",
    "explanation": "Intoleransi kerap bersembunyi di balik 'candaan'. Menghentikan pelecehan agama di tempat secara beradab dan tenang menetapkan batas etis ruang kerja inklusif (skor 5).",
    "tip": "Hentikan candaan yang merendahkan keyakinan agama lain secara santun tapi jelas langsung di tempat."
  },
  {
    "id": "tkp-ant-011",
    "subPattern": "moderasi-beragama-dan-penolakan-intoleransi",
    "difficulty": "sedang",
    "prompt": "Seorang petugas pelayanan di unit Anda terlihat melayani jauh lebih ramah dan cepat kepada warga yang berpakaian atau menunjukkan simbol keagamaan sama dengannya, namun bersikap lamban serta dingin kepada warga berpenampilan berbeda. Langkah korektif paling tepat Anda sebagai rekan sejawat atau pengawas unit adalah ...",
    "options": [
      "Mengingatkannya secara personal mengenai kewajiban pelayanan publik yang netral, setara, dan bebas diskriminasi latar belakang agama apa pun, mendampingi perbaikan sikapnya di loket, dan melapor ke atasan bila perilaku diskriminatif terus berulang",
      "Mendiamkannya karena wajar jika seseorang merasa lebih nyaman cepat akrab dengan orang sesama keyakinan",
      "Mengatur pembagian antrean loket terpisah berdasarkan kesamaan agama warga dengan petugas di meja layanan",
      "Memarahi rekan tersebut di hadapan seluruh warga antrean agar warga melihat Anda membela kelompok minoritas",
      "Meminta warga yang dilayani dingin pindah mengantre ke petugas lain tanpa pernah memberi masukan kepada rekan bersangkutan"
    ],
    "optionScores": [
      5,
      1,
      2,
      3,
      4
    ],
    "answer": "A",
    "explanation": "Bias layanan berbasis agama merupakan bentuk intoleransi nyata di birokrasi. Koreksi privat mengingatkan amanat UU Pelayanan Publik serta pengawasan kepatuhan lanjutan menjaga netralitas pelayanan bagi setiap warga (skor 5).",
    "tip": "Layanan publik tidak boleh tebang pilih berdasar kesamaan agama atau penampilan; ingatkan rekan dan kawal perbaikannya."
  },
  {
    "id": "tkp-ant-012",
    "subPattern": "moderasi-beragama-dan-penolakan-intoleransi",
    "difficulty": "sedang",
    "prompt": "Menjelang hari besar keagamaan nasional, sekelompok kecil pegawai di grup pesan internal memperdebatkan sah tidaknya menyampaikan ucapan selamat kepada rekan pemeluk agama lain secara memanas hingga saling menuduh. Sikap moderat dan penyejuk paling bijaksana adalah ...",
    "options": [
      "Memilih memihak salah satu tafsir keagamaan pribadi Anda dan memaksakan seluruh anggota grup menyetujuinya lewat debat panjang",
      "Meredam ketegangan secara santun dengan mengingatkan agar perbedaan praktik keyakinan masing-masing saling dihormati tanpa memaksakan pilihan kepada orang lain, tetap menjaga persaudaraan kebangsaan, dan memfokuskan grup kerja pada koordinasi dinas",
      "Melarang seluruh pegawai mengucapkan selamat hari raya apa pun bahkan kepada sesama pemeluk agamanya sendiri",
      "Mengeluarkan secara paksa pegawai yang tidak sepakat dengan pendapat Anda dari seluruh grup kegiatan kantor",
      "Mengirimkan pesan sindiran bernada merendahkan pandangan keagamaan rekan yang berbeda dari Anda"
    ],
    "optionScores": [
      2,
      5,
      3,
      1,
      4
    ],
    "answer": "B",
    "explanation": "Prinsip inti moderasi beragama (tawassuth/moderat, tasamuh/toleran, menghormati keyakinan intern dan antarumat) menghindarkan pemaksaan tafsir dalam ruang kerja bersama, memelihara sikap hormat perbedaan tanpa memicu konflik birokrasi (skor 5).",
    "tip": "Moderasi beragama menghormati ruang keyakinan masing-masing tanpa memaksa maupun saling mengkafirkan, sambil menjaga persaudaraan bersama."
  },
  {
    "id": "tkp-ant-013",
    "subPattern": "moderasi-beragama-dan-penolakan-intoleransi",
    "difficulty": "sedang",
    "prompt": "Di sebuah kantor cabang daerah, seorang pegawai berupaya memaksakan aturan berpakaian religius versi aliran pribadinya kepada pemohon layanan warga maupun staf magang lintas agama sebagai syarat tidak tertulis dilayani di loketnya. Sikap tepat Anda adalah ...",
    "options": [
      "Menyetujui persyaratan tambahan tersebut supaya ruang pelayanan kantor terkesan lebih tertib dan seragam",
      "Membiarkannya berjalan selama hanya diterapkan pada jam pagi sebelum kepala kantor tiba di ruangan",
      "Menegaskan bahwa aturan pakaian serta syarat layanan hanya boleh merujuk ketentuan SOP resmi negara yang menghormati kebinekaan dan hak warga, segera menghentikan syarat diskriminatif sepihak itu bersama atasan, serta melayani warga tanpa syarat tambahan",
      "Mengganti papan pengumuman loket secara diam-diam tanpa menegur pegawai maupun melapor ke pimpinan cabang",
      "Meminta staf magang dari agama lain mengalah mengikuti pakaian kelompok pegawai tersebut sementara waktu agar aman"
    ],
    "optionScores": [
      1,
      2,
      5,
      3,
      4
    ],
    "answer": "C",
    "explanation": "Penyelenggara pelayanan tidak boleh menambah syarat bermuatan ideologis/agama sepihak di luar standar hukum resmi negara. Penghentian syarat diskriminatif bersama atasan melindungi hak konstitusional seluruh warga (skor 5).",
    "tip": "Tolak pemaksaan norma kelompok tertentu menjadi syarat layanan publik; rujuk hanya ketentuan resmi negara yang inklusif."
  },
  {
    "id": "tkp-ant-014",
    "subPattern": "moderasi-beragama-dan-penolakan-intoleransi",
    "difficulty": "sedang",
    "prompt": "Empat pilar utama moderasi beragama di Indonesia menekankan komitmen kebangsaan, toleransi, anti-kekerasan, serta penerimaan terhadap tradisi dan budaya lokal (akomodatif terhadap kearifan lokal). Manakah perilaku di kantor berikut yang mencerminkan keseimbangan pilar keempat moderasi tersebut?",
    "options": [
      "Mengharamkan atau menolak seluruh acara syukuran budaya panen tradisional daerah yang positif tanpa dialog bersama masyarakat",
      "Memaksa seluruh warga meninggalkan bahasa ibu serta baju adat daerahnya saat upacara peringatan kemerdekaan nasional",
      "Membatasi kegiatan kesenian lokal hanya boleh diselenggarakan pada malam hari di luar batas wilayah kecamatan",
      "Menghargai tradisi positif masyarakat Nusantara seperti sedekah bumi/gotong royong kenduri bersama selama selaras dengan nilai ketuhanan, kemanusiaan, dan tidak bertentangan dengan hukum",
      "Mencampuradukkan ritus sakral inti semua agama menjadi satu tata ibadah seragam pada acara apel hari Senin kantor"
    ],
    "optionScores": [
      1,
      2,
      3,
      5,
      4
    ],
    "answer": "D",
    "explanation": "Sikap beragama yang ramah serta akomodatif terhadap tradisi/kearifan lokal yang selaras nilai kebajikan (tidak anti-budaya Nusantara maupun tidak mencampuradukkan keyakinan ibadah) menjadi penangkal penting ekstremisme kaku (skor 5).",
    "tip": "Ingat empat indikator moderasi beragama: komitmen kebangsaan, toleransi, anti-kekerasan, dan akomodatif terhadap budaya lokal."
  },
  {
    "id": "tkp-ant-015",
    "subPattern": "moderasi-beragama-dan-penolakan-intoleransi",
    "difficulty": "sulit",
    "prompt": "Panitia seleksi penyuluh sosial desa menemukan seorang kandidat berpengetahuan teknis sangat tinggi, namun saat wawancara mendalam ia terang-terangan menyatakan tidak bersedia mendampingi desa yang mayoritas penduduknya beragama berbeda karena khawatir mengotori keyakinannya. Penilaian profesional Anda selaku anggota tim pewawancara adalah ...",
    "options": [
      "Tetap meluluskannya berdasar nilai tes tertulis tinggi dengan janji akan menempatkannya khusus di desa seagama saja",
      "Menegurnya keras saat wawancara dengan menyebutnya berpikiran sempit sebelum langsung menyuruhnya keluar ruang tes",
      "Mengubah catatan hasil wawancara agar terlihat netral karena kasihan terhadap kebutuhan pekerjaan kandidat tersebut",
      "Menunda kelulusannya sambil memintanya berpura-pura menyetujui semua pertanyaan kebangsaan saat wawancara ulang",
      "Menilai secara objektif bahwa sikap eksklusif menolak melayani warga beda agama tidak memenuhi syarat integritas kebangsaan, empati sosial, dan netralitas pelayan masyarakat sehingga tidak direkomendasikan lulus sebelum memiliki kesadaran inklusif"
    ],
    "optionScores": [
      2,
      3,
      1,
      4,
      5
    ],
    "answer": "E",
    "explanation": "Pelayan publik dan penyuluh masyarakat bekerja di negara majemuk untuk seluruh warga negara tanpa diskriminasi agama. Penolakan melayani warga berbeda agama menggugurkan kelayakan karakter pengabdian ASN/pelayan publik meskipun nilai kognitifnya tinggi (skor 5).",
    "tip": "Kecakapan teknis tidak pernah menggantikan syarat mutlak kesediaan melayani seluruh warga negara tanpa diskriminasi keyakinan."
  },
  {
    "id": "tkp-ant-016",
    "subPattern": "moderasi-beragama-dan-penolakan-intoleransi",
    "difficulty": "sulit",
    "prompt": "Dalam program dialog kerukunan pemuda kabupaten, sekelompok aktivis berargumen keras bahwa toleransi berarti seluruh kelompok tidak perlu saling bertegur sapa atau bekerja sama sosial agar terhindar dari gesekan, sedangkan kelompok lain memaksa semua peserta mengikuti satu tradisi ritual kelompok mayoritas. Posisi moderat yang Anda tawarkan sebagai fasilitator forum adalah ...",
    "options": [
      "Membangun jalan tengah sehat: menjaga kemurnian ibadah tiap umat di ranah masing-masing tanpa paksaan sinkretisme, sekaligus aktif bergotong royong dalam kerja sosial-ekonomi sebagai satu bangsa",
      "Memilih konsep segregasi total tidak saling sapa agar kerukunan semu tampak tenang tanpa rapat lintas umat lagi",
      "Mendukung paksaan satu tradisi ritual mayoritas dengan alasan menciptakan kesatuan budaya daerah yang lebih rapi",
      "Membubarkan forum dialog pemuda kabupaten tersebut karena dianggap mustahil mempertemukan dua pendapat yang berseberangan",
      "Membiarkan kedua kelompok saling berdebat hingga pagi tanpa memberi kerangka kerja kolaborasi nyata bagi masyarakat"
    ],
    "optionScores": [
      5,
      2,
      1,
      3,
      4
    ],
    "answer": "A",
    "explanation": "Moderasi berada tepat di antara dua kutub ekstrem: menolak segregasi kaku anti-kerja sama sosial sekaligus menolak pemaksaan keseragaman/sinkretisme. Kolaborasi kemanusiaan bersama beriringan dengan hormat atas kemurnian iman tiap agama (skor 5).",
    "tip": "Moderasi kebinekaan menyeimbangkan kemurnian ruang ibadah masing-masing dengan kerja sama sosial aktif antarwarga sebangsa."
  },
  {
    "id": "tkp-ant-017",
    "subPattern": "kesetiaan-ideologi-pancasila-uud-nkri",
    "difficulty": "mudah",
    "prompt": "Seorang rekan baru di tim Anda berpendapat di sela rapat informal bahwa Pancasila dan UUD 1945 sudah tidak relevan lagi dan Indonesia sebaiknya mengganti dasar negara meniru sistem negara lain yang ia kagumi di berita. Sikap tepat Anda adalah ...",
    "options": [
      "Ikut mengangguk setuju sebagian agar diskusi istirahat siang terasa mengalir tanpa ketegangan antarrekan",
      "Menegaskan kesetiaan terhadap Pancasila, UUD 1945, dan NKRI dengan argumen logis santun soal perannya menjaga bangsa majemuk, sambil tetap memantau komitmennya dalam kerja kedinasan",
      "Menjauhi rekan tersebut sepenuhnya tanpa pernah berani meluruskan pandangan bahwa Pancasila adalah konsensus dasar negara",
      "Mengusulkan dalam rapat resmi besok supaya dasar negara dibahas ulang agar memenuhi kebebasan berpendapat pegawai muda",
      "Menyerangnya dengan kata-kata kasar di lobi utama kantor sambil menuduhnya langsung di depan tamu layanan publik"
    ],
    "optionScores": [
      1,
      5,
      3,
      2,
      4
    ],
    "answer": "B",
    "explanation": "Kesetiaan pada Pancasila, UUD 1945, dan NKRI adalah nilai Loyal mutlak ASN. Menjawab argumentatif-santun namun kokoh mempertahankan konsensus final pendiri bangsa sekaligus mengawal disiplin ideologis menjaga keutuhan negara (skor 5).",
    "tip": "Teguhkan konsensus final Pancasila-UUD 1945-NKRI lewat argumen rasional santun saat ada wacana penggantian dasar negara."
  },
  {
    "id": "tkp-ant-018",
    "subPattern": "kesetiaan-ideologi-pancasila-uud-nkri",
    "difficulty": "mudah",
    "prompt": "Ketika upacara bendera memperingati hari besar nasional di halaman kantor berlangsung khidmat, seorang pegawai terlihat sengaja berdiri menyandar santai sambil memainkan ponsel dan menggerutu tidak mau menghormat kepada Bendera Merah Putih dengan alasan paham kelompoknya menganggap penghormatan bendera terlarang. Sikap Anda sesudah upacara selesai adalah ...",
    "options": [
      "Mengabaikannya saja karena menghormat bendera dianggap cukup diwakili oleh petugas pemimpin barisan di depan",
      "Ikut tidak menghormat pada upacara bulan depan sebagai bentuk dukungan solidaritas terhadap keyakinan pribadi rekan",
      "Mengajak rekan berbicara santun empat mata menjelaskan makna hormat bendera sebagai penghargaan kehormatan negara (bukan penyembahan), serta melapor pembina kepegawaian jika penolakan simbol negara berlanjut",
      "Mendorongnya keluar barisan di tengah berjalannya upacara sehingga merusak kekhidmatan peserta upacara lainnya",
      "Mengambil foto wajahnya saat menunduk untuk diviralkan ke grup komunitas umum tanpa klarifikasi maupun prosedur"
    ],
    "optionScores": [
      2,
      1,
      5,
      3,
      4
    ],
    "answer": "C",
    "explanation": "Mengedukasi makna kebangsaan atas simbol negara (Pasal 35 UUD 1945 & UU 24/2009) secara jernih terlebih dahulu dan melaporkan lewat saluran pembinaan bila penolakan simbol NKRI berlanjut mencerminkan loyalitas beradab dan prosedural (skor 5).",
    "tip": "Luruskan kesalahpahaman makna penghormatan simbol negara (bukan penyembahan), dan laporkan secara prosedural jika pembangkangan berlanjut."
  },
  {
    "id": "tkp-ant-019",
    "subPattern": "kesetiaan-ideologi-pancasila-uud-nkri",
    "difficulty": "sedang",
    "prompt": "Sekelompok kecil tokoh di suatu wilayah binaan menolak pelaksanaan program vaksinasi anak sekolah dan pencatatan KTP elektronik dengan menyebarkan paham agar warga memutus hubungan dengan segala dokumen hukum negara yang dianggap sistem sesat. Sebagai pegawai pembina wilayah, sikap tepat Anda adalah ...",
    "options": [
      "Membiarkan warga di wilayah tersebut tidak memiliki identitas hukum maupun perlindungan kesehatan anak demi menghormati pilihan kelompok",
      "Menyetujui penghapusan kewajiban dokumen kependudukan khusus bagi kelompok tersebut agar tidak terjadi protes sosial",
      "Menghentikan seluruh anggaran bantuan maupun pelayanan jalan desa secara sepihak sebelum kelompok itu meminta maaf",
      "Menggandeng tokoh agama moderat, tokoh adat, dan aparat setempat melaksanakan pendekatan dialogis persuasif mengenai manfaat perlindungan hukum serta kesehatan anak di bawah NKRI, sekaligus menindak penebar ajakan melawan hukum sesuai koridor peraturan",
      "Mengirim pasukan penertiban langsung membubarkan pemukiman warga setempat tanpa dialog sosial terlebih dahulu"
    ],
    "optionScores": [
      1,
      2,
      3,
      5,
      4
    ],
    "answer": "D",
    "explanation": "Mengajak kelompok eksklusif kembali terhubung ke layanan negara dilakukan lewat dialog persuasif melibatkan tokoh agama/adat kredibel yang meluruskan dalil kebangsaan dan manfaat layanan hak sipil/kesehatan warga, sambil tetap menegakkan hukum terhadap provokator penolak negara (skor 5).",
    "tip": "Hadapi penolakan sistem administrasi/layanan negara lewat kolaborasi dialogis dengan tokoh kredibel setempat serta ketegasan hukum pada provokator."
  },
  {
    "id": "tkp-ant-020",
    "subPattern": "kesetiaan-ideologi-pancasila-uud-nkri",
    "difficulty": "sedang",
    "prompt": "Dalam suatu forum diskusi kebijakan daerah, muncul usulan ekstrem agar daerah tertentu diberi kewenangan menolak kedatangan aparatur negara yang berasal dari provinsi maupun suku berbeda dan mengganti aturan hukum nasional dengan aturan kelompok mayoritas daerah saja. Respons berprinsip NKRI Anda adalah ...",
    "options": [
      "Mendukung usulan pembatasan aparatur asal daerah lain supaya lapangan kerja birokrasi diutamakan bagi putra daerah secara mutlak",
      "Diam saja mendengarkan tanpa memberi masukan karena usulan datang dari perwakilan organisasi kemasyarakatan yang vokal",
      "Menyetujui penghentian penempatan pegawai lintas provinsi untuk sementara selama sepuluh tahun mendatang",
      "Membubarkan forum diskusi seketika sambil menuduh seluruh peserta forum sebagai kelompok separatis bersenjata",
      "Menolak tegas usulan tersebut secara argumentatif berlandaskan prinsip NKRI, Bhinneka Tunggal Ika, dan sistem kepegawaian nasional yang menjamin setiap warga Indonesia berhak mengabdi di seluruh tanah air di bawah satu payung hukum nasional"
    ],
    "optionScores": [
      1,
      3,
      2,
      4,
      5
    ],
    "answer": "E",
    "explanation": "ASN adalah alat pemersatu bangsa dalam wadah Negara Kesatuan Republik Indonesia (UU No. 20/2023). Menolak segala bentuk eksklusivisme kedaerahan yang memutus ikatan hukum nasional secara argumentatif dan beradab mempertahankan keutuhan NKRI (skor 5).",
    "tip": "Pertahankan prinsip NKRI sebagai satu wilayah kesatuan hukum dan pengabdian ASN di seluruh Nusantara tanpa sekat daerah."
  },
  {
    "id": "tkp-ant-021",
    "subPattern": "kesetiaan-ideologi-pancasila-uud-nkri",
    "difficulty": "sedang",
    "prompt": "Menjelang rekrutmen pegawai kontrak baru di unit Anda, Anda mengetahui seorang kandidat melampirkan surat rekomendasi aktif organisasi yang beberapa waktu lalu secara resmi dibubarkan pemerintah karena terbukti menganut paham yang ingin mengganti ideologi Pancasila. Tindakan verifikasi paling tepat Anda adalah ...",
    "options": [
      "Memverifikasi rekam jejak status hukum organisasi tersebut bersama tim pembina SDM dan pengawasan guna menelaah keterlibatan serta komitmen kebangsaan kandidat secara objektif sesuai aturan berlaku",
      "Mengabaikan keterangan organisasi tersebut karena menganggap rekrutmen kontrak daerah hanya menilai kecepatan mengetik di komputer",
      "Mencoret langsung lamaran kandidat sambil menyebarluaskan fotokopi KTP-nya di papan pengumuman umum kantor",
      "Tetap menerimanya diam-diam tanpa melapor pimpinan asalkan berjanji akan bekerja lembur setiap akhir pekan",
      "Menasihatinya secara pribadi untuk mengganti nama organisasinya di berkas lamaran agar tetap lolos verifikasi berkas awal"
    ],
    "optionScores": [
      5,
      1,
      3,
      2,
      4
    ],
    "answer": "A",
    "explanation": "Pemeriksaan rekam jejak objektif (penelusuran latar belakang keterikatan ideologi/organisasi terlarang sesuai ketentuan peraturan) melalui koordinasi SDM dan pengawasan memastikan objektivitas hukum sekaligus melindungi integritas kelembagaan negara (skor 5).",
    "tip": "Dalam rekrutmen aparatur, verifikasi rekam jejak ideologis/kepatuhan hukum secara objektif bersama tim pengawas SDM tanpa melanggar privasi publik."
  },
  {
    "id": "tkp-ant-022",
    "subPattern": "kesetiaan-ideologi-pancasila-uud-nkri",
    "difficulty": "sedang",
    "prompt": "Seorang rekan kerja menolak menandatangani pakta integritas tahunan pegawai dengan dalih klausul \"setia kepada Pancasila dan UUD 1945\" bertentangan dengan keyakinan pribadinya karena menurutnya kesetiaan hanya boleh kepada Tuhan, bukan konstitusi manusia. Pendekatan paling bijaksana untuk meluruskan kekeliruan ini adalah ...",
    "options": [
      "Menyetujui penghapusan klausul kesetiaan Pancasila khusus di lembar pakta integritas milik rekan kerja tersebut",
      "Menjelaskan secara jernih harmoni Sila Pertama Pancasila dan konstitusi negara dalam menjaga ruang damai beribadah, sambil tetap menegakkan kewajiban pakta integritas bersama tim kepegawaian",
      "Mengejek pemahaman agamanya di hadapan rekan kerja lain karena gagal memahami hubungan agama dan negara",
      "Menandatangani lembar pakta integritasnya atas nama dirinya diam-diam supaya rekap dokumen bagian segera 100%",
      "Membiarkan berkasnya kosong tidak bertanda tangan selama satu tahun tanpa pernah melaporkan ke unit kepegawaian"
    ],
    "optionScores": [
      1,
      5,
      2,
      3,
      4
    ],
    "answer": "B",
    "explanation": "Pancasila bukan agama dan tidak bertentangan dengan agama; sebaliknya Sila Pertama memayungi pengamalan iman seluruh pemeluk dalam negara hukum yang adil. Edukasi konseptual yang jernih disertai ketegasan kewajiban pakta integritas adalah sikap terbaik ASN (skor 5).",
    "tip": "Jelaskan harmoni antara nilai ketuhanan (Sila ke-1) dan konstitusi bernegara, sambil tetap menegakkan pakta integritas ASN."
  },
  {
    "id": "tkp-ant-023",
    "subPattern": "kesetiaan-ideologi-pancasila-uud-nkri",
    "difficulty": "sulit",
    "prompt": "Anda mendapat tugas menyusun modul sosialisasi wawasan kebangsaan bagi generasi Z di daerah dengan tingkat polarisasi media sosial cukup tinggi. Sebagian peserta menganggap materi Pancasila di buku ajar lama terlalu doktrinal-menghafal serta membosankan. Agar komitmen terhadap ideologi Pancasila dan NKRI mengakar kuat secara substansial, rancangan modul Anda mengutamakan ...",
    "options": [
      "Mewajibkan seluruh peserta menghafal urutan pasal beserta tahun rapat bersejarah tanpa diskusi permasalahan nyata sekarang",
      "Menghapus penyebutan nilai-nilai Pancasila sepenuhnya lalu menggantinya hanya dengan teori manajemen bisnis negara asing",
      "Menghadirkan studi kasus nyata keseharian Gen Z (keadilan ekonomi digital, antikorupsi, toleransi, bela negara profesi) dalam dialog partisipatif agar relevansi nilai Pancasila terasa konkret bagi mereka",
      "Menyampaikan materi dalam format ceramah satu arah berdurasi empat jam penuh tanpa ruang tanya jawab peserta",
      "Memisahkan peserta ke dalam kelas-kelas berdasarkan kesamaan latar belakang suku agar diskusi terasa lebih aman"
    ],
    "optionScores": [
      3,
      1,
      5,
      2,
      4
    ],
    "answer": "C",
    "explanation": "Ideologi Pancasila paling kokoh tertanam di generasi muda ketika dihadirkan sebagai nilai hidup solutif (living ideology) yang menjawab keadilan sosial, hak digital, dan kerukunan nyata mereka melalui dialog kritis—bukan indoktrinasi hafalan kaku (skor 5).",
    "tip": "Internalisasi Pancasila pada generasi muda paling efektif lewat dialog kritis dan studi kasus nyata zaman mereka."
  },
  {
    "id": "tkp-ant-024",
    "subPattern": "kesetiaan-ideologi-pancasila-uud-nkri",
    "difficulty": "sulit",
    "prompt": "Setelah pensiun dari instansi pemerintah tempat Anda bekerja, seorang mantan pejabat berpengaruh mengajak sekelompok alumni pegawai mendirikan koperasi yang di dalamnya diam-diam disisipi kajian menolak keabsahan pemerintahan sah serta menggalang dana untuk gerakan intoleran pemecah persatuan. Begitu mengetahuinya melalui undangan resmi alumni, sikap tegas Anda adalah ...",
    "options": [
      "Ikut mendaftar anggota koperasi demi menjaga hormat kepada mantan pimpinan dulu asal tidak pernah hadir saat sesi kajian tertutupnya",
      "Menyetor dana simpanan awal sedikit saja supaya nama Anda tidak dianggap memutus tali silaturahmi kantor lama",
      "Diam mengabaikan undangan tanpa memperingatkan rekan pegawai aktif lain yang juga berpotensi tertipu ikut menyumbang dana",
      "Menolak bergabung secara tegas, memperingatkan rekan sejawat secara bijak terhadap agenda tersembunyi di balik nama koperasi alumni tersebut, dan melaporkan informasi indikasi penggalangan dana gerakan pemecah belah NKRI ke otoritas pembina/keamanan resmi",
      "Menyebarluaskan fitnah serangan pribadi yang tidak terkait kasus koperasi tersebut terhadap mantan pejabat itu"
    ],
    "optionScores": [
      2,
      1,
      3,
      5,
      4
    ],
    "answer": "D",
    "explanation": "Pendanaan radikalisme kerap berkedok kegiatan sosial, alumni, atau koperasi ekonomi. Ketegasan memutus keterlibatan meski melibatkan bekas atasan terhormat, melindungi sesama rekan dari jebakan finansial ekstremisme, serta melapor ke otoritas berwenang menjaga keutuhan negara (skor 5).",
    "tip": "Waspadai penyalahgunaan wadah ekonomi/sosial/alumni sebagai kedok penggalangan gerakan anti-NKRI; tolak tegas, lindungi rekan, dan lapor otoritas."
  },
  {
    "id": "tkp-ant-025",
    "subPattern": "pencegahan-radikalisme-digital-dan-hoaks-kebencian",
    "difficulty": "mudah",
    "prompt": "Di beranda media sosial Anda muncul video pendek dengan narasi provokatif bahwa suatu daerah tertentu sengaja dianaktirikan pemerintah pusat karena faktor keyakinan penduduknya, disertai ajakan melakukan kerusuhan penolakan aparat daerah. Sikap bela ideologi di ruang digital yang tepat adalah ...",
    "options": [
      "Menekan tombol suka dan membagikannya ulang dengan komentar pendek sekadar menanyakan pendapat pengikut akun Anda",
      "Membiarkannya menyebar dan ikut berkomentar setuju sebagian supaya kelihatan peduli pada nasib daerah tertinggal",
      "Membalas di kolom komentar dengan menghina balik suku dan agama pengunggah video awal tersebut",
      "Menyimpan tautan video tersebut untuk ditonton berulang kali bersama keluarga di ruang tamu malam ini",
      "Tidak ikut menyebarkan konten provokatif, memanfaatkan fitur lapor (report) pada platform terhadap ujaran kebencian/hasutan kekerasan serta kanal aduan resmi pemerintah (Komdigi/siber), dan membagikan narasi fakta resmi pemersatu bila relevan"
    ],
    "optionScores": [
      1,
      2,
      3,
      4,
      5
    ],
    "answer": "E",
    "explanation": "Memutus amplifikasi algoritma hasutan kebencian dilakukan dengan tidak memberi interaksi positif/share, memakai fitur lapor konten berbahaya baik di platform maupun ke otoritas aduan konten nasional, dan memperkuat literasi fakta pemersatu (skor 5).",
    "tip": "Putus rantai konten SARA/hasutan kekerasan di media sosial: jangan like/share, segera report platform & aduan resmi."
  },
  {
    "id": "tkp-ant-026",
    "subPattern": "pencegahan-radikalisme-digital-dan-hoaks-kebencian",
    "difficulty": "mudah",
    "prompt": "Ketika menerima pesan berantai WhatsApp berlabel \"Diteruskan berkali-kali\" yang menuduh salah satu tempat ibadah kelompok lain menyimpan senjata tanpa menyebutkan tanggal, lokasi valid, maupun konfirmasi kepolisian, langkah pencegahan hoaks kebencian Anda adalah ...",
    "options": [
      "Menahan pesan tidak diteruskan ke grup lain, mengecek klarifikasi fakta lewat kanal cek fakta/kepolisian resmi, dan mengingatkan pengirim secara sopan bahwa pesan belum terverifikasi tersebut berisiko memicu konflik horizontal",
      "Segera menyebarkannya ke grup RT dengan tambahan catatan 'katanya belum tentu benar tapi mari waspada bersama'",
      "Langsung menuduh pengurus tempat ibadah tersebut melalui status media sosial supaya cepat viral diselidiki warganet",
      "Mengubah sedikit nama kecamatan pada pesan berantai itu lalu meneruskannya untuk mengetes respons teman sekantor",
      "Menghapus obrolan diam-diam tanpa memedulikan bahaya jika pengirim pesan menyebarkannya ke puluhan grup warga lainnya"
    ],
    "optionScores": [
      5,
      2,
      1,
      3,
      4
    ],
    "answer": "A",
    "explanation": "Hoaks bertema SARA menjadi pemicu tercepat konflik sosial di masyarakat. Hentikan penyebaran, verifikasi kanal resmi otoritas keamanan/cek fakta, dan edukasi pengirim dengan sopan memutus rantai provokasi tepat di tingkat individu (skor 5).",
    "tip": "Jangan pernah meneruskan pesan berantai berbau SARA sekalipun diberi embel-embel 'sekadar waspada'; hentikan, verifikasi, dan edukasi."
  },
  {
    "id": "tkp-ant-027",
    "subPattern": "pencegahan-radikalisme-digital-dan-hoaks-kebencian",
    "difficulty": "sedang",
    "prompt": "Anda mengetahui bahwa sebuah akun anonim di media sosial lokal secara konsisten memproduksi meme dan potongan video bernada kebencian yang membenturkan sesama umat beragama demi menaikkan jumlah pengikut menjelang hari raya. Sebagai ASN yang peduli ketahanan ruang siber nasional, tindakan efektif dan sah adalah ...",
    "options": [
      "Membuat akun anonim tandingan khusus untuk melancarkan serangan perundungan balik kepada pengelola akun provokatif tersebut",
      "Mendokumentasikan tautan serta tangkapan layar unggahan provokatif secara rapi, melaporkannya melalui kanal pengaduan konten resmi pemerintah/kepolisian siber serta platform media sosial, dan aktif menyebarkan konten positif kerukunan berbasis fakta",
      "Mengikuti akun provokatif tersebut dan menuliskan komentar perdebatan tiap hari yang justru meningkatkan jangkauan algoritmanya",
      "Membiarkannya saja karena kebencian di kolom komentar internet dianggap lumrah terjadi di negara mana pun",
      "Menyebarkan daftar dugaan identitas pribadi warga yang dicurigai berada di balik akun anonim tanpa bukti penyelidikan resmi"
    ],
    "optionScores": [
      1,
      5,
      3,
      2,
      4
    ],
    "answer": "B",
    "explanation": "Debat emosional di akun provokatif justru menaikkan engagement algoritma platform. Langkah strategis tepat adalah mendokumentasikan bukti, melaporkan lewat mekanisme takedown resmi (platform & Aduan Konten/Siber Polri), serta mengisi ruang digital dengan kontra-narasi positif (skor 5).",
    "tip": "Jangan beri engagement pada akun penyebar kebencian; kumpulkan bukti, laporkan ke kanal siber/platform, dan perkuat kontra-narasi damai."
  },
  {
    "id": "tkp-ant-028",
    "subPattern": "pencegahan-radikalisme-digital-dan-hoaks-kebencian",
    "difficulty": "sedang",
    "prompt": "Saat membimbing pelatihan literasi digital untuk warga dan pelajar daerah, peserta bertanya bagaimana cara mengenali secara cepat narasi propaganda radikalisme terselubung di media sosial agar tidak terjebak rasa simpati palsu. Penjelasan paling tepat Anda berikan adalah ...",
    "options": [
      "Menjelaskan bahwa radikalisme digital selalu hanya menggunakan bendera kelompok bersenjata dan foto senjata api terbuka",
      "Menyarankan peserta tidak membaca berita atau diskusi sosial politik apa pun dari internet selamanya",
      "Mengenalkan ciri khas pola propaganda digital: eksploitasi rasa ketidakadilan sepihak, narasi biner 'kami benar mutlak vs mereka musuh jahat', dehumanisasi kelompok berbeda, pemotongan konteks dalil/fakta, serta ajakan eksklusif menjauhi masyarakat dan hukum",
      "Menyuruh peserta memblokir seluruh akun pemuka agama maupun tokoh masyarakat di media sosial tanpa pengecualian",
      "Mengajarkan bahwa hanya media cetak kertas yang sah dipercaya sedangkan semua informasi di internet otomatis berbahaya"
    ],
    "optionScores": [
      2,
      3,
      5,
      1,
      4
    ],
    "answer": "C",
    "explanation": "Propaganda modern jarang langsung menampilkan senjata api; ia memanfaatkan manipulasi emosi, narasi hitam-putih (us-vs-them), dehumanisasi, dan ajakan memutus relasi sosial/hukum negara. Mengenali pola narasi ini membentengi daya kritis masyarakat (skor 5).",
    "tip": "Kenali pola hulu narasi ekstrem: dikotomi hitam-putih 'kami vs musuh', dehumanisasi, pemutusan konteks fakta, dan ajakan eksklusif."
  },
  {
    "id": "tkp-ant-029",
    "subPattern": "pencegahan-radikalisme-digital-dan-hoaks-kebencian",
    "difficulty": "sedang",
    "prompt": "Anggota keluarga dekat Anda yang aktif di grup komunitas perumahan sering memercayai artikel konspirasi ekstrem tanpa sumber jelas lalu berencana membagikannya ke grup warga besar untuk memprovokasi penolakan program pemerintah daerah. Cara bijak menghentikan penyebarannya dari lingkungan terdekat adalah ...",
    "options": [
      "Memblokir nomor anggota keluarga tersebut dari seluruh kontak Anda dan memutus komunikasi keluarga besar",
      "Memarahinya di depan tamu keluarga saat kumpul makan malam bahwa pemikirannya sudah terpapar paham terlarang",
      "Membiarkannya membagikan artikel provokatif ke grup warga dahulu supaya ia malu sendiri saat dikoreksi ketua RT",
      "Mengajaknya berdiskusi santai empat mata dengan penuh rasa hormat keluarga, membedah ciri ketidakvalidan artikel konspirasi itu bersama sumber faktual resmi, dan menumbuhkan kebiasaan periksa fakta sebelum berbagi",
      "Meminjam ponselnya diam-diam saat ia lengah untuk menghapus seluruh grup percakapannya tanpa izin"
    ],
    "optionScores": [
      2,
      3,
      1,
      5,
      4
    ],
    "answer": "D",
    "explanation": "Ketahanan ideologis berawal dari keluarga. Pendekatan empatik penuh respek secara privat membantu anggota keluarga berpikir kritis membongkar hoaks konspirasi tanpa memicu sikap defensif keras akibat dipermalukan di depan umum (skor 5).",
    "tip": "Bentengi keluarga dari paparan narasi konspirasi kebencian lewat dialog hangat empat mata berbasis cek fakta terbuka."
  },
  {
    "id": "tkp-ant-030",
    "subPattern": "pencegahan-radikalisme-digital-dan-hoaks-kebencian",
    "difficulty": "sedang",
    "prompt": "Di halaman komentar artikel berita keberhasilan proyek pelayanan publik di instansi Anda, muncul puluhan komentar seragam dari akun-akun baru mencurigakan (bot) yang kompak melontarkan ujaran kebencian SARA guna membelokkan perhatian pembaca. Strategi tim komunikasi digital Anda yang paling profesional adalah ...",
    "options": [
      "Membalas marah setiap satu per satu akun bot tersebut seharian penuh di kolom komentar berita umum",
      "Menonaktifkan langsung seluruh publikasi berita keberhasilan instansi selama enam bulan karena takut diserang komentar bot",
      "Membuat seratus akun palsu baru pegawai dinas untuk saling beradu komentar memuji instansi secara anonim",
      "Menyetujui komentar kebencian SARA itu tampil teratas dengan anggapan semua komentar publik harus selalu dibalas ramah",
      "Mengaktifkan moderasi komentar anti-ujaran kebencian/SARA sesuai kebijakan platform, melaporkan pola akun bot terkoordinasi, dan tetap menyajikan informasi layanan faktual transparan"
    ],
    "optionScores": [
      2,
      3,
      1,
      4,
      5
    ],
    "answer": "E",
    "explanation": "Moderasi konten ujaran kebencian SARA (bukan membungkam kritik kebijakan yang sah) melindungi ruang digital publik dari rekayasa polarisasi akun terotomatisasi (bot) sekaligus menjaga fokus komunikasi pelayanan publik faktual (skor 5).",
    "tip": "Bedakan kritik kebijakan yang sah dari serangan bot ujaran SARA; moderasi hasutan kebencian SARA dan laporkan aktivitas terkoordinasi."
  },
  {
    "id": "tkp-ant-031",
    "subPattern": "pencegahan-radikalisme-digital-dan-hoaks-kebencian",
    "difficulty": "sulit",
    "prompt": "Sebuah komunitas daring pekerja muda daerah yang awalnya fokus membahas pengembangan karier tiba-tiba disusupi konten ajakan donasi ke rekening perorangan dengan narasi 'bantuan darurat kemanusiaan' yang ternyata setelah Anda cek di situs resmi otoritas berafiliasi dengan jaringan pendukung kelompok terlarang. Sikap cerdas dan berintegritas Anda adalah ...",
    "options": [
      "Menahan diri tidak mentransfer dana, mengamankan bukti tautan dan rekening untuk dilaporkan ke otoritas berwenang serta admin grup, dan mengajak berdonasi melalui lembaga sosial resmi teraudit",
      "Tetap mentransfer sedikit uang donasi karena menaruh niat baik kemanusiaan tanpa memedulikan kejelasan lembaga penerimanya",
      "Mengumumkan langsung ke seluruh pengikut Anda bahwa admin komunitas karier tersebut adalah teroris tanpa koordinasi pemeriksaan terlebih dahulu",
      "Membatalkan niat bersedekah atau membantu korban bencana kemanusiaan apa pun selamanya karena takut salah salur",
      "Mengingatkan pelan-pelan di grup bahwa rekening pribadi tidak meyakinkan tetapi membiarkan ajakan penggalangan dana terus berjalan sebulan"
    ],
    "optionScores": [
      5,
      1,
      3,
      2,
      4
    ],
    "answer": "A",
    "explanation": "Penyaluran donasi kemanusiaan ilegal berkedok empati merupakan jalur pendanaan radikalisme klasik (charity abuse). Menghentikan aliran dana, melapor bukti ke otoritas berwenang (anti-pencucian uang/pendanaan terorisme), serta mengedukasi kanal donasi legal berizin menyatukan kewaspadaan hukum dan kemanusiaan sejati (skor 5).",
    "tip": "Lindungi niat kemanusiaan dari penyalahgunaan pendanaan ekstremis: salurkan hanya ke lembaga resmi berizin dan laporkan penggalangan terindikasi terlarang."
  },
  {
    "id": "tkp-ant-032",
    "subPattern": "pencegahan-radikalisme-digital-dan-hoaks-kebencian",
    "difficulty": "sulit",
    "prompt": "Anda bertugas di dinas informasi daerah dan melihat algoritma rekomendasi video singkat sedang mendorong tren konten 'sejarah tandingan palsu' yang memanipulasi fakta perjuangan bangsa untuk membangkitkan permusuhan antaretnis serta mendiskreditkan persatuan nasional di kalangan pemilih muda. Langkah kontra-narasi strategis paling berdampak yang Anda gagas adalah ...",
    "options": [
      "Mengusulkan penutupan seluruh akses aplikasi video singkat di wilayah kabupaten tanpa edukasi media kepada pemuda",
      "Menggandeng sejarawan tepercaya, pendidik, dan kreator muda lokal untuk memproduksi konten tandingan (kontra-narasi) yang akurat secara historis, dikemas menarik bahasa Gen Z, serta diperkuat dialog literasi kritis di sekolah dan komunitas",
      "Membuat surat bantahan teks resmi berformat surat edaran birokratis sepanjang sepuluh halaman dan mengunggah PDF-nya saja",
      "Membiarkan konten manipulasi sejarah itu beredar karena generasi muda dianggap tidak terlalu peduli isu sejarah bangsa",
      "Mengubah fakta sejarah tandingan lain secara sepihak tanpa rujukan ilmiah supaya audiens muda lebih menyukainya"
    ],
    "optionScores": [
      2,
      5,
      4,
      3,
      1
    ],
    "answer": "B",
    "explanation": "Disinformasi sejarah dan narasi kebencian di algoritma video pendek hanya bisa dimenangkan di ruang yang sama dengan konten tandingan yang akurat-ilmiah, kolaboratif bersama kreator/sejarawan lokal, dan relevan gaya komunikasi generasi muda (skor 5).",
    "tip": "Lawan manipulasi algoritma propaganda sejarah palsu lewat kontra-narasi ilmiah bersama kreator dan pendidik dalam bahasa akrab generasi muda."
  },
  {
    "id": "tkp-ant-033",
    "subPattern": "pendekatan-persuasif-edukatif-dan-pelaporan-prosedural",
    "difficulty": "mudah",
    "prompt": "Saat mendapati rekan kerja baru baru pertama kali membagikan artikel dari situs tak jelas yang bernada sedikit intoleran karena polos tidak mengecek sumbernya, prioritas langkah bijak Anda terlebih dahulu adalah ...",
    "options": [
      "Langsung memarahinya sebagai pemecah belah NKRI di depan seluruh peserta apel pagi kantor keesokan harinya",
      "Membiarkannya terus berbagi artikel serupa setiap pekan supaya lama-kelamaan atasan sendiri yang memutasi dirinya",
      "Mengajaknya berdiskusi santun empat mata untuk menjelaskan ketidakakuratan sumber serta dampak intoleransinya secara edukatif-persuasif, memintanya menarik unggahan bila perlu, dan tetap memantau pembinaannya",
      "Menyebarkan tangkapan layar pesannya ke grup dinas kabupaten lain sebagai bahan lelucon pegawai kurang literasi",
      "Langsung meminta aparat kepolisian menahannya hari itu juga sebelum berbicara mengklarifikasi pemahamannya"
    ],
    "optionScores": [
      2,
      1,
      5,
      3,
      4
    ],
    "answer": "C",
    "explanation": "Pendekatan proporsional membedakan kekeliruan awal akibat ketidaktahuan polos dari keterlibatan jaringan radikal keras: edukasi persuasif empat mata dan perbaikan cepat menyembuhkan celah literasi tanpa memicu perlawanan balik yang kontraproduktif (skor 5).",
    "tip": "Untuk kekeliruan awal akibat ketidaktahuan, utamakan edukasi persuasif empat mata disertai klarifikasi; simpan eskalasi keras untuk ancaman nyata atau berulang."
  },
  {
    "id": "tkp-ant-034",
    "subPattern": "pendekatan-persuasif-edukatif-dan-pelaporan-prosedural",
    "difficulty": "mudah",
    "prompt": "Sebaliknya, apabila setelah berkali-kali diberi penjelasan santun dan edukasi oleh tim pembina, seorang pegawai tetap aktif merekrut pegawai muda masuk ke forum penolakan ideologi Pancasila serta menanamkan kebencian terhadap konstitusi negara, langkah prosedural wajib Anda adalah ...",
    "options": [
      "Tetap menasihatinya secara pribadi berulang kali saja bertahun-tahun tanpa pernah melapor ke atasan berwenang",
      "Membentuk kelompok pegawai tandingan untuk mengintimidasi secara fisik pegawai tersebut di area parkir kantor",
      "Meminta dipindahkan ke unit lain diam-diam supaya Anda tidak perlu berurusan lagi dengan aktivitas perekrutan tersebut",
      "Melaporkan temuan beserta bukti autentik kronologi aktivitasnya secara resmi melalui mekanisme pengaduan berwenang (atasan langsung, Inspektorat/WBS, atau satuan tugas pengawasan ASN) agar ditindak tegas sesuai disiplin hukum yang berlaku",
      "Menghapus seluruh grup komunikasi unit kerja lalu menggantinya tanpa mengajak pegawai tersebut saja"
    ],
    "optionScores": [
      4,
      1,
      3,
      5,
      2
    ],
    "answer": "D",
    "explanation": "Ketika pendekatan persuasif diabaikan dan berubah menjadi aktivitas aktif terstruktur (rekrutmen anti-Pancasila), ketegasan negara menuntut pelaporan berbukti lengkap ke otoritas pengawasan disiplin ASN agar penindakan hukum berjalan sah dan menghentikan paparan (skor 5).",
    "tip": "Bila perekrutan ideologi ekstrem berjalan aktif berulang meski telah diingatkan, lakukan eskalasi prosedural berbukti ke atasan dan pengawas ASN."
  },
  {
    "id": "tkp-ant-035",
    "subPattern": "pendekatan-persuasif-edukatif-dan-pelaporan-prosedural",
    "difficulty": "sedang",
    "prompt": "Sebuah desa binaan tempat Anda mendampingi program pemberdayaan memiliki beberapa warga mantan narapidana kasus ekstremisme yang sudah menyatakan ikrar setia kembali kepada NKRI setelah program deradikalisasi resmi selesai dan kini berusaha berbaur membuka usaha bengkel kecil. Sikap sosial budaya dan pencegahan berkelanjutan yang paling tepat adalah ...",
    "options": [
      "Menolak melayani permohonan administrasi kependudukan keluarganya di kantor kelurahan untuk selamanya",
      "Memasang spanduk pengawasan khusus di depan bengkelnya agar warga sekitar terus curiga menjauhinya",
      "Membiarkannya bekerja sama tanpa arah komunikasi sama sekali maupun mendorong penolakan halus warga desa",
      "Meminta aparat langsung menangkapnya kembali tanpa bukti pelanggaran baru karena riwayat masa lalunya",
      "Mendukung reintegrasi sosial yang adil dan aman (melayani hak sipilnya setara, membina pemberdayaan ekonomi positif bersama tokoh warga) sambil tetap menjaga koordinasi kewaspadaan wajar bersama pemangku wilayah terkait"
    ],
    "optionScores": [
      1,
      2,
      3,
      4,
      5
    ],
    "answer": "E",
    "explanation": "Keberhasilan deradikalisasi nasional bergantung pada penerimaan reintegrasi sosial dan kemandirian ekonomi mantan pelaku yang telah berikrar setia NKRI—pengucilan sosial justru mendorong mereka kembali ke jaringan lama (recidivism), sehingga pemberdayaan adil dan koordinasi wajar adalah kunci pencegahan jangka panjang (skor 5).",
    "tip": "Dukung reintegrasi sosial dan ekonomi yang bermartabat bagi eks-napiter yang setia NKRI guna mencegah mereka terisolasi kembali."
  },
  {
    "id": "tkp-ant-036",
    "subPattern": "pendekatan-persuasif-edukatif-dan-pelaporan-prosedural",
    "difficulty": "sedang",
    "prompt": "Ketika mengadukan indikasi aktivitas penyebaran paham radikalisme melalui saluran pelaporan internal instansi, alasan utama Anda wajib menjaga kerahasiaan proses laporan serta menghindari penyebaran spekulasi nama terduga ke gosip ruangan sebelum ada verifikasi resmi adalah ...",
    "options": [
      "Menjaga asas praduga tak bersalah agar tidak memfitnah pihak tak bersalah sekaligus memastikan barang bukti tidak terhapus atau dihilangkan sebelum tim berwenang memeriksa",
      "Supaya pelapor bisa diam-diam mencabut laporannya sewaktu-waktu apabila ditawari permintaan maaf lisan",
      "Agar pegawai lain di kantor tetap dapat menebak-nebak siapa pelaku yang sedang diselidiki tim pengawas",
      "Karena proses pelaporan resmi baru boleh diketahui pimpinan apabila sudah beredar terlebih dahulu di media sosial lokal",
      "Supaya seluruh rekan ruangan memusuhi secara merata setiap pegawai baru sebelum pembuktian tuntas"
    ],
    "optionScores": [
      5,
      2,
      1,
      3,
      4
    ],
    "answer": "A",
    "explanation": "Kerahasiaan prosedural pelaporan melindungi dua sisi sekaligus: melindungi kehormatan seseorang dari fitnah dini jika belum terbukti (praduga tak bersalah), sekaligus mengamankan efektivitas penelusuran jaringan tanpa kebocoran target (skor 5).",
    "tip": "Kerahasiaan dalam pelaporan kasus radikalisme melindungi asas praduga tak bersalah dan menjaga bukti penyelidikan tidak rusak."
  },
  {
    "id": "tkp-ant-037",
    "subPattern": "pendekatan-persuasif-edukatif-dan-pelaporan-prosedural",
    "difficulty": "sedang",
    "prompt": "Dalam diskusi bersama tokoh pemuda kecamatan, muncul anggapan bahwa kewaspadaan terhadap radikalisme hanya tugas aparat keamanan pusat (BNPT/TNI/Polri) sehingga aparatur sipil daerah maupun warga biasa cukup fokus urusan ekonomi saja. Pendekatan edukatif Anda untuk meluruskan pandangan ini adalah ...",
    "options": [
      "Menyetujui penuh anggapan itu supaya aparatur daerah fokus pada urusan surat perizinan dan pembangunan jalan saja",
      "Menjelaskan konsep kolaborasi seluruh komponen bangsa: aparat keamanan menindak ancaman hukum dan intelijen, sedangkan ASN serta warga berperan vital membina kerukunan hulu, moderasi beragama, pelayanan adil, serta ketahanan literasi digital komunitas",
      "Meminta setiap warga serta pegawai sipil daerah membeli peralatan pemantau siber pribadi untuk menyelidiki tetangga sendiri",
      "Mengatakan bahwa masalah ekonomi tidak ada hubungannya sama sekali dengan kerentanan kelompok muda terhadap propaganda ekstrem",
      "Mengharuskan tokoh pemuda membentuk satuan bersenjata keamanan lingkungan swakarsa sendiri tanpa izin polisi"
    ],
    "optionScores": [
      2,
      5,
      3,
      1,
      4
    ],
    "answer": "B",
    "explanation": "Pencegahan radikalisme adalah tanggung jawab pentaheliks (whole-of-society): keamanan fisik-hukum di tangan aparat resmi, sedangkan pembangunan ketahanan sosial, keadilan kesejahteraan, dan moderasi di tangan birokrasi sipil serta masyarakat (skor 5).",
    "tip": "Ketahanan ideologis bersifat kolaboratif: aparat menjaga penegakan hukum keamanan, sementara birokrasi sipil dan warga memperkuat kerukunan, keadilan layanan, dan literasi."
  },
  {
    "id": "tkp-ant-038",
    "subPattern": "pendekatan-persuasif-edukatif-dan-pelaporan-prosedural",
    "difficulty": "sedang",
    "prompt": "Anda mendapat informasi tepercaya dari warga mengenai rencana kedatangan oknum pembicara yang berulang kali memicu konflik intoleransi keras di daerah lain untuk mengisi acara terbuka di fasilitas umum kelurahan binaan Anda besok malam. Sebagai aparatur penghubung wilayah, tindakan prosedural tepat Anda adalah ...",
    "options": [
      "Menyebarluaskan pesan singkat ajakan pengerahan massa warga guna membubarkan paksa acara besok malam secara mandiri",
      "Diam saja karena jadwal acara fasilitas umum sepenuhnya dianggap urusan penyewa ruangan selama membayar biaya sewa gedung",
      "Segera menyampaikan informasi awal disertai rekam jejak objektif kepada pimpinan wilayah, FKUB, dan aparat keamanan setempat agar dilakukan verifikasi izin, pembinaan dialogis kepada panitia penyelenggara, atau langkah pengamanan hukum terukur",
      "Menghubungi oknum pembicara itu langsung dengan nomor anonim dan melontarkan ancaman agar tidak datang ke kelurahan Anda",
      "Memutus aliran listrik gedung pertemuan kelurahan secara diam-diam lima menit sebelum acara dimulai"
    ],
    "optionScores": [
      2,
      1,
      5,
      3,
      4
    ],
    "answer": "C",
    "explanation": "Deteksi dini potensi konflik horizontal disalurkan cepat ke otoritas kewilayahan, FKUB, dan aparat berwenang untuk penilaian risiko sah dan langkah persuasif-prosedural—menghindari aksi main hakim sendiri maupun pembiaran berisiko kerusuhan (skor 5).",
    "tip": "Salurkan deteksi dini potensi konflik intoleransi ke otoritas wilayah, FKUB, dan aparat resmi; hindari main hakim sendiri."
  },
  {
    "id": "tkp-ant-039",
    "subPattern": "pendekatan-persuasif-edukatif-dan-pelaporan-prosedural",
    "difficulty": "sulit",
    "prompt": "Sebuah laporan pengaduan masyarakat menuduh rekan kerja Anda berindikasi radikal semata-mata karena penampilannya berjenggot/berbusana agamis rapi, padahal sehari-hari rekan tersebut sangat ramah kepada semua rekan lintas agama, disiplin bekerja, dan aktif mengikuti upacara serta pengabdian masyarakat. Sebagai pengelola klarifikasi aduan yang berintegritas dan adil, sikap Anda adalah ...",
    "options": [
      "Langsung menjatuhkan hukuman mutasi disiplin kepada rekan tersebut demi meredam kecemasan sepihak masyarakat pelapor",
      "Membiarkan pelaporan itu tertumpuk tanpa klarifikasi apa pun hingga rekan Anda merasa tersisih oleh gosip kantor",
      "Meminta rekan tersebut mengubah total gaya penampilan agamisnya secara paksa meskipun berpakaian rapi sesuai kode etik ASN",
      "Menilai objektif berdasar indikator perilaku dan rekam jejak nyata bebas stereotip fisik, membebaskannya secara adil dari tuduhan keliru, serta mengedukasi pelapor perbedaan kesalehan dan radikalisme",
      "Mencaci maki pelapor secara kasar karena dianggap menyebarkan fitnah tidak berdasar tentang penampilan keagamaan orang"
    ],
    "optionScores": [
      1,
      2,
      3,
      5,
      4
    ],
    "answer": "D",
    "explanation": "Kewaspadaan anti-radikalisme wajib tetap objektif dan tidak boleh jatuh menjadi prasangka dangkal terhadap simbol kesalehan beragama (anti-stereotip/Islamophobia maupun sentimen agama apa pun). Evaluasi berbasis fakta perilaku nyata menjaga keadilan dan kehormatan ASN taat beragama yang nasionalis (skor 5).",
    "tip": "Bedakan kesalehan penampilan keagamaan dengan radikalisme! Evaluasi wajib berbasis indikator perilaku/ideologi nyata, bebas stereotip."
  },
  {
    "id": "tkp-ant-040",
    "subPattern": "pendekatan-persuasif-edukatif-dan-pelaporan-prosedural",
    "difficulty": "sulit",
    "prompt": "Di tengah meningkatnya ketegangan geopolitik internasional, beberapa diskusi daring internal pegawai ikut memanas dengan mengaitkan konflik luar negeri untuk menyerang rekan berbeda agama di Indonesia seolah bertanggung jawab atas konflik jauh tersebut. Sebagai bagian dari aparatur perekat bangsa, intervensi edukatif paling bijak adalah ...",
    "options": [
      "Ikut menyalahkan rekan berbeda keyakinan di dalam negeri sebagai bagian dari konflik geopolitik negara asing",
      "Menutup seluruh akses informasi berita internasional dari komputer kerja kantor supaya pegawai tidak membaca berita global",
      "Mengeluarkan kebijakan larangan mutlak pegawai berempati atau membicarakan isu kemanusiaan internasional sama sekali",
      "Berpihak penuh pada salah satu kubu debat internal pegawai yang suaranya paling ramai di grup pesan kantor",
      "Mengajak semua pihak tetap berempati kemanusiaan yang beradab tanpa memindahkan permusuhan konflik luar negeri ke sesama saudara sebangsa di Indonesia, meneguhkan ukhuwah wathaniyah serta moderasi ruang kerja yang damai"
    ],
    "optionScores": [
      1,
      2,
      3,
      4,
      5
    ],
    "answer": "E",
    "explanation": "Kedewasaan kebangsaan memisahkan empati kemanusiaan internasional dari permusuhan horizontal di dalam negeri. Tidak menyeret konflik geopolitik luar menjadi sentimen kebencian antarwarga Indonesia mencerminkan karakter perekat bangsa berjiwa Pancasila (skor 5).",
    "tip": "Jaga persaudaraan sebangsa (ukhuwah wathaniyah): jangan biarkan isu konflik global menyeret permusuhan antarwarga di Indonesia."
  }
];

export const antiRadikalismeQuestions: readonly Question[] = buildTkpPatternQuestions(
  "anti-radikalisme",
  antiRadikalismeDrafts,
);
