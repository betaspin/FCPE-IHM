import { Component, OnInit } from '@angular/core';
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
    tag: ''
  };

  protected searchTitle = ''; // Search by intitule field

  constructor(private questionService : QuestionService) {}

  ngOnInit() {
    /*
    this.questionService.getQuestions().subscribe((questions) => {
      this.questions = questions;
    });
    */

    this.questions = [
      { id: 1, intitule: 'Question1', obligatoire: 'oui', statut: 'Générique', tag: '' },
      { id: 2, intitule: 'Question2', obligatoire: 'non', statut: 'Spécifique', tag: '' },
      { id: 3, intitule: 'Question3', obligatoire: 'oui', statut: 'Spécifique', tag: '' },
      { id: 4, intitule: 'Question4', obligatoire: 'non', statut: 'Générique', tag: '' },
      { id: 5, intitule: 'Question5', obligatoire: 'oui', statut: 'Générique', tag: '' },
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
