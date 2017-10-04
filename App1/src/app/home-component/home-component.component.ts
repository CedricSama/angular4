import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})
export class HomeComponentComponent implements OnInit {

  DataFromHome=[];
  FieldsFromHome=[];
  // @Input('MyPlaceHolder')
  // MyPlaceHolder="Your search";
  constructor() { }

  ngOnInit() {
  }
  searchInHome(event){
    console.log("searchInHome:"+event);
  }
  clearField(event,input_home){
    console.log("clearField event:"+event);
    console.log("clearField input_home:"+input_home);
    input_home.value="";
  }
}
