import type { QuestionDraft } from "@/modules/question-bank/domain/question";

export const silogismeBatch4InduktifDrafts: readonly QuestionDraft[] = [
  // =========================================================================
  // PENALARAN INDUKTIF: GENERALISASI POLA & FAKTA KHUSUS (151 - 155)
  // =========================================================================
  {
    id: "tiu-sil-151",
    subPattern: "penalaran-induktif",
    difficulty: "mudah",
    prompt:
      "Dalam evaluasi pelayanan publik tahun 2025, Mall Pelayanan Publik (MPP) di Kota Semarang mampu memangkas waktu penerbitan izin usaha dari 5 hari menjadi 2 hari. Di Kota Surabaya, kehadiran MPP menurunkan rata-rata waktu pengurusan dokumen kependudukan hingga 40%. Sementara itu, MPP di Kota Makassar mencatat penurunan keluhan keterlambatan layanan sebesar 35%, dan MPP di Kota Bandung mempercepat proses perizinan bangunan hingga setengah waktu sebelumnya.\nSimpulan induktif yang paling tepat berdasarkan fakta-fakta tersebut adalah ...",
    options: [
      "Semua pemerintah daerah di Indonesia pasti tidak lagi memiliki antrean layanan publik setelah membangun MPP",
      "Integrasi layanan melalui Mall Pelayanan Publik cenderung mempercepat proses dan meningkatkan responsivitas layanan di berbagai daerah",
      "Biaya operasional pemerintah kota pasti menurun drastis setelah seluruh kantor dinas ditutup dan diganti MPP",
      "Kota Surabaya memiliki sistem manajemen kepegawaian terbaik dibandingkan kota lain di Indonesia",
      "Penurunan keluhan masyarakat hanya dapat dicapai melalui pembangunan gedung pelayanan baru yang megah",
    ],
    answer: "B",
    explanation:
      "Empat fakta khusus dari Semarang, Surabaya, Makassar, dan Bandung menunjukkan pola yang seragam: keberadaan MPP berkaitan dengan percepatan waktu layanan dan penurunan keluhan. Oleh karena itu, generalisasi induktif yang proporsional menggunakan kata moderat 'cenderung' (opsi B). Opsi A keliru karena melakukan over-generalization ('semua' dan 'pasti tidak lagi memiliki antrean'). Opsi C dan D merupakan asumsi di luar teks, sedangkan opsi E mengklaim syarat tunggal ('hanya') tanpa dasar data.",
    tip: "Pada generalisasi induktif, pilih simpulan moderat (misalnya 'cenderung' atau 'berpotensi') yang merangkum pola seluruh contoh tanpa melampaui data.",
  },
  {
    id: "tiu-sil-152",
    subPattern: "penalaran-induktif",
    difficulty: "mudah",
    prompt:
      "Program pojok baca digital yang dilengkapi koleksi buku cerita interaktif diterapkan di SD Negeri 1 Sleman dan meningkatkan rata-rata kunjungan baca siswa dari 2 kali menjadi 5 kali per minggu. Hal serupa terjadi di SD Negeri 4 Denpasar yang mencatat kenaikan peminjaman buku sebesar 60% dalam satu semester, serta di SD Negeri 2 Padang yang melaporkan 80% siswanya mulai rutin membaca 15 menit sebelum jam pelajaran.\nSimpulan yang paling didukung oleh data di atas adalah ...",
    options: [
      "Seluruh siswa sekolah dasar di Indonesia akan meraih nilai matematika tinggi jika sekolah menyediakan pojok baca digital",
      "Perpustakaan konvensional dengan buku cetak sudah tidak diminati lagi oleh seluruh pelajar di Indonesia",
      "Siswa di Sleman memiliki kemampuan literasi yang jauh lebih unggul dibandingkan siswa di Denpasar dan Padang",
      "Penyediaan pojok baca digital dengan koleksi menarik cenderung mendorong peningkatan kebiasaan membaca siswa sekolah dasar",
      "Pemerintah wajib mengganti seluruh buku pelajaran cetak menjadi buku cerita interaktif mulai tahun depan",
    ],
    answer: "D",
    explanation:
      "Ketiga contoh sekolah menunjukkan pola peningkatan frekuensi kunjungan baca, peminjaman buku, dan rutinitas membaca siswa setelah pojok baca digital diterapkan. Simpulan yang tepat dan terukur adalah opsi D. Opsi A (nilai matematika) dan B (buku cetak tidak diminati lagi) adalah asumsi di luar data. Opsi C membandingkan keunggulan antardaerah tanpa indikator setara, sedangkan opsi E melompat ke rekomendasi kebijakan ekstrem yang tidak dinyatakan teks.",
    tip: "Eliminasi opsi yang memunculkan variabel baru di luar fakta (seperti mata pelajaran lain) atau menggunakan klaim mutlak.",
  },
  {
    id: "tiu-sil-153",
    subPattern: "penalaran-induktif",
    difficulty: "sedang",
    prompt:
      "Dinas Kesehatan memantau empat kecamatan yang menjalankan program Posyandu Terintegrasi berupa pemberian makanan tambahan berbahan pangan lokal serta pendampingan rutin bidan desa. Selama dua tahun, angka balita berisiko tengkes (stunting) di Kecamatan A turun 6,2%, di Kecamatan B turun 5,8%, di Kecamatan C turun 7,1%, dan di Kecamatan D turun 4,9%.\nSimpulan induktif yang paling tepat dari rangkaian temuan tersebut adalah ...",
    options: [
      "Pendampingan rutin tenaga kesehatan yang dipadukan dengan pemanfaatan pangan lokal berkontribusi positif terhadap penurunan risiko tengkes di wilayah sasaran",
      "Angka tengkes di seluruh wilayah provinsi tersebut dipastikan akan mencapai nol persen dalam dua tahun mendatang",
      "Kecamatan D gagal menjalankan program Posyandu Terintegrasi karena penurunannya paling kecil dibandingkan tiga kecamatan lain",
      "Pemberian makanan tambahan berbahan pangan lokal adalah satu-satunya faktor yang menentukan tumbuh kembang balita",
      "Semua kecamatan yang tidak menerapkan Posyandu Terintegrasi pasti mengalami lonjakan angka tengkes setiap tahun",
    ],
    answer: "A",
    explanation:
      "Keempat kecamatan memperlihatkan tren penurunan angka balita berisiko tengkes yang konsisten (antara 4,9% hingga 7,1%) selama pelaksanaan program. Opsi A menyimpulkan kontribusi positif secara akurat tanpa melebih-lebihkan. Opsi B melakukan ekstrapolasi ekstrem ('nol persen'). Opsi C keliru karena Kecamatan D tetap mengalami penurunan 4,9%. Opsi D salah karena menyempitkan penyebab menjadi 'satu-satunya', dan opsi E adalah asumsi atas wilayah yang tidak dibahas dalam teks.",
    tip: "Periksa apakah seluruh contoh menunjukkan arah tren yang sama, lalu hindari opsi yang menyimpulkan secara absolut atau menghakimi di luar kriteria data.",
  },
  {
    id: "tiu-sil-154",
    subPattern: "penalaran-induktif",
    difficulty: "sedang",
    prompt:
      "Uji tanam benih padi varietas tahan kering di Kabupaten Grobogan menghasilkan panen 6,4 ton per hektare saat curah hujan di bawah normal, jauh di atas rata-rata varietas lama sebesar 4,5 ton per hektare. Di Kabupaten Bojonegoro, varietas yang sama bertahan pada musim kemarau panjang dengan hasil 6,1 ton per hektare. Pola serupa tercatat di Kabupaten Lombok Tengah (5,9 ton per hektare) dan Kabupaten Maros (6,2 ton per hektare).\nBerdasarkan bukti empiris tersebut, generalisasi yang paling logis adalah ...",
    options: [
      "Petani di seluruh Indonesia pasti memperoleh keuntungan berlipat ganda apabila menanam varietas padi tahan kering",
      "Varietas padi lama tidak lagi layak ditanam di seluruh lahan sawah irigasi teknis pada musim hujan",
      "Kabupaten Grobogan merupakan daerah dengan kesuburan tanah paling tinggi di antara seluruh sentra pangan nasional",
      "Curah hujan tidak lagi memengaruhi produktivitas sektor pertanian pangan sejak ditemukannya benih varietas baru",
      "Benih padi varietas tahan kering berpotensi menjaga produktivitas panen pada wilayah yang menghadapi keterbatasan air",
    ],
    answer: "E",
    explanation:
      "Data uji tanam di empat kabupaten pada kondisi kemarau atau curah hujan di bawah normal secara konsisten menunjukkan hasil panen yang tinggi (5,9–6,4 ton/hektare). Generalisasi yang paling sahih adalah opsi E karena membatasi konteks pada wilayah dengan keterbatasan air dan memakai kata 'berpotensi'. Opsi A melompat ke keuntungan finansial (biaya produksi dan harga jual tidak dibahas). Opsi B dan D melakukan generalisasi berlebihan di luar kondisi uji, sedangkan opsi C tidak didukung pembanding kesuburan tanah.",
    tip: "Pastikan cakupan simpulan tetap selaras dengan kondisi pengujian yang disebutkan pada fakta-fakta awal.",
  },
  {
    id: "tiu-sil-155",
    subPattern: "penalaran-induktif",
    difficulty: "sulit",
    prompt:
      "Hasil pemantauan terhadap 120 pedagang di empat pasar rakyat—Pasar Beringharjo, Pasar Badung, Pasar Kosambi, dan Pasar Klewer—menunjukkan bahwa pedagang yang aktif menyediakan pembayaran QRIS sekaligus mencatat arus kas melalui aplikasi sederhana mengalami kenaikan rata-rata transaksi harian sebesar 18%–24% dan lebih mudah memperoleh akses kredit mikro perbankan. Namun, pedagang yang sekadar memasang kode QRIS tanpa pencatatan arus kas hanya mencatat kenaikan transaksi di bawah 5% dan tidak menunjukkan perubahan signifikan pada akses pembiayaan.\nSimpulan induktif yang paling tepat berdasarkan temuan tersebut adalah ...",
    options: [
      "Pemasangan kode QRIS secara otomatis menjamin peningkatan akses kredit perbankan bagi semua pedagang pasar rakyat",
      "Pedagang tradisional yang tidak memakai pembayaran digital pasti akan kehilangan seluruh pelanggan dalam waktu dekat",
      "Pemanfaatan pembayaran digital di pasar rakyat cenderung lebih berdampak optimal terhadap transaksi dan akses pembiayaan apabila disertai disiplin pencatatan keuangan",
      "Aplikasi pencatatan arus kas terbukti lebih penting daripada keberadaan pembeli fisik di empat pasar rakyat tersebut",
      "Seluruh bank di Indonesia hanya mau menyalurkan kredit mikro kepada pedagang yang berjualan di empat pasar tersebut",
    ],
    answer: "C",
    explanation:
      "Data membandingkan dua kelompok: (1) QRIS + pencatatan arus kas menghasilkan kenaikan transaksi 18%–24% dan kemudahan akses kredit, sedangkan (2) QRIS saja hanya memberi kenaikan <5% tanpa perubahan akses pembiayaan. Maka, pola induktif utamanya adalah sinergi pembayaran digital dengan disiplin pencatatan keuangan (opsi C). Opsi A bertentangan langsung dengan kelompok kedua. Opsi B, D, dan E mengandung over-generalization serta asumsi yang tidak terdapat dalam data.",
    tip: "Jika soal menyajikan kelompok pembanding (kontras), simpulan induktif yang tepat harus menangkap variabel pembeda utamanya.",
  },

  // =========================================================================
  // PENALARAN INDUKTIF: ANALOGI INDUKTIF (156 - 160)
  // =========================================================================
  {
    id: "tiu-sil-156",
    subPattern: "penalaran-induktif",
    difficulty: "mudah",
    prompt:
      "Kota P memiliki kepadatan penduduk tinggi, koridor jalan utama yang sempit, serta jaringan bus kota dan kereta komuter yang sebelumnya bertarif terpisah. Setelah menerapkan tarif integrasi satu tiket dan penjadwalan tepat waktu, jumlah penumpang angkutan umum di Kota P meningkat 32% dalam setahun. Kota Q memiliki kepadatan penduduk, struktur koridor jalan, dan fragmentasi moda bus serta kereta komuter yang sangat mirip dengan Kota P.\nSimpulan analogi induktif yang paling masuk akal adalah ...",
    options: [
      "Penerapan tarif integrasi di Kota Q pasti menghilangkan seluruh kemacetan lalu lintas dalam waktu enam bulan",
      "Kota Q tidak perlu melakukan perbaikan jadwal bus karena cukup meniru desain tiket milik Kota P",
      "Penerapan tarif integrasi dan perbaikan ketepatan jadwal di Kota Q berpeluang besar meningkatkan minat warga menggunakan angkutan umum",
      "Jumlah penumpang angkutan umum di Kota Q akan meningkat tepat 32% pada tahun pertama pelaksanaan",
      "Penduduk Kota Q terbukti lebih disiplin menggunakan transportasi umum dibandingkan penduduk Kota P",
    ],
    answer: "C",
    explanation:
      "Analogi induktif mentransfer kecenderungan hasil dari satu kasus ke kasus lain yang memiliki kemiripan sifat relevan secara probabilistik, bukan mutlak. Karena Kota P dan Kota Q memiliki profil kemacetan dan fragmentasi moda yang serupa, kebijakan yang sama berpeluang besar memberi efek serupa (opsi C). Opsi A ('pasti menghilangkan seluruh kemacetan') dan D ('tepat 32%') terlalu deterministik. Opsi B mengabaikan salah satu komponen kunci (ketepatan jadwal), dan opsi E tidak memiliki dasar fakta.",
    tip: "Analogi induktif menghasilkan simpulan bersifat kemungkinan kuat ('berpeluang besar', 'cenderung'), bukan angka pasti atau jaminan mutlak.",
  },
  {
    id: "tiu-sil-157",
    subPattern: "penalaran-induktif",
    difficulty: "sedang",
    prompt:
      "Kelurahan Maju merupakan kawasan permukiman padat dengan dominasi rumah tangga muda dan partisipasi karang taruna yang aktif. Melalui program Bank Sampah Berbasis RW yang terhubung dengan insentif potongan iuran kebersihan, volume sampah yang dikirim ke TPA berkurang 28% dalam delapan bulan. Kelurahan Sejahtera di kecamatan sebelahnya memiliki komposisi demografi, kepadatan hunian, serta keaktifan karang taruna yang sebanding.\nSimpulan analogi induktif yang paling tepat adalah ...",
    options: [
      "Program Bank Sampah Berbasis RW dengan skema insentif serupa berpotensi menurunkan volume pengiriman sampah ke TPA dari Kelurahan Sejahtera",
      "Kelurahan Sejahtera dipastikan mampu mengurangi volume sampah lebih dari 50% karena belajar dari pengalaman Kelurahan Maju",
      "Warga Kelurahan Sejahtera tidak akan mau memilah sampah kecuali seluruh iuran kebersihan digratiskan sepenuhnya",
      "Semua kelurahan di Indonesia harus dipimpin oleh karang taruna agar persoalan sampah TPA dapat tuntas",
      "TPA di kecamatan tersebut akan ditutup secara permanen apabila Kelurahan Sejahtera menerapkan bank sampah",
    ],
    answer: "A",
    explanation:
      "Kemiripan karakteristik kunci (kepadatan hunian, demografi rumah tangga muda, dan karang taruna aktif) mendukung inferensi analogi bahwa penerapan skema serupa di Kelurahan Sejahtera berpotensi menghasilkan penurunan volume sampah ke TPA (opsi A). Opsi B mengarang lonjakan angka (>50%) dan kepastian mutlak. Opsi C, D, dan E adalah klaim berlebihan yang tidak ditopang premis.",
    tip: "Uji relevansi kesamaan antar dua objek; simpulan analogi hanya sah untuk lingkup program dan dampak yang sepadan.",
  },
  {
    id: "tiu-sil-158",
    subPattern: "penalaran-induktif",
    difficulty: "sedang",
    prompt:
      "RSUD Harapan (tipe B) dengan rata-rata 900 pasien rawat jalan per hari dan tingkat kepemilikan ponsel pintar pasien di atas 85% berhasil menurunkan waktu tunggu pendaftaran dari 75 menit menjadi 20 menit setelah menerapkan sistem antrean daring yang disertai loket pendamping bagi lansia. RSUD Nusantara (tipe B) menghadapi antrean panjang dengan profil jumlah kunjungan harian dan akses ponsel pintar pasien yang hampir sama.\nSimpulan yang paling logis berdasarkan analogi tersebut adalah ...",
    options: [
      "RSUD Nusantara cukup memindahkan seluruh pendaftaran ke aplikasi ponsel dan menutup semua loket pendaftaran fisik",
      "Waktu tunggu pendaftaran di RSUD Nusantara pasti turun menjadi tepat 20 menit sejak hari pertama aplikasi diluncurkan",
      "Seluruh pasien di RSUD Nusantara tidak lagi membutuhkan bantuan petugas karena mayoritas telah memiliki ponsel pintar",
      "Kualitas tindakan medis dokter di RSUD Nusantara akan langsung setara dengan RSUD Harapan setelah memakai sistem antrean daring",
      "Penerapan sistem antrean daring yang tetap menyediakan loket pendamping bagi kelompok rentan berpeluang besar memangkas waktu tunggu di RSUD Nusantara",
    ],
    answer: "E",
    explanation:
      "Keberhasilan RSUD Harapan didukung oleh dua elemen kebijakan: antrean daring dan loket pendamping bagi lansia. Dengan profil tipe RSUD, volume pasien, dan akses ponsel pintar yang serupa, opsi E menjadi simpulan analogi yang paling utuh dan realistis. Opsi A dan C menghilangkan elemen loket pendamping. Opsi B membuat klaim angka persis dan instan. Opsi D melenceng ke kualitas tindakan medis dokter yang bukan objek intervensi.",
    tip: "Perhatikan seluruh komponen kunci keberhasilan pada kasus rujukan agar tidak ada elemen penting yang terlewat saat ditarik ke kasus target.",
  },
  {
    id: "tiu-sil-159",
    subPattern: "penalaran-induktif",
    difficulty: "sulit",
    prompt:
      "Dinas Perdagangan Provinsi X mendirikan Klinik Ekspor yang memfasilitasi sertifikasi mutu, kurasi kemasan, dan temu bisnis daring bagi 200 UMKM kerajinan berorientasi ekspor. Dalam 18 bulan, 42% peserta berhasil melakukan ekspor perdana. Pemerintah Provinsi Y berencana mereplikasi program yang persis sama bagi 200 UMKM kuliner basah siap saji yang masa simpannya hanya satu hari, lalu menyimpulkan bahwa sekitar 40% peserta di Provinsi Y akan menembus pasar ekspor dalam 18 bulan.\nEvaluasi paling tepat terhadap penalaran analogi Pemerintah Provinsi Y adalah ...",
    options: [
      "Analogi tersebut sangat kuat karena jumlah UMKM peserta dan durasi program di kedua provinsi sama persis",
      "Analogi tersebut lemah karena terdapat perbedaan sifat krusial pada ketahanan produk antara kerajinan tahan lama dan kuliner basah bermasa simpan satu hari",
      "Analogi tersebut pasti benar asalkan Dinas Perdagangan Provinsi Y menggunakan aplikasi temu bisnis daring yang sama",
      "Analogi tersebut keliru semata-mata karena lokasi geografis Provinsi X dan Provinsi Y berbeda",
      "Analogi tersebut valid secara mutlak karena seluruh UMKM pada dasarnya membutuhkan sertifikasi mutu dan kurasi kemasan",
    ],
    answer: "B",
    explanation:
      "Kekuatan analogi induktif ditentukan oleh relevansi kesamaan terhadap kesimpulan, bukan sekadar kesamaan permukaan (jumlah peserta 200 atau durasi 18 bulan). Untuk tujuan ekspor lintas negara, daya tahan simpan produk merupakan faktor krusial; kuliner basah bermasa simpan 1 hari memiliki hambatan logistik yang sangat berbeda dari kerajinan tahan lama. Karena itu, analoginya lemah (opsi B). Opsi A, C, dan E mengabaikan ketimpangan variabel kunci, sedangkan opsi D menunjuk faktor geografis semata tanpa menyentuh inti hambatan produk.",
    tip: "Dalam soal analogi tingkat lanjut, uji apakah ada perbedaan krusial yang langsung memengaruhi tercapainya hasil yang diprediksi.",
  },
  {
    id: "tiu-sil-160",
    subPattern: "penalaran-induktif",
    difficulty: "sulit",
    prompt:
      "SMK Karya Teknik menerapkan kurikulum berbasis proyek bersama tiga pabrik otomotif mitra dan mewajibkan magang terstruktur selama enam bulan pada tahun terakhir. Hasil pelacakan lulusan menunjukkan 78% alumni terserap bekerja di sektor manufaktur dalam waktu kurang dari empat bulan setelah lulus. SMK Mitra Industri berada di kawasan industri yang sama, memiliki jurusan teknik permesinan serupa, dan baru saja menandatangani kerja sama magang terstruktur enam bulan bersama empat perusahaan manufaktur.\nSimpulan induktif paling tepat yang dapat ditarik adalah ...",
    options: [
      "Seluruh lulusan SMK di Indonesia, termasuk jurusan non-teknik, akan langsung diterima bekerja jika magang diperpanjang menjadi enam bulan",
      "Tingkat serapan kerja lulusan SMK Mitra Industri dipastikan melampaui 78% karena jumlah perusahaan mitranya lebih banyak satu perusahaan",
      "Sekolah menengah atas (SMA) di kawasan industri tersebut sebaiknya diubah menjadi SMK agar tidak ada lagi pengangguran terdidik",
      "Lulusan jurusan teknik permesinan SMK Mitra Industri memiliki prospek tinggi untuk mengalami peningkatan kecepatan serapan kerja di sektor manufaktur",
      "Kerja sama dengan perusahaan manufaktur menjamin gaji awal lulusan SMK Mitra Industri lebih tinggi daripada standar upah regional",
    ],
    answer: "D",
    explanation:
      "SMK Karya Teknik dan SMK Mitra Industri memiliki kesamaan variabel relevan yang kuat: lokasi kawasan industri, bidang keahlian teknik manufaktur, dan pola magang terstruktur enam bulan bersama mitra industri. Maka, simpulan analogi yang paling tepat adalah prospek tinggi peningkatan serapan kerja di bidang terkait (opsi D). Opsi A melakukan over-generalization ke semua jurusan. Opsi B berasumsi linear secara mekanis (4 mitra pasti >78%). Opsi C dan E berada jauh di luar cakupan data.",
    tip: "Hindari asumsi proporsionalitas kaku (misal lebih banyak mitra pasti otomatis lebih tinggi persentasenya) dan jaga simpulan tetap dalam domain yang sama.",
  },

  // =========================================================================
  // PENALARAN INDUKTIF: SEBAB-AKIBAT EMPIRIS & KORELASI VS KAUSALITAS (161 - 165)
  // =========================================================================
  {
    id: "tiu-sil-161",
    subPattern: "penalaran-induktif",
    difficulty: "mudah",
    prompt:
      "Data statistik selama lima tahun di sebuah kota pesisir menunjukkan bahwa setiap kali volume penjualan es krim meningkat tajam pada bulan Juni hingga Agustus, jumlah laporan insiden pengunjung yang nyaris tenggelam di pantai juga meningkat secara signifikan. Seorang pengamat menyimpulkan bahwa konsumsi es krim memicu meningkatnya insiden di pantai.\nSimpulan yang paling tepat untuk menanggapi data tersebut adalah ...",
    options: [
      "Kenaikan penjualan es krim dan insiden pantai hanya menunjukkan korelasi yang kemungkinan besar sama-sama dipicu faktor ketiga seperti musim libur dan cuaca panas",
      "Pemerintah daerah harus segera melarang penjualan es krim di sekitar pantai demi menekan angka kecelakaan laut",
      "Data lima tahun sudah cukup membuktikan secara mutlak bahwa es krim menurunkan kemampuan berenang seseorang",
      "Pengunjung pantai yang tidak membeli es krim dipastikan aman dari risiko terseret ombak",
      "Insiden di pantai merupakan penyebab utama warga pesisir gemar membeli es krim pada bulan Juni hingga Agustus",
    ],
    answer: "A",
    explanation:
      "Dua peristiwa yang naik bersamaan (korelasi positif) tidak serta-merta berarti yang satu menyebabkan yang lain (korelasi bukan kausalitas). Pada kasus ini, musim panas/libur sekolah (variabel ketiga/confounding variable) secara bersamaan meningkatkan kunjungan ke pantai sekaligus konsumsi es krim (opsi A). Opsi B, C, dan D terjebak pada asumsi kausalitas keliru, sementara opsi E justru membalik kausalitas tanpa dasar logis.",
    tip: "Ingat prinsip dasar penalaran empiris: korelasi tidak sama dengan kausalitas; selalu cek kemungkinan adanya faktor ketiga.",
  },
  {
    id: "tiu-sil-162",
    subPattern: "penalaran-induktif",
    difficulty: "sedang",
    prompt:
      "Audit internal di sebuah unit verifikasi berkas menemukan bahwa pada pekan dengan rata-rata jam lembur di atas 12 jam per pegawai, tingkat kesalahan input data mencapai 9,4%. Sebaliknya, pada pekan normal tanpa lembur berlebihan, tingkat kesalahan input hanya berkisar 1,8% hingga 2,3%. Meski demikian, laporan audit juga mencatat adanya pembaruan tampilan antarmuka aplikasi pada salah satu pekan lembur tersebut.\nSimpulan yang paling cermat berdasarkan laporan audit tersebut adalah ...",
    options: [
      "Pembaruan tampilan antarmuka aplikasi adalah satu-satunya pemicu seluruh kesalahan input data sepanjang tahun",
      "Menghapus jam lembur secara total pasti membuat kesalahan input data menjadi nol persen di semua unit kerja",
      "Tingginya jam lembur berkaitan erat dengan meningkatnya kesalahan input data, meskipun faktor lain seperti perubahan aplikasi juga perlu diperhitungkan",
      "Pegawai di unit verifikasi berkas tidak memiliki kompetensi memadai untuk mengoperasikan komputer kerja",
      "Kesalahan input data sebesar 2% pada pekan normal membuktikan bahwa beban kerja pegawai masih terlalu ringan",
    ],
    answer: "C",
    explanation:
      "Data memperlihatkan hubungan kuat antara jam lembur tinggi (>12 jam) dan lonjakan tingkat kesalahan (9,4% dibanding 1,8%–2,3%), namun teks secara eksplisit menyebut variabel lain (pembaruan antarmuka aplikasi pada salah satu pekan lembur). Opsi C merangkum keterkaitan empiris sekaligus mengakui faktor penyerta dengan akurat. Opsi A dan B bersifat absolut/tunggal, sedangkan opsi D dan E adalah tuduhan dan asumsi tanpa bukti.",
    tip: "Jika data menyebut lebih dari satu faktor yang terjadi bersamaan, pilih simpulan yang mengakui hubungan utama tanpa menafikan faktor penyerta.",
  },
  {
    id: "tiu-sil-163",
    subPattern: "penalaran-induktif",
    difficulty: "sedang",
    prompt:
      "Pada awal tahun, Kantor Imigrasi Daerah Z secara serentak melakukan dua perubahan: melatih seluruh petugas loket tentang komunikasi empatik serta merenovasi ruang tunggu dengan pendingin udara dan kursi ergonomis. Tiga bulan kemudian, Indeks Kepuasan Masyarakat (IKM) naik dari 78 menjadi 89. Kepala unit menyimpulkan bahwa pelatihan komunikasi empatik terbukti menjadi penyebab tunggal kenaikan skor IKM sebesar 11 poin.\nKelemahan utama dari simpulan kepala unit tersebut adalah ...",
    options: [
      "Kenaikan skor IKM dari 78 menjadi 89 terlalu kecil untuk dianggap sebagai perbaikan layanan",
      "Dua intervensi dilakukan secara bersamaan sehingga dampak pelatihan komunikasi tidak dapat dipisahkan secara tunggal dari efek renovasi ruang tunggu",
      "Survei kepuasan masyarakat setelah tiga bulan tidak boleh digunakan dalam evaluasi kantor pelayanan publik",
      "Renovasi ruang tunggu pasti selalu lebih disukai masyarakat dibandingkan keramahan petugas loket",
      "Pelatihan komunikasi empatik tidak mungkin memberikan kontribusi apa pun terhadap penilaian masyarakat",
    ],
    answer: "B",
    explanation:
      "Karena pelatihan petugas dan renovasi ruang tunggu diterapkan serentak sebelum pengukuran IKM, kedua variabel tersebut saling bercampur (confounded). Tidak ada bukti dalam data untuk mengisolasi pelatihan sebagai penyebab tunggal (opsi B). Opsi A keliru karena kenaikan 11 poin cukup besar. Opsi C, D, dan E adalah klaim sepihak yang tidak didukung fakta.",
    tip: "Waspadai simpulan 'penyebab tunggal' ketika beberapa kebijakan atau perubahan diterapkan dalam periode yang sama.",
  },
  {
    id: "tiu-sil-164",
    subPattern: "penalaran-induktif",
    difficulty: "sedang",
    prompt:
      "Pemerintah Kota R menaikkan tarif parkir di pusat bisnis sebesar 100% pada bulan Maret. Di bulan yang sama, rute baru bus listrik gratis melintasi pusat bisnis mulai beroperasi dan dua ruas jalan utama dilengkapi jalur sepeda terlindungi. Pada bulan Juni, volume kendaraan pribadi yang memasuki pusat bisnis turun 27%.\nManakah pernyataan yang paling tepat berdasarkan informasi tersebut?",
    options: [
      "Kenaikan tarif parkir 100% terbukti menjadi satu-satunya alasan warga meninggalkan kendaraan pribadi",
      "Bus listrik gratis tidak diminati warga karena penurunan kendaraan pribadi hanya mencapai 27%",
      "Seluruh pemilik kendaraan pribadi di Kota R telah beralih menggunakan sepeda untuk berangkat kerja",
      "Penurunan volume kendaraan pribadi beriringan dengan kombinasi kebijakan tarif parkir dan peningkatan alternatif transportasi, sehingga peran masing-masing faktor belum dapat dipastikan terpisah",
      "Apabila tarif parkir dinaikkan 200%, volume kendaraan pribadi di pusat bisnis pasti turun menjadi 54%",
    ],
    answer: "D",
    explanation:
      "Terdapat tiga faktor yang berjalan bersamaan pada bulan Maret (tarif parkir, bus listrik gratis, dan jalur sepeda) sebelum penurunan 27% tercatat pada bulan Juni. Oleh sebab itu, kita hanya dapat menyimpulkan keterkaitan penurunan dengan kombinasi kebijakan tersebut tanpa bisa mengklaim besaran kontribusi tunggal salah satunya (opsi D). Opsi A mengklaim sebab tunggal, opsi B dan C berasumsi tanpa data, dan opsi E melakukan ekstrapolasi linear yang tidak berdasar.",
    tip: "Bedakan antara hasil dari paket kebijakan gabungan dengan pembuktian efek dari satu variabel terisolasi.",
  },
  {
    id: "tiu-sil-165",
    subPattern: "penalaran-induktif",
    difficulty: "sulit",
    prompt:
      "Sebuah survei pendidikan di 15 kabupaten menemukan bahwa siswa SMP yang memiliki tablet layar lebar keluaran terbaru rata-rata memperoleh skor asesmen literasi 14 poin lebih tinggi dibandingkan siswa yang tidak memilikinya. Berdasarkan temuan ini, sebuah artikel menyimpulkan bahwa membeli tablet keluaran terbaru secara langsung meningkatkan kemampuan membaca kritis siswa.\nManakah analisis penalaran induktif yang paling tepat terhadap simpulan artikel tersebut?",
    options: [
      "Simpulan artikel tersebut sahih karena selisih 14 poin diambil dari sampel besar di 15 kabupaten",
      "Simpulan artikel tersebut tepat karena perangkat elektronik yang lebih mahal selalu memuat materi literasi yang lebih lengkap",
      "Artikel tersebut keliru karena siswa SMP seharusnya dilarang menggunakan perangkat digital selama masa sekolah",
      "Data survei membuktikan bahwa siswa tanpa tablet tidak akan pernah mampu mencapai skor literasi di atas rata-rata",
      "Artikel tersebut mengabaikan potensi variabel perancu seperti latar belakang sosial-ekonomi keluarga dan akses bimbingan belajar yang dapat memengaruhi baik kepemilikan tablet maupun skor literasi",
    ],
    answer: "E",
    explanation:
      "Kepemilikan tablet mahal sangat mungkin berkorelasi dengan kondisi ekonomi keluarga yang lebih mapan, akses buku, lingkungan belajar kondusif, atau les tambahan—semuanya merupakan variabel perancu (confounding variables) yang juga meningkatkan skor literasi. Menyimpulkan pembelian tablet sebagai penyebab langsung adalah kekeliruan kausalitas (opsi E). Opsi A dan B menerima korelasi sebagai kausalitas mentah-mentah. Opsi C bersifat normatif di luar analisis logika data, dan opsi D melakukan over-generalization ekstrem.",
    tip: "Saat menemukan korelasi antara kepemilikan barang/status dengan prestasi, periksa variabel latar belakang (seperti sosial-ekonomi) yang menjadi perancu.",
  },

  // =========================================================================
  // PENALARAN INDUKTIF: MEMPERKUAT & MELEMAHKAN ARGUMEN (166 - 170)
  // =========================================================================
  {
    id: "tiu-sil-166",
    subPattern: "penalaran-induktif",
    difficulty: "sedang",
    prompt:
      "Sebuah lembaga pemerintah menguji coba pola kerja fleksibel dua hari dari rumah (WFA) bagi divisi analisis data selama enam bulan. Hasil evaluasi menunjukkan penyelesaian laporan tepat waktu meningkat dari 82% menjadi 94%, sehingga pimpinan menyimpulkan bahwa pola kerja fleksibel efektif meningkatkan ketepatan penyelesaian kerja analis data.\nPernyataan manakah yang PALING MEMPERKUAT simpulan pimpinan tersebut?",
    options: [
      "Selama enam bulan uji coba, sebagian besar analis data menyatakan lebih menyukai pakaian kerja yang santai saat bekerja dari rumah",
      "Pada periode yang sama, divisi analisis data lain di kementerian tersebut yang tetap bekerja penuh di kantor dengan beban laporan setara tidak mengalami peningkatan ketepatan waktu penyelesaian",
      "Lembaga pemerintah tersebut berencana memperbarui sistem jaringan internet di gedung kantor pusat pada tahun anggaran berikutnya",
      "Selama masa uji coba, jumlah laporan yang ditugaskan kepada divisi analisis data dikurangi hingga separuh dari biasanya",
      "Beberapa pegawai di divisi administrasi umum juga mengajukan usulan agar dapat mengikuti skema kerja fleksibel",
    ],
    answer: "B",
    explanation:
      "Argumen sebab-akibat induktif paling kuat diperkokoh oleh adanya kelompok kontrol (pembanding) dengan beban kerja setara yang tidak diberi perlakuan WFA dan hasilnya stagnan (opsi B). Ini mengeliminasi dugaan bahwa kenaikan ketepatan waktu disebabkan faktor musiman atau tren umum organisasi. Opsi D justru melemahkan simpulan (beban dikurangi separuh). Opsi A, C, dan E tidak relevan terhadap pembuktian efektivitas ketepatan penyelesaian kerja.",
    tip: "Untuk memperkuat simpulan sebab-akibat, cari data pembanding (kelompok kontrol) atau bukti yang menyingkirkan penyebab alternatif.",
  },
  {
    id: "tiu-sil-167",
    subPattern: "penalaran-induktif",
    difficulty: "sedang",
    prompt:
      "Komunitas lingkungan mengadakan kampanye poster dan edukasi lisan selama dua bulan di tiga pasar tradisional agar pembeli membawa tas kain sendiri. Pada akhir bulan kedua, penggunaan kantong plastik sekali pakai di ketiga pasar tersebut turun 65%. Koordinator komunitas menyimpulkan bahwa kampanye edukasi mereka berhasil mengubah kesadaran pembeli secara drastis.\nPernyataan manakah yang PALING MELEMAHKAN simpulan koordinator tersebut?",
    options: [
      "Desain poster kampanye dicetak menggunakan kertas daur ulang dengan ukuran huruf yang mudah dibaca dari jarak jauh",
      "Sebagian pedagang mengaku tetap menyediakan kantong plastik cadangan di bawah meja bagi pembeli yang memaksa",
      "Kampanye serupa sebelumnya pernah dilakukan di sebuah universitas dan mendapat apresiasi dari mahasiswa",
      "Tepat di awal bulan pertama kampanye, pemerintah daerah memberlakukan sanksi denda bagi pedagang pasar yang masih memberikan kantong plastik gratis kepada pembeli",
      "Jumlah relawan yang terlibat dalam edukasi lisan di ketiga pasar meningkat pada minggu terakhir kegiatan",
    ],
    answer: "D",
    explanation:
      "Simpulan argumen mengklaim bahwa 'kampanye edukasi' adalah penyebab perubahan kesadaran dan turunnya plastik sebesar 65%. Opsi D paling melemahkan karena menghadirkan penyebab alternatif yang jauh lebih memaksa secara bersamaan (sanksi denda pemerintah daerah bagi pedagang), sehingga penurunan plastik belum tentu berasal dari keberhasilan edukasi. Opsi A, C, dan E cenderung mendukung atau netral, sedangkan opsi B hanya menyebut pengecualian kecil yang tidak menjelaskan penurunan 65%.",
    tip: "Untuk melemahkan klaim kausalitas, cari pernyataan yang memunculkan penyebab alternatif kuat pada periode yang sama.",
  },
  {
    id: "tiu-sil-168",
    subPattern: "penalaran-induktif",
    difficulty: "sedang",
    prompt:
      "Pemerintah kabupaten menyelenggarakan pelatihan pemrograman web intensif selama empat bulan bagi 100 pemuda desa yang sebelumnya belum memiliki pekerjaan tetap. Enam bulan setelah pelatihan selesai, 72 peserta telah bekerja sebagai pengembang web lepas maupun karyawan perusahaan teknologi. Penyelenggara menyimpulkan bahwa pelatihan tersebut berkontribusi signifikan terhadap peningkatan serapan kerja digital pemuda desa.\nPernyataan manakah yang PALING MEMPERKUAT simpulan penyelenggara?",
    options: [
      "Seluruh peserta pelatihan mendapatkan sertifikat kehadiran dan kaus seragam dari dinas ketenagakerjaan",
      "Sebagian besar peserta pelatihan telah mengenal internet melalui media sosial sebelum mengikuti program",
      "Pelatihan pemrograman web tersebut menghabiskan anggaran lebih rendah dibandingkan pembangunan jembatan desa",
      "Hanya 10% perusahaan teknologi di provinsi tersebut yang membuka kantor cabang di wilayah pedesaan",
      "Dari 100 pemuda desa berlatar belakang pendidikan serupa yang mendaftar tetapi belum masuk kuota pelatihan, hanya 9 orang yang bekerja di bidang digital dalam periode yang sama",
    ],
    answer: "E",
    explanation:
      "Opsi E menyediakan kelompok pembanding (waitlist control) dengan minat dan latar belakang serupa yang tidak mengikuti pelatihan, dan tingkat serapan kerjanya jauh lebih rendah (9% dibanding 72%). Perbedaan tajam ini sangat memperkuat klaim bahwa pelatihanlah yang berkontribusi signifikan terhadap serapan kerja digital. Opsi A, B, dan C tidak membuktikan dampak pelatihan terhadap pekerjaan, sementara opsi D tidak secara langsung memperkuat efektivitas pelatihan.",
    tip: "Bukti perbandingan antara peserta program dan non-peserta berkarakteristik serupa adalah penguat paling tajam dalam penalaran induktif.",
  },
  {
    id: "tiu-sil-169",
    subPattern: "penalaran-induktif",
    difficulty: "sulit",
    prompt:
      "Badan Pendapatan Daerah meluncurkan aplikasi pembayaran pajak daerah versi baru. Sebulan kemudian, mereka menyebarkan tautan survei kepuasan melalui akun media sosial resmi instansi selama tiga hari. Dari 600 responden yang mengisi, 91% menyatakan aplikasi baru jauh lebih mudah digunakan dibandingkan loket manual. Instansi pun menyimpulkan bahwa mayoritas wajib pajak di seluruh daerah tersebut puas terhadap peralihan ke aplikasi digital.\nPernyataan manakah yang PALING MELEMAHKAN generalisasi instansi tersebut?",
    options: [
      "Sebagian besar wajib pajak di daerah tersebut berusia lanjut, tinggal di wilayah berjaringan internet terbatas, dan tidak menggunakan media sosial sehingga tidak terwakili dalam survei",
      "Tampilan warna aplikasi versi baru dipilih berdasarkan hasil pemungutan suara internal pegawai Badan Pendapatan Daerah",
      "Sebanyak 9% responden yang mengisi survei melalui media sosial tetap menyarankan penambahan fitur cetak bukti bayar",
      "Jumlah pengikut akun media sosial resmi Badan Pendapatan Daerah meningkat 15% setelah tautan survei diunggah",
      "Aplikasi pajak versi baru dapat diunduh secara gratis melalui dua sistem operasi ponsel pintar populer",
    ],
    answer: "A",
    explanation:
      "Generalisasi induktif dari sampel ke populasi hanya valid jika sampelnya representatif. Opsi A mengungkap bias seleksi sampel (sampling bias) yang fatal: survei daring via media sosial hanya menjangkau kelompok melek digital dan menyingkirkan mayoritas wajib pajak lansia atau yang terkendala internet, sehingga angka 91% tidak dapat digeneralisasikan ke seluruh wajib pajak. Opsi B, D, dan E tidak menyentuh validitas survei, sedangkan opsi C hanya merinci kritik minoritas (9%) dari sampel yang sama.",
    tip: "Pada soal generalisasi hasil survei, selalu periksa apakah sampel responden benar-benar mewakili seluruh populasi yang disimpulkan.",
  },
  {
    id: "tiu-sil-170",
    subPattern: "penalaran-induktif",
    difficulty: "sulit",
    prompt:
      "Data Dinas Perpustakaan Daerah menunjukkan bahwa jumlah kunjungan fisik masyarakat ke gedung perpustakaan terus menurun selama tiga tahun berturut-turut, yakni dari 48.000 kunjungan pada 2023 menjadi 39.000 pada 2024 dan 29.500 pada 2025. Berdasarkan tren tersebut, sebuah laporan menyimpulkan bahwa minat baca masyarakat di daerah itu mengalami penurunan tajam dalam tiga tahun terakhir.\nPernyataan manakah yang PALING MELEMAHKAN simpulan laporan tersebut?",
    options: [
      "Gedung perpustakaan daerah tersebut berdiri di dekat pusat perbelanjaan yang memiliki area parkir luas",
      "Jam operasional layanan kunjungan fisik perpustakaan daerah tidak pernah berubah sejak tahun 2020",
      "Dalam tiga tahun yang sama, jumlah anggota aktif dan total peminjaman buku digital pada aplikasi perpustakaan daerah melonjak lebih dari empat kali lipat melampaui penurunan kunjungan fisik",
      "Dinas Perpustakaan Daerah mengadakan lomba resensi buku tingkat pelajar satu kali setiap bulan Oktober",
      "Sebagian koleksi buku cetak terbitan lama di gedung perpustakaan masih tersusun rapi di ruang baca lantai dua",
    ],
    answer: "C",
    explanation:
      "Laporan menyamakan 'kunjungan fisik ke gedung perpustakaan' dengan 'minat baca masyarakat'. Opsi C menghantam asumsi tersembunyi tersebut secara telak: masyarakat bukan berhenti membaca, melainkan beralih medium ke buku digital pada aplikasi perpustakaan dengan lonjakan peminjaman lebih dari empat kali lipat. Opsi B justru memperkecil kemungkinan faktor jam buka sehingga sedikit menguatkan laporan, sedangkan opsi A, D, dan E tidak memengaruhi validitas tren minat baca.",
    tip: "Untuk melemahkan kesimpulan dari satu indikator (seperti kunjungan fisik), cari bukti bahwa aktivitas yang diukur telah berpindah ke saluran lain.",
  },
];
