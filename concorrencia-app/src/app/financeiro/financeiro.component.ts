import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertService } from '../alert';
import { Financeiro } from '../_models/Financeiro';
import { Posto } from '../_models/Posto';
import { PostoService } from '../_services/posto.service';
import { FinanceiroService } from '../_services/financeiro.service';

@Component({
  selector: 'app-financeiro',
  templateUrl: './financeiro.component.html',
  styleUrls: ['./financeiro.component.css']
})
export class FinanceiroComponent implements OnInit {

  registerForm: FormGroup;
  indexPosto: number;
  postos: Posto[];
  resultado: Financeiro;

  constructor(private fb: FormBuilder, private postoService: PostoService, private financeiroService: FinanceiroService,
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
      lucroBruto: ['', Validators.required],
      despesa: ['', Validators.required],
      metaDespesa: ['', Validators.required],
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

  novoResultado(): void{
    this.resultado = Object.assign({}, this.registerForm.value);
    this.resultado.data = new Date();
    this.resultado.postoId = this.postos[this.indexPosto].id;
    this.financeiroService.postFinanceiro(this.resultado).subscribe(
    () => {
      this.alert.success('Informações inseridas com sucesso!!!');
    }, error => {
      this.alert.error(`Erro ao inserir: ${error}`);
    }
    );
  }

}
