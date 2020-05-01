import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pelicula } from './../../modelo/Pelicula';
import { PeliculasService } from './../../servicios/peliculas.service';

@Component({
  selector: 'app-pelicula-listado',
  templateUrl: './pelicula-listado.component.html',
  styleUrls: ['./pelicula-listado.component.css']
})
export class PeliculaListadoComponent implements OnInit {
  peliculaSeleccionada: Pelicula;
  listadoPeliculas: Array<Pelicula>;
  constructor(private router: Router, private peliculaService: PeliculasService) { }

  ngOnInit(): void {
    this.listadoPeliculas = this.peliculaService.obtenerPeliculas();
  }

  seleccionarPelicula(pelicula: Pelicula) {
    this.peliculaSeleccionada = pelicula;
  }

  navegarA(link: string) {
    this.router.navigate([link]);
  }

  borrarPelicula(pelicula: Pelicula) {
    this.peliculaService.borrarPelicula(pelicula);
    this.peliculaSeleccionada = undefined;
    this.listadoPeliculas = Array.from(this.peliculaService.obtenerPeliculas());
  }

}
