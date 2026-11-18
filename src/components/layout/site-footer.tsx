import Link from "next/link";

import { BrandLogo } from "@/components/layout/brand-logo";
import { APP_ROUTES } from "@/shared/constants/app";

export function SiteFooter() {
  return (
    <footer className="border-t border-blue-100 bg-white text-slate-600">
      <div className="mx-auto flex max-w-[1280px] flex-col gap-6 px-5 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-10">
        <div>
          <Link href={APP_ROUTES.home} className="inline-flex items-center">
            <BrandLogo className="h-9" />
          </Link>
          <p className="mt-2 text-xs text-slate-500">
            Bimbel Intensif SKD CPNS (TWK, TIU &amp; TKP).
          </p>
        </div>

        <nav aria-label="Navigasi footer" className="flex flex-wrap gap-6 text-sm font-medium">
          <Link href={APP_ROUTES.method} className="transition-colors hover:text-blue-700">
            Metode Belajar
          </Link>
          <Link href={APP_ROUTES.programs} className="transition-colors hover:text-blue-700">
            Program Bimbel
          </Link>
          <Link href={APP_ROUTES.testimonials} className="transition-colors hover:text-blue-700">
            Testimoni
          </Link>
          <Link href={APP_ROUTES.faq} className="transition-colors hover:text-blue-700">
            FAQ
          </Link>
        </nav>

        <p className="text-xs text-slate-500">
          © {new Date().getFullYear()} Wiyata Academy
        </p>
      </div>
    </footer>
  );
}
