from fastapi import APIRouter

from app.temp_data import PRODUCTS
from app.schemas import Product

router = APIRouter(prefix="/api/products", tags=["products"])


@router.get("", response_model=list[Product])
def list_products():
    """"Returns a list of products, each represented by a Product schema, which includes the product's ID, name, base price in cents, and availability status."""
    return PRODUCTS