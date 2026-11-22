"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, type ReactNode } from "react";
import {
  ArrowLeft,
  CreditCard,
  LayoutDashboard,
  Menu,
  ShieldCheck,
  Users,
  X,
} from "lucide-react";

import { BrandLogo } from "@/components/layout/brand-logo";
import { cn } from "@/lib/utils";
import type { AdminRole } from "@/modules/admin/domain/types";
import { RoleBadge } from "@/modules/admin/presentation/status-badge";
import { APP_ROUTES } from "@/shared/constants/app";

const ADMIN_NAV_ITEMS = [
  {
    href: APP_ROUTES.admin,
    label: "Overview KPI",
    icon: LayoutDashboard,
    exact: true,
  },
  {
    href: APP_ROUTES.adminOrders,
    label: "Transaksi & Order",
    icon: CreditCard,
    exact: false,
  },
  {
    href: APP_ROUTES.adminUsers,
    label: "Siswa & Paket",
    icon: Users,
    exact: false,
  },
] as const;

interface AdminShellProps {
  userEmail: string;
  userName: string;
  role: AdminRole;
  children: ReactNode;
}

export function AdminShell({
  userEmail,
  userName,
  role,
  children,
}: AdminShellProps) {
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const isActive = (href: string, exact: boolean) =>
    exact ? pathname === href : Boolean(pathname?.startsWith(href));

  const sidebarContent = (
    <div className="flex h-full flex-col justify-between bg-white">
      <div>
        <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4">
          <Link href={APP_ROUTES.admin} className="flex flex-col gap-1">
            <BrandLogo className="h-8" />
            <span className="inline-flex w-fit items-center gap-1 rounded-md bg-slate-900 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white">
              <ShieldCheck className="size-3 text-blue-400" aria-hidden />
              Internal Admin
            </span>
          </Link>
          <button
            type="button"
            onClick={() => setSidebarOpen(false)}
            aria-label="Tutup menu admin"
            className="rounded-lg p-1.5 text-slate-500 hover:bg-slate-100 lg:hidden"
          >
            <X className="size-5" aria-hidden />
          </button>
        </div>

        <nav aria-label="Navigasi Admin" className="space-y-1 px-3 py-4">
          {ADMIN_NAV_ITEMS.map((item) => {
            const active = isActive(item.href, item.exact);
            const Icon = item.icon;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setSidebarOpen(false)}
                className={cn(
                  "flex items-center gap-3 rounded-xl px-3.5 py-2.5 text-sm font-medium transition-colors",
                  active
                    ? "bg-blue-50 font-semibold text-blue-700"
                    : "text-slate-600 hover:bg-slate-50 hover:text-slate-950",
                )}
              >
                <Icon
                  className={cn(
                    "size-4 shrink-0",
                    active ? "text-blue-600" : "text-slate-400",
                  )}
                  aria-hidden
                />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>
      </div>

      <div className="border-t border-slate-100 p-4">
        <div className="mb-3 rounded-xl border border-slate-200/80 bg-slate-50/70 p-3">
          <div className="flex items-center justify-between gap-2">
            <p className="truncate text-xs font-semibold text-slate-900">
              {userName || userEmail.split("@")[0]}
            </p>
            <RoleBadge role={role} />
          </div>
          <p className="mt-1 truncate text-[11px] text-slate-500">{userEmail}</p>
        </div>

        <div className="grid gap-1">
          <Link
            href={APP_ROUTES.account}
            className="flex items-center gap-2 rounded-lg px-3 py-2 text-xs font-medium text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-900"
          >
            <ArrowLeft className="size-3.5" aria-hidden />
            <span>Akun Siswa Saya</span>
          </Link>
          <Link
            href={APP_ROUTES.home}
            className="flex items-center gap-2 rounded-lg px-3 py-2 text-xs font-medium text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-900"
          >
            <ArrowLeft className="size-3.5" aria-hidden />
            <span>Kembali ke Beranda</span>
          </Link>
        </div>
      </div>
    </div>
  );

  return (
    <div className="flex min-h-screen bg-[#f8fbff] text-slate-950">
      {/* Desktop Sidebar */}
      <aside className="hidden w-64 shrink-0 border-r border-blue-100/80 bg-white lg:block">
        <div className="sticky top-0 h-screen overflow-y-auto">
          {sidebarContent}
        </div>
      </aside>

      {/* Mobile Drawer Overlay */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-50 flex lg:hidden">
          <div
            className="fixed inset-0 bg-slate-950/40 backdrop-blur-xs"
            onClick={() => setSidebarOpen(false)}
            aria-hidden
          />
          <aside className="relative z-10 w-72 max-w-[85vw] border-r border-slate-200 bg-white shadow-2xl">
            {sidebarContent}
          </aside>
        </div>
      )}

      {/* Main Content Area */}
      <div className="flex min-w-0 flex-1 flex-col">
        <header className="sticky top-0 z-20 flex h-14 items-center justify-between border-b border-blue-100/80 bg-white/95 px-4 backdrop-blur lg:hidden">
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setSidebarOpen(true)}
              aria-label="Buka menu admin"
              className="inline-flex size-9 items-center justify-center rounded-lg border border-slate-200 text-slate-700 hover:bg-slate-50"
            >
              <Menu className="size-4" aria-hidden />
            </button>
            <span className="text-sm font-bold text-slate-900">
              Wiyata Admin Console
            </span>
          </div>
          <RoleBadge role={role} />
        </header>

        <main className="mx-auto w-full max-w-[1280px] flex-1 px-4 py-6 sm:px-6 lg:px-8 lg:py-8">
          {children}
        </main>
      </div>
    </div>
  );
}
