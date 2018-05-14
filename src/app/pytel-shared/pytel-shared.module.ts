import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {JsonRpcService} from './json-rpc.service';
import {CameraComponent} from './camera/camera.component';
import {TelescopeComponent} from './telescope/telescope.component';
import {NavigationComponent} from './navigation/navigation.component';


@NgModule({
    imports: [
        CommonModule,
        HttpClientModule,
        FormsModule
    ],
    declarations: [CameraComponent, TelescopeComponent, NavigationComponent],
    providers: [JsonRpcService],
    exports: [CameraComponent, TelescopeComponent, NavigationComponent]
})
export class PytelSharedModule {
}
