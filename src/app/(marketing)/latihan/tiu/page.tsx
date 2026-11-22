import type { Metadata } from "next";

import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { isQuestionPatternFree } from "@/modules/payment/domain/entitlements";
import { getCurrentUserEntitlements } from "@/modules/payment/infrastructure/entitlements.server";
import {
  getPatternStats,
  getQuestionsByPattern,
} from "@/modules/question-bank/data/tiu";
import { ALL_TKP_QUESTIONS } from "@/modules/question-bank/data/tkp";
import { ALL_TWK_QUESTIONS } from "@/modules/question-bank/data/twk";
import {
  TIU_PATTERN_IDS,
  type TiuPatternId,
} from "@/modules/question-bank/domain/question";
import { SubtestPracticeIntro } from "@/modules/question-bank/presentation/practice-ui-primitives";
import { TiuPatternPractice } from "@/modules/question-bank/presentation/tiu-pattern-practice";

export const dynamic = "force-dynamic";

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

  const entitlements = await getCurrentUserEntitlements();
  const patternStats = getPatternStats();
  const initialLoadedPattern: TiuPatternId = initialPattern ?? "sinonim-antonim-akronim";
  const canLoadInitial =
    entitlements.hasFullQuestionBank ||
    isQuestionPatternFree("TIU", initialLoadedPattern);
  const initialQuestions = canLoadInitial
    ? getQuestionsByPattern(initialLoadedPattern)
    : [];

  const tiuTotal = patternStats.reduce((total, item) => total + item.total, 0);
  const twkTotal = ALL_TWK_QUESTIONS.length;
  const tkpTotal = ALL_TKP_QUESTIONS.length;

  const pageIntro = (
    <SubtestPracticeIntro
      activeSubtest="TIU"
      title="Latihan Soal TIU — SKD CPNS"
      description="Pilih satu pola soal untuk fokus berlatih atau aktifkan Mode Review untuk melihat kunci jawaban dan pembahasan semua soal sekaligus."
      tiuTotal={tiuTotal}
      twkTotal={twkTotal}
      tkpTotal={tkpTotal}
    />
  );

  return (
    <TiuPatternPractice
      initialPattern={initialPattern}
      initialLoadedPattern={initialLoadedPattern}
      initialPatternStats={patternStats}
      initialQuestions={initialQuestions}
      hasFullAccess={entitlements.hasFullQuestionBank}
      siteHeader={<SiteHeader />}
      siteFooter={<SiteFooter />}
      pageIntro={pageIntro}
    />
  );
}
