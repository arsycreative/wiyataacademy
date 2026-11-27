import {
  OPTION_KEYS,
  TIU_PATTERN_IDS,
  TKP_PATTERN_IDS,
  TWK_PATTERN_IDS,
  type OptionKey,
  type OptionScores,
  type PracticePatternId,
  type Question,
  type TiuPatternId,
  type TkpPatternId,
  type TwkPatternId,
} from "./question";

export function createRandomSeed(): number {
  return ((Date.now() ^ Math.floor(Math.random() * 0x7fffffff)) >>> 0) || 1;
}

export function createInitialPatternSeeds(
  existing?: Partial<Record<TiuPatternId, number>>,
): Record<TiuPatternId, number> {
  const result = {} as Record<TiuPatternId, number>;
  for (const id of TIU_PATTERN_IDS) {
    const saved = existing?.[id];
    result[id] =
      typeof saved === "number" && Number.isFinite(saved) && saved > 0
        ? saved >>> 0
        : createRandomSeed();
  }
  return result;
}

export function createInitialAllPatternSeeds(
  existingSeeds?: Partial<Record<PracticePatternId, number>>,
): Record<PracticePatternId, number> {
  const tiuSeeds = createInitialPatternSeeds(
    existingSeeds as Partial<Record<TiuPatternId, number>> | undefined,
  );
  const seeds = { ...tiuSeeds } as Record<PracticePatternId, number>;

  for (const id of [...TWK_PATTERN_IDS, ...TKP_PATTERN_IDS]) {
    const existing = existingSeeds?.[id];
    seeds[id] =
      typeof existing === "number" && Number.isFinite(existing) && existing > 0
        ? existing >>> 0
        : createRandomSeed();
  }

  return seeds;
}

export function hashStringWithSeed(str: string, seed: number): number {
  let h = (seed ^ 0x811c9dc5) >>> 0;
  for (let i = 0; i < str.length; i += 1) {
    h ^= str.charCodeAt(i);
    h = Math.imul(h, 0x01000193) >>> 0;
  }
  return (h >>> 0) || 1;
}

