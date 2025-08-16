using SchuelerpraktikumPlatform.Data;
using SchuelerpraktikumPlatform.Models;

namespace SchuelerpraktikumPlatform.GraphQL
{
    public class Query
    {
        public IQueryable<Student> GetStudents([Service] ApplicationDbContext context) =>
            context.Students;
    }
}
