using System;
using System.Collections.Generic;
using System.Text;

namespace concorrencia.domain
{
    public class PrecoCompra
    {
        public int Id { get; set; }
        public Posto Posto { get; set; }
        public string Combustivel { get; set; }
        public int PostoId { get; set; }
        public decimal Preco { get; set; }
        public DateTime Data { get; set; }
    }
}
