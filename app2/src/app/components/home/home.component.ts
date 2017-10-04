import {Component, OnInit} from '@angular/core';
import {SearchService} from '../../services/search.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    dataTodos: any[] = [
        {id: 10, titre: 'titre du todo', body: 'Contenu du todo'},
        {id: 110, titre: 'titre du todo', body: 'Contenu du todo'},
        {id: 1110, titre: 'titre du todo', body: 'Contenu du todo'}
    ];
    fieldsTodos: any[] = ['titre', 'body'];
    constructor(private todosServices: SearchService) {
    }

    ngOnInit() {
        this.todosServices.getAllTodos().subscribe((jsondata) => {
            this.dataTodos = jsondata;
        });
    }

    getTodos(input) {
        this.todosServices.findTodos(input.value).subscribe((jsondata) => {
            this.dataTodos = jsondata;
        });
    }
}
