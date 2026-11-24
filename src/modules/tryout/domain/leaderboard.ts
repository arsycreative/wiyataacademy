import type { TryoutHistoryRecord } from "@/modules/tryout/infrastructure/tryout-storage";

export const LEADERBOARD_SCOPES = [
  "all-official",
  "paket-resmi-1",
  "paket-resmi-2",
  "paket-resmi-3",
  "mini-cat-cepat",
] as const;

export type LeaderboardScope = (typeof LEADERBOARD_SCOPES)[number];

export const LEADERBOARD_SCOPE_META: ReadonlyArray<{
  id: LeaderboardScope;
  label: string;
  shortLabel: string;
  description: string;
}> = [
  {
    id: "all-official",
    label: "Semua Tryout Resmi (110 Soal)",
    shortLabel: "Semua Resmi",
    description: "Peringkat nasional terbaik peserta dari seluruh paket Tryout CAT 110 soal.",
  },
  {
    id: "paket-resmi-1",
    label: "Paket Tryout Resmi 01",
    shortLabel: "Paket 01",
    description: "Perbandingan skor setara pada paket soal standar resmi pertama.",
  },
  {
    id: "paket-resmi-2",
    label: "Paket Tryout Resmi 02",
    shortLabel: "Paket 02",
    description: "Perbandingan skor setara pada paket soal standar resmi kedua.",
  },
  {
    id: "paket-resmi-3",
    label: "Paket Tryout Resmi 03",
    shortLabel: "Paket 03",
    description: "Perbandingan skor setara pada paket soal standar resmi ketiga.",
  },
  {
    id: "mini-cat-cepat",
    label: "Mini Tryout CAT (35 Soal)",
    shortLabel: "Mini 35",
    description: "Peringkat nasional simulasi cepat 35 soal dalam 30 menit.",
  },
];

export function isLeaderboardScope(value: unknown): value is LeaderboardScope {
  return (
    typeof value === "string" &&
    (LEADERBOARD_SCOPES as readonly string[]).includes(value)
  );
}

export function resolveLeaderboardScopeForPreset(
  presetId: string,
  mode: "official" | "mini",
): LeaderboardScope {
  if (isLeaderboardScope(presetId)) {
    return presetId;
  }
  return mode === "mini" ? "mini-cat-cepat" : "all-official";
}

export type LeaderboardEntry = {
  rank: number;
  displayName: string;
  presetId: string;
  packageLabel: string;
  twkScore: number;
  tiuScore: number;
  tkpScore: number;
  totalScore: number;
  maxScore: number;
  passed: boolean;
  durationUsedSec: number;
  completedAt: string;
  isCurrentUser: boolean;
};

export type LeaderboardResponse = {
  scope: LeaderboardScope;
  totalParticipants: number;
  passedParticipants: number;
  averageScore: number;
  entries: LeaderboardEntry[];
  currentUserEntry: LeaderboardEntry | null;
  currentUserTopPercent: number | null;
  schemaMissing: boolean;
};

export type TryoutAttemptRankSummary = {
  scope: LeaderboardScope;
  rank: number;
  totalParticipants: number;
  topPercent: number;
  averageScore: number;
};

/**
 * Menyamarkan nama peserta demi privasi di papan peringkat nasional.
 * Contoh: "Budi Santoso" -> "Budi S.", "ahmad@gmail.com" -> "Ahma***".
 */
export function maskParticipantName(
  fullName?: string | null,
  email?: string | null,
): string {
  const clean = (fullName ?? "").trim();
  if (clean) {
    const parts = clean.split(/\s+/).filter(Boolean);
    if (parts.length >= 2) {
      return `${parts[0]} ${parts[1][0].toUpperCase()}.`;
    }
    if (clean.length <= 3) {
      return `${clean}***`;
    }
    return `${clean.slice(0, 4)}***`;
  }

  const localPart = (email ?? "").trim().split("@")[0] ?? "";
  if (localPart) {
    const prefix = localPart.slice(0, Math.min(4, localPart.length));
    return `${prefix[0].toUpperCase()}${prefix.slice(1).toLowerCase()}***`;
  }

  return "Peserta CPNS";
}

/**
 * Menghitung posisi "Top X%" (1..100). Semakin kecil angka Top %, semakin tinggi peringkatnya.
 */
export function computeTopPercent(
  rank: number,
  totalParticipants: number,
): number {
  if (!Number.isFinite(rank) || !Number.isFinite(totalParticipants) || totalParticipants <= 0) {
    return 100;
  }
  const safeRank = Math.max(1, Math.min(rank, totalParticipants));
  return Math.max(1, Math.min(100, Math.ceil((safeRank / totalParticipants) * 100)));
}

/**
 * Urutan tie-break resmi BKN SKD CPNS:
 * 1. Lulus PG seluruh subtes
 * 2. Total skor tertinggi
 * 3. Skor TKP tertinggi
 * 4. Skor TIU tertinggi
 * 5. Skor TWK tertinggi
 * 6. Durasi pengerjaan tercepat
 * 7. Waktu selesai lebih awal
 */
export function compareLeaderboardAttempts(
  a: {
    passed: boolean;
    totalScore: number;
    tkpScore: number;
    tiuScore: number;
    twkScore: number;
    durationUsedSec: number;
    completedAt: string;
  },
  b: {
    passed: boolean;
    totalScore: number;
    tkpScore: number;
    tiuScore: number;
    twkScore: number;
    durationUsedSec: number;
    completedAt: string;
  },
): number {
  if (a.passed !== b.passed) return a.passed ? -1 : 1;
  if (a.totalScore !== b.totalScore) return b.totalScore - a.totalScore;
  if (a.tkpScore !== b.tkpScore) return b.tkpScore - a.tkpScore;
  if (a.tiuScore !== b.tiuScore) return b.tiuScore - a.tiuScore;
  if (a.twkScore !== b.twkScore) return b.twkScore - a.twkScore;
  if (a.durationUsedSec !== b.durationUsedSec) {
    return a.durationUsedSec - b.durationUsedSec;
  }
  return a.completedAt.localeCompare(b.completedAt);
}

/**
 * Menggabungkan riwayat Tryout lokal dan cloud tanpa duplikasi `id`,
 * terurut dari yang paling baru selesai.
 */
export function mergeTryoutHistoryRecords(
  localRecords: readonly TryoutHistoryRecord[],
  cloudRecords: readonly TryoutHistoryRecord[],
  maxItems: number = 30,
): TryoutHistoryRecord[] {
  const byId = new Map<string, TryoutHistoryRecord>();

  // Cloud menjadi sumber kebenaran utama jika ID sama
  for (const record of localRecords) {
    byId.set(record.id, record);
  }
  for (const record of cloudRecords) {
    byId.set(record.id, record);
  }

  return Array.from(byId.values())
    .sort((a, b) => {
      const timeA = Date.parse(a.completedAt) || 0;
      const timeB = Date.parse(b.completedAt) || 0;
      return timeB - timeA;
    })
    .slice(0, maxItems);
}

/**
 * Mencari riwayat lokal yang belum tercatat di cloud untuk diunggah satu kali.
 */
export function findUnsyncedLocalAttempts(
  localRecords: readonly TryoutHistoryRecord[],
  cloudRecords: readonly TryoutHistoryRecord[],
): TryoutHistoryRecord[] {
  const cloudIds = new Set(cloudRecords.map((r) => r.id));
  return localRecords.filter((r) => !cloudIds.has(r.id));
}

