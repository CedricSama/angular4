import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit {
  @Input('data')
  data:any[];
  @Input('fields')
  fields:any[];
  constructor() { }

  ngOnInit() {
  }

}
