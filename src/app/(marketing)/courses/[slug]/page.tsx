import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  Award,
  BarChart3,
  BookOpenCheck,
  Check,
  ClipboardList,
  Clock,
  Layers3,
  MessageSquareQuote,
  Star,
  Users,
} from "lucide-react";

import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { getAuthenticatedUser } from "@/modules/auth/infrastructure/profile-repository.server";
import { createCourseRepository } from "@/modules/catalog/infrastructure/course-repository.server";
import {
  courseThemeClasses,
  toCatalogCourse,
  type CourseDetail,
} from "@/modules/catalog/presentation/course-catalog-content";
import { ProgramEnrollButton } from "@/modules/catalog/presentation/program-enroll-button";
import { SkdLearningPathView } from "@/modules/catalog/presentation/skd-learning-path-view";
import { summarizeAllProgress } from "@/modules/question-bank/domain/subtest-summary";
import { createTiuProgressRepository } from "@/modules/question-bank/infrastructure/tiu-progress-repository.server";
import {
  sanitizePracticeProgress,
  type SanitizedPracticeProgress,
} from "@/modules/question-bank/infrastructure/tiu-progress-sync";
import { APP_ROUTES } from "@/shared/constants/app";

type CoursePageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({
  params,
}: CoursePageProps): Promise<Metadata> {
  const { slug } = await params;
  const course = await createCourseRepository().findPublishedBySlug(slug);

  if (!course) {
    return {
      title: "Program Tidak Ditemukan",
    };
  }

  return {
    title: course.title,
    description: course.description,
  };
}

