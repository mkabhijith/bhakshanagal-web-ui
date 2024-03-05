import { Component } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent {
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
