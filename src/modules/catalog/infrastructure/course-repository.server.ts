import "server-only";

import type { CourseRepository } from "@/modules/catalog/application/ports";
import { createMockCourseRepository } from "@/modules/catalog/infrastructure/course-repository.mock";

export function createCourseRepository(): CourseRepository {
  return createMockCourseRepository();
}
