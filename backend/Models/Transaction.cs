namespace MyApp.Models
{
    public class Transaction
    {
        public int Id { get; set; }
        public required string Description { get; set; }
        public decimal Value { get; set; }
        public  required string Type { get; set; }
        public int UserId { get; set; }
    }
}
