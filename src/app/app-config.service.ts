import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class AppConfigService {
    private config;

    constructor(private http: HttpClient) {
    }

    loadAppConfig() {
        // fetch config
        return this.http.get(environment.basePath + '/assets/config.json')
            .toPromise()
            .then(data => {
                this.config = data;

                //
                // set missing parameters, i.e. set default config
                //

                // show the navbar
                if (!this.config.hasOwnProperty('navbar')) {
                    this.config.navbar = true;
                }

                // do not use a fluid layout
                if (!this.config.hasOwnProperty('fluid')) {
                    this.config.fluid = false;
                }
            });
    }

    getConfig() {
        return this.config;
    }
}
