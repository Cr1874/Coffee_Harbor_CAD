import pytest
from fastapi.testclient import TestClient

from app.main import app


@pytest.fixture
def client():
    # This can help me provide a fresh instance of the TestClient for each
    # test function, ensuring that tests do not interfere with each other.
    with TestClient(app) as test_client:
        yield test_client


def test_menu_returns_product_information(client):
    response = client.get("/api/products")

    assert response.status_code == 200
    products = response.json()
    assert isinstance(products, list)
    assert products
    # This is a set of the expected fields that the Angular frontend
    # expects to receive for each product.
    expected_fields = {"id", "name", "base_price_cents", "available"}

    for product in products:
        assert expected_fields <= product.keys()
        assert isinstance(product["name"], str)


def test_menu_prices_are_nonnegative_integer_cents(client):
    response = client.get("/api/products")

    assert response.status_code == 200
    for product in response.json():
        assert type(product["base_price_cents"]) is int
        # Exact type check also rejects float values that are mathematically
        # integers, like 350.0, which is important because the frontend
        # expects an integer value for price in cents.
        assert product["base_price_cents"] >= 0


def test_health_endpoint_still_works(client):
    response = client.get("/api/health")

    assert response.status_code == 200
    assert response.json() == {"status": "ok"}
