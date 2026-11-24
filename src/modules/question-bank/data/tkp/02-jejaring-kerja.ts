import {
  buildTkpPatternQuestions,
  type Question,
  type TkpQuestionDraft,
} from "@/modules/question-bank/domain/question";
import { jejaringKerjaBatch2Drafts } from "./batches/02-jejaring-kerja-batch-2";
import { jejaringKerjaBatch3Drafts } from "./batches/02-jejaring-kerja-batch-3";

const jejaringKerjaDrafts: readonly TkpQuestionDraft[] = [
  {
    "id": "tkp-jej-001",
    "subPattern": "koordinasi-lintas-unit-dan-instansi",
    "difficulty": "mudah",
    "prompt": "Program percepatan penurunan stunting di daerah Anda membutuhkan sinkronisasi data antara Dinas Kesehatan, Dinas Sosial, dan Dinas Kependudukan, tetapi masing-masing bagian masih memakai format data sendiri yang terpisah. Sebagai penghubung teknis tim kerja, langkah Anda adalah ...",
    "options": [
      "Menghubungi perwakilan teknis tiga dinas untuk merumuskan satu format tabel bersama dan jadwal pembaruan rutin.",
      "Tetap memakai format tabel milik dinas sendiri agar target laporan unit aman sambil menunggu penyesuaian format dari unit lain.",
      "Meminta staf magang menyalin ulang seluruh berkas dua dinas lain secara manual tanpa membuka koordinasi teknis antartim.",
      "Menyusun rancangan penyelarasan tabel terlebih dulu lalu mengirimkannya melalui surat resmi untuk ditelaah dua dinas lain.",
      "Meminta perwakilan tiap dinas mengirim rekapan data masing-masing agar tim unit Anda bisa menggabungkan dan menatanya bertahap."
    ],
    "optionScores": [
      5,
      2,
      1,
      4,
      3
    ],
    "answer": "A",
    "explanation": "Menghubungi perwakilan teknis tiga dinas untuk merumuskan format bersama dan jadwal pembaruan rutin menuntaskan hambatan lintas instansi secara kolaboratif, lebih efektif daripada sekadar mengirim rancangan sepihak lewat surat tanpa forum kesepakatan bersama.",
    "tip": "Atasi ego sektoral dengan dialog penyelarasan standar bersama, kesepakatan peran, dan kanal komunikasi aktif."
  },
  {
    "id": "tkp-jej-002",
    "subPattern": "koordinasi-lintas-unit-dan-instansi",
    "difficulty": "mudah",
    "prompt": "Anda dipindahkan sementara menjadi anggota gugus tugas proyek lintas kementerian yang sebagian besar anggotanya belum pernah bekerja sama dengan Anda sebelumnya. Pada hari pertama rapat koordinasi, sikap terbaik Anda adalah ...",
    "options": [
      "Mengusulkan agar frekuensi rapat lintas instansi dikurangi serta tata kerja kantor asal Anda dijadikan pedoman utama tim.",
      "Menyapa ramah anggota gugus tugas, menyimak peta peran lintas instansi, lalu menawarkan kontribusi sesuai keahlian.",
      "Lebih banyak berdiskusi dengan sesama pegawai dari satu kementerian karena sudah akrab dengan gaya kerjanya.",
      "Berkenalan singkat di awal pertemuan lalu mencermati dokumen proyek terutama dari sudut pandang tugas pokok instansi asal.",
      "Memperkenalkan diri dengan santun pada rapat perdana lalu mencatat pembagian tugas resmi sesuai arahan ketua gugus tugas."
    ],
    "optionScores": [
      1,
      5,
      2,
      3,
      4
    ],
    "answer": "B",
    "explanation": "Keterbukaan menyapa lintas instansi sambil memetakan peran dan menawarkan kontribusi spesifik langsung membangun kepercayaan di tim baru, jauh lebih aktif daripada hanya memperkenalkan diri secara formal lalu menunggu arahan ketua.",
    "tip": "Di tim lintas instansi baru, tunjukkan keterbukaan, sikap menghargai peran, dan inisiatif kontribusi sejak awal."
  },
  {
    "id": "tkp-jej-003",
    "subPattern": "koordinasi-lintas-unit-dan-instansi",
    "difficulty": "sedang",
    "prompt": "Saat mempersiapkan pameran pelayanan publik terpadu kabupaten, bidang kehumasan dan bidang sarana prasarana saling lempar tanggung jawab soal penyiapan jaringan internet stan layanan. Sebagai koordinator acara, sikap Anda adalah ...",
    "options": [
      "Menghubungi pimpinan kedua bidang secara terpisah untuk menanyakan kesediaan dukungan teknis agar pemasangan stan segera berjalan.",
      "Menyusun daftar kebutuhan panitia serta meminta kedua bidang melaporkan kesiapan masing-masing sebelum pameran dibuka.",
      "Mempertemukan wakil kedua bidang untuk memetakan kebutuhan jaringan stan lalu membagi tugas sampai uji coba lapangan selesai.",
      "Mengusulkan peniadaan layanan konsultasi daring saat pameran agar panitia tidak terhambat ketidaksepakatan dua bidang tersebut.",
      "Menegur perwakilan kedua bidang melalui grup percakapan besar kantor karena dianggap memperlambat persiapan pameran bersama."
    ],
    "optionScores": [
      4,
      3,
      5,
      2,
      1
    ],
    "answer": "C",
    "explanation": "Mempertemukan kedua bidang untuk membagi tugas teknis hingga tahap uji coba selesai menyelesaikan wilayah abu-abu secara tuntas, lebih menyatukan daripada hanya menghubungi pimpinan masing-masing secara terpisah.",
    "tip": "Selesaikan wilayah abu-abu antarunit dengan fasilitasi dialog kolaboratif, bukan menyalahkan atau mendiamkan."
  },
  {
    "id": "tkp-jej-004",
    "subPattern": "koordinasi-lintas-unit-dan-instansi",
    "difficulty": "sedang",
    "prompt": "Unit Anda memerlukan data realisasi pembangunan dari kecamatan paling lambat hari Kamis untuk laporan bupati, namun hingga Selasa sore baru separuh kecamatan mengirimkannya karena operator kecamatan sibuk kegiatan penyaluran bantuan. Langkah koordinasi paling efektif Anda adalah ...",
    "options": [
      "Menunggu kiriman data dari kecamatan yang masih memproses sambil menyusun rekap sementara dan memantau wilayah yang sudah masuk.",
      "Mengirimkan surat pengingat resmi beserta lampiran templat tabel ringkas sekaligus mengimbau para operator kecamatan melengkapi data sebelum Kamis.",
      "Menggunakan data realisasi tahun lalu untuk kolom kecamatan yang belum melapor agar laporan bupati tetap terlihat penuh pada hari Kamis.",
      "Menghubungi koordinator operator kecamatan secara halus untuk menggali kendala lapangan, memberi format ringkas, dan mengatur jadwal bertahap.",
      "Mengirimkan peringatan batas waktu tegas kepada seluruh kecamatan agar mendahulukan laporan unit Anda di atas kesibukan lapangan lainnya."
    ],
    "optionScores": [
      3,
      4,
      1,
      5,
      2
    ],
    "answer": "D",
    "explanation": "Komunikasi empatik yang menggali kendala riil mitra, mempermudah format, dan mengatur jadwal kirim bertahap memastikan tenggat tercapai tanpa menekan, lebih solutif daripada sekadar mengirim surat pengingat formal satu arah.",
    "tip": "Saat mitra kerja terhambat tenggat, komunikasikan kendalanya, bantu permudah formatnya, dan kawal hingga tuntas."
  },
  {
    "id": "tkp-jej-005",
    "subPattern": "koordinasi-lintas-unit-dan-instansi",
    "difficulty": "sedang",
    "prompt": "Sebuah lembaga riset perguruan tinggi menawarkan kolaborasi kajian dampak kebijakan transportasi publik bersama dinas tempat Anda bekerja tanpa biaya APBD, tetapi sebagian rekan khawatir kerja sama eksternal menambah beban rapat tim. Pendapat dan tindakan Anda adalah ...",
    "options": [
      "Menyepakati diskusi awal secara informal bersama peneliti kampus tanpa melibatkan pimpinan agar prosesnya tidak memicu rapat internal panjang.",
      "Menolak langsung tawaran kajian perguruan tinggi tersebut karena dianggap berpotensi menambah beban rapat rutin pegawai di dalam unit kerja.",
      "Mendukung tawaran riset kampus dan segera mengajukannya kepada pimpinan unit agar tim teknis menyiapkan data mentah sesuai permintaan peneliti.",
      "Menunda jawaban kerja sama secara sopan beberapa bulan ke depan hingga seluruh agenda utama pegawai di kantor berjalan lebih longgar.",
      "Menyambut kolaborasi secara prosedural dengan merumuskan ruang lingkup kerja sama dan jadwal rapat terukur agar kualitas kebijakan naik tanpa membebani tim."
    ],
    "optionScores": [
      2,
      1,
      4,
      3,
      5
    ],
    "answer": "E",
    "explanation": "Menyambut kemitraan akademis lewat penyusunan ruang lingkup resmi dan jadwal koordinasi terukur menjaga akuntabilitas serta beban kerja unit, lebih matang daripada langsung menyetujui tanpa kejelasan batas data dan tata kelola kolaborasi.",
    "tip": "Sambut peluang kolaborasi strategis lintas sektor dengan perumusan peran serta ruang lingkup yang jelas dan akuntabel."
  },
  {
    "id": "tkp-jej-006",
    "subPattern": "koordinasi-lintas-unit-dan-instansi",
    "difficulty": "sedang",
    "prompt": "Instansi Anda dan instansi mitra di kabupaten yang sama akan menyelenggarakan pelatihan UMKM pada bulan yang sama dengan materi pemasaran digital yang hampir mirip. Untuk mencegah tumpang tindih peserta dan anggaran, sikap Anda adalah ...",
    "options": [
      "Menghubungi penanggung jawab dinas mitra guna menyelaraskan jadwal, klaster peserta, dan kesesuaian materi pelatihan.",
      "Meminta instansi mitra membatalkan agenda pelatihan tersebut karena pembinaan pemasaran digital UMKM sudah menjadi program rutin dinas Anda.",
      "Memajukan jadwal pelatihan dinas Anda ke pekan depan agar pelaku UMKM lebih dahulu terdaftar serta mengisi penuh kuota kelas.",
      "Tetap menyelenggarakan pelatihan sesuai anggaran unit sendiri sambil mengimbau pelaku UMKM memilih salah satu kelas yang sesuai minatnya.",
      "Mengirimkan salinan jadwal dan daftar calon peserta dinas Anda secara resmi supaya instansi mitra dapat menyesuaikan agenda mereka."
    ],
    "optionScores": [
      5,
      1,
      2,
      3,
      4
    ],
    "answer": "A",
    "explanation": "Koordinasi horizontal untuk menyelaraskan jadwal, sasaran peserta, dan materi membuat program antarinstansi saling melengkapi dan hemat anggaran, lebih kolaboratif daripada sekadar mengirim pemberitahuan jadwal satu arah tanpa penyesuaian bersama.",
    "tip": "Sinergi antarlembaga menyelaraskan jadwal dan sasaran agar program publik saling melengkapi, bukan saling bersaing."
  },
  {
    "id": "tkp-jej-007",
    "subPattern": "koordinasi-lintas-unit-dan-instansi",
    "difficulty": "sulit",
    "prompt": "Dalam penanggulangan darurat banjir lintas dua kabupaten berbatasan, bantuan logistik dan tim relawan menumpuk di posko wilayah kota yang mudah dijangkau, sementara kecamatan hulu yang paling terisolasi kekurangan pasokan akibat belum adanya koordinasi perbatasan. Sebagai perwakilan unit pada rapat posko gabungan, inisiatif Anda adalah ...",
    "options": [
      "Mengoordinasikan tim unit Anda untuk segera mengirim cadangan logistik ke kecamatan hulu sembari melaporkan pergerakan rute ke posko kota.",
      "Mengusulkan meja data kebutuhan terpadu lintas batas agar pasokan logistik dan relawan tersebar merata ke wilayah paling kritis.",
      "Mencatat laporan kebutuhan logistik wilayah hulu untuk diteruskan kepada pimpinan posko induk sesuai urutan antrean.",
      "Memfokuskan penyaluran cadangan stok logistik posko kota kepada warga di wilayah administrasi kabupaten Anda sebelum membantu perbatasan.",
      "Membatasi informasi jumlah stok gudang posko kota kepada tim kabupaten tetangga supaya alokasi bantuan wilayah Anda tidak ikut berkurang."
    ],
    "optionScores": [
      4,
      5,
      3,
      2,
      1
    ],
    "answer": "B",
    "explanation": "Membangun pusat data kebutuhan terpadu lintas wilayah mengatasi penumpukan bantuan secara sistemik dan adil, jauh lebih berdampak daripada sekadar mengirim bantuan unit sendiri tanpa menyelaraskan koordinasi seluruh posko gabungan.",
    "tip": "Pada darurat lintas wilayah, bangun koordinasi berbasis satu peta kebutuhan tanpa tersekat batas administratif."
  },
  {
    "id": "tkp-jej-008",
    "subPattern": "koordinasi-lintas-unit-dan-instansi",
    "difficulty": "sulit",
    "prompt": "Proyek integrasi sistem data kepegawaian antara tiga unit teknis terhenti sebulan karena masing-masing pimpinan seksi merasa standar keamanan data seksinya paling unggul dan enggan menyesuaikan API sistem lama. Anda bertindak sebagai analis sistem penghubung. Langkah strategis Anda adalah ...",
    "options": [
      "Mengumpulkan seluruh dokumen spesifikasi API dari tiga unit teknis sambil menunggu arahan kebijakan pimpinan tinggi terkait standar bersama.",
      "Berkonsultasi kepada pimpinan bidang teknologi informasi agar menetapkan satu standar API resmi demi menjaga mutu integrasi ketiga seksi.",
      "Menyusun matriks perbandingan objektif ketiga standar lalu berdiskusi dengan tim teknis tiap seksi merumuskan titik temu keamanan.",
      "Merancang jalur pertukaran data sementara secara diam-diam tanpa persetujuan tiga pimpinan seksi agar proyek berjalan.",
      "Mengusulkan pemakaian standar sistem milik seksi terbesar supaya dua unit lain tinggal menyesuaikan diri secara bertahap."
    ],
    "optionScores": [
      3,
      4,
      5,
      1,
      2
    ],
    "answer": "C",
    "explanation": "Mediasi berbasis perbandingan teknis objektif dan dialog antarahli internal melahirkan kesepakatan yang menjaga keamanan sistem serta kehormatan semua seksi, lebih berkelanjutan daripada langsung meminta penetapan sepihak dari atasan.",
    "tip": "Pecahkan kebuntuan teknis antarunit memakai analisis objektif berbasis standar dan dialog titik temu interoperabilitas."
  },
  {
    "id": "tkp-jej-009",
    "subPattern": "membangun-kepercayaan-dan-relasi-profesional",
    "difficulty": "mudah",
    "prompt": "Seorang mitra kerja dari instansi lain menghubungi Anda untuk mengonfirmasi jadwal pengiriman bahan paparan yang sempat Anda janjikan selesai siang ini, namun pekerjaan lapangan mendadak membuat draf baru tercapai separuh. Sikap yang menjaga kepercayaan profesional adalah ...",
    "options": [
      "Mengirimkan bahan paparan versi sebelumnya sebagai pegangan awal mitra tanpa menjelaskan data baru belum rampung.",
      "Menunda membalas pesan konfirmasi mitra hingga seluruh draf selesai agar Anda tidak perlu mengakui keterlambatan.",
      "Menghubungi mitra lebih awal sebelum tenggat untuk memohon kelonggaran waktu hingga sore agar seluruh paparan dapat dikirimkan sekaligus lengkap.",
      "Segera mengabari mitra dengan jujur sebelum tenggat tiba, mengirim bagian draf yang sudah siap, lalu menepati jam kirim sisanya.",
      "Meminta staf pelaksana mengabari mitra bahwa bahan paparan masih disempurnakan dan segera menyusul usai tugas lapangan."
    ],
    "optionScores": [
      2,
      1,
      4,
      5,
      3
    ],
    "answer": "D",
    "explanation": "Memberi kabar proaktif sebelum tenggat sambil mengirimkan bagian yang sudah siap menunjukkan transparansi dan menghargai waktu kerja mitra, lebih konstruktif daripada sekadar meminta mundur jadwal tanpa menyerahkan progres awal.",
    "tip": "Saat progres berisiko meleset, kabari lebih awal secara jujur, kirim progres yang siap, dan tepati waktu lanjutan."
  },
  {
    "id": "tkp-jej-010",
    "subPattern": "membangun-kepercayaan-dan-relasi-profesional",
    "difficulty": "mudah",
    "prompt": "Dalam sebuah forum sosialisasi tingkat kecamatan, seorang tokoh masyarakat mengemukakan keraguan terhadap akurasi manfaat program baru instansi Anda karena pengalaman proyek sebelumnya sempat tersendat di tengah jalan. Respons Anda yang membangun kembali kepercayaan mitra adalah ...",
    "options": [
      "Mengalihkan pembahasan forum ke sesi pembagian materi teknis lain secara cepat supaya keraguan terhadap program lama tidak meluas ke peserta lain.",
      "Menjelaskan bahwa kendala proyek lama terjadi pada masa tim pelaksana sebelumnya sehingga warga tidak perlu meragukan pelaksanaan tahun ini.",
      "Mencatat seluruh keraguan tokoh masyarakat ke dalam notulen terbuka forum sebagai masukan evaluasi untuk diteruskan kepada pimpinan.",
      "Mendengarkan keluhan tokoh tersebut dengan hormat lalu memaparkan rencana pengawasan terbaru agar warga kembali percaya pada programnya.",
      "Menyimak keraguannya dengan sikap terbuka, menjelaskan bukti pembenahan mekanisme pengawasan terbaru, dan mengajaknya ikut memantau pelaksanaan program."
    ],
    "optionScores": [
      1,
      2,
      3,
      4,
      5
    ],
    "answer": "E",
    "explanation": "Memulihkan kepercayaan publik membutuhkan empati, bukti pembenahan sistem, serta pelibatan aktif tokoh masyarakat dalam pengawasan bersama, lebih meyakinkan daripada sekadar memaparkan rencana perbaikan secara lisan tanpa ruang partisipasi.",
    "tip": "Bangun ulang kepercayaan mitra lewat empati terhadap pengalaman masa lalu, bukti perbaikan sistem, dan pelibatan terbuka."
  },
  {
    "id": "tkp-jej-011",
    "subPattern": "membangun-kepercayaan-dan-relasi-profesional",
    "difficulty": "sedang",
    "prompt": "Rekan dari dinas mitra mempercayakan sebuah laporan evaluasi awal internal organisasinya kepada Anda sebagai bahan penyelarasan program bersama. Ketika staf bagian Anda meminta salinan laporan itu untuk dibagikan ke forum diskusi lain di luar ruang lingkup kesepakatan, sikap Anda adalah ...",
    "options": [
      "Menjaga amanah kerahasiaan dengan menolak pembagian di luar kesepakatan tanpa izin resmi dari dinas pemilik laporan.",
      "Menolak permintaan salinan utuh untuk forum luar dengan sopan sambil membantu staf menyusun ringkasan isu umum yang sudah bersifat terbuka.",
      "Mengizinkan staf membaca bagian laporan tertentu di ruang kerja Anda serta melarang penggandaan berkas dalam bentuk apa pun.",
      "Membagikan salinan laporan mitra tersebut hanya kepada anggota tim internal unit kerja dengan syarat tidak menyebarkannya ke forum diskusi eksternal.",
      "Mengirimkan salinan laporan lengkap lewat jalur pesan pribadi kepada staf tersebut sambil berpesan agar sumber dokumen aslinya tidak disebutkan."
    ],
    "optionScores": [
      5,
      4,
      3,
      2,
      1
    ],
    "answer": "A",
    "explanation": "Menjaga kerahasiaan dokumen mitra secara ketat dan mensyaratkan izin resmi pemiliknya adalah fondasi etika jejaring profesional, lebih akuntabel daripada tetap merangkum atau membuka akses isi dokumen tanpa persetujuan pihak pemilik data.",
    "tip": "Kepercayaan jejaring kerja berdiri di atas integritas menjaga amanah kerahasiaan data dan dokumen mitra."
  },
  {
    "id": "tkp-jej-012",
    "subPattern": "membangun-kepercayaan-dan-relasi-profesional",
    "difficulty": "sedang",
    "prompt": "Seorang pegawai penghubung dari mitra lembaga swadaya masyarakat kerap memberikan masukan tajam terhadap pelaksanaan program pemberdayaan di unit Anda. Agar relasi kemitraan tetap sehat dan produktif, cara Anda menjaga komunikasi adalah ...",
    "options": [
      "Membalas setiap surat masukan mitra secara formal mengacu pada petunjuk teknis program yang sedang berjalan.",
      "Menanggapi kritik mitra secara terbuka lewat verifikasi data lapangan dan menjelaskan batas regulasi secara santun.",
      "Mendengarkan seluruh masukan tajam mitra tersebut dengan penuh perhatian pada rapat evaluasi lalu mencatatnya untuk dibahas bersama tim internal.",
      "Menyerahkan balasan seluruh pesan kritik mitra kepada staf administrasi dengan kalimat standar supaya ritme kerja harian Anda tidak terganggu.",
      "Mengurangi intensitas komunikasi informal serta cukup mengundang mitra lembaga tersebut saat agenda pemaparan laporan akhir tahun."
    ],
    "optionScores": [
      3,
      5,
      4,
      1,
      2
    ],
    "answer": "B",
    "explanation": "Merespons kritik mitra dengan verifikasi data lapangan, tindak lanjut nyata, dan penjelasan batas aturan secara santun menjaga kemitraan produktif, lebih efektif daripada sekadar menampung masukan di catatan rapat tanpa umpan balik terukur.",
    "tip": "Respons kritik mitra secara terbuka dan berbasis data; tetap komunikasikan batas regulasi pemerintah dengan santun."
  },
  {
    "id": "tkp-jej-013",
    "subPattern": "membangun-kepercayaan-dan-relasi-profesional",
    "difficulty": "sedang",
    "prompt": "Anda pernah berjanji menghubungkan kepala seksi di unit Anda dengan narasumber kompeten dari asosiasi profesi yang Anda kenal, namun setelah proyek berjalan ternyata jadwal kegiatan sangat padat. Sikap Anda yang paling mencerminkan keandalan jejaring kerja adalah ...",
    "options": [
      "Menyarankan kepala seksi mengirim surat permohonan resmi ke sekretariat asosiasi karena jadwal Anda padat.",
      "Mengabaikan komitmen lisan tersebut karena perkenalan narasumber belum dicatat dalam notulen rapat resmi.",
      "Tetap menepati janji dengan memperkenalkan kedua pihak secara resmi beserta ringkasan agenda kebutuhan agar diskusi berjalan efektif.",
      "Mengirimkan nomor kontak narasumber kepada kepala seksi beserta ringkasan kebutuhan singkat agar keduanya langsung mengatur pertemuan.",
      "Meminta kesediaan kepala seksi menunda agenda perkenalan narasumber hingga rangkaian kegiatan proyek padat bulan ini selesai seluruhnya."
    ],
    "optionScores": [
      2,
      1,
      5,
      4,
      3
    ],
    "answer": "C",
    "explanation": "Keandalan jejaring tercermin saat komitmen ditepati dengan rapi—menjembatani perkenalan formal lengkap dengan konteks agenda kebutuhan, lebih bermakna daripada sekadar meneruskan nomor kontak tanpa pengantar substansi pertemuan.",
    "tip": "Relasi kerja tepercaya ditandai ketepatan menepati komitmen sekecil apa pun secara rapi dan memberi nilai tambah."
  },
  {
    "id": "tkp-jej-014",
    "subPattern": "membangun-kepercayaan-dan-relasi-profesional",
    "difficulty": "sedang",
    "prompt": "Ketika menghadiri rapat koordinasi tingkat provinsi bersama puluhan wakil lembaga lain, Anda melihat seorang pejabat muda dari kabupaten terpencil kesulitan menyampaikan usulan karena forum didominasi pembicara dari kota besar. Sikap Anda adalah ...",
    "options": [
      "Mencatat poin gagasan wakil daerah terpencil itu lalu mengajukan usulannya seolah berasal dari tim instansi Anda.",
      "Lebih memfokuskan diskusi dengan wakil daerah besar karena kesiapan anggaran mereka paling menentukan proyek.",
      "Menyimak jalannya pembahasan rapat provinsi dengan tertib agar seluruh agenda resmi rampung tepat waktu.",
      "Membantu membuka ruang bicara setara di forum rapat, mengapresiasi masukan daerahnya, lalu menjajaki tindak lanjut pascarapat.",
      "Menghampiri wakil daerah terpencil itu saat jeda istirahat rapat untuk mendengar usulannya secara ramah lalu mencatatnya sebagai bahan masukan tim."
    ],
    "optionScores": [
      1,
      2,
      3,
      5,
      4
    ],
    "answer": "D",
    "explanation": "Jejaring kerja inklusif memberi panggung setara di forum resmi bagi mitra daerah kecil agar masukannya didengar pemangku kepentingan lain, lebih memberdayakan daripada hanya menampung gagasannya secara pribadi di luar sesi rapat.",
    "tip": "Jejaring kerja sejati memberi ruang setara bagi seluruh mitra dan menghargai kredit kontribusi tiap pihak."
  },
  {
    "id": "tkp-jej-015",
    "subPattern": "membangun-kepercayaan-dan-relasi-profesional",
    "difficulty": "sulit",
    "prompt": "Di akhir proyek kemitraan yang sukses bersama dua lembaga eksternal, atasan Anda hendak memublikasikan capaian program tersebut di media massa tanpa menyebut peran kedua mitra yang banyak berkontribusi di riset lapangan karena ingin mengangkat nama unit sendiri. Sebagai koordinator proyek, sikap Anda adalah ...",
    "options": [
      "Mengusulkan kepada tim humas agar menyisipkan ucapan terima kasih umum bagi mitra di akhir berita tanpa mengubah fokus pencapaian unit.",
      "Mengikuti arahan pimpinan dalam penerbitan berita sambil mengirim pesan apresiasi pribadi kepada pimpinan kedua lembaga mitra.",
      "Menyetujui pencantuman satu nama instansi saja dalam siaran pers agar narasi capaian program tampil lebih ringkas bagi publik.",
      "Membocorkan naskah berita sepihak itu lebih awal ke mitra eksternal agar mereka segera melayangkan nota keberatan kepada atasan.",
      "Memberikan masukan argumentatif dengan bahasa sopan kepada atasan agar siaran pers memberi pengakuan adil bagi mitra demi keberlanjutan kerja sama."
    ],
    "optionScores": [
      4,
      3,
      2,
      1,
      5
    ],
    "answer": "E",
    "explanation": "Integritas kemitraan menuntut keberanian memberi masukan sopan kepada pimpinan untuk mengakui kontribusi mitra secara adil di ruang publik, lebih menjaga kepercayaan jangka panjang daripada sekadar menyisipkan catatan terima kasih kecil atau meminta maaf diam-diam.",
    "tip": "Keberlanjutan kemitraan dijaga lewat pengakuan kontribusi yang jujur dan adil bagi semua pihak yang terlibat."
  },
  {
    "id": "tkp-jej-016",
    "subPattern": "membangun-kepercayaan-dan-relasi-profesional",
    "difficulty": "sulit",
    "prompt": "Perusahaan mitra penyedia platform pelatihan daring mengalami gangguan teknis pada pekan pertama implementasi program kerja sama hingga memicu keluhan peserta binaan dinas Anda. Di tengah tekanan keluhan, pihak vendor tampak khawatir kontraknya langsung diputus sepihak sebelum diberi kesempatan perbaikan. Tindakan manajerial paling tepat yang menjaga integritas dan efektivitas kemitraan adalah ...",
    "options": [
      "Mengundang tim teknis mitra menelaah gangguan sesuai kontrak, menetapkan batas pulih, dan menyiapkan solusi peserta.",
      "Mengumpulkan seluruh aduan peserta binaan di posko dinas sementara sambil menantikan perbaikan teknis selesai dilakukan oleh tim penyedia platform.",
      "Melayangkan surat peringatan resmi berbasis pasal kontrak kepada mitra sambil menunggu mereka melaporkan jadwal pemulihan sistem secara tertulis.",
      "Memutus kontrak kemitraan secara sepihak pada hari yang sama tanpa rapat klarifikasi meskipun peserta pelatihan tetap membutuhkan layanan berlanjut.",
      "Menerima janji lisan perbaikan dari mitra serta tidak menyusun tolok ukur tenggat tertulis agar hubungan tidak tegang sejak awal."
    ],
    "optionScores": [
      5,
      3,
      4,
      1,
      2
    ],
    "answer": "A",
    "explanation": "Menggabungkan akuntabilitas kontrak dengan evaluasi teknis bersama dan penyiapan jalur layanan alternatif melindungi peserta sekaligus menjaga kemitraan tetap sehat, lebih solutif daripada hanya melayangkan surat peringatan dan menunggu pasif.",
    "tip": "Dalam krisis kemitraan teknis, tegakkan akuntabilitas SLA secara objektif sekaligus utamakan solusi berkelanjutan bagi penerima manfaat."
  },
  {
    "id": "tkp-jej-017",
    "subPattern": "kolaborasi-tim-dan-pembagian-peran",
    "difficulty": "mudah",
    "prompt": "Anda ditugaskan bersama empat rekan menyusun laporan kinerja tahunan unit kerja. Pada pertemuan awal, satu anggota tim terlihat bingung karena tugasnya menuntut pengolahan grafik kompleks yang belum dikuasainya. Sikap Anda yang paling kolaboratif adalah ...",
    "options": [
      "Membiarkannya menuntaskan bagian grafik sesuai pembagian tugas awal demi menjaga kesetaraan beban anggota.",
      "Menawarkan pendampingan singkat cara mengolah grafik sambil menyelaraskan pembagian porsi kerja sesuai keunggulan anggota tim.",
      "Mengusulkan kepada ketua tim untuk mengeluarkan rekan tersebut dari tugas substansi dan mengalihkannya ke urusan penggandaan berkas semata.",
      "Mengambil alih pengerjaan grafik kompleks miliknya agar jadwal aman sementara ia fokus merapikan kelengkapan narasi dan tabel dasar laporan.",
      "Membagikan tautan panduan video pembuatan grafik kepada rekan tersebut agar ia mempelajarinya mandiri demi menjaga mutu laporan."
    ],
    "optionScores": [
      2,
      5,
      1,
      4,
      3
    ],
    "answer": "B",
    "explanation": "Pendampingan langsung yang memberdayakan rekan sekaligus penyesuaian peran membuat kapasitas tim bertumbuh bersama, lebih berkelanjutan daripada mengambil alih seluruh bagian sulitnya tanpa alih keterampilan.",
    "tip": "Tim yang kuat memberdayakan rekan yang kesulitan lewat pendampingan dan penyesuaian peran, bukan mengambil alih total atau mengucilkan."
  },
  {
    "id": "tkp-jej-018",
    "subPattern": "kolaborasi-tim-dan-pembagian-peran",
    "difficulty": "mudah",
    "prompt": "Dalam rapat tim merancang kegiatan bakti sosial instansi, usulan Anda sebenarnya lebih hemat biaya menurut perhitungan pribadi, tetapi mayoritas rekan sepakat memilih konsep rekan lain yang lebih mudah melibatkan banyak komunitas warga. Sikap Anda adalah ...",
    "options": [
      "Mengajukan proposal tandingan terpisah secara langsung kepada pimpinan dinas di luar sepengetahuan ketua tim.",
      "Mengurangi inisiatif di kepanitiaan dan hanya mengerjakan bagian teknis minimal karena usulan Anda tidak terpilih.",
      "Menerima hasil musyawarah tim secara lapang dada, mendukung pelaksanaannya penuh, dan menyumbangkan ide efisiensi untuk konsep terpilih.",
      "Mengikuti keputusan mayoritas tim meski tetap mencatat selisih efisiensi anggaran usulan pribadi untuk bahan evaluasi pada kegiatan tahun depan.",
      "Menghormati keputusan mayoritas anggota rapat lalu menjalankan seluruh peran kepanitiaan yang dibagikan ketua tim dengan tertib dan penuh tanggung jawab."
    ],
    "optionScores": [
      1,
      2,
      5,
      3,
      4
    ],
    "answer": "C",
    "explanation": "Komitmen kolektif sejati tidak berhenti pada sekadar menjalankan tugas yang dibagikan, melainkan ikut memperkuat konsep terpilih dengan gagasan efisiensi konstruktif tanpa menyimpan rasa kecewa yang menghambat kolaborasi.",
    "tip": "Ketika usulan pribadi tidak terpilih di musyawarah tim, dukung keputusan kolektif secara penuh dan perkuat pelaksanaannya."
  },
  {
    "id": "tkp-jej-019",
    "subPattern": "kolaborasi-tim-dan-pembagian-peran",
    "difficulty": "sedang",
    "prompt": "Tiga hari menjelang tenggat penyerahan dokumen strategis, salah satu anggota kunci tim Anda mendadak jatuh sakit dan harus dirawat di rumah sakit sehingga bagiannya tertinggal separuh. Sebagai bagian dari tim yang solid, reaksi terbaik tim bersama Anda adalah ...",
    "options": [
      "Meminta izin kepada ketua tim untuk langsung menangani sendiri seluruh sisa bagian rekan yang sedang sakit supaya target jadwal anggota lain tidak terganggu.",
      "Mengumpulkan bagian dokumen yang sudah rampung lebih dulu sambil mengajukan surat perpanjangan waktu bagi bagian rekan yang dirawat.",
      "Menghubungi rekan yang dirawat di rumah sakit untuk meminta arahan lisan agar penulisan bagiannya tidak melenceng.",
      "Mendoakan kesembuhannya, meminta salinan draf terakhir secara halus tanpa membebani, lalu membagi rata sisa tugas ke anggota lain agar tenggat aman.",
      "Menyerahkan dokumen strategis apa adanya dengan membiarkan bagian rekan tersebut kosong beserta catatan nama penanggung jawab."
    ],
    "optionScores": [
      4,
      3,
      2,
      5,
      1
    ],
    "answer": "D",
    "explanation": "Empati kepada rekan yang sakit yang diiringi redistribusi beban kerja secara merata menjaga keberhasilan kolektif dan mutu dokumen, lebih bijak dan berkelanjutan daripada menanggung seluruh sisa beban sendirian.",
    "tip": "Saat rekan sakit mendadak, jaga empati dan langsung redistribusi sisa pekerjaan tim secara gotong royong."
  },
  {
    "id": "tkp-jej-020",
    "subPattern": "kolaborasi-tim-dan-pembagian-peran",
    "difficulty": "sedang",
    "prompt": "Ketua tim kerja Anda sedang terlalu padat agenda dinas luar sehingga komunikasi instruksi terpotong-potong dan beberapa anggota mulai kebingungan urutan kerja mingguan. Langkah paling tepat Anda adalah ...",
    "options": [
      "Menyelesaikan tugas bagian pribadi sesuai catatan rapat awal sambil menunggu kepulangan ketua tim untuk arahan baru.",
      "Merangkum arahan terakhir ketua dalam pesan grup tim dan mengimbau rekan menanyakan rincian lanjutan di sela dinas beliau.",
      "Mengubah sendiri urutan target mingguan tim tanpa berkonsultasi dengan ketua maupun rekan agar bagian Anda aman.",
      "Meminta rekan paling senior di tim mengambil alih kendali penuh arahan harian selama ketua sedang bertugas di luar.",
      "Menginisiasi penyusunan papan pantau prioritas kerja tim secara ringkas lalu mengonfirmasikan draf urutan tugas ke ketua agar semua selaras."
    ],
    "optionScores": [
      3,
      4,
      1,
      2,
      5
    ],
    "answer": "E",
    "explanation": "Menyusun peta prioritas bersama dan memintakan konfirmasi singkat ketua menjaga keselarasan kerja tanpa melangkahi wewenang, lebih sistematis daripada hanya merangkum pesan lama dan meminta anggota menanyakan ulang satu per satu.",
    "tip": "Isi celah komunikasi pimpinan secara proaktif dengan menyusun peta kerja terstruktur untuk dikonfirmasi bersama."
  },
  {
    "id": "tkp-jej-021",
    "subPattern": "kolaborasi-tim-dan-pembagian-peran",
    "difficulty": "sedang",
    "prompt": "Seorang pegawai berprestasi di tim Anda cenderung ingin mengerjakan setiap tugas penting sendirian karena merasa hasil kerja rekan lain sering kurang sempurna. Sebagai sesama anggota tim, cara bijak membangun budaya kolaborasi adalah ...",
    "options": [
      "Menghargai standar tingginya sambil mengusulkan penyusunan daftar periksa kualitas bersama agar tugas tim lebih dipercaya.",
      "Membiarkannya menangani mayoritas tugas utama seorang diri selama hasil akhir pekerjaan tim tetap mendapatkan penilaian baik dari atasan.",
      "Menawarkan diri secara terbuka membantunya meninjau sebagian draf tugas penting agar ia mulai terbiasa membagi beban kerja bersama tim.",
      "Menjalankan peran pekerjaan pendukung Anda dengan rapi sesuai petunjuknya supaya tidak menimbulkan perdebatan baru dalam kelompok.",
      "Bekerja seadanya pada tugas pelengkap sebagai bentuk ketidaksetujuan karena rekan tersebut tidak memercayai kemampuan anggota tim lain."
    ],
    "optionScores": [
      5,
      2,
      4,
      3,
      1
    ],
    "answer": "A",
    "explanation": "Mengusulkan penyusunan daftar periksa kualitas bersama memberi kepastian standar bagi rekan perfeksionis sehingga pendelegasian ke tim berjalan tulus, lebih sistemik daripada sekadar menawarkan bantuan pribadi yang belum menyentuh pola kerja kolektif.",
    "tip": "Ajak rekan 'solo player' berkolaborasi dengan menyepakati standar mutu (checklist) dan pembagian peran yang jelas sejak awal."
  },
  {
    "id": "tkp-jej-022",
    "subPattern": "kolaborasi-tim-dan-pembagian-peran",
    "difficulty": "sedang",
    "prompt": "Tim Anda menerima umpan balik revisi cukup banyak dari pimpinan atas naskah rancangan yang dikerjakan bersama, membuat semangat beberapa rekan langsung turun. Tindakan Anda untuk menjaga ketangguhan kolaborasi tim adalah ...",
    "options": [
      "Menelusuri bagian naskah yang paling banyak direvisi lalu menunjuk penanggung jawabnya dalam rapat supaya kesalahan serupa tidak terulang.",
      "Mendorong tim melihat revisi sebagai peningkatan kualitas, memetakan daftar koreksi per bagian, dan mengerjakannya serempak.",
      "Menghimpun seluruh catatan koreksi pimpinan ke dalam satu daftar terpisah agar tiap anggota dapat memperbaiki bagiannya masing-masing.",
      "Menunda pembahasan koreksi naskah beberapa hari dahulu agar kekecewaan rekan tim mereda dengan sendirinya.",
      "Menyampaikan pesan penguatan moral di grup kerja serta segera memperbaiki bagian naskah Anda lebih dulu untuk memberi contoh gerak cepat."
    ],
    "optionScores": [
      1,
      5,
      3,
      2,
      4
    ],
    "answer": "B",
    "explanation": "Memetakan koreksi bersama dan mengerjakannya serempak memulihkan semangat tim sekaligus menjaga konsistensi naskah, lebih menggerakkan kolektif daripada sekadar menyemangati lalu memperbaiki bagian sendiri secara terpisah.",
    "tip": "Fokus tim pascarevisi adalah memetakan perbaikan secara terukur bersama, bukan mencari siapa yang paling bersalah."
  },
  {
    "id": "tkp-jej-023",
    "subPattern": "kolaborasi-tim-dan-pembagian-peran",
    "difficulty": "sulit",
    "prompt": "Dalam tim proyek lintas generasi di unit kerja, pegawai senior sangat teliti dalam kepatuhan tata naskah aturan lama tetapi lambat di alur kerja digital, sementara pegawai muda cekatan dengan aplikasi daring namun kurang memperhatikan keabsahan formal berkas. Agar kolaborasi tim menghasilkan kinerja optimal, desain peran terbaik yang dapat Anda gagas adalah ...",
    "options": [
      "Membagi peran tugas terpisah di mana pegawai muda mengolah seluruh data digital dan pegawai senior khusus memeriksa kelengkapan naskah akhir.",
      "Membentuk dua subkelompok terpisah antara pegawai muda dan senior supaya perbedaan ritme tidak memicu gesekan.",
      "Menerapkan kerja berpasangan saling melengkapi antara kecepatan digital pegawai muda dan ketelitian aturan senior disertai alih ilmu.",
      "Menyerahkan seluruh proyek aplikasi ke pegawai muda dan menempatkan pegawai senior khusus mengurus arsip cetak.",
      "Mengadakan sesi pengenalan singkat mengenai standar tata naskah dan aplikasi daring sebelum setiap pegawai bekerja di bagian masing-masing."
    ],
    "optionScores": [
      4,
      2,
      5,
      1,
      3
    ],
    "answer": "C",
    "explanation": "Kerja berpasangan dengan alih ilmu dua arah menyatukan kecepatan digital dan ketajaman regulasi sambil meningkatkan kompetensi kedua generasi, lebih unggul daripada sekadar membagi sekat tugas tanpa transfer keahlian.",
    "tip": "Ubah kesenjangan antargenerasi dari gesekan menjadi keunggulan tim lewat kolaborasi saling melengkapi (mutual mentoring)."
  },
  {
    "id": "tkp-jej-024",
    "subPattern": "kolaborasi-tim-dan-pembagian-peran",
    "difficulty": "sulit",
    "prompt": "Ketika bekerja pada proyek kolaboratif jangka panjang, Anda menyadari adanya dua rekan yang diam-diam mendominasi keputusan strategis rapat hanya berdua sebelum rapat resmi tim dimulai, sehingga anggota tim lainnya hanya kebagian tugas administratif pelengkap. Sebagai sesama anggota yang peduli pada kesehatan jejaring kerja, langkah terbaik Anda adalah ...",
    "options": [
      "Tetap menuntaskan tugas administratif sambil menuliskan usulan strategis Anda secara terbuka di kolom notulen rapat tim.",
      "Mengajak anggota lain di luar rapat resmi membentuk kubu tandingan guna menolak rancangan kedua rekan itu.",
      "Mengajak kedua rekan tersebut berdiskusi empat mata secara santun agar berkenan membuka ruang saran anggota lain sebelum rapat resmi dimulai.",
      "Menyampaikan masukan dengan tenang di forum tim mengenai perlunya agenda pembahasan terbuka sebelum keputusan proyek dikunci.",
      "Menerima pola pengambilan keputusan terbatas tersebut apa adanya demi menghindari ketegangan dengan dua rekan berpengaruh."
    ],
    "optionScores": [
      3,
      1,
      4,
      5,
      2
    ],
    "answer": "D",
    "explanation": "Mengusulkan tata kelola agenda terbuka langsung di forum tim membangun komitmen kolektif dan akuntabilitas seluruh anggota, lebih berdampak luas daripada sekadar membujuk keduanya secara tertutup tanpa mengubah mekanisme rapat.",
    "tip": "Jaga inklusivitas keputusan tim dengan mengusulkan mekanisme pembahasan agenda secara terbuka bagi semua anggota."
  },
  {
    "id": "tkp-jej-025",
    "subPattern": "berbagi-pengetahuan-dan-keterbukaan-informasi",
    "difficulty": "mudah",
    "prompt": "Anda baru saja selesai mengikuti bimbingan teknis (bimtek) pengelolaan arsip elektronik nasional dengan berbagai teknik praktis yang mempercepat pencarian berkas hingga lima kali lipat. Tindakan yang paling mencerminkan budaya berbagi pengetahuan setelah kembali ke kantor adalah ...",
    "options": [
      "Menyimpan baik-baik catatan hasil bimtek sebagai pegangan kerja pribadi saat sewaktu-waktu mendapat penugasan khusus pencarian arsip dari atasan.",
      "Mengunggah seluruh salinan modul resmi dan catatan pelatihan ke folder bersama tim lalu mengajak rekan mempelajarinya di sela waktu kerja luang.",
      "Menerapkan teknik pencarian arsip baru tersebut pada berkas bagian Anda terlebih dahulu sambil bersedia menjelaskan apabila ada rekan yang bertanya.",
      "Menyarankan rekan mendaftar pada angkatan bimtek pusat berikutnya serta mempelajari teknik pengelolaan arsip terbaru langsung dari mentor.",
      "Merangkum teknik praktis bimtek menjadi panduan ringkas, menginisiasi sesi berbagi singkat bersama tim unit, dan mempraktikkannya bersama pada arsip kantor."
    ],
    "optionScores": [
      2,
      4,
      3,
      1,
      5
    ],
    "answer": "E",
    "explanation": "Mengemas ilmu pelatihan ke panduan praktis, mengadakan sesi berbagi, dan mempraktikkannya bersama mempercepat pemerataan kompetensi unit, lebih efektif daripada sekadar mengunggah bahan mentah tanpa pendampingan penerapannya.",
    "tip": "Ilmu hasil pelatihan dinas adalah investasi organisasi—kemas menjadi panduan ringkas dan bagikan kepada tim."
  },
  {
    "id": "tkp-jej-026",
    "subPattern": "berbagi-pengetahuan-dan-keterbukaan-informasi",
    "difficulty": "mudah",
    "prompt": "Seorang pegawai baru CPNS ditempatkan di seksi Anda dan kerap bertanya tentang alur persuratan dinas yang sebenarnya belum memiliki buku panduan ringkas. Sikap paling tepat Anda adalah ...",
    "options": [
      "Membimbing alur dasar persuratan secara sabar, membagikan templat resmi, dan membuka ruang tanya agar ia cepat mandiri.",
      "Meminta pegawai baru tersebut membatasi pertanyaan dasar selama jam kerja karena setiap staf diharapkan cepat menyesuaikan diri secara mandiri.",
      "Menjawab pertanyaan rekan baru secara santun di sela kesibukan sambil memintanya mencatat sendiri alur persuratan agar tidak lupa pada tugas berikutnya.",
      "Menyuruhnya menelusuri tumpukan arsip surat masuk tahun lalu di lemari seksi agar terbiasa memahami pola dan administrasi dinas otodidak.",
      "Mengirimkan kumpulan contoh surat dinas yang telah disetujui pimpinan agar pegawai baru tersebut dapat mempelajarinya secara mandiri di meja kerja."
    ],
    "optionScores": [
      5,
      1,
      3,
      2,
      4
    ],
    "answer": "A",
    "explanation": "Pendampingan terarah disertai templat sah dan ruang tanya jawab yang ramah mempercepat kemandirian rekan baru serta mencegah kesalahan surat, lebih efektif daripada sekadar memberi contoh dokumen tanpa bimbingan alur.",
    "tip": "Bantu rekan baru menjadi mandiri lebih cepat dengan berbagi templat resmi dan pendampingan terstruktur."
  },
  {
    "id": "tkp-jej-027",
    "subPattern": "berbagi-pengetahuan-dan-keterbukaan-informasi",
    "difficulty": "sedang",
    "prompt": "Anda akan menjalani mutasi promosi ke dinas lain bulan depan, padahal selama ini Anda memegang kata akses serta alur lengkap pengelolaan aplikasi pelaporan bulanan unit lama. Agar kelangsungan kinerja unit lama tidak terganggu setelah Anda pindah, tindakan profesional Anda adalah ...",
    "options": [
      "Menyerahkan daftar akses akun dan seluruh direktori arsip pelaporan kepada kepala seksi seminggu sebelum pindah agar segera diteruskan.",
      "Menyusun dokumentasi prosedur kerja tertulis, melatih pengganti secara bertahap, dan menyerahkan akun resmi dengan aman.",
      "Menjelaskan alur singkat penggunaan aplikasi selama beberapa menit tepat di acara perpisahan sebelum pindah tugas.",
      "Tetap memegang kendali akses administrator aplikasi dari kantor baru selama beberapa bulan awal guna mengantisipasi kesulitan teknis unit lama.",
      "Merapikan seluruh berkas pelaporan ke dalam satu folder terpusat serta menyampaikan kesediaan dihubungi lewat telepon jika unit lama menemui kendala."
    ],
    "optionScores": [
      4,
      5,
      2,
      1,
      3
    ],
    "answer": "B",
    "explanation": "Serah terima yang tuntas memadukan panduan tertulis, pelatihan langsung kepada pengganti, dan penyerahan akun secara aman agar layanan tak terputus, lebih tuntas daripada sekadar menyerahkan kata akses kepada atasan tanpa transfer keterampilan.",
    "tip": "Sebelum mutasi/pindah tugas, tuntaskan serah terima dokumentasi kerja dan latih pengganti agar organisasi tetap lancar."
  },
  {
    "id": "tkp-jej-028",
    "subPattern": "berbagi-pengetahuan-dan-keterbukaan-informasi",
    "difficulty": "sedang",
    "prompt": "Di unit Anda kerap terjadi informasi pembaruan jadwal atau kebijakan mendadak hanya beredar di kalangan segelintir pegawai yang duduk di dekat ruang pimpinan, sehingga tim lapangan sering terlambat mengetahuinya. Upaya perbaikan keterbukaan informasi internal yang paling efektif Anda usulkan adalah ...",
    "options": [
      "Mengimbau petugas lapangan untuk rutin memeriksa papan agenda atau menanyakan pembaruan jadwal kepada bagian tata usaha setiap pagi hari.",
      "Membuat grup pesan informal khusus bersama rekan lapangan terdekat agar informasi mendadak lebih cepat tersebar.",
      "Mengusulkan satu kanal pengumuman dan repositori pembaruan resmi terstruktur agar pegawai ruang dan lapangan menerima info serentak.",
      "Berinisiatif meneruskan setiap pembaruan agenda ruang pimpinan ke grup percakapan lapangan segera setelah info diterima.",
      "Menyampaikan persoalan keterlambatan informasi kepada pimpinan hanya apabila terjadi bentrok jadwal lapangan yang menghambat laporan kegiatan."
    ],
    "optionScores": [
      3,
      1,
      5,
      4,
      2
    ],
    "answer": "C",
    "explanation": "Membangun satu sumber informasi resmi yang menjangkau semua pihak serempak mengatasi ketimpangan akses secara permanen, lebih andal daripada sekadar meneruskan pesan secara pribadi yang tetap bergantung pada satu individu.",
    "tip": "Tutup kesenjangan komunikasi internal dengan membangun satu kanal informasi terstruktur yang adil bagi seluruh anggota."
  },
  {
    "id": "tkp-jej-029",
    "subPattern": "berbagi-pengetahuan-dan-keterbukaan-informasi",
    "difficulty": "sedang",
    "prompt": "Anda menemukan rumus lembar sebar (spreadsheet) cerdas yang mempercepat rekonsiliasi data keuangan bulanan dari enam jam menjadi lima belas menit. Sementara itu, bagian sebelah terlihat masih lembur mengerjakan tabel sejenis secara manual. Sikap Anda adalah ...",
    "options": [
      "Memfokuskan pemanfaatan rumus cerdas itu untuk menjaga kecepatan dan mutu laporan agar kinerja unit Anda tetap unggul.",
      "Mengirimkan salinan berkas spreadsheet berisi rumus cepat tersebut kepada koordinator bagian sebelah melalui pesan dinas agar segera dicoba.",
      "Menawarkan bantuan mengolah tabel bagian sebelah memakai rumus Anda setelah seluruh tugas rutin unit selesai.",
      "Mengunjungi bagian sebelah untuk mengenalkan rumus bantu tersebut, menjelaskan cara pakainya, dan membagikan templat siap pakai.",
      "Menyimpan rumus tersebut sebagai rahasia kerja unit sambil menunggu bagian sebelah mengajukan permintaan resmi."
    ],
    "optionScores": [
      2,
      4,
      3,
      5,
      1
    ],
    "answer": "D",
    "explanation": "Berbagi inovasi lintas bagian lengkap dengan penjelasan cara pakai dan templat siap guna melipatgandakan efisiensi organisasi, lebih memberdayakan daripada sekadar mengirim berkas mentah tanpa panduan logika penggunaannya.",
    "tip": "Inovasi kerja yang berdampak lebih luas adalah inovasi yang dibagikan lengkap dengan panduan cara pakai dan pemeliharaannya."
  },
  {
    "id": "tkp-jej-030",
    "subPattern": "berbagi-pengetahuan-dan-keterbukaan-informasi",
    "difficulty": "sedang",
    "prompt": "Dalam proyek riset data terpadu lintas seksi, seorang rekan meminta akses penuh ke tabel basis data yang Anda kelola, tetapi sebagian kolom di dalamnya mengandung data pribadi sensitif warga yang tidak ia perlukan untuk analisis statistiknya. Sikap tepat yang menyeimbangkan kolaborasi dan keamanan informasi adalah ...",
    "options": [
      "Menyerahkan salinan tabel basis data utuh berikut nomor identitas warga kepada rekan tersebut agar langsung dipakai untuk risetnya.",
      "Mengirimkan angka rekapitulasi umum hasil olahan unit saja kepada rekan tersebut tanpa menyerahkan rincian baris tabel untuk mencegah risiko privasi.",
      "Menolak seluruh permintaan akses tabel basis data demi menjaga keamanan informasi pribadi warga meskipun kegiatan riset lintas seksi membutuhkannya.",
      "Meminta rekan tersebut mengajukan formulir permohonan akses data resmi terlebih dahulu kepada pimpinan sebelum Anda menyaring kolom statistiknya.",
      "Menjelaskan aturan perlindungan data dengan baik, lalu segera menyiapkan salinan tabel dengan kolom sensitif tersamarkan agar riset tetap berjalan aman."
    ],
    "optionScores": [
      1,
      3,
      2,
      4,
      5
    ],
    "answer": "E",
    "explanation": "Mengedukasi batas privasi secara baik sambil langsung menyiapkan versi data teranonimkan menjaga keamanan warga tanpa menghambat kerja sama riset, lebih sigap dan kolaboratif daripada langsung memagari akses dengan prosedur birokratis awal.",
    "tip": "Kolaborasi data yang matang memenuhi kebutuhan analisis mitra melalui data teragregasi atau teranonimkan tanpa membocorkan privasi."
  },
  {
    "id": "tkp-jej-031",
    "subPattern": "berbagi-pengetahuan-dan-keterbukaan-informasi",
    "difficulty": "sulit",
    "prompt": "Selama bertahun-tahun, tiap angkatan pelaksana proyek membuat dokumen panduan dari nol setiap kali terjadi pergantian tim karena catatan pembelajaran proyek (lessons learned) tidak pernah diarsipkan terpusat. Untuk membenahi siklus ketidakefisienan tersebut secara berkelanjutan, langkah terbaik yang Anda usulkan adalah ...",
    "options": [
      "Mengusulkan repositori pengetahuan terpusat dan evaluasi pascaproyek agar panduan dan kontak mitra terus terjaga.",
      "Mengumpulkan catatan pembelajaran serta panduan proyek angkatan Anda ke dalam satu folder bersama untuk dijadikan pegangan tim berikutnya.",
      "Mengandalkan bimbingan lisan pegawai senior lintas angkatan sebagai rujukan utama setiap kali tim baru memulai penyusunan proyek serupa.",
      "Mengusulkan kepada pimpinan agar rotasi anggota tim inti proyek dikurangi serta pemahaman alur kerja tidak perlu dimulai dari nol.",
      "Menyarankan ketua tim melampirkan ringkasan kendala lapangan di bagian akhir laporan pertanggungjawaban tahunan proyek sebagai arsip."
    ],
    "optionScores": [
      5,
      4,
      2,
      1,
      3
    ],
    "answer": "A",
    "explanation": "Membangun repositori terpusat disertai budaya evaluasi pascaproyek menciptakan memori institusi yang terus hidup, lebih berkelanjutan daripada sekadar mengumpulkan dokumen pribadi satu angkatan tanpa mekanisme pembaruan rutin.",
    "tip": "Ubah pengetahuan individual menjadi aset institusi lewat dokumentasi pembelajaran bersama (knowledge management system)."
  },
  {
    "id": "tkp-jej-032",
    "subPattern": "berbagi-pengetahuan-dan-keterbukaan-informasi",
    "difficulty": "sulit",
    "prompt": "Seorang rekan senior sangat enggan membagi prosedur teknis penanganan sistem pengarsipan lama karena khawatir posisinya tidak lagi dibutuhkan menjelang masa pensiun atau restrukturisasi tim. Cara persuasif terbaik untuk meruntuhkan sekat penguasaan informasi tunggal (knowledge hoarding) tersebut adalah ...",
    "options": [
      "Mempelajari alur pengarsipan lama melalui berkas surat terdahulu secara mandiri sambil sesekali menanyakan hal paling mendesak kepada beliau.",
      "Menghargai pengalamannya dengan mengajaknya menjadi mentor penyusun modul warisan keahlian agar perannya tetap diakui.",
      "Melaporkan sikap rekan senior tersebut secara tertulis kepada atasan sebagai bentuk penghambatan keterbukaan kerja agar segera diberi teguran.",
      "Mendekati rekan senior tersebut dengan santun untuk menawarkan bantuan merapikan catatan sistem arsip lamanya agar tugas hariannya lebih ringan.",
      "Merancang sistem arsip baru terpisah di luar prosedur lama agar unit tidak terus bergantung pada satu orang."
    ],
    "optionScores": [
      3,
      5,
      1,
      4,
      2
    ],
    "answer": "B",
    "explanation": "Mengubah kekhawatiran kehilangan relevansi menjadi kebanggaan sebagai mentor pemilik warisan keahlian meruntuhkan sekat ilmu secara manusiawi, lebih efektif daripada sekadar membantu merapikan catatan tanpa memberi pengakuan peran strategisnya.",
    "tip": "Atasi keengganan berbagi ilmu (knowledge hoarding) dengan menghargai peran pengajar/mentor dan memberi pengakuan atas kontribusinya."
  },
  {
    "id": "tkp-jej-033",
    "subPattern": "resolusi-konflik-kerja-dan-mediasi",
    "difficulty": "mudah",
    "prompt": "Dua rekan kerja satu ruangan Anda berselisih pendapat keras soal penataan meja kerja dan penggunaan pendingin ruangan hingga mereka saling diam selama tiga hari, padahal suasana dingin tersebut mengganggu kekompakan kerja tim. Sikap Anda yang paling bijak adalah ...",
    "options": [
      "Menjaga jarak dari perselisihan mereka dan berkomunikasi seperlunya saja agar fokus kerja harian tetap terjaga.",
      "Berbicara secara terpisah dengan kedua rekan tersebut agar ketegangan mereda sebelum mengusulkan pengaturan suhu pendingin ruangan di batas tengah.",
      "Mempertemukan kedua rekan dalam dialog santai di waktu jeda untuk mendengar kebutuhan masing-masing dan mencari jalan tengah adil.",
      "Mengusulkan pengaturan suhu pendingin ruangan secara bergantian per hari dengan ramah sembari menunggu kedua rekan berdamai sendiri.",
      "Melaporkan suasana ruangan yang kaku tersebut kepada atasan sambil mengusulkan pemindahan meja salah satu rekan."
    ],
    "optionScores": [
      2,
      4,
      5,
      3,
      1
    ],
    "answer": "C",
    "explanation": "Memfasilitasi dialog dua arah di suasana netral memulihkan hubungan kerja sekaligus menghasilkan kesepakatan yang diterima kedua belah pihak, lebih menyeluruh daripada sekadar berbicara terpisah tanpa mempertemukan keduanya.",
    "tip": "Saat menjadi penengah di lingkungan kerja, jaga posisi netral, dengarkan kebutuhan dua sisi, dan fasilitasi kompromi win-win."
  },
  {
    "id": "tkp-jej-034",
    "subPattern": "resolusi-konflik-kerja-dan-mediasi",
    "difficulty": "mudah",
    "prompt": "Dalam diskusi perumusan program kerja tim, salah satu rekan menganggap masukan Anda sebagai upaya menyingkirkan gagasannya, sehingga ia merespons dengan nada tersinggung di depan rapat. Cara Anda merespons situasi tersebut adalah ...",
    "options": [
      "Membalas tanggapan tersebut dengan nada tegas dan data pembanding rinci agar peserta rapat melihat kelemahan konsep rekan itu.",
      "Menghentikan penyampaian rincian usulan Anda sementara agar suasana rapat kembali tenang dan diskusi segera berlanjut.",
      "Meminta pimpinan rapat dengan sopan menimbang kedua usulan berdasar angka efisiensi saja agar diskusi tidak terhambat perasaan.",
      "Tetap tenang dan bijak, menegaskan masukan ditujukan demi mutu program, memuji sisi baik idenya, lalu menawarkan penyatuan gagasan.",
      "Menjelaskan dengan tenang dan santun bahwa usulan Anda tidak bermaksud menyingkirkan idenya, lalu menyerahkan keputusan akhir kepada forum rapat."
    ],
    "optionScores": [
      1,
      3,
      2,
      5,
      4
    ],
    "answer": "D",
    "explanation": "Memisahkan kritik gagasan dari serangan pribadi sambil menghargai poin baik ide rekan dan menyatukan keunggulan keduanya menjaga harmoni serta mutu program, lebih inklusif daripada sekadar menyerahkan suara ke forum tanpa merangkul idenya.",
    "tip": "Pisahkan argumen teknis dari ego personal; validasi niat baik rekan lalu ajak menyatukan keunggulan gagasan."
  },
  {
    "id": "tkp-jej-035",
    "subPattern": "resolusi-konflik-kerja-dan-mediasi",
    "difficulty": "sedang",
    "prompt": "Terjadi miskomunikasi pesan teks di grup tim yang membuat rekan kerja Anda merasa disalahkan atas keterlambatan pengiriman draf, sehingga suasana rapat pagi menjadi kaku dan penuh sindiran. Sebagai pengirim pesan awal tersebut, tindakan paling tepat Anda adalah ...",
    "options": [
      "Mengirimkan pesan pribadi yang sopan kepada rekan tersebut seusai rapat untuk meluruskan maksud kalimat Anda tanpa bermaksud menyalahkan kinerjanya.",
      "Bersikap tenang tidak menanggapi sindiran di rapat serta menunggu suasana kerja membaik sendiri seiring tuntasnya draf laporan minggu ini.",
      "Membuka kembali riwayat pesan grup di tengah rapat untuk membuktikan bahwa redaksi kalimat Anda sebenarnya sudah sesuai alur jadwal kerja.",
      "Menyampaikan klarifikasi singkat mengenai maksud jadwal di grup percakapan tersebut saat rapat berlangsung supaya tidak ada lagi tafsir yang keliru.",
      "Menemui rekan tersebut secara langsung dengan hangat, mengklarifikasi maksud pesan sebenarnya, lalu tulus meminta maaf atas pilihan kata yang keliru."
    ],
    "optionScores": [
      4,
      2,
      1,
      3,
      5
    ],
    "answer": "E",
    "explanation": "Klarifikasi tatap muka yang tulus disertai kesiapan meminta maaf atas redaksi pesan memulihkan kehangatan relasi secara utuh, lebih melegakan dan manusiawi daripada sekadar mengirim pesan teks ulang yang masih berisiko kaku.",
    "tip": "Selesaikan salah paham komunikasi teks melalui dialog tatap muka secara terbuka, jujur, dan berjiwa besar meminta maaf bila redaksi kurang tepat."
  },
  {
    "id": "tkp-jej-036",
    "subPattern": "resolusi-konflik-kerja-dan-mediasi",
    "difficulty": "sedang",
    "prompt": "Rekan satu unit dan rekan mitra teknis saling menyalahkan di tengah rapat evaluasi bersama tentang penyebab tidak sinkronnya jumlah data laporan bulan lalu, sehingga fokus rapat keluar dari pencarian perbaikan. Sebagai anggota rapat yang objektif, intervensi paling konstruktif Anda adalah ...",
    "options": [
      "Mengarahkan forum menelusuri alur data secara faktual tanpa menyalahkan lalu membangun mekanisme cek silang bersama.",
      "Mencatat perbedaan versi data kedua pihak secara lengkap dalam notulen rapat untuk diteruskan kepada pimpinan sebagai bahan telaah lanjutan.",
      "Meminta kedua pihak menuntaskan perdebatan siapa yang paling keliru lebih dulu sebelum rapat beralih ke agenda target kerja bulan depan.",
      "Mengusulkan agar perwakilan unit dan mitra teknis memeriksa ulang log pengiriman data seusai rapat demi menemukan sumber selisih angka.",
      "Menjelaskan versi rekapan data milik unit sendiri terlebih dahulu kepada forum sebelum memberi kesempatan mitra mengklarifikasi catatannya."
    ],
    "optionScores": [
      5,
      3,
      1,
      4,
      2
    ],
    "answer": "A",
    "explanation": "Mengalihkan perdebatan personal menuju pemeriksaan fakta proses dan membangun mekanisme cek silang di forum menyelesaikan akar masalah sekaligus menjaga kemitraan, lebih sigap daripada menunda pemeriksaan log hingga rapat selesai.",
    "tip": "Saat tim saling menyalahkan, alihkan fokus diskusi ke fakta proses dan mekanisme pencegahan di masa depan."
  },
  {
    "id": "tkp-jej-037",
    "subPattern": "resolusi-konflik-kerja-dan-mediasi",
    "difficulty": "sedang",
    "prompt": "Dua anggota tim lapangan tidak lagi bersedia dikirim dalam satu regu tugas karena perbedaan gaya kerja yang sangat kontras antara si cepat-eksekusi dan si sangat-teliti, padahal keterbatasan SDM menuntut keduanya berpasangan pekan ini. Langkah bijak Anda selaku koordinator regu adalah ...",
    "options": [
      "Menugaskan keduanya tetap berangkat sambil mengingatkan adanya catatan penilaian kinerja perilaku tim.",
      "Memfasilitasi dialog keduanya untuk menyatukan target akhir misi lalu menentukan tugas sesuai keunggulan gaya masing-masing.",
      "Menemui keduanya secara terpisah untuk menekankan profesionalisme tugas lalu membagi daftar pekerjaan lapangan yang ketat untuk ditaati.",
      "Mengimbau kedua anggota regu saling menyesuaikan ritme kerja selama sepekan ini demi kelancaran tugas lapangan di tengah keterbatasan personel.",
      "Mengganti susunan pasangan regu lapangan pekan ini secara sepihak tanpa persetujuan pimpinan unit agar keduanya tidak bekerja dalam tim yang sama."
    ],
    "optionScores": [
      2,
      5,
      4,
      3,
      1
    ],
    "answer": "B",
    "explanation": "Menyatukan komitmen target melalui dialog dan membagi peran komplementer mengubah perbedaan gaya kerja menjadi kekuatan tim, lebih membangun rasa memiliki daripada sekadar memberi imbauan terpisah dan daftar tugas kaku.",
    "tip": "Alih-alih memaksakan keseragaman gaya kerja, ubah perbedaan karakter tim menjadi pembagian peran komplementer."
  },
  {
    "id": "tkp-jej-038",
    "subPattern": "resolusi-konflik-kerja-dan-mediasi",
    "difficulty": "sedang",
    "prompt": "Beredar kabar burung di ruang kerja yang menuduh salah satu rekan divisi lain sengaja menahan berkas perjalanan dinas karena persoalan sentimen pribadi, sehingga beberapa anggota tim Anda mulai bersikap bermusuhan terhadapnya. Sikap dewasa Anda adalah ...",
    "options": [
      "Melaporkan dugaan penahanan berkas oleh divisi sebelah ke pengawas internal berdasarkan isu ruang kerja.",
      "Memeriksa sendiri status berkas lewat sistem persuratan tanpa membahas isu tersebut agar ketenangan ruang terjaga.",
      "Tidak menelan kabar burung mentah-mentah, melakukan konfirmasi sopan ke divisi terkait, lalu meluruskan salah sangka kepada tim dengan fakta.",
      "Mengingatkan tim lebih berhati-hati saat menyerahkan berkas ke divisi sebelah untuk mencegah potensi hambatan serupa sebagaimana isu yang beredar.",
      "Mengingatkan anggota tim agar tetap bersikap sopan dan profesional kepada divisi lain sambil menunggu kejelasan resmi status berkas dinas tersebut."
    ],
    "optionScores": [
      1,
      3,
      5,
      2,
      4
    ],
    "answer": "C",
    "explanation": "Melakukan konfirmasi sopan langsung ke sumbernya dan menjernihkan persepsi tim dengan fakta memutus rantai prasangka secara tuntas, lebih aktif memulihkan jejaring daripada sekadar menasihati tim tanpa memverifikasi kebenaran.",
    "tip": "Tangkis rumor di tempat kerja melalui verifikasi fakta yang tenang dan tidak langsung memvonis."
  },
  {
    "id": "tkp-jej-039",
    "subPattern": "resolusi-konflik-kerja-dan-mediasi",
    "difficulty": "sulit",
    "prompt": "Dalam koalisi kerja tiga instansi, terjadi sengketa kepemilikan kredit prestasi atas inovasi aplikasi layanan bersama menjelang lomba inovasi nasional: instansi A merasa memiliki ide konsep awal, instansi B membangun kode sistem, dan instansi C melakukan uji coba lapangan masif. Anda ditunjuk sebagai moderator tim perumus pengajuan lomba. Solusi adil dan menyatukan yang Anda tawarkan adalah ...",
    "options": [
      "Mengusulkan pencantuman nama koalisi tiga instansi secara umum pada formulir lomba tanpa merinci porsi kontribusi demi mempercepat kesepakatan pendaftaran.",
      "Menyarankan instansi penyandang anggaran terbesar dicatat sebagai pemilik utama dan dua mitra lain sebagai pendukung.",
      "Mendaftarkan aplikasi lebih dulu atas nama satu instansi yang berkasnya siap agar tenggat lomba tidak terlewat.",
      "Memfasilitasi kesepakatan ketiga pimpinan mendaftarkan inovasi bersama dengan memetakan kontribusi tiap instansi secara adil.",
      "Mengumpulkan klaim kontribusi tiap instansi lalu menyerahkan penetapan nama pengusul kepada pimpinan daerah."
    ],
    "optionScores": [
      4,
      2,
      1,
      5,
      3
    ],
    "answer": "D",
    "explanation": "Memfasilitasi kesepakatan kepemilikan bersama dengan pemetaan kontribusi spesifik yang transparan memberi penghargaan adil bagi semua mitra koalisi, lebih kuat menjaga keadilan jejaring daripada sekadar menulis nama koalisi tanpa rincian peran.",
    "tip": "Atasi perebutan kredit kolaborasi lewat konsep kepemilikan bersama dengan penyebutan porsi kontribusi yang proporsional dan adil."
  },
  {
    "id": "tkp-jej-040",
    "subPattern": "resolusi-konflik-kerja-dan-mediasi",
    "difficulty": "sulit",
    "prompt": "Rekan kerja terdekat yang juga sering membantu pekerjaan Anda terlibat perselisihan prosedur serius dengan staf unit lain yang memang dikenal kaku secara aturan, dan setelah menelaah berkas ternyata posisi rekan dekat Anda memang keliru secara regulasi. Rekan dekat tersebut meminta Anda membelanya pada rapat mediasi besok pagi. Sikap paling berintegritas dalam menjaga jejaring kerja adalah ...",
    "options": [
      "Hadir di rapat mediasi sebagai pendengar netral lalu mengusulkan penafsiran akhir prosedur diserahkan ke bagian hukum.",
      "Membantu rekan dekat menyusun pembelaan dari celah aturan agar posisinya tampak kuat ketika berhadapan di forum mediasi.",
      "Menjelaskan secara santun kepada rekan dekat sebelum rapat bahwa Anda wajib menjaga netralitas sesuai regulasi ketika mediasi berlangsung.",
      "Memilih mengajukan tugas lapangan mendadak saat jadwal mediasi berlangsung agar tidak perlu berpihak di antara keduanya.",
      "Berbicara jujur empat mata ke rekan dekat soal kekeliruan prosedurnya, membantunya menyusun langkah koreksi, dan bersikap objektif saat mediasi."
    ],
    "optionScores": [
      3,
      1,
      4,
      2,
      5
    ],
    "answer": "E",
    "explanation": "Integritas jejaring sejati berani berkata jujur empat mata sambil membantu sahabat menyiapkan perbaikan sebelum bersikap adil di mediasi, lebih matang dan suportif daripada sekadar menyatakan sikap netral tanpa mendampingi langkah koreksinya.",
    "tip": "Bela kebenaran prosedur secara objektif saat mediasi, namun tetap sampaikan masukan secara jujur dan empatik kepada rekan sebelum forum."
  }
];

export const jejaringKerjaQuestions: readonly Question[] = buildTkpPatternQuestions(
  "jejaring-kerja",
  [...jejaringKerjaDrafts, ...jejaringKerjaBatch2Drafts, ...jejaringKerjaBatch3Drafts],
);
