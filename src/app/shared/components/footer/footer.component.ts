import { Component, OnInit } from '@angular/core';
import { ICountry, orginCountry } from '../../types/contry-orgin.type';
import { CountryOrginService } from '../../services/country-orgin.service';
import { ILanguage, SupportedLanguage } from '../../types/language.type';
import { LanguageService } from '../../services/language.service';
import { Subscription } from 'rxjs';
interface City {
  name: string;
  code: string;
}
type IItemList = {
  id: number;
  item: string;
  route?: string;
};

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  constructor(
    private languageService: LanguageService,
    private countryOrginService: CountryOrginService
  ) {}
  getItKnowUS: IItemList[] = [
    { id: 0, item: 'About bhakshanam', route: '/about' },
  ];
  shopWithUs: IItemList[] = [
    { id: 0, item: 'ACCOUNT.YOUR_ACC', route: '/account' },
    { id: 1, item: 'ORDERS.YOUR_ORDERS', route: '/orders' },
    { id: 2, item: 'FOOTER.YOUR_ADD', route: '/address' },
    { id: 0, item: 'FOOTER.YOUR_LIST', route: '/list' },
  ];

  languageSubscription!: Subscription;
  countryOrginSubscription!: Subscription;
  countryArray: ICountry[] = this.countryOrginService.getAllCountry();

  showLanguage = false;
  showCountry = false;

  currentCountry!: ICountry;
  currentLanguage!: ILanguage;
  ngOnInit(): void {
    this.countryOrginSubscription =
      this.countryOrginService.switchCountry$.subscribe({
        next: (latestCountry) => {
          this.currentCountry = latestCountry;
          // this.languageService.changeLanguageTo(this.currentLanguage.id);
        },
      });
    this.languageSubscription = this.languageService.switchLanguage$.subscribe(
      (latestLanguage) => {
        this.currentLanguage = latestLanguage;
      }
    );
  }
  onHideDropdown() {
    this.showLanguage = false;
    this.showCountry = false;
  }
  onLanguageChange(lang: SupportedLanguage) {
    this.onHideDropdown();
    this.languageService.changeLanguageTo(lang);
  }

  onCountryChange(country: orginCountry) {
    this.onHideDropdown();
    this.countryOrginService.changeCountryTo(country);
  }

  onDropdown() {
    this.showLanguage = !this.showLanguage;
    this.showCountry = false;
  }
  onCountryDropdown() {
    this.showCountry = !this.showCountry;
    this.showLanguage = false;
  }
  backToTop(){
    window.scrollTo(0, 0);
 
  }
}
