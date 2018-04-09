using spa.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace spa.Repository
{
    public class ProductsDataStore
    {
        public static ProductsDataStore Current { get; } = new ProductsDataStore(); 
        public List<Product> Products { get; set; }

        public ProductsDataStore()
        {
            Products = new List<Product>
            {
                new Product{ProductId=1, ProductName="Leaf Rake", ProductCode="GDN-0011",
                                    ReleaseDate="March 19, 2016",
                                    Description="Leaf rake with 48-inch wooden handle.",
                                    Price=19.95, StarRating=4.2, 
                                    ImageUrl= "http://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png" },


                  new Product{ProductId=2, ProductName="Garden Cart", ProductCode="GDN-0023",
                                    ReleaseDate="March 18, 2016",
                                    Description="15 gallon capacity rolling garden cart",
                                    Price=19.95, StarRating=3.2, 
                                    ImageUrl=  "http://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png"  },

                    new Product{ProductId=3, ProductName="Hammer", ProductCode="TBX-0048",
                                    ReleaseDate="May 21, 2017",
                                    Description="Leaf rake with 48-inch wooden handle.",
                                    Price=29.95, StarRating=3.2, 
                                    ImageUrl=  "http://openclipart.org/image/300px/svg_to_png/73/rejon_Hammer.png" },

                      new Product{ProductId=4, ProductName="Saw", ProductCode="TBX-0023",
                                    ReleaseDate="March 19, 2016",
                                    Description="Leaf rake with 48-inch wooden handle.",
                                    Price=19.95, StarRating=4.3, 
                                    ImageUrl="http://openclipart.org/image/300px/svg_to_png/27070/egore911_saw.png" },

                        new Product{ProductId=5, ProductName="Video Game Controller", ProductCode="GMG-0042",
                                    ReleaseDate="March 19, 2016",
                                    Description="Leaf rake with 48-inch wooden handle.",
                                    Price=19.95, StarRating=3.2, 
                                    ImageUrl=  "http://openclipart.org/image/300px/svg_to_png/120337/xbox-controller_01.png" },
            };
        }

    }
}
