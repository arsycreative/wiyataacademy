import Link from "next/link";

import { BrandLogo } from "@/components/layout/brand-logo";
import { APP_ROUTES } from "@/shared/constants/app";

export function SiteFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-blue-100 bg-white text-slate-600">
      <div className="mx-auto flex max-w-[1280px] flex-col gap-6 px-5 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-10">
        <div>
          <Link href={APP_ROUTES.home} className="inline-flex items-center">
            <BrandLogo className="h-9" />
          </Link>
          <p className="mt-2 text-xs text-slate-500">
            Bimbel Intensif SKD CPNS • Bagian dari <strong className="font-semibold text-slate-700">Arsy Studio</strong>
          </p>
        </div>

        <nav aria-label="Navigasi footer" className="flex flex-wrap items-center gap-5 text-sm font-medium">
          <Link href={APP_ROUTES.programs} className="transition-colors hover:text-blue-700">
            Program Bimbel
          </Link>
          <Link href={APP_ROUTES.tryout} className="transition-colors hover:text-blue-700">
            Tryout CAT
          </Link>
          <Link
            href={APP_ROUTES.pricing}
            className="font-semibold text-blue-600 transition-colors hover:text-blue-800"
          >
            Paket Belajar
          </Link>
          <Link href={APP_ROUTES.terms} className="transition-colors hover:text-blue-700">
            Syarat &amp; Ketentuan
          </Link>
          <Link href={APP_ROUTES.faq} className="transition-colors hover:text-blue-700">
            FAQ
          </Link>
        </nav>

        <div className="text-xs text-slate-500 sm:text-right">
          <p>© {currentYear} Wiyata Academy by <strong className="font-semibold text-slate-700">Arsy Studio</strong>.</p>
          <p className="mt-0.5 text-[11px] text-slate-400">
            Pembayaran diproses secara aman melalui Midtrans.
          </p>
        </div>
      </div>
    </footer>
  );
}
