"use client";

import Link from "next/link";
import { useCallback, useEffect, useMemo, useState } from "react";
import { ArrowRight, ChevronLeft, ChevronRight, Clock, Lock } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { CourseSummary } from "@/modules/catalog/application/dtos";
import {
  toCatalogCourse,
  topRatedCourses,
  type CatalogCourse,
  type CourseTheme,
} from "@/modules/catalog/presentation/course-catalog-content";
import { CourseDetailModal } from "@/modules/catalog/presentation/course-detail-modal";
import { useToastStore } from "@/shared/stores/toast-store";
import { useCatalogStore } from "./stores/catalog-store";

type CarouselSlide =
  | {
      kind: "program";
      id: string;
      badge: string;
      visualCode: string;
      title: string;
      summary: string;
      gradient: string;
      course: CatalogCourse;
    }
  | {
      kind: "preparing";
      id: string;
      badge: string;
      visualCode: string;
      title: string;
      summary: string;
      toastMessage: string;
      gradient: string;
    }
  | {
      kind: "coming_soon";
      id: string;
      badge: string;
      visualCode: string;
      title: string;
      summary: string;
    };

const slideGradients: Record<CourseTheme, string> = {
  blue: "bg-[linear-gradient(135deg,#1e3a8a_0%,#2563eb_58%,#3b82f6_100%)]",
  violet: "bg-[linear-gradient(135deg,#312e81_0%,#4f46e5_52%,#7c3aed_100%)]",
  cyan: "bg-[linear-gradient(135deg,#0f4c81_0%,#0284c7_55%,#06b6d4_100%)]",
  sky: "bg-[linear-gradient(135deg,#1d4ed8_0%,#2563eb_55%,#38bdf8_100%)]",
  mint: "bg-[linear-gradient(135deg,#0f766e_0%,#0d9488_55%,#2dd4bf_100%)]",
  rose: "bg-[linear-gradient(135deg,#9f1239_0%,#e11d48_55%,#fb7185_100%)]",
  amber: "bg-[linear-gradient(135deg,#b45309_0%,#d97706_55%,#f59e0b_100%)]",
};

const skbPreparingSlide: CarouselSlide = {
  kind: "preparing",
  id: "skb-cpns-preparing",
  badge: "Dalam Persiapan",
  visualCode: "SKB",
  title: "Pendalaman SKB CPNS",
  summary: "Materi lanjutan tahap SKB sedang disiapkan untuk melengkapi persiapan SKD.",
  toastMessage:
    "Program Pendalaman SKB CPNS masih dalam tahap persiapan. Saat ini silakan fokus di Intensif SKD CPNS.",
  gradient: "bg-[linear-gradient(135deg,#312e81_0%,#4f46e5_55%,#6d28d9_100%)]",
};

const comingSoonSlides: readonly CarouselSlide[] = [
  {
    kind: "coming_soon",
    id: "next-program-1",
    badge: "Coming Soon",
    visualCode: "NEXT",
    title: "Next Program — Segera Hadir",
    summary: "Program baru sedang disiapkan dan akan segera diumumkan.",
  },
];

const AUTO_ADVANCE_MS = 6000;

