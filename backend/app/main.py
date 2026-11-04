from fastapi import FastAPI
from app.routes.products import router as products_router

app = FastAPI(title="Harbour Coffee API")
app.include_router(products_router)
#This will register the products router with the FastAPI application.

@app.get("/api/health")
def health_check():
    return {"status": "ok"}