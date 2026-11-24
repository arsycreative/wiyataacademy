import type { Metadata } from "next";
import { redirect } from "next/navigation";

import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { isAdminRole } from "@/modules/admin/domain/types";
import {
  createProfileRepository,
  getAuthenticatedUser,
} from "@/modules/auth/infrastructure/profile-repository.server";
import { AccountDashboard } from "@/modules/auth/presentation/account-dashboard";
import { getUserBillingSummary } from "@/modules/payment/infrastructure/entitlements.server";
import { AccountBillingSection } from "@/modules/payment/presentation/account-billing-section";
import { summarizeAllProgress } from "@/modules/question-bank/domain/subtest-summary";
import { createTiuProgressRepository } from "@/modules/question-bank/infrastructure/tiu-progress-repository.server";
import { sanitizePracticeProgress } from "@/modules/question-bank/infrastructure/tiu-progress-sync";
import {
  getAttemptRankSummary,
  listUserTryoutAttemptsFromCloud,
} from "@/modules/tryout/infrastructure/tryout-attempts-repository.server";
import { APP_ROUTES } from "@/shared/constants/app";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Akun & Progres Belajar",
  description:
    "Kelola profil akun Wiyata Academy, status paket belajar, dan pantau progres latihan SKD CPNS.",
};

export default async function AccountPage() {
  const user = await getAuthenticatedUser();
  if (!user) {
    redirect(`${APP_ROUTES.login}?next=${encodeURIComponent(APP_ROUTES.account)}`);
  }

  const profileRepo = createProfileRepository();
  const progressRepo = createTiuProgressRepository();

  const [profileRes, progressRes, billingSummary, tryoutCloudRes, nationalRank] =
    await Promise.all([
      profileRepo.findById(user.id),
      progressRepo.findByUserId(user.id),
      getUserBillingSummary(user.id),
      listUserTryoutAttemptsFromCloud(user.id, 20),
      getAttemptRankSummary("all-official"),
    ]);

  const initialSummaries = summarizeAllProgress(
    progressRes.data ?? sanitizePracticeProgress({}),
  );

  const isAdmin = isAdminRole(profileRes.data?.role);

  return (
    <div className="flex min-h-screen flex-col bg-[#f8fafc] text-slate-950">
      <SiteHeader />

      <main className="mx-auto w-full max-w-[1280px] flex-1 px-5 py-8 sm:px-8 sm:py-10 lg:px-10">
        <AccountDashboard
          user={{
            id: user.id,
            email: user.email,
            fullName: profileRes.data?.fullName ?? user.fullName,
            avatarUrl: profileRes.data?.avatarUrl ?? user.avatarUrl,
            providers: user.providers,
            createdAt: user.createdAt,
          }}
          isAdmin={isAdmin}
          billingSection={
            <AccountBillingSection billing={billingSummary} isAdmin={isAdmin} />
          }
          initialCloudProgress={progressRes.data}
          initialSummaries={initialSummaries}
          initialSchemaMissing={profileRes.schemaMissing || progressRes.schemaMissing}
          initialCloudTryoutHistory={tryoutCloudRes.records}
          nationalRank={nationalRank}
        />
      </main>

      <SiteFooter />
    </div>
  );
}
