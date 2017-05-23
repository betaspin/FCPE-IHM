import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class QuestionAddService {

  private headers: Headers;
  private options: RequestOptions;

  constructor(private http: Http) {
    this.headers = new Headers({'Content-Type': 'application/json'});
    this.options = new RequestOptions({headers: this.headers});
  }

  public addQuestion(question){
    return this.http
      .post('http://localhost:8080/fcpe/api/question', JSON.stringify(question), this.options)
      .map( res => res.json() );
  }

  public updateQuestion(question){
    return this.http
      .put('http://localhost:8080/fcpe/api/question', JSON.stringify(question), this.options)
      .map( res => res.json() );
  }

  public getQuestion(idQuestion){
    return this.http
      .get('http://localhost:8080/fcpe/api/question/' + idQuestion, this.options)
      .map( res => res.json() );
  }

}
