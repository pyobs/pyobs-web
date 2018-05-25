import {Component, OnInit} from '@angular/core';
import {FindImagesParams, IImageDbService} from '../../shared/json-rpc.service';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs';
import {share} from 'rxjs/operators';

@Component({
    selector: 'pytel-observation-details',
    templateUrl: './observation-details.component.html',
    styleUrls: ['./observation-details.component.css']
})
export class ObservationDetailsComponent implements OnInit {
    public module: string;
    public observation: string;
    public observation$: Observable<any>;
    public raw_count$: Observable<number>;
    public raw_images$: Observable<any>;
    public reduced_count$: Observable<number>;
    public reduced_images$: Observable<any>;
    public collapseRaw = true;
    public collapseReduced = true;

    constructor(private route: ActivatedRoute, private IImageDb: IImageDbService) {
    }

    ngOnInit() {
        this.module = this.route.snapshot.params['module'];
        this.observation = this.route.snapshot.params['name'];
        this.observation$ = this.IImageDb.find_observations(this.module, this.observation, null, null, true);

        // get image counts and images
        const raw = {observation: this.observation, reduction_status: 0, include_details: true};
        this.raw_count$ = this.IImageDb.count_images(this.module, raw);
        this.raw_images$ = this.IImageDb.find_images(this.module, raw);
        const reduced = {observation: this.observation, reduction_status: 1, include_details: true};
        this.reduced_count$ = this.IImageDb.count_images(this.module, reduced);
        this.reduced_images$ = this.IImageDb.find_images(this.module, reduced);
    }

}
