import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
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

const routes: Routes = [
    {
        path: ':module',
        children: [
            {
                path: 'camera',
                component: CameraComponent
            },
            {
                path: 'cooling',
                component: CoolingComponent
            },
            {
                path: 'filter',
                component: FilterComponent
            },
            {
                path: 'focus',
                component: FocusComponent
            },
            {
                path: 'imagedb',
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
            },
            {
                path: 'telescope',
                component: TelescopeComponent
            }
        ]
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {useHash: environment.useHash})],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
