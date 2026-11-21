"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import {
  Award,
  BookOpen,
  ChevronDown,
  Compass,
  LogIn,
  LogOut,
  Menu,
  Sparkles,
  User as UserIcon,
  X,
  Zap,
} from "lucide-react";

import { BrandLogo } from "@/components/layout/brand-logo";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useSupabaseAuth } from "@/modules/auth/presentation/use-supabase-auth";
import { APP_ROUTES } from "@/shared/constants/app";
import { useToastStore } from "@/shared/stores/toast-store";

const BANK_SOAL_ITEMS = [
  {
    href: APP_ROUTES.twkPractice,
    code: "TWK",
    label: "Tes Wawasan Kebangsaan",
    meta: "5 pilar • 400 soal",
    badgeClass: "bg-blue-600 text-white",
  },
  {
    href: APP_ROUTES.tiuPractice,
    code: "TIU",
    label: "Tes Intelegensia Umum",
    meta: "9 pola • 1.660 soal",
    badgeClass: "bg-violet-600 text-white",
  },
  {
    href: APP_ROUTES.tkpPractice,
    code: "TKP",
    label: "Tes Karakteristik Pribadi",
    meta: "6 aspek • 480 soal",
    badgeClass: "bg-teal-600 text-white",
  },
] as const;

