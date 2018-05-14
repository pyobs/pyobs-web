import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {CameraComponent} from './camera.component';
import {CameraRoutingModule} from './camera-routing.module';
import {ImagePreviewComponent} from './image-preview/image-preview.component';
import {TakeImageComponent} from './take-image/take-image.component';


@NgModule({
    imports: [
        CommonModule,
        HttpClientModule,
        FormsModule,
        CameraRoutingModule
    ],
    declarations: [CameraComponent, ImagePreviewComponent, TakeImageComponent],
    providers: [],
    exports: [CameraComponent]
})
export class CameraModule {
}
