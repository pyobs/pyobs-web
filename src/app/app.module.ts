import {BrowserModule} from '@angular/platform-browser';
import {APP_INITIALIZER, NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NavigationComponent} from './navigation/navigation.component';
import {
    ICameraService,
    ICoolingService,
    IFilterService,
    IFocuserService, IImageDbService,
    ITelescopeService,
    JsonRpcService
} from './shared/json-rpc.service';
import {CoordinatesPipe} from './shared/coordinates.pipe';
import {CameraComponent} from './camera/camera.component';
import {ImagePreviewComponent} from './camera/image-preview/image-preview.component';
import {TakeImageComponent} from './camera/take-image/take-image.component';
import {FormsModule} from '@angular/forms';
import {ButtonsModule, ProgressbarModule} from 'ngx-bootstrap';
import {CoolingComponent} from './cooling/cooling.component';
import {MapToIterablePipe} from './shared/map-to-iterable.pipe';
import {FilterComponent} from './filter/filter.component';
import {FocusComponent} from './focus/focus.component';
import {BsDatepickerModule} from 'ngx-bootstrap/datepicker';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {PaginationModule} from 'ngx-bootstrap/pagination';
import {CollapseModule} from 'ngx-bootstrap/collapse';
import {BasenamePipe} from './shared/basename.pipe';
import {NightDetailsComponent} from './imagedb/night-details/night-details.component';
import {ListObservationsComponent} from './imagedb/list-observations/list-observations.component';
import {ListImagesComponent} from './imagedb/list-images/list-images.component';
import {SearchImagesComponent} from './imagedb/search-images/search-images.component';
import {ObservationDetailsComponent} from './imagedb/observation-details/observation-details.component';
import {SearchObservationsComponent} from './imagedb/search-observations/search-observations.component';
import {ImageDetailsComponent} from './imagedb/image-details/image-details.component';
import {TelescopeComponent} from './telescope/telescope.component';
import {AppConfigService} from './app-config.service';
import {TaskObservationsComponent} from './taskdb/task-observations/task-observations.component';
import {SortableTableHeaderComponent} from './helper/sortable-table-header/sortable-table-header.component';

const appInitializerFn = (config: AppConfigService) => {
    return () => {
        return config.loadAppConfig();
    };
};

@NgModule({
    declarations: [
        AppComponent,
        CoordinatesPipe,
        MapToIterablePipe,
        NavigationComponent,
        CameraComponent, ImagePreviewComponent, TakeImageComponent,
        CoolingComponent,
        FilterComponent,
        FocusComponent,
        ListObservationsComponent, ListObservationsComponent, ObservationDetailsComponent, BasenamePipe,
        ListImagesComponent, ImageDetailsComponent, SearchObservationsComponent, NightDetailsComponent, SearchImagesComponent,
        TelescopeComponent,
        TaskObservationsComponent,
        SortableTableHeaderComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        AppRoutingModule,
        FormsModule,
        ProgressbarModule.forRoot(),
        CollapseModule.forRoot(),
        PaginationModule.forRoot(),
        BsDatepickerModule.forRoot(),
        ButtonsModule.forRoot(),
        FontAwesomeModule
    ],
    providers: [
        JsonRpcService, ICoolingService, ITelescopeService,
        ICameraService, ITelescopeService, IFilterService,
        IFocuserService, IImageDbService,
        AppConfigService,
        {
            provide: APP_INITIALIZER,
            useFactory: appInitializerFn,
            multi: true,
            deps: [AppConfigService]
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
