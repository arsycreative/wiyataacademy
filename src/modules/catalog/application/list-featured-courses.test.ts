import { describe, expect, it } from "vitest";

import { listFeaturedCourses } from "@/modules/catalog/application/list-featured-courses";
import type { CourseRepository } from "@/modules/catalog/application/ports";

const repository: CourseRepository = {
  async listPublished() {
    return [
      {
        id: "course_1",
        slug: "course-one",
        categoryName: "TOEFL",
        categorySlug: "toefl",
        title: "Course one",
        description: "Featured",
        level: "beginner",
        duration: "2 weeks",
        durationMinutes: 120,
        lessonCount: 10,
        enrollmentCount: 100,
        priceCents: 24900000,
        isFeatured: true,
      },
      {
        id: "course_2",
        slug: "course-two",
        categoryName: "UTBK",
        categorySlug: "utbk",
        title: "Course two",
        description: "Not featured",
        level: "advanced",
        duration: "4 weeks",
        durationMinutes: 240,
        lessonCount: 20,
        enrollmentCount: 50,
        priceCents: 29900000,
        isFeatured: false,
      },
      {
        id: "course_3",
        slug: "course-three",
        categoryName: "Bahasa Inggris",
        categorySlug: "bahasa-inggris",
        title: "Course three",
        description: "Featured",
        level: "intermediate",
        duration: "3 weeks",
        durationMinutes: 180,
        lessonCount: 14,
        enrollmentCount: 80,
        priceCents: 19900000,
        isFeatured: true,
      },
    ];
  },
  async findPublishedBySlug() {
    return null;
  },
};

describe("listFeaturedCourses", () => {
  it("returns only featured courses up to the requested limit", async () => {
    const courses = await listFeaturedCourses(repository, 1);

    expect(courses).toHaveLength(1);
    expect(courses[0]?.id).toBe("course_1");
  });
});