export default async function CoursePage({ params }: CoursePageProps) {
  const { slug } = await params;
  const course = await createCourseRepository().findPublishedBySlug(slug);

  if (!course) {
    notFound();
  }

  const catalogCourse = toCatalogCourse(course);
  const { detail } = catalogCourse;
  const isSkdRoadmap = slug === "intensif-skd-cpns";
  const testimonials = getCourseTestimonials(detail.label);

  let initialCloudProgress: SanitizedPracticeProgress | null = null;
  if (isSkdRoadmap) {
    try {
      const user = await getAuthenticatedUser();
      if (user) {
        const res = await createTiuProgressRepository().findByUserId(user.id);
        initialCloudProgress = res.data;
      }
    } catch {
      initialCloudProgress = null;
    }
  }
  const initialSummaries = isSkdRoadmap
    ? summarizeAllProgress(initialCloudProgress ?? sanitizePracticeProgress({}))
    : null;

  return (
    <div className="flex min-h-screen flex-col bg-[#f8fbff] text-slate-900">
      <SiteHeader />

      <section className="bg-[linear-gradient(135deg,#1459f5_0%,#4d63f7_48%,#8f55f3_100%)] py-12 text-white sm:py-16">
        <div className="mx-auto w-full max-w-[1280px] px-5 sm:px-8 lg:px-10">
          <Button
            asChild
            variant="ghost"
            className="-ml-2 mb-6 text-white hover:bg-white/10 hover:text-white"
          >
            <Link href={APP_ROUTES.programs}>
              <ArrowLeft className="size-4" aria-hidden />
              Kembali ke Daftar Program
            </Link>
          </Button>

          <div className="grid gap-8 lg:grid-cols-[1fr_420px]">
            <div className="flex min-w-0 flex-col justify-center">
              <nav className="flex flex-wrap items-center gap-2 text-sm font-medium text-white/80">
                <Link href={APP_ROUTES.home} className="hover:text-white">
                  Beranda
                </Link>
                <span aria-hidden>&gt;</span>
                <span className="text-white/75">{detail.label}</span>
                <span aria-hidden>&gt;</span>
                <span className="line-clamp-1 font-semibold text-white">{detail.title}</span>
              </nav>

              <div className="mt-5 flex flex-wrap gap-2">
                <HeroPill icon={BookOpenCheck} label="Bimbel CASN" />
                <HeroPill icon={BarChart3} label={detail.level} />
                <HeroPill icon={Layers3} label={detail.lessons} />
              </div>

              <h1 className="mt-6 text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
                {detail.title}
              </h1>
              <p className="mt-3 text-base font-medium text-white/95 sm:text-lg">
                Mentor: {detail.instructors}
              </p>
              <p className="mt-5 max-w-2xl text-sm leading-relaxed text-white/90 sm:text-base">
                {detail.description}
              </p>
            </div>

            <div className="hidden lg:block">
              <CourseBanner course={detail} />
            </div>
          </div>
        </div>
      </section>

      <main className="mx-auto w-full max-w-[1280px] flex-1 px-5 py-10 sm:px-8 lg:px-10">
        <div className="grid gap-8 lg:grid-cols-[1fr_360px]">
          <div className="min-w-0 space-y-6">
            {isSkdRoadmap && initialSummaries && (
              <SkdLearningPathView
                initialCloudProgress={initialCloudProgress}
                initialSummaries={initialSummaries}
              />
            )}

            <section className="rounded-xl border border-blue-100 bg-white p-6 shadow-sm shadow-blue-100/50">
              <h2 className="text-xl font-bold text-slate-950">Yang akan kamu pelajari</h2>
              <ul className="mt-4 grid gap-3">
                {detail.outcomes.map((outcome) => (
                  <li
                    key={outcome}
                    className="flex gap-3 text-sm font-medium leading-relaxed text-slate-700 sm:text-base"
                  >
                    <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-blue-600 text-white">
                      <Check className="size-3.5" aria-hidden />
                    </span>
                    {outcome}
                  </li>
                ))}
              </ul>
            </section>

            <section className="rounded-xl border border-blue-100 bg-white p-6 shadow-sm shadow-blue-100/50">
              <h2 className="text-xl font-bold text-slate-950">Tentang roadmap ini</h2>
              <div className="mt-4 space-y-3 text-sm leading-relaxed text-slate-700 sm:text-base">
                {detail.about.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </section>

            {!isSkdRoadmap && (
              <section className="rounded-xl border border-blue-100 bg-white p-6 shadow-sm shadow-blue-100/50">
                <h2 className="text-xl font-bold text-slate-950">Silabus &amp; Rangkaian Materi</h2>
                <ol className="mt-4 grid gap-3">
                  {detail.syllabus.map((section, index) => (
                    <li
                      key={section.title}
                      className="grid gap-3 rounded-lg border border-slate-100 bg-slate-50/70 p-4 sm:grid-cols-[2.75rem_1fr_auto] sm:items-start"
                    >
                      <span className="flex size-9 items-center justify-center rounded-full bg-blue-600 text-sm font-semibold text-white">
                        {index + 1}
                      </span>
                      <div>
                        <h3 className="font-semibold text-slate-950">{section.title}</h3>
                        <p className="mt-1 text-sm leading-relaxed text-slate-600">
                          {section.description}
                        </p>
                      </div>
                      <span className="w-fit rounded-md bg-white px-3 py-1.5 text-xs font-semibold text-blue-700 shadow-sm shadow-blue-100/50">
                        {section.lessons}
                      </span>
                    </li>
                  ))}
                </ol>
              </section>
            )}

            <section className="rounded-xl border border-blue-100 bg-white p-6 shadow-sm shadow-blue-100/50">
              <div className="flex items-center gap-2">
                <MessageSquareQuote className="size-5 text-blue-600" aria-hidden />
                <h2 className="text-xl font-bold text-slate-950">Kata alumni peserta</h2>
              </div>
              <div className="mt-5 grid gap-4 md:grid-cols-3">
                {testimonials.map((testimonial) => (
                  <article
                    key={testimonial.name}
                    className="rounded-lg border border-slate-100 bg-slate-50 p-4"
                  >
                    <div className="flex gap-1 text-amber-500">
                      {Array.from({ length: 5 }).map((_, index) => (
                        <Star key={index} className="size-4 fill-current" aria-hidden />
                      ))}
                    </div>
                    <p className="mt-3 text-sm leading-6 text-slate-700">“{testimonial.quote}”</p>
                    <p className="mt-4 text-sm font-semibold text-slate-950">{testimonial.name}</p>
                    <p className="text-xs text-slate-500">{testimonial.context}</p>
                  </article>
                ))}
              </div>
            </section>
          </div>

          <aside className="space-y-6">
            <div className="rounded-xl border border-blue-100 bg-white p-6 shadow-md shadow-blue-100/40 lg:sticky lg:top-24 lg:self-start">
              <p className="text-xs font-semibold uppercase tracking-wider text-blue-600">
                {isSkdRoadmap ? "Ringkasan Learning Path" : "Ringkasan Program"}
              </p>
              <h3 className="mt-2 text-xl font-bold text-slate-950">{detail.title}</h3>
              <p className="mt-2 text-xs text-slate-500">
                {isSkdRoadmap
                  ? "Progres seluruh pilar, pola, aspek, dan simulasi CAT tersimpan otomatis."
                  : "Program persiapan terstruktur untuk seleksi periode berjalan"}
              </p>

              <div className="my-5 h-px bg-slate-100" />

              <dl className="divide-y divide-slate-100">
                <SidebarFact icon={BarChart3} label="Level" value={detail.level} />
                <SidebarFact icon={Clock} label="Durasi" value={detail.duration} />
                <SidebarFact icon={Layers3} label="Materi" value={detail.lessons} />
                <SidebarFact icon={ClipboardList} label="Latihan" value={detail.practiceTests} />
                <SidebarFact icon={Award} label="Standar" value="Kisi-Kisi KemenPAN-RB" />
                <SidebarFact icon={Users} label="Mentor" value={detail.instructors} />
              </dl>

              <ProgramEnrollButton programTitle={detail.title} className="mt-6 h-12 w-full" />
            </div>
          </aside>
        </div>
      </main>

      <div className="sticky bottom-0 z-40 flex items-center justify-between gap-4 border-t border-blue-100 bg-white/95 px-5 py-4 backdrop-blur lg:hidden">
        <div>
          <p className="text-xs text-slate-500">{detail.label}</p>
          <p className="text-sm font-bold text-slate-950">{detail.title}</p>
        </div>
        <ProgramEnrollButton programTitle={detail.title} />
      </div>

      <SiteFooter />
    </div>
  );
}

function getCourseTestimonials(label: string) {
  const context = label.includes("SKB") ? "Alumni SKB Instansi" : "Alumni SKD CPNS";

  return [
    {
      name: "Siti Rahma",
      context,
      quote: "Materinya runtut dan langsung fokus ke pola soal yang sering keluar.",
    },
    {
      name: "Bagus Pratama",
      context: "Alumni Bimbel",
      quote: "Latihan dan pembahasannya membantu saya memetakan topik lemah jauh sebelum hari H.",
    },
    {
      name: "Nadia Putri",
      context: "Peserta Aktif",
      quote: "Format belajar yang ringkas sangat membantu saat harus membagi waktu dengan pekerjaan.",
    },
  ];
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

function SidebarFact({
  icon: Icon,
  label,
  value,
}: {
  icon: typeof BarChart3;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center gap-3 py-3.5 text-sm text-slate-700">
      <Icon className="size-5 shrink-0 text-slate-900" aria-hidden />
      <dt className="sr-only">{label}</dt>
      <dd className="font-medium">{value}</dd>
    </div>
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
