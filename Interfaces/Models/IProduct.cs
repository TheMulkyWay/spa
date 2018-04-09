namespace spa.Interfaces.Models
{
    public interface IProduct
    {
        int ProductId { get; set; }
        string ProductName { get; set; }
        string ProductCode { get; set; }
        string ReleaseDate { get; set; }
        double Price { get; set; }
        string Description { get; set; }
        double StarRating { get; set; }
        string ImageUrl { get; set; }
    }
}
