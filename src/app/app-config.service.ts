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
        return this.http.get(environment.basePath + '/assets/config.json')
            .toPromise()
            .then(data => {
                this.config = data;
            });
    }

    getConfig() {
        return this.config;
    }
}
