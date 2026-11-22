import { NextRequest, NextResponse } from "next/server";

import { requireAdminApi } from "@/modules/admin/infrastructure/admin-guard.server";
import { getAdminUserDetail } from "@/modules/admin/infrastructure/admin-repository.server";

export const dynamic = "force-dynamic";

export async function GET(
  _req: NextRequest,
  context: { params: Promise<{ userId: string }> },
) {
  const guard = await requireAdminApi();
  if (!guard.ok) return guard.response;

  try {
    const { userId } = await context.params;
    const detail = await getAdminUserDetail(userId);
    if (!detail) {
      return NextResponse.json(
        { error: "Pengguna tidak ditemukan." },
        { status: 404 },
      );
    }

    return NextResponse.json(detail);
  } catch (err) {
    const message = err instanceof Error ? err.message : "Terjadi kesalahan server.";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
