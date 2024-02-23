import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

import { SharedComponentModule } from 'src/app/shared/components/shared-component.module';
import { TranslateModule } from '@ngx-translate/core';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { RatingModule } from 'primeng/rating';
import { FormsModule } from '@angular/forms';
import { DividerModule } from 'primeng/divider';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    TranslateModule,
    CardModule,
    ButtonModule,
    RatingModule,
    FormsModule,
    SharedComponentModule,
    DividerModule
  ]
})
export class HomeModule { }
