import { Component, OnInit } from '@angular/core';
import {FormulaireAddService} from './formulaire-add.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
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

  private formulaireInfo = {
    id: '',
    nom: '',
    statut: '',
    etat: '',
    serie: '',
    niveau: ''
  }

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
        // Formulaire d'édition
        this.title = 'Modifier un formulaire';
        this.action = 'edit';
        // Récupération du formulaire
        this.formulaireAddService.getFormulaire(this.id).subscribe((formulaire) => {
          this.formulaireInfo = formulaire;
        });
      }
    });
  }

  public addFormulaire() {
    this.formulaireInfo.id = '0';
    this.formulaireAddService.addFormulaire(this.formulaireInfo).subscribe((formulaire) => {
      this.router.navigate(['/formulaire/list']);
    });
  }

  public updateFormulaire() {
    this.formulaireAddService.updateFormulaire(this.formulaireInfo).subscribe((formulaire) => {
      this.router.navigate(['/formulaire/list']);
    });
  }


  public previsualiserFormulaire() {
    this.formulaireAddService.updateFormulaire(this.formulaireInfo).subscribe((formulaire) => {
      this.router.navigate(['/formulaire/list']);
    });
  }


  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}