using Microsoft.EntityFrameworkCore;
using spa.Interfaces.Models;
using spa.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace spa.Repository
{
    public class CustomersDbContext : DbContext
    {
       public DbSet<Customer> Customers { get; set; }
        public DbSet<Order> Orders { get; set; }
        public DbSet<State> States { get; set; }

        public CustomersDbContext (DbContextOptions<CustomersDbContext> options) : base(options) { }
    
    }
}
