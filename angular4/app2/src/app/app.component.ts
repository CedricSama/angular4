import {Component} from '@angular/core';
import {SearchService} from "./services/search.service";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {


    constructor(public todosServices: SearchService){}
    onDivMouseover(sd) {
        console.log(sd);
    }
    findTodos(input){
        this.todosServices.findTodos(input.value).subscribe((jsondata) => {
            this.todosServices.todosList = jsondata;
        });
    }
    onSearchCleared(){
        this.todosServices.getAllTodos().subscribe((jsondata) => {
            this.todosServices.todosList = jsondata;
        });
    }
    SarchONlist(text){
        this.todosServices.findTodos(text.value).subscribe((jsondata) => {
            this.todosServices.todosList = jsondata;
        });
    }
}
