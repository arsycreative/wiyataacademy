/**
 * Midtrans Singleton — server-side only.
 * Jangan import file ini di client components.
 */
import crypto from "crypto";
import MidtransClient from "midtrans-client";

const isProduction = process.env.MIDTRANS_IS_PRODUCTION === "true";
const serverKey = process.env.MIDTRANS_SERVER_KEY ?? "";
const clientKey = process.env.MIDTRANS_CLIENT_KEY ?? "";

export function isMidtransConfigured(): boolean {
  return Boolean(serverKey && clientKey);
}

export const snap = new MidtransClient.Snap({
  isProduction,
  serverKey: serverKey || "SB-Mid-server-dummy",
  clientKey: clientKey || "SB-Mid-client-dummy",
});

export const coreApi = new MidtransClient.CoreApi({
  isProduction,
  serverKey: serverKey || "SB-Mid-server-dummy",
  clientKey: clientKey || "SB-Mid-client-dummy",
});

/** Verifikasi signature Midtrans notification webhook */
export function verifyMidtransSignature(
  orderId: string,
  statusCode: string,
  grossAmount: string,
  receivedSignatureKey: string,
): boolean {
  const activeServerKey = process.env.MIDTRANS_SERVER_KEY ?? "";
  const expected = crypto
    .createHash("sha512")
    .update(`${orderId}${statusCode}${grossAmount}${activeServerKey}`)
    .digest("hex");
  return expected === receivedSignatureKey;
}

export const MIDTRANS_SNAP_JS = isProduction
  ? "https://app.midtrans.com/snap/snap.js"
  : "https://app.sandbox.midtrans.com/snap/snap.js";

export { isProduction as MIDTRANS_IS_PRODUCTION };
