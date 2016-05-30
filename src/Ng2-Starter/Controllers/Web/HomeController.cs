using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace Ng2Starter.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult App1()
        {
            return View();
        }
        
        public IActionResult App2()
        {
            ViewData["Message"] = "Angular2 2nd Application.";
            
            return View();
        }

        public IActionResult About()
        {
            ViewData["Message"] = "Your application description page.";

            return View();
        }

        public IActionResult Contact()
        {
            ViewData["Message"] = "Your contact page.";

            return View();
        }

        public IActionResult Error()
        {
            return View();
        }
    }
}
