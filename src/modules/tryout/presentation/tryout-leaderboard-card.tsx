"use client";

import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import {
  CheckCircle2,
  Loader2,
  RefreshCw,
  Trophy,
  Users,
  XCircle,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  LEADERBOARD_SCOPE_META,
  type LeaderboardEntry,
  type LeaderboardResponse,
  type LeaderboardScope,
} from "@/modules/tryout/domain/leaderboard";
import { formatDurationVerbose } from "@/modules/tryout/domain/tryout-config";
import { APP_ROUTES } from "@/shared/constants/app";

type TryoutLeaderboardCardProps = {
  initialLeaderboard: LeaderboardResponse | null;
  isAuthenticated: boolean;
  refreshSignal?: number;
};

function formatRankBadge(rank: number) {
  if (rank === 1) {
    return "bg-amber-100 text-amber-800 border-amber-200";
  }
  if (rank === 2) {
    return "bg-slate-200 text-slate-800 border-slate-300";
  }
  if (rank === 3) {
    return "bg-orange-100 text-orange-800 border-orange-200";
  }
  return "bg-slate-50 text-slate-700 border-slate-200";
}

function LeaderboardRow({ entry }: { entry: LeaderboardEntry }) {
  return (
    <tr
      className={cn(
        "border-b border-slate-100 last:border-b-0",
        entry.isCurrentUser ? "bg-blue-50/70" : "hover:bg-slate-50/70",
      )}
    >
      <td className="px-3.5 py-3">
        <span
          className={cn(
            "inline-flex min-w-8 items-center justify-center rounded-lg border px-2 py-0.5 text-xs font-bold tabular-nums",
            formatRankBadge(entry.rank),
          )}
        >
          #{entry.rank}
        </span>
      </td>
      <td className="px-3.5 py-3">
        <div className="flex items-center gap-2">
          <span className="font-semibold text-slate-900">{entry.displayName}</span>
          {entry.isCurrentUser && (
            <span className="rounded-full bg-blue-600 px-2 py-0.5 text-[10px] font-bold text-white">
              Anda
            </span>
          )}
        </div>
        <p className="mt-0.5 text-[11px] text-slate-500">{entry.packageLabel}</p>
      </td>
      <td className="px-3 py-3 text-center text-xs font-semibold tabular-nums text-slate-700">
        {entry.twkScore}
      </td>
      <td className="px-3 py-3 text-center text-xs font-semibold tabular-nums text-slate-700">
        {entry.tiuScore}
      </td>
      <td className="px-3 py-3 text-center text-xs font-semibold tabular-nums text-slate-700">
        {entry.tkpScore}
      </td>
      <td className="px-3.5 py-3 text-center">
        <span className="inline-block rounded-lg bg-slate-900 px-2.5 py-1 text-xs font-bold tabular-nums text-white">
          {entry.totalScore}
        </span>
      </td>
      <td className="hidden px-3 py-3 text-center text-xs text-slate-600 sm:table-cell">
        {formatDurationVerbose(entry.durationUsedSec)}
      </td>
      <td className="px-3.5 py-3 text-right">
        <span
          className={cn(
            "inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[11px] font-bold",
            entry.passed
              ? "bg-emerald-50 text-emerald-700"
              : "bg-rose-50 text-rose-700",
          )}
        >
          {entry.passed ? (
            <CheckCircle2 className="size-3" aria-hidden />
          ) : (
            <XCircle className="size-3" aria-hidden />
          )}
          {entry.passed ? "Lulus PG" : "Belum PG"}
        </span>
      </td>
    </tr>
  );
}

