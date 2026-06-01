namespace AlbumProject.Models;

public class Album
{
    public int Id { get; set; }
    public string Title { get; set; } = string.Empty;
    public string Artist { get; set; } = string.Empty;
    public DateTime ReleaseDate { get; set; } = DateTime.UtcNow;
    public string Genre { get; set; } = string.Empty;
}
