using Microsoft.AspNetCore.Mvc;

namespace AlbumProject.Controllers;

[ApiController]
[Route("api/[controller]")]
public class AlbumsController : ControllerBase
{
    private readonly ApplicationDbContext _db;

    public AlbumsController(ApplicationDbContext db)
    {
        _db = db;
    }

    [HttpGet]
    public async Task<IEnumerable<Album>> Get() => await _db.Albums.ToListAsync();

    [HttpGet("{id}")]
    public async Task<ActionResult<Album>> Get(int id)
    {
        var album = await _db.Albums.FindAsync(id);
        return album is null ? NotFound() : Ok(album);
    }

    [HttpPost]
    public async Task<ActionResult<Album>> Post(Album album)
    {
        _db.Albums.Add(album);
        await _db.SaveChangesAsync();
        return CreatedAtAction(nameof(Get), new { id = album.Id }, album);
    }

    [HttpPut("{id}")]
    public async Task<IActionResult> Put(int id, Album album)
    {
        if (id != album.Id) return BadRequest();
        _db.Entry(album).State = EntityState.Modified;
        await _db.SaveChangesAsync();
        return NoContent();
    }

    [HttpDelete("{id}")]
    public async Task<IActionResult> Delete(int id)
    {
        var album = await _db.Albums.FindAsync(id);
        if (album is null) return NotFound();
        _db.Albums.Remove(album);
        await _db.SaveChangesAsync();
        return NoContent();
    }
}
