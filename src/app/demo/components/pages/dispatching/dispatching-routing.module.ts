import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DispatchingComponent } from './dispatching.component';

@NgModule({
    imports: [RouterModule.forChild([
        { path: '', component: DispatchingComponent }
    ])],
    exports: [RouterModule]
})
export class DispatchingRoutingModule { }
