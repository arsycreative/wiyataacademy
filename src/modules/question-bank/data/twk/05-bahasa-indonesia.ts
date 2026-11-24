import {
  buildTwkPatternQuestions,
  type Question,
  type QuestionDraft,
} from "@/modules/question-bank/domain/question";
import { bahasaIndonesiaBatch2Drafts } from "./batches/05-bahasa-indonesia-batch-2";
import { bahasaIndonesiaBatch3Drafts } from "./batches/05-bahasa-indonesia-batch-3";

const bahasaIndonesiaDrafts: readonly QuestionDraft[] = [
  {
    "id": "twk-bhs-001",
    "subPattern": "ejaan-dan-tanda-baca",
    "difficulty": "mudah",
    "prompt": "Berdasarkan kaidah Ejaan Bahasa Indonesia yang Disempurnakan (EYD) Edisi V mengenai penulisan kata terikat \"maha-\" yang merujuk kepada sifat Tuhan dan penggunaan huruf kapital, penulisan kalimat berikut yang paling tepat adalah ...",
    "options": [
      "Kita wajib bersyukur kepada Tuhan Yang Maha Pengasih atas limpahan rahmat-Nya",
      "Kita wajib bersyukur kepada Tuhan Yang Mahapengasih atas limpahan rahmat-Nya",
      "Kita wajib bersyukur kepada Tuhan yang maha pengasih atas limpahan rahmatnya",
      "Kita wajib bersyukur kepada Tuhan yang Mahapengasih atas limpahan rahmatnya",
      "Kita wajib bersyukur kepada Tuhan yang Maha-Pengasih atas limpahan rahmatNya"
    ],
    "answer": "A",
    "explanation": "EYD Edisi V menyeragamkan penulisan bentuk kata \"maha\" yang diikuti kata dasar ataupun kata berimbuhan yang mengacu pada nama atau sifat Tuhan: keduanya ditulis terpisah dan diawali huruf kapital di setiap unsurnya, seperti \"Yang Maha Kuasa\", \"Yang Maha Pengasih\", serta pronomina Tuhan diawali kapital dengan tanda hubung (\"rahmat-Nya\").",
    "tip": "Ingat pembaruan EYD V: unsur 'Maha' yang merujuk pada Tuhan ditulis terpisah dengan huruf awal kapital pada tiap unsur."
  },
  {
    "id": "twk-bhs-002",
    "subPattern": "ejaan-dan-tanda-baca",
    "difficulty": "mudah",
    "prompt": "Penulisan tanda koma dan kata depan \"di\" yang sesuai dengan kaidah EYD Edisi V terdapat pada kalimat ...",
    "options": [
      "Berkas pengajuan cuti tahunan sudah di simpan di laci meja pimpinan sejak kemarin",
      "Meskipun hujan deras mengguyur wilayah pesisir, petugas tetap menyalurkan logistik tepat waktu",
      "Rapat koordinasi tersebut tidak dilaksanakan di aula utama melainkan, di ruang rapat timur",
      "Para peserta pelatihan berasal dari berbagai kabupaten, oleh karena itu jadwal di mulai pukul delapan",
      "Semua dokumen penting yang dibawa ke balai desa harus di periksa kembali sebelum ditandatangani"
    ],
    "answer": "B",
    "explanation": "Tanda koma wajib dipakai untuk memisahkan anak kalimat yang mendahului induk kalimatnya (\"Meskipun..., petugas tetap...\"), dan kata depan \"di\" sebagai penunjuk tempat ditulis terpisah sedangkan awalan pasif \"di-\" ditulis serangkai (disimpan, dimulai, diperiksa, ditandatangani). Adapun koma seharusnya sebelum \"melainkan\", bukan sesudahnya.",
    "tip": "Periksa dua hal sekaligus: letak koma di akhir anak kalimat pendahulu dan pembedaan kata depan 'di' (tempat) vs imbuhan 'di-' (kata kerja pasif)."
  },
  {
    "id": "twk-bhs-003",
    "subPattern": "ejaan-dan-tanda-baca",
    "difficulty": "sedang",
    "prompt": "Penulisan partikel \"pun\" yang tepat sesuai kaidah EYD V beserta maknanya dalam kalimat ditunjukkan oleh ...",
    "options": [
      "Apapun keputusan pimpinan rapat hari ini akan tetap dilaksanakan dengan penuh tanggung jawab",
      "Sekalipun ia belum pernah datang terlambat ke kantor sepanjang masa pengabdiannya tahun ini",
      "Kapan pun perubahan regulasi layanan diterbitkan, aparatur harus siap menyesuaikan prosedur kerja",
      "Walaupun hujan tidak berhenti, para petugas posko tidak ada yang meninggalkan lokasi satu kalipun",
      "Bagaimanapun beratnya medan perjalanan dinas, tim penilai tetap berangkat walau pun hari sudah petang"
    ],
    "answer": "C",
    "explanation": "Partikel \"pun\" ditulis terpisah dari kata yang mendahuluinya (\"kapan pun\", \"apa pun\", \"satu kali pun\"), kecuali pada kata penghubung yang sudah padu seperti \"meskipun\", \"walaupun\", \"bagaimanapun\", dan \"sekalipun\" (yang bermakna 'walaupun'). Pada kalimat \"sekali pun ia belum pernah datang terlambat\", maknanya 'satu kali' sehingga seharusnya ditulis terpisah.",
    "tip": "Bedakan partikel 'pun' terpisah (kapan pun, apa pun, satu kali pun) dengan 14 konjungsi padu yang ditulis serangkai (walaupun, meskipun, bagaimanapun)."
  },
  {
    "id": "twk-bhs-004",
    "subPattern": "ejaan-dan-tanda-baca",
    "difficulty": "sedang",
    "prompt": "Penggunaan huruf kapital pada nama geografi, nama jenis, dan gelar jabatan berikut yang sepenuhnya benar menurut EYD Edisi V adalah ...",
    "options": [
      "Kepala Badan kepegawaian sedang berkunjung ke sungai Musi sebelum menghadiri rapat di provinsi Sumatra Selatan",
      "Peserta pelatihan membawa oleh-oleh Jeruk Bali dan Kacang Bogor seusai melintasi Selat Sunda menuju pulau Jawa",
      "Gubernur Jawa Timur meninjau perbaikan tanggul Sungai Brantas sambil menikmati hidangan soto Lamongan bersama warga",
      "Presiden Republik Indonesia meresmikan bendungan baru di Provinsi Nusa Tenggara Timur bersama gubernur setempat",
      "Profesor Ahmad menyarankan agar setiap bengkel daerah memiliki Kunci Inggris standar serta lampu Phillips hemat energi"
    ],
    "answer": "D",
    "explanation": "Huruf kapital dipakai pada nama jabatan yang diikuti nama orang/instansi atau pengganti nama, nama geografi yang diikuti nama diri (Provinsi Nusa Tenggara Timur), namun jabatan yang tidak diikuti nama diri/instansi tetap huruf kecil (\"gubernur setempat\"). Nama jenis seperti jeruk bali, kacang bogor, soto lamongan, dan kunci inggris ditulis kecil seluruhnya.",
    "tip": "Cek tiga aturan EYD V: jabatan tanpa nama diri huruf kecil, nama jenis dari geografi tidak dikapitalkan, nama wilayah resmi beserta unsurnya dikapitalkan."
  },
  {
    "id": "twk-bhs-005",
    "subPattern": "ejaan-dan-tanda-baca",
    "difficulty": "sedang",
    "prompt": "Penulisan tanda hubung (-) yang tepat dalam merangkaikan unsur bahasa Indonesia dengan angka, huruf kapital, maupun singkatan sesuai EYD V terdapat pada kalimat ...",
    "options": [
      "Lomba inovasi pelayanan publik ke 5 akan dibuka serentak untuk seluruh instansi se Indonesia",
      "Dokumen permohonan bantuan bagi warga ber KTP daerah tertinggal telah diverifikasi sejak tahun 2020an",
      "Setiap pekerja berhak memperoleh perlindungan hukum apabila di PHK secara sepihak sebelum masa kontraknya habis",
      "Kegiatan pertukaran pelajar antarkampus se-ASEAN memasuki angkatan ke-XII pada pertengahan bulan Oktober",
      "Para penyuluh pertanian angkatan tahun 2020-an berkomitmen membina petani muda se-Indonesia melalui pelatihan abad ke-21"
    ],
    "answer": "E",
    "explanation": "Tanda hubung dipakai untuk merangkai \"se-\" dengan kata berikutnya yang dimulai huruf kapital (se-Indonesia), \"ke-\" dengan angka Arab (ke-21; bilangan Romawi tidak memakai ke- seperti ke-XII, cukup XII atau ke-12), imbuhan dengan singkatan kapital (ber-KTP, di-PHK), serta angka dengan akhiran \"-an\" (tahun 2020-an).",
    "tip": "Ingat penggunaan tanda hubung wajib pada se- + Kapital, ke- + angka Arab, imbuhan + singkatan kapital, dan angka + -an."
  },
  {
    "id": "twk-bhs-006",
    "subPattern": "ejaan-dan-tanda-baca",
    "difficulty": "sedang",
    "prompt": "Penulisan gelar akademik, singkatan, serta simbol nominal rupiah dalam laporan pertanggungjawaban keuangan yang paling sesuai dengan EYD Edisi V adalah ...",
    "options": [
      "Dr Ratna Sari S.H, M.Kn mengesahkan pengajuan dana operasional sebesar Rp. 12.500.000,- untuk kegiatan tersebut",
      "Dr. Ratna Sari, S.H., M.Kn. mengesahkan pengajuan dana operasional sebesar Rp12.500.000,00 untuk kegiatan tersebut",
      "Dr. Ratna Sari, S.H., M.Kn. mengesahkan pengajuan dana operasional sebesar Rp 12.500.000 untuk kegiatan tersebut",
      "DR. Ratna Sari, SH., MKn. mengesahkan pengajuan dana operasional sebesar Rp.12.500.000,00 untuk kegiatan tersebut",
      "Dr. Ratna Sari S.H., M.Kn mengesahkan pengajuan dana operasional sebesar Rp12.500.000,- untuk kegiatan tersebut"
    ],
    "answer": "B",
    "explanation": "Penulisan gelar doktor yang tepat adalah \"Dr.\" (bukan \"DR.\"), gelar di belakang nama dipisahkan koma dengan tanda titik di tiap unsur singkatan (\"S.H., M.Kn.\"), dan simbol mata uang rupiah ditulis serangkai dengan angka tanpa titik dan tanpa spasi, diakhiri \",00\" untuk ketelitian dokumen keuangan (Rp12.500.000,00).",
    "tip": "Rumus tepat: Rp[nominal],00 tanpa spasi dan tanpa titik setelah 'Rp'; pisahkan gelar belakang nama dengan koma serta titik di setiap unsurnya."
  },
  {
    "id": "twk-bhs-007",
    "subPattern": "ejaan-dan-tanda-baca",
    "difficulty": "sulit",
    "prompt": "Perhatikan kalimat berikut: \"Hasil evaluasi menunjukkan tingkat kepatuhan pelaporan meningkat signifikan akan tetapi kualitas substansi kajiannya masih perlu diperbaiki oleh karena itu tim pengawas harus turun langsung ke lapangan.\" Penggunaan tanda baca yang paling tepat saat kalimat tersebut diperbaiki sesuai EYD V menjadi ...",
    "options": [
      "Hasil evaluasi menunjukkan tingkat kepatuhan pelaporan meningkat signifikan, akan tetapi kualitas substansi kajiannya masih perlu diperbaiki. Oleh karena itu tim pengawas harus turun langsung ke lapangan.",
      "Hasil evaluasi menunjukkan tingkat kepatuhan pelaporan meningkat signifikan, akan tetapi kualitas substansi kajiannya masih perlu diperbaiki, oleh karena itu, tim pengawas harus turun langsung ke lapangan.",
      "Hasil evaluasi menunjukkan tingkat kepatuhan pelaporan meningkat signifikan. Akan tetapi, kualitas substansi kajiannya masih perlu diperbaiki. Oleh karena itu, tim pengawas harus turun langsung ke lapangan.",
      "Hasil evaluasi menunjukkan tingkat kepatuhan pelaporan meningkat signifikan; akan tetapi kualitas substansi kajiannya masih perlu diperbaiki oleh karena itu tim pengawas harus turun langsung ke lapangan.",
      "Hasil evaluasi menunjukkan: tingkat kepatuhan pelaporan meningkat signifikan akan tetapi, kualitas substansi kajiannya masih perlu diperbaiki. Oleh karena itu tim pengawas harus turun langsung ke lapangan."
    ],
    "answer": "C",
    "explanation": "Ungkapan \"Akan tetapi\" dan \"Oleh karena itu\" merupakan kata/ungkapan penghubung antarkalimat. Oleh sebab itu, keduanya diletakkan di awal kalimat baru (didahului tanda titik pada kalimat sebelumnya) dan selalu diikuti tanda koma sesudahnya.",
    "tip": "Bedakan konjungsi antarkalimat (Akan tetapi, / Namun, / Oleh karena itu, yang diawali kalimat baru + diikuti koma) dari konjungsi intrakalimat (tetapi / sehingga / sedangkan)."
  },
  {
    "id": "twk-bhs-008",
    "subPattern": "ejaan-dan-tanda-baca",
    "difficulty": "sulit",
    "prompt": "Sesuai kaidah penulisan judul karya tulis dan unsur serapan asing dalam EYD Edisi V, ketentuan penulisan yang paling tepat untuk rujukan artikel ilmiah dalam kalimat adalah ...",
    "options": [
      "Judul artikel berita diapit tanda petik tunggal, sedangkan seluruh kata depan di awal dan tengah judul ditulis dengan huruf kecil.",
      "Nama buku, surat kabar, atau majalah diapit tanda petik ganda, sedangkan judul artikel dan istilah asing dicetak tegak tanpa tanda baca khusus.",
      "Istilah bahasa asing yang telah diserap ke bahasa Indonesia wajib tetap dicetak miring, sedangkan istilah belum terserap cukup diberi huruf tebal.",
      "Judul artikel dalam surat kabar diapit tanda petik ganda dengan kata tugas di tengah judul tetap huruf kecil, sedangkan nama surat kabar dan istilah asing belum terserap dicetak miring.",
      "Seluruh huruf awal setiap kata dalam judul artikel termasuk kata tugas 'di', 'dan', 'untuk' wajib ditulis kapital dalam semua posisi."
    ],
    "answer": "D",
    "explanation": "Sesuai EYD Edisi V: judul artikel/makalah/puisi yang dikutip dalam teks diapit tanda petik ganda dengan kata tugas di tengah judul tetap berhuruf kecil; nama buku, surat kabar, majalah, serta kata/istilah asing yang belum diserap baku ke dalam bahasa Indonesia ditulis dengan huruf miring.",
    "tip": "Judul artikel = tanda petik; nama buku/koran & istilah asing belum terserap = huruf miring; kata tugas di tengah judul = huruf kecil."
  },
  {
    "id": "twk-bhs-009",
    "subPattern": "kalimat-efektif-dan-struktur-kalimat",
    "difficulty": "mudah",
    "prompt": "Manakah di antara kalimat-kalimat berikut yang memenuhi syarat kalimat efektif karena memiliki struktur subjek dan predikat yang jelas serta tidak rancu oleh kata depan?",
    "options": [
      "Bagi seluruh peserta seleksi CPNS dimohon segera memasuki ruangan ujian lima belas menit sebelum dimulai",
      "Di dalam rapat koordinasi kemarin membahas rencana strategis percepatan layanan berbasis elektronik daerah",
      "Untuk semua tamu undangan yang hadir agar menempati kursi barisan depan sesuai nomor registrasi",
      "Berdasarkan data kepegawaian tahun ini menunjukkan peningkatan signifikan jumlah pelamar lulusan perguruan tinggi",
      "Seluruh peserta seleksi CPNS diharapkan segera memasuki ruangan ujian lima belas menit sebelum tes dimulai"
    ],
    "answer": "E",
    "explanation": "Meletakkan preposisi seperti \"bagi\", \"untuk\", \"di dalam\", atau \"berdasarkan\" di awal kalimat sebelum unsur subjek tanpa diikuti koma pemisah keterangan sering membuat kalimat kehilangan subjek gramatikal. Menghilangkan kata \"Bagi\" menjadikan \"Seluruh peserta seleksi CPNS\" jelas berfungsi sebagai subjek dan \"diharapkan\" sebagai predikat.",
    "tip": "Uji efektivitas kalimat dengan mencari Subjek dan Predikatnya: jangan mengawali Subjek langsung dengan preposisi 'bagi', 'untuk', atau 'di dalam'."
  },
  {
    "id": "twk-bhs-010",
    "subPattern": "kalimat-efektif-dan-struktur-kalimat",
    "difficulty": "mudah",
    "prompt": "Kalimat di bawah ini yang paling hemat dan bebas dari pemborosan kata (pleonasme) adalah ...",
    "options": [
      "Peserta seminar menyimak paparan narasumber dengan saksama hingga sesi tanya jawab berakhir",
      "Semua para tamu-tamu undangan diminta menandatangani daftar hadir sebelum memasuki ruang rapat",
      "Keberhasilan program desa digital tersebut sangat membanggakan sekali bagi masyarakat seluruh kabupaten",
      "Agar supaya antrean pelayanan tidak menumpuk, petugas membuka tiga loket verifikasi berkas tambahan",
      "Demi untuk memperlancar arus mudik lebaran, dinas perhubungan meninjau kesiapan jalur arteri sejak pagi"
    ],
    "answer": "A",
    "explanation": "Kalimat efektif menghindari pengulangan makna yang mubazir (pleonasme), seperti \"semua para tamu-tamu\" (jamak ganda), \"sangat... sekali\", \"agar supaya\", dan \"demi untuk\". Kalimat tentang peserta seminar lugas, tepat diksi, dan hemat kata.",
    "tip": "Singkirkan ungkapan ganda bermakna sama seperti 'para... -nya/-ulangi', 'sangat... sekali', 'agar supaya', atau 'demi untuk'."
  },
  {
    "id": "twk-bhs-011",
    "subPattern": "kalimat-efektif-dan-struktur-kalimat",
    "difficulty": "sedang",
    "prompt": "Perhatikan kalimat tidak paralel berikut: \"Tahap penyusunan anggaran daerah meliputi pengumpulan usulan warga, membahasnya dalam musrenbang, dan penyelarasan target kinerja dinas.\" Perbaikan yang menjadikan kalimat tersebut memiliki kesejajaran bentuk (keparalelan) yang tepat adalah ...",
    "options": [
      "Tahap penyusunan anggaran daerah meliputi usulan warga dikumpulkan, pembahasan musrenbang, dan target kinerja dinas diselaraskan",
      "Tahap penyusunan anggaran daerah meliputi mengumpulkan usulan warga, dibahas dalam musrenbang, serta menyelaraskan target kinerja dinas",
      "Tahap penyusunan anggaran daerah meliputi pengumpulan usulan warga, pembahasan dalam musrenbang, dan penyelarasan target kinerja dinas",
      "Tahap penyusunan anggaran daerah meliputi agar usulan warga dikumpulkan, membahas musrenbang, dan penyelaras target kinerja dinas",
      "Tahap penyusunan anggaran daerah meliputi warga mengusulkan, pembahasan musrenbang dilakukan, dan diselaraskan target kinerja dinas"
    ],
    "answer": "C",
    "explanation": "Prinsip keparalelan menuntut keseragaman jenis atau imbuhan kata pada unsur-unsur yang dirinci dalam posisi setara: \"pengumpulan\", \"pembahasan\", dan \"penyelarasan\" sama-sama menggunakan nomina berimbuhan peN-...-an sehingga kalimat mengalir selaras dan baku.",
    "tip": "Samakan kelas kata dan pola imbuhan pada deretan perincian (misalnya sesama peN-...-an atau sesama meN-...)."
  },
  {
    "id": "twk-bhs-012",
    "subPattern": "kalimat-efektif-dan-struktur-kalimat",
    "difficulty": "sedang",
    "prompt": "Di antara pernyataan pembawa acara resmi berikut, manakah yang paling tepat dari segi kelogisan nalar dan efektivitas bahasa Indonesia?",
    "options": [
      "Untuk mempersingkat waktu, kami persilakan Bapak Kepala Dinas memberikan sambutan pertama",
      "Waktu dan tempat kami persilakan untuk segera naik ke atas podium memberikan arahan",
      "Kepada Bapak Kepala Dinas yang terhormat sekali waktu dan mikrofon kami haturkan sepenuhnya",
      "Agar waktu lebih efektif, kami persilakan Kepala Dinas menyampaikan sambutan pembuka",
      "Berhubung acara sudah mulai agak siang, maka dari itu kita percepat sambutannya saja"
    ],
    "answer": "D",
    "explanation": "Secara nalar bahasa, waktu tidak dapat \"dipersingkat\" maupun \"dipersilakan naik ke podium\"; yang dipersilakan adalah orangnya (\"Kepala Dinas\"), dan waktu dibuat \"efektif\" atau \"dihemat\". Hindari pula kata mubazir \"naik ke atas\" dan \"maka dari itu\" dalam forum resmi.",
    "tip": "Uji logika semantik subjek-objek: oranglah yang dipersilakan berbicara, sedangkan waktu diefisienkan/diefektifkan."
  },
  {
    "id": "twk-bhs-013",
    "subPattern": "kalimat-efektif-dan-struktur-kalimat",
    "difficulty": "sedang",
    "prompt": "Perhatikan kalimat ambigu berikut: \"Istri pejabat yang baru dilantik itu menghadiri acara peresmian gedung arsip daerah.\" Supaya tidak menimbulkan penafsiran ganda mengenai siapa yang baru dilantik, perbaikan struktur yang tepat jika maksudnya pejabatnyalah yang baru dilantik adalah ...",
    "options": [
      "Istri-istri pejabat baru dilantik itu menghadiri acara peresmian gedung arsip daerah",
      "Istri dari pada pejabat yang baru saja dilantik menghadiri acara peresmian gedung arsip daerah",
      "Yang baru dilantik yaitu istri pejabat menghadiri acara peresmian gedung arsip daerah tersebut",
      "Pejabat beserta istri yang baru dilantik itu sama-sama menghadiri acara peresmian gedung arsip",
      "Istri dari pejabat yang baru dilantik tersebut turut menghadiri acara peresmian gedung arsip daerah"
    ],
    "answer": "E",
    "explanation": "Pada frasa berantai \"Istri pejabat yang baru dilantik\", klausa \"yang baru dilantik\" bisa merujuk ke \"istri\" atau ke \"pejabat\". Menyisipkan preposisi penjelas kepemilikan/relasi menjadi \"Istri dari pejabat yang baru dilantik tersebut\" memperjelas bahwa keterangan \"yang baru dilantik\" melekat pada kata \"pejabat\".",
    "tip": "Pecahkan ambiguitas frasa berantai dengan memperjelas hubungan antarkata memakai preposisi relasi yang tepat atau tanda baca."
  },
  {
    "id": "twk-bhs-014",
    "subPattern": "kalimat-efektif-dan-struktur-kalimat",
    "difficulty": "sedang",
    "prompt": "Kalimat manakah yang menggunakan konjungsi serta struktur majemuk bertingkat paling tepat secara gramatikal?",
    "options": [
      "Karena jaringan internet kantor sempat terganggu, pengiriman laporan bulanan terpaksa dijadwalkan ulang hingga siang hari",
      "Karena jaringan internet kantor sempat terganggu, sehingga pengiriman laporan bulanan terpaksa dijadwalkan ulang",
      "Sedangkan divisi keuangan mencatat seluruh pengeluaran secara digital, divisi umum menata arsip barang inventaris",
      "Walaupun lokasi proyek sulit dijangkau kendaraan roda empat, namun distribusi logistik bahan bangunan tetap berjalan lancar",
      "Meskipun anggaran penelitian tahun ini terbatas, tetapi tim peneliti tetap mampu menghasilkan prototipe energi bersih"
    ],
    "answer": "A",
    "explanation": "Kesalahan klasik kalimat majemuk bertingkat adalah pemakaian dua konjungsi antarklausa secara bersamaan dalam satu kalimat (seperti \"Meskipun..., tetapi...\", \"Karena..., sehingga...\", atau \"Walaupun..., namun...\"). Selain itu, \"sedangkan\" adalah konjungsi intrakalimat yang tidak boleh ditempatkan di awal kalimat tunggal.",
    "tip": "Jangan pernah menduakan konjungsi pertentangan atau sebab-akibat dalam satu kalimat (hindari 'Meskipun..., tetapi...' atau 'Karena..., sehingga...')."
  },
  {
    "id": "twk-bhs-015",
    "subPattern": "kalimat-efektif-dan-struktur-kalimat",
    "difficulty": "sulit",
    "prompt": "Cermati kalimat rancu berikut: \"Dengan mengoptimalkan sistem layanan satu pintu dapat meminimalkan potensi terjadinya praktik pungutan liar di daerah.\" Perbaikan paling tepat yang menjaga keutuhan subjek dan predikat aktif kalimat tersebut adalah ...",
    "options": [
      "Dengan mengoptimalkan sistem layanan satu pintu maka dapat meminimalkan potensi praktik pungutan liar di daerah",
      "Optimalisasi sistem layanan satu pintu dapat meminimalkan potensi terjadinya praktik pungutan liar di daerah",
      "Dengan optimalisasi pada sistem layanan satu pintu yang dapat meminimalkan potensi terjadinya praktik pungutan liar",
      "Melalui sistem layanan satu pintu yang dioptimalkan sehingga dapat meminimalkan potensi praktik pungutan liar",
      "Hal mengoptimalkan terhadap sistem layanan satu pintu dapat meminimalkan akan terjadinya praktik pungutan liar"
    ],
    "answer": "B",
    "explanation": "Kalimat awal keliru karena diawali keterangan cara (\"Dengan mengoptimalkan...\") lalu langsung diikuti predikat aktif transitif (\"dapat meminimalkan...\") tanpa memiliki subjek. Mengubah keterangan cara menjadi frasa nomina \"Optimalisasi sistem layanan satu pintu\" menjadikannya subjek yang sah bagi predikat aktif \"dapat meminimalkan\".",
    "tip": "Jika memakai predikat aktif (meN-), pastikan subjeknya bukan frasa keterangan ('Dengan...', 'Melalui...'), melainkan frasa benda/nomina."
  },
  {
    "id": "twk-bhs-016",
    "subPattern": "kalimat-efektif-dan-struktur-kalimat",
    "difficulty": "sulit",
    "prompt": "Manakah kalimat berikut yang paling tepat menerapkan unsur kecermatan logika dan keefektifan bentuk pasif persona pertama dalam ragam resmi bahasa Indonesia?",
    "options": [
      "Surat permohonan Anda saya sudah baca dengan cermat sebelum rapat pimpinan berlangsung kemarin",
      "Kami telah menelaah tentang daripada surat permohonan Saudara sebelum rapat pimpinan berlangsung",
      "Surat permohonan Anda telah ditelaah oleh saya dengan sangat cermat sekali kemarin sore",
      "Surat permohonan Saudara telah kami telaah secara saksama sebelum rapat pimpinan berlangsung kemarin",
      "Surat permohonan yang mana dikirimkan Saudara kemarin itu telah dibacakan oleh kami tadi pagi"
    ],
    "answer": "D",
    "explanation": "Dalam kaidah struktur pasif diri (persona I dan II), pelaku tidak boleh disisipi kata \"sudah/telah\" di antara pelaku dan kata kerja pasif tanpa prefiks \"di-\" (bukan \"saya sudah baca\", melainkan \"sudah saya baca\" atau \"telah kami telaah\" dalam bentuk aktif). Selain itu, pasif \"ditelaah oleh saya\" kurang lazim dan \"tentang daripada\" serta \"yang mana\" merupakan bentuk tidak efektif.",
    "tip": "Ingat kaidah pasif persona: keterangan aspek (sudah, akan, telah) diletakkan sebelum pronomina pelaku, bukan di antara pronomina dan verba."
  },
  {
    "id": "twk-bhs-017",
    "subPattern": "ide-pokok-paragraf-dan-penalaran-wacana",
    "difficulty": "mudah",
    "prompt": "Bacalah paragraf berikut: \"Transformasi digital pada pelayanan administrasi kependudukan mempercepat penerbitan dokumen warga dari hitungan minggu menjadi hitungan jam. Selain memangkas antrean fisik di loket kecamatan, sistem terintegrasi daring juga menekan penggunaan kertas serta biaya transportasi pemohon dari desa terpencil. Lebih jauh, pencatatan berbasis elektronik mengurangi peluang terjadinya pungutan tidak resmi karena seluruh alur dapat dipantau langsung oleh pemohon.\" Ide pokok paragraf tersebut adalah ...",
    "options": [
      "Tingginya biaya transportasi warga desa terpencil menuju kantor kecamatan",
      "Proses pengawasan ketat petugas pencatatan sipil oleh aparat penegak hukum",
      "Cara memantau antrean loket kecamatan secara manual setiap hari kerja",
      "Kekurangan penggunaan berkas kertas pada instansi pelayanan masyarakat",
      "Berbagai manfaat nyata transformasi digital dalam pelayanan administrasi kependudukan"
    ],
    "answer": "E",
    "explanation": "Kalimat pertama dan kalimat-kalimat penjelas selanjutnya sama-sama merinci dampak positif transformasi digital administrasi kependudukan (cepat, hemat antrean/biaya/kertas, serta transparan bebas pungli). Jadi gagasan utamanya merangkum beragam manfaat tersebut.",
    "tip": "Ide pokok merangkum keseluruhan isi kalimat utama dan benang merah seluruh kalimat penjelas secara proporsional."
  },
  {
    "id": "twk-bhs-018",
    "subPattern": "ide-pokok-paragraf-dan-penalaran-wacana",
    "difficulty": "mudah",
    "prompt": "Bacalah kutipan paragraf berikut: \"(1) Pengelolaan sampah rumah tangga berbasis bank sampah membutuhkan kesadaran pemilahan sejak dari dapur. (2) Sampah organik dapat diolah menjadi kompos maupun pakan maggot yang bernilai guna bagi pekarangan. (3) Sementara itu, plastik bersih dan kertas bernilai jual dikumpulkan untuk ditukar tabungan ekonomi warga. (4) Harga tiket angkutan antarkota menjelang hari libur nasional biasanya mengalami kenaikan penyesuaian tarif. (5) Dengan pemilahan konsisten, volume timbunan sampah di tempat pembuangan akhir dapat berkurang drastis.\" Kalimat yang tidak padu dalam paragraf tersebut ditunjukkan nomor ...",
    "options": [
      "(4)",
      "(2)",
      "(3)",
      "(1)",
      "(5)"
    ],
    "answer": "A",
    "explanation": "Kalimat (1), (2), (3), dan (5) membicarakan topik tunggal mengenai pemilahan dan pengelolaan sampah rumah tangga berbasis bank sampah. Kalimat (4) menyimpang dari kesatuan topik karena membahas kenaikan harga tiket angkutan umum.",
    "tip": "Cari satu kalimat yang topik atau subjek pembahasannya melompat keluar dari tema sentral paragraf."
  },
  {
    "id": "twk-bhs-019",
    "subPattern": "ide-pokok-paragraf-dan-penalaran-wacana",
    "difficulty": "sedang",
    "prompt": "Bacalah teks berikut: \"Banyak instansi berlomba mengembangkan aplikasi layanan publik mandiri demi mengejar skor inovasi daerah. Akibatnya, seorang warga kerap harus mengunduh belasan aplikasi terpisah dengan akun berbeda hanya untuk mengurus dokumen kesehatan, pendidikan, dan pajak daerah. Sebagian aplikasi bahkan jarang diperbarui dan akhirnya terbengkalai setelah acara peluncuran selesai.\" Simpulan paling tepat yang dapat ditarik langsung dari wacana tersebut adalah ...",
    "options": [
      "Seluruh pegawai negeri daerah tidak memiliki kemampuan teknis untuk mengoperasikan sistem komputer",
      "Inovasi digital layanan publik perlu terintegrasi dan berkelanjutan agar benar-benar memudahkan warga, bukan sekadar memperbanyak jumlah aplikasi terpisah",
      "Masyarakat sebaiknya berhenti menggunakan layanan pemerintah berbasis daring dan kembali memakai formulir cetak",
      "Setiap dinas di pemerintahan daerah diwajibkan meluncurkan minimal sepuluh aplikasi baru setiap akhir tahun anggaran",
      "Penilaian inovasi daerah harus dihapus selamanya karena pasti merugikan seluruh pengguna telepon pintar di pedesaan"
    ],
    "answer": "B",
    "explanation": "Teks menyoroti masalah fragmentasi aplikasi yang menyulitkan warga akibat orientasi mengejar jumlah aplikasi tanpa integrasi maupun keberlanjutan pemeliharaan. Simpulan logis yang didukung fakta teks adalah perlunya integrasi layanan digital yang berkelanjutan bagi pengguna.",
    "tip": "Simpulan wacana harus merangkum inti masalah dan implikasi logis teks tanpa menyimpulkan ekstrem di luar dukungan teks."
  },
  {
    "id": "twk-bhs-020",
    "subPattern": "ide-pokok-paragraf-dan-penalaran-wacana",
    "difficulty": "sedang",
    "prompt": "Bacalah paragraf berikut: \"Pemanfaatan kecerdasan buatan generatif memang mempercepat penyusunan ringkasan dokumen rapat yang panjang. Namun, tanpa verifikasi fakta oleh pegawai yang memahami konteks regulasi, sistem tersebut berpotensi menghasilkan informasi keliru yang terdengar meyakinkan. Selain itu, memasukkan data internal warga ke layanan publik eksternal berisiko membuka celah keamanan informasi lembaga.\" Sikap penulis dalam paragraf tersebut adalah ...",
    "options": [
      "Menolak sepenuhnya seluruh kemajuan teknologi digital agar proses rapat kembali dicatat secara manual",
      "Meyakini bahwa perangkat kecerdasan buatan selalu lebih akurat dibandingkan analisis manusia di setiap situasi",
      "Bersikap kritis dan berimbang: mengakui manfaat efisiensi AI sekaligus mengingatkan kewaspadaan atas risiko kesalahan fakta serta keamanan data",
      "Menganjurkan lembaga pemerintah mengunggah seluruh arsip rahasia ke platform terbuka untuk menghemat waktu",
      "Menilai penggunaan alat bantu digital hanya layak diterapkan oleh perusahaan swasta berskala multinasional"
    ],
    "answer": "C",
    "explanation": "Penulis mengawali teks dengan mengakui manfaat efisiensi (\"memang mempercepat\"), kemudian menggunakan penanda pertentangan (\"Namun\") untuk memaparkan risiko kesalahan fakta (halusinasi) dan keamanan data bila tanpa pengawasan manusia. Sikap ini bersifat kritis-proporsional dan berimbang.",
    "tip": "Perhatikan penanda wacana ('memang...', 'Namun...', 'Selain itu...') untuk menangkap sikap penulis secara utuh."
  },
  {
    "id": "twk-bhs-021",
    "subPattern": "ide-pokok-paragraf-dan-penalaran-wacana",
    "difficulty": "sedang",
    "prompt": "Bacalah paragraf deduktif-induktif berikut: \"Pelestarian bahasa daerah tidak hanya berfungsi menjaga warisan sastra lisan masa lalu, tetapi juga menyimpan pengetahuan lokal tentang ekologi, obat tradisional, dan mitigasi bencana. Di beberapa wilayah kepulauan, istilah-istilah adat terbukti menjadi peringatan dini warga terhadap gejala gelombang pasang sebelum alat modern terpasang. Sayangnya, berkurangnya penutur muda di keluarga urban perlahan mengancam kepunahan kosakata budaya tersebut. Oleh sebab itu, pewarisan bahasa ibu di rumah dan sekolah menjadi kebutuhan mendesak agar kekayaan pengetahuan lokal tidak ikut lenyap.\" Gagasan utama keseluruhan paragraf tersebut adalah ...",
    "options": [
      "Bahasa daerah hanya berguna untuk mempelajari karya sastra lisan di kalangan budayawan senior",
      "Keluarga perkotaan sama sekali dilarang berbicara menggunakan bahasa nasional ketika berada di rumah",
      "Alat peringatan dini modern kurang akurat dibandingkan cerita rakyat di seluruh wilayah kepulauan",
      "Kosakata obat tradisional sepenuhnya sudah dicatat secara lengkap ke dalam kamus internasional",
      "Pentingnya pewarisan bahasa daerah secara mendesak karena menyimpan kekayaan nilai budaya dan pengetahuan ekologis penting"
    ],
    "answer": "E",
    "explanation": "Kalimat awal menegaskan fungsi strategis bahasa daerah (budaya sekaligus pengetahuan ekologi/mitigasi), kalimat tengah memaparkan ancaman berkurangnya penutur muda, dan kalimat simpulan menegaskan urgensi pewarisannya—sehingga gagasan utama utuhnya adalah urgensi pewarisan bahasa daerah sebagai penyimpan kekayaan pengetahuan lokal.",
    "tip": "Pada paragraf campuran, gabungkan klaim awal dengan penegasan ulang pada kalimat penutup berpenanda 'Oleh sebab itu'."
  },
  {
    "id": "twk-bhs-022",
    "subPattern": "ide-pokok-paragraf-dan-penalaran-wacana",
    "difficulty": "sedang",
    "prompt": "Perhatikan dua pernyataan berikut: (1) Sebagian besar gangguan layanan transportasi massal perkotaan disebabkan oleh rendahnya kedisiplinan pengguna mengikuti jadwal integrasi antarmoda. (2) Di sisi lain, keluhan penumpang menunjukkan masih minimnya papan informasi rute dan jadwal kedatangan yang jelas di stasiun penghubung. Hubungan makna paling logis di antara kedua kutipan hasil pengamatan tersebut adalah ...",
    "options": [
      "Persoalan transportasi massal memiliki faktor penyebab ganda dari sisi perilaku pengguna sekaligus keterbatasan kualitas sarana informasi pengelola",
      "Pernyataan kedua secara mutlak membantah keberadaan jadwal operasional transportasi massal di kota mana pun",
      "Pengelola stasiun penghubung bebas dari tanggung jawab pelayanan karena kesalahan sepenuhnya berada pada pengguna",
      "Papan informasi rute tidak lagi diperlukan apabila seluruh penumpang sudah memiliki jam tangan digital masing-masing",
      "Kedua kutipan membuktikan bahwa pembangunan angkutan massal di perkotaan harus dihentikan segera"
    ],
    "answer": "A",
    "explanation": "Frasa \"Di sisi lain\" memunculkan sudut pandang pelengkap yang memperkaya analisis masalah: kendala layanan tidak disebabkan oleh satu pihak semata, melainkan interaksi antara perilaku kedisiplinan pengguna dan kelengkapan informasi dari pengelola layanan.",
    "tip": "Identifikasi fungsi hubungan antargagasan ('Di sisi lain') sebagai perspektif pelengkap yang memperlihatkan penyebab majemuk."
  },
  {
    "id": "twk-bhs-023",
    "subPattern": "ide-pokok-paragraf-dan-penalaran-wacana",
    "difficulty": "sulit",
    "prompt": "Bacalah wacana singkat berikut: \"Pembangunan ruang terbuka hijau (RTH) di kota padat penduduk sering dipandang sebatas pemenuhan target luas lahan di atas kertas laporan. Akibatnya, RTH kadang dibangun di area terpencil pinggiran kota yang sulit dijangkau warga permukiman padat, tanpa jalur pejalan kaki aman maupun peneduh yang nyaman. Padahal, fungsi ekologis dan sosial RTH baru tercapai optimal jika tersebar proporsional dan aksesibel bagi warga lintas usia.\" Tujuan utama penulis menyampaikan paragraf di atas adalah ...",
    "options": [
      "Melaporkan luas seluruh taman kota di Indonesia secara statistik dari tahun ke tahun",
      "Mengkritik orientasi formalitas kuantitatif pembangunan RTH agar bergeser menuju pemerataan aksesibilitas serta manfaat nyata bagi warga",
      "Menolak seluruh proyek perbaikan taman umum di pusat kota karena dianggap menghabiskan anggaran daerah",
      "Membujuk pengembang perumahan agar mengganti seluruh ruang terbuka hijau menjadi lahan parkir berbayar",
      "Membandingkan keindahan tanaman hias antara kota pesisir dan kota pegunungan"
    ],
    "answer": "B",
    "explanation": "Penulis mengkritisi kecenderungan formalistik (mengejar angka luas lahan semata) dengan menggunakan kata \"sebatas\", \"akibatnya\", dan \"padahal\", untuk mendorong perubahan paradigma perencanaan kota menuju pemerataan serta aksesibilitas nyata ruang publik.",
    "tip": "Temukan tujuan penulis melalui diksi evaluatif ('sebatas', 'padahal', 'baru tercapai optimal jika...')."
  },
  {
    "id": "twk-bhs-024",
    "subPattern": "ide-pokok-paragraf-dan-penalaran-wacana",
    "difficulty": "sulit",
    "prompt": "Bacalah paragraf berikut dengan saksama: \"Meskipun regulasi pengawasan anggaran di atas kertas tampak sangat rinci, kebocoran dana publik masih kerap bermula dari transaksi kecil yang dianggap maklum bersama di unit kerja. Lama-kelamaan, pemakluman atas pelanggaran ringan melumpuhkan kepekaan moral pegawai sehingga penyimpangan bernilai besar pun mulai dicari-cari pembenarannya.\" Makna tersirat yang paling kuat dari paragraf tersebut adalah ...",
    "options": [
      "Peraturan pengawasan tertulis sama sekali tidak berpengaruh terhadap tata kelola anggaran negara di sektor mana pun",
      "Pelanggaran anggaran berskala kecil sebaiknya dibiarkan agar auditor fokus memeriksa proyek bernilai triliunan rupiah",
      "Normalisasi penyimpangan kecil merupakan pintu masuk erosi integritas institusional karena kelengkapan aturan tertulis tanpa integritas budaya kerja tidak memadai",
      "Setiap transaksi operasional harian kantor pasti mengandung kecurangan walaupun sudah dilengkapi kuitansi sah",
      "Penyempurnaan naskah regulasi hukum merupakan satu-satunya langkah yang diperlukan untuk menghapus korupsi birokrasi"
    ],
    "answer": "C",
    "explanation": "Paragraf menyiratkan pesan kausal bertingkat: aturan rinci tidak cukup jika budaya organisasi membiarkan pelanggaran kecil menjadi kebiasaan (normalisasi penyimpangan), yang lambat laun mengikis kepekaan etis dan membuka jalan bagi penyimpangan besar.",
    "tip": "Makna tersirat merangkum peringatan psikologis-moral dari alur sebab-akibat wacana tanpa menafikan fakta awal kalimat."
  },
  {
    "id": "twk-bhs-025",
    "subPattern": "diksi-kata-baku-dan-imbuhan",
    "difficulty": "mudah",
    "prompt": "Kelompok kata di bawah ini yang seluruhnya merupakan bentuk kata baku sesuai Kamus Besar Bahasa Indonesia (KBBI) adalah ...",
    "options": [
      "Apotik, atlit, hakekat, resiko, dan sekedar",
      "Seksama, nasehat, tehnik, praktek, dan kwitansi",
      "Aktifitas, efektifitas, kwalitas, analisa, dan sistim",
      "Apotek, atlet, hakikat, risiko, dan saksama",
      "Jadual, ijasah, pondasi, surpey, dan hirarki"
    ],
    "answer": "D",
    "explanation": "Bentuk baku KBBI yang tepat: apotek (bukan apotik), atlet (bukan atlit), hakikat (bukan hakekat), risiko (bukan resiko), saksama (bukan seksama), sekadar (bukan sekedar), nasihat, teknik, praktik, kuitansi, aktivitas, efektivitas, kualitas, analisis, sistem, jadwal, ijazah, fondasi, survei, hierarki.",
    "tip": "Uji tiap unsur dalam pilihan kata baku; satu kata tidak baku langsung menggugurkan seluruh kelompoknya."
  },
  {
    "id": "twk-bhs-026",
    "subPattern": "diksi-kata-baku-dan-imbuhan",
    "difficulty": "mudah",
    "prompt": "Berdasarkan kaidah peluluhan fonem awal K, P, T, dan S ketika mendapat awalan meN-, penulisan seluruh kata berimbuhan berikut yang baku adalah ...",
    "options": [
      "Memengaruhi, memesona, memprakarsai, dan memproses",
      "Mempengaruhi, mempesona, mengkonsumsi, dan menterjemahkan",
      "Mempengarui, mempesonakan, memrakarsai, dan memroses",
      "Mempengaruhi, memesona, mengkritik, dan menseragamkan",
      "Mempublikasikan, mentransfer, mengkaji makna menelaah, dan memproduksi"
    ],
    "answer": "A",
    "explanation": "Huruf K, P, T, S luluh jika diikuti huruf vokal setelah mendapat awalan meN-: memengaruhi (pengaruh), memesona (pesona), mengonsumsi (konsumsi), menerjemahkan (terjemah), dan memublikasikan (publikasi). Sebaliknya, jika huruf kedua berupa konsonan membentuk gugus konsonan (pr-, kr-, tr-), huruf K-P-T-S tidak luluh: memprakarsai, memproses, memproduksi, mengkritik, dan mentransfer.",
    "tip": "K-P-T-S + vokal -> LULUH (memesona, memengaruhi); K-P-T-S + konsonan -> TIDAK LULUH (memprakarsai, memproses, mengkritik)."
  },
  {
    "id": "twk-bhs-027",
    "subPattern": "diksi-kata-baku-dan-imbuhan",
    "difficulty": "sedang",
    "prompt": "Penggunaan kata bentukan \"di-...-kan\" dan \"di-...-i\" (atau \"meN-...-kan\" dan \"meN-...-i\") yang tepat dari segi ketepatan objek dan makna kalimat adalah ...",
    "options": [
      "Kepala bagian menugaskan dua analis muda untuk meninjau berkas perizinan daerah",
      "Kepala bagian menugasi dua analis muda untuk melakukan audit internal berkas layanan",
      "Instruktur pelatihan itu mengajarkan para peserta baru mengenai etika tata naskah dinas",
      "Wali kota menghadiahi plakat penghargaan kepada juara inovasi pelayanan publik tahun ini",
      "Pimpinan kantor menyerahi bantuan perangkat kerja terbaru kepada pegawai lapangan"
    ],
    "answer": "B",
    "explanation": "Imbuhan \"-i\" menuntut objek berupa pihak penerima/sasaran atau lokasi (menugasi dua analis, menyerahi pegawai, mengajari peserta, menghadiahi juara), sedangkan imbuhan \"-kan\" menuntut objek berupa hal/benda yang dipindahkan atau dikerjakan (menugaskan pekerjaan/audit kepada analis, menyerahkan bantuan, mengajarkan etika kepada peserta, menghadiahkan plakat kepada juara).",
    "tip": "Rumus cepat: meN-...-i + [orang/tempat]; meN-...-kan + [benda/hal/materi] + kepada [orang]."
  },
  {
    "id": "twk-bhs-028",
    "subPattern": "diksi-kata-baku-dan-imbuhan",
    "difficulty": "sedang",
    "prompt": "Menurut makna asli dalam KBBI, banyak penutur keliru memakai kata \"bergeming\" dan \"acuh\" secara terbalik. Kalimat di bawah ini yang menggunakan kata \"bergeming\" atau \"acuh\" sesuai arti leksikal KBBI secara tepat adalah ...",
    "options": [
      "Walaupun diguyur hujan lebat, para peserta upacara tetap tidak bergeming dari barisannya sedikit pun",
      "Petugas loket tersebut bersikap acuh terhadap antrean panjang sehingga banyak pemohon merasa tidak diperhatikan",
      "Meski mendapat berbagai tekanan dan godaan gratifikasi, pejabat pengadaan itu tetap bergeming pada prinsip integritas",
      "Kepala desa dianggap acuh karena sama sekali tidak memedulikan keluhan warga mengenai rusaknya jembatan",
      "Tersangka pelanggaran disiplin itu selalu bergeming gelisah ke kanan dan ke kiri saat dimintai keterangan inspektorat"
    ],
    "answer": "C",
    "explanation": "Dalam KBBI: \"bergeming\" berarti tidak bergerak sedikit pun atau diam saja (sehingga \"tetap tidak bergeming\" sebenarnya keliru ganda apabila maksudnya tetap teguh berdiri diam; bentuk bakunya \"tetap bergeming\"). Sementara itu, \"acuh\" berarti peduli/menaruh perhatian (lawannya adalah \"acuh tak acuh\" atau \"tak acuh\" yang berarti tidak peduli).",
    "tip": "Ingat KBBI: bergeming = diam tidak bergerak; acuh = peduli (untuk makna tidak peduli gunakan 'tak acuh' atau 'acuh tak acuh')."
  },
  {
    "id": "twk-bhs-029",
    "subPattern": "diksi-kata-baku-dan-imbuhan",
    "difficulty": "sedang",
    "prompt": "Pilihan diksi dan bentuk kata terikat \"antar-\" serta \"pasca-\" yang tepat sesuai kaidah penulisan kata gabung EYD V terdapat pada kalimat ...",
    "options": [
      "Koordinasi antar lembaga pemerintah dan sinergi pasca bencana perlu diperkuat setiap tahun anggaran",
      "Sinergi antar kementerian pada kegiatan pasca pandemi berhasil mempercepat digitalisasi pelayanan publik",
      "Kerja sama antar instansi daerah pada fase pasca-audit sangat menentukan keberhasilan perbaikan administrasi",
      "Koordinasi antarlembaga pemerintah serta pemulihan pascabencana perlu dipantau lewat forum evaluasi berkala",
      "Pertemuan antar-provinsi dan diskusi pasca-pelantikan pejabat berlangsung tertib di aula utama balai kota"
    ],
    "answer": "D",
    "explanation": "Unsur terikat (seperti antar-, pasca-, pra-, sub-, non-, semi-, maha-, swa-) ditulis serangkai dengan kata dasar berikutnya yang bukan huruf kapital atau singkatan: antarlembaga, antarkementerian, antarpulau, pascabencana, pascaaudit, pascapandemi. Tanda hubung hanya disisipkan jika diikuti huruf kapital (misalnya antar-ASEAN, pasca-Lebaran).",
    "tip": "Bentuk terikat + huruf kecil ditulis serangkai (antarlembaga, pascabencana); tanda hubung dipakai jika bertemu huruf kapital (antar-Indonesia)."
  },
  {
    "id": "twk-bhs-030",
    "subPattern": "diksi-kata-baku-dan-imbuhan",
    "difficulty": "sedang",
    "prompt": "Perhatikan kalimat berikut: \"Setiap peserta rapat diminta mengemukakan masukan objektif untuk menyempurnakan ... pelayanan terpadu satu pintu sebelum jadwal ... proyek ditandatangani besok.\" Pasangan kata baku paling tepat untuk melengkapi bagian rumpang secara berurutan adalah ...",
    "options": [
      "kwalitas; legitimasi",
      "sistim; jadual",
      "mekanisme; kontruksi",
      "standarisasi; jadual",
      "sistem; jadwal"
    ],
    "answer": "E",
    "explanation": "Bentuk kata baku menurut KBBI adalah \"sistem\" (bukan sistim), \"jadwal\" (bukan jadual), \"konstruksi\" (bukan kontruksi), \"standardisasi\" (bukan standarisasi), dan \"kualitas\" (bukan kwalitas). Pada kalimat tersebut, pasangan kata yang seluruhnya baku adalah \"sistem\" dan \"jadwal\".",
    "tip": "Periksa kecocokan makna konteks sekaligus kebakuan ejaan KBBI pada setiap anggota pasangan kata."
  },
  {
    "id": "twk-bhs-031",
    "subPattern": "diksi-kata-baku-dan-imbuhan",
    "difficulty": "sulit",
    "prompt": "Penerapan kaidah pembentukan imbuhan serapan atau gabungan awalan-akhiran yang tidak tepat dan sering muncul dalam berita maupun naskah kebijakan pemerintah terdapat pada kalimat ...",
    "options": [
      "Kementerian berupaya mengoptimalkan penggunaan produk dalam negeri pada seluruh paket pengadaan barang",
      "Panitia seleksi sedang mensurvei dan memvalidasi keabsahan dokumen ijazah seluruh peserta tahap akhir",
      "Dinas terkait telah mengoordinasikan penyaluran bantuan logistik bersama relawan tanggap darurat daerah",
      "Tim penyuluh aktif menyosialisasikan kebijakan pencegahan stunting hingga ke posyandu tingkat rukun warga",
      "Lembaga pengawas melakukan pembinaan untuk mengikis kebiasaan menyontek pada setiap ujian sertifikasi"
    ],
    "answer": "B",
    "explanation": "Kata dasar \"survei\" diawali huruf konsonan \"s\" yang diikuti huruf vokal \"u\", sehingga menurut kaidah peluluhan K-P-T-S apabila mendapat imbuhan meN-, huruf \"s\" wajib luluh menjadi \"meny-\" (menyurvei, bukan mensurvei). Kata lain seperti menyosialisasikan, mengoordinasikan, dan menyontek sudah sesuai kaidah peluluhan KBBI.",
    "tip": "Cek kata asing/serapan berawalan S/P/T/K + vokal: survei -> menyurvei; sosialisasi -> menyosialisasikan; koordinasi -> mengoordinasikan; sontek -> menyontek."
  },
  {
    "id": "twk-bhs-032",
    "subPattern": "diksi-kata-baku-dan-imbuhan",
    "difficulty": "sulit",
    "prompt": "Perhatikan kalimat berikut: \"Untuk menjamin ... pelaksanaan anggaran, inspektorat daerah mendorong peningkatan ... pengawasan internal dan penggunaan aplikasi pelaporan yang ... di semua tingkatan unit kerja.\" Urutan kata baku yang tepat secara semantis dan ortografis untuk melengkapi kalimat tersebut adalah ...",
    "options": [
      "efektifitas; akuntabilitas; komprehensip",
      "efektivitas; kwalitas; kongkret",
      "akuntabilitas; efektivitas; komprehensif",
      "kredibilitas; hirarki; obyektif",
      "efektifitas; integritas; otentik"
    ],
    "answer": "C",
    "explanation": "Bentuk baku dalam KBBI adalah \"akuntabilitas\", \"efektivitas\" (bukan efektifitas), dan \"komprehensif\" (bukan komprehensip). Adapun bentuk yang salah pada pilihan lain meliputi efektifitas, komprehensip, kwalitas, kongkret (baku: konkret), hirarki (baku: hierarki), obyektif (baku: objektif), dan otentik (baku: autentik).",
    "tip": "Ingat pola serapan -ive -> -if dan -ity -> -itas dengan v/f sesuai asal konsonan: efektif -> efektivitas, aktif -> aktivitas, komprehensif, konkret, autentik."
  },
  {
    "id": "twk-bhs-033",
    "subPattern": "naskah-dinas-dan-bahasa-negara",
    "difficulty": "mudah",
    "prompt": "Kedudukan Bahasa Indonesia sebagai bahasa negara tercantum secara tegas dalam UUD Negara Republik Indonesia Tahun 1945 pada ...",
    "options": [
      "Pasal 35",
      "Pasal 36B",
      "Pasal 36A",
      "Pasal 36",
      "Pasal 37"
    ],
    "answer": "D",
    "explanation": "Pasal 36 UUD 1945 berbunyi tegas: \"Bahasa Negara ialah Bahasa Indonesia.\" Sementara itu, Pasal 35 mengatur Bendera Negara Sang Merah Putih, Pasal 36A mengatur Lambang Negara Garuda Pancasila, Pasal 36B mengatur Lagu Kebangsaan Indonesia Raya, dan Pasal 37 mengatur perubahan UUD.",
    "tip": "Ingat urutan Bab XV UUD 1945: Pasal 35 Bendera, Pasal 36 Bahasa Negara, Pasal 36A Lambang Negara, Pasal 36B Lagu Kebangsaan."
  },
  {
    "id": "twk-bhs-034",
    "subPattern": "naskah-dinas-dan-bahasa-negara",
    "difficulty": "mudah",
    "prompt": "Penulisan alamat tujuan surat dinas resmi yang paling sesuai dengan tata naskah dinas pemerintahan dan kaidah EYD V adalah ...",
    "options": [
      "Kepada Yth. Bapak Kepala Badan Kepegawaian Daerah di Tempat.",
      "Kepada Yth: Saudara Direktur Jenderal Pelayanan Publik di Jakarta.",
      "Kepada Yang Terhormat Ibu Kepala Biro Umum Kemenpan-RB.",
      "Yth, Kepala Dinas Pendidikan Kabupaten Sleman, DI Yogyakarta.",
      "Yth. Kepala Badan Kepegawaian Daerah Provinsi Jawa Tengah di Semarang"
    ],
    "answer": "E",
    "explanation": "Dalam penulisan alamat surat dinas baku: tidak memakai \"Kepada\" di depan \"Yth.\", tidak mencampur sapaan \"Bapak/Ibu\" apabila diikuti nama jabatan resmi (langsung \"Yth. Kepala Badan...\"), menggunakan tanda titik di belakang singkatan \"Yth.\", serta tidak mengakhiri baris alamat tujuan surat dengan tanda titik.",
    "tip": "Rumus alamat tujuan surat dinas: Yth. [Nama Jabatan tanpa Bapak/Ibu] -> [Alamat/Kota] -> tanpa tanda titik di akhir baris."
  },
  {
    "id": "twk-bhs-035",
    "subPattern": "naskah-dinas-dan-bahasa-negara",
    "difficulty": "sedang",
    "prompt": "Dalam surat dinas resmi, bagian penutup sering kali ditulis secara kurang tepat karena menggunakan pronomina tidak jelas dan pola pasif yang rancu. Penulisan kalimat penutup surat dinas yang paling baku dan tepat adalah ...",
    "options": [
      "Atas perhatian dan kerja sama Saudara, kami mengucapkan terima kasih.",
      "Atas kerja sama dan perhatian Bapak-bapak sekalian, maka sebelumnya kami menghaturkan terima kasih sebesar-besarnya.",
      "Demikian surat undangan ini kami sampaikan, atas perhatiannya diucapkan banyak-banyak terima kasih.",
      "Demikian atas perhatian daripada Saudara sekalian kami sampaikan beribu terima kasih banyak.",
      "Atas kehadirannya tepat waktu sangat kami harapkan dan sebelumnya diucapkan terima kasih."
    ],
    "answer": "A",
    "explanation": "Ungkapan \"atas perhatiannya\" merancukan pronomina orang kedua dengan kata ganti ketiga (-nya), sedangkan \"diucapkan terima kasih\" menghilangkan pelaku resmi instansi. Kalimat penutup naskah dinas yang baku memakai sapaan hormat jelas (\"Saudara\" atau \"Bapak/Ibu\") dan pelaku aktif (\"kami mengucapkan terima kasih\").",
    "tip": "Hindari 'atas perhatiannya diucapkan terima kasih'; gunakan sapaan jelas (Saudara/Bapak/Ibu) + subjek pelaku 'kami mengucapkan terima kasih'."
  },
  {
    "id": "twk-bhs-036",
    "subPattern": "naskah-dinas-dan-bahasa-negara",
    "difficulty": "sedang",
    "prompt": "Berdasarkan Undang-Undang Nomor 24 Tahun 2009 tentang Bendera, Bahasa, dan Lambang Negara, serta Lagu Kebangsaan, manakah ketentuan yang paling tepat terkait penggunaan bahasa Indonesia pada nama bangunan, jalan, badan usaha milik warga negara Indonesia, serta rambu fasilitas umum?",
    "options": [
      "Seluruh gedung usaha swasta di kota besar dianjurkan memakai nama bahasa asing agar menarik wisatawan mancanegara",
      "Rambu lalu lintas serta papan nama kantor hanya wajib berbahasa Indonesia apabila berada di ibu kota negara saja",
      "Bahasa Indonesia wajib digunakan untuk nama geografi, gedung, jalan, perkantoran, kompleks dagang, serta lembaga pendidikan dan organisasi milik WNI atau badan hukum Indonesia",
      "Pemerintah daerah berhak mewajibkan pengisian dokumen resmi negara hanya memakai bahasa daerah di tiap kecamatan",
      "Perjanjian kerja sama antarlembaga pemerintah di dalam negeri diperbolehkan disusun seluruhnya dalam bahasa asing tanpa naskah bahasa Indonesia"
    ],
    "answer": "C",
    "explanation": "Pasal 36 ayat (3) UU No. 24 Tahun 2009 (diperinci dalam Perpres No. 63 Tahun 2019) mewajibkan penggunaan Bahasa Indonesia pada nama bangunan/gedung, jalan, apartemen, perkantoran, kompleks perdagangan, merek dagang, lembaga usaha, dan organisasi yang dimiliki/didirikan WNI atau badan hukum Indonesia (dapat disertai bahasa daerah/asing secara proporsional untuk kekhasan sejarah/budaya/agama bila diatur).",
    "tip": "Ingat Pasal 36 UU No. 24 Tahun 2009: ruang publik, rambu, jalan, dan nama gedung/badan hukum Indonesia wajib mengutamakan Bahasa Indonesia."
  },
  {
    "id": "twk-bhs-037",
    "subPattern": "naskah-dinas-dan-bahasa-negara",
    "difficulty": "sedang",
    "prompt": "Dalam tata naskah dinas instansi pemerintah, penulisan kepala surat (kop) sudah mencantumkan nama kota kedudukan instansi, sementara di pojok kanan atas surat tercantum tanggal pembuatan surat. Penulisan tanggal surat dinas yang tepat sesuai aturan tata naskah dinas adalah ...",
    "options": [
      "Bandung, 14 Mei 2026.",
      "14-05-2026.",
      "14 Mei 2026.",
      "14 Mei 2026",
      "Bandung, 14 Mei 2026"
    ],
    "answer": "D",
    "explanation": "Menurut pedoman tata naskah dinas (ANRI / PermenPANRB) dan EYD V: karena nama kota sudah tertera dalam kepala/kop surat dinas, penulisan tanggal surat cukup mencantumkan tanggal, bulan (ditulis penuh dengan huruf kapital di awal), serta tahun angka lengkap tanpa mengulang nama kota dan tanpa diakhiri tanda titik.",
    "tip": "Tanggal pada surat dinas berkop: tidak perlu mengulang nama kota, bulan ditulis utuh huruf, dan tidak memakai tanda titik di akhir."
  },
  {
    "id": "twk-bhs-038",
    "subPattern": "naskah-dinas-dan-bahasa-negara",
    "difficulty": "sedang",
    "prompt": "Sesuai Pasal 31 Undang-Undang Nomor 24 Tahun 2009, apabila lembaga negara atau instansi pemerintah Indonesia menandatangani nota kesepahaman (MoU) atau perjanjian kerja sama dengan mitra pihak asing di bidang teknologi maupun ekonomi, aturan penggunaan bahasanya yang tepat adalah ...",
    "options": [
      "Kewajiban berbahasa Indonesia hanya berlaku pada surat undangan rapat dan tidak mencakup nota kesepahaman kerja sama",
      "Perjanjian dengan mitra luar negeri cukup ditulis dalam bahasa Inggris saja karena bahasa Indonesia tidak diakui dalam kontrak perdata",
      "Pihak Indonesia berhak memaksa mitra asing menggunakan bahasa daerah tempat proyek berada sebagai satu-satunya teks naskah kontrak",
      "Terjemahan bahasa Indonesia baru disusun lima tahun sesudah penandatanganan perjanjian apabila terjadi perselisihan hukum di pengadilan",
      "Bahasa Indonesia wajib digunakan dalam perjanjian yang melibatkan lembaga pemerintah atau pihak Indonesia; jika melibatkan pihak asing, ditulis pula dalam bahasa nasional pihak asing dan/atau bahasa Inggris"
    ],
    "answer": "E",
    "explanation": "Pasal 31 UU No. 24 Tahun 2009 (dan Perpres No. 63 Tahun 2019 Pasal 26) mewajibkan penggunaan Bahasa Indonesia pada perjanjian/MoU yang melibatkan pihak Indonesia; dalam perjanjian dengan pihak asing ditulis pula dalam bahasa nasional pihak asing atau bahasa Inggris dengan kesepakatan bahasa yang menjadi rujukan penafsiran bersama.",
    "tip": "Perjanjian resmi dengan pihak asing: naskah Bahasa Indonesia wajib ada berdampingan dengan bahasa asing/bahasa Inggris (Pasal 31 UU 24/2009)."
  },
  {
    "id": "twk-bhs-039",
    "subPattern": "naskah-dinas-dan-bahasa-negara",
    "difficulty": "sulit",
    "prompt": "Perhatikan bagian perihal dan pembuka surat dinas berikut: \"Hal: Undangan Rapat Koordinasi Evaluasi SPBE Tahun 2026 / Dengan hormat, Dalam rangka percepatan transformasi digital layanan publik daerah, maka dengan ini kami mengundang Saudara untuk menghadiri rapat yang diselenggarakan pada...\" Perbaikan redaksional paling cermat agar bagian pembuka naskah dinas tersebut baku dan efektif adalah ...",
    "options": [
      "Menghapus kata \"maka\" serta frasa mubazir \"dengan ini\" menjadi: \"Dalam rangka percepatan transformasi digital layanan publik daerah, kami mengundang Saudara untuk menghadiri rapat yang akan diselenggarakan pada...\"",
      "Menambahkan kata \"Yth.\" sesudah frasa \"Dengan hormat,\" dalam satu baris kalimat yang sama",
      "Mengganti kata \"Dalam rangka\" menjadi \"Dikarenakan guna mempercepat\" agar terasa lebih santun di lingkungan birokrasi",
      "Memindahkan kalimat undangan seluruhnya ke dalam bagian lampiran dan membiarkan isi surat hanya berisi tanda tangan pejabat",
      "Mengubah sapaan \"Saudara\" menjadi \"Yang bersangkutan di bawah ini\" supaya terkesan lebih formal dan tegas"
    ],
    "answer": "A",
    "explanation": "Dalam ragam naskah dinas modern yang lugas dan efektif: frasa pengantar \"Dalam rangka...\" tidak boleh dipertemukan dengan \"maka\" (memutus kalimat menjadi rancu keterangan + konjungsi), dan \"dengan ini\" bersifat klise mubazir ketika langsung diikuti kata kerja performatif \"kami mengundang\".",
    "tip": "Rapikan pembuka surat dinas dengan menghapus kata berlebih ('dengan ini', 'maka' setelah keterangan 'Dalam rangka/Sehubungan dengan')."
  },
  {
    "id": "twk-bhs-040",
    "subPattern": "naskah-dinas-dan-bahasa-negara",
    "difficulty": "sulit",
    "prompt": "Di sebuah forum ilmiah tingkat internasional yang diselenggarakan kementerian di Jakarta, pembicara utama asal Indonesia menyampaikan paparan menggunakan bahasa Inggris demi kelancaran tamu luar negeri. Apakah hal tersebut bertentangan dengan Pasal 32 UU No. 24 Tahun 2009 mengenai kewajiban berbahasa Indonesia dalam forum nasional atau internasional di Indonesia?",
    "options": [
      "Ya, warga negara Indonesia mutlak dilarang berbicara menggunakan bahasa asing dalam situasi forum internasional apa pun di tanah air",
      "Tidak, Pasal 32 UU No. 24 Tahun 2009 mewajibkan Bahasa Indonesia pada forum nasional atau internasional di Indonesia, tetapi membolehkan WNI berbahasa asing dalam forum internasional selama tersedia terjemahan Bahasa Indonesia",
      "Ya, pembicara wajib dijatuhi sanksi pidana karena penggunaan bahasa asing secara otomatis menghapus kedaulatan bahasa negara",
      "Tidak, selama forum tersebut menggunakan anggaran sponsor swasta maka seluruh dokumen resmi negara bebas memakai bahasa mana saja",
      "Ya, kecuali apabila seluruh peserta Indonesia menandatangani izin khusus di hadapan pejabat kelurahan lokasi acara"
    ],
    "answer": "B",
    "explanation": "Pasal 32 UU No. 24 Tahun 2009 mengatur bahwa Bahasa Indonesia wajib digunakan dalam forum yang bersifat nasional atau forum yang bersifat internasional di Indonesia (ayat 1), tetapi pada forum yang bersifat internasional di Indonesia, warga negara Indonesia dapat menggunakan bahasa asing dengan syarat penyelenggara wajib menyediakan terjemahannya ke dalam Bahasa Indonesia (sebagaimana diperinci pula pada Perpres No. 63 Tahun 2019).",
    "tip": "Pada forum internasional di Indonesia (Pasal 32 UU 24/2009), bahasa asing dapat digunakan secara proporsional selama tersedia terjemahan Bahasa Indonesia."
  }
];

export const bahasaIndonesiaQuestions: readonly Question[] = buildTwkPatternQuestions(
  "bahasa-indonesia",
  [...bahasaIndonesiaDrafts, ...bahasaIndonesiaBatch2Drafts, ...bahasaIndonesiaBatch3Drafts],
);
