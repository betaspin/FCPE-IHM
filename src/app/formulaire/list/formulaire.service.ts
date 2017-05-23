import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions} from '@angular/http';
import "rxjs/add/operator/map";

@Injectable()
export class FormulaireService {

  private headers: Headers;
  private options: RequestOptions;

  private formulaires = [];

  constructor(private http: Http) {
    this.headers = new Headers({'Content-Type': 'application/json'});
    this.options = new RequestOptions({headers: this.headers});
  }

  public getFormulaires() {
    console.log('getFormulaire');
    return this.http
      .get('http://localhost:8080/fcpe/api/formulaire', this.options)
      .map( res => res.json() );
  }

  public deleteFormulaire(idFormulaire) {
    return this.http
      .delete('http://localhost:8080/fcpe/api/formulaire/' + idFormulaire, this.options)
      .map( res => res.json() );
  }
}
