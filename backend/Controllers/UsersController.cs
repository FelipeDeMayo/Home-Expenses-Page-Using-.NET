using Microsoft.AspNetCore.Mvc;
using MyApp.Models;
using MyApp.Services;

namespace MyApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private readonly UserService _userService;

        public UsersController(UserService userService)
        {
            _userService = userService;
        }

        // Criação de Usuário
        [HttpPost]
        public IActionResult Post([FromBody] User user)
        {
            if (user == null || string.IsNullOrEmpty(user.Name) || user.Age <= 0)
            {
                return BadRequest(new { error = "Nome e idade são obrigatórios" });
            }

            var newUser = _userService.CreateUser(user);
            return CreatedAtAction(nameof(Post), newUser);
        }

        // Listagem de Usuários
        [HttpGet]
        public IActionResult Get()
        {
            return Ok(_userService.GetUsers());
        }

        // Delete de Usuários e Transactions
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            var result = _userService.DeleteUser(id);
            if (result)
            {
                return Ok(new { message = "Usuário e suas transações foram deletados" });
            }
            return NotFound(new { error = "Usuário não encontrado" });
        }
    }
}
