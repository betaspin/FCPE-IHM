import { Component, OnInit, ViewChild } from '@angular/core';
import { QuestionService } from './question.service';
import { FilterByPipe } from '../../filters/filter.pipe';
const _ = require('lodash');

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  private idQuestion;

  // Model
  public questions = [];

  // Model
  private questionInfo = {
    id: '',
    intitule: '',
    obligatoire: '',
    statut: '',
    type: ''
  };

  private searchTitle = ''; // Search by intitule field

  public promiseTest  = function(question){
    const questionInfo = {
      id: '',
      intitule: '',
      obligatoire: '',
      statut: '',
      type: ''
    };
    const promise = new Promise((resolve, reject) => {
      questionInfo.id = question.id;
      questionInfo.intitule = question.intitule;
      questionInfo.obligatoire = question.obligatoire === true ? 'Oui' : 'Non';
      questionInfo.statut = question.statut === true ? 'Générique' : 'Spécifique';
      switch (question.typeQuestion) {
        case 'radio':
          questionInfo.type = 'Bouton radio';
          break;
        case 'checkbox':
          questionInfo.type = 'Case à cocher';
          break;
        case 'date':
          questionInfo.type = 'Date';
          break;
        case 'number':
          questionInfo.type = 'Nombre';
          break;
        case 'text':
        default:
          questionInfo.type = 'Texte libre';
          break;
      }
      resolve(questionInfo);
    });
    return promise;
  };

  constructor(private questionService : QuestionService) {}

  ngOnInit() {

    this.questionService.getQuestions().subscribe((questions) => {
      const questionArray = [];
      for(const question of questions) {
        this.promiseTest(question).then((quest) => {
          questionArray.push(quest);
        });
      }
      this.questions  = questionArray;
    });

  }

  public deleteQuestion() {
    this.questionService.deleteQuestion(this.idQuestion).subscribe((question) => {
      _.remove(this.questions, function (_question) {
        return question.id === _question.id;
      });
    });
  }
}
