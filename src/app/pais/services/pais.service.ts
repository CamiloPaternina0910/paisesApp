import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/pais.interfaces';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private params = new HttpParams().set("fields", "name,captal,population,flags,altSpellings")
  private urlService : string  = "https://restcountries.com/v3.1"
  constructor(private http: HttpClient) { }

  buscarPais(termino: string): Observable<Country[]>{
    return this.http.get<Country[]>(`${this.urlService}/name/${termino}`, {params : this.params })
  }

  buscarCapital(termino: string): Observable<Country[]>{
    return this.http.get<Country[]>(`${this.urlService}/capital/${termino}`, {params : this.params })  
  }

  buscarPorCode(termino : string ): Observable<Country>{
    return this.http.get<Country>(`${this.urlService}/alpha/${termino}`)
  }

  buscarPorRegion(termino : string ): Observable<Country[]>{
    return this.http.get<Country[]>(`${this.urlService}/region/${termino}`, {params : this.params })
  }
}
