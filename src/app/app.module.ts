import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ActorAltaComponent } from './componentes/actor-alta/actor-alta.component';
import { ActorListadoComponent } from './componentes/actor-listado/actor-listado.component';
import { BienvenidoComponent } from './componentes/bienvenido/bienvenido.component';
import { BusquedaComponent } from './componentes/busqueda/busqueda.component';
import { DetallePeliculaComponent } from './componentes/detalle-pelicula/detalle-pelicula.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { PaisesListadoComponent } from './componentes/paises-listado/paises-listado.component';
import { PeliculaAltaComponent } from './componentes/pelicula-alta/pelicula-alta.component';
import { PeliculaListadoComponent } from './componentes/pelicula-listado/pelicula-listado.component';
import { TablaActoresComponent } from './componentes/tabla-actores/tabla-actores.component';
import { TablaPaisesComponent } from './componentes/tabla-paises/tabla-paises.component';
import { TablaPeliculasComponent } from './componentes/tabla-peliculas/tabla-peliculas.component';
import { PaisesServiceService } from './servicios/paises-service.service';
import { PeliculasService } from './servicios/peliculas.service';
import { DetallePaisComponent } from './componentes/detalle-pais/detalle-pais.component';
import { DetalleActorComponent } from './componentes/detalle-actor/detalle-actor.component';

@NgModule({
  declarations: [
    AppComponent,
    PeliculaAltaComponent,
    PeliculaListadoComponent,
    ActorAltaComponent,
    ActorListadoComponent,
    BusquedaComponent,
    BienvenidoComponent,
    TablaPeliculasComponent,
    DetallePeliculaComponent,
    TablaActoresComponent,
    MenuComponent,
    PaisesListadoComponent,
    TablaPaisesComponent,
    DetallePaisComponent,
    DetalleActorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatCardModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    HttpModule
  ],
  providers: [PeliculasService, PaisesServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
