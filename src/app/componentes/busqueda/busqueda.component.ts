import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navegarA(link: string) {
    this.router.navigate([link]);
  }

}
