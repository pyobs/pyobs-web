import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
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

@NgModule({
    declarations: [
        AppComponent,
        NavigationComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        AppRoutingModule
    ],
    providers: [
        JsonRpcService, ICoolingService, ITelescopeService,
        ICameraService, ITelescopeService, IFilterService,
        IFocuserService, IImageDbService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
