import {Component, Input, OnInit} from '@angular/core';
import {Observable} from 'rxjs';

@Component({
    selector: 'pytel-list-images',
    templateUrl: './list-images.component.html',
    styleUrls: ['./list-images.component.css']
})
export class ListImagesComponent implements OnInit {
    @Input() images$: Observable<any>;

    constructor() {
    }

    ngOnInit() {
    }

}
