"use client";

import { useCallback, useEffect, useRef, useState, type ReactNode } from "react";
import { Loader2 } from "lucide-react";

import type { OptionKey } from "@/modules/question-bank/domain/question";
import { createRandomSeed } from "@/modules/question-bank/domain/shuffle-core";
import {
  findUnsyncedLocalAttempts,
  mergeTryoutHistoryRecords,
  type LeaderboardResponse,
  type TryoutAttemptRankSummary,
} from "@/modules/tryout/domain/leaderboard";
import {
  TRYOUT_MODE_CONFIGS,
  type TryoutEvaluation,
  type TryoutExamQuestion,
  type TryoutMode,
  type TryoutPreset,
  type TryoutQuestionItem,
} from "@/modules/tryout/domain/tryout-config";
import {
  appendTryoutHistory,
  buildTryoutHistoryRecord,
  clearActiveTryoutSession,
  deleteTryoutHistoryItem,
  readActiveTryoutSession,
  readTryoutHistory,
  writeActiveTryoutSession,
  writeTryoutHistory,
  type ActiveTryoutSession,
  type TryoutHistoryRecord,
} from "@/modules/tryout/infrastructure/tryout-storage";
import { useToastStore } from "@/shared/stores/toast-store";
import { TryoutExamRunner } from "./tryout-exam-runner";
import { TryoutLobby, type TryoutCloudSyncStatus } from "./tryout-lobby";
import { TryoutResultReview } from "./tryout-result-review";

type TryoutScreen = "lobby" | "exam" | "result";

type TryoutCatExperienceProps = {
  hasOfficialAccess?: boolean;
  isAuthenticated?: boolean;
  initialCloudHistory?: readonly TryoutHistoryRecord[];
  initialCloudSchemaMissing?: boolean;
  initialLeaderboard?: LeaderboardResponse | null;
  siteHeader?: ReactNode;
  siteFooter?: ReactNode;
};

type LoadedResultView = {
  record: TryoutHistoryRecord;
  items: TryoutQuestionItem[];
  evaluation: TryoutEvaluation;
  rankSummary: TryoutAttemptRankSummary | null;
  cloudSynced: boolean;
};

function computeRemainingSeconds(endsAtMs: number, nowMs: number = Date.now()): number {
  return Math.max(0, Math.ceil((endsAtMs - nowMs) / 1000));
}

async function fetchExamQuestionsFromServer(
  mode: TryoutMode,
  seed: number,
): Promise<TryoutExamQuestion[]> {
  const response = await fetch("/api/tryout/start", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ mode, seed }),
  });
  if (!response.ok) {
    throw new Error("Gagal memuat paket soal CAT dari server.");
  }
  const payload = (await response.json()) as { items?: TryoutExamQuestion[] };
  if (!Array.isArray(payload.items) || payload.items.length === 0) {
    throw new Error("Paket soal CAT dari server kosong.");
  }
  return payload.items;
}

async function submitAndGradeOnServer(params: {
  mode: TryoutMode;
  seed: number;
  answers: Readonly<Record<string, OptionKey>>;
  flagged?: Readonly<Record<string, boolean>>;
  durationUsedSec: number;
  durationLimitSec?: number;
  attemptId?: string;
  presetId?: string;
  packageLabel?: string;
  saveToCloud?: boolean;
}): Promise<{
  evaluation: TryoutEvaluation;
  items: TryoutQuestionItem[];
  cloudSynced: boolean;
  rankSummary: TryoutAttemptRankSummary | null;
}> {
  const response = await fetch("/api/tryout/submit", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(params),
  });
  if (!response.ok) {
    throw new Error("Gagal menilai jawaban tryout di server.");
  }
  const payload = (await response.json()) as {
    evaluation?: TryoutEvaluation;
    items?: TryoutQuestionItem[];
    cloudSynced?: boolean;
    rankSummary?: TryoutAttemptRankSummary | null;
  };
  if (!payload.evaluation || !Array.isArray(payload.items)) {
    throw new Error("Respons penilaian tryout tidak lengkap.");
  }
  return {
    evaluation: payload.evaluation,
    items: payload.items,
    cloudSynced: Boolean(payload.cloudSynced),
    rankSummary: payload.rankSummary ?? null,
  };
}

