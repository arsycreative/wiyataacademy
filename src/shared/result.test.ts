import { describe, expect, it } from "vitest";

import { actionFailure, actionSuccess, fail, ok } from "@/shared/result";

describe("result helpers", () => {
  it("creates successful results", () => {
    expect(ok({ id: "course_1" })).toEqual({
      ok: true,
      data: { id: "course_1" },
    });
  });

  it("creates failed results", () => {
    expect(fail("not_found", "Course not found")).toEqual({
      ok: false,
      error: {
        code: "not_found",
        message: "Course not found",
        cause: undefined,
      },
    });
  });

  it("creates action results", () => {
    expect(actionSuccess({ saved: true })).toEqual({
      status: "success",
      data: { saved: true },
      message: undefined,
    });

    expect(actionFailure("bad_request", "Invalid input", { title: ["Required"] }))
      .toEqual({
        status: "error",
        error: {
          code: "bad_request",
          message: "Invalid input",
          fieldErrors: { title: ["Required"] },
        },
      });
  });
});
