import { chromium } from "@playwright/test";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, "..");
const baseUrl = process.env.BASE_URL ?? "http://localhost:3000";
const docsDir = path.join(rootDir, "docs");
const assetsDir = path.join(docsDir, "transaction-flow-assets");
const outputHtml = path.join(docsDir, "wiyata-academy-transaction-flow-payment.html");
const outputPdf = path.join(docsDir, "wiyata-academy-transaction-flow-payment.pdf");
const logoPath = path.join(rootDir, "public/logo.png");
const logoDataUrl = toPngDataUrl(await readFile(logoPath));

const viewport = { width: 1440, height: 1100 };
const documentDate = new Intl.DateTimeFormat("id-ID", {
  dateStyle: "long",
  timeZone: "Asia/Jakarta",
}).format(new Date());

const stepAssets = [
  {
    id: "01-katalog-kelas",
    title: "Customer memilih kelas dari katalog",
    description:
      "Customer membuka halaman katalog Wiyata Academy, melihat produk kursus yang tersedia, lalu memilih kelas TOEFL Intensive Preparation.",
    type: "url",
    path: "/",
  },
  {
    id: "02-detail-kelas",
    title: "Customer membaca detail produk kelas",
    description:
      "Halaman detail menampilkan informasi kelas, manfaat, materi, banner kursus, status published, dan CTA untuk lanjut ke proses pembelian.",
    type: "url",
    path: "/courses/toefl-intensive-preparation",
  },
  {
    id: "03-checkout-ringkasan-pesanan",
    title: "Customer masuk ke halaman checkout",
    description:
      "Checkout menampilkan ringkasan pesanan, nama kursus, harga dalam Rupiah, benefit, dan tombol Bayar & gabung kelas.",
    type: "url",
    path: "/checkout/toefl-intensive-preparation",
  },
  {
    id: "04-login-sebelum-bayar",
    title: "Customer login sebelum transaksi dibuat",
    description:
      "Jika belum login, customer diarahkan ke halaman login agar transaksi, payment, dan enrollment tercatat ke akun yang benar.",
    type: "url",
    path: "/sign-in?callbackUrl=%2Fcheckout%2Ftoefl-intensive-preparation",
  },
  {
    id: "05-payment-gateway-checkout",
    title: "Customer menyelesaikan pembayaran",
    description:
      "Setelah klik Bayar & gabung kelas, backend membuat payment session dan customer diarahkan ke halaman checkout pembayaran.",
    type: "mock-payment-gateway",
  },
  {
    id: "06-status-pembayaran-berhasil",
    title: "Customer kembali ke status pembayaran",
    description:
      "Setelah webhook/status payment menjadi paid, halaman payment menampilkan pembayaran berhasil dan tombol Mulai Belajar.",
    type: "mock-payment-success",
  },
];

await mkdir(assetsDir, { recursive: true });

const browser = await chromium.launch();
const page = await browser.newPage({ viewport, deviceScaleFactor: 1 });
page.setDefaultTimeout(30_000);

const screenshotMap = new Map();

for (const step of stepAssets) {
  const screenshotPath = path.join(assetsDir, `${step.id}.png`);

  if (step.type === "url") {
    await page.goto(`${baseUrl}${step.path}`, { waitUntil: "networkidle" });
    await page.waitForTimeout(900);
    await page.screenshot({ path: screenshotPath, fullPage: false });
  }

  if (step.type === "mock-payment-gateway") {
    await page.setContent(renderPaymentGatewaySandboxMock(), { waitUntil: "networkidle" });
    await page.screenshot({ path: screenshotPath, fullPage: false });
  }

  if (step.type === "mock-payment-success") {
    await page.setContent(renderPaymentSuccessMock(), { waitUntil: "networkidle" });
    await page.screenshot({ path: screenshotPath, fullPage: false });
  }

  screenshotMap.set(step.id, toPngDataUrl(await readFile(screenshotPath)));
}

const documentHtml = renderDocumentHtml();

