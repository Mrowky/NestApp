using API.Entities;
using Microsoft.EntityFrameworkCore;

namespace API.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions options) : base(options)
        {
        }

        public DbSet<NestNotice> NestNotices { get; set; }

        public DbSet<Admin> Admins {get; set; }
    }
}