import {Component, OnInit} from '@angular/core';
import {IImageDbService} from '../../shared/json-rpc.service';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
    selector: 'pytel-observation-details',
    templateUrl: './observation-details.component.html',
    styleUrls: ['./observation-details.component.css']
})
export class ObservationDetailsComponent implements OnInit {
    public module: string;
    public observation: string;
    public observation$: Observable<any>;
    public images$: Observable<any>;

    constructor(private route: ActivatedRoute, private IImageDb: IImageDbService) {
    }

    ngOnInit() {
        this.module = this.route.snapshot.params['module'];
        this.observation = this.route.snapshot.params['name'];
        this.observation$ = this.IImageDb.observation_details(this.module, [this.observation]);

        // get list of images and then details for all of them
        this.images$ = this.IImageDb.images_for_observation(this.module, this.observation)
            .pipe(map(data => this.IImageDb.image_details(this.module, data)));
    }

}
