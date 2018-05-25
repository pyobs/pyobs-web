import {Component, Input, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {IImageDbService} from '../../shared/json-rpc.service';

@Component({
    selector: 'pytel-list-images',
    templateUrl: './list-images.component.html',
    styleUrls: ['./list-images.component.css']
})
export class ListImagesComponent implements OnInit {
    @Input() module: string;
    @Input() observation: string;
    @Input() reduction_status: number;
    public count$: Observable<number>;
    public images$: Observable<any>;
    public itemsPerPage = 50;
    public currentPage = 1;

    constructor(private IImageDb: IImageDbService) {
    }

    ngOnInit() {
        // get image counts and images
        this.count$ = this.IImageDb.count_images(this.module,
            {observation: this.observation, reduction_status: this.reduction_status, include_details: true});
        this.pageChanged({page: this.currentPage, itemsPerPage: this.itemsPerPage});
    }

    public pageChanged($event) {
        this.currentPage = $event.page - 1;
        this.images$ = this.IImageDb.find_images(this.module,
            {
                observation: this.observation, reduction_status: this.reduction_status, include_details: true,
                offset: this.currentPage * this.itemsPerPage, limit: this.itemsPerPage
            });
    }

}
