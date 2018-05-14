import {Component, OnInit} from '@angular/core';
import {JsonRpcService} from '../shared/json-rpc.service';
import {Status} from '../shared/status-factory';
import {Observable} from 'rxjs';
import {NgForm} from '@angular/forms';

@Component({
    selector: 'pytel-telescope',
    templateUrl: './telescope.component.html',
    styleUrls: ['./telescope.component.css']
})
export class TelescopeComponent implements OnInit {
    public telescope_status$: Observable<Status>;
    public set_ra: string;
    public set_dec: string;

    constructor(private jsonrpc: JsonRpcService) {
    }

    ngOnInit() {
        this.telescope_status$ = this.jsonrpc.getStatus('telescope', 'ITelescope');
    }

    public init_telescope() {
        // this.ITelescope.init(this.module).subscribe();
    }

    public park_telescope() {
        // this.ITelescope.park(this.module).subscribe();
    }

    public track(form: NgForm) {
        // const ra = CoordinatesPipe.sexagesimal2deg(form.value.ra, true);
        // const dec = CoordinatesPipe.sexagesimal2deg(form.value.dec, false);
        // this.ITelescope.track(this.module, ra, dec).subscribe();
    }

    public query_simbad(form: NgForm) {
        /*
        this.coordinates_query$ = this.ITelescope.query_simbad(this.module, form.value.object).subscribe(data => {
            this.set_ra = data[0].ra;
            this.set_dec = data[0].dec;
        });
        */
    }

}
