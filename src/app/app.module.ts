import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';

import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LaboratoryComponent } from './laboratory/laboratory.component';
import { ComparativeComponent } from './comparative/comparative.component';
import { MatButtonModule, MatCardModule, MatDialogModule, MatDividerModule, MatExpansionModule, MatGridListModule, MatIconModule, MatListModule, MatSidenavModule, MatTabsModule, MatTooltipModule, MatTreeModule } from '@angular/material';
import { GlossaryComponent } from './glossary/glossary.component';
import { KnowledgeComponent } from './knowledge/knowledge.component';
import { DataLabMethodologicalComponent } from './methodological/data-lab/data-lab.component';
import { ComparativeStateComponent } from './methodological/comparative-state/comparative-state.component';

import { TechnicalitiesComponent } from './glossary/technicalities/technicalities.component';
import { DataLabComponent } from './glossary/glossary-data-lab/glossary-data-lab.component';
import { GlossaryComparativeStatesComponent } from './glossary/glossary-comparative-states/glossary-comparative-states.component';

import { GlossaryService } from './shared/services/glossary.service'
import { HttpClientModule } from '@angular/common/http';
import { MethodologicalComponent } from './methodological/methodological.component';
import { KnowledgeTutorialsVideosComponent } from './knowledge/knowledge-tutorials-videos/knowledge-tutorials-videos.component';
import { KnowledgeFaqComponent } from './knowledge/knowledge-faq/knowledge-faq.component';
import { FaqDataLabComponent } from './knowledge/knowledge-faq/faq-data-lab/faq-data-lab.component';
import { FaqComparativeStatesComponent } from './knowledge/knowledge-faq/faq-comparative-states/faq-comparative-states.component';
import { PlatformComponent } from './platform/platform.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    LaboratoryComponent,
    ComparativeComponent,
    GlossaryComponent,
    KnowledgeComponent,
    KnowledgeTutorialsVideosComponent,
    KnowledgeFaqComponent,
    FaqDataLabComponent,
    FaqComparativeStatesComponent,
    DataLabMethodologicalComponent,
    ComparativeStateComponent,
    MethodologicalComponent,
    TechnicalitiesComponent,
    DataLabComponent,
    GlossaryComparativeStatesComponent,
    PlatformComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    RouterModule,
    AppRoutingModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatSidenavModule,
    MatDialogModule,
    MatGridListModule,
    MatExpansionModule,
    MatButtonModule,
    MatDividerModule,
    MatListModule,
    MatTabsModule,
    MatTooltipModule,
    MatTreeModule,
    BrowserAnimationsModule,
    MatTabsModule,
  ],
  providers: [GlossaryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
