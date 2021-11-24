import { Component, OnInit } from '@angular/core';
import { GlossaryService } from '../../shared/services/glossary.service';

@Component({
  selector: 'app-knowledge-faq',
  templateUrl: './knowledge-faq.component.html',
  styleUrls: ['./knowledge-faq.component.scss']
})
export class KnowledgeFaqComponent implements OnInit {

  // panelOpenState = false;

  // dataLaboratory = [];
  // dataLaboratoryTitle = [];

  // constructor(private glossaryService: GlossaryService) { }

  ngOnInit(): void {

    // this.glossaryService.getGlossaryLaboratory().subscribe(data => {
    //   this.dataLaboratory = data.features;
    //   this.dataLaboratory.forEach(element => {
    //     this.dataLaboratoryTitle.push(element.properties.concept.slice(0, 1));
    //   });
    // });

  }

}
