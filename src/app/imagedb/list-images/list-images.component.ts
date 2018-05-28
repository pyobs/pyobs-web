import {Component, Input, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {IImageDbService} from '../../shared/json-rpc.service';
import {faImage, faDownload} from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'pytel-list-images',
    templateUrl: './list-images.component.html',
    styleUrls: ['./list-images.component.css']
})
export class ListImagesComponent implements OnInit {
    // inputs
    @Input() module: string;
    @Input() observation: string;
    @Input() reduction_status: number;
    @Input() itemsPerPage = 50;

    // font awesome icons
    faImage = faImage;
    faDownload = faDownload;

    // variables
    public count$: Observable<number>;
    public images$: Observable<any>;
    public images = [];
    public currentPage = 0;

    constructor(private IImageDb: IImageDbService) {
    }

    ngOnInit() {
        // get image count
        this.count$ = this.IImageDb.count_images(this.module,
            {observation: this.observation, reduction_status: this.reduction_status, include_details: true});

        // initial update
        this.updateList();
    }

    public pageChanged($event) {
        // set current page
        this.currentPage = $event.page - 1;

        // update list
        this.updateList();
    }

    public updateList() {
        // reset list of images, so that the list can show a load animation
        this.images = null;

        // load new list of images
        this.IImageDb.find_images(this.module, {
            observation: this.observation, reduction_status: this.reduction_status,
            include_details: true, offset: this.currentPage * this.itemsPerPage, limit: this.itemsPerPage
        }).subscribe(data => this.images = data);
    }

}
