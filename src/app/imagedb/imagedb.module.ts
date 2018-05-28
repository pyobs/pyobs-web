import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {ImageDbRoutingModule} from './imagedb-routing.module';
import {ListObservationsComponent} from './list-observations/list-observations.component';
import {ObservationDetailsComponent} from './observation-details/observation-details.component';
import {BasenamePipe} from '../shared/basename.pipe';
import {ListImagesComponent} from './list-images/list-images.component';
import {CollapseModule} from 'ngx-bootstrap/collapse';
import {PaginationModule} from 'ngx-bootstrap/pagination';
import {ImageDetailsComponent} from './image-details/image-details.component';
import {SearchImagesComponent} from './search-images/search-images.component';
import {BsDatepickerModule} from 'ngx-bootstrap/datepicker';


@NgModule({
    imports: [
        CommonModule,
        HttpClientModule,
        FormsModule,
        ImageDbRoutingModule,
        CollapseModule.forRoot(),
        PaginationModule.forRoot(),
        BsDatepickerModule.forRoot()
    ],
    declarations: [ListObservationsComponent, ListObservationsComponent, ObservationDetailsComponent, BasenamePipe,
        ListImagesComponent, ImageDetailsComponent, SearchImagesComponent],
    providers: [],
    exports: [ListObservationsComponent]
})
export class ImageDbModule {
}
