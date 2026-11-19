import { z } from "zod";

import { APP_ROUTES } from "@/shared/constants/app";

export const loginSchema = z.object({
  email: z
    .string()
    .trim()
    .min(1, "Email wajib diisi")
    .email("Format email tidak valid"),
  password: z
    .string()
    .min(6, "Kata sandi minimal 6 karakter"),
});

export const registerSchema = z
  .object({
    fullName: z
      .string()
      .trim()
      .min(2, "Nama lengkap minimal 2 karakter")
      .max(80, "Nama lengkap maksimal 80 karakter"),
    email: z
      .string()
      .trim()
      .min(1, "Email wajib diisi")
      .email("Format email tidak valid"),
    password: z
      .string()
      .min(8, "Kata sandi minimal 8 karakter")
      .max(72, "Kata sandi maksimal 72 karakter"),
    confirmPassword: z
      .string()
      .min(1, "Konfirmasi kata sandi wajib diisi"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Konfirmasi kata sandi tidak cocok",
    path: ["confirmPassword"],
  });

export const profileSchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(2, "Nama lengkap minimal 2 karakter")
    .max(80, "Nama lengkap maksimal 80 karakter"),
});

export type LoginInput = z.infer<typeof loginSchema>;
export type RegisterInput = z.infer<typeof registerSchema>;
export type ProfileInput = z.infer<typeof profileSchema>;

/**
 * Memastikan target redirect setelah autentikasi hanya menuju path internal
 * untuk mencegah open-redirect vulnerability.
 */
export function sanitizeRedirectPath(
  nextParam: string | null | undefined,
  fallback: string = APP_ROUTES.tiuPractice,
): string {
  if (!nextParam) return fallback;
  const trimmed = nextParam.trim();
  if (!trimmed.startsWith("/") || trimmed.startsWith("//") || trimmed.startsWith("/\\")) {
    return fallback;
  }
  return trimmed;
}

/**
 * Menerjemahkan pesan error autentikasi Supabase ke bahasa Indonesia yang jelas.
 */
export function mapAuthErrorMessage(rawMessage: string): string {
  const normalized = rawMessage.toLowerCase();

  if (normalized.includes("invalid login credentials")) {
    return "Email atau kata sandi salah. Silakan periksa kembali.";
  }
  if (normalized.includes("email not confirmed")) {
    return "Email Anda belum dikonfirmasi. Silakan cek kotak masuk atau folder spam email Anda.";
  }
  if (normalized.includes("user already registered")) {
    return "Email ini sudah terdaftar. Silakan masuk menggunakan akun Anda.";
  }
  if (normalized.includes("provider is not enabled")) {
    return "Login Google belum diaktifkan di Dashboard Supabase (Authentication → Providers → Google).";
  }
  if (normalized.includes("password should be at least")) {
    return "Kata sandi terlalu pendek. Gunakan minimal 8 karakter.";
  }
  if (normalized.includes("rate limit") || normalized.includes("too many requests")) {
    return "Terlalu banyak percobaan. Silakan tunggu beberapa saat sebelum mencoba lagi.";
  }
  if (normalized.includes("unable to validate email address")) {
    return "Format alamat email tidak valid.";
  }
  if (normalized.includes("unable to exchange external code")) {
    return "Gagal menukar kode OAuth Google di server Supabase. Periksa kembali Client Secret Google pada Dashboard Supabase (Authentication → Providers → Google) agar sesuai dan bebas spasi, lalu coba masuk ulang.";
  }
  if (normalized.includes("access_denied") || normalized.includes("cancel")) {
    return "Proses masuk dengan Google dibatalkan.";
  }

  return rawMessage || "Terjadi kendala saat memproses autentikasi. Silakan coba lagi.";
}

