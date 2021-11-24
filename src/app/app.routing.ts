import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { ComponentsComponent } from './components/components.component';
import { LaboratoryComponent } from './laboratory/laboratory.component';
import { ComparativeComponent } from './comparative/comparative.component';
import { GlossaryComponent } from './glossary/glossary.component';
import { KnowledgeComponent } from './knowledge/knowledge.component';
import { MethodologicalComponent } from './methodological/methodological.component';
import { PlatformComponent } from './platform/platform.component';
 


const routes: Routes =[
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home',               component: ComponentsComponent },
    { path: 'laboratorio',        component: LaboratoryComponent },
    { path: 'comparativa',        component: ComparativeComponent },
    { path: 'glosario',           component: GlossaryComponent },
    { path: 'metodologia',        component: MethodologicalComponent },
    { path: 'aprendizaje',        component: KnowledgeComponent },
    { path: 'plataforma',        component: PlatformComponent  },
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes, {
      useHash: true
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
