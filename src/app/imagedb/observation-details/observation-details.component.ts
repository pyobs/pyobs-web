import {Component, OnInit} from '@angular/core';
import {FindImagesParams, IImageDbService} from '../../shared/json-rpc.service';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs';
import {faImages} from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'pytel-observation-details',
    templateUrl: './observation-details.component.html',
    styleUrls: ['./observation-details.component.css']
})
export class ObservationDetailsComponent implements OnInit {
    // font awesome icons
    faImages = faImages;

    // variables
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
        this.observation$ = this.IImageDb.find_observations(this.module, {name: this.observation, include_details: true});
    }

}
