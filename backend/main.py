# from fastapi import FastAPI
# from fastapi.middleware.cors import CORSMiddleware

# app = FastAPI()

# # Allow requests from React frontend
# app.add_middleware(
#     CORSMiddleware,
#     allow_origins=["*"],  # replace * with your frontend URL for security
#     allow_credentials=True,
#     allow_methods=["*"],
#     allow_headers=["*"],
# )

# # Simple route
# @app.get("/")
# def read_root():
#     return {"message": "Hello from FastAPI!"}

# @app.get("/api/data")
# def get_data():
#     return {"framework": "FastAPI", "language": "Python"}


from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware


app = FastAPI()

# Hardcoded data
users = [
    {"id": 1, "name": "Neha", "role": "Developer"},
    {"id": 2, "name": "Arjun", "role": "Designer"},
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # For development only; restrict later
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
# Model for creating new users
class User(BaseModel):
    name: str
    role: str

@app.get("/")
def root():
    return {"message": "Welcome to the FastAPI backend!"}

@app.get("/users")
def get_users():
    return {"users": users}

@app.post("/users")
def add_user(user: User):
    new_user = {"id": len(users) + 1, **user.dict()}
    users.append(new_user)
    return {"message": "User added successfully!", "user": new_user}
