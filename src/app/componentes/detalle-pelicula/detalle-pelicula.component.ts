import { Pelicula } from './../../modelo/Pelicula';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-detalle-pelicula',
  templateUrl: './detalle-pelicula.component.html',
  styleUrls: ['./detalle-pelicula.component.css']
})
export class DetallePeliculaComponent implements OnInit {
  @Input() pelicula: Pelicula;

  constructor() { }

  ngOnInit(): void {
  }

}
