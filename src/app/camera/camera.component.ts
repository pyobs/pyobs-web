import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
    selector: 'pytel-camera',
    templateUrl: './camera.component.html',
    styleUrls: ['./camera.component.css']
})
export class CameraComponent implements OnInit {
    public module: string;

    constructor(private route: ActivatedRoute) {

    }

    ngOnInit() {
        this.module = this.route.snapshot.params['module'];
    }

}
