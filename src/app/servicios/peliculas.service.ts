import { TipoPelicula } from './../modelo/TipoPelicula';
import { Injectable } from '@angular/core';
import { Pelicula } from './../modelo/Pelicula';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  constructor() { }

  public obtenerPeliculas = (): Array<Pelicula> => {
    const miArray: Array<Pelicula> = new Array<Pelicula>();
    miArray.push(new Pelicula(1, 'Star Wars Episodio 5', TipoPelicula.OTROS, new Date(), 153210324564, './assets/episodio5.jpg'));
    miArray.push(new Pelicula(2, 'Star Wars Episodio 7', TipoPelicula.OTROS, new Date(), 153210324564, './assets/episodio7.jpg'));
    miArray.push(new Pelicula(3, 'Star Wars Episodio 8', TipoPelicula.OTROS, new Date(), 153210324564, './assets/episodio8.jpg'));
    miArray.push(new Pelicula(4, 'Star Wars Episodio 9', TipoPelicula.OTROS, new Date(), 153210324564, './assets/episodio9.jpg'));
    return miArray;
  }
}
