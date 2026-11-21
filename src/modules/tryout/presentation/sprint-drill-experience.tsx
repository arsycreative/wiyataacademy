"use client";

import { useCallback, useEffect, useRef, useState, type ReactNode } from "react";

import type { OptionKey, PracticePatternId } from "@/modules/question-bank/domain/question";
import {
  isTiuPattern,
  isTkpPattern,
  isTwkPattern,
} from "@/modules/question-bank/domain/shuffle-core";
import {
  isSprintDuration,
  isSprintSubtestScope,
  type SprintDurationMinutes,
  type SprintEvaluation,
  type SprintStartRequest,
  type SprintStartResponse,
  type SprintSubmitResponse,
  type SprintSubtestScope,
} from "@/modules/tryout/domain/sprint-config";
import type {
  TryoutExamQuestion,
  TryoutQuestionItem,
} from "@/modules/tryout/domain/tryout-config";
import {
  appendSprintHistory,
  clearSprintHistory,
  readSprintHistory,
  type SprintHistoryRecord,
} from "@/modules/tryout/infrastructure/sprint-storage";
import { useToastStore } from "@/shared/stores/toast-store";
import { SprintLobby } from "./sprint-lobby";
import { SprintResultReview } from "./sprint-result-review";
import { SprintRunner } from "./sprint-runner";

type SprintPhase = "lobby" | "running" | "result";

type ActiveSprintState = {
  seed: number;
  config: SprintStartRequest & { questionCount: number };
  packageLabel: string;
  durationLimitSec: number;
  remainingSec: number;
  targetSecondsPerQuestion: number;
  items: readonly TryoutExamQuestion[];
  answers: Record<string, OptionKey>;
  flagged: Record<string, boolean>;
  questionTimesSec: Record<string, number>;
  currentIndex: number;
};

type CompletedSprintState = {
  config: SprintStartRequest;
  evaluation: SprintEvaluation;
  items: readonly TryoutQuestionItem[];
  answers: Record<string, OptionKey>;
};

