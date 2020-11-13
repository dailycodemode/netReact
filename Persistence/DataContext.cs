using System;
using Domain;
using Microsoft.EntityFrameworkCore;

namespace Persistence
{
  public class DataContext : DbContext
  {
    public DataContext(DbContextOptions options) : base(options)
    {

    }

// where you add your tables to the c/ class
    public DbSet<Value> Values { get; set; }   //table name
    public DbSet<Activity> Activities { get; set; }
    
    // seeding of data
    protected override void OnModelCreating(ModelBuilder builder)
    {
        builder.Entity<Value>()
            .HasData(
                new Value {Id = 1 , Name = "Value 101"},
                new Value {Id = 2 , Name = "Value 102"},
                new Value {Id = 3 , Name = "Value 103"}
            );
    }
  }
}
