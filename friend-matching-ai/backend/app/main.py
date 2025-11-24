from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def root():
    return {"message": "Friend Matching API up and running"}
