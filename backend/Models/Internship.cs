namespace SchuelerpraktikumPlatform.Models;

public class Internship
{
    public int Id { get; set; }
    public string? Title { get; set; }
    public string? Description { get; set; }
    public int SMEId { get; set; }
    public SME? SME { get; set; }
    public ICollection<Application> Applications { get; set; } = new List<Application>();
}