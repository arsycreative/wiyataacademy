"use client";

import { useState } from "react";
import { AlertTriangle, BookOpen, ChevronDown, Sparkles } from "lucide-react";

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
      className="rounded-xl border border-slate-200/90 bg-white shadow-2xs"
    >
      <button
        type="button"
        aria-expanded={expanded}
        onClick={() => setExpanded((prev) => !prev)}
        className="flex w-full items-center justify-between gap-3 px-4 py-3 text-left sm:px-5"
      >
        <div className="flex min-w-0 items-center gap-2.5">
          <BookOpen className="size-4 shrink-0 text-blue-600" aria-hidden />
          <div className="min-w-0">
            <p className="truncate text-xs font-semibold text-slate-900 sm:text-sm">
              Ringkasan Rumus &amp; Trik Cepat:{" "}
              <span className="font-normal text-slate-600">{sheet.headline}</span>
            </p>
          </div>
        </div>

        <span className="inline-flex shrink-0 items-center gap-1.5 text-xs font-semibold text-blue-700">
          <span className="hidden text-[11px] font-medium text-slate-400 sm:inline">
            ≤ {sheet.targetSecondsPerQuestion} dtk/soal
          </span>
          <span>{expanded ? "Tutup" : "Lihat Rumus"}</span>
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

