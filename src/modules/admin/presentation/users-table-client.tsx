"use client";

import { useRouter } from "next/navigation";
import { useMemo, useState } from "react";
import { Download, Eye, Loader2, Plus, Search, Shield, Trash2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  buildCsvContent,
  downloadCsvFile,
} from "@/modules/admin/domain/csv";
import {
  formatIdr,
  formatShortDateTime,
  type AdminRole,
  type AdminUserItem,
  type UserFilter,
} from "@/modules/admin/domain/types";
import { RoleBadge } from "@/modules/admin/presentation/status-badge";
import { UserDetailDrawer } from "@/modules/admin/presentation/user-detail-drawer";
import type { UserRole } from "@/modules/auth/application/ports";
import { PRODUCTS, type ProductId } from "@/modules/payment/domain/products";
import { useToastStore } from "@/shared/stores/toast-store";

const USER_FILTER_TABS: Array<{ id: UserFilter; label: string }> = [
  { id: "all", label: "Semua Pengguna" },
  { id: "subscribed", label: "Paket Aktif" },
  { id: "free", label: "Gratis / Belum Beli" },
  { id: "admin", label: "Tim Admin" },
];

const CATALOG_PRODUCTS = Object.values(PRODUCTS);

interface UsersTableClientProps {
  initialUsers: AdminUserItem[];
  actorId: string;
  actorRole: AdminRole;
}