await page.setContent(documentHtml, { waitUntil: "networkidle" });
await page.waitForFunction(() =>
  Array.from(document.images).every((image) => image.complete && image.naturalWidth > 0),
);
await page.pdf({
  path: outputPdf,
  format: "A4",
  printBackground: true,
  margin: {
    top: "12mm",
    right: "12mm",
    bottom: "12mm",
    left: "12mm",
  },
});
await writeFile(outputHtml, documentHtml, "utf8");

await browser.close();

console.log(`PDF berhasil dibuat: ${outputPdf}`);
console.log(`Screenshot tersimpan: ${assetsDir}`);

function screenshotUrl(stepId) {
  return screenshotMap.get(stepId);
}

function toPngDataUrl(buffer) {
  return `data:image/png;base64,${buffer.toString("base64")}`;
}

function renderDocumentHtml() {
  const stepCards = stepAssets
    .map(
      (step, index) => `
        <section class="step">
          <div class="step-kicker">Step ${index + 1}</div>
          <h2>${escapeHtml(step.title)}</h2>
          <p>${escapeHtml(step.description)}</p>
          <img src="${screenshotUrl(step.id)}" alt="${escapeHtml(step.title)}" />
        </section>
      `,
    )
    .join("");

  return `
    <!doctype html>
    <html lang="id">
      <head>
        <meta charset="utf-8" />
        <title>Flow Transaksi Wiyata Academy</title>
        <style>
          @page {
            size: A4;
            margin: 12mm;
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

          .cover {
            display: grid;
            min-height: 88vh;
            align-content: center;
            gap: 28px;
            page-break-after: always;
          }

          .brand {
            display: flex;
            align-items: center;
            gap: 14px;
            color: #0b2f73;
            font-size: 22px;
            font-weight: 800;
          }

          .brand img {
            width: 190px;
            height: auto;
          }

          .cover h1 {
            max-width: 760px;
            margin: 0;
            color: #081437;
            font-size: 48px;
            line-height: 1.08;
            letter-spacing: 0;
          }

          .cover p {
            max-width: 660px;
            margin: 0;
            color: #52617e;
            font-size: 18px;
          }

          .meta-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 14px;
            max-width: 820px;
          }

          .meta {
            min-height: 98px;
            border: 1px solid #dce6f6;
            border-radius: 18px;
            padding: 18px;
            background: #f8fbff;
          }

          .meta span {
            display: block;
            margin-bottom: 8px;
            color: #61708f;
            font-size: 12px;
            font-weight: 700;
            letter-spacing: 0.08em;
            text-transform: uppercase;
          }

          .meta strong {
            color: #081437;
            font-size: 17px;
          }

          .note {
            max-width: 820px;
            border-left: 5px solid #0b63ff;
            border-radius: 14px;
            padding: 18px 20px;
            background: #eef5ff;
            color: #31415f;
            font-size: 14px;
          }

          .flow-summary {
            display: grid;
            gap: 14px;
            page-break-after: always;
          }

          .flow-summary h2,
          .step h2 {
            margin: 0;
            color: #081437;
            font-size: 26px;
            line-height: 1.2;
          }

          .flow-summary ol {
            display: grid;
            gap: 12px;
            margin: 0;
            padding: 0;
            list-style: none;
            counter-reset: flow;
          }

          .flow-summary li {
            display: grid;
            grid-template-columns: 48px 1fr;
            gap: 14px;
            align-items: start;
            min-height: 72px;
            border: 1px solid #dce6f6;
            border-radius: 18px;
            padding: 16px;
            background: #ffffff;
            box-shadow: 0 16px 48px rgba(13, 47, 104, 0.08);
            counter-increment: flow;
          }

          .flow-summary li::before {
            display: grid;
            width: 42px;
            height: 42px;
            place-items: center;
            border-radius: 14px;
            background: #0b63ff;
            color: white;
            content: counter(flow);
            font-weight: 800;
          }

          .flow-summary strong {
            display: block;
            margin-bottom: 4px;
            color: #081437;
            font-size: 16px;
          }

          .flow-summary span {
            color: #52617e;
            font-size: 14px;
          }

          .step {
            page-break-after: always;
          }

          .step-kicker {
            width: max-content;
            margin-bottom: 12px;
            border-radius: 999px;
            padding: 7px 12px;
            background: #eaf2ff;
            color: #0b63ff;
            font-size: 12px;
            font-weight: 800;
            letter-spacing: 0.08em;
            text-transform: uppercase;
          }

          .step p {
            max-width: 760px;
            margin: 10px 0 18px;
            color: #52617e;
            font-size: 15px;
          }

          .step img {
            width: 100%;
            max-height: 620px;
            border: 1px solid #dce6f6;
            border-radius: 18px;
            object-fit: cover;
            object-position: top center;
            box-shadow: 0 18px 56px rgba(13, 47, 104, 0.12);
          }

          .closing {
            display: grid;
            min-height: 88vh;
            align-content: center;
            gap: 18px;
          }

          .closing h2 {
            max-width: 760px;
            margin: 0;
            font-size: 36px;
            line-height: 1.15;
          }

          .closing p {
            max-width: 760px;
            margin: 0;
            color: #52617e;
            font-size: 17px;
          }
        </style>
      </head>
      <body>
        <section class="cover">
          <div class="brand">
            <img src="${logoDataUrl}" alt="Wiyata Academy" />
          </div>
          <div>
            <h1>Flow Transaksi Pemesanan Kelas sampai Checkout Pembayaran</h1>
            <p>
              Dokumen ini menunjukkan journey pembayaran Wiyata Academy dari katalog kursus,
              checkout, login, redirect payment, hingga status pembayaran berhasil.
            </p>
          </div>
          <div class="meta-grid">
            <div class="meta">
              <span>Platform</span>
              <strong>Wiyata Academy</strong>
            </div>
            <div class="meta">
              <span>Produk</span>
              <strong>TOEFL Intensive Preparation</strong>
            </div>
            <div class="meta">
              <span>Tanggal</span>
              <strong>${documentDate}</strong>
            </div>
          </div>
          <div class="note">
            Screenshot aplikasi diambil dari frontend lokal Wiyata Academy. Tampilan checkout pembayaran pada
            dokumen ini adalah representasi sandbox untuk dokumentasi alur transaksi.
          </div>
        </section>

        <section class="flow-summary">
          <h2>Ringkasan Flow</h2>
          <ol>
            <li>
              <div>
                <strong>Pilih produk kelas</strong>
                <span>Customer membuka katalog dan memilih kursus published yang memiliki harga IDR.</span>
              </div>
            </li>
            <li>
              <div>
                <strong>Lihat detail kelas</strong>
                <span>Customer membaca informasi kursus, benefit, syllabus, dan instruktur.</span>
              </div>
            </li>
            <li>
              <div>
                <strong>Masuk checkout</strong>
                <span>Checkout menampilkan ringkasan pesanan, harga, dan benefit pembelian.</span>
              </div>
            </li>
            <li>
              <div>
                <strong>Login atau daftar</strong>
                <span>Jika belum login, customer harus autentikasi supaya payment dan enrollment memiliki owner.</span>
              </div>
            </li>
            <li>
              <div>
                <strong>Buat payment session</strong>
                <span>Backend membuat transaksi dan mengirim customer ke halaman checkout pembayaran.</span>
              </div>
            </li>
            <li>
              <div>
                <strong>Bayar di payment gateway</strong>
                <span>Customer memilih metode pembayaran dan menyelesaikan instruksi pembayaran.</span>
              </div>
            </li>
            <li>
              <div>
                <strong>Status berhasil</strong>
                <span>Webhook/status paid membuka akses kelas dan customer bisa mulai belajar.</span>
              </div>
            </li>
          </ol>
        </section>

        ${stepCards}

        <section class="closing">
          <h2>Catatan Implementasi</h2>
          <p>
            Flow ini memenuhi kebutuhan dokumentasi transaksi: terdapat produk/jasa yang dijual, harga
            dalam IDR, proses pemesanan sampai checkout, serta titik integrasi pembayaran digital.
          </p>
        </section>
      </body>
    </html>
  `;
}

