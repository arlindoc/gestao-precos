import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PrecoVenda } from '../_models/PrecoVenda';

@Injectable({
  providedIn: 'root'
})
export class PrecoVendaService {

baseURL = 'http://localhost:5000/precoVenda';

constructor(private http: HttpClient) { }

  getPrecoVenda(): Observable<PrecoVenda[]>{
    return this.http.get<PrecoVenda[]>(this.baseURL);
  }

  postPrecoVenda(precoVenda: PrecoVenda): Observable<PrecoVenda>{
    return this.http.post<PrecoVenda>(this.baseURL, precoVenda);
  }

}
