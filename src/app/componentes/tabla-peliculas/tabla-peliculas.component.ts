import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Pelicula } from './../../modelo/Pelicula';

@Component({
  selector: 'app-tabla-peliculas',
  templateUrl: './tabla-peliculas.component.html',
  styleUrls: ['./tabla-peliculas.component.css']
})
export class TablaPeliculasComponent implements OnInit {
  @Output() seleccionarPelicula = new EventEmitter<Pelicula>();
  @Input() listadoPeliculas: Array<Pelicula>;
  displayedColumns: string[] = ['id', 'nombre', 'tipo', 'fechaDeEstreno', 'cantidadDePublico', 'foto', 'seleccionar'];

  constructor() {
  }

  ngOnInit(): void {
  }

  onSeleccionarPelicula(pelicula: Pelicula) {
    this.seleccionarPelicula.emit(pelicula);
  }

}
