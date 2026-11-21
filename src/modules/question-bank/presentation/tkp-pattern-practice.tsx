import type { ReactNode } from "react";

import type { PatternStatItem } from "@/modules/question-bank/domain/progress-summary-types";
import type { Question, TkpPatternId } from "@/modules/question-bank/domain/question";
import { StandardPatternPractice } from "./standard-pattern-practice";

type TkpPatternPracticeProps = {
  initialPattern?: TkpPatternId;
  initialLoadedPattern: TkpPatternId;
  initialPatternStats: readonly PatternStatItem<TkpPatternId>[];
  initialQuestions: readonly Question[];
  siteHeader?: ReactNode;
  siteFooter?: ReactNode;
  pageIntro?: ReactNode;
};

export function TkpPatternPractice(props: TkpPatternPracticeProps) {
  return <StandardPatternPractice subtest="TKP" {...props} />;
}
