import type { Metadata } from "next";

import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { getPatternStats } from "@/modules/question-bank/data/tiu";
import { ALL_TKP_QUESTIONS } from "@/modules/question-bank/data/tkp";
import {
  ALL_TWK_QUESTIONS,
  getTwkPatternStats,
  TWK_QUESTION_BANKS,
} from "@/modules/question-bank/data/twk";
import {
  TWK_PATTERN_IDS,
  type TwkPatternId,
} from "@/modules/question-bank/domain/question";
import { SubtestPracticeIntro } from "@/modules/question-bank/presentation/practice-ui-primitives";
import { TwkPatternPractice } from "@/modules/question-bank/presentation/twk-pattern-practice";

export const metadata: Metadata = {
  title: "Latihan Soal TWK — SKD CPNS",
  description:
    "Latihan dan pembahasan bank soal TWK SKD CPNS terpisah per pilar: Nasionalisme, Integritas, Bela Negara, Pilar Negara, dan Bahasa Indonesia.",
};

type TwkPracticePageProps = {
  searchParams?: Promise<{
    pattern?: string | string[];
    pola?: string | string[];
  }>;
};

function parseTwkPatternParam(value?: string | string[]): TwkPatternId | undefined {
  const raw = Array.isArray(value) ? value[0] : value;
  if (!raw) return undefined;
  return (TWK_PATTERN_IDS as readonly string[]).includes(raw)
    ? (raw as TwkPatternId)
    : undefined;
}

export default async function TwkPracticePage({
  searchParams,
}: TwkPracticePageProps) {
  const resolvedParams = searchParams ? await searchParams : undefined;
  const initialPattern =
    parseTwkPatternParam(resolvedParams?.pattern) ??
    parseTwkPatternParam(resolvedParams?.pola);

  const initialLoadedPattern: TwkPatternId = initialPattern ?? "nasionalisme";
  const initialPatternStats = getTwkPatternStats();
  const initialQuestions = TWK_QUESTION_BANKS[initialLoadedPattern];

  const tiuTotal = getPatternStats().reduce((total, item) => total + item.total, 0);
  const twkTotal = ALL_TWK_QUESTIONS.length;
  const tkpTotal = ALL_TKP_QUESTIONS.length;

  const pageIntro = (
    <SubtestPracticeIntro
      activeSubtest="TWK"
      title="Latihan Soal TWK — SKD CPNS"
      description="Latih penalaran HOTS dan penguasaan materi 5 pilar Tes Wawasan Kebangsaan: Nasionalisme, Integritas, Bela Negara, Pilar Negara, serta Bahasa Indonesia sesuai kisi-kisi terbaru."
      tiuTotal={tiuTotal}
      twkTotal={twkTotal}
      tkpTotal={tkpTotal}
    />
  );

  return (
    <TwkPatternPractice
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
