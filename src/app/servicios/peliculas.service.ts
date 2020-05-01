import { Injectable } from '@angular/core';
import { Pelicula } from './../modelo/Pelicula';
import { TipoPelicula } from './../modelo/TipoPelicula';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {
  peliculas: Array<Pelicula>;
  constructor() {
    this.peliculas = new Array<Pelicula>();
    // this.peliculas = JSON.parse(localStorage.getItem('peliculas'));
  }

  public obtenerPeliculas = (): Array<Pelicula> => {
    if (this.peliculas.length > 0) {
      return this.peliculas;
    }
    this.peliculas.push(new Pelicula(1, 'Star Wars Episodio 5', TipoPelicula.OTROS, new Date(), 153210324564, './assets/episodio5.jpg'));
    this.peliculas.push(new Pelicula(2, 'Star Wars Episodio 7', TipoPelicula.OTROS, new Date(), 153210324564, './assets/episodio7.jpg'));
    this.peliculas.push(new Pelicula(3, 'Star Wars Episodio 8', TipoPelicula.OTROS, new Date(), 153210324564, './assets/episodio8.jpg'));
    this.peliculas.push(new Pelicula(4, 'Star Wars Episodio 9', TipoPelicula.OTROS, new Date(), 153210324564, './assets/episodio9.jpg'));
    // localStorage.setItem('peliculas', JSON.stringify(this.peliculas));
    return this.peliculas;
  }

  public borrarPelicula = (pelicula: Pelicula) => {
    const index = this.peliculas.indexOf(this.peliculas.find(pel => pel.id === pelicula.id));
    if (index > -1) {
      this.peliculas.splice(index, 1);
    }
    // localStorage.setItem('peliculas', JSON.stringify(this.peliculas));
  }

}
