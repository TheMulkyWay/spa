using Microsoft.Extensions.Logging;
using spa.Interfaces.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using spa.Models;

namespace spa.Repository
{
     public class StatesRepository : IStatesRepository
    {
        private readonly CustomersDbContext _Context;
        private readonly ILogger _Logger;

        public StatesRepository(CustomersDbContext context, ILoggerFactory loggerFactory)
        {
            _Context = context;
            _Logger = loggerFactory.CreateLogger("StatesRepository");
        }

        public async Task<List<State>> GetStatesAsync()
        {
            return await _Context.States.OrderBy(s => s.Abbreviation).ToListAsync();
        }
    }
}
