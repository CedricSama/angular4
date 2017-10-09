import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
    test: string = 'quelque chose';
    longeurChamp: number = 5;
    divContent = "contenu de la div";
    divVisible = false;
    dataarray = [
        {nom: "ayoub"},
        {nom: "pierre"}
    ]

    serachFromabout(i) {
        console.log("recherche lancé avec " + i.value);
    }

    constructor() {
    }

    ngOnInit() {
    }

}
