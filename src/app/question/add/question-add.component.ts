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
  private types = [
    { label: 'Case à cocher', value: 'checkbox' },
    { label: 'Bouton radio', value: 'radio' },
    { label: 'Date', value: 'date' },
    { label: 'Nombre', value: 'integer' },
    { label: 'Texte libre', value: 'text' }
  ];
  private rows;

  // Model
  // Set id to not have error in JEE => String empty
  // Default type : text
  // Default obligatoire : true
  // Default statut : true
  private questionInfo = {
    id: '1',
    intitule: '',
    type: 'text',
    aide: '',
    obligatoire: true,
    statut: true,
    tag: '',
    reponses: []
  };

  // Model for test update
  // private questionInfo = {
  //   id: '1',
  //   intitule: 'Question1',
  //   type: 'radio',
  //   aide: 'Aide contextuelle',
  //   obligatoire: false,
  //   statut: false,
  //   tag: 'Cantine',
  //   reponses: ['ooo', 'uuu', 'ppp']
  // };

  constructor(private questionAddService: QuestionAddService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      // Get param id (if exists)
      this.id = +params['id']; // (+) converts string 'id' to a number

      // if no id in params
      if (isNaN(this.id)) {
        // Formulaire d'ajout
        this.title = 'Ajouter une question';
        this.action = 'add';
        // Nombre de réponses possibles par défaut : 2
        this.rows = new Array(2);
      } else {
        // Formulaire d'édition
        this.title = 'Modifier un question';
        this.action = 'edit';
        // Nombre de réponses
        this.rows = new Array(this.questionInfo.reponses.length);
        // Récupération de la question
        // this.questionAddService.getQuestion(this.id).subscribe((question) => {
        //   // Map
        //   this.questionInfo.id = question.id;
        //   this.questionInfo.intitule = question.intitule;
        //   this.questionInfo.obligatoire = question.obligatoire;
        //   this.questionInfo.statut = question.statut;
        //   this.questionInfo.tag = question.tag;
        //   this.questionInfo.reponses = question.reponses;
        // });
      }
    });
  }

  public addQuestion() {
    console.dir(this.questionInfo);
    // this.questionInfo.id = '0';
    // this.questionAddService.addQuestion(this.questionInfo).subscribe((question) => {
    //   this.router.navigate(['/question/list']);
    // });
  }

  public updateQuestion() {
    console.dir(this.questionInfo);
    // this.questionAddService.updateQuestion(this.questionInfo).subscribe((question) => {
    //   this.router.navigate(['/question/list']);
    // });
  }

  ngAfterViewInit() { }

  // Add radio/checkbox elements
  addRow(nbRows) {
    this.rows = new Array(this.rows.length + nbRows);
  }

  // If type change, then reset responses
  changeType(){
    if(this.questionInfo.type !== 'checkbox' && this.questionInfo.type !== 'radio'){
      this.questionInfo.reponses = [];
      this.rows = new Array(2);
    }
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
