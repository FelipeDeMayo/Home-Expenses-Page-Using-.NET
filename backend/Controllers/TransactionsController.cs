using Microsoft.AspNetCore.Mvc;
using MyApp.Models;
using MyApp.Services;

namespace MyApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TransactionsController : ControllerBase
    {
        private readonly TransactionService _transactionService;

        public TransactionsController(TransactionService transactionService)
        {
            _transactionService = transactionService;
        }

        // Criação de Transaction
        [HttpPost]
        public IActionResult Post([FromBody] Transaction transaction)
        {
            if (transaction == null || string.IsNullOrEmpty(transaction.Description) || transaction.Value <= 0 || string.IsNullOrEmpty(transaction.Type))
            {
                return BadRequest(new { error = "Dados inválidos" });
            }

            var newTransaction = _transactionService.CreateTransaction(transaction);
            return CreatedAtAction(nameof(Post), newTransaction);
        }

        // Listagem de Transactions
        [HttpGet]
        public IActionResult Get()
        {
            return Ok(_transactionService.GetTransactions());
        }
    }
}
