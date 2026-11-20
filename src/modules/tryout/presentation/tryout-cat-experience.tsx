"use client";

import { useCallback, useEffect, useMemo, useRef, useState, type ReactNode } from "react";

import type { OptionKey } from "@/modules/question-bank/domain/question";
import { createRandomSeed } from "@/modules/question-bank/domain/question-shuffle";
import {
  evaluateTryoutAttempt,
  generateTryoutQuestions,
  TRYOUT_MODE_CONFIGS,
  type TryoutPreset,
} from "@/modules/tryout/domain/tryout-engine";
import {
  appendTryoutHistory,
  buildTryoutHistoryRecord,
  clearActiveTryoutSession,
  deleteTryoutHistoryItem,
  readActiveTryoutSession,
  readTryoutHistory,
  writeActiveTryoutSession,
  type ActiveTryoutSession,
  type TryoutHistoryRecord,
} from "@/modules/tryout/infrastructure/tryout-storage";
import { useToastStore } from "@/shared/stores/toast-store";
import { TryoutExamRunner } from "./tryout-exam-runner";
import { TryoutLobby } from "./tryout-lobby";
import { TryoutResultReview } from "./tryout-result-review";

type TryoutScreen = "lobby" | "exam" | "result";

type TryoutCatExperienceProps = {
  siteHeader?: ReactNode;
  siteFooter?: ReactNode;
};

function computeRemainingSeconds(endsAtMs: number, nowMs: number = Date.now()): number {
  return Math.max(0, Math.ceil((endsAtMs - nowMs) / 1000));
}

