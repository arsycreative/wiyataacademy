import type { Metadata } from "next";
import Link from "next/link";
import { ShieldCheck, FileText, ArrowLeft, Building2, CreditCard, RefreshCw, Mail } from "lucide-react";

import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { Button } from "@/components/ui/button";
import { APP_ROUTES } from "@/shared/constants/app";

export const metadata: Metadata = {
  title: "Syarat & Ketentuan, Kebijakan Privasi, dan Pengembalian Dana",
  description:
    "Informasi hukum, kepemilikan platform oleh Arsy Studio, ketentuan transaksi pembayaran Midtrans, dan kebijakan pengembalian dana Wiyata Edu.",
};

export default function TermsAndRefundPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#f8fbff] text-slate-950">
      <SiteHeader />

      <main className="mx-auto w-full max-w-4xl flex-1 px-5 py-12 sm:px-8">
        <div className="mb-6">
          <Button
            asChild
            variant="ghost"
            size="sm"
            className="-ml-2 text-blue-700 hover:bg-blue-50"
          >
            <Link href={APP_ROUTES.home}>
              <ArrowLeft className="size-4" aria-hidden />
              Kembali ke Beranda
            </Link>
          </Button>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-10">
          {/* Header Title */}
          <div className="border-b border-slate-100 pb-8">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
              <ShieldCheck className="size-3.5" aria-hidden />
              Informasi Legal &amp; Kepatuhan Merchant
            </span>
            <h1 className="mt-4 text-2xl font-extrabold tracking-tight text-slate-950 sm:text-3xl">
              Ketentuan Layanan, Kebijakan Pembayaran &amp; Pengembalian Dana
            </h1>
            <p className="mt-2 text-sm text-slate-500">
              Terakhir diperbarui: {new Date().toLocaleDateString("id-ID", { month: "long", year: "numeric" })}
            </p>
          </div>

          <div className="mt-8 space-y-10 text-sm leading-relaxed text-slate-700 sm:text-base">
            {/* 1. Kepemilikan & Identitas Pengelola */}
            <section className="space-y-3">
              <div className="flex items-center gap-2 text-lg font-bold text-slate-950">
                <Building2 className="size-5 text-blue-600" aria-hidden />
                <h2>1. Identitas Usaha &amp; Kepemilikan Platform</h2>
              </div>
              <p>
                Platform <strong>Wiyata Edu</strong> (<code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs text-blue-700">wiyataacademy.netlify.app</code>) adalah produk dan layanan pembelajaran digital yang dimiliki, dikembangkan, dan dioperasikan sepenuhnya oleh:
              </p>
              <div className="rounded-xl border border-blue-100 bg-blue-50/50 p-4 font-medium text-slate-900">
                <p className="font-bold text-blue-900">Arsy Studio</p>
                <p className="text-xs text-slate-600 sm:text-sm">
                  Pengembang Perangkat Lunak, Solusi Digital, dan Penyedia Konten Edukasi Interaktif
                </p>
                <p className="mt-2 text-xs text-slate-500">
                  Email Dukungan Pelanggan: <a href="mailto:support@wiyataacademy.com" className="text-blue-700 underline">support@wiyataacademy.com</a> / <a href="mailto:kontak.arsystudio@gmail.com" className="text-blue-700 underline">kontak.arsystudio@gmail.com</a>
                </p>
              </div>
              <p>
                Dengan mendaftar, mengakses, atau membeli paket belajar pada platform ini, Anda menyetujui seluruh ketentuan dan perjanjian yang ditetapkan oleh <strong>Arsy Studio</strong>.
              </p>
            </section>

            {/* 2. Ketentuan Transaksi Pembayaran */}
            <section className="space-y-3">
              <div className="flex items-center gap-2 text-lg font-bold text-slate-950">
                <CreditCard className="size-5 text-blue-600" aria-hidden />
                <h2>2. Ketentuan Transaksi &amp; Gerbang Pembayaran (Midtrans)</h2>
              </div>
              <ul className="list-disc space-y-2 pl-5">
                <li>
                  Seluruh transaksi pembayaran untuk paket belajar Wiyata Edu ditagihkan atas nama merchant <strong>Arsy Studio</strong> dan diproses secara aman melalui gerbang pembayaran berlisensi Bank Indonesia, <strong>Midtrans (PT Midtrans)</strong>.
                </li>
                <li>
                  Metode pembayaran resmi yang didukung meliputi Virtual Account (BCA, BNI, BRI, Mandiri, Permata), QRIS (GoPay, ShopeePay, OVO, Dana, LinkAja), dan Kartu Kredit/Debit (Visa / Mastercard).
                </li>
                <li>
                  Harga yang tertera pada halaman <Link href="/paket" className="text-blue-700 underline font-semibold">Paket Belajar</Link> adalah harga final dalam mata uang Rupiah (IDR). Tidak ada pungutan tersembunyi.
                </li>
                <li>
                  Setelah pembayaran berhasil diverifikasi oleh sistem Midtrans, akses paket belajar digital Anda akan aktif secara instan dan otomatis tanpa perlu verifikasi manual.
                </li>
              </ul>
            </section>

            {/* 3. Kebijakan Pengembalian Dana */}
            <section className="space-y-3">
              <div className="flex items-center gap-2 text-lg font-bold text-slate-950">
                <RefreshCw className="size-5 text-blue-600" aria-hidden />
                <h2>3. Kebijakan Pengembalian Dana (Refund Policy)</h2>
              </div>
              <p>
                Arsy Studio berkomitmen memberikan layanan edukasi berkualitas tinggi. Kami memberlakukan kebijakan pengembalian dana sebagai berikut:
              </p>
              <ul className="list-disc space-y-2 pl-5">
                <li>
                  <strong>Garansi 7 Hari (Paket Premium):</strong> Khusus untuk pembelian <em>Paket Premium SKD CPNS</em>, pengguna berhak mengajukan pengembalian dana penuh dalam jangka waktu maksimal 7 (tujuh) hari kalender sejak tanggal transaksi jika materi dan sistem tidak sesuai dengan deskripsi program.
                </li>
                <li>
                  <strong>Gangguan Sistem / Duplikasi Transaksi:</strong> Jika terjadi kesalahan teknis seperti pemotongan saldo ganda (*double charge*) atau akses gagal aktif akibat kendala sistem, Arsy Studio akan memproses pengembalian dana 100% atau mengaktifkan pesanan secara manual dalam waktu 1x24 jam kerja.
                </li>
                <li>
                  <strong>Cara Pengajuan Refund:</strong> Kirimkan email ke <a href="mailto:support@wiyataacademy.com" className="text-blue-700 underline font-medium">support@wiyataacademy.com</a> dengan subjek <code>Pengajuan Refund - [Order ID]</code> disertai bukti transaksi Midtrans dan alasan pengajuan. Tim Arsy Studio akan memverifikasi dan memproses permohonan dalam waktu 3–5 hari kerja.
                </li>
              </ul>
            </section>

            {/* 4. Kebijakan Privasi & Keamanan Data */}
            <section className="space-y-3">
              <div className="flex items-center gap-2 text-lg font-bold text-slate-950">
                <FileText className="size-5 text-blue-600" aria-hidden />
                <h2>4. Kebijakan Privasi &amp; Perlindungan Data</h2>
              </div>
              <p>
                Kami menghormati privasi Anda. Data pengguna seperti nama, alamat email, dan riwayat pengerjaan soal hanya digunakan untuk keperluan operasional akun, personalisasi analitik belajar, dan pengiriman notifikasi transaksi.
              </p>
              <p>
                Arsy Studio <strong>tidak pernah menyimpan</strong> data sensitif perbankan pengguna (seperti nomor lengkap kartu kredit atau kode CVV). Semua proses transmisi data keuangan dienkripsi menggunakan protokol SSL 256-bit dan ditangani langsung oleh sistem tersertifikasi PCI-DSS milik Midtrans.
              </p>
            </section>

            {/* 5. Layanan Pelanggan & Kontak */}
            <section className="space-y-3">
              <div className="flex items-center gap-2 text-lg font-bold text-slate-950">
                <Mail className="size-5 text-blue-600" aria-hidden />
                <h2>5. Kontak Layanan Pelanggan &amp; Pengaduan</h2>
              </div>
              <p>
                Jika Anda memiliki pertanyaan seputar transaksi, materi pembelajaran, atau membutuhkan bantuan teknis, silakan hubungi tim kami:
              </p>
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-xs sm:text-sm">
                <p><strong>Merchant Pengelola:</strong> Arsy Studio</p>
                <p><strong>Platform:</strong> Wiyata Edu (wiyataacademy.netlify.app)</p>
                <p><strong>Email Layanan:</strong> support@wiyataacademy.com / kontak.arsystudio@gmail.com</p>
                <p><strong>Jam Operasional Bantuan:</strong> Senin – Sabtu, 08.00 – 20.00 WIB</p>
                <p><strong>Domisili:</strong> Indonesia</p>
              </div>
            </section>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}

