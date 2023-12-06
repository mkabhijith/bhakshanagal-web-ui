import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoryRoutingModule } from './category-routing.module';
import { CategoryComponent } from './category.component';
import { SharedComponentModule } from 'src/app/shared/components/shared-component.module';

@NgModule({
  declarations: [CategoryComponent],
  imports: [CommonModule, CategoryRoutingModule, SharedComponentModule],
})
export class CategoryModule {}
