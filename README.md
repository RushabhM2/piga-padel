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
- Docker (for Postgres via `docker-compose.yml`) — or PostgreSQL 16 installed locally (`brew install postgresql@16 && brew services start postgresql@16`)

### Database

The repo ships a `docker-compose.yml` at the root that runs Postgres in a container.

1. Create your root `.env` file:
   ```bash
   cp .env.example .env
   ```
   Fill in `POSTGRES_USER`, `POSTGRES_PASSWORD`, `POSTGRES_DB`.

2. Start the container:
   ```bash
   docker compose up -d
   ```
   Postgres is exposed on host port **5433** (mapped from the container's 5432, to avoid clashing with a locally installed Postgres).

<details>
<summary>Alternative: local Postgres install instead of Docker</summary>

```bash
brew install postgresql@16 && brew services start postgresql@16
createdb padel
```
Use port 5432 in `DATABASE_URL` below instead of 5433.
</details>

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
   Point `DATABASE_URL` at the Dockerized Postgres (using the credentials from the root `.env`):
   ```
   DATABASE_URL="postgresql://<POSTGRES_USER>:<POSTGRES_PASSWORD>@localhost:5433/<POSTGRES_DB>?schema=public"
   ```

3. Run migrations:
   ```bash
   npm run prisma:migrate
   ```

4. Start the dev server:
   ```bash
   npm run start:dev
   ```
   Server runs at `http://localhost:3001`.

### Frontend (`web/`)

1. Install dependencies:
   ```bash
   cd web
   npm install
   ```

2. Create your `.env` file:
   ```bash
   cp .env.example .env
   ```
   For local development, point `NEXT_PUBLIC_API_URL` at your local backend instead of the deployed default:
   ```
   NEXT_PUBLIC_API_URL=http://localhost:3001
   ```

3. Start the dev server:
   ```bash
   npm run dev
   ```
   App runs at `http://localhost:3000` (no port clash with the API, which runs on 3001).

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
