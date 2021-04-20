import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PrecoCompra } from '../_models/PrecoCompra';

@Injectable({
  providedIn: 'root'
})
export class PrecoBandeiraService {

  baseURL = 'http://localhost:5000/precoBandeira';

  constructor(private http: HttpClient) { }

  getPrecoCompra(): Observable<PrecoCompra[]>{
    return this.http.get<PrecoCompra[]>(this.baseURL);
  }

  postPrecoCompra(precoCompra: PrecoCompra): Observable<PrecoCompra>{
    return this.http.post<PrecoCompra>(this.baseURL, precoCompra);
  }

}
