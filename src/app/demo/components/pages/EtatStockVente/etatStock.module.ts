import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EtatStockRoutingModule } from './etatStock-routing.module';
import { EtatStockComponent } from './etatStock.component';
import {ToastModule} from "primeng/toast";
import {ChipModule} from "primeng/chip";
import {FormsModule} from "@angular/forms";
import {FloatlabelDemoRoutingModule} from "../../uikit/floatlabel/floatlabeldemo-routing.module";
import {AutoCompleteModule} from "primeng/autocomplete";
import {CalendarModule} from "primeng/calendar";
import {ChipsModule} from "primeng/chips";
import {DropdownModule} from "primeng/dropdown";
import {InputMaskModule} from "primeng/inputmask";
import {InputNumberModule} from "primeng/inputnumber";
import {CascadeSelectModule} from "primeng/cascadeselect";
import {MultiSelectModule} from "primeng/multiselect";
import {InputTextareaModule} from "primeng/inputtextarea";
import {InputTextModule} from "primeng/inputtext";
import {ProgressBarModule} from "primeng/progressbar";
import {SliderModule} from "primeng/slider";
import {TableModule} from "primeng/table";
import {DialogModule} from "primeng/dialog";
import {RippleModule} from "primeng/ripple";
import {RatingModule} from "primeng/rating";
import {RadioButtonModule} from "primeng/radiobutton";
import {CheckboxModule} from "primeng/checkbox";
import {TabMenuModule} from "primeng/tabmenu";
import {TabViewModule} from "primeng/tabview";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    EtatStockRoutingModule,
    AutoCompleteModule,
    CalendarModule,
    ChipsModule,
    DropdownModule,
    InputMaskModule,
    InputNumberModule,
    CascadeSelectModule,
    MultiSelectModule,
    InputTextareaModule,
    InputTextModule,
    ProgressBarModule,
    SliderModule,
    TableModule,
    DialogModule,
    RippleModule,
    RatingModule,
    ToastModule,
    ChipModule,
    RadioButtonModule,
    CheckboxModule,
    TabMenuModule,
    TabViewModule
  ],
    declarations: [EtatStockComponent]
})
export class EtatStockModule { }
