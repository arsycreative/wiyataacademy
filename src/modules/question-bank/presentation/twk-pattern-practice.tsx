import type { ReactNode } from "react";

import type { TwkPatternId } from "@/modules/question-bank/domain/question";
import { StandardPatternPractice } from "./standard-pattern-practice";

type TwkPatternPracticeProps = {
  initialPattern?: TwkPatternId;
  siteHeader?: ReactNode;
  siteFooter?: ReactNode;
  pageIntro?: ReactNode;
};

export function TwkPatternPractice(props: TwkPatternPracticeProps) {
  return <StandardPatternPractice subtest="TWK" {...props} />;
}
