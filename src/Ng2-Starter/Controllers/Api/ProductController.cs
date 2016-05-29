using System;
using System.Collections.Generic;
using System.Globalization;
using Microsoft.AspNetCore.Mvc;
using Ng2Starter.Models;

namespace Ng2Starter.Controllers.Api
{
    [Route("api/products")]
    public class ProductController : Controller
    {
        [HttpGet("")]
        public JsonResult Get()
        {
            var products = new List<Product>
            {
                new Product
                {
                    ProductId = 1,
                    ProductName = "Leaf Rake",
                    ProductCode = "GDN-0011",
                    ReleaseDate = new DateTime(2016, 3, 19).ToString("dd MMM, yyyy", CultureInfo.InvariantCulture),
                    Description = "Leaf rake with 48-inch wooden handle.",
                    Price = 19.95m,
                    StarRating = 3.2f,
                    ImageUrl = "http://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png"
                },
                new Product
                {
                    ProductId = 2,
                    ProductName = "Garden Cart",
                    ProductCode = "GDN-0023",
                    ReleaseDate = new DateTime(2016, 3, 18).ToString("dd MMM, yyyy", CultureInfo.InvariantCulture),
                    Description = "15 gallon capacity rolling garden cart",
                    Price = 32.99m,
                    StarRating = 4.2f,
                    ImageUrl = "http://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png"
                },
                new Product
                {
                    ProductId = 5,
                    ProductName = "Hammer",
                    ProductCode = "TBX-0048",
                    ReleaseDate = new DateTime(2016, 5, 21).ToString("dd MMM, yyyy", CultureInfo.InvariantCulture),
                    Description = "Curved claw steel hammer",
                    Price = 8.9m,
                    StarRating = 4.8f,
                    ImageUrl = "http://openclipart.org/image/300px/svg_to_png/73/rejon_Hammer.png"
                },
                new Product
                {
                    ProductId = 8,
                    ProductName = "Saw",
                    ProductCode = "TBX-0022",
                    ReleaseDate = new DateTime(2016, 5, 15).ToString("dd MMM, yyyy", CultureInfo.InvariantCulture),
                    Description = "15-inch steel blade hand saw",
                    Price = 11.55m,
                    StarRating = 3.7f,
                    ImageUrl = "http://openclipart.org/image/300px/svg_to_png/27070/egore911_saw.png"
                },
                new Product
                {
                    ProductId = 10,
                    ProductName = "Video Game Controller",
                    ProductCode = "GMG-0042",
                    ReleaseDate = new DateTime(2016, 10, 15).ToString("dd MMM, yyyy", CultureInfo.InvariantCulture),
                    Description = "Standard two-button video game controller",
                    Price = 35.95m,
                    StarRating = 4.6f,
                    ImageUrl = "http://openclipart.org/image/300px/svg_to_png/120337/xbox-controller_01.png"
                }
            };

            return Json(products);
        }
    }
}