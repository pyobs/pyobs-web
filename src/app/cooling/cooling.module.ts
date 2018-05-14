import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {CoolingComponent} from './cooling.component';
import {CoolingRoutingModule} from './cooling-routing.module';
import {MapToIterablePipe} from '../shared/map-to-iterable.pipe';


@NgModule({
    imports: [
        CommonModule,
        HttpClientModule,
        FormsModule,
        CoolingRoutingModule
    ],
    declarations: [CoolingComponent, MapToIterablePipe],
    providers: [],
    exports: [CoolingComponent]
})
export class CoolingModule {
}
