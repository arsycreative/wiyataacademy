import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { Button } from "@/components/ui/button";
import { AuthForm } from "@/modules/auth/presentation/auth-form";
import { APP_ROUTES } from "@/shared/constants/app";

export const metadata: Metadata = {
  title: "Masuk Akun",
  description:
    "Masuk ke akun Wiyata Edu menggunakan Google atau email untuk menyimpan dan menyinkronkan progres latihan SKD CPNS.",
};

type LoginPageProps = {
  searchParams?: Promise<{
    next?: string | string[];
    error?: string | string[];
  }>;
};

function readParam(value?: string | string[]): string | undefined {
  return Array.isArray(value) ? value[0] : value;
}

export default async function LoginPage({ searchParams }: LoginPageProps) {
  const resolved = searchParams ? await searchParams : undefined;
  const next = readParam(resolved?.next);
  const error = readParam(resolved?.error);

  return (
    <div className="flex min-h-screen flex-col bg-[#f8fbff] text-slate-950">
      <SiteHeader />

      <main className="mx-auto flex w-full max-w-[1280px] flex-1 flex-col justify-center px-5 py-10 sm:px-8 lg:px-10">
        <div className="mb-6">
          <Button
            asChild
            variant="ghost"
            className="-ml-2 text-blue-700 hover:bg-blue-50 hover:text-blue-800"
          >
            <Link href={APP_ROUTES.home}>
              <ArrowLeft className="size-4" aria-hidden />
              Kembali ke Beranda
            </Link>
          </Button>
        </div>

        <AuthForm mode="login" initialNext={next} initialError={error} />
      </main>

      <SiteFooter />
    </div>
  );
}

