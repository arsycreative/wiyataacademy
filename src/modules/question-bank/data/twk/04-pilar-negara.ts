import {
  buildTwkPatternQuestions,
  type Question,
  type QuestionDraft,
} from "@/modules/question-bank/domain/question";
import { pilarNegaraBatch2Drafts } from "./batches/04-pilar-negara-batch-2";

const pilarNegaraDrafts: readonly QuestionDraft[] = [
  {
    "id": "twk-pil-001",
    "subPattern": "pancasila-nilai-dan-pengamalan",
    "difficulty": "mudah",
    "prompt": "Seorang pemimpin rapat mendengarkan seluruh masukan peserta yang berbeda pendapat secara sabar, mengajak mencari titik temu untuk kepentingan bersama, lalu memutuskan hasil berdasarkan mufakat tanpa memaksakan kehendak pribadi. Sikap tersebut paling erat mencerminkan pengamalan Pancasila sila ke-...",
    "options": [
      "Kesatu",
      "Kedua",
      "Ketiga",
      "Keempat",
      "Kelima"
    ],
    "answer": "D",
    "explanation": "Mengutamakan musyawarah untuk mufakat, menghargai perbedaan pendapat dalam pengambilan keputusan bersama, dan tidak memaksakan kehendak kepada orang lain merupakan pengamalan Sila Keempat: Kerakyatan yang Dipimpin oleh Hikmat Kebijaksanaan dalam Permusyawaratan/Perwakilan.",
    "tip": "Kata kunci musyawarah, menghargai pendapat rapat, dan tidak memaksakan kehendak merujuk langsung pada Sila Keempat."
  },
  {
    "id": "twk-pil-002",
    "subPattern": "pancasila-nilai-dan-pengamalan",
    "difficulty": "mudah",
    "prompt": "Dalam kajian filsafat Pancasila sebagai ideologi terbuka menurut Alfian, dimensi yang menyatakan bahwa nilai-nilai dasar Pancasila harus mampu dijabarkan ke dalam norma hukum dan peraturan perundang-undangan agar dapat dioperasionalkan adalah dimensi ...",
    "options": [
      "Realitas",
      "Fleksibilitas",
      "Idealisme",
      "Historis",
      "Normatif"
    ],
    "answer": "E",
    "explanation": "Menurut Alfian, ketahanan ideologi terbuka bertumpu pada tiga dimensi: (1) dimensi realitas (berakar pada nilai nyata masyarakat), (2) dimensi idealisme (memberi cita-cita dan harapan masa depan), dan (3) dimensi normatif (nilai dasar terjabarkan dalam sistem norma konstitusional dan peraturan perundang-undangan).",
    "tip": "Bedakan tiga dimensi ideologi terbuka: realitas (kehidupan nyata), idealitas (cita-cita), dan normatif (sistem aturan hukum)."
  },
  {
    "id": "twk-pil-003",
    "subPattern": "pancasila-nilai-dan-pengamalan",
    "difficulty": "sedang",
    "prompt": "Pancasila memiliki tingkatan nilai dasar, nilai instrumental, dan nilai praksis. Manakah pasangan berikut yang menunjukkan hubungan selaras dari nilai dasar menuju nilai instrumental dan nilai praksis pada Sila Kelima?",
    "options": [
      "Nilai keadilan sosial -> Undang-Undang Sistem Jaminan Sosial Nasional dan program bantuan pendidikan tepat sasaran -> pegawai dinas menyalurkan beasiswa secara objektif tanpa pilih kasih",
      "Nilai kerakyatan -> peraturan tata tertib ibadah internal -> warga gotong royong membersihkan saluran air kampung",
      "Nilai persatuan -> penghapusan seluruh bahasa daerah -> siswa memakai produk impor berharga murah",
      "Nilai ketuhanan -> peraturan pajak kendaraan bermotor -> pedagang menaikkan harga kebutuhan pokok menjelang hari raya",
      "Nilai kemanusiaan -> pembatasan hak suara warga desa tertinggal -> kepala dusun mendahulukan keluarganya sendiri dalam antrean layanan"
    ],
    "answer": "A",
    "explanation": "Nilai dasar Sila Kelima (Keadilan Sosial) dijabarkan ke dalam nilai instrumental berupa peraturan/kebijakan (seperti UU Jaminan Sosial Nasional dan aturan beasiswa daerah), lalu diwujudkan nyata dalam nilai praksis berupa penyaluran pelayanan yang adil serta tidak diskriminatif.",
    "tip": "Cek kesesuaian alur nilai: Nilai Dasar (filosofis) -> Nilai Instrumental (aturan/kebijakan) -> Nilai Praksis (tindakan nyata)."
  },
  {
    "id": "twk-pil-004",
    "subPattern": "pancasila-nilai-dan-pengamalan",
    "difficulty": "sedang",
    "prompt": "Sebuah pemerintah kabupaten merancang alokasi dana perbaikan jalan dan layanan klinik kesehatan dengan menempatkan kecamatan kepulauan terluar sebagai prioritas pertama, meskipun jumlah penduduknya jauh lebih sedikit dibandingkan kecamatan pusat kota yang jalannya sudah beraspal baik. Prinsip Pancasila yang paling kuat melandasi kebijakan tersebut adalah ...",
    "options": [
      "Memusatkan seluruh anggaran infrastruktur pada daerah dengan tingkat pendapatan pajak terbesar saja",
      "Keadilan sosial bagi seluruh rakyat Indonesia yang bersifat proporsional dan berkeberpihakan kepada pemerataan warga rentan serta wilayah tertinggal",
      "Ketuhanan Yang Maha Esa dalam bentuk penyeragaman tata cara upacara keagamaan masyarakat kepulauan",
      "Kemanusiaan yang memisahkan warga berdasarkan tingkat kontribusi ekonomi tahunan di kabupaten",
      "Kerakyatan yang hanya mengakomodasi aspirasi kecamatan dengan jumlah pemilih terbanyak saat pemilihan umum"
    ],
    "answer": "B",
    "explanation": "Sila Kelima menghendaki keadilan distributif dan pemerataan pembangunan agar tidak terjadi ketimpangan antara pusat kota dan kawasan 3T/kepulauan. Prioritas bagi wilayah yang masih tertinggal mewujudkan prinsip pemerataan keadilan sosial.",
    "tip": "Keadilan sosial (Sila Ke-5) sering diuji melalui kasus kebijakan publik yang memeratakan akses dan mengikis ketimpangan wilayah."
  },
  {
    "id": "twk-pil-005",
    "subPattern": "pancasila-nilai-dan-pengamalan",
    "difficulty": "sedang",
    "prompt": "Dalam kasus perundungan (bullying) terhadap siswa berkebutuhan khusus di sekolah, guru bimbingan konseling mengajak seluruh kelas berdiskusi mengenai martabat manusia, empati, dan larangan merendahkan sesama manusia atas alasan kondisi fisik apa pun. Nilai inti Pancasila yang ditanamkan melalui tindakan tersebut adalah ...",
    "options": [
      "Mengutamakan kepentingan kelompok mayoritas kelas di atas hak dasar peserta didik lain",
      "Menyeragamkan kemampuan akademik seluruh siswa dalam satu standar nilai tunggal",
      "Mengakui persamaan derajat, hak, dan kewajiban asasi setiap manusia serta menjunjung tinggi nilai kemanusiaan yang adil dan beradab",
      "Menyelesaikan pelanggaran perundungan cukup dengan memindahkan siswa korban ke sekolah lain secara diam-diam",
      "Menunda pendampingan psikologis hingga peristiwa serupa kembali terulang pada semester berikutnya"
    ],
    "answer": "C",
    "explanation": "Sila Kedua (Kemanusiaan yang Adil dan Beradab) menegaskan pengakuan harkat dan martabat manusia sebagai makhluk ciptaan Tuhan yang setara, mengembangkan sikap saling mencintai sesama, serta menentang segala bentuk perendahan martabat maupun perundungan.",
    "tip": "Isu kesetaraan martabat manusia, empati kemanusiaan, dan antipenindasan merupakan domain utama Sila Kedua."
  },
  {
    "id": "twk-pil-006",
    "subPattern": "pancasila-nilai-dan-pengamalan",
    "difficulty": "sedang",
    "prompt": "Mengapa Pancasila disebut memiliki kedudukan sebagai \"sumber dari segala sumber hukum negara\" sebagaimana ditegaskan dalam Pasal 2 Undang-Undang Nomor 12 Tahun 2011 tentang Pembentukan Peraturan Perundang-undangan?",
    "options": [
      "Karena Pancasila merupakan peraturan teknis pengganti seluruh undang-undang sektor ekonomi dan pidana di Indonesia",
      "Karena setiap warga negara diperbolehkan menguji peraturan daerah langsung kepada kepala desa setempat tanpa proses hukum",
      "Karena seluruh putusan pengadilan di Indonesia cukup mencantumkan kalimat Pancasila tanpa perlu merujuk pasal undang-undang",
      "Karena setiap peraturan perundang-undangan dari UUD 1945 hingga peraturan daerah wajib bersumber dan tidak boleh bertentangan dengan nilai-nilai Pancasila",
      "Karena naskah Pancasila dapat diubah sewaktu-waktu oleh peraturan menteri apabila terjadi pergantian kabinet pemerintahan"
    ],
    "answer": "D",
    "explanation": "Sebagai sumber dari segala sumber hukum negara (dan jiwa dalam Pembukaan UUD 1945 sebagai Staatsfundamentalnorm), Pancasila menjadi tolok ukur materiil dan etis: tidak satu pun aturan hukum di Indonesia boleh bertentangan dengan nilai Ketuhanan, Kemanusiaan, Persatuan, Kerakyatan, dan Keadilan Sosial.",
    "tip": "Kedudukan sebagai sumber hukum tertinggi berarti setiap regulasi wajib berjiwa dan selaras dengan kelima sila Pancasila."
  },
  {
    "id": "twk-pil-007",
    "subPattern": "pancasila-nilai-dan-pengamalan",
    "difficulty": "sulit",
    "prompt": "Di sebuah kelurahan, sekelompok warga keberatan terhadap rencana pembangunan rumah ibadah warga agama lain yang sebenarnya telah memenuhi seluruh persyaratan administratif dan dukungan minimal masyarakat sesuai peraturan bersama menteri terkait. Jika lurah hendak menyelesaikan persoalan berdasar kesatuan utuh Sila Pertama, Ketiga, dan Keempat Pancasila, langkah yang paling tepat adalah ...",
    "options": [
      "Membatalkan izin pembangunan secara sepihak meski syarat hukum terpenuhi demi menghindari protes kelompok keberatan",
      "Membiarkan kedua kelompok warga berdebat terbuka di media sosial hingga salah satu pihak mengalah dengan sendirinya",
      "Menunda proses pelayanan administrasi seluruh warga kelompok pengusul di bidang lain sampai sengketa mereda",
      "Meminta pihak pemohon memindahkan rumah ibadah mereka ke luar wilayah kabupaten agar situasi lingkungan tetap tenang",
      "Memfasilitasi dialog musyawarah yang konstruktif bersama tokoh lintas agama dan FKUB untuk meluruskan kesalahpahaman sekaligus tetap menjamin hak konstitusional warga beribadah secara aman"
    ],
    "answer": "E",
    "explanation": "Pendekatan Pancasila menyatukan jaminan kebebasan beribadah (Sila 1 & Pasal 29 UUD 1945), keadilan penegakan hukum yang sah (Sila 2 & 5), upaya menjaga kerukunan dan keutuhan sosial (Sila 3), serta dialog musyawarah dengan melibatkan FKUB (Sila 4)—bukan mengorbankan hak konstitusional minoritas akibat tekanan massa.",
    "tip": "Pada konflik sosial keagamaan, solusi Pancasila memadukan jaminan hak konstitusional beribadah dengan dialog musyawarah inklusif."
  },
  {
    "id": "twk-pil-008",
    "subPattern": "pancasila-nilai-dan-pengamalan",
    "difficulty": "sulit",
    "prompt": "Salah satu ancaman konseptual terhadap Pancasila sebagai ideologi terbuka adalah munculnya kecenderungan ekstrem di dua sisi: sebagian kelompok menafsirkannya secara kaku seperti dogma tertutup tanpa ruang ijtihad kebijakan zaman, sementara sebagian lain mengaburkan nilai dasarnya atas nama kebebasan tanpa batas. Batas tegas keterbukaan ideologi Pancasila adalah ...",
    "options": [
      "Keterbukaan menerima gagasan baru selama tidak mengubah dan tidak bertentangan dengan kelima nilai dasar Pancasila serta keutuhan NKRI",
      "Keterbukaan mutlak yang membolehkan penggantian dasar negara jika disepakati dalam rapat tingkat kecamatan",
      "Penolakan seluruh ilmu manajemen, sistem digital, dan hasil riset yang berasal dari luar batas negara Indonesia",
      "Penerimaan tanpa saringan terhadap ideologi individualisme liberal maupun kolektivisme otoriter ke dalam sistem pemerintahan",
      "Penyerahan hak penafsiran tunggal isi nilai praksis Pancasila kepada lembaga komersial swasta internasional"
    ],
    "answer": "A",
    "explanation": "Sebagai ideologi terbuka, Pancasila fleksibel menerima perkembangan ilmu pengetahuan, tata kelola modern, dan aspirasi baru (pada tataran nilai instrumental & praksis), namun nilai dasarnya bersifat tetap serta anti terhadap paham ekstrem yang meniadakan Tuhan, membelah persatuan, atau menghancurkan NKRI.",
    "tip": "Keterbukaan Pancasila berada pada dimensi instrumental dan praksis; lima nilai dasarnya tetap menjadi batas konstitusional."
  },
  {
    "id": "twk-pil-009",
    "subPattern": "uud-1945-hak-kewajiban-dan-lembaga-negara",
    "difficulty": "mudah",
    "prompt": "Berdasarkan Pasal 24C ayat (1) dan ayat (2) UUD 1945, lembaga negara yang berwenang mengadili pada tingkat pertama dan terakhir yang putusannya bersifat final untuk menguji undang-undang terhadap Undang-Undang Dasar serta memutus perselisihan hasil pemilihan umum adalah ...",
    "options": [
      "Mahkamah Agung",
      "Mahkamah Konstitusi",
      "Komisi Yudisial",
      "Majelis Permusyawaratan Rakyat",
      "Badan Pemeriksa Keuangan"
    ],
    "answer": "B",
    "explanation": "Pasal 24C ayat (1) UUD 1945 menetapkan empat kewenangan Mahkamah Konstitusi (menguji UU terhadap UUD, memutus sengketa kewenangan lembaga negara yang kewenangannya diberikan UUD, memutus pembubaran parpol, memutus perselisihan hasil pemilu) dan satu kewajiban pada ayat (2) memutus pendapat DPR soal dugaan pelanggaran Presiden/Wapres.",
    "tip": "Ingat pembeda utama: MK menguji UU terhadap UUD (judicial review konstitusional), sedangkan MA menguji peraturan di bawah UU terhadap UU."
  },
  {
    "id": "twk-pil-010",
    "subPattern": "uud-1945-hak-kewajiban-dan-lembaga-negara",
    "difficulty": "mudah",
    "prompt": "Dalam menjalankan fungsi pengawasannya terhadap kebijakan pemerintah, Dewan Perwakilan Rakyat (DPR) memiliki tiga hak khusus yang tercantum secara eksplisit dalam Pasal 20A ayat (2) UUD 1945, yaitu ...",
    "options": [
      "Hak imunitas, hak protokoler, dan hak anggaran tunggal",
      "Hak grasi, hak amnesti, dan hak rehabilitasi",
      "Hak interpelasi, hak angket, dan hak menyatakan pendapat",
      "Hak uji materiil undang-undang, hak kasasi, dan hak eksaminasi",
      "Hak inisiatif daerah, hak veto mutlak, dan hak pembubaran kabinet"
    ],
    "answer": "C",
    "explanation": "Pasal 20A ayat (2) UUD 1945 menetapkan hak DPR dalam menjalankan fungsinya: hak interpelasi (meminta keterangan pemerintah soal kebijakan penting strategis), hak angket (penyelidikan dugaan penyimpangan UU), dan hak menyatakan pendapat.",
    "tip": "Hafalkan trias hak DPR pada Pasal 20A ayat (2): interpelasi, angket, dan menyatakan pendapat."
  },
  {
    "id": "twk-pil-011",
    "subPattern": "uud-1945-hak-kewajiban-dan-lembaga-negara",
    "difficulty": "sedang",
    "prompt": "Dalam pelaksanaan hak asasi manusia di ruang publik dan media sosial, Pasal 28J ayat (1) dan ayat (2) UUD 1945 memberikan penegasan konstitusional yang sangat relevan dengan kehidupan demokrasi modern, yaitu ...",
    "options": [
      "Kebebasan berbicara warga negara bersifat mutlak tanpa kewajiban menghormati privasi dan nama baik orang lain",
      "Pemerintah daerah berhak mencabut hak kewarganegaraan siapa pun yang menyampaikan kritik berbasis data terbuka",
      "Hak asasi manusia hanya berlaku bagi warga negara yang telah berusia minimal dua puluh lima tahun ke atas",
      "Setiap orang wajib menghormati hak asasi orang lain serta tunduk kepada pembatasan yang ditetapkan undang-undang demi menjamin pengakuan hak pihak lain dan ketertiban umum",
      "Penegakan hak asasi manusia cukup diatur melalui kesepakatan lisan komunitas digital tanpa membutuhkan peraturan perundang-undangan"
    ],
    "answer": "D",
    "explanation": "Pasal 28J UUD 1945 menegaskan keseimbangan antara hak dan kewajiban asasi: kebebasan seseorang dibatasi oleh penghormatan atas hak/martabat orang lain serta pembatasan yang sah menurut undang-undang untuk ketertiban umum, moral, nilai agama, dan keamanan dalam masyarakat demokratis.",
    "tip": "Pasal 28J UUD 1945 menyeimbangkan kebebasan HAM dengan kewajiban menghormati hak orang lain dan pembatasan oleh UU."
  },
  {
    "id": "twk-pil-012",
    "subPattern": "uud-1945-hak-kewajiban-dan-lembaga-negara",
    "difficulty": "sedang",
    "prompt": "Sesuai Pasal 14 UUD 1945 hasil perubahan pertama, perbedaan kewenangan Presiden ketika memberikan grasi/rehabilitasi dengan ketika memberikan amnesti/abolisi terletak pada lembaga pemberi pertimbangannya, yaitu ...",
    "options": [
      "Grasi dan rehabilitasi memperhatikan pertimbangan MPR, sedangkan amnesti dan abolisi memperhatikan pertimbangan Mahkamah Konstitusi",
      "Seluruh pemberian grasi, rehabilitasi, amnesti, dan abolisi sepenuhnya diputuskan Presiden tanpa meminta pertimbangan lembaga mana pun",
      "Grasi dan abolisi diputuskan oleh Mahkamah Agung, sedangkan amnesti dan rehabilitasi ditetapkan oleh Badan Pemeriksa Keuangan",
      "Amnesti dan abolisi memperhatikan pertimbangan Komisi Yudisial, sedangkan grasi memperhatikan pertimbangan Dewan Perwakilan Daerah",
      "Grasi dan rehabilitasi memperhatikan pertimbangan Mahkamah Agung, sedangkan amnesti dan abolisi memperhatikan pertimbangan Dewan Perwakilan Rakyat"
    ],
    "answer": "E",
    "explanation": "Pasal 14 UUD 1945 membedakan dua ayat: ayat (1) Presiden memberi grasi dan rehabilitasi dengan memperhatikan pertimbangan Mahkamah Agung (berkaitan dengan ranah yudisial); ayat (2) Presiden memberi amnesti dan abolisi dengan memperhatikan pertimbangan DPR (berkaitan dengan dimensi politik hukum negara).",
    "tip": "Ingat pasangan cepat Pasal 14: Grasi-Rehabilitasi -> MA (ayat 1); Amnesti-Abolisi -> DPR (ayat 2)."
  },
  {
    "id": "twk-pil-013",
    "subPattern": "uud-1945-hak-kewajiban-dan-lembaga-negara",
    "difficulty": "sedang",
    "prompt": "Mengapa pada empat kali perubahan (amandemen) UUD 1945 tahun 1999–2002, Majelis Permusyawaratan Rakyat (MPR) bersepakat tidak mengubah Pembukaan UUD 1945?",
    "options": [
      "Karena Pembukaan UUD 1945 memuat dasar negara Pancasila serta cita-cita hukum dan proklamasi kemerdekaan sehingga mengubah Pembukaan berarti membubarkan negara proklamasi 1945",
      "Karena naskah Pembukaan UUD 1945 secara fisik tidak tersimpan lagi di gedung parlemen saat sidang berlangsung",
      "Karena seluruh isi Pembukaan UUD 1945 hanya memuat aturan teknis jumlah anggota parlemen dan gaji presiden",
      "Karena Pasal 37 UUD 1945 justru melarang perubahan pasal-pasal batang tubuh namun menganjurkan penggantian alinea pembukaan",
      "Karena perubahan Pembukaan UUD 1945 secara langsung diserahkan wewenangnya kepada keputusan gubernur tiap provinsi"
    ],
    "answer": "A",
    "explanation": "Pembukaan UUD 1945 berkedudukan sebagai kaidah fundamental negara (Staatsfundamentalnorm) yang berisi dasar negara Pancasila, tujuan bernegara, serta pengakuan proklamasi kemerdekaan. Kesepakatan dasar MPR menegaskan Pembukaan tidak diubah (diperkuat pula dengan Pasal 37 ayat 5 tentang larangan mengubah bentuk NKRI).",
    "tip": "Pembukaan UUD 1945 = Staatsfundamentalnorm yang mengandung Pancasila dan ruh Proklamasi sehingga tidak boleh diubah."
  },
  {
    "id": "twk-pil-014",
    "subPattern": "uud-1945-hak-kewajiban-dan-lembaga-negara",
    "difficulty": "sedang",
    "prompt": "Dalam mekanisme saling mengawasi dan mengimbangi (checks and balances) antarcabang kekuasaan pasca-amandemen UUD 1945, hubungan konstitusional antara Komisi Yudisial (KY) dan lembaga perwakilan/peradilan menurut Pasal 24B adalah ...",
    "options": [
      "KY berwenang membatalkan seluruh putusan hukum pidana yang telah dijatuhkan oleh hakim agung di Mahkamah Agung",
      "KY bersifat mandiri yang berwenang mengusulkan pengangkatan hakim agung serta menjaga dan menegakkan kehormatan, keluhuran martabat, serta perilaku hakim",
      "KY bertugas memeriksa laporan penggunaan anggaran belanja seluruh pengadilan negeri dan melaporkannya kepada Menteri Keuangan",
      "KY memiliki kewenangan langsung mencabut peraturan daerah yang dinilai bertentangan dengan undang-undang otonomi daerah",
      "KY bertanggung jawab memilih secara langsung sembilan hakim konstitusi tanpa melibatkan Presiden maupun DPR"
    ],
    "answer": "B",
    "explanation": "Pasal 24B ayat (1) UUD 1945 menegaskan KY sebagai lembaga mandiri yang berwenang mengusulkan pengangkatan hakim agung kepada DPR (mendapat persetujuan DPR lalu ditetapkan Presiden) serta menjaga dan menegakkan kehormatan, keluhuran martabat, dan perilaku hakim (pengawasan etik yudisial).",
    "tip": "Bedakan peran KY (rekrutmen hakim agung & pengawasan etik/perilaku hakim) dari kewenangan yudisial memutus perkara (MA/MK)."
  },
  {
    "id": "twk-pil-015",
    "subPattern": "uud-1945-hak-kewajiban-dan-lembaga-negara",
    "difficulty": "sulit",
    "prompt": "Menurut Pasal 20 ayat (5) UUD 1945 hasil amandemen, apabila suatu Rancangan Undang-Undang (RUU) yang telah disetujui bersama oleh DPR dan Presiden tidak kunjung disahkan oleh Presiden dalam waktu tiga puluh hari sejak disetujui bersama, akibat hukum yang terjadi adalah ...",
    "options": [
      "RUU tersebut gugur otomatis dan dilarang diajukan kembali pada masa sidang periode jabatan DPR yang sama",
      "MPR wajib segera mengadakan sidang istimewa guna memberhentikan pimpinan DPR dan para menteri terkait",
      "RUU tersebut sah menjadi undang-undang dan wajib diundangkan agar menghindari kebuntuan proses legislasi",
      "Mahkamah Konstitusi mengambil alih fungsi legislatif untuk menulis ulang seluruh pasal RUU bersama DPD",
      "Presiden memiliki hak veto mutlak selama lima tahun sehingga pengesahan ditunda hingga pemilu presiden berikutnya"
    ],
    "answer": "C",
    "explanation": "Pasal 20 ayat (5) UUD 1945 menyatakan bahwa dalam hal RUU yang telah disetujui bersama tidak disahkan Presiden dalam waktu 30 hari semenjak disetujui, RUU tersebut sah menjadi undang-undang dan wajib diundangkan. Ketentuan ini mencegah penundaan sepihak oleh eksekutif atas produk kesepakatan legislasi bersama.",
    "tip": "Pahami mekanisme anti-deadlock Pasal 20 ayat (5) UUD 1945: 30 hari tanpa tanda tangan pascapersetujuan bersama -> sah menjadi UU."
  },
  {
    "id": "twk-pil-016",
    "subPattern": "uud-1945-hak-kewajiban-dan-lembaga-negara",
    "difficulty": "sulit",
    "prompt": "Dalam tata cara pengajuan dan perubahan pasal-pasal UUD 1945 berdasarkan Pasal 37, pernyataan berikut yang sepenuhnya tepat mengenai syarat usul, kuorum sidang, syarat pengesahan, dan batasan materi perubahan adalah ...",
    "options": [
      "Diusulkan oleh sekurang-kurangnya 1/4 anggota DPR, dihadiri 1/2 anggota MPR, disetujui 50%+1 yang hadir, dan dapat mengubah seluruh bentuk negara",
      "Diusulkan oleh Presiden bersama Menteri Dalam Negeri, dihadiri seluruh gubernur, disetujui secara musyawarah tertutup tanpa kuorum",
      "Diusulkan oleh minimal 2/3 anggota DPD, dihadiri seluruh anggota MA, disetujui 2/3 hakim konstitusi",
      "Diusulkan minimal 1/3 anggota MPR, sidang dihadiri minimal 2/3 anggota MPR, putusan disetujui minimal 50% ditambah satu dari seluruh anggota MPR, dan khusus bentuk NKRI tidak dapat dilakukan perubahan",
      "Diusulkan melalui petisi seratus organisasi masyarakat, dihadiri oleh 3/4 anggota DPR, dan disahkan cukup melalui peraturan pemerintah"
    ],
    "answer": "D",
    "explanation": "Pasal 37 UUD 1945 mengatur rinci: usul diajukan minimal 1/3 anggota MPR (ayat 1), sidang dihadiri minimal 2/3 anggota MPR (ayat 3), putusan disetujui minimal 50% + 1 anggota dari seluruh anggota MPR (ayat 4), dan khusus bentuk NKRI tidak dapat dilakukan perubahan (ayat 5).",
    "tip": "Ingat angka kunci Pasal 37 UUD 1945: Usul >= 1/3, Hadir >= 2/3, Setuju >= 50% + 1 seluruh anggota MPR, dan NKRI final."
  },
  {
    "id": "twk-pil-017",
    "subPattern": "nkri-otonomi-daerah-dan-ketatanegaraan",
    "difficulty": "mudah",
    "prompt": "Berdasarkan Pasal 10 Undang-Undang Nomor 23 Tahun 2014 tentang Pemerintahan Daerah, manakah kelompok urusan pemerintahan absolut yang sepenuhnya menjadi kewenangan Pemerintah Pusat?",
    "options": [
      "Pendidikan dasar, kesehatan masyarakat, pekerjaan umum, dan penataan ruang kota",
      "Pertanian rakyat, pariwisata budaya daerah, koperasi mikro, dan perizinan pasar tradisional",
      "Lingkungan hidup setempat, pemberdayaan perempuan desa, dan transportasi lokal kabupaten",
      "Perumahan rakyat, ketenagakerjaan daerah, dan pengelolaan taman makam pahlawan",
      "Politik luar negeri, pertahanan, keamanan, yustisi, moneter dan fiskal nasional, serta agama"
    ],
    "answer": "E",
    "explanation": "Pasal 10 ayat (1) UU No. 23 Tahun 2014 menetapkan 6 urusan pemerintahan absolut yang mutlak menjadi kewenangan Pemerintah Pusat (tidak diserahkan menjadi otonomi daerah): politik luar negeri, pertahanan, keamanan, yustisi, moneter dan fiskal nasional, serta agama.",
    "tip": "Ingat enam urusan absolut Pemerintah Pusat: Polugri, Pertahanan, Keamanan, Yustisi, Moneter-Fiskal Nasional, Agama."
  },
  {
    "id": "twk-pil-018",
    "subPattern": "nkri-otonomi-daerah-dan-ketatanegaraan",
    "difficulty": "mudah",
    "prompt": "Menurut Pasal 7 ayat (1) Undang-Undang Nomor 12 Tahun 2011 (yang telah diperbarui melalui UU No. 13 Tahun 2022) tentang Pembentukan Peraturan Perundang-undangan, urutan hierarki yang tepat dari tingkat tertinggi ke lebih rendah setelah UUD 1945 adalah ...",
    "options": [
      "Ketetapan MPR -> Undang-Undang/Perppu -> Peraturan Pemerintah -> Peraturan Presiden -> Peraturan Daerah Provinsi -> Peraturan Daerah Kabupaten/Kota",
      "Undang-Undang/Perppu -> Ketetapan MPR -> Peraturan Presiden -> Peraturan Pemerintah -> Peraturan Daerah",
      "Peraturan Pemerintah -> Peraturan Presiden -> Ketetapan MPR -> Undang-Undang/Perppu -> Peraturan Daerah Provinsi",
      "Ketetapan MPR -> Peraturan Presiden -> Peraturan Pemerintah -> Undang-Undang -> Peraturan Gubernur",
      "Undang-Undang/Perppu -> Peraturan Pemerintah -> Ketetapan MPR -> Peraturan Daerah Provinsi -> Peraturan Presiden"
    ],
    "answer": "A",
    "explanation": "Pasal 7 ayat (1) UU No. 12 Tahun 2011 menetapkan hierarki: (1) UUD NRI Tahun 1945, (2) Ketetapan MPR, (3) UU/Perppu, (4) Peraturan Pemerintah (PP), (5) Peraturan Presiden (Perpres), (6) Perda Provinsi, dan (7) Perda Kabupaten/Kota.",
    "tip": "Pastikan urutan: UUD 45 -> Tap MPR -> UU/Perppu -> PP -> Perpres -> Perda Prov -> Perda Kab/Kota."
  },
  {
    "id": "twk-pil-019",
    "subPattern": "nkri-otonomi-daerah-dan-ketatanegaraan",
    "difficulty": "sedang",
    "prompt": "Dalam penyelenggaraan pemerintahan daerah di Indonesia, terdapat tiga asas pembagian kerja pusat-daerah: desentralisasi, dekonsentrasi, dan tugas pembantuan. Contoh pelaksanaan asas \"dekonsentrasi\" yang tepat adalah ...",
    "options": [
      "Pemerintah kabupaten menyusun peraturan daerah retribusi pasar lokal sesuai aspirasi DPRD setempat",
      "Pemerintah pusat melimpahkan sebagian urusan pemerintahan yang menjadi kewenangan pemerintah pusat kepada gubernur sebagai wakil pemerintah pusat atau instansi vertikal di wilayahnya",
      "Pemerintah provinsi menyerahkan kepemilikan penuh perusahaan air minum daerah kepada pemerintah kota",
      "Pemerintah desa bersepakat secara mandiri bersama karang taruna membangun balai olahraga menggunakan dana swadaya murni",
      "DPRD kabupaten memilih secara langsung kepala dinas pendapatan tanpa koordinasi dengan pemerintah pusat maupun provinsi"
    ],
    "answer": "B",
    "explanation": "Desentralisasi menyerahkan urusan menjadi urusan rumah tangga daerah otonom; Dekonsentrasi melimpahkan sebagian urusan pemerintah pusat kepada gubernur sebagai wakil pemerintah pusat dan/atau instansi vertikal di daerah; Tugas Pembantuan menugaskan daerah otonom melaksanakan urusan tertentu pusat/provinsi dengan pembiayaan dari pemberi tugas.",
    "tip": "Ingat pembeda cepat: Desentralisasi = penyerahan (jadi hak otonomi); Dekonsentrasi = pelimpahan ke gubernur sbg wakil pusat/instansi vertikal."
  },
  {
    "id": "twk-pil-020",
    "subPattern": "nkri-otonomi-daerah-dan-ketatanegaraan",
    "difficulty": "sedang",
    "prompt": "Sebuah pemerintah daerah tingkat kabupaten bermaksud menerbitkan peraturan daerah (Perda) yang mengenakan tarif cukai khusus antarprovinsi serta mendirikan pengadilan lokal tersendiri guna mempercepat penyelesaian sengketa warga. Ditinjau dari prinsip Negara Kesatuan Republik Indonesia dan UU Pemerintahan Daerah, rencana tersebut ...",
    "options": [
      "Dapat disahkan langsung asalkan disetujui seluruh anggota DPRD kabupaten dalam rapat paripurna terbuka",
      "Sah dilakukan apabila pendapatan cukai tersebut dipakai membiayai pembangunan sekolah dasar setempat",
      "Bertentangan dengan hukum karena kebijakan fiskal nasional serta bidang yustisi termasuk urusan pemerintahan absolut milik pemerintah pusat",
      "Diperbolehkan sementara selama belum ada instansi pengadilan negeri baru di kecamatan bersangkutan",
      "Harus dikonsultasikan cukup kepada asosiasi pedagang daerah tanpa memerlukan pengawasan Kementerian Dalam Negeri"
    ],
    "answer": "C",
    "explanation": "Otonomi daerah dalam NKRI bukanlah federalisme negara bagian yang memiliki sistem peradilan atau kedaulatan moneter-fiskal nasional terpisah. Bidang yustisi (peradilan) serta fiskal/moneter nasional tetap berada di tangan Pemerintah Pusat.",
    "tip": "Uji setiap wacana kebijakan daerah terhadap batas 6 urusan absolut pusat agar NKRI tetap utuh."
  },
  {
    "id": "twk-pil-021",
    "subPattern": "nkri-otonomi-daerah-dan-ketatanegaraan",
    "difficulty": "sedang",
    "prompt": "Pasal 18B ayat (1) UUD 1945 mengakui dan menghormati satuan-satuan pemerintahan daerah yang bersifat khusus atau istimewa yang diatur dengan undang-undang. Tujuan pemberian otonomi khusus atau keistimewaan pada daerah tertentu seperti Aceh, Papua, DIY, dan Jakarta dalam bingkai NKRI adalah ...",
    "options": [
      "Menyiapkan daerah-daerah tersebut memisahkan diri menjadi negara berdaulat di masa mendatang",
      "Menghapus kewajiban penduduk daerah istimewa mematuhi UUD 1945 dan peraturan perundang-undangan nasional",
      "Membebaskan pemerintah daerah khusus dari audit Badan Pemeriksa Keuangan negara secara permanen",
      "Mengakomodasi kekhasan sejarah, budaya, hukum adat, serta kebutuhan percepatan kesejahteraan secara adil guna memperkukuh integrasi NKRI",
      "Menempatkan kedudukan kepala daerah khusus lebih tinggi dibandingkan Presiden Republik Indonesia dalam tata negara"
    ],
    "answer": "D",
    "explanation": "Otonomi asimetris (khusus/istimewa) dalam Pasal 18B ayat (1) UUD 1945 merupakan wujud keluwesan NKRI dalam merawat keunikan sejarah, budaya, kekhususan tata kelola, serta akselerasi pembangunan wilayah agar persatuan nasional semakin kokoh.",
    "tip": "Otonomi khusus/istimewa justru memperkuat integrasi NKRI dengan menghormati kekhasan lokal di bawah konstitusi."
  },
  {
    "id": "twk-pil-022",
    "subPattern": "nkri-otonomi-daerah-dan-ketatanegaraan",
    "difficulty": "sedang",
    "prompt": "Salah satu ciri khas sistem pemerintahan presidensial Indonesia sebagaimana tercermin dalam UUD 1945 pasca-amandemen adalah ...",
    "options": [
      "Presiden dipimpin oleh perdana menteri yang bertanggung jawab langsung kepada suara mayoritas parlemen harian",
      "DPR dapat membubarkan kabinet sewaktu-waktu hanya karena ketidaksepakatan kebijakan program tahunan",
      "Presiden memiliki kewenangan membubarkan DPR apabila rancangan APBN yang diajukan pemerintah ditolak",
      "Menteri-menteri negara dipilih melalui pemungutan suara terbuka di tingkat gubernur seluruh Indonesia",
      "Presiden berkedudukan sebagai kepala negara sekaligus kepala pemerintahan dengan masa jabatan tetap dan menteri bertanggung jawab kepada Presiden"
    ],
    "answer": "E",
    "explanation": "Dalam sistem presidensial UUD 1945, Presiden dan Wapres dipilih langsung oleh rakyat untuk masa jabatan tetap (5 tahun, dapat dipilih kembali satu kali), menjabat kepala negara sekaligus kepala pemerintahan, mengangkat/memberhentikan menteri (Pasal 17), serta tidak dapat membubarkan DPR (Pasal 7C) maupun dijatuhkan parlemen kecuali pelanggaran hukum konstitusional (impeachment Pasal 7A–7B).",
    "tip": "Ciri sistem presidensial Indonesia: masa jabatan tetap (fixed term), kepala negara = kepala pemerintahan, dan Presiden-DPR tidak saling membubarkan."
  },
  {
    "id": "twk-pil-023",
    "subPattern": "nkri-otonomi-daerah-dan-ketatanegaraan",
    "difficulty": "sulit",
    "prompt": "Seorang warga mengajukan permohonan ke pengadilan untuk menguji Peraturan Daerah Provinsi yang mewajibkan pungutan retribusi tumpang tindih dengan ketentuan Undang-Undang tentang Hubungan Keuangan antara Pemerintah Pusat dan Pemerintah Daerah. Lembaga peradilan yang berwenang melakukan uji materiil Peraturan Daerah terhadap Undang-Undang tersebut menurut UUD 1945 adalah ...",
    "options": [
      "Mahkamah Agung",
      "Mahkamah Konstitusi",
      "Komisi Yudisial",
      "Pengadilan Tata Usaha Negara tingkat pertama secara final",
      "Dewan Perwakilan Daerah bersama Kementerian Dalam Negeri"
    ],
    "answer": "A",
    "explanation": "Berdasarkan Pasal 24A ayat (1) UUD 1945, Mahkamah Agung berwenang menguji peraturan perundang-undangan di bawah undang-undang (seperti PP, Perpres, Permen, dan Perda) terhadap undang-undang. Sementara pengujian undang-undang terhadap UUD menjadi kewenangan Mahkamah Konstitusi.",
    "tip": "Perhatikan objek dan batu ujinya: di bawah UU (termasuk Perda) diuji terhadap UU -> Mahkamah Agung (Pasal 24A)."
  },
  {
    "id": "twk-pil-024",
    "subPattern": "nkri-otonomi-daerah-dan-ketatanegaraan",
    "difficulty": "sulit",
    "prompt": "Mengapa Pasal 18 ayat (1) UUD 1945 menyatakan Negara Kesatuan Republik Indonesia \"dibagi atas daerah-daerah provinsi\" dan bukan \"terdiri atas negara-negara bagian\"?",
    "options": [
      "Karena pemerintah provinsi diizinkan membentuk angkatan bersenjata dan mata uang lokal tersendiri apabila disetujui DPRD",
      "Karena kedaulatan tetap utuh satu pada tingkat nasional NKRI (unitary state), sedangkan daerah provinsi memperoleh pembagian kewenangan otonomi dari negara, bukan entitas berdaulat yang bergabung membentuk federasi",
      "Karena setiap gubernur bertindak sebagai kepala negara berdaulat yang mengangkat duta besar masing-masing ke luar negeri",
      "Karena pemerintah kabupaten dan kota memiliki kedudukan terpisah penuh yang tidak perlu tunduk pada norma hukum nasional",
      "Karena pembagian wilayah administratif dilakukan hanya untuk keperluan penghitungan sensus penduduk sepuluh tahun sekali"
    ],
    "answer": "B",
    "explanation": "Diksi \"dibagi atas\" dalam Pasal 18 ayat (1) menegaskan prinsip negara kesatuan (eenheidsstaat/unitary state): sumber kedaulatan bersifat tunggal dan wilayah dibagi menjadi provinsi serta kabupaten/kota dengan otonomi, berbeda dari negara serikat/federasi yang \"terdiri atas\" negara-negara bagian berkedaulatan awal.",
    "tip": "Perhatikan diksi konstitusional 'dibagi atas' (negara kesatuan) versus 'terdiri atas' (negara federasi)."
  },
  {
    "id": "twk-pil-025",
    "subPattern": "bhinneka-tunggal-ika-dan-kerukunan",
    "difficulty": "mudah",
    "prompt": "Semboyan \"Bhinneka Tunggal Ika\" yang tertera pada pita yang dicengkeram Garuda Pancasila diambil dari kakawin Sutasoma karya ...",
    "options": [
      "Mpu Prapanca pada masa Kerajaan Singasari",
      "Mpu Sedah pada masa Kerajaan Kediri",
      "Mpu Tantular pada masa Kerajaan Majapahit",
      "Ranggawarsita pada masa Kasunanan Surakarta",
      "Raja Ali Haji pada masa Kesultanan Riau-Lingga"
    ],
    "answer": "C",
    "explanation": "Ungkapan Bhinneka Tunggal Ika (Tan Hana Dharma Mangrwa) berasal dari Kitab Kakawin Sutasoma gubahan Mpu Tantular pada abad ke-14 di masa kejayaan Kerajaan Majapahit, yang awalnya mengajarkan toleransi hidup rukun antarumat beragama Buddha dan Siwa-Hindu.",
    "tip": "Ingat pasangan historisnya: Kakawin Sutasoma + Mpu Tantular + Kerajaan Majapahit."
  },
  {
    "id": "twk-pil-026",
    "subPattern": "bhinneka-tunggal-ika-dan-kerukunan",
    "difficulty": "mudah",
    "prompt": "Penggalan lanjutan ungkapan asli dalam Kakawin Sutasoma berbunyi \"Bhinneka Tunggal Ika tan hana dharma mangrwa\". Makna dari ungkapan \"tan hana dharma mangrwa\" dalam konteks kebangsaan Indonesia adalah ...",
    "options": [
      "Setiap daerah wajib memilih satu agama dan satu adat tunggal agar tercipta keseragaman hukum",
      "Perbedaan budaya di Nusantara harus dihapuskan sebelum pembangunan ekonomi daerah dimulai",
      "Kebebasan daerah berarti setiap suku dapat menentukan aturan negaranya sendiri secara terpisah",
      "Tidak ada kebenaran atau pengabdian yang mendua, karena seluruh keberagaman tetap bermuara pada satu tujuan kebenaran, persatuan, dan kemanusiaan yang sama",
      "Hanya kelompok dengan jumlah populasi terbesar yang memegang hak menafsirkan kebenaran hidup bermasyarakat"
    ],
    "answer": "D",
    "explanation": "\"Tan hana dharma mangrwa\" secara harfiah berarti tidak ada dharma/kebenaran yang mendua. Meski jalan tradisi, suku, dan agama tampak berbeda, hakikat nilai pengabdian terhadap kemanusiaan dan persatuan tetap tunggal.",
    "tip": "Tan hana dharma mangrwa menegaskan tidak ada dualisme kebenaran: berbeda bentuk/tradisi, tetap satu tujuan kebaikan dan persatuan."
  },
  {
    "id": "twk-pil-027",
    "subPattern": "bhinneka-tunggal-ika-dan-kerukunan",
    "difficulty": "sedang",
    "prompt": "Berdasarkan Pasal 18B ayat (2) UUD 1945, bagaimana sikap konstitusional negara terhadap eksistensi kesatuan-kesatuan masyarakat hukum adat beserta hak-hak tradisionalnya?",
    "options": [
      "Negara menghapus seluruh hukum adat masyarakat pedalaman segera setelah proyek perkebunan modern dibangun",
      "Masyarakat hukum adat diwajibkan meninggalkan bahasa dan wilayah ulayatnya jika ingin menerima layanan KTP elektronik",
      "Pemerintah menyerahkan sepenuhnya nasib masyarakat adat kepada perusahaan pemegang izin kehutanan tanpa mediasi hukum",
      "Hak-hak tradisional masyarakat adat hanya diakui apabila tradisi tersebut berasal dari dua pulau utama di Indonesia",
      "Negara mengakui dan menghormati kesatuan masyarakat hukum adat beserta hak tradisionalnya sepanjang masih hidup dan sesuai dengan perkembangan masyarakat serta prinsip NKRI"
    ],
    "answer": "E",
    "explanation": "Pasal 18B ayat (2) UUD 1945 menetapkan secara eksplisit: Negara mengakui dan menghormati kesatuan-kesatuan masyarakat hukum adat beserta hak-hak tradisionalnya sepanjang masih hidup dan sesuai dengan perkembangan masyarakat dan prinsip NKRI, yang diatur dalam undang-undang.",
    "tip": "Ingat syarat konstitusional pengakuan masyarakat hukum adat di Pasal 18B ayat (2): masih hidup, selaras perkembangan masyarakat, dan sesuai prinsip NKRI."
  },
  {
    "id": "twk-pil-028",
    "subPattern": "bhinneka-tunggal-ika-dan-kerukunan",
    "difficulty": "sedang",
    "prompt": "Seorang pemimpin unit kerja menerapkan prinsip keadilan dalam kebinekaan dengan mencegah munculnya \"tirani mayoritas\" maupun \"dominasi kelompok tertentu\" saat membentuk panitia promosi dan pembagian penugasan dinas strategis. Tindakan konkret yang mencerminkan prinsip tersebut adalah ...",
    "options": [
      "Menetapkan kriteria penilaian kinerja yang objektif, transparan, dan berbasis sistem merit tanpa mempertimbangkan suku, agama, ras, ataupun jenis kelamin pegawai",
      "Membagi kursi jabatan hanya berdasarkan kesepakatan kuota kesukuan tanpa mengevaluasi kompetensi teknis pegawai",
      "Menempatkan seluruh pegawai berlatar belakang minoritas di unit arsip belakang supaya tidak memicu debat saat melayani publik",
      "Menyerahkan penentuan promosi pegawai sepenuhnya kepada suara terbanyak dalam pemilihan informal staf",
      "Memprioritaskan pegawai yang berasal dari daerah kelahiran pimpinan agar komunikasi kerja sehari-hari terasa lebih akrab"
    ],
    "answer": "A",
    "explanation": "Bhinneka Tunggal Ika dalam manajemen SDM birokrasi diwujudkan lewat sistem merit dan kesetaraan kesempatan: promosi dan penugasan didasarkan pada kompetensi, kualifikasi, dan integritas objektif tanpa diskriminasi maupun favoritisme primordial.",
    "tip": "Kesetaraan Bhinneka Tunggal Ika dalam organisasi publik dijamin oleh sistem merit yang objektif dan nondiskriminatif."
  },
  {
    "id": "twk-pil-029",
    "subPattern": "bhinneka-tunggal-ika-dan-kerukunan",
    "difficulty": "sedang",
    "prompt": "Di sebuah kabupaten dengan masyarakat multiagama, pemerintah daerah memfasilitasi penyusunan agenda kerja bakti bersama lintas umat setiap menjelang hari raya masing-masing agama secara bergantian untuk membersihkan lingkungan rumah ibadah tetangga. Nilai utama yang tumbuh dari praktik tersebut adalah ...",
    "options": [
      "Sinkretisme keyakinan yang mewajibkan setiap warga menjalankan tata cara ibadah agama lain di rumah masing-masing",
      "Kerukunan sosial aktif (koeksistensi harmonis) yang memupuk solidaritas kemanusiaan tanpa mencampuradukkan keyakinan ibadah masing-masing",
      "Segregasi sosial yang memperjelas batas pemukiman antarumat beragama agar tidak saling berkunjung",
      "Kompetisi antarwarga mencari pengakuan media massa siapa yang paling dermawan saat hari raya",
      "Penggantian peran petugas kebersihan dinas oleh seluruh jemaat rumah ibadah di setiap akhir pekan"
    ],
    "answer": "B",
    "explanation": "Kerukunan umat beragama di Indonesia (tri kerukunan: intern umat beragama, antarumat beragama, dan antara umat beragama dengan pemerintah) menumbuhkan solidaritas sosial dan gotong royong lintas iman tanpa mencampuri doktrin ibadah (sinkretisme).",
    "tip": "Kerukunan antarumat beragama menumbuhkan solidaritas kemanusiaan dan gotong royong sambil saling menghormati kemurnian iman masing-masing."
  },
  {
    "id": "twk-pil-030",
    "subPattern": "bhinneka-tunggal-ika-dan-kerukunan",
    "difficulty": "sedang",
    "prompt": "Mengapa konsep \"inklusivitas sosial\" dalam memandang penyandang disabilitas dan lansia merupakan bagian penting dari implementasi Bhinneka Tunggal Ika masa kini?",
    "options": [
      "Karena semboyan Bhinneka Tunggal Ika hanya ditujukan untuk membagi anggaran bantuan tunai bagi kota-kota metropolitan",
      "Karena keberagaman fisik hanya perlu diperhatikan oleh rumah sakit swasta apabila ada pasien yang membayar biaya tambahan",
      "Karena keberagaman bangsa Indonesia mencakup pula keragaman kondisi fisik, usia, serta kebutuhan akses warga sehingga negara wajib menjamin kesetaraan partisipasi tanpa eksklusi",
      "Karena warga penyandang disabilitas dibebaskan dari hak menggunakan sarana transportasi umum maupun fasilitas pendidikan nasional",
      "Karena penyusunan rancangan kota ramah disabilitas baru dapat dimulai apabila seluruh bangunan tua sudah diruntuhkan terlebih dahulu"
    ],
    "answer": "C",
    "explanation": "Pemahaman kontemporer kebinekaan tidak berhenti pada suku/agama, melainkan juga keberagaman kondisi fisik dan kerentanan warga. Mewujudkan ruang publik serta layanan inklusif bagi disabilitas menegaskan kesetaraan derajat seluruh warga dalam kesatuan bangsa.",
    "tip": "Kebinekaan modern mencakup inklusi disabilitas dan kelompok rentan dalam seluruh akses hak kewarganegaraan."
  },
  {
    "id": "twk-pil-031",
    "subPattern": "bhinneka-tunggal-ika-dan-kerukunan",
    "difficulty": "sulit",
    "prompt": "Dalam kajian multikulturalisme, terdapat perbedaan prinsip antara konsep \"asimilasi mutlak (melting pot yang menghapus identitas asal)\" dan konsep Bhinneka Tunggal Ika yang dianut Indonesia. Penjelasan yang paling tepat tentang keunggulan prinsip Bhinneka Tunggal Ika adalah ...",
    "options": [
      "Bhinneka Tunggal Ika memaksa setiap suku meleburkan bahasa ibunya hingga punah demi efisiensi komunikasi negara",
      "Asimilasi mutlak selalu lebih demokratis karena menghilangkan seluruh ekspresi kesenian daerah dalam upacara resmi",
      "Bhinneka Tunggal Ika menolak pembentukan identitas nasional Indonesia agar setiap daerah berjalan sendiri-sendiri",
      "Bhinneka Tunggal Ika memungkinkan setiap elemen budaya lokal tetap tumbuh bermartabat sekaligus saling memperkaya dan mengikat diri dalam identitas kebangsaan Indonesia yang utuh",
      "Asimilasi mutlak hanya diterapkan di pulau kecil, sedangkan Bhinneka Tunggal Ika hanya diterapkan di wilayah perkotaan"
    ],
    "answer": "D",
    "explanation": "Asimilasi memaksakan peleburan kelompok minoritas menjadi seragam mengikuti mayoritas, sementara segregasi memisah-misahkan kelompok secara kaku. Bhinneka Tunggal Ika (integrasi pluralistik) menjaga martabat tiap budaya lokal sekaligus menyatukannya dalam payung identitas nasional bersama.",
    "tip": "Bedakan integrasi Bhinneka Tunggal Ika (menghargai perbedaan dalam kesatuan) dengan asimilasi paksa maupun segregasi."
  },
  {
    "id": "twk-pil-032",
    "subPattern": "bhinneka-tunggal-ika-dan-kerukunan",
    "difficulty": "sulit",
    "prompt": "Suatu perusahaan rintisan lokal mengembangkan algoritma perekrutan otomatis berbasis kecerdasan buatan (AI), namun tanpa disadari sistem tersebut memberi skor lebih rendah kepada pelamar yang alamat KTP-nya berasal dari kawasan timur atau mencantumkan nama organisasi keagamaan tertentu karena bias data historis lama. Ditinjau dari nilai Bhinneka Tunggal Ika, perbaikan yang wajib dilakukan adalah ...",
    "options": [
      "Membiarkan algoritma bekerja otomatis sepenuhnya karena keputusan mesin dianggap pasti bebas dari prasangka manusia",
      "Mengganti penilaian manusia sepenuhnya dengan tes psikologi berbayar mahal tanpa mengaudit bias kumpulan data latih",
      "Menolak seluruh pelamar kerja dari luar wilayah kantor agar data tidak terlalu beragam untuk diolah sistem",
      "Menghapus kolom pengalaman organisasi dan membatasi perekrutan hanya bagi kenalan internal perusahaan",
      "Melakukan audit bias algoritmik, meniadakan fitur lokasi/identitas yang memicu diskriminasi tidak relevan, serta menjaga pengawasan manusia berbasis kompetensi objektif"
    ],
    "answer": "E",
    "explanation": "Di era digital, diskriminasi terhadap kebinekaan bisa terjadi secara tersembunyi melalui bias data historis pada sistem AI. Prinsip keadilan dan Bhinneka Tunggal Ika menuntut audit keadilan algoritma dan penggunaan indikator kompetensi objektif yang bebas bias latar belakang SARA maupun asal wilayah.",
    "tip": "Bias algoritmik harus diaudit agar prinsip kesetaraan Bhinneka Tunggal Ika dan sistem merit tetap terjaga di era AI."
  },
  {
    "id": "twk-pil-033",
    "subPattern": "perumusan-pancasila-dan-dasar-negara",
    "difficulty": "mudah",
    "prompt": "Hari Lahir Pancasila yang diperingati setiap tanggal 1 Juni merujuk pada momen bersejarah dalam sidang pertama BPUPKI tahun 1945 ketika Ir. Soekarno menyampaikan pidato gagasan dasar negara dan memperkenalkan nama \"Pancasila\" atas saran seorang ahli bahasa. Lima asas yang diusulkan Ir. Soekarno pada 1 Juni 1945 meliputi Kebangsaan Indonesia, Internasionalisme atau Perikemanusiaan, Mufakat atau Demokrasi, Kesejahteraan Sosial, serta ...",
    "options": [
      "Ketuhanan yang berkebudayaan",
      "Kekuasaan eksekutif tertinggi seumur hidup",
      "Persatuan ekonomi kawasan regional Asia",
      "Otonomi militer bagi tiap daerah kepulauan",
      "Negara integralistik tanpa lembaga perwakilan"
    ],
    "answer": "A",
    "explanation": "Dalam pidato 1 Juni 1945 di hadapan BPUPKI, Ir. Soekarno mengusulkan lima prinsip dasar negara dengan sebutan Pancasila: (1) Kebangsaan Indonesia, (2) Internasionalisme atau Perikemanusiaan, (3) Mufakat atau Demokrasi, (4) Kesejahteraan Sosial, dan (5) Ketuhanan yang berkebudayaan (Ketuhanan Yang Maha Esa).",
    "tip": "Ingat lima prinsip pidato Ir. Soekarno 1 Juni 1945 (diakhiri Ketuhanan yang berkebudayaan)."
  },
  {
    "id": "twk-pil-034",
    "subPattern": "perumusan-pancasila-dan-dasar-negara",
    "difficulty": "mudah",
    "prompt": "Rancangan Pembukaan Hukum Dasar yang dirumuskan oleh Panitia Sembilan pada tanggal 22 Juni 1945 dikenal dalam sejarah ketatanegaraan Indonesia dengan nama ...",
    "options": [
      "Maklumat Wakil Presiden Nomor X",
      "Piagam Jakarta (Jakarta Charter)",
      "Konstitusi Republik Indonesia Serikat",
      "Dekrit Presiden Lima Juli",
      "Naskah Persetujuan Linggarjati"
    ],
    "answer": "B",
    "explanation": "Setelah masa reses sidang pertama BPUPKI, Panitia Sembilan (diketuai Ir. Soekarno, wakil Moh. Hatta, beranggotakan tokoh kelompok kebangsaan dan Islam) menyepakati kompromi luhur rancangan Mukadimah UUD tanggal 22 Juni 1945 yang dinamai Muhammad Yamin sebagai Piagam Jakarta (Jakarta Charter).",
    "tip": "Panitia Sembilan -> 22 Juni 1945 -> Piagam Jakarta (Jakarta Charter)."
  },
  {
    "id": "twk-pil-035",
    "subPattern": "perumusan-pancasila-dan-dasar-negara",
    "difficulty": "sedang",
    "prompt": "Dalam sidang pertama BPUPKI pada tanggal 31 Mei 1945, Prof. Dr. Soepomo mengemukakan tiga teori pengertian negara (individualistik, teori golongan/kelas, dan teori integralistik). Alasan Soepomo menganjurkan teori negara integralistik bagi Indonesia adalah ...",
    "options": [
      "Menjamin setiap individu bebas bersaing tanpa peran negara dalam kesejahteraan rakyat",
      "Menempatkan satu kelas pekerja untuk menguasai penuh kepemilikan ekonomi dan menggulingkan kelompok lain",
      "Menyatukan negara dan seluruh golongan masyarakat secara kekeluargaan dan gotong royong sehingga negara berdiri di atas semua golongan",
      "Membentuk sistem negara serikat terpisah berdasarkan batas wilayah keresidenan masa kolonial",
      "Mewajibkan pembentukan parlemen dua kamar yang mengikuti persis model sistem monarki Eropa Barat"
    ],
    "answer": "C",
    "explanation": "Prof. Soepomo (31 Mei 1945) menolak paham negara individualistik maupun pertentangan kelas, dan mengusulkan paham negara persatuan/integralistik yang sejalan dengan jiwa kekeluargaan Nusantara—di mana negara mengatasi seluruh paham golongan dan melindungi segenap rakyatnya.",
    "tip": "Pahami gagasan Soepomo (31 Mei 1945): negara persatuan/integralistik yang berakar pada semangat kekeluargaan mengatasi golongan."
  },
  {
    "id": "twk-pil-036",
    "subPattern": "perumusan-pancasila-dan-dasar-negara",
    "difficulty": "sedang",
    "prompt": "Pada sidang pertama PPKI tanggal 18 Agustus 1945, tujuh kata dalam sila pertama naskah Piagam Jakarta (\"dengan kewajiban menjalankan syariat Islam bagi pemeluk-pemeluknya\") disepakati diubah menjadi \"Ketuhanan Yang Maha Esa\". Pelajaran keteladanan paling mendalam dari keputusan para pendiri bangsa tersebut bagi kehidupan bernegara masa kini adalah ...",
    "options": [
      "Kesediaan mengalah hanya diwajibkan apabila pihak pengusul datang dari wilayah berpenduduk mayoritas ibu kota",
      "Perubahan teks hukum dasar negara boleh dilakukan sepihak oleh pemerintah tanpa musyawarah tokoh masyarakat",
      "Pemimpin nasional sebaiknya menunda pengesahan konstitusi selama puluhan tahun apabila masih terdapat perbedaan kecil",
      "Kebesaran jiwa dan kenegarawanan tokoh Islam maupun nasionalis yang mendahulukan keutuhan serta persatuan seluruh bangsa Indonesia di atas ego kelompok",
      "Nilai-nilai agama tidak lagi memiliki tempat sama sekali dalam tata kehidupan berbangsa dan bernegara Indonesia"
    ],
    "answer": "D",
    "explanation": "Atas aspirasi wakil-wakil masyarakat Indonesia bagian timur yang disampaikan melalui Mohammad Hatta, tokoh-tokoh Islam seperti Ki Bagus Hadikusumo, KH. Wachid Hasyim, Mr. Kasman Singodimedjo, dan Teuku Muhammad Hasan bermusyawarah sebelum sidang PPKI dan dengan jiwa besar menyepakati rumusan \"Ketuhanan Yang Maha Esa\" demi menyelamatkan keutuhan bangsa Indonesia yang baru merdeka.",
    "tip": "Renungkan nilai kenegarawanan para pendiri bangsa pada 18 Agustus 1945: rela berjiwa besar bermusyawarah demi persatuan NKRI."
  },
  {
    "id": "twk-pil-037",
    "subPattern": "perumusan-pancasila-dan-dasar-negara",
    "difficulty": "sedang",
    "prompt": "Selain mengesahkan UUD 1945 (yang di dalamnya memuat rumusan autentik Pancasila dalam Pembukaan alinea keempat), dua keputusan penting lain yang ditetapkan pada sidang pertama PPKI tanggal 18 Agustus 1945 adalah ...",
    "options": [
      "Membentuk Dewan Konstituante hasil pemilu raya dan memindahkan ibu kota sementara ke Yogyakarta",
      "Menetapkan pembagian wilayah Indonesia menjadi delapan provinsi sekaligus membentuk Badan Keamanan Rakyat",
      "Menetapkan bendera Merah Putih di luar sidang resmi dan menunjuk Mohammad Hatta sebagai ketua BPUPKI",
      "Membubarkan KNIP sepenuhnya dan mengganti sistem pemerintahan menjadi parlementer kabinet koalisi",
      "Memilih Ir. Soekarno sebagai Presiden dan Drs. Mohammad Hatta sebagai Wakil Presiden, serta menetapkan tugas Presiden dibantu Komite Nasional sebelum MPR/DPR terbentuk"
    ],
    "answer": "E",
    "explanation": "Tiga hasil pokok Sidang PPKI ke-1 tanggal 18 Agustus 1945 adalah: (1) mengesahkan UUD 1945, (2) memilih Ir. Soekarno sebagai Presiden dan Drs. Mohammad Hatta sebagai Wapres secara aklamasi atas usul Otto Iskandardinata, dan (3) menetapkan bahwa sementara Presiden dibantu oleh Komite Nasional (KNIP). Adapun pembagian 8 provinsi dan BKR diputuskan pada sidang berikutnya (19 & 22 Agustus 1945).",
    "tip": "Bedakan hasil Sidang PPKI I (18 Agt: UUD 45, Presiden/Wapres, Komite Nasional) dari Sidang PPKI II (19 Agt: 8 provinsi & departemen)."
  },
  {
    "id": "twk-pil-038",
    "subPattern": "perumusan-pancasila-dan-dasar-negara",
    "difficulty": "sedang",
    "prompt": "Di manakah tercantum rumusan Pancasila yang sah, final, dan mengikat secara yuridis-konstitusional bagi Negara Kesatuan Republik Indonesia?",
    "options": [
      "Pembukaan Undang-Undang Dasar Negara Republik Indonesia Tahun 1945 alinea keempat",
      "Rancangan pidato pribadi Muhammad Yamin pada tanggal 29 Mei 1945 tanpa pengesahan sidang",
      "Konsep Trisila yang disampaikan dalam pidato pengantar pembukaan sidang BPUPKI",
      "Naskah konsep awal Piagam Jakarta tanggal 22 Juni 1945 sebelum persidangan PPKI",
      "Lampiran surat keputusan kepala badan persiapan kemerdekaan buatan pemerintah militer Jepang"
    ],
    "answer": "A",
    "explanation": "Rumusan otentik-yuridis Pancasila yang sah dan mengikat secara hukum tata negara tercantum dalam Alinea Keempat Pembukaan UUD Negara Republik Indonesia Tahun 1945 yang ditetapkan PPKI pada tanggal 18 Agustus 1945 (diperkuat pula oleh Instruksi Presiden No. 12 Tahun 1968 tentang tata urutan serta pengucapan Pancasila).",
    "tip": "Rumusan historis ada sejak 1 Juni & 22 Juni, tetapi rumusan yuridis-konstitusional yang sah ada pada Pembukaan UUD 1945 alinea ke-4 (18 Agustus 1945)."
  },
  {
    "id": "twk-pil-039",
    "subPattern": "perumusan-pancasila-dan-dasar-negara",
    "difficulty": "sulit",
    "prompt": "Hubungan historis-substantif antara 1 Juni 1945, 22 Juni 1945, dan 18 Agustus 1945 sebagai \"satu kesatuan proses lahirnya Pancasila\" yang tepat dipahami generasi masa kini adalah ...",
    "options": [
      "Ketiga tanggal tersebut saling meniadakan sehingga hanya peristiwa 18 Agustus 1945 yang layak disebut dalam sejarah perumusan bangsa",
      "1 Juni 1945 merupakan penggagasan awal dan penamaan Pancasila, 22 Juni 1945 merupakan kompromi perumusan awal Piagam Jakarta oleh Panitia Sembilan, dan 18 Agustus 1945 merupakan pengesahan rumusan final konstitusional bersama Pembukaan UUD 1945",
      "1 Juni 1945 sudah mengesahkan naskah batang tubuh UUD 1945 lengkap, sementara 18 Agustus hanya merayakan ulang tahun BPUPKI",
      "22 Juni 1945 disusun oleh anggota PPKI setelah proklamasi kemerdekaan dibacakan di Jakarta",
      "18 Agustus 1945 membatalkan seluruh gagasan demokrasi serta kemanusiaan yang pernah dibahas pada bulan Mei hingga Juli 1945"
    ],
    "answer": "B",
    "explanation": "Ketiga momentum merupakan rangkaian berkesinambungan: 1 Juni (kelahiran istilah & gagasan lima dasar oleh Soekarno di BPUPKI), 22 Juni (Piagam Jakarta hasil kompromi Panitia Sembilan), hingga 18 Agustus 1945 (penyempurnaan sila pertama demi persatuan & pengesahan resmi sebagai dasar negara konstitusional dalam Pembukaan UUD 1945).",
    "tip": "Lihat kesinambungan tiga tanggal keramat: Penggagasan & Nama (1 Juni) -> Perumusan Kompromi (22 Juni) -> Pengesahan Konstitusional Final (18 Agustus)."
  },
  {
    "id": "twk-pil-040",
    "subPattern": "perumusan-pancasila-dan-dasar-negara",
    "difficulty": "sulit",
    "prompt": "Ketika Mohammad Yamin berpidato pada 29 Mei 1945, Soepomo pada 31 Mei 1945, dan Soekarno pada 1 Juni 1945 di gedung Chuo Sangi In dalam suasana perbedaan latar belakang agama, adat, dan pemikiran politik (nasionalis sekuler, Islam, hingga cendekiawan hukum adat), metode penyelesaian perumusan dasar negara yang menjadi teladan utama bagi pembentukan kebijakan publik masa sekarang adalah ...",
    "options": [
      "Membiarkan kelompok terkuat memaksakan kehendaknya melalui pemungutan suara tertutup tanpa memberi ruang bicara bagi pihak lain",
      "Menutup rapat sidang secara sepihak sebelum seluruh tokoh masyarakat daerah sempat mengemukakan argumen filosofisnya",
      "Mengedepankan musyawarah yang mendalam, menghargai pandangan rasional tiap golongan, mencari titik temu (common denominator), dan mengesampingkan kepentingan sempit demi bangsa",
      "Mengadopsi secara utuh konstitusi negara asing tanpa menyesuaikan nilai sosial masyarakat Indonesia",
      "Membagi wilayah negara berdasarkan perbedaan keyakinan tokoh perumus dasar negara agar tidak perlu berdebat"
    ],
    "answer": "C",
    "explanation": "Proses perumusan dasar negara dalam BPUPKI, Panitia Sembilan, dan PPKI menjadi contoh puncak demokrasi permusyawaratan Indonesia: adu gagasan terbuka secara bermartabat, saling mendengar lintas latar belakang, dan mencari titik temu kolektif untuk negara semua golongan.",
    "tip": "Teladani etika musyawarah para pendiri bangsa: adu gagasan terbuka secara terhormat dan cari titik temu demi kepentingan seluruh rakyat."
  }
];

export const pilarNegaraQuestions: readonly Question[] = buildTwkPatternQuestions(
  "pilar-negara",
  [...pilarNegaraDrafts, ...pilarNegaraBatch2Drafts],
);
