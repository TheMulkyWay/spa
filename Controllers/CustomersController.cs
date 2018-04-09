using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using System.Text;
using System.Threading.Tasks;
using spa.Repository;

namespace spa.Controllers
{
     [Route("api/customers")]
    public class CustomersController : Controller 
    {
        [HttpGet()] /* ▓ GetCustomers ▓ */
        public IActionResult GetCustomers()
        {
            return Ok(CustomersDataStore.Current.Customers);
        }

        [HttpGet("{id}")]   /* ▓ GetCustomer ▓ */
        public JsonResult GetCustomer(int id)
        {
            return new JsonResult(
                CustomersDataStore.Current.Customers.FirstOrDefault(c => c.Id == id));
        }

    }
}
