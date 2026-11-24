import {
  buildTwkPatternQuestions,
  type Question,
  type QuestionDraft,
} from "@/modules/question-bank/domain/question";
import { belaNegaraBatch2Drafts } from "./batches/03-bela-negara-batch-2";
import { belaNegaraBatch3Drafts } from "./batches/03-bela-negara-batch-3";

const belaNegaraDrafts: readonly QuestionDraft[] = [
  {
    "id": "twk-bel-001",
    "subPattern": "dasar-hukum-dan-nilai-bela-negara",
    "difficulty": "mudah",
    "prompt": "Hak dan kewajiban setiap warga negara untuk ikut serta dalam upaya pembelaan negara secara konstitusional tercantum tegas dalam UUD Negara Republik Indonesia Tahun 1945 pada ...",
    "options": [
      "Pasal 27 ayat (3)",
      "Pasal 28A ayat (1)",
      "Pasal 29 ayat (2)",
      "Pasal 31 ayat (1)",
      "Pasal 33 ayat (3)"
    ],
    "answer": "A",
    "explanation": "Pasal 27 ayat (3) UUD 1945 hasil amandemen kedua berbunyi: \"Setiap warga negara berhak dan wajib ikut serta dalam upaya pembelaan negara.\" Adapun Pasal 30 mengatur pertahanan dan keamanan negara.",
    "tip": "Bedakan Pasal 27 ayat (3) (upaya pembelaan negara) dengan Pasal 30 (usaha pertahanan dan keamanan negara)."
  },
  {
    "id": "twk-bel-002",
    "subPattern": "dasar-hukum-dan-nilai-bela-negara",
    "difficulty": "mudah",
    "prompt": "Berdasarkan ketentuan peraturan perundang-undangan tentang pembinaan kesadaran bela negara, kelima nilai dasar bela negara mencakup cinta tanah air, sadar berbangsa dan bernegara, setia pada Pancasila sebagai ideologi negara, rela berkorban untuk bangsa dan negara, serta ...",
    "options": [
      "Memiliki penguasaan persenjataan militer modern di setiap keluarga",
      "Memiliki kemampuan awal bela negara",
      "Mewajibkan tugas dinas militer penuh waktu bagi seluruh warga sipil",
      "Menolak seluruh produk teknologi komunikasi dari negara mitra",
      "Membatasi partisipasi warga dalam organisasi profesi internasional"
    ],
    "answer": "B",
    "explanation": "Lima Nilai Dasar Bela Negara terdiri atas: (1) cinta tanah air, (2) sadar berbangsa dan bernegara, (3) setia kepada Pancasila sebagai ideologi negara, (4) rela berkorban untuk bangsa dan negara, serta (5) memiliki kemampuan awal bela negara (baik secara psikis maupun fisik sesuai profesi).",
    "tip": "Hafalkan kelima nilai dasar bela negara: cinta tanah air, sadar berbangsa-bernegara, setia pada Pancasila, rela berkorban, dan kemampuan awal bela negara."
  },
  {
    "id": "twk-bel-003",
    "subPattern": "dasar-hukum-dan-nilai-bela-negara",
    "difficulty": "sedang",
    "prompt": "Menurut Pasal 7 ayat (2) Undang-Undang Nomor 23 Tahun 2019 tentang Pengelolaan Sumber Daya Nasional untuk Pertahanan Negara (UU PSDN), keikutsertaan warga negara dalam usaha bela negara diselenggarakan melalui empat jalur, yaitu pendidikan kewarganegaraan, pelatihan dasar kemiliteran secara wajib, pengabdian sebagai prajurit TNI secara sukarela atau wajib, dan ...",
    "options": [
      "Penarikan iuran dana wajib bulanan khusus pengadaan alutsista oleh pemerintah desa",
      "Pembentukan kelompok keamanan lingkungan tertutup yang terpisah dari pembinaan negara",
      "Pengabdian sesuai dengan profesi",
      "Penghentian kerja sama riset ilmiah perguruan tinggi nasional dengan lembaga internasional",
      "Penerapan jam malam permanen di seluruh wilayah perbatasan darat maupun laut"
    ],
    "answer": "C",
    "explanation": "Pasal 7 ayat (2) UU No. 23 Tahun 2019 (serta Pasal 9 ayat (2) UU No. 3 Tahun 2002) menetapkan empat bentuk usaha bela negara: pendidikan kewarganegaraan, pelatihan dasar kemiliteran secara wajib, pengabdian sebagai prajurit TNI, dan pengabdian sesuai dengan profesi.",
    "tip": "Bela negara bukan hanya angkat senjata; pengabdian profesional di bidang sipil juga jalur resmi undang-undang."
  },
  {
    "id": "twk-bel-004",
    "subPattern": "dasar-hukum-dan-nilai-bela-negara",
    "difficulty": "sedang",
    "prompt": "Seorang mahasiswa menilai bela negara hanya relevan bagi anggota TNI atau aparat keamanan saat negara sedang berperang secara fisik. Kekeliruan paling mendasar dari pandangan tersebut jika dikaji melalui UU No. 23 Tahun 2019 adalah ...",
    "options": [
      "Bela negara hanya wajib dilakukan ketika wilayah perairan nasional sedang mengalami blokade ekonomi",
      "Mahasiswa secara hukum termasuk Komponen Utama militer bersama seluruh lulusan perguruan tinggi",
      "UU PSDN menyatakan bahwa warga sipil dilarang keras memiliki kesadaran bela negara pada masa damai",
      "Bela negara mencakup tekad, sikap, perilaku, dan tindakan warga dalam menghadapi ancaman militer, nirmiliter, maupun hibrida di masa damai melalui profesi dan literasi kebangsaan",
      "Kewajiban bela negara otomatis berakhir segera setelah warga negara menamatkan pendidikan dasar"
    ],
    "answer": "D",
    "explanation": "Pasal 6–9 UU No. 23 Tahun 2019 mendefinisikan bela negara secara komprehensif sebagai tekad, sikap, perilaku, dan tindakan warga baik perorangan maupun kolektif untuk menjaga kedaulatan, keutuhan wilayah, dan keselamatan bangsa pada setiap situasi, tidak terbatas pada perang bersenjata.",
    "tip": "Pahami cakupan bela negara yang bersifat menyeluruh—mencakup masa damai dan penguatan ketahanan nasional."
  },
  {
    "id": "twk-bel-005",
    "subPattern": "dasar-hukum-dan-nilai-bela-negara",
    "difficulty": "sedang",
    "prompt": "Contoh konkret perwujudan nilai dasar \"memiliki kemampuan awal bela negara\" bagi seorang aparatur sipil negara di kantor pelayanan modern tanpa harus mengikuti pertempuran bersenjata adalah ...",
    "options": [
      "Mengoleksi seragam taktis militer untuk dikenakan pada setiap acara hiburan di lingkungan tempat tinggal",
      "Menolak seluruh pelatihan keselamatan kerja karena hanya berkaitan dengan tugas dinas pemadam kebakaran",
      "Menutup akses informasi layanan bagi warga pendatang yang belum memiliki surat keterangan domisili daerah",
      "Menunda penyelesaian tugas administrasi harian demi mengikuti perdebatan politik praktis di forum internet",
      "Menjaga kebugaran jasmani dan kesehatan mental, menguasai literasi keamanan informasi, tangguh menghadapi tekanan kerja, serta sigap dalam simulasi tanggap darurat gedung kantor"
    ],
    "answer": "E",
    "explanation": "Kemampuan awal bela negara terbagi menjadi aspek psikis (disiplin, ulet, tangguh, menjaga keamanan data) dan fisik (menjaga kesehatan, kebugaran, kesiapsiagaan pertolongan pertama/bencana), yang langsung menopang ketahanan kerja aparatur negara.",
    "tip": "Kemampuan awal bela negara meliputi kesiapan psikis maupun fisik yang mendukung tugas sehari-hari dan kesigapan darurat."
  },
  {
    "id": "twk-bel-006",
    "subPattern": "dasar-hukum-dan-nilai-bela-negara",
    "difficulty": "sedang",
    "prompt": "Seorang warga negara secara sadar melaporkan penghasilan dan membayar pajak tepat waktu sesuai ketentuan perundang-undangan meski tidak diawasi langsung di tiap transaksi. Jika dikaitkan dengan nilai dasar bela negara, tindakan tersebut terutama mencerminkan ...",
    "options": [
      "Kesadaran berbangsa dan bernegara serta kerelaan berkontribusi nyata menopang pembiayaan pembangunan dan ketahanan nasional",
      "Kepatuhan seremonial semata untuk menghindari pemeriksaan kelengkapan surat kendaraan di jalan raya",
      "Keinginan memperoleh hak istimewa pelayanan publik yang mendahului warga lain di kantor pemerintahan",
      "Upaya memindahkan seluruh tanggung jawab pertahanan wilayah sepenuhnya kepada lembaga perpajakan",
      "Bentuk pengabdian militer wajib yang termasuk ke dalam penugasan Komponen Cadangan bersenjata"
    ],
    "answer": "A",
    "explanation": "Pajak merupakan tulang punggung kemandirian pembiayaan negara (pendidikan, kesehatan, infrastruktur, dan pertahanan). Memenuhi kewajiban pajak dengan jujur menandakan kesadaran berbangsa dan bernegara serta kerelaan berkorban untuk kepentingan umum.",
    "tip": "Kaitkan ketaatan pajak dengan kemandirian APBN sebagai wujud kesadaran berbangsa dan bernegara."
  },
  {
    "id": "twk-bel-007",
    "subPattern": "dasar-hukum-dan-nilai-bela-negara",
    "difficulty": "sulit",
    "prompt": "Pasal 28 UU Nomor 23 Tahun 2019 menegaskan bahwa warga negara yang mengikuti program Komponen Cadangan (Komcad) harus memenuhi syarat sukarela dan penetapan resmi negara. Makna filosofis dan konstitusional dari sifat \"sukarela\" bagi warga negara dalam pembentukan Komcad adalah ...",
    "options": [
      "Komponen Cadangan merupakan kekuatan mandiri yang terlepas dari rantai komando Presiden maupun Tentara Nasional Indonesia saat mobilisasi",
      "Pembentukan Komcad menghormati hak asasi warga sipil dalam negara hukum demokratis sekaligus memberi ruang pengabdian terlatih untuk memperbesar dan memperkuat TNI hanya saat dimobilisasi negara",
      "Peserta Komcad berhak menyimpan senjata api dinas di rumah masing-masing setelah masa pelatihan dasar kemiliteran berakhir",
      "Warga negara yang tidak mendaftar Komcad dianggap otomatis kehilangan status kewarganegaraan dan hak pilihnya",
      "Komcad bertugas menggantikan peran kepolisian dalam penyelidikan tindak pidana umum sehari-hari di tingkat kecamatan"
    ],
    "answer": "B",
    "explanation": "Berbeda dengan wajib militer paksa, UU PSDN menempatkan keikutsertaan warga dalam Komcad secara sukarela, terseleksi, tidak dipersenjatai saat tidak dimobilisasi (senjata disimpan negara), dan baru dikerahkan melalui keputusan Presiden atas persetujuan DPR apabila negara menghadapi ancaman militer/hibrida.",
    "tip": "Ingat pembeda kunci Komcad Indonesia: sukarela, hanya aktif militer saat mobilisasi resmi oleh Presiden dengan persetujuan DPR."
  },
  {
    "id": "twk-bel-008",
    "subPattern": "dasar-hukum-dan-nilai-bela-negara",
    "difficulty": "sulit",
    "prompt": "Sebuah komunitas pemuda menolak mengikuti program pembinaan wawasan kebangsaan karena menilai nilai-nilai Pancasila sudah ketinggalan zaman di era kecerdasan buatan. Jika seorang fasilitator bela negara merespons kondisi ini berdasarkan nilai \"setia pada Pancasila sebagai ideologi negara\", pendekatan paling efektif adalah ...",
    "options": [
      "Menuntut aparat keamanan membekukan seluruh akun media sosial anggota komunitas tersebut secara permanen",
      "Menghindari dialog terbuka dan melarang mereka mengikuti seluruh program pengembangan talenta digital pemerintah",
      "Menunjukkan secara dialogis bagaimana nilai etika keadilan, kemanusiaan, dan persatuan Pancasila relevan menjawab tantangan tata kelola AI, privasi data, serta ketimpangan ekonomi digital",
      "Meminta mereka menghafalkan seluruh butir dokumen sejarah tanpa mengaitkannya dengan permasalahan teknologi masa kini",
      "Menyepakati pandangan tersebut untuk sementara agar komunitas mau menandatangani daftar hadir pembinaan"
    ],
    "answer": "C",
    "explanation": "Kesetiaan pada Pancasila di generasi digital dibuktikan bukan lewat represi maupun hafalan kaku, melainkan dengan menghadirkan Pancasila sebagai etika hidup yang mampu memecahkan persoalan nyata zaman modern, termasuk keadilan digital dan pelindungan kemanusiaan.",
    "tip": "Pilih pendekatan persuasif-substantif yang membuktikan relevansi Pancasila terhadap isu kontemporer."
  },
  {
    "id": "twk-bel-009",
    "subPattern": "ancaman-militer-nirmiliter-dan-hibrida",
    "difficulty": "mudah",
    "prompt": "Berikut ini yang termasuk kategori ancaman nirmiliter di bidang ekonomi dan ketahanan pangan terhadap kedaulatan bangsa Indonesia adalah ...",
    "options": [
      "Pelanggaran batas wilayah udara nasional oleh pesawat tempur asing tanpa izin lintas resmi",
      "Sabotase fisik bersenjata terhadap pangkalan angkatan laut di kawasan perairan strategis",
      "Penyerangan kapal perang lintas perbatasan disertai pendaratan pasukan bersenjata",
      "Ketergantungan tinggi terhadap impor bahan pangan pokok dan fluktuasi harga komoditas yang melemahkan daya tahan ekonomi rakyat",
      "Aksi spionase bersenjata oleh agen militer asing terhadap gudang amunisi strategis nasional"
    ],
    "answer": "D",
    "explanation": "Ancaman nirmiliter menggunakan faktor nonfisik/nonbersenjata (ideologi, politik, ekonomi, sosial budaya, teknologi, keselamatan umum) yang membahayakan kedaulatan atau keselamatan bangsa—salah satunya ketergantungan impor pangan dan kerentanan ekonomi.",
    "tip": "Bedakan ancaman bersenjata terorganisasi (militer) dengan kerentanan ekonomi, sosial, teknologi, dan ideologi (nirmiliter)."
  },
  {
    "id": "twk-bel-010",
    "subPattern": "ancaman-militer-nirmiliter-dan-hibrida",
    "difficulty": "mudah",
    "prompt": "Karakteristik utama yang membedakan ancaman hibrida (hybrid threat) dengan ancaman militer konvensional dalam doktrin pertahanan modern Indonesia adalah ...",
    "options": [
      "Ancaman hibrida hanya muncul di wilayah daratan perbatasan yang jauh dari jaringan komunikasi internet",
      "Ancaman hibrida selalu diumumkan melalui deklarasi perang resmi antarkepala negara sebelum dimulai",
      "Ancaman hibrida hanya dapat ditangani oleh dinas pariwisata daerah tanpa koordinasi antarlembaga",
      "Ancaman hibrida tidak pernah berdampak pada stabilitas politik, kepercayaan publik, maupun keamanan data warga",
      "Ancaman hibrida memadukan cara-cara militer dan nirmiliter secara bersamaan, seperti serangan siber, disinformasi terorganisasi, tekanan ekonomi, dan operasi proksi"
    ],
    "answer": "E",
    "explanation": "Ancaman hibrida bersifat campuran (blended) dan asimetris: mengombinasikan tekanan bersenjata/proksi dengan instrumen nonmiliter seperti serangan siber, peperangan informasi/hoaks, sabotase infrastruktur kritis, dan tekanan ekonomi guna melemahkan ketahanan negara.",
    "tip": "Kata kunci ancaman hibrida adalah perpaduan (kombinasi simultan) metode militer dan nirmiliter/asimetris."
  },
  {
    "id": "twk-bel-011",
    "subPattern": "ancaman-militer-nirmiliter-dan-hibrida",
    "difficulty": "sedang",
    "prompt": "Dalam sistem pertahanan negara menghadapi ancaman nirmiliter seperti krisis wabah penyakit menular berskala nasional, peran unsur pertahanan yang berada di garis terdepan adalah ...",
    "options": [
      "Kementerian dan lembaga pemerintah di luar bidang pertahanan (seperti sektor kesehatan, riset, dan pemerintah daerah) sebagai unsur utama sesuai bidangnya dengan dukungan instansi lain",
      "Hanya komando pasukan tempur infanteri yang mengambil alih seluruh pengelolaan rumah sakit swasta tanpa koordinasi dinas kesehatan",
      "Organisasi kepemudaan olahraga di tingkat kabupaten sebagai pemegang komando kebijakan kesehatan nasional",
      "Pasukan penjaga perbatasan laut sebagai satu-satunya penentu protokol medis pasien rawat inap",
      "Pengadilan negeri setempat yang menggantikan kewenangan teknis tenaga medis dan epidemiolog"
    ],
    "answer": "A",
    "explanation": "Berdasarkan UU No. 3 Tahun 2002 (Pasal 7 ayat 3), pertahanan dalam menghadapi ancaman nonmiliter menempatkan lembaga pemerintah di luar bidang pertahanan sebagai unsur utama (leading sector) sesuai bentuk dan sifat ancamannya, didukung unsur bangsa lain termasuk TNI.",
    "tip": "Dalam ancaman nirmiliter, kementerian/lembaga teknis terkait menjadi unsur utama dengan dukungan lintas komponen."
  },
  {
    "id": "twk-bel-012",
    "subPattern": "ancaman-militer-nirmiliter-dan-hibrida",
    "difficulty": "sedang",
    "prompt": "Perang dagang global, penyelundupan komoditas ilegal lewat pelabuhan tikus, serta penguasaan monopoli jalur distribusi pangan oleh segelintir kartel merupakan ancaman serius di dimensi ekonomi. Dampak jangka panjang ancaman tersebut bila tidak ditangani negara dengan tegas adalah ...",
    "options": [
      "Meningkatnya kualitas layanan pendidikan vokasi di seluruh wilayah pesisir Nusantara secara otomatis",
      "Terganggunya kemandirian ekonomi nasional, melemahnya perlindungan petani/UMKM dalam negeri, dan menurunnya kesejahteraan sosial masyarakat",
      "Menurunnya kebutuhan pengawasan kepabeanan dan karantina di wilayah perbatasan negara",
      "Hilangnya seluruh peran kebijakan moneter dalam menjaga stabilitas nilai tukar rupiah",
      "Terjadinya penurunan kepadatan lalu lintas transportasi logistik di kota-kota industri"
    ],
    "answer": "B",
    "explanation": "Penyelundupan dan praktik kartel merusak pasar domestik, menekan pendapatan produsen nasional (petani/UMKM), mengurangi penerimaan pajak/bea cukai negara, dan menciptakan ketergantungan ekonomi yang mengancam kedaulatan.",
    "tip": "Evaluasi konsekuensi ancaman nirmiliter dimensi ekonomi terhadap kemandirian produsen lokal dan daya tahan bangsa."
  },
  {
    "id": "twk-bel-013",
    "subPattern": "ancaman-militer-nirmiliter-dan-hibrida",
    "difficulty": "sedang",
    "prompt": "Penyebaran paham intoleran dan ekstremisme kekerasan secara terselubung melalui gim daring serta forum komunitas muda merupakan ancaman pada dimensi ideologi dan sosial budaya. Langkah pencegahan dini paling tepat oleh negara bersama masyarakat adalah ...",
    "options": [
      "Melarang seluruh anak muda mengakses perangkat komputer dan menghapus mata pelajaran teknologi informasi",
      "Membubarkan semua komunitas hobi mahasiswa meskipun kegiatan mereka berorientasi prestasi dan sosial",
      "Memperkuat ketahanan keluarga, moderasi beragama, literasi digital kritis, serta ruang dialog kreatif yang membumikan nilai Pancasila di komunitas muda",
      "Menyensor seluruh konten sejarah perjuangan bangsa agar generasi muda tidak mempelajari dinamika politik masa lalu",
      "Menunggu terjadinya aksi kekerasan fisik terlebih dahulu sebelum melakukan program edukasi kebangsaan"
    ],
    "answer": "C",
    "explanation": "Ancaman ideologi di ruang digital harus dilawan lewat pencegahan lunak dan partisipatif: penguatan moderasi beragama, peran keluarga, literasi kritis untuk mengenali narasi radikalisme, serta menghadirkan ruang kreatif positif bagi pemuda.",
    "tip": "Radikalisasi digital dicegah secara efektif lewat literasi kritis, moderasi beragama, keluarga, dan ekosistem komunitas positif."
  },
  {
    "id": "twk-bel-014",
    "subPattern": "ancaman-militer-nirmiliter-dan-hibrida",
    "difficulty": "sedang",
    "prompt": "Sebuah daerah penghasil tambang strategis mengalami lonjakan peredaran narkotika di kalangan pekerja muda dan pelajar hingga menurunkan produktivitas serta memicu kriminalitas. Jika dilihat dari spektrum pertahanan negara, masalah penyalahgunaan narkotika dikategorikan sebagai ancaman karena ...",
    "options": [
      "Membuat harga jual komoditas tambang daerah di pasar ekspor mengalami kenaikan sementara",
      "Menghilangkan kebutuhan pemerintah daerah membangun fasilitas olahraga bagi pemuda setempat",
      "Merupakan ancaman militer bersenjata jarak jauh yang harus ditangani melalui perang terbuka",
      "Merusak kualitas kesehatan fisik, mental, dan daya saing generasi penerus bangsa sebagai modal utama ketahanan nasional (ancaman nirmiliter)",
      "Membebaskan warga pengguna dari seluruh ketentuan hukum pidana nasional setelah menjalani konseling singkat"
    ],
    "answer": "D",
    "explanation": "Narkotika adalah ancaman nirmiliter yang sangat berbahaya (lost generation threat) karena menghancurkan sumber daya manusia, kesehatan generasi muda, produktivitas ekonomi, dan memicu jaringan kejahatan transnasional.",
    "tip": "Kaitkan bahaya narkotika dengan hilangnya kualitas SDM dan lahirnya kejahatan lintas negara."
  },
  {
    "id": "twk-bel-015",
    "subPattern": "ancaman-militer-nirmiliter-dan-hibrida",
    "difficulty": "sulit",
    "prompt": "Menjelang proyek pembangunan infrastruktur strategis di kawasan perbatasan, secara bersamaan muncul serangan siber terhadap sistem layanan perizinan daerah, kampanye hoaks multibahasa yang memicu ketegangan antaretnis setempat, dan gangguan pasokan bahan bakar oleh jaringan penyelundup bersenjata. Kondisi terpadu tersebut paling tepat dianalisis sebagai ...",
    "options": [
      "Konflik administratif internal antarperangkat desa akibat keterlambatan pengesahan anggaran tahunan",
      "Ancaman murni bidang sosial budaya yang cukup diselesaikan lewat penyelenggaraan festival kesenian lokal",
      "Dinamika persaingan bisnis sehat antarpengusaha lokal demi memperoleh kontrak subkontraktor pembangunan",
      "Gangguan keamanan lalu lintas musiman yang otomatis hilang begitu masa liburan daerah berakhir",
      "Ancaman hibrida karena memadukan operasi siber, perang informasi/psikologis, sabotase ekonomi-energi, dan gangguan keamanan terkoordinasi untuk melemahkan proyek strategis negara"
    ],
    "answer": "E",
    "explanation": "Kombinasi serentak antara serangan digital (siber), disinformasi pemecah belah (psikologis/informasi), pelemahan rantai pasok (ekonomi), dan aktor bersenjata/proksi adalah ciri khas ancaman hibrida modern yang menuntut respons lintas kementerian/lembaga (militer dan sipil terpadu).",
    "tip": "Ketika gangguan siber, hoaks terstruktur, gangguan pasokan strategis, dan aksi bersenjata hadir terpadu, itu adalah ancaman hibrida."
  },
  {
    "id": "twk-bel-016",
    "subPattern": "ancaman-militer-nirmiliter-dan-hibrida",
    "difficulty": "sulit",
    "prompt": "Mengapa ketahanan energi terbarukan dan swasembada pangan lokal dipandang sebagai bagian tak terpisahkan dari strategi menghadapi ancaman nirmiliter dalam geopolitik abad ke-21?",
    "options": [
      "Ketergantungan mutlak pada impor pangan dan energi asing membuat negara rentan ditekan secara politik serta lumpuh saat rantai pasok global terganggu krisis atau konflik",
      "Negara yang memiliki kemandirian pangan dan energi tidak memerlukan lagi diplomasi bilateral maupun kerja sama perdagangan antarnegara",
      "Kemandirian energi terbarukan hanya ditujukan agar instansi pemerintah menghentikan seluruh proyek pembangunan jalan dan jembatan",
      "Swasembada pangan bertujuan memaksa seluruh penduduk perkotaan meninggalkan sektor jasa serta industri manufaktur",
      "Ketahanan pangan menggantikan seluruh kebutuhan pemeliharaan peralatan pertahanan di wilayah udara maupun perairan"
    ],
    "answer": "A",
    "explanation": "Dalam geopolitik modern, pangan dan energi kerap dijadikan instrumen tekanan strategis (weaponization of supply chains). Negara yang mandiri pangan dan energi memiliki daya tahan nasional tinggi sehingga kedaulatan kebijakannya sulit didikte pihak luar saat terjadi krisis global.",
    "tip": "Lihat kaitan antara kemandirian pangan/energi dengan kekebalan kedaulatan kebijakan negara dari tekanan krisis rantai pasok global."
  },
  {
    "id": "twk-bel-017",
    "subPattern": "bela-negara-di-ruang-siber-dan-literasi-digital",
    "difficulty": "mudah",
    "prompt": "Ketika menerima pesan berantai berisi berita menghebohkan yang menyudutkan suatu kelompok masyarakat atau kebijakan negara melalui grup percakapan keluarga, sikap bela negara di ruang siber yang paling tepat adalah ...",
    "options": [
      "Segera meneruskan pesan ke seluruh grup kerja dengan tambahan kalimat peringatan agar orang lain waspada meski belum diperiksa",
      "Memeriksa keabsahan sumber, memverifikasi fakta lewat situs resmi atau kanal cek fakta kredibel, dan tidak ikut menyebarkan informasi yang belum teruji kebenarannya",
      "Mengubah sedikit judul pesan tersebut sebelum diteruskan ulang supaya tampak lebih menarik dibaca warga sekitar",
      "Menuliskan komentar emosional yang menuduh kelompok tertentu sebagai pelaku pengkhianatan tanpa mencari klarifikasi",
      "Menganggap setiap kabar negatif di internet pasti benar sepanjang disertai tangkapan layar foto yang tampak meyakinkan"
    ],
    "answer": "B",
    "explanation": "Saring sebelum sharing (verifikasi sumber, cek fakta, periksa konteks waktu dan data resmi) merupakan perilaku bela negara paling mendasar di ruang digital untuk memutus rantai disinformasi pemecah belah persatuan bangsa.",
    "tip": "Terapkan prinsip saring sebelum sharing: cek sumber resmi, verifikasi konteks tanggal/foto, dan tahan dorongan meneruskan kabar provokatif."
  },
  {
    "id": "twk-bel-018",
    "subPattern": "bela-negara-di-ruang-siber-dan-literasi-digital",
    "difficulty": "mudah",
    "prompt": "Lembaga pemerintah nonkementerian yang bertugas menyelenggarakan tugas pemerintahan di bidang keamanan siber serta persandian guna menjaga ketahanan sistem elektronik nasional adalah ...",
    "options": [
      "Badan Pusat Statistik (BPS)",
      "Badan Kepegawaian Negara (BKN)",
      "Badan Siber dan Sandi Negara (BSSN)",
      "Badan Nasional Penanggulangan Bencana (BNPB)",
      "Badan Pemeriksa Keuangan (BPK)"
    ],
    "answer": "C",
    "explanation": "Badan Siber dan Sandi Negara (BSSN) merupakan lembaga pemerintah yang berwenang menjaga keamanan siber nasional, persandian negara, penanganan insiden siber infrastruktur informasi vital, serta pembinaan kesadaran keamanan informasi instansi.",
    "tip": "Ingat akronim BSSN sebagai otoritas utama keamanan siber dan persandian negara."
  },
  {
    "id": "twk-bel-019",
    "subPattern": "bela-negara-di-ruang-siber-dan-literasi-digital",
    "difficulty": "sedang",
    "prompt": "Seorang pegawai menerima surel (email) yang mengatasnamakan admin sistem kepegawaian meminta dirinya mengklik tautan luar dan memasukkan kata sandi akun dinas dengan ancaman akun akan dinonaktifkan dalam dua jam. Tindakan yang menunjukkan kesadaran keamanan siber sebagai wujud bela negara adalah ...",
    "options": [
      "Langsung mengisikan kata sandi kantor pada tautan tersebut karena takut terlambat melakukan presensi harian",
      "Meneruskan tautan surel mencurigakan itu ke grup seluruh pegawai agar setiap rekan mencoba mengisikan datanya sendiri",
      "Mengganti kata sandi dengan tanggal lahir pribadi agar lebih mudah diingat lalu tetap masuk lewat tautan surel tadi",
      "Tidak mengklik tautan maupun memberikan kredensial, memeriksa alamat domain pengirim sebenarnya, dan segera melaporkan upaya phishing tersebut ke tim keamanan TI instansi",
      "Membalas surel dengan mengirimkan foto kartu identitas pegawai agar admin memastikan akun masih aktif"
    ],
    "answer": "D",
    "explanation": "Teknik social engineering/phishing menargetkan kredensial aparatur untuk menyusup ke jaringan sistem pemerintahan. Mengenali alamat pengirim palsu, menjaga kerahasiaan kata sandi/OTP, dan segera melapor ke tim keamanan TI (CSIRT) instansi menjaga ketahanan aset data negara.",
    "tip": "Kenali ciri serangan phishing (rasa urgensi/ancaman, tautan eksternal mencurigakan) dan laporkan ke unit keamanan TI/CSIRT."
  },
  {
    "id": "twk-bel-020",
    "subPattern": "bela-negara-di-ruang-siber-dan-literasi-digital",
    "difficulty": "sedang",
    "prompt": "Instansi pelayanan publik daerah mengalami upaya serangan pemerasan siber (ransomware) akibat salah satu komputer layanan menggunakan perangkat lunak bajakan serta belum mencadangkan data secara terisolasi. Pembelajaran bela negara aspek ketahanan digital dari insiden tersebut adalah ...",
    "options": [
      "Menghapus seluruh sistem layanan berbasis elektronik dan kembali ke pencatatan arsip kertas manual selamanya",
      "Membayar tebusan secepatnya menggunakan dana operasional darurat tanpa memperbaiki celah keamanan jaringan",
      "Mengizinkan setiap pegawai menginstal aplikasi hiburan pribadi di komputer server agar kinerja jaringan terpantau",
      "Membagikan data cadangan warga kepada vendor swasta tanpa perjanjian kerahasiaan sebagai langkah antisipasi",
      "Memakai perangkat lunak berlisensi resmi, memperbarui sistem keamanan berkala, menerapkan otentikasi multifaktor, dan menyimpan cadangan data terenkripsi secara terisolasi (offline backup)"
    ],
    "answer": "E",
    "explanation": "Ketahanan siber infrastruktur publik memerlukan kebersihan digital (cyber hygiene): bebas perangkat lunak bajakan berisiko malware, pembaruan keamanan sistem, otentikasi multifaktor (MFA), pembatasan hak akses, serta pencadangan data terisolasi/terenkripsi sesuai standar keamanan data nasional.",
    "tip": "Ketahanan siber institusi bertumpu pada cyber hygiene: software legal, patch keamanan, MFA, dan backup terisolasi."
  },
  {
    "id": "twk-bel-021",
    "subPattern": "bela-negara-di-ruang-siber-dan-literasi-digital",
    "difficulty": "sedang",
    "prompt": "Undang-Undang Nomor 27 Tahun 2022 tentang Pelindungan Data Pribadi (UU PDP) memperkuat kedaulatan digital warga negara Indonesia. Bagi aparatur pemerintah pengelola aplikasi layanan publik, kewajiban bela negara yang selaras dengan UU tersebut tampak pada tindakan ...",
    "options": [
      "Mengumpulkan data pribadi warga secara proporsional sesuai tujuan layanan, menjaga keamanan penyimpanannya, tidak menyebarkannya tanpa dasar hukum sah, serta melaporkan cepat jika terjadi kebocoran",
      "Menampilkan nomor induk kependudukan dan alamat rumah lengkap seluruh penerima bantuan sosial pada spanduk terbuka di tepi jalan raya",
      "Menjual basis data alamat surel pelamar kerja daerah ke perusahaan periklanan demi menambah pendapatan lain-lain",
      "Mengunduh salinan basis data pasien puskesmas ke diska lepas (flashdisk) pribadi tanpa enkripsi untuk dikerjakan dari kafe umum",
      "Membiarkan formulir layanan daring dapat diakses tanpa kata sandi dan enkripsi agar masyarakat lebih cepat mengunduh berkas pihak lain"
    ],
    "answer": "A",
    "explanation": "Melindungi data pribadi warga negara (UU PDP) merupakan bagian dari keamanan nonmiliter dan perlindungan kedaulatan warga di ruang digital: menerapkan prinsip minimasi data, keamanan penyimpanan/enkripsi, kejelasan tujuan, dan kepatuhan notifikasi jika terjadi insiden.",
    "tip": "Kepatuhan terhadap UU PDP menuntut minimasi data, enkripsi, larangan penyalahgunaan data warga, dan tanggung jawab pengendali data."
  },
  {
    "id": "twk-bel-022",
    "subPattern": "bela-negara-di-ruang-siber-dan-literasi-digital",
    "difficulty": "sedang",
    "prompt": "Mengapa penggunaan konten kebencian yang diproduksi oleh akun bot terkoordinasi di media sosial sering dimanfaatkan dalam operasi pelemahan ketahanan nasional?",
    "options": [
      "Karena akun bot hanya bertujuan mempromosikan produk UMKM kuliner khas daerah kepada wisatawan asing",
      "Karena polarisasi buatan dan hilangnya rasa saling percaya antarwarga serta terhadap institusi negara mampu memecah persatuan bangsa dari dalam tanpa pengerahan pasukan",
      "Karena akun bot secara teknis memperbaiki kecepatan jaringan serat optik nasional secara signifikan",
      "Karena perdebatan di kolom komentar media sosial otomatis meningkatkan indeks literasi membaca pelajar nasional",
      "Karena kampanye bot selalu mudah dikenali seluruh warga sehingga tidak pernah memengaruhi opini masyarakat"
    ],
    "answer": "B",
    "explanation": "Operasi informasi melalui akun terotomatisasi (bot) mengeksploitasi emosi sosial (agama, suku, isu ekonomi) untuk menumbuhkan ketidakpercayaan sosial (social distrust) dan polarisasi ekstrem—melemahkan sendi persatuan bangsa secara nirmiliter.",
    "tip": "Waspadai bagaimana amplifikasi kebencian terkoordinasi melemahkan modal sosial dan kepercayaan publik."
  },
  {
    "id": "twk-bel-023",
    "subPattern": "bela-negara-di-ruang-siber-dan-literasi-digital",
    "difficulty": "sulit",
    "prompt": "Di tengah maraknya penipuan daring lintas negara, situs judi ilegal yang menyusup pada domain lembaga pendidikan/pemerintah (defacement/backlink injection), serta kebocoran kredensial, peran strategis warga negara biasa sebagai komponen penguat pertahanan ruang siber adalah ...",
    "options": [
      "Melakukan serangan balik ilegal ke server luar negeri tanpa koordinasi otoritas hukum nasional",
      "Mengunduh dan memasang seluruh aplikasi penguat sinyal tidak resmi dari tautan pesan berantai anonim",
      "Meningkatkan literasi keamanan siber pribadi, memutus akses serta melapor situs/konten ilegal ke kanal pengaduan resmi (seperti Aduan Konten Komdigi/BSSN/polisi siber), dan membangun narasi digital sehat",
      "Menghindari seluruh pemanfaatan transaksi perbankan maupun layanan pemerintahan elektronik demi menghindari risiko teknologi",
      "Menggandakan serta membagikan ulang daftar akun yang bocor ke forum terbuka agar pemilik akun mengetahuinya langsung"
    ],
    "answer": "C",
    "explanation": "Warga tidak dibenarkan melakukan peretasan balik ilegal (retaliatory hacking), namun berperan krusial menjaga keamanan akun pribadi, tidak menyebarkan data bocor maupun tautan berbahaya, aktif melapor lewat kanal resmi CSIRT/Komdigi/kepolisian, dan mengedukasi lingkungan sekitar.",
    "tip": "Peran sipil dalam pertahanan siber: cyber hygiene + pelaporan kanal resmi + literasi positif, bukan main hakim sendiri di dunia maya."
  },
  {
    "id": "twk-bel-024",
    "subPattern": "bela-negara-di-ruang-siber-dan-literasi-digital",
    "difficulty": "sulit",
    "prompt": "Sebuah instansi menggunakan asisten kecerdasan buatan (generative AI) komersial pihak ketiga untuk membantu menyusun draf surat. Dari perspektif keamanan nasional dan rahasia jabatan, batasan paling krusial yang wajib dipatuhi aparatur saat memanfaatkan teknologi tersebut adalah ...",
    "options": [
      "Pegawai sama sekali tidak boleh memakai alat digital apa pun untuk memeriksa struktur ejaan bahasa Indonesia",
      "Seluruh keputusan akhir penetapan kebijakan publik diserahkan otomatis kepada hasil luaran AI tanpa verifikasi manusia",
      "Instansi dapat mengunggah data rahasia pertahanan negara ke platform AI publik gratis sepanjang akun dibuat dengan surel pribadi",
      "Dilarang memasukkan dokumen rahasia negara, data pribadi warga (NIK/rekam medis), atau naskah strategis belum disahkan ke platform AI publik yang server serta penyimpanannya tidak terjamin keamanannya",
      "Penggunaan AI hanya perlu dibatasi pada pembuatan desain spanduk perayaan hari besar keagamaan saja"
    ],
    "answer": "D",
    "explanation": "Menginput data sensitif negara maupun data pribadi warga ke layanan AI publik eksternal berisiko kebocoran informasi melalui logging/pelatihan model pihak ketiga. ASN harus menerapkan prinsip klasifikasi informasi dan tetap memegang kendali verifikasi manusia atas isi dokumen resmi.",
    "tip": "Prinsip aman memakai AI di birokrasi: jangan input rahasia negara/data pribadi warga ke server publik, dan tetap verifikasi faktanya."
  },
  {
    "id": "twk-bel-025",
    "subPattern": "bela-negara-melalui-profesi-dan-kesiapsiagaan-bencana",
    "difficulty": "mudah",
    "prompt": "Seorang dokter muda yang baru diangkat menjadi ASN bersedia bertugas di puskesmas wilayah terluar dengan keterbatasan sinyal dan fasilitas, demi memastikan warga perbatasan mendapat layanan kesehatan bermutu. Sikap tersebut mewujudkan bela negara melalui jalur ...",
    "options": [
      "Pendidikan dasar kemiliteran wajib di barak pasukan tempur",
      "Mobilisasi Komponen Cadangan saat keadaan bahaya perang terbuka",
      "Penguasaan teknologi pertahanan udara strategis lintas negara",
      "Pengabdian militer sukarela pada satuan tugas pasukan pengamanan ibu kota",
      "Pengabdian sesuai dengan profesi untuk meningkatkan ketahanan masyarakat bangsa"
    ],
    "answer": "E",
    "explanation": "Mengabdi secara profesional di bidang keahlian masing-masing (medis, pendidik, peneliti, penyuluh pertanian, pekerja teknis layanan) terutama di wilayah 3T (Terdepan, Terluar, Tertinggal) merupakan wujud langsung bela negara melalui pengabdian sesuai profesi.",
    "tip": "Tenaga kesehatan, guru, peneliti, atau penyuluh yang mengabdi sepenuh hati di bidangnya adalah contoh nyata bela negara sesuai profesi."
  },
  {
    "id": "twk-bel-026",
    "subPattern": "bela-negara-melalui-profesi-dan-kesiapsiagaan-bencana",
    "difficulty": "mudah",
    "prompt": "Dalam siklus penanggulangan bencana alam di Indonesia (prabencana, tanggap darurat, dan pascabencana), kegiatan menyusun peta rawan longsor, memasang rambu jalur evakuasi, dan menyelenggarakan simulasi penyelamatan rutin di sekolah termasuk pada tahap ...",
    "options": [
      "Prabencana (mitigasi dan kesiapsiagaan)",
      "Tanggap darurat saat puncak krisis",
      "Rehabilitasi infrastruktur pascabencana",
      "Rekonstruksi permukiman baru setelah bencana",
      "Evaluasi pertanggungjawaban dana hibah darurat"
    ],
    "answer": "A",
    "explanation": "Pemetaan wilayah rawan, pembangunan sistem peringatan dini, penyiapan jalur evakuasi, dan pelatihan simulasi penyelamatan dilakukan sebelum bencana terjadi untuk mengurangi risiko korban jiwa serta kerusakan—disebut tahap prabencana (mitigasi & kesiapsiagaan).",
    "tip": "Kenali tiga fase bencana menurut UU No. 24 Tahun 2007: Prabencana (mitigasi-kesiapsiagaan), Tanggap Darurat, dan Pascabencana (rehabilitasi-rekonstruksi)."
  },
  {
    "id": "twk-bel-027",
    "subPattern": "bela-negara-melalui-profesi-dan-kesiapsiagaan-bencana",
    "difficulty": "sedang",
    "prompt": "Seorang penyuluh pertanian membina kelompok tani di lereng gunung mengembangkan pertanian terasering ramah lingkungan serta varietas padi tahan kekeringan untuk mencegah erosi dan gagal panen akibat perubahan iklim. Kaitan langsung kerja profesi tersebut dengan bela negara adalah ...",
    "options": [
      "Mengubah seluruh kawasan hutan lindung menjadi perkebunan industri berskala ekspor",
      "Menjaga ketahanan pangan lokal sekaligus kelestarian ekologi sebagai penopang keselamatan masyarakat dan ketahanan nasional jangka panjang",
      "Menggantikan peran perguruan tinggi dalam menguji kelayakan kurikulum pendidikan dasar nasional",
      "Mewajibkan seluruh petani desa meninggalkan metode budidaya lokal dan hanya menanam satu komoditas impor",
      "Membatasi distribusi hasil panen warga hanya untuk konsumsi aparatur kantor kecamatan setempat"
    ],
    "answer": "B",
    "explanation": "Kerentanan pangan dan kerusakan lingkungan (bencana ekologis seperti longsor/banjir) merupakan ancaman langsung terhadap keselamatan warga dan negara. Kerja edukatif penyuluh menjaga pangan dan ekologi adalah bentuk nyata bela negara sesuai profesi.",
    "tip": "Ketahanan pangan dan pencegahan bencana ekologis adalah pilar penting ketahanan nasional nirmiliter."
  },
  {
    "id": "twk-bel-028",
    "subPattern": "bela-negara-melalui-profesi-dan-kesiapsiagaan-bencana",
    "difficulty": "sedang",
    "prompt": "Ketika terjadi gempa bumi berkekuatan besar yang memutus jaringan listrik dan komunikasi di suatu kabupaten, sikap seorang ASN daerah yang rumahnya masih aman namun tidak bertugas di tim medis darurat adalah ...",
    "options": [
      "Menyebarkan foto korban tanpa sensor ke media sosial pribadi untuk mendapatkan banyak perhatian pengikut",
      "Menimbun bahan bakar minyak serta air minum kemasan sebanyak-banyaknya untuk dijual kembali dengan harga berlipat",
      "Memastikan keselamatan keluarga terdekat terlebih dahulu, lalu segera melapor ke pimpinan/BPBD untuk membantu pendataan, distribusi logistik, atau pengoperasian posko darurat sesuai arahan terkoordinasi",
      "Mengambil cuti mendadak ke luar provinsi selama satu bulan dan memutus komunikasi dengan rekan kantor",
      "Membagikan informasi perkiraan jam terjadinya gempa susulan berkekuatan besar dari sumber akun anonim internet"
    ],
    "answer": "C",
    "explanation": "Saat bencana, koordinasi terpusat dan solidaritas tanpa kepanikan sangat menentukan keselamatan jiwa warga. ASN sigap melapor untuk penugasan kemanusiaan terkoordinasi, tidak menimbun kebutuhan pokok, dan tidak menyebarkan kabar meresahkan/konten yang melanggar martabat korban.",
    "tip": "Respons bela negara saat darurat bencana: utamakan keselamatan + koordinasi terpusat + empati sosial + tolak hoaks."
  },
  {
    "id": "twk-bel-029",
    "subPattern": "bela-negara-melalui-profesi-dan-kesiapsiagaan-bencana",
    "difficulty": "sedang",
    "prompt": "Indonesia berada pada kawasan Cincin Api Pasifik yang rawan gempa, tsunami, dan erupsi gunung api, sekaligus menghadapi risiko banjir serta kekeringan hidrometeorologi. Mengapa pendidikan kesiapsiagaan bencana di sekolah dan perkantoran termasuk investasi bela negara yang krusial?",
    "options": [
      "Agar masyarakat selalu menunggu bantuan penuh dari luar negeri sebelum memulai langkah evakuasi awal",
      "Supaya seluruh penduduk berpindah secara serentak meninggalkan wilayah pesisir dan kawasan pertanian subur",
      "Agar instansi pemerintah dapat mengurangi jumlah anggaran perawatan peralatan pemadam kebakaran gedung",
      "Karena kemampuan bertahan hidup warga secara cepat, tepat, dan terlatih pada detik-detik awal bencana menyelamatkan nyawa sekaligus menjaga ketangguhan sosial bangsa",
      "Supaya lembaga meteorologi tidak lagi perlu memelihara jaringan sensor peringatan dini di wilayah perairan"
    ],
    "answer": "D",
    "explanation": "Korban bencana paling banyak jatuh pada menit-menit pertama sebelum bantuan eksternal tiba. Pengetahuan evakuasi dini, pertolongan pertama, dan kesiapsiagaan komunitas membentuk masyarakat tangguh bencana—bagian esensial dari keselamatan bangsa.",
    "tip": "Penyelamatan nyawa terbanyak dalam bencana bergantung pada kesiapsiagaan komunitas di menit awal (kemampuan awal bela negara)."
  },
  {
    "id": "twk-bel-030",
    "subPattern": "bela-negara-melalui-profesi-dan-kesiapsiagaan-bencana",
    "difficulty": "sedang",
    "prompt": "Seorang guru sekolah dasar di wilayah rawan banjir mengintegrasikan kisah kepahlawanan lokal, simulasi menyelamatkan dokumen keluarga dalam tas siaga bencana, serta praktik pemilahan sampah untuk mencegah saluran air tersumbat. Nilai strategis tindakan guru tersebut mencerminkan ...",
    "options": [
      "Penambahan beban pelajaran akademis yang mengurangi waktu belajar materi berhitung siswa",
      "Penyerahan tugas dinas pekerjaan umum kepada pelajar sekolah dasar secara permanen",
      "Pemisahan tegas antara kurikulum karakter kebangsaan dan masalah kebersihan lingkungan sekolah",
      "Kewajiban siswa mengikuti latihan fisik semi-militer sebelum mengikuti ujian akhir sekolah",
      "Pembentukan kesadaran bela negara secara holistik yang menyatukan kecintaan pada tanah air, kepedulian ekologis, dan keterampilan kesiapsiagaan bencana sejak dini"
    ],
    "answer": "E",
    "explanation": "Guru memadukan nilai sejarah kebangsaan (cinta tanah air), mitigasi bencana berbasis lingkungan (membersihkan saluran air), dan kesiapsiagaan praktis (tas siaga)—membuktikan pengabdian profesi pendidik dalam membangun ketahanan masyarakat sejak usia dini.",
    "tip": "Lihat integrasi holistik: karakter kebangsaan + kepedulian ekologi + kesiapsiagaan praktis siswa."
  },
  {
    "id": "twk-bel-031",
    "subPattern": "bela-negara-melalui-profesi-dan-kesiapsiagaan-bencana",
    "difficulty": "sulit",
    "prompt": "Dalam penanggulangan darurat bencana banjir bandang di daerah terpencil, sering terjadi situasi di mana bantuan pakaian bekas menumpuk tidak terpakai sementara obat kulit, air bersih, dan logistik ibu serta bayi sangat kurang akibat kurangnya koordinasi relawan. Berdasarkan prinsip tata kelola kebencanaan yang akuntabel, solusi paling tepat bagi koordinator posko adalah ...",
    "options": [
      "Melakukan penilaian kebutuhan cepat (rapid needs assessment), mempublikasikan daftar kebutuhan prioritas secara berkala, dan menyalurkan bantuan terkoordinasi lewat satu pintu data posko",
      "Meminta seluruh donatur menghentikan pengiriman bantuan apa pun hingga status tanggap darurat berakhir",
      "Menjual tumpukan pakaian layak pakai tersebut tanpa pencatatan untuk membiayai makan siang petugas posko",
      "Memprioritaskan penyaluran bantuan kepada warga di sepanjang jalan utama saja supaya distribusi tampak cepat selesai",
      "Membiarkan setiap kelompok relawan menyalurkan bantuan secara acak ke dusun masing-masing tanpa pendataan penerima"
    ],
    "answer": "A",
    "explanation": "Manajemen darurat bencana yang profesional (berdasarkan prinsip kemanusiaan dan akuntabilitas) menuntut rapid needs assessment berbasis kelompok rentan (bayi, ibu, lansia, disabilitas), transparansi informasi kebutuhan riil kepada publik, dan distribusi satu pintu terdata agar tepat sasaran.",
    "tip": "Efektivitas bela negara saat krisis ditentukan oleh asesmen kebutuhan cepat (needs assessment) dan koordinasi data satu pintu."
  },
  {
    "id": "twk-bel-032",
    "subPattern": "bela-negara-melalui-profesi-dan-kesiapsiagaan-bencana",
    "difficulty": "sulit",
    "prompt": "Seorang insinyur sipil pemerintah menemukan adanya pengurangan spesifikasi besi tulangan pada proyek pembangunan jembatan penghubung antarwilayah pedalaman oleh kontraktor, dengan alasan kenaikan harga bahan bangunan. Penolakannya menyetujui berita acara serah terima meski didesak mempercepat pencairan proyek merupakan bentuk bela negara sesuai profesi karena ...",
    "options": [
      "Memperlambat serapan anggaran infrastruktur daerah sehingga tahun depan anggaran dinas dipastikan berkurang",
      "Melindungi keselamatan jiwa rakyat pengguna jembatan serta mencegah runtuhnya urat nadi konektivitas dan pemborosan keuangan negara",
      "Membuktikan bahwa seluruh perusahaan konstruksi swasta daerah tidak mampu mengerjakan proyek pemerintah",
      "Menunjukkan kewenangan insinyur yang dapat memutus kontrak pengadaan secara sepihak tanpa proses klarifikasi teknis",
      "Menjamin pegawai teknis menerima bonus khusus akibat melakukan inspeksi ulang terhadap konstruksi lapangan"
    ],
    "answer": "B",
    "explanation": "Dalam proyek infrastruktur publik, menurunkan standar keselamatan struktur mengancam nyawa warga sekaligus melumpuhkan konektivitas ekonomi wilayah. Menegakkan standar teknis profesi secara berintegritas adalah wujud langsung melindungi segenap bangsa dan negara.",
    "tip": "Bela negara sesuai profesi menghubungkan etika profesi teknis langsung dengan keselamatan publik dan ketahanan negara."
  },
  {
    "id": "twk-bel-033",
    "subPattern": "pertahanan-semesta-dan-kedaulatan-wilayah",
    "difficulty": "mudah",
    "prompt": "Sesuai Pasal 30 ayat (2) UUD 1945, sistem pertahanan dan keamanan rakyat semesta (Sishankamrata) menempatkan Tentara Nasional Indonesia dan Kepolisian Negara Republik Indonesia sebagai ...",
    "options": [
      "Kekuatan pendukung ekonomi sektor maritim",
      "Komponen cadangan sukarela di tingkat kabupaten",
      "Kekuatan utama, sedangkan rakyat sebagai kekuatan pendukung",
      "Lembaga legislatif khusus bidang wilayah perbatasan",
      "Organisasi kemasyarakatan independen di luar struktur negara"
    ],
    "answer": "C",
    "explanation": "Pasal 30 ayat (2) UUD 1945 berbunyi: \"Usaha pertahanan dan keamanan negara dilaksanakan melalui sistem pertahanan dan keamanan rakyat semesta oleh Tentara Nasional Indonesia dan Kepolisian Negara Republik Indonesia, sebagai kekuatan utama, dan rakyat, sebagai kekuatan pendukung.\"",
    "tip": "Ingat rumusan eksplisit Pasal 30 ayat (2) UUD 1945: TNI & Polri sebagai kekuatan utama, rakyat sebagai kekuatan pendukung."
  },
  {
    "id": "twk-bel-034",
    "subPattern": "pertahanan-semesta-dan-kedaulatan-wilayah",
    "difficulty": "mudah",
    "prompt": "Pembagian tugas konstitusional antara TNI dan Polri menurut Pasal 30 ayat (3) dan ayat (4) UUD 1945 yang tepat adalah ...",
    "options": [
      "TNI bertugas menjaga keamanan ketertiban jalan raya perkotaan, sedangkan Polri menjaga batas darat antarnegara",
      "TNI hanya beroperasi dalam penyidikan kejahatan perbankan, sedangkan Polri mengoperasikan seluruh kapal selam pertahanan",
      "TNI dan Polri sama-sama bertindak sebagai penyelenggara pemilu legislatif di tingkat provinsi perbatasan",
      "TNI sebagai alat negara bertugas mempertahankan, melindungi, dan memelihara keutuhan dan kedaulatan negara, sedangkan Polri bertugas menjaga keamanan dan ketertiban masyarakat serta menegakkan hukum",
      "Polri memiliki wewenang tunggal mendeklarasikan perang, sedangkan TNI bertanggung jawab menerbitkan surat izin usaha daerah"
    ],
    "answer": "D",
    "explanation": "Pasal 30 ayat (3) menetapkan TNI sebagai alat negara yang bertugas mempertahankan, melindungi, dan memelihara keutuhan dan kedaulatan negara. Pasal 30 ayat (4) menetapkan Polri sebagai alat negara yang menjaga keamanan dan ketertiban masyarakat, bertugas melindungi, mengayomi, melayani masyarakat, serta menegakkan hukum.",
    "tip": "Bedakan mandat TNI (pertahanan, keutuhan & kedaulatan negara) dan Polri (kamtibmas, mengayomi, penegakan hukum)."
  },
  {
    "id": "twk-bel-035",
    "subPattern": "pertahanan-semesta-dan-kedaulatan-wilayah",
    "difficulty": "sedang",
    "prompt": "Arti penting Deklarasi Djuanda 13 Desember 1957 bagi kedaulatan wilayah maritim Indonesia (yang kelak diakui dalam UNCLOS 1982 sebagai Wawasan Nusantara) adalah ...",
    "options": [
      "Membatasi lebar laut teritorial Indonesia hanya sejauh tiga mil laut mengikuti garis pasang surut tiap pulau secara terpisah",
      "Menghapus seluruh hak lintas damai bagi kapal dagang internasional di perairan Nusantara selamanya",
      "Mengubah batas daratan Pulau Kalimantan dan Papua menjadi wilayah zona ekonomi eksklusif bersama negara tetangga",
      "Menjadikan seluruh pelabuhan niaga Indonesia berada di bawah pengelolaan otoritas pelayaran internasional",
      "Menyatakan segala perairan di sekitar, di antara, dan yang menghubungkan pulau-pulau Indonesia menjadi bagian wajar dari wilayah daratan serta berada di bawah kedaulatan mutlak NKRI"
    ],
    "answer": "E",
    "explanation": "Sebelum Deklarasi Djuanda (1957), laut antarpulau Indonesia merupakan laut bebas (terpisah batas 3 mil tiap pulau). Deklarasi Djuanda menyatakan Indonesia sebagai negara kepulauan (archipelagic state) dengan laut penghubung di dalam wilayah kedaulatan utuh NKRI, dan diakui dunia lewat UNCLOS 1982.",
    "tip": "Deklarasi Djuanda menyatukan daratan dan perairan antarpulau Indonesia sebagai satu kesatuan wilayah utuh."
  },
  {
    "id": "twk-bel-036",
    "subPattern": "pertahanan-semesta-dan-kedaulatan-wilayah",
    "difficulty": "sedang",
    "prompt": "Berdasarkan Konvensi Hukum Laut PBB (UNCLOS 1982) yang telah diratifikasi Indonesia melalui UU No. 17 Tahun 1985, batas laut wilayah di mana Indonesia memiliki hak berdaulat (bukan kedaulatan teritorial penuh, melainkan hak mengeksplorasi, mengeksploitasi, mengonservasi, dan mengelola sumber daya alam hayati maupun nonhayati) sejauh maksimal 200 mil laut dari garis pangkal disebut ...",
    "options": [
      "Zona Ekonomi Eksklusif (ZEE)",
      "Laut Teritorial (12 mil laut)",
      "Perairan Pedalaman Nusantara",
      "Wilayah Udara Kedaulatan Vertikal",
      "Zona Tambahan Perbatasan Darat"
    ],
    "answer": "A",
    "explanation": "UNCLOS 1982 membedakan Laut Teritorial (12 mil laut: kedaulatan penuh negara pantai termasuk ruang udara & dasar laut) dengan Zona Ekonomi Eksklusif (ZEE, maksimal 200 mil laut: hak berdaulat atas sumber daya alam ekonomi, sementara kapal asing tetap menikmati kebebasan navigasi damai).",
    "tip": "Bedakan kedaulatan penuh pada Laut Teritorial (12 mil) dengan hak berdaulat ekonomi pada ZEE (200 mil)."
  },
  {
    "id": "twk-bel-037",
    "subPattern": "pertahanan-semesta-dan-kedaulatan-wilayah",
    "difficulty": "sedang",
    "prompt": "Mengapa pembangunan pos lintas batas negara (PLBN), layanan pendidikan, kesehatan, dan jaringan telekomunikasi di pulau-pulau kecil terluar memiliki nilai strategis tinggi dalam konsep pertahanan semesta?",
    "options": [
      "Karena pembangunan di wilayah perbatasan bertujuan menarik seluruh penduduk pulau-pulau besar untuk pindah serentak ke perbatasan",
      "Karena kehadiran negara serta peningkatan kesejahteraan warga perbatasan mencegah keterisolasian ekonomi, menjaga rasa memiliki terhadap NKRI, dan memperkokoh pengawasan kedaulatan wilayah",
      "Karena pulau terluar semata-mata difungsikan sebagai zona perdagangan bebas tanpa ketentuan hukum kepabeanan",
      "Karena infrastruktur telekomunikasi di perbatasan menggantikan sepenuhnya peran kapal patroli laut dan radar udara",
      "Karena pembangunan fisik membuat batas maritim antarnegara tidak perlu lagi dirundingkan lewat jalur diplomasi"
    ],
    "answer": "B",
    "explanation": "Ketahanan perbatasan tidak cukup dengan kehadiran militer; kesejahteraan, konektivitas, dan kehadiran pelayanan negara di beranda depan NKRI (kawasan 3T dan pulau terluar) memperkuat ikatan kebangsaan warga perbatasan serta mencegah masuknya penyelundupan maupun klaim wilayah luar.",
    "tip": "Pendekatan kesejahteraan dan kehadiran layanan negara di perbatasan (pendekatan kesejahteraan + keamanan) memperkuat sabuk kedaulatan."
  },
  {
    "id": "twk-bel-038",
    "subPattern": "pertahanan-semesta-dan-kedaulatan-wilayah",
    "difficulty": "sedang",
    "prompt": "Dalam pengelolaan Sumber Daya Nasional untuk Pertahanan Negara (UU PSDN), sumber daya alam, sumber daya buatan, serta sarana dan prasarana nasional (seperti jaringan telekomunikasi, rumah sakit, bandara, dan pelabuhan) yang ditata agar dapat meningkatkan kekuatan Komponen Utama dan Komponen Cadangan disebut ...",
    "options": [
      "Komponen Utama Pertahanan",
      "Komponen Cadangan Militer Tetap",
      "Komponen Pendukung Pertahanan Negara",
      "Satuan Tugas Penegak Hukum Sipil",
      "Lembaga Pertahanan Eksekutif Mandiri"
    ],
    "answer": "C",
    "explanation": "UU No. 23 Tahun 2019 membagi unsur pertahanan menjadi: Komponen Utama (TNI), Komponen Cadangan (sumber daya nasional—warga sukarela, SDA, SDB, sarpras—yang disiapkan dikerahkan lewat mobilisasi), dan Komponen Pendukung (sumber daya nasional yang meningkatkan kekuatan Komponen Utama & Cadangan tanpa dimobilisasi bertempur langsung, mencakup warga negara profesi ahli/tertentu, SDA, SDB, sarpras).",
    "tip": "Kenali tiga komponen pertahanan semesta Indonesia: Komponen Utama (TNI), Komponen Cadangan, dan Komponen Pendukung."
  },
  {
    "id": "twk-bel-039",
    "subPattern": "pertahanan-semesta-dan-kedaulatan-wilayah",
    "difficulty": "sulit",
    "prompt": "Ketika kapal penangkap ikan berbendera asing memasuki Zona Ekonomi Eksklusif (ZEE) Indonesia di Laut Natuna Utara tanpa izin dan melakukan penangkapan ikan secara ilegal (illegal fishing), pendekatan berdaulat yang paling tepat sesuai hukum nasional dan UNCLOS 1982 adalah ...",
    "options": [
      "Membiarkan aktivitas tersebut karena di wilayah ZEE semua kapal asing bebas mengambil sumber daya ikan tanpa izin negara pantai",
      "Langsung menembak tenggelam kapal asing tanpa peringatan maupun pemeriksaan awal di setiap situasi",
      "Menutup seluruh perairan selat perdagangan internasional di Indonesia bagi kapal niaga negara mana pun selama setahun",
      "Menegakkan hak berdaulat secara terukur melalui patroli maritim terkoordinasi (Bakamla, KKP, TNI AL), penindakan hukum atas kapal pelanggar sesuai prosedur, serta menjaga jalur diplomasi regional yang bermartabat",
      "Menjual sebagian hak pengelolaan wilayah perairan perbatasan kepada perusahaan swasta asing agar mereka menanggung biaya patroli"
    ],
    "answer": "D",
    "explanation": "Di ZEE, Indonesia tidak memiliki kedaulatan penuh melarang lintas kapal damai, tetapi memiliki hak berdaulat eksklusif atas sumber daya ikan. Penindakan illegal fishing dilakukan terukur secara hukum melalui patroli aparat maritim Indonesia (penangkapan/proses peradilan) sambil mengedepankan diplomasi tegas sesuai hukum internasional UNCLOS 1982.",
    "tip": "Penegakan kedaulatan maritim di ZEE menggabungkan penindakan hukum yang terukur oleh aparat nasional dan kepatuhan UNCLOS/diplomasi."
  },
  {
    "id": "twk-bel-040",
    "subPattern": "pertahanan-semesta-dan-kedaulatan-wilayah",
    "difficulty": "sulit",
    "prompt": "Wawasan Nusantara memandang wilayah Indonesia beserta seluruh potensi sumber dayanya sebagai satu kesatuan politik, ekonomi, sosial budaya, serta pertahanan keamanan. Implikasi langsung asas \"satu kesatuan pertahanan keamanan\" bagi seluruh masyarakat di Nusantara adalah ...",
    "options": [
      "Setiap provinsi dibebaskan membentuk angkatan bersenjata daerah terpisah dengan kebijakan pertahanan masing-masing",
      "Wilayah pulau kecil yang berpenduduk sedikit tidak perlu dilindungi apabila terjadi gangguan keamanan laut",
      "Seluruh anggaran pertahanan negara wajib dialokasikan hanya untuk pengamanan ibu kota negara saja",
      "Pertahanan wilayah perbatasan menjadi tanggung jawab eksklusif masyarakat desa yang tinggal di sekitar patok batas negara",
      "Ancaman terhadap satu bagian wilayah atau pulau di Indonesia pada hakikatnya merupakan ancaman terhadap seluruh bangsa dan negara Indonesia yang wajib dihadapi secara terpadu"
    ],
    "answer": "E",
    "explanation": "Doktrin kesatuan pertahanan keamanan dalam Wawasan Nusantara menegaskan bahwa keutuhan NKRI tidak dapat dipilah-pilah per pulau: ancaman terhadap satu pulau atau satu daerah merupakan ancaman terhadap keseluruhan bangsa dan negara, sehingga penanganannya terintegrasi dalam Sishankamrata.",
    "tip": "Inti kesatuan hankam dalam Wawasan Nusantara: ancaman terhadap satu wilayah adalah ancaman bagi seluruh bangsa dan negara."
  }
];

export const belaNegaraQuestions: readonly Question[] = buildTwkPatternQuestions(
  "bela-negara",
  [...belaNegaraDrafts, ...belaNegaraBatch2Drafts, ...belaNegaraBatch3Drafts],
);
