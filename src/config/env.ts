import { z } from "zod";

export const envSchema = z.object({
  NEXTAUTH_SECRET: z.string().min(1, "NEXTAUTH_SECRET is required"),
  AUTH_PROVIDERS: z
    .string()
    .min(1, "AUTH_PROVIDERS is required - comma-separated list")
    .transform((v) => v.split(/[,\s]+/).filter(Boolean)),
  DATABASE_URL: z.string().min(1, "DATABASE_URL is required"),
  STORAGE_KEYS: z
    .string()
    .min(1, "STORAGE_KEYS is required - comma-separated list")
    .transform((v) => v.split(/[,\s]+/).filter(Boolean)),
  RESEND_API_KEY: z.string().min(1, "RESEND_API_KEY is required"),
});

export type Env = z.infer<typeof envSchema>;

export function getEnv(): Env {
  const parsed = envSchema.safeParse({
    NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
    AUTH_PROVIDERS: process.env.AUTH_PROVIDERS,
    DATABASE_URL: process.env.DATABASE_URL,
    STORAGE_KEYS: process.env.STORAGE_KEYS,
    RESEND_API_KEY: process.env.RESEND_API_KEY,
  });

  if (!parsed.success) {
    // Create a readable error summary and throw lazily only when called.
    const formatted = parsed.error.format();
    throw new Error(
      `Invalid environment variables.\n${JSON.stringify(formatted, null, 2)}`
    );
  }

  return parsed.data;
}
