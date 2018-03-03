﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace spa.Models
{
    public class PagingResult<T>
    {
        public IEnumerable<T> Records { get; set; }
        public int TotalRecords { get; set; }

        public PagingResult(IEnumerable<T> items, int totalRecords)
        {
            TotalRecords = totalRecords;
            Records = items;
        }
    }
}
