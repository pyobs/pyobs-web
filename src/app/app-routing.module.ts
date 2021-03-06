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
import {ListObservationsComponent} from './imagedb/list-observations/list-observations.component';
import {TaskObservationsComponent} from './taskdb/task-observations/task-observations.component';


@NgModule({
    imports: [RouterModule.forRoot([], {useHash: environment.useHash})],
    exports: [RouterModule],
    entryComponents: [
        CameraComponent, SearchImagesComponent, TelescopeComponent,
        ImageDetailsComponent, ObservationDetailsComponent, ListObservationsComponent,
        SearchObservationsComponent, CoolingComponent, FilterComponent,
        FocusComponent, TaskObservationsComponent
    ]
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
                                    },
                                    {
                                        path: '',
                                        pathMatch: 'full',
                                        redirectTo: 'image'
                                    }
                                ]
                            });
                        } else if (type === 'taskdb') {
                            route_config.push({
                                path: route,
                                children: [
                                    {
                                        path: 'task/:name/observations',
                                        component: TaskObservationsComponent
                                    }
                                ]
                            });
                        } else if (type === 'telescope') {
                            route_config.push({
                                path: route,
                                component: TelescopeComponent
                            });
                        } else if (type === 'focus') {
                            route_config.push({
                                path: route,
                                component: FocusComponent
                            });
                        } else if (type === 'filter') {
                            route_config.push({
                                path: route,
                                component: FilterComponent
                            });
                        } else if (type === 'cooling') {
                            route_config.push({
                                path: route,
                                component: CoolingComponent
                            });
                        }
                    }
                }
            }

            // activate config
            console.log(route_config);
            router.resetConfig(route_config);
        });
    }
}
