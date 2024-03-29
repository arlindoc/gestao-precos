import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseURL = 'http://localhost:5000/user/';
  jwtHelper = new JwtHelperService();
  decodedToken: any;

constructor(private http: HttpClient) { }

// tslint:disable-next-line:typedef
login(model: any) {
  console.log(`${this.baseURL}login`);
  return this.http
    .post(`${this.baseURL}login`, model).pipe(
      map((response: any) => {
        const user = response;
        if (user) {
          localStorage.setItem('token', user.token);
          this.decodedToken = this.jwtHelper.decodeToken(user.token);
          sessionStorage.setItem('username', this.decodedToken.unique_name);
        }
      })
    );
}
// tslint:disable-next-line:typedef
register(model: any){
  console.log(`${this.baseURL}register`);
  return this.http.post(`${this.baseURL}register`, model);
}
// tslint:disable-next-line:typedef
  loggedIn(){
    const token = localStorage.getItem('token');
    return this.jwtHelper.isTokenExpired(token);
  }
}
