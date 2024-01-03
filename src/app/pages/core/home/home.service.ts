import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  constructor() {}
  products: any[] = [
    {
      id: 1,
      imageUrl: '/assets/images/food/Kuzhalappam.jpg',
      productName: 'Kuzhalappam',
      price: 75,
      description:
        ' Ingredients: Rice flour, granted coconut, blak seasame seeds, cumin seeds, crushed black pepper, asafoetida, salt, water, oil Zero Preservatives/Artificial Colours/ Flavours/ Sugars',
      quantity: '175g',
      status: true,
      shipping: 'international',
      payment: ' cash On Delivery',
      Refundable: true,
      freeDelivary: true,
    },
    {
      id: 2,
      imageUrl:
        '/assets/images/food/Kottayam Churuttu Recipe _ Thin Flour Pastry Sheets Filled with Sweetened Rice Filling.jpg',
      productName: 'Kottayam churattu',
      price: 45,
      description: 'Description for Product 2.',
      quantity: '250g',
      status: false,
    },
    {
      id: 3,
      imageUrl:
        '/assets/images/food/Benne Murukku _ Butter Murukku Recipe _ Easy Diwali Snacks.jpg',
      productName: 'Murukku',
      price: 45,
      description: 'Description for Product 1.',
      quantity: '250g',
    },
    {
      id: 4,
      imageUrl: '/assets/images/food/Achappam.jpg',
      productName: 'Achappam',
      price: 55,
      description: 'Description for Product 2.',
      quantity: '10piece',
    },
    {
      id: 5,
      imageUrl: '/assets/images/food/Homemade Popcorn.jpg',
      productName: 'Popcorn',
      price: 25,
      description: 'Description for Product 1.',
      quantity: '50gm',
    },
    {
      id: 6,
      imageUrl:
        '/assets/images/food/Benne Murukku _ Butter Murukku Recipe _ Easy Diwali Snacks.jpg',
      productName: 'Butter Murukku',
      price: 29.99,
      description: 'Description for Product 2.',
      quantity: '10piese',
    },
    {
      id: 7,
      imageUrl:
        '/assets/images/food/Free PSD _ Food menu and restaurant social media cover template.jpg',
      productName: 'Product 1',
      price: 19.99,
      description: 'Description for Product 1.',
    },
    {
      id: 8,
      imageUrl:
        '/assets/images/food/Free PSD _ Food menu and restaurant social media cover template.jpg',
      productName: 'Product 2',
      price: 29.99,
      description: 'Description for Product 2.',
    },
    {
      id: 9,
      imageUrl:
        '/assets/images/food/Free PSD _ Food menu and restaurant social media cover template.jpg',
      productName: 'Product 1',
      price: 19.99,
      description: 'Description for Product 1.',
    },
    {
      id: 10,
      imageUrl:
        '/assets/images/food/Free PSD _ Food menu and restaurant social media cover template.jpg',
      productName: 'Product 2',
      price: 29.99,
      description: 'Description for Product 2.',
    },
    {
      id: 11,
      imageUrl:
        '/assets/images/food/Free PSD _ Food menu and restaurant social media cover template.jpg',
      productName: 'Product 1',
      price: 19.99,
      description: 'Description for Product 1.',
    },
    {
      id: 12,
      imageUrl:
        '/assets/images/food/Free PSD _ Food menu and restaurant social media cover template.jpg',
      productName: 'Product 2',
      price: 29.99,
      description: 'Description for Product 2.',
    },
    {
      id: 13,
      imageUrl:
        '/assets/images/food/Free PSD _ Food menu and restaurant social media cover template.jpg',
      productName: 'Product 1',
      price: 19.99,
      description: 'Description for Product 1.',
    },
    {
      id: 14,
      imageUrl:
        '/assets/images/food/Free PSD _ Food menu and restaurant social media cover template.jpg',
      productName: 'Product 2',
      price: 29.99,
      description: 'Description for Product 2.',
    },
    // Add more product objects as needed
  ];

  getList() {
    return this.products;
  }
}
