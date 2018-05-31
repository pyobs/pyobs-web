import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {environment} from '../environments/environment';

import {TelescopeModule} from './telescope/telescope.module';
import {CameraModule} from './camera/camera.module';
import {FocusModule} from './focus/focus.module';
import {FilterModule} from './filter/filter.module';
import {CoolingModule} from './cooling/cooling.module';
import {ImageDbModule} from './imagedb/imagedb.module';

export function exportCameraModule() {
    return CameraModule;
}
export function exportCoolingModule() {
    return CoolingModule;
}
export function exportFilterModule() {
    return FilterModule;
}
export function exportFocusModule() {
    return FocusModule;
}
export function exportImageDbModule() {
    return ImageDbModule;
}
export function exportTelescopeModule() {
    return TelescopeModule;
}

const routes: Routes = [
    {path: 'telescope', loadChildren: exportTelescopeModule},
    {path: 'camera', loadChildren: exportCameraModule},
    {path: 'focus', loadChildren: exportFocusModule},
    {path: 'filter', loadChildren: exportFilterModule},
    {path: 'cooling', loadChildren: exportCoolingModule},
    {path: 'imagedb', loadChildren: exportImageDbModule}
];

/*
const routes: Routes = [
    {path: 'telescope', loadChildren: './telescope/telescope.module#TelescopeModule'},
    {path: 'camera', loadChildren: './camera/camera.module#CameraModule'},
    {path: 'focus', loadChildren: './focus/focus.module#FocusModule'},
    {path: 'filter', loadChildren: './filter/filter.module#FilterModule'},
    {path: 'cooling', loadChildren: './cooling/cooling.module#CoolingModule'},
    {path: 'imagedb', loadChildren: './imagedb/imagedb.module#ImageDbModule'}
];
*/

@NgModule({
    imports: [RouterModule.forRoot(routes, {useHash: environment.useHash})],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
