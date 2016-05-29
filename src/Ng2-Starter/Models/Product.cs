﻿using System;

namespace Ng2Starter.Models
{
    public class Product
    {
        public int ProductId { get; set; }
        public string ProductName { get; set; }
        public string ProductCode { get; set; }
        public string ReleaseDate { get; set; }
        public decimal Price { get; set; }
        public string Description { get; set; }
        public float StarRating { get; set; }
        public string ImageUrl { get; set; }
    }
}