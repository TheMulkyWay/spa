using spa.Interfaces.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace spa.Models
{
    public class State : IState
    {
            public int Id { get; set; }
            public string Abbreviation { get; set; }
            public string Name { get; set; }
    }


    


}
