import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartRoutingModule } from './cart-routing.module';
import { CartComponent } from './cart.component';
import { ScrollPanelModule } from 'primeng/scrollpanel';

import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';
import { SharedComponentModule } from 'src/app/shared/components/shared-component.module';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CartComponent
  ],
  imports: [
    CommonModule,
    CartRoutingModule,
    ScrollPanelModule,
    ButtonModule,
    DividerModule,
    SharedComponentModule,
    TranslateModule,
    FormsModule
  ]
})
export class CartModule {
  
 }
