import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interfaces';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent {

  termino: string = ""
  error : boolean = false
  paises: Country[] = []

  constructor(private paisService: PaisService){

  }

  buscar(termino: string){
    this.termino = termino;
    this.error = false;

    this.paisService.buscarCapital(termino)
      .subscribe( res => this.paises = res, err => this.error = this.error = true)
  }

  sugerencias(termino: string){
    this.error = false;
  }
}
