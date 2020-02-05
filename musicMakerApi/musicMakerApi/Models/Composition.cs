using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace musicMakerApi.Models
{
    public class Composition
    {
        public long Id { get; set; }
        public string Title { get; set; }
        public string Notes { get; set; }
    }
}
