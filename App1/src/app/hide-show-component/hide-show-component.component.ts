import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hide-show-component',
  templateUrl: './hide-show-component.component.html',
  styleUrls: ['./hide-show-component.component.css']
})
export class HideShowComponentComponent implements OnInit {
  TxtButton:string="Hide";
  Panelhidden:boolean=false;
  constructor() { }

  ngOnInit() {
  }

}
