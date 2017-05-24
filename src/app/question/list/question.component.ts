import { Component, OnInit, ViewChild } from '@angular/core';
import { QuestionService } from './question.service';
import { FilterByPipe } from '../../filters/filter.pipe';
import {forEach} from "@angular/router/src/utils/collection";
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

  protected searchTitle = ''; // Search by intitule field

  constructor(private questionService : QuestionService) {}

  ngOnInit() {

/*    this.questionService.getQuestions().subscribe((questions) => {
      for(const question of questions){
        this.questionInfo.id = question.id;
        this.questionInfo.intitule = question.intitule;
        this.questionInfo.obligatoire = question.obligatoire === true ? 'Oui' : 'Non';
        this.questionInfo.statut = question.statut === true ? 'Générique' : 'Spécifique';
        switch (question.type) {
          case 'radio':
            this.questionInfo.type = 'Bouton radio';
            break;
          case 'checkbox':
            this.questionInfo.type = 'Case à cocher';
            break;
          case 'date':
            this.questionInfo.type = 'Date';
            break;
          case 'number':
            this.questionInfo.type = 'Nombre';
            break;
          case 'text':
          default:
            this.questionInfo.type = 'Texte libre';
            break;
        }
        this.questions.push(this.questionInfo);
      }
    });*/


    this.questions = [
      { id: 1, intitule: 'Question1', obligatoire: 'oui', statut: 'Générique', type: 'Case à cocher' },
      { id: 2, intitule: 'Question2', obligatoire: 'non', statut: 'Spécifique', type: 'Bouton radio' },
      { id: 3, intitule: 'Question3', obligatoire: 'oui', statut: 'Spécifique', type: 'Date' },
      { id: 4, intitule: 'Question4', obligatoire: 'non', statut: 'Générique', type: 'Nombre' },
      { id: 5, intitule: 'Question5', obligatoire: 'oui', statut: 'Générique', type: 'Texte libre' },
      ];
  }

  public deleteQuestion() {
    this.questionService.deleteQuestion(this.idQuestion).subscribe((question) => {
      _.remove(this.questions, function (_question) {
        return question.id === _question.id;
      });
    });
  }
}
