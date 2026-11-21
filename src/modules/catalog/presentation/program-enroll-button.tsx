"use client";

import Link from "next/link";
import { ArrowRight, Award, Compass, CreditCard } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { APP_ROUTES } from "@/shared/constants/app";

export function ProgramEnrollButton({
  className,
}: {
  programTitle?: string;
  className?: string;
}) {
  const isSidebarStacked = Boolean(className?.includes("w-full"));

  return (
    <div
      className={cn(
        isSidebarStacked
          ? "mt-6 flex w-full flex-col gap-2.5"
          : "flex flex-wrap items-center gap-2",
      )}
    >
      <Button
        asChild
        className={cn(
          "bg-blue-600 text-sm font-semibold text-white shadow-lg shadow-blue-100/70 hover:bg-blue-700",
          isSidebarStacked ? "h-12 w-full text-base" : "h-10 px-4",
        )}
      >
        <Link href="#roadmap">
          <Compass className="size-4" aria-hidden />
          Mulai Roadmap Belajar
          <ArrowRight className="size-4" aria-hidden />
        </Link>
      </Button>

      <Button
        asChild
        variant="outline"
        className={cn(
          "border-emerald-300 bg-emerald-50 text-emerald-800 hover:bg-emerald-100",
          isSidebarStacked ? "h-11 w-full" : "h-10 px-3 text-xs sm:text-sm",
        )}
      >
        <Link href={APP_ROUTES.pricing}>
          <CreditCard className="size-4 text-emerald-600" aria-hidden />
          Beli Paket Akses
        </Link>
      </Button>

      <Button
        asChild
        variant="outline"
        className={cn(
          "border-slate-300 bg-slate-900 text-white hover:bg-slate-800 hover:text-white",
          isSidebarStacked ? "h-11 w-full" : "h-10 px-3 text-xs sm:text-sm",
        )}
      >
        <Link href={APP_ROUTES.tryout}>
          <Award className="size-4" aria-hidden />
          Tryout CAT 110 Soal
        </Link>
      </Button>

      {isSidebarStacked && (
        <div className="mt-1 grid grid-cols-3 gap-2">
          <Button
            asChild
            size="sm"
            variant="outline"
            className="border-blue-200 text-xs font-semibold text-blue-700 hover:bg-blue-50"
          >
            <Link href={APP_ROUTES.twkPractice}>TWK</Link>
          </Button>
          <Button
            asChild
            size="sm"
            variant="outline"
            className="border-violet-200 text-xs font-semibold text-violet-700 hover:bg-violet-50"
          >
            <Link href={APP_ROUTES.tiuPractice}>TIU</Link>
          </Button>
          <Button
            asChild
            size="sm"
            variant="outline"
            className="border-teal-200 text-xs font-semibold text-teal-700 hover:bg-teal-50"
          >
            <Link href={APP_ROUTES.tkpPractice}>TKP</Link>
          </Button>
        </div>
      )}
    </div>
  );
}
