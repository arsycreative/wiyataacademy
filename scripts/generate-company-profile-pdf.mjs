import { chromium } from "@playwright/test";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, "..");
const docsDir = path.join(rootDir, "docs");
const outputHtml = path.join(docsDir, "wiyata-academy-company-profile.html");
const outputPdf = path.join(docsDir, "wiyata-academy-company-profile.pdf");

const logoDataUrl = await pngDataUrl(path.join(rootDir, "public/logo.png"));
const homeScreenshot = await pngDataUrl(
  path.join(docsDir, "transaction-flow-assets/01-katalog-kelas.png"),
);
const courseScreenshot = await pngDataUrl(
  path.join(docsDir, "transaction-flow-assets/02-detail-kelas.png"),
);
const checkoutScreenshot = await pngDataUrl(
  path.join(docsDir, "transaction-flow-assets/03-checkout-ringkasan-pesanan.png"),
);

const documentDate = new Intl.DateTimeFormat("id-ID", {
  dateStyle: "long",
  timeZone: "Asia/Jakarta",
}).format(new Date());

await mkdir(docsDir, { recursive: true });

const html = renderHtml();
await writeFile(outputHtml, html, "utf8");

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1200, height: 1600 }, deviceScaleFactor: 1 });
page.setDefaultTimeout(30_000);
await page.setContent(html, { waitUntil: "networkidle" });
await page.waitForFunction(() =>
  Array.from(document.images).every((image) => image.complete && image.naturalWidth > 0),
);
await page.pdf({
  path: outputPdf,
  format: "A4",
  printBackground: true,
  margin: {
    top: "0mm",
    right: "0mm",
    bottom: "0mm",
    left: "0mm",
  },
});
await browser.close();

console.log(`PDF berhasil dibuat: ${outputPdf}`);
console.log(`HTML berhasil dibuat: ${outputHtml}`);

async function pngDataUrl(filePath) {
  return `data:image/png;base64,${(await readFile(filePath)).toString("base64")}`;
}

