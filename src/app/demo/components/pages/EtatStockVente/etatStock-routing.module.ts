import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EtatStockComponent } from './etatStock.component';

@NgModule({
    imports: [RouterModule.forChild([
        { path: '', component: EtatStockComponent }
    ])],
    exports: [RouterModule]
})
export class EtatStockRoutingModule { }
