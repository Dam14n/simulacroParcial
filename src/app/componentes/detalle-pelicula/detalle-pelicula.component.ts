import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Pelicula } from './../../modelo/Pelicula';

@Component({
  selector: 'app-detalle-pelicula',
  templateUrl: './detalle-pelicula.component.html',
  styleUrls: ['./detalle-pelicula.component.css']
})
export class DetallePeliculaComponent implements OnInit {
  @Output() borrarPelicula = new EventEmitter<Pelicula>();
  @Input() pelicula: Pelicula;
  @Input() mostrarBorrar = true;

  constructor() { }

  ngOnInit(): void {
  }

  onBorrarPelicula() {
    this.borrarPelicula.emit(this.pelicula);
  }

}
