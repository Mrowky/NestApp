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


        //[Authorize]
        [HttpGet]
        // pobieranie listy zgłoszonych dróg wspinaczkowych
        public async Task<ActionResult<List<NestNotice>>> GetNestNotices()
        {
            var NestNotices = _context.NestNotices.Where(x => x.IsActive).ToListAsync();
            return await NestNotices;
        }
        [HttpGet("notactive")]
        // pobieranie listy nieaktywnych zgłoszeń dróg wspinaczkowych dla admina
        public async Task<ActionResult<List<NestNotice>>> GetNotActiveNestNotices()
        {
            var NestNotices = _context.NestNotices.Where(x => !x.IsActive).ToListAsync();
            return await NestNotices;
        }

        [HttpGet("{id}")]
        // pobieranie zgłoszenia drogi wspinaczkowej do edycji 
        public async Task<NestNotice> GetNoticeToEditAsync(int id)
        {
            return await _context.NestNotices.FindAsync(id);
        }
        [HttpPost("confirmnotice")]
        public async Task<ActionResult<bool>> ConfirmNotice(int nestnoticeId)
        {
            //to do sprawdzenie czy taka droga istnieje if (await NestNoticeExists(addNoticeDTO.RouteName)) return BadRequest("Droga już została zgłoszona");
            var nestNotice = _context.NestNotices.FirstOrDefault(x => x.Id == nestnoticeId);
            nestNotice.IsActive = true;
            int v = await _context.SaveChangesAsync();
            return true;

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
                NoticeDescription = addNoticeDTO.NoticeDescription,
                IsActive = false
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

        [HttpPut("{id}")] //edycja zgłoszenia
        public async Task<ActionResult> UpdateNestNotice(int id, EditNoticeDTO editNoticeDTO)
        {
            var nestNotice = await _context.NestNotices.FindAsync(id);
            {
                nestNotice.RouteName = editNoticeDTO.RouteName;
                nestNotice.RockName = editNoticeDTO.RockName;
                nestNotice.RegionName = editNoticeDTO.RegionName;
                nestNotice.NoticeDescription = editNoticeDTO.NoticeDescription;
            }
             _context.Entry(nestNotice).State = EntityState.Modified;

            if (await _context.SaveChangesAsync() > 0 ) return NoContent();
            return BadRequest("failed to update nestnotice");
            
        }

    }
}