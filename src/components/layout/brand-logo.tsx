import Image from "next/image";

import { cn } from "@/lib/utils";
import { APP_NAME } from "@/shared/constants/app";

type BrandLogoProps = {
  className?: string;
  priority?: boolean;
};

export function BrandLogo({ className, priority = false }: BrandLogoProps) {
  return (
    <span
      className={cn(
        "inline-flex h-10 items-center gap-2.5 select-none",
        className,
      )}
      aria-label={APP_NAME}
    >
      <Image
        src="/logo-mark.png"
        alt=""
        width={128}
        height={128}
        priority={priority}
        className="h-full w-auto object-contain"
        aria-hidden
      />
      <span className="inline-flex items-baseline gap-1 text-[1.25rem] font-extrabold tracking-tight leading-none text-[#0a2463] sm:text-[1.35rem]">
        <span>Wiyata</span>
        <span className="font-semibold text-[#0284c7]">Edu</span>
      </span>
    </span>
  );
}
