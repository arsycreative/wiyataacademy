import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

import { requireAdminApi } from "@/modules/admin/infrastructure/admin-guard.server";
import {
  syncOrderWithMidtrans,
  updateOrderStatusManually,
} from "@/modules/admin/infrastructure/admin-repository.server";

export const dynamic = "force-dynamic";

const orderActionSchema = z.discriminatedUnion("action", [
  z.object({
    action: z.literal("sync_midtrans"),
  }),
  z.object({
    action: z.literal("set_status"),
    status: z.enum(["pending", "paid", "failed", "expired", "cancelled", "refunded"]),
  }),
]);

export async function POST(
  req: NextRequest,
  context: { params: Promise<{ orderId: string }> },
) {
  const guard = await requireAdminApi();
  if (!guard.ok) return guard.response;

  try {
    const { orderId } = await context.params;
    const rawBody: unknown = await req.json();
    const parsed = orderActionSchema.safeParse(rawBody);

    if (!parsed.success) {
      return NextResponse.json(
        { error: "Payload tidak valid", details: parsed.error.flatten() },
        { status: 400 },
      );
    }

    if (parsed.data.action === "sync_midtrans") {
      const result = await syncOrderWithMidtrans(orderId);
      return NextResponse.json({
        ok: true,
        status: result.status,
        midtransStatus: result.midtransStatus,
      });
    }

    await updateOrderStatusManually(orderId, parsed.data.status);
    return NextResponse.json({
      ok: true,
      status: parsed.data.status,
    });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Terjadi kesalahan server.";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

