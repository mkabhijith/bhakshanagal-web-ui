import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { CoreComponent } from './core.component';
import { SharedComponentModule } from 'src/app/shared/components/shared-component.module';


@NgModule({
  declarations: [
    CoreComponent,
  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    SharedComponentModule,
  ]
})
export class CoreModule { }
