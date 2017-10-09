import {Component, EventEmitter, Input, OnInit, Output} from "@angular/core";
@Component({
    selector: 'app-cs',
    template: `
        <nav>
        <app-c (onMouseOver)="declancheOver($event)" >{{ccontent}}</app-c>
            <ul>
                <li></li>
            </ul>
        </nav>`,
    styles:[]
})

export class CComponent implements OnInit {
    @Input('contenu')
    ccontent: string;

    @Output('CSMOUSEOVER')
    variable = new EventEmitter();

    constructor() {
    }

    declancheOver(e) {
        this.variable.emit(e);
    }

    ngOnInit() {

    }
}