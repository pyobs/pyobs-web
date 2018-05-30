import {Component, Input, OnChanges, OnInit, SimpleChange} from '@angular/core';
import {Observable} from 'rxjs';
import {IImageDbService} from '../../shared/json-rpc.service';
import {faImage, faDownload} from '@fortawesome/free-solid-svg-icons';
import {IconDefinition} from '@fortawesome/fontawesome-common-types';

@Component({
    selector: 'pytel-list-images',
    templateUrl: './list-images.component.html',
    styleUrls: ['./list-images.component.css']
})
export class ListImagesComponent implements OnInit, OnChanges {
    // inputs
    @Input() module: string;
    @Input() query = {};
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
        // initial update
        this.updateCount();
        this.updateList();
    }

    ngOnChanges(changes: {[propertyName: string]: SimpleChange}) {
        if (changes['query'] && this.query) {
            this.updateCount();
            this.updateList();
        }
    }

    pageChanged($event) {
        // set current page
        this.currentPage = $event.page - 1;

        // update list
        this.updateList();
    }

    updateCount() {
        // prepare params
        const params = this.query;
        params['include_details'] = true;

        // get image count
        this.count$ = this.IImageDb.count_images(this.module, params);

        // reset page
        this.currentPage = 0;
    }

    updateList() {
        // reset list of images, so that the list can show a load animation
        this.images = null;

        // prepare params
        const params = this.query;
        params['include_details'] = true;
        params['offset'] = this.currentPage * this.itemsPerPage;
        params['limit'] = this.itemsPerPage;

        // load new list of images
        this.IImageDb.find_images(this.module, params).subscribe(data => this.images = data);
    }

}
