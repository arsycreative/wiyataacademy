"use client";

import { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { CreditCard, Loader2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useSupabaseAuth } from "@/modules/auth/presentation/use-supabase-auth";
import type { ProductId } from "@/modules/payment/domain/products";
import { APP_ROUTES } from "@/shared/constants/app";
import { toast } from "@/shared/stores/toast-store";

interface SnapOptions {
  onSuccess?: (result: Record<string, unknown>) => void;
  onPending?: (result: Record<string, unknown>) => void;
  onError?: (result: Record<string, unknown>) => void;
  onClose?: () => void;
}

interface WindowWithSnap extends Window {
  snap?: {
    pay: (token: string, options?: SnapOptions) => void;
  };
}

interface CheckoutButtonProps {
  productId: ProductId;
  productName?: string;
  amountDisplay?: string;
  className?: string;
  variant?: "default" | "secondary" | "outline";
  children?: React.ReactNode;
}

const MIDTRANS_CLIENT_KEY = process.env.NEXT_PUBLIC_MIDTRANS_CLIENT_KEY ?? "";
const IS_PRODUCTION = process.env.NEXT_PUBLIC_MIDTRANS_IS_PRODUCTION === "true";
const SNAP_SCRIPT_URL = IS_PRODUCTION
  ? "https://app.midtrans.com/snap/snap.js"
  : "https://app.sandbox.midtrans.com/snap/snap.js";

export function CheckoutButton({
  productId,
  productName = "Paket Belajar",
  amountDisplay,
  className,
  variant = "default",
  children,
}: CheckoutButtonProps) {
  const router = useRouter();
  const { user, isLoading: isAuthLoading } = useSupabaseAuth();
  const [isLoading, setIsLoading] = useState(false);

  // ── Load Midtrans Snap.js script on client ──────────────────────────────
  useEffect(() => {
    if (typeof window === "undefined" || !MIDTRANS_CLIENT_KEY) return;
    if (document.getElementById("midtrans-snap-script")) return;

    const script = document.createElement("script");
    script.id = "midtrans-snap-script";
    script.src = SNAP_SCRIPT_URL;
    script.setAttribute("data-client-key", MIDTRANS_CLIENT_KEY);
    script.async = true;
    document.body.appendChild(script);
  }, []);

  const handleCheckout = useCallback(async () => {
    // 1. Cek login
    if (isAuthLoading) return;
    if (!user) {
      toast.info(
        "Silakan masuk atau daftar akun terlebih dahulu untuk melanjutkan pembayaran.",
      );
      router.push(
        `${APP_ROUTES.login}?next=${encodeURIComponent(window.location.pathname)}`,
      );
      return;
    }

    setIsLoading(true);

    try {
      // 2. Request Snap Token dari server
      const res = await fetch("/api/payment/create-token", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ productId }),
      });

      const data = (await res.json()) as {
        token?: string;
        redirectUrl?: string;
        orderId?: string;
        error?: string;
      };

      if (!res.ok || !data.token) {
        throw new Error(
          data.error ?? "Gagal memproses transaksi. Silakan coba lagi.",
        );
      }

      // 3. Jalankan Midtrans Snap Popup
      const win = window as WindowWithSnap;
      if (typeof win.snap?.pay === "function") {
        win.snap.pay(data.token, {
          onSuccess: (result) => {
            console.info("[Midtrans] Success:", result);
            toast.success(`Pembayaran berhasil! Akses ${productName} telah aktif.`);
            router.push(
              `/payment/finish?order_id=${encodeURIComponent(data.orderId ?? "")}`,
            );
          },
          onPending: (result) => {
            console.info("[Midtrans] Pending:", result);
            toast.info("Silakan selesaikan pembayaran sesuai petunjuk.");
            router.push(
              `/payment/pending?order_id=${encodeURIComponent(data.orderId ?? "")}`,
            );
          },
          onError: (result) => {
            console.error("[Midtrans] Error:", result);
            toast.error("Terjadi kendala saat pembayaran. Silakan coba lagi.");
            router.push(
              `/payment/error?order_id=${encodeURIComponent(data.orderId ?? "")}`,
            );
          },
          onClose: () => {
            console.warn("[Midtrans] Customer closed the popup");
            toast.info("Anda menutup jendela pembayaran sebelum transaksi selesai.");
          },
        });
      } else if (data.redirectUrl) {
        // Fallback jika script Snap belum ready di browser: redirect ke URL Midtrans
        window.location.href = data.redirectUrl;
      } else {
        throw new Error(
          "Modul pembayaran Midtrans sedang memuat. Coba beberapa detik lagi.",
        );
      }
    } catch (err) {
      const msg = err instanceof Error ? err.message : "Terjadi kesalahan sistem";
      toast.error(msg);
    } finally {
      setIsLoading(false);
    }
  }, [user, isAuthLoading, productId, productName, router]);

  return (
    <Button
      type="button"
      onClick={handleCheckout}
      disabled={isLoading || isAuthLoading}
      variant={variant}
      className={cn("gap-2 font-semibold", className)}
    >
      {isLoading ? (
        <>
          <Loader2 className="size-4 animate-spin" aria-hidden />
          <span>Menyiapkan Pembayaran...</span>
        </>
      ) : (
        <>
          <CreditCard className="size-4" aria-hidden />
          {children ?? (
            <span>
              Beli Sekarang {amountDisplay ? `• ${amountDisplay}` : ""}
            </span>
          )}
        </>
      )}
    </Button>
  );
}
