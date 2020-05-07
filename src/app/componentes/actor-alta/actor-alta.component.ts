import { Component, OnInit } from '@angular/core';
import { Actor } from './../../modelo/Actor';

@Component({
  selector: 'app-actor-alta',
  templateUrl: './actor-alta.component.html',
  styleUrls: ['./actor-alta.component.css']
})
export class ActorAltaComponent implements OnInit {
  listadoActores: Array<Actor>;

  constructor() { }

  ngOnInit(): void {
  }

}
