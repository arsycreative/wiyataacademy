export type UserRole = "student" | "admin" | "superadmin";

export type AuthSessionUser = {
  id: string;
  email: string;
  fullName: string;
  avatarUrl: string | null;
  providers: string[];
  createdAt: string;
};

export type UserProfile = {
  id: string;
  email: string | null;
  fullName: string | null;
  avatarUrl: string | null;
  role?: UserRole;
};

export type ProfileUpsertInput = {
  id: string;
  email?: string | null;
  fullName?: string | null;
  avatarUrl?: string | null;
};

export type ProfileLookupResult = {
  data: UserProfile | null;
  schemaMissing: boolean;
  error: string | null;
};

export type ProfileWriteResult = {
  ok: boolean;
  schemaMissing: boolean;
  error: string | null;
};

export type ProfileRepository = {
  findById(userId: string): Promise<ProfileLookupResult>;
  upsert(input: ProfileUpsertInput): Promise<ProfileWriteResult>;
};

