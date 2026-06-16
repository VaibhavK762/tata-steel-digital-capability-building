from fastapi import FastAPI

from backend.routers.dashboard import router as dashboard_router

app = FastAPI(
    title="Tata Steel L&D Platform"
)

app.include_router(
    dashboard_router
)

@app.get("/")
def root():
    return {
        "message":
        "Tata Steel L&D API Running"
    }

@app.get("/health")
def health():
    return {
        "status": "healthy",
        "database": "connected",
        "version": "1.0"
    }