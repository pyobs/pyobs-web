import {Component, OnInit} from '@angular/core';
import {JsonRpcService} from '../shared/json-rpc.service';
import {Status} from '../shared/status-factory';
import {Observable} from 'rxjs';
import {NgForm} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';

@Component({
    selector: 'pytel-focus',
    templateUrl: './focus.component.html',
    styleUrls: ['./focus.component.css']
})
export class FocusComponent implements OnInit {
    module: string;
    focus_status$: Observable<Status>;

    constructor(private route: ActivatedRoute, private jsonrpc: JsonRpcService) {
    }

    ngOnInit() {
        this.module = this.route.snapshot.params['module'];
        this.focus_status$ = this.jsonrpc.getStatus(this.module, 'IFocuser');
    }
}
