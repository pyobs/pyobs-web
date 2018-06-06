import {Component, Input, OnInit} from '@angular/core';
import {Observable, Subscription} from 'rxjs';
import {JsonRpcService} from '../../shared/json-rpc.service';
import {HttpClient} from '@angular/common/http';
import {CameraStatus, Status} from '../../shared/status-factory';
import {map} from 'rxjs/operators';
import {environment} from '../../../environments/environment';

@Component({
    selector: 'pytel-image-preview',
    templateUrl: './image-preview.component.html',
    styleUrls: ['./image-preview.component.css']
})
export class ImagePreviewComponent implements OnInit {
    public camera_status$: Observable<Status>;
    @Input() module: string;
    private subscription: Subscription;
    public image: string = null;
    public fits_headers$: Observable<any>;
    basePath = environment.basePath;

    constructor(private jsonrpc: JsonRpcService, private http: HttpClient) {

    }

    ngOnInit() {
        this.camera_status$ = this.jsonrpc.getStatus(this.module, 'ICamera');
        this.subscription = this.camera_status$.subscribe(status => this.updateFitsHeaders(status));

    }

    private updateFitsHeaders(status: Status) {
        if (status instanceof CameraStatus) {
            if (status.LastImage !== this.image) {
                this.image = status.LastImage;
                this.fits_headers$ = this.http.get(environment.basePath + '/headers/' + this.image)
                    .pipe(map(json => {
                        // convert dictionary to list of key/value/comment pairs
                        let tmp = [];
                        for (const key in json) {
                            if (json.hasOwnProperty(key)) {
                                tmp = tmp.concat([{
                                    'key': key,
                                    'value': json[key][0],
                                    'comment': json[key][1]
                                }]);
                            }
                        }
                        // return sorted
                        return tmp.sort((a, b) => a.key.localeCompare(b.key));
                    }));
            }
        }
    }

}
