from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from backend.services.auth_service import login, get_user_by_id

router = APIRouter(prefix="/auth", tags=["Auth"])

class LoginRequest(BaseModel):
    email: str
    password: str

@router.post("/login")
def login_user(request: LoginRequest):
    user = login(request.email, request.password)
    if not user:
        raise HTTPException(
            status_code=401,
            detail="Invalid email or password"
        )
    return {
        "message": "Login successful",
        "user": user
    }

@router.get("/user/{user_id}")
def get_user(user_id: int):
    user = get_user_by_id(user_id)
    if not user:
        raise HTTPException(
            status_code=404,
            detail="User not found"
        )
    return user