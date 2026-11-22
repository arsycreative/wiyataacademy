import type { ReactNode } from "react";

import type { PatternStatItem } from "@/modules/question-bank/domain/progress-summary-types";
import type { Question, TwkPatternId } from "@/modules/question-bank/domain/question";
import { StandardPatternPractice } from "./standard-pattern-practice";

type TwkPatternPracticeProps = {
  initialPattern?: TwkPatternId;
  initialLoadedPattern: TwkPatternId;
  initialPatternStats: readonly PatternStatItem<TwkPatternId>[];
  initialQuestions: readonly Question[];
  hasFullAccess?: boolean;
  siteHeader?: ReactNode;
  siteFooter?: ReactNode;
  pageIntro?: ReactNode;
};

export function TwkPatternPractice(props: TwkPatternPracticeProps) {
  return <StandardPatternPractice subtest="TWK" {...props} />;
}
