import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DispatchingRoutingModule } from './dispatching-routing.module';
import { DispatchingComponent } from './dispatching.component';
import {TabMenuModule} from "primeng/tabmenu";

@NgModule({
  imports: [
    CommonModule,
    DispatchingRoutingModule,
    TabMenuModule
  ],
    declarations: [DispatchingComponent]
})
export class DispatchingModule { }
