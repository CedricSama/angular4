import { Component, OnInit } from '@angular/core';
import {SearchService} from "../../services/search.service";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(public todoService:SearchService) { }
  fieldsTodos: any[] = ['id', 'titre','body'];

  ngOnInit() {
    this.todoService.getAllTodos().subscribe((data)=>{
      this.todoService.todosList=data;
      console.log(data)
    });
  }

}
