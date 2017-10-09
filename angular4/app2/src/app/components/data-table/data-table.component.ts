import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
    selector: 'app-datatable',
    templateUrl: './data-table.component.html',
    styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit {

    @Input('data')
    dataVar: any[];
    @Input('fields')
    fields: any[];

    constructor() {
    }

    ngOnInit() {
    }

    GetFieldValie(row, field): string {
        let  d="";
        if (field.indexOf(".") == -1) {
            return row[field];
        } else {
            var arrayfields = field.split(".");

            console.log(row[arrayfields[0]][arrayfields[1]],row.user);
                return  row[arrayfields[0]][arrayfields[1]];

        }

    }

    @Output("deleteAction")
    deleteEventEmitter = new EventEmitter();

    @Output("editAction")
    editEventEmitter = new EventEmitter();

    editClicked(todo) {
        this.editEventEmitter.emit(todo);
    }

    deleteClicked(todo) {
        this.deleteEventEmitter.emit(todo);
    }
}
