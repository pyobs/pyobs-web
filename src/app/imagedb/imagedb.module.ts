import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {ImageDbRoutingModule} from './imagedb-routing.module';
import {ListObservationsComponent} from './list-observations/list-observations.component';
import { ObservationDetailsComponent } from './observation-details/observation-details.component';


@NgModule({
    imports: [
        CommonModule,
        HttpClientModule,
        FormsModule,
        ImageDbRoutingModule
    ],
    declarations: [ListObservationsComponent, ListObservationsComponent, ObservationDetailsComponent],
    providers: [],
    exports: [ListObservationsComponent]
})
export class ImageDbModule {
}
