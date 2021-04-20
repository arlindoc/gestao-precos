import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Financeiro } from '../_models/Financeiro';

@Injectable({
  providedIn: 'root'
})
export class FinanceiroService {

  baseURL = 'http://localhost:5000/financeiro';

  constructor(private http: HttpClient) { }

  getFinanceiro(): Observable<Financeiro[]>{
    return this.http.get<Financeiro[]>(this.baseURL);
  }

  postFinanceiro(financeiro: Financeiro): Observable<Financeiro>{
    return this.http.post<Financeiro>(this.baseURL, financeiro);
  }

}
