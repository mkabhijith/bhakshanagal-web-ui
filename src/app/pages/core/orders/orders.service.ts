import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class OrdersService {
  constructor() {}
  orderList: any[] = [
    {
      id: 1,
      imageUrl: '/assets/images/food/Kuzhalappam.jpg',
      productName: 'Kuzhalappam',
      price: 75,
      description:
        ' Ingredients: Rice flour, granted coconut, blak seasame seeds, cumin seeds, crushed black pepper, asafoetida, salt, water, oil Zero Preservatives/Artificial Colours/ Flavours/ Sugars',
      quantity: '175g',
    },
    {
      id: 2,
      imageUrl: '/assets/images/food/Kuzhalappam.jpg',
      productName: 'Kuzhalappam',
      price: 75,
      description:
        ' Ingredients: Rice flour, granted coconut, blak seasame seeds, cumin seeds, crushed black pepper, asafoetida, salt, water, oil Zero Preservatives/Artificial Colours/ Flavours/ Sugars',
      quantity: '175g',
    },
  ];
  returnOrderList(){
    return this.orderList;
  }
}
