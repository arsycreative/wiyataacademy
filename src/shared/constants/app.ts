export const APP_NAME = "Wiyata Academy";

export const APP_ROUTES = {
  home: "/",
  method: "/#metode",
  programs: "/#program",
  testimonials: "/#testimoni",
  faq: "/#faq",
  tiuPractice: "/latihan/tiu",
  tiuPatternPractice: (pattern: string) => `/latihan/tiu/${pattern}`,
  courseDetail: (slug: string) => `/program/${slug}`,
} as const;
