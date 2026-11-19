"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { LogIn, LogOut, Menu, User as UserIcon, X } from "lucide-react";

import { BrandLogo } from "@/components/layout/brand-logo";
import { Button } from "@/components/ui/button";
import { useSupabaseAuth } from "@/modules/auth/presentation/use-supabase-auth";
import { APP_ROUTES } from "@/shared/constants/app";
import { useToastStore } from "@/shared/stores/toast-store";

const navLinks = [
  { href: APP_ROUTES.method, label: "Metode Belajar" },
  { href: APP_ROUTES.programs, label: "Program Bimbel" },
  { href: APP_ROUTES.tiuPractice, label: "Bank Soal TIU" },
  { href: APP_ROUTES.testimonials, label: "Testimoni" },
  { href: APP_ROUTES.faq, label: "FAQ" },
] as const;

export function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isSigningOut, setIsSigningOut] = useState(false);

  const router = useRouter();
  const pathname = usePathname();
  const addToast = useToastStore((state) => state.addToast);
  const { user, isLoading, signOut } = useSupabaseAuth();

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
          className="hidden items-center gap-7 text-sm font-medium text-blue-950 md:flex"
        >
          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-blue-700"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2.5 md:flex">
          <Button
            asChild
            variant="outline"
            className="border-blue-300 px-4 text-blue-700 hover:bg-blue-50 hover:text-blue-800"
          >
            <Link href={APP_ROUTES.tiuPractice}>Latihan Soal</Link>
          </Button>

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
          className="inline-flex size-10 items-center justify-center rounded-lg border border-blue-100 text-blue-950 hover:bg-blue-50 md:hidden"
        >
          {mobileMenuOpen ? <X className="size-5" aria-hidden /> : <Menu className="size-5" aria-hidden />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="border-t border-blue-100 bg-white px-5 py-4 md:hidden">
          <nav aria-label="Navigasi mobile" className="grid gap-1 text-sm font-medium text-blue-950">
            {navLinks.map((item) => (
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
            <Button asChild variant="outline" className="w-full border-blue-300 text-blue-700">
              <Link href={APP_ROUTES.tiuPractice} onClick={() => setMobileMenuOpen(false)}>
                Latihan Soal
              </Link>
            </Button>
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
