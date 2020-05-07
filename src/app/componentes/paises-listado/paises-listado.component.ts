import { PaisesServiceService } from './../../servicios/paises-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-paises-listado',
  templateUrl: './paises-listado.component.html',
  styleUrls: ['./paises-listado.component.css']
})
export class PaisesListadoComponent implements OnInit {
  paises = [];

  constructor(private paisesService: PaisesServiceService) { }

  ngOnInit(): void {
    this.paisesService.obtenerPaises().then(paises => {
      this.paises = paises;
    });
  }

}
