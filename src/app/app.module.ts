import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {RouterModule, Routes} from '@angular/router';
import {DataTableModule} from 'angular2-datatable';
import {FilterByPipe} from './filters/filter.pipe';
import {Ng2Bs3ModalModule} from 'ng2-bs3-modal/ng2-bs3-modal';

import {AppComponent} from './app.component';

import {DashboardComponent} from './dashboard/dashboard.component';

import {EtablissementComponent} from './etablissement/list/etablissement.component';
import {EtablissementService} from './etablissement/list/etablissement.service';
import {EtablissementAddComponent} from './etablissement/add/etablissement-add.component';
import {EtablissementAddService} from './etablissement/add/etablissement-add.service';

import {QuestionComponent} from './question/list/question.component';
import {QuestionService} from './question/list/question.service';
import {QuestionAddComponent} from './question/add/question-add.component';
import {QuestionAddService} from './question/add/question-add.service';
import {FormulaireComponent} from './formulaire/list/formulaire.component';
import {FormulaireService} from './formulaire/list/formulaire.service';
import {FormulaireAddComponent} from './formulaire/add/formulaire-add.component';
import {FormulaireAddService} from './formulaire/add/formulaire-add.service';


const appRoutes: Routes = [
  {path: 'dashboard', component: DashboardComponent},
  {path: 'etablissement/list', component: EtablissementComponent},
  {path: 'etablissement/add', component: EtablissementAddComponent},
  {path: 'etablissement/edit/:id', component: EtablissementAddComponent},
  {path: 'question/list', component: QuestionComponent},
  {path: 'question/add', component: QuestionAddComponent},
  {path: 'question/edit/:id', component: QuestionAddComponent},
  {path: 'formulaire/list', component: FormulaireComponent},
  {path: 'formulaire/add', component: FormulaireAddComponent},
  {path: 'formulaire/edit/:id', component: FormulaireAddComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    EtablissementComponent,
    DashboardComponent,
    EtablissementAddComponent,
    FilterByPipe,
    QuestionComponent,
    QuestionAddComponent,
    FormulaireAddComponent,
    FormulaireComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    DataTableModule,
    RouterModule.forRoot(appRoutes),
    Ng2Bs3ModalModule
  ],
  providers: [
    EtablissementService,
    EtablissementAddService,
    QuestionService,
    QuestionAddService,
    FormulaireService,
    FormulaireAddService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
