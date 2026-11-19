export const APP_NAME = "Wiyata Academy";

export const APP_ROUTES = {
  home: "/",
  method: "/#metode",
  programs: "/#program",
  testimonials: "/#testimoni",
  faq: "/#faq",
  tiuPractice: "/latihan/tiu",
  tiuPatternPractice: (pattern: string) =>
    `/latihan/tiu?pattern=${encodeURIComponent(pattern)}`,
  twkPractice: "/latihan/twk",
  twkPatternPractice: (pattern: string) =>
    `/latihan/twk?pattern=${encodeURIComponent(pattern)}`,
  tkpPractice: "/latihan/tkp",
  tkpPatternPractice: (pattern: string) =>
    `/latihan/tkp?pattern=${encodeURIComponent(pattern)}`,
  courseDetail: (slug: string) => `/courses/${slug}`,
  login: "/masuk",
  register: "/daftar",
  account: "/akun",
  authCallback: "/auth/callback",
} as const;
