import type { QuestionDraft } from "@/modules/question-bank/domain/question";

export const integritasBatch2Drafts: readonly QuestionDraft[] = [
  {
    id: "twk-int-041",
    subPattern: "antikorupsi-gratifikasi-dan-suap",
    difficulty: "mudah",
    prompt:
      "Seorang pegawai negeri menerima bingkisan bernilai ekonomis tinggi dari mitra kerja yang sedang mengurus perpanjangan kontrak layanan di unit kerjanya, lalu ia memilih melaporkan penerimaan tersebut melalui Unit Pengendalian Gratifikasi (UPG) instansi sebelum meneruskannya ke KPK. Ketentuan tenggat waktu pelaporan agar penerima terbebas dari ancaman pidana gratifikasi menurut regulasi yang berlaku adalah ...",
    options: [
      "Laporan cukup disampaikan kapan saja menjelang akhir tahun anggaran selama barangnya belum dipakai",
      "Laporan wajib disampaikan kepada KPK paling lambat 30 hari kerja sejak tanggal gratifikasi diterima atau melalui UPG sesuai mekanisme berjenjang yang tetap memenuhi batas waktu tersebut",
      "Laporan hanya diwajibkan apabila nilai bingkisan melebihi lima juta rupiah dan berasal dari perusahaan swasta asing",
      "Laporan dapat digantikan oleh berita acara penyerahan barang kepada koperasi pegawai dalam waktu 60 hari kalender",
      "Laporan tidak diperlukan selama pegawai tersebut langsung menyumbangkan seluruh isi bingkisan ke panti asuhan setempat",
    ],
    answer: "B",
    explanation:
      "Pasal 12C UU No. 20 Tahun 2001 menetapkan bahwa ancaman pidana gratifikasi pada Pasal 12B tidak berlaku apabila penerima melaporkannya kepada KPK paling lambat 30 hari kerja terhitung sejak tanggal penerimaan (atau melalui UPG instansi dengan batas waktu internal yang lebih ringkas agar tetap diteruskan ke KPK sebelum 30 hari kerja). Anggapan bahwa menyumbangkan langsung barang ke panti asuhan menggugurkan kewajiban lapor adalah keliru karena penerima tetap tidak berwenang menentukan status kepemilikan barang sebelum ditetapkan secara resmi oleh KPK.",
    tip: "Fokus pada batas waktu hukum Pasal 12C UU Tipikor dan otoritas penetapan status kepemilikan barang gratifikasi.",
  },
  {
    id: "twk-int-042",
    subPattern: "antikorupsi-gratifikasi-dan-suap",
    difficulty: "mudah",
    prompt:
      "Dalam pengadaan sarana laboratorium di sebuah politeknik negeri, pejabat pengadaan menyepakati pemberian komisi (kickback) sebesar 8 persen dari nilai kontrak dengan penyedia setelah spesifikasi harga perkiraan sendiri dinaikkan secara tidak wajar. Bentuk penyimpangan yang terjadi pada kasus tersebut termasuk tindak pidana korupsi berupa ...",
    options: [
      "Gratifikasi pasif tanpa unsur niat karena pembayarannya dilakukan sesudah proyek selesai dikerjakan",
      "Pelanggaran tata tertib administrasi ringan yang cukup diselesaikan melalui teguran lisan pimpinan unit",
      "Diskresi keuangan darurat untuk menutup biaya operasional panitia pengadaan di akhir tahun anggaran",
      "Penyuapan dan persekongkolan pengadaan yang menimbulkan kerugian keuangan negara melalui mark-up harga kontrak",
      "Pemanfaatan efisiensi anggaran sah karena penyedia memberikan potongan harga pribadi kepada pejabat pembuat komitmen",
    ],
    answer: "D",
    explanation:
      "Kesepakatan komisi (kickback) antara pejabat pengadaan dan penyedia yang diikuti penggelembungan harga (mark-up) mengandung pertemuan kehendak transaksional (suap) sekaligus merugikan keuangan negara sebagaimana diatur dalam UU Pemberantasan Tindak Pidana Korupsi. Dalih bahwa hal itu sekadar gratifikasi pasif setelah proyek selesai keliru karena terdapat kesepakatan timbal balik sebelumnya serta rekayasa harga kontrak sejak awal.",
    tip: "Perhatikan adanya kesepakatan transaksional (kickback) dan rekayasa harga (mark-up) yang menggeser perkara dari pelanggaran administratif menjadi pidana korupsi.",
  },
  {
    id: "twk-int-043",
    subPattern: "antikorupsi-gratifikasi-dan-suap",
    difficulty: "sedang",
    prompt:
      "Usai menjadi narasumber resmi mewakili instansi dalam forum kerja sama antarnegara, seorang pejabat struktural menerima cenderamata berupa jam tangan mewah senilai Rp18.000.000 dari delegasi mitra asing yang tidak dapat ditolak di panggung karena alasan protokol diplomatik. Setelah melaporkannya kepada KPK dalam tenggat resmi, status kepemilikan barang tersebut yang paling tepat secara hukum adalah ...",
    options: [
      "KPK akan memverifikasi dan menetapkan status kepemilikan barang tersebut, yang sangat berpotensi ditetapkan menjadi milik negara karena nilai dan keterkaitannya dengan jabatan",
      "Barang tersebut otomatis menjadi milik pribadi pejabat penerima karena pemberian dilakukan secara terbuka di hadapan peserta forum internasional",
      "Pejabat penerima berhak melelang barang tersebut secara mandiri lalu membagi hasilnya sebagai insentif tim protokol instansi",
      "Cenderamata dari delegasi asing sepenuhnya dikecualikan dari objek pelaporan gratifikasi selama pejabat tidak meminta imbalan balasan",
      "Instansi asal pejabat dapat langsung menyimpan barang tersebut di ruang kerja pimpinan tanpa perlu mengirimkan formulir pelaporan ke KPK",
    ],
    answer: "A",
    explanation:
      "Berdasarkan UU No. 20 Tahun 2001 Pasal 12C ayat (2) dan peraturan KPK tentang pengendalian gratifikasi, setiap gratifikasi yang berhubungan dengan jabatan dan tidak dapat ditolak karena alasan protokol wajib dilaporkan untuk ditetapkan status kepemilikannya oleh KPK (dapat ditetapkan menjadi milik negara atau milik penerima sesuai ketentuan). Anggapan bahwa cenderamata terbuka dari tamu asing otomatis menjadi hak milik pribadi keliru karena nilai mewah Rp18 juta melampaui batas kewajaran cenderamata kedinasan dan tetap berkaitan erat dengan jabatan.",
    tip: "Bedakan kewajiban protokol untuk tidak menolak di tempat dengan prosedur hukum verifikasi kepemilikan barang oleh KPK.",
  },
  {
    id: "twk-int-044",
    subPattern: "antikorupsi-gratifikasi-dan-suap",
    difficulty: "sedang",
    prompt:
      "Menjelang resepsi pernikahan anaknya, seorang kepala dinas pekerjaan umum menerima kiriman karangan bunga mewah dan transfer uang puluhan juta rupiah ke rekening pribadinya dari sejumlah kontraktor yang kerap mengikuti tender infrastruktur daerahnya. Sikap berintegritas yang paling tepat dalam menyikapi penerimaan dari mitra kerja pada acara keluarga tersebut adalah ...",
    options: [
      "Menerima seluruh transfer tersebut secara penuh karena acara pernikahan merupakan ranah sosial adat yang terpisah dari urusan dinas",
      "Mengembalikan seluruh dana tersebut secara diam-diam tanpa pencatatan apa pun agar nama para kontraktor tidak tercatat di inspektorat",
      "Meminta staf dinas memilah hanya sumbangan di bawah satu juta rupiah per kontraktor untuk disimpan sebagai kas pribadi keluarga",
      "Mengalihkan seluruh uang kiriman kontraktor ke rekening bendahara kegiatan sosial dinas sebagai bentuk dana abadi pegawai",
      "Menolak atau mengembalikan pemberian dari pihak yang memiliki konflik kepentingan jabatan, serta melaporkan penerimaan yang tidak dapat dicegah kepada UPG atau KPK sesuai ketentuan batas nilai wajar",
    ],
    answer: "E",
    explanation:
      "Dalam pedoman pengendalian gratifikasi KPK, sumbangan pernikahan memang dapat dikecualikan dari pelaporan apabila berasal dari kerabat/tamu tanpa konflik kepentingan dan dalam batas kewajaran adat; namun penerimaan bernilai besar dari kontraktor atau pihak yang berkepentingan dengan jabatan tetap merupakan gratifikasi berisiko konflik kepentingan yang wajib ditolak, dikembalikan, atau dilaporkan ke UPG/KPK. Alasan bahwa resepsi merupakan ranah adat pribadi tidak membebaskan pejabat publik ketika pemberinya memiliki relasi proyek dengan jabatannya.",
    tip: "Uji setiap pemberian pada acara keluarga terhadap relasi kuasa pemberi (apakah vendor/mitra binaan) dan batas kewajarannya.",
  },
  {
    id: "twk-int-045",
    subPattern: "antikorupsi-gratifikasi-dan-suap",
    difficulty: "sedang",
    prompt:
      "Sebuah dokumen izin usaha pertanahan telah selesai diterbitkan tepat waktu sesuai standar pelayanan tanpa ada permintaan biaya tambahan dari petugas verifikasi. Tiga hari kemudian, pemohon datang kembali menyerahkan amplop berisi uang Rp2.500.000 sambil berkata bahwa pemberian itu murni ucapan syukur dan tanda terima kasih tanpa ikatan apa pun. Penilaian integritas yang tepat atas peristiwa tersebut adalah ...",
    options: [
      "Pemberian tersebut sah diterima petugas karena seluruh proses penerbitan izin telah tuntas dan tidak memengaruhi keputusan sebelumnya",
      "Petugas boleh menerima uang tersebut sepanjang pembagiannya dicatat merata untuk seluruh anggota tim loket sebagai uang lembur",
      "Uang terima kasih pascapelayanan tetap tergolong gratifikasi yang berhubungan dengan jabatan sehingga wajib ditolak secara santun atau dilaporkan bila terlanjur ditinggalkan",
      "Gratifikasi hanya berlaku apabila uang diberikan sebelum berkas diperiksa, sehingga pemberian sesudah izin terbit termasuk hadiah sosial biasa",
      "Petugas cukup mengembalikan separuh nominal uang agar pemohon tidak merasa niat baiknya ditolak mentah-mentah oleh instansi",
    ],
    answer: "C",
    explanation:
      "Penerimaan uang terima kasih setelah layanan selesai tetap dilarang dan masuk kategori gratifikasi yang berhubungan dengan jabatan (tanam budi), karena dapat menciptakan ketergantungan psikologis dan menggerus netralitas layanan di masa mendatang. Anggapan bahwa pemberian pascakeputusan tidak memengaruhi objektivitas gagal melihat bahwa budaya 'uang terima kasih' menjadi pintu masuk normalisasi pungutan liar dan perlakuan istimewa pada pengurusan berikutnya.",
    tip: "Ingat prinsip layanan publik: hak warga mendapat layanan tepat waktu dibayar oleh gaji negara, bukan uang terima kasih setelah berkas terbit.",
  },
  {
    id: "twk-int-046",
    subPattern: "antikorupsi-gratifikasi-dan-suap",
    difficulty: "sedang",
    prompt:
      "Untuk menghindari prosedur tender terbuka pada pengadaan perangkat komputer senilai total Rp600.000.000, seorang pejabat pembuat komitmen memecah paket pekerjaan menjadi tiga kontrak pengadaan langsung masing-masing senilai Rp200.000.000 kepada perusahaan berbeda yang masih dikendalikan oleh satu pemilik manfaat yang sama, disertai janji potongan biaya perjalanan pribadi. Praktik ini merupakan pelanggaran integritas pengadaan karena ...",
    options: [
      "Penggunaan tiga perusahaan berbeda membuat jumlah komputer yang diterima kantor berisiko memiliki merek yang tidak seragam",
      "Pemecahan paket untuk menghindari pelelangan terbuka serta penerimaan fasilitas pribadi dari pemilik manfaat merupakan rekayasa pengadaan yang melanggar prinsip persaingan sehat dan antikorupsi",
      "Nilai kontrak di bawah lima ratus juta rupiah seharusnya hanya boleh dibelanjakan pada triwulan terakhir tahun anggaran berjalan",
      "Pejabat pembuat komitmen tidak berwenang menandatangani lebih dari dua kontrak pengadaan barang dalam satu semester yang sama",
      "Perusahaan penyedia seharusnya terlebih dahulu meminta persetujuan tertulis dari seluruh staf teknologi informasi sebelum ikut pengadaan langsung",
    ],
    answer: "B",
    explanation:
      "Pemecahan paket (split package) dengan sengaja untuk menghindari ketentuan batas nilai tender terbuka dilarang tegas dalam peraturan pengadaan barang/jasa pemerintah, terlebih ketika disertai afiliasi pemilik manfaat tunggal dan janji imbalan pribadi. Kekhawatiran soal perbedaan merek komputer hanyalah persoalan teknis minor yang sama sekali tidak menyentuh inti penyimpangan hukum berupa rekayasa metode pemilihan penyedia dan konflik kepentingan.",
    tip: "Kenali modus pemecahan paket (split procurement) untuk menghindari lelang terbuka sebagai indikator kuat penyimpangan pengadaan.",
  },
  {
    id: "twk-int-047",
    subPattern: "antikorupsi-gratifikasi-dan-suap",
    difficulty: "sulit",
    prompt:
      "Seorang pejabat penentu rekomendasi kesesuaian tata ruang wilayah ditawari pembelian dua unit rumah oleh pengembang properti dengan potongan harga khusus sebesar 45 persen dari harga pasar yang tidak diberikan kepada pembeli umum, tepat ketika perusahaan pengembang tersebut mengajukan permohonan perubahan peruntukan lahan. Analisis hukum antikorupsi yang paling akurat atas penawaran tersebut adalah ...",
    options: [
      "Potongan harga bukan merupakan gratifikasi karena pejabat tetap mengeluarkan uang pribadi untuk membayar sisa harga rumah melalui akad kredit resmi",
      "Transaksi tersebut tergolong promosi komersial wajar di sektor properti selama akta jual beli dibuat di hadapan notaris berizin",
      "Selisih diskon tidak perlu dilaporkan karena belum terjadi pemindahan hak milik sebelum sertifikat bangunan selesai dipecah",
      "Potongan harga tidak wajar di bawah nilai pasar dari pihak yang memiliki kepentingan perizinan merupakan bentuk gratifikasi terselubung yang wajib ditolak",
      "Pejabat tetap boleh membeli satu unit saja dengan harga diskon penuh agar tidak terlihat melakukan akumulasi aset yang mencolok",
    ],
    answer: "D",
    explanation:
      "Pasal 12B UU No. 20 Tahun 2001 mendefinisikan gratifikasi dalam arti luas, mencakup uang, barang, rabat (diskon), komisi, pinjaman tanpa bunga, tiket perjalanan, hingga fasilitas lainnya. Rabat 45 persen yang eksklusif diberikan kepada pejabat penilai izin tata ruang merupakan suap/gratifikasi terselubung. Argumen bahwa transaksi sah karena tetap membayar sisa harga lewat akad kredit notaris keliru karena nilai keuntungan ekonomi dari diskon istimewa tersebut berkaitan langsung dengan kewenangan jabatannya.",
    tip: "Periksa definisi luas gratifikasi dalam penjelasan Pasal 12B UU Tipikor yang secara eksplisit mencakup rabat (diskon) dan fasilitas khusus.",
  },
  {
    id: "twk-int-048",
    subPattern: "antikorupsi-gratifikasi-dan-suap",
    difficulty: "sulit",
    prompt:
      "Sebuah pemerintah kota mendapati bahwa kampanye poster antikorupsi dan pakta integritas tahunan belum berhasil menekan praktik suap perizinan di lapangan. Jika ditinjau melalui kerangka pencegahan korupsi sistemik (memutus unsur opportunity dan meningkatkan deteksi), kombinasi kebijakan yang paling efektif untuk membenahi tata kelola tersebut adalah ...",
    options: [
      "Digitalisasi layanan perizinan tanpa tatap muka disertai pelacakan progres terbuka, rotasi berkala petugas verifikasi, serta kewajiban pelaporan LHKPN dan pengendalian gratifikasi yang diawasi ketat",
      "Menaikkan tarif resmi seluruh jenis izin usaha hingga tiga kali lipat agar hanya pemohon bermodal besar yang datang ke loket layanan",
      "Menambah jumlah petugas keamanan berseragam di ruang tunggu loket untuk mengawasi percakapan antara pemohon izin dan pegawai",
      "Menghapus kewajiban audit internal pada unit perizinan agar pegawai bekerja lebih santai tanpa tekanan pemeriksaan administrasi",
      "Mewajibkan seluruh pemohon izin menandatangani surat pernyataan tidak akan melaporkan pegawai apabila berkasnya disetujui cepat",
    ],
    answer: "A",
    explanation:
      "Pencegahan korupsi yang berkelanjutan menuntut pembenahan sistemik untuk menutup celah kesempatan (opportunity) dan memperbesar risiko terdeteksi, yaitu melalui layanan elektronik transparan tanpa pertemuan fisik (e-licensing), rotasi jabatan guna memutus jejaring kolusi, serta audit kewajaran harta (LHKPN) dan UPG. Penambahan penjagaan fisik di ruang tunggu tanpa membenahi transparansi alur berkas gagal menutup celah transaksi di luar kantor maupun manipulasi antrean digital.",
    tip: "Solusi antikorupsi berdaya guna tinggi selalu memadukan transparansi sistem digital (memutus opportunity) dan instrumen deteksi integritas.",
  },
  {
    id: "twk-int-049",
    subPattern: "konsistensi-kejujuran-dan-keteladanan",
    difficulty: "mudah",
    prompt:
      "Dalam penerapan sistem kerja fleksibel dari luar kantor (work from anywhere) bagi pegawai tertentu, seorang staf meminta rekannya memanipulasi aplikasi presensi berbasis koordinat GPS agar ia tercatat hadir tepat waktu di kantor saat sedang mengurus urusan pribadi. Sikap rekan kerja yang mencerminkan integritas kejujuran adalah ...",
    options: [
      "Membantu melakukan presensi sementara satu kali saja asalkan staf tersebut berjanji tidak mengulanginya pada pekan berikutnya",
      "Mengisi presensi atas nama rekannya sambil menyimpan bukti tangkapan layar agar suatu saat dapat dipakai sebagai alat tawar",
      "Menolak permintaan manipulasi presensi tersebut secara tegas namun sopan, serta mengingatkan pentingnya izin resmi apabila berhalangan hadir",
      "Mengabaikan permintaan tersebut lalu menyebarkan keluhan mengenai ketidakdisiplinan rekannya di grup pesan warga sekitar",
      "Melakukan presensi untuk rekannya asalkan seluruh pekerjaan hari itu digantikan lembur pada akhir pekan tanpa surat tugas",
    ],
    answer: "C",
    explanation:
      "Integritas berarti menjunjung kejujuran pada hal-hal harian termasuk pencatatan kehadiran dan kedisiplinan waktu kerja, serta menolak menjadi bagian dari pemalsuan data kepegawaian. Membantu manipulasi satu kali dengan dalih solidaritas atau menjaga hubungan baik tetap melanggar disiplin ASN dan merusak budaya akuntabilitas bersama.",
    tip: "Tolak segala bentuk manipulasi presensi atau data kehadiran meski diminta atas nama solidaritas rekan kerja.",
  },
  {
    id: "twk-int-050",
    subPattern: "konsistensi-kejujuran-dan-keteladanan",
    difficulty: "mudah",
    prompt:
      "Pada evaluasi capaian kinerja triwulanan, seorang kepala subbagian menyarankan agar angka persentase penyelesaian pengaduan masyarakat dinaikkan dari 72 persen menjadi 95 persen supaya unit kerjanya tetap memperoleh nilai maksimal tunjangan kinerja. Tindakan staf pengelola data yang menjunjung tinggi nilai kejujuran adalah ...",
    options: [
      "Mengubah angka menjadi 95 persen sesuai arahan lisan atasan karena kenaikan tunjangan berdampak pada kesejahteraan semua pegawai",
      "Menuliskan angka 95 persen di halaman ringkasan eksekutif sementara angka asli 72 persen disembunyikan pada lampiran paling belakang",
      "Mengganti definisi pengaduan selesai menjadi pengaduan yang baru dibaca agar perhitungannya otomatis mendekati target 95 persen",
      "Menunda pengiriman laporan triwulanan hingga bulan berikutnya agar angka pengaduan yang masuk tidak perlu dimasukkan ke periode berjalan",
      "Tetap menyajikan angka faktual 72 persen disertai analisis penyebab kendala penyelesaian dan rencana perbaikan layanan pada triwulan berikutnya",
    ],
    answer: "E",
    explanation:
      "Kejujuran pelaporan kinerja memastikan pimpinan memperoleh gambaran objektif untuk mengambil kebijakan perbaikan layanan publik, bukan sekadar mengejar angka rapor dan tunjangan kinerja secara semu. Mengubah definisi indikator atau menyembunyikan angka asli di lampiran merupakan manipulasi data yang menyesatkan pengambilan keputusan negara.",
    tip: "Data kinerja publik harus mencerminkan realitas lapangan secara jujur agar perbaikan layanan tepat sasaran.",
  },
  {
    id: "twk-int-051",
    subPattern: "konsistensi-kejujuran-dan-keteladanan",
    difficulty: "sedang",
    prompt:
      "Seorang pegawai mendapat surat tugas perjalanan dinas luar kota selama lima hari penuh untuk kegiatan pendampingan teknis. Karena urusan selesai lebih cepat, ia pulang pada hari ketiga sore, namun bendahara menyarankan agar bukti penginapan tetap dicetak lima hari supaya sisa uang harian tidak perlu dikembalikan ke kas negara. Keputusan berintegritas pegawai tersebut adalah ...",
    options: [
      "Mencairkan hak uang harian dan biaya penginapan untuk lima hari penuh karena surat tugas awal memang diterbitkan lima hari",
      "Melaporkan kepulangan lebih awal secara jujur sesuai tanggal tiket dan kuitansi penginapan riil, serta mengembalikan kelebihan uang harian ke kas negara",
      "Menggunakan sisa dua hari uang penginapan untuk membelikan oleh-oleh khas daerah bagi seluruh staf kantor agar tidak menikmati sendiri",
      "Tetap menginap dua hari tambahan di hotel tanpa agenda dinas apa pun supaya kuitansi lima harinya sah secara administratif",
      "Menitipkan selisih biaya dua hari penginapan kepada bendahara sebagai dana cadangan rapat koordinasi internal kantor",
    ],
    answer: "B",
    explanation:
      "Prinsip pertanggungjawaban perjalanan dinas berbasis pengeluaran riil (at cost) dan pelaksanaan tugas nyata (riil di lapangan). Mengklaim hari tugas atau hotel yang tidak dijalani termasuk perjalanan dinas fiktif sebagian. Alasan bahwa surat tugas awal berdurasi lima hari tidak membenarkan pencairan penuh apabila tugas selesai pada hari ketiga, karena kelebihan anggaran wajib dikembalikan ke kas negara.",
    tip: "Pertanggungjawaban perjalanan dinas harus sesuai fakta pelaksanaan riil di lapangan, bukan sekadar durasi pada surat tugas awal.",
  },
  {
    id: "twk-int-052",
    subPattern: "konsistensi-kejujuran-dan-keteladanan",
    difficulty: "sedang",
    prompt:
      "Seorang camat baru menerima pesan pribadi dari tokoh berpengaruh setempat yang meminta agar berkas rekomendasi bantuan alat pertanian milik kerabatnya diloloskan tanpa verifikasi lapangan seperti pemohon warga lainnya. Sikap keteladanan integritas pemimpin wilayah yang paling tepat dalam menghadapi intervensi tersebut adalah ...",
    options: [
      "Menolak permintaan tersebut secara santun namun tegas, menjelaskan standar verifikasi objektif yang berlaku sama bagi seluruh warga, serta mendokumentasikan proses seleksi secara terbuka",
      "Meloloskan berkas kerabat tokoh tersebut sekali ini saja demi menjaga stabilitas hubungan sosial politik di kecamatan pada masa awal jabatan",
      "Menyerahkan keputusan pelolosan berkas kepada sekretaris camat secara lisan agar nama camat tidak tercatat langsung dalam berita acara",
      "Menambah kuota penerima bantuan secara sepihak tanpa persetujuan dinas terkait supaya tokoh berpengaruh dan warga lain sama-sama kebagian",
      "Meminta tokoh tersebut mengirim surat permohonan resmi berstempel organisasi kemasyarakatan agar perlakuan khusus tampak legal",
    ],
    answer: "A",
    explanation:
      "Keteladanan kepemimpinan publik terlihat dari keberanian menjaga kesetaraan warga di depan aturan (non-diskriminasi) meskipun menghadapi tekanan figur berpengaruh. Memenuhi permintaan dengan alasan menjaga stabilitas politik lokal justru meruntuhkan kepercayaan warga lain dan melembagakan praktik favoritisme sejak awal masa jabatan.",
    tip: "Pemimpin berintegritas menerapkan standar verifikasi yang adil dan setara tanpa tunduk pada tekanan figur berpengaruh.",
  },
  {
    id: "twk-int-053",
    subPattern: "konsistensi-kejujuran-dan-keteladanan",
    difficulty: "sedang",
    prompt:
      "Saat bertugas mendampingi kunjungan kerja di luar daerah menggunakan Kartu Kredit Pemerintah (KKP), seorang bendahara pembantu secara tidak sengaja menggesek kartu dinas untuk membayar tagihan makan malam pribadi bersama keluarganya senilai Rp480.000 karena kemasan kartunya mirip kartu pribadinya. Tindakan konsistensi integritas keuangan yang paling tepat adalah ...",
    options: [
      "Memasukkan nota makan malam tersebut ke dalam berkas jamuan tamu dinas karena nominalnya relatif kecil dibanding pagu anggaran",
      "Membiarkan transaksi tersebut terbawa dalam tagihan bulanan kantor asalkan bulan depan ia membelikan perlengkapan tulis kantor dengan nilai setara",
      "Meminta kasir restoran menerbitkan ulang struk transaksi dengan mengubah nama menu menjadi paket rapat teknis instansi",
      "Segera mengakui kekeliruan secara tertulis kepada pejabat pembuat komitmen/bendahara pengeluaran dan menyetorkan pengembalian dana penuh sesuai prosedur",
      "Menutupi selisih tagihan kartu dengan cara memotong uang saku harian peserta kunjungan kerja lainnya secara diam-diam",
    ],
    answer: "D",
    explanation:
      "Kejujuran dalam pengelolaan keuangan negara menuntut pemisahan mutlak antara belanja dinas dan pengeluaran pribadi. Ketika kekeliruan teknis terjadi, pengakuan terbuka disertai penyetoran pengembalian dana secara resmi menjaga akuntabilitas pembukuan dan membuktikan iktikad baik. Mengompensasi dengan membelikan ATK sendiri di bulan lain tidak menyelesaikan kesalahan bukti transaksi pada pos belanja yang salah.",
    tip: "Setiap pemakaian tak sengaja dana/kartu dinas untuk keperluan pribadi wajib diakui terbuka dan disetor kembali sesuai mekanisme akuntansi negara.",
  },
  {
    id: "twk-int-054",
    subPattern: "konsistensi-kejujuran-dan-keteladanan",
    difficulty: "sedang",
    prompt:
      "Di unit layanan pengesahan dokumen, seorang CPNS mendapati beberapa rekan senior masih terbiasa menerima 'uang kopi' dari biro jasa pengurusan dokumen yang datang setiap pagi, meski papan pengumuman sudah mencantumkan larangan pungutan liar. Langkah membangun keteladanan integritas tanpa memicu konflik destruktif yang paling tepat adalah ...",
    options: [
      "Ikut menerima pemberian tersebut lalu mengumpulkannya di laci meja kerja sebelum menentukan sikap setelah status CPNS berubah menjadi PNS",
      "Mengunci pintu ruangan layanan setiap kali biro jasa datang sambil menegur rekan senior dengan suara keras di hadapan pemohon layanan",
      "Menolak tegas segala pemberian pada meja layanannya sendiri, melayani seluruh pemohon sesuai urutan antrean tanpa pandang bulu, serta menyampaikan masukan berbasis aturan secara santun kepada atasan langsung",
      "Membiarkan kebiasaan rekan senior berlangsung terus tanpa sikap apa pun karena merasa posisi CPNS tidak berhak memberi teladan di ruangan",
      "Mengharuskan biro jasa menyerahkan uang kopi dalam bentuk voucer belanja elektronik agar tidak terlihat sebagai uang tunai di meja loket",
    ],
    answer: "C",
    explanation:
      "Perubahan budaya integritas dimulai dari konsistensi sikap diri sendiri (leading by example) dalam menolak pemberian apa pun dan menegakkan layanan berbasis antrean, dibarengi penyampaian laporan atau masukan secara konstruktif melalui mekanisme pengawasan pimpinan. Menunggu status PNS penuh terlebih dahulu sebelum bersikap jujur justru melatih kompromi moral sejak dini.",
    tip: "Konsistensi moral tidak bergantung pada senioritas jabatan; mulai dari ketegasan diri sendiri dan eskalasi santun sesuai prosedur.",
  },
  {
    id: "twk-int-055",
    subPattern: "konsistensi-kejujuran-dan-keteladanan",
    difficulty: "sulit",
    prompt:
      "Pada tanggal 28 Desember, pembangunan fisik gedung arsip baru mencapai progres riil 75 persen, sementara kontrak berakhir pada akhir tahun anggaran. Pejabat atasan memerintahkan tim pemeriksa hasil pekerjaan menandatangani Berita Acara Serah Terima (BAST) 100 persen agar anggaran tidak hangus dan serapan dinas terlihat tinggi, dengan janji kontraktor pasti menyelesaikan sisa 25 persen pada Januari. Sikap berintegritas tim pemeriksa adalah ...",
    options: [
      "Menandatangani BAST 100 persen asalkan kontraktor menyerahkan jaminan cek pribadi senilai sisa pekerjaan kepada pimpinan dinas",
      "Mengubah tanggal penandatanganan menjadi bulan November agar pemeriksa keuangan tidak mencurigai keterlambatan akhir tahun",
      "Menyerahkan seluruh keputusan kepada kontraktor untuk membuat dokumen BAST mandiri tanpa tanda tangan tim pemeriksa teknis",
      "Tetap menandatangani BAST penuh asalkan sisa pekerjaan 25 persen tersebut hanya berupa pengecatan dan pemasangan penyejuk udara",
      "Menolak menerbitkan BAST 100 persen karena tidak sesuai fakta progres fisik lapangan, mencatat progres riil 75 persen secara objektif, dan menempuh mekanisme adendum atau penyelesaian kontrak sesuai regulasi pengadaan",
    ],
    answer: "E",
    explanation:
      "Menandatangani BAST 100 persen untuk pekerjaan yang baru selesai 75 persen merupakan pemalsuan dokumen pertanggungjawaban keuangan negara dan berisiko pidana korupsi apabila kontraktor gagal menyelesaikan sisa pekerjaan atau timbul kelebihan bayar. Opsi menyerahkan jaminan cek pribadi tetap melanggar hukum karena jaminan formal pengadaan negara harus mengikuti ketentuan perbendaharaan resmi (seperti jaminan bank/denda keterlambatan/mekanisme pemberian kesempatan penyelesaian pekerjaan yang sah), bukan kesepakatan informal.",
    tip: "Berita Acara Serah Terima (BAST) wajib mencerminkan kondisi fisik riil; pemalsuan progres demi mengejar serapan akhir tahun adalah pelanggaran berat.",
  },
  {
    id: "twk-int-056",
    subPattern: "konsistensi-kejujuran-dan-keteladanan",
    difficulty: "sulit",
    prompt:
      "Mengapa pembiaran atas penyimpangan integritas skala kecil di lingkungan birokrasi—seperti memakai kertas dan pencetak kantor untuk usaha sampingan keluarga atau melebihkan klaim jam lembur setengah jam—sering disebut sebagai efek lereng licin (slippery slope) yang membahayakan tata kelola pemerintahan?",
    options: [
      "Karena kebiasaan tersebut menghemat biaya operasional rumah tangga pegawai sehingga menurunkan tingkat konsumsi ekonomi daerah secara makro",
      "Karena pelanggaran kecil yang dianggap lumrah dan tidak ditegur perlahan menumpulkan kepekaan moral, membentuk pembenaran kolektif, dan membuka jalan menuju korupsi bernilai besar",
      "Karena aturan hukum kepegawaian di Indonesia hanya mengatur sanksi pidana untuk penggelapan kertas kantor tanpa sanksi bagi korupsi anggaran proyek",
      "Karena penggunaan peralatan tulis kantor di luar jam dinas langsung menghentikan seluruh layanan publik berbasis elektronik secara teknis",
      "Karena pegawai yang melakukan penyimpangan kecil otomatis harus dipindahkan ke instansi pengawasan keuangan tanpa melalui proses seleksi",
    ],
    answer: "B",
    explanation:
      "Teori slippery slope dalam etika publik menjelaskan bahwa toleransi terhadap pelanggaran kecil memicu normalisasi penyimpangan (rasionalisasi 'semua orang melakukannya') dan menurunkan standar moral organisasi secara bertahap hingga korupsi besar terasa wajar. Anggapan bahwa kerugian kecil tidak berdampak signifikan mengabaikan kerusakan budaya kontrol dan kepekaan etis jangka panjang.",
    tip: "Pahami hubungan antara toleransi pelanggaran kecil yang dibiarkan dengan pengikisan standar etika menuju pelanggaran besar.",
  },
  {
    id: "twk-int-057",
    subPattern: "kode-etik-dan-nilai-dasar-asn",
    difficulty: "mudah",
    prompt:
      "Dalam panduan perilaku nilai dasar (core values) ASN BerAKHLAK berdasarkan UU Nomor 20 Tahun 2023, pemaknaan nilai 'Loyal' yang tepat dan berintegritas ketika seorang pegawai menghadapi perbedaan antara perintah informal pimpinan dan ketentuan hukum yang berlaku adalah ...",
    options: [
      "Kesetiaan ASN berakar pada ideologi Pancasila, UUD 1945, NKRI, pemerintahan sah, serta menjaga nama baik instansi dan rahasia negara tanpa membenarkan perintah yang melanggar hukum",
      "Kepatuhan mutlak untuk menuruti seluruh instruksi lisan atasan langsung sekalipun bertentangan dengan peraturan perundang-undangan",
      "Kesediaan membela kepentingan kelompok politik pimpinan unit kerja agar karier pegawai memperoleh promosi cepat",
      "Kewajiban menyembunyikan temuan pelanggaran hukum pimpinan di hadapan tim pemeriksa eksternal atas nama solidaritas korps",
      "Komitmen menolak bekerja sama dengan kementerian atau daerah lain apabila dipimpin oleh pejabat dari latar belakang berbeda",
    ],
    answer: "A",
    explanation:
      "Nilai Loyal dalam BerAKHLAK menuntut komitmen memegang teguh Pancasila, UUD 1945, setia kepada NKRI serta pemerintahan yang sah, menjaga nama baik sesama ASN/pimpinan/instansi/negara, dan menjaga rahasia jabatan dan negara. Loyalitas tersebut bukan loyalitas buta kepada individu atasan yang menyuruh pelanggaran hukum, melainkan kesetiaan pada konstitusi dan kepentingan bangsa.",
    tip: "Bedakan loyalitas konstitusional kepada negara dan aturan hukum dengan kepatuhan buta pada perintah ilegal.",
  },
  {
    id: "twk-int-058",
    subPattern: "kode-etik-dan-nilai-dasar-asn",
    difficulty: "mudah",
    prompt:
      "Di sebuah kantor pelayanan terpadu yang memiliki pegawai dari beragam suku, bahasa daerah, dan keyakinan, muncul candaan bernada merendahkan aksen bicara rekan kerja baru saat rapat koordinasi. Sikap yang paling selaras dengan nilai dasar ASN 'Harmonis' adalah ...",
    options: [
      "Ikut menertawakan candaan tersebut agar suasana rapat pagi tetap cair dan tidak dianggap kaku oleh pegawai senior",
      "Mengusulkan pemisahan ruang kerja berdasarkan kesamaan asal daerah supaya tidak terjadi gesekan komunikasi harian",
      "Membiarkan perilaku tersebut berlangsung terus selama rekan kerja baru belum mengajukan surat keberatan resmi ke bagian kepegawaian",
      "Menghargai keberagaman latar belakang setiap rekan, mengingatkan dengan santun untuk menjaga etika saling menghormati, dan membangun lingkungan kerja kondusif",
      "Meminta rekan kerja baru meniru aksen mayoritas daerah kantor secara paksa dalam waktu satu bulan sebagai syarat penilaian kinerja",
    ],
    answer: "D",
    explanation:
      "Panduan perilaku nilai Harmonis dalam BerAKHLAK meliputi menghargai setiap orang apa pun latar belakangnya, suka menolong orang lain, serta membangun lingkungan kerja yang kondusif. Menganggap candaan merendahkan sebagai pencair suasana keliru karena merusak martabat individu, menciptakan eksklusi, dan melemahkan kerja sama tim pelayanan publik.",
    tip: "Nilai Harmonis menekankan penghargaan aktif atas keberagaman dan penciptaan ruang kerja yang aman serta saling menghormati.",
  },
  {
    id: "twk-int-059",
    subPattern: "kode-etik-dan-nilai-dasar-asn",
    difficulty: "sedang",
    prompt:
      "Menjelang pemilihan kepala daerah serentak, seorang ASN menggunakan akun media sosial pribadinya untuk menekan tombol 'suka' (like), membagikan ulang video kampanye salah satu pasangan calon, serta berfoto di ruang kerja mengenakan batik dinas sambil mengacungkan gestur nomor urut calon tersebut. Ditinjau dari kode etik dan peraturan kepegawaian, tindakan pegawai tersebut merupakan pelanggaran terhadap asas ...",
    options: [
      "Kebebasan berekspresi warga negara di luar jam kerja yang dilindungi penuh sepanjang tidak memakai anggaran kantor",
      "Efisiensi komunikasi digital karena akun pribadi bukan merupakan kanal pengumuman resmi instansi pemerintah",
      "Kebebasan memilih yang mewajibkan aparatur mempublikasikan preferensi politiknya agar transparan di mata warga",
      "Otonomi daerah yang membebaskan ASN kabupaten mendukung calon petahana demi keberlanjutan program dinas",
      "Netralitas ASN yang melarang aparatur berpihak, berkampanye, atau menunjukkan simbol dukungan politik secara fisik maupun digital",
    ],
    answer: "E",
    explanation:
      "Berdasarkan UU No. 20 Tahun 2023 tentang ASN, PP No. 94 Tahun 2021 tentang Disiplin PNS, serta SKB Netralitas ASN, setiap pegawai ASN wajib bebas dari pengaruh dan intervensi semua golongan serta partai politik—termasuk larangan berfoto dengan simbol calon maupun memberi like/share/komentar dukungan kampanye di media sosial pribadi. Alasan bahwa hal itu dilakukan lewat akun pribadi di luar jam kerja tidak membenarkan pelanggaran netralitas aparatur.",
    tip: "Ingat cakupan netralitas ASN berlaku penuh baik di dunia nyata maupun aktivitas media sosial pribadi (like, share, simbol calon).",
  },
  {
    id: "twk-int-060",
    subPattern: "kode-etik-dan-nilai-dasar-asn",
    difficulty: "sedang",
    prompt:
      "Seorang pegawai negeri aktif rutin membuat video siaran langsung promosi produk kosmetik berizin tidak jelas di platform lokapasar sambil mengenakan pakaian dinas harian berlogo instansi dari ruang kerjanya saat jam istirahat maupun jam kerja. Pelanggaran kode etik dan disiplin utama dari perilaku tersebut adalah ...",
    options: [
      "ASN dilarang memiliki penghasilan tambahan dari usaha legal apa pun termasuk berinvestasi di pasar modal resmi",
      "Pegawai tersebut seharusnya terlebih dahulu menyetorkan pajak penghasilan promosi ke bendahara pengeluaran kantor",
      "Penyalahgunaan atribut dinas, jam kerja, dan fasilitas kantor untuk kepentingan komersial pribadi sekaligus merendahkan martabat dan kehormatan instansi negara",
      "Siaran langsung media sosial hanya boleh dilakukan oleh petugas kehumasan dengan kamera resolusi tinggi milik pemerintah",
      "Produk yang dipromosikan seharusnya mendapat izin edar khusus dari pimpinan dinas tempat pegawai tersebut bertugas",
    ],
    answer: "C",
    explanation:
      "PP No. 94 Tahun 2021 mewajibkan PNS menjunjung tinggi kehormatan negara, pemerintah, dan martabat PNS, menaati ketentuan jam kerja, serta melarang penyalahgunaan wewenang dan barang milik negara/atribut dinas untuk kepentingan pribadi. Anggapan bahwa semua penghasilan pasif/investasi legal dilarang keliru; yang menjadi pelanggaran adalah pemakaian seragam dinas, ruang kantor, jam kerja, serta promosi produk bermasalah yang mencoreng kredibilitas lembaga publik.",
    tip: "Identifikasi titik pelanggaran pada penyalahgunaan atribut/jam kerja/fasilitas dinas dan penjagaan martabat instansi.",
  },
  {
    id: "twk-int-061",
    subPattern: "kode-etik-dan-nilai-dasar-asn",
    difficulty: "sedang",
    prompt:
      "Sebagai analis kebijakan ahli muda, Nadia menyusun kajian evaluasi program subsidi transportasi yang menunjukkan hasil bahwa rute tertentu tidak efektif karena tingkat keterisian sangat rendah. Menjelang rapat dengar pendapat, pimpinan meminta Nadia mengubah simpulan data menjadi 'sangat berhasil' tanpa dasar statistik baru agar program tetap didanai. Sikap etis profesional yang tepat adalah ...",
    options: [
      "Mengubah angka simpulan laporan sesuai permintaan lisan pimpinan agar proses persetujuan anggaran tahun depan berjalan mulus",
      "Mempertahankan objektivitas analisis berbasis data faktual, menyampaikan argumen metodologis secara santun kepada pimpinan, dan merumuskan opsi perbaikan desain rute ke depan",
      "Menghapus seluruh bab metodologi dan angka keterisian penumpang dari naskah laporan sehingga hanya berisi testimoni positif warga",
      "Membocorkan draf memo permintaan perubahan data tersebut ke forum media sosial tanpa mengklarifikasinya secara internal terlebih dahulu",
      "Menolak hadir pada rapat evaluasi dan meminta staf magang membacakan laporan yang sudah dimanipulasi datanya",
    ],
    answer: "B",
    explanation:
      "Jabatan fungsional analis kebijakan dan kode etik ASN menuntut integritas keilmuan serta independensi profesional dalam menyajikan kebijakan berbasis bukti (evidence-based policy). Mengubah simpulan demi menyenangkan pemangku kepentingan anggaran melanggar kejujuran intelektual dan berisiko mempertahankan pemborosan anggaran negara, sedangkan solusi konstruktif tetap menjaga etika komunikasi berjenjang dengan menyertakan rekomendasi perbaikan program.",
    tip: "Integritas analis kebijakan terletak pada kejujuran berbasis bukti (evidence-based) yang disertai solusi perbaikan konstruktif.",
  },
  {
    id: "twk-int-062",
    subPattern: "kode-etik-dan-nilai-dasar-asn",
    difficulty: "sedang",
    prompt:
      "Demi alasan kepraktisan saat bekerja dari rumah, seorang pengelola data kepegawaian mengunggah salinan lengkap basis data riwayat kepegawaian, nomor identitas, dan rincian gaji pegawai kementerian ke akun penyimpanan awan (cloud) gratisan pribadi yang tidak memiliki enkripsi ganda instansi. Pelanggaran kode etik pengamanan informasi dari tindakan tersebut adalah ...",
    options: [
      "Mengabaikan prinsip kerahasiaan jabatan dan perlindungan data pribadi dengan memindahkan data strategis negara ke infrastruktur pihak ketiga tidak terotorisasi",
      "Menggunakan kuota internet pribadi untuk mengunggah dokumen instansi tanpa terlebih dahulu mengajukan penggantian pulsa bulanan",
      "Tidak membagikan tautan unduhan folder awan tersebut kepada seluruh rekan satu divisi agar aksesnya merata",
      "Menyimpan salinan data kepegawaian sebelum mendapat persetujuan tertulis dari penyedia aplikasi lokapasar nasional",
      "Menggunakan format lembar sebar standar alih-alih mencetak dokumen fisik di atas kertas berkop resmi kementerian",
    ],
    answer: "A",
    explanation:
      "Menjaga kerahasiaan data jabatan serta data pribadi aparatur (UU No. 20 Tahun 2023 dan UU No. 27 Tahun 2022 tentang Perlindungan Data Pribadi) melarang penyimpanan aset informasi strategis pada akun komersial pribadi di luar kendali sistem keamanan siber instansi. Kelalaian keamanan siber akibat alasan kepraktisan berisiko tinggi memicu kebocoran data nasional dan penyalahgunaan identitas.",
    tip: "Hubungkan kode etik menjaga rahasia jabatan dengan standar tata kelola keamanan data digital dan UU PDP.",
  },
  {
    id: "twk-int-063",
    subPattern: "kode-etik-dan-nilai-dasar-asn",
    difficulty: "sulit",
    prompt:
      "Seorang widyaiswara atau pengajar ASN diundang menjadi panelis seminar akademik nasional untuk membahas efektivitas kebijakan reformasi birokrasi. Dalam konteks etika ASN, batasan paling tepat yang harus dijaganya agar tetap objektif sekaligus mematuhi kode etik aparatur negara adalah ...",
    options: [
      "Hanya boleh memuji seluruh kebijakan instansinya secara mutlak dan dilarang menyampaikan catatan perbaikan metodologis apa pun",
      "Diperbolehkan membeberkan dokumen rapat tertutup kementerian dan data pribadi pejabat sebagai bukti empiris agar paparan akademik lebih meyakinkan",
      "Menyampaikan analisis ilmiah secara objektif berbasis data publik terbuka dengan etika bahasa konstruktif tanpa membocorkan rahasia negara maupun menyerang personal pejabat",
      "Wajib mengundurkan diri sementara dari status kepegawaian sebelum menjadi pembicara dalam forum seminar universitas negeri",
      "Dapat menyampaikan kritik tajam bernada provokatif di forum publik asalkan di awal paparan menyatakan berbicara atas nama pribadi",
    ],
    answer: "C",
    explanation:
      "ASN berhak menyumbangkan pemikiran ilmiah dan evaluasi kebijakan secara konstruktif dalam kapasitas akademik berbasis data terbuka, selama tetap menjunjung etika birokrasi, menjaga kehormatan lembaga, dan tidak membocorkan informasi dikecualikan atau rahasia jabatan. Penolakan kritik konstruktif secara mutlak menghambat perbaikan kebijakan, sedangkan pembukaan dokumen tertutup maupun bahasa provokatif dengan dalih 'atas nama pribadi' tetap melanggar kode etik ASN.",
    tip: "Cari titik keseimbangan antara objektivitas akademik berbasis data terbuka dan kewajiban etis menjaga rahasia jabatan.",
  },
  {
    id: "twk-int-064",
    subPattern: "kode-etik-dan-nilai-dasar-asn",
    difficulty: "sulit",
    prompt:
      "Seorang pejabat pembuat komitmen (PPK) menerima perintah lisan dari pimpinan tertingginya untuk segera mencairkan dana hibah kepada sebuah yayasan yang belum melengkapi syarat legalitas badan hukum dan laporan pertanggungjawaban hibah tahun sebelumnya. Berdasarkan prinsip akuntabilitas hukum administrasi dan disiplin ASN, langkah prosedural paling tepat yang harus ditempuh PPK adalah ...",
    options: [
      "Langsung mencairkan dana tersebut karena dalam sistem birokrasi hierarkis bawahan wajib mematuhi perintah pimpinan di semua keadaan",
      "Mengubah berkas persyaratan yayasan menjadi seolah-olah lengkap agar proses pencairan berjalan cepat sekaligus melindungi pimpinan dari temuan",
      "Mengambil cuti mendadak selama dua pekan dan menyerahkan kata sandi sistem pencairan keuangan kepada staf pelaksana lainnya",
      "Menolak pelaksanaan pencairan yang melanggar ketentuan, menyampaikan dasar hukum keberatan secara tertulis dan santun kepada pimpinan, serta mendokumentasikan catatan penolakan tersebut",
      "Mengumumkan perintah lisan pimpinan tersebut melalui siaran pers terbuka pada hari yang sama sebelum berkomunikasi secara berjenjang",
    ],
    answer: "D",
    explanation:
      "Menurut UU No. 20 Tahun 2023 dan UU Administrasi Pemerintahan, ASN hanya wajib menaati perintah kedinasan yang sah dan sesuai peraturan perundang-undangan; pejabat pengelola keuangan bertanggung jawab secara hukum atas setiap pencairan anggaran. Menyampaikan keberatan tertulis berbasis regulasi dengan bahasa santun sekaligus menolak pencairan ilegal melindungi anggaran negara dan memberi perlindungan administratif bagi PPK bila kelak diperiksa auditor.",
    tip: "Perintah atasan yang bertentangan dengan hukum wajib ditolak secara prosedural, santun, dan terdokumentasi tertulis.",
  },
  {
    id: "twk-int-065",
    subPattern: "konflik-kepentingan-dan-penyalahgunaan-wewenang",
    difficulty: "mudah",
    prompt:
      "Dalam rapat penentuan penerima promosi jabatan manajerial melalui skema sistem merit, salah satu anggota tim penilai memiliki hubungan utang piutang pribadi dalam jumlah besar dengan salah satu kandidat yang sedang dinilai. Situasi ini merupakan bentuk konflik kepentingan sehingga tindakan yang semestinya dilakukan anggota tim penilai adalah ...",
    options: [
      "Tetap memberikan penilaian tertinggi kepada kandidat tersebut agar ia segera naik jabatan dan mampu melunasi utangnya",
      "Memberikan nilai terendah secara sengaja kepada kandidat tersebut supaya publik tidak menduga adanya keberpihakan",
      "Merahasiakan hubungan utang piutang tersebut dari tim penilai lain sepanjang rapat berlangsung secara tertutup",
      "Meminta kandidat melunasi sebagian utangnya terlebih dahulu di luar ruang rapat sebelum proses wawancara dimulai",
      "Mengungkapkan secara jujur potensi benturan kepentingan finansial tersebut kepada ketua tim dan mengundurkan diri dari penilaian kandidat bersangkutan",
    ],
    answer: "E",
    explanation:
      "Hubungan finansial seperti utang piutang pribadi menciptakan konflik kepentingan yang mengancam objektivitas penilaian sistem merit, baik berupa risiko pembalasan budi maupun upaya menekan pihak lain. Upaya memanipulasi skor menjadi terlalu rendah demi menutupi hubungan justru sama-sama merusak keadilan objektif; satu-satunya langkah etis adalah deklarasi terbuka dan mengundurkan diri (recusal).",
    tip: "Setiap benturan kepentingan finansial maupun kekerabatan wajib dideklarasikan secara terbuka diikuti penarikan diri dari pengambilan keputusan.",
  },
  {
    id: "twk-int-066",
    subPattern: "konflik-kepentingan-dan-penyalahgunaan-wewenang",
    difficulty: "mudah",
    prompt:
      "Seorang pegawai di badan perencanaan pembangunan daerah mengetahui rencana rahasia lokasi pembangunan simpang susun jalan tol yang belum diumumkan kepada publik. Ia kemudian membeli sejumlah bidang tanah milik warga di titik tersebut dengan harga murah melalui nama istrinya untuk dijual kembali kepada pemerintah dengan nilai ganti rugi berkali lipat. Perbuatan tersebut merupakan pelanggaran integritas berupa ...",
    options: [
      "Pemanfaatan peluang investasi properti cerdas yang sah secara perdata karena menggunakan dana tabungan pribadi pegawai",
      "Pencapaian efisiensi pengadaan lahan karena pemerintah dapat langsung bernegosiasi dengan sesama aparatur sipil",
      "Penyalahgunaan informasi orang dalam (insider information) jabatan publik untuk memperkaya diri sendiri dan keluarga",
      "Pelaksanaan fungsi koordinasi aset daerah agar lahan strategis tidak jatuh ke tangan investor swasta dari luar provinsi",
      "Penerapan prinsip transparansi pasar tanah sebelum dokumen penetapan lokasi proyek ditandatangani kepala daerah",
    ],
    answer: "C",
    explanation:
      "Menggunakan informasi rahasia atau informasi nonpublik yang diperoleh karena jabatan (insider information) untuk mengambil keuntungan ekonomi pribadi atau keluarga merupakan penyalahgunaan wewenang dan konflik kepentingan berat. Sekalipun pembelian memakai dana tabungan pribadi, pengetahuan eksklusif atas penetapan lokasi proyek negara menciptakan ketimpangan informasi yang tidak adil dan merugikan warga serta anggaran pengadaan lahan.",
    tip: "Informasi kebijakan yang belum dipublikasikan adalah milik negara dan dilarang keras dipakai untuk spekulasi ekonomi pribadi.",
  },
  {
    id: "twk-int-067",
    subPattern: "konflik-kepentingan-dan-penyalahgunaan-wewenang",
    difficulty: "sedang",
    prompt:
      "Seorang pejabat pengawas mutu konstruksi di dinas tata bangunan sekaligus menjabat sebagai direktur utama aktif pada perusahaan jasa konsultan perencana swasta yang sering mengerjakan proyek mitra di kabupaten yang sama. Masalah paling mendasar dari rangkap peran tersebut terhadap integritas tata kelola publik adalah ...",
    options: [
      "Terjadinya konflik kepentingan struktural antara fungsi pengawas publik yang seharusnya objektif dengan kepentingan bisnis komersial pribadi",
      "Perusahaan konsultan swasta berpotensi kekurangan waktu rapat karena jam operasional kantor pemerintahan berakhir sore hari",
      "Pejabat tersebut berisiko membayar pajak penghasilan ganda dari gaji ASN dan dividen perusahaan setiap akhir tahun",
      "Pegawai lain di dinas tata bangunan akan kesulitan menentukan panggilan jabatan saat berdiskusi di ruang kerja",
      "Beban administrasi pengarsipan sertifikat keahlian teknik konstruksi meningkat di kantor dinas terkait",
    ],
    answer: "A",
    explanation:
      "ASN, khususnya pejabat pengawas/regulator, dilarang merangkap jabatan pengurus aktif perusahaan komersial yang beririsan dengan lingkup tugas atau kewenangan pengawasannya (sejalan dengan aturan disiplin ASN dan pencegahan konflik kepentingan). Persoalan utamanya bukan soal beban pajak atau waktu rapat, melainkan hilangnya independensi pengawasan dan potensi penyalahgunaan posisi untuk memuluskan proyek perusahaan sendiri.",
    tip: "Rangkap peran antara regulator/pengawas publik dan pengelola bisnis di sektor yang sama pasti melahirkan konflik kepentingan struktural.",
  },
  {
    id: "twk-int-068",
    subPattern: "konflik-kepentingan-dan-penyalahgunaan-wewenang",
    difficulty: "sedang",
    prompt:
      "Dalam program pelatihan sertifikasi keahlian gratis dan bantuan modal kerja bagi pelaku usaha mikro yang dikelola oleh dinas koperasi, seorang kepala bidang menyisipkan sepuluh nama dari kelompok arisan keluarganya sebagai peserta prioritas tanpa melewati tahapan seleksi skor kelayakan usaha. Penyimpangan integritas yang terjadi dalam kasus ini adalah ...",
    options: [
      "Penambahan jumlah peserta di luar kuota agar penyerapan anggaran pelatihan cepat mencapai target seratus persen",
      "Pengabaian prosedur penggunaan aula pelatihan yang seharusnya disewa melalui aplikasi pengadaan elektronik",
      "Keterlambatan pencetakan sertifikat kelayakan usaha akibat banyaknya pendaftar dari luar wilayah kecamatan",
      "Penyalahgunaan kewenangan jabatan melalui praktik nepotisme dan favoritisme yang merampas hak warga yang lebih berhak dan memenuhi syarat",
      "Kekeliruan pemilihan materi modul pelatihan kewirausahaan yang belum disesuaikan dengan tren pemasaran digital",
    ],
    answer: "D",
    explanation:
      "Menyisipkan kerabat atau kelompok afinitas ke dalam daftar penerima manfaat program negara tanpa seleksi objektif merupakan bentuk nepotisme dan penyalahgunaan kewenangan distribusi sumber daya publik. Meskipun anggaran tetap terserap, tindakan ini mencederai keadilan sosial dan menyingkirkan pelaku usaha mikro rentan yang seharusnya menjadi sasaran sah program.",
    tip: "Setiap pengalokasian kuota bantuan atau beasiswa publik tanpa kriteria seleksi objektif bagi kerabat termasuk nepotisme.",
  },
  {
    id: "twk-int-069",
    subPattern: "konflik-kepentingan-dan-penyalahgunaan-wewenang",
    difficulty: "sedang",
    prompt:
      "Saat menyusun Kerangka Acuan Kerja (KAK) pengadaan perangkat lunak pengawasan lalu lintas, seorang pejabat teknis menyalin bulat-bulat spesifikasi fitur unik milik satu merek tertentu serta mensyaratkan surat dukungan eksklusif dari distributor tunggal yang pemiliknya merupakan rekan bisnis lamanya. Praktik penyimpangan pengadaan ini dikenal sebagai upaya ...",
    options: [
      "Standardisasi kualitas mutu tinggi untuk menjamin perangkat lunak mudah dirawat oleh tim teknis daerah",
      "Penguncian spesifikasi teknis (vendor lock-in / titip spesifikasi) untuk mengarahkan pemenang tender dan menutup persaingan sehat",
      "Efisiensi evaluasi penawaran agar panitia pemilihan tidak perlu memeriksa dokumen puluhan perusahaan peserta lelang",
      "Penerapan prinsip kehati-hatian pengadaan guna menghindari produk tiruan yang beredar di pasar bebas",
      "Kolaborasi kemitraan strategis antara pemerintah daerah dan pelaku usaha teknologi informasi lokal",
    ],
    answer: "B",
    explanation:
      "Mengarahkan spesifikasi teknis pada fitur spesifik satu merek atau surat dukungan eksklusif tertentu (titip spesifikasi) melanggar prinsip pengadaan terbuka, adil, dan bersaing sebagaimana diatur dalam peraturan pengadaan barang/jasa pemerintah. Dalih menjaga standardisasi mutu tidak dapat membenarkan penguncian merek yang menyingkirkan produk setara lain dan sarat konflik kepentingan dengan rekan bisnis.",
    tip: "Spesifikasi pengadaan barang/jasa publik harus berbasis fungsi/kinerja netral, bukan mengarah pada merek atau distributor tunggal tertentu.",
  },
  {
    id: "twk-int-070",
    subPattern: "konflik-kepentingan-dan-penyalahgunaan-wewenang",
    difficulty: "sedang",
    prompt:
      "Sebuah unit pengelola Barang Milik Negara (BMN) menyewakan area kantin dan lahan parkir strategis milik kantor kepada badan usaha yang ternyata dikelola oleh pasangan hidup kepala unit tersebut dengan tarif sewa sepertiga di bawah nilai taksiran wajar penilai resmi. Pelanggaran utama dari kebijakan pemanfaatan aset negara ini adalah ...",
    options: [
      "Penurunan jumlah pengunjung kantin kantor akibat menu makanan yang kurang bervariasi bagi pegawai",
      "Penggunaan area parkir untuk kendaraan tamu luar tanpa pembagian kupon retribusi harian secara manual",
      "Ketiadaan papan nama pengelola kantin resmi di dinding depan gedung pelayanan publik instansi",
      "Keterlambatan pengajuan izin operasional usaha kuliner kepada dinas perdagangan kabupaten setempat",
      "Penyalahgunaan wewenang pengelolaan BMN yang merugikan potensi Penerimaan Negara Bukan Pajak (PNBP) akibat konflik kepentingan kekerabatan",
    ],
    answer: "E",
    explanation:
      "Pemanfaatan Barang Milik Negara harus berlandaskan prinsip transparansi, persaingan terbuka, dan nilai sewa wajar berdasarkan penilaian resmi guna memaksimalkan penerimaan negara (PNBP/PAD). Menyerahkan sewa aset negara kepada usaha pasangan hidup dengan tarif jauh di bawah nilai taksiran melanggar aturan pengelolaan BMN dan merugikan keuangan negara akibat konflik kepentingan.",
    tip: "Pengelolaan dan penyewaan aset negara (BMN/BMD) wajib mengacu pada taksiran nilai wajar dan proses terbuka bebas nepotisme.",
  },
  {
    id: "twk-int-071",
    subPattern: "konflik-kepentingan-dan-penyalahgunaan-wewenang",
    difficulty: "sulit",
    prompt:
      "Seorang kepala badan memindahkan pos dana cadangan penanganan darurat bencana alam daerah untuk membiayai pembangunan taman hias dan gapura megah halaman kantornya sendiri tanpa perubahan peraturan daerah anggaran yang sah, dengan alasan halaman kantor perlu tampak indah saat kunjungan tamu pusat. Menurut UU Nomor 30 Tahun 2014 tentang Administrasi Pemerintahan, kategori penyimpangan wewenang paling tepat pada tindakan tersebut adalah ...",
    options: [
      "Mencampuradukkan wewenang dan bertindak sewenang-wenang karena menggunakan kewenangan pengelolaan anggaran darurat untuk tujuan lain di luar mandat hukumnya serta tanpa dasar prosedur sah",
      "Diskresi konstruktif karena pimpinan badan memiliki otonomi penuh menata keindahan fisik lingkungan kantor pemerintahan",
      "Delegasi kewenangan sah karena pembangunan taman halaman kantor termasuk bagian dari pemeliharaan aset pemerintahan daerah",
      "Pelanggaran etika estetika ringan yang tidak berkaitan dengan asas umum pemerintahan yang baik maupun hukum administrasi",
      "Inisiatif percepatan serapan anggaran yang dibenarkan selama seluruh tanaman hias dibeli dari kelompok tani lokal daerah",
    ],
    answer: "A",
    explanation:
      "Pasal 17 dan 18 UU No. 30 Tahun 2014 melarang badan/pejabat pemerintahan menyalahgunakan wewenang yang meliputi melampaui wewenang, mencampuradukkan wewenang (menggunakan wewenang untuk tujuan lain dari tujuan pemberian wewenang itu), dan bertindak sewenang-wenang (tanpa dasar kewenangan atau bertentangan dengan aturan sah). Dalih memperindah kantor saat kunjungan tamu sama sekali tidak memenuhi syarat diskresi darurat maupun ketentuan pergeseran anggaran bencana.",
    tip: "Pahami klasifikasi penyalahgunaan wewenang dalam UU No. 30/2014, khususnya pencampuradukan tujuan wewenang (detournement de pouvoir).",
  },
  {
    id: "twk-int-072",
    subPattern: "konflik-kepentingan-dan-penyalahgunaan-wewenang",
    difficulty: "sulit",
    prompt:
      "Sebuah direktorat penyusun regulasi standar baku mutu limbah industri menerima tawaran pendanaan penuh dari asosiasi perusahaan manufaktur besar untuk membiayai penyusunan naskah akademik, survei lapangan, serta rapat penyusunan rancangan peraturan menteri yang nantinya akan mengatur industri tersebut. Risiko integritas kebijakan publik terbesar dari skema pembiayaan tersebut adalah ...",
    options: [
      "Lambatnya proses pencetakan lembaran negara akibat perbedaan format tata naskah dinas antara asosiasi swasta dan biro hukum",
      "Meningkatnya beban kerja sekretariat direktorat dalam menyusun daftar hadir peserta rapat konsinyering di luar kantor",
      "Terjadinya pembajakan regulasi (regulatory capture) dan konflik kepentingan kelembagaan yang mengikis independensi negara dalam melindungi kepentingan lingkungan masyarakat",
      "Berkurangnya partisipasi asosiasi usaha kecil karena rapat penyusunan naskah akademik dilaksanakan menggunakan teknologi konferensi video",
      "Adanya keharusan kementerian membagikan hak cipta naskah peraturan perundang-undangan kepada seluruh anggota asosiasi manufaktur",
    ],
    answer: "C",
    explanation:
      "Ketika proses perumusan aturan hukum dibiayai langsung oleh entitas yang menjadi objek pengaturan itu sendiri, independensi regulator terancam dan berisiko tinggi melahirkan regulatory capture—yakni peraturan yang melunak demi kepentingan industri alih-alih keselamatan lingkungan dan warga. Persoalan administratif seperti format tata naskah atau beban daftar hadir bukanlah risiko utama dalam tata kelola perumusan kebijakan berintegritas.",
    tip: "Kenali bahaya regulatory capture: hilangnya kemandirian regulator akibat ketergantungan pembiayaan atau kedekatan berlebihan dengan pihak yang diregulasi.",
  },
  {
    id: "twk-int-073",
    subPattern: "whistleblowing-transparansi-dan-akuntabilitas",
    difficulty: "mudah",
    prompt:
      "Agar laporan yang masuk ke dalam Whistleblowing System (WBS) instansi pemerintah dapat ditindaklanjuti secara efektif oleh unit pengawas serta tidak berbalik menjadi fitnah atau pencemaran nama baik, syarat utama yang perlu disertakan oleh pegawai pelapor beritikad baik adalah ...",
    options: [
      "Persetujuan tertulis dari minimal lima puluh persen rekan kerja satu bidang serta surat keterangan bebas utang",
      "Dugaan kuat berdasarkan desas-desus kantor disertai tuntutan hukuman pemecatan langsung tanpa proses pemeriksaan",
      "Identitas lengkap pelapor yang harus diumumkan di papan informasi instansi agar seluruh pegawai menyaksikan keberaniannya",
      "Uraian fakta dugaan pelanggaran yang jelas (apa, siapa, kapan, di mana, bagaimana) beserta bukti permulaan yang relevan dan sah",
      "Pernyataan kesediaan menanggung seluruh biaya operasional tim pemeriksa inspektorat apabila terlapor membantah tuduhan",
    ],
    answer: "D",
    explanation:
      "Pelaporan WBS yang bertanggung jawab harus dilandasi iktikad baik serta memuat informasi substantif (unsur 5W+1H) dan bukti pendukung awal yang dapat diverifikasi, sehingga tim pengawas memiliki pijakan objektif untuk menelusuri dugaan penyimpangan. Mengumumkan identitas pelapor atau meminta persetujuan rekan kerja justru menghancurkan prinsip kerahasiaan dan keamanan sistem WBS.",
    tip: "WBS efektif memadukan perlindungan kerahasiaan pelapor dengan kejelasan fakta serta bukti permulaan.",
  },
  {
    id: "twk-int-074",
    subPattern: "whistleblowing-transparansi-dan-akuntabilitas",
    difficulty: "mudah",
    prompt:
      "Instrumen transparansi dan akuntabilitas yang mewajibkan pejabat atau penyelenggara negara tertentu melaporkan rincian aset, pendapatan, dan kewajiban finansialnya secara periodik kepada KPK guna mencegah pengayaan diri secara tidak sah adalah ...",
    options: [
      "Surat Pemberitahuan Tahunan Retribusi Daerah (SPTRD)",
      "Laporan Harta Kekayaan Penyelenggara Negara (LHKPN)",
      "Berita Acara Pemeriksaan Kas Harian Bendahara (BAPK)",
      "Daftar Urut Kepangkatan Aparatur Sipil Negara (DUK)",
      "Rencana Umum Pengadaan Barang dan Jasa Pemerintah (RUP)",
    ],
    answer: "B",
    explanation:
      "LHKPN (diatur dalam UU No. 28 Tahun 1999 dan Peraturan KPK terkait) merupakan instrumen pencegahan korupsi yang mewajibkan penyelenggara negara melaporkan hartanya secara transparan sebelum, selama, dan setelah menjabat sebagai alat uji kewajaran profil kekayaan. Sementara RUP adalah dokumen perencanaan pengadaan dan DUK adalah daftar kepegawaian, bukan alat audit kekayaan pribadi pejabat.",
    tip: "Hubungkan instrumen transparansi kekayaan pribadi pejabat negara dengan kewajiban pelaporan LHKPN di KPK.",
  },
  {
    id: "twk-int-075",
    subPattern: "whistleblowing-transparansi-dan-akuntabilitas",
    difficulty: "sedang",
    prompt:
      "Seorang warga mengajukan permohonan informasi resmi kepada Pejabat Pengelola Informasi dan Dokumentasi (PPID) dinas terkait untuk memperoleh salinan ringkasan kontrak pengadaan renovasi jembatan, nilai anggaran, dan nama perusahaan pemenang. PPID menolak permohonan tersebut dengan dalih seluruh berkas pengadaan adalah rahasia jabatan instansi. Penilaian sesuai Undang-Undang Keterbukaan Informasi Publik adalah ...",
    options: [
      "Penolakan PPID sudah tepat karena hanya lembaga pemeriksa keuangan negara yang berhak mengetahui nilai kontrak dan pemenang proyek",
      "Warga hanya diperbolehkan meminta informasi kontrak proyek apabila mendapatkan surat kuasa resmi dari perusahaan pemenang tender",
      "Penolakan tersebut keliru karena informasi kontrak publik, nilai anggaran, dan pemenang pengadaan merupakan informasi terbuka untuk akuntabilitas, kecuali bagian tertentu yang sah dikecualikan lewat uji konsekuensi",
      "PPID wajib menolak seluruh permintaan informasi dari masyarakat umum selama masa konstruksi proyek belum melewati masa pemeliharaan sepuluh tahun",
      "Informasi pengadaan barang dan jasa otomatis menjadi rahasia negara apabila nilai paket pekerjaannya melebihi batas pengadaan langsung",
    ],
    answer: "C",
    explanation:
      "Berdasarkan UU No. 14 Tahun 2008 tentang Keterbukaan Informasi Publik dan peraturan Komisi Informasi, informasi mengenai realisasi anggaran, pemenang pengadaan, dan ringkasan kontrak barang/jasa publik bersifat terbuka demi mengawal akuntabilitas belanja negara. Pengecualian informasi hanya boleh dilakukan secara ketat dan terbatas terhadap bagian tertentu (misalnya rahasia dagang atau data pribadi) setelah melalui uji konsekuensi hukum, bukan menutup keseluruhan kontrak dengan alasan umum 'rahasia jabatan'.",
    tip: "Ingat prinsip UU KIP: informasi penggunaan anggaran publik pada dasarnya terbuka; pengecualian harus spesifik melalui uji konsekuensi.",
  },
  {
    id: "twk-int-076",
    subPattern: "whistleblowing-transparansi-dan-akuntabilitas",
    difficulty: "sedang",
    prompt:
      "Dalam arsitektur akuntabilitas pengelolaan keuangan negara di Indonesia, peran Aparat Pengawasan Intern Pemerintah (APIP/Inspektorat) berbeda namun saling melengkapi dengan Badan Pemeriksa Keuangan (BPK). Hubungan fungsional kedua lembaga pengawas tersebut yang paling tepat adalah ...",
    options: [
      "APIP hanya bertugas memeriksa absensi pegawai harian, sedangkan BPK khusus mengawasi disiplin berpakaian aparatur negara",
      "BPK berada di bawah komando struktural inspektorat daerah sehingga hasil pemeriksaannya wajib mendapat persetujuan kepala daerah",
      "Keberadaan hasil pemeriksaan APIP otomatis menghapus kewenangan konstitusional BPK untuk mengaudit laporan keuangan instansi",
      "APIP dan BPK memiliki kewenangan yang identik untuk menjatuhkan vonis pidana penjara langsung kepada pejabat yang melakukan kesalahan administrasi",
      "APIP menjalankan fungsi pengawasan internal, pendampingan, dan pencegahan dini di dalam instansi, sedangkan BPK melakukan audit eksternal independen atas tanggung jawab keuangan negara",
    ],
    answer: "E",
    explanation:
      "APIP (Inspektorat Jenderal/Inspektorat Daerah/BPKP) berperan sebagai pengawas intern yang memberi keyakinan memadai (assurance) dan konsultansi perbaikan tata kelola sejak dini di lingkungan pemerintah, sedangkan BPK adalah lembaga tinggi negara pemeriksa eksternal yang bebas dan mandiri berdasarkan UUD 1945. Baik APIP maupun BPK bukanlah lembaga peradilan yang menjatuhkan vonis pidana penjara secara langsung.",
    tip: "Bedakan peran pengawasan internal preventif-konsultatif (APIP) dengan pemeriksaan eksternal independen (BPK).",
  },
  {
    id: "twk-int-077",
    subPattern: "whistleblowing-transparansi-dan-akuntabilitas",
    difficulty: "sedang",
    prompt:
      "Dua minggu setelah melaporkan dugaan penggelembungan anggaran perjalanan dinas atasannya melalui kanal WBS resmi, seorang staf keuangan tiba-tiba dimutasi sepihak ke unit arsip terpencil tanpa evaluasi kinerja yang jelas dan dicabut akses sistem pelaporannya. Langkah perlindungan dan penyelesaian akuntabel yang paling tepat ditempuh staf pelapor tersebut adalah ...",
    options: [
      "Mengajukan laporan perlindungan dan keberatan atas dugaan tindakan pembalasan (retaliation) ke unit pengawas lebih tinggi, LPSK, serta otoritas pengawas sistem merit ASN dengan menyertakan kronologi dan bukti pendukung",
      "Meminta maaf kepada atasannya yang terlapor serta menarik kembali laporan dugaan penggelembungan anggaran agar dapat kembali ke posisi semula",
      "Mengajak rekan kerja lain melakukan mogok kerja massal di halaman kantor dan menolak menyerahkan kunci ruang arsip",
      "Menyalin seluruh dokumen rahasia instansi untuk dijadikan alat ancaman balik apabila surat mutasinya tidak segera dibatalkan dalam dua hari",
      "Mengundurkan diri dari status ASN secara mendadak tanpa mengajukan keberatan administratif apa pun atas mutasi tidak berdasar tersebut",
    ],
    answer: "A",
    explanation:
      "Mutasi mendadak tanpa dasar kinerja yang jelas pascapelaporan merupakan indikasi tindakan pembalasan (retaliation) terhadap whistleblower yang dilarang dalam kebijakan perlindungan pelapor dan sistem merit ASN. Pelapor berhak menempuh jalur perlindungan hukum melalui LPSK (UU No. 31 Tahun 2014), inspektorat berjenjang lebih tinggi, serta instansi pengawas kepegawaian/keberatan administratif ASN secara sah, bukan melakukan mogok kerja atau menarik laporan kebenaran.",
    tip: "Ketahui hak perlindungan whistleblower terhadap mutasi pembalasan (retaliation) melalui jalur hukum dan kepegawaian resmi.",
  },
  {
    id: "twk-int-078",
    subPattern: "whistleblowing-transparansi-dan-akuntabilitas",
    difficulty: "sedang",
    prompt:
      "Untuk mencegah penyimpangan dalam penyaluran dana bantuan sosial tunai desa yang sebelumnya disalurkan secara manual tanpa daftar penerima terbuka, pemerintah daerah menerapkan transfer langsung nontunai ke rekening penerima terverifikasi, dasbor realisasi real-time, serta kanal umpan balik warga. Mekanisme ini meningkatkan akuntabilitas publik terutama karena ...",
    options: [
      "Menghilangkan seluruh kewajiban kepala desa menyusun laporan pertanggungjawaban keuangan akhir tahun kepada pemerintah kabupaten",
      "Mengalihkan tanggung jawab verifikasi data kemiskinan sepenuhnya kepada pihak bank penyalur swasta tanpa melibatkan musyawarah warga",
      "Menjamin bahwa setiap warga desa pasti menerima nominal bantuan yang sama rata tanpa melihat tingkat kebutuhan ekonomi keluarga",
      "Memangkas rantai perantara rawan pemotongan dana, menciptakan jejak audit elektronik yang jelas, dan membuka ruang kontrol partisipatif masyarakat",
      "Memungkinkan dana bantuan yang tersisa langsung dipakai untuk membiayai renovasi balai desa tanpa persetujuan peraturan desa",
    ],
    answer: "D",
    explanation:
      "Kombinasi penyaluran nontunai langsung (direct cash transfer), dasbor realisasi, dan saluran pengaduan partisipatif menutup peluang pemotongan liar oleh perantara, menyediakan jejak audit digital (audit trail) yang akurat, serta melibatkan pengawasan sosial warga. Transformasi digital ini tidak menghapus kewajiban pelaporan pertanggungjawaban kepala desa melainkan justru memperkuat bukti akuntabilitasnya.",
    tip: "Akuntabilitas digital bekerja dengan memutus rantai perantara tunai, menjaga jejak audit elektronik, dan membuka kontrol warga.",
  },
  {
    id: "twk-int-079",
    subPattern: "whistleblowing-transparansi-dan-akuntabilitas",
    difficulty: "sulit",
    prompt:
      "Sebuah pemerintah kota ingin mencegah penerima ganda bantuan sosial kesehatan warga miskin dengan mengumumkan daftar nama penerima di portal terbuka daring. Namun, dalam berkas yang diunggah, petugas mencantumkan secara utuh Nomor Induk Kependudukan (NIK), nomor telepon seluler, alamat lengkap rumah, dan riwayat diagnosis penyakit kronis penerima. Analisis keseimbangan prinsip transparansi dan perlindungan data yang paling tepat adalah ...",
    options: [
      "Seluruh data pribadi termasuk NIK dan riwayat penyakit wajib ditayangkan utuh di internet karena anggaran bantuan berasal dari uang pajak rakyat",
      "Transparansi publik harus diselaraskan dengan UU Perlindungan Data Pribadi dan UU KIP melalui penyamaran identitas sensitif (seperti sensor sebagian NIK dan penghapusan rekam medis) sambil tetap membuka informasi kelayakan program yang terverifikasi",
      "Daftar penerima bantuan sosial sama sekali tidak boleh dipublikasikan dalam bentuk apa pun, termasuk di papan pengumuman musyawarah kelurahan",
      "Petugas cukup menambahkan kotak persetujuan kecil di formulir pendaftaran agar warga melepas seluruh hak privasi medisnya ke ruang publik",
      "Data diagnosis penyakit justru paling penting ditayangkan secara terbuka agar warga lain dapat menilai tingkat keparahan sakit tetangganya sendiri",
    ],
    answer: "B",
    explanation:
      "Transparansi akuntabilitas publik tidak boleh menabrak hak privasi warga dan keamanan data sensitif yang dilindungi UU No. 27 Tahun 2022 (UU PDP) serta pengecualian informasi pribadi/medis dalam UU No. 14 Tahun 2008 (UU KIP). Praktik terbaik tata kelola informasi publik adalah membuka nama dan wilayah penerima secara terbatas (atau melalui mekanisme cek status berbasis NIK pribadi/musyawarah kelurahan) dengan menyamarkan (masking) NIK penuh, kontak pribadi, dan melarang keras publikasi data rekam medis.",
    tip: "Seimbangkan keterbukaan pengawasan bansos dengan prinsip minimalisasi dan penyamaran data sensitif/medis sesuai UU PDP dan UU KIP.",
  },
  {
    id: "twk-int-080",
    subPattern: "whistleblowing-transparansi-dan-akuntabilitas",
    difficulty: "sulit",
    prompt:
      "Dalam pengusutan kasus korupsi berjemaah proyek infrastruktur multiyears yang melibatkan beberapa pejabat dan kontraktor, seorang kepala seksi yang berperan sebagai perantara administrasi mengajukan diri sebagai saksi pelaku yang bekerja sama (justice collaborator). Agar pengajuan tersebut layak diterima dan memberikan nilai akuntabilitas hukum yang sah, syarat kumulatif terpenting yang harus dipenuhinya adalah ...",
    options: [
      "Ia merupakan aktor intelektual utama yang merancang seluruh skema korupsi dan hanya mengaku setelah tertangkap tangan dengan barang bukti lengkap",
      "Ia bersedia mengganti kerugian negara menggunakan pinjaman dari sesama terdakwa lain dengan syarat seluruh aset pribadinya tidak diperiksa",
      "Ia cukup menyatakan penyesalan di persidangan tanpa perlu mengungkap keterlibatan pimpinan proyek maupun alur aliran dana ke pihak lain",
      "Ia bersedia mengundurkan diri dari status pegawai negeri sipil sebelum persidangan dimulai tanpa menyerahkan catatan bukti transaksi proyek",
      "Ia bukan pelaku utama tindak pidana tersebut, mengakui kejahatan yang dilakukannya, serta memberikan keterangan dan bukti signifikan untuk membongkar pelaku utama dan memulihkan aset negara",
    ],
    answer: "E",
    explanation:
      "Berdasarkan UU No. 31 Tahun 2014 tentang Perlindungan Saksi dan Korban serta SEMA No. 4 Tahun 2011, status justice collaborator hanya dapat diberikan kepada pelaku yang bukan merupakan pelaku utama, mengakui perbuatannya secara jujur, serta berkontribusi nyata mengungkap jaringan pelaku yang lebih besar dan membantu pengembalian aset hasil korupsi. Pelaku utama atau terdakwa yang sekadar menyatakan penyesalan tanpa membongkar peran aktor intelektual lainnya tidak memenuhi syarat justice collaborator.",
    tip: "Ingat tiga syarat kunci justice collaborator: bukan pelaku utama, mengakui perbuatan, dan membantu membongkar pelaku utama serta aset kejahatan.",
  },
];
