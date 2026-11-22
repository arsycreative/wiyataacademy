import { describe, expect, it } from "vitest";
import {
  buildProductRevenueBreakdown,
  computeConversionRate,
  isAdminRole,
} from "./types";

describe("admin domain helpers", () => {
  it("recognizes only admin and superadmin as admin roles", () => {
    expect(isAdminRole("admin")).toBe(true);
    expect(isAdminRole("superadmin")).toBe(true);
    expect(isAdminRole("student")).toBe(false);
    expect(isAdminRole(null)).toBe(false);
    expect(isAdminRole(undefined)).toBe(false);
  });

  it("computes conversion rate accurately with 1 decimal place", () => {
    expect(computeConversionRate(0, 0)).toBe(0);
    expect(computeConversionRate(5, 100)).toBe(5);
    expect(computeConversionRate(1, 3)).toBe(33.3);
  });

  it("aggregates paid orders by catalog product and ignores unpaid orders", () => {
    const breakdown = buildProductRevenueBreakdown([
      { product_id: "skd-intensif", amount: 299000, status: "paid" },
      { product_id: "skd-intensif", amount: 299000, status: "pending" },
      { product_id: "skd-premium", amount: 499000, status: "paid" },
      { product_id: "tryout-bundle", amount: 149000, status: "expired" },
    ]);

    const intensif = breakdown.find((b) => b.productId === "skd-intensif");
    const premium = breakdown.find((b) => b.productId === "skd-premium");
    const bundle = breakdown.find((b) => b.productId === "tryout-bundle");

    expect(intensif?.paidCount).toBe(1);
    expect(intensif?.revenue).toBe(299000);
    expect(premium?.paidCount).toBe(1);
    expect(premium?.revenue).toBe(499000);
    expect(bundle?.paidCount).toBe(0);
    expect(bundle?.revenue).toBe(0);
  });
});
