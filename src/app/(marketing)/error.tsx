"use client";

import Link from "next/link";
import { AlertTriangle, RefreshCw } from "lucide-react";

import { BrandLogo } from "@/components/layout/brand-logo";
import { Button } from "@/components/ui/button";
import { APP_ROUTES } from "@/shared/constants/app";

type MarketingErrorProps = {
  error: Error;
  reset: () => void;
};

export default function MarketingError({ reset }: MarketingErrorProps) {
  return (
    <div className="min-h-screen bg-[#f8fbff] text-slate-950">
      <header className="sticky top-0 z-30 border-b border-blue-100 bg-white/95 backdrop-blur">
        <div className="mx-auto flex h-[4.5rem] max-w-[1360px] items-center justify-between gap-4 px-5 sm:px-8 lg:px-10">
          <Link href={APP_ROUTES.home} className="flex items-center gap-3">
            <BrandLogo priority className="h-10 sm:h-11" />
          </Link>
          <Button asChild variant="outline" className="border-blue-300 px-5 text-blue-700">
            <Link href={APP_ROUTES.home}>Beranda</Link>
          </Button>
        </div>
      </header>
      <main className="grid min-h-[calc(100vh-5rem)] place-items-center border-t border-blue-100/80 px-5 py-10">
        <section className="w-full max-w-lg rounded-xl border border-blue-100 bg-white p-7 text-center shadow-xl shadow-blue-100/70">
          <span className="mx-auto flex size-14 items-center justify-center rounded-full bg-amber-50 text-amber-600">
            <AlertTriangle className="size-7" aria-hidden />
          </span>
          <h1 className="mt-5 text-2xl font-semibold text-blue-950">
            Halaman belum bisa dimuat
          </h1>
          <p className="mt-3 text-sm leading-6 text-slate-600">
            Terjadi kendala saat menampilkan halaman program bimbel. Coba muat ulang, atau
            kembali ke beranda.
          </p>
          <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
            <Button type="button" className="bg-blue-600 hover:bg-blue-700" onClick={reset}>
              <RefreshCw className="size-4" aria-hidden />
              Muat Ulang
            </Button>
            <Button asChild variant="outline" className="border-blue-200 text-blue-700">
              <Link href={APP_ROUTES.home}>Kembali ke Beranda</Link>
            </Button>
          </div>
        </section>
      </main>
    </div>
  );
}
