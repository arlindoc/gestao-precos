import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import {Bandeira} from '../_models/Bandeira';

@Injectable({
  providedIn: 'root'
})
export class BandeiraService {

  baseURL = 'http://localhost:5000/bandeira';

  constructor(private http: HttpClient) { }

  getBandeira(): Observable<Bandeira[]>{
    return this.http.get<Bandeira[]>(this.baseURL);
  }

  postBandeira(bandeira: Bandeira): Observable<Bandeira>{
    return this.http.post<Bandeira>(this.baseURL, bandeira);
  }
}
