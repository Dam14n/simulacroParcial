import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tabla-paises',
  templateUrl: './tabla-paises.component.html',
  styleUrls: ['./tabla-paises.component.css']
})
export class TablaPaisesComponent implements OnInit {
  @Input() listadoPaises: Array<any>;
  displayedColumns: string[] = ['name', 'capital', 'region', 'population', 'flag'];

  constructor() { }

  ngOnInit(): void {
  }

}
