import type { AllProgressSummaries } from "@/modules/question-bank/domain/progress-summary-types";
import type { TryoutHistoryRecord } from "@/modules/tryout/infrastructure/tryout-storage";
import { APP_ROUTES } from "@/shared/constants/app";

export type RoadmapStageId = "diagnostik" | "twk" | "tiu" | "tkp" | "tryout-resmi";
export type RoadmapStageStatus = "completed" | "in_progress" | "not_started";

export type RoadmapModuleItem = {
  id: string;
  order: number;
  label: string;
  answered: number;
  total: number;
  completionPct: number;
  metricLabel: string | null;
  completed: boolean;
  href: string;
};

export type RoadmapStage = {
  id: RoadmapStageId;
  step: number;
  badge: string;
  title: string;
  description: string;
  targetSummary: string;
  status: RoadmapStageStatus;
  completionPct: number;
  statsLabel: string;
  accuracyLabel: string | null;
  primaryCtaLabel: string;
  primaryHref: string;
  modules: RoadmapModuleItem[];
};

export type RoadmapNextAction = {
  stageId: RoadmapStageId;
  stageStep: number;
  stageTitle: string;
  label: string;
  description: string;
  href: string;
};

export type SkdLearningPathState = {
  stages: RoadmapStage[];
  completedStagesCount: number;
  totalStages: number;
  overallPracticePct: number;
  totalAnswered: number;
  totalQuestions: number;
  totalTryouts: number;
  passedOfficialCount: number;
  bestOfficialScore: number | null;
  nextAction: RoadmapNextAction;
};

function calcPct(part: number, total: number): number {
  if (total <= 0) return 0;
  return Math.min(100, Math.round((part / total) * 100));
}

