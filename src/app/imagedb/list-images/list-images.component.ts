import {Component, Input, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {IImageDbService} from '../../shared/json-rpc.service';

@Component({
    selector: 'pytel-list-images',
    templateUrl: './list-images.component.html',
    styleUrls: ['./list-images.component.css']
})
export class ListImagesComponent implements OnInit {
    @Input() module: string;
    @Input() observation: string;
    @Input() reduction_status: number;
    public count$: Observable<number>;
    public images$: Observable<any>;

    constructor(private IImageDb: IImageDbService) {
    }

    ngOnInit() {
        // get image counts and images
        const params = {observation: this.observation, reduction_status: this.reduction_status, include_details: true};
        this.count$ = this.IImageDb.count_images(this.module, params);
        this.images$ = this.IImageDb.find_images(this.module, params);
    }

}
