import type { Metadata } from "next";

import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { getCurrentUserEntitlements } from "@/modules/payment/infrastructure/entitlements.server";
import { TryoutCatExperience } from "@/modules/tryout/presentation/tryout-cat-experience";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Simulasi Tryout CAT SKD Resmi (110 Soal)",
  description:
    "Simulasi Tryout CAT SKD CPNS resmi standar BKN: 30 TWK, 35 TIU, dan 45 TKP dalam 100 menit dengan evaluasi ambang batas (passing grade) dan pembahasan lengkap.",
};

export default async function TryoutPage() {
  const entitlements = await getCurrentUserEntitlements();

  return (
    <TryoutCatExperience
      hasOfficialAccess={entitlements.hasOfficialTryout}
      siteHeader={<SiteHeader />}
      siteFooter={<SiteFooter />}
    />
  );
}
