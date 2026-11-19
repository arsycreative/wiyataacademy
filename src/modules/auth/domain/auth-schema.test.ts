import { describe, expect, it } from "vitest";

import {
  loginSchema,
  mapAuthErrorMessage,
  profileSchema,
  registerSchema,
  sanitizeRedirectPath,
} from "./auth-schema";

describe("auth-schema", () => {
  it("validates login credentials cleanly", () => {
    expect(
      loginSchema.safeParse({ email: "peserta@wiyata.id", password: "password123" }).success,
    ).toBe(true);
    expect(
      loginSchema.safeParse({ email: "bukan-email", password: "123" }).success,
    ).toBe(false);
  });

  it("validates matching confirmPassword on registration", () => {
    const valid = registerSchema.safeParse({
      fullName: "Nadia Putri",
      email: "nadia@wiyata.id",
      password: "PasswordKu123",
      confirmPassword: "PasswordKu123",
    });
    expect(valid.success).toBe(true);

    const mismatch = registerSchema.safeParse({
      fullName: "Nadia Putri",
      email: "nadia@wiyata.id",
      password: "PasswordKu123",
      confirmPassword: "Berbeda123",
    });
    expect(mismatch.success).toBe(false);
  });

  it("validates profile update schema", () => {
    expect(profileSchema.safeParse({ fullName: "Raka Pratama" }).success).toBe(true);
    expect(profileSchema.safeParse({ fullName: "A" }).success).toBe(false);
  });

  it("sanitizes redirect paths against open-redirect payloads", () => {
    expect(sanitizeRedirectPath("/latihan/tiu?pattern=silogisme")).toBe(
      "/latihan/tiu?pattern=silogisme",
    );
    expect(sanitizeRedirectPath("/akun")).toBe("/akun");
    expect(sanitizeRedirectPath("https://evil.example/steal", "/akun")).toBe("/akun");
    expect(sanitizeRedirectPath("//evil.example", "/akun")).toBe("/akun");
    expect(sanitizeRedirectPath("/\\evil.example", "/akun")).toBe("/akun");
    expect(sanitizeRedirectPath(undefined, "/latihan/tiu")).toBe("/latihan/tiu");
  });

  it("maps common Supabase auth errors to Indonesian messages", () => {
    expect(mapAuthErrorMessage("Invalid login credentials")).toContain("Email atau kata sandi salah");
    expect(mapAuthErrorMessage("Email not confirmed")).toContain("belum dikonfirmasi");
    expect(mapAuthErrorMessage("Unsupported provider: provider is not enabled")).toContain(
      "Google belum diaktifkan",
    );
    expect(mapAuthErrorMessage("Unable to exchange external code: 4/0Axyz")).toContain(
      "Client Secret Google",
    );
  });
});

