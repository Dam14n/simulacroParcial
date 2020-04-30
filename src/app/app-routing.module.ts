import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ActorAltaComponent } from './componentes/actor-alta/actor-alta.component';
import { ActorListadoComponent } from './componentes/actor-listado/actor-listado.component';
import { BienvenidoComponent } from './componentes/bienvenido/bienvenido.component';
import { BusquedaComponent } from './componentes/busqueda/busqueda.component';
import { PeliculaAltaComponent } from './componentes/pelicula-alta/pelicula-alta.component';
import { PeliculaListadoComponent } from './componentes/pelicula-listado/pelicula-listado.component';



const MiRuteo = [
  { path: 'bienvenido', component: BienvenidoComponent },
  { path: '', component: BienvenidoComponent },
  { path: 'busqueda', component: BusquedaComponent },
  {
    path: 'peliculas',
    children:
      [{ path: 'alta', component: PeliculaAltaComponent },
      { path: 'listado', component: PeliculaListadoComponent }]
  },
  {
    path: 'actor',
    children:
      [{ path: 'alta', component: ActorAltaComponent },
      { path: 'listado', component: ActorListadoComponent }]
  }];

@NgModule({
  imports: [RouterModule.forRoot(MiRuteo)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
