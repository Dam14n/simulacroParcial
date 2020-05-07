import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class PaisesServiceService {
  paisesAExcluir = [];

  constructor(private http: Http) { }

  obtenerPaises() {
    return this.http
      .get('https://restcountries.eu/rest/v2/region/americas')
      .toPromise()
      .then(this.extractData)
      .then(this.sacarPaisesExcluidos)
      .catch(this.handleError);
  }

  sacarPaisesExcluidos = (paises: any[]) => {
    return paises.filter(pais => {
      if (this.paisesAExcluir.length <= 0) {
        return true;
      }
      return !this.paisesAExcluir.some(name => name === pais.name);
    });
  }

  private extractData(res: Response) {
    return res.json() || {};
  }

  private handleError(error: Response | any) {
    return error;
  }

  borrarPais(pais: any) {
    this.paisesAExcluir.push(pais.name);
  }
}
