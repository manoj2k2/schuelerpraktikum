from pydantic import BaseModel
from typing import List, Optional
import datetime

class StudentBase(BaseModel):
    name: str
    email: str

class StudentCreate(StudentBase):
    pass

class Student(StudentBase):
    id: int

    class Config:
        from_attributes = True

class SMEBase(BaseModel):
    name: str
    email: str

class SMECreate(SMEBase):
    pass

class SME(SMEBase):
    id: int

    class Config:
        from_attributes = True

class InternshipBase(BaseModel):
    title: str
    description: str
    sme_id: int

class InternshipCreate(InternshipBase):
    pass

class Internship(InternshipBase):
    id: int

    class Config:
        from_attributes = True

class ApplicationBase(BaseModel):
    student_id: int
    internship_id: int
    status: str = "pending"

class ApplicationCreate(ApplicationBase):
    pass

class Application(ApplicationBase):
    id: int
    applied_at: datetime.datetime

    class Config:
        from_attributes = True
