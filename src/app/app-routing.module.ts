import {NgModule} from '@angular/core';
import {Routes, RouterModule, Router} from '@angular/router';
import {environment} from '../environments/environment';

import {CameraComponent} from './camera/camera.component';
import {CoolingComponent} from './cooling/cooling.component';
import {FilterComponent} from './filter/filter.component';
import {FocusComponent} from './focus/focus.component';
import {SearchImagesComponent} from './imagedb/search-images/search-images.component';
import {NightDetailsComponent} from './imagedb/night-details/night-details.component';
import {ObservationDetailsComponent} from './imagedb/observation-details/observation-details.component';
import {SearchObservationsComponent} from './imagedb/search-observations/search-observations.component';
import {ImageDetailsComponent} from './imagedb/image-details/image-details.component';
import {TelescopeComponent} from './telescope/telescope.component';
import {AppConfigService} from './app-config.service';


@NgModule({
    imports: [RouterModule.forRoot([], {useHash: environment.useHash})],
    exports: [RouterModule],
    entryComponents: [CameraComponent, SearchImagesComponent, TelescopeComponent]
})
export class AppRoutingModule {
    constructor(router: Router, appConfig: AppConfigService) {
        // wait for config to load
        appConfig.loadAppConfig().then(() => {
            // get config
            const route_config = router.config;

            // loop all configured routes
            const config = appConfig.getConfig();
            if ('routes' in config) {
                for (const route in config.routes) {
                    if (config.routes.hasOwnProperty(route)) {
                        // we just need a type
                        if (!config.routes[route].hasOwnProperty('type')) {
                            continue;
                        }
                        const type = config.routes[route].type;

                        // create route
                        if (type === 'camera') {
                            route_config.push({
                                path: route,
                                component: CameraComponent
                            });
                        } else if (type === 'imagedb') {
                            route_config.push({
                                path: route,
                                component: SearchImagesComponent,
                                children: [
                                    {
                                        path: 'night/:night',
                                        component: NightDetailsComponent
                                    },
                                    {
                                        path: 'observation',
                                        component: SearchObservationsComponent
                                    },
                                    {
                                        path: 'observation/:name',
                                        component: ObservationDetailsComponent
                                    },
                                    {
                                        path: 'image',
                                        component: SearchImagesComponent
                                    },
                                    {
                                        path: 'image/:filename',
                                        component: ImageDetailsComponent
                                    }
                                ]
                            });
                        } else if (type === 'telescope') {
                            route_config.push({
                                path: route,
                                component: TelescopeComponent
                            });
                        }
                    }
                }
            }

            // activate config
            router.resetConfig(route_config);
        });
    }
}
