import { describe, expect, it } from "vitest";
import crypto from "crypto";

import { PRODUCTS, getProduct } from "@/modules/payment/domain/products";
import { verifyMidtransSignature } from "@/lib/midtrans";

describe("Payment Domain & Products", () => {
  it("contains valid products with correct prices", () => {
    expect(PRODUCTS["skd-intensif"]).toBeDefined();
    expect(PRODUCTS["skd-intensif"].price).toBe(299_000);
    expect(PRODUCTS["skd-premium"].price).toBe(499_000);
    expect(PRODUCTS["tryout-bundle"].price).toBe(149_000);
  });

  it("getProduct returns correct product or null for invalid ID", () => {
    expect(getProduct("skd-intensif")?.name).toBe("Paket Intensif SKD CPNS");
    expect(getProduct("invalid-product")).toBeNull();
  });
});

describe("verifyMidtransSignature", () => {
  it("verifies SHA-512 signature matching orderId, statusCode, grossAmount, serverKey", () => {
    const orderId = "TEST-ORDER-123";
    const statusCode = "200";
    const grossAmount = "299000.00";
    const serverKey = process.env.MIDTRANS_SERVER_KEY ?? "";

    const expectedSignature = crypto
      .createHash("sha512")
      .update(`${orderId}${statusCode}${grossAmount}${serverKey}`)
      .digest("hex");

    const isValid = verifyMidtransSignature(
      orderId,
      statusCode,
      grossAmount,
      expectedSignature,
    );
    expect(isValid).toBe(true);

    const isInvalid = verifyMidtransSignature(
      orderId,
      statusCode,
      grossAmount,
      "wrong-signature",
    );
    expect(isInvalid).toBe(false);
  });
});

