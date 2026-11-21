import Link from "next/link";
import { ShieldCheck, CreditCard, Building2 } from "lucide-react";

import { BrandLogo } from "@/components/layout/brand-logo";
import { APP_ROUTES } from "@/shared/constants/app";

export function SiteFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-blue-100/80 bg-white text-slate-600">
      {/* Main Footer Content */}
      <div className="mx-auto max-w-[1280px] px-5 py-12 sm:px-8 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          {/* Column 1: Brand & Ownership Attribution */}
          <div className="space-y-4">
            <Link href={APP_ROUTES.home} className="inline-flex items-center">
              <BrandLogo className="h-9" />
            </Link>
            <p className="text-sm leading-relaxed text-slate-600">
              Platform bimbingan belajar dan simulasi ujian CAT resmi berbasis 2.540+ soal HOTS
              terupdate sesuai standar KemenPAN-RB &amp; BKN.
            </p>

            <div className="rounded-xl border border-blue-100 bg-blue-50/70 p-3.5 text-xs leading-relaxed text-slate-700">
              <div className="flex items-center gap-1.5 font-bold text-blue-950">
                <Building2 className="size-4 text-blue-700" aria-hidden />
                <span>Unit Usaha Resmi Arsy Studio</span>
              </div>
              <p className="mt-1.5 text-slate-600">
                Wiyata Academy adalah platform edukasi digital yang dikembangkan, dimiliki, dan
                dikelola sepenuhnya oleh <strong>Arsy Studio</strong>.
              </p>
            </div>
          </div>

          {/* Column 2: Navigasi Bank Soal & Belajar */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">
              Bank Soal &amp; Latihan
            </h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <Link href={APP_ROUTES.twkPractice} className="transition hover:text-blue-700">
                  Tes Wawasan Kebangsaan (TWK)
                </Link>
              </li>
              <li>
                <Link href={APP_ROUTES.tiuPractice} className="transition hover:text-blue-700">
                  Tes Intelegensia Umum (TIU)
                </Link>
              </li>
              <li>
                <Link href={APP_ROUTES.tkpPractice} className="transition hover:text-blue-700">
                  Tes Karakteristik Pribadi (TKP)
                </Link>
              </li>
              <li>
                <Link href={APP_ROUTES.sprint} className="transition hover:text-blue-700">
                  Sprint Drill 10 Menit
                </Link>
              </li>
              <li>
                <Link href={APP_ROUTES.tryout} className="transition hover:text-blue-700">
                  Simulasi CAT 110 Soal
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Program & Pembelian */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">
              Program &amp; Paket
            </h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <Link
                  href={APP_ROUTES.pricing}
                  className="font-semibold text-blue-700 transition hover:text-blue-800"
                >
                  Pilihan Paket Belajar ⭐
                </Link>
              </li>
              <li>
                <Link href={APP_ROUTES.courseDetail("skd-intensif")} className="transition hover:text-blue-700">
                  Roadmap Interaktif SKD
                </Link>
              </li>
              <li>
                <Link href={APP_ROUTES.method} className="transition hover:text-blue-700">
                  Metode Belajar
                </Link>
              </li>
              <li>
                <Link href={APP_ROUTES.testimonials} className="transition hover:text-blue-700">
                  Testimoni Alumni
                </Link>
              </li>
              <li>
                <Link href={APP_ROUTES.faq} className="transition hover:text-blue-700">
                  Tanya Jawab (FAQ)
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Kepatuhan Hukum, Midtrans & Kontak */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">
              Kepatuhan &amp; Transaksi
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  href={APP_ROUTES.terms}
                  className="font-medium text-slate-700 transition hover:text-blue-700"
                >
                  Syarat &amp; Ketentuan Layanan
                </Link>
              </li>
              <li>
                <Link
                  href={APP_ROUTES.terms}
                  className="font-medium text-slate-700 transition hover:text-blue-700"
                >
                  Kebijakan Pengembalian Dana (Refund)
                </Link>
              </li>
              <li>
                <Link
                  href={APP_ROUTES.terms}
                  className="font-medium text-slate-700 transition hover:text-blue-700"
                >
                  Kebijakan Privasi
                </Link>
              </li>
            </ul>

            <div className="rounded-xl border border-slate-200 bg-slate-50 p-3.5 text-xs text-slate-600">
              <div className="flex items-center gap-1.5 font-semibold text-slate-900">
                <CreditCard className="size-3.5 text-emerald-600" aria-hidden />
                <span>Pembayaran Resmi Midtrans</span>
              </div>
              <p className="mt-1 leading-relaxed text-slate-500">
                Transaksi ditagihkan atas nama merchant <strong>Arsy Studio</strong> dan diproses secara aman melalui gerbang pembayaran resmi <strong>Midtrans</strong>.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Security Badges */}
        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-slate-100 pt-6 text-xs text-slate-500 sm:flex-row">
          <p>
            © {currentYear} <strong>Wiyata Academy</strong>. All rights reserved. Dikembangkan dan dioperasikan oleh <strong>Arsy Studio</strong>.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <span className="inline-flex items-center gap-1 text-slate-600">
              <ShieldCheck className="size-3.5 text-emerald-600" aria-hidden />
              Keamanan 256-Bit SSL Enkripsi
            </span>
            <span className="hidden text-slate-300 sm:inline">•</span>
            <Link
              href={APP_ROUTES.terms}
              className="text-slate-600 underline transition hover:text-blue-700"
            >
              Legal &amp; Kepatuhan Merchant
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
