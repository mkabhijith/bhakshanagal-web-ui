import { Component, OnDestroy, OnInit } from '@angular/core';

import { OrdersService } from './orders.service';
import {
  ConfirmEventType,
  ConfirmationService,
  MessageService,
} from 'primeng/api';
import { Router } from '@angular/router';
import { LanguageService } from 'src/app/shared/services/language.service';
import { Subscription } from 'rxjs';
import { ILanguage } from 'src/app/shared/types/language.type';
import { TitleService } from 'src/app/shared/services/title/title.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss'],
})
export class OrdersComponent implements OnInit, OnDestroy {
  constructor(
    private orderservice: OrdersService,
    private confirmationService: ConfirmationService,
    private messageService: MessageService,
    private route: Router,
    private languageService: LanguageService,
    private titleSerice: TitleService
  ) {}
  products: any[] = [];
  currentLanguage!: ILanguage;
  languageSubscription!: Subscription;
  ngOnInit() {
    this.titleSerice.changeTitle('Orders');
    this.products = this.orderservice.returnOrderList();
    this.languageSubscription = this.languageService.switchLanguage$.subscribe({
      next: (lang) => {
        this.currentLanguage = lang;
      },
    });
  }
  ngOnDestroy(): void {
    this.languageSubscription.unsubscribe();
  }
  confirm1() {
    this.confirmationService.confirm({
      message: 'Are you sure that you want to cancel order?',
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

  orderDetails(item: any) {
    console.log('item', item);
    this.route.navigate(['/orderDetails', item]);
  }
}
