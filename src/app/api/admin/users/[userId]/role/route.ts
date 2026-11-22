import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

import { requireAdminApi } from "@/modules/admin/infrastructure/admin-guard.server";
import { updateUserRole } from "@/modules/admin/infrastructure/admin-repository.server";

export const dynamic = "force-dynamic";

const roleSchema = z.object({
  role: z.enum(["student", "admin", "superadmin"]),
});

export async function PATCH(
  req: NextRequest,
  context: { params: Promise<{ userId: string }> },
) {
  const guard = await requireAdminApi({ requireSuperAdmin: true });
  if (!guard.ok) return guard.response;

  try {
    const { userId } = await context.params;
    const rawBody: unknown = await req.json();
    const parsed = roleSchema.safeParse(rawBody);

    if (!parsed.success) {
      return NextResponse.json(
        { error: "Role tidak valid", details: parsed.error.flatten() },
        { status: 400 },
      );
    }

    if (userId === guard.user.id && parsed.data.role !== "superadmin") {
      return NextResponse.json(
        { error: "Tidak dapat menurunkan role akun Anda sendiri." },
        { status: 400 },
      );
    }

    await updateUserRole(userId, parsed.data.role);
    return NextResponse.json({ ok: true, role: parsed.data.role });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Terjadi kesalahan server.";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
