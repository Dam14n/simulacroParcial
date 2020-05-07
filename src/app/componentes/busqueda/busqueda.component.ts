import { ActorService } from './../../servicios/actor.service';
import { Actor } from './../../modelo/Actor';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pelicula } from './../../modelo/Pelicula';
import { PeliculasService } from './../../servicios/peliculas.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {
  listadoPeliculas: Array<Pelicula>;
  listadoActores: Array<Actor>;
  mostrarActores = false;
  peliculaSeleccionada: Pelicula;

  constructor(private router: Router, private peliculaService: PeliculasService, private actorService: ActorService) {
    this.listadoPeliculas = this.peliculaService.obtenerPeliculas();
    this.listadoActores = this.actorService.obtenerActores();
  }

  ngOnInit(): void {
  }

  navegarA(link: string) {
    this.router.navigate([link]);
  }

  seleccionarPelicula(pelicula: Pelicula) {
    this.peliculaSeleccionada = pelicula;
    this.mostrarActores = true;
    this.listadoActores = pelicula.obtenerActores();
  }

}
