import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { TranslateModule } from '@ngx-translate/core';

import { DividerModule } from 'primeng/divider';
import { StocksListComponent } from './stocks-list/stocks-list.component';

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
@NgModule({
  declarations: [AdminComponent, StocksListComponent, OffersComponent, OrdersComponent, PaynentComponent, AddOffersComponent],
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
    InputTextModule
  ],
})
export class AdminModule {}
