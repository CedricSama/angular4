import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-search-component',
  templateUrl: './search-component.component.html',
  styleUrls: ['./search-component.component.css']
})
export class SearchComponentComponent implements OnInit {
  // permet de récupérer la nouvelle valeur du place holder pour les input
  @Input("holder")
  Recherche:string="Votre recherche";

  //créer l'évènement onSearch
  @Output('onSearch')
  SearchTrigger=new EventEmitter();

  @Output('onClear')
  clearTrigger=new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  OnKeyUp(e,entree){
    if (e.key=="Enter"){
      console.log("votre recherche:",entree.value);
      // l'évènement SearchTrigger diffuse l'information
      this.SearchTrigger.emit(entree.value);
    }
    if (e.key=="Escape"){
      // console.log("")
      entree.value="";
      this.clearTrigger.emit();
    }
    // console.log(entree.value)
  }
}
