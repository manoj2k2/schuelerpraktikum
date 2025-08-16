namespace SchuelerpraktikumPlatform.Models;

public class Application
{
    public int Id { get; set; }
    public int StudentId { get; set; }
    public Student? Student { get; set; }
    public int InternshipId { get; set; }
    public Internship? Internship { get; set; }
    public string? Status { get; set; }
}