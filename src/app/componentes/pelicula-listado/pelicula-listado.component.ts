import { Router } from '@angular/router';
import { Pelicula } from './../../modelo/Pelicula';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pelicula-listado',
  templateUrl: './pelicula-listado.component.html',
  styleUrls: ['./pelicula-listado.component.css']
})
export class PeliculaListadoComponent implements OnInit {
  peliculaSeleccionada: Pelicula;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  seleccionarPelicula(pelicula: Pelicula) {
    this.peliculaSeleccionada = pelicula;
  }

  navegarA(link: string) {
    this.router.navigate([link]);
  }
}
