import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {FilterComponent} from './filter.component';
import {FilterRoutingModule} from './filter-routing.module';


@NgModule({
    imports: [
        CommonModule,
        HttpClientModule,
        FormsModule,
        FilterRoutingModule
    ],
    declarations: [FilterComponent],
    providers: [],
    exports: [FilterComponent]
})
export class FilterModule {
}
