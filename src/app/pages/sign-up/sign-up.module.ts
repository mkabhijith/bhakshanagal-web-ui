import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignUpRoutingModule } from './sign-up-routing.module';
import { SignUpComponent } from './sign-up.component';
import {ReactiveFormsModule} from '@angular/forms';
import { SharedComponentModule } from 'src/app/shared/components/shared-component.module';
import { TranslateModule } from '@ngx-translate/core';



@NgModule({
  declarations: [
    SignUpComponent
  ],
  imports: [
    CommonModule,
    SignUpRoutingModule,
    ReactiveFormsModule,
    SharedComponentModule,
    TranslateModule
  ]
})
export class SignUpModule { }
