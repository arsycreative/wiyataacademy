import "server-only";

import type { CourseSummary } from "@/modules/catalog/application/dtos";
import type { CourseRepository } from "@/modules/catalog/application/ports";

const publishedCourses: CourseSummary[] = [
  {
    id: "course_skd_intensif",
    slug: "intensif-skd-cpns",
    categoryName: "SKD CPNS",
    categorySlug: "skd-cpns",
    title: "Intensif SKD CPNS (TWK, TIU & TKP)",
    description:
      "Roadmap belajar interaktif 5 tahap untuk menembus ambang batas dan meraih skor tinggi SKD CPNS.",
    level: "beginner",
    duration: "5 tahap terstruktur",
    durationMinutes: 720,
    lessonCount: 20,
    enrollmentCount: 4820,
    priceCents: 27900000,
    thumbnailUrl: "/images/courses/asn-cpns-thumbnail.svg",
    bannerUrl: "/images/courses/asn-cpns-banner.svg",
    isFeatured: true,
  },
];

export function createMockCourseRepository(): CourseRepository {
  return {
    async listPublished() {
      return publishedCourses;
    },
    async findPublishedBySlug(slug: string) {
      return publishedCourses.find((course) => course.slug === slug) ?? null;
    },
  };
}
