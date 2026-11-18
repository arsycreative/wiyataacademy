import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { Button } from "@/components/ui/button";
import {
  TIU_PATTERN_IDS,
  type TiuPatternId,
} from "@/modules/question-bank/domain/question";
import { TiuPatternPractice } from "@/modules/question-bank/presentation/tiu-pattern-practice";
import { APP_ROUTES } from "@/shared/constants/app";

export const metadata: Metadata = {
  title: "Latihan Soal TIU — SKD CPNS",
  description:
    "Latihan dan review bank soal TIU SKD CPNS yang dipisah per pola: Sinonim, Antonim, Akronim, dan pola TIU lainnya.",
};

type TiuPracticePageProps = {
  searchParams?: Promise<{
    pattern?: string | string[];
    pola?: string | string[];
  }>;
};

function parsePatternParam(value?: string | string[]): TiuPatternId | undefined {
  const raw = Array.isArray(value) ? value[0] : value;
  if (!raw) return undefined;
  return (TIU_PATTERN_IDS as readonly string[]).includes(raw)
    ? (raw as TiuPatternId)
    : undefined;
}

export default async function TiuPracticePage({
  searchParams,
}: TiuPracticePageProps) {
  const resolvedParams = searchParams ? await searchParams : undefined;
  const initialPattern =
    parsePatternParam(resolvedParams?.pattern) ??
    parsePatternParam(resolvedParams?.pola);

  return (
    <div className="flex min-h-screen flex-col bg-[#f8fbff] text-slate-950">
      <SiteHeader />

      <main className="mx-auto w-full max-w-[1440px] flex-1 px-5 py-10 sm:px-8 lg:px-10">
        <div className="mb-8 flex flex-col gap-4 border-b border-blue-100 pb-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <Button
              asChild
              variant="ghost"
              className="-ml-2 mb-3 text-blue-700 hover:bg-blue-50 hover:text-blue-800"
            >
              <Link href={APP_ROUTES.home}>
                <ArrowLeft className="size-4" aria-hidden />
                Kembali ke Beranda
              </Link>
            </Button>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-700">
              Bank Soal Terpisah • SKD CPNS
            </p>
            <h1 className="mt-2 text-2xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              Latihan Soal TIU — SKD CPNS
            </h1>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600 sm:text-base">
              Pilih satu pola soal untuk fokus berlatih atau aktifkan Mode Review untuk melihat
              kunci jawaban dan pembahasan semua soal sekaligus.
            </p>
          </div>
        </div>

        <TiuPatternPractice initialPattern={initialPattern} />
      </main>

      <SiteFooter />
    </div>
  );
}

