namespace SchuelerpraktikumPlatform.Models;

public class SME
{
    public int Id { get; set; }
    public string? CompanyName { get; set; }
    public string? Email { get; set; }
    public string? Website { get; set; }
    public ICollection<Internship> Internships { get; set; } = new List<Internship>();
}