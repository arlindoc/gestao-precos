import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PrecoCompra } from '../_models/PrecoCompra';

@Injectable({
  providedIn: 'root'
})
export class PrecoCompraService {

  baseURL = 'http://localhost:5000/precoCompra';

  constructor(private http: HttpClient) { }

    getPrecoCompra(): Observable<PrecoCompra[]>{
      return this.http.get<PrecoCompra[]>(this.baseURL);
    }

    postPrecoCompra(precoCompra: PrecoCompra): Observable<PrecoCompra>{
      console.log(precoCompra);
      return this.http.post<PrecoCompra>(this.baseURL, precoCompra );
    }


}
