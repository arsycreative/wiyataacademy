import type { Metadata } from "next";
import { CreditCard, ShieldCheck, Sparkles } from "lucide-react";

import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { getCurrentUserEntitlements } from "@/modules/payment/infrastructure/entitlements.server";
import { PricingGridClient } from "@/modules/payment/presentation/pricing-grid-client";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Pilihan Paket Belajar & Simulasi SKD CPNS",
  description:
    "Investasi terbaik persiapan seleksi CPNS & Kedinasan. Akses ribuan bank soal HOTS, simulasi CAT resmi, cheat sheet trik cepat, dan sprint drill.",
};

const IS_SANDBOX = process.env.MIDTRANS_IS_PRODUCTION !== "true";

export default async function PricingPage() {
  const entitlements = await getCurrentUserEntitlements();

  return (
    <div className="min-h-screen bg-[#f8fbff] text-slate-950">
      <SiteHeader />

      <main className="relative overflow-hidden py-14 sm:py-20">
        <div
          aria-hidden
          className="pointer-events-none absolute right-[-10rem] top-10 h-[30rem] w-[30rem] rounded-full opacity-60 [background-image:radial-gradient(#bad7ff_1.5px,transparent_1.5px)] [background-size:18px_18px]"
        />

        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          {/* Header Section */}
          <div className="text-center">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-blue-200 bg-blue-50 px-3.5 py-1 text-xs font-semibold text-blue-700">
              <Sparkles className="size-3.5" aria-hidden />
              Investasi Masa Depan CASN
            </span>
            <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
              Pilih Paket Sesuai Target Belajarmu
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-base text-slate-600 sm:text-lg">
              Semua paket memberikan akses tanpa batas ke bank soal berstandar BKN terbaru,
              pembahasan taktis, dan simulasi CAT realtime.
            </p>

            {IS_SANDBOX && (
              <div className="mx-auto mt-6 inline-flex items-center gap-2 rounded-lg border border-amber-200 bg-amber-50 px-4 py-2 text-xs font-medium text-amber-800">
                <ShieldCheck className="size-4 shrink-0 text-amber-600" aria-hidden />
                <span>
                  <strong>Mode Verifikasi Midtrans Sandbox:</strong> Transaksi menggunakan simulator &amp; kartu dummy. Tidak ada pemotongan saldo nyata.
                </span>
              </div>
            )}
          </div>

          <PricingGridClient ownedProductIds={entitlements.activeProductIds} />

          {/* Payment Methods Supported */}
          <div className="mt-16 rounded-2xl border border-slate-200 bg-white p-6 text-center sm:p-8">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-500">
              Metode Pembayaran Resmi Didukung Midtrans
            </h4>
            <p className="mt-1 text-xs text-slate-400">
              Transaksi diproses secara aman dengan enkripsi bank-grade 256-bit SSL
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-xs font-medium text-slate-700">
              <PaymentBadge name="BCA Virtual Account" />
              <PaymentBadge name="BNI Virtual Account" />
              <PaymentBadge name="BRI Virtual Account" />
              <PaymentBadge name="Mandiri Bill" />
              <PaymentBadge name="Permata VA" />
              <PaymentBadge name="QRIS (Semua E-Wallet)" />
              <PaymentBadge name="GoPay" />
              <PaymentBadge name="ShopeePay" />
              <PaymentBadge name="Visa / Mastercard" />
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mx-auto mt-16 max-w-3xl">
            <h3 className="text-center text-2xl font-bold text-slate-950">
              Pertanyaan Seputar Pembayaran &amp; Akses
            </h3>

            <div className="mt-8 space-y-4">
              <FaqItem
                question="Bagaimana cara aktivasi setelah pembayaran selesai?"
                answer="Aktivasi berjalan otomatis secara realtime begitu pembayaran Anda diverifikasi oleh Midtrans. Anda dapat langsung membuka seluruh materi, sprint drill, dan try out tanpa perlu konfirmasi manual."
              />
              <FaqItem
                question="Apakah ada biaya langganan bulanan?"
                answer="Tidak ada. Seluruh paket Wiyata Academy berlaku sekali bayar (one-time purchase) untuk akses selamanya tanpa perpanjangan berkala."
              />
              <FaqItem
                question="Bagaimana jika transaksi saya tertunda atau mengalami kendala?"
                answer="Anda dapat memeriksa status pesanan di halaman Akun Saya. Jika saldo sudah terpotong namun status belum berubah, hubungi tim support dengan melampirkan Order ID Anda untuk dibantu seketika."
              />
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}

function PaymentBadge({ name }: { name: string }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs text-slate-700">
      <CreditCard className="size-3.5 text-slate-400" aria-hidden />
      {name}
    </span>
  );
}

function FaqItem({ question, answer }: { question: string; answer: string }) {
  return (
    <details className="group rounded-xl border border-slate-200 bg-white p-5 transition [&_summary::-webkit-details-marker]:hidden">
      <summary className="flex cursor-pointer items-center justify-between font-semibold text-slate-900">
        <span>{question}</span>
        <span className="ml-4 shrink-0 text-slate-400 transition group-open:rotate-180">
          ▼
        </span>
      </summary>
      <p className="mt-3 text-sm leading-relaxed text-slate-600">{answer}</p>
    </details>
  );
}