export function CourseCatalogBrowser({
  courses,
}: {
  courses: readonly CourseSummary[];
}) {
  const { selectedCourse, setSelectedCourse } = useCatalogStore();
  const addToast = useToastStore((state) => state.addToast);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const slides = useMemo<readonly CarouselSlide[]>(() => {
    const rawList = courses.length > 0 ? courses.map(toCatalogCourse) : topRatedCourses;
    const skdCourse =
      rawList.find((c) => c.slug === "intensif-skd-cpns") ?? topRatedCourses[0];

    const skdSlide: CarouselSlide = {
      kind: "program",
      id: skdCourse.slug,
      badge: "Learning Path Interaktif",
      visualCode: "SKD",
      title: skdCourse.title,
      summary:
        "Roadmap belajar 5 tahap: tes diagnostik, 2.540 soal TWK/TIU/TKP per pola & cheat sheet, hingga Tryout CAT 110 soal.",
      gradient: slideGradients[skdCourse.theme],
      course: skdCourse,
    };

    return [skdSlide, skbPreparingSlide, ...comingSoonSlides];
  }, [courses]);

  const total = slides.length;

  const goPrev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  const goNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % total);
  }, [total]);

  useEffect(() => {
    if (isPaused || total <= 1) return;
    const id = window.setInterval(goNext, AUTO_ADVANCE_MS);
    return () => window.clearInterval(id);
  }, [isPaused, total, goNext]);

  return (
    <section
      id="program"
      aria-labelledby="program-bimbel-title"
      className="overflow-hidden py-16 sm:py-24"
    >
      <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-10">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-700">
              Program Bimbel
            </p>
            <h2
              id="program-bimbel-title"
              className="mt-3 text-2xl font-semibold tracking-tight text-slate-950 sm:text-4xl"
            >
              Fokus Persiapan SKD CPNS
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <span className="mr-1 font-mono text-xs font-semibold text-slate-500">
              {String(activeIndex + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
            </span>
            <Button
              type="button"
              size="icon"
              variant="outline"
              aria-label="Program sebelumnya"
              onClick={goPrev}
              className="size-11 rounded-full border-blue-200 bg-white text-slate-800 shadow-sm hover:bg-blue-50 hover:text-blue-700"
            >
              <ChevronLeft className="size-5" aria-hidden />
            </Button>
            <Button
              type="button"
              size="icon"
              variant="outline"
              aria-label="Program berikutnya"
              onClick={goNext}
              className="size-11 rounded-full border-blue-200 bg-white text-slate-800 shadow-sm hover:bg-blue-50 hover:text-blue-700"
            >
              <ChevronRight className="size-5" aria-hidden />
            </Button>
          </div>
        </div>
      </div>

      <div
        className="mx-auto mt-10 max-w-[1280px] px-5 sm:px-8 lg:px-10"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onFocus={() => setIsPaused(true)}
        onBlur={() => setIsPaused(false)}
      >
        <div className="overflow-visible">
          <div
            className="flex gap-6 [--slide-step:min(680px,84vw)] transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform"
            style={{
              transform: `translate3d(calc(-${activeIndex} * (var(--slide-step) + 1.5rem)), 0, 0)`,
            }}
          >
            {slides.map((slide, index) => {
              const isActive = index === activeIndex;
              const isComingSoon = slide.kind === "coming_soon";
              const isPreparing = slide.kind === "preparing";

              return (
                <article
                  key={slide.id}
                  onClick={() => {
                    if (!isActive) {
                      setActiveIndex(index);
                      return;
                    }
                    if (isPreparing) {
                      addToast(slide.toastMessage, "info");
                    }
                  }}
                  className={cn(
                    "grid w-[var(--slide-step)] shrink-0 overflow-hidden rounded-3xl border bg-white transition-all duration-500 sm:grid-cols-[0.82fr_1.18fr]",
                    isActive
                      ? "border-blue-200 opacity-100 shadow-2xl shadow-blue-100/80"
                      : "cursor-pointer border-blue-100/80 opacity-50 shadow-sm hover:opacity-80",
                    isActive && isPreparing && "cursor-pointer",
                  )}
                >
                  <div
                    className={cn(
                      "relative flex min-h-[210px] flex-col justify-between overflow-hidden p-7 text-white sm:min-h-[320px]",
                      isComingSoon
                        ? "bg-[linear-gradient(135deg,#1e293b_0%,#334155_60%,#475569_100%)]"
                        : slide.gradient,
                    )}
                  >
                    <div
                      aria-hidden
                      className="absolute inset-0 opacity-20 [background-image:radial-gradient(#ffffff_1px,transparent_1px)] [background-size:18px_18px]"
                    />
                    <span className="relative z-10 w-fit rounded-full bg-white/15 px-3 py-1 text-xs font-semibold tracking-wide backdrop-blur-sm">
                      {slide.badge}
                    </span>

                    <div className="relative z-10 mt-8">
                      <p className="text-4xl font-semibold tracking-tight text-white/95 sm:text-5xl">
                        {slide.visualCode}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col justify-between p-7 sm:p-8">
                    <div>
                      {isComingSoon && (
                        <span className="inline-flex items-center gap-1.5 rounded-md bg-slate-100 px-2.5 py-1 text-xs font-semibold text-slate-600">
                          <Lock className="size-3" aria-hidden />
                          Segera Hadir
                        </span>
                      )}

                      {isPreparing && (
                        <span className="inline-flex items-center gap-1.5 rounded-md bg-amber-50 px-2.5 py-1 text-xs font-semibold text-amber-700">
                          <Clock className="size-3" aria-hidden />
                          Masih Dipersiapkan
                        </span>
                      )}

                      {slide.kind === "program" && (
                        <div className="flex flex-wrap gap-2 text-xs font-medium text-slate-500">
                          <span className="rounded-md bg-blue-50 px-2.5 py-1 font-semibold text-blue-700">
                            {slide.course.level}
                          </span>
                          <span className="rounded-md bg-slate-100 px-2.5 py-1">
                            {slide.course.detail.duration}
                          </span>
                          <span className="rounded-md bg-slate-100 px-2.5 py-1">
                            {slide.course.detail.lessons}
                          </span>
                        </div>
                      )}

                      <h3 className="mt-5 text-xl font-semibold leading-snug text-slate-950 sm:text-2xl">
                        {slide.title}
                      </h3>
                      <p className="mt-3 text-sm leading-6 text-slate-600 sm:text-base">
                        {slide.summary}
                      </p>
                    </div>

                    <div className="mt-8 flex flex-wrap gap-3">
                      {isComingSoon && (
                        <span className="inline-flex h-11 items-center rounded-lg border border-dashed border-slate-200 bg-slate-50 px-5 text-sm font-medium text-slate-500">
                          Nantikan Pengumuman Resmi
                        </span>
                      )}

                      {isPreparing && (
                        <Button
                          type="button"
                          variant="outline"
                          onClick={(event) => {
                            event.stopPropagation();
                            if (!isActive) setActiveIndex(index);
                            addToast(slide.toastMessage, "info");
                          }}
                          className="h-11 border-blue-200 px-5 text-blue-700 hover:bg-blue-50"
                        >
                          Masih Dipersiapkan
                        </Button>
                      )}

                      {slide.kind === "program" && (
                        <>
                          <Button
                            type="button"
                            variant="outline"
                            onClick={(event) => {
                              event.stopPropagation();
                              setSelectedCourse(slide.course.detail);
                            }}
                            className="h-11 border-blue-200 px-5 text-blue-700 hover:bg-blue-50"
                          >
                            Detail
                          </Button>
                          <Button
                            asChild
                            onClick={(event) => event.stopPropagation()}
                            className="h-11 bg-blue-600 px-5 text-white hover:bg-blue-700"
                          >
                            <Link href={`/courses/${slide.course.slug}`}>
                              Buka Roadmap SKD
                              <ArrowRight className="size-4" aria-hidden />
                            </Link>
                          </Button>
                        </>
                      )}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        <div
          className="mt-8 flex items-center justify-center gap-2"
          aria-label="Navigasi slide program bimbel"
        >
          {slides.map((slide, index) => (
            <button
              key={slide.id}
              type="button"
              aria-label={`Tampilkan ${slide.title}`}
              aria-current={index === activeIndex}
              onClick={() => setActiveIndex(index)}
              className={cn(
                "h-2 rounded-full transition-all duration-300",
                index === activeIndex
                  ? "w-8 bg-blue-600"
                  : "w-2 bg-slate-300 hover:bg-slate-400",
              )}
            />
          ))}
        </div>
      </div>

      <CourseDetailModal
        key={selectedCourse?.title ?? "empty-course-detail"}
        course={selectedCourse}
        onClose={() => setSelectedCourse(null)}
      />
    </section>
  );
}
