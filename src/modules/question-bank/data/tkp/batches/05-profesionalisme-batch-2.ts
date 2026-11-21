import type { TkpQuestionDraft } from "@/modules/question-bank/domain/question";

export const profesionalismeBatch2Drafts: readonly TkpQuestionDraft[] = [
  {
    id: "tkp-pro-041",
    subPattern: "skala-prioritas-dan-manajemen-tenggat",
    difficulty: "mudah",
    prompt:
      "Setelah tiga hari melaksanakan dinas luar daerah, Anda membuka aplikasi persuratan elektronik dan menemukan tiga disposisi menumpuk: permohonan verifikasi pencairan bantuan warga yang batas waktunya berakhir hari ini pukul 16.00, undangan seremonial instansi mitra pekan depan, dan pengisian survei kepuasan internal bulanan. Langkah prioritas terbaik Anda adalah ...",
    options: [
      "Menuntaskan verifikasi pencairan bantuan warga dengan teliti sebelum pukul 16.00, lalu menjadwalkan pengisian survei internal dan konfirmasi undangan pekan depan.",
      "Mengisi survei kepuasan internal serta membalas undangan mitra lebih dulu agar jumlah disposisi masuk cepat berkurang sebelum masuk ke berkas bantuan.",
      "Langsung memproses verifikasi pencairan bantuan warga hingga tuntas, lalu menunda konfirmasi undangan dan survei hingga awal pekan depan.",
      "Membuka seluruh disposisi secara bergantian sambil mencicil bagian administrasi masing-masing berkas agar ketiganya berjalan beriringan.",
      "Meminta rekan satu ruangan mengerjakan verifikasi bantuan warga karena Anda baru kembali dari tugas dinas luar yang melelahkan."
    ],
    optionScores: [5, 3, 4, 2, 1],
    answer: "A",
    explanation:
      "Prioritas yang tepat mendahulukan berkas berdampak langsung bagi warga dengan batas waktu hari ini pukul 16.00 secara tuntas dan akurat, baru menindaklanjuti tugas internal serta agenda pekan depan. Hanya menuntaskan berkas bantuan lalu menunda dua agenda lain sampai pekan depan memang mengamankan hal paling mendesak, tetapi kurang rapi menata tindak lanjut tugas ringan yang masih sempat dijadwalkan hari itu.",
    tip: "Selalu petakan tenggat dan dampak publik setiap disposisi setelah kembali dari tugas luar agar hal krusial tidak terlewat.",
  },
  {
    id: "tkp-pro-042",
    subPattern: "skala-prioritas-dan-manajemen-tenggat",
    difficulty: "mudah",
    prompt:
      "Dua puluh menit sebelum waktu istirahat siang, masih tersisa tiga berkas permohonan izin daring di sistem layanan yang standar penyelesaiannya wajib diputus hari ini, sementara rekan-rekan mengajak Anda berangkat makan siang lebih awal ke rumah makan baru yang lokasinya cukup jauh. Sikap profesional Anda adalah ...",
    options: [
      "Ikut berangkat makan siang lebih awal bersama rekan supaya kebersamaan tim terjaga, lalu mempercepat pemeriksaan tiga berkas tersebut saat jam kerja sore.",
      "Menyampaikan secara santun kepada rekan bahwa Anda menyelesaikan tiga berkas berbatas waktu hari ini terlebih dahulu, baru makan siang sesuai jadwal istirahat.",
      "Memeriksa satu berkas secara cepat sebelum pergi bersama rekan agar tidak tertinggal rombongan, lalu melanjutkan dua berkas sisanya pada sore hari.",
      "Menyelesaikan seluruh berkas daring dengan tergesa-gesa dalam sepuluh menit tanpa cek ulang kelengkapan lampiran demi mengejar rombongan makan siang.",
      "Menyetujui ajakan makan siang lebih awal dan memindahkan antrean tiga berkas permohonan itu ke daftar antrean hari kerja berikutnya."
    ],
    optionScores: [2, 5, 4, 3, 1],
    answer: "B",
    explanation:
      "Menjaga komitmen jam kerja dan menuntaskan berkas dengan batas standar layanan sebelum waktu istirahat menunjukkan kedisiplinan serta profesionalisme tanpa mengorbankan ketelitian. Memeriksa satu berkas lalu menyusul rekan memang menunjukkan upaya bertanggung jawab, namun mengurangi waktu fokus siang dan berisiko menumpuk beban sore hari jika muncul kendala teknis.",
    tip: "Hormati batas jam kerja efektif sebelum beristirahat agar tenggat layanan harian tidak bergantung pada sisa waktu sore.",
  },
  {
    id: "tkp-pro-043",
    subPattern: "skala-prioritas-dan-manajemen-tenggat",
    difficulty: "sedang",
    prompt:
      "Anda mengawal penyusunan laporan rekapitulasi aset barang milik negara semesteran. Dua hari menjelang batas unggah ke sistem kementerian, Anda menemukan ketidaksinkronan kode inventaris pada lima belas perangkat lama yang memerlukan konfirmasi bagian gudang dan keuangan. Tindakan manajemen tenggat paling tepat adalah ...",
    options: [
      "Mengunggah data seadanya memakai kode lama terlebih dahulu agar tidak terlambat, lalu memperbaiki catatannya pada pelaporan semester berikutnya.",
      "Menunda pengunggahan laporan seluruh unit hingga lima belas kode inventaris lama itu selesai ditelusuri meskipun melewati batas waktu kementerian.",
      "Segera menyusun daftar spesifik lima belas aset bermasalah, berkoordinasi cepat dengan bagian gudang dan keuangan dengan tenggat jelas, sambil memfinalkan bagian lain.",
      "Mengerjakan penelusuran riwayat arsip fisik lima belas aset itu seorang diri di ruang arsip sampai malam hari agar proses persetujuan tidak melibatkan banyak bagian.",
      "Mengirimkan pesan singkat umum ke grup kantor menanyakan kode aset yang janggal lalu menunggu ada petugas gudang atau keuangan yang merespons."
    ],
    optionScores: [1, 2, 5, 4, 3],
    answer: "C",
    explanation:
      "Mengisolasi masalah secara spesifik, mengoordinasikannya langsung dengan unit terkait disertai batas waktu konfirmasi, dan memfinalkan bagian laporan yang sudah bersih memastikan akurasi sekaligus ketepatan unggah. Menelusuri arsip fisik sendirian sampai malam menunjukkan dedikasi tinggi, tetapi membuang waktu berharga padahal konfirmasi resmi gudang dan keuangan jauh lebih cepat serta akuntabel.",
    tip: "Pecah hambatan spesifik dan paralelkan penyelesaian bagian yang sudah valid sambil mengejar konfirmasi lintas unit dengan tenggat tegas.",
  },
  {
    id: "tkp-pro-044",
    subPattern: "skala-prioritas-dan-manajemen-tenggat",
    difficulty: "sedang",
    prompt:
      "Sebagai analis kepegawaian, Anda kerap menerima permintaan data mendadak melalui pesan pribadi dari berbagai bidang di luar jalur disposisi resmi, sehingga waktu pengerjaan SK kenaikan pangkat berkala yang berbatas waktu hukum terus terpotong. Cara mengelola alur prioritas paling efektif adalah ...",
    options: [
      "Memblokir notifikasi pesan pribadi selama jam kerja agar Anda dapat menyusun SK kenaikan pangkat tanpa gangguan dari bidang lain.",
      "Langsung memenuhi setiap permintaan data mendadak begitu pesan masuk supaya seluruh bidang merasa terlayani dengan cepat, lalu mengerjakan SK di malam hari.",
      "Mengabaikan permintaan yang masuk lewat pesan pribadi tanpa memberi penjelasan hingga pengirimnya mengirim ulang surat dinas resmi.",
      "Menetapkan jam blok khusus untuk memproses SK kenaikan pangkat, serta mengarahkan permintaan data lain secara santun melalui jalur resmi disertai perkiraan waktu pengerjaan.",
      "Meminta kepala subbagian mengambil alih seluruh permintaan data dari bidang lain sementara Anda hanya fokus mengurus berkas SK kenaikan pangkat."
    ],
    optionScores: [2, 3, 1, 5, 4],
    answer: "D",
    explanation:
      "Mengamankan blok waktu khusus untuk tugas berbatas hukum sembari mengarahkan permintaan lain secara santun ke mekanisme resmi yang transparan menciptakan keteraturan kerja bagi semua pihak. Meminta atasan mengambil alih seluruh permintaan memang melindungi fokus kerja pada SK, tetapi kurang membangun sistem pengelolaan permintaan mandiri di tingkat pelaksana.",
    tip: "Lindungi pekerjaan berbatas hukum dengan blok waktu terjadwal dan arahkan permintaan ad-hoc ke kanal resmi dengan estimasi waktu jelas.",
  },
  {
    id: "tkp-pro-045",
    subPattern: "skala-prioritas-dan-manajemen-tenggat",
    difficulty: "sedang",
    prompt:
      "Anda ditunjuk menjadi sekretaris tim lintas bagian untuk menyusun draf perjanjian kerja sama daerah dalam sepuluh hari kerja. Hingga hari kelima, dua perwakilan bagian belum mengirimkan masukan substansi padahal draf lengkap harus sudah diparaf kepala dinas pada hari kedelapan. Langkah taktis Anda adalah ...",
    options: [
      "Menunggu masukan kedua bagian tersebut hingga hari ketujuh karena setiap bagian seharusnya bertanggung jawab atas tenggatnya masing-masing.",
      "Menyusun draf langsung tanpa memasukkan substansi dua bagian yang terlambat agar jadwal paraf kepala dinas di hari kedelapan tetap terpenuhi.",
      "Melaporkan keterlambatan dua perwakilan tersebut secara tertulis kepada kepala dinas agar mereka langsung diberi teguran kedisiplinan.",
      "Menghubungi ulang kedua perwakilan lewat pesan pengingat singkat setiap hari sambil menunda penyusunan kerangka naskah kerja sama.",
      "Mengirimkan draf kerangka yang sudah memuat poin teknis awal, menghubungi langsung kedua perwakilan untuk rapat sinkronisasi singkat, dan menetapkan batas finalisasi sebelum hari ketujuh."
    ],
    optionScores: [1, 2, 3, 4, 5],
    answer: "E",
    explanation:
      "Bersikap proaktif dengan menyiapkan kerangka awal sebagai pemicu diskusi, menjalin komunikasi langsung untuk sinkronisasi cepat, dan mengunci batas waktu penyelarasan menjaga substansi maupun jadwal paraf pimpinan. Mengirim pengingat harian sambil menunggu masukan membuat penyusunan naskah pasif dan berisiko menyisakan waktu terlalu sempit menjelang hari kedelapan.",
    tip: "Saat koordinasi lintas bagian tersendat menjelang tenggat, dorong progres lewat draf pemantik dan pertemuan singkat berbatas waktu.",
  },
  {
    id: "tkp-pro-046",
    subPattern: "skala-prioritas-dan-manajemen-tenggat",
    difficulty: "sedang",
    prompt:
      "Menjelang penguncian sistem pelaporan kinerja triwulanan yang tersisa enam jam, dua unit komputer di ruang kerja mengalami gangguan pembaruan perangkat lunak sehingga antrean penginputan capaian seksi melambat drastis. Keputusan operasional paling sigap adalah ...",
    options: [
      "Memprioritaskan penginputan indikator kinerja utama yang datanya sudah lengkap pada perangkat yang aktif, mengoordinasikan jadwal giliran tim, serta menyiapkan bukti kendala untuk admin sistem.",
      "Menunggu proses pembaruan perangkat lunak pada kedua komputer selesai sambil berharap pihak pusat memperpanjang batas penguncian sistem triwulanan.",
      "Menginputkan data kinerja perkiraan terlebih dahulu di komputer yang tersedia supaya kolom terisi penuh sebelum tenggat penguncian tiba.",
      "Membagi giliran penggunaan perangkat yang masih berjalan normal secara bergantian berdasarkan urutan abjad nama pegawai tanpa memetakan tingkat urgensi data.",
      "Segera melapor kepada atasan tentang gangguan teknis komputer dan meminta izin agar penginputan kinerja seksi dialihkan ke awal triwulan berikutnya."
    ],
    optionScores: [5, 2, 1, 4, 3],
    answer: "A",
    explanation:
      "Mengatur prioritas data paling krusial di perangkat yang aktif, menjadwalkan giliran tim secara terukur, dan menyiapkan dokumentasi kendala untuk admin memaksimalkan capaian sah sebelum tenggat. Membagi giliran hanya berdasarkan urutan abjad memang tertib secara antrean, tetapi berisiko membuat indikator strategis seksi tertinggal dibanding isian pelengkap.",
    tip: "Ketika kapasitas alat kerja menyempit menjelang tenggat, dahulukan data berdampak paling tinggi dan atur giliran pemakaian secara terstruktur.",
  },
  {
    id: "tkp-pro-047",
    subPattern: "skala-prioritas-dan-manajemen-tenggat",
    difficulty: "sulit",
    prompt:
      "Dalam satu pekan yang sama, Anda mengawal tiga tugas kritis: mendampingi pemaparan anggaran di hadapan tim pemeriksa eksternal, menyelesaikan verifikasi pengaduan masyarakat kategori mendesak yang berbatas waktu hukum lima hari, serta memfinalkan bahan sambutan pimpinan untuk peresmian layanan daerah. Strategi paling matang untuk menuntaskan ketiganya adalah ...",
    options: [
      "Mengerjakan ketiga berkas sekaligus pada malam hari seorang diri agar tidak bergantung pada kecepatan kerja anggota tim lainnya.",
      "Memetakan tenggat hukum serta titik kritis tiap agenda, mengamankan berkas pengaduan dan bahan pemeriksaan lebih dulu, lalu meminta persetujuan pimpinan atas pembagian dukungan draf awal sambutan.",
      "Memfokuskan seluruh energi pada penyusunan bahan sambutan pimpinan karena berkaitan langsung dengan citra pimpinan di acara peresmian daerah.",
      "Menyelesaikan verifikasi pengaduan masyarakat terlebih dahulu hingga tuntas, lalu baru menyentuh bahan pemeriksaan anggaran dan draf sambutan pimpinan di sisa pekan.",
      "Mengajukan penundaan jadwal pemeriksaan eksternal serta perpanjangan batas waktu pengaduan masyarakat agar seluruh tugas dapat diselesaikan dengan tenang."
    ],
    optionScores: [3, 5, 2, 4, 1],
    answer: "B",
    explanation:
      "Pendekatan strategis memetakan batas hukum dan dampak tiap tugas kritis, mendahulukan verifikasi berbatas undang-undang serta dokumen pemeriksaan resmi, sekaligus berkoordinasi dengan pimpinan terkait pembagian dukungan draf sambutan agar seluruh target selesai bermutu. Menuntaskan pengaduan terlebih dulu secara berurutan tanpa membagi dukungan tim membuat dua agenda krusial lainnya berisiko kekurangan waktu telaah.",
    tip: "Saat menghadapi beberapa tugas berdampak tinggi bersamaan, kombinasikan pemetaan tenggat hukum dengan delegasi dukungan yang disetujui pimpinan.",
  },
  {
    id: "tkp-pro-048",
    subPattern: "skala-prioritas-dan-manajemen-tenggat",
    difficulty: "sulit",
    prompt:
      "Di tengah pelaksanaan rencana kerja tahunan unit, pimpinan tiba-tiba menambahkan satu proyek percontohan baru tanpa menambah tenggat maupun personel, padahal proyek inti pelayanan publik yang sedang berjalan tidak boleh mengalami penurunan kualitas. Langkah profesional paling realistis adalah ...",
    options: [
      "Menerima proyek tambahan tersebut dan langsung memangkas beberapa tahapan pemeriksaan mutu pada proyek inti agar jadwal keduanya tetap terkejar.",
      "Menolak secara tegas penugasan proyek percontohan baru tersebut di dalam rapat karena tidak tercantum di dokumen perencanaan awal tahun.",
      "Menyusun peta beban kerja dan risiko dampak secara objektif bersama tim, lalu berkonsultasi dengan pimpinan untuk menyepakati penjadwalan ulang tugas berprioritas rendah atau penyesuaian lingkup bertahap.",
      "Menyetujui tambahan proyek tanpa membahas kapasitas tim lalu mewajibkan seluruh anggota bekerja lembur setiap akhir pekan sampai akhir tahun anggaran.",
      "Menjalankan proyek inti seperti biasa sambil mengerjakan proyek percontohan baru hanya jika seluruh pekerjaan harian benar-benar kosong."
    ],
    optionScores: [1, 2, 5, 4, 3],
    answer: "C",
    explanation:
      "Manajemen prioritas tingkat lanjut menghadapi penambahan mandat tanpa sumber daya baru dengan menyajikan analisis kapasitas dan risiko secara objektif kepada pimpinan agar disepakati penataan ulang tugas nonkritis atau tahapan proyek yang realistis. Langsung menuntut lembur akhir pekan seluruh anggota memang terlihat patuh pada instruksi, tetapi memicu kelelahan kronis dan mengancam mutu layanan inti.",
    tip: "Ketika tugas baru hadir di kapasitas penuh, bawa data beban kerja untuk bernegosiasi soal tahapan atau penjadwalan ulang prioritas rendah.",
  },
  {
    id: "tkp-pro-049",
    subPattern: "tanggung-jawab-dan-integritas-kerja",
    difficulty: "mudah",
    prompt:
      "Setelah menyerahkan berkas kontrak pengadaan jasa kebersihan kantor ke bagian keuangan untuk proses pencairan, Anda baru menyadari lampiran daftar spesifikasi teknis yang terunggah adalah draf lama sebelum revisi harga satuan disepakati. Sikap bertanggung jawab Anda adalah ...",
    options: [
      "Menunggu bagian keuangan memeriksa berkas terlebih dahulu; apabila tidak dipermasalahkan, proses pencairan dibiarkan berjalan sesuai lampiran yang ada.",
      "Mengganti diam-diam file lampiran di folder berbagi tanpa memberitahu staf keuangan agar proses pengurusan berkas tidak perlu diulang dari awal.",
      "Menjelaskan kepada rekan satu tim bahwa kekeliruan unggah tersebut wajar terjadi karena tenggat pengadaan cukup padat.",
      "Segera menghubungi bagian keuangan dan atasan untuk mengakui kekeliruan unggah, menarik dokumen lama, serta menyampaikan lampiran revisi yang sah disertai berita acara perbaikan.",
      "Menyimpan dokumen revisi yang benar di komputer pribadi untuk berjaga-jaga apabila suatu saat pemeriksa menanyakan perbedaan harga satuan."
    ],
    optionScores: [2, 3, 1, 5, 4],
    answer: "D",
    explanation:
      "Akuntabilitas menuntut pengakuan kesalahan administrasi sejak dini kepada pihak berwenang dan perbaikan dokumen secara resmi agar pencairan anggaran sesuai kesepakatan sah. Menyimpan dokumen revisi hanya sebagai cadangan bila ditanya pemeriksa menunjukkan kewaspadaan pasif yang tetap membiarkan transaksi berjalan di atas lampiran keliru.",
    tip: "Begitu menyadari salah lampiran pada dokumen keuangan atau kontrak, segera tarik dan perbaiki lewat prosedur resmi sebelum diproses lebih lanjut.",
  },
  {
    id: "tkp-pro-050",
    subPattern: "tanggung-jawab-dan-integritas-kerja",
    difficulty: "mudah",
    prompt:
      "Sebulan setelah Anda menuntaskan verifikasi administrasi pengadaan alat tulis kantor secara sah, penyedia barang tersebut mengirimkan bingkisan hari raya bernilai cukup mahal ke alamat rumah Anda tanpa pemberitahuan sebelumnya. Tindakan berintegritas Anda adalah ...",
    options: [
      "Menerima bingkisan tersebut sebagai wujud penghargaan atas layanan profesional karena seluruh proses pengadaan sudah selesai dan tidak melanggar aturan.",
      "Membagikan seluruh isi bingkisan kepada tetangga sekitar rumah agar tidak ada keuntungan pribadi yang Anda nikmati dari penyedia barang.",
      "Membawa bingkisan tersebut ke kantor untuk dinikmati bersama seluruh anggota unit kerja supaya tidak terkesan dinikmati secara pribadi.",
      "Menyimpan bingkisan tersebut sementara di gudang rumah hingga masa kontrak pengadaan tahun berikutnya benar-benar berakhir.",
      "Menolak atau mengembalikan bingkisan secara santun kepada pengirim, serta melaporkan kejadian penerimaan yang tidak diminta itu sesuai mekanisme pengendalian gratifikasi instansi."
    ],
    optionScores: [1, 2, 3, 4, 5],
    answer: "E",
    explanation:
      "Penerimaan bingkisan dari pihak terkait pengadaan termasuk gratifikasi yang berpotensi memengaruhi objektivitas penilaian di masa depan meskipun transaksi telah selesai, sehingga harus ditolak atau dikembalikan serta dilaporkan melalui unit pengendali gratifikasi. Menyimpannya sementara tanpa pelaporan resmi tetap menyisakan celah kerawanan etik dan kewajiban pelaporan ASN.",
    tip: "Setiap pemberian dari vendor atau pemohon layanan yang terkait jabatan wajib ditolak secara santun atau segera dilaporkan ke kanal pengendalian gratifikasi.",
  },
  {
    id: "tkp-pro-051",
    subPattern: "tanggung-jawab-dan-integritas-kerja",
    difficulty: "sedang",
    prompt:
      "Seorang rekan satu tim yang hendak mengambil cuti panjang menawarkan untuk menitipkan nama pengguna dan kata sandi akun operator pencairan bantuannya kepada Anda agar pekerjaan verifikasi tidak terhenti, meskipun aturan sistem melarang penggunaan akun milik orang lain. Sikap berintegritas Anda adalah ...",
    options: [
      "Menolak dengan santun penitipan akun pribadi tersebut dan mengusulkan kepada pimpinan agar menerbitkan penugasan serta akses akun operator sementara resmi atas nama Anda.",
      "Menerima akses akun rekan untuk berjaga-jaga saja, tetapi hanya memakainya jika terdapat berkas pencairan sangat mendesak atas sepengetahuan rekan itu.",
      "Menyarankan rekan tersebut menitipkan kata sandi akunnya kepada staf lain di luar tim agar tanggung jawab tidak berada di tangan Anda.",
      "Menolak penitipan akun tersebut lalu membiarkan seluruh proses verifikasi pencairan bantuan berhenti sampai rekan yang bersangkutan selesai cuti.",
      "Menggunakan akun rekan tersebut secara terbuka di ruang kerja agar semua anggota tim melihat bahwa akses itu murni demi kelancaran tugas kantor."
    ],
    optionScores: [5, 3, 1, 4, 2],
    answer: "A",
    explanation:
      "Kepatuhan pada otorisasi akun tunggal menjaga jejak audit dan pertanggungjawaban hukum tiap transaksi, sehingga solusi yang tepat ialah menolak penitipan akun sekaligus mengajukan pengalihan akses resmi sementara kepada pimpinan. Sekadar menolak tanpa mengusulkan mekanisme pelaksana tugas resmi membuat layanan bantuan kepada warga ikut terhambat selama masa cuti.",
    tip: "Jangan pernah memakai kredensial akun dinas milik rekan; ajukan pelimpahan wewenang dan akun sementara resmi agar jejak audit tetap akuntabel.",
  },
  {
    id: "tkp-pro-052",
    subPattern: "tanggung-jawab-dan-integritas-kerja",
    difficulty: "sedang",
    prompt:
      "Saat memeriksa kembali dokumen pertanggungjawaban perjalanan dinas tim yang sudah ditandatangani secara administratif, Anda menemukan kelebihan penghitungan biaya pengembalian tiket sebesar beberapa ratus ribu rupiah yang masuk ke rekening perjalanan tim. Sikap akuntabel Anda adalah ...",
    options: [
      "Membiarkan saja selisih tersebut karena nominalnya tergolong kecil dan dokumen pertanggungjawaban sudah sah ditandatangani oleh bendahara.",
      "Segera melapor kepada bendahara pengeluaran dan atasan, menyusun perbaikan rincian biaya nyata, serta menyetorkan kembali kelebihan dana ke kas negara sesuai prosedur.",
      "Mengalihkan kelebihan dana tersebut untuk membeli perlengkapan alat tulis tambahan ruang kerja agar manfaatnya tetap kembali untuk kepentingan kantor.",
      "Menyimpan selisih dana tersebut dalam catatan kas kecil tim untuk menutup kekurangan biaya perjalanan dinas tim pada penugasan berikutnya.",
      "Membuat surat pernyataan pribadi yang disimpan di arsip meja bahwa kelebihan dana terjadi akibat kekeliruan hitung tidak disengaja."
    ],
    optionScores: [1, 5, 3, 2, 4],
    answer: "B",
    explanation:
      "Pengelolaan keuangan negara berpegang pada prinsip biaya riil dan transparansi sehingga setiap kelebihan pencairan, sekecil apa pun, wajib dikoreksi serta disetor kembali ke kas negara secara resmi. Membuat catatan pribadi di meja tanpa mengembalikan dana tetap menyalahi ketentuan pertanggungjawaban anggaran yang berlaku.",
    tip: "Setiap selisih lebih pencairan dana dinas, berapa pun nilainya, harus dikoreksi dan dikembalikan ke kas negara melalui bendahara resmi.",
  },
  {
    id: "tkp-pro-053",
    subPattern: "tanggung-jawab-dan-integritas-kerja",
    difficulty: "sedang",
    prompt:
      "Berkas permohonan izin usaha milik sebuah kelompok warga Anda kembalikan karena belum melampirkan surat rekomendasi teknis yang dipersyaratkan aturan. Sore harinya, seorang kenalan di instansi lain menghubungi Anda meminta berkas itu diloloskan dahulu dengan janji syarat menyusul pekan depan. Sikap tegas Anda adalah ...",
    options: [
      "Meloloskan berkas tersebut sebagai bentuk toleransi sosial terhadap kelompok usaha kecil sambil membuat catatan pengingat di buku agenda pribadi.",
      "Menerima permintaan kenalan tersebut dengan syarat pemohon menandatangani surat pernyataan pribadi di atas meterai akan melengkapi berkas pekan depan.",
      "Menolak permintaan meloloskan berkas secara sopan namun tegas, menjelaskan kewajiban pemenuhan syarat hukum yang sama bagi semua pemohon, dan memandu cara melengkapi kekurangannya.",
      "Meminta kenalan tersebut langsung menghubungi pimpinan unit Anda karena Anda tidak berani mengambil keputusan sendiri tanpa arahan atasan.",
      "Membiarkan berkas tersebut tertahan di meja verifikasi tanpa memberi kepastian tindak lanjut agar kenalan Anda menyadari penolakan secara halus."
    ],
    optionScores: [1, 2, 5, 4, 3],
    answer: "C",
    explanation:
      "Integritas pelayanan menuntut penegakan syarat hukum secara setara tanpa perlakuan khusus berbasis kedekatan, disertai komunikasi sopan serta panduan konstruktif agar pemohon dapat memenuhi persyaratan dengan benar. Menyerahkan keputusan ke pimpinan padahal aturan persyaratan sudah sangat jelas menunjukkan keraguan bersikap tegas terhadap pelanggaran prosedur.",
    tip: "Tegakkan standar persyaratan yang sama bagi setiap pemohon tanpa intervensi relasi, sambil tetap ramah memandu kelengkapannya.",
  },
  {
    id: "tkp-pro-054",
    subPattern: "tanggung-jawab-dan-integritas-kerja",
    difficulty: "sedang",
    prompt:
      "Saat menyusun laporan capaian kinerja akhir tahun, atasan langsung menyarankan seluruh staf menginput realisasi seratus persen pada program sosialisasi kecamatan yang sebenarnya baru terlaksana delapan puluh persen agar peringkat kinerja unit tidak turun. Sikap berintegritas Anda adalah ...",
    options: [
      "Mengikuti arahan atasan sepenuhnya karena sebagai bawahan Anda wajib patuh dan menjaga nama baik unit kerja di tingkat instansi.",
      "Mengisi angka realisasi delapan puluh lima persen sebagai jalan tengah agar laporan tidak terlalu menyimpang sekaligus tidak membuat atasan kecewa.",
      "Menulis angka seratus persen di laporan sistem tetapi menyimpan dokumen catatan realisasi sebenarnya di arsip pribadi untuk perlindungan diri.",
      "Menyampaikan data realisasi objektif delapan puluh persen disertai bukti kendala pelaksanaan serta rencana tindak lanjut penyelesaiannya dalam diskusi santun dengan atasan.",
      "Melaporkan langsung saran atasan tersebut ke media sosial anonim agar publik mengetahui adanya upaya manipulasi data kinerja unit."
    ],
    optionScores: [2, 3, 1, 5, 4],
    answer: "D",
    explanation:
      "Integritas pelaporan kinerja menjunjung kejujuran data berbasis bukti nyata sekaligus menghadirkan solusi tindak lanjut terhadap sisa target yang belum tercapai melalui dialog etis bersama atasan. Mengungkapkan masalah internal secara langsung ke kanal anonim publik sebelum menempuh jalur klarifikasi resmi serta pengawasan berjenjang justru merusak tata kelola etis.",
    tip: "Laporkan capaian kerja apa adanya berbasis bukti dan lengkapi dengan analisis kendala agar evaluasi organisasi benar-benar akurat.",
  },
  {
    id: "tkp-pro-055",
    subPattern: "tanggung-jawab-dan-integritas-kerja",
    difficulty: "sulit",
    prompt:
      "Sebagai ketua tim verifikasi teknis perizinan lingkungan, Anda menemukan indikasi kuat pemalsuan hasil uji laboratorium pada dokumen pemohon yang ternyata merupakan kerabat dekat salah satu pejabat strategis di pemerintah daerah. Langkah berintegritas paling matang adalah ...",
    options: [
      "Melanjutkan persetujuan berkas dengan menambahkan catatan syarat pemantauan berkala di masa depan agar tidak menimbulkan konflik dengan pejabat terkait.",
      "Mengembalikan berkas secara diam-diam kepada pemohon untuk diganti tanpa mencatat temuan pemalsuan dokumen dalam log pemeriksaan resmi.",
      "Mengundurkan diri mendadak dari jabatan ketua tim verifikasi supaya pihak lain saja yang menanggung risiko penolakan berkas kerabat pejabat tersebut.",
      "Menunda proses verifikasi berkas sampai batas waktu yang tidak ditentukan hingga pejabat terkait menanyakan langsung duduk perkaranya.",
      "Mendokumentasikan bukti kejanggalan uji laboratorium secara objektif, menunda persetujuan sesuai ketentuan, lalu melaporkan temuan resmi berjenjang kepada pimpinan berwenang dan inspektorat."
    ],
    optionScores: [1, 2, 3, 4, 5],
    answer: "E",
    explanation:
      "Pemalsuan dokumen teknis lingkungan menyangkut keselamatan publik dan pelanggaran hukum serius, sehingga ketua tim wajib membekukan persetujuan, mengamankan bukti objektif, dan melaporkannya lewat jalur pengawasan resmi tanpa gentar terhadap relasi kuasa. Sekadar menunda tanpa kejelasan status maupun laporan resmi justru menumpuk potensi tekanan informal di luar prosedur.",
    tip: "Hadapi tekanan relasi kuasa dengan fakta terverifikasi, penghentian proses cacat prosedur, dan pelaporan berjenjang ke aparat pengawas.",
  },
  {
    id: "tkp-pro-056",
    subPattern: "tanggung-jawab-dan-integritas-kerja",
    difficulty: "sulit",
    prompt:
      "Dalam audit rutin inspektorat, tim pemeriksa menemukan kekeliruan prosedur pengarsipan berita acara serah terima barang dua tahun lalu saat Anda masih menjadi staf baru yang hanya menjalankan arahan lisan pejabat lama yang kini telah pensiun. Sikap paling dewasa dan akuntabel adalah ...",
    options: [
      "Bersikap kooperatif menyajikan kronologi fakta apa adanya, mengakui keterlibatan dalam pelaksanaan tugas saat itu, serta aktif menyiapkan dokumen pelengkap dan perbaikan SOP agar tidak berulang.",
      "Menyerahkan seluruh berkas kepada tim auditor dan menegaskan bahwa seluruh tanggung jawab penuh berada pada pejabat lama yang memberi perintah lisan.",
      "Meminta rekan senior lain membantu menyusun berita acara baru bertanggal mundur supaya temuan administratif audit dapat langsung ditutup.",
      "Menghindar dari sesi wawancara tim auditor dengan alasan Anda sudah lupa detail teknis pelaksanaan pengadaan dua tahun silam.",
      "Membela diri dengan menyatakan status Anda waktu itu masih pegawai baru sehingga tidak memahami aturan pengarsipan berita acara."
    ],
    optionScores: [5, 4, 1, 2, 3],
    answer: "A",
    explanation:
      "Integritas sejati diuji saat menghadapi temuan audit masa lalu dengan kejujuran kronologi, kesediaan ikut membenahi kelengkapan tindak lanjut audit, dan perbaikan prosedur agar kesalahan serupa tidak terulang. Hanya melemparkan tanggung jawab sepenuhnya kepada pejabat pensiun memang benar secara hierarki perintah saat itu, namun kurang menunjukkan tanggung jawab perbaikan sebagai aparatur aktif.",
    tip: "Dalam pemeriksaan audit, hadapi temuan dengan keterbukaan fakta dan fokus pada penyelesaian tindak lanjut serta pembenahan sistem.",
  },
  {
    id: "tkp-pro-057",
    subPattern: "ketangguhan-di-bawah-tekanan-dan-fleksibilitas",
    difficulty: "mudah",
    prompt:
      "Pada jam sibuk pelayanan pagi, sistem antrean elektronik di loket terpadu tiba-tiba mengalami gangguan jaringan sehingga antrean fisik menumpuk dan sejumlah pemohon mulai melontarkan keluhan dengan nada tinggi. Respons tenang dan tangguh Anda adalah ...",
    options: [
      "Menutup sementara seluruh loket layanan hingga tim teknologi informasi memastikan jaringan sistem antrean elektronik pulih seratus persen.",
      "Tetap tenang menyampaikan permintaan maaf dan penjelasan terbuka kepada pemohon, lalu segera menerapkan pencatatan nomor antrean manual sementara agar layanan tetap berjalan.",
      "Menanggapi nada tinggi pemohon dengan penjelasan tegas bahwa gangguan jaringan berasal dari server pusat sehingga bukan kesalahan petugas loket.",
      "Meminta seluruh pemohon pulang terlebih dahulu dan kembali pada siang hari atau besok ketika sistem jaringan kantor sudah stabil.",
      "Fokus menghubungi tim teknologi informasi berulang kali dari meja belakang tanpa menemui pemohon yang sedang menunggu di ruang tunggu."
    ],
    optionScores: [2, 5, 3, 1, 4],
    answer: "B",
    explanation:
      "Ketangguhan layanan publik saat kendala teknis mendadak terlihat dari pengendalian emosi, komunikasi transparan kepada masyarakat, dan penerapan solusi cadangan manual agar pelayanan tidak lumpuh. Hanya sibuk menghubungi tim teknis di belakang meja tanpa meredakan kebingungan pemohon di ruang tunggu akan memperbesar ketegangan antrean.",
    tip: "Siapkan rencana cadangan layanan manual dan komunikasikan situasi secara terbuka saat sistem digital mendadak bermasalah.",
  },
  {
    id: "tkp-pro-058",
    subPattern: "ketangguhan-di-bawah-tekanan-dan-fleksibilitas",
    difficulty: "mudah",
    prompt:
      "Satu hari sebelum jadwal penyerahan draf final naskah kajian kebijakan daerah, pimpinan meminta perubahan struktur sistematika bab serta penambahan data pembanding dari dua daerah lain. Sikap adaptif terbaik Anda adalah ...",
    options: [
      "Menolak permintaan revisi mendadak itu karena penyusunan naskah sudah berlangsung beberapa minggu sesuai sistematika yang disepakati awal.",
      "Menyusun ulang sistematika bab seadanya tanpa mencari data pembanding dua daerah lain agar dokumen tetap terkirim tepat waktu.",
      "Menerima arahan revisi dengan tenang, memetakan bagian yang dapat disesuaikan cepat, membagi pengumpulan data pembanding bersama tim, dan menyelaraskan draf baru tepat waktu.",
      "Mengerjakan seluruh perubahan dari awal seorang diri sampai dini hari tanpa melibatkan tim karena khawatir hasil kerja rekan tidak sesuai selera pimpinan.",
      "Mengajukan keberatan kepada pimpinan dan meminta batas penyerahan draf final otomatis diundur satu minggu ke depan."
    ],
    optionScores: [1, 2, 5, 4, 3],
    answer: "C",
    explanation:
      "Fleksibilitas kerja dalam birokrasi menuntut kesiapan menerima arah kebijakan baru dengan kepala dingin, memecah pekerjaan secara terukur bersama tim, dan mengoptimalkan materi yang telah ada. Menulis ulang semuanya sendirian sampai dini hari memang menunjukkan ketekunan, tetapi tidak efisien secara waktu dan mengabaikan kekuatan kolaborasi tim.",
    tip: "Saat revisi mendadak datang mendekati tenggat, langsung petakan bagian yang masih terpakai dan bagi porsi pembaruan secara terstruktur.",
  },
  {
    id: "tkp-pro-059",
    subPattern: "ketangguhan-di-bawah-tekanan-dan-fleksibilitas",
    difficulty: "sedang",
    prompt:
      "Setelah lima tahun bekerja di bagian pengolahan data di balik layar yang tenang, Anda dimutasi ke unit pelayanan pengaduan langsung masyarakat yang menuntut respons cepat dan ketahanan menghadapi warga yang emosional. Langkah penyesuaian diri terbaik Anda adalah ...",
    options: [
      "Mengajukan surat permohonan peninjauan ulang mutasi karena merasa latar belakang kepribadian Anda hanya cocok untuk pekerjaan pengolahan data.",
      "Menjalankan tugas di unit pengaduan sebatas menerima berkas tertulis tanpa banyak berdialog agar terhindar dari perdebatan dengan pelapor yang emosional.",
      "Menerima tugas dengan patuh sambil bekerja sebisanya menunggu periode rotasi pegawai berikutnya beberapa tahun mendatang.",
      "Mempelajari SOP penanganan keluhan secara cepat, mengamati teknik komunikasi petugas senior yang efektif, dan melatih pengendalian diri agar cepat terampil melayani pengaduan.",
      "Meminta rekan di meja sebelah selalu menangani pelapor yang tampak emosional sementara Anda hanya menginput data aduan ke sistem komputer."
    ],
    optionScores: [1, 2, 3, 5, 4],
    answer: "D",
    explanation:
      "ASN profesional memandang mutasi ke peran yang menantang sebagai peluang memperluas kompetensi dengan aktif mempelajari standar baru, menyerap praktik baik rekan senior, dan melatih ketahanan emosional. Terus mengandalkan rekan untuk menghadapi pelapor emosional sementara Anda hanya menginput data membatasi pertumbuhan adaptasi peran baru tersebut.",
    tip: "Saat beralih ke lingkungan kerja yang menuntut keterampilan sosial lebih tinggi, pelajari praktik terbaik rekan berpengalaman dan bangun kepercayaan diri bertahap.",
  },
  {
    id: "tkp-pro-060",
    subPattern: "ketangguhan-di-bawah-tekanan-dan-fleksibilitas",
    difficulty: "sedang",
    prompt:
      "Ketika Anda dan tim kecil memandu sosialisasi program penting di balai kecamatan, hujan deras disertai angin kencang memutus aliran listrik dan membuat perangkat presentasi padam total sehingga sebagian peserta mulai bersiap pulang. Tindakan tangguh Anda adalah ...",
    options: [
      "Segera menutup acara sosialisasi lebih awal dan menyarankan peserta membaca materi secara mandiri melalui tautan situs web instansi.",
      "Menunggu di kursi panitia sampai petugas listrik memperbaiki jaringan sembari membiarkan peserta menunggu tanpa kepastian agenda.",
      "Tetap menayangkan slide presentasi dari layar laptop pribadi di meja depan meski hanya terlihat oleh beberapa peserta baris terdepan.",
      "Meminta maaf atas cuaca buruk lalu mengundang perwakilan warga yang masih bertahan untuk berkumpul dekat meja panitia demi sesi tanya jawab singkat.",
      "Mengambil alih situasi dengan tenang, mengarahkan peserta ke area balai yang aman, lalu melanjutkan penyampaian inti materi dan tanya jawab secara interaktif lisan menggunakan salinan cetak atau catatan ringkas."
    ],
    optionScores: [2, 1, 3, 4, 5],
    answer: "E",
    explanation:
      "Ketangguhan di lapangan memastikan tujuan sosialisasi tetap tercapai meski perangkat teknologi padam melalui pengamanan ruang, komunikasi lisan interaktif, dan pemanfaatan media alternatif sederhana untuk seluruh hadirin. Hanya merangkul segelintir perwakilan di meja depan membuat sebagian besar warga lain kehilangan hak informasi program yang sama.",
    tip: "Jangan bergantung penuh pada proyektor dan listrik; selalu kuasai inti materi agar mampu memandu forum secara dinamis dalam kondisi darurat.",
  },
  {
    id: "tkp-pro-061",
    subPattern: "ketangguhan-di-bawah-tekanan-dan-fleksibilitas",
    difficulty: "sedang",
    prompt:
      "Usulan penyederhanaan alur layanan yang telah Anda teliti dan rancang selama dua bulan ditolak dalam rapat pimpinan karena dinilai belum sesuai dengan prioritas strategis kepala dinas yang baru dilantik. Sikap profesional paling tangguh adalah ...",
    options: [
      "Menerima keputusan rapat dengan lapang dada, meminta umpan balik spesifik terkait arah prioritas baru, lalu menyesuaikan rancangan agar tetap memberi manfaat nyata bagi unit.",
      "Merasa kecewa lalu menyimpan rancangan tersebut selamanya dan memilih bekerja sebatas menjalankan tugas rutin instruksi atasan saja.",
      "Mencari dukungan sejumlah rekan sejawat untuk mengirim surat keberatan terhadap keputusan penolakan pimpinan pada rapat berikutnya.",
      "Menyesuaikan beberapa istilah judul rancangan tanpa mengubah substansi utamanya agar terlihat mengikuti prioritas baru saat diajukan kembali.",
      "Tetap mencoba menjalankan sebagian gagasan rancangan tersebut di meja kerja Anda sendiri tanpa persetujuan resmi rapat pimpinan."
    ],
    optionScores: [5, 2, 1, 4, 3],
    answer: "A",
    explanation:
      "Profesionalisme tangguh tidak patah semangat ketika gagasan ditolak, melainkan menggali sudut pandang strategis pimpinan baru dan mengkalibrasi ulang rancangan agar relevan serta bisa diterapkan. Sekadar mengganti istilah judul tanpa menyelaraskan substansi tidak menjawab kebutuhan strategis organisasi sehingga berisiko ditolak kembali.",
    tip: "Jadikan penolakan ide bukan sebagai akhir inisiatif, melainkan masukan berharga untuk menyelaraskan solusi dengan prioritas organisasi terkini.",
  },
  {
    id: "tkp-pro-062",
    subPattern: "ketangguhan-di-bawah-tekanan-dan-fleksibilitas",
    difficulty: "sedang",
    prompt:
      "Pada masa awal penerapan sistem kerja fleksibel lintas lokasi dan rotasi meja layanan, sejumlah rekan mengeluhkan alur koordinasi yang belum stabil sehingga suasana tim menjadi mudah tegang dan saling menyalahkan saat terjadi keterlambatan berkas. Respons konstruktif Anda adalah ...",
    options: [
      "Menjaga jarak dari diskusi keluhan rekan dan fokus mengamankan penyelesaian target pekerjaan pribadi agar tidak ikut disalahkan.",
      "Mengajak rekan memetakan titik hambat koordinasi secara objektif, mengusulkan kesepakatan kanal pembaruan status tugas yang ringkas, serta menjaga komunikasi saling mendukung.",
      "Ikut menyuarakan keluhan mengenai ketidaksiapan kebijakan baru itu agar pimpinan segera mengembalikan pola kerja ke sistem tatap muka penuh.",
      "Menasihati rekan-rekan agar bersabar menerima perubahan tanpa menawarkan usulan teknis untuk memperbaiki alur komunikasi harian tim.",
      "Mengambil alih penyelesaian berkas rekan yang terlambat secara diam-diam supaya tidak memicu perdebatan di grup tim."
    ],
    optionScores: [3, 5, 1, 4, 2],
    answer: "B",
    explanation:
      "Adaptasi tim membutuhkan penggerak yang mengubah keluhan menjadi perbaikan alur koordinasi nyata melalui transparansi status kerja dan dukungan kolektif. Sekadar menasihati untuk bersabar memang meredam emosi sesaat, tetapi tidak menghilangkan akar masalah ketidakjelasan komunikasi di masa transisi.",
    tip: "Saat tim mengalami gesekan di masa transisi pola kerja baru, tawarkan kesepakatan alur koordinasi sederhana untuk mengembalikan ritme kerja.",
  },
  {
    id: "tkp-pro-063",
    subPattern: "ketangguhan-di-bawah-tekanan-dan-fleksibilitas",
    difficulty: "sulit",
    prompt:
      "Tiga hari sebelum penyelenggaraan forum koordinasi tingkat nasional instansi Anda, ketua panitia mendadak berhalangan akibat musibah keluarga dan pimpinan menunjuk Anda mengambil alih kendali saat konfirmasi beberapa narasumber serta logistik ruang belum tuntas. Langkah kepemimpinan tangguh Anda adalah ...",
    options: [
      "Mengusulkan kepada pimpinan agar forum koordinasi nasional tersebut ditunda hingga bulan depan supaya persiapan kembali matang dari awal.",
      "Mengambil alih seluruh komunikasi narasumber, logistik, dan susunan acara secara langsung oleh Anda sendiri agar tidak terjadi miskomunikasi lanjutan.",
      "Segera melakukan audit status persiapan bersama koordinator tiap seksi, menetapkan daftar prioritas kritis H-3 hingga H-1, mendelegasikan peran tegas, dan memantau progres berkala.",
      "Menjalankan rencana acara apa adanya mengikuti catatan terakhir ketua sebelumnya sambil berharap vendor logistik dan narasumber tetap hadir sesuai undangan.",
      "Menanyakan kembali secara rinci kepada ketua panitia yang sedang terkena musibah untuk memastikan setiap detail teknis sebelum Anda melangkah."
    ],
    optionScores: [2, 3, 5, 1, 4],
    answer: "C",
    explanation:
      "Mengambil alih krisis kepanitiaan dalam waktu sempit membutuhkan audit cepat status riil, pemetaan jalur kritis, pendelegasian tegas ke koordinator bidang, dan pengendalian progres intensif tanpa membebani ketua yang sedang berduka. Menghubungi ketua yang tengah terkena musibah untuk menanyakan detail berulang kali memang bermaksud memastikan akurasi, tetapi kurang empatik dan memperlambat pengambilan kendali lapangan.",
    tip: "Dalam transisi darurat, lakukan audit cepat status kesiapan bersama tim inti lalu kunci jalur kritis melalui delegasi jelas dan cek berkala.",
  },
  {
    id: "tkp-pro-064",
    subPattern: "ketangguhan-di-bawah-tekanan-dan-fleksibilitas",
    difficulty: "sulit",
    prompt:
      "Pada pertengahan tahun berjalan, instansi Anda terdampak kebijakan efisiensi nasional berupa pemotongan anggaran operasional kegiatan sebesar tiga puluh persen, sementara standar mutu dan target layanan masyarakat tidak boleh berkurang. Sikap tangguh sekaligus inovatif Anda sebagai perencana program unit adalah ...",
    options: [
      "Mengurangi frekuensi pelayanan tatap muka kepada masyarakat di hari tertentu untuk menekan biaya listrik, cetak berkas, dan operasional loket.",
      "Menghentikan seluruh program pembinaan serta pendampingan lapangan sementara waktu hingga pengajuan anggaran tambahan disetujui tahun depan.",
      "Menyusun surat pernyataan keberatan ke bagian anggaran dengan alasan pemotongan dana mustahil dijalankan tanpa menurunkan kualitas layanan.",
      "Mengevaluasi ulang komponen biaya non-esensial, mengoptimalkan kanal layanan serta rapat koordinasi digital, dan menjalin sinergi sumber daya lintas mitra agar target mutu tetap tercapai.",
      "Meminta seluruh pegawai secara sukarela menanggung sebagian biaya alat kerja operasional pribadi demi menutupi kekurangan anggaran seksi."
    ],
    optionScores: [2, 1, 3, 5, 4],
    answer: "D",
    explanation:
      "Ketangguhan manajerial di tengah keterbatasan anggaran mendorong efisiensi cerdas pada pos non-esensial, digitalisasi proses, dan kolaborasi mitra tanpa mengorbankan hak layanan warga maupun membebani kantong pribadi pegawai. Membebankan biaya operasional dinas kepada iuran pegawai memang menunjukkan pengorbanan tinggi, tetapi tidak berkelanjutan dan melanggar prinsip tata kelola pembiayaan publik.",
    tip: "Ketika anggaran menyusut sementara target tetap, fokuskan pemangkasan pada biaya seremonial dan alihkan proses ke model digital serta kolaborasi sumber daya.",
  },
  {
    id: "tkp-pro-065",
    subPattern: "disiplin-etika-birokrasi-dan-netralitas",
    difficulty: "mudah",
    prompt:
      "Seorang rekan kerja mengajak Anda keluar kantor selama dua jam pada jam kerja untuk mengurus perpanjangan dokumen pribadi di pusat layanan mal dengan alasan pekerjaan meja sedang lengang dan pimpinan sedang bertugas di luar kota. Sikap disiplin Anda adalah ...",
    options: [
      "Ikut pergi sebentar saja sekitar satu jam sambil memastikan ponsel tetap aktif apabila sewaktu-waktu ada panggilan tugas mendadak dari kantor.",
      "Mengizinkan rekan tersebut berangkat lebih dulu sambil menawarkan bantuan menutup kehadirannya jika ada atasan lain mencari di ruangan.",
      "Menyarankan rekan tersebut memajukan jam istirahat siang secara sepihak agar urusan pribadinya selesai tanpa diketahui bagian kepegawaian.",
      "Menolak ajakan tersebut karena takut terkena sidak tim pengawas kepegawaian yang kadang datang memeriksa kehadiran pegawai tanpa pemberitahuan.",
      "Menolak ajakan dengan sopan, tetap berada di tempat tugas selama jam kerja, dan menyarankan rekan mengurus keperluan pribadi di luar jam kerja atau melalui izin resmi."
    ],
    optionScores: [2, 1, 3, 4, 5],
    answer: "E",
    explanation:
      "Disiplin jam kerja merupakan amanah etika ASN yang tetap berlaku meskipun pimpinan tidak berada di ruangan maupun beban meja sedang renggang. Menolak semata-mata karena takut terkena sidak pengawas mencerminkan kepatuhan eksternal semu, sedangkan aparatur berintegritas berpegang pada kesadaran etika kerja dan prosedur izin resmi.",
    tip: "Kedisiplinan aparatur diukur dari ketaatan terhadap jam kerja efektif bahkan saat tidak ada pengawasan langsung di ruangan.",
  },
  {
    id: "tkp-pro-066",
    subPattern: "disiplin-etika-birokrasi-dan-netralitas",
    difficulty: "mudah",
    prompt:
      "Anda menghadiri acara syukuran keluarga di rumah kerabat dekat, namun tanpa diduga hadir pula seorang bakal calon kepala daerah beserta tim relawan yang mulai membagikan kaus bergambar calon serta mengajak tamu berfoto bersama sambil mengacungkan simbol dukungan. Sikap menjaga netralitas ASN adalah ...",
    options: [
      "Tetap menjaga silaturahmi keluarga secara santun, menolak halus pemberian atribut kampanye, menghindari pose simbol dukungan maupun foto kampanye, serta undur diri lebih awal jika suasana mengarah ke politik praktis.",
      "Segera meninggalkan rumah kerabat begitu melihat bakal calon masuk halaman tanpa sempat berpamitan kepada tuan rumah demi menghindari kesalahpahaman.",
      "Ikut berfoto bersama keluarga besar termasuk bakal calon tersebut demi kesopanan, asalkan tidak menggunakan seragam dinas dan tidak mengunggahnya ke media sosial.",
      "Menerima kaus bergambar calon sebagai tanda menghargai pemberian tuan rumah, lalu menyimpannya di dalam tas tanpa pernah memakainya.",
      "Mengikuti pose simbol dukungan bersama rombongan keluarga agar tidak dianggap kaku, karena kehadiran Anda bersifat murni acara keluarga di akhir pekan."
    ],
    optionScores: [5, 4, 2, 3, 1],
    answer: "A",
    explanation:
      "Netralitas ASN berlaku penuh di luar jam kerja dan di ruang pribadi; menolak atribut politik, menghindari foto bersimbol dukungan, dan menjaga etika kekeluargaan melindungi marwah netralitas tanpa bersikap kasar kepada tuan rumah. Langsung pulang tanpa pamit karena panik memang menghindari paparan politik, tetapi kurang luwes menjaga kesantunan hubungan keluarga.",
    tip: "Saat situasi sosial pribadi bersinggungan dengan aktivitas politik praktis, jaga batas netralitas secara tegas tanpa meninggalkan etika kesantunan.",
  },
  {
    id: "tkp-pro-067",
    subPattern: "disiplin-etika-birokrasi-dan-netralitas",
    difficulty: "sedang",
    prompt:
      "Dalam grup percakapan pesan instan tidak resmi yang beranggotakan pegawai lintas bidang, beberapa rekan mulai rutin mengirim meme sindiran politik dan melontarkan ajakan memilih figur tertentu menjelang pemungutan suara. Langkah beretika dan netral Anda adalah ...",
    options: [
      "Ikut menanggapi dengan emotikon tawa saja agar tetap akrab dalam pergaulan kantor tanpa ikut menuliskan komentar dukungan politik.",
      "Tidak ikut menyebarkan atau menanggapi konten politik, mengingatkan secara sopan agar grup tetap dipakai untuk komunikasi kerja yang netral, atau keluar dari grup bila berlarut.",
      "Mengambil tangkapan layar percakapan tersebut secara diam-diam lalu langsung menyebarkannya ke grup pengawas pemilu daerah tanpa mengingatkan rekan.",
      "Membisu seratus persen di dalam grup supaya tidak terlibat perdebatan, meski pembagian konten dukungan politik di grup kantor makin ramai setiap hari.",
      "Membalas di grup dengan mengirim informasi prestasi figur kandidat lain agar tercipta diskusi politik yang berimbang di kalangan pegawai."
    ],
    optionScores: [2, 5, 3, 4, 1],
    answer: "B",
    explanation:
      "Sikap aktif menjaga netralitas lingkungan kerja menolak ikut serta maupun memberi validasi pada konten partisan, sekaligus mengingatkan secara santun agar ruang komunikasi pegawai tetap profesional dan mengambil jarak bila tidak diindahkan. Hanya diam seratus persen memang menghindari pelanggaran pribadi, namun membiarkan norma netralitas di lingkungan rekan kerja terus tergerus.",
    tip: "Netralitas ASN juga berarti tidak memberi respons, tawa, atau persetujuan pasif atas konten kampanye di grup percakapan sesama pegawai.",
  },
  {
    id: "tkp-pro-068",
    subPattern: "disiplin-etika-birokrasi-dan-netralitas",
    difficulty: "sedang",
    prompt:
      "Seorang kerabat menghubungi Anda untuk menanyakan perkembangan permohonan izin bangunannya yang sedang ditangani bidang lain di instansi yang sama, lalu meminta Anda menitipkan pesan kepada verifikator terkait agar berkasnya didahulukan dari antrean. Sikap etika birokrasi Anda adalah ...",
    options: [
      "Menemui verifikator bidang lain tersebut untuk menanyakan posisi berkas sekaligus meminta bantuan percepatan karena pemohon adalah kerabat dekat.",
      "Meminta kerabat mengirim nomor registrasi berkas agar Anda dapat membuka sistem internal bidang lain untuk mengecek dan mengubah status antreannya.",
      "Menolak dengan santun permintaan mendahulukan berkas, menjelaskan prinsip antrean adil dan bebas intervensi, serta mengarahkan kerabat mengecek status resmi melalui loket atau portal informasi.",
      "Menjanjikan akan mencoba bertanya kepada petugas bidang sebelah tanpa berani memastikan apakah berkas kerabat tersebut dapat dipercepat.",
      "Menolak permintaan bantuan kerabat dengan nada kesal dan memintanya tidak lagi menghubungi Anda untuk urusan kantor apa pun."
    ],
    optionScores: [1, 2, 5, 3, 4],
    answer: "C",
    explanation:
      "Etika birokrasi menuntut pencegahan konflik kepentingan dan penyalahgunaan akses lintas bidang, sehingga aparatur harus menolak intervensi antrean secara sopan serta memandu kerabat memakai kanal pelacakan resmi yang terbuka bagi semua warga. Menolak dengan nada kesal memang menghindari pelanggaran antrean, tetapi gagal mencerminkan komunikasi santun serta edukasi transparansi layanan.",
    tip: "Hindari penggunaan status pegawai dalam negeri maupun relasi internal untuk melangkahi antrean layanan resmi; arahkan semua pemohon ke kanal informasi setara.",
  },
  {
    id: "tkp-pro-069",
    subPattern: "disiplin-etika-birokrasi-dan-netralitas",
    difficulty: "sedang",
    prompt:
      "Saat bekerja lembur menyusun laporan evaluasi, Anda melihat seorang rekan secara rutin menggunakan mesin pencetak warna, rim kertas berlogo instansi, serta fasilitas pengantaran surat dinas untuk mencetak ratusan brosur organisasi sosial pribadinya. Tindakan berintegritas Anda adalah ...",
    options: [
      "Membiarkan perilaku tersebut karena jumlah kertas dan tinta yang terpakai tidak terlalu besar dibanding anggaran operasional tahunan instansi.",
      "Menulis sindiran umum mengenai pencurian fasilitas kantor di papan pengumuman ruang kerja supaya rekan tersebut merasa tersindir.",
      "Ikut memanfaatkan sisa waktu pengantaran surat dinas untuk keperluan pribadi ringan agar tidak merasa dirugikan rekan yang lebih dulu melakukannya.",
      "Menegur rekan secara pribadi dengan santun mengenai batas penggunaan aset negara untuk kepentingan non-dinas, serta melapor berjenjang kepada atasan jika kebiasaan tersebut tetap berlanjut.",
      "Menanyakan secara langsung biaya pengisian tinta printer kantor kepada rekan tersebut tanpa membicarakan penyalahgunaan fasilitas dinas."
    ],
    optionScores: [2, 3, 1, 5, 4],
    answer: "D",
    explanation:
      "Menjaga disiplin aset negara dimulai dari pengingat personal yang etis dan santun untuk meluruskan penyalahgunaan fasilitas kantor, disertai mekanisme pelaporan berjenjang bila tidak ada perbaikan. Hanya menyinggung soal biaya tinta secara samar tanpa menyentuh prinsip larangan penggunaan aset negara tidak memberi batasan etik yang tegas.",
    tip: "Fasilitas kerja, alat tulis, dan kop dinas dibiayai uang publik sehingga terlarang dipakai untuk kepentingan pribadi atau organisasi di luar kedinasan.",
  },
  {
    id: "tkp-pro-070",
    subPattern: "disiplin-etika-birokrasi-dan-netralitas",
    difficulty: "sedang",
    prompt:
      "Atasan langsung di unit Anda mengimbau seluruh staf menghadiri kegiatan jalan sehat hari Minggu yang digelar oleh organisasi sayap partai politik, disertai anjuran mengenakan kaus olahraga bernuansa warna identitas partai tersebut agar unit terlihat kompak. Sikap tegas menjaga netralitas ASN adalah ...",
    options: [
      "Hadir mengikuti jalan sehat dengan mengenakan warna kaus sesuai anjuran atasan karena acara bersifat olahraga santai dan merupakan bentuk loyalitas tim.",
      "Tetap hadir ke lokasi jalan sehat memakai pakaian bebas netral dan menjaga jarak dari panggung utama agar tidak menyinggung perasaan atasan.",
      "Menghadiri kegiatan tersebut hanya saat pengisian daftar hadir pembukaan lalu langsung pulang sebelum acara sambutan politik dimulai.",
      "Tidak hadir dengan membuat alasan sakit mendadak di akhir pekan agar terhindar dari diskusi soal netralitas ASN dengan atasan.",
      "Menolak secara santun keikutsertaan dengan merujuk aturan netralitas ASN terhadap kegiatan terafiliasi partai politik, serta mengajak atasan dan tim menjaga netralitas aparatur."
    ],
    optionScores: [1, 3, 2, 4, 5],
    answer: "E",
    explanation:
      "Netralitas ASN melindungi aparatur dari keterlibatan simbolik maupun kehadiran dalam acara organisasi terafiliasi partai politik, bahkan ketika dianjurkan atasan langsung, dengan penyampaian penolakan yang santun dan berbasis regulasi. Menghindar dengan alasan sakit memang mencegah keterlibatan pribadi, tetapi tidak membangun keberanian etik serta kesadaran netralitas bersama di lingkungan unit.",
    tip: "Loyalitas terhadap atasan dibatasi oleh ketentuan hukum netralitas ASN; tolak keterlibatan acara terafiliasi partai politik secara santun namun tegas.",
  },
  {
    id: "tkp-pro-071",
    subPattern: "disiplin-etika-birokrasi-dan-netralitas",
    difficulty: "sulit",
    prompt:
      "Anda tergabung dalam panitia seleksi pengadaan tenaga pendukung teknis di instansi. Menjelang tahap wawancara akhir, Anda mendapati salah satu peserta adalah adik ipar dari pejabat penentu kebijakan kepegawaian yang secara halus menanyakan peluang kelulusan kerabatnya kepada Anda. Tindakan menjaga etika birokrasi paling tepat adalah ...",
    options: [
      "Menjaga kerahasiaan penilaian, menjawab secara profesional bahwa kelulusan sepenuhnya ditentukan nilai objektif sistem seleksi, serta melaporkan potensi benturan kepentingan tersebut kepada ketua panitia untuk pengawasan bersama.",
      "Memberikan informasi umum mengenai kisi-kisi penilaian wawancara kepada pejabat tersebut sekadar menjaga etika hubungan atasan-bawahan.",
      "Tetap menilai peserta tersebut secara objektif sesuai standar tanpa memberi tahu ketua panitia maupun pihak lain tentang adanya pertanyaan halus dari pejabat.",
      "Mengurangi nilai wawancara peserta bersangkutan secara sengaja agar terhindar dari tuduhan kolusi apabila peserta tersebut nantinya lolos seleksi.",
      "Menuruti pesan tersirat pejabat tersebut dengan menaikkan sedikit skor kelayakan karena menilai kinerja kerabatnya memang cukup baik."
    ],
    optionScores: [5, 2, 4, 3, 1],
    answer: "A",
    explanation:
      "Integritas seleksi berbasis merit menuntut objektivitas penilaian, penjagaan kerahasiaan, penolakan halus terhadap pendekatan kekuasaan, serta pengungkapan potensi konflik kepentingan kepada ketua panitia agar proses audit seleksi bersih. Menilai secara objektif tanpa mengungkap pendekatan pejabat tersebut sudah baik di sisi pribadi, namun kurang melindungi panitia secara kelembagaan dari risiko tekanan lanjutan atau kecurigaan publik.",
    tip: "Dalam proses seleksi atau pengadaan, deklarasikan potensi benturan kepentingan ke pimpinan panitia sejak awal agar objektivitas keputusan terlindungi.",
  },
  {
    id: "tkp-pro-072",
    subPattern: "disiplin-etika-birokrasi-dan-netralitas",
    difficulty: "sulit",
    prompt:
      "Sebagai pengelola akun media sosial resmi instansi, Anda diminta oleh seorang pejabat struktural untuk mengunggah ulang konten video kegiatan pribadi kepala daerah di luar agenda pemerintahan yang sarat muatan pencitraan menjelang masa pendaftaran pemilihan kepala daerah. Sikap etika birokrasi paling profesional adalah ...",
    options: [
      "Langsung mengunggah ulang video tersebut di akun instansi karena posisi kepala daerah merupakan pimpinan tertinggi di pemerintah daerah setempat.",
      "Menolak secara santun dengan menjelaskan pedoman tata kelola media resmi pemerintah dan aturan netralitas ASN dalam pemanfaatan kanal publik, serta menawarkan alternatif publikasi capaian program dinas yang resmi.",
      "Mengunggah video tersebut hanya melalui fitur cerita singkat yang otomatis hilang setelah dua puluh empat jam sebagai jalan tengah.",
      "Membiarkan permintaan tersebut berlarut-larut dengan alasan akun media sosial resmi instansi sedang mengalami kendala verifikasi kata sandi.",
      "Membuat surat pengunduran diri sebagai admin media sosial resmi instansi agar tidak terseret risiko pelanggaran netralitas pemilu."
    ],
    optionScores: [1, 5, 2, 3, 4],
    answer: "B",
    explanation:
      "Kanal komunikasi resmi pemerintah dibiayai publik untuk informasi program kedinasan, bukan kampanye atau pencitraan personal pejabat menjelang kontestasi politik; penolakan santun berbasis pedoman disertai alternatif konten program resmi menjaga netralitas sekaligus produktivitas kehumasan. Mengundurkan diri dari tugas admin memang menghindari pelanggaran pribadi, tetapi kurang menunjukkan keteguhan profesional menjaga tata kelola kanal resmi.",
    tip: "Akun resmi instansi hanya boleh memuat informasi kedinasan yang netral dan terverifikasi, bukan agenda pribadi atau pencitraan menjelang kontestasi politik.",
  },
  {
    id: "tkp-pro-073",
    subPattern: "pengembangan-diri-dan-inisiatif-kualitas",
    difficulty: "mudah",
    prompt:
      "Instansi Anda menyediakan akses kursus daring mandiri tentang pengelolaan arsip digital modern secara gratis, namun kursus tersebut bersifat sukarela dan tidak menjadi syarat tambahan tunjangan kinerja bulan ini. Sikap pembelajar yang profesional adalah ...",
    options: [
      "Menunda pendaftaran kursus hingga ada surat perintah wajib dari pimpinan agar waktu kerja saat ini fokus menyelesaikan tugas rutin saja.",
      "Mendaftar kursus lalu langsung membuka halaman kuis akhir tanpa menyimak materi supaya cepat memperoleh sertifikat keikutsertaan.",
      "Mendaftarkan diri dan menyusun jadwal belajar teratur di luar jam pelayanan padat agar keterampilan arsip digital bertambah dan dapat diterapkan di unit kerja.",
      "Menunggu hasil ulasan rekan-rekan yang lebih dulu mengikuti kursus tersebut sebelum memutuskan apakah materinya berguna atau tidak.",
      "Mengabaikan tawaran kursus daring tersebut karena sistem pengarsipan dokumen kertas di unit kerja saat ini masih berjalan cukup lancar."
    ],
    optionScores: [3, 2, 5, 4, 1],
    answer: "C",
    explanation:
      "Aparatur profesional terdorong oleh motivasi intrinsik untuk terus meningkatkan kompetensi mengikuti perkembangan kerja modern tanpa menunggu kewajiban atau imbalan tunjangan tambahan. Menunggu ulasan rekan terlebih dahulu memang membantu menimbang relevansi, namun menunda pemanfaatan peluang peningkatan keahlian yang sudah tersedia gratis.",
    tip: "Manfaatkan setiap fasilitas pengembangan kompetensi sukarela untuk memutakhirkan keterampilan sebelum sistem kerja menuntutnya secara mendadak.",
  },
  {
    id: "tkp-pro-074",
    subPattern: "pengembangan-diri-dan-inisiatif-kualitas",
    difficulty: "mudah",
    prompt:
      "Berdasarkan survei kepuasan masyarakat, banyak warga menilai bahasa surat jawaban pengaduan dari unit Anda masih terlalu kaku, penuh istilah teknis hukum yang sulit dipahami orang awam, sehingga warga sering bertanya ulang ke loket. Inisiatif kualitas Anda adalah ...",
    options: [
      "Mempertahankan format bahasa surat jawaban yang kaku karena istilah hukum baku penting untuk melindungi instansi dari gugatan administratif.",
      "Menambahkan catatan kaki singkat di bagian bawah surat yang menyarankan warga mencari arti istilah hukum melalui mesin pencari daring.",
      "Menjelaskan secara lisan kepada warga yang datang ke loket saja apabila mereka kebingungan membaca isi surat jawaban unit.",
      "Menyusun draf templat surat jawaban yang tetap akurat secara hukum namun memakai bahasa lugas ramah pembaca, lalu mengusulkan penerapannya di tim.",
      "Meminta bagian hukum instansi mengambil alih penulisan seluruh surat balasan pengaduan supaya tim Anda tidak lagi mendapat keluhan bahasa."
    ],
    optionScores: [2, 1, 3, 5, 4],
    answer: "D",
    explanation:
      "Peningkatan mutu komunikasi publik memadukan ketepatan kaidah hukum dengan kejelasan bahasa yang mudah dipahami warga melalui pembaruan templat standar tim, sehingga kebingungan berulang berhenti dari akarnya. Menyerahkan penulisan surat ke bagian hukum memang menjaga akurasi yuridis, tetapi tidak menyelesaikan masalah keterbacaan bagi masyarakat awam dan menambah beban unit lain.",
    tip: "Ubah umpan balik warga menjadi perbaikan standar dokumen kerja agar kualitas layanan langsung naik untuk seluruh pemohon berikutnya.",
  },
  {
    id: "tkp-pro-075",
    subPattern: "pengembangan-diri-dan-inisiatif-kualitas",
    difficulty: "sedang",
    prompt:
      "Anda memperhatikan setiap kali ada pegawai rotasi atau staf baru masuk ke unit pelayanan Anda, mereka memerlukan waktu hampir satu bulan hanya untuk menguasai alur aplikasi kerja karena belum ada buku panduan praktis lapangan. Langkah inisiatif kualitas terbaik adalah ...",
    options: [
      "Meminta staf baru lebih aktif mencatat sendiri setiap penjelasan lisan rekan senior selama minggu pertama agar cepat mandiri.",
      "Mengusulkan kepada bagian kepegawaian agar masa orientasi pegawai rotasi diperpanjang menjadi dua bulan sebelum diberi beban pelayanan.",
      "Menyediakan diri menjawab seluruh pertanyaan teknis pegawai baru setiap kali mereka mengalami kesulitan di meja kerja.",
      "Mengumpulkan beberapa berkas manual aplikasi lama dari pusat lalu menyarankan staf baru membacanya di waktu senggang.",
      "Menyusun panduan praktis langkah demi langkah lengkap dengan daftar kendala umum, mengujinya bersama staf baru, dan memperbaruinya sebagai aset pengetahuan unit."
    ],
    optionScores: [2, 1, 4, 3, 5],
    answer: "E",
    explanation:
      "Dokumentasi pengetahuan kerja dalam bentuk panduan praktis lapangan yang teruji bersama pengguna mempercepat proses adaptasi staf baru secara berkelanjutan tanpa bergantung pada ingatan perorangan. Selalu siap menjawab pertanyaan satu per satu memang menunjukkan sikap ramah menolong, namun tidak menciptakan sistem pembelajaran mandiri yang hemat waktu bagi tim.",
    tip: "Ubah pengetahuan operasional yang selama ini tersimpan di kepala pegawai menjadi panduan ringkas tertulis agar transfer keahlian berlangsung cepat.",
  },
  {
    id: "tkp-pro-076",
    subPattern: "pengembangan-diri-dan-inisiatif-kualitas",
    difficulty: "sedang",
    prompt:
      "Dalam rapat koordinasi lintas instansi, Anda menyadari banyak istilah analisis kebijakan publik dan indikator kinerja terbaru yang belum Anda kuasai sehingga Anda kesulitan menyampaikan masukan substantif selama forum berlangsung. Sikap pembelajar paling matang adalah ...",
    options: [
      "Mencatat istilah-istilah baru tersebut dengan cermat, meminta klarifikasi singkat usai rapat kepada narasumber terkait, lalu mendalaminya lewat literatur resmi untuk persiapan forum berikutnya.",
      "Tetap diam sepanjang rapat berlangsung agar ketidaktahuan Anda terhadap istilah baru tidak disadari oleh perwakilan instansi lain.",
      "Meminta pimpinan unit mengutus pegawai lain saja pada rapat koordinasi berikutnya yang dirasa lebih menguasai konsep analisis kebijakan.",
      "Membaca ringkasan definisi istilah tersebut sekilas lewat artikel populer di internet seusai rapat tanpa menelaah pedoman teknis resminya.",
      "Menggunakan istilah-istilah kebijakan terdahulu yang Anda kuasai saja sambil menganggap istilah baru hanyalah pergantian nama dari konsep lama."
    ],
    optionScores: [5, 3, 2, 4, 1],
    answer: "A",
    explanation:
      "Profesional pembelajar mengubah rasa kurang percaya diri menjadi agenda belajar terarah dengan mencatat poin kesenjangan, bertanya rendah hati kepada ahli, dan memperdalam referensi resmi agar kontribusi berikutnya jauh lebih tajam. Membaca definisi populer sekilas memang memberi gambaran umum, tetapi kurang memadai untuk penguasaan istilah kebijakan resmi dalam forum antarinstansi.",
    tip: "Saat tertinggal istilah teknis di forum resmi, catat kesenjangan tersebut dan jadikan target belajar terukur sebelum pertemuan selanjutnya.",
  },
  {
    id: "tkp-pro-077",
    subPattern: "pengembangan-diri-dan-inisiatif-kualitas",
    difficulty: "sedang",
    prompt:
      "Setiap akhir bulan, tim Anda menghabiskan hampir satu hari penuh menggabungkan puluhan lembar kerja laporan secara manual yang kerap menimbulkan salah salin angka, padahal perangkat lunak perkantoran berlisensi yang terpasang memiliki fitur validasi dan rumus otomatis. Inisiatif kualitas Anda adalah ...",
    options: [
      "Menambah jumlah staf pemeriksa manual pada akhir bulan agar setiap baris angka yang disalin dicek ganda oleh dua orang.",
      "Mempelajari serta merancang templat penggabungan rumus otomatis bervalidasi, menguji akurasinya bersama tim, dan mendokumentasikan cara pakainya agar beban kesalahan berkurang drastis.",
      "Menerapkan rumus otomatis hanya untuk berkas laporan bagian Anda sendiri tanpa membagikannya supaya tidak dianggap menggurui rekan senior.",
      "Mengusulkan kepada pimpinan untuk membeli aplikasi laporan berbayar baru dari pihak ketiga guna menggantikan proses kerja manual.",
      "Mempertahankan proses salin manual yang sudah berjalan bertahun-tahun karena khawatir perubahan rumus otomatis membingungkan sebagian rekan."
    ],
    optionScores: [3, 5, 4, 2, 1],
    answer: "B",
    explanation:
      "Inisiatif kualitas mengoptimalkan alat kerja yang sudah tersedia melalui perancangan templat bervalidasi otomatis, pengujian akurasi bersama, dan pendampingan tim agar efisiensi serta ketelitian meningkat kolektif. Menerapkan rumus otomatis hanya untuk pekerjaan sendiri memang meningkatkan mutu pribadi, tetapi melewatkan dampak perbaikan besar bagi seluruh tim.",
    tip: "Optimalkan fitur perangkat lunak resmi yang sudah dimiliki kantor melalui templat bervalidasi sebelum mengusulkan belanja sistem baru.",
  },
  {
    id: "tkp-pro-078",
    subPattern: "pengembangan-diri-dan-inisiatif-kualitas",
    difficulty: "sedang",
    prompt:
      "Selama enam bulan terakhir, warga yang mengajukan permohonan bantuan UMKM kerap menanyakan syarat dokumen yang sama berulang kali di loket informasi meskipun ketentuan dasar sebenarnya sudah tertempel di papan pengumuman dan situs web kantor. Langkah perbaikan mutu Anda adalah ...",
    options: [
      "Memasang tulisan peringatan lebih besar agar warga membaca papan pengumuman dengan teliti sebelum datang mengantre di loket informasi.",
      "Menjawab setiap pertanyaan warga dengan sabar di loket tanpa perlu mengubah tata letak atau isi informasi yang sudah dipasang.",
      "Menganalisis bagian informasi yang paling sering membingungkan warga, menyederhanakannya menjadi infografis alur visual yang jelas, serta mengajukan penempatan di titik strategis dan kanal digital.",
      "Menyusun daftar tanya jawab tertulis sepanjang beberapa halaman penuh untuk dibagikan kepada setiap warga yang datang ke kantor.",
      "Menyarankan kepada warga agar menghubungi pusat panggilan kementerian pusat apabila masih belum memahami ketentuan pada situs web."
    ],
    optionScores: [2, 3, 5, 4, 1],
    answer: "C",
    explanation:
      "Pertanyaan berulang menunjukkan celah keterbacaan media informasi, sehingga perbaikan kualitas dimulai dengan memetakan titik kebingungan warga dan merancang infografis ringkas yang mudah dicerna di titik layanan maupun daring. Membagikan bundel tanya jawab berhalaman-halaman memang menyediakan detail lengkap, tetapi tetap menyulitkan warga menangkap syarat utama secara cepat.",
    tip: "Ketika pertanyaan publik yang sama terus berulang, perbaiki desain informasi dari sudut pandang pemahaman warga, bukan sekadar menyuruh mereka membaca.",
  },
  {
    id: "tkp-pro-079",
    subPattern: "pengembangan-diri-dan-inisiatif-kualitas",
    difficulty: "sulit",
    prompt:
      "Anda ditunjuk menjadi penanggung jawab penjaminan mutu internal di unit kerja. Setelah indeks kepuasan masyarakat mencapai predikat sangat baik berturut-turut, sebagian rekan mengusulkan agar rapat tinjauan mutu triwulanan dihapuskan saja karena dianggap membuang waktu. Sikap profesional berorientasi mutu berkelanjutan adalah ...",
    options: [
      "Menyetujui penghapusan rapat tinjauan mutu triwulanan selama indeks kepuasan masyarakat tetap bertahan di kategori sangat baik.",
      "Tetap menyelenggarakan rapat tinjauan mutu dengan durasi panjang seperti biasa meskipun seluruh agenda hanya mengulang pembacaan angka capaian lama.",
      "Mengganti rapat tinjauan mutu dengan pengisian kuesioner singkat setahun sekali agar tidak mengganggu rutinitas pelayanan harian pegawai.",
      "Menjelaskan pentingnya perbaikan berkelanjutan untuk mencegah rasa cepat puas, lalu menyederhanakan format rapat tinjauan mutu menjadi forum ringkas berbasis data anomali, risiko baru, dan ide inovasi.",
      "Menyerahkan keputusan penghapusan forum mutu sepenuhnya kepada pemungutan suara mayoritas staf di unit kerja."
    ],
    optionScores: [1, 3, 2, 5, 4],
    answer: "D",
    explanation:
      "Budaya mutu unggul tidak berhenti saat angka capaian sudah tinggi, melainkan mempertahankan mekanisme evaluasi secara adaptif agar relevan, ringkas, dan fokus mendeteksi potensi risiko baru serta inovasi. Menyerahkan standar pengendalian mutu kepada pemungutan suara mayoritas memang terkesan demokratis, tetapi berisiko mengorbankan fungsi pengawasan kualitas jangka panjang demi kenyamanan jangka pendek.",
    tip: "Capaian mutu tinggi justru memerlukan forum tinjauan yang lebih fokus pada deteksi dini risiko dan inovasi agar organisasi tidak terjebak rasa puas diri.",
  },
  {
    id: "tkp-pro-080",
    subPattern: "pengembangan-diri-dan-inisiatif-kualitas",
    difficulty: "sulit",
    prompt:
      "Sepulang mengikuti pelatihan kepemimpinan dasar, Anda mengamati bahwa kelancaran proses verifikasi khusus di unit Anda masih sangat bergantung pada satu orang pegawai senior sehingga pekerjaan langsung macet setiap kali beliau cuti atau berhalangan hadir. Inisiatif penguatan sistem dan kapasitas tim paling visioner adalah ...",
    options: [
      "Meminta pegawai senior tersebut menunda jadwal cuti pada masa-masa sibuk pelayanan agar alur verifikasi khusus tidak pernah terhenti.",
      "Mempelajari proses verifikasi khusus tersebut untuk diri Anda sendiri secara diam-diam sehingga suatu saat Anda dapat menggantikannya.",
      "Mengusulkan kepada pimpinan agar kewenangan verifikasi khusus tersebut dialihkan ke unit lain yang jumlah personelnya lebih banyak.",
      "Mengajak pegawai senior tersebut membuat daftar kontak pribadinya agar tim tetap bisa menelepon beliau kapan saja saat ada berkas masuk.",
      "Menginisiasi program transfer pengetahuan terstruktur, mendokumentasikan prosedur teknis verifikasi, dan mengusulkan pelatihan silang antarpegawai agar unit memiliki kader cadangan yang andal."
    ],
    optionScores: [2, 4, 1, 3, 5],
    answer: "E",
    explanation:
      "Ketahanan kualitas organisasi menuntut penghapusan ketergantungan pada satu individu melalui dokumentasi pengetahuan kritis, transfer keahlian terstruktur, dan pelatihan silang antarstaf. Menguasai keahlian itu sendirian secara diam-diam memang meningkatkan nilai tawar pribadi, tetapi hanya memindahkan risiko ketergantungan dari satu orang ke orang lain tanpa memperkuat ketahanan unit.",
    tip: "Hilangkan risiko ketergantungan tunggal dalam unit kerja lewat dokumentasi prosedur dan pelatihan silang agar layanan selalu terjaga.",
  }
];
