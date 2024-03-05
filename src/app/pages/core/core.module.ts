import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { CoreComponent } from './core.component';
import { SharedComponentModule } from 'src/app/shared/components/shared-component.module';
import { DialogModule } from 'primeng/dialog';
import { ConfirmationService, MessageService } from 'primeng/api';
import { CheckOutComponent } from './check-out/check-out.component';
import { FormsModule } from '@angular/forms';
import { WishlistComponent } from './wishlist/wishlist.component';
import { TranslateModule } from '@ngx-translate/core';
@NgModule({
  declarations: [CoreComponent, CheckOutComponent, WishlistComponent],
  imports: [
    CommonModule,
    CoreRoutingModule,
    SharedComponentModule,
    FormsModule,
    DialogModule,
    TranslateModule
  ],
  providers: [ConfirmationService, MessageService],
})
export class CoreModule {}
