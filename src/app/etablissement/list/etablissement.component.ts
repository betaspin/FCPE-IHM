import { Component, OnInit } from '@angular/core';
import { EtablissementService } from './etablissement.service';
const _ = require('lodash');

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
}
