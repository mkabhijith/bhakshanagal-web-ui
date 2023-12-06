import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OriginRoutingModule } from './origin-routing.module';
import { OriginComponent } from './origin.component';
import { SharedComponentModule } from 'src/app/shared/components/shared-component.module';


@NgModule({
  declarations: [OriginComponent],
  imports: [
    CommonModule,
    OriginRoutingModule,
    SharedComponentModule
  ]
})
export class OriginModule { }
