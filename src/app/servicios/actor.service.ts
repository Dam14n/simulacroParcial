import { Sexo } from './../modelo/Sexo';
import { Actor } from './../modelo/Actor';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ActorService {
  actores: Array<Actor>;

  constructor() {
    this.actores = new Array<Actor>();
  }

  obtenerActores(): Array<Actor> {
    if (this.actores.length > 0) {
      return this.actores;
    }
    this.actores.push(new Actor(1, 'Kylo', 'Ren', Sexo.MASCULINO, new Date(1983, 11, 19), './assets/kyloren.jpg'));
    this.actores.push(new Actor(1, 'Rey', 'Skywalker', Sexo.FEMENINO, new Date(1992, 4, 10), './assets/rey.jpg'));
    this.actores.push(new Actor(1, 'Palpatine', '', Sexo.MASCULINO, new Date(1944, 8, 11), './assets/palpatine.jpg'));
    this.actores.push(new Actor(1, 'Luke', 'Skywalker', Sexo.MASCULINO, new Date(1951, 9, 25), './assets/luke.jpg'));
    return this.actores;
  }

}
