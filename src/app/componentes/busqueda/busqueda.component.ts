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

  constructor(private router: Router, private peliculaService: PeliculasService) {
    this.listadoPeliculas = this.peliculaService.obtenerPeliculas();
  }

  ngOnInit(): void {
  }

  navegarA(link: string) {
    this.router.navigate([link]);
  }

}