export function SprintDrillExperience({
  initialSubtestQuery,
  initialPatternQuery,
  initialDurationQuery,
  siteHeader,
  siteFooter,
}: {
  initialSubtestQuery?: string;
  initialPatternQuery?: string;
  initialDurationQuery?: number;
  siteHeader?: ReactNode;
  siteFooter?: ReactNode;
}) {
  const addToast = useToastStore((s) => s.addToast);

  const resolvedPattern: PracticePatternId | null =
    initialPatternQuery &&
    (isTwkPattern(initialPatternQuery) ||
      isTiuPattern(initialPatternQuery) ||
      isTkpPattern(initialPatternQuery))
      ? (initialPatternQuery as PracticePatternId)
      : null;

  const resolvedSubtest: SprintSubtestScope = resolvedPattern
    ? isTwkPattern(resolvedPattern)
      ? "TWK"
      : isTkpPattern(resolvedPattern)
        ? "TKP"
        : "TIU"
    : isSprintSubtestScope(initialSubtestQuery)
      ? initialSubtestQuery
      : "TIU";

  const resolvedDuration: SprintDurationMinutes = isSprintDuration(initialDurationQuery)
    ? initialDurationQuery
    : 10;

  const [phase, setPhase] = useState<SprintPhase>("lobby");
  const [isStarting, setIsStarting] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [activeSprint, setActiveSprint] = useState<ActiveSprintState | null>(null);
  const [completedSprint, setCompletedSprint] = useState<CompletedSprintState | null>(null);
  const [history, setHistory] = useState<SprintHistoryRecord[]>(() => readSprintHistory());
  const autoSubmittedSeedRef = useRef<number | null>(null);

  const handleStartSprint = useCallback(
    async (req: SprintStartRequest) => {
      setIsStarting(true);
      try {
        const res = await fetch("/api/sprint/start", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(req),
        });
        if (!res.ok) {
          throw new Error("Gagal menyiapkan soal sprint.");
        }
        const payload = (await res.json()) as SprintStartResponse;
        setActiveSprint({
          seed: payload.seed,
          config: payload.config,
          packageLabel: payload.packageLabel,
          durationLimitSec: payload.durationSec,
          remainingSec: payload.durationSec,
          targetSecondsPerQuestion: payload.targetSecondsPerQuestion,
          items: payload.items,
          answers: {},
          flagged: {},
          questionTimesSec: {},
          currentIndex: 0,
        });
        setPhase("running");
      } catch (err) {
        addToast(
          err instanceof Error ? err.message : "Gagal memulai Sprint Drill.",
          "error",
        );
      } finally {
        setIsStarting(false);
      }
    },
    [addToast],
  );

  const finalizeSprint = useCallback(
    async (snapshot: ActiveSprintState) => {
      if (isSubmitting) return;
      setIsSubmitting(true);
      try {
        const durationUsedSec = Math.max(
          0,
          snapshot.durationLimitSec - snapshot.remainingSec,
        );
        const res = await fetch("/api/sprint/submit", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            ...snapshot.config,
            seed: snapshot.seed,
            answers: snapshot.answers,
            durationUsedSec,
            questionTimesSec: snapshot.questionTimesSec,
          }),
        });
        if (!res.ok) {
          throw new Error("Gagal menilai jawaban Sprint.");
        }
        const payload = (await res.json()) as SprintSubmitResponse;
        const record: SprintHistoryRecord = {
          id: `sprint-${snapshot.seed}-${Date.now()}`,
          completedAt: new Date().toISOString(),
          packageLabel: payload.evaluation.packageLabel,
          subtest: payload.evaluation.subtest,
          patternId: payload.evaluation.patternId ?? null,
          difficultyFilter: payload.evaluation.difficultyFilter,
          durationMinutes: snapshot.config.durationMinutes,
          totalQuestions: payload.evaluation.totalQuestions,
          answeredCount: payload.evaluation.answeredCount,
          correctCount: payload.evaluation.correctCount,
          totalScore: payload.evaluation.totalScore,
          maxScore: payload.evaluation.maxScore,
          accuracyPct: payload.evaluation.accuracyPct,
          durationUsedSec: payload.evaluation.durationUsedSec,
          avgSecondsPerAnswered: payload.evaluation.avgSecondsPerAnswered,
          targetSecondsPerQuestion: payload.evaluation.targetSecondsPerQuestion,
          paceStatus: payload.evaluation.paceStatus,
        };
        setHistory(appendSprintHistory(record));
        setCompletedSprint({
          config: snapshot.config,
          evaluation: payload.evaluation,
          items: payload.items,
          answers: snapshot.answers,
        });
        setActiveSprint(null);
        setPhase("result");
      } catch (err) {
        addToast(
          err instanceof Error ? err.message : "Gagal mengumpulkan Sprint Drill.",
          "error",
        );
      } finally {
        setIsSubmitting(false);
      }
    },
    [addToast, isSubmitting],
  );

  const finalizeRef = useRef(finalizeSprint);
  useEffect(() => {
    finalizeRef.current = finalizeSprint;
  }, [finalizeSprint]);

  const isSprintRunning = phase === "running" && activeSprint !== null;

  // 1-second global countdown + active-question stopwatch
  useEffect(() => {
    if (!isSprintRunning) return;

    const timer = window.setInterval(() => {
      setActiveSprint((prev) => {
        if (!prev) return null;
        const nextRemaining = Math.max(0, prev.remainingSec - 1);
        const activeQ = prev.items[prev.currentIndex]?.question;
        const nextTimes = activeQ
          ? {
              ...prev.questionTimesSec,
              [activeQ.id]: (prev.questionTimesSec[activeQ.id] ?? 0) + 1,
            }
          : prev.questionTimesSec;

        const nextSnapshot: ActiveSprintState = {
          ...prev,
          remainingSec: nextRemaining,
          questionTimesSec: nextTimes,
        };

        if (nextRemaining === 0 && autoSubmittedSeedRef.current !== prev.seed) {
          autoSubmittedSeedRef.current = prev.seed;
          window.setTimeout(() => {
            addToast("Waktu Sprint habis! Jawabanmu otomatis dinilai.", "info");
            void finalizeRef.current(nextSnapshot);
          }, 0);
        }

        return nextSnapshot;
      });
    }, 1000);

    return () => window.clearInterval(timer);
  }, [isSprintRunning, addToast]);

  const handleSelectAnswer = (questionId: string, key: OptionKey) => {
    setActiveSprint((prev) =>
      prev
        ? {
            ...prev,
            answers: { ...prev.answers, [questionId]: key },
          }
        : null,
    );
  };

  const handleClearAnswer = (questionId: string) => {
    setActiveSprint((prev) => {
      if (!prev) return null;
      const next = { ...prev.answers };
      delete next[questionId];
      return { ...prev, answers: next };
    });
  };

  const handleToggleFlag = (questionId: string) => {
    setActiveSprint((prev) =>
      prev
        ? {
            ...prev,
            flagged: { ...prev.flagged, [questionId]: !prev.flagged[questionId] },
          }
        : null,
    );
  };

  const handleJumpToIndex = (index: number) => {
    setActiveSprint((prev) =>
      prev
        ? {
            ...prev,
            currentIndex: Math.max(0, Math.min(prev.items.length - 1, index)),
          }
        : null,
    );
  };

  const handleClearHistory = () => {
    clearSprintHistory();
    setHistory([]);
    addToast("Riwayat Sprint telah dibersihkan.", "info");
  };

  if (phase === "running" && activeSprint) {
    return (
      <SprintRunner
        packageLabel={activeSprint.packageLabel}
        items={activeSprint.items}
        answers={activeSprint.answers}
        flagged={activeSprint.flagged}
        questionTimesSec={activeSprint.questionTimesSec}
        currentIndex={activeSprint.currentIndex}
        remainingSec={activeSprint.remainingSec}
        targetSecondsPerQuestion={activeSprint.targetSecondsPerQuestion}
        isSubmitting={isSubmitting}
        onSelectAnswer={handleSelectAnswer}
        onClearAnswer={handleClearAnswer}
        onToggleFlag={handleToggleFlag}
        onJumpToIndex={handleJumpToIndex}
        onSubmitSprint={() => {
          void finalizeSprint(activeSprint);
        }}
        onCancelSprint={() => {
          setActiveSprint(null);
          setPhase("lobby");
        }}
      />
    );
  }

  return (
    <div className="min-h-screen bg-[#f5f8fc]">
      {siteHeader}
      <main>
        {phase === "result" && completedSprint ? (
          <SprintResultReview
            items={completedSprint.items}
            answers={completedSprint.answers}
            evaluation={completedSprint.evaluation}
            onBackToLobby={() => setPhase("lobby")}
            onRetakeSameConfig={() => {
              void handleStartSprint(completedSprint.config);
            }}
          />
        ) : (
          <SprintLobby
            initialSubtest={resolvedSubtest}
            initialPatternId={resolvedPattern}
            initialDuration={resolvedDuration}
            isStarting={isStarting}
            history={history}
            onStartSprint={handleStartSprint}
            onClearHistory={handleClearHistory}
          />
        )}
      </main>
      {siteFooter}
    </div>
  );
}
