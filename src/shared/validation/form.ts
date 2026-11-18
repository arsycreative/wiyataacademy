import { z } from "zod";

export type FieldErrors = Record<string, string[]>;

export function fieldErrorsFromZod(error: z.ZodError): FieldErrors {
  return error.flatten().fieldErrors as FieldErrors;
}
