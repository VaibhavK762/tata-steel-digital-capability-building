from fastapi import APIRouter

from backend.services.approval_service import (
    submit_completion_request,
    get_pending_requests,
    approve_request,
    reject_request
)

router = APIRouter()


@router.post("/approvals/submit/{user_id}/{course_id}")
def submit(user_id: int, course_id: str):

    return submit_completion_request(
        user_id,
        course_id
    )


@router.get("/approvals/pending")
def pending():

    return get_pending_requests()


@router.post("/approvals/approve/{request_id}/{manager_id}")
def approve(request_id: int, manager_id: int):

    return approve_request(
        request_id,
        manager_id
    )


@router.post("/approvals/reject/{request_id}/{manager_id}")
def reject(request_id: int, manager_id: int):

    return reject_request(
        request_id,
        manager_id
    )