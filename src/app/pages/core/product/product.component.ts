import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HomeService } from '../home/home.service';
import { CartService } from '../cart/cart.service';
import { LanguageService } from 'src/app/shared/services/language.service';
import { Subscription } from 'rxjs';
import { ILanguage } from 'src/app/shared/types/language.type';
import { TitleService } from 'src/app/shared/services/title/title.service';
import { ProductService } from './product.service';
import { Iproduct } from '../home/home.type';
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
    private productService: ProductService
  ) {}

  languageSubscription!: Subscription;
  currentLanguage!: ILanguage;
  list!: any[];
  product!: IProductView[];

  ngOnInit() {
    this.list = this.homeService.getList();
    this.route.params.subscribe({
      next: (params) => {
        const id = params['id'];
        this.productService.getProduct(id).subscribe({
          next: (res) => {
            console.log(res);
            this.product = res.data;
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
  addToCart(id: number) {
    this.cartService.saveCart(id);
  }
  buyNow(id: number) {
    const RozerPayOptions = {
      description: 'sample',
      currency: 'INR',
      amount: this.product[0].price*100,
      name: '',
      Image: '',
      key: 'rzp_test_az7fEZxXoBzThm',
      prefills: {
        name: '',
        email: '',
        phone: '',
      },
      theme: {
        color: 'red',
      },
      modal: {
        ondismiss: () => {
          console.log('dissmissed');
        },
      },
    };
    const successCallback = (paymentId: any) => {
      console.log(paymentId);
    };

    const failureCallback = (e: any) => {
      console.log(e);
    };

    Razorpay.open(RozerPayOptions, successCallback, failureCallback);
  }
}
