import {Component, Input, OnInit} from '@angular/core';
import {IImageDbService} from '../../shared/json-rpc.service';
import {forkJoin, Observable} from 'rxjs';
import {ActivatedRoute} from '@angular/router';
import {faImages} from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'pytel-list-observations',
    templateUrl: './list-observations.component.html',
    styleUrls: ['./list-observations.component.css']
})
export class ListObservationsComponent implements OnInit {
    // inputs
    @Input() module: string;
    @Input() query = {};
    @Input() night_start: string;
    @Input() night_end: string;
    @Input() itemsPerPage = 50;

    // font awesome icons
    faImages = faImages;

    count$: Observable<number>;
    observations$: Observable<any>;
    observations = [];
    currentPage = 0;

    constructor(private route: ActivatedRoute, private IImageDb: IImageDbService) {
    }

    ngOnInit() {
        // prepare params
        const params = this.query;
        params['include_details'] = true;

        // get image count
        this.count$ = this.IImageDb.count_observations(this.module, params);

        // initial update
        this.updateList();
    }

    pageChanged($event) {
        // set current page
        this.currentPage = $event.page - 1;

        // update list
        this.updateList();
    }

    updateList() {
        // reset list of observations, so that the list can show a load animation
        this.observations = null;

        // prepare params
        const params = this.query;
        params['include_details'] = true;
        params['offset'] = this.currentPage * this.itemsPerPage;
        params['limit'] = this.itemsPerPage;

        // load new list of observations
        this.IImageDb.find_observations(this.module, params).subscribe(data => this.observations = data);
    }

}
