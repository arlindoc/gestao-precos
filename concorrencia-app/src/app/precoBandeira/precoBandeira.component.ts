import { Component, OnInit } from '@angular/core';
import { Bandeira } from '../_models/Bandeira';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
// import { NumericValueType, RxwebValidators } from '@rxweb/reactive-form-validators';
import { PrecoDistribuidora } from '../_models/PrecoDistribuidora';
import { PrecoDistribuidoraService } from '../_services/precoDistribuidora.service';
import { BandeiraService } from '../_services/bandeira.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'app-precoBandeira',
  templateUrl: './precoBandeira.component.html',
  styleUrls: ['./precoBandeira.component.css']
})
export class PrecoBandeiraComponent implements OnInit {

  precoDistribuidoras: PrecoDistribuidora[];
  bandeiras: Bandeira[];
  bandeira: Bandeira;
  registerForm: FormGroup;
  precoDistribuidora: PrecoDistribuidora;
  index: number;
  preco: number;
  precogc: number;
  precoga: number;
  precoea: number;
  precoec: number;
  precod1: number;
  precod5: number;
  indexBandeira: number;

  constructor(private fb: FormBuilder, private http: HttpClient, private bandeiraService: BandeiraService,
    // tslint:disable-next-line:align
    private precoDistribuidoraService: PrecoDistribuidoraService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.validation();
    this.getBandeira();
  }

  onChange(i: any): void {
    this.index = i;
    console.log(this.index);
  }

  novoPreco(template: any): void {
    this.precoDistribuidora = Object.assign({}, this.registerForm.value);
    this.precoDistribuidora.bandeiraId = this.bandeiras[this.index].id;
    this.precoDistribuidoraService.postPrecoDistribuidora(this.precoDistribuidora).subscribe(
      () => {
        this.toastr.success('Inserido com Sucesso!');
      }, error => {
        this.toastr.error(`Erro ao Inserir: ${error}`);
      }
    );
  }

  validation(): void {
    this.registerForm = this.fb.group({
      bandeiraId: ['', Validators.required],
    });
  }

  getPrecoDistribuidora(): void {
    this.precoDistribuidoraService.getPrecoDistribuidora().subscribe(
      // tslint:disable-next-line: variable-name
      (_precoDistribuidora: PrecoDistribuidora[]) => {
        this.precoDistribuidoras = _precoDistribuidora ;
      }, error => {
        this.toastr.error(`Erro ao tentar carregar os clientes: ${error }`);
      });
  }

  getBandeira(): void {
    this.bandeiraService.getBandeira().subscribe(
      // tslint:disable-next-line:variable-name
      (_bandeira: Bandeira[]) => {
        this.bandeiras = _bandeira ;
      }, error => {
        this.toastr.error(`Erro ao tentar carregar bandeiras: ${error }`);
      });
  }

  onChangeBandeira(i: any): void {
    this.indexBandeira = i;
  }

  salvarPreco(tipo: string): void{
    const preco = new PrecoDistribuidora();
    // const pr = Object.assign({}, this.registerForm.value);
    preco.bandeiraId = this.bandeiras[this.indexBandeira].id;
    if (tipo === 'GC'){
      preco.combustivel = 'Gasolina Comum';
      preco.preco = this.precogc;
    } else if (tipo === 'GA'){
      preco.combustivel = 'Gasolina Aditivada';
      preco.preco = this.precoga;
    } else if (tipo === 'EC'){
      preco.combustivel = 'Etanol Comum';
      preco.preco = this.precoec;
    }  else if (tipo === 'EA'){
      preco.combustivel = 'Etanol Aditivado';
      preco.preco = this.precoea;
    } else if (tipo === 'D1'){
      preco.combustivel = 'Diesel 100';
      preco.preco = this.precod1;
    } else {
      preco.combustivel = 'Diesel 500';
      preco.preco = this.precod5;
    }
    if (preco.preco === undefined) {
      preco.preco = 0;
      preco.preco = this.precogc;
    }
    preco.data = new Date();
    this.precoDistribuidoraService.postPrecoDistribuidora(preco).subscribe(
    () => {
      this.toastr.success('Inserido com sucesso!!!');
      }, error => {
      this.toastr.error(`Erro ao inserir: ${error}`);
    });
  }
}
