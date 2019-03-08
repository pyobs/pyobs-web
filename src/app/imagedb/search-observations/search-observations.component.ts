import {Component, OnInit} from '@angular/core';
import {faImages, faUser, faMoon, faCamera, faTasks, faFolderOpen, faGlobe} from '@fortawesome/free-solid-svg-icons';
import {IImageDbService} from '../../shared/json-rpc.service';
import {Observable} from 'rxjs';
import {ActivatedRoute} from '@angular/router';
import {NgForm} from '@angular/forms';
import {DatePipe} from '@angular/common';
import {IconDefinition} from '@fortawesome/fontawesome-common-types';
import {AppConfigService} from '../../app-config.service';

@Component({
    selector: 'pyobs-search-observations',
    templateUrl: './search-observations.component.html',
    styleUrls: ['./search-observations.component.css']
})
export class SearchObservationsComponent implements OnInit {
    // active module
    module: string;
    imagedb_path: string;
    query: Map<string, any> = null;

    // font awesome icons
    faImages = faImages;
    faUser = faUser;
    faMoon = faMoon;
    faCamera = faCamera;
    faTasks = faTasks;
    faFolderOpen = faFolderOpen;
    faGlobe = faGlobe;

    // list of telescopes and instruments
    telescopes$: Observable<any>;
    instruments$: Observable<any>;

    constructor(private route: ActivatedRoute, private IImageDb: IImageDbService, private appConfig: AppConfigService) {
    }

    ngOnInit() {
        // get first segment
        const seg = this.route.snapshot.root.firstChild.url.toString();
        this.imagedb_path = seg;

        // find in config
        if (seg in this.appConfig.getConfig().routes) {
            const cfg = this.appConfig.getConfig().routes[seg];
            if ('modules' in cfg) {
                // set configuration
                this.module = cfg['modules'][0];

                // get list of telescopes and instruments
                this.telescopes$ = this.IImageDb.get_telescopes(this.module);
                this.instruments$ = this.IImageDb.get_instruments(this.module);
            }
        }
    }

    search(form: NgForm) {
        // create new query map
        const query = new Map<string, any>();

        // check values
        if (form.value.telescope.length > 0) {
            query['telescope'] = form.value.telescope;
        }
        if (form.value.instrument.length > 0) {
            query['instrument'] = form.value.instrument;
        }
        if (form.value.observation.length > 0) {
            query['name'] = form.value.observation;
        }
        if (form.value.nights !== null) {
            const pipe = new DatePipe('en-US');
            query['night_start'] = pipe.transform(form.value.nights[0], 'yyyy-MM-dd');
            query['night_end'] = pipe.transform(form.value.nights[1], 'yyyy-MM-dd');
        }
        if (form.value.task.length > 0) {
            query['task'] = form.value.task;
        }

        // set it
        this.query = query;
    }

}
