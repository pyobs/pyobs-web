import {Component, OnInit} from '@angular/core';
import {faImages, faUser, faMoon, faCamera, faTasks, faFolderOpen, faGlobe} from '@fortawesome/free-solid-svg-icons';
import {IImageDbService} from '../../shared/json-rpc.service';
import {Observable} from 'rxjs/Rx';
import {ActivatedRoute} from '@angular/router';
import {NgForm} from '@angular/forms';

@Component({
    selector: 'pytel-search-observations',
    templateUrl: './search-observations.component.html',
    styleUrls: ['./search-observations.component.css']
})
export class SearchObservationsComponent implements OnInit {
    // active module
    public module: string;

    // font awesome icons
    faImages = faImages;
    faUser = faUser;
    faMoon = faMoon;
    faCamera = faCamera;
    faTasks = faTasks;
    faFolderOpen = faFolderOpen;
    faGlobe = faGlobe;

    // list of telescopes and instruments
    telescopes$: Observable<any>;
    instruments$: Observable<any>;

    constructor(private route: ActivatedRoute, private IImageDb: IImageDbService) {
    }

    ngOnInit() {
        // get current module
        this.module = this.route.snapshot.params['module'];

        // get list of telescopes and instruments
        this.telescopes$ = this.IImageDb.get_telescopes(this.module);
        this.instruments$ = this.IImageDb.get_instruments(this.module);
    }

    search(form: NgForm) {
        console.log(form.value);
    }

}
