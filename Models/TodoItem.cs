using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace spa.Models
{
      public class TodoItem
    {
        public long Id { get; set; }
        public string text { get; set; }
        public bool isCompleted { get; set; }
     }
}

