"use client";

import { useState } from "react";
import { AlertTriangle, BookOpen, ChevronDown, Clock, Sparkles } from "lucide-react";

import { cn } from "@/lib/utils";
import { getPatternCheatSheet } from "@/modules/question-bank/domain/pattern-cheat-sheets";
import type { PracticePatternId } from "@/modules/question-bank/domain/question";

export function PatternCheatSheetCard({
  patternId,
  patternLabel,
}: {
  patternId: PracticePatternId;
  patternLabel: string;
}) {
  const [expanded, setExpanded] = useState(false);
  const sheet = getPatternCheatSheet(patternId);

  return (
    <section
      aria-label={`Ringkasan materi dan trik cepat ${patternLabel}`}
      className="rounded-2xl border border-indigo-200/80 bg-[linear-gradient(135deg,#eef2ff_0%,#ffffff_55%,#f0f9ff_100%)] shadow-xs"
    >
      <button
        type="button"
        aria-expanded={expanded}
        onClick={() => setExpanded((prev) => !prev)}
        className="flex w-full items-center justify-between gap-3 px-4 py-3.5 text-left sm:px-5"
      >
        <div className="flex min-w-0 items-start gap-3 sm:items-center">
          <span className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-xl bg-indigo-600 text-white shadow-xs sm:mt-0">
            <BookOpen className="size-4" aria-hidden />
          </span>
          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-[11px] font-bold uppercase tracking-wider text-indigo-700">
                Cheat Sheet &amp; Trik Cepat
              </span>
              <span className="inline-flex items-center gap-1 rounded-full bg-white/90 px-2 py-0.5 text-[11px] font-semibold text-slate-700 ring-1 ring-indigo-100">
                <Clock className="size-3 text-indigo-600" aria-hidden />
                Target ≤ {sheet.targetSecondsPerQuestion} dtk/soal
              </span>
            </div>
            <p className="mt-0.5 truncate text-xs font-semibold text-slate-900 sm:text-sm">
              {sheet.headline}
            </p>
          </div>
        </div>

        <span className="inline-flex shrink-0 items-center gap-1 rounded-lg bg-white px-2.5 py-1.5 text-xs font-semibold text-indigo-700 ring-1 ring-indigo-200/80">
          {expanded ? "Tutup Ringkasan" : "Pelajari Rumus & Trik"}
          <ChevronDown
            className={cn(
              "size-3.5 transition-transform duration-200",
              expanded && "rotate-180",
            )}
            aria-hidden
          />
        </span>
      </button>

      {expanded && (
        <div className="space-y-4 border-t border-indigo-100/80 px-4 pb-5 pt-4 sm:px-5">
          <div className="rounded-xl bg-white/90 p-3.5 text-xs leading-6 text-slate-700 ring-1 ring-indigo-100/80 sm:text-sm">
            <p className="font-semibold text-slate-900">Konsep Inti yang Diuji BKN</p>
            <p className="mt-1">{sheet.coreConcept}</p>
          </div>

          <div className="grid gap-3 md:grid-cols-2">
            <div className="rounded-xl bg-emerald-50/75 p-3.5 text-xs leading-5 text-emerald-950 ring-1 ring-emerald-200/70">
              <p className="flex items-center gap-1.5 font-semibold text-emerald-900">
                <Sparkles className="size-3.5 text-emerald-600" aria-hidden />
                Trik Cepat &amp; Pola Kunci
              </p>
              <ul className="mt-2 space-y-1.5">
                {sheet.fastTricks.map((trick) => (
                  <li key={trick} className="flex items-start gap-2">
                    <span
                      aria-hidden
                      className="mt-1.5 size-1.5 shrink-0 rounded-full bg-emerald-600"
                    />
                    <span>{trick}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-xl bg-amber-50/80 p-3.5 text-xs leading-5 text-amber-950 ring-1 ring-amber-200/70">
              <p className="flex items-center gap-1.5 font-semibold text-amber-900">
                <AlertTriangle className="size-3.5 text-amber-600" aria-hidden />
                Jebakan Paling Sering Muncul
              </p>
              <ul className="mt-2 space-y-1.5">
                {sheet.commonTraps.map((trap) => (
                  <li key={trap} className="flex items-start gap-2">
                    <span
                      aria-hidden
                      className="mt-1.5 size-1.5 shrink-0 rounded-full bg-amber-600"
                    />
                    <span>{trap}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

