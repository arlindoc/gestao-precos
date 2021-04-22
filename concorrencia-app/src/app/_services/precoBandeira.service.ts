import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PrecoCompra } from '../_models/PrecoCompra';
import { PrecoDistribuidora } from '../_models/PrecoDistribuidora';

@Injectable({
  providedIn: 'root'
})
export class PrecoBandeiraService {

  baseURL = 'http://localhost:5000/precoBandeira';

  constructor(private http: HttpClient) { }

  getPrecoDistribuidora(): Observable<PrecoDistribuidora[]>{
    return this.http.get<PrecoDistribuidora[]>(this.baseURL);
  }

  postPrecoDistribuidora(precoDistribuidora: PrecoDistribuidora): Observable<PrecoDistribuidora>{
    return this.http.post<PrecoDistribuidora>(this.baseURL, precoDistribuidora);
  }

}
