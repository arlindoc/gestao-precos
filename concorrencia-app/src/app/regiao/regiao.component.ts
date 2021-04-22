import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertService } from '../alert';
import { Regiao } from '../_models/Regiao';
import { RegiaoService } from '../_services/regiao.service';

@Component({
  selector: 'app-regiao',
  templateUrl: './regiao.component.html',
  styleUrls: ['./regiao.component.scss']
})
export class RegiaoComponent implements OnInit {

  registerForm: FormGroup;
  regiao: Regiao;
  modoSalvar = 'post';
  regioes: Regiao[];

  constructor(private fb: FormBuilder, private http: HttpClient, private regiaoService: RegiaoService,
    // tslint:disable-next-line:align
     private alert: AlertService) { }

  ngOnInit(): void {
    this.validation();
    this.getRegioes();
  }

  validation(): void {
    this.registerForm = this.fb.group({
      nomeRegiao: ['', Validators.required],
      estado:  ['', Validators.required],
      cidade: ['', Validators.required],
    });
  }

  novaRegiao(template: any): void {
    this.modoSalvar = 'post';
    this.regiao = Object.assign({}, this.registerForm.value);
    this.regiaoService.postRegiao(this.regiao).subscribe(
      () => {
        this.getRegioes();
        this.alert.success('Inserido com Sucesso!');
      }, error => {
        this.alert.error(`Erro ao Inserir: ${error}`);
      }
    );
  }

  getRegioes(): void{
    this.regiaoService.getRegioes().subscribe(
    // tslint:disable-next-line: variable-name
    (_regiao: Regiao[]) => {
      this.regioes = _regiao;
    }, error => {
      this.alert.error(`Erro ao tentar carregar os regiões: ${error }`);
    }
    );
  }

  delteRegiao(regiao: Regiao): void {
    this.regiaoService.deleteRegiao(regiao.id).subscribe(
      () => {
        this.getRegioes();
        this.alert.success('Deletado com Sucesso');
      }, error => {
        this.alert.error('Erro ao tentar Deletar');
        console.log(error);
      }
    );
  }
}
