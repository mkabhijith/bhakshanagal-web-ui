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
  deCodeToken: any;

  ngOnInit() {
    this.titleSerice.changeTitle('Orders');
    this.languageSubscription = this.languageService.switchLanguage$.subscribe({
      next: (lang) => {
        this.currentLanguage = lang;
      },
    });
    this.orderservice.returnOrderList().subscribe({
      next: (res) => {
        console.log(res.data);

        this.products = res.data;
      },
    });
  }
  ngOnDestroy(): void {
    this.languageSubscription.unsubscribe();
  }

  orderDetails(item: any) {
    this.route.navigate(['ordersinfo', item]);
  }
}
