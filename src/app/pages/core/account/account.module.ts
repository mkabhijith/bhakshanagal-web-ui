import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { AccountComponent } from './account.component';
import { AddressComponent } from './address/address.component';
import { ProfileComponent } from './profile/profile.component';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedComponentModule } from 'src/app/shared/components/shared-component.module';

import { DividerModule } from 'primeng/divider';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { FieldsetModule } from 'primeng/fieldset';
import { ButtonModule } from 'primeng/button';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ToastModule } from 'primeng/toast';
import { TranslateModule } from '@ngx-translate/core';
import { OrderInfoComponent } from './order-info/order-info.component';
import { OrderDetailsComponent } from './order-info/order-details/order-details.component';
import { ReturnsComponent } from './returns/returns.component';
import { MyCancelationComponent } from './my-cancelation/my-cancelation.component';
import { NotificationsComponent } from './notifications/notifications.component';

@NgModule({
  declarations: [AccountComponent, ProfileComponent,AddressComponent, OrderInfoComponent, OrderDetailsComponent, ReturnsComponent, MyCancelationComponent, NotificationsComponent],
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
    ToastModule,
    SharedComponentModule,
    TranslateModule
  ],
  
  providers: [ConfirmationService, MessageService],
})
export class AccountModule {}
