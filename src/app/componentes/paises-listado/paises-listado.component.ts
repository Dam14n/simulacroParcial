import { PaisesServiceService } from './../../servicios/paises-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-paises-listado',
  templateUrl: './paises-listado.component.html',
  styleUrls: ['./paises-listado.component.css']
})
export class PaisesListadoComponent implements OnInit {
  paises = [];
  pais: any;
  mostrarPais = false;

  constructor(private paisesService: PaisesServiceService) { }

  ngOnInit(): void {
    this.obtenerPaises();
  }

  obtenerPaises() {
    this.paisesService.obtenerPaises().then(paises => {
      this.paises = paises;
    });
  }

  onSeleccionarPais(pais: any) {
    this.mostrarPais = true;
    this.pais = pais;
  }

  onDisabledCountry(pais: any) {
    this.paisesService.borrarPais(pais);
    this.mostrarPais = false;
    this.obtenerPaises();

  }
}
