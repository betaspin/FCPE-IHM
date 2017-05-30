import { Component, OnInit, AfterViewInit } from '@angular/core';
import {QuestionAddService} from './question-add.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
const _ = require('lodash'); // Loadash

@Component({
  selector: 'app-question-add',
  templateUrl: './question-add.component.html',
  styleUrls: ['./question-add.component.css']
})
export class QuestionAddComponent implements OnInit {

  private id: number;
  private sub: any;
  private title: string;
  private action: string;
  private typesQuestion = [
    { label: 'Case à cocher', value: 'checkbox' },
    { label: 'Bouton radio', value: 'radio' },
    { label: 'Date', value: 'date' },
    { label: 'Nombre', value: 'number' },
    { label: 'Texte libre', value: 'text' }
  ];
  private rows;

  // Model
  // Set id to not have error in JEE => String empty
  // Default type : text
  // Default obligatoire : true
  // Default statut : true
  private questionInfo = {
    id: 0,
    intitule: '',
    obligatoire: true,
    aideContextuelle: '',
    statut: true,
    etat: true,
    tag: '',
    archive: false,
    administrateur: 0,
    typeQuestion: 'text',
    reponsesProposees: [],
    formulaires: []
  };

  constructor(private questionAddService: QuestionAddService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {

      // Get param id
      this.id = +params['id']; // (+) converts string 'id' to a number

      // if param id doen't exist
      // Add form
      if (isNaN(this.id)) {
        this.title = 'Ajouter une question';
        this.action = 'add';
        // Nombre de réponses possibles par défaut = 2
        this.setRows(2);
      // If param id exist
      // Edit form
      } else {
        this.title = 'Modifier une question';
        this.action = 'edit';
        // Get question info
        this.questionAddService.getQuestion(this.id).subscribe((question) => {
          // Map
          // console.log(question);
          this.questionInfo.id = question.id;
          this.questionInfo.intitule = question.intitule;
          this.questionInfo.obligatoire = question.obligatoire;
          this.questionInfo.aideContextuelle = question.aideContextuelle;
          this.questionInfo.statut = question.statut;
          this.questionInfo.etat = question.etat;
          this.questionInfo.tag = question.tag;
          this.questionInfo.archive = question.archive;
          this.questionInfo.administrateur = question.administrateur;
          this.questionInfo.typeQuestion = question.typeQuestion;
          this.questionInfo.reponsesProposees = question.reponsesProposees;
          this.questionInfo.formulaires = question.formulaires;
          // Set rows lentgth to reponsesProposees length
          this.setRows(this.questionInfo.reponsesProposees.length);
        });
      }
    });
  }

  public addQuestion() {
    this.questionInfo.id = 0;
    this.questionInfo.administrateur = 1;
    //console.log(this.questionInfo);
    this.questionAddService.addQuestion(this.questionInfo).subscribe((question) => {
      this.router.navigate(['/question/list']);
    });
  }

  public updateQuestion() {
    this.questionAddService.updateQuestion(this.questionInfo).subscribe((question) => {
      this.router.navigate(['/question/list']);
    });
  }

  ngAfterViewInit() { }

  // Add radio/checkbox elements
  addRow(nbRows) {
    this.rows = new Array(this.rows.length + nbRows);
  }

  setRows(nbRows){
    this.rows = new Array(nbRows);
  }

  // If type change, then reset responses
  changeType(){
    if(this.questionInfo.typeQuestion !== 'checkbox' && this.questionInfo.typeQuestion !== 'radio'){
      this.questionInfo.reponsesProposees = [];
      this.setRows(2);
    }else if(this.questionInfo.reponsesProposees.length > 0){
      this.setRows(this.questionInfo.reponsesProposees.length);
    }else{
      this.setRows(2);
    }
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
