import { AlertService } from './../alert/alert.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Posto } from '../_models/Posto';
import { PostoService } from '../_services/posto.service';
import { PrecoCompra } from '../_models/PrecoCompra';
import { PrecoCompraService } from '../_services/precoCompra.service';

@Component({
  selector: 'app-precocompra',
  templateUrl: './precoCompra.component.html',
  styleUrls: ['./precoCompra.component.css']
})
export class PrecoCompraComponent implements OnInit {

  options = {
   autoclose: true,
   keepAfterRouteChange: false
  };
  precogc: number;
  precoga: number;
  precoec: number;
  precoea: number;
  precod1: number;
  precod5: number;
  registerForm: FormGroup;
  indexPosto: number;
  postos: Posto[];
  precoCompra: PrecoCompra;
  lstCombustivel = [
    {id: 1, descricao: 'Gasolina Comum'},
    {id: 2, descricao: 'Gasolina Aditivada'},
    {id: 3, descricao: 'Etanol Comum'},
    {id: 3, descricao: 'Etanol Aditivado'},
    {id: 3, descricao: 'Diesel S10 Comum'},
    {id: 3, descricao: 'Etanol S500 Comum'}
  ];
  constructor(private fb: FormBuilder, private postoService: PostoService, private alert: AlertService,
              private precoService: PrecoCompraService) { }

  ngOnInit(): void{
    this.validation();
    this.getPostos();
  }

  onChangeposto(i: any): void{
    this.indexPosto = i;
  }

  validation(): void {
    this.registerForm = this.fb.group({
      postoId: ['', Validators.required],
    });
  }

  getPostos(): void{
    this.postoService.getPostos().subscribe(
      // tslint:disable-next-line: variable-name
      (_posto: Posto[]) => {
        this.postos = _posto ;
      }, error => {
        this.alert.error(`Erro ao tentar carregar os Postos: ${error }`);
      });
  }

  salvarPreco(tipo: string): void {
    const precoCompra = new PrecoCompra();
    const pr = Object.assign({}, this.registerForm.value);
    precoCompra.postoId = this.postos[this.indexPosto].id;
    if (tipo === 'GC'){
      precoCompra.combustivel = 'Gasolina Comum';
      precoCompra.preco = this.precogc;
    } else if (tipo === 'GA'){
      precoCompra.combustivel = 'Gasolina Aditivada';
    } else if (tipo === 'EC'){
      precoCompra.combustivel = 'Etanol Comum';
    }  else if (tipo === 'EA'){
      precoCompra.combustivel = 'Etanol Aditivado';
    } else if (tipo === 'D1'){
      precoCompra.combustivel = 'Diesel 100';
    } else {
      precoCompra.combustivel = 'Diesel 500';
    }
    if (precoCompra.preco === undefined) {
        precoCompra.preco = 0;
    }
    precoCompra.data = new Date();
    console.log(precoCompra);
    this.novoPreco(precoCompra);
  }

  novoPreco(precoCompra: PrecoCompra): void{
    this.precoService.postPrecoCompra(precoCompra).subscribe(
    () => {
      this.alert.success('Preço inserido com sucesso!!!', this.options);
    }, error => {
      this.alert.error(`Erro ao inserir: ${error}`, this.options);
    }
    );
  }

}