export function TryoutCatExperience({
  hasOfficialAccess = true,
  isAuthenticated = false,
  initialCloudHistory = [],
  initialCloudSchemaMissing = false,
  initialLeaderboard = null,
  siteHeader,
  siteFooter,
}: TryoutCatExperienceProps) {
  const addToast = useToastStore((state) => state.addToast);

  const [screen, setScreen] = useState<TryoutScreen>("lobby");
  const [activeSession, setActiveSession] = useState<ActiveTryoutSession | null>(null);
  const [activeItems, setActiveItems] = useState<TryoutExamQuestion[]>([]);
  const [remainingSec, setRemainingSec] = useState<number>(0);
  const [history, setHistory] = useState<TryoutHistoryRecord[]>(() => [
    ...initialCloudHistory,
  ]);
  const [loadedResult, setLoadedResult] = useState<LoadedResultView | null>(null);
  const [loadingMessage, setLoadingMessage] = useState<string | null>(null);
  const [cloudSyncStatus, setCloudSyncStatus] = useState<TryoutCloudSyncStatus>(() => {
    if (!isAuthenticated) return "local-only";
    if (initialCloudSchemaMissing) return "schema-missing";
    return "synced";
  });
  const [leaderboardRefreshSignal, setLeaderboardRefreshSignal] = useState<number>(0);

  const autoSubmittedRef = useRef<string | null>(null);
  const loadedExamKeyRef = useRef<string | null>(null);
  const hasSyncedLocalToCloudRef = useRef<boolean>(false);

  const finalizeSession = useCallback(
    async (session: ActiveTryoutSession, reason: "manual" | "timeout") => {
      if (autoSubmittedRef.current === session.id) return;
      autoSubmittedRef.current = session.id;
      setLoadingMessage("Menilai jawaban tryout CAT di server...");

      try {
        const elapsedSec = Math.min(
          session.durationLimitSec,
          Math.max(1, Math.round((Date.now() - session.startedAtMs) / 1000)),
        );
        const { evaluation, items, cloudSynced, rankSummary } =
          await submitAndGradeOnServer({
            mode: session.mode,
            seed: session.seed,
            answers: session.answers,
            flagged: session.flagged,
            durationUsedSec: elapsedSec,
            durationLimitSec: session.durationLimitSec,
            attemptId: session.id,
            presetId: session.presetId,
            packageLabel: session.packageLabel,
            saveToCloud: true,
          });

        const record = buildTryoutHistoryRecord(session, evaluation);
        const updatedHistory = appendTryoutHistory(record);
        clearActiveTryoutSession();
        loadedExamKeyRef.current = null;

        setHistory((prev) => mergeTryoutHistoryRecords(updatedHistory, prev));
        setActiveSession(null);
        setActiveItems([]);
        setRemainingSec(0);
        setLoadedResult({
          record,
          items,
          evaluation,
          rankSummary,
          cloudSynced,
        });
        if (cloudSynced) {
          setCloudSyncStatus("synced");
          setLeaderboardRefreshSignal((n) => n + 1);
        }
        setScreen("result");

        if (reason === "timeout") {
          addToast(
            "Waktu tryout CAT telah berakhir. Jawaban Anda otomatis dikumpulkan dan dinilai.",
            "info",
          );
        } else if (cloudSynced) {
          addToast(
            "Jawaban dinilai & tersimpan ke Cloud. Ranking Nasional telah diperbarui.",
            "success",
          );
        } else {
          addToast(
            "Jawaban tryout berhasil dinilai. Rapor skor SKD siap ditinjau.",
            "success",
          );
        }
      } catch {
        autoSubmittedRef.current = null;
        addToast(
          "Gagal menghubungi server penilaian. Periksa koneksi Anda lalu coba kumpulkan ulang.",
          "error",
        );
      } finally {
        setLoadingMessage(null);
      }
    },
    [addToast],
  );

  // Hydrate sesi aktif & sinkronkan riwayat lokal <-> cloud saat mount
  useEffect(() => {
    let cancelled = false;
    const frame = window.requestAnimationFrame(() => {
      const localHistory = readTryoutHistory();
      const merged = mergeTryoutHistoryRecords(localHistory, initialCloudHistory);
      if (merged.length > 0) {
        writeTryoutHistory(merged);
      }
      setHistory(merged);

      // Unggah riwayat lokal yang belum ada di cloud (1 kali saja saat login)
      if (
        isAuthenticated &&
        !initialCloudSchemaMissing &&
        !hasSyncedLocalToCloudRef.current
      ) {
        const unsynced = findUnsyncedLocalAttempts(localHistory, initialCloudHistory);
        if (unsynced.length > 0) {
          hasSyncedLocalToCloudRef.current = true;
          setCloudSyncStatus("syncing");
          void fetch("/api/tryout/history", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ attempts: unsynced }),
          })
            .then(async (res) => {
              if (!res.ok) return null;
              return (await res.json()) as {
                records?: TryoutHistoryRecord[];
                schemaMissing?: boolean;
                syncedCount?: number;
              };
            })
            .then((payload) => {
              if (cancelled || !payload) return;
              if (payload.schemaMissing) {
                setCloudSyncStatus("schema-missing");
                return;
              }
              setCloudSyncStatus("synced");
              if (Array.isArray(payload.records) && payload.records.length > 0) {
                const reMerged = mergeTryoutHistoryRecords(localHistory, payload.records);
                writeTryoutHistory(reMerged);
                setHistory(reMerged);
              }
              if ((payload.syncedCount ?? 0) > 0) {
                setLeaderboardRefreshSignal((n) => n + 1);
              }
            })
            .catch(() => {
              if (!cancelled) setCloudSyncStatus("synced");
            });
        }
      }

      const savedActive = readActiveTryoutSession();
      if (!savedActive) return;

      const rem = computeRemainingSeconds(savedActive.endsAtMs);
      if (rem <= 0) {
        void finalizeSession(savedActive, "timeout");
      } else {
        setActiveSession(savedActive);
        setRemainingSec(rem);
      }
    });

    return () => {
      cancelled = true;
      window.cancelAnimationFrame(frame);
    };
  }, [finalizeSession, initialCloudHistory, initialCloudSchemaMissing, isAuthenticated]);

  // Countdown timer real-time selama sesi aktif ada
  useEffect(() => {
    if (!activeSession) return;

    const tick = () => {
      const rem = computeRemainingSeconds(activeSession.endsAtMs);
      setRemainingSec(rem);
      if (rem <= 0) {
        void finalizeSession(activeSession, "timeout");
      }
    };

    const intervalId = window.setInterval(tick, 1000);
    return () => window.clearInterval(intervalId);
  }, [activeSession, finalizeSession]);

  const startPreset = useCallback(
    async (preset: TryoutPreset) => {
      const cfg = TRYOUT_MODE_CONFIGS[preset.mode];
      const seed = preset.fixedSeed ?? createRandomSeed();
      setLoadingMessage(`Menyiapkan ${cfg.totalQuestions} soal CAT dari server...`);

      try {
        const examItems = await fetchExamQuestionsFromServer(preset.mode, seed);
        const now = Date.now();
        const newSession: ActiveTryoutSession = {
          id: `tryout-${now}-${Math.floor(Math.random() * 10000)}`,
          mode: preset.mode,
          presetId: preset.id,
          packageLabel: preset.title,
          seed,
          startedAtMs: now,
          endsAtMs: now + cfg.durationSec * 1000,
          durationLimitSec: cfg.durationSec,
          answers: {},
          flagged: {},
          currentIndex: 0,
        };

        autoSubmittedRef.current = null;
        loadedExamKeyRef.current = `${newSession.mode}:${newSession.seed}`;
        writeActiveTryoutSession(newSession);
        setActiveSession(newSession);
        setActiveItems(examItems);
        setRemainingSec(cfg.durationSec);
        setLoadedResult(null);
        setScreen("exam");
        window.scrollTo({ top: 0, behavior: "smooth" });
      } catch {
        addToast("Gagal memuat soal tryout CAT. Silakan coba lagi.", "error");
      } finally {
        setLoadingMessage(null);
      }
    },
    [addToast],
  );

  const handleResumeActive = useCallback(async () => {
    if (!activeSession) return;
    const key = `${activeSession.mode}:${activeSession.seed}`;
    if (loadedExamKeyRef.current === key && activeItems.length > 0) {
      setScreen("exam");
      return;
    }

    setLoadingMessage("Memulihkan paket soal CAT aktif dari server...");
    try {
      const examItems = await fetchExamQuestionsFromServer(
        activeSession.mode,
        activeSession.seed,
      );
      loadedExamKeyRef.current = key;
      setActiveItems(examItems);
      setScreen("exam");
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch {
      addToast("Gagal memulihkan soal tryout aktif. Silakan coba lagi.", "error");
    } finally {
      setLoadingMessage(null);
    }
  }, [activeSession, activeItems.length, addToast]);

  const handleOpenHistory = useCallback(
    async (record: TryoutHistoryRecord) => {
      setLoadingMessage("Memuat rapor & pembahasan lengkap dari server...");
      try {
        const { evaluation, items, rankSummary } = await submitAndGradeOnServer({
          mode: record.mode,
          seed: record.seed,
          answers: record.answers,
          durationUsedSec: record.durationUsedSec,
          presetId: record.presetId,
          packageLabel: record.packageLabel,
          saveToCloud: false,
        });
        setLoadedResult({
          record,
          items,
          evaluation,
          rankSummary,
          cloudSynced: isAuthenticated && !initialCloudSchemaMissing,
        });
        setScreen("result");
        window.scrollTo({ top: 0, behavior: "smooth" });
      } catch {
        addToast("Gagal membuka pembahasan riwayat tryout. Silakan coba lagi.", "error");
      } finally {
        setLoadingMessage(null);
      }
    },
    [addToast, initialCloudSchemaMissing, isAuthenticated],
  );

  const updateActiveSession = useCallback(
    (updater: (prev: ActiveTryoutSession) => ActiveTryoutSession) => {
      setActiveSession((prev) => {
        if (!prev) return prev;
        const next = updater(prev);
        writeActiveTryoutSession(next);
        return next;
      });
    },
    [],
  );

  const handleSelectAnswer = useCallback(
    (questionId: string, key: OptionKey) => {
      updateActiveSession((prev) => ({
        ...prev,
        answers: { ...prev.answers, [questionId]: key },
      }));
    },
    [updateActiveSession],
  );

  const handleClearAnswer = useCallback(
    (questionId: string) => {
      updateActiveSession((prev) => {
        const nextAnswers = { ...prev.answers };
        delete nextAnswers[questionId];
        return { ...prev, answers: nextAnswers };
      });
    },
    [updateActiveSession],
  );

  const handleToggleFlag = useCallback(
    (questionId: string) => {
      updateActiveSession((prev) => {
        const nextFlagged = { ...prev.flagged };
        if (nextFlagged[questionId]) {
          delete nextFlagged[questionId];
        } else {
          nextFlagged[questionId] = true;
        }
        return { ...prev, flagged: nextFlagged };
      });
    },
    [updateActiveSession],
  );

  const handleJumpToIndex = useCallback(
    (index: number) => {
      updateActiveSession((prev) => ({ ...prev, currentIndex: index }));
    },
    [updateActiveSession],
  );

  const handleDiscardActive = useCallback(() => {
    clearActiveTryoutSession();
    loadedExamKeyRef.current = null;
    setActiveSession(null);
    setActiveItems([]);
    setRemainingSec(0);
    addToast("Sesi tryout yang sedang berjalan dibatalkan.", "info");
  }, [addToast]);

  const handleDeleteHistory = useCallback(
    (recordId: string) => {
      const next = deleteTryoutHistoryItem(recordId);
      setHistory((prev) => {
        const filtered = prev.filter((item) => item.id !== recordId);
        return mergeTryoutHistoryRecords(next, filtered);
      });
      if (loadedResult?.record.id === recordId) {
        setLoadedResult(null);
        setScreen("lobby");
      }
      if (isAuthenticated && !initialCloudSchemaMissing) {
        void fetch(`/api/tryout/history?id=${encodeURIComponent(recordId)}`, {
          method: "DELETE",
        })
          .then(() => {
            setLeaderboardRefreshSignal((n) => n + 1);
          })
          .catch(() => {
            // Biarkan state lokal tetap terhapus
          });
      }
      addToast("Riwayat tryout berhasil dihapus.", "info");
    },
    [loadedResult, addToast, isAuthenticated, initialCloudSchemaMissing],
  );

  const handleRetakeFresh = useCallback(() => {
    const mode = loadedResult?.record.mode ?? "official";
    const cfg = TRYOUT_MODE_CONFIGS[mode];
    void startPreset({
      id: mode === "mini" ? "mini-cat-cepat" : "paket-acak-resmi",
      mode,
      title: mode === "mini" ? "Mini Tryout CAT Cepat (35 Soal)" : "Paket Acak Dinamis (110 Soal)",
      subtitle: cfg.description,
      badge: mode === "mini" ? "Uji Cepat" : "Acak Baru",
    });
  }, [loadedResult, startPreset]);

  const loadingOverlay = loadingMessage ? (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/45 p-4 backdrop-blur-xs"
      role="status"
      aria-live="polite"
    >
      <div className="flex items-center gap-3 rounded-2xl border border-blue-100 bg-white px-6 py-4 shadow-xl">
        <Loader2 className="size-5 animate-spin text-blue-600" aria-hidden />
        <p className="text-sm font-semibold text-slate-900">{loadingMessage}</p>
      </div>
    </div>
  ) : null;

  if (screen === "exam" && activeSession && activeItems.length > 0) {
    return (
      <>
        {loadingOverlay}
        <TryoutExamRunner
          packageLabel={activeSession.packageLabel}
          items={activeItems}
          answers={activeSession.answers}
          flagged={activeSession.flagged}
          currentIndex={activeSession.currentIndex}
          remainingSec={remainingSec}
          onSelectAnswer={handleSelectAnswer}
          onClearAnswer={handleClearAnswer}
          onToggleFlag={handleToggleFlag}
          onJumpToIndex={handleJumpToIndex}
          onSubmitExam={() => void finalizeSession(activeSession, "manual")}
          onPauseToLobby={() => setScreen("lobby")}
        />
      </>
    );
  }

  return (
    <div className="flex min-h-screen flex-col bg-[linear-gradient(180deg,#f8fbff_0%,#ffffff_30%,#f8fafc_100%)]">
      {loadingOverlay}
      {siteHeader}
      <div className="flex-1">
        {screen === "result" && loadedResult ? (
          <TryoutResultReview
            packageLabel={loadedResult.record.packageLabel}
            items={loadedResult.items}
            answers={loadedResult.record.answers}
            flagged={loadedResult.record.flagged}
            evaluation={loadedResult.evaluation}
            rankSummary={loadedResult.rankSummary}
            cloudSynced={loadedResult.cloudSynced}
            onBackToLobby={() => setScreen("lobby")}
            onRetakeFresh={handleRetakeFresh}
          />
        ) : (
          <TryoutLobby
            hasOfficialAccess={hasOfficialAccess}
            isAuthenticated={isAuthenticated}
            cloudSyncStatus={cloudSyncStatus}
            initialLeaderboard={initialLeaderboard}
            leaderboardRefreshSignal={leaderboardRefreshSignal}
            activeSession={activeSession}
            activeRemainingSec={remainingSec}
            history={history}
            onStartPreset={(preset) => void startPreset(preset)}
            onResumeActive={() => void handleResumeActive()}
            onDiscardActive={handleDiscardActive}
            onOpenHistory={(record) => void handleOpenHistory(record)}
            onDeleteHistory={handleDeleteHistory}
          />
        )}
      </div>
      {siteFooter}
    </div>
  );
}
