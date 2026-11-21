import type { OptionKey, PracticePatternId } from "@/modules/question-bank/domain/question";
import { isOptionKey } from "@/modules/question-bank/infrastructure/tiu-progress-sync";
import type {
  SprintDifficultyFilter,
  SprintDurationMinutes,
  SprintPaceStatus,
  SprintSubtestScope,
} from "@/modules/tryout/domain/sprint-config";

const SPRINT_HISTORY_STORAGE_KEY = "wiyata.skd.sprint.history.v1";
const SPRINT_MAX_HISTORY = 20;

export type SprintHistoryRecord = {
  id: string;
  completedAt: string;
  packageLabel: string;
  subtest: SprintSubtestScope;
  patternId: PracticePatternId | null;
  difficultyFilter: SprintDifficultyFilter;
  durationMinutes: SprintDurationMinutes;
  totalQuestions: number;
  answeredCount: number;
  correctCount: number;
  totalScore: number;
  maxScore: number;
  accuracyPct: number;
  durationUsedSec: number;
  avgSecondsPerAnswered: number;
  targetSecondsPerQuestion: number;
  paceStatus: SprintPaceStatus;
};

function sanitizeRecord(raw: unknown): SprintHistoryRecord | null {
  if (!raw || typeof raw !== "object") return null;
  const candidate = raw as Record<string, unknown>;
  if (typeof candidate.id !== "string" || typeof candidate.packageLabel !== "string") {
    return null;
  }
  return candidate as SprintHistoryRecord;
}

export function readSprintHistory(): SprintHistoryRecord[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(SPRINT_HISTORY_STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed
      .map(sanitizeRecord)
      .filter((r): r is SprintHistoryRecord => r !== null)
      .slice(0, SPRINT_MAX_HISTORY);
  } catch {
    return [];
  }
}

export function appendSprintHistory(record: SprintHistoryRecord): SprintHistoryRecord[] {
  const existing = readSprintHistory().filter((item) => item.id !== record.id);
  const next = [record, ...existing].slice(0, SPRINT_MAX_HISTORY);
  if (typeof window !== "undefined") {
    try {
      window.localStorage.setItem(SPRINT_HISTORY_STORAGE_KEY, JSON.stringify(next));
    } catch {
      // Ignore storage quota errors
    }
  }
  return next;
}

export function clearSprintHistory(): void {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.removeItem(SPRINT_HISTORY_STORAGE_KEY);
  } catch {
    // Ignore storage errors
  }
}

export function sanitizeSprintAnswers(
  raw: Record<string, unknown> | undefined,
): Record<string, OptionKey> {
  const result: Record<string, OptionKey> = {};
  if (!raw) return result;
  for (const [k, v] of Object.entries(raw)) {
    if (isOptionKey(v)) result[k] = v;
  }
  return result;
}

