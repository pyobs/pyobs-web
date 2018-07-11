import {Component, OnInit} from '@angular/core';
import {IImageDbService} from '../../shared/json-rpc.service';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs';
import {faImages, faDownload, faTasks, faGlobe, faCalendar, faStar} from '@fortawesome/free-solid-svg-icons';
import {AppConfigService} from '../../app-config.service';
import {environment} from '../../../environments/environment';

@Component({
    selector: 'pytel-observation-details',
    templateUrl: './observation-details.component.html',
    styleUrls: ['./observation-details.component.css']
})
export class ObservationDetailsComponent implements OnInit {
    // font awesome icons
    faImages = faImages;
    faDownload = faDownload;
    faGlobe = faGlobe;
    faCalendar = faCalendar;
    faTasks = faTasks;
    faStar = faStar;

    // variables
    module: string;
    imagedb_path: string;
    observation: string;
    observation$: Observable<any>;
    collapseRaw = true;
    collapseReduced = true;
    env = environment;
    cfg = this.appConfig.getConfig();

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
