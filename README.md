# Wiyata Academy — Platform Bimbel & Latihan Adaptif SKD CPNS

Aplikasi web bimbingan belajar persiapan seleksi **SKD CPNS (TWK, TIU, TKP)** dan pendalaman **SKB**, dilengkapi bank soal **TIU SKD CPNS** terpisah per pola dengan alur belajar adaptif (*Adaptive Mastery*).

---

## Fitur Utama

### 1. Landing Page & Katalog Program (`/`, `/courses/[slug]`)
- **Ringkasan Metode Belajar 3 Tahap**: pemetaan bobot SKD, penguasaan konsep & trik cepat, serta evaluasi topik yang masih lemah.
- **Katalog Program Bimbel Interaktif**: carousel program utama (*Intensif SKD CPNS*), pratinjau cepat via modal detail, serta halaman detail kurikulum & silabus lengkap.
- **Testimoni Alumni & FAQ**: informasi terstruktur seputar persiapan seleksi CASN.

### 2. Latihan Soal Adaptif TIU SKD CPNS (`/latihan/tiu`)
- **Bank Soal Terpisah per Pola (1.510 Soal Tervalidasi)**:
  1. **Sinonim, Antonim, dan Akronim** — 460 soal (160 Sinonim, 150 Antonim, 150 Akronim)
  2. **Analogi Kata** — 150 soal (5 sub-pola × 30 soal)
  3. **Silogisme** — 150 soal (5 sub-pola × 30 soal)
  4. **Hitung Cepat** — 150 soal (5 sub-pola × 30 soal)
  5. **Perbandingan Kuantitatif** — 150 soal (5 sub-pola × 30 soal)
  6. **Penalaran Analitis Duduk Melingkar** — 150 soal (5 sub-pola × 30 soal)
  7. **Deret Angka** — 150 soal (5 sub-pola × 30 soal)
  8. **Analisis Tabel** — 150 soal (5 sub-pola × 30 soal)
  9. *Figural* (struktur siap diisi)
- **Alur Belajar Adaptif (*Adaptive Mastery*)**:
  - **Tes Diagnostik Singkat**: sampel soal acak lintas sub-pola & tingkat kesulitan untuk memetakan sub-pola terlemah dan merekomendasikan level awal.
  - **Jalur 3 Level Bertahap (`Mudah` → `Sedang` → `Sulit`)**: progres penguasaan per level dengan target kelulusan akurasi **≥ 80%**.
  - **Pengacakan Otomatis Soal & Pilihan (`A`–`E`)**: urutan soal maupun posisi opsi jawaban `A`–`E` diacak ulang setiap tes diagnostik, pengulangan soal salah, atau reset pola.
  - **Mode Tampilan Ganda**: pilihan tampilan **25 Soal / Halaman** atau **1 Soal per Layar (Mode CAT)** lengkap dengan pintasan keyboard (`A`–`E`, `←`/`→`, `R` untuk Ragu-ragu, `H` untuk Hint).
  - **Simpan Progres Otomatis (`localStorage`)** & **Deep-Link Pola via URL** (`/latihan/tiu?pattern=<id-pola>`).

---

## Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org) (App Router, React Compiler) & [React 19](https://react.dev)
- **Language**: TypeScript 5
- **Styling & UI**: Tailwind CSS v4, Radix UI / shadcn, Lucide Icons
- **State & Validation**: Zustand 5, Zod 4
- **Testing**: Vitest (Unit & Schema Validation) & Playwright (End-to-End)

---

## Struktur Proyek

```text
src/
├── app/
│   ├── (marketing)/
│   │   ├── page.tsx                  # Beranda Wiyata Academy
│   │   ├── courses/[slug]/page.tsx   # Detail program bimbel
│   │   └── latihan/tiu/page.tsx      # Latihan adaptif bank soal TIU
│   └── layout.tsx
├── components/
│   ├── layout/                       # Header, Footer, BrandLogo, ToastContainer
│   └── ui/                           # Komponen dasar UI
├── modules/
│   ├── catalog/                      # Domain, application, infrastructure & presentation katalog
│   └── question-bank/
│       ├── domain/question.ts        # Skema Zod & metadata 9 pola TIU
│       ├── data/tiu/                 # Bank soal TIU per pola & sub-pola + unit test
│       └── presentation/             # UI latihan adaptif & mode CAT
└── shared/                           # Konstanta rute, helper Result, store toast, validasi
```

---

## Menjalankan Proyek secara Lokal

1. **Instal dependensi**:
   ```bash
   npm install
   ```

2. **Jalankan server development**:
   ```bash
   npm run dev
   ```
   Buka [http://localhost:3000](http://localhost:3000) di browser.

3. **Verifikasi kualitas kode (Lint, Typecheck, & Unit Test)**:
   ```bash
   npm run check
   ```

### Daftar Script `package.json`

| Perintah | Deskripsi |
| :--- | :--- |
| `npm run dev` | Menjalankan server development Next.js |
| `npm run build` | Membuat build produksi |
| `npm run start` | Menjalankan server produksi hasil build |
| `npm run lint` | Menjalankan pemeriksaan ESLint |
| `npm run typecheck` | Memvalidasi tipe TypeScript (`tsc --noEmit`) |
| `npm run test:run` | Menjalankan seluruh unit test & validasi bank soal dengan Vitest |
| `npm run test:e2e` | Menjalankan pengujian End-to-End dengan Playwright |
| `npm run check` | Menjalankan `lint`, `typecheck`, dan `test:run` secara berurutan |
