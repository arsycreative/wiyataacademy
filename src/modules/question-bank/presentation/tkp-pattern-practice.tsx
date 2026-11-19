import type { ReactNode } from "react";

import type { TkpPatternId } from "@/modules/question-bank/domain/question";
import { StandardPatternPractice } from "./standard-pattern-practice";

type TkpPatternPracticeProps = {
  initialPattern?: TkpPatternId;
  siteHeader?: ReactNode;
  siteFooter?: ReactNode;
  pageIntro?: ReactNode;
};

export function TkpPatternPractice(props: TkpPatternPracticeProps) {
  return <StandardPatternPractice subtest="TKP" {...props} />;
}
