import { Component, OnInit } from '@angular/core';
import { BandeiraService } from '../_services/bandeira.service';
import { Bandeira } from '../_models/Bandeira';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertService } from '../alert/alert.service';

@Component({
  selector: 'app-bandeira',
  templateUrl: './bandeira.component.html',
  styleUrls: ['./bandeira.component.css']
})
export class BandeiraComponent implements OnInit {

  modoSalvar = 'post';
  bandeira: Bandeira;
  registerForm: FormGroup;
  bandeiras: Bandeira[];
  constructor(private bandeiraService: BandeiraService, private alert: AlertService, private fb: FormBuilder) { }

    ngOnInit(): void{
      this.validation();
      this.getBandeira();
    }


  novoBandeira(template: any): void {
    this.modoSalvar = 'post';
    this.bandeira = Object.assign({}, this.registerForm.value);
    this.bandeiraService.postBandeira(this.bandeira).subscribe(
      () => {
        this.alert.success('Inserido com Sucesso!');
        this.getBandeira();
      }, error => {
        this.alert.error(`Erro ao Inserir: ${error}`);
      }
    );
  }

  validation(): void {
    this.registerForm = this.fb.group({
      nomeBandeira: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(50)]]
    });
  }

  getBandeira(): void {
    this.bandeiraService.getBandeira().subscribe(
      // tslint:disable-next-line: variable-name
      (_bandeira: Bandeira[]) => {
        this.bandeiras = _bandeira ;
      }, error => {
        this.alert.error(`Erro ao tentar carregar os bandeiras: ${error }`);
      });
  }

}
