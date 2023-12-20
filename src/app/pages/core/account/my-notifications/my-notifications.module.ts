import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyNotificationsRoutingModule } from './my-notifications-routing.module';
import { MyNotificationsComponent } from './my-notifications.component';
import { SharedComponentModule } from 'src/app/shared/components/shared-component.module';

@NgModule({
  declarations: [MyNotificationsComponent],
  imports: [CommonModule, MyNotificationsRoutingModule,SharedComponentModule],
})
export class MyNotificationsModule {}
