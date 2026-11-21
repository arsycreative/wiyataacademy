"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import {
  ArrowRight,
  Award,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Compass,
  PlayCircle,
  Sparkles,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  computeSkdLearningPath,
  type RoadmapStageId,
  type RoadmapStageStatus,
} from "@/modules/catalog/domain/skd-learning-path";
import type { AllProgressSummaries } from "@/modules/question-bank/domain/progress-summary-types";
import {
  fetchProgressSummaries,
  hasLocalProgressDiff,
  mergePracticeProgress,
  readLocalTiuProgress,
  type SanitizedPracticeProgress,
} from "@/modules/question-bank/infrastructure/tiu-progress-sync";
import {
  readTryoutHistory,
  type TryoutHistoryRecord,
} from "@/modules/tryout/infrastructure/tryout-storage";

type SkdLearningPathViewProps = {
  initialCloudProgress: SanitizedPracticeProgress | null;
  initialSummaries: AllProgressSummaries;
};

const STATUS_BADGE: Record<
  RoadmapStageStatus,
  { label: string; className: string }
> = {
  completed: {
    label: "Selesai",
    className: "bg-emerald-50 text-emerald-700 border-emerald-200",
  },
  in_progress: {
    label: "Sedang Dijalani",
    className: "bg-blue-50 text-blue-700 border-blue-200",
  },
  not_started: {
    label: "Belum Dimulai",
    className: "bg-slate-100 text-slate-600 border-slate-200",
  },
};

