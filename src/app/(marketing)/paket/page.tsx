import type { Metadata } from "next";
import { ShieldCheck } from "lucide-react";

import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { WhatsappFloatingButton } from "@/components/layout/whatsapp-floating-button";
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
    <div className="min-h-screen bg-[#f8fafc] text-slate-950">
      <SiteHeader />

      <main className="py-12 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          {/* Header Section */}
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-700">
              Investasi Persiapan CASN
            </p>
            <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
              Pilih Paket Sesuai Target Belajarmu
            </h1>
            <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-slate-600 sm:text-base">
              Sekali bayar untuk akses selamanya tanpa biaya langganan bulanan.
            </p>

            {IS_SANDBOX && (
              <div className="mx-auto mt-5 inline-flex items-center gap-2 rounded-lg border border-amber-200 bg-amber-50 px-3.5 py-2 text-xs font-medium text-amber-800">
                <ShieldCheck className="size-4 shrink-0 text-amber-600" aria-hidden />
                <span>
                  <strong>Mode Sandbox Midtrans:</strong> Transaksi menggunakan simulator &amp; tidak memotong saldo nyata.
                </span>
              </div>
            )}
          </div>

          <PricingGridClient ownedProductIds={entitlements.activeProductIds} />

          {/* Payment Methods Strip — Ringkas 1 Baris */}
          <div className="mt-12 rounded-2xl border border-slate-200/80 bg-white px-6 py-4 text-center text-xs text-slate-600">
            <span className="font-semibold text-slate-900">
              Pembayaran Aman via Midtrans:
            </span>{" "}
            Virtual Account (BCA, BNI, BRI, Mandiri, Permata), QRIS, GoPay,
            ShopeePay, serta Kartu Kredit/Debit Visa &amp; Mastercard.
          </div>

          {/* FAQ Section */}
          <div className="mx-auto mt-14 max-w-3xl">
            <h2 className="text-center text-xl font-bold text-slate-950 sm:text-2xl">
              Pertanyaan Seputar Pembayaran &amp; Akses
            </h2>

            <div className="mt-6 divide-y divide-slate-200 border-y border-slate-200">
              <FaqItem
                question="Bagaimana cara aktivasi setelah pembayaran selesai?"
                answer="Aktivasi berjalan otomatis secara realtime begitu pembayaran diverifikasi oleh Midtrans. Seluruh materi, sprint drill, dan try out langsung terbuka."
              />
              <FaqItem
                question="Apakah ada biaya langganan bulanan?"
                answer="Tidak ada. Seluruh paket Wiyata Edu berlaku sekali bayar (one-time purchase) untuk akses selamanya."
              />
              <FaqItem
                question="Bagaimana jika transaksi tertunda atau mengalami kendala?"
                answer="Periksa status pesanan di halaman Akun Saya atau hubungi tim CS melalui tombol WhatsApp di pojok kanan bawah dengan menyertakan Order ID."
              />
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
      <WhatsappFloatingButton message="Halo CS Wiyata Edu, saya ingin konsultasi atau bertanya tentang Paket Belajar SKD CPNS." />
    </div>
  );
}

function FaqItem({ question, answer }: { question: string; answer: string }) {
  return (
    <details className="group py-4 [&_summary::-webkit-details-marker]:hidden">
      <summary className="flex cursor-pointer items-center justify-between text-sm font-semibold text-slate-900 sm:text-base">
        <span>{question}</span>
        <span className="ml-4 shrink-0 text-xs text-slate-400 transition group-open:rotate-180">
          ▼
        </span>
      </summary>
      <p className="mt-2.5 text-sm leading-relaxed text-slate-600">{answer}</p>
    </details>
  );
}
