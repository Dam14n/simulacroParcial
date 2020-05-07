import { ActorService } from './actor.service';
import { Injectable } from '@angular/core';
import { Pelicula } from './../modelo/Pelicula';
import { TipoPelicula } from './../modelo/TipoPelicula';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {
  peliculas: Array<Pelicula>;

  constructor(private actorService: ActorService) {
    this.peliculas = new Array<Pelicula>();
  }

  public obtenerPeliculas = (): Array<Pelicula> => {
    return this.peliculas;
  }

  public borrarPelicula = (pelicula: Pelicula) => {
    const index = this.peliculas.indexOf(this.peliculas.find(pel => pel.id === pelicula.id));
    if (index > -1) {
      this.peliculas.splice(index, 1);
    }
  }

  cargarPeliculas() {
    if (this.peliculas.length) {
      return;
    }
    const actores = this.actorService.obtenerActores();
    const pelicula1 = new Pelicula(1, 'Star Wars Episodio 5', TipoPelicula.OTROS, new Date(), 153210324564, './assets/episodio5.jpg');
    const pelicula2 = new Pelicula(2, 'Star Wars Episodio 7', TipoPelicula.OTROS, new Date(), 153210324564, './assets/episodio7.jpg');
    const pelicula3 = new Pelicula(3, 'Star Wars Episodio 8', TipoPelicula.OTROS, new Date(), 153210324564, './assets/episodio8.jpg');
    const pelicula4 = new Pelicula(4, 'Star Wars Episodio 9', TipoPelicula.OTROS, new Date(), 153210324564, './assets/episodio9.jpg');
    pelicula1.agregarActores(actores);
    pelicula2.agregarActores(actores);
    pelicula3.agregarActores(actores);
    pelicula4.agregarActores(actores);
    this.peliculas.push(pelicula1);
    this.peliculas.push(pelicula2);
    this.peliculas.push(pelicula3);
    this.peliculas.push(pelicula4);
  }

  guardarPelicula(pelicula: Pelicula) {
    this.peliculas.push(pelicula);
  }

}
