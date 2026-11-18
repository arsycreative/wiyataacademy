export type AppErrorCode =
  | "bad_request"
  | "unauthorized"
  | "forbidden"
  | "not_found"
  | "conflict"
  | "internal_error";

export type AppError = {
  code: AppErrorCode;
  message: string;
  cause?: unknown;
};

export type Result<T, E = AppError> =
  | {
      ok: true;
      data: T;
    }
  | {
      ok: false;
      error: E;
    };

export type ActionResult<T = void> =
  | {
      status: "success";
      data: T;
      message?: string;
    }
  | {
      status: "error";
      error: {
        code: AppErrorCode;
        message: string;
        fieldErrors?: Record<string, string[]>;
      };
    };

export function ok<T>(data: T): Result<T> {
  return { ok: true, data };
}

export function fail(code: AppErrorCode, message: string, cause?: unknown): Result<never> {
  return {
    ok: false,
    error: {
      code,
      message,
      cause,
    },
  };
}

export function actionSuccess<T>(data: T, message?: string): ActionResult<T> {
  return { status: "success", data, message };
}

export function actionFailure(
  code: AppErrorCode,
  message: string,
  fieldErrors?: Record<string, string[]>
): ActionResult<never> {
  return {
    status: "error",
    error: {
      code,
      message,
      fieldErrors,
    },
  };
}
