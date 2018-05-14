import {Component, OnInit} from '@angular/core';
import {JsonRpcService} from '../shared/json-rpc.service';
import {Subscription} from 'rxjs';

interface Module {
    'module': string;
    'name': string;
    'links': string[];
}

@Component({
    selector: 'pytel-navigation',
    templateUrl: './navigation.component.html',
    styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
    private subscription: Subscription;
    public modules: Module[];

    constructor(private jsonrpc: JsonRpcService) {
    }

    ngOnInit() {
        // get list of modules from server
        this.subscription = this.jsonrpc.modules$.subscribe(data => {
            // build list of modules
            this.modules = [];
            for (const mod in data) {
                if (data.hasOwnProperty(mod)) {
                    // get links
                    const links = [];
                    if (data[mod]['interfaces'].indexOf('ITelescope') !== -1) {
                        links.push({label: 'Telescope', link: ['/telescope', data[mod]['module']]});
                    }
                    if (data[mod]['interfaces'].indexOf('IFocuser') !== -1) {
                        links.push({label: 'Focus', link: ['/focus', data[mod]['module']]});
                    }
                    if (data[mod]['interfaces'].indexOf('IFilters') !== -1) {
                        links.push({label: 'Filter', link: ['/filter', data[mod]['module']]});
                    }
                    if (data[mod]['interfaces'].indexOf('ICamera') !== -1) {
                        links.push({label: 'Camera', link: ['/camera', data[mod]['module']]});
                    }
                    if (data[mod]['interfaces'].indexOf('IAutoFocus') !== -1) {
                        links.push({label: 'AutoFocus', link: ['/autofocus', data[mod]['module']]});
                    }
                    if (data[mod]['interfaces'].indexOf('ICooling') !== -1) {
                        links.push({label: 'Cooling', link: ['/cooling', data[mod]['module']]});
                    }
                    if (data[mod]['interfaces'].indexOf('IRoof') !== -1) {
                        links.push({label: 'Roof', link: ['/roof', data[mod]['module']]});
                    }
                    if (data[mod]['interfaces'].indexOf('IWeather') !== -1) {
                        links.push({label: 'Weather', link: ['/weather', data[mod]['module']]});
                    }

                    // only add module, if we got links
                    if (links.length > 0) {
                        // get name
                        let name = mod;
                        if (data[mod]['name'] != null) {
                            name = data[mod]['name'];
                        }
                        // add it
                        this.modules.push({'module': mod, 'name': name, 'links': links});
                    }
                }
            }
        });
    }

}
