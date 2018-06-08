import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChange} from '@angular/core';

export interface TableColumn {
    label: string;
    column: string;
    show: boolean;
}

export interface OrderChange {
    by: string;
    asc: boolean;
}

@Component({
    selector: '[pytel-sortable-table-header]',
    templateUrl: './sortable-table-header.component.html',
    styleUrls: ['./sortable-table-header.component.css']
})
export class SortableTableHeaderComponent implements OnInit, OnChanges {
    @Input() columns: TableColumn[];
    @Output() columnsChange = new EventEmitter<TableColumn[]>();
    @Input() orderBy: string;
    @Input() orderAsc: boolean;
    @Output() orderChange = new EventEmitter<OrderChange>();

    constructor() {
        this.orderBy = null;
        this.orderAsc = true;
    }

    ngOnInit() {
    }

    ngOnChanges(changes: {[propertyName: string]: SimpleChange}) {
    }

    changeSort(column: string) {
        // not sortable
        if (column === null) {
            return;
        }

        // find column
        let col = null;
        for (let i = 0; i < this.columns.length; i++) {
            if (this.columns[i].column === column) {
                col = this.columns[i];
            }
        }

        // none found?
        if (col == null) {
            return;
        }

        // change column and order
        if (column === this.orderBy) {
            this.orderAsc = !this.orderAsc;
        } else {
            this.orderBy = column;
            this.orderAsc = true;
        }
        this.orderChange.emit({by: this.orderBy, asc: this.orderAsc});
    }
}
