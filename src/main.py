from api.catch import router as catch_router
from fastapi import FastAPI

app = FastAPI()

app.include_router(catch_router)
