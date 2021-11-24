import { Component, OnInit } from '@angular/core';
import { GlossaryService } from '../../shared/services/glossary.service';

@Component({
  selector: 'app-glossary-data-lab',
  templateUrl: './glossary-data-lab.component.html',
  styleUrls: ['./glossary-data-lab.component.scss']
})
export class DataLabComponent implements OnInit {

  panelOpenState = false;

  dataLaboratory = [];
  dataLaboratoryTitle = [];

  constructor(private glossaryService: GlossaryService) { }

  ngOnInit(): void {

    this.glossaryService.getGlossaryLaboratory().subscribe(data => {
      this.dataLaboratory = data.features;
      this.dataLaboratory.forEach(element => {
        this.dataLaboratoryTitle.push(element.properties.concept.slice(0, 1));
      });
    });

  }

}
