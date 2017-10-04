import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-hide-show',
  templateUrl: './hide-show.component.html',
  styleUrls: ['./hide-show.component.css']
})
export class HideShowComponent implements OnInit {

  @Input('hideOnSow')
  panelHidden:boolean=false;
  textBtn:string="Hide";
  constructor() { }

  ngOnInit() {
  }

}
