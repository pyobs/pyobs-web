import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

const routes: Routes = [
    {path: 'telescope', loadChildren: './telescope/telescope.module#TelescopeModule'},
    {path: 'camera', loadChildren: './camera/camera.module#CameraModule'}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
