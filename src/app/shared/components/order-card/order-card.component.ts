import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order-card',
  templateUrl: './order-card.component.html',
  styleUrls: ['./order-card.component.scss'],
})
export class OrderCardComponent {
  constructor(private route: Router) {}
  @Input() cardItems: any[] = [
    {
      id: 1,
      imageUrl: '/assets/images/food/Kuzhalappam.jpg',
      productName: 'Kuzhalappam',
      price: 75,
      description:
        ' Ingredients: Rice flour, granted coconut, blak seasame seeds, cumin seeds, crushed black pepper, asafoetida, salt, water, oil Zero Preservatives/Artificial Colours/ Flavours/ Sugars',
      quantity: '175g',
      status: ' order',
    },
    {
      id: 2,
      imageUrl: '/assets/images/food/Kuzhalappam.jpg',
      productName: 'Kuzhalappam',
      price: 75,
      description:
        ' Ingredients: Rice flour, granted coconut, blak seasame seeds, cumin seeds, crushed black pepper, asafoetida, salt, water, oil Zero Preservatives/Artificial Colours/ Flavours/ Sugars',
      quantity: '175g',
      status: 'Delivery',
    },
  ];

  orderDetails(item: any) {
    this.route.navigate(['account/orders/orderInfo', item]);
    // this.route.navigateByUrl('account/orderInfo')
  }
}
