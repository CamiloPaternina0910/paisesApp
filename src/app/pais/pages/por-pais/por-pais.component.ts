import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interfaces';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
    `
    li{
      cursor: pointer
    }
    `
  ]
})
export class PorPaisComponent {

  termino: string = ""
  error : boolean = false
  paises: Country[] = []
  sugerenciaPais: Country[] = [];

  constructor(private paisService: PaisService){

  }

  buscar(termino: string){
    this.termino = termino
    this.error = false;
    this.sugerenciaPais = [];

    this.paisService.buscarPais(this.termino)
    .subscribe(res=> this.paises = res, (err) => this.error = true)
  }

  sugerencias(termino: string) {
    this.error = false;

    this.paisService.buscarPais(termino)
    .subscribe(paises => this.sugerenciaPais = paises.splice(0,3))
  }
}
