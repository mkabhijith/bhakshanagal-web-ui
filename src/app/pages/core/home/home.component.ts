import { Component, OnInit, OnDestroy } from '@angular/core';
import { HomeService } from './home.service';
import { LanguageService } from 'src/app/shared/services/language.service';
import { Subscription } from 'rxjs';
import { CurrencyService } from 'src/app/shared/services/currency.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  private languageChangeSubscription!: Subscription;

  currentAdIndex = 0;
  adLists: string[] = ['/assets/images/food/Free PSD _ Food menu and restaurant social media cover template.jpg', '/assets/images/food/Free Vector _ Brunch banner template.jpg',
  ];


  constructor(private homeService: HomeService,
    private languageService: LanguageService,
    private currencyService: CurrencyService) { }
  list !: any[];
  currency !: string;
  ngOnInit() {
    this.languageChangeSubscription =
      this.languageService.switchLanguage$.subscribe({
        next: res => {
          this.currency = res.currency
        }
      })

    setInterval(() => {
      this.currentAdIndex++

      console.log('settimeout works', this.currentAdIndex);
    }, 3000);


    this.list = this.homeService.getList()
    console.log('list', this.list);
    this.currencyService.getcurrencydata('INR').subscribe({
      next: (res) => {
        console.log('currecy', res);

      }
    })

  }

  ngOnDestroy() {
    this.languageChangeSubscription.unsubscribe();

  }

  getPic() {
    if (this.currentAdIndex === this.adLists.length) {
      this.currentAdIndex = 0;
    }
    return this.adLists[this.currentAdIndex]
  }
}
