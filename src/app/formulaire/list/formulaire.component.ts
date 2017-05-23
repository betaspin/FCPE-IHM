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
    this.formulairesBouchon();
  }

  ngOnInit() {
    this.formulaireService.getFormulaires().subscribe((formulaires) => {
      this.formulaires = formulaires;
    });
  }

  public deleteFormulaire(idFormulaire) {
    this.formulaireService.deleteFormulaire(idFormulaire).subscribe((formulaire) => {
      _.remove(this.formulaires, function(_formulaire){
        return formulaire.id === _formulaire.id;
      });
    });
  }

  private formulairesBouchon() {
    this.formulaires = [
      {    id: '1', nom: 'form1', statut: 'true', etat: 'false', niveau: '1ere', serie: 'S'},
      {    id: '2', nom: 'form2', statut: 'false', etat: 'true', niveau: '2nd', serie: 'ES'},
      {    id: '3', nom: 'Form3', statut: 'true', etat: 'true', niveau: 'Tle', serie: 'L'},
      {    id: '3', nom: 'Form4fffffffffffffffffffffffffffffffffffddddddddddddddddddd', statut: 'false', etat: 'false', niveau: 'Terminale', serie: 'S'}
    ];
  }



  /*ngAfterViewInit(){
    $(document).ready(function() {
      $('#dataTables-example').DataTable({
        responsive: true,
        "language": {
          processing:     "Traitement en cours...",
          search:         "Rechercher&nbsp;:",
          lengthMenu:    "Afficher _MENU_ &eacute;l&eacute;ments",
          info:           "Affichage de l'&eacute;lement _START_ &agrave; _END_ sur _TOTAL_ &eacute;l&eacute;ments",
          infoEmpty:      "Affichage de l'&eacute;lement 0 &agrave; 0 sur 0 &eacute;l&eacute;ments",
          infoFiltered:   "(filtr&eacute; de _MAX_ &eacute;l&eacute;ments au total)",
          infoPostFix:    "",
          loadingRecords: "Chargement en cours...",
          zeroRecords:    "Aucun &eacute;l&eacute;ment &agrave; afficher",
          emptyTable:     "Aucune donnée disponible dans le tableau",
          paginate: {
            first:      "Premier",
            previous:   "Pr&eacute;c&eacute;dent",
            next:       "Suivant",
            last:       "Dernier"
          },
          aria: {
            sortAscending:  ": activer pour trier la colonne par ordre croissant",
            sortDescending: ": activer pour trier la colonne par ordre décroissant"
          }
        }
      });
    });
  }*/
}
