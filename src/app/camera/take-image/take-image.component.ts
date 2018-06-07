import {Component, Input, OnChanges, OnDestroy, OnInit, SimpleChange} from '@angular/core';
import {ICameraService, JsonRpcService} from '../../shared/json-rpc.service';
import {Observable, Subscription} from 'rxjs';
import {NgForm} from '@angular/forms';
import {Status} from '../../shared/status-factory';


@Component({
    selector: 'pytel-take-image',
    templateUrl: './take-image.component.html',
    styleUrls: ['./take-image.component.css']
})
export class TakeImageComponent implements OnChanges {
    @Input() module: string;
    camera_status$: Observable<Status>;
    settings = {
        image_type: 'object',
        binning: 1,
        window: {left: null, top: null, width: null, height: null},
        exposure_time: 1000,
        count: 1
    };
    sequence_aborted = false;
    image_aborted = false;

    constructor(private jsonrpc: JsonRpcService, private ICamera: ICameraService) {
    }

    ngOnChanges(changes: {[propertyName: string]: SimpleChange}) {
        if (changes['module'] && this.module) {
            // subscribe to camera status
            this.camera_status$ = this.jsonrpc.getStatus(this.module, 'ICamera');

            // get full frame
            this.set_full_frame();

        }
    }

    public set_full_frame() {
        // set full frame
        this.ICamera.get_full_frame(this.module).subscribe(data => {
            // calculate window for binning
            this.settings.window = {
                left: data.left,
                top: data.top,
                width: Math.floor(data.width / this.settings.binning),
                height: Math.floor(data.height / this.settings.binning)
            };
        });

        // don't submit form
        return false;
    }

    public expose(form: NgForm) {
        // set binning
        const f = form.value;
        const binning = Number.parseInt(f.binning);
        this.ICamera.set_binning(this.module, binning, binning).subscribe(() => {
            // set window
            this.ICamera.set_window(this.module, f.left, f.top, f.width * binning, f.height * binning)
                .subscribe(() => {
                    // start exposures
                    this.ICamera.expose(this.module, f.exposure_time, f.image_type, f.count).subscribe();
                });
        });
    }

    public abort_exposure() {
        // abort current exposure
        this.ICamera.abort(this.module).subscribe();
        this.image_aborted = true;
        this.sequence_aborted = true;
    }

    public abort_after_exposure() {
        // abort current exposure
        this.ICamera.abort_sequence(this.module).subscribe();
        this.sequence_aborted = true;
    }
}
