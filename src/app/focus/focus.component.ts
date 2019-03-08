import {Component, OnInit} from '@angular/core';
import {JsonRpcService} from '../shared/json-rpc.service';
import {Status} from '../shared/status-factory';
import {Observable} from 'rxjs';
import {NgForm} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {AppConfigService} from '../app-config.service';

@Component({
    selector: 'pyobs-focus',
    templateUrl: './focus.component.html',
    styleUrls: ['./focus.component.css']
})
export class FocusComponent implements OnInit {
    module: string;
    focus_status$: Observable<Status>;

    constructor(private route: ActivatedRoute, private jsonrpc: JsonRpcService, private appConfig: AppConfigService) {
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
                this.focus_status$ = this.jsonrpc.getStatus(this.module, 'IFocuser');
            }
        }
    }
}
