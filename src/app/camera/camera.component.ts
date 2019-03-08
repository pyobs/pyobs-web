import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {environment} from '../../environments/environment';
import {AppConfigService} from '../app-config.service';

@Component({
    selector: 'pyobs-camera',
    templateUrl: './camera.component.html',
    styleUrls: ['./camera.component.css']
})
export class CameraComponent implements OnInit {
    module: string;

    constructor(private route: ActivatedRoute, private appConfig: AppConfigService) {

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
            }
        }
    }
}
