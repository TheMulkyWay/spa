using System.Collections.Generic;

namespace spa.Interfaces.Models
{
    public interface ICustomer
    {
        string Address { get; set; }
        string City { get; set; }
        string Email { get; set; }
        string FirstName { get; set; }
        string Gender { get; set; }
        int Id { get; set; }
        string LastName { get; set; }
        int OrderCount { get; set; }
        ICollection<IOrder> Orders { get; set; }
        IState State { get; set; }
        int StateId { get; set; }
        int Zip { get; set; }
    }
}