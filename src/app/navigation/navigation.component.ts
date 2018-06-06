import {Component, OnInit} from '@angular/core';
import {JsonRpcService} from '../shared/json-rpc.service';
import {Subscription} from 'rxjs';
import {ActivatedRoute} from '@angular/router';

export interface Module {
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
    show_navbar = false;

    constructor(private jsonrpc: JsonRpcService, private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.route.queryParams.subscribe(params => this.show_navbar = params.hasOwnProperty('navbar') ? (params.navbar === '1') : true);

        // get list of modules from server
        this.subscription = this.jsonrpc.modules$.subscribe(data => {
            // build list of modules
            this.modules = [];
            for (const mod in data) {
                if (data.hasOwnProperty(mod)) {
                    // get links
                    const links = [];
                    if (data[mod]['interfaces'].indexOf('ITelescope') !== -1) {
                        links.push({label: 'Telescope', link: [data[mod]['module'], 'telescope']});
                    }
                    if (data[mod]['interfaces'].indexOf('IFocuser') !== -1) {
                        links.push({label: 'Focus', link: [data[mod]['module'], 'focus']});
                    }
                    if (data[mod]['interfaces'].indexOf('IFilters') !== -1) {
                        links.push({label: 'Filter', link: [data[mod]['module'], 'filter']});
                    }
                    if (data[mod]['interfaces'].indexOf('ICamera') !== -1) {
                        links.push({label: 'Camera', link: [data[mod]['module'], 'camera']});
                    }
                    if (data[mod]['interfaces'].indexOf('IAutoFocus') !== -1) {
                        links.push({label: 'AutoFocus', link: [data[mod]['module'], 'autofocus']});
                    }
                    if (data[mod]['interfaces'].indexOf('ICooling') !== -1) {
                        links.push({label: 'Cooling', link: [data[mod]['module'], 'cooling']});
                    }
                    if (data[mod]['interfaces'].indexOf('IRoof') !== -1) {
                        links.push({label: 'Roof', link: [data[mod]['module'], 'roof']});
                    }
                    if (data[mod]['interfaces'].indexOf('IWeather') !== -1) {
                        links.push({label: 'Weather', link: [data[mod]['module'], 'weather']});
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
