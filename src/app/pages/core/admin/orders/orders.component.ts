import { Component } from '@angular/core';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent {
  products = [
    {
      Products: 0,
      Confirmed: 'jj',
      Packed: '2',
      Shipped: '5',
      Delivered: '8',
    },
    {
      Products: 0,
      Confirmed: 'jj',
      Packed: '2',
      Shipped: '5',
      Delivered: '8',
    },
    {
      Products: 0,
      Confirmed: 'jj',
      Packed: '2',
      Shipped: '5',
      Delivered: '8',
    },
  ];
}
