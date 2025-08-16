using Microsoft.EntityFrameworkCore;
using SchuelerpraktikumPlatform.Models;

namespace SchuelerpraktikumPlatform.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        {
        }

        public DbSet<Student> Students { get; set; }
        public DbSet<SME> SMEs { get; set; }
        public DbSet<Internship> Internships { get; set; }
        public DbSet<Application> Applications { get; set; }
    }
}
