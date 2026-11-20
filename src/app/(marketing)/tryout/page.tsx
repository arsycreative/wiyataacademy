import type { Metadata } from "next";

import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { TryoutCatExperience } from "@/modules/tryout/presentation/tryout-cat-experience";

export const metadata: Metadata = {
  title: "Simulasi Tryout CAT SKD Resmi (110 Soal)",
  description:
    "Simulasi Tryout CAT SKD CPNS resmi standar BKN: 30 TWK, 35 TIU, dan 45 TKP dalam 100 menit dengan evaluasi ambang batas (passing grade) dan pembahasan lengkap.",
};

export default function TryoutPage() {
  return (
    <TryoutCatExperience
      siteHeader={<SiteHeader />}
      siteFooter={<SiteFooter />}
    />
  );
}

