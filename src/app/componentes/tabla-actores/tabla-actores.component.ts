import { Sexo } from './../../modelo/Sexo';
import { Actor } from './../../modelo/Actor';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tabla-actores',
  templateUrl: './tabla-actores.component.html',
  styleUrls: ['./tabla-actores.component.css']
})
export class TablaActoresComponent implements OnInit {
  @Output() seleccionarActor = new EventEmitter<Actor>();
  @Input() listadoActores: Array<Actor>;
  displayedColumns: string[] = ['id', 'nombre', 'apellido', 'sexo', 'fechaDeNacimiento', 'foto', 'seleccionar'];
  Sexo = Sexo;

  constructor() { }

  ngOnInit(): void {
  }

  onSeleccionarActor(actor: Actor) {
    this.seleccionarActor.emit(actor);
  }

}
