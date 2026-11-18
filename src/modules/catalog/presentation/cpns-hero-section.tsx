import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { EXAM_PILLARS } from "@/modules/catalog/presentation/cpns-landing-content";
import { APP_ROUTES } from "@/shared/constants/app";

export function CpnsHeroSection() {
  return (
    <section className="relative flex min-h-[calc(100svh-4.5rem)] flex-col justify-between">
      <div className="mx-auto flex w-full max-w-[1280px] flex-1 items-center px-5 py-10 sm:px-8 lg:px-10">
        <div className="grid w-full items-center gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-7">
            <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-blue-700">
              <span className="h-2 w-2 rounded-full bg-blue-600" aria-hidden />
              Bimbel Intensif SKD CPNS
            </p>

            <h1 className="mt-5 text-[clamp(2.5rem,5.4vw,4.5rem)] font-semibold leading-[1.03] tracking-tight text-slate-950">
              Siap Lolos Seleksi{" "}
              <span className="text-blue-600">SKD CPNS</span>
            </h1>

            <p className="mt-6 max-w-[490px] text-lg leading-8 text-slate-600">
              Pendampingan belajar terarah untuk TWK, TIU, dan TKP sesuai kisi-kisi terbaru.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-6">
              <Button
                asChild
                className="h-12 bg-blue-600 px-7 text-base font-semibold text-white shadow-lg shadow-blue-200/70 hover:bg-blue-700"
              >
                <Link href={APP_ROUTES.programs}>
                  Lihat Program SKD
                  <ArrowRight className="size-4" aria-hidden />
                </Link>
              </Button>
              <Link
                href={APP_ROUTES.method}
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-700 transition-colors hover:text-blue-700"
              >
                Pelajari metode belajar
                <ArrowUpRight className="size-4" aria-hidden />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-[460px] py-4 sm:py-6">
              <div
                aria-hidden
                className="absolute inset-x-4 bottom-0 top-8 rotate-3 rounded-3xl bg-blue-100/80"
              />

              <div className="relative overflow-hidden rounded-3xl bg-[linear-gradient(135deg,#1e3a8a_0%,#2563eb_55%,#7c3aed_100%)] p-7 text-white shadow-2xl shadow-blue-200/80 sm:p-8">
                <div
                  aria-hidden
                  className="absolute inset-0 opacity-20 [background-image:radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px]"
                />

                <div className="relative z-10">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold uppercase tracking-[0.16em] text-blue-100">
                      Fokus Utama
                    </span>
                    <span className="rounded-full bg-white/15 px-3 py-1 text-xs font-semibold">
                      SKD CPNS
                    </span>
                  </div>

                  <p className="mt-5 text-2xl font-semibold leading-snug tracking-tight">
                    Kuasai Seluruh Subtes SKD Secara Bertahap
                  </p>

                  <div className="mt-7 space-y-3">
                    <div className="flex items-center justify-between rounded-2xl bg-white px-4 py-3.5 text-slate-900 shadow-lg">
                      <span className="text-sm font-semibold">Wawasan Kebangsaan</span>
                      <span className="rounded-md bg-blue-600 px-2.5 py-1 text-xs font-bold text-white">
                        TWK
                      </span>
                    </div>
                    <div className="ml-5 flex items-center justify-between rounded-2xl bg-white/95 px-4 py-3.5 text-slate-900 shadow-lg">
                      <span className="text-sm font-semibold">Intelegensia Umum</span>
                      <span className="rounded-md bg-violet-600 px-2.5 py-1 text-xs font-bold text-white">
                        TIU
                      </span>
                    </div>
                    <div className="mr-4 flex items-center justify-between rounded-2xl bg-white/90 px-4 py-3.5 text-slate-900 shadow-lg">
                      <span className="text-sm font-semibold">Karakteristik Pribadi</span>
                      <span className="rounded-md bg-teal-600 px-2.5 py-1 text-xs font-bold text-white">
                        TKP
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-blue-900/20 bg-[#0f2454] text-white">
        <div className="mx-auto grid max-w-[1280px] divide-y divide-white/10 px-5 sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-4 lg:divide-x sm:px-8 lg:px-10">
          {EXAM_PILLARS.map((pillar) => (
            <div key={pillar.code} className="py-5 lg:px-6 lg:first:pl-0 lg:last:pr-0">
              <p className="text-sm font-semibold tracking-wide text-white">{pillar.code}</p>
              <p className="mt-0.5 text-xs text-blue-200">{pillar.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
