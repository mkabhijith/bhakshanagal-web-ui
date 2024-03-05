import { Component, OnDestroy, OnInit } from '@angular/core';
import { CartService } from './cart.service';
import { StorageService } from 'src/app/shared/services/storage/storage.service';
import { Subscription } from 'rxjs';
import { ILanguage } from 'src/app/shared/types/language.type';
import { LanguageService } from 'src/app/shared/services/language.service';
import { TitleService } from 'src/app/shared/services/title/title.service';
import { AddressService } from '../account/address/address.service';
import { Iproduct } from '../home/home.type';
import { Router } from '@angular/router';

declare var Razorpay: any;

export interface IproductCart {
  product_id: number;
  product_name: string;
  price: number;
  quantity: number;
  image_file: null | string;
  count: number;
  totalPrice: number;
}
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit, OnDestroy {
  constructor(
    private cartService: CartService,
    private languageService: LanguageService,
    private titleSerice: TitleService,
    private addressService: AddressService,
    private storageService: StorageService,
    private router: Router
  ) {}

  headers = ['PRODUCT.PRODUCT', 'PRODUCT.PRICE', 'PRODUCT.Quantity', 'PRODUCT.Subtotal'];

  currentLanguage!: ILanguage;
  languageSubscription!: Subscription;
  cartListSubscription!: Subscription;
  cartList: IproductCart[] = [];
  totalPrice!: number;
  payTotal!: number;
  ngOnInit(): void {
    this.titleSerice.changeTitle('Cart');
    this.cartListSubscription = this.cartService.cartList$.subscribe({
      next: (res) => {
        this.cartList = res;
        this.cartList.forEach((item) => {
          item.count = 1;
          item.totalPrice = item.price * item.count;
          this.sumCart();
        });
      },
    });
    this.languageSubscription = this.languageService.switchLanguage$.subscribe({
      next: (lang) => {
        this.currentLanguage = lang;
      },
    });
    // this.addrerssList = this.addressService.getAddress();

    this.sumCart();
  }
  ngOnDestroy(): void {
    this.cartListSubscription.unsubscribe();
    this.languageSubscription.unsubscribe();
  }

  onItemRemove(id: number) {
    this.cartService.onCartRemoveItem(id);
    this.sumCart();
  }
  increaseCount(id: number) {
    this.cartList.forEach((cart) => {
      if (cart.product_id === id) {
        if (cart.count) {
          cart.count++;
          cart.totalPrice = cart.price * cart.count;
        }
      }
    });
    this.sumCart();
  }
  decreseCount(id: number) {
    this.cartList.forEach((cart) => {
      if (cart.product_id === id) {
        if (cart.count && cart.count > 1) {
          cart.count--;
          cart.totalPrice = cart.price * cart.count;
        }
      }
    });
    this.sumCart();
  }

  sumCart() {
    this.totalPrice = this.cartList.reduce(
      (sum, product) => sum + product.totalPrice,
      0
    );
    this.payTotal = this.totalPrice + 100;
  }

 
  returnToShop() {
    this.router.navigate(['/home']);
  }
  checkOut(){
    const myArray = this.cartList;
    const jsonArray = JSON.stringify(myArray);
    const encodedArray = encodeURIComponent(jsonArray);
    this.router.navigate(['/checkout' ], { queryParams: { arrayParam: encodedArray } })
  }
}
