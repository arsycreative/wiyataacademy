import type { QuestionDraft } from "@/modules/question-bank/domain/question";

export const belaNegaraBatch3Drafts: readonly QuestionDraft[] = [
  {
    id: "twk-bel-081",
    subPattern: "penalaran-bela-negara-kontemporer",
    difficulty: "sedang",
    prompt:
      "Sebuah dinas kependudukan di tingkat kabupaten mendeteksi akses ilegal terhadap basis data portal layanan daring yang memuat nomor induk kependudukan dan alamat ribuan warga. Seorang pejabat menyarankan agar insiden tersebut ditutupi sementara dari publik dan lembaga pengawas demi menjaga citra kinerja transformasi digital daerah. Padahal, data pribadi warga merupakan bagian dari objek vital informasi dalam Sistem Pemerintahan Berbasis Elektronik (SPBE) yang wajib dilindungi negara. Ditinjau dari semangat bela negara di ruang siber dan prinsip UU Nomor 27 Tahun 2022 tentang Pelindungan Data Pribadi (UU PDP), langkah yang paling tepat dilakukan instansi selaku pengendali data adalah ...",
    options: [
      "Menonaktifkan seluruh layanan administrasi kependudukan secara permanen lalu kembali sepenuhnya ke pencatatan arsip kertas manual",
      "Segera memitigasi celah keamanan, menyampaikan pemberitahuan tertulis paling lambat 3x24 jam kepada subjek data dan lembaga berwenang, serta berkoordinasi dengan BSSN",
      "Menyerahkan penanganan insiden sepenuhnya kepada vendor pengembang aplikasi pihak ketiga tanpa melaporkan kebocoran kepada pimpinan daerah dan warga terdampak",
      "Menghapus log aktivitas server yang diretas agar jejak kerentanan sistem tidak menjadi temuan audit keamanan informasi tahunan",
      "Mengimbau masyarakat mengganti dokumen kependudukan secara mandiri tanpa menjelaskan sumber kebocoran data yang terjadi di portal instansi",
    ],
    answer: "B",
    explanation:
      "Dalam perspektif bela negara kontemporer, kedaulatan siber dan perlindungan data warga merupakan wujud pertahanan nirmiliter di era SPBE. UU No. 27 Tahun 2022 tentang PDP mewajibkan pengendali data pribadi menyampaikan pemberitahuan tertulis paling lambat 3x24 jam kepada subjek data dan lembaga berwenang apabila terjadi kegagalan pelindungan data, disertai upaya pemulihan dan koordinasi teknis keamanan siber bersama BSSN. Menutupi insiden atau menghapus log justru memperbesar kerugian warga dan melanggar akuntabilitas hukum.",
    tip: "Hubungkan kedaulatan siber dengan kewajiban transparansi pengendali data menurut UU PDP (notifikasi maksimal 3x24 jam dan mitigasi terkoordinasi).",
  },
  {
    id: "twk-bel-082",
    subPattern: "penalaran-bela-negara-kontemporer",
    difficulty: "sedang",
    prompt:
      "Menjelang pengumuman kebijakan moneter nasional, beredar luas video rekayasa kecerdasan buatan (deepfake) yang meniru suara dan wajah pejabat otoritas keuangan sambil mengumumkan pembekuan seluruh rekening bank domestik. Pada jam yang sama, situs web resmi lembaga keuangan dan kanal klarifikasi pemerintah mengalami serangan banjir lalu lintas (DDoS) sehingga masyarakat tidak dapat memverifikasi kabar tersebut. Akibatnya, antrean penarikan dana tunai melonjak di sejumlah kota dan sentimen pasar keuangan nasional bergejolak tajam. Dalam tipologi ancaman pertahanan negara modern, rangkaian peristiwa tersebut paling tepat dikategorikan sebagai ...",
    options: [
      "Ancaman militer konvensional karena secara langsung menargetkan struktur komando pertahanan bersenjata di wilayah perbatasan",
      "Konflik sosial horizontal murni yang dipicu oleh rendahnya minat masyarakat menggunakan layanan perbankan digital",
      "Gangguan teknis operasional rutin yang dapat diselesaikan cukup melalui pembaruan perangkat keras perbankan daerah",
      "Ancaman hibrida karena memadukan operasi disinformasi berbasis deepfake dengan serangan siber terkoordinasi untuk mengguncang stabilitas ekonomi nasional",
      "Pelanggaran etika jurnalistik biasa yang tidak berkaitan dengan stabilitas ketahanan nasional dan kedaulatan negara",
    ],
    answer: "D",
    explanation:
      "Ancaman hibrida menggabungkan berbagai instrumen secara simultan dan terkoordinasi—dalam kasus ini manipulasi informasi (deepfake) untuk memicu kepanikan publik dan serangan siber (DDoS) untuk melumpuhkan kanal klarifikasi resmi—guna melemahkan stabilitas ekonomi dan kepercayaan terhadap negara. Peristiwa ini bukan sekadar gangguan teknis rutin maupun ancaman militer bersenjata konvensional, melainkan serangan terencana terhadap ketahanan nirmiliter nasional.",
    tip: "Kenali ciri ancaman hibrida: perpaduan serentak taktik siber, manipulasi informasi, atau tekanan ekonomi yang saling memperkuat.",
  },
  {
    id: "twk-bel-083",
    subPattern: "penalaran-bela-negara-kontemporer",
    difficulty: "sulit",
    prompt:
      "Perhatikan empat perilaku warga negara berikut dalam membedakan antara wujud nasionalisme dan wujud bela negara secara presisi:\n(1) Menggunakan pakaian batik daerah dengan penuh kebanggaan saat menghadiri forum kebudayaan internasional.\n(2) Melaporkan temuan celah keamanan kritis pada portal layanan pajak nasional melalui jalur resmi pelaporan kerentanan (CSIRT) agar tidak dieksploitasi peretas.\n(3) Mengikuti pelatihan tanggap darurat logistik dan kesiapsiagaan bencana yang diselenggarakan pemerintah daerah guna menopang ketahanan wilayah saat krisis.\n(4) Mempelajari sejarah Sumpah Pemuda dan mengapresiasi keberagaman kuliner Nusantara dalam komunitas pemuda lintas provinsi.\nBerdasarkan klasifikasi konseptual bela negara versus nasionalisme, perilaku yang secara lebih spesifik menunjukkan bela negara karena berorientasi langsung pada perlindungan kedaulatan dan kesiapsiagaan menghadapi ancaman adalah ...",
    options: [
      "(2) dan (3)",
      "(1) dan (2)",
      "(1) dan (4)",
      "(2) dan (4)",
      "(3) dan (4)",
    ],
    answer: "A",
    explanation:
      "Meskipun nasionalisme menjadi fondasi emosional dan kultural bagi bela negara, keduanya memiliki titik tekan yang dapat dibedakan. Nasionalisme terutama tercermin pada rasa cinta, kebanggaan, dan identitas kebangsaan seperti mengenakan batik daerah serta mengapresiasi sejarah dan kuliner Nusantara. Sementara itu, bela negara menuntut aksi nyata yang berorientasi pada proteksi sistem negara, penangkalan ancaman, dan kesiapsiagaan menghadapi krisis—sebagaimana tampak pada pelaporan celah keamanan sistem pajak nasional dan kesiapsiagaan tanggap darurat wilayah.",
    tip: "Bedakan fokusnya: nasionalisme menekankan rasa cinta dan identitas bangsa, sedangkan bela negara menekankan aksi kesiapsiagaan dan proteksi dari ancaman nyata.",
  },
  {
    id: "twk-bel-084",
    subPattern: "penalaran-bela-negara-kontemporer",
    difficulty: "sedang",
    prompt:
      "Perubahan iklim ekstrem berkepanjangan menyebabkan gangguan panen beras di sejumlah negara eksportir utama sehingga harga pangan global melonjak dan pasokan impor menjadi tidak menentu. Menyikapi kerentanan tersebut, sekelompok penyuluh pertanian ASN bersama koperasi petani di wilayah timur Indonesia mengembangkan sentra pengolahan sorgum, sagu, dan singkong lokal yang terhubung langsung dengan pasar sekolah serta rumah tangga. Mereka juga membangun lumbung pangan desa berbasis pencatatan digital agar distribusi cadangan tetap merata saat musim paceklik. Dari sudut pandang bela negara, inisiatif tersebut memiliki nilai strategis karena ...",
    options: [
      "Mewajibkan seluruh daerah menghentikan perdagangan antarpulau demi mempertahankan pola konsumsi tunggal secara tertutup",
      "Mengalihkan seluruh tugas pengelolaan sektor pertanian nasional kepada satuan pertahanan bersenjata pada masa damai",
      "Menghapus peran petani skala kecil dan menyerahkan penguasaan lahan pangan kepada korporasi pangan asing",
      "Meningkatkan ketergantungan anggaran daerah terhadap subsidi impor pangan selama harga internasional berfluktuasi",
      "Memperkuat ketahanan pangan sebagai pilar pertahanan nirmiliter melalui diversifikasi sumber lokal guna meredam kerentanan krisis pasokan global",
    ],
    answer: "E",
    explanation:
      "Ketahanan pangan merupakan unsur vital pertahanan nirmiliter karena kelangkaan pangan dapat memicu kerawanan sosial, inflasi tajam, dan tekanan geopolitik dari luar. Diversifikasi pangan lokal (sorgum, sagu, singkong) disertai pengelolaan lumbung desa mengurangi ketergantungan berlebihan pada satu komoditas maupun pasar impor. Langkah ini merupakan wujud nyata bela negara melalui pengabdian profesi dan kemandirian ekonomi warga.",
    tip: "Ketahanan pangan nasional dibangun lewat diversifikasi sumber lokal dan kemandirian pasokan agar negara tidak rentan terhadap guncangan global.",
  },
  {
    id: "twk-bel-085",
    subPattern: "penalaran-bela-negara-kontemporer",
    difficulty: "sulit",
    prompt:
      "Dalam sosialisasi UU Nomor 23 Tahun 2019 tentang Pengelolaan Sumber Daya Nasional untuk Pertahanan Negara (UU PSDN), muncul perdebatan di kalangan pegawai instansi kesehatan mengenai kedudukan tenaga medis sipil dalam sistem pertahanan semesta. Sebagian pegawai mengira bahwa seluruh rumah sakit pemerintah dan tenaga medis otomatis berubah status menjadi Komponen Cadangan yang setiap saat dapat diterjunkan ke medan tempur atas perintah kepala dinas. Padahal, desain konstitusional sistem pertahanan Indonesia membedakan secara tegas status sipil dan mekanisme mobilisasi nasional. Penjelasan yang paling akurat mengenai posisi tenaga medis dan fasilitas rumah sakit dalam kerangka UU PSDN adalah ...",
    options: [
      "Seluruh tenaga medis ASN wajib menjalani wajib militer penuh waktu dan melepaskan status sipilnya selama masa jabatan",
      "Rumah sakit daerah merupakan Komponen Utama pertahanan negara yang kedudukannya sejajar dengan komando tempur TNI",
      "Tenaga medis dan fasilitas rumah sakit dapat ditata sebagai Komponen Pendukung yang memperkuat ketahanan tanpa mengubah status sipilnya, sedangkan keanggotaan Komponen Cadangan bersifat sukarela dan hanya dimobilisasi Presiden dengan persetujuan DPR",
      "Kepala daerah berwenang penuh memobilisasi tenaga medis sebagai pasukan cadangan bersenjata apabila terjadi konflik sosial di wilayahnya",
      "Sumber daya kesehatan sipil tidak memiliki peran apa pun dalam sistem pertahanan semesta karena pertahanan negara hanya dilaksanakan oleh militer",
    ],
    answer: "C",
    explanation:
      "UU No. 23 Tahun 2019 membagi sumber daya pertahanan menjadi Komponen Utama (TNI), Komponen Cadangan (Komcad), dan Komponen Pendukung (Komduk). Tenaga medis profesional beserta rumah sakit yang didayagunakan menopang ketahanan negara termasuk Komponen Pendukung yang tetap berstatus sipil. Sementara itu, Komcad direkrut secara sukarela melalui seleksi dan pelatihan dasar kemiliteran, serta hanya dapat dimobilisasi oleh Presiden dengan persetujuan DPR untuk menghadapi ancaman militer dan ancaman hibrida.",
    tip: "Pahami batas hukum UU PSDN: Komduk memperkuat tanpa mengubah status sipil, sedangkan Komcad bersifat sukarela dan mobilisasinya wewenang Presiden atas persetujuan DPR.",
  },
  {
    id: "twk-bel-086",
    subPattern: "penalaran-bela-negara-kontemporer",
    difficulty: "sedang",
    prompt:
      "Sebuah rumah sakit rujukan pemerintah daerah mengalami serangan ransomware yang mengenkripsi sistem pendaftaran pasien dan rekam medis elektronik pada jam puncak pelayanan. Kelompok peretas menuntut pembayaran tebusan dalam aset kripto dengan ancaman membocorkan data kesehatan pasien ke forum gelap dalam waktu 24 jam. Di tengah tekanan antrean layanan, tim teknologi informasi rumah sakit diminta segera menentukan langkah darurat yang akuntabel. Tindakan yang paling selaras dengan prinsip ketahanan siber dan bela negara instansi publik adalah ...",
    options: [
      "Mengisolasi jaringan terdampak agar serangan tidak menyebar, mengaktifkan layanan darurat berbasis cadangan data luring yang terverifikasi, serta segera melapor ke CSIRT/BSSN dan aparat penegak hukum",
      "Segera memenuhi pembayaran tebusan melalui anggaran tak terduga rumah sakit agar kunci dekripsi cepat diperoleh sebelum media mengetahui kejadian tersebut",
      "Menutup seluruh unit gawat darurat rumah sakit selama sepekan tanpa mengalihkan pasien ke fasilitas rujukan terdekat",
      "Mengunggah salinan berkas pasien ke akun penyimpanan publik gratis milik pribadi pegawai agar pelayanan tetap berjalan cepat",
      "Membiarkan sistem tetap terhubung ke jaringan antarinstansi daerah sambil mencoba mengunduh perangkat dekripsi tidak resmi dari forum anonim",
    ],
    answer: "A",
    explanation:
      "Penanganan insiden ransomware pada infrastruktur informasi vital seperti rumah sakit wajib mengutamakan kontainment (isolasi jaringan), kontinuitas layanan publik menggunakan cadangan data luring (offline backup), dan pelaporan resmi kepada CSIRT/BSSN serta penegak hukum. Membayar tebusan justru mendanai kejahatan siber tanpa jaminan data tidak bocor serta melanggar tata kelola keuangan negara, sedangkan menyimpan data pasien di akun pribadi melanggar UU PDP.",
    tip: "Prioritas respons serangan ransomware instansi publik: isolasi jaringan, pemulihan dari backup aman, dan pelaporan resmi—bukan membayar tebusan.",
  },
  {
    id: "twk-bel-087",
    subPattern: "penalaran-bela-negara-kontemporer",
    difficulty: "sulit",
    prompt:
      "Dalam rangka menjaga kedaulatan digital pemerintahan melalui penerapan UU Nomor 27 Tahun 2022 tentang Pelindungan Data Pribadi pada ekosistem SPBE, perhatikan empat pernyataan berikut:\n(1) Instansi pemerintah boleh mengumpulkan seluruh data biometrik warga di luar kebutuhan layanan resmi agar kelak dapat dimanfaatkan secara bebas oleh instansi lain.\n(2) Pemrosesan data pribadi warga oleh instansi publik harus memiliki dasar pemrosesan yang sah, terbatas pada tujuan spesifik, dan dilindungi standar keamanan memadai.\n(3) Penunjukan pejabat atau petugas pelindungan data pribadi diperlukan pada instansi yang memproses data berskala besar atau berisiko tinggi demi memastikan kepatuhan hukum.\n(4) Hak subjek data untuk memperoleh kejelasan identitas pengendali data dan meminta perbaikan data yang tidak akurat tetap dijamin sepanjang tidak bertentangan dengan ketentuan pengecualian undang-undang.\nKombinasi pernyataan yang tepat mengenai tata kelola data publik sebagai wujud bela negara digital adalah ...",
    options: [
      "(1), (2), dan (3)",
      "(1), (2), dan (4)",
      "(1), (3), dan (4)",
      "(2), (3), dan (4)",
      "(1) dan (4)",
    ],
    answer: "D",
    explanation:
      "Prinsip utama UU No. 27 Tahun 2022 meliputi pembatasan tujuan (purpose limitation), dasar hukum pemrosesan yang sah, keamanan pemrosesan, penghormatan hak subjek data (termasuk koreksi data), serta penunjukan pejabat/petugas pelindungan data pribadi (DPO) untuk pemrosesan berskala besar atau untuk kepentingan pelayanan publik tertentu. Pengumpulan data biometrik di luar kebutuhan layanan resmi untuk penggunaan bebas melanggar prinsip minimalisasi data dan pembatasan tujuan.",
    tip: "Eliminasi pernyataan yang melanggar asas minimalisasi data dan pembatasan tujuan dalam UU PDP.",
  },
  {
    id: "twk-bel-088",
    subPattern: "penalaran-bela-negara-kontemporer",
    difficulty: "sedang",
    prompt:
      "Sebuah kecamatan kepulauan di wilayah perbatasan utara Indonesia kerap mengalami pemadaman listrik berkepanjangan setiap musim gelombang tinggi karena kapal pengangkut bahan bakar minyak tidak dapat bersandar. Kondisi tersebut melumpuhkan jaringan komunikasi puskesmas, menara pemantau cuaca, dan pelayanan administrasi kependudukan warga. Melihat kerentanan itu, pemerintah daerah bersama perguruan tinggi dan warga setempat membangun pembangkit listrik tenaga surya dan mikrohidro berbasis komunitas serta melatih teknisi lokal untuk perawatannya. Makna strategis langkah tersebut dalam kerangka bela negara adalah ...",
    options: [
      "Mengurangi kewenangan pemerintah pusat dalam mengatur kebijakan tarif energi nasional di seluruh wilayah Indonesia",
      "Menolak seluruh teknologi pembangkitan modern dari luar daerah agar masyarakat pulau terluar hidup terisolasi",
      "Membangun kemandirian dan ketahanan energi wilayah perbatasan sehingga fungsi layanan publik dan infrastruktur vital tetap tangguh saat jalur pasokan terganggu",
      "Menggantikan seluruh fungsi pertahanan maritim di perbatasan dengan pengelolaan usaha kelistrikan milik swasta asing",
      "Memusatkan anggaran pertahanan negara semata-mata untuk membangun fasilitas pariwisata pesisir di pulau terluar",
    ],
    answer: "C",
    explanation:
      "Ketahanan energi di wilayah terdepan, terluar, dan tertinggal (3T) merupakan bagian penting dari pertahanan nirmiliter dan keutuhan wilayah. Pemanfaatan energi baru terbarukan lokal beserta penguatan kapasitas teknisi setempat menjamin kesinambungan layanan kesehatan, komunikasi, dan pemerintahan ketika distribusi energi fosil terhambat faktor alam atau krisis. Kemandirian energi lokal secara langsung meningkatkan daya tangkal wilayah perbatasan.",
    tip: "Kaitkan pemanfaatan energi lokal di wilayah perbatasan dengan kesinambungan layanan vital dan ketahanan wilayah NKRI.",
  },
  {
    id: "twk-bel-089",
    subPattern: "penalaran-bela-negara-kontemporer",
    difficulty: "sulit",
    prompt:
      "Sebuah platform perdagangan daring lintas batas masuk ke pasar domestik dengan menjual barang konsumsi jauh di bawah biaya produksi wajar (predatory pricing) sambil memanen data kebiasaan belanja jutaan pengguna lokal tanpa transparansi pemrosesan data. Dalam dua tahun, ratusan sentra konveksi dan perajin UMKM daerah gulung tikar karena tidak mampu bersaing menghadapi subsidi silang ekstrem tersebut. Pada saat yang sama, ketergantungan konsumen terhadap produk impor melonjak dan data perilaku pasar nasional dikuasai entitas luar negeri. Analisis bela negara yang paling tepat untuk menyikapi fenomena ancaman nirmiliter berdimensi ekonomi-digital tersebut adalah ...",
    options: [
      "Membiarkan praktik jual rugi berlangsung sepenuhnya karena konsumen jangka pendek diuntungkan oleh harga barang murah",
      "Melarang total seluruh aktivitas perdagangan digital di Indonesia dan menutup akses internet masyarakat terhadap platform global",
      "Menyerahkan perlindungan UMKM sepenuhnya kepada kemauan sukarela pemilik platform lintas batas tanpa regulasi negara",
      "Menghapus kewajiban standar mutu produk dalam negeri agar UMKM dapat menjual barang tanpa memperhatikan keselamatan konsumen",
      "Menegakkan regulasi persaingan usaha sehat, kepatuhan perpajakan serta pelindungan data lintas batas, sekaligus mengakselerasi daya saing dan transformasi digital UMKM lokal",
    ],
    answer: "E",
    explanation:
      "Praktik predatory pricing yang dibarengi penguasaan data konsumen domestik tanpa kendali hukum merupakan ancaman nirmiliter di bidang ekonomi dan kedaulatan digital yang dapat melumpuhkan struktur produksi nasional. Respons bela negara yang sehat dan terukur bukan menutup diri secara ekstrem dari dunia digital, melainkan menegakkan aturan persaingan usaha yang adil, kedaulatan data, dan penguatan daya saing UMKM lokal secara berkelanjutan.",
    tip: "Solusi bela negara di bidang ekonomi digital menyeimbangkan penegakan regulasi yang adil dengan penguatan daya saing industri nasional, bukan isolasi ekstrem.",
  },
  {
    id: "twk-bel-090",
    subPattern: "penalaran-bela-negara-kontemporer",
    difficulty: "sedang",
    prompt:
      "Menjelang pelaksanaan agenda demokrasi dan pembangunan strategis nasional, terdeteksi ribuan akun otomatis (bot) menyebarkan potongan video manipulatif yang menuding instansi pelayanan publik melakukan diskriminasi antargolongan. Perhatikan empat langkah penanganan berikut:\n(1) Memverifikasi fakta secara cepat melalui kanal resmi disertai data terbuka yang mudah dipahami masyarakat.\n(2) Memutus akses internet seluruh provinsi terdampak tanpa dasar hukum darurat yang jelas agar informasi berhenti beredar.\n(3) Menggandeng komunitas pemeriksa fakta, tokoh masyarakat, dan media massa kredibel untuk memperluas literasi digital warga.\n(4) Melaporkan akun terindikasi penyebar kebohongan terkoordinasi dan ujaran kebencian melalui mekanisme penegakan hukum yang akuntabel.\nKombinasi tindakan yang mencerminkan bela negara di ruang informasi secara proporsional dan demokratis adalah ...",
    options: [
      "(1), (2), dan (3)",
      "(1), (3), dan (4)",
      "(1), (2), dan (4)",
      "(2), (3), dan (4)",
      "(2) dan (4)",
    ],
    answer: "B",
    explanation:
      "Penanggulangan disinformasi terkoordinasi dalam negara demokrasi berlandaskan hukum harus memadukan klarifikasi berbasis data terbuka, kolaborasi literasi digital bersama masyarakat sipil, dan penegakan hukum yang terukur terhadap pelaku penyebaran hoaks atau ujaran kebencian. Memutus akses internet seluruh provinsi secara sepihak tanpa dasar hukum darurat justru merugikan layanan publik, ekonomi warga, dan hak atas informasi yang sah.",
    tip: "Pilih langkah penangkalan disinformasi yang transparan, kolaboratif, dan patuh hukum, serta hindari pembatasan akses secara serampangan.",
  },
  {
    id: "twk-bel-091",
    subPattern: "penalaran-bela-negara-kontemporer",
    difficulty: "sulit",
    prompt:
      "Seorang peneliti bioteknologi Indonesia yang telah sepuluh tahun memimpin laboratorium riset di Eropa selalu aktif mempromosikan kuliner, musik tradisional, dan destinasi wisata Nusantara kepada rekan-rekan sejawatnya. Ketika muncul ancaman wabah penyakit menular baru lintas negara yang berpotensi melumpuhkan sektor peternakan dan kesehatan masyarakat, ia memutuskan pulang ke Indonesia untuk membangun sistem deteksi dini patogen nasional di laboratorium perbatasan meskipun kompensasi finansialnya jauh lebih kecil. Perbandingan analitis yang paling tepat antara kedua fase kiprah peneliti tersebut adalah ...",
    options: [
      "Kiprah pertama dan kedua sama-sama bukan bentuk bela negara karena tidak melibatkan keanggotaan resmi dalam satuan militer bersenjata",
      "Kiprah pertama lebih kuat mencerminkan nasionalisme kultural, sedangkan kepulangannya membangun sistem deteksi dini patogen secara konkret mewujudkan bela negara menghadapi ancaman nirmiliter",
      "Kiprah pertama merupakan bentuk bela negara paling tinggi, sedangkan kepulangannya hanya merupakan pilihan karier pribadi tanpa nilai kebangsaan",
      "Kedua kiprah tersebut bertentangan dengan prinsip bela negara karena ia sempat menempuh pengalaman riset di lembaga internasional",
      "Kepulangannya hanya mencerminkan nasionalisme sempit karena menolak kerja sama pertukaran ilmu pengetahuan dengan komunitas global",
    ],
    answer: "B",
    explanation:
      "Promosi budaya, kuliner, dan pariwisata Nusantara mencerminkan rasa bangga serta identitas kebangsaan (nasionalisme kultural). Sementara itu, keputusan mengorbankan kenyamanan finansial untuk pulang dan merancang sistem deteksi dini patogen di perbatasan secara langsung menjawab ancaman nirmiliter (ancaman biologi/kesehatan nasional) serta mewujudkan nilai rela berkorban dan pengabdian profesi dalam bela negara.",
    tip: "Cermati pergeseran dari ekspresi kebanggaan budaya (nasionalisme) menuju tindakan strategis menangkal ancaman nyata terhadap keselamatan bangsa (bela negara).",
  },
  {
    id: "twk-bel-092",
    subPattern: "penalaran-bela-negara-kontemporer",
    difficulty: "sedang",
    prompt:
      "Di perairan Zona Ekonomi Eksklusif (ZEE) Indonesia yang kaya sumber daya perikanan, kapal penangkap ikan berbendera asing kerap masuk secara ilegal pada malam hari dengan mematikan alat pelacak otomatis. Keterbatasan jangkauan visual kapal patroli pada wilayah laut yang sangat luas membuat deteksi dini menjadi tantangan tersendiri bagi aparat keamanan laut. Untuk mengatasi celah tersebut, kelompok nelayan tradisional dilatih mengenali pola pelanggaran, mencatat koordinat lokasi, dan melaporkannya melalui radio komunikasi terintegrasi kepada aparat berwenang tanpa melakukan bentrokan fisik sendiri. Praktik tersebut mencerminkan implementasi Sistem Pertahanan dan Keamanan Rakyat Semesta (Sishankamrata) karena ...",
    options: [
      "Menyerahkan kewenangan penegakan hukum bersenjata di laut lepas sepenuhnya kepada kelompok nelayan tradisional",
      "Mengurangi peran lembaga penegak hukum maritim agar anggaran patroli laut dapat dialihkan ke sektor lain",
      "Mendorong nelayan lokal melakukan penyitaan sepihak terhadap kapal asing yang memasuki wilayah penangkapan ikan",
      "Mengintegrasikan peran aktif warga sipil sebagai unsur pendukung deteksi dini yang bersinergi secara tertib hukum dengan aparat keamanan laut negara",
      "Membatasi ruang gerak nelayan nasional agar tidak melaut mendekati wilayah perairan perbatasan negara",
    ],
    answer: "D",
    explanation:
      "Sishankamrata menempatkan seluruh warga negara sebagai bagian dari daya tangkal nasional secara proporsional sesuai kapasitas dan hukum. Pelibatan nelayan tradisional dalam pelaporan koordinat pelanggaran melalui saluran resmi memperkuat deteksi dini kedaulatan maritim tanpa mendorong tindakan main hakim sendiri atau menggantikan kewenangan penegakan hukum aparat negara.",
    tip: "Dalam Sishankamrata, warga sipil berperan sebagai jejaring pendukung deteksi dini yang bersinergi tertib hukum dengan aparat, bukan menggantikan fungsi penegak hukum.",
  },
  {
    id: "twk-bel-093",
    subPattern: "penalaran-bela-negara-kontemporer",
    difficulty: "sulit",
    prompt:
      "Dalam simulasi penanganan ancaman hibrida berupa sabotase jaringan kelistrikan nasional yang disertai propaganda daring, sejumlah instansi merumuskan langkah tindak lanjut berdasarkan UU Nomor 23 Tahun 2019 (UU PSDN) dan prinsip negara hukum. Berikut ini merupakan evaluasi terhadap lima usulan kebijakan instansi dalam simulasi tersebut. Usulan yang PALING KELIRU dan bertentangan dengan prinsip pengelolaan sumber daya nasional untuk pertahanan negara adalah ...",
    options: [
      "Gubernur menetapkan langsung status mobilisasi penuh Komponen Cadangan bersenjata di wilayah provinsinya tanpa menunggu keputusan Presiden dan persetujuan DPR",
      "Kementerian teknis memetakan cadangan pembangkit listrik dan personel teknisi tersertifikasi sebagai bagian dari penataan Komponen Pendukung",
      "Lembaga keamanan siber melakukan audit forensik digital bersama operator kelistrikan untuk menutup celah sabotase sistem kendali",
      "Instansi komunikasi publik menyajikan perkembangan pemulihan pasokan listrik secara berkala guna meredam kepanikan akibat hoaks",
      "Pemerintah daerah menyiapkan fasilitas layanan darurat kesehatan dan logistik cadangan bagi rumah sakit terdampak pemadaman",
    ],
    answer: "A",
    explanation:
      "Berdasarkan UU No. 23 Tahun 2019, mobilisasi Komponen Cadangan hanya dapat ditetapkan oleh Presiden dengan persetujuan DPR apabila seluruh atau sebagian wilayah negara berada dalam keadaan bahaya akibat ancaman militer atau ancaman hibrida. Kepala daerah tidak memiliki kewenangan konstitusional memobilisasi pasukan cadangan bersenjata secara sepihak. Sementara itu, pemetaan Komponen Pendukung, forensik siber, komunikasi publik transparan, dan kesiapan logistik darurat justru merupakan langkah tepat sesuai kewenangan masing-masing.",
    tip: "Ingat rantai komando konstitusional dalam UU PSDN: mobilisasi Komponen Cadangan adalah kewenangan absolut Presiden dengan persetujuan DPR, bukan kepala daerah.",
  },
  {
    id: "twk-bel-094",
    subPattern: "penalaran-bela-negara-kontemporer",
    difficulty: "sedang",
    prompt:
      "Seorang analis kebijakan di kementerian menerima surat elektronik berlogo instansi pusat yang mendesaknya mengklik tautan pemutakhiran data kepegawaian dalam waktu satu jam serta memasukkan kode sekali pakai (OTP) akun layanan terpadu (Single Sign-On) SPBE. Saat dicermati, alamat domain pengirim memiliki perbedaan satu huruf dari domain resmi pemerintahan dan menggunakan nada ancaman sanksi administratif. Ia menyadari bahwa kompromi satu akun saja dapat membuka akses peretas menuju dokumen rancangan kebijakan strategis dan basis data lintas unit. Tindakan bela negara digital yang paling tepat dilakukan pegawai tersebut adalah ...",
    options: [
      "Mengisi tautan tersebut terlebih dahulu demi menghindari potensi sanksi, lalu mengganti kata sandi pada pekan berikutnya",
      "Meneruskan surat elektronik tersebut ke seluruh grup pesan instansi agar rekan kerja lain mencoba membuka tautannya lebih dulu",
      "Menghapus pesan tersebut secara diam-diam tanpa memberi tahu tim keamanan informasi agar tidak menimbulkan kerepotan administrasi",
      "Membalas pengirim surat elektronik dengan menanyakan keaslian surat sekaligus melampirkan tangkapan layar akun SPBE miliknya",
      "Tidak mengklik tautan maupun membagikan OTP, memverifikasi keabsahan informasi lewat kanal resmi kepegawaian, serta melaporkan upaya spear-phishing itu ke tim keamanan siber instansi",
    ],
    answer: "E",
    explanation:
      "Serangan spear-phishing yang menyasar akun SSO SPBE dapat menjadi pintu masuk kebocoran dokumen negara dan peretasan berantai lintas unit. Menahan diri untuk tidak mengklik tautan, melindungi kredensial/OTP, melakukan verifikasi lewat saluran resmi, serta melaporkan insiden ke tim keamanan informasi instansi (CSIRT internal) mencegah pegawai lain menjadi korban dan merupakan praktik konkret bela negara di lingkungan kerja digital.",
    tip: "Menghapus phishing secara diam-diam belum cukup; bela negara digital menuntut pelaporan ke tim keamanan siber agar seluruh instansi terlindungi.",
  },
  {
    id: "twk-bel-095",
    subPattern: "penalaran-bela-negara-kontemporer",
    difficulty: "sulit",
    prompt:
      "Di tengah gangguan distribusi bahan pokok akibat cuaca ekstrem, sebuah jaringan akun terkoordinasi lintas negara memanfaatkan algoritma rekomendasi media sosial untuk menyebarkan narasi bahwa pemerintah pusat sengaja menelantarkan wilayah tertentu demi kepentingan daerah lain. Narasi tersebut dirancang memanfaatkan sentimen historis dan perbedaan identitas lokal sehingga memicu seruan pemboikotan pajak daerah serta blokade jalur logistik pelabuhan. Jika dibiarkan, kombinasi gangguan ekonomi dan infiltrasi ruang kognitif ini dapat menggerus kepercayaan publik terhadap keutuhan NKRI. Respons paling komprehensif yang mencerminkan strategi pertahanan nirmiliter menghadapi ancaman tersebut adalah ...",
    options: [
      "Menurunkan pasukan bersenjata untuk menutup seluruh pelabuhan dan melarang warga menyampaikan keluhan harga bahan pokok",
      "Mengabaikan dinamika ruang digital karena dianggap tidak berdampak nyata selama tidak ada serangan fisik dari negara lain",
      "Mempercepat normalisasi pasokan logistik secara transparan lintas kementerian/pemda, membuka komunikasi publik berbasis data aktual, serta memperkuat literasi kewargaan dan deteksi operasi informasi",
      "Menghentikan program pemerataan pembangunan antardaerah agar isu kesenjangan tidak lagi diperbincangkan di media sosial",
      "Membalas narasi tersebut dengan menyebarkan konten tandingan anonim yang menyerang identitas kelompok masyarakat tertentu",
    ],
    answer: "C",
    explanation:
      "Ancaman ruang kognitif (cognitive warfare) memanfaatkan celah persoalan nyata di lapangan—seperti gangguan logistik—untuk memecah belah kohesi nasional. Strategi pertahanan nirmiliter yang efektif harus menyasar akar masalah material (memulihkan distribusi logistik secara terbuka) sekaligus menangkal manipulasi informasi lewat komunikasi faktual, literasi warga, dan deteksi jaringan operasi disinformasi, bukan dengan pendekatan represif membabi buta atau propaganda tandingan yang memecah belah.",
    tip: "Menangkal ancaman hibrida di ruang kognitif menuntut solusi ganda: bereskan masalah riil di lapangan dan tangkal narasi manipulatif secara transparan.",
  },
  {
    id: "twk-bel-096",
    subPattern: "penalaran-bela-negara-kontemporer",
    difficulty: "sedang",
    prompt:
      "Perhatikan empat pernyataan berikut mengenai penataan Komponen Pendukung dalam sistem pertahanan negara menurut UU Nomor 23 Tahun 2019 (UU PSDN):\n(1) Komponen Pendukung mencakup warga negara, sumber daya alam, sumber daya buatan, serta sarana dan prasarana nasional yang dapat meningkatkan kekuatan dan kemampuan Komponen Utama dan Komponen Cadangan.\n(2) Pemanfaatan sarana transportasi sipil, jaringan telekomunikasi, dan fasilitas industri strategis nasional dalam kondisi darurat dirancang secara terdata dan terkoordinasi sejak masa damai.\n(3) Badan usaha atau warga negara yang ditetapkan menjadi bagian dari Komponen Pendukung otomatis kehilangan hak kepemilikan aset dan status sipilnya setiap hari pada masa damai.\n(4) Penyiapan Komponen Pendukung dilaksanakan oleh kementerian/lembaga terkait bersama pemerintah daerah sesuai bidang tugasnya masing-masing.\nPernyataan yang benar mengenai hakikat Komponen Pendukung adalah ...",
    options: [
      "(1), (2), dan (4)",
      "(1), (2), dan (3)",
      "(1), (3), dan (4)",
      "(2), (3), dan (4)",
      "(1) dan (3)",
    ],
    answer: "A",
    explanation:
      "Menurut UU No. 23 Tahun 2019, Komponen Pendukung terdiri atas warga negara, SDA, SDB, serta sarana dan prasarana nasional yang disiapkan secara terkoordinasi oleh kementerian/lembaga terkait untuk memperkuat Komponen Utama dan Komponen Cadangan bila dibutuhkan. Pada masa damai, aset dan warga dalam Komponen Pendukung tetap menjalankan fungsi sipil serta mempertahankan hak kepemilikannya, tidak diambil alih atau dimiliterisasi setiap hari.",
    tip: "Cermati perbedaan status pada masa damai: penataan Komponen Pendukung bersifat pendataan dan kesiapan koordinasi, bukan pengambilalihan hak sipil.",
  },
  {
    id: "twk-bel-097",
    subPattern: "penalaran-bela-negara-kontemporer",
    difficulty: "sulit",
    prompt:
      "Kebijakan hilirisasi mineral strategis nasional untuk membangun ekosistem baterai kendaraan listrik di dalam negeri menghadapi tekanan berlapis berupa gugatan dagang internasional dan kampanye pemberitaan negatif terkoordinasi mengenai isu lingkungan. Di dalam negeri, sebagian pihak mendesak agar ekspor bahan mentah dibuka kembali tanpa syarat demi memperoleh pemasukan cepat jangka pendek. Namun, penghentian hilirisasi berisiko melanggengkan ketergantungan Indonesia sebagai pemasok bahan baku murah dalam rantai pasok teknologi global. Sikap strategis yang paling mencerminkan bela negara dalam menjaga kedaulatan ekonomi dan lingkungan sekaligus adalah ...",
    options: [
      "Membatalkan seluruh kebijakan hilirisasi dan mengekspor seluruh mineral mentah demi menghindari sengketa perdagangan internasional",
      "Mempertahankan kemandirian hilirisasi bernilai tambah melalui diplomasi ekonomi terukur, penegakan ketat standar lingkungan dan keselamatan kerja, serta penguatan riset industri nasional",
      "Mengabaikan seluruh kritik dan temuan kerusakan lingkungan di kawasan tambang agar produksi industri pengolahan dapat dipacu tanpa pengawasan",
      "Menyerahkan seluruh kepemilikan smelter dan hak paten teknologi pengolahan mineral kepada satu pihak asing tanpa kewajiban alih teknologi",
      "Menghentikan seluruh hubungan dagang internasional Indonesia agar tidak lagi terikat aturan perdagangan lintas negara",
    ],
    answer: "B",
    explanation:
      "Bela negara di bidang ekonomi menuntut kemandirian nilai tambah nasional sekaligus keberlanjutan ekologis dan martabat hukum. Mempertahankan hilirisasi dengan memperkuat diplomasi dagang, menegakkan standar lingkungan serta keselamatan pekerja (agar kritik lingkungan terjawab secara objektif), dan mendorong penguasaan riset nasional menjaga kedaulatan ekonomi jangka panjang tanpa mengorbankan kelestarian alam.",
    tip: "Bela negara ekonomi yang matang menggabungkan kedaulatan nilai tambah nasional, kepatuhan standar lingkungan, dan diplomasi rasional.",
  },
  {
    id: "twk-bel-098",
    subPattern: "penalaran-bela-negara-kontemporer",
    difficulty: "sedang",
    prompt:
      "Pengalaman krisis kesehatan global menunjukkan bahwa ketergantungan tinggi pada impor bahan baku obat dan alat diagnostik dapat melumpuhkan layanan rumah sakit nasional saat negara produsen membatasi ekspornya. Menyikapi kerentanan tersebut, konsorsium peneliti universitas negeri, industri farmasi dalam negeri, dan aparatur kementerian kesehatan berkolaborasi mengembangkan produksi bahan baku obat esensial serta memperkuat sistem surveilans penyakit menular hingga tingkat puskesmas. Dalam konteks konsep bela negara modern, upaya kolektif tersebut merupakan perwujudan nyata dari ...",
    options: [
      "Penggantian fungsi pertahanan negara dari kewenangan pemerintah pusat menjadi tanggung jawab komersial rumah sakit swasta",
      "Sikap proteksionisme ekstrem yang melarang pertukaran ilmu kedokteran dan riset klinis bersama komunitas ilmiah internasional",
      "Bela negara melalui pengabdian sesuai profesi untuk membangun kemandirian dan ketahanan kesehatan menghadapi ancaman nirmiliter",
      "Pengerahan wajib militer bagi seluruh tenaga farmasi dan mahasiswa kedokteran pada masa damai",
      "Upaya administratif rutin yang tidak berhubungan dengan keselamatan bangsa dan daya tahan nasional",
    ],
    answer: "C",
    explanation:
      "Pengabdian sesuai profesi merupakan salah satu jalur utama bela negara dalam UU No. 23 Tahun 2019. Kolaborasi peneliti, industri farmasi lokal, dan aparatur kesehatan untuk memproduksi bahan baku obat esensial serta memperkuat surveilans epidemiologi secara langsung menjawab kerentanan ancaman nirmiliter di bidang kesehatan dan ketahanan biologi nasional.",
    tip: "Hubungkan kontribusi nyata sesuai keahlian profesi yang memutus ketergantungan strategis negara dengan jalur pengabdian profesi dalam bela negara.",
  },
  {
    id: "twk-bel-099",
    subPattern: "penalaran-bela-negara-kontemporer",
    difficulty: "sulit",
    prompt:
      "Perhatikan empat skenario ancaman terhadap keamanan dan kedaulatan negara berikut:\n(1) Pelanggaran wilayah udara oleh pesawat nirawak pengintai asing yang dilakukan bersamaan dengan serangan siber pada radar sipil dan penyebaran hoaks evakuasi di kota perbatasan.\n(2) Perselisihan jadwal pemanfaatan lapangan olahraga antarwarga dua rukun tetangga yang diselesaikan melalui mediasi pengurus kelurahan.\n(3) Sabotase kabel komunikasi bawah laut dan jaringan distribusi energi nasional yang diiringi tekanan finansial terkoordinasi serta operasi propaganda daring untuk menggoyang legitimasi negara.\n(4) Kenaikan harga komoditas musiman di pasar tradisional lokal akibat keterlambatan panen lokal selama dua pekan.\nBerdasarkan karakteristik ancaman pertahanan negara menurut dokumen strategis pertahanan nasional, skenario yang tergolong ancaman hibrida ditunjukkan oleh nomor ...",
    options: [
      "(1) dan (2)",
      "(1) dan (4)",
      "(2) dan (3)",
      "(1) dan (3)",
      "(3) dan (4)",
    ],
    answer: "D",
    explanation:
      "Ancaman hibrida bercirikan keterpaduan antara ancaman militer/paramiliter atau sabotase infrastruktur vital dengan ancaman nirmiliter (serangan siber, propaganda disinformasi, tekanan ekonomi) secara simultan untuk melemahkan kedaulatan dan stabilitas negara. Skenario pelanggaran udara nirawak disertai peretasan radar dan hoaks evakuasi serta skenario sabotase kabel bawah laut yang diiringi tekanan finansial dan propaganda daring memenuhi seluruh unsur tersebut, sedangkan dua skenario lainnya hanya konflik lingkungan kecil dan fluktuasi pasokan musiman.",
    tip: "Cari skenario yang memadukan lebih dari satu dimensi ancaman (fisik/sabotase + siber + informasi/ekonomi) secara terkoordinasi terhadap kedaulatan.",
  },
  {
    id: "twk-bel-100",
    subPattern: "penalaran-bela-negara-kontemporer",
    difficulty: "sulit",
    prompt:
      "Sebuah unit pengelola layanan digital pemerintahan daerah berencana memindahkan basis data kependudukan dan catatan layanan sosial strategis ke server komputasi awan di luar negeri yang tidak memiliki jaminan kesetaraan standar pelindungan data, dengan alasan biaya sewa tahunannya lebih murah. Tim hukum instansi mengingatkan bahwa pemindahan data publik strategis melampaui batas yurisdiksi nasional tanpa dasar hukum dan standar keamanan yang ketat dapat membuka celah penyalahgunaan oleh entitas asing serta menyulitkan penegakan hukum jika terjadi kebocoran. Ditinjau dari prinsip kedaulatan data, tata kelola SPBE, dan UU Nomor 27 Tahun 2022 tentang PDP, pertimbangan yang paling tepat untuk menolak rencana tersebut adalah ...",
    options: [
      "Layanan pemerintahan daerah dilarang menggunakan teknologi komputasi awan modern dan wajib kembali menyimpan data di komputer lokal tanpa jaringan",
      "Efisiensi anggaran pengadaan teknologi informasi selalu lebih utama dibandingkan perlindungan yurisdiksi hukum atas data penduduk",
      "Data kependudukan warga bersifat terbuka untuk publik global sehingga lokasi penyimpanan server tidak memengaruhi keamanan nasional",
      "Pemerintah daerah berwenang membuat perjanjian transfer data strategis lintas negara secara mandiri tanpa mengacu regulasi nasional",
      "Data publik strategis merupakan bagian dari kedaulatan digital negara sehingga penempatannya wajib mematuhi aturan pusat data nasional, standar keamanan SPBE, dan persyaratan ketat transfer data lintas batas UU PDP",
    ],
    answer: "E",
    explanation:
      "Dalam tata kelola SPBE dan UU No. 27 Tahun 2022 tentang PDP, pengelolaan data publik strategis harus menjunjung kedaulatan data, keamanan informasi, serta ketentuan ketat mengenai transfer data pribadi ke luar wilayah hukum Indonesia (termasuk kecukupan tingkat pelindungan data yang setara atau lebih tinggi serta kepatuhan regulasi sektoral). Efisiensi biaya tidak boleh mengorbankan kedaulatan yurisdiksi dan keamanan data warga negara.",
    tip: "Kedaulatan digital menuntut kepatuhan pada regulasi pusat data nasional dan syarat ketat transfer data lintas batas, bukan sekadar mengejar biaya murah.",
  },
];
