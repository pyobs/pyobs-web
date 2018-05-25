import {Component, OnInit} from '@angular/core';
import {IImageDbService} from '../../shared/json-rpc.service';
import {forkJoin, Observable} from 'rxjs';
import {ActivatedRoute} from '@angular/router';
import {map, switchMap} from 'rxjs/operators';

@Component({
    selector: 'pytel-list-observations',
    templateUrl: './list-observations.component.html',
    styleUrls: ['./list-observations.component.css']
})
export class ListObservationsComponent implements OnInit {
    public module: string;
    public night: string;
    public observations$: Observable<any>;

    constructor(private route: ActivatedRoute, private IImageDb: IImageDbService) {
    }

    ngOnInit() {
        // get module and night
        this.module = this.route.snapshot.params['module'];
        this.night = this.route.snapshot.params['night'];

        // get list of observations and then details for all of them
        this.observations$ = this.IImageDb.find_observations(this.module, null, this.night, this.night, true);
    }

}
