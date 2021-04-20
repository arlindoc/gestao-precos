import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PrecoDistribuidora } from '../_models/PrecoDistribuidora';

@Injectable({
  providedIn: 'root'
})
export class PrecoDistribuidoraService {

  baseURL = 'http://localhost:5000/precoDistribuidora';

  constructor(private http: HttpClient) { }

  getPrecoDistribuidora(): Observable<PrecoDistribuidora[]>{
    return this.http.get<PrecoDistribuidora[]>(this.baseURL);
  }

  postPrecoDistribuidora(precoDistribuidora: PrecoDistribuidora): Observable<PrecoDistribuidora>{
    console.log('Passou');
    console.log(precoDistribuidora);
    console.log(this.baseURL);
    return this.http.post<PrecoDistribuidora>(this.baseURL, precoDistribuidora);
  }

}
