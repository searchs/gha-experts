from datetime import datetime as dt, timezone as tz
from fastapi import APIRouter

router = APIRouter()


@router.get("/")
async def root():
    return {"message": "shugar!", "current_time": dt.now(tz=tz.utc)}
