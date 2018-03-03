namespace spa.Interfaces.Models
{
    public interface IState
    {
        string Abbreviation { get; set; }
        int Id { get; set; }
        string Name { get; set; }
    }
}