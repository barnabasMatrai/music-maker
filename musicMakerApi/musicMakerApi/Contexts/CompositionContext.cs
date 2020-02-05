using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using musicMakerApi.Contexts;
using musicMakerApi.Models;

namespace musicMakerApi.Contexts
{
    public class CompositionContext : DbContext
    {
        public CompositionContext(DbContextOptions<CompositionContext> options)
            : base(options)
        {
        }

        public DbSet<Composition> Compositions { get; set; }
    }
}
