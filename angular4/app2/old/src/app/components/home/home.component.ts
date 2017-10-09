import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    HomeData=[{
        a:1,
        b:2,
        c:3
    }];
    HomeFields=["a","b"];
    constructor() {
    }

    ngOnInit() {
    }

    searchInHome(text) {
        console.log("recherche lancé par HOME" + text.value);
    }

    onCancel(){
        console.log('recherche annulé')
    }
}







