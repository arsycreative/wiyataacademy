export type CourseLevel = "beginner" | "intermediate" | "advanced";

export type CourseStatus = "draft" | "published" | "archived";

export type CourseId = string;

export type Course = {
  id: CourseId;
  slug: string;
  title: string;
  description: string;
  level: CourseLevel;
  status: CourseStatus;
  duration: string;
  lessonCount: number;
  enrollmentCount: number;
  isFeatured: boolean;
};
