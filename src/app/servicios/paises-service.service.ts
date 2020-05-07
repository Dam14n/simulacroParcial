import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class PaisesServiceService {

  constructor(private http: Http) { }

  obtenerPaises() {
    return this.http
      .get('https://restcountries.eu/rest/v2/region/americas')
      .toPromise()
      .then(this.extractData)
      .catch(this.handleError);
  }

  private extractData(res: Response) {
    return res.json() || {};
  }

  private handleError(error: Response | any) {
    return error;
  }
}
