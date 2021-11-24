import { Component, OnInit } from '@angular/core';
import { GlossaryService } from '../../shared/services/glossary.service';

@Component({
  selector: 'app-knowledge-tutorials-videos',
  templateUrl: './knowledge-tutorials-videos.component.html',
  styleUrls: ['./knowledge-tutorials-videos.component.scss']
})
export class KnowledgeTutorialsVideosComponent implements OnInit {

  panelOpenState = false;

  dataComparative = [];
  dataComparativeTitle = [];

  // constructor(private glossaryService: GlossaryService) { }

  ngOnInit(): void {

    // this.glossaryService.getGlossaryComparative().subscribe(data => {
    //   this.dataComparative = data.features;
    //   this.dataComparative.forEach(element => {
    //     this.dataComparativeTitle.push(element.properties.concept.slice(0, 1));
    //   });
    // });

  }

}
