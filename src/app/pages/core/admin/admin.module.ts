import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { TranslateModule } from '@ngx-translate/core';

import { DividerModule } from 'primeng/divider';
import { StocksListComponent } from './stocks-list/stocks-list.component';

import { RadioButtonModule } from 'primeng/radiobutton';

@NgModule({
  declarations: [AdminComponent, StocksListComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    TranslateModule,
    DividerModule,
    RadioButtonModule,
    
  ]
})
export class AdminModule { }
