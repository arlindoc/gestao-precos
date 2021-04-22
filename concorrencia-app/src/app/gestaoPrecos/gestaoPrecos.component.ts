import { Component, OnInit } from '@angular/core';
import { Posto } from '../_models/Posto';
import { PostoService } from '../_services/posto.service';
import { AlertService } from '../alert';
import { PrecoVenda } from '../_models/PrecoVenda';
import { PrecoVendaService } from '../_services/precoVenda.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-gestaoprecos',
  templateUrl: './gestaoPrecos.component.html',
  styleUrls: ['./gestaoPrecos.component.css']
})
export class GestaoPrecosComponent implements OnInit {

  postos: Posto[];
  precoVenda: PrecoVenda[];
  lstFiltrado: PrecoVenda[];
  dataAtual = this.datepipe.transform(new Date(), 'yyyy-MM-dd');
  postoId = null;

  constructor(private postoService: PostoService, private datepipe: DatePipe,
              private alert: AlertService, private precoService: PrecoVendaService) { }

  ngOnInit(): void {
    this.getPosto();
    this.getPrecoVenda();
  }

  onChange(i: any): void{
    if (this.postoId > 0){
        this.lstFiltrado = this.precoVenda.filter(p => p.postoId.toString().match(this.postoId));
      } else {
        this.lstFiltrado = this.precoVenda;
     }
  }

  excluir(): void{
    // tslint:disable-next-line:quotemark
    console.log( "Valido!!" );
  }


  getPosto(): void {
    this.postoService.getPostos().subscribe(
      // tslint:disable-next-line: variable-name
      (_postos: Posto[]) => {
        this.postos = _postos ;
      }, error => {
        this.alert.error(`Erro ao tentar carregar os postos: ${error }`);
      });
  }

  getPrecoVenda(): void {
    this.precoService.getPrecoVenda().subscribe(
      // tslint:disable-next-line: variable-name
      (_precos: PrecoVenda[]) => {
        this.precoVenda = _precos ;
        this.lstFiltrado = _precos;
      }, error => {
        this.alert.error(`Erro ao tentar carregar os postos: ${error }`);
      });
  }

  atual(p: PrecoVenda): boolean{
    const data  = this.datepipe.transform(p.data , 'yyyy-MM-dd');
    return data.valueOf() === this.dataAtual.valueOf();
  }

}
