import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
    selector: 'app-serch-box',
    templateUrl: './serch-box.component.html',
    styleUrls: ['./serch-box.component.css']
})
export class SerchBoxComponent implements OnInit {

    @Input("placeholder")
    PH: string = "Tappez Votre Recherche ICI";

    @Output('onSearch')
    SearchTrigger = new EventEmitter();
    @Output('onClear')
    clearTrigger = new EventEmitter();

    constructor() {
    }

    ngOnInit() {
    }

    onkeyup(e, input) {
        if (e.key == "Enter") {
            //console.log("recherche " + input.value);
            this.SearchTrigger.emit(input);
        }
        if (e.key == "Escape") {
            input.value = "";
            this.clearTrigger.emit();
        }
        if (input.value == "") this.clearTrigger.emit();
    }


}
