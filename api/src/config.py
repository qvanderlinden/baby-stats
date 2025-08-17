from pydantic import BaseModel, Field
from pydantic_settings import (
    BaseSettings,
    SettingsConfigDict,
)


class PostgresDatabase(BaseModel):
    host: str
    port: int
    database: str
    user: str
    password: str
    driver: str = "psycopg2"

    @property
    def connection_string(self) -> str:
        return f"postgres+{self.driver}://{self.user}:{self.password}@{self.host}:{self.port}/{self.database}"


class Config(BaseSettings):
    model_config = SettingsConfigDict(
        env_file="../.env",
        env_file_encoding="utf-8",
        env_nested_delimiter="__",
        extra="allow",
    )

    db: PostgresDatabase = Field(alias="POSTGRES_DB")
