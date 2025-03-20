using MyApp.Models;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text.Json;

namespace MyApp.Services
{
    public class UserService
    {
        private const string USERS_FILE = "./Data/users.json";

        public List<User> GetUsers()
        {
            if (!File.Exists(USERS_FILE)) return new List<User>();
            var usersJson = File.ReadAllText(USERS_FILE);
            return JsonSerializer.Deserialize<List<User>>(usersJson) ?? new List<User>();
        }

        public User CreateUser(User user)
        {
            var users = GetUsers();
            user.Id = users.Any() ? users.Last().Id + 1 : 1;
            users.Add(user);
            SaveUsers(users);
            return user;
        }

        public bool DeleteUser(int id)
        {
            var users = GetUsers();
            var user = users.FirstOrDefault(u => u.Id == id);
            if (user == null) return false;

            // Delete de transações do User
            var transactions = new TransactionService().GetTransactions();
            transactions = transactions.Where(t => t.UserId != id).ToList();
            new TransactionService().SaveTransactions(transactions);

            // Removendo o User
            users = users.Where(u => u.Id != id).ToList();
            SaveUsers(users);
            return true;
        }

        private void SaveUsers(List<User> users)
        {
            File.WriteAllText(USERS_FILE, JsonSerializer.Serialize(users, new JsonSerializerOptions { WriteIndented = true }));
        }
    }
}
