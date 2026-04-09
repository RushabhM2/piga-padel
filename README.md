# piga-padel

Mobile-first Padel court booking app targeting Kenya. Book courts, split costs, find players of equal skill.

## Stack

- **Frontend:** Next.js (App Router, TypeScript)
- **Backend:** NestJS + Prisma + PostgreSQL
- **Payments:** M-Pesa Daraja API
- **Maps:** Google Maps SDK

## Local setup

### Prerequisites

- Node.js 25.9.0 (via [asdf](https://asdf-vm.com/) — `.tool-versions` is included)
- PostgreSQL 16 (`brew install postgresql@16 && brew services start postgresql@16`)

### Backend (`api/`)

1. Install dependencies:
   ```bash
   cd api
   npm install
   ```

2. Create your `.env` file:
   ```bash
   cp .env.example .env
   ```
   Update `DATABASE_URL` with your local Postgres connection string. The default works if you installed via Homebrew on macOS:
   ```
   DATABASE_URL="postgresql://<your-mac-username>@localhost:5432/padel?schema=public"
   ```

3. Create the local database:
   ```bash
   createdb padel
   ```

4. Run migrations:
   ```bash
   npm run prisma:migrate
   ```

5. Start the dev server:
   ```bash
   npm run start:dev
   ```
   Server runs at `http://localhost:3000`.

### Adding a new database model

1. Edit `api/prisma/schema.prisma`
2. Run `npm run prisma:migrate` (you'll be prompted for a migration name)
3. The Prisma client regenerates automatically — new models are immediately available in TypeScript

### Useful database commands

| Command | Description |
|---|---|
| `npm run prisma:migrate` | Create and apply a new migration |
| `npm run prisma:studio` | Open Prisma Studio (visual DB browser) at `localhost:5555` |
| `npm run prisma:generate` | Manually regenerate the Prisma client |
| `npm run prisma:deploy` | Apply migrations in production |
