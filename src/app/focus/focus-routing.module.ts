import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {FocusComponent} from './focus.component';

const routes: Routes = [{
    path: '',
    children: [
        {
            path: ':module',
            component: FocusComponent
        }
    ]
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class FocusRoutingModule {
}
