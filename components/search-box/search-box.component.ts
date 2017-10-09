import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent implements OnInit {

  @Output('search')
  searchTrigger = new EventEmitter();

  @Output('onClear')
  clearTrigger = new EventEmitter();

  @Input("thomas")
  placeHolder:string = "tapez ici";

  constructor() { }
/*
  MyFunc(input) {
    console.log(input.value);
  }*/
  onkeyup(e, input) {
    if(e.key == 'Enter') {
      console.log("recherche : " + input.value);
      this.searchTrigger.emit(input.value)
    }
    if(e.key == 'Escape') {
      input.value="";
      this.clearTrigger.emit()
    }
    console.log(e.key);
  }
  ngOnInit(){}
}
