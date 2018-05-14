import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders,} from '@angular/common/http';
import {BehaviorSubject, Observable, Subject, timer} from 'rxjs';
import {catchError, map, flatMap, retry} from 'rxjs/operators';
import {PytelSharedModule} from './pytel-shared.module';
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
    private status = new Map<string, Map<string, Subject<Status>>>();

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

    public getStatus(module: string, iface: string): Subject<Status> {
        if (!this.status.has(module)) {
            this.status.set(module, new Map<string, Subject<Status>>());
        }
        if (!this.status.get(module).has(iface)) {
            this.status.get(module).set(iface, new Subject<Status>());
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
