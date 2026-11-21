"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import {
  BookOpen,
  ChevronDown,
  Compass,
  LogIn,
  LogOut,
  Menu,
  User as UserIcon,
  X,
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

const navLinksAfterDropdown = [
  { href: APP_ROUTES.sprint, label: "Sprint 10m" },
  { href: APP_ROUTES.tryout, label: "Tryout CAT" },
  { href: APP_ROUTES.faq, label: "FAQ" },
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
        <Link href={APP_ROUTES.home} className="flex items-center gap-3">
          <BrandLogo priority className="h-10 sm:h-11" />
        </Link>

        <nav
          aria-label="Navigasi utama"
          className="hidden items-center gap-5 whitespace-nowrap text-xs font-medium text-blue-950 lg:flex xl:gap-7 xl:text-sm"
        >
          <Link
            href={APP_ROUTES.method}
            className="whitespace-nowrap transition-colors hover:text-blue-700"
          >
            Metode Belajar
          </Link>
          <Link
            href={APP_ROUTES.programs}
            className="whitespace-nowrap transition-colors hover:text-blue-700"
          >
            Program Bimbel
          </Link>

          {/* Dropdown Bank Soal (TWK, TIU, TKP & Roadmap) */}
          <div ref={dropdownRef} className="relative">
            <button
              type="button"
              aria-expanded={bankDropdownOpen}
              aria-haspopup="menu"
              onClick={() => setBankDropdownOpen((open) => !open)}
              className={cn(
                "inline-flex items-center gap-1 whitespace-nowrap rounded-lg px-2 py-1.5 transition-colors hover:bg-blue-50/80 hover:text-blue-700",
                (bankDropdownOpen || isBankSoalActive) &&
                  "bg-blue-50 font-semibold text-blue-700",
              )}
            >
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

          {navLinksAfterDropdown.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "whitespace-nowrap transition-colors hover:text-blue-700",
                pathname === item.href && "font-semibold text-blue-700",
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

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
                aria-label="Keluar dari akun"
                title="Keluar"
                className="size-9 text-slate-600 hover:bg-rose-50 hover:text-rose-700"
              >
                <LogOut className="size-4" aria-hidden />
              </Button>
            </div>
          ) : (
            <Button
              asChild
              className="bg-blue-600 px-5 text-white shadow-sm shadow-blue-100 hover:bg-blue-700"
            >
              <Link href={loginHref}>
                <LogIn className="size-4" aria-hidden />
                Masuk
              </Link>
            </Button>
          )}
        </div>

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

      {mobileMenuOpen && (
        <div className="border-t border-blue-100 bg-white px-5 py-4 lg:hidden">
          <nav aria-label="Navigasi mobile" className="grid gap-1 text-sm font-medium text-blue-950">
            <Link
              href={APP_ROUTES.method}
              onClick={() => setMobileMenuOpen(false)}
              className="rounded-lg px-3 py-2 transition-colors hover:bg-blue-50 hover:text-blue-700"
            >
              Metode Belajar
            </Link>
            <Link
              href={APP_ROUTES.programs}
              onClick={() => setMobileMenuOpen(false)}
              className="rounded-lg px-3 py-2 transition-colors hover:bg-blue-50 hover:text-blue-700"
            >
              Program Bimbel
            </Link>

            <div className="my-1.5 rounded-xl border border-blue-100 bg-slate-50/70 p-2">
              <p className="flex items-center gap-1.5 px-2 py-1 text-[11px] font-bold uppercase tracking-wider text-slate-500">
                <BookOpen className="size-3.5 text-blue-600" aria-hidden />
                Bank Soal SKD (2.540 Soal)
              </p>
              <div className="mt-1 grid gap-1">
                {BANK_SOAL_ITEMS.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between rounded-lg px-2 py-1.5 text-xs transition-colors hover:bg-white"
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
                  className="flex items-center gap-1.5 rounded-lg px-2 py-1.5 text-xs font-semibold text-blue-700 hover:bg-white"
                >
                  <Compass className="size-3.5" aria-hidden />
                  Roadmap Learning Path SKD
                </Link>
              </div>
            </div>

            {navLinksAfterDropdown.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-lg px-3 py-2 transition-colors hover:bg-blue-50 hover:text-blue-700"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="mt-3 grid gap-2">
            {user ? (
              <>
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
              </>
            ) : (
              <>
                <Button asChild className="w-full bg-blue-600 hover:bg-blue-700">
                  <Link href={loginHref} onClick={() => setMobileMenuOpen(false)}>
                    <LogIn className="size-4" aria-hidden />
                    Masuk
                  </Link>
                </Button>
                <Button asChild variant="outline" className="w-full border-slate-200 text-slate-700">
                  <Link href={APP_ROUTES.register} onClick={() => setMobileMenuOpen(false)}>
                    Daftar Akun Baru
                  </Link>
                </Button>
              </>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
