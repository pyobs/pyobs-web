import {Component, Input, OnInit} from '@angular/core';
import {IImageDbService} from '../../shared/json-rpc.service';
import {forkJoin, Observable} from 'rxjs';
import {ActivatedRoute} from '@angular/router';
import {map, switchMap} from 'rxjs/operators';

@Component({
    selector: 'pytel-list-observations',
    templateUrl: './list-observations.component.html',
    styleUrls: ['./list-observations.component.css']
})
export class ListObservationsComponent implements OnInit {
    @Input() module: string;
    @Input() night_start: string;
    @Input() night_end: string;
    @Input() itemsPerPage = 50;

    public count$: Observable<number>;
    public observations$: Observable<any>;
    public observations = [];
    public currentPage = 0;

    constructor(private route: ActivatedRoute, private IImageDb: IImageDbService) {
    }

    ngOnInit() {
        // get image count
        this.count$ = this.IImageDb.count_observations(this.module, {
            night_start: this.night_start,
            night_end: this.night_end,
            include_details: true
        });

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
        // reset list of observations, so that the list can show a load animation
        this.observations = null;

        // load new list of observations
        this.IImageDb.find_observations(this.module, {
            night_start: this.night_start,
            night_end: this.night_end,
            include_details: true,
            offset: this.currentPage * this.itemsPerPage,
            limit: this.itemsPerPage
        }).subscribe(data => this.observations = data);
    }

}
