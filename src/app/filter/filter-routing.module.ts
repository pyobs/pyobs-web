import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {FilterComponent} from './filter.component';

const routes: Routes = [{
    path: '',
    children: [
        {
            path: ':module',
            component: FilterComponent
        }
    ]
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class FilterRoutingModule {
}
