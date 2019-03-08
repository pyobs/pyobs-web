import {Component, OnInit} from '@angular/core';
import {ICoolingService, JsonRpcService} from '../shared/json-rpc.service';
import {Status} from '../shared/status-factory';
import {Observable} from 'rxjs';
import {ActivatedRoute} from '@angular/router';
import {AppConfigService} from '../app-config.service';

@Component({
    selector: 'pyobs-cooling',
    templateUrl: './cooling.component.html',
    styleUrls: ['./cooling.component.css']
})
export class CoolingComponent implements OnInit {
    public module: string;
    public cooling_status$: Observable<Status>;
    public cooling = { 'setpoint': 0., 'enabled': false };

    constructor(private route: ActivatedRoute, private jsonrpc: JsonRpcService, private ICooling: ICoolingService,
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
                this.cooling_status$ = this.jsonrpc.getStatus(this.module, 'ICooling');
            }
        }
    }

    public set_cooling() {
        this.ICooling.set_cooling(this.module, this.cooling.enabled, this.cooling.setpoint).subscribe();
    }
}

