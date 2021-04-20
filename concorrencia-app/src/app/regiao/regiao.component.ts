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

  constructor(private fb: FormBuilder, private http: HttpClient, private regiaoService: RegiaoService,
    // tslint:disable-next-line:align
     private alert: AlertService) { }

  ngOnInit(): void {
    this.validation();
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
        this.alert.success('Inserido com Sucesso!');
      }, error => {
        this.alert.error(`Erro ao Inserir: ${error}`);
      }
    );
  }

}
