import {
  buildTkpPatternQuestions,
  type Question,
  type TkpQuestionDraft,
} from "@/modules/question-bank/domain/question";
import { antiRadikalismeBatch2Drafts } from "./batches/06-anti-radikalisme-batch-2";
import { antiRadikalismeBatch3Drafts } from "./batches/06-anti-radikalisme-batch-3";

const antiRadikalismeDrafts: readonly TkpQuestionDraft[] = [
  {
    "id": "tkp-ant-001",
    "subPattern": "deteksi-dini-dan-respons-konten-ekstrem",
    "difficulty": "mudah",
    "prompt": "Seorang rekan kerja tiba-tiba membagikan tautan video khotbah atau ajakan tertutup di grup percakapan unit kantor yang membenarkan aksi kekerasan terhadap kelompok berbeda pandangan demi perubahan sistem negara. Langkah paling tepat Anda adalah ...",
    "options": [
      "Menolak konten kekerasan itu di grup secara sopan, melarang penyebaran ulang, lalu melapor ke atasan unit.",
      "Mendiamkan kiriman video di grup kantor karena merasa isi khotbah termasuk ranah keyakinan pribadi tiap pegawai.",
      "Menyimpan tautan video tersebut lalu meneruskannya ke grup alumni untuk meminta komentar bebas soal perubahan sistem.",
      "Menghubungi rekan pengirim secara pribadi dan santun agar segera menghapus video itu demi ketenangan grup kerja.",
      "Memilih keluar diam-diam dari grup percakapan dan menghapus tautan video di ponsel pribadi demi menghindari masalah."
    ],
    "optionScores": [
      5,
      2,
      1,
      4,
      3
    ],
    "answer": "A",
    "explanation": "Menolak narasi kekerasan secara sopan di ruang kerja sekaligus melaporkannya ke atasan memutus penyebaran konten dan menjalankan deteksi dini prosedural. Sekadar menegur pengirim secara pribadi tanpa koreksi di grup dan pelaporan resmi masih berisiko membiarkan paham ekstrem menyebar diam-diam.",
    "tip": "Jangan membiarkan propaganda kekerasan beredar diam-diam di lingkungan kerja; tolak tegas secara santun dan laporkan lewat jalur resmi."
  },
  {
    "id": "tkp-ant-002",
    "subPattern": "deteksi-dini-dan-respons-konten-ekstrem",
    "difficulty": "mudah",
    "prompt": "Ketika merapikan rak bacaan umum di ruang tunggu pelayanan warga, Anda menemukan beberapa selebaran anonim yang tidak berizin berisi hasutan kebencian terhadap warga penganut keyakinan tertentu dan seruan memboikot pajak negara. Tindakan tepat Anda adalah ...",
    "options": [
      "Memotret isi selebaran lalu mengunggahnya ke status media sosial pribadi guna memancing debat publik soal boikot pajak.",
      "Menarik semua selebaran dari rak layanan sebagai barang bukti resmi lalu melapor ke atasan dan keamanan.",
      "Membiarkan selebaran tetap di rak tunggu karena mengira bacaan itu dititipkan tamu untuk dibaca bebas.",
      "Menyisihkan selebaran ke laci meja piket sambil mengingatkan petugas jaga secara santun soal kerapian area tunggu.",
      "Segera menyingkirkan seluruh selebaran gelap itu dari ruang tunggu agar tidak terbaca pengunjung, lalu merapikan rak."
    ],
    "optionScores": [
      1,
      5,
      2,
      3,
      4
    ],
    "answer": "B",
    "explanation": "Mengamankan seluruh selebaran sebagai bukti dan melaporkannya ke atasan serta satuan pengamanan mencegah paparan kepada warga sekaligus memungkinkan penelusuran pelaku. Sekadar menyingkirkannya agar tidak terbaca tanpa pengamanan barang bukti dan laporan formal berisiko membuat penyebaran serupa terulang.",
    "tip": "Jika menemukan materi propaganda kebencian di fasilitas publik, segera amankan dari jangkauan warga dan laporkan ke pimpinan/keamanan."
  },
  {
    "id": "tkp-ant-003",
    "subPattern": "deteksi-dini-dan-respons-konten-ekstrem",
    "difficulty": "sedang",
    "prompt": "Belakangan seorang rekan muda di tim Anda sering menyendiri saat istirahat, mulai rutin mengutip istilah pengkafiran terhadap sesama pegawai yang berbeda pendapat politik, serta menolak diajak berdiskusi masalah pekerjaan dengan rekan perempuan. Sebagai sesama rekan satu unit yang peka gejala dini, sikap paling tepat Anda adalah ...",
    "options": [
      "Mengajaknya makan siang berdua untuk menasihati secara santun agar menjaga etika kerja dan menghargai perbedaan di unit.",
      "Menjaga jarak aman dalam pergaulan santai lalu mengingatkan aturan kerja kolaboratif secara umum saat rapat mingguan tim.",
      "Mendekatinya lewat dialog empatik agar tetap inklusif di tim dan berkonsultasi dengan kepala unit untuk pendampingan.",
      "Membiarkan sikap eksklusifnya karena menganggap pandangan pribadi dan pergaulan rekan kerja tidak perlu dicampuri.",
      "Mengucilkannya dari seluruh kegiatan unit dan melarang pegawai lain menyapa agar ia keluar dari kantor."
    ],
    "optionScores": [
      4,
      3,
      5,
      2,
      1
    ],
    "answer": "C",
    "explanation": "Pendekatan dialog empatik menjaga rekan tidak makin terisolasi ke lingkaran ekstrem, sementara konsultasi dengan kepala unit memastikan pembinaan wawasan kebangsaan berjalan terarah. Sekadar menasihati secara pribadi tanpa dukungan pembina kepegawaian kurang memadai untuk menangani penolakan kerja lintas gender dan ujaran pengkafiran.",
    "tip": "Tangani gejala awal eksklusivisme rekan melalui dialog empatik yang tidak mengucilkan sekaligus koordinasi pembinaan berjenjang."
  },
  {
    "id": "tkp-ant-004",
    "subPattern": "deteksi-dini-dan-respons-konten-ekstrem",
    "difficulty": "sedang",
    "prompt": "Anak didik di sebuah sekolah binaan dinas Anda mulai mengikuti kanal diskusi gim daring tersembunyi yang rupanya menyisipkan ajakan intoleransi dan perundungan berbasis agama kepada pemain lain. Sebagai bagian dari tim pembinaan sekolah/pemuda, langkah tepat yang Anda koordinasikan adalah ...",
    "options": [
      "Menyampaikan imbauan umum saat apel sekolah supaya para pelajar lebih waspada memilih komunitas bermain daring.",
      "Bekerja sama dengan wali kelas dan guru BK menasihati pelajar agar segera meninggalkan komunitas gim bermuatan intoleransi demi masa depannya.",
      "Menghukum fisik pelajar yang bergabung di komunitas gim itu lalu memaksa mereka mengundurkan diri dari sekolah.",
      "Menggandeng guru BK dan orang tua memberi literasi kritis bagi pelajar lalu mengadukan kanal berbahaya ke otoritas digital.",
      "Menganggap aktivitas gim daring di luar jam sekolah sepenuhnya menjadi tanggungan keluarga serta penyedia internet."
    ],
    "optionScores": [
      3,
      4,
      1,
      5,
      2
    ],
    "answer": "D",
    "explanation": "Sinergi guru BK, orang tua, penguatan literasi kritis, dan pelaporan kanal berbahaya ke otoritas resmi melindungi pelajar sekaligus memutus jangkauan perekrut. Sekadar menasihati siswa lewat pihak sekolah untuk keluar grup tanpa pelibatan orang tua dan pelaporan kanal tetap membiarkan penyusupan berlangsung.",
    "tip": "Hadapi penyusupan radikalisme pada komunitas anak muda lewat sinergi sekolah-orang tua, literasi kritis, dan pelaporan kanal ilegal."
  },
  {
    "id": "tkp-ant-005",
    "subPattern": "deteksi-dini-dan-respons-konten-ekstrem",
    "difficulty": "sedang",
    "prompt": "Seorang pegawai kontrak baru terlihat menghadiri pengajian atau diskusi tertutup di luar kantor yang materi selebarannya secara eksplisit menolak hukum positif Indonesia dan menganjurkan mengabaikan aturan kedinasan pemerintah daerah. Sikap profesional Anda adalah ...",
    "options": [
      "Membiarkan kegiatannya di luar jam kerja karena pegawai kontrak dianggap bekerja sementara dan tidak memengaruhi birokrasi.",
      "Membuntutinya diam-diam pada malam hari untuk merekam wajah seluruh peserta diskusi lalu menyebarkan video ke media sosial.",
      "Mengajak pegawai kontrak baru itu berdialog santun guna meluruskan isi selebaran agar tetap mematuhi aturan kerja instansi.",
      "Membatasi interaksi sebatas urusan teknis pekerjaan agar tidak ikut terseret dalam kegiatan diskusi tertutup di luar kantor.",
      "Mengumpulkan fakta dan dokumen selebaran terverifikasi lalu menyampaikannya ke kepala instansi dan pengawas SDM guna klarifikasi objektif."
    ],
    "optionScores": [
      2,
      1,
      4,
      3,
      5
    ],
    "answer": "E",
    "explanation": "Mengumpulkan dokumen selebaran terverifikasi dan menyampaikannya ke pimpinan serta pengawas SDM menjamin proses klarifikasi objektif, adil, dan akuntabel. Sekadar menasihati pegawai secara informal tidak cukup menangani penolakan eksplisit terhadap hukum positif dan aturan kedinasan.",
    "tip": "Kumpulkan bukti faktual dan eskalasikan indikasi penolakan hukum/NKRI ke pimpinan dan unit pengawas SDM sesuai prosedur sah."
  },
  {
    "id": "tkp-ant-006",
    "subPattern": "deteksi-dini-dan-respons-konten-ekstrem",
    "difficulty": "sedang",
    "prompt": "Pada forum evaluasi program pemberdayaan desa, Anda mendapati salah satu kelompok relawan luar berniat menggelar pembinaan kepemudaan di balai desa tanpa surat pemberitahuan resmi, dengan topik tersembunyi yang berpotensi memecah kerukunan warga lokal dan menolak tata tertib desa. Tindakan preventif Anda adalah ...",
    "options": [
      "Mengajak kepala desa dan aparat mengecek izin serta materi acara, lalu menunda bila berpotensi memecah warga.",
      "Mengajak pemuda setempat berkumpul untuk mengusir rombongan relawan luar itu secara paksa sebelum memasuki halaman balai.",
      "Membiarkan kegiatan kepemudaan itu berlangsung asal relawan bersedia menanggung seluruh biaya konsumsi rapat bagi panitia.",
      "Menyampaikan catatan umum di forum evaluasi mengenai pentingnya tertib administrasi bagi seluruh kegiatan di balai desa.",
      "Menemui panitia relawan luar secara baik-baik agar menunda jadwal kegiatan sampai mereka membawa surat pengantar yang lengkap."
    ],
    "optionScores": [
      5,
      1,
      2,
      3,
      4
    ],
    "answer": "A",
    "explanation": "Berkoordinasi dengan kepala desa dan aparat wilayah untuk memverifikasi legalitas serta substansi materi secara tertib mencegah penyusupan paham pemecah belah tanpa memicu kegaduhan. Sekadar meminta panitia menunda acara secara lisan tanpa verifikasi terpadu berisiko membuat kegiatan hanya berpindah tempat.",
    "tip": "Cegah infiltrasi kegiatan pemecah belah di masyarakat lewat verifikasi legalitas-materi bersama perangkat desa dan alternatif program positif."
  },
  {
    "id": "tkp-ant-007",
    "subPattern": "deteksi-dini-dan-respons-konten-ekstrem",
    "difficulty": "sulit",
    "prompt": "Anda menerima laporan warga mengenai adanya pegawai teknis kantor yang kerap mengunggah kutipan artikel bernada dukungan terselubung kepada kelompok bersenjata ekstrem di akun media sosial pribadinya dengan alasan sekadar tertarik aspek geopolitik. Sebagai rekan atau koordinator pengawasan kepatuhan internal, sikap terbaik Anda adalah ...",
    "options": [
      "Memanggil pegawai teknis tersebut secara tertutup untuk memintanya segera menghapus seluruh unggahan geopolitik berisiko demi citra unit.",
      "Meneruskan aduan warga beserta tangkapan layar secara rahasia ke Inspektorat dan SDM untuk pemeriksaan objektif.",
      "Mengingatkannya secara umum tentang etika pegawai bermedia sosial lalu menunggu bukti lebih nyata sebelum melapor pimpinan.",
      "Menutup aduan warga itu karena berpendapat unggahan di akun pribadi merupakan kebebasan berekspresi di luar tugas kedinasan.",
      "Membenarkan kutipan kelompok bersenjata itu sebagai kajian geopolitik biasa lalu menutup aduan warga."
    ],
    "optionScores": [
      4,
      5,
      3,
      2,
      1
    ],
    "answer": "B",
    "explanation": "Meneruskan aduan disertai tangkapan layar secara rahasia ke Inspektorat dan SDM menjaga objektivitas pemeriksaan netralitas aparatur sekaligus menghindari spekulasi publik. Sekadar menyuruh pegawai menghapus unggahan demi citra unit mengaburkan proses pembuktian dan tidak mengevaluasi komitmen kebangsaannya.",
    "tip": "Tangani laporan indikasi radikalisme ASN secara rahasia, berbasis bukti autentik, melalui jalur resmi Inspektorat/Biro SDM."
  },
  {
    "id": "tkp-ant-008",
    "subPattern": "deteksi-dini-dan-respons-konten-ekstrem",
    "difficulty": "sulit",
    "prompt": "Dalam pelatihan penguatan karakter aparatur muda yang Anda dampingi, seorang peserta bertanya kritis dengan nada ragu apakah radikalisme memang benar berbahaya jika tidak berbentuk bom atau kekerasan fisik, melainkan baru sebatas ceramah eksklusif merendahkan pemeluk lain dan sistem negara. Jawaban edukatif paling tepat Anda adalah ...",
    "options": [
      "Menjawab singkat bahwa semua ceramah eksklusif sudah diatur pengawas kepegawaian lalu lekas beralih ke topik materi berikutnya.",
      "Memahami keraguan peserta sambil mengingatkan bahwa aturan disiplin pegawai melarang keterlibatan dalam kelompok eksklusif di kantor.",
      "Menghargai pertanyaannya dalam dialog terbuka lalu menguraikan bagaimana intoleransi hulu membuka jalan bagi radikalisme.",
      "Menyetujui bahwa selama tanpa kekerasan fisik, sikap merendahkan pemeluk lain dan sistem negara tergolong wajar.",
      "Menegur peserta dengan keras di depan kelas karena pertanyaan bernada ragu itu mencerminkan bibit sikap anti-kebangsaan."
    ],
    "optionScores": [
      3,
      4,
      5,
      1,
      2
    ],
    "answer": "C",
    "explanation": "Dialog terbuka yang menguraikan spektrum hulu-hilir—bagaimana intoleransi dan perendahan kelompok lain membuka jalan bagi ekstremisme—membangun kesadaran kritis tanpa membungkam pertanyaan. Sekadar mengutip aturan larangan disiplin belum menjawab akar keraguan intelektual peserta pelatihan.",
    "tip": "Pahami spektrum hulu ke hilir radikalisasi: intoleransi -> paham radikal anti-Pancasila -> aksi kekerasan; jawab keraguan lewat dialog edukatif."
  },
  {
    "id": "tkp-ant-009",
    "subPattern": "moderasi-beragama-dan-penolakan-intoleransi",
    "difficulty": "mudah",
    "prompt": "Salah seorang pegawai baru menolak bekerja dalam satu tim audit bersama rekan perempuan dan rekan yang berbeda agama dengan alasan prinsip kelompoknya melarang berinteraksi dekat dalam pekerjaan dengan kelompok luar. Sikap tegas namun santun Anda selaku ketua tim adalah ...",
    "options": [
      "Memarahi pegawai baru itu di lorong kantor karena dianggap membawa paham intoleran yang merusak keharmonisan anggota tim.",
      "Mengabulkan permintaannya dan merombak tim audit supaya ia hanya bekerja bersama rekan sesama jenis dan seagama.",
      "Mengajaknya berdialog empat mata mengenai pentingnya kerja tim lintas latar belakang sambil tetap menjaga posisi tugasnya di tim audit.",
      "Memaparkan tegas aturan kolaborasi aparatur lintas agama dan gender, mempertahankan susunan tim inklusif, lalu konsultasi pembina.",
      "Memberinya porsi analisis data mandiri di meja terpisah sementara waktu demi meredam gesekan sambil menunggu rapat pimpinan."
    ],
    "optionScores": [
      2,
      1,
      4,
      5,
      3
    ],
    "answer": "D",
    "explanation": "Menegakkan aturan kolaborasi aparatur lintas gender dan keyakinan sambil mempertahankan formasi tim serta berkonsultasi dengan pembina mencegah segregasi di birokrasi. Sekadar menasihati secara informal berisiko memberi celah pembiaran atas penolakan kerja sama publik.",
    "tip": "Tugas publik menuntut kolaborasi setara lintas gender dan keyakinan; tolak permintaan pengkotakan tim berbasis sentimen identitas."
  },
  {
    "id": "tkp-ant-010",
    "subPattern": "moderasi-beragama-dan-penolakan-intoleransi",
    "difficulty": "mudah",
    "prompt": "Dalam suasana diskusi santai di ruang istirahat kantor, seorang rekan melontarkan ucapan meremehkan tata cara ibadah agama rekan lainnya hingga rekan tersebut terlihat tidak nyaman. Sikap Anda yang membela moderasi dan persaudaraan kerja adalah ...",
    "options": [
      "Membalas ucapan rekan itu dengan lelucon yang ikut merendahkan tata cara ibadah kelompoknya pula supaya terasa adil.",
      "Ikut tersenyum tipis supaya suasana ruang istirahat tetap santun dan Anda tidak dicap terlalu kaku menanggapi candaan.",
      "Mengalihkan topik obrolan ke urusan jadwal kerja secara sopan saat itu juga lalu segera beranjak kembali menuju meja tugas sendiri.",
      "Menghampiri rekan yang tersinggung seusai istirahat untuk menenangkannya dan berjanji akan menegur pelaku di waktu terpisah.",
      "Mengingatkan secara beradab dan tegas di tempat bahwa ibadah tiap pemeluk wajib dihormati bukan bahan lelucon, lalu pulihkan suasana akrab."
    ],
    "optionScores": [
      1,
      2,
      3,
      4,
      5
    ],
    "answer": "E",
    "explanation": "Menghentikan candaan bernada meremehkan agama langsung di tempat secara beradab menegaskan batas etis ruang kerja inklusif sekaligus memulihkan keakraban tim. Menenangkan korban secara terpisah belakangan membiarkan pelaku dan saksi lain mengira pelecehan simbol keyakinan dapat ditoleransi.",
    "tip": "Hentikan candaan yang merendahkan keyakinan agama lain secara santun tapi jelas langsung di tempat."
  },
  {
    "id": "tkp-ant-011",
    "subPattern": "moderasi-beragama-dan-penolakan-intoleransi",
    "difficulty": "sedang",
    "prompt": "Seorang petugas pelayanan di unit Anda terlihat melayani jauh lebih ramah dan cepat kepada warga yang berpakaian atau menunjukkan simbol keagamaan sama dengannya, namun bersikap lamban serta dingin kepada warga berpenampilan berbeda. Langkah korektif paling tepat Anda sebagai rekan sejawat atau pengawas unit adalah ...",
    "options": [
      "Menegur bias secara pribadi demi layanan setara tanpa pilih kasih, mengawal perbaikan, dan melapor bila berulang.",
      "Mengambil alih pelayanan warga yang diperlakukan dingin dengan sigap lalu berpesan halus kepada rekan itu agar lebih sabar di loket.",
      "Mencatat kejadian tersebut dalam buku kendali harian tanpa melapor ke pimpinan demi menghindari ketegangan antarpetugas loket.",
      "Memaklumi sikap pilih kasih itu karena mengira petugas memang lebih cepat akrab secara alami dengan warga yang berpakaian serupa.",
      "Mengusulkan pembagian antrean loket terpisah berdasarkan kesamaan simbol agama warga dengan petugas di meja layanan."
    ],
    "optionScores": [
      5,
      4,
      3,
      2,
      1
    ],
    "answer": "A",
    "explanation": "Menegur bias secara personal berdasarkan prinsip pelayanan publik yang netral sekaligus memantau perbaikan—dan siap melaporkan bila berulang—melindungi hak warga secara berkelanjutan. Sekadar membantu warga yang terabaikan tanpa mengoreksi akar perlakuan diskriminatif membuat praktik pilih kasih tetap berlanjut.",
    "tip": "Layanan publik tidak boleh tebang pilih berdasar kesamaan agama atau penampilan; ingatkan rekan dan kawal perbaikannya."
  },
  {
    "id": "tkp-ant-012",
    "subPattern": "moderasi-beragama-dan-penolakan-intoleransi",
    "difficulty": "sedang",
    "prompt": "Menjelang hari besar keagamaan nasional, sekelompok kecil pegawai di grup pesan internal memperdebatkan sah tidaknya menyampaikan ucapan selamat kepada rekan pemeluk agama lain secara memanas hingga saling menuduh. Sikap moderat dan penyejuk paling bijaksana adalah ...",
    "options": [
      "Membisukan notifikasi grup kantor lalu menghindari seluruh perdebatan sampai pembahasan ucapan hari raya selesai sendiri.",
      "Meredam debat dengan mengajak saling menghormati keyakinan tanpa paksaan, lalu mengembalikan fokus pada tugas kerja.",
      "Mengajak anggota grup menyudahi perdebatan panas demi kenyamanan bersama menjelang hari besar tanpa memberi penguatan sikap toleransi.",
      "Memihak satu tafsir keagamaan pribadi lalu memaksa seluruh anggota grup menyetujuinya melalui perdebatan panjang yang tajam.",
      "Melarang pegawai mengucapkan selamat hari raya apa pun di kantor termasuk kepada rekan yang seagama dengannya."
    ],
    "optionScores": [
      3,
      5,
      4,
      1,
      2
    ],
    "answer": "B",
    "explanation": "Moderasi beragama menjaga keseimbangan antara penghormatan atas keyakinan masing-masing tanpa saling memaksa sekaligus mengembalikan fungsi grup kerja pada tugas profesional. Sekadar meminta perdebatan dihentikan demi kenyamanan sesaat tidak menanamkan kesadaran menghormati keragaman.",
    "tip": "Moderasi beragama menghormati ruang keyakinan masing-masing tanpa memaksa maupun saling mengkafirkan, sambil menjaga persaudaraan bersama."
  },
  {
    "id": "tkp-ant-013",
    "subPattern": "moderasi-beragama-dan-penolakan-intoleransi",
    "difficulty": "sedang",
    "prompt": "Di sebuah kantor cabang daerah, seorang pegawai berupaya memaksakan aturan berpakaian religius versi aliran pribadinya kepada pemohon layanan warga maupun staf magang lintas agama sebagai syarat tidak tertulis dilayani di loketnya. Sikap tepat Anda adalah ...",
    "options": [
      "Membiarkan aturan tidak tertulis itu berjalan di loketnya sepanjang belum ada warga yang mengajukan keberatan keras.",
      "Mendukung syarat berpakaian tersebut supaya seluruh pemohon layanan dan staf magang di kantor terlihat seragam.",
      "Menegaskan syarat layanan hanya merujuk ketentuan resmi negara, menghentikan pemaksaan itu bersama atasan, dan melayani semua warga.",
      "Mengambil alih layanan warga yang terhambat dan menasihati rekan secara pribadi agar lebih menghormati perbedaan busana pemohon di loket.",
      "Mengarahkan staf magang dan warga berpindah ke loket lain secara diam-diam supaya tidak memicu perdebatan langsung dengan pegawai itu."
    ],
    "optionScores": [
      2,
      1,
      5,
      4,
      3
    ],
    "answer": "C",
    "explanation": "Menghentikan aturan sepihak bersama atasan dan merujuk ketentuan resmi negara menjamin hak konstitusional setiap warga di loket pelayanan. Sekadar mengambil alih layanan warga dan menasihati secara pribadi tanpa otoritas atasan membiarkan syarat diskriminatif tetap berpotensi diterapkan.",
    "tip": "Tolak pemaksaan norma kelompok tertentu menjadi syarat layanan publik; rujuk hanya ketentuan resmi negara yang inklusif."
  },
  {
    "id": "tkp-ant-014",
    "subPattern": "moderasi-beragama-dan-penolakan-intoleransi",
    "difficulty": "sedang",
    "prompt": "Empat pilar utama moderasi beragama di Indonesia menekankan komitmen kebangsaan, toleransi, anti-kekerasan, serta penerimaan terhadap tradisi dan budaya lokal (akomodatif terhadap kearifan lokal). Manakah perilaku di kantor berikut yang mencerminkan keseimbangan pilar keempat moderasi tersebut?",
    "options": [
      "Menolak seluruh tradisi syukuran adat daerah seperti sedekah bumi karena dianggap tidak sesuai kehidupan modern.",
      "Membatasi acara budaya daerah hanya boleh digelar di luar jam kantor tanpa melibatkan unsur pegawai maupun fasilitas dinas.",
      "Bersikap netral dengan tidak menghadiri tradisi syukuran warga daerah namun tidak menghalangi rekan lain ikut berpartisipasi.",
      "Menghargai serta ikut merayakan tradisi positif masyarakat seperti kenduri warga selama selaras nilai kemanusiaan dan regulasi.",
      "Menghadiri upacara adat daerah dengan sikap sopan demi etika jabatan meski secara pribadi merasa tradisi lokal kurang perlu dirayakan."
    ],
    "optionScores": [
      1,
      2,
      3,
      5,
      4
    ],
    "answer": "D",
    "explanation": "Sikap ramah dan akomodatif terhadap tradisi positif Nusantara yang selaras nilai kemanusiaan dan hukum menjadi salah satu pilar utama moderasi beragama. Menghadiri acara adat sekadar demi kesopanan jabatan tanpa apresiasi tulus terhadap kearifan lokal belum mencerminkan penerimaan budaya yang substantif.",
    "tip": "Ingat empat indikator moderasi beragama: komitmen kebangsaan, toleransi, anti-kekerasan, dan akomodatif terhadap budaya lokal."
  },
  {
    "id": "tkp-ant-015",
    "subPattern": "moderasi-beragama-dan-penolakan-intoleransi",
    "difficulty": "sulit",
    "prompt": "Panitia seleksi penyuluh sosial desa menemukan seorang kandidat berpengetahuan teknis sangat tinggi, namun saat wawancara mendalam ia terang-terangan menyatakan tidak bersedia mendampingi desa yang mayoritas penduduknya beragama berbeda karena khawatir mengotori keyakinannya. Penilaian profesional Anda selaku anggota tim pewawancara adalah ...",
    "options": [
      "Memberi nilai rendah pada aspek sosial sekaligus meminta panitia mempertimbangkan ulang kandidat setelah ia mau mengikuti pembinaan.",
      "Mencatat pengakuan kandidat apa adanya pada lembar penilaian lalu menyerahkan seluruh keputusan akhir kepada ketua panitia.",
      "Menegur kandidat dengan nada tinggi di ruang wawancara sebagai pribadi berpikiran sempit sebelum langsung menyudahi sesi tes.",
      "Tetap meluluskannya berdasar nilai teknis tinggi dengan janji penempatan khusus di wilayah desa yang seagama saja.",
      "Menilai objektif bahwa penolakan melayani warga beda agama menggugurkan syarat integritas kebangsaan sehingga kandidat belum layak lulus."
    ],
    "optionScores": [
      4,
      3,
      2,
      1,
      5
    ],
    "answer": "E",
    "explanation": "Kesediaan melayani seluruh warga negara tanpa diskriminasi agama adalah syarat mutlak pelayan publik yang tidak dapat digantikan kecakapan teknis. Sekadar memberi nilai rendah dan mempertimbangkan ulang kelulusannya tanpa menggugurkan syarat integritas berisiko meloloskan sikap eksklusif.",
    "tip": "Kecakapan teknis tidak pernah menggantikan syarat mutlak kesediaan melayani seluruh warga negara tanpa diskriminasi keyakinan."
  },
  {
    "id": "tkp-ant-016",
    "subPattern": "moderasi-beragama-dan-penolakan-intoleransi",
    "difficulty": "sulit",
    "prompt": "Dalam program dialog kerukunan pemuda kabupaten, sekelompok aktivis berargumen keras bahwa toleransi berarti seluruh kelompok tidak perlu saling bertegur sapa atau bekerja sama sosial agar terhindar dari gesekan, sedangkan kelompok lain memaksa semua peserta mengikuti satu tradisi ritual kelompok mayoritas. Posisi moderat yang Anda tawarkan sebagai fasilitator forum adalah ...",
    "options": [
      "Menawarkan jalan tengah: jaga kemurnian ibadah tiap umat sambil aktif bergotong royong dalam kerja sosial kebangsaan.",
      "Menunda penyusunan kesepakatan forum hari itu dan meminta perwakilan tiap kelompok mengirim usulan tertulis pekan depan.",
      "Mengajak kedua kubu menyepakati jadwal kegiatan sosial terpisah dulu agar suhu forum mereda sebelum membahas kolaborasi bersama.",
      "Mendukung usulan pemaksaan satu tradisi ritual mayoritas demi menciptakan keseragaman budaya pemuda di seluruh kabupaten.",
      "Menghentikan forum dialog lebih awal karena menganggap perbedaan cara pandang kedua kelompok aktivis sulit dipertemukan."
    ],
    "optionScores": [
      5,
      3,
      4,
      1,
      2
    ],
    "answer": "A",
    "explanation": "Jalan tengah moderasi menolak dua ekstrem sekaligus—baik segregasi sosial maupun pemaksaan penyeragaman ritual—dengan memadukan penghormatan kemurnian ibadah dan gotong royong kebangsaan. Sekadar menenangkan forum lewat agenda terpisah belum membangun kerangka kerja sama lintas kelompok yang sejati.",
    "tip": "Moderasi kebinekaan menyeimbangkan kemurnian ruang ibadah masing-masing dengan kerja sama sosial aktif antarwarga sebangsa."
  },
  {
    "id": "tkp-ant-017",
    "subPattern": "kesetiaan-ideologi-pancasila-uud-nkri",
    "difficulty": "mudah",
    "prompt": "Seorang rekan baru di tim Anda berpendapat di sela rapat informal bahwa Pancasila dan UUD 1945 sudah tidak relevan lagi dan Indonesia sebaiknya mengganti dasar negara meniru sistem negara lain yang ia kagumi di berita. Sikap tepat Anda adalah ...",
    "options": [
      "Menyerang pendapat rekan tersebut dengan nada tinggi di lobi kantor sambil menuduhnya tidak layak menjadi aparatur sipil.",
      "Menegaskan kesetiaan pada Pancasila dan UUD 1945 dengan argumen logis soal pemersatu bangsa serta mengawal sikapnya.",
      "Menyetujui sebagian gagasannya lalu mengusulkan pembahasan ulang dasar negara demi menampung pendapat pegawai muda.",
      "Menjelaskan secara tenang kepada rekan tersebut bahwa Pancasila merupakan hasil kesepakatan pendiri bangsa yang wajib dihormati pegawai.",
      "Mengalihkan obrolan sela rapat ke agenda teknis pekerjaan sambil membiarkan ucapan rekan itu berlalu tanpa tanggapan."
    ],
    "optionScores": [
      2,
      5,
      1,
      4,
      3
    ],
    "answer": "B",
    "explanation": "Meneguhkan kesetiaan pada Pancasila dan UUD 1945 dengan argumen logis tentang fungsinya menjaga kemajemukan sekaligus mengawal komitmen rekan merupakan sikap Loyal yang utuh. Sekadar mengingatkan aspek historis secara pasif belum menjelaskan relevansi fungsionalnya maupun memastikan pemantauan sikap kerja.",
    "tip": "Teguhkan konsensus final Pancasila-UUD 1945-NKRI lewat argumen rasional santun saat ada wacana penggantian dasar negara."
  },
  {
    "id": "tkp-ant-018",
    "subPattern": "kesetiaan-ideologi-pancasila-uud-nkri",
    "difficulty": "mudah",
    "prompt": "Ketika upacara bendera memperingati hari besar nasional di halaman kantor berlangsung khidmat, seorang pegawai terlihat sengaja berdiri menyandar santai sambil memainkan ponsel dan menggerutu tidak mau menghormat kepada Bendera Merah Putih dengan alasan paham kelompoknya menganggap penghormatan bendera terlarang. Sikap Anda sesudah upacara selesai adalah ...",
    "options": [
      "Ikut tidak menghormat bendera pada upacara bulan depan sebagai wujud solidaritas atas keyakinan pribadi rekan kerja tersebut.",
      "Membiarkan perilakunya karena merasa penghormatan bendera sudah cukup diwakili oleh pemimpin upacara di depan.",
      "Mengajaknya bicara tenang meluruskan arti hormat bendera sebagai kehormatan negara, lalu meneruskan ke pembina bila berlanjut.",
      "Menjaga sikap khidmat di barisan sendiri lalu menyerahkan urusan kedisiplinan pegawai itu sepenuhnya kepada petugas pemeriksa barisan.",
      "Menegurnya secara pribadi seusai upacara agar tetap menghargai aturan kedinasan serta ikut menjaga kekhidmatan barisan pegawai lain."
    ],
    "optionScores": [
      1,
      2,
      5,
      3,
      4
    ],
    "answer": "C",
    "explanation": "Meluruskan kesalahpahaman bahwa hormat bendera adalah penghargaan kehormatan negara (bukan penyembahan) sekaligus siap melapor jika pembangkangan berlanjut menjaga loyalitas dan prosedur pembinaan. Sekadar menegur sopan santun barisan tidak menyentuh akar paham yang menolak simbol negara.",
    "tip": "Luruskan kesalahpahaman makna penghormatan simbol negara (bukan penyembahan), dan laporkan secara prosedural jika pembangkangan berlanjut."
  },
  {
    "id": "tkp-ant-019",
    "subPattern": "kesetiaan-ideologi-pancasila-uud-nkri",
    "difficulty": "sedang",
    "prompt": "Sekelompok kecil tokoh di suatu wilayah binaan menolak pelaksanaan program vaksinasi anak sekolah dan pencatatan KTP elektronik dengan menyebarkan paham agar warga memutus hubungan dengan segala dokumen hukum negara yang dianggap sistem sesat. Sebagai pegawai pembina wilayah, sikap tepat Anda adalah ...",
    "options": [
      "Mengadakan sosialisasi terbuka langsung bersama petugas dinas mengenai manfaat medis vaksinasi dan kegunaan praktis KTP bagi anak sekolah.",
      "Melayani warga yang datang sukarela saja ke posko layanan tanpa berupaya menjangkau kelompok warga yang menolak program negara.",
      "Menghentikan seluruh anggaran bantuan perbaikan jalan desa sebelum kelompok penolak itu bersedia meminta maaf terbuka.",
      "Menggandeng tokoh agama dan adat berdialog persuasif soal manfaat perlindungan warga, lalu menindak provokator sesuai aturan hukum.",
      "Menghapus kewajiban dokumen kependudukan dan vaksinasi khusus bagi warga wilayah itu demi menghindari protes kelompok penolak."
    ],
    "optionScores": [
      4,
      3,
      2,
      5,
      1
    ],
    "answer": "D",
    "explanation": "Pelibatan tokoh agama serta adat yang kredibel meluruskan dalil kebangsaan dan manfaat layanan negara secara persuasif, sementara penindakan provokator menjaga ketertiban hukum. Sosialisasi teknis dinas semata sulit menembus penolakan yang berakar pada paham anti-sistem negara.",
    "tip": "Hadapi penolakan sistem administrasi/layanan negara lewat kolaborasi dialogis dengan tokoh kredibel setempat serta ketegasan hukum pada provokator."
  },
  {
    "id": "tkp-ant-020",
    "subPattern": "kesetiaan-ideologi-pancasila-uud-nkri",
    "difficulty": "sedang",
    "prompt": "Dalam suatu forum diskusi kebijakan daerah, muncul usulan ekstrem agar daerah tertentu diberi kewenangan menolak kedatangan aparatur negara yang berasal dari provinsi maupun suku berbeda dan mengganti aturan hukum nasional dengan aturan kelompok mayoritas daerah saja. Respons berprinsip NKRI Anda adalah ...",
    "options": [
      "Memilih diam mendengarkan di ruang rapat karena menganggap usulan itu datang dari perwakilan kelompok vokal yang sulit dibantah.",
      "Menyatakan ketidaksetujuan secara sopan di forum dengan alasan menjaga harmoni daerah tanpa memaparkan landasan konstitusi NKRI.",
      "Mendukung penghentian penempatan aparatur luar daerah agar posisi birokrasi dan aturan lokal sepenuhnya dikuasai kelompok mayoritas.",
      "Menghentikan diskusi seketika dan menuduh para pengusul sebagai kelompok separatis yang berniat memecah kedaulatan negara.",
      "Menolak tegas usulan itu berlandaskan prinsip NKRI serta Bhinneka Tunggal Ika bahwa ASN berhak mengabdi di bawah satu payung hukum nasional."
    ],
    "optionScores": [
      3,
      4,
      1,
      2,
      5
    ],
    "answer": "E",
    "explanation": "Menolak eksklusivisme kedaerahan secara argumentatif dengan berlandaskan prinsip NKRI, Bhinneka Tunggal Ika, dan kesatuan hukum nasional meneguhkan peran ASN sebagai perekat bangsa. Sekadar menyatakan kurang setuju secara singkat tanpa pijakan konstitusional membuat narasi anti-persatuan gagal dibantah tuntas.",
    "tip": "Pertahankan prinsip NKRI sebagai satu wilayah kesatuan hukum dan pengabdian ASN di seluruh Nusantara tanpa sekat daerah."
  },
  {
    "id": "tkp-ant-021",
    "subPattern": "kesetiaan-ideologi-pancasila-uud-nkri",
    "difficulty": "sedang",
    "prompt": "Menjelang rekrutmen pegawai kontrak baru di unit Anda, Anda mengetahui seorang kandidat melampirkan surat rekomendasi aktif organisasi yang beberapa waktu lalu secara resmi dibubarkan pemerintah karena terbukti menganut paham yang ingin mengganti ideologi Pancasila. Tindakan verifikasi paling tepat Anda adalah ...",
    "options": [
      "Memverifikasi status hukum organisasi itu bersama tim SDM dan pengawas guna menilai komitmen kandidat secara adil.",
      "Mengabaikan surat rekomendasi itu karena menganggap seleksi pegawai kontrak daerah hanya mengukur kecakapan teknis komputer.",
      "Meminta keterangan langsung kepada kandidat saat wawancara mengenai alasan keterlibatannya di organisasi itu sebelum menyusun catatan.",
      "Menandai berkas surat rekomendasi itu dengan catatan kecil lalu meneruskannya ke panitia administrasi tanpa koordinasi pengawasan.",
      "Tetap meloloskan kandidat itu diam-diam sambil menyarankan agar nama organisasinya diganti di berkas lamaran supaya aman."
    ],
    "optionScores": [
      5,
      2,
      4,
      3,
      1
    ],
    "answer": "A",
    "explanation": "Verifikasi objektif status hukum organisasi bersama tim SDM dan pengawasan memastikan penilaian kelayakan ideologis berjalan sesuai aturan dan asas keadilan. Sekadar menanyakan langsung saat wawancara tanpa penelusuran terpadu ke pihak pengawas tidak menjamin validitas rekam jejak.",
    "tip": "Dalam rekrutmen aparatur, verifikasi rekam jejak ideologis/kepatuhan hukum secara objektif bersama tim pengawas SDM tanpa melanggar privasi publik."
  },
  {
    "id": "tkp-ant-022",
    "subPattern": "kesetiaan-ideologi-pancasila-uud-nkri",
    "difficulty": "sedang",
    "prompt": "Seorang rekan kerja menolak menandatangani pakta integritas tahunan pegawai dengan dalih klausul \"setia kepada Pancasila dan UUD 1945\" bertentangan dengan keyakinan pribadinya karena menurutnya kesetiaan hanya boleh kepada Tuhan, bukan konstitusi manusia. Pendekatan paling bijaksana untuk meluruskan kekeliruan ini adalah ...",
    "options": [
      "Menghapus klausul setia pada Pancasila khusus di lembar pakta rekan itu agar target pengumpulan berkas cepat tercapai.",
      "Menerangkan jernih harmoni Sila Pertama dan konstitusi pelindung ibadah, sambil menegakkan kewajiban pakta bersama SDM.",
      "Mencatat penolakannya dalam berita acara pengumpulan berkas lalu membiarkan lembaran pakta kosong hingga bagian SDM menanyakan sendiri.",
      "Menertawakan pemahaman agamanya di ruang kerja karena dianggap gagal membedakan antara kewajiban beribadah dan aturan bernegara.",
      "Berdiskusi santun dengannya tentang posisi konstitusi sebagai kesepakatan warga negara agar ia mau menandatangani pakta dengan sukarela."
    ],
    "optionScores": [
      1,
      5,
      3,
      2,
      4
    ],
    "answer": "B",
    "explanation": "Menerangkan keselarasan Sila Pertama dengan konstitusi negara yang menjamin kebebasan beribadah, disertai penegakan kewajiban pakta bersama SDM, menjaga keteguhan ideologi secara bijak. Sekadar membujuk dengan alasan kesepakatan sosial tanpa penegakan kewajiban kepegawaian berisiko melonggarkan komitmen dasar ASN.",
    "tip": "Jelaskan harmoni antara nilai ketuhanan (Sila ke-1) dan konstitusi bernegara, sambil tetap menegakkan pakta integritas ASN."
  },
  {
    "id": "tkp-ant-023",
    "subPattern": "kesetiaan-ideologi-pancasila-uud-nkri",
    "difficulty": "sulit",
    "prompt": "Anda mendapat tugas menyusun modul sosialisasi wawasan kebangsaan bagi generasi Z di daerah dengan tingkat polarisasi media sosial cukup tinggi. Sebagian peserta menganggap materi Pancasila di buku ajar lama terlalu doktrinal-menghafal serta membosankan. Agar komitmen terhadap ideologi Pancasila dan NKRI mengakar kuat secara substansial, rancangan modul Anda mengutamakan ...",
    "options": [
      "Mengemas ulang materi buku ajar lama ke dalam presentasi visual penuh infografis menarik namun tetap fokus pada penyampaian poin teoretis satu arah.",
      "Memisahkan ruang kelas peserta berdasarkan kesamaan suku agar pembahasan isu sosial selama sosialisasi tidak memicu debat.",
      "Menghadirkan studi kasus nyata Gen Z soal keadilan digital dan toleransi lewat dialog partisipatif agar nilai Pancasila terasa relevan.",
      "Menghapus pembahasan nilai Pancasila seluruhnya dan menggantinya dengan materi kiat sukses bisnis digital agar peserta muda betah.",
      "Menyusun rangkuman poin sila Pancasila dan pasal UUD yang wajib dipahami peserta disertai sesi tanya jawab formal singkat di penghujung acara."
    ],
    "optionScores": [
      4,
      2,
      5,
      1,
      3
    ],
    "answer": "C",
    "explanation": "Mengangkat studi kasus keseharian generasi muda lewat dialog partisipatif menjadikan Pancasila ideologi hidup yang menjawab persoalan nyata mereka. Mengemas ulang materi hafalan dalam infografis satu arah memang terlihat modern, tetapi belum melatih nalar kritis dan penghayatan nilai.",
    "tip": "Internalisasi Pancasila pada generasi muda paling efektif lewat dialog kritis dan studi kasus nyata zaman mereka."
  },
  {
    "id": "tkp-ant-024",
    "subPattern": "kesetiaan-ideologi-pancasila-uud-nkri",
    "difficulty": "sulit",
    "prompt": "Setelah pensiun dari instansi pemerintah tempat Anda bekerja, seorang mantan pejabat berpengaruh mengajak sekelompok alumni pegawai mendirikan koperasi yang di dalamnya diam-diam disisipi kajian menolak keabsahan pemerintahan sah serta menggalang dana untuk gerakan intoleran pemecah persatuan. Begitu mengetahuinya melalui undangan resmi alumni, sikap tegas Anda adalah ...",
    "options": [
      "Mengabaikan undangan alumni itu dan memutuskan keluar dari grup paguyuban pensiunan agar tidak terlibat urusan koperasi tersebut.",
      "Menyetor simpanan awal koperasi dalam jumlah kecil supaya nama Anda tetap tercantum dan tidak dianggap memutus tali silaturahmi.",
      "Menolak ajakan tersebut secara halus kepada panitia alumni serta menasihati beberapa sahabat dekat agar tidak ikut menyetor simpanan koperasi.",
      "Menolak tegas bergabung, mengingatkan rekan alumni akan agenda tersembunyi koperasi, dan meneruskan temuan penggalangan dana ke otoritas.",
      "Tetap mendaftar anggota demi menghormati jasa mantan pejabat dulu namun sengaja berjanji tidak pernah menghadiri kajian tertutupnya."
    ],
    "optionScores": [
      3,
      1,
      4,
      5,
      2
    ],
    "answer": "D",
    "explanation": "Menolak tegas, memperingatkan rekan sejawat secara bijak, dan melaporkan penggalangan dana berkedok koperasi ke otoritas memutus jalur dukungan ekstremisme meski melibatkan mantan atasan. Sekadar menolak halus dan mengingatkan sahabat dekat belum melindungi alumni lain atau menghentikan aktivitas ilegalnya.",
    "tip": "Waspadai penyalahgunaan wadah ekonomi/sosial/alumni sebagai kedok penggalangan gerakan anti-NKRI; tolak tegas, lindungi rekan, dan lapor otoritas."
  },
  {
    "id": "tkp-ant-025",
    "subPattern": "pencegahan-radikalisme-digital-dan-hoaks-kebencian",
    "difficulty": "mudah",
    "prompt": "Di beranda media sosial Anda muncul video pendek dengan narasi provokatif bahwa suatu daerah tertentu sengaja dianaktirikan pemerintah pusat karena faktor keyakinan penduduknya, disertai ajakan melakukan kerusuhan penolakan aparat daerah. Sikap bela ideologi di ruang digital yang tepat adalah ...",
    "options": [
      "Menulis komentar panjang berisi makian balik terhadap pengunggah video di ruang publik hingga memicu adu argumen antarpengguna.",
      "Langsung mengabaikan video itu tanpa menekan tombol suka, lalu memilih memblokir akun pengunggahnya supaya tak muncul lagi di beranda.",
      "Menutup aplikasi media sosial dan menggulir cepat melewati video hasutan tersebut tanpa berkomentar apa pun di kolom balasan.",
      "Menekan tombol suka dan membagikan ulang video provokatif itu sekadar untuk menanyakan pendapat pengikut di media sosial Anda.",
      "Tidak menyebarkan video provokatif, mengadukannya melalui fitur platform dan kanal resmi siber, serta membagikan klarifikasi fakta pemersatu."
    ],
    "optionScores": [
      2,
      4,
      3,
      1,
      5
    ],
    "answer": "E",
    "explanation": "Tidak memberi interaksi, melaporkan konten hasutan kekerasan melalui fitur aduan platform dan kanal siber resmi, serta menyajikan fakta pemersatu memutus algoritma kebencian secara efektif. Sekadar memblokir akun pengunggah memang membersihkan beranda pribadi, tetapi membiarkan hasutan tetap menjangkau publik luas.",
    "tip": "Putus rantai konten SARA/hasutan kekerasan di media sosial: jangan like/share, segera report platform & aduan resmi."
  },
  {
    "id": "tkp-ant-026",
    "subPattern": "pencegahan-radikalisme-digital-dan-hoaks-kebencian",
    "difficulty": "mudah",
    "prompt": "Ketika menerima pesan berantai WhatsApp berlabel \"Diteruskan berkali-kali\" yang menuduh salah satu tempat ibadah kelompok lain menyimpan senjata tanpa menyebutkan tanggal, lokasi valid, maupun konfirmasi kepolisian, langkah pencegahan hoaks kebencian Anda adalah ...",
    "options": [
      "Menahan pesan tidak diteruskan, mengecek klarifikasi resmi kepolisian, lalu mengingatkan pengirim risiko konflik hoaks.",
      "Langsung mengunggah tuduhan tanpa bukti terhadap pengurus tempat ibadah itu ke status media sosial supaya lekas ramai disorot warganet.",
      "Mengabaikan pesan berantai itu lalu segera membersihkan riwayat obrolan tanpa melapor atau memeriksa kebenarannya ke mana pun.",
      "Meneruskan pesan berantai tersebut ke grup warga dengan tambahan catatan bahwa kabarnya belum punya bukti pasti namun perlu diwaspadai.",
      "Menghapus pesan berantai tersebut seketika dan berpesan singkat kepada pengirim agar lebih cermat menyaring kabar tanpa bukti."
    ],
    "optionScores": [
      5,
      1,
      3,
      2,
      4
    ],
    "answer": "A",
    "explanation": "Menahan penyebaran pesan berantai, memverifikasi klarifikasi resmi kepolisian, dan mengedukasi pengirim soal bahaya konflik horizontal memutus hoaks SARA langsung di sumbernya. Sekadar menghapus pesan disertai imbauan singkat belum meluruskan kekeliruan informasi pada diri pengirim.",
    "tip": "Jangan pernah meneruskan pesan berantai berbau SARA sekalipun diberi embel-embel 'sekadar waspada'; hentikan, verifikasi, dan edukasi."
  },
  {
    "id": "tkp-ant-027",
    "subPattern": "pencegahan-radikalisme-digital-dan-hoaks-kebencian",
    "difficulty": "sedang",
    "prompt": "Anda mengetahui bahwa sebuah akun anonim di media sosial lokal secara konsisten memproduksi meme dan potongan video bernada kebencian yang membenturkan sesama umat beragama demi menaikkan jumlah pengikut menjelang hari raya. Sebagai ASN yang peduli ketahanan ruang siber nasional, tindakan efektif dan sah adalah ...",
    "options": [
      "Mengajak rekan sekerja bersama-sama melaporkan unggahan melalui fitur platform agar akun provokatif itu lekas ditutup otomatis.",
      "Mendokumentasikan tangkapan layar unggahan, mengadukannya ke kanal siber dan platform, lalu menyebarkan pesan damai.",
      "Menulis komentar bantahan tiap hari di akun provokatif itu walau justru memperbesar jangkauan algoritmanya.",
      "Membuat akun anonim tandingan guna melancarkan serangan perundungan serta membalas meme kebencian kepada pengelola akun lokal itu.",
      "Memilih tidak mengikuti akun provokatif tersebut dan menyarankan kenalan dekat untuk memblokirnya dari beranda masing-masing."
    ],
    "optionScores": [
      4,
      5,
      2,
      1,
      3
    ],
    "answer": "B",
    "explanation": "Mendokumentasikan tangkapan layar untuk diadukan ke kanal siber resmi serta platform sekaligus memproduksi konten kerukunan menekan penyebaran konten kebencian secara sah dan menyeluruh. Sekadar mengandalkan laporan internal platform tanpa dokumentasi aduan siber membuat proses penindakan hukum terlewat.",
    "tip": "Jangan beri engagement pada akun penyebar kebencian; kumpulkan bukti, laporkan ke kanal siber/platform, dan perkuat kontra-narasi damai."
  },
  {
    "id": "tkp-ant-028",
    "subPattern": "pencegahan-radikalisme-digital-dan-hoaks-kebencian",
    "difficulty": "sedang",
    "prompt": "Saat membimbing pelatihan literasi digital untuk warga dan pelajar daerah, peserta bertanya bagaimana cara mengenali secara cepat narasi propaganda radikalisme terselubung di media sosial agar tidak terjebak rasa simpati palsu. Penjelasan paling tepat Anda berikan adalah ...",
    "options": [
      "Mengingatkan peserta supaya hanya mengonsumsi kabar dari saluran resmi pemerintah serta menghindari perbincangan isu sosial di internet.",
      "Menyampaikan bahwa selama konten tidak memamerkan senjata api, narasi membenci kelompok berbeda tergolong bebas disebar.",
      "Mengenalkan ciri propaganda seperti narasi biner kami-musuh, pemotongan konteks fakta, dehumanisasi, dan ajakan menolak hukum.",
      "Mengajarkan peserta memeriksa keaslian akun pengunggah serta mewaspadai unggahan bertema solidaritas yang memancing simpati emosi.",
      "Menjelaskan bahwa propaganda ekstrem selalu menampilkan simbol kelompok bersenjata secara terang-terangan."
    ],
    "optionScores": [
      3,
      1,
      5,
      4,
      2
    ],
    "answer": "C",
    "explanation": "Menguraikan pola manipulatif propaganda modern—dikotomi kami versus musuh, pemelintiran konteks, dehumanisasi, dan penolakan hukum—membekali daya kritis peserta menghadapi narasi terselubung. Sekadar memeriksa keaslian akun dan muatan emosional belum cukup membongkar jebakan logika propaganda ideologis.",
    "tip": "Kenali pola hulu narasi ekstrem: dikotomi hitam-putih 'kami vs musuh', dehumanisasi, pemutusan konteks fakta, dan ajakan eksklusif."
  },
  {
    "id": "tkp-ant-029",
    "subPattern": "pencegahan-radikalisme-digital-dan-hoaks-kebencian",
    "difficulty": "sedang",
    "prompt": "Anggota keluarga dekat Anda yang aktif di grup komunitas perumahan sering memercayai artikel konspirasi ekstrem tanpa sumber jelas lalu berencana membagikannya ke grup warga besar untuk memprovokasi penolakan program pemerintah daerah. Cara bijak menghentikan penyebarannya dari lingkungan terdekat adalah ...",
    "options": [
      "Menegurnya keras di hadapan keluarga lain saat makan malam bahwa pemikirannya sudah jauh terpengaruh bacaan konspirasi terlarang.",
      "Mengirimkan tautan bantahan resmi melalui pesan pribadi sambil memintanya mengurungkan niat membagikan artikel konspirasi itu ke grup perumahan.",
      "Menyarankan singkat di grup keluarga besar agar semua anggota lebih selektif menyebarkan artikel tanpa sumber berita yang jelas.",
      "Mengajaknya berdiskusi hangat empat mata guna membedah ketidakvalidan artikel konspirasi bersama rujukan resmi dan membiasakan cek fakta.",
      "Membiarkannya membagikan artikel provokatif ke grup warga dulu supaya ia malu sendiri ketika dikoreksi oleh pengurus RT."
    ],
    "optionScores": [
      2,
      4,
      3,
      5,
      1
    ],
    "answer": "D",
    "explanation": "Berdiskusi hangat empat mata untuk membedah kejanggalan artikel dengan sumber resmi menumbuhkan kesadaran kritis keluarga tanpa memicu sikap defensif. Sekadar mengirim tautan bantahan melalui pesan teks kurang efektif mematahkan keyakinan terhadap narasi konspirasi yang sudah tertanam.",
    "tip": "Bentengi keluarga dari paparan narasi konspirasi kebencian lewat dialog hangat empat mata berbasis cek fakta terbuka."
  },
  {
    "id": "tkp-ant-030",
    "subPattern": "pencegahan-radikalisme-digital-dan-hoaks-kebencian",
    "difficulty": "sedang",
    "prompt": "Di halaman komentar artikel berita keberhasilan proyek pelayanan publik di instansi Anda, muncul puluhan komentar seragam dari akun-akun baru mencurigakan (bot) yang kompak melontarkan ujaran kebencian SARA guna membelokkan perhatian pembaca. Strategi tim komunikasi digital Anda yang paling profesional adalah ...",
    "options": [
      "Membuat puluhan akun samaran pegawai dinas untuk saling melontarkan pujian balik guna menenggelamkan serangan komentar negatif.",
      "Menutup sementara kolom komentar pada seluruh berita keberhasilan proyek instansi agar serangan akun bot tidak memancing emosi pembaca.",
      "Membalas satu per satu komentar akun mencurigakan itu di kolom publik sepanjang hari demi membela nama baik instansi.",
      "Menyembunyikan satu per satu komentar berisi ujaran SARA tersebut secara manual lalu mengarahkan pembaca mengakses kanal aduan layanan.",
      "Mengaktifkan moderasi komentar anti-SARA sesuai aturan platform, melaporkan pola akun bot terkoordinasi, dan tetap menyajikan info faktual."
    ],
    "optionScores": [
      1,
      3,
      2,
      4,
      5
    ],
    "answer": "E",
    "explanation": "Mengaktifkan filter moderasi anti-SARA, melaporkan pola serangan akun bot terkoordinasi, dan menjaga arus informasi faktual melindungi ruang publik tanpa membungkam kritik sah. Sekadar menyembunyikan komentar secara manual tidak menghentikan eskalasi akun otomatis yang terus berulang.",
    "tip": "Bedakan kritik kebijakan yang sah dari serangan bot ujaran SARA; moderasi hasutan kebencian SARA dan laporkan aktivitas terkoordinasi."
  },
  {
    "id": "tkp-ant-031",
    "subPattern": "pencegahan-radikalisme-digital-dan-hoaks-kebencian",
    "difficulty": "sulit",
    "prompt": "Sebuah komunitas daring pekerja muda daerah yang awalnya fokus membahas pengembangan karier tiba-tiba disusupi konten ajakan donasi ke rekening perorangan dengan narasi 'bantuan darurat kemanusiaan' yang ternyata setelah Anda cek di situs resmi otoritas berafiliasi dengan jaringan pendukung kelompok terlarang. Sikap cerdas dan berintegritas Anda adalah ...",
    "options": [
      "Tidak mentransfer, mengirim data rekening ke otoritas dan admin grup, lalu mengajak donasi lewat lembaga resmi.",
      "Menahan diri tidak ikut menyumbang serta menghubungi admin komunitas secara pribadi agar lekas menghapus tautan penggalangan dana ilegal itu.",
      "Langsung menuduh admin grup sebagai kaki tangan teroris di depan seluruh anggota komunitas tanpa koordinasi pemeriksaan resmi terlebih dulu.",
      "Tetap menyumbang dana dalam jumlah kecil dengan niat membantu korban bencana tanpa memedulikan kejelasan lembaga penerimanya.",
      "Mengundurkan diri secara diam-diam dari komunitas pekerja muda tersebut untuk menjaga nama baik pribadi tanpa berkomentar di ruang obrolan."
    ],
    "optionScores": [
      5,
      4,
      2,
      1,
      3
    ],
    "answer": "A",
    "explanation": "Menghentikan aliran dana, melaporkan data tautan serta rekening ke otoritas berwenang dan pengelola grup, serta mengarahkan donasi ke lembaga resmi memutus pendanaan ekstremisme berkedok amal. Sekadar meminta admin menghapus unggahan secara diam-diam tidak menindak jaringan penggalang dananya.",
    "tip": "Lindungi niat kemanusiaan dari penyalahgunaan pendanaan ekstremis: salurkan hanya ke lembaga resmi berizin dan laporkan penggalangan terindikasi terlarang."
  },
  {
    "id": "tkp-ant-032",
    "subPattern": "pencegahan-radikalisme-digital-dan-hoaks-kebencian",
    "difficulty": "sulit",
    "prompt": "Anda bertugas di dinas informasi daerah dan melihat algoritma rekomendasi video singkat sedang mendorong tren konten 'sejarah tandingan palsu' yang memanipulasi fakta perjuangan bangsa untuk membangkitkan permusuhan antaretnis serta mendiskreditkan persatuan nasional di kalangan pemilih muda. Langkah kontra-narasi strategis paling berdampak yang Anda gagas adalah ...",
    "options": [
      "Menerbitkan surat edaran berisi bantahan tertulis sepanjang beberapa halaman dalam format dokumen resmi pada laman web pemerintah daerah.",
      "Menggandeng sejarawan dan kreator lokal membuat video kontra-narasi akurat yang menarik bagi anak muda plus dialog literasi.",
      "Mengarang kisah sejarah baru tanpa dasar ilmiah asalkan populer dan cepat menarik simpati pemilih muda.",
      "Memproduksi serial unggahan grafis penjelasan fakta sejarah dari tim humas dinas untuk disebarkan melalui akun media sosial resmi kantor.",
      "Mengusulkan pemblokiran menyeluruh aplikasi video singkat di wilayah daerah tanpa menyertai program literasi sejarah bagi generasi muda."
    ],
    "optionScores": [
      3,
      5,
      1,
      4,
      2
    ],
    "answer": "B",
    "explanation": "Kolaborasi bersama sejarawan tepercaya dan kreator lokal menghasilkan konten tandingan akurat yang relevan bagi algoritma anak muda sekaligus diperkuat dialog literasi. Mengandalkan infografis resmi dari akun dinas saja kurang mampu menyaingi daya tarik konten manipulatif di kalangan pemilih muda.",
    "tip": "Lawan manipulasi algoritma propaganda sejarah palsu lewat kontra-narasi ilmiah bersama kreator dan pendidik dalam bahasa akrab generasi muda."
  },
  {
    "id": "tkp-ant-033",
    "subPattern": "pendekatan-persuasif-edukatif-dan-pelaporan-prosedural",
    "difficulty": "mudah",
    "prompt": "Saat mendapati rekan kerja baru baru pertama kali membagikan artikel dari situs tak jelas yang bernada sedikit intoleran karena polos tidak mengecek sumbernya, prioritas langkah bijak Anda terlebih dahulu adalah ...",
    "options": [
      "Langsung mengadukannya kepada aparat penegak hukum hari itu juga sebelum mengklarifikasi niat dan pemahamannya terlebih dahulu.",
      "Mengirim tautan berita pembanding yang akurat melalui pesan singkat agar ia menyadari kekeliruan isi artikel tanpa merasa ditegur.",
      "Mengajaknya berdiskusi sopan empat mata meluruskan ketidakakuratan sumber, memintanya menghapus unggahan, dan terus memantau.",
      "Memberi peringatan umum mengenai etika berbagi informasi di grup unit tanpa menyapa atau menyebut nama rekan baru tersebut.",
      "Menyebarkan tangkapan layar pesannya ke grup dinas lain sebagai bahan lelucon pegawai yang kurang literasi."
    ],
    "optionScores": [
      2,
      4,
      5,
      3,
      1
    ],
    "answer": "C",
    "explanation": "Kekeliruan awal akibat ketidaktahuan polos paling efektif ditangani melalui dialog persuasif empat mata untuk meluruskan sumber sekaligus menarik unggahan dan memantau perbaikannya. Sekadar mengirim tautan pembanding tanpa dialog langsung berisiko membuat artikel intoleran itu tetap terpasang.",
    "tip": "Untuk kekeliruan awal akibat ketidaktahuan, utamakan edukasi persuasif empat mata disertai klarifikasi; simpan eskalasi keras untuk ancaman nyata atau berulang."
  },
  {
    "id": "tkp-ant-034",
    "subPattern": "pendekatan-persuasif-edukatif-dan-pelaporan-prosedural",
    "difficulty": "mudah",
    "prompt": "Sebaliknya, apabila setelah berkali-kali diberi penjelasan santun dan edukasi oleh tim pembina, seorang pegawai tetap aktif merekrut pegawai muda masuk ke forum penolakan ideologi Pancasila serta menanamkan kebencian terhadap konstitusi negara, langkah prosedural wajib Anda adalah ...",
    "options": [
      "Mengumpulkan beberapa rekan untuk mencegat dan mengintimidasi pegawai perekrut itu di area parkir kantor supaya jera.",
      "Mengajukan permohonan pindah unit kerja secara diam-diam supaya terhindar dari keterlibatan dalam aktivitas perekrutan tersebut.",
      "Menghapus seluruh grup percakapan unit lalu membuat grup baru tanpa mengikutsertakan pegawai perekrut tersebut agar anggota aman.",
      "Mengadukan temuan beserta kronologi lengkap aktivitas rekrutmen itu ke atasan dan pengawas disiplin agar ditindak sesuai regulasi.",
      "Mengajak kepala unit memanggil kembali pegawai tersebut guna menyampaikan teguran lisan keras serta meminta janji tertulis untuk berhenti."
    ],
    "optionScores": [
      1,
      3,
      2,
      5,
      4
    ],
    "answer": "D",
    "explanation": "Saat pembinaan persuasif berulang diabaikan dan berubah menjadi perekrutan anti-Pancasila aktif, pelaporan resmi berkronologi lengkap ke atasan dan pengawas disiplin wajib dilakukan. Memberi teguran atau janji ulang hanya mengulur waktu dan memberi ruang rekrutmen terus berjalan.",
    "tip": "Bila perekrutan ideologi ekstrem berjalan aktif berulang meski telah diingatkan, lakukan eskalasi prosedural berbukti ke atasan dan pengawas ASN."
  },
  {
    "id": "tkp-ant-035",
    "subPattern": "pendekatan-persuasif-edukatif-dan-pelaporan-prosedural",
    "difficulty": "sedang",
    "prompt": "Sebuah desa binaan tempat Anda mendampingi program pemberdayaan memiliki beberapa warga mantan narapidana kasus ekstremisme yang sudah menyatakan ikrar setia kembali kepada NKRI setelah program deradikalisasi resmi selesai dan kini berusaha berbaur membuka usaha bengkel kecil. Sikap sosial budaya dan pencegahan berkelanjutan yang paling tepat adalah ...",
    "options": [
      "Melayani seluruh pengurusan izin usaha dan administrasi kependudukannya dengan baik di kantor desa agar proses pembauran berjalan lancar.",
      "Memasang tanda pengawasan khusus di dekat bengkel usahanya agar warga desa tetap menjaga kewaspadaan ketat dan menjauhi lokasinya.",
      "Menolak melayani permohonan dokumen kependudukan keluarganya di kantor desa karena khawatir terhadap riwayat hukum masa lalunya.",
      "Membiarkan bengkelnya beroperasi apa adanya tanpa hambatan namun membatasi interaksi sosial warga dengan tetap mengawasi dari kejauhan.",
      "Mendukung reintegrasi adil melalui layanan sipil setara dan pemberdayaan ekonomi positif bersama warga sambil menjaga koordinasi kewaspadaan."
    ],
    "optionScores": [
      4,
      2,
      1,
      3,
      5
    ],
    "answer": "E",
    "explanation": "Mendukung reintegrasi sosial bermartabat melalui layanan hak sipil setara, pemberdayaan ekonomi bersama masyarakat, dan koordinasi kewilayahan wajar mencegah eks-napiter kembali ke jaringan lama. Sekadar melayani administrasi di loket belum memulihkan penerimaan sosial yang dibutuhkan di desa.",
    "tip": "Dukung reintegrasi sosial dan ekonomi yang bermartabat bagi eks-napiter yang setia NKRI guna mencegah mereka terisolasi kembali."
  },
  {
    "id": "tkp-ant-036",
    "subPattern": "pendekatan-persuasif-edukatif-dan-pelaporan-prosedural",
    "difficulty": "sedang",
    "prompt": "Ketika mengadukan indikasi aktivitas penyebaran paham radikalisme melalui saluran pelaporan internal instansi, alasan utama Anda wajib menjaga kerahasiaan proses laporan serta menghindari penyebaran spekulasi nama terduga ke gosip ruangan sebelum ada verifikasi resmi adalah ...",
    "options": [
      "Menjaga asas praduga tak bersalah dari fitnah dan mengamankan alat bukti agar tidak hilang sebelum diperiksa.",
      "Mematuhi tata tertib kerahasiaan saluran aduan internal supaya Anda selaku pelapor tidak terkena teguran administrasi dari pimpinan.",
      "Menjadikan laporan itu bahan tebakan di ruangan agar semua pegawai ikut memusuhi siapa pun yang dicurigai sebelum pembuktian tuntas.",
      "Melindungi kenyamanan suasana kerja seluruh ruangan kantor agar produktivitas pegawai harian tidak terganggu sebelum ada kepastian hukum.",
      "Memberi kesempatan agar pelapor bisa mencabut pengaduannya sewaktu-waktu apabila terduga bersedia meminta maaf secara lisan."
    ],
    "optionScores": [
      5,
      3,
      1,
      4,
      2
    ],
    "answer": "A",
    "explanation": "Kerahasiaan aduan menjaga asas praduga tak bersalah agar pihak tak bersalah terhindar dari fitnah sekaligus mencegah penghilangan alat bukti sebelum pemeriksaan resmi. Sekadar menjaga ketenangan ruang kerja harian mengabaikan aspek keadilan hukum dan efektivitas penyelidikan.",
    "tip": "Kerahasiaan dalam pelaporan kasus radikalisme melindungi asas praduga tak bersalah dan menjaga bukti penyelidikan tidak rusak."
  },
  {
    "id": "tkp-ant-037",
    "subPattern": "pendekatan-persuasif-edukatif-dan-pelaporan-prosedural",
    "difficulty": "sedang",
    "prompt": "Dalam diskusi bersama tokoh pemuda kecamatan, muncul anggapan bahwa kewaspadaan terhadap radikalisme hanya tugas aparat keamanan pusat (BNPT/TNI/Polri) sehingga aparatur sipil daerah maupun warga biasa cukup fokus urusan ekonomi saja. Pendekatan edukatif Anda untuk meluruskan pandangan ini adalah ...",
    "options": [
      "Menyetujui anggapan bahwa pencegahan paham ekstrem cukup ditangani aparat pusat agar warga lokal tenang mengurus ekonomi.",
      "Memaparkan sinergi seluruh elemen: aparat menindak pelanggaran hukum, sementara ASN dan warga menguatkan kerukunan.",
      "Menegaskan bahwa setiap warga maupun aparatur daerah tetap wajib tanggap melapor kepada aparat keamanan jika menemukan ancaman nyata di desa.",
      "Mengakui bahwa tugas penindakan memang wewenang aparat pusat sambil mengajak pemuda memelihara kekompakan kerja ekonomi di kecamatan.",
      "Mendorong tokoh pemuda membentuk satuan pengamanan bersenjata swakarsa di kecamatan tanpa koordinasi kepolisian."
    ],
    "optionScores": [
      2,
      5,
      4,
      3,
      1
    ],
    "answer": "B",
    "explanation": "Pencegahan radikalisme menuntut kolaborasi seluruh komponen bangsa: aparat menindak ancaman hukum, sementara birokrasi sipil dan warga membentengi hulu melalui kerukunan, keadilan layanan, dan literasi. Sekadar mengajak warga melapor jika ada ancaman belum menumbuhkan ketahanan sosial pencegahan dini.",
    "tip": "Ketahanan ideologis bersifat kolaboratif: aparat menjaga penegakan hukum keamanan, sementara birokrasi sipil dan warga memperkuat kerukunan, keadilan layanan, dan literasi."
  },
  {
    "id": "tkp-ant-038",
    "subPattern": "pendekatan-persuasif-edukatif-dan-pelaporan-prosedural",
    "difficulty": "sedang",
    "prompt": "Anda mendapat informasi tepercaya dari warga mengenai rencana kedatangan oknum pembicara yang berulang kali memicu konflik intoleransi keras di daerah lain untuk mengisi acara terbuka di fasilitas umum kelurahan binaan Anda besok malam. Sebagai aparatur penghubung wilayah, tindakan prosedural tepat Anda adalah ...",
    "options": [
      "Menyebarluaskan ajakan pengerahan massa warga guna membubarkan acara besok malam secara mandiri di halaman kelurahan.",
      "Mencatat informasi warga itu secara rinci pada buku pantauan harian guna dibahas bersama staf kelurahan saat rapat rutin berikutnya.",
      "Melapor cepat ke pimpinan wilayah, FKUB, dan aparat berbekal rekam jejak guna verifikasi izin serta pembinaan dialogis panitia.",
      "Diam saja karena penggunaan gedung umum kelurahan dianggap hak penuh penyewa selama melunasi biaya sewa acara.",
      "Menghubungi panitia acara secara persuasif untuk meminta jaminan agar isi ceramah besok malam tetap damai tanpa menyinggung persoalan SARA."
    ],
    "optionScores": [
      1,
      3,
      5,
      2,
      4
    ],
    "answer": "C",
    "explanation": "Menyalurkan deteksi dini berbekal rekam jejak ke pimpinan wilayah, FKUB, dan aparat keamanan memastikan verifikasi izin serta pembinaan panitia berjalan legal dan terukur. Sekadar mengimbau panitia acara secara personal tanpa pelibatan otoritas wilayah berisiko membiarkan provokasi tetap berlangsung.",
    "tip": "Salurkan deteksi dini potensi konflik intoleransi ke otoritas wilayah, FKUB, dan aparat resmi; hindari main hakim sendiri."
  },
  {
    "id": "tkp-ant-039",
    "subPattern": "pendekatan-persuasif-edukatif-dan-pelaporan-prosedural",
    "difficulty": "sulit",
    "prompt": "Sebuah laporan pengaduan masyarakat menuduh rekan kerja Anda berindikasi radikal semata-mata karena penampilannya berjenggot/berbusana agamis rapi, padahal sehari-hari rekan tersebut sangat ramah kepada semua rekan lintas agama, disiplin bekerja, dan aktif mengikuti upacara serta pengabdian masyarakat. Sebagai pengelola klarifikasi aduan yang berintegritas dan adil, sikap Anda adalah ...",
    "options": [
      "Menyatakan aduan itu tidak terbukti secara internal setelah meninjau rekam jejak kerja rekan Anda yang disiplin serta ramah lintas agama.",
      "Membiarkan berkas aduan menumpuk tanpa klarifikasi sehingga gosip liar mengenai rekan bersangkutan meluas di kantor.",
      "Menjatuhkan sanksi mutasi sementara kepada rekan tersebut demi meredam kecemasan sepihak masyarakat pelapor.",
      "Menilai objektif berdasar indikator perilaku nyata bebas stereotip fisik, memulihkan nama baiknya, dan mengedukasi pihak pelapor.",
      "Menyampaikan laporan balik singkat bahwa tuduhan kurang lengkap tanpa menemui pelapor maupun memberi pemulihan nama rekan."
    ],
    "optionScores": [
      4,
      2,
      1,
      5,
      3
    ],
    "answer": "D",
    "explanation": "Evaluasi objektif berbasis indikator perilaku dan komitmen kebangsaan—bebas dari stereotip penampilan kesalehan—memulihkan nama baik pegawai sekaligus mengedukasi masyarakat pelapor. Sekadar menutup laporan sebagai tak terbukti secara internal belum meluruskan prasangka sosial pelapor.",
    "tip": "Bedakan kesalehan penampilan keagamaan dengan radikalisme! Evaluasi wajib berbasis indikator perilaku/ideologi nyata, bebas stereotip."
  },
  {
    "id": "tkp-ant-040",
    "subPattern": "pendekatan-persuasif-edukatif-dan-pelaporan-prosedural",
    "difficulty": "sulit",
    "prompt": "Di tengah meningkatnya ketegangan geopolitik internasional, beberapa diskusi daring internal pegawai ikut memanas dengan mengaitkan konflik luar negeri untuk menyerang rekan berbeda agama di Indonesia seolah bertanggung jawab atas konflik jauh tersebut. Sebagai bagian dari aparatur perekat bangsa, intervensi edukatif paling bijak adalah ...",
    "options": [
      "Meminta admin grup pegawai sementara waktu membatasi pembicaraan mengenai seluruh berita perkembangan geopolitik internasional.",
      "Ikut menyalahkan rekan kerja yang berbeda keyakinan di kantor seolah mereka turut bertanggung jawab atas ketegangan konflik luar negeri.",
      "Mengimbau semua peserta diskusi untuk menjaga sopan santun bermedia sosial dan fokus kembali membahas pekerjaan unit yang tertunda.",
      "Memilih berpihak pada salah satu kubu argumen pegawai yang suaranya paling banyak mendapat dukungan di ruang obrolan kantor.",
      "Mengajak pegawai berempati kemanusiaan secara beradab tanpa menyeret konflik luar menjadi permusuhan sesama warga Indonesia di ruang kerja."
    ],
    "optionScores": [
      3,
      1,
      4,
      2,
      5
    ],
    "answer": "E",
    "explanation": "Menempatkan empati kemanusiaan secara beradab sekaligus memisahkan konflik geopolitik luar negeri dari persaudaraan sesama warga Indonesia menjaga keutuhan bangsa dan kedamaian kantor. Sekadar mengingatkan sopan santun dan fokus kerja tanpa meluruskan sesat pikir pengaitan konflik global tidak meredam akar sentimennya.",
    "tip": "Jaga persaudaraan sebangsa (ukhuwah wathaniyah): jangan biarkan isu konflik global menyeret permusuhan antarwarga di Indonesia."
  }
];

export const antiRadikalismeQuestions: readonly Question[] = buildTkpPatternQuestions(
  "anti-radikalisme",
  [...antiRadikalismeDrafts, ...antiRadikalismeBatch2Drafts, ...antiRadikalismeBatch3Drafts],
);
