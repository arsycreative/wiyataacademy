import type { AppErrorCode } from "@/shared/result";

export class DomainError extends Error {
  readonly code: AppErrorCode;

  constructor(code: AppErrorCode, message: string) {
    super(message);
    this.name = "DomainError";
    this.code = code;
  }
}

export class AuthorizationError extends DomainError {
  constructor(message = "You are not allowed to perform this action.") {
    super("forbidden", message);
    this.name = "AuthorizationError";
  }
}
