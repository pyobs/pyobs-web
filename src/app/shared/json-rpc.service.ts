import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable, Subject, timer} from 'rxjs';
import {map, flatMap, retry} from 'rxjs/operators';
import {Status, StatusFactory} from './status-factory';

class JsonRpcResponse {
    public jsonrpc: string;
    public id: number;
    public result?: any;
    public error?: { message: string };

    constructor(json?: any) {
        if (json) {
            Object.assign(this, json);
        }
    }
}

class PytelModule {
    public module: string;
    public name: string;
    public interfaces: string[];

    constructor(json?: any) {
        if (json) {
            Object.assign(this, json);
        }
    }
}

@Injectable()
export class JsonRpcService {
    private next_caller_id = 1;
    private url = '/jsonrpc';
    private modules: PytelModule[] = [];
    private status = new Map<string, Map<string, BehaviorSubject<Status>>>();

    public  modules$ = new BehaviorSubject<PytelModule[]>([]);

    constructor(private http: HttpClient) {
        // create observable that watches the modules of the server
        timer(0, 50000)
            .pipe(flatMap(() => this.execute(null, '_get_modules', null)))
            .pipe(map(rawModules => rawModules.map(m => new PytelModule(m))))
            .subscribe(modules => this.setModules(modules));

        // create timer for status updates
        timer(0, 1000)
            .subscribe(() => this.getModulesStatus());
    }

    private setModules(modules: PytelModule[]) {
        this.modules = modules;
        this.modules$.next(modules);
    }

    public getStatus(module: string, iface: string): BehaviorSubject<Status> {
        if (!this.status.has(module)) {
            this.status.set(module, new Map<string, BehaviorSubject<Status>>());
        }
        if (!this.status.get(module).has(iface)) {
            this.status.get(module).set(iface, new BehaviorSubject<Status>(null));
        }
        return this.status.get(module).get(iface);
    }

    private getModulesStatus() {
        for (const mod of this.modules) {
            if (mod.interfaces.indexOf('IStatus') !== -1) {
                this.execute(mod.module, 'status', null)
                    .pipe(map(status => StatusFactory.fromObject(status)))
                    .subscribe(status => {
                        for (const iface in status) {
                            if (status.hasOwnProperty(iface)) {
                                this.getStatus(mod.module, iface).next(status[iface]);
                            }
                        }
                    });
            }
        }
    }

    public execute(module: string, command: string, params: any) {
        // build body
        const caller_id = this.next_caller_id++;
        const body = {
            jsonrpc: '2.0',
            id: caller_id,
            method: command,
            params: params
        };
        if (module) {
            body.method = module + '.' + command;
        }

        // do request
        return this.http.post(this.url, body)
            .pipe(retry(3))
            .pipe(map(json => new JsonRpcResponse(json)))
            .pipe(map(response => {
                // did we get an error?
                if (response.error != null) {
                    throw Observable.throw('An error occurred: ' + response.error.message);
                }

                // do we have a result?
                if (response.result == null) {
                    throw Observable.throw('No result found in response from server.');
                }

                // return result
                return response.result;
            }));
    }
}

@Injectable()
export class ITelescopeService {
    constructor(private jsonrpc: JsonRpcService) {
    }

    public init(module: string) {
        return this.jsonrpc.execute(module, 'init', null);
    }

    public park(module: string) {
        return this.jsonrpc.execute(module, 'park', null);
    }

    public track(module: string, ra: number, dec: number) {
        return this.jsonrpc.execute(module, 'track', {ra: ra, dec: dec});
    }

    public query_simbad(module: string, name: string) {
        return this.jsonrpc.execute('simbad', 'query_coordinates_by_name', {name: name});
    }
}

@Injectable()
export class ICameraService {
    constructor(private jsonrpc: JsonRpcService) {
    }

    public get_full_frame(module: string) {
        return this.jsonrpc.execute(module, 'get_full_frame', null);
    }