export function computeSkdLearningPath(
  summaries: AllProgressSummaries,
  tryoutHistory: readonly TryoutHistoryRecord[],
): SkdLearningPathState {
  const { twk, tiu, tkp } = summaries;

  // Tahap 1: Diagnostik Awal (minimal 1 simulasi CAT — Mini 35 atau Resmi 110)
  const hasDiagnostic = tryoutHistory.length > 0;
  const latestTryout = tryoutHistory[0] ?? null;
  const diagnosticStage: RoadmapStage = {
    id: "diagnostik",
    step: 1,
    badge: "Diagnostik",
    title: "Diagnostik Awal & Pengenalan CAT",
    description:
      "Ukur skor dasar TWK, TIU, dan TKP sekaligus rasakan ritme timer CAT BKN sebelum mulai mendalami materi tiap subtes.",
    targetSummary: "Target: selesaikan minimal 1 simulasi CAT (Mini 35 soal atau Resmi 110 soal)",
    status: hasDiagnostic ? "completed" : "not_started",
    completionPct: hasDiagnostic ? 100 : 0,
    statsLabel: hasDiagnostic
      ? `${tryoutHistory.length} sesi selesai`
      : "Belum ada sesi diagnostik",
    accuracyLabel: latestTryout
      ? `Terakhir: ${latestTryout.totalScore}/${latestTryout.maxScore}`
      : null,
    primaryCtaLabel: hasDiagnostic ? "Uji Ulang di Tryout CAT" : "Mulai Tes Diagnostik",
    primaryHref: APP_ROUTES.tryout,
    modules: [
      {
        id: "diag-mini",
        order: 1,
        label: "Mini Tryout CAT Cepat (35 Soal • 30 Menit)",
        answered: tryoutHistory.some((h) => h.mode === "mini") ? 1 : 0,
        total: 1,
        completionPct: tryoutHistory.some((h) => h.mode === "mini") ? 100 : 0,
        metricLabel: tryoutHistory.some((h) => h.mode === "mini") ? "Selesai" : "Disarankan awal",
        completed: tryoutHistory.some((h) => h.mode === "mini"),
        href: APP_ROUTES.tryout,
      },
      {
        id: "diag-official",
        order: 2,
        label: "Simulasi Resmi CAT SKD (110 Soal • 100 Menit)",
        answered: tryoutHistory.some((h) => h.mode === "official") ? 1 : 0,
        total: 1,
        completionPct: tryoutHistory.some((h) => h.mode === "official") ? 100 : 0,
        metricLabel: tryoutHistory.some((h) => h.mode === "official")
          ? "Selesai"
          : "Standar BKN",
        completed: tryoutHistory.some((h) => h.mode === "official"),
        href: APP_ROUTES.tryout,
      },
    ],
  };

  // Tahap 2: TWK (5 Pilar • 200 Soal)
  const twkModules: RoadmapModuleItem[] = twk.patterns.map((p) => {
    const pct = calcPct(p.answeredCount, p.totalQuestions);
    const acc = p.answeredCount > 0 ? calcPct(p.correctCount, p.answeredCount) : null;
    return {
      id: p.patternId,
      order: p.order,
      label: p.label,
      answered: p.answeredCount,
      total: p.totalQuestions,
      completionPct: pct,
      metricLabel: acc !== null ? `${acc}% benar` : null,
      completed: p.answeredCount >= p.totalQuestions && p.totalQuestions > 0,
      href: APP_ROUTES.twkPatternPractice(p.patternId),
    };
  });
  const firstOpenTwk = twkModules.find((m) => !m.completed);
  const twkPct = calcPct(twk.totalAnswered, twk.totalQuestions);
  const twkAcc = twk.totalAnswered > 0 ? calcPct(twk.totalCorrect, twk.totalAnswered) : null;
  const twkStage: RoadmapStage = {
    id: "twk",
    step: 2,
    badge: "TWK • PG 65",
    title: "Penguasaan TWK (5 Pilar Kebangsaan)",
    description:
      "Latih penalaran studi kasus pada 5 pilar utama: Nasionalisme, Integritas, Bela Negara, Pilar Negara, dan Bahasa Negara.",
    targetSummary: `Target: kuasai ${twk.totalQuestions.toLocaleString("id-ID")} soal di 5 pilar (Passing Grade BKN ≥ 65 / 150)`,
    status:
      twk.totalAnswered >= twk.totalQuestions
        ? "completed"
        : twk.totalAnswered > 0
          ? "in_progress"
          : "not_started",
    completionPct: twkPct,
    statsLabel: `${twk.totalAnswered}/${twk.totalQuestions} soal`,
    accuracyLabel: twkAcc !== null ? `Akurasi ${twkAcc}%` : null,
    primaryCtaLabel:
      twk.totalAnswered === 0
        ? "Mulai Pilar 1 TWK"
        : firstOpenTwk
          ? `Lanjutkan ${firstOpenTwk.label}`
          : "Ulangi Bank Soal TWK",
    primaryHref: firstOpenTwk?.href ?? APP_ROUTES.twkPractice,
    modules: twkModules,
  };

  // Tahap 3: TIU (9 Pola • 1.820 Soal)
  const tiuModules: RoadmapModuleItem[] = tiu.patterns.map((p) => {
    const pct = calcPct(p.answeredCount, p.totalQuestions);
    const acc = p.answeredCount > 0 ? calcPct(p.correctCount, p.answeredCount) : null;
    return {
      id: p.patternId,
      order: p.order,
      label: p.label,
      answered: p.answeredCount,
      total: p.totalQuestions,
      completionPct: pct,
      metricLabel: acc !== null ? `${acc}% benar` : null,
      completed: p.answeredCount >= p.totalQuestions && p.totalQuestions > 0,
      href: APP_ROUTES.tiuPatternPractice(p.patternId),
    };
  });
  const firstOpenTiu = tiuModules.find((m) => !m.completed);
  const tiuPct = calcPct(tiu.totalAnswered, tiu.totalQuestions);
  const tiuAcc = tiu.totalAnswered > 0 ? calcPct(tiu.totalCorrect, tiu.totalAnswered) : null;
  const tiuStage: RoadmapStage = {
    id: "tiu",
    step: 3,
    badge: "TIU • PG 80",
    title: "Penguasaan TIU (9 Pola Verbal, Numerik & Figural)",
    description:
      "Bangun kecepatan dan ketepatan menaklukkan 9 pola TIU sesuai FR BKN: silogisme & penalaran induktif, analitis (urutan/duduk/tabel), hitung cepat, kecukupan data, optimasi biaya, deret angka, dan figural.",
    targetSummary: "Target: kuasai 9 pola bank soal TIU (Passing Grade BKN ≥ 80 / 175)",
    status:
      tiu.totalAnswered >= tiu.totalQuestions
        ? "completed"
        : tiu.totalAnswered > 0
          ? "in_progress"
          : "not_started",
    completionPct: tiuPct,
    statsLabel: `${tiu.totalAnswered.toLocaleString("id-ID")}/${tiu.totalQuestions.toLocaleString("id-ID")} soal`,
    accuracyLabel: tiuAcc !== null ? `Akurasi ${tiuAcc}%` : null,
    primaryCtaLabel:
      tiu.totalAnswered === 0
        ? "Mulai Pola 1 TIU"
        : firstOpenTiu
          ? `Lanjutkan ${firstOpenTiu.label}`
          : "Ulangi Bank Soal TIU",
    primaryHref: firstOpenTiu?.href ?? APP_ROUTES.tiuPractice,
    modules: tiuModules,
  };

  // Tahap 4: TKP (6 Aspek • 240 Soal)
  const tkpModules: RoadmapModuleItem[] = tkp.patterns.map((p) => {
    const pct = calcPct(p.answeredCount, p.totalQuestions);
    const pointPct =
      p.answeredCount > 0 && p.maxAnsweredPoints > 0
        ? calcPct(p.earnedPoints, p.maxAnsweredPoints)
        : null;
    return {
      id: p.patternId,
      order: p.order,
      label: p.label,
      answered: p.answeredCount,
      total: p.totalQuestions,
      completionPct: pct,
      metricLabel: pointPct !== null ? `${pointPct}% skor poin` : null,
      completed: p.answeredCount >= p.totalQuestions && p.totalQuestions > 0,
      href: APP_ROUTES.tkpPatternPractice(p.patternId),
    };
  });
  const firstOpenTkp = tkpModules.find((m) => !m.completed);
  const tkpPct = calcPct(tkp.totalAnswered, tkp.totalQuestions);
  const tkpScorePct =
    tkp.totalMaxAnsweredPoints > 0
      ? calcPct(tkp.totalEarnedPoints, tkp.totalMaxAnsweredPoints)
      : null;
  const tkpStage: RoadmapStage = {
    id: "tkp",
    step: 4,
    badge: "TKP • PG 166",
    title: "Penguasaan TKP (6 Aspek Strategi Skor 5)",
    description:
      "Asah insting memilih opsi bernilai 5 poin dari pengecoh skor 4 pada seluruh 6 aspek TKP sesuai nilai dasar ASN BerAKHLAK.",
    targetSummary: `Target: kuasai ${tkp.totalQuestions.toLocaleString("id-ID")} soal di 6 aspek (Passing Grade BKN ≥ 166 / 225)`,
    status:
      tkp.totalAnswered >= tkp.totalQuestions
        ? "completed"
        : tkp.totalAnswered > 0
          ? "in_progress"
          : "not_started",
    completionPct: tkpPct,
    statsLabel: `${tkp.totalAnswered}/${tkp.totalQuestions} soal`,
    accuracyLabel: tkpScorePct !== null ? `Skor poin ${tkpScorePct}%` : null,
    primaryCtaLabel:
      tkp.totalAnswered === 0
        ? "Mulai Aspek 1 TKP"
        : firstOpenTkp
          ? `Lanjutkan ${firstOpenTkp.label}`
          : "Ulangi Bank Soal TKP",
    primaryHref: firstOpenTkp?.href ?? APP_ROUTES.tkpPractice,
    modules: tkpModules,
  };

  // Tahap 5: Simulasi CAT Resmi 110 Soal (Tembus Ambang Batas BKN)
  const officialAttempts = tryoutHistory.filter((h) => h.mode === "official");
  const passedOfficialAttempts = officialAttempts.filter((h) => h.passed);
  const bestOfficialScore =
    officialAttempts.length > 0
      ? Math.max(...officialAttempts.map((h) => h.totalScore))
      : null;

  const finalStatus: RoadmapStageStatus =
    passedOfficialAttempts.length > 0
      ? "completed"
      : officialAttempts.length > 0
        ? "in_progress"
        : "not_started";

  const finalStage: RoadmapStage = {
    id: "tryout-resmi",
    step: 5,
    badge: "Final CAT • 110 Soal",
    title: "Simulasi Tryout CAT Resmi & Tembus Passing Grade",
    description:
      "Buktikan kesiapan akhir melalui simulasi penuh 110 soal dalam 100 menit hingga ketiga subtes serentak melampaui ambang batas BKN.",
    targetSummary: "Target: lulus ambang batas serentak (TWK ≥ 65, TIU ≥ 80, TKP ≥ 166)",
    status: finalStatus,
    completionPct:
      passedOfficialAttempts.length > 0 ? 100 : officialAttempts.length > 0 ? 50 : 0,
    statsLabel:
      passedOfficialAttempts.length > 0
        ? `${passedOfficialAttempts.length}x Lulus PG`
        : officialAttempts.length > 0
          ? `${officialAttempts.length}x percobaan (belum PG)`
          : "Belum mencoba paket 110 soal",
    accuracyLabel: bestOfficialScore !== null ? `Skor terbaik ${bestOfficialScore}/550` : null,
    primaryCtaLabel:
      passedOfficialAttempts.length > 0
        ? "Tingkatkan Skor di Paket Baru"
        : "Mulai Tryout CAT 110 Soal",
    primaryHref: APP_ROUTES.tryout,
    modules: [
      {
        id: "final-paket-1",
        order: 1,
        label: "Paket Tryout Resmi 01 (110 Soal)",
        answered: officialAttempts.some((h) => h.presetId === "paket-resmi-1") ? 1 : 0,
        total: 1,
        completionPct: officialAttempts.some((h) => h.presetId === "paket-resmi-1") ? 100 : 0,
        metricLabel: officialAttempts.some((h) => h.presetId === "paket-resmi-1" && h.passed)
          ? "Lulus PG"
          : officialAttempts.some((h) => h.presetId === "paket-resmi-1")
            ? "Selesai"
            : null,
        completed: officialAttempts.some((h) => h.presetId === "paket-resmi-1" && h.passed),
        href: APP_ROUTES.tryout,
      },
      {
        id: "final-paket-2",
        order: 2,
        label: "Paket Tryout Resmi 02 (110 Soal)",
        answered: officialAttempts.some((h) => h.presetId === "paket-resmi-2") ? 1 : 0,
        total: 1,
        completionPct: officialAttempts.some((h) => h.presetId === "paket-resmi-2") ? 100 : 0,
        metricLabel: officialAttempts.some((h) => h.presetId === "paket-resmi-2" && h.passed)
          ? "Lulus PG"
          : officialAttempts.some((h) => h.presetId === "paket-resmi-2")
            ? "Selesai"
            : null,
        completed: officialAttempts.some((h) => h.presetId === "paket-resmi-2" && h.passed),
        href: APP_ROUTES.tryout,
      },
      {
        id: "final-paket-3",
        order: 3,
        label: "Paket Tryout Resmi 03 (110 Soal)",
        answered: officialAttempts.some((h) => h.presetId === "paket-resmi-3") ? 1 : 0,
        total: 1,
        completionPct: officialAttempts.some((h) => h.presetId === "paket-resmi-3") ? 100 : 0,
        metricLabel: officialAttempts.some((h) => h.presetId === "paket-resmi-3" && h.passed)
          ? "Lulus PG"
          : officialAttempts.some((h) => h.presetId === "paket-resmi-3")
            ? "Selesai"
            : null,
        completed: officialAttempts.some((h) => h.presetId === "paket-resmi-3" && h.passed),
        href: APP_ROUTES.tryout,
      },
    ],
  };

  const stages: RoadmapStage[] = [
    diagnosticStage,
    twkStage,
    tiuStage,
    tkpStage,
    finalStage,
  ];

  const completedStagesCount = stages.filter((s) => s.status === "completed").length;
  const totalQuestions = twk.totalQuestions + tiu.totalQuestions + tkp.totalQuestions;
  const totalAnswered = twk.totalAnswered + tiu.totalAnswered + tkp.totalAnswered;
  const overallPracticePct = calcPct(totalAnswered, totalQuestions);

  const nextIncomplete = stages.find((s) => s.status !== "completed");
  const nextAction: RoadmapNextAction = nextIncomplete
    ? {
        stageId: nextIncomplete.id,
        stageStep: nextIncomplete.step,
        stageTitle: nextIncomplete.title,
        label: nextIncomplete.primaryCtaLabel,
        description: nextIncomplete.targetSummary,
        href: nextIncomplete.primaryHref,
      }
    : {
        stageId: "tryout-resmi",
        stageStep: 5,
        stageTitle: "Seluruh Tahap Roadmap Tuntas",
        label: "Pertahankan Skor di Tryout Acak Baru",
        description:
          "Semua tahap belajar SKD telah tercapai. Terus pertajam kecepatan lewat paket acak 110 soal.",
        href: APP_ROUTES.tryout,
      };

  return {
    stages,
    completedStagesCount,
    totalStages: stages.length,
    overallPracticePct,
    totalAnswered,
    totalQuestions,
    totalTryouts: tryoutHistory.length,
    passedOfficialCount: passedOfficialAttempts.length,
    bestOfficialScore,
    nextAction,
  };
}

