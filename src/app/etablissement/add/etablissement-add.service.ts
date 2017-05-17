import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions} from '@angular/http';
import "rxjs/add/operator/map";

@Injectable()
export class EtablissementAddService {

  private headers: Headers;
  private options: RequestOptions;

  constructor(private http: Http) {
    this.headers = new Headers({'Content-Type': 'application/json'});
    this.options = new RequestOptions({headers: this.headers});
  }

  public addEtablissement(etablissement){
    return this.http
      .post('http://localhost:8080/fcpe/api/etablissement', JSON.stringify(etablissement), this.options)
      .map( res => res.json() );
  }

  public updateEtablissement(etablissement){
    return this.http
      .put('http://localhost:8080/fcpe/api/etablissement', JSON.stringify(etablissement), this.options)
      .map( res => res.json() );
  }

  public getEtablissement(idEtablissement){
    return this.http
      .get('http://localhost:8080/fcpe/api/etablissement/' + idEtablissement, this.options)
      .map( res => res.json() );
  }
}
