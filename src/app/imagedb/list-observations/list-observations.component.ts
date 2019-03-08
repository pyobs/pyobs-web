import {Component, Input, OnChanges, OnInit, SimpleChange} from '@angular/core';
import {IImageDbService} from '../../shared/json-rpc.service';
import {forkJoin, Observable} from 'rxjs';
import {ActivatedRoute} from '@angular/router';
import {faImages, faDownload} from '@fortawesome/free-solid-svg-icons';
import {IconDefinition} from '@fortawesome/fontawesome-common-types';
import {TableColumn} from '../../helper/sortable-table-header/sortable-table-header.component';
import {environment} from '../../../environments/environment';
import {AppConfigService} from '../../app-config.service';

@Component({
    selector: 'pyobs-list-observations',
    templateUrl: './list-observations.component.html',
    styleUrls: ['./list-observations.component.css']
})
export class ListObservationsComponent implements OnInit, OnChanges {
    // inputs
    @Input() module: string;
    @Input() imagedb_path: string;
    @Input() query = {};
    @Input() night_start: string;
    @Input() night_end: string;
    @Input() itemsPerPage = 50;

    // font awesome icons
    faImages = faImages;
    faDownload = faDownload;

    // table columns
    table_columns: TableColumn[];

    // sorting
    orderBy = 'name';
    orderAsc = true;

    // variables
    count$: Observable<number>;
    observations$: Observable<any>;
    observations = [];
    currentPage = 0;
    env = environment;
    cfg = this.appConfig.getConfig();

    constructor(private route: ActivatedRoute, private IImageDb: IImageDbService, private appConfig: AppConfigService) {
    }

    ngOnInit() {
        this.table_columns = [
            {label: 'Observation', column: 'name', show: true},
            {label: 'Task', column: 'task_name', show: true},
            {label: 'Targets', column: null, show: true},
            {label: 'Start', column: 'start_time', show: true},
            {label: '#Img', column: null, show: true},
            {label: 'Telescope', column: null, show: true},
            {label: 'Download', column: null, show: true}
        ];
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
        this.count$ = this.IImageDb.count_observations(this.module, params);

        // reset page
        this.currentPage = 0;
    }

    updateList() {
        // reset list of observations, so that the list can show a load animation
        this.observations = null;

        // prepare params
        const params = this.query;
        params['include_details'] = true;
        params['offset'] = this.currentPage * this.itemsPerPage;
        params['limit'] = this.itemsPerPage;
        params['order_by'] = this.orderBy;
        params['order_asc'] = this.orderAsc;

        // load new list of observations
        this.IImageDb.find_observations(this.module, params).subscribe(data => this.observations = data);
    }

    orderChanged(event) {
        this.orderBy = event.by;
        this.orderAsc = event.asc;
        this.updateList();
    }

}
