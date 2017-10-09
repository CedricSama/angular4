import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-datatable',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit {

  @Input('data')
  data:any = [];
  @Input('fields')
  fields:any = [];

  constructor() { }

  ngOnInit() {
  }

  add(a,b) {
    return a+b;
  }

}
