import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OffersRoutingModule } from './offers-routing.module';
import { OffersComponent } from './offers.component';
import { SharedComponentModule } from 'src/app/shared/components/shared-component.module';


@NgModule({
  declarations: [
    OffersComponent
  ],
  imports: [
    CommonModule,
    OffersRoutingModule,
    SharedComponentModule
  ]
})
export class OffersModule { }
