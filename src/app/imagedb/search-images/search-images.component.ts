import {Component, OnInit} from '@angular/core';
import {
    faImages, faUser, faMoon, faCamera, faTasks, faFolderOpen, faGlobe, faClock, faFilter, faTh, faStar,
    faMapMarker, faCircle, faCalendar
} from '@fortawesome/free-solid-svg-icons';
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
    faClock = faClock;
    faFilter = faFilter;
    faTh = faTh;
    faStar = faStar;
    faMapMarker = faMapMarker;
    faCircle = faCircle;
    faCalendar = faCalendar;

    // list of telescopes and instruments
    telescopes$: Observable<any>;
    instruments$: Observable<any>;

    // ngModel variable for image type
    imageType = 'object';
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
            query['observation'] = form.value.observation;
        }
        if (form.value.date !== null) {
            const pipe = new DatePipe('en-US');
            query['date_start'] = pipe.transform(form.value.date[0], 'yyyy-MM-dd');
            query['date_end'] = pipe.transform(form.value.date[1], 'yyyy-MM-dd');
        }
        if (form.value.task.length > 0) {
            query['task'] = form.value.task;
        }

        // image type and reduction status
        query['image_type'] = form.value.imageType;
        query['reduction_status'] = form.value.reductionStatus === 'reduced' ? 1 : 0;

        // type dependent values
        if (form.value.binning.length > 0) {
            query['binning'] = form.value.binning;
        }
        if ((form.value.imageType === 'object' || form.value.imageType === 'flat') && form.value.filter.length > 0) {
            query['filter'] = form.value.filter;
        }
        if ((form.value.imageType === 'object' || form.value.imageType === 'dark') && typeof form.value.exp_time === 'number') {
            query['exp_time'] = form.value.exp_time;
        }
        if (form.value.imageType === 'object' && form.value.target.length > 0) {
            query['target_name'] = form.value.target;
        }
        if (form.value.imageType === 'object' && form.value.coordinates.length > 0) {
            query['coordinates'] = form.value.coordinates;
        }
        if (form.value.imageType === 'object' && form.value.radius.length > 0) {
            query['search_radius'] = form.value.radius;
        }

        // set it
        this.query = query;
    }

}
