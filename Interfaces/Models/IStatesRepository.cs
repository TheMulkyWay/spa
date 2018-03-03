using spa.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace spa.Interfaces.Models
{
    public interface IStatesRepository
    {
        Task<List<State>> GetStatesAsync();
    }
}
