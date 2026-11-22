import { describe, expect, it } from "vitest";
import { buildCsvContent } from "./csv";
import {
  buildDailyRevenueSeries,
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

  it("builds a 14-day daily revenue series including zero days", () => {
    const ref = new Date("2026-11-22T10:00:00Z");
    const series = buildDailyRevenueSeries(
      [
        {
          amount: 299000,
          status: "paid",
          paid_at: "2026-11-22T08:00:00Z",
          created_at: "2026-11-22T07:55:00Z",
        },
        {
          amount: 149000,
          status: "pending",
          paid_at: null,
          created_at: "2026-11-21T08:00:00Z",
        },
      ],
      7,
      ref,
    );

    expect(series).toHaveLength(7);
    expect(series[6].dateKey).toBe("2026-11-22");
    expect(series[6].revenue).toBe(299000);
    expect(series[6].paidCount).toBe(1);
    expect(series[5].revenue).toBe(0);
  });

  it("formats RFC-4180 CSV with UTF-8 BOM and proper escaping", () => {
    const csv = buildCsvContent(
      ["Order ID", "Nama", "Nominal"],
      [['WA-1', 'Budi, "Santoso"', 299000]],
    );
    expect(csv.startsWith("\uFEFF")).toBe(true);
    expect(csv).toContain('"Budi, ""Santoso"""');
  });
});

