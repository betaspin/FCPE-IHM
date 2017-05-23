import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class QuestionService {

  private headers: Headers;
  private options: RequestOptions;

  private questions = [];

  constructor(private http: Http) {
    this.headers = new Headers({'Content-Type': 'application/json'});
    this.options = new RequestOptions({headers: this.headers});
  }

  public getQuestions(){
    return this.http
      .get('http://localhost:8080/fcpe/api/question', this.options)
      .map( res => res.json() );
  }

  public deleteQuestion(idQuestion){
    return this.http
      .delete('http://localhost:8080/fcpe/api/question/' + idQuestion, this.options)
      .map( res => res.json() );
  }

}
