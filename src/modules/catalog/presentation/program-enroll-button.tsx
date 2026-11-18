"use client";

import Link from "next/link";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { APP_ROUTES } from "@/shared/constants/app";
import { useToastStore } from "@/shared/stores/toast-store";

export function ProgramEnrollButton({
  programTitle,
  className,
}: {
  programTitle: string;
  className?: string;
}) {
  const addToast = useToastStore((state) => state.addToast);
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
        type="button"
        onClick={() =>
          addToast(
            `Program "${programTitle}" dipilih. Integrasi pendaftaran & pembayaran akan ditambahkan pada tahap berikutnya.`,
            "success",
          )
        }
        className={cn(
          "bg-blue-600 text-sm font-semibold shadow-lg shadow-blue-100/70 hover:bg-blue-700",
          isSidebarStacked ? "h-12 w-full text-base" : "h-10 px-4",
        )}
      >
        Daftar Program Ini
      </Button>
      <Button
        asChild
        variant="outline"
        className={cn(
          "border-blue-200 text-blue-700 hover:bg-blue-50",
          isSidebarStacked ? "h-11 w-full" : "h-10 px-3 text-xs sm:text-sm",
        )}
      >
        <Link href={APP_ROUTES.tiuPractice}>Buka Latihan Soal TIU</Link>
      </Button>
    </div>
  );
}
