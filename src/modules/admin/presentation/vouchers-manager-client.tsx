"use client";

import { useRouter } from "next/navigation";
import { useState, type FormEvent } from "react";
import {
  CheckCircle2,
  Database,
  Loader2,
  Plus,
  Power,
  Tag,
  Trash2,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  formatIdr,
  formatShortDateTime,
} from "@/modules/admin/domain/types";
import { PRODUCTS, type ProductId } from "@/modules/payment/domain/products";
import type {
  VoucherDiscountType,
  VoucherRecord,
} from "@/modules/payment/domain/voucher";
import { useToastStore } from "@/shared/stores/toast-store";

interface VouchersManagerClientProps {
  initialVouchers: VoucherRecord[];
  schemaMissing: boolean;
}

const PRODUCT_OPTIONS = Object.values(PRODUCTS);

export function VouchersManagerClient({
  initialVouchers,
  schemaMissing,
}: VouchersManagerClientProps) {
  const router = useRouter();
  const addToast = useToastStore((state) => state.addToast);

  const [vouchers, setVouchers] = useState<VoucherRecord[]>(initialVouchers);
  const [isCreating, setIsCreating] = useState(false);
  const [busyId, setBusyId] = useState<string | null>(null);

  // Form fields
  const [code, setCode] = useState("");
  const [description, setDescription] = useState("");
  const [discountType, setDiscountType] =
    useState<VoucherDiscountType>("percent");
  const [discountValue, setDiscountValue] = useState("20");
  const [maxDiscount, setMaxDiscount] = useState("");
  const [maxUses, setMaxUses] = useState("");
  const [expiresAt, setExpiresAt] = useState("");
  const [selectedProducts, setSelectedProducts] = useState<ProductId[]>([]);

  if (schemaMissing) {
    return (
      <div className="rounded-2xl border border-amber-200 bg-amber-50 p-6 text-sm text-amber-900">
        <div className="flex items-start gap-3">
          <Database className="mt-0.5 size-5 shrink-0 text-amber-600" aria-hidden />
          <div>
            <p className="font-bold">Tabel Vouchers Belum Dimigrasi</p>
            <p className="mt-1 text-xs leading-relaxed">
              Jalankan script migrasi{" "}
              <code className="rounded bg-amber-100 px-1.5 py-0.5 font-mono">
                supabase/migrations/005_vouchers.sql
              </code>{" "}
              di Supabase SQL Editor untuk mengaktifkan fitur Manajemen Kode Promo.
            </p>
          </div>
        </div>
      </div>
    );
  }

  const toggleProductScope = (productId: ProductId) => {
    setSelectedProducts((prev) =>
      prev.includes(productId)
        ? prev.filter((id) => id !== productId)
        : [...prev, productId],
    );
  };

  const handleCreateVoucher = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const numericVal = Number(discountValue);
    if (!code.trim() || !Number.isFinite(numericVal) || numericVal <= 0) {
      addToast("Masukkan kode promo dan nominal diskon yang valid.", "error");
      return;
    }

    setIsCreating(true);
    try {
      const res = await fetch("/api/admin/vouchers", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          code: code.trim().toUpperCase(),
          description: description.trim() || null,
          discount_type: discountType,
          discount_value: Math.round(numericVal),
          max_discount:
            discountType === "percent" && maxDiscount
              ? Math.round(Number(maxDiscount))
              : null,
          max_uses: maxUses ? Math.round(Number(maxUses)) : null,
          expires_at: expiresAt ? `${expiresAt}T23:59:59+07:00` : null,
          applicable_products:
            selectedProducts.length > 0 ? selectedProducts : null,
        }),
      });

      const data = (await res.json()) as {
        ok?: boolean;
        voucher?: VoucherRecord;
        error?: string;
      };

      if (!res.ok || !data.ok || !data.voucher) {
        addToast(data.error ?? "Gagal membuat kode promo.", "error");
        return;
      }

      setVouchers((prev) => [data.voucher!, ...prev]);
      setCode("");
      setDescription("");
      setMaxDiscount("");
      setMaxUses("");
      setExpiresAt("");
      setSelectedProducts([]);
      addToast(`Kode promo ${data.voucher.code} berhasil dibuat!`, "success");
      router.refresh();
    } catch {
      addToast("Terjadi gangguan jaringan.", "error");
    } finally {
      setIsCreating(false);
    }
  };

  const handleToggleStatus = async (voucher: VoucherRecord) => {
    setBusyId(voucher.id);
    const nextState = !voucher.is_active;
    try {
      const res = await fetch(`/api/admin/vouchers/${voucher.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ is_active: nextState }),
      });
      const data = (await res.json()) as { ok?: boolean; error?: string };
      if (!res.ok || !data.ok) {
        addToast(data.error ?? "Gagal mengubah status kode promo.", "error");
        return;
      }

      setVouchers((prev) =>
        prev.map((v) =>
          v.id === voucher.id ? { ...v, is_active: nextState } : v,
        ),
      );
      addToast(
        `Voucher ${voucher.code} ${nextState ? "diaktifkan" : "dinonaktifkan"}.`,
        "info",
      );
      router.refresh();
    } catch {
      addToast("Terjadi gangguan jaringan.", "error");
    } finally {
      setBusyId(null);
    }
  };

  const handleDelete = async (voucher: VoucherRecord) => {
    if (!window.confirm(`Hapus permanen kode promo "${voucher.code}"?`)) return;

    setBusyId(voucher.id);
    try {
      const res = await fetch(`/api/admin/vouchers/${voucher.id}`, {
        method: "DELETE",
      });
      const data = (await res.json()) as { ok?: boolean; error?: string };
      if (!res.ok || !data.ok) {
        addToast(data.error ?? "Gagal menghapus voucher.", "error");
        return;
      }

      setVouchers((prev) => prev.filter((v) => v.id !== voucher.id));
      addToast(`Voucher ${voucher.code} dihapus.`, "info");
      router.refresh();
    } catch {
      addToast("Terjadi gangguan jaringan.", "error");
    } finally {
      setBusyId(null);
    }
  };

  return (
    <div className="grid gap-6 lg:grid-cols-12 lg:items-start">
      {/* Form Buat Kode Promo */}
      <form
        onSubmit={handleCreateVoucher}
        className="space-y-4 rounded-2xl border border-blue-100 bg-white p-5 shadow-xs lg:col-span-4"
      >
        <div className="flex items-center gap-2">
          <Tag className="size-4 text-blue-600" aria-hidden />
          <h2 className="text-sm font-bold text-slate-900">
            Buat Kode Promo Baru
          </h2>
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-700">
            Kode Voucher *
          </label>
          <input
            type="text"
            required
            value={code}
            onChange={(e) => setCode(e.target.value.toUpperCase())}
            placeholder="Misal: CPNS2026"
            className="mt-1 h-9 w-full rounded-lg border border-slate-200 px-3 text-xs font-semibold uppercase text-slate-900 focus:border-blue-400 focus:outline-none"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-700">
            Deskripsi / Kampanye
          </label>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Misal: Promo Pendaftaran CPNS"
            className="mt-1 h-9 w-full rounded-lg border border-slate-200 px-3 text-xs text-slate-900 focus:border-blue-400 focus:outline-none"
          />
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="block text-xs font-semibold text-slate-700">
              Tipe Diskon
            </label>
            <select
              value={discountType}
              onChange={(e) =>
                setDiscountType(e.target.value as VoucherDiscountType)
              }
              className="mt-1 h-9 w-full rounded-lg border border-slate-200 bg-white px-2.5 text-xs text-slate-900 focus:border-blue-400 focus:outline-none"
            >
              <option value="percent">Persentase (%)</option>
              <option value="fixed">Nominal (Rp)</option>
            </select>
          </div>
          <div>
            <label className="block text-xs font-semibold text-slate-700">
              Nilai {discountType === "percent" ? "(%)" : "(Rp)"} *
            </label>
            <input
              type="number"
              required
              min={1}
              max={discountType === "percent" ? 100 : undefined}
              value={discountValue}
              onChange={(e) => setDiscountValue(e.target.value)}
              className="mt-1 h-9 w-full rounded-lg border border-slate-200 px-3 text-xs text-slate-900 focus:border-blue-400 focus:outline-none"
            />
          </div>
        </div>

        {discountType === "percent" && (
          <div>
            <label className="block text-xs font-semibold text-slate-700">
              Maksimal Potongan Rp (Opsional)
            </label>
            <input
              type="number"
              min={1000}
              value={maxDiscount}
              onChange={(e) => setMaxDiscount(e.target.value)}
              placeholder="Kosongkan bila tanpa batas"
              className="mt-1 h-9 w-full rounded-lg border border-slate-200 px-3 text-xs text-slate-900 focus:border-blue-400 focus:outline-none"
            />
          </div>
        )}

        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="block text-xs font-semibold text-slate-700">
              Kuota Pemakaian
            </label>
            <input
              type="number"
              min={1}
              value={maxUses}
              onChange={(e) => setMaxUses(e.target.value)}
              placeholder="Tak terbatas"
              className="mt-1 h-9 w-full rounded-lg border border-slate-200 px-3 text-xs text-slate-900 focus:border-blue-400 focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-slate-700">
              Berlaku Hingga
            </label>
            <input
              type="date"
              value={expiresAt}
              onChange={(e) => setExpiresAt(e.target.value)}
              className="mt-1 h-9 w-full rounded-lg border border-slate-200 px-2.5 text-xs text-slate-900 focus:border-blue-400 focus:outline-none"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-700">
            Berlaku Untuk Paket (Kosong = Semua)
          </label>
          <div className="mt-1.5 space-y-1.5">
            {PRODUCT_OPTIONS.map((prod) => (
              <label
                key={prod.id}
                className="flex cursor-pointer items-center gap-2 text-xs text-slate-700"
              >
                <input
                  type="checkbox"
                  checked={selectedProducts.includes(prod.id)}
                  onChange={() => toggleProductScope(prod.id)}
                  className="size-3.5 rounded border-slate-300 text-blue-600"
                />
                <span>{prod.name}</span>
              </label>
            ))}
          </div>
        </div>

        <Button
          type="submit"
          disabled={isCreating}
          className="h-9 w-full bg-blue-600 text-xs font-semibold text-white hover:bg-blue-700"
        >
          {isCreating ? (
            <Loader2 className="size-4 animate-spin" aria-hidden />
          ) : (
            <Plus className="size-4" aria-hidden />
          )}
          Simpan Kode Promo
        </Button>
      </form>

      {/* Tabel Daftar Voucher */}
      <div className="overflow-hidden rounded-2xl border border-blue-100 bg-white shadow-xs lg:col-span-8">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[680px] border-collapse text-left text-xs">
            <thead>
              <tr className="border-b border-slate-100 bg-slate-50/80 text-[11px] font-bold uppercase tracking-wider text-slate-500">
                <th className="px-4 py-3">Kode Promo</th>
                <th className="px-4 py-3">Potongan</th>
                <th className="px-4 py-3">Terpakai</th>
                <th className="px-4 py-3">Kadaluarsa</th>
                <th className="px-4 py-3">Status</th>
                <th className="px-4 py-3 text-right">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {vouchers.length === 0 ? (
                <tr>
                  <td
                    colSpan={6}
                    className="px-4 py-10 text-center text-sm text-slate-500"
                  >
                    Belum ada kode promo dibuat. Gunakan formulir di sebelah kiri
                    untuk membuat voucher pertama.
                  </td>
                </tr>
              ) : (
                vouchers.map((v) => {
                  const isBusy = busyId === v.id;
                  return (
                    <tr key={v.id} className="hover:bg-blue-50/30">
                      <td className="px-4 py-3 align-top">
                        <p className="font-mono text-xs font-bold text-slate-950">
                          {v.code}
                        </p>
                        {v.description && (
                          <p className="mt-0.5 text-[11px] text-slate-500">
                            {v.description}
                          </p>
                        )}
                      </td>
                      <td className="px-4 py-3 align-top">
                        <p className="font-semibold text-blue-700">
                          {v.discount_type === "percent"
                            ? `${v.discount_value}%`
                            : formatIdr(v.discount_value)}
                        </p>
                        {v.max_discount && (
                          <p className="text-[10px] text-slate-500">
                            Maks {formatIdr(v.max_discount)}
                          </p>
                        )}
                      </td>
                      <td className="px-4 py-3 align-top font-semibold text-slate-800">
                        {v.used_count}
                        {v.max_uses !== null ? ` / ${v.max_uses}` : " / ∞"}
                      </td>
                      <td className="px-4 py-3 align-top text-slate-500">
                        {v.expires_at ? formatShortDateTime(v.expires_at) : "Tanpa batas"}
                      </td>
                      <td className="px-4 py-3 align-top">
                        <span
                          className={cn(
                            "inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-[11px] font-semibold",
                            v.is_active
                              ? "border-emerald-200 bg-emerald-50 text-emerald-700"
                              : "border-slate-200 bg-slate-100 text-slate-500",
                          )}
                        >
                          {v.is_active && (
                            <CheckCircle2 className="size-3" aria-hidden />
                          )}
                          {v.is_active ? "Aktif" : "Nonaktif"}
                        </span>
                      </td>
                      <td className="px-4 py-3 align-top text-right">
                        <div className="inline-flex items-center gap-1.5">
                          <Button
                            type="button"
                            variant="outline"
                            size="sm"
                            disabled={isBusy}
                            onClick={() => handleToggleStatus(v)}
                            title={v.is_active ? "Nonaktifkan" : "Aktifkan"}
                            className="h-7 gap-1 border-slate-200 px-2 text-[11px]"
                          >
                            <Power className="size-3" aria-hidden />
                            {v.is_active ? "Matikan" : "Aktifkan"}
                          </Button>
                          <Button
                            type="button"
                            variant="outline"
                            size="sm"
                            disabled={isBusy}
                            onClick={() => handleDelete(v)}
                            title="Hapus voucher"
                            className="h-7 border-rose-200 px-2 text-[11px] text-rose-600 hover:bg-rose-50"
                          >
                            <Trash2 className="size-3" aria-hidden />
                          </Button>
                        </div>
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
