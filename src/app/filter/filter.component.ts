import {Component, OnInit} from '@angular/core';
import {IFilterService, JsonRpcService} from '../shared/json-rpc.service';
import {Status} from '../shared/status-factory';
import {Observable} from 'rxjs';
import {NgForm} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {AppConfigService} from '../app-config.service';

@Component({
    selector: 'pytel-filter',
    templateUrl: './filter.component.html',
    styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
    module: string;
    filter_status$: Observable<Status>;
    filters$: Observable<any>;

    constructor(private route: ActivatedRoute, private jsonrpc: JsonRpcService, private IFilter: IFilterService,
                private appConfig: AppConfigService) {
    }

    ngOnInit() {
        // get first segment
        const seg = this.route.snapshot.root.firstChild.url.toString();

        // find in config
        if (seg in this.appConfig.getConfig().routes) {
            const cfg = this.appConfig.getConfig().routes[seg];
            if ('modules' in cfg) {
                // set configuration
                this.module = cfg['modules'][0];

                // get list of filters
                this.filters$ = this.IFilter.list_filters(this.module);
                this.filter_status$ = this.jsonrpc.getStatus(this.module, 'IFilter');
            }
        }
    }

    public set_filter(filter: string) {
        this.IFilter.set_filter(this.module, filter).subscribe();
    }
}