function renderHtml() {
  return `
    <!doctype html>
    <html lang="id">
      <head>
        <meta charset="utf-8" />
        <title>Company Profile Wiyata Academy</title>
        <style>
          @page {
            size: A4;
            margin: 0;
          }

          * {
            box-sizing: border-box;
          }

          body {
            margin: 0;
            background: #ffffff;
            color: #071330;
            font-family:
              Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
              sans-serif;
            line-height: 1.45;
          }

          .page {
            position: relative;
            display: grid;
            width: 210mm;
            min-height: 297mm;
            overflow: hidden;
            padding: 22mm;
            page-break-after: always;
            background:
              radial-gradient(circle at 86% 10%, rgba(11, 99, 255, 0.12), transparent 32%),
              linear-gradient(180deg, #ffffff 0%, #f8fbff 100%);
          }

          .page:last-child {
            page-break-after: auto;
          }

          .cover {
            align-content: space-between;
            background:
              radial-gradient(circle at 90% 18%, rgba(35, 187, 255, 0.18), transparent 35%),
              radial-gradient(circle at 14% 82%, rgba(11, 99, 255, 0.16), transparent 32%),
              #ffffff;
          }

          .cover-mark {
            position: absolute;
            right: -42mm;
            bottom: 16mm;
            width: 126mm;
            height: 126mm;
            border-radius: 50%;
            background: rgba(11, 99, 255, 0.06);
          }

          .brand {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 18px;
            position: relative;
            z-index: 1;
          }

          .brand img {
            width: 190px;
            height: auto;
          }

          .doc-label {
            border: 1px solid #dbe6f7;
            border-radius: 999px;
            padding: 9px 13px;
            background: rgba(255, 255, 255, 0.82);
            color: #53617c;
            font-size: 12px;
            font-weight: 800;
            letter-spacing: 0.08em;
            text-transform: uppercase;
          }

          .hero {
            position: relative;
            z-index: 1;
            display: grid;
            gap: 22px;
            max-width: 720px;
          }

          .eyebrow {
            width: max-content;
            border-radius: 999px;
            padding: 9px 13px;
            background: #eaf2ff;
            color: #0b63ff;
            font-size: 12px;
            font-weight: 850;
            letter-spacing: 0.08em;
            text-transform: uppercase;
          }

          h1,
          h2,
          h3,
          p {
            margin: 0;
          }

          h1 {
            color: #081437;
            font-size: 58px;
            line-height: 1.02;
            letter-spacing: 0;
          }

          .hero p {
            max-width: 650px;
            color: #4e5e7b;
            font-size: 20px;
          }

          .meta-grid {
            position: relative;
            z-index: 1;
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 14px;
          }

          .meta-card,
          .card,
          .image-card,
          .metric,
          .feature,
          .timeline-item {
            border: 1px solid #dce6f6;
            background: rgba(255, 255, 255, 0.9);
            box-shadow: 0 18px 50px rgba(13, 47, 104, 0.08);
          }

          .meta-card {
            min-height: 98px;
            border-radius: 18px;
            padding: 17px;
            background: #ffffff;
            box-shadow: none;
          }

          .meta-card span,
          .metric span {
            display: block;
            margin-bottom: 8px;
            color: #687894;
            font-size: 11px;
            font-weight: 850;
            letter-spacing: 0.08em;
            text-transform: uppercase;
          }

          .meta-card strong {
            color: #081437;
            font-size: 16px;
          }

          .section {
            align-content: start;
            gap: 22px;
          }

          .section-header {
            display: grid;
            gap: 9px;
            max-width: 760px;
          }

          h2 {
            color: #081437;
            font-size: 34px;
            line-height: 1.12;
            letter-spacing: 0;
          }

          .section-header p {
            color: #53617c;
            font-size: 16px;
          }

          .two-col {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 18px;
            align-items: start;
          }

          .three-col {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 16px;
          }

          .card {
            border-radius: 20px;
            padding: 20px;
          }

          .card h3 {
            margin-bottom: 8px;
            color: #081437;
            font-size: 20px;
            line-height: 1.25;
          }

          .card p,
          .card li,
          .feature p,
          .timeline-item p {
            color: #53617c;
            font-size: 14px;
          }

          .card ul {
            display: grid;
            gap: 10px;
            margin: 14px 0 0;
            padding: 0;
            list-style: none;
          }

          .card li {
            display: grid;
            grid-template-columns: 22px 1fr;
            gap: 9px;
          }

          .card li::before {
            display: grid;
            width: 22px;
            height: 22px;
            place-items: center;
            border-radius: 50%;
            background: #eaf2ff;
            color: #0b63ff;
            content: "✓";
            font-size: 12px;
            font-weight: 900;
          }

          .metric-grid {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 14px;
          }

          .metric {
            border-radius: 18px;
            padding: 18px;
          }

          .metric strong {
            color: #0b63ff;
            font-size: 26px;
            line-height: 1;
          }

          .image-card {
            overflow: hidden;
            border-radius: 22px;
          }

          .image-card img {
            display: block;
            width: 100%;
            height: 238px;
            object-fit: cover;
            object-position: top center;
          }

          .image-card .caption {
            padding: 13px 15px;
            color: #53617c;
            font-size: 13px;
          }

          .product {
            display: grid;
            grid-template-columns: 1.1fr 0.9fr;
            gap: 18px;
            align-items: stretch;
          }

          .price-card {
            display: grid;
            align-content: center;
            border-radius: 24px;
            padding: 26px;
            background: linear-gradient(135deg, #0b63ff, #23bfff);
            color: white;
            box-shadow: 0 22px 60px rgba(11, 99, 255, 0.25);
          }

          .price-card span {
            color: rgba(255, 255, 255, 0.78);
            font-size: 13px;
            font-weight: 800;
            letter-spacing: 0.08em;
            text-transform: uppercase;
          }

          .price-card strong {
            margin-top: 10px;
            font-size: 42px;
            line-height: 1;
          }

          .feature-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 14px;
          }

          .feature {
            display: grid;
            gap: 10px;
            border-radius: 18px;
            padding: 18px;
          }

          .feature strong {
            color: #081437;
            font-size: 16px;
          }

          .timeline {
            display: grid;
            gap: 12px;
          }

          .timeline-item {
            display: grid;
            grid-template-columns: 44px 1fr;
            gap: 13px;
            border-radius: 18px;
            padding: 15px;
          }

          .timeline-number {
            display: grid;
            width: 42px;
            height: 42px;
            place-items: center;
            border-radius: 14px;
            background: #0b63ff;
            color: white;
            font-weight: 900;
          }

          .timeline-item strong {
            display: block;
            margin-bottom: 4px;
            color: #081437;
          }

          .contact {
            align-content: center;
            background:
              radial-gradient(circle at 72% 18%, rgba(35, 187, 255, 0.16), transparent 36%),
              #071330;
            color: white;
          }

          .contact h2 {
            color: white;
            font-size: 44px;
          }

          .contact p {
            color: rgba(255, 255, 255, 0.76);
            font-size: 17px;
          }

          .contact-card {
            display: grid;
            gap: 12px;
            max-width: 720px;
            margin-top: 26px;
            border: 1px solid rgba(255, 255, 255, 0.16);
            border-radius: 24px;
            padding: 24px;
            background: rgba(255, 255, 255, 0.08);
          }

          .contact-row {
            display: flex;
            justify-content: space-between;
            gap: 18px;
            border-bottom: 1px solid rgba(255, 255, 255, 0.14);
            padding-bottom: 12px;
          }

          .contact-row:last-child {
            border-bottom: 0;
            padding-bottom: 0;
          }

          .contact-row span {
            color: rgba(255, 255, 255, 0.58);
          }

          .contact-row strong {
            text-align: right;
            color: white;
          }
        </style>
      </head>
      <body>
        <section class="page cover">
          <div class="cover-mark"></div>
          <header class="brand">
            <img src="${logoDataUrl}" alt="Wiyata Academy" />
            <div class="doc-label">Company Profile</div>
          </header>

          <main class="hero">
            <div class="eyebrow">Online Learning Platform</div>
            <h1>Wiyata Academy</h1>
            <p>
              Platform kursus online yang membantu pelajar dan profesional meningkatkan kompetensi
              melalui katalog kelas, pembelajaran terstruktur, checkout aman, dan akses belajar digital.
            </p>
          </main>

          <div class="meta-grid">
            <div class="meta-card">
              <span>Industri</span>
              <strong>Education Technology</strong>
            </div>
            <div class="meta-card">
              <span>Layanan</span>
              <strong>Kursus Online dan Persiapan Ujian</strong>
            </div>
            <div class="meta-card">
              <span>Dokumen</span>
              <strong>${documentDate}</strong>
            </div>
          </div>
        </section>

        <section class="page section">
          <div class="section-header">
            <div class="eyebrow">Overview</div>
            <h2>Tentang Wiyata Academy</h2>
            <p>
              Wiyata Academy dikembangkan sebagai platform pembelajaran digital untuk menghubungkan
              peserta belajar dengan kursus yang relevan, mudah dibeli, dan dapat diakses secara online.
            </p>
          </div>

          <div class="two-col">
            <div class="card">
              <h3>Fokus Platform</h3>
              <p>
                Wiyata Academy berfokus pada kursus berbasis outcome, terutama persiapan ujian,
                keterampilan akademik, bahasa, dan materi pendukung belajar mandiri.
              </p>
              <ul>
                <li>Katalog kursus yang mudah dipindai.</li>
                <li>Detail kelas dengan benefit, materi, harga, dan status publikasi.</li>
                <li>Checkout digital dengan harga IDR dan integrasi pembayaran.</li>
                <li>Ruang belajar untuk akses materi setelah pembayaran berhasil.</li>
              </ul>
            </div>

            <div class="card">
              <h3>Visi dan Misi</h3>
              <p>
                Visi Wiyata Academy adalah menjadi platform belajar yang praktis dan terpercaya
                untuk membantu pengguna mencapai target akademik maupun profesional.
              </p>
              <ul>
                <li>Menyediakan kelas online yang rapi, terstruktur, dan mudah diikuti.</li>
                <li>Membuat proses pembelian kelas transparan dan aman.</li>
                <li>Mendukung pengelolaan kursus yang scalable untuk kebutuhan bisnis jangka panjang.</li>
              </ul>
            </div>
          </div>

          <div class="metric-grid">
            <div class="metric">
              <span>Produk awal</span>
              <strong>TOEFL</strong>
            </div>
            <div class="metric">
              <span>Mata uang</span>
              <strong>IDR</strong>
            </div>
            <div class="metric">
              <span>Akses</span>
              <strong>Online</strong>
            </div>
            <div class="metric">
              <span>Payment</span>
              <strong>Gateway</strong>
            </div>
          </div>
        </section>

        <section class="page section">
          <div class="section-header">
            <div class="eyebrow">Product and Service</div>
            <h2>Produk yang Dijual</h2>
            <p>
              Produk utama pada fase awal adalah kursus online berbayar. Setiap kursus memiliki
              halaman detail, harga dalam Rupiah, checkout, dan akses belajar setelah transaksi sukses.
            </p>
          </div>

          <div class="product">
            <div class="card">
              <h3>TOEFL Intensive Preparation</h3>
              <p>
                Kursus persiapan TOEFL yang membantu peserta memahami strategi listening, structure,
                reading, dan latihan yang relevan untuk meningkatkan kesiapan ujian.
              </p>
              <ul>
                <li>Akses penuh ke materi dan video pembelajaran.</li>
                <li>Materi latihan dan pembahasan lengkap.</li>
                <li>Sertifikat kelulusan sebagai bukti penyelesaian.</li>
                <li>Dukungan instruktur untuk proses belajar.</li>
              </ul>
            </div>

            <div class="price-card">
              <span>Harga Kursus</span>
              <strong>Rp 249.000</strong>
              <p style="margin-top: 14px; color: rgba(255,255,255,0.78); font-size: 14px;">
                Pembayaran sekali bayar untuk akses kelas online.
              </p>
            </div>
          </div>

          <div class="two-col">
            <div class="image-card">
              <img src="${homeScreenshot}" alt="Katalog kursus Wiyata Academy" />
              <div class="caption">Katalog kursus menampilkan produk yang tersedia untuk pengguna.</div>
            </div>
            <div class="image-card">
              <img src="${courseScreenshot}" alt="Detail kursus Wiyata Academy" />
              <div class="caption">Halaman detail membantu pengguna memahami value sebelum checkout.</div>
            </div>
          </div>
        </section>

        <section class="page section">
          <div class="section-header">
            <div class="eyebrow">Platform Features</div>
            <h2>Fitur Utama Platform</h2>
            <p>
              Platform dibangun untuk kebutuhan LMS yang dapat berkembang: katalog publik,
              autentikasi, checkout, ruang belajar, dan dashboard admin.
            </p>
          </div>

          <div class="feature-grid">
            <div class="feature">
              <strong>Katalog Kursus Publik</strong>
              <p>Pengguna dapat melihat daftar kursus published, detail kelas, harga, dan benefit.</p>
            </div>
            <div class="feature">
              <strong>Auth dan Akun Pengguna</strong>
              <p>Login dan registrasi digunakan untuk menghubungkan transaksi dengan pemilik akun.</p>
            </div>
            <div class="feature">
              <strong>Checkout Berbayar</strong>
              <p>Checkout menampilkan ringkasan pesanan, harga IDR, dan flow pembayaran.</p>
            </div>
            <div class="feature">
              <strong>My Learning</strong>
              <p>Setelah pembayaran sukses, pengguna diarahkan ke akses pembelajaran kelas.</p>
            </div>
            <div class="feature">
              <strong>Admin Course Management</strong>
              <p>Admin dapat mengelola kursus, status draft/published, harga, thumbnail, dan lesson.</p>
            </div>
            <div class="feature">
              <strong>Admin Payment View</strong>
              <p>Admin dapat melihat transaksi, status payment, user, course, amount, dan provider reference.</p>
            </div>
          </div>

          <div class="image-card">
            <img src="${checkoutScreenshot}" alt="Checkout Wiyata Academy" />
            <div class="caption">Checkout menampilkan harga kursus dalam IDR dan alur transaksi yang jelas.</div>
          </div>
        </section>

        <section class="page section">
          <div class="section-header">
            <div class="eyebrow">Business Flow</div>
            <h2>Model Transaksi</h2>
            <p>
              Flow transaksi dirancang sederhana: pengguna memilih kelas, memastikan detail,
              login atau daftar akun, lalu menyelesaikan pembayaran melalui payment gateway.
            </p>
          </div>

          <div class="two-col">
            <div class="timeline">
              <div class="timeline-item">
                <div class="timeline-number">1</div>
                <div>
                  <strong>Pilih kursus</strong>
                  <p>Pengguna membuka katalog dan memilih kelas yang sesuai kebutuhan.</p>
                </div>
              </div>
              <div class="timeline-item">
                <div class="timeline-number">2</div>
                <div>
                  <strong>Cek detail dan harga</strong>
                  <p>Pengguna membaca informasi kelas dan melihat harga dalam Rupiah.</p>
                </div>
              </div>
              <div class="timeline-item">
                <div class="timeline-number">3</div>
                <div>
                  <strong>Checkout</strong>
                  <p>Pengguna masuk ke ringkasan pesanan dan menekan tombol bayar.</p>
                </div>
              </div>
              <div class="timeline-item">
                <div class="timeline-number">4</div>
                <div>
                  <strong>Bayar via payment gateway</strong>
                  <p>Payment session dibuat dan pengguna diarahkan ke halaman pembayaran digital.</p>
                </div>
              </div>
              <div class="timeline-item">
                <div class="timeline-number">5</div>
                <div>
                  <strong>Akses kelas</strong>
                  <p>Jika status paid, enrollment aktif dan pengguna dapat mulai belajar.</p>
                </div>
              </div>
            </div>

            <div class="image-card">
              <img src="${checkoutScreenshot}" alt="Checkout pembayaran Wiyata Academy" />
              <div class="caption">Ringkasan pembayaran menampilkan produk, harga IDR, dan instruksi checkout.</div>
            </div>
          </div>
        </section>

        <section class="page section">
          <div class="section-header">
            <div class="eyebrow">Technology</div>
            <h2>Fondasi Teknologi</h2>
            <p>
              Wiyata Academy dikembangkan dengan pemisahan frontend dan backend agar mudah
              dikembangkan, diuji, dan diskalakan.
            </p>
          </div>

          <div class="three-col">
            <div class="card">
              <h3>Frontend</h3>
              <p>Next.js App Router, TypeScript, Tailwind CSS, dan komponen UI modern untuk pengalaman web responsif.</p>
            </div>
            <div class="card">
              <h3>Backend</h3>
              <p>NestJS modular clean architecture dengan use case, repository, JWT auth, dan validasi DTO.</p>
            </div>
            <div class="card">
              <h3>Database</h3>
              <p>PostgreSQL dengan Prisma ORM untuk struktur data user, course, lesson, enrollment, quiz, dan payment.</p>
            </div>
          </div>

          <div class="two-col">
            <div class="card">
              <h3>Keamanan dan Akses</h3>
              <ul>
                <li>Protected route untuk dashboard, admin, dan payment status.</li>
                <li>JWT dan refresh token untuk autentikasi backend.</li>
                <li>Ownership check untuk data payment milik user.</li>
                <li>Role-based access untuk student, instructor, dan admin.</li>
              </ul>
            </div>
            <div class="card">
              <h3>Rencana Pengembangan</h3>
              <ul>
                <li>Integrasi payment gateway production setelah onboarding disetujui.</li>
                <li>Upload media kursus dan manajemen konten pembelajaran.</li>
                <li>Quiz, progress tracking, sertifikat, dan analytics pembelajaran.</li>
                <li>Pengelolaan instructor dan katalog multi-kategori.</li>
              </ul>
            </div>
          </div>
        </section>

        <section class="page contact">
          <div>
            <img src="${logoDataUrl}" alt="Wiyata Academy" style="width: 210px; height: auto; margin-bottom: 34px;" />
            <div class="eyebrow" style="background: rgba(255,255,255,0.12); color: #8bdcff;">Contact</div>
            <h2 style="margin-top: 18px;">Wiyata Academy</h2>
            <p style="max-width: 680px; margin-top: 12px;">
              Company profile ini dibuat untuk memperkenalkan Wiyata Academy sebagai platform
              kursus online dengan proses pembelian kelas, checkout, dan pembayaran digital.
            </p>

            <div class="contact-card">
              <div class="contact-row">
                <span>Nama Platform</span>
                <strong>Wiyata Academy</strong>
              </div>
              <div class="contact-row">
                <span>Bidang Usaha</span>
                <strong>Kursus Online dan Education Technology</strong>
              </div>
              <div class="contact-row">
                <span>Produk Utama</span>
                <strong>TOEFL Intensive Preparation</strong>
              </div>
              <div class="contact-row">
                <span>Kontak Resmi</span>
                <strong>Disesuaikan dengan data legal usaha</strong>
              </div>
            </div>
          </div>
        </section>
      </body>
    </html>
  `;
}
