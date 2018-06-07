import {Component, OnInit} from '@angular/core';
import {FindImagesParams, IImageDbService} from '../../shared/json-rpc.service';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs';
import {faImages} from '@fortawesome/free-solid-svg-icons';
import {IconDefinition} from '@fortawesome/fontawesome-common-types';
import {share} from 'rxjs/operators';
import {AppConfigService} from '../../app-config.service';

@Component({
    selector: 'pytel-observation-details',
    templateUrl: './observation-details.component.html',
    styleUrls: ['./observation-details.component.css']
})
export class ObservationDetailsComponent implements OnInit {
    // font awesome icons
    faImages = faImages;

    // variables
    module: string;
    imagedb_path: string;
    observation: string;
    observation$: Observable<any>;
    collapseRaw = true;
    collapseReduced = true;

    constructor(private route: ActivatedRoute, private IImageDb: IImageDbService, private appConfig: AppConfigService) {
    }

    ngOnInit() {
        const seg = this.route.snapshot.root.firstChild.url.toString();
        this.imagedb_path = seg;

        // find in config
        if (seg in this.appConfig.getConfig().routes) {
            const cfg = this.appConfig.getConfig().routes[seg];
            if ('modules' in cfg) {
                // set configuration
                this.module = cfg['modules'][0];

                // get details
                this.observation = this.route.snapshot.params['name'];
                this.observation$ = this.IImageDb.find_observations(this.module, {name: this.observation, include_details: true});
            }
        }
    }

}
