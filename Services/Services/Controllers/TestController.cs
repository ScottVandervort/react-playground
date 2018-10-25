using SampleServices.Models;
using System.Collections.Generic;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;

namespace WebService.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class TestController : ApiController
    {
        static private List<Person> people;

        static TestController ()
        {
            people = new List<Person>();

            people.Add(new Person { Id = 0, Name = "Homer Simpson" });
            people.Add(new Person { Id = 1, Name = "Mickey Mouse" });

        }

        public System.Web.Http.Results.JsonResult<List<Person>> Get()
        {
            return Json(people);
        }

/*
        public HttpResponseMessage Get()
        {
            return Json(people);

            return people;




            return new HttpResponseMessage()
            {
                Content = new StringContent("GET: Test message")
            };
        }
*/

        public HttpResponseMessage Post()
        {
            return new HttpResponseMessage()
            {
                Content = new StringContent("POST: Test message")
            };
        }

        public HttpResponseMessage Put()
        {
            return new HttpResponseMessage()
            {
                Content = new StringContent("PUT: Test message")
            };
        }
    }
}