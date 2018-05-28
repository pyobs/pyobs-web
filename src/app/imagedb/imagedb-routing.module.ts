import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ListObservationsComponent} from './list-observations/list-observations.component';
import {ObservationDetailsComponent} from './observation-details/observation-details.component';
import {ImageDetailsComponent} from './image-details/image-details.component';
import {QueryDataComponent} from './query-data/query-data.component';
import {SearchObservationsComponent} from './search-observations/search-observations.component';
import {NightDetailsComponent} from './night-details/night-details.component';

const routes: Routes = [
    {
        path: ':module',
        component: QueryDataComponent
    },
    {
        path: ':module/night/:night',
        component: NightDetailsComponent
    },
    {
        path: ':module/observation',
        component: SearchObservationsComponent
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
