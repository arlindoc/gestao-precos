import { Regiao } from './Regiao';
import { Bandeira } from './Bandeira';

export class Posto {
  id: number;
  regiaoId: number;
  bandeiraId: number;
  nomePosto: string;
  tipo: string;
  bandeira: Bandeira;
  regiao: Regiao;
}
