# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

Baby Stats is a full-stack application for tracking baby feeding data, built with a Django backend and React Native Expo frontend. The application tracks bottle feeding records with datetime, quantity, and burp information.

## Architecture

This is a monorepo containing:

- **`backend/`** - Django backend with PostgreSQL database
- **`frontend/`** - React Native Expo mobile application
- **Database** - PostgreSQL with Docker Compose setup

### Backend Architecture (`backend/`)

- **Framework**: Django
- **Database**: PostgreSQL with Django migrations
- **Configuration**: Pydantic Settings with environment variable support
- **Type Safety**: mypy with strict settings, Pydantic validation
- **Code Quality**: Ruff for linting and formatting

Key modules:

- `src/backend/config.py` - Application configuration with Pydantic
- `src/baby_stats/` - Django App
- `src/mysite/` - Django Project

### Frontend Architecture (`frontend/`)

- **Framework**: React Native with Expo
- **Routing**: Expo Router with file-based routing
- **Type Safety**: TypeScript with Zod validation
- **Navigation**: Tab-based navigation with nested routes

Key structure:
- `app/` - File-based routing with nested tab structure
- `models/` - Shared type definitions (matches backend models)
- Tab structure: History, Stats, and Form screens

### Database Models

The application centers around the `Bottle` model which tracks:
- `datetime` - When the feeding occurred
- `quantity` - Amount in ml (float)
- `burp` - Boolean indicating if baby burped
- Automatic `created_at`/`updated_at` timestamps

## Common Development Commands

### Database & Infrastructure

```bash
# Start PostgreSQL and Adminer
docker compose up -d

# Stop services
docker compose down
```

### Backend Development (`backend/`)

```bash
# Navigate to the backend directory
cd backend

# Install dependencies
uv sync

# Run development server
uv run manage.py runserver

# Create new migration
uv run manage.py makemigrations

# Run migrations
uv run manage.py migrate

# Linting and formatting
uvx ruff check
uvx ruff format

# Type checking
uv run mypy .

# Run the backend (production-like)
uvx run backend
```

### Frontend Development (`frontend/`)

```bash
# Navigate to frontend directory
cd frontend

# Install dependencies
npm install

# Start Expo development server
npx expo start

# Platform-specific starts
npx expo start --android
npx expo start --ios
npx expo start --web

# Linting
npm run lint

# Reset project structure
npm run reset-project
```

### Environment Setup

The application uses environment variables defined in `.env`:
- `POSTGRES_DB__HOST=localhost`
- `POSTGRES_DB__PORT=5432`
- `POSTGRES_DB__DATABASE=baby_stats`
- `POSTGRES_DB__USER=postgres`
- `POSTGRES_DB__PASSWORD=postgres`
- `ADMINER_PORT=8080`

Database admin interface available at `http://localhost:8080` via Adminer.

## Development Workflow

1. **Database First**: Start with `docker compose up -d` to run PostgreSQL
2. **Backend Development**: Use `uv run manage.py runserver` for backend development
3. **Frontend Development**: Use `npx expo start` for mobile app development
4. **Schema Changes**: Create Django migrations when modifying models
5. **Type Safety**: Both frontend and backend use strict type checking (mypy/TypeScript)

## Project-Specific Notes

- Backend uses `uv` for dependency management (not pip/poetry)
- Frontend models (`frontend/models/`) should match backend SQLAlchemy models
- Database configuration uses nested environment variables with `__` delimiter
- The project is in early development with minimal API endpoints currently implemented
- MyPy configuration uses Pydantic and mypy plugins
