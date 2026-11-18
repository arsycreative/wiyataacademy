import type { CourseSummary } from "@/modules/catalog/application/dtos";

export type CourseRepository = {
  listPublished(): Promise<CourseSummary[]>;
  findPublishedBySlug(slug: string): Promise<CourseSummary | null>;
};
