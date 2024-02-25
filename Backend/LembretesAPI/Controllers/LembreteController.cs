using LembretesAPI.Data;
using LembretesAPI.Entities;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace LembretesAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LembreteController : ControllerBase
    {
        //Onde sao criados os metodos da Api como GET e DELETE
        private readonly DataContext _context;

        public LembreteController(DataContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<List<Lembrete>>> GetAllLembretes()
        {
            var lembretes = await _context.lembretes.ToListAsync();
                    
            return Ok(lembretes);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<List<Lembrete>>> GetLembrete(int id)
        {
            var lembrete = await _context.lembretes.FindAsync(id);

            if (lembrete is null)
                return NotFound("Lembrete não encontrado.");

            return Ok(lembrete);
        }

        [HttpPost]
        public async Task<ActionResult<List<Lembrete>>> AddLembrete(Lembrete lembrete)
        {
            _context.lembretes.Add(lembrete);
            await _context.SaveChangesAsync();


            return Ok(await _context.lembretes.ToListAsync());
        }

        [HttpDelete]
        public async Task<ActionResult<List<Lembrete>>> DeleteLembrete(int id)
        {
            var dbLembrete = await _context.lembretes.FindAsync(id);
            if (dbLembrete is null)
                return NotFound("Lembrete não encontrado");

            _context.lembretes.Remove(dbLembrete);
            await _context.SaveChangesAsync();


            return Ok(await _context.lembretes.ToListAsync());
        }

    }
}
