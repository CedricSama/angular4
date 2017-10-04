import {Component, EventEmitter, Input, OnInit, Output} from "@angular/core";
@Component({
    selector: 'app-c',
    template: `
        <div (mouseenter)="declancheOver($event)">{{ccontent}}</div>`,
    styles: [`
        div {
            width: 100px;
            height: 100px;
            background-color: #00b3ee;
        }`]
})

export class CComponent implements OnInit {
    @Input('contenu')
    ccontent: string;

    @Output('onMouseOver')
    variable = new EventEmitter();

    constructor() {
    }

    declancheOver(e) {
        this.variable.emit(e);
    }

    ngOnInit() {

    }
}