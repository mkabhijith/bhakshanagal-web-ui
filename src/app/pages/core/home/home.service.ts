import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor() { }
  products: any[] = [
    {
      id: 1,
      imageUrl: '/assets/images/food/Unniyappam - A Traditional Kerala Snack.jpg',
      productName: 'Product 1',
      price: 19.99,
      description: 'Description for Product 1.'
    },
    {
      id: 2,
      imageUrl: '/assets/images/food/Free PSD _ Food menu and restaurant social media cover template.jpg',
      productName: 'Product 2',
      price: 29.99,
      description: 'Description for Product 2.'
    },
    {
      id: 3,
      imageUrl: '/assets/images/food/Free PSD _ Food menu and restaurant social media cover template.jpg',
      productName: 'Product 1',
      price: 19.99,
      description: 'Description for Product 1.'
    },
    {
      id: 4,
      imageUrl: '/assets/images/food/Free PSD _ Food menu and restaurant social media cover template.jpg',
      productName: 'Product 2',
      price: 29.99,
      description: 'Description for Product 2.'
    },
    {
      id: 5,
      imageUrl: '/assets/images/food/Free PSD _ Food menu and restaurant social media cover template.jpg',
      productName: 'Product 1',
      price: 19.99,
      description: 'Description for Product 1.'
    },
    {
      id: 6,
      imageUrl: '/assets/images/food/Free PSD _ Food menu and restaurant social media cover template.jpg',
      productName: 'Product 2',
      price: 29.99,
      description: 'Description for Product 2.'
    },
    {
      id: 7,
      imageUrl: '/assets/images/food/Free PSD _ Food menu and restaurant social media cover template.jpg',
      productName: 'Product 1',
      price: 19.99,
      description: 'Description for Product 1.'
    },
    {
      id: 8,
      imageUrl: '/assets/images/food/Free PSD _ Food menu and restaurant social media cover template.jpg',
      productName: 'Product 2',
      price: 29.99,
      description: 'Description for Product 2.'
    },
    {
      id: 9,
      imageUrl: '/assets/images/food/Free PSD _ Food menu and restaurant social media cover template.jpg',
      productName: 'Product 1',
      price: 19.99,
      description: 'Description for Product 1.'
    },
    {
      id: 10,
      imageUrl: '/assets/images/food/Free PSD _ Food menu and restaurant social media cover template.jpg',
      productName: 'Product 2',
      price: 29.99,
      description: 'Description for Product 2.'
    },
    {
      id: 11,
      imageUrl: '/assets/images/food/Free PSD _ Food menu and restaurant social media cover template.jpg',
      productName: 'Product 1',
      price: 19.99,
      description: 'Description for Product 1.'
    },
    {
      id: 12,
      imageUrl: '/assets/images/food/Free PSD _ Food menu and restaurant social media cover template.jpg',
      productName: 'Product 2',
      price: 29.99,
      description: 'Description for Product 2.'
    },
    {
      id: 13,
      imageUrl: '/assets/images/food/Free PSD _ Food menu and restaurant social media cover template.jpg',
      productName: 'Product 1',
      price: 19.99,
      description: 'Description for Product 1.'
    },
    {
      id: 14,
      imageUrl: '/assets/images/food/Free PSD _ Food menu and restaurant social media cover template.jpg',
      productName: 'Product 2',
      price: 29.99,
      description: 'Description for Product 2.'
    },
    // Add more product objects as needed
  ];

  getList(){
    return this.products;
  }
}
