import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {TelescopeComponent} from './telescope.component';

const routes: Routes = [{
    path: '',
    children: [
        {
            path: ':module',
            component: TelescopeComponent
        }
    ]
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TelescopeRoutingModule {
}
