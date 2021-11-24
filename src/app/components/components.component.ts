import { Component, OnInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-components',
    templateUrl: './components.component.html',
    styles: []
})

export class ComponentsComponent implements OnInit {

    constructor( private router: Router) {}


    ngOnInit() {
    }

    goTo(component: string){
        this.router.navigate([component])
    }

}
