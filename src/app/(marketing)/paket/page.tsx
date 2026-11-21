import type { Metadata } from "next";
import { Check, ShieldCheck, Sparkles, CreditCard } from "lucide-react";

import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { CheckoutButton } from "@/modules/payment/presentation/checkout-button";
import { PRODUCTS } from "@/modules/payment/domain/products";

export const metadata: Metadata = {
  title: "Pilihan Paket Belajar & Simulasi SKD CPNS",
  description:
    "Investasi terbaik persiapan seleksi CPNS & Kedinasan. Akses ribuan bank soal HOTS, simulasi CAT resmi, cheat sheet trik cepat, dan sprint drill.",
};

const IS_SANDBOX = process.env.MIDTRANS_IS_PRODUCTION !== "true";

export default function PricingPage() {
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

          {/* Pricing Grid */}
          <div className="mt-12 grid gap-8 lg:grid-cols-3 lg:items-stretch">
            {/* 1. Paket Bundle Try Out */}
            <div className="flex flex-col rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition hover:shadow-md sm:p-8">
              <div className="flex-1">
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Fokus Simulasi
                </span>
                <h3 className="mt-2 text-xl font-bold text-slate-950">
                  {PRODUCTS["tryout-bundle"].name}
                </h3>
                <p className="mt-2 text-sm text-slate-600">
                  {PRODUCTS["tryout-bundle"].description}
                </p>

                <div className="mt-6 flex items-baseline gap-1">
                  <span className="text-3xl font-extrabold text-slate-950 sm:text-4xl">
                    {PRODUCTS["tryout-bundle"].priceDisplay}
                  </span>
                  <span className="text-xs font-medium text-slate-500">/ sekali bayar</span>
                </div>

                <div className="my-6 h-px bg-slate-100" />

                <ul className="space-y-3 text-sm text-slate-700">
                  <PricingFeature text="10 Paket Try Out SKD CAT 110 Soal" />
                  <PricingFeature text="Standar Waktu &amp; Passing Grade BKN" />
                  <PricingFeature text="Pembahasan Lengkap Tiap Butir Soal" />
                  <PricingFeature text="Ranking &amp; Statistik Nilai Nasional" />
                  <PricingFeature text="Akses Aktif Selamanya" />
                </ul>
              </div>

              <div className="mt-8">
                <CheckoutButton
                  productId="tryout-bundle"
                  productName={PRODUCTS["tryout-bundle"].name}
                  amountDisplay={PRODUCTS["tryout-bundle"].priceDisplay}
                  variant="outline"
                  className="w-full border-slate-300 text-slate-900 hover:bg-slate-50"
                />
              </div>
            </div>

            {/* 2. Paket Intensif SKD (Featured) */}
            <div className="relative flex flex-col rounded-2xl border-2 border-blue-600 bg-white p-7 shadow-xl shadow-blue-500/10 sm:p-8">
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-blue-600 px-4 py-1 text-xs font-bold uppercase tracking-wider text-white shadow-md">
                Paling Diminati ⭐
              </div>

              <div className="flex-1">
                <span className="text-xs font-semibold uppercase tracking-wider text-blue-600">
                  Paket Lengkap Mandiri
                </span>
                <h3 className="mt-2 text-xl font-bold text-slate-950">
                  {PRODUCTS["skd-intensif"].name}
                </h3>
                <p className="mt-2 text-sm text-slate-600">
                  {PRODUCTS["skd-intensif"].description}
                </p>

                <div className="mt-6 flex items-baseline gap-1">
                  <span className="text-3xl font-extrabold text-blue-600 sm:text-4xl">
                    {PRODUCTS["skd-intensif"].priceDisplay}
                  </span>
                  <span className="text-xs font-medium text-slate-500">/ akses seumur hidup</span>
                </div>

                <div className="my-6 h-px bg-blue-50" />

                <ul className="space-y-3 text-sm text-slate-700">
                  <PricingFeature text="2.540+ Soal HOTS Terupdate (TWK, TIU, TKP)" bold />
                  <PricingFeature text="Cheat Sheet Rumus Cepat 20 Modul" bold />
                  <PricingFeature text="Sprint Drill 10-15 Menit Berbatas Waktu" />
                  <PricingFeature text="Simulasi Tryout CAT Resmi 110 Soal" />
                  <PricingFeature text="Peta Kelemahan Pola Soal Interaktif" />
                  <PricingFeature text="Bebas Akses Kapan Saja &amp; Di Mana Saja" />
                </ul>
              </div>

              <div className="mt-8">
                <CheckoutButton
                  productId="skd-intensif"
                  productName={PRODUCTS["skd-intensif"].name}
                  amountDisplay={PRODUCTS["skd-intensif"].priceDisplay}
                  className="w-full bg-blue-600 text-white shadow-lg shadow-blue-500/25 hover:bg-blue-700"
                />
              </div>
            </div>

            {/* 3. Paket Premium SKD */}
            <div className="flex flex-col rounded-2xl border border-violet-200 bg-white p-7 shadow-sm transition hover:shadow-md sm:p-8">
              <div className="flex-1">
                <span className="text-xs font-semibold uppercase tracking-wider text-violet-600">
                  Bimbingan Intensif
                </span>
                <h3 className="mt-2 text-xl font-bold text-slate-950">
                  {PRODUCTS["skd-premium"].name}
                </h3>
                <p className="mt-2 text-sm text-slate-600">
                  {PRODUCTS["skd-premium"].description}
                </p>

                <div className="mt-6 flex items-baseline gap-1">
                  <span className="text-3xl font-extrabold text-slate-950 sm:text-4xl">
                    {PRODUCTS["skd-premium"].priceDisplay}
                  </span>
                  <span className="text-xs font-medium text-slate-500">/ sekali bayar</span>
                </div>

                <div className="my-6 h-px bg-slate-100" />

                <ul className="space-y-3 text-sm text-slate-700">
                  <PricingFeature text="Semua Fitur Paket Intensif SKD" bold />
                  <PricingFeature text="Live Class &amp; Bedah Soal Mingguan via Zoom" bold />
                  <PricingFeature text="Grup Diskusi Mentor Privat Telegram" />
                  <PricingFeature text="Konsultasi Strategi Pemilihan Formasi" />
                  <PricingFeature text="Garansi Uang Kembali 7 Hari" />
                </ul>
              </div>

              <div className="mt-8">
                <CheckoutButton
                  productId="skd-premium"
                  productName={PRODUCTS["skd-premium"].name}
                  amountDisplay={PRODUCTS["skd-premium"].priceDisplay}
                  variant="outline"
                  className="w-full border-violet-300 text-violet-900 hover:bg-violet-50"
                />
              </div>
            </div>
          </div>

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

function PricingFeature({ text, bold }: { text: string; bold?: boolean }) {
  return (
    <li className="flex items-start gap-3">
      <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
        <Check className="size-3.5" aria-hidden />
      </span>
      <span className={bold ? "font-semibold text-slate-900" : "text-slate-600"}>
        {text}
      </span>
    </li>
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
