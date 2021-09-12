using System.Threading.Tasks;
using API.Data;
using Microsoft.AspNetCore.Mvc;
using API.Entities;
using System.Security.Cryptography;
using System.Text;

namespace API.Controllers
{

    public class AdminController : BaseApiController
    {
        private readonly DataContext _context;
        public AdminController(DataContext context)
        {
            _context = context;
        }


//register służy do dodania administratora tak żeby jego hasło było przechowywane w bd nie jest używane przez użytkowanika aplikacji 
        [HttpPost("register")]
        public async Task<ActionResult<Admin>> Register(string login, string password)
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

            return admin;
        }
      //  [HttpPost("login")]

    }
}


