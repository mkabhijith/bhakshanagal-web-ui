import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { CoreComponent } from './core.component';
import { SharedComponentModule } from 'src/app/shared/components/shared-component.module';

import { ConfirmationService, MessageService } from 'primeng/api';

@NgModule({
  declarations: [CoreComponent],
  imports: [CommonModule, CoreRoutingModule, SharedComponentModule],
  providers: [ConfirmationService, MessageService],
})
export class CoreModule {}
