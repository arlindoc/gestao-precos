using System;
namespace concorrencia.domain
{
    public class Posto
    {
        public int id { get; set; }
        public string NomePosto { get; set; }
        public string Tipo { get; set; }
        public Bandeira Bandeira { get; set; }
        public int BandeiraId { get; set; }
        public Regiao Regiao { get; set; }
        public int RegiaoId { get; set; }
    }
}