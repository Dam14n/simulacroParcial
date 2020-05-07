import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Actor } from './../../modelo/Actor';
import { Pelicula } from './../../modelo/Pelicula';
import { TipoPelicula } from './../../modelo/TipoPelicula';
import { ActorService } from './../../servicios/actor.service';
import { PeliculasService } from './../../servicios/peliculas.service';

@Component({
  selector: 'app-pelicula-alta',
  templateUrl: './pelicula-alta.component.html',
  styleUrls: ['./pelicula-alta.component.css']
})
export class PeliculaAltaComponent implements OnInit {
  actor: Actor;
  listadoActores: Array<Actor>;
  signUpForm = new FormGroup({
    id: new FormControl('', Validators.required),
    nombre: new FormControl('', Validators.required),
    tipo: new FormControl('', Validators.required),
    fecha: new FormControl('', Validators.required),
    publico: new FormControl('', Validators.required),
    actor: new FormControl('', Validators.required)
  });

  constructor(private actorService: ActorService, private router: Router, private peliculaService: PeliculasService) {
    this.listadoActores = this.actorService.obtenerActores();
  }

  ngOnInit(): void {
  }

  cancelar() {
    this.router.navigate(['']);
  }

  guardarPelicula() {
    const controls = this.signUpForm.controls;
    const pelicula = new Pelicula(controls.id.value, controls.nombre.value, controls.tipo.value, controls.fecha.value, controls.publico.value, './assets/pelicula.png');
    pelicula.agregarActor(this.actor);
    this.peliculaService.guardarPelicula(pelicula);
    this.router.navigate(['']);
  }

  onSeleccionarActor(actor: Actor) {
    this.actor = actor;
    this.signUpForm.controls.actor.setValue(actor.nombre);
  }


}