function renderPaymentGatewaySandboxMock() {
  return `
    <!doctype html>
    <html lang="id">
      <head>
        <meta charset="utf-8" />
        <style>
          * { box-sizing: border-box; }
          body {
            display: grid;
            min-height: 100vh;
            place-items: center;
            margin: 0;
            background: linear-gradient(135deg, #edf5ff 0%, #f7fbff 52%, #e8f0ff 100%);
            color: #17233c;
            font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          }
          .browser {
            width: min(1120px, calc(100vw - 80px));
            overflow: hidden;
            border: 1px solid #dbe5f4;
            border-radius: 28px;
            background: #ffffff;
            box-shadow: 0 34px 90px rgba(12, 40, 90, 0.18);
          }
          .bar {
            display: flex;
            align-items: center;
            gap: 8px;
            border-bottom: 1px solid #e6edf7;
            padding: 16px 22px;
            background: #f8fbff;
          }
          .dot { width: 12px; height: 12px; border-radius: 50%; background: #d7dfed; }
          .dot:nth-child(1) { background: #ff6b6b; }
          .dot:nth-child(2) { background: #ffcd4d; }
          .dot:nth-child(3) { background: #2fd276; }
          .content {
            display: grid;
            grid-template-columns: 1fr 420px;
            min-height: 700px;
          }
          .left {
            padding: 44px;
            background: #ffffff;
          }
          .right {
            padding: 44px;
            background: #0b63ff;
            color: white;
          }
          .badge {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            border-radius: 999px;
            padding: 8px 12px;
            background: #eaf2ff;
            color: #0b63ff;
            font-size: 14px;
            font-weight: 800;
          }
          h1 {
            margin: 26px 0 8px;
            color: #101a33;
            font-size: 36px;
            line-height: 1.12;
            letter-spacing: 0;
          }
          p { margin: 0; color: #5d6b84; font-size: 16px; }
          .method-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 14px;
            margin-top: 32px;
          }
          .method {
            min-height: 118px;
            border: 1px solid #dbe5f4;
            border-radius: 18px;
            padding: 18px;
            background: #fbfdff;
          }
          .method strong { display: block; margin-bottom: 10px; color: #101a33; font-size: 17px; }
          .method span { color: #62708b; font-size: 14px; }
          .selected {
            border-color: #0b63ff;
            box-shadow: inset 0 0 0 2px rgba(11, 99, 255, 0.12);
          }
          .summary {
            display: grid;
            gap: 18px;
            margin-top: 34px;
          }
          .row {
            display: flex;
            justify-content: space-between;
            gap: 24px;
            border-bottom: 1px solid rgba(255,255,255,0.25);
            padding-bottom: 16px;
          }
          .row span { color: rgba(255,255,255,0.78); }
          .row strong { text-align: right; }
          .amount {
            margin: 24px 0 0;
            font-size: 44px;
            line-height: 1;
          }
          .pay {
            display: grid;
            width: 100%;
            height: 58px;
            place-items: center;
            margin-top: 36px;
            border: 0;
            border-radius: 16px;
            background: white;
            color: #0b63ff;
            font-size: 17px;
            font-weight: 850;
          }
          .sandbox {
            margin-top: 18px;
            color: rgba(255,255,255,0.78);
            font-size: 13px;
            line-height: 1.5;
          }
        </style>
      </head>
      <body>
        <main class="browser">
          <div class="bar">
            <div class="dot"></div>
            <div class="dot"></div>
            <div class="dot"></div>
          </div>
          <section class="content">
            <div class="left">
              <div class="badge">Sandbox Payment Checkout</div>
              <h1>Pilih metode pembayaran</h1>
              <p>Order ID: WYATA-TOEFL-20260621-001</p>
              <div class="method-grid">
                <div class="method selected">
                  <strong>Bank Transfer</strong>
                  <span>BCA, Mandiri, BNI, BRI, Permata</span>
                </div>
                <div class="method">
                  <strong>QRIS</strong>
                  <span>Bayar cepat dengan scan QR</span>
                </div>
                <div class="method">
                  <strong>Kartu Kredit</strong>
                  <span>Visa, Mastercard, JCB</span>
                </div>
                <div class="method">
                  <strong>E-Wallet</strong>
                  <span>GoPay, ShopeePay, DANA</span>
                </div>
              </div>
            </div>
            <aside class="right">
              <p style="color: rgba(255,255,255,0.78);">Ringkasan pesanan</p>
              <h2 style="margin: 12px 0 4px; font-size: 26px;">TOEFL Intensive Preparation</h2>
              <p style="color: rgba(255,255,255,0.78);">Wiyata Academy</p>
              <div class="summary">
                <div class="row"><span>Harga kursus</span><strong>Rp 249.000</strong></div>
                <div class="row"><span>Biaya admin</span><strong>Rp 0</strong></div>
                <div class="row"><span>Total</span><strong>Rp 249.000</strong></div>
              </div>
              <div class="amount">Rp 249.000</div>
              <button class="pay">Bayar Sekarang</button>
              <div class="sandbox">
                Tampilan ini adalah representasi sandbox untuk dokumentasi flow checkout.
              </div>
            </aside>
          </section>
        </main>
      </body>
    </html>
  `;
}