export function SkdLearningPathView({
  initialCloudProgress,
  initialSummaries,
}: SkdLearningPathViewProps) {
  const [summaries, setSummaries] = useState<AllProgressSummaries>(initialSummaries);
  const [tryoutHistory, setTryoutHistory] = useState<TryoutHistoryRecord[]>([]);
  const [expandedStages, setExpandedStages] = useState<Record<RoadmapStageId, boolean>>({
    diagnostik: true,
    twk: true,
    tiu: false,
    tkp: false,
    "tryout-resmi": false,
  });

  useEffect(() => {
    let cancelled = false;
    const frame = window.requestAnimationFrame(() => {
      setTryoutHistory(readTryoutHistory());
      const localProgress = readLocalTiuProgress();
      if (!localProgress || !hasLocalProgressDiff(localProgress, initialCloudProgress)) {
        return;
      }
      const merged = mergePracticeProgress(localProgress, initialCloudProgress);
      void fetchProgressSummaries(merged).then((nextSummaries) => {
        if (!cancelled && nextSummaries) {
          setSummaries(nextSummaries);
        }
      });
    });
    return () => {
      cancelled = true;
      window.cancelAnimationFrame(frame);
    };
  }, [initialCloudProgress]);

  const roadmap = useMemo(
    () => computeSkdLearningPath(summaries, tryoutHistory),
    [summaries, tryoutHistory],
  );

  const toggleStage = (stageId: RoadmapStageId) => {
    setExpandedStages((prev) => ({ ...prev, [stageId]: !prev[stageId] }));
  };

  return (
    <section
      id="roadmap"
      className="scroll-mt-24 space-y-6 rounded-2xl border border-blue-100 bg-white p-6 shadow-sm shadow-blue-100/50 sm:p-7"
    >
      {/* Header Roadmap & Ringkasan Progres */}
      <div className="flex flex-col gap-5 border-b border-blue-100 pb-6 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.16em] text-blue-700">
            <Compass className="size-4" aria-hidden />
            Learning Path Interaktif • Progres Langsung
          </p>
          <h2 className="mt-1.5 text-2xl font-bold tracking-tight text-slate-950">
            Roadmap Belajar SKD CPNS (5 Tahap)
          </h2>
          <p className="mt-1.5 max-w-2xl text-sm leading-6 text-slate-600">
            Ikuti alur belajar bertahap dari tes diagnostik awal, pendalaman 20 pilar/pola/aspek
            bank soal, hingga lulus ambang batas pada Tryout CAT 110 soal. Semua modul bebas
            dibuka kapan saja.
          </p>
        </div>

        <div className="flex flex-wrap gap-2.5">
          <div className="rounded-xl border border-blue-100 bg-blue-50/70 px-3.5 py-2 text-center">
            <p className="text-[11px] font-medium text-blue-700">Tahap Tuntas</p>
            <p className="text-base font-bold text-blue-950">
              {roadmap.completedStagesCount}/{roadmap.totalStages}
            </p>
          </div>
          <div className="rounded-xl border border-emerald-100 bg-emerald-50/70 px-3.5 py-2 text-center">
            <p className="text-[11px] font-medium text-emerald-700">Bank Soal</p>
            <p className="text-base font-bold text-emerald-950">
              {roadmap.totalAnswered.toLocaleString("id-ID")}/
              {roadmap.totalQuestions.toLocaleString("id-ID")}
            </p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2 text-center">
            <p className="text-[11px] font-medium text-slate-600">Tryout CAT</p>
            <p className="text-base font-bold text-slate-950">
              {roadmap.totalTryouts} sesi
            </p>
          </div>
        </div>
      </div>

      {/* Kartu Rekomendasi Langkah Berikutnya */}
      <div className="rounded-2xl border border-blue-200 bg-[linear-gradient(135deg,#eff6ff_0%,#ffffff_55%,#f5f3ff_100%)] p-5">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-blue-700">
              <Sparkles className="size-3.5" aria-hidden />
              Langkah Disarankan • Tahap {roadmap.nextAction.stageStep}
            </p>
            <h3 className="mt-1 text-base font-bold text-slate-950 sm:text-lg">
              {roadmap.nextAction.stageTitle}
            </h3>
            <p className="mt-0.5 text-xs leading-5 text-slate-600 sm:text-sm">
              {roadmap.nextAction.description}
            </p>
          </div>

          <Button
            asChild
            className="h-11 shrink-0 bg-blue-600 px-5 font-semibold text-white shadow-sm shadow-blue-200 hover:bg-blue-700"
          >
            <Link href={roadmap.nextAction.href}>
              <PlayCircle className="size-4" aria-hidden />
              {roadmap.nextAction.label}
              <ArrowRight className="size-4" aria-hidden />
            </Link>
          </Button>
        </div>

        {/* Overall Progress Bar */}
        <div className="mt-4 flex items-center gap-3">
          <div className="h-2 flex-1 overflow-hidden rounded-full bg-blue-100">
            <div
              className="h-full rounded-full bg-blue-600 transition-all duration-300"
              style={{ width: `${roadmap.overallPracticePct}%` }}
            />
          </div>
          <span className="shrink-0 text-xs font-bold text-blue-900">
            {roadmap.overallPracticePct}% bank soal
          </span>
        </div>
      </div>

      {/* 5 Tahap Stepper Interaktif */}
      <ol className="space-y-4">
        {roadmap.stages.map((stage) => {
          const isExpanded = Boolean(expandedStages[stage.id]);
          const isNextStage = roadmap.nextAction.stageId === stage.id && stage.status !== "completed";
          const statusMeta = STATUS_BADGE[stage.status];

          return (
            <li
              key={stage.id}
              className={cn(
                "overflow-hidden rounded-2xl border transition",
                stage.status === "completed"
                  ? "border-emerald-200 bg-emerald-50/20"
                  : isNextStage
                    ? "border-blue-300 bg-white ring-2 ring-blue-100"
                    : "border-slate-200 bg-white",
              )}
            >
              <div className="p-5">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div className="flex items-start gap-3.5">
                    <span
                      className={cn(
                        "mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-full text-sm font-bold",
                        stage.status === "completed"
                          ? "bg-emerald-600 text-white"
                          : isNextStage || stage.status === "in_progress"
                            ? "bg-blue-600 text-white"
                            : "bg-slate-200 text-slate-700",
                      )}
                    >
                      {stage.status === "completed" ? (
                        <CheckCircle2 className="size-5" aria-hidden />
                      ) : (
                        stage.step
                      )}
                    </span>

                    <div className="min-w-0">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="rounded-md bg-slate-900 px-2 py-0.5 text-[11px] font-bold text-white">
                          {stage.badge}
                        </span>
                        <span
                          className={cn(
                            "rounded-full border px-2.5 py-0.5 text-[11px] font-semibold",
                            statusMeta.className,
                          )}
                        >
                          {statusMeta.label}
                        </span>
                        {stage.accuracyLabel && (
                          <span className="inline-flex items-center gap-1 rounded-full bg-blue-50 px-2.5 py-0.5 text-[11px] font-semibold text-blue-800">
                            <Award className="size-3" aria-hidden />
                            {stage.accuracyLabel}
                          </span>
                        )}
                      </div>

                      <h3 className="mt-2 text-base font-bold text-slate-950 sm:text-lg">
                        {stage.title}
                      </h3>
                      <p className="mt-1 text-sm leading-6 text-slate-600">
                        {stage.description}
                      </p>

                      {/* Progress bar tahap */}
                      <div className="mt-3 flex flex-wrap items-center gap-3">
                        <div className="h-2 w-44 overflow-hidden rounded-full bg-slate-100 sm:w-56">
                          <div
                            className={cn(
                              "h-full rounded-full transition-all",
                              stage.status === "completed" ? "bg-emerald-600" : "bg-blue-600",
                            )}
                            style={{ width: `${stage.completionPct}%` }}
                          />
                        </div>
                        <span className="text-xs font-semibold text-slate-700">
                          {stage.statsLabel} ({stage.completionPct}%)
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex shrink-0 flex-wrap items-center gap-2 pl-12 sm:pl-0">
                    <Button
                      asChild
                      size="sm"
                      className={cn(
                        "font-semibold text-white",
                        stage.status === "completed"
                          ? "bg-emerald-600 hover:bg-emerald-700"
                          : "bg-blue-600 hover:bg-blue-700",
                      )}
                    >
                      <Link href={stage.primaryHref}>
                        {stage.primaryCtaLabel}
                        <ArrowRight className="size-3.5" aria-hidden />
                      </Link>
                    </Button>

                    <Button
                      type="button"
                      size="sm"
                      variant="outline"
                      aria-expanded={isExpanded}
                      onClick={() => toggleStage(stage.id)}
                      className="border-slate-200 text-slate-700 hover:bg-slate-50"
                    >
                      {isExpanded ? (
                        <>
                          Tutup Modul
                          <ChevronUp className="size-4" aria-hidden />
                        </>
                      ) : (
                        <>
                          Lihat {stage.modules.length} Modul
                          <ChevronDown className="size-4" aria-hidden />
                        </>
                      )}
                    </Button>
                  </div>
                </div>
              </div>

              {/* Daftar Modul Interaktif per Tahap */}
              {isExpanded && stage.modules.length > 0 && (
                <div className="border-t border-slate-100 bg-slate-50/70 p-4 sm:p-5">
                  <div className="grid gap-2.5 sm:grid-cols-2">
                    {stage.modules.map((mod) => (
                      <Link
                        key={mod.id}
                        href={mod.href}
                        className={cn(
                          "group flex items-center justify-between gap-3 rounded-xl border bg-white p-3.5 transition hover:border-blue-300 hover:shadow-xs",
                          mod.completed ? "border-emerald-200" : "border-slate-200",
                        )}
                      >
                        <div className="min-w-0 flex-1">
                          <div className="flex items-center gap-2">
                            <span
                              className={cn(
                                "flex size-6 shrink-0 items-center justify-center rounded-md text-xs font-bold",
                                mod.completed
                                  ? "bg-emerald-600 text-white"
                                  : "bg-blue-50 text-blue-700",
                              )}
                            >
                              {mod.completed ? (
                                <CheckCircle2 className="size-3.5" aria-hidden />
                              ) : (
                                mod.order
                              )}
                            </span>
                            <p className="truncate text-sm font-semibold text-slate-900 group-hover:text-blue-700">
                              {mod.label}
                            </p>
                          </div>

                          <div className="mt-2 flex items-center gap-2.5 pl-8">
                            <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-slate-100">
                              <div
                                className={cn(
                                  "h-full rounded-full",
                                  mod.completed ? "bg-emerald-500" : "bg-blue-600",
                                )}
                                style={{ width: `${mod.completionPct}%` }}
                              />
                            </div>
                            <span className="shrink-0 text-[11px] font-medium text-slate-600">
                              {mod.answered}/{mod.total}
                              {mod.metricLabel ? ` • ${mod.metricLabel}` : ""}
                            </span>
                          </div>
                        </div>

                        <ArrowRight
                          className="size-4 shrink-0 text-slate-400 transition group-hover:translate-x-0.5 group-hover:text-blue-600"
                          aria-hidden
                        />
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </li>
          );
        })}
      </ol>
    </section>
  );
}

