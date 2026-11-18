"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

import { BrandLogo } from "@/components/layout/brand-logo";
import { Button } from "@/components/ui/button";
import { APP_ROUTES } from "@/shared/constants/app";

const navLinks = [
  { href: APP_ROUTES.method, label: "Metode Belajar" },
  { href: APP_ROUTES.programs, label: "Program Bimbel" },
  { href: APP_ROUTES.tiuPractice, label: "Bank Soal TIU" },
  { href: APP_ROUTES.testimonials, label: "Testimoni" },
  { href: APP_ROUTES.faq, label: "FAQ" },
] as const;

export function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

        <div className="hidden items-center gap-3 md:flex">
          <Button
            asChild
            variant="outline"
            className="border-blue-300 px-4 text-blue-700 hover:bg-blue-50 hover:text-blue-800"
          >
            <Link href={APP_ROUTES.tiuPractice}>Latihan Soal</Link>
          </Button>
          <Button
            asChild
            className="bg-blue-600 px-5 text-white shadow-sm shadow-blue-100 hover:bg-blue-700"
          >
            <Link href={APP_ROUTES.programs}>Pilih Program</Link>
          </Button>
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
            <Button asChild className="w-full bg-blue-600 hover:bg-blue-700">
              <Link href={APP_ROUTES.programs} onClick={() => setMobileMenuOpen(false)}>
                Pilih Program
              </Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
