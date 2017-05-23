import { Component, OnInit } from '@angular/core';
import { EtablissementAddService } from './etablissement-add.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
const _ = require('lodash'); // Loadash

@Component({
  selector: 'app-etablissement-add',
  templateUrl: './etablissement-add.component.html',
  styleUrls: ['./etablissement-add.component.css']
})

export class EtablissementAddComponent implements OnInit {

  private id: number;
  private sub: any;
  private title: string;
  private action: string;

  private etablissementInfo = {
    id: '',
    nom: '',
    voie: '',
    codePostal: '',
    ville: '',
    types: { optionCollege: false, optionLycee: false }
  }

  constructor(private etablissementAddService: EtablissementAddService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      // Get param id (if exists)
      this.id = +params['id']; // (+) converts string 'id' to a number

      if (isNaN(this.id)) {
        // Formulaire d'ajout
        this.title = 'Ajouter un établissement';
        this.action = 'add';
      } else {
        // Formulaire d'édition
        this.title = 'Modifier un établissement';
        this.action = 'edit';
        // Récupération de l'établissement
        this.etablissementAddService.getEtablissement(this.id).subscribe((etablissement) => {
          // Map
          this.etablissementInfo.id = etablissement.id;
          this.etablissementInfo.nom = etablissement.nom;
          this.etablissementInfo.voie = etablissement.voie;
          this.etablissementInfo.codePostal = etablissement.codePostal;
          this.etablissementInfo.ville = etablissement.ville;
          // Types
          let i;
          for(i = 0; i < etablissement.types.length; i++){
            if (etablissement.types[i].id === 1) {
              console.log('ok');
              this.etablissementInfo.types.optionCollege = true;
            }
            if (etablissement.types[i].id === 2) {
              this.etablissementInfo.types.optionLycee = true;
            }
          }
        });
      }
    });
  }

  public addEtablissement() {
    this.etablissementInfo.id = '0';
    this.etablissementAddService.addEtablissement(this.etablissementInfo).subscribe((etablissement) => {
      this.router.navigate(['/etablissement/list']);
    });
  }

  public updateEtablissement() {
    this.etablissementAddService.updateEtablissement(this.etablissementInfo).subscribe((etablissement) => {
      this.router.navigate(['/etablissement/list']);
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
