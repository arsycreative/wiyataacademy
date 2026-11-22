import "server-only";

import { getProduct, type ProductId } from "@/modules/payment/domain/products";
import {
  evaluateVoucherForProduct,
  normalizeVoucherCode,
  type VoucherRecord,
  type VoucherValidationResult,
} from "@/modules/payment/domain/voucher";
import { createSupabaseAdminClient } from "@/shared/supabase/admin";

export async function validateVoucherInDb(
  rawCode: string,
  productId: ProductId,
): Promise<VoucherValidationResult> {
  const code = normalizeVoucherCode(rawCode);
  if (!code) {
    return { valid: false, error: "Masukkan kode promo terlebih dahulu." };
  }

  const product = getProduct(productId);
  if (!product) {
    return { valid: false, error: "Paket tidak ditemukan." };
  }

  const admin = createSupabaseAdminClient({ allowAnonFallback: true });
  if (!admin) {
    return { valid: false, error: "Layanan database tidak tersedia." };
  }

  const { data, error } = await admin
    .from("vouchers")
    .select("*")
    .eq("code", code)
    .maybeSingle<VoucherRecord>();

  if (error) {
    if (error.code === "42P01" || error.code === "PGRST205") {
      return {
        valid: false,
        error: "Sistem kode promo belum diaktifkan di database.",
      };
    }
    return { valid: false, error: "Kode promo tidak ditemukan." };
  }

  if (!data) {
    return { valid: false, error: "Kode promo tidak valid atau tidak ditemukan." };
  }

  return evaluateVoucherForProduct(data, product.id, product.price);
}

export async function incrementVoucherUsageInDb(code: string): Promise<void> {
  const normalized = normalizeVoucherCode(code);
  if (!normalized) return;

  const admin = createSupabaseAdminClient({ allowAnonFallback: true });
  if (!admin) return;

  const { error } = await admin.rpc("increment_voucher_usage", {
    p_code: normalized,
  });

  if (error) {
    // Fallback jika fungsi RPC belum tersedia
    const { data } = await admin
      .from("vouchers")
      .select("used_count")
      .eq("code", normalized)
      .maybeSingle<{ used_count: number }>();

    if (data) {
      await admin
        .from("vouchers")
        .update({
          used_count: (data.used_count ?? 0) + 1,
          updated_at: new Date().toISOString(),
        })
        .eq("code", normalized);
    }
  }
}

