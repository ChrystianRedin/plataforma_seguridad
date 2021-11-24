import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-data-lab',
  templateUrl: './data-lab.component.html',
  styleUrls: ['./data-lab.component.scss']
})
export class DataLabMethodologicalComponent implements OnInit {

  @Input() divActiveChildDash = '';

  constructor() { }

  ngOnInit(): void {
    // console.log(this.divActiveChildDash);

  }

}
