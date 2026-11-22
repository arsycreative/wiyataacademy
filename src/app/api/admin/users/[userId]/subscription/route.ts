import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

import { requireAdminApi } from "@/modules/admin/infrastructure/admin-guard.server";
import {
  grantSubscriptionManually,
  revokeSubscriptionManually,
} from "@/modules/admin/infrastructure/admin-repository.server";

export const dynamic = "force-dynamic";

const subscriptionActionSchema = z.object({
  action: z.enum(["grant", "revoke"]),
  productId: z.string().trim().min(1, "productId wajib diisi"),
});

export async function POST(
  req: NextRequest,
  context: { params: Promise<{ userId: string }> },
) {
  const guard = await requireAdminApi();
  if (!guard.ok) return guard.response;

  try {
    const { userId } = await context.params;
    const rawBody: unknown = await req.json();
    const parsed = subscriptionActionSchema.safeParse(rawBody);

    if (!parsed.success) {
      return NextResponse.json(
        { error: "Payload tidak valid", details: parsed.error.flatten() },
        { status: 400 },
      );
    }

    if (parsed.data.action === "grant") {
      const result = await grantSubscriptionManually(userId, parsed.data.productId);
      return NextResponse.json({ ok: true, orderId: result.orderId });
    }

    await revokeSubscriptionManually(userId, parsed.data.productId);
    return NextResponse.json({ ok: true });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Terjadi kesalahan server.";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
