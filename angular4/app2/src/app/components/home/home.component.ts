import {Component, OnInit} from '@angular/core';
import {SearchService} from '../../services/search.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    Editing:boolean=false;
    dataTodos: any[] = [
        {id: 10, titre: 'titre du todo', body: 'Contenu du todo'},
        {id: 110, titre: 'titre du todo', body: 'Contenu du todo'},
        {id: 1110, titre: 'titre du todo', body: 'Contenu du todo'}
    ];
    fieldsTodos: any[] = ['id', 'titre','body'];
    curentTodo={};

    formFields = [
        {
            tag:'',
            value: "",
            placeholder: "Id",
            maxLength: 1000,
            type: "hidden",
            name:"id"

        },{
            tag:'',
            value: "",
            placeholder: "Titre",
            maxLength: 50,
            type: "text",
            name:"titre"

        },
        {
            tag:   "textarea",
            value: "",
            placeholder: "Corps",
            maxLength: 255,
            type: "text",
            name:"body"
        }
    ];


    constructor(public todosServices: SearchService) {
    }

    ngOnInit() {
        this.todosServices.getAllTodos().subscribe((jsondata) => {
            this.todosServices.todosList = jsondata;
        });
    }

    getTodos(input) {
        this.todosServices.findTodos(input.value).subscribe((jsondata) => {
            this.todosServices.todosList = jsondata;
        });
    }

    functionEditTodo(todo) {
        console.log('From home delete detected For : ', todo);
        this.Editing=!this.Editing;
        this.curentTodo = todo;
    }

    functionDeleteTodo(todo) {
        this.todosServices.delete(todo).subscribe((data) => {
            console.log(data)
            this.todosServices.todosList =  this.todosServices.todosList.filter(function(elem){
                return elem.id != todo.id;
            });
        });
        console.log('From home delete detected For : ', todo);
    }
    openEmptyForm(){
        this.curentTodo={};
        this.Editing=true;
    }
    submitFormData(todo){
        if(todo.id==undefined){
            this.todosServices.add(todo).subscribe(data=>{
                console.log(data);
                this.todosServices.todosList.push(data);
                this.Editing=!this.Editing;
            });
        }else{
            this.todosServices.update(todo).subscribe(data=>{
                console.log(data);
                this.Editing=!this.Editing;
            });
        }

        //console.log('C\'est le submit de Cédric : ', todo);
    }
}
