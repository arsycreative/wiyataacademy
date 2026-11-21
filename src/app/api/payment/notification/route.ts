import { NextRequest, NextResponse } from "next/server";
import { verifyMidtransSignature } from "@/lib/midtrans";
import {
  getOrderByOrderId,
  updateOrderByOrderId,
  activateSubscription,
} from "@/modules/payment/infrastructure/order-repository";

/**
 * Webhook handler untuk notifikasi Midtrans.
 * URL ini harus didaftarkan di Dashboard Midtrans:
 *   Settings → Configuration → Payment Notification URL
 *   → https://<domain>/api/payment/notification
 *
 * Untuk testing lokal gunakan ngrok:
 *   ngrok http 3000
 *   lalu set ke https://xxxx.ngrok.io/api/payment/notification
 */
export const dynamic = "force-dynamic";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json() as Record<string, unknown>;

    const orderId          = typeof body.order_id === "string" ? body.order_id : "";
    const statusCode       = typeof body.status_code === "string" ? body.status_code : "";
    const grossAmount      = typeof body.gross_amount === "string" ? body.gross_amount : "";
    const signatureKey     = typeof body.signature_key === "string" ? body.signature_key : "";
    const transactionStatus = typeof body.transaction_status === "string" ? body.transaction_status : "";
    const paymentType      = typeof body.payment_type === "string" ? body.payment_type : "";
    const transactionId    = typeof body.transaction_id === "string" ? body.transaction_id : "";

    // ── 1. Verifikasi signature ────────────────────────────────────────────
    if (!verifyMidtransSignature(orderId, statusCode, grossAmount, signatureKey)) {
      console.warn("[Notification] Invalid signature for order:", orderId);
      return NextResponse.json({ error: "Invalid signature" }, { status: 403 });
    }

    // ── 2. Ambil order dari DB ─────────────────────────────────────────────
    const order = await getOrderByOrderId(orderId);
    if (!order) {
      console.warn("[Notification] Order not found:", orderId);
      return NextResponse.json({ error: "Order not found" }, { status: 404 });
    }

    // ── 3. Map status Midtrans ke status internal ──────────────────────────
    type InternalStatus = "pending" | "paid" | "failed" | "expired" | "cancelled";

    const statusMap: Record<string, InternalStatus> = {
      capture:   "paid",
      settlement: "paid",
      pending:   "pending",
      deny:      "failed",
      cancel:    "cancelled",
      expire:    "expired",
      failure:   "failed",
    };

    const newStatus: InternalStatus = statusMap[transactionStatus] ?? "pending";

    // ── 4. Update order ────────────────────────────────────────────────────
    await updateOrderByOrderId(orderId, {
      status: newStatus,
      midtrans_transaction_id: transactionId,
      midtrans_status: transactionStatus,
      payment_method: paymentType,
      paid_at: newStatus === "paid" ? new Date().toISOString() : undefined,
    });

    // ── 5. Aktifkan subscription jika paid ─────────────────────────────────
    if (newStatus === "paid") {
      await activateSubscription(order.user_id, orderId, order.product_id);
      console.info("[Notification] Subscription activated:", {
        userId: order.user_id,
        productId: order.product_id,
        orderId,
      });
    }

    return NextResponse.json({ received: true });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Internal error";
    console.error("[/api/payment/notification]", message);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

