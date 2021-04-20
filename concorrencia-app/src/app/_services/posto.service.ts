import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Posto } from '../_models/Posto';

@Injectable({
  providedIn: 'root'
})
export class PostoService {

  baseURL = 'http://localhost:5000/posto';

  constructor(private http: HttpClient) { }

  getPostos(): Observable<Posto[]>{
    return this.http.get<Posto[]>(this.baseURL);
  }

  postPostos(posto: Posto): Observable<Posto>{
    return this.http.post<Posto>(this.baseURL, posto);
  }

}
