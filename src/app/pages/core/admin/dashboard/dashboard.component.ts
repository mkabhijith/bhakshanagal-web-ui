import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
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
