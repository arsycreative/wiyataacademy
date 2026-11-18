import type { CourseSummary } from "@/modules/catalog/application/dtos";
import type { CourseRepository } from "@/modules/catalog/application/ports";

export async function listFeaturedCourses(
  courseRepository: CourseRepository,
  limit = 3
): Promise<CourseSummary[]> {
  const courses = await courseRepository.listPublished();

  return courses.filter((course) => course.isFeatured).slice(0, limit);
}
