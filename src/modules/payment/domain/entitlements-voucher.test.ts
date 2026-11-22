import { describe, expect, it } from "vitest";
import {
  isQuestionPatternFree,
  resolveUserEntitlements,
} from "./entitlements";
import { evaluateVoucherForProduct, normalizeVoucherCode } from "./voucher";

describe("entitlements domain", () => {
  it("grants only free patterns for unsubscribed non-admin users", () => {
    const ent = resolveUserEntitlements({
      isAuthenticated: true,
      isAdmin: false,
      activeProductIds: [],
    });

    expect(ent.hasFullQuestionBank).toBe(false);
    expect(ent.hasOfficialTryout).toBe(false);
    expect(isQuestionPatternFree("TIU", "sinonim-antonim-akronim")).toBe(true);
    expect(isQuestionPatternFree("TIU", "analogi")).toBe(false);
    expect(isQuestionPatternFree("TWK", "nasionalisme")).toBe(true);
    expect(isQuestionPatternFree("TKP", "pelayanan-publik")).toBe(true);
  });

  it("unlocks tryout only for tryout-bundle and unlocks all for skd-intensif/admin", () => {
    const bundle = resolveUserEntitlements({
      isAuthenticated: true,
      isAdmin: false,
      activeProductIds: ["tryout-bundle"],
    });
    expect(bundle.hasOfficialTryout).toBe(true);
    expect(bundle.hasFullQuestionBank).toBe(false);

    const intensif = resolveUserEntitlements({
      isAuthenticated: true,
      isAdmin: false,
      activeProductIds: ["skd-intensif"],
    });
    expect(intensif.hasOfficialTryout).toBe(true);
    expect(intensif.hasFullQuestionBank).toBe(true);

    const admin = resolveUserEntitlements({
      isAuthenticated: true,
      isAdmin: true,
      activeProductIds: [],
    });
    expect(admin.hasOfficialTryout).toBe(true);
    expect(admin.hasFullQuestionBank).toBe(true);
  });
});

describe("voucher domain", () => {
  const baseVoucher = {
    code: "CPNS2026",
    description: "Diskon Awal Tahun",
    discount_type: "percent" as const,
    discount_value: 20,
    max_discount: 50_000,
    min_purchase: 100_000,
    applicable_products: null,
    max_uses: 10,
    used_count: 2,
    is_active: true,
    valid_from: "2026-01-01T00:00:00Z",
    expires_at: "2027-01-01T00:00:00Z",
  };

  it("normalizes voucher code properly", () => {
    expect(normalizeVoucherCode("  cpns 2026  ")).toBe("CPNS2026");
  });

  it("calculates capped percent discount and rejects expired/quota-exhausted vouchers", () => {
    const now = new Date("2026-06-01T00:00:00Z");

    // 20% of 299,000 = 59,800 -> capped at max_discount 50,000
    const res = evaluateVoucherForProduct(
      baseVoucher,
      "skd-intensif",
      299_000,
      now,
    );
    expect(res.valid).toBe(true);
    if (res.valid) {
      expect(res.discountAmount).toBe(50_000);
      expect(res.finalPrice).toBe(249_000);
    }

    const exhausted = evaluateVoucherForProduct(
      { ...baseVoucher, used_count: 10 },
      "skd-intensif",
      299_000,
      now,
    );
    expect(exhausted.valid).toBe(false);

    const wrongProduct = evaluateVoucherForProduct(
      { ...baseVoucher, applicable_products: ["skd-premium"] },
      "tryout-bundle",
      149_000,
      now,
    );
    expect(wrongProduct.valid).toBe(false);
  });
});

