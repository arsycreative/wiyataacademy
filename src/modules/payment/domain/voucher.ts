import type { ProductId } from "./products";

export type VoucherDiscountType = "percent" | "fixed";

export interface VoucherRecord {
  id: string;
  code: string;
  description: string | null;
  discount_type: VoucherDiscountType;
  discount_value: number;
  max_discount: number | null;
  min_purchase: number;
  applicable_products: string[] | null;
  max_uses: number | null;
  used_count: number;
  is_active: boolean;
  valid_from: string;
  expires_at: string | null;
  created_at: string;
}

export type VoucherValidationResult =
  | {
      valid: true;
      code: string;
      description: string | null;
      originalPrice: number;
      discountAmount: number;
      finalPrice: number;
    }
  | {
      valid: false;
      error: string;
    };

export function normalizeVoucherCode(raw: string): string {
  return raw.trim().toUpperCase().replace(/\s+/g, "");
}

/**
 * Menghitung potongan harga & memvalidasi aturan kelayakan voucher secara deterministik.
 */
export function evaluateVoucherForProduct(
  voucher: Pick<
    VoucherRecord,
    | "code"
    | "description"
    | "discount_type"
    | "discount_value"
    | "max_discount"
    | "min_purchase"
    | "applicable_products"
    | "max_uses"
    | "used_count"
    | "is_active"
    | "valid_from"
    | "expires_at"
  >,
  productId: ProductId,
  originalPrice: number,
  now: Date = new Date(),
): VoucherValidationResult {
  if (!voucher.is_active) {
    return { valid: false, error: "Kode promo ini sudah tidak aktif." };
  }

  const nowMs = now.getTime();
  if (voucher.valid_from) {
    const startMs = new Date(voucher.valid_from).getTime();
    if (!Number.isNaN(startMs) && nowMs < startMs) {
      return { valid: false, error: "Periode kode promo ini belum dimulai." };
    }
  }

  if (voucher.expires_at) {
    const endMs = new Date(voucher.expires_at).getTime();
    if (!Number.isNaN(endMs) && nowMs > endMs) {
      return { valid: false, error: "Kode promo ini sudah kedaluwarsa." };
    }
  }

  if (voucher.max_uses !== null && voucher.used_count >= voucher.max_uses) {
    return { valid: false, error: "Kuota penggunaan kode promo telah habis." };
  }

  if (
    Array.isArray(voucher.applicable_products) &&
    voucher.applicable_products.length > 0 &&
    !voucher.applicable_products.includes(productId)
  ) {
    return {
      valid: false,
      error: "Kode promo tidak berlaku untuk paket yang dipilih.",
    };
  }

  if (originalPrice < voucher.min_purchase) {
    return {
      valid: false,
      error: `Minimal transaksi untuk kode ini adalah Rp ${voucher.min_purchase.toLocaleString("id-ID")}.`,
    };
  }

  let discountAmount = 0;
  if (voucher.discount_type === "percent") {
    const pct = Math.min(100, Math.max(0, voucher.discount_value));
    discountAmount = Math.floor((originalPrice * pct) / 100);
    if (voucher.max_discount !== null && voucher.max_discount > 0) {
      discountAmount = Math.min(discountAmount, voucher.max_discount);
    }
  } else {
    discountAmount = Math.max(0, voucher.discount_value);
  }

  discountAmount = Math.min(discountAmount, originalPrice);
  const finalPrice = Math.max(0, originalPrice - discountAmount);

  return {
    valid: true,
    code: voucher.code,
    description: voucher.description,
    originalPrice,
    discountAmount,
    finalPrice,
  };
}

