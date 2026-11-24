import type { Metadata } from "next";

import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { getAuthenticatedUser } from "@/modules/auth/infrastructure/profile-repository.server";
import { getCurrentUserEntitlements } from "@/modules/payment/infrastructure/entitlements.server";
import {
  getNationalLeaderboard,
  listUserTryoutAttemptsFromCloud,
} from "@/modules/tryout/infrastructure/tryout-attempts-repository.server";
import { TryoutCatExperience } from "@/modules/tryout/presentation/tryout-cat-experience";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Simulasi Tryout CAT SKD Resmi (110 Soal)",
  description:
    "Simulasi Tryout CAT SKD CPNS resmi standar BKN: 30 TWK, 35 TIU, dan 45 TKP dalam 100 menit dengan evaluasi ambang batas (passing grade), Cloud Sync, dan Ranking Nasional.",
};

export default async function TryoutPage() {
  const [entitlements, user, initialLeaderboard] = await Promise.all([
    getCurrentUserEntitlements(),
    getAuthenticatedUser(),
    getNationalLeaderboard("all-official", 20),
  ]);

  const cloudHistoryRes = user
    ? await listUserTryoutAttemptsFromCloud(user.id, 30)
    : { records: [], schemaMissing: false };

  return (
    <TryoutCatExperience
      hasOfficialAccess={entitlements.hasOfficialTryout}
      isAuthenticated={Boolean(user)}
      initialCloudHistory={cloudHistoryRes.records}
      initialCloudSchemaMissing={
        cloudHistoryRes.schemaMissing || initialLeaderboard.schemaMissing
      }
      initialLeaderboard={initialLeaderboard}
      siteHeader={<SiteHeader />}
      siteFooter={<SiteFooter />}
    />
  );
}
