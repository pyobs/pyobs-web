import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {TelescopeComponent} from './telescope.component';
import {TelescopeRoutingModule} from './telescope-routing.module';


@NgModule({
    imports: [
        CommonModule,
        HttpClientModule,
        FormsModule,
        TelescopeRoutingModule
    ],
    declarations: [TelescopeComponent],
    providers: [],
    exports: [TelescopeComponent]
})
export class TelescopeModule {
}
