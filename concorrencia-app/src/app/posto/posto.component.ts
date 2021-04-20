import { Component, OnInit } from '@angular/core';
import { Bandeira } from '../_models/Bandeira';
import { Regiao } from '../_models/Regiao';
import { BandeiraService } from '../_services/bandeira.service';
import { RegiaoService } from '../_services/regiao.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Posto } from '../_models/Posto';
import { PostoService } from '../_services/posto.service';
import { AlertService } from '../alert/alert.service';

@Component({
  selector: 'app-posto',
  templateUrl: './posto.component.html',
  styleUrls: ['./posto.component.scss']
})
export class PostoComponent implements OnInit {

  bandeiras: Bandeira[];
  regioes: Regiao[];
  indexRegiao: number;
  indexBandeira: number;
  indexTipo: number;
  registerForm: FormGroup;
  posto: Posto;
  modoSalvar = 'post';
  selectedItem = 0;
  lstTipo = [
    {id: 0, descricao: 'Rede Z+Z'},
    {id: 1, descricao: 'Concorrente'}
  ];

  constructor(private bandeiraService: BandeiraService, private regiaoService: RegiaoService,
    // tslint:disable-next-line:align
    private alert: AlertService, private fb: FormBuilder, private postoService: PostoService) { }

  ngOnInit(): void {
    this.validation();
    this.getRegioes();
    this.getBandeiras();
  }

  getRegioes(): void {
    this.regiaoService.getRegioes().subscribe(
      // tslint:disable-next-line: variable-name
      (_regioes: Regiao[]) => {
        this.regioes = _regioes ;
        if (this.regioes.length <= 0 ){
          this.alert.warn('Por favor, realizar o cadastro de regiões!!!');
        }
      }, error => {
        this.alert.error(`Erro ao tentar carregar os regiões: ${error }`);
      });
  }

  getBandeiras(): void {
    this.bandeiraService.getBandeira().subscribe(
      // tslint:disable-next-line: variable-name
      (_bandeira: Bandeira[]) => {
        this.bandeiras = _bandeira ;
        if (this.bandeiras.length <= 0 ){
          this.alert.warn('Por favor, realizar o cadastro de bandeiras!!!');
        }
      }, error => {
        this.alert.error(`Erro ao tentar carregar os clientes: ${error }`);
      });
  }

  onChangeRegiao(i: any): void {
    this.indexRegiao = i;
  }

  onChangeBandeira(i: any): void {
    this.indexBandeira = i;
  }

  onChangeTipo(i: any): void {
    this.indexTipo = i;
  }

  validation(): void {
    this.registerForm = this.fb.group({
      nomePosto: ['', Validators.required],
      tipo: ['', Validators.required],
      bandeiraId: ['', Validators.required],
      regiaoId: ['', Validators.required],
    });
  }

  novoPosto(template: any): void {
    this.modoSalvar = 'post';
    this.posto = Object.assign({}, this.registerForm.value);
    this.posto.bandeiraId = this.bandeiras[this.indexBandeira].id;
    this.posto.regiaoId = this.regioes[this.indexRegiao].id;
    this.posto.tipo = this.lstTipo[this.indexTipo].descricao;
    console.log(this.lstTipo[this.indexTipo].descricao);
    this.postoService.postPostos(this.posto).subscribe(
      () => {
        this.alert.success('Inserido com Sucesso!');
      }, error => {
        this.alert.error(`Erro ao Inserir: ${error}`);
      }
    );
  }

}
