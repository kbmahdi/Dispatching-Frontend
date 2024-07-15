import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {EtatStockModule} from "./EtatStockVente/etatStock.module";

@NgModule({
    imports: [RouterModule.forChild([
        { path: 'crud', loadChildren: () => import('./crud/crud.module').then(m => m.CrudModule) },
        { path: 'empty', loadChildren: () => import('./empty/emptydemo.module').then(m => m.EmptyDemoModule) },
        { path: 'etatStock', loadChildren: () => import('./EtatStockVente/etatStock.module').then(m => m.EtatStockModule) },
        { path: 'dispatching', loadChildren: () => import('./dispatching/dispatching.module').then(m => m.DispatchingModule) },
        { path: 'timeline', loadChildren: () => import('./timeline/timelinedemo.module').then(m => m.TimelineDemoModule) }
    ])],
    exports: [RouterModule]
})
export class PagesRoutingModule { }
