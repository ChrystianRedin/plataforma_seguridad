import { Component, OnInit } from '@angular/core';
import { GlossaryService } from '../../shared/services/glossary.service';

@Component({
  selector: 'app-technicalities',
  templateUrl: './technicalities.component.html',
  styleUrls: ['./technicalities.component.scss']
})
export class TechnicalitiesComponent implements OnInit {

  panelOpenState = false;

  dataTechnicalities = [];
  dataTechnicalitiesTitle = [];

  constructor(private glossaryService: GlossaryService) { }

  ngOnInit(): void {

    this.glossaryService.getGlossaryTechnicalities().subscribe(data => {
      this.dataTechnicalities = data.features;
      this.dataTechnicalities.forEach(element => {
        this.dataTechnicalitiesTitle.push(element.properties.concept.slice(0, 1));
      });
    });

  }

}
