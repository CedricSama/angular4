import {Component} from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    datafields=["title","body","description"];
    DonneesArray = [
        {title: "titre toto",body:"Contenu toto",description:"Description toto"},
        {title: "titre tutu",body:"Contenu tutu"}
    ];
    title = 'Application test';
    inputValue = "Tappez qqchose";
    Disabled: boolean = false;
    InputType = "date";
    backgroundColor = "red";
    contenuDiv = "Contenu de la div";

    isVisible = true;
    isCircle: boolean = true;

    onclick() {
        this.isVisible = !this.isVisible;
        console.log(this);
        this.backgroundColor = "yellow";
        this.contenuDiv = "Nouveau text sur fonction";
    }

    toggleForm() {
        this.isCircle = !this.isCircle;
    }

    FonctionDeRecherche(text) {
        console.log("Depuis appcomponent" + text)
    }

    FunctiondEscape() {
        console.log("escape")
    }
}
