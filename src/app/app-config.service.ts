import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../environments/environment';
import {DEFAULT_CONFIG} from 'tslint/lib/configuration';


function isObject(item) {
    return (item && typeof item === 'object' && !Array.isArray(item));
}


// deep merge objects
function mergeDeep(target, source) {
    const output = Object.assign({}, target);
    if (isObject(target) && isObject(source)) {
        Object.keys(source).forEach(key => {
            if (isObject(source[key])) {
                if (!(key in target)) {
                    Object.assign(output, { [key]: source[key] });
                } else {
                    output[key] = mergeDeep(target[key], source[key]);
                }
            } else {
                Object.assign(output, { [key]: source[key] });
            }
        });
    }
    return output;
}

// config interface
export interface AppConfig {
    navbar: boolean;
    fluid: boolean;
    download: {
        observation: {
            scheme: string;
            prefix: string;
            raw_suffix: string;
            reduced_suffix: string;
        }
    };
}

// default config
export const PYOBS_WEB_DEFAULT_CONFIG: AppConfig = {
    navbar: true,
    fluid: false,
    download: {
        observation: {
            scheme: 'observation',
            prefix: 'pyobs_',
            raw_suffix: '',
            reduced_suffix: '_reduced',
        }
    }
};


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
                // merge with default config
                this.config = mergeDeep(PYOBS_WEB_DEFAULT_CONFIG, data);
            });
    }

    getConfig() {
        return this.config;
    }
}
