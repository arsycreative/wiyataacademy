import type { QuestionDraft } from "@/modules/question-bank/domain/question";

export const silogismeBatch3Drafts: readonly QuestionDraft[] = [
  // =========================================================================
  // SILOGISME KATEGORIS (BAGIAN 2: KUANTOR PARTIKULAR & KOMBINASI, 101 - 120)
  // =========================================================================
  {
    id: "tiu-sil-101",
    subPattern: "silogisme-kategoris",
    difficulty: "mudah",
    prompt:
      "Semua pegawai bidang humas menguasai teknik komunikasi publik.\nSebagian pegawai di lantai tiga adalah pegawai bidang humas.\nSimpulan yang tepat adalah ...",
    options: [
      "Semua pegawai di lantai tiga menguasai teknik komunikasi publik",
      "Sebagian pegawai di lantai tiga menguasai teknik komunikasi publik",
      "Tidak ada pegawai di lantai tiga yang menguasai komunikasi publik",
      "Semua penguasai teknik komunikasi publik bertugas di lantai tiga",
      "Sebagian pegawai bidang humas tidak menguasai komunikasi publik",
    ],
    answer: "B",
    explanation:
      "Kombinasi kuantor universal ('Semua') dan partikular ('Sebagian') selalu menghasilkan simpulan partikular ('Sebagian'). Pegawai lantai tiga yang merupakan pegawai humas pasti menguasai komunikasi publik.",
    tip: "Aturan silogisme kategoris: Semua + Sebagian -> Sebagian.",
  },
  {
    id: "tiu-sil-102",
    subPattern: "silogisme-kategoris",
    difficulty: "mudah",
    prompt:
      "Semua perawat di rumah sakit rujukan telah mengikuti pelatihan gawat darurat.\nSebagian anggota tim relawan bencana adalah perawat di rumah sakit rujukan.\nSimpulan yang sah adalah ...",
    options: [
      "Semua anggota tim relawan bencana adalah perawat rumah sakit rujukan",
      "Tidak ada anggota tim relawan bencana yang mengikuti pelatihan gawat darurat",
      "Semua peserta pelatihan gawat darurat menjadi relawan bencana",
      "Sebagian anggota tim relawan bencana telah mengikuti pelatihan gawat darurat",
      "Sebagian perawat rumah sakit rujukan tidak terlatih gawat darurat",
    ],
    answer: "D",
    explanation:
      "Dengan menghubungkan term tengah 'perawat di rumah sakit rujukan', diperoleh simpulan eksistensial: sebagian anggota tim relawan bencana telah mengikuti pelatihan gawat darurat.",
    tip: "Coret kelompok penghubung lalu pertahankan kuantor 'Sebagian' dari premis kedua.",
  },
  {
    id: "tiu-sil-103",
    subPattern: "silogisme-kategoris",
    difficulty: "sedang",
    prompt:
      "Semua peserta pelatihan keamanan siber wajib membawa laptop kerja.\nBeberapa analis data instansi adalah peserta pelatihan keamanan siber.\nSimpulan yang tepat adalah ...",
    options: [
      "Beberapa analis data instansi wajib membawa laptop kerja",
      "Semua analis data instansi wajib membawa laptop kerja",
      "Tidak ada analis data instansi yang mengikuti pelatihan keamanan siber",
      "Semua pembawa laptop kerja adalah analis data instansi",
      "Beberapa peserta pelatihan tidak membawa laptop kerja",
    ],
    answer: "A",
    explanation:
      "Kata 'Beberapa' bermakna sama dengan 'Sebagian'. Dari Semua B adalah C dan Beberapa A adalah B, disimpulkan Beberapa A adalah C.",
    tip: "Perlakukan kata 'Beberapa' dan 'Ada' sama persis dengan kuantor 'Sebagian'.",
  },
  {
    id: "tiu-sil-104",
    subPattern: "silogisme-kategoris",
    difficulty: "sedang",
    prompt:
      "Semua kendaraan dinas listrik mendapatkan prioritas pengisian daya di kantor pusat.\nSebagian kendaraan operasional direktorat adalah kendaraan dinas listrik.\nSimpulan yang paling tepat adalah ...",
    options: [
      "Semua kendaraan operasional direktorat adalah kendaraan dinas listrik",
      "Tidak ada kendaraan dinas listrik di direktorat",
      "Semua kendaraan yang mengisi daya di kantor pusat milik direktorat",
      "Sebagian kendaraan dinas listrik tidak mendapat prioritas pengisian daya",
      "Sebagian kendaraan operasional direktorat mendapatkan prioritas pengisian daya di kantor pusat",
    ],
    answer: "E",
    explanation:
      "Irisan antara kendaraan operasional direktorat dan kendaraan dinas listrik mewarisi sifat kendaraan dinas listrik, sehingga sebagian kendaraan operasional direktorat mendapat prioritas pengisian daya.",
    tip: "Waspadai pengecoh yang mengubah kata 'Sebagian' menjadi 'Semua'.",
  },
  {
    id: "tiu-sil-105",
    subPattern: "silogisme-kategoris",
    difficulty: "sedang",
    prompt:
      "Semua modul pelatihan ASN berbasis video dilengkapi teks takarir bahasa Indonesia.\nSebagian materi orientasi pegawai baru merupakan modul pelatihan ASN berbasis video.\nSimpulan yang tepat adalah ...",
    options: [
      "Semua materi orientasi pegawai baru berbentuk video bertakarir",
      "Tidak ada materi orientasi pegawai baru yang memiliki takarir",
      "Sebagian materi orientasi pegawai baru dilengkapi teks takarir bahasa Indonesia",
      "Semua materi yang bertakarir adalah materi orientasi pegawai baru",
      "Sebagian modul video tidak dilengkapi teks takarir bahasa Indonesia",
    ],
    answer: "C",
    explanation:
      "Premis 1 berlaku menyeluruh untuk semua modul video, dan Premis 2 menyebut sebagian materi orientasi termasuk modul tersebut, sehingga sebagian materi orientasi dilengkapi takarir.",
    tip: "Hubungkan himpunan pada kuantor 'Sebagian' menuju sifat wajib dari kuantor 'Semua'.",
  },
  {
    id: "tiu-sil-106",
    subPattern: "silogisme-kategoris",
    difficulty: "sulit",
    prompt:
      "Semua sistem pembayaran QRIS lintas negara diawasi oleh otoritas moneter.\nSebagian kanal transaksi pelaku ekspor UMKM memakai sistem pembayaran QRIS lintas negara.\nSimpulan yang tepat adalah ...",
    options: [
      "Semua kanal transaksi ekspor UMKM memakai QRIS lintas negara",
      "Tidak ada kanal transaksi ekspor UMKM yang diawasi otoritas moneter",
      "Otoritas moneter hanya mengawasi pelaku ekspor UMKM",
      "Semua yang diawasi otoritas moneter adalah kanal transaksi UMKM",
      "Sebagian kanal transaksi pelaku ekspor UMKM diawasi oleh otoritas moneter",
    ],
    answer: "E",
    explanation:
      "Karena semua QRIS lintas negara diawasi otoritas moneter dan sebagian kanal UMKM menggunakannya, maka pasti ada sebagian kanal transaksi UMKM yang diawasi otoritas moneter.",
    tip: "Perhatikan bahwa sifat dari himpunan besar hanya diwariskan kepada sebagian anggota yang beririsan.",
  },
  {
    id: "tiu-sil-107",
    subPattern: "silogisme-kategoris",
    difficulty: "sulit",
    prompt:
      "Sebagian usulan anggaran daerah tidak mencantumkan kajian dampak lingkungan.\nSemua proyek yang berhak menerima dana infrastruktur hijau wajib mencantumkan kajian dampak lingkungan.\nSimpulan yang sah adalah ...",
    options: [
      "Sebagian usulan anggaran daerah tidak berhak menerima dana infrastruktur hijau",
      "Semua usulan anggaran daerah tidak berhak menerima dana infrastruktur hijau",
      "Tidak ada usulan anggaran daerah yang menerima dana infrastruktur hijau",
      "Semua proyek penerima dana infrastruktur hijau berasal dari anggaran daerah",
      "Sebagian proyek penerima dana infrastruktur hijau tidak memiliki kajian dampak lingkungan",
    ],
    answer: "A",
    explanation:
      "Usulan anggaran yang tidak memiliki kajian dampak lingkungan (ada sebagian menurut Premis 1) otomatis tidak memenuhi syarat wajib Premis 2, sehingga sebagian usulan anggaran daerah tidak berhak menerima dana tersebut.",
    tip: "Uji anggota partikular yang tidak memiliki syarat wajib terhadap ketentuan kategori penerima dana.",
  },
  {
    id: "tiu-sil-108",
    subPattern: "silogisme-kategoris",
    difficulty: "sulit",
    prompt:
      "Semua pegawai yang lulus pelatihan analisis kebijakan ditugaskan di unit perencanaan.\nSemua staf di unit perencanaan menyusun naskah ringkasan kebijakan.\nSebagian peserta diklat bulan Mei lulus pelatihan analisis kebijakan.\nSimpulan yang paling tepat adalah ...",
    options: [
      "Semua peserta diklat bulan Mei menyusun naskah ringkasan kebijakan",
      "Tidak ada peserta diklat bulan Mei yang ditugaskan di unit perencanaan",
      "Semua staf di unit perencanaan adalah peserta diklat bulan Mei",
      "Sebagian peserta diklat bulan Mei menyusun naskah ringkasan kebijakan",
      "Sebagian staf unit perencanaan tidak menyusun naskah ringkasan kebijakan",
    ],
    answer: "D",
    explanation:
      "Dari dua premis 'Semua' didapat: semua lulusan pelatihan analisis kebijakan menyusun naskah ringkasan kebijakan. Karena sebagian peserta diklat Mei lulus pelatihan itu, maka sebagian peserta diklat Mei menyusun naskah ringkasan kebijakan.",
    tip: "Gabungkan dua premis universal terlebih dahulu sebelum memadukannya dengan premis partikular.",
  },
  {
    id: "tiu-sil-109",
    subPattern: "silogisme-kategoris",
    difficulty: "mudah",
    prompt:
      "Semua perpustakaan daerah percontohan memiliki katalog buku digital.\nBeberapa fasilitas literasi di Kecamatan Merpati adalah perpustakaan daerah percontohan.\nSimpulan yang tepat adalah ...",
    options: [
      "Semua fasilitas literasi di Kecamatan Merpati memiliki katalog buku digital",
      "Beberapa fasilitas literasi di Kecamatan Merpati memiliki katalog buku digital",
      "Tidak ada perpustakaan daerah di Kecamatan Merpati yang memiliki buku digital",
      "Semua pemilik katalog buku digital berada di Kecamatan Merpati",
      "Beberapa perpustakaan daerah percontohan tidak memiliki katalog buku digital",
    ],
    answer: "B",
    explanation:
      "Premis 1 universal positif, Premis 2 partikular positif. Simpulan yang sah berbentuk partikular positif tentang fasilitas literasi di Kecamatan Merpati.",
    tip: "Pertahankan kata 'Beberapa' pada kesimpulan jika premis penghubungnya tidak mencakup keseluruhan subjek.",
  },
  {
    id: "tiu-sil-110",
    subPattern: "silogisme-kategoris",
    difficulty: "sedang",
    prompt:
      "Semua dosen pembimbing riset di fakultas teknik berstatus aktif meneliti.\nTidak ada mahasiswa tingkat sarjana yang berstatus dosen pembimbing riset.\nSebagian peserta simposium nasional adalah mahasiswa tingkat sarjana.\nSimpulan yang pasti benar adalah ...",
    options: [
      "Semua peserta simposium nasional adalah dosen pembimbing riset",
      "Semua peserta simposium nasional tidak aktif meneliti",
      "Sebagian peserta simposium nasional bukan dosen pembimbing riset di fakultas teknik",
      "Tidak ada mahasiswa sarjana yang mengikuti simposium nasional",
      "Sebagian dosen pembimbing riset berstatus mahasiswa sarjana",
    ],
    answer: "C",
    explanation:
      "Ada peserta simposium nasional yang merupakan mahasiswa sarjana (Premis 3). Karena tidak ada mahasiswa sarjana yang berstatus dosen pembimbing riset (Premis 2), maka sebagian peserta simposium nasional bukan dosen pembimbing riset tersebut.",
    tip: "Ikuti jejak anggota spesifik pada premis partikular ('mahasiswa sarjana di simposium') lalu cek larangan di premis kedua.",
  },
  {
    id: "tiu-sil-111",
    subPattern: "silogisme-kategoris",
    difficulty: "sedang",
    prompt:
      "Semua kapal kargo pengangkut logistik pokok wajib mengaktifkan pemancar AIS.\nSebagian armada pelayaran milik perusahaan Samudra adalah kapal kargo pengangkut logistik pokok.\nSimpulan yang tepat adalah ...",
    options: [
      "Sebagian armada pelayaran perusahaan Samudra wajib mengaktifkan pemancar AIS",
      "Semua armada pelayaran perusahaan Samudra wajib mengaktifkan pemancar AIS",
      "Tidak ada armada perusahaan Samudra yang mengaktifkan pemancar AIS",
      "Semua kapal di laut milik perusahaan Samudra",
      "Sebagian kapal kargo logistik pokok tidak memiliki pemancar AIS",
    ],
    answer: "A",
    explanation:
      "Armada perusahaan Samudra yang termasuk kapal kargo logistik pokok (sebagian) wajib mengaktifkan pemancar AIS.",
    tip: "Jangan menggeneralisasi 'Sebagian' menjadi 'Semua' pada subjek simpulan.",
  },
  {
    id: "tiu-sil-112",
    subPattern: "silogisme-kategoris",
    difficulty: "sulit",
    prompt:
      "Semua pendaftar jalur afirmasi daerah tertinggal melampirkan surat domisili resmi.\nSebagian pendaftar jalur afirmasi daerah tertinggal memperoleh kuota beasiswa penuh.\nSimpulan yang tepat adalah ...",
    options: [
      "Semua peraih kuota beasiswa penuh tidak melampirkan surat domisili resmi",
      "Semua pendaftar jalur afirmasi memperoleh kuota beasiswa penuh",
      "Sebagian penerima kuota beasiswa penuh melampirkan surat domisili resmi",
      "Tidak ada pendaftar jalur afirmasi yang melampirkan surat domisili resmi",
      "Hanya pendaftar yang tidak melampirkan domisili yang menerima beasiswa",
    ],
    answer: "C",
    explanation:
      "Pendaftar jalur afirmasi yang memperoleh kuota beasiswa penuh pasti juga termasuk anggota pendaftar jalur afirmasi yang seluruhnya melampirkan surat domisili resmi.",
    tip: "Cari sifat yang melekat pada kelompok yang sama di kedua premis ketika subjek keduanya identik.",
  },
  {
    id: "tiu-sil-113",
    subPattern: "silogisme-kategoris",
    difficulty: "sedang",
    prompt:
      "Semua gedung layanan publik ramah disabilitas memiliki jalur pemandu tunanetra.\nSebagian bangunan milik pemerintah kota belum memiliki jalur pemandu tunanetra.\nSimpulan yang sah adalah ...",
    options: [
      "Semua bangunan milik pemerintah kota ramah disabilitas",
      "Tidak ada gedung layanan publik yang memiliki jalur pemandu tunanetra",
      "Semua gedung di kota tersebut belum ramah disabilitas",
      "Bangunan milik pemerintah kota tidak memerlukan jalur pemandu",
      "Sebagian bangunan milik pemerintah kota bukan gedung layanan publik ramah disabilitas",
    ],
    answer: "E",
    explanation:
      "Semua A (gedung ramah disabilitas) punya B (jalur pemandu). Sebagian C (bangunan pemkot) tidak punya B. Maka sebagian C tersebut bukan A.",
    tip: "Jika syarat mutlak dimiliki seluruh anggota kategori A, maka anggota kategori C yang tidak punya syarat itu pasti bukan A.",
  },
  {
    id: "tiu-sil-114",
    subPattern: "silogisme-kategoris",
    difficulty: "mudah",
    prompt:
      "Semua produk bersertifikat TKDN tinggi diprioritaskan dalam belanja pemerintah.\nBeberapa perangkat komputer rakitan lokal merupakan produk bersertifikat TKDN tinggi.\nSimpulan yang paling tepat adalah ...",
    options: [
      "Semua perangkat komputer rakitan lokal diprioritaskan dalam belanja pemerintah",
      "Beberapa perangkat komputer rakitan lokal diprioritaskan dalam belanja pemerintah",
      "Tidak ada komputer rakitan lokal yang dibeli pemerintah",
      "Semua belanja pemerintah hanya membeli komputer rakitan lokal",
      "Beberapa produk TKDN tinggi ditolak dalam belanja pemerintah",
    ],
    answer: "B",
    explanation:
      "Pola Semua A adalah B dan Beberapa C adalah A menghasilkan Beberapa C adalah B.",
    tip: "Cocokkan kuantor 'Semua' + 'Beberapa' untuk memperoleh simpulan berkuantor 'Beberapa'.",
  },
  {
    id: "tiu-sil-115",
    subPattern: "silogisme-kategoris",
    difficulty: "sulit",
    prompt:
      "Semua pelapor dugaan tindak pidana korupsi yang memenuhi syarat perlindungan mendapat pendampingan hukum.\nSemua pihak yang mendapat pendampingan hukum kerahasiaan identitasnya dijaga ketat.\nAda saksi perkara pengadaan barang yang merupakan pelapor yang memenuhi syarat perlindungan.\nSimpulan yang tepat adalah ...",
    options: [
      "Semua saksi perkara pengadaan barang adalah pelapor kasus korupsi",
      "Tidak ada saksi perkara pengadaan barang yang dijaga identitasnya",
      "Semua pihak yang identitasnya dijaga ketat adalah saksi pengadaan barang",
      "Ada saksi perkara pengadaan barang yang kerahasiaan identitasnya dijaga ketat",
      "Sebagian pelapor yang memenuhi syarat perlindungan tidak mendapat pendampingan hukum",
    ],
    answer: "D",
    explanation:
      "Rantai universal menyimpulkan semua pelapor memenuhi syarat perlindungan dijaga ketat identitasnya. Premis 3 menyebut 'Ada saksi...' termasuk kelompok tersebut, jadi kuantor eksistensial 'Ada' berlaku.",
    tip: "Kata 'Ada' bermakna minimal satu anggota himpunan; perlakukan setara dengan 'Sebagian'.",
  },
  {
    id: "tiu-sil-116",
    subPattern: "silogisme-kategoris",
    difficulty: "sedang",
    prompt:
      "Semua jurnal ilmiah terindeks bereputasi menerapkan penelaahan sejawat ganda.\nSebagian publikasi penelitian dosen di fakultas ekonomi terbit di jurnal ilmiah terindeks bereputasi.\nSimpulan yang tepat adalah ...",
    options: [
      "Semua publikasi dosen fakultas ekonomi terbit di jurnal bereputasi",
      "Tidak ada jurnal bereputasi yang menerapkan penelaahan sejawat ganda",
      "Sebagian publikasi penelitian dosen fakultas ekonomi melalui penelaahan sejawat ganda",
      "Penelaahan sejawat ganda hanya ada di fakultas ekonomi",
      "Sebagian jurnal terindeks bereputasi menolak penelaahan sejawat",
    ],
    answer: "C",
    explanation:
      "Publikasi dosen yang terbit di jurnal bereputasi otomatis melewati penelaahan sejawat ganda, sehingga sebagian publikasi dosen fakultas ekonomi melalui proses tersebut.",
    tip: "Jaga agar sifat wajib dari premis pertama hanya dilekatkan pada sebagian anggota premis kedua.",
  },
  {
    id: "tiu-sil-117",
    subPattern: "silogisme-kategoris",
    difficulty: "sulit",
    prompt:
      "Tidak satu pun koperasi simpan pinjam tanpa izin usaha yang boleh menghimpun dana masyarakat umum.\nSemua lembaga keuangan mitra program pembiayaan mikro boleh menghimpun dana masyarakat umum.\nSebagian entitas usaha di kecamatan Bintang adalah lembaga keuangan mitra program pembiayaan mikro.\nSimpulan yang sah adalah ...",
    options: [
      "Semua entitas usaha di kecamatan Bintang tidak memiliki izin usaha",
      "Sebagian entitas usaha di kecamatan Bintang adalah koperasi tanpa izin usaha",
      "Tidak ada lembaga mitra pembiayaan mikro di kecamatan Bintang",
      "Semua lembaga keuangan mitra program pembiayaan mikro tidak punya izin usaha",
      "Sebagian entitas usaha di kecamatan Bintang bukan koperasi simpan pinjam tanpa izin usaha",
    ],
    answer: "E",
    explanation:
      "Dari Premis 1 dan 2: tidak satu pun lembaga mitra pembiayaan mikro yang merupakan koperasi tanpa izin usaha. Premis 3 menyebut sebagian entitas di kecamatan Bintang adalah lembaga mitra tersebut, sehingga sebagian entitas tersebut pasti bukan koperasi tanpa izin usaha.",
    tip: "Padukan premis negatif 'Tidak satu pun...' dengan himpunan universal 'Semua...' terlebih dahulu sebelum ke kuantor 'Sebagian'.",
  },
  {
    id: "tiu-sil-118",
    subPattern: "silogisme-kategoris",
    difficulty: "mudah",
    prompt:
      "Semua desa wisata unggulan memiliki kelompok sadar wisata aktif.\nSebagian desa di pesisir selatan pulau Jawa termasuk desa wisata unggulan.\nSimpulan yang tepat adalah ...",
    options: [
      "Sebagian desa di pesisir selatan pulau Jawa memiliki kelompok sadar wisata aktif",
      "Semua desa di pesisir selatan pulau Jawa termasuk desa wisata unggulan",
      "Tidak ada kelompok sadar wisata aktif di pesisir selatan pulau Jawa",
      "Semua kelompok sadar wisata hanya ada di pulau Jawa",
      "Sebagian desa wisata unggulan tidak memiliki kelompok sadar wisata",
    ],
    answer: "A",
    explanation:
      "Kombinasi 'Semua' + 'Sebagian' menghasilkan simpulan 'Sebagian' dengan menyambungkan 'desa wisata unggulan'.",
    tip: "Eliminasi term penghubung 'desa wisata unggulan' dan pertahankan kuantor 'Sebagian'.",
  },
  {
    id: "tiu-sil-119",
    subPattern: "silogisme-kategoris",
    difficulty: "sedang",
    prompt:
      "Semua aparatur pengelola pengadaan barang wajib memiliki sertifikat kompetensi pengadaan tingkat dasar.\nBeberapa pegawai bagian umum di kantor wilayah tidak memiliki sertifikat kompetensi pengadaan tingkat dasar.\nSimpulan yang paling tepat adalah ...",
    options: [
      "Semua pegawai bagian umum adalah aparatur pengelola pengadaan barang",
      "Sebagian aparatur pengelola pengadaan barang tidak bersertifikat kompetensi",
      "Sertifikat kompetensi pengadaan tingkat dasar tidak berlaku bagi bagian umum",
      "Beberapa pegawai bagian umum di kantor wilayah bukan aparatur pengelola pengadaan barang",
      "Tidak ada pegawai bagian umum di kantor wilayah yang bersertifikat pengadaan",
    ],
    answer: "D",
    explanation:
      "Semua aparatur pengadaan wajib bersertifikat. Beberapa pegawai bagian umum tidak memiliki sertifikat tersebut, maka beberapa pegawai itu dipastikan bukan aparatur pengelola pengadaan barang.",
    tip: "Anggota yang tidak memenuhi syarat wajib suatu kategori tidak mungkin menjadi anggota kategori itu.",
  },
  {
    id: "tiu-sil-120",
    subPattern: "silogisme-kategoris",
    difficulty: "sedang",
    prompt:
      "Semua puskesmas rawat inap menyediakan unit gawat darurat sepanjang hari.\nSebagian fasilitas kesehatan tingkat pertama di kabupaten Melati adalah puskesmas rawat inap.\nSimpulan yang tepat adalah ...",
    options: [
      "Semua fasilitas kesehatan tingkat pertama di kabupaten Melati buka sepanjang hari",
      "Sebagian fasilitas kesehatan tingkat pertama di kabupaten Melati menyediakan unit gawat darurat sepanjang hari",
      "Tidak ada puskesmas rawat inap di kabupaten Melati",
      "Semua unit gawat darurat hanya berada di puskesmas rawat inap",
      "Sebagian puskesmas rawat inap tidak melayani gawat darurat malam hari",
    ],
    answer: "B",
    explanation:
      "Berdasarkan hukum silogisme kategoris, Semua A adalah B dan Sebagian C adalah A menurunkan kesimpulan sah Sebagian C adalah B.",
    tip: "Fokuskan simpulan pada irisan himpunan dengan menggunakan kata 'Sebagian'.",
  },

  // =========================================================================
  // EKUIVALENSI DAN INGKARAN + JEBAKAN LOGIKA (121 - 150)
  // =========================================================================
  {
    id: "tiu-sil-121",
    subPattern: "ekuivalensi-dan-ingkaran",
    difficulty: "mudah",
    prompt:
      "Pernyataan: \"Jika nilai tukar stabil, maka minat investasi jangka panjang meningkat.\"\nPernyataan lain yang secara logika setara (ekuivalen) dengan pernyataan tersebut adalah ...",
    options: [
      "Jika nilai tukar tidak stabil, maka minat investasi jangka panjang tidak meningkat",
      "Jika minat investasi jangka panjang meningkat, maka nilai tukar stabil",
      "Nilai tukar stabil dan minat investasi jangka panjang tidak meningkat",
      "Jika minat investasi jangka panjang tidak meningkat, maka nilai tukar tidak stabil",
      "Nilai tukar tidak stabil dan minat investasi jangka panjang meningkat",
    ],
    answer: "D",
    explanation:
      "Implikasi p -> q secara logis selalu ekuivalen dengan kontraposisinya ~q -> ~p ('Jika minat investasi jangka panjang tidak meningkat, maka nilai tukar tidak stabil'). Invers (opsi A) dan konvers (opsi B) tidak ekuivalen.",
    tip: "Ingat rumus kontraposisi: 'Jika p maka q' selalu setara dengan 'Jika bukan q maka bukan p'.",
  },
  {
    id: "tiu-sil-122",
    subPattern: "ekuivalensi-dan-ingkaran",
    difficulty: "mudah",
    prompt:
      "Semua tenaga kesehatan di posko siaga bencana wajib mengenakan tanda pengenal resmi.\nIngkaran (negasi) yang tepat dari pernyataan tersebut adalah ...",
    options: [
      "Semua tenaga kesehatan di posko siaga bencana tidak mengenakan tanda pengenal resmi",
      "Ada tenaga kesehatan di posko siaga bencana yang tidak mengenakan tanda pengenal resmi",
      "Tidak ada tenaga kesehatan yang bekerja di posko siaga bencana",
      "Sebagian tanda pengenal resmi dipakai oleh non-tenaga kesehatan",
      "Jika seseorang tenaga kesehatan, maka ia selalu memakai tanda pengenal resmi",
    ],
    answer: "B",
    explanation:
      "Ingkaran kuantor universal ('Semua A melakukan B') adalah kuantor eksistensial negatif ('Ada/Sebagian A yang tidak melakukan B'), cukup ditemukan minimal satu pengecualian.",
    tip: "Lawan dari 'Semua berlaku X' bukanlah 'Semua tidak X', melainkan cukup 'Ada yang tidak X'.",
  },
  {
    id: "tiu-sil-123",
    subPattern: "ekuivalensi-dan-ingkaran",
    difficulty: "mudah",
    prompt:
      "Peserta ujian wajib mengumpulkan lembar jawaban melalui portal daring atau loket pengawas ruangan.\nTernyata Rian tidak dapat mengakses portal daring untuk mengumpulkan lembar jawabannya.\nSimpulan yang tepat adalah ...",
    options: [
      "Rian tidak perlu mengumpulkan lembar jawaban",
      "Portal daring sedang menghapus seluruh jawaban peserta",
      "Loket pengawas ruangan ikut ditutup",
      "Semua peserta mengumpulkan melalui portal daring",
      "Rian mengumpulkan lembar jawaban melalui loket pengawas ruangan",
    ],
    answer: "E",
    explanation:
      "Gunakan Silogisme Disjungtif: (p atau q) dan ~p menghasilkan q. Karena portal daring tidak bisa digunakan, opsi lain yang wajib ditempuh adalah loket pengawas ruangan.",
    tip: "Pada pilihan 'A atau B' yang wajib berlaku, bila A gagal maka B pasti terjadi.",
  },
  {
    id: "tiu-sil-124",
    subPattern: "ekuivalensi-dan-ingkaran",
    difficulty: "sedang",
    prompt:
      "Pernyataan: \"Jika sistem verifikasi dua langkah aktif, maka akun pegawai terlindungi dari akses ilegal.\"\nIngkaran (negasi) dari pernyataan bersyarat tersebut adalah ...",
    options: [
      "Jika sistem verifikasi dua langkah tidak aktif, maka akun pegawai tidak terlindungi",
      "Sistem verifikasi dua langkah tidak aktif atau akun pegawai terlindungi dari akses ilegal",
      "Sistem verifikasi dua langkah aktif dan akun pegawai tidak terlindungi dari akses ilegal",
      "Jika akun pegawai tidak terlindungi dari akses ilegal, maka sistem verifikasi tidak aktif",
      "Sistem verifikasi dua langkah tidak aktif dan akun pegawai terlindungi",
    ],
    answer: "C",
    explanation:
      "Ingkaran dari implikasi ~(p -> q) ekuivalen dengan konjungsi (p dan ~q). Artinya, sebabnya terpenuhi tetapi akibatnya gagal terjadi.",
    tip: "Rumus negasi 'Jika p maka q' adalah 'p terjadi dan tidak q' (tanpa kata jika/maka lagi).",
  },
  {
    id: "tiu-sil-125",
    subPattern: "ekuivalensi-dan-ingkaran",
    difficulty: "sedang",
    prompt:
      "Pernyataan: \"Jika proyek infrastruktur selesai tepat waktu, maka denda keterlambatan tidak dikenakan.\"\nPernyataan yang ekuivalen dengan pernyataan tersebut dalam bentuk disjungsi ('atau') adalah ...",
    options: [
      "Proyek infrastruktur tidak selesai tepat waktu atau denda keterlambatan tidak dikenakan",
      "Proyek infrastruktur selesai tepat waktu atau denda keterlambatan dikenakan",
      "Proyek infrastruktur selesai tepat waktu dan denda keterlambatan tidak dikenakan",
      "Proyek infrastruktur tidak selesai tepat waktu dan denda keterlambatan dikenakan",
      "Jika proyek selesai tepat waktu, maka denda keterlambatan wajib dikenakan",
    ],
    answer: "A",
    explanation:
      "Menurut hukum implikasi material, (p -> q) ekuivalen dengan (~p atau q). Di sini p = 'selesai tepat waktu' dan q = 'denda tidak dikenakan', sehingga ~p atau q menjadi: 'tidak selesai tepat waktu atau denda tidak dikenakan'.",
    tip: "Ubah 'Jika p maka q' menjadi 'bukan p atau q' dengan tetap mempertahankan bentuk q.",
  },
  {
    id: "tiu-sil-126",
    subPattern: "ekuivalensi-dan-ingkaran",
    difficulty: "sedang",
    prompt:
      "Jika pegawai mendapat tugas dinas luar kota, maka biaya penginapan ditanggung instansi.\nHari ini biaya penginapan Doni ditanggung instansi.\nSimpulan yang paling tepat adalah ...",
    options: [
      "Tidak dapat ditarik simpulan yang pasti mengenai apakah Doni mendapat tugas dinas luar kota",
      "Doni pasti sedang mendapat tugas dinas luar kota",
      "Doni pasti tidak mendapat tugas dinas luar kota",
      "Semua pegawai instansi sedang dinas luar kota hari ini",
      "Biaya penginapan hanya berlaku untuk tugas luar kota",
    ],
    answer: "A",
    explanation:
      "Premis 1: p -> q. Premis 2: q ('biaya penginapan ditanggung'). Mengiyakan akibat (affirming the consequent) merupakan sesat pikir formal karena bisa saja ada sebab lain selain tugas dinas luar kota yang membuat penginapan ditanggung.",
    tip: "Waspadai jebakan mengiyakan akibat: dari 'p -> q' dan 'q', kamu TIDAK boleh menyimpulkan 'p'.",
  },
  {
    id: "tiu-sil-127",
    subPattern: "ekuivalensi-dan-ingkaran",
    difficulty: "sedang",
    prompt:
      "Jika tingkat inflasi terkendali, maka suku bunga acuan dipertahankan.\nKuartal ini tingkat inflasi tidak terkendali.\nSimpulan yang sah adalah ...",
    options: [
      "Suku bunga acuan pasti dinaikkan tajam",
      "Suku bunga acuan pasti tidak dipertahankan",
      "Suku bunga acuan pasti tetap dipertahankan",
      "Tidak dapat ditarik simpulan yang pasti mengenai suku bunga acuan",
      "Inflasi tidak pernah memengaruhi kebijakan suku bunga",
    ],
    answer: "D",
    explanation:
      "Premis 1: p -> q. Premis 2: ~p ('tingkat inflasi tidak terkendali'). Menyangkal sebab (denying the antecedent) tidak menghasilkan simpulan pasti mengenai q (suku bunga bisa tetap dipertahankan karena pertimbangan lain atau diubah).",
    tip: "Waspadai jebakan menyangkal sebab: dari 'p -> q' dan '~p', jangan menyimpulkan '~q'.",
  },
  {
    id: "tiu-sil-128",
    subPattern: "ekuivalensi-dan-ingkaran",
    difficulty: "sedang",
    prompt:
      "Sebagian pegawai direktorat keuangan memiliki sertifikat akuntansi publik.\nSebagian pemilik sertifikat akuntansi publik bekerja sebagai konsultan pajak.\nSimpulan yang tepat adalah ...",
    options: [
      "Sebagian pegawai direktorat keuangan pasti bekerja sebagai konsultan pajak",
      "Tidak dapat ditarik simpulan yang pasti mengenai hubungan pegawai direktorat keuangan dan konsultan pajak",
      "Semua pegawai direktorat keuangan adalah konsultan pajak",
      "Tidak ada pegawai direktorat keuangan yang bekerja sebagai konsultan pajak",
      "Semua pemilik sertifikat akuntansi publik bekerja di direktorat keuangan",
    ],
    answer: "B",
    explanation:
      "Dua premis berkuantor partikular ('Sebagian' + 'Sebagian') tidak menjamin kedua himpunan sebagian tersebut beririsan pada orang yang sama, sehingga tidak dapat ditarik simpulan pasti.",
    tip: "Ingat aturan dasar kuantor: Sebagian + Sebagian tidak menghasilkan simpulan pasti.",
  },
  {
    id: "tiu-sil-129",
    subPattern: "ekuivalensi-dan-ingkaran",
    difficulty: "sulit",
    prompt:
      "Hari ini pimpinan melakukan inspeksi ke gudang logistik dan menandatangani berita acara serah terima.\nIngkaran (negasi) yang tepat dari pernyataan majemuk tersebut adalah ...",
    options: [
      "Hari ini pimpinan tidak melakukan inspeksi ke gudang logistik dan tetap menandatangani berita acara",
      "Jika pimpinan melakukan inspeksi ke gudang logistik, maka berita acara tidak ditandatangani",
      "Hari ini pimpinan melakukan inspeksi ke gudang logistik dan menandatangani berita acara",
      "Besok pimpinan melakukan inspeksi ulang ke gudang logistik",
      "Hari ini pimpinan tidak melakukan inspeksi ke gudang logistik atau tidak menandatangani berita acara serah terima",
    ],
    answer: "E",
    explanation:
      "Menurut hukum De Morgan, ingkaran dari konjungsi ~(p dan q) adalah (~p atau ~q): salah satu atau keduanya tidak dilakukan.",
    tip: "Saat mengingkari kalimat berpenghubung 'dan', ubah kata hubungnya menjadi 'atau' dan ingkari kedua komponennya.",
  },
  {
    id: "tiu-sil-130",
    subPattern: "ekuivalensi-dan-ingkaran",
    difficulty: "sulit",
    prompt:
      "Pernyataan: \"Rapat evaluasi dibatalkan atau jadwal pelaksanaan proyek dipercepat.\"\nPernyataan yang secara logika setara dengan pernyataan tersebut adalah ...",
    options: [
      "Jika rapat evaluasi dibatalkan, maka jadwal pelaksanaan proyek dipercepat",
      "Rapat evaluasi dibatalkan dan jadwal pelaksanaan proyek dipercepat",
      "Jika rapat evaluasi tidak dibatalkan, maka jadwal pelaksanaan proyek dipercepat",
      "Jika jadwal pelaksanaan proyek dipercepat, maka rapat evaluasi tidak dibatalkan",
      "Rapat evaluasi tidak dibatalkan dan jadwal proyek tidak dipercepat",
    ],
    answer: "C",
    explanation:
      "Disjungsi (~p atau q) ekuivalen dengan implikasi (p -> q). Jika p = 'rapat tidak dibatalkan', maka disjungsi 'rapat dibatalkan (~p) atau jadwal dipercepat (q)' setara dengan 'Jika rapat evaluasi tidak dibatalkan, maka jadwal pelaksanaan proyek dipercepat'.",
    tip: "Ubah 'A atau B' menjadi implikasi dengan rumus: 'Jika tidak A, maka B'.",
  },
  {
    id: "tiu-sil-131",
    subPattern: "ekuivalensi-dan-ingkaran",
    difficulty: "mudah",
    prompt:
      "Ada anggota panitia seleksi yang tidak hadir dalam rapat pleno penetapan hasil.\nIngkaran (negasi) yang tepat dari pernyataan tersebut adalah ...",
    options: [
      "Ada anggota panitia seleksi yang hadir dalam rapat pleno penetapan hasil",
      "Sebagian anggota panitia seleksi berhalangan hadir dalam rapat pleno",
      "Tidak ada panitia seleksi yang menyelenggarakan rapat pleno",
      "Sebagian besar anggota panitia seleksi menolak rapat pleno",
      "Semua anggota panitia seleksi hadir dalam rapat pleno penetapan hasil",
    ],
    answer: "E",
    explanation:
      "Ingkaran dari 'Ada anggota yang tidak X' (eksistensial negatif) adalah 'Semua anggota melakukan X' (universal positif).",
    tip: "Lawan logis dari 'Ada yang tidak ...' adalah 'Semua ...' (tanpa kata tidak).",
  },
  {
    id: "tiu-sil-132",
    subPattern: "ekuivalensi-dan-ingkaran",
    difficulty: "sedang",
    prompt:
      "Kementerian akan memperluas jaringan kereta komuter atau menambah armada bus listrik tahun ini.\nBerdasarkan alokasi anggaran resmi, kementerian memutuskan tidak menambah armada bus listrik tahun ini.\nSimpulan yang tepat adalah ...",
    options: [
      "Kementerian memperluas jaringan kereta komuter tahun ini",
      "Kementerian tidak memperluas jaringan kereta komuter maupun bus listrik",
      "Anggaran kementerian dikembalikan seluruhnya ke kas negara",
      "Armada bus listrik tahun depan juga dibatalkan",
      "Tidak dapat ditarik simpulan",
    ],
    answer: "A",
    explanation:
      "Dengan Silogisme Disjungtif (p atau q, ~q => p), gugurnya pilihan menambah bus listrik mengharuskan pilihan memperluas jaringan kereta komuter dijalankan.",
    tip: "Saat dua opsi dihubungkan kata 'atau' lalu salah satunya batal, opsi satunya pasti berlaku.",
  },
  {
    id: "tiu-sil-133",
    subPattern: "ekuivalensi-dan-ingkaran",
    difficulty: "sulit",
    prompt:
      "Pernyataan: \"Setiap pemohon izin usaha tambang diwajibkan menyetor jaminan reklamasi.\"\nPernyataan manakah yang secara logis setara (ekuivalen) dengan kalimat tersebut?",
    options: [
      "Sebagian pemohon izin usaha tambang menyetor jaminan reklamasi",
      "Jika seseorang menyetor jaminan reklamasi, maka ia pasti pemohon izin usaha tambang",
      "Jika suatu pihak tidak menyetor jaminan reklamasi, maka ia bukan pemohon izin usaha tambang yang sah menurut kewajiban tersebut",
      "Tidak ada pemohon izin usaha tambang yang diwajibkan menyetor jaminan reklamasi",
      "Jika seseorang bukan pemohon izin usaha tambang, maka ia dilarang menyetor dana apa pun",
    ],
    answer: "C",
    explanation:
      "Kalimat 'Setiap A adalah B' setara dengan implikasi 'Jika x adalah A, maka x adalah B', dan kontraposisinya adalah 'Jika x bukan B, maka x bukan A'. Di sini: tidak menyetor jaminan reklamasi -> bukan pemohon yang memenuhi kewajiban tersebut.",
    tip: "Ubah kuantor 'Setiap A wajib B' menjadi 'Jika A maka B', lalu cari kontraposisinya ('Jika tidak B, maka bukan A').",
  },
  {
    id: "tiu-sil-134",
    subPattern: "ekuivalensi-dan-ingkaran",
    difficulty: "sedang",
    prompt:
      "Semua arsip pengadilan negeri didigitalisasi atau disimpan di gudang arsip daerah.\nSebagian arsip pengadilan negeri tidak didigitalisasi.\nSimpulan yang paling tepat adalah ...",
    options: [
      "Semua arsip pengadilan negeri dibuang dari gudang arsip daerah",
      "Tidak ada arsip pengadilan negeri yang disimpan di gudang arsip daerah",
      "Sebagian arsip pengadilan negeri tidak didigitalisasi dan tidak disimpan di gudang arsip daerah",
      "Sebagian arsip pengadilan negeri disimpan di gudang arsip daerah",
      "Semua arsip pengadilan negeri wajib didigitalisasi tanpa terkecuali",
    ],
    answer: "D",
    explanation:
      "Untuk setiap anggota arsip pengadilan negeri berlaku (didigitalisasi atau disimpan di gudang arsip daerah). Anggota yang tidak didigitalisasi (disebut ada sebagian pada premis kedua) wajib memenuhi cabang disjungsi satunya, yakni disimpan di gudang arsip daerah.",
    tip: "Terapkan aturan disjungsi (A atau B) pada bagian himpunan yang dinyatakan tidak memenuhi salah satu cabang.",
  },
  {
    id: "tiu-sil-135",
    subPattern: "ekuivalensi-dan-ingkaran",
    difficulty: "sulit",
    prompt:
      "Jika server cadangan aktif, maka layanan transaksi perbankan tidak terhenti.\nServer cadangan aktif atau teknisi melakukan pemulihan darurat.\nSaat ini layanan transaksi perbankan terhenti.\nSimpulan yang paling tepat adalah ...",
    options: [
      "Server cadangan sedang aktif beroperasi penuh",
      "Teknisi melakukan pemulihan darurat",
      "Teknisi tidak perlu melakukan pemulihan darurat",
      "Layanan transaksi perbankan berjalan lancar",
      "Server cadangan aktif dan teknisi berhenti bekerja",
    ],
    answer: "B",
    explanation:
      "Premis 1: p -> ~q (server aktif -> layanan tidak terhenti). Premis 3 memberi q (layanan terhenti). Dengan Modus Tollens disimpulkan ~p (server cadangan tidak aktif). Gabungkan ~p dengan Premis 2 (p atau r) via Silogisme Disjungtif => r: teknisi melakukan pemulihan darurat.",
    tip: "Gunakan fakta di kalimat ketiga untuk menguji kalimat pertama dulu (Modus Tollens), lalu pakai hasilnya pada pilihan 'atau' di kalimat kedua.",
  },
  {
    id: "tiu-sil-136",
    subPattern: "ekuivalensi-dan-ingkaran",
    difficulty: "sedang",
    prompt:
      "Pernyataan: \"Semua produk ekspor unggulan lulus uji mutu laboratorium.\"\nPernyataan manakah yang ingkarannya bernilai benar jika ditemukan minimal satu produk ekspor unggulan yang gagal uji mutu?",
    options: [
      "Tidak ada produk ekspor unggulan yang lulus uji mutu laboratorium",
      "Semua produk ekspor unggulan lulus uji mutu laboratorium",
      "Sebagian produk ekspor unggulan tidak lulus uji mutu laboratorium",
      "Semua produk yang lulus uji mutu adalah produk ekspor unggulan",
      "Sebagian produk non-ekspor lulus uji mutu laboratorium",
    ],
    answer: "B",
    explanation:
      "Temuan satu produk ekspor unggulan yang gagal uji mutu berarti pernyataan eksistensial negatif ('Ada produk ekspor unggulan yang tidak lulus uji mutu') bernilai benar. Itu tepat merupakan ingkaran dari pernyataan B ('Semua produk ekspor unggulan lulus uji mutu laboratorium').",
    tip: "Satu contoh penyangkal cukup untuk mematahkan klaim berkuantor 'Semua'.",
  },
  {
    id: "tiu-sil-137",
    subPattern: "ekuivalensi-dan-ingkaran",
    difficulty: "sulit",
    prompt:
      "Pernyataan: \"Tidak benar bahwa semua pengadaan darurat dikecualikan dari pelaporan harga.\"\nMakna yang setara dengan pernyataan tersebut adalah ...",
    options: [
      "Semua pengadaan darurat tidak perlu melaporkan harga",
      "Tidak ada pengadaan darurat yang boleh melaporkan harga",
      "Semua pengadaan rutin dikecualikan dari pelaporan harga",
      "Jika suatu kegiatan adalah pengadaan darurat, maka harganya rahasia",
      "Ada pengadaan darurat yang tidak dikecualikan dari pelaporan harga",
    ],
    answer: "E",
    explanation:
      "Frasa 'Tidak benar bahwa semua A adalah B' adalah ingkaran langsung dari kuantor universal, sehingga setara dengan 'Ada/Sebagian A yang bukan B'.",
    tip: "Terjemahkan 'Tidak benar bahwa semua...' sebagai pengingkaran langsung kuantor 'Semua'.",
  },
  {
    id: "tiu-sil-138",
    subPattern: "ekuivalensi-dan-ingkaran",
    difficulty: "sedang",
    prompt:
      "Pernyataan: \"Warga dapat memperpanjang SIM melalui layanan keliling atau kantor satpas.\"\nIngkaran (negasi) dari pernyataan disjungtif tersebut untuk seorang pemohon adalah ...",
    options: [
      "Warga tidak dapat memperpanjang SIM melalui layanan keliling atau tetap bisa lewat satpas",
      "Jika warga datang ke layanan keliling, maka kantor satpas tutup",
      "Warga tidak dapat memperpanjang SIM melalui layanan keliling dan tidak dapat melalui kantor satpas",
      "Warga hanya memperpanjang SIM lewat layanan keliling saja",
      "Semua kantor satpas membuka layanan keliling setiap hari",
    ],
    answer: "C",
    explanation:
      "Menurut hukum De Morgan, ingkaran dari (p atau q) adalah (~p dan ~q). Artinya kedua jalur sama-sama tidak dapat ditempuh.",
    tip: "Saat mengingkari pernyataan berpenghubung 'atau', ganti 'atau' menjadi 'dan' lalu ingkari kedua bagiannya.",
  },
  {
    id: "tiu-sil-139",
    subPattern: "ekuivalensi-dan-ingkaran",
    difficulty: "sedang",
    prompt:
      "Jika seorang ASN mengikuti pendidikan tugas belajar penuh waktu, maka tunjangan jabatannya disesuaikan.\nRaka adalah ASN yang tidak mengikuti pendidikan tugas belajar penuh waktu.\nSimpulan yang sah adalah ...",
    options: [
      "Tidak dapat ditarik simpulan yang pasti mengenai penyesuaian tunjangan jabatan Raka",
      "Tunjangan jabatan Raka pasti tidak disesuaikan",
      "Tunjangan jabatan Raka pasti disesuaikan penuh",
      "Raka akan segera mengikuti tugas belajar bulan depan",
      "Hanya ASN tugas belajar yang menerima tunjangan jabatan",
    ],
    answer: "A",
    explanation:
      "Premis berbentuk p -> q dan fakta tentang Raka adalah ~p. Menyangkal sebab tidak membuktikan ~q (bisa saja tunjangan Raka disesuaikan karena faktor mutasi atau kinerja lain).",
    tip: "Cek apakah premis kedua menyangkal sebab (~p) atau menyangkal akibat (~q); ~p tidak memberi kepastian tentang q.",
  },
  {
    id: "tiu-sil-140",
    subPattern: "ekuivalensi-dan-ingkaran",
    difficulty: "sulit",
    prompt:
      "Jika laporan akuntabilitas instansi meraih nilai A, maka unit tersebut memperoleh penghargaan reformasi birokrasi.\nTernyata Inspektorat Daerah K memperoleh penghargaan reformasi birokrasi.\nSimpulan yang paling tepat adalah ...",
    options: [
      "Laporan akuntabilitas Inspektorat Daerah K pasti bernilai A",
      "Laporan akuntabilitas Inspektorat Daerah K pasti bernilai di bawah A",
      "Penghargaan reformasi birokrasi hanya diberikan sekali seumur hidup",
      "Tidak dapat ditarik simpulan yang pasti mengenai apakah nilai laporan Inspektorat Daerah K adalah A",
      "Inspektorat Daerah K tidak menyusun laporan akuntabilitas",
    ],
    answer: "D",
    explanation:
      "Memperoleh penghargaan reformasi birokrasi adalah konsekuen (q). Mengiyakan akibat tidak dapat digunakan untuk menyimpulkan bahwa anteseden (nilai laporan = A) pasti terjadi.",
    tip: "Jangan terjebak menarik kesimpulan mundur dari akibat ke sebab dalam logika implikasi satu arah.",
  },
  {
    id: "tiu-sil-141",
    subPattern: "ekuivalensi-dan-ingkaran",
    difficulty: "sulit",
    prompt:
      "Pernyataan: \"Jika pasar tradisional direvitalisasi, maka omzet pedagang meningkat dan kenyamanan pengunjung terjaga.\"\nIngkaran (negasi) yang tepat dari pernyataan tersebut adalah ...",
    options: [
      "Jika pasar tradisional tidak direvitalisasi, maka omzet pedagang tidak meningkat",
      "Pasar tradisional tidak direvitalisasi atau omzet pedagang meningkat",
      "Pasar tradisional direvitalisasi, serta omzet pedagang tidak meningkat atau kenyamanan pengunjung tidak terjaga",
      "Pasar tradisional tidak direvitalisasi dan omzet pedagang tetap meningkat",
      "Semua pasar tradisional mengalami penurunan omzet setelah direvitalisasi",
    ],
    answer: "C",
    explanation:
      "Ingkaran implikasi ~(p -> (q dan r)) adalah p dan ~(q dan r). Dengan hukum De Morgan, ~(q dan r) = (~q atau ~r). Jadi hasilnya: p dan (~q atau ~r).",
    tip: "Gabungkan dua aturan: negasi implikasi (p dan ~akibat) serta De Morgan pada konjungsi akibat (~q atau ~r).",
  },
  {
    id: "tiu-sil-142",
    subPattern: "ekuivalensi-dan-ingkaran",
    difficulty: "sedang",
    prompt:
      "Semua arsiparis yang lulus uji kompetensi boleh mengelola sistem kearsipan dinamis.\nSebagian pegawai di divisi sekretariat adalah lulusan ilmu perpustakaan.\nSimpulan yang pasti sah adalah ...",
    options: [
      "Sebagian pegawai divisi sekretariat pasti boleh mengelola sistem kearsipan dinamis",
      "Semua lulusan ilmu perpustakaan adalah arsiparis lulus uji kompetensi",
      "Tidak ada pegawai divisi sekretariat yang boleh mengelola sistem kearsipan",
      "Sebagian arsiparis lulus uji kompetensi bertugas di divisi sekretariat",
      "Tidak dapat ditarik simpulan yang pasti mengenai kewenangan pegawai divisi sekretariat mengelola sistem kearsipan",
    ],
    answer: "E",
    explanation:
      "Tidak ada term penengah yang menghubungkan 'lulusan ilmu perpustakaan' dengan 'arsiparis yang lulus uji kompetensi'. Kedua himpunan tidak dinyatakan beririsan atau saling tercakup.",
    tip: "Periksa dengan cermat apakah dua premis benar-benar memiliki istilah penghubung yang identik.",
  },
  {
    id: "tiu-sil-143",
    subPattern: "ekuivalensi-dan-ingkaran",
    difficulty: "sulit",
    prompt:
      "Jika harga bahan bakar industri naik atau biaya angkut pelabuhan naik, maka harga barang konsumsi ikut naik.\nJika daya beli rumah tangga tetap kuat, maka harga barang konsumsi tidak ikut naik.\nSaat ini daya beli rumah tangga tetap kuat.\nSimpulan yang tepat adalah ...",
    options: [
      "Harga bahan bakar industri naik tetapi biaya angkut pelabuhan turun",
      "Harga bahan bakar industri tidak naik dan biaya angkut pelabuhan tidak naik",
      "Harga barang konsumsi mengalami kenaikan tajam",
      "Daya beli rumah tangga melemah akibat harga bahan bakar naik",
      "Harga bahan bakar industri tidak naik atau biaya angkut pelabuhan naik",
    ],
    answer: "B",
    explanation:
      "Dari Premis 3 ('daya beli kuat') dan Premis 2 ('daya beli kuat -> harga barang tidak naik'), didapat 'harga barang konsumsi tidak naik'. Dengan Modus Tollens pada Premis 1, diperoleh negasi dari (p atau r), yaitu ~p dan ~r.",
    tip: "Tarik simpulan dari Premis 2 & 3 dulu, lalu terapkan Modus Tollens beserta hukum De Morgan pada Premis 1.",
  },
  {
    id: "tiu-sil-144",
    subPattern: "ekuivalensi-dan-ingkaran",
    difficulty: "mudah",
    prompt:
      "Semua peserta seleksi diwajibkan mengikuti tes kesehatan atau mengumpulkan surat keterangan sehat dari rumah sakit pemerintah.\nFajar adalah peserta seleksi yang tidak mengumpulkan surat keterangan sehat dari rumah sakit pemerintah.\nSimpulan yang tepat adalah ...",
    options: [
      "Fajar wajib mengikuti tes kesehatan",
      "Fajar dibebaskan dari kewajiban tes kesehatan maupun surat keterangan sehat",
      "Fajar mengundurkan diri dari seluruh tahapan seleksi",
      "Semua peserta seleksi gagal tes kesehatan",
      "Rumah sakit pemerintah tidak menerbitkan surat keterangan sehat",
    ],
    answer: "A",
    explanation:
      "Karena Fajar adalah peserta seleksi dan tidak menempuh cabang pengumpulan surat keterangan sehat, melalui Silogisme Disjungtif (p atau q, ~q => p) Fajar wajib mengikuti tes kesehatan.",
    tip: "Gunakan Silogisme Disjungtif saat salah satu syarat pilihan tidak diambil oleh anggota kategori.",
  },
  {
    id: "tiu-sil-145",
    subPattern: "ekuivalensi-dan-ingkaran",
    difficulty: "sedang",
    prompt:
      "Pernyataan: \"Setiap kali bendungan utama dibuka penuh, wilayah hilir menerima pasokan air irigasi.\"\nPernyataan lain yang secara logika setara (ekuivalen) dengan pernyataan tersebut adalah ...",
    options: [
      "Jika wilayah hilir menerima pasokan air irigasi, maka bendungan utama dibuka penuh",
      "Bendungan utama selalu dibuka penuh setiap hari",
      "Jika bendungan utama tidak dibuka penuh, maka wilayah hilir tidak menerima pasokan air irigasi",
      "Jika wilayah hilir tidak menerima pasokan air irigasi, maka bendungan utama tidak dibuka penuh",
      "Wilayah hilir hanya mengandalkan air hujan untuk irigasi",
    ],
    answer: "D",
    explanation:
      "'Setiap kali p, q' bermakna implikasi p -> q. Bentuk ekuivalen kontraposisinya adalah ~q -> ~p ('Jika wilayah hilir tidak menerima pasokan air irigasi, maka bendungan utama tidak dibuka penuh').",
    tip: "Ubah 'Setiap kali p, q' menjadi 'Jika p maka q', lalu buat kontraposisinya (~q -> ~p).",
  },
  {
    id: "tiu-sil-146",
    subPattern: "ekuivalensi-dan-ingkaran",
    difficulty: "sulit",
    prompt:
      "Setiap pemenang hibah riset nasional menerima pendanaan tahun jamak.\nTidak ada penerima pendanaan tahun jamak yang lolos tanpa laporan kemajuan berkala.\nPernyataan: \"Ada pemenang hibah riset nasional yang lolos tanpa laporan kemajuan berkala\" bernilai ...",
    options: [
      "Selalu benar sesuai premis pertama",
      "Ekuivalen dengan premis kedua",
      "Mungkin benar tergantung bidang risetnya",
      "Salah karena bertentangan dengan gabungan kedua premis",
      "Tidak dapat ditentukan nilai kebenarannya",
    ],
    answer: "D",
    explanation:
      "Dari kedua premis: semua pemenang hibah riset nasional menerima pendanaan tahun jamak, dan semua penerima itu wajib memiliki laporan kemajuan berkala. Maka pernyataan 'Ada pemenang yang lolos tanpa laporan kemajuan' merupakan ingkaran dari simpulan sah dan pasti bernilai salah.",
    tip: "Tarik dulu simpulan universal dari dua premis, lalu lihat apakah pernyataan yang diuji tepat mengingkari simpulan itu.",
  },
  {
    id: "tiu-sil-147",
    subPattern: "ekuivalensi-dan-ingkaran",
    difficulty: "sedang",
    prompt:
      "Pernyataan: \"Tidak semua inovasi daerah memenangkan penghargaan nasional.\"\nPernyataan lain yang semakna (ekuivalen) dengan kalimat tersebut adalah ...",
    options: [
      "Semua inovasi daerah tidak memenangkan penghargaan nasional",
      "Semua penghargaan nasional tidak diberikan untuk inovasi daerah",
      "Ada inovasi daerah yang tidak memenangkan penghargaan nasional",
      "Tidak ada inovasi daerah yang ikut penghargaan nasional",
      "Jika sebuah produk adalah inovasi daerah, maka pasti kalah lomba",
    ],
    answer: "C",
    explanation:
      "Ungkapan 'Tidak semua A adalah B' adalah bentuk negasi dari 'Semua A adalah B', sehingga semakna persis dengan 'Ada/Sebagian A yang tidak B'.",
    tip: "Hati-hati membedakan 'Tidak semua X bersifat Y' (= Ada X tidak Y) dengan 'Semua X tidak Y'.",
  },
  {
    id: "tiu-sil-148",
    subPattern: "ekuivalensi-dan-ingkaran",
    difficulty: "sulit",
    prompt:
      "Jika sistem tilang elektronik beroperasi dan kamera pengawas berfungsi normal, maka pelanggaran lalu lintas tercatat otomatis.\nDiketahui suatu persimpangan jalan tidak mencatat pelanggaran lalu lintas secara otomatis hari ini.\nManakah pernyataan yang PASTI setara dengan simpulan sah dari kedua premis?",
    options: [
      "Sistem tilang elektronik tidak beroperasi atau kamera pengawas tidak berfungsi normal",
      "Sistem tilang elektronik tidak beroperasi dan kamera pengawas rusak berat",
      "Kamera pengawas pasti berfungsi normal sedangkan tilang elektronik mati",
      "Pengendara di persimpangan tersebut selalu tertib berlalu lintas",
      "Tidak ada persimpangan yang memiliki sistem tilang elektronik",
    ],
    answer: "A",
    explanation:
      "Dari (p dan r) -> q dan ~q, Modus Tollens memberi ~(p dan r). Menurut De Morgan, ~(p dan r) setara dengan (~p atau ~r), yakni setidaknya salah satu syarat tidak terpenuhi.",
    tip: "Ingat: pengingkaran terhadap 'A dan B' menghasilkan 'bukan A atau bukan B', bukan memaksa keduanya sekaligus salah.",
  },
  {
    id: "tiu-sil-149",
    subPattern: "ekuivalensi-dan-ingkaran",
    difficulty: "sedang",
    prompt:
      "Sebagian aparatur sipil negara yang bertugas di perbatasan menerima tunjangan khusus.\nSebagian penerima tunjangan khusus berasal dari bidang kesehatan.\nSimpulan yang tepat adalah ...",
    options: [
      "Semua aparatur di perbatasan berasal dari bidang kesehatan",
      "Tidak dapat ditarik simpulan yang pasti bahwa ada aparatur di perbatasan yang berasal dari bidang kesehatan",
      "Sebagian aparatur yang bertugas di perbatasan pasti berasal dari bidang kesehatan",
      "Tidak ada tenaga bidang kesehatan yang bertugas di perbatasan",
      "Semua penerima tunjangan khusus adalah aparatur di perbatasan",
    ],
    answer: "B",
    explanation:
      "Premis 1 menyatakan sebagian ASN perbatasan (kelompok M) adalah penerima tunjangan khusus (kelompok T). Premis 2 menyatakan sebagian anggota T berasal dari kesehatan. Belum tentu anggota T yang berasal dari kesehatan itu termasuk kelompok M (ASN perbatasan).",
    tip: "Dua himpunan 'Sebagian' tidak cukup untuk menyimpulkan adanya irisan pasti antara pangkal dan ujung.",
  },
  {
    id: "tiu-sil-150",
    subPattern: "ekuivalensi-dan-ingkaran",
    difficulty: "sulit",
    prompt:
      "Pernyataan 1: \"Jika proyek bendungan selesai atau saluran irigasi diperbaiki, maka petani dapat menanam padi tiga kali setahun.\"\nJika diketahui bulan ini petani TIDAK dapat menanam padi tiga kali setahun, manakah simpulan yang paling tepat?",
    options: [
      "Proyek bendungan selesai tetapi saluran irigasi belum diperbaiki",
      "Saluran irigasi sudah diperbaiki sepenuhnya",
      "Petani sengaja menunda masa tanam karena musim panen raya",
      "Proyek bendungan belum selesai dan sebagian irigasi telah berfungsi",
      "Proyek bendungan belum selesai dan saluran irigasi belum diperbaiki",
    ],
    answer: "E",
    explanation:
      "Bentuk premis: (p atau r) -> q. Fakta ~q mengingkari sisi kanan sehingga melalui Modus Tollens menghasilkan ~(p atau r). Menurut hukum De Morgan, ~(p atau r) ekuivalen dengan (~p dan ~r): proyek bendungan belum selesai DAN saluran irigasi belum diperbaiki.",
    tip: "Gabungkan Modus Tollens dengan De Morgan: untuk menggagalkan akibat dari syarat 'A atau B', kedua syarat A dan B harus gagal.",
  },
];
