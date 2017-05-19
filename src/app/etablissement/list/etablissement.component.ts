import { Component, OnInit, AfterViewInit } from '@angular/core';
import { EtablissementService } from './etablissement.service';
import { FilterByPipe } from '../../filters/filter.pipe';
const _ = require('lodash');
/*declare var jQuery: any;
let $ = jQuery;*/

@Component({
  selector: 'app-etablissement',
  templateUrl: './etablissement.component.html',
  styleUrls: ['./etablissement.component.css']
})
export class EtablissementComponent implements OnInit {

  public etablissements = [];

  private etablissementInfo = {
    id: '',
    nom: '',
    ville: ''
  };

  protected searchName: string = "";
  protected searchCity: string = "";

  constructor(private etablissementService : EtablissementService) {}

  ngOnInit() {
    this.etablissementService.getEtablissements().subscribe((etablissements) => {
      this.etablissements = etablissements;
    });
  }

  public deleteEtablissement(idEtablissement) {
    this.etablissementService.deleteEtablissement(idEtablissement).subscribe((etablissement) => {
      _.remove(this.etablissements, function(_etablissement){
        return etablissement.id == _etablissement.id;
      })
    });
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
