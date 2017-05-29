import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FormulaireService } from './formulaire.service';
import { FilterByPipe } from '../../filters/filter.pipe';
const _ = require('lodash');
/*declare var jQuery: any;
let $ = jQuery;*/

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css']
})
export class FormulaireComponent implements OnInit {

  private idFormulaire;

  public formulaires = [];

  private formulaireInfo = {
    id: '',
    nom: '',
    statut: '',
    etat: '',
    serie: '',
    niveau: ''

  };

  protected searchName: string = '';

  constructor(private formulaireService: FormulaireService) {
    // TODO
    //this.formulairesBouchon();
  }

  ngOnInit() {
    this.formulaireService.getFormulaires().subscribe((formulaires) => {
      this.formulaires = formulaires;
    });
  }

  public deleteFormulaire() {
    this.formulaireService.deleteFormulaire(this.idFormulaire).subscribe((formulaire) => {
      _.remove(this.formulaires, function(_formulaire){
        return formulaire.id === _formulaire.id;
      });
    });
  }

  private formulairesBouchon() {
    this.formulaires = [
      {    id: 1, nom: 'form1', statut: 'true', etat: 'false', niveau: '1ere', serie: 'S'},
      {    id: 2, nom: 'form2', statut: 'false', etat: 'true', niveau: '2nd', serie: 'ES'},
      {    id: 3, nom: 'Form3', statut: 'true', etat: 'true', niveau: 'Tle', serie: 'L'},
      {    id: 3, nom: 'Form4fffffffffffffffffffffffffffffffffffd', statut: 'false', etat: 'false', niveau: 'Terminale', serie: 'S'}
    ];
  }
}
