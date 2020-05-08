import { ActorService } from './../../servicios/actor.service';
import { Actor } from './../../modelo/Actor';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-actor-listado',
  templateUrl: './actor-listado.component.html',
  styleUrls: ['./actor-listado.component.css']
})
export class ActorListadoComponent implements OnInit {
  listadoActores: Array<Actor>;
  actor: Actor;
  mostrarDetalles = false;

  constructor(private actorService: ActorService) {
    this.listadoActores = this.actorService.obtenerActores();
  }

  ngOnInit(): void {
  }

  seleccionarActor(actor: Actor) {
    this.mostrarDetalles = true;
    this.actor = actor;
  }

}
