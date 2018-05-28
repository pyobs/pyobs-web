import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ListObservationsComponent} from './list-observations/list-observations.component';
import {ObservationDetailsComponent} from './observation-details/observation-details.component';
import {ImageDetailsComponent} from './image-details/image-details.component';
import {SearchImagesComponent} from './search-images/search-images.component';

const routes: Routes = [
    {
        path: ':module',
        component: SearchImagesComponent
    },
    {
        path: ':module/night/:night',
        component: ListObservationsComponent
    },
    {
        path: ':module/observation/:name',
        component: ObservationDetailsComponent
    },
    {
        path: ':module/image/:filename',
        component: ImageDetailsComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ImageDbRoutingModule {
}
