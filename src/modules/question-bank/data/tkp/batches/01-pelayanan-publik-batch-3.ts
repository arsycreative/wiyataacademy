import type { TkpQuestionDraft } from "@/modules/question-bank/domain/question";

export const pelayananPublikBatch3Drafts: readonly TkpQuestionDraft[] = [
  {
    id: "tkp-pel-081",
    subPattern: "dilema-layanan-krisis-dan-viral",
    difficulty: "sedang",
    prompt:
      "Saat Anda bertugas sebagai koordinator layanan Dukcapil, sebuah video pendek dari pengunjung yang memprotes lamanya pencetakan KTP elektronik mulai viral di media sosial karena ia keliru mengira urutan antrean prioritas lansia sebagai praktik pilih kasih. Langkah paling tepat Anda adalah ...",
    options: [
      "Menghubungi pemohon secara santun melalui nomor kontak terdaftar untuk meluruskan mekanisme antrean prioritas sekaligus memastikan pencetakan KTP-nya diproses tuntas sesuai urutan berlaku.",
      "Memverifikasi kronologi bersama tim loket, menuntaskan berkas pemohon dengan empati, menyiapkan klarifikasi berbasis data bersama humas, lalu memperjelas papan informasi prioritas.",
      "Meminta bagian humas segera menyusun pernyataan resmi yang menjelaskan bahwa seluruh alur loket layanan telah berjalan tertib sesuai standar operasional dan urutan antrean.",
      "Mengundang pemohon datang kembali ke ruang pengaduan dinas guna meminta klarifikasi terbuka atas unggahan video yang telah merugikan reputasi petugas pelayanan loket.",
      "Menonaktifkan sementara kolom komentar akun resmi dinas sambil terus melayani antrean ruang tunggu seperti biasa agar tidak memicu perdebatan berkepanjangan di ruang publik.",
    ],
    optionScores: [4, 5, 3, 2, 1],
    answer: "B",
    explanation:
      "Tindakan berskor 5 memadukan verifikasi fakta, penyelesaian empatik atas kebutuhan pemohon, klarifikasi publik berbasis data bersama humas, sekaligus pembenahan papan informasi agar salah paham tidak berulang. Meluruskan kesalahpahaman dan menuntaskan berkas pemohon secara pribadi memang sopan dan prosedural (skor 4), tetapi belum menjawab dampak disinformasi publik maupun celah kejelasan informasi di ruang tunggu.",
    tip: "Saat keluhan layanan viral akibat salah paham, gabungkan penyelesaian konkret bagi warga dengan klarifikasi berbasis fakta dan perbaikan informasi sistemik.",
  },
  {
    id: "tkp-pel-082",
    subPattern: "dilema-layanan-krisis-dan-viral",
    difficulty: "sulit",
    prompt:
      "Seorang pemengaruh (influencer) melakukan siaran langsung dari ruang tunggu puskesmas sambil menuding petugas menelantarkan pasien BPJS, padahal dokter sedang menangani pasien gawat darurat henti napas di ruang tindakan. Sebagai penanggung jawab layanan ruang tunggu, sikap terbaik Anda adalah ...",
    options: [
      "Meminta petugas keamanan menghentikan siaran langsung tersebut secara tegas karena merekam aktivitas pengunjung di fasilitas kesehatan melanggar ketentuan privasi rumah sakit.",
      "Tetap fokus memanggil nomor antrean pasien secara normal agar tidak memberi panggung tambahan bagi perekaman yang bersifat provokatif di ruang tunggu utama.",
      "Mendekati pemengaruh secara ramah, menjelaskan dokter sedang menangani kasus gawat darurat di ruang tindakan, lalu memintanya menghentikan siaran demi kenyamanan seluruh pasien yang menunggu.",
      "Menyapa tenang di luar area privasi, memohon agar wajah pasien tidak disorot, menjelaskan situasi darurat, lalu mengatur pembaruan estimasi tunggu bersama kepala ruangan.",
      "Mencatat identitas pemengaruh tersebut secara rinci dan melaporkannya kepada kepala puskesmas agar diterbitkan teguran tertulis atas penyebaran informasi yang tidak akurat.",
    ],
    optionScores: [2, 1, 4, 5, 3],
    answer: "D",
    explanation:
      "Tindakan berskor 5 melindungi kerahasiaan pasien dengan komunikasi tenang, meluruskan fakta kegawatdaruratan secara transparan, sekaligus menghadirkan solusi sistemik berupa pembaruan estimasi waktu tunggu bagi seluruh pengunjung bersama kepala ruangan. Menjelaskan kondisi darurat dan meminta siaran dihentikan dengan sopan sudah tepat secara etika (skor 4), namun belum meredakan kegelisahan pasien lain yang sama-sama menunggu kepastian.",
    tip: "Di tengah sorotan kamera saat krisis layanan, jaga privasi warga, sampaikan fakta dengan tenang, dan beri kepastian waktu bagi seluruh antrean.",
  },
  {
    id: "tkp-pel-083",
    subPattern: "dilema-layanan-krisis-dan-viral",
    difficulty: "sulit",
    prompt:
      "Tangkapan layar balasan kanal WhatsApp resmi instansi Anda ramai dikritik warganet karena bahasanya terkesan ketus, padahal pesan tersebut berasal dari templat otomatis sistem saat staf lembur menangani ratusan aduan banjir. Sebagai pengelola kanal pengaduan, tindakan Anda adalah ...",
    options: [
      "Meninjau templat bersama tim dan humas, meminta maaf terbuka sembari menuntaskan aduan banjir, lalu merevisi redaksi otomatis agar empatik tanpa menyalahkan staf.",
      "Membalas unggahan warganet secara santun bahwa pesan tersebut merupakan format balasan otomatis sistem, lalu mengingatkan staf piket secara pribadi agar lebih cermat memilih kata saat merespons warga.",
      "Mengumpulkan seluruh bukti log sistem percakapan untuk dilaporkan kepada pimpinan guna memastikan tidak ada pelanggaran etika layanan oleh staf selama masa tanggap banjir.",
      "Menonaktifkan sementara fitur balasan otomatis di seluruh kanal pengaduan resmi sampai tim humas selesai merumuskan pedoman komunikasi krisis yang baru untuk petugas.",
      "Menyampaikan klarifikasi singkat di media sosial bahwa staf sedang kewalahan menangani ratusan aduan banjir sehingga masyarakat diminta memaklumi format pesan yang singkat.",
    ],
    optionScores: [5, 4, 3, 2, 1],
    answer: "A",
    explanation:
      "Tindakan berskor 5 mengakui ketidaknyamanan warga secara elegan, memastikan substansi aduan banjir tertangani, melindungi martabat staf, serta memperbaiki akar masalah pada templat sistem secara kolaboratif. Menjelaskan bahwa pesan berasal dari sistem otomatis sambil mengingatkan staf secara pribadi memang sopan (skor 4), tetapi terkesan defensif dan tidak memperbaiki templat otomatis yang memicu masalah.",
    tip: "Jangan bersembunyi di balik alasan sistem otomatis; akui ketidaknyamanan publik, tuntaskan aduannya, dan perbaiki akar templat layanan bersama tim.",
  },
  {
    id: "tkp-pel-084",
    subPattern: "dilema-layanan-krisis-dan-viral",
    difficulty: "sedang",
    prompt:
      "Peladen pusat sistem perizinan berusaha (OSS) mengalami gangguan nasional selama dua jam tepat ketika 90 pelaku UMKM memadati ruang layanan untuk mengejar batas akhir pengajuan bantuan modal daerah hari itu. Tindakan Anda yang paling tepat adalah ...",
    options: [
      "Menutup pengambilan nomor antrean baru untuk sementara waktu agar kepadatan ruang tunggu tidak melampaui kapasitas kursi selama sistem pusat masih mengalami gangguan.",
      "Meminta pelaku UMKM memantau pengumuman pemulihan jaringan melalui akun media sosial resmi instansi dan kembali datang ke kantor setelah sistem kembali normal.",
      "Mencatat seluruh keluhan pelaku UMKM dalam berita acara kendala teknis harian untuk dilaporkan secara berjenjang kepada pimpinan dinas pada sore hari.",
      "Menyampaikan status gangguan pusat dengan ramah kepada seluruh pemohon serta memandu pengecekan kelengkapan dokumen secara manual agar berkas siap diunggah begitu jaringan pulih.",
      "Mengumumkan gangguan secara berkala, membuka pra-verifikasi dan daftar antrean luring bersama tim, serta berkoordinasi dengan unit bantuan modal terkait bukti pendaftaran awal sesuai aturan.",
    ],
    optionScores: [2, 1, 3, 4, 5],
    answer: "E",
    explanation:
      "Tindakan berskor 5 tidak hanya menjaga ketenangan dan memeriksa berkas warga, tetapi juga menciptakan antrean luring terdata serta berkoordinasi lintas unit agar tenggat bantuan modal warga tidak hangus akibat gangguan pusat. Menginformasikan gangguan secara ramah dan mengecek dokumen manual sudah proaktif (skor 4), namun masih meninggalkan ketidakpastian batas waktu pengajuan bagi UMKM.",
    tip: "Ketika sistem pusat lumpuh menjelang tenggat warga, kombinasikan mitigasi luring di loket dengan koordinasi lintas unit agar hak pemohon terlindungi.",
  },
  {
    id: "tkp-pel-085",
    subPattern: "dilema-layanan-krisis-dan-viral",
    difficulty: "sulit",
    prompt:
      "Sistem verifikasi biometrik paspor mendadak melambat drastis akibat gangguan jaringan pusat saat ruang tunggu dipenuhi pemohon, sebagian di antaranya memiliki jadwal keberangkatan kerja luar negeri dalam hitungan hari. Sebagai pengawas loket, langkah terbaik Anda adalah ...",
    options: [
      "Mengalihkan seluruh pemohon yang jadwal keberangkatannya masih lama ke pekan depan secara sepihak agar fokus loket hanya melayani pekerja migran mendesak.",
      "Meminta seluruh pemohon tetap duduk tenang sambil menunggu pengumuman resmi dari pusat tanpa mengubah pola pemanggilan antrean yang sudah ditetapkan sejak pagi.",
      "Menerapkan pemilahan urgensi terverifikasi sesuai ketentuan, menugaskan pendamping pemberi pembaruan berkala, serta berkoordinasi dengan TI pusat dan pimpinan untuk jadwal ulang terjamin.",
      "Menyampaikan permohonan maaf atas perlambatan jaringan secara santun kepada seluruh pengunjung, lalu tetap memproses verifikasi biometrik satu per satu dengan sabar hingga koneksi kembali stabil.",
      "Membuka meja pengumpulan berkas fisik sementara di area informasi agar petugas loket dapat membantu menginput data permohonan pada hari kerja berikutnya.",
    ],
    optionScores: [2, 1, 5, 4, 3],
    answer: "C",
    explanation:
      "Tindakan berskor 5 menyeimbangkan kepatuhan SOP melalui pemilahan urgensi terverifikasi, transparansi informasi berkala, pendampingan ruang tunggu, serta koordinasi penjadwalan ulang terjamin bagi warga terdampak. Meminta maaf secara santun dan tetap bekerja sabar satu per satu mencerminkan dedikasi yang baik (skor 4), tetapi kurang responsif mengelola lonjakan antrean dan kasus mendesak yang berisiko gagal berangkat.",
    tip: "Dalam lonjakan antrean akibat gangguan teknis, bedakan kesabaran pasif dari manajemen krisis aktif yang memprioritaskan urgensi sah dan kepastian jadwal.",
  },
  {
    id: "tkp-pel-086",
    subPattern: "dilema-layanan-krisis-dan-viral",
    difficulty: "sedang",
    prompt:
      "Pada jadwal verifikasi pencairan bantuan sosial di kantor kecamatan, aplikasi verifikasi kementerian sulit diakses karena lonjakan trafik nasional sehingga puluhan warga lansia mulai gelisah dan berdesakan di pintu aula. Sikap Anda yang paling tepat adalah ...",
    options: [
      "Menyediakan kursi teduh dan air minum bagi lansia, menerbitkan nomor luring terverifikasi bersama kelurahan, serta melaporkan gangguan ke kanal teknis pusat.",
      "Menjelaskan secara santun melalui pengeras suara bahwa aplikasi kementerian sedang mengalami lonjakan trafik nasional lalu mengimbau seluruh warga duduk rapi menunggu hingga koneksi stabil.",
      "Meminta perangkat desa menampung kartu identitas warga lansia sementara agar mereka dapat beristirahat di teras luar sambil menunggu panggilan petugas loket.",
      "Mengusulkan penundaan jadwal verifikasi bantuan sosial ke keesokan hari demi menjaga keselamatan fisik warga lansia dari kepadatan di dalam aula kecamatan.",
      "Meminta petugas keamanan menutup separuh pintu aula untuk membatasi jumlah warga yang masuk sebelum sistem verifikasi kementerian kembali dapat diakses lancar.",
    ],
    optionScores: [5, 4, 3, 2, 1],
    answer: "A",
    explanation:
      "Tindakan berskor 5 menghadirkan kepedulian nyata terhadap kenyamanan fisik lansia, kepastian urutan melalui penomoran luring terverifikasi lintas tim kelurahan, dan eskalasi kendala teknis ke pusat. Menyampaikan imbauan santun lewat pengeras suara memang menjaga etika komunikasi (skor 4), namun belum mengatasi kelelahan fisik lansia maupun kepastian giliran yang membuat mereka gelisah.",
    tip: "Saat gangguan sistem memicu kerumunan kelompok rentan, utamakan kenyamanan fisik, kepastian antrean tertulis, dan eskalasi teknis secara paralel.",
  },
  {
    id: "tkp-pel-087",
    subPattern: "dilema-layanan-krisis-dan-viral",
    difficulty: "sedang",
    prompt:
      "Lima menit setelah bel penutupan loket administrasi kependudukan berbunyi, seorang ibu penyandang tunanetra bersama anaknya yang masih kecil tiba setelah menempuh perjalanan dua jam dari dusun terpencil untuk mengurus surat keterangan domisili syarat berobat besok pagi. Tindakan terbaik Anda adalah ...",
    options: [
      "Menyampaikan dengan sopan bahwa jam operasional loket telah berakhir sesuai maklumat resmi sehingga permohonan baru dapat dilayani mulai pukul delapan esok hari.",
      "Mengarahkan beliau mengurus surat pengantar terlebih dahulu melalui layanan daring kelurahan menggunakan ponsel agar tidak perlu menempuh perjalanan ke kantor kecamatan.",
      "Meminta izin petugas piket jaga untuk menyimpan salinan berkas beliau di map khusus agar dapat segera diletakkan di meja layanan keesokan paginya.",
      "Menyambut hangat, memohon izin pimpinan piket untuk menuntaskan berkas lewat loket prioritas sebelum sistem ditutup, serta menginfokan layanan jemput bola desa.",
      "Menyambut beliau dengan penuh kesopanan, memeriksa kelengkapan berkas saat itu juga, lalu mendaftarkannya pada urutan prioritas pertama esok pagi agar tidak perlu mengantre ulang.",
    ],
    optionScores: [2, 1, 3, 5, 4],
    answer: "D",
    explanation:
      "Tindakan berskor 5 mempertimbangkan hambatan akses, jarak tempuh, dan kebutuhan berobat esok pagi dengan meminta izin pimpinan piket menyelesaikan layanan sebelum sistem harian ditutup, sekaligus membuka informasi layanan jemput bola untuk keberlanjutan. Mengecek berkas dan memberi prioritas esok pagi memang ramah dan patuh jam loket (skor 4), tetapi tetap membebani ibu tunanetra menempuh perjalanan dua jam lagi di hari berobat.",
    tip: "Bagi warga rentan dengan kebutuhan mendesak di ambang tutup loket, optimalkan diskresi prosedural atas izin pimpinan sebelum sistem benar-benar ditutup.",
  },
  {
    id: "tkp-pel-088",
    subPattern: "dilema-layanan-krisis-dan-viral",
    difficulty: "sulit",
    prompt:
      "Sepuluh menit menjelang penutupan loket pelayanan pajak daerah dan setelah kas bank persepsi di kantor tutup buku, seorang kakek pengguna kursi roda datang membawa uang tunai untuk melunasi tunggakan demi syarat pencairan dana pensiun almarhum istrinya. Sikap paling tepat Anda adalah ...",
    options: [
      "Menjelaskan secara santun bahwa kas bank persepsi telah tutup buku, tetap mencetakkan kode bayar resmi, lalu menyarankan beliau menyetorkannya melalui gerai mitra pembayaran terdekat sebelum pulang.",
      "Melayani di ruang aksesibel, menerbitkan kode bayar resmi dan mendampingi pembayaran via kanal resmi aktif tanpa menerima titipan uang, lalu melapor ke supervisor untuk evaluasi jam kas.",
      "Menerima uang tunai tersebut secara pribadi dengan bukti kuitansi sementara agar kakek tidak perlu bolak-balik, lalu menyetorkannya ke kas bank keesokan paginya.",
      "Meminta nomor telepon anggota keluarga atau kerabat beliau agar petugas dapat membantu menghubungi mereka untuk melakukan pembayaran melalui perbankan bergerak dari rumah.",
      "Menyampaikan permohonan maaf bahwa transaksi pembayaran sudah tidak dapat diproses sore itu dan menjadwalkan layanan pendampingan khusus di pagi hari berikutnya.",
    ],
    optionScores: [4, 5, 1, 3, 2],
    answer: "B",
    explanation:
      "Tindakan berskor 5 menuntaskan urusan warga rentan di tempat melalui kanal pembayaran resmi yang masih aktif tanpa melanggar larangan titip uang tunai, sekaligus mendorong evaluasi keselarasan jam kas dan loket. Mencetakkan kode bayar dan menyarankan gerai mitra terdekat memang sopan dan patuh aturan (skor 4), tetapi masih membiarkan pengguna kursi roda berpindah tempat sendiri di sore hari.",
    tip: "Tolak jalan pintas ilegal seperti menitip uang tunai, namun dampingi warga rentan menuntaskan transaksi lewat kanal resmi yang masih aktif.",
  },
  {
    id: "tkp-pel-089",
    subPattern: "dilema-layanan-krisis-dan-viral",
    difficulty: "sedang",
    prompt:
      "Pada menit terakhir jam pendaftaran rawat jalan rumah sakit daerah, seorang pemohon penyandang tuli datang seorang diri dan tampak kebingungan memahami penjelasan lisan mengenai syarat rujukan berjenjang yang kurang satu lembar salinan. Langkah terbaik Anda adalah ...",
    options: [
      "Meminta petugas keamanan mengantar beliau ke gerai fotokopi di luar area rumah sakit agar salinan berkas rujukan dapat segera dilengkapi sebelum pulang.",
      "Menunjukkan poster alur pendaftaran pasien rujukan yang terpasang di dinding ruang tunggu sambil memberi isyarat tangan agar dibaca secara perlahan.",
      "Meminta beliau menuliskan nomor telepon keluarga di secarik kertas agar petugas dapat menelepon kerabatnya untuk menjelaskan kekurangan syarat pendaftaran.",
      "Tetap melayani dengan ramah dan penuh kesabaran, lalu menuliskan daftar kekurangan berkas rujukan dengan huruf besar yang jelas di selembar kertas untuk dilengkapi pada kunjungan berikutnya.",
      "Melayani tenang lewat media tulis atau juru bahasa isyarat daring resmi, mengecek rujukan elektronik di sistem faskes agar tak bolak-balik, lalu mengusulkan panduan visual ramah tuli.",
    ],
    optionScores: [2, 1, 3, 4, 5],
    answer: "E",
    explanation:
      "Tindakan berskor 5 menggunakan komunikasi aksesibel, memanfaatkan data rujukan elektronik untuk menyelesaikan kendala salinan saat itu juga, serta mengusulkan panduan visual ramah tuli bagi loket secara berkelanjutan. Menuliskan daftar kekurangan berkas secara jelas sudah empatik dan aksesibel (skor 4), tetapi belum mengecek solusi data elektronik yang sebenarnya dapat menghindarkan pemohon dari bolak-balik.",
    tip: "Pelayanan inklusif tidak berhenti pada komunikasi yang ramah, melainkan menuntaskan hambatan administratif lewat sistem resmi dan memperbaiki sarana aksesibilitas.",
  },
  {
    id: "tkp-pel-090",
    subPattern: "dilema-layanan-krisis-dan-viral",
    difficulty: "sulit",
    prompt:
      "Perwakilan perusahaan logistik mendesak agar surat keterangan laik edar komoditas pangan segar diterbitkan dalam satu jam karena truk pengiriman terancam gagal naik kapal, padahal hasil uji residu laboratorium masih menunggu validasi akhir analis resmi. Sikap terbaik Anda adalah ...",
    options: [
      "Menerbitkan surat keterangan bersyarat terlebih dahulu agar pengiriman tidak merugi besar dengan komitmen tertulis perusahaan bersedia menarik produk bila hasil uji bermasalah.",
      "Menyampaikan secara tegas bahwa batas jadwal kapal bukan tanggung jawab instansi sehingga pemohon seharusnya mengajukan permohonan jauh-jauh hari sebelum pengiriman.",
      "Menjelaskan wajibnya validasi laboratorium sesuai SOP, berkoordinasi dengan kepala laboratorium untuk prioritas verifikasi antrean resmi, dan memberi estimasi waktu terbit secara jujur.",
      "Menolak permintaan percepatan di luar prosedur secara tegas namun sopan, lalu meminta perwakilan perusahaan memantau notifikasi otomatis di aplikasi begitu validasi analis selesai diunggah.",
      "Meneruskan keluhan mendesak perwakilan perusahaan tersebut kepada atasan langsung agar pimpinan memutuskan apakah pengecualian penerbitan surat sementara dapat diberikan.",
    ],
    optionScores: [1, 2, 5, 4, 3],
    answer: "C",
    explanation:
      "Tindakan berskor 5 menjaga batas tegas keselamatan publik dan kepatuhan SOP, sekaligus proaktif berkoordinasi dengan unit laboratorium dan memberikan estimasi waktu yang akurat agar pemohon dapat mengambil keputusan logistik. Menolak dengan sopan lalu menyuruh menunggu notifikasi otomatis memang patuh prosedur (skor 4), namun pasif dan tidak membantu memberi kepastian waktu di situasi genting.",
    tip: "Jangan pernah melompati verifikasi keselamatan dalam SOP, tetapi tunjukkan responsivitas melalui koordinasi percepatan internal yang sah dan kepastian estimasi waktu.",
  },
  {
    id: "tkp-pel-091",
    subPattern: "dilema-layanan-krisis-dan-viral",
    difficulty: "sedang",
    prompt:
      "Seorang warga mengurus legalisasi akta kelahiran untuk pendaftaran beasiswa yang tutup sore ini, namun Anda menemukan selisih satu huruf nama orang tua antara akta dan kartu keluarga yang berisiko membuat berkas ditolak bila langsung dilegalisasi tanpa tindak lanjut. Langkah paling tepat Anda adalah ...",
    options: [
      "Menyampaikan selisih data dengan empati, memproses opsi sah hari itu seperti surat keterangan atau jalur koreksi kilat resmi sesuai SOP, sekaligus memandu perbaikan permanen.",
      "Menjelaskan secara ramah dan rinci bahwa legalisasi belum dapat dilakukan sebelum nama pada kedua dokumen seragam, lalu menyerahkan formulir pembetulan data kependudukan agar segera diisi pemohon.",
      "Tetap melegalisasi fotokopi akta sesuai dokumen asli yang dibawa pemohon agar ia tidak terlambat mendaftar beasiswa tanpa perlu mempersoalkan kartu keluarganya.",
      "Meminta pemohon mengonfirmasi langsung ke panitia beasiswa apakah perbedaan satu huruf tersebut dipermasalahkan sebelum kembali lagi mengurus berkas di loket.",
      "Menolak berkas secara langsung dan menyarankan pemohon mengurus penetapan perubahan nama terlebih dahulu supaya dokumen kependudukan tidak bermasalah di kemudian hari.",
    ],
    optionScores: [5, 4, 2, 3, 1],
    answer: "A",
    explanation:
      "Tindakan berskor 5 menjaga akurasi administrasi tanpa membiarkan peluang beasiswa warga gugur begitu saja, dengan memfasilitasi dokumen sah sementara atau jalur koreksi cepat resmi plus panduan perbaikan permanen. Menjelaskan ketentuan dengan ramah dan memberi formulir pembetulan memang tertib SOP (skor 4), namun berhenti pada penolakan halus tanpa menggali opsi sah untuk tenggat hari itu.",
    tip: "Saat menemukan cacat administrasi menjelang tenggat kritis warga, kombinasikan kepatuhan verifikasi dengan penelusuran jalur koreksi resmi yang tersedia.",
  },
  {
    id: "tkp-pel-092",
    subPattern: "dilema-layanan-krisis-dan-viral",
    difficulty: "sulit",
    prompt:
      "Di tengah dorongan percepatan realisasi bantuan alat usaha mikro yang menjadi target kinerja pimpinan daerah pekan ini, Anda menemukan sepuluh berkas calon penerima belum melampirkan berita acara verifikasi lapangan RT/RW meski profil usahanya tampak meyakinkan. Sikap Anda yang paling tepat adalah ...",
    options: [
      "Meloloskan sepuluh berkas tersebut terlebih dahulu demi mengejar target realisasi pimpinan dengan syarat berita acara verifikasi lapangan disusulkan bulan depan.",
      "Menahan pencairan seluruh kelompok penerima tahap ini sampai sepuluh berkas yang kurang tersebut lengkap agar penyaluran bantuan berlangsung serentak.",
      "Mengembalikan sepuluh berkas tersebut kepada pengusul melalui surat pemberitahuan sopan bahwa pencairan hanya dapat diproses pada tahap berikutnya setelah verifikasi lapangan lengkap.",
      "Menahan sepuluh berkas sesuai SOP, menggerakkan verifikasi cepat terukur bersama pendamping dan kelurahan tanpa menunda berkas lengkap lain, lalu melapor objektif ke pimpinan.",
      "Melaporkan temuan sepuluh berkas yang belum melampirkan berita acara lapangan secara tertulis kepada pimpinan lalu menunggu arahan sebelum mengambil tindakan.",
    ],
    optionScores: [1, 2, 4, 5, 3],
    answer: "D",
    explanation:
      "Tindakan berskor 5 menegakkan akuntabilitas verifikasi SOP, tidak merugikan penerima lain yang sudah lengkap, sekaligus proaktif menggerakkan verifikasi lapangan cepat bersama kelurahan dan melapor transparan kepada pimpinan. Mengembalikan berkas secara sopan untuk diproses tahap berikutnya memang patuh aturan (skor 4), tetapi cenderung pasif dan menunda hak pelaku usaha yang sebenarnya masih bisa diverifikasi secara sah.",
    tip: "Tekanan target kecepatan tidak boleh mengorbankan syarat verifikasi; pisahkan berkas siap cair dan percepat verifikasi sah bagi berkas yang kurang.",
  },
  {
    id: "tkp-pel-093",
    subPattern: "dilema-layanan-krisis-dan-viral",
    difficulty: "sedang",
    prompt:
      "Seorang pengusaha katering datang tergesa-gesa mengurus sertifikat laik higiene sanitasi untuk syarat tender pekan depan dan menanyakan apakah ada biaya jalur cepat karena khawatir standar waktu layanan lima hari kerja tidak cukup. Tindakan paling tepat Anda adalah ...",
    options: [
      "Menyampaikan secara singkat bahwa layanan pemerintah tidak mengenal jalur cepat sehingga semua pemohon wajib antre tertib sesuai urutan berkas masuk.",
      "Menyarankan pemohon mencari jasa konsultan pengurusan perizinan di luar kantor apabila menginginkan proses penyiapan persyaratan berlangsung lebih ringkas.",
      "Mencatat permohonan pemohon pada buku registrasi biasa sambil berjanji akan mencoba meminta tim lapangan mendahulukan jadwal inspeksinya jika ada waktu luang.",
      "Menolak tegas namun santun tawaran biaya jalur cepat, menunjukkan papan maklumat tarif resmi dan standar layanan lima hari kerja, lalu mempersilakan pemohon mendaftar melalui loket reguler.",
      "Menjelaskan tarif resmi tanpa biaya tambahan dan alur lima hari kerja, langsung mengecek kelengkapan berkasnya agar bebas revisi, serta memantau ketepatan SLA bersama tim inspeksi.",
    ],
    optionScores: [2, 1, 3, 4, 5],
    answer: "E",
    explanation:
      "Tindakan berskor 5 menegakkan transparansi bebas pungli, mengedukasi alur SLA resmi, sekaligus bertindak proaktif memeriksa kelengkapan awal agar tidak ada penundaan akibat revisi dan menjaga ketepatan SLA bersama tim. Menolak biaya jalur cepat secara santun dan menunjukkan papan maklumat sudah bersih dan patuh aturan (skor 4), namun berhenti pada penyampaian aturan tanpa membantu mencegah hambatan administratif.",
    tip: "Saat warga terdesak menanyakan jalur cepat berbayar, tegaskan tarif resmi lalu bantu mengoptimalkan ketepatan SLA lewat pengecekan berkas sejak awal.",
  },
  {
    id: "tkp-pel-094",
    subPattern: "dilema-layanan-krisis-dan-viral",
    difficulty: "sedang",
    prompt:
      "Seorang warga yang kehilangan sertifikat tanah akibat kebakaran rumah panik menanyakan biaya dan lama penerbitan sertifikat pengganti, lalu mengaku baru saja ditawari perantara di luar gerbang bahwa berkas bisa terbit tiga hari dengan membayar sejumlah uang. Langkah paling tepat Anda adalah ...",
    options: [
      "Menyampaikan dengan sopan agar warga tidak menggunakan jasa perantara di luar kantor, lalu menyerahkan brosur resmi berisi rincian tarif PNBP dan alur pengurusan sertifikat pengganti untuk dipelajari.",
      "Menenangkan warga, menjelaskan rincian biaya resmi PNBP dan tahapan waktu SOP, mendampingi penyusunan daftar cek berkas awal, serta melaporkan indikasi calo ke pengawasan internal.",
      "Mengingatkan warga secara tegas bahwa segala bentuk transaksi pembayaran di luar loket resmi merupakan risiko pribadi pemohon apabila terjadi penipuan di kemudian hari.",
      "Meminta warga menuliskan kronologi tawaran perantara tersebut secara rinci pada kotak saran kantor agar dapat dibahas pimpinan dalam rapat evaluasi layanan bulanan.",
      "Meminta petugas keamanan segera mengusir orang yang dicurigai sebagai perantara di depan gerbang tanpa perlu memperpanjang penjelasan rincian teknis kepada pemohon.",
    ],
    optionScores: [4, 5, 2, 3, 1],
    answer: "B",
    explanation:
      "Tindakan berskor 5 menenangkan kondisi psikologis korban musibah, memberi transparansi penuh biaya dan SLA, mendampingi cek berkas awal secara langsung, serta melaporkan praktik percaloan secara berjenjang ke pengawasan internal. Menasihati secara sopan dan menyerahkan brosur resmi sudah informatif dan bersih (skor 4), namun kurang pendampingan langsung bagi warga panik dan membiarkan praktik calo tidak tertangani.",
    tip: "Melindungi warga dari percaloan menuntut tiga langkah serentak: transparansi biaya-SLA, pendampingan berkas langsung, dan pelaporan ke pengawasan internal.",
  },
  {
    id: "tkp-pel-095",
    subPattern: "dilema-layanan-krisis-dan-viral",
    difficulty: "sulit",
    prompt:
      "Menjelang batas akhir pengajuan izin keramaian acara amal komunitas lokal, terbit revisi persyaratan teknis dari instansi pembina yang membuat estimasi waktu terbit bertambah dua hari melampaui standar pada brosur lama yang dipegang panitia. Sikap terbaik Anda adalah ...",
    options: [
      "Tetap memproses izin memakai ketentuan brosur lama agar panitia tidak kecewa karena perubahan aturan teknis baru saja diterima kantor pekan ini.",
      "Menyampaikan bahwa brosur lama sudah tidak berlaku lagi dan meminta panitia segera menunda tanggal acara amal mereka sampai seluruh syarat baru terpenuhi.",
      "Meminta maaf atas brosur lama, menjelaskan syarat dan SLA terbaru secara jujur, mendampingi pemenuhan berkas paralel bersama tim verifikasi, lalu memperbarui brosur dan kanal digital.",
      "Menjelaskan perubahan regulasi instansi pembina secara santun kepada panitia sambil menunjukkan dasar surat edaran terbaru beserta estimasi waktu baru agar syarat tambahan dilengkapi terlebih dahulu.",
      "Meneruskan keberatan panitia acara amal tersebut kepada pimpinan unit agar diberikan penjelasan tertulis mengenai penyesuaian jadwal penerbitan izin sesuai regulasi baru.",
    ],
    optionScores: [1, 2, 5, 4, 3],
    answer: "C",
    explanation:
      "Tindakan berskor 5 menggabungkan akuntabilitas atas informasi usang, transparansi penuh terhadap aturan dan SLA baru, pendampingan pemenuhan syarat paralel bersama tim, sekaligus pembaruan sistemik pada brosur dan kanal informasi publik. Menjelaskan regulasi dan surat edaran terbaru secara santun sudah jujur dan patuh SOP (skor 4), namun tidak membantu mitigasi waktu secara paralel maupun memperbaiki materi informasi yang masih beredar.",
    tip: "Ketika regulasi berubah dan informasi lama masih beredar, akui ketidaksesuaiannya, bantu pemenuhan paralel sesuai SOP, dan segera perbarui kanal informasi publik.",
  },
];