function createSeededRng(seed: number): () => number {
  let state = (seed >>> 0) || 1;
  return () => {
    state = (state + 0x6d2b79f5) >>> 0;
    let t = Math.imul(state ^ (state >>> 15), 1 | state);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export function seededShuffle<T>(items: readonly T[], seed: number): T[] {
  const copy = [...items];
  const rng = createSeededRng(seed);
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(rng() * (i + 1));
    const temp = copy[i];
    copy[i] = copy[j];
    copy[j] = temp;
  }
  return copy;
}

/**
 * Pola hitungan (Numerik & Kuantitatif) pada Bank Soal TIU yang ditampilkan
 * berurutan secara runtut (tanpa acak urutan soal maupun opsi A–E saat latihan).
 */
export const NON_SHUFFLED_PRACTICE_PATTERNS: readonly TiuPatternId[] = [
  "hitung-cepat",
  "perbandingan-kuantitatif",
  "deret-angka",
  "analisis-tabel",
] as const;

export function isNonShuffledPracticePattern(patternId: string): boolean {
  return (NON_SHUFFLED_PRACTICE_PATTERNS as readonly string[]).includes(patternId);
}

/**
 * Sub-pola dengan urutan opsi A–E baku (standar ujian CPNS/SNBT) sehingga
 * opsinya TIDAK pernah diacak di mode mana pun (Bank Soal, Tryout CAT, maupun Sprint).
 */
export const FIXED_OPTION_SUBPATTERNS: readonly string[] = [
  "kecukupan-data",
  "hubungan-variabel-x-dan-y",
] as const;

export function hasFixedOptionOrder(
  question: Pick<Question, "subPattern">,
): boolean {
  return FIXED_OPTION_SUBPATTERNS.includes(question.subPattern);
}

/**
 * Mengacak urutan opsi jawaban A–E untuk satu soal berdasarkan seed,
 * sekaligus memperbarui kunci `answer` ke posisi huruf yang baru.
 * Mengembalikan soal apa adanya jika termasuk sub-pola beropsi baku (`FIXED_OPTION_SUBPATTERNS`).
 */
export function shuffleQuestionOptions(
  question: Question,
  optionSeed: number,
): Question {
  if (!optionSeed || hasFixedOptionOrder(question)) return question;
  const perQuestionSeed = hashStringWithSeed(`opt:${question.id}`, optionSeed);
  const shuffledRawOptions = seededShuffle(question.options, perQuestionSeed);

  let nextAnswer: OptionKey = question.answer;
  const remappedOptions = shuffledRawOptions.map((opt, idx) => {
    const newKey = OPTION_KEYS[idx];
    if (opt.key === question.answer) {
      nextAnswer = newKey;
    }
    return {
      key: newKey,
      text: opt.text,
    };
  });

  return {
    ...question,
    options: remappedOptions,
    answer: nextAnswer,
  };
}

/**
 * Mengacak opsi soal sekaligus memetakan skor TKP (1–5) ke huruf baru yang sejajar.
 * Mengembalikan soal apa adanya jika termasuk sub-pola beropsi baku (`FIXED_OPTION_SUBPATTERNS`).
 */
export function shuffleQuestionWithScores(
  question: Question,
  seed: number,
): Question {
  if (!seed || seed <= 0 || hasFixedOptionOrder(question)) {
    return question;
  }

  if (!question.optionScores) {
    return shuffleQuestionOptions(question, seed);
  }

  const saltSeed = hashStringWithSeed(question.id, seed);
  const shuffledItems = seededShuffle(
    question.options.map((option) => ({
      text: option.text,
      isOptimal: option.key === question.answer,
      score: question.optionScores![option.key],
    })),
    saltSeed,
  );

  const nextScores: OptionScores = {
    A: 1,
    B: 1,
    C: 1,
    D: 1,
    E: 1,
  };
  let nextAnswer = question.answer;

  const nextOptions = shuffledItems.map((item, idx) => {
    const key = OPTION_KEYS[idx];
    nextScores[key] = item.score;
    if (item.isOptimal) {
      nextAnswer = key;
    }
    return { key, text: item.text };
  });

  return {
    ...question,
    options: nextOptions,
    answer: nextAnswer,
    optionScores: nextScores,
  };
}

export function isTiuPattern(value: unknown): value is TiuPatternId {
  return typeof value === "string" && (TIU_PATTERN_IDS as readonly string[]).includes(value);
}

export function isTwkPattern(value: unknown): value is TwkPatternId {
  return typeof value === "string" && (TWK_PATTERN_IDS as readonly string[]).includes(value);
}

export function isTkpPattern(value: unknown): value is TkpPatternId {
  return typeof value === "string" && (TKP_PATTERN_IDS as readonly string[]).includes(value);
}

const QUESTION_ID_PREFIX_TO_PATTERN: Readonly<Record<string, PracticePatternId>> = {
  "tiu-saa": "sinonim-antonim-akronim",
  "tiu-sin": "sinonim-antonim-akronim",
  "tiu-ana": "analogi-kata",
  "tiu-sil": "silogisme",
  "tiu-hit": "hitung-cepat",
  "tiu-pk": "perbandingan-kuantitatif",
  "tiu-pam": "penalaran-analitis-melingkar",
  "tiu-der": "deret-angka",
  "tiu-tab": "analisis-tabel",
  "tiu-fig": "figural",
  "twk-nas": "nasionalisme",
  "twk-int": "integritas",
  "twk-bel": "bela-negara",
  "twk-pil": "pilar-negara",
  "twk-bhs": "bahasa-indonesia",
  "tkp-pel": "pelayanan-publik",
  "tkp-jej": "jejaring-kerja",
  "tkp-sos": "sosial-budaya",
  "tkp-tik": "tik",
  "tkp-pro": "profesionalisme",
  "tkp-ant": "anti-radikalisme",
};

/**
 * Memetakan ID soal (mis. `tiu-fig-001`, `twk-nas-010`, `tkp-pel-003`) ke `PracticePatternId`
 * secara O(1) tanpa perlu mengimpor seluruh bank soal ke sisi client.
 */
export function getPatternIdFromQuestionId(
  questionId: string,
): PracticePatternId | undefined {
  const match = questionId.match(/^([a-z]+-[a-z0-9]+)-/);
  if (!match) return undefined;
  return QUESTION_ID_PREFIX_TO_PATTERN[match[1]];
}

