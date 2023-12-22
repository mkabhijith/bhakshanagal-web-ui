import { Component, OnInit, OnDestroy } from '@angular/core';
import { HomeService } from './home.service';

import { CountryOrginService } from 'src/app/shared/services/country-orgin.service';
import { Router } from '@angular/router';

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
  ) {}
  list!: any[];

  currencyValue!: number;
  currency!: string;
  ngOnInit() {
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
  }
  ngOnDestroy(): void {}

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
