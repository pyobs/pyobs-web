import {Component, OnInit} from '@angular/core';
import {ICoolingService, JsonRpcService} from '../shared/json-rpc.service';
import {Status} from '../shared/status-factory';
import {Observable} from 'rxjs';
import {ActivatedRoute} from '@angular/router';

@Component({
    selector: 'pytel-cooling',
    templateUrl: './cooling.component.html',
    styleUrls: ['./cooling.component.css']
})
export class CoolingComponent implements OnInit {
    public module: string;
    public cooling_status$: Observable<Status>;
    public cooling = { 'setpoint': 0., 'enabled': false };

    constructor(private route: ActivatedRoute, private jsonrpc: JsonRpcService, private ICooling: ICoolingService) {
    }

    ngOnInit() {
        this.module = this.route.snapshot.params['module'];
        this.cooling_status$ = this.jsonrpc.getStatus(this.module, 'ICooling');
    }

    public set_cooling() {
        this.ICooling.set_cooling(this.module, this.cooling.enabled, this.cooling.setpoint).subscribe();
    }
}

