using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using musicMakerApi.Contexts;
using musicMakerApi.Models;

namespace musicMakerApi.Controllers
{
    [Route("api/composition")]
    [ApiController]
    public class CompositionsController : ControllerBase
    {
        private readonly CompositionContext _context;

        public CompositionsController(CompositionContext context)
        {
            _context = context;
        }

        // GET: api/Compositions
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Composition>>> GetCompositions()
        {
            return await _context.Compositions.ToListAsync();
        }

        // GET: api/Compositions/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Composition>> GetComposition(long id)
        {
            var composition = await _context.Compositions.FindAsync(id);

            if (composition == null)
            {
                return NotFound();
            }

            return composition;
        }

        // PUT: api/Compositions/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutComposition(long id, Composition composition)
        {
            if (id != composition.Id)
            {
                return BadRequest();
            }

            _context.Entry(composition).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CompositionExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Compositions
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.
        [HttpPost]
        public async Task<ActionResult<Composition>> PostComposition(Composition composition)
        {
            _context.Compositions.Add(composition);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetComposition), new { id = composition.Id }, composition);
        }

        // DELETE: api/Compositions/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Composition>> DeleteComposition(long id)
        {
            var composition = await _context.Compositions.FindAsync(id);
            if (composition == null)
            {
                return NotFound();
            }

            _context.Compositions.Remove(composition);
            await _context.SaveChangesAsync();

            return composition;
        }

        private bool CompositionExists(long id)
        {
            return _context.Compositions.Any(e => e.Id == id);
        }
    }
}
