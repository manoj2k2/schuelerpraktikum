from fastapi import FastAPI, Depends, HTTPException
from sqlalchemy.orm import Session
from typing import List

from . import models, schemas
from .database import SessionLocal, engine

models.Base.metadata.create_all(bind=engine)

app = FastAPI()

# Dependency to get the database session
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@app.get('/')
async def read_root():
    return {"message": "Welcome to Praktikum Server!"}

# Student Endpoints
@app.post("/students/", response_model=schemas.Student)
def create_student(student: schemas.StudentCreate, db: Session = Depends(get_db)):
    db_student = models.Student(name=student.name, email=student.email)
    db.add(db_student)
    db.commit()
    db.refresh(db_student)
    return db_student

@app.get("/students/", response_model=List[schemas.Student])
def read_students(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    students = db.query(models.Student).offset(skip).limit(limit).all()
    return students

@app.get("/students/{student_id}", response_model=schemas.Student)
def read_student(student_id: int, db: Session = Depends(get_db)):
    student = db.query(models.Student).filter(models.Student.id == student_id).first()
    if student is None:
        raise HTTPException(status_code=404, detail="Student not found")
    return student

# SME Endpoints
@app.post("/smes/", response_model=schemas.SME)
def create_sme(sme: schemas.SMECreate, db: Session = Depends(get_db)):
    db_sme = models.SME(name=sme.name, email=sme.email)
    db.add(db_sme)
    db.commit()
    db.refresh(db_sme)
    return db_sme

@app.get("/smes/", response_model=List[schemas.SME])
def read_smes(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    smes = db.query(models.SME).offset(skip).limit(limit).all()
    return smes

@app.get("/smes/{sme_id}", response_model=schemas.SME)
def read_sme(sme_id: int, db: Session = Depends(get_db)):
    sme = db.query(models.SME).filter(models.SME.id == sme_id).first()
    if sme is None:
        raise HTTPException(status_code=404, detail="SME not found")
    return sme

# Internship Endpoints
@app.post("/internships/", response_model=schemas.Internship)
def create_internship(internship: schemas.InternshipCreate, db: Session = Depends(get_db)):
    db_internship = models.Internship(**internship.dict())
    db.add(db_internship)
    db.commit()
    db.refresh(db_internship)
    return db_internship

@app.get("/internships/", response_model=List[schemas.Internship])
def read_internships(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    internships = db.query(models.Internship).offset(skip).limit(limit).all()
    return internships

@app.get("/internships/{internship_id}", response_model=schemas.Internship)
def read_internship(internship_id: int, db: Session = Depends(get_db)):
    internship = db.query(models.Internship).filter(models.Internship.id == internship_id).first()
    if internship is None:
        raise HTTPException(status_code=404, detail="Internship not found")
    return internship

# Application Endpoints
@app.post("/applications/", response_model=schemas.Application)
def create_application(application: schemas.ApplicationCreate, db: Session = Depends(get_db)):
    db_application = models.Application(**application.dict())
    db.add(db_application)
    db.commit()
    db.refresh(db_application)
    return db_application

@app.get("/applications/", response_model=List[schemas.Application])
def read_applications(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    applications = db.query(models.Application).offset(skip).limit(limit).all()
    return applications

@app.get("/applications/{application_id}", response_model=schemas.Application)
def read_application(application_id: int, db: Session = Depends(get_db)):
    application = db.query(models.Application).filter(models.Application.id == application_id).first()
    if application is None:
        raise HTTPException(status_code=404, detail="Application not found")
    return application