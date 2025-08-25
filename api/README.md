# Baby stats API

## Lint

```
uvx ruff check
```

```
uvx ruff format
```

## Type checking

```
uv run mypy .
```

## Run

```
uvx run api
```

## Run migrations

```
uv run alembic revision --autogenerate -m "Revision description"
```

```
uv run alembic upgrade head
```