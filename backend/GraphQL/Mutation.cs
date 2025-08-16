using SchuelerpraktikumPlatform.Data;
using SchuelerpraktikumPlatform.Models;

namespace SchuelerpraktikumPlatform.GraphQL
{
    public class Mutation
    {
        public async Task<Student> CreateStudent(
            string name, string email, string school,
            [Service] ApplicationDbContext context)
        {
            var student = new Student
            {
                Name = name,
                Email = email,
                School = school
            };

            context.Students.Add(student);
            await context.SaveChangesAsync();

            return student;
        }

        public async Task<SME> CreateSME(
            string companyName, string email, string website,
            [Service] ApplicationDbContext context)
        {
            var sme = new SME
            {
                CompanyName = companyName,
                Email = email,
                Website = website
            };

            context.SMEs.Add(sme);
            await context.SaveChangesAsync();

            return sme;
        }

        public async Task<Internship> CreateInternship(
            string title, string description, int smeId,
            [Service] ApplicationDbContext context)
        {
            var internship = new Internship
            {
                Title = title,
                Description = description,
                SMEId = smeId
            };

            context.Internships.Add(internship);
            await context.SaveChangesAsync();

            return internship;
        }

        public async Task<Application> CreateApplication(
            int studentId, int internshipId, string status,
            [Service] ApplicationDbContext context)
        {
            var application = new Application
            {
                StudentId = studentId,
                InternshipId = internshipId,
                Status = status
            };

            context.Applications.Add(application);
            await context.SaveChangesAsync();

            return application;
        }
    }
}
