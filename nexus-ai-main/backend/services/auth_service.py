from datetime import datetime, timedelta
from typing import Optional, Dict
from passlib.context import CryptContext
import jwt
from pydantic import BaseModel, EmailStr
import os

# Simple in-memory store (replace with DB in production)
_users: Dict[str, Dict[str, str]] = {}

pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

JWT_SECRET = os.getenv("JWT_SECRET", "dev-secret-change-me")
JWT_ALG = "HS256"
JWT_EXP_MIN = int(os.getenv("JWT_EXP_MIN", "60"))

class UserCreate(BaseModel):
    email: EmailStr
    password: str

class UserLogin(BaseModel):
    email: EmailStr
    password: str

class TokenResponse(BaseModel):
    access_token: str
    token_type: str = "bearer"

def hash_password(password: str) -> str:
    return pwd_context.hash(password)

def verify_password(password: str, hashed: str) -> bool:
    return pwd_context.verify(password, hashed)

def create_access_token(sub: str) -> str:
    now = datetime.utcnow()
    payload = {
        "sub": sub,
        "iat": int(now.timestamp()),
        "exp": int((now + timedelta(minutes=JWT_EXP_MIN)).timestamp())
    }
    return jwt.encode(payload, JWT_SECRET, algorithm=JWT_ALG)

def signup(user: UserCreate) -> TokenResponse:
    if user.email in _users:
        raise ValueError("User already exists")
    _users[user.email] = {"password": hash_password(user.password)}
    token = create_access_token(user.email)
    return TokenResponse(access_token=token)

def login(user: UserLogin) -> TokenResponse:
    record = _users.get(user.email)
    if not record or not verify_password(user.password, record['password']):
        raise ValueError("Invalid credentials")
    token = create_access_token(user.email)
    return TokenResponse(access_token=token)

def decode_token(token: str) -> Optional[str]:
    try:
        data = jwt.decode(token, JWT_SECRET, algorithms=[JWT_ALG])
        return data.get("sub")
    except Exception:
        return None
