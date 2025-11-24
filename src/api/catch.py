from datetime import datetime as dt, timezone as tz
from fastapi import FastAPI

app = FastAPI()


@app.get("/")
async def root():
    return {"message": "shugar!", "current_time": dt.now(tz=tz.utc)}
