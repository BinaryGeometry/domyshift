import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';

import { Galaxy } from './galaxy.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  baseUrl = "http://127.0.0.1:8000"
  httpHeaders = new HttpHeaders({'Content-Type': 'appliation/json'})

  getAllGalaxys(): Observable<any>{
    return this.http.get<Galaxy>(this.baseUrl + '/galaxys/', {headers:this.httpHeaders});
  }
}
