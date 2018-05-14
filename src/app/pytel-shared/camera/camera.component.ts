import {Component, OnInit} from '@angular/core';
import {JsonRpcService} from '../json-rpc.service';

@Component({
    selector: 'pytel-camera',
    templateUrl: './camera.component.html',
    styleUrls: ['./camera.component.css']
})
export class CameraComponent implements OnInit {

    constructor(jsonrpc: JsonRpcService) {

    }

    ngOnInit() {
    }

}
