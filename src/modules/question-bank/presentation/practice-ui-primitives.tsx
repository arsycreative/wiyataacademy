import Link from "next/link";
import { CheckCircle2, ChevronLeft, ChevronRight, RotateCcw } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { QuestionSubtest } from "@/modules/question-bank/domain/question";
import type { RetrySessionSummary } from "@/modules/question-bank/domain/retry-session";
import { APP_ROUTES } from "@/shared/constants/app";

const UPPERCASE_TOKENS = new Set(["asn", "nkri", "uud", "tiu", "twk", "tkp", "svg", "tik", "sop", "ai"]);
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
  tkpTotal: number;
};

export function SubtestPracticeIntro({
  activeSubtest,
  title,
  description,
  tiuTotal,
  twkTotal,
  tkpTotal,
}: SubtestPracticeIntroProps) {
  const tabs = [
    { id: "TWK" as const, href: APP_ROUTES.twkPractice, count: twkTotal },
    { id: "TIU" as const, href: APP_ROUTES.tiuPractice, count: tiuTotal },
    { id: "TKP" as const, href: APP_ROUTES.tkpPractice, count: tkpTotal },
  ];

  return (
    <div className="mb-6 flex flex-col gap-4 border-b border-slate-200/80 pb-5 lg:flex-row lg:items-end lg:justify-between">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue-700">
          Bank Soal SKD CPNS
        </p>
        <h1 className="mt-1.5 text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
          {title}
        </h1>
        <p className="mt-1.5 max-w-2xl text-sm leading-6 text-slate-600">
          {description}
        </p>
      </div>

      <nav
        aria-label="Pilih subtes latihan SKD"
        className="inline-flex w-fit shrink-0 items-center gap-1 rounded-xl border border-slate-200/90 bg-white p-1 shadow-2xs"
      >
        {tabs.map((tab) => {
          const isActive = activeSubtest === tab.id;
          return (
            <Link
              key={tab.id}
              href={tab.href}
              aria-current={isActive ? "page" : undefined}
              className={cn(
                "inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-semibold transition-colors sm:px-3.5 sm:text-sm",
                isActive
                  ? "bg-blue-600 text-white"
                  : "text-slate-600 hover:bg-slate-50 hover:text-slate-950",
              )}
            >
              <span>{tab.id}</span>
              <span
                className={cn(
                  "text-[11px] font-medium",
                  isActive ? "text-blue-100" : "text-slate-400",
                )}
              >
                ({tab.count.toLocaleString("id-ID")})
              </span>
            </Link>
          );
        })}
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

/**
 * Menampilkan ringkasan progres serta hasil akhir sesi ulang soal yang salah.
 */
export function PracticeRetryBanner({
  summary,
  wrongUnitLabel = "soal salah",
  perfectLabel = "terjawab benar",
  onRetryRemaining,
  onExitRetry,
}: {
  summary: RetrySessionSummary;
  wrongUnitLabel?: string;
  perfectLabel?: string;
  onRetryRemaining: (ids: readonly string[]) => void;
  onExitRetry: () => void;
}) {
  const allSolved = summary.isComplete && summary.stillWrongIds.length === 0;
  const hasRemainingWrong = summary.isComplete && summary.stillWrongIds.length > 0;

  return (
    <div
      role="status"
      className={cn(
        "flex flex-wrap items-center justify-between gap-3 rounded-2xl border px-4 py-3.5 text-xs shadow-xs sm:px-5 sm:text-sm",
        allSolved
          ? "border-emerald-200 bg-emerald-50/90 text-emerald-950"
          : hasRemainingWrong
            ? "border-amber-200 bg-amber-50/90 text-amber-950"
            : "border-rose-200 bg-rose-50/80 text-rose-950",
      )}
    >
      <div className="flex min-w-0 items-start gap-2.5">
        {allSolved ? (
          <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-emerald-600" aria-hidden />
        ) : (
          <RotateCcw
            className={cn(
              "mt-0.5 size-4 shrink-0",
              hasRemainingWrong ? "text-amber-700" : "text-rose-600",
            )}
            aria-hidden
          />
        )}
        <div className="space-y-0.5">
          {allSolved ? (
            <>
              <p className="font-semibold">
                Selesai! Semua {summary.total} soal pada sesi ulang ini sudah {perfectLabel}.
              </p>
              <p className="text-xs text-emerald-800">
                Jawaban baru dan pengacakan opsi telah tersimpan ke progres Anda.
              </p>
            </>
          ) : summary.isComplete ? (
            <>
              <p className="font-semibold">
                Sesi ulang selesai ({summary.total} soal): {summary.improvedCount} {perfectLabel},{" "}
                {summary.stillWrongIds.length} masih perlu diulang.
              </p>
              <p className="text-xs text-amber-900">
                Klik tombol ulang di samping untuk langsung melatih ulang{" "}
                {summary.stillWrongIds.length} {wrongUnitLabel} yang tersisa.
              </p>
            </>
          ) : (
            <>
              <p className="font-semibold">
                Mode Ulang Soal ({summary.completedCount}/{summary.total} dikerjakan)
              </p>
              <p className="text-xs text-rose-800">
                Urutan opsi A–E diacak ulang khusus sesi ini. Jawaban sebelumnya tetap aman sampai
                Anda memilih jawaban baru.
              </p>
            </>
          )}
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-2">
        {hasRemainingWrong && (
          <Button
            type="button"
            size="sm"
            onClick={() => onRetryRemaining(summary.stillWrongIds)}
            className="h-8 bg-rose-600 px-3 text-xs font-semibold text-white hover:bg-rose-700"
          >
            <RotateCcw className="size-3.5" aria-hidden />
            Ulangi {summary.stillWrongIds.length} {wrongUnitLabel}
          </Button>
        )}
        <Button
          type="button"
          size="sm"
          variant={allSolved ? "default" : "outline"}
          onClick={onExitRetry}
          className={cn(
            "h-8 px-3 text-xs font-semibold",
            allSolved
              ? "bg-emerald-600 text-white hover:bg-emerald-700"
              : "border-slate-300 bg-white text-slate-700 hover:bg-slate-50",
          )}
        >
          Kembali ke Semua Soal
        </Button>
      </div>
    </div>
  );
}

/**
 * Ajakan cepat untuk memulai sesi ulang ketika pengguna sedang memfilter soal salah/belum optimal.
 */
export function PracticeWrongFilterBanner({
  wrongCount,
  wrongUnitLabel = "soal salah",
  onStartRetryAll,
}: {
  wrongCount: number;
  wrongUnitLabel?: string;
  onStartRetryAll: () => void;
}) {
  if (wrongCount <= 0) return null;

  return (
    <div className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-rose-200 bg-rose-50/75 px-4 py-3 text-xs text-rose-950 sm:px-5 sm:text-sm">
      <p className="font-medium">
        Menampilkan <strong>{wrongCount}</strong> {wrongUnitLabel} beserta pembahasannya.
      </p>
      <Button
        type="button"
        size="sm"
        onClick={onStartRetryAll}
        className="h-8 bg-rose-600 px-3 text-xs font-semibold text-white hover:bg-rose-700"
      >
        <RotateCcw className="size-3.5" aria-hidden />
        Ulangi {wrongCount} {wrongUnitLabel}
      </Button>
    </div>
  );
}

