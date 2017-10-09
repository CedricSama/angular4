import {Directive, ElementRef} from '@angular/core';
declare var jQuery:any;
@Directive({
  selector: '[hoverable]'
})
export class RowHoverDirective {

  constructor(el:ElementRef) {
    let row = el.nativeElement;
    row.addEventListener('mouseenter',()=>{
      jQuery(row).css({ "background-color": "rgba(0, 0, 0, 0.075)"})
    });
    row.addEventListener('mouseleave',()=>{
      jQuery(row).css({ "background-color": "inherit"})
    });
  }

}
