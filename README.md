# saksh-ai

A modern web app scaffold using Next.js (App Router, TypeScript) with Tailwind CSS and shadcn/ui, configured with ESLint, Prettier, Husky, and CI.

## Tech stack

- Next.js 14 (App Router, TypeScript, src/ directory)
- Tailwind CSS
- shadcn/ui primitives (via Tailwind + CSS variables)
- next-themes (dark mode)
- ESLint + Prettier (+ import/order)
- Husky + lint-staged
- GitHub Actions (install, lint, type-check, build)
- zod-based typed env loader

## Getting started

1. Install dependencies:

```bash
npm ci
```

2. Create a local env file and fill in values:

```bash
cp .env.example .env.local
```

3. Run the dev server:

```bash
npm run dev
```

Then open http://localhost:3000

## Scripts

- `npm run dev` – Start Next.js in development
- `npm run build` – Production build
- `npm run start` – Start production server (after build)
- `npm run lint` – Run ESLint with import/order and Prettier rules
- `npm run typecheck` – Run TypeScript compiler in noEmit mode
- `npm run format` – Prettier write
- `npm run format:check` – Prettier check

## Project structure

```
src/
  app/
    layout.tsx     # Base layout: ThemeProvider + AppHeader + Sidebar
    page.tsx       # Home page
  components/
    shell/
      app-header.tsx
      sidebar.tsx
    theme/
      theme-provider.tsx
    ui/
      button.tsx   # shadcn-style Button component
  config/
    env.ts         # Typed env loader (zod)
  lib/
    utils.ts       # cn() helper
  styles/
    globals.css    # Tailwind base + shadcn theme tokens
```

## Linting and formatting

- ESLint is configured with Next.js, @typescript-eslint, and import/order.
- Prettier is enabled with the Tailwind class sorting plugin.
- Commit hooks run via Husky + lint-staged.

## CI

GitHub Actions workflow runs on pushes and PRs:
- Install (npm ci)
- Lint
- Type-check
- Build

## Environment variables

Typed loader at `src/config/env.ts` validates these keys using zod:
- `NEXTAUTH_SECRET`
- `AUTH_PROVIDERS` (comma-separated list)
- `DATABASE_URL`
- `STORAGE_KEYS` (comma-separated list)
- `RESEND_API_KEY`

Provide local values in `.env.local` (see `.env.example`).

## Notes on shadcn/ui

This project includes the typical Tailwind theme tokens and a base Button component compatible with shadcn/ui patterns (cva, cn, CSS variables). You can add additional components following the same pattern.
