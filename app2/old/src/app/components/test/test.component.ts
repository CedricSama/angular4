import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-div',
    template: `<div [ngStyle]="{width:v2+'px'}"></div>`,
    styles: [`
        div{
            width: 100px;
            height: 100px;
            background-color: #2aabd2;
        }
    `]
})
export class TestComponent implements OnInit {


    @Input('V')
    mavariable:string;

    @Input("taille")
    v2:number;

    constructor() {
    }

    ngOnInit() {
        console.log(this.mavariable,this.v2);
    }


}
