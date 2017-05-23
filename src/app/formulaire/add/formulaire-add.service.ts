import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions} from '@angular/http';
import "rxjs/add/operator/map";

@Injectable()
export class FormulaireAddService {

  private headers: Headers;
  private options: RequestOptions;

  constructor(private http: Http) {
    this.headers = new Headers({'Content-Type': 'application/json'});
    this.options = new RequestOptions({headers: this.headers});
  }

  public addFormulaire(formulaire) {
    return this.http
      .post('http://localhost:8080/fcpe/api/formulaire', JSON.stringify(formulaire), this.options)
      .map( res => res.json() );
  }

  public updateFormulaire(formulaire) {
    return this.http
      .put('http://localhost:8080/fcpe/api/formulaire', JSON.stringify(formulaire), this.options)
      .map( res => res.json() );
  }

  public getFormulaire(idFormulaire) {
    return this.http
      .get('http://localhost:8080/fcpe/api/formulaire/' + idFormulaire, this.options)
      .map( res => res.json() );
  }





}
