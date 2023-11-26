import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdersRoutingModule } from './orders-routing.module';
import { OrdersComponent } from './orders.component';

import { DataViewModule } from 'primeng/dataview';
import { ButtonModule } from 'primeng/button';
import { TimelineModule } from 'primeng/timeline';
@NgModule({
  declarations: [
    OrdersComponent,
    
  ],
  imports: [
    CommonModule,
    OrdersRoutingModule,
    DataViewModule,
    ButtonModule,
    TimelineModule
  ]
})
export class OrdersModule { }
