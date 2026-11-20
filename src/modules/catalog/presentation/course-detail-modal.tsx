"use client";

import Link from "next/link";
import { useCallback, useEffect, useId, useRef, useState } from "react";
import { createPortal } from "react-dom";
import {
  ArrowRight,
  Award,
  BarChart3,
  BookOpenCheck,
  Check,
  ClipboardList,
  Clock,
  Layers3,
  Users,
  X,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  courseThemeClasses,
  type CourseDetail,
} from "@/modules/catalog/presentation/course-catalog-content";
import { APP_ROUTES } from "@/shared/constants/app";

const MODAL_ANIMATION_MS = 560;

type CourseDetailModalProps = {
  course: CourseDetail | null;
  onClose: () => void;
};

export function CourseDetailModal({ course, onClose }: CourseDetailModalProps) {
  const [isClosing, setIsClosing] = useState(false);
  const isClosingRef = useRef(false);
  const closeTimeoutRef = useRef<number | null>(null);
  const titleId = useId();

  const closeModal = useCallback(() => {
    if (isClosingRef.current) {
      return;
    }

    isClosingRef.current = true;

    if (closeTimeoutRef.current !== null) {
      window.clearTimeout(closeTimeoutRef.current);
    }

    setIsClosing(true);
    closeTimeoutRef.current = window.setTimeout(() => {
      closeTimeoutRef.current = null;
      onClose();
    }, MODAL_ANIMATION_MS);
  }, [onClose]);

  useEffect(() => {
    if (!course) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeModal();
      }
    };

    const originalBodyOverflow = document.body.style.overflow;
    const originalBodyPaddingRight = document.body.style.paddingRight;
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;

    document.body.style.overflow = "hidden";
    if (scrollbarWidth > 0) {
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalBodyOverflow;
      document.body.style.paddingRight = originalBodyPaddingRight;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [closeModal, course]);

  useEffect(() => {
    return () => {
      if (closeTimeoutRef.current !== null) {
        window.clearTimeout(closeTimeoutRef.current);
      }
    };
  }, []);

  if (!course) {
    return null;
  }

  return createPortal(
    <div
      aria-labelledby={titleId}
      aria-modal="true"
      className={cn(
        "fixed inset-0 z-50 flex items-center justify-center bg-slate-950/50 p-3 sm:p-5",
        isClosing
          ? "course-detail-overlay-exit pointer-events-none"
          : "course-detail-overlay-enter",
      )}
      role="dialog"
    >
      <button
        type="button"
        aria-label="Tutup overlay detail program"
        className="absolute inset-0 cursor-default"
        onClick={closeModal}
      />

      <section
        className={cn(
          "relative max-h-[calc(100dvh-1.5rem)] w-full max-w-[1120px] transform-gpu overflow-hidden rounded-[1.4rem] border border-white/60 bg-white shadow-2xl shadow-slate-950/25 will-change-transform sm:max-h-[calc(100dvh-2.5rem)]",
          isClosing ? "course-detail-panel-exit" : "course-detail-panel-enter",
        )}
      >
        <Button
          type="button"
          size="icon"
          variant="secondary"
          className="absolute right-4 top-4 z-20 rounded-full bg-white text-slate-700 shadow-lg hover:bg-slate-50"
          aria-label="Tutup detail program"
          onClick={closeModal}
        >
          <X className="size-5" aria-hidden />
        </Button>

        <div className="max-h-[inherit] overflow-y-auto">
          <div className="grid gap-8 bg-[linear-gradient(135deg,#1459f5_0%,#4d63f7_48%,#8f55f3_100%)] px-6 py-10 text-white sm:px-10 lg:grid-cols-[0.92fr_1fr] lg:px-12 lg:py-12">
            <div className="flex min-w-0 flex-col justify-center">
              <nav className="flex flex-wrap items-center gap-2 text-sm font-medium text-white/85">
                <span>Program Bimbel</span>
                <span aria-hidden>&gt;</span>
                <span>{course.label}</span>
                <span aria-hidden>&gt;</span>
                <span className="text-white">{course.title}</span>
              </nav>

              <div className="mt-7 flex flex-wrap gap-3">
                <HeroPill icon={BookOpenCheck} label="Bimbel CASN" />
                <HeroPill icon={BarChart3} label={course.level} />
                <HeroPill icon={Layers3} label={course.lessons} />
              </div>

              <h2
                id={titleId}
                className="mt-8 text-3xl font-semibold leading-tight sm:text-4xl lg:text-[2.5rem]"
              >
                {course.title}
              </h2>
              <p className="mt-3 text-lg font-medium text-white/90">
                Mentor: {course.instructors}
              </p>
              <p className="mt-5 max-w-xl text-base leading-7 text-white/90 sm:text-lg sm:leading-8">
                {course.description}
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Button
                  asChild
                  className="h-12 min-w-48 bg-white font-semibold text-blue-700 shadow-lg shadow-blue-950/20 hover:bg-blue-50"
                >
                  <Link href={APP_ROUTES.courseDetail(course.slug)} onClick={closeModal}>
                    Buka Roadmap Interaktif
                    <ArrowRight className="size-4" aria-hidden />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="h-12 border-white/40 bg-white/10 text-white hover:bg-white/20 hover:text-white"
                >
                  <Link href={APP_ROUTES.tryout} onClick={closeModal}>
                    Mulai Tryout CAT 110 Soal
                  </Link>
                </Button>
              </div>
            </div>

            <CourseBanner course={course} />
          </div>

          <div className="grid gap-6 bg-white px-5 py-5 sm:px-8 sm:py-7 lg:grid-cols-[1fr_360px] lg:px-9">
            <div className="space-y-5">
              <InfoPanel title="Yang akan kamu pelajari">
                <ul className="grid gap-3">
                  {course.outcomes.map((outcome) => (
                    <li
                      key={outcome}
                      className="flex gap-3 text-sm font-medium leading-6 text-slate-700 sm:text-base"
                    >
                      <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-blue-600 text-white">
                        <Check className="size-3.5" aria-hidden />
                      </span>
                      {outcome}
                    </li>
                  ))}
                </ul>
              </InfoPanel>

              <InfoPanel title="Tentang program ini">
                <div className="space-y-3 text-sm leading-7 text-slate-700 sm:text-base">
                  {course.about.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </InfoPanel>

              <InfoPanel title="Tim Pengajar">
                <div className="flex items-start gap-4">
                  <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-700">
                    <Users className="size-6" aria-hidden />
                  </span>
                  <div>
                    <h4 className="font-semibold text-slate-950">{course.instructors}</h4>
                    <p className="mt-1 text-sm leading-6 text-slate-600">
                      Mentor spesialis seleksi CPNS yang menyusun materi sesuai kisi-kisi
                      KemenPAN-RB.
                    </p>
                  </div>
                </div>
              </InfoPanel>

              <InfoPanel title="Alur Roadmap & Latihan">
                <ol className="grid gap-3">
                  {course.syllabus.map((section, index) => {
                    const inner = (
                      <>
                        <span className="flex size-9 items-center justify-center rounded-full bg-blue-600 text-sm font-semibold text-white">
                          {index + 1}
                        </span>
                        <div>
                          <h4 className="font-semibold text-slate-950">{section.title}</h4>
                          <p className="mt-1 text-sm leading-6 text-slate-600">
                            {section.description}
                          </p>
                        </div>
                        <span className="inline-flex w-fit items-center gap-1 rounded-md bg-white px-3 py-1.5 text-xs font-semibold text-blue-700 shadow-sm shadow-blue-100">
                          {section.lessons}
                          {section.href && <ArrowRight className="size-3.5" aria-hidden />}
                        </span>
                      </>
                    );

                    return (
                      <li key={section.title}>
                        {section.href ? (
                          <Link
                            href={section.href}
                            onClick={closeModal}
                            className="grid gap-3 rounded-lg border border-slate-100 bg-slate-50/80 p-4 transition hover:border-blue-200 hover:bg-blue-50/40 sm:grid-cols-[2.75rem_1fr_auto] sm:items-start"
                          >
                            {inner}
                          </Link>
                        ) : (
                          <div className="grid gap-3 rounded-lg border border-slate-100 bg-slate-50/80 p-4 sm:grid-cols-[2.75rem_1fr_auto] sm:items-start">
                            {inner}
                          </div>
                        )}
                      </li>
                    );
                  })}
                </ol>
              </InfoPanel>

              {course.faqs && course.faqs.length > 0 && (
                <InfoPanel title="FAQ Program">
                  <div className="grid gap-3">
                    {course.faqs.map((faq) => (
                      <details
                        key={faq.question}
                        className="rounded-lg border border-slate-100 bg-slate-50/80 p-4"
                      >
                        <summary className="cursor-pointer font-semibold text-slate-950">
                          {faq.question}
                        </summary>
                        <p className="mt-3 text-sm leading-6 text-slate-600">{faq.answer}</p>
                      </details>
                    ))}
                  </div>
                </InfoPanel>
              )}
            </div>

            <aside className="rounded-xl border border-blue-100 bg-white p-6 shadow-sm shadow-blue-100/70 lg:sticky lg:top-5 lg:self-start">
              <p className="text-xs font-semibold uppercase tracking-wider text-blue-700">
                Ringkasan Program
              </p>
              <h3 className="mt-2 text-xl font-semibold text-slate-950">{course.title}</h3>
              <dl className="mt-5 divide-y divide-slate-100">
                <CourseFact icon={BarChart3} label="Level" value={course.level} />
                <CourseFact icon={Clock} label="Durasi" value={course.duration} />
                <CourseFact icon={Layers3} label="Materi" value={course.lessons} />
                <CourseFact icon={ClipboardList} label="Latihan" value={course.practiceTests} />
                <CourseFact icon={Award} label="Kurikulum" value="Kisi-Kisi KemenPAN-RB" />
                <CourseFact icon={Users} label="Mentor" value={course.instructors} />
              </dl>
              <Button
                asChild
                className="mt-6 h-12 w-full bg-blue-600 font-semibold text-white shadow-lg shadow-blue-100 hover:bg-blue-700"
              >
                <Link href={APP_ROUTES.courseDetail(course.slug)} onClick={closeModal}>
                  Buka Roadmap Interaktif
                  <ArrowRight className="size-4" aria-hidden />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="mt-2.5 h-11 w-full border-slate-300 bg-slate-900 font-semibold text-white hover:bg-slate-800 hover:text-white"
              >
                <Link href={APP_ROUTES.tryout} onClick={closeModal}>
                  Mulai Tryout CAT 110 Soal
                </Link>
              </Button>
            </aside>
          </div>
        </div>
      </section>
    </div>,
    document.body,
  );
}

function CourseBanner({ course }: { course: CourseDetail }) {
  return (
    <div
      aria-label={`${course.title} banner`}
      className={cn(
        "relative min-h-[280px] overflow-hidden rounded-xl border border-white/70 bg-gradient-to-br bg-cover bg-center shadow-2xl shadow-blue-950/20",
        courseThemeClasses[course.bannerTheme],
      )}
      style={course.bannerUrl ? { backgroundImage: `url(${JSON.stringify(course.bannerUrl)})` } : undefined}
      role="img"
    >
      <div className={cn("absolute inset-0", course.bannerUrl ? "bg-slate-950/10" : "bg-white/20")} />
      {!course.bannerUrl && (
        <>
          <div className="absolute left-8 top-9 max-w-[15rem]">
            <p className="text-4xl font-semibold uppercase leading-none tracking-normal text-slate-950/80">
              {course.bannerLabel}
            </p>
            <div className="mt-5 grid grid-cols-2 gap-2">
              {["TWK", "TIU", "TKP", "SKB"].map((item) => (
                <span
                  key={item}
                  className="rounded-md bg-white/75 px-3 py-2 text-xs font-semibold uppercase text-slate-700 shadow-sm"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
          <div className="absolute bottom-7 right-8 h-32 w-[17rem] rounded-xl bg-white/85 shadow-xl" />
          <div className="absolute bottom-16 right-16 h-28 w-48 rounded-t-xl bg-slate-800 shadow-xl">
            <div className="absolute inset-3 rounded-md bg-white/80" />
          </div>
          <div className="absolute bottom-8 right-8 grid gap-2">
            {["TWK", "TIU", "TKP", "SKB"].map((item, index) => (
              <span
                key={item}
                className={cn(
                  "block h-8 w-28 rounded px-3 py-1.5 text-xs font-semibold text-white shadow-md",
                  ["bg-blue-600", "bg-emerald-600", "bg-orange-500", "bg-violet-600"][index],
                )}
              >
                {item}
              </span>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

function HeroPill({
  icon: Icon,
  label,
}: {
  icon: typeof BookOpenCheck;
  label: string;
}) {
  return (
    <span className="inline-flex items-center gap-2 rounded-lg border border-white/40 bg-white/10 px-3 py-2 text-sm font-semibold text-white">
      <Icon className="size-4" aria-hidden />
      {label}
    </span>
  );
}

function InfoPanel({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="rounded-xl border border-blue-100 bg-white p-6 shadow-sm shadow-blue-100/70">
      <h3 className="text-xl font-semibold text-slate-950">{title}</h3>
      <div className="mt-4">{children}</div>
    </section>
  );
}

function CourseFact({
  icon: Icon,
  label,
  value,
}: {
  icon: typeof BarChart3;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center gap-3 py-3 text-sm text-slate-700">
      <Icon className="size-5 shrink-0 text-slate-900" aria-hidden />
      <dt className="sr-only">{label}</dt>
      <dd className="font-medium">{value}</dd>
    </div>
  );
}
