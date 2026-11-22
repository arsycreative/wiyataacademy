export type OrderStatus =
  | "pending"
  | "paid"
  | "failed"
  | "expired"
  | "cancelled"
  | "refunded";

export const ORDER_STATUS_LABELS: Record<OrderStatus, string> = {
  pending: "Menunggu",
  paid: "Lunas",
  failed: "Gagal",
  expired: "Kedaluwarsa",
  cancelled: "Dibatalkan",
  refunded: "Refund",
};

const MIDTRANS_TO_INTERNAL_STATUS: Record<string, OrderStatus> = {
  capture: "paid",
  settlement: "paid",
  pending: "pending",
  deny: "failed",
  cancel: "cancelled",
  expire: "expired",
  failure: "failed",
  refund: "refunded",
  partial_refund: "refunded",
};

/**
 * Memetakan `transaction_status` dari Midtrans API / Webhook ke status internal Wiyata Academy.
 */
export function mapMidtransTransactionStatus(
  transactionStatus: string,
  fraudStatus?: string,
): OrderStatus {
  if (transactionStatus === "capture" && fraudStatus === "challenge") {
    return "pending";
  }
  return MIDTRANS_TO_INTERNAL_STATUS[transactionStatus] ?? "pending";
}
