"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { ChevronDown, LogOut, Menu, User as UserIcon, X } from "lucide-react";

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
    meta: "5 pilar • 500 soal",
  },
  {
    href: APP_ROUTES.tiuPractice,
    code: "TIU",
    label: "Tes Intelegensia Umum",
    meta: "9 pola • 1.820 soal",
  },
  {
    href: APP_ROUTES.tkpPractice,
    code: "TKP",
    label: "Tes Karakteristik Pribadi",
    meta: "6 aspek • 570 soal",
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
    <header className="sticky top-0 z-30 border-b border-slate-200/80 bg-white/90 backdrop-blur-md print:hidden">
      <div className="mx-auto flex h-[4.5rem] max-w-[1280px] items-center justify-between gap-6 px-5 sm:px-8 lg:px-10">
        {/* Brand Logo */}
        <Link href={APP_ROUTES.home} className="flex shrink-0 items-center">
          <BrandLogo priority className="h-9 sm:h-10" />
        </Link>

        {/* Desktop Navigation — Simple, Elegan & Profesional (Tanpa Ikon Dekoratif) */}
        <nav
          aria-label="Navigasi utama"
          className="hidden items-center gap-7 lg:flex xl:gap-9"
        >
          {/* 1. Bank Soal (Dropdown Subtes & Roadmap) */}
          <div ref={dropdownRef} className="relative">
            <button
              type="button"
              aria-expanded={bankDropdownOpen}
              aria-haspopup="menu"
              onClick={() => setBankDropdownOpen((open) => !open)}
              className={cn(
                "inline-flex items-center gap-1 py-1 text-sm font-medium tracking-[-0.01em] text-slate-600 transition-colors hover:text-slate-950",
                (bankDropdownOpen || isBankSoalActive) &&
                  "font-semibold text-blue-700",
              )}
            >
              <span>Bank Soal</span>
              <ChevronDown
                className={cn(
                  "size-3.5 text-slate-400 transition-transform duration-150",
                  bankDropdownOpen && "rotate-180 text-blue-600",
                )}
                aria-hidden
              />
            </button>

            {bankDropdownOpen && (
              <div
                role="menu"
                aria-label="Subtes Bank Soal SKD"
                className="absolute left-0 top-full z-40 mt-3 w-72 rounded-xl border border-slate-200/90 bg-white p-1.5 shadow-xl shadow-slate-900/8"
              >
                <div className="px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                  Latihan Subtes (2.890 Soal)
                </div>

                <div className="space-y-0.5">
                  {BANK_SOAL_ITEMS.map((item) => {
                    const isItemActive = pathname === item.href;
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        role="menuitem"
                        onClick={() => setBankDropdownOpen(false)}
                        className={cn(
                          "flex items-center justify-between rounded-lg px-3 py-2 transition-colors hover:bg-slate-50",
                          isItemActive && "bg-blue-50/70",
                        )}
                      >
                        <div className="min-w-0">
                          <p className="truncate text-xs font-semibold text-slate-900">
                            {item.code} — {item.label}
                          </p>
                          <p className="mt-0.5 text-[11px] text-slate-500">
                            {item.meta}
                          </p>
                        </div>
                      </Link>
                    );
                  })}
                </div>

                <div className="mt-1 border-t border-slate-100 pt-1">
                  <Link
                    href={APP_ROUTES.courseDetail("intensif-skd-cpns")}
                    role="menuitem"
                    onClick={() => setBankDropdownOpen(false)}
                    className="block rounded-lg px-3 py-2 text-xs font-semibold text-blue-700 transition-colors hover:bg-blue-50/70"
                  >
                    Roadmap Learning Path SKD &rarr;
                  </Link>
                </div>
              </div>
            )}
          </div>

          {/* 2. Sprint 10m */}
          <Link
            href={APP_ROUTES.sprint}
            className={cn(
              "py-1 text-sm font-medium tracking-[-0.01em] text-slate-600 transition-colors hover:text-slate-950",
              pathname === APP_ROUTES.sprint && "font-semibold text-blue-700",
            )}
          >
            Sprint 10m
          </Link>

          {/* 3. Tryout CAT */}
          <Link
            href={APP_ROUTES.tryout}
            className={cn(
              "py-1 text-sm font-medium tracking-[-0.01em] text-slate-600 transition-colors hover:text-slate-950",
              pathname === APP_ROUTES.tryout && "font-semibold text-blue-700",
            )}
          >
            Tryout CAT
          </Link>

          {/* 4. Paket Belajar */}
          <Link
            href={APP_ROUTES.pricing}
            className={cn(
              "py-1 text-sm font-medium tracking-[-0.01em] text-slate-600 transition-colors hover:text-slate-950",
              pathname === APP_ROUTES.pricing && "font-semibold text-blue-700",
            )}
          >
            Paket Belajar
          </Link>
        </nav>

        {/* Right CTA / Auth Area */}
        <div className="hidden items-center gap-3 lg:flex">
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
                className="h-9 max-w-[180px] gap-2 border-slate-200 bg-white px-3 text-slate-800 hover:bg-slate-50"
              >
                <Link href={APP_ROUTES.account} title={user.email ?? displayName}>
                  {avatarUrl ? (
                    <Image
                      src={avatarUrl}
                      alt={displayName}
                      width={20}
                      height={20}
                      className="size-5 shrink-0 rounded-full object-cover"
                    />
                  ) : (
                    <UserIcon className="size-3.5 shrink-0 text-slate-500" aria-hidden />
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
                className="size-9 text-slate-400 hover:bg-rose-50 hover:text-rose-600"
                aria-label="Keluar akun"
                title="Keluar"
              >
                <LogOut className="size-4" aria-hidden />
              </Button>
            </div>
          ) : (
            <div className="flex items-center gap-3">
              <Link
                href={loginHref}
                className="px-2 py-1.5 text-sm font-medium text-slate-600 transition-colors hover:text-slate-950"
              >
                Masuk
              </Link>
              <Button
                asChild
                className="h-9 rounded-lg bg-blue-600 px-4 text-xs font-semibold text-white shadow-xs transition-colors hover:bg-blue-700 xl:text-sm"
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
          className="inline-flex size-9 items-center justify-center rounded-lg border border-slate-200 text-slate-700 hover:bg-slate-50 lg:hidden"
        >
          {mobileMenuOpen ? (
            <X className="size-4.5" aria-hidden />
          ) : (
            <Menu className="size-4.5" aria-hidden />
          )}
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="border-t border-slate-100 bg-white px-5 py-4 lg:hidden">
          <nav aria-label="Navigasi mobile" className="grid gap-1 text-sm font-medium text-slate-800">
            <div className="rounded-xl border border-slate-200/80 bg-slate-50/70 p-2.5">
              <p className="px-2 py-1 text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                Bank Soal SKD (2.890 Soal)
              </p>
              <div className="mt-1 grid gap-0.5">
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
                  className="mt-1 block rounded-lg bg-white px-2.5 py-2 text-xs font-semibold text-blue-700 shadow-2xs"
                >
                  Roadmap Learning Path SKD &rarr;
                </Link>
              </div>
            </div>

            <Link
              href={APP_ROUTES.sprint}
              onClick={() => setMobileMenuOpen(false)}
              className="rounded-lg px-3 py-2.5 transition-colors hover:bg-slate-50 hover:text-blue-700"
            >
              Sprint 10m
            </Link>

            <Link
              href={APP_ROUTES.tryout}
              onClick={() => setMobileMenuOpen(false)}
              className="rounded-lg px-3 py-2.5 transition-colors hover:bg-slate-50 hover:text-blue-700"
            >
              Tryout CAT
            </Link>

            <Link
              href={APP_ROUTES.pricing}
              onClick={() => setMobileMenuOpen(false)}
              className="rounded-lg px-3 py-2.5 font-semibold text-blue-700 transition-colors hover:bg-blue-50"
            >
              Paket Belajar
            </Link>

            {/* Secondary Landing Anchor Links */}
            <div className="mt-2 border-t border-slate-100 pt-2 text-xs text-slate-500">
              <div className="grid grid-cols-3 gap-1 text-center">
                <Link
                  href={APP_ROUTES.programs}
                  onClick={() => setMobileMenuOpen(false)}
                  className="rounded px-2 py-1.5 hover:bg-slate-50 hover:text-slate-900"
                >
                  Program
                </Link>
                <Link
                  href={APP_ROUTES.method}
                  onClick={() => setMobileMenuOpen(false)}
                  className="rounded px-2 py-1.5 hover:bg-slate-50 hover:text-slate-900"
                >
                  Metode
                </Link>
                <Link
                  href={APP_ROUTES.faq}
                  onClick={() => setMobileMenuOpen(false)}
                  className="rounded px-2 py-1.5 hover:bg-slate-50 hover:text-slate-900"
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
                <Button asChild variant="outline" className="w-full border-slate-200 text-slate-800">
                  <Link href={APP_ROUTES.account} onClick={() => setMobileMenuOpen(false)}>
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
                  Keluar
                </Button>
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-2">
                <Button asChild variant="outline" className="w-full border-slate-200 text-slate-700">
                  <Link href={loginHref} onClick={() => setMobileMenuOpen(false)}>
                    Masuk
                  </Link>
                </Button>
                <Button asChild className="w-full bg-blue-600 text-white hover:bg-blue-700">
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
