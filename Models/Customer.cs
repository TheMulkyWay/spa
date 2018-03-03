using spa.Interfaces.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace spa.Models
{
    public class Customer : ICustomer
    {
    public int Id { get; set; }
    public string FirstName { get; set; }
    public string LastName { get; set; }
    public string Email { get; set; }
    public string Address { get; set; }
    public string City { get; set; }
    public IState State { get; set; }
    public int StateId { get; set; }
    public int Zip { get; set; }
    public string Gender { get; set; }
    public int OrderCount { get; set; }
    public ICollection<IOrder> Orders { get; set; }
  }
}
