import { Router } from '@angular/router';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Pelicula } from './../../modelo/Pelicula';
import { PeliculasService } from './../../servicios/peliculas.service';

@Component({
  selector: 'app-tabla-peliculas',
  templateUrl: './tabla-peliculas.component.html',
  styleUrls: ['./tabla-peliculas.component.css']
})
export class TablaPeliculasComponent implements OnInit {
  @Output() seleccionarPelicula = new EventEmitter<Pelicula>();
  listadoPeliculas: Array<Pelicula>;
  displayedColumns: string[] = ['id', 'nombre', 'tipo', 'fechaDeEstreno', 'cantidadDePublico', 'foto', 'seleccionar'];

  constructor(private peliculaService: PeliculasService) {
  }

  ngOnInit(): void {
    this.listadoPeliculas = this.peliculaService.obtenerPeliculas();
  }

  onSeleccionarPelicula(pelicula: Pelicula) {
    this.seleccionarPelicula.emit(pelicula);
  }

}
