import { NextResponse, type NextRequest } from "next/server";

import {
  isLeaderboardScope,
  type LeaderboardScope,
} from "@/modules/tryout/domain/leaderboard";
import { getNationalLeaderboard } from "@/modules/tryout/infrastructure/tryout-attempts-repository.server";

export const dynamic = "force-dynamic";

export async function GET(request: NextRequest) {
  const rawScope = request.nextUrl.searchParams.get("scope");
  const scope: LeaderboardScope = isLeaderboardScope(rawScope)
    ? rawScope
    : "all-official";

  const rawLimit = Number(request.nextUrl.searchParams.get("limit") ?? 20);
  const limit = Number.isFinite(rawLimit) ? Math.max(1, Math.min(rawLimit, 50)) : 20;

  const leaderboard = await getNationalLeaderboard(scope, limit);
  return NextResponse.json(leaderboard);
}

