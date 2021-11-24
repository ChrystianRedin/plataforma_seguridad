import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-comparative-state',
  templateUrl: './comparative-state.component.html',
  styleUrls: ['./comparative-state.component.scss']
})
export class ComparativeStateComponent implements OnInit {

  @Input() divActiveChildDash = '';

  constructor() { }

  ngOnInit(): void {
    // console.log(this.divActiveChildDash);

  }

}
