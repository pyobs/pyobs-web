import {Component, OnInit} from '@angular/core';
import {IFilterService, JsonRpcService} from '../shared/json-rpc.service';
import {Status} from '../shared/status-factory';
import {Observable} from 'rxjs';
import {NgForm} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';

@Component({
    selector: 'pytel-filter',
    templateUrl: './filter.component.html',
    styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
    public module: string;
    public filter_status$: Observable<Status>;
    public filters$: Observable<any>;

    constructor(private route: ActivatedRoute, private jsonrpc: JsonRpcService, private IFilter: IFilterService) {
    }

    ngOnInit() {
        this.module = this.route.snapshot.params['module'];
        this.filter_status$ = this.jsonrpc.getStatus('telescope', 'IFilter');

        // get list of filters
        this.filters$ = this.IFilter.list_filters(this.module);
    }

    public set_filter(filter: string) {
        this.IFilter.set_filter(this.module, filter).subscribe();
    }
}
