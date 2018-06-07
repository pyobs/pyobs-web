import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {IImageDbService} from '../../shared/json-rpc.service';
import {Observable} from 'rxjs/index';
import {map, share} from 'rxjs/operators';
import {faImage, faDownload, faImages} from '@fortawesome/free-solid-svg-icons';
import {IconDefinition} from '@fortawesome/fontawesome-common-types';
import {AppConfigService} from '../../app-config.service';
import {environment} from '../../../environments/environment';

@Component({
    selector: 'pytel-image-details',
    templateUrl: './image-details.component.html',
    styleUrls: ['./image-details.component.css']
})
export class ImageDetailsComponent implements OnInit {
    // font awesome icons
    faImage = faImage;
    faDownload = faDownload;
    faImages = faImages;

    // variables
    module: string;
    filename: string;
    basePath = environment.basePath;
    image$: Observable<any>;
    scheme: string;
    fits_headers$: Observable<any>;

    constructor(private route: ActivatedRoute, private IImageDb: IImageDbService, private appConfig: AppConfigService) {
    }

    ngOnInit() {
        // get first segment
        const seg = this.route.snapshot.root.firstChild.url.toString();

        // find in config
        if (seg in this.appConfig.getConfig().routes) {
            const cfg = this.appConfig.getConfig().routes[seg];
            if ('modules' in cfg) {
                // set configuration
                this.module = cfg['modules'][0];
                this.filename = this.route.snapshot.params['filename'];

                // get download scheme
                this.IImageDb.download_scheme(this.module).subscribe(scheme => {
                    // store it
                    this.scheme = scheme;

                    // get image details
                    this.image$ = this.IImageDb.find_images(this.module, {filename: this.filename, include_details: true}).pipe(share());
                    this.image$.subscribe(img => {
                        this.fits_headers$ = this.IImageDb.get_image_headers(this.module, this.filename);
                    });
                });

            }
        }
    }

}
