using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Data;
using API.DTOs;
using API.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
   
    public class NestNoticesController : BaseApiController
    {
        private readonly DataContext _context;
        public NestNoticesController(DataContext context)
        {
            _context = context;
        }

        [HttpGet]
// pobieranie listy zgłoszonych dróg wspinaczkowych
        public async Task<ActionResult<List<NestNotice>>> GetNestNotices()
        {
            var NestNotices = _context.NestNotices.ToListAsync();
            return await NestNotices;
        }

        [HttpPost("addnotice")]

        //dodawanie zgłoszenia 
        public async Task<ActionResult<NestNotice>> AddNotice(AddNoticeDTO addNoticeDTO)
        {
            if (await NestNoticeExists(addNoticeDTO.RouteName)) return BadRequest("Droga już została zgłoszona");

            var nestnotice = new NestNotice
            {
                RouteName = addNoticeDTO.RouteName,
                RockName = addNoticeDTO.RockName,
                RegionName = addNoticeDTO.RegionName,
                NoticeDescription = addNoticeDTO.NoticeDescription


            };
            _context.NestNotices.Add(nestnotice);
            await _context.SaveChangesAsync();
            return nestnotice;

        }
        //sprawdzenie czy już jest takie zgłoszenie w bazie danych sprawdzenie czy istniej w bazie już droga o tej samej nazwie 

        private async Task<bool> NestNoticeExists(string routename)
        {
            return await _context.NestNotices.AnyAsync(x => x.RouteName == routename.ToLower());
        }

    }
}