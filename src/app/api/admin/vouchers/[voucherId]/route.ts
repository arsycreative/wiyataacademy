import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

import { requireAdminApi } from "@/modules/admin/infrastructure/admin-guard.server";
import {
  deleteAdminVoucher,
  toggleAdminVoucherStatus,
} from "@/modules/admin/infrastructure/admin-repository.server";

export const dynamic = "force-dynamic";

const patchVoucherSchema = z.object({
  is_active: z.boolean(),
});

export async function PATCH(
  req: NextRequest,
  context: { params: Promise<{ voucherId: string }> },
) {
  const guard = await requireAdminApi();
  if (!guard.ok) return guard.response;

  try {
    const { voucherId } = await context.params;
    const rawBody: unknown = await req.json();
    const parsed = patchVoucherSchema.safeParse(rawBody);

    if (!parsed.success) {
      return NextResponse.json({ error: "Payload tidak valid." }, { status: 400 });
    }

    await toggleAdminVoucherStatus(voucherId, parsed.data.is_active);
    return NextResponse.json({ ok: true, is_active: parsed.data.is_active });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Terjadi kesalahan server.";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

export async function DELETE(
  _req: NextRequest,
  context: { params: Promise<{ voucherId: string }> },
) {
  const guard = await requireAdminApi();
  if (!guard.ok) return guard.response;

  try {
    const { voucherId } = await context.params;
    await deleteAdminVoucher(voucherId);
    return NextResponse.json({ ok: true });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Terjadi kesalahan server.";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
