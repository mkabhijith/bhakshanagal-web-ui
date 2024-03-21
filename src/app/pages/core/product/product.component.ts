import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HomeService } from '../home/home.service';
import { CartService } from '../cart/cart.service';
import { LanguageService } from 'src/app/shared/services/language.service';
import { Subscription } from 'rxjs';
import { ILanguage } from 'src/app/shared/types/language.type';
import { TitleService } from 'src/app/shared/services/title/title.service';
import { ProductService } from './product.service';
import { IProductView } from './product.type';

declare var Razorpay: any;
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit, OnDestroy {
  constructor(
    private route: ActivatedRoute,
    private homeService: HomeService,
    private cartService: CartService,
    private languageService: LanguageService,
    private titleSerice: TitleService,
    private productService: ProductService,
    private router: Router
  ) {}

  languageSubscription!: Subscription;
  currentLanguage!: ILanguage;
  list!: any[];
  product!: IProductView[];
  value = 4;
  totalPrice!: number;
  ngOnInit() {
    this.route.params.subscribe({
      next: (params) => {
        const id = params['id'];
        this.productService.getProduct(id).subscribe({
          next: (res) => {
            this.product = res.data;
            this.product.forEach((item) => {
              item.image_file =
              'https://srv442800.hstgr.cloud:3000//' + item.image_file;
              item.count = 1;
              item.totalPrice = item.price * item.count;
            });
            console.log(this.product);
          },
        });
        this.product = this.list.find((item) => item.id == id);
      },
    });
    window.scrollTo(0, 0);

    this.languageSubscription = this.languageService.switchLanguage$.subscribe({
      next: (lang) => {
        this.currentLanguage = lang;
      },
    });
    this.titleSerice.changeTitle(this.product[0].product_name);
  }
  ngOnDestroy(): void {
    this.languageSubscription.unsubscribe();
  }

  increaseCount() {
    this.product.forEach((item) => {
      if (item.count) {
        item.count++;
        item.totalPrice = item.price * item.count;
      }
    });
  }

  decreaseCount() {
    this.product.forEach((item) => {
      if (item.count && item.count > 1) {
        item.count--;
        item.totalPrice = item.price * item.count;
      }
    });
  }
  addToCart(id: number) {
    this.cartService.saveCart(id);
  }
  sumPrice() {
    this.totalPrice =
      this.product.reduce((sum, product) => sum + product.totalPrice, 0) * 100;
  }
  // buyNow() {
  //   this.sumPrice();

  //   const RozerPayOptions = {
  //     description: 'sample',
  //     currency: 'INR',
  //     amount: this.totalPrice,
  //     name: '',
  //     Image: '',
  //     key: 'rzp_test_az7fEZxXoBzThm',
  //     prefills: {
  //       name: '',
  //       email: '',
  //       phone: '',
  //     },
  //     theme: {
  //       color: 'red',
  //     },
  //     modal: {
  //       ondismiss: () => {
  //         console.log('dissmissed');
  //       },
  //     },
  //   };
  //   const successCallback = (paymentId: any) => {
  //     console.log(paymentId);
  //   };

  //   const failureCallback = (e: any) => {
  //     console.log(e);
  //   };

  //   Razorpay.open(RozerPayOptions, successCallback, failureCallback);
  // }
  buyNow() {
    const myArray = this.product;
    const jsonArray = JSON.stringify(myArray);
    const encodedArray = encodeURIComponent(jsonArray);
    this.router.navigate(['/checkout'], {
      queryParams: { arrayParam: encodedArray },
    });
  }
}
