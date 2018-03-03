using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using spa.Repository;

namespace spa.Controllers
{
    public class StatesController : Controller
    {
        [HttpGet()] /* ▓ GetStates ▓ */
        public IActionResult GetStates()
        {
            return Ok(StatesDataStore.Current.States);
        }

        [HttpGet("{id}")]   /* ▓ GetState ▓ */
        public JsonResult GetState(int id)
        {
            return new JsonResult(
                StatesDataStore.Current.States.FirstOrDefault(c => c.Id == id));
        }


    }
}
