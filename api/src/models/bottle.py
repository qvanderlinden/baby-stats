from datetime import datetime as dt
from sqlalchemy.orm import Mapped, mapped_column

from .base import Base


class Bottle(Base):
    """Model representing a baby bottle feeding record."""

    __tablename__ = "bottles"

    # Primary key
    id: Mapped[int] = mapped_column(primary_key=True, index=True)

    # Bottle details
    datetime: Mapped[dt]
    quantity: Mapped[float]

    # Timestamps
    created_at: Mapped[dt] = mapped_column(default=dt.now)
    updated_at: Mapped[dt] = mapped_column(default=dt.now, onupdate=dt.now)

    def __repr__(self) -> str:
        return f"<Bottle(id={self.id}, datetime={self.datetime}, quantity={self.quantity}ml)>"
