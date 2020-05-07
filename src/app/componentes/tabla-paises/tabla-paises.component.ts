import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tabla-paises',
  templateUrl: './tabla-paises.component.html',
  styleUrls: ['./tabla-paises.component.css']
})
export class TablaPaisesComponent implements OnInit {
  @Output() seleccionarPais = new EventEmitter<any>();
  @Input() listadoPaises: Array<any>;
  displayedColumns: string[] = ['name', 'capital', 'region', 'population', 'flag', 'seleccionar'];

  constructor() { }

  ngOnInit(): void {
  }

  onSeleccionarPais(pais: any) {
    this.seleccionarPais.emit(pais);
  }

}
