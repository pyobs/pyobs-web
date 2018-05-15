import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ListObservationsComponent} from './list-observations/list-observations.component';
import {ObservationDetailsComponent} from './observation-details/observation-details.component';

const routes: Routes = [
    {
        path: ':module/night/:night',
        component: ListObservationsComponent
    },
    {
        path: ':module/observation/:name',
        component: ObservationDetailsComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ImageDbRoutingModule {
}
