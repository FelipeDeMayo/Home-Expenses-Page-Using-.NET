using MyApp.Models;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text.Json;

namespace MyApp.Services
{
    public class TransactionService
    {
        private const string TRANSACTIONS_FILE = "./Data/transactions.json";

        public List<Transaction> GetTransactions()
        {
            if (!File.Exists(TRANSACTIONS_FILE)) return new List<Transaction>();
            var transactionsJson = File.ReadAllText(TRANSACTIONS_FILE);
            return JsonSerializer.Deserialize<List<Transaction>>(transactionsJson) ?? new List<Transaction>();
        }

        public Transaction CreateTransaction(Transaction transaction)
        {
            var transactions = GetTransactions();
            transaction.Id = transactions.Any() ? transactions.Last().Id + 1 : 1;
            transactions.Add(transaction);
            SaveTransactions(transactions);
            return transaction;
        }

        public void SaveTransactions(List<Transaction> transactions)
        {
            File.WriteAllText(TRANSACTIONS_FILE, JsonSerializer.Serialize(transactions, new JsonSerializerOptions { WriteIndented = true }));
        }
    }
}
