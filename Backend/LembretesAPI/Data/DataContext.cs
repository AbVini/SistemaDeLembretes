using LembretesAPI.Entities;
using Microsoft.EntityFrameworkCore;

namespace LembretesAPI.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options)
        {

        }

        public DbSet<Lembrete> lembretes { get; set; }
    }
}
