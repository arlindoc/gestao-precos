import { AuthService } from './../../_services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AlertService } from '../../alert/alert.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  registerForm: FormGroup;
  model: any = {};

  constructor(private fb: FormBuilder, private alert: AlertService,
              private authService: AuthService, public router: Router) { }

  ngOnInit(): void {
    if (localStorage.getItem('token') != null) {
      this.router.navigate(['/menu']);
    }
  }

  login(): void {
    this.authService.login(this.model)
      .subscribe(
        () => {
          this.router.navigate(['/menu']);
          this.alert.success('Logado com Sucesso');
        },
        error => {
          this.alert.error('Falha ao tentar Logar');
        }
      );
  }
}
