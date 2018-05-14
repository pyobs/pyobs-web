import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CoolingComponent} from './cooling.component';

const routes: Routes = [{
    path: '',
    children: [
        {
            path: ':module',
            component: CoolingComponent
        }
    ]
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CoolingRoutingModule {
}
