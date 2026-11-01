from fastapi import FastAPI

app = FastAPI(title="Harbour Coffee API")


@app.get("/api/health")
def health_check():
    return {"status": "ok"}