function renderPaymentSuccessMock() {
  return `
    <!doctype html>
    <html lang="id">
      <head>
        <meta charset="utf-8" />
        <style>
          * { box-sizing: border-box; }
          body {
            min-height: 100vh;
            margin: 0;
            background: #f6f9ff;
            color: #071330;
            font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          }
          header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            height: 78px;
            border-bottom: 1px solid #dde7f5;
            padding: 0 72px;
            background: white;
          }
          header img { width: 180px; height: auto; }
          main {
            display: grid;
            min-height: calc(100vh - 78px);
            place-items: center;
            padding: 60px 72px;
          }
          .card {
            width: min(860px, 100%);
            border: 1px solid #dce6f6;
            border-radius: 28px;
            padding: 44px;
            background: white;
            box-shadow: 0 28px 80px rgba(13, 47, 104, 0.12);
          }
          .icon {
            display: grid;
            width: 76px;
            height: 76px;
            place-items: center;
            border-radius: 24px;
            background: #e9f8ef;
            color: #11a05d;
            font-size: 38px;
            font-weight: 900;
          }
          h1 {
            margin: 24px 0 10px;
            font-size: 40px;
            line-height: 1.12;
            letter-spacing: 0;
          }
          p {
            max-width: 640px;
            margin: 0;
            color: #5b6984;
            font-size: 17px;
            line-height: 1.55;
          }
          .summary {
            display: grid;
            gap: 14px;
            margin: 30px 0;
            border: 1px solid #dce6f6;
            border-radius: 20px;
            padding: 22px;
            background: #f9fbff;
          }
          .row {
            display: flex;
            justify-content: space-between;
            gap: 24px;
            color: #52617e;
          }
          .row strong { color: #081437; text-align: right; }
          .actions {
            display: flex;
            gap: 14px;
            align-items: center;
          }
          .primary {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            height: 54px;
            border-radius: 15px;
            padding: 0 28px;
            background: #0b63ff;
            color: white;
            font-weight: 850;
            text-decoration: none;
          }
          .secondary {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            height: 54px;
            border: 1px solid #cdd9eb;
            border-radius: 15px;
            padding: 0 28px;
            color: #0b2f73;
            font-weight: 800;
            text-decoration: none;
          }
        </style>
      </head>
      <body>
        <header>
          <img src="${logoDataUrl}" alt="Wiyata Academy" />
          <strong>Status Pembayaran</strong>
        </header>
        <main>
          <section class="card">
            <div class="icon">✓</div>
            <h1>Pembayaran berhasil</h1>
            <p>
              Payment dari payment gateway sudah terkonfirmasi. Akses kelas TOEFL Intensive Preparation
              sudah aktif di akun customer.
            </p>
            <div class="summary">
              <div class="row"><span>Status</span><strong>Paid</strong></div>
              <div class="row"><span>Kursus</span><strong>TOEFL Intensive Preparation</strong></div>
              <div class="row"><span>Total dibayar</span><strong>Rp 249.000</strong></div>
              <div class="row"><span>Provider Reference</span><strong>PAYMENT-SANDBOX-20260621</strong></div>
            </div>
            <div class="actions">
              <a class="primary" href="#">Mulai Belajar</a>
              <a class="secondary" href="#">Lihat Riwayat Pembayaran</a>
            </div>
          </section>
        </main>
      </body>
    </html>
  `;
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
