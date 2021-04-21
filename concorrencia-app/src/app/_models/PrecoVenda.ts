import { Posto } from './Posto';

export class PrecoVenda {
  postoId: number;
  preco: number;
  data: Date;
  combustivel: string;
  pagamento: string;
  posto: Posto;
  atual: string;
}
