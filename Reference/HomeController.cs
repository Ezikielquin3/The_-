using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using PracticeWebsite.Models;

namespace PracticeWebsite.Controllers;

public class HomeController : Controller
{
    private readonly ILogger<HomeController> _logger;

    public HomeController(ILogger<HomeController> logger)
    {
        _logger = logger;
    }

    public IActionResult Index()
    {
        return View();
    }
    public IActionResult Schedule()
    {
        return View();
    }
    public IActionResult Schedule2()
    {
        return View();
    }
    public IActionResult Videos()
    {
        return View();
    }
    public IActionResult Videos2()
    {
        return View();
    }
    public IActionResult Pricing()
    {
        return View();
    }
    public IActionResult AboutUs()
    {
        return View();
    }
    public IActionResult Instagram()
    {
        return View();
    }
    public IActionResult Privacy()
    {
        return View();
    }



    public IActionResult VideoView1()
    {
        return View();
    }
    public IActionResult VideoView2()
    {
        return View();
    }
    public IActionResult VideoView3()
    {
        return View();
    }
    public IActionResult VideoView4()
    {
        return View();
    }
    public IActionResult VideoView5()
    {
        return View();
    }
    public IActionResult VideoView6()
    {
        return View();
    }
    public IActionResult VideoView7()
    {
        return View();
    }
    public IActionResult VideoView8()
    {
        return View();
    }
    public IActionResult VideoView9()
    {
        return View();
    }
    public IActionResult VideoView10()
    {
        return View();
    }


    [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
    public IActionResult Error()
    {
        return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
    }
}

