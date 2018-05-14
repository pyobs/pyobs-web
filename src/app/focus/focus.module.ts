import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {FocusComponent} from './focus.component';
import {FocusRoutingModule} from './focus-routing.module';


@NgModule({
    imports: [
        CommonModule,
        HttpClientModule,
        FormsModule,
        FocusRoutingModule
    ],
    declarations: [FocusComponent],
    providers: [],
    exports: [FocusComponent]
})
export class FocusModule {
}
