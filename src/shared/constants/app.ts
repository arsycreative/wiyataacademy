export const APP_NAME = "Wiyata Edu";

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
  tryout: "/tryout",
  sprint: "/sprint",
  sprintForPattern: (
    subtest: "TWK" | "TIU" | "TKP",
    pattern: string,
    duration: 10 | 12 | 15 = 10,
  ) =>
    `/sprint?subtest=${subtest}&pattern=${encodeURIComponent(pattern)}&duration=${duration}`,
  pricing: "/paket",
  terms: "/syarat-ketentuan",
  courseDetail: (slug: string) => `/courses/${slug}`,
  login: "/masuk",
  register: "/daftar",
  account: "/akun",
  admin: "/admin",
  adminOrders: "/admin/orders",
  adminUsers: "/admin/users",
  adminVouchers: "/admin/vouchers",
  authCallback: "/auth/callback",
} as const;
