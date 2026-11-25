from pydantic import BaseModel, Field


class Product(BaseModel):
    """Defines the information for a product, including its ID, name,
    base price in cents, and availability status."""
    id: int = Field(gt=0)
    name: str = Field(min_length=1)
    # The base price in cents must be a non-negative integer, as the
    # frontend expects an integer value for price in cents.
    base_price_cents: int = Field(ge=0)
    available: bool
