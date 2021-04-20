import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertService } from '../alert/alert.service';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  menu: boolean;

  constructor(public authService: AuthService
    ,         public router: Router
    ,         private alert: AlertService) { }

  ngOnInit(): void {
  }

  loggedIn(): boolean{
    return !this.authService.loggedIn();
  }

  showMenu(): boolean {
    return this.router.url !== '/user/login';
  }

  entrar(): void {
    this.router.navigate(['/user/login']);
  }

  userName(): string {
    return sessionStorage.getItem('username');
  }

  logout(): void{
    localStorage.removeItem('token');
    this.alert.info('Log Out');
    this.router.navigate(['/user/login']);
  }

}
