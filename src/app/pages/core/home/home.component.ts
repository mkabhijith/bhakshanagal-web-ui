import { Component, OnInit, OnDestroy } from '@angular/core';
import { HomeService } from './home.service';

import { CountryOrginService } from 'src/app/shared/services/country-orgin.service';
import { Router } from '@angular/router';
import { TitleService } from 'src/app/shared/services/title/title.service';
import { ILanguage } from 'src/app/shared/types/language.type';
import { Subscription } from 'rxjs';
import { LanguageService } from 'src/app/shared/services/language.service';
import { IProductListArray } from './home.type';
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
      heading: 'FREE AND FAST DELIVERY',
      title: 'Free delivery for all orders over $140',
    },
    {
      image: '/assets/images/Services2.svg',
      heading: '24/7 CUSTOMER SERVICE',
      title: 'Friendly 24/7 customer support',
    }, {
      image: '/assets/images/Services3.svg',
      heading: 'MONEY BACK GUARANTEE',
      title: 'We reurn money within 30 days',
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
        this.loginInProgress = false;
        this.productList = res.data;
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
