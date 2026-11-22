import { APP_ROUTES } from "@/shared/constants/app";
import {
  TRYOUT_MODE_CONFIGS,
  type TryoutEvaluation,
} from "./tryout-config";

export type ReadinessLevel = "competitive" | "passing" | "needs_focus";

export interface StudyActionStep {
  id: string;
  priority: "high" | "medium" | "low";
  badge: string;
  title: string;
  detail: string;
  primaryHref: string;
  primaryLabel: string;
  sprintHref?: string;
}

export interface StudyRecommendationPlan {
  readinessLevel: ReadinessLevel;
  readinessLabel: string;
  readinessSummary: string;
  timeAudit: {
    status: "optimal" | "slow" | "incomplete";
    label: string;
    advice: string;
  };
  actionSteps: StudyActionStep[];
}

/**
 * Menghasilkan rencana belajar otomatis (Smart Study Plan) berdasarkan
 * skor ambang batas subtes, kecepatan pengerjaan, dan pola terlemah peserta.
 */
export function buildStudyRecommendationPlan(
  evaluation: TryoutEvaluation,
): StudyRecommendationPlan {
  const modeCfg = TRYOUT_MODE_CONFIGS[evaluation.mode];
  const scoreRatio =
    evaluation.maxScore > 0 ? evaluation.totalScore / evaluation.maxScore : 0;

  let readinessLevel: ReadinessLevel;
  let readinessLabel: string;
  let readinessSummary: string;

  if (!evaluation.passed) {
    readinessLevel = "needs_focus";
    readinessLabel = "Prioritas Kejar Ambang Batas (PG)";
    readinessSummary = `Fokus utama Anda adalah menutup selisih passing grade pada ${evaluation.failedSubtests.join(" & ")} sebelum mengejar variasi soal sulit lainnya.`;
  } else if (scoreRatio >= 0.72) {
    readinessLevel = "competitive";
    readinessLabel = "Siap Bersaing Peringkat Tinggi";
    readinessSummary =
      "Seluruh subtes sudah melampaui ambang batas dengan skor total kompetitif. Pertahankan konsistensi dan minimalkan kesalahan ceroboh pada pola tersulit.";
  } else {
    readinessLevel = "passing";
    readinessLabel = "Lolos PG — Perlu Dongkrak Peringkat";
    readinessSummary =
      "Anda sudah aman di ambang batas minimal, namun persaingan formasi membutuhkan margin nilai lebih tinggi (+40–70 poin di atas PG).";
  }

  // Audit waktu & kelengkapan jawaban
  const totalUnanswered = Object.values(evaluation.subtests).reduce(
    (sum, s) => sum + s.unansweredCount,
    0,
  );
  const targetSecPerQuestion = Math.round(
    modeCfg.durationSec / modeCfg.totalQuestions,
  );

  let timeAudit: StudyRecommendationPlan["timeAudit"];
  if (totalUnanswered >= 5) {
    timeAudit = {
      status: "incomplete",
      label: `${totalUnanswered} Soal Terlewat Kosong`,
      advice:
        "Di sistem CAT BKN tidak ada pengurangan nilai untuk jawaban salah. Pastikan seluruh soal terisi di 5 menit terakhir, dan langsung tandai Ragu-Ragu bila hitungan memakan > 60 detik.",
    };
  } else if (evaluation.avgSecondsPerAnswered > targetSecPerQuestion + 12) {
    timeAudit = {
      status: "slow",
      label: `Ritme Agak Lambat (${evaluation.avgSecondsPerAnswered} dtk/soal)`,
      advice: `Target aman SKD adalah ~${targetSecPerQuestion} dtk/soal. Latih refleks eksekusi cepat lewat sesi Sprint Drill 10 Menit setiap hari.`,
    };
  } else {
    timeAudit = {
      status: "optimal",
      label: `Ritme Efisien (${evaluation.avgSecondsPerAnswered} dtk/soal)`,
      advice:
        "Kecepatan manajemen waktu Anda sudah sangat baik dan selaras dengan batas durasi standar ujian CAT BKN.",
    };
  }

  const actionSteps: StudyActionStep[] = [];

  // 1. Prioritas subtes gagal PG
  for (const sub of evaluation.failedSubtests) {
    const st = evaluation.subtests[sub];
    const deficit = Math.abs(st.gapToPassing);
    const neededQuestions =
      sub === "TKP" ? Math.ceil(deficit / 2) : Math.ceil(deficit / 5);

    const practiceHref =
      sub === "TWK"
        ? APP_ROUTES.twkPractice
        : sub === "TIU"
          ? APP_ROUTES.tiuPractice
          : APP_ROUTES.tkpPractice;

    actionSteps.push({
      id: `pg-${sub}`,
      priority: "high",
      badge: `Wajib Kejar PG ${sub}`,
      title: `Tutup Defisit ${deficit} Poin di ${st.label}`,
      detail:
        sub === "TKP"
          ? `Anda butuh tambahan minimal ${deficit} poin lagi. Latih kepekaan opsi bernilai 5 pada ${neededQuestions}+ skenario kasus pelayanan & profesionalisme.`
          : `Anda hanya butuh sekitar ${neededQuestions} jawaban benar tambahan (${deficit} poin) untuk lolos ambang batas ${st.passingGrade}.`,
      primaryHref: practiceHref,
      primaryLabel: `Buka Bank Soal ${sub}`,
      sprintHref: APP_ROUTES.sprint,
    });
  }

  // 2. Fokus 2 pola terlemah dari analisis sesi ini
  for (const weak of evaluation.weakestPatterns.slice(0, 2)) {
    actionSteps.push({
      id: `weak-${weak.subtest}-${weak.patternId}`,
      priority: evaluation.failedSubtests.includes(weak.subtest)
        ? "high"
        : "medium",
      badge: `Akurasi Terendah ${weak.subtest} (${weak.accuracyPct}%)`,
      title: `Bedah Ulang Pola: ${weak.patternLabel}`,
      detail: `Perolehan poin pada pola ini baru ${weak.earnedPoints}/${weak.maxPoints}. Pelajari cheat sheet trik cepat lalu uji dengan Sprint Drill 10 menit.`,
      primaryHref: weak.practiceHref,
      primaryLabel: "Latih Pola & Cheat Sheet",
      sprintHref: APP_ROUTES.sprintForPattern(
        weak.subtest,
        weak.patternId,
        10,
      ),
    });
  }

  // 3. Rekomendasi kecepatan bila belum ada di list
  if (timeAudit.status !== "optimal" && actionSteps.length < 4) {
    actionSteps.push({
      id: "sprint-speed",
      priority: "medium",
      badge: "Manajemen Waktu CAT",
      title: "Latih Kecepatan dengan Sprint Drill 10 Menit",
      detail: timeAudit.advice,
      primaryHref: APP_ROUTES.sprint,
      primaryLabel: "Mulai Sprint Drill 10m",
    });
  }

  return {
    readinessLevel,
    readinessLabel,
    readinessSummary,
    timeAudit,
    actionSteps,
  };
}
