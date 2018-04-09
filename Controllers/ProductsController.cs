using Microsoft.AspNetCore.Mvc;
using spa.Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace spa.Controllers
{

    [Route("api/products")]
    public class ProductsController : Controller
    {

        [HttpGet()]     /* ▓ Get multiple Products ▓ */
        public IActionResult GetProducts()
        { 
            return Ok(ProductsDataStore.Current.Products); 
        }

        [HttpGet("{id}")]   /* ▓ Get single Product ▓ */
        public JsonResult GetProduct(int id)
        {   
            return new JsonResult(
              ProductsDataStore.Current.Products.FirstOrDefault(p => p.ProductId == id));
        }
    }
}
