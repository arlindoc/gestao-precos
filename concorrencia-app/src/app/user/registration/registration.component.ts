import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../_services/auth.service';
import { AlertService } from '../../alert/alert.service';
import { Router } from '@angular/router';
import { User } from 'src/app/_models/User';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  registerForm: FormGroup;
  user: User;

  constructor(private fb: FormBuilder, private router: Router, private authService: AuthService,
              private alert: AlertService) {}

  ngOnInit(): void {
    this.validation();
  }

  validation(): void {
    this.registerForm = this.fb.group({
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      userName: ['', Validators.required],
      role: ['', Validators.required],
      passwords: this.fb.group({
        password: ['', [Validators.required, Validators.minLength(4)]],
        confirmPassword: ['', Validators.required]
      }, { validator: this.compararSenhas })
    });
  }

  // tslint:disable-next-line:typedef
  compararSenhas(fb: FormGroup){
    const confirmSenhasCrtl = fb.get('confirmPassword');
    if (confirmSenhasCrtl.errors == null || 'mismatch' in confirmSenhasCrtl.errors){
      if (fb.get('password').value !== confirmSenhasCrtl.value){
        confirmSenhasCrtl.setErrors({mismatch : true});
        }
        else {
          confirmSenhasCrtl.setErrors(null);
      }
    }
  }

  cadastrarUsuario(): void {
    if (this.registerForm.valid) {
      this.user = Object.assign(
        { password: this.registerForm.get('passwords.password').value },
        this.registerForm.value);
      this.authService.register(this.user).subscribe(
        () => {
          this.router.navigate(['/user/login']);
          this.alert.success('Cadastro Realizado');
        }, error => {
          const erro = error.error;
          erro.forEach(element => {
            switch (element.code) {
              case 'DuplicateUserName':
                this.alert.error('Cadastro Duplicado!');
                break;
              default:
                this.alert.error(`Erro no Cadatro! CODE: ${element.code}`);
                break;
            }
          });
        }
      );
    }
  }

}
