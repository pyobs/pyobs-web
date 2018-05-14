import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CameraComponent} from './pytel-shared/camera/camera.component';
import {TelescopeComponent} from './pytel-shared/telescope/telescope.component';

const routes: Routes = [
    {path: 'camera', component: CameraComponent},
    {path: 'telescope', component: TelescopeComponent},
    {path: '**', redirectTo: '/'}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
