from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from backend.services.onboarding_service import (
    get_onboarding_progress,
    complete_onboarding_task,
    approve_onboarding_task,
    reject_onboarding_task
)

router = APIRouter()


@router.get("/onboarding/{user_id}")
def onboarding(user_id: int):
    return get_onboarding_progress(user_id)


class CompleteTaskRequest(BaseModel):
    user_id: int


@router.post("/onboarding/task/{task_id}/complete")
def complete_task(task_id: int, request: CompleteTaskRequest):
    res = complete_onboarding_task(task_id, request.user_id)
    if "error" in res:
        raise HTTPException(status_code=404, detail=res["error"])
    return res


@router.post("/onboarding/approve/{task_id}/{manager_id}")
def approve_onboarding(task_id: int, manager_id: int):
    res = approve_onboarding_task(task_id, manager_id)
    if "error" in res:
        raise HTTPException(status_code=404, detail=res["error"])
    return res


@router.post("/onboarding/reject/{task_id}/{manager_id}")
def reject_onboarding(task_id: int, manager_id: int):
    res = reject_onboarding_task(task_id, manager_id)
    if "error" in res:
        raise HTTPException(status_code=404, detail=res["error"])
    return res