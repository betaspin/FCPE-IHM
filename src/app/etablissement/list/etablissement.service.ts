import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions} from '@angular/http';
import "rxjs/add/operator/map";

@Injectable()
export class EtablissementService {

  private headers: Headers;
  private options: RequestOptions;

  private etablissements = [];

  constructor(private http: Http) {
    this.headers = new Headers({'Content-Type': 'application/json'});
    this.options = new RequestOptions({headers: this.headers});
  }

  public getEtablissements(){
    console.log('getEtablissement');
    return this.http
      .get('http://localhost:8080/fcpe/api/etablissement', this.options)
      .map( res => res.json() );
  }

  public deleteEtablissement(idEtablissement){
    return this.http
      .delete('http://localhost:8080/fcpe/api/etablissement/' + idEtablissement, this.options)
      .map( res => res.json() );
  }
}
