import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { AccountComponent } from './account.component';
import { AddressComponent } from './address/address.component';
import { ProfileComponent } from './profile/profile.component';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DividerModule } from 'primeng/divider';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { FieldsetModule } from 'primeng/fieldset';
import { ButtonModule } from 'primeng/button';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ToastModule } from 'primeng/toast';

@NgModule({
  declarations: [AccountComponent, ProfileComponent,AddressComponent],
  imports: [
    CommonModule,
    AccountRoutingModule,
    ReactiveFormsModule,
    DividerModule,
    InputTextModule,
    InputNumberModule,
    FieldsetModule,
    ButtonModule,
    FormsModule,
    ConfirmDialogModule,
    ToastModule
  ],
  
  providers: [ConfirmationService, MessageService],
})
export class AccountModule {}
