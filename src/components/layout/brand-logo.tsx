import Image from "next/image";

import { cn } from "@/lib/utils";
import { APP_NAME } from "@/shared/constants/app";

type BrandLogoProps = {
  className?: string;
  priority?: boolean;
};

export function BrandLogo({ className, priority = false }: BrandLogoProps) {
  return (
    <Image
      src="/logo.png"
      alt={APP_NAME}
      width={1254}
      height={421}
      priority={priority}
      className={cn("h-10 w-auto object-contain", className)}
    />
  );
}
