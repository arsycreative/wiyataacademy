import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import { ArrowLeft } from "lucide-react";

import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { Button } from "@/components/ui/button";
import {
  createProfileRepository,
  getAuthenticatedUser,
} from "@/modules/auth/infrastructure/profile-repository.server";
import { AccountDashboard } from "@/modules/auth/presentation/account-dashboard";
import { createTiuProgressRepository } from "@/modules/question-bank/infrastructure/tiu-progress-repository.server";
import { APP_ROUTES } from "@/shared/constants/app";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Akun & Progres Belajar",
  description:
    "Kelola profil akun Wiyata Academy dan pantau progres latihan 9 pola soal TIU SKD CPNS.",
};

export default async function AccountPage() {
  const user = await getAuthenticatedUser();
  if (!user) {
    redirect(`${APP_ROUTES.login}?next=${encodeURIComponent(APP_ROUTES.account)}`);
  }

  const profileRepo = createProfileRepository();
  const progressRepo = createTiuProgressRepository();

  const [profileRes, progressRes] = await Promise.all([
    profileRepo.findById(user.id),
    progressRepo.findByUserId(user.id),
  ]);

  return (
    <div className="flex min-h-screen flex-col bg-[#f8fbff] text-slate-950">
      <SiteHeader />

      <main className="mx-auto w-full max-w-[1280px] flex-1 px-5 py-10 sm:px-8 lg:px-10">
        <div className="mb-6">
          <Button
            asChild
            variant="ghost"
            className="-ml-2 text-blue-700 hover:bg-blue-50 hover:text-blue-800"
          >
            <Link href={APP_ROUTES.tiuPractice}>
              <ArrowLeft className="size-4" aria-hidden />
              Kembali ke Bank Soal TIU
            </Link>
          </Button>
        </div>

        <AccountDashboard
          user={{
            id: user.id,
            email: user.email,
            fullName: profileRes.data?.fullName ?? user.fullName,
            avatarUrl: profileRes.data?.avatarUrl ?? user.avatarUrl,
            providers: user.providers,
            createdAt: user.createdAt,
          }}
          initialCloudProgress={progressRes.data}
          initialSchemaMissing={profileRes.schemaMissing || progressRes.schemaMissing}
        />
      </main>

      <SiteFooter />
    </div>
  );
}
