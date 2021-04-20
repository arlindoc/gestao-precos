import { Component, OnInit } from '@angular/core';
import { Bandeira } from '../_models/Bandeira';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { NumericValueType, RxwebValidators } from '@rxweb/reactive-form-validators';
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
      preco: ['', RxwebValidators.numeric({acceptValue: NumericValueType.PositiveNumber , allowDecimal: true })],
      data: ['', Validators.required],
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
      // tslint:disable-next-line: variable-name
      (_bandeira: Bandeira[]) => {
        this.bandeiras = _bandeira ;
      }, error => {
        this.toastr.error(`Erro ao tentar carregar os clientes: ${error }`);
      });
  }

}
