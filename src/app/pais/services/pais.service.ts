import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/pais.interfaces';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private urlService : string  = "https://restcountries.com/v3.1"
  constructor(private http: HttpClient) { }

  buscarPais(termino: string): Observable<Country[]>{
    return this.http.get<Country[]>(`${this.urlService}/name/${termino}`)
  }

  buscarCapital(termino: string): Observable<Country[]>{
    return this.http.get<Country[]>(`${this.urlService}/capital/${termino}`)  
  }
}
