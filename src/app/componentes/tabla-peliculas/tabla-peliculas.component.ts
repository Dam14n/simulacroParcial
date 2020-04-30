import { Component, OnInit } from '@angular/core';
import { Pelicula } from './../../modelo/Pelicula';
import { PeliculasService } from './../../servicios/peliculas.service';

@Component({
  selector: 'app-tabla-peliculas',
  templateUrl: './tabla-peliculas.component.html',
  styleUrls: ['./tabla-peliculas.component.css']
})
export class TablaPeliculasComponent implements OnInit {
  listadoPeliculas: Array<Pelicula>;
  displayedColumns: string[] = ['id', 'nombre', 'tipo', 'fechaDeEstreno', 'cantidadDePublico', 'foto'];

  constructor(private peliculaService: PeliculasService) {
  }

  ngOnInit(): void {
    this.listadoPeliculas = this.peliculaService.obtenerPeliculas();
  }

}
