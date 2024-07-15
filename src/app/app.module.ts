import { NgModule } from '@angular/core';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AppLayoutModule } from './layout/app.layout.module';
import { NotfoundComponent } from './demo/components/notfound/notfound.component';
import { ProductService } from './demo/service/product.service';
import { CountryService } from './demo/service/country.service';
import { CustomerService } from './demo/service/customer.service';
import { EventService } from './demo/service/event.service';
import { IconService } from './demo/service/icon.service';
import { NodeService } from './demo/service/node.service';
import { PhotoService } from './demo/service/photo.service';
import {PhoneService} from "./demo/service/phone.service";
import {FilterService} from "./demo/service/filters.service";
import {PriminiPhoneService} from "./demo/service/priminiphone.service";
import {CacheService} from "./demo/service/cache.service";
import {UserService} from "./demo/service/user.service";
import {TokenInterceptor} from "./demo/service/token.interceptor";

//New TODO mydasboard
import { MydashboardComponent } from './demo/components/mydashboard/mydashboard.component';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { RippleModule } from 'primeng/ripple';
import { MultiSelectModule } from 'primeng/multiselect';
import { DropdownModule } from 'primeng/dropdown';
import { ProgressBarModule } from 'primeng/progressbar';
import { ToastModule } from 'primeng/toast';
import { SliderModule } from 'primeng/slider';
import { RatingModule } from 'primeng/rating';
import { FormsModule } from '@angular/forms';
import {DashboardusersComponent} from "./demo/components/dashboardusers/dashboardusers.component";
import {AuthGuard} from "./demo/service/auth.guard";
import {AuthService} from "./demo/service/auth.service";
import {ToolbarModule} from "primeng/toolbar";
import {DialogModule} from "primeng/dialog";

@NgModule({
    declarations: [
        AppComponent, NotfoundComponent, MydashboardComponent, DashboardusersComponent
    ],
  imports: [
    AppRoutingModule,
    AppLayoutModule,
    TableModule,
    CommonModule,
    RatingModule,
    ButtonModule,
    SliderModule,
    InputTextModule,
    ToggleButtonModule,
    RippleModule,
    MultiSelectModule,
    DropdownModule,
    ProgressBarModule,
    ToastModule,
    FormsModule,
    ToolbarModule,
    DialogModule
  ],
    providers: [
        { provide: LocationStrategy, useClass: HashLocationStrategy },
        CountryService, CustomerService, EventService, IconService, NodeService,
        PhotoService, ProductService, FilterService, PhoneService , PriminiPhoneService,
        CacheService, UserService, TokenInterceptor, AuthGuard, AuthService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
