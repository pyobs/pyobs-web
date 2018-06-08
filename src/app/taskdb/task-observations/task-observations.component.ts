import {Component, OnInit} from '@angular/core';
import {FindObservationsParams, IImageDbService} from '../../shared/json-rpc.service';
import {ActivatedRoute} from '@angular/router';
import {AppConfigService} from '../../app-config.service';
import {Observable} from 'rxjs/index';

@Component({
    selector: 'pytel-task-observations',
    templateUrl: './task-observations.component.html',
    styleUrls: ['./task-observations.component.css']
})
export class TaskObservationsComponent implements OnInit {
    // active module
    module: string;
    imagedb_module: string;
    imagedb_path: string;
    query: FindObservationsParams;
    task: string;

    constructor(private route: ActivatedRoute, private IImageDb: IImageDbService, private appConfig: AppConfigService) {
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
                this.imagedb_module = cfg['modules'][0];
                this.imagedb_path = cfg['imagedb'];

                // get details
                this.task = this.route.snapshot.params['name'];

                // set query
                this.query = {'task': 'stella.IAG_2014_0001-68'};
            }
        }
    }

}
