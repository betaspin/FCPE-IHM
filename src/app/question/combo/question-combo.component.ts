import { Component, OnInit,  } from '@angular/core';
import { QuestionService } from '../list/question.service';
const _ = require('lodash');

@Component({
  selector: 'app-question-combo',
  templateUrl: './question-combo.component.html',
  styleUrls: ['./question-combo.component.css']
})
export class QuestionComboComponent implements OnInit {

  // Used by Parent component
  private questionSelected;

  // Model
  public questions = [];

  constructor(private questionService : QuestionService) { }

  ngOnInit() {
    // this.questionService.getQuestions().subscribe((questions) => {
    //   this.questions = questions;
    // });

    this.questions = [
      { id: 1, intitule: 'Question1', obligatoire: 'oui', statut: 'Générique', tag: '' },
      { id: 2, intitule: 'Question2', obligatoire: 'non', statut: 'Spécifique', tag: '' },
      { id: 3, intitule: 'Question3', obligatoire: 'oui', statut: 'Spécifique', tag: '' },
      { id: 4, intitule: 'Question4', obligatoire: 'non', statut: 'Générique', tag: '' },
      { id: 5, intitule: 'Question5', obligatoire: 'oui', statut: 'Générique', tag: '' },
    ];
  }
}
