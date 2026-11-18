"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";

import { cn } from "@/lib/utils";
import { LEARNING_STEPS } from "@/modules/catalog/presentation/cpns-landing-content";

const stepHighlights: Record<string, readonly string[]> = {
  "01": [
    "Peta bobot penilaian TWK, TIU & TKP",
    "Penentuan prioritas belajar sesuai target skor",
    "Alur mingguan yang realistis diikuti",
  ],
  "02": [
    "Ringkasan konsep tanpa teori bertele-tele",
    "Trik hitung cepat & pola deret TIU",
    "Strategi memilih opsi TKP bernilai maksimal",
  ],
  "03": [
    "Latihan soal bertahap sesuai kisi-kisi terbaru",
    "Pembahasan jelas per butir soal",
    "Catatan evaluasi topik yang masih lemah",
  ],
};

export function CpnsFeaturesSection() {
  const [activeStep, setActiveStep] = useState<string>(LEARNING_STEPS[0].step);
  const current =
    LEARNING_STEPS.find((item) => item.step === activeStep) ?? LEARNING_STEPS[0];

  return (
    <section
      id="metode"
      aria-labelledby="metode-title"
      className="bg-[#0f2454] py-16 text-white sm:py-24"
    >
      <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-10">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-300">
              Metode Belajar
            </p>
            <h2
              id="metode-title"
              className="mt-3 text-2xl font-semibold tracking-tight text-white sm:text-4xl"
            >
              3 langkah belajar yang rapi dari awal sampai siap ujian
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-6 text-blue-200">
            Pilih setiap tahap untuk melihat ringkasan pendekatannya.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-stretch">
          <div className="flex flex-col justify-center gap-3">
            {LEARNING_STEPS.map((item) => {
              const isSelected = item.step === activeStep;
              return (
                <button
                  key={item.step}
                  type="button"
                  aria-pressed={isSelected}
                  onClick={() => setActiveStep(item.step)}
                  className={cn(
                    "group flex w-full items-center justify-between gap-4 rounded-2xl border px-5 py-5 text-left transition-all",
                    isSelected
                      ? "border-blue-400/50 bg-white/10 text-white shadow-lg shadow-blue-950/20"
                      : "border-white/10 bg-white/[0.03] text-blue-200/80 hover:border-white/20 hover:bg-white/[0.06] hover:text-white",
                  )}
                >
                  <div className="flex items-center gap-4">
                    <span
                      className={cn(
                        "flex size-10 shrink-0 items-center justify-center rounded-xl text-sm font-semibold transition-colors",
                        isSelected
                          ? "bg-blue-500 text-white"
                          : "bg-white/10 text-blue-200 group-hover:bg-white/15",
                      )}
                    >
                      {item.step}
                    </span>
                    <span className="text-base font-semibold leading-snug sm:text-lg">
                      {item.title}
                    </span>
                  </div>
                  <ArrowRight
                    className={cn(
                      "size-4 shrink-0 transition-transform",
                      isSelected
                        ? "translate-x-0 text-blue-300"
                        : "-translate-x-1 text-white/30 group-hover:translate-x-0 group-hover:text-white/70",
                    )}
                    aria-hidden
                  />
                </button>
              );
            })}
          </div>

          <div className="flex flex-col justify-between rounded-3xl border border-white/15 bg-white/5 p-8 backdrop-blur-sm sm:p-10">
            <div>
              <span className="inline-flex rounded-full bg-blue-500/25 px-3.5 py-1 text-xs font-semibold tracking-wide text-blue-200">
                Tahap {current.step}
              </span>
              <h3 className="mt-5 text-2xl font-semibold leading-snug text-white sm:text-3xl">
                {current.title}
              </h3>
              <p className="mt-3 text-base leading-7 text-blue-100">{current.description}</p>
            </div>

            <ul className="mt-8 space-y-3.5 border-t border-white/10 pt-7">
              {(stepHighlights[current.step] ?? []).map((point) => (
                <li key={point} className="flex items-start gap-3 text-sm text-white sm:text-base">
                  <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-emerald-400" aria-hidden />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
