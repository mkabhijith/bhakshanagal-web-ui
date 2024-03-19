import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { StorageService } from 'src/app/shared/services/storage/storage.service';

import { HttpClient } from '@angular/common/http';
import { IProductViewResponce } from '../product/product.type';
import { ProductService } from '../product/product.service';
import { IProductList } from '../home/home.type';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor(
    private storageService: StorageService,
    private httpClient: HttpClient,
    private productListService: ProductService
  ) {}

  private _cartCount = new BehaviorSubject<number>(this.getCartLength());
  cartCoun$ = this._cartCount.asObservable();

  private _cartList = new BehaviorSubject<any>([]);
  cartList$ = this._cartList.asObservable();

  getCartList() {
    return this.httpClient.post<IProductList>(`bhakshanangal/productlist`, {});

    this.productListService.getProduct(2).subscribe({
      next: (res) => {
        const cartArray = res.data;
        return res.data;
      },
    });
  }

  saveCart(id: number) {
    // if (!this.storageService.authKey) {
    const storedCart = this.getLocalCart();
    const ids: number[] = storedCart;
    const index = ids.findIndex((item) => {
      return item == id;
    });
    if (index == -1) {
      ids.push(id);
    }
    this.getCart();
    localStorage.setItem('ids', JSON.stringify(ids));
    this._cartCount.next(ids.length);
    this.getCart();
    // } else {
    //   console.log('else');
    // }
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
    this.getCart();
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
    const payload = {
      product_id: this.getLocalCart(),
    };
    this.httpClient
      .post<IProductViewResponce>(`bhakshanangal/productview`, payload)
      .subscribe({
        next: (res) => {
          this._cartList.next(res.data);
        },
      });
  }

  createOrder(payload: any) {
    return this.httpClient.post<any>(`bhakshanangal/createorder`, payload);
  }
}
