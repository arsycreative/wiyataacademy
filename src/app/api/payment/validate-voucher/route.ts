import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

import { PRODUCTS, getProduct, type ProductId } from "@/modules/payment/domain/products";
import { type VoucherValidationResult } from "@/modules/payment/domain/voucher";
import { validateVoucherInDb } from "@/modules/payment/infrastructure/voucher-repository.server";

export const dynamic = "force-dynamic";

const validateSchema = z.object({
  code: z.string().trim().min(1, "Kode promo wajib diisi"),
  productId: z.string().trim().optional(),
});

export async function POST(req: NextRequest) {
  try {
    const rawBody: unknown = await req.json();
    const parsed = validateSchema.safeParse(rawBody);

    if (!parsed.success) {
      return NextResponse.json(
        { valid: false, error: "Masukkan kode promo yang valid." },
        { status: 400 },
      );
    }

    // Jika productId spesifik diberikan, validasi satu produk saja
    if (parsed.data.productId && parsed.data.productId !== "all") {
      const product = getProduct(parsed.data.productId);
      if (!product) {
        return NextResponse.json(
          { valid: false, error: "Paket belajar tidak ditemukan." },
          { status: 404 },
        );
      }

      const result = await validateVoucherInDb(parsed.data.code, product.id);
      return NextResponse.json(result, { status: result.valid ? 200 : 400 });
    }

    // Evaluasi kode promo untuk seluruh katalog produk sekaligus
    const productIds = Object.keys(PRODUCTS) as ProductId[];
    const entries = await Promise.all(
      productIds.map(async (id) => [
        id,
        await validateVoucherInDb(parsed.data.code, id),
      ] as const),
    );

    const discountsByProduct = Object.fromEntries(entries) as Record<
      ProductId,
      VoucherValidationResult
    >;

    const anyValid = entries.find(([, res]) => res.valid);
    if (!anyValid) {
      const firstError = entries[0]?.[1];
      return NextResponse.json(
        {
          valid: false,
          error:
            firstError && !firstError.valid
              ? firstError.error
              : "Kode promo tidak valid.",
        },
        { status: 400 },
      );
    }

    return NextResponse.json({
      valid: true,
      code: anyValid[1].valid ? anyValid[1].code : parsed.data.code.toUpperCase(),
      description: anyValid[1].valid ? anyValid[1].description : null,
      discountsByProduct,
    });
  } catch {
    return NextResponse.json(
      { valid: false, error: "Gagal memeriksa kode promo." },
      { status: 500 },
    );
  }
}
