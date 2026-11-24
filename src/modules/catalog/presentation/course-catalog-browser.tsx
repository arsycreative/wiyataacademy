"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import type { CourseSummary } from "@/modules/catalog/application/dtos";
import {
  toCatalogCourse,
  topRatedCourses,
} from "@/modules/catalog/presentation/course-catalog-content";
import { CourseDetailModal } from "@/modules/catalog/presentation/course-detail-modal";
import { APP_ROUTES } from "@/shared/constants/app";
import { useCatalogStore } from "./stores/catalog-store";

const CORE_PILLARS = [
  {
    tag: "2.890+ Soal HOTS",
    title: "Bank Soal Terstruktur",
    description:
      "Latihan fokus per pola untuk TWK (5 pilar), TIU (9 pola), dan TKP (6 aspek) lengkap dengan ringkasan rumus cepat.",
    href: APP_ROUTES.tiuPractice,
    cta: "Mulai Latihan Soal",
  },
  {
    tag: "10–15 Menit",
    title: "Sprint Drill Kecepatan",
    description:
      "Latihan berbatas waktu 15 soal dengan stopwatch per nomor untuk mengaudit soal mana yang paling menyita waktu.",
    href: APP_ROUTES.sprint,
    cta: "Coba Sprint Drill",
  },
  {
    tag: "110 Soal • BKN",
    title: "Tryout CAT & Rapor PDF",
    description:
      "Simulasi penuh 100 menit dengan penilaian ambang batas resmi, smart rekomendasi belajar, dan cetak rapor evaluasi PDF.",
    href: APP_ROUTES.tryout,
    cta: "Ikuti Simulasi CAT",
  },
] as const;

export function CourseCatalogBrowser({
  courses,
}: {
  courses: readonly CourseSummary[];
}) {
  const { selectedCourse, setSelectedCourse } = useCatalogStore();

  const rawList =
    courses.length > 0 ? courses.map(toCatalogCourse) : topRatedCourses;
  const skdCourse =
    rawList.find((c) => c.slug === "intensif-skd-cpns") ?? topRatedCourses[0];

  return (
    <section
      id="program"
      aria-labelledby="program-bimbel-title"
      className="bg-[#f8fafc] py-16 sm:py-24"
    >
      <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-10">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-700">
              Ekosistem Belajar SKD
            </p>
            <h2
              id="program-bimbel-title"
              className="mt-2.5 text-2xl font-semibold tracking-tight text-slate-950 sm:text-4xl"
            >
              Semua yang Anda Butuhkan untuk Lulus PG
            </h2>
          </div>

          <Button
            asChild
            variant="outline"
            className="w-fit border-slate-200 bg-white text-sm font-semibold text-slate-800 hover:bg-slate-50"
          >
            <Link href={APP_ROUTES.pricing}>Lihat Semua Paket &rarr;</Link>
          </Button>
        </div>

        {/* 3 Core Product Cards */}
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {CORE_PILLARS.map((item) => (
            <article
              key={item.title}
              className="flex flex-col justify-between rounded-2xl border border-slate-200/90 bg-white p-6 shadow-2xs transition hover:border-blue-200"
            >
              <div>
                <span className="inline-block rounded-md bg-slate-100 px-2.5 py-1 text-[11px] font-semibold text-slate-700">
                  {item.tag}
                </span>
                <h3 className="mt-4 text-lg font-bold text-slate-950">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 border-t border-slate-100 pt-4">
                <Link
                  href={item.href}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-700 transition-colors hover:text-blue-800"
                >
                  <span>{item.cta}</span>
                  <ArrowRight className="size-4" aria-hidden />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Program Roadmap Highlight Strip */}
        <div className="mt-6 flex flex-col gap-4 rounded-2xl border border-slate-200/90 bg-white p-6 shadow-2xs sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-blue-700">
              {skdCourse.level} • {skdCourse.detail.duration}
            </p>
            <h3 className="mt-1 text-lg font-bold text-slate-950">
              {skdCourse.title} — Roadmap Belajar 5 Tahap
            </h3>
            <p className="mt-1 text-sm text-slate-600">
              Bingung harus mulai dari materi mana? Ikuti alur belajar bertahap
              dari tes diagnostik hingga Tryout CAT resmi.
            </p>
          </div>

          <div className="flex shrink-0 flex-wrap gap-2.5">
            <Button
              type="button"
              variant="outline"
              onClick={() => setSelectedCourse(skdCourse.detail)}
              className="border-slate-200 text-xs font-semibold text-slate-700 hover:bg-slate-50 sm:text-sm"
            >
              Lihat Silabus
            </Button>
            <Button
              asChild
              className="bg-slate-900 text-xs font-semibold text-white hover:bg-slate-800 sm:text-sm"
            >
              <Link href={APP_ROUTES.courseDetail(skdCourse.slug)}>
                Buka Roadmap SKD
              </Link>
            </Button>
          </div>
        </div>
      </div>

      <CourseDetailModal
        course={selectedCourse}
        onClose={() => setSelectedCourse(null)}
      />
    </section>
  );
}
