import { expect, test } from "@playwright/test";

test("renders the CPNS SKD landing page", async ({ page }) => {
  await page.goto("/");

  await expect(
    page.getByRole("heading", {
      level: 1,
      name: /siap lolos seleksi skd cpns/i,
    }),
  ).toBeVisible();
  await expect(
    page.getByRole("heading", { name: /3 langkah belajar yang rapi/i }),
  ).toBeVisible();
  await expect(
    page.getByRole("heading", { name: /fokus persiapan skd cpns/i }),
  ).toBeVisible();
  await expect(
    page.getByRole("heading", { name: /cerita peserta yang lolos seleksi asn/i }),
  ).toBeVisible();
  await expect(
    page.getByRole("heading", { name: /pertanyaan umum/i }),
  ).toBeVisible();
});

test("renders CPNS program detail page", async ({ page }) => {
  await page.goto("/courses/intensif-skd-cpns");

  await expect(
    page.getByRole("heading", { level: 1, name: /intensif skd cpns/i }),
  ).toBeVisible();
  await expect(page.getByRole("heading", { name: /yang akan kamu pelajari/i })).toBeVisible();
  await expect(page.getByRole("heading", { name: /silabus & rangkaian materi/i })).toBeVisible();
  await expect(page.getByRole("button", { name: /daftar program ini/i }).first()).toBeVisible();
});

test("renders TWK separated pillar practice page and switches pillars", async ({ page }) => {
  await page.goto("/latihan/twk");

  await expect(
    page.getByRole("heading", { level: 1, name: /latihan soal twk/i }),
  ).toBeVisible();
  await expect(page.getByRole("heading", { name: /^nasionalisme$/i })).toBeVisible();

  await page.getByRole("button", { name: /bela negara/i }).click();
  await expect(page.getByRole("heading", { name: /^bela negara$/i })).toBeVisible();
});

test("renders TKP separated aspect practice page with 1–5 scoring and switches aspects", async ({ page }) => {
  await page.goto("/latihan/tkp");

  await expect(
    page.getByRole("heading", { level: 1, name: /latihan soal tkp/i }),
  ).toBeVisible();
  await expect(page.getByRole("heading", { name: /^pelayanan publik$/i })).toBeVisible();

  await page.getByRole("button", { name: /anti-radikalisme/i }).click();
  await expect(page.getByRole("heading", { name: /^anti-radikalisme$/i })).toBeVisible();
});
