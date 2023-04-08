import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interfaces';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [
    `
    button {
      margin-right: 5px;
    }
    `
  ]
})
export class PorRegionComponent{

  regiones : string[] = [
    "africa", 
    "americas", 
    "asia", 
    "europe", 
    "oceania"
  ];

  paises: Country[] = [];

  regionActiva : string = "";

  constructor(private paisService: PaisService){}

  actviarRegion(region: string){
    if(region === this.regionActiva) {return;}
    this.regionActiva = region;
    this.paises = [];
    this.paisService.buscarPorRegion(region)
    .subscribe(paises => {
      this.paises = paises;
    })
  }
}
