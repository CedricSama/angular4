
import {Directive, ElementRef, Input} from "@angular/core";
@Directive({
    selector:"todo"
})
export class TagDirective{

    constructor(el:ElementRef){
        console.log(el);
    }

    @Input()
    id:number;
    @Input()
    title:string;
    @Input()
    body:string;

}
