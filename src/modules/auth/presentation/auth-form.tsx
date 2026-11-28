"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, type FormEvent } from "react";
import {
  AlertCircle,
  CheckCircle2,
  Eye,
  EyeOff,
  Loader2,
  Lock,
  Mail,
  User as UserIcon,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  loginSchema,
  mapAuthErrorMessage,
  registerSchema,
  sanitizeRedirectPath,
} from "@/modules/auth/domain/auth-schema";
import { APP_ROUTES } from "@/shared/constants/app";
import { useToastStore } from "@/shared/stores/toast-store";
import { createSupabaseBrowserClient } from "@/shared/supabase/client";
import { fieldErrorsFromZod, type FieldErrors } from "@/shared/validation/form";

type AuthFormProps = {
  mode: "login" | "register";
  initialNext?: string;
  initialError?: string;
};

export function AuthForm({ mode, initialNext, initialError }: AuthFormProps) {
  const router = useRouter();
  const addToast = useToastStore((state) => state.addToast);
  const nextPath = sanitizeRedirectPath(initialNext, APP_ROUTES.tiuPractice);
  const isRegister = mode === "register";

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const [formError, setFormError] = useState<string | null>(initialError ?? null);
  const [verificationNotice, setVerificationNotice] = useState<string | null>(null);
  const [isSubmittingEmail, setIsSubmittingEmail] = useState(false);
  const [isSubmittingGoogle, setIsSubmittingGoogle] = useState(false);

  const isBusy = isSubmittingEmail || isSubmittingGoogle;

  const handleGoogleSignIn = async () => {
    setFormError(null);
    setVerificationNotice(null);

    const supabase = createSupabaseBrowserClient();
    if (!supabase) {
      setFormError("Konfigurasi Supabase belum lengkap. Periksa file .env Anda.");
      return;
    }

    setIsSubmittingGoogle(true);
    try {
      // Simpan tujuan redirect di cookie agar redirectTo OAuth bersih tanpa query string
      const secureFlag = window.location.protocol === "https:" ? "; Secure" : "";
      document.cookie = `wa_auth_next=${encodeURIComponent(nextPath)}; Path=/; Max-Age=600; SameSite=Lax${secureFlag}`;

      const callbackUrl = new URL(APP_ROUTES.authCallback, window.location.origin);

      const { error } = await supabase.auth.signInWithOAuth({
        provider: "google",
        options: {
          redirectTo: callbackUrl.toString(),
          queryParams: {
            access_type: "offline",
            prompt: "select_account",
          },
        },
      });

      if (error) {
        setFormError(mapAuthErrorMessage(error.message));
        setIsSubmittingGoogle(false);
      }
    } catch {
      setFormError("Gagal memulai login Google. Silakan coba lagi.");
      setIsSubmittingGoogle(false);
    }
  };

  const handleEmailSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFieldErrors({});
    setFormError(null);
    setVerificationNotice(null);

    const supabase = createSupabaseBrowserClient();
    if (!supabase) {
      setFormError("Konfigurasi Supabase belum lengkap. Periksa file .env Anda.");
      return;
    }

    if (isRegister) {
      const parsed = registerSchema.safeParse({
        fullName,
        email,
        password,
        confirmPassword,
      });
      if (!parsed.success) {
        setFieldErrors(fieldErrorsFromZod(parsed.error));
        return;
      }

      setIsSubmittingEmail(true);
      try {
        const callbackUrl = new URL(APP_ROUTES.authCallback, window.location.origin);
        callbackUrl.searchParams.set("next", nextPath);

        const { data, error } = await supabase.auth.signUp({
          email: parsed.data.email,
          password: parsed.data.password,
          options: {
            emailRedirectTo: callbackUrl.toString(),
            data: {
              full_name: parsed.data.fullName,
            },
          },
        });

        if (error) {
          setFormError(mapAuthErrorMessage(error.message));
          return;
        }

        if (data.session) {
          addToast("Akun berhasil dibuat. Selamat belajar di Wiyata Edu!", "success");
          router.push(nextPath);
          router.refresh();
          return;
        }

        setVerificationNotice(
          `Pendaftaran berhasil! Kami telah mengirim tautan konfirmasi ke ${parsed.data.email}. Silakan cek kotak masuk atau folder spam Anda lalu klik tautan tersebut untuk masuk.`,
        );
        addToast("Pendaftaran berhasil. Cek email untuk konfirmasi akun.", "success");
      } catch {
        setFormError("Terjadi kendala jaringan saat mendaftar. Silakan coba lagi.");
      } finally {
        setIsSubmittingEmail(false);
      }
      return;
    }

    const parsed = loginSchema.safeParse({ email, password });
    if (!parsed.success) {
      setFieldErrors(fieldErrorsFromZod(parsed.error));
      return;
    }

    setIsSubmittingEmail(true);
    try {
      const { error } = await supabase.auth.signInWithPassword({
        email: parsed.data.email,
        password: parsed.data.password,
      });

      if (error) {
        setFormError(mapAuthErrorMessage(error.message));
        return;
      }

      addToast("Berhasil masuk. Selamat berlatih!", "success");
      router.push(nextPath);
      router.refresh();
    } catch {
      setFormError("Terjadi kendala jaringan saat masuk. Silakan coba lagi.");
    } finally {
      setIsSubmittingEmail(false);
    }
  };

  const switchHref = initialNext
    ? `${isRegister ? APP_ROUTES.login : APP_ROUTES.register}?next=${encodeURIComponent(nextPath)}`
    : isRegister
      ? APP_ROUTES.login
      : APP_ROUTES.register;

  return (
    <div className="mx-auto grid w-full max-w-[1040px] overflow-hidden rounded-3xl border border-blue-100 bg-white shadow-xl shadow-blue-100/70 lg:grid-cols-12">
      {/* Kolom Ilustrasi & Keunggulan */}
      <div className="relative flex flex-col justify-between bg-[linear-gradient(150deg,#0f2454_0%,#1e3a8a_52%,#2563eb_100%)] p-8 text-white lg:col-span-5 lg:p-10">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-15 [background-image:radial-gradient(#ffffff_1px,transparent_1px)] [background-size:18px_18px]"
        />

        <div className="relative z-10">
          <span className="inline-flex rounded-full bg-white/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-blue-100">
            {isRegister ? "Mulai Persiapan CPNS" : "Selamat Datang Kembali"}
          </span>
          <h1 className="mt-4 text-2xl font-semibold leading-snug tracking-tight sm:text-3xl">
            {isRegister
              ? "Simpan Progres Latihan TIU Anda di Satu Akun"
              : "Lanjutkan Latihan SKD CPNS Anda"}
          </h1>
          <p className="mt-3 text-sm leading-6 text-blue-100/90">
            {isRegister
              ? "Daftar gratis dengan Google atau email untuk menyinkronkan skor 9 pola soal TIU, penanda ragu-ragu, dan pengulangan soal salah."
              : "Masuk untuk melihat riwayat latihan 9 pola soal TIU, tes diagnostik adaptif, serta melanjutkan progres belajar dari perangkat mana saja."}
          </p>
        </div>

        <div className="relative z-10 mt-8 flex flex-col items-center">
          <Image
            src={
              isRegister
                ? "/images/mascots/register-mascot.png"
                : "/images/mascots/login-mascot.png"
            }
            alt={
              isRegister
                ? "Ilustrasi belajar bersama Wiyata Edu"
                : "Ilustrasi persiapan CPNS Wiyata Edu"
            }
            width={420}
            height={380}
            priority
            className="h-auto w-full max-w-[290px] object-contain drop-shadow-xl"
          />
        </div>
      </div>

      {/* Kolom Form Autentikasi */}
      <div className="flex flex-col justify-center p-6 sm:p-10 lg:col-span-7">
        <div className="mx-auto w-full max-w-[430px]">
          <h2 className="text-2xl font-semibold text-slate-950">
            {isRegister ? "Buat Akun Wiyata Edu" : "Masuk ke Akun"}
          </h2>
          <p className="mt-1.5 text-sm text-slate-600">
            {isRegister ? "Sudah punya akun? " : "Belum punya akun? "}
            <Link
              href={switchHref}
              className="font-semibold text-blue-700 underline underline-offset-4 hover:text-blue-800"
            >
              {isRegister ? "Masuk di sini" : "Daftar gratis"}
            </Link>
          </p>

          {formError && (
            <div
              role="alert"
              className="mt-5 flex items-start gap-2.5 rounded-xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-900"
            >
              <AlertCircle className="mt-0.5 size-4 shrink-0 text-rose-600" aria-hidden />
              <span>{formError}</span>
            </div>
          )}

          {verificationNotice && (
            <div
              role="status"
              className="mt-5 flex items-start gap-2.5 rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-900"
            >
              <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-emerald-600" aria-hidden />
              <span>{verificationNotice}</span>
            </div>
          )}

          {/* Tombol Google OAuth */}
          <div className="mt-6">
            <Button
              type="button"
              variant="outline"
              disabled={isBusy}
              onClick={handleGoogleSignIn}
              className="h-11 w-full gap-2.5 border-slate-200 bg-white text-sm font-semibold text-slate-800 shadow-xs hover:bg-slate-50"
            >
              {isSubmittingGoogle ? (
                <Loader2 className="size-4 animate-spin text-blue-600" aria-hidden />
              ) : (
                <GoogleLogoIcon />
              )}
              Lanjutkan dengan Google
            </Button>
          </div>

          <div className="my-6 flex items-center gap-3">
            <div className="h-px flex-1 bg-slate-200" />
            <span className="text-xs font-medium uppercase tracking-wider text-slate-400">
              atau dengan email
            </span>
            <div className="h-px flex-1 bg-slate-200" />
          </div>

          <form onSubmit={handleEmailSubmit} noValidate className="space-y-4">
            {isRegister && (
              <div>
                <label
                  htmlFor="auth-full-name"
                  className="block text-sm font-medium text-slate-800"
                >
                  Nama Lengkap
                </label>
                <div className="relative mt-1.5">
                  <UserIcon
                    className="pointer-events-none absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-slate-400"
                    aria-hidden
                  />
                  <input
                    id="auth-full-name"
                    name="fullName"
                    type="text"
                    autoComplete="name"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Contoh: Nadia Putri"
                    className={cn(
                      "h-11 w-full rounded-xl border bg-white pl-10 pr-3.5 text-sm text-slate-950 outline-none transition focus:ring-3",
                      fieldErrors.fullName
                        ? "border-rose-400 focus:border-rose-500 focus:ring-rose-200/70"
                        : "border-slate-200 focus:border-blue-500 focus:ring-blue-100",
                    )}
                  />
                </div>
                {fieldErrors.fullName?.[0] && (
                  <p className="mt-1 text-xs font-medium text-rose-600">
                    {fieldErrors.fullName[0]}
                  </p>
                )}
              </div>
            )}

            <div>
              <label
                htmlFor="auth-email"
                className="block text-sm font-medium text-slate-800"
              >
                Alamat Email
              </label>
              <div className="relative mt-1.5">
                <Mail
                  className="pointer-events-none absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-slate-400"
                  aria-hidden
                />
                <input
                  id="auth-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="nama@email.com"
                  className={cn(
                    "h-11 w-full rounded-xl border bg-white pl-10 pr-3.5 text-sm text-slate-950 outline-none transition focus:ring-3",
                    fieldErrors.email
                      ? "border-rose-400 focus:border-rose-500 focus:ring-rose-200/70"
                      : "border-slate-200 focus:border-blue-500 focus:ring-blue-100",
                  )}
                />
              </div>
              {fieldErrors.email?.[0] && (
                <p className="mt-1 text-xs font-medium text-rose-600">
                  {fieldErrors.email[0]}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="auth-password"
                className="block text-sm font-medium text-slate-800"
              >
                Kata Sandi
              </label>
              <div className="relative mt-1.5">
                <Lock
                  className="pointer-events-none absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-slate-400"
                  aria-hidden
                />
                <input
                  id="auth-password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete={isRegister ? "new-password" : "current-password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder={isRegister ? "Minimal 8 karakter" : "Masukkan kata sandi"}
                  className={cn(
                    "h-11 w-full rounded-xl border bg-white pl-10 pr-11 text-sm text-slate-950 outline-none transition focus:ring-3",
                    fieldErrors.password
                      ? "border-rose-400 focus:border-rose-500 focus:ring-rose-200/70"
                      : "border-slate-200 focus:border-blue-500 focus:ring-blue-100",
                  )}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((prev) => !prev)}
                  aria-label={
                    showPassword ? "Sembunyikan kata sandi" : "Lihat kata sandi"
                  }
                  className="absolute right-3 top-1/2 -translate-y-1/2 rounded-md p-1 text-slate-400 hover:bg-slate-100 hover:text-slate-700"
                >
                  {showPassword ? (
                    <EyeOff className="size-4" aria-hidden />
                  ) : (
                    <Eye className="size-4" aria-hidden />
                  )}
                </button>
              </div>
              {fieldErrors.password?.[0] && (
                <p className="mt-1 text-xs font-medium text-rose-600">
                  {fieldErrors.password[0]}
                </p>
              )}
            </div>

            {isRegister && (
              <div>
                <label
                  htmlFor="auth-confirm-password"
                  className="block text-sm font-medium text-slate-800"
                >
                  Konfirmasi Kata Sandi
                </label>
                <div className="relative mt-1.5">
                  <Lock
                    className="pointer-events-none absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-slate-400"
                    aria-hidden
                  />
                  <input
                    id="auth-confirm-password"
                    name="confirmPassword"
                    type={showPassword ? "text" : "password"}
                    autoComplete="new-password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="Ulangi kata sandi"
                    className={cn(
                      "h-11 w-full rounded-xl border bg-white pl-10 pr-3.5 text-sm text-slate-950 outline-none transition focus:ring-3",
                      fieldErrors.confirmPassword
                        ? "border-rose-400 focus:border-rose-500 focus:ring-rose-200/70"
                        : "border-slate-200 focus:border-blue-500 focus:ring-blue-100",
                    )}
                  />
                </div>
                {fieldErrors.confirmPassword?.[0] && (
                  <p className="mt-1 text-xs font-medium text-rose-600">
                    {fieldErrors.confirmPassword[0]}
                  </p>
                )}
              </div>
            )}

            <Button
              type="submit"
              disabled={isBusy}
              className="mt-2 h-11 w-full bg-blue-600 text-sm font-semibold text-white shadow-md shadow-blue-200/60 hover:bg-blue-700"
            >
              {isSubmittingEmail && (
                <Loader2 className="size-4 animate-spin" aria-hidden />
              )}
              {isRegister ? "Daftar Sekarang" : "Masuk"}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}

function GoogleLogoIcon() {
  return (
    <svg className="size-4 shrink-0" viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="#4285F4"
        d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17Z"
      />
      <path
        fill="#34A853"
        d="M12 24c3.3 0 6.08-1.09 8.1-2.96l-3.88-3.05c-1.1.74-2.51 1.18-4.22 1.18-3.24 0-5.98-2.19-6.96-5.14H1.04v3.14C3.05 21.15 7.2 24 12 24Z"
      />
      <path
        fill="#FBBC05"
        d="M5.04 14.03a7.17 7.17 0 0 1 0-4.06V6.83H1.04a11.98 11.98 0 0 0 0 10.34l4-3.14Z"
      />
      <path
        fill="#EA4335"
        d="M12 4.83c1.79 0 3.4.62 4.66 1.82l3.49-3.49C18.07 1.19 15.3 0 12 0 7.2 0 3.05 2.85 1.04 6.83l4 3.14C6.02 7.02 8.76 4.83 12 4.83Z"
      />
    </svg>
  );
}

