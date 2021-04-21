import { Component, OnInit } from '@angular/core';
import { Posto } from '../_models/Posto';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PostoService } from '../_services/posto.service';
import { AlertService } from '../alert';
import { PrecoVenda } from '../_models/PrecoVenda';
import { PrecoVendaService } from '../_services/precoVenda.service';

@Component({
  selector: 'app-gestaoprecos',
  templateUrl: './gestaoPrecos.component.html',
  styleUrls: ['./gestaoPrecos.component.css']
})
export class GestaoPrecosComponent implements OnInit {

  postos: Posto[];
  registerForm: FormGroup;
  precoVenda: PrecoVenda[];
  lstFiltrado: PrecoVenda[];

  constructor(private fb: FormBuilder, private postoService: PostoService,
              private alert: AlertService, private precoService: PrecoVendaService) { }

  ngOnInit(): void {
    this.validation();
    this.getPosto();
    this.getPrecoVenda();
    console.log(this.precoVenda);
  }

  onChange(i: any): void{
    if(i[0] === null){
      this.lstFiltrado = this.precoVenda;
    } else {
    this.lstFiltrado = this.precoVenda.filter(p => p.postoId.toString().match(i[0]));
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

  validation(): void {
    this.registerForm = this.fb.group({
      posto: ['', Validators.required]
    });
  }

}
