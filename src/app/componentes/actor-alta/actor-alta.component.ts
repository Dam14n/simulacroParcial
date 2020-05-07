import { Actor } from './../../modelo/Actor';
import { ActorService } from './../../servicios/actor.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PaisesServiceService } from './../../servicios/paises-service.service';

@Component({
  selector: 'app-actor-alta',
  templateUrl: './actor-alta.component.html',
  styleUrls: ['./actor-alta.component.css']
})
export class ActorAltaComponent implements OnInit {
  paises = [];
  pais: any;
  signUpForm = new FormGroup({
    id: new FormControl('', Validators.required),
    nombre: new FormControl('', Validators.required),
    apellido: new FormControl('', Validators.required),
    sexo: new FormControl('', Validators.required),
    nacimiento: new FormControl('', Validators.required),
    pais: new FormControl('', Validators.required)
  });

  constructor(private paisesService: PaisesServiceService, private router: Router, private actorService: ActorService) { }

  ngOnInit(): void {
    this.paisesService.obtenerPaises().then(paises => {
      this.paises = paises;
    });
  }

  onSeleccionarPais(pais: any) {
    this.pais = pais;
    this.signUpForm.controls.pais.setValue(pais.name);
  }

  cancelar() {
    this.router.navigate(['']);
  }

  guardarActor() {
    const controls = this.signUpForm.controls;
    const actor = new Actor(controls.id.value, controls.nombre.value, controls.apellido.value, controls.sexo.value, controls.nacimiento.value, './assets/actor.jpg', this.pais.name);
    this.actorService.guardarActor(actor);
    this.router.navigate(['']);
  }

}
