import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { StorageService } from 'src/app/shared/services/storage/storage.service';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor(private storageService: StorageService) {}

  private _cartCount = new BehaviorSubject<any>(this.getCartLength());
  cartCoun$ = this._cartCount.asObservable();

  private _cartList = new BehaviorSubject<any>([]);
  cartList$ = this._cartList.asObservable();

  cartList: any[] = [
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
      quantity: '10piese',
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

    // Add more product objects as needed
  ];

  getCartList() {
    return this.cartList;
  }

  saveCart(id: number) {
    if (this.storageService.authKey) {
      const storedCart = this.getLocalCart();
      const ids: number[] = storedCart;
      const index = ids.findIndex((item) => {
        return item == id;
      });
      if (index == -1) {
        ids.push(id);
      }
      this.getCart()
      localStorage.setItem('ids', JSON.stringify(ids));
      this._cartCount.next(ids.length);
      this.getCart()
    } else {
      this._cartCount.next(5);
    }
  }

  onCartRemoveItem(id: number) {
    const storedCart = this.getLocalCart();
    const ids: number[] = storedCart;
    const index = ids.findIndex((item) => {
      return item == id;
    });
    if (index !== -1) {
      ids.splice(index, 1);
    }
    localStorage.setItem('ids', JSON.stringify(ids));
    this.getCart()
    this._cartCount.next(ids.length);
  }

  getLocalCart() {
    const cart = localStorage.getItem('ids');
    const newCart: number[] = cart ? JSON.parse(cart) : [];
    return newCart;
  }

  getCartLength() {
    return this.getLocalCart().length;
  }

  getCart() {
    const array = this.getLocalCart();
    const cartArray = this.getCartList();
    const cartList = cartArray.filter((cart) => array.includes(cart.id));
    // return cartList;
    console.log('get cart',cartList);
    
    this._cartList.next(cartList)
  }
}
