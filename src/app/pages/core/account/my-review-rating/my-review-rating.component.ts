import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  ConfirmEventType,
  ConfirmationService,
  MessageService,
} from 'primeng/api';
import { TitleService } from 'src/app/shared/services/title/title.service';

type IreviewList = {
  id: number;
  productName: string;
  ratingTitle: string;
  review: string;
  rating: number;
  date: string;
};
@Component({
  selector: 'app-my-review-rating',
  templateUrl: './my-review-rating.component.html',
  styleUrls: ['./my-review-rating.component.scss'],
})
export class MyReviewRatingComponent implements OnInit {
  constructor(
    private confirmationService: ConfirmationService,
    private messageService: MessageService,
    private router: Router,
    private titleSerice: TitleService
  ) {}
  ngOnInit(): void {
    this.titleSerice.changeTitle('My Review');
  }
  reviewList: IreviewList[] = [
    // {
    //   id: 0,
    //   productName: 'achapam',
    //   ratingTitle: 'good',
    //   review: 'nice one',
    //   rating: 3,
    //   date: '12 dec 2023',
    // },
  ];
  confirm1() {
    this.confirmationService.confirm({
      message: 'Are you sure that you want to delete review?',
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.messageService.add({
          severity: 'info',
          summary: 'Confirmed',
          detail: 'You have accepted',
        });
      },
      reject: (type: any) => {
        switch (type) {
          case ConfirmEventType.REJECT:
            this.messageService.add({
              severity: 'error',
              summary: 'Rejected',
              detail: 'You have rejected',
            });
            break;
          case ConfirmEventType.CANCEL:
            this.messageService.add({
              severity: 'warn',
              summary: 'Cancelled',
              detail: 'You have cancelled',
            });
            break;
        }
      },
    });
  }
  navgateToAccount() {
    this.router.navigate(['account']);
  }
}
