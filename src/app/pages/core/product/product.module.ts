import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from './product.component';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';

@NgModule({
  declarations: [ProductComponent],
  imports: [CommonModule, ProductRoutingModule, TagModule,ButtonModule],
})
export class ProductModule {}
