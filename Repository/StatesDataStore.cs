
using spa.Models;
using System.Collections.Generic;


namespace spa.Repository
{
    public class StatesDataStore
    {
         public static StatesDataStore Current { get; } = new StatesDataStore();

        public List<State> States { get; set; }

        public StatesDataStore()
        {
            States = new List<State>
            {
              
                new State { Id=1, Name = "Alabama", Abbreviation = "AL" },
                new State { Id=2, Name = "Montana", Abbreviation = "MT" },
                new State { Id=3, Name = "Alaska", Abbreviation = "AK" },
                new State { Id=4, Name = "Nebraska", Abbreviation = "NE" },
                new State { Id=5, Name = "Arizona", Abbreviation = "AZ" },
                new State { Id=6, Name = "Nevada", Abbreviation = "NV" },
                new State { Id=7, Name = "Arkansas", Abbreviation = "AR" },
                new State { Id=8, Name = "New Hampshire", Abbreviation = "NH" },
                new State { Id=9, Name = "California", Abbreviation = "CA" },
                new State { Id=10, Name = "New Jersey", Abbreviation = "NJ" },
                new State { Id=11, Name = "Colorado", Abbreviation = "CO" },
                new State { Id=12, Name = "New Mexico", Abbreviation = "NM" },
                new State { Id=13, Name = "Connecticut", Abbreviation = "CT" },
                new State { Id=14, Name = "New York", Abbreviation = "NY" },
                new State { Id=15, Name = "Delaware", Abbreviation = "DE" },
                new State { Id=16, Name = "North Carolina", Abbreviation = "NC" },
                new State { Id=17, Name = "Florida", Abbreviation = "FL" },
                new State { Id=18, Name = "North Dakota", Abbreviation = "ND" },
                new State { Id=19, Name = "Georgia", Abbreviation = "GA" },
                new State { Id=20, Name = "Ohio", Abbreviation = "OH" },
                new State { Id=21, Name = "Hawaii", Abbreviation = "HI" },
                new State { Id=22, Name = "Oklahoma", Abbreviation = "OK" },
                new State { Id=23, Name = "Idaho", Abbreviation = "ID" },
                new State { Id=24, Name = "Oregon", Abbreviation = "OR" },
                new State { Id=25, Name = "Illinois", Abbreviation = "IL" },
                new State { Id=26, Name = "Pennsylvania", Abbreviation = "PA" },
                new State { Id=26, Name = "Indiana", Abbreviation = "IN" },
                new State { Id=27,Name = "Rhode Island", Abbreviation = "RI" },
                new State { Id=28,Name = "Indiana", Abbreviation = "IN" },
                new State { Id=29,Name = "Indiana", Abbreviation = "IN" },
                new State { Id=30,Name = "Iowa", Abbreviation = "IA" },
                new State { Id=31,Name = "South Carolina", Abbreviation = "SC" },
                new State { Id=32,Name = "Kansas", Abbreviation = "KS" },
                new State { Id=33,Name = "South Dakota", Abbreviation = "SD" },
                new State { Id=34,Name = "Kentucky", Abbreviation = "KY" },
                new State { Id=35,Name = "Tennessee", Abbreviation = "TN" },
                new State { Id=36,Name = "Louisiana", Abbreviation = "LA" },
                new State { Id=37,Name = "Texas", Abbreviation = "TX" },
                new State { Id=38,Name = "Maine", Abbreviation = "ME" },
                new State { Id=39,Name = "Utah", Abbreviation = "UT" },
                new State { Id=40,Name = "Maryland", Abbreviation = "MD" },
                new State { Id=41,Name = "Vermont", Abbreviation = "VT" },
                new State { Id=42,Name = "Massachusetts", Abbreviation = "MA" },
                new State { Id=43,Name = "Virginia", Abbreviation = "VA" },
                new State { Id=44,Name = "Michigan", Abbreviation = "MI" },
                new State { Id=45,Name = "Washington", Abbreviation = "WA" },
                new State { Id=46,Name = "Minnesota", Abbreviation = "MN" },
                new State { Id=47,Name = "West Virginia", Abbreviation = "WV" },
                new State { Id=48,Name = "Mississippi", Abbreviation = "MS" },
                new State { Id=49,Name = "Wisconsin", Abbreviation = "WI" },
                new State { Id=50,Name = "Missouri", Abbreviation = "MO" },
                new State { Id=52,Name = "Wyoming", Abbreviation = "WY" }

       

            };


        }
    }
}
