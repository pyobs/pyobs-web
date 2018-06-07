import {Component, OnInit} from '@angular/core';
import {JsonRpcService, PytelModule} from '../shared/json-rpc.service';
import {Subscription} from 'rxjs';
import {ActivatedRoute} from '@angular/router';
import {environment} from '../../environments/environment';
import {AppConfigService} from '../app-config.service';
import {forEach} from '@angular/router/src/utils/collection';

export interface Link {
    label: string;
    link: string;
}

@Component({
    selector: 'pytel-navigation',
    templateUrl: './navigation.component.html',
    styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
    private subscription: Subscription;
    public links: Link[];
    show_navbar = false;

    constructor(private jsonrpc: JsonRpcService, private route: ActivatedRoute, private appConfig: AppConfigService) {
    }

    ngOnInit() {
        this.route.queryParams.subscribe(params => this.show_navbar = params.hasOwnProperty('navbar') ? (params.navbar === '1') : true);

        // get list of modules from server
        this.subscription = this.jsonrpc.modules$.subscribe(data => {
            // build list of modules
            this.links = [];

            // get module names
            const module_names = [];
            data.forEach(mod => {
                module_names.push(mod.module);
            });

            // loop all configured routes
            const config = this.appConfig.getConfig();
            if ('routes' in config) {
                for (const route in config.routes) {
                    if (config.routes.hasOwnProperty(route)) {
                        // we need a type and a list of modules
                        if (!config.routes[route].hasOwnProperty('type') || !config.routes[route].hasOwnProperty('modules')) {
                            continue;
                        }
                        const type = config.routes[route].type;
                        const modules = config.routes[route].modules;

                        // does modules exist?
                        let found = true;
                        for (const mod in modules) {
                            if (modules.hasOwnProperty(mod)) {
                                console.log(modules[mod]);
                                console.log(module_names);
                                if (module_names.indexOf(modules[mod]) === -1) {
                                    // could not find module
                                    found = false;
                                    break;
                                }
                            }
                        }
                        if (!found) {
                            // at least one module is not online
                            continue;
                        }

                        // get label
                        let label = type;
                        if ('label' in config.routes[route]) {
                            label = config.routes[route].label;
                        }

                        // add link to menu
                        this.links.push({label: label, link: route});
                    }
                }
            }

            /*
            Object.entries(obj).forEach(
                ([key, value]) => console.log(key, value)
            );
            */

            /*

            for (const mod in data) {
                if (data.hasOwnProperty(mod)) {
                    // get links
                    const links = [];
                    if (data[mod]['interfaces'].indexOf('ITelescope') !== -1) {
                        links.push({label: 'Telescope', link: ['telescope', data[mod]['module']]});
                    }
                    if (data[mod]['interfaces'].indexOf('IFocuser') !== -1) {
                        links.push({label: 'Focus', link: ['focus', data[mod]['module']]});
                    }
                    if (data[mod]['interfaces'].indexOf('IFilters') !== -1) {
                        links.push({label: 'Filter', link: ['filter', data[mod]['module']]});
                    }
                    if (data[mod]['interfaces'].indexOf('ICamera') !== -1) {
                        links.push({label: 'Camera', link: ['camera', data[mod]['module']]});
                    }
                    if (data[mod]['interfaces'].indexOf('IAutoFocus') !== -1) {
                        links.push({label: 'AutoFocus', link: ['autofocus', data[mod]['module']]});
                    }
                    if (data[mod]['interfaces'].indexOf('ICooling') !== -1) {
                        links.push({label: 'Cooling', link: ['cooling', data[mod]['module']]});
                    }
                    if (data[mod]['interfaces'].indexOf('IRoof') !== -1) {
                        links.push({label: 'Roof', link: ['roof', data[mod]['module']]});
                    }
                    if (data[mod]['interfaces'].indexOf('IWeather') !== -1) {
                        links.push({label: 'Weather', link: ['weather', data[mod]['module']]});
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
            }*/
        });
    }

}
