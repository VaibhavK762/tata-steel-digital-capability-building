from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from agents.orchestrator import orchestrate

router = APIRouter(prefix="/chat", tags=["Chat"])

class ChatRequest(BaseModel):
    message: str
    user_id: int
    user_type: str

@router.post("/")
def chat(request: ChatRequest):
    try:
        result = orchestrate(
            message=request.message,
            user_id=request.user_id,
            user_type=request.user_type
        )
        return result
    except Exception as e:
        raise HTTPException(
            status_code=500,
            detail=f"Agent error: {str(e)}"
        )