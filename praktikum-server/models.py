from sqlalchemy import Column, Integer, String, ForeignKey, DateTime
from sqlalchemy.orm import relationship
from database import Base
import datetime

class Student(Base):
    __tablename__ = "students"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, index=True)
    email = Column(String, unique=True, index=True)

    applications = relationship("Application", back_populates="student")

class SME(Base):
    __tablename__ = "smes"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, index=True)
    email = Column(String, unique=True, index=True)

    internships = relationship("Internship", back_populates="sme")

class Internship(Base):
    __tablename__ = "internships"

    id = Column(Integer, primary_key=True, index=True)
    title = Column(String, index=True)
    description = Column(String)
    sme_id = Column(Integer, ForeignKey("smes.id"))

    sme = relationship("SME", back_populates="internships")
    applications = relationship("Application", back_populates="internship")

class Application(Base):
    __tablename__ = "applications"

    id = Column(Integer, primary_key=True, index=True)
    student_id = Column(Integer, ForeignKey("students.id"))
    internship_id = Column(Integer, ForeignKey("internships.id"))
    status = Column(String, default="pending")
    applied_at = Column(DateTime, default=datetime.datetime.now)

    student = relationship("Student", back_populates="applications")
    internship = relationship("Internship", back_populates="applications")
