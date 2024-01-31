import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HomeService } from '../home/home.service';
import { CartService } from '../cart/cart.service';
import { LanguageService } from 'src/app/shared/services/language.service';
import { Subscription } from 'rxjs';
import { ILanguage } from 'src/app/shared/types/language.type';
import { TitleService } from 'src/app/shared/services/title/title.service';

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
    private titleSerice: TitleService
  ) {}

  languageSubscription!: Subscription;
  currentLanguage!: ILanguage;
  list!: any[];
  product: any;

  ngOnInit() {
    this.list = this.homeService.getList();
    this.route.params.subscribe({
      next: (params) => {
        const id = params['id'];
        this.product = this.list.find((item) => item.id == id);
      },
    });
    window.scrollTo(0, 0);

    this.languageSubscription = this.languageService.switchLanguage$.subscribe({
      next: (lang) => {
        this.currentLanguage = lang;
      },
    });
    this.titleSerice.changeTitle(this.product.productName);
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
      amount: '3000',
      name: 'sai',
      Image:'',
      key: 'rzp_test_ykpIQCXJbWgyQi',
      prefills: {
        name: 'sai kumar',
        email: 'saigmail.com',
        phone: '98989898',
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

    Razorpay.open(RozerPayOptions,successCallback,failureCallback)
  }
}
