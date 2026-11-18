import type { QuestionDraft } from "@/modules/question-bank/domain/question";

export const silogismeBatch2Drafts: readonly QuestionDraft[] = [
  // =========================================================================
  // MODUS TOLLENS LANJUTAN (051 - 060)
  // =========================================================================
  {
    id: "tiu-sil-051",
    subPattern: "modus-tollens",
    difficulty: "sedang",
    prompt:
      "Jika pusat layanan terpadu beroperasi pada hari Sabtu, maka pemohon dapat mengambil kartu identitas di akhir pekan.\nNyatanya pemohon tidak dapat mengambil kartu identitas di akhir pekan.\nSimpulan yang tepat adalah ...",
    options: [
      "Pemohon tidak membutuhkan kartu identitas",
      "Pusat layanan terpadu menambah jam buka hari Minggu",
      "Semua layanan publik tutup selama sepekan",
      "Pusat layanan terpadu tidak beroperasi pada hari Sabtu",
      "Kartu identitas dikirim lewat pos kilat",
    ],
    answer: "D",
    explanation:
      "Dengan Modus Tollens (p -> q dan ~q), karena konsekuen q tidak terjadi (tidak dapat mengambil di akhir pekan), maka sebab p tidak terjadi.",
    tip: "Kenali bagian akibat yang diingkari di kalimat kedua lalu tarik pengingkaran sebabnya.",
  },
  {
    id: "tiu-sil-052",
    subPattern: "modus-tollens",
    difficulty: "sulit",
    prompt:
      "Jika auditor memeriksa bukti transaksi secara menyeluruh, maka temuan selisih kas dicatat atau laporan dikembalikan untuk revisi.\nPada triwulan ini temuan selisih kas tidak dicatat dan laporan tidak dikembalikan untuk revisi.\nSimpulan yang sah adalah ...",
    options: [
      "Auditor tidak memeriksa bukti transaksi secara menyeluruh",
      "Seluruh bukti transaksi dinyatakan bebas dari revisi selamanya",
      "Auditor pasti menemukan selisih kas bernilai besar",
      "Laporan keuangan disahkan tanpa tanda tangan auditor",
      "Tidak dapat ditarik simpulan mengenai kerja auditor",
    ],
    answer: "A",
    explanation:
      "Premis 1: p -> (q atau r). Premis 2: ~q dan ~r, yang berarti ~(q atau r). Menurut Modus Tollens, disimpulkan ~p.",
    tip: "Untuk menyangkal akibat berbentuk 'X atau Y', pastikan kedua cabangnya tidak terjadi.",
  },
  {
    id: "tiu-sil-053",
    subPattern: "modus-tollens",
    difficulty: "sedang",
    prompt:
      "Apabila subsidi pupuk disalurkan langsung ke kelompok tani terdaftar, maka stok pupuk di gudang desa mencukupi.\nMenjelang musim tanam, stok pupuk di gudang desa tidak mencukupi.\nSimpulan yang tepat adalah ...",
    options: [
      "Petani berhenti menanam padi musim ini",
      "Gudang desa dibongkar karena tidak terpakai",
      "Kelompok tani terdaftar menolak menerima pupuk",
      "Pupuk bersubsidi dijual lebih murah di desa",
      "Subsidi pupuk tidak disalurkan langsung ke kelompok tani terdaftar",
    ],
    answer: "E",
    explanation:
      "Premis 2 menyangkal konsekuen (stok pupuk tidak mencukupi), sehingga anteseden pada Premis 1 pasti tidak terjadi.",
    tip: "Fokus pada hubungan implikasi tunggal p -> q tanpa menambahkan alasan di luar premis.",
  },
  {
    id: "tiu-sil-054",
    subPattern: "modus-tollens",
    difficulty: "sulit",
    prompt:
      "Jika sistem verifikasi biometrik aktif dan basis data tersinkronisasi, maka pengesahan paspor selesai dalam satu hari.\nPengesahan paspor milik Nadia memakan waktu lebih dari satu hari, padahal sistem verifikasi biometrik sedang aktif.\nSimpulan yang paling tepat adalah ...",
    options: [
      "Sistem verifikasi biometrik mengalami gangguan total",
      "Nadia membatalkan permohonan paspornya",
      "Basis data belum tersinkronisasi",
      "Paspor Nadia sudah terbit lebih awal",
      "Semua permohonan paspor ditolak minggu ini",
    ],
    answer: "C",
    explanation:
      "Dari (p dan r) -> q dan ~q ('memakan waktu lebih dari satu hari'), diperoleh ~(p dan r). Karena p ('biometrik aktif') benar, maka ~r ('basis data belum tersinkronisasi') pasti benar.",
    tip: "Ketika syarat gabungan 'A dan B' gagal menghasilkan akibat padahal A terpenuhi, maka B yang gagal.",
  },
  {
    id: "tiu-sil-055",
    subPattern: "modus-tollens",
    difficulty: "mudah",
    prompt:
      "Jika kementerian membuka kanal pengaduan daring, maka setiap laporan masyarakat memperoleh nomor tiket pelacakan.\nLaporan yang dikirim oleh warga tidak memperoleh nomor tiket pelacakan.\nSimpulan yang tepat adalah ...",
    options: [
      "Masyarakat tidak boleh mengirim pengaduan lagi",
      "Kementerian belum membuka kanal pengaduan daring",
      "Setiap pengaduan langsung diselesaikan tanpa nomor",
      "Warga salah menulis alamat email kementerian",
      "Kanal pengaduan daring menerima ribuan laporan",
    ],
    answer: "B",
    explanation:
      "Karena akibatnya tidak terpenuhi (~q), maka syarat di awal (kementerian membuka kanal pengaduan daring) juga tidak terpenuhi (~p).",
    tip: "Terapkan langsung rumus Modus Tollens: jika bukan q, maka bukan p.",
  },
  {
    id: "tiu-sil-056",
    subPattern: "modus-tollens",
    difficulty: "sedang",
    prompt:
      "Jika kurikulum vokasi diselaraskan dengan kebutuhan industri, maka lulusan politeknik mudah terserap kerja dan kesenjangan keterampilan berkurang.\nData tahun ini menunjukkan kesenjangan keterampilan tidak berkurang.\nSimpulan yang tepat adalah ...",
    options: [
      "Semua lulusan politeknik menjadi wirausaha mandiri",
      "Industri tidak membutuhkan tenaga kerja vokasi",
      "Kesenjangan keterampilan tidak dapat diukur",
      "Politeknik menutup seluruh program studinya",
      "Kurikulum vokasi belum diselaraskan dengan kebutuhan industri",
    ],
    answer: "E",
    explanation:
      "Akibat berupa konjungsi (q dan r). Gagalnya r (kesenjangan keterampilan tidak berkurang) menggagalkan keseluruhan akibat sehingga sebab p tidak terpenuhi.",
    tip: "Salah satu bagian pada akibat 'X dan Y' tidak terjadi sudah cukup menyimpulkan ~p.",
  },
  {
    id: "tiu-sil-057",
    subPattern: "modus-tollens",
    difficulty: "sulit",
    prompt:
      "Setiap kali suatu provinsi mengabaikan target vaksinasi dasar, cakupan imunisasi anak menurun.\nTahun ini cakupan imunisasi anak di Provinsi S tidak menurun.\nSimpulan yang sah adalah ...",
    options: [
      "Provinsi S tidak memiliki fasilitas puskesmas",
      "Provinsi S tidak mengabaikan target vaksinasi dasar",
      "Target vaksinasi dasar di Provinsi S dihapus",
      "Provinsi S mengabaikan target vaksinasi dasar",
      "Tidak dapat ditarik simpulan",
    ],
    answer: "B",
    explanation:
      "Bentuk: mengabaikan target -> cakupan menurun (p -> q). Fakta di Provinsi S adalah ~q (tidak menurun), sehingga disimpulkan ~p (tidak mengabaikan target).",
    tip: "Terjemahkan 'Setiap kali A, B' ke 'Jika A, maka B' lalu ingkari keduanya secara terbalik.",
  },
  {
    id: "tiu-sil-058",
    subPattern: "modus-tollens",
    difficulty: "sedang",
    prompt:
      "Jika kapal feri berlayar pada rute selatan, maka penumpang dapat menyeberang sebelum pukul 17.00.\nPenumpang pada hari Rabu tidak dapat menyeberang sebelum pukul 17.00.\nSimpulan yang tepat adalah ...",
    options: [
      "Pelabuhan rute selatan ditutup permanen",
      "Seluruh penumpang beralih ke pesawat terbang",
      "Kapal feri menambah rute pelayaran malam",
      "Kapal feri tidak berlayar pada rute selatan pada hari Rabu",
      "Penumpang terlambat tiba di terminal pelabuhan",
    ],
    answer: "D",
    explanation:
      "Karena konsekuen tidak terpenuhi pada hari Rabu (~q), maka anteseden (~p: kapal feri tidak berlayar pada rute selatan) berlaku pada hari Rabu.",
    tip: "Sesuaikan keterangan waktu ('pada hari Rabu') agar simpulan tetap akurat terhadap konteks.",
  },
  {
    id: "tiu-sil-059",
    subPattern: "modus-tollens",
    difficulty: "sulit",
    prompt:
      "Jika aplikasi mobile banking belum memperbarui sertifikat keamanan atau server autentikasi terganggu, maka transaksi QRIS ditolak.\nSiang ini transaksi QRIS pengguna berjalan lancar (tidak ditolak).\nSimpulan yang tepat adalah ...",
    options: [
      "Aplikasi mobile banking sudah memperbarui sertifikat keamanan dan server autentikasi tidak terganggu",
      "Hanya server autentikasi yang tidak terganggu sedangkan sertifikat keamanan belum diperbarui",
      "Pengguna bertransaksi menggunakan uang tunai",
      "Transaksi QRIS tetap berjalan walau server autentikasi terganggu",
      "Tidak ada pembaruan keamanan pada aplikasi tersebut",
    ],
    answer: "A",
    explanation:
      "Premis 1: (p atau r) -> q. Premis 2: ~q (tidak ditolak). Maka ~(p atau r), yaitu ~p dan ~r: sertifikat keamanan sudah diperbarui DAN server autentikasi tidak terganggu.",
    tip: "Ingkaran dari gabungan syarat 'A atau B' mengharuskan kedua syarat sama-sama diingkari.",
  },
  {
    id: "tiu-sil-060",
    subPattern: "modus-tollens",
    difficulty: "mudah",
    prompt:
      "Jika dana riset cair pada awal kuartal, maka pembelian alat laboratorium dilakukan bulan Januari.\nTernyata pembelian alat laboratorium tidak dilakukan bulan Januari.\nSimpulan yang tepat adalah ...",
    options: [
      "Alat laboratorium sudah tersedia sejak tahun lalu",
      "Dana riset sudah cair sejak Desember",
      "Dana riset tidak cair pada awal kuartal",
      "Peneliti membatalkan pembelian alat secara sepihak",
      "Laboratorium kampus direnovasi bulan Januari",
    ],
    answer: "C",
    explanation:
      "Konsekuen q (pembelian dilakukan bulan Januari) diingkari. Sesuai Modus Tollens, sebab p (dana riset cair pada awal kuartal) tidak terjadi.",
    tip: "Ingkari pernyataan di depan tanda koma setelah Anda memastikan pernyataan di belakang koma tidak terjadi.",
  },

  // =========================================================================
  // SILOGISME HIPOTESIS / RANTAI IMPLIKASI (061 - 090)
  // =========================================================================
  {
    id: "tiu-sil-061",
    subPattern: "silogisme-hipotesis",
    difficulty: "mudah",
    prompt:
      "Jika tata kelola data satu pintu diterapkan, maka duplikasi data antarinstansi berkurang.\nJika duplikasi data antarinstansi berkurang, maka anggaran server dapat dihemat.\nSimpulan yang tepat adalah ...",
    options: [
      "Jika anggaran server dapat dihemat, maka tata kelola data satu pintu diterapkan",
      "Jika duplikasi data bertambah, maka tata kelola data diterapkan",
      "Jika tata kelola data satu pintu diterapkan, maka anggaran server dapat dihemat",
      "Anggaran server tidak pernah dipengaruhi oleh tata kelola data",
      "Jika tata kelola data tidak diterapkan, maka anggaran server pasti naik",
    ],
    answer: "C",
    explanation:
      "Gunakan Silogisme Hipotesis: p -> q dan q -> r menghasilkan p -> r. Pernyataan penengah 'duplikasi data antarinstansi berkurang' dieliminasi.",
    tip: "Cari pernyataan penengah (q) yang sama di kedua premis lalu hubungkan langsung pangkal ke ujung (p -> r).",
  },
  {
    id: "tiu-sil-062",
    subPattern: "silogisme-hipotesis",
    difficulty: "mudah",
    prompt:
      "Jika jaringan transportasi kereta antarkota terintegrasi, maka waktu tempuh pekerja menjadi lebih singkat.\nJika waktu tempuh pekerja menjadi lebih singkat, maka produktivitas kerja meningkat.\nSimpulan yang sah adalah ...",
    options: [
      "Jika produktivitas kerja meningkat, maka kereta antarkota terintegrasi",
      "Semua pekerja wajib menggunakan kereta antarkota",
      "Jika produktivitas kerja menurun, maka waktu tempuh bertambah",
      "Produktivitas kerja meningkat meski tidak ada transportasi",
      "Jika jaringan transportasi kereta antarkota terintegrasi, maka produktivitas kerja meningkat",
    ],
    answer: "E",
    explanation:
      "Dari p -> q dan q -> r, simpulan sahnya adalah p -> r. Hati-hati terhadap konvers (r -> p) pada opsi A yang tidak sah.",
    tip: "Jangan membalik arah panah implikasi (r -> p) karena itu bukan simpulan yang sah.",
  },
  {
    id: "tiu-sil-063",
    subPattern: "silogisme-hipotesis",
    difficulty: "mudah",
    prompt:
      "Apabila literasi keuangan di sekolah diperkuat, maka generasi muda terbiasa menyusun anggaran pribadi.\nApabila generasi muda terbiasa menyusun anggaran pribadi, maka risiko jeratan pinjaman ilegal menurun.\nSimpulan yang tepat adalah ...",
    options: [
      "Apabila literasi keuangan di sekolah diperkuat, maka risiko jeratan pinjaman ilegal menurun",
      "Apabila risiko jeratan pinjaman ilegal menurun, maka literasi keuangan diperkuat",
      "Apabila literasi keuangan tidak diperkuat, maka pinjaman ilegal pasti meningkat",
      "Generasi muda sudah bebas dari pinjaman ilegal tanpa literasi keuangan",
      "Tidak ada kaitan antara sekolah dan anggaran pribadi",
    ],
    answer: "A",
    explanation:
      "Term tengah q ('generasi muda terbiasa menyusun anggaran pribadi') menghubungkan p -> q dan q -> r menjadi p -> r.",
    tip: "Eliminasi kalimat tengah yang muncul sebagai akibat di premis pertama dan sebab di premis kedua.",
  },
  {
    id: "tiu-sil-064",
    subPattern: "silogisme-hipotesis",
    difficulty: "sedang",
    prompt:
      "Jika kualitas udara perkotaan membaik, maka kasus infeksi saluran pernapasan menurun.\nJika penggunaan bus listrik diperluas, maka kualitas udara perkotaan membaik.\nSimpulan yang tepat adalah ...",
    options: [
      "Jika kasus infeksi pernapasan menurun, maka penggunaan bus listrik diperluas",
      "Jika penggunaan bus listrik tidak diperluas, maka kasus infeksi pasti meningkat",
      "Semua pengguna bus listrik tidak pernah sakit pernapasan",
      "Jika penggunaan bus listrik diperluas, maka kasus infeksi saluran pernapasan menurun",
      "Tidak dapat ditarik simpulan berantai",
    ],
    answer: "D",
    explanation:
      "Susun urutan logisnya: (2) bus listrik diperluas -> kualitas udara membaik, lalu (1) kualitas udara membaik -> infeksi menurun. Simpulannya: p -> r.",
    tip: "Premis tidak selalu ditulis urut; balik posisi premis kedua dan pertama dalam pikiran Anda jika term penengahnya bersilangan.",
  },
  {
    id: "tiu-sil-065",
    subPattern: "silogisme-hipotesis",
    difficulty: "sedang",
    prompt:
      "Jika inspeksi keselamatan kerja dilakukan rutin, maka angka kecelakaan proyek turun.\nJika angka kecelakaan proyek turun, maka premi asuransi konstruksi lebih ringan.\nJika premi asuransi konstruksi lebih ringan, maka efisiensi biaya proyek tercapai.\nSimpulan yang paling tepat adalah ...",
    options: [
      "Jika efisiensi biaya proyek tercapai, maka inspeksi dilakukan rutin",
      "Jika inspeksi keselamatan kerja dilakukan rutin, maka efisiensi biaya proyek tercapai",
      "Jika angka kecelakaan proyek naik, maka efisiensi biaya proyek tetap tercapai",
      "Efisiensi biaya proyek hanya ditentukan oleh harga bahan bangunan",
      "Jika inspeksi tidak dilakukan rutin, maka biaya proyek pasti membengkak",
    ],
    answer: "B",
    explanation:
      "Rantai tiga implikasi p -> q, q -> r, dan r -> s bersambung menjadi p -> s: jika inspeksi rutin, efisiensi biaya proyek tercapai.",
    tip: "Pada rantai 3 implikasi, sambungkan syarat paling awal langsung ke akibat paling akhir.",
  },
  {
    id: "tiu-sil-066",
    subPattern: "silogisme-hipotesis",
    difficulty: "sedang",
    prompt:
      "Jika ekosistem mangrove di pesisir dipulihkan, maka abrasi pantai dapat ditahan.\nJika ekosistem mangrove di pesisir tidak dipulihkan, maka desa nelayan tetap rawan rob. Namun diketahui jika abrasi pantai dapat ditahan, maka keanekaragaman hayati laut pulih.\nSimpulan yang tepat adalah ...",
    options: [
      "Jika ekosistem mangrove di pesisir dipulihkan, maka keanekaragaman hayati laut pulih",
      "Jika keanekaragaman hayati laut pulih, maka desa nelayan rawan rob",
      "Jika ekosistem mangrove tidak dipulihkan, maka keanekaragaman hayati laut pulih",
      "Abrasi pantai menyebabkan desa nelayan selalu makmur",
      "Tidak ada hubungan antara mangrove dan keanekaragaman hayati laut",
    ],
    answer: "A",
    explanation:
      "Fokus pada dua premis yang bersambung: p -> q ('mangrove dipulihkan -> abrasi ditahan') dan q -> r ('abrasi ditahan -> hayati laut pulih'). Simpulannya: p -> r.",
    tip: "Abaikan premis pengalih (~p -> s) dan sambungkan rantai sebab-akibat yang memiliki term penghubung sama.",
  },
  {
    id: "tiu-sil-067",
    subPattern: "silogisme-hipotesis",
    difficulty: "sulit",
    prompt:
      "Jika sistem irigasi pintar dipasang di lumbung pangan, maka pemakaian air sawah lebih hemat.\nJika pemakaian air sawah lebih hemat, maka ketahanan panen musim kemarau terjaga.\nTahun ini sistem irigasi pintar dipasang di lumbung pangan.\nSimpulan yang paling tepat adalah ...",
    options: [
      "Petani tidak lagi membutuhkan hujan sepanjang tahun",
      "Pemakaian air sawah menjadi boros pada musim hujan",
      "Lumbung pangan hanya menanam komoditas hortikultura",
      "Ketahanan panen musim kemarau di lumbung pangan terjaga",
      "Tidak dapat ditarik simpulan",
    ],
    answer: "D",
    explanation:
      "Dari p -> q dan q -> r diperoleh p -> r. Karena p (sistem irigasi pintar dipasang) terjadi tahun ini, melalui Modus Ponens disimpulkan r: ketahanan panen musim kemarau terjaga.",
    tip: "Gabungkan Silogisme Hipotesis dulu untuk mendapat p -> r, lalu terapkan fakta p di kalimat ketiga.",
  },
  {
    id: "tiu-sil-068",
    subPattern: "silogisme-hipotesis",
    difficulty: "sulit",
    prompt:
      "Jika audit teknologi informasi dijalankan berkala, maka celah keamanan aplikasi cepat ditemukan.\nJika celah keamanan aplikasi cepat ditemukan, maka peretasan layanan publik dapat dicegah.\nTernyata peretasan layanan publik tidak dapat dicegah.\nSimpulan yang sah adalah ...",
    options: [
      "Celah keamanan aplikasi sudah ditemukan lebih awal",
      "Audit teknologi informasi tidak dijalankan berkala",
      "Audit teknologi informasi dijalankan setiap pekan",
      "Aplikasi layanan publik terlalu mudah digunakan",
      "Tidak dapat ditarik simpulan tentang audit",
    ],
    answer: "B",
    explanation:
      "Rantai implikasi menghasilkan p -> r ('audit berkala -> peretasan dicegah'). Premis 3 memberi fakta ~r ('peretasan tidak dapat dicegah'). Menurut Modus Tollens, disimpulkan ~p.",
    tip: "Gabungkan kedua premis bersyarat menjadi satu rantai (p -> r) lalu gunakan Modus Tollens terhadap fakta terakhir (~r).",
  },
  {
    id: "tiu-sil-069",
    subPattern: "silogisme-hipotesis",
    difficulty: "sulit",
    prompt:
      "Jika prosedur perizinan usaha disederhanakan, maka minat investor domestik meningkat.\nJika pertumbuhan ekonomi daerah tidak menguat, maka minat investor domestik tidak meningkat.\nSimpulan yang tepat adalah ...",
    options: [
      "Jika pertumbuhan ekonomi daerah menguat, maka prosedur perizinan pasti disederhanakan",
      "Jika prosedur perizinan tidak disederhanakan, maka pertumbuhan ekonomi daerah tidak menguat",
      "Jika minat investor domestik meningkat, maka prosedur perizinan disederhanakan",
      "Pertumbuhan ekonomi daerah tidak berhubungan dengan minat investor",
      "Jika prosedur perizinan usaha disederhanakan, maka pertumbuhan ekonomi daerah menguat",
    ],
    answer: "E",
    explanation:
      "Premis 2 (~r -> ~q) memiliki kontraposisi q -> r ('Jika minat investor domestik meningkat, maka pertumbuhan ekonomi daerah menguat'). Digabungkan dengan Premis 1 (p -> q), diperoleh p -> r.",
    tip: "Jika arah implikasi tampak terbalik dengan tanda 'tidak', ubah premis kedua menjadi kontraposisinya (~r -> ~q setara q -> r).",
  },
  {
    id: "tiu-sil-070",
    subPattern: "silogisme-hipotesis",
    difficulty: "mudah",
    prompt:
      "Jika sekolah menyediakan laboratorium sains memadai, maka siswa lebih terampil melakukan eksperimen.\nJika siswa lebih terampil melakukan eksperimen, maka minat pada bidang rekayasa dan riset meningkat.\nSimpulan yang tepat adalah ...",
    options: [
      "Jika minat pada bidang rekayasa meningkat, maka laboratorium sekolah selalu lengkap",
      "Jika sekolah tidak menyediakan laboratorium, maka siswa tidak lulus ujian",
      "Jika sekolah menyediakan laboratorium sains memadai, maka minat siswa pada bidang rekayasa dan riset meningkat",
      "Eksperimen sains tidak memerlukan fasilitas laboratorium",
      "Semua siswa wajib memilih jurusan rekayasa",
    ],
    answer: "C",
    explanation:
      "Menghilangkan term penengah 'siswa lebih terampil melakukan eksperimen' menghasilkan implikasi langsung p -> r.",
    tip: "Sambungkan sebab pada premis pertama langsung dengan akibat pada premis kedua.",
  },
  {
    id: "tiu-sil-071",
    subPattern: "silogisme-hipotesis",
    difficulty: "sedang",
    prompt:
      "Jika kawasan ekonomi khusus dilengkapi akses tol pelabuhan, maka biaya logistik ekspor turun.\nJika daya saing ekspor tidak naik, maka biaya logistik ekspor tidak turun.\nSimpulan yang sah adalah ...",
    options: [
      "Jika biaya logistik ekspor turun, maka kawasan ekonomi khusus dibangun",
      "Jika kawasan ekonomi khusus tidak memiliki tol, maka daya saing ekspor naik",
      "Jika daya saing ekspor naik, maka kawasan ekonomi khusus dilengkapi tol pelabuhan",
      "Kawasan ekonomi khusus tidak memengaruhi biaya logistik",
      "Jika kawasan ekonomi khusus dilengkapi akses tol pelabuhan, maka daya saing ekspor naik",
    ],
    answer: "E",
    explanation:
      "Kontraposisi Premis 2 (~r -> ~q) adalah q -> r ('Jika biaya logistik ekspor turun, maka daya saing ekspor naik'). Digabung dengan Premis 1 (p -> q) menghasilkan p -> r.",
    tip: "Terapkan kontraposisi pada premis kedua agar term penengah 'biaya logistik ekspor turun' dapat disambungkan.",
  },
  {
    id: "tiu-sil-072",
    subPattern: "silogisme-hipotesis",
    difficulty: "sedang",
    prompt:
      "Jika dana abadi pendidikan dikelola profesional, maka jumlah penerima beasiswa bertambah.\nJika jumlah penerima beasiswa bertambah, maka akses kuliah keluarga prasejahtera meluas.\nSimpulan yang paling tepat adalah ...",
    options: [
      "Jika akses kuliah keluarga prasejahtera meluas, maka dana abadi dikelola profesional",
      "Jika dana abadi pendidikan dikelola profesional, maka akses kuliah keluarga prasejahtera meluas",
      "Jika dana abadi pendidikan dikurangi, maka akses kuliah tetap meluas",
      "Keluarga prasejahtera tidak membutuhkan beasiswa pendidikan",
      "Jumlah penerima beasiswa tidak dipengaruhi pengelolaan dana",
    ],
    answer: "B",
    explanation:
      "Silogisme Hipotesis menghubungkan p -> q dan q -> r menjadi p -> r tanpa membalik arah implikasi.",
    tip: "Pastikan urutan sebab ke akibat tetap berjalan searah dari premis pertama ke premis kedua.",
  },
  {
    id: "tiu-sil-073",
    subPattern: "silogisme-hipotesis",
    difficulty: "sulit",
    prompt:
      "Jika regulasi karbon diterapkan konsisten, maka industri mempercepat transisi ke energi surya.\nJika industri mempercepat transisi ke energi surya, maka ketergantungan pada batu bara menyusut.\nJika ketergantungan pada batu bara menyusut, maka kualitas lingkungan permukiman membaik.\nDiketahui kualitas lingkungan permukiman di wilayah Z tidak membaik.\nSimpulan yang tepat adalah ...",
    options: [
      "Industri di wilayah Z sepenuhnya memakai energi surya",
      "Regulasi karbon tidak memiliki kaitan dengan batu bara",
      "Ketergantungan pada batu bara di wilayah Z sudah habis",
      "Regulasi karbon di wilayah Z tidak diterapkan konsisten",
      "Tidak dapat ditarik simpulan mengenai regulasi karbon",
    ],
    answer: "D",
    explanation:
      "Rantai tiga premis memberi p -> s ('regulasi konsisten -> kualitas lingkungan membaik'). Karena ~s terjadi di wilayah Z, Modus Tollens memastikan ~p.",
    tip: "Rangkai semua premis bersyarat menjadi 'Jika awal, maka akhir', lalu terapkan Modus Tollens terhadap negasi akhir.",
  },
  {
    id: "tiu-sil-074",
    subPattern: "silogisme-hipotesis",
    difficulty: "sedang",
    prompt:
      "Apabila sistem rekrutmen ASN berbasis kompetensi murni, maka aparatur yang terpilih lebih adaptif.\nApabila aparatur yang terpilih lebih adaptif, maka pelayanan publik menjadi responsif.\nSimpulan yang tepat adalah ...",
    options: [
      "Apabila sistem rekrutmen ASN berbasis kompetensi murni, maka pelayanan publik menjadi responsif",
      "Apabila pelayanan publik menjadi responsif, maka rekrutmen ASN berbasis kompetensi",
      "Apabila sistem rekrutmen ASN tidak berbasis kompetensi, maka layanan publik tetap responsif",
      "Semua aparatur yang ada saat ini kurang adaptif",
      "Pelayanan publik hanya bergantung pada jumlah pegawai",
    ],
    answer: "A",
    explanation:
      "Menghubungkan p -> q dan q -> r secara langsung menghasilkan p -> r.",
    tip: "Cari kalimat identik yang menjembatani akhir kalimat pertama dengan awal kalimat kedua.",
  },
  {
    id: "tiu-sil-075",
    subPattern: "silogisme-hipotesis",
    difficulty: "mudah",
    prompt:
      "Jika petani menggunakan benih unggul tahan kekeringan, maka risiko gagal panen menurun.\nJika risiko gagal panen menurun, maka pendapatan rumah tangga tani lebih stabil.\nSimpulan yang sah adalah ...",
    options: [
      "Jika pendapatan rumah tangga tani stabil, maka petani pasti memakai benih unggul",
      "Petani tidak lagi menghadapi perubahan iklim",
      "Jika petani menggunakan benih unggul tahan kekeringan, maka pendapatan rumah tangga tani lebih stabil",
      "Benih unggul hanya dapat ditanam di lahan basah",
      "Jika benih unggul tidak dipakai, maka petani berhenti bertani",
    ],
    answer: "C",
    explanation:
      "Pola p -> q, q -> r menghasilkan p -> r. Opsi A salah karena membalik implikasi (r -> p).",
    tip: "Eliminasi opsi yang menukar sebab menjadi akibat dan sebaliknya.",
  },
  {
    id: "tiu-sil-076",
    subPattern: "silogisme-hipotesis",
    difficulty: "sulit",
    prompt:
      "Jika setiap desa memetakan potensi wisata lokal, maka ekonomi kreatif warga tumbuh.\nJika ekonomi kreatif warga tumbuh, maka arus urbanisasi usia produktif berkurang.\nDi Desa Harmoni, setiap rumah tangga memetakan potensi wisata lokal.\nSimpulan yang paling tepat adalah ...",
    options: [
      "Semua warga usia produktif di Desa Harmoni pindah ke kota besar",
      "Ekonomi kreatif di Desa Harmoni menurun drastis",
      "Wisata lokal hanya diminati penduduk luar negeri",
      "Arus urbanisasi usia produktif di Desa Harmoni berkurang",
      "Tidak ada perubahan pada ekonomi kreatif Desa Harmoni",
    ],
    answer: "D",
    explanation:
      "Dari silogisme p -> q dan q -> r didapat p -> r. Fakta bahwa Desa Harmoni memenuhi p menghasilkan akibat akhir r.",
    tip: "Setelah menyederhanakan rantai implikasi, cek premis ketiga untuk menentukan apakah akibat akhirnya terjadi.",
  },
  {
    id: "tiu-sil-077",
    subPattern: "silogisme-hipotesis",
    difficulty: "sedang",
    prompt:
      "Jika jaringan telekomunikasi menjangkau daerah tertinggal, maka layanan telemedisin dapat diakses puskesmas.\nJika layanan telemedisin dapat diakses puskesmas, maka rujukan dokter spesialis berjalan lebih cepat.\nSimpulan yang tepat adalah ...",
    options: [
      "Puskesmas di daerah tertinggal tidak lagi membutuhkan dokter umum",
      "Jika rujukan dokter spesialis cepat, maka jaringan telekomunikasi pasti merata",
      "Jika jaringan telekomunikasi menjangkau daerah tertinggal, maka rujukan dokter spesialis berjalan lebih cepat",
      "Layanan telemedisin menggantikan seluruh rumah sakit daerah",
      "Jika jaringan tidak menjangkau daerah tertinggal, maka tidak ada puskesmas",
    ],
    answer: "C",
    explanation:
      "Rantai logika p -> q dan q -> r menghasilkan p -> r secara langsung.",
    tip: "Coret syarat penengah 'layanan telemedisin dapat diakses puskesmas' dari kedua premis.",
  },
  {
    id: "tiu-sil-078",
    subPattern: "silogisme-hipotesis",
    difficulty: "sulit",
    prompt:
      "Jika anggaran pemeliharaan jalan daerah dicairkan tepat waktu, maka perbaikan jalan berlubang rampung sebelum arus mudik.\nJika arus logistik barang tidak lancar, maka perbaikan jalan berlubang tidak rampung sebelum arus mudik.\nSimpulan yang tepat adalah ...",
    options: [
      "Jika anggaran pemeliharaan jalan daerah dicairkan tepat waktu, maka arus logistik barang lancar",
      "Jika arus logistik barang lancar, maka anggaran pasti cair tepat waktu",
      "Jika perbaikan jalan tidak rampung, maka anggaran cair lebih awal",
      "Jika anggaran tidak cair tepat waktu, maka arus logistik barang tetap lancar",
      "Arus logistik barang tidak dipengaruhi kondisi jalan",
    ],
    answer: "A",
    explanation:
      "Premis 2 berbentuk ~r -> ~q, yang ekuivalen dengan kontraposisinya q -> r ('Jika perbaikan jalan berlubang rampung sebelum arus mudik, maka arus logistik barang lancar'). Sambungkan dengan p -> q menjadi p -> r.",
    tip: "Ubah premis kedua yang memakai bentuk 'tidak r -> tidak q' menjadi 'q -> r' agar rantai tersambung.",
  },
  {
    id: "tiu-sil-079",
    subPattern: "silogisme-hipotesis",
    difficulty: "sedang",
    prompt:
      "Jika pengawasan barang beredar diperketat, maka peredaran produk ilegal berkurang.\nJika peredaran produk ilegal berkurang, maka pelaku usaha patuh hukum terlindungi.\nSimpulan yang tepat adalah ...",
    options: [
      "Jika pelaku usaha patuh hukum terlindungi, maka barang beredar diawasi ketat",
      "Jika pengawasan barang beredar diperketat, maka pelaku usaha patuh hukum terlindungi",
      "Pelaku usaha patuh hukum tidak memerlukan perlindungan pasar",
      "Jika produk ilegal berkurang, maka tidak ada pengawasan lagi",
      "Tidak dapat ditarik simpulan",
    ],
    answer: "B",
    explanation:
      "Dengan Silogisme Hipotesis, p -> q dan q -> r menghasilkan simpulan p -> r.",
    tip: "Gunakan pola silogisme rantai lurus tanpa membalik premis.",
  },
  {
    id: "tiu-sil-080",
    subPattern: "silogisme-hipotesis",
    difficulty: "mudah",
    prompt:
      "Jika bank sentral menjaga transparansi kebijakan suku bunga, maka kepastian investasi pasar keuangan meningkat.\nJika kepastian investasi pasar keuangan meningkat, maka arus modal jangka panjang lebih stabil.\nSimpulan yang sah adalah ...",
    options: [
      "Arus modal jangka panjang menyebabkan suku bunga naik tinggi",
      "Bank sentral tidak perlu menjaga transparansi kebijakan",
      "Jika arus modal jangka panjang stabil, maka kebijakan suku bunga transparan",
      "Jika transparansi kebijakan tidak dijaga, maka investasi selalu merugi",
      "Jika bank sentral menjaga transparansi kebijakan suku bunga, maka arus modal jangka panjang lebih stabil",
    ],
    answer: "E",
    explanation:
      "Menghilangkan term penengah q menghasilkan implikasi p -> r: transparansi kebijakan suku bunga -> arus modal jangka panjang lebih stabil.",
    tip: "Hubungkan kondisi awal premis 1 dengan hasil akhir premis 2.",
  },
  {
    id: "tiu-sil-081",
    subPattern: "silogisme-hipotesis",
    difficulty: "sulit",
    prompt:
      "Jika instansi menerapkan tanda tangan elektronik tersertifikasi, maka pengesahan surat dinas tidak bergantung pada kehadiran fisik.\nJika pengesahan surat dinas tidak bergantung pada kehadiran fisik, maka koordinasi lintas daerah berlangsung cepat.\nTernyata koordinasi lintas daerah tidak berlangsung cepat.\nSimpulan yang paling tepat adalah ...",
    options: [
      "Instansi belum menerapkan tanda tangan elektronik tersertifikasi",
      "Tanda tangan elektronik memperlambat pengesahan surat dinas",
      "Surat dinas instansi selalu disahkan di luar kota",
      "Koordinasi lintas daerah hanya memakai surat pos",
      "Instansi sudah menerapkan tanda tangan elektronik tersertifikasi",
    ],
    answer: "A",
    explanation:
      "Rantai implikasi memberi p -> r ('menerapkan TTE -> koordinasi cepat'). Fakta ketiga adalah ~r ('koordinasi tidak berlangsung cepat'). Menurut Modus Tollens, disimpulkan ~p.",
    tip: "Susun dahulu p -> r dari dua premis bersyarat, lalu cek fakta ketiga dengan Modus Tollens.",
  },
  {
    id: "tiu-sil-082",
    subPattern: "silogisme-hipotesis",
    difficulty: "sedang",
    prompt:
      "Jika daerah mengembangkan pembangkit listrik panas bumi, maka pasokan energi bersih meningkat.\nJika daerah memaksimalkan energi lokal, maka kemandirian energi tercapai.\nDiketahui pula jika pasokan energi bersih meningkat, maka ketergantungan impor energi berkurang.\nSimpulan yang sah adalah ...",
    options: [
      "Jika kemandirian energi tercapai, maka panas bumi selalu dipakai",
      "Jika pasokan energi bersih meningkat, maka energi lokal maksimal",
      "Ketergantungan impor energi meningkat bila panas bumi dikembangkan",
      "Jika daerah mengembangkan pembangkit listrik panas bumi, maka ketergantungan impor energi berkurang",
      "Jika energi bersih tidak meningkat, maka impor energi berhenti",
    ],
    answer: "D",
    explanation:
      "Premis 1 (p -> q) bersambung dengan Premis 3 (q -> r) menghasilkan p -> r. Premis 2 hanya informasi tambahan yang tidak terhubung dalam rantai.",
    tip: "Temukan dua premis yang benar-benar memiliki kalimat penghubung yang identik.",
  },
  {
    id: "tiu-sil-083",
    subPattern: "silogisme-hipotesis",
    difficulty: "sedang",
    prompt:
      "Apabila program makan bergizi sekolah dikelola dengan standar higiene ketat, maka risiko keracunan pangan dapat dicegah.\nApabila risiko keracunan pangan dapat dicegah, maka kepercayaan orang tua terhadap kantin sekolah meningkat.\nSimpulan yang tepat adalah ...",
    options: [
      "Apabila kepercayaan orang tua meningkat, maka standar higiene pasti ketat",
      "Apabila program makan bergizi sekolah dikelola dengan standar higiene ketat, maka kepercayaan orang tua terhadap kantin sekolah meningkat",
      "Standar higiene tidak memengaruhi risiko keracunan pangan",
      "Kantin sekolah tidak perlu diawasi jika orang tua sudah percaya",
      "Semua sekolah wajib menutup kantin pribadinya",
    ],
    answer: "B",
    explanation:
      "Berdasarkan Silogisme Hipotesis, p -> q dan q -> r menyimpulkan p -> r.",
    tip: "Ikuti alur satu arah dari premis pertama menuju ujung premis kedua.",
  },
  {
    id: "tiu-sil-084",
    subPattern: "silogisme-hipotesis",
    difficulty: "sulit",
    prompt:
      "Jika pelatihan guru berbasis teknologi adaptif berjalan efektif, maka metode belajar di kelas menjadi lebih interaktif.\nJika partisipasi siswa tidak meningkat, maka metode belajar di kelas tidak menjadi lebih interaktif.\nSimpulan yang paling tepat adalah ...",
    options: [
      "Jika partisipasi siswa meningkat, maka pelatihan guru efektif",
      "Jika pelatihan guru tidak efektif, maka partisipasi siswa tidak meningkat",
      "Partisipasi siswa tidak berkaitan dengan metode belajar di kelas",
      "Semua guru sudah menguasai teknologi adaptif",
      "Jika pelatihan guru berbasis teknologi adaptif berjalan efektif, maka partisipasi siswa meningkat",
    ],
    answer: "E",
    explanation:
      "Premis 1: p -> q. Premis 2: ~r -> ~q, yang kontraposisinya adalah q -> r ('Jika metode belajar di kelas menjadi lebih interaktif, maka partisipasi siswa meningkat'). Dari p -> q dan q -> r disimpulkan p -> r.",
    tip: "Ubah premis berbentuk 'Jika tidak C, maka tidak B' menjadi 'Jika B, maka C' sebelum menyambungkan rantai.",
  },
  {
    id: "tiu-sil-085",
    subPattern: "silogisme-hipotesis",
    difficulty: "mudah",
    prompt:
      "Jika taman kota dilengkapi jalur pesepeda dan pejalan kaki yang aman, maka warga lebih gemar beraktivitas di luar ruang.\nJika warga lebih gemar beraktivitas di luar ruang, maka kebugaran masyarakat perkotaan meningkat.\nSimpulan yang tepat adalah ...",
    options: [
      "Jika kebugaran masyarakat meningkat, maka taman kota selalu ramai",
      "Warga perkotaan tidak membutuhkan jalur olahraga aman",
      "Jika taman kota dilengkapi jalur pesepeda dan pejalan kaki yang aman, maka kebugaran masyarakat perkotaan meningkat",
      "Semua taman kota hanya boleh dimasuki pesepeda",
      "Jika taman kota tidak ada, maka masyarakat tidak pernah keluar rumah",
    ],
    answer: "C",
    explanation:
      "Term tengah 'warga lebih gemar beraktivitas di luar ruang' menyambungkan p -> q dan q -> r menjadi p -> r.",
    tip: "Gunakan pola eliminasi akibat premis 1 yang sama dengan sebab premis 2.",
  },
  {
    id: "tiu-sil-086",
    subPattern: "silogisme-hipotesis",
    difficulty: "sedang",
    prompt:
      "Jika proses verifikasi sertifikat tanah terintegrasi secara elektronik, maka sengketa batas lahan dapat diminimalkan.\nJika sengketa batas lahan dapat diminimalkan, maka kepastian hukum kepemilikan tanah menguat.\nSimpulan yang sah adalah ...",
    options: [
      "Jika kepastian hukum menguat, maka sertifikat tanah selalu elektronik",
      "Jika proses verifikasi sertifikat tanah terintegrasi secara elektronik, maka kepastian hukum kepemilikan tanah menguat",
      "Sengketa batas lahan tetap sering terjadi meski sudah elektronik",
      "Kepastian hukum tanah tidak membutuhkan sertifikat",
      "Jika verifikasi tidak elektronik, maka tidak ada pemilik tanah sah",
    ],
    answer: "B",
    explanation:
      "Silogisme Hipotesis menyimpulkan hubungan langsung sebab awal ke akibat akhir: p -> r.",
    tip: "Pastikan kamu memilih pernyataan 'Jika A maka C', bukan kebalikannya 'Jika C maka A'.",
  },
  {
    id: "tiu-sil-087",
    subPattern: "silogisme-hipotesis",
    difficulty: "sulit",
    prompt:
      "Jika kapasitas tanggul sungai ditingkatkan, maka luapan air saat pasang tinggi dapat ditahan.\nJika luapan air saat pasang tinggi dapat ditahan, maka kawasan permukiman pesisir terhindar dari banjir rob.\nJika kawasan permukiman pesisir terhindar dari banjir rob, maka aktivitas ekonomi warga pesisir berjalan normal.\nDiketahui kapasitas tanggul sungai di kota M telah ditingkatkan.\nSimpulan yang paling tepat adalah ...",
    options: [
      "Kawasan permukiman pesisir tidak pernah mengalami air pasang",
      "Warga pesisir meninggalkan aktivitas ekonomi laut",
      "Tanggul sungai di kota M mengalami kerusakan berat",
      "Tidak dapat ditarik simpulan mengenai aktivitas ekonomi",
      "Aktivitas ekonomi warga pesisir di kota M berjalan normal",
    ],
    answer: "E",
    explanation:
      "Rantai 3 implikasi menghasilkan p -> s ('kapasitas tanggul ditingkatkan -> aktivitas ekonomi berjalan normal'). Karena p terpenuhi di kota M, akibat s pasti terjadi.",
    tip: "Rangkai semua implikasi terlebih dahulu, lalu uji apakah fakta terakhir mengiyakan titik awal rantai.",
  },
  {
    id: "tiu-sil-088",
    subPattern: "silogisme-hipotesis",
    difficulty: "sedang",
    prompt:
      "Jika indeks literasi sains siswa membaik, maka kemampuan berpikir kritis di sekolah meningkat.\nJika kemampuan berpikir kritis di sekolah meningkat, maka siswa tidak mudah terpengaruh informasi palsu.\nSimpulan yang tepat adalah ...",
    options: [
      "Jika siswa tidak mudah terpengaruh informasi palsu, maka literasi sainsnya baik",
      "Informasi palsu hanya menyebar di lingkungan sekolah",
      "Jika indeks literasi sains siswa membaik, maka siswa tidak mudah terpengaruh informasi palsu",
      "Siswa tidak perlu mempelajari sains untuk berpikir kritis",
      "Jika literasi sains turun, maka semua siswa percaya informasi palsu",
    ],
    answer: "C",
    explanation:
      "Pola berantai p -> q dan q -> r menghasilkan simpulan p -> r secara sah.",
    tip: "Pertahankan struktur negatif pada akibat terakhir ('tidak mudah terpengaruh...') apa adanya.",
  },
  {
    id: "tiu-sil-089",
    subPattern: "silogisme-hipotesis",
    difficulty: "sulit",
    prompt:
      "Jika pelaku industri mengolah limbah cair sebelum dibuang, maka baku mutu air sungai tetap terjaga.\nJika ekosistem perairan sungai terganggu, maka baku mutu air sungai tidak terjaga.\nSimpulan yang tepat adalah ...",
    options: [
      "Jika ekosistem perairan sungai tidak terganggu, maka industri pasti mengolah limbah",
      "Jika pelaku industri tidak mengolah limbah cair, maka ekosistem perairan sungai terganggu",
      "Ekosistem perairan sungai tidak pernah dipengaruhi limbah industri",
      "Jika pelaku industri mengolah limbah cair sebelum dibuang, maka ekosistem perairan sungai tidak terganggu",
      "Jika baku mutu air terjaga, maka industri tidak membuang limbah sama sekali",
    ],
    answer: "D",
    explanation:
      "Premis 2 (~r -> ~q) setara dengan kontraposisinya q -> r ('Jika baku mutu air sungai terjaga, maka ekosistem perairan sungai tidak terganggu'). Digabung dengan p -> q menjadi p -> r.",
    tip: "Perhatikan negasi ganda saat membuat kontraposisi premis kedua.",
  },
  {
    id: "tiu-sil-090",
    subPattern: "silogisme-hipotesis",
    difficulty: "mudah",
    prompt:
      "Jika mekanisme pengaduan konsumen dipermudah, maka pelaku usaha lebih disiplin menjaga mutu produk.\nJika pelaku usaha lebih disiplin menjaga mutu produk, maka kepuasan belanja masyarakat meningkat.\nSimpulan yang tepat adalah ...",
    options: [
      "Jika mekanisme pengaduan konsumen dipermudah, maka kepuasan belanja masyarakat meningkat",
      "Jika kepuasan belanja masyarakat meningkat, maka mekanisme pengaduan pasti mudah",
      "Mutu produk tidak berkaitan dengan kepuasan belanja masyarakat",
      "Pelaku usaha tidak pernah menerima pengaduan konsumen",
      "Tidak dapat ditarik simpulan",
    ],
    answer: "A",
    explanation:
      "Dengan Silogisme Hipotesis, menghilangkan syarat perantara 'pelaku usaha lebih disiplin menjaga mutu produk' menghasilkan p -> r.",
    tip: "Pastikan sebab di depan tetap menjadi sebab pada kesimpulan.",
  },

  // =========================================================================
  // SILOGISME KATEGORIS (BAGIAN 1: KUANTOR UNIVERSAL, 091 - 100)
  // =========================================================================
  {
    id: "tiu-sil-091",
    subPattern: "silogisme-kategoris",
    difficulty: "mudah",
    prompt:
      "Semua arsiparis kementerian adalah aparatur sipil negara.\nSemua aparatur sipil negara wajib menjunjung tinggi netralitas politik.\nSimpulan yang tepat adalah ...",
    options: [
      "Sebagian arsiparis kementerian tidak wajib menjunjung netralitas politik",
      "Semua yang menjunjung netralitas politik adalah arsiparis kementerian",
      "Semua arsiparis kementerian wajib menjunjung tinggi netralitas politik",
      "Tidak ada aparatur sipil negara yang bekerja sebagai arsiparis",
      "Hanya arsiparis senior yang wajib bersikap netral",
    ],
    answer: "C",
    explanation:
      "Pola Semua A adalah B, dan Semua B adalah C menyimpulkan Semua A adalah C. Himpunan arsiparis berada di dalam himpunan ASN.",
    tip: "Untuk premis Semua A -> B dan Semua B -> C, tarik simpulan Semua A -> C (jangan dibalik menjadi Semua C -> A).",
  },
  {
    id: "tiu-sil-092",
    subPattern: "silogisme-kategoris",
    difficulty: "mudah",
    prompt:
      "Semua satelit observasi bumi mengirimkan data cuaca harian.\nSemua data cuaca harian diolah oleh badan meteorologi nasional.\nSimpulan yang sah adalah ...",
    options: [
      "Semua satelit observasi bumi mengirimkan data yang diolah oleh badan meteorologi nasional",
      "Semua yang diolah badan meteorologi berasal dari satelit observasi bumi",
      "Sebagian satelit observasi bumi tidak mengirimkan data cuaca harian",
      "Badan meteorologi nasional tidak mengolah data dari satelit",
      "Tidak dapat ditarik simpulan",
    ],
    answer: "A",
    explanation:
      "Dua premis berkuantor universal 'Semua' bersambung melalui term tengah 'data cuaca harian' menghasilkan simpulan universal tentang seluruh satelit observasi bumi.",
    tip: "Jika kedua premis menggunakan kuantor 'Semua' yang terhubung, kesimpulannya juga berkuantor 'Semua'.",
  },
  {
    id: "tiu-sil-093",
    subPattern: "silogisme-kategoris",
    difficulty: "sedang",
    prompt:
      "Semua dokumen pengadaan yang dicairkan dananya telah lolos audit kepatuhan.\nTidak ada dokumen yang lolos audit kepatuhan yang mengandung tanda tangan palsu.\nSimpulan yang paling tepat adalah ...",
    options: [
      "Semua dokumen yang belum dicairkan mengandung tanda tangan palsu",
      "Sebagian dokumen pengadaan yang dicairkan memiliki tanda tangan palsu",
      "Semua dokumen yang lolos audit kepatuhan pasti langsung dicairkan",
      "Tidak ada dokumen pengadaan yang dicairkan dananya yang mengandung tanda tangan palsu",
      "Audit kepatuhan tidak memeriksa keaslian tanda tangan",
    ],
    answer: "D",
    explanation:
      "Semua A (dokumen dicairkan) adalah B (lolos audit kepatuhan), dan Tidak ada B yang C (tanda tangan palsu). Maka Tidak ada A yang C.",
    tip: "Gambar diagram himpunan: A berada di dalam B, sedangkan B terpisah sepenuhnya dari C.",
  },
  {
    id: "tiu-sil-094",
    subPattern: "silogisme-kategoris",
    difficulty: "sedang",
    prompt:
      "Semua calon penerima beasiswa pascasarjana wajib memiliki surat rekomendasi akademik.\nTidak ada mahasiswa tahun pertama yang memiliki surat rekomendasi akademik.\nSimpulan yang tepat adalah ...",
    options: [
      "Sebagian mahasiswa tahun pertama dapat menjadi calon penerima beasiswa pascasarjana",
      "Tidak ada mahasiswa tahun pertama yang menjadi calon penerima beasiswa pascasarjana",
      "Semua pemilik surat rekomendasi adalah mahasiswa tingkat akhir",
      "Semua mahasiswa tahun pertama sudah lulus sarjana",
      "Sebagian calon penerima beasiswa pascasarjana adalah mahasiswa tahun pertama",
    ],
    answer: "B",
    explanation:
      "Semua calon (A) memiliki rekomendasi (B). Tidak satu pun mahasiswa tahun pertama (C) memiliki rekomendasi (B). Jadi A dan C pasti tidak beririsan sama sekali.",
    tip: "Jika semua A punya syarat X, sedangkan tidak ada C yang punya syarat X, maka tidak ada C yang merupakan A.",
  },
  {
    id: "tiu-sil-095",
    subPattern: "silogisme-kategoris",
    difficulty: "sedang",
    prompt:
      "Setiap pesawat komersial rute domestik wajib menjalani pemeriksaan laik terbang sebelum lepas landas.\nSemua pesawat penumpang yang beroperasi di bandara X adalah pesawat komersial rute domestik.\nSimpulan yang tepat adalah ...",
    options: [
      "Semua pesawat di dunia beroperasi di bandara X",
      "Sebagian pesawat penumpang di bandara X tidak diperiksa sebelum lepas landas",
      "Pemeriksaan laik terbang hanya berlaku bagi pesawat kargo",
      "Semua pesawat komersial rute domestik beroperasi di bandara X",
      "Semua pesawat penumpang yang beroperasi di bandara X wajib menjalani pemeriksaan laik terbang sebelum lepas landas",
    ],
    answer: "E",
    explanation:
      "Himpunan pesawat penumpang bandara X termasuk dalam pesawat komersial rute domestik, yang seluruhnya wajib diperiksa laik terbang.",
    tip: "Susun himpunan dari yang paling khusus (bandara X) ke yang paling umum (pemeriksaan laik terbang).",
  },
  {
    id: "tiu-sil-096",
    subPattern: "silogisme-kategoris",
    difficulty: "sulit",
    prompt:
      "Semua pejabat perbendaharaan harus mengikuti sertifikasi bendahara negara.\nTidak ada peserta pelatihan di ruang Anggrek yang bukan pejabat perbendaharaan.\nSimpulan yang tepat adalah ...",
    options: [
      "Sebagian peserta di ruang Anggrek tidak wajib mengikuti sertifikasi",
      "Semua peserta sertifikasi bendahara negara berada di ruang Anggrek",
      "Tidak ada peserta pelatihan di ruang Anggrek yang mengikuti sertifikasi",
      "Semua pejabat perbendaharaan berkumpul di ruang Anggrek",
      "Semua peserta pelatihan di ruang Anggrek harus mengikuti sertifikasi bendahara negara",
    ],
    answer: "E",
    explanation:
      "'Tidak ada A yang bukan B' ekuivalen dengan 'Semua A adalah B'. Jadi semua peserta di ruang Anggrek adalah pejabat perbendaharaan, dan seluruhnya harus mengikuti sertifikasi.",
    tip: "Ubah kalimat ganda negatif 'Tidak ada X yang bukan Y' menjadi 'Semua X adalah Y'.",
  },
  {
    id: "tiu-sil-097",
    subPattern: "silogisme-kategoris",
    difficulty: "mudah",
    prompt:
      "Semua peneliti di lembaga riset tersebut bergelar doktor.\nSemua individu bergelar doktor pernah menyusun disertasi ilmiah.\nSimpulan yang sah adalah ...",
    options: [
      "Semua yang pernah menyusun disertasi ilmiah adalah peneliti lembaga riset",
      "Sebagian peneliti di lembaga riset tersebut belum menyusun disertasi",
      "Semua peneliti di lembaga riset tersebut pernah menyusun disertasi ilmiah",
      "Tidak ada peneliti di lembaga riset tersebut yang bergelar doktor",
      "Hanya peneliti senior yang pernah menyusun disertasi ilmiah",
    ],
    answer: "C",
    explanation:
      "Pola Semua A adalah B dan Semua B adalah C menghasilkan Semua A adalah C secara langsung.",
    tip: "Gunakan rantai himpunan Semua A -> B -> C menjadi Semua A -> C.",
  },
  {
    id: "tiu-sil-098",
    subPattern: "silogisme-kategoris",
    difficulty: "sedang",
    prompt:
      "Semua laboratorium uji pangan terakreditasi menerapkan standar kalibrasi tahunan.\nTidak ada standar kalibrasi tahunan yang boleh dilakukan tanpa alat ukur bersertifikat.\nSimpulan yang tepat adalah ...",
    options: [
      "Semua laboratorium uji pangan terakreditasi harus menggunakan alat ukur bersertifikat dalam kalibrasi tahunannya",
      "Alat ukur bersertifikat hanya dimiliki laboratorium di luar negeri",
      "Sebagian laboratorium uji pangan terakreditasi mengabaikan alat ukur bersertifikat",
      "Semua pemilik alat ukur bersertifikat adalah laboratorium uji pangan",
      "Tidak dapat ditarik simpulan",
    ],
    answer: "A",
    explanation:
      "'Tidak ada B tanpa C' bermakna 'Semua B memerlukan C'. Karena semua laboratorium terakreditasi (A) menerapkan B, maka semuanya memerlukan alat ukur bersertifikat (C).",
    tip: "Terjemahkan 'Tidak ada X tanpa Y' menjadi syarat wajib: 'Semua X memerlukan Y'.",
  },
  {
    id: "tiu-sil-099",
    subPattern: "silogisme-kategoris",
    difficulty: "sulit",
    prompt:
      "Semua peserta rapat pimpinan membawa laporan capaian kerja.\nSemua laporan capaian kerja mencantumkan indikator kinerja utama.\nPak Hendra bukan pembawa laporan yang mencantumkan indikator kinerja utama.\nSimpulan yang tepat adalah ...",
    options: [
      "Pak Hendra adalah peserta rapat pimpinan yang lupa mencetak laporan",
      "Semua peserta rapat pimpinan mengenal Pak Hendra",
      "Indikator kinerja utama tidak penting bagi peserta rapat",
      "Pak Hendra bukan peserta rapat pimpinan",
      "Sebagian peserta rapat pimpinan tidak membawa indikator kinerja utama",
    ],
    answer: "D",
    explanation:
      "Dari dua premis pertama, semua peserta rapat pimpinan membawa laporan yang mencantumkan indikator kinerja utama. Karena Pak Hendra tidak memenuhi sifat itu, ia pasti bukan peserta rapat pimpinan.",
    tip: "Gabungkan dahulu kedua premis 'Semua', lalu uji individu pada premis ketiga dengan kontraposisi.",
  },
  {
    id: "tiu-sil-100",
    subPattern: "silogisme-kategoris",
    difficulty: "mudah",
    prompt:
      "Semua produk pangan olahan kemasan yang beredar resmi memiliki kode registrasi izin edar.\nSemua biskuit produksi pabrik Prima adalah produk pangan olahan kemasan yang beredar resmi.\nSimpulan yang paling tepat adalah ...",
    options: [
      "Semua produk yang memiliki kode registrasi izin edar adalah biskuit pabrik Prima",
      "Semua biskuit produksi pabrik Prima memiliki kode registrasi izin edar",
      "Sebagian biskuit produksi pabrik Prima beredar tanpa izin edar",
      "Tidak ada produk olahan kemasan di pasaran yang dibuat pabrik Prima",
      "Pabrik Prima hanya memproduksi minuman ringan",
    ],
    answer: "B",
    explanation:
      "Himpunan biskuit pabrik Prima merupakan bagian dari produk pangan olahan kemasan resmi, sehingga semuanya mewarisi sifat memiliki kode registrasi izin edar.",
    tip: "Pastikan subjek simpulan adalah himpunan yang lebih sempit ('biskuit pabrik Prima'), bukan sebaliknya.",
  },
];
