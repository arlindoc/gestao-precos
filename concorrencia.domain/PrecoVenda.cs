using System;
namespace concorrencia.domain
{
    public class PrecoVenda
    {
        public int Id { get; set; }
        public Posto Posto { get; set; }
        public int PostoId {get; set;}
        public decimal Preco { get; set; }
        public string Pagamento { get; set; }
        public string Combustivel { get; set; }
        public DateTime Data { get; set; }
    }
}