export function TryoutCatExperience({
  siteHeader,
  siteFooter,
}: TryoutCatExperienceProps) {
  const addToast = useToastStore((state) => state.addToast);

  const [screen, setScreen] = useState<TryoutScreen>("lobby");
  const [activeSession, setActiveSession] = useState<ActiveTryoutSession | null>(null);
  const [remainingSec, setRemainingSec] = useState<number>(0);
  const [history, setHistory] = useState<TryoutHistoryRecord[]>([]);
  const [viewingRecord, setViewingRecord] = useState<TryoutHistoryRecord | null>(null);

  const autoSubmittedRef = useRef<string | null>(null);

  const finalizeSession = useCallback(
    (session: ActiveTryoutSession, reason: "manual" | "timeout") => {
      if (autoSubmittedRef.current === session.id) return;
      autoSubmittedRef.current = session.id;

      const items = generateTryoutQuestions(session.mode, session.seed);
      const elapsedSec = Math.min(
        session.durationLimitSec,
        Math.max(1, Math.round((Date.now() - session.startedAtMs) / 1000)),
      );
      const evaluation = evaluateTryoutAttempt(items, session.mode, session.answers, elapsedSec);
      const record = buildTryoutHistoryRecord(session, evaluation);

      const updatedHistory = appendTryoutHistory(record);
      clearActiveTryoutSession();

      setHistory(updatedHistory);
      setActiveSession(null);
      setRemainingSec(0);
      setViewingRecord(record);
      setScreen("result");

      if (reason === "timeout") {
        addToast(
          "Waktu tryout CAT telah berakhir. Jawaban Anda otomatis dikumpulkan dan dinilai.",
          "info",
        );
      } else {
        addToast("Jawaban tryout berhasil dikumpulkan. Rapor skor SKD siap ditinjau.", "success");
      }
    },
    [addToast],
  );

  // Hydrate sesi aktif & riwayat dari localStorage saat mount
  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      const savedHistory = readTryoutHistory();
      setHistory(savedHistory);

      const savedActive = readActiveTryoutSession();
      if (!savedActive) return;

      const rem = computeRemainingSeconds(savedActive.endsAtMs);
      if (rem <= 0) {
        finalizeSession(savedActive, "timeout");
      } else {
        setActiveSession(savedActive);
        setRemainingSec(rem);
      }
    });

    return () => window.cancelAnimationFrame(frame);
  }, [finalizeSession]);

  // Countdown timer real-time selama sesi aktif ada
  useEffect(() => {
    if (!activeSession) return;

    const tick = () => {
      const rem = computeRemainingSeconds(activeSession.endsAtMs);
      setRemainingSec(rem);
      if (rem <= 0) {
        finalizeSession(activeSession, "timeout");
      }
    };

    const intervalId = window.setInterval(tick, 1000);
    return () => window.clearInterval(intervalId);
  }, [activeSession, finalizeSession]);

  const activeItems = useMemo(() => {
    if (!activeSession) return [];
    return generateTryoutQuestions(activeSession.mode, activeSession.seed);
  }, [activeSession]);

  const resultViewData = useMemo(() => {
    if (!viewingRecord) return null;
    const items = generateTryoutQuestions(viewingRecord.mode, viewingRecord.seed);
    const evaluation = evaluateTryoutAttempt(
      items,
      viewingRecord.mode,
      viewingRecord.answers,
      viewingRecord.durationUsedSec,
    );
    return { items, evaluation };
  }, [viewingRecord]);

  const startPreset = useCallback(
    (preset: TryoutPreset) => {
      const cfg = TRYOUT_MODE_CONFIGS[preset.mode];
      const now = Date.now();
      const seed = preset.fixedSeed ?? createRandomSeed();
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
      writeActiveTryoutSession(newSession);
      setActiveSession(newSession);
      setRemainingSec(cfg.durationSec);
      setViewingRecord(null);
      setScreen("exam");
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
    [],
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
    setActiveSession(null);
    setRemainingSec(0);
    addToast("Sesi tryout yang sedang berjalan dibatalkan.", "info");
  }, [addToast]);

  const handleDeleteHistory = useCallback(
    (recordId: string) => {
      const next = deleteTryoutHistoryItem(recordId);
      setHistory(next);
      if (viewingRecord?.id === recordId) {
        setViewingRecord(null);
        setScreen("lobby");
      }
      addToast("Riwayat tryout berhasil dihapus.", "info");
    },
    [viewingRecord, addToast],
  );

  const handleRetakeFresh = useCallback(() => {
    const mode = viewingRecord?.mode ?? "official";
    const cfg = TRYOUT_MODE_CONFIGS[mode];
    startPreset({
      id: mode === "mini" ? "mini-cat-cepat" : "paket-acak-resmi",
      mode,
      title: mode === "mini" ? "Mini Tryout CAT Cepat (35 Soal)" : "Paket Acak Dinamis (110 Soal)",
      subtitle: cfg.description,
      badge: mode === "mini" ? "Uji Cepat" : "Acak Baru",
    });
  }, [viewingRecord, startPreset]);

  if (screen === "exam" && activeSession && activeItems.length > 0) {
    return (
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
        onSubmitExam={() => finalizeSession(activeSession, "manual")}
        onPauseToLobby={() => setScreen("lobby")}
      />
    );
  }

  return (
    <div className="flex min-h-screen flex-col bg-[linear-gradient(180deg,#f8fbff_0%,#ffffff_30%,#f8fafc_100%)]">
      {siteHeader}
      <div className="flex-1">
        {screen === "result" && viewingRecord && resultViewData ? (
          <TryoutResultReview
            packageLabel={viewingRecord.packageLabel}
            items={resultViewData.items}
            answers={viewingRecord.answers}
            flagged={viewingRecord.flagged}
            evaluation={resultViewData.evaluation}
            onBackToLobby={() => setScreen("lobby")}
            onRetakeFresh={handleRetakeFresh}
          />
        ) : (
          <TryoutLobby
            activeSession={activeSession}
            activeRemainingSec={remainingSec}
            history={history}
            onStartPreset={startPreset}
            onResumeActive={() => setScreen("exam")}
            onDiscardActive={handleDiscardActive}
            onOpenHistory={(record) => {
              setViewingRecord(record);
              setScreen("result");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            onDeleteHistory={handleDeleteHistory}
          />
        )}
      </div>
      {siteFooter}
    </div>
  );
}

