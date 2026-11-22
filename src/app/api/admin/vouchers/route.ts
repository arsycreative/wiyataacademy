import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

import { requireAdminApi } from "@/modules/admin/infrastructure/admin-guard.server";
import {
  createAdminVoucher,
  listAdminVouchers,
} from "@/modules/admin/infrastructure/admin-repository.server";

export const dynamic = "force-dynamic";

const createVoucherSchema = z.object({
  code: z.string().trim().min(3, "Kode promo minimal 3 karakter").max(32),
  description: z.string().trim().max(120).optional().nullable(),
  discount_type: z.enum(["percent", "fixed"]),
  discount_value: z.number().int().positive("Nilai diskon harus positif"),
  max_discount: z.number().int().positive().optional().nullable(),
  min_purchase: z.number().int().min(0).optional(),
  applicable_products: z.array(z.string()).optional().nullable(),
  max_uses: z.number().int().positive().optional().nullable(),
  expires_at: z.string().optional().nullable(),
});

export async function GET() {
  const guard = await requireAdminApi();
  if (!guard.ok) return guard.response;

  try {
    const data = await listAdminVouchers();
    return NextResponse.json(data);
  } catch (err) {
    const message = err instanceof Error ? err.message : "Terjadi kesalahan server.";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  const guard = await requireAdminApi();
  if (!guard.ok) return guard.response;

  try {
    const rawBody: unknown = await req.json();
    const parsed = createVoucherSchema.safeParse(rawBody);

    if (!parsed.success) {
      return NextResponse.json(
        { error: "Data voucher tidak valid.", details: parsed.error.flatten() },
        { status: 400 },
      );
    }

    if (
      parsed.data.discount_type === "percent" &&
      parsed.data.discount_value > 100
    ) {
      return NextResponse.json(
        { error: "Diskon persentase tidak boleh melebihi 100%." },
        { status: 400 },
      );
    }

    const voucher = await createAdminVoucher(parsed.data);
    return NextResponse.json({ ok: true, voucher }, { status: 201 });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Terjadi kesalahan server.";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

