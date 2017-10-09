import {Directive, ElementRef} from "@angular/core";
@Directive({
    selector:"[ayoub]"
})
export class Ayoub{
    constructor(elementRef:ElementRef){
        console.log(elementRef)
        elementRef.nativeElement.classList.add('bg-success');


        //elementRef.nativeElement.style.backgroundColor="yellow";
        //elementRef.nativeElement.style.padding="5px";
        //elementRef.nativeElement.style.border="1px dotted black";
    }

}