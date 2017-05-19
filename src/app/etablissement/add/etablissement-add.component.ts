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
    types: { optionCollege: true, optionLycee: true }
  };

  constructor(private etablissementAddService : EtablissementAddService, private router : Router, private route : ActivatedRoute) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      // Get param id (if exists)
      this.id = +params['id']; // (+) converts string 'id' to a number

      if(isNaN(this.id)){
        // Formulaire d'ajout
        this.title = "Ajouter un établissement";
        this.action = "add";
      }else{
        // Formulaire d'édition
        this.title = "Modifier un établissement";
        this.action = "edit";
        // Récupération de l'établissement
        this.etablissementAddService.getEtablissement(this.id).subscribe((etablissement) => {
          this.etablissementInfo = etablissement;
        });
      }
    });
  }

  public addEtablissement() {
    this.etablissementInfo.id = "0";
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
