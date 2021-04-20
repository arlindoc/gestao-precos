import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Posto } from '../_models/Posto';
import { PostoService } from '../_services/posto.service';
import { ToastrService } from 'ngx-toastr';
import { PrecoVenda } from '../_models/PrecoVenda';
import { PrecoVendaService } from '../_services/precoVenda.service';
import { AlertService } from '../alert/alert.service';

@Component({
  selector: 'app-precovenda',
  templateUrl: './precoVenda.component.html',
  styleUrls: ['./precoVenda.component.css']
})
export class PrecoVendaComponent implements OnInit {

  registerForm: FormGroup;
  indexPosto: number;
  postos: Posto[];
  precogc: number;
  precoga: number;
  precoea: number;
  precoec: number;
  precod1: number;
  precod5: number;
  precoVenda: PrecoVenda;
  lstCombustivel = [
    {id: 1, descricao: 'Gasolina Comum'},
    {id: 2, descricao: 'Gasolina Aditivada'},
    {id: 3, descricao: 'Etanol Comum'},
    {id: 3, descricao: 'Etanol Aditivado'},
    {id: 3, descricao: 'Diesel S10 Comum'},
    {id: 3, descricao: 'Etanol S500 Comum'}
  ];

  lstPagamento = [
    {id: 1, descricao: 'A vista'},
    {id: 2, descricao: 'A prazo'},
    {id: 3, descricao: 'App'}
  ];

  constructor(private fb: FormBuilder, private postoService: PostoService, private precoService: PrecoVendaService,
              private alert: AlertService) { }

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
      pagamento: ['', Validators.required],
    });
  }

  getPostos(): void{
    this.postoService.getPostos().subscribe(
      // tslint:disable-next-line: variable-name
      (_posto: Posto[]) => {
        this.postos = _posto ;
        if (this.postos.length <= 0){
          this.alert.warn('Por favor, realizar o cadastro de postos!!!');
        }
      }, error => {
        this.alert.error(`Erro ao tentar carregar os Postos: ${error }`);
      });
  }

  salvarPreco(tipo: string): void {
    const precoVenda = new PrecoVenda();
    const pr = Object.assign({}, this.registerForm.value);
    precoVenda.postoId = this.postos[this.indexPosto].id;
    if (tipo === 'GC'){
      precoVenda.combustivel = 'Gasolina Comum';
      precoVenda.preco = this.precogc;
    } else if (tipo === 'GA'){
      precoVenda.combustivel = 'Gasolina Aditivada';
    } else if (tipo === 'EC'){
      precoVenda.combustivel = 'Etanol Comum';
    }  else if (tipo === 'EA'){
      precoVenda.combustivel = 'Etanol Aditivado';
    } else if (tipo === 'D1'){
      precoVenda.combustivel = 'Diesel 100';
    } else {
      precoVenda.combustivel = 'Diesel 500';
    }
    if (precoVenda.preco === undefined) {
      precoVenda.preco = 0;
    }
    precoVenda.pagamento = pr.pagamento;
    precoVenda.data = new Date();
    this.novoPreco(precoVenda);
  }

  novoPreco(precoVenda: PrecoVenda): void{
    this.precoService.postPrecoVenda(precoVenda).subscribe(
    () => {
      this.alert.success('Inserido com sucesso!!!');
    }, error => {
      this.alert.error(`Erro ao inserir: ${error}`);
    }
    );
  }
}
