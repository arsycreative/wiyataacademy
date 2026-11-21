import {
  buildTwkPatternQuestions,
  type Question,
  type QuestionDraft,
} from "@/modules/question-bank/domain/question";
import { integritasBatch2Drafts } from "./batches/02-integritas-batch-2";

const integritasDrafts: readonly QuestionDraft[] = [
  {
    "id": "twk-int-001",
    "subPattern": "antikorupsi-gratifikasi-dan-suap",
    "difficulty": "mudah",
    "prompt": "Berdasarkan Pasal 12C Undang-Undang Nomor 20 Tahun 2001 tentang Perubahan atas UU Pemberantasan Tindak Pidana Korupsi, pegawai negeri atau penyelenggara negara yang terlanjur menerima gratifikasi yang berhubungan dengan jabatan dapat terhindar dari ketentuan pidana suap apabila melaporkannya kepada KPK paling lambat ...",
    "options": [
      "30 hari kerja terhitung sejak tanggal gratifikasi tersebut diterima",
      "7 hari kalender sejak selesainya pemeriksaan oleh atasan langsung",
      "14 hari kerja sebelum memasuki masa purnatugas atau mutasi jabatan",
      "60 hari kalender setelah nilai barang ditaksir oleh lembaga penilai swasta",
      "90 hari kerja sejak berakhirnya tahun anggaran berjalannya proyek"
    ],
    "answer": "A",
    "explanation": "Pasal 12C UU No. 20 Tahun 2001 mengatur bahwa ketentuan pidana gratifikasi pada Pasal 12B tidak berlaku apabila penerima melaporkan gratifikasi yang diterimanya kepada KPK paling lambat 30 hari kerja terhitung sejak tanggal gratifikasi tersebut diterima.",
    "tip": "Ingat angka batas waktu pelaporan gratifikasi dalam Pasal 12C UU Tipikor dalam satuan hari kerja."
  },
  {
    "id": "twk-int-002",
    "subPattern": "antikorupsi-gratifikasi-dan-suap",
    "difficulty": "mudah",
    "prompt": "Perbedaan prinsip antara suap (bribery) dan pemerasan dalam tindak pidana korupsi yang melibatkan aparatur pelayanan publik adalah ...",
    "options": [
      "Suap hanya terjadi jika nilai pemberian di atas sepuluh juta rupiah, sedangkan pemerasan untuk nominal lebih kecil",
      "Pada suap terdapat kesepakatan aktif atau transaksional antara pemberi dan penerima, sedangkan pada pemerasan aparatur memaksa atau mengancam pemohon layanan",
      "Pemerasan wajib dilaporkan dalam 30 hari kerja kepada inspektorat agar menjadi sah, sedangkan suap langsung diserahkan ke bendahara kantor",
      "Suap dilakukan di luar jam kerja dinas dengan persetujuan pimpinan, sedangkan pemerasan dilakukan saat jam kerja",
      "Pemerasan hanya berlaku pada pengadaan konstruksi fisik, sedangkan suap khusus untuk perizinan perorangan"
    ],
    "answer": "B",
    "explanation": "Suap bersifat transaksional (ada pertemuan kehendak atau kesepakatan antara pemberi dan penerima untuk berbuat atau tidak berbuat sesuatu), sedangkan pemerasan ditandai unsur paksaan oleh pejabat/pegawai agar masyarakat menyerahkan sesuatu demi mendapatkan hak layanannya.",
    "tip": "Bedakan pola hubungan pihak yang terlibat: kesepakatan dua arah (suap) versus paksaan sepihak penyelenggara negara (pemerasan)."
  },
  {
    "id": "twk-int-003",
    "subPattern": "antikorupsi-gratifikasi-dan-suap",
    "difficulty": "sedang",
    "prompt": "Seorang pejabat pembuat komitmen (PPK) menerima parsel hari raya dan voucer menginap di hotel senilai Rp4.500.000 dari rekanan yang tengah menunggu pencairan termin proyek konstruksi. Karena menolak di depan kurir menimbulkan kegaduhan di ruang tamu umum, barang tersebut sementara dititipkan di meja resepsionis kantor. Langkah yang paling berintegritas bagi PPK tersebut adalah ...",
    "options": [
      "Membagikan seluruh parsel kepada petugas keamanan kantor agar diri sendiri tidak menikmati isinya",
      "Menyimpan voucer hotel hingga masa proyek selesai baru digunakan bersama keluarga agar tidak terlihat",
      "Mencatat penerimaan barang tersebut, menolak penguasaan pribadi, dan segera melaporkannya kepada Unit Pengendalian Gratifikasi (UPG) atau KPK dalam batas waktu yang ditentukan",
      "Menukarkan parsel menjadi uang tunai untuk mengisi kas kegiatan rekreasi pegawai unit kerja",
      "Membiarkan barang di resepsionis tanpa pencatatan resmi selama sebulan lalu menganggapnya barang tak bertuan"
    ],
    "answer": "C",
    "explanation": "Apabila gratifikasi tidak dapat ditolak secara langsung saat pemberian, aparatur wajib melaporkan ke Unit Pengendalian Gratifikasi (UPG) instansi atau langsung ke KPK (maksimal 30 hari kerja, atau sesuai mekanisme UPG internal yang lebih singkat) agar status kepemilikannya ditetapkan resmi.",
    "tip": "Dalam kasus penerimaan tidak dapat ditolak langsung, mekanisme pelaporan resmi lewat UPG atau KPK adalah jalan integritas."
  },
  {
    "id": "twk-int-004",
    "subPattern": "antikorupsi-gratifikasi-dan-suap",
    "difficulty": "sedang",
    "prompt": "Dalam sembilan nilai antikorupsi yang dirumuskan KPK (jujur, peduli, mandiri, disiplin, tanggung jawab, kerja keras, sederhana, berani, dan adil), nilai \"sederhana\" dipandang sangat menentukan pencegahan korupsi di lingkungan ASN karena ...",
    "options": [
      "Mewajibkan setiap pegawai negeri menolak kenaikan penghasilan sah dan tunjangan kinerja",
      "Mengharuskan seluruh gedung layanan pemerintah menggunakan fasilitas minimal tanpa pemanfaatan teknologi",
      "Membatasi pegawai untuk tidak memiliki tabungan maupun investasi resmi di lembaga keuangan",
      "Mengendalikan gaya hidup konsumtif dan kecenderungan pamer kemewahan yang kerap memicu dorongan mencari penghasilan ilegal",
      "Menggantikan kewajiban penyusunan laporan harta kekayaan penyelenggara negara (LHKPN) setiap tahun"
    ],
    "answer": "D",
    "explanation": "Sikap hidup sederhana membantu aparatur hidup sesuai kemampuan penghasilan yang sah, menekan godaan serakah (greed) dan pamer gaya hidup mewah (flexing), sehingga menutup celah motivasi melakukan pungutan liar maupun korupsi.",
    "tip": "Kaitkan nilai kesederhanaan dengan pengendalian gaya hidup dan pencegahan motif keserakahan finansial."
  },
  {
    "id": "twk-int-005",
    "subPattern": "antikorupsi-gratifikasi-dan-suap",
    "difficulty": "sedang",
    "prompt": "Dalam mekanisme pembuktian tindak pidana gratifikasi berdasarkan Pasal 12B ayat (1) UU Nomor 20 Tahun 2001, perbedaan perlakuan hukum ketika nilai gratifikasi mencapai Rp10.000.000,00 atau lebih dibandingkan nilai di bawahnya adalah ...",
    "options": [
      "Untuk nilai di bawah Rp10.000.000,00 penerimaan dianggap sah sebagai uang terima kasih, sedangkan di atasnya wajib dikembalikan setengahnya",
      "Untuk nilai Rp10.000.000,00 atau lebih, penerima tidak dapat dituntut secara pidana apabila sudah dibelanjakan untuk kegiatan sosial",
      "Untuk nilai di bawah Rp10.000.000,00 kasus diselesaikan melalui denda administrasi kelurahan tanpa melibatkan penegak hukum",
      "Untuk nilai Rp10.000.000,00 atau lebih, perkara langsung dialihkan ke pengadilan tata usaha negara sebagai sengketa kepegawaian",
      "Untuk nilai Rp10.000.000,00 atau lebih, pembuktian bahwa gratifikasi itu bukan merupakan suap dibebankan kepada penerima gratifikasi (pembuktian terbalik)"
    ],
    "answer": "E",
    "explanation": "Pasal 12B ayat (1) UU No. 20 Tahun 2001 menetapkan sistem pembuktian terbalik terbatas: jika gratifikasi bernilai Rp10.000.000,00 atau lebih, penerimalah yang harus membuktikan bahwa pemberian itu bukan suap; jika kurang dari Rp10.000.000,00, pembuktian bahwa itu suap berada pada penuntut umum.",
    "tip": "Pahami ambang Rp10 juta dalam Pasal 12B UU Tipikor terkait pergeseran beban pembuktian."
  },
  {
    "id": "twk-int-006",
    "subPattern": "antikorupsi-gratifikasi-dan-suap",
    "difficulty": "sedang",
    "prompt": "Di sebuah loket pelayanan perizinan terpadu, seorang pemohon menaruh amplop berisi uang di balik map dokumen agar berkasnya diproses lebih cepat melampaui antrean resmi. Sebagai petugas loket, respons terbaik untuk membangun ekosistem bebas suap adalah ...",
    "options": [
      "Mengembalikan amplop tersebut langsung di tempat secara sopan, menegaskan seluruh layanan mengikuti antrean sesuai tarif resmi yang dipublikasikan, dan mencatat kejadian dalam buku kendali layanan",
      "Memasukkan uang tersebut ke dalam kotak amal pribadi kantor agar berkas pemohon tetap diproses di hari yang sama",
      "Menunda berkas pemohon tersebut hingga tiga minggu sebagai hukuman pribadi tanpa menjelaskan alasannya",
      "Menerima amplop secara diam-diam lalu tetap memproses berkas sesuai urutan agar tidak membuat pemohon tersinggung",
      "Meminta petugas lain menandatangani tanda terima amplop sebagai biaya percepatan lembur tidak resmi"
    ],
    "answer": "A",
    "explanation": "Integritas dalam pelayanan menuntut penolakan tegas namun santun terhadap pungli/suap percepatan (uang pelicin), penegasan prosedur antrean dan tarif resmi negara, serta pendokumentasian insiden agar menjadi bahan pengawasan pimpinan.",
    "tip": "Penolakan tegas, edukasi aturan antrean resmi, dan pelaporan kejadian memutus budaya uang pelicin."
  },
  {
    "id": "twk-int-007",
    "subPattern": "antikorupsi-gratifikasi-dan-suap",
    "difficulty": "sulit",
    "prompt": "Sebuah rumah sakit daerah memperoleh undangan seminar medis ke luar kota dari perusahaan alat kesehatan bagi tiga dokter ASN, lengkap dengan akomodasi tiket pesawat kelas bisnis dan uang saku khusus selama lima hari, sementara dalam dua bulan mendatang rumah sakit akan melelang pengadaan alat radiologi yang diikuti perusahaan tersebut. Penilaian integritas yang paling tepat atas fasilitas tersebut adalah ...",
    "options": [
      "Undangan boleh diterima penuh sepanjang para dokter menandatangani surat pernyataan tidak akan menceritakan merek perusahaan saat rapat pengadaan",
      "Fasilitas tersebut termasuk gratifikasi yang wajib ditolak atau dilaporkan karena berkaitan dengan jabatan serta berpotensi menimbulkan konflik kepentingan pada lelang mendatang",
      "Hanya biaya hotel yang wajib ditolak, sedangkan tiket kelas bisnis dan uang saku dikategorikan sebagai penghargaan profesi medis murni",
      "Penerimaan fasilitas menjadi legal otomatis jika perusahaan mengatasnamakan undangan tersebut kepada pasangan masing-masing dokter",
      "Sponsorship vendor calon peserta lelang diperbolehkan tanpa batasan selama dilaporkan secara lisan kepada kepala gudang farmasi"
    ],
    "answer": "B",
    "explanation": "Dalam regulasi pengendalian gratifikasi di sektor kesehatan dan pengadaan barang/jasa, sponsorship perorangan (tiket mewah, uang saku) dari calon penyedia menjelang proses tender merupakan gratifikasi terlarang karena memengaruhi independensi dan objektivitas pengadaan.",
    "tip": "Waspadai modus gratifikasi terselubung berupa sponsorship, seminar, atau fasilitas pihak ketiga yang memiliki relasi bisnis/lelang."
  },
  {
    "id": "twk-int-008",
    "subPattern": "antikorupsi-gratifikasi-dan-suap",
    "difficulty": "sulit",
    "prompt": "Menurut teori segitiga kecurangan (Fraud Triangle) yang sering dijadikan kerangka pencegahan korupsi birokrasi, tiga unsur yang mendorong seseorang melakukan penyimpangan anggaran negara adalah ...",
    "options": [
      "Kurangnya jumlah pegawai lapangan, rendahnya suhu ruang arsip, dan keterbatasan armada operasional",
      "Besarnya anggaran pembangunan, panjangnya rantai pasok, dan seringnya rapat evaluasi bulanan",
      "Tekanan (pressure), kesempatan akibat lemahnya pengendalian internal (opportunity), serta pembenaran diri atau rasionalisasi (rationalization)",
      "Ketidakpastian cuaca daerah, keterlambatan pengiriman logistik, dan perbedaan zona waktu antarwilayah",
      "Kompetensi teknologi pegawai, tingginya tingkat pendidikan formal, dan rotasi jabatan yang terlalu cepat"
    ],
    "answer": "C",
    "explanation": "Donald Cressey merumuskan Fraud Triangle terdiri atas pressure (tekanan ekonomi atau gaya hidup seperti jeratan judi daring/utang), opportunity (celah lemahnya kontrol pengawasan), dan rationalization (pembenaran mental seperti merasa berhak atau 'semua orang juga melakukannya').",
    "tip": "Kenali tiga elemen Fraud Triangle: pressure, opportunity, dan rationalization."
  },
  {
    "id": "twk-int-009",
    "subPattern": "konsistensi-kejujuran-dan-keteladanan",
    "difficulty": "mudah",
    "prompt": "Pengertian paling tepat dari integritas pribadi sebagai fondasi karakter aparatur negara adalah ...",
    "options": [
      "Kemampuan menyesuaikan ucapan sesuai keinginan audiens agar selalu memperoleh penilaian positif dari atasan",
      "Kepandaian menyusun alasan administratif supaya kekeliruan tim tidak terdeteksi saat audit tahunan",
      "Keberanian mengambil keputusan cepat tanpa perlu mempertimbangkan aturan hukum yang sedang berlaku",
      "Keselarasan antara pikiran, ucapan, dan perbuatan yang berpegang teguh pada kebenaran, kejujuran, serta prinsip moral meski tidak diawasi",
      "Kepatuhan menjalankan tugas hanya ketika atasan langsung melakukan pemantauan secara fisik di ruang kerja"
    ],
    "answer": "D",
    "explanation": "Integritas berarti keutuhan dan konsistensi antara nilai moral yang diyakini, ucapan yang disampaikan, serta tindakan nyata sehari-hari—tetap jujur dan amanah meskipun berada di luar jangkauan pengawasan langsung.",
    "tip": "Kata kunci utama integritas adalah keselarasan kata dengan perbuatan (walk the talk) kapan pun dan di mana pun."
  },
  {
    "id": "twk-int-010",
    "subPattern": "konsistensi-kejujuran-dan-keteladanan",
    "difficulty": "mudah",
    "prompt": "Ketika menyusun laporan hasil survei lapangan untuk program bantuan sosial, seorang staf menyadari terdapat kesalahan input data pada 15 keluarga penerima, padahal tenggat laporan sudah tersisa dua jam. Tindakan yang menunjukkan nilai kejujuran adalah ...",
    "options": [
      "Membiarkan data keliru tersebut tidak berubah agar laporan tetap terkirim sebelum batas waktu tanpa perlu koreksi",
      "Menyalahkan aplikasi pelaporan rusak secara lisan saat rapat pekan depan tanpa memperbarui berkas resmi",
      "Menghapus 15 baris data tersebut secara sepihak agar jumlah kekeliruan terlihat nol di sistem",
      "Meminta rekan kerjanya menandatangani laporan atas namanya supaya tidak ikut bertanggung jawab bila diaudit",
      "Segera memperbaiki data secara faktual berdasarkan catatan lapangan asli dan melaporkan keterlambatan kecil secara jujur kepada atasan bila diperlukan"
    ],
    "answer": "E",
    "explanation": "Kejujuran administratif menjaga keakuratan data publik yang menentukan ketepatan sasaran kebijakan negara. Melakukan koreksi berbasis fakta dan transparan atas kendala lebih terhormat dibanding memanipulasi angka demi mengejar ketepatan waktu semu.",
    "tip": "Kejujuran data jauh lebih penting daripada mengejar laporan cepat tetapi menyesatkan."
  },
  {
    "id": "twk-int-011",
    "subPattern": "konsistensi-kejujuran-dan-keteladanan",
    "difficulty": "sedang",
    "prompt": "Seorang bendahara kegiatan melihat kebiasaan rekan-rekannya menaikkan nominal kuitansi biaya makan rapat secara fiktif agar sisa dananya dapat disimpan sebagai dana taktis tim. Meski seluruh tim menganggapnya hal biasa demi solidaritas kelompok, sikap berintegritas yang tepat adalah ...",
    "options": [
      "Menolak pemalsuan kuitansi, mencatat pengeluaran riil sesuai bukti transaksi yang sah, serta mengusulkan skema anggaran resmi apabila memang ada kebutuhan operasional tambahan",
      "Mengikuti kebiasaan menaikkan kuitansi dengan syarat selisih dananya tidak dipakai untuk kepentingan pribadi bendahara",
      "Mengundurkan diri dari seluruh kepanitiaan resmi agar tim tetap bebas memalsukan bukti pengeluaran tanpa kehadirannya",
      "Membuat dua jenis pembukuan terpisah antara laporan resmi untuk inspektorat dan catatan asli untuk grup internal tim",
      "Mengurangi jumlah rapat nyata tetapi tetap mencairkan anggaran penuh sepanjang seluruh peserta rapat bersedia tanda tangan"
    ],
    "answer": "A",
    "explanation": "Tindakan mark-up kuitansi atau laporan fiktif (SPJ fiktif) tetap merupakan penyimpangan anggaran negara sekalipun mengatasnamakan dana taktis atau solidaritas kelompok. Integritas menuntut penolakan praktik manipulatif dan penegakan tata kelola sah.",
    "tip": "Waspadai rasionalisasi 'dana taktis tim' dalam mark-up SPJ; penyimpangan anggaran tetap pelanggaran hukum."
  },
  {
    "id": "twk-int-012",
    "subPattern": "konsistensi-kejujuran-dan-keteladanan",
    "difficulty": "sedang",
    "prompt": "Keteladanan pimpinan unit kerja sering jauh lebih efektif membentuk budaya integritas daripada sekadar spanduk imbauan. Contoh konkret keteladanan integritas seorang kepala bidang dalam penggunaan fasilitas dinas adalah ...",
    "options": [
      "Mengizinkan keluarga memakai kendaraan dinas berpelat merah saat liburan akhir pekan selama bensinnya diisi pribadi",
      "Menggunakan kendaraan dan aset dinas khusus untuk kepentingan tugas kedinasan, tepat waktu hadir kerja, serta tidak meminta hak istimewa di luar ketentuan",
      "Sering memberikan ceramah kejujuran setiap Senin pagi namun tetap menitipkan kerabat pada seleksi tenaga kontrak tanpa tes",
      "Menuntut staf tidak boleh terlambat satu menit pun sementara pimpinan sendiri bebas absen rapat rutin tanpa berita",
      "Menyerahkan seluruh keputusan sulit yang berisiko kepada bawahan agar nama baik pimpinan tetap bersih"
    ],
    "answer": "B",
    "explanation": "Keteladanan (role model) dibangun melalui konsistensi penggunaan aset negara khusus untuk dinas, kedisiplinan waktu, dan penegakan aturan yang sama antara pimpinan dan staf (tidak menerapkan standar ganda).",
    "tip": "Keteladanan sejati terlihat dari kesesuaian perilaku pimpinan sendiri terhadap aturan aset, disiplin, dan objektivitas."
  },
  {
    "id": "twk-int-013",
    "subPattern": "konsistensi-kejujuran-dan-keteladanan",
    "difficulty": "sedang",
    "prompt": "Merebaknya praktik judi daring (judi online) dan pinjaman daring ilegal di kalangan pekerja menimbulkan kerentanan serius terhadap integritas aparatur. Keterkaitan paling langsung antara keterlibatan pegawai dalam judi daring dan risiko korupsi di instansi adalah ...",
    "options": [
      "Pegawai cenderung rajin masuk lebih pagi demi menyelesaikan target kinerja tahunan lebih cepat",
      "Instansi memperoleh tambahan pemasukan pajak daerah yang meringankan beban belanja pegawai",
      "Jeratan utang akibat kekalahan judi daring menciptakan tekanan finansial berat yang mendorong penyalahgunaan wewenang, penggelapan kas, atau pembocoran data instansi",
      "Keterampilan analisis angka pegawai meningkat tajam sehingga mempercepat proses audit keuangan internal",
      "Hubungan kerja antarrekan menjadi lebih akrab karena kesamaan topik pembicaraan saat waktu istirahat"
    ],
    "answer": "C",
    "explanation": "Kecanduan judi daring merusak stabilitas ekonomi pribadi, menimbulkan tekanan utang akut (pressure), menurunkan fokus kerja, dan secara empiris menjadi pemicu utama penyalahgunaan kas kantor, pungli, maupun praktik jual beli akses data.",
    "tip": "Kaitkan fenomena judi daring dengan risiko pressure dalam penggelapan jabatan dan penurunan kehormatan ASN."
  },
  {
    "id": "twk-int-014",
    "subPattern": "konsistensi-kejujuran-dan-keteladanan",
    "difficulty": "sedang",
    "prompt": "Seorang pegawai mendapatkan tugas membuat kajian dampak lingkungan. Pada halaman penutup, ia secara tidak sengaja menyalin paragraf analisis milik peneliti lain tanpa mencantumkan sumber rujukan sebelum berkas dicetak untuk pimpinan. Sikap konsistensi kejujuran intelektual yang paling tepat adalah ...",
    "options": [
      "Membiarkan berkas tetap diajukan karena dokumen internal instansi pemerintah tidak dinilai oleh juri akademis",
      "Menghapus nama penulis asli dari daftar pustaka agar pimpinan menilai seluruh analisis berasal dari idenya sendiri",
      "Mengubah beberapa kata sambung secara acak tanpa menyertakan sitasi agar lolos deteksi perangkat lunak plagiarisme",
      "Segera menarik kembali draf sebelum rapat dimulai, memperbaiki pengutipan secara jujur sesuai etika ilmiah, dan meminta maaf atas kelalaian penyuntingan",
      "Menyalahkan anggota tim termuda sebagai pembuat draf agar reputasinya sebagai pegawai senior tidak terganggu"
    ],
    "answer": "D",
    "explanation": "Integritas mencakup kejujuran intelektual dan anti-plagiarisme. Mengakui kekeliruan penyuntingan secara terbuka dan mencantumkan sumber rujukan yang sah menjaga kredibilitas kajian kebijakan publik.",
    "tip": "Integritas intelektual menuntut pengakuan jujur atas karya atau gagasan pihak lain melalui sitasi yang benar."
  },
  {
    "id": "twk-int-015",
    "subPattern": "konsistensi-kejujuran-dan-keteladanan",
    "difficulty": "sulit",
    "prompt": "Dalam budaya kerja sebuah instansi, pegawai yang disiplin dan jujur menolak memalsukan absensi maupun kuitansi justru kerap dicap \"sok suci\" dan dijauhi pergaulan informal kantor. Menghadapi tekanan sosial (peer pressure) demikian, prinsip ketahanan integritas yang paling tepat dipegang aparatur adalah ...",
    "options": [
      "Menyesuaikan diri mengikuti pelanggaran kecil agar tetap diterima dalam pergaulan kelompok sebelum berusaha memperbaikinya dari dalam",
      "Menyerang balik rekan kerja secara emosional dan memutus seluruh kerja sama tim kedinasan di ruang kerja",
      "Berhenti melaporkan seluruh penyimpangan dan berfokus menjaga hubungan harmonis semu dengan semua rekan",
      "Meminta mutasi ke unit terpencil setiap kali menemukan budaya kerja yang tidak ideal di instansi mana pun",
      "Tetap teguh menjaga standar kejujuran dengan sikap rendah hati dan profesional dalam bekerja bersama tim, tanpa menggurui secara arogan maupun berkompromi pada kecurangan"
    ],
    "answer": "E",
    "explanation": "Ketahanan integritas diuji saat lingkungan tidak mendukung. Solusi paling matang adalah mempertahankan keteguhan prinsip tanpa mengorbankan etika kerja sama profesional dan kerendahan hati sosial—karena perilaku konsisten yang tulus perlahan membangun respek dan menjadi standar baru.",
    "tip": "Keteguhan moral harus tetap disertai profesionalisme kolaborasi tanpa kompromi atas pelanggaran aturan."
  },
  {
    "id": "twk-int-016",
    "subPattern": "konsistensi-kejujuran-dan-keteladanan",
    "difficulty": "sulit",
    "prompt": "Mengapa seorang penguji integritas lebih menilai kesediaan mengakui kesalahan secara jujur saat terjadi kekeliruan teknis dibandingkan kemampuan menutupi cacat pekerjaan dengan laporan yang tampak sempurna?",
    "options": [
      "Pengakuan jujur memungkinkan perbaikan sistemik sejak dini sehingga mencegah kerugian negara yang jauh lebih besar di kemudian hari",
      "Laporan yang tampak sempurna biasanya membutuhkan waktu pencetakan lebih lama dan lebih banyak kertas kantor",
      "Menutupi kesalahan dianggap wajar hanya bila pejabat terkait belum pernah menerima teguran tertulis sebelumnya",
      "Kesediaan mengakui kesalahan membebaskan seluruh pegawai dari kewajiban memperbaiki akar masalah prosedural",
      "Penutupan informasi kesalahan diizinkan selama tidak diketahui media massa hingga masa pensiun pejabat"
    ],
    "answer": "A",
    "explanation": "Keberanian mengakui kesalahan (accountability and moral courage) membuka ruang koreksi cepat sebelum cacat prosedur terakumulasi menjadi krisis hukum atau kerugian keuangan negara yang lebih besar.",
    "tip": "Lihat manfaat jangka panjang pengakuan kesalahan bagi mitigasi risiko dan perbaikan sistem organisasi."
  },
  {
    "id": "twk-int-017",
    "subPattern": "kode-etik-dan-nilai-dasar-asn",
    "difficulty": "mudah",
    "prompt": "Undang-Undang Nomor 20 Tahun 2023 Pasal 3 ayat (2) menetapkan nilai dasar (core values) ASN yang dikenal dengan akronim BerAKHLAK. Nilai dasar yang menekankan komitmen memahami dan memenuhi kebutuhan masyarakat serta bersikap ramah, cekatan, solutif, dan dapat diandalkan adalah ...",
    "options": [
      "Kompeten",
      "Berorientasi Pelayanan",
      "Harmonis",
      "Adaptif",
      "Kolaboratif"
    ],
    "answer": "B",
    "explanation": "Dalam panduan perilaku core values ASN BerAKHLAK, nilai Berorientasi Pelayanan dicirikan dengan sikap memahami dan memenuhi kebutuhan masyarakat; ramah, cekatan, solutif, dan dapat diandalkan; serta melakukan perbaikan tiada henti.",
    "tip": "Ingat panduan kata kunci tujuh nilai BerAKHLAK dalam UU No. 20 Tahun 2023."
  },
  {
    "id": "twk-int-018",
    "subPattern": "kode-etik-dan-nilai-dasar-asn",
    "difficulty": "mudah",
    "prompt": "Salah satu kode etik penting ASN dalam pengelolaan data publik di era digital adalah menjaga kerahasiaan informasi yang menyangkut kepentingan negara dan privasi warga. Pelanggaran langsung terhadap kode etik ini ditunjukkan oleh tindakan ...",
    "options": [
      "Memublikasikan jadwal layanan resmi instansi pada papan pengumuman dan laman web pemerintah",
      "Menyediakan formulir pengaduan layanan yang dapat diakses masyarakat umum secara terbuka",
      "Memotret data kependudukan (NIK dan nomor ponsel) pemohon layanan lalu menjualnya kepada agen pemasaran pinjaman swasta",
      "Membagikan informasi lowongan magang resmi melalui akun terverifikasi instansi",
      "Menyusun statistik agregat anonim jumlah pengunjung layanan bulanan untuk laporan kinerja"
    ],
    "answer": "C",
    "explanation": "Membocorkan dan memperjualbelikan data pribadi warga atau informasi rahasia jabatan untuk keuntungan pribadi melanggar kode etik ASN, UU Perlindungan Data Pribadi (UU PDP), dan asas akuntabilitas.",
    "tip": "Bedakan informasi publik resmi/agregat anonim dengan kebocoran data pribadi (NIK/kontak warga)."
  },
  {
    "id": "twk-int-019",
    "subPattern": "kode-etik-dan-nilai-dasar-asn",
    "difficulty": "sedang",
    "prompt": "Seorang pegawai negeri bertugas di unit kepegawaian yang mengelola basis data naskah soal seleksi internal. Suatu hari, tetangganya menawarkan imbalan tinggi agar diberikan bocoran materi dan kunci jawaban tes tersebut. Berdasarkan kode etik dan integritas ASN, sikap wajib pegawai tersebut adalah ...",
    "options": [
      "Menolak imbalan uang, tetapi memberikan kisi-kisi umum rahasia jabatan agar tidak merusak hubungan bertetangga",
      "Memberikan sebagian kecil soal latihan yang belum diumumkan demi membantu tetangga belajar lebih terarah",
      "Menyerahkan pengelolaan seluruh kunci jawaban kepada tetangga dengan alasan menjaga objektivitas diri sendiri",
      "Menolak tegas permintaan tersebut, menjaga kerahasiaan dokumen negara sepenuhnya, serta melaporkan potensi upaya intervensi kepada atasan berwenang",
      "Meminta tetangga mengikuti bimbingan belajar swasta yang dikelolanya dengan menjanjikan jaminan kelulusan"
    ],
    "answer": "D",
    "explanation": "Menjaga integritas seleksi dan kerahasiaan negara melarang segala bentuk pembocoran instrumen ujian, baik berupa soal utuh maupun kisi-kisi rahasia jabatan. Penolakan tegas dan pelaporan upaya penyuapan/intervensi menjaga keadilan sistem merit.",
    "tip": "Sistem merit dan keadilan publik bergantung pada kerahasiaan mutlak instrumen seleksi negara."
  },
  {
    "id": "twk-int-020",
    "subPattern": "kode-etik-dan-nilai-dasar-asn",
    "difficulty": "sedang",
    "prompt": "Penerapan nilai dasar \"Akuntabel\" dalam core values BerAKHLAK ketika seorang ASN mengelola anggaran operasional dan aset milik negara tercermin paling tepat pada perilaku ...",
    "options": [
      "Menghabiskan seluruh sisa anggaran perjalanan dinas di akhir tahun lewat kegiatan seremonial agar pagu tahun depan tidak dipotong",
      "Menyimpan barang inventaris laptop kantor di rumah secara pribadi tanpa tercatat di daftar peminjaman aset unit",
      "Menyerahkan seluruh kata sandi akun pengadaan elektronik pribadinya kepada rekan sesama tim supaya proses input lebih cepat",
      "Menunda penyelesaian pertanggungjawaban keuangan selama dua semester agar seluruh tagihan menumpuk dalam satu berkas",
      "Melaksanakan tugas dengan jujur, bertanggung jawab, cermat, disiplin, berintegritas tinggi, serta menggunakan kekayaan negara secara efektif dan efisien"
    ],
    "answer": "E",
    "explanation": "Panduan perilaku nilai Akuntabel dalam BerAKHLAK mencakup: melaksanakan tugas dengan jujur, bertanggung jawab, cermat, disiplin, dan berintegritas tinggi; menggunakan kekayaan dan barang milik negara secara bertanggung jawab, efektif, dan efisien; serta tidak menyalahgunakan kewenangan jabatan.",
    "tip": "Cocokkan kata kunci perilaku: cermat, efektif-efisien atas aset negara, dan tidak menyalahgunakan wewenang = Akuntabel."
  },
  {
    "id": "twk-int-021",
    "subPattern": "kode-etik-dan-nilai-dasar-asn",
    "difficulty": "sedang",
    "prompt": "Ketika sistem layanan kantor beralih dari berkas manual ke aplikasi digital terpadu, beberapa pegawai senior merasa enggan mempelajari sistem baru sehingga antrean warga menjadi terhambat. Sikap seorang ASN muda yang selaras dengan nilai \"Adaptif\" dan \"Kolaboratif\" adalah ...",
    "options": [
      "Membantu membimbing rekan senior mengoperasikan sistem baru dengan sabar dan membuat panduan ringkas bersama tim agar transisi layanan berjalan lancar",
      "Mengambil alih seluruh akun dan kata sandi rekan senior tanpa mengajarkan cara pakainya agar beban pekerjaan cepat selesai",
      "Melaporkan rekan senior tersebut secara terbuka sebagai pegawai tidak kompeten dalam grup percakapan umum warga",
      "Membiarkan rekan senior tetap bekerja memakai formulir kertas manual tanpa berkoordinasi dengan sistem pusat",
      "Mengusulkan penghapusan sistem aplikasi digital agar kantor kembali menggunakan pencatatan buku tulis"
    ],
    "answer": "A",
    "explanation": "Nilai Adaptif (cepat menyesuaikan diri menghadapi perubahan teknologi) dipadukan dengan nilai Kolaboratif dan Harmonis diwujudkan melalui dukungan aktif berbagi pengetahuan kepada rekan kerja sehingga kinerja organisasi meningkat menyeluruh tanpa mengorbankan pelayanan warga.",
    "tip": "Gabungkan kesiapan menghadapi inovasi (Adaptif) dengan kesediaan bersinergi membantu rekan kerja (Kolaboratif)."
  },
  {
    "id": "twk-int-022",
    "subPattern": "kode-etik-dan-nilai-dasar-asn",
    "difficulty": "sedang",
    "prompt": "Di ruang tunggu kantor Dinas Kependudukan, seorang lansia penyandang disabilitas kesulitan mengisi formulir digital di anjungan mandiri, sementara antrean umum cukup padat. Implementasi kode etik pelayanan publik yang paling tepat adalah ...",
    "options": [
      "Meminta lansia tersebut pulang dan kembali besok dengan membawa pendamping keluarga sendiri agar tidak menghambat antrean lain",
      "Memprioritaskan pelayanan ramah kelompok rentan sesuai jalur prioritas resmi, mendampingi pengisian formulir dengan empati, dan tetap tertib menjaga keadilan antrean",
      "Menyerahkan pengisian formulir kepada calo jasa di luar pagar kantor dengan biaya administrasi sukarela",
      "Mengabaikan kesulitan pemohon sampai seluruh antrean umum kosong pada pukul empat sore",
      "Mengisi data lansia secara asal tanpa menanyakan kebenaran identitas agar pemohon cepat meninggalkan ruangan"
    ],
    "answer": "B",
    "explanation": "Dalam standar pelayanan publik (UU No. 25 Tahun 2009 tentang Pelayanan Publik), penyelenggara wajib memberikan perlakuan khusus berupa akses dan jalur prioritas yang tertib bagi kelompok rentan seperti lansia, ibu hamil, dan penyandang disabilitas.",
    "tip": "Pelayanan inklusif dan berkeadilan memprioritaskan kelompok rentan melalui pendampingan resmi tanpa pungutan liar."
  },
  {
    "id": "twk-int-023",
    "subPattern": "kode-etik-dan-nilai-dasar-asn",
    "difficulty": "sulit",
    "prompt": "Seorang ASN memiliki kanal media sosial pribadi dengan puluhan ribu pengikut. Saat pulang kerja, ia merekam keluhan mengenai lambatnya sistem penganggaran kantor dengan menyebut nama atasan serta memperlihatkan sebagian draf surat dinas internal yang belum disahkan untuk meraih simpati warganet. Dari perspektif kode etik dan disiplin ASN, kesalahan paling mendasar dari tindakan tersebut adalah ...",
    "options": [
      "ASN dilarang memiliki akun media sosial pribadi apa pun selama berstatus aktif bekerja pada pemerintah",
      "Perekaman video seharusnya dilakukan di ruang publik berbayar dengan mengenakan pakaian dinas lengkap",
      "Penyebaran dokumen dinas internal yang belum final dan serangan personal di ruang publik melanggar kewajiban menjaga rahasia jabatan, etika komunikasi organisasi, dan saluran pengaduan resmi",
      "Kritik terhadap kinerja internal kantor baru diperbolehkan di media sosial apabila sudah mendapat izin tertulis dari pihak swasta",
      "Pegawai hanya boleh mengunggah kritik kebijakan instansi menggunakan akun anonim tanpa mencantumkan nama asli"
    ],
    "answer": "C",
    "explanation": "ASN yang menemukan kendala tata kelola wajib menempuh mekanisme klarifikasi internal berjenjang, inspektorat, atau sistem pengaduan internal yang sah—bukan menyebarkan draf dokumen jabatan belum final dan mencemarkan martabat organisasi/individu secara terbuka di media sosial.",
    "tip": "Evaluasi penyimpangan pada aspek kerahasiaan dokumen jabatan dan etika penyampaian aspirasi melalui kanal resmi."
  },
  {
    "id": "twk-int-024",
    "subPattern": "kode-etik-dan-nilai-dasar-asn",
    "difficulty": "sulit",
    "prompt": "Dalam manajemen talenta dan nilai dasar \"Kompeten\" pada UU ASN terbaru, seorang aparatur tidak hanya dituntut mempertahankan keahlian teknis masa lalu, tetapi juga terus belajar (lifelong learning). Kaitan langsung antara peningkatan kompetensi berkelanjutan dan integritas aparatur adalah ...",
    "options": [
      "Pegawai yang memiliki gelar akademik paling tinggi otomatis dibebaskan dari pemeriksaan audit atas setiap keputusannya",
      "Pelatihan kompetensi terutama berguna agar pegawai dapat menuntut kenaikan honorarium kegiatan di setiap proyek baru",
      "Penguasaan keahlian teknis membuat pegawai tidak lagi wajib berkoordinasi dengan unit pengawas internal kantor",
      "Kompetensi yang mumpuni mencegah pegawai mengambil jalan pintas manipulatif atau bergantung secara tidak sehat pada pihak luar akibat ketidaktahuan prosedural",
      "Peningkatan kompetensi memungkinkan satu pegawai merangkap jabatan eksekutif di perusahaan rekanan pemerintah"
    ],
    "answer": "D",
    "explanation": "Banyak penyimpangan terjadi bukan hanya karena niat jahat, melainkan juga kerentanan akibat kurang paham regulasi dan ketergantungan pada vendor/pihak luar. Penguasaan kompetensi profesional membentengi integritas agar aparatur bekerja tepat aturan dan mandiri.",
    "tip": "Lihat bagaimana penguasaan kompetensi melindungi profesionalitas dari ketergantungan pada pihak eksternal."
  },
  {
    "id": "twk-int-025",
    "subPattern": "konflik-kepentingan-dan-penyalahgunaan-wewenang",
    "difficulty": "mudah",
    "prompt": "Situasi ketika seorang pejabat atau pegawai negeri memiliki kepentingan pribadi, keluarga, atau golongan yang berpotensi memengaruhi objektivitas dan netralitas dalam menjalankan tugas jabatannya disebut ...",
    "options": [
      "Diskresi administrasi",
      "Delegasi kewenangan",
      "Efisiensi struktural",
      "Sinergi kemitraan",
      "Konflik kepentingan"
    ],
    "answer": "E",
    "explanation": "Konflik kepentingan (conflict of interest) terjadi ketika kepentingan pribadi/afiliasi memengaruhi (atau patut diduga dapat memengaruhi) kemandirian, objektivitas, dan kualitas keputusan resmi seorang pejabat publik.",
    "tip": "Kenali definisi baku conflict of interest dalam tata kelola pemerintahan yang bersih."
  },
  {
    "id": "twk-int-026",
    "subPattern": "konflik-kepentingan-dan-penyalahgunaan-wewenang",
    "difficulty": "mudah",
    "prompt": "Tindakan terbaik seorang anggota tim panitia seleksi pengadaan barang pemerintah begitu mengetahui bahwa salah satu perusahaan peserta tender ternyata dikelola oleh kakak kandungnya sendiri adalah ...",
    "options": [
      "Mendeklarasikan hubungan keluarga tersebut secara tertulis kepada pimpinan dan mengundurkan diri dari kepanitiaan tender yang bersangkutan",
      "Tetap bertahan menjadi penilai sambil diam-diam memberikan nilai sedikit lebih rendah kepada perusahaan kakak kandungnya",
      "Memberitahukan kekurangan berkas kompetitor kepada kakaknya agar perusahaan keluarga menang secara tampak wajar",
      "Meminta kakaknya tetap mengikuti lelang memakai nama perusahaan pinjaman milik tetangga agar tidak terdeteksi sistem",
      "Tidak mengisi lembar penilaian milik perusahaan kakaknya saja, namun tetap menilai seluruh peserta pesaingnya"
    ],
    "answer": "A",
    "explanation": "Deklarasi konflik kepentingan (disclosure) dan menarik diri (recusal) dari proses pengambilan keputusan yang melibatkan keluarga merupakan standar etika wajib guna menjamin keadilan dan mencegah penyalahgunaan wewenang.",
    "tip": "Prinsip utama penanganan konflik kepentingan: akui secara terbuka (declare) dan mundur dari keputusan terkait (recuse)."
  },
  {
    "id": "twk-int-027",
    "subPattern": "konflik-kepentingan-dan-penyalahgunaan-wewenang",
    "difficulty": "sedang",
    "prompt": "Seorang kepala dinas menandatangani surat penunjukan langsung kepada perusahaan percetakan milik menantunya untuk mencetak modul sosialisasi senilai anggaran tertentu dengan alasan \"kualitasnya sudah kita kenal baik dan pengerjaannya cepat\". Penyimpangan utama pada kasus tersebut adalah ...",
    "options": [
      "Keterlambatan pengiriman modul ke gudang penyimpanan akibat pencetakan pada akhir bulan",
      "Penyalahgunaan wewenang akibat konflik kepentingan hubungan kekerabatan (nepotisme) yang mencederai prinsip persaingan sehat dan akuntabilitas anggaran",
      "Penggunaan bahasa Indonesia yang kurang baku pada sampul buku modul sosialisasi dinas",
      "Pemilihan ukuran kertas cetak standar yang berbeda dengan format surat edaran tahun lalu",
      "Penyerahan laporan pencetakan secara digital sebelum seluruh modul fisik dibagikan kepada peserta"
    ],
    "answer": "B",
    "explanation": "Menggunakan kewenangan jabatan untuk menguntungkan usaha kerabat (nepotisme) secara langsung melanggar prinsip pengadaan yang terbuka, adil, bebas KKN, serta berpotensi masuk kategori penyalahgunaan wewenang.",
    "tip": "Dalih kedekatan mutu atau kecepatan tidak pernah membenarkan penunjukan langsung kepada keluarga pejabat."
  },
  {
    "id": "twk-int-028",
    "subPattern": "konflik-kepentingan-dan-penyalahgunaan-wewenang",
    "difficulty": "sedang",
    "prompt": "Dalam konsep hukum administrasi pemerintahan (UU No. 30 Tahun 2014 tentang Administrasi Pemerintahan), perbedaan mendasar antara \"penggunaan diskresi yang sah\" dan \"penyalahgunaan wewenang\" terletak pada ...",
    "options": [
      "Penggunaan diskresi hanya boleh dilakukan oleh pejabat eselon terendah pada hari libur nasional",
      "Penyalahgunaan wewenang selalu bebas dari sanksi hukum apabila menghasilkan keuntungan finansial bagi rekanan lokal",
      "Diskresi sah digunakan untuk mengatasi persoalan konkret yang mendesak demi kepentingan umum sesuai asas pemerintahan yang baik, sedangkan penyalahgunaan wewenang menyimpangi tujuan pemberian mandat demi kepentingan pribadi atau pihak tertentu",
      "Diskresi tidak memerlukan dasar pertimbangan tertulis dan boleh mengabaikan seluruh peraturan perundang-undangan yang berlaku",
      "Penyalahgunaan wewenang hanya terjadi apabila pejabat tidak menandatangani daftar hadir rapat mingguan"
    ],
    "answer": "C",
    "explanation": "Pasal 1 angka 9 dan Pasal 17–24 UU No. 30 Tahun 2014 membedakan diskresi (keputusan pejabat untuk mengatasi stagnasi atau kepentingan mendesak berlandaskan AUPB/asas umum pemerintahan yang baik dan tidak melampaui/mencampuradukkan wewenang) dari penyalahgunaan wewenang untuk tujuan lain di luar mandat hukum.",
    "tip": "Periksa tujuan tindakan (kepentingan umum vs pribadi/kelompok) dan kesesuaian dengan AUPB."
  },
  {
    "id": "twk-int-029",
    "subPattern": "konflik-kepentingan-dan-penyalahgunaan-wewenang",
    "difficulty": "sedang",
    "prompt": "Seorang auditor internal instansi daerah ditawari oleh kepala bagian keuangan yang sedang diperiksanya untuk menjadi konsultan berbayar dalam penyusunan laporan akhir tahun bagian tersebut agar temuan audit tidak muncul. Tindakan yang tepat sesuai etika profesi pengawas adalah ...",
    "options": [
      "Menerima tawaran konsultan tersebut setelah jam kerja agar independensi audit di kantor tetap tampak terjaga",
      "Meminta honorarium jasa konsultansi dialihkan melalui nama perusahaan milik staf administrasi auditor lain",
      "Mengizinkan kepala bagian keuangan membayar tarif konsultansi dalam bentuk barang inventaris ruang rapat",
      "Menolak tegas tawaran konsultan berbayar karena fungsi pengawasan/auditor tidak boleh merangkap sebagai penyusun objek yang diauditnya sendiri",
      "Membatalkan audit tahunan pada bagian keuangan tersebut agar tidak timbul kecurigaan rekan kerja lain"
    ],
    "answer": "D",
    "explanation": "Peran pengawas (auditor) menuntut independensi mutlak dari objek pemeriksaan (auditee). Menerima pekerjaan konsultan berbayar dari pihak yang diperiksa menciptakan konflik kepentingan ganda dan merusak integritas pengawasan keuangan negara.",
    "tip": "Seorang pengawas/auditor wajib menjaga jarak independen dan tidak boleh memeriksa pekerjaan komersialnya sendiri."
  },
  {
    "id": "twk-int-030",
    "subPattern": "konflik-kepentingan-dan-penyalahgunaan-wewenang",
    "difficulty": "sedang",
    "prompt": "Ketika bertugas di tim perizinan lingkungan, Rendi mengetahui perusahaan tempat ayahnya duduk sebagai komisaris mengajukan izin perluasan pabrik. Sebelum keputusan rapat pleno diambil, alasan paling mendasar mengapa Rendi wajib menyatakan konflik kepentingan meski ia yakin dapat bersikap objektif adalah ...",
    "options": [
      "Peraturan mengharuskan seluruh anggota keluarga pejabat negara tidak diperbolehkan bekerja di sektor swasta mana pun",
      "Prosedur rapat hanya dapat dimulai apabila seluruh anggota tim berasal dari luar provinsi asal perusahaan pemohon",
      "Tanggung jawab hukum atas dampak lingkungan perusahaan sepenuhnya akan beralih ke rekening pribadi petugas verifikasi",
      "Keputusan rapat perlu mendapat persetujuan seluruh warga kampung sekitar melalui pemungutan suara tertutup",
      "Konflik kepentingan bukan hanya soal niat subjektif, melainkan juga potensi pengaruh tersembunyi serta persepsi ketidakpercayaan publik atas independensi keputusan negara"
    ],
    "answer": "E",
    "explanation": "Etika pemerintahan bersih mencegah konflik kepentingan aktual, potensial, maupun yang tampak oleh publik (perceived conflict of interest), karena kepercayaan masyarakat terhadap objektivitas keputusan negara sama pentingnya dengan objektivitas itu sendiri.",
    "tip": "Konflik kepentingan juga mencakup aspek potensi dan persepsi kepercayaan publik terhadap keadilan negara."
  },
  {
    "id": "twk-int-031",
    "subPattern": "konflik-kepentingan-dan-penyalahgunaan-wewenang",
    "difficulty": "sulit",
    "prompt": "Sebuah lembaga layanan perizinan daring memperkenalkan mekanisme \"jalur percepatan konsultasi\" berbayar di luar PNBP resmi yang pengelolaannya diserahkan kepada koperasi pegawai kantor, dengan dalih uangnya dipakai untuk kesejahteraan staf dan pemeliharaan taman kantor. Analisis integritas atas kebijakan tersebut adalah ...",
    "options": [
      "Kebijakan tersebut tetap menyimpang sebagai penyalahgunaan wewenang dan pungutan tidak sah karena layanan publik hanya boleh memungut biaya sesuai dasar hukum resmi masuk kas negara/daerah",
      "Kebijakan dapat dibenarkan selama koperasi pegawai menyetorkan sepersepuluh hasilnya ke kas bendahara pengeluaran setiap akhir tahun",
      "Layanan konsultasi berbayar oleh koperasi pegawai sah secara penuh karena membantu masyarakat memperoleh kejelasan dokumen lebih cepat",
      "Tidak ada pelanggaran integritas sepanjang pimpinan kantor tidak menerima bagian dividen tahunan dari koperasi tersebut",
      "Praktik tersebut diperbolehkan jika tarif percepatan ditetapkan berdasarkan kesepakatan lisan antara pegawai loket dan asosiasi pengusaha"
    ],
    "answer": "A",
    "explanation": "Mengomersialkan layanan inti pemerintahan atau memberi keistimewaan percepatan antrean lewat pungutan di luar tarif resmi negara/daerah (PNBP/retribusi sah) melanggar hukum pelayanan publik dan merupakan penyalahgunaan wewenang kelembagaan meski berlindung di balik nama koperasi.",
    "tip": "Segala pungutan layanan publik wajib memiliki landasan peraturan sah dan masuk ke kas resmi negara/daerah, bukan kas informal."
  },
  {
    "id": "twk-int-032",
    "subPattern": "konflik-kepentingan-dan-penyalahgunaan-wewenang",
    "difficulty": "sulit",
    "prompt": "Seorang mantan pejabat pengambil keputusan teknis di bidang pertambangan baru saja pensiun satu bulan lalu dan langsung direkrut menjadi direktur pelaksana di perusahaan swasta yang tiga bulan sebelumnya memperoleh izin usaha darinya saat masih aktif menjabat. Dari sudut pandang tata kelola integritas publik, fenomena berisiko ini dikenal sebagai masalah ...",
    "options": [
      "Rotasi talenta meritokrasi yang selalu meningkatkan efisiensi sektor swasta tanpa risiko regulasi",
      "Pintu putar (revolving door) yang berisiko menyalahgunakan informasi orang dalam serta memicu dugaan balas jasa atas keputusan jabatan terdahulu",
      "Desentralisasi fiskal lintas kementerian yang mempercepat masuknya investasi infrastruktur daerah",
      "Keterbukaan informasi badan publik yang memudahkan audit masyarakat terhadap kinerja pertambangan",
      "Otonomi pengawasan independen antara pejabat aktif dan konsultan keuangan negara"
    ],
    "answer": "B",
    "explanation": "Revolving door (pintu putar) terjadi saat pejabat berpindah cepat ke perusahaan yang baru saja ia atur/izinkan (tanpa masa tunggu/cooling-off period yang etis), yang berpotensi menimbulkan penyalahgunaan informasi rahasia negara dan dugaan transaksi kepentingan selama menjabat.",
    "tip": "Kenali istilah revolving door dan kebutuhan masa tunggu (cooling-off) untuk menjaga kemandirian keputusan publik."
  },
  {
    "id": "twk-int-033",
    "subPattern": "whistleblowing-transparansi-dan-akuntabilitas",
    "difficulty": "mudah",
    "prompt": "Tujuan utama dibangunnya Sistem Penanganan Pengaduan Tindak Pidana Korupsi atau Whistleblowing System (WBS) di kementerian maupun pemerintah daerah adalah ...",
    "options": [
      "Membuka forum gosip terbuka bagi seluruh pegawai untuk saling menjatuhkan pesaing promosi jabatan",
      "Menggantikan seluruh fungsi pemeriksaan rutin oleh Badan Pemeriksa Keuangan (BPK) dan Inspektorat",
      "Menyediakan saluran aman dan rahasia bagi pegawai atau pihak internal/eksternal untuk melaporkan dugaan penyimpangan tanpa takut akan balasan",
      "Menunda proses penyelidikan aparat penegak hukum dengan cara menyelesaikan seluruh kasus secara tertutup tanpa sanksi",
      "Mewajibkan setiap pelapor menyertakan persetujuan tanda tangan terlapor sebelum laporan diproses"
    ],
    "answer": "C",
    "explanation": "Whistleblowing System (WBS) memberi kanal aman dengan jaminan kerahasiaan identitas pelapor dan perlindungan dari tindakan pembalasan (retaliation), guna mengungkap kecurangan tersembunyi sedini mungkin.",
    "tip": "Esensi WBS: saluran aman + kerahasiaan/perlindungan pelapor + deteksi dini pelanggaran."
  },
  {
    "id": "twk-int-034",
    "subPattern": "whistleblowing-transparansi-dan-akuntabilitas",
    "difficulty": "mudah",
    "prompt": "Berdasarkan Undang-Undang Nomor 14 Tahun 2008 tentang Keterbukaan Informasi Publik (UU KIP), dokumen yang wajib disediakan dan diumumkan secara berkala oleh badan publik agar akuntabilitas terjaga meliputi ...",
    "options": [
      "Data rekam medis rinci pasien puskesmas, kata sandi server keamanan internal, dan dokumen rahasia pertahanan negara",
      "Daftar pinjaman pribadi pegawai, alamat rumah seluruh pelapor WBS, dan rahasia dagang pemohon izin",
      "Dokumen pembahasan strategi pembelaan negara dalam sengketa dagang internasional yang sedang berjalan",
      "Informasi profil instansi, ringkasan program dan kegiatan, ringkasan laporan keuangan, serta informasi peraturan dan prosedur layanan publik",
      "Riwayat percakapan pribadi pimpinan unit di telepon genggam pribadi di luar urusan dinas"
    ],
    "answer": "D",
    "explanation": "Pasal 9 UU No. 14 Tahun 2008 mewajibkan badan publik mengumumkan informasi berkala seperti profil lembaga, program/kegiatan, kinerja, laporan keuangan, dan prosedur layanan; sedangkan data pribadi, rahasia negara, dan identitas pelapor termasuk informasi yang dikecualikan.",
    "tip": "Bedakan informasi berkala wajib umum (anggaran, program, layanan) dengan informasi yang dikecualikan (privasi, keamanan, identitas pelapor)."
  },
  {
    "id": "twk-int-035",
    "subPattern": "whistleblowing-transparansi-dan-akuntabilitas",
    "difficulty": "sedang",
    "prompt": "Seorang staf IT menemukan adanya rekayasa nilai pemenang tender yang melibatkan kepala bagian di unit kerjanya sendiri. Ia memiliki log sistem autentik yang membuktikan perubahan data setelah penutupan batas unggah dokumen. Langkah pelaporan yang paling aman, efektif, dan akuntabel adalah ...",
    "options": [
      "Mengunggah tangkapan layar sistem lengkap bersama nama seluruh pegawai unit ke akun media sosial tanpa verifikasi kanal resmi",
      "Menemui langsung rekanan yang dirugikan lalu meminta imbalan agar bersedia membocorkan log perubahan data tersebut",
      "Mengabaikan temuan log sistem tersebut karena secara struktural staf IT berada di bawah perintah langsung kepala bagian",
      "Menghapus log perubahan tersebut dari basis data kantor supaya tidak ada pegawai yang terseret kasus hukum",
      "Mengamankan salinan bukti log secara legal lalu melaporkannya melalui kanal Whistleblowing System resmi (Inspektorat Jenderal, APIP terkait, atau portal pengaduan nasional/KPK) yang menjamin kerahasiaan pelapor"
    ],
    "answer": "E",
    "explanation": "Ketika terlapor merupakan atasan langsung di unit yang sama, melapor secara berjenjang ke pelaku tentu tidak efektif. Kanal WBS independen (Inspektorat/APIP, Ombudsman, atau KPK) disertai bukti objektif yang dijaga keasliannya memastikan penindakan akurat sekaligus melindungi identitas pelapor.",
    "tip": "Jika atasan langsung terlibat, gunakan saluran pengawasan independen/WBS resmi disertai bukti awal yang sah."
  },
  {
    "id": "twk-int-036",
    "subPattern": "whistleblowing-transparansi-dan-akuntabilitas",
    "difficulty": "sedang",
    "prompt": "Bentuk akuntabilitas yang bermakna dalam pengelolaan anggaran pemerintah daerah tidak cukup sekadar melaporkan bahwa \"anggaran telah terserap 99%\" di akhir tahun. Komponen akuntabilitas kinerja yang sesungguhnya menuntut pelaporan terhadap ...",
    "options": [
      "Keterukuran keluaran (output) dan hasil manfaat nyata (outcome) program bagi masyarakat dibandingkan biaya yang dikeluarkan secara jujur",
      "Jumlah acara rapat seremonial yang berhasil dihadiri pimpinan selama satu tahun anggaran",
      "Banyaknya halaman lampiran foto kegiatan yang dicetak berwarna dalam buku laporan tahunan",
      "Kesamaan jumlah kuitansi belanja antara satu bidang kerja dengan bidang kerja lain tanpa melihat dampaknya",
      "Kecepatan pencairan uang muka proyek pada awal triwulan pertama tanpa evaluasi manfaat akhir"
    ],
    "answer": "A",
    "explanation": "Akuntabilitas kinerja modern (SAKIP) menilai efektivitas dan nilai manfaat nyata bagi rakyat (outcome/impact), bukan sekadar habisnya serapan anggaran (input) atau seremonial kegiatan.",
    "tip": "Akuntabilitas sejati menanyakan: apakah uang rakyat benar-benar menghasilkan manfaat (outcome), bukan sekadar habis terserap?"
  },
  {
    "id": "twk-int-037",
    "subPattern": "whistleblowing-transparansi-dan-akuntabilitas",
    "difficulty": "sedang",
    "prompt": "Apa yang menjadi tanggung jawab utama seorang pengelola kanal pengaduan masyarakat (seperti SP4N-LAPOR!) ketika menerima aduan warga mengenai dugaan pungutan liar di salah satu unit pelaksana teknis daerah?",
    "options": [
      "Langsung memublikasikan nama lengkap warga pengadu di papan pengumuman kantor supaya unit terlapor mengenalinya",
      "Melakukan verifikasi awal atas substansi aduan, menjaga kerahasiaan pelapor bila diperlukan, meneruskannya ke unit pemeriksa berwenang, serta memantau tindak lanjut hingga ada penyelesaian yang disampaikan ke pelapor",
      "Menutup laporan secara otomatis sebagai selesai dalam sistem demi menjaga peringkat kepuasan publik instansi tetap tinggi",
      "Meminta warga pengadu terlebih dahulu meminta maaf secara tertulis kepada petugas loket sebelum aduan dicatat",
      "Menunggu laporan serupa menumpuk hingga seratus aduan baru disampaikan kepada inspektorat"
    ],
    "answer": "B",
    "explanation": "Integritas pengelolaan aduan publik terletak pada verifikasi objektif, kerahasiaan dan perlindungan pelapor, eskalasi tindak lanjut yang tuntas (bukan sekadar formalitas tutup tiket), serta umpan balik penyelesaian kepada masyarakat.",
    "tip": "Hindari manipulasi status 'tutup tiket' demi angka rapor; aduan harus diverifikasi dan ditindaklanjuti secara nyata."
  },
  {
    "id": "twk-int-038",
    "subPattern": "whistleblowing-transparansi-dan-akuntabilitas",
    "difficulty": "sedang",
    "prompt": "Salah satu penghalang utama pegawai enggan melapor saat menyaksikan tindak penyimpangan di kantor adalah kekhawatiran mengalami pembalasan karier, seperti dimutasi paksa atau diturunkan penilaian kinerjanya. Instrumen negara yang berperan langsung dalam memberikan perlindungan hukum bagi pelapor dan saksi pelaku (justice collaborator) tindak pidana korupsi adalah ...",
    "options": [
      "Dewan Kehormatan Penyelenggara Pemilu (DKPP)",
      "Komisi Pengawas Persaingan Usaha (KPPU)",
      "Lembaga Perlindungan Saksi dan Korban (LPSK) bersama aparat penegak hukum terkait",
      "Lembaga Kebijakan Pengadaan Barang/Jasa Pemerintah (LKPP)",
      "Badan Standardisasi Nasional (BSN)"
    ],
    "answer": "C",
    "explanation": "UU No. 31 Tahun 2014 tentang Perubahan atas UU Perlindungan Saksi dan Korban (serta PP No. 43 Tahun 2018 terkait peran serta masyarakat) menugaskan LPSK untuk memberikan perlindungan fisik, prosedural, maupun perlindungan hak kepegawaian/hukum bagi saksi pelapor dan justice collaborator.",
    "tip": "Ingat mandat LPSK (Lembaga Perlindungan Saksi dan Korban) dalam melindungi pelapor dan justice collaborator."
  },
  {
    "id": "twk-int-039",
    "subPattern": "whistleblowing-transparansi-dan-akuntabilitas",
    "difficulty": "sulit",
    "prompt": "Dalam sistem transparansi pengadaan barang/jasa pemerintah elektronik (e-procurement dan e-katalog), panitia menemukan penyedia yang mengunggah dokumen pengalaman kerja palsu namun menawarkan harga paling rendah. Atas nama transparansi dan akuntabilitas yang adil, tindakan panitia yang paling tepat adalah ...",
    "options": [
      "Tetap memenangkan penyedia tersebut demi penghematan APBN karena harga penawarannya berada jauh di bawah perkiraan",
      "Memberitahu penyedia secara pribadi agar mengganti dokumen palsunya setelah pengumuman pemenang dilakukan",
      "Membatalkan seluruh proses pengadaan tanpa mencatat alasan apa pun di sistem elektronik agar tidak menjadi temuan",
      "Menggugurkan penyedia berdasarkan verifikasi pembuktian kualifikasi yang objektif, mencatat dasar pertimbangannya secara transparan di sistem, dan merekomendasikan daftar hitam sesuai ketentuan",
      "Mengambil jalan tengah dengan membagi paket pekerjaan antara penawar harga terendah dan penawar berdokumen asli"
    ],
    "answer": "D",
    "explanation": "Pengadaan yang akuntabel tidak hanya mengejar harga murah, tetapi juga validitas kualifikasi dan integritas peserta. Pemalsuan dokumen wajib digugurkan secara transparan, terdokumentasi di sistem, dan diusulkan sanksi daftar hitam (blacklist) sesuai aturan LKPP.",
    "tip": "Integritas pengadaan menyeimbangkan efisiensi biaya dengan kepatuhan pembuktian kualifikasi dan sanksi daftar hitam."
  },
  {
    "id": "twk-int-040",
    "subPattern": "whistleblowing-transparansi-dan-akuntabilitas",
    "difficulty": "sulit",
    "prompt": "Sebuah unit pemerintah meluncurkan portal keterbukaan anggaran yang menampilkan ribuan berkas PDF hasil pemindaian gambar beresolusi rendah yang sulit dicari teksnya serta baru diunggah dua tahun setelah anggaran selesai. Ditinjau dari prinsip transparansi bermakna (meaningful transparency), kelemahan utama praktik tersebut adalah ...",
    "options": [
      "Dokumen keuangan seharusnya tidak pernah diunggah ke internet dan cukup disimpan di lemari arsip kepala dinas",
      "Publik sebenarnya tidak berhak menelusuri detail realisasi anggaran instansi sepanjang laporan BPK sudah selesai dicetak",
      "Portal resmi seharusnya memungut biaya akses berlangganan agar warga lebih menghargai dokumen yang diunduh",
      "Keterbukaan anggaran wajib didahului persetujuan tertulis seluruh kontraktor pelaksana kegiatan daerah",
      "Transparansi hanya menjadi formalitas prosedural karena data disajikan terlambat, tidak terstruktur (machine-readable), dan sulit dianalisis maupun diawasi publik secara tepat waktu"
    ],
    "answer": "E",
    "explanation": "Transparansi bermakna menuntut informasi publik disajikan tepat waktu, akurat, mudah diakses, dan dalam format terbuka yang mudah diolah/dianalisis (open data), bukan sekadar membuang tumpukan scan terlambat yang menghambat fungsi kontrol publik.",
    "tip": "Bedakan transparansi kosmetik (data terlambat dan sulit dibaca mesin) dengan meaningful transparency (tepat waktu, akurat, open data)."
  }
];

export const integritasQuestions: readonly Question[] = buildTwkPatternQuestions(
  "integritas",
  [...integritasDrafts, ...integritasBatch2Drafts],
);
