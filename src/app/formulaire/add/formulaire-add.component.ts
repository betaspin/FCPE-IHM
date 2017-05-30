import { Component, OnInit, ViewChild } from '@angular/core';
import {FormulaireAddService} from './formulaire-add.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { QuestionComboComponent } from '../../question/combo/question-combo.component';
import {QuestionComponent} from "../../question/list/question.component";
const _ = require('lodash'); // Loadash

@Component({
  selector: 'app-formulaire-add',
  templateUrl: './formulaire-add.component.html',
  styleUrls: ['./formulaire-add.component.css']
})
export class FormulaireAddComponent implements OnInit {

  private id: number;
  private sub: any;
  private title: string;
  private action: string;

  // Model
  public questions = [];
/*
  // Model
  private questionInfo = {
    id: '',
    intitule: '',
    obligatoire: '',
    statut: '',
    type: ''
  };
*/
  // permet d'avoir acces aux données du composant fille
  @ViewChild(QuestionComboComponent)
  private comboQuestion: QuestionComboComponent;

  // permet d'avoir acces aux données du composant fille
  @ViewChild(QuestionComponent)
  private questionInfo: QuestionComponent;



  private formulaireInfo = {
    id: NaN,
    nom: '',
    statut: '',
    etat: ''
  };

  constructor(private formulaireAddService: FormulaireAddService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      // Get param id (if exists)
      this.id = +params['id']; // (+) converts string 'id' to a number

      if (isNaN(this.id)) {
        // Formulaire d'ajout
        this.title = 'Ajouter un formulaire';
        this.action = 'add';
      }else {
        console.log(this.id);
        // Formulaire d'édition
        this.title = 'Modifier un formulaire';
        this.action = 'edit';

        this.formulaireInfo.id = this.id;

        // Récupération du formulaire
        this.formulaireAddService.getFormulaire(this.id).subscribe((formulaire) => {
         if (formulaire.etat === 'true') {
           formulaire.etat = 'actif';
         }else {
           formulaire.etat = 'inactif';
         }
          this.formulaireInfo = formulaire;
        });
      }
    });
  }

  public addFormulaire() {
     this.questions =  this.comboQuestion.listQuestionSelected;
      this.formulaireInfo.id = 0;
    // S'il y a au moins une question dans le formulaire on peut enregistrer
    if (this.questions.length > 0) {
      this.formulaireAddService.addFormulaire(this.formulaireInfo).subscribe((formulaire) => {
        this.router.navigate(['/formulaire/list']);
      });
    }
  }

  public updateFormulaire() {
    // S'il y a au moins une question dans le formulaire on peut enregistrer
    if (this.questions.length > 0) {
      this.formulaireAddService.updateFormulaire(this.formulaireInfo).subscribe((formulaire) => {
        this.router.navigate(['/formulaire/list']);
      });
    }
  }


  public previsualiserFormulaire() {
    this.formulaireAddService.updateFormulaire(this.formulaireInfo).subscribe((formulaire) => {
      this.router.navigate(['/formulaire/list']);
    });
  }


  public importerQuestion() {
    console.log('Importez une question !!!!!!!');
  }



  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
