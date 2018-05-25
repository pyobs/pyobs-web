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
    public collapseRaw = true;
    public collapseReduced = true;

    constructor(private route: ActivatedRoute, private IImageDb: IImageDbService) {
    }

    ngOnInit() {
        this.module = this.route.snapshot.params['module'];
        this.observation = this.route.snapshot.params['name'];
        this.observation$ = this.IImageDb.find_observations(this.module, this.observation, null, null, true);
    }

}
