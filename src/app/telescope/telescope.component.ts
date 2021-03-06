import {Component, OnInit} from '@angular/core';
import {ITelescopeService, JsonRpcService} from '../shared/json-rpc.service';
import {Status} from '../shared/status-factory';
import {Observable, Subscription} from 'rxjs';
import {NgForm} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {CoordinatesPipe} from '../shared/coordinates.pipe';
import {AppConfigService} from '../app-config.service';

@Component({
    selector: 'pyobs-telescope',
    templateUrl: './telescope.component.html',
    styleUrls: ['./telescope.component.css']
})
export class TelescopeComponent implements OnInit {
    public module: string;
    public telescope_status$: Observable<Status>;
    public set_ra: string;
    public set_dec: string;
    private coordinates_query$: Subscription;

    constructor(private route: ActivatedRoute, private jsonrpc: JsonRpcService, private ITelescope: ITelescopeService,
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

                // subscribe to status
                this.telescope_status$ = this.jsonrpc.getStatus(this.module, 'ITelescope');
            }
        }
    }

    public init_telescope() {
        this.ITelescope.init(this.module).subscribe();
    }

    public park_telescope() {
        this.ITelescope.park(this.module).subscribe();
    }

    public track(form: NgForm) {
        const ra = CoordinatesPipe.sexagesimal2deg(form.value.ra, true);
        const dec = CoordinatesPipe.sexagesimal2deg(form.value.dec, false);
        this.ITelescope.track(this.module, ra, dec).subscribe();
    }

    public query_simbad(form: NgForm) {
        this.coordinates_query$ = this.ITelescope.query_simbad(this.module, form.value.object).subscribe(data => {
            this.set_ra = data[0].ra;
            this.set_dec = data[0].dec;
        });
    }

}
