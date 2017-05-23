import { Component, OnInit } from '@angular/core';
import { EtablissementService } from './etablissement.service';
import { FilterByPipe } from '../../filters/filter.pipe';
const _ = require('lodash');

@Component({
  selector: 'app-etablissement',
  templateUrl: './etablissement.component.html',
  styleUrls: ['./etablissement.component.css']
})
export class EtablissementComponent implements OnInit {

  private idEtablissement;

  public etablissements = [];

  private etablissementInfo = {
    id: '',
    nom: '',
    ville: ''
  };

  protected searchName = '';
  protected searchCity = '';

  constructor(private etablissementService : EtablissementService) {}

  ngOnInit() {
    this.etablissementService.getEtablissements().subscribe((etablissements) => {
      this.etablissements = etablissements;
    });
  }

  public deleteEtablissement() {
    this.etablissementService.deleteEtablissement(this.idEtablissement).subscribe((etablissement) => {
      _.remove(this.etablissements, function(_etablissement){
        return etablissement.id === _etablissement.id;
      });
    });
  }
}
