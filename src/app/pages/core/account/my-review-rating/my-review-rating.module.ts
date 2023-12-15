import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyReviewRatingRoutingModule } from './my-review-rating-routing.module';
import { MyReviewRatingComponent } from './my-review-rating.component';
import { SharedComponentModule } from 'src/app/shared/components/shared-component.module';

import { ConfirmationService, MessageService } from 'primeng/api';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [MyReviewRatingComponent],
  imports: [
    CommonModule,
    MyReviewRatingRoutingModule,
    SharedComponentModule,
    ButtonModule,
    ConfirmDialogModule,
    ToastModule,
  ],
  providers: [ConfirmationService, MessageService],
})
export class MyReviewRatingModule {}
