import type { Metadata } from "next";
import { redirect } from "next/navigation";

import { getAdminSession } from "@/modules/admin/infrastructure/admin-guard.server";
import { listAdminUsers } from "@/modules/admin/infrastructure/admin-repository.server";
import { UsersTableClient } from "@/modules/admin/presentation/users-table-client";
import { APP_ROUTES } from "@/shared/constants/app";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Siswa & Akses Paket",
};

export default async function AdminUsersPage() {
  const session = await getAdminSession();
  if (!session.authorized) {
    redirect(APP_ROUTES.login);
  }

  const { users } = await listAdminUsers({ limit: 200 });

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-slate-950">
          Manajemen Siswa &amp; Akses Paket
        </h1>
        <p className="text-sm text-slate-500">
          Kelola akun siswa terdaftar, berikan akses paket belajar gratis atau
          kompensasi, cabut akses, serta atur role admin.
        </p>
      </div>

      <UsersTableClient
        initialUsers={users}
        actorId={session.user.id}
        actorRole={session.role}
      />
    </div>
  );
}

