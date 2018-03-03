using spa.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace spa.Interfaces.Repository
{
    public interface ICustomerRepository
    {
        Task<List<Customer>> GetCustomersAsync();
        Task<PagingResult<Customer>> GetCustomersPageAsync(int skip, int take);
        Task<Customer> GetCustomerAsync(int id);
        
        Task<Customer> InsertCustomerAsync(Customer customer);
        Task<bool> UpdateCustomerAsync(Customer customer);
        Task<bool> DeleteCustomerAsync(int id);
        
    }
}
