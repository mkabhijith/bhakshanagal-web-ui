import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyNotificationsRoutingModule } from './my-notifications-routing.module';
import { MyNotificationsComponent } from './my-notifications.component';
import { SharedComponentModule } from 'src/app/shared/components/shared-component.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [MyNotificationsComponent],
  imports: [CommonModule, MyNotificationsRoutingModule,SharedComponentModule,TranslateModule],
})
export class MyNotificationsModule {}
