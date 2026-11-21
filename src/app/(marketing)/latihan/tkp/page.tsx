import type { Metadata } from "next";

import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { getPatternStats } from "@/modules/question-bank/data/tiu";
import {
  ALL_TKP_QUESTIONS,
  getTkpPatternStats,
  TKP_QUESTION_BANKS,
} from "@/modules/question-bank/data/tkp";
import { ALL_TWK_QUESTIONS } from "@/modules/question-bank/data/twk";
import {
  TKP_PATTERN_IDS,
  type TkpPatternId,
} from "@/modules/question-bank/domain/question";
import { SubtestPracticeIntro } from "@/modules/question-bank/presentation/practice-ui-primitives";
import { TkpPatternPractice } from "@/modules/question-bank/presentation/tkp-pattern-practice";

export const metadata: Metadata = {
  title: "Latihan Soal TKP — SKD CPNS",
  description:
    "Latihan dan bedah skor 1–5 bank soal TKP SKD CPNS per aspek: Pelayanan Publik, Jejaring Kerja, Sosial Budaya, TIK, Profesionalisme, dan Anti-Radikalisme.",
};

type TkpPracticePageProps = {
  searchParams?: Promise<{
    pattern?: string | string[];
    pola?: string | string[];
  }>;
};

function parseTkpPatternParam(value?: string | string[]): TkpPatternId | undefined {
  const raw = Array.isArray(value) ? value[0] : value;
  if (!raw) return undefined;
  return (TKP_PATTERN_IDS as readonly string[]).includes(raw)
    ? (raw as TkpPatternId)
    : undefined;
}

export default async function TkpPracticePage({
  searchParams,
}: TkpPracticePageProps) {
  const resolvedParams = searchParams ? await searchParams : undefined;
  const initialPattern =
    parseTkpPatternParam(resolvedParams?.pattern) ??
    parseTkpPatternParam(resolvedParams?.pola);

  const initialLoadedPattern: TkpPatternId = initialPattern ?? "pelayanan-publik";
  const initialPatternStats = getTkpPatternStats();
  const initialQuestions = TKP_QUESTION_BANKS[initialLoadedPattern];

  const tiuTotal = getPatternStats().reduce((total, item) => total + item.total, 0);
  const twkTotal = ALL_TWK_QUESTIONS.length;
  const tkpTotal = ALL_TKP_QUESTIONS.length;

  const pageIntro = (
    <SubtestPracticeIntro
      activeSubtest="TKP"
      title="Latihan Soal TKP — SKD CPNS"
      description="Latih kepekaan situasional HOTS pada 6 aspek Tes Karakteristik Pribadi dengan penilaian bertingkat 1–5 poin per opsi agar terbiasa memilih solusi paling optimal."
      tiuTotal={tiuTotal}
      twkTotal={twkTotal}
      tkpTotal={tkpTotal}
    />
  );

  return (
    <TkpPatternPractice
      initialPattern={initialPattern}
      initialLoadedPattern={initialLoadedPattern}
      initialPatternStats={initialPatternStats}
      initialQuestions={initialQuestions}
      siteHeader={<SiteHeader />}
      siteFooter={<SiteFooter />}
      pageIntro={pageIntro}
    />
  );
}
