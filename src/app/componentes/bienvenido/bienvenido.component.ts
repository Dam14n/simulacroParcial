import { ActorService } from './../../servicios/actor.service';
import { PeliculasService } from './../../servicios/peliculas.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bienvenido',
  templateUrl: './bienvenido.component.html',
  styleUrls: ['./bienvenido.component.css']
})
export class BienvenidoComponent implements OnInit {

  constructor(private peliculaService: PeliculasService, private actorService: ActorService) { }

  ngOnInit(): void {
    this.peliculaService.cargarPeliculas();
    this.actorService.cargarActores();
  }

}
