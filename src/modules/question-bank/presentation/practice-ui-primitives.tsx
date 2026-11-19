import Link from "next/link";
import { ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { QuestionSubtest } from "@/modules/question-bank/domain/question";
import { APP_ROUTES } from "@/shared/constants/app";

const UPPERCASE_TOKENS = new Set(["asn", "nkri", "uud", "tiu", "twk", "tkp", "svg"]);
const LOWERCASE_CONNECTORS = new Set(["dan", "di", "ke", "dari", "dalam", "untuk", "pada", "atau"]);

/**
 * Memformat slug sub-pola (kebab-case) menjadi label judul bahasa Indonesia yang rapi.
 */
export function formatSubPatternLabel(slug: string): string {
  const parts = slug.split("-").filter(Boolean);
  return parts
    .map((part, index) => {
      const lower = part.toLowerCase();
      if (UPPERCASE_TOKENS.has(lower)) {
        return lower.toUpperCase();
      }
      if (index > 0 && LOWERCASE_CONNECTORS.has(lower)) {
        return lower;
      }
      return part.charAt(0).toUpperCase() + part.slice(1);
    })
    .join(" ");
}

type SubtestPracticeIntroProps = {
  activeSubtest: QuestionSubtest;
  title: string;
  description: string;
  tiuTotal: number;
  twkTotal: number;
};

export function SubtestPracticeIntro({
  activeSubtest,
  title,
  description,
  tiuTotal,
  twkTotal,
}: SubtestPracticeIntroProps) {
  return (
    <div className="mb-8 flex flex-col gap-5 border-b border-blue-100 pb-6 lg:flex-row lg:items-end lg:justify-between">
      <div>
        <Button
          asChild
          variant="ghost"
          className="-ml-2 mb-3 text-blue-700 hover:bg-blue-50 hover:text-blue-800"
        >
          <Link href={APP_ROUTES.home}>
            <ArrowLeft className="size-4" aria-hidden />
            Kembali ke Beranda
          </Link>
        </Button>
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-700">
          Bank Soal Terpisah • SKD CPNS
        </p>
        <h1 className="mt-2 text-2xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
          {title}
        </h1>
        <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600 sm:text-base">
          {description}
        </p>
      </div>

      <nav
        aria-label="Pilih subtes latihan SKD"
        className="inline-flex w-fit shrink-0 flex-wrap items-center gap-1.5 rounded-2xl border border-blue-100 bg-white p-1.5 shadow-xs"
      >
        <Link
          href={APP_ROUTES.twkPractice}
          aria-current={activeSubtest === "TWK" ? "page" : undefined}
          className={cn(
            "inline-flex items-center gap-2 rounded-xl px-4 py-2 text-xs font-semibold transition-colors sm:text-sm",
            activeSubtest === "TWK"
              ? "bg-blue-600 text-white shadow-xs"
              : "text-slate-600 hover:bg-blue-50 hover:text-blue-800",
          )}
        >
          <span>TWK</span>
          <span
            className={cn(
              "rounded-full px-2 py-0.5 text-[11px] font-bold",
              activeSubtest === "TWK"
                ? "bg-white/20 text-white"
                : "bg-slate-100 text-slate-600",
            )}
          >
            {twkTotal} soal
          </span>
        </Link>
        <Link
          href={APP_ROUTES.tiuPractice}
          aria-current={activeSubtest === "TIU" ? "page" : undefined}
          className={cn(
            "inline-flex items-center gap-2 rounded-xl px-4 py-2 text-xs font-semibold transition-colors sm:text-sm",
            activeSubtest === "TIU"
              ? "bg-blue-600 text-white shadow-xs"
              : "text-slate-600 hover:bg-blue-50 hover:text-blue-800",
          )}
        >
          <span>TIU</span>
          <span
            className={cn(
              "rounded-full px-2 py-0.5 text-[11px] font-bold",
              activeSubtest === "TIU"
                ? "bg-white/20 text-white"
                : "bg-slate-100 text-slate-600",
            )}
          >
            {tiuTotal.toLocaleString("id-ID")} soal
          </span>
        </Link>
      </nav>
    </div>
  );
}

export function PracticeFilterPill({
  active,
  label,
  onClick,
}: {
  active: boolean;
  label: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      aria-pressed={active}
      onClick={onClick}
      className={cn(
        "rounded-full px-3 py-1.5 text-xs font-medium transition-colors",
        active
          ? "bg-slate-900 text-white"
          : "bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900",
      )}
    >
      {label}
    </button>
  );
}

export function PracticeStatusChip({
  active,
  label,
  onClick,
}: {
  active: boolean;
  label: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      aria-pressed={active}
      onClick={onClick}
      className={cn(
        "rounded-md px-2.5 py-1 text-xs font-semibold transition-colors",
        active
          ? "bg-blue-600 text-white"
          : "bg-white text-slate-600 hover:bg-blue-50 hover:text-blue-700",
      )}
    >
      {label}
    </button>
  );
}

export function PracticePaginationBar({
  currentPage,
  totalPages,
  onPageChange,
}: {
  currentPage: number;
  totalPages: number;
  onPageChange: (nextPage: number) => void;
}) {
  const pages = Array.from({ length: totalPages }, (_, index) => index + 1);

  return (
    <nav
      aria-label="Navigasi halaman soal"
      className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-blue-100 bg-white px-4 py-3.5 shadow-sm shadow-blue-100/40 sm:px-5"
    >
      <Button
        type="button"
        variant="outline"
        size="sm"
        disabled={currentPage <= 1}
        onClick={() => onPageChange(currentPage - 1)}
        className="border-slate-200 text-slate-700"
      >
        <ChevronLeft className="size-4" aria-hidden />
        Sebelumnya
      </Button>

      <div className="flex flex-wrap items-center justify-center gap-1">
        {pages.map((page) => (
          <button
            key={page}
            type="button"
            aria-current={page === currentPage ? "page" : undefined}
            onClick={() => onPageChange(page)}
            className={cn(
              "inline-flex size-8 items-center justify-center rounded-lg text-xs font-semibold transition-colors",
              page === currentPage
                ? "bg-blue-600 text-white"
                : "text-slate-600 hover:bg-blue-50 hover:text-blue-700",
            )}
          >
            {page}
          </button>
        ))}
      </div>

      <Button
        type="button"
        variant="outline"
        size="sm"
        disabled={currentPage >= totalPages}
        onClick={() => onPageChange(currentPage + 1)}
        className="border-slate-200 text-slate-700"
      >
        Selanjutnya
        <ChevronRight className="size-4" aria-hidden />
      </Button>
    </nav>
  );
}
