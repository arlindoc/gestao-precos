import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Regiao } from '../_models/Regiao';

@Injectable({
  providedIn: 'root'
})
export class RegiaoService {

  baseURL = 'http://localhost:5000/regiao';

  constructor(private http: HttpClient) { }

  getRegioes(): Observable<Regiao[]>{
    return this.http.get<Regiao[]>(this.baseURL);
  }

  postRegiao(regiao: Regiao): Observable<Regiao>{
    return this.http.post<Regiao>(this.baseURL, regiao);
  }
}
