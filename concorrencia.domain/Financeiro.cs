using System;

namespace concorrencia.domain
{
    public class Financeiro
    {
        public int id { get; set; }
        public Posto Posto { get; set; }
        public int PostoId { get; set; }
        public decimal LucroBruto { get; set; }
        public decimal Despesa { get; set; }
        public decimal MetaDespesa { get; set; }
        public DateTime Data { get; set; }
    }
}