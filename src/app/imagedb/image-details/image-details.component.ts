import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {IImageDbService} from '../../shared/json-rpc.service';
import {Observable} from 'rxjs/index';
import {map, share} from 'rxjs/operators';

@Component({
    selector: 'pytel-image-details',
    templateUrl: './image-details.component.html',
    styleUrls: ['./image-details.component.css']
})
export class ImageDetailsComponent implements OnInit {
    public module: string;
    public filename: string;
    public image$: Observable<any>;
    public fits_headers$: Observable<any>;

    constructor(private route: ActivatedRoute, private IImageDb: IImageDbService) {
    }

    ngOnInit() {
        // get module and night
        this.module = this.route.snapshot.params['module'];
        this.filename = this.route.snapshot.params['filename'];

        // get image details
        this.image$ = this.IImageDb.find_images(this.module, {filename: this.filename, include_details: true});
        this.image$.subscribe(img => {
            console.log(img);
            const download = img[0]['scheme'] + ':' + img[0]['filename'];
            this.fits_headers$ = this.IImageDb.get_image_headers(this.module, download).pipe(share());
            this.fits_headers$.subscribe(data => {
                console.log(data);
            });
        });
    }

}
