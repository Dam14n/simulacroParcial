import { PaisesServiceService } from './../../servicios/paises-service.service';
import { Component, OnInit } from '@angular/core';
import { Actor } from './../../modelo/Actor';

@Component({
  selector: 'app-actor-alta',
  templateUrl: './actor-alta.component.html',
  styleUrls: ['./actor-alta.component.css']
})
export class ActorAltaComponent implements OnInit {
  listadoActores: Array<Actor>;
  paises = [];

  constructor(private paisesService: PaisesServiceService) { }

  ngOnInit(): void {
    this.paisesService.obtenerPaises().then(paises => {
      this.paises = paises;
    });
  }

}
