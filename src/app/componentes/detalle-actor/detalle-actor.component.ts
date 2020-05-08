import { Sexo } from './../../modelo/Sexo';
import { Actor } from './../../modelo/Actor';
import { PaisesServiceService } from './../../servicios/paises-service.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-detalle-actor',
  templateUrl: './detalle-actor.component.html',
  styleUrls: ['./detalle-actor.component.css']
})
export class DetalleActorComponent implements OnInit {
  @Input() actor: Actor;
  paises = [];
  pais: any;
  Sexo = Sexo;

  constructor(private paisesService: PaisesServiceService) { }

  ngOnInit(): void {
    this.paisesService.obtenerPaises().then(paises => {
      this.paises = paises;
      this.pais = this.paises.find(pais => pais.name === this.actor.paisDeOrigen);
    });
  }

}
