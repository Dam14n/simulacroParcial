import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-detalle-pais',
  templateUrl: './detalle-pais.component.html',
  styleUrls: ['./detalle-pais.component.css']
})
export class DetallePaisComponent implements OnInit {
  @Output() disableCountry = new EventEmitter<any>();
  @Input() pais: any;
  @Input() mostrarDisabled = true;

  constructor() { }

  ngOnInit(): void {
  }

  onDisabledCountry() {
    this.disableCountry.emit(this.pais);
  }

}
