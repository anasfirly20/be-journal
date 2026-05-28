# Журнал работ — Backend

Backend API for the construction work journal system built with NestJS, Prisma ORM, and MySQL.

## Swagger Preview

![Swagger Preview](./docs/swagger-preview.png)

## Tech Stack

### Core

- NestJS
- TypeScript

### Database

- MySQL
- Prisma ORM

### Validation

- class-validator
- class-transformer

### Documentation

- Swagger

### Tooling

- ESLint
- Prettier
- Jest
- Docker Compose

## Features

- CRUD operations for journal entries
- Filtering by:
  - exact date
  - date range
  - work type
  - worker name
- DTO validation
- Swagger API documentation
- Seeded work types
- Relational database structure using Prisma ORM

## API Endpoints

### Journals

| Method | Endpoint        | Description             |
| ------ | --------------- | ----------------------- |
| GET    | `/journals`     | Get all journal entries |
| GET    | `/journals/:id` | Get journal entry by ID |
| POST   | `/journals`     | Create journal entry    |
| PATCH  | `/journals/:id` | Update journal entry    |
| DELETE | `/journals/:id` | Delete journal entry    |

### Work Types

| Method | Endpoint      | Description        |
| ------ | ------------- | ------------------ |
| GET    | `/work-types` | Get all work types |

## Query Examples

### Filter by Date Range

```bash
/journals?from=2026-05-01&to=2026-05-31
```

### Filter by Work Type

```bash
/journals?workTypeId=1
```

### Filter by Worker Name

```bash
/journals?workerName=john
```

## Installation

### 1. Install Dependencies

```bash
pnpm install
```

### 2. Create Environment Variables

Create `.env` file:

```env
DATABASE_URL="mysql://root:password@localhost:3306/journal_db"
PORT=3000
```

### 3. Start Database

```bash
docker compose up -d
```

### 4. Generate Prisma Client

```bash
pnpm prisma generate
```

### 5. Run Migrations

```bash
pnpm prisma migrate dev
```

### 6. Seed Database

```bash
pnpm prisma db seed
```

### 7. Start Development Server

```bash
pnpm start:dev
```

## Swagger Documentation

Swagger is available at:

```bash
http://localhost:3000/api
```

## Project Structure

```bash
src/
├── journal/
│   ├── dto/
│   ├── journal.controller.ts
│   ├── journal.service.ts
│   └── journal.module.ts
│
├── work-type/
│   ├── work-type.controller.ts
│   ├── work-type.service.ts
│   └── work-type.module.ts
│
├── prisma/
│   ├── prisma.module.ts
│   └── prisma.service.ts
│
└── main.ts
```

## Why This Stack

### NestJS

Chosen because it provides a clean modular architecture, built-in dependency injection, DTO validation support, and good scalability for REST API applications.

### Prisma ORM

Used for type-safe database access, convenient migrations, and simple work with relational data.

### Swagger

Used for automatic API documentation and easier testing of endpoints during development.

### Docker Compose

Used to simplify local MySQL database setup and make project запуск faster with a single command.
