from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from backend.routers.dashboard import router as dashboard_router
from backend.routers.auth import router as auth_router
from backend.routers.chat import router as chat_router
from backend.routers.documents import router as documents_router
from backend.routers.announcements import router as announcements_router
from backend.routers.onboarding import router as onboarding_router
from backend.routers.approvals import router as approvals_router
from backend.routers.lnd_content import router as lnd_content_router

app = FastAPI(title="Tata Steel L&D Platform")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(auth_router)
app.include_router(dashboard_router)
app.include_router(chat_router)
app.include_router(documents_router)
app.include_router(announcements_router)
app.include_router(onboarding_router)
app.include_router(approvals_router)
app.include_router(lnd_content_router)

@app.get("/")
def root():
    return {"message": "Tata Steel L&D API Running"}

@app.get("/health")
def health():
    return {"status": "healthy", "database": "connected", "version": "1.0"}