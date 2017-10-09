import {AfterViewInit, Component, ContentChildren, ElementRef, Input, OnInit, QueryList} from "@angular/core";
import {TagDirective} from "./tag";
@Component({
    selector: "todos",
    template: `
        <div class="row" *ngFor="let todo of todosList;let i=index" [ngClass]="getClass(i, todo)">
            <div class="col-sm-2 ">{{todo.id + " - " + i }}</div>
            <div class="col-sm-4 ">{{todo.title}}</div>
            <div class="col-sm-6 ">{{todo.body}}</div>
        </div> `,
    styles: [`
        .odd {
            background-color: #EEEEEE !important;
        }
        .bold {
            font-weight: bold;
        }`]
})


export class TagsComponent implements AfterViewInit {

    @ContentChildren(TagDirective)
    todosList: QueryList<TagDirective>;

    constructor(el: ElementRef) {

    }
    getClass2(i, todo){
        var isOdd:boolean=todo.id %2 ==0;
        var isBold:boolean=i %2 ==0;
        return {odd:isOdd, bold:isBold}
    }

    getClass(i, todo){
        var classes =todo.id %2 ==0?"odd":"";
        return classes +(i %2 ==0? " bold":"");
        //return classes;
    }
    isBold(todo){
        return todo.id %2 ==0;
    }
    isOdd(i){
        return i %2 ==0;

    }
    ngAfterViewInit() {
        console.log(this.todosList);
    }
}
