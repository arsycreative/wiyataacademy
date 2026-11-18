import type { CourseLevel } from "@/modules/catalog/domain/course";

export type CourseSummary = {
  id: string;
  slug: string;
  categoryName: string;
  categorySlug: string;
  title: string;
  description: string;
  level: CourseLevel;
  duration: string;
  durationMinutes: number;
  lessonCount: number;
  enrollmentCount: number;
  priceCents: number;
  thumbnailUrl?: string | null;
  bannerUrl?: string | null;
  isFeatured: boolean;
};
