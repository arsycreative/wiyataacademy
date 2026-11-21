import type { Metadata } from "next";

import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { SprintDrillExperience } from "@/modules/tryout/presentation/sprint-drill-experience";

export const metadata: Metadata = {
  title: "Sprint Drill SKD 10–15 Menit Berbatas Waktu",
  description:
    "Latih kecepatan mengerjakan 15 soal TWK, TIU, atau TKP dalam 10–15 menit lengkap dengan stopwatch per nomor soal, audit waktu, dan pembahasan cepat.",
};

type SprintPageProps = {
  searchParams?: Promise<{
    subtest?: string;
    pattern?: string;
    duration?: string;
  }>;
};

export default async function SprintPage({ searchParams }: SprintPageProps) {
  const params = searchParams ? await searchParams : {};
  const parsedDuration = params.duration ? Number(params.duration) : undefined;

  return (
    <SprintDrillExperience
      initialSubtestQuery={params.subtest}
      initialPatternQuery={params.pattern}
      initialDurationQuery={
        parsedDuration === 10 || parsedDuration === 12 || parsedDuration === 15
          ? parsedDuration
          : undefined
      }
      siteHeader={<SiteHeader />}
      siteFooter={<SiteFooter />}
    />
  );
}

