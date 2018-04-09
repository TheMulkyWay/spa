using spa.Interfaces.Models;
using spa.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;


namespace spa.Repository
{
    public class CustomersDataStore
    {

        public static CustomersDataStore Current { get; } = new CustomersDataStore();

        public List<Customer> Customers {get; set;}


      public CustomersDataStore()
      {
              Customers= new List<Customer>
               {
                 new Customer() {Id=1, FirstName="John", LastName="Healey", Gender="male", Email="acmecorp.com",Address="1234 Anywhere St", StateId=1,
                   Orders = new List<IOrder>
                   {
                       new Order{Id=1, Product = "Basket", Price = 29.99M, Quantity = 1 },
                       new Order {Id=2, Product = "Yarn", Price = 9.99M, Quantity = 1 }
                   }
                   
                   },
                 new Customer() {Id=2, FirstName="John", LastName="Mulkearns", Gender="male", Email="hotmail.com",Address="6 Girasol 35014 ", StateId=1,
                   Orders = new List<IOrder>
                   {
                       new Order{Id=4,Product = "Speakers", Price = 499.99M, Quantity = 1 },
                        new Order { Id=5, Product = "iPod", Price = 399.99M, Quantity = 1 }
                   }
                   
                   },
                 new Customer() {Id=3, FirstName="John", LastName="Healey-Case", Gender="male", Email="hotmail.com",Address="6 Girasol 35014 ", StateId=1,
                   Orders = new List<IOrder>
                   {
                       new Order{Id=4, Product = "Speakers", Price = 499.99M, Quantity = 1 },
                        new Order {Id=5, Product = "iPod", Price = 399.99M, Quantity = 1 }
                   }
                   
                   },
                 new Customer() {Id=4, FirstName="John", LastName="Pragnell", Gender="male", Email="hotmail.com",Address="6 Girasol 35014 ", StateId=1,
                   Orders = new List<IOrder>
                   {
                       new Order{Id=12,Product = "Lego City", Price = 49.99M, Quantity = 1 },
                        new Order {Id=8, Product = "Lamp", Price = 19.99M, Quantity = 1 }
                   }
                   
                   },
                 new Customer() {Id=5, FirstName="Florin", LastName="Balan", Gender="male", Email="hotmail.com",Address="6 Girasol 35014 ", StateId=1,
                   Orders = new List<IOrder>
                   {
                       new Order{ Id=6,Product = "Table", Price = 329.99M, Quantity = 1 },
                        new Order { Id=5,Product = "iPod", Price = 399.99M, Quantity = 1 }
                   }
                   
                   },
                 new Customer() {Id=6, FirstName="Thomas", LastName="Gene", Gender="male", Email="hotmail.com",Address="6 Girasol 35014 ", StateId=1,
                   Orders = new List<IOrder>
                   {
                       new Order{Id=4, Product = "Speakers", Price = 499.99M, Quantity = 1 },
                        new Order {Id=5, Product = "iPod", Price = 399.99M, Quantity = 1 }
                   }
                   
                   },
                 new Customer() {Id=7, FirstName="Danny", LastName="Wahlin", Gender="male", Email="hotmail.com",Address="6 Girasol 35014 ", StateId=1,
                   Orders = new List<IOrder>
                   {
                       new Order{Id=7, Product = "Chair", Price = 49.99M, Quantity = 1 },
                        new Order { Id=14,Product = "Bat", Price = 9.99M, Quantity = 1 }
                   }
                   
                   },

                };
      }
        
    }
}
