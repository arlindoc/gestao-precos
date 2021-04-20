using System;
using System.Collections.Generic;
using System.Text;

namespace concorrencia.domain
{
    public class PrecoDistribuidora
    {
        public int Id { get; set; }
        public int BandeiraId { get; set; }
        public Bandeira Bandeira { get; set; }
        public decimal Preco { get; set; }
        public DateTime Data { get; set; }
    }
}
