import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {PytelSharedModule} from './pytel-shared/pytel-shared.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        PytelSharedModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