export function TryoutLeaderboardCard({
  initialLeaderboard,
  isAuthenticated,
  refreshSignal = 0,
}: TryoutLeaderboardCardProps) {
  const [scope, setScope] = useState<LeaderboardScope>(
    initialLeaderboard?.scope ?? "all-official",
  );
  const [data, setData] = useState<LeaderboardResponse | null>(initialLeaderboard);
  const [isLoading, setIsLoading] = useState<boolean>(!initialLeaderboard);
  const [error, setError] = useState<string | null>(null);

  const loadLeaderboard = useCallback(async (targetScope: LeaderboardScope) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(
        `/api/tryout/leaderboard?scope=${encodeURIComponent(targetScope)}&limit=20`,
        { cache: "no-store" },
      );
      if (!response.ok) {
        throw new Error("Gagal memuat papan peringkat nasional.");
      }
      const payload = (await response.json()) as LeaderboardResponse;
      setData(payload);
    } catch {
      setError("Gagal memuat data Ranking Nasional. Coba muat ulang.");
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    if (refreshSignal <= 0) return;
    let cancelled = false;
    const controller = new AbortController();

    fetch(
      `/api/tryout/leaderboard?scope=${encodeURIComponent(scope)}&limit=20`,
      { cache: "no-store", signal: controller.signal },
    )
      .then(async (response) => {
        if (!response.ok) {
          throw new Error("Gagal memuat papan peringkat nasional.");
        }
        return (await response.json()) as LeaderboardResponse;
      })
      .then((payload) => {
        if (!cancelled) {
          setData(payload);
          setError(null);
        }
      })
      .catch((err: unknown) => {
        if (err instanceof DOMException && err.name === "AbortError") return;
        if (!cancelled) {
          setError("Gagal memuat data Ranking Nasional. Coba muat ulang.");
        }
      });

    return () => {
      cancelled = true;
      controller.abort();
    };
  }, [refreshSignal, scope]);

  const handleSelectScope = (nextScope: LeaderboardScope) => {
    setScope(nextScope);
    void loadLeaderboard(nextScope);
  };

  const activeMeta =
    LEADERBOARD_SCOPE_META.find((item) => item.id === scope) ??
    LEADERBOARD_SCOPE_META[0];

  const passRate =
    data && data.totalParticipants > 0
      ? Math.round((data.passedParticipants / data.totalParticipants) * 100)
      : 0;

  const isCurrentUserInTop = Boolean(
    data?.currentUserEntry &&
      data.entries.some((entry) => entry.isCurrentUser),
  );

  return (
    <div className="space-y-5">
      {/* Header & Filter Paket */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h3 className="text-base font-semibold text-slate-950">
            {activeMeta.label}
          </h3>
          <p className="mt-0.5 text-xs text-slate-500">
            {activeMeta.description} Urutan memakai tie-break resmi BKN (Lulus PG → Total → TKP → TIU → TWK → Durasi).
          </p>
        </div>

        <Button
          type="button"
          size="sm"
          variant="outline"
          onClick={() => void loadLeaderboard(scope)}
          disabled={isLoading}
          className="self-start border-slate-200 text-xs text-slate-700 hover:bg-slate-50 sm:self-auto"
        >
          <RefreshCw className={cn("size-3.5", isLoading && "animate-spin")} aria-hidden />
          Segarkan
        </Button>
      </div>

      {/* Scope Filter Strip */}
      <div className="flex flex-wrap gap-1.5">
        {LEADERBOARD_SCOPE_META.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => handleSelectScope(item.id)}
            className={cn(
              "rounded-lg border px-3 py-1.5 text-xs font-semibold transition",
              scope === item.id
                ? "border-blue-600 bg-blue-600 text-white"
                : "border-slate-200 bg-white text-slate-600 hover:border-slate-300 hover:text-slate-900",
            )}
          >
            {item.shortLabel}
          </button>
        ))}
      </div>

      {/* Ringkasan Statistik & Posisi Anda */}
      {data && !data.schemaMissing && (
        <div className="grid gap-3 sm:grid-cols-4">
          <div className="rounded-xl border border-slate-200/80 bg-slate-50/70 px-4 py-3">
            <p className="text-[11px] font-medium text-slate-500">Total Peserta</p>
            <p className="mt-0.5 text-lg font-bold tabular-nums text-slate-950">
              {data.totalParticipants.toLocaleString("id-ID")}
            </p>
          </div>
          <div className="rounded-xl border border-slate-200/80 bg-slate-50/70 px-4 py-3">
            <p className="text-[11px] font-medium text-slate-500">Tingkat Lulus PG</p>
            <p className="mt-0.5 text-lg font-bold tabular-nums text-emerald-700">
              {passRate}%
              <span className="ml-1 text-xs font-normal text-slate-500">
                ({data.passedParticipants})
              </span>
            </p>
          </div>
          <div className="rounded-xl border border-slate-200/80 bg-slate-50/70 px-4 py-3">
            <p className="text-[11px] font-medium text-slate-500">Rata-rata Skor</p>
            <p className="mt-0.5 text-lg font-bold tabular-nums text-slate-950">
              {data.averageScore}
            </p>
          </div>
          <div className="rounded-xl border border-blue-200/80 bg-blue-50/60 px-4 py-3">
            <p className="text-[11px] font-medium text-blue-700">Peringkat Anda</p>
            {data.currentUserEntry ? (
              <p className="mt-0.5 text-lg font-bold tabular-nums text-blue-950">
                #{data.currentUserEntry.rank}
                {data.currentUserTopPercent !== null && (
                  <span className="ml-1.5 rounded-full bg-blue-600 px-2 py-0.5 text-[10px] font-bold text-white">
                    Top {data.currentUserTopPercent}%
                  </span>
                )}
              </p>
            ) : isAuthenticated ? (
              <p className="mt-1 text-xs font-semibold text-blue-900">
                Belum ada skor di paket ini
              </p>
            ) : (
              <Link
                href={`${APP_ROUTES.login}?next=${encodeURIComponent(APP_ROUTES.tryout)}`}
                className="mt-1 inline-block text-xs font-semibold text-blue-700 underline underline-offset-2 hover:text-blue-800"
              >
                Masuk untuk ikut ranking
              </Link>
            )}
          </div>
        </div>
      )}

      {/* Body Tabel */}
      {isLoading ? (
        <div className="flex items-center justify-center gap-2 rounded-xl border border-slate-100 bg-slate-50/50 py-12 text-xs font-medium text-slate-500">
          <Loader2 className="size-4 animate-spin text-blue-600" aria-hidden />
          Memuat papan peringkat nasional...
        </div>
      ) : error ? (
        <div className="rounded-xl border border-rose-200 bg-rose-50 px-4 py-3 text-xs font-medium text-rose-700">
          {error}
        </div>
      ) : data?.schemaMissing ? (
        <div className="rounded-xl border border-dashed border-amber-300 bg-amber-50/60 px-5 py-8 text-center">
          <Trophy className="mx-auto size-7 text-amber-500" aria-hidden />
          <p className="mt-2 text-sm font-semibold text-amber-950">
            Ranking Nasional &amp; Cloud Sync menunggu migrasi database
          </p>
          <p className="mx-auto mt-1 max-w-md text-xs text-amber-800">
            Jalankan file <code className="rounded bg-amber-100 px-1 py-0.5">006_tryout_attempts.sql</code> di
            Supabase SQL Editor untuk mengaktifkan sinkronisasi riwayat Tryout lintas perangkat dan papan peringkat nasional.
          </p>
        </div>
      ) : !data || data.entries.length === 0 ? (
        <div className="rounded-xl border border-dashed border-slate-200 bg-slate-50/60 px-5 py-9 text-center">
          <Users className="mx-auto size-7 text-slate-400" aria-hidden />
          <p className="mt-2 text-sm font-semibold text-slate-800">
            Belum ada peserta di papan peringkat paket ini
          </p>
          <p className="mt-1 text-xs text-slate-500">
            {isAuthenticated
              ? "Selesaikan simulasi paket ini untuk menjadi peserta pertama yang tercatat di Ranking Nasional."
              : "Masuk ke akun Anda lalu selesaikan simulasi untuk masuk ke Ranking Nasional."}
          </p>
        </div>
      ) : (
        <div className="overflow-x-auto rounded-xl border border-slate-200/90">
          <table className="w-full border-collapse text-left text-xs sm:text-sm">
            <thead className="border-b border-slate-200 bg-slate-50 text-[11px] font-semibold uppercase tracking-wider text-slate-500">
              <tr>
                <th className="px-3.5 py-2.5">Rank</th>
                <th className="px-3.5 py-2.5">Peserta</th>
                <th className="px-3 py-2.5 text-center">TWK</th>
                <th className="px-3 py-2.5 text-center">TIU</th>
                <th className="px-3 py-2.5 text-center">TKP</th>
                <th className="px-3.5 py-2.5 text-center">Total</th>
                <th className="hidden px-3 py-2.5 text-center sm:table-cell">Durasi</th>
                <th className="px-3.5 py-2.5 text-right">Status</th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {data.entries.map((entry) => (
                <LeaderboardRow
                  key={`${entry.rank}-${entry.displayName}-${entry.completedAt}`}
                  entry={entry}
                />
              ))}
              {data.currentUserEntry && !isCurrentUserInTop && (
                <>
                  <tr className="bg-slate-50">
                    <td
                      colSpan={8}
                      className="px-3.5 py-1.5 text-center text-[11px] font-medium text-slate-400"
                    >
                      Posisi Anda saat ini di luar 20 besar
                    </td>
                  </tr>
                  <LeaderboardRow entry={data.currentUserEntry} />
                </>
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
