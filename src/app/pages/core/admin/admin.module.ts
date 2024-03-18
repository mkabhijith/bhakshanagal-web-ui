import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { TranslateModule } from '@ngx-translate/core';

import { DividerModule } from 'primeng/divider';
import { TableModule } from 'primeng/table';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RadioButtonModule } from 'primeng/radiobutton';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { InputNumberModule } from 'primeng/inputnumber';
import { OffersComponent } from './offers/offers.component';
import { OrdersComponent } from './orders/orders.component';
import { PaynentComponent } from './paynent/paynent.component';
import { AddOffersComponent } from './offers/add-offers/add-offers.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsersComponent } from './users/users.component';
import { SharedComponentModule } from 'src/app/shared/components/shared-component.module';
import { CouponComponent } from './coupon/coupon.component';
import { CalendarModule } from 'primeng/calendar';
@NgModule({
  declarations: [
    AdminComponent,
    OffersComponent,
    OrdersComponent,
    PaynentComponent,
    AddOffersComponent,
    DashboardComponent,
    UsersComponent,
    CouponComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    TranslateModule,
    DividerModule,
    RadioButtonModule,
    ButtonModule,
    ScrollPanelModule,
    InputNumberModule,
    FormsModule,
    ReactiveFormsModule,
    InputTextModule,
    TableModule,
    SharedComponentModule,
    CalendarModule
  ],
})
export class AdminModule {}
