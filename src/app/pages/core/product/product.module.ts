import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from './product.component';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { TranslateModule } from '@ngx-translate/core';
import { RatingModule } from 'primeng/rating';
import { FormsModule } from '@angular/forms';
import { InputNumberModule } from 'primeng/inputnumber';
import { SharedComponentModule } from 'src/app/shared/components/shared-component.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [ProductComponent],
  imports: [
    CommonModule,
    ProductRoutingModule,
    TagModule,
    ButtonModule,
    TranslateModule,
    RatingModule,
    FormsModule,
    InputNumberModule,
    SharedComponentModule,
    SharedModule
  ],
})
export class ProductModule {}