export function UsersTableClient({
  initialUsers,
  actorId,
  actorRole,
}: UsersTableClientProps) {
  const router = useRouter();
  const addToast = useToastStore((state) => state.addToast);

  const [users, setUsers] = useState<AdminUserItem[]>(initialUsers);
  const [activeFilter, setActiveFilter] = useState<UserFilter>("all");
  const [search, setSearch] = useState("");
  const [busyUserId, setBusyUserId] = useState<string | null>(null);
  const [detailUserId, setDetailUserId] = useState<string | null>(null);
  const [selectedProducts, setSelectedProducts] = useState<
    Record<string, ProductId>
  >({});

  const filteredUsers = useMemo(() => {
    const keyword = search.trim().toLowerCase();
    return users.filter((user) => {
      const hasActive = user.subscriptions.some((s) => s.status === "active");

      if (activeFilter === "subscribed" && !hasActive) return false;
      if (activeFilter === "free" && hasActive) return false;
      if (
        activeFilter === "admin" &&
        user.role !== "admin" &&
        user.role !== "superadmin"
      ) {
        return false;
      }

      if (!keyword) return true;
      return (
        (user.email?.toLowerCase().includes(keyword) ?? false) ||
        (user.full_name?.toLowerCase().includes(keyword) ?? false) ||
        user.id.toLowerCase().includes(keyword)
      );
    });
  }, [users, activeFilter, search]);

  const handleGrantSubscription = async (userId: string) => {
    const productId = selectedProducts[userId] ?? "skd-intensif";
    const productName = PRODUCTS[productId]?.name ?? productId;

    if (
      !window.confirm(
        `Berikan akses gratis paket "${productName}" kepada pengguna ini?`,
      )
    ) {
      return;
    }

    setBusyUserId(userId);
    try {
      const res = await fetch(
        `/api/admin/users/${encodeURIComponent(userId)}/subscription`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ action: "grant", productId }),
        },
      );
      const data = (await res.json()) as {
        ok?: boolean;
        orderId?: string;
        error?: string;
      };

      if (!res.ok || !data.ok) {
        addToast(data.error ?? "Gagal memberikan akses paket.", "error");
        return;
      }

      setUsers((prev) =>
        prev.map((u) => {
          if (u.id !== userId) return u;
          const remaining = u.subscriptions.filter(
            (s) => s.product_id !== productId,
          );
          return {
            ...u,
            orders_count: u.orders_count + 1,
            subscriptions: [
              ...remaining,
              {
                id: data.orderId ?? `sub-${Date.now()}`,
                order_id: data.orderId ?? "",
                product_id: productId,
                plan: "lifetime",
                status: "active",
                starts_at: new Date().toISOString(),
                expires_at: null,
              },
            ],
          };
        }),
      );
      addToast(`Akses ${productName} berhasil diaktifkan.`, "success");
      router.refresh();
    } catch {
      addToast("Terjadi gangguan jaringan.", "error");
    } finally {
      setBusyUserId(null);
    }
  };

  const handleRevokeSubscription = async (
    userId: string,
    productId: string,
  ) => {
    const productName = PRODUCTS[productId as ProductId]?.name ?? productId;
    if (
      !window.confirm(`Cabut akses paket "${productName}" dari pengguna ini?`)
    ) {
      return;
    }

    setBusyUserId(userId);
    try {
      const res = await fetch(
        `/api/admin/users/${encodeURIComponent(userId)}/subscription`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ action: "revoke", productId }),
        },
      );
      const data = (await res.json()) as { ok?: boolean; error?: string };

      if (!res.ok || !data.ok) {
        addToast(data.error ?? "Gagal mencabut akses paket.", "error");
        return;
      }

      setUsers((prev) =>
        prev.map((u) => {
          if (u.id !== userId) return u;
          return {
            ...u,
            subscriptions: u.subscriptions.map((s) =>
              s.product_id === productId ? { ...s, status: "cancelled" } : s,
            ),
          };
        }),
      );
      addToast(`Akses ${productName} telah dicabut.`, "info");
      router.refresh();
    } catch {
      addToast("Terjadi gangguan jaringan.", "error");
    } finally {
      setBusyUserId(null);
    }
  };

  const handleRoleChange = async (userId: string, newRole: UserRole) => {
    if (
      !window.confirm(`Ubah role pengguna ini menjadi "${newRole.toUpperCase()}"?`)
    ) {
      return;
    }

    setBusyUserId(userId);
    try {
      const res = await fetch(
        `/api/admin/users/${encodeURIComponent(userId)}/role`,
        {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ role: newRole }),
        },
      );
      const data = (await res.json()) as { ok?: boolean; error?: string };

      if (!res.ok || !data.ok) {
        addToast(data.error ?? "Gagal mengubah role pengguna.", "error");
        return;
      }

      setUsers((prev) =>
        prev.map((u) => (u.id === userId ? { ...u, role: newRole } : u)),
      );
      addToast(`Role pengguna diperbarui ke ${newRole}.`, "success");
      router.refresh();
    } catch {
      addToast("Terjadi gangguan jaringan.", "error");
    } finally {
      setBusyUserId(null);
    }
  };

  const handleExportCsv = () => {
    const csv = buildCsvContent(
      [
        "User ID",
        "Nama Lengkap",
        "Email",
        "Role",
        "Paket Aktif",
        "Jumlah Transaksi",
        "Total Belanja (IDR)",
        "Tanggal Daftar",
      ],
      filteredUsers.map((u) => [
        u.id,
        u.full_name ?? "",
        u.email ?? "",
        u.role,
        u.subscriptions
          .filter((s) => s.status === "active")
          .map((s) => PRODUCTS[s.product_id as ProductId]?.name ?? s.product_id)
          .join("; "),
        u.orders_count,
        u.total_spent,
        u.created_at,
      ]),
    );
    const dateStamp = new Date().toISOString().slice(0, 10);
    downloadCsvFile(`wiyata-users-${dateStamp}.csv`, csv);
    addToast(`${filteredUsers.length} data pengguna diekspor ke CSV.`, "success");
  };

  return (
    <div className="space-y-4">
      {/* Toolbar */}
      <div className="flex flex-col gap-3 rounded-2xl border border-blue-100 bg-white p-4 shadow-xs sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap gap-1.5">
          {USER_FILTER_TABS.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveFilter(tab.id)}
              className={cn(
                "rounded-lg px-3 py-1.5 text-xs font-medium transition-colors",
                activeFilter === tab.id
                  ? "bg-blue-600 text-white"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200",
              )}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <div className="relative w-full sm:w-64">
            <Search
              className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-slate-400"
              aria-hidden
            />
            <input
              type="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Cari nama atau email siswa..."
              className="h-9 w-full rounded-lg border border-slate-200 bg-slate-50/70 pl-9 pr-3 text-xs text-slate-900 placeholder:text-slate-400 focus:border-blue-400 focus:bg-white focus:outline-none"
            />
          </div>
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={handleExportCsv}
            disabled={filteredUsers.length === 0}
            className="h-9 gap-1.5 border-slate-200 text-xs font-semibold text-slate-700 hover:bg-slate-50"
          >
            <Download className="size-3.5" aria-hidden />
            Ekspor CSV
          </Button>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-hidden rounded-2xl border border-blue-100 bg-white shadow-xs">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[880px] border-collapse text-left text-xs">
            <thead>
              <tr className="border-b border-slate-100 bg-slate-50/80 text-[11px] font-bold uppercase tracking-wider text-slate-500">
                <th className="px-4 py-3">Siswa &amp; Bergabung</th>
                <th className="px-4 py-3">Role</th>
                <th className="px-4 py-3">Paket Aktif</th>
                <th className="px-4 py-3">Total Belanja</th>
                <th className="px-4 py-3 text-right">Beri Akses / Kelola</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredUsers.length === 0 ? (
                <tr>
                  <td
                    colSpan={5}
                    className="px-4 py-10 text-center text-sm text-slate-500"
                  >
                    Tidak ada pengguna yang sesuai filter.
                  </td>
                </tr>
              ) : (
                filteredUsers.map((user) => {
                  const isBusy = busyUserId === user.id;
                  const activeSubs = user.subscriptions.filter(
                    (s) => s.status === "active",
                  );
                  const selectedProduct =
                    selectedProducts[user.id] ?? "skd-intensif";

                  return (
                    <tr
                      key={user.id}
                      className="transition-colors hover:bg-blue-50/30"
                    >
                      <td className="px-4 py-3.5 align-top">
                        <p className="font-semibold text-slate-900">
                          {user.full_name || "Tanpa Nama"}
                        </p>
                        <p className="text-[11px] text-slate-500">
                          {user.email ?? "—"}
                        </p>
                        <p className="mt-0.5 text-[10px] text-slate-400">
                          Daftar: {formatShortDateTime(user.created_at)}
                        </p>
                      </td>

                      <td className="px-4 py-3.5 align-top">
                        <div className="flex flex-col items-start gap-1.5">
                          <RoleBadge role={user.role} />
                          {actorRole === "superadmin" && user.id !== actorId && (
                            <select
                              aria-label={`Ubah role untuk ${user.email ?? user.id}`}
                              value={user.role}
                              disabled={isBusy}
                              onChange={(e) =>
                                handleRoleChange(user.id, e.target.value as UserRole)
                              }
                              className="mt-1 rounded-md border border-slate-200 bg-white px-2 py-1 text-[11px] text-slate-700 focus:border-blue-400 focus:outline-none"
                            >
                              <option value="student">Ubah ke Siswa</option>
                              <option value="admin">Ubah ke Admin</option>
                              <option value="superadmin">
                                Ubah ke Super Admin
                              </option>
                            </select>
                          )}
                        </div>
                      </td>

                      <td className="px-4 py-3.5 align-top">
                        {activeSubs.length === 0 ? (
                          <span className="inline-flex items-center rounded-md bg-slate-100 px-2 py-0.5 text-[11px] text-slate-500">
                            Belum berlangganan
                          </span>
                        ) : (
                          <div className="flex flex-wrap gap-1.5">
                            {activeSubs.map((sub) => (
                              <span
                                key={sub.product_id}
                                className="inline-flex items-center gap-1 rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-0.5 text-[11px] font-semibold text-emerald-700"
                              >
                                <span>
                                  {PRODUCTS[sub.product_id as ProductId]?.name ??
                                    sub.product_id}
                                </span>
                                <button
                                  type="button"
                                  disabled={isBusy}
                                  onClick={() =>
                                    handleRevokeSubscription(
                                      user.id,
                                      sub.product_id,
                                    )
                                  }
                                  title="Cabut akses paket ini"
                                  className="ml-0.5 rounded-full p-0.5 text-emerald-700 hover:bg-rose-100 hover:text-rose-700"
                                >
                                  <Trash2 className="size-3" aria-hidden />
                                </button>
                              </span>
                            ))}
                          </div>
                        )}
                      </td>

                      <td className="px-4 py-3.5 align-top">
                        <p className="font-semibold text-slate-900">
                          {formatIdr(user.total_spent)}
                        </p>
                        <p className="text-[11px] text-slate-500">
                          {user.orders_count} transaksi
                        </p>
                      </td>

                      <td className="px-4 py-3.5 align-top text-right">
                        <div className="inline-flex items-center justify-end gap-1.5">
                          <select
                            aria-label={`Pilih paket untuk ${user.email ?? user.id}`}
                            value={selectedProduct}
                            disabled={isBusy}
                            onChange={(e) =>
                              setSelectedProducts((prev) => ({
                                ...prev,
                                [user.id]: e.target.value as ProductId,
                              }))
                            }
                            className="h-8 rounded-lg border border-slate-200 bg-white px-2 text-[11px] text-slate-700 focus:border-blue-400 focus:outline-none"
                          >
                            {CATALOG_PRODUCTS.map((prod) => (
                              <option key={prod.id} value={prod.id}>
                                {prod.name}
                              </option>
                            ))}
                          </select>

                          <Button
                            type="button"
                            size="sm"
                            disabled={isBusy}
                            onClick={() => handleGrantSubscription(user.id)}
                            className="h-8 gap-1 bg-blue-600 px-2.5 text-[11px] text-white hover:bg-blue-700"
                          >
                            {isBusy ? (
                              <Loader2
                                className="size-3 animate-spin"
                                aria-hidden
                              />
                            ) : (
                              <Plus className="size-3" aria-hidden />
                            )}
                            Aktifkan
                          </Button>

                          <Button
                            type="button"
                            variant="outline"
                            size="sm"
                            onClick={() => setDetailUserId(user.id)}
                            title="Lihat progres belajar & riwayat transaksi"
                            className="h-8 gap-1 border-slate-200 px-2.5 text-[11px] text-slate-700 hover:bg-slate-50"
                          >
                            <Eye className="size-3" aria-hidden />
                            Detail
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

      {actorRole !== "superadmin" && (
        <p className="flex items-center gap-1.5 text-[11px] text-slate-500">
          <Shield className="size-3.5 text-slate-400" aria-hidden />
          <span>
            Pengubahan role pengguna hanya dapat dilakukan oleh akun Super Admin.
          </span>
        </p>
      )}

      <UserDetailDrawer
        userId={detailUserId}
        onClose={() => setDetailUserId(null)}
      />
    </div>
  );
}
