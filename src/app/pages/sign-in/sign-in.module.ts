import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignInRoutingModule } from './sign-in-routing.module';
import { SignInComponent } from './sign-in.component';
import {ReactiveFormsModule} from '@angular/forms';
import { SharedComponentModule } from 'src/app/shared/components/shared-component.module';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  declarations: [
    SignInComponent
  ],
  imports: [
    CommonModule,
    SignInRoutingModule,
    ReactiveFormsModule,
    SharedComponentModule,
    TranslateModule
  ]
})
export class SignInModule { }
