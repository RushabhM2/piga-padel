# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Mobile-first Padel court booking app targeting Kenya. Key differentiators: M-Pesa payments, ELO-based player matching, local UX.

## Stack

- **Website:** Next JS
- **Mobile:** Expo (React Native, managed workflow) — TypeScript throughout
- **Backend:** Nest JS, Prisma, Postgres
- **Payments:** M-Pesa Daraja API
- **Maps:** Google Maps SDK

## Build order (PRs)

### Milestone 1 - MVP: Website only
1. Project scaffold + Postgres + Prisma set up
2. Auth (email first with magic link)
3. Deployment and Hosting of Auth Page and Backend 
4. Court discovery (map + list view)
5. Court booking + slot reservation
6. Auth v2 (Mobile phone with OTP)
7. M-Pesa payment integration
8. Invite friends via WhatsApp

### Milestone 2 - Mobile app
8. Build Expo mobile app
9. Build auth on app
10. Build court discovery, court booking on app
11. Build Mpesa and invite friends via Whatsapp
12. Build internal notification system

### Milestone 3 - Nice to haves
13. Build 

Scope each PR to one step. Keep PRs small and reviewable.

## Commands

All backend commands run from `api/`. Frontend commands will be added once `web/` is scaffolded.

```bash
# Backend (NestJS) — api/
npm run start:dev       # Start with hot reload
npm run start:prod      # Run compiled output
npm run build           # Compile TypeScript
npm run lint            # ESLint + auto-fix
npm run test            # Unit tests
npm run test:e2e        # End-to-end tests
npm run test:cov        # Coverage report

# Database (Prisma) — api/
npm run prisma:migrate  # Create and apply a dev migration
npm run prisma:deploy   # Apply migrations in production
npm run prisma:generate # Regenerate Prisma client after schema changes
npm run prisma:studio   # Open Prisma Studio (DB GUI)
npm run prisma:seed     # Seed the database
```

## Architecture (planned)

```
/
├── web/                # Next.js frontend
│   ├── app/            # App Router pages and layouts
│   ├── components/     # Shared UI components
│   └── lib/            # API client, helpers
├── api/                # NestJS backend
│   ├── src/
│   │   ├── auth/       # Auth module
│   │   ├── courts/     # Court discovery + booking
│   │   ├── payments/   # M-Pesa Daraja integration
│   │   └── prisma/     # Prisma service (singleton)
│   └── prisma/
│       └── schema.prisma
└── mobile/             # Expo app (Milestone 2)
```

## Key conventions

- Prisma client is a singleton NestJS service (`api/src/prisma/prisma.service.ts`)
- Never hand-edit the generated Prisma client — run `prisma generate` after schema changes
- M-Pesa callbacks need a public HTTPS endpoint — use the NestJS backend deployed on a public URL (not localhost)
- Court proximity queries use PostGIS — enable the extension in the initial migration
- Developer will be coding alongside agent, when installing new packages, check what already exists to prevent reinstalls
