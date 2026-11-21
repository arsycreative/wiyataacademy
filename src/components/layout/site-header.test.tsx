// @vitest-environment jsdom
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import type { ReactNode } from "react";
import { afterEach, describe, expect, it, vi } from "vitest";

import { APP_ROUTES } from "@/shared/constants/app";
import { SiteHeader } from "./site-header";

vi.mock("next/link", () => ({
  default: ({
    children,
    href,
    ...props
  }: {
    children: ReactNode;
    href: string;
  }) => (
    <a href={href} {...props}>
      {children}
    </a>
  ),
}));

vi.mock("next/navigation", () => ({
  usePathname: () => "/",
  useRouter: () => ({
    push: vi.fn(),
    refresh: vi.fn(),
  }),
}));

vi.mock("@/modules/auth/presentation/use-supabase-auth", () => ({
  useSupabaseAuth: () => ({
    user: null,
    isLoading: false,
    signOut: vi.fn(),
  }),
}));

describe("SiteHeader", () => {
  afterEach(() => {
    cleanup();
  });

  it("groups TWK, TIU, TKP, and Learning Path inside the Bank Soal dropdown without a redundant CTA button", () => {
    render(<SiteHeader />);

    expect(screen.queryByRole("link", { name: /^TWK$/i })).toBeNull();
    expect(screen.queryByRole("link", { name: /^TIU$/i })).toBeNull();
    expect(screen.queryByRole("link", { name: /^TKP$/i })).toBeNull();
    expect(screen.queryByRole("link", { name: /^Latihan Soal$/i })).toBeNull();

    const trigger = screen.getByRole("button", { name: /Bank Soal/i });
    expect(trigger.getAttribute("aria-expanded")).toBe("false");

    fireEvent.click(trigger);
    expect(trigger.getAttribute("aria-expanded")).toBe("true");

    const menuItems = screen.getAllByRole("menuitem");
    const hrefs = menuItems.map((el) => el.getAttribute("href"));
    expect(hrefs).toEqual([
      APP_ROUTES.twkPractice,
      APP_ROUTES.tiuPractice,
      APP_ROUTES.tkpPractice,
      APP_ROUTES.courseDetail("intensif-skd-cpns"),
    ]);

    fireEvent.keyDown(document, { key: "Escape" });
    expect(trigger.getAttribute("aria-expanded")).toBe("false");
  });
});

