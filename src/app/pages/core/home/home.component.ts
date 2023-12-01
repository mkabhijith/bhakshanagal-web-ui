import { Component, OnInit, OnDestroy } from '@angular/core';
import { HomeService } from './home.service';
import { LanguageService } from 'src/app/shared/services/language.service';

import { Subscription } from 'rxjs';
import { CountryOrginService } from 'src/app/shared/services/country-orgin.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {


  currentAddIndex = 0;
  adLists: string[] = ['/assets/images/food/Free PSD _ Food menu and restaurant social media cover template.jpg', '/assets/images/food/Free Vector _ Brunch banner template.jpg'
  ];


  constructor(private homeService: HomeService,
    private currencyService: CountryOrginService,private route:Router) { }
  list !: any[];

  currencyValue!: number;
  currency !: string;
  ngOnInit() {
    this.currencyService.switchCountry$.subscribe({
      next: (latestCurrecy) => {
        console.log('LatestCurrecy', latestCurrecy);
        this.currencyValue = latestCurrecy.exchangeRate;
        this.currency = latestCurrecy.currency;
      }
    })


    setInterval(() => {
      this.currentAddIndex++
    }, 3000);


    this.list = this.homeService.getList()



  }

  ngOnDestroy() {

  }

  getPic() {
    if (this.currentAddIndex === this.adLists.length) {
      this.currentAddIndex = 0;
    }
    return this.adLists[this.currentAddIndex]
  }
  navigateProducy(item:number){
    this.route.navigate(['/product', item])
  }
}
