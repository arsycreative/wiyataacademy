"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";
import { Check, CheckCircle2, Loader2, Tag, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { PRODUCTS, type ProductId } from "@/modules/payment/domain/products";
import type { VoucherValidationResult } from "@/modules/payment/domain/voucher";
import { CheckoutButton } from "@/modules/payment/presentation/checkout-button";
import { APP_ROUTES } from "@/shared/constants/app";

interface PricingGridClientProps {
  ownedProductIds: readonly ProductId[];
}

interface AppliedPromoState {
  code: string;
  description: string | null;
  discountsByProduct: Record<ProductId, VoucherValidationResult>;
}

const PRICING_TIERS: Array<{
  id: ProductId;
  eyebrow: string;
  eyebrowClass: string;
  billingNote: string;
  featured?: boolean;
  cardClass: string;
  priceClass: string;
  buttonVariant?: "default" | "outline";
  buttonClass: string;
  features: Array<{ text: string; bold?: boolean }>;
}> = [
  {
    id: "tryout-bundle",
    eyebrow: "Fokus Simulasi",
    eyebrowClass: "text-slate-500",
    billingNote: "/ sekali bayar",
    cardClass: "border-slate-200",
    priceClass: "text-slate-950",
    buttonVariant: "outline",
    buttonClass: "w-full border-slate-300 text-slate-900 hover:bg-slate-50",
    features: [
      { text: "10 Paket Try Out SKD CAT 110 Soal" },
      { text: "Standar Waktu & Passing Grade BKN" },
      { text: "Pembahasan Lengkap Tiap Butir Soal" },
      { text: "Ranking & Statistik Nilai Nasional" },
      { text: "Akses Aktif Selamanya" },
    ],
  },
  {
    id: "skd-intensif",
    eyebrow: "Paket Lengkap Mandiri",
    eyebrowClass: "text-blue-600",
    billingNote: "/ akses seumur hidup",
    featured: true,
    cardClass: "border-2 border-blue-600 shadow-xl shadow-blue-500/10",
    priceClass: "text-blue-600",
    buttonClass:
      "w-full bg-blue-600 text-white shadow-lg shadow-blue-500/25 hover:bg-blue-700",
    features: [
      { text: "2.700+ Soal HOTS Terupdate (TWK, TIU, TKP)", bold: true },
      { text: "Cheat Sheet Rumus Cepat 20 Modul", bold: true },
      { text: "Sprint Drill 10-15 Menit Berbatas Waktu" },
      { text: "Simulasi Tryout CAT Resmi 110 Soal" },
      { text: "Peta Kelemahan Pola Soal Interaktif" },
      { text: "Bebas Akses Kapan Saja & Di Mana Saja" },
    ],
  },
  {
    id: "skd-premium",
    eyebrow: "Bimbingan Intensif",
    eyebrowClass: "text-violet-600",
    billingNote: "/ sekali bayar",
    cardClass: "border-violet-200",
    priceClass: "text-slate-950",
    buttonVariant: "outline",
    buttonClass: "w-full border-violet-300 text-violet-900 hover:bg-violet-50",
    features: [
      { text: "Semua Fitur Paket Intensif SKD", bold: true },
      { text: "Live Class & Bedah Soal Mingguan via Zoom", bold: true },
      { text: "Grup Diskusi Mentor Privat Telegram" },
      { text: "Konsultasi Strategi Pemilihan Formasi" },
      { text: "Garansi Uang Kembali 7 Hari" },
    ],
  },
];

function formatRp(amount: number): string {
  return `Rp ${amount.toLocaleString("id-ID")}`;
}

export function PricingGridClient({ ownedProductIds }: PricingGridClientProps) {
  const [promoInput, setPromoInput] = useState("");
  const [promoError, setPromoError] = useState<string | null>(null);
  const [isCheckingPromo, setIsCheckingPromo] = useState(false);
  const [appliedPromo, setAppliedPromo] = useState<AppliedPromoState | null>(null);

  const handleApplyPromo = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const cleaned = promoInput.trim().toUpperCase();
    if (!cleaned) {
      setPromoError("Masukkan kode promo terlebih dahulu.");
      return;
    }

    setPromoError(null);
    setIsCheckingPromo(true);
    try {
      const res = await fetch("/api/payment/validate-voucher", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code: cleaned, productId: "all" }),
      });
      const data = (await res.json()) as {
        valid?: boolean;
        code?: string;
        description?: string | null;
        discountsByProduct?: Record<ProductId, VoucherValidationResult>;
        error?: string;
      };

      if (!res.ok || !data.valid || !data.discountsByProduct) {
        setAppliedPromo(null);
        setPromoError(data.error ?? "Kode promo tidak valid.");
        return;
      }

      setAppliedPromo({
        code: data.code ?? cleaned,
        description: data.description ?? null,
        discountsByProduct: data.discountsByProduct,
      });
      setPromoInput(data.code ?? cleaned);
    } catch {
      setPromoError("Gagal memeriksa kode promo. Coba lagi.");
    } finally {
      setIsCheckingPromo(false);
    }
  };

  const handleClearPromo = () => {
    setAppliedPromo(null);
    setPromoError(null);
    setPromoInput("");
  };

  return (
    <div className="mt-10 space-y-8">
      {/* Bar Kode Promo */}
      <div className="mx-auto max-w-xl rounded-2xl border border-blue-100 bg-white p-4 shadow-xs">
        <form
          onSubmit={handleApplyPromo}
          className="flex flex-col gap-2.5 sm:flex-row sm:items-center"
        >
          <div className="relative flex-1">
            <Tag
              className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-blue-600"
              aria-hidden
            />
            <input
              type="text"
              value={promoInput}
              onChange={(e) => setPromoInput(e.target.value.toUpperCase())}
              placeholder="Punya kode promo? Masukkan di sini (misal: CPNS2026)"
              className="h-10 w-full rounded-xl border border-slate-200 bg-slate-50/70 pl-9 pr-3 text-xs font-medium uppercase tracking-wide text-slate-900 placeholder:normal-case placeholder:tracking-normal placeholder:text-slate-400 focus:border-blue-400 focus:bg-white focus:outline-none"
            />
          </div>

          {appliedPromo ? (
            <Button
              type="button"
              variant="outline"
              onClick={handleClearPromo}
              className="h-10 gap-1.5 border-slate-200 text-xs text-slate-600 hover:bg-rose-50 hover:text-rose-600"
            >
              <X className="size-3.5" aria-hidden />
              Hapus Promo
            </Button>
          ) : (
            <Button
              type="submit"
              disabled={isCheckingPromo}
              className="h-10 bg-slate-900 px-5 text-xs font-semibold text-white hover:bg-slate-800"
            >
              {isCheckingPromo ? (
                <Loader2 className="size-3.5 animate-spin" aria-hidden />
              ) : (
                "Terapkan"
              )}
            </Button>
          )}
        </form>

        {promoError && (
          <p className="mt-2 text-xs font-medium text-rose-600">{promoError}</p>
        )}

        {appliedPromo && (
          <p className="mt-2 flex items-center gap-1.5 text-xs font-semibold text-emerald-700">
            <CheckCircle2 className="size-3.5 shrink-0" aria-hidden />
            <span>
              Kode <strong>{appliedPromo.code}</strong> aktif!{" "}
              {appliedPromo.description ? `(${appliedPromo.description})` : ""}
            </span>
          </p>
        )}
      </div>

      {/* Grid Kartu Paket */}
      <div className="grid gap-8 lg:grid-cols-3 lg:items-stretch">
        {PRICING_TIERS.map((tier) => {
          const product = PRODUCTS[tier.id];
          const isOwned = ownedProductIds.includes(tier.id);
          const discountCheck = appliedPromo?.discountsByProduct[tier.id];
          const hasValidDiscount =
            Boolean(discountCheck?.valid) &&
            discountCheck?.valid &&
            discountCheck.discountAmount > 0;

          const effectivePrice =
            hasValidDiscount && discountCheck?.valid
              ? discountCheck.finalPrice
              : product.price;
          const effectiveDisplay = formatRp(effectivePrice);

          return (
            <div
              key={tier.id}
              className={cn(
                "relative flex flex-col rounded-2xl border bg-white p-7 shadow-sm transition hover:shadow-md sm:p-8",
                tier.cardClass,
              )}
            >
              {tier.featured && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-blue-600 px-4 py-1 text-xs font-bold uppercase tracking-wider text-white shadow-md">
                  Paling Diminati ⭐
                </div>
              )}

              <div className="flex-1">
                <div className="flex items-center justify-between gap-2">
                  <span
                    className={cn(
                      "text-xs font-semibold uppercase tracking-wider",
                      tier.eyebrowClass,
                    )}
                  >
                    {tier.eyebrow}
                  </span>
                  {isOwned && (
                    <span className="inline-flex items-center gap-1 rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-0.5 text-[11px] font-bold text-emerald-700">
                      <CheckCircle2 className="size-3" aria-hidden />
                      Sudah Aktif
                    </span>
                  )}
                </div>

                <h3 className="mt-2 text-xl font-bold text-slate-950">
                  {product.name}
                </h3>
                <p className="mt-2 text-sm text-slate-600">{product.description}</p>

                <div className="mt-6">
                  {hasValidDiscount && (
                    <div className="mb-1 flex items-center gap-2">
                      <span className="text-sm font-medium text-slate-400 line-through">
                        {product.priceDisplay}
                      </span>
                      <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-[11px] font-bold text-emerald-700">
                        Hemat{" "}
                        {discountCheck?.valid
                          ? formatRp(discountCheck.discountAmount)
                          : ""}
                      </span>
                    </div>
                  )}

                  <div className="flex items-baseline gap-1">
                    <span
                      className={cn(
                        "text-3xl font-extrabold sm:text-4xl",
                        hasValidDiscount ? "text-emerald-600" : tier.priceClass,
                      )}
                    >
                      {effectivePrice === 0 ? "GRATIS" : effectiveDisplay}
                    </span>
                    <span className="text-xs font-medium text-slate-500">
                      {tier.billingNote}
                    </span>
                  </div>
                </div>

                <div
                  className={cn(
                    "my-6 h-px",
                    tier.featured ? "bg-blue-50" : "bg-slate-100",
                  )}
                />

                <ul className="space-y-3 text-sm text-slate-700">
                  {tier.features.map((feat) => (
                    <li key={feat.text} className="flex items-start gap-3">
                      <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                        <Check className="size-3.5" aria-hidden />
                      </span>
                      <span
                        className={
                          feat.bold
                            ? "font-semibold text-slate-900"
                            : "text-slate-600"
                        }
                      >
                        {feat.text}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8">
                {isOwned ? (
                  <Button
                    asChild
                    variant="outline"
                    className="w-full border-emerald-200 bg-emerald-50/70 font-semibold text-emerald-800 hover:bg-emerald-100"
                  >
                    <Link href={APP_ROUTES.tiuPractice}>
                      Mulai Belajar Sekarang &rarr;
                    </Link>
                  </Button>
                ) : (
                  <CheckoutButton
                    productId={tier.id}
                    productName={product.name}
                    amountDisplay={effectiveDisplay}
                    voucherCode={hasValidDiscount ? appliedPromo?.code : undefined}
                    variant={tier.buttonVariant}
                    className={tier.buttonClass}
                  />
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

