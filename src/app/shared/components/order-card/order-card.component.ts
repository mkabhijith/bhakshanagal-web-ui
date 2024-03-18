import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order-card',
  templateUrl: './order-card.component.html',
  styleUrls: ['./order-card.component.scss'],
})
export class OrderCardComponent {
  constructor(private route: Router) {}
  @Input() cardItems: any[] = [];

  orderDetails(item: any) {
    this.route.navigate(['account/orders/orderInfo', item]);
    // this.route.navigateByUrl('account/orderInfo')
  }
}
