import { Component, OnInit, OnDestroy } from '@angular/core';
import { HomeService } from './home.service';

import { CountryOrginService } from 'src/app/shared/services/country-orgin.service';
import { Router } from '@angular/router';
import { TitleService } from 'src/app/shared/services/title/title.service';
import { ILanguage } from 'src/app/shared/types/language.type';
import { Subscription, catchError } from 'rxjs';
import { LanguageService } from 'src/app/shared/services/language.service';
import { IProductListArray, Iproduct } from './home.type';
import { StorageService } from 'src/app/shared/services/storage/storage.service';

interface IServiceList {
  heading: string;
  title: string;
  image: string;
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
  currentAddIndex = 0;
  adLists: string[] = [
    '/assets/images/poster/b baner.1.jpg',
    '/assets/images/poster/B B2.jpg',
  ];

  serviceList: IServiceList[] = [
    {
      image: '/assets/images/Services.svg',
      heading: 'HOME.FAST_DELIVERY',
      title: 'HOME.FREE_DELIVARY_TITLE',
    },
    {
      image: '/assets/images/Services2.svg',
      heading: 'HOME.CUSTOMER_SERVICE',
      title: 'HOME.CONSUMER_SERVICE_TITLE',
    },
    {
      image: '/assets/images/Services3.svg',
      heading: 'HOME.MONEY_BACK',
      title: 'HOME.MONEY_BACK_TITLE',
    },
  ];

  constructor(
    private homeService: HomeService,
    private currencyService: CountryOrginService,
    private route: Router,
    private titleSerice: TitleService,
    private languageService: LanguageService,
    private storageService: StorageService
  ) {}
  list!: any[];

  productList!: IProductListArray[];
  currencyValue!: number;
  currency!: string;
  currentLanguage!: ILanguage;
  languageSubscription!: Subscription;
  loginInProgress: boolean = false;
  productPickle!: Iproduct[];
  productCrunchy!: Iproduct[];
  ngOnInit() {
    this.titleSerice.changeTitle('home');
    this.currencyService.switchCountry$.subscribe({
      next: (latestCurrecy) => {
        this.currencyValue = latestCurrecy.exchangeRate;
        this.currency = latestCurrecy.currency;
      },
    });

    setInterval(() => {
      this.currentAddIndex++;
    }, 3000);

    this.languageSubscription = this.languageService.switchLanguage$.subscribe({
      next: (lang) => {
        this.currentLanguage = lang;
      },
    });
    this.loginInProgress = true;
    this.homeService.getProductList().subscribe({
      next: (res) => {
        if (res) {
          this.loginInProgress = false;
          this.productList = res.data;
          this.productPickle = res.data[1].pickles
          .map((pickle) => {
            if (pickle.image_file !== null) {
              pickle.image_file =
                'https://srv442800.hstgr.cloud:3000//' + pickle.image_file;
            }
            return pickle;
          });
          console.log(this.productPickle);

          this.productCrunchy = res.data[0].crunchy
          .map((item) => {
            if (item.image_file !== null) {
              item.image_file =
                'https://srv442800.hstgr.cloud:3000//' + item.image_file;
            }
            return item;
          });
          console.log('log res', res);
        }
        catchError((Error) => {
          console.log('request fail error', Error);

          throw Error;
        });
      },
    });
  }
  ngOnDestroy(): void {
    this.languageSubscription.unsubscribe();
  }

  getPic() {
    if (this.currentAddIndex === this.adLists.length) {
      this.currentAddIndex = 0;
    }
    return this.adLists[this.currentAddIndex];
  }

  navigateToOffers() {
    this.route.navigate(['/offers/1']);
  }
}
