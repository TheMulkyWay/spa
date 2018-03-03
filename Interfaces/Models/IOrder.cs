namespace spa.Interfaces.Models
{
    public interface IOrder
    {
        int Id { get; set; }
        decimal Price { get; set; }
        string Product { get; set; }
        int Quantity { get; set; }
    }
}