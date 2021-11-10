using System.Threading.Tasks;
using API.Data;
using API.DTOs;
using Microsoft.AspNetCore.Mvc;
using API.Entities;
using System.Security.Cryptography;
using System.Text;
using Microsoft.EntityFrameworkCore;
using API.Interfaces;

namespace API.Controllers
{

    public class AdminController : BaseApiController
    {
        private readonly DataContext _context;
        private readonly ITokenService _tokenService;
        public AdminController(DataContext context, ITokenService tokenService )
        {
            _tokenService = tokenService;
            _context = context;
        }


        //register służy do dodania administratora tak żeby jego hasło było przechowywane w bd nie jest używane przez użytkowanika aplikacji 
        [HttpPost("register")]
        public async Task<ActionResult<AdminDto>> Register(string login, string password)
        {
            using var hmac = new HMACSHA512();

            var admin = new Admin
            {
                Login = login,
                PasswordHash = hmac.ComputeHash(Encoding.UTF8.GetBytes(password)),
                PasswordSalt = hmac.Key

            };
            _context.Admins.Add(admin);
            await _context.SaveChangesAsync();

            return new AdminDto
            {
                Login = admin.Login,
                Token = _tokenService.CreateToken(admin)
            };
        }
        //logowanie administratora
        [HttpPost("login")]

        public async Task<ActionResult<AdminDto>> Login (AdminLoginDTO adminLoginDTO)
        {
           var admin = await _context.Admins
           .SingleOrDefaultAsync(x => x.Login == adminLoginDTO.Login);
           if (admin == null) return Unauthorized("Zła nazwa uzytkownika");

           using var hmac = new HMACSHA512(admin.PasswordSalt);
           var computedHash = hmac.ComputeHash(Encoding.UTF8.GetBytes(adminLoginDTO.Password));

            for (int i = 0; i < computedHash.Length; i++)
            {
                if (computedHash[i] != admin.PasswordHash[i]) return Unauthorized("Invalid password");
            }
              
              return new AdminDto
            {
                Login = admin.Login,
                Token = _tokenService.CreateToken(admin)
            };
        }
    }

}


