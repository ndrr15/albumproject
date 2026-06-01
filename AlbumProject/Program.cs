global using AlbumProject.Data;
global using AlbumProject.Models;
global using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddDbContext<ApplicationDbContext>(options =>
    options.UseSqlite(builder.Configuration.GetConnectionString("DefaultConnection")));
builder.Services.AddCors(options => options.AddPolicy("AllowLocal", policy =>
{
    policy.WithOrigins("http://localhost:4200", "http://localhost:8100")
          .AllowAnyHeader()
          .AllowAnyMethod();
}));

var app = builder.Build();

// Habilitar Swagger siempre (incluso en Production para desarrollo)
app.UseSwagger();
app.UseSwaggerUI();

using (var scope = app.Services.CreateScope())
{
    var db = scope.ServiceProvider.GetRequiredService<ApplicationDbContext>();
    db.Database.EnsureCreated();
}

app.UseHttpsRedirection();
app.UseCors("AllowLocal");
app.UseAuthorization();
app.MapControllers();
app.Run();
