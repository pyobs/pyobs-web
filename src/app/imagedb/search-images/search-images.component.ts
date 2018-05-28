import {Component, OnInit} from '@angular/core';
import {faImages, faUser, faMoon, faCamera, faTasks, faFolderOpen, faGlobe} from '@fortawesome/free-solid-svg-icons';
import {IImageDbService} from '../../shared/json-rpc.service';
import {Observable} from 'rxjs';
import {ActivatedRoute} from '@angular/router';
import {NgForm} from '@angular/forms';
import {DatePipe} from '@angular/common';

@Component({
    selector: 'pytel-search-images',
    templateUrl: './search-images.component.html',
    styleUrls: ['./search-images.component.css']
})
export class SearchImagesComponent implements OnInit {
    // active module
    module: string;
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

    // ngModel variable for image type
    imageType = 'light';
    reductionStatus = 'reduced';

    constructor(private route: ActivatedRoute, private IImageDb: IImageDbService) {
    }

    ngOnInit() {
        // get current module
        this.module = this.route.snapshot.params['module'];

        // get list of telescopes and instruments
        this.telescopes$ = this.IImageDb.get_telescopes(this.module);
        this.instruments$ = this.IImageDb.get_instruments(this.module);
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
