using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Data;
using API.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class NestNoticesController : ControllerBase
    {
        private readonly DataContext _context;
        public NestNoticesController(DataContext context)
        {
            _context = context;
        }

        [HttpGet]

        public async Task<ActionResult<List<NestNotice>>> GetNestNotices()
        {
            var NestNotices = _context.NestNotices.ToListAsync();
            return await NestNotices;
        }

    }
}