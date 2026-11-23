import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { EXAM_PILLARS } from "@/modules/catalog/presentation/cpns-landing-content";
import { APP_ROUTES } from "@/shared/constants/app";

const SKD_SUBTEST_PREVIEW = [
  { code: "TWK", name: "Tes Wawasan Kebangsaan", detail: "30 soal • PG 65" },
  { code: "TIU", name: "Tes Intelegensia Umum", detail: "35 soal • PG 80" },
  { code: "TKP", name: "Tes Karakteristik Pribadi", detail: "45 soal • PG 166" },
] as const;

export function CpnsHeroSection() {
  return (
    <section className="flex min-h-[calc(100svh-4.5rem)] flex-col justify-between bg-white">
      <div className="mx-auto flex w-full max-w-[1280px] flex-1 items-center px-5 py-12 sm:px-8 lg:px-10">
        <div className="grid w-full items-center gap-12 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-7">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-700">
              Bimbel Intensif SKD CPNS
            </p>

            <h1 className="mt-4 text-[clamp(2.4rem,5vw,4.15rem)] font-semibold leading-[1.06] tracking-tight text-slate-950">
              Siap Lolos Seleksi{" "}
              <span className="text-blue-600">SKD CPNS</span>
            </h1>

            <p className="mt-5 max-w-[500px] text-base leading-7 text-slate-600 sm:text-lg">
              Belajar terarah dengan 2.700+ bank soal HOTS, latihan kecepatan
              Sprint 10 menit, dan simulasi CAT resmi standar BKN.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button
                asChild
                className="h-11 rounded-lg bg-blue-600 px-6 text-sm font-semibold text-white shadow-xs hover:bg-blue-700 sm:text-base"
              >
                <Link href={APP_ROUTES.tryout}>
                  Coba Simulasi Gratis
                  <ArrowRight className="size-4" aria-hidden />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="h-11 rounded-lg border-slate-200 px-6 text-sm font-semibold text-slate-700 hover:bg-slate-50 sm:text-base"
              >
                <Link href={APP_ROUTES.pricing}>Lihat Paket Belajar</Link>
              </Button>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-2xl border border-slate-200/90 bg-slate-50/60 p-6 shadow-xs sm:p-7">
              <div className="flex items-center justify-between border-b border-slate-200/80 pb-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                    Struktur Ujian Resmi
                  </p>
                  <p className="mt-0.5 text-base font-bold text-slate-950">
                    SKD CAT BKN (110 Soal • 100 Menit)
                  </p>
                </div>
              </div>

              <div className="mt-4 divide-y divide-slate-200/70">
                {SKD_SUBTEST_PREVIEW.map((item) => (
                  <div
                    key={item.code}
                    className="flex items-center justify-between py-3.5 first:pt-1 last:pb-1"
                  >
                    <div>
                      <p className="text-sm font-semibold text-slate-900">
                        {item.name}
                      </p>
                      <p className="text-xs text-slate-500">{item.detail}</p>
                    </div>
                    <span className="rounded-md border border-slate-200 bg-white px-2.5 py-1 text-xs font-bold text-slate-800">
                      {item.code}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-5 flex items-center justify-between border-t border-slate-200/80 pt-4 text-xs text-slate-600">
                <span>Tersedia mode Gratis Trial &amp; Paket Penuh</span>
                <Link
                  href={APP_ROUTES.tiuPractice}
                  className="font-semibold text-blue-700 hover:underline"
                >
                  Latih Soal &rarr;
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-800 bg-slate-950 text-white">
        <div className="mx-auto grid max-w-[1280px] divide-y divide-white/10 px-5 sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-4 lg:divide-x sm:px-8 lg:px-10">
          {EXAM_PILLARS.map((pillar) => (
            <div
              key={pillar.code}
              className="py-4 lg:px-6 lg:first:pl-0 lg:last:pr-0"
            >
              <p className="text-sm font-semibold tracking-wide text-white">
                {pillar.code}
              </p>
              <p className="mt-0.5 text-xs text-slate-400">{pillar.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
