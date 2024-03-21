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
import { CheckOutService } from '../check-out/check-out.service';

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
    private checkOutService: CheckOutService,
    private router: Router
  ) {}

  headers = [
    'PRODUCT.PRODUCT',
    'PRODUCT.PRICE',
    'PRODUCT.Quantity',
    'PRODUCT.Subtotal',
  ];

  currentLanguage!: ILanguage;
  languageSubscription!: Subscription;
  cartListSubscription!: Subscription;
  cartList: IproductCart[] = [];
  totalPrice!: number;
  payTotal!: number;
  isLoader = false;
  coupon = '';
  ngOnInit(): void {
    this.titleSerice.changeTitle('Cart');
    this.isLoader = true;
    this.cartListSubscription = this.cartService.cartList$.subscribe({
      next: (res) => {
        this.cartList = res;
        this.isLoader = false;
        this.cartList.forEach((item) => {
          item.image_file =
            'https://srv442800.hstgr.cloud:3000//' + item.image_file;
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

  applyCoupon() {
    this.isLoader = true;
    this.checkOutService.validateCoupon(this.coupon).subscribe({
      next: (res) => {
        if (!res.result) {
          alert('invalid coupon');
        }
        this.isLoader = false;
      },
    });
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
    this.payTotal = this.totalPrice;
  }

  returnToShop() {
    this.router.navigate(['/home']);
  }
  checkOut() {
    const myArray = this.cartList;
    const jsonArray = JSON.stringify(myArray);
    const encodedArray = encodeURIComponent(jsonArray);
    this.router.navigate(['/checkout'], {
      queryParams: { arrayParam: encodedArray },
    });
  }
}
