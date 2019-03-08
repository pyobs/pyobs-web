import {Component, OnInit} from '@angular/core';
import {JsonRpcService, PyObsModule} from '../shared/json-rpc.service';
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
    selector: 'pyobs-navigation',
    templateUrl: './navigation.component.html',
    styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
    private subscription: Subscription;
    public links: Link[];

    constructor(private jsonrpc: JsonRpcService, private route: ActivatedRoute, private appConfig: AppConfigService) {
    }

    ngOnInit() {
        // get list of modules from server
        this.subscription = this.jsonrpc.modules$.subscribe(data => {
            // build list of modules
            this.links = [];

            // get config
            const config = this.appConfig.getConfig();

            // get module names
            const module_names = [];
            data.forEach(mod => {
                module_names.push(mod.module);
            });

            // loop all configured routes
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
        });
    }
}
