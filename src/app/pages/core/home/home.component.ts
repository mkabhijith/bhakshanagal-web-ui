import { Component, OnInit, OnDestroy } from '@angular/core';
import { HomeService } from './home.service';

import { CountryOrginService } from 'src/app/shared/services/country-orgin.service';
import { Router } from '@angular/router';
import { TitleService } from 'src/app/shared/services/title/title.service';
import { ILanguage } from 'src/app/shared/types/language.type';
import { Subscription } from 'rxjs';
import { LanguageService } from 'src/app/shared/services/language.service';

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

  constructor(
    private homeService: HomeService,
    private currencyService: CountryOrginService,
    private route: Router,
    private titleSerice: TitleService,
    private languageService: LanguageService
  ) {}
  list!: any[];

  currencyValue!: number;
  currency!: string;
  currentLanguage!: ILanguage;
  languageSubscription!: Subscription;
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

    this.list = this.homeService.getList();

    this.languageSubscription = this.languageService.switchLanguage$.subscribe({
      next: (lang) => {
        this.currentLanguage = lang;
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