    public set_binning(module: string, x: number, y: number) {
        return this.jsonrpc.execute(module, 'set_binning', {'x': x, 'y': y});
    }

    public set_window(module: string, left: number, top: number, width: number, height: number) {
        return this.jsonrpc.execute(module, 'set_window', {'left': left, 'top': top, 'width': width, 'height': height});
    }

    public expose(module: string, exposure_time: number, image_type: string, count: number) {
        return this.jsonrpc.execute(module, 'expose',
            {'exposure_time': exposure_time, 'image_type': image_type, 'count': count});
    }

    public abort(module: string) {
        return this.jsonrpc.execute(module, 'abort', null);
    }

    public abort_sequence(module: string) {
        return this.jsonrpc.execute(module, 'abort_sequence', null);
    }
}

@Injectable()
export class IImageArchiveService {
    constructor(private jsonrpc: JsonRpcService) {
    }

    public list_images(module: string) {
        return this.jsonrpc.execute(module, 'list_images', null);
    }

    public get_image_headers(module: string, image_id: string) {
        return this.jsonrpc.execute(module, 'get_image_headers', {'image_id': image_id});
    }
}

@Injectable()
export class IFocuserService {
    constructor(private jsonrpc: JsonRpcService) {
    }

    public get_focus(module: string) {
        return this.jsonrpc.execute(module, 'get_focus', null);
    }

    public set_focus(module: string, focus: number) {
        return this.jsonrpc.execute(module, 'set_focus', {'focus': focus});
    }
}

@Injectable()
export class IFocusModelService {
    constructor(private jsonrpc: JsonRpcService) {
    }

    public set_optimal_focus(module: string) {
        return this.jsonrpc.execute(module, 'set_optimal_focus', null);
    }
}

@Injectable()
export class IFilterService {
    constructor(private jsonrpc: JsonRpcService) {
    }

    public list_filters(module: string) {
        return this.jsonrpc.execute(module, 'list_filters', null);
    }

    public get_filter(module: string) {
        return this.jsonrpc.execute(module, 'get_filter', null);
    }

    public set_filter(module: string, filter_name: string) {
        return this.jsonrpc.execute(module, 'set_filter', {'filter_name': filter_name});
    }
}

@Injectable()
export class IAutoFocusService {
    constructor(private jsonrpc: JsonRpcService) {
    }

    public auto_focus(module: string, count: number, step: number, guess: number, exposure_time: number) {
        return this.jsonrpc.execute(module, 'auto_focus', {
            'count': count, 'step': step, 'guess': guess,
            'exposure_time': exposure_time
        });
    }
}

@Injectable()
export class ICoolingService {
    constructor(private jsonrpc: JsonRpcService) {
    }

    public set_cooling(module: string, enabled: boolean, setpoint: number) {
        return this.jsonrpc.execute(module, 'set_cooling', {'enabled': enabled, 'setpoint': setpoint});
    }

}

export interface FindImagesParams {
    filename?: string;
    observation?: string;
    reduction_status?: number;
    date_start?: string;
    date_end?: string;
    offset?: number;
    limit?: number;
    include_details?: boolean;
}

@Injectable()
export class IImageDbService {
    constructor(private jsonrpc: JsonRpcService) {
    }

    public download_scheme(module: string) {
        return this.jsonrpc.execute(module, 'download_scheme', null);
    }

    public find_observations(module: string, name: string, night_start: string, night_end: string, include_details: boolean) {
        return this.jsonrpc.execute(module, 'find_observations',
            {'name': name, 'night_start': night_start, 'night_end': night_end, 'include_details': include_details});
    }

    public find_images(module: string, params: FindImagesParams) {
        return this.jsonrpc.execute(module, 'find_images', params);
    }

    public get_image_headers(module: string, filename: string) {
        return this.jsonrpc.execute(module, 'get_image_headers', {'filename': filename});
    }
}
