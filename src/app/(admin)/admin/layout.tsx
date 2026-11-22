import type { Metadata } from "next";
import { redirect } from "next/navigation";
import type { ReactNode } from "react";

import { getAdminSession } from "@/modules/admin/infrastructure/admin-guard.server";
import { AdminAccessDenied } from "@/modules/admin/presentation/admin-access-denied";
import { AdminShell } from "@/modules/admin/presentation/admin-shell";
import { APP_ROUTES } from "@/shared/constants/app";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: {
    default: "Admin Console",
    template: "%s | Wiyata Admin",
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default async function AdminLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  const session = await getAdminSession();

  if (!session.authorized) {
    if (session.reason === "unauthenticated") {
      redirect(`${APP_ROUTES.login}?next=${encodeURIComponent(APP_ROUTES.admin)}`);
    }

    return (
      <AdminAccessDenied
        reason={session.reason}
        userEmail={session.user?.email ?? "akun tidak diketahui"}
      />
    );
  }

  return (
    <AdminShell
      userEmail={session.user.email}
      userName={session.user.fullName}
      role={session.role}
    >
      {children}
    </AdminShell>
  );
}

