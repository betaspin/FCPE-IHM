import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { DataTableModule } from "angular2-datatable";

import { AppComponent } from './app.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { EtablissementComponent } from './etablissement/list/etablissement.component';
import { EtablissementService } from './etablissement/list/etablissement.service';
import { EtablissementAddComponent } from './etablissement/add/etablissement-add.component';
import { EtablissementAddService } from './etablissement/add/etablissement-add.service';

const appRoutes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'etablissement/list', component: EtablissementComponent },
  { path: 'etablissement/add', component: EtablissementAddComponent },
  { path: 'etablissement/edit/:id', component: EtablissementAddComponent }
  ];

@NgModule({
  declarations: [
    AppComponent,
    EtablissementComponent,
    DashboardComponent,
    EtablissementAddComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    DataTableModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    EtablissementService,
    EtablissementAddService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
