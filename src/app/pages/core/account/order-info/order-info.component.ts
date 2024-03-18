import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../../orders/orders.service';
import { Router } from '@angular/router';
import { LanguageService } from 'src/app/shared/services/language.service';
import { TitleService } from 'src/app/shared/services/title/title.service';
import { ILanguage } from 'src/app/shared/types/language.type';
import { Subscription } from 'rxjs';
import { OrderService } from './order.service';

@Component({
  selector: 'app-order-info',
  templateUrl: './order-info.component.html',
  styleUrls: ['./order-info.component.scss'],
})
export class OrderInfoComponent implements OnInit {
  constructor(
    private orderservice: OrdersService,

    private route: Router,
    private languageService: LanguageService,
    private titleSerice: TitleService,
    private orderService: OrderService
  ) {}
  products: any[] = [];

  currentLanguage!: ILanguage;
  languageSubscription!: Subscription;
  ordersList = [];
  ngOnInit(): void {
    this.titleSerice.changeTitle('Orders');
    this.languageSubscription = this.languageService.switchLanguage$.subscribe({
      next: (lang) => {
        this.currentLanguage = lang;
      },
    });
    this.orderService.orderList().subscribe({
      next: (res) => {
        console.log(res);
        this.ordersList = res.data;
      },
    });
    this.orderservice.returnOrderList().subscribe({
      next: (res) => {
        this.products = res.data;
      },
    });
  }
  orderDetails(item: any) {
    this.route.navigate(['account/orders/orderInfo', item]);
    // this.route.navigateByUrl('account/orderInfo')
  }
}