export function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [bankDropdownOpen, setBankDropdownOpen] = useState(false);
  const [isSigningOut, setIsSigningOut] = useState(false);

  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const router = useRouter();
  const pathname = usePathname();
  const addToast = useToastStore((state) => state.addToast);
  const { user, isLoading, signOut } = useSupabaseAuth();

  const isBankSoalActive =
    Boolean(pathname?.startsWith("/latihan")) ||
    pathname === APP_ROUTES.courseDetail("intensif-skd-cpns");

  useEffect(() => {
    if (!bankDropdownOpen) return;

    const handlePointerDown = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setBankDropdownOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setBankDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [bankDropdownOpen]);

  const displayName =
    (user?.user_metadata?.full_name as string | undefined) ??
    (user?.user_metadata?.name as string | undefined) ??
    user?.email?.split("@")[0] ??
    "Akun";
  const avatarUrl =
    (user?.user_metadata?.avatar_url as string | undefined) ??
    (user?.user_metadata?.picture as string | undefined) ??
    null;

  const loginHref =
    pathname && pathname !== APP_ROUTES.login && pathname !== APP_ROUTES.register
      ? `${APP_ROUTES.login}?next=${encodeURIComponent(pathname)}`
      : APP_ROUTES.login;

  const handleSignOut = async () => {
    setIsSigningOut(true);
    const { error } = await signOut();
    setIsSigningOut(false);
    setMobileMenuOpen(false);

    if (error) {
      addToast("Gagal keluar dari akun. Silakan coba lagi.", "error");
      return;
    }

    addToast("Anda telah keluar dari akun.", "info");
    if (pathname?.startsWith(APP_ROUTES.account)) {
      router.push(APP_ROUTES.home);
    }
    router.refresh();
  };

  return (
    <header className="sticky top-0 z-30 border-b border-blue-100 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-[4.5rem] max-w-[1280px] items-center justify-between gap-4 px-5 sm:px-8 lg:px-10">
        {/* Brand Logo */}
        <Link href={APP_ROUTES.home} className="flex items-center gap-3">
          <BrandLogo priority className="h-10 sm:h-11" />
        </Link>

        {/* Desktop Navigation — 4 Pilar Utama Fungsional */}
        <nav
          aria-label="Navigasi utama"
          className="hidden items-center gap-1.5 lg:flex xl:gap-2.5"
        >
          {/* 1. Bank Soal SKD (Dropdown Latihan Mandiri & Roadmap) */}
          <div ref={dropdownRef} className="relative">
            <button
              type="button"
              aria-expanded={bankDropdownOpen}
              aria-haspopup="menu"
              onClick={() => setBankDropdownOpen((open) => !open)}
              className={cn(
                "inline-flex items-center gap-1.5 rounded-lg px-3 py-2 text-xs font-medium text-slate-700 transition-colors hover:bg-slate-100 hover:text-blue-700 xl:text-sm",
                (bankDropdownOpen || isBankSoalActive) &&
                  "bg-blue-50 font-semibold text-blue-700",
              )}
            >
              <BookOpen className="size-4 text-blue-600" aria-hidden />
              <span>Bank Soal</span>
              <ChevronDown
                className={cn(
                  "size-3.5 transition-transform duration-150",
                  bankDropdownOpen && "rotate-180",
                )}
                aria-hidden
              />
            </button>

            {bankDropdownOpen && (
              <div
                role="menu"
                aria-label="Subtes Bank Soal SKD"
                className="absolute left-0 top-full z-40 mt-2 w-80 rounded-2xl border border-blue-100 bg-white p-2 shadow-xl shadow-blue-950/10"
              >
                <div className="px-2.5 py-1.5 text-[11px] font-bold uppercase tracking-wider text-slate-400">
                  Latihan per Subtes (2.540 Soal)
                </div>

                <div className="space-y-1">
                  {BANK_SOAL_ITEMS.map((item) => {
                    const isItemActive = pathname === item.href;
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        role="menuitem"
                        onClick={() => setBankDropdownOpen(false)}
                        className={cn(
                          "flex items-center gap-3 rounded-xl px-2.5 py-2 transition-colors hover:bg-blue-50/80",
                          isItemActive && "bg-blue-50",
                        )}
                      >
                        <span
                          className={cn(
                            "flex h-7 w-10 shrink-0 items-center justify-center rounded-lg text-[11px] font-bold",
                            item.badgeClass,
                          )}
                        >
                          {item.code}
                        </span>
                        <div className="min-w-0">
                          <p className="truncate text-xs font-semibold text-slate-900">
                            {item.label}
                          </p>
                          <p className="text-[11px] text-slate-500">{item.meta}</p>
                        </div>
                      </Link>
                    );
                  })}
                </div>

                <div className="mt-2 border-t border-slate-100 pt-2">
                  <Link
                    href={APP_ROUTES.courseDetail("intensif-skd-cpns")}
                    role="menuitem"
                    onClick={() => setBankDropdownOpen(false)}
                    className="flex items-center gap-2.5 rounded-xl bg-slate-50/90 px-2.5 py-2 text-xs font-semibold text-blue-800 transition-colors hover:bg-blue-50"
                  >
                    <Compass className="size-4 shrink-0 text-blue-600" aria-hidden />
                    <span>Roadmap Learning Path SKD (5 Tahap)</span>
                  </Link>
                </div>
              </div>
            )}
          </div>

          {/* 2. Sprint 10m (Drill Kecepatan) */}
          <Link
            href={APP_ROUTES.sprint}
            className={cn(
              "inline-flex items-center gap-1.5 rounded-lg px-3 py-2 text-xs font-medium text-slate-700 transition-colors hover:bg-slate-100 hover:text-blue-700 xl:text-sm",
              pathname === APP_ROUTES.sprint && "bg-blue-50 font-semibold text-blue-700",
            )}
          >
            <Zap className="size-4 text-amber-500" aria-hidden />
            <span>Sprint 10m</span>
          </Link>

          {/* 3. Tryout CAT (Simulasi 110 Soal Resmi) */}
          <Link
            href={APP_ROUTES.tryout}
            className={cn(
              "inline-flex items-center gap-1.5 rounded-lg px-3 py-2 text-xs font-medium text-slate-700 transition-colors hover:bg-slate-100 hover:text-blue-700 xl:text-sm",
              pathname === APP_ROUTES.tryout && "bg-blue-50 font-semibold text-blue-700",
            )}
          >
            <Award className="size-4 text-blue-600" aria-hidden />
            <span>Tryout CAT</span>
          </Link>

          {/* 4. Paket Belajar (Fokus Utama / Highlight Konversi) */}
          <Link
            href={APP_ROUTES.pricing}
            className={cn(
              "ml-1 inline-flex items-center gap-1.5 rounded-full border border-blue-200 bg-blue-50/90 px-3.5 py-1.5 text-xs font-semibold text-blue-700 shadow-sm transition-all hover:bg-blue-100 hover:text-blue-800 xl:text-sm",
              pathname === APP_ROUTES.pricing &&
                "border-blue-600 bg-blue-600 text-white shadow-blue-500/20 hover:bg-blue-700 hover:text-white",
            )}
          >
            <Sparkles className="size-3.5 text-amber-500" aria-hidden />
            <span>Paket Belajar</span>
          </Link>
        </nav>

        {/* Right CTA / Auth Area */}
        <div className="hidden items-center gap-2.5 lg:flex">
          {isLoading ? (
            <div
              aria-hidden
              className="h-9 w-24 animate-pulse rounded-lg bg-slate-100"
            />
          ) : user ? (
            <div className="flex items-center gap-2">
              <Button
                asChild
                variant="outline"
                className="h-9 max-w-[180px] gap-2 border-blue-200 bg-blue-50/70 px-3 text-blue-900 hover:bg-blue-100/70"
              >
                <Link href={APP_ROUTES.account} title={user.email ?? displayName}>
                  {avatarUrl ? (
                    <Image
                      src={avatarUrl}
                      alt={displayName}
                      width={22}
                      height={22}
                      className="size-5.5 shrink-0 rounded-full object-cover"
                    />
                  ) : (
                    <UserIcon className="size-4 shrink-0 text-blue-700" aria-hidden />
                  )}
                  <span className="truncate text-xs font-semibold">{displayName}</span>
                </Link>
              </Button>
              <Button
                type="button"
                variant="ghost"
                size="icon"
                disabled={isSigningOut}
                onClick={handleSignOut}
                className="size-9 text-slate-500 hover:bg-rose-50 hover:text-rose-600"
                aria-label="Keluar akun"
                title="Keluar"
              >
                <LogOut className="size-4" aria-hidden />
              </Button>
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <Button
                asChild
                variant="ghost"
                className="h-9 px-3 text-xs font-medium text-slate-600 hover:text-blue-700 xl:text-sm"
              >
                <Link href={loginHref}>Masuk</Link>
              </Button>
              <Button
                asChild
                className="h-9 bg-blue-600 px-4 text-xs font-semibold text-white shadow-sm shadow-blue-500/20 hover:bg-blue-700 xl:text-sm"
              >
                <Link href={APP_ROUTES.register}>Daftar Gratis</Link>
              </Button>
            </div>
          )}
        </div>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          aria-label={mobileMenuOpen ? "Tutup menu navigasi" : "Buka menu navigasi"}
          aria-expanded={mobileMenuOpen}
          onClick={() => setMobileMenuOpen((open) => !open)}
          className="inline-flex size-10 items-center justify-center rounded-lg border border-blue-100 text-blue-950 hover:bg-blue-50 lg:hidden"
        >
          {mobileMenuOpen ? <X className="size-5" aria-hidden /> : <Menu className="size-5" aria-hidden />}
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="border-t border-blue-100 bg-white px-5 py-4 lg:hidden">
          <nav aria-label="Navigasi mobile" className="grid gap-1.5 text-sm font-medium text-blue-950">
            {/* Bank Soal Accordion Section */}
            <div className="rounded-xl border border-blue-100 bg-slate-50/70 p-2.5">
              <p className="flex items-center gap-1.5 px-2 py-1 text-[11px] font-bold uppercase tracking-wider text-slate-500">
                <BookOpen className="size-3.5 text-blue-600" aria-hidden />
                Bank Soal SKD (2.540 Soal)
              </p>
              <div className="mt-1.5 grid gap-1">
                {BANK_SOAL_ITEMS.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between rounded-lg px-2.5 py-2 text-xs transition-colors hover:bg-white"
                  >
                    <span className="font-semibold text-slate-900">
                      {item.code} — {item.label}
                    </span>
                    <span className="text-[11px] text-slate-500">{item.meta}</span>
                  </Link>
                ))}
                <Link
                  href={APP_ROUTES.courseDetail("intensif-skd-cpns")}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-2 rounded-lg bg-white px-2.5 py-2 text-xs font-semibold text-blue-700 shadow-sm"
                >
                  <Compass className="size-3.5" aria-hidden />
                  Roadmap Learning Path SKD (5 Tahap)
                </Link>
              </div>
            </div>

            {/* Core Drill Links */}
            <Link
              href={APP_ROUTES.sprint}
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-2 rounded-lg px-3 py-2 transition-colors hover:bg-blue-50 hover:text-blue-700"
            >
              <Zap className="size-4 text-amber-500" aria-hidden />
              <span>Sprint Drill 10 Menit</span>
            </Link>

            <Link
              href={APP_ROUTES.tryout}
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-2 rounded-lg px-3 py-2 transition-colors hover:bg-blue-50 hover:text-blue-700"
            >
              <Award className="size-4 text-blue-600" aria-hidden />
              <span>Simulasi Tryout CAT 110 Soal</span>
            </Link>

            <Link
              href={APP_ROUTES.pricing}
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-2 rounded-lg bg-blue-50 px-3 py-2 font-semibold text-blue-700"
            >
              <Sparkles className="size-4 text-amber-500" aria-hidden />
              <span>Paket Belajar &amp; Harga</span>
            </Link>

            {/* Secondary Landing Anchor Links */}
            <div className="mt-2 border-t border-slate-100 pt-2 text-xs text-slate-500">
              <div className="grid grid-cols-3 gap-1 text-center">
                <Link
                  href={APP_ROUTES.programs}
                  onClick={() => setMobileMenuOpen(false)}
                  className="rounded px-2 py-1.5 hover:bg-slate-50 hover:text-blue-700"
                >
                  Program
                </Link>
                <Link
                  href={APP_ROUTES.method}
                  onClick={() => setMobileMenuOpen(false)}
                  className="rounded px-2 py-1.5 hover:bg-slate-50 hover:text-blue-700"
                >
                  Metode
                </Link>
                <Link
                  href={APP_ROUTES.faq}
                  onClick={() => setMobileMenuOpen(false)}
                  className="rounded px-2 py-1.5 hover:bg-slate-50 hover:text-blue-700"
                >
                  FAQ
                </Link>
              </div>
            </div>
          </nav>

          {/* Auth Actions in Mobile */}
          <div className="mt-4 border-t border-slate-100 pt-3">
            {user ? (
              <div className="grid gap-2">
                <Button asChild variant="outline" className="w-full border-blue-200 bg-blue-50/70 text-blue-900">
                  <Link href={APP_ROUTES.account} onClick={() => setMobileMenuOpen(false)}>
                    <UserIcon className="size-4" aria-hidden />
                    Akun Saya ({displayName})
                  </Link>
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  disabled={isSigningOut}
                  onClick={handleSignOut}
                  className="w-full border-rose-200 text-rose-700 hover:bg-rose-50"
                >
                  <LogOut className="size-4" aria-hidden />
                  Keluar
                </Button>
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-2">
                <Button asChild variant="outline" className="w-full border-slate-200 text-slate-700">
                  <Link href={loginHref} onClick={() => setMobileMenuOpen(false)}>
                    <LogIn className="size-4" aria-hidden />
                    Masuk
                  </Link>
                </Button>
                <Button asChild className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                  <Link href={APP_ROUTES.register} onClick={() => setMobileMenuOpen(false)}>
                    Daftar Gratis
                  </Link>
                </Button>